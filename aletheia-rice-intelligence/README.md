# Aletheia Rice Intelligence v0.4

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

On-demand rice-market research prototype. Open [the browser application](aletheia-rice-intelligence.htm).

**Four-scout mode:** run the same source-bounded brief independently through ChatGPT (GPT), Google Gemini (GEM), DeepSeek (DS) and Kimi (KIMI), save the four Markdown reports, then reconcile their underlying sources rather than voting by model count.

**Imaginary Paper Lab:** starts at **£100,000 × i**, where `i = sqrt(-1)`. It can record source-backed synthetic benchmark hypotheses and score them later. It cannot place real orders, contact counterparties or move money.

All 101 source options are selected by default, including a China-facing demand layer. Configure sources and regions in Settings. The app has a manual prompt-to-AI fallback. Its Cloudflare Worker is separate: publishing GitHub files does not deploy the Worker, grant any API access, or make private supplier quotes publicly available.

Private preferences and retrieved observation history belong in the broker's downloaded **aletheia-rice-intelligence-settings.md** and **aletheia-rice-intelligence-data.md**. The repository contains only empty/default starter files. On GitHub Pages choose Load Settings and Load Data to import previously downloaded files. A browser website cannot silently read ~/Downloads; browsers with File System Access may reconnect an explicitly granted file handle while permission persists. Save/export regularly. Do not commit private accounts, contacts, trading terms, access tokens, or personalised historical records to this public repository.

Numerical rice prices always retain origin, grade, unit, basis and observation date. Machine-extracted candidate rows require human source review before graphing. Source-check events alone are not quotations. The app is not a trading terminal and cannot autonomously buy or sell rice.

See the adjacent Markdown instructions and page specification for reconstruction and workflow.