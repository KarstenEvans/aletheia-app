# Aletheia Trust Check

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance and uncertainty.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional presentation only.

**Status:** worldwide application v0.5 publication candidate (16 October 2026). Source and simulated handoff checks pass; browser/device/live verification pending.
**Owner:** [`KarstenEvans/aletheia-app`](https://github.com/KarstenEvans/aletheia-app), not SwindonOrgUK.

## Use it now

Open `aletheia-trust-check.htm`, paste a post/claim/name/link, choose your AI and click Trust Check. Paste and send in the opened AI. Use Download .md to keep the full portable app, or Save this check in the prepared-text panel to retain a specific request. The HTML embeds the complete current method and does not require a raw-file fetch. FACTS mode adds claim-by-claim evidence without replacing business/offer checks.

Full comparison and actual tests: [Aletheia-04 receipt](Aletheia-04-Trust-Check-Publication-Improve.md).

## Optional AI Skill / plugin fairing

[Open the Aletheia Trust Check fairing page](../integrations/aletheia-trust-check/index.htm) to download packaged `SKILL.md` and `plugin.json` ZIPs for compatible AI systems. It is **an additional way to use this same app**; it does not replace or change the canonical `.md` instructions, the main HTML launcher, or its evidence rules. The page and packages are committed to GitHub; importing and invoking them in external providers still needs separate real-account tests.

## What it does

Paste the text or enter the exact subject and click **Trust Check**. The `.htm` page synchronously copies an evidence-review prompt and opens a user-selected AI for paste and Send. The **receiving AI**, not the static web page, researches official sources, public social media, scam leads, company claims, technical notes and fake-AI/fake-news evidence using its real available tools. It must report inaccessible sources and offer relevant official reporting channels for plausible scams.

For A2Z/Swindon.org.uk or another app, use **`TRUST-CHECK(target, mode, jurisdiction, context, parent_task)`** in the shared `../aletheia-code.md` as an optional composable routine. The full behavioural contract remains here as Markdown, not duplicated in the Swindon site.

## Security and evidence-integrity improvement (11 October 2026)

The app's original **ten checks** and v0.3 interaction remain intact. v0.4 adds **source-lineage checks**, rejecting prompt-injection instructions in fetched content, out-of-band deepfake/impersonation verification, and explicit human approval plus recoverable versions before any *integrated agent* performs state-changing operations. These are **research instructions, not an actual malware scanner or guaranteed detector**. The page remains a static provider-neutral paste-and-send handoff.

The v0.3 Markdown/HTML were copied byte-for-byte into `archive/` before this pass; the unchanged original v1 method remains beside them. Test design is in `tests/security-cases.md`; `tests/trust-check-regression.mjs` provides a read-only Node static-source check. Browser and AI tests are still pending. See [Aletheia-03 improvement receipt](Aletheia-03-Trust-Check-Security-Improve.md).

## Files

| File | Role |
| --- | --- |
| [`aletheia-trust-check.md`](aletheia-trust-check.md) | Canonical provider-agnostic trust research application |
| [`aletheia-trust-check.htm`](aletheia-trust-check.htm) | One-click provider-neutral AI HANDOFF page |
| [`aletheia-trust-check-rsc.htm`](aletheia-trust-check-rsc.htm) | Free official scam-check/report/help resources, misinformation/fake AI resources, optional books & gifts |
| [`aletheia-trust-check-page.md`](aletheia-trust-check-page.md) | Reconstruction and test specification |
| [`aletheia-trust-check-original-2026-10-10.md`](aletheia-trust-check-original-2026-10-10.md) | Preserved unmodified original method |
| [`aletheia-trust-check-improve.md`](aletheia-trust-check-improve.md) | Aletheia Improve source/progress/validation receipt |
| [`tasks.md`](tasks.md) | Release checklist and future integration |
| [`Aletheia-03-Trust-Check-Security-Improve.md`](Aletheia-03-Trust-Check-Security-Improve.md) | Dated source/implementation/validation receipt |
| [`tests/security-cases.md`](tests/security-cases.md) | Manual source-poisoning/impersonation/permission trial cases |
| [`tests/trust-check-regression.mjs`](tests/trust-check-regression.mjs) | Read-only, local Node source/syntax regression |
| [`archive/`](archive/) | Exact v0.3 Markdown and HTML snapshots, not live versions |

## Public URLs after approved release

- Browser: `https://karstenevans.github.io/aletheia-app/aletheia-trust-check/aletheia-trust-check.htm`
- Markdown: `https://karstenevans.github.io/aletheia-app/aletheia-trust-check/aletheia-trust-check.md`
- Resources: `https://karstenevans.github.io/aletheia-app/aletheia-trust-check/aletheia-trust-check-rsc.htm`
- GitHub raw source: `https://raw.githubusercontent.com/KarstenEvans/aletheia-app/main/aletheia-trust-check/aletheia-trust-check.md`

These are **target** addresses, not claims that files are live. A review branch does not automatically publish to GitHub Pages.

## Worldwide Aletheia vs Swindon

- App and routine: `aletheia-app/aletheia-trust-check/`.
- Shared invocation: `aletheia-app/aletheia-code.md`.
- Worldwide Aletheia/Discover front door: eventual index link; future site/repository not silently created.
- Swindon.org.uk: existing `docs/swindonorguk-gui.md` defines optional **Add Trust Check**. Implement an adapter/link after inspecting live/PC Swindon source; no duplicated authoritative Trust Check Markdown.

## Consent and realism

No automatic device geolocation. User may enter country/region, or the AI selects actual target jurisdiction from sources. Static browser does not access private Discord or Reddit, retrieve user files or automatically submit fraud reports. All official web links and published results must carry real source/dates and accessible warnings; the final trust verdict always reflects available evidence, not a made-up numeric score.

## Review

Pending browser/device compatibility, end-to-end AI source checks, GitHub Pages live verification and user approval to merge and publish. Follow `tasks.md`.
