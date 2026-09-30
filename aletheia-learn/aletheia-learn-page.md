# Aletheia Learn browser page specification

> **Canonical app:** `aletheia-learn.md`  
> **Browser interface:** `aletheia-learn.htm`  
> **Shared GUI:** `../aletheia-GUI.md`  
> **Shared dev:** `../aletheia-dev.md`  
> **Shared code:** `../aletheia-code.md`

## Purpose

Give a first-time visitor one practical way to launch Aletheia Learn from a static GitHub Pages app without requiring an API key, paid backend or account integration.

The public v0.1 browser architecture is **HANDOFF**, using the shared **Ctrl-V AI bridge**:

```text
GOAL + MODE
→ BUILD COMPACT ALETHEIA LEARN PAYLOAD
→ COPY WHILE PAGE OWNS FOCUS
→ OPEN ONE SELECTED AI
→ USER PASTES
→ AI STARTS THE LEARNING LOOP
```

This is not CONNECTED AI.

## Source of truth and dependencies

1. `aletheia-learn.md` owns the learning behaviour.
2. `aletheia-GUI.md` / `aletheia-dev.md` own shared interaction/fallback rules.
3. `aletheia-code.md#CTRL-V-AI-HANDOFF` owns the reusable handoff sequence.
4. `../shared/link-sprites.*` owns the Aletheia Constellation.
5. Provider URLs are replaceable adapters, not canonical learning logic.
6. `worker/` is a future optional OPT3 experiment and is **not required** by this page.

## Page order

1. compact sticky Aletheia / Learn header;
2. short purpose;
3. one primary learning form:
   - goal;
   - mode;
   - selected AI;
   - **Start Aletheia Learn**;
4. status / paste instruction;
5. hint-ladder explanation;
6. accessibility / active-practice explanation;
7. manual handoff disclosure;
8. Aletheia Constellation;
9. footer/protocol/resource routes.

Do not place a second competing Copy/Open button beside the primary Start action.

## Primary action

On **Start Aletheia Learn**:

1. validate the goal;
2. build a compact, provider-neutral payload containing:
   - Aletheia + Thalia protocol links;
   - goal and selected mode;
   - canonical raw Markdown URL;
   - embedded minimum tutor rules so the session still works when the provider cannot fetch URLs;
   - hint ladder;
   - accessibility support;
   - active visual/manipulation/pattern practice rule;
   - result-first instruction;
3. synchronously copy the payload using a hidden textarea/selection fallback;
4. immediately open the selected provider from the same user click;
5. leave the Learn page underneath;
6. tell the user to paste and send;
7. if copying failed, reveal the manual handoff textarea.

On secure browsers, `navigator.clipboard.writeText` may reinforce the copy after the provider window has been opened, but must not be awaited before popup creation.

## Provider selector

Standard adapters:

- ChatGPT
- Google Gemini
- Microsoft Copilot
- DeepSeek
- Claude

Remember the last selected provider in localStorage. Default first use to ChatGPT.

Provider URLs are replaceable and must not contain private account state, tokens or API keys.

## Window behaviour

Desktop: approximately 900 × 760 resizable/scrollable child window where the browser permits.

Mobile/tablet: ordinary new tab/window; do not force desktop dimensions.

Exactly one destination per Start click.

## Manual fallback

A collapsed **Show handoff text** disclosure sits below the primary result/status area.

It contains:

- readonly/reviewable payload textarea;
- Copy again button;
- ordinary direct provider link if the popup was blocked.

Do not navigate to raw Markdown as the fallback.

## Accessibility

- labelled goal/provider controls;
- keyboard-operable mode buttons;
- visible focus;
- 44px-ish primary controls;
- status announced with `role=status`;
- no information by colour alone;
- no horizontal overflow at Android widths;
- reduced motion;
- constellation fallback links remain ordinary anchors;
- wording includes ordinary **Paste** for mobile, not Ctrl-V alone.

## Constellation

Use the shared central component. Do not duplicate seasonal logic.

Current date rules remain:

- 1 Sep–10 Nov: stars plus approved witch;
- 11–24 Nov: ordinary stars;
- 25 Nov–31 Dec: winter sprites;
- 1 Jan–31 Aug: ordinary stars.

## Acceptance tests

1. Empty goal blocks launch and focuses the field.
2. Each mode changes the payload.
3. Each provider changes exactly one destination.
4. Payload includes both protocol URLs and canonical Learn Markdown URL.
5. Payload works without the receiving AI fetching that URL.
6. Start attempts synchronous copy before leaving focus.
7. Exactly one provider window/tab opens.
8. Copy failure reveals manual fallback.
9. Popup failure leaves a direct provider link/manual payload.
10. Provider preference survives reload via localStorage.
11. Android layout has no horizontal overflow.
12. Desktop popup is bounded/resizable/scrollable.
13. Keyboard/focus/reduced-motion tests pass.
14. Constellation source loads or static links remain.
15. Exactly one Awin MasterTag.
16. No API keys/tokens/private user data in source.
17. The page describes itself as HANDOFF, not CONNECTED.
