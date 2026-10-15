# Aletheia What's On: HTML page specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) for evidence and uncertainty. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) for optional humour. Every generated Markdown must include both references after its title.

Status: Implemented static AI handoff, live deployment/browser QA pending.
Canonical public URL: https://karstenevans.github.io/aletheia-app/aletheia-whatson/aletheia-whatson.htm
Rendered file: aletheia-whatson.htm
Primary specification: aletheia-whatson.md
Reviewed: 2026-10-14

## Core
At top ask only "Where are you?" with place input and Find What's On button. Empty field prompts for city, no AI window opened. Manual place wins; no default Swindon, no tracking. Give an optional AI selector and settings under disclosure, not another required step. When clicked, synchronously open exactly one selected AI tab and copy generated prompt; show accessible manual copy/paste fallback. AI researches cinema, performances, fairs, markets, arts, shopping, walking, history, sacred sites, food, bars, sports, attractions and official local guides with dated citations.

## Inputs, storage and files
Location string, provider, period, interest preferences. Persist only user-approved settings in browser localStorage; initial state blank location. Export via Blob download with filename settings.md; browser controls Downloads. Import requires manual file selection, parsing fenced keys under Settings with validation and length restrictions; no arbitrary HTML execution. No automatic filesystem access or server save. Import and export include Aletheia and Thalia URLs.

## Status and privacy
Clearly mark static HANDOFF; external AI gets location only after deliberate paste/send. Browser page makes no claims that it itself checked real-time venues. Use labelled controls, keyboard focus and mobile wrapping. Show clear error/copy fallback. Browser/device QA and GitHub Pages live fetch still pending. No automatic map, bookings, paid API or affiliate ranking.

## Acceptance
Test blank place, Niš Serbia, Nice France, multiple provider handoffs, manual copying when clipboard blocked, import/export settings, malicious import text and mobile layout. Verify that the GitHub Pages link resolves after commit and that index listing is clickable.
## Priority and location improvement (15 October 2026)
Selected topic chips are an ordered list, not a search exclusion filter. The complete destination-research task remains in the AI prompt and prioritized topics appear first in click order, with all other categories after them. Browser geolocation is optional and invoked only by a button, and coarse reverse-geocoding uses Nominatim/OpenStreetMap; a browser may deny permission, rate limit or block the network call. Location is always editable and may differ from where the user stands. The photographic market-gate image requested by the owner remains a separate asset-publishing task; SVG is still currently referenced until the original binary is published. Visually test overlay sign targets and responsive dimensions before claiming signboards themselves are interactive.
