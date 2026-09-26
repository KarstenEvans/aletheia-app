---
title: Aletheia Avatar Extra
status: IDEAS_AND_RESEARCH_NOT_IMPLEMENTED
date: 2026-09-26
companion_to: aletheia-avatar.md
scope: Aletheia Avatar and optional Aletheia Storyteller integration
---

# Aletheia Avatar Extra

Supplementary ideas, research, references and test plans gathered during the narrator/avatar investigation. **This is not a replacement for [aletheia-avatar.md](./aletheia-avatar.md), the Aletheia Protocol, Storyteller's current specification, or any current HTML implementation.** GitHub is the project master. This page is a retrieval/checkpoint document, not proof that tools were installed, renders succeeded, characters were generated, or features were published.

## Approved direction: small reusable presenter clips, not full talking-head stories

- Use short, reusable MP4 clips to welcome visitors to Aletheia Stories, introduce the audio storyteller, introduce characters occasionally, and invite feedback at the end. The ordinary story remains illustrated Markdown with narration (browser en-GB TTS, or a prepared MP3 and matching VTT).
- **Kim** is the onscreen host/creator-presenter of *Aletheia Stories*. His appearance can be inspired by a family photo and developed from a favourable expressive CapCut video. This is a creative narrator character, **not an assertion that the original historical person recorded the new words or that the voice is authentic**. Use an original, measured British male voice for now; an explicitly authorised recording/clone of the user's own voice is a possible future option.
- **ToomorrowMan** is the principal story actor/investigator and may have a short introductory cameo. This is the canonical spelling used in Storyteller (do not silently change it to Tomorrow Man / Modern Man).
- **AI-PI** is the sidekick and may pop up briefly to introduce himself. This is the canonical existing story spelling (not AI-BI/AIPI as a separate character).
- Story-specific titles are displayed or spoken by the existing storyteller voice, not newly generated with Kim's lip sync for every story. Avoid paying to regenerate common scenes.
- Preserve the optional Thalia humour, rather than inserting mandatory jokes into all intros. Three presenters are roles in the same story world, not three replacements for the normal narration system.

## Proposed short scripts / modular MP4 assets

Aim at roughly 10–16 spoken words per 8-second generation, adjusted to the actual audio duration and speaking pace. Record each line separately, retain original voice WAV/MP3 and captions, and verify lip sync. Nothing below has been rendered/tested yet.

| Asset idea | Speaker | Draft spoken text | Use |
| --- | --- | --- | --- |
| `kim-welcome.mp4` | Kim | "Hello, I'm Kim. Welcome to Aletheia Stories. Make yourself comfortable, and enjoy." | Reusable opening |
| `kim-storyteller.mp4` | Kim | "My friend tells the stories. He's rather shy, so you'll hear his voice, but won't see him." | Optional explanation |
| `kim-handover.mp4` | Kim | "Now, over to our storyteller. Enjoy the adventure!" | End of intro |
| `kim-closing.mp4` | Kim | "And that's our story! I hope you enjoyed it. We'd love to hear what you think." | Reusable closing |
| `kim-feedback.mp4` | Kim | "Have a question or a thought? Leave a message below. Thank you for listening!" | Show feedback form after playback |
| `aipi-intro.mp4` | AI-PI | "Hello! I'm AI-PI, the sidekick. Nice to meet you. You can read about me in my bio." | Optional in-story introduction |
| `toomorrowman-intro.mp4` | ToomorrowMan | "Hello, I'm ToomorrowMan. I investigate silly things. You can read about me in my bio." | Optional character introduction |

Alternative first test, shorter if needed: "Hello, I'm Kim. Welcome to Aletheia Stories. Make yourself comfortable, and enjoy." For testing, use a single original UK English narration track across engines. A title such as *ToomorrowMan and the Missing Yesterday* is handled dynamically from the story manifest/title, rather than baked into all opening videos.

## Storyteller integration concept (not implemented)

- Use a **large responsive in-page modal/overlay**, not a separate browser popup. It may occupy most of the screen and then return to the existing playback position and state.
- First visit: user-initiated Start/Play, optional introduction, captions, Skip Intro, Mute, Close. Respect autoplay-with-sound restrictions, mobile, keyboard, focus restoration and reduced-motion preferences. Give a useful still/text fallback where video fails.
- Kim's opening may play a small playlist of prepared assets; the ordinary story starts afterwards. An optional AI-PI/ToomorrowMan cameo may be triggered deliberately by a story cue, not injected into every story automatically.
- Close: play Kim's short closing and then display a feedback form. Proposed fields: optional name, message/question, consent/privacy information, Send. Do not expose mailbox credentials/API secrets. Email delivery would need a separately designed, approved endpoint (e.g. small Cloudflare Worker with spam controls) and an explicit Send action; no email form/delivery is currently implemented by this note.
- Existing biographies are already registered in `stories/stories.json`: `stories/bio-ToomorrowMan.md` and `stories/bio-AI-PI.md`. Use the actual Storyteller story index and bio deep-link behaviour, not invented pages. Example player: https://karstenevans.github.io/aletheia-app/aletheia-storyteller.htm . Bio links should be checked against the actual deployed query parameter before publishing.
- A simple proposed future story command could identify an approved clip, but **do not claim that such a tag exists yet**. Before implementing, inspect the current tags/Embed/Video logic in `aletheia-storyteller.md`, `aletheia-storyteller-page.md` and the HTML. Avoid changing ordinary Markdown parsing or MP3/VTT cue synchronisation accidentally.
- Keep voice profiles for existing character dialogue distinct from short MP4 cameos; retain the story narrator as the selected en-GB browser voice or prepared recorded track.

## Media and character appearance: what actually exists

- An expressive portrait was developed with CapCut using the user's old family photograph. The CapCut version provides the appealing colour treatment, warm face, eyebrow/eye expressions and more modern-looking presentation. Treat this **derived video**, rather than the unmodified original photograph, as the preferred master for the creative Kim narrator.
- The actual MP4 uploaded and inspected in this conversation was **about 8 seconds**, portrait **720 × 1280**, **24 fps** and included audio. It does not show the reported dramatic 7–9-second hand-raising laugh. Earlier Kimi notes describing 0–15 seconds and a laugh at 7–9 seconds appear to concern a different/longer clip. Do not cut this 8-second source at 7–9 seconds; preserve it intact.
- A longer original CapCut export may exist but has **not been established as the current working source**. If supplied later, inspect it before planning cuts.
- Four candidate stills were extracted from the 8-second upload in the earlier chat (they are conversation artifacts, **not yet committed media in this repository**): 4.0 s neutral, 6.75 s warm (preferred initial image-driven test), 7.5 s friendly introduction, 6.125 s expressive reaction. Source frames preserve the actual generated appearance; they are not fresh face-generation results. Ask user to reattach/download original media in a new session; do not invent paths.
- If a longer clip really has a distinct laugh, keep a reaction excerpt separately; try a quiet near-frontal speaking master. A repeatable narration loop should avoid obvious repeated gestures and abrupt head-position jumps.

### First/middle/last still experiment

Where a generator permits first/middle/last or first/last-frame controls: use the **same actual neutral source PNG** as the opening and closing reference, with an expressive middle frame if useful. Ask for calm natural blinking, subtle head tilts, consistent face/clothes/lighting/background and closed resting lips at both ends. This can help continuity, **but does not guarantee the model's pixels match**; for a guaranteed frame-level transition, edit the same real still into the beginning/end afterwards. Intro/outro assets need clean joins, not an indefinitely looping talking head.

## Rendering pipelines under investigation

| Engine / approach | Inputs and purpose | Status / caveat |
| --- | --- | --- |
| **MuseTalk 1.5** | Existing CapCut MP4 + replacement recorded/TTS WAV or MP3; lip-sync preserving the source performance where possible. Supports reusable avatar preparation. | First local/web successful render **not yet verified**. Need test visual seams, lip sync, frame cycling and dependency/licence compatibility. It does not itself turn text into speech. |
| **LivePortrait** | Source still or portrait video plus driving-motion video, for expression and head-motion retargeting, not the final audio lip-sync by itself. | Optional later. Do not install until needed. |
| **BytePlus Lumina / Seedance Video Edit** | Existing MP4 + audio/prompt, attempt localized redubbing while retaining the face and treatment. | Exact mouth-only editing and pixel-exact unchanged regions **not proven**; test a short clip before buying credits. Model/version, terms and controls can change. |
| **BytePlus OmniHuman 1.5** | A favourable near-frontal CapCut-derived keyframe + audio + optional presenter prompt. | Fresh generated performance rather than directly retaining all motion from the CapCut MP4. Confirm live API limits/pricing before using. |
| **Kling Avatar 2.0** | Image/keyframe + audio or service TTS + restrained performance directions. | Cloud option. Free-credit access to individual modes is account-dependent; do not promise it is free. |
| **Kling Motion Control** | Character image + reference performance video to transfer expressions/motion. | Different from changing the existing video's dialogue. |
| **EchoMimic / other HF demos** | Image + audio talking portrait experiments. | Useful comparisons, but demo Running status is not proof of successful generation. |
| **Wav2Lip open research version** | Video + audio lip sync. | Published project imposes personal/research/non-commercial constraints; not a safe automatic production default for affiliate-connected publication without permission. |
| **Kokoro TTS / original recorded voice** | Generate suitable en-GB British male WAV/MP3 separately. | Investigate actual selected voice/licence and listen before publication; user's own voice later only with their consent. |

Reference starting points (research pointers, not approved integrations):
- https://github.com/TMElyralab/MuseTalk
- https://github.com/KwaiVGI/LivePortrait
- https://huggingface.co/spaces/TMElyralab/MuseTalk
- https://huggingface.co/spaces/henrybit/musetalk-1-5
- https://github.com/antgroup/echomimic
- https://github.com/Rudrabha/Wav2Lip
- https://ai.byteplus.com/lumina/en
- https://ai.byteplus.com/en/playground
- https://kling.ai/quickstart/kling-ai-avatar-2-user-guide
- https://ai.google.dev/gemini-api/docs/veo
- https://huggingface.co/models?pipeline_tag=text-to-video&sort=trending

Cloud vendors may change costs, queues, copyright/consent requirements, trial credits, regional access or input capabilities. Verify at the moment of an actual run. A model catalogue is not necessarily a runnable hosted app. An unofficial site naming Veo is not automatically Google's official product.

### Example continuity instruction (cloud model that truly accepts video + audio edit)

    [REFERENCE] @video1 is the authoritative expressive CapCut narrator; @audio1 is the new owned UK English narration.
    [PRESERVE] Face, colour, hair, suit, background, framing, smile, eye/head motions and light.
    [TRANSFORM] Replace spoken words and lip movement to synchronise with @audio1.
    [CONSTRAINTS] No replacement identity, new scene, cuts, music, subtitles, extra gesture or laughter.
    [TEST] Check actual output for facial drift and accurate speech; prompt wording cannot guarantee these results.

For MuseTalk, do not use the cinematic prompt: provide the **MP4 + WAV/MP3** in its interface/configuration.

## Online MuseTalk status and hardware observations (September 2026; recheck)

- The official `TMElyralab/MuseTalk` Hugging Face Space showed a **runtime error and missing files** (MuseTalk, SD VAE, Whisper and DWPose) in the user's screenshot. This is server configuration, not evidence that their MP4 was too big; waiting for a user quota to reset does not repair server files.
- The community `henrybit/musetalk-1-5` Space was located as an alternative ZeroGPU demo, but **an end-to-end successful output was not verified** in this conversation. Daily allowance and queue conditions may change.
- The Fujitsu LIFEBOOK E734 system report showed Windows 10 Pro 64-bit, i5-4300M (2 physical cores / 4 threads), 16 GB RAM (two 8 GB modules), Intel HD Graphics 4600, and no NVIDIA GPU listed. Its available RAM was very low at the time of the report. It cannot use NVIDIA CUDA as currently configured.
- MuseTalk code paths have exhibited CPU device fallbacks, but **full CPU-only operation, dependency compatibility and useful rendering performance on this i5 are unverified**. If experimenting, close memory-heavy programs, start with about 2 seconds of audio/video in full precision (not fp16), log errors and elapsed time. Do not promise an overnight job will work.
- The older Acer Aspire 7738G may have a GT 240M-era GPU and 32-bit Windows. Its age, GPU and 32-bit PyTorch limitations make it unsuitable as an assumed MuseTalk worker. Changing to 64-bit alone does not supply modern CUDA hardware.
- An additional old Dell Xeon desktop has an NVIDIA card of **unknown model and VRAM**. Check that first (Windows Device Manager / PowerShell Win32_VideoController / `nvidia-smi` if installed), plus PSU, connectors, physical clearance, motherboard and OS before buying a used card. A render-farm idea is a future experiment only, not implemented. Distribute self-contained narration segments, not isolated lip-sync frames; benchmark each real worker before including it.
- Consider a suitable paid-per-use GPU only after explicit price and privacy approval. Do not use a managed work computer or upload personal family media to it without permission.

## Production model, privacy, resources and licences

- Stories and advice remain free. Optional disclosed book/tool affiliates on separate resource pages must not alter fact-checking, story content, technical comparison or engine choice. A free story with indirect affiliate benefit is not automatically guaranteed non-commercial by placing the animation on a different page.
- MuseTalk's own code/model terms permit commercial use subject to dependencies and appropriate rights to visual/audio input. Check exact current versions and other dependencies before publication. Wav2Lip's original research terms restrict outputs; do not try to sidestep a licence through page structure or by removing an affiliate button.
- No user media, the historical family portrait, extracted frames, narration or private system report should be uploaded to public GitHub without separate approval. Keep generated media labelled synthetic/creative where appropriate, preserve source ownership/consent, and record provider upload/retention as VERIFIED or UNKNOWN.
- Possible separate Lumina affiliate resources page was discussed, **not applied for or approved**. If pursued, disclose referral links and keep research independent.

## NotebookLM evidence and handoff

NotebookLM is a supplementary **source discovery and YouTube transcript research assistant**, not an editor of the canonical Aletheia Protocol. The uploaded misnamed `aletheia-protocol-notebookLM.md` was intended as **Aletheia Avatar research**, not a proposed Protocol replacement. Rename/classify as avatar research when integrating, do not silently change the Protocol repo.

A YouTube URL in NotebookLM normally provides the available transcript/captions, not guaranteed full spoken audio or visible text embedded in video frames. Where authorised, compare independently transcribed source audio/video and add screenshots for on-screen URLs/commands. Label source statements, independently verified facts, hypotheses, conflicts and missing evidence. Use notebook-specific instructions to request detailed Markdown with exact citations/URLs; custom instructions cannot magically change the YouTube import mechanism.

Related earlier research exports include comparative OmniHuman/Seedance notes and structured 30-second prompt examples. Preserve them as discovery materials. Treat assertions such as exact pixel preservation, precise mask internals, unsupported 'uncompressed PNG', fixed promotional prices, and source-video support as hypotheses unless substantiated.

## Next checkpoint / acceptance tests (all pending)

1. Reacquire/identify the actual full CapCut original, safely back it up, and settle whether a longer laugh segment exists. Approve Kim's default master and still(s).
2. Generate/record one original 5–8-second en-GB voice clip. Save script, audio, duration, consent/voice provenance.
3. Try one working MuseTalk hosted or compatible local render of the existing 8-second MP4 plus new audio; check mouth, eyes, facial continuity and elapsed time. A Space loading is not a PASS.
4. If useful, compare one OmniHuman keyframe+audio and one Seedance video-edit result using *the same audio* and cost ceiling (default £0).
5. Approve intro/closing/cameo scripts; create consistent image/first-last frame guidance and actual MP4s plus text/caption fallbacks.
6. Plan Storyteller integration separately, preserve existing commands/audio/captions and test skip, mobile, Safari, keyboard, focus and feedback consent before merging HTML.
7. Confirm actual rights/licences, third-party retention and any resource links before publication. Log test receipts and update the main Avatar specification only for accepted behaviour.

## Related app source of truth

- [Main Avatar specification](./aletheia-avatar.md)
- [Aletheia Storyteller specification](../aletheia-storyteller.md)
- [Storyteller page/build specification](../aletheia-storyteller-page.md)
- [Aletheia app ideas](../ideas.md)
- [Aletheia Protocol (unchanged)](https://github.com/KarstenEvans/aletheia-protocol)
