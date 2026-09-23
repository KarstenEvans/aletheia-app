# Aletheia Storyteller

## Purpose

Aletheia Storyteller is a static browser storyteller for Markdown stories. It displays a story image full-screen, narrates the text, shows captions in the lower third, and uses simple square-bracket commands inside the Markdown to change image, zoom, pan, return to a wide shot, or pause.

The first version is deliberately KISS: no server, no database and no AI is required to play a prepared story.

## Folder layout

```text
Stories/
  Aletheia-Storyteller.htm
  Aletheia-Storyteller.md
  stories.json
  ToomorrowMan-and-the-Missing-Yesterday.md
  ToomorrowMan-and-the-Missing-Yesterday.mp3      # optional
  ToomorrowMan-and-the-Missing-Yesterday.vtt      # optional
  Toomorrowman02.webp
  Toomorrow-Mystery-in-the-Abandoned-Mechanics-Hall.webp
  Aboard-the-Department-of-Temporal-Affairs.webp
  Newt-Presses-Other.webp
```

On GitHub Pages / Cloudflare Pages, `stories.json` is the story list. A normal static web page cannot safely enumerate every `.md` file in a server folder by itself. When running locally in a Chromium browser, Storyteller also offers **OPEN FOLDER**, which can enumerate `.md` files selected by the user and excludes `Aletheia-Storyteller.md`.

## Story command syntax

Commands are contained in square brackets and separated with semicolons.

### Load an image and define named focus points

```text
[image;Newt-Presses-Other.webp;tm=39,24,2.15;aipi=61,27,2.45;schrodinger=63,70,2.35;newt=20,60,3.5;button=13,57,3.8]
```

Each focus point is:

```text
name = x-percent, y-percent, preferred-zoom
```

The percentages are relative to the original image, so they continue to work on different screen sizes.

### Camera commands

```text
[zoom;tm;dur=2.1]      # move to TM and use TM's preferred zoom
[pan;aipi;dur=2.3]     # pan to AI-PI while keeping the current zoom
[wide;dur=2.5]         # return to the complete image
[hold;1.0]             # hold the current frame for one second
```

The camera uses smooth ease-in/ease-out animation to avoid frantic zooming.

## Narration

### Default: browser voice

- Language preference: `en-GB`
- Rate: `1.0`
- Pitch: `1.0`
- Storyteller prefers a UK male browser voice when one is available, then falls back to another `en-GB` voice.
- The user can change voice, rate and pitch in the menu.
- Story text is spoken sentence-by-sentence, so captions and camera commands stay synchronised without a separate timing file.

### Optional MP3 + VTT

If a story has files with the same base name:

```text
Story.md
Story.mp3
Story.vtt
```

Storyteller can use the MP3 as narration and the VTT as the timing map. For the simplest reliable camera synchronisation, make the VTT **sentence aligned**: one cue for each sentence in the story, in the same order. Camera commands placed before a sentence are triggered when that sentence's cue becomes active.

A VTT is not a voice model. It is a **WebVTT timing/caption file**. The voice can be your real recorded narration or generated from your own voice clone; the VTT is made afterwards by aligning that audio to the story text.

## Controls

A small translucent cassette-style control strip remains visible:

```text
<<    > / ||    >>    []
```

- `<<` previous sentence
- `>` play / `||` pause
- `>>` next sentence
- `[]` stop and return to the beginning

`☰ MENU` opens story selection, voice, narration mode, caption size, speech rate and pitch.

## Captions

Captions sit in the lower third over a translucent dark panel. The menu allows 1, 2 or 3 sentences. Default is 2.

## Image coordinates used in the first story

These are hand-estimated from the supplied images and expressed as percentages.

### Toomorrow-Mystery-in-the-Abandoned-Mechanics-Hall.webp

```text
tm=29,22,2.2
aipi=41,31,2.5
schrodinger=67,62,2.4
lift=20,43,1.8
```

### Aboard-the-Department-of-Temporal-Affairs.webp

```text
tm=42,31,2.1
aipi=21,30,2.5
schrodinger=62,55,2.3
newt=79,59,3.2
window=83,34,1.75
```

### Newt-Presses-Other.webp

```text
tm=39,24,2.15
aipi=61,27,2.45
schrodinger=63,70,2.35
newt=20,60,3.5
button=13,57,3.8
```

The values are intentionally editable in the Markdown. If a focus is slightly off, change only its `x,y,zoom` values and reload the story.

## Future additions

Possible later commands without changing the basic format:

```text
[fade;1.5]
[text;bottom]
[text;off]
[sound;door-chime.mp3]
[quiz;road-trip-01]
```

These are not required by version 1.
---

## Current GitHub layout and story index (checked 23 September 2026)

The original folder-layout example above is historical. The **actual current GitHub repository** uses:

```text
aletheia-app/
  aletheia-storyteller.htm
  aletheia-storyteller.md
  aletheia-storyteller-page.md
  aletheia-storyteller-rsc.htm
  stories/
    stories.json
    ToomorrowMan-and-the-Missing-Yesterday.md
    bio-ToomorrowMan.md
    bio-AI-PI.md
    bio-Schrodinger.md
    bio-Elsie.md
    bio-Prudence.md
    [existing .webp story illustrations]
```

Published player: https://karstenevans.github.io/aletheia-app/aletheia-storyteller.htm

GitHub Pages **cannot automatically discover every file in a folder**. The public player deliberately reads `stories/stories.json` as its index. Whenever a story or bio is added, edit that manifest too. The player now shows a searchable story library on opening (type `BIO` to filter biographies), and an ALL STORIES / BIO INDEX option in the menu. `OPEN FOLDER` is a separate user-initiated local mode that enumerates selected Markdown files.

Deep link to a particular registered item:
`aletheia-storyteller.htm?story=bio-ToomorrowMan`.
The first story remains separate rather than silently expanding all five biographies.

## Character biographies and inline includes

Character profiles are independent, narrated Markdown **stories** in the same folder as the main story. Filenames begin `bio-`; they use the ordinary `[image;...]`, `[zoom;...]`, `[pan;...]`, `[wide;...]` and `[hold;...]` commands.

Current profiles:
- `bio-ToomorrowMan.md`: ToomorrowMan, silver-haired investigator, Swindon and the brass anchor disc.
- `bio-AI-PI.md`: floating robot sidekick, evidence, research and risk objections.
- `bio-Schrodinger.md`: Schrödinger, tuxedo cat and Dragonfold.
- `bio-Elsie.md`: Dr Elsie Brake, Acting Keeper.
- `bio-Prudence.md`: the P.R.U.D.E.N.C.E. system in the Probability Distribution Annex.

To **insert** one of these narrated bios into another story deliberately, put this tag on its own line:

```text
[bio-ToomorrowMan.md]
```

Alternative recognised spelling: `[bio-TomorrowMan.md]` resolves to canonical `bio-ToomorrowMan.md`.

The reader fetches that Markdown from the same `stories/` folder and expands it at the tag location *before* splitting narration into sentences. Its image/camera commands are expanded too. It does not modify the original file or append biographies to every adventure automatically. For predictability, inserted biographies use browser narration; an existing MP3/VTT soundtrack for the unexpanded host story would not have matching cues.

Security: allow only simple `bio-[letters/digits/_/-].md` names; reject missing files, circular includes and excessive nesting. An unresolved include is an actionable error, not silently replaced with imaginary text. An AI editor must never assume a markdown file exists without fetching its exact GitHub path first.

## Available and outstanding artwork

**Verified present in the current GitHub `stories/` folder:**
- `Toomorrowman02.webp`: canonical illustrated human ToomorrowMan portrait.
- `Toomorrow-Mystery-in-the-Abandoned-Mechanics-Hall.webp`: ToomorrowMan, AI-PI and Schrödinger at the abandoned institution.
- `Aboard-the-Department-of-Temporal-Affairs.webp`: ToomorrowMan, AI-PI and Schrödinger in the carriage.
- `Newt-Presses-Other.webp`: ToomorrowMan, AI-PI, Schrödinger and the lift.

**Referenced in the original main story but not found at these GitHub paths during this check:**
- `Into-the-Forgotten-Mechanics-Institution.webp`
- `Youre-Late.webp`
- `The-Department-of-Applied-Impossibility.webp`
- `Guardian-of-the-Misty-Primeval-Pond.webp`

Do not claim those images are published or silently replace them with unrelated art. Elsie and Prudence currently have appropriate existing **scene illustrations**, not verified individual portraits. Acquire, create and approve dedicated character art separately before claiming these bios show each character's likeness.

The illustrated original-story canon currently portrays ToomorrowMan as a silver-haired human traveller and AI-PI as a small floating robot. Other Robot PI artwork may be used for branding elsewhere, but is not automatically a replacement for these story character designs.

ToomorrowMan's YouTube channel is supplied as https://www.youtube.com/@TooMorrowMan . The channel's contents were not accessible for independent review in this research pass; do not invent biographical details from it. These five bios are fiction grounded in the first story, with small narrative extensions clearly belonging to the same fictional world.

## Story creation and camera-validation checklist

1. Check the current canonical GitHub story and exact existing image filenames first. Read or inspect the real image before assigning hotspots.
2. Write a complete standalone `.md` story with a substantive opening. Put an `[image;FILE.webp;person=x,y,zoom]` cue before the first spoken paragraph; the file path is relative to the `stories/` directory.
3. Define hotspot percentages against the actual illustration, then use `[zoom;person;dur=2]`, `[pan;person;dur=2]`, `[wide;dur=2]` and optional `[hold;1]` between paragraphs.
4. Test wide image, every named focus, mobile crop, caption placement and movement duration. Long animations during sentences may need adjusting.
5. Add each independent bio/story to `stories/stories.json` with `type: "bio"` or `type: "story"`. This is the public story index, not an automatic GitHub directory listing.
6. Put `[bio-Filename.md]` in another story **only when inclusion is intentional**. Test direct bio playback as well as inclusion.
7. If MP3 narration is supplied, provide matching sentence-aligned `.vtt` and retest cue timing. Use browser narration for dynamically expanded includes.
8. Update `aletheia-storyteller-page.md`, this file and the relevant task/handover register when behaviour changes.
