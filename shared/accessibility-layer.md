# Aletheia Accessibility Layer

> Shared, free-first accessibility pattern for Aletheia browser apps.  
> Status: v0.1 shared component, 30 September 2026.

## Principle

**Remove access barriers. Do not automatically remove the task, evidence or learning challenge.**

Accessibility controls are available because they help, not because a visitor proves a diagnosis or disability.

## Capability ladder

### Level 0 — semantic baseline, always required

Every app still needs ordinary accessible HTML even if this component is absent:

- semantic headings and landmarks;
- associated form labels;
- keyboard operation and visible focus;
- readable contrast and zoom;
- meaningful alternative text;
- captions/transcripts where appropriate;
- reduced-motion handling;
- useful content without hover;
- explicit error/status messages.

### Level 1 — shared browser/local controls

The reusable component in `accessibility-layer.js/css` may add:

- **A− / A+ / Reset** text sizing;
- **Focus** mode for reducing non-essential page chrome where the page opts in;
- **Read** selected text, or the page's declared reading region, through browser speech synthesis;
- **Stop** speech;
- local preference storage only.

If speech synthesis is unavailable, text controls still work.

### Level 2 — host/browser capability controls

Apps may additionally expose when genuinely supported:

- speech-to-text/dictation;
- browser translation;
- OCR/screenshot reading;
- file/image reading;
- highlighting that follows speech;
- keyboard/mouse alternatives;
- share/download/import.

Feature-detect each capability. Do not imply support merely because another browser/device has it.

### Level 3 — AI-assisted access

Where an AI is actually available, app instructions may offer:

- **SIMPLIFY** without silently deleting essential concepts;
- **DEFINE** in context;
- **TRANSLATE** while keeping original text available;
- **VISUAL** diagram/table/timeline/pattern explanation;
- **CHUNK / SLOW**;
- task breakdown / **WHAT NEXT?**;
- adaptive summaries such as Quick / Normal / Explain / Full Evidence;
- OCR/image interpretation when the AI genuinely received the image.

Do not claim the static page itself performed these actions when they occur in a receiving AI.

## Learning boundary

For learning apps, access support may remain enabled during independent checks unless the support is itself the target skill.

Examples:

- text-to-speech may stay on in an algebra check;
- translation may be inappropriate when the target is unaided reading in that language;
- a visual diagram can support understanding, but a labelled answer key should not remain if recalling the labels is the tested skill.

## Focus mode contract

A page that wants shared Focus mode should mark non-essential regions with:

```html
data-aletheia-focus-hide
```

Do not hide:

- the current task/input;
- required instructions;
- safety warnings;
- status/errors;
- essential navigation for escaping the mode.

## Reading-region contract

Preferred reading target:

```html
data-aletheia-read-region
```

If the user has selected text, Read uses the selection first. Otherwise it reads the declared region. Do not automatically read on load.

## Privacy

- no voice recording is stored by this component;
- speech synthesis uses the browser/platform implementation;
- no text is sent to an external AI merely by opening accessibility controls;
- local text-size/focus preferences may be stored in localStorage;
- never store diagnoses or infer disability labels.

## External inspiration, not copied product design

The pattern was informed by general accessibility-by-design and UDL principles plus capabilities seen in tools such as Everway/Read&Write. Reuse the principles, not vendor UI, wording, product identity or proprietary implementation.

## Acceptance

- usable with JS disabled at Level 0;
- keyboard and touch;
- Android narrow width;
- Safari/WebKit graceful fallback;
- `prefers-reduced-motion`;
- no autoplay speech;
- no hidden safety-critical content;
- text size does not cause horizontal page overflow at 200% browser zoom;
- Focus can be exited with keyboard;
- speech controls disappear/disable honestly when unsupported.
