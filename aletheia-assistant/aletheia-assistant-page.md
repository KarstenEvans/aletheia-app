# Aletheia Assistant: page and QA specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) for evidence and uncertainty; [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) for optional, appropriate humour. Both references must appear near the start of every generated Markdown output.

Status: v0.2 source published; device and local paid API testing pending. Canonical public URL: https://karstenevans.github.io/aletheia-app/aletheia-assistant/aletheia-assistant.htm. Resource page: \`aletheia-assistant-rsc.htm\`. Date: 2026-09-29.

## Screen order

Main website return link; clearly OPTIONAL hero with CSS-only Sif ring; six skill buttons; labelled request/one-shot speech and handoff controls; selectable readonly output; specialist app routes; optional memory/import/export; voice/settings; protocol and capability statement; shared Aletheia Constellation; footer. It must not replace any root page or shared CSS.

## Six exact skill keys

\`general\`, \`trust\`, \`research\`, \`summary\`, \`compare\`, \`translate\`. Keyboard-operable buttons and one \`aria-pressed=true\`; switching visibly updates instruction and placeholder. Handoff contains selected skill instruction, user request, optional explicitly supplied untrusted memory, both protocol links and approval boundaries. Show text even when clipboard is blocked; select complete readonly output to support manual Copy.

## Modes

GitHub Pages = static, no OpenAI API key, no ChatGPT session access; \`Ask Sif\` disabled, manual handoff works. Optional local Node bridge \`http://127.0.0.1:8788/\` GET \`/api/health\` and POST \`/api/chat\` with allowlisted skills; API key server-side, no tools. Do not try to call localhost from public Pages; do not claim a key-free paid model.

## Accessibility and reliability

Readable viewport at 390px with no horizontal page overflow, labelled inputs, visible focus, text status, reduced-motion no-animation fallback, usable static navigation if JavaScript or CSS dependency fails. Speech feature detect; click before listening or playback; transcription only reviews, never auto-sends. The selected voice is a browser-dependent English voice (prefer en-GB), not a guaranteed male voice. No untrusted imported HTML rendered as code.

## Sources and external dependencies

Shared \`../shared/link-sprites.css\`, \`../shared/link-sprites.js\`, \`../shared/link-sprites.json\` implement the seasonal Constellation with static fallback stars. One Awin MasterTag on each public production HTML, never on a local returned page. Original Jarvis is inspiration only; no upstream source, graphics or music copied.

## Acceptance

Check JS/bridge syntax, no-key server and origin guards, skill button/handoff/clipboard fallback, session download, HTML resources, mobile viewport, file import/export, Android speech and published Pages response. Record local vs deployed vs physical device evidence accurately. Future opt-in integrations require new tests and permission design.
