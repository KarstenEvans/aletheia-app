# Aletheia Apps agent router

This is a small entry-point for coding agents. It points to the real project files rather than duplicating them.

## Read first

1. `README.md`
2. `aletheia-code.md`
3. `tasks.md`
4. `ideas.md` when the request concerns future work
5. The target app's current Markdown specification and HTML
6. Any target `*-page.md`, manifest/JSON, source register, assets and resource page that the app actually uses

Protocol source: `https://github.com/KarstenEvans/aletheia-protocol`

## Build rules

- Markdown/specification first; browser HTML is a rendition/interface.
- Inspect the current app before editing. Preserve working features unless the task explicitly changes them.
- KISS and static/free-first. Optional cloud AI, Workers, MCP, agents or paid APIs must not become required for the ordinary app unless the app explicitly says so.
- Build mobile-first, then desktop. Test touch, keyboard, zoom, reduced motion and narrow screens.
- Support current Chromium, Firefox and Safari/WebKit where practical. Feature-detect browser APIs and graphics capabilities; do not assume a browser or operating system lacks a library merely from one failed run.
- For WebGL/Three.js or other optional rendering, provide a useful fallback when the library, CDN or graphics context fails. The fallback must still explain what the page is and give the user working navigation/content.
- Primary in-app navigation stays predictable. Secondary resources/external searches may open a separate resizable desktop window when preserving the current task matters; use a normal new tab/fallback on mobile or when popups are blocked. One click opens one destination.
- Never intercept downloads, anchors, `mailto:` or `tel:` with popup code.
- Keep external dependencies explicit. If a local/offline build needs the internet for a CDN/font/API, say so and fail visibly.
- No secret/API key/private data in public source.
- No action-capable feature gets send/delete/publish/purchase authority merely because a connector exists.
- Create/update a page build specification for substantial HTML work so another AI can reconstruct and test it later.
- Do not claim live deployment or device compatibility until actually tested.

## Finish

Run appropriate syntax/static checks, inspect the final files, update `tasks.md` for material work and state remaining live/device tests.
