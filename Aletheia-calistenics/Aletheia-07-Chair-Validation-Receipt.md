# Aletheia 07 — Chair Calisthenics Improve Validation Receipt

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — provenance, evidence, uncertainty and human control.
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol) — optional positive presentation.

**Date:** 2026-10-11
**Target:** `KarstenEvans/aletheia-app`, branch `improve/chair-course-nhs-20261011`
**Status:** STATIC CHECKS PASS; LIVE / DEVICE / CLINICAL REVIEW NOT PERFORMED.
**Authority:** User requested Aletheia Improve of chair exercises; changes deliberately staged in a separate branch. User has **not** approved merge to main.

## Checked source and instructions
- Repo: `AGENTS.md`, README, GUI, dev, code, tasks, ideas.
- Aletheia Improve: canonical spec, registry/memory, README and preflight scope.
- Calisthenics: current canonical .md, page.md, .htm, resource page, workout data, standalone service worker, existing audit stages 01–03.
- Aletheia 007 Agent: README and canonical .md (v1.1.0-draft); no executable 007 runtime.
- Shared Constellation: `shared/README.md` and existing Calisthenics usage.
- Evidence: NHS sitting exercises; NHS older-adult activity; BHF seated exercises (2026-10-11).
- Original user-supplied commercial screenshots used as design-pattern inspiration only; not published with the proposed source.

## Static source checks performed
**15 / 15 checks passed** on review branch:
1. JSON data parses and has nine entries / three modes.
2. Exercise IDs unique.
3. Every routine exercise ID resolves.
4. Per-exercise easier, caution, source, spoken cues present.
5. Embedded offline page data matches canonical draft JSON.
6. Browser inline JavaScript syntax compiles.
7. Original Cats workout blob hash equals main version: **unchanged**.
8. Exactly one new review-only link on existing Calisthenics HTML.
9. No Simple competitor images.
10. No real survey name/weight/medical data included.
11. Optional neck/torso movement unchecked by default.
12. Auto-advance unchecked by default.
13. Pause/resume/Stop + last-step skip control present in source.
14. NHS/BHF sources linked.
15. Shared Constellation five static fallback anchors and script referenced.

The checks are static structural and syntax checks. They are **not proof** that speech, timer transitions or button behaviour work in all browsers. No health-condition-specific suitability has been clinically validated.

## Remaining real release gates
- [ ] Open page locally (GitHub 'Raw' file download) and verify usable desktop Chrome/Firefox.
- [ ] Verify mobile narrow width, pinch zoom, touch target sizes and readable captions.
- [ ] Test narration on/off, missing voices, paused narration, timer expiry, Next/Previous, session switch, Stop, tab background.
- [ ] Test assistive technology keyboard navigation, screen reader announcements and reduced-motion.
- [ ] Confirm any course-specific original exercise diagrams show correct movement before replacing schematic.
- [ ] Evaluate clinical exercise content and warnings with qualified professional.
- [ ] Decide whether to integrate shared Story Workout engine instead of maintaining preview's minimal independent timer.
- [ ] Confirm site-wide licensing/commerce/Awin policy before production publishing; preview intentionally contains no advertising/analytics scripts.
- [ ] Verify the shared Constellation date-switch behaviour and live links in actual GitHub Pages, not only source.
- [ ] If production updates service worker, ensure cache version and manifest/asset list account for new page.

## 007 privacy test status
- [x] Reviewed repo and identified correct privacy/data-removal scope.
- [x] Wrote synthetic specification test `Aletheia-06-007-Agent-Privacy-Test.md`.
- [ ] Actual agent/runtime execution **not possible yet** (README states runtime does not exist).
- [ ] When a runtime exists, use fictional test identities and explicit scope; don't publish user intake/health data.

## Next action
Human preview and approval. Only after approval should changes be integrated into the main Aletheia player and considered for main-branch merge.
