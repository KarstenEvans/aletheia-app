# Aletheia Shopping v1.0: reproducible page specification

**Date:** 1 October 2026
**Source of truth:** \`aletheia-shop-price-app.md\` (September v0.9 core preserved, v1.0 supersession appended)
**Runtime:** \`aletheia-shop-price-app.htm\` + companion \`aletheia-shop-price-app.js\`
**Resources:** \`aletheia-shop-price-app-rsc.htm\`
**Public route:** https://karstenevans.github.io/aletheia-app/aletheia-shop-price-app/aletheia-shop-price-app.htm
**GitHub repo:** KarstenEvans/aletheia-app, main, folder \`aletheia-shop-price-app/\`

## Identity and content

- Page title: **Aletheia Shopping | UK prices and personal shopping lists**
- H1: **Aletheia Shopping**
- Tagline: **Let your barcodes do the data entry.**
- Meta description should explain editable store/list templates, AI handoff and local price history. The page is not a live price feed.
- Primary user journey: **Choose template → edit shops/items → choose AI → copy/open AI → attach product photo in AI if desired → paste sourced quote block → show comparisons → optionally record checked basket → save private shopping-list.md.**
- Secondary route: local device barcode photo using experimental BarcodeDetector, with manual/AI-camera fallback. File is not uploaded/stored.

## Exact sections and key IDs

1. \`#setup\`: \`template\` select values \`blank,grocery,diy,cars,gifts\`; \`shopLines\` and \`itemLines\` editable one-per-line textareas; \`cameraImage\` optional file input; \`question\` values \`ITEM,WEEKLY,SPLIT,GRAPH\`; \`memberShops\` comma-separated loyalty-eligible shop names.
2. Original AI provider grid \`#aiGrid\`: ChatGPT, Gemini, DeepSeek, Other. Last selected provider persisted.
3. The original prompt and \`LAST_SHOP\` textarea are preserved inside separate collapsed Advanced details. No destructive migration, no forced API calls.
4. Open AI section uses original \`openAI\` + \`copyJoined\` controls; appends \`window.getShopTask()\` to current launch message. Cross-site prompt transfer is user copy/paste, not silent web injection. Barcode photographs normally go directly into the AI’s own UI.
5. \`#pricePanel\`: paste \`ALETHEIA_SHOP_PRICE_QUOTES_JSON\` into \`#priceJson\`; analyse via \`#compareQuotes\`; render \`#perItem\` and \`#weeklyResult\` along with \`#missingResult\`; \`#recordCheck\` stores a dated complete basket; \`#csv\` downloads results.
6. \`#trend\`: trend of **recorded** lowest full-basket totals with chart and accessible ordered text list, **only** when exact sorted items, selected stores, and confirmed loyalty contexts match. File import \`#loadMd\` and Save/download \`#saveMd\`.

## Data formats and boundaries

- Old \`ALETHEIA_SHOP_PRICE_LAST_SHOP ... END_ALETHEIA_SHOP_PRICE_LAST_SHOP\`: shops and products only; never prices/photos.
- New \`ALETHEIA_SHOP_PRICE_QUOTES_JSON ... END_ALETHEIA_SHOP_PRICE_QUOTES_JSON\`: AI-provided price quotes with \`shop,item,line_total_gbp,matched_product,match,source_url,source_checked_at,loyalty\`, plus top-level checked_at. Independent checking of linked sources remains with AI and user; the static HTML only validates structural presence, timestamp and scope.
- Only matching chosen shops and exact item lines; unit quantity priced as entire line; price positive finite; direct HTTPS source URL; match label EXACT/EQUIVALENT/SUITABLE; source timestamp no more than seven days old and not more than two hours in the future; loyalty rate requires explicit matching selected shop membership; out-of-stock not eligible; one lowest eligible offer per shop/item.
- Show first three matching offers **per item**, and first three **complete** retailers overall. Partial retailers are listed separately and excluded, not assigned £0.
- Graph saves snapshot \`{date,basketKey,shop,total,source_count}\` from user-confirmed check only. \`basketKey\` is derived from normalized sorted items, shops and loyalty names, not timestamp; changed scope yields separate cohort.
- Browser state \`localStorage['aletheia-shopping-v1']\`; original \`localStorage['aletheia-shop-price-last-shop']\` retained for backward compatibility. Volatile input quotes are **not** persisted as current prices.
- \`shopping-list.md\`: human-readable sections plus JSON fenced in HTML comment between \`ALETHEIA_SHOPPING_LIST_JSON_BEGIN\` and \`ALETHEIA_SHOPPING_LIST_JSON_END\`; exported user-only, not checked into public GitHub. Browser Save File Picker when supported, otherwise user-initiated download. Import reads user-selected file. Normal browsers cannot watch Downloads or silently overwrite files.
- HTML and JS are a pair for standalone/offline copies; GitHub Pages serves together. Markdown remains portable by itself.

## Aletheia Improve pass (one run, no recursion)

**Refresh:** accessed live trees for \`aletheia-app\`, \`SwindonOrgUK\`, \`aletheia-knowledge\`, \`aletheia-protocol\` and workflow-skills. The intended shop folder was not in the current GitHub tree.

**Existing-work discovery:** original September 2026 v0.9 source recovered from private conversation Library (Markdown, HTML, resource HTML); no duplicate GitHub source found. Reused rather than invented a second product. Routed to canonical shop basename \`aletheia-shop-price-app\` and canonical name **Aletheia Shopping**.

**Contracts reviewed:** repository \`AGENTS.md\`, README, Improve workflow/registry, shared GUI/dev requirements, and original app files. KISS/free-first/local-first; no secret credentials, no paid API, no automatic purchases and no autonomous publishing.

**Source checks:** OpenAI Shopping Research help (offers comparison/refinement, not price certification), ChatGPT Search Shopping help (product prices may lag and may not be the lowest), Which? UK supermarket comparison research published 3 September 2026 (comparable baskets and loyalty prices matter), MDN BarcodeDetector (experimental, HTTPS and limited browser availability). URLs:
- https://help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt
- https://help.openai.com/en/articles/11128490-improved-shopping-results-from-chatgpt-search
- https://www.which.co.uk/reviews/supermarkets/article/cheapest-supermarket-aPpYp9j1MFin
- https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector

**Applied:** moved ordinary tasks into a short visible UI, grouped advanced original fields in details, four editable templates + Blank, provider-neutral updated price prompt, optional local barcode decoding, dated evidence-block parsing, per-item three, full-basket three, partial exclusions, loyalty gating, portable shopping-list.md history with comparable graph and CSV export. Site-level Swindon.org.uk resource URL remains a separate deployment; local GitHub resource page is provided without assuming the Swindon version exists.

## Acceptance checks

- [x] JS original launcher and addon syntax compile.
- [x] Simulated Grocery template populates shops/items and updated lists produce compatible LAST_SHOP.
- [x] Synthetic quotes test: cheapest partial Asda does **not** beat full Aldi/Lidl/Tesco list.
- [x] Synthetic quote item ranking presents separate item rows, and full-basket cheapest is left.
- [x] Simulated second check creates second history entry and SVG graph.
- [x] Changing loyalty setting separates incompatible history.
- [x] Bad JSON visibly fails.
- [ ] Actual GitHub Pages HTTP/live page test from user browser.
- [ ] Android Chrome camera permission + BarcodeDetector supported/unavailable routes.
- [ ] iOS Safari/Firefox import/export and clipboard fallbacks.
- [ ] Save file to Downloads then import and verify round-trip on real device.
- [ ] Check mobile 320px, keyboard and 200% zoom/reduced-motion, current source URLs, matching size/weight, real loyalty and store postcode.
- [ ] Independently confirm sources in actual selected AI, including denial/failure and no fabricated results.

**No current supermarket price ranking has been verified by this code.** Price comparisons require user-provided researched evidence.
