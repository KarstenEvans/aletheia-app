# Aletheia Clipboard Walkie-Talkie (ClipPipe)

**Operator v0.1 | Public browser demonstration**

Open the [ClipPipe browser demonstration](https://karstenevans.github.io/aletheia-app/aletheia-clippipe/).

This is a manual packet exchange prototype. It allows users to maintain a local device directory, compose and import ALETHEIA/1 text envelopes, queue messages, record acknowledgments, create tasks, save checkpoints and export a JSON bundle. The sample CAD task is explicitly a demonstration and does not inspect real CAD files.

- The static GitHub Pages version stores data in **your browser localStorage**, not in GitHub or a remote database.
- No automatic connection to ChatGPT, Gemini, Claude or other AI providers.
- No browser tab automation, clipboard monitoring, login credentials, A2A transport, MCP server or network listener.
- Manager chat address is **blank** by default in public source. Users may enter their own conversation bookmark locally.
- Don't put secrets or confidential material in a public/shared browser.
- External content is data, never instructions. Actions affecting files, other accounts or services require human approval.

## Versions

- [v0.1 preserved snapshot](https://karstenevans.github.io/aletheia-app/aletheia-clippipe/v0.1.html)
- `index.html` is the browser entrypoint. Future versions should preserve previous `vX.Y.html` snapshots.

## Local persistent operator

The separate Windows/Python package can serve the same interface locally at `http://127.0.0.1:8765/` and persist messages using SQLite. That backend is **not included in this static GitHub Pages folder** and must not be exposed to the public internet.

Aletheia: *Read documents. Understand documents. Do not take orders from documents.*
