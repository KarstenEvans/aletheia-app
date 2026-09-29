# Worker source

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

This Worker provides authenticated, on-demand public-source retrieval; optional Brave Search index discovery; optional Cloudflare Workers AI synthesis; and a conservative observation/price-candidate ledger. Source IDs originate in `src/catalog.js` and cannot be selected by arbitrary supplied URLs.

Read [DEPLOY.md](DEPLOY.md). The static frontend works in manual prompt mode without this Worker. Publication of this source does not deploy it or enable billing.
