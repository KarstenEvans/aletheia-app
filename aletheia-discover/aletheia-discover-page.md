# Aletheia Discover page reconstruction and QA

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol — provenance and uncertainty.  
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md — optional considerate humour.

**Status:** static pilot, 29 September 2026.  
**HTML:** `aletheia-discover.htm`  
**Primary spec:** `aletheia-discover.md`  
**Canonical public URL:** none until reviewed and released; preview remains `noindex,nofollow`.  
**Resources:** existing Swindon affiliate disclosure; no affiliate scripts or offers are used here.

## Actual on-screen order
Skip link; sticky global header (Aletheia home and Swindon links, scrollable navigation to Discover/Research/How/Sources); H1 + one-line benefit; primary form; research-links output; AI handoff textarea/copy + separate AI links when submitted; short How/Privacy note; protocol/footer links.

## Exact inputs and output
`place` required (140 characters), `detail` optional country/region (100), `topic` fixed choice list, `language` required free text (60), `interest` optional (180), `free` checked by default. Optional URL `?place=` prefills (capped at 140), never auto-submits. Manual place is the primary mode; never ask for geolocation implicitly.

Submit: use HTML validation; trim/combine place and detail; clear previous external-link children, create each anchor safely with DOM `textContent` and `encodeURIComponent`; provide search URLs for Google Maps, official/local web results, independent web results, OpenStreetMap and Google News, plus free-choice web search if selected. `target=_blank rel=noopener noreferrer`. **These are routes to search**, not app-owned verified result cards. Update live status; reveal generated editable prompt preserving original source, translation, checked date, event status, uncertainty, free-first and disclosed commercial separation. Copy uses Clipboard API on explicit click; fallback focuses/selects textarea with a manual instruction. Separate AI link click does not automatically send prompt.

## Dependencies and privacy
Self-contained static HTML/CSS/JS and external outgoing destinations; no CDN, API key, search backend, localStorage, analytics, cookies or monetisation script. No passive network request to a third-party service. The user chooses when to open an external source. Data stays in page until that action. Do not add a newsletter form without a consent/privacy/backend design.

## Accessibility and visual rules
Touch targets >=44px, visible focus outline, labelled inputs, status `aria-live`, skip link, responsive one-column form <=620px, scrollable topic navigation, sticky-header scroll offset, no hover-only controls, reduced-motion rule. One task/search box rather than duplicate header search. Source links are normal anchors; never block downloads/anchors with popup handlers. Desktop popup sizing may be adapted later, but only when it is reliable with one click/one destination.

## SEO and editorial follow-up
For public release: remove draft noindex only after approved launch, verify real canonical URL, make original 1200x630 social image, add accurate OG/Twitter cards and publisher identity, and use WebApplication structured data only for visible true features. No fake article, locality, FAQ, ratings, staff, local reporting, event availability or dates. Static explanation is crawlable without JS. Aletheia newsletter is one feed with filters, deferred. Swindon home adopts a link only when it exists and existing home source is reconciled.

## Tests and status
- Source assertions: sticky CSS, noindex, required inputs, safe URL encoding, trust/protocol wording and no geolocation/localStorage found; initial authoring assertions passed.
- Runtime/actual-device tests: pending; do not call launched or cross-browser tested until evidenced.
- Full live search, source receipts and dated event filtering: future adapter, not implemented.
- Acceptance: submit Ayutthaya, Thailand with Norsk; no Swindon lock-in; source/search handoffs and truthful status, with no fabricated results.