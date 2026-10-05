# Aletheia 02 — Calisthenics Improve Implementation

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — provenance, evidence, uncertainty and human control.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour and positivity-first presentation.

**Stage:** 02 / implementation and repository validation  
**Status:** REPOSITORY IMPLEMENTATION COMPLETE; LIVE/DEVICE QA PARTIAL  
**Target:** `KarstenEvans/aletheia-app/Aletheia-calistenics/`  
**Implemented:** 5 October 2026

## Purpose

Implement the corrections identified in Stage 01 after user testing:

- make the background music genuinely audible and controllable;
- follow the existing Storyteller-style menu pattern rather than a separate drawer/bottom-nav design;
- reuse the Storyteller UK English male narrator selection and explicitly avoid George as the preferred voice;
- replace the generic Shopping handoff with a real calisthenics-specific `-rsc.htm` containing free resources, books and gifts.

## Changes completed

### 1. Music engine

`story-player.js` now reuses the proven shape of the earlier Aletheia Frequency Explorer Web Audio implementation:

- AudioContext created only after the user starts a workout;
- separate music master gain;
- generated convolution reverb;
- low-level drones;
- scale-based generated phrases with envelope, filter, pan and wet/dry paths;
- subtle BPM pulse;
- visible music volume control;
- music ducking while trainer speech is active;
- generated Zen Garden 60 BPM, Tao Flow 60 BPM and Upbeat 120 BPM profiles;
- optional local audio file, kept on the user's device;
- Music Off;
- visible audio status/failure messages.

No commercial recording is bundled.

### 2. Voice

The menu now offers:

- **Caroline — UK female**
- **UK English Male — Storyteller**

The male resolver copies Storyteller's current preference order:

1. `en-GB` + `Google UK English Male` and not George;
2. another `en-GB` voice containing `male` and not George;
3. another `en-GB` voice and not George;
4. any `en-GB`;
5. another English voice.

The menu displays the actual device/browser voice selected and includes **Test voice** and **Stop voice**.

Because browser voice inventories differ between systems, this is a preference rule rather than a guarantee that one particular voice name exists everywhere.

### 3. Menu/navigation

The first build's duplicate bottom navigation has been removed.

The page now has one Storyteller-style `☰ MENU` with:

- `aria-expanded`
- `aria-controls`
- Home
- Workout list
- trainer voice
- speech rate
- music profile
- music volume
- local licensed-track chooser
- audio status
- rest facts
- captions
- auto advance
- install
- resources
- Books & Gifts
- Aletheia Apps

Escape and outside-click close the menu. Opening the menu does not replace the current workout screen.

### 4. Workout controls

The live player keeps direct cassette-style controls:

- Previous
- Pause / Resume
- Next
- Stop

The exercise zoom, active timer, round ten-second announcements, final ten-to-one countdown, rest timer, random rest fact and next-exercise preview remain.

### 5. Resources / Books & Gifts

`Aleteheia-calistenics-rsc.htm` is now a subject-specific resource page rather than a redirect to Aletheia Shopping.

It contains:

- free calisthenics programme links;
- NHS older-adult, strength/flexibility, balance, sitting and exercise guidance;
- recorded-music discovery links with licence warnings;
- a local book catalogue;
- a local gift/equipment catalogue;
- commercial disclosure;
- editorial/source links kept distinct from commercial links;
- the shared Aletheia Accessibility layer;
- the shared Aletheia Constellation.

Book cards currently include:

- Hybrid Calisthenics — Hampton Liu;
- Built to Move — Juliet & Kelly Starrett;
- You Are Your Own Gym — Mark Lauren;
- Strong Women Stay Young — Miriam E. Nelson.

Gift ideas include mat, phone/tablet stand, Bluetooth speaker, resistance bands and support blocks/cushion. No unverified product price or stock is claimed.

### 6. Shared Aletheia UI

The reworked public pages use the shared Aletheia Constellation pattern with static fallback links rather than inventing a separate star menu.

### 7. PWA stale-cache fix

Service-worker cache version is now `aletheia-calistenics-v2`.

On activation it removes older Calisthenics caches. HTML/JS/JSON use a network-first path so a previous installed/test copy is less likely to keep serving the first build after the repo has changed.

## Files changed

- `Aleteheia-calistenics.htm`
- `Aleteheia-calistenics-rsc.htm`
- `Aleteheia-calistenics.md`
- `Aleteheia-calistenics-page.md`
- `story-player.js`
- `story-player.css`
- `service-worker.js`
- root `tasks.md`

Stage 01 audit remains at:

- `Aletheia-01-Calisthenics-Improve-Audit.md`

## Validation actually performed

### Static/source validation — PASS

The implementation source was checked for JavaScript syntax before publication.

After publication, the current repository files were fetched again and checked for the required implementation markers. All of the following passed:

- menu button and ARIA attributes present;
- duplicate bottom navigation absent;
- resource and Books & Gifts routes present;
- shared Constellation integration present;
- Storyteller male voice rule present;
- George exclusion present;
- Frequency Explorer-derived music functions present;
- music volume control present;
- resource page contains free programmes, books and gift cards;
- generic Shopping handoff absent;
- one Awin MasterTag on the resource page;
- service-worker v2 cache migration present;
- canonical Markdown contains both protocol references;
- page specification contains acceptance tests.

### GitHub repository publication — COMPLETED

Updated files were written successfully to the `main` branch and fetched back from GitHub.

### GitHub Pages browser verification — INCONCLUSIVE

The intended public URLs were requested through the available web retrieval tool, but that tool returned “URL not accessible via this tool” for both pages. This is **not evidence of a 404 or broken deployment** and is not recorded as a live pass.

Intended public URLs:

- https://karstenevans.github.io/aletheia-app/Aletheia-calistenics/Aleteheia-calistenics.htm
- https://karstenevans.github.io/aletheia-app/Aletheia-calistenics/Aleteheia-calistenics-rsc.htm

## Remaining tests

- [ ] Windows Chrome: hear Zen/Tao/upbeat generated music at default volume.
- [ ] Windows Edge: same.
- [ ] Confirm narration audibly ducks music and music returns afterwards.
- [ ] Confirm `UK English Male — Storyteller` resolves to the desired installed voice and does not prefer George.
- [ ] Android Chrome: same URL, menu, voice/music, timers and touch controls.
- [ ] Android install / Add to Home Screen.
- [ ] Safari/WebKit where practical.
- [ ] Open the live `-rsc.htm`, verify the resource cards and the Books & Gifts section after GitHub Pages refresh.
- [ ] Check the Bookshop/Awin outbound routing in a real browser before treating conversion tracking as verified.

## Resume point

Open the deployed Story App on Windows first.

1. hard-refresh/reopen the page if an old installed/PWA copy is visible;
2. open `☰ MENU`;
3. set Music to Zen Garden 60 BPM and volume to roughly 50%;
4. press Test voice for Caroline, then switch to UK English Male and test again;
5. start the workout and confirm music starts, ducks under speech and continues through the timer/rest;
6. open Resources → Books & Gifts and confirm it is the Calisthenics resource page, not Shopping.

Record only observed browser/device results, then fix any remaining live issue without re-running Improve recursively.
