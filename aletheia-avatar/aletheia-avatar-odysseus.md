# Aletheia Avatar + Odysseus Automation

Version: 05-working
Status: Local presenter execution path added on working branch

## Purpose

Move Aletheia Avatar from a prompt-only planner toward:

**Choose result → assign asset roles → choose AUTO/local route → stage locally → execute shortest test → Aletheia verifies → return output**

The canonical `main` version remains unchanged until the working copy is approved.

## Roles

- **Aletheia**: truth/evidence state, identity checks, provenance and receipts.
- **Odysseus**: capability discovery, routing, execution, polling/fallback.
- **Thalia**: creative concepts and performance treatments.
- **Avatar**: job definition and user-facing workflow.

## Asset roles

- IDENTITY
- PERFORMANCE
- VOICE
- SCRIPT
- PROVENANCE

PROVENANCE is not a generation input unless the user explicitly changes its role.

## Gesticulation / pose transfer

The app exposes three semantic values:

- `0` FACE ONLY
- `0.5` RESTRAINED
- `1` ORIGINAL PERFORMANCE

Facial emotion remains eligible at all values.

Current LivePortrait mapping:

| Factor | animation_region | driving_multiplier | Intent |
|---|---|---:|---|
| 0 | exp | 1.0 | facial expression only; suppress reference pose/body transfer |
| 0.5 | all | 0.5 | facial expression + reduced portrait pose |
| 1 | all | 1.0 | full reference portrait motion |

This is portrait-motion control, not a promise that LivePortrait will reproduce off-crop hands or full-body gestures.

## Local presenter adapter

The working local pipeline is:

`IDENTITY → LivePortrait(PERFORMANCE) → MuseTalk(VOICE) → local MP4`

Configuration lives in `.env`:

- `LIVEPORTRAIT_DIR`
- `LIVEPORTRAIT_PYTHON`
- `MUSETALK_DIR`
- `MUSETALK_PYTHON`
- optional `FFMPEG_BIN`

No private source media or keys are stored in GitHub.

## Local stages

1. Start `python odysseus_avatar.py`.
2. Open `http://127.0.0.1:8765/`.
3. Select IDENTITY, PERFORMANCE and exportable VOICE files.
4. Optionally select PROVENANCE.
5. Choose gesticulation factor.
6. Click **STAGE + PLAN**.
7. Media is copied into the ignored local `jobs/<uuid>/` folder.
8. If LivePortrait, MuseTalk and FFmpeg are configured, **CREATE LOCAL TEST** becomes available.
9. LivePortrait creates a portrait-performance MP4.
10. MuseTalk applies the supplied voice/audio.
11. Final MP4 is copied into ignored local `outputs/`.
12. Receipt becomes GENERATED, never VERIFIED.
13. Human/vision review checks identity and motion before PASS/VERIFIED.

## Approval gates

Default automatic spend: **£0.00**.

Stop before:
- local model/tool installation;
- any third-party media upload;
- paid inference;
- voice cloning;
- publishing;
- changing provenance-only media into an execution input.

The v05 local runner itself does not execute cloud uploads.

## Reality states

- PLANNED
- READY
- APPROVAL_REQUIRED
- STAGED
- SUBMITTED
- GENERATED
- VERIFIED
- FAILED

A prepared command is not GENERATED. A created video is not automatically VERIFIED.

## Dad Presenter Test 001

- IDENTITY: original monochrome portrait.
- PERFORMANCE: shorter emotional AI/CapCut clip.
- PROVENANCE: longer CapCut/source clip.
- VOICE: Aletheia Storyteller UK-male narrator audio when an exportable audio asset exists.
- historical_voice_authenticity: NOT_CLAIMED.
- target length: 8–15 seconds.
- start at gesticulation 0.
- compare 0.5 and 1 only if useful.
- keep Test 001 monochrome to remove colour drift as a variable.

## Known limitation: Storyteller browser voice

Aletheia Storyteller currently selects an available browser/OS voice. The Web Speech API does not itself provide a portable WAV export. Therefore:

- browser speech can preview the desired narrator profile;
- actual Avatar generation needs an exportable audio file;
- do not claim an exact stable Storyteller voice unless that rendered audio was captured and stored;
- a future local TTS profile may make the narrator reproducible.

## Security

- runner binds to `127.0.0.1`;
- `.env`, `jobs/` and `outputs/` are ignored;
- staged filenames are sanitised;
- browser-supplied paths are not trusted;
- cloud upload is not authorised by selecting a file;
- provider credentials never enter browser JavaScript.

## Current status

Built on working branch:
- v04 Markdown backup;
- v05 spec;
- page/QA contract;
- updated static planner;
- provider manifest v2;
- local controller;
- local Python runner;
- safe environment template.

Still requires device test:
- local LivePortrait install;
- local MuseTalk install;
- FFmpeg;
- an exportable UK narrator audio file;
- actual Dad Presenter output review.
