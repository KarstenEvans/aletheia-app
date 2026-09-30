# Aletheia Apps GUI and interaction contract

> **Purpose:** shared user-interface rules for portable Aletheia browser apps.
>
> **Rule:** useful result first. Keep the core app simple, understandable and usable without an AI service where the task allows it.
>
> **Scope:** this document guides interfaces in `KarstenEvans/aletheia-app`. An individual app's `*-page.md` or app specification may declare justified exceptions.

## Mandatory protocol references in every Aletheia Markdown output

Every Aletheia app must state **at the beginning of its canonical Markdown/instructions** that every Aletheia Markdown file it generates must include references to **both** canonical protocols, irrespective of whether humour is used:

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol)
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

Put the two links visibly near the beginning of every generated `.md` (after front matter/title) and explain their roles: Aletheia for provenance, evidence and uncertainty; Thalia for considered, optional humour and positivity-first tone. No invented protocol text or copied protocol specifications. The app's opening/instructions must declare this output contract; the HTML interface should make it visible when relevant. The absence of jokes does not excuse omitting the Thalia reference. On insufficient-evidence outputs, include both references even when no substantive analysis can be produced. Check the actual generated Markdown before exporting.

## 0. Read the real app before changing it

Before a substantial rebuild:

1. read `README.md`, `AGENTS.md`, this GUI contract, `aletheia-dev.md`, `aletheia-code.md`, and `tasks.md`;
2. read the target app Markdown, current HTML and any `*-page.md`;
3. read the exact manifests, data files and assets the app uses;
4. inventory working behaviour before editing.

Do not regenerate a working app from a memory of an earlier chat.

## 1. Result first

A user should be able to see the primary task immediately.

Prefer:

```text
TITLE
one-line purpose

[ PRIMARY INPUT ] [ PRIMARY ACTION ]

RESULTS / WORK AREA

secondary tools
resources/help
footer
```

Do not place long explanations, diagnostics, advertisements, AI handoff text or promotional panels between the user and the useful result.

## 2. Mobile first, desktop comfortable

Design first for a narrow touch screen, then widen gracefully.

Minimum expectations:

- no horizontal page scrolling at ordinary phone widths;
- controls wrap rather than disappear;
- touch targets are comfortably tappable;
- text remains readable at browser zoom;
- the primary task stays near the top;
- sticky toolbars must not hide the selected result;
- keyboard focus is visible;
- form controls have meaningful labels;
- important state is never indicated by colour alone;
- respect `prefers-reduced-motion`;
- avoid hover-only interactions.

Desktop may use wider grids, resizable child windows and extra diagnostics, but must not become a different product.

## 3. Browser and device matrix

Do not write "works everywhere" merely because one desktop test passed.

For a public app, the normal smoke-test matrix is:

- Windows: current Chrome and Edge; Firefox where practical;
- Android: current Chrome;
- macOS: current Safari plus one Chromium browser where practical;
- iPhone/iPad: current Safari/WebKit where practical.

Record what was actually tested. A source-level syntax check is not a browser test.

### Feature detection beats operating-system guessing

Do not assume a library or browser API is absent because the device is Apple, Android or Windows.

For example, **Three.js can run on Safari/WebKit when the required WebGL/WebGPU/browser features are available**. If an animation fails on an Apple device, test the actual failure mode:

- script/CDN failed to load;
- WebGL context creation failed;
- graphics features/drivers are restricted;
- browser privacy/content settings blocked a dependency;
- memory/performance is insufficient;
- code relies on a browser-specific API.

The interface should react to observed capability, not an OS stereotype.

## 4. Progressive enhancement and fallbacks

Build a useful base experience first. Enhance it when the browser supports more.

Examples:

- static text/card reader -> search/filter -> optional AI/web expansion;
- still illustration/crawl -> WebGL/Three.js animation;
- ordinary download -> File System Access API save picker;
- normal new tab -> desktop popup/window;
- browser speech fallback -> richer voice integration.

An optional enhancement failing must not turn the whole page into a blank rectangle.

### Graphics fallback

For WebGL/Three.js/canvas-heavy apps:

1. detect that the library loaded;
2. attempt renderer/context creation in a guarded block;
3. show the rich animation only after successful initialisation;
4. on failure, hide/disable the broken surface;
5. show a useful lightweight fallback with title, explanation, navigation and any content that does not require the renderer;
6. provide a retry/reload action when useful;
7. preserve reduced-motion mode even when graphics work.

A black or empty canvas with functioning text underneath is not a sufficient failure state if the animation is the page's main purpose.

## 5. One click, one destination

A click must never create two windows because two handlers both intercept it.

### Primary navigation

Home, back, in-app routes and ordinary task navigation normally use the current browsing context.

### Secondary/external navigation

When preserving the current Aletheia task matters, resources, source material, web search and external services may open separately.

Desktop pattern:

- approximately 900 × 760 when a smaller disposable child window is useful;
- resizable and scrollable;
- centred where practical;
- current app remains underneath.

Mobile/tablet pattern:

- allow the browser's ordinary new-tab/new-window behaviour;
- do not try to force a desktop-sized popup;
- never create two destinations as a "fallback".

If popup creation is required after clipboard work or another asynchronous operation, open the window synchronously from the original user click before awaiting network work.

Never intercept:

- `#anchors`;
- `mailto:`;
- `tel:`;
- download links;
- browser-native file-picker actions.

## 6. Preserve task state

Before opening an external site, ask whether replacing the current page would destroy useful state such as:

- a chess game;
- search results;
- filters;
- a partly completed form;
- a story position;
- an editing session;
- a comparison/watch setup.

If yes, prefer a separate window/tab.

If no meaningful state would be lost, ordinary same-window navigation may be simpler.

This is a decision rule, not a command to popup every link.

## 7. Search and results

Use one clear primary search/task control where possible.

- Search already-loaded/local data first when that is the app's purpose.
- Do not navigate to raw Markdown as the search result.
- Keep the query visible.
- Show an explicit no-results state.
- Avoid developer status text in the result stream.
- A "WEB SEARCH" control is secondary and must not substitute for useful stored content.
- Current facts such as prices, vacancies, opening hours or provider features must carry a checked date or be live-verified.

## 8. Forms and user profiles

Collect only what the task needs.

- Every personal field is optional unless the task is impossible without it.
- Prefer coarse location until exact location is needed.
- Explain why a sensitive field would help before requesting it.
- Do not silently copy private profile fields into external searches.
- Keep public knowledge separate from private user state.
- Offer review before exporting or saving a portable memory/profile.

## 9. AI is an optional capability layer

An Aletheia browser app should describe its dependency honestly.

Possible levels:

1. **STATIC/LOCAL:** the ordinary app works without an AI.
2. **HANDOFF:** app prepares text/files for the user's chosen AI.
3. **CONNECTED:** app/provider connector can retrieve authorised external data.
4. **AGENTIC:** an agent can perform multi-step actions.
5. **AUTOMATED:** the workflow can run on a schedule or event.

Do not present a higher level when only a lower level exists.

When an AI provider is optional, the app must not become unusable because that provider changes, reaches a quota or disappears.

### Ctrl-V AI bridge: the standard zero-backend handoff

For a static Aletheia page whose useful next step needs a general AI, the preferred universal handoff is:

1. assemble the task plus the smallest sufficient Aletheia instructions in an off-screen/reviewable buffer;
2. from the **same user click**, copy that buffer while the Aletheia page still owns focus;
3. immediately open the user-selected AI in one separate window/tab;
4. leave the Aletheia task page intact underneath;
5. tell the user to paste with **Ctrl+V**, **Command+V**, **Shift+Insert**, or the device's ordinary **Paste** action;
6. if copy is blocked, reveal a compact manual handoff textarea and Copy control rather than failing silently.

This is a **HANDOFF** capability, not CONNECTED AI. Do not describe it as an API integration.

Implementation rules:

- prebuild or synchronously assemble the payload before opening the provider;
- prefer a synchronous selection/`execCommand("copy")` fallback when the popup must be opened in the same activation event; on secure pages, the modern Clipboard API may additionally be used;
- do not await a network request before opening the AI window;
- on desktop, use the shared approximately 900 × 760 resizable/scrollable secondary-window pattern where useful;
- on mobile/tablet, allow an ordinary new tab/window;
- provide one AI selector rather than five competing launch buttons;
- remember the user's last provider locally when appropriate;
- standard public choices may include ChatGPT, Gemini, Microsoft Copilot, DeepSeek and Claude, but provider URLs/interfaces must remain replaceable adapters;
- the durable app logic remains in canonical Markdown/specification, not inside provider-specific prompt folklore;
- the receiving AI should start the requested task immediately rather than displaying HELP first.

This pattern comes from the established Swindon A2Z/QI handoff design and should be reused instead of rediscovered per app.

### AI doorway + command deck pattern

For a static Aletheia app whose main intelligence lives in the receiving AI, the HTML should be a **doorway/control panel**, not a fake chatbot:

- collect only the task parameters that materially improve the handoff;
- offer one primary **Start** action;
- use the shared Ctrl-V bridge to copy the compact contract and open the chosen AI;
- keep the canonical Markdown as the full behaviour source;
- include enough essential rules in the copied payload to work when the AI cannot fetch the Markdown URL;
- show a small **command deck** for repeat actions inside the AI;
- allow ordinary language as well as commands;
- optional favourite-AI custom/project instructions may make repeated use smoother, but must never be required;
- provider-specific setup belongs in Resources/Help rather than blocking the primary task;
- do not make the user repeatedly click Copy and then separately hunt for an AI when one Start click can prepare both.

A doorway must say **HANDOFF**, not pretend the HTML itself is the AI.

## 10. Action and permission ladder

UI wording should distinguish:

1. **READ / OBSERVE**: inspect authorised information.
2. **DRAFT / PREVIEW**: prepare a message/change without applying it.
3. **LOCAL / REVERSIBLE WRITE**: change an authorised working copy with a recoverable route.
4. **EXTERNAL / CONSEQUENTIAL ACTION**: send, publish, delete, purchase, merge, alter permissions or affect another system/person.

Never label "connected" as though it means "authorised to do anything".

When an action is consequential, show the target and material effect before approval where the platform permits it.

## 11. Long-running AI work must be resumable

Agent capacity, credits and context are finite.

Do not design an app/workflow that succeeds only if a long autonomous run finishes uninterrupted.

A substantial agent task should:

- identify stages;
- save durable progress early;
- use idempotent/repeatable steps where possible;
- record completed and remaining work;
- checkpoint before expensive/slow stages;
- read current files/state when resumed rather than blindly restarting;
- avoid redoing verified work without reason;
- return a receipt even when the larger job is incomplete.

This rule applies to Work, Codex, Claude, Kimi, Manus, Grok, Odysseus and future agent systems.

## 12. External dependencies

Document every runtime dependency:

- CDN/library;
- font;
- API;
- connected account;
- browser API;
- worker/server endpoint;
- remote image/media.

For each dependency define:

- what the user loses if it is unavailable;
- whether the core app still works;
- the visible failure/fallback state.

Never embed private API keys in public client-side HTML.

## 13. Static hosting and manifests

A static page cannot safely pretend it can enumerate a server/GitHub folder.

When the interface needs discovery, maintain an explicit JSON/Markdown manifest such as:

- `stories/stories.json`;
- a future apps registry;
- Aletheia Knowledge's `knowledge/knowledge.json`.

The manifest is a small index, not a replacement for canonical Markdown content.

## 14. Accessibility basics

For ordinary public apps:

- semantic headings;
- one meaningful `h1`;
- associated labels;
- keyboard-operable controls;
- visible focus;
- `aria-expanded` for disclosures;
- status/error announcements where useful;
- alternative text for meaningful images;
- sufficient contrast;
- no information available only through motion/colour;
- reduced-motion fallback;
- captions/transcripts where practical for produced audio/video.

### Shared Aletheia Accessibility Layer

The optional reusable component lives at:

- `shared/accessibility-layer.md`
- `shared/accessibility-layer.css`
- `shared/accessibility-layer.js`

It does **not** replace ordinary accessible HTML. Level 0 semantics, labels, keyboard operation, visible focus, contrast, zoom, alt text, reduced motion and captions remain required whether the component loads or not.

Where useful, the shared component may provide local/free controls such as text sizing, Focus mode and browser read-aloud. Apps may then expose higher-level capabilities such as dictation, OCR, translation, simplification or visual explanation only when the browser/host/AI genuinely supports them.

Accessibility is available without requiring disability disclosure or diagnosis.

For learning apps, preserve the learning goal while removing irrelevant access friction. A support may remain enabled during an independent check unless that support is itself the skill being tested.

Use `data-aletheia-focus-hide` only on non-essential chrome and `data-aletheia-read-region` on the preferred reading area. Never hide safety-critical content in Focus mode and never autoplay speech.

## 15. Error behaviour

Never fail silently.

A useful error states:

- what failed;
- what still works;
- what the person can do next.

Do not expose stack traces, internal provider/tool names or private debug information to ordinary visitors.

## 16. Page-specific visual identity

Shared rules do not mean every app must look identical.

Preserve subject identity where it helps:

- Knowledge collections keep their established accents;
- Storyteller remains cinematic;
- Chess remains game-like;
- Windows remains technical;
- local Swindon pages retain their own site identity.

Consistency should live in behaviour and accessibility, not beige uniformity.

## 17. Reconstruction test

A fresh capable AI/developer should be able to read the repository and reconstruct the page without old chat history.

The rebuild fails if it:

- loses required controls;
- drops mobile navigation;
- removes a distinctive component without instruction;
- substitutes placeholder content for real data;
- changes the source of truth;
- turns an optional AI/cloud service into a required dependency;
- breaks a documented fallback;
- claims tests that were not run.

## 18. One-line test

**Can a first-time visitor immediately understand what this app does, complete its main task, and escape cleanly if an optional feature fails?**


## 19. Awin Publisher MasterTag on public HTML

Public Aletheia HTML pages that are published as part of the Aletheia / Swindon.org.uk web estate use the Awin Publisher MasterTag for publisher `3182162`.

Required placement:

```html
<script src="https://www.dwin2.com/pub.3182162.min.js"></script>
</body>
```

Rules:

- exactly one MasterTag per public production HTML page;
- place it immediately before the closing `</body>`;
- do not put it in Markdown, local test files, archived backups or downloadable source examples;
- before adding it, count existing occurrences to avoid duplicate tracking;
- factual/source links that must not be monetised should use the project's Awin-ignore convention where supported;
- visible affiliate disclosure is still required where commercial/affiliate links are presented. The MasterTag itself is not a disclosure;
- commercial relationships must not alter factual claims, evidence labels or safety guidance.



## 20. Discoverability and answer-ready public pages

When an Aletheia app publishes explanatory content to the open web, make the useful answer understandable without requiring an AI service, hidden state or a click into raw Markdown.

Useful public-page pattern:
- descriptive question/topic title;
- direct answer near the top;
- concise explanation and caveats;
- related questions only when genuinely useful;
- source/provenance links;
- deeper app/knowledge route;
- one appropriate resource/download;
- stable internal links and ordinary crawlable HTML.

Do not assume AI systems share a live common memory. Design for independent crawling, indexing, retrieval and citation.

Competitor landing pages may be analysed through **Aletheia Site Audit → Native Ad / Advertorial Pattern**. Reuse useful architecture, not deceptive persuasion. Avoid fake scarcity, unverifiable biographies, disguised ads, fake testimonials, misleading locality and scaled thin content.

A page should remain worth publishing even if no search engine or AI ever indexes it.

### Swindon.org.uk cross-pollination

When an Aletheia app has a genuinely useful public/resource counterpart on Swindon.org.uk, use a reciprocal route rather than duplicate copy:

- Swindon.org.uk = concise searchable front door and public context;
- Aletheia app/knowledge = deeper specialist tool, evidence or reusable knowledge;
- Swindon.org.uk links to the deeper Aletheia destination;
- Aletheia links back to the matching Swindon.org.uk resource/front-door page;
- both may link sideways to a few genuinely related topics.

Do not force a Swindon.org.uk wrapper around every Aletheia app. The extra page must independently help a visitor.

For public explanatory apps, Aletheia Improve should also check query variants, SEO title, meta description, clean slug, answer-first copy, descriptive headings, internal links, related questions, annotated Go Deeper sources and topic-hub opportunities. These are discovery aids, not ranking guarantees.

Prefer curated topic hubs after several substantive pages exist. Do not create empty public tag archives or mass-produce keyword variations.

## 21. Aletheia Constellation: standard shared seasonal link sprites (29 September 2026)

**Approved standard for new shareable standalone public HTML pages** with genuine relevant routes. The original Terry Pratchett star-nav pilot is now formalised as a contained, reusable **Aletheia Constellation** near the end of the article/app, before the footer. It sends independently arriving visitors back to a curated handful of Swindon UK and Aletheia Apps, Knowledge, Stories and Writers HTML homepages. These are editorial cross-links, **not affiliate ads** or a licence to auto-convert evidence/source links.

**Canonical implementation:** [shared/README.md](shared/README.md), [shared/link-sprites.json](shared/link-sprites.json), `shared/link-sprites.css`, `shared/link-sprites.js`. One maintained JSON link/icon/season register; don't scatter manual seasonal URL lists or code through unrelated pages. Approved first integrations: Site Audit HTML, Affiliate Tools and evergreen Halloween Gifts & Resources.

- Default sprites: animated-but-contained twinkling stars with clear text labels and individual meaningful `href` routes, not clickable decoration with no destination. Seasonal windows based on **visitor browser-local date**: Halloween and one `🧙` witch link to the actual Halloween gifts HTML **1 September–10 November inclusive**; normal stars **11–24 November**; winter gift/snow/reindeer/tree icons **25 November–31 December**, with the same verified default destinations; ordinary stars again **1 January–31 August**. Do not invent a Christmas page until one actually exists.
- Maximum six destinations: five curated ordinary links plus the optional Halloween special. Seasonal item is not present outside its window; an evergreen Halloween page remains directly accessible year-round. Icons and links come from the central JSON catalogue. Human approval before adding or changing seasonal destinations. Static ordinary anchor fallbacks must be in the HTML for when JSON or JavaScript is unavailable.
- Responsive card/row near the page end with a bounded decorative field; no full-page flying overlays, no obstruction of buttons/content, no autoplay sound, no third-party image assets. Approx. 44px or larger touch targets, keyboard-focus outline, accessible names, optional sprite animations that pause on hover/focus and disappear for `prefers-reduced-motion: reduce`.
- One real canonical hub per collection; verify actual source and publicly deployed URL, particularly cross-site, mobile and Safari. External site page should not silently replace core primary navigation. A link to a not-yet-published HTML resource stays off the active manifest.
- Use ordinary `https:` source/editorial links and `data-awinignore` convention, subject to actual Convert-a-Link testing. Awin MasterTag remains exactly once near `</body>`, separate from disclosure next to optional commercial content. Don't sell the navigation as if it were a merchant offer.
- This standard applies to **new** standalone HTML and to previously published pages when next inspected/reworked. Do not blindly bulk-patch all HTML or leave duplicate constellations. For sites on other domains, test cross-origin manifest/CORS or deploy a single generated local copy with normal fallback, while the central Apps JSON remains editorial master.

## 22. Commerce stays on the useful page until the final retailer handoff

A subject's Aletheia HTML reader should provide its own useful, searchable or browsable catalogue and descriptive gift suggestions. Do not make a broad retailer author's page, search results, or another site's gift catalogue the primary browse step when we can show the relevant options locally. One product, one plainly labelled outbound CTA, only on a visitor's click.

- Separate **discovery/source attribution** links from **commercial product/sign-up** buttons. Do not copy source prose, cover art, retailer tracking IDs or copyrighted product assets.
- For each product show its identity, edition/format where material, source/destination, checked date, whether the destination is product-specific, and stock/price only when checked and dated.
- When a product-level URL is unknown, show `link pending verification`, not a generic author/merchant fallback dressed up as a product button. A genuinely useful title-specific retailer search can be labelled explicitly as an **untracked search**, never an individual affiliate product.
- Advertiser acceptance is per programme. A publisher MasterTag alone is not proof of an approved Audible/Bookshop/gift referral. Add a membership signup CTA only with the advertiser-authorised and tested destination, correct offer/eligibility wording and a clear disclosure. Checkout/payment still takes place on the retailer's service, not an unauthorised imitation on our site.
- The site owner must provide or authorise generated personal affiliate links. Preserve research links without indiscriminate Awin conversion; respect approved ignore rules. Never promise referral earnings.
- Keep direct non-affiliate product links visibly distinguished from approved tracked links. Do not market an out-of-stock item as purchasable.
- Optional gift collections should be editorially related, small and relevant, without compromising the page's core answer; mark unofficial/inspired products clearly and check animal welfare/safety for living gift ideas.
- Keep a source-level link inventory and a separate dated live destination/affiliate-tracking receipt. Passing a URL syntax check is not a live product or conversion test.\n\n## 23. Judgment-first interaction: fewer options, visible uncertainty, and a real STOP

**Approved 30 September 2026.** For consequential research, comparison and recommendation interfaces, Aletheia should optimise for **better judgment rather than maximum output volume**. AI may explore broadly behind the interface, but the default human-facing view should reduce cognitive load and preserve the user's decision authority.

Use the reusable **Decision Check** sequence when materially relevant:

1. **Define the decision** — state the actual choice/action, not merely the topic.
2. **Identify assumptions** — make hidden premises visible.
3. **Gather evidence** — source claims and distinguish observation, inference and forecast.
4. **Challenge the strongest assumption** — actively seek evidence that could overturn it; do not merely strengthen the user's opening hypothesis.
5. **Pre-mortem** — assume the plan failed; list plausible failure routes and mitigations.
6. **Find missing information** — say what is still unknown and whether it could change the choice.
7. **Reduce alternatives** — collapse duplicates and weak options; normally surface a small number of materially different survivors rather than dumping every generated variation.
8. **Show remaining uncertainty** — expose disagreements, confidence limits and what would change the conclusion.
9. **STOP / continue deliberately** — when evidence is sufficient for the stated decision, show a completion signal. Further research is an explicit **Go deeper** action, not automatic continuation.

### Quiet Mode
For monitoring, intelligence and evidence-heavy pages, provide a low-noise default that answers:
- **What changed?**
- **What matters?**
- **What needs your attention?**

Detailed evidence, grids, logs and alternatives remain available behind deliberate expansion. Quiet Mode must not hide a material warning or contradiction.

### Evidence Grid
Where the same questions are applied across multiple sources/items, prefer a compact evidence grid with consistent columns such as source/item, claim/factor, supports, contradicts, date, evidence link and uncertainty. This is an Aletheia research pattern, not a copy of any vendor product.

### Confirmation versus verification
If a user asks Aletheia to prove or support an existing belief, consequential workflows should reframe internally to **verify**, including contrary evidence. Do not manufacture false balance; weight evidence according to quality.

### Value signals
When useful, ask whether the tool:
- found something previously missed;
- caught an error;
- challenged an assumption;
- confirmed a claim with evidence;
- changed the next action;
- did not materially help.

Do not make "tokens used", "number of outputs" or "minutes saved" the primary success signal when a slower check prevents a costly mistake.

### Visible human decision point
For consequential action, make it clear where AI advice ends and the human choice begins. Invisible/background AI can be useful, but material automated influence should be inspectable: what changed, why, evidence/provenance, uncertainty and how to challenge or override it.\n