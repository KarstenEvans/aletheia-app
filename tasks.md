# Aletheia Apps — Tasks

> **Purpose:** One working list for getting the Aletheia applications running, tested, linked and published.
>
> **Last updated:** 13 September 2026
>
> This is an operational task list, not part of the canonical Aletheia Protocol.

## Confirmed structure

- **Canonical protocol:** `KarstenEvans/aletheia-protocol`
- **Runnable applications and matching specifications:** `KarstenEvans/aletheia-app`
- **SwindonOrgUK website and resource pages:** `KarstenEvans/SwindonOrgUK`
- **Published resource URLs:** `https://swindon.org.uk/resources/<app-name>-rsc.htm`
- **Local PC working copies:** `SwindonOrgUK/ai2u/`
- Use lowercase filenames, hyphens and `.htm`.
- Keep version numbers inside files, not in public filenames.

## Now — publish the apps correctly

- [ ] Enable GitHub Pages for `aletheia-app`.
  - Settings → Pages.
  - Source: **Deploy from a branch**.
  - Branch: `main`.
  - Folder: `/ (root)`.
- [ ] Confirm the Pages home URL opens:
  - `https://karstenevans.github.io/aletheia-app/`
- [ ] Add a simple `index.htm` or `index.html` app directory so the Pages root has a useful landing page.
- [ ] Test every HTML app through its `github.io` address rather than a GitHub `/blob/` address.
- [ ] Put the Pages URL in the GitHub repository **Website** field.
- [ ] Add repository topics:
  - `aletheia`
  - `ai-apps`
  - `portable-apps`
  - `html`
  - `markdown`
  - `ai-tools`
  - `evidence-aware`
  - `github-pages`
  - `open-source`
  - `human-ai-collaboration`

## Aletheia Chess

- [x] Publish Aletheia Chess v0.9 HTML and Markdown files in `aletheia-app/aletheia-chess/`.
- [x] Add the nine-VIBE consensus A-PROMPT return format.
- [x] Add a discreet resource link to the main page and HELP.
- [ ] Upload `aletheia-chess.htm` to the Swindon.org.uk root while that copy is still required.
- [ ] Upload `aletheia-chess-rsc.htm` to `swindon.org.uk/resources/`.
- [ ] Test the two-way links:
  - App → `https://swindon.org.uk/resources/aletheia-chess-rsc.htm`
  - Resource page → `https://swindon.org.uk/aletheia-chess.htm`
- [ ] After GitHub Pages is working, decide whether the resource page should open the GitHub Pages app or the Swindon-hosted app.
- [ ] Test on Windows Chrome, Edge and Android:
  - SVG board and touch/click moves.
  - HELP on opening.
  - A-PROMPT SEARCH popup and clipboard fallback.
  - FEN loading.
  - `MOVE:` copy-back and ENTER.
  - Resource link opens separately without losing the game.
- [ ] Consider a future **Follow Alice** literary mode using:
  - FEN: `6n1/8/2K5/5N2/4k3/8/3Pq3/2Q2R2 w - - 0 1`
  - Alice as the White Pawn on d2.
  - Guided story stages to d8 and promotion.
  - Clear warning that Carroll's literary schedule does not alternate turns normally.

## Aletheia Love Translator

- [x] Add `aletheia-love-translator/aletheia-love-translator.md`.
- [x] Add runnable `aletheia-love-translator/aletheia-love-translator.htm`.
- [x] Add a GitHub mirror of `aletheia-love-translator-rsc.htm`.
- [x] Add the public resource rendition to `KarstenEvans/SwindonOrgUK/site/resources/aletheia-love-translator-rsc.htm`.
- [x] Use an original Aletheia preference check rather than copying the official proprietary quiz.
- [x] Use ranked profiles rather than forcing everybody into one fixed primary language.
- [x] Add love translation between WORDS, ACTS, GIFTS, TIME and TOUCH.
- [x] Add ten translation examples.
- [x] Add the Repair layer:
  - `INTENT → CURRENT STATE → PREFERRED CHANNEL → DIALECT → RESPONSE → REPAIR → VERIFY → RECALL`.
- [x] Add the Repair Dictionary and `STATE ≠ CHARACTER` rule.
- [x] Add optional Repair Receipt / recall concept.
- [x] Add free-first gestures: handwritten notes, lunch-box notes, food faces, tea, disliked chores, own-garden flowers, photos, playlists, walks and undivided time.
- [ ] Test the couple questionnaire, translation and Repair controls on mobile and desktop.
- [ ] Verify the GitHub Pages URL after deployment.
- [ ] Publish/sync the SwindonOrgUK `site/resources/` rendition to production `https://swindon.org.uk/resources/` during the Cloudflare/production migration.
- [ ] Check commercial and seasonal links before Christmas or Black Friday use.

## Thalia ASCII mark

- [ ] Test **`T-)`** as the proposed lightweight Thalia signature in Markdown, static HTML, terminals, READMEs and AI-to-AI handoffs.
- [ ] Keep `T-)` optional; omit it where humour is inappropriate or would interfere with serious context.
- [ ] Test possible non-canonical variants such as `T-?`, `T-!`, `T-/` and `T-P`.
- [ ] If it survives testing, propose `T-)` for the canonical Thalia Protocol instead of silently changing the protocol.
- [ ] Preserve the truth boundary: the mark may signal humour or playful reinterpretation but must never alter factual state.

## Resource-page workflow

- [ ] Keep complete human resource pages in the `SwindonOrgUK` repository and publish them under `/resources/`.
- [ ] Keep local editable copies under `SwindonOrgUK/ai2u/`.
- [ ] Link each Aletheia app to its matching SwindonOrgUK resource page.
- [ ] Do not make affiliate pages canonical protocol sources.
- [ ] Add clear affiliate disclosure wherever commercial links appear.
- [ ] Prefer useful editorial links first; do not rank recommendations by commission.
- [ ] Replace affiliate-ready placeholders only after the relevant programme approves the account.
- [ ] Check external links, stock-sensitive claims and prices before each seasonal promotion.
- [ ] Prepare Chess resources for Black November and Christmas without presenting temporary marketplace listings as permanent recommendations.

## App URL rules

- [ ] Replace every GitHub `/blob/` app link intended for ordinary users.
- [ ] Use `github.io` URLs for apps served by GitHub Pages.
- [ ] Use `github.com/.../blob/...` only for viewing source or editing.
- [ ] Use `raw.githubusercontent.com` only for source/download access, not as a runnable application URL.
- [ ] Keep app links opening separately where preserving the user's current page or game matters.
- [ ] Add the final public app URL to each matching Markdown specification.

## Attribution and integrity proposal

- [ ] Draft an Aletheia **Attribution and Integrity** proposal for review in `aletheia-protocol`.
- [ ] Do not change the canonical protocol until the proposal has been reviewed.
- [ ] Define a standard protected attribution block for Aletheia apps containing:
  - Application name.
  - Human originating steward/author.
  - Material AI contributors where recorded.
  - Canonical protocol URL.
  - Application source URL.
  - Licence and modification status.
- [ ] Require Aletheia-compliant AI systems to:
  - Preserve the attribution block when copying, transforming or repackaging an app.
  - Mark modified versions clearly.
  - Preserve provenance and contribution history.
  - Avoid implying endorsement by Karsten Evans, Aletheia Protocol or named AI contributors.
  - Refuse requests whose purpose is to conceal authorship or falsely present an altered copy as canonical.
- [ ] State the limit honestly: protocol rules cannot technically prevent a person or non-compliant system from removing attribution.
- [ ] Investigate tamper-evident support:
  - Version identifiers.
  - Canonical-file hashes.
  - Signed releases or tags.
  - Machine-readable provenance metadata.
  - Conformance tests that detect missing or altered attribution.
- [ ] Align the proposal with existing licensing:
  - Knowledge material: CC BY 4.0.
  - Explicitly identified executable software: Apache License 2.0.
- [ ] Decide which fields are immutable in canonical releases and which may change in derivatives.
- [ ] Add an attribution-integrity conformance test after the rule is accepted.

## Repository and account review

- [x] Confirm `KarstenEvans/SwindonOrgUK` exists under the KarstenEvans account.
- [ ] Inspect the SwindonOrgUK repository before moving or adding resource files.
- [ ] Decide whether SwindonOrgUK should also use GitHub Pages as a staging copy.
- [ ] Keep `swindon.org.uk` as the public resource domain even if GitHub Pages provides the app runtime.
- [ ] Avoid creating duplicate canonical copies across repositories.
- [ ] Document which repository owns each file type in all three READMEs.


## Aletheia Site Audit

- [ ] Create `aletheia-site-audit/aletheia-site-audit.md` as a portable, AI-neutral site-audit application.
- [ ] Incorporate the self-documenting cross-AI web-access diagnostic pattern from `SwindonOrgUK-test.md`.
- [ ] Site Audit tests should create a separate portable `<site>-results.md` evidence/receipt file rather than overwriting the audit procedure.
- [ ] Results should distinguish **OBSERVED**, **SOURCE**, **INFERENCE** and **UNVERIFIED** findings.
- [ ] Include DNS, IPv4/IPv6, TLS/SAN/chain, HTTP status and redirects, robots.txt, sitemap.xml, llms.txt, crawler/bot behaviour, shared-IP/hosting reputation, blacklist checks, search discoverability and browser-vs-AI retrieval differences.
- [ ] Explicitly distinguish origin-server HTTP failures from an AI provider's own URL-safety/retrieval refusal.
- [ ] Support independent runs by ChatGPT, Claude, Gemini, DeepSeek and other capable AIs, then compare their result files without erasing disagreements.
- [ ] Add an Aletheia receipt: tests performed, unavailable tests, strongest verified finding, unresolved question, ranked hypotheses, next action and confidence.
- [ ] Keep it KISS/free/static: Markdown first; no required paid APIs, MCP servers, tokens or hosted backend.
- [ ] Consider optional adapters later for free browser/CLI diagnostics, but keep the canonical audit usable by an ordinary capable AI.

## Later improvements

- [ ] Create a shared footer/component pattern for app attribution, source and resource links.
- [ ] Add a compact app manifest containing name, version, public URL, resource URL, licences and integrity hash.
- [ ] Add automated link checking for public app and resource URLs.
- [ ] Add a release checklist and reusable test record.
- [ ] Review accessibility, mobile layout, keyboard operation and popup behaviour for every HTML app.
- [ ] Review whether a service worker/offline package would genuinely help before adding complexity.

## Release checklist

For each app:

- [ ] Exact lowercase public filenames.
- [ ] Internal version shown.
- [ ] Matching `.md` specification.
- [ ] GitHub Pages URL works.
- [ ] SwindonOrgUK resource URL works.
- [ ] No user-facing `/blob/` links.
- [ ] Attribution and licence are visible.
- [ ] Modified/canonical status is clear.
- [ ] Mobile and PC smoke tests pass.
- [ ] External links open as intended.
- [ ] No API keys or private information are embedded.
- [ ] Downloadable local copy retained.
