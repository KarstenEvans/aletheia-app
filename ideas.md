# Aletheia Apps — Ideas

> Early-stage concepts. These are not promises or canonical protocol changes.
> Promote an idea into `tasks.md` and its own app folder when it is ready for implementation.

## Aletheia Deck Forge / Visual Knowledge

**Status:** IDEA — research/prototype candidate  
**Seed:** Slideshare, Scribd, public PDFs/PPTX/DOCX, books, user-owned presentations and other visual learning material.

### Core idea

Turn useful source material into **independently checked Aletheia knowledge plus an original visual explanation**, rather than copying or reskinning somebody else's slides.

Pipeline:

```text
SOURCE / TOPIC
  -> DISCOVERY MAP
  -> CLAIMS + CONCEPTS + STRUCTURE
  -> ALETHEIA CHECK
  -> VERIFIED KNOWLEDGE CARDS
  -> ORIGINAL VISUAL DECK / HTML / SVG
  -> QUIZ / NOTES / RESOURCE PAGE
```

### What it could do

- Accept a user-supplied file, public URL, pasted outline or topic.
- Extract candidate facts, arguments, concepts, diagrams and teaching sequence.
- Label source material as **DISCOVERY**, not automatically true.
- Independently verify factual claims before promotion to Aletheia Knowledge.
- Create original diagrams, timelines, comparison cards, maps and explainers.
- Produce an accessible browser deck in HTML/SVG first.
- Optionally produce PowerPoint/PDF later.
- Create a compact quiz, speaker notes and "go deeper" links.
- Export verified material into `aletheia-knowledge`.
- Create a matching `-rsc.htm` resource page where useful books/tools can be linked.

### Copyright / originality boundary

Publicly viewable does **not** mean reusable.

For ordinary copyrighted Slideshare/Scribd/books:
- use them as discovery/topic maps;
- do not reproduce protected prose, images, distinctive slide layouts or illustrations;
- independently research the underlying facts and ideas;
- rebuild the explanation in original wording and original visual design;
- preserve source/provenance links.

For user-owned, public-domain or suitably licensed material:
- allow a stronger remix/reformat mode according to the actual licence.

### Why it fits Aletheia

- Aletheia Knowledge becomes the reusable verified "brain".
- Deck Forge becomes a visual/teaching surface over that knowledge.
- Weird History can become a first demonstration: knowledge cards -> original illustrated history deck -> Story Forge/QI follow-on.
- Course modules can use the same cards without duplicating research.
- Visual material can be regenerated for different reading ages, languages and accessibility needs.

### KISS architecture

**Free/static first:**
- browser UI;
- local file selection/paste;
- prompt generation;
- copy/paste to the user's chosen AI;
- local HTML/SVG output templates;
- no required server, API key or paid token.

Optional later:
- Cloudflare AI adapter;
- OCR only where unavoidable;
- image generation for original diagrams/illustrations;
- PowerPoint/PDF export.

### Distribution opportunity

Slideshare itself could be a distribution channel for **Aletheia-created original decks** because it accepts PPT/PPTX/PDF/DOC/DOCX, supports embeds and is indexed by search engines.

However, its current uploader agreement gives Scribd/Slideshare broad rights over uploaded material, including rights around derivative use and model training. Review that deliberately before using Slideshare for valuable proprietary Aletheia material.

### Commercial layer

Keep commercial links outside canonical knowledge.

Possible resource-page monetisation:
- Bookshop.org direct-book affiliate links;
- AWIN merchants;
- relevant software/hardware;
- Everand subscription affiliate programme **only if Aletheia is accepted and the link is appropriate**.

Do not imply there is a Scribd-document or Slideshare-document affiliate commission unless a current programme explicitly provides one.

## Storyteller bilingual and language-learning stories

**Status:** IDEA for a future, optional feature. Not implemented in the current Storyteller.
**Seed:** Quiet, illustrated storytelling as a way for children and adults to listen, read and learn a second language without fast-cut video.

The existing static Storyteller provides one spoken cue at a time, optional character voices, an adjustable narrator voice and gentle pan/zoom on still illustrations. The next experiment could provide **a separate story language and a separate caption language**, including two-language captions on demand. For example, choose Japanese narration with English captions, or Thai narration with Norwegian translation. Retain the default single-sentence caption for low-intensity reading; the second language must be an opt-in rather than appearing all the time.

Possible gradual steps:

1. **Prepared parallel text first:** two reviewed language versions of each sentence with matching cue IDs. One narrator/audio language and one optional translation caption language. No runtime AI, translation subscription or internet needed for prepared stories.
2. **Optional pronunciation mode:** allow a reader to repeat the current phrase, slow speech and display original plus translation. Speaker profiles should continue to work for actor dialogue, but a foreign-language TTS voice may pronounce English words poorly, so test and explicitly disclose availability.
3. **Optional on-the-fly translation later:** use a user-selected local/browser translator or an optional AI bridge only when available. Mark unreviewed translation clearly and avoid silently sending a child's story or personal reading history to external services.
4. **Simple accessibility controls:** one or two caption tracks, adjustable text size/speech rate, useful story-language labels and saved local preferences where appropriate.

Keep Markdown stories readable independently of any translation system. Never make Cloudflare Workers, AI APIs or paid voices required for ordinary playback.

**Proposed future prompt:** How can Storyteller use one story's cue IDs, images and camera instructions with two aligned narration/caption languages, while retaining a fast, distraction-free, one-sentence default?
