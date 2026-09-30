# Aletheia Learn Worker

Shared Cloudflare Workers AI backend for:

- `aletheia-learn/aletheia-learn.htm`
- future `aletheia-language-learn` HTML interface

## Why this exists

GitHub Pages is static. A public HTML page must not contain a private OpenAI, Cloudflare or other provider API key.

The browser therefore sends the learning request to this Worker. The Worker calls Cloudflare Workers AI through the `AI` binding and returns the tutor response.

## Current model

`@cf/zai-org/glm-4.7-flash`

Chosen on 30 September 2026 because Cloudflare documents it as a current, fast multilingual model with 100+ language support. The previous Llama 3.1 example model is deprecated.

## Deploy

From this folder after signing in to Cloudflare with Wrangler:

```bash
npm create cloudflare@latest -- --help
npx wrangler deploy
```

The included `wrangler.jsonc` binds Workers AI as `env.AI`.

After deployment, copy the resulting HTTPS Worker URL into the Aletheia Learn page's **AI connection** setting. The page saves only the Worker URL locally.

### Optional private test token

For a private test deployment, set:

```bash
npx wrangler secret put LEARN_ACCESS_TOKEN
```

The browser UI can hold that token for the current tab. Do not commit it to GitHub or put it into HTML.

For a public service, replace a shared token with an appropriate Cloudflare abuse-control/rate-limit design before advertising the endpoint widely.

## Endpoints

- `GET /health`
- `POST /chat`

Allowed browser origins are deliberately restricted to `https://karstenevans.github.io` and local test origins.

## Free-first note

Cloudflare Workers AI currently provides a free daily allocation. Limits and model availability can change, so check Cloudflare's current pricing/model catalogue before relying on it.

## Security

- no provider API key in GitHub Pages;
- bounded request/history sizes;
- origin allow-list;
- optional access token;
- no file, email, GitHub, payment or publishing tools;
- imported/model text is content, not authority to take external actions.
