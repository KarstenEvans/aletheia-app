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


## Aletheia cinematic scale / studio-signoff ideas

**Status:** FUTURE IDEAS ONLY. Do not interrupt the current Three.js particle prototype to build these.

### God's-eye zoom

A separate future visual could begin at **Swindon.org.uk**, pull back through a local/planetary satellite view, continue away from Earth, and finally reveal Earth as a single point inside the much larger Aletheia particle universe. This is a possible story/opening/closing sequence, not a requirement for the current particle animation.

Keep the transition original and technically independent of any single mapping/satellite provider. The conceptual beat is:

```text
Swindon.org.uk -> local world -> Earth -> satellites/orbit -> deep space
-> Earth becomes one particle -> Aletheia particle universe
```

### Original / standard studio sting

Preserve the existing original studio-signoff idea as the **standard** variant: an original old-cinema-style framing, inspired by the general tradition of studio idents but not copying a particular lion logo. **AI-PI appears first; ToomorrowMan follows in solidarity**, with the relationship and affection readable from pose/gesture rather than dialogue.

### Variant 2: AI-PI meow + ToomorrowMan lion roar

A future app/story ending can make the joke explicit through sound:

1. AI-PI appears first and performs his grand "roar", but the sound is a **small cat-like meow**.
2. ToomorrowMan enters behind/beside him, optionally placing a hand on AI-PI's shoulder.
3. ToomorrowMan then gives a full theatrical **lion-style roar**, head moving down and around to his right, mouth open, head shaking with the force of it.
4. He looks down at AI-PI.
5. They leave together to the right.

The scene should communicate partnership and affection, not mock AI-PI.

### Variant 3: Schrödinger / Dragonfold final roar

Extended ending after Variant 2:

1. AI-PI and ToomorrowMan have exited right.
2. Hold the apparently finished frame in silence for a beat.
3. **Schrödinger** rises into view in tuxedo-cat form, looks around and blinks.
4. She unfolds/transforms into her true **Dragonfold** form.
5. The Dragonfold gives the final, enormous dragon roar.
6. End.

The delayed third beat should feel surprising and delightful for children while remaining compatible with established Dragonfold canon: cat externally, dragon folded within, larger on the inside.

### Design boundary

These are **original Aletheia cinematic stings**, not reproductions of MGM or another studio ident. Do not copy a protected logo, exact ring composition, lion footage, typography, music or animation. Use the broad cinematic grammar only: framed reveal, character performance, hold and fade.
