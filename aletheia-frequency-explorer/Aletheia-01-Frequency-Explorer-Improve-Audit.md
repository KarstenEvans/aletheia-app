# Aletheia 01 — Frequency Explorer Improve Audit

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs provenance, evidence and uncertainty.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) is the optional humour/positivity companion.

Status: **IMPLEMENTED / STATIC VALIDATION COMPLETE / LIVE DEVICE TEST PENDING**  
Date: 6 October 2026

## Resolved target

Display name: **Aletheia Frequency Explorer**  
Owning repository: `KarstenEvans/aletheia-app`  
Target folder: `aletheia-frequency-explorer/`

No matching current folder/file was found on the repository main tree before creation. The supplied standalone HTML and the HTML inside the supplied ZIP were byte-identical and treated as the starting source.

## Existing-work gate

EXTEND SUPPLIED EXISTING APP.

The supplied v1 already implements stereo Web Audio oscillators, generated music beds, local recorded track support, timed browser speech, local text import and generated/sourced reflections. The v2 pass preserves that engine.

## User-requested improvements implemented

Modern mobile-first shell; burger/settings drawer; 300/303 Hz default; +3 Hz difference lock; delta/theta/alpha/beta difference presets; clearer evidence caveats; explicit story manifest; bundled story selector with local fallback; story-friendly speech defaults; optional Ike story-song paths; preserved generated calm music; resources page; two new original short narrations; preference persistence; preserved original v1 source.

## Story provenance

Observed user-supplied: Ike shield-bug story; Rocket/Flurkins short; Rocket/Flurkins long.

New: `Schrodinger-and-the-Pesky-Shield-Bugs.txt`; `Newt-Was-Here-First.txt`.

The new stories do not imitate a living writer's exact style. They use an original fast, absurd, child-friendly British comic narration. Canonical repository evidence consulted: `stories/bio-Schrodinger.md`, which defines Schrödinger as a tuxedo Dragonfold.

## Binaural research, checked 6 October 2026

A 2023 systematic review of EEG entrainment studies found inconsistent outcomes and substantial methodological heterogeneity. A memory/attention review also reported conflicting findings for some frequency bands. A 2026 theta-frequency systematic review/meta-analysis reports low-certainty evidence in some outcomes and continued limitations.

Decision: use 3 Hz only as the requested default difference and label it delta-range. Do not call 300, 303, 400, 403 or 3 Hz “ideal”.

Sources:
- https://pubmed.ncbi.nlm.nih.gov/37205669/
- https://pubmed.ncbi.nlm.nih.gov/35842538/
- https://pubmed.ncbi.nlm.nih.gov/42349368/
- https://www.who.int/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening

## Audio asset state

The companion local ZIP contains the three supplied Ike MP3s. The connected GitHub text writer has no direct local-binary upload field, so repository MP3 presence must be verified separately. The app fails visibly and supports local-audio selection if a repository MP3 is missing. The Calisthenics relaxation recording was deliberately not duplicated.

## Validation

Static local checks passed for required DOM IDs, story-manifest paths and JavaScript syntax. A headless Chromium render attempt timed out in the container with platform/DBus errors, so no interactive browser pass is claimed.

## Resume point

1. publish text assets under `aletheia-frequency-explorer/`;
2. upload the three MP3s to `aletheia-frequency-explorer/audio/` with a binary-capable route;
3. verify GitHub Pages and each audio/story fetch;
4. run desktop/mobile/Safari smoke tests;
5. only then mark LIVE_TESTED.
