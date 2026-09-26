# Aletheia Code

> **Version:** 0.1 beta
> **Status:** PROPOSED LIBRARY INDEX
> **Purpose:** Small reusable Aletheia procedures that do not belong in the canonical protocol.

## Rule
Keep this library small. A substantial workflow belongs in its own Aletheia app.

## Shared contracts

This file is **not** the full app-development manual.

- `aletheia-GUI.md` owns common interaction, device, popup/window, accessibility and fallback rules.
- `aletheia-dev.md` owns source-of-truth, page-spec, security, agent-budget/resume and test/release rules.
- `AGENTS.md` is only a short entry router.

A reusable procedure belongs here when several apps need the same small operation. Do not duplicate an entire page specification here.


## SITE-REACHABILITY-GATE
1. Test HTTPS/HTTP and www/non-www where meaningful.
2. Test `robots.txt`, `sitemap.xml`, `llms.txt`.
3. Record available DNS/TLS/HTTP/redirect evidence.
4. Distinguish origin responses from an AI provider's fetch/safety refusal.
5. Compare browser and automated retrieval when evidence exists.
6. Return PASS / PARTIAL / FAIL / INCONCLUSIVE.
7. Label findings OBSERVED / SOURCE / INFERENCE / UNVERIFIED.
8. Diagnose blockers before ordinary SEO optimisation.

**Full tool:** `aletheia-site-audit/aletheia-site-audit.md`

## DISCOVERY-FILES-GENERATOR
After a verified inventory, propose `robots.txt`, `sitemap.xml` and `llms.txt`. Inspect existing files first; never invent sitemap URLs; never call generated files live until fetched from production; treat `llms.txt` as supplemental; validate and retest after publication.

## DISCOVERY-CROSS-POLLINATION-GATE
1. Decide whether the target is a public explanatory page/app where discovery matters.
2. If a useful Swindon.org.uk counterpart exists, give it the concise answer-first/public-front-door role.
3. Keep deeper reusable knowledge, evidence and interaction in the Aletheia app/Knowledge layer.
4. Link Swindon.org.uk → deeper Aletheia and Aletheia → matching Swindon.org.uk resource/front-door page.
5. Check primary/secondary/spoken/AI-answer query variants, SEO title, meta description and clean slug.
6. Check descriptive headings, meaningful internal links, related questions and annotated Go Deeper sources.
7. Create a topic hub only when several substantive pages/cards genuinely belong together; do not create thin keyword/tag pages.
8. If two public pages are substantially duplicate, choose one primary/canonical version and link rather than cloning the copy.
9. Measure real impressions/clicks/referrals after publication where possible. Generated metadata is not proof of visibility.

**Orchestrator:** `aletheia-improve/aletheia-improve.md`

## Promotion rule
If a fragment grows into a multi-stage workflow, move it into a dedicated app and leave a pointer here. This prevents Aletheia Code and Aletheia AI Easy becoming bloated.

## SECONDARY-WINDOW-GATE
1. Ask whether leaving the current page would destroy useful task state.
2. If yes, secondary resources/search/external services may open separately.
3. On capable desktop browsers use the project's approximately 900 × 760 resizable/scrollable child-window pattern where useful.
4. On mobile/tablet or when popups are blocked, use ordinary new-tab/new-window fallback.
5. One click opens one destination. Do not attach competing handlers.
6. Exclude downloads, anchors, `mailto:` and `tel:`.
7. Open synchronously from the user's click when browser activation is required.

## OPTIONAL-GRAPHICS-GATE
1. Check that the graphics library loaded.
2. Feature-detect the actual required browser capability.
3. Attempt renderer/context creation inside error handling.
4. Show the rich graphics only after successful initialisation.
5. On failure, show a useful static/CSS fallback plus navigation and a concise error/retry path.
6. Respect reduced motion and cap expensive rendering where appropriate.
7. Diagnose the capability/dependency failure; do not disable graphics merely because the device is Apple, Android or Windows.
