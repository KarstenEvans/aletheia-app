# Aletheia Decision Check — page specification

Status: working source implementation  
Rendered file: `aletheia-decision-check.htm`  
Primary specification: `aletheia-decision-check.md`  
Created: 30 September 2026

## Purpose
A calm, local-first nine-stage decision worksheet with Quiet Mode, evidence grid, Markdown export and an explicit STOP/human-decision boundary.

## Actual page order
Header → Quiet Mode toggle → nine decision stages → evidence grid → stop check → export/reset.

## Inputs and stored state
All textareas, STOP checklist and evidence rows save to localStorage for the current browser origin. Reset requires confirmation. Export creates a Markdown download locally.

## Required behaviour
- nine stages always remain available;
- Quiet Mode shows three summary prompts without deleting detail;
- evidence rows can be added/removed;
- STOP state never claims certainty;
- export includes Aletheia and Thalia protocol references;
- no external AI/API required.

## Accessibility
Semantic headings/labels, keyboard controls, visible focus, no required animation, responsive single-column mobile layout.

## AI authority
None in V1. This is a human-controlled worksheet. Future AI assistance may draft/challenge but must not silently select the final decision.

## Acceptance tests
- unique IDs;
- localStorage save/restore;
- add/remove evidence rows;
- Quiet Mode toggle;
- STOP checklist;
- Markdown export;
- reset confirmation;
- one Awin MasterTag only;
- desktop/mobile keyboard/browser tests still required after deployment.
