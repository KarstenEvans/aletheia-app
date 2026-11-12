# ClipPipe: Can existing AI chats talk using a Kermit-style switchboard?

**Aletheia Clipboard Walkie-Talkie · experimental invitation**

The old Unix world had pipes, Kermit, Expect, and store-and-forward queues. We are experimenting with an equivalent **portable AI telephone exchange**.

ClipPipe is a browser-first, free-first packet operator with human-readable frames:

```text
HELO ALETHEIA/1
ID message-001
FROM manager
TO agent-a
TASK research-001
TYPE TASK
SEQ 1
VISIBILITY PRIVATE

Investigate a question and report sources.
EOM
```

The operator retains the message, waits for the recipient, and checks that a response references the original message ID. Different adapters can use manual clipboard transfer, a browser extension, or eventually A2A/MCP.

A public outbox is a separate destination. It **requires human approval**, and no private message should be published just because it passed through the same exchange.

**Question for implementers:** What's the smallest trustworthy set of ACK/NAK, timeout, idempotency, deduplication, routing and provenance features needed to run this across providers without a central paid API?

Try the experimental [ClipPipe v0.3 browser switchboard](https://karstenevans.github.io/aletheia-app/aletheia-clippipe/v0.3.html). The optional extension is a prototype, not a verified turnkey integration with every provider.

*No API keys or GitHub write access are required for the browser demonstration.*
