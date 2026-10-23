# Aletheia-02 | Gemini / cross-agent fairings: validation and handover

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) is the evidence, provenance and authority contract. [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) provides optional appropriate humour.

- Date: 2026-10-23
- Owner/repository: `KarstenEvans/aletheia-app`
- Baseline `main`: `7d52abb6217cf6fba87cf840362119308b2e4a52`
- Review branch: `fairings-gemini-agent-skills-20261023`
- Scope: `integrations/` only. Original apps and protocol unchanged.
- State: **SOURCE COMMITTED / BINARY PACKAGES STAGED / PROVIDER IMPORT UNTESTED / PUBLIC MAIN NOT DEPLOYED**.

## Confirmed readback

After the commits, the GitHub API recursive tree for the review branch reported each of five new fairing folders containing six files: `README.md`, `plugin.json`, `skills/<id>/SKILL.md`, an exact canonical reference snapshot, a root-SKILL ZIP and a Plugin ZIP. In all five cases the reference snapshot's Git blob matches the original canonical source Git blob. Root `main` stayed at the baseline SHA at the time of this check.

| Fairing | Source blob SHA | Skill ZIP bytes | Plugin ZIP bytes |
|---|---|---:|---:|
| `mini-ai-me` | `3f89bd037973d6b614b9cb490e7513c8c7d0d400` | 14698 | 15396 |
| `aletheia-job-search` | `f6883cacabb1acf3a13eb12fe356a8c209b26a55` | 14885 | 15654 |
| `aletheia-site-audit` | `4d2187fc0722ec7c2cbfe692096d3d9b4e47b4cf` | 19562 | 20324 |
| `aletheia-whatson` | `28b4e874d97421ec811061f396d72fcb69ab7363` | 9207 | 9969 |
| `aletheia-ai-easy` | `663b841b86867ad03c638afe1542678d73ff2876` | 9842 | 10595 |

## Actual static verification

- Verified five lowercase YAML `name` fields agree with five `plugin.json` names; manifest JSON parsed in packaging steps.
- All five Skill instructions are below 20,000 characters.
- Each reference snapshot is exactly the canonical Git blob revision, not a shorter paraphrase.
- Ten standard uncompressed ZIP archives generated: five SKILL bundles with root `SKILL.md` plus `references/<canonical>.md`; five plugin bundles with root `plugin.json` plus `skills/<id>/SKILL.md` and reference.
- ZIP builder checked local and central directory signatures and expected entry names before writing binary blobs; GitHub tree independently reports committed blob SHA and byte size matching generated archives.
- **Not yet independently unzipped or tested in an AI provider.** The execution environment could not fetch `raw.githubusercontent.com` binaries for independent Python extraction; this is not evidence of a broken public download.

## User-level acceptance tests not run

1. Gemini web Skills: import the actual root-SKILL ZIP and invoke Mini-AI-Me with `START`, `NEXT`, `PAUSE`, `REVIEW`; check exact 28-question progression, privacy and export.
2. Claude custom Skills and Claude Code: import and check canonical reference loaded, response follows original instructions.
3. ChatGPT/Codex: check package installation through supported plugin mechanism; no Plugin Directory publication asserted.
4. Microsoft Copilot Studio eligible agent: import Skill, check metered-credit/account requirements and observe invocation.
5. DeepSeek DeepCode/Gemini CLI/Antigravity: place skill in documented directory and verify actual host invocation.
6. Job Search and What's On: repeat with and without actual browsing; reject hallucinated live vacancies/events.
7. Site Audit: audit an inaccessible site; do not call it fraudulent and do not claim any unperformed tests.
8. AI Easy: confirm optional setup and correct `HANDOVER`, with no false memory persistence.
9. Confirm actual ZIP download and extraction in an ordinary browser; confirm URLs, mobile and keyboard behaviour after any separately approved public merge.

## Risks / constraints

A `SKILL.md` is only instructions. Provider capability, network access, account tools, cost, file handling and user authority differ. Gemini's Skills migration begins in November 2026 for personal accounts; Workspace timing differs. Ordinary Copilot/DeepSeek chats are not automatically compatible Skill importers. Never silently grant autonomous actions, reveal private Mini-AI-Me data or replace browser-specific UI with plain Markdown.

## Resume

First run independent archive extraction and real Gemini import of Mini-AI-Me; record screenshots or observable task receipts if user chooses. If successful, pilot the other four. Owner approval is required before merging/publishing to the live default branch. Remaining listed apps are classified in `Aletheia-01-Gemini-Agent-Fairing-Inventory.md`, with candidates awaiting separate canonical-app inspection.
