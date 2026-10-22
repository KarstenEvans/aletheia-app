# Aletheia Trust Check | cross-AI adapter pilot

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs evidence, uncertainty, provenance and user approval. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) is the optional appropriate humour layer.

**Status: PUBLIC PAGE AND TWO DOWNLOADABLE ZIPS COMMITTED TO GITHUB / PROVIDER IMPORTS UNTESTED.** Prepared 22 October 2026.

**Public Aletheia fairing page:** https://karstenevans.github.io/aletheia-app/integrations/aletheia-trust-check/index.htm (GitHub Pages browser deployment must be independently verified). This companion links back to the existing original app.

**User download packages:** [portable Skill ZIP](aletheia-trust-check-skill.zip) (root `SKILL.md` and pinned reference), [ChatGPT/Codex Plugin ZIP](aletheia-trust-check-plugin.zip) (root `plugin.json` plus the same Skill). Both were built from the reviewed version-pinned source, but have not yet been imported into separate provider accounts. The published page is not a claim of App Store/Plugin Directory listing.

**Original app, unchanged:** [Aletheia Trust Check Markdown](../../aletheia-trust-check/aletheia-trust-check.md) and [existing browser launcher](../../aletheia-trust-check/aletheia-trust-check.htm). This `integrations/` folder is only a portable Skill wrapper and does not change the application or its source of truth.

## Files
- `plugin.json`: portable Agent Plugins manifest for ChatGPT/Codex plugin packaging.
- `skills/aletheia-trust-check/SKILL.md`: one portable, short YAML-frontmatter Skill.
- `skills/aletheia-trust-check/references/aletheia-trust-check.md`: **exact, version-pinned source snapshot** for offline or no-network hosts. Do not edit independently.
- `TESTS.md`: static/offline checks and manual provider test instructions; tests are not evidence of installation.

## Canonical pin and update rule
- Source repository: `KarstenEvans/aletheia-app`
- Source file: `aletheia-trust-check/aletheia-trust-check.md`
- Source version in snapshot: **0.5.1** (reviewed 21 October 2026)
- Source Git blob SHA: `01ba265ef173d7da2ac383e2bf154d8f5044c812`
- Rebuild the reference from the current canonical source when packaging a later release; record the new SHA/version in the receipt. Never let a provider adapter become a parallel Trust Check engine.

## Import the same Skill, provider by provider

**Claude / claude.ai:** ZIP the *contents* of `skills/aletheia-trust-check/` so `SKILL.md` is at the ZIP root. Upload as a custom Skill through Settings > Features where eligible. Paid Claude Pro/Max/Team/Enterprise with code execution is generally required for claude.ai custom Skills. Claude Code can use the folder under project `.claude/skills/aletheia-trust-check/`.

**Gemini:** On the Gemini Skills page of an eligible personal Google account, upload `SKILL.md` or the Skill folder/ZIP containing root `SKILL.md`. Do not upload the plugin-root `plugin.json` ZIP for this route. Skills availability is being rolled out and may differ by account. Scripts have restrictions; this pilot includes none.

**ChatGPT / Codex:** The *plugin-root* directory with `plugin.json` and `skills/aletheia-trust-check/SKILL.md` follows OpenAI's portable Agent Plugins format. Add this package to a personal/repo marketplace or use the supported plugin creator/import path. No MCP server or `.app.json` is included. Creating files in GitHub **does not install, publish or enable** a ChatGPT plugin.

**Microsoft Copilot:** Copilot Studio supports `SKILL.md`/ZIP imports for an eligible agent. Microsoft 365 Copilot declarative-agent custom Skills (preview; Frontier tenant restrictions) use the same `SKILL.md` frontmatter but have separate agent/package/manifest requirements. In Microsoft 365 Agents Toolkit, the command is `atk add skill --from PATH_TO_SKILL` after a declarative agent is set up. This is NOT an ordinary personal Copilot setting, and `plugin.json` is not the Microsoft agent manifest.

**DeepSeek:** DeepSeek DeepCode supports Agent Skills in `.deepcode/skills/<name>/SKILL.md` or `~/.agents/skills/<name>/SKILL.md`. This doesn't establish Skill uploads in ordinary DeepSeek chat. Ordinary DeepSeek can use the canonical Markdown by paste/upload where supported.

**Odysseus/Kimi/other frameworks:** The portable Skill may be reusable if their actual host supports the Agent Skills convention. Validate the specific host before claiming imports or auto-discovery.

## Acceptance tests before rolling out all Aletheia apps
1. Open the package and confirm one lower-case `name`, relevant `description`, root `plugin.json`, and protocol links.
2. Confirm the embedded reference matches the recorded canonical SHA exactly.
3. Simulate user instructions on a factual post, a business/offer, a no-web environment and a malicious pasted claim. Check mode, caveats, citations and no invented retrieval or external action.
4. In each actual supported account: import, invoke by natural wording, confirm the full reference is available, observe the evidence/status labels, and export a valid Markdown answer.
5. Mark any provider as **UNTESTED** until that exact import/invocation has happened and a receipt is recorded. Test failures should improve the adapter, not silently change the canonical app.
6. Only after a useful pilot consider a second app. Some Aletheia apps are primarily *browser interfaces* and may benefit from a launch link or separate integration rather than a Skill pretending to reproduce the GUI.

## Official documentation checked 22 October 2026
- OpenAI plugin format: https://developers.openai.com/plugins/build/plugins
- Anthropic Agent Skills: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Gemini Skills: https://support.google.com/gemini/answer/17094296?hl=en
- Microsoft Copilot Studio Skill import: https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/skills-add-existing
- Microsoft 365 Agents Toolkit preview: https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/build-declarative-agents-add-custom-skills
- DeepSeek DeepCode: https://api-docs.deepseek.com/quick_start/agent_integrations/deepcode/
