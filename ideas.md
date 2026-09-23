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
