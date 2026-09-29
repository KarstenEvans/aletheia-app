# Aletheia Improve receipt: Aletheia Assistant

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol): evidence/provenance/uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md): optional tone/humour. Include both in any generated Markdown, including inconclusive outputs.

Date: 29 September 2026. Canonical target resolved to **Aletheia Assistant**, optional Sif voice/HUD GUI. Speech transcription “Insistent Assistant” is an alias, not a new application.

## Refresh and overlap

Reviewed \`aletheia-app\` README, AGENTS, \`aletheia-GUI.md\`, dev/code rules and Aletheia Improve's workflow and registry, plus AI Easy and the 11 independent workflow Skills. Reviewed \`adewaskar/jarvis\` source README/package/licence. Root main Aletheia website and worldwide Discover are different ownership. Decision: **EXTEND separate optional app; REUSE existing skills/apps; do not merge with standard GUI**.

## Problem and correction

v0.1 looked attractive but the default free mode only built a generic ChatGPT handoff and its output was not reliably easy to copy after clipboard denial. The former sandbox link failed the user. v0.2 adds six clearly described skill-specific prompts; selectable readonly output; status and honest free-vs-API labels; original voice/HUD; explicit navigation back to normal website; free-first resource page; direct canonical GitHub Pages URL. It leaves global site, root index, shared GUI, Knowledge, Swindon and Discover untouched.

## New value now vs later

Now: General, Trust Check, Research, Summarise, Compare, Translate handoffs; one-shot browser voice; reviewed Markdown prompt; explicit portable memory/settings/session downloads; ordinary links to existing Rice, Improve, News, Storyteller, Site Audit and AI Easy; separately configurable loopback, text-only OpenAI API bridge. No live verifier is simulated.

Later, not shipped: user-approved retrieval/source receipts, read-only account adapters, compatible skill executor, scoped cross-app import, review-before-action, optional hosted provider adapter. Never enable sends, payments, publishing or deletion merely because a connector exists. Default unapproved spend £0.

## Files and publication scope

Only \`aletheia-assistant/\`: \`aletheia-assistant.htm\`, \`aletheia-assistant.md\`, \`aletheia-assistant-page.md\`, \`aletheia-assistant-rsc.htm\`, README, server, package, tests and this receipt. No global GUI or normal homepage edits. No upstream Jarvis audio/source included; original MIT project is linked for provenance.

## Tests/verification

Local v0.2 prototype: 7 Node tests and separate 390px Chromium interaction run, including selecting Trust Check/Translate, prompt content, session download and no reported JavaScript errors. GH files must also be fetched independently after commit; a connector source fetch is not proof that GitHub Pages has finished publishing. Direct paid API and physical device/voice tests remain pending. Do not claim those as passed.
