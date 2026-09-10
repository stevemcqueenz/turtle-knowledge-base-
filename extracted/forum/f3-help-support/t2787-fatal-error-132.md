---
title: "Fatal error #132"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2787"
topic_id: 2787
forum_id: 3
forum: "Help & Support"
author: "Epkdigital"
author_authority: "player"
posted: "2022-03-05T18:56:00Z"
last_post: "2022-10-30T21:59:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:20:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Fatal error #132

## Post 17410 by Epkdigital — 2022-03-05T18:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17410#p17410 | page 1 | era: pre-1.18.1 -->

Hello,
got ERROR #132 since today, don't know why the game was working before.
Already try to reboot, reinstall and delete cache etc
So every time I try to loggong a character I got this after the loading screen :
==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Users\Corentin\Downloads\turtle_client_116\WoW.exe
Time:     Mar  5, 2022  7:55:31.843 PM
User:     Corentin
Computer: CORENTIN
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\Corentin\Downloads\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:78A10AF2

The instruction at "0x78A10AF2" referenced memory at "0x513B597E".
The memory could not be "written".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=058E7810  EBX=00005534  ECX=78A112E0  EDX=058E22DC  ESI=78A112E0
EDI=058E2040  EBP=05BAFF50  ESP=05BAFF2C  EIP=78A10AF2  FLG=00010206
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 78A10AF2 05BAFF50 0001:000BFAF2 C:\WINDOWS\SYSTEM32\igdumdim32.dll
 5E16B481 05BAFF70 0001:0015A481 C:\WINDOWS\SYSTEM32\d3d9.dll
 76B3FA29 05BAFF80 0001:0000FA29 C:\WINDOWS\System32\KERNEL32.DLL
 77847A9E 05BAFFDC 0001:00066A9E C:\WINDOWS\SYSTEM32\ntdll.dll
 77847A6E 05BAFFEC 0001:00066A6E C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 78A10AF2 igdumdim32.dll GTPIN_IGC_PrepareForGTPin+584946 (0x058E22DC,0x00000001,0x5E16A140,0x5E16A140)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Users\Corentin\Downloads\turtle_client_116\WoW.exe
 0x02C20000 - 0x02CB6000  C:\Users\Corentin\Downloads\turtle_client_116\fmod.dll
 0x10000000 - 0x10069000  C:\Users\Corentin\Downloads\turtle_client_116\DivxDecoder.dll
 0x211A0000 - 0x212B8000  C:\Users\Corentin\Downloads\turtle_client_116\dbghelp.dll
 0x58760000 - 0x58792000  C:\Windows\System32\Windows.Internal.Graphics.Display.DisplayColorManagement.dll
 0x587A0000 - 0x587A9000  C:\WINDOWS\SYSTEM32\ktmw32.dll
 0x587B0000 - 0x587CE000  C:\Users\Corentin\Downloads\turtle_client_116\DiscordOverlay.dll
 0x587D0000 - 0x5880F000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x58810000 - 0x58913000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x58920000 - 0x58927000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x58930000 - 0x58A19000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x58A20000 - 0x58A97000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x58AA0000 - 0x58AAE000  C:\WINDOWS\System32\winrnr.dll
 0x58AB0000 - 0x58AC0000  C:\WINDOWS\system32\wshbth.dll
 0x58AC0000 - 0x58AD6000  C:\WINDOWS\system32\pnrpnsp.dll
 0x58AE0000 - 0x58AF1000  C:\WINDOWS\system32\napinsp.dll
 0x58B00000 - 0x58B12000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
 0x58B20000 - 0x58B9F000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x5A3F0000 - 0x5A3F8000  C:\WINDOWS\SYSTEM32\midimap.dll
 0x5A400000 - 0x5A40A000  C:\WINDOWS\SYSTEM32\msacm32.drv
 0x5A410000 - 0x5A429000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x5A430000 - 0x5A46A000  C:\WINDOWS\SYSTEM32\wdmaud.drv
 0x5A470000 - 0x5A48D000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x5A4B0000 - 0x5A4B8000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
 0x5AEC0000 - 0x5AEC7000  C:\WINDOWS\SYSTEM32\ksuser.dll
 0x5AEF0000 - 0x5AEF8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x5D460000 - 0x5D46F000  C:\WINDOWS\SYSTEM32\resourcepolicyclient.dll
 0x5D8F0000 - 0x5D8FB000  C:\WINDOWS\SYSTEM32\netutils.dll
 0x5D900000 - 0x5D91D000  C:\WINDOWS\SYSTEM32\srvcli.dll
 0x5DBF0000 - 0x5DE1B000  C:\WINDOWS\SYSTEM32\iertutil.dll
 0x5DE60000 - 0x5E008000  C:\WINDOWS\SYSTEM32\urlmon.dll
 0x5E010000 - 0x5E1A0000  C:\WINDOWS\SYSTEM32\d3d9.dll
 0x6B420000 - 0x6B585000  C:\WINDOWS\SYSTEM32\dcomp.dll
 0x6C410000 - 0x6C488000  C:\WINDOWS\System32\schannel.dll
 0x6C490000 - 0x6C498000  C:\WINDOWS\SYSTEM32\AVRT.dll
 0x6C4A0000 - 0x6C8F6000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x6C900000 - 0x6C91F000  C:\WINDOWS\system32\ncryptsslp.dll
 0x6CEF0000 - 0x6D7BB000  C:\WINDOWS\SYSTEM32\igdusc32.dll
 0x6D7C0000 - 0x6D7E8000  C:\WINDOWS\SYSTEM32\NTASN1.dll
 0x6D7F0000 - 0x6D811000  C:\WINDOWS\SYSTEM32\ncrypt.dll
 0x700B0000 - 0x7023F000  C:\WINDOWS\SYSTEM32\twinapi.appcore.dll
 0x70240000 - 0x702B3000  C:\Windows\System32\WindowManagementAPI.dll
 0x702C0000 - 0x703B3000  C:\Windows\System32\Windows.UI.dll
 0x710C0000 - 0x711AD000  C:\Windows\System32\InputHost.dll
 0x712D0000 - 0x7139B000  C:\WINDOWS\SYSTEM32\winhttp.dll
 0x715B0000 - 0x71641000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
 0x72200000 - 0x72252000  C:\WINDOWS\SYSTEM32\mswsock.dll
 0x72260000 - 0x72270000  C:\WINDOWS\SYSTEM32\mskeyprotect.dll
 0x723B0000 - 0x72473000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x72580000 - 0x7265B000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x72660000 - 0x726FB000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x72700000 - 0x7297E000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
 0x72980000 - 0x72996000  C:\WINDOWS\system32\NLAapi.dll
 0x729A0000 - 0x729A8000  C:\WINDOWS\SYSTEM32\DPAPI.DLL
 0x729B0000 - 0x72A08000  C:\WINDOWS\System32\fwpuclnt.dll
 0x72A10000 - 0x72AC9000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x72AD0000 - 0x72AD8000  C:\Windows\System32\rasadhlp.dll
 0x72DB0000 - 0x72DC9000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x73060000 - 0x73089000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x73090000 - 0x730BC000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x73100000 - 0x73126000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x73350000 - 0x73412000  C:\Windows\System32\PROPSYS.dll
 0x73CC0000 - 0x73CD2000  C:\Program Files\Avast Software\Avast\x86\aswhook.dll
 0x74140000 - 0x74166000  C:\Windows\System32\cryptnet.dll
 0x74170000 - 0x7419F000  C:\WINDOWS\system32\rsaenh.dll
 0x74200000 - 0x74213000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x743C0000 - 0x74432000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x74440000 - 0x74493000  C:\WINDOWS\system32\Oleacc.dll
 0x744A0000 - 0x744D2000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
 0x744F0000 - 0x744FC000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x74500000 - 0x7459F000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x745A0000 - 0x74633000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x74700000 - 0x7478D000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
 0x74790000 - 0x7479A000  C:\WINDOWS\SYSTEM32\CRYPTBASE.DLL
 0x74BD0000 - 0x74C64000  C:\WINDOWS\SYSTEM32\TextShaping.dll
 0x74C70000 - 0x74C95000  C:\WINDOWS\SYSTEM32\Wldp.dll
 0x74CA0000 - 0x752AC000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x752B0000 - 0x752BD000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x752C0000 - 0x75304000  C:\WINDOWS\SYSTEM32\powrprof.dll
 0x75310000 - 0x75447000  C:\WINDOWS\SYSTEM32\AUDIOSES.DLL
 0x75450000 - 0x754BB000  C:\WINDOWS\System32\MMDevApi.dll
 0x754C0000 - 0x754CF000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x754D0000 - 0x75544000  C:\WINDOWS\system32\uxtheme.dll
 0x75550000 - 0x75578000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x75580000 - 0x755A1000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x755B0000 - 0x755BE000  C:\WINDOWS\SYSTEM32\MSASN1.dll
 0x755C0000 - 0x755D8000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x755E0000 - 0x7560B000  C:\WINDOWS\System32\DEVOBJ.dll
 0x75660000 - 0x75685000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x756A0000 - 0x75C56000  C:\WINDOWS\System32\SHELL32.dll
 0x75C60000 - 0x75CC3000  C:\WINDOWS\System32\WS2_32.dll
 0x75CD0000 - 0x75DCA000  C:\WINDOWS\System32\CRYPT32.dll
 0x75DD0000 - 0x75E66000  C:\WINDOWS\System32\OLEAUT32.dll
 0x75EE0000 - 0x76080000  C:\WINDOWS\System32\USER32.dll
 0x76080000 - 0x7613E000  C:\WINDOWS\System32\RPCRT4.dll
 0x76140000 - 0x761BB000  C:\WINDOWS\System32\ADVAPI32.dll
 0x761C0000 - 0x7623B000  C:\WINDOWS\System32\msvcp_win.dll
 0x76240000 - 0x7627B000  C:\WINDOWS\System32\cfgmgr32.dll
 0x762A0000 - 0x763C0000  C:\WINDOWS\System32\ucrtbase.dll
 0x763C0000 - 0x767FC000  C:\WINDOWS\System32\SETUPAPI.dll
 0x76890000 - 0x768B5000  C:\WINDOWS\System32\IMM32.dll
 0x768C0000 - 0x76936000  C:\WINDOWS\System32\sechost.dll
 0x76940000 - 0x76964000  C:\WINDOWS\System32\GDI32.dll
 0x76980000 - 0x76A63000  C:\WINDOWS\System32\ole32.dll
 0x76A70000 - 0x76ACF000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x76AD0000 - 0x76B15000  C:\WINDOWS\System32\SHLWAPI.dll
 0x76B20000 - 0x76C10000  C:\WINDOWS\System32\KERNEL32.DLL
 0x76C10000 - 0x76C28000  C:\WINDOWS\System32\win32u.dll
 0x76C30000 - 0x76EB1000  C:\WINDOWS\System32\combase.dll
 0x76EC0000 - 0x76F47000  C:\WINDOWS\System32\shcore.dll
 0x76F50000 - 0x77164000  C:\WINDOWS\System32\KERNELBASE.dll
 0x77170000 - 0x7724E000  C:\WINDOWS\System32\gdi32full.dll
 0x772B0000 - 0x77384000  C:\WINDOWS\System32\MSCTF.dll
 0x77390000 - 0x7743F000  C:\WINDOWS\System32\COMDLG32.dll
 0x77440000 - 0x77459000  C:\WINDOWS\System32\bcrypt.dll
 0x775D0000 - 0x775D7000  C:\WINDOWS\System32\NSI.dll
 0x775E0000 - 0x7765E000  C:\WINDOWS\System32\clbcatq.dll
 0x77660000 - 0x776AE000  C:\WINDOWS\System32\WINTRUST.dll
 0x77710000 - 0x777CF000  C:\WINDOWS\System32\msvcrt.dll
 0x777E0000 - 0x77983000  C:\WINDOWS\SYSTEM32\ntdll.dll
 0x77A50000 - 0x77D53000  C:\Users\Corentin\Downloads\turtle_client_116\discord_game_sdk.dll
 0x77D60000 - 0x77FFB000  C:\WINDOWS\SYSTEM32\msi.dll
 0x78950000 - 0x7ADA4000  C:\WINDOWS\SYSTEM32\igdumdim32.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 78A10AF2)

 78A10AF2: 00 8B 4A 04  3B 51 08 75  0B 89 71 08  89 56 08 E9  ..J.;Q.u..q..V..

Stack: 1024 bytes starting at (ESP = 05BAFF2C)

 * = addr                                         **                       *
 05BAFF20: 00 00 00 00  04 00 00 00  50 FF BA 05  2E A4 16 5E  ........P......^
 05BAFF30: 40 5D DC 00  10 78 8E 05  40 20 8E 05  01 00 00 00  @]...x..@ ......
 05BAFF40: 00 00 01 5E  2C 00 00 00  00 00 00 00  01 00 00 00  ...^,...........
 05BAFF50: 70 FF BA 05  81 B4 16 5E  DC 22 8E 05  01 00 00 00  p......^."......
 05BAFF60: 40 A1 16 5E  40 A1 16 5E  40 20 8E 05  4D A1 16 5E  @..^@..^@ ..M..^
 05BAFF70: 80 FF BA 05  29 FA B3 76  40 20 8E 05  10 FA B3 76  ....)..v@ .....v
 05BAFF80: DC FF BA 05  9E 7A 84 77  40 20 8E 05  53 D2 0E 0D  .....z.w@ ..S...
 05BAFF90: 00 00 00 00  00 00 00 00  40 20 8E 05  05 00 00 C0  ........@ ......
 05BAFFA0: 00 00 00 00  70 E3 10 77  C8 47 FE C2  C2 C8 47 FE  ....p..w.G....G.
 05BAFFB0: 00 00 00 00  00 00 00 00  3C F9 BA 05  B8 A4 EE B5  ........<.......
 05BAFFC0: 00 00 00 00  8C FF BA 05  3C F9 BA 05  E4 FF BA 05  ........<.......
 05BAFFD0: 40 AD 85 77  EF E5 3A 7F  00 00 00 00  EC FF BA 05  @..w..:.........
 05BAFFE0: 6E 7A 84 77  FF FF FF FF  33 8A 86 77  00 00 00 00  nz.w....3..w....
 05BAFFF0: 00 00 00 00  40 A1 16 5E  40 20 8E 05  00 00 00 00  ....@..^@ ......
 05BB0000: <can't read from this address>

 ------------------------------------------------------------------------------

======================================================================
Hardware/Driver Information:
Processor:              0x0
Page Size:              4096
Min App Address:        0x10000
Max App Address:        0x7ffeffff
Processor Mask:         0xff
Number of Processors:   8
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        6
Processor Revision:     15363

Percent memory used:    35
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576

## Post 27540 by Torta (Turtle WoW Team) [STAFF] — 2022-10-19T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27540#p27540 | page 1 | era: pre-1.18.1 -->

This is a graphic-card's driver-related crash. You either have to update or revert the recent driver update.

## Post 28165 by Johntael — 2022-10-30T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28165#p28165 | page 1 | era: pre-1.18.1 -->

I once fixed a similar error by patching the exe with this 4gb ram patch <https://ntcore.com/?page_id=371>

