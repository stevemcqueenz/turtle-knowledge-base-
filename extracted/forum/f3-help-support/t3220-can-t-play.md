---
title: "Can´t play"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3220"
topic_id: 3220
forum_id: 3
forum: "Help & Support"
author: "Xaviikj"
author_authority: "player"
posted: "2022-07-03T11:39:00Z"
last_post: "2022-07-07T19:42:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:24:23Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can´t play

## Post 19632 by Xaviikj — 2022-07-03T11:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19632#p19632 | page 1 | era: pre-1.18.1 -->

Hello, i downloaded the client and i cant play because an error shows up.

==============================================================================
World of WarCraft (build 5875)

Exe:      E:\Games\turtle_client_116\WoW.exe
Time:     Jul  3, 2022  1:37:00.339 PM
User:     javi-
Computer: DESKTOP-LHJ01TF
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	E:\Games\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:75B52590

The instruction at "0x75B52590" referenced memory at "0x60E011D0".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=60E011CC  EBX=00E25C68  ECX=00000002  EDX=001F9378  ESI=001F8840
EDI=00000000  EBP=0019F874  ESP=0019F854  EIP=75B52590  FLG=00210202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 75B52590 0019F874 0001:00051590 C:\WINDOWS\System32\MSCTF.dll
 75B51DA7 0019F888 0001:00050DA7 C:\WINDOWS\System32\MSCTF.dll
 64C00391 0019F8A0 0001:0005F391 C:\WINDOWS\SYSTEM32\textinputframework.dll
 75B30067 0019F8E0 0001:0002F067 C:\WINDOWS\System32\MSCTF.dll
 75B343C6 0019F930 0001:000333C6 C:\WINDOWS\System32\MSCTF.dll
 75B9FCD5 0019F940 0001:0009ECD5 C:\WINDOWS\System32\MSCTF.dll
 77062318 0019F964 0001:00001318 C:\WINDOWS\System32\IMM32.dll
 75B1F1F5 0019F998 0001:0001E1F5 C:\WINDOWS\System32\MSCTF.dll
 75B1EF34 0019F9C8 0001:0001DF34 C:\WINDOWS\System32\MSCTF.dll
 75B1EDCB 0019F9D4 0001:0001DDCB C:\WINDOWS\System32\MSCTF.dll
 77065FBF 0019F9F4 0001:00004FBF C:\WINDOWS\System32\IMM32.dll
 770671FD 0019F9FC 0001:000061FD C:\WINDOWS\System32\IMM32.dll
 75886062 0019FA78 0001:000B5062 C:\WINDOWS\System32\combase.dll
 75885C05 0019FA88 0001:000B4C05 C:\WINDOWS\System32\combase.dll
 7AA95964 0019FACC 0001:00054964 C:\WINDOWS\SYSTEM32\dsound.dll
 7AA8B3D3 0019FB18 0001:0004A3D3 C:\WINDOWS\SYSTEM32\dsound.dll
 7AA8AB8A 0019FB30 0001:00049B8A C:\WINDOWS\SYSTEM32\dsound.dll
 7AA7AC52 0019FDA4 0001:00039C52 C:\WINDOWS\SYSTEM32\dsound.dll
 7AA7C0C4 0019FDB4 0001:0003B0C4 C:\WINDOWS\SYSTEM32\dsound.dll
 1000CA0E 0019FE1C 0001:0000BA0E E:\Games\turtle_client_116\fmod.dll
 00457007 0019FE60 0001:00056007 E:\Games\turtle_client_116\WoW.exe
 00420E4A 0019FEC8 0001:0001FE4A E:\Games\turtle_client_116\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 E:\Games\turtle_client_116\WoW.exe
 0040411E 0019FF70 0001:0000311E E:\Games\turtle_client_116\WoW.exe
 7625FA29 0019FF80 0001:0000FA29 C:\WINDOWS\System32\KERNEL32.DLL
 77967A7E 0019FFDC 0001:00066A7E C:\WINDOWS\SYSTEM32\ntdll.dll
 77967A4E 0019FFEC 0001:00066A4E C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 75B52590 MSCTF.dll    TF_IsCtfmonRunning+18016 (0x00000000,0x001F8310,0x00000000,0x0019F8A0)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  E:\Games\turtle_client_116\WoW.exe
 0x02BF0000 - 0x02C59000  E:\Games\turtle_client_116\DivxDecoder.dll
 0x0F6D0000 - 0x0F7E8000  E:\Games\turtle_client_116\dbghelp.dll
 0x10000000 - 0x10096000  E:\Games\turtle_client_116\fmod.dll
 0x53D90000 - 0x53DA9000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x53E20000 - 0x53E3D000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x59060000 - 0x5906C000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x596B0000 - 0x596EF000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x64660000 - 0x64667000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x64670000 - 0x64759000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x64BA0000 - 0x64C59000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x65460000 - 0x65683000  C:\WINDOWS\system32\nvspcap.dll
 0x65BB0000 - 0x67047000  C:\WINDOWS\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_246e95e4066041ad\nvd3dum.dll
 0x67050000 - 0x67135000  C:\WINDOWS\System32\DriverStore\FileRepository\nv_dispi.inf_amd64_246e95e4066041ad\nvldumd.dll
 0x67140000 - 0x672CF000  C:\WINDOWS\SYSTEM32\d3d9.dll
 0x6E3A0000 - 0x6E3A9000  C:\WINDOWS\SYSTEM32\ktmw32.dll
 0x6E3B0000 - 0x6E6B3000  E:\Games\turtle_client_116\discord_game_sdk.dll
 0x6E6C0000 - 0x6E6DE000  E:\Games\turtle_client_116\DiscordOverlay.dll
 0x6E6E0000 - 0x6E76D000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
 0x6E770000 - 0x6E7E7000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x6F460000 - 0x6F48C000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x6F490000 - 0x6F70E000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
 0x6F710000 - 0x6F7AB000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x6F7B0000 - 0x6F88B000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x70490000 - 0x70552000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x70E70000 - 0x70EE2000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x711B0000 - 0x71449000  C:\WINDOWS\SYSTEM32\msi.dll
 0x71720000 - 0x7173E000  C:\WINDOWS\SYSTEM32\gpapi.dll
 0x71740000 - 0x71840000  C:\WINDOWS\SYSTEM32\drvstore.dll
 0x71840000 - 0x71866000  C:\WINDOWS\SYSTEM32\cryptnet.dll
 0x71A10000 - 0x71AAF000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x724E0000 - 0x72501000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x72510000 - 0x7251D000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x72560000 - 0x7256E000  C:\WINDOWS\SYSTEM32\msasn1.dll
 0x72570000 - 0x72599000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x725A0000 - 0x725B8000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x726F0000 - 0x72714000  C:\WINDOWS\SYSTEM32\Wldp.dll
 0x72740000 - 0x72D4C000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x72D50000 - 0x72D5F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x72D60000 - 0x72D86000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x72D90000 - 0x72E04000  C:\WINDOWS\system32\uxtheme.dll
 0x72F50000 - 0x72F94000  C:\WINDOWS\SYSTEM32\powrprof.dll
 0x73580000 - 0x7358A000  C:\WINDOWS\SYSTEM32\CRYPTBASE.DLL
 0x74130000 - 0x7415F000  C:\WINDOWS\system32\rsaenh.dll
 0x74160000 - 0x74173000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x74180000 - 0x741A4000  C:\WINDOWS\SYSTEM32\devobj.dll
 0x741B0000 - 0x741B8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x74300000 - 0x7431A000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x74320000 - 0x74774000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x74780000 - 0x747A8000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x75550000 - 0x75575000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x757C0000 - 0x757C8000  C:\WINDOWS\SYSTEM32\VERSION.dll
 0x757D0000 - 0x75A4F000  C:\WINDOWS\System32\combase.dll
 0x75A50000 - 0x75AFF000  C:\WINDOWS\System32\COMDLG32.dll
 0x75B00000 - 0x75BD4000  C:\WINDOWS\System32\MSCTF.dll
 0x75BE0000 - 0x75CBC000  C:\WINDOWS\System32\gdi32full.dll
 0x75CD0000 - 0x75D4E000  C:\WINDOWS\System32\clbcatq.dll
 0x75D50000 - 0x75DCB000  C:\WINDOWS\System32\ADVAPI32.dll
 0x75DD0000 - 0x75DF3000  C:\WINDOWS\System32\GDI32.dll
 0x75E00000 - 0x7623B000  C:\WINDOWS\System32\setupapi.dll
 0x76240000 - 0x76330000  C:\WINDOWS\System32\KERNEL32.DLL
 0x76390000 - 0x763DD000  C:\WINDOWS\System32\WINTRUST.DLL
 0x763E0000 - 0x76443000  C:\WINDOWS\System32\WS2_32.dll
 0x764F0000 - 0x76577000  C:\WINDOWS\System32\shcore.dll
 0x76580000 - 0x7663F000  C:\WINDOWS\System32\msvcrt.dll
 0x76640000 - 0x76858000  C:\WINDOWS\System32\KERNELBASE.dll
 0x76860000 - 0x76E16000  C:\WINDOWS\System32\SHELL32.dll
 0x76E20000 - 0x76EDE000  C:\WINDOWS\System32\RPCRT4.dll
 0x76EE0000 - 0x76EF9000  C:\WINDOWS\System32\bcrypt.dll
 0x76F60000 - 0x76FD6000  C:\WINDOWS\System32\sechost.dll
 0x76FE0000 - 0x7705B000  C:\WINDOWS\System32\msvcp_win.dll
 0x77060000 - 0x77085000  C:\WINDOWS\System32\IMM32.dll
 0x77090000 - 0x771B0000  C:\WINDOWS\System32\ucrtbase.dll
 0x771B0000 - 0x77293000  C:\WINDOWS\System32\ole32.dll
 0x772A0000 - 0x7739A000  C:\WINDOWS\System32\CRYPT32.dll
 0x773A0000 - 0x773E5000  C:\WINDOWS\System32\SHLWAPI.dll
 0x77460000 - 0x774F6000  C:\WINDOWS\System32\OLEAUT32.dll
 0x77500000 - 0x77518000  C:\WINDOWS\System32\win32u.dll
 0x77520000 - 0x77539000  C:\WINDOWS\System32\imagehlp.dll
 0x776B0000 - 0x7784C000  C:\WINDOWS\System32\USER32.dll
 0x77850000 - 0x778AF000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x778B0000 - 0x778EB000  C:\WINDOWS\System32\cfgmgr32.dll
 0x77900000 - 0x77AA3000  C:\WINDOWS\SYSTEM32\ntdll.dll
 0x7AA40000 - 0x7AABF000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x7BD90000 - 0x7BE23000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x7C4D0000 - 0x7C5D4000  C:\WINDOWS\SYSTEM32\OPENGL32.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 75B52590)

 75B52590: 8B 78 04 8B  CF FF 15 AC  47 BC 75 FF  D7 8B 7D F4  .x......G.u...}.

Stack: 1024 bytes starting at (ESP = 0019F854)

 * = addr               **                                         *
 0019F850: 30 2F B4 75  40 88 1F 00  90 1D B5 75  10 83 1F 00  0/[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection)....
 0019F860: 00 28 6D 05  02 00 00 00  00 00 00 00  40 88 1F 00  .(m.........@...
 0019F870: 28 42 BA 64  88 F8 19 00  A7 1D B5 75  00 00 00 00  (B.d.......u....
 0019F880: 10 83 1F 00  00 00 00 00  A0 F8 19 00  91 03 C0 64  ...............d
 0019F890: C0 5C E2 00  10 83 1F 00  30 03 C0 64  18 D4 AF 05  .\......0..d....
 0019F8A0: E0 F8 19 00  67 00 B3 75  10 83 1F 00  10 84 1F 00  ....g..u........
 0019F8B0: 68 5C E2 00  C0 6A B0 05  34 00 7C 05  00 00 00 00  h\...j..4.|.....
 0019F8C0: 03 00 00 00  60 FF 19 00  01 00 00 00  B0 F8 19 00  ....`...........
 0019F8D0: 00 00 00 00  10 84 1F 00  10 84 1F 00  2C 84 1F 00  ............,...
 0019F8E0: 30 F9 19 00  C6 43 B3 75  68 5C E2 00  1C F9 19 00  0....C.uh\......
 0019F8F0: 01 00 00 00  18 4B EF 0D  00 00 00 00  00 28 6D 05  .....K.......(m.
 0019F900: C0 6A B0 05  68 5C E2 00  D8 30 E3 00  CE 5D 94 77  .j..h\...0...].w
 0019F910: 00 00 00 00  00 00 00 00  90 F2 B1 75  70 14 B0 75  ...........up..u
 0019F920: 88 26 6D 05  F3 07 B3 06  00 00 00 00  00 00 00 00  .&m.............
 0019F930: 40 F9 19 00  D5 FC B9 75  10 11 DB 00  F3 07 B3 06  @......u........
 0019F940: 64 F9 19 00  18 23 06 77  F3 07 B3 06  88 F9 19 00  d....#.w........
 0019F950: 90 F2 B1 75  68 5C E2 00  D8 30 E3 00  01 00 00 00  ...uh\...0......
 0019F960: 18 4B EF 0D  98 F9 19 00  F5 F1 B1 75  00 00 00 00  .K.........u....
 0019F970: C0 FC B9 75  88 F9 19 00  10 11 DB 00  90 A7 B2 75  ...u...........u
 0019F980: D8 30 E3 00  68 5C E2 00  10 11 DB 00  D8 30 E3 00  .0..h\.......0..
 0019F990: 20 00 00 00  7C 5C E2 00  C8 F9 19 00  34 EF B1 75   ...|\......4..u
 0019F9A0: 10 11 DB 00  68 5C E2 00  08 00 00 80  03 00 00 00  ....h\..........
 0019F9B0: 00 01 00 00  B0 D9 E0 00  01 00 00 00  68 5C E2 00  ............h\..
 0019F9C0: 03 00 00 00  08 00 00 80  D4 F9 19 00  CB ED B1 75  ...............u
 0019F9D0: 00 00 00 00  F4 F9 19 00  BF 5F 06 77  08 00 00 80  ........._.w....
 0019F9E0: 03 00 00 00  08 88 D9 00  00 00 00 00  50 4D 06 77  ............PM.w
 0019F9F0: 03 00 00 00  FC F9 19 00  FD 71 06 77  78 FA 19 00  .........q.wx...
 0019FA00: 62 60 88 75  C8 75 D9 00  00 00 00 00  01 00 00 00  b`.u.u..........
 0019FA10: E8 06 6C 0F  40 59 A9 7A  00 00 00 00  A0 5D DB 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection).....]..
 0019FA20: 10 00 00 00  C8 75 D9 00  00 00 00 00  44 FA 19 00  .....u......D...
 0019FA30: 08 88 D9 00  08 88 D9 00  00 00 00 00  04 00 00 00  ................
 0019FA40: 80 0B A7 7A  5C FA 19 00  28 6B A7 7A  34 08 6C 0F  ...z\...(k.z4.l.
 0019FA50: 98 FA 19 00  04 00 00 00  90 E3 A6 7A  74 FA 19 00  ...........zt...
 0019FA60: BB 72 A7 7A  00 00 00 00  98 FA 19 00  E8 FA 19 00  .r.z............
 0019FA70: 80 72 A7 7A  05 ED 89 A4  88 FA 19 00  05 5C 88 75  .r.z.........\.u
 0019FA80: 40 59 A9 7A  00 00 00 00  CC FA 19 00  64 59 A9 7A  @Y.z........dY.z
 0019FA90: 00 00 00 00  00 00 00 00  E8 06 6C 0F  40 59 A9 7A  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection)
 0019FAA0: 00 00 00 00  E8 06 6C 0F  00 00 00 00  00 00 00 00  ......l.........
 0019FAB0: 4B AB A8 7A  E8 06 6C 0F  C8 05 6C 0F  01 00 00 00  K..z..l...l.....
 0019FAC0: 00 00 00 00  08 00 00 00  18 FB 19 00  18 FB 19 00  ................
 0019FAD0: D3 B3 A8 7A  F8 FA 19 00  01 00 00 00  C8 05 6C 0F  ...z..........l.
 0019FAE0: 00 00 00 00  34 10 A4 7A  00 10 A4 7A  28 08 6C 0F  ....4..z...z(.l.
 0019FAF0: 28 08 6C 0F  01 00 00 00  34 10 A4 7A  00 10 A4 7A  (.l.....4..z...z
 0019FB00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FB10: 28 08 6C 0F  C8 05 6C 0F  30 FB 19 00  8A AB A8 7A  (.l...l.0......z
 0019FB20: 20 00 00 00  00 00 00 00  01 00 00 00  00 00 00 00   ...............
 0019FB30: A4 FD 19 00  52 AC A7 7A  20 00 00 00  01 00 00 00  ....R..z .......
 0019FB40: 54 FB 19 00  FF FF FF FF  00 00 00 00  50 75 45 00  T...........PuE.
 0019FB50: 9C 27 00 00  34 10 A4 7A  00 10 A4 7A  00 00 00 00  .'..4..z...z....
 0019FB60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FB70: 00 00 00 00  91 C9 00 10  01 00 00 00  00 00 00 00  ................
 0019FB80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FB90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FBA0: 60 FF 19 00  76 00 78 00  68 51 90 77  04 00 00 00  `...v.x.hQ.w....
 0019FBB0: 04 00 00 00  01 00 00 00  00 00 00 00  43 3A 5C 57  ............C:\W
 0019FBC0: 49 4E 44 4F  57 53 5C 73  79 73 74 65  6D 33 32 5C  INDOWS\system32\
 0019FBD0: 64 33 64 39  2E 64 6C 6C  00 FD 19 00  53 5B 75 76  d3d9.dll....S[uv
 0019FBE0: FC FB 19 00  70 75 45 00  A6 5B 75 76  7C FD 19 00  ....puE..[uv|...
 0019FBF0: 00 00 00 01  F8 FB 19 00  00 00 65 00  1C 01 00 00  ..........e.....
 0019FC00: 06 00 00 00  02 00 00 00  F0 23 00 00  02 00 00 00  .........#......
 0019FC10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

 ------------------------------------------------------------------------------

any help pls. ty.

## Post 19775 by Crazyhelix — 2022-07-07T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19775#p19775 | page 1 | era: pre-1.18.1 -->

Same problem on my laptop....

## Post 19792 by Fin (Patch Note Conspiracy Theorist) — 2022-07-07T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19792#p19792 | page 1 | era: pre-1.18.1 -->

Hello.

Please contact support on discord  for step by step troubleshooting

