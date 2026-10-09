---
title: "Aletheia Learn — AI 101 Cinematic Front Page"
system_id: "aletheia-learn-ai-fluency-front"
version: "0.2.0"
status: "GitHub source committed; public browser/device QA pending"
document_class: "browser-page-specification"
date: "2026-10-09"
---

# Aletheia Learn — AI 101 Cinematic Front Page

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance, transparency and human judgement.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour and positivity, not a source of truth.

## Why v0.2 exists: observed user feedback

The first GitHub Pages screenshot of AI 101 showed two large competing dialogue boxes, explanatory labels describing the implementation rather than teaching the user, a faint Aletheia animation, and too many controls. The human user requested: **KISS**, keep the middle for the live animation and Star Wars-style text/speech crawl, use **Choose AI** itself as the narrator-start gesture, keep only one **Start Course** button, and move books/gifts/subscriptions and the technical fallbacks into a top-right **☰ Menu**.

This replaces that layout rather than creating a second application.

## Canonical source and files

- Course/content authority: `aletheia-learn-ai-fluency.md` v0.2.0.
- Public HTML: `aletheia-learn-ai-fluency.htm`.
- Dedicated resources page: `aletheia-learn-ai-fluency-rsc.htm`.
- Parent Aletheia Learn: `aletheia-learn.htm`, linked to the AI 101 entry point.
- Decorative original 3D animation: `../aletheia-threejs-animation/aletheia-threejs-animation.htm?embed=1` (the standalone demo's original view is unchanged).
- Shared Constellation: `../shared/link-sprites.css`, `../shared/link-sprites.js`, `../shared/link-sprites.json`.
- Development router: root `AGENTS.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `tasks.md`.

## Page layout and exact interactions

1. Compact Aletheia Learn header, ordinary linked logo, right-aligned **☰ Menu** (keyboard accessible, Escape/backdrop dismissal).
2. Dominant full-width animation stage: loads **as soon as page JavaScript runs**, not after selecting an AI. If reduced motion is requested, the iframe source is not loaded. If unavailable, the background is still informative, no blank blocking canvas.
3. Short heading **Aletheia Learn · AI 101** and `Learn AI. Keep your judgement.`
4. Before choosing an AI, the centre simply says `Let AI do the walking. Choose your AI to begin the introduction.`
5. User changes the single **Choose AI** selector. This **user gesture** immediately starts an original, centre-aligned, perspective **cinematic text crawl** and optional SpeechSynthesis voice. There is no extra visible Play button and no published "three lines at a time" dashboard label.
6. One **▶ Start Course** button below the stage, disabled until the whole current Markdown has loaded and a provider is selected. Its only effects are preparing the full course clipboard text, opening exactly one selected AI window, and displaying a compact paste instruction.
7. Below the full-screen hero, preserve a concise text explanation, actual back links to Learn/Apps/Markdown/resources, then five static Constellation stars. Central shared JSON adds the Halloween witch 1 Sep–10 Nov and winter icons 25 Nov–31 Dec; no separate seasonal logic.
8. Keep the usual production Awin Publisher MasterTag once only, with editorial links marked to avoid commercial treatment.

## Browser voice and crawl

- User gesture: choosing an AI, or explicit Replay in the menu. **Never speak on mere page load**.
- Preferred installed voice: `Google UK English Male`, otherwise another available en-GB male, avoiding George when alternatives exist, then en-GB/browser fallback. Browser speech voices and advertised gender names are not guaranteed.
- `SpeechSynthesisUtterance`: `lang="en-GB"`, `rate=1.0`, `pitch=1.0`.
- Each original short KISS introductory sentence has its own utterance. Advance the angled moving crawl only on `onend` (or timed fallback when voice unavailable/turned off), keeping speech and visible content related.
- Intro content: understand AI, prepare an AI, speak naturally, ASK → GO WALKABOUT → CHECK → ANSWER, check evidence, human-first teaching, choose Start and Paste, Be Excellent.
- Replay, Voice on/off, Pause/Continue are **inside the burger menu**. On Start Course, cancel narration so it does not talk over the new AI chat.
- Accessibility: if speech unavailable, captions advance without audio; with reduced motion the static instruction/back links and working controls remain. Source text remains readable in the HTML, even if motion is suppressed.

## AI handoff

- Preload `fetch("aletheia-learn-ai-fluency.md", {cache:"no-store"})` into memory. Reject failed fetch, 404 HTML and truncated content; require the loader, Module 0 and Module 9 markers and both protocol URLs.
- Provider selector: ChatGPT, Google Gemini, Microsoft Copilot, DeepSeek, Claude, Kimi, Grok. Provider URLs are adapters, not canonical course logic; no user credentials stored or needed.
- Build one short teacher-first startup envelope plus the **entire fetched, unchanged Markdown** (28,048 source characters at review).
- On the Start user click: synchronous textarea-select/`execCommand("copy")` attempt first; then one synchronous `window.open` only. Clipboard and popup fallback appear inside the burger menu or as direct provider link when blocked. The user manually pastes and sends.
- Do not prefill foreign provider websites or claim the recipient fetched the external Markdown.
- Some AI providers impose prompt-size limits; provide the original Markdown file so the learner can instead attach it manually.
- No account links, Worker, paid API, or external send permission.

## Burger contents

- Help to start, voice replay/on/off/pause, manual copy and fallback.
- Back to Aletheia Learn, Apps home, authoritative course Markdown.
- Dedicated AI 101 resources: Books, Gifts & equipment, AI chat & subscriptions, Free AI lessons.
- Keep the main cinematic area free from these secondary instructions.

## AI 101 resources

The separate `aletheia-learn-ai-fluency-rsc.htm` uses actual editorial publisher and official provider links. It includes:
- Harvard HKS archived 2024 generative AI teaching; CS50 AI lecture.
- *Co-Intelligence* (Ethan Mollick), *AI Snake Oil* (Arvind Narayanan and Sayash Kapoor); verified Bookshop.org UK general shop and gift cards.
- Optional headset, adjustable stand, keyboard, low-cost learning activities.
- Official plan or chat URLs for ChatGPT, Claude, Gemini, Copilot, DeepSeek, Kimi and Grok. Provider pricing changes; never invent rates, account benefits, transferable subscriptions or affiliate IDs.
- Full Aletheia stars and footer backlinks, one Awin MasterTag, source/date note.

## Validation receipt (GitHub source, 9 October 2026)

- Re-read actual root AGENTS, GUI/dev/code, parent Learn/course/page/animation and central Constellation catalogue before editing.
- First implemented source-only mock interaction checks: **12/12 passed** (full-course load, disabled Start prior to selector choice, en-GB rate 1.0 preferred voice, one correct provider popup, full clipboard before popup, manual copy and blocked popup fallback). These were simulated, not actual Chrome/browser tests.
- Final after Kimi/Grok and reduced-motion changes: **13/13 static checks passed** including current full-course fetch, selector narration path, seven options, single popup, one Awin, five stars, animation embed and reduced-motion gating.
- Final inline JavaScript compiled syntactically; no duplicate `id` attributes in the inspected HTML.
- **Pending:** deployed Pages reachability, visual review on Windows/mobile, actual SpeechSynthesis/crawl performance, popup permissions/clipboard, real paste into all seven AI providers, and exact seasonal star-date testing. These are not passed merely because source compiled.

## Acceptance of human feedback

The screenshot complaint is addressed by removing the visible two-card design, not just hiding text within the cards. The new layout does not show "three-line narrator", "rate 1.0" or technical verification copy on the main hero. Choosing an AI begins narration; Start stays distinct and opens the provider.

If a user observes problems, inspect the actual rendered/browser behavior and improve this same page. Do not fork another launcher.
