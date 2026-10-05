# Aletheia 01 — Calisthenics Improve Audit

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — provenance, evidence, uncertainty and human control.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour and positivity-first presentation.

**Stage:** 01 / audit and design checkpoint  
**Status:** COMPLETE AUDIT; IMPLEMENTATION NEXT  
**Target:** `KarstenEvans/aletheia-app/Aletheia-calistenics/`  
**Checked:** 5 October 2026

## Purpose and user feedback

Run Aletheia Improve on the newly published Calisthenics Story App after direct user testing found three material problems:

1. background music is not audibly working;
2. the burger/menu implementation does not follow the established Aletheia/Storyteller interaction pattern closely enough;
3. the resources page exists in source but its Books & Gifts section is not a genuine calisthenics-specific catalogue and incorrectly hands the user to the generic Shopping app.

Additional user direction during the audit:

- the optional male narrator must use the **same UK English male preference logic as Aletheia Storyteller**;
- **George must be explicitly avoided**;
- the existing Storyteller and Frequency Explorer should be reused rather than inventing replacement behaviour.

## Repository instructions actually read

- root `AGENTS.md`
- root `README.md`
- `aletheia-GUI.md`
- `aletheia-dev.md`
- `aletheia-code.md`
- `tasks.md`
- `aletheia-improve/aletheia-improve.md`
- `shared/README.md`
- target `Aleteheia-calistenics.md`
- target `Aleteheia-calistenics-page.md`
- target `Aleteheia-calistenics.htm`
- target `Aleteheia-calistenics-rsc.htm`
- current `aletheia-storyteller.htm`

## Existing related work found

### Storyteller voice convention — OBSERVED

Current Storyteller selects the narrator in this order:

1. `en-GB` + name matching **Google UK English Male**, excluding **George**;
2. another `en-GB` voice with `male` in the name, excluding George;
3. another `en-GB` voice, excluding George;
4. any `en-GB` voice;
5. another English voice.

Calisthenics should reuse this exact preference order for its male option.

### Frequency Explorer music engine — OBSERVED

The earlier Aletheia Frequency Explorer already contains working Web Audio music-bed machinery:

- an AudioContext started from an explicit user action;
- a separate music master gain;
- reverb convolution;
- long drones;
- scale-based generated phrases;
- ambient, Thai-inspired, Japanese contemplative-inspired, Indian/Yogic-inspired and Tao-inspired definitions;
- optional local recorded audio.

The current Calisthenics implementation replaced this with much quieter custom oscillator levels. This is the likeliest reason the user hears no meaningful music.

### Shared Aletheia navigation/commerce rules — OBSERVED

GUI §21 requires the shared Aletheia Constellation near the page end on new/reworked public standalone HTML.

GUI §22 requires subject-specific Books & Gifts content to remain on the useful subject page until the final retailer handoff. It explicitly rejects using a broad unrelated shopping destination as the primary browse step when the relevant catalogue can be shown locally.

## Conflicts and defects

### 1. Music
**Observed defect:** current app claims Zen/Tao/upbeat music but user reports no audible music.

**Probable cause:** the generated bed is mixed at extremely low levels compared with the original Frequency Explorer engine.

**Improve route:** REUSE / LINK internally. Port the proven Frequency Explorer music-bed pattern into Calisthenics, add an audible music volume control, and duck the music under speech.

### 2. Menu
**Observed defect:** current page has both a bottom navigation bar and a custom drawer, while settings live on a separate screen. This does not match the Storyteller-style compact `☰ MENU` control the project already uses for story playback.

**Improve route:** MERGE / CONSOLIDATE. Use one accessible Storyteller-like menu with `aria-expanded`; put workout, voice, music, volume, captions/rest-facts/auto-advance, install/help and resource links there. Remove duplicate bottom navigation.

### 3. Resources / Books & Gifts
**Observed defect:** `Aleteheia-calistenics-rsc.htm` exists, but its Books & Gifts CTA diverts to Aletheia Shopping.

**Improve route:** EXTEND EXISTING. Rebuild the resource page as a real calisthenics-specific resource catalogue with:
- free programmes;
- healthy-ageing / balance / chair-support sources;
- relevant books;
- useful gift/equipment ideas;
- separate disclosure/provenance;
- shared Aletheia Constellation.

Do not treat free-to-view course imagery as reusable unless its licence expressly allows republication.

## Proposed implementation

1. Update canonical Calisthenics Markdown and page specification first.
2. Replace the quiet music engine with a direct adaptation of Frequency Explorer’s generated music bus.
3. Add two logical coach choices:
   - Caroline-style UK female;
   - UK English Male — Storyteller preference order, George excluded.
4. Move voice/music controls into the burger menu.
5. Add music volume and a visible audio status/failure message.
6. Remove duplicate bottom navigation.
7. Preserve exercise timer, zoom, countdown, rest-fact and pause/previous/next behaviour.
8. Rebuild `Aleteheia-calistenics-rsc.htm` as subject-specific Free Courses + Books & Gifts.
9. Add shared accessibility and Aletheia Constellation assets with static fallback links.
10. Run static syntax/reference checks, then distinguish repository checks from still-needed live browser/device tests.

## Evidence / uncertainty

- Repository contents and Storyteller code are directly observed from the current default branch.
- Frequency Explorer source was recovered from the user’s prior Aletheia files. Its Web Audio implementation is observed source, but it still requires live browser playback testing after porting.
- Browser voice availability varies by operating system/browser. “UK English Male” is therefore a preference rule, not a promise that one named voice exists on every device.
- Books/gifts links must not claim current stock/price unless checked and dated.

## Completed

- [x] Resolve canonical target and repository.
- [x] Read shared GUI/dev/code and Improve contracts.
- [x] Read current target source/spec/resource files.
- [x] Compare Storyteller narrator selection.
- [x] Recover the earlier Frequency Explorer music-bed implementation.
- [x] Diagnose resource-page handoff as conflicting with GUI §22.

## Remaining / resume point

Resume at **IMPLEMENTATION**:
1. update target Markdown/page spec;
2. update HTML/JS/CSS;
3. rebuild resource page;
4. add shared constellation/accessibility integration;
5. run static checks;
6. publish changes to the authorised repository;
7. verify the live GitHub Pages URLs separately.
