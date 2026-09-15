# Aletheia AI Easy - Provider Installation Guide

> Checked against public provider documentation on 15 September 2026. Interfaces change. Recheck the linked provider help page before publishing screenshots or exact button labels.

## The simple rule

Keep two portable files:

- `aletheia-bootstrap.md` - the small rules/loader.
- `aletheia-memory.md` - the user's optional, inspectable context.

The bootstrap is stable. The memory file belongs to the user and changes only with their approval.

## ChatGPT

**Recommended baseline:** create a ChatGPT Project called `Aletheia` (or another name the user chooses), put the compact bootstrap rules into Project instructions, and add `aletheia-memory.md` as a project file. ChatGPT Projects are currently available on free and paid plans. OpenAI currently lists a five-file-per-project allowance for Free accounts.

Do not design the main route around creating a new custom GPT. OpenAI currently says new GPT creation/publishing is not available on personal Free, Go, Plus or Pro accounts and is planning a transition from GPTs toward Plugins.

Official references:

- https://help.openai.com/en/articles/10169521
- https://help.openai.com/en/articles/8555545
- https://help.openai.com/en/articles/8554407

**Five-minute path:**

1. In ChatGPT, create a Project.
2. Open Project instructions and paste the compact Aletheia bootstrap instructions.
3. Add `aletheia-memory.md` to the Project if the user wants portable memory.
4. Start a normal chat in the Project and type `START` or ask a normal question.
5. Use `SAVE MEMORY`, `CHECKPOINT` or `HANDOVER` when an inspectable portable update is needed.

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

## Claude

**Recommended baseline:** create a Claude Project. Projects are currently available to all users, including Free users, with a maximum of five projects on Free according to Anthropic's current help page.

1. Create a Project.
2. Set project instructions to the compact Aletheia bootstrap.
3. Add `aletheia-memory.md` to Project knowledge.
4. Start chats inside the Project.

Claude also has account-wide **Instructions for Claude**. A very short universal Aletheia preference can live there, while project-specific memory belongs in project knowledge.

Important: Anthropic states that chat context is not automatically shared between chats in a project unless the information is in project knowledge. That makes the portable memory file useful rather than redundant.

Official references:

- https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects
- https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features

## Microsoft Copilot

**Universal route:** Microsoft Copilot can upload `.md` files in a chat. Add `aletheia-bootstrap.md` and `aletheia-memory.md`, then type `START` or ask the task.

**If Copilot Notebooks is available on the user's account:** add the files as notebook references and place the compact Aletheia rules in Notebook instructions. Notebook availability depends on Microsoft licensing/service plans, so Aletheia AI Easy must not make Notebooks mandatory.

Official references:

- https://support.microsoft.com/en-us/microsoft-copilot/file-upload-in-microsoft-copilot
- https://support.microsoft.com/en-gb/microsoft-365-copilot/provide-custom-instructions-for-your-microsoft-365-copilot-notebook

## DeepSeek

Do not claim persistent custom instructions or memory unless the user can actually see that feature in their current DeepSeek interface.

**Web/chat baseline:** start a new chat by supplying/pasting the bootstrap and the current `aletheia-memory.md` when file/text input is available. If there is no persistent project/instruction feature, repeat this when a fresh chat needs the context.

**API/local wrapper:** inject the bootstrap as a system/instructions message and send the needed memory/context with each request. DeepSeek's current API documentation explicitly describes its chat/response APIs as stateless.

Official references:

- https://api-docs.deepseek.com/guides/multi_round_chat
- https://api-docs.deepseek.com/api/create-chat-completion/
- https://api-docs.deepseek.com/api/create-response/

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
