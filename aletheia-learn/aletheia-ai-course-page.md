---
title: "Aletheia Learn — AI Fluency next-step course launcher"
system_id: "aletheia-ai-fluency-landing"
version: "0.2.0"
status: "SOURCE COMMITTED when confirmed; GitHub Pages and device QA pending"
date: "2026-10-17"
---

# AI Fluency course browser page specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance, uncertainty and human control.
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional appropriate humour and positivity.

## Purpose and distinction

Expose **AI Fluency: From Questions to Trusted Workflows** as the next-step track after **AI 101: Getting Started**. AI 101 is the existing `aletheia-learn-ai-fluency.htm` + `aletheia-learn-ai-fluency.md`, unchanged. The new course is `Aletheia-AI-course.md`; the new launcher is `aletheia-ai-course.htm`. Both are available as independent Markdown courses. Do not confuse the two.

## Canonical sources and page order

1. `Aletheia-AI-course.md` owns complete v0.2.0 learning content.
2. `aletheia-learn.md` owns teacher-first, learning evidence and hint boundaries.
3. Root `AGENTS.md`, `ALETHEIA-SAFE-BOOTSTRAP.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md` govern scope, interaction and release.
4. Page: compact header linking back to Aletheia Learn → course title/description → Choose AI selector → Start Course → accessible status/manual copy fallback → five-stage course map and eight lessons → source/credits and safeguards → footer.
5. Existing parent `aletheia-learn.htm` adds one clearly labelled course card after AI 101, without changing the existing AI 101 page, video lesson, goal form, scripts or navigation.

## Controls and real behaviour

- On page load, fetch the complete `Aletheia-AI-course.md` from the same directory using `cache:no-store`. Require a minimum complete content size, loader marker, Lesson 0, Lesson 7 and both protocol URLs. If fetch fails, **Start stays disabled** and the user sees a source link and retry.
- User selects provider (ChatGPT, Gemini, Copilot, DeepSeek, Claude, Kimi or Grok), then presses Start. This copies the entire full course into clipboard through the synchronous original-user-click path, opens exactly one selected AI site, and displays the instruction **Paste and send**.
- No auto-paste, no API key, account sharing, backend, paid subscription or automatically connected third party. The browser page does not execute lessons or tasks; it hands off the complete Markdown. A recipient AI may have a message-size limit and the manual Markdown upload remains an alternative.
- If clipboard copy is blocked, reveal/select a readonly manual-copy textarea; if popup is blocked, expose an ordinary direct provider link. Provide **Copy again** and a plain **Retry loading** button. Never invent success or claim the recipient AI obeyed the Markdown.
- No autoplay voice, music, consent dialogs, tracking of learner responses or mandatory accounts.
- The page links to original Sabrina tutorial with attribution as inspiration and states that the course is an independent adaptation.

## Accessibility, device and security

- Responsive small controls wrap; two buttons share a row where space permits; 44px touch targets; focus outlines; live status; labelled selector; keyboard and screen reader support; reduced-motion mode.
- All free demo datasets are fictional. HTML does not transmit local files, passwords or external account data. No hidden auto-scheduling or real posting.
- If script fails, ordinary link to course Markdown and to Aletheia Learn remains available; no blank splash screen.
- Source and JS validation are not proof of deployed Pages or browser/AI-host functionality.

## Acceptance tests

1. Exact route to parent card, launcher, course source and optional AI101 all remain valid after commit; no broken relative link.
2. Complete Markdown loads and validates with all eight preserved Lessons 0–7 and v0.2 free-tool labs.
3. Pressing Start copies the **full** Markdown and opens one correct AI site; blocked clipboard/popup path remains usable; no double launch.
4. Test Android/desktop/Safari where available, accessibility/keyboard/zoom, and ChatGPT plus an alternative AI host welcome-first response.
5. Inspect GitHub commit/branch and hosted route after publication. Record SOURCE COMMITTED, DEPLOYED, BROWSER TESTED and HOST TESTED separately.

## Change record

2026-10-17: user approved publishing v0.2.0 to GitHub and adding it to the Learn website. Website remains static AI handoff; original AI 101 preserved. Any future narrated cinematic expansion is separately scoped, not assumed.

