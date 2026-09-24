# Aletheia Apps - Tasks

> **Purpose:** One working list for getting the Aletheia applications running, tested, linked and published.
>
> **Last updated:** 15 September 2026
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

## Now - publish the apps correctly

- [ ] Enable GitHub Pages for `aletheia-app`.
  - Settings -> Pages.
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

## Aletheia AI Easy - portable local AI system

**Direction:** onboarding, not a five-day course. Five short optional setup videos may support it, but text setup must remain complete on its own.

- [x] Create `aletheia-ai-easy/README.md`.
- [x] Create the provider-neutral `aletheia-ai-easy/aletheia-bootstrap.md`.
- [x] Create `aletheia-ai-easy/aletheia-memory-template.md`.
- [x] Create consent-first local `aletheia-ai-easy/aletheia-setup.htm`.
  - All fields optional.
  - No server or database required.
  - No app selected by default.
  - Coarse location by default.
  - Generate/download portable `aletheia-memory.md` locally.
- [x] Create `provider-installation.md` covering current routes for ChatGPT, Gemini, Claude, Copilot and DeepSeek.
- [x] Create `user-guide.md`.
- [x] Define five short setup videos in `five-video-setup-series.md`.
- [x] Create `course-ideas.md` and explicitly separate genuine learning courses from simple setup instructions.
- [ ] Test the setup form on Windows Chrome/Edge, Android Chrome, macOS Safari and iPhone/iPad Safari.
- [ ] Test `showSaveFilePicker` where available and normal-download fallback everywhere else.
- [ ] Check keyboard use, screen-reader labels, zoom and small-screen layout.
- [ ] Publish a final user-guide PDF beside the HTML/Markdown package after provider wording is rechecked.
- [ ] Create a small machine-readable app manifest/registry for `APPS` discovery rather than hard-coding every future app into the bootstrap.
- [ ] Wire the `APPS` command to distinguish **SELECTED / AVAILABLE / NOT LOADED** without inventing releases.
- [ ] Keep the bootstrap provider-neutral; provider adapters may change without changing the core.
- [ ] Keep all commercial/affiliate links outside the portable bootstrap and canonical protocol.
- [ ] Recommend `Documents/Aletheia/` or an equivalent user-chosen Files/cloud folder as the durable home; Downloads is only a temporary landing place.
- [ ] Create an original Aletheia guide/avatar: friendly eccentric digital professor/bobblehead, scientifically flavoured but **not** a direct Albert Einstein copy.
- [ ] Use Aletheia Avatar + text-to-speech as the first production route for the five short setup videos.
- [ ] Add captions and transcripts to every video.
- [ ] Make videos replaceable because provider UI screenshots/buttons will age quickly.

### ChatGPT Free documentation audit — 23 September 2026

- [x] Audit the eight current OpenAI Help Center articles: Free FAQ, Voice, Dictation, Custom Instructions, Memory, Projects, Search and Data controls.
- [x] Add an optional three-step ChatGPT Free section to the local `aletheia-setup.htm`, including a 638-character editable profile, a live 1,500-character counter, copy button and advice on privacy, Project context and Voice versus Dictation.
- [x] Update ChatGPT-specific `provider-installation.md` and `user-guide.md`. Keep the provider-neutral bootstrap and user-controlled memory template unchanged.
- [x] Update companion Aletheia Knowledge library to 18 AI cards and an expanded static Free guide; all source-level content/parser checks passed (131 Windows cards total).
- [ ] **VERIFY LIVE:** open the newly updated setup page on desktop and Android; test the short-profile copy button, over-limit warning, Clear form preserving the default profile, privacy instructions, normal memory download and first-run Project steps. Static JavaScript syntax and default text-size tests passed; no browser/live test completed.
- [ ] **CROSS-PROVIDER FOLLOW-UP:** adapt the same optional short-profile and privacy checklist for Gemini, Claude, Copilot and DeepSeek after checking their current free-tier interfaces. Do not copy OpenAI-specific settings into a generic provider-neutral bootstrap.

- [x] Add clearly linked feedback exception in the local ChatGPT Free quick setup: even with model training switched off, giving thumbs-up or thumbs-down feedback may allow the full associated conversation to be used for training (official OpenAI Data controls FAQ; verified 23 September 2026). Source and standalone public guide updated in Aletheia Knowledge. Static script syntax passed; live UI test remains open.

### AI Easy provider acceptance tests

- [ ] **ChatGPT:** Project instructions + `aletheia-memory.md`; verify current Free limits and behaviour before release.
- [ ] **Gemini:** ordinary Instructions for Gemini route; separately test a Gem with memory as Knowledge.
- [ ] **Claude:** Project instructions + project knowledge; verify fresh-chat continuity only from explicit project knowledge.
- [ ] **Copilot:** Markdown upload baseline; test Notebook instructions only where the user's Microsoft plan exposes Notebooks.
- [ ] **DeepSeek:** fresh-chat bootstrap/memory baseline; API/local wrapper must resend required context because API state is not assumed persistent.
- [ ] Cross-test `CORRECT`, `REMEMBER`, `CHECKPOINT`, `RECOVER`, `HANDOVER`, `SAVE MEMORY` and `APPS` on at least three providers.
- [ ] Record provider differences as adapter findings, not silent changes to the canonical protocol.

## Proposed main `Aletheia` repository/site

Do not create this merely to add another repository. Create it when the front-door website/bootstrap layer is ready to publish.

- [ ] Decide/create proposed `KarstenEvans/aletheia` repository.
- [ ] Use the public name **Aletheia**, not "Aletheia Hub".
- [ ] Define repository ownership clearly:
  - `aletheia-protocol` = canonical rules/specification;
  - `aletheia-app` = portable/runnable individual applications;
  - proposed `aletheia` = main human-facing Aletheia website/bootstrap/discovery layer;
  - `SwindonOrgUK` = first real-world local reference implementation and human resource site.
- [ ] Let Aletheia Local receive a user-chosen locality instead of baking Swindon into reusable logic.
- [ ] Make Swindon.org.uk a demonstrator/template without making the Aletheia system depend on Swindon.org.uk being online.
- [ ] Keep Odysseus/other orchestration frameworks optional adapters, never mandatory dependencies.

## Aletheia learning / courses

- [ ] Keep **Aletheia AI Starter** as the beginner learning course rather than duplicating it with AI Easy setup.
- [ ] Develop only courses that justify practice/exercises/a useful finished output.
- [ ] Candidate learning modules:
  - Search, Sources and Trust Check;
  - Portable Memory and Handover;
  - Local AI / Build Your Own A2Z;
  - AI for Job Search and Employment;
  - Build a Simple Website with AI;
  - Storytelling and Content with AI;
  - AI for a Local Business;
  - Privacy / Digital Footprint / Aletheia 007;
  - Free Automation without a Server Bill;
  - Create Your Own Portable Aletheia App;
  - Home Energy: solar, batteries, tariffs and source checking.
- [ ] Prefer short task-based videos plus written transcripts/checklists.
- [ ] Link to strong public third-party tutorials rather than recreating them merely to keep users on our pages.

## Creator College / external learning research

- [x] Create `SwindonOrgUK/docs/research/creator-college.md` with current public programme/resource research and Aletheia/Swindon lessons.
- [ ] Verify the provisional 11-course names through an official/authenticated Creator College source before treating the list as definitive.
- [ ] Attend/review the free September 2026 Creator College event as a learner; record high-level ideas and personal notes, not protected slides/transcripts wholesale.
- [ ] Build a curated list of genuinely useful public Creator College/Jun Yuh YouTube videos where they support an Aletheia topic.
- [ ] Use a standard external-resource card: title, creator, why useful, source URL, checked date, optional affiliate disclosure.
- [ ] Test official/privacy-enhanced YouTube embedding where appropriate.
- [ ] Never link to pirated course mirrors or bypass membership/paywalls.
- [ ] Keep Creator College affiliate work paused unless a current official programme/application is verifiably available.
- [ ] Use the saved event's date/time inconsistencies as an optional Aletheia Trust Check teaching fixture.



## Aletheia Deck Forge / Visual Knowledge

- [x] Record the concept in `ideas.md`.
- [ ] Create `aletheia-deck-forge/aletheia-deck-forge.md` when promoted from idea to prototype.
- [ ] Keep the first version static/browser-first: source/topic input -> research prompt -> verified-card plan -> original HTML/SVG deck plan.
- [ ] Treat Slideshare/Scribd/books as discovery sources unless the actual licence permits reuse.
- [ ] Never copy protected slide prose, artwork or distinctive layouts merely because a presentation can be viewed/downloaded.
- [ ] Test one copyrighted deck in discovery-only mode and one user-owned/openly licensed deck in remix mode.
- [ ] Define export paths into `aletheia-knowledge` so verified cards become reusable outside the deck.
- [ ] Prototype original timeline, comparison, process, map and fact-card visual components.
- [ ] Add accessible text equivalents and mobile layout.
- [ ] Consider quiz and speaker-note generation from the verified cards.
- [ ] Evaluate Slideshare as a distribution channel for Aletheia-created original decks; review its uploader agreement before publishing valuable material.
- [ ] Keep affiliate links on disclosed resource pages rather than inside the canonical deck/knowledge logic.
- [ ] Optionally evaluate the Everand PartnerStack affiliate programme; do not assume Scribd document pages or Slideshare pages themselves are commissionable.

## Aletheia Home Energy - proposed

- [ ] Create `aletheia-home-energy/aletheia-home-energy.md` when promoted from idea to app.
- [ ] Cover solar PV, batteries, insulation, heat pumps, EV charging, smart tariffs, current grants/eligibility, quote comparison and payback assumptions where relevant.
- [ ] Require current sources for tariffs, grants, prices and programme rules.
- [ ] Keep analysis vendor-neutral; never rank an energy supplier because of commission.
- [ ] Keep affiliate/referral links on disclosed human-facing resource pages, not inside canonical app logic.
- [ ] Consider a Swindon.org.uk **Home & Energy** resource page and a discreet footer navigation link to it.
- [ ] Before publishing Octopus Current Account material, verify the business is actively enrolled and obtain/use the written-approved marketing copy required by current programme terms.

## Aletheia Chess

- [x] Publish Aletheia Chess v0.9 HTML and Markdown files in `aletheia-app/aletheia-chess/`.
- [x] Add the nine-VIBE consensus A-PROMPT return format.
- [x] Add a discreet resource link to the main page and HELP.
- [ ] Upload `aletheia-chess.htm` to the Swindon.org.uk root while that copy is still required.
- [ ] Upload `aletheia-chess-rsc.htm` to `swindon.org.uk/resources/`.
- [ ] Test the two-way links:
  - App -> `https://swindon.org.uk/resources/aletheia-chess-rsc.htm`
  - Resource page -> `https://swindon.org.uk/aletheia-chess.htm`
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
  - `INTENT -> CURRENT STATE -> PREFERRED CHANNEL -> DIALECT -> RESPONSE -> REPAIR -> VERIFY -> RECALL`.
- [x] Add the Repair Dictionary and `STATE != CHARACTER` rule.
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
- [ ] For public third-party learning resources, link to the authorised source rather than copying/rehosting protected material.
- [ ] Credit creator/source and explain why a link is useful; attribution is not a substitute for permission to copy.
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
- [ ] Document which repository owns each file type in all READMEs, including the proposed main `aletheia` repository if/when created.

## Aletheia Site Audit

- [x] Create `aletheia-site-audit/aletheia-site-audit.md` as a portable, AI-neutral site-audit application.
- [ ] Incorporate/verify the self-documenting cross-AI web-access diagnostic pattern from `SwindonOrgUK-test.md`.
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

## Storyteller: character dialogue voices and bilingual reading

- [x] Fetch and inspect the exact existing app, first story and story list before editing. Preserve an exact copy under `backup/aletheia-storyteller-before-character-voices-20260923.htm` (commit `1dddf776b4bb3555a936088d8168431b9226fb9c`).
- [x] Create a standalone local voice-test `.htm` before pushing the main app; leave original audio/video and story artwork untouched.
- [x] Add six compact `[voice-profile;...]` entries to the beginning of `stories/ToomorrowMan-and-the-Missing-Yesterday.md`, and `[voice:CHARACTER]` assignments at explicitly identified dialogue changes.
- [x] Implement two parallel voice roles: user-selected narrator for prose; current actor for paired double-quoted speech. Add `[voice:]` for unassigned quotations; no automatic speaker guessing or biography fetch for profiles.
- [x] Change initial captions to one spoken sentence; keep 2, 3 and Off in the menu.
- [x] Verify the active app code has no generated “New title” prefix and still waits 400 ms after each Markdown heading.
- [x] Test the new JavaScript parser with the actual first story: 634 spoken cues, 6 parsed voice profiles, and narrator/TM/AI-PI/Newt/Elsie/Prudence segments.
- [x] Add bilingual/foreign-language-caption ideas to `ideas.md` as **future** work, not a live feature.
- [ ] Test live GitHub Pages deployment and voice matching on Android/PC. Non-English TTS voices and female/male metadata vary by device.
- [ ] Verify MP3/VTT manual mode with a story containing tags; the fixed recording must not be described as actor-switched.
- [ ] Prepare an actual full offline Storyteller bundle (`.htm`, `stories.json`, all current story Markdown and confirmed art); the initial local voice-test file is a separate experiment, not the full app.

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


## Aletheia Three.js particle animation

**Current priority:** finish the small particle prototype before starting God's-eye view or studio-signoff variants.

- [x] Establish the prototype concept: static star field plus interactive Three.js particles; drag to rotate; pointer pushes nearby particles; manual stages **Spiral -> AI -> ALETHEIA**; Auto, Replay and Fullscreen controls.
- [x] **LOCAL TEST CREATED:** `aletheia-threejs-scale-test.htm` for owner review before publishing. It has a logarithmic **UNIVERSE SCALE** control from 0.01x to 100x, separate **PARTICLE SIZE** and **CAMERA** controls, live geometry/camera readout, 0.1x/1x/10x presets, and keeps Spiral -> AI -> ALETHEIA, drag rotation, pointer repulsion, Auto, Replay and Fullscreen. JavaScript syntax check passed. Do not push/publish the prototype until the owner has tested the visible scale.
- [ ] Add **FIT UNIVERSE** to calculate a camera distance that frames the whole particle cloud. This should distinguish "galaxy too tiny" from "camera parked inside a gigantic galaxy".
- [ ] Make the default Spiral visibly occupy a useful proportion of the viewport; retain mixed particle sizes and background stars.
- [ ] Verify Spiral, AI and ALETHEIA all remain centred/framed after changing scale; test drag rotation and pointer repulsion at multiple scales.
- [ ] Test on the owner's PC first. Keep the test as a local HTML copy until the scale/camera behaviour is approved; only then create/reconcile the permanent `aletheia-app` folder/spec and publish to GitHub Pages.
- [ ] Later only: consider the God's-eye Swindon -> Earth -> particle-universe idea and the three studio-signoff variants recorded in `ideas.md`. They are not blockers for this prototype.

## Shared app architecture and AI-provider follow-up — 24 September 2026

### APP-ARCH-001 | DONE / VERIFY IN FUTURE BUILDS | Add shared GUI/dev contracts and agent router

Created:

- `AGENTS.md` — short agent entry router;
- `aletheia-GUI.md` — mobile/browser/window/accessibility/fallback/action rules;
- `aletheia-dev.md` — page-spec, source-of-truth, resumability, security and testing guide;
- reusable `SECONDARY-WINDOW-GATE` and `OPTIONAL-GRAPHICS-GATE` in `aletheia-code.md`.

The router deliberately points to canonical files rather than copying them into a giant system prompt.

Future substantial app changes must read these files and reconcile a target `*-page.md`.

### APP-ARCH-002 | TODO | Cross-browser smoke-test harness/checklist

Apply the shared matrix proportionately:

- Windows Chrome/Edge;
- Android Chrome;
- macOS Safari;
- iPhone/iPad Safari;
- Firefox where practical.

Record STATIC, LOCAL BROWSER, DEVICE and LIVE separately. Do not infer Apple failure from device identity; feature-detect the required browser capability.

### APP-ARCH-003 | TODO | Three.js lightweight fallback

The Three.js recreation specification now requires a useful fallback for library-load or WebGL renderer/context failure. Implement it in the actual animation, then test reduced motion, Windows/Android and Safari/WebKit where available.

The correct diagnosis rule is **capability/dependency based**. Three.js is not categorically unavailable on Apple devices.

### AI-EASY-002 | DONE / RECHECK BEFORE SCREENSHOTS | Refresh provider adapters

Update AI Easy provider installation/user guidance from current primary documentation for:

- Claude;
- DeepSeek;
- Kimi;
- Manus;
- Grok;
- Odysseus as an optional self-hosted orchestration layer.

Keep the core bootstrap vendor-neutral. Provider memory, Projects, Skills and agent features are adapters.

24 September 2026: refreshed `aletheia-ai-easy/provider-installation.md` and `user-guide.md` for Claude, DeepSeek, Kimi, Manus, Grok and optional Odysseus orchestration using current primary documentation. No provider-specific feature was added to the universal bootstrap.

### WATCH-001 | IDEA READY FOR SPEC | Aletheia Watch

Promote the competitor-monitor concept into a page/app specification only when implementation begins.

Required first version:

1. ask business type;
2. ask business postcode/town and radius;
3. discover current candidate competitors;
4. user selects competitors;
5. discover official sites and likely price/product/menu/service pages;
6. user selects watch targets;
7. capture a dated baseline;
8. support CHECK NOW;
9. export/save watch configuration/history;
10. define an optional weekly/monthly automation adapter.

Do not claim a change without a comparable baseline. A page-layout/parser failure is not a price change.

### SKILLS-001 | REVIEWED / NO EDIT YET | 11 Aletheia-enabled workflow skills

Reviewed `KarstenEvans/11-aletheia-enabled-workflow-skills`. Do **not** rewrite the pack yet.

Current direction:
- most remain Skills;
- Competitor Monitor is the clearest app candidate via Aletheia Watch;
- GEO/AEO remains a Skill beside the richer Site Audit app;
- connector-shaped workflows (Inbox, Meeting Prep, Sales Follow-up) remain Skills plus explicit provider permissions;
- test package portability before changing formats for Kimi, Manus, Codex or Odysseus.

### AGENT-001 | DESIGN RULE | Long AI work must survive quota/interruption

Do not require one uninterrupted Work/agent run to finish a project.

For substantial jobs:
- stage work;
- save durable output/checkpoints early;
- make stages restartable/idempotent;
- report completed/remaining work;
- resume from repository state;
- avoid repeating verified research merely because an agent quota reset.

This is now part of `aletheia-GUI.md` / `aletheia-dev.md` and should inform future Work/Codex/Claude/Kimi/Manus/Grok/Odysseus workflows.



## Aletheia Improve — 24 September 2026

### IMPROVE-001 | SOURCE BUILD COMPLETE / VERIFY LIVE

Created \`aletheia-improve/\` with:

- \`aletheia-improve.md\` — provider-neutral improvement workflow;
- \`aletheia-improve-memory.md\` — live repository/path registry;
- \`aletheia-improve-page.md\` — browser build/QA contract;
- \`aletheia-improve.htm\` — static launcher;
- \`aletheia-improve-rsc.htm\` — free-first resources;
- local \`tasks.md\` and \`ideas.md\`.

Core behaviour:

1. refresh the registry and current GitHub repository trees;
2. resolve target/canonical spelling;
3. search for existing apps, Skills, knowledge collections and shared components before creating anything;
4. load current target/shared source excerpts;
5. accept local text supporting files and list PDFs/binaries for manual AI attachment;
6. build a provider-neutral pack for ChatGPT, Gemini, Claude, DeepSeek, Kimi, Manus, Grok or copy-only use;
7. keep static/free-first operation with no required API, Worker or hosted backend.

Static verification passed: inline JavaScript compiles; no duplicate IDs; live registry JSON parses; current repository-tree discovery found the correct strongest targets for Aletheia Avatar, Aletheia Site Audit, Aletheia AI Knowledge, Storyteller and Thalia Humour.

LIVE/DEVICE still open: the external page checker could not access the GitHub Pages URL, so verify the rendered app/resource page and GitHub API CORS in a real browser, then test Android Chrome and Windows Chrome/Edge.

### IMPROVE-002 | THALIA HUMOUR EMAIL INTAKE IDEA

Do not create a second “Huma” application. The existing owner is \`KarstenEvans/thalia-protocol\` with \`thalia-humour-app.md\`, \`thalia-humour.htm\` and the Humour Base/Humour Method model.

A future Odysseus-backed intake may monitor a narrowly scoped mail rule and stage proposed Humour Method records. Raw email must be untrusted data, validated against a strict schema before any AI/GitHub write authority is available. Confirm the exact Gmail plus-address and whether \`[Thalia]\` means subject prefix, Gmail label or another tag before implementation.


## Aletheia Avatar v05 working copy — 2026-09-24
- [x] Preserve exact v04 Markdown as `aletheia-avatar/aletheia-avatar.md.back` on the working branch.
- [x] Add explicit IDENTITY / PERFORMANCE / VOICE / SCRIPT / PROVENANCE roles.
- [x] Add gesticulation / pose-transfer factor 0 / 0.5 / 1 while retaining facial emotion.
- [x] Add Dad Presenter Test 001 specification.
- [x] Restore local Odysseus controller direction and add LivePortrait -> MuseTalk execution adapter.
- [x] Add `aletheia-avatar-page.md` and expand README.
- [ ] Configure/test LivePortrait locally on the target Windows PC.
- [ ] Configure/test MuseTalk 1.5 + FFmpeg locally.
- [ ] Produce/export a repeatable UK male narrator audio asset; browser Storyteller voice is currently preview-only.
- [ ] Generate Dad Presenter Test 001 at factor 0; inspect identity before trying 0.5 and 1.
- [ ] Do not merge this branch to `main` until the working copy and Dad test are approved.
