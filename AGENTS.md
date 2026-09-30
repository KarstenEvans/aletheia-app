# Aletheia Apps agent router

This is a small entry-point for coding agents. It points to the real project files rather than duplicating them.

## Read first

1. `README.md`
2. `aletheia-GUI.md`
3. `aletheia-dev.md`
4. `aletheia-code.md`
5. `tasks.md`
6. `ideas.md` when the request concerns future work
7. The target app's current Markdown specification and HTML
8. Any target `*-page.md`, manifest/JSON, source register, assets and resource page that the app actually uses

Protocol source: `https://github.com/KarstenEvans/aletheia-protocol`

## Build rules

- Markdown/specification first; browser HTML is a rendition/interface.
- Inspect the current app before editing. Preserve working features unless the task explicitly changes them.
- KISS and static/free-first. Optional cloud AI, Workers, MCP, agents or paid APIs must not become required for the ordinary app unless the app explicitly says so.
- Build mobile-first, then desktop. Test touch, keyboard, zoom, reduced motion and narrow screens.
- Support current Chromium, Firefox and Safari/WebKit where practical. Feature-detect browser APIs and graphics capabilities; do not assume a browser or operating system lacks a library merely from one failed run.
- For WebGL/Three.js or other optional rendering, provide a useful fallback when the library, CDN or graphics context fails. The fallback must still explain what the page is and give the user working navigation/content.
- New public standalone HTML with genuine related destinations follows the shared seasonal Constellation standard in `shared/README.md`, `shared/link-sprites.json` and GUI §21. Preserve ordinary fallback stars, dated witch/winter rules and reduced-motion; source/editorial links are not advertisements.
- Primary in-app navigation stays predictable. Secondary resources/external searches may open a separate resizable desktop window when preserving the current task matters; use a normal new tab/fallback on mobile or when popups are blocked. One click opens one destination.
- Never intercept downloads, anchors, `mailto:` or `tel:` with popup code.
- Keep external dependencies explicit. If a local/offline build needs the internet for a CDN/font/API, say so and fail visibly.
- No secret/API key/private data in public source.
- No action-capable feature gets send/delete/publish/purchase authority merely because a connector exists.
- Create/update a page build specification for substantial HTML work so another AI can reconstruct and test it later.
- Do not claim live deployment or device compatibility until actually tested.

## Finish

Run appropriate syntax/static checks, inspect the final files, update `tasks.md` for material work and state remaining live/device tests.

## Active AGENTS.md reading rule

`AGENTS.md` is an **active router**, not a file to create and then ignore.

Before changing repository content, an agent must:

1. Read the applicable root `AGENTS.md` before acting.
2. Check whether a more specific/nested `AGENTS.md` applies to the target path and read it before editing that scope.
3. Re-read the applicable router when switching repository, app/folder scope, or when the task changes materially.
4. Follow the router into the current canonical specifications/source files it names; do not rely on remembered copies from another session.
5. Never claim that repository instructions were followed when they were not actually loaded.
6. Treat `AGENTS.md` as navigation and operational constraints, not as a substitute for the canonical app specification or Aletheia Protocol.
7. If instructions conflict, preserve the conflict and use the declared authority hierarchy; do not silently choose whichever instruction is easiest.
8. For material edits, keep a concise observable receipt of which repository instructions/specifications were read and what validation was actually performed. This is a provenance receipt, not private chain-of-thought.

When an agent crosses into another Aletheia repository, it must read that repository's own `AGENTS.md` rather than assuming this file governs it.

## Agent identity and authority

For action-capable or persistent automation, record enough information to answer:
- what agent/run acted;
- who or what authorised it;
- what repository/scope it was allowed to affect;
- which tools/data it could access;
- whether external effects required human approval;
- what outcome was observed and whether it was independently verified.

A successful tool call is not by itself proof that the intended real-world outcome occurred. Distinguish **attempted**, **completed**, and **verified** actions where that difference matters.

