---
title: Aletheia Learn — AI Fluency course launcher
system_id: aletheia-learn-ai-fluency-front
version: 0.1.0
status: implementation in progress
document_class: browser-page-specification
date: 2026-10-09
---
# Aletheia Learn — AI Fluency front-page specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — truth anchors, provenance and limits.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour, never a truth substitute.

## Goal and ownership

Build one standalone, direct-linkable HTML doorway **inside the existing Aletheia Learn directory**, not a duplicate lesson/course or second canonical app. Its job is to explain the full AI Fluency course, present an AI choice and enable a one-click **COPY FULL COURSE → OPEN CHOSEN AI → USER PASTES** handoff.

- Canonical content: `aletheia-learn-ai-fluency.md`. The browser must load the actual complete Markdown before enabling Start.
- Browser reader: `aletheia-learn-ai-fluency.htm`.
- Parent: `aletheia-learn.htm`. Resources: `aletheia-learn-rsc.htm`.
- Decorative original Aletheia animation: `../aletheia-threejs-animation/aletheia-threejs-animation.htm?embed=1`, introduced by a purely additive opt-in query mode hiding animation debug UI and crawl while preserving normal standalone animation behaviour.
- Constellation: `../shared/link-sprites.css` and `../shared/link-sprites.js`; five actual static fallback anchors from the central `shared/link-sprites.json` and dated Halloween/winter rules.
- Awin MasterTag: exactly one production instance, per GUI/dev.

## Mandatory KISS learner explanation

The visible front page must explain: *this course teaches AI basics, safe AI setup, conversational requests, verification and building an actual workflow.* The course teaches **before** its first practice question, provides HELP, EXAMPLE, NEXT, BACK and SKIP, and is AI-provider-independent.

The 3-line narration introduces how to choose an AI, copies/pastes the full course, and starts an interactive tutorial. Narration is supplemental: the instructions and controls are always readable without sound.

## Audio and animated reading

- User initiates intro using an explicit Play action. No unsolicited speech, music or autoplay.
- Speech Synthesis uses preferred local `Google UK English Male`, then another installed en-GB male (avoid George where alternatives exist), then an en-GB available voice, then browser fallback.
- Speech rate exactly **1.0**, pitch 1.0, user choice Voice On/Off.
- One utterance per sentence, highlight the active line, and show a scrolling window of **at most three lines**. Resume/Pause and Restart must work; do not read entire course aloud.
- Motion or speech unsupported? Preserve the same full static instruction list and visible course controls; `prefers-reduced-motion` prevents the animation iframe and transition.
- The original Three.js demo is decorative only and never intercepts keyboard, mouse, accessibility or tap actions.

## Start Course technical contract

1. When page loads, `fetch("aletheia-learn-ai-fluency.md", {cache:"no-store"})` over the same origin. Accept only substantial, recognisable Markdown with loader and Module 9, not a 404 HTML page or truncated response. Display load status and keep Start disabled until success.
2. Present one select with ChatGPT, Gemini, Copilot, DeepSeek, Claude, with last selected provider saved locally only. No API/backend, prompt injection into third-party UIs, or automatic submission.
3. On the Start click: build a compact instruction envelope and **append the entire fetched, unchanged Markdown body**. Use a synchronous hidden-textarea selection/execCommand copy while the page owns focus, then synchronously open one selected provider window/tab in that same user activation. No awaited fetch or clipboard operation before opening.
4. The envelope explicitly says to welcome/HELP and teach first before quizzes, honour the whole supplied Markdown, and wait for START/NEXT after the welcome.
5. If synchronous copy fails, retain full prebuilt text in a visible selectable textarea and offer Copy again (modern clipboard allowed as fallback). On popup blocking provide direct provider link. Always show ordinary Paste instructions. If fetch failed, offer Retry and raw course download, not a fake partial prompt.
6. Never assume the receiving provider fetched any URL. The pasted course must be complete without online retrieval.
7. Preserve the source-of-truth Markdown: do not fork, inline duplicate or silently edit it in HTML.

## Navigation and accessibility

- Persistent visible **← Aletheia Learn**, **Read full Markdown**, **Resources** and **Aletheia Apps** links above the hero.
- Main Start CTA visible without needing to finish animation, use keyboard-focus styling, live load/copy status, accessible labels and readable 3-line panel.
- Below: semantic Aletheia Constellation with five static links even if JS fails. Halloween and winter central sprites supplied by shared manifest, no new seasonal logic.
- One production Awin MasterTag near closing body, source/editorial links excluded from affiliate conversion as feasible.
- Mobile-first controls, no horizontal overflow at narrow widths, reduced-motion and voice-off experience.

## Acceptance and release receipt

Static review: HTML structure, one valid source fetch, disabled Start until complete, full-course clipboard, one popup per click, fallback textarea, correct provider map, selectors, voice rate 1.0, exact Constellation links/static fallback and one MasterTag; script parsing and no duplicate IDs.

Browser/device still require **live observed** checks: Desktop Chrome/Edge, Android Chrome, Safari/WebKit, actual voice selection, browser clipboard permissions, blocked popup, reduced motion, animation fallbacks, provider first response and GitHub Pages deployment. Do not call those passed based on source inspection alone.
