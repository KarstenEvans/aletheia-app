---
title: "Aletheia-03 — Trust Check: Source Integrity and Security Improve"
system_id: "aletheia-trust-check"
stage: "Aletheia-03"
date: "2026-10-11"
status: "SOURCE CHANGES SAVED; STATIC SOURCE CHECKED; BROWSER/AI/DEPLOYMENT UNVERIFIED"
authority: "Approved improvement to existing feature branch only; main/deployment not approved"
---

# Aletheia-03 — Trust Check: Source Integrity and Security Improve

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, uncertainty, provenance and human-controlled changes.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional careful tone, not a source of factual authority.

**Target:** `KarstenEvans/aletheia-app/aletheia-trust-check/`.
**Working branch:** `feature/aletheia-trust-check-worldwide-20261010`.
**Review:** [draft pull request #2](https://github.com/KarstenEvans/aletheia-app/pull/2).
**Exclusions:** no changes to `main`, `SwindonOrgUK`, Aletheia/Thalia normative protocols, external AI accounts, production websites or permissions.

## 1. Request and discovery

The user approved a proposed, review-branch-only improvement to the worldwide Aletheia Trust Check, reusing its existing UI and methods. GitHub verification found:

- `SwindonOrgUK` holds an earlier *closed and unmerged* feature PR #4; it is not the canonical worldwide implementation.
- `aletheia-app` already holds the complete worldwide draft in open **draft PR #2**. No duplicate app or new provider-specific version was necessary.
- The existing user-supplied Trust Check original is `aletheia-trust-check-original-2026-10-10.md`. Version 0.3.0 was in the canonical Markdown and HTML when this pass began.
- App root `AGENTS.md`, `aletheia-GUI.md`, `aletheia-dev.md`, Improve workflow, the existing target README, canonical Markdown, HTML, page spec, audit and tasks were inspected for scope and compatibility.

## 2. Source and interpretation

**Supplied source:** Object First, *Invisible Threats: How AI Is Rewriting the Rules of Data Protection* (2026, PDF, eleven pages). Pages 4–7 discuss AI-driven attacks, data poisoning, encoding/hidden-text manipulation and defensive tools; pages 8–10 emphasize recoverable data and the potential for autonomous assistants to damage stored data. It is a **vendor white paper** promoting immutable backup storage. Its numerical claims, product guarantees and cited incidents have not been independently verified in this pass; none becomes a Trust Check fact merely by appearing in the paper.

**Engineering inference, not a quotation:** Training-data poisoning affects how a model was built; **retrieval/source poisoning** can instead affect an individual Trust Check when it reads forged documents, duplicated articles or manipulated reviews. A static Markdown/HTML handoff can mandate sceptical treatment of these inputs, but it cannot itself enforce isolation inside whichever AI the user chooses.

## 3. Implemented in the existing app

1. **Original-source lineage:** Identify the earliest accessible source of a material claim; copied reporting and repeated AI summaries do not qualify as independent corroboration. Record first dates, original vs reprint, corrections, conflict and missing evidence. Preserve the original ten-item Trust Check basis.
2. **Prompt-injection boundaries:** Treat webpages, PDFs, comments, transcriptions, metadata, hidden Unicode and tool responses as untrusted evidence candidates; reject operational instructions or requests for secrets embedded in them. Record material suspected attempts without following them.
3. **Impersonation checks:** A voice/video/message cannot authenticate its purported origin by itself. Recommend out-of-band checking with an independently known channel; classify media detectors and absent provenance as inconclusive rather than proof.
4. **Recoverability and approval:** READ/ANALYSE/DRAFT by default. No automatic report, browser crawl, upload, installation, send, publish, delete or repository write. Any future capable agent requires scoped human approval and genuinely restorable snapshots before consequential changes.
5. **Static handoff continuity:** Kept one main input, one Trust Check button, the five existing AI choices, optional mode/region/context, status/manual-copy fallback and existing Constellation links. Expanded the *receiving AI's prompt*, not the visible front-page complexity.

**Files updated:**
- `aletheia-trust-check.md` (v0.4.0)
- `aletheia-trust-check.htm` (existing page, enhanced prompt)
- `aletheia-trust-check-page.md` (rebuild/test requirements)
- `README.md` and `tasks.md` (scope, links, open QA)

**New files:**
- `archive/aletheia-trust-check-v0.3-pre-security-improve-2026-10-11.md`
- `archive/aletheia-trust-check-v0.3-pre-security-improve-2026-10-11.htm`
- `tests/trust-check-regression.mjs` (Node read-only local checks)
- `tests/security-cases.md` (14 manual acceptance scenarios)
- This stage receipt.

## 4. Preservation and provenance

- Previously preserved original v1 user method: Git blob SHA `8f6212a56fb5c6fd5f9823f7116e56c2e645acf0`.
- v0.3 pre-change Markdown Git blob SHA: `ec44dcbd8084569f94c7f41faee867e15758c2ba`.
- v0.3 pre-change HTML Git blob SHA: `1f2719a3f1ea5b517d505f055d64a88816d0ce5e`.
- Both new v0.3 archive files were fetched back after creation and their Git blob SHAs matched their original source SHAs exactly. Preserve both baselines and the original. These hashes prove equality of stored blob bytes, **not** substantive accuracy or tested restore capability.

## 5. Observed validation versus unverified behaviour

**Observed via GitHub connector:** Working branch and draft PR identified; v0.3 snapshots committed and byte-identical by Git blob SHA; changed files fetched back and compared to the intended complete text; page still declares the expected static controls, original AI mapping, fixed provider destinations and five link-sprite navigation anchors. The changes were limited to the existing draft branch.

**Static-source checks:** The security requirements and test files were saved to GitHub. They do not, by their presence alone, establish that the Node test script was actually executed or that a browser behaved correctly.

**Not yet tested:** Running `node tests/trust-check-regression.mjs` from a checked-out repository; real desktop/Android/iOS handoff and paste; Safari/Firefox compatibility, blocked popups, focus/200% zoom; the fourteen human/AI test cases; current UK and international official reporting links; GitHub Pages deployment; Swindon integration; production restoration.

## 6. Review questions and remaining queue

- Run the committed Node static regression script locally and record its actual PASS/FAIL result; fix syntax/coverage failures on this branch only.
- Perform actual browser and independent-source trials in `tests/security-cases.md` with dated evidence, especially suspected prompt-injection handling. Do not describe a model-prompt boundary as a guarantee.
- Inspect proposed PR diff and approve its final scope. Confirm whether any later, separate normative proposal belongs in Aletheia's agentic profile; **none has been implemented here**. Thalia is unaffected.
- Reverify free official scam/help links before publication. Any future automatic external scanning or backup integration would need new permissions, threat modelling and separate approval.
- Obtain **separate** human approvals to merge PR #2, publish GitHub Pages and change the live Swindon website. Nothing in this branch authorises those actions.

**Status at stage delivery:** review-ready source proposal; implementation and browser QA are not equivalent; no release claim.
