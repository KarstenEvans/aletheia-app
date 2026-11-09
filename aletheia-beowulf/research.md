# Aletheia Beowulf | Stage 01: Research and architecture

- **Date checked:** 9 November 2026
- **Status:** RESEARCHED / DRAFT DESIGN; no mixed-hardware AI farm deployed or benchmarked
- **Project:** Aletheia Apps (`KarstenEvans/aletheia-app`), proposed folder `aletheia-beowulf/`
- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs evidence, provenance, uncertainty and human control.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) provides optional appropriate humour; it does not override evidence.

## Result

**Decision:** Build a small, provider-neutral, local-first cluster workbench with an *animation/render farm* as its first demonstrable output. Reuse existing inference/rendering systems through versioned adapters instead of reverse engineering source that is already open. Keep generation, animation, compositing and rendering as distinct jobs so old hardware can contribute usefully.

**What already exists (source-verified):**

| Component | What the upstream project demonstrates | Licence / boundary | Integration recommendation |
|---|---|---|---|
| [PrivateLM](https://github.com/orailnoor/cross-platform-llm-client) | Android/iOS on-device LLMs, optional phone-layer split and OpenAI-style local API | MIT; model licences separate | Link/test, not fork |
| [DistAI](https://github.com/alex8819/DistAi) | llama.cpp RPC across Android phones, PC/Raspberry Pi; mixed-device LLM layer sharing | MIT (consult THIRD_PARTY_NOTICES) | Best candidate for heterogeneous LLM adapters |
| [PhoneBorg](https://github.com/dzaczek/phoneborg) | ADB provisioning, phone job pools, session routing, model placement and distributed larger LLMs; author reports real-phone benchmarks | Apache-2.0; v0 proof of concept, some endpoints unauthenticated | Study scheduler and provisioning, do not expose to public networks |
| [Android llama.cpp RPC node](https://github.com/adil-adysh/llama-cpp-android-node) | Experimental Android ARM CPU/Vulkan RPC; sample USB and Wi-Fi benchmarks | MIT | Investigate GPU/USB benchmarking |
| [stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) | C/C++ local diffusion inference on multiple backends | MIT; image model licences vary | Candidate native image worker for capable phones/PCs |
| [Local Dream](https://github.com/xororz/local-dream) | Android SD 1.5/SDXL NPU and CPU/GPU modes | **Check actual repository LICENSE** and model/Qualcomm dependencies before reuse; non-commercial restrictions may apply | Prefer external integration only pending licence review |
| [Blender Flamenco](https://flamenco.blender.org/) | Production desktop render-manager and worker model | GPL-3.0+; license obligations if copying/linking code | Use as separate service / conceptual model |
| [RIFE](https://github.com/hzwer/ECCV2022-RIFE) | Frame interpolation between rendered/generated keyframes | MIT code; model-weights terms must be checked | Optional interpolation worker |
| [FFmpeg](https://ffmpeg.org/) | Compositing/encoding finished frames | LGPL/GPL depends on build and codecs | External executable invoked only after user install and explicit command |

**Not yet demonstrated:** Distributing a single diffusion image model across heterogeneous Android and PC nodes, zero-touch USB provisioning of arbitrary broken-screen phones, genuinely faster image generation on a farm versus one modern GPU, or direct hardware discovery from a static GitHub Pages site.

## Proposed architecture

1. **Static Aletheia browser workbench:** manual devices, constraints, model/software catalogue, job-graph planner, render-demo preview, downloadable JSON and Markdown plan. No hidden device scanning, no remote API, no credential storage.
2. **Local controller (future):** only user-installed on a computer; `127.0.0.1` by default; API authentication when allowed on LAN; persistent jobs with statuses, checksums, retries and receipts. GitHub Pages does not directly control private devices.
3. **Workers (future):** separate adapters for a `llama.cpp` RPC node, an image generator (e.g. stable-diffusion.cpp), a 2D frame renderer, an interpolation engine, an FFmpeg compositor, a Blender/Flamenco 3D renderer. Workers advertise measured capabilities, thermal/battery status, memory and supported engines.
4. **Dataflow:** one scene description -> key art/foreground masks and background -> key poses -> independently rendered frame ranges or layers -> optional interpolation -> deterministic compositing -> encode. Generate full images only when scene structure requires it.
5. **Scheduler:** only assign a task when the node has the appropriate backend; place latency-sensitive stages locally; balance by benchmarked time rather than storage size; respect RAM headroom, thermal limits, network throughput and human costs.

### Early protocol shape (`aletheia.beowulf.plan.v0.1`)

```json
{
  "schema": "aletheia.beowulf.plan.v0.1",
  "project": "AI-PI dance test",
  "frames": 48,
  "fps": 12,
  "nodes": [{"id":"old-pc","kind":"pc","ram_gb":8,"capabilities":["cpu","2d-render","encode"]}],
  "jobs": [{"id":"frames-0-23","kind":"2d-render","start":0,"end":23,"node":"old-pc","status":"planned"}],
  "execution": "manual-plan-only"
}
```

Never confuse the planner's *estimated* hardware capabilities with discovered or measured data.

## Amiga principle and render farm principle

- **Palette cycling:** changes selected colours in an existing image. Zero extra diffusion passes.
- **Sprite/rig transforms:** move objects across a fixed background without re-creating every background pixel.
- **Keyframes + interpolation:** calculate exceptional poses only, then synthesize transitions; quality depends on occlusion and motion.
- **Traditional render farm:** allocate whole frames or independent layers to workers, avoiding high-bandwidth per-layer communication.
- **Compositing:** deterministic assembly and consistent colour-space / alpha handling on coordinator.

## Reverse engineering and licences

Prefer public APIs, documented file formats, source inspection and clean interface adapters. Do **not** copy incompatible GPL-licensed code into a permissively licensed client or assume a model's weights are freely redistributable. In the UK, Copyright, Designs and Patents Act 1988 s50B permits certain limited decompilation for necessary interoperability of independently created programs when information is not readily available; it is not blanket authorisation to decompile or redistribute software. Source: https://www.legislation.gov.uk/ukpga/1988/48/part/I/chapter/III . For open-source projects inspect the actual upstream licence and build from source first.

## Engineering gates

- **P0:** Working static planning UI, downloadable plan, self-contained preview. No device access or AI claims.
- **P1:** Deterministic portable frame renderer, one PC, frame-range output and FFmpeg assembly, measured speed/energy.
- **P2:** Two workers (old PC + newer PC or phone via Termux if supported), safe controller, idempotent jobs and checksum-based merge.
- **P3:** Integrate at least one real image model, compare one-device vs concurrent model jobs with same output settings.
- **P4:** LLM backend with DistAI/PhoneBorg adapter; phone GPU/NPU acceleration tested on actual hardware.
- **P5 research:** Single diffusion model sharded across heterogeneous devices only if benchmarks justify it.

**Kill criteria:** Devices overheat, battery integrity unclear, licensing doesn't permit intended use, >2× time/power versus a lone compatible worker for the same output, or user setup too complicated for a free-first public app.

## Provenance and verification

Sources checked 9 November 2026: project README/licences and above official links, Aletheia Apps repository `AGENTS.md`, `ALETHEIA-SAFE-BOOTSTRAP.md`, `README.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `ideas.md`, `tasks.md`, `shared/README.md`, `shared/link-sprites.json`, and an existing Three.js animation HTML. User-supplied video description was treated as a claim, not an independently run benchmark.

**Tests performed for this stage:** source inspection, architecture review. **Not performed:** live phone benchmarks, browser device tests, worker interoperability or deployment.

## Resume

Continue in `KarstenEvans/aletheia-app`, branch `main` as source baseline, create **new** `aletheia-beowulf/` files in a review branch. Do not merge/deploy without the owner's later approval. Build the smallest browser planner and Python deterministic renderer, validate, and checkpoint Stage 02 with exact paths, SHAs, tests and unresolved items.