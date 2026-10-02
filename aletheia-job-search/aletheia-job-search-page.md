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
