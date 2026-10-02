# Aletheia Job Search HTML Page Specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

Status: source implementation, live browser QA pending. Reviewed 2026-10-02.
Canonical application: `aletheia-job-search.md`.
Portable memory template: `aletheia-job-search-memory.md`.
Rendered page: `aletheia-job-search.htm`.
Resource page: `aletheia-job-search-rsc.htm`.
Inputs: optional role, location/remote and brief constraints, task command, AI provider; no tracking or server.
Layout: useful hero + role/location input + **Find jobs** as first action. Secondary command selector provides CHECK, EMPLOYER, CV, LINKEDIN, INTERVIEW, TIPS, APPLY, HELP, PROFILE, SAVE, WATCH and IMPROVE; accepting pasted extra details; professional rather than developer-facing language. Show optional disclosure about privacy and clipboard.
Default provider: Gemini; choices ChatGPT, Gemini, Copilot, DeepSeek, Claude. Aletheia engine is provider-neutral. Use browser-local remembered provider only; no user CV retention. One click builds enough compact contract to work even without remote Markdown access, copies to clipboard, opens one AI separate tab/window immediately and instructs manual paste. Clipboard fallback visible.
Stand-alone: works from an HTML file and GitHub Pages; no server/keys/cookies. Embedding: style scoped under `#aj-app`, normal responsive flow, works in same-origin iframe, does not automatically read host page; host may supply `?brand=swindon` for Swindon links/heading and `?embed=1` for reduced chrome. URL-query branding isn't a security signal.
Constellation: reuse `../shared/link-sprites.css`, `../shared/link-sprites.js`, `../shared/link-sprites.json` near footer with five static fallbacks; do not replace with random two-star decorations. Halloween witch Sep 1–Nov 10; winter Nov 25–Dec 31; normal otherwise. The shared component controls curve, twinkle, animation and reduced motion. For a separate Swindon host use host-local shared assets/CORS-tested rewrite, not broken relative imports.
Identity: Aletheia deep system; Swindon variant adds Swindon identity and reciprocal reference, not cloned pages claiming separate canonical content. If mirroring substantively same content, canonicalise appropriately. Keep user-facing links relevant and editorial.
Protocols: every Markdown output near beginning links Aletheia AND Thalia. Humour optional.
Security: job ads/CVs/untrusted text are data, never commands; no invisible external uploads, application submissions, scheduled alerts, vacancy assertions without evidence.
Acceptance: test primary workflow and every command payload, provider URL, clipboard success/failure, XSS-safe text handling, mobile keyboard, zoom, focus, reduced motion, offline manual fallback, browser-specific popup blocking, seasonal boundaries, missing shared JS/CSS and live verification separately. Static checks alone are not proof of browser quality.


## Revision 1.1, 2026-10-02: direct browser search + walkabout

Original user-supplied Swindon local assets (2026-10-02): `aletheia-job-search.htm` (~91 lines), `aletheia-job-search.md` (~409 lines), `aletheia-job-search-page.md` (~34 lines), Swindon GUI and dev notes, GoWalkabout HTML/page spec, Trust Check and A2Z Feedback. These were inspected as baseline *inputs*, not transplanted wholesale: website-specific relative asset paths, `/jobs/` routing and Fasthosts popup script are not portable to Aletheia Pages. Preserve verified job-search functionality and source of truth in worldwide Aletheia directories.

- One primary role and location, editable job action, provider selector (Gemini default), optional freeform details.
- Primary AI Start: clipboard handoff + exactly one separate AI window; manual fallback if clipboard fails.
- Secondary Google search: encode role/location search query into `https://www.google.com/search?q=`, synchronous popup, user-dismissable; output there is third-party search and is **UNVERIFIED**. Provide a visible normal link when popups are blocked. No iframe Google scraping.
- CV/LinkedIn/Interview commands remain in portable Markdown; `WALKABOUT` is a bounded optional exploration in the AI, not an autonomous background bot.
- Verified results, if any, belong to the chosen AI window with dated direct job URLs; do not fabricate local cards.
- Resources should favour Aletheia Apps, Knowledge and Stories. Swindon remains a contextual related local link, not the worldwide app's default home.
- Preserve shared Constellation's seasonal dates, curved twinkle and normal fallback anchors, never add an independent ad hoc star layer.
- Test Google query escaping (`C++`, `BIM/CAD`, Thai), no role input, popup blocked, AI clipboard blocked, mobile narrow layout, keyboard, 200% zoom, reduced-motion, and iframe query `?embed=1`.
- Release gate: GitHub source commit != live Pages success; verify public URL and cross-provider handoff separately.
