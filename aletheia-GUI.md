# Aletheia Apps GUI and interaction contract

> **Purpose:** shared user-interface rules for portable Aletheia browser apps.
>
> **Rule:** useful result first. Keep the core app simple, understandable and usable without an AI service where the task allows it.
>
> **Scope:** this document guides interfaces in `KarstenEvans/aletheia-app`. An individual app's `*-page.md` or app specification may declare justified exceptions.

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
