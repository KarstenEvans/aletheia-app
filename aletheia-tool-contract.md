# Aletheia Tool Contract

**Status:** Draft v0.1  
**Date:** 1 October 2026  
**Purpose:** Common contract for self-describing, discoverable, testable Aletheia tools  
**Applies to:** Aletheia Assistant, Aletheia Improve, Aletheia Watch, Publisher, Knowledge, Site Audit, Rice Intelligence, Property Watch and future Aletheia apps  
**Design direction:** local-first, web-friendly, model-agnostic, human-controlled and portable across JavaScript and Python

Protocol references:

- Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol
- Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

Design inspiration: the public MIT-licensed **Felsyn/felhaven** project demonstrates several useful implementation patterns, particularly self-describing single-purpose tools, reflection-built registries, dispatch-time allowlists, structured failure results, tool-call receipts and source-derived architecture maps. Aletheia adopts the general architectural ideas under its own contract rather than depending on Felhaven.

---

## 1. Purpose

The Aletheia Tool Contract defines a common way for an Aletheia capability to:

1. describe itself;
2. declare when it should be used;
3. declare its inputs and outputs;
4. state its authority and side effects;
5. expose a callable implementation;
6. report controlled failures;
7. preserve provenance and freshness;
8. emit an inspectable execution receipt;
9. be discovered and validated automatically.

The governing rule is:

> **One tool, one job, one contract.**

A compatible Aletheia host should be able to discover a conforming tool, validate it, decide whether it is permitted to run, execute it and record what happened without maintaining a second hand-written description of the same capability.

---

## 2. Core principles

### 2.1 One tool, one job

Each tool performs one coherent job.

Good examples:

- `aletheia_web_search`
- `aletheia_fact_check`
- `aletheia_site_front_door_check`
- `aletheia_knowledge_search`
- `aletheia_rice_price_fetch`
- `aletheia_property_search`
- `aletheia_generate_draft`
- `aletheia_publish_post`

A larger workflow composes several tools. Do not create a single tool that researches, drafts, publishes, monitors and deletes.

### 2.2 Tool logic is separate from the GUI

The business logic must not depend on a particular panel, button or page.

Preferred shape:

```text
tool logic
    ↓
Aletheia Tool Contract
    ↓
registry + permission gate
    ↓
Assistant / app / automation / test runner / Improve
```

The same tool should be callable from more than one compatible surface without duplicating its core implementation.

### 2.3 Human authority beats model intent

A model being able to name or request an action is not authority to perform it.

Permission is checked at execution time.

Aletheia uses the existing authority ladder:

1. **READ / OBSERVE**
2. **DRAFT / PREVIEW**
3. **LOCAL / REVERSIBLE WRITE**
4. **EXTERNAL / CONSEQUENTIAL ACTION**

A tool must declare the highest level it can perform. A host may narrow that authority for a particular run.

### 2.4 Hidden is not forbidden

Omitting a tool from an AI prompt is a routing hint, not a security boundary.

The dispatcher must independently enforce the current allowlist before invoking a handler.

### 2.5 Exact data may bypass the model

Some results must not be paraphrased.

Examples:

- URLs
- ISBNs
- identifiers
- JSON/CSV
- checksums
- filenames
- calculations
- source quotations within permitted limits
- machine-readable audit output

The contract therefore supports `verbatim` output.

### 2.6 Failure is data, not a crash

A tool should return a controlled error result instead of bringing down the host.

Where appropriate, polling/display hosts may retain the last known good value and mark it stale rather than replacing it with a blank or invented result.

### 2.7 Every material run leaves a receipt

A tool invocation should be inspectable after the fact: what ran, with what authority, what it received, what it returned, how long it took, whether it used stale/cached data and what failed.

---

## 3. Canonical tool shape

A JavaScript tool may expose:

```javascript
export const ALETHEIA_TOOL = {
  // metadata
};

export async function run(input, context) {
  // implementation
}
```

A Python tool may expose:

```python
ALETHEIA_TOOL = {
    # metadata
}

def run(input, context):
    # implementation
```

The implementation language may differ. The contract is the stable seam.

---

## 4. Required metadata

A minimal definition:

```json
{
  "contract_version": "0.1",
  "name": "aletheia_weather",
  "title": "Weather",
  "version": "1.0.0",
  "description": "Returns current weather and a short forecast. Use when the user asks about current or near-term weather for a specified place.",
  "category": "information",
  "input_schema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "Town, city, postcode region or other place accepted by the configured weather provider."
      }
    },
    "required": ["location"]
  },
  "authority": {
    "level": "read_observe",
    "requires_human_approval": false
  },
  "output": {
    "mode": "structured"
  }
}
```

### 4.1 `contract_version`

Version of this contract implemented by the tool.

Hosts must not silently assume an unknown major contract version is compatible.

### 4.2 `name`

Stable machine identifier.

Rules:

- lowercase ASCII;
- snake_case;
- begin with `aletheia_`;
- normally use a verb+noun or clear capability form;
- do not change because the visible title changes.

### 4.3 `title`

Human-readable name.

### 4.4 `version`

Tool implementation version, preferably semantic versioning.

### 4.5 `description`

Must say both:

- **what the tool does**; and
- **when a host/model should use it**.

A description is routing data, not a manual. Detailed parameter guidance belongs in the parameter descriptions.

### 4.6 `category`

Suggested values include:

- `information`
- `research`
- `analysis`
- `knowledge`
- `transformation`
- `file`
- `communication`
- `publication`
- `automation`
- `system`
- `commerce`

Additional values are permitted when they improve discovery.

### 4.7 `input_schema`

JSON-Schema-like object describing model/user-supplied input.

Minimum rules:

- root type is `object`;
- `properties` exists even when empty;
- every property has a description;
- every required name exists in `properties`;
- do not expose parameters that admit only one legal value;
- schema and handler signature must agree.

### 4.8 `authority`

Required shape:

```json
{
  "level": "read_observe",
  "requires_human_approval": false
}
```

Allowed levels:

- `read_observe`
- `draft_preview`
- `local_reversible_write`
- `external_consequential_action`

For consequential tools, optional detail may include:

```json
{
  "level": "external_consequential_action",
  "requires_human_approval": true,
  "effects": ["publish"],
  "default_spend_limit_gbp": 0
}
```

No tool gains authority merely because a connector, API token or browser session exists.

### 4.9 `output`

Supported modes:

- `structured` — machine-readable result intended for a host/model;
- `verbatim` — exact material should be displayed/transferred without model rewriting;
- `narrative` — ordinary prose response;
- `mixed` — structured data plus one or more exact fields.

---

## 5. Recommended metadata

Tools should add these where useful:

```json
{
  "tags": ["weather", "forecast"],
  "dependencies": {
    "network": true,
    "services": ["Open-Meteo"],
    "local_files": [],
    "optional_services": []
  },
  "freshness": {
    "kind": "live",
    "max_age_seconds": 1800
  },
  "privacy": {
    "sends_input_off_device": true,
    "stores_input": false
  },
  "cost": {
    "class": "free",
    "may_spend_money": false
  },
  "fallback": {
    "retain_last_good": true
  }
}
```

A tool must not claim privacy, cost or freshness properties that the implementation does not actually provide.

---

## 6. Standard execution context

Hosts should pass runtime information separately from user/model input.

Example:

```json
{
  "run_id": "uuid-or-equivalent",
  "actor": "Aletheia Assistant",
  "trigger": "user",
  "allowed_tools": ["aletheia_weather"],
  "authority_ceiling": "read_observe",
  "approved": false,
  "now": "2026-10-01T06:30:00+01:00",
  "locale": "en-GB"
}
```

Secrets, credentials and private connector objects should be supplied through protected host facilities, not serialised into public prompts or logs.

---

## 7. Standard success result

A structured result should use a stable envelope when practical:

```json
{
  "ok": true,
  "data": {},
  "meta": {
    "source": [],
    "retrieved_at": "2026-10-01T06:30:00+01:00",
    "freshness": "live",
    "cached": false,
    "stale": false,
    "partial": false
  }
}
```

A simple internal tool may return a smaller object when the meaning remains unambiguous, but public/shared tools should prefer the common envelope.

---

## 8. Standard error result

Tools should not expose raw stack traces or raw exception messages to the model or user by default.

Preferred shape:

```json
{
  "ok": false,
  "error": {
    "code": "weather_unavailable",
    "message": "Weather data could not be retrieved.",
    "retryable": true
  }
}
```

Rules:

- `code` is a stable lowercase snake_case slug;
- `message` is human-readable and safe;
- raw exceptions stay in protected developer diagnostics where appropriate;
- credentials, local paths and sensitive provider responses must be scrubbed;
- callers branch on `code`, not changing prose.

---

## 9. Last-known-good and stale data

A polling/data tool may declare:

```json
"fallback": {
  "retain_last_good": true
}
```

If the current refresh fails, the host may return/display the prior valid observation only when it also carries:

- original observation time;
- failed refresh time;
- `stale: true`;
- the failure code;
- no wording that represents the old value as current.

This is particularly useful for Watch, Rice Intelligence, Property Watch and dashboard/status views.

---

## 10. Verbatim path

A `verbatim` result bypasses model rewriting.

Example:

```json
{
  "ok": true,
  "verbatim": {
    "mime": "text/plain",
    "content": "9780141187761"
  }
}
```

The host may wrap exact material with UI labels, but must not silently alter the payload.

A model may separately explain the exact output if requested.

---

## 11. Registry and discovery

Aletheia should maintain one generated registry rather than separate hand-written schema and dispatch lists.

Conceptually:

```text
tool modules
   ↓ expose ALETHEIA_TOOL + run()
registry builder
   ↓
validated tool catalogue
   ↓
Assistant / Improve / app / automation
```

The registry must derive the callable name and handler from the same module definition wherever practical.

The registry should expose enough metadata for:

- tool selection;
- permission checks;
- dependency mapping;
- documentation;
- test generation;
- Aletheia Improve architecture inspection.

---

## 12. Dispatch rules

Before execution the host must:

1. resolve the requested tool from the current registry;
2. confirm the tool is in the current run's allowlist;
3. validate input against the declared schema;
4. enforce the run's authority ceiling;
5. obtain human approval when required;
6. apply cost/spend rules;
7. invoke the handler;
8. normalise success/error output;
9. write an execution receipt;
10. never infer completion of an external effect solely from a successful request if separate verification is possible or required.

A model-generated tool name outside the allowlist is refused even if that tool exists.

---

## 13. Execution receipt

Recommended receipt:

```json
{
  "run_id": "…",
  "tool": "aletheia_weather",
  "tool_version": "1.0.0",
  "actor": "Aletheia Assistant",
  "trigger": "user",
  "authority": "read_observe",
  "approved": true,
  "started_at": "…",
  "duration_ms": 842,
  "status": "completed",
  "input_preview": {},
  "result_preview": {},
  "error_code": null,
  "cached": false,
  "stale": false,
  "verified_external_effect": null
}
```

Receipt status should distinguish where relevant:

- `attempted`
- `completed`
- `verified`
- `failed`
- `refused`
- `cancelled`

Large previews should be capped. Secrets must be redacted.

---

## 14. Contract tests

A shared Aletheia tool test harness should inspect the registry rather than rely on a hard-coded list of tools.

Minimum automated checks:

1. registry is non-empty when tools are expected;
2. every tool has required metadata;
3. tool names follow the naming rule;
4. every advertised tool has exactly one callable handler;
5. no handler is unreachable from the registry;
6. every input property has a description;
7. every required input exists;
8. schema parameters and handler arguments agree;
9. descriptions state what the tool does and when to use it;
10. no parameter carries a meaningless single permitted value;
11. authority metadata is valid;
12. consequential tools require the appropriate approval declaration;
13. error codes use stable snake_case identifiers;
14. raw caught exception text is not returned through the ordinary model/user channel;
15. `verbatim` payloads remain byte/text exact through the host path;
16. allowlists are enforced at dispatch;
17. any exception/temporary allowlist has a test that fails once the exemption becomes stale;
18. the guard itself has a non-vacuous test so an empty/broken registry cannot pass everything accidentally.

---

## 15. Dependency and architecture map

Aletheia Improve should be able to construct an architecture map without executing untrusted modules where practical.

For source-based projects, prefer static inspection of:

- tool declarations;
- imports;
- manifests;
- page specs;
- local links;
- configuration;
- data files;
- tests;
- resources.

Conceptual view:

```text
APP
 ├─ TOOL
 │   ├─ INPUTS
 │   ├─ AUTHORITY
 │   ├─ DEPENDENCIES
 │   ├─ DATA SOURCES
 │   └─ TESTS
 ├─ KNOWLEDGE
 ├─ CONFIG
 ├─ RESOURCE PAGE
 └─ OUTPUTS
```

Improve can then flag:

- orphaned tools;
- duplicate capabilities;
- registry/handler drift;
- undeclared side effects;
- missing tests;
- missing fallback;
- missing resource/page specification;
- stale source dependencies;
- undocumented cross-app coupling.

Static inspection must not import or execute arbitrary repository modules merely to discover their metadata.

---

## 16. Scheduler separation

Recurring refresh scheduling is host infrastructure, not the job of each tool.

A tool says **what one run does**.

A scheduler says **when it runs**.

This avoids every tool inventing its own timers, retry loops and background state.

---

## 17. Model-local optimisation

Local model hosts may optionally pre-warm the model and stable tool/system prefix.

If they do:

- warm-up and real calls must use compatible runtime options;
- model residency settings must be explicit;
- failure to warm must not prevent the app from starting;
- cloud/local provider choice remains an adapter, not canonical project state.

This is an optimisation, not a contract requirement.

---

## 18. Tool overrides

A host may temporarily substitute a handler for a registered tool while retaining the same visible schema, but only for a narrow, documented run.

Use cases include:

- tests/mocks;
- caller-specific preconditions;
- dry-run/preview implementations.

An override must not mutate the global registry or silently increase authority.

---

## 19. Aletheia Improve integration

When Improve audits a target that implements tools, it should add a **Tool Contract Pass**:

1. discover tool declarations;
2. build the current registry;
3. compare schema with handlers;
4. map dependencies and callers;
5. check authority;
6. check error/output conventions;
7. inspect tests and fallbacks;
8. identify duplicated jobs;
9. propose the smallest correction;
10. separate **record-only recommendations** from **implementation changes requiring approval**.

Improve must not recursively improve itself without a bound. A self-targeted Improve run is one pass only unless the user explicitly requests another pass.

---

## 20. Example: research then publish

Do not make one `research_and_publish` tool.

Prefer:

```text
aletheia_web_search        READ
        ↓
aletheia_fact_check        READ
        ↓
aletheia_generate_draft    DRAFT
        ↓
human review
        ↓
aletheia_publish_post      EXTERNAL ACTION + APPROVAL
```

This makes the approval boundary visible and prevents research capability from quietly acquiring publication authority.

---

## 21. Migration path

Existing Aletheia apps do not need to be rewritten at once.

Adopt incrementally:

### Phase 1
Use the contract for new reusable tools.

### Phase 2
Wrap existing reusable functions without changing their GUIs.

### Phase 3
Build a generated registry and contract test harness.

### Phase 4
Allow Aletheia Assistant to discover conforming tools.

### Phase 5
Teach Aletheia Improve to map and audit the registry.

### Phase 6
Only after testing, consider shared scheduling/automation around suitable tools.

The contract should reduce duplication, not create a migration project larger than the apps it is meant to simplify.

---

## 22. Non-goals

This contract does not require:

- one programming language;
- one AI provider;
- cloud hosting;
- a database;
- MCP;
- a specific GUI;
- autonomous execution;
- converting every HTML app into a tool.

A useful standalone app may remain a standalone app.

---

## 23. Acceptance checklist

A new shared tool is ready when:

- [ ] it has one clear job;
- [ ] it exposes the current contract version;
- [ ] its description says what + when;
- [ ] input schema matches the handler;
- [ ] authority level is explicit;
- [ ] permission is enforced at dispatch;
- [ ] failure returns a controlled code;
- [ ] sensitive raw exception material is not leaked;
- [ ] exact outputs use verbatim mode when appropriate;
- [ ] freshness/cache/stale status is honest;
- [ ] a receipt can be produced;
- [ ] contract tests cover it automatically;
- [ ] Aletheia Improve can discover/map it without executing untrusted code;
- [ ] human approval remains explicit for consequential actions;
- [ ] Aletheia and Thalia references remain present in generated handoff/output templates where the shared repository contract requires them.

---

## 24. Change policy

Changes to this file are architecture changes.

Before making this contract mandatory across all existing apps:

1. trial it on a small set of tools;
2. record friction and exceptions;
3. update the contract rather than creating app-specific forks;
4. obtain human approval before adding new mandatory GUI/dev-wide behaviour;
5. version breaking changes explicitly.

