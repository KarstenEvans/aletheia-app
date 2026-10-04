# S001 image manifest — Pip and the Maple's Secret

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) · [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md)

**Receipt:** 4 October 2026. Six required WebP files were checked against the user-uploaded SHA-256 manifest; the seventh is a separately supplied alternate scene-4 leaf composition. All seven are **PREPARED LOCALLY, NOT INSTALLED IN THE GITHUB REPOSITORY**. They must not be marked published.

| File under `stories/` | Scene | SHA-256 |
|---|---|---|
| `Pip-and-the-Maples-Secret-01.webp` | Door That Glowed | `cd2b85c3820e5334e130ca5d342f20517770f95698b70493399ef29a2ba1b9cd` |
| `Pip-and-the-Maples-Secret-02.webp` | Whispering Leaf | `9c15b5edc143f57d664abd3af3dfb48171eda9cded0b35228337a8417109bb30` |
| `Pip-and-the-Maples-Secret-03.webp` | Bee's Secret | `91ad0d953914a9fe55c8fe04a823d5fd8056588e26d84c3018ef5f45cb210797` |
| `Pip-and-the-Maples-Secret-04.webp` | Hidden Colour | `08e9e46b0159ab4d10e970213507319e9b6262d5f8f14e5019eedca3893fb3bf` |
| `Pip-and-the-Maples-Secret-05.webp` | Memory in the Bark | `3747e67ac5a7cfab467179b7a3c08d6797f705d0f3bc43d504bdbbe61f8aa92e` |
| `Pip-and-the-Maples-Secret-06.webp` | Smile That Was Waiting | `406b8f6cd93d1884b4bc7e0b771fdae04d4288e1b00a91bc23c33c933a9e6f2a` |
| `Pip-and-the-Maples-Secret-07.webp` | BONUS alternative magical leaf view, section 4 of -post.htm | `213779cc787d4994124cf761aaf5b28ab61b8af1f6924f96d2480815f320a97d` |

All seven images measure 1672 × 941. Files 01–06 match the supplied image-upload-manifest.json checksums. Scene 07 was newly converted from user-supplied `Enchanted Autumn Leaf Discovery-7(1).png`; it is not a seventh chapter nor currently referenced in the canonical six-scene Storyteller Markdown.

## Active output mappings
- `stories/Pip-and-the-Maples-Secret.md` uses six `[image;...]` cues; visual camera hotspots were adjusted following an approximate scene-by-scene visual comparison.
- `stories/Pip-and-the-Maples-Secret-post.htm` contains all six full scenes, six `img` elements linking exact scene filenames, a conditional optional scene-4 `-07.webp` image, graceful fallback text, a native burger menu, and shared Constellation navigation.
- The old **uploaded** standalone `Pip-and-the-Maples-Secret-post.htm` is a **short earlier draft**: do not replace the longer GitHub version with it.
- An upload ZIP has been generated within the user's conversation, containing 7 WebPs, their checksums, an offline artwork-review page and instructions.

## Publication gate
1. Human uploads the seven WebPs through GitHub's browser under `KarstenEvans/aletheia-app/stories/`; an uploaded ZIP file alone is NOT enough.
2. Fetch back each public path and compare binary checksums if feasible.
3. Run `node aletheia-improve/preflight.mjs --story Pip-and-the-Maples-Secret --strict` after the repository checkout contains the images; do not confuse static results with actual testing.
4. Verify Storyteller narration, image camera targeting, responsive/caption UI, seasonally correct shared navigation, proper player manifest and all resource links.
5. Ask Kes to review before making the story publicly discoverable in `stories/stories.json`.

**Current result:** S001 is still IN PROGRESS, NOT TESTED for live cinematic playback.
