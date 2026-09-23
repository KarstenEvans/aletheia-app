# Aletheia AI Easy - Provider Installation Guide

> Originally checked against provider documentation on 15 September 2026; ChatGPT rechecked on 23 September 2026. Other adapters require their own recheck before publishing new screenshots. Interfaces change. Recheck the linked provider help page before publishing screenshots or exact button labels.

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
