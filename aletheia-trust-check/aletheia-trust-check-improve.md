# Aletheia Improve — Worldwide Trust Check correction and implementation

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — provenance, conflicts and uncertainty.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional positivity only.

**Stage:** Aletheia-02 / repository correction, design, implementation and static checks
**Date:** 2026-10-10
**Branch:** `feature/aletheia-trust-check-worldwide-20261010`
**Owner:** `KarstenEvans/aletheia-app`
**Not approved for:** main merge or production publication.

## Decision and corrected source-of-truth

The user clarified that this is a **worldwide Aletheia application**, not a Swindon.org.uk-owned implementation. The original SwindonOrgUK draft PR #4 mistakenly proposed a local canonical engine. The correct canonical folder is `aletheia-app/aletheia-trust-check/`, and Swindon A2Z should **call the Aletheia routine** rather than copy it. All source changes here are on a separate review branch; the Swindon production site is unchanged.

## Inputs and checks undertaken

- Inspected existing Aletheia Apps root `AGENTS.md`, `README.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `ideas.md`, `tasks.md`, `shared/README.md`, `aletheia-improve/aletheia-improve.md` and `aletheia-improve-memory.md`.
- Compared with the previous user-supplied `aletheia-trust-check(2).md` (1,916 characters/bytes in UTF-8) and the earlier Swindon review source. Preserved the original unchanged in this app folder.
- Verified the Aletheia Apps folder had no existing `aletheia-trust-check.md`, `.htm`, `-rsc.htm` or nested `AGENTS.md` at consulted main-branch paths; this is a scoped existence check, not proof there are no historical duplicates elsewhere.
- Inspected and reused the standard Aletheia code library `CTRL-V-AI-HANDOFF` and `ALETHEIA-CONSTELLATION-LINKS`, plus the shared seasonal link sprites, rather than creating parallel utilities.
- Confirmed research/report routes in official pages: Report Fraud police, GOV.UK/NCSC phishing email and 7726, FCA financial-firm tools, FTC ReportFraud, Australian Scamwatch, Canadian Anti-Fraud Centre, EU ECC-Net, Microsoft MSRC and Google Fact Check Explorer. `Verified` and `Calling Bullshit` book details sourced to publisher/catalogue. Links must be rechecked when used by future AI runs.

## What was built

- Canonical Markdown v0.3 with worldwide source ladder, scam + public social/Reddit/Discord leads, technical, health, NEWS/deepfake and false-AI-app modes, conflict/status vocabulary, relevant country-specific reporting instructions and a strict no-fake-live-access rule.
- `aletheia-trust-check.htm`: one input, one Trust Check action, provider selector, optional mode/country/context, manual clipboard fallback; labelled HANDOFF and honest that static HTML never performs live research.
- `aletheia-trust-check-rsc.htm`: free-first official country sections, verified UK phishing email, AI/fake-news/media integrity help, free learning, two topical books and optional security key gift idea. Commercial content cannot outrank source evidence.
- `aletheia-code.md`: one small reusable `TRUST-CHECK` routine pointing to the canonical file, preserving existing handoff and code-library scope.
- Root app README/task pointer; app reconstruction spec, README and tests.

## Observed validation vs outstanding

**Observed (static/source):** source files created/updated by GitHub connector; inline JS initially parsed in V8; the main HTML carried unique IDs, one expected Awin tag, five static Constellation anchors, protocol links in prepared prompt. These are **not** desktop or mobile browser tests.

**Not yet verified:** opening selected AI, copying on Safari/mobile, blocked popup, real external review access in AI, current local Swindon integration, deployed Pages URLs, GitHub Pages build settings and actual country reporting after a live AI run. Do not call these passed.

## Architecture

`Swindon.org.uk A2Z -> optional TRUST-CHECK(target,...) -> canonical Aletheia Markdown -> selected AI tools -> source-backed verdict`.

`Worldwide Aletheia Discover/site -> link to the same worldwide Aletheia browser launcher`.

The Aletheia worldwide *site* is separate from this Aletheia *app*. It has not been newly created in this task.

## Next review action

Review the GitHub draft PR and `tasks.md`, check browser/manual fallback/device paths and user-approved integration, then merge and deploy explicitly, verify the Pages URLs and update the receipt to LIVE only after an observed real response.


## Aletheia-03 security and source-integrity follow-up (2026-10-11)

**Authorised scope:** user approved preparation of the improvements on the same worldwide Trust Check draft branch, explicitly leaving the main branch and live website unchanged.

**Prior version preserved:** exact Git blob copies of v0.3 Markdown and HTML were committed to `archive/` before modifying their originals, and checked against source blob SHAs. The preserved original uploaded 10 October file remained unchanged.

**Implemented:** canonical workflow v0.4 source-lineage/data-integrity examination, quoted/hidden prompt-injection boundaries, independent impersonation callback, and approval/recovery limits on future action-capable integrations; corresponding static HTML handoff prompt updates. Retained existing UI, modes, source matrix and five AI destinations. Added `tests/trust-check-regression.mjs` and `tests/security-cases.md`, updated rebuild spec, README and tasks.

**Observed connector-side structure check:** 17 focused checks passed for presence of contract rules, backup blob hashes, fixed form/provider elements, prompt data quoting, five Constellation links, manual fallback, unique IDs, saved tests and stage receipt. **This is not Node execution, a real browser check, model security testing or deployment verification.**

**Source integrity caveat:** Object First's user-supplied 2026 vendor paper supports threat-model discovery; unverified statistics, product marketing or allegations in it were not imported as established facts.

**Full handover:** [Aletheia-03-Trust-Check-Security-Improve.md](Aletheia-03-Trust-Check-Security-Improve.md).

**Outstanding:** execute the committed Node regression in a real checkout, browser/device and live-AI manual cases, official-link freshness, owner diff approval, independent main merge and deployment approval. No normative Aletheia or Thalia protocol edits or Swindon live changes.
