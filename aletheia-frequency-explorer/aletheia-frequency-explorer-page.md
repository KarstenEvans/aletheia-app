# Aletheia Frequency Explorer page contract

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs provenance, evidence and uncertainty.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) is the optional humour/positivity companion.

Status: v2 implementation target  
Rendered file: `aletheia-frequency-explorer.htm`  
Primary specification: `aletheia-frequency-explorer.md`  
Resource page: `aletheia-frequency-explorer-rsc.htm`  
Last reviewed: 6 October 2026

## Purpose

Let a user start a simple binaural/story session immediately, with detailed settings moved into a mobile-friendly burger drawer.

## Source of truth and reading order

1. `aletheia-frequency-explorer.md`
2. this page contract
3. `stories/stories.json`
4. `audio/audio.json`
5. supplied/original v1 source under `source/`
6. rendered HTML

Shared repository `aletheia-GUI.md`, `aletheia-dev.md` and `aletheia-code.md` remain authoritative for cross-app behaviour.

## Binaural behaviour

Default: left/base 300 Hz, right 303 Hz, difference lock on.

When the lock is enabled, changing base frequency or difference recalculates right = base + difference.

Preset differences: 3 Hz delta-range, 6 Hz theta-range, 10 Hz alpha-range, 18 Hz beta-range. Custom/unlocked values remain permitted.

Band labels are descriptive only. Never promise entrainment, sleep, focus, anxiety reduction, pain relief or treatment.

## Story behaviour

Selecting a bundled story and pressing Load fetches the text read-only from `stories/`, displays it, and switches to story-friendly speech defaults. If fetch fails, show a visible local-file fallback.

## Audio behaviour

Generated v1 music beds remain. `Aletheia story song` uses the selected relative MP3 path under `audio/`. Missing repository MP3s must fail visibly and local audio remains available.

## Accessibility / privacy

Keyboard-visible focus, Escape closes drawer, reduced motion, no autoplay before user action. Local files remain local. Preferences may use localStorage.

## Acceptance tests

STATIC: required DOM IDs, JavaScript syntax, manifest parse and story paths. DEVICE/LIVE still required after GitHub deployment.
