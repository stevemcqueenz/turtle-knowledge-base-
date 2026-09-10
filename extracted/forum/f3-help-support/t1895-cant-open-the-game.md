---
title: "Cant open the game"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1895"
topic_id: 1895
forum_id: 3
forum: "Help & Support"
author: "Darkloud"
author_authority: "player"
posted: "2021-07-21T11:51:00Z"
last_post: "2021-08-21T00:02:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:27:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Cant open the game

## Post 11356 by Darkloud — 2021-07-21T11:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11356#p11356 | page 1 | era: pre-1.18.1 -->

i try to play your server but i have this error trying to open the game. 4gb patch doesnt work
Code: Select all

```
==============================================================================
World of WarCraft (build 5875)

Exe:      F:\Turtle WoW\WoW.exe
Time:     Jul 21, 2021  1:50:26.189 PM
User:     Darkloud
Computer: DARKLOUD_PC
------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	F:\Turtle WoW\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:76362320

The instruction at "0x76362320" referenced memory at "0x628E11D0".
The memory could not be "read".

WoWBuild: 5875
------------------------------------------------------------------------------

----------------------------------------
x86 Registers
----------------------------------------

EAX=628E11CC  EBX=05B02C70  ECX=00000002  EDX=09E6DDE8  ESI=09E62A28
EDI=00000000  EBP=0019ED1C  ESP=0019ECFC  EIP=76362320  FLG=00010206
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

----------------------------------------
Stack Trace (Manual)
----------------------------------------

Address  Frame    Logical addr  Module

76362320 0019ED1C 0001:00051320 C:\WINDOWS\System32\MSCTF.dll
76361B37 0019ED30 0001:00050B37 C:\WINDOWS\System32\MSCTF.dll
645205B1 0019ED48 0001:0005F5B1 C:\WINDOWS\SYSTEM32\textinputframework.dll
76340027 0019ED88 0001:0002F027 C:\WINDOWS\System32\MSCTF.dll
76344386 0019EDD8 0001:00033386 C:\WINDOWS\System32\MSCTF.dll
763AF7C5 0019EDE8 0001:0009E7C5 C:\WINDOWS\System32\MSCTF.dll
76952318 0019EE0C 0001:00001318 C:\WINDOWS\System32\IMM32.dll
7632F1F5 0019EE40 0001:0001E1F5 C:\WINDOWS\System32\MSCTF.dll
7632EF34 0019EE70 0001:0001DF34 C:\WINDOWS\System32\MSCTF.dll
7632EDCB 0019EE7C 0001:0001DDCB C:\WINDOWS\System32\MSCTF.dll
76955FBF 0019EE9C 0001:00004FBF C:\WINDOWS\System32\IMM32.dll
769571FD 0019EEA4 0001:000061FD C:\WINDOWS\System32\IMM32.dll
775083B2 0019EF20 0001:000A73B2 C:\WINDOWS\System32\combase.dll
774CFC23 0019EF28 0001:0006EC23 C:\WINDOWS\System32\combase.dll
5FA5A163 0019F58C 0001:00019163 C:\WINDOWS\SYSTEM32\mscms.dll
5FA5A2D0 0019F5AC 0001:000192D0 C:\WINDOWS\SYSTEM32\mscms.dll
7622EA93 0019F5C0 0001:0007DA93 C:\WINDOWS\System32\gdi32full.dll
57469B64 0019F5D8 0001:000C8B64 C:\WINDOWS\SYSTEM32\d3d9.dll
57472B44 0019FC00 0001:000D1B44 C:\WINDOWS\SYSTEM32\d3d9.dll
57484C64 0019FC20 0001:000E3C64 C:\WINDOWS\SYSTEM32\d3d9.dll
00599E4D 0019FC3C 0001:00198E4D F:\Turtle WoW\WoW.exe
00599681 0019FC8C 0001:00198681 F:\Turtle WoW\WoW.exe
00599CF5 0019FCDC 0001:00198CF5 F:\Turtle WoW\WoW.exe
00591F95 0019FCE8 0001:00190F95 F:\Turtle WoW\WoW.exe
00599B0A 0019FD08 0001:00198B0A F:\Turtle WoW\WoW.exe
00589AF7 0019FD1C 0001:00188AF7 F:\Turtle WoW\WoW.exe
0063A483 0019FD88 0001:00239483 F:\Turtle WoW\WoW.exe
004027EC 0019FED0 0001:000017EC F:\Turtle WoW\WoW.exe
004021E0 0019FEE0 0001:000011E0 F:\Turtle WoW\WoW.exe
0040411E 0019FF70 0001:0000311E F:\Turtle WoW\WoW.exe
7708FA29 0019FF80 0001:0000FA29 C:\WINDOWS\System32\KERNEL32.DLL
77767A7E 0019FFDC 0001:00066A7E C:\WINDOWS\SYSTEM32\ntdll.dll
77767A4E 0019FFEC 0001:00066A4E C:\WINDOWS\SYSTEM32\ntdll.dll

----------------------------------------
Stack Trace (Using DBGHELP.DLL)
----------------------------------------

76362320 MSCTF.dll    TF_IsCtfmonRunning+18496 (0x00000000,0x09E6DAA0,0x00000000,0x0019ED48)

----------------------------------------
Loaded Modules
----------------------------------------

0x00400000 - 0x00D06000  F:\Turtle WoW\WoW.exe
0x02D40000 - 0x02DD6000  F:\Turtle WoW\fmod.dll
0x05D90000 - 0x05EA8000  F:\Turtle WoW\dbghelp.dll
0x10000000 - 0x10069000  F:\Turtle WoW\DivxDecoder.dll
0x53BE0000 - 0x53DFF000  C:\WINDOWS\system32\nvspcap.dll
0x55580000 - 0x5559D000  C:\WINDOWS\SYSTEM32\winmmbase.dll
0x555B0000 - 0x555C9000  C:\WINDOWS\SYSTEM32\MSACM32.dll
0x55720000 - 0x56C4B000  C:\WINDOWS\System32\DriverStore\FileRepository\nvmdi.inf_amd64_9dda6a81a12e6ac4\nvd3dum.dll
0x573A0000 - 0x5752F000  C:\WINDOWS\SYSTEM32\d3d9.dll
0x5D980000 - 0x5D98C000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
0x5FA40000 - 0x5FAD3000  C:\WINDOWS\SYSTEM32\mscms.dll
0x5FAE0000 - 0x5FBBA000  C:\WINDOWS\System32\DriverStore\FileRepository\nvmdi.inf_amd64_9dda6a81a12e6ac4\nvldumd.dll
0x612D0000 - 0x61435000  C:\WINDOWS\SYSTEM32\dcomp.dll
0x61E80000 - 0x61EAC000  C:\WINDOWS\SYSTEM32\dxcore.dll
0x62770000 - 0x62871000  C:\WINDOWS\SYSTEM32\drvstore.dll
0x63B50000 - 0x63C13000  C:\WINDOWS\SYSTEM32\dxgi.dll
0x641A0000 - 0x6423B000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
0x64240000 - 0x644BE000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
0x644C0000 - 0x64579000  C:\WINDOWS\SYSTEM32\textinputframework.dll
0x649A0000 - 0x649AF000  C:\WINDOWS\SYSTEM32\sfc_os.DLL
0x649B0000 - 0x64A1D000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
0x64F30000 - 0x651B4000  C:\WINDOWS\SYSTEM32\AcLayers.DLL
0x653E0000 - 0x6547F000  C:\WINDOWS\SYSTEM32\apphelp.dll
0x66680000 - 0x66683000  C:\WINDOWS\SYSTEM32\sfc.dll
0x68940000 - 0x68966000  C:\WINDOWS\SYSTEM32\cryptnet.dll
0x6B740000 - 0x6B7CD000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1110_none_c0da534e38c01f4d\COMCTL32.dll
0x6C1D0000 - 0x6C2AB000  C:\WINDOWS\SYSTEM32\wintypes.dll
0x6C500000 - 0x6C51E000  C:\WINDOWS\SYSTEM32\gpapi.dll
0x707B0000 - 0x707D6000  C:\WINDOWS\SYSTEM32\dwmapi.dll
0x707E0000 - 0x7080F000  C:\WINDOWS\system32\rsaenh.dll
0x70810000 - 0x70823000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
0x70830000 - 0x708A4000  C:\WINDOWS\system32\uxtheme.dll
0x708B0000 - 0x708C9000  C:\WINDOWS\SYSTEM32\MPR.dll
0x70FD0000 - 0x70FE8000  C:\WINDOWS\SYSTEM32\profapi.dll
0x71D20000 - 0x7217A000  C:\WINDOWS\SYSTEM32\WININET.dll
0x73760000 - 0x73781000  C:\WINDOWS\SYSTEM32\SspiCli.dll
0x73790000 - 0x737B4000  C:\WINDOWS\SYSTEM32\Wldp.dll
0x737F0000 - 0x73DF9000  C:\WINDOWS\SYSTEM32\windows.storage.dll
0x73E00000 - 0x73E24000  C:\WINDOWS\SYSTEM32\devobj.dll
0x73E30000 - 0x73E3E000  C:\WINDOWS\SYSTEM32\msasn1.dll
0x73E40000 - 0x73E69000  C:\WINDOWS\SYSTEM32\ntmarta.dll
0x74700000 - 0x7470F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
0x74810000 - 0x7481A000  C:\WINDOWS\SYSTEM32\CRYPTBASE.DLL
0x74830000 - 0x74858000  C:\WINDOWS\SYSTEM32\WINMM.dll
0x75140000 - 0x753D0000  C:\WINDOWS\SYSTEM32\msi.dll
0x754E0000 - 0x75505000  C:\WINDOWS\SYSTEM32\USERENV.dll
0x75520000 - 0x75528000  C:\WINDOWS\SYSTEM32\VERSION.dll
0x75610000 - 0x756A6000  C:\WINDOWS\System32\OLEAUT32.dll
0x756B0000 - 0x75AE5000  C:\WINDOWS\System32\SETUPAPI.dll
0x75B00000 - 0x75B5F000  C:\WINDOWS\System32\bcryptPrimitives.dll
0x75B60000 - 0x75BE7000  C:\WINDOWS\System32\shcore.dll
0x75BF0000 - 0x761A3000  C:\WINDOWS\System32\SHELL32.dll
0x761B0000 - 0x7628C000  C:\WINDOWS\System32\gdi32full.dll
0x76290000 - 0x7630A000  C:\WINDOWS\System32\ADVAPI32.dll
0x76310000 - 0x763E4000  C:\WINDOWS\System32\MSCTF.dll
0x763F0000 - 0x76510000  C:\WINDOWS\System32\ucrtbase.dll
0x76510000 - 0x765CF000  C:\WINDOWS\System32\RPCRT4.dll
0x765D0000 - 0x76633000  C:\WINDOWS\System32\WS2_32.dll
0x76640000 - 0x76659000  C:\WINDOWS\System32\bcrypt.dll
0x766C0000 - 0x7673B000  C:\WINDOWS\System32\msvcp_win.dll
0x76740000 - 0x767B5000  C:\WINDOWS\System32\sechost.dll
0x76930000 - 0x76948000  C:\WINDOWS\System32\win32u.dll
0x76950000 - 0x76975000  C:\WINDOWS\System32\IMM32.dll
0x76980000 - 0x76A3F000  C:\WINDOWS\System32\msvcrt.dll
0x76A40000 - 0x76BD6000  C:\WINDOWS\System32\USER32.dll
0x76BE0000 - 0x76CE1000  C:\WINDOWS\System32\CRYPT32.dll
0x76D00000 - 0x76D45000  C:\WINDOWS\System32\SHLWAPI.dll
0x76D50000 - 0x76D8B000  C:\WINDOWS\System32\cfgmgr32.dll
0x76DA0000 - 0x76FB4000  C:\WINDOWS\System32\KERNELBASE.dll
0x76FC0000 - 0x7706F000  C:\WINDOWS\System32\COMDLG32.dll
0x77070000 - 0x77160000  C:\WINDOWS\System32\KERNEL32.DLL
0x77160000 - 0x77179000  C:\WINDOWS\System32\imagehlp.dll
0x77270000 - 0x772EE000  C:\WINDOWS\System32\clbcatq.dll
0x772F0000 - 0x77313000  C:\WINDOWS\System32\GDI32.dll
0x77320000 - 0x77403000  C:\WINDOWS\System32\ole32.dll
0x77410000 - 0x77457000  C:\WINDOWS\System32\WINTRUST.DLL
0x77460000 - 0x776E1000  C:\WINDOWS\System32\combase.dll
0x77700000 - 0x778A3000  C:\WINDOWS\SYSTEM32\ntdll.dll
0x77A90000 - 0x77A99000  C:\WINDOWS\SYSTEM32\ktmw32.dll
0x77AA0000 - 0x77AA8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
0x77EA0000 - 0x77EA7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
0x77EB0000 - 0x77EBE000  C:\WINDOWS\SYSTEM32\SortServer2003Compat.dll
0x78E60000 - 0x78ED7000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
0x78F10000 - 0x79013000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
0x790B0000 - 0x790EF000  C:\WINDOWS\SYSTEM32\GLU32.dll
0x793E0000 - 0x796E3000  F:\Turtle WoW\discord_game_sdk.dll
0x79D70000 - 0x79D8E000  F:\Turtle WoW\DiscordOverlay.dll
0x7A080000 - 0x7A169000  C:\WINDOWS\SYSTEM32\DDRAW.dll

----------------------------------------
Memory Dump
----------------------------------------

Code: 16 bytes starting at (EIP = 76362320)

76362320: 8B 78 04 8B  CF FF 15 AC  47 3D 76 FF  D7 8B 7D F4  .x......G=v...}.

Stack: 1024 bytes starting at (ESP = 0019ECFC)

* = addr                                         **                       *
0019ECF0: 20 89 31 76  68 FE 7B 0E  B0 2A 35 76  28 2A E6 09   .1vh.{..*5v(*..
0019ED00: 20 1B 36 76  A0 DA E6 09  78 F6 72 0E  02 00 00 00   .6v....x.r.....
0019ED10: 00 00 00 00  28 2A E6 09  28 42 4C 64  30 ED 19 00  ....(*..(BLd0...
0019ED20: 37 1B 36 76  00 00 00 00  A0 DA E6 09  00 00 00 00  7.6v............
0019ED30: 48 ED 19 00  B1 05 52 64  C8 2C B0 05  A0 DA E6 09  H.....Rd.,......
0019ED40: 50 05 52 64  20 D9 60 0E  88 ED 19 00  27 00 34 76  P.Rd .`.....'.4v
0019ED50: A0 DA E6 09  E0 DB E6 09  70 2C B0 05  D0 BF 85 05  ........p,......
0019ED60: 34 00 DB 09  00 00 00 00  03 00 00 00  80 F5 19 00  4...............
0019ED70: 01 00 00 00  58 ED 19 00  00 00 00 00  E0 DB E6 09  ....X...........
0019ED80: E0 DB E6 09  FC DB E6 09  D8 ED 19 00  86 43 34 76  .............C4v
0019ED90: 70 2C B0 05  C4 ED 19 00  01 00 00 00  50 E7 26 0A  p,..........P.&.
0019EDA0: 00 00 00 00  78 F6 72 0E  D0 BF 85 05  70 2C B0 05  ....x.r.....p,..
0019EDB0: 10 BC 7B 05  10 BC 7B 05  90 F2 32 76  00 00 00 00  ..{...{...2v....
0019EDC0: 50 E7 26 0A  70 14 31 76  20 BD B0 05  BB 06 42 00  P.&.p.1v .....B.
0019EDD0: 00 00 00 00  00 00 00 00  E8 ED 19 00  C5 F7 3A 76  ..............:v
0019EDE0: 78 77 80 05  BB 06 42 00  0C EE 19 00  18 23 95 76  xw....B......#.v
0019EDF0: BB 06 42 00  30 EE 19 00  90 F2 32 76  70 2C B0 05  ..B.0.....2vp,..
0019EE00: 10 BC 7B 05  01 00 00 00  50 E7 26 0A  40 EE 19 00  ..{.....P.&.@...
0019EE10: F5 F1 32 76  00 00 00 00  B0 F7 3A 76  30 EE 19 00  ..2v......:v0...
0019EE20: 78 77 80 05  90 A7 33 76  10 BC 7B 05  70 2C B0 05  xw....3v..{.p,..
0019EE30: 78 77 80 05  10 BC 7B 05  20 00 00 00  84 2C B0 05  xw....{. ....,..
0019EE40: 70 EE 19 00  34 EF 32 76  78 77 80 05  70 2C B0 05  p...4.2vxw..p,..
0019EE50: 08 00 00 80  03 00 00 00  00 01 00 00  70 1B B0 05  ............p...
0019EE60: 01 00 00 00  70 2C B0 05  03 00 00 00  08 00 00 80  ....p,..........
0019EE70: 7C EE 19 00  CB ED 32 76  00 00 00 00  9C EE 19 00  |.....2v........
0019EE80: BF 5F 95 76  08 00 00 80  03 00 00 00  E0 64 7A 05  ._.v.........dz.
0019EE90: 00 00 00 00  50 4D 95 76  03 00 00 00  A4 EE 19 00  ....PM.v........
0019EEA0: FD 71 95 76  20 EF 19 00  B2 83 50 77  D8 01 82 05  .q.v .....Pw....
0019EEB0: 00 00 00 00  01 00 00 00  74 EF 19 00  A4 F5 19 00  ........t.......
0019EEC0: 04 0F 01 69  B0 AF 81 05  06 00 00 00  D8 01 82 05  ...i............
0019EED0: 00 00 00 80  00 00 00 00  E0 64 7A 05  E0 64 7A 05  .........dz..dz.
0019EEE0: 00 00 00 00  02 00 40 41  00 00 10 00  00 10 00 00  ......@A........
0019EEF0: 00 00 10 00  00 10 00 00  00 00 00 00  10 00 00 00  ................
0019EF00: 30 7F 0C 00  45 02 00 00  B4 F7 0C 00  94 02 00 00  0...E...........
0019EF10: 00 40 0D 00  73 06 00 00  00 00 00 00  7C 9B A3 43  [email protected].......|..C
0019EF20: 28 EF 19 00  23 FC 4C 77  8C F5 19 00  63 A1 A5 5F  (...#.Lw....c.._
0019EF30: 01 00 00 00  D0 A4 11 82  A4 F5 19 00  44 4A A4 5F  ............DJ._
0019EF40: E0 9B 6B 0E  00 00 00 00  00 00 00 00  00 00 00 00  ..k.............
0019EF50: 58 33 0C 00  40 00 00 00  00 00 00 00  18 D9 B1 05  X3..@...........
0019EF60: 00 F0 0C 00  E5 CB 58 78  19 52 15 4C  BC 46 50 72  ......Xx.R.L.FPr
0019EF70: B5 EB B0 87  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EF80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EF90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EFA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EFB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EFC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EFD0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EFE0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019EFF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F000: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F010: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F020: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F030: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F040: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F050: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F060: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F070: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F080: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F090: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F0A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F0B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F0C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F0D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F0E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019F0F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

------------------------------------------------------------------------------

======================================================================
Hardware/Driver Information:
Processor:              0x0
Page Size:              4096
Min App Address:        0x10000
Max App Address:        0xfffeffff
Processor Mask:         0xff
Number of Processors:   8
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        6
Processor Revision:     40457

Percent memory used:    50
Total physical memory:  1073741823
Free Memory:            1073741823
Page file:              2147483647
Total virtual memory:   -131072
```

## Post 11735 by Ejohnson — 2021-08-20T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11735#p11735 | page 1 | era: pre-1.18.1 -->

I'm getting this same problem all of a sudden. Seemed to start happening after increasing memory for the addons that were complaining, specifically the quest addon from turtle-wow, pfQuest I think it's called. Tried deleting WDB, disabling addons, and it just locks up and crashes and gives the fatal error that OP posted above.

Unable to play now which is very unfortunate, I was really enjoying the server

## Post 11738 by Ejohnson — 2021-08-21T00:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11738#p11738 | page 1 | era: pre-1.18.1 -->

Resolved: I disabled my addons, and increased my graphics settings back to maximum for the most part and so far everything is fine again. I will put the addons back in one at a time and see if they had much impact, but it seems having too many quests contributed to the memory issue, but I can't say for sure..

Specs, if it helps: amd 3600x CPU, 16 GB RAM, GTX 1080, nvme SSD

