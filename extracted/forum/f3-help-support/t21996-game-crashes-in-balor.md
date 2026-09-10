---
title: "game crashes in Balor"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21996"
topic_id: 21996
forum_id: 3
forum: "Help & Support"
author: "ev_va"
author_authority: "player"
posted: "2025-09-20T19:01:00Z"
last_post: "2025-09-20T23:09:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:39:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# game crashes in Balor

## Post 152489 by ev_va — 2025-09-20T19:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152489#p152489 | page 1 | era: pre-1.18.1 -->

The game crashes when flying to Balor. Logging in with the same character also crashes. Now I can't play as this character.  crying_turtle   ==============================================================================
World of WarCraft (build 5875)

Exe:      D:\Games\World of Warcraft Turtle\WoW.exe
Time:     Sep 20, 2025  9:48:12.576 PM
User:     user
Computer: WIN-40PSMRE8R9N
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	D:\Games\World of Warcraft Turtle\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:006D6AD0

The instruction at "0x006D6AD0" referenced memory at "0x00000000".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=00000000  EBX=000008D1  ECX=00000000  EDX=00000000  ESI=0019F970
EDI=00000000  EBP=0019F8C8  ESP=0019F8B0  EIP=006D6AD0  FLG=00010246
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 006D6AD0 0019F8C8 0001:002D5AD0 D:\Games\World of Warcraft Turtle\WoW.exe
 006D2F7A 0019FA50 0001:002D1F7A D:\Games\World of Warcraft Turtle\WoW.exe
 006D25D9 0019FB94 0001:002D15D9 D:\Games\World of Warcraft Turtle\WoW.exe
 006D2233 0019FBC4 0001:002D1233 D:\Games\World of Warcraft Turtle\WoW.exe
 0066FE82 0019FBE0 0001:0026EE82 D:\Games\World of Warcraft Turtle\WoW.exe
 0048329C 0019FC84 0001:0008229C D:\Games\World of Warcraft Turtle\WoW.exe
 00482E73 0019FD10 0001:00081E73 D:\Games\World of Warcraft Turtle\WoW.exe
 0076FC31 0019FD2C 0001:0036EC31 D:\Games\World of Warcraft Turtle\WoW.exe
 007658E7 0019FD50 0001:003648E7 D:\Games\World of Warcraft Turtle\WoW.exe
 0076434C 0019FD5C 0001:0036334C D:\Games\World of Warcraft Turtle\WoW.exe
 0044264E 0019FE24 0001:0004164E D:\Games\World of Warcraft Turtle\WoW.exe
 004246B0 0019FE58 0001:000236B0 D:\Games\World of Warcraft Turtle\WoW.exe
 0042106F 0019FEC8 0001:0002006F D:\Games\World of Warcraft Turtle\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 D:\Games\World of Warcraft Turtle\WoW.exe
 0040411E 0019FF70 0001:0000311E D:\Games\World of Warcraft Turtle\WoW.exe
 75ABFCC9 0019FF80 0001:0000FCC9 C:\Windows\System32\KERNEL32.DLL
 779882AE 0019FFDC 0001:000672AE C:\Windows\SYSTEM32\ntdll.dll
 7798827E 0019FFEC 0001:0006727E C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 006D6AD0 WoW.exe      <unknown symbol>+0 (0x00000000,0x00000000,0x4520C008,0x00000000)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D26000  D:\Games\World of Warcraft Turtle\WoW.exe
 0x028D0000 - 0x02966000  D:\Games\World of Warcraft Turtle\fmod.dll
 0x07110000 - 0x07228000  D:\Games\World of Warcraft Turtle\dbghelp.dll
 0x10000000 - 0x10069000  D:\Games\World of Warcraft Turtle\DivxDecoder.dll
 0x56660000 - 0x56796000  C:\Windows\SYSTEM32\AUDIOSES.DLL
 0x567A0000 - 0x568EC000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igdml32.dll
 0x568F0000 - 0x5AB6B000  C:\Windows\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_6cdc9372d41a2731\nvd3dum.dll
 0x5AB70000 - 0x5DDC9000  C:\Windows\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_6cdc9372d41a2731\nvgpucomp32.dll
 0x5DDD0000 - 0x5E09D000  D:\Games\World of Warcraft Turtle\discord_game_sdk.dll
 0x5E990000 - 0x5E9AF000  C:\Windows\system32\ncryptsslp.dll
 0x5E9B0000 - 0x5E9D1000  C:\Windows\SYSTEM32\ncrypt.dll
 0x5E9E0000 - 0x5EA08000  C:\Windows\SYSTEM32\NTASN1.dll
 0x5EA10000 - 0x5EA20000  C:\Windows\SYSTEM32\mskeyprotect.dll
 0x5EA20000 - 0x5EA9D000  C:\Windows\System32\schannel.dll
 0x5EAA0000 - 0x5EAF8000  C:\Windows\System32\fwpuclnt.dll
 0x5EB00000 - 0x5EB08000  C:\Windows\SYSTEM32\WINNSI.DLL
 0x5EB10000 - 0x5EB22000  C:\Windows\SYSTEM32\ondemandconnroutehelper.dll
 0x5EC50000 - 0x5F0A5000  C:\Windows\SYSTEM32\WININET.dll
 0x5F290000 - 0x5F299000  C:\Windows\SYSTEM32\ktmw32.dll
 0x5F570000 - 0x6168E000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\media_bin_32.dll
 0x617E0000 - 0x62DCE000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igd9dxva32.dll
 0x63540000 - 0x635BF000  C:\Windows\SYSTEM32\dsound.dll
 0x63830000 - 0x681A5000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igc32.dll
 0x68440000 - 0x6885A000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igdgmm32.dll
 0x68860000 - 0x68925000  C:\Windows\SYSTEM32\dxgi.dll
 0x68930000 - 0x6A278000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igd9trinity32.dll
 0x6A910000 - 0x6ABCE000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igdumdim32.dll
 0x6ABD0000 - 0x6AD62000  C:\Windows\SYSTEM32\d3d9.dll
 0x6AD70000 - 0x6AD78000  C:\Windows\System32\rasadhlp.dll
 0x6AD80000 - 0x6AD96000  C:\Windows\system32\wshbth.dll
 0x6ADA0000 - 0x6ADB6000  C:\Windows\system32\pnrpnsp.dll
 0x6ADC0000 - 0x6ADD1000  C:\Windows\system32\napinsp.dll
 0x6AE00000 - 0x6AE1D000  C:\Windows\SYSTEM32\winmmbase.dll
 0x6AEB0000 - 0x6AF1B000  C:\Windows\System32\MMDevApi.dll
 0x6AF50000 - 0x6AFE3000  C:\Windows\SYSTEM32\mscms.dll
 0x6B060000 - 0x6B14D000  C:\Windows\System32\InputHost.dll
 0x6B150000 - 0x6B1C3000  C:\Windows\System32\WindowManagementAPI.dll
 0x6B1D0000 - 0x6B2C3000  C:\Windows\System32\Windows.UI.dll
 0x6B2D0000 - 0x6B36B000  C:\Windows\SYSTEM32\CoreMessaging.dll
 0x6B370000 - 0x6B5EF000  C:\Windows\SYSTEM32\CoreUIComponents.dll
 0x6B5F0000 - 0x6B6A9000  C:\Windows\SYSTEM32\textinputframework.dll
 0x6B710000 - 0x6B724000  C:\Windows\SYSTEM32\dhcpcsvc6.DLL
 0x6B730000 - 0x6B746000  C:\Windows\system32\NLAapi.dll
 0x6B7D0000 - 0x6B860000  C:\Windows\SYSTEM32\DNSAPI.dll
 0x6CD90000 - 0x6CF21000  C:\Windows\SYSTEM32\twinapi.appcore.dll
 0x6D850000 - 0x6D990000  C:\Windows\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_6cdc9372d41a2731\nvppe.dll
 0x6F800000 - 0x6F80E000  C:\Windows\System32\winrnr.dll
 0x6F810000 - 0x6F910000  C:\Windows\SYSTEM32\drvstore.dll
 0x6FAD0000 - 0x6FBE6000  C:\Windows\system32\nvspcap.dll
 0x6FBF0000 - 0x6FE8C000  C:\Windows\SYSTEM32\msi.dll
 0x6FEC0000 - 0x6FECC000  C:\Windows\SYSTEM32\ColorAdapterClient.dll
 0x70180000 - 0x70196000  C:\Windows\SYSTEM32\dhcpcsvc.DLL
 0x705D0000 - 0x705D8000  C:\Windows\SYSTEM32\midimap.dll
 0x705E0000 - 0x7061A000  C:\Windows\SYSTEM32\wdmaud.drv
 0x70690000 - 0x7069A000  C:\Windows\SYSTEM32\msacm32.drv
 0x706A0000 - 0x706C1000  C:\Windows\System32\DriverStore\FileRepository\iigd_dch.inf_amd64_76dc51c99d05ff14\igdinfo32.dll
 0x706D0000 - 0x7077C000  C:\Windows\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_6cdc9372d41a2731\NvMemMapStorage.dll
 0x70780000 - 0x7081C000  C:\Windows\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_6cdc9372d41a2731\nvldumd.dll
 0x70C60000 - 0x70C92000  C:\Windows\SYSTEM32\IPHLPAPI.DLL
 0x71A20000 - 0x71A27000  C:\Windows\SYSTEM32\ksuser.dll
 0x71A30000 - 0x71A3F000  C:\Windows\SYSTEM32\resourcepolicyclient.dll
 0x71A40000 - 0x71A71000  C:\Windows\System32\Windows.Internal.Graphics.Display.DisplayColorManagement.dll
 0x71A80000 - 0x71AAC000  C:\Windows\SYSTEM32\dxcore.dll
 0x71AB0000 - 0x71ADF000  D:\Games\World of Warcraft Turtle\twloader.dll
 0x71AE0000 - 0x71B1F000  C:\Windows\SYSTEM32\GLU32.dll
 0x71B20000 - 0x71C26000  C:\Windows\SYSTEM32\OPENGL32.dll
 0x71C30000 - 0x71C56000  C:\Windows\SYSTEM32\dwmapi.dll
 0x71E80000 - 0x71E8B000  D:\Games\World of Warcraft Turtle\twdiscord.dll
 0x72660000 - 0x726ED000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.6280_none_c0dab36c38bfeda0\COMCTL32.dll
 0x728F0000 - 0x72964000  C:\Windows\system32\uxtheme.dll
 0x72970000 - 0x729ED000  C:\Windows\SYSTEM32\WINSPOOL.DRV
 0x732A0000 - 0x732C9000  C:\Windows\SYSTEM32\devobj.dll
 0x73580000 - 0x735D2000  C:\Windows\SYSTEM32\mswsock.dll
 0x73950000 - 0x73969000  C:\Windows\SYSTEM32\MPR.dll
 0x739D0000 - 0x739E9000  C:\Windows\SYSTEM32\MSACM32.dll
 0x739F0000 - 0x73AD9000  C:\Windows\SYSTEM32\DDRAW.dll
 0x73B50000 - 0x73C2D000  C:\Windows\SYSTEM32\wintypes.dll
 0x73C50000 - 0x73C71000  C:\Windows\SYSTEM32\SspiCli.dll
 0x73C80000 - 0x73CA6000  C:\Windows\SYSTEM32\cryptnet.dll
 0x73CB0000 - 0x73CCE000  C:\Windows\SYSTEM32\gpapi.dll
 0x73CD0000 - 0x73CD8000  C:\Windows\SYSTEM32\WSOCK32.dll
 0x73CE0000 - 0x73CE7000  C:\Windows\SYSTEM32\DCIMAN32.dll
 0x73CF0000 - 0x73D67000  C:\Windows\SYSTEM32\AcSpecfc.DLL
 0x73D70000 - 0x73D7A000  C:\Windows\SYSTEM32\CRYPTBASE.DLL
 0x73D80000 - 0x73DB1000  C:\Windows\system32\rsaenh.dll
 0x73DC0000 - 0x73DD3000  C:\Windows\SYSTEM32\CRYPTSP.dll
 0x73DE0000 - 0x74018000  C:\Windows\SYSTEM32\iertutil.dll
 0x74020000 - 0x7402B000  C:\Windows\SYSTEM32\netutils.dll
 0x74030000 - 0x7404D000  C:\Windows\SYSTEM32\srvcli.dll
 0x74050000 - 0x741FD000  C:\Windows\SYSTEM32\urlmon.dll
 0x742B0000 - 0x74370000  C:\Windows\System32\PROPSYS.dll
 0x74370000 - 0x7437E000  C:\Windows\SYSTEM32\msasn1.dll
 0x74390000 - 0x7439D000  C:\Windows\SYSTEM32\UMPDC.dll
 0x743A0000 - 0x743A8000  C:\Windows\SYSTEM32\DPAPI.DLL
 0x743B0000 - 0x74454000  C:\Windows\SYSTEM32\apphelp.dll
 0x744B0000 - 0x744B8000  C:\Windows\SYSTEM32\AVRT.dll
 0x744C0000 - 0x74504000  C:\Windows\SYSTEM32\POWRPROF.dll
 0x74560000 - 0x745CD000  C:\Windows\SYSTEM32\MSVCP140.dll
 0x745D0000 - 0x7469A000  C:\Windows\SYSTEM32\winhttp.dll
 0x746B0000 - 0x746C5000  C:\Windows\SYSTEM32\VCRUNTIME140.dll
 0x74E00000 - 0x74E08000  C:\Windows\SYSTEM32\VERSION.dll
 0x74EA0000 - 0x74EC5000  C:\Windows\SYSTEM32\USERENV.dll
 0x75090000 - 0x750B9000  C:\Windows\SYSTEM32\ntmarta.dll
 0x750C0000 - 0x750DB000  C:\Windows\SYSTEM32\profapi.dll
 0x750E0000 - 0x75105000  C:\Windows\SYSTEM32\Wldp.dll
 0x75110000 - 0x75728000  C:\Windows\SYSTEM32\windows.storage.dll
 0x75730000 - 0x7573F000  C:\Windows\SYSTEM32\kernel.appcore.dll
 0x75740000 - 0x75768000  C:\Windows\SYSTEM32\WINMM.dll
 0x75900000 - 0x759BF000  C:\Windows\System32\msvcrt.dll
 0x759C0000 - 0x759C7000  C:\Windows\System32\NSI.dll
 0x759D0000 - 0x75A47000  C:\Windows\System32\sechost.dll
 0x75A50000 - 0x75A99000  C:\Windows\System32\SHLWAPI.dll
 0x75AA0000 - 0x75B90000  C:\Windows\System32\KERNEL32.DLL
 0x75B90000 - 0x75BA8000  C:\Windows\System32\win32u.dll
 0x75BB0000 - 0x75BC9000  C:\Windows\System32\imagehlp.dll
 0x75BD0000 - 0x75CB7000  C:\Windows\System32\gdi32full.dll
 0x75CC0000 - 0x75D79000  C:\Windows\System32\RPCRT4.dll
 0x75D90000 - 0x75F2C000  C:\Windows\System32\USER32.dll
 0x75F30000 - 0x75FAD000  C:\Windows\System32\ADVAPI32.dll
 0x75FB0000 - 0x76009000  C:\Windows\System32\wintrust.dll
 0x76010000 - 0x7604B000  C:\Windows\System32\cfgmgr32.dll
 0x76050000 - 0x760B3000  C:\Windows\System32\WS2_32.dll
 0x760C0000 - 0x760D9000  C:\Windows\System32\bcrypt.dll
 0x760E0000 - 0x76319000  C:\Windows\System32\KERNELBASE.dll
 0x76320000 - 0x765A0000  C:\Windows\System32\combase.dll
 0x765A0000 - 0x7664F000  C:\Windows\System32\COMDLG32.dll
 0x766B0000 - 0x767D0000  C:\Windows\System32\ucrtbase.dll
 0x767D0000 - 0x768A4000  C:\Windows\System32\MSCTF.dll
 0x76910000 - 0x7698E000  C:\Windows\System32\clbcatq.dll
 0x76990000 - 0x76A0B000  C:\Windows\System32\msvcp_win.dll
 0x76A10000 - 0x76A97000  C:\Windows\System32\shcore.dll
 0x76AA0000 - 0x76B36000  C:\Windows\System32\OLEAUT32.dll
 0x76B40000 - 0x76C23000  C:\Windows\System32\ole32.dll
 0x76C30000 - 0x76C55000  C:\Windows\System32\IMM32.dll
 0x76C60000 - 0x76D5F000  C:\Windows\System32\CRYPT32.dll
 0x76D70000 - 0x7734B000  C:\Windows\System32\SHELL32.dll
 0x77350000 - 0x7778A000  C:\Windows\System32\SETUPAPI.dll
 0x777F0000 - 0x7784F000  C:\Windows\System32\bcryptPrimitives.dll
 0x77850000 - 0x77873000  C:\Windows\System32\GDI32.dll
 0x77920000 - 0x77AC4000  C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 006D6AD0)

 006D6AD0: 8B 01 8D 04  C0 8D 44 42  EF 85 C0 7C  12 3B 05 A8  ......DB...|.;..

Stack: 1024 bytes starting at (ESP = 0019F8B0)

 * = addr  **                                                  *
 0019F8B0: E9 64 6D 00  00 00 00 00  64 C1 20 45  88 C1 20 45  .dm.....d. E.. E
 0019F8C0: 40 2F 6D 00  E8 F9 19 00  50 FA 19 00  7A 2F 6D 00  @/m.....P...z/m.
 0019F8D0: 00 00 00 00  00 00 00 00  08 C0 20 45  00 00 00 00  .......... E....
 0019F8E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F8F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F900: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F910: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F920: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F930: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F940: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F950: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F960: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F970: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F980: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F990: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F9A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019F9B0: 00 00 00 00  00 00 00 00  9C 01 00 00  00 00 00 00  ................
 0019F9C0: 18 0E C3 1F  84 57 7B 22  18 FA 19 00  7A B5 69 00  .....W{"....z.i.
 0019F9D0: 00 20 00 00  F8 F9 19 00  04 FB 19 00  00 FB 19 00  . ..............
 0019F9E0: E8 FA 19 00  54 FA 19 00  00 00 00 00  00 00 00 00  ....T...........
 0019F9F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FA00: 00 00 00 00  D1 08 00 00  F4 FA 19 00  B0 64 6D 00  .............dm.
 0019FA10: 58 95 5E C5  C6 EE 66 44  64 C1 20 45  34 16 81 00  X.^...fDd. E4...
 0019FA20: 08 4A A6 20  00 01 00 00  08 4A A6 20  00 01 00 00  .J. .....J. ....
 0019FA30: 20 00 00 00  20 00 00 00  01 00 00 00  00 00 00 00   ... ...........
 0019FA40: C6 EE 66 44  64 C1 20 45  61 00 00 00  00 15 0D 45  ..fDd. Ea......E
 0019FA50: 94 FB 19 00  D9 25 6D 00  68 FC 19 00  60 9B CE 00  .....%m.h...`...
 0019FA60: 01 00 00 00  00 00 00 00  00 00 00 00  A4 18 00 00  ................
 0019FA70: 00 00 00 00  68 BC C7 00  A7 86 86 00  02 00 00 00  ....h...........
 0019FA80: 88 E1 19 00  00 C0 30 3E  00 80 41 3E  02 00 00 00  ......0>..A>....
 0019FA90: 04 00 00 00  F0 74 C8 35  04 FB 19 00  9C 01 00 00  .....t.5........
 0019FAA0: 00 00 00 00  B4 FA 19 00  F4 FA 19 00  04 00 00 00  ................
 0019FAB0: A4 18 00 00  83 21 C5 45  CC FA 19 00  E4 23 67 00  .....!.E.....#g.
 0019FAC0: 00 FB 19 00  B2 0D 00 00  D8 FA 19 00  08 FB 19 00  ................
 0019FAD0: A2 0A 68 00  00 FB 19 00  68 FC 19 00  31 E6 BA 40  ..h.....h...1..@
 0019FAE0: D3 05 10 C6  CE 99 19 45  00 00 00 00  00 00 00 00  .......E........
 0019FAF0: 00 00 00 00  00 73 FF FF  7F 65 66 FF  40 2F 23 FF  .....s...ef.@/#.
 0019FB00: 93 6D 5F FF  88 8F 95 FF  68 8C B3 FF  4C 8E C2 FF  .m_.....h...L...
 0019FB10: 5B 4B 57 FF  B5 E7 FF FF  9A D0 FF FF  56 5F 72 FF  [KW.........V_r.
 0019FB20: 00 00 00 FF  78 50 5D FF  4A 48 48 FF  32 20 0F FF  ....xP].JHH.2 ..
 0019FB30: 32 48 30 FF  42 3F 27 FF  4A 7E EF 43  00 00 80 3E  2H0.B?'.J~.C...>
 0019FB40: 65 65 65 FF  00 00 80 3F  00 00 80 3F  00 00 00 3F  eee....?...?...?
 0019FB50: 33 33 73 3F  00 00 80 3F  14 AE 47 3F  14 AE 47 3F  33s?...?..G?..G?
 0019FB60: 66 66 66 3F  66 66 66 3F  00 00 80 3F  00 00 00 00  fff?fff?...?....
 0019FB70: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0019FB80: 00 00 80 3F  D1 08 00 00  00 15 0D 45  00 00 00 00  ...?.......E....
 0019FB90: 0F 00 00 00  C4 FB 19 00  33 22 6D 00  01 00 00 00  ........3"m.....
 0019FBA0: 9D FF 66 00  9C 01 00 00  68 FC 19 00  00 00 00 00  ..f.....h.......
 0019FBB0: 00 00 00 00  00 00 80 3F  2D AE 80 BE  69 C8 77 3F  .......?-...i.w?
 0019FBC0: 00 00 00 00  E0 FB 19 00  82 FE 66 00  08 80 6C 20  ..........f...l
 0019FBD0: 08 80 11 15  08 80 6C 20  68 FC 19 00  F8 FB 19 00  ......l h.......
 0019FBE0: 84 FC 19 00  9C 32 48 00  75 43 49 C1  24 1A 0F 15  .....2H.uCI.$...
 0019FBF0: 08 80 11 15  08 13 A7 20  AF 06 10 C6  0B A7 19 45  ....... .......E
 0019FC00: 66 4C AA 40  02 00 00 00  90 FC 19 00  64 ED 78 0B  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection).
 0019FC10: B0 09 C3 6A  88 8A CC 15  5C FC 19 00  65 09 C3 6A  ...j....\...e..j
 0019FC20: 60 ED 78 0B  02 00 00 00  90 FC 19 00  C7 5E 04 43  `.x..........^.C
 0019FC30: 90 FC 19 00  60 ED 78 0B  88 8A CC 15  64 ED 78 0B  ....`.x.....d.x.
 0019FC40: 00 00 00 00  B8 0B 10 C6  7B F4 19 45  DD 24 C6 3E  ........{..E.$.>
 0019FC50: B8 0B 10 C6  7B F4 19 45  DD 24 C6 3E  B8 0B 10 C6  ....{..E.$.>....
 0019FC60: 7B F4 19 45  8F F6 20 40  D3 05 10 C6  CE 99 19 45  {..E.. @.......E
 0019FC70: 31 E6 BA 40  00 00 00 00  AF 47 E1 3D  01 00 00 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection).=....
 0019FC80: 00 00 00 00  10 FD 19 00  73 2E 48 00  00 00 00 00  ........s.H.....
 0019FC90: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0019FCA0: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........

 ------------------------------------------------------------------------------

======================================================================
Hardware/Driver Information:
Processor:              0x0
Page Size:              4096
Min App Address:        0x10000
Max App Address:        0x7ffeffff
Processor Mask:         0xffff
Number of Processors:   16
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        6
Processor Revision:     48898

Percent memory used:    23
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576

## Post 152501 by Sleeptime (Turtle WoW Team) [STAFF] — 2025-09-20T21:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152501#p152501 | page 1 | era: pre-1.18.1 -->

Hey there!

Most crashes are caused by custom mods or outdated addons. I recommend disabling all of your addons and removing any custom mods. You can also manually delete your WDB folder from the Turtle-WoW directory, as this often solves visual glitches.

## Post 152502 by ev_va — 2025-09-20T21:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152502#p152502 | page 1 | era: pre-1.18.1 -->

My mistake. I forgot I had custom mods installed. TY  smiling_turtle

## Post 152508 by Snkx (Patch Note Conspiracy Theorist) — 2025-09-20T23:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152508#p152508 | page 1 | era: pre-1.18.1 -->

It's the HD water mod that crashes in balor BTW.

I removed only that mod and it worked

