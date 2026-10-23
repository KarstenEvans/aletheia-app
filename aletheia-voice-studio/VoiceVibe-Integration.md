# Aletheia VoiceVibe / CharacterVibe integration proposal

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) | [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

Version 0.2.0 | 2026-10-23 | LOCAL DRAFT ONLY | Not published

## Decision

**EXTEND existing Voice Studio** with a file-backed VoiceVibe library. **REUSE/LINK**, not duplicate, Mini-AI-Me profiles, Aletheia Humour, Aletheia Writers and Aletheia Storyteller. The `*.md` character files in this package are research/examples, not new apps and not authoritative personal memories of the historic individuals.

## Logical progression

1. Original description makes a *designed synthetic voice*. Qwen3-TTS VoiceDesign renders a WAV for a specific text.
2. The WAV plus verified exact transcript becomes a reusable *reference voice* for Qwen3-TTS Base's ICL voice cloning.
3. The model or API synthesises **new text** using that reference. A WAV file itself cannot speak new text or be installed as a voice through the browser Web Speech API.
4. `VoiceVibe.md` describes sound and rights/provenance. `VoiceVibe.txt` mirrors every spoken word in the reference WAV. The WAV stores one authorised sample. `voices.json` explicitly lists the folders and companion files.
5. Separate persona layers provide optional writing style, humour, ethical/safety boundaries, and image aesthetic. A multi-modal **CharacterVibe** is a composition of these components, not a real or autonomous reincarnation of a named person.

## Contracts

- `voices.json` has `schema`, `voices`, each `id`, `label`, `status`, `files` (description / transcript / audio), `companions`, `history_pdf`, `transcript_verified`, `original_synthetic_character`. `audio=null` means no recording exists.
- Path names are portable and have the same stem within each profile's folder. Additional test takes remain under `takes/` and never override the canonical WAV.
- A static GitHub Pages HTML cannot enumerate arbitrary folders or load `file://` JSON reliably. Hosted mode fetches an explicit manifest; direct local mode uses an explicit user folder selection. Browsers do not gain filesystem permissions automatically.
- External testing is a user-initiated, separate-window Qwen link; no API tokens are stored in HTML. A local model runtime or approved remote API would be a separate, opt-in adapter.
- Private human voice recordings must not be committed to a public GitHub repository. Public example WAVs need review of rights and publication permissions even when synthetic.

## Two character examples vs one unfinished template

- **John Wayne-inspired:** fictional Weathered Frontier Marshal with a WAV/TXT/MD triple; PDF and Mini-AI, Humour, Writers, Image Vibe research. Wayne did produce and direct; his film dialogue cannot be assumed to have been written by him.
- **Mork-inspired:** fictional Bewildered Cosmic Correspondent with a WAV/TXT/MD triple. The *new* prompt adds the missing pitch bounce and impulsive comic timing. The already-provided WAV is an **old take**, not evidence that the revised prompt works.
- **Robin Williams-inspired:** different original Quick-Silver Humanist with MD and fresh target script; no new audio has yet been generated. Do not rename the Mork WAV to fill the gap.

## Backlog, in sensible order

P1. User checks reference transcripts against playback. Correct the .txt or record fresh material; avoid spoken square-bracket stage directions in cloning references.

P1. Browser QA of new library in Chrome/Edge on file://, localhost or GitHub Pages; actual microphone, exported 3-file ZIP, audio playback and Qwen popup. These tests could not run inside this execution environment due browser administrator blocking.

P2. Try local Qwen3-TTS Base first with one verified reference and a new sentence, measure quality and generation cost/latency. The static VoiceVibe viewer should stay useful without model download.

P2. Connect one **original** CharacterVibe as an optional narrator in Storyteller only through a documented audio-generation engine or pre-rendered clips. Do not add arbitrary WAV to `speechSynthesis.getVoices()`, because the browser API has no such registration capability.

P3. Link/hand off mini character personas and writing/humour/image vibe MD to the existing Aletheia mini-AI, Humour and Writers collections after reviewing their canonical source contracts. No duplicate copy of those engines.

P3. Investigate TTS engine licences, reuse permissions, synthetic disclosure, potential estate/publicity/endorsement restrictions before public gallery publication.

## Primary technical sources

- [Qwen3-TTS official repository](https://github.com/QwenLM/Qwen3-TTS)
- [Qwen3-TTS model inference APIs](https://github.com/QwenLM/Qwen3-TTS/blob/main/qwen_tts/inference/qwen3_tts_model.py)
- [OpenAI custom voices](https://developers.openai.com/api/docs/guides/custom-voices)
- [MDN SpeechSynthesisVoice](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices)
- [John Wayne's production career](https://www.johnwayne.com/about/john-waynes-career/)
- [BFI Robin Williams career](https://www.bfi.org.uk/features/robin-williams-career-pictures)

## Publication split

This public GitHub source release does **not** include WAV or PDF blobs yet; the complete downloadable v0.2.1 ZIP contains them. `voices.json` uses `audio:null` on the website to avoid broken links. This does not mean the user lacks recordings. Do not claim a voice is available to listen to on the website until the real WAV is uploaded. Do not duplicate the existing Robin Williams profile or Aletheia Writing Vibe engine.
