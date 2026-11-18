# Aletheia Make a Will v0.1 — App build specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) defines provenance and uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) is optional respectful tone.

**Status:** HTML v0.1 published from standalone Markdown system, 18 November 2026. **Owner repository:** `KarstenEvans/aletheia-app`; branch `main`. **Files:** `aletheia-make-a-will.md` canonical, `aletheia-make-a-will.htm` interactive rendition, `aletheia-make-a-will-rsc.md/.htm` optional resources, `aletheia-make-a-will-cover.jpg` illustration. **Research PDF:** `KarstenEvans/aletheia/articles/make-a-will-family-handover-legacy.pdf`. **Knowledge:** `KarstenEvans/aletheia-knowledge/knowledge/aletheia-make-a-will-knowledge.md`.

## AI-first launch and help contract (18 November 2026)

The interactive Markdown is the canonical engine. Preserve the old 4-tab HTML questionnaire as an optional offline fallback; put a prominent **Launch with AI** control above it. One provider selector in this order: **Gemini (default), ChatGPT, Claude, DeepSeek, Qwen**. Before enabling launch, fetch the current same-origin canonical `.md`, check the v0.1 header, and prepare the full task+HELP-first payload. On one deliberate user click, copy it to the clipboard and open exactly one new AI window/tab. If copy fails, show a selectable textarea with the complete payload and manual Paste instructions; do not promise auto-paste/auto-send across origins. Host AI should show concise Help then Question 1 immediately on the initial pasted message. QI direct-generator RUN-FIRST is a distinct exception.

User may open their own private saved project inside the selected AI using `IMPORT`; never put personal estate details into the public site, URL or clipboard payload by default. No local permanent project storage is added by this launcher. Keep release **0.1**; apply fixes in place.

## Goal and interface

One question at a time, thumb-tappable A/B/C/D answer buttons, optional handwritten text answer only when needed; no secondary Explore button row. A plain *Read more* link goes beneath a question, to independent official help. Each click selects or opens exactly once, preserving interview state. Desktop external links open one approximately 900×760 resizable, scrollable child window when the browser permits; mobile uses normal tabs and never forces desktop popups. Primary app navigation stays in its page.

Four named sections: **1. Make a Will** (9 steps, outputs NOT READY TO SIGN review); **2. Family Handover** (5 steps, provider/location/continuity prompts only); **3. DIY Probate** (6 steps); **4. Build the Family Legacy** (5 steps, educational comparison of gifts/trust/FIC, no deeds).

Simple mortgage-free families first. No backend, external dependencies, cookies, localStorage, analytics, serialised query data, password fields, actual bank credentials or network upload. Session state in JavaScript memory only, lost on refresh. Markdown export is local, plaintext and explicitly marked private. No certified or sign-ready will. No automatic tax estimates, trust documents, payment gateways or investing recommendations. App must be useful without ever opening a commercial resource link.

## QA and Aletheia Improve receipt

- Refresh: read current AGENTS, bootstrap, README, GUI, Dev, Code, ideas, tasks, Improve, original app MD/HTML and resource source.
- Reuse existing resource links and official guidance; do not create a second knowledge engine. Cross-repository published material links back to this app.
- Syntax/static checks: JavaScript parses, four tabs, 25 question definitions, answer buttons, text fallback, source links, no storage/network, output contains both protocol links at end.
- Browser smoke checks still required: desktop Chrome/Edge, Safari/WebKit, Android Chrome, narrow 320px, zoom, keyboard and popup blockers. Do not confuse static syntax with real browser verification.
- Release number remains **0.1**; subsequent repairs overwrite the same paths on `main`, not create v0.1.1 or new app folders.
- No personal details are published. Public articles are educational. Affiliate links only where valid and disclosed. No copyrighted music is embedded or played.

## Acceptance and resume

A new visitor can select each of four sections, tap choices through a series, review and locally download Markdown. A visitor can open GOV.UK explanatory reading in another window/tab without losing progress. If a phone or browser disallows popups, a plain new tab link remains. Review text is not a legal will; explicit legal validity warning remains visible. If live Pages cannot be tested, mark **COMMITTED, LIVE NOT VERIFIED** and revisit rather than claiming success.