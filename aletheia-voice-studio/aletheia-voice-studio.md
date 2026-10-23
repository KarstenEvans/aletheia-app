---
title: Aletheia Voice Studio
version: 0.1.1
status: LOCAL_PROTOTYPE_NOT_PUBLISHED
date: 2026-10-23
owner: Aletheia
app_type: portable Markdown specification and optional static browser interface
---

# Aletheia Voice Studio

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) | [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

## Outcome / decision

**CREATE NEW, REUSE/LINK:** a small static **Voice Studio** for drafting original voice descriptions and recording a speaker's own authorised audio, while **LINKING** to the existing Aletheia Storyteller narration controls. Do not recreate Storyteller. Keep provider integrations optional.

**No GitHub changes authorised or made.** Prototype is local, not deployed, and has not been microphone-tested on real devices.

## Direct voice test links (added 2026-10-23)

**Official OpenAI prompt-to-voice Playground:** https://platform.openai.com/audio/voices/edit

The static HTML places this link immediately beside **Copy description** in the voice-designer tab. The user clicks Copy, opens the Voice Playground, signs into their separate API Platform account, and pastes manually. **No automatic transmission or script injection.** Creating a voice from text is free; listening via GPT-Live is billed. ChatGPT Plus credits do not pay for API listening.

Official evidence: https://developers.openai.com/api/docs/guides/custom-voices

## Supported workflows

1. **Voice from description:** choose an original voice profile, edit a <= 2,000-character description, copy it to the OpenAI voice Playground or authorised API client. OpenAI announced general API availability on 16 October 2026. Generation/creation is free; GPT-Live usage has separate charges. Prompt-generated voices work with GPT-Live, **not** the usual Text-to-Speech or Realtime endpoints.
2. **Own voice from recording:** read the official consent phrase in an independent recording, then record a 10–60-second speech sample. Capture audio locally in a secure-context browser, listen and export. **This alone does not make a clone:** API access for recording-based voices is limited to eligible organisations and requires uploads through an approved server/API integration. Consent and sample must be from the same speaker.
3. **Portable records:** export a Markdown note with a description, script, source receipts, provider compatibility and user-specified recording purpose. Do not include raw voice recordings in public GitHub repositories.
4. **Existing narrator:** use Aletheia Storyteller for story playback; only consume a provider voice ID after the user authorises and a supported backend exists.

## Explicit use boundaries

- No imitation/impersonation of public figures or fictional characters. Historical descriptions can be researched; the generated voice must be an original adult voice.
- Explicit, uncoerced consent by the actual speaker; don't accept archival celebrity audio as a substitute.
- Label outputs as AI-generated. Preserve provenance markers/watermarks. Never claim a generated voice is a specific real person.
- No automatic upload, no cloud storage, no tracking, no localStorage of microphone data, no publication without separate owner authorisation.
- Never put an OpenAI API key into public GitHub Pages HTML. API calls requiring secrets must use an independently authorised secure backend.
- On insecure context, denied microphone permission, or browser lacking MediaRecorder, fail clearly and retain the portable text workflow.
- Do not assume that an on-device recorded WebM file is universally importable until MIME support is verified.

## Research profile: Robin Williams (historical analysis, not a clone)

**Purpose:** Identify broadly useful techniques from a celebrated performer while designing a clearly independent synthetic voice.

**Evidential limits:** Original interview links and transcript/article sources were identified. This is a qualitative, non-instrumental reading of the public record; no raw audio was downloaded, listened to through an analysis player, or measured for pitch/formants. Do not claim forensic acoustics.

- **Accent and register:** broadly neutral American English in ordinary interview speech; predominantly middle/lower-middle masculine register.
- **Timbre:** chest-centred warmth, occasional breathiness or rough edge; brightens markedly when enthusiasm rises.
- **Pitch:** conversationally elastic, with expressive lifts, low confidential asides and short peaks rather than a monotonous contour.
- **Cadence:** natural thought-sized phrases, filled pauses, quiet reflective moments, accelerating bursts and precisely timed silences.
- **Articulation:** clear but informal; emphatic words may be clipped or stretched for storytelling.
- **Delivery contrast:** spontaneous humour and the ability to return rapidly to sincerity and contemplation.
- **What to avoid in a new voice:** reproducing distinctive personal identity, characters, recognisable catchphrases or audio from archival interviews.

**Judgement:** Create an original, warmly textured, thoughtful storyteller with flexible rhythm. Do not use Robin Williams's name as a voice-generation instruction.


## Original voice-creation description (no identity reference)

**Profile name:** The Curious Storyteller

**Description length:** 1227 characters (OpenAI max 2,000).

> An original adult masculine speaking voice, warm and conversational, with a broadly neutral American English accent. Use a natural middle-to-low speaking register, rounded chest resonance and a gently textured timbre with a subtle airy, slightly husky edge in softer passages. Speech should be clear and intimate, never artificially polished or announcer-like. Maintain a thoughtful, engaging baseline with highly expressive but controlled melodic variation. In reflective passages, slow slightly, lower the vocal effort and allow meaningful pauses and soft sentence endings. In moments of discovery or humour, brighten the tone, lift the pitch naturally and accelerate into short, articulate bursts before returning to a relaxed cadence. The rhythm should feel spontaneous and responsive, with gentle emphasis on surprising words, occasional amused warmth, and clear changes of pace. Convey intelligence, curiosity, kindness, imaginative playfulness and genuine attentiveness. Avoid constant high energy, exaggerated character accents, shouting, forced comedy, excessive gravel or theatrical imitation. Keep the voice distinctive and original, suitable for extended interviews, imaginative narration and friendly conversation.

## Suggested own-voice script

Read this in your own comfortable speaking style, in a quiet room, approximately 30–55 seconds, monitoring the recorder's actual time.

> This morning, I opened a window and heard the first sounds of the city waking up. Somewhere a dog barked, a bicycle bell rang, and a neighbour laughed at something I couldn't quite hear. Why do we remember the smallest moments so clearly? Perhaps it is because ordinary life contains more stories than we expect. Think about the number forty-seven. It sounds unremarkable, doesn't it? But forty-seven tiny decisions can change an entire day. Today, I want to listen more closely, ask better questions, and see what I discover.

## OpenAI exact English consent phrase

This is a **separate recording**. The exact phrase may change; verify against the live OpenAI guide before submission.

> I am the owner of this voice and I consent to OpenAI using this voice to create a synthetic voice model.

## OpenAI-specific limits and access status (checked 2026-10-23)

- Voice from description: generally available for API customers; prompt creation costs £/$0 but GPT-Live runtime is billed.
- Max prompt: 2,000 characters. Optional `script_hint` up to 2,000 characters.
- Creation returns a saved **voice ID**, not audio.
- Prompt-generated voices: GPT-Live only. Can save up to 100 per organisation.
- Voice from recording: eligibility approval required. Two recordings: exact consent phrase + sample in the same person's voice.
- Speech sample: 10–60 s recommended, max 60 s, up to 10 MiB; formats include WAV, MPEG, OGG, AAC, FLAC, WebM, MP4. At most 20 recorded voices per organisation.
- Browser-recorded WebM may report a codec-qualified MIME string which the API rejects; use a supported MIME base type when creating an upload, without changing file bytes.
- Check **commercial licensing/terms, privacy, consent revocation, audio handling, costs and model support** before enabling production use.
- ChatGPT Plus is not the same as an API subscription or an entitlement to restricted custom voice cloning.

## v0.1 Interface checklist

- [x] Original descriptive prompt preset with editable text
- [x] Character counter; copy/export as Markdown
- [x] Direct official OpenAI Voice Playground link next to prompt and copy, with clear manual-paste and billing instructions
- [x] A short reading script and official English consent phrase shown separately
- [x] Separate mic recorder modes for sample and consent, local listen/download
- [x] Privacy and explicit permission notices
- [x] Link to documentation; no live API connection
- [ ] Browser and microphone QA on Chrome/Firefox/Safari, mobile and HTTPS GitHub Pages
- [ ] Accessibility screen-reader and keyboard device QA
- [ ] Provider adapters for other voice technologies, after checking permissions
- [ ] Approved backend for optional API voice creation (not required for core app)
- [ ] Owner authorisation and GitHub publication

## References (primary sources before commentary)

- [OpenAI Custom Voices guide](https://developers.openai.com/api/docs/guides/custom-voices)
- [OpenAI Voice Creation API](https://developers.openai.com/api/reference/resources/audio/subresources/voices/methods/create)
- [OpenAI October 2026 changelog](https://developers.openai.com/api/docs/changelog)
- [Charlie Rose interview (2002)](https://www.youtube.com/watch?v=-ZMsZUyjXdg)
- [Charlie Rose interview (2011)](https://www.youtube.com/watch?v=zUYMGhQdA9M)
- [CBS This Morning interview (2013)](https://www.cbsnews.com/news/robin-williams-talks-the-crazy-ones-life-after-heart-surgery-and-divorce/)
- [ABC Australia interview/tribute transcript](https://www.abc.net.au/news/2014-08-12/robin-williams---a-genius-who-gave-more-than-he/5666720)

## Source-read record

Current Aletheia repository read-only: `AGENTS.md`, `ALETHEIA-SAFE-BOOTSTRAP.md`, `README.md`, `ideas.md`, `tasks.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `aletheia-storyteller-page.md`. Aletheia voice app not found in known app index or idea-title review; further inventory required prior to any repository write. Existing Storyteller's narrator controls are reused rather than duplicated.

**Stop condition:** Deliver local prototype and report unverified microphone behaviour. No push, deployment, or external API calls.

## v0.1.2 microphone access / viewer repair

- **Observed user report:** In an embedded viewer `NotAllowedError` is returned by getUserMedia; Record button highlights, 00:00 remains, Stop and Download inactive.
- **Root-cause class:** browser-level permissions / Permissions Policy. Cross-origin or sandboxed previews may prohibit microphone usage. JavaScript cannot bypass the host's policy; the user must run the HTML in a standalone browser tab with permission to record.
- **Behaviour fix:** detect secure context, media API and Permissions Policy status before recording; provide immediately visible diagnostics and an explicit standalone workaround.
- **Error fix:** distinguish NotAllowedError, NotFoundError, NotReadableError; report actionable steps and update pending/recording UI.
- **Recording fix:** robust stop/finalisation, size check, track cleanup, local playback/download only after capturing actual audio data.
- **Privacy:** audio remains local in the current browser until the user downloads it. No API keys / cloud upload / external recording service.
- **Delivery:** local v0.1.2 ZIP and single HTML file, not published to GitHub. Syntax and simulated browser tests recorded separately.

## v0.1.4 recording text sequence (2026-10-23)

1. **The Raven**, first stanza of public-domain 1845 poem by Edgar Allan Poe. Source: https://www.poetryfoundation.org/poems/48860/the-raven . User can record a separate spoken sample in their own voice.
2. **The Rainbow Passage**, the standard speech-elicitation text credited to Grant Fairbanks (1960). App reproduces only a brief opening sentence, links to https://www.mq.edu.au/faculty-of-medicine-health-and-human-sciences/departments-and-schools/department-of-linguistics/our-research/phonetics-and-phonology/speech/australian-english-pronunciation-and-transcription/the-rainbow-passage for the complete standard reading, and provides a fully original longer rainbow-themed alternative. Text area may be replaced by user-supplied passage. The original Aletheia passage MUST NOT be labelled as the standard Rainbow Passage.
3. Both are separate recording workflows and downloads. Preserve consent as its own separate recording. Maximum 60 seconds per recording. One sample is normally sufficient for eligible API voice cloning, not necessarily both.
4. Live microphone test still pending; the embedded-viewer warning and fallback are preserved. No publication to GitHub.

## v0.1.4 — Qwen3-TTS compatible WAV export (2026-10-23)

- Default output for consent, Raven, Rainbow: **WAV 24 kHz mono PCM 16-bit**.
- The browser first records into the codec-supported container, then decodes it locally using Web Audio, downmixes/resamples with OfflineAudioContext, and encodes a real RIFF/WAVE PCM file with proper headers. This is **not** WebM data relabelled `.wav`.
- Do not expose a misleading WAV download until conversion succeeds. While converting, show status and disable new recording attempts. WAV is available after Stop and conversion.
- If conversion fails, explain why and optionally save the original recording as backup explicitly named with its real extension (not usable for Qwen unless later converted).
- For Qwen3-TTS official Hugging Face demo select **Voice Clone (Base)**, upload the WAV, and paste the exact text spoken into **Reference Text** (unless choosing x-vector-only). The **Voice Design** tab takes a textual description instead of an audio reference. Qwen does not need the OpenAI-specific consent recording for its reference voice input; retain this recording only for providers that require it.
- All conversions are browser-local. Personal audio never gets uploaded by the Aletheia app.
- Official Qwen demo: https://huggingface.co/spaces/Qwen/Qwen3-TTS ; source app.py: https://huggingface.co/spaces/Qwen/Qwen3-TTS/blob/main/app.py
- Test: verify actual downloaded WAV headers, codec, channel count, sample rate, playback, permission-denied handling, and three independently recorded passages. A simulated microphone is not a real device test.

## v0.2.0 VoiceVibe library

New external manifest `voice-vibes/voices.json` and `voice-vibes/index.htm`. Folders and same-stem `.md`, `.txt`, `.wav` are separate from HTML. Normal web hosting loads automatically; `file://` requires selecting local folder. The library can create a three-file ZIP locally, and Qwen link opens in a separate window (new tab fallback). Existing recorder remains unchanged.