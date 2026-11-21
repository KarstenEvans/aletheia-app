# Aletheia 05 — Chair Movement Page Specification
[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence and human control.
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol) — optional respectful positive presentation.

**Date:** 2026-10-11
**Status:** review-only functional preview. No merge to main; no live device checks passed.
**Files:** `chair-workout.json` (authoritative draft), `chair-exercises.htm` (self-contained static prototype embedding the same JSON for file:// previews).

## Purpose and scope
Add a real seated mobility option *inside* Aletheia Calisthenics without changing the original Calisthenics with Cats course or its player. Chair movement is described accurately as mobility and easy coordination, not a replacement for progressive resistance, balance-specific rehabilitation, authentic Tai Chi teaching or medical treatment.

## Page / interaction order
1. Existing Calisthenics back link and Resources link.
2. Useful purpose and evidence-first introduction.
3. Safety and stable-chair instructions before Start.
4. Choice of 5-minute sampler, 10-minute foundations or 15-minute relaxed flow (approximate estimates).
5. Opt-in narration, opt-in auto-advance, opt-in neck/upper-body turning. Optional movements excluded by default.
6. Schematic original seated-person art; per-movement title, cue, gentler variant, risk note.
7. Timer, progress, Previous, Start/Pause/Resume, Skip/Next, Stop.
8. Movement list, evidence sources and navigation back.

## Data contract
One `course` object with `sources`, `routines`, `exercises`, `intro`, `chair`, `disclaimer`, `updated` and `status`.
Each routine has `ids`, `secs`, `rest`. Each exercise has `id`, `title`, `intro`, `cue`, `easier`, `caution`, `source` and optional `optional`.
The HTML embeds a snapshot of `chair-workout.json`, so it runs directly when downloaded without browser file:// fetch restrictions. This is a pragmatic review-only arrangement. On production integration, load one canonical JSON and remove duplicate embedded copies, or add an automated sync check.

## No-regression boundary
- Original `workout.json`, `story-player.js`, `poster-data.js`, `story-player.css`, voice selection, music, timer semantics, rest facts and cats course stay untouched on this draft branch.
- Original `Aleteheia-calistenics.htm` may receive only one additional navigation link to this preview.
- No automatically opened third-party websites or workout-tracking service.
- No uploads, personal profiles, sensitive health questions, payment or cookies.

## Clinical and copyright boundaries
- An NHS/BHF exercise is a public technique; do not copy protected site photos, illustrations, course scripts or page design.
- Avoid diagnostic or individualised claims.
- Do not instruct forced neck rotation, spine twisting, chair dips, deep backbends or overhead exercises.
- Explain that chair needs and limitations vary; a user who relies on chair arms/support should not be told to abandon them.
- Stop for concerning symptoms and seek appropriate medical help.
- Human professional review is recommended before a public health-facing release.

## Accessibility and user control
- Uses semantic buttons, labelled select, live status, reduced-motion CSS, contrast-conscious colours, tap-sized controls and responsive layout.
- Narration starts after a genuine Start interaction. Narration fallback proceeds if voice unavailable.
- Timer starts after exercise instruction narration ends; large visible digits.
- Auto-advance is OFF. Turning movements are OFF. Hiding tab pauses the routine.
- Full browser screen-reader and mobile speech testing not yet performed.

## Static validation / checks to perform
1. JSON parses; IDs unique; every routine ID resolves; no empty exercise labels.
2. The embedded dataset matches JSON byte-for-byte after removing whitespace differences.
3. HTML is parseable; inline JavaScript passes `node --check`.
4. All relative project links are valid; external source links correct.
5. No direct competitor images/phrases or sensitive user data.
6. Button state/speech/timer/scroll/reduced-motion keyboard/mobile tests before main merge.
7. Clinical review for suitability of movements, risk warnings and optional modes.

## Later integration (not part of this preview)
- Shared Story Workout engine should load different workout data and a per-course original poster or step illustrations.
- When this is stable, offer a visible 'Chair Movement' course selector alongside Cats, preserving the existing behaviour.
- Optionally add a slow, authentic taught Tai Chi class from a licensed qualified provider with explicit attribution; don't imply our invented hand patterns are certified Tai Chi.
