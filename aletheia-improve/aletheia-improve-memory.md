# Aletheia Improve memory and repository registry

> Purpose: durable routing memory for Aletheia Improve.
>
> This is not conversational memory. It is a small repository/path registry which the HTML launcher and any capable AI can re-read from the current GitHub default branch on every run.

Last reviewed: 2026-09-24

## Machine-readable registry

The browser app parses the JSON between the markers. If parsing or network access fails, it may use its embedded copy and must say that live memory could not be refreshed.

<!-- ALETHEIA_IMPROVE_MEMORY_JSON_BEGIN
{
  "version": 1,
  "owner": "KarstenEvans",
  "coreRepositories": [
    {
      "repo": "KarstenEvans/aletheia-app",
      "branch": "main",
      "role": "Portable Aletheia apps and shared app contracts",
      "alwaysRead": [
        "AGENTS.md",
        "README.md",
        "aletheia-GUI.md",
        "aletheia-dev.md",
        "aletheia-code.md",
        "tasks.md"
      ],
      "ideas": "ideas.md"
    },
    {
      "repo": "KarstenEvans/aletheia-knowledge",
      "branch": "main",
      "role": "Canonical public knowledge collections and their readers",
      "alwaysRead": [
        "AGENTS.md",
        "README.md",
        "aletheia-knowledge-GUI.md",
        "aletheia-knowledge-code.md",
        "aletheia-knowledge-tasks.md",
        "knowledge/knowledge.json"
      ]
    },
    {
      "repo": "KarstenEvans/SwindonOrgUK",
      "branch": "main",
      "role": "Swindon.org.uk site, resources and local presentation rules",
      "alwaysRead": [
        "AGENTS.md",
        "README.md",
        "docs/swindonorguk-gui.md",
        "docs/code.md",
        "ideas.md"
      ]
    },
    {
      "repo": "KarstenEvans/aletheia-protocol",
      "branch": "main",
      "role": "Canonical Aletheia protocol"
    },
    {
      "repo": "KarstenEvans/thalia-protocol",
      "branch": "main",
      "role": "Canonical Thalia humour protocol and Thalia Humour app",
      "alwaysRead": [
        "AGENTS.md",
        "README.md",
        "THALIA_PROTOCOL.md",
        "thalia-humour-app.md"
      ]
    },
    {
      "repo": "KarstenEvans/11-aletheia-enabled-workflow-skills",
      "branch": "main",
      "role": "Reusable Aletheia-enabled workflow Skills; check before turning a workflow into another app"
    },
    {
      "repo": "KarstenEvans/aletheia-007-agent",
      "branch": "main",
      "role": "Privacy/exposure monitoring agent"
    },
    {
      "repo": "KarstenEvans/RIP-UK",
      "branch": "main",
      "role": "Memorial application"
    }
  ],
  "knownCrossRepositoryRules": [
    "Search for an existing app, Skill, knowledge collection, protocol feature or shared component before creating a new app.",
    "Aletheia app HTML normally lives in KarstenEvans/aletheia-app; knowledge readers may live in KarstenEvans/aletheia-knowledge/app.",
    "Knowledge Markdown is canonical content; HTML is a replaceable reader/rendition.",
    "For substantial app HTML work create or reconcile a matching *-page.md.",
    "If an app has a .htm human interface, provide or reconcile a matching -rsc.htm resource page unless the owning repository explicitly defines a different resource architecture.",
    "Resource pages are free/useful first. Commercial or affiliate links are separate from evidence and never determine factual ranking.",
    "Storyteller has its own cinematic rules and lives in KarstenEvans/aletheia-app with stories/ and stories/stories.json.",
    "Swindon.org.uk has its own GUI contract at docs/swindonorguk-gui.md.",
    "Aletheia Knowledge has its own GUI contract and explicit knowledge/knowledge.json inventory.",
    "GitHub main is shared master. Re-fetch immediately before writing and reconcile concurrent changes."
  ],
  "canonicalNames": [
    {"canonical":"Thalia Humour","watchFor":["Huma","Humar","Humor app","Thalia Humor"],"note":"Repository spelling is British English: Humour."},
    {"canonical":"Aletheia Improve","watchFor":["Aletheia Improved","Althea Improve","Althea Improved"],"note":"Use Aletheia Improve for the app/workflow name."},
    {"canonical":"Aletheia","watchFor":["Althea","Alethea"],"note":"Confirm before renaming files or projects."},
    {"canonical":"Odysseus","watchFor":["Odyssey","Odyseus"],"note":"Self-hosted workspace/agent project."}
  ],
  "specialTargets": [
    {
      "name": "Aletheia AI Knowledge",
      "repo": "KarstenEvans/aletheia-knowledge",
      "primary": "knowledge/aletheia-ai-knowledge.md",
      "reader": "app/aletheia-ai-knowledge.htm",
      "pageSpec": "app/aletheia-ai-knowledge-page.md"
    },
    {
      "name": "Thalia Humour",
      "repo": "KarstenEvans/thalia-protocol",
      "primary": "thalia-humour-app.md",
      "reader": "thalia-humour.htm",
      "protocol": "THALIA_PROTOCOL.md"
    },
    {
      "name": "Storyteller",
      "repo": "KarstenEvans/aletheia-app",
      "primary": "aletheia-storyteller.md",
      "reader": "aletheia-storyteller.htm",
      "pageSpec": "aletheia-storyteller-page.md",
      "manifest": "stories/stories.json"
    }
  ]
}
ALETHEIA_IMPROVE_MEMORY_JSON_END -->

## Human rules

### 1. Refresh before reasoning

At the beginning of every Improve run:

1. re-read this file from GitHub;
2. fetch the current tree/default branch of each relevant repository;
3. identify current shared GUI/dev/agent/task files;
4. identify target-local Markdown, HTML, page specification, README, data/manifest, resources, ideas and tasks;
5. use current files rather than remembered chat state.

The registry is a router, not a substitute for repository discovery.

### 2. Existing-work gate

Before inventing a new app or feature, search all registered repositories for:

- same or similar name;
- same user task;
- same reasoning/workflow;
- same data model;
- a Skill which already performs the workflow;
- a knowledge collection which already owns the content;
- a shared component which could be extended.

Return one of:

- **EXTEND EXISTING**
- **REUSE / LINK**
- **MERGE / CONSOLIDATE**
- **CREATE NEW**

Do not create a new app merely because a speech-to-text name differs.

### 3. Name and intent gate

Names are data that can be wrong.

When a spoken/typed name conflicts with a canonical repository name, say what was found and ask/record the minimum question needed before renaming, creating or moving files.

Do not silently turn \`Humour\` into \`Huma\`, or \`Aletheia\` into \`Althea\`.

When the intent is clear enough to continue safely, continue with non-destructive discovery/research while keeping the naming question open.

### 4. Source hierarchy

For a target app, prefer:

1. target repository AGENTS/router and README;
2. target repository shared GUI/dev/code/task contracts;
3. target app canonical Markdown/specification;
4. target page specification;
5. target current HTML/code;
6. target manifests/data/assets;
7. relevant knowledge collection;
8. relevant Swindon.org.uk resource/site rules;
9. current external research.

When files disagree, report the conflict. Newer is not automatically better.

### 5. KISS improvement gate

An improvement must answer:

- What user problem does it solve?
- Can the same value be achieved by extending something already present?
- Does it keep the primary task obvious?
- Does it add a dependency?
- What fails if that dependency disappears?
- Is the new complexity worth keeping?

Prefer useful finishing touches over architectural fireworks.

### 6. Resource-page rule

When a human-facing app has \`.htm\`, check for a matching \`-rsc.htm\`.

Resources should include, where relevant:

- strong free/official resources first;
- useful books/tools/services;
- current affiliate opportunities only when genuinely relevant and verified;
- ordinary free links even when no affiliate relationship exists.

Commercial relationships must not alter evidence, factual claims or rankings.

### 7. Research rule

For changing facts, research current sources. Prefer primary/official sources and date the check.

Do not deep-research everything by default. Research the decisions that could materially improve usefulness, correctness, safety, interoperability, accessibility or maintenance.

### 8. Finish rule

For material work:

- update canonical Markdown/page spec before or with HTML;
- run static/runtime checks that are actually available;
- update the appropriate tasks file;
- state what changed, what was verified and what still needs human/live/device testing.
