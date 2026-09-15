# Aletheia Code

> **Version:** 0.1 beta
> **Status:** PROPOSED LIBRARY INDEX
> **Purpose:** Small reusable Aletheia procedures that do not belong in the canonical protocol.

## Rule
Keep this library small. A substantial workflow belongs in its own Aletheia app.

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

## Promotion rule
If a fragment grows into a multi-stage workflow, move it into a dedicated app and leave a pointer here. This prevents Aletheia Code and Aletheia AI Easy becoming bloated.
