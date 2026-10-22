# Aletheia Trust Check: optional Skill fairing page
[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs evidence/provenance/uncertainty; [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) governs optional appropriate humour.

**Status:** Public source committed / GitHub Pages deployment and device verification remain separate. **Date:** 22 October 2026. **Owner:** `KarstenEvans/aletheia-app/integrations/aletheia-trust-check/`.

## Purpose
A low-complexity public page exposing two download packages and plain-English instructions for installing the existing Trust Check method inside compatible AI provider interfaces. Not a substitute for the existing app, not a direct AI/chat execution surface, not a separate Trust Check engine.

## Source of truth
- `aletheia-trust-check/aletheia-trust-check.md` is canonical and always wins over snapshots.
- `skills/aletheia-trust-check/references/aletheia-trust-check.md` is an exact pinned copy.
- `skills/aletheia-trust-check/SKILL.md` is the minimal provider-neutral adapter.
- `plugin.json` wraps the Skill for supported ChatGPT/Codex plugin packaging.
- `aletheia-trust-check-skill.zip` includes root `SKILL.md` and `references/aletheia-trust-check.md`.
- `aletheia-trust-check-plugin.zip` includes root `plugin.json` and `skills/aletheia-trust-check/SKILL.md` plus reference.
- `README.md` and `TESTS.md` own detailed import notes and test receipts.

## Page contract
- `index.htm` is the public page at https://karstenevans.github.io/aletheia-app/integrations/aletheia-trust-check/index.htm.
- Navigation: Aletheia, existing Trust Check and resources; no forced provider-choice modal or sign-in.
- Two download links for the two files, one original-app link, three basic steps, four provider notes in native `details` toggles, source/testing caveats and both protocol links.
- No API, scripts to read private input, automatic files transfer, geolocation, tracking beyond site-standard optional Awin tag, or auto-opening external AI.
- Static, mobile-first and keyboard-operable. Preserve simple user journey, source attribution, disclosure and the original app's uninterrupted function.
- Download files must actually exist and match expected ZIP layouts. Anchor links are same-origin, so download attributes may be used.
- Provider setup details change; confirm source docs before changing claims about plan access. Don't imply public ChatGPT directory submission.

## Required tests
1. ZIP integrity: both archives extract, Skill ZIP root has `SKILL.md`, plugin ZIP root has `plugin.json`, expected reference copy byte-equals canonical Markdown.
2. JSON manifest parses, frontmatter matches Skill name, both protocol links included.
3. HTML parse, no duplicate IDs, internal relative targets exist, Awin tag exactly once, mobile stacking and keyboard focus accessible.
4. Published URL returns the actual HTML and the two ZIP URLs return genuine ZIP bytes; test browser downloads and file opening from phone and desktop.
5. Verify a real import and invoke in each supported host separately. Until then label as untested; provider availability limits vary.
6. On future canonical changes, rebuild and re-test archives from the new pinned snapshot. Never silently diverge.

**Change boundary:** The original `aletheia-trust-check.md` and existing full HTML launcher are not modified beyond an optional plain link from its normal Resources section.
