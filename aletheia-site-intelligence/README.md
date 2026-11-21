# Aletheia Site Intelligence — beta

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) provides evidence and provenance. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) provides optional appropriate, human-friendly presentation.

**Created:** 21 November 2026  
**Version:** 0.1.0 beta  
**Status:** SOURCE COMMITTED on the isolated \`feature/site-intelligence-beta-2026-11\` development branch. NOT merged to main, NOT advertised as deployed, NOT live-tested on phone/browser, NOT connected to search APIs or payment processing.

## Files
- [\`aletheia-site-intelligence.md\`](aletheia-site-intelligence.md): actual AI research procedure; evidence rules; demonstration/supporter scope.
- [\`aletheia-site-intelligence.htm\`](aletheia-site-intelligence.htm): public-facing static handoff launcher once approved and deployed.
- [\`aletheia-site-intelligence-page.md\`](aletheia-site-intelligence-page.md): browser reconstruction, privacy and acceptance contract.
- This \`README.md\`: status and handover.

## What it does today
1. Accept a public website/page, market and research period.
2. Prepare a traceable research request for ChatGPT, Gemini or Claude; attempt to copy and open that provider, with visible manual fallback.
3. Restrict free demo handoffs in browser-local storage to one prepared request; allow reusing the same request.
4. Import a small user-selected supporter \`.md\` file and enable future handoffs on that browser.
5. Link visitors to the free Aletheia Site Audit, existing official research/affiliate-resource directory and pre-existing [KarstenE Patreon](https://www.patreon.com/KarstenE) reference.

**It does not:** directly fetch live keyword data, perform complete SERP tracking, independently verify Patreon payment, capture AI responses, automatically save the resulting SEO report, issue access files after checkout, take user email addresses, or make unlimited third-party API queries.

## Access model
One demonstration per browser profile is deliberately informal. Deleting local storage or forging the access file bypasses it, a conscious low-friction tradeoff. An access record provided after a verified supporter payment is proposed to include:

\`\`\`md
# Aletheia Site Intelligence Access
aletheia_app: site-intelligence
access: supporter
\`\`\`

This is a **portable assertion for the page**, not a signed licence or payment proof. The creator must confirm payments and issue/recover files manually until a separate authorised integration is built. The configured Patreon account's active state and tiers are **not independently checked**, so **do not solicit payment as though automated unlocking works**.

Permanent software use after a confirmed one-off £5 support payment is the intended policy; free/public sources remain free. Future paid data APIs can only be used with separate budgets/credits or keys provided directly to a secure backend, never exposed in static HTML.

## Further launch work (requires explicit approval)
1. Review the prototype in a real browser, test Android and desktop UI, keyboard, clipboard and popups. Verify public visitor URL after approved deployment.
2. Verify owner Patreon KarstenE profile, £5 offering, receipt workflow, supporter-file issuance and recovery. Create proper UK consent/privacy guidance before any email list.
3. Preserve existing Site Audit, then decide whether to remove its OPTIONAL Stage 3A promotional wording only after the replacement is ready. **Do not degrade the free audit.**
4. Add an app index card, footer, crosslinks and optional affiliate disclosure on a separately approved production update.
5. Integrate official read-only search performance APIs only if they make a measurable improvement and cost/privacy constraints are satisfied.

## Source-read and QA receipt
Read \`AGENTS.md\`, \`ALETHEIA-SAFE-BOOTSTRAP.md\`, \`README.md\`, \`aletheia-GUI.md\`, \`aletheia-dev.md\`, \`aletheia-code.md\`, \`ideas.md\`, \`tasks.md\`, existing \`aletheia-site-audit\` files, \`shared/README.md\`, shared link sprites and existing protocol \`.github/FUNDING.yml\`. Reuse, do not duplicate the Search Intelligence knowledge method or affiliate directory.

Initial test: browser HTML inline JavaScript parses, no duplicate IDs, matching Constellation CSS/JS links, Awin MasterTag reference used once. **Not run:** real browser workflows, remote AI responses, mobile/clipboard/popup, Patreon purchase/issuance, payment and full live Google/Bing connection.
