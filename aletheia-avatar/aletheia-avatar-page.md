# Aletheia Avatar browser page

Status: WORKING COPY v05
Canonical public URL: not changed in this branch
Rendered file: `aletheia-avatar.htm`
Primary specification: `aletheia-avatar.md`
Local execution UI: `controller.htm`
Local runner: `odysseus_avatar.py`
Provider manifest: `providers.json`
Resource page: `aletheia-avatar-rsc.htm`
Last reviewed: 2026-09-24

## Purpose

Aletheia Avatar helps a person turn identity media, a performance reference, voice/audio and a script into the smallest suitable avatar/video workflow while keeping identity, provenance, cost and privacy explicit.

The public HTML remains useful as a planner without any AI service. The local controller is the enhanced execution path.

## Source of truth and reading order

1. `../AGENTS.md`
2. `../aletheia-GUI.md`
3. `../aletheia-dev.md`
4. `../aletheia-code.md`
5. `aletheia-avatar.md`
6. this page contract
7. `providers.json`
8. current HTML/controller/runner
9. resource page

The backup `aletheia-avatar.md.back` is an exact preservation copy of v04 and is not an editable source of truth.

## Actual page order

Public planner:
1. identity / system badges and title;
2. requested result;
3. asset-role inputs;
4. identity anchors;
5. performance / gesticulation control;
6. voice/script;
7. scene/style;
8. test-plan action;
9. route, test prompt and receipt;
10. resources / local-runner guidance.

Local controller:
1. local-runner status;
2. identity/performance/voice/provenance files;
3. script and identity anchors;
4. gesticulation slider;
5. engine selection;
6. stage/plan;
7. explicit execute action;
8. receipt, logs and local result link.

## Inputs and stored state

Public page:
- file selectors are descriptive only and must not upload automatically;
- no private media is stored by the static page;
- text fields remain browser-local unless the user explicitly copies/exports them.

Local controller:
- IDENTITY image;
- PERFORMANCE video;
- optional VOICE audio;
- optional PROVENANCE media;
- SCRIPT text;
- identity anchors;
- gesticulation factor: 0, 0.5 or 1;
- engine: AUTO/local/cloud/manual where supported.

Local staging goes only into ignored `jobs/` folders. Generated local files go into ignored `outputs/`.

## Asset-role contract

Allowed primary roles:
- IDENTITY
- PERFORMANCE
- VOICE
- SCRIPT
- PROVENANCE

PROVENANCE is never passed into an execution adapter unless the user deliberately changes its role.

## Gesticulation contract

The UI label is **Gesticulation / pose transfer**.

Exactly three values:
- 0: FACE ONLY;
- 0.5: RESTRAINED;
- 1: ORIGINAL PERFORMANCE.

Facial emotion remains eligible at all settings. The control primarily governs transfer of pose/body/large movement.

Adapter mapping must be documented. Unsupported fine control is reported as PARTIAL, never silently simulated.

Current LivePortrait mapping:
- 0 => `animation_region=exp`, `driving_multiplier=1.0`
- 0.5 => `animation_region=all`, `driving_multiplier=0.5`
- 1 => `animation_region=all`, `driving_multiplier=1.0`

Because LivePortrait is portrait-oriented, 1 means full reference **portrait** motion, not guaranteed full-body/hand transfer.

## Data/parsing contract

The public planner emits a human-readable route and JSON/YAML-like receipt.

The local runner creates a per-job manifest with:
- job id and UTC timestamp;
- asset filenames and roles;
- gesticulation factor;
- identity anchors;
- script;
- provider/adapter choice;
- approval state;
- generated result path;
- logs/errors.

Never infer generated/verified state from a prepared command.

## Required controls and exact behaviour

Public planner:
- job-choice buttons;
- local file selectors for role awareness;
- gesticulation range `min=0 max=1 step=0.5`;
- visible text label for the three settings;
- BUILD ROUTE + TEST PROMPT;
- copy route/prompt/receipt;
- NEW;
- resources link;
- local execution guidance.

Local controller:
- file pickers;
- same gesticulation slider and labels;
- STAGE + PLAN;
- CREATE LOCAL TEST;
- engine selector;
- explicit status/receipt;
- no cloud upload control becomes enabled without an approval step.

## Navigation/window behaviour

Normal app navigation may remain in the current window.

External resources may open separately where useful. One click opens one destination.

The local controller is expected to run at `http://127.0.0.1:8765/` when started by the Python runner.

## Browser/device capability matrix

Baseline:
- static planner works on modern Chromium, Firefox and Safari/WebKit;
- keyboard-operable controls;
- mobile layout;
- no AI dependency.

Enhanced local execution:
- desktop computer with Python;
- configured local portrait/lip-sync tools;
- FFmpeg;
- sufficient model/GPU/CPU capability for selected local tools.

A phone/browser alone is not promised to run local model inference.

## External dependencies

Optional local:
- LivePortrait;
- MuseTalk;
- FFmpeg;
- their models/runtime dependencies.

Optional cloud:
- providers listed in `providers.json`, rechecked before use.

Failure of an optional dependency must leave the planner usable.

## Accessibility / reduced motion

- semantic labels;
- keyboard-accessible buttons/slider;
- slider value also displayed as text;
- no information only by colour;
- readable focus state;
- no decorative animation required to use the app.

## AI / agent authority

Default authority: READ / DRAFT / LOCAL REVERSIBLE WRITE.

Local execution may stage private files and create generated media in ignored local folders only after the user clicks the action.

Cloud upload, payment, voice cloning and publishing are EXTERNAL / CONSEQUENTIAL actions and require explicit approval.

## Persistence / resume behaviour

Each local job has its own folder and manifest. A failed run should retain the manifest/log and staged local inputs unless the user deletes the job.

Execution should be repeatable from the same manifest without re-uploading private family media.

## Security / privacy

- no API keys in HTML, JavaScript or GitHub;
- `.env`, `jobs/` and `outputs/` remain ignored;
- local runner binds to `127.0.0.1`;
- filenames are sanitised before staging;
- no arbitrary path traversal from browser fields;
- third-party media upload defaults to NO;
- private family media is never committed.

## Dad Presenter Test 001 acceptance

Inputs:
- original monochrome portrait = IDENTITY;
- shorter emotional generated clip = PERFORMANCE;
- longer CapCut/source clip = PROVENANCE only;
- UK male narrator audio = VOICE when exportable audio exists;
- short warm-presenter script.

Generate 8–15 seconds.

Test three gesticulation states if practical while keeping other variables constant:
- 0;
- 0.5;
- 1.

Review:
- face/age identity;
- eyes/blinking;
- cheeks/brow/wrinkles;
- smile/mouth;
- ears/hair;
- monochrome/colour drift;
- lip-sync;
- head/pose movement;
- unwanted gesture transfer;
- temporal jitter;
- A/V sync.

PASS requires visual inspection. Process completion alone is not PASS.

## Acceptance tests

STATIC:
- HTML has unique IDs;
- JavaScript parses;
- JSON provider manifest parses;
- Python runner parses;
- no secret values;
- backup file exactly matches v04 source content;
- gesticulation values are only 0/0.5/1.

LOCAL BROWSER:
- planner works with runner absent;
- controller shows missing-tool state honestly;
- staging saves only to ignored job folders;
- no execution occurs merely by selecting files;
- execution refuses missing required assets/tools;
- result state is never GENERATED without a local output file.

DEVICE/LIVE:
- not claimed until separately tested.

## Change log / unresolved issues

2026-09-24:
- v04 backed up as `aletheia-avatar.md.back` on working branch;
- added explicit IDENTITY / PERFORMANCE / VOICE / SCRIPT / PROVENANCE roles;
- added three-state gesticulation control;
- specified Dad Presenter Test 001;
- restored the local Odysseus execution direction.

Unresolved:
- exact reusable Storyteller browser voice is not automatically exportable as WAV;
- local LivePortrait/MuseTalk installation and hardware performance require device testing;
- cloud provider pricing/privacy must be rechecked at time of use;
- no merge to `main` until approved.
