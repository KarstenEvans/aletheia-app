---
title: "Writing Vibe: Mirror Filters extension proposal"
version: 0.1.0
status: DESIGN ONLY — NOT IMPLEMENTED
created: 2026-10-20
proposed_owner: KarstenEvans/aletheia-app
proposed_scope: aletheia-writing-vibe/
---

# Aletheia Writing Vibe: Mirror Filters proposal

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — trace evidence, uncertainty and human choice.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional human-centred humour; never invent a writer's evidence.

## Existing behaviour confirmed

The present static [Aletheia Writing Vibe](https://karstenevans.github.io/aletheia-app/aletheia-writing-vibe/aletheia-writing-vibe.htm) helps collect writing samples, clean interface noise, prepare attributed-author research packs and hand the pack to a user-selected AI. Its main purpose is **evidence-based author-craft analysis**, subject to a source-confidence gate. It does not run AI internally or silently scrape sites. The nearby `Writers/` collection contains approved attributable examples and explicit manifest files.

## Proposed change: extend, do not clone

Add an **optional, clearly separated mode:** `MY WRITING | MIRROR FILTERS`. Leave the current `AUTHOR RESEARCH | WRITING VIBE` flow intact, including the three-passage evidence threshold and Writers registry. The new mode works on *the user's own text* and must not mislabel the user's voice as a sourced public-author profile.

### Minimum viable KISS flow

1. **PASTE MY TEXT**: a paragraph or draft, 0.5–5K words, stored in browser memory only. The human can choose sensitivity/allowed sharing with an external AI.
2. **SELECT OBJECTIVE**: original voice, clearer explanation, more creative idea, stronger argument, different audience, concise rewrite. One selection is enough.
3. **MIRROR FILTERS**: five optional, explainable toggles: Reader; Perspective; Proof; My Voice; Pressure Test. Defaults to My Voice + Proof + one Perspective, not all five.
4. **PREPARE HANDOFF**: local static app produces a Markdown instruction packet with original draft, selected filters, explicit 'do not invent' rules, request for three substantially different candidates and a discrepancy/claim checklist.
5. **OPEN CHOSEN AI**: user copies packet and opens ChatGPT, Claude, Gemini, etc. No claims of automatic login, prompt insertion or model execution.
6. **COMPARE**: human pastes candidate A/B/C back (optional), views original and alternatives side-by-side with labels. Selection/export is a local operation. A simple subjective rubric records which difference was useful; no invented plagiarism or AI-detection accuracy.
7. **SAVE/EXPORT**: `aletheia-mirror-filters-output.md` with original, chosen version, changes, unresolved checks, optional provider label, sources, selected human approval and both protocol links.

### A portable prompt for immediate use (no app change required)

```text
I am the author. Keep my specific facts, doubts and lived observations.
Task: make this clearer and more original WITHOUT copying another writer's signature voice.
Do not start with stock hooks or claims about 'revolution', 'game changers' or 'unlocking potential'.
First extract my core argument. Identify facts needing citations.
Then propose three DISTINCT editorial directions that disagree about structure, focus or underlying assumptions, not just word choice.
One should challenge my argument fairly. One should keep its technical details. One may use an unusual but apt analogy.
Explain the trade-off in each direction and flag what is unverified.
Ask which direction I want, then draft only that one.
Conclude with a change log of material additions/removals and any unsupported claims.
```

### Acceptance tests for future authorised implementation

- Existing author-research controls, cleaning, source-confidence gate, Writers manifest and downloads behave unchanged.
- The two modes have obvious separate labels; no confusion between author research and the user's own original writing.
- Baseline first, selectable lenses, independent human decision, export contains Aletheia and Thalia links.
- The page cannot claim it ran ChatGPT/Claude/Gemini by merely opening a tab, nor claim uniqueness, plagiarism detection or quality improvement without evidence.
- Works with no account/API subscription; no secret, token, model credential or background request in static HTML.
- UI labels accessible, keyboard focus visible, mobile wrapping with no horizontal scroll, offline packet preparation available.
- A small blind trial with real users compares clarity, grounded originality, individual voice, correction burden and time against one-click generic rewriting; remove feature if burden outweighs benefit.

## Avoid these tempting traps

- Do not build 18 miniature vendor clones or a new AI-tools portal just because a social post lists them.
- Do not force 5 AI models for a beginner lesson; tool hopping can add cognitive fatigue and cost.
- Do not automatically paste unapproved personal writing into multiple services.
- Do not treat stylistic variation as factual verification or guaranteed originality.
- Do not reproduce substantial contemporary author prose from the linked post or Writers collection.

## Read-first receipt and release boundary

Current repository inspected 20 October 2026: `AGENTS.md`, safe bootstrap, README, shared GUI/dev/code/ideas/tasks, `aletheia-writing-vibe.md`, its page contract, current HTML opening and `Writers/README.md`; existing author-vibe pattern reused. Additional complete source read and live-device verification are required before a code edit.

**Status:** concept and ready-to-use handoff prompt only. This proposal is stored as source Markdown in GitHub; no live HTML modification, page release or runtime test. Any actual GitHub file changes require a separate explicit scope/approval under the Safe Bootstrap.