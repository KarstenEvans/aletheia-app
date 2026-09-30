# Aletheia Decision Check

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

Status: working static browser tool, source-first local workflow  
Created: 30 September 2026

## Purpose
Aletheia Decision Check helps a person structure a consequential decision without handing the decision to AI. It uses nine stages:

1. Define the decision.
2. Identify assumptions.
3. Gather evidence.
4. Challenge the strongest assumption.
5. Run a pre-mortem.
6. Find missing information.
7. Reduce alternatives.
8. Show remaining uncertainty.
9. STOP when enough evidence exists for the stated task, then leave the decision with the human.

## Principles
- judgment over output volume;
- verification rather than confirmation;
- few materially different options by default;
- explicit contrary evidence;
- visible uncertainty;
- portable local state;
- human decision point;
- Quiet Mode for cognitive load;
- model/provider agnostic.

## Storage and privacy
V1 is static and local. Text is stored only in browser localStorage for this origin unless the user exports Markdown. No AI/API call is required.

## Quiet Mode
Collapses the working detail into three prompts: What changed? What matters? What needs your attention?

## Evidence Grid
The app provides a simple structured evidence table for source, claim/factor, support/contradiction, date and note/link. Users remain responsible for evidence quality.

## Stop rule
The STOP panel asks whether:
- the actual decision is clear;
- material assumptions have been challenged;
- relevant evidence and contrary evidence have been checked;
- important missing information is either obtained or explicitly accepted;
- remaining uncertainty is visible.

STOP means sufficient for the current task, not certainty.

## Exclusions
This tool does not make medical, legal, financial, political or other consequential decisions for the user. It structures evidence and reasoning. Domain-specific professional or primary-source checks remain separate.

## Related
- `../aletheia-GUI.md`
- `../aletheia-dev.md`
- `../ideas.md`
- Aletheia Knowledge: `knowledge/aletheia-judgment-over-output.md`
- Cabinet of Curiosities: Case File 42
