# Aletheia Constellation: reusable seasonal link sprites

> Standard guide, approved 29 September 2026. This is **editorial navigation**, not a commission-driven advertising panel.
>
> [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) for source/provenance/human control and [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) for optional approachable presentation. The component must never change factual content or silently monetise source links.

## Canonical files
- `shared/link-sprites.json`: **one maintained list** of destination links, ordinary star icons, seasonal windows and icon overrides.
- `shared/link-sprites.css`: bounded, mobile-friendly navigation and low-key sprite drift/twinkle.
- `shared/link-sprites.js`: reads catalogue, applies browser-local seasonal date, updates only designated page-footer navigation. Never scans personal location, sends analytics, or creates ads.
- First deployed examples: `aletheia-site-audit/affiliate-tools.htm`, `aletheia-site-audit/aletheia-site-audit.htm`, `seasonal/halloween-gifts.htm`.

## Seasonal rules (browser's local date, annually)

| Inclusive period | Theme | Link and icons |
| --- | --- | --- |
| 1 September–10 November | Halloween | Keep normal crosslinks as stars, add one `🧙` witch link to the **actual Halloween Gifts & Resources HTML**. |
| 11–24 November | Default | Restore ordinary stars. The Halloween link is absent, not just visually hidden. |
| 25 November–31 December | Winter / Christmas | Same curated, non-seasonal destinations shown with `❄️`, `🎁`, `🦌`, `🎄` and a star. Add Christmas-specific destinations only after independently verifying and maintaining their public HTML. |
| 1 January–31 August | Default | Ordinary star navigation, no obsolete holiday link. |

User-facing static HTML **must** provide the five ordinary fallback anchors so visitors still have usable navigation when JavaScript, the catalogue request or remote hosting fails. The seasonal witch is built from an approved URL in the JSON only during its active dates. Direct visits to the evergreen Halloween resource remain allowed year-round; hiding a seasonal navigation link does not remove the page.

## Embed into a new Aletheia Apps page

1. Add `<link rel="stylesheet" href="../shared/link-sprites.css">` inside HEAD, adjusting relative path according to the actual folder.
2. Add the semantic `<section data-aletheia-constellation class="aletheia-constellation" data-as-season="default">` with a heading, a `.aletheia-constellation__links` nav and **static real destination anchors** before the footer. Copy the source structure from the approved Affiliate Tools example.
3. Add `<script src="../shared/link-sprites.js" defer></script>` (adjust relative path), before the one Awin MasterTag at the very end. Script locates its manifest relative to its **own URL**.
4. Do not paste a local copy of the list into each page, override the calendar manually, or point a seasonal sprite to an empty or not-yet-published page.
5. Do not use global flying overlays, hitboxes over buttons, audio, cookies, automatic popups, infinite full-screen snow, or third-party image/font dependencies. The component lives near the bottom and the animation stops on hover or focus; `prefers-reduced-motion: reduce` disables it.
6. Buttons remain readable with text labels and visible focus, approx. 44px or greater touch targets, proper link URLs and `data-awinignore` on editorial routes.
7. Every public page still has useful independent SEO/AEO content. Constellation stars are supplementary internal/cross-site links, not a substitute for relevant body links or a reason to add an affiliate programme.

For SwindonOrgUK and Knowledge pages, first verify that a cross-origin script can retrieve the remote JSON under the browser's CORS rules. Otherwise publish the same **generated current artefact** with the site's local asset routing and preserve a static fallback. The GitHub Apps catalogue is the editorial master; avoid divergent manually maintained variants. Do not alter unrelated working pages in bulk; add the standard during their next audited improvement/release.

## QA / acceptance

- Test `2026-09-01`, `2026-10-31`, `2026-11-10` => Halloween + witch; `2026-11-11` and `2026-11-24` => ordinary stars, no Halloween link; `2026-11-25` and `2026-12-31` => winter; `2027-01-01` => normal stars. Dates are browser-local.
- Manifest JSON parses, every URL is HTTPS and points to an actual planned/live static destination, max six link items (five normal + one witch).
- CSS/JS load; missing JSON leaves ordinary fallback links visible; missing JS must not expose a year-round Halloween witch.
- No script injection via manifest values: use `textContent`, create nodes and allow only HTTPS links with no credentials.
- Check the real GitHub Pages HTML, mobile/keyboard and Safari/browser-local cutovers independently; repository files alone do not prove public deployment.
- One Awin MasterTag per production HTML page, separate disclosure near *commercial* content and source/editorial links excluded from automatic affiliate conversion as supported by actual Awin settings.

## Editorial source of truth

This is the project-standard pattern for **new shareable standalone Aletheia HTML pages** with related, genuine destinations. Existing pages should adopt it as they are inspected/updated, not via an untested repository-wide find-and-replace. The user controls future link additions and icon/season changes through the single JSON catalogue and human approval.
