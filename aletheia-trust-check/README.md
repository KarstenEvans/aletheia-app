# Aletheia Trust Check

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance and uncertainty.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional presentation only.

**Status:** worldwide application source under review (10 October 2026). No confirmed live deployment.
**Owner:** [`KarstenEvans/aletheia-app`](https://github.com/KarstenEvans/aletheia-app), not SwindonOrgUK.

## What it does

Enter the exact subject and click **Trust Check**. The `.htm` page synchronously copies an evidence-review prompt and opens a user-selected AI for paste and Send. The **receiving AI**, not the static web page, researches official sources, public social media, scam leads, company claims, technical notes and fake-AI/fake-news evidence using its real available tools. It must report inaccessible sources and offer relevant official reporting channels for plausible scams.

For A2Z/Swindon.org.uk or another app, use **`TRUST-CHECK(target, mode, jurisdiction, context, parent_task)`** in the shared `../aletheia-code.md` as an optional composable routine. The full behavioural contract remains here as Markdown, not duplicated in the Swindon site.

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
