# Aletheia Writing Vibe — page build contract

Status: static/AI handoff 1.0. Last reviewed 2026-09-27.
Canonical URL: https://karstenevans.github.io/aletheia-app/aletheia-writing-vibe/aletheia-writing-vibe.htm
Rendered file: aletheia-writing-vibe.htm
Source: aletheia-writing-vibe.md
Resources: aletheia-writing-vibe-rsc.htm

## Mandatory protocol/output behaviour

Show both protocol references from the app and at the top of every generated research-pack Markdown. External AI instructions require both references near the beginning of the final subject-vibe Markdown, including insufficient-evidence outcomes. Search scope defaults to public author research; a direct user click opens multiple targeted search query links individually, and selected AI must actually browse if supported. Do not pretend manual search links are automatic online research.

## Actual page order
Use fictional Joe Bloggs for all public demo placeholders. The header includes a right-aligned Resources link as well as the footer link. Resource page links back to the app at its top and bottom. No real-person example corpus in public source.
Header, short limitation banner, name/identity and source URL, pasted sample/upload input, LOCAL CLEAN + PREVIEW and PREPARE RESEARCH PACK actions, attribution/source preview and counts, evidence gate/warning, provider selection and copy/download/open buttons, targeted blog/byline/public-post search links, resources, protocol footer.

## Runtime
Static client-side, no API keys, trackers beyond repository-required production Awin tag, no autonomous retrieval or upload. Use FileReader for UTF-8 text; strip repeated Facebook chrome; preserve original copy in browser only. Accept .txt/.md/.csv/.html and pasted text. Sanitize all output by textContent/value, not innerHTML. User-entered URL is optional search hint, not a fetched source. External AI handoff prompt instructs public verification; page does not claim that a source was viewed. Avoid storing source text in localStorage. The browser can download a Markdown research pack, not a false completed author profile.

## Behaviour
Name required; if absent show useful guidance. Up to 1 MB text upload; warn rather than silently truncate. Parser identifies standalone author heading with following date and stops at next author block. It removes repeated standalone 'Facebook', UI markers and Wordle diagrams; marks shares/quotes as needing human review. User can edit cleaned sample before pack. Evidence insufficiency displayed, never portrayed as confirmed. Generate slug from entered name, show proposed final filename. Search buttons open public search query only on user click, in separate new tab. AI provider opens from direct click; copy is a separate click, not claimed automatic paste. Offline local cleaning remains available.

## Pack
Explicit independent search on named person, disambiguation, author verification, exclusion of third-party reposts, dated evidence register, >2 corroborating passages, no evidence -> no vibe, original illustrative prose only, canonical file naming, Aletheia/Thalia references and review-before-publication. Full supplied cleaned text embedded in pack, with source-not-verified label.

## Accessibility
Semantic labels, live status, visible focus, responsive single/two column layout, tap size, keyboard, no motion dependence, high contrast. Safari/Chromium feature detection not OS discrimination.

## Verify
Static JavaScript parser, duplicate IDs, end tag, policy/source and injection safety checks. Device testing Windows Chrome/Edge, Android Chrome and Safari/WebKit pending. GitHub Pages and source/response check pending until independently observed.
