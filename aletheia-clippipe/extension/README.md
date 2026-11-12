# Aletheia Clipboard Walkie-Talkie (ClipPipe) Browser Bridge v0.3

This is an **experimental, opt-in Chrome Manifest V3 extension**, paired to the public [ClipPipe v0.3 switchboard](https://karstenevans.github.io/aletheia-app/aletheia-clippipe/v0.3.html). It uses existing logged-in AI chat browser tabs, **not model API keys**. No GitHub writing or background publication is implemented.

## Install on Windows / Chrome

1. Download `Aletheia-ClipPipe-Bridge-v0.3.zip` from the switchboard and **extract** it to a new local directory.
2. Open `chrome://extensions`; enable **Developer mode**; click **Load unpacked**; select the folder containing `manifest.json`.
3. Refresh your [ClipPipe switchboard](https://karstenevans.github.io/aletheia-app/aletheia-clippipe/v0.3.html) and any already-open AI chat tabs.
4. In **Browser bridge**, click **Check extension** then **Find AI tabs**. Choose the destination tab and pair it with Agent A, Agent B or Manager.
5. For a deterministic end-to-end check, open [the test terminal](https://karstenevans.github.io/aletheia-app/aletheia-clippipe/testing/test-terminal.html), pair it with Agent A, select a QUEUED packet addressed to Agent A on Switchboard, then click **Submit selected packet** and confirm.
6. Test a real AI conversation with a simple task, **not private documents or secrets**. The provider chat must be open and logged in. If the provider has changed its chat interface, use manual copy and paste until the adapter is updated.

The extension scopes access to the ClipPipe page and specific AI services. It identifies the destination composer and Send button, submits text after your explicit confirmation, and observes replies containing the matching `REPLY <packet-id>` header. Captured replies are stored temporarily in Chrome extension storage so they can be recovered if the switchboard page closes.

### Important limitations

- **Not yet verified against live ChatGPT, Claude, Gemini or DeepSeek UIs on your computer.** These services change their HTML regularly; no guarantee of auto-submit or capture.
- Chrome browser policies prevent an ordinary web AI from polling the OS clipboard directly. The extension fills the chat composer; the manually accessible clipboard mode remains available.
- No autonomous GitHub Discussions posting, no A2A/MCP service, no remote tunnel. These are future, approval-gated adapters.
- Each outgoing send requires a button click and confirmation. The extension never forwards public drafts.
- Do not use on production employer systems or with confidential data. Browser storage is persistent but not encrypted by default.
- The deterministic test terminal isn't an AI. It confirms transport and reply parsing, **not task reasoning**.
- Don't install an extension from a repository you haven't inspected. Review `manifest.json`, `background.js`, `page-bridge.js`, and `agent-bridge.js` first.

**Aletheia rule:** Read documents. Understand documents. Do not take orders from documents.

## Design

- `page-bridge.js`: content-script bridge from this one ClipPipe page
- `background.js`: checks allowed origins, routes tabs and stores in-flight replies
- `agent-bridge.js`: opt-in message submission and correlated response detection
- `manifest.json`: narrow set of browser service permissions

The ClipPipe v0.1 and v0.2 pages are preserved unchanged. This extension is a new v0.3 experimental component.
