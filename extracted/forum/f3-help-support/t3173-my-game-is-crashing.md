---
title: "My game is crashing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3173"
topic_id: 3173
forum_id: 3
forum: "Help & Support"
author: "Fastly"
author_authority: "player"
posted: "2022-06-23T06:03:00Z"
last_post: "2023-11-04T10:34:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:59:27Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# My game is crashing

## Post 19336 by Fastly — 2022-06-23T06:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19336#p19336 | page 1 | era: pre-1.18.1 -->

Whenever i open turtle wow and try to play, i this message and the game closes:

==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
Time:     Jun 23, 2022  7:02:21.752 AM
User:     Niklas
Computer: DESKTOP-LPRE67H
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AACE

The instruction at "0x0071AACE" referenced memory at "0x32233210".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=32233210  EBX=14C714C6  ECX=14C714C6  EDX=32230010  ESI=00000003
EDI=25F86D2C  EBP=0019C7E4  ESP=0019C7A4  EIP=0071AACE  FLG=00010202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 0071AACE 0019C7E4 0001:00319ACE C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 00719C14 0019C808 0001:00318C14 C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0070CF08 0019C834 0001:0030BF08 C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0070B62C 0019C8C8 0001:0030A62C C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0070896E 0019FC44 0001:0030796E C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 004836AB 0019FC84 0001:000826AB C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 00482E7A 0019FD10 0001:00081E7A C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0076FC31 0019FD2C 0001:0036EC31 C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 007658E7 0019FD50 0001:003648E7 C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0076434C 0019FD5C 0001:0036334C C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0044264E 0019FE24 0001:0004164E C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 004246B0 0019FE58 0001:000236B0 C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0042106F 0019FEC8 0001:0002006F C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0040411E 0019FF70 0001:0000311E C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 76A9FA29 0019FF80 0001:0000FA29 C:\WINDOWS\System32\KERNEL32.DLL
 778C7A9E 0019FFDC 0001:00066A9E C:\WINDOWS\SYSTEM32\ntdll.dll
 778C7A6E 0019FFEC 0001:00066A6E C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 0071AACE WoW.exe      <unknown symbol>+0 (0x0A6880E0,0x323E9CC8,0x0019C8E8,0x00000000)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\WoW.exe
 0x02C60000 - 0x02CF6000  C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\fmod.dll
 0x055B0000 - 0x056C8000  C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\dbghelp.dll
 0x10000000 - 0x10069000  C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\DivxDecoder.dll
 0x5A470000 - 0x5A773000  C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\discord_game_sdk.dll
 0x5D210000 - 0x5D22D000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x5D230000 - 0x5D249000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x5D550000 - 0x5D5B9000  C:\Program Files (x86)\Overwolf\0.199.0.15\win32\OWExplorer.dll
 0x5FA80000 - 0x5FBB6000  C:\WINDOWS\SYSTEM32\AUDIOSES.DLL
 0x5FCE0000 - 0x5FCE8000  C:\WINDOWS\SYSTEM32\midimap.dll
 0x5FCF0000 - 0x5FD2A000  C:\WINDOWS\SYSTEM32\wdmaud.drv
 0x5FD30000 - 0x5FE34000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x62000000 - 0x62223000  C:\WINDOWS\system32\nvspcap.dll
 0x65EC0000 - 0x672D5000  C:\WINDOWS\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_647b4244e991951b\nvd3dum.dll
 0x672E0000 - 0x672EE000  C:\WINDOWS\System32\winrnr.dll
 0x672F0000 - 0x67306000  C:\WINDOWS\system32\NLAapi.dll
 0x67310000 - 0x67320000  C:\WINDOWS\system32\wshbth.dll
 0x67320000 - 0x67336000  C:\WINDOWS\system32\pnrpnsp.dll
 0x67340000 - 0x67351000  C:\WINDOWS\system32\napinsp.dll
 0x67360000 - 0x6736F000  C:\WINDOWS\SYSTEM32\resourcepolicyclient.dll
 0x67370000 - 0x67391000  C:\WINDOWS\SYSTEM32\ncrypt.dll
 0x673A0000 - 0x673C8000  C:\WINDOWS\SYSTEM32\NTASN1.dll
 0x67B10000 - 0x67C9F000  C:\Windows\System32\twinapi.appcore.dll
 0x67CA0000 - 0x67D8D000  C:\Windows\System32\InputHost.dll
 0x67D90000 - 0x67E59000  C:\WINDOWS\SYSTEM32\winhttp.dll
 0x67E60000 - 0x67EDE000  C:\WINDOWS\System32\schannel.dll
 0x67EE0000 - 0x67F53000  C:\Windows\System32\WindowManagementAPI.dll
 0x67F60000 - 0x68053000  C:\Windows\System32\Windows.UI.dll
 0x68060000 - 0x680FB000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x68100000 - 0x6837E000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
 0x68380000 - 0x68439000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x687A0000 - 0x68A39000  C:\WINDOWS\SYSTEM32\msi.dll
 0x68AD0000 - 0x68BD0000  C:\WINDOWS\SYSTEM32\drvstore.dll
 0x68BD0000 - 0x68BF6000  C:\WINDOWS\SYSTEM32\cryptnet.dll
 0x68C00000 - 0x68C8C000  C:\WINDOWS\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_647b4244e991951b\nvldumd.dll
 0x68C90000 - 0x68E1F000  C:\WINDOWS\SYSTEM32\d3d9.dll
 0x69100000 - 0x691C3000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x6A3F0000 - 0x6A598000  C:\WINDOWS\SYSTEM32\urlmon.dll
 0x6A5A0000 - 0x6A67B000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x6AA20000 - 0x6AAAD000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
 0x6B700000 - 0x6B92D000  C:\WINDOWS\SYSTEM32\iertutil.dll
 0x6F960000 - 0x6F968000  C:\Windows\System32\rasadhlp.dll
 0x6F9F0000 - 0x6FAB2000  C:\Windows\System32\PROPSYS.dll
 0x71370000 - 0x71378000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
 0x71380000 - 0x71392000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
 0x71EB0000 - 0x71F22000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x722C0000 - 0x722C8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x72320000 - 0x7239F000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x72400000 - 0x72408000  C:\WINDOWS\SYSTEM32\DPAPI.DLL
 0x72410000 - 0x7242F000  C:\WINDOWS\system32\ncryptsslp.dll
 0x72430000 - 0x724C3000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x724D0000 - 0x724F4000  C:\WINDOWS\SYSTEM32\devobj.dll
 0x725A0000 - 0x725A8000  C:\WINDOWS\SYSTEM32\AVRT.dll
 0x725D0000 - 0x725ED000  C:\WINDOWS\SYSTEM32\srvcli.dll
 0x725F0000 - 0x725FC000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x72600000 - 0x72610000  C:\WINDOWS\SYSTEM32\mskeyprotect.dll
 0x726B0000 - 0x726CE000  C:\WINDOWS\SYSTEM32\gpapi.dll
 0x726D0000 - 0x726FC000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x72700000 - 0x7276B000  C:\WINDOWS\System32\MMDevApi.dll
 0x72800000 - 0x7280A000  C:\WINDOWS\SYSTEM32\msacm32.drv
 0x72810000 - 0x72817000  C:\WINDOWS\SYSTEM32\ksuser.dll
 0x72820000 - 0x72829000  C:\WINDOWS\SYSTEM32\ktmw32.dll
 0x72830000 - 0x7284E000  C:\Users\Niklas\Desktop\turtle wow\turtle_client_116\DiscordOverlay.dll
 0x72850000 - 0x7288F000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x72890000 - 0x72979000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x72980000 - 0x729F7000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x72BA0000 - 0x72BF9000  C:\WINDOWS\System32\fwpuclnt.dll
 0x72C70000 - 0x72C7B000  C:\WINDOWS\SYSTEM32\netutils.dll
 0x72CD0000 - 0x72CD7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x72D40000 - 0x72D4F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x72D90000 - 0x72DE2000  C:\WINDOWS\SYSTEM32\mswsock.dll
 0x72DF0000 - 0x72E1F000  C:\WINDOWS\system32\rsaenh.dll
 0x72E20000 - 0x72E33000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x72E40000 - 0x72E69000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x735B0000 - 0x735D1000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x735E0000 - 0x735F8000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x73600000 - 0x73624000  C:\WINDOWS\SYSTEM32\Wldp.dll
 0x73630000 - 0x73C3C000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x73C40000 - 0x73C4A000  C:\WINDOWS\SYSTEM32\CRYPTBASE.DLL
 0x73C50000 - 0x73C5D000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x73C60000 - 0x73C6E000  C:\WINDOWS\SYSTEM32\msasn1.dll
 0x73DB0000 - 0x73DF4000  C:\WINDOWS\SYSTEM32\powrprof.dll
 0x73E10000 - 0x73E18000  C:\WINDOWS\SYSTEM32\VERSION.dll
 0x73E20000 - 0x74274000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x74280000 - 0x742A5000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x74320000 - 0x74348000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x74350000 - 0x7436A000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x74390000 - 0x743B6000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x743C0000 - 0x74434000  C:\WINDOWS\system32\uxtheme.dll
 0x749E0000 - 0x74A12000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
 0x74A20000 - 0x74AB1000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
 0x75690000 - 0x7572F000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x75730000 - 0x757EE000  C:\WINDOWS\System32\RPCRT4.dll
 0x757F0000 - 0x7586B000  C:\WINDOWS\System32\ADVAPI32.dll
 0x75870000 - 0x758AB000  C:\WINDOWS\System32\cfgmgr32.dll
 0x75940000 - 0x759C7000  C:\WINDOWS\System32\shcore.dll
 0x759D0000 - 0x759E9000  C:\WINDOWS\System32\imagehlp.dll
 0x75A50000 - 0x75AB3000  C:\WINDOWS\System32\WS2_32.dll
 0x75AC0000 - 0x75AE5000  C:\WINDOWS\System32\IMM32.dll
 0x75AF0000 - 0x75B4F000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x75B50000 - 0x75BE6000  C:\WINDOWS\System32\OLEAUT32.dll
 0x75BF0000 - 0x75D10000  C:\WINDOWS\System32\ucrtbase.dll
 0x75D70000 - 0x75D88000  C:\WINDOWS\System32\win32u.dll
 0x761D0000 - 0x7636C000  C:\WINDOWS\System32\USER32.dll
 0x76370000 - 0x76393000  C:\WINDOWS\System32\GDI32.dll
 0x763A0000 - 0x76474000  C:\WINDOWS\System32\MSCTF.dll
 0x76480000 - 0x76563000  C:\WINDOWS\System32\ole32.dll
 0x76570000 - 0x765BC000  C:\WINDOWS\System32\WINTRUST.DLL
 0x765C0000 - 0x7663B000  C:\WINDOWS\System32\msvcp_win.dll
 0x76640000 - 0x766B6000  C:\WINDOWS\System32\sechost.dll
 0x766D0000 - 0x768E8000  C:\WINDOWS\System32\KERNELBASE.dll
 0x768F0000 - 0x7699F000  C:\WINDOWS\System32\COMDLG32.dll
 0x769A0000 - 0x76A7C000  C:\WINDOWS\System32\gdi32full.dll
 0x76A80000 - 0x76B70000  C:\WINDOWS\System32\KERNEL32.DLL
 0x76B70000 - 0x76B89000  C:\WINDOWS\System32\bcrypt.dll
 0x76B90000 - 0x76C4F000  C:\WINDOWS\System32\msvcrt.dll
 0x76C50000 - 0x77206000  C:\WINDOWS\System32\SHELL32.dll
 0x77210000 - 0x7748F000  C:\WINDOWS\System32\combase.dll
 0x77490000 - 0x774D5000  C:\WINDOWS\System32\SHLWAPI.dll
 0x774E0000 - 0x775DA000  C:\WINDOWS\System32\CRYPT32.dll
 0x775E0000 - 0x775E7000  C:\WINDOWS\System32\NSI.dll
 0x77600000 - 0x7767E000  C:\WINDOWS\System32\clbcatq.dll
 0x77860000 - 0x77A04000  C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 0071AACE)

 0071AACE: 0F 28 00 0F  59 C4 0F 28  48 10 0F 59  CC 0F 28 50  .(..Y..(H..Y..(P

Stack: 1024 bytes starting at (ESP = 0019C7A4)

 * = addr               **                                         *
 0019C7A0: 08 00 AD 03  08 18 F8 25  08 54 AC 03  2C 6D F8 25  .......%.T..,m.%
 0019C7B0: C6 00 00 00  14 00 00 00  C7 00 00 00  14 00 00 00  ................
 0019C7C0: 00 32 00 00  00 05 00 00  40 32 00 00  00 05 00 00  .2......@2......
 0019C7D0: E0 80 68 0A  10 00 23 32  10 00 56 2F  31 05 0C 30  ..h...#2..V/1..0
 0019C7E0: C8 14 C9 14  08 C8 19 00  14 9C 71 00  E0 80 68 0A  ..........q...h.
 0019C7F0: C8 9C 3E 32  E8 C8 19 00  00 00 00 00  E8 C8 19 00  ..>2............
 0019C800: 00 00 00 00  08 54 AC 03  34 C8 19 00  08 CF 70 00  .....T..4.....p.
 0019C810: 00 00 00 00  80 80 68 0A  20 00 00 00  E8 C8 19 00  ......h. .......
 0019C820: 00 00 00 00  03 00 00 00  9C 00 00 00  0C 06 00 00  ................
 0019C830: 97 01 00 00  C8 C8 19 00  2C B6 70 00  00 00 00 00  ........,.p.....
 0019C840: 08 E0 79 12  28 4D E5 25  47 B3 F2 BE  A6 5A 9F 3E  ..y.(M.%G....Z.>
 0019C850: 05 DC 52 3F  00 00 00 00  3B 69 61 BF  A4 93 2B BE  ..R?....;ia...+.
 0019C860: 57 08 E3 BE  00 00 00 00  1C 00 24 B2  45 79 6F 3F  W.........$.Eyo?
 0019C870: 9A FA B4 BE  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C880: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........
 0019C890: 00 00 00 00  49 41 40 00  00 00 00 00  DC C8 19 00  ....IA@.........
 0019C8A0: 49 41 40 00  00 00 00 00  E8 C8 19 00  88 CA 19 00  IA@.............
 0019C8B0: D4 C8 19 00  A5 B1 70 00  88 CA 19 00  D4 C8 19 00  ......p.........
 0019C8C0: 27 B2 70 00  00 00 00 00  44 FC 19 00  6E 89 70 00  '.p.....D...n.p.
 0019C8D0: 00 00 00 00  08 80 3E 32  08 2E E6 26  35 00 00 00  ......>2...&5...
 0019C8E0: 08 00 86 12  08 E0 79 12  00 00 80 3F  00 00 00 00  ......y....?....
 0019C8F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
 0019C900: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019C910: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0019C920: 00 00 00 00  00 00 80 3F  08 E0 79 12  B0 EF CE 00  .......?..y.....
 0019C930: 10 00 56 2F  00 00 00 00  00 00 00 00  00 00 00 00  ..V/............
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
Processor Mask:         0xff
Number of Processors:   8
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        6
Processor Revision:     40457

Percent memory used:    41
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576

Any suggestions?

## Post 19356 by Sinrek (Grandmaster of Forum PvP) — 2022-06-24T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19356#p19356 | page 1 | era: pre-1.18.1 -->

Move your game folder to the root of your disc and make sure you have your video drivers updated. Unless you have some kind of a AV system installed that prevents wow.exe from working (whitelist it) should be fine.

## Post 19366 by Geojak (Grandmaster of Forum PvP) — 2022-06-24T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19366#p19366 | page 1 | era: pre-1.18.1 -->

There was a restart today. My guild is now fixed, no more empty name members crashing the game

## Post 19426 by Simon1988 — 2022-06-28T14:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19426#p19426 | page 1 | era: pre-1.18.1 -->

the same problem (not one of the ways does not work (

## Post 27559 by Wowplaya69 — 2022-10-19T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27559#p27559 | page 1 | era: pre-1.18.1 -->

I'm also getting this error periodically running turtle wow with Wine/Linux. No problems with vanilla wow previously. I feel like its triggered when certain models load, ie: when razor hill come into clipping range, and on the goblin character login screen.

## Post 27564 by Juozukas — 2022-10-19T16:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27564#p27564 | page 1 | era: pre-1.18.1 -->

> **Wowplaya69 wrote: Wed Oct 19, 2022 1:09 pm**
> I'm also getting this error periodically running turtle wow with Wine/Linux. No problems with vanilla wow previously. I feel like its triggered when certain models load, ie: when razor hill come into clipping range, and on the goblin character login screen.

Same here. Always crashing in Hateforge Quary near those  green fire torches.

## Post 27596 by Wowplaya69 — 2022-10-20T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27596#p27596 | page 1 | era: pre-1.18.1 -->

Ok, I think I've figured it out. It seems that, for me at least, this is fixed by checking 'Vertex Animation Shaders' in the settings, I previously had it unchecked.

When 'Vertex Animation Shaders'  is unchecked the bug returns, but only in certain world locations. This is on wine/linux, but the error is exactly the same as the OP.

If you can't login you can also change this setting by removing the line from WTF/Config.wtf:  SET M2UseShaders "0"

.phew.

## Post 48752 by Wez0 (Patch Note Conspiracy Theorist) — 2023-06-04T09:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48752#p48752 | page 1 | era: pre-1.18.1 -->

> **Wowplaya69 wrote: Thu Oct 20, 2022 9:05 am**
> Ok, I think I've figured it out. It seems that, for me at least, this is fixed by checking 'Vertex Animation Shaders' in the settings, I previously had it unchecked.

Same here.

esc > video options > check: 'Vertex Animation Shaders' (requires logout to take effect)

update: my game crashed right after changing this; so try logging out, closing the game & restarting

## Post 75856 by Njord12 — 2023-11-04T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75856#p75856 | page 1 | era: pre-1.18.1 -->

Thanx Wowplaya69, that solved my issues aswell.

