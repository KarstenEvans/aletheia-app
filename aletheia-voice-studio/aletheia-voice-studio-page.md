# Aletheia Voice Studio: page build and test specification

Version: 0.1.1 | Date: 2026-10-23 | Status: LOCAL DRAFT (not deployed)

Canonical data/specification: `aletheia-voice-studio.md`
Portable single-file HTML rendition: `aletheia-voice-studio.htm`
Proposed future repo path (unapproved): `aletheia-voice-studio/`

## Decisions

- CREATE NEW only for the source voice-descriptor and the consent/recording front end; REUSE/LINK the existing Storyteller for narration and existing Aletheia GUI/Dev contracts.
- Do not add cloud dependencies or upload anything automatically. No generated voice is produced locally by this app.
- Do not use someone else's archival recording to train a voice; no impersonation of public figures or fictional characters.
- Keep private voice samples off public Github source and off localStorage.
- Split voice prompt length cap and microphone capture into two independent workflows. The original research analysis belongs in the Markdown source, not the generation prompt.

## UI / interaction contracts

- Mobile-first card layout; button clusters rather than full-width stacked controls where space allows.
- Three tab controls: Describe, Record own voice, Guide. Tabs work by mouse, touchscreen and keyboard activation.
- Editable text description, preset selector and live 2,000-character cap.
- Copy via clipboard with fallback and Markdown export via Blob download.
- Direct external link beside the description to the official OpenAI Voice Playground (`https://platform.openai.com/audio/voices/edit`); manual paste, no transmission by Aletheia. Clearly state separate API billing for GPT-Live listening.
- Distinct consent and sample scripts; explicit 'Record' and 'Stop' controls; microphone permission requested only on button click.
- Record format selected using browser MediaRecorder feature detection and export extension grounded in selected recording MIME type.
- Automatic stop after 60 seconds. Playback and download only after a successful recording.
- Clear microphone permission/unavailable message; preserve description workflow when unavailable.
- No autoplay, tracking, CDN dependencies, third-party scripts or server API calls.
- Keep explicit 'not a cloned voice generator' warning and provenance/consent notices visible.

## v0.1.1 change note

Added the direct OpenAI voice-testing destination after verifying the official Custom Voices guidance and public Voice Playground URL. UI opens it in a separate tab and does not transfer descriptions automatically.

## Validation performed (2026-10-23)

- PASS: static JavaScript syntax check with Node v22 (`node --check`).
- PASS: static controls and source checks, including both microphone modes, exact consent string, no external JS, and 2,000-character prompt limit.
- NOT TESTED: actual microphone permissions, recording duration, capture format, playback, download and input accessibility on physical Chrome/Firefox/Safari, desktop or mobile.
- NOT TESTED: sending to OpenAI API or audio identity/quality. No API key or restricted custom voice access available.
- NOT PUBLISHED: user approval needed to commit/publish.

## Outstanding release checks

- Secure-context HTTPS or browser-local microphone behaviour on target browsers; test denied permission and unsupported media.
- Real audio sample and consent across Chrome, Firefox, Safari, phone browsers; file type/size checks, ≥5s speech, at least 15 transcription tokens.
- Manual keyboard, zoom, screen reader, focus visibility and reduced-motion checks.
- Review voice impersonation safeguards before any provider integration.
- Optional backend only with explicit project-scoped approval and server-side key management.
- Future Storyteller integration: accept only approved voice IDs and explicitly authorised provider adapters.

## v0.1.2 viewer-specific microphone fallback

The preview may block microphone access under Permissions Policy, even if `getUserMedia` exists. Display an in-panel diagnostic. When definitely blocked, disable Record; in an uncertain iframe, permit attempt and show helpful `NotAllowedError`. Never claim to override a host viewer's policy.

In standalone supported contexts, Record prompts for permission, Stop finalises a valid Blob, and Download persists the local audio file. Test with fake media devices and explicitly blocked iframe, then mark actual device test pending.

## v0.1.3 Reading samples

The record page presents public-domain Poe poem excerpt first, followed by Rainbow Passage overview, a brief excerpt, the original-source link and user-editable original Aletheia rainbow reading. Both have separate recorder states and download controls, while the consent recording remains independent. Sample recordings are private browser data. Check full-text permissions before distributing Fairbanks's original passage.

## v0.1.4 — WAV output contract

All 3 recorders must download real RIFF/WAVE 24,000 Hz mono 16-bit signed PCM. Use built-in Web Audio to decode original MediaRecorder data and an OfflineAudioContext to downmix and resample. Encode correct little-endian WAV PCM headers. Reject empty/failed conversion; offer original-audio recovery only under true extension. Continue to honour microphone permission restrictions from v0.1.2. Copy of original may contain private biometric voice data, so never upload automatically. Provide link to official Qwen3-TTS Voice Clone (Base).

## v0.2.0 VoiceVibe library

Static VoiceVibe manifest; resource folders; Chrome file-mode folder selection; all links point outside current working page; zip creator output requires real WAV header; no real-time synthesis or Chrome SpeechSynthesis voice registration.
## GitHub v0.2.1 publication

VoiceVibe text assets live at `voice-vibes/`; public WAV and PDF blobs await binary upload. The manifest does not advertise files that do not yet exist on GitHub. Prompt/recording workflow remains in `aletheia-voice-studio.htm`, while the separate library is `voice-vibes/index.htm`.
