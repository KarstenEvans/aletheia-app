# Aletheia Windows Debloat Tool — page and companion specification

Status: IMPROVE SOURCE CANDIDATE / WINDOWS DEVICE VERIFY PENDING  
Canonical public URL: https://karstenevans.github.io/aletheia-app/aletheia-windows-debloat/aletheia-windows-debloat.htm  
Rendered file: `aletheia-windows-debloat.htm`  
Primary specification: `aletheia-windows-debloat.md`  
PowerShell companion: `windows-rescue-tool.ps1`  
Driver companion: `driver-ai-prompt.ps1`  
Storage guide: `windows-rescue-storage-upgrade.htm`  
Evidence register: `SOURCES.md`  
Linked knowledge: https://karstenevans.github.io/aletheia-knowledge/app/aletheia-secret-windows.htm  
Linked resources: https://karstenevans.github.io/aletheia-knowledge/resources/aletheia-secret-windows-rsc.htm  
Last reviewed: 2026-10-01

## Purpose

Help a Windows 10/11 owner diagnose slowness, background load, update/privacy friction and low disk space without treating “debloat” as permission to delete Windows components blindly. The browser page is a STATIC/LOCAL planning interface plus HANDOFF to a chosen AI. The optional PowerShell companion starts read-only and exposes narrowly scoped, exact-confirmation changes with rollback state.

## Source of truth and reading order

Read current repository `AGENTS.md`, `README.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`, `tasks.md`, then this file and the current target files listed above. Use `SOURCES.md` and Aletheia Secret Windows for source-traced Windows facts. GitHub `main` is shared master; re-fetch before writes.

## Actual browser page order

1. Identity, purpose and audit-first promise.
2. Safety panel and links to PowerShell, Driver Sanctuary, storage guide, Secret Windows and resources.
3. Questionnaire: RAM, storage, Windows 11/ESU intent, budget, search use, problems and workload.
4. Build My Rescue Plan.
5. Optional Ctrl-V AI handoff with provider selection and structured return box.
6. Service/safety rules.
7. Memory/pagefile explanation.
8. Update-control and RegBack guidance.
9. Free-space recovery section.
10. SSD/storage-upgrade section.
11. Upgrade/replace comparison, resources and footer.

## Inputs and stored state

Only the chosen AI provider is stored in `localStorage`. Questionnaire answers remain in page state and are not uploaded automatically. Clipboard access is user-triggered. The static page cannot inspect Windows hardware or system files.

## Free-space contract

Keep these distinctions:
- hibernation file: potentially reclaimable only when Hibernate/Fast Startup trade-offs are accepted;
- Delivery Optimization: clear cache with supported Windows tools; peer sharing may be off without disabling Windows Update;
- pagefile: measure allocation/current/peak use; never impose a universal 10 GB cap;
- recovery/shadow storage: measure before changing; System Restore and Point-in-time restore are not treated as identical;
- never manually delete `pagefile.sys`, `hiberfil.sys`, WinSxS, DriverStore or recovery data.

The PowerShell **FREE-SPACE SNAPSHOT** is read-only. Its optional/cache candidate total may include only measured hibernation plus Delivery Optimization values. It must not count pagefile or shadow storage as automatically reclaimable.

## PowerShell authority

READ / OBSERVE by default:
- hardware/OS/RAM/disk inventory;
- pagefile/MMAgent/service/task/policy state;
- startup inventory and suspicious-startup flagging;
- free-space snapshot;
- research prompt generation.

LOCAL / REVERSIBLE WRITE only after an exact confirmation phrase:
- Search sleep/disable + restore;
- selected telemetry quiet + restore;
- Windows 10 Upgrade Shield + restore;
- soft update preference + restore from saved registry state;
- manual update gate + restore from saved state;
- Edge background policy + restore from saved registry state;
- Game DVR policy + restore from saved registry state;
- memory-compression/SysMain controlled tests.

The Windows 10 Upgrade Shield must detect the installed OS and refuse its Windows 10 target-release policy on Windows 11.

Never delete services, alter protected ACLs, rename Windows DLLs, disable Defender as a performance tweak, disable the pagefile, install drivers automatically or request a BitLocker recovery key in AI.

## AI handoff

Architecture: HANDOFF, not CONNECTED. Build the smallest sufficient prompt locally, copy while the page owns focus, open one provider, then paste. The provider should distinguish VERIFIED / LIKELY / UNKNOWN / USER CHOICE and use current official/OEM evidence where browsing exists.

## Navigation/window behaviour

Primary workflow stays in the page. Secondary resources and external services may use the existing approximately 900 × 760 desktop child-window pattern with ordinary-tab fallback. Download links are not intercepted.

## Browser/device capability matrix

Required baseline: responsive form, Build Plan, local prompt generation and manual copy/paste. Enhanced: Clipboard API and child-window popup. Fallback: visible textareas and ordinary tabs.

## Accessibility

Form controls require labels, visible focus and adequate touch targets. No critical state is colour-only. The page must remain usable at narrow Android width and browser zoom. Reduced-motion users lose no information.

## External dependencies

No AI, Worker, API or paid service is required for the planning page. Awin MasterTag is commercial infrastructure only and must not influence evidence. Microsoft/OEM links are reference destinations, not runtime dependencies.

## Acceptance tests

Static:
- one `<h1>`, unique IDs, one Awin MasterTag and valid inline JavaScript;
- Low disk space participates in plan generation and AI handoff;
- PowerShell has closed here-strings/braces, defines and invokes `Show-MainMenu`, and performs no system-changing action on startup;
- FREE-SPACE SNAPSHOT does not delete or resize anything;
- canonical Markdown carries both protocol references.

Windows device:
- Windows PowerShell 5.1 parse/run as ordinary user and administrator;
- A/F/H/Q routes make no system changes;
- Delivery Optimization unavailable/empty states are readable;
- VSS unavailable/no-shadow states are readable;
- controlled writes request their exact phrase and restore from saved state;
- test Windows 10 and Windows 11 separately.

Browser/live:
- GitHub Pages on Windows Chrome/Edge and Android Chrome;
- `.ps1` download links return intended files;
- Build Plan/AI handoff after selecting Low disk space;
- popup-blocked/manual-copy fallback.

## Change log / unresolved issues

2026-10-01: First formal Aletheia Improve pass. Repaired truncated `windows-rescue-tool.ps1`, restored its main menu, added read-only Windows-managed storage measurement, exposed the companion in the browser and created this reconstruction spec. Source/static validation is possible here; real Windows execution remains required.
