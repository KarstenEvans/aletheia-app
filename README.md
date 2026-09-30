# Aletheia Apps

Portable Markdown and HTML applications using the [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) for evidence-aware AI tasks, with explicit provenance, honest capability limits and optional companion protocols.

Each app lives in its own lowercase folder. The portable Markdown file is the application; an HTML interface is added only when it provides a genuine benefit.

## Start here for app work

- `AGENTS.md` — short router for coding/agent tools.
- `aletheia-GUI.md` — shared interaction, mobile, browser, link/window, accessibility and fallback rules.
- `aletheia-dev.md` — source-of-truth, page-spec, resumability, permissions, testing and reconstruction rules.
- `aletheia-code.md` — small reusable named procedures only.
- `tasks.md` — current implementation and verification work.
- `ideas.md` — ideas that have not yet been promoted into implementation.

For substantial HTML work, read the target app's current files and create/reconcile its `*-page.md` build specification. Do not rely on an old chat as the missing specification.


## Apps

### Aletheia Rice Intelligence

- [Open the rice-market research app](https://karstenevans.github.io/aletheia-app/aletheia-rice-intelligence/aletheia-rice-intelligence.htm) — on-demand source selection, evidence-first briefing handoff or optional authenticated Cloudflare Worker, and portable private Markdown settings/data with reviewed-only price history.
- [Specification, sources and deployment instructions](aletheia-rice-intelligence/README.md). The GitHub Data.md is an empty public starter, not anyone's private broker history.

### Aletheia Site Audit and Affiliate Tools

- [Site Audit browser launcher](https://karstenevans.github.io/aletheia-app/aletheia-site-audit/aletheia-site-audit.htm) — a static handoff page; actual evidence-based audit runs through the [portable Markdown workflow](aletheia-site-audit/aletheia-site-audit.md) in a capable AI.
- [Affiliate Tools](https://karstenevans.github.io/aletheia-app/aletheia-site-audit/affiliate-tools.htm) — one source-backed, shareable, free-first directory of official Google/Bing keyword and website tools, analytics, affiliate networks and practical ethical affiliate-marketing methods. No account is connected or paid search run by the directory.
- [Reconstruction and acceptance specification](aletheia-site-audit/aletheia-site-audit-page.md). Optional Search Intelligence is added to the site-audit results when actual source access is available. Aletheia Discover will link to the same resource when implemented, rather than duplicating it.


### Aletheia Learn

Learn by doing rather than letting AI quietly do the learning task for you. Aletheia Learn turns a real goal into a short attempt, coaching, retry, transfer and independent-check loop, while keeping accessibility support available.

- **Version:** 0.1.2
- **Status:** Working Markdown core + Ctrl-V browser doorway
- **Primary protocol:** Aletheia
- **Core rule:** remove access barriers without automatically removing the thinking that builds the skill
- [Open Aletheia Learn](https://karstenevans.github.io/aletheia-app/aletheia-learn/aletheia-learn.htm) — start a goal, choose a mode/provider, then use the one-click copy/open Ctrl-V handoff.
- [Resources, books, AI setup and phone-first learning kit](https://karstenevans.github.io/aletheia-app/aletheia-learn/aletheia-learn-rsc.htm)
- [Read the app](aletheia-learn/aletheia-learn.md)
- [Open the raw Markdown](https://raw.githubusercontent.com/KarstenEvans/aletheia-app/main/aletheia-learn/aletheia-learn.md)

It distinguishes assisted task performance from evidence of independent learning, uses a progressive hint ladder, supports direct `ANSWER NOW` when the learner wants it, and records supported / independent / transferred / reviewed skill states without inventing grades or certificates. The public HTML is deliberately a **HANDOFF** app: it copies the compact learning contract and opens one selected AI; it does not claim a connected backend.


### Aletheia Language Learn

Learn the language you actually need today from real subjects such as cooking, work, travel, repairs and family life.

- **Version:** 0.2.0
- **Status:** Working Markdown core + Ctrl-V browser doorway
- **Primary protocol:** Aletheia
- **Optional companion:** [Thalia](https://github.com/KarstenEvans/thalia-protocol)
- **Languages:** Thai, Norwegian, German, French, English and other languages supported reliably by the host AI
- **Thai:** first-class script, tone/vowel-length, classifier/particle and active-pattern profile
- [Open Aletheia Language Learn](https://karstenevans.github.io/aletheia-app/aletheia-language-learn/aletheia-language-learn.htm)
- [Thai and language-learning resources](https://karstenevans.github.io/aletheia-app/aletheia-language-learn/aletheia-language-learn-rsc.htm)
- [Read the app](aletheia-language-learn/aletheia-language-learn.md)
- [Open the raw Markdown](https://raw.githubusercontent.com/KarstenEvans/aletheia-app/main/aletheia-language-learn/aletheia-language-learn.md)

To use it, download or attach the raw Markdown file to a capable conversational AI and type or say **START**. A specific request such as “Teach me Thai for cooking fish” starts the lesson directly.

The app remains useful without voice, persistent memory, Astra, Odysseus, Codex, an avatar or web access. Optional components must not be presented as required or officially integrated.


### Aletheia News

A direct-first, evidence-aware news reader that discovers current reporting, groups coverage, traces reporting lineage, surfaces primary sources and supports independent research passes without copying full publisher articles.

- **Version:** 0.2
- **Status:** Working prototype / design
- **Primary protocol:** Aletheia
- **Infrastructure:** Direct browser discovery by default; optional personal BBC RSS Worker
- [Read the app](aletheia-news/aletheia-news.md)
- [Open the browser interface](https://karstenevans.github.io/aletheia-app/aletheia-news/aletheia-news.htm)
- [Open the resources page](https://karstenevans.github.io/aletheia-app/aletheia-news/aletheia-news-rsc.htm)
- [View source register](aletheia-news/aletheia-news-sources.json)


### Aletheia Improve

A repository-aware maintenance launcher. Enter an Aletheia app/project or new idea; Improve refreshes current GitHub routes, searches for existing overlapping work, loads the relevant project rules and builds a provider-neutral improvement pack.

- **Version:** 0.1
- **Status:** Source build complete / live browser verification pending
- [Open Aletheia Improve](https://karstenevans.github.io/aletheia-app/aletheia-improve/aletheia-improve.htm)
- [Read the Improve workflow](aletheia-improve/aletheia-improve.md)
- [Repository memory/registry](aletheia-improve/aletheia-improve-memory.md)
- [Resources](https://karstenevans.github.io/aletheia-app/aletheia-improve/aletheia-improve-rsc.htm)

It prefers extending/reusing existing apps, Skills and knowledge collections over creating near-duplicates, and includes a canonical-name/spelling gate for speech-to-text ambiguities.

### Aletheia Legal Check (local draft, testing pending)

A source-led UK legal-research workflow is being prepared under the canonical name **Aletheia Legal Check**, with proposed application filename `aletheia-legal-check.md` (version stored inside the file). It will require actual official-source lookup and an honest source-by-source receipt, or a visible `NOT LIVE VERIFIED` fallback where the chosen AI has no retrieval tools. Its separate technical reference is `aletheia-uk-legal-sources.md`.

**Not yet a published app:** the v0.4 Markdown, HTML page specification, knowledge cards, resources and optional Storyteller story are local review drafts pending imported-AI and browser/API tests. See [ideas.md](ideas.md) and [tasks.md](tasks.md) for scope and release gates. Do not confuse a static resources page with a functioning CHECK search tool.

### Aletheia Storyteller

An illustrated, narratable browser reader for portable Markdown adventures and character biographies. It uses named image hotspots for smooth pan and zoom, a searchable story/BIO index and optional `[bio-Filename.md]` inclusion.

- **[Open the Storyteller app](https://karstenevans.github.io/aletheia-app/aletheia-storyteller.htm)** (public GitHub Pages website, not a raw source file).
- [Current story index](stories/stories.json), including *ToomorrowMan and the Missing Yesterday* and five separate character biographies.
- [Story format, camera commands, image inventory and biography includes](aletheia-storyteller.md).
- [Canonical page build/QA specification](aletheia-storyteller-page.md).
- [Resources, narrated biographies and TooMorrowMan channel](https://karstenevans.github.io/aletheia-app/aletheia-storyteller-rsc.htm).

Published stories are explicitly listed in `stories/stories.json`; a static web page does not automatically enumerate all GitHub files. Some original first-story image references currently have no corresponding image in GitHub; recover those assets before claiming the visual story is fully illustrated.

## Repository structure

```text
aletheia-app/
├── aletheia-learn/
│   └── aletheia-learn.md
├── aletheia-language-learn/
│   └── aletheia-language-learn.md
└── aletheia-news/
    ├── aletheia-news.md
    ├── aletheia-news.htm
    ├── aletheia-news-rsc.htm
    ├── aletheia-news-worker.js
    └── aletheia-news-sources.json
```

More Aletheia apps can be added as separate folders following the same portable, reconstructable and human-editable pattern.

## Licence

No licence has been selected yet. Public visibility alone does not grant permission to copy, modify or redistribute the contents.

## Aletheia Writing Vibe

- [Public Writers library](Writers/README.md), starting with [Terry Pratchett](Writers/aletheia-terry-pratchett.md), [his resources](Writers/aletheia-terry-pratchett-rsc.md), [41 Discworld + 23 selected other works CSV](Writers/terry-pratchett.csv) and [explicit writers.json manifest](Writers/writers.json). The static browser page now offers reviewable three-file downloads; publishing to GitHub remains an authorised separate action.


- [Open Writing Vibe](https://karstenevans.github.io/aletheia-app/aletheia-writing-vibe/aletheia-writing-vibe.htm) — paste/upload text and clean Facebook UI noise locally; prepare an explicit external-AI research pack. This static page does not scrape, browse or itself create a verified AI-written profile.
- [Canonical workflow](aletheia-writing-vibe/aletheia-writing-vibe.md) · [Page specification](aletheia-writing-vibe/aletheia-writing-vibe-page.md) · [Resources](aletheia-writing-vibe/aletheia-writing-vibe-rsc.htm).
