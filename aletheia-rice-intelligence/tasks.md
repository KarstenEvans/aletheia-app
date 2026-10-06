# Aletheia Rice Intelligence — tasks and release receipt

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

## ARI-004 | 6 October 2026 | FOUR-SCOUT + IMAGINARY PAPER LAB

Status: **SOURCE COMPLETE / STATIC PASS / LIVE + DEVICE NOT VERIFIED**

### Task
Improve the existing Rice Intelligence app rather than create a duplicate. Add independent GPT/GEM/DS/KIMI research passes, source reconciliation, China-facing demand evidence, current event-sensitive research questions and a £100,000 × i paper-trading experiment.

### Files read
- root AGENTS / GUI / dev / code via current repository
- Aletheia Improve workflow + memory
- Rice README, canonical Markdown, page spec, research spec, settings, sources JSON, HTML, rice-data.js
- Aletheia AI Easy provider installation, bootstrap and bootstrap-transfer idea

### Files changed / added
- `aletheia-rice-intelligence-sources.json`
- `rice-scout-paper.js` (new)
- `aletheia-rice-intelligence.htm`
- `aletheia-rice-intelligence.md`
- `aletheia-rice-intelligence-page.md`
- `aletheia-rice-intelligence-settings.md`
- `aletheia-rice-intelligence-research-spec.md`
- `README.md`
- this receipt

### Behaviour
- Manual Elf remains the provider-neutral transport: copy prompt, open selected AI, paste/run, return Markdown.
- Four report suffixes: `GPT`, `GEM`, `DS`, `KIMI`.
- Reconciliation scores underlying sources rather than model votes.
- New demand sources: China MOA, China Customs monthly statistics, China NBS circulation prices.
- Event-sensitive prompt explicitly checks Thai flood/harvest conditions, Mekong/local flooding distinction, Cambodia buyer/routes including Philippines, Vietnam policy/demand, India crop/stock, Pakistan logistics and China demand.
- Paper Lab starts at **£100,000 × i**; no real trading capability.
- Maximum simulated position £25,000 × i; maximum £60,000 × i new notional per synthesis; total open notional capped at £100,000 × i.
- NO_TRADE is valid.
- Non-NO_TRADE imports require at least two HTTPS evidence URLs.

### Static tests
- External `rice-scout-paper.js` syntax: PASS
- Inline HTML JavaScript syntax: PASS
- Source JSON parse: PASS
- Source count: 101
- Canonical Markdown embedded/downloadable copy synced: PASS
- Event-sensitive prompt present: PASS
- Four-scout and Paper Lab IDs/modules: PASS
- Duplicate HTML IDs: PASS (previous validation)
- One Awin MasterTag: PASS (previous validation)

### Not verified
- GitHub Pages LIVE fetch: NOT VERIFIED because the available web fetcher could not access the Pages URL during this run.
- Desktop/mobile popup and clipboard behaviour: NOT TESTED on a real device.
- Actual provider runs in GPT/GEM/DS/KIMI: NOT TESTED.
- Real report reconciliation and paper-ledger import from four completed reports: NOT TESTED.
- Cloudflare Worker remains independent; this change does not deploy or reconfigure it.

### Next action
Open the public Rice Intelligence page on a real browser, run one GPT/GEM/DS/KIMI cycle with four saved Markdown reports, reconcile them, import only the imaginary paper JSON, then record DEVICE/LIVE results here.
