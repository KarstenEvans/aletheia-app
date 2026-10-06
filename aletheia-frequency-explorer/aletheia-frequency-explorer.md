# Aletheia Frequency Explorer

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs provenance, evidence and uncertainty.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) is the optional humour/positivity companion.

Status: **IMPLEMENTED LOCALLY / STATIC TESTED / GITHUB TEXT DEPLOYMENT TARGET**  
Version: 2.0.0-improved  
Reviewed: 6 October 2026

## Purpose

Aletheia Frequency Explorer is a static browser tool for experimenting with stereo-separated binaural tones, quiet generated music, optional recorded story songs, browser speech and short Aletheia story texts.

It is a creative/wellbeing listening tool, not a medical device or treatment.

## Improvement decision

The supplied v1 app already had a working Web Audio engine, procedurally generated music, local audio loading, browser speech, timed reflections and local `.txt`/`.md` loading. The Improve pass therefore preserves that engine rather than rewriting it.

The v2 change is mainly interface, safer defaults, story discovery and clearer evidence language.

## Binaural defaults

- Base/left carrier: **300 Hz**
- Right carrier: **303 Hz**
- Default difference: **3 Hz**
- “Keep right ear at base + difference” is enabled by default.
- Entering 200 Hz therefore produces 200/203 Hz while the lock is enabled.
- Presets: 3 Hz delta-range, 6 Hz theta-range, 10 Hz alpha-range, 18 Hz beta-range.
- Users can unlock the channels or enter a custom difference up to 30 Hz.

There is **no claim that 300 Hz, 400 Hz, 3 Hz, or any other setting is an ideal therapeutic frequency**. The difference frequency is compared with conventional EEG-band ranges for orientation only. Published reviews report heterogeneous and sometimes conflicting entrainment results.

## Stories

The app reads an explicit `stories/stories.json` manifest. It does not enumerate GitHub.

Bundled texts:

1. Ike the Kitten and the Green Shield Bug
2. Rocket and the Flurkins Play Games on the Moon
3. Rocket and the Flurkins Play Games on the Moon · long
4. Schrödinger and the Pesky Shield Bugs
5. Newt Was Here First · Newt & Tiff

The first three preserve user-supplied text. The latter two are new original Aletheia short narrations. A request to copy a living author's exact style was not used; the new texts instead use an original energetic British children's-comedy mode with absurdity, punchy dialogue and a warm ending.

The canonical Storyteller bio for Schrödinger was consulted for the Dragonfold premise. The new childhood story avoids changing the canonical biography.

## Audio

The app retains procedural generated beds and local recorded-audio loading.

Expected repository story-song assets:

- `audio/Ike-Sour-Tea.mp3`
- `audio/Ike-Sour-Tea-02.mp3`
- `audio/Ike-the-Shield-Bug.mp3`

The Calisthenics relaxation track is intentionally **not duplicated** into this app. Keeping that recording in its owning app avoids library drift; Frequency Explorer already has generated calm beds.

## Privacy

- No account or server is required for core operation.
- Local text/audio is read in the browser.
- Local files are not uploaded by the app.
- Ordinary preferences may be stored in browser `localStorage`.
- No diagnosis, medical history or health profile is stored.

## Evidence and safety

Start at a low volume and stop for ringing, pressure, pain, dizziness or discomfort. Browser volume is not calibrated sound-pressure level.

Headphones or earbuds are normally required for separate left/right tone presentation.

Evidence links and checked dates live in `aletheia-frequency-explorer-rsc.htm`.

## Remaining verification

- Chrome/Edge interactive audio test
- Firefox test
- Android Chrome test
- Safari/WebKit test
- GitHub Pages live path test after deployment
- Confirm each MP3 is actually present in `audio/` on GitHub before claiming repository playback
