# Aletheia Make a Will — Page specification

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance and human authority.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional appropriate humour and positivity.

**Version:** 0.1.0; 18 November 2026.  
**Canonical browser route:** https://karstenevans.github.io/aletheia-app/aletheia-make-a-will/aletheia-make-a-will.htm  
**Canonical research:** aletheia-make-a-will.md  
**HTML:** aletheia-make-a-will.htm  
**Jurisdiction:** England and Wales.  
**Status:** New educational public prototype; independent legal and multi-browser review outstanding.

## Four sections, in order

1. **Make a Will:** eligibility and complexity screening; one simple adult residuary beneficiary, fallback, executor and substitute; generate explicitly unverified REVIEW DRAFT or professional briefing, never purportedly executed will.
2. **Family Handover:** record provider and document *locations* for mortgages, property, banks, pensions, protection policies, bills, digital-account inventory, trusted contact and emergency-payment plan. Never passwords or full account numbers. Export local Markdown separate from will.
3. **DIY Probate:** survivor and mortgage/title questions and timeline; customise notification and interest-rate complaint reminders; grant of probate is not invariably necessary. Official sources linked.
4. **Consider a Family Trust:** arithmetic example only for home equity + savings + optional pension (NOT taxable estate); compare will, survivor title, sole mortgage, lifetime gift, right-to-occupy will trust, discretionary trust, pension nominations and life insurance. No auto-written trust deed.

## Inputs, state and data safety

No accounts, cookies, tracking, localStorage, sessionStorage, remote POST, server access, hidden AI or compulsory paid dependency. Browser-only memory cleared on page refresh. All personal inputs optional for demonstration. No automatic data transmission to external pages; external source links never carry user inputs. Downloaded Markdown is plaintext, not encrypted. Show warning near input and download. Never ask passwords, complete account numbers, banking authorisation or recovery codes.

## Practical UI

Mobile-first high contrast, semantic inputs/labels, actual four-tab controls, clear visible focus, 44px+ buttons, keyboard, print support and reduced motion. Useful task before secondary background material; trusted GOV.UK/FOS/MoneyHelper sources after main tools. No external JS/CSS dependencies. If script cannot load, the page still exposes basic content and links.

## Output contract

Every generated Markdown starts with title then BOTH protocol links with distinct roles. Use safe text nodes/textContent, never inject untrusted user entries as HTML. Generate/download only after user click; never sync. The will section only offers an unverified illustrative review draft with prominent NOT READY TO SIGN when all criteria met; all others produce briefing. A household and trust sections are not a formal will or tax calculation. Export filenames must be distinct by module.

## Escalation gates

Underage; not England/Wales; coercion/capacity doubt; minor children or complex care needs; cohabitation/blended family; foreign assets; contentious family/property; right of occupation, life interests and trusts; existing contradictory wills; incomplete executor/beneficiary/fallback. For these the output is a review briefing, not a simplified legal draft.

## Test matrix

- Exactly four tabs, with correct panel activation via touch/mouse/keyboard.
- Blank, simple and complex family inputs produce labelled results and no unintended signing statement.
- Ensure user text with angle brackets is inert in textContent.
- Every downloadable Markdown contains both protocol links, own section, no passwords.
- Confirm no network uploads, browser persistence, automatic forms or analytics.
- Confirm source links, official age/witness rules and lender distinction.
- Check desktop Chrome/Edge, Android Chrome, Safari/WebKit, 320px narrow width, 200% zoom, keyboard, reduced motion, printing and live GitHub Pages separately. Source-only checks must not be mislabelled browser/live verification.

## Real-world legal check required before v1

Professional review of exact clauses, witness directions, default contingency, survivorship, guardians, spouse/child provision, fiduciary appointments, property trusts, pension rules, mortgage contracts and tax calculations. No calculated individual IHT liability in v0.1.

## Current source/permission receipt

Read current KarstenEvans/aletheia-app main: AGENTS.md, ALETHEIA-SAFE-BOOTSTRAP.md, README.md, aletheia-GUI.md, aletheia-dev.md, aletheia-code.md, tasks.md, ideas.md, existing app examples and 2026 official sources. User expressly instructed building/publishing Aletheia Make a Will v0.1 to the Apps repo. App-local new files and a new index listing are within scope; shared standards and other apps are not.
