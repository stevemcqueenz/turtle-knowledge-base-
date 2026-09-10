---
title: "Getting crashes"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2895"
topic_id: 2895
forum_id: 3
forum: "Help & Support"
author: "Loradon"
author_authority: "player"
posted: "2022-04-13T11:05:00Z"
last_post: "2023-06-23T00:37:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T09:11:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Getting crashes

## Post 18072 by Loradon — 2022-04-13T11:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18072#p18072 | page 1 | era: pre-1.18.1 -->

Getting artefacts and crashes ==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Games\Turtle WoW 1.16.0\WoW.exe
Time:     Apr 13, 2022  1:59:55.011 PM
User:     Windows 10
Computer: LORADON
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Games\Turtle WoW 1.16.0\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AACE

The instruction at "0x0071AACE" referenced memory at "0x36FDF110".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=36FDF110  EBX=00830082  ECX=00830082  EDX=36FDD010  ESI=0000006D
EDI=21B996AC  EBP=0019C7E4  ESP=0019C7A4  EIP=0071AACE  FLG=00010202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 0071AACE 0019C7E4 0001:00319ACE C:\Games\Turtle WoW 1.16.0\WoW.exe
 00719C14 0019C808 0001:00318C14 C:\Games\Turtle WoW 1.16.0\WoW.exe
 0070CF08 0019C834 0001:0030BF08 C:\Games\Turtle WoW 1.16.0\WoW.exe
 0070B62C 0019C8C8 0001:0030A62C C:\Games\Turtle WoW 1.16.0\WoW.exe
 0070896E 0019FC44 0001:0030796E C:\Games\Turtle WoW 1.16.0\WoW.exe
 004836AB 0019FC84 0001:000826AB C:\Games\Turtle WoW 1.16.0\WoW.exe
 00482E7A 0019FD10 0001:00081E7A C:\Games\Turtle WoW 1.16.0\WoW.exe
 0076FC31 0019FD2C 0001:0036EC31 C:\Games\Turtle WoW 1.16.0\WoW.exe
 007658E7 0019FD50 0001:003648E7 C:\Games\Turtle WoW 1.16.0\WoW.exe
 0076434C 0019FD5C 0001:0036334C C:\Games\Turtle WoW 1.16.0\WoW.exe
 0044264E 0019FE24 0001:0004164E C:\Games\Turtle WoW 1.16.0\WoW.exe
 004246B0 0019FE58 0001:000236B0 C:\Games\Turtle WoW 1.16.0\WoW.exe
 0042106F 0019FEC8 0001:0002006F C:\Games\Turtle WoW 1.16.0\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 C:\Games\Turtle WoW 1.16.0\WoW.exe
 0040411E 0019FF70 0001:0000311E C:\Games\Turtle WoW 1.16.0\WoW.exe
 75ABFA29 0019FF80 0001:0000FA29 C:\Windows\System32\KERNEL32.DLL
 77BB7A9E 0019FFDC 0001:00066A9E C:\Windows\SYSTEM32\ntdll.dll
 77BB7A6E 0019FFEC 0001:00066A6E C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 0071AACE WoW.exe      <unknown symbol>+0 (0x152D78E0,0x37124708,0x0019C8E8,0x00000000)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Games\Turtle WoW 1.16.0\WoW.exe
 0x02C10000 - 0x02CA6000  C:\Games\Turtle WoW 1.16.0\fmod.dll
 0x054B0000 - 0x055C8000  C:\Games\Turtle WoW 1.16.0\dbghelp.dll
 0x10000000 - 0x10069000  C:\Games\Turtle WoW 1.16.0\DivxDecoder.dll
 0x6D160000 - 0x6D17F000  C:\Windows\system32\ncryptsslp.dll
 0x6D180000 - 0x6D1A1000  C:\Windows\SYSTEM32\ncrypt.dll
 0x6D1B0000 - 0x6D1B8000  C:\Windows\SYSTEM32\DPAPI.DLL
 0x6D1C0000 - 0x6D1E8000  C:\Windows\SYSTEM32\NTASN1.dll
 0x6D1F0000 - 0x6D200000  C:\Windows\SYSTEM32\mskeyprotect.dll
 0x6D200000 - 0x6D278000  C:\Windows\System32\schannel.dll
 0x6D280000 - 0x6D2D8000  C:\Windows\System32\fwpuclnt.dll
 0x6D2E0000 - 0x6D46F000  C:\Windows\SYSTEM32\twinapi.appcore.dll
 0x6D470000 - 0x6D4E3000  C:\Windows\System32\WindowManagementAPI.dll
 0x6D4F0000 - 0x6D5E3000  C:\Windows\System32\Windows.UI.dll
 0x6D5F0000 - 0x6D5F8000  C:\Windows\SYSTEM32\midimap.dll
 0x6D600000 - 0x6D60A000  C:\Windows\SYSTEM32\msacm32.drv
 0x6D610000 - 0x6D618000  C:\Windows\SYSTEM32\AVRT.dll
 0x6D620000 - 0x6D627000  C:\Windows\SYSTEM32\ksuser.dll
 0x6D630000 - 0x6D66A000  C:\Windows\SYSTEM32\wdmaud.drv
 0x6D670000 - 0x6D67F000  C:\Windows\SYSTEM32\resourcepolicyclient.dll
 0x6D680000 - 0x6D7B6000  C:\Windows\SYSTEM32\AUDIOSES.DLL
 0x6D7C0000 - 0x6D82B000  C:\Windows\System32\MMDevApi.dll
 0x6D830000 - 0x6D8AF000  C:\Windows\SYSTEM32\dsound.dll
 0x6D8B0000 - 0x6DAD3000  C:\Windows\system32\nvspcap.dll
 0x6DAE0000 - 0x6EEF5000  C:\Windows\System32\DriverStore\FileRepository\nvmdi.inf_amd64_2b01a28ee7b06750\nvd3dum.dll
 0x6EF00000 - 0x6EFD9000  C:\Windows\System32\DriverStore\FileRepository\nvmdi.inf_amd64_2b01a28ee7b06750\nvldumd.dll
 0x6EFE0000 - 0x6F170000  C:\Windows\SYSTEM32\d3d9.dll
 0x6F170000 - 0x6F179000  C:\Windows\SYSTEM32\ktmw32.dll
 0x6F180000 - 0x6F483000  C:\Games\Turtle WoW 1.16.0\discord_game_sdk.dll
 0x6F490000 - 0x6F4AE000  C:\Games\Turtle WoW 1.16.0\DiscordOverlay.dll
 0x6F4B0000 - 0x6F4EF000  C:\Windows\SYSTEM32\GLU32.dll
 0x6F4F0000 - 0x6F5F3000  C:\Windows\SYSTEM32\OPENGL32.dll
 0x6F600000 - 0x6F89B000  C:\Windows\SYSTEM32\msi.dll
 0x6F8A0000 - 0x6F92D000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
 0x6F930000 - 0x6F9A7000  C:\Windows\SYSTEM32\AcSpecfc.DLL
 0x6FB70000 - 0x6FB7C000  C:\Windows\SYSTEM32\ColorAdapterClient.dll
 0x6FB80000 - 0x6FBAC000  C:\Windows\SYSTEM32\dxcore.dll
 0x6FBB0000 - 0x6FC43000  C:\Windows\SYSTEM32\mscms.dll
 0x70570000 - 0x7065D000  C:\Windows\System32\InputHost.dll
 0x71480000 - 0x71542000  C:\Windows\System32\PROPSYS.dll
 0x71710000 - 0x717EB000  C:\Windows\SYSTEM32\wintypes.dll
 0x717F0000 - 0x71A6E000  C:\Windows\SYSTEM32\CoreUIComponents.dll
 0x71A70000 - 0x71B0B000  C:\Windows\SYSTEM32\CoreMessaging.dll
 0x71B10000 - 0x71BC9000  C:\Windows\SYSTEM32\textinputframework.dll
 0x71C70000 - 0x71C78000  C:\Windows\System32\rasadhlp.dll
 0x71CC0000 - 0x71CC8000  C:\Windows\SYSTEM32\WINNSI.DLL
 0x71CD0000 - 0x71D9B000  C:\Windows\SYSTEM32\winhttp.dll
 0x71DA0000 - 0x71DB2000  C:\Windows\SYSTEM32\ondemandconnroutehelper.dll
 0x72320000 - 0x7233E000  C:\Windows\SYSTEM32\gpapi.dll
 0x723A0000 - 0x723A8000  C:\Windows\SYSTEM32\WSOCK32.dll
 0x724C0000 - 0x72551000  C:\Windows\SYSTEM32\DNSAPI.dll
 0x72560000 - 0x72576000  C:\Windows\system32\NLAapi.dll
 0x72D30000 - 0x72D3E000  C:\Windows\System32\winrnr.dll
 0x72D40000 - 0x72D56000  C:\Windows\system32\pnrpnsp.dll
 0x72D60000 - 0x72DA4000  C:\Windows\SYSTEM32\powrprof.dll
 0x72DB0000 - 0x72DC1000  C:\Windows\system32\napinsp.dll
 0x72E80000 - 0x72F82000  C:\Windows\SYSTEM32\drvstore.dll
 0x72F90000 - 0x72FB6000  C:\Windows\SYSTEM32\cryptnet.dll
 0x72FC0000 - 0x72FEF000  C:\Windows\system32\rsaenh.dll
 0x73110000 - 0x7313B000  C:\Windows\SYSTEM32\devobj.dll
 0x73200000 - 0x73252000  C:\Windows\SYSTEM32\mswsock.dll
 0x73260000 - 0x73323000  C:\Windows\SYSTEM32\dxgi.dll
 0x73C70000 - 0x73C99000  C:\Windows\SYSTEM32\ntmarta.dll
 0x73CB0000 - 0x73CC0000  C:\Windows\system32\wshbth.dll
 0x73D00000 - 0x73D18000  C:\Windows\SYSTEM32\profapi.dll
 0x73D20000 - 0x73D33000  C:\Windows\SYSTEM32\CRYPTSP.dll
 0x73EC0000 - 0x73ECE000  C:\Windows\SYSTEM32\msasn1.dll
 0x73ED0000 - 0x73EDD000  C:\Windows\SYSTEM32\UMPDC.dll
 0x73F20000 - 0x73F52000  C:\Windows\SYSTEM32\IPHLPAPI.DLL
 0x74170000 - 0x745C6000  C:\Windows\SYSTEM32\WININET.dll
 0x745F0000 - 0x745FA000  C:\Windows\SYSTEM32\CRYPTBASE.DLL
 0x74600000 - 0x74607000  C:\Windows\SYSTEM32\DCIMAN32.dll
 0x74610000 - 0x7461F000  C:\Windows\SYSTEM32\kernel.appcore.dll
 0x74620000 - 0x74709000  C:\Windows\SYSTEM32\DDRAW.dll
 0x747D0000 - 0x747F5000  C:\Windows\SYSTEM32\Wldp.dll
 0x74800000 - 0x74E0D000  C:\Windows\SYSTEM32\windows.storage.dll
 0x74E10000 - 0x74E1B000  C:\Windows\SYSTEM32\netutils.dll
 0x74E20000 - 0x74E3D000  C:\Windows\SYSTEM32\srvcli.dll
 0x74E40000 - 0x7506B000  C:\Windows\SYSTEM32\iertutil.dll
 0x75070000 - 0x7508D000  C:\Windows\SYSTEM32\winmmbase.dll
 0x75090000 - 0x750B1000  C:\Windows\SYSTEM32\SspiCli.dll
 0x750C0000 - 0x75268000  C:\Windows\SYSTEM32\urlmon.dll
 0x75270000 - 0x75296000  C:\Windows\SYSTEM32\dwmapi.dll
 0x752A0000 - 0x752C5000  C:\Windows\SYSTEM32\USERENV.dll
 0x752D0000 - 0x752D8000  C:\Windows\SYSTEM32\VERSION.dll
 0x752E0000 - 0x752F9000  C:\Windows\SYSTEM32\MSACM32.dll
 0x75320000 - 0x75348000  C:\Windows\SYSTEM32\WINMM.dll
 0x75350000 - 0x753C4000  C:\Windows\system32\uxtheme.dll
 0x75640000 - 0x756B2000  C:\Windows\SYSTEM32\WINSPOOL.DRV
 0x756C0000 - 0x756D9000  C:\Windows\SYSTEM32\MPR.dll
 0x75970000 - 0x75A0F000  C:\Windows\SYSTEM32\apphelp.dll
 0x75A10000 - 0x75A97000  C:\Windows\System32\shcore.dll
 0x75AA0000 - 0x75B90000  C:\Windows\System32\KERNEL32.DLL
 0x75BA0000 - 0x75C36000  C:\Windows\System32\OLEAUT32.dll
 0x75C40000 - 0x75C87000  C:\Windows\System32\WINTRUST.DLL
 0x760D0000 - 0x7614E000  C:\Windows\System32\clbcatq.dll
 0x76150000 - 0x7620F000  C:\Windows\System32\msvcrt.dll
 0x76210000 - 0x7628B000  C:\Windows\System32\ADVAPI32.dll
 0x76290000 - 0x762A9000  C:\Windows\System32\imagehlp.dll
 0x762B0000 - 0x762C8000  C:\Windows\System32\win32u.dll
 0x76360000 - 0x763D6000  C:\Windows\System32\sechost.dll
 0x763E0000 - 0x765F4000  C:\Windows\System32\KERNELBASE.dll
 0x76600000 - 0x76663000  C:\Windows\System32\WS2_32.dll
 0x76670000 - 0x76810000  C:\Windows\System32\USER32.dll
 0x76810000 - 0x76834000  C:\Windows\System32\GDI32.dll
 0x76850000 - 0x76869000  C:\Windows\System32\bcrypt.dll
 0x76870000 - 0x76895000  C:\Windows\System32\IMM32.dll
 0x768A0000 - 0x76E56000  C:\Windows\System32\SHELL32.dll
 0x76E60000 - 0x76F0F000  C:\Windows\System32\COMDLG32.dll
 0x76F10000 - 0x76F6F000  C:\Windows\System32\bcryptPrimitives.dll
 0x76F70000 - 0x76FEB000  C:\Windows\System32\msvcp_win.dll
 0x76FF0000 - 0x76FF7000  C:\Windows\System32\NSI.dll
 0x77000000 - 0x770BE000  C:\Windows\System32\RPCRT4.dll
 0x770C0000 - 0x77194000  C:\Windows\System32\MSCTF.dll
 0x77260000 - 0x7735A000  C:\Windows\System32\CRYPT32.dll
 0x77360000 - 0x77480000  C:\Windows\System32\ucrtbase.dll
 0x77480000 - 0x7755E000  C:\Windows\System32\gdi32full.dll
 0x776D0000 - 0x77951000  C:\Windows\System32\combase.dll
 0x77960000 - 0x77A43000  C:\Windows\System32\ole32.dll
 0x77AB0000 - 0x77AF5000  C:\Windows\System32\SHLWAPI.dll
 0x77B00000 - 0x77B3B000  C:\Windows\System32\cfgmgr32.dll
 0x77B50000 - 0x77CF3000  C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 0071AACE)

 0071AACE: 0F 28 00 0F  59 C4 0F 28  48 10 0F 59  CC 0F 28 50  .(..Y..(H..Y..(P

Stack: 1024 bytes starting at (ESP = 0019C7A4)

 * = addr               **                                         *
 0019C7A0: 08 80 B6 03  08 E8 3E 33  C8 9E B5 03  AC 96 B9 21  ......>3.......!
 0019C7B0: 82 00 00 00  00 00 00 00  83 00 00 00  00 00 00 00  ................
 0019C7C0: 00 21 00 00  00 00 00 00  40 21 00 00  00 00 00 00  .!......@!......
 0019C7D0: E0 78 2D 15  10 D0 FD 36  10 00 57 33  DB 54 5D 33  .x-....6..W3.T]3
 0019C7E0: 84 00 85 00  08 C8 19 00  14 9C 71 00  E0 78 2D 15  ..........q..x-.
 0019C7F0: 08 47 12 37  E8 C8 19 00  00 00 00 00  E8 C8 19 00  .G.7............
 0019C800: 00 00 00 00  C8 9E B5 03  34 C8 19 00  08 CF 70 00  ........4.....p.
 0019C810: 00 00 00 00  40 6B 2D 15  44 00 00 00  E8 C8 19 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection).......
 0019C820: 00 00 00 00  03 00 00 00  00 00 00 00  3A 05 00 00  ............:...
 0019C830: 91 01 00 00  C8 C8 19 00  2C B6 70 00  00 00 00 00  ........,.p.....
 0019C840: 08 20 85 10  A8 AF D1 10  F6 7A 88 3E  BC D0 CD BE  . .......z.>....
 0019C850: B3 40 60 BF  00 00 00 00  BE BC 76 3F  85 B0 E3 3D  .@`.......v?...=
 0019C860: 20 16 78 3E  00 00 00 00  08 94 24 30  DF AB 68 3F   .x>......$0..h?
 0019C870: B7 8A D5 BE  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C880: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........
 0019C890: 00 00 00 00  49 41 40 00  00 00 00 00  DC C8 19 00  ....IA@.........
 0019C8A0: 49 41 40 00  00 00 00 00  E8 C8 19 00  88 CA 19 00  IA@.............
 0019C8B0: D4 C8 19 00  A5 B1 70 00  88 CA 19 00  D4 C8 19 00  ......p.........
 0019C8C0: 27 B2 70 00  00 00 00 00  44 FC 19 00  6E 89 70 00  '.p.....D...n.p.
 0019C8D0: 00 00 00 00  08 00 12 37  08 3C 06 33  45 00 00 00  .......7.<.3E...
 0019C8E0: 08 80 9E 10  08 20 85 10  00 00 80 3F  00 00 00 00  ..... .....?....
 0019C8F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
 0019C900: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C910: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0019C920: 00 00 00 00  00 00 80 3F  08 20 85 10  B0 EF CE 00  .......?. ......
 0019C930: 10 00 57 33  00 00 00 00  00 00 00 00  00 00 00 00  ..W3............
 0019C940: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C950: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C960: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C970: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C980: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C990: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAD0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAE0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CBA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

 ------------------------------------------------------------------------------

======================================================================
Hardware/Driver Information:
Processor:              0x0
Page Size:              4096
Min App Address:        0x10000
Max App Address:        0x7ffeffff
Processor Mask:         0xfff
Number of Processors:   12
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        23
Processor Revision:     2050

Percent memory used:    39
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576

## Post 18078 by Supermoendo — 2022-04-13T14:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18078#p18078 | page 1 | era: pre-1.18.1 -->

Me too. Same problem. :(

## Post 18079 by Valadorn (Patch Note Conspiracy Theorist) — 2022-04-13T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18079#p18079 | page 1 | era: pre-1.18.1 -->

Try run as admin

## Post 18083 by Supermoendo — 2022-04-13T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18083#p18083 | page 1 | era: pre-1.18.1 -->

> **Valadorn wrote: Wed Apr 13, 2022 2:10 pm**
> Try run as admin

Tried that, worked for 5 minutes then crash again.

## Post 18088 by Geojak (Grandmaster of Forum PvP) — 2022-04-13T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18088#p18088 | page 1 | era: pre-1.18.1 -->

I only sometimes get crashes on login, but extremely rarely during play.

## Post 18091 by Supermoendo — 2022-04-13T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18091#p18091 | page 1 | era: pre-1.18.1 -->

==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Users\Henk\Desktop\TURTLE\WoW.exe
Time:     Apr 13, 2022  4:02:04.188 PM
User:     Henk
Computer: DESKTOP-G2ME0FA
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\Henk\Desktop\TURTLE\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AACE

The instruction at "0x0071AACE" referenced memory at "0x2359B210".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=2359B210  EBX=14C714C6  ECX=14C714C6  EDX=23598010  ESI=00000003
EDI=219BCD2C  EBP=0019C7E4  ESP=0019C7A4  EIP=0071AACE  FLG=00010202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 0071AACE 0019C7E4 0001:00319ACE C:\Users\Henk\Desktop\TURTLE\WoW.exe
 00719C14 0019C808 0001:00318C14 C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0070CF08 0019C834 0001:0030BF08 C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0070B62C 0019C8C8 0001:0030A62C C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0070896E 0019FC44 0001:0030796E C:\Users\Henk\Desktop\TURTLE\WoW.exe
 004836AB 0019FC84 0001:000826AB C:\Users\Henk\Desktop\TURTLE\WoW.exe
 00482E7A 0019FD10 0001:00081E7A C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0076FC31 0019FD2C 0001:0036EC31 C:\Users\Henk\Desktop\TURTLE\WoW.exe
 007658E7 0019FD50 0001:003648E7 C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0076434C 0019FD5C 0001:0036334C C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0044264E 0019FE24 0001:0004164E C:\Users\Henk\Desktop\TURTLE\WoW.exe
 004246B0 0019FE58 0001:000236B0 C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0042106F 0019FEC8 0001:0002006F C:\Users\Henk\Desktop\TURTLE\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0040411E 0019FF70 0001:0000311E C:\Users\Henk\Desktop\TURTLE\WoW.exe
 76C9FA29 0019FF80 0001:0000FA29 C:\Windows\System32\KERNEL32.DLL
 76F57A7E 0019FFDC 0001:00066A7E C:\Windows\SYSTEM32\ntdll.dll
 76F57A4E 0019FFEC 0001:00066A4E C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 0071AACE WoW.exe      <unknown symbol>+0 (0x11C4A8E0,0x1E669D48,0x0019C8E8,0x00000000)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Users\Henk\Desktop\TURTLE\WoW.exe
 0x028C0000 - 0x02956000  C:\Users\Henk\Desktop\TURTLE\fmod.dll
 0x0F520000 - 0x0F638000  C:\Users\Henk\Desktop\TURTLE\dbghelp.dll
 0x10000000 - 0x10069000  C:\Users\Henk\Desktop\TURTLE\DivxDecoder.dll
 0x70DB0000 - 0x70DBE000  C:\Windows\System32\winrnr.dll
 0x70DC0000 - 0x70DD6000  C:\Windows\system32\NLAapi.dll
 0x70DE0000 - 0x70DF0000  C:\Windows\system32\wshbth.dll
 0x70DF0000 - 0x70E06000  C:\Windows\system32\pnrpnsp.dll
 0x70E10000 - 0x70E21000  C:\Windows\system32\napinsp.dll
 0x70E30000 - 0x70E4F000  C:\Windows\system32\ncryptsslp.dll
 0x70E50000 - 0x70E71000  C:\Windows\SYSTEM32\ncrypt.dll
 0x70E80000 - 0x70EA6000  C:\Windows\System32\cryptnet.dll
 0x70EB0000 - 0x70EDF000  C:\Windows\system32\rsaenh.dll
 0x70EE0000 - 0x70EF3000  C:\Windows\SYSTEM32\CRYPTSP.dll
 0x70F00000 - 0x70F08000  C:\Windows\SYSTEM32\DPAPI.DLL
 0x70F10000 - 0x70F1E000  C:\Windows\SYSTEM32\MSASN1.dll
 0x70F20000 - 0x70F48000  C:\Windows\SYSTEM32\NTASN1.dll
 0x70F50000 - 0x70F60000  C:\Windows\SYSTEM32\mskeyprotect.dll
 0x70F60000 - 0x70FD8000  C:\Windows\System32\schannel.dll
 0x70FE0000 - 0x71038000  C:\Windows\System32\fwpuclnt.dll
 0x71040000 - 0x71048000  C:\Windows\System32\rasadhlp.dll
 0x71050000 - 0x710E1000  C:\Windows\SYSTEM32\DNSAPI.dll
 0x710F0000 - 0x7110D000  C:\Windows\SYSTEM32\srvcli.dll
 0x71110000 - 0x712B8000  C:\Windows\SYSTEM32\urlmon.dll
 0x712C0000 - 0x712C8000  C:\Windows\SYSTEM32\WINNSI.DLL
 0x712D0000 - 0x71302000  C:\Windows\SYSTEM32\IPHLPAPI.DLL
 0x71310000 - 0x713D9000  C:\Windows\SYSTEM32\winhttp.dll
 0x713E0000 - 0x713F2000  C:\Windows\SYSTEM32\ondemandconnroutehelper.dll
 0x71400000 - 0x7162C000  C:\Windows\SYSTEM32\iertutil.dll
 0x71630000 - 0x71682000  C:\Windows\SYSTEM32\mswsock.dll
 0x71690000 - 0x71752000  C:\Windows\System32\PROPSYS.dll
 0x71760000 - 0x718EF000  C:\Windows\SYSTEM32\twinapi.appcore.dll
 0x718F0000 - 0x719DD000  C:\Windows\System32\InputHost.dll
 0x719E0000 - 0x71A53000  C:\Windows\System32\WindowManagementAPI.dll
 0x71A60000 - 0x71B53000  C:\Windows\System32\Windows.UI.dll
 0x71B60000 - 0x71B68000  C:\Windows\SYSTEM32\midimap.dll
 0x71B70000 - 0x71B7A000  C:\Windows\SYSTEM32\msacm32.drv
 0x71B80000 - 0x71B88000  C:\Windows\SYSTEM32\AVRT.dll
 0x71B90000 - 0x71B97000  C:\Windows\SYSTEM32\ksuser.dll
 0x71BA0000 - 0x71BDA000  C:\Windows\SYSTEM32\wdmaud.drv
 0x71BE0000 - 0x71BEF000  C:\Windows\SYSTEM32\resourcepolicyclient.dll
 0x71BF0000 - 0x71D26000  C:\Windows\SYSTEM32\AUDIOSES.DLL
 0x71D30000 - 0x71D54000  C:\Windows\System32\DEVOBJ.dll
 0x71D60000 - 0x71DCB000  C:\Windows\System32\MMDevApi.dll
 0x71DD0000 - 0x71E14000  C:\Windows\SYSTEM32\powrprof.dll
 0x71E20000 - 0x71EFB000  C:\Windows\SYSTEM32\wintypes.dll
 0x71F00000 - 0x7217E000  C:\Windows\SYSTEM32\CoreUIComponents.dll
 0x72180000 - 0x7221B000  C:\Windows\SYSTEM32\CoreMessaging.dll
 0x72220000 - 0x72595000  C:\Windows\SYSTEM32\igdusc32.dll
 0x725A0000 - 0x72F99000  C:\Windows\SYSTEM32\igdumdim32.dll
 0x72FA0000 - 0x7312F000  C:\Windows\SYSTEM32\d3d9.dll
 0x73130000 - 0x7315C000  C:\Windows\SYSTEM32\dxcore.dll
 0x73160000 - 0x7316D000  C:\Windows\SYSTEM32\UMPDC.dll
 0x73170000 - 0x731EF000  C:\Windows\SYSTEM32\dsound.dll
 0x731F0000 - 0x732A9000  C:\Windows\SYSTEM32\textinputframework.dll
 0x732B0000 - 0x732E1000  C:\Windows\System32\Windows.Internal.Graphics.Display.DisplayColorManagement.dll
 0x732F0000 - 0x73308000  C:\Windows\SYSTEM32\profapi.dll
 0x73310000 - 0x7331A000  C:\Windows\SYSTEM32\CRYPTBASE.DLL
 0x73320000 - 0x73329000  C:\Windows\SYSTEM32\ktmw32.dll
 0x73330000 - 0x73633000  C:\Users\Henk\Desktop\TURTLE\discord_game_sdk.dll
 0x73640000 - 0x7365E000  C:\Users\Henk\Desktop\TURTLE\DiscordOverlay.dll
 0x73660000 - 0x7367D000  C:\Windows\SYSTEM32\winmmbase.dll
 0x73680000 - 0x73699000  C:\Windows\SYSTEM32\MSACM32.dll
 0x736A0000 - 0x736DF000  C:\Windows\SYSTEM32\GLU32.dll
 0x736E0000 - 0x73B34000  C:\Windows\SYSTEM32\WININET.dll
 0x73B40000 - 0x73C44000  C:\Windows\SYSTEM32\OPENGL32.dll
 0x73C50000 - 0x73C58000  C:\Windows\SYSTEM32\WSOCK32.dll
 0x73C60000 - 0x73CD4000  C:\Windows\system32\uxtheme.dll
 0x73CE0000 - 0x73DA2000  C:\Windows\SYSTEM32\dxgi.dll
 0x73DB0000 - 0x73E22000  C:\Windows\SYSTEM32\WINSPOOL.DRV
 0x73E30000 - 0x740C9000  C:\Windows\SYSTEM32\msi.dll
 0x740D0000 - 0x740F6000  C:\Windows\SYSTEM32\dwmapi.dll
 0x74100000 - 0x741E9000  C:\Windows\SYSTEM32\DDRAW.dll
 0x741F0000 - 0x74218000  C:\Windows\SYSTEM32\WINMM.dll
 0x74220000 - 0x74245000  C:\Windows\SYSTEM32\USERENV.dll
 0x74250000 - 0x74257000  C:\Windows\SYSTEM32\DCIMAN32.dll
 0x74260000 - 0x7426F000  C:\Windows\SYSTEM32\kernel.appcore.dll
 0x74270000 - 0x7428A000  C:\Windows\SYSTEM32\MPR.dll
 0x74290000 - 0x74323000  C:\Windows\SYSTEM32\mscms.dll
 0x74330000 - 0x743BD000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
 0x743C0000 - 0x743E1000  C:\Windows\SYSTEM32\SspiCli.dll
 0x743F0000 - 0x7448F000  C:\Windows\SYSTEM32\apphelp.dll
 0x744B0000 - 0x744BB000  C:\Windows\SYSTEM32\netutils.dll
 0x744D0000 - 0x744DC000  C:\Windows\SYSTEM32\ColorAdapterClient.dll
 0x74500000 - 0x74577000  C:\Windows\SYSTEM32\AcSpecfc.DLL
 0x74740000 - 0x74769000  C:\Windows\SYSTEM32\ntmarta.dll
 0x74780000 - 0x747A4000  C:\Windows\SYSTEM32\Wldp.dll
 0x747B0000 - 0x74DBC000  C:\Windows\SYSTEM32\windows.storage.dll
 0x74DC0000 - 0x74F5C000  C:\Windows\System32\USER32.dll
 0x74F60000 - 0x74FDE000  C:\Windows\System32\clbcatq.dll
 0x74FE0000 - 0x75076000  C:\Windows\System32\OLEAUT32.dll
 0x75090000 - 0x75117000  C:\Windows\System32\shcore.dll
 0x75120000 - 0x7519B000  C:\Windows\System32\msvcp_win.dll
 0x751A0000 - 0x751E5000  C:\Windows\System32\SHLWAPI.dll
 0x75250000 - 0x7528B000  C:\Windows\System32\cfgmgr32.dll
 0x75290000 - 0x752B5000  C:\Windows\System32\IMM32.dll
 0x75360000 - 0x75378000  C:\Windows\System32\win32u.dll
 0x75380000 - 0x753E3000  C:\Windows\System32\WS2_32.dll
 0x753F0000 - 0x754AF000  C:\Windows\System32\msvcrt.dll
 0x754B0000 - 0x756C4000  C:\Windows\System32\KERNELBASE.dll
 0x756F0000 - 0x757C4000  C:\Windows\System32\MSCTF.dll
 0x757D0000 - 0x758B3000  C:\Windows\System32\ole32.dll
 0x758C0000 - 0x7597E000  C:\Windows\System32\RPCRT4.dll
 0x75DC0000 - 0x75E1F000  C:\Windows\System32\bcryptPrimitives.dll
 0x75E80000 - 0x75EF6000  C:\Windows\System32\sechost.dll
 0x75F00000 - 0x75FDC000  C:\Windows\System32\gdi32full.dll
 0x75FE0000 - 0x76003000  C:\Windows\System32\GDI32.dll
 0x76010000 - 0x76130000  C:\Windows\System32\ucrtbase.dll
 0x76130000 - 0x7617D000  C:\Windows\System32\WINTRUST.dll
 0x76180000 - 0x76735000  C:\Windows\System32\SHELL32.dll
 0x76740000 - 0x767BB000  C:\Windows\System32\ADVAPI32.dll
 0x767C0000 - 0x76A40000  C:\Windows\System32\combase.dll
 0x76A40000 - 0x76A59000  C:\Windows\System32\bcrypt.dll
 0x76A60000 - 0x76A67000  C:\Windows\System32\NSI.dll
 0x76A70000 - 0x76B1F000  C:\Windows\System32\COMDLG32.dll
 0x76B80000 - 0x76C7A000  C:\Windows\System32\CRYPT32.dll
 0x76C80000 - 0x76D70000  C:\Windows\System32\KERNEL32.DLL
 0x76EF0000 - 0x77093000  C:\Windows\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 0071AACE)

 0071AACE: 0F 28 00 0F  59 C4 0F 28  48 10 0F 59  CC 0F 28 50  .(..Y..(H..Y..(P

Stack: 1024 bytes starting at (ESP = 0019C7A4)

 * = addr               **                                         *
 0019C7A0: 00 00 00 00  08 A8 A6 21  08 42 AB 03  2C CD 9B 21  .......!.B..,..!
 0019C7B0: C6 00 00 00  14 00 00 00  C7 00 00 00  14 00 00 00  ................
 0019C7C0: 00 32 00 00  00 05 00 00  40 32 00 00  00 05 00 00  .2......@2......
 0019C7D0: E0 A8 C4 11  10 80 59 23  10 00 0F 26  31 05 C5 26  ......Y#...&1..&
 0019C7E0: C8 14 C9 14  08 C8 19 00  14 9C 71 00  E0 A8 C4 11  ..........q.....
 0019C7F0: 48 9D 66 1E  E8 C8 19 00  00 00 00 00  E8 C8 19 00  H.f.............
 0019C800: 00 00 00 00  08 42 AB 03  34 C8 19 00  08 CF 70 00  .....B..4.....p.
 0019C810: 00 00 00 00  80 A8 C4 11  3A 00 00 00  E8 C8 19 00  ........:.......
 0019C820: 00 00 00 00  03 00 00 00  9C 00 00 00  0C 06 00 00  ................
 0019C830: 97 01 00 00  C8 C8 19 00  2C B6 70 00  00 00 00 00  ........,.p.....
 0019C840: 08 80 68 0B  68 83 CE 12  59 5D 6E BF  49 DF EE 3D  ..h.h...Y]n.I..=
 0019C850: 0E F0 B0 3E  00 00 00 00  62 BE BA BE  93 73 98 BE  ...>....b....s..
 0019C860: 19 D9 61 BF  00 00 00 00  7A 4A 5F B2  B0 8E 72 3F  ..a.....zJ_...r?
 0019C870: 05 BB A3 BE  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C880: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........
 0019C890: 00 00 00 00  49 41 40 00  00 00 00 00  DC C8 19 00  ....IA@.........
 0019C8A0: 49 41 40 00  00 00 00 00  E8 C8 19 00  88 CA 19 00  IA@.............
 0019C8B0: D4 C8 19 00  A5 B1 70 00  88 CA 19 00  D4 C8 19 00  ......p.........
 0019C8C0: 27 B2 70 00  00 00 00 00  44 FC 19 00  6E 89 70 00  '.p.....D...n.p.
 0019C8D0: 00 00 00 00  08 00 66 1E  08 F4 22 20  68 00 00 00  ......f..." h...
 0019C8E0: 08 00 74 0B  08 80 68 0B  00 00 80 3F  00 00 00 00  ..t...h....?....
 0019C8F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
 0019C900: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C910: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0019C920: 00 00 00 00  00 00 80 3F  08 80 68 0B  B0 EF CE 00  .......?..h.....
 0019C930: 10 00 0F 26  00 00 00 00  00 00 00 00  00 00 00 00  ...&............
 0019C940: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C950: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C960: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C970: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C980: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C990: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C9F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CA90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAD0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAE0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CAF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CB90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019CBA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

 ------------------------------------------------------------------------------

======================================================================
Hardware/Driver Information:
Processor:              0x0
Page Size:              4096
Min App Address:        0x10000
Max App Address:        0x7ffeffff
Processor Mask:         0xf
Number of Processors:   4
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        6
Processor Revision:     14088

Percent memory used:    64
Total physical memory:  2147483647
Free Memory:            1463132160
Page file:              -1
Total virtual memory:   2147352576

## Post 18092 by Fin (Patch Note Conspiracy Theorist) — 2022-04-13T15:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18092#p18092 | page 1 | era: pre-1.18.1 -->

For the fixes for the crash please try to go trough this list:
•  Remove all addons
•  Remove any aditional patches like darker nights and hd models.
•  Whitelist in antivirus: [https://jackboxgames.happyfox.com/kb/ar ... firewalls/](https://jackboxgames.happyfox.com/kb/article/28-how-to-whitelist-and-resolve-issues-in-antivirus-software-and-firewalls/)
•  Apply  the 4 gb patch <https://ntcore.com/?page_id=371>
•  Make sure vertex animation shaders  is enabled in video settings.
•  Have Addon  alocated memory set to a value that is not 0
•  Reinstall the client from :  <https://turtlecraft.gg/download>

## Post 18106 by Geojak (Grandmaster of Forum PvP) — 2022-04-13T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18106#p18106 | page 1 | era: pre-1.18.1 -->

What value do you recommend for addon ram?

## Post 18116 by Valadorn (Patch Note Conspiracy Theorist) — 2022-04-14T18:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18116#p18116 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Apr 13, 2022 10:35 pm**
> What value do you recommend for addon ram?

It has to be 0

## Post 18133 by Geojak (Grandmaster of Forum PvP) — 2022-04-15T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18133#p18133 | page 1 | era: pre-1.18.1 -->

Oh I see, I read that wrong. Thx for pointing it out

## Post 18174 by Kopach — 2022-04-16T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18174#p18174 | page 1 | era: pre-1.18.1 -->

Hello, unfortunately I'm getting the same crash and error message. Tried reinstalling, removing mods, etc. but still it persists. Hoping this ''memory could not be read" error gets solved soon.

## Post 18232 by Pristn (Barrens Chat Casualty) — 2022-04-18T21:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18232#p18232 | page 1 | era: pre-1.18.1 -->

• Make sure vertex animation shaders is enabled in video settings.!!!
Its dicide of this problem.

## Post 31851 by Renzor — 2022-12-31T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31851#p31851 | page 1 | era: pre-1.18.1 -->

Was also the vertex animation shaders for me. Might have to do with AMD graphics?

## Post 51047 by Dhrazar (Barrens Chat Casualty) — 2023-06-23T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51047#p51047 | page 1 | era: pre-1.18.1 -->

Why the fuck did I get kicked out of AV after getting a crash?!  I mean I wait from 30-40min and then after relogging I have the deserter debuff  WTF!!!!

