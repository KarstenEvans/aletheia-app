# Aletheia AI Easy - User Guide

## What this is

Aletheia AI Easy gives the AI you already use a small set of portable rules plus an optional memory file you can inspect yourself.

It is designed to be:

- free-first;
- portable between AI providers;
- user-controlled;
- useful without a server/database;
- honest about what an AI can and cannot remember.

You do **not** need to take a course. Setup should take roughly five minutes once the files are ready.

## What you need

Keep these files together:

1. `aletheia-bootstrap.md` - the small Aletheia loader/rules.
2. `aletheia-memory.md` - your optional personal context, created by the setup page.
3. `aletheia-setup.htm` - optional local form that creates your memory file.
4. `provider-installation.md` - exact platform choices and current limitations.

## Step 1 - Make an Aletheia folder

Recommended:

**Windows**  
`Documents\Aletheia\`

**Mac/Linux**  
`~/Documents/Aletheia/`

**Phone/tablet**  
Create an `Aletheia` folder in the Files app or your preferred cloud drive.

Your browser may first save the files to Downloads. That is fine as a landing place, but move the important files into your Aletheia folder so you do not end up with `aletheia-memory (7).md` archaeology later.

## Step 2 - Create your optional memory

Open `aletheia-setup.htm` in your browser.

The page works locally. It does not need to send your answers to a server. Fill in as much or as little as you want. For location, a town/city/region is normally enough.

Choose **Generate memory**, review the text, then choose **Save aletheia-memory.md**. Your browser will either let you choose the location or download the file for you to move into your Aletheia folder.

Skip anything you do not want to store. Never put passwords, security codes, API keys or recovery keys in the memory file.

## Step 3 - Choose the AI you already use

### ChatGPT Free

The local `aletheia-setup.htm` now includes a **ChatGPT Free quick setup**, with an editable, copyable short profile and a live 1,500-character counter.

1. Review Settings > Data controls (training preferences) and Settings > Personalization > Memory separately. Do not confuse either with deleting your old chats.
2. On web/desktop find Settings > Personalization; on mobile find Customize ChatGPT. Enable customization and paste the short profile, adjusting it to your preferences. Free/Go currently allow **1,500 characters** of Custom Instructions.
3. Create a Project, add the full relevant Aletheia bootstrap in Project instructions, and optionally upload the reviewed `aletheia-memory.md` (Free currently supports up to **five files per Project**). Project instructions override global Custom Instructions while inside that Project. Where available, choose its Default or Project-only memory deliberately.
4. Before sharing a Project, inspect included files, chats and instructions. Shared Projects expose that context to collaborators and use Project-only memory.

**Voice tip:** Live Voice is helpful for spoken brainstorming and can search the web, but for detailed research, tables or reusable writing, dictate into the normal text composer and check the transcription before sending. The full beginner guide explains Live, Standard, Advanced, Dictation and audio privacy.

**Full free-user guide:** https://karstenevans.github.io/aletheia-knowledge/resources/aletheia-chatgpt-free-guide.htm

If the short profile field is absent or your plan has different limits, start a normal chat and paste only the relevant instructions. Never pretend Project files are automatically loaded into unrelated ordinary chats.

### Gemini

For ordinary Gemini, put the compact rules in **Instructions for Gemini**. For a dedicated Gem, put the bootstrap in the Gem instructions and add your memory as Knowledge.

### Claude

Create a Project, put the bootstrap in Project instructions and add the memory file to Project knowledge. A short universal preference can also go in Instructions for Claude.

### Copilot

Upload the Markdown files into the conversation. If your account has Copilot Notebooks, use notebook instructions plus the files as references.

### DeepSeek

Use the bootstrap and relevant memory/state at the start of a fresh chat unless your current consumer interface genuinely provides persistent instructions/files. DeepSeek's API is stateless, so an API/Odysseus/local wrapper must send the required context again. Tool calls are executed by the surrounding host, not by the model simply because it requested one.

### Kimi

Kimi's ordinary product now separates Chat, Search, Memory Space and Agent. Keep approved preferences in Memory Space only when useful, keep portable state inspectable in Aletheia files, and move to Agent mode only when the task needs autonomous work.

For local work, Kimi Work can use local files, browser WebBridge, Skills and schedules with explicit permission levels. Kimi Code can read repository `AGENTS.md`, use `SKILL.md` Skills and connect MCP tools.

### Manus

Create a Manus Project for continuing work, put the compact Aletheia instruction in the Project and add only relevant knowledge/connectors. Use Chat when discussion/search is enough; use Agent for execution-shaped jobs.

Manus Agent consumes credits based on actual execution resources, so checkpoint long jobs. Manus Skills and Scheduled Tasks are useful future adapters for repeatable Aletheia workflows.

### Grok

Use ordinary Grok plus a compact Aletheia Skill/state for conversation. Grok Build is the coding/app surface; Skills provide persistent reusable workflows; Automations can run schedules or email-triggered jobs.

Keep project memory as convenient provider state, not the sole Aletheia ledger.

### Odysseus

Odysseus is an optional self-hosted orchestration workspace rather than a required AI provider. It can combine hosted/local models with MCP, files, shell, Skills, memory, research, email and scheduled agent tasks.

Aletheia remains the evidence/state/authority layer. Odysseus may decide which model/tool does the work, but it must receive the required project state and permissions explicitly.

For exact details and official/current links, open `provider-installation.md`.

## Step 4 - Start normally

You do not have to talk to Aletheia in commands. Ask a normal question.

Useful commands when you want them:

- `APPS` - show available/selected Aletheia apps.
- `REMEMBER` - show the small set of current context worth carrying forward.
- `CORRECT: ...` - explicitly correct an important item.
- `CHECKPOINT` - create a compact recovery point.
- `HANDOVER` - make a portable summary for another AI.
- `SAVE MEMORY` - produce a complete updated memory file for you to review/save.

## Step 5 - Choose apps, never inherit them by surprise

Aletheia may suggest an app when it is clearly relevant, but it should not silently turn every tool on.

Examples:

- Search / Trust Check
- Local / A2Z
- Employment
- Site Audit
- Shop Price
- Privacy / Aletheia 007
- Chess
- Avatar

You remain the switchboard operator.

## Updating your memory

An AI may propose an updated `aletheia-memory.md`. Read it before saving. Aletheia must not say it saved the file if it only displayed text.

Keep only information that will genuinely help later. Your memory file is a notebook, not a loft full of every cardboard box you ever owned.

## Moving to another AI

1. Ask the current AI for `HANDOVER` if the project is substantial.
2. Open the other AI.
3. Supply the bootstrap, memory and the handover if needed.
4. Ask the new AI to state what it actually received and what it cannot know.
5. Continue.

That is the portability test.

## Privacy rules

- Use coarse location by default.
- Do not store secrets.
- Do not assume provider memory is authoritative.
- Do not put sensitive data into public GitHub repositories.
- New optional apps and material persistent memory changes require your approval.

## If something does not work

Interfaces change. If a provider no longer has the button described in the guide, do not force it. Use the simplest fallback: upload/paste the bootstrap and memory into the chat, then continue.

The Aletheia design should survive a provider changing its menus.
