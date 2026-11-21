# Aletheia Site Intelligence — page specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol): provenance, source evidence, approvals and uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md): optional approachable language, without diluting accuracy.

> **Stage:** v0.1 beta / development branch only, not published or live tested. **Created:** 21 November 2026.

## Purpose
Standalone Search Intelligence research doorway that complements, never replaces, the permanently free Aletheia Site Audit. Type a domain, choose market/period, run one free demo handoff or import a permanent-supporter Markdown access record for repeat research handoffs.

## Source of truth
1. Root AGENTS.md and ALETHEIA-SAFE-BOOTSTRAP.md
2. Root README.md, aletheia-GUI.md, aletheia-dev.md, aletheia-code.md, ideas.md, tasks.md
3. This page spec
4. \`aletheia-site-intelligence.md\` canonical AI operating instructions, including data accuracy/source rules
5. \`aletheia-site-intelligence.htm\` page implementation
6. \`../aletheia-site-audit/aletheia-site-audit.md\` and existing Affiliate Tools directory; related aletheia-knowledge research note

## Files
- \`aletheia-site-intelligence.md\`: portable provider-neutral AI research instructions.
- \`aletheia-site-intelligence-page.md\`: reconstruction and acceptance contract.
- \`aletheia-site-intelligence.htm\`: static browser UI, one-click AI handoff, local demonstration gate, optional import of supporter access Markdown.
- \`README.md\`: human-readable beta status and quick links.

Proposed path, **not a verified deployed URL**: \`https://karstenevans.github.io/aletheia-app/aletheia-site-intelligence/aletheia-site-intelligence.htm\`.

## Interface order
Header/menu, title + plain explanation, domain/market/period and AI provider, primary handoff, manual fallback textbox/status, transparent demo/supporter access section, research scope and limitation, official resource directory / Patreon link, existing seasonal Constellation shared footer.

## Access state
- Browser-local \`aletheia_si_demo_v1\`: \`used\`, set only after a genuine handoff is prepared and a copy/open attempt occurs. Not an authoritative one-time run count.
- Browser-local \`aletheia_si_supporter_v1\`: \`yes\` after local user file import. No account or payment verification.
- User file input: .md text; require exact independent lines \`aletheia_app: site-intelligence\` and \`access: supporter\` (case-insensitive; whitespace permitted); reject other formats and large files. Contents are never uploaded or transmitted. This is deliberately forgeable and not security.
- Current business status: Patreon \`KarstenE\` configured in a different Aletheia repository's FUNDING.yml; profile, tier, billing and full entitlement NOT verified. No automatic Patreon sync, card handling, newsletter or email collection.
- Confirmation/recovery issuance process for supporter access must be established and verified **before public sales**. Avoid claiming any £5 tier already exists.

## Data and behaviour
- Normalise public https URLs; reject embedded credentials, localhost, .local/.internal, and common literal private/reserved IPs. A static input validator is not a substitute for server-side DNS, redirect and SSRF protections; receiving AI must separately enforce them.
- Handoff prompt includes selected domain, market, period, mode, current canonical Markdown URL (and enough inlined evidence instructions for offline-fetch fallback), and asks for a complete .md report.
- DEMO: up to five question/keyword ideas, one competitor, three actions. SUPPORTER: up to 30, three competitors, five actions, where actual sources and model capabilities permit.
- Hand off to ChatGPT, Gemini or Claude with a synchronous one-click copy attempt and open. Manual copy textarea and provider link stay available when blocked. Browser itself does not query Google, Bing or any AI API.
- If copy/open attempt fails, still show prompt and manual process. Do not claim the external AI ran or created a report; this page cannot capture its answer.
- Do not load model results or paywall logic from untrusted user URLs as code.
- No ordinary newsletter collection, silent third-party analytics, advertising or scheduled search.

## References, disclosures, resources
- Editorial sources remain ordinary direct links; link to free existing Site Audit and official Affiliate Tools.
- Patreon KarstenE is the **configured existing creator link**, not verified active payments. When shown, make this caveat visible.
- The approved Awin MasterTag must appear exactly once, last before closing body if deploying as a public Aletheia app; editorial links marked \`data-awinignore\`, affiliate disclosures linked.
- Use shared Constellation with five static fallback links, shared JS and stylesheet; do not duplicate its catalogue.

## Acceptance checks
1. JS parses without error and HTML contains only unique IDs.
2. Domain validation rejects blank/invalid URL, local/private-IP test cases, credentials.
3. Demo one-run gate persists within same browser storage; clearing it is an acknowledged bypass, not falsely called secure.
4. Valid user-selected markdown supporter file unlocks; invalid and oversize file rejected; import never uploads.
5. Attempted handoff generates correct domain, market, period, mode and stable canonical source link. Copy/open failures display safe manual fallback.
6. Does not falsely claim connections to Google/Bing/ChatGPT/Gemini or Patreon payments, rank counts or AI-user prompt counts.
7. Navigation, keyboard focus, screen reader status, 320px mobile, reduced motion, external links and link-sprites fallback work when tested.
8. Site Audit and related production pages remain unchanged by this beta feature branch.
9. Explicit permission required before merging, selling subscriptions, connecting provider credentials, storing emails or changing existing Site Audit runtime.
10. Record SOURCE COMMITTED separately from DEPLOYED, LIVE-TESTED and DEVICE-TESTED.

## Status / resume
Development branch \`feature/site-intelligence-beta-2026-11\`. New app files only; existing public apps and policies untouched. Prior to launch: run real-browser phone/desktop checks, verify Patreon business setup and issuer process, then separately approve integration with site navigation and Site Audit.
