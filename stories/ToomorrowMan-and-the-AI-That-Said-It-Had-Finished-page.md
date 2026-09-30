# ToomorrowMan and the AI That Said It Had Finished — standalone page specification

**Status:** IMPLEMENTED SOURCE / LIVE VERIFICATION PENDING  
**Canonical story:** `stories/ToomorrowMan-and-the-AI-That-Said-It-Had-Finished.md`  
**Standalone rendition:** `stories/ToomorrowMan-and-the-AI-That-Said-It-Had-Finished.htm`  
**Storyteller route:** `aletheia-storyteller.htm?story=ToomorrowMan-and-the-AI-That-Said-It-Had-Finished`  
**Resources:** `aletheia-storyteller-ai-finished-rsc.htm`

## Purpose

Provide a crawlable, shareable HTML rendition of the Storyteller story while keeping the Markdown story canonical. The standalone page is not a replacement Storyteller engine and must not acquire a second divergent narrative.

## Core teaching answer

Near the top, state plainly:

> A system saying **DONE** is a claim. The important distinction is **ATTEMPTED → COMPLETED → VERIFIED**. Verification asks whether suitable evidence shows that the intended real-world outcome actually happened.

The story then teaches that distinction through Schrödinger's empty bowl, failed deliveries, traffic, heating, notifications and the Department's status board.

## Required structure

1. Compact Aletheia/Storyteller identity and navigation.
2. Story title and answer-first introduction.
3. Visible teaching card: ATTEMPTED / COMPLETED / VERIFIED.
4. Complete current story text derived from the canonical Markdown with Storyteller control commands removed from visible prose.
5. A short “What the story teaches” section:
   - Done ≠ verified done.
   - Local subsystem success ≠ intended outcome.
   - Show evidence and remaining uncertainty.
   - Human approval may be the correct status.
   - A stop condition matters.
6. Resources/books/gifts link.
7. Play/listen link back to Storyteller.
8. Aletheia Constellation/footer.
9. One Awin MasterTag only if commercial/resource links appear directly on the page. Prefer keeping affiliate links on the separate resources page.

## Side stars exception

Owner specifically requested stars at the sides.

The standalone page may therefore use **static fixed star rails on wide desktop only** as an editorial navigation exception to the normal Constellation placement. They must:
- be ordinary links, not decorative hitboxes;
- not drift across content;
- hide at narrower widths;
- retain visible titles/focus;
- contain only editorial/non-affiliate routes;
- coexist with the standard bottom Constellation fallback.

No full-screen particles or flying overlays are needed.

## Discovery metadata

Suggested title:
**The AI That Said It Had Finished | ToomorrowMan | Aletheia Storyteller**

Meta description:
**A funny ToomorrowMan and AI-PI story about the difference between attempted, completed and verified work — and why a green tick is not proof that the real job happened.**

Primary query:
- AI says task complete but it did not happen

Related questions:
- What is the difference between task completion and verification?
- How should AI agents prove that an action succeeded?
- What does “closing the loop” mean in automation?
- Why can a successful API response still produce the wrong real-world outcome?

Do not manufacture Article ratings/reviews. If JSON-LD is used, `CreativeWork` or `ShortStory` may be appropriate only when it matches visible content and available schema support.

## Resource / affiliate rule

Bookshop.org affiliate ID: **18254**.

Canonical direct pattern supplied by the owner:
`https://uk.bookshop.org/a/18254/<ISBN>`

Gift cards:
`https://uk.bookshop.org/a/18254/gift_cards`

Keep Bookshop commercial links on the resource page with an adjacent disclosure. Source/evidence links must remain untracked and use `data-awinignore` where the project uses Awin Convert-a-Link.

## Artwork

The public story currently works with existing Storyteller artwork. The richer nine-scene image plan remains in:
`stories/drafts/ToomorrowMan-and-the-AI-That-Said-It-Had-Finished-image-plan.md`.

Do not claim those nine images exist until created, uploaded and inspected. When approved images exist, update hotspot coordinates against the real renders rather than guessed prompts.

## Sif

Sif is now a registered Storyteller character biography:
`stories/bio-Sif.md`.

Her approved concert artwork is intended to show Sif singing at a dark Nordic/Viking-age-inspired concert at Þingvellir, with ordinary Icelandic fans and mythic figures hidden among the crowd. The concert episode is explicitly fictional. Þingvellir's historical role as the Alþing assembly site is factual and should be sourced separately on the resources page.

## YouTube adaptation

Use the same canonical story. Do not rewrite its lesson.

The YouTube package should contain:
- title;
- 1–2 sentence description;
- scene/narration sequence;
- visual prompts/assets;
- chapter markers only after actual audio/video timing exists;
- source/resource links;
- disclosure if affiliate links are used in the description;
- thumbnail concept;
- Shorts hooks derived from the full story without implying a separate canon.

Human approval is required before external publishing.
