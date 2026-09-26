# Aletheia Three.js Animation — page specification

Status: CURRENT / SAFARI COMPATIBILITY PASS, DEVICE VERIFICATION PENDING  
Canonical public URL: https://karstenevans.github.io/aletheia-app/aletheia-threejs-animation/aletheia-threejs-animation.htm  
Rendered file: `aletheia-threejs-animation.htm`  
Primary recreation/code specification: `aletheia-threejs-animation-code.md`  
Last reviewed: 2026-09-26

## Purpose

Present a lightweight cinematic Aletheia particle animation:

1. Spiral star/particle formation;
2. morph to `AI`;
3. morph to `Aletheia`;
4. independent gold HTML/CSS crawl.

The page is decorative/presentational. It must remain understandable when advanced graphics fail.

## Source of truth and reading order

1. repository `AGENTS.md`, `README.md`;
2. `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `tasks.md`;
3. this page specification;
4. `aletheia-threejs-animation-code.md`;
5. current `aletheia-threejs-animation.htm`.

## Actual page order / layers

1. full-window graphics canvas;
2. top-left title / Debug control;
3. optional debug/status/scale controls;
4. independent HTML/CSS crawl;
5. Awin Publisher MasterTag immediately before `</body>`.

The crawl must not depend on Three.js or WebGL.

## Graphics capability ladder

The current compatibility build uses Three.js r160 deliberately.

Startup order:

1. Three.js library available;
2. WebGL2 context + Three.js renderer;
3. fresh canvas + WebGL1 context, antialiasing disabled;
4. fresh canvas + `experimental-webgl` where exposed;
5. Canvas 2D compatibility mode;
6. HTML/CSS crawl remains available even if all canvas graphics fail.

Do not disable Three.js merely because the platform is Apple. Test the actual capability.

## Full Three.js mode

Required features:

- static distant background stars;
- central sprite glow/sun;
- one `THREE.Points` particle system;
- Spiral -> AI -> Aletheia targets;
- frame-rate-aware morphing;
- drag to rotate;
- pointer/raycast particle repulsion;
- automatic stage cycle;
- manual stage controls;
- Fit Universe;
- scale / particle / camera / sun debug controls.

## Canvas 2D compatibility mode

Purpose: preserve a useful visual presentation if WebGL cannot start or its context is lost.

Must retain:

- animated starfield;
- central glow;
- Spiral stage;
- AI stage;
- Aletheia stage;
- independent crawl.

It does **not** claim to retain:

- Three.js;
- true 3D rotation;
- raycast pointer repulsion.

The ordinary instruction line should tell the visitor when 2D compatibility mode is active.

## Safari/WebKit compatibility rules

Avoid unnecessary JavaScript syntax that blocks older still-usable Safari before capability detection runs. In particular, the 2026 compatibility pass removed optional chaining from the critical application path.

Fullscreen should use the standard API when present and the WebKit-prefixed API as fallback.

A `webglcontextlost` event must not result in a blank unexplained canvas. Switch to the compatibility path.

Do not upgrade Three.js as part of an unrelated compatibility fix. r161 removed the legacy global build and r163 removed WebGL1 support from `WebGLRenderer`; a future upgrade therefore requires a deliberate module/current-renderer migration.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- the crawl must not continuously animate;
- the graphics layer may display a static/reduced Aletheia composition;
- the page must remain visually useful.

## External dependencies

- Three.js r160 from jsDelivr;
- Cinzel from Google Fonts;
- Awin Publisher MasterTag.

Failure behaviour:

- Three.js/CDN unavailable -> compatibility canvas/crawl;
- font unavailable -> local serif/sans-serif fallbacks;
- WebGL unavailable/lost -> Canvas 2D compatibility mode;
- Awin unavailable -> animation/content still works.

## Browser/device verification matrix

### STATIC
- [x] Inline application JavaScript parses after Safari compatibility edits.
- [x] No duplicate HTML IDs.
- [x] WebGL2 and WebGL1 attempts are present.
- [x] Canvas 2D compatibility mode is present.
- [x] Awin MasterTag remains present.

### EXISTING OWNER OBSERVATION
- [x] Android works before compatibility pass.
- [x] PC works before compatibility pass.
- [x] Apple previously showed crawl but not Three.js graphics.

### DEVICE TESTS STILL REQUIRED
- [ ] failing Apple device: reload and record mode/result;
- [ ] current Safari on macOS if available;
- [ ] current Safari on iPhone/iPad if available;
- [ ] retest Android Chrome;
- [ ] retest Windows Chrome/Edge.

## Apple test receipt

Record:

```text
Device:
OS version:
Browser/version:
Page revision/date:
Mode observed: WebGL2 / WebGL1 / 2D compatibility / crawl only
Spiral visible:
AI visible:
Aletheia visible:
Crawl visible:
Drag works:
Pointer repulsion works:
Fullscreen works:
Console error:
Result: PASS / PARTIAL / FAIL
```

## Acceptance rule

A browser session passes when either:

1. full Three.js mode works as designed; or
2. WebGL is genuinely unavailable/broken and the page automatically provides the useful Canvas 2D compatibility presentation plus crawl.

An unexplained **crawl-only** result is a failure and should be investigated.


## Responsive default profiles

Use the page's existing **900px compact breakpoint**.

| Setting | Compact / mobile ≤900px | Wider / desktop >900px |
| --- | ---: | ---: |
| Universe | 1.20 | 1.00 |
| Particles | 0.70 | 0.30 |
| Camera | 1.30 | 0.50 |
| Sun | 3.0 | 4.0 |

These values are framing defaults, not device/OS assumptions.

- Apply them at initial Three.js startup.
- `RESET VIEW` reapplies the defaults for the current viewport.
- Do not automatically change live user-adjusted values during a resize/orientation event.
