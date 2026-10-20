# Aletheia Site Audit result: swindon.org.uk
**Date:** 2026-10-20 | **Outcome:** PARTIAL PASS for public HTML retrieval; crawler policy/indexing and origin server remain unverified.

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol) · [SwindonOrgUK Improve](https://github.com/KarstenEvans/SwindonOrgUK/blob/main/SwindonOrgUK-improve.md)

## Executive result
- **OBSERVED:** The public retrieval service returned meaningful HTML-derived text for `https://swindon.org.uk/`, `https://www.swindon.org.uk/`, `/food/`, `/ai4u/`, and additional indexed/sample pages. It also followed `http://swindon.org.uk/` to an HTTPS page (exact redirects/codes unavailable in this interface).
- **OBSERVED:** Visible homepage has a unique H1 ("Information, ideas and AI for people"), section headings, topic page links, and readable introductory copy even where search interaction itself is dynamic.
- **OBSERVED:** Multiple Swindon URLs appeared in external search results. This is **not** Search Console verification of Google or Bing indexing counts.
- **UNVERIFIED:** Actual text of /robots.txt, /sitemap.xml and optional /llms.txt for apex and www; status/headers, origin DNS/TLS, server security rule, specific crawler traffic, canonicals as served in raw HTML, search index coverage, origin/server logs.
- **SOURCE:** `KarstenEvans/SwindonOrgUK` README explicitly describes the repo as a migration seed not yet reconciled to the Fasthosts production files. Default-branch `site/index.htm` was not found; existing resource HTML does not substitute for the real live homepage. Therefore do not replace production code from this partial mirror.

## Finding table
| Test | Result | Finding | Priority | Next step |
| --- | --- | --- | --- | --- |
| Public homepage | PARTIAL PASS | Search tool retrieves apex/www homepage | P0 recorded | Verify normal curl GET and actual raw HTTP statuses |
| Topic pages | PARTIAL PASS | Food and AI4U have crawler-visible meaningful text | P1 | Compare static source with rendered browser; test links |
| HTTP→HTTPS host rules | PARTIAL OBSERVATION | Web tool resolves http URL to https | P0 verify | Capture each 301/302/200 chain for four hostname/scheme variants |
| robots.txt and sitemaps | UNVERIFIED | Fetcher couldn't read text/XML URLs | P0 | Fetch actual files from browser/server; check correct host and indexed URLs |
| Crawlers (Googlebot/OAI-SearchBot) | UNVERIFIED | No verified logs or named bot responses | P0 | Review Fasthosts logs/settings and any CDN/WAF challenge rules |
| Google/Bing indexing | PARTIAL SIGNAL | Search results for some pages, no owner property data | P1 | Search Console URL Inspection / Bing Webmaster Tools |
| Fasthosts bot blacklist/block | NOT ESTABLISHED | A single tool's inaccessible diagnostic URL does not prove host policy | P0 evidence | Find repeated verified bot 403/429 in origin logs before changing policy |

## Priority and acceptance checks
1. **P0:** Collect all four `http(s)://(www.)swindon.org.uk/` status/redirect chains. Choose and enforce a coherent canonical hostname, preserving working URLs.
2. **P0:** Fetch actual host-specific robots/sitemap responses. Identify effective rules for Googlebot, Bingbot and OpenAI's OAI-SearchBot separately from GPTBot training; `llms.txt` optional only.
3. **P0:** Confirm whether verified legitimate search crawlers encounter host/WAF challenges; document IP, timestamp, path and status. Never disable all bot protection to solve an unverified issue.
4. **P1:** Use Search Console/Bing to measure real indexed URL coverage, sitemap errors and queries; review specific high-value public pages.
5. **P1:** Preserve and reconcile production source against GitHub mirror before any edits/deployment.

## Trust interpretation
No evidence in this audit supports a claim that Fasthosts universally blocks AI, that Swindon.org.uk is blacklisted, or that unindexed pages are untrustworthy. Public retrievability is a positive **access** signal, not a reliability certification.

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
**PARTIAL PASS:** sampled public pages have extractable HTML text and appear in external search results. **INCONCLUSIVE:** origin configuration, named crawler permissions, TLS/redirect details, official indexing measures. **DO NOT CONCLUDE:** universal AI blocking or lack of trust.
