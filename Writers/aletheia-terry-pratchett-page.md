# Terry Pratchett writer reader — page build specification

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

Status: public static reader (28 September 2026). Rendered file: `aletheia-terry-pratchett.htm`. Primary source: `aletheia-terry-pratchett.md`. Visitor resources `aletheia-terry-pratchett-rsc.htm`; canonical resource source `aletheia-terry-pratchett-rsc.md`, `terry-pratchett.csv`, `writers.json`.
Canonical URL: https://karstenevans.github.io/aletheia-app/Writers/aletheia-terry-pratchett.htm

## Purpose and page order
Reader-friendly sourced writing-style introduction; profile/resources navigation; Audible author/Discworld catalogue links; five selected Audible UK title cards with identified narrators; Bookshop.org/official bibliography; downloaded CSV with checked-status data; affiliate and evidence disclosure; return to Writing Vibe app. No copyrighted cover images or full novels copied. Do not infer universal availability of every Audible edition.

## Browser dependencies and privacy
No JS/API needed to read page. External links are user-initiated and open separate tab, with no automatic redirects; browser works without a third-party service. Awin publisher MasterTag `https://www.dwin2.com/pub.3182162.min.js` appears once just before closing body. This site tag is **not** a claim of Audible programme approval or an approved referral link. Until approval, use direct catalogue/product URLs. Only after programme acceptance and terms/attribution check may separate approved, trackable deep links replace ordinary links.

## Data and testing
Primary source for Discworld 41-book order is publisher catalogue. Five selected individual Audible products verified in UK listings, as documented in `-rsc.md`. Remaining CSV entries link to Audible's author catalogue, tagged `author catalogue only; individual title not checked`. Narrator/edition credit is specific to a UK product page. Never store temporary trial prices/promotional offers in the static page. Test all links, response, browser rendering/mobile zoom/keyboard, alt/ARIA and exactly one MasterTag; do not claim live device tests without observing them.

## Resources route
Public navigation links to `aletheia-terry-pratchett-rsc.htm`; canonical research notes remain `.md` and are linked only as source/download. Match the app GUI resource-page rule and maintain one production MasterTag in each `.htm`.

## Readable Writing Vibe popup

The public main page's **Read the Writing Vibe** control opens an accessible native modal dialog, fetches the same-origin canonical `aletheia-terry-pratchett.md`, removes front matter and renders a safe limited subset of Markdown (headings, paragraphs, emphasis, lists, quotes, tables and HTTP(S) links). HTML in untrusted Markdown must be escaped before rendering; do not insert unsanitised raw HTML. Provide a visible close button, Escape/standard dialog behaviour, and an explicit source download. On fetch failure, show an error with an accessible GitHub source fallback. The resource links remain visitor-facing HTML. The `.md` remains canonical, not the primary reading UI.

## Main-page bookshelf, 28 September 2026

The main `.htm` is the visitor hub, rendering the complete `terry-pratchett.csv` into original accessible book cards: 41 Discworld publication-order titles and 23 selected other works. Each card has a Bookshop UK title-search link; the five checked individual Audible titles use their exact product URLs, and all other cards visibly use a general author-catalogue fallback. The source website remains cited in the research/attribution section, not copied or used as the main shopping detour. Browser fetch and RFC-style quoted-CSV handling are local/same-origin; links are constrained to HTTPS and explicit retailer hostnames. No separate search input is needed. The canonical CSV, research Markdown and resources source remain in the Writers folder. Direct retail links are not automatically our approved personal affiliate URLs. No external affiliate identifiers may be copied from source pages.


## On-page catalogue, individual destinations and gift pilot (28 September 2026)

The main reader is the browsing hub. Keep its already functioning native Writing Vibe dialogue and the full CSV-driven 41 + 23 shelf. The five specifically identified UK Audible destinations remain visible in `#listen`; no broad Audible author/series catalogue is a commercial browse shortcut. For all other audiobook rows the CSV URL is empty and the UI states `Individual audiobook link being checked`. Product detail retrieval failed with 503 for *The Colour of Magic* in a September 28 follow-up, so distinguish historic identification from current live confirmation.

Bookshop title-specific search URLs are useful provisional discovery links, not verified specific product URLs or personal affiliate tracking. Display that distinction. No live Audible membership referral CTA until the owner's approved, tested personal link can be inserted; publisher MasterTag alone does not qualify. The actual retailer performs checkout or signup after a deliberate visitor click.

Add `#gifts` to the main reader and `#gifts` to the resource page. Display original short explanations, official vs unofficial licensing/stock status, and direct product URLs. Currently the optional Hex-inspired ant habitat is an animal-care/education product, not a Discworld product or a real processor. Gift links remain non-affiliate until account approval is evidenced. No unlicensed product photos.

A small accessible `★` footer nav in both HTML pages links to verified public Apps, Stories, Writers, Knowledge and Swindon UK hubs. Test actual deployment and mobile/Safari behaviour before marking live QA complete. See `aletheia-terry-pratchett-link-audit.md` and shared GUI sections 21-22.
