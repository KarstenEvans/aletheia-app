# Aletheia Storyteller page specification

Status: CURRENT IMPLEMENTATION, LIVE BROWSER VERIFICATION PENDING
Updated: 2026-09-23
Canonical published URL: https://karstenevans.github.io/aletheia-app/aletheia-storyteller.htm
Rendered file: `aletheia-storyteller.htm`
Canonical story/camera documentation: `aletheia-storyteller.md`
Public story index: `stories/stories.json`
Story data and images: `stories/`

## Purpose

A portable, static, full-screen illustrated story player. It reads prepared Markdown adventures and biographies aloud, shows captions and moves the camera among named hotspots in a scene. The published player has no required AI, backend, paid service or folder-listing API.

## Read before editing

Fetch the **current GitHub files** named above, including the story currently being changed and the exact image files it names. Also consult the shared Aletheia Knowledge project's root `aletheia-knowledge-GUI.md` and `aletheia-knowledge-code.md` for general page discipline, but this Storyteller-specific specification governs its deliberately cinematic presentation.

Never recreate Storyteller from another AI's recollection when the current source exists. Re-fetch SHA before editing; reconcile concurrent work.

## Actual page structure

1. Full-screen dark stage and wide story image, with a dark readability gradient.
2. Upper central title/intro when no story is playing.
3. Small cassette-like controls at upper left: previous, play/pause, next, stop.
4. Menu upper right with story selector, ALL STORIES / BIO INDEX, OPEN FOLDER, RELOAD STORY, resources, narration mode, voice, rate, pitch and caption-window size.
5. **Searchable, visible story library at initial launch.** Show all entries in `stories/stories.json`, including standalone bios. Type `BIO` to filter; select one card to load. A menu action reopens this index.
6. On story selection, the library hides and the image/narration/captions begin. Lower-third captions default to two sentences with 1/3/off options.

## Story and bio data contract

One ordinary Markdown `.md` per story in `stories/`. On hosted static Pages, `stories/stories.json` is the explicit published index. The app **does not** inspect unseen files in that directory automatically: editors add entries when new files are committed. Local OPEN FOLDER uses the browser folder picker and enumerates the selected local Markdown files.

Manifest sample:

```json
{
  "version": 2,
  "stories": [
    {
      "file": "stories/ToomorrowMan-and-the-Missing-Yesterday.md",
      "title": "ToomorrowMan and the Missing Yesterday",
      "type": "story"
    },
    {
      "file": "stories/bio-ToomorrowMan.md",
      "title": "BIO: ToomorrowMan",
      "type": "bio"
    }
  ]
}
```

The canonical first story currently remains unchanged. Five character bio stories are independent manifest entries: ToomorrowMan, AI-PI, Schrödinger, Elsie Brake and P.R.U.D.E.N.C.E. They derive from the published first story; do not invent supposedly verified facts about the user's linked YouTube channel.

## Square-bracket camera grammar

Commands appear alone on a line, in story order:

```text
[image;Toomorrow-Mystery-in-the-Abandoned-Mechanics-Hall.webp;tm=29,22,2.2;aipi=41,31,2.5;schrodinger=67,62,2.4]
[wide;dur=1.8]
[zoom;schrodinger;dur=2.3]
[pan;aipi;dur=2.0]
[hold;1.0]
```

`[image;file;name=x,y,preferredZoom]` loads a real file. Each hotspot is a named percentage of that **actual image's** pixel coordinates. `zoom` chooses named hotspot/preferred zoom, `pan` moves at current zoom, `wide` returns to complete image, and `hold` pauses before the next spoken sentence. Duration is in seconds. Test hotspots against real assets and adjust on Android; do not copy coordinates from another image.

## Inline biography grammar

```text
[bio-ToomorrowMan.md]
```

On its own line, the above **deliberately** inserts the complete Markdown biography into the containing story, including its narration/camera tags. The alias `[bio-TomorrowMan.md]` maps to the canonical two-o spelling. Includes are fetched from the selected story's directory. Restrict to simple `bio-*.md` filenames, reject traversal, missing files, recursion and excessive depth/length. Do not automatically insert all bios into the original adventure. Hosts with inserted biographies use browser TTS because the unexpanded story's MP3/VTT cues no longer match.

## Narration contract

Prefer UK English browser voice and UK male when actually available; user's voice selection overrides preference. Default rate 1.0 and pitch 1.0. Caption window defaults to 2 sentences. Markdown headings are narrated exactly as written: never prefix them with “New title” or the word “pause”. Browser TTS waits **400 milliseconds after finishing each heading**, then moves to the next spoken cue. The delay must be cancelled when playback is paused, stopped, skipped or a different story loads; the next cue must not be lost or a heading re-read. Ordinary sentences have no added delay. This TTS behaviour does not alter prerecorded MP3/VTT audio, which needs separate editing if a recording already says “New title”. Optional MP3 + sentence-aligned WebVTT files with the same basename are supported for an unexpanded story. Pausing/stepping and restart must not duplicate camera commands or lose the selected story.

A browser `file://` page may block Markdown fetch; display OPEN FOLDER fallback rather than assuming all local modes work identically.

## Character-voice narration, captions and local backup

The narrator voice is selected by the Storyteller app. The story is responsible for identifying character speech, without inference. The first story defines six compact `[voice-profile;CHARACTER;lang=LOCALE;...]` directives at the beginning: TM, AI-PI, SCHRODINGER, ELSIE, PRUDENCE and NEWT. No full biography download is necessary just to assign a voice. Further details and the canonical syntax are in `aletheia-storyteller.md`.

`[voice:AI-PI]` (or `[voice:TM]`, etc.) selects the actor for **subsequent paired double-quoted dialogue** until another selection. All text outside the quoted spans stays in the narrator's configured voice. `[voice:]` clears the selected actor for deliberately unassigned quotes. Both `“...”` and `"..." ` (paired) are supported, but apostrophes do not activate character voices. The editor must insert tags in the actual story; do not guess speakers from context in the runtime.

Voice matching searches the locally available browser voices by language, optionally preferring/excluding names and using best-effort gender labels. Fallback name where set, otherwise user-selected narrator. Actor-specific `rate`/`pitch` are supported but expressive moods are only possible to the extent browser speech synthesis supports them. MP3/VTT recordings do not respond to these tags; choose browser TTS by default for a tagged story.

Default caption-window size is **1 sentence**; the reader retains controls for two, three or Off. Long sentences may wrap visually on mobile. Narration must continue to read headings verbatim and observe the silent **400 ms** pause, with no generated “New title” words.

Before editing the app, save an **exact** copy of its current GitHub file under `backup/` and prepare a downloadable local voice-test preview. For this change, the original app was saved unmodified as `backup/aletheia-storyteller-before-character-voices-20260923.htm` (original blob SHA `9b9f18d544db8ca7234dab49053e57aa882a7250`, backup commit `1dddf776b4bb3555a936088d8168431b9226fb9c`). A standalone local voice experiment was created before overwriting the app. For a full offline version, bundle the current full `.htm`, story index, Markdown and confirmed images locally; a standalone voice demo is not the full Storyteller.

## Images and known missing assets

Available on GitHub (verified): `Toomorrowman02.webp`, `Toomorrow-Mystery-in-the-Abandoned-Mechanics-Hall.webp`, `Aboard-the-Department-of-Temporal-Affairs.webp`, `Newt-Presses-Other.webp`. New bios reuse these as portraits or scene-setting visuals; dedicated Elsie and Prudence portraits have not been verified.

Original story still refers to artwork currently missing from GitHub: `Into-the-Forgotten-Mechanics-Institution.webp`, `Youre-Late.webp`, `The-Department-of-Applied-Impossibility.webp`, `Guardian-of-the-Misty-Primeval-Pond.webp`. Treat as missing-assets tasks; do not fabricate or quietly replace the scenes without agreeing the artwork.

## Navigation, SEO and fallback

Primary share link points to the runnable GitHub Pages `.htm`, not GitHub source or raw Markdown. Deep link `?story=bio-ToomorrowMan` selects a registered entry. The resource page sits at `aletheia-storyteller-rsc.htm` and may provide book/creator links and clear commercial disclosures. Opening secondary links should leave the reader available where the platform supports this.

If loading fails, show an actionable message; missing biography includes must not silently disappear. Do not falsely report live site verification based only on code review.

## Acceptance checks

- [x] Exact existing app, first story, manifest and referenced image paths inspected on GitHub before editing.
- [x] Manifest lists all five newly added biographies plus the original adventure.
- [x] App script checked for JavaScript syntax after adding the searchable index and includes.
- [ ] Check GitHub Pages deployment and direct `?story=bio-...` links in a real browser.
- [ ] Verify all index entries, search BIO, selecting a bio, voice/play/pause and MORE if ever introduced.
- [ ] Insert the biography command into a **temporary test story** and verify image/camera/narration expansion; preserve original story until approved.
- [ ] Recover/create the four original missing story illustrations, and dedicated Elsie/Prudence portraits if desired.
- [ ] Confirm Android camera crop, tap targets, keyboard handling, stop/reset and image-load error display.

## Change log

2026-09-23: Created five standalone bios, registered them in `stories/stories.json`, added searchable story index and safe `[bio-...md]` includes, documented confirmed/missing image assets. Static inspection complete; live website/browser check remains.

2026-09-23: Removed generated “New title” from browser narration; introduced a 400ms heading-end pause with cancellation on playback interruption. JavaScript syntax checked; live voice test pending.

2026-09-23: Added story-level character profiles, explicit quotation-based actor voice selection, best-effort locale fallback and default single-sentence captions. Preserved the current 400 ms heading pause without synthetic words. Static parser tested with the actual first story; live PC/Android voice availability and image playback still need user testing.
