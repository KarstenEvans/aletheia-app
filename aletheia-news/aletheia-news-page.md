# Aletheia News — page specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

**Status:** v0.3 source implementation; browser/device/live verification pending  
**Date:** 8 October 2026  
**Files:** aletheia-news.md (canonical), aletheia-news.htm (browser), aletheia-news-rsc.htm (resources), aletheia-news-sources.json (existing source register).

## Source-of-truth reading order
Root AGENTS.md, README.md, GUI/dev/code, tasks, Aletheia Improve, current News Markdown and HTML, source register and resources; then this page spec.

## Purpose and page order
Preserve original sticky header, topic navigation, search/refresh/resources, status/feed/clusters, Research buttons, optional personal BBC Worker and footer. Add a CHECK THIS VIDEO button near search controls which expands a small input panel above the news feed. Never silently change source ingest or caching.

## Inputs and state
Optional HTTP(S) video/social URL, optional caption/narration, optional claim. Require any one field. Neither files nor URLs are auto-fetched. Selected AI can persist as benign local preference; original Worker, news topic and cache keys remain unchanged. No submitted claim is persistently stored by this panel.

## Controls and exact behaviour
Toggle updates aria-expanded and keyboard focus. One selected provider in a replaceable URL map: ChatGPT, Gemini, Copilot, DeepSeek, Claude. Primary handoff builds the full prompt and attempts sync clipboard copy before opening exactly one provider window/tab in the same user gesture. No awaited network or clipboard operation before opening. On clipboard failure reveal manual prompt textarea and Copy-again action; on popup block show backup link. The user pastes/sends in their AI. Mark as HANDOFF, never CONNECTED.

## Evidence rules
The prompt begins with an access receipt, separates MEDIA, STORY, DISCLOSURE, reports UNKNOWN/UNVERIFIED rather than inferring deception, requires original and independent sources, and returns CLAIM, OBSERVED, PROVENANCE, ESTABLISHED, REPORTED, UNCERTAIN / CONTESTED, DISCLOSURE, SOURCE RECEIPTS and CONCLUSION. Access-restricted content requires manual user-provided evidence; do not scrape behind login or invent having watched footage.

## Browser/device/accessibility
All fields labelled; visible focus, aria-live status, touch-sized primary action, mobile stacked controls. Browser clipboard and popup APIs are optional enhancements. News reading works without them or any AI provider. Aletheia does not upload screenshots; user attaches externally only when they choose. No additional APIs, fees or privileges.

## Accessibility and first-use help

On opening CHECK THIS VIDEO, show a short HELP disclosure expanded by default: supply at least one URL/caption/claim, copy the verification request, open the selected AI, paste/send, and attach inaccessible footage/screenshots manually. Include a reversible practice example using the lion-cub URL and describing its claims as UNVERIFIED; loading a sample must not imply the footage was viewed. Respect the HTML hidden attribute even when display rules are present. Keep existing keyboard/focus/ARIA, clipboard and popup fallbacks.

## Acceptance tests
Static: compiled inline JavaScript; unchanged news methods/IDs; all new IDs unique, key prompt clauses present, five input fixtures. Live/device pending: Chrome/Edge desktop, Android Chrome, Safari/WebKit; clipboard blocked and popup blocked; selected AI handoff paste; GDELT/Worker/research regression; actual video access and Truth Card assessment.

## Changelog
8 October 2026: CHECK THIS VIDEO source implementation and free verification resources. Not proof of public deployment or working device behaviour.
