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