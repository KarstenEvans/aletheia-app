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

## CTRL-V-AI-HANDOFF
1. Build the complete compact AI payload synchronously from already available page state.
2. Put it into an off-screen textarea, select it and attempt synchronous copy while the page still owns the user click.
3. Open exactly one selected AI destination immediately from that same click. Desktop may use the standard approximately 900 × 760 resizable/scrollable child window; mobile uses ordinary new-tab/window behaviour.
4. Keep the Aletheia page underneath and show: **Paste into the AI and send**.
5. Where secure Clipboard API is available, it may reinforce the copy operation, but do not await it before opening the provider.
6. If copy fails, reveal a small manual handoff textarea + Copy control. Never navigate the user to raw Markdown as the fallback.
7. Include the canonical app Markdown URL plus enough embedded instructions that the handoff still works when the receiving AI cannot fetch URLs.
8. Keep provider URLs in one replaceable map/select control. Remember the last provider locally when useful.
9. Label this architecture **HANDOFF**. It is not CONNECTED AI.
10. Test Chrome/Edge desktop, Android Chrome, and Safari/WebKit paste/popup behaviour independently.

## OPTIONAL-GRAPHICS-GATE
1. Check that the graphics library loaded.
2. Feature-detect the actual required browser capability.
3. Attempt renderer/context creation inside error handling.
4. Show the rich graphics only after successful initialisation.
5. On failure, show a useful static/CSS fallback plus navigation and a concise error/retry path.
6. Respect reduced motion and cap expensive rendering where appropriate.
7. Diagnose the capability/dependency failure; do not disable graphics merely because the device is Apple, Android or Windows.

## ACCESSIBILITY-LAYER-GATE
1. Start with semantic accessible HTML; the shared component is enhancement, not repair.
2. Reuse `shared/accessibility-layer.css/js` before inventing another text-size/focus/read-aloud toolbar.
3. Mark only non-essential chrome with `data-aletheia-focus-hide`; keep the task, safety messages and exit route visible.
4. Mark one preferred `data-aletheia-read-region` when read-aloud should cover a specific region; selected text takes priority.
5. Feature-detect speech APIs and fail visibly but gently.
6. Do not label AI functions such as OCR, translate or simplify as local unless the page actually implements them.
7. Store only benign local preferences such as text size/focus; never infer or store diagnoses.
8. Test narrow mobile, keyboard, 200% zoom and reduced motion.

## ALETHEIA-CONSTELLATION-LINKS
1. Use the existing `shared/link-sprites.json` curated source of HTTPS destinations and dates rather than inventing per-page star lists.
2. Add contained, mobile-friendly HTML footer anchors (five useful static defaults), shared CSS/JS and visible labels, not decorative flying links over the page.
3. Render `🧙` Halloween special only for browser-local 09-01..11-10 inclusive; use default stars for 11-11..11-24 and January..August, winter icons for 11-25..12-31. Do not show an unverified Christmas destination.
4. No JS, failed manifest or cross-origin fetch must leave the basic five static links usable. Respect reduced motion, hover/focus pause, standard keyboard/touch and ordinary HTTPS editorial destinations with `data-awinignore`.
5. Test the dates and actual deployed routes. See `shared/README.md` and `aletheia-GUI.md` §21 for implementation and approval boundaries.
