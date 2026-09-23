# Windows Rescue App (The Grimoire of Windows Taming)
# PowerShell companion — V1.0 CLEAN DEPLOYMENT CANDIDATE
# Windows 10 / Windows PowerShell 5.1 compatible where cmdlets exist.
# Starts READ-ONLY. Every write action requires an explicit phrase.
# It never deletes service registry keys, changes ACLs, renames system DLLs,
# disables Defender/pagefile, downloads drivers, clones disks or changes firmware.

Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Continue'

function Test-IsAdmin {
    $id = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($id)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

$script:IsAdmin = Test-IsAdmin
$script:WorkDir = $null
$script:LogFile = $null
$script:StateRoot = Join-Path $env:ProgramData 'WindowsRescue'
$script:UpdateStateFile = Join-Path $script:StateRoot 'update-gate-state.json'
$script:SearchStateFile = Join-Path $script:StateRoot 'search-state.json'
$script:SysMainStateFile = Join-Path $script:StateRoot 'sysmain-state.json'
$script:TelemetryStateFile = Join-Path $script:StateRoot 'telemetry-state.json'
$script:UpgradeStateFile = Join-Path $script:StateRoot 'upgrade-shield-state.json'

function Confirm-Exact([string]$Question, [string]$Phrase='YES') {
    Write-Host "`n$Question" -ForegroundColor Yellow
    $answer = Read-Host "Type $Phrase to continue, or anything else to cancel"
    return ($answer -ceq $Phrase)
}

function Require-Admin {
    if (-not $script:IsAdmin) {
        Write-Host 'This action needs Windows PowerShell opened with "Run as administrator".' -ForegroundColor Yellow
        return $false
    }
    return $true
}

function Ensure-StateRoot {
    if (-not (Test-Path $script:StateRoot)) {
        New-Item -ItemType Directory -Path $script:StateRoot -Force | Out-Null
    }
}

function Ensure-WorkDir {
    if ($script:WorkDir) { return }
    $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $script:WorkDir = Join-Path ([Environment]::GetFolderPath('Desktop')) "Windows-Rescue-Backup-$stamp"
    New-Item -ItemType Directory -Path $script:WorkDir -Force | Out-Null
    $script:LogFile = Join-Path $script:WorkDir 'changes.log'
    "Windows Rescue session created $(Get-Date -Format s)" | Out-File $script:LogFile -Encoding utf8
}

function Write-Log([string]$Text) {
    Ensure-WorkDir
    "$(Get-Date -Format s)  $Text" | Out-File $script:LogFile -Encoding utf8 -Append
}

function Export-RegKey([string]$Key,[string]$FileName) {
    if (-not (Require-Admin)) { return }
    Ensure-WorkDir
    $dest = Join-Path $script:WorkDir $FileName
    & reg.exe export $Key $dest /y | Out-Null
    if (Test-Path $dest) { Write-Log "Exported $Key -> $dest" }
}

function Get-RegValueSafe([string]$Path,[string]$Name) {
    try { return (Get-ItemProperty -Path $Path -Name $Name -ErrorAction Stop).$Name }
    catch { return '<Not configured>' }
}

function Get-ServiceState([string]$Name) {
    try {
        $svc = Get-Service -Name $Name -ErrorAction Stop
        $reg = Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\$Name" -Name Start -ErrorAction Stop
        [pscustomobject]@{ Name=$Name; Start=[int]$reg.Start; Status=[string]$svc.Status }
    } catch {
        [pscustomobject]@{ Name=$Name; Start=$null; Status='<Unavailable>' }
    }
}

function Set-ServiceStartRaw([string]$Name,[int]$Start) {
    $path = "HKLM:\SYSTEM\CurrentControlSet\Services\$Name"
    if (Test-Path $path) {
        Set-ItemProperty -Path $path -Name Start -Value $Start -ErrorAction Stop
    }
}

function StartText($value) {
    switch ($value) {
        0 {'Boot'}; 1 {'System'}; 2 {'Automatic'}; 3 {'Manual'}; 4 {'Disabled'}; default {"Unknown($value)"}
    }
}

function Save-JsonState([string]$Path,$Object) {
    Ensure-StateRoot
    $Object | ConvertTo-Json -Depth 8 | Out-File $Path -Encoding utf8
}

function Load-JsonState([string]$Path) {
    if (-not (Test-Path $Path)) { return $null }
    try { return (Get-Content $Path -Raw | ConvertFrom-Json) } catch { return $null }
}

function Add-Line($List,[string]$Text='') { [void]$List.Add($Text) }

function Get-SystemDriveSummary {
    $o = [ordered]@{ DiskNumber='<Unknown>'; FriendlyName='<Unknown>'; BusType='<Unknown>'; MediaType='<Unknown>'; SizeGB='<Unknown>'; PartitionStyle='<Unknown>' }
    try {
        $part = Get-Partition -DriveLetter C -ErrorAction Stop
        $disk = Get-Disk -Number $part.DiskNumber -ErrorAction Stop
        $o.DiskNumber = $disk.Number
        $o.FriendlyName = $disk.FriendlyName
        $o.BusType = [string]$disk.BusType
        $o.SizeGB = [math]::Round($disk.Size/1GB,1)
        $o.PartitionStyle = [string]$disk.PartitionStyle
        try {
            $pd = Get-PhysicalDisk | Where-Object FriendlyName -eq $disk.FriendlyName | Select-Object -First 1
            if ($pd) { $o.MediaType = [string]$pd.MediaType }
        } catch {}
    } catch {}
    [pscustomobject]$o
}

function Get-BitLockerText {
    try {
        if (Get-Command Get-BitLockerVolume -ErrorAction SilentlyContinue) {
            $b = Get-BitLockerVolume -MountPoint C: -ErrorAction Stop
            return "VolumeStatus=$($b.VolumeStatus); ProtectionStatus=$($b.ProtectionStatus); Encryption=$($b.EncryptionMethod)"
        }
    } catch {}
    '<Unavailable in this edition/shell>'
}

function Get-TaskState([string]$TaskPath,[string]$TaskName) {
    try {
        $t = Get-ScheduledTask -TaskPath $TaskPath -TaskName $TaskName -ErrorAction Stop
        [pscustomobject]@{ TaskPath=$TaskPath; TaskName=$TaskName; Exists=$true; Enabled=($t.State -ne 'Disabled') }
    } catch {
        [pscustomobject]@{ TaskPath=$TaskPath; TaskName=$TaskName; Exists=$false; Enabled=$null }
    }
}

function Restore-TaskState($t) {
    if (-not $t.Exists) { return }
    try {
        if ($t.Enabled) {
            Enable-ScheduledTask -TaskPath $t.TaskPath -TaskName $t.TaskName | Out-Null
        } else {
            Disable-ScheduledTask -TaskPath $t.TaskPath -TaskName $t.TaskName | Out-Null
        }
    } catch {
        Write-Host "Could not restore task $($t.TaskPath)$($t.TaskName): $($_.Exception.Message)" -ForegroundColor Yellow
    }
}


function Get-StartupCommandPath([string]$Command) {
    if ([string]::IsNullOrWhiteSpace($Command)) { return $null }
    $c = $Command.Trim()
    if ($c.StartsWith('"')) {
        $endQuote = $c.IndexOf('"',1)
        if ($endQuote -gt 1) { return $c.Substring(1,$endQuote-1) }
    }
    if ($c -match '^(.*?\.(?:exe|bat|cmd|ps1|vbs|vbe|js|jse|wsf))(?=\s|$)') {
        return $Matches[1].Trim('"')
    }
    return $null
}

function Get-StartupRisk {
    param($Entry)

    $name = [string]$Entry.Name
    $cmd  = [string]$Entry.Command
    $reasons = New-Object System.Collections.Generic.List[string]

    if ($cmd -match '(?i)\\Users\\Public\\Downloads\\') {
        [void]$reasons.Add('runs from the Public Downloads folder')
    }
    if ($cmd -match '(?i)\.(bat|cmd|ps1|vbs|vbe|js|jse|wsf)(?:"|\s|$)') {
        [void]$reasons.Add('runs a script automatically at logon')
    }
    if ($name -match '(?i)^WindowsSecurity$' -and
        $cmd -notmatch '(?i)\\Windows\\System32\\SecurityHealthSystray\.exe') {
        [void]$reasons.Add('uses a Windows-security-looking name but is not SecurityHealthSystray.exe')
    }

    if ($reasons.Count -eq 0) { return $null }

    $path = Get-StartupCommandPath $cmd
    $hash = $null
    if ($path -and (Test-Path -LiteralPath $path -PathType Leaf)) {
        try { $hash = (Get-FileHash -LiteralPath $path -Algorithm SHA256 -ErrorAction Stop).Hash } catch {}
    }

    [pscustomobject]@{
        Name     = $name
        Command  = $cmd
        Location = [string]$Entry.Location
        Reasons  = ($reasons -join '; ')
        FilePath = $path
        SHA256   = $hash
    }
}

function New-SecurityResearchPrompt($Risks,$Computer,$OS) {
    $lines = New-Object System.Collections.Generic.List[string]
    [void]$lines.Add('I am using Windows Rescue. A read-only startup audit found one or more suspicious persistence entries.')
    [void]$lines.Add('')
    [void]$lines.Add("Computer: $Computer")
    [void]$lines.Add("Windows: $OS")
    [void]$lines.Add('')
    [void]$lines.Add('Investigate these entries WITHOUT asking me to run them:')
    foreach ($r in $Risks) {
        [void]$lines.Add("- Name: $($r.Name)")
        [void]$lines.Add("  Command: $($r.Command)")
        [void]$lines.Add("  Registry/startup location: $($r.Location)")
        [void]$lines.Add("  Why Windows Rescue flagged it: $($r.Reasons)")
        if ($r.FilePath) { [void]$lines.Add("  File path: $($r.FilePath)") }
        if ($r.SHA256) { [void]$lines.Add("  SHA256: $($r.SHA256)") }
    }
    [void]$lines.Add('')
    [void]$lines.Add('Use reputable security-vendor reports, sandbox/malware databases, community incident reports, and official documentation where useful. Distinguish CONFIRMED MALWARE from SUSPICIOUS/UNCONFIRMED evidence.')
    [void]$lines.Add('Give me a safe order of operations: isolate if appropriate, preserve useful evidence, scan, remove/quarantine persistence, verify after reboot, and check for additional persistence. Do not tell me to execute the suspicious file.')
    [void]$lines.Add('Do not ask me to paste passwords, licence keys, BitLocker recovery keys, authentication cookies, or other secrets.')
    [void]$lines.Add('Return: VERDICT, EVIDENCE, IMMEDIATE ACTION, CLEANUP, REBOOT CHECK, FOLLOW-UP.')
    return ($lines -join "`r`n")
}

function Offer-SecurityResearchPrompt($Risks,$Computer,$OS) {
    $prompt = New-SecurityResearchPrompt $Risks $Computer $OS
    Write-Host ''
    Write-Host 'OPTIONAL AI SECURITY RESEARCH' -ForegroundColor Cyan
    Write-Host 'If you use AI, Windows Rescue can prepare a research prompt.'
    Write-Host 'Copy it, open a NEW chat in ChatGPT, Google, DeepSeek or another AI with web research, and paste it as the first message.' -ForegroundColor Green
    Write-Host 'Do not include passwords, licence keys or BitLocker recovery keys.' -ForegroundColor Yellow
    Write-Host ''
    Write-Host 'C  Copy security prompt to clipboard'
    Write-Host 'S  Save security prompt to Desktop'
    Write-Host 'V  View prompt'
    Write-Host 'Enter  Return without doing either'
    $c = (Read-Host 'Choose').Trim().ToUpperInvariant()
    switch ($c) {
        'C' {
            try { Set-Clipboard $prompt -ErrorAction Stop; Write-Host 'Copied. Open a NEW AI chat and paste it.' -ForegroundColor Green }
            catch { Write-Host 'Clipboard copy failed. Choose S to save it instead.' -ForegroundColor Yellow }
        }
        'S' {
            $dest = Join-Path ([Environment]::GetFolderPath('Desktop')) 'Windows-Rescue-Security-Research-Prompt.txt'
            $prompt | Out-File $dest -Encoding utf8
            Write-Host "Saved: $dest" -ForegroundColor Green
            Write-Host 'Open a NEW AI chat and paste the contents of that file.' -ForegroundColor Green
        }
        'V' { Write-Host ''; Write-Host $prompt; Write-Host '' }
    }
}

function Write-AuditHeading([string]$Text, [ConsoleColor]$Color=[ConsoleColor]::Cyan) {
    Write-Host ''
    Write-Host $Text -ForegroundColor $Color
    Write-Host ('=' * $Text.Length) -ForegroundColor $Color
}

function Get-WindowsRescueAudit {
    Write-AuditHeading 'WINDOWS RESCUE - SAFE FIRST LOOK'
    Write-Host 'No settings are being changed.' -ForegroundColor Green

    $report = New-Object System.Collections.Generic.List[string]
    $os = Get-CimInstance Win32_OperatingSystem
    $cs = Get-CimInstance Win32_ComputerSystem
    $cpu = Get-CimInstance Win32_Processor | Select-Object -First 1
    $bios = Get-CimInstance Win32_BIOS | Select-Object -First 1
    $ramGB = [math]::Round($cs.TotalPhysicalMemory/1GB,1)
    $logicalC = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'"
    $drive = Get-SystemDriveSummary
    $startup = @()
    try { $startup = @(Get-CimInstance Win32_StartupCommand | Sort-Object Name) } catch {}
    $startupRisks = @()
    foreach ($x in $startup) {
        $risk = Get-StartupRisk $x
        if ($risk) { $startupRisks += $risk }
    }

    # Gather details for the saved/technical report.
    Add-Line $report "Windows Rescue Audit - $(Get-Date)"
    Add-Line $report "Computer: $($cs.Manufacturer) $($cs.Model)"
    Add-Line $report "OS: $($os.Caption) | Version $($os.Version) | Build $($os.BuildNumber) | $($os.OSArchitecture)"
    Add-Line $report "CPU: $($cpu.Name)"
    Add-Line $report "BIOS: $($bios.SMBIOSBIOSVersion) | $($bios.Manufacturer)"
    Add-Line $report "RAM: $ramGB GB"
    if ($logicalC) {
        Add-Line $report "C: $([math]::Round($logicalC.FreeSpace/1GB,1)) GB free of $([math]::Round($logicalC.Size/1GB,1)) GB"
    }
    Add-Line $report "C: disk: $($drive.FriendlyName) | bus=$($drive.BusType) | media=$($drive.MediaType) | size=$($drive.SizeGB) GB | style=$($drive.PartitionStyle)"
    Add-Line $report "BitLocker/device encryption C: $(Get-BitLockerText)"
    Add-Line $report "Administrator shell: $script:IsAdmin"

    try {
        $mods = Get-CimInstance Win32_PhysicalMemory
        Add-Line $report ''
        Add-Line $report 'Installed RAM modules:'
        foreach ($m in $mods) {
            Add-Line $report "- $($m.DeviceLocator): $([math]::Round($m.Capacity/1GB,2)) GB | $($m.Speed) MHz | $($m.PartNumber)"
        }
    } catch {}

    if ($script:IsAdmin) {
        try {
            $mm = Get-MMAgent -ErrorAction Stop
            Add-Line $report ''
            Add-Line $report "Memory compression: $($mm.MemoryCompression)"
            Add-Line $report "Page combining: $($mm.PageCombining)"
            Add-Line $report "Application launch prefetching: $($mm.ApplicationLaunchPrefetching)"
        } catch {
            Add-Line $report 'MMAgent: unavailable even in administrator shell'
        }
    } else {
        Add-Line $report ''
        Add-Line $report 'MMAgent: skipped - Administrator shell required for this check'
    }

    try {
        foreach ($p in Get-CimInstance Win32_PageFileUsage) {
            Add-Line $report "Pagefile $($p.Name): allocated=$($p.AllocatedBaseSize) MB current=$($p.CurrentUsage) MB peak=$($p.PeakUsage) MB"
        }
    } catch {}

    Add-Line $report ''
    Add-Line $report 'Physical disks:'
    try {
        foreach ($d in Get-Disk | Sort-Object Number) {
            $media = '<Unknown>'
            try {
                $pd = Get-PhysicalDisk | Where-Object FriendlyName -eq $d.FriendlyName | Select-Object -First 1
                if ($pd) { $media = [string]$pd.MediaType }
            } catch {}
            Add-Line $report "- Disk $($d.Number): $($d.FriendlyName) | bus=$($d.BusType) | media=$media | $([math]::Round($d.Size/1GB,1)) GB | boot=$($d.IsBoot) | system=$($d.IsSystem)"
        }
    } catch {}

    try {
        $odd = Get-CimInstance Win32_CDROMDrive
        Add-Line $report ''
        if ($odd) {
            foreach ($o in $odd) { Add-Line $report "Optical: $($o.Name) | drive=$($o.Drive)" }
        } else {
            Add-Line $report 'Optical drive: none reported'
        }
    } catch {}

    Add-Line $report ''
    Add-Line $report 'Selected services:'
    $serviceStates = @{}
    foreach ($n in @('SysMain','WSearch','DiagTrack','wuauserv','UsoSvc','WaaSMedicSvc','BITS','DoSvc')) {
        $s = Get-ServiceState $n
        $serviceStates[$n] = $s
        Add-Line $report "- $($n): status=$($s.Status), start=$(StartText $s.Start)"
    }

    Add-Line $report ''
    Add-Line $report 'Selected tasks:'
    $taskDefs = @(
        @('\Microsoft\Windows\Application Experience\','Microsoft Compatibility Appraiser'),
        @('\Microsoft\Windows\Application Experience\','ProgramDataUpdater'),
        @('\Microsoft\Windows\Customer Experience Improvement Program\','Consolidator'),
        @('\Microsoft\Windows\Customer Experience Improvement Program\','UsbCeip')
    )
    $taskStates = @()
    foreach ($pair in $taskDefs) {
        $t = Get-TaskState $pair[0] $pair[1]
        $taskStates += $t
        Add-Line $report "- $($pair[0])$($pair[1]): exists=$($t.Exists), enabled=$($t.Enabled)"
    }

    Add-Line $report ''
    Add-Line $report "Target ProductVersion: $(Get-RegValueSafe 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate' 'ProductVersion')"
    Add-Line $report "TargetReleaseVersion: $(Get-RegValueSafe 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate' 'TargetReleaseVersion')"
    Add-Line $report "TargetReleaseVersionInfo: $(Get-RegValueSafe 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate' 'TargetReleaseVersionInfo')"
    Add-Line $report "AUOptions: $(Get-RegValueSafe 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU' 'AUOptions')"
    Add-Line $report "Exclude WU drivers: $(Get-RegValueSafe 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate' 'ExcludeWUDriversInQualityUpdate')"
    Add-Line $report "Delivery Optimization mode: $(Get-RegValueSafe 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\DeliveryOptimization' 'DODownloadMode')"

    Add-Line $report ''
    Add-Line $report 'Startup commands:'
    foreach ($x in $startup) {
        Add-Line $report "- $($x.Name) | $($x.Location) | $($x.Command)"
    }

    # Human-readable summary first.
    Write-AuditHeading 'YOUR PC'
    Write-Host ("{0} {1}" -f $cs.Manufacturer,$cs.Model)
    Write-Host ("Windows: {0} build {1}" -f $os.Caption,$os.BuildNumber)
    Write-Host ("RAM: {0} GB" -f $ramGB)

    $isSSD = ([string]$drive.MediaType -match '(?i)SSD') -or ([string]$drive.FriendlyName -match '(?i)SSD|KIOXIA|NVME')
    if ($isSSD) {
        Write-Host ("Storage: {0} GB {1} SSD - good" -f $drive.SizeGB,$drive.BusType) -ForegroundColor Green
    } else {
        Write-Host ("Storage: {0} GB {1} / {2}" -f $drive.SizeGB,$drive.BusType,$drive.MediaType) -ForegroundColor Yellow
    }

    if ($logicalC) {
        Write-Host ("Free space: {0} GB" -f [math]::Round($logicalC.FreeSpace/1GB,1))
    }

    Write-AuditHeading 'RESCUE VERDICT'
    if ($isSSD -and $ramGB -ge 8) {
        Write-Host 'Hardware looks adequate. Do not buy an SSD or RAM merely to fix general Windows sluggishness.' -ForegroundColor Green
        Write-Host 'Concentrate on startup/background activity, privacy, update control and any actual faults.'
    } elseif (-not $isSSD) {
        Write-Host 'Windows appears to be running from non-SSD storage. An SSD investigation may give the largest speed improvement.' -ForegroundColor Yellow
    } elseif ($ramGB -lt 8) {
        Write-Host 'Storage is already SSD-class, but RAM is limited. Check whether this exact model supports a RAM upgrade.' -ForegroundColor Yellow
    }

    if (-not $script:IsAdmin) {
        Write-Host ''
        Write-Host 'NOTE: This was a non-administrator audit. That is safe, but a few checks such as MMAgent were skipped.' -ForegroundColor DarkYellow
    }

    if ($startupRisks.Count -gt 0) {
        Write-AuditHeading 'SECURITY FIRST' Red
        Write-Host 'One or more startup entries look unusual. Do not apply tuning changes until these are understood.' -ForegroundColor Red
        foreach ($r in $startupRisks) {
            Write-Host ''
            Write-Host ("Entry:   {0}" -f $r.Name) -ForegroundColor Red
            Write-Host ("Command: {0}" -f $r.Command) -ForegroundColor Yellow
            Write-Host ("Why:     {0}" -f $r.Reasons)
            if ($r.SHA256) { Write-Host ("SHA256:  {0}" -f $r.SHA256) }
        }
        Write-Host ''
        Write-Host 'Windows Rescue will not remove these automatically.' -ForegroundColor Green
    }

    Write-AuditHeading 'BACKGROUND / UPDATE SNAPSHOT'
    Write-Host ("Search:    {0}, startup {1}" -f $serviceStates['WSearch'].Status,(StartText $serviceStates['WSearch'].Start))
    Write-Host ("SysMain:   {0}, startup {1}" -f $serviceStates['SysMain'].Status,(StartText $serviceStates['SysMain'].Start))
    Write-Host ("Telemetry: DiagTrack {0}, startup {1}" -f $serviceStates['DiagTrack'].Status,(StartText $serviceStates['DiagTrack'].Start))
    Write-Host ("Update:    wuauserv {0}; UsoSvc {1}" -f $serviceStates['wuauserv'].Status,$serviceStates['UsoSvc'].Status)

    $enabledCompat = @($taskStates | Where-Object { $_.Exists -and $_.Enabled }).Count
    if ($enabledCompat -gt 0) {
        Write-Host ("Compatibility/CEIP tasks still enabled: {0}" -f $enabledCompat) -ForegroundColor Yellow
    }

    Write-AuditHeading 'WHAT NEXT?'
    if ($startupRisks.Count -gt 0) {
        Write-Host '1. Resolve the SECURITY FIRST item before optimisation.' -ForegroundColor Red
        Write-Host '2. Then rerun the audit.'
    } else {
        Write-Host '1. Review startup/background programs.'
        Write-Host '2. Review Windows 11 / telemetry controls.'
        Write-Host '3. Review update control.'
        if (-not $isSSD -or $ramGB -lt 8) {
            Write-Host '4. Investigate a hardware upgrade.'
        }
    }

    Write-Host ''
    if ($startupRisks.Count -gt 0) {
        Write-Host 'AI users: type R to create a safe security-research prompt for a NEW AI chat.' -ForegroundColor Cyan
    }
    $choice = (Read-Host 'D = technical details, SAVE = save report, R = research prompt, or Enter = return').Trim().ToUpperInvariant()
    if ($choice -eq 'R' -and $startupRisks.Count -gt 0) {
        Offer-SecurityResearchPrompt $startupRisks ("$($cs.Manufacturer) $($cs.Model)") ("$($os.Caption) build $($os.BuildNumber)")
    } elseif ($choice -eq 'D') {
        Write-AuditHeading 'TECHNICAL DETAILS'
        Write-Host ($report -join "`n")
        Write-Host ''
        $saveAfter = (Read-Host 'Type SAVE to save this report, or press Enter to return').Trim().ToUpperInvariant()
        if ($saveAfter -eq 'SAVE') {
            Ensure-WorkDir
            $out = Join-Path $script:WorkDir 'audit.txt'
            $report | Out-File $out -Encoding utf8
            Write-Host "Saved: $out" -ForegroundColor Green
        }
    } elseif ($choice -eq 'SAVE') {
        Ensure-WorkDir
        $out = Join-Path $script:WorkDir 'audit.txt'
        $report | Out-File $out -Encoding utf8
        Write-Host "Saved: $out" -ForegroundColor Green
    }
}

function Set-WSearchSleep {
    if (-not (Require-Admin)) { return }
    $s = Get-ServiceState 'WSearch'
    Write-Host "WSearch: status=$($s.Status), start=$(StartText $s.Start)"
    Write-Host 'This sets Search to Manual and stops it now. Windows/apps may start it later when needed.' -ForegroundColor White
    Write-Host 'Indexed Start/File Explorer/Outlook searches can become slower or incomplete while it is stopped.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Put Windows Search to sleep (Manual + stop)?' 'SLEEP SEARCH')) { return }
    if (-not (Test-Path $script:SearchStateFile)) {
        Save-JsonState $script:SearchStateFile ([pscustomobject]@{ Saved=(Get-Date -Format s); Service=$s })
    }
    Export-RegKey 'HKLM\SYSTEM\CurrentControlSet\Services\WSearch' 'before-WSearch.reg'
    Stop-Service WSearch -Force -ErrorAction SilentlyContinue
    Set-Service WSearch -StartupType Manual
    Write-Log "WSearch -> Manual + stopped. Previous start=$(StartText $s.Start), status=$($s.Status)."
    Write-Host 'Windows Search is sleeping. Reboot and judge the real machine, not the theory.' -ForegroundColor Green
}

function Set-WSearchDisabled {
    if (-not (Require-Admin)) { return }
    $s = Get-ServiceState 'WSearch'
    Write-Host 'Use this only if Manual keeps restarting and you deliberately want no indexing.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Seal Windows Search (Disabled + stop)?' 'SEAL SEARCH')) { return }
    if (-not (Test-Path $script:SearchStateFile)) {
        Save-JsonState $script:SearchStateFile ([pscustomobject]@{ Saved=(Get-Date -Format s); Service=$s })
    }
    Export-RegKey 'HKLM\SYSTEM\CurrentControlSet\Services\WSearch' 'before-WSearch.reg'
    Stop-Service WSearch -Force -ErrorAction SilentlyContinue
    Set-Service WSearch -StartupType Disabled
    Write-Log "WSearch -> Disabled. Previous start=$(StartText $s.Start), status=$($s.Status)."
    Write-Host 'Search indexing sealed. Use Restore Search to return to the saved original state.' -ForegroundColor Green
}

function Restore-WSearch {
    if (-not (Require-Admin)) { return }
    $state = Load-JsonState $script:SearchStateFile
    if (-not $state) { Write-Host 'No saved Windows Search state. Refusing to guess the original startup mode.' -ForegroundColor Yellow; return }
    if (-not (Confirm-Exact "Restore WSearch to saved start=$(StartText ([int]$state.Service.Start))?" 'RESTORE SEARCH')) { return }
    Set-ServiceStartRaw 'WSearch' ([int]$state.Service.Start)
    if ($state.Service.Status -eq 'Running') { Start-Service WSearch -ErrorAction SilentlyContinue }
    Write-Log 'Restored WSearch saved startup state.'
    Remove-Item $script:SearchStateFile -Force -ErrorAction SilentlyContinue
    Write-Host 'Windows Search restored.' -ForegroundColor Green
}

function Set-TelemetryQuiet {
    if (-not (Require-Admin)) { return }
    Write-Host 'Quiet Telemetry disables DiagTrack and selected CEIP tasks. Windows 11 Appraiser tasks belong to the separate Upgrade Shield.' -ForegroundColor White
    Write-Host 'It does NOT disable Defender, SmartScreen, Windows Error Reporting or Program Compatibility Assistant.' -ForegroundColor Green
    Write-Host 'ET has gone home already. Your PC does not need to keep phoning home.' -ForegroundColor Cyan
    if (-not (Confirm-Exact 'Apply Quiet Telemetry?' 'QUIET TELEMETRY')) { return }

    $taskDefs = @(
        @('\Microsoft\Windows\Customer Experience Improvement Program\','Consolidator'),
        @('\Microsoft\Windows\Customer Experience Improvement Program\','UsbCeip')
    )
    $taskStates = @()
    foreach ($x in $taskDefs) { $taskStates += Get-TaskState $x[0] $x[1] }
    $svc = Get-ServiceState 'DiagTrack'
    if (-not (Test-Path $script:TelemetryStateFile)) {
        Save-JsonState $script:TelemetryStateFile ([pscustomobject]@{ Saved=(Get-Date -Format s); DiagTrack=$svc; Tasks=$taskStates })
    }

    if ($svc.Start -ne $null) {
        Export-RegKey 'HKLM\SYSTEM\CurrentControlSet\Services\DiagTrack' 'before-DiagTrack.reg'
        Stop-Service DiagTrack -Force -ErrorAction SilentlyContinue
        Set-Service DiagTrack -StartupType Disabled -ErrorAction SilentlyContinue
    }
    foreach ($t in $taskStates) {
        if ($t.Exists) {
            try { Disable-ScheduledTask -TaskPath $t.TaskPath -TaskName $t.TaskName | Out-Null } catch {}
        }
    }
    Write-Log 'Applied Quiet Telemetry: DiagTrack disabled; selected CEIP tasks disabled where present.'
    Write-Host 'Quiet Telemetry applied. Reboot, audit and verify.' -ForegroundColor Green
}

function Restore-TelemetryQuiet {
    if (-not (Require-Admin)) { return }
    $state = Load-JsonState $script:TelemetryStateFile
    if (-not $state) { Write-Host 'No saved telemetry state. Refusing to guess the originals.' -ForegroundColor Yellow; return }
    if (-not (Confirm-Exact 'Restore the saved telemetry service/task states?' 'RESTORE TELEMETRY')) { return }
    if ($state.DiagTrack.Start -ne $null) {
        Set-ServiceStartRaw 'DiagTrack' ([int]$state.DiagTrack.Start)
        if ($state.DiagTrack.Status -eq 'Running') { Start-Service DiagTrack -ErrorAction SilentlyContinue }
    }
    foreach ($t in $state.Tasks) { Restore-TaskState $t }
    Write-Log 'Restored saved telemetry states.'
    Remove-Item $script:TelemetryStateFile -Force -ErrorAction SilentlyContinue
    Write-Host 'Telemetry state restored.' -ForegroundColor Green
}

function Get-SpecificRegState([string]$Path,[string[]]$Names) {
    $vals = @()
    foreach ($n in $Names) {
        $exists = $false; $value = $null
        try { $value = (Get-ItemProperty -Path $Path -Name $n -ErrorAction Stop).$n; $exists=$true } catch {}
        $vals += [pscustomobject]@{ Path=$Path; Name=$n; Exists=$exists; Value=$value }
    }
    $vals
}

function Restore-SpecificRegState($States) {
    foreach ($v in $States) {
        if ($v.Exists) {
            New-Item -Path $v.Path -Force | Out-Null
            $kind = if ($v.Value -is [int] -or $v.Value -is [long]) {'DWord'} else {'String'}
            New-ItemProperty -Path $v.Path -Name $v.Name -Value $v.Value -PropertyType $kind -Force | Out-Null
        } else {
            Remove-ItemProperty -Path $v.Path -Name $v.Name -ErrorAction SilentlyContinue
        }
    }
}

function Set-Win10UpgradeShield {
    if (-not (Require-Admin)) { return }
    Write-Host 'This holds feature targeting at Windows 10 22H2 and quiets two recurring compatibility tasks.' -ForegroundColor White
    Write-Host 'It does not guarantee Microsoft can never introduce a different notification later.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Apply the Windows 10 Upgrade Shield?' 'SHIELD WINDOWS 10')) { return }

    $wu='HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate'
    $store='HKLM:\SOFTWARE\Policies\Microsoft\WindowsStore'
    $up='HKLM:\SYSTEM\Setup\UpgradeNotification'
    $regStates = @()
    $regStates += Get-SpecificRegState $wu @('ProductVersion','TargetReleaseVersion','TargetReleaseVersionInfo','DisableOSUpgrade')
    $regStates += Get-SpecificRegState $store @('DisableOSUpgrade')
    $regStates += Get-SpecificRegState $up @('UpgradeAvailable')
    $tasks = @(
        (Get-TaskState '\Microsoft\Windows\Application Experience\' 'Microsoft Compatibility Appraiser'),
        (Get-TaskState '\Microsoft\Windows\Application Experience\' 'ProgramDataUpdater')
    )
    if (-not (Test-Path $script:UpgradeStateFile)) {
        Save-JsonState $script:UpgradeStateFile ([pscustomobject]@{Saved=(Get-Date -Format s); Registry=$regStates; Tasks=$tasks})
    }

    New-Item $wu -Force | Out-Null
    New-ItemProperty $wu -Name ProductVersion -PropertyType String -Value 'Windows 10' -Force | Out-Null
    New-ItemProperty $wu -Name TargetReleaseVersion -PropertyType DWord -Value 1 -Force | Out-Null
    New-ItemProperty $wu -Name TargetReleaseVersionInfo -PropertyType String -Value '22H2' -Force | Out-Null
    New-ItemProperty $wu -Name DisableOSUpgrade -PropertyType DWord -Value 1 -Force | Out-Null
    New-Item $store -Force | Out-Null
    New-ItemProperty $store -Name DisableOSUpgrade -PropertyType DWord -Value 1 -Force | Out-Null
    New-Item $up -Force | Out-Null
    New-ItemProperty $up -Name UpgradeAvailable -PropertyType DWord -Value 0 -Force | Out-Null

    foreach ($t in $tasks) {
        if ($t.Exists) { try { Disable-ScheduledTask -TaskPath $t.TaskPath -TaskName $t.TaskName | Out-Null } catch {} }
    }
    Write-Log 'Applied Windows 10 Upgrade Shield (target Win10 22H2 + selected compatibility tasks disabled).'
    Write-Host 'Upgrade Shield applied. Reboot and audit again.' -ForegroundColor Green
}

function Restore-Win10UpgradeShield {
    if (-not (Require-Admin)) { return }
    $state = Load-JsonState $script:UpgradeStateFile
    if (-not $state) { Write-Host 'No saved Upgrade Shield state. Refusing to guess.' -ForegroundColor Yellow; return }
    if (-not (Confirm-Exact 'Restore the registry/task values saved before Upgrade Shield?' 'RESTORE SHIELD')) { return }
    Restore-SpecificRegState $state.Registry
    foreach ($t in $state.Tasks) { Restore-TaskState $t }
    Write-Log 'Restored pre-shield registry/task states.'
    Remove-Item $script:UpgradeStateFile -Force -ErrorAction SilentlyContinue
    Write-Host 'Upgrade Shield restored.' -ForegroundColor Green
}

function Set-SoftUpdatePreference {
    if (-not (Require-Admin)) { return }
    Write-Host 'SOFT preference only: notify-before-download, exclude drivers, no Delivery Optimization P2P.' -ForegroundColor White
    Write-Host 'This is NOT the closed update gate and Windows builds may not honour every preference identically.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Apply soft update preferences?' 'SOFT UPDATES')) { return }
    Export-RegKey 'HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate' 'before-WindowsUpdate-soft.reg'
    $au='HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU'
    $wu='HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate'
    $do='HKLM:\SOFTWARE\Policies\Microsoft\Windows\DeliveryOptimization'
    New-Item $au -Force | Out-Null
    New-ItemProperty $au -Name NoAutoUpdate -PropertyType DWord -Value 0 -Force | Out-Null
    New-ItemProperty $au -Name AUOptions -PropertyType DWord -Value 2 -Force | Out-Null
    New-Item $wu -Force | Out-Null
    New-ItemProperty $wu -Name ExcludeWUDriversInQualityUpdate -PropertyType DWord -Value 1 -Force | Out-Null
    New-Item $do -Force | Out-Null
    New-ItemProperty $do -Name DODownloadMode -PropertyType DWord -Value 0 -Force | Out-Null
    Write-Log 'Applied soft update preferences: AUOptions=2, driver exclusion, DO mode 0.'
    Write-Host 'Soft update preferences applied.' -ForegroundColor Green
}

function Show-UpdateGateState {
    Write-Host "`nUPDATE GATE STATE" -ForegroundColor Cyan
    foreach ($n in @('wuauserv','UsoSvc','WaaSMedicSvc','BITS','DoSvc')) {
        $s = Get-ServiceState $n
        Write-Host ("{0,-14} status={1,-10} start={2}" -f $n,$s.Status,(StartText $s.Start))
    }
    if (Test-Path $script:UpdateStateFile) {
        Write-Host "Saved pre-close state: $script:UpdateStateFile" -ForegroundColor Green
    } else {
        Write-Host 'No saved pre-close update-gate state.' -ForegroundColor DarkGray
    }
}

function Close-UpdateGate {
    if (-not (Require-Admin)) { return }
    Write-Host 'CLOSED GATE aims to stop routine Windows Update checking until you deliberately reopen it.' -ForegroundColor White
    Write-Host 'While closed, Windows/ESU security updates may not arrive; Store/Defender update paths may also be affected.' -ForegroundColor Yellow
    Write-Host 'BITS and DoSvc are left alone because other software may use them.' -ForegroundColor Green
    Write-Host 'No service keys are deleted; no ACLs or DLLs are altered.' -ForegroundColor Green
    if (-not (Confirm-Exact 'Do you accept responsibility for deliberately reopening the gate for updates?' 'CLOSE UPDATE GATE')) { return }

    if (-not (Test-Path $script:UpdateStateFile)) {
        $states = @()
        foreach ($n in @('wuauserv','UsoSvc','WaaSMedicSvc')) { $states += Get-ServiceState $n }
        Save-JsonState $script:UpdateStateFile ([pscustomobject]@{ Saved=(Get-Date -Format s); Services=$states })
    } else {
        Write-Host 'A saved pre-close state already exists; it will NOT be overwritten.' -ForegroundColor Yellow
    }

    foreach ($n in @('wuauserv','UsoSvc')) {
        try { Stop-Service $n -Force -ErrorAction SilentlyContinue } catch {}
        try { Set-Service $n -StartupType Disabled -ErrorAction Stop } catch {
            try { Set-ServiceStartRaw $n 4 } catch { Write-Host "Could not disable $($n): $($_.Exception.Message)" -ForegroundColor Yellow }
        }
    }
    try { Stop-Service WaaSMedicSvc -Force -ErrorAction SilentlyContinue } catch {}
    try { Set-ServiceStartRaw 'WaaSMedicSvc' 4 } catch {
        Write-Host "WaaSMedicSvc is protected on many builds; close attempt was refused: $($_.Exception.Message)" -ForegroundColor Yellow
    }
    Write-Log 'Attempted CLOSE UPDATE GATE for wuauserv, UsoSvc, WaaSMedicSvc. BITS/DoSvc untouched.'
    Show-UpdateGateState
    Write-Host 'Reboot, then use Audit Gate to see what Windows actually kept. Protected components may reverse themselves.' -ForegroundColor Cyan
}

function Open-UpdateGate {
    if (-not (Require-Admin)) { return }
    $state = Load-JsonState $script:UpdateStateFile
    if (-not $state) {
        Write-Host 'No saved pre-close state exists. Windows Rescue will not guess this PC''s original service modes.' -ForegroundColor Yellow
        return
    }
    if (-not (Confirm-Exact 'Restore the exact service start values saved before CLOSE?' 'OPEN UPDATE GATE')) { return }
    foreach ($s in $state.Services) {
        if ($s.Start -ne $null) {
            try { Set-ServiceStartRaw $s.Name ([int]$s.Start) } catch { Write-Host "Could not restore $($s.Name): $($_.Exception.Message)" -ForegroundColor Yellow }
        }
    }
    try { Start-Service wuauserv -ErrorAction SilentlyContinue } catch {}
    Write-Log 'Opened update gate by restoring saved service Start values.'
    Remove-Item $script:UpdateStateFile -Force -ErrorAction SilentlyContinue
    Show-UpdateGateState
    if (Confirm-Exact 'Open Windows Update settings now?' 'OPEN SETTINGS') {
        Start-Process 'ms-settings:windowsupdate'
    }
}

function Set-EdgeLean {
    if (-not (Require-Admin)) { return }
    Write-Host 'Disables Edge Startup Boost and background mode. Edge remains installed and usable.'
    if (-not (Confirm-Exact 'Apply lean Edge background settings?' 'LEAN EDGE')) { return }
    Export-RegKey 'HKLM\SOFTWARE\Policies\Microsoft\Edge' 'before-Edge.reg'
    $p='HKLM:\SOFTWARE\Policies\Microsoft\Edge'
    New-Item $p -Force | Out-Null
    New-ItemProperty $p -Name StartupBoostEnabled -PropertyType DWord -Value 0 -Force | Out-Null
    New-ItemProperty $p -Name BackgroundModeEnabled -PropertyType DWord -Value 0 -Force | Out-Null
    Write-Log 'Edge Startup Boost/background mode disabled.'
}

function Set-GameDvrOff {
    if (-not (Require-Admin)) { return }
    Write-Host 'Do not use this if you rely on Xbox Game Bar recording.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Disable Game DVR recording policy?' 'DISABLE GAME DVR')) { return }
    Export-RegKey 'HKLM\SOFTWARE\Policies\Microsoft\Windows\GameDVR' 'before-GameDVR.reg'
    $p='HKLM:\SOFTWARE\Policies\Microsoft\Windows\GameDVR'
    New-Item $p -Force | Out-Null
    New-ItemProperty $p -Name AllowGameDVR -PropertyType DWord -Value 0 -Force | Out-Null
    Write-Log 'Game DVR policy disabled.'
}

function Show-MemoryCompression {
    try {
        $mm=Get-MMAgent
        $ram=[math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory/1GB,1)
        $drive=Get-SystemDriveSummary
        Write-Host "RAM: $ram GB | C: $($drive.BusType)/$($drive.MediaType)" -ForegroundColor Cyan
        Write-Host "MemoryCompression=$($mm.MemoryCompression) | PageCombining=$($mm.PageCombining)"
        if ($ram -le 4) {
            Write-Host '4 GB profile: keep compression ON unless a measured problem specifically points to it. SSD does not make RAM compression redundant.' -ForegroundColor Green
        } else {
            Write-Host '8 GB+ profile: a controlled A/B test is available if compression itself appears costly.' -ForegroundColor Green
        }
    } catch { Write-Host 'MMAgent unavailable.' -ForegroundColor Yellow }
}

function Disable-MemoryCompressionTrial {
    if (-not (Require-Admin)) { return }
    Show-MemoryCompression
    $ram=[math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory/1GB,1)
    $phrase = if ($ram -le 4) {'I ACCEPT 4GB PAGING RISK'} else {'TEST WITHOUT COMPRESSION'}
    Write-Host 'This is an experiment, not a recommended SSD tweak. Reboot and compare the same workload.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Disable memory compression for the controlled test?' $phrase)) { return }
    Disable-MMAgent -MemoryCompression
    Write-Log 'Disabled MMAgent MemoryCompression for A/B test. Rollback: Enable-MMAgent -MemoryCompression.'
    Write-Host 'Compression disabled for test. Reboot, measure, then enable again if there is no clear benefit.' -ForegroundColor Green
}

function Enable-MemoryCompressionNow {
    if (-not (Require-Admin)) { return }
    if (-not (Confirm-Exact 'Enable memory compression?' 'ENABLE COMPRESSION')) { return }
    Enable-MMAgent -MemoryCompression
    Write-Log 'Enabled MMAgent MemoryCompression.'
    Show-MemoryCompression
}

function Set-SysMainSleepTrial {
    if (-not (Require-Admin)) { return }
    $s=Get-ServiceState 'SysMain'
    Show-MemoryCompression
    Write-Host "SysMain: status=$($s.Status), start=$(StartText $s.Start)"
    Write-Host 'Community reports are mixed. Use only when measured disk/stutter evidence points at SysMain.' -ForegroundColor Yellow
    Write-Host 'On Windows 10, stopping/disabling SysMain can also disable memory compression.' -ForegroundColor Yellow
    if (-not (Confirm-Exact 'Put SysMain to Manual + stopped for a trial?' 'SLEEP SYSMAIN')) { return }
    if (-not (Test-Path $script:SysMainStateFile)) {
        Save-JsonState $script:SysMainStateFile ([pscustomobject]@{Saved=(Get-Date -Format s); Service=$s})
    }
    Export-RegKey 'HKLM\SYSTEM\CurrentControlSet\Services\SysMain' 'before-SysMain.reg'
    Stop-Service SysMain -Force -ErrorAction SilentlyContinue
    Set-Service SysMain -StartupType Manual -ErrorAction SilentlyContinue
    Write-Log "SysMain -> Manual + stopped. Previous start=$(StartText $s.Start), status=$($s.Status)."
    Start-Sleep -Seconds 1
    Show-MemoryCompression
    $ram=[math]::Round((Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory/1GB,1)
    try {
        $mm=Get-MMAgent
        if ($ram -le 4 -and -not $mm.MemoryCompression) {
            Write-Host 'WARNING: 4 GB system and memory compression is now OFF. This can increase paging. Restore SysMain or explicitly test this state.' -ForegroundColor Red
        }
    } catch {}
}

function Restore-SysMain {
    if (-not (Require-Admin)) { return }
    $state=Load-JsonState $script:SysMainStateFile
    if (-not $state) { Write-Host 'No saved SysMain state. Refusing to guess.' -ForegroundColor Yellow; return }
    if (-not (Confirm-Exact 'Restore the saved SysMain startup/status?' 'RESTORE SYSMAIN')) { return }
    Set-ServiceStartRaw 'SysMain' ([int]$state.Service.Start)
    if ($state.Service.Status -eq 'Running') { Start-Service SysMain -ErrorAction SilentlyContinue }
    Write-Log 'Restored SysMain saved state.'
    Remove-Item $script:SysMainStateFile -Force -ErrorAction SilentlyContinue
    Show-MemoryCompression
}

function Show-StorageResearchPrompt {
    $cs=Get-CimInstance Win32_ComputerSystem
    $os=Get-CimInstance Win32_OperatingSystem
    $d=Get-SystemDriveSummary
    $prompt=@"
I am using Windows Rescue. Research this exact computer using the OEM service manual as the primary hardware source.

Computer: $($cs.Manufacturer) $($cs.Model)
Windows: $($os.Caption), build $($os.BuildNumber)
C: disk: $($d.FriendlyName)
C: bus/media: $($d.BusType) / $($d.MediaType)
C: size: $($d.SizeGB) GB

Do not guess from age or slot appearance.

Determine:
1. Exact supported storage: 2.5-inch SATA, mSATA, M.2 SATA, M.2 PCIe/NVMe or other.
2. For M.2: protocol, keying, supported physical length and NVMe boot support.
3. Whether an additional EMPTY storage slot is documented for this configuration. Never assume WWAN/WLAN accepts SSD.
4. Optical bay presence and, if applicable, SATA/PATA plus 9.5/12.7 mm caddy requirement.
5. RAM upgradeability, type and OEM maximum.
6. Best layout: SSD for Windows/apps/pagefile; healthy old HDD as data only if useful.
7. Price a 256 GB practical minimum and 500/512 GB sweet spot, plus any required caddy/USB clone adapter.
8. Compare total upgrade cost against current new and manufacturer-refurbished alternatives in the user's country. If the user is in the UK, include Currys and Lenovo where relevant.
9. Offer CLONE and CLEAN INSTALL routes.
10. Warn about backup and BitLocker recovery access before disk/boot changes. Never ask me to paste a recovery key into AI.
11. If replacement is considered, compare realistic eBay SOLD values for the complete machine versus useful parts. Do not assume parts are worth more.

Return: HARDWARE FACTS, BEST RESCUE, COST, REPLACEMENT COMPARISON, RISKS, PARTS, STEPS, SOURCES.
"@
    Clear-Host
    Write-Host 'HARDWARE UPGRADE / REPLACEMENT RESEARCH' -ForegroundColor Cyan
    Write-Host ''
    Write-Host "Windows Rescue has prepared a model-specific research prompt for:" -ForegroundColor White
    Write-Host "$($cs.Manufacturer) $($cs.Model)" -ForegroundColor Green
    Write-Host ''
    Write-Host 'HOW TO USE IT' -ForegroundColor Yellow
    Write-Host '1. Copy or save the prompt below.'
    Write-Host '2. Open a NEW AI chat in ChatGPT, Google, DeepSeek or another AI with current web research.'
    Write-Host '3. Paste the prompt as the FIRST message.'
    Write-Host '4. Let that AI research the exact model, then bring the useful result back to Windows Rescue if you want.'
    Write-Host ''
    Write-Host 'Do not paste passwords, licence keys or BitLocker recovery keys into the AI chat.' -ForegroundColor Yellow
    Write-Host ''
    Write-Host 'C  Copy prompt to clipboard'
    Write-Host 'S  Save prompt to Desktop'
    Write-Host 'V  View prompt on screen'
    Write-Host 'Enter  Return'
    $c=(Read-Host 'Choose').Trim().ToUpperInvariant()
    switch ($c) {
        'C' {
            try {
                Set-Clipboard $prompt -ErrorAction Stop
                Write-Host 'Copied. Now open a NEW AI chat and paste it.' -ForegroundColor Green
            } catch {
                Write-Host 'Clipboard copy failed. Use S to save the prompt instead.' -ForegroundColor Yellow
            }
        }
        'S' {
            $dest=Join-Path ([Environment]::GetFolderPath('Desktop')) 'Windows-Rescue-Hardware-Research-Prompt.txt'
            $prompt | Out-File $dest -Encoding utf8
            Write-Host "Saved: $dest" -ForegroundColor Green
            Write-Host 'Open a NEW AI chat and paste the contents of that file.' -ForegroundColor Green
        }
        'V' { Write-Host ''; Write-Host $prompt; Write-Host '' }
    }
}

function Open-StorageSettings {
    if (Confirm-Exact 'Open Windows Storage settings?' 'OPEN') { Start-Process 'ms-settings:storagesense' }
}

function Show-UpdateMenu {
    while ($true) {
        Clear-Host
        Write-Host 'WINDOWS UPDATE / WINDOWS 11 CONTROL' -ForegroundColor Cyan
        Write-Host '1  Audit update gate state'
        Write-Host '2  Windows 10 Upgrade Shield (hold 22H2 / quiet compatibility tasks)'
        Write-Host '3  Restore Upgrade Shield'
        Write-Host '4  Soft update preferences (AUOptions=2 + driver shield + no P2P)'
        Write-Host '5  CLOSE manual update gate'
        Write-Host '6  OPEN manual update gate from saved state'
        Write-Host 'B  Back'
        $c=(Read-Host 'Choose').Trim().ToUpperInvariant()
        switch ($c) {
            '1' { Show-UpdateGateState; Read-Host 'Enter to continue' | Out-Null }
            '2' { Set-Win10UpgradeShield; Read-Host 'Enter to continue' | Out-Null }
            '3' { Restore-Win10UpgradeShield; Read-Host 'Enter to continue' | Out-Null }
            '4' { Set-SoftUpdatePreference; Read-Host 'Enter to continue' | Out-Null }
            '5' { Close-UpdateGate; Read-Host 'Enter to continue' | Out-Null }
            '6' { Open-UpdateGate; Read-Host 'Enter to continue' | Out-Null }
            'B' { return }
        }
    }
}

function Show-PrivacyMenu {
    while ($true) {
        Clear-Host
        Write-Host 'PRIVACY / SEARCH / BACKGROUND' -ForegroundColor Cyan
        Write-Host '1  Windows Search -> Manual + stop (sleep)'
        Write-Host '2  Windows Search -> Disabled (sealed)'
        Write-Host '3  Restore Windows Search'
        Write-Host '4  Quiet Telemetry (DiagTrack + selected tasks)'
        Write-Host '5  Restore telemetry'
        Write-Host '6  Lean Edge background'
        Write-Host '7  Disable Game DVR'
        Write-Host 'B  Back'
        $c=(Read-Host 'Choose').Trim().ToUpperInvariant()
        switch ($c) {
            '1' { Set-WSearchSleep; Read-Host 'Enter to continue' | Out-Null }
            '2' { Set-WSearchDisabled; Read-Host 'Enter to continue' | Out-Null }
            '3' { Restore-WSearch; Read-Host 'Enter to continue' | Out-Null }
            '4' { Set-TelemetryQuiet; Read-Host 'Enter to continue' | Out-Null }
            '5' { Restore-TelemetryQuiet; Read-Host 'Enter to continue' | Out-Null }
            '6' { Set-EdgeLean; Read-Host 'Enter to continue' | Out-Null }
            '7' { Set-GameDvrOff; Read-Host 'Enter to continue' | Out-Null }
            'B' { return }
        }
    }
}

function Show-MemoryMenu {
    while ($true) {
        Clear-Host
        Write-Host 'MEMORY / SYSMAIN' -ForegroundColor Cyan
        Write-Host '1  Show memory-compression state'
        Write-Host '2  Disable memory compression for controlled A/B test'
        Write-Host '3  Enable memory compression'
        Write-Host '4  SysMain -> Manual + stop trial'
        Write-Host '5  Restore SysMain'
        Write-Host 'B  Back'
        $c=(Read-Host 'Choose').Trim().ToUpperInvariant()
        switch ($c) {
            '1' { Show-MemoryCompression; Read-Host 'Enter to continue' | Out-Null }
            '2' { Disable-MemoryCompressionTrial; Read-Host 'Enter to continue' | Out-Null }
            '3' { Enable-MemoryCompressionNow; Read-Host 'Enter to continue' | Out-Null }
            '4' { Set-SysMainSleepTrial; Read-Host 'Enter to continue' | Out-Null }
            '5' { Restore-SysMain; Read-Host 'Enter to continue' | Out-Null }
            'B' { return }
        }
    }
}

function Show-Help {
    Write-Host @'
WINDOWS RESCUE POWERSHELL — HELP

READ ONLY
  A  Start here: safe guided audit
  S  Hardware research prompt -> copy/save -> NEW AI chat

CONTROLLED CHANGES
  U  Windows Update / Windows 11 submenu
  P  Privacy / Search / background submenu
  M  Memory / SysMain submenu
  C  Open Storage settings

RULES
  - Every write action requires an exact confirmation phrase.
  - Original service states are saved before reversible service changes.
  - CLOSED UPDATE GATE never deletes services, changes ACLs or renames DLLs.
  - BITS is not disabled just to stop Windows Update.
  - Pagefile and Defender are not generic debloat targets.
  - Search first uses Manual + stopped; Disabled is a separate stronger choice.
  - SysMain changes immediately re-check memory compression.
  - 4 GB systems keep memory compression by default, even with SSD.
