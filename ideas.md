# Aletheia Apps — Ideas

> Early-stage concepts. These are not promises or canonical protocol changes.
> Promote an idea into `tasks.md` and its own app folder when it is ready for implementation.

### Shared Affiliate Tools link for Discover (29 September 2026)

**Decision:** Aletheia Discover remains Priority #001, still a specification/idea, not a deployed application. Its location-first, worldwide visitor discovery experience must remain distinct from professional website analytics. Include an optional **Tools → Affiliate Tools** entry in its responsive navigation when Discover is built, linking to the already-created canonical public tool directory: `https://karstenevans.github.io/aletheia-app/aletheia-site-audit/affiliate-tools.htm`. This is a standalone, search-indexable resource that Site Audit also links to. Do not copy 30 KB of tool descriptions into the Discover UI, do not use the keyword dashboard as the location-discovery engine, and do not let marketing metrics outrank current verified local content.

The HTML directory groups Google Trends/Trending Now, Bing Webmaster Keyword Research, Google Search Console, Bing AI Performance, technical audits, analytics/privacy, Awin/Bookshop.org/ClickBank/other networks and original ethical affiliate methods. Official links are launch actions, **not automated runs**; account-owner metrics require voluntary/authorised exports or verified access. Crosslinks: `aletheia-site-audit/aletheia-site-audit.htm` and `aletheia-site-audit/aletheia-site-audit.md`; deeper fact/research notes in `KarstenEvans/aletheia-knowledge/knowledge/aletheia-free-search-intelligence.md` (AK-098). Public page deployment still needs independent check.

## PRIORITY IDEA #001 — Worldwide Aletheia Discover (29 September 2026)

**Direction approved; public name provisional.** Working names: **Aletheia Atlas**, **Aletheia Mystika** (stylised name), or simply **Aletheia Discover**. `Topiki Aletheia` means Local Truth; `Mystiki Aletheia` means Secret Truth; `Topiki Mystiki Aletheia` means Local Secret Truth. The owner is exploring names and has **not selected a final one**. The technical folder should remain `aletheia-discover` independently of branding.

The site is a **single worldwide AI-backed location-aware discovery interface**, not a franchise or cloned network of city sites. Any user may ask for places, free attractions, food, unusual history, events, current local news, community services and independent links in any selected geography and requested response language. Choosing Ayutthaya in Norwegian while physically in Swindon must work. Prefer a manually entered location; device location is opt-in and coarse, and no precise personal location is stored by default.

Reference research: https://secretldn.com/food-drink/ and https://secretmedianetwork.com/en/ . Borrow patterns such as the compact sticky header, easy topic switching, engaging original previews, publisher clarity and time-sensitive editorial structure; do **not** replicate Secret London's protected articles, branding, imagery or one-site-per-city staffing model.

**Required:** source/date-first results; current source search or clearly-labelled external-search fallback rather than pretending static results were verified; original source links, language and accurate translations; distinguish researched facts from discovery suggestions; preserve accessible mobile sticky navigation; HTML social previews, SEO/AEO/GEO and truthful JSON-LD; events with timezone/cancellation/expiry; free-first recommendations; one common Aletheia blog/newsletter with user-selectable place/topic/language filters; optional disclosed approved affiliates kept out of evidence sources; explicit human approval before publication. Generic AI filler, fabricated local reporting, endless cloned city pages and automatic social spam are prohibited.

**Ownership:** `aletheia-app/aletheia-discover/` for runnable UI, exact specs and provider adapter; `aletheia-knowledge` for independently checked reusable cards; `SwindonOrgUK` for local front door and shared shell/SEO adoption, never as sole geographic scope. Keep the old Swindon homepage safe and reconcile PC/live/GitHub before changing it.

See app `tasks.md` Priority Task #001 and the SwindonOrgUK repository `ideas.md`, `tasks.md`, `SwindonOrgUK-improve.md`. Specification and staging are not an implemented global live search or a production release.

## Aletheia Deck Forge / Visual Knowledge

**Status:** IDEA — research/prototype candidate  
**Seed:** Slideshare, Scribd, public PDFs/PPTX/DOCX, books, user-owned presentations and other visual learning material.

### Core idea

Turn useful source material into **independently checked Aletheia knowledge plus an original visual explanation**, rather than copying or reskinning somebody else's slides.

Pipeline:

```text
SOURCE / TOPIC
  -> DISCOVERY MAP
  -> CLAIMS + CONCEPTS + STRUCTURE
  -> ALETHEIA CHECK
  -> VERIFIED KNOWLEDGE CARDS
  -> ORIGINAL VISUAL DECK / HTML / SVG
  -> QUIZ / NOTES / RESOURCE PAGE
```

### What it could do

- Accept a user-supplied file, public URL, pasted outline or topic.
- Extract candidate facts, arguments, concepts, diagrams and teaching sequence.
- Label source material as **DISCOVERY**, not automatically true.
- Independently verify factual claims before promotion to Aletheia Knowledge.
- Create original diagrams, timelines, comparison cards, maps and explainers.
- Produce an accessible browser deck in HTML/SVG first.
- Optionally produce PowerPoint/PDF later.
- Create a compact quiz, speaker notes and "go deeper" links.
- Export verified material into `aletheia-knowledge`.
- Create a matching `-rsc.htm` resource page where useful books/tools can be linked.

### Copyright / originality boundary

Publicly viewable does **not** mean reusable.

For ordinary copyrighted Slideshare/Scribd/books:
- use them as discovery/topic maps;
- do not reproduce protected prose, images, distinctive slide layouts or illustrations;
- independently research the underlying facts and ideas;
- rebuild the explanation in original wording and original visual design;
- preserve source/provenance links.

For user-owned, public-domain or suitably licensed material:
- allow a stronger remix/reformat mode according to the actual licence.

### Why it fits Aletheia

- Aletheia Knowledge becomes the reusable verified "brain".
- Deck Forge becomes a visual/teaching surface over that knowledge.
- Weird History can become a first demonstration: knowledge cards -> original illustrated history deck -> Story Forge/QI follow-on.
- Course modules can use the same cards without duplicating research.
- Visual material can be regenerated for different reading ages, languages and accessibility needs.

### KISS architecture

**Free/static first:**
- browser UI;
- local file selection/paste;
- prompt generation;
- copy/paste to the user's chosen AI;
- local HTML/SVG output templates;
- no required server, API key or paid token.

Optional later:
- Cloudflare AI adapter;
- OCR only where unavoidable;
- image generation for original diagrams/illustrations;
- PowerPoint/PDF export.

### Distribution opportunity

Slideshare itself could be a distribution channel for **Aletheia-created original decks** because it accepts PPT/PPTX/PDF/DOC/DOCX, supports embeds and is indexed by search engines.

However, its current uploader agreement gives Scribd/Slideshare broad rights over uploaded material, including rights around derivative use and model training. Review that deliberately before using Slideshare for valuable proprietary Aletheia material.

### Commercial layer

Keep commercial links outside canonical knowledge.

Possible resource-page monetisation:
- Bookshop.org direct-book affiliate links;
- AWIN merchants;
- relevant software/hardware;
- Everand subscription affiliate programme **only if Aletheia is accepted and the link is appropriate**.

Do not imply there is a Scribd-document or Slideshare-document affiliate commission unless a current programme explicitly provides one.

## Storyteller bilingual and language-learning stories

**Status:** IDEA for a future, optional feature. Not implemented in the current Storyteller.
**Seed:** Quiet, illustrated storytelling as a way for children and adults to listen, read and learn a second language without fast-cut video.

The existing static Storyteller provides one spoken cue at a time, optional character voices, an adjustable narrator voice and gentle pan/zoom on still illustrations. The next experiment could provide **a separate story language and a separate caption language**, including two-language captions on demand. For example, choose Japanese narration with English captions, or Thai narration with Norwegian translation. Retain the default single-sentence caption for low-intensity reading; the second language must be an opt-in rather than appearing all the time.

Possible gradual steps:

1. **Prepared parallel text first:** two reviewed language versions of each sentence with matching cue IDs. One narrator/audio language and one optional translation caption language. No runtime AI, translation subscription or internet needed for prepared stories.
2. **Optional pronunciation mode:** allow a reader to repeat the current phrase, slow speech and display original plus translation. Speaker profiles should continue to work for actor dialogue, but a foreign-language TTS voice may pronounce English words poorly, so test and explicitly disclose availability.
3. **Optional on-the-fly translation later:** use a user-selected local/browser translator or an optional AI bridge only when available. Mark unreviewed translation clearly and avoid silently sending a child's story or personal reading history to external services.
4. **Simple accessibility controls:** one or two caption tracks, adjustable text size/speech rate, useful story-language labels and saved local preferences where appropriate.

Keep Markdown stories readable independently of any translation system. Never make Cloudflare Workers, AI APIs or paid voices required for ordinary playback.

**Proposed future prompt:** How can Storyteller use one story's cue IDs, images and camera instructions with two aligned narration/caption languages, while retaining a fast, distraction-free, one-sentence default?


## Aletheia cinematic scale / studio-signoff ideas

**Status:** FUTURE IDEAS ONLY. Do not interrupt the current Three.js particle prototype to build these.

### God's-eye zoom

A separate future visual could begin at **Swindon.org.uk**, pull back through a local/planetary satellite view, continue away from Earth, and finally reveal Earth as a single point inside the much larger Aletheia particle universe. This is a possible story/opening/closing sequence, not a requirement for the current particle animation.

Keep the transition original and technically independent of any single mapping/satellite provider. The conceptual beat is:

```text
Swindon.org.uk -> local world -> Earth -> satellites/orbit -> deep space
-> Earth becomes one particle -> Aletheia particle universe
```

### Original / standard studio sting

Preserve the existing original studio-signoff idea as the **standard** variant: an original old-cinema-style framing, inspired by the general tradition of studio idents but not copying a particular lion logo. **AI-PI appears first; ToomorrowMan follows in solidarity**, with the relationship and affection readable from pose/gesture rather than dialogue.

### Variant 2: AI-PI meow + ToomorrowMan lion roar

A future app/story ending can make the joke explicit through sound:

1. AI-PI appears first and performs his grand "roar", but the sound is a **small cat-like meow**.
2. ToomorrowMan enters behind/beside him, optionally placing a hand on AI-PI's shoulder.
3. ToomorrowMan then gives a full theatrical **lion-style roar**, head moving down and around to his right, mouth open, head shaking with the force of it.
4. He looks down at AI-PI.
5. They leave together to the right.

The scene should communicate partnership and affection, not mock AI-PI.

### Variant 3: Schrödinger / Dragonfold final roar

Extended ending after Variant 2:

1. AI-PI and ToomorrowMan have exited right.
2. Hold the apparently finished frame in silence for a beat.
3. **Schrödinger** rises into view in tuxedo-cat form, looks around and blinks.
4. She unfolds/transforms into her true **Dragonfold** form.
5. The Dragonfold gives the final, enormous dragon roar.
6. End.

The delayed third beat should feel surprising and delightful for children while remaining compatible with established Dragonfold canon: cat externally, dragon folded within, larger on the inside.

### Design boundary

These are **original Aletheia cinematic stings**, not reproductions of MGM or another studio ident. Do not copy a protected logo, exact ring composition, lion footage, typography, music or animation. Use the broad cinematic grammar only: framed reveal, character performance, hold and fade.

## Aletheia Watch — local competitor and change monitor

**Status:** IDEA / promote from the existing competitor-monitor Skill when implementation starts.

### Purpose

Give a small local business a simple way to discover relevant nearby competitors, choose the public pages worth watching, establish a dated baseline and then check for material changes such as prices, menus, products, packages, opening details, promotions or positioning.

This is **competitive intelligence from public sources**, not scraping-for-scraping's-sake and not a covert-surveillance product.

### First-run flow

```text
WHAT DO YOU DO?
Thai massage / restaurant / food shop / book shop / etc.
        ↓
POSTCODE / TOWN + SEARCH RADIUS
        ↓
DISCOVER CURRENT NEARBY BUSINESSES
        ↓
USER SELECTS COMPETITORS
        ↓
DISCOVER OFFICIAL WEBSITE + USEFUL WATCH PAGES
        ↓
USER SELECTS FIELDS/PAGES TO WATCH
        ↓
CAPTURE DATED BASELINE
        ↓
OPTIONAL WEEKLY/MONTHLY CHECK
```

The app may suggest likely pages such as:

- treatments/services and prices;
- menus;
- product/category pages;
- offers/promotions;
- opening/contact pages;
- news/blog;
- recruitment;
- delivery/booking terms.

The user approves the watch list. A business discovered by search is not automatically a competitor and an old/duplicate listing must not become a watch target without checking identity.

### Geography

Ask for a coarse postcode/town and a radius. Use current local search/map/business discovery to suggest candidates. Keep exact home/private location out of the workflow when a business postcode/town is sufficient.

### Baseline and change rule

The first successful capture is **BASELINE**, not "a change".

A later report may claim change only when a comparable earlier observation exists. Preserve:

- competitor identity;
- page/field locator;
- previous observed value;
- current observed value;
- observation/retrieval dates;
- source URL;
- material uncertainty or page-layout change.

A redesigned webpage or parser failure is not proof that a price/product changed.

### Scheduling

The static app should be useful without a scheduler: save/export watch configuration and run CHECK NOW manually.

Optional adapters can schedule the same read-only job weekly or monthly using ChatGPT Tasks/Work, Claude, Kimi, Manus, Grok, Odysseus or another capable system. Scheduling is enhancement, not a foundation dependency.

Default scheduled behaviour should be **notify only for material supported change** rather than sending "nothing happened" noise.

### Commercial/reaction layer

Keep the observation separate from the response.

Aletheia Watch may explain why a change could matter, but recommendations remain hypotheses until evidence supports them. Do not automatically alter the user's prices, website or advertising because a competitor changed theirs.

### Relationship to the 11 Skills pack

The existing `competitor-monitor` Skill already contains useful baseline/provenance/change rules. Reuse its workflow meaning when designing Watch, but do not mutate the 11-skills repository merely to make the app.

A future Watch app deserves its own specification because geography, competitor selection, persistent watch lists, baseline history and scheduling configuration are genuine interface/state needs.

### Possible resource layer

A general Watch app is primarily a utility. Any book/tool/affiliate resources are secondary and must not affect which competitors are selected, which changes are reported or their evidence status.


## 11 Aletheia-enabled Skills — triage before redesign

**Status:** REVIEW ONLY. Do not rewrite the skills yet.

Repository reviewed: `KarstenEvans/11-aletheia-enabled-workflow-skills`.

The current pack is more substantial than its origin as an article-derived idea suggests: each workflow already has an Aletheia-informed evidence/action boundary and the competitor monitor has dated-baseline/change logic. The useful next step is **classification and testing**, not wholesale rewriting.

Working classification:

- **Humanizer:** keep as Skill; an app adds little unless voice-profile management becomes visual/persistent.
- **Inbox Triage:** Skill + authorised email connector; external send remains a separate approval/action.
- **Content Repurposer:** keep as Skill.
- **Decision Helper:** keep as Skill; possible app only if a persistent comparison/decision ledger proves useful.
- **Weekly Review:** keep as Skill unless a history/dashboard becomes genuinely useful.
- **GEO/AEO Optimizer:** keep as Skill for content; the existing Site Audit is the richer website-level app.
- **Competitor Monitor:** strongest candidate to become **Aletheia Watch** because it benefits from geography, persistent watch targets, baselines, page/field selection, history and schedules.
- **Executive Brief:** keep as Skill.
- **Meeting Prep:** Skill + calendar/email/records connectors.
- **Sales Follow-up:** Skill + CRM/email connectors; draft first, send only on explicit authority.
- **Feedback Synthesizer:** keep as Skill unless a persistent multi-source feedback dashboard is later justified.

Compatibility experiment later: test one low-risk Skill and Competitor Monitor in Codex/Kimi/Manus/Odysseus-style environments before claiming the pack is portable across them. Preserve workflow meaning even where packaging differs.



## Ethical native-ad / answer-ready discovery pattern

**Status:** TEST AS DISCOVERY METHOD

Research into high-visibility advertorial/product pages suggests a useful architecture that Aletheia can borrow ethically:

- one specific problem/question per page;
- direct answer or story hook near the top;
- broad but relevant semantic coverage;
- useful subheadings and related questions;
- crawlable text rather than JS-only content;
- strong internal linking;
- downloadable resources with backlinks;
- clear next action;
- source/provenance trail;
- measurement via Search Console/analytics.

Use **Aletheia Site Audit → Native Ad / Advertorial Pattern** to inspect a competitor page and classify techniques:
- REUSE ETHICALLY
- TEST
- DO NOT COPY
- UNKNOWN

Do not copy fake scarcity, unverifiable maker stories, disguised advertising, fake testimonials, misleading geography/locality or mass-produced thin pages.

Potential first pilots:
- Garden Life / hedgehog and bee-hotel questions;
- Secret Windows practical Windows questions;
- Swindon factual/local-history questions;
- Aletheia AI Easy questions that people repeatedly search for.

The goal is not to manipulate AI. The goal is to publish answers that are genuinely useful and easy for humans, search engines and AI retrieval systems to parse and cite.

## Aletheia Legal Check — researched draft (27 September 2026)

**Canonical name:** Aletheia Legal Check. **Planned app path:** `aletheia-legal-check/aletheia-legal-check.md` (no version in filename). Previous `Aletheia Law Check` and `Aletheia UK Legal Sources` drafts were not executable app contracts; distinguish the application from its technical source register. The corrected local draft is v0.4.0 pending cross-provider test/publication.

**Purpose:** a portable conversational tool that actually invokes available live browsing to find applicable original legislation and judgments before answering a legal question, with a source-by-source READ / LINK FOUND / BLOCKED / NOT FOUND / NOT APPLICABLE receipt. If the host lacks browsing, say NOT LIVE VERIFIED and give exact manual routes. Never claim that an attached Markdown file itself enables tools.

**Existing-work decision:** CREATE a separate legal research application for question, citation, date/jurisdiction and receipt state; REUSE Aletheia Protocol evidence/claim/conflict receipts and shared GUI/dev contracts; LINK to the separate `aletheia-uk-legal-sources.md` technical register, the proposed Aletheia Knowledge cards, and the optional Storyteller fiction *The Curious Case of the Missing Gavel*. No duplicate generic Trust Check or Source Recovery engine.

**Official/free first:** Find Case Law, legislation.gov.uk, BAILII individual links within its rules, GOV.UK tribunal decisions and jurisdiction-specific judiciary repositories. Commercial Lexis/Lawtel links and separate optional books/gifts/comedy are resources, never evidence-ranking criteria. The National Archives' Open Justice Licence v2.0 does not itself authorise computational analysis; obtain written licence/scope clarification before automated AI judgment-text processing. BAILII does not permit unauthorised copying or ingestion of search results/HTML.

**Publication status:** local draft files and resources preview exist; no live CHECK HTML, official API transport/device tests, Aletheia Knowledge manifest registration, story manifest entry, or affiliate approvals have been established. Only publish as working after behaviour and source receipts have been tested in actual target AI and browsers.

## Aletheia Writing Vibe — promoted to app (27 September 2026)

Canonical files: `aletheia-writing-vibe/aletheia-writing-vibe.md` and companion `-page.md`, `.htm`, `-rsc.htm`. Existing-work gate: CREATE NEW, since source attribution, author disambiguation, time/genre comparison and an evidence-limited Markdown handoff warrant their own interface. V1 intentionally uses static local cleaner + external AI research pack, not direct unauthorised scraping. Later optional: authenticated browsing adapter, citation import and source-by-source evidence ledger, always human-approved. Do not duplicate app as a separate generic humanizer.


## Aletheia Constellation and thematic gift shelves — 28 September 2026

**Status:** pilot on Terry Pratchett reader; extension to other public HTML pages is an idea until each destination has been verified.

- Curated ★ index row across related public **Apps, Stories, Knowledge, Writers and Swindon UK** HTML pages. Accessible text on every star; never a link to an unpublished empty page.
- Contextual, original gift shelf near the end of a subject's main page, mirrored with extra evidence on the resources page only when useful. Do not make visitors browse a third-party author's catalogue to discover individual items.
- Terry Pratchett demonstration: official Greebo cat plush (stock alert), Luggage plush, Death of Rats figurine, Librarian/bookends and Unseen University miniatures. **Hex-inspired AI ant-computer** as a clearly unofficial, educational ant habitat with live-animal welfare information. Explore related ideas: book gifts, reading blankets, annotated maps, stationery, board games, miniature libraries, or mechanical curiosities, subject to evidence and licensing.
- Research Bookshop UK, Audible UK, Discworld Emporium and ant-keeping retailers' affiliate options individually. Do not mistake having Awin installed for advertiser approval or assume a merchant has a programme.
- Future reusable mini knowledge / data file: label, image permission/source, specific URL, identity/stock check, affiliate programme/approval, approved tracking URL and last checked date. Publish no invented affiliate parameters or third-party product images.
- Keep the commercial shelf an optional footer companion to useful content, not a promotional obstruction. Use a small pilot and actual click/conversion evidence before applying site-wide.\n\n## Aletheia Decision Check — promoted to reusable app/pattern (30 September 2026)

**Status:** APPROVED AND IMPLEMENTING. Aletheia Decision Check is a small reusable decision-support surface rather than a general "AI decides for you" engine.

Core sequence: Define decision → assumptions → evidence → challenge strongest assumption → pre-mortem → missing information → reduce alternatives → uncertainty → STOP/human decision.

Required companion ideas:
- **Quiet Mode:** What changed / What matters / What needs attention.
- **Evidence Grid:** consistent multi-source or multi-option comparison.
- **Perspective Expansion:** deliberately inspect material contrary evidence and source diversity.
- **Verification ≠ confirmation:** reframe "prove my idea" into a fair check.
- **Errors prevented / insight added:** success measures may include caught errors, newly surfaced evidence or changed next action, not only speed.
- **Model agnostic:** portable Markdown/JSON state and receipts; no single LLM is the product.
- **Human decision point:** the tool may advise and reduce options, but does not silently make consequential choices.

Origin research is preserved separately in Aletheia Knowledge as `knowledge/aletheia-judgment-over-output.md`. Case File 42 and the Storyteller adventure provide the public/story explanation of the same design lesson.\n

## AI Journal gold mine — agent trust, workflow and verification (30 September 2026)

**Status:** RESEARCHED IDEA SET / CONSOLIDATE WITH EXISTING APPS.

Deep trawl source note: `KarstenEvans/aletheia-knowledge/ideas/aletheia-ai-journal-gold-mine.md`.

Promote these as reusable capabilities rather than duplicate apps:

- **Aletheia Agent Inspector / Trust Layer** — compare intended action, attempted action, reported completion and verified outcome; show tools, evidence, authority, approvals, exceptions and rollback state.
- **Aletheia Workflow Mapper** — `discover -> describe -> automate`; document trigger, inputs, authoritative sources, exceptions, human judgement, approval gates and completion evidence before automation.
- **Aletheia Agent Register / AGENTS.md Dashboard** — read real repository `AGENTS.md` and agent manifests; show purpose, owner, scope, permissions, memory/state, approvals, receipts, last review and revocation path. Flag observed but undeclared automations as **UNKNOWN AGENT** for investigation.
- **Aletheia Knowledge Health Check** — detect stale/duplicate/conflicting material, ambiguous masters, missing provenance, orphan files, poor naming/indexing and unclear retention/ownership. Prefer dimensions and evidence over a fake single truth score.
- **Aletheia Make or Buy** — compare paid SaaS, a narrow local build, open source and hybrid routes against actual required functions, maintenance, privacy, lock-in, APIs, cost and reversibility.
- **Agent Conflict Resolver** — surface incompatible multi-agent objectives/evidence and escalate instead of allowing infinite agent loops.
- **System Evaluation** — evaluate the configured operating loop (model + tools + prompt + permissions + data + memory + retries + approval gates), not model benchmarks alone.

Shared rules now adopted:
- **Done != verified done.**
- **Capability != permission.**
- **Discover -> Describe -> Automate.**
- Consequence boundaries, not arbitrary every-step friction, are where human approval matters most.
- Durable evidence and temporary working context should be treated differently.
- Repository `AGENTS.md` is an active router that must actually be read.

Do not implement all of these at once. First candidates for prototyping are Agent Inspector as a generic report/receipt format and Workflow Mapper against one real Aletheia workflow.

### AI Journal third-walkabout additions

Fold these into existing concepts rather than create unnecessary standalone apps:

- **Small-Business Tool Fit Check** becomes a mode of **Make or Buy**: start from the user's actual problem, team, budget and existing tools before recommending anything.
- **Agentic Commerce Readiness** should extend Site Audit / Shop Price / Publisher when relevant: product identity, current price/stock, merchant identity, returns, structured data and strict separation between comparison authority and purchase authority.
- **Consequence ladder:** READ -> DRAFT -> DIGITAL WRITE -> EXTERNAL COMMIT -> PHYSICAL EFFECT. Increase identity, approval, verification and recovery requirements as consequence rises.
- **Accessibility co-design:** keep keyboard/screen-reader semantics, text/speech adjustment, reduced motion, clear language and real-user testing in design scope rather than post-build polish.

Detailed sources and rationale remain in `KarstenEvans/aletheia-knowledge/ideas/aletheia-ai-journal-gold-mine.md`.

## Aletheia Tool Fabric / common tool contract — 1 October 2026

**Status:** ARCHITECTURE IDEA + DRAFT CONTRACT CREATED.

Aletheia now has a draft root `aletheia-tool-contract.md`, prompted by a review of the public MIT-licensed Felhaven local-AI toolbox architecture.

The opportunity is to let existing Aletheia apps expose selected reusable capabilities through a shared self-describing contract rather than building another monolithic Assistant or duplicating dispatch tables.

Key ideas:

- one tool, one job;
- tool owns its description, input schema, authority and callable handler;
- registry generated from tool declarations;
- Assistant/Improve/apps consume the same registry;
- execution-time permission gate;
- structured errors;
- exact/verbatim output route;
- tool-call receipts;
- static dependency map for Improve;
- scheduler separated from tool logic;
- model/provider remains replaceable.

This must remain **incremental**. Existing useful standalone HTML apps do not need conversion merely to conform. Trial the contract on a few reusable capabilities, then promote only what reduces duplication or improves safety/debuggability.

Shared GUI/dev adoption remains pending explicit item-by-item approval.


## Aletheia AI Easy — Copilot persistent-instructions discovery (3 October 2026)

**Status: RESEARCH IDEA; NOT A VERIFIED UNLOCK.** Kes reports that free personal Copilot previously displayed a Custom Instructions editor that is now absent. Paid/enterprise Copilot includes customisation features, but equal-looking interfaces do not establish that they share local configuration or entitlement logic. Windows observations include `Microsoft.Copilot` and `Microsoft.MicrosoftOfficeHub` package registrations, app activation entries, and a Copilot background-task registration. These are **not** confirmed Custom Instructions feature flags.

**Research proposal:** Perform an authorised, read-only comparison across free consumer, paid consumer and enterprise documentation/builds. Search public Microsoft docs, old forums/Usenet archives, GitHub, public Reddit and indexed social reports for actual setting/flag names; compare Windows HKCU Office/Copilot entries, MSIX manifests, user-app data and browser/service configurations. Use ETW/Procmon only on a personally owned or expressly authorised test machine. Record exact versions, source URLs, timestamps, results and false leads. Test any discovered writable feature setting on an expendable, backed-up personal test environment only after confirming application reads it, documented impact, safe rollback and no attempts to circumvent licences or access restrictions. **Never publish an invented .reg key or treat an app registration as a feature gate.**

**Product design:** Aletheia AI Easy must support `LITE` (paste bootstrap into chat), `PERSISTENT` (documented user-accessible custom instructions/project feature where available), and `PORTABLE` (external local Markdown handover). Bootstrap in a chat is still bootstrap even without a persistent preferences editor; permanence is a different requirement. Add a clear pop-out bootstrap with copy button, keyboard accessibility and an ordinary same-page fallback.

**Distribution idea from Kes:** Optional opt-in email newsletter or resource delivery for advanced setup guides. **Decision gate:** no hidden/evasive publication, deceptive Easter eggs, undisclosed registry edits, or email requirement for basic instructions. Give explicit consent, transparent contents, unsubscribe/privacy handling and public essential safety/rollback information. Subscription may deliver helpful advanced guides but is not a way to conceal unsupported feature unlocks.


## Aletheia Story Queue / Go Walkabout productions — 3 October 2026
Canonical numbered backlog: [Aletheia Story List.md](Aletheia%20Story%20List.md). Includes Copilot's archived Pip story, Sif's distinct MMC-based parallel story, Forgetful AI case, earlier ToomorrowMan/Cabinet stories, and 2010s/2026 story-bank seeds. One source-of-truth queue, no duplicate app; use existing Storyteller + Knowledge + optional Swindon discovery. Command **“Let's do a story”** selects the first incomplete story and runs current Aletheia Improve rules. Each production aims for reviewed text, Storyteller cues, accessible HTM where warranted, knowledge research, YouTube production prompt, authentic assets, resources/books/gifts and links. Archive and rights preserved; publication/verification never assumed.
