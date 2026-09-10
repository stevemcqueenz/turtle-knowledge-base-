---
title: "Wide screen resolution"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1714"
topic_id: 1714
forum_id: 3
forum: "Help & Support"
author: "Buntaro"
author_authority: "player"
posted: "2021-04-16T22:21:00Z"
last_post: "2025-03-05T09:58:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:46:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Wide screen resolution

## Post 10132 by Buntaro — 2021-04-16T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10132#p10132 | page 1 | era: pre-1.18.1 -->

Recently I have changed my laptop. Now I can't make WoW to use the proper resolution for wide screen display. Instead, it is 4:3 stretched to cover the 16:9. I'm using the maximized windowed mode (the borderless fullscreen window if I understand that right).

I think I have tried every approach I can find with Google. So I'm out of options.

Just in case, it's an external display with a native resolution of 1920x1080 attached to the laptops's NVidia GeForce RTX 2080 card. The laptop's own display's native resolution is also 1920x1080.

Any suggestions I can try?

## Post 10146 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-04-17T22:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10146#p10146 | page 1 | era: pre-1.18.1 -->

I think maybe try Discord with your question, honestly.

## Post 10159 by Buntaro — 2021-04-18T15:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10159#p10159 | page 1 | era: pre-1.18.1 -->

> **Merikkinon wrote: Sat Apr 17, 2021 10:58 pm**
> I think maybe try Discord with your question, honestly.

Yepp that was a good hint indeed, thanks   smiling_turtle_head

## Post 10160 by Buntaro — 2021-04-18T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10160#p10160 | page 1 | era: pre-1.18.1 -->

Turned out to be a bit of an edge case I suppose. Apparently, vanilla WoW has difficulties if your computer has more than a single video card which is often the case for laptops.

Sadly the easy ways of forcing an app to use a particular video card (through NVidia Control panel and through Windows' own Graphics performance preference) do not help here. WoW runs on the dedicated card but still attempts to use the integrated one to determine the graphics capabilities.

So, one solution is to disable the integrated video card. Turned out, it's enough to disable it for a short time while WoW is starting. After that you can enable it back again. As long as you don't switch WoW screen resolution, you are fine.

Now it's cumbersome to do that each time you launch WoW. Sadly it takes some tinkering to automate that. Read on if you are interested.

 ----------------

 1. Create a command file to launch WoW with.

Save this snippet below as a file named "StartWoW.bat" or something to your liking. Make sure that the file name *doesn't contain spaces*. Place it right next to the actual file "WoW.exe":
Code: Select all

```
@echo off
:: This script's file name must NOT contain spaces!
:: Hardware ID of the Integrated Graphics Adapter (must be customized):
set HARDWARE_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

:: Check privileges and relaunch itself as admin if necessary
net file 1>NUL 2>NUL
if not '%errorlevel%' == '0' (
powershell Start-Process -FilePath "%0" -ArgumentList "%cd%" -verb runas >NUL 2>&1
exit /b
)

:: Change directory with the passed argument. Processes launched with "runas"
:: start with forced "C:\Windows\System32" as working directory
cd /d %1

:: Actual work

:: Disable the Integrated Graphics adapter
pnputil /disable-device %HARDWARE_ID%

:: Starting WoW and letting it some time to detect available graphics
start "WoW" ".\WoW.exe"
timeout /t 15

:: Enable the Integrated Graphics adapter back
pnputil /enable-device %HARDWARE_ID%
```

This command file does the following:
 * it checks if it is started as an Administrator, and relaunches itself as one if necessary;
 * it then disables the hardware device specified as HARDWARE_ID;
 * it then launches WoW and gives it a short time (15 sec) to detect the graphics capabilities;
 * it then re-enables the hardware device specified as HARDWARE_ID and finishes itself (but not WoW).

 2. Find the hardware ID string for the Integrated Graphics Adapter:

Run "CMD.EXE" as administrator, execute the following command to get the list of all available graphics adapters:
Code: Select all

```
> pnputil /enum-devices /class Display
```

In my case its output looks like this:
Code: Select all

```
Microsoft PnP Utility

Instance ID:                PCI\VEN_8086&DEV_9BC4&SUBSYS_12BC1462&REV_05\3&11583659&1&10
Device Description:         Intel(R) UHD Graphics
Class Name:                 Display
Class GUID:                 {4d36e968-e325-11ce-bfc1-08002be10318}
Manufacturer Name:          Intel Corporation
Status:                     Started
Driver Name:                oem0.inf
Extension Driver Names:     oem4.inf
oem3.inf

Instance ID:                PCI\VEN_10DE&DEV_1E93&SUBSYS_12BC1462&REV_A1\4&443bd0d&0&0008
Device Description:         NVIDIA GeForce RTX 2080 Super
Class Name:                 Display
Class GUID:                 {4d36e968-e325-11ce-bfc1-08002be10318}
Manufacturer Name:          NVIDIA
Status:                     Started
Driver Name:                oem1.inf
```

Look for the value named "Instance ID:" in the section related to the integrated graphics adapter and copy that long cryptic string.

 3. Customize the command file.

The 4th line of the command file you created on the step 1 looks like this:
Code: Select all

```
set HARDWARE_ID="xxx...xxx".
```

Replace the string of x's inside the quotes with the Instance ID you got on the Step 2. Make sure the Instance ID still has quotes around it.

 4. Prepare WoW

Open the Windows Device Manager, find the Integrated Graphics Adapter and disable it manually. While it is disabled, launch WoW and change the screen mode and resolution to your liking. Exit WoW, and enable the Integrated Graphics Adapter manually back again.

 ----------------

From now on use this customized command file to launch WoW instead of launching "WoW.exe" directly. In case the graphics settings need to be changed, repeat the *manual* disable/enable procedure from the Step 4.

## Post 10190 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-04-20T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10190#p10190 | page 1 | era: pre-1.18.1 -->

Hell of a work up!  Should be captured somewhere for future reference.

## Post 50641 by Schnj3tzel — 2023-06-19T22:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50641#p50641 | page 1 | era: pre-1.18.1 -->

thankx mate it really helped :)

## Post 101706 by e22m4u — 2024-09-22T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101706#p101706 | page 1 | era: pre-1.18.1 -->

> **Buntaro wrote: Sun Apr 18, 2021 4:33 pm**
> Turned out to...

Thank you so much for explanation!!! I spent months struggling with this issue. Solved by simply turning off the integrated video.  turtle_in_love_head

## Post 117790 by Traus101 — 2025-01-24T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117790#p117790 | page 1 | era: pre-1.18.1 -->

Hello

I tried to make that code work but, when i try to run it, it says that can't find WoW.exe

Where should i put the location of the program in the code?

Thank you

## Post 121735 by Nevets — 2025-03-05T09:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121735#p121735 | page 1 | era: pre-1.18.1 -->

> **Buntaro wrote: Sun Apr 18, 2021 4:33 pm**
> Turned out to be a bit of an edge case I suppose. Apparently...

This worked for me, but I needed to change some things in order to run the file.

 1. Clicking the .bat file did nothing, but running it as administrator worked.

 2. However, running the file as administrator seems to change the execution path. It was actually running in the System32 directory or something like that. I'm also using VanillaFixes.exe, so I changed the name instead of 'WoW.exe'.

Here is the merge of Buntaro work and my solution:
Code: Select all

```
@echo off
:: This script's file name must NOT contain spaces!
:: Hardware ID of the Integrated Graphics Adapter (must be customized):
set HARDWARE_ID="PCI\VEN_8086&DEV_9BC4&SUBSYS_12B81462&REV_05\3&11583659&1&10"

:: Check privileges and relaunch itself as admin if necessary
net file 1>NUL 2>NUL
if not "%errorlevel%" == "0" (
powershell Start-Process -FilePath "%0" -ArgumentList "\"%~dp0\"" -verb runas >NUL 2>&1
exit /b
)

:: Change directory to the script's folder
cd /d "%~dp0"

:: Verify if VanillaFixes.exe exists before running it
if not exist "VanillaFixes.exe" (
echo Error: VanillaFixes.exe was not found in "%cd%"
pause
exit /b
)

:: Disable the Integrated Graphics adapter
pnputil /disable-device %HARDWARE_ID%

:: Starting WoW and letting it some time to detect available graphics
start "VanillaFixes" "VanillaFixes.exe"
timeout /t 15

:: Enable the Integrated Graphics adapter back
pnputil /enable-device %HARDWARE_ID%
```

