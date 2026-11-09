# Althea Beowulf | Browser page build specification

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs evidence and human authority.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) governs optional appropriate humour.
- Status: v0.1 source candidate; page route intended: `https://karstenevans.github.io/aletheia-app/aletheia-beowulf/aletheia-beowulf.htm` **not live verified**.
- Rendered file: `aletheia-beowulf.htm`; source of truth: `aletheia-beowulf.md`; research: `research.md`; renderer: `render_demo.py`; reviewed 9 November 2026.

## Purpose and actual page order

Create a local-only project workbench. Hero with explicit capability disclaimer; manually managed compute nodes; configurable animation clip; Canvas preview and PNG frame; planned job table with exported work orders; staged roadmap; canonical research links; shared Aletheia Constellation navigation; protocol links/footer.

## Inputs, state and parsing

- Devices: `{id,name,kind,ram_gb,image_ai,encode}` entered manually; two **clearly example** records start in memory. Remove/add buttons only; no persistence, cookies or device scans. Form values bounded and names inserted through `textContent`, not raw HTML.
- Clip duration 1–30 seconds, fps 12/24/30, batch size 6/12/24. Output plan schema `aletheia.beowulf.plan.v0.1`, `execution: manual-plan-only`.
- AI-key-art is a **planning-only** stage requiring a manually claimed image engine. If unavailable, flag `NO CAPABLE NODE`.
- CPU-only demonstration rendering jobs are assigned round-robin to manually registered nodes and marked not executed. Encoding stage requires claimed encoding capability; no program executes in browser.
- Browser drawing is a procedural Canvas animation, not AI or actual external video rendering. Playback starts paused for all users; manual play/pause/scrub.

## Required controls

Add/remove node, plan, export JSON, export portable Markdown with both protocol URLs, scrub frame, play/pause, download current PNG. All actions are real local computations/downloads. Blank roster produces unassigned work rather than fabricated workers.

## External dependencies and fallback

- No CDN, AI service, API key, browser permission, local server or cloud account.
- Shared `../shared/link-sprites.css`, `../shared/link-sprites.js` and its JSON are optional progressive enhancement; static real anchor links are in the HTML if scripts fail.
- Useful project text remains readable without Canvas; frame export is unavailable if Canvas is unavailable.
- No Awin MasterTag included in review-branch proof of concept until separate owner publication/ad-tracking decision.

## Accessibility and privacy

Mobile-first responsive fields; keyboard-accessible controls, labels, visible focus, live planning status, reduced motion initially paused, no automatic sound. HTML page loads no personal telemetry or external JS (other than same-site editorial navigation). Manual device information stays memory-only until a requested download.

## Trust and action boundary

UI READ/PLAN/DOWNLOAD ONLY. It does not ask the OS to enumerate hardware, accept untrusted servers, install code, control USB devices, call phone APIs or upload assets. Research links are informational. Model and third-party licences must be verified before installation/forking, especially Android diffusion models and GPL components.

## Acceptance tests

- STATIC: valid HTML structure, unique IDs and matching JS references; JavaScript syntax; Python bytecode compile and frame-range smoke test; no external AI network calls in app source; exact local/shared paths.
- LOCAL BROWSER (pending): keyboard/mobile/200% zoom, add/remove, invalid duration, JSON/MD downloads, scrub and PNG download, no-script fallback, reduced motion and Firefox/Safari compatibility.
- DEVICE (pending): Samsung A52, old Windows/Linux PC, newer supported GPU device.
- LIVE (pending): GitHub Pages URL and seasonal Constellation links after approved merge/deployment.

## Changelog and resume

2026-11-09: drafted new standalone app skeleton and CPU-only frame-range experiment. No modifications to shared GUI/Dev, protocol repositories, settings, existing apps or main-site index. Publish only after review and explicit authorisation.