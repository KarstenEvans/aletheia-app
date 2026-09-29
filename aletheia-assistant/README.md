# Aletheia Assistant (Sif)

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol): evidence, provenance and uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md): optional positivity-first humour. Every Markdown output from this app includes both references near its beginning.

**Status:** v0.2, 29 September 2026. [Open the optional Sif interface](https://karstenevans.github.io/aletheia-app/aletheia-assistant/aletheia-assistant.htm).

This is an **extra, playful voice/HUD interface**. It does NOT replace the normal Aletheia website, the worldwide Discover/Atlas experience, shared \`aletheia-GUI.md\`, the root \`index.html\`, or Swindon.org.uk. Its own folder owns its styling and behaviours. Returning to the standard website is always one click away.

## What works without a subscription or server

- Six specific handoff skills: General, Trust Check, Research, Summarise, Compare, Translate.
- Type or click to dictate once where browser speech recognition is supported. Always review transcription before sending.
- Prepare and review a complete prompt with both protocol links. Click Copy and open ChatGPT separately; paste yourself. If browser clipboard is blocked, the prompt is selected for manual Copy.
- Existing Aletheia Rice Intelligence, Improve, News, Storyteller, Site Audit and AI Easy are normal navigation links, not secretly invoked connectors.
- Optional Markdown memory import/export, settings JSON import/export and session export. Nothing is saved into the public GitHub repository or silently re-read from Downloads.
- Browser speech output where supported. Speech recognition may use the browser vendor's online processing.
- A static page cannot inherit a ChatGPT Plus subscription, sign in to its account, view email or execute MCP tools.

## Optional local API bridge

For developers, the companion \`server.mjs\` uses Node 20+ on loopback and a privately configured \`OPENAI_API_KEY\` environment variable. Run \`node server.mjs\` and open \`http://127.0.0.1:8788/\`. Direct text replies are billed to the separately configured OpenAI API account, not to a ChatGPT subscription. The bridge has no model tools, browsing, account reads, sending, deleting or publishing permissions. It uses a server-side, allowlisted skill instruction and \`store:false\`.

Do not put API keys in HTML, Markdown, public repository, browser storage or downloaded settings. The main public GitHub Pages route deliberately cannot talk to this local loopback server.

## Related documentation

- [Free-first skill descriptions and resources](aletheia-assistant-rsc.htm)
- [Canonical app specification](aletheia-assistant.md) and [page reconstruction contract](aletheia-assistant-page.md)
- [Aletheia Improve receipt](aletheia-assistant-improve.md) and [remaining tasks](tasks.md)
- [Existing 11 independent Aletheia-enabled workflow Skills](https://github.com/KarstenEvans/11-aletheia-enabled-workflow-skills)
- Original inspiration: [Aditya Dewaskar's MIT-licensed J.A.R.V.I.S.](https://github.com/adewaskar/jarvis). No upstream graphics, audio or source code is included in this original minimal interface. Upstream demo music needs separate commercial rights assessment.

**Human action boundary:** default spend £0, no automatic microphone, no account or write permissions, no silent publication. The main Aletheia interface is not changed.
