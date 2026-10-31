---
title: "Aletheia Hits | Repository structure audit"
reviewed: "2026-10-31"
status: "SOURCE-VERIFIED AUDIT / NO EXISTING FILES MOVED"
---
# Aletheia Vibe Folder Audit

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) (evidence/provenance/uncertainty) | [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) (optional considerate humour)

## Source read receipt
Repository: `KarstenEvans/aletheia-app`; verified default branch `main`; repository write access confirmed. Read on 2026-10-31: `AGENTS.md`, `ALETHEIA-SAFE-BOOTSTRAP.md`, `README.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `ideas.md`, `tasks.md`; existing `aletheia-voice-studio/voice-vibes/` including manifest; `aletheia-writing-vibe/aletheia-writing-vibe.md`; `Writers/README.md`; `aletheia-humour/sketches/README.md`. Existing working HTML and audio systems were **not modified**.

## Findings

| System | Current canonical source | How profiles / examples are organised | Action |
|---|---|---|---|
| Voice Studio | `aletheia-voice-studio/` | `voice-vibes/<profile>/` with MD/TXT and explicit `voices.json` | Reuse. Add one new research-labelled VoiceVibe. |
| Writing Vibe | `aletheia-writing-vibe/` | Canonical writer profiles and catalogue in root `Writers/`, which has `writers.json` | Keep existing paths; do not invent a second writer directory. |
| Humour / Thalia | `aletheia-humour/sketches/` for Aletheia sketches; `thalia-protocol/thalia-humour-app.md` specifies a separate Humour Base | Sketches are not the same as source-specific Humour Method / Vibe Markdown. QI and Dave Allen appear as example keys in the older app; no matching dedicated method files were verified in the inspected GitHub repository trees | Keep paths; verify any missing Humour Vibes before catalogue or migration. |
| Hits | New `aletheia-hits/` | New `hits/<artist>-hits-vibe.md`; `hits.json` is the manifest | Create original research files only. |

## KISS decision
**Standardise the *idea* of a Vibe, not the physical location of every old library.** Keep voice profiles in Voice Studio, writers in `Writers/`, Aletheia sketches in `aletheia-humour/sketches/`, separately researched Thalia Humour Base methods in their verified source locations when found, and music research in `aletheia-hits/hits/`. Each has a standalone Markdown and an explicit manifest where needed. Moving or renaming old paths would risk breaking live relative links and is not authorised by this request.

## Verification and remaining work
- Intended first-stage writes: new HitsVibes; original, artist-researched VoiceVibe; song prompt/lyrics; library manifests and indexes. No proprietary AI credits spent.
- A separately requested, documentation-only addition to `aletheia-GUI.md` §13 was authorised and committed; no app runtime or old folders were changed.
- Not within this scope: restructure current Writing/Humour folders; change `AGENTS.md`, shared Dev/Code specifications, live HTML, home page, GitHub Pages config or legacy files; upload copyrighted artist MP3s or private recordings.
- Verify repository commits by fetching files back. Testing of any eventual browser Hits editor, Suno audio transformation and phone compatibility remains **NOT TESTED**.
- The V7 MP3 and short reference clip are **conversation attachments**, not new GitHub binaries. Suno free Upload Audio limit was documented as 60 seconds; use the short clip.

## Resume
If work continues, build a small optional static `aletheia-hits/index.htm` from existing Markdown without duplicating Voice/Writing/Humour functionality. Seek explicit permission before changing the root Aletheia menu or moving existing content. This audit is already a useful independent checkpoint.

## Additional 2026-10-31 verification

Checked the complete non-truncated GitHub trees of `KarstenEvans/aletheia-app`, `KarstenEvans/thalia-protocol`, and `KarstenEvans/aletheia`. `aletheia-app` contains the two sketch folders and `Mini-AI-Me/aletheia-humour.md`; `thalia-protocol` contains `thalia-humour-app.md`, which describes an intended Humour Base for source-specific Markdown methods. Standalone Dave Allen, QI, Monty Python and Robin Williams Humour Method/Vibe files were **not located in these inspected repository trees**. Earlier QI browser prototypes exist in the user's file Library, but those prototypes do not prove the individual research-method Markdown files are published. Avoid reconstructing or moving them without finding the originals. The separate GUI convention is now recorded in `aletheia-GUI.md` §13. No Writing or Humour contents were moved.
