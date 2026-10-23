# Aletheia Voice Studio v0.2.0

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) | [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

## Start

1. Unzip the complete distribution without moving its subfolders.
2. Open `aletheia-voice-studio.htm` for microphone recordings and text descriptions, or open `voice-vibes/index.htm` to browse the example library.
3. On GitHub Pages / localhost, the library reads `voice-vibes/voices.json` and the external MD/TXT/WAV files. With `file://` Chrome may block directory fetches. Use **Load local voice-vibes folder** and choose the extracted `voice-vibes` folder.
4. To create a new character reference ZIP, use the library's builder: enter an original description, exact reference transcript, and WAV. It writes three same-stem files in a folder, without uploading them.
5. For actual text-to-speech, open [Qwen3-TTS](https://huggingface.co/spaces/Qwen/Qwen3-TTS) in a new window from either page. Choose Voice Clone (Base), supply the WAV + matching text, then enter new words to generate. The browser cannot register a WAV as a new installed speechSynthesis voice.

## Example voice reference folders

- `voice-vibes/John Wayne VoiceVibe/` includes original Western synthetic voice reference, reference TXT (review required), voice MD, companions, PDF and a separate short test take.
- `voice-vibes/Mork VoiceVibe/` includes the user-supplied alien-comedy synthetic voice reference, reference TXT (review required), voice MD, companions and PDF. Updated description has greater bounce and expressive changes than original WAV.
- `voice-vibes/Robin Williams VoiceVibe/` includes a distinct, improved comic narrator prompt, intended script, companions, and PDF. **No WAV yet.** Generate a new original sample; don't mislabel the Mork WAV.

These are creative homages to broad genre/performance techniques, not voice clones or imitations of the real people. Their names are for internal study. Avoid presenting the synthetic outputs as the original people, and check other parties' trademarks, privacy and publication rights before hosting publicly.

## Validated and unvalidated

- Confirmed user WAVs are genuine 24,000 Hz mono 16-bit PCM samples by probing headers.
- Static JS parsing and manifest-path checks are performed locally; ZIP creator STORE format is independently CRC-checked by Python.
- Chromium in this execution environment refuses all file and localhost navigation with `ERR_BLOCKED_BY_ADMINISTRATOR`, so **live browser UI and microphone interaction could not be tested in this run**. Actual Chrome / Edge tests are required on your computer.
- TXT reference transcripts are **unverified drafts** based on the text in the conversation, not frame-aligned transcripts. Correct them word-for-word before Qwen Base ICL cloning.
- No API key, external AI calls, repo push, identity model training, or GitHub publication took place.

## Source and reuse

The v0.2.0 build extends the existing local v0.1.4 Voice Studio without changing its recording logic. It reuses Aletheia's existing Storyteller, Writers library and Humour concepts instead of making competing apps. The companion character files are local examples only.

Official reference code: https://github.com/QwenLM/Qwen3-TTS and https://developers.openai.com/api/docs/guides/custom-voices .

## GitHub publication note (v0.2.1)

Canonical path: `aletheia-app/aletheia-voice-studio/`. This public GitHub release contains the working static HTML, prompts, transcripts and explicit manifest. The user-supplied WAVs and research PDFs remain inside the complete separate conversation ZIP pending binary upload; they are not represented as live files. Robin Williams Mini-AI-Me and Humour are linked to their existing repository homes, not duplicated. Future scripts omit spoken stage directions; existing reference transcripts preserve audibly spoken instruction words pending clean replacement WAVs.
