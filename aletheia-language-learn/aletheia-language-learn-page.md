# Aletheia Language Learn browser page specification

> Canonical app: `aletheia-language-learn.md`  
> Browser page: `aletheia-language-learn.htm`  
> Shared learning core: `../aletheia-learn/aletheia-learn.md`

## Purpose

A phone-first doorway into the specialist language-learning app.

The page is a **HANDOFF** app using the shared Ctrl-V AI bridge. It does not claim an embedded AI backend.

## Primary flow

```text
LANGUAGE + REAL TOPIC + MODE
→ BUILD LANGUAGE LEARN PAYLOAD
→ COPY WHILE PAGE OWNS FOCUS
→ OPEN ONE SELECTED AI
→ USER PASTES
→ LANGUAGE SESSION STARTS
```

Default first-use target language: **Thai**.

## Required controls

- target language;
- optional other-language name;
- real-life topic/goal;
- mode: LEARN / CHAT / ROLEPLAY / PRONOUNCE / REVIEW;
- AI provider selector;
- Start button;
- compact manual fallback;
- optional favourite-AI learning profile;
- command reference;
- Thai-specific explanation;
- resources route;
- shared accessibility layer;
- shared Aletheia Constellation.

## Handoff payload

Must include:

- canonical Language Learn raw Markdown URL;
- canonical general Learn raw Markdown URL;
- selected target language;
- topic;
- mode;
- compact Hint Ladder;
- LEA/HI/etc short commands;
- native-script-first rule;
- audio-capability honesty;
- Thai-specific rules when Thai is selected;
- Aletheia and Thalia protocol links.

## Thai acceptance

When Thai is selected, the receiving AI should:

- show Thai script;
- treat romanisation as support only;
- distinguish lexical tone from written tone mark;
- acknowledge vowel length;
- teach consonant class/live-dead/tone-mark/vowel-length rules gradually;
- introduce classifiers and particles in context;
- avoid claiming tone/pronunciation correctness from transcript-only input;
- use matching/sorting/reconstruction/visual pattern tasks when useful.

## Visual/seasonal

Use shared `link-sprites.css/js/json`; no local seasonal fork.

## Accessibility

Use shared `accessibility-layer.css/js` and keep the core form usable without it.

## Verification

- no duplicate IDs;
- inline JS parses;
- one Awin MasterTag;
- one provider opens per Start click;
- copy fallback visible on failure;
- Android width no horizontal overflow;
- provider preference remembered locally;
- no API keys;
- Thai default;
- raw Markdown remains source of truth.
