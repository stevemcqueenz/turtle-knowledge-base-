---
title: "I can not join to the game!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3703"
topic_id: 3703
forum_id: 3
forum: "Help & Support"
author: "Swoleg"
author_authority: "player"
posted: "2022-08-14T15:31:00Z"
last_post: "2022-08-14T15:31:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:22:45Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I can not join to the game!

## Post 22324 by Swoleg — 2022-08-14T15:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22324#p22324 | page 1 | era: pre-1.18.1 -->

<https://ibb.co/Pwv1dbs>
I play as a hunter and after taming the fox I can’t enter the game. Game crashes with error #132.

==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
Time:     Aug 14, 2022  7:03:41.366 PM
User:     swole
Computer: LAPTOP-822Q5DOL
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AACE

The instruction at "0x0071AACE" referenced memory at "0x13987A10".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=13987A10  EBX=13AB442D  ECX=13AB442D  EDX=13984010  ESI=00000012
EDI=12ECA88C  EBP=0019C7D0  ESP=0019C790  EIP=0071AACE  FLG=00010202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 0071AACE 0019C7D0 0001:00319ACE C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 00719C14 0019C7F4 0001:00318C14 C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0070CF08 0019C820 0001:0030BF08 C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0070B62C 0019C8B4 0001:0030A62C C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0070896E 0019FC30 0001:0030796E C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0076D62E 0019FD08 0001:0036C62E C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0046FADF 0019FD2C 0001:0006EADF C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 007658E7 0019FD50 0001:003648E7 C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0076434C 0019FD5C 0001:0036334C C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0044264E 0019FE24 0001:0004164E C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 004246B0 0019FE58 0001:000236B0 C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0042106F 0019FEC8 0001:0002006F C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0040411E 0019FF70 0001:0000311E C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 762DFA29 0019FF80 0001:0000FA29 C:\WINDOWS\System32\KERNEL32.DLL
 77AA7A9E 0019FFDC 0001:00066A9E C:\WINDOWS\SYSTEM32\ntdll.dll
 77AA7A6E 0019FFEC 0001:00066A6E C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 0071AACE WoW.exe      <unknown symbol>+0 (0x092227A0,0x1343C4C8,0x0019C8D4,0x00000000)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Users\swole\Documents\Distr\turtle_client_116\WoW.exe
 0x02D40000 - 0x02DD6000  C:\Users\swole\Documents\Distr\turtle_client_116\fmod.dll
 0x064B0000 - 0x065C8000  C:\Users\swole\Documents\Distr\turtle_client_116\dbghelp.dll
 0x10000000 - 0x10069000  C:\Users\swole\Documents\Distr\turtle_client_116\DivxDecoder.dll
 0x656A0000 - 0x6582F000  C:\WINDOWS\SYSTEM32\twinapi.appcore.dll
 0x65830000 - 0x6591D000  C:\Windows\System32\InputHost.dll
 0x66680000 - 0x66683000  C:\WINDOWS\SYSTEM32\sfc.dll
 0x69930000 - 0x699AE000  C:\WINDOWS\System32\schannel.dll
 0x699B0000 - 0x69AA3000  C:\Windows\System32\Windows.UI.dll
 0x69B50000 - 0x69BC3000  C:\Windows\System32\WindowManagementAPI.dll
 0x69BD0000 - 0x69D06000  C:\WINDOWS\SYSTEM32\AUDIOSES.DLL
 0x69D10000 - 0x69D36000  C:\Windows\System32\cryptnet.dll
 0x69D40000 - 0x69D5F000  C:\WINDOWS\system32\ncryptsslp.dll
 0x69D60000 - 0x69D81000  C:\WINDOWS\SYSTEM32\ncrypt.dll
 0x69D90000 - 0x69DFB000  C:\WINDOWS\System32\MMDevApi.dll
 0x69E00000 - 0x69FA8000  C:\WINDOWS\SYSTEM32\urlmon.dll
 0x69FB0000 - 0x6A072000  C:\Windows\System32\PROPSYS.dll
 0x6A080000 - 0x6A0BA000  C:\WINDOWS\SYSTEM32\wdmaud.drv
 0x6A0C0000 - 0x6A13F000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x6A140000 - 0x6BD5A000  C:\WINDOWS\System32\DriverStore\FileRepository\ki131191.inf_amd64_d668106cb6f2eae0\igc32.dll
 0x6BD60000 - 0x6BEE7000  C:\WINDOWS\System32\DriverStore\FileRepository\ki131191.inf_amd64_d668106cb6f2eae0\igdumdim32.dll
 0x6BEF0000 - 0x6CCE5000  C:\WINDOWS\System32\DriverStore\FileRepository\u0366969.inf_amd64_011e273f4453e6ec\B367342\atiumdva.dll
 0x6CCF0000 - 0x6D7B2000  C:\WINDOWS\System32\DriverStore\FileRepository\u0366969.inf_amd64_011e273f4453e6ec\B367342\atiumdag.dll
 0x6D7C0000 - 0x6D944000  C:\WINDOWS\System32\DriverStore\FileRepository\u0366969.inf_amd64_011e273f4453e6ec\B367342\aticfx32.dll
 0x6D950000 - 0x6DA2B000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x6DA30000 - 0x6DCAE000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
 0x6DCB0000 - 0x71374000  C:\WINDOWS\System32\DriverStore\FileRepository\ki131191.inf_amd64_d668106cb6f2eae0\igd9dxva32.dll
 0x71380000 - 0x7146C000  C:\WINDOWS\System32\DriverStore\FileRepository\ki131191.inf_amd64_d668106cb6f2eae0\igdgmm32.dll
 0x71470000 - 0x71498000  C:\WINDOWS\SYSTEM32\NTASN1.dll
 0x714A0000 - 0x7153B000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x71540000 - 0x715F9000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x71600000 - 0x7178F000  C:\WINDOWS\SYSTEM32\d3d9.dll
 0x71790000 - 0x71A93000  C:\Users\swole\Documents\Distr\turtle_client_116\discord_game_sdk.dll
 0x71AA0000 - 0x71BA4000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x71BB0000 - 0x71E34000  C:\WINDOWS\SYSTEM32\AcLayers.DLL
 0x71E40000 - 0x71F03000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x71F10000 - 0x71FF9000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x721B0000 - 0x72224000  C:\WINDOWS\system32\uxtheme.dll
 0x72440000 - 0x72467000  C:\WINDOWS\SYSTEM32\amdihk32.dll
 0x72470000 - 0x724E3000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x724F0000 - 0x72583000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x72590000 - 0x72B9C000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x72BB0000 - 0x72BC0000  C:\WINDOWS\SYSTEM32\mskeyprotect.dll
 0x72BC0000 - 0x72BCE000  C:\WINDOWS\SYSTEM32\MSASN1.dll
 0x72BD0000 - 0x72BD8000  C:\Windows\System32\rasadhlp.dll
 0x72BE0000 - 0x72C39000  C:\WINDOWS\System32\fwpuclnt.dll
 0x72C40000 - 0x72C64000  C:\WINDOWS\System32\DEVOBJ.dll
 0x72C70000 - 0x72C78000  C:\WINDOWS\SYSTEM32\midimap.dll
 0x72C80000 - 0x72C8E000  C:\WINDOWS\System32\winrnr.dll
 0x72C90000 - 0x72CA6000  C:\WINDOWS\system32\NLAapi.dll
 0x72CB0000 - 0x72CC0000  C:\WINDOWS\system32\wshbth.dll
 0x72CC0000 - 0x72CD6000  C:\WINDOWS\system32\pnrpnsp.dll
 0x72CE0000 - 0x72CF1000  C:\WINDOWS\system32\napinsp.dll
 0x72D00000 - 0x72D2A000  C:\WINDOWS\System32\DriverStore\FileRepository\u0366969.inf_amd64_011e273f4453e6ec\B367342\atiu9pag.dll
 0x72D30000 - 0x72D61000  C:\Windows\System32\Windows.Internal.Graphics.Display.DisplayColorManagement.dll
 0x72D70000 - 0x72DFD000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
 0x72E20000 - 0x72E2A000  C:\WINDOWS\SYSTEM32\msacm32.drv
 0x72E30000 - 0x72E37000  C:\WINDOWS\SYSTEM32\ksuser.dll
 0x72E40000 - 0x72E69000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x72E70000 - 0x72E8C000  C:\WINDOWS\System32\DriverStore\FileRepository\ki131191.inf_amd64_d668106cb6f2eae0\igdinfo32.dll
 0x72EA0000 - 0x72EA8000  C:\WINDOWS\SYSTEM32\AVRT.dll
 0x72FC0000 - 0x72FDD000  C:\WINDOWS\SYSTEM32\srvcli.dll
 0x72FE0000 - 0x73001000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x73010000 - 0x7303C000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x73040000 - 0x7307F000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x732A0000 - 0x732BE000  C:\Users\swole\Documents\Distr\turtle_client_116\DiscordOverlay.dll
 0x73420000 - 0x7342F000  C:\WINDOWS\SYSTEM32\resourcepolicyclient.dll
 0x73430000 - 0x7344D000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x73630000 - 0x73649000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x73650000 - 0x7367F000  C:\WINDOWS\system32\rsaenh.dll
 0x736A0000 - 0x736D2000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
 0x736E0000 - 0x73771000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
 0x73780000 - 0x73BD4000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x73D30000 - 0x73D55000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x748E0000 - 0x748E8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x74960000 - 0x7496F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x74D10000 - 0x74D19000  C:\WINDOWS\SYSTEM32\ktmw32.dll
 0x74D20000 - 0x74D39000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x74D40000 - 0x74D4E000  C:\WINDOWS\SYSTEM32\SortServer2003Compat.dll
 0x74D50000 - 0x74D5F000  C:\WINDOWS\SYSTEM32\sfc_os.DLL
 0x74D60000 - 0x74D67000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x74D70000 - 0x74D96000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x74DA0000 - 0x74DAD000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x74DB0000 - 0x74DF4000  C:\WINDOWS\SYSTEM32\POWRPROF.dll
 0x74EC0000 - 0x74EC8000  C:\WINDOWS\SYSTEM32\DPAPI.DLL
 0x74ED0000 - 0x74ED8000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
 0x74EE0000 - 0x74EF2000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
 0x74F00000 - 0x7512D000  C:\WINDOWS\SYSTEM32\iertutil.dll
 0x75230000 - 0x75248000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x75250000 - 0x7525C000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x75260000 - 0x752D7000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x75320000 - 0x753BF000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x753C0000 - 0x753D3000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x753E0000 - 0x75407000  C:\WINDOWS\SYSTEM32\Wldp.dll
 0x75410000 - 0x75418000  C:\WINDOWS\SYSTEM32\VERSION.dll
 0x75420000 - 0x756B9000  C:\WINDOWS\SYSTEM32\msi.dll
 0x756F0000 - 0x75718000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x75730000 - 0x7573B000  C:\WINDOWS\SYSTEM32\netutils.dll
 0x75750000 - 0x757A2000  C:\WINDOWS\SYSTEM32\mswsock.dll
 0x75800000 - 0x7580A000  C:\WINDOWS\SYSTEM32\CRYPTBASE.DLL
 0x75810000 - 0x758D9000  C:\WINDOWS\SYSTEM32\winhttp.dll
 0x75910000 - 0x759CF000  C:\WINDOWS\System32\msvcrt.dll
 0x759D0000 - 0x75A8E000  C:\WINDOWS\System32\RPCRT4.dll
 0x75A90000 - 0x75A97000  C:\WINDOWS\System32\NSI.dll
 0x75AA0000 - 0x75B03000  C:\WINDOWS\System32\WS2_32.dll
 0x75B10000 - 0x75CAC000  C:\WINDOWS\System32\USER32.dll
 0x75CB0000 - 0x75DD0000  C:\WINDOWS\System32\ucrtbase.dll
 0x75DD0000 - 0x75E0B000  C:\WINDOWS\System32\cfgmgr32.dll
 0x75E10000 - 0x7608F000  C:\WINDOWS\System32\combase.dll
 0x76290000 - 0x762B3000  C:\WINDOWS\System32\GDI32.dll
 0x762C0000 - 0x763B0000  C:\WINDOWS\System32\KERNEL32.DLL
 0x763B0000 - 0x7642B000  C:\WINDOWS\System32\msvcp_win.dll
 0x76430000 - 0x7647C000  C:\WINDOWS\System32\WINTRUST.dll
 0x76480000 - 0x764F6000  C:\WINDOWS\System32\sechost.dll
 0x76590000 - 0x765A8000  C:\WINDOWS\System32\win32u.dll
 0x765B0000 - 0x7660F000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x76610000 - 0x766BF000  C:\WINDOWS\System32\COMDLG32.dll
 0x76720000 - 0x767FC000  C:\WINDOWS\System32\gdi32full.dll
 0x76800000 - 0x7687B000  C:\WINDOWS\System32\ADVAPI32.dll
 0x76880000 - 0x76899000  C:\WINDOWS\System32\bcrypt.dll
 0x768A0000 - 0x768C5000  C:\WINDOWS\System32\IMM32.dll
 0x768D0000 - 0x769CA000  C:\WINDOWS\System32\CRYPT32.dll
 0x769D0000 - 0x76A4E000  C:\WINDOWS\System32\clbcatq.dll
 0x76A50000 - 0x76A95000  C:\WINDOWS\System32\SHLWAPI.dll
 0x76AA0000 - 0x77056000  C:\WINDOWS\System32\SHELL32.dll
 0x770C0000 - 0x77147000  C:\WINDOWS\System32\shcore.dll
 0x77150000 - 0x771E6000  C:\WINDOWS\System32\OLEAUT32.dll
 0x77200000 - 0x77639000  C:\WINDOWS\System32\SETUPAPI.dll
 0x77640000 - 0x77723000  C:\WINDOWS\System32\ole32.dll
 0x77730000 - 0x77949000  C:\WINDOWS\System32\KERNELBASE.dll
 0x77950000 - 0x77A24000  C:\WINDOWS\System32\MSCTF.dll
 0x77A40000 - 0x77BE4000  C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 0071AACE)

 0071AACE: 0F 28 00 0F  59 C4 0F 28  48 10 0F 59  CC 0F 28 50  .(..Y..(H..Y..(P

Stack: 1024 bytes starting at (ESP = 0019C790)

 * = addr  **                                                  *
 0019C790: 08 58 97 13  C8 E8 51 05  8C A8 EC 12  2D 00 00 00  .X....Q.....-...
 0019C7A0: 44 00 00 00  AB 00 00 00  13 00 00 00  00 3A 00 00  D............:..
 0019C7B0: 40 00 00 00  00 00 00 00  00 00 00 00  A0 27 22 09  @............'".
 0019C7C0: 10 40 98 13  10 00 9F 13  05 40 AB 13  E8 01 00 00  .@.......@......
 0019C7D0: F4 C7 19 00  14 9C 71 00  A0 27 22 09  C8 C4 43 13  ......q..'"...C.
 0019C7E0: D4 C8 19 00  00 00 00 00  D4 C8 19 00  00 00 00 00  ................
 0019C7F0: C8 E8 51 05  20 C8 19 00  08 CF 70 00  00 00 00 00  ..Q. .....p.....
 0019C800: 60 25 22 09  13 00 00 00  D4 C8 19 00  00 00 00 00  `%".............
 0019C810: 03 00 00 00  48 06 00 00  0C 00 00 00  07 00 00 00  ....H...........
 0019C820: B4 C8 19 00  2C B6 70 00  00 00 00 00  08 A0 45 13  ....,.p.......E.
 0019C830: 48 E4 FF 12  6E A8 97 B9  E4 77 3E 3E  53 88 7B BF  H...n....w>>S.{.
 0019C840: 00 00 00 00  FF FF 7F 3F  11 AC 61 38  E7 02 95 B9  .......?..a8....
 0019C850: 00 00 00 00  00 00 00 00  54 88 7B 3F  E4 77 3E 3E  ........T.{?.w>>
 0019C860: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C870: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0019C880: 00 00 00 00  00 00 00 00  00 00 00 00  49 41 40 00  ............IA@.
 0019C890: 00 00 00 00  D4 C8 19 00  74 CA 19 00  C0 C8 19 00  ........t.......
 0019C8A0: A5 B1 70 00  74 CA 19 00  C0 C8 19 00  27 B2 70 00  ..p.t.......'.p.
 0019C8B0: 00 00 00 00  30 FC 19 00  6E 89 70 00  00 00 00 00  ....0...n.p.....
 0019C8C0: 08 C0 43 13  08 D5 41 13  15 00 00 00  84 24 EF 12  ..C...A......$..
 0019C8D0: 08 7C 22 13  00 00 80 3F  00 00 00 00  00 00 00 00  .|"....?........
 0019C8E0: 00 00 00 00  00 00 00 00  00 00 80 3F  00 00 00 00  ...........?....
 0019C8F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
 0019C900: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C910: 00 00 80 3F  08 A0 45 13  B0 EF CE 00  10 00 9F 13  ...?..E.........
 0019C920: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C930: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
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
Processor Revision:     36361

Percent memory used:    69
Total physical memory:  1073741823
Free Memory:            1073741823
Page file:              2147483647
Total virtual memory:   2147352576

