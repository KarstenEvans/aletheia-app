# Aletheia Three.js Animation - recreation prompt and code specification

## Purpose

Recreate the current `aletheia-threejs-animation.htm` as a single portable browser app. The app is an interactive Three.js particle animation that cycles through:

1. a star spiral,
2. the letters `AI`,
3. the word `Aletheia`.

The same particles move between the three target shapes. A bright central sun remains behind the particles. A Star-Wars-style crawl moves toward the centre. A small top-left panel contains the title and a **Debug** button. Debug UI is hidden by default and reveals the live controls only when requested.

The implementation must be an independent Aletheia implementation, not copied from another site's source code.

---

## Aletheia recreation prompt

**Create a single HTML file named `aletheia-threejs-animation.htm`.**

Use Three.js in the browser and keep the app lightweight enough to run as a GitHub Pages page.

### Visual design

- Full-window dark navy-black universe.
- Sparse, distant static stars in the background.
- One animated foreground particle system with about 5,600 points.
- Particle colours are mainly cyan, pale blue and white.
- Use additive blending so bright clusters glow.
- Add a central warm-white sun made from a radial-gradient canvas texture on a Three.js `Sprite`.
- The sun remains behind the animated particles.
- Default sun size: **4.0**.
- Default particle display scale: **0.30**.
- Default universe scale: **1.00**.
- Default camera multiplier: **0.50**.

### Particle targets

Create three target arrays with exactly the same number of particle positions.

#### Spiral

Create three main spiral arms with occasional sibling branches. The arms should curl strongly near the centre and become progressively straighter as they move outward.

Use a parameter `t` from 0 to 1 and make the angular curvature decrease with distance, for example:

```js
const curve = thetaMax * Math.pow(1 - t, 1.28);
```

Use a small Gaussian spread to stop the arms looking mechanically perfect.

#### AI

Render the text `AI` into an off-screen 2D canvas using a heavy sans-serif face. Read the pixels with `getImageData()`. Gather the opaque pixels and randomly assign them as particle targets.

The I should have a visible top and base because the text raster comes from a proper bold typeface rather than a plain rectangle.

#### Aletheia

Render `Aletheia` into an off-screen canvas using a Greek/classical-looking Latin typeface. Use **Cinzel** first, with serif fallbacks.

Do **not** substitute Greek characters. The displayed word is `Aletheia` in Latin letters.

Sample the visible text pixels and build a target point cloud in the same way as `AI`.

### Morphing

Keep one `THREE.Points` object. Do not create separate particle systems for the three stages.

Every animation frame, move the current positions toward the selected target positions:

```js
pos[j] += (target[j] - pos[j]) * attraction;
```

Use a frame-rate-aware attraction factor so the movement is smooth.

Auto-cycle:
- Spiral: about 7 seconds
- AI: about 9 seconds
- Aletheia: about 10 seconds
- then return to Spiral.

The morph should be slow enough that the viewer can watch the particles migrate.

### Mouse interaction

- Drag the canvas to rotate the particle universe in 3D.
- Move the pointer through the point field to push nearby particles aside.
- Use a Three.js `Raycaster` and a plane through the universe centre to map the pointer into the particle coordinate system.

### Camera and fitting

Use a `PerspectiveCamera`.

Provide a `FIT UNIVERSE` debug function that calculates the current particle bounding sphere and positions the camera so the entire point cloud fits in the field of view.

Do not allow normal mouse-wheel scrolling to silently change the camera multiplier.

### Star crawl

Create the crawl with normal HTML/CSS above the canvas, not with Three.js geometry.

- Full-width transparent overlay.
- `perspective` on the viewport.
- `rotateX(...)` on the text.
- CSS keyframe animation translates the crawl upward into the distance.
- Keep the crawl overlay transparent so it does not block the star animation.
- Use gold text.
- The first word, **Aletheia**, is large, bold and approximately twice the size of the earlier small heading.
- Crawl text:

```text
Aletheia
Let AI do the walking
Guided by the Aletheia and Thalia protocols.
Truth checking, practical tools, stories, and interfaces.
Starfields to local knowledge.
Curiosity to prototypes.
Open experiments, human-led, AI-assisted.
github.com/karstenevans/aletheia-protocol
github.com/karstenevans/thalia-protocol
github.com/karstenevans/aletheia-knowledge
```

### Top-left panel

Show:

- title: `Aletheia Three.js Animation`
- small instruction line: `Drag to rotate. Move the pointer through the particles to push them aside.`
- a `Debug` button.

When Debug is off, hide:
- scale/control panel,
- stage badge,
- bottom stage buttons,
- bottom-right debug summary.

### Debug UI

When Debug is enabled, reveal:

#### Bottom-left panel

Controls:
- Universe scale slider.
- Particle scale slider.
- Camera multiplier slider.
- Sun size slider.
- Sun on/off checkbox.
- Quick universe buttons: `0.5x`, `0.7x`, `1x`.
- `FIT UNIVERSE`.
- `RESET VIEW`.
- diagnostic text showing stage, current values, camera z, local radius, world radius and point count.

Defaults after reset:
- Universe = 1.00
- Particles = 0.30
- Camera = 0.50
- Sun = 4.0

#### Bottom-middle buttons

- Spiral
- AI
- Aletheia
- Auto On/Off
- Replay
- Crawl On/Off
- Fullscreen

#### Bottom-right live summary

Show a live string such as:

```text
Debug · Universe 1.00 / Particles 0.30 / Camera 0.50 / Sun 4.0
```

This text must be generated from the live variables, not hard-coded. Update it whenever a slider or toggle changes.

### External dependencies

Use:

- Three.js from jsDelivr.
- Google Fonts Cinzel for the Aletheia classical/Greek-style Latin lettering.

The app should fail gracefully with a visible message if Three.js cannot load.

---

## Acceptance checklist

- [ ] File is named `aletheia-threejs-animation.htm`.
- [ ] Full browser window is used as the canvas.
- [ ] Spiral is visible at Universe 1.00.
- [ ] Particle scale defaults to 0.30.
- [ ] Camera multiplier defaults to 0.50.
- [ ] Sun defaults to 4.0 and can be disabled.
- [ ] Same particles morph Spiral -> AI -> Aletheia.
- [ ] Aletheia uses Latin letters with a classical/Greek-style typeface.
- [ ] Crawl is transparent and does not create a black rectangle.
- [ ] Crawl's first `Aletheia` is large and bold.
- [ ] Debug is hidden by default.
- [ ] Debug button reveals all controls.
- [ ] Bottom-right debug summary follows the live controls.
- [ ] Drag rotates the universe.
- [ ] Pointer repels particles.
- [ ] Fullscreen works.
- [ ] App runs from a local `.htm` file when internet access is available for the CDN/font.
