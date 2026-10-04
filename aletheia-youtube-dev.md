# Aletheia YouTube development contract
[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)
Status: design specification, not functioning uploader.
Hierarchy: AGENTS.md > root GUI/dev/code > Aletheia Improve > Storyteller page/spec > this YouTube channel-specific contract. For Knowledge YouTube collection preserve its separate README, index.html and index.json.

## Exact command flow
1. Fetch fresh exact full `stories/<slug>.md` and installed image inventory. Story text and on-scene commands are primary, not a summary.
2. Resolve voice tags, dialogue and cinematic [image], [zoom], [pan], [wide], [hold]; map each cue to narration and image. Preserve provenance, original creator and human editor decisions.
3. Generate `stories/<slug>-youtube-video.md`: FULL scene-by-scene spoken narration, visual cue/estimated durations, caption text/VTT cue plan, title/description/link credits, rights, accessibility, asset-status receipts and suggested production prompts.
4. Verify actual image binaries and filenames, story/camera hotspots, content completeness and missing text; never claim inferred automatic timestamps are synchronised. Video generation needs real rendering and timed captions.
5. If a video renderer/editor is later connected, design manual preview, explicit human approval, and real export. API credentials stay server-side; no unattended posting, copyright-infringing copying or guessed links.
6. Track content/spec ready, assets ready, rendered, captioned, human-approved, uploaded and live-tested as distinct statuses.
7. Run Aletheia Improve preflight on story plus specific video checklist; fail publication until renderer/files and platform links verified.
