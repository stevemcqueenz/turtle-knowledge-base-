---
title: "Crashing on load screen Error 132"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5248"
topic_id: 5248
forum_id: 3
forum: "Help & Support"
author: "Mageulook"
author_authority: "player"
posted: "2023-01-01T02:38:00Z"
last_post: "2023-01-01T04:11:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:18:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Crashing on load screen Error 132

## Post 31877 by Mageulook — 2023-01-01T02:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31877#p31877 | page 1 | era: pre-1.18.1 -->

Hi All, I was playing a level 8 nelf rogue and took a port from the snowman to winter veil in darnassus and got this dreaded error 132 during the load screen and now can't log back into that toon and constantly getting that error 132.  All other toons log in no problem.  We have gone through all the troubleshooting steps.
 1. Disabled addons
 2. deleted wdb folder
 3. tried logging in with another toon (human) and disabling vertex animation shaders, restarted, logged back in to human toon and enable it again, once again restart and still no dice
 4. Whitelisted in av
 5.  Ran windows compatibility troubleshooter
 6. Tried the 4GB patch as well

I noticed the toon at login screen doesn't show a location at all not sure if that is normal or not?  Any way to maybe revert her state back to Darnassus?  Not sure what else to do here

![Image](https://media.discordapp.net/attachments/691438750185553950/1058932995366592512/image.png)

EDIT: looks like now that Level 10 Mage in stormwind has same error as well.  That was the toon use to disable/enable the vertex animation shaders...

Crash Log:

==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Games\TurtleWoW\turtle_client_116\WoW.exe
Time:     Dec 31, 2022  9:01:55.263 PM
User:
Computer:
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Games\TurtleWoW\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:004017C4

The instruction at "0x004017C4" referenced memory at "0x00000004".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=1A14A008  EBX=00000000  ECX=00407FA0  EDX=00000000  ESI=00000000
EDI=0000032D  EBP=0019F9D0  ESP=0019F9C4  EIP=004017C4  FLG=00210246
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 004017C4 0019F9D0 0001:000007C4 C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 0046C23B 0019FE18 0001:0006B23B C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 004246B0 0019FE4C 0001:000236B0 C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 00420FDA 0019FE70 0001:0001FFDA C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 00420D68 0019FECC 0001:0001FD68 C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 00420BF1 0019FEE4 0001:0001FBF1 C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 0040411E 0019FF74 0001:0000311E C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 76FA7D69 0019FF84 0001:00007D69 C:\WINDOWS\System32\KERNEL32.DLL
 77AEBB9B 0019FFDC 0001:0006AB9B C:\WINDOWS\SYSTEM32\ntdll.dll
 77AEBB1F 0019FFEC 0001:0006AB1F C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 004017C4 WoW.exe      <unknown symbol>+0 (0xC5208E66,0x44953AE1,0x427A851F,0x0019FE2C)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Games\TurtleWoW\turtle_client_116\WoW.exe
 0x02E30000 - 0x02EC6000  C:\Games\TurtleWoW\turtle_client_116\fmod.dll
 0x06940000 - 0x06A58000  C:\Games\TurtleWoW\turtle_client_116\dbghelp.dll
 0x10000000 - 0x10069000  C:\Games\TurtleWoW\turtle_client_116\DivxDecoder.dll
 0x69080000 - 0x69098000  C:\WINDOWS\system32\nlansp_c.dll
 0x690A0000 - 0x690B1000  C:\WINDOWS\system32\wshbth.dll
 0x690C0000 - 0x690CE000  C:\WINDOWS\System32\winrnr.dll
 0x690D0000 - 0x690E6000  C:\WINDOWS\system32\pnrpnsp.dll
 0x690F0000 - 0x69102000  C:\WINDOWS\system32\napinsp.dll
 0x69110000 - 0x69118000  C:\WINDOWS\SYSTEM32\DPAPI.DLL
 0x69120000 - 0x69134000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
 0x69140000 - 0x6924A000  C:\Windows\System32\Windows.UI.dll
 0x69250000 - 0x69258000  C:\WINDOWS\SYSTEM32\midimap.dll
 0x69260000 - 0x6929B000  C:\WINDOWS\SYSTEM32\wdmaud.drv
 0x692A0000 - 0x692D8000  C:\ProgramData\A-Volute\A-Volute.Nahimic\Modules\Scheduled\ASM.Plugin.AudioDevProps2.dll
 0x692E0000 - 0x6946A000  C:\WINDOWS\SYSTEM32\AudioSes.dll
 0x69470000 - 0x694EC000  C:\WINDOWS\System32\MMDevApi.dll
 0x694F0000 - 0x695BD000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x695C0000 - 0x695DF000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x695E0000 - 0x69679000  C:\WINDOWS\SYSTEM32\ResampleDmo.DLL
 0x69680000 - 0x696F2000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x69700000 - 0x697E3000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x697F0000 - 0x69818000  C:\WINDOWS\SYSTEM32\amdihk32.dll
 0x69820000 - 0x6A66C000  C:\WINDOWS\System32\DriverStore\FileRepository\u0383722.inf_amd64_5cbaacf42cbd3812\B383240\atiumdva.dll
 0x6A670000 - 0x6B139000  C:\WINDOWS\System32\DriverStore\FileRepository\u0383722.inf_amd64_5cbaacf42cbd3812\B383240\atiumdag.dll
 0x6B140000 - 0x6B16A000  C:\WINDOWS\System32\DriverStore\FileRepository\u0383722.inf_amd64_5cbaacf42cbd3812\B383240\atiu9pag.dll
 0x6B170000 - 0x6B2D7000  C:\WINDOWS\System32\DriverStore\FileRepository\u0383722.inf_amd64_5cbaacf42cbd3812\B383240\aticfx32.dll
 0x6B2E0000 - 0x6B768000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x6BAD0000 - 0x6BADB000  C:\WINDOWS\SYSTEM32\msacm32.drv
 0x6BAE0000 - 0x6BC52000  C:\WINDOWS\SYSTEM32\d3d9.dll
 0x6BC60000 - 0x6BC9E000  C:\Windows\System32\Windows.Internal.Graphics.Display.DisplayColorManagement.dll
 0x6BCA0000 - 0x6BCE2000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x6BCF0000 - 0x6BDD0000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x6BDD0000 - 0x6BE45000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x6BE50000 - 0x6C103000  C:\WINDOWS\SYSTEM32\msi.dll
 0x6C110000 - 0x6C1FB000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x6C200000 - 0x6C231000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x6C240000 - 0x6C2E0000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x6C2E0000 - 0x6C35A000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x6C360000 - 0x6C405000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x6C5A0000 - 0x6C5E6000  C:\WINDOWS\SYSTEM32\POWRPROF.dll
 0x6D700000 - 0x6D709000  C:\WINDOWS\SYSTEM32\AVRT.dll
 0x6D760000 - 0x6D7B5000  C:\ProgramData\A-Volute\A-Volute.Nahimic\Modules\Scheduled\ProductInfo.dll
 0x6DB90000 - 0x6DBA9000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x6DE60000 - 0x6DF2A000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x6E1B0000 - 0x6E1B7000  C:\WINDOWS\SYSTEM32\ksuser.dll
 0x6E1C0000 - 0x6E1ED000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x6E1F0000 - 0x6E2EF000  C:\ProgramData\A-Volute\A-Volute.Nahimic\Modules\Scheduled\AudioDevProps2.dll
 0x6E380000 - 0x6E3A9000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x6E440000 - 0x6E450000  C:\WINDOWS\SYSTEM32\resourcepolicyclient.dll
 0x6E500000 - 0x6E509000  C:\WINDOWS\SYSTEM32\msdmo.dll
 0x6E510000 - 0x6E529000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x6E550000 - 0x6E58C000  C:\WINDOWS\SYSTEM32\directxdatabasehelper.dll
 0x6E590000 - 0x6E598000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x6E5D0000 - 0x6E5F4000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x6E840000 - 0x6E8C4000  C:\WINDOWS\System32\schannel.dll
 0x6E8D0000 - 0x6E94F000  C:\WINDOWS\system32\uxtheme.dll
 0x6E950000 - 0x6E95E000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x6E9B0000 - 0x6E9D0000  C:\WINDOWS\system32\ncryptsslp.dll
 0x6E9D0000 - 0x6EAA6000  C:\WINDOWS\SYSTEM32\WINHTTP.dll
 0x6EBF0000 - 0x6EC4D000  C:\WINDOWS\System32\fwpuclnt.dll
 0x6EC50000 - 0x6EC58000  C:\Windows\System32\rasadhlp.dll
 0x6F040000 - 0x6F05F000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x6F8C0000 - 0x6F8E7000  C:\Windows\System32\cryptnet.dll
 0x6F940000 - 0x6FA06000  C:\WINDOWS\SYSTEM32\PropSys.dll
 0x6FA10000 - 0x6FC3E000  C:\WINDOWS\SYSTEM32\iertutil.dll
 0x6FC40000 - 0x6FC4B000  C:\WINDOWS\SYSTEM32\netutils.dll
 0x6FC50000 - 0x6FC6D000  C:\WINDOWS\SYSTEM32\srvcli.dll
 0x6FC70000 - 0x6FE12000  C:\WINDOWS\SYSTEM32\urlmon.dll
 0x6FE70000 - 0x6FE98000  C:\WINDOWS\SYSTEM32\NTASN1.dll
 0x6FEA0000 - 0x6FEC5000  C:\WINDOWS\SYSTEM32\ncrypt.dll
 0x6FFE0000 - 0x70005000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x700C0000 - 0x700C7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x70170000 - 0x70201000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.22621.608_none_42d541138da2ebd2\COMCTL32.dll
 0x71260000 - 0x7126E000  C:\WINDOWS\SYSTEM32\MSASN1.dll
 0x71270000 - 0x712AD000  C:\WINDOWS\SYSTEM32\cfgmgr32.dll
 0x712B0000 - 0x712DA000  C:\WINDOWS\System32\DEVOBJ.dll
 0x712E0000 - 0x71331000  C:\WINDOWS\SYSTEM32\mswsock.dll
 0x71340000 - 0x7134A000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
 0x71390000 - 0x71449000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
 0x71450000 - 0x71474000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
 0x726B0000 - 0x726C9000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x726D0000 - 0x72797000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x727A0000 - 0x72E6D000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x738D0000 - 0x738EA000  C:\WINDOWS\SYSTEM32\bcrypt.dll
 0x738F0000 - 0x738FB000  C:\WINDOWS\SYSTEM32\CRYPTBASE.dll
 0x73900000 - 0x73930000  C:\WINDOWS\system32\rsaenh.dll
 0x73930000 - 0x73945000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x75680000 - 0x75688000  C:\WINDOWS\SYSTEM32\VERSION.dll
 0x75690000 - 0x756A3000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x757A0000 - 0x757A7000  C:\WINDOWS\System32\NSI.dll
 0x757B0000 - 0x75829000  C:\WINDOWS\System32\msvcp_win.dll
 0x75830000 - 0x758E0000  C:\WINDOWS\System32\COMDLG32.dll
 0x758E0000 - 0x759E3000  C:\WINDOWS\System32\CRYPT32.dll
 0x75A10000 - 0x75A72000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x75A80000 - 0x75AD8000  C:\WINDOWS\System32\WINTRUST.dll
 0x75AE0000 - 0x75AFA000  C:\WINDOWS\System32\win32u.dll
 0x75B00000 - 0x75B26000  C:\WINDOWS\System32\IMM32.dll
 0x75B30000 - 0x75DAC000  C:\WINDOWS\System32\combase.dll
 0x75DB0000 - 0x75EFD000  C:\WINDOWS\System32\ole32.dll
 0x75F00000 - 0x75FB9000  C:\WINDOWS\System32\RPCRT4.dll
 0x75FC0000 - 0x76080000  C:\WINDOWS\System32\shcore.dll
 0x76080000 - 0x7615D000  C:\WINDOWS\System32\gdi32full.dll
 0x76160000 - 0x76272000  C:\WINDOWS\System32\ucrtbase.dll
 0x76280000 - 0x762A2000  C:\WINDOWS\System32\GDI32.dll
 0x76310000 - 0x7657B000  C:\WINDOWS\System32\KERNELBASE.dll
 0x76580000 - 0x765FC000  C:\WINDOWS\System32\ADVAPI32.dll
 0x76600000 - 0x766DB000  C:\WINDOWS\System32\MSCTF.dll
 0x766E0000 - 0x76762000  C:\WINDOWS\System32\sechost.dll
 0x76770000 - 0x76916000  C:\WINDOWS\System32\USER32.dll
 0x76920000 - 0x76F81000  C:\WINDOWS\System32\SHELL32.dll
 0x76F90000 - 0x77080000  C:\WINDOWS\System32\KERNEL32.DLL
 0x77080000 - 0x77144000  C:\WINDOWS\System32\msvcrt.dll
 0x771F0000 - 0x7723B000  C:\WINDOWS\System32\SHLWAPI.dll
 0x772B0000 - 0x7734C000  C:\WINDOWS\System32\OLEAUT32.dll
 0x774C0000 - 0x77901000  C:\WINDOWS\System32\SETUPAPI.dll
 0x77980000 - 0x779DF000  C:\WINDOWS\System32\WS2_32.dll
 0x779E0000 - 0x77A67000  C:\WINDOWS\System32\clbcatq.dll
 0x77A80000 - 0x77C2F000  C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 004017C4)

 004017C4: 8B 4E 04 6A  01 57 8D 55  08 E8 0E E4  26 00 33 D2  .N.j.W.U....&.3.

Stack: 1024 bytes starting at (ESP = 0019F9C4)

 * = addr               **                                         *
 0019F9C0: C4 17 40 00  2C FE 19 00  2D 03 00 00  2D 03 00 00  ..@.,...-...-...
 0019F9D0: 18 FE 19 00  3B C2 46 00  66 8E 20 C5  E1 3A 95 44  ....;.F.f. ..:.D
 0019F9E0: 1F 85 7A 42  2C FE 19 00  68 73 C7 12  68 73 C7 12  ..zB,...hs..hs..
 0019F9F0: FF 7A A7 CE  FF FF FF FF  B7 00 00 00  63 79 A7 CE  .z..........cy..
 0019FA00: 18 FA 19 00  17 4E 80 76  A0 CB 51 01  00 00 00 00  .....N.v..Q.....
 0019FA10: 4B 03 1E 03  01 00 00 00  B0 FA 19 00  FF 80 8F 6E  K..............n
 0019FA20: A0 03 03 00  84 00 00 00  00 00 00 00  4B 03 1E 03  ............K...
 0019FA30: 01 00 00 00  F0 B9 92 6E  0D 81 8F 6E  20 29 00 00  .......n...n )..
 0019FA40: 00 00 00 00  01 00 00 00  B7 00 00 00  F0 05 A1 02  ................
 0019FA50: 00 00 00 00  00 00 00 00  00 00 00 00  84 00 00 00  ................
 0019FA60: A0 03 03 00  D0 4D 80 76  00 00 00 00  A0 03 03 00  .....M.v........
 0019FA70: 84 00 00 00  01 00 00 00  01 00 00 00  64 FA 19 00  ............d...
 0019FA80: 01 00 00 00  48 FC 19 00  00 4E 7A 76  27 62 3E B8  ....H....Nzv'b>.
 0019FA90: FE FF FF FF  C8 FA 19 00  B6 D5 42 00  A0 03 03 00  ..........B.....
 0019FAA0: 84 00 00 00  00 00 00 00  4B 03 1E 03  DA 6E 44 5F  ........K....nD_
 0019FAB0: A0 CB 51 01  01 00 00 00  EB FF FF FF  4B 03 1E 03  ..Q.........K...
 0019FAC0: 00 00 00 00  0C FB 19 00  37 5A 80 76  A0 03 03 00  ........7Z.v....
 0019FAD0: 04 FB 19 00  6E DB 78 76  A0 CB 51 01  00 00 00 00  ....n.xv..Q.....
 0019FAE0: 20 00 00 00  A0 CB 51 01  50 87 59 00  01 00 00 00   .....Q.P.Y.....
 0019FAF0: 01 00 00 00  DC FA 19 00  01 00 00 00  C0 FC 19 00  ................
 0019FB00: 01 00 00 00  A0 03 03 00  35 01 79 76  A0 03 03 00  ........5.yv....
 0019FB10: 01 00 00 00  40 00 00 00  00 00 00 00  00 02 00 00  ....@...........
 0019FB20: 00 00 00 00  A0 0D E8 0B  01 00 00 02  A4 0D E8 0B  ................
 0019FB30: A0 CB 51 01  01 00 00 00  00 00 00 00  00 00 00 00  ..Q.............
 0019FB40: 00 58 36 00  16 28 79 76  01 00 00 00  D3 7B A7 CE  .X6..(yv.....{..
 0019FB50: 68 FB 19 00  17 4E 80 76  A0 CB 51 01  00 00 00 00  h....N.v..Q.....
 0019FB60: 4B 03 1E 03  01 00 00 00  B0 FB 19 00  3E 5A 80 76  K...........>Z.v
 0019FB70: ED 18 2C 0C  00 02 00 00  72 5A 80 76  4F 5A 80 76  ..,.....rZ.vOZ.v
 0019FB80: 6F 7B A7 CE  00 00 00 00  A0 03 03 00  00 02 00 00  o{..............
 0019FB90: 01 00 00 00  00 00 00 00  80 FB 19 00  00 00 00 00  ................
 0019FBA0: 64 FD 19 00  00 4E 7A 76  27 62 3E B8  FE FF FF FF  d....Nzv'b>.....
 0019FBB0: 08 70 8F 10  B6 D5 42 00  A0 03 03 00  00 02 00 00  .p....B.........
 0019FBC0: 00 00 00 00  4B 03 1E 03  00 02 00 00  E0 CF 42 00  ....K.........B.
 0019FBD0: 4B 03 1E 03  4B 03 00 00  1E 03 00 00  77 57 3E B8  K...K.......wW>.
 0019FBE0: A0 03 03 00  50 FC 19 00  B5 89 59 00  00 00 00 00  ....P.....Y.....
 0019FBF0: 4B 03 1E 03  00 02 00 00  A0 03 03 00  50 87 59 00  K...........P.Y.
 0019FC00: 20 00 00 00  00 00 00 00  24 00 00 00  01 00 00 00   .......$.......
 0019FC10: 00 00 00 00  00 00 00 00  00 02 00 00  A0 03 03 00  ................
 0019FC20: FC 70 AC 77  9A 2D 79 76  D8 31 79 76  00 00 00 00  .p.w.-yv.1yv....
 0019FC30: 00 00 00 00  34 70 AC 77  A0 03 03 00  00 00 00 00  ....4p.w........
 0019FC40: FF FF FF FF  88 60 30 03  AC FC 19 00  00 4E 7A 76  .....`0......Nzv
 0019FC50: 7C FC 19 00  33 23 7A 76  A0 03 03 00  00 02 00 00  |...3#zv........
 0019FC60: 00 00 00 00  4B 03 1E 03  A0 03 03 00  CD AB BA DC  ....K...........
 0019FC70: 50 87 59 00  00 02 00 00  A0 03 03 00  74 FD 19 00  P.Y.........t...
 0019FC80: E6 30 79 76  A4 50 68 4E  A0 03 03 00  74 FD 19 00  .0yv.PhN....t...
 0019FC90: E0 31 79 76  79 31 79 76  AB 7D A7 CE  10 FE 19 00  .1yvy1yv.}......
 0019FCA0: A0 CB 51 01  5C FE 19 00  01 00 00 00  24 00 00 00  ..Q.\.......$...
 0019FCB0: 01 00 00 00  00 00 00 00  00 00 00 00  70 00 00 00  ............p...
 0019FCC0: FF FF FF FF  FF FF FF FF  9A 2D 79 76  D8 31 79 76  .........-yv.1yv
 0019FCD0: 34 FD 19 00  6A 2B 79 76  50 87 59 00  00 00 00 00  4...j+yvP.Y.....
 0019FCE0: 20 00 00 00  A0 03 03 00  01 00 00 02  00 50 36 00   ............P6.
 0019FCF0: 01 00 00 00  EB 7D A7 CE  6C FE 19 00  20 83 B1 77  .....}..l... ..w
 0019FD00: 5C FE 19 00  20 00 00 00  10 60 00 80  00 00 00 00  \... ....`......
 0019FD10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FD20: 00 00 00 00  48 13 F7 00  00 00 00 00  57 58 3E B8  ....H.......WX>.
 0019FD30: 01 00 00 00  AC 10 AE 75  EF BA 79 76  10 FE 19 00  .......u..yv....
 0019FD40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FD50: 00 00 00 00  C0 F1 4F 01  00 50 36 00  00 00 00 00  ......O..P6.....
 0019FD60: 00 00 00 00  E0 FD 19 00  00 4E 7A 76  77 58 3E B8  .........NzvwX>.
 0019FD70: FE FF FF FF  F0 FD 19 00  A5 19 79 76  50 87 59 00  ..........yvP.Y.
 0019FD80: 00 00 00 00  C4 FD 19 00  8F 62 80 76  00 00 00 00  .........b.v....
 0019FD90: 00 00 00 00  00 00 00 00  00 00 00 00  01 00 00 00  ................
 0019FDA0: 10 FE 19 00  90 60 80 76  5C FE 19 00  10 FE 19 00  .....`.v\.......
 0019FDB0: C0 F1 4F 01  FF 3D 00 00  B0 73 7F 76  00 50 36 00  ..O..=...s.v.P6.
 0019FDC0: D8 FD 19 00  E8 FD 19 00  39 B9 33 6C  10 FE 19 00  ........9.3l....

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
Processor Level:        25
Processor Revision:     20480

Percent memory used:    66
Total physical memory:  2147483647
Free Memory:            2097192960
Page file:              -1
Total virtual memory:   2147352576

## Post 31880 by Fin (Patch Note Conspiracy Theorist) — 2023-01-01T04:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31880#p31880 | page 1 | era: pre-1.18.1 -->

You are using  faulty or old patches.

Please get a fully updated client.
Download links here: [viewtopic.php?f=2&t=5143&p=31245#p31245](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=5143&p=31245#p31245)

If you want to transfer your settings and addons from your old client to a new client, copy your WTF folder and addons to your new client.

DON'T MERGE THE NEW CLIENT WITH THE OLD CLIENT
We have moved your characters as a temporary measure

