# Windows Rescue App — Driver Sanctuary
# Read-only AI driver research prompt generator — V1.0 CLEAN DEPLOYMENT CANDIDATE
# Based on Karsten Evans' LinkedIn driverAIPrompt.ps1 concept:
# https://www.linkedin.com/feed/update/urn:li:activity:7399589908371120128/
# This script does NOT download, install, remove, roll back, or update drivers.

Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Continue'

Write-Host 'Windows Rescue: Driver Sanctuary' -ForegroundColor Cyan
Write-Host 'READ ONLY: inventories selected hardware and builds an AI research prompt.' -ForegroundColor Green
Write-Host 'Nothing will be saved or copied until you confirm.' -ForegroundColor Green
Write-Host ''

try {
    $cs = Get-CimInstance Win32_ComputerSystem
    $os = Get-CimInstance Win32_OperatingSystem
} catch {
    Write-Host 'Could not read basic computer/OS information.' -ForegroundColor Red
    exit 1
}

$targetClasses = @('DISPLAY','NET','MEDIA','Bluetooth')

try {
    $devices = Get-CimInstance Win32_PnPSignedDriver | Where-Object {
        $_.DeviceClass -in $targetClasses -and
        $_.DeviceName -and
        $_.DeviceName -notlike '*Virtual*'
    } | Sort-Object DeviceClass, DeviceName
} catch {
    Write-Host 'Could not query Win32_PnPSignedDriver.' -ForegroundColor Red
    exit 1
}

function Get-HardwareIds([string]$InstanceId) {
    if (-not $InstanceId) { return @() }
    try {
        if (Get-Command Get-PnpDeviceProperty -ErrorAction SilentlyContinue) {
            $p = Get-PnpDeviceProperty -InstanceId $InstanceId -KeyName 'DEVPKEY_Device_HardwareIds' -ErrorAction Stop
            if ($p.Data) { return @($p.Data) }
        }
    } catch {}
    return @($InstanceId)
}

$lines = New-Object System.Collections.Generic.List[string]
[void]$lines.Add('I want to research Windows drivers manually rather than automatically installing driver updates.')
[void]$lines.Add('Use live web research. Find only OFFICIAL PC-OEM or component-vendor download/support pages.')
[void]$lines.Add('Do not recommend third-party driver mirrors, driver-pack sites, SEO download portals, unknown EXEs, or automatic driver-updater utilities.')
[void]$lines.Add('')
[void]$lines.Add('DECISION RULES:')
[void]$lines.Add('1. Prefer the exact PC/laptop OEM support page first when the OEM supplies a model-specific package.')
[void]$lines.Add('2. A higher version number alone is NOT a reason to update. Explain the bug fix, security reason, compatibility benefit, or say NO UPDATE NEEDED.')
[void]$lines.Add('3. If the installed driver is stable and appropriate, say NO UPDATE NEEDED.')
[void]$lines.Add('4. For Intel/AMD/NVIDIA/Realtek/etc. component-vendor drivers, warn when an OEM-customised package may be preferable.')
[void]$lines.Add('5. Verify Windows version/architecture and the Hardware IDs before recommending a package.')
[void]$lines.Add('6. Return official URL, package version/date, matching Hardware ID/model evidence, benefit, and any caveat.')
[void]$lines.Add('7. Do not instruct automatic installation. I will decide what to download and install.')
[void]$lines.Add('8. Do not ask me to disable Windows security features in order to install an unsigned or dubious package.')
[void]$lines.Add('')
[void]$lines.Add("PC manufacturer: $($cs.Manufacturer)")
[void]$lines.Add("PC model: $($cs.Model)")
[void]$lines.Add("Operating system: $($os.Caption)")
[void]$lines.Add("OS version/build: $($os.Version) / $($os.BuildNumber)")
[void]$lines.Add("OS architecture: $($os.OSArchitecture)")
[void]$lines.Add('')
[void]$lines.Add('INSTALLED DRIVER INVENTORY:')
[void]$lines.Add('')

$count = 0
foreach ($dev in $devices) {
    $driverDate = if ($dev.DriverDate) {
        try { ([Management.ManagementDateTimeConverter]::ToDateTime($dev.DriverDate)).ToString('yyyy-MM-dd') }
        catch { [string]$dev.DriverDate }
    } else { '<unknown>' }

    $provider = if ($dev.DriverProviderName) { $dev.DriverProviderName } else { '<unknown>' }
    $manufacturer = if ($dev.Manufacturer) { $dev.Manufacturer } else { '<unknown>' }
    $version = if ($dev.DriverVersion) { $dev.DriverVersion } else { '<unknown>' }
    $inf = if ($dev.InfName) { $dev.InfName } else { '<unknown>' }
    $instanceId = if ($dev.DeviceID) { [string]$dev.DeviceID } else { '<unknown>' }
    $hardwareIds = Get-HardwareIds $instanceId

    [void]$lines.Add("Class: $($dev.DeviceClass)")
    [void]$lines.Add("Device: $($dev.DeviceName)")
    [void]$lines.Add("Manufacturer: $manufacturer")
    [void]$lines.Add("Current driver provider: $provider")
    [void]$lines.Add("Current driver version: $version")
    [void]$lines.Add("Current driver date: $driverDate")
    [void]$lines.Add("INF: $inf")
    [void]$lines.Add("PnP instance ID: $instanceId")
    [void]$lines.Add('Hardware IDs:')
    foreach ($hid in $hardwareIds) { [void]$lines.Add("  $hid") }
    if ($provider -like '*Microsoft*') {
        [void]$lines.Add('Note: currently using a Microsoft-provided driver. Check whether a meaningful OEM/vendor alternative exists, but do not assume one is needed.')
    }
    [void]$lines.Add('----------------------------------')
    $count++
}

if ($count -eq 0) {
    Write-Host 'No matching display/network/audio/Bluetooth signed-driver entries were found.' -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $count relevant signed-driver entries." -ForegroundColor White
$confirm = Read-Host 'Type CREATE PROMPT to save the prompt to your Desktop and copy it to the clipboard'
if ($confirm -cne 'CREATE PROMPT') {
    Write-Host 'Cancelled. Nothing was saved or copied.' -ForegroundColor Yellow
    exit 0
}

$prompt = $lines -join "`r`n"
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$outFile = Join-Path ([Environment]::GetFolderPath('Desktop')) "Windows-Driver-AI-Prompt-$stamp.txt"
$prompt | Out-File -FilePath $outFile -Encoding utf8

try {
    Set-Clipboard -Value $prompt
    Write-Host 'Prompt copied to clipboard.' -ForegroundColor Green
} catch {
    Write-Host 'Clipboard copy failed, but the prompt was saved.' -ForegroundColor Yellow
}

Write-Host "Saved to: $outFile" -ForegroundColor Green
Write-Host 'Paste it into an AI that can perform live web research and review every official source before downloading anything.' -ForegroundColor Yellow