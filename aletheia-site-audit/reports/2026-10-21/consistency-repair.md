# Aletheia Site Audit consistency repair

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol): provenance, evidence and uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md): optional appropriate humour, never evidence.

Date: 21 October 2026 (Europe/London). Status: SOURCE FIXES PREPARED / static and handoff-logic checks passed; not published.

## Verified history and cause

- Reachability Gate (Stage 1) first appeared in commit 60ee355 on 15 September 2026 at 16:58 UK time.
- Identity and Trust Gate (Stage 0) was inserted in db8b81e on 21 October 2026 at 00:12 UK time, ahead of the existing numbered stages.
- That commit changed the canonical workflow but not the Site Audit launcher or its reconstruction specification. The copy handler still explicitly starts at Stage 1. This is observable instruction drift; no array-indexing defect is demonstrated.
- The Markdown contains literal backslash+n pairs in two section lines. These are not newline control characters.
- The Invisible Website is the public AI visibility explainer at /aletheia/ai-visibility/. It lacks a link to the existing optional FIELD LAB course entry.
- The diff does not establish whether the previous author read GUI/Dev. Compliance cannot be inferred from a commit alone.

## Source-read receipt and authority

Repos: KarstenEvans/aletheia-app (main c2784b0544a8fd447faa45e09a9ebcfef427cf4a) and KarstenEvans/aletheia (main 6458324e255901845766f5358925f80adaea1a4d).
Read Apps AGENTS, bootstrap, README, GUI, Dev, Code, Tasks, Ideas and current Site Audit Markdown/HTML/page specification; relevant shared navigation instructions/manifest. Read hub README, GUI and target article. Hub has no AGENTS or bootstrap at the inspected root. Historical reports remain unchanged.
User authorisation: correct the four reported defects and explain/show the gates. Prepare scoped source corrections for review; no main merge, Pages deployment, shared standards or settings changes.

## Intended corrections

1. Keep existing stage IDs; identify Stage 0 as the preliminary identity/trust check and Stage 1 as the first technical check. An inconclusive Trust Check must not block technical diagnosis.
2. Replace literal backslash+n sequences in Markdown prose with real paragraphs. Preserve legitimate JavaScript string escapes.
3. Always inventory llms.txt. Use MISSING — optional discovery aid only after verified absence; inaccessible is NOT TESTED/UNKNOWN. Propose a useful file without implying that its absence proves poor quality or explains missing citations.
4. Link the public AI visibility article to the existing course launcher, explain FIELD LAB after course handoff, and link the canonical Go Walkabout research rule.
5. Validate the real copy-handler output against canonical stage order and scope, including invalid URLs and optional Stage 6 off/on; verify headings and public destination links.

## Completed corrections and validation

All five intended corrections above are prepared in the review branches. Added a focused regression script at `aletheia-site-audit/tests/handoff-consistency.mjs` and aligned the current page specification and task receipt.

- PASS: execute the actual inline copy handler in a Node VM, with optional Stage 6 off/on; verify Stage 0 precedes Stage 1, inconclusive trust does not block technical diagnosis, crawler-purpose distinction and optional discovery-file labels survive in the copied text.
- PASS: invalid URL and credential-bearing URL rejection, bare-domain normalization, clipboard-denied status, Markdown standalone headings, no literal newline escapes in canonical audit prose, exact-once existing tracking tag.
- PASS: Python HTML parser inspection of changed pages, no duplicate IDs, required FIELD LAB/course and canonical research-rule links present, git diff whitespace checks.
- LIVE DESTINATIONS: existing course launcher and canonical research rule both returned HTTP 200 on 21 October 2026. These receipts verify destinations, not deployment of this repair.
- NOT TESTED: real browser clipboard interaction, phone/Safari rendering, cross-AI course execution and deployment of the new revision.

## Additional existing defects, outside this repair

Literal backslash+n paragraph escapes also occur in the current shared GUI (lines 509/551), Dev guide (493/539) and older Tasks text. They were already present before this repair. This is evidence of a recurring prose-serialization problem, not proof that a particular author skipped reading instructions. Shared standards need a separately reviewed cleanup; do not globally replace escapes in JavaScript or legitimate code examples.

## Resume

Review the scoped changes in fix/visibility-audit-consistency-20261021 and fix/visibility-field-lab-link-20261021; open review PRs and obtain publication approval before merging to main. Publication/device behaviour remain separate, unverified stages.
