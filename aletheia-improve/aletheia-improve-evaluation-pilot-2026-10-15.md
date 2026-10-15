---
title: Aletheia Improve — Stanford CME 295 evaluation pilot
date: 2026-10-15
status: SOURCE-FIXTURE-PILOT-COMPLETE__AI-AND-BROWSER-PILOT-PENDING
task: IMPROVE-EVAL-001
knowledge_reference: https://github.com/KarstenEvans/aletheia-knowledge/blob/main/knowledge/aletheia-stanford-cme295.md
---

# Aletheia Improve: evidence-evaluation pilot 01

> [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — provenance, evidence, uncertainty, human authority. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional appropriate humour and constructive tone.
>
> **Scope:** A small **offline structured-fixture / current GitHub-source** pilot of an optional evaluation rubric, inspired by Stanford CME 295 Lecture 8. Not a live browser, AI-versus-AI, app-behaviour or cross-provider trial. **No code or protocol changes.**
>
> **Source date:** 15 October 2026. **Owner:** existing Aletheia Improve in `KarstenEvans/aletheia-app`; no new evaluator app. **Pilot result:** 3 fixture classes distinguished (PASS, FAIL, PARTIAL); **no measured production accuracy or user outcome.**

## 1. Question and baseline

**Question:** Does attaching an explicit, source-grounded **PASS / PARTIAL / FAIL / NOT TESTED** check add a useful distinction to existing Aletheia Improve output without creating a separate product?

Existing Improve does **already** require refreshing current files, checking external/repository claims, testing changes and recording what was not verified. That requirement must not be discarded. However, the current HTML `buildPrompt` execution contract and canonical Improve output specification do **not explicitly enforce a three-way truth/completeness verdict for an answer someone supplies**. A real receiving AI *might* recognise the errors using the existing instructions; the current pilot cannot establish its detection rate.

**Existing routing constraints:** Load root README, AGENTS, shared GUI/dev/code, tasks, Improve Markdown, Improve page spec, Improve HTML, memory, local README/tasks/ideas and relevant source. The app is a static **prompt-handoff launcher**, not a browser-hosted evaluation model, PDF reader or autonomous GitHub committer.

**Known pre-existing QA:** local and root tasks say live GitHub Pages/browser/mobile tests remain open; past *source/static* checks are not a substitute. An existing one-pass self-Improve guard says document safe findings now but do not recursively rewrite shared contracts.

## 2. Fixed user question and ground truth

**User's hypothetical question:** "Can Aletheia Improve read my PDF itself, automatically change GitHub files, and can I rely on it already being device-tested?"

To answer adequately, a candidate response must state all three facts, plus the positive capability when useful:

| Fact ID | Verified ground truth | Primary repository receipt |
| --- | --- | --- |
| F1 `pdf_manual` | The HTML labels non-text/PDF/binary files for **manual attachment** to the receiving AI; it does not extract the PDF itself. | [Current HTML, `processUploads`](aletheia-improve.htm); [page specification](aletheia-improve-page.md) |
| F2 `no_auto_writes` | The launcher does **not automatically write to GitHub**. | [Page specification, security/privacy](aletheia-improve-page.md); [canonical security boundary](aletheia-improve.md) |
| F3 `device_unverified` | GitHub Pages/browser and Android/Windows/Safari tests are still **not marked verified** by the current project task/acceptance records. | [Local tasks](tasks.md); [page specification, acceptance tests](aletheia-improve-page.md) |
| F4 `builds_pack` | It finds candidate source files and builds an improvement pack for a selected AI/copy-only handoff. | [Current HTML, `findMatches`, `buildPrompt`](aletheia-improve.htm); [README](README.md) |

All four source anchors were checked from current `main` through the connected GitHub reader.

## 3. Three controlled fixtures

These are **synthetic candidate responses**, not outputs observed from the live app or other AI providers.

### Case A — intended correct and complete response

> "Aletheia Improve assembles an improvement pack for a user-selected AI. It lists PDFs for manual attachment instead of extracting them itself. It cannot automatically commit fixes to GitHub. Source/static checks exist, but its live/device QA remains outstanding."

**Structured fixture:** `pdf_manual=true; no_auto_writes=true; device_unverified=true; builds_pack=true`.

**Observed source-check result:** **PASS**. Four of four explicitly represented facts matched the current code/spec/task evidence; all three facts requested by the hypothetical user are present. **NOT TESTED:** whether a real receiving model gives this answer on a cold run.

### Case B — deliberately false response

> "Aletheia Improve uploads and analyses the PDF automatically, then writes the fixes straight to GitHub. The app is already verified on Android and Safari. It builds an improvement pack."

**Structured fixture:** `pdf_manual=false; no_auto_writes=false; device_unverified=false; builds_pack=true`.

**Observed source-check result:** **FAIL**. Three contradictions: F1 (PDF), F2 (writes), F3 (device verification). F4 is true but does not offset the false claims. **NOT TESTED:** whether the baseline receiving AI independently identifies all three false statements.

### Case C — true, but does not answer the question

> "Aletheia Improve finds related project files and builds an improvement pack for the AI."

**Structured fixture:** `builds_pack=true`, with F1/F2/F3 missing.

**Observed source-check result:** **PARTIAL**. One correct capability statement; none of the three specifically asked-about facts were answered. A simple "no false facts" test would incorrectly accept this as complete. **NOT TESTED:** how another AI rates it without the explicit checklist.

### Source-checked fixture results

| Case | Claims present | Contradictions | Required facts missing | Verdict |
| --- | ---: | ---: | ---: | --- |
| A correct | 4 | 0 | 0 | **PASS** |
| B false | 4 | 3 | 0 | **FAIL** |
| C incomplete | 1 | 0 | 3 | **PARTIAL** |

**Method used:** A small in-session JavaScript check compared explicitly annotated fixture claim values against facts detected in the current canonical HTML/page specification/local task file. All four final source anchors returned present/true. It was **not** an LLM benchmark, an AI-output parser or a runtime test of `aletheia-improve.htm`.

**Tester issue caught and corrected:** The first fixture-check script looked for the exact phrase `LIVE/DEVICE still open` in the **local** task file. That phrase was in the root task record, not that local file, causing a false source-anchor failure. The check was corrected to use the real local-task language about failed live page inspection plus the page specification's "do not mark LIVE/DEVICE passed" rule. Rerunning then found all four anchors and the expected three verdicts. This is a **test harness wording mistake**, not proof of an Aletheia Improve bug.

## 4. What this pilot demonstrates and does not demonstrate

**Observed:**
- Current Aletheia Improve source exposes enough facts to distinguish false claims and omissions in a controlled example.
- The extra **completeness** rule matters: Case C is truthful but still fails to answer the questions.
- Existing Improve is already source-aware; the proposed change is a small output/acceptance-rule candidate, not a new architecture.
- Rigid exact-phrase checks can generate false alarms; source anchors and test statements must be inspected when a check unexpectedly fails.

**Not established:**
- No baseline-versus-new-prompt comparison has been executed on independent receiving AIs.
- There is no measured sensitivity, specificity, inter-rater agreement, runtime cost, latency reduction or proof of actual fewer hallucinations.
- No live GitHub Pages, mobile/browser or clipboard test was performed.
- No source code in Aletheia Improve or Smart Learn changed, and no Stanford lesson was claimed completed.
- One three-case fixture is insufficient to assert the proposed rubric improves real-world performance.

## 5. Smallest candidate for later review

**OPTIONAL workflow wording, not implemented:** Before declaring an improved output complete, briefly check (a) all important user requests answered; (b) source-grounded material facts; (c) what was observed versus inferred versus unverified; (d) external actions and tests actually performed. Give each applicable dimension **PASS / PARTIAL / FAIL / NOT TESTED**, with a direct evidence receipt and next action.

This could be added as a **compact evaluation/receipt step to the existing Improve instruction layer** only if a real pilot shows benefit. It does not require a new app, runtime backend, paid API, a permanent "AI judge" or a new protocol rule. Keep the normal KISS UI.

## 6. Next authorised experiment / stop criteria

1. Use the existing `aletheia-improve.htm` handoff **without modifying it**; give one receiving AI the same exact question and three candidate texts.
2. Run a baseline: ask the receiving AI to inspect current source and judge each candidate under today's Improve instructions. Record its answer verbatim with model/provider, source availability, date and any tool limitations.
3. Run the same fixed inputs with the **proposed compact rubric**. Reverse candidate order in a second pass to explore presentation bias. Check real original source URLs manually rather than letting models grade each other with no references.
4. Repeat on another accessible AI provider only with the owner's own approved access and non-sensitive fixtures. Record claimed confidence, missed claims, omissions, false positives and evidence anchors.
5. **Decision gate:** If the rubric produces a material, repeated improvement, propose the smallest spec/pack amendment for owner review. If no benefit or added complexity dominates, stop. No shared GUI/dev changes without explicit approval.
6. Separately continue already-open live/device QA for the launcher; do not mix that with answer-quality evaluation.

### Source list / handover
- [Aletheia Improve current Markdown](aletheia-improve.md) and [page spec](aletheia-improve-page.md)
- [Aletheia Improve HTML](aletheia-improve.htm), [registry](aletheia-improve-memory.md), [local tasks](tasks.md), [local ideas](ideas.md)
- [Root GUI contract](../aletheia-GUI.md), [root dev](../aletheia-dev.md), [root task register](../tasks.md)
- [Stanford CME 295 research note](https://github.com/KarstenEvans/aletheia-knowledge/blob/main/knowledge/aletheia-stanford-cme295.md)

**Final status:** **SOURCE-FIXTURE PILOT COMPLETE; ACTUAL RECEIVING-AI A/B TEST PENDING.** Evidence for the three verdicts is deterministic in this limited check, not an observed production capability.
