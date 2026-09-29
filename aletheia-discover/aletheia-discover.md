# Aletheia Discover — worldwide discovery pilot

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol — evidence, sources, uncertainty and conflicts.  
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md — optional considered humour; not a substitute for facts.

**Status:** WORKING STATIC PILOT / NOT A LIVE AI SEARCH / NAME PROVISIONAL, 29 September 2026.  
**Technical name:** `aletheia-discover`. Public candidate names Atlas / Mystika / Discover; owner has not selected one.  
**Rendered page:** `aletheia-discover.htm`.  
**Page contract:** `aletheia-discover-page.md`.  
**Global guidance:** `../AGENTS.md`, `../aletheia-GUI.md`, `../aletheia-dev.md`, `../aletheia-code.md`.  
**Related:** `../ideas.md` / `../tasks.md` Priority #001 and SwindonOrgUK Priority #001.

## Purpose and scope
A single location-independent, language-aware discovery starting point for anywhere in the world, not cloned local city websites. The visitor explicitly names a destination and can change it without disclosing their actual location. The user may ask for Ayutthaya while in Swindon and request a Norwegian answer. Core route must remain free, no account or paid provider required.

## Pilot behaviour actually delivered
- A compact accessible sticky header with horizontally scrolling in-page navigation and a skip link.
- One form: required place; optional disambiguating region/country; topic selector; answer-language free text; optional specific interest; free-first checked by default.
- User submits locally, no auto-fetch. Show explicit unverified-search status and render real external URLs for Maps, official/original sources, independent search, OpenStreetMap, recent news/events and free options (if selected).
- Construct Aletheia research brief in requested language, preserving current-source verification criteria and both protocol links. This is **an instruction for a separately opened AI**, not an AI answer.
- Copy via clipboard on a user click with selectable textarea fallback, then separate optional provider link; each external click opens one destination. No auto-post.
- No geolocation, history upload, stored location, accounts, newsletter, affiliate links, live source verification or dynamic event cards in this pilot.
- Privacy: no localStorage/cookies; external providers/searches only receive the query after a user explicitly opens their link. Clipboard receives text only on explicit click.
- `noindex,nofollow` during draft/preview. Before any public indexing, add the correct production canonical, validated Open Graph image, true identity/schema and remove noindex after approval. Do not claim staged metadata is already live.

## Search and research contract for later provider
Source priority: official named source, independent reputable local sources, then user commentary labelled as such. Show publisher, direct original URL, original language, published/updated date when known, date checked, location/time-zone, ambiguity/conflict, event start/end and expiry. Distinguish a search suggestion/snippet from a verified original source. Never fabricate a venue, article, price, quote, date or visit. If provider unavailable, keep the static handoff fully usable and say so. Separate approved commercial resources and their disclosures from evidence. Free-first means no biased claim that all free choices are best.

## Global editorial route
One Aletheia blog/newsletter only with optional location, topic and language filters. No per-city clones. Research, copyright/licensing and human approval before published stories/social posts. Newsletter is future/opt-in, not active in the pilot.

## Release gates
1. Review branch and generated HTML, links, keyboard focus, narrow screen, overflow and reduced-motion.
2. Test form input, empty place, non-Latin place/language, ampersands, duplicate place disambiguation, free checkbox, copied prompt and clipboard denial.
3. Test Windows/Android and Safari/WebKit on actual devices; no unsupported compatibility claims.
4. Confirm agreed public name, page path, social preview image/metadata, indexability and canonical source; link in app directory and Swindon shell only after a working route exists.
5. Do not use migration-seed GitHub files to replace a newer live Swindon homepage.

**Source inspiration:** https://secretldn.com/food-drink/ and https://secretmedianetwork.com/en/ — patterns only, no copied design, text or images.