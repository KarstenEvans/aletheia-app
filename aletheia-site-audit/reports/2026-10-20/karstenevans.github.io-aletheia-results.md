# Aletheia Site Audit result: karstenevans.github.io/aletheia/
**Date:** 2026-10-20 | **Outcome:** INCONCLUSIVE live crawler access; source HTML appears crawl-ready | **Scope:** Aletheia, the Worldwide AI site (not the Apps or Knowledge project sites).

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol) · [Site Audit](https://github.com/KarstenEvans/aletheia-app/blob/main/aletheia-site-audit/aletheia-site-audit.md)

## Executive result
- **OBSERVED:** The public web retrieval tool refused https://karstenevans.github.io/aletheia/ and its /index.html. The same tool also refused /aletheia-app/ and /aletheia-knowledge/ on the same GitHub Pages hostname. This shows the tool could not fetch these pages; it does **not** identify the failing layer, prove a server-side denial or show a trust blacklist.
- **SOURCE:** The live GitHub repository main branch `index.html` exists, has ~11 KB of HTML with a title, meta description, self-referential canonical, Open Graph metadata, one H1 and 18 HTML anchors; no source-page meta noindex. Its content is normal HTML, not exclusively client-rendered.
- **SOURCE:** Main root had no `robots.txt`, `sitemap.xml`, `llms.txt`, `_config.yml` or `CNAME` at the checked paths. Do not equate repository absence with verified deployed URL absence.
- **UNVERIFIED:** Actual HTTPS status, DNS, certificate, redirects, CDN/security rule, GitHub Pages setting/deployment success, user site robots policy, sitemap endpoint, Google/Bing index coverage, independent verified-bot access and ChatGPT search citation.

## Critical GitHub Pages correction
For `https://karstenevans.github.io/aletheia/`, standard compliant crawlers request `https://karstenevans.github.io/robots.txt`. A project file at `/aletheia/robots.txt` is **not** the controlling robots file. The same hostname root governs project paths for Aletheia Apps/Knowledge too. A valid project sitemap **may** live at `/aletheia/sitemap.xml`, but we did not verify it live.

## Finding table
| Test | Result | Finding | Priority | Next step |
| --- | --- | --- | --- | --- |
| Public homepage HTTP | INCONCLUSIVE | Web tool cannot retrieve, source HTML exists | P0 diagnosis | Test outside this web tool, capture raw 200/301/403/404 evidence |
| HTTPS/DNS/TLS | UNVERIFIED | No raw network telemetry here | P0 verify | Inspect TLS chain/DNS and real redirects from ordinary workstation |
| robots.txt policy | UNVERIFIED | Host-root robots content inaccessible | P0 verify | Check `https://karstenevans.github.io/robots.txt` |
| Sitemap | UNVERIFIED | No source root sitemap; live endpoint not read | P1 | Build real URL inventory; publish a sitemap for /aletheia/ only if useful |
| Indexing and AI citations | UNVERIFIED | No property data; searches didn't independently establish indexed public pages | P0 measurement | Verify canonical URLs in Google Search Console/Bing; evaluate real prompts |
| Search-friendly page source | PARTIAL PASS | Static text, HTML links, canonical, title and OG observed in source | P2 | Validate actual served HTML and link responses after access is measured |

## Smallest safe change
**AUDIT + PROPOSE only.** No robots allow-all, no disabling security, no host migration. First confirm GitHub Pages deployment and a real HTTP response from a normal independent workstation. Next inspect hostname-root robots.txt and Search Console. Only then consider sitemap publishing and discrete, evidence-backed content metadata edits.

## Source and publication relationship
The draft `ai-visibility/index.html` and homepage link were added on `ai-visibility-trust-gate-2026-10-20`; they are NOT on main and are NOT a confirmed public URL. The source repository, not the GitHub Pages URL, was readable in this run.

## Audit method and evidence boundary
- Date: 2026-10-20 (Europe/London).
- Applied: Aletheia Improve v0.1.0 REFRESH → FIND EXISTING → ROUTE → READ → RESEARCH → AUDIT → RECEIPT; Aletheia Site Audit v0.1 beta stages 1–3; independent repeat checks with publicly retrievable URLs; relevant SwindonOrgUK Improve policy.
- Evidence vocabulary: **OBSERVED** directly fetched by a public retrieval tool; **SOURCE** current GitHub main; **INFERENCE** reasoned hypothesis; **UNVERIFIED** not successfully tested.
- Live web retrieval is an abstraction, not raw cURL. This run could not see full status/response headers, origin DNS, certificate chain, redirects, robots/sitemap text, WAF logs, or verified Search Console/Bing accounts. The local execution container had no working external DNS access; this is a limitation of the testing environment, not evidence of DNS failures on either website.
- A target returning an inaccessible-message from a web tool must **not** be labelled blocked/unsafe or the host accused of filtering AI. Spoofing User-Agent alone does not authenticate a Googlebot/OpenAI crawler.

## AI/search roles
OpenAI's official crawler guidance differentiates OAI-SearchBot for search and GPTBot for possible training: https://developers.openai.com/api/docs/bots
Google's robots.txt specification requires **host root**, not a project subdirectory: https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec
Google AI features require search-indexed snippet-eligible pages but no separate AI-specific technical markup: https://developers.google.com/search/docs/appearance/ai-features

## Owner verification protocol
1. Fetch root /robots.txt and /sitemap.xml using a normal browser or terminal and save actual HTTP status, headers, content and time; a tool refusal here is not a 403/404 from the origin.
2. Use Google Search Console and Bing Webmaster Tools URL Inspection for canonical pages. Save indexed/excluded status and sitemap processing details; do not infer these from a site: query.
3. Where host/CDN logs are available, filter by verified Googlebot / OAI-SearchBot / GPTBot requests and record IP verification, timestamp, URL, status (especially 403/429), challenge and robots policy.
4. Preserve private/admin paths; do not globally disable HTTPS, WAF or anti-abuse policy for search traffic.
5. Re-test after one reversible correction and compare the same pages and crawler classes.

## Result receipt
**PASS:** Repository source exists and contains relevant semantic metadata/links. **INCONCLUSIVE:** GitHub Pages live reachability, bot access, indexing. **DO NOT CONCLUDE:** AI blacklist, unsafe site or GitHub intentionally blocking AI.
