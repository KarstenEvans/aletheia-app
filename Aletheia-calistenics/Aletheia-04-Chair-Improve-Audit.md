# Aletheia 04 — Chair Calisthenics Improve Audit
[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance, uncertainty and human control.
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol) — optional respectful warmth.

**Date:** 2026-10-11
**Status:** Research and proposed implementation. Branch-only, no main-branch overwrite.
**Source repository:** KarstenEvans/aletheia-app / Aletheia-calistenics
**Aletheia Improve route:** EXTEND EXISTING + REUSE EXISTING PLAYER, no new app.
**Request:** Learn from chair Tai Chi marketing screenshots, NHS sitting exercises and existing Calisthenics; assess a separate 007-agent synthetic QA test.

## Observed repository state
- Existing Story Workout includes `Aleteheia-calistenics.htm`, `story-player.js`, `workout.json`, `poster-data.js`, resources page, manifest and service worker.
- `workout.json` currently contains five floor movements; no chair routine is in the active workout data.
- Narration, pause, preview, music, voice, timings, rest facts and the mobile burger/menu already exist and must not regress.
- The resource page **already links NHS sitting exercises**, but a playable seated course is missing.
- Historic Improve audit/implementation stages 01–03 exist; preserve them, do not rerun Improve recursively.
- Existing current UI hardcodes `workout.json` and a single cats poster. A chair course needs its own original movement display (or later a shared player abstraction).

## Source findings (visited 2026-10-11)
1. [NHS Sitting exercises](https://www.nhs.uk/live-well/exercise/sitting-exercises/) (NHS page last reviewed 2024-01-18): stable chair without wheels, stable positioning, gentle progress, repeat at least twice weekly; chest opener, upper-body rotation, hip march, ankle mobility, neck rotation.
2. [BHF chair exercises](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/chair-based-exercises): 10 movements; head turns, shoulder rolls, wrists, chest opening, torso rotation, knee hug, hip circles, ankle points; easier/harder versions and symptom-based stop advice.
3. [NHS older-adult activity recommendations](https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-older-adults/): daily activity, strength/balance/flexibility at least twice weekly, avoid long inactive periods, build up appropriately.
4. User-supplied Simple.life screenshots: short illustrated sessions, progressive days, guided chair movements and visual progress. These are **marketing screenshots**, not proof of medical claims or permission to reproduce imagery.

## What to ethically reuse
- Simple's **patterns**, not art/text/trademarks: easy onboarding, clear day-by-day plans, 5/10/15-minute choice, pictorial movement prompts, no-equipment options, visible progress.
- NHS/BHF **public exercise concepts and evidence**, summarised in original Aletheia wording with outbound attribution links.
- Aletheia **existing player controls and voice/music rules**, eventually share same engine.

## Do not copy
- Simple's exercise images, video stills, branded infographics or commercial questionnaire.
- Unsupported 28 kg weight-loss forecasts, body-fat changes, 'endomorph' diagnosis, stress/energy graphs, invented personalised clinical outcomes, countdown scarcity or automatic subscription.
- Chair dips or deep backward/torso stretches as blanket starter exercises: may stress shoulders/back, especially for people with existing symptoms.

## Recommended initial chair course
- 5-minute mobility sampler.
- 10-minute seated foundations.
- 15-minute relaxed movement flow / Tai Chi-inspired arm patterns.
- Movements: soft hand glide (original, Tai Chi-inspired and **not** claimed as formal Tai Chi instruction), shoulder rolls, wrist circles, small chest opening, comfortable seated hip march, ankle pumps, gentle neck turns, optional small upper-back rotation.
- Modes should be inclusive of limited mobility, not determined by age, BMI or stereotyped body type.
- Explicit optional skip of upper-back rotation and neck motion. No unsupported overhead lifts or chair triceps dips.
- No health history, weight, payment details or tracking required. Store at most benign local preference (if added later).

## Safety / clinical review gate
- Strong stable non-wheeled chair, well positioned on a non-slip surface, comfortable footwear, water nearby. Chair without arms is NHS default when appropriate; don't instruct people who need armrests/support to remove it.
- Motion within comfortable range; stop for chest pain, marked breathlessness, dizziness, faintness, new weakness/numbness or worsening radiating pain. Get appropriate medical guidance.
- This is general exercise content, **not** individual treatment or a substitute for physiotherapy.
- Neck turns, torso twisting, backward reaches, overhead motions, single-leg loading and seated dips must not be forced on people with symptoms.
- Chair exercises are not intrinsically 'calisthenics strength training'; clearly label mobility/flow vs progressive resistance/strength.

## Aletheia 007 Agent scope finding
Actual repository [aletheia-007-agent](https://github.com/KarstenEvans/aletheia-007-agent) is a privacy/data-exposure and lawful removal agent, **not** a trust-checker or workout designer. Its README says its search engine, encrypted vault and scheduler are not implemented. Do not claim to have run a deployed 007 agent.
Relevant synthetic test: user-controlled fitness-survey data, disclosure before querying external sources, no health profiling, candidate-vs-confirmed matches, redact identifiers, explicit approval before contacting a controller and never place actual user's health/profile data in public GitHub/CI. See Aletheia-06.

## Proposed implementation and limits
1. Add original `chair-workout.json` as a canonical draft course model, separate from floor `workout.json`.
2. Add `chair-exercises.htm`, a self-contained read-only preview using this exact dataset, with large controls, optional speech and user-paced progression. It is a standalone *course preview* within Calisthenics, not a new brand/app.
3. Add a simple link to it on the existing page on **review branch only**, preserving the cats' player and assets untouched.
4. Follow-up after human review: refactor/reuse the Story Workout timer/voice/music layer and replace schematic cues with original exercise artwork, properly checked.
5. Run static checks and source-path review. Actual mobile/desktop speech and device/clinical usability not yet verified.

## Acceptance criteria
- No overwrites on `main` without human review; unchanged original workout and cat artwork.
- At least five real seated movements and a source link for NHS; each offers a gentler path, contraindication caution and skip.
- Timer can pause, resume, stop; no autoplay into higher-risk movement without control.
- No subscription, accounts, external AI, cookies or collected health measurements.
- No copyrighted Simple/NHS artwork used.
- Aletheia 007 synthetic privacy test distinct from Trust Check.
- Source date, exercise scope and clinical disclaimers visible.
