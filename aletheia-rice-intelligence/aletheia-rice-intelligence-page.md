# Aletheia Rice Intelligence · Page specification

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

Status: on-demand public prototype v0.3, never an autonomous trading system.
Canonical expected public URL: https://karstenevans.github.io/aletheia-app/aletheia-rice-intelligence/aletheia-rice-intelligence.htm
Rendered file: `aletheia-rice-intelligence.htm`.
Data/source: `aletheia-rice-intelligence-sources.json`, `aletheia-rice-intelligence.md`, user-exported Settings.md and Data.md.
Worker: `aletheia-rice-worker/src/index.js`; independently deployed on Cloudflare.

## Screen structure
Header; daily rice illustration and optional joke; broker alert summary; selected sections (rice price, sellers by country, crop, weather, water, trade, company, library); on-demand AI handoff/Worker controls; Markdown report preview; private observation history, file import/export and explicitly reviewed price-series graph; explanation and sources. Use settings to hide entire groups and resize the remaining cards. Every research source and country is initially selected.

## On-demand authority
Manual handoff opens ChatGPT, Copilot, Gemini, Claude, DeepSeek, Kimi or Qwen, or copies a source-bounded prompt. Worker mode requires a deployed authenticated endpoint and an explicit button click. Never schedule background research, orders or external publishing. A source check, search snippet and machine-extracted candidate are not confirmed market prices.

## Portable files and security
`rice-data.js` stores the ledger in origin-local browser storage and can import/export `aletheia-rice-intelligence-data.md` or explicitly save to a user-authorised file. Settings have the same functionality. Each Markdown export must contain Aletheia and Thalia references and fenced JSON; parsed JSON has a schema check. Imported historical observations are merged/deduplicated, not blindly overwritten. A persistent file handle may be retained by compatible browsers while permission lasts. GitHub Pages cannot silently enumerate Downloads; native file input is the fallback. A newly downloaded copy must be re-imported on another browser/device. The broker's data files are private and should not be committed to this public repository.

Observation model: `runs` track retrieval time and health. `observations` store `kind`, source ID, official URL, retrieval time, publication metadata where extracted, content hash and status. Price observations additionally have observation date, rice grade, origin, basis, numeric value, currency and unit. `status: needs-review` and `chart_eligible: false` are mandatory for automatic extraction. Graph only a single comparable origin/grade/basis/currency/unit/source series after a user reviews the original published row. A changed page hash may reflect site layout, not a newly released observation.

## Test and limitations
Check syntax of inline and external JS and Worker script; validate all linked asset paths and HTML ID uniqueness; test source-picking to zero; test authentication and Worker retrieval mock; test file import/export, permission fallback, deduplication, approval and graph; test narrow viewport, keyboard, Chrome/Edge and Safari where possible. A source-level syntax pass is not a real device test. A GitHub commit is not proof a Cloudflare Worker has been deployed or that every source can be fetched live.
