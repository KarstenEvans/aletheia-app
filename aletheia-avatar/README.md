# Aletheia Avatar

Aletheia + Odysseus + Thalia avatar and video orchestration.

## v05 working copy

This branch extends the existing v04 without changing `main`.

Key additions:
- explicit **IDENTITY / PERFORMANCE / VOICE / SCRIPT / PROVENANCE** roles;
- three-state **Gesticulation / pose transfer** control: 0, 0.5, 1;
- local-first Dad Presenter route using LivePortrait + MuseTalk;
- private-media approval gates;
- resumable local job receipts;
- a proper page/reconstruction contract.

The exact v04 Markdown is preserved as:

`aletheia-avatar.md.back`

## Planner

Open:

`aletheia-avatar.htm`

The planner does not upload selected files. It builds a route, prompt and receipt.

## Local controller

Copy `.env.example` to `.env`, configure local tool paths, then run:

`python odysseus_avatar.py`

Open:

`http://127.0.0.1:8765/`

Local jobs and outputs stay in ignored `jobs/` and `outputs/` folders.

## Required local components for presenter generation

- LivePortrait
- MuseTalk 1.5
- FFmpeg

The runner does not install these automatically. Installation is a separate approval step.

## Important voice note

Storyteller's UK male narrator is currently a browser/OS voice preference, not a guaranteed portable audio model. Avatar generation requires an exportable audio file. Browser voice can be used as a preview until an exact audio asset or reproducible local narrator is available.

## Private family media

Selecting or staging media locally does not authorise any third-party upload. Cloud routes, payment, voice cloning and publishing require separate explicit approval.
