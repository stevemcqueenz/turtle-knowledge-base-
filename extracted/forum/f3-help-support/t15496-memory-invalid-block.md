---
title: "Memory Invalid Block"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15496"
topic_id: 15496
forum_id: 3
forum: "Help & Support"
author: "Jvson"
author_authority: "player"
posted: "2024-11-02T21:56:00Z"
last_post: "2025-06-05T08:09:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:43:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Memory Invalid Block

## Post 106044 by Jvson — 2024-11-02T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106044#p106044 | page 1 | era: pre-1.18.1 -->

I am semi frequently (since newest patch) dropping to 1FPS and having to relaunch game.  When doing so I am getting memory exceptions.  Any thoughts on how to resolve?

==============================================================================
World of WarCraft (build 5875)

Exe:      D:\TurtleWOW\WoW.exe
Time:     Nov  2, 2024  5:34:45.055 PM
User:     guerr
Computer: DESKTOP-HK56PTM
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #124 (0x8510007c) Memory Invalid Block
Program:	D:\TurtleWOW\WoW.exe
Object:	SGroupPtr (.?AUSGroupPtr@@)

SMem3: Pointer does not refer to a valid allocated block of memory

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 006452BE 0019FE50 0001:002442BE D:\TurtleWOW\WoW.exe
 0064623A 0019FE64 0001:0024523A D:\TurtleWOW\WoW.exe
 006457C9 0019FE84 0001:002447C9 D:\TurtleWOW\WoW.exe
 00646449 0019FE98 0001:00245449 D:\TurtleWOW\WoW.exe
 006BD0D8 0019FF70 0001:002BC0D8 D:\TurtleWOW\WoW.exe
 762DFCC9 0019FF80 0001:0000FCC9 C:\WINDOWS\System32\KERNEL32.DLL
 77BB809E 0019FFDC 0001:0006709E C:\WINDOWS\SYSTEM32\ntdll.dll
 77BB806E 0019FFEC 0001:0006706E C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D26000  D:\TurtleWOW\WoW.exe
 0x035A0000 - 0x03636000  D:\TurtleWOW\fmod.dll
 0x04C60000 - 0x04D78000  D:\TurtleWOW\dbghelp.dll
 0x10000000 - 0x10069000  D:\TurtleWOW\DivxDecoder.dll
 0x55730000 - 0x5580F000  C:\WINDOWS\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_ea7f458f0e49497d\nvppe.dll
 0x56210000 - 0x56283000  C:\Windows\System32\WindowManagementAPI.dll
 0x56290000 - 0x56383000  C:\Windows\System32\Windows.UI.dll
 0x56390000 - 0x56423000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x610C0000 - 0x610E6000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x642E0000 - 0x6457B000  C:\WINDOWS\SYSTEM32\msi.dll
 0x646F0000 - 0x64919000  C:\WINDOWS\system32\nvspcap.dll
 0x67600000 - 0x676ED000  C:\Windows\System32\InputHost.dll
 0x67730000 - 0x6773C000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x67D20000 - 0x67D4C000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x68900000 - 0x689C5000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x69170000 - 0x6920B000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x69210000 - 0x6948F000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
 0x69490000 - 0x69549000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x69A70000 - 0x69AED000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x6C5B0000 - 0x6C5B8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x6C6B0000 - 0x6C7B0000  C:\WINDOWS\SYSTEM32\drvstore.dll
 0x6C940000 - 0x6CD96000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x6EDC0000 - 0x6EE4D000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.4355_none_c0dc01d438beab35\COMCTL32.dll
 0x6F0D0000 - 0x6F1B9000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x6F1C0000 - 0x6F237000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x6F300000 - 0x6F344000  C:\WINDOWS\SYSTEM32\powrprof.dll
 0x6F500000 - 0x6F508000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
 0x6F510000 - 0x6F51D000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x6F520000 - 0x6F546000  C:\WINDOWS\SYSTEM32\cryptnet.dll
 0x6F5B0000 - 0x6F5C9000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x6FB10000 - 0x6FBED000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x6FBF0000 - 0x6FD81000  C:\WINDOWS\SYSTEM32\twinapi.appcore.dll
 0x6FE50000 - 0x6FE6E000  C:\WINDOWS\SYSTEM32\gpapi.dll
 0x70010000 - 0x7001E000  C:\WINDOWS\System32\winrnr.dll
 0x70020000 - 0x70036000  C:\WINDOWS\system32\NLAapi.dll
 0x70040000 - 0x70050000  C:\WINDOWS\system32\wshbth.dll
 0x70050000 - 0x70066000  C:\WINDOWS\system32\pnrpnsp.dll
 0x70070000 - 0x70081000  C:\WINDOWS\system32\napinsp.dll
 0x71BD0000 - 0x71D79000  C:\WINDOWS\SYSTEM32\urlmon.dll
 0x71DD0000 - 0x71DDA000  C:\WINDOWS\SYSTEM32\cryptbase.dll
 0x71EB0000 - 0x71EDF000  C:\WINDOWS\system32\rsaenh.dll
 0x71EE0000 - 0x71EF3000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x71F70000 - 0x71F8D000  C:\WINDOWS\SYSTEM32\srvcli.dll
 0x71FB0000 - 0x71FBB000  C:\WINDOWS\SYSTEM32\netutils.dll
 0x71FE0000 - 0x72217000  C:\WINDOWS\SYSTEM32\iertutil.dll
 0x72340000 - 0x72369000  C:\WINDOWS\SYSTEM32\devobj.dll
 0x72490000 - 0x724AB000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x73A80000 - 0x73AD8000  C:\WINDOWS\System32\fwpuclnt.dll
 0x73AE0000 - 0x73BA2000  C:\Windows\System32\PROPSYS.dll
 0x73BB0000 - 0x73BB8000  C:\Windows\System32\rasadhlp.dll
 0x73BC0000 - 0x73C64000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x73C70000 - 0x73CA2000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
 0x73CB0000 - 0x73D40000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
 0x73D40000 - 0x73D68000  C:\WINDOWS\SYSTEM32\NTASN1.dll
 0x73D70000 - 0x73D80000  C:\WINDOWS\SYSTEM32\mskeyprotect.dll
 0x73D80000 - 0x73DFE000  C:\WINDOWS\System32\schannel.dll
 0x73E00000 - 0x73E25000  C:\WINDOWS\SYSTEM32\Wldp.dll
 0x73E30000 - 0x73E3E000  C:\WINDOWS\SYSTEM32\msasn1.dll
 0x73F20000 - 0x74538000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x74540000 - 0x74569000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x74D30000 - 0x74D3F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x74D40000 - 0x74D48000  C:\WINDOWS\SYSTEM32\DPAPI.DLL
 0x74D50000 - 0x74D71000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x74E10000 - 0x74E18000  C:\WINDOWS\SYSTEM32\VERSION.dll
 0x74E20000 - 0x74E94000  C:\WINDOWS\system32\uxtheme.dll
 0x750B0000 - 0x75102000  C:\WINDOWS\SYSTEM32\mswsock.dll
 0x75110000 - 0x751DB000  C:\WINDOWS\SYSTEM32\winhttp.dll
 0x75680000 - 0x756A5000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x75710000 - 0x75738000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x757C0000 - 0x7582B000  C:\WINDOWS\System32\MMDevApi.dll
 0x75830000 - 0x7584F000  C:\WINDOWS\system32\ncryptsslp.dll
 0x75850000 - 0x75871000  C:\WINDOWS\SYSTEM32\ncrypt.dll
 0x758A0000 - 0x758AF000  C:\WINDOWS\SYSTEM32\resourcepolicyclient.dll
 0x758B0000 - 0x758B7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x758C0000 - 0x758D2000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
 0x759E0000 - 0x75C60000  C:\WINDOWS\System32\combase.dll
 0x75C60000 - 0x75D0F000  C:\WINDOWS\System32\COMDLG32.dll
 0x75DA0000 - 0x75E1B000  C:\WINDOWS\System32\msvcp_win.dll
 0x75E20000 - 0x75EDF000  C:\WINDOWS\System32\msvcrt.dll
 0x75EE0000 - 0x75F2D000  C:\WINDOWS\System32\wintrust.dll
 0x75F30000 - 0x75FC6000  C:\WINDOWS\System32\OLEAUT32.dll
 0x75FD0000 - 0x75FF3000  C:\WINDOWS\System32\GDI32.dll
 0x76000000 - 0x7619D000  C:\WINDOWS\System32\USER32.dll
 0x761A0000 - 0x761B9000  C:\WINDOWS\System32\bcrypt.dll
 0x761C0000 - 0x762A3000  C:\WINDOWS\System32\ole32.dll
 0x762C0000 - 0x763B0000  C:\WINDOWS\System32\KERNEL32.DLL
 0x767F0000 - 0x7682B000  C:\WINDOWS\System32\cfgmgr32.dll
 0x76890000 - 0x76917000  C:\WINDOWS\System32\shcore.dll
 0x76980000 - 0x769E3000  C:\WINDOWS\System32\WS2_32.dll
 0x769F0000 - 0x76AC4000  C:\WINDOWS\System32\MSCTF.dll
 0x76AD0000 - 0x76AE9000  C:\WINDOWS\System32\imagehlp.dll
 0x76AF0000 - 0x76BEE000  C:\WINDOWS\System32\CRYPT32.dll
 0x76C50000 - 0x76C75000  C:\WINDOWS\System32\IMM32.dll
 0x76C80000 - 0x7725A000  C:\WINDOWS\System32\SHELL32.dll
 0x77260000 - 0x772BF000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x772C0000 - 0x772D8000  C:\WINDOWS\System32\win32u.dll
 0x772E0000 - 0x7735E000  C:\WINDOWS\System32\clbcatq.dll
 0x77360000 - 0x773D8000  C:\WINDOWS\System32\sechost.dll
 0x773E0000 - 0x7745E000  C:\WINDOWS\System32\ADVAPI32.dll
 0x77460000 - 0x77467000  C:\WINDOWS\System32\NSI.dll
 0x77470000 - 0x774B5000  C:\WINDOWS\System32\SHLWAPI.dll
 0x774C0000 - 0x7757C000  C:\WINDOWS\System32\RPCRT4.dll
 0x77580000 - 0x777BF000  C:\WINDOWS\System32\KERNELBASE.dll
 0x77930000 - 0x77A15000  C:\WINDOWS\System32\gdi32full.dll
 0x77A20000 - 0x77B40000  C:\WINDOWS\System32\ucrtbase.dll
 0x77B50000 - 0x77CF4000  C:\WINDOWS\SYSTEM32\ntdll.dll
 0x77D00000 - 0x77D07000  C:\WINDOWS\SYSTEM32\ksuser.dll
 0x77D30000 - 0x77D6F000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x77EF0000 - 0x77FF6000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x7BB40000 - 0x7BBBF000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x7BBC0000 - 0x7BBDD000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x7BBE0000 - 0x7BC1A000  C:\WINDOWS\SYSTEM32\wdmaud.drv
 0x7BC20000 - 0x7BC28000  C:\WINDOWS\SYSTEM32\AVRT.dll
 0x7BC30000 - 0x7BD66000  C:\WINDOWS\SYSTEM32\AUDIOSES.DLL
 0x7BD70000 - 0x7BD7A000  C:\WINDOWS\SYSTEM32\msacm32.drv
 0x7BD80000 - 0x7BD99000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x7BDA0000 - 0x7BDA8000  C:\WINDOWS\SYSTEM32\midimap.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Stack: 1024 bytes starting at (ESP = 0019F080)

 * = addr  **                                                  *
 0019F080: 18 23 00 00  AC F2 19 00  00 00 00 00  80 F0 19 00  .#..............
 0019F090: 98 F0 19 00  CC BD 66 00  AC F0 19 00  B8 DC 64 00  ......f.......d.
 0019F0A0: 18 23 00 00  03 00 00 00  00 00 00 00  28 FE 19 00  .#..........(...
 0019F0B0: 42 D5 64 00  00 00 00 00  C8 B7 86 00  7C 00 10 85  B.d.........|...
 0019F0C0: 84 20 C5 00  53 47 72 6F  75 70 50 74  72 20 28 2E  . ..SGroupPtr (.
 0019F0D0: 3F 41 55 53  47 72 6F 75  70 50 74 72  40 40 29 00  ?AUSGroupPtr@@).
 0019F0E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F0F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F100: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F110: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F120: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F130: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F140: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F150: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F160: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F170: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F180: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F190: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F1A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F1B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F1C0: 00 00 00 00  54 68 69 73  20 61 70 70  6C 69 63 61  ....This applica
 0019F1D0: 74 69 6F 6E  20 68 61 73  20 65 6E 63  6F 75 6E 74  tion has encount
 0019F1E0: 65 72 65 64  20 61 20 63  72 69 74 69  63 61 6C 20  ered a critical
 0019F1F0: 65 72 72 6F  72 3A 0A 0A  45 52 52 4F  52 20 23 31  error:..ERROR #1
 0019F200: 32 34 20 28  30 78 38 35  31 30 30 30  37 63 29 20  24 (0x8510007c)
 0019F210: 4D 65 6D 6F  72 79 20 49  6E 76 61 6C  69 64 20 42  Memory Invalid B
 0019F220: 6C 6F 63 6B  0A 50 72 6F  67 72 61 6D  3A 09 44 3A  lock.Program:.D:
 0019F230: 5C 54 75 72  74 6C 65 57  4F 57 5C 57  6F 57 2E 65  \TurtleWOW\WoW.e
 0019F240: 78 65 0A 4F  62 6A 65 63  74 3A 09 53  47 72 6F 75  xe.Object:.SGrou
 0019F250: 70 50 74 72  20 28 2E 3F  41 55 53 47  72 6F 75 70  pPtr (.?AUSGroup
 0019F260: 50 74 72 40  40 29 0A 0A  53 4D 65 6D  33 3A 20 50  Ptr@@)..SMem3: P
 0019F270: 6F 69 6E 74  65 72 20 64  6F 65 73 20  6E 6F 74 20  ointer does not
 0019F280: 72 65 66 65  72 20 74 6F  20 61 20 76  61 6C 69 64  refer to a valid
 0019F290: 20 61 6C 6C  6F 63 61 74  65 64 20 62  6C 6F 63 6B   allocated block
 0019F2A0: 20 6F 66 20  6D 65 6D 6F  72 79 0A 0A  00 00 00 00   of memory......
 0019F2B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F2C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F2D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F2E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F2F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F300: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F310: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F320: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F330: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F340: 00 00 00 00  00 00 00 00  68 F4 19 00  3C FE 19 00  ........h...<...
 0019F350: 74 98 BB 77  00 00 00 00  00 00 00 00  00 00 00 00  t..w............
 0019F360: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F370: 80 CB B5 77  00 00 B5 77  00 40 1A 00  47 00 00 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection)...
 0019F380: B8 F4 19 00  04 00 00 00  D0 8F 08 00  00 00 00 00  ................
 0019F390: 00 00 00 00  00 00 00 00  B2 8F BD 77  68 F4 19 00  ...........wh...
 0019F3A0: FC F7 19 00  B8 F4 19 00  14 F4 19 00  FC F7 19 00  ................
 0019F3B0: 00 90 BD 77  FC F7 19 00  94 F7 19 00  84 8F BD 77  ...w...........w
 0019F3C0: 68 F4 19 00  FC F7 19 00  B8 F4 19 00  14 F4 19 00  h...............
 0019F3D0: D0 8F BD 77  68 F4 19 00  3C FE 19 00  FC F7 19 00  ...wh...<.......
 0019F3E0: 77 95 BB 77  68 F4 19 00  0C 34 BC 77  B0 95 BB 77  w..wh....4.w...w
 0019F3F0: B8 F4 19 00  00 00 00 00  FE FF FF FF  00 00 00 00  ................
 0019F400: 4C FE 19 00  00 00 1A 00  00 30 15 00  00 00 1A 00  L........0......
 0019F410: 00 30 15 00  00 00 00 00  00 00 00 00  00 00 00 00  .0..............
 0019F420: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F430: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F440: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F450: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F460: 00 00 00 00  00 00 00 00  27 00 00 C0  02 00 00 00  ........'.......
 0019F470: 00 00 00 00  59 2D 2E 76  00 00 00 00  00 00 00 00  ....Y-.v........

 ------------------------------------------------------------------------------

## Post 107580 by Badrussian1945 — 2024-11-11T20:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107580#p107580 | page 1 | era: pre-1.18.1 -->

I have the same problem. Absolutely the same(((

## Post 107975 by Varr — 2024-11-14T21:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107975#p107975 | page 1 | era: pre-1.18.1 -->

This happened to me today while running SM Library.  Had to restart the game.

## Post 134343 by Jhaerik (Barrens Chat Casualty) — 2025-06-05T03:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134343#p134343 | page 1 | era: pre-1.18.1 -->

Same in SM. Also every time I exit the client.

## Post 134373 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-06-05T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134373#p134373 | page 1 | era: pre-1.18.1 -->

> **Jvson wrote: Sat Nov 02, 2024 9:56 pm**
> I am semi frequently (since newest patch) dropping to 1FPS and having to relaunch game.  When doing so I am getting memory exceptions.  Any thoughts on how to resolve?
>
>  ==============================================================================
>  World of WarCraft (build 5875)
>
>  Exe:      D:\TurtleWOW\WoW.exe
>  Time:     Nov  2, 2024  5:34:45.055 PM
>  User:     guerr
>  Computer: DESKTOP-HK56PTM
>  ------------------------------------------------------------------------------
>
>  This application has encountered a critical error:
>
>  ERROR #124 (0x8510007c) Memory Invalid Block
>  Program:	D:\TurtleWOW\WoW.exe
>  Object:	SGroupPtr (.?AUSGroupPtr@@)
>
>  SMem3: Pointer does not refer to a valid allocated block of memory
>
>
>  WoWBuild: 5875
>  ------------------------------------------------------------------------------
>
>  ----------------------------------------
>  Stack Trace (Manual)
>  ----------------------------------------
>
>  Address  Frame    Logical addr  Module
>
>  006452BE 0019FE50 0001:002442BE D:\TurtleWOW\WoW.exe
>  0064623A 0019FE64 0001:0024523A D:\TurtleWOW\WoW.exe
>  006457C9 0019FE84 0001:002447C9 D:\TurtleWOW\WoW.exe
>  00646449 0019FE98 0001:00245449 D:\TurtleWOW\WoW.exe
>  006BD0D8 0019FF70 0001:002BC0D8 D:\TurtleWOW\WoW.exe
>  762DFCC9 0019FF80 0001:0000FCC9 C:\WINDOWS\System32\KERNEL32.DLL
>  77BB809E 0019FFDC 0001:0006709E C:\WINDOWS\SYSTEM32\ntdll.dll
>  77BB806E 0019FFEC 0001:0006706E C:\WINDOWS\SYSTEM32\ntdll.dll
>
>  ----------------------------------------
>  Stack Trace (Using DBGHELP.DLL)
>  ----------------------------------------
>
>
>
>  ----------------------------------------
>  Loaded Modules
>  ----------------------------------------
>
>  0x00400000 - 0x00D26000  D:\TurtleWOW\WoW.exe
>  0x035A0000 - 0x03636000  D:\TurtleWOW\fmod.dll
>  0x04C60000 - 0x04D78000  D:\TurtleWOW\dbghelp.dll
>  0x10000000 - 0x10069000  D:\TurtleWOW\DivxDecoder.dll
>  0x55730000 - 0x5580F000  C:\WINDOWS\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_ea7f458f0e49497d\nvppe.dll
>  0x56210000 - 0x56283000  C:\Windows\System32\WindowManagementAPI.dll
>  0x56290000 - 0x56383000  C:\Windows\System32\Windows.UI.dll
>  0x56390000 - 0x56423000  C:\WINDOWS\SYSTEM32\mscms.dll
>  0x610C0000 - 0x610E6000  C:\WINDOWS\SYSTEM32\dwmapi.dll
>  0x642E0000 - 0x6457B000  C:\WINDOWS\SYSTEM32\msi.dll
>  0x646F0000 - 0x64919000  C:\WINDOWS\system32\nvspcap.dll
>  0x67600000 - 0x676ED000  C:\Windows\System32\InputHost.dll
>  0x67730000 - 0x6773C000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
>  0x67D20000 - 0x67D4C000  C:\WINDOWS\SYSTEM32\dxcore.dll
>  0x68900000 - 0x689C5000  C:\WINDOWS\SYSTEM32\dxgi.dll
>  0x69170000 - 0x6920B000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
>  0x69210000 - 0x6948F000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
>  0x69490000 - 0x69549000  C:\WINDOWS\SYSTEM32\textinputframework.dll
>  0x69A70000 - 0x69AED000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
>  0x6C5B0000 - 0x6C5B8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
>  0x6C6B0000 - 0x6C7B0000  C:\WINDOWS\SYSTEM32\drvstore.dll
>  0x6C940000 - 0x6CD96000  C:\WINDOWS\SYSTEM32\WININET.dll
>  0x6EDC0000 - 0x6EE4D000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.4355_none_c0dc01d438beab35\COMCTL32.dll
>  0x6F0D0000 - 0x6F1B9000  C:\WINDOWS\SYSTEM32\DDRAW.dll
>  0x6F1C0000 - 0x6F237000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
>  0x6F300000 - 0x6F344000  C:\WINDOWS\SYSTEM32\powrprof.dll
>  0x6F500000 - 0x6F508000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
>  0x6F510000 - 0x6F51D000  C:\WINDOWS\SYSTEM32\UMPDC.dll
>  0x6F520000 - 0x6F546000  C:\WINDOWS\SYSTEM32\cryptnet.dll
>  0x6F5B0000 - 0x6F5C9000  C:\WINDOWS\SYSTEM32\MPR.dll
>  0x6FB10000 - 0x6FBED000  C:\WINDOWS\SYSTEM32\wintypes.dll
>  0x6FBF0000 - 0x6FD81000  C:\WINDOWS\SYSTEM32\twinapi.appcore.dll
>  0x6FE50000 - 0x6FE6E000  C:\WINDOWS\SYSTEM32\gpapi.dll
>  0x70010000 - 0x7001E000  C:\WINDOWS\System32\winrnr.dll
>  0x70020000 - 0x70036000  C:\WINDOWS\system32\NLAapi.dll
>  0x70040000 - 0x70050000  C:\WINDOWS\system32\wshbth.dll
>  0x70050000 - 0x70066000  C:\WINDOWS\system32\pnrpnsp.dll
>  0x70070000 - 0x70081000  C:\WINDOWS\system32\napinsp.dll
>  0x71BD0000 - 0x71D79000  C:\WINDOWS\SYSTEM32\urlmon.dll
>  0x71DD0000 - 0x71DDA000  C:\WINDOWS\SYSTEM32\cryptbase.dll
>  0x71EB0000 - 0x71EDF000  C:\WINDOWS\system32\rsaenh.dll
>  0x71EE0000 - 0x71EF3000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
>  0x71F70000 - 0x71F8D000  C:\WINDOWS\SYSTEM32\srvcli.dll
>  0x71FB0000 - 0x71FBB000  C:\WINDOWS\SYSTEM32\netutils.dll
>  0x71FE0000 - 0x72217000  C:\WINDOWS\SYSTEM32\iertutil.dll
>  0x72340000 - 0x72369000  C:\WINDOWS\SYSTEM32\devobj.dll
>  0x72490000 - 0x724AB000  C:\WINDOWS\SYSTEM32\profapi.dll
>  0x73A80000 - 0x73AD8000  C:\WINDOWS\System32\fwpuclnt.dll
>  0x73AE0000 - 0x73BA2000  C:\Windows\System32\PROPSYS.dll
>  0x73BB0000 - 0x73BB8000  C:\Windows\System32\rasadhlp.dll
>  0x73BC0000 - 0x73C64000  C:\WINDOWS\SYSTEM32\apphelp.dll
>  0x73C70000 - 0x73CA2000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
>  0x73CB0000 - 0x73D40000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
>  0x73D40000 - 0x73D68000  C:\WINDOWS\SYSTEM32\NTASN1.dll
>  0x73D70000 - 0x73D80000  C:\WINDOWS\SYSTEM32\mskeyprotect.dll
>  0x73D80000 - 0x73DFE000  C:\WINDOWS\System32\schannel.dll
>  0x73E00000 - 0x73E25000  C:\WINDOWS\SYSTEM32\Wldp.dll
>  0x73E30000 - 0x73E3E000  C:\WINDOWS\SYSTEM32\msasn1.dll
>  0x73F20000 - 0x74538000  C:\WINDOWS\SYSTEM32\windows.storage.dll
>  0x74540000 - 0x74569000  C:\WINDOWS\SYSTEM32\ntmarta.dll
>  0x74D30000 - 0x74D3F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
>  0x74D40000 - 0x74D48000  C:\WINDOWS\SYSTEM32\DPAPI.DLL
>  0x74D50000 - 0x74D71000  C:\WINDOWS\SYSTEM32\SspiCli.dll
>  0x74E10000 - 0x74E18000  C:\WINDOWS\SYSTEM32\VERSION.dll
>  0x74E20000 - 0x74E94000  C:\WINDOWS\system32\uxtheme.dll
>  0x750B0000 - 0x75102000  C:\WINDOWS\SYSTEM32\mswsock.dll
>  0x75110000 - 0x751DB000  C:\WINDOWS\SYSTEM32\winhttp.dll
>  0x75680000 - 0x756A5000  C:\WINDOWS\SYSTEM32\USERENV.dll
>  0x75710000 - 0x75738000  C:\WINDOWS\SYSTEM32\WINMM.dll
>  0x757C0000 - 0x7582B000  C:\WINDOWS\System32\MMDevApi.dll
>  0x75830000 - 0x7584F000  C:\WINDOWS\system32\ncryptsslp.dll
>  0x75850000 - 0x75871000  C:\WINDOWS\SYSTEM32\ncrypt.dll
>  0x758A0000 - 0x758AF000  C:\WINDOWS\SYSTEM32\resourcepolicyclient.dll
>  0x758B0000 - 0x758B7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
>  0x758C0000 - 0x758D2000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
>  0x759E0000 - 0x75C60000  C:\WINDOWS\System32\combase.dll
>  0x75C60000 - 0x75D0F000  C:\WINDOWS\System32\COMDLG32.dll
>  0x75DA0000 - 0x75E1B000  C:\WINDOWS\System32\msvcp_win.dll
>  0x75E20000 - 0x75EDF000  C:\WINDOWS\System32\msvcrt.dll
>  0x75EE0000 - 0x75F2D000  C:\WINDOWS\System32\wintrust.dll
>  0x75F30000 - 0x75FC6000  C:\WINDOWS\System32\OLEAUT32.dll
>  0x75FD0000 - 0x75FF3000  C:\WINDOWS\System32\GDI32.dll
>  0x76000000 - 0x7619D000  C:\WINDOWS\System32\USER32.dll
>  0x761A0000 - 0x761B9000  C:\WINDOWS\System32\bcrypt.dll
>  0x761C0000 - 0x762A3000  C:\WINDOWS\System32\ole32.dll
>  0x762C0000 - 0x763B0000  C:\WINDOWS\System32\KERNEL32.DLL
>  0x767F0000 - 0x7682B000  C:\WINDOWS\System32\cfgmgr32.dll
>  0x76890000 - 0x76917000  C:\WINDOWS\System32\shcore.dll
>  0x76980000 - 0x769E3000  C:\WINDOWS\System32\WS2_32.dll
>  0x769F0000 - 0x76AC4000  C:\WINDOWS\System32\MSCTF.dll
>  0x76AD0000 - 0x76AE9000  C:\WINDOWS\System32\imagehlp.dll
>  0x76AF0000 - 0x76BEE000  C:\WINDOWS\System32\CRYPT32.dll
>  0x76C50000 - 0x76C75000  C:\WINDOWS\System32\IMM32.dll
>  0x76C80000 - 0x7725A000  C:\WINDOWS\System32\SHELL32.dll
>  0x77260000 - 0x772BF000  C:\WINDOWS\System32\bcryptPrimitives.dll
>  0x772C0000 - 0x772D8000  C:\WINDOWS\System32\win32u.dll
>  0x772E0000 - 0x7735E000  C:\WINDOWS\System32\clbcatq.dll
>  0x77360000 - 0x773D8000  C:\WINDOWS\System32\sechost.dll
>  0x773E0000 - 0x7745E000  C:\WINDOWS\System32\ADVAPI32.dll
>  0x77460000 - 0x77467000  C:\WINDOWS\System32\NSI.dll
>  0x77470000 - 0x774B5000  C:\WINDOWS\System32\SHLWAPI.dll
>  0x774C0000 - 0x7757C000  C:\WINDOWS\System32\RPCRT4.dll
>  0x77580000 - 0x777BF000  C:\WINDOWS\System32\KERNELBASE.dll
>  0x77930000 - 0x77A15000  C:\WINDOWS\System32\gdi32full.dll
>  0x77A20000 - 0x77B40000  C:\WINDOWS\System32\ucrtbase.dll
>  0x77B50000 - 0x77CF4000  C:\WINDOWS\SYSTEM32\ntdll.dll
>  0x77D00000 - 0x77D07000  C:\WINDOWS\SYSTEM32\ksuser.dll
>  0x77D30000 - 0x77D6F000  C:\WINDOWS\SYSTEM32\GLU32.dll
>  0x77EF0000 - 0x77FF6000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
>  0x7BB40000 - 0x7BBBF000  C:\WINDOWS\SYSTEM32\dsound.dll
>  0x7BBC0000 - 0x7BBDD000  C:\WINDOWS\SYSTEM32\winmmbase.dll
>  0x7BBE0000 - 0x7BC1A000  C:\WINDOWS\SYSTEM32\wdmaud.drv
>  0x7BC20000 - 0x7BC28000  C:\WINDOWS\SYSTEM32\AVRT.dll
>  0x7BC30000 - 0x7BD66000  C:\WINDOWS\SYSTEM32\AUDIOSES.DLL
>  0x7BD70000 - 0x7BD7A000  C:\WINDOWS\SYSTEM32\msacm32.drv
>  0x7BD80000 - 0x7BD99000  C:\WINDOWS\SYSTEM32\MSACM32.dll
>  0x7BDA0000 - 0x7BDA8000  C:\WINDOWS\SYSTEM32\midimap.dll
>
>
>  ----------------------------------------
>  Memory Dump
>  ----------------------------------------
>
>  Stack: 1024 bytes starting at (ESP = 0019F080)
>
>  * = addr  **                                                  *
>  0019F080: 18 23 00 00  AC F2 19 00  00 00 00 00  80 F0 19 00  .#..............
>  0019F090: 98 F0 19 00  CC BD 66 00  AC F0 19 00  B8 DC 64 00  ......f.......d.
>  0019F0A0: 18 23 00 00  03 00 00 00  00 00 00 00  28 FE 19 00  .#..........(...
>  0019F0B0: 42 D5 64 00  00 00 00 00  C8 B7 86 00  7C 00 10 85  B.d.........|...
>  0019F0C0: 84 20 C5 00  53 47 72 6F  75 70 50 74  72 20 28 2E  . ..SGroupPtr (.
>  0019F0D0: 3F 41 55 53  47 72 6F 75  70 50 74 72  40 40 29 00  ?AUSGroupPtr@@).
>  0019F0E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F0F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F100: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F110: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F120: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F130: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F140: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F150: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F160: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F170: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F180: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F190: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F1A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F1B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F1C0: 00 00 00 00  54 68 69 73  20 61 70 70  6C 69 63 61  ....This applica
>  0019F1D0: 74 69 6F 6E  20 68 61 73  20 65 6E 63  6F 75 6E 74  tion has encount
>  0019F1E0: 65 72 65 64  20 61 20 63  72 69 74 69  63 61 6C 20  ered a critical
>  0019F1F0: 65 72 72 6F  72 3A 0A 0A  45 52 52 4F  52 20 23 31  error:..ERROR #1
>  0019F200: 32 34 20 28  30 78 38 35  31 30 30 30  37 63 29 20  24 (0x8510007c)
>  0019F210: 4D 65 6D 6F  72 79 20 49  6E 76 61 6C  69 64 20 42  Memory Invalid B
>  0019F220: 6C 6F 63 6B  0A 50 72 6F  67 72 61 6D  3A 09 44 3A  lock.Program:.D:
>  0019F230: 5C 54 75 72  74 6C 65 57  4F 57 5C 57  6F 57 2E 65  \TurtleWOW\WoW.e
>  0019F240: 78 65 0A 4F  62 6A 65 63  74 3A 09 53  47 72 6F 75  xe.Object:.SGrou
>  0019F250: 70 50 74 72  20 28 2E 3F  41 55 53 47  72 6F 75 70  pPtr (.?AUSGroup
>  0019F260: 50 74 72 40  40 29 0A 0A  53 4D 65 6D  33 3A 20 50  Ptr@@)..SMem3: P
>  0019F270: 6F 69 6E 74  65 72 20 64  6F 65 73 20  6E 6F 74 20  ointer does not
>  0019F280: 72 65 66 65  72 20 74 6F  20 61 20 76  61 6C 69 64  refer to a valid
>  0019F290: 20 61 6C 6C  6F 63 61 74  65 64 20 62  6C 6F 63 6B   allocated block
>  0019F2A0: 20 6F 66 20  6D 65 6D 6F  72 79 0A 0A  00 00 00 00   of memory......
>  0019F2B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F2C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F2D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F2E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F2F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F300: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F310: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F320: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F330: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F340: 00 00 00 00  00 00 00 00  68 F4 19 00  3C FE 19 00  ........h...<...
>  0019F350: 74 98 BB 77  00 00 00 00  00 00 00 00  00 00 00 00  t..w............
>  0019F360: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F370: 80 CB B5 77  00 00 B5 77  00 40 1A 00  47 00 00 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection)...
>  0019F380: B8 F4 19 00  04 00 00 00  D0 8F 08 00  00 00 00 00  ................
>  0019F390: 00 00 00 00  00 00 00 00  B2 8F BD 77  68 F4 19 00  ...........wh...
>  0019F3A0: FC F7 19 00  B8 F4 19 00  14 F4 19 00  FC F7 19 00  ................
>  0019F3B0: 00 90 BD 77  FC F7 19 00  94 F7 19 00  84 8F BD 77  ...w...........w
>  0019F3C0: 68 F4 19 00  FC F7 19 00  B8 F4 19 00  14 F4 19 00  h...............
>  0019F3D0: D0 8F BD 77  68 F4 19 00  3C FE 19 00  FC F7 19 00  ...wh...<.......
>  0019F3E0: 77 95 BB 77  68 F4 19 00  0C 34 BC 77  B0 95 BB 77  w..wh....4.w...w
>  0019F3F0: B8 F4 19 00  00 00 00 00  FE FF FF FF  00 00 00 00  ................
>  0019F400: 4C FE 19 00  00 00 1A 00  00 30 15 00  00 00 1A 00  L........0......
>  0019F410: 00 30 15 00  00 00 00 00  00 00 00 00  00 00 00 00  .0..............
>  0019F420: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F430: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F440: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F450: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
>  0019F460: 00 00 00 00  00 00 00 00  27 00 00 C0  02 00 00 00  ........'.......
>  0019F470: 00 00 00 00  59 2D 2E 76  00 00 00 00  00 00 00 00  ....Y-.v........
>
>
>  ------------------------------------------------------------------------------

Hello!

Error #124 can occur due to several reasons, including:

 1. Having HD mod installed

 2. Using Super WoW

 3. Having Vanilla Fixes or Vanilla Tweaks installed

 4. Running addons that cause memory leaks

 5. Setting excessively high values in the "Tweaks" section of the launcher, leading to crashes

 6. Using an integrated graphics card with low performance

These are just some possible causes—there could be many others.

Please note: We do not analyze crash logs, so in the future, simply providing the error code (e.g., #124) will suffice.

