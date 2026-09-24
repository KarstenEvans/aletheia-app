# Windows Rescue V1.0 — Evidence & Provenance Notes

**Research snapshot:** 30 August 2026

This file records why Windows Rescue makes particular choices. It deliberately separates:
1. **local evidence** — what the actual PC reports;
2. **OEM hardware facts** — service manuals/specifications;
3. **community experience / transparent open-source tooling** — useful for real-world tuning;
4. **vendor documentation** — useful for component semantics, policy names and support dates;
5. **videos/blog posts** — leads to investigate, not automatic truth.

Windows Rescue does **not** treat Microsoft recommendations as the objective. Microsoft documentation is used when it is the best wiring diagram for Windows internals, policy semantics or support dates.

---

## 1. Aletheia / Thalia design

Aletheia behaviour:
- ask first;
- preserve provenance;
- do not silently overwrite state;
- record superseded settings;
- provide rollback.

Canonical Aletheia:
https://github.com/KarstenEvans/aletheia-protocol

Thalia:
https://github.com/karstenevans/thalia-protocol

---

## 2. Windows 10 audience and security window

StatCounter Windows desktop version share:
https://gs.statcounter.com/windows-version-market-share/desktop/worldwide

At the July 2026 snapshot, Windows 10 was still about 30% of worldwide Windows desktop use, while Windows 11 was the majority.

Windows 10 normal support ended 14 October 2025.

Consumer ESU now runs through **12 October 2027** for eligible Windows 10 22H2 personal devices:
https://www.microsoft.com/en-gb/windows/extended-security-updates

This is a support-date fact, not a recommendation to accept other Microsoft defaults.

---

## 3. Memory compression and SysMain

Windows memory compression is part of the memory-management path and reduces hard page faults by retaining compressed pages in RAM.

PowerShell controls:
- `Get-MMAgent`
- `Enable-MMAgent -MemoryCompression`
- `Disable-MMAgent -MemoryCompression`

Technical reference:
https://learn.microsoft.com/powershell/module/mmagent/get-mmagent
https://learn.microsoft.com/powershell/module/mmagent/enable-mmagent
https://learn.microsoft.com/powershell/module/mmagent/disable-mmagent

Community reports demonstrate an important Windows 10 coupling: disabling SysMain can also disable memory compression, and re-enabling memory compression may start SysMain:
https://www.reddit.com/r/Windows10/comments/d96v54/
https://www.reddit.com/r/Windows10/comments/onxlnp/
https://www.reddit.com/r/Windows10/comments/ier69c/

Community experience with SysMain is mixed. Some HDD users report sustained 100% disk activity and a major improvement when stopping it; others report no benefit or worse performance. Therefore Windows Rescue measures and A/B tests rather than declaring SysMain universally good or bad.

**Judgement:** an SSD alone is not a reason to disable memory compression. On a 4 GB PC, forcing more pages to storage can be counterproductive even with an SSD. Preserve the pagefile and keep compression unless evidence says otherwise.

---

## 4. Windows Search

Windows Search indexing can consume I/O and CPU in the background. File Explorer can still perform non-indexed searches, but they can be slower.

Community tutorial, updated August 2026:
https://www.elevenforum.com/t/enable-or-disable-search-indexing-in-windows-11.2943/

Windows Rescue policy:
- if the user depends on Outlook/indexed Windows search: leave it alone or trim indexing;
- if the user rarely uses it: **Manual + stopped** is the default rescue option;
- if it repeatedly restarts and the owner wants no indexing: offer Disabled as a stronger, separately confirmed choice;
- always record original startup mode.

---

## 5. Telemetry and compatibility scanning

Chris Titus Tech WinUtil contains transparent telemetry tweaks, including disabling `DiagTrack`, with an undo script:
https://github.com/ChrisTitusTech/winutil/blob/main/config/tweaks.json
https://github.com/ChrisTitusTech/winutil/blob/main/docs/src/content/docs/code-reference/tweaks/Essential-Tweaks/Telemetry.mdx

Sophia Script exposes privacy/telemetry actions and diagnostic tracking scheduled tasks, with interactive/restore-oriented design:
https://github.com/farag2/Sophia-Script-for-Windows

A WinUtil issue specifically discusses Compatibility Appraiser tasks including:
- Microsoft Compatibility Appraiser
- ProgramDataUpdater
- StartupAppTask
- PcaPatchDbTask

https://github.com/ChrisTitusTech/winutil/issues/4035

privacy.sexy and related open-source script sets also expose Appraiser/CEIP tasks. Their breadth is useful research, but aggressive presets can affect functionality, so Windows Rescue selects a small set and avoids file deletion/IFEO tricks.

Project:
https://privacy.sexy/
https://github.com/undergroundwires/privacy.sexy

Current maintained fork worth inspecting:
https://github.com/Turtlecute33/Privacy.sexy-Revamped

**Windows Rescue judgement:** disabling `DiagTrack` and selected compatibility/CEIP tasks is an owner-choice privacy profile. Do not disable Windows Error Reporting, Program Compatibility Assistant, SmartScreen or Defender by default merely because another debloat script does.

---

## 6. Windows 11 upgrade shield

GRC InControl documents six registry values used to target a chosen Windows product/feature version and suppress OS upgrade availability:
https://www.grc.com/incontrol.htm
https://www.grc.com/incontrol/details.htm

Important values include:
- `TargetReleaseVersion`
- `TargetReleaseVersionInfo`
- `ProductVersion`
- `DisableOSUpgrade`
- `UpgradeAvailable`

Windows Rescue can implement the same transparent idea directly and separately disable selected recurring compatibility tasks.

This is not guaranteed to suppress every possible future UI nag, so the audit checks again after reboot.

---

## 7. Windows Update: soft preference versus hard gate

`AUOptions=2` is retained only as a **soft preference**, not sold as a reliable “off switch”.

Windows Update components can repair or restart one another. Community technical discussions show `WaaSMedicSvc` can re-enable Update Orchestrator components:
https://superuser.com/questions/1705378/what-keeps-re-enabling-update-orchestrator-service-in-windows-10

Some third-party scripts go much further by deleting service keys, taking ownership of protected tasks or renaming DLLs. Windows Rescue deliberately refuses those methods.

Manual Update Gate design:
- save current `Start` values first;
- close `wuauserv`, `UsoSvc` and attempt to close `WaaSMedicSvc`;
- leave BITS and Delivery Optimization services intact because other software may use them;
- verify actual service states after the change and after reboot;
- provide OPEN GATE using the saved original values;
- if there is no saved state, do not guess what the machine originally used.

Closing the gate can prevent ESU/security updates and may affect Store/Defender update paths. The owner must explicitly accept that trade-off.

---

## 8. Driver Sanctuary

Original LinkedIn concept:
https://www.linkedin.com/feed/update/urn:li:activity:7399589908371120128/

Windows Rescue expands the prompt with:
- make/model;
- Windows build;
- provider/version/date/INF;
- hardware IDs where available;
- OEM-first sourcing;
- official component-vendor fallback;
- an explicit `NO UPDATE NEEDED` result;
- no automatic install.

---

## 9. Storage / SSD upgrade

Do not infer interface from age or physical appearance.

Useful references:
- Kingston SSD form factors / M.2 versus mSATA:
  https://www.kingston.com/unitedkingdom/en/blog/pc-performance/ssd-form-factors
- Crucial M.2/NVMe installation:
  https://uk.crucial.com/support/ssd-support/how-to-install-m2-nvme-pcie-ssd
- iFixit optical-bay HDD enclosure guide:
  https://www.ifixit.com/Wiki/Optical_Bay_to_Hard_Drive_Enclosures

Dell Latitude E7240 is a useful warning example. Dell documents an **mSATA SSD card**, not a generic M.2 NVMe slot:
https://www.dell.com/support/manuals/en-uk/latitude-e7240-ultrabook/late7240om

Optical-bay caddies must match the exact machine/interface and typical 9.5 mm or 12.7 mm bay height.

---

## 10. Rufus / clean install

Official:
https://rufus.ie/

Rufus is a transparent open-source Windows installation-media tool. Its Windows User Experience options can reduce unwanted setup additions. Do not recommend silent first-disk installation to ordinary rescue users.

---

## 11. Startup / tuning tools

Useful transparent references:
- Sysinternals Autoruns:
  https://learn.microsoft.com/sysinternals/downloads/autoruns
- Chris Titus Tech WinUtil:
  https://github.com/ChrisTitusTech/winutil
- Sophia Script:
  https://github.com/farag2/Sophia-Script-for-Windows
- privacy.sexy:
  https://privacy.sexy/

Rule: inspect the exact change and rollback. Do not stack several debloat suites on top of one another.

---

## 12. Replacement comparison

Research-date example, **30 August 2026**:

Currys HP 15-fc0536sa:
- Ryzen 3 7320U
- 8 GB RAM
- 256 GB SSD
- £299 at research time

https://www.currys.co.uk/products/hp-15fc0536sa-15.6-laptop-amd-ryzen-3-256-gb-jet-black-10282701.html

Lenovo Certified Refurbished:
https://www.lenovo.com/gb/outletgb/en/laptops/

Lenovo says Certified Refurbished devices use a refurbishment/testing process and carry a standard one-year Lenovo warranty:
https://www.lenovo.com/gb/en/solutions/sustainability-solutions/circularity/certified-refurbishment-devices/

Prices are volatile. The AI app must re-search current offers before a purchase recommendation.

For old-machine value, compare current eBay **sold/completed** listings for:
- exact complete model;
- screen assembly;
- keyboard/palmrest;
- motherboard;
- RAM;
- charger;
- healthy storage if appropriate.

Do not claim parting-out always pays more.

---

## 13. Supplied videos

User-supplied:
- https://youtube.com/watch?v=KlLA4dv8REE
- https://www.youtube.com/watch?v=NdptCdfbB5g

The second was identified as a Windows junk-file cleanup video. Recommendations around `%temp%`, Windows temp and DNS flushing were independently checked.

Windows Rescue judgement:
- temporary-file cleanup can reclaim space;
- locked files should be skipped;
- DNS flush is troubleshooting, not a general speed boost;
- Prefetch deletion is not a RAM upgrade and should not be a universal ritual.

The first video was not reliably transcribed during the research pass, so detailed claims should not be attributed to it without independent verification.

---

## 14. Preinstalled Microsoft apps — review checked 24 September 2026

Discovery article supplied by the owner:
- https://www.makeuseof.com/remove-these-preinstalled-microsoft-apps-windows/

The article is useful for identifying candidates to review: OneDrive, Xbox, Copilot, new Outlook and Phone Link. Its claim that the PC felt smoother after removal is an individual observation, not a controlled benchmark, so the app must not promise the same speed-up.

Primary checks:

General supported uninstall, Windows 10/11:
- https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98

OneDrive:
- https://support.microsoft.com/en-US/onedrive/turn-off-disable-or-uninstall-onedrive
- https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive

Copilot:
- https://support.microsoft.com/en-us/microsoft-copilot/getting-started-with-microsoft-copilot

New Outlook:
- https://support.microsoft.com/en-us/outlook/getstarted/start-using-new-outlook-for-windows
- https://support.microsoft.com/en-us/outlook/getstarted/outlook-for-windows-not-responding-hangs-freezes-or-stops-working
- https://support.microsoft.com/en-us/office/lifecycle/officeinstall/uninstall-microsoft-365-or-office-from-a-pc

Phone Link:
- https://support.microsoft.com/en-us/windows/apps/phonelink/frequently-asked-questions-about-the-phone-link
- https://support.microsoft.com/en-us/windows/apps/phonelink/remove-your-mobile-device-from-phone-link-link-to-windows-and-windows-settings
- https://support.microsoft.com/en-us/windows/apps/phonelink/phone-link-requirements-and-setup

Xbox / Game Bar / Gaming Services:
- https://support.microsoft.com/en-us/accessibility/windows/use-a-screen-reader-to-record-your-screen-with-xbox-game-bar
- https://support.microsoft.com/en-au/servicing/os/windows-10/2021/06/kb5004327-error-0x80073d26-or-0x8007139f-occurs-when-you-install-or-start-gaming-services-on-a-windo

Windows Rescue judgement:
- review unused bundled apps rather than mass-removing them;
- separate disk-space recovery from startup/background-load reduction;
- prefer Settings/normal uninstall and supported feature toggles;
- OneDrive may be better solved by unlink or Files On-Demand;
- Copilot desktop can be removed without losing browser access;
- identify new Outlook versus classic Outlook/Microsoft 365 before removal;
- current Microsoft documentation says Phone Link cannot be uninstalled, so disconnect/disable instead;
- keep Xbox app, Game Bar and Gaming Services as separate decisions;
- measure before/after rather than treating "debloat" as a magic speed button.

---

## 15. Thalia note

The serious diagnosis comes first. Humour belongs near the end.

Approved flavour:
> **ET has gone home already. Your PC doesn’t need to keep phoning home.**

And:
> A 4 GB laptop does not need another background service. Windows: “Splendid. I have installed three.”