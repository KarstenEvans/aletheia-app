---
title: Aletheia Improve — generated Markdown protocol-link regression receipt
date: 2026-10-15
status: SOURCE-COMMIT-AND-STATIC-PACK-TEST-PASSED__LIVE-DEVICE-NOT-TESTED
task: IMPROVE-EVAL-001
---

# Aletheia Improve — one-pass follow-up and targeted contract correction

> [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) controls evidence, provenance, authority and uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) provides optional appropriate humour and a constructive tone.
>
> Scope: complete a single source-level Improve-on-Improve review in response to the previous Stanford CME 295 research, without automatically adopting a new evaluation framework. This report is a **source/static-test receipt**, not a real receiving-AI benchmark, browser proof or completed device test.

## Why the review was done

The owner explicitly reiterated the real purpose of Aletheia Improve: examine existing applications and current GUI/dev/ideas/tasks contracts, discover what already works, and repair justified gaps without importing course recommendations wholesale. Stanford's nine lecture topics are research prompts, not instructions or design authority.

Owner's previous path proposal `aletheia-knowledge/ai-courses/stanford-cme295.md` was **not created**. The canonical actual file is [`KarstenEvans/aletheia-knowledge/knowledge/aletheia-stanford-cme295.md`](https://github.com/KarstenEvans/aletheia-knowledge/blob/main/knowledge/aletheia-stanford-cme295.md); retain this standard knowledge layout and avoid an unnecessary duplicate.

## Source and project instructions inspected

- Root `AGENTS.md`, `README.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `tasks.md`, `ideas.md`.
- Improve `README.md`, `aletheia-improve.md`, `aletheia-improve-page.md`, `aletheia-improve-memory.md`, `aletheia-improve.htm`, `aletheia-improve/tasks.md`, `aletheia-improve/ideas.md`.
- Previous [structured-fixture pilot](aletheia-improve-evaluation-pilot-2026-10-15.md).
- Related external-course interpretation: [Stanford CME 295 source review](https://github.com/KarstenEvans/aletheia-knowledge/blob/main/knowledge/aletheia-stanford-cme295.md).

## Evidence / observed gap

- The baseline Improve workflow already requires up-to-date sources, existing-work search, KISS, real tests/receipts, permissions and reporting unverified facts.
- The 3-case synthetic PASS/FAIL/PARTIAL exercise proved only that a deterministic checker can classify those controlled claims. A genuine source-blind receiving-AI baseline versus checklist study **has not been run**. Do **not** claim the checklist improves model correctness or create a standalone AI-judge tool.
- Separately, the shared GUI/dev documents already make both Protocol links mandatory near the beginning of **every generated Markdown output**, including copied AI handoff packs and later reports.
- The Improve HTML `buildPrompt` generated `# ALETHEIA IMPROVE PACK` and other information, but its explicit output header did not guarantee either link (links inside arbitrary fetched sources are not reliable). This was an **independent, directly verifiable shared-contract omission**, not a lesson copied from Stanford.

## Narrow changes made

1. `aletheia-improve/aletheia-improve.md`: declare existing both-protocol Markdown output contract next to canonical title.
2. `aletheia-improve/aletheia-improve-page.md`: document guaranteed links and add a static acceptance check.
3. `aletheia-improve/aletheia-improve.htm`: add literal Aletheia and Thalia links directly below the Markdown pack title, and tell the receiving AI to retain both in subsequent Markdown reports/receipts/checkpoints.

**No** change to the visible input controls, provider selection, app search, registry, remote permissions, AI-based evaluation, Stanford-specific capability, shared GUI/dev standards or Protocol repositories.

## Actual static tests, 15 October 2026

Test material: source on GitHub after writing, using a fresh GitHub fetch. The JavaScript inline block was parsed/compiled in a V8 JavaScript execution context. The extracted `buildPrompt` function was executed with minimal mocked inputs and **no fetched source excerpts** to check the fallback condition.

| Check | Result |
| --- | --- |
| Inline JavaScript syntax parses | PASS |
| Duplicate HTML element IDs | PASS: 20 IDs inspected; no duplicates |
| Generated pack shows both literal protocol URLs immediately after title, before source excerpts | PASS |
| Generated pack instructs receiving AI to preserve both links in downstream Markdown | PASS |
| Header links still present when `LIVE REGISTRY: NO` | PASS, using mock |
| Existing-work / prefer-extend workflow retained in generated text | PASS |
| No Stanford or AI-judge execution instruction inserted | PASS |
| Page spec records explicit acceptance requirement | PASS |

A short generated sample began:

```md
# ALETHEIA IMPROVE PACK

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance and uncertainty.
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional appropriate humour and positivity.

TARGET AS ENTERED: Aletheia Improve
SELECTED AI: Copy only
...
LIVE REGISTRY: NO
```

This is a **limited buildPrompt functional test with mocked arguments** and syntax check. It is not proof that GitHub Pages currently serves this commit, or that a user can copy/open an AI correctly in Android, Windows or Safari.

## Decision

- **RETAIN:** source-traced Stanford research in existing `aletheia-knowledge/knowledge/` location, labelled independent research.
- **FIX:** mandatory protocol links in the generated pack, because they are already a requirement in the existing GUI/dev contracts and were absent from the deterministic pack header. This fix is now committed and statically checked.
- **DEFER / NO BUILD:** Stanford-inspired AI grader, new RAG engine, separate app, universal scorecard UI, or a new provider-specific pipeline. Current evidence does not justify them.
- **PENDING:** a truly independent receiving-AI baseline/rubric test if desired, and pre-existing live GitHub Pages/mobile/device QA. These are not completed by this report.

## Acceptance handover

Read the actual project rules and latest GitHub source. If a later receiving-AI experiment is undertaken, preserve the exact baseline prompt and three case texts, run fresh isolated sessions where feasible, record full non-edited outputs, blind evaluators to expected labels where possible, check primary evidence, and judge whether the rubric materially improves performance. Stop if it adds no benefit. Do not have Improve recursively re-run itself without a new instruction.

**Conclusion:** a narrow pre-existing rule violation was corrected, with static-test evidence. The new Stanford-inspired evaluation feature is not adopted.
