# Aletheia Gemini and cross-agent fairing inventory · 23 October 2026

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) governs evidence, provenance, uncertainty and human authority. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) provides optional appropriate humour.

**Owner:** `KarstenEvans/aletheia-app`. **Status:** REVIEW BRANCH, NOT PUBLISHED, NOT INSTALLED. Free-first original Markdown/browser apps are unchanged.

## Inventory of existing app families

| Existing app or folder | Classification | Reason |
|---|---|---|
| `Mini-AI-Me` | SKILL FAIRING | 28-question personal profile interview; educational portraits remain separate |
| `aletheia-agent-budget` | REUSE EXISTING SKILL | Existing SKILL.md |
| `aletheia-ai-easy` | SKILL FAIRING | Opt-in bootstrap and handover |
| `aletheia-assistant` | LINK/LAUNCH ONLY | Voice and browser interaction |
| `aletheia-avatar` | LINK/LAUNCH ONLY | Avatar rendering |
| `aletheia-chess` | LINK/LAUNCH ONLY | Game logic and browser UI |
| `aletheia-decision-check` | REUSE EXISTING SKILL | Existing decision-helper overlaps; check before duplication |
| `aletheia-frequency-explorer` | LINK/LAUNCH ONLY | Interactive audio and visuals |
| `aletheia-government-intelligence` | SKILL CANDIDATE | Public-information research method |
| `aletheia-humour` | REUSE/LINK | Reuse Thalia and existing humour guidance |
| `aletheia-improve` | SKILL CANDIDATE | Scoped evidence-led improvement process |
| `aletheia-job-search` | SKILL FAIRING | Live job research with host tools |
| `aletheia-language-learn` | SKILL CANDIDATE | Spoken and written language teaching |
| `aletheia-learn` | LINK/REUSE | Course collection; package lessons individually |
| `aletheia-love-translator` | SKILL CANDIDATE | Conversational translation workflow |
| `aletheia-news` | SKILL CANDIDATE | Dated source-led reporting |
| `aletheia-rice-intelligence` | SKILL CANDIDATE | Commodity research; no trading authority |
| `aletheia-shop-price-app` | LINK/LAUNCH ONLY | Browser price/comparison UI |
| `aletheia-site-audit` | SKILL FAIRING | Evidence-led site inspection |
| `aletheia-threejs-animation` | LINK/LAUNCH ONLY | 3D browser graphics |
| `aletheia-trust-check` | ALREADY PACKAGED | Existing canonical Skill/Plugin ZIP fairing |
| `aletheia-whats-on` | REUSE/MERGE | Overlaps newer worldwide aletheia-whatson |
| `aletheia-whatson` | SKILL FAIRING | Worldwide local events research |
| `aletheia-windows-debloat` | LINK/LAUNCH ONLY | Sensitive PowerShell actions need explicit safeguards |
| `aletheia-work-app` | SKILL CANDIDATE | Workplace research and tasks |
| `aletheia-writing-vibe` | SKILL CANDIDATE | Writing analysis; check Humanizer overlap |
| `Aletheia-calistenics` | LINK/LAUNCH ONLY | Exercise player, timers and guided movement |
| `aletheia-storyteller (root)` | LINK/LAUNCH ONLY | Voice/storyboard/camera browser controls |

**Existing separate pack of 11 workflow Skills:** competitor-monitor, content-repurposer, decision-helper, executive-brief, feedback-synthesizer, geo-aeo-optimizer, humanizer, inbox-triage, meeting-prep, sales-followup, weekly-review. Reuse first; do not create duplicates.

## First batch

- `mini-ai-me` from `Mini-AI-Me/Mini-AI-Me-START.md` (source blob `3f89bd037973d6b614b9cb490e7513c8c7d0d400`).
- `aletheia-job-search` from `aletheia-job-search/aletheia-job-search.md` (source blob `f6883cacabb1acf3a13eb12fe356a8c209b26a55`).
- `aletheia-site-audit` from `aletheia-site-audit/aletheia-site-audit.md` (source blob `4d2187fc0722ec7c2cbfe692096d3d9b4e47b4cf`).
- `aletheia-whatson` from `aletheia-whatson/aletheia-whatson.md` (source blob `28b4e874d97421ec811061f396d72fcb69ab7363`).
- `aletheia-ai-easy` from `aletheia-ai-easy/aletheia-bootstrap.md` (source blob `663b841b86867ad03c638afe1542678d73ff2876`).

Each new fairing contains SKILL.md, exact source snapshot, optional plugin.json and provider instructions. **No provider-specific automatic agent, API, token, backend, browser-app replacement or commercial service added.** Root-SKILL ZIPs and ChatGPT/Codex plugin ZIPs are the portable install shapes. The previous Trust Check pack stays unchanged.

## Provider grounding

Google Gemini Gems transition to Skills on personal accounts starting November 2026. Gemini Skills can import root SKILL.md ZIPs but currently do not automatically import GitHub-linked files. Claude supports custom Skill ZIPs for eligible accounts; OpenAI Agent Plugins use plugin.json and skills/<name>/SKILL.md; Microsoft Copilot Studio eligible agents use Skill imports; DeepSeek DeepCode and Gemini CLI accept local skills. Support in ordinary chat interfaces and access to tools must be checked per account.

## Source-read / preflight receipt

On 2026-10-23 inspected live `main` root AGENTS.md, ALETHEIA-SAFE-BOOTSTRAP.md, README.md, aletheia-GUI.md, aletheia-dev.md, aletheia-code.md, ideas.md, tasks.md, current app Markdown/page/html or README, existing Trust Check package and 11 separate workflow Skills. Branch-only write explicitly requested as optional app fairings, with no changes to canonical app code, shared contracts, normative protocols, public pages or branch settings. No additional authorization inferred.

## Acceptance and RESUME

Validate the ZIP CRC/entries and exact snapshot identity; read back staged files; try each provider's actual import and task invocation; only then consider a separate owner-approved merge and publication. Other plausible candidates are Improve, News, Government Intelligence, Rice Intelligence, Language Learn and Writing Vibe. Keep browser-only apps linked, do not claim their UI can be installed as a Skill.
