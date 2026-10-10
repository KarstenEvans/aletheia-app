# Aletheia Trust Check — HTML build contract

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — source/provenance/uncertainty.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional tone, never alter trust findings.
- **Generated Markdown rule:** reports/exports include both links even without humour.

**Status:** review branch; source built, browser and live deployment pending.
**Primary spec:** `aletheia-trust-check.md` v0.3.
**Original:** `aletheia-trust-check-original-2026-10-10.md`.
**Rendered:** `aletheia-trust-check.htm`; **resources:** `aletheia-trust-check-rsc.htm`.
**Proposed public URL:** `https://karstenevans.github.io/aletheia-app/aletheia-trust-check/aletheia-trust-check.htm` (not verified live).

## Owner, sources and build order
Read this repo's `AGENTS.md`, `README.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `tasks.md`, `ideas.md`, `shared/README.md`, Aletheia Improve routine/memory, canonical Trust Check Markdown, this page spec, real HTML/Resources, then inspect SwindonOrgUK GUI only for integration. No root `AGENTS.md` in this app folder observed at start. Do not use Swindon-specific branding as the portable UI.

## User experience
1. Aletheia brand, accessible simple hamburger with Home, All Apps, Resources, Markdown, Aletheia Protocol and Swindon.
2. H1 Trust Check, one sentence explaining HANDOFF.
3. One main labelled query box for business, seller, product, website, advert, news item, AI service/claim. One main `Trust Check` button.
4. Simple AI selector beside the action (Gemini, Copilot, ChatGPT, DeepSeek, Claude); last choice may be saved in localStorage **only** as a benign preference.
5. Inside a concise disclosure: depth QUICK/DEEP/TECH/HEALTH/SCAM; optional target country/region or place, context. **No location inferred or transmitted without user action**; country left empty = worldwide, research actual subject jurisdiction and local-language sources.
6. From the **same user click**, assemble all essential Markdown research instructions, synchronous clipboard attempt, and **exactly one** selected AI popup (~900 × 760) or one mobile new tab. Do not await network before window. User then pastes and sends.
7. Clipboard/popup failure: show editable selectable prompt text and a single manual copy button / direct provider link. A blocked popup must not automatically spawn another.
8. Concise `What Trust Check does`, explicit limitations that neither the page nor a selected AI automatically accesses private Discord/Reddit/Microsoft information.
9. Resource page link near footer, curated Constellation static 5 anchors with shared CSS/JS and seasonal witch where valid, reduced-motion/fallback. Standard Awin MasterTag appears **once** at end for eventual production, factual/editorial links marked `data-awinignore`. No adverts or gifts above primary task.

## Domain separation and composability
- Portable canonical logic resides in `aletheia-trust-check.md` and small `TRUST-CHECK` pointer in `aletheia-code.md`. Do not clone routine into site HTML.
- Static page includes sufficient self-contained summary for AI even when canonical raw Markdown cannot be fetched. It may additionally include its canonical raw URL.
- `?q=...`, `?query=...`, `?search=...` prefill input, do **not** auto launch.
- For Swindon A2Z/AI4U pass the original task + Trust Check routine as an optional *add-on*, keep local findings first and Trust Check second. Website branded interface can link to worldwide app instead of shipping a second copy.
- Future Aletheia Discover / Aletheia global website indexes/launches the same app; do not create city or AI-provider forks.

## Report contract
A genuine AI run must cite opened originals with checked date, jurisdiction, positive/negative evidence, original complaint themes, unresolved sources, and outcome **reassuring / mixed / caution / insufficient evidence** with independent confidence. Source status distinctions are mandatory. Add official **check/report/get-help** route for relevant country when fraud/impersonation is materially implicated and verified by AI, not just a generic national UK destination.

## Security/privacy
No server-side data store, telemetry, tracking parameters on evidence, or unasked publication. Clipboard is user-initiated; warn about private details before transfer. Query entered into page is not sent until pasted into selected provider. `textContent`/text-area value only, no unsafe `innerHTML` from input. URLs are fixed HTTPS provider destinations. Reject empty queries. Do not ask to upload images/documents without a genuine provider upload path.

## Testing and release gates
- [ ] Static: HTML parser, inline JavaScript syntax, unique IDs, valid hrefs, correct 5 static constellation anchors, MasterTag once, both protocol links in Markdown and prompt.
- [ ] Test all provider mappings, one-click popup/clipboard success and failure fallback; Unicode inputs, query params and long URLs; URL phishing text treated as inert content.
- [ ] Test no forced country inference; international regulatory source routing; social/Discord `NOT CHECKED` reporting when inaccessible.
- [ ] Keyboard, 320px/200% zoom, focus, labels, narrow Android/iOS, desktop Chrome/Edge/Firefox, Safari/WebKit, reduced motion.
- [ ] Verify resources official links and locale scope independently; books/gifts secondary, untracked/no affiliate bias.
- [ ] Merge PR separately from real GitHub Pages deployment; LIVE status requires fetching and interacting with published URL.
- [ ] Test Swindon adapter against latest local/Fasthosts source without overwriting its GUI.

## Receipt / exceptions
2026-10-10: Aletheia Apps path declared canonical by user. Earlier Swindon source PR #4 is superseded; leave it unmerged and reference the corrected app. Worldwide core is not a Swindon-local product. No Aletheia-wide standalone repository created without a scoped site build request.
