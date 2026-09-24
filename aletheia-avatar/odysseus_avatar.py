#!/usr/bin/env python3
"""
Aletheia Avatar / Odysseus local runner v0.5

Purpose
-------
- serve the local controller;
- stage private media only on this computer;
- discover configured local/cloud adapters;
- enforce the £0 automatic ceiling and upload approval gates;
- execute the local LivePortrait -> MuseTalk presenter test when configured;
- write evidence receipts and never claim VERIFIED automatically.

This runner binds to 127.0.0.1 only.
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from email.parser import BytesParser
from email import policy
import datetime
import json
import os
import re
import shutil
import subprocess
import sys
import urllib.parse
import uuid

BASE = Path(__file__).resolve().parent
JOBS = BASE / "jobs"
OUTPUTS = BASE / "outputs"
JOBS.mkdir(exist_ok=True)
OUTPUTS.mkdir(exist_ok=True)

HOST = "127.0.0.1"
MAX_UPLOAD = 512 * 1024 * 1024  # 512 MB local staging limit
ALLOWED_FACTORS = {0.0, 0.5, 1.0}


def load_env():
    p = BASE / ".env"
    if not p.exists():
        return
    for raw in p.read_text(encoding="utf-8").splitlines():
        raw = raw.strip()
        if not raw or raw.startswith("#") or "=" not in raw:
            continue
        key, value = raw.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


load_env()
PORT = int(os.getenv("ALETHEIA_AVATAR_PORT", "8765"))
PROVIDERS = json.loads((BASE / "providers.json").read_text(encoding="utf-8"))


def utc_now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def safe_name(name):
    name = Path(name or "asset.bin").name
    name = re.sub(r"[^A-Za-z0-9._-]+", "_", name).strip("._")
    return name[:160] or "asset.bin"


def configured_path(name):
    raw = os.getenv(name, "").strip()
    if not raw:
        return None
    try:
        return Path(raw).expanduser().resolve()
    except Exception:
        return None


def command_exists(value):
    if not value:
        return False
    p = Path(value).expanduser()
    if p.is_file():
        return True
    return shutil.which(value) is not None


def python_for(env_name):
    value = os.getenv(env_name, "").strip()
    return value or sys.executable


def ffmpeg_status():
    value = os.getenv("FFMPEG_BIN", "").strip() or "ffmpeg"
    return {"configured": command_exists(value), "command": value}


def local_status():
    lp = configured_path("LIVEPORTRAIT_DIR")
    mt = configured_path("MUSETALK_DIR")
    lp_ok = bool(lp and (lp / "inference.py").is_file())
    mt_ok = bool(mt and (mt / "scripts" / "inference.py").is_file())
    ff = ffmpeg_status()
    return {
        "ready": bool(lp_ok and mt_ok and ff["configured"]),
        "liveportrait": {
            "ready": lp_ok,
            "dir": str(lp) if lp else None,
            "python": python_for("LIVEPORTRAIT_PYTHON"),
        },
        "musetalk": {
            "ready": mt_ok,
            "dir": str(mt) if mt else None,
            "python": python_for("MUSETALK_PYTHON"),
        },
        "ffmpeg": ff,
    }


def provider_connected(p):
    if p.get("id") == "local_presenter":
        return local_status()["ready"]
    return all(bool(os.getenv(k, "").strip()) for k in p.get("requires", []))


def classify(job):
    kind = job.get("kind", "talk")
    return {
        "talk": "talking_avatar",
        "replace": "character_replacement",
        "motion": "motion_transfer",
        "scene": "image_to_video",
        "alt": "image_to_video",
        "other": "custom",
    }.get(kind, "custom")


def compatibility(task):
    aliases = {
        "talking_avatar": {"talking_avatar", "portrait_animation", "lip_sync", "video_generation"},
        "character_replacement": {"character_replacement", "video_remix"},
        "motion_transfer": {"motion_transfer", "video_remix", "portrait_animation"},
        "image_to_video": {"image_to_video", "scene_generation", "video_generation"},
        "custom": {"custom", "video_generation", "multi_model_gateway"},
    }
    wanted = aliases.get(task, {task})
    return [p for p in PROVIDERS["providers"] if wanted.intersection(set(p.get("supports", [])))]


def route(job):
    task = classify(job)
    requested = job.get("engine", "auto")
    candidates = compatibility(task)
    if requested != "auto":
        candidates = [p for p in candidates if p.get("id") == requested]
    # local and connected first; cloud adapters remain optional
    ranked = sorted(
        candidates,
        key=lambda p: (
            p.get("third_party_upload", True),
            not provider_connected(p),
            p.get("id", ""),
        ),
    )
    return task, (ranked[0] if ranked else None), candidates


def factor_mapping(value):
    f = float(value)
    if f not in ALLOWED_FACTORS:
        raise ValueError("gesticulation_factor must be 0, 0.5 or 1")
    if f == 0.0:
        return {
            "factor": 0.0,
            "label": "FACE ONLY",
            "animation_region": "exp",
            "driving_multiplier": 1.0,
            "meaning": "Facial emotion retained; inherited pose/body movement suppressed as far as the portrait adapter supports.",
        }
    if f == 0.5:
        return {
            "factor": 0.5,
            "label": "RESTRAINED",
            "animation_region": "all",
            "driving_multiplier": 0.5,
            "meaning": "Facial emotion retained; head/pose motion reduced.",
        }
    return {
        "factor": 1.0,
        "label": "ORIGINAL PERFORMANCE",
        "animation_region": "all",
        "driving_multiplier": 1.0,
        "meaning": "Preserve as much reference portrait motion as the adapter/crop supports.",
    }


def parse_multipart(handler):
    length = int(handler.headers.get("Content-Length", "0"))
    if length <= 0:
        raise ValueError("empty request")
    if length > MAX_UPLOAD:
        raise ValueError("local staging request exceeds 512 MB")
    ctype = handler.headers.get("Content-Type", "")
    if "multipart/form-data" not in ctype:
        raise ValueError("expected multipart/form-data")
    raw = handler.rfile.read(length)
    prefix = (
        f"Content-Type: {ctype}\r\n"
        "MIME-Version: 1.0\r\n\r\n"
    ).encode("utf-8")
    msg = BytesParser(policy=policy.default).parsebytes(prefix + raw)
    fields = {}
    files = {}
    for part in msg.iter_parts():
        name = part.get_param("name", header="content-disposition")
        if not name:
            continue
        filename = part.get_filename()
        payload = part.get_payload(decode=True) or b""
        if filename:
            files[name] = (safe_name(filename), payload, part.get_content_type())
        else:
            charset = part.get_content_charset() or "utf-8"
            fields[name] = payload.decode(charset, errors="replace")
    return fields, files


def save_manifest(job_dir, manifest):
    (job_dir / "manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def load_manifest(job_id):
    if not re.fullmatch(r"[0-9a-f-]{36}", job_id or ""):
        raise ValueError("invalid job id")
    job_dir = (JOBS / job_id).resolve()
    if JOBS.resolve() not in job_dir.parents:
        raise ValueError("invalid job path")
    manifest_path = job_dir / "manifest.json"
    if not manifest_path.is_file():
        raise FileNotFoundError("job manifest not found")
    return job_dir, json.loads(manifest_path.read_text(encoding="utf-8"))


def run_logged(cmd, cwd, env=None, timeout=3600):
    result = subprocess.run(
        cmd,
        cwd=str(cwd),
        env=env,
        capture_output=True,
        text=True,
        timeout=timeout,
        check=False,
    )
    log = {
        "command": [str(x) for x in cmd],
        "returncode": result.returncode,
        "stdout_tail": (result.stdout or "")[-6000:],
        "stderr_tail": (result.stderr or "")[-6000:],
    }
    if result.returncode != 0:
        raise RuntimeError(json.dumps(log, indent=2))
    return log


def newest_generated_mp4(folder, exclude_concat=False):
    files = list(Path(folder).rglob("*.mp4"))
    if exclude_concat:
        files = [p for p in files if "_concat" not in p.stem]
    if not files:
        return None
    return max(files, key=lambda p: p.stat().st_mtime)


def execute_local_presenter(job_dir, manifest):
    status = local_status()
    if not status["ready"]:
        raise RuntimeError("Local presenter tools are not configured. Check .env and /api/providers.")

    assets = manifest.get("assets", {})
    required = ["identity", "performance", "voice"]
    missing = [r for r in required if not assets.get(r, {}).get("path")]
    if missing:
        raise RuntimeError("Missing required staged assets: " + ", ".join(missing))

    mapping = factor_mapping(manifest.get("gesticulation_factor", 0))
    lp_dir = Path(status["liveportrait"]["dir"])
    mt_dir = Path(status["musetalk"]["dir"])
    identity = job_dir / assets["identity"]["path"]
    performance = job_dir / assets["performance"]["path"]
    voice = job_dir / assets["voice"]["path"]

    lp_out = job_dir / "liveportrait"
    mt_out = job_dir / "musetalk"
    lp_out.mkdir(exist_ok=True)
    mt_out.mkdir(exist_ok=True)

    lp_cmd = [
        status["liveportrait"]["python"],
        "inference.py",
        "-s", str(identity),
        "-d", str(performance),
        "-o", str(lp_out),
        "--flag_crop_driving_video",
        "--animation_region", mapping["animation_region"],
        "--driving_option", "expression-friendly",
        "--driving_multiplier", str(mapping["driving_multiplier"]),
    ]
    lp_log = run_logged(lp_cmd, lp_dir)
    animated = newest_generated_mp4(lp_out, exclude_concat=True)
    if not animated:
        raise RuntimeError("LivePortrait completed but no non-concat MP4 was found.")

    # MuseTalk accepts a small YAML task file containing video_path and audio_path.
    mt_cfg = job_dir / "musetalk-job.yaml"
    mt_cfg.write_text(
        "task_0:\n"
        f"  video_path: {json.dumps(str(animated))}\n"
        f"  audio_path: {json.dumps(str(voice))}\n",
        encoding="utf-8",
    )

    mt_cmd = [
        status["musetalk"]["python"],
        "-m", "scripts.inference",
        "--inference_config", str(mt_cfg),
        "--result_dir", str(mt_out),
        "--unet_model_path", "models/musetalkV15/unet.pth",
        "--unet_config", "models/musetalkV15/musetalk.json",
        "--version", "v15",
    ]

    child_env = os.environ.copy()
    ffmpeg_cmd = status["ffmpeg"]["command"]
    if Path(ffmpeg_cmd).expanduser().is_file():
        ffmpeg_parent = str(Path(ffmpeg_cmd).expanduser().resolve().parent)
        child_env["PATH"] = ffmpeg_parent + os.pathsep + child_env.get("PATH", "")

    mt_log = run_logged(mt_cmd, mt_dir, env=child_env)
    final_candidate = newest_generated_mp4(mt_out, exclude_concat=False)
    if not final_candidate:
        raise RuntimeError("MuseTalk completed but no MP4 result was found.")

    final_name = f"{job_dir.name}-presenter.mp4"
    final_path = OUTPUTS / final_name
    shutil.copy2(final_candidate, final_path)

    return {
        "mapping": mapping,
        "liveportrait_output": str(animated),
        "final_output": str(final_path),
        "output_url": f"/outputs/{final_name}",
        "logs": {"liveportrait": lp_log, "musetalk": mt_log},
    }


class Handler(SimpleHTTPRequestHandler):
    def safe_target(self, path):
        path = urllib.parse.urlparse(path).path
        if path == "/":
            path = "/controller.htm"
        rel = urllib.parse.unquote(path).lstrip("/")
        target = (BASE / rel).resolve()
        base = BASE.resolve()
        if target != base and base not in target.parents:
            return base / "__not_found__"
        return target

    def translate_path(self, path):
        return str(self.safe_target(path))

    def send_json(self, obj, code=200):
        data = json.dumps(obj, indent=2, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0"))
        if length > 1024 * 1024:
            raise ValueError("JSON request too large")
        return json.loads(self.rfile.read(length) or b"{}")

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/providers":
            out = []
            for p in PROVIDERS["providers"]:
                q = dict(p)
                q["connected"] = provider_connected(p)
                q.pop("requires", None)
                out.append(q)
            return self.send_json({
                "providers": out,
                "cost_ceiling_gbp": PROVIDERS["cost_ceiling_gbp"],
                "local": local_status(),
            })
        if parsed.path == "/api/job":
            qs = urllib.parse.parse_qs(parsed.query)
            try:
                _, manifest = load_manifest((qs.get("id") or [""])[0])
                return self.send_json(manifest)
            except Exception as e:
                return self.send_json({"error": str(e)}, 404)
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        try:
            if parsed.path == "/api/plan":
                job = self.read_json()
                task, pick, candidates = route(job)
                state = "READY" if pick and provider_connected(pick) else "PLANNED"
                if pick and pick.get("third_party_upload"):
                    state = "APPROVAL_REQUIRED"
                return self.send_json({
                    "task": task,
                    "selected": pick.get("id") if pick else None,
                    "selected_connected": provider_connected(pick) if pick else False,
                    "compatible": [
                        {"id": p.get("id"), "connected": provider_connected(p), "third_party_upload": p.get("third_party_upload", True)}
                        for p in candidates
                    ],
                    "gesticulation": factor_mapping(job.get("gesticulation_factor", 0)),
                    "status": state,
                    "privacy": {"third_party_upload": "NOT_AUTHORISED"},
                })

            if parsed.path == "/api/stage":
                fields, incoming = parse_multipart(self)
                factor = factor_mapping(fields.get("gesticulation_factor", "0"))
                job_id = str(uuid.uuid4())
                job_dir = JOBS / job_id
                job_dir.mkdir(parents=True, exist_ok=False)

                assets = {}
                role_rules = {
                    "identity": True,
                    "performance": True,
                    "voice": True,
                    "provenance": False,
                }
                for role, generation_input in role_rules.items():
                    if role not in incoming:
                        continue
                    filename, payload, content_type = incoming[role]
                    stored = f"{role}-{filename}"
                    (job_dir / stored).write_bytes(payload)
                    assets[role] = {
                        "original_filename": filename,
                        "path": stored,
                        "content_type": content_type,
                        "size_bytes": len(payload),
                        "generation_input": generation_input,
                    }

                manifest = {
                    "aletheia_receipt": {
                        "id": job_id,
                        "created_utc": utc_now(),
                        "status": "STAGED",
                        "task": classify({"kind": fields.get("kind", "talk")}),
                        "engine_requested": fields.get("engine", "local_presenter"),
                        "engine_selected": "local_presenter",
                        "cost": {"maximum_authorised_gbp": 0.0, "known_actual_cost_gbp": 0.0},
                        "identity": {
                            "anchors": fields.get("anchors", ""),
                            "fidelity": "UNTESTED",
                        },
                        "performance": {
                            "gesticulation_factor": factor["factor"],
                            "mode": factor["label"],
                            "adapter_mapping": factor,
                        },
                        "voice": {
                            "state": fields.get("voice_state", "SYNTHETIC_NARRATOR"),
                            "historical_voice_authenticity": fields.get("historical_voice_authenticity", "NOT_CLAIMED"),
                        },
                        "assets": assets,
                        "script": fields.get("script", ""),
                        "privacy": {
                            "processing": "LOCAL",
                            "third_party_upload": "NOT_AUTHORISED",
                            "provenance_used_for_generation": False,
                        },
                        "generated": [],
                        "verified": [],
                        "next_action": "Create the local short test when local tools are ready.",
                    },
                    "gesticulation_factor": factor["factor"],
                    "assets": assets,
                    "script": fields.get("script", ""),
                    "anchors": fields.get("anchors", ""),
                }
                save_manifest(job_dir, manifest)
                return self.send_json({
                    "job_id": job_id,
                    "manifest": manifest,
                    "local": local_status(),
                })

            if parsed.path == "/api/execute":
                req = self.read_json()
                job_dir, manifest = load_manifest(req.get("job_id"))
                receipt = manifest["aletheia_receipt"]
                receipt["status"] = "SUBMITTED"
                receipt["next_action"] = "Local LivePortrait -> MuseTalk test running."
                save_manifest(job_dir, manifest)
                try:
                    result = execute_local_presenter(job_dir, manifest)
                    receipt["status"] = "GENERATED"
                    receipt["generated"] = [result["output_url"]]
                    receipt["adapter_result"] = result
                    receipt["next_action"] = "Inspect the generated video for identity and motion fidelity before marking PASS/VERIFIED."
                    save_manifest(job_dir, manifest)
                    return self.send_json({"job_id": job_dir.name, "result": result, "receipt": receipt})
                except Exception as e:
                    receipt["status"] = "FAILED"
                    receipt["error"] = str(e)
                    receipt["next_action"] = "Fix the reported local tool/input problem and retry; no VERIFIED state was claimed."
                    save_manifest(job_dir, manifest)
                    return self.send_json({"job_id": job_dir.name, "receipt": receipt, "error": str(e)}, 500)

            return self.send_json({"error": "not found"}, 404)
        except Exception as e:
            return self.send_json({"error": str(e)}, 400)


if __name__ == "__main__":
    print(f"Aletheia Avatar / Odysseus local runner: http://{HOST}:{PORT}")
    print("Private media stays in local ignored jobs/ and outputs/ folders.")
    print("No cloud upload is authorised by this runner.")
    ThreadingHTTPServer((HOST, PORT), Handler).serve_forever()
