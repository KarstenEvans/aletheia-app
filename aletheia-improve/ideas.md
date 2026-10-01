# Aletheia Improve ideas

Ideas are not v0.1 requirements.

## Connected runner

A future optional runner could execute the pack directly through:

- ChatGPT Work/Codex;
- Claude Code/agent tooling;
- Gemini tooling;
- Kimi/Manus/Grok agent features;
- Odysseus as a self-hosted orchestration layer.

Keep the static browser launcher useful without any of them.

## Repository health map

Generate a compact inventory showing which apps have:

- canonical Markdown;
- page specification;
- HTML;
- resource page;
- README;
- local tasks/ideas;
- data/manifest;
- public URL;
- last verified live/device test.

This should identify missing structure without forcing every project into identical folders.

## Consolidation suggestions

If two apps overlap, show a small proposal:

- shared capability;
- different capability;
- recommended owner/source of truth;
- files that could become adapters/resources rather than duplicate apps.

Never auto-merge.

## Humour key intake through Odysseus

Potential Thalia extension:

1. Odysseus reads a narrowly scoped mailbox/filter on a schedule.
2. Candidate messages must match the confirmed account/sender rule and \`[Thalia]\` marker.
3. The message is never treated as an AI instruction.
4. A deterministic parser accepts only a small versioned schema such as:
   - canonical key name;
   - scope;
   - short evidence-backed summary;
   - mechanism tags;
   - source URLs;
   - originating model/provider;
   - generated/check date.
5. Reject HTML, scripts, executable attachments, unknown top-level fields and over-size values.
6. Save accepted input to a staging area.
7. A separate research/review step checks the existing Humour Base, duplicates, evidence and copyright abstraction.
8. Only then create/update a canonical Humour Method record.
9. GitHub writes use narrowly scoped credentials and produce a commit/receipt.

This is deliberately a two-door system: **intake** may be automatic; **authority** stays narrow.

## Humour-method storage

The existing Thalia app already defines Humour Method records. A future implementation may organise them into a dedicated directory and optional index/JSON manifest once enough records exist.

Do not reduce each comedian/programme to a single opaque “vibe” number. Preserve useful mechanism dimensions, evidence and limitations. A compact \`vibes/tags\` field can coexist with the richer record for filtering/blending.

Example conceptual fields:

- key;
- aliases;
- source type;
- mechanism tags;
- timing/delivery;
- language/wordplay;
- status/social dynamics;
- emotional vector;
- failure modes;
- evidence;
- confidence;
- last checked.

## Improve itself

Possible later features:

- diff view between current app and proposed edit;
- drag-and-drop folders;
- downloadable improvement receipt;
- target history stored locally;
- optional GitHub-authenticated write mode with explicit review;
- optional link/resource checker;
- optional “why not this existing app?” explanation panel;
- compare two candidate implementations before selecting a canonical one.


## Native Ad / Advertorial Pattern mode

**Status:** ADD TO IMPROVE RESEARCH MODES

When a user supplies a competitor advertorial, product landing page or unusually visible commercial page, offer a structured pattern extraction rather than a generic critique.

Output:
1. traffic/acquisition clues;
2. landing-page architecture;
3. question/answer coverage;
4. SEO/AEO techniques worth testing;
5. conversion mechanics;
6. trust/disclosure weaknesses;
7. persuasion tactics to reject;
8. ethical Aletheia/Swindon version;
9. three smallest experiments;
10. how to measure them.

Classify every notable technique:
- REUSE ETHICALLY
- TEST
- DO NOT COPY
- UNKNOWN

This mode should call/reuse the canonical **Aletheia Site Audit → Native Ad / Advertorial Pattern** method instead of creating a second competing framework.


## Discovery / cross-pollination pass

**Status:** IMPLEMENTED IN V0.1 LAUNCHER / LIVE DEVICE VERIFY PENDING

The default-on Improve pass now asks the receiving AI to treat Swindon.org.uk and Aletheia as complementary surfaces:

- Swindon.org.uk = concise public/search front door;
- Aletheia = deeper tool, evidence, knowledge or reusable cards;
- reciprocal links where both genuinely exist;
- curated sideways topic links;
- no duplicated long-form article unless there is a deliberate canonical decision.

The pack also requests:

- primary, secondary, spoken and AI-answer query variants;
- SEO title and meta description;
- clean slug;
- direct answer and three key points where useful;
- descriptive headings;
- internal-link opportunities;
- topic-hub opportunities;
- annotated Go Deeper sources;
- measurement after publication.

Future enhancement: show cross-pollination candidates directly in the launcher UI by searching related repository page/content terms, not just including the rule/context in the generated pack.

## Felhaven architecture harvest — 1 October 2026

**Source reviewed:** public MIT-licensed `Felsyn/felhaven` repository, including Pythia, Daedalus, Kairos and contract tests.

Useful patterns to adapt rather than clone:

- **Self-describing tool modules:** each reusable capability owns its description/schema and handler.
- **Generated tool registry:** build dispatch and model-visible definitions from one declaration so they cannot drift independently.
- **Schema/handler lockstep tests:** validate declared parameters against the callable signature.
- **What + when descriptions:** tool descriptions should say both what they do and when the model/host should use them.
- **Non-vacuous contract guards:** tests should fail if discovery breaks and returns an empty registry rather than passing accidentally.
- **Dispatch-time permission enforcement:** a hidden tool is not a forbidden tool; enforce allowlists at execution.
- **Stable error vocabulary:** machine-readable error slugs, with raw exception material kept out of ordinary model/user output.
- **Verbatim result route:** exact values can bypass model rewriting.
- **Activity/rite receipts:** record tool, arguments, status, timing, safe result preview and failure code.
- **Static architecture map:** inspect declarations/imports/docstrings without importing arbitrary modules.
- **Single scheduler infrastructure:** recurring timing belongs to the host, not independently to every tool.
- **Last-known-good display state:** failed refresh can retain an older valid value only when clearly marked stale.
- **Local-model pre-warm:** optional optimisation for Ollama/local models; warm-up and live calls must share compatible runtime options.

### Proposed Aletheia direction

Treat the new root `aletheia-tool-contract.md` as a draft common seam. Trial it on a small number of existing reusable functions before making it mandatory across the estate.

Potential first pilots:
- Aletheia Assistant utility/tool calls;
- Aletheia Site Audit front-door checks;
- Aletheia Knowledge search/read;
- Aletheia Improve repository/source inspection.

Do not yet modify shared GUI/dev contracts automatically. Present each proposed shared change for human approval.
