# Aletheia AI Easy — Kermit AI bootstrap-transfer idea
Date: 2026-10-03
Status: IDEA / SAFE DESIGN ONLY
Human origin: Kes
Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol

## Origin
Kes recalled the Kermit era: DECnet, DCL, DOS, PATHWORKS, terminal emulators, small bootstrap stubs and text-encoded transfer methods used to move a larger program across awkward early networks. The modern analogy is appealing for AI: a tiny, copyable starter that can reconstruct a more capable working environment.

## Historical anchor
The Kermit file-transfer protocol was designed at Columbia University in 1981 and became a cross-platform method for reliable file transfer between diverse systems. Kermit programs often combined file transfer with terminal emulation and scripting, and compact or bootstrap forms were used where normal binary transfer was difficult.

Useful starting references:
- https://www.columbia.edu/kermit/
- https://www.columbia.edu/kermit/about.html
- https://www.columbia.edu/kermit/archive.html

## Product idea: Kermit AI
A beginner-safe Aletheia AI Easy helper inspired by Kermit, but **not** a hidden executable downloader.

The safe version is:

```text
TINY BOOTSTRAP
  -> pasted into AI or local text window
  -> asks user which provider and mode they use
  -> writes a provider-specific instruction pack
  -> creates a human-readable handover file
  -> optionally opens a simple browser GUI
```

Modes:
- **LITE:** copy/paste bootstrap into ChatGPT, Copilot, Gemini, Claude, DeepSeek, Qwen etc.
- **PERSISTENT:** use official provider Custom Instructions / Projects / Gems / memory features where available.
- **PORTABLE:** store `aletheia-memory.md`, provider profile, sources and handover outside the AI.
- **LOCAL:** optional local-first version for a personally owned computer, if the user deliberately downloads it.

## Safety boundary
Do **not** provide or promote a paste-renamed `.exe`, executable stub, downloader, PowerShell one-liner, encoded payload or registry bypass as the beginner route. Modern Windows, endpoint security and user-safety expectations are different from the Kermit bootstrap era.

If a local helper is ever created, it must be:
- open source;
- readable before running;
- signed or checksum-published where practical;
- no hidden network action;
- no admin requirement for ordinary use;
- no restricted/work PC use;
- explicit user consent;
- uninstallable;
- no automatic credential/token capture;
- no attempt to bypass provider limits or entitlements.

## Beginner GUI idea
A single static `kermit-ai.htm` page:
1. Choose provider.
2. Choose mode: Lite / Persistent / Portable / Local.
3. Copy bootstrap or open pop-out bootstrap.
4. Paste into AI.
5. Save handover.
6. Reload handover next time.

The page can include a nostalgic Kermit-style metaphor: **tiny starter, bigger transfer, clear handover**, without using the Muppets character or name/logo in a trademark-confusing way. Consider `Aletheia Kermit` as an internal codename only until rights/name risk is reviewed.

## Research tasks
- [ ] Research original Kermit bootstrapping and `.boo` encoding from primary sources.
- [ ] Identify safe modern analogues: HTML local file, bookmarklet-free copy helper, Markdown pack, ZIP download, signed script only if justified.
- [ ] Compare provider persistence: Copilot, Gemini, Claude, ChatGPT, DeepSeek, Qwen.
- [ ] Create a prototype static GUI with no executable payload.
- [ ] Add an explicit **not for work/restricted computers** warning.
- [ ] Review naming/trademark risk before public release.

## Key principle
Kermit AI should help ordinary people carry their AI setup and memory between systems. It must not become a sneaky installer.
