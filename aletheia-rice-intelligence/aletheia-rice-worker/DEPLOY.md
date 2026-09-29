# Deploy Aletheia Rice Intelligence Worker v0.3

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

The HTML on GitHub Pages and the Cloudflare Worker are separate applications. Deploy the Worker in **your own Cloudflare account**. It is not currently deployed by publication to GitHub.

1. Open a command shell inside `aletheia-rice-intelligence/aletheia-rice-worker`.
2. Install Node.js and run `npm install`, `npx wrangler login`, then `npx wrangler deploy`.
3. Generate a long random research token. Store it only in Cloudflare with `npx wrangler secret put RICE_ACCESS_TOKEN`. Do **not** commit or publish it.
4. The Worker uses the `AI` binding from `wrangler.jsonc`. Provider billing/usage may apply.
5. Optional: obtain a licensed Brave Search API key, then `npx wrangler secret put BRAVE_SEARCH_API_KEY`. Without this, the Worker still retrieves selected public source URLs but does not independently discover newer links in the index.
6. Copy the deployed HTTPS address, without a trailing `/briefing`, into the HTML app's Settings. Enter your private research token in its separate field and press **Test Worker Connection**.
7. For connected on-demand reports, select **Cloudflare Worker** under Research mode and press **Generate Today's Briefing**. The Worker retrieves the selected public pages, performs optional search/index discovery, and returns an evidence-first Markdown report with metadata and unreviewed candidate-price observations.
8. After each report download **Data.md** to preserve the local archive. Price candidates enter a historical graph only after independent review of the original publication and the on-screen approval action.

Expected endpoints:
- `GET /` returns a public service identification, no secret.
- `GET /health` requires `Authorization: Bearer <RICE_ACCESS_TOKEN>`.
- `POST /briefing` requires that header and a compact JSON request from the app.
- `OPTIONS` supports preflight from GitHub Pages.

Security and limits: the Worker accepts only source IDs from the committed catalogue. It restricts follow-up discovery to the same official/source hostnames. Direct retrieval is limited to 18 pages and up to four extra follow-up pages. It does not scrape paywalled content or claim to obtain genuine private supplier offers. CORS permits browser calls; the bearer token is not a replacement for sensible rate limits, rotation, account budget settings and private-data minimisation. The browser keeps it in session storage only, not exported Settings.md. A URL alone never provides authentication.

**Browser Downloads:** GitHub Pages cannot enumerate or silently open your computer's Downloads directory. Use Load Settings / Load Data to choose the latest exported Markdown. Compatible browsers may retain a user-granted file handle, but may ask again after restarting or permissions change. Save your personal files offline. The repository's Data.md is an EMPTY example and must never be confused with a private broker's latest observations.

Licensing: direct Open-Meteo demo use must comply with its licence; do not use the free non-commercial endpoint for an operational commercial deployment. Commercial providers such as Platts require appropriate permission. A retrieved page is not automatically an executable offer or an audited price.
