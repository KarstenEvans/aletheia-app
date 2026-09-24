# Aletheia AI Easy - Provider Installation Guide

> Originally checked against provider documentation on 15 September 2026; ChatGPT rechecked on 23 September 2026; Claude, DeepSeek, Kimi, Manus, Grok and Odysseus routes rechecked on 24 September 2026. Interfaces change. Recheck the linked provider help page before publishing screenshots or exact button labels.

## The simple rule

Keep two portable files:

- `aletheia-bootstrap.md` - the small rules/loader.
- `aletheia-memory.md` - the user's optional, inspectable context.

The bootstrap is stable. The memory file belongs to the user and changes only with their approval.

## ChatGPT (Free-first; rechecked 23 September 2026)

**Do not ask a Free user to create a new GPT.** Free users can use existing GPTs but cannot create/publish new ones on personal ChatGPT accounts. Instead, use Custom Instructions for universal preferences and a Project for long-lived Aletheia context.

**Step 1: inspect privacy before supplying personal context.**

Open Settings > Data controls and review Improve the model for everyone. Turning it off prevents eligible new conversations being used for model improvement but does not erase chat history. Open Settings > Personalization > Memory separately and review the summary if available. A personalised Temporary Chat may still use existing memories without creating new ones, so choose its initial personalisation setting deliberately.

**Step 2: add a short global preference, if wanted.**

On web/desktop use Settings > Personalization; on mobile use Settings > Customize ChatGPT. Enable customization. Free/Go accounts currently allow **1,500 characters** in Custom Instructions. The local `aletheia-setup.htm` now provides a concise editable profile with a live character counter and copy button. Do not paste the entire `aletheia-bootstrap.md` into this smaller global field. Avoid storing secrets or private case details in global instructions because relevant details may be passed to a connected plugin when used.

**Step 3: create a Project called Aletheia.**

Projects are available on Free and can be created without an additional subscription. Free currently allows **five files per Project**, with separate upload-rate limits. Add the compact/full approved bootstrap rules in **Project settings > Project instructions** (not the smaller global field). Project instructions override global Custom Instructions while inside that Project.

**Step 4: add optional portable memory and choose memory scope.**

Create a reviewed `aletheia-memory.md` locally and upload it only if wanted. In Project settings, choose Default or Project-only memory where available. Project-only limits references to that Project's context; shared Projects always use Project-only memory and expose shared chats, files and instructions to collaborators. Free owners can currently invite up to five collaborators. Review all files and permissions before sharing. The portable file remains the user's approved source of truth; don't tell the user a generated draft was already saved.

**Step 5: work normally and checkpoint before switching provider.**

Ask an ordinary question or use `CHECKPOINT`, `HANDOVER` and `SAVE MEMORY` as needed. On Free, normal chat is generally unlimited subject to abuse safeguards; tool quotas for uploads, images, analysis and Voice are separate. The service currently includes 500 MB of Library storage and access to existing GPTs. Project files, chat attachments and Library files are not automatically interchangeable.

For spoken input, use Live Voice for conversation. Live can web-search and use memory, but its transcript is not verbatim and it cannot currently retrieve files directly from ChatGPT Library. For exact research, tables or reusable writing, editable Dictation into the ordinary text composer is often more convenient. Under Settings > Voice, Live/Advanced/Standard availability varies by account and device.

**Read the beginner-facing companion:** https://karstenevans.github.io/aletheia-knowledge/resources/aletheia-chatgpt-free-guide.htm

Official references (rechecked for this adapter):

- https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq
- https://help.openai.com/en/articles/20001274
- https://help.openai.com/en/articles/12168547
- https://help.openai.com/en/articles/8096356
- https://help.openai.com/en/articles/8590148
- https://help.openai.com/en/articles/10169521
- https://help.openai.com/en/articles/9237897
- https://help.openai.com/en/articles/7730893

## Google Gemini

There are two sensible routes.

### Ordinary Gemini

Use **Settings -> Personal Intelligence -> Instructions for Gemini** and add the compact Aletheia bootstrap. Google says these account-level instructions apply to ordinary Gemini chats but are not available inside Gems.

### Aletheia Gem

Create a Gem for a dedicated Aletheia workspace. Put the bootstrap behaviour in the Gem instructions and add `aletheia-memory.md` as Knowledge. Do not claim that ordinary Gemini's global Instructions automatically carry into a Gem.

Official references:

- https://support.google.com/gemini/answer/16598625
- https://support.google.com/gemini/answer/15236405

Gemini Skills may later be a useful adapter, but they are not the minimum baseline because availability is more limited than ordinary Gemini/Gems.

## Claude (rechecked 24 September 2026)

### Ordinary Claude / Projects

Projects are currently available to all Claude users, including Free users; Anthropic's current help states Free users can create up to five Projects.

Recommended Aletheia route:

1. Create a Project for the defined body of work.
2. Put the compact Aletheia bootstrap in Project instructions.
3. Add the reviewed `aletheia-memory.md` or project state to Project knowledge when exact portable context is useful.
4. Keep canonical project decisions/checkpoints in files rather than assuming provider memory is complete.
5. Review Settings > Memory separately if you want Claude's own cross-chat memory.

Anthropic's current release notes say memory is on by default for Free, Pro and Max, with remembered Topics visible/editable under Settings > Memory; sensitive-topic memory has a separate opt-in control. This provider memory is convenience, not the Aletheia ledger.

### Claude Code

For a code repository, use a short root `CLAUDE.md` as a router to the real project documentation, in the same spirit as Aletheia's root `AGENTS.md`.

Do not copy the whole protocol into `CLAUDE.md`. Point it to the repository's actual specification, build/test commands, conventions and approval boundaries. Anthropic itself describes `CLAUDE.md` as a project briefing that Claude Code reads automatically.

### Longer and recurring tasks

Paid Claude plans can run scheduled tasks. Current Claude/Cowork Projects can carry their own instructions, context, memory and scheduled work. Keep recurring actions read/draft-first unless external action is explicitly authorised.

Official references:

- https://support.claude.com/en/articles/9517075-what-are-projects
- https://support.claude.com/en/articles/12138966-release-notes
- https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts
- https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork

## Microsoft Copilot

**Universal route:** Microsoft Copilot can upload `.md` files in a chat. Add `aletheia-bootstrap.md` and `aletheia-memory.md`, then type `START` or ask the task.

**If Copilot Notebooks is available on the user's account:** add the files as notebook references and place the compact Aletheia rules in Notebook instructions. Notebook availability depends on Microsoft licensing/service plans, so Aletheia AI Easy must not make Notebooks mandatory.

Official references:

- https://support.microsoft.com/en-us/microsoft-copilot/file-upload-in-microsoft-copilot
- https://support.microsoft.com/en-gb/microsoft-365-copilot/provide-custom-instructions-for-your-microsoft-365-copilot-notebook

## DeepSeek (rechecked 24 September 2026)

Do not claim persistent consumer custom instructions or personal memory unless the user's current DeepSeek interface actually exposes them.

### Consumer/chat baseline

For a fresh chat, supply only the relevant Aletheia bootstrap/state needed for the task. Keep the portable memory file minimal and review DeepSeek's current privacy terms before supplying sensitive personal material.

### API / independent harness

DeepSeek's current Chat/Responses APIs are explicitly stateless. The client must send the necessary history/context again for each request.

That makes the Aletheia pattern straightforward:

1. stable compact bootstrap/system context;
2. relevant user/project state;
3. current task;
4. tool results;
5. checkpoint/compaction summary when history grows.

DeepSeek supports tool/function calling, but the model requests the call; the surrounding host/harness executes the real function. Therefore permission belongs to Odysseus, the app or other host, not to the model merely because it can name a tool.

DeepSeek's automatic context caching can reduce repeated-prefix cost. Caching is not persistent project memory.

Official references:

- https://api-docs.deepseek.com/guides/multi_round_chat
- https://api-docs.deepseek.com/api/create-response/
- https://api-docs.deepseek.com/guides/tool_calls/
- https://api-docs.deepseek.com/updates/

## Kimi / Moonshot AI (checked 24 September 2026)

Kimi currently exposes several distinct surfaces: Chat, Search, Memory Space, Agent, Kimi Work and Kimi Code.

### Easiest personal setup

1. Use ordinary Chat for conversation/files.
2. Use Search when current web information matters.
3. Use Memory Space only for preferences you deliberately want Kimi to retain.
4. Keep `aletheia-memory.md` / CHECKPOINT as the inspectable portable source when exact project state matters.
5. Use Agent only for a task that genuinely needs autonomous execution.

### Kimi Work

Kimi Work is a local Mac/Windows agent. It can use Skills, projects, browser WebBridge, local files and scheduled tasks.

Its permission levels range from routine auto-operation through manual approval to fully automatic mode. Aletheia should prefer the narrowest level needed. Fully automatic local file operation can overwrite/delete or otherwise damage data, so do not treat it as the default.

Kimi Work's local scheduled tasks run only while the desktop client is open. Kimi's cloud-created tasks do not have that same local requirement.

### Kimi Code

Kimi Code is the coding-agent route. It supports repository `AGENTS.md`, Skills (`SKILL.md`), MCP and custom Markdown-defined agents. Aletheia's small root `AGENTS.md` is therefore directly useful.

Sub-agents have separate context windows and consume their own model tokens, so use parallel agents for genuinely independent work rather than by default.

Official references:

- https://www.kimi.com/en/help/new-user-guide/overview
- https://www.kimi.com/en/help/kimi-work/overview
- https://www.kimi.com/en/help/kimi-work/kimi-work-faq
- https://www.kimi.com/en/help/plugins-and-skills/use-skills-in-code
- https://www.kimi.com/code/docs/en/kimi-code-cli/customization/agents

## Manus (checked 24 September 2026)

### Recommended Aletheia route: Manus Project

A Manus Project has reusable instructions and knowledge across sessions.

1. Create a Project for the defined task/domain.
2. Put the compact Aletheia bootstrap in the Project instruction.
3. Add reviewed project state/knowledge files.
4. Add only the connectors/Skills the workflow needs.
5. Review any Project-proposed updates before accepting them.

Manus now allows Projects to propose learned changes to instructions, files or Skills, with user approval. That matches Aletheia's propose-before-accept pattern.

### Chat versus Agent

Use **Chat** for answers, search, file discussion and planning when autonomous execution is unnecessary. Current Manus help says Chat mode does not consume Manus credits.

Use **Agent** when you need the sandbox/browser/code/file workflow. Agent work consumes credits based on model tokens, virtual machines and third-party APIs, so long tasks should be staged/checkpointed rather than designed as one fragile marathon.

### Skills and schedules

Manus Skills use `SKILL.md` plus optional scripts/references/templates and can be imported from packages or public GitHub repositories. Review a Skill before enabling executable resources.

Scheduled Tasks can run inside a task, Project or Manus-built web app and reuse that location's instructions/files/results. This is promising for a future Aletheia Watch baseline-and-change workflow.

Official references:

- https://manus.im/en/blog/manus-projects
- https://help.manus.im/en/articles/11711128-what-are-the-differences-between-chat-mode-and-agent-mode
- https://help.manus.im/en/articles/11711097-what-are-the-rules-for-credits-consumption-and-how-can-i-obtain-them
- https://help.manus.im/en/articles/14753565-how-to-share-and-use-skills-in-manus
- https://manus.im/blog/manus-schedules

## Grok / SpaceXAI (checked 24 September 2026)

Current Grok has more than chat: Grok Build, Skills, Automations, connectors/MCP and project memory.

### Simple Aletheia setup

For ordinary Grok, keep the portable Aletheia bootstrap/state available to the conversation. Use a custom Skill for reusable Aletheia workflow instructions if that is more convenient than repeating them.

### Grok Build

For coding/app work, Grok Build has persistent project memory for conventions, decisions and facts. Treat that as working memory, not the only canonical project record.

### Skills

Grok Skills persist expertise/workflow rules across conversations and include a Skill Creator. Adapt Aletheia workflow meaning rather than assuming another provider's exact Skill package format is directly compatible.

### Automations

Grok Automations can run a saved job on a schedule or on an email trigger, with files/connectors/Skills as context. For Aletheia, prepare/draft/monitor first and keep consequential send/purchase/delete/publish actions behind explicit authority.

Official references:

- https://x.ai/news/grok-skills
- https://x.ai/news/grok-automations
- https://x.ai/build/changelog
- https://x.ai/news/grok-build-memory
- https://docs.x.ai/grok/connectors

## Odysseus (optional self-hosted orchestration; checked 24 September 2026)

Odysseus is not another consumer AI provider in the same sense as ChatGPT or Claude. It is a self-hosted workspace/harness that can connect local and hosted models.

Current project documentation describes:

- chat and agents;
- local/API models including OpenAI, Anthropic and Gemini-compatible routes;
- MCP, files, shell, Skills and memory;
- deep research and model comparison;
- documents;
- IMAP/SMTP email;
- notes/tasks/calendar and scheduled agent tasks.

Aletheia should sit **above** Odysseus as the portable evidence/state/authority layer. Odysseus can be the capability/orchestration layer.

Current Odysseus source confirms a `SKILL.md` registry/import route and migration tooling for Skills, memory and archive material. Automatic repo-local `AGENTS.md` / `CLAUDE.md` context loading appears upstream as a proposal, so do not tell a user that Odysseus requires or automatically reads Aletheia's root `AGENTS.md` unless their installed version actually supports it. The new Aletheia root `AGENTS.md` remains useful for Codex/Kimi and as a human-readable repository router.

Do not assume that an API call through Odysseus inherits consumer-account memory such as Gemini Personal Intelligence or ChatGPT memory. Supply required Aletheia state explicitly and connect private systems deliberately.

Because Odysseus can expose powerful local tools, keep authentication enabled, private data out of Git and raw model/service ports off the public internet.

Project reference:

- https://github.com/odysseus-dev/odysseus
- https://github.com/odysseus-dev/odysseus/blob/dev/docs/agent-migration.md

## Other capable AIs

Use this capability ladder:

1. Persistent project + instructions + files: use all three.
2. Persistent instructions but no project files: use instructions plus paste/upload memory when needed.
3. File upload but no persistent instructions: upload bootstrap + memory per fresh chat.
4. Plain text only: paste the bootstrap first, then paste only the relevant memory section.
5. Local/API system prompt: inject bootstrap as system context and memory as user-controlled state.

Never pretend a weaker level is a stronger one.

## Storage location

**Recommended permanent location:** a user-created `Aletheia` folder in Documents, not the Downloads folder.

Examples:

- Windows: `Documents\Aletheia\`
- macOS: `~/Documents/Aletheia/`
- Linux: `~/Documents/Aletheia/`
- Android/iPhone/iPad: a user-chosen `Aletheia` folder in the device Files app or preferred cloud drive.

Downloads is a useful temporary landing place because browsers naturally save there, but it is a poor long-term source of truth: it becomes cluttered, files get duplicated, and some devices/cleanup tools treat it as disposable.

The browser setup page must never silently choose a path. It should offer a Save button, let the user choose, and fall back to a normal download when the browser cannot use a file picker.
