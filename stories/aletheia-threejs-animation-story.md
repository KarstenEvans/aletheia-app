[voice-profile;TM;lang=en-GB;gender=male;prefer=Google UK English Male;avoid=George;rate=0.97;pitch=0.88]
[voice-profile;AI-PI;lang=th-TH;fallback=George;rate=1.0;pitch=1.05]
[voice-profile;SCHRODINGER;lang=ar-EG;gender=female;fallback=Female;rate=0.92;pitch=1.13]

[image;aletheia-threejs-animation-screen.webp;title=12,8,2.1;sun=50,46,2.2;crawl=50,61,1.7;buttons=50,91,1.7]
[wide;dur=2.0]

# ToomorrowMan and the Universe That Learned to Spell

*A development story for curious makers*

The screen was dark.

Not switched off dark.

Universe dark.

ToomorrowMan leaned closer.

[voice:TM]
“Is it broken?”

[voice:AI-PI]
“No.”

[voice:TM]
“Are you sure?”

[voice:AI-PI]
“Several thousand glowing particles are currently pretending to be empty space. That is a very different engineering problem.”

[voice:]
A tiny sun appeared at the centre.

Then the first stars began to gather.

[zoom;sun;dur=2.0]

## One universe, three disguises

AI-PI explained that there were not three different animations.

There was one crowd of particles.

Every particle had three possible destinations.

One destination helped build a spiral.

One destination helped draw **AI**.

One destination helped draw **Aletheia**.

[voice:TM]
“So the stars know where to go?”

[voice:AI-PI]
“They have coordinates.”

[voice:TM]
“Less poetic.”

[voice:AI-PI]
“Considerably easier to debug.”

[image;aletheia-threejs-animation-spiral.webp;centre=50,50,2.0;arm=77,29,2.0;outer=88,15,2.0]
[wide;dur=2.0]

## Building the spiral

The spiral began near the sun.

Three main streams curved outward.

Some split into nearby companions.

Near the middle, the paths curled strongly.

Farther out, they became straighter.

[zoom;centre;dur=2.0]

[voice:AI-PI]
“The trick is not to make every part of the arm turn by the same amount.”

The animation uses a number called **t**.

Near the centre, t is small.

At the outside, t approaches one.

The turn is calculated so it fades as t grows.

That is why the outer arms do not keep circling forever.

[pan;arm;dur=2.2]

A little randomness widens the arms.

Not enough to destroy their shape.

Just enough to stop them looking as if somebody drew them with a compass and ruler.

[voice:TM]
“Controlled untidiness?”

[voice:AI-PI]
“Nature has an excellent graphics department.”

## How stars become letters

The next trick happened somewhere the audience could not see.

AI-PI opened an invisible two-dimensional canvas.

He drew the letters **AI** onto it in white.

Then he inspected the canvas pixel by pixel.

Every visible white pixel became a possible destination for a star.

[voice:TM]
“So you turn writing into coordinates?”

[voice:AI-PI]
“Exactly.”

The same thing happened with **Aletheia**.

But Aletheia used a classical Greek-looking typeface while keeping the word in Latin letters.

Not ΑΛΗΘΕΙΑ.

**Aletheia.**

The particles did not change identity.

They simply changed destination.

## The travelling stars

Between stages, each particle asks a very small question:

Where am I?

Where should I be?

Then it moves a fraction of the distance.

Again.

And again.

And again.

Thousands of tiny corrections create one large transformation.

[voice:TM]
“Like walking somewhere?”

[voice:AI-PI]
“Yes.”

[voice:TM]
“So the slogan was inevitable.”

[voice:AI-PI]
“Regrettably.”

[zoom;crawl;dur=2.2]

## Let AI do the walking

Gold words rose from the bottom of the screen and travelled toward the centre.

The text was not actually part of the Three.js universe.

It was ordinary web-page text floating above it.

CSS gave the words perspective.

A rotation tipped them away from the viewer.

An animation carried them upward.

Because the crawl layer was transparent, the stars remained visible underneath.

At the start of the crawl stood one larger word:

**Aletheia**

Then:

**Let AI do the walking**

Guided by the Aletheia and Thalia protocols.

Truth checking, practical tools, stories, and interfaces.

Starfields to local knowledge.

Curiosity to prototypes.

Open experiments, human-led, AI-assisted.

## The artificial sun

The sun was another useful cheat.

It was not a complicated ball of burning gas.

This was fortunate.

ToomorrowMan's laptop objected strongly to actual stellar fusion.

Instead, a small hidden canvas painted rings of colour:

white in the middle,

warm cream outside that,

pale blue glow farther out,

and finally transparency.

That tiny picture became a Three.js sprite.

A sprite always faces the camera.

So the fake sun stayed convincing even while the universe rotated around it.

## Touching a cloud of stars

When the pointer moved across the screen, nearby stars moved away.

AI-PI used a Three.js raycaster.

A ray left the camera, travelled through the mouse position and struck an invisible plane through the particle universe.

That gave the program a three-dimensional point corresponding to the two-dimensional pointer.

Particles close to that point were pushed aside.

[voice:TM]
“So the mouse has become a finger.”

[voice:AI-PI]
“An invisible finger with no hygiene problems.”

## Turning the universe

Dragging the screen did not move every star separately.

Instead, the whole particle universe lived inside a Three.js group.

The group rotated.

That made thousands of points tilt together without recalculating their basic target shapes.

## The little panel at the top

[zoom;title;dur=2.0]

At the top left was a small panel.

It said:

**Aletheia Three.js Animation**

Beside it sat a button marked:

**Debug**

Most visitors did not need the engineering controls.

So they stayed hidden.

But developers are not most visitors.

Developers press buttons that say Debug.

This is practically a law.

[image;aletheia-threejs-animation-debug.webp;panel=49,48,1.5;sliders=50,38,1.8;diag=50,80,1.8]
[wide;dur=2.0]

## Opening the toolbox

[zoom;panel;dur=2.0]

Debug revealed the tuning panel.

Universe changed the scale of the particle object.

Particles changed how large the star points appeared.

Camera changed the viewing-distance multiplier.

Sun Size changed the glowing centre.

A checkbox could turn the sun off entirely.

Three quick buttons offered universe scales of 0.5, 0.7 and 1.

FIT UNIVERSE calculated how large the current particle cloud was and moved the camera so the whole thing fitted.

RESET VIEW returned the preferred values:

Universe 1.00.

Particles 0.30.

Camera 0.50.

Sun 4.0.

[zoom;diag;dur=2.0]

Below the sliders lived diagnostic numbers.

They showed the current stage, scale, particle setting, camera position, sun size, radius and number of points.

These numbers were useful when a perfectly healthy spiral appeared to have vanished.

Often it had not vanished at all.

It was simply very small, very large, or parked somewhere inconvenient.

## The controls at the bottom

[image;aletheia-threejs-animation-screen.webp;buttons=50,92,2.2;summary=87,91,2.0]
[zoom;buttons;dur=2.0]

The middle controls could force any stage:

Spiral.

AI.

Aletheia.

Auto allowed the cycle to continue by itself.

Replay began again.

Crawl hid or showed the golden text.

Fullscreen removed the browser furniture.

[pan;summary;dur=2.0]

At the bottom right was a compact summary.

It looked simple.

But it had once contained a small trap.

The words had been typed in by hand.

Changing a slider did not change the summary.

So the summary was rebuilt to read the **live variables** instead.

Now if Camera became 0.50, the summary said 0.50.

If Sun became 4.0, it said 4.0.

[voice:TM]
“That sounds obvious.”

[voice:AI-PI]
“Many bugs do, immediately after they have been fixed.”

## What the project teaches

The universe on the screen is not a video.

It is a small real-time simulation assembled from familiar web ingredients:

Three.js for the point cloud.

WebGL shaders for glowing particles.

Canvas 2D for turning words into pixel coordinates.

A sprite for the sun.

CSS for the perspective crawl.

HTML controls for debugging.

And one animation loop continuously asking the stars where they ought to go next.

ToomorrowMan watched Aletheia dissolve.

The letters loosened.

The points drifted away.

A spiral began to return.

[voice:TM]
“So it never really disappears.”

[voice:AI-PI]
“No.”

[voice:TM]
“It just becomes something else.”

Schrödinger appeared on the desk without having entered the room.

She watched the moving stars for several seconds.

Then she placed one paw on the keyboard.

The entire universe tilted seventeen degrees.

[voice:AI-PI]
“Debug input detected.”

Schrödinger blinked.

Purfect.

[voice:]
## Maker's note

The working app is `aletheia-threejs-animation.htm`.

The companion developer article is `aletheia-threejs-animation.pdf`.

The recreation specification is `aletheia-threejs-animation-code.md`.

The reusable technical notes live in `aletheia-threejs-animation-knowledge.md`.

The important lesson is not the particular spiral, font or sun.

It is this:

**Build one simple system whose parts can change their destination.**

Then let the stars do the walking.
