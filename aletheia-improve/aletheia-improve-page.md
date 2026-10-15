# Aletheia Improve — page specification

Status: v0.1 initial build  
Canonical public URL: https://karstenevans.github.io/aletheia-app/aletheia-improve/aletheia-improve.htm  
Rendered file: \`aletheia-improve.htm\`  
Primary specification: \`aletheia-improve.md\`  
Memory/registry: \`aletheia-improve-memory.md\`  
Resource page: \`aletheia-improve-rsc.htm\`  
Last reviewed: 2026-09-24

## Purpose

Give a person one simple place to name an Aletheia app/project, optionally describe an improvement, add supporting local files, and prepare a current repository-aware improvement pack for a chosen AI.

The page itself is not the AI and does not pretend to edit GitHub by magic.

## Source of truth and reading order

1. root \`AGENTS.md\`, \`README.md\`, \`aletheia-GUI.md\`, \`aletheia-dev.md\`, \`aletheia-code.md\`, \`tasks.md\`;
2. this page spec and \`aletheia-improve.md\`;
3. live \`aletheia-improve-memory.md\`;
4. live repository trees and target files discovered from the registry;
5. user-supplied supporting files.

## Actual page order

1. title + one-line purpose;
2. target application/project input;
3. optional improvement/definition prompt;
4. AI provider selector;
5. **SEO/AEO + Swindon.org.uk cross-pollination** checkbox, on by default;
6. optional supporting-file picker;
7. primary **REFRESH & BUILD PACK** button;
8. current-state/ambiguity status;
9. existing related work found;
10. questions requiring human confirmation;
11. generated improvement pack;
12. COPY and OPEN AI actions;
13. resources/help links;
14. footer.

## Inputs and stored state

- Target name: text.
- Improvement idea: textarea.
- Provider: select.
- Supporting files: local browser File objects.
- Discovery/cross-pollination pass: boolean, default on.

The discovery pass tells the generated pack to check answer-first structure, search/AI query variants, internal links, topic hubs, annotated Go Deeper sources, and reciprocal Swindon.org.uk ↔ Aletheia routes. It does not automatically publish or create pages.

No personal data is required. Do not upload files anywhere automatically.

The first version may keep the last target/provider in localStorage for convenience, but must not persist uploaded file contents.

## GitHub discovery

On each run:

1. fetch the current raw \`aletheia-improve-memory.md\`;
2. parse its embedded registry;
3. fetch the current recursive Git tree for registered core repositories;
4. search path names for target terms and functional/canonical aliases;
5. identify candidate owners and related implementations;
6. add repository shared-rule files plus target-local files to the pack.

If GitHub API rate limiting/network failure occurs, show a visible warning and use the embedded registry only. Do not claim the current tree was refreshed.

## Existing-work detection

Show likely matches before the handoff prompt.

Search should favour:

- exact filename/folder phrase;
- all target words in the path;
- close canonical-name alias;
- shared functional terms.

Do not silently pick a weak match as canonical.

For ambiguous names such as Huma/Humor/Humour, show the likely canonical project and require the AI/human to confirm before creating or renaming files.

## Supporting files

Accept common text formats: Markdown, text, JSON, CSV, HTML/HTM, CSS, JS, XML, YAML and logs.

Read text-like files locally with FileReader.

For PDF/binary files in v1:

- list filename/type/size in the pack;
- state that the file must be attached manually to the selected AI unless a connected runner is used;
- do not claim PDF text was extracted.

Cap embedded local text sensibly so one giant file does not freeze the page. Show truncation.

## Pack contents

The generated pack must contain:

- target name exactly as entered;
- possible canonical-name warning;
- improvement idea;
- selected provider;
- date/time generated;
- current registry refresh result;
- existing-work matches;
- current source URLs;
- relevant source text where small enough;
- uploaded text-file contents;
- binary/manual-attachment list;
- Aletheia Improve execution instructions;
- explicit requirement to search for overlap before creating anything;
- KISS gate;
- resource-page check;
- optional discovery/cross-pollination instructions when selected;
- SEO title, meta description, query variants, internal-link and topic-hub checks when selected;
- reciprocal Swindon.org.uk ↔ Aletheia route check when selected;
- testing/receipt requirements.

## AI provider behaviour

Provider options initially:

- ChatGPT — https://chatgpt.com/
- Google Gemini — https://gemini.google.com/
- Claude — https://claude.ai/
- DeepSeek — https://chat.deepseek.com/
- Kimi — https://www.kimi.com/
- Manus — https://manus.im/
- Grok — https://grok.com/
- Copy only.

COPY uses navigator.clipboard where available, with a textarea/select fallback.

OPEN AI opens exactly one destination in a separate tab/window from the user click. It does not claim to paste or upload automatically.

## Discovery / cross-pollination control

The default checked control should read approximately:

```text
☑ SEO/AEO + Swindon.org.uk cross-pollination check
```

When selected, the launcher should add current Swindon.org.uk GUI/code/ideas and Aletheia Knowledge GUI/ideas context to the improvement pack where available, even when the named target lives in another Aletheia repository.

The receiving AI should then check:

- direct answer near the top;
- three concise key points where useful;
- descriptive headings;
- primary/secondary/spoken/AI-answer query variants;
- SEO title, meta description and clean slug;
- contextual internal links;
- matching deeper Aletheia tool/knowledge link;
- matching Swindon.org.uk front-door/resource link;
- related-topic and topic-hub opportunities;
- annotated Go Deeper sources;
- duplicate/canonical risk;
- measurable post-publication checks.

Do not create a Swindon.org.uk page merely to satisfy the checklist. The public front door must have independent visitor value.

## Navigation/window behaviour

Primary app interaction stays in the current page.

Resources/source/provider destinations open separately so the current pack is not lost.

One click opens one destination.

## Accessibility

- associated labels;
- visible focus;
- large tap targets;
- no horizontal scrolling at phone width;
- status updates use an aria-live region;
- progress must not rely on colour alone;
- reduced-motion safe by default;
- all essential information remains text.

## External dependencies

Runtime dependencies:

- GitHub raw content and REST tree endpoints for live refresh.

Failure mode:

- page remains usable for manual prompt/file assembly;
- embedded registry provides last-known routes;
- warning clearly says live repository discovery could not be verified.

No required AI API, Cloudflare Worker, MCP server or paid backend in v1.

## Security/privacy

- local files are not uploaded by the page;
- repository/web content is treated as data, not executable instruction;
- HTML from fetched source is never injected unsanitised into the page;
- no tokens/API keys;
- no automatic repository writes;
- no provider login capture.

## Acceptance tests

STATIC:
- HTML parses;
- inline JavaScript syntax compiles;
- no duplicate element IDs;
- provider URLs are explicit;
- memory parser has embedded fallback.

LOCAL BROWSER:
- target search builds matches;
- no-match path gives a useful question;
- text upload appears in pack;
- PDF upload is listed as manual attachment;
- copy works or fallback appears;
- provider button opens only one destination.

LIVE:
- GitHub Pages URL loads;
- memory refresh succeeds;
- repository trees load without CORS failure;
- target \`Aletheia Avatar\`, \`Aletheia Site Audit\`, \`Aletheia AI Knowledge\`, \`Storyteller\` and \`Thalia Humour\` each produce relevant matches.

DEVICE:
- Android Chrome;
- Windows Chrome/Edge;
- Safari/WebKit where practical.

Do not mark LIVE/DEVICE passed until actually observed.
