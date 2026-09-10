---
title: "Critical Error on start up."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1193"
topic_id: 1193
forum_id: 3
forum: "Help & Support"
author: "Luuc"
author_authority: "player"
posted: "2020-07-23T07:27:00Z"
last_post: "2020-07-23T07:29:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:29:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Critical Error on start up.

## Post 7022 by Luuc — 2020-07-23T07:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7022#p7022 | page 1 | era: pre-1.18.1 -->

A friend wanted me to play and I downloaded the Client from the link on your website as well as the realmlist.wtf file.
When I click play this happens  dead_turtle_head

Crash Dump:

=============================================================================
World of WarCraft (build 5875)

Exe:      C:\Program Files (x86)\Turtle WoW\WoW.exe
Time:     Jul 23, 2020  3:24:32.788 AM
User:     daves
Computer: DESKTOP
 ------------------------------------------------------------------------------

This application has encountered a critical error:

The operation completed successfully.

Program:	C:\Program Files (x86)\Turtle WoW\WoW.exe
File:	Data\terrain.MPQ

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 00651E1B 0019E82C 0001:00250E1B C:\Program Files (x86)\Turtle WoW\WoW.exe
 00655D81 0019F86C 0001:00254D81 C:\Program Files (x86)\Turtle WoW\WoW.exe
 00655A2C 0019FAE4 0001:00254A2C C:\Program Files (x86)\Turtle WoW\WoW.exe
 0065568C 0019FB04 0001:0025468C C:\Program Files (x86)\Turtle WoW\WoW.exe
 00648E34 0019FB24 0001:00247E34 C:\Program Files (x86)\Turtle WoW\WoW.exe
 00403B3F 0019FC4C 0001:00002B3F C:\Program Files (x86)\Turtle WoW\WoW.exe
 004038C1 0019FD80 0001:000028C1 C:\Program Files (x86)\Turtle WoW\WoW.exe
 0040236B 0019FED0 0001:0000136B C:\Program Files (x86)\Turtle WoW\WoW.exe
 004021E0 0019FEE0 0001:000011E0 C:\Program Files (x86)\Turtle WoW\WoW.exe
 0040411E 0019FF70 0001:0000311E C:\Program Files (x86)\Turtle WoW\WoW.exe
 76D6F989 0019FF80 0001:0000F989 C:\WINDOWS\System32\KERNEL32.DLL
 76EE7084 0019FFDC 0001:00066084 C:\WINDOWS\SYSTEM32\ntdll.dll
 76EE7054 0019FFEC 0001:00066054 C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D06000  C:\Program Files (x86)\Turtle WoW\WoW.exe
 0x028F0000 - 0x02986000  C:\Program Files (x86)\Turtle WoW\fmod.dll
 0x041F0000 - 0x04308000  C:\Program Files (x86)\Turtle WoW\dbghelp.dll
 0x10000000 - 0x10069000  C:\Program Files (x86)\Turtle WoW\DivxDecoder.dll
 0x637A0000 - 0x637BD000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x637C0000 - 0x637D9000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x63B90000 - 0x63BCF000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x64830000 - 0x64930000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x66680000 - 0x66683000  C:\WINDOWS\SYSTEM32\sfc.dll
 0x6B090000 - 0x6B152000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x6BCD0000 - 0x6BD63000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x6CA30000 - 0x6CA3F000  C:\WINDOWS\SYSTEM32\sfc_os.DLL
 0x6CA40000 - 0x6CAAD000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x6CAB0000 - 0x6CAC9000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x6CAD0000 - 0x6CD53000  C:\WINDOWS\SYSTEM32\AcLayers.DLL
 0x6D3B0000 - 0x6D3BC000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x6D460000 - 0x6D484000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x6DCC0000 - 0x6DD5F000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x6DF70000 - 0x6E3C8000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x6F990000 - 0x6F9A0000  C:\Program Files\Avast Software\Avast\x86\aswhook.dll
 0x71650000 - 0x71679000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x717B0000 - 0x717D1000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x742C0000 - 0x742E8000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x743A0000 - 0x7442D000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.1_none_92e69152510a8cb1\COMCTL32.dll
 0x74430000 - 0x744A4000  C:\WINDOWS\system32\uxtheme.dll
 0x74520000 - 0x7452F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x745E0000 - 0x745E8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x747A0000 - 0x747C5000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x74D60000 - 0x74DDB000  C:\WINDOWS\System32\msvcp_win.dll
 0x74EC0000 - 0x75053000  C:\WINDOWS\System32\USER32.dll
 0x75060000 - 0x75079000  C:\WINDOWS\System32\bcrypt.dll
 0x75080000 - 0x750F9000  C:\WINDOWS\System32\ADVAPI32.dll
 0x75100000 - 0x75313000  C:\WINDOWS\System32\KERNELBASE.dll
 0x75320000 - 0x753B6000  C:\WINDOWS\System32\OLEAUT32.dll
 0x753C0000 - 0x7546F000  C:\WINDOWS\System32\COMDLG32.dll
 0x75470000 - 0x75495000  C:\WINDOWS\System32\IMM32.dll
 0x754A0000 - 0x75503000  C:\WINDOWS\System32\WS2_32.dll
 0x75510000 - 0x75630000  C:\WINDOWS\System32\ucrtbase.dll
 0x75630000 - 0x75648000  C:\WINDOWS\System32\win32u.dll
 0x757D0000 - 0x75D79000  C:\WINDOWS\System32\SHELL32.dll
 0x75DE0000 - 0x75E55000  C:\WINDOWS\System32\sechost.dll
 0x75E60000 - 0x75F1A000  C:\WINDOWS\System32\RPCRT4.dll
 0x75F20000 - 0x761A0000  C:\WINDOWS\System32\combase.dll
 0x762A0000 - 0x762DB000  C:\WINDOWS\System32\cfgmgr32.dll
 0x762E0000 - 0x763BA000  C:\WINDOWS\System32\gdi32full.dll
 0x763F0000 - 0x764AF000  C:\WINDOWS\System32\msvcrt.dll
 0x764B0000 - 0x76593000  C:\WINDOWS\System32\ole32.dll
 0x76820000 - 0x768A7000  C:\WINDOWS\System32\shcore.dll
 0x768C0000 - 0x76905000  C:\WINDOWS\System32\SHLWAPI.dll
 0x76910000 - 0x76D44000  C:\WINDOWS\System32\SETUPAPI.dll
 0x76D50000 - 0x76E40000  C:\WINDOWS\System32\KERNEL32.DLL
 0x76E40000 - 0x76E63000  C:\WINDOWS\System32\GDI32.dll
 0x76E80000 - 0x77022000  C:\WINDOWS\SYSTEM32\ntdll.dll
 0x7A4C0000 - 0x7A53C000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x7A7C0000 - 0x7A8A9000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x7A8B0000 - 0x7A8B7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x7B380000 - 0x7B617000  C:\WINDOWS\SYSTEM32\msi.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Stack: 1024 bytes starting at (ESP = 0019DA4C)

 * = addr                                         **                       *
 0019DA40: 40 23 00 00  CC BD 66 00  4C DA 19 00  40 23 00 00  @#....f.L...@#..
 0019DA50: 39 DC 19 00  00 00 00 00  4C DA 19 00  64 DA 19 00  9.......L...d...
 0019DA60: CC BD 66 00  78 DA 19 00  B8 DC 64 00  40 23 00 00  ..f.x.....d.@#..
 0019DA70: 03 00 00 00  00 00 00 00  F4 E7 19 00  42 D5 64 00  ............B.d.
 0019DA80: 00 00 00 00  02 00 00 00  4C AF 7C 41  00 00 00 00  ........L.|A....
 0019DA90: 1C EB 19 00  00 00 00 00  A0 DA 19 00  08 00 00 00  ................
 0019DAA0: 01 00 00 00  00 00 00 00  4D 00 33 00  32 00 5C 00  ........M.3.2.\.
 0019DAB0: 6B 00 65 00  72 00 6E 00  65 00 6C 00  62 00 61 00  k.e.r.n.e.l.b.a.
 0019DAC0: 73 00 65 00  2E 00 64 00  6C 00 6C 00  00 00 00 00  s.e...d.l.l.....
 0019DAD0: 00 00 00 00  20 00 00 00  26 00 03 00  78 DB 19 00  .... ...&...x...
 0019DAE0: 7C 40 05 01  70 DB 19 00  95 55 EC 76  68 00 00 00  |@..p....U.vh...
 0019DAF0: 20 00 00 00  00 00 00 00  00 00 03 01  00 00 00 00   ...............
 0019DB00: 00 00 00 00  0C 16 EF 76  39 11 99 6F  2C DC 19 00  .......v9..o,...
 0019DB10: 00 00 10 80  4C DB 19 00  44 DB 19 00  00 00 00 00  ....L...D.......
 0019DB20: 80 00 00 00  03 00 00 00  01 00 00 00  A4 51 F0 76  .............Q.v
 0019DB30: 78 45 05 01  00 00 03 01  2C DC 19 00  00 00 00 00  xE......,.......
 0019DB40: 65 12 99 6F  00 00 00 00  00 00 00 00  18 00 00 00  e..o............
 0019DB50: 64 00 00 00  00 00 00 00  50 3C 05 01  1A 00 00 00  d.......P<......
 0019DB60: 00 00 00 00  25 00 1A 00  68 40 05 01  78 45 05 01  ....%[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection)..
 0019DB70: 40 3C 05 01  00 00 03 01  41 00 76 00  98 DB 19 00  @<......A.v.....
 0019DB80: 86 86 EC 76  00 00 00 00  00 00 00 00  00 00 00 00  ...v............
 0019DB90: 54 68 69 73  20 61 70 70  6C 69 63 61  74 69 6F 6E  This application
 0019DBA0: 20 68 61 73  20 65 6E 63  6F 75 6E 74  65 72 65 64   has encountered
 0019DBB0: 20 61 20 63  72 69 74 69  63 61 6C 20  65 72 72 6F   a critical erro
 0019DBC0: 72 3A 0A 0A  54 68 65 20  6F 70 65 72  61 74 69 6F  r:..The operatio
 0019DBD0: 6E 20 63 6F  6D 70 6C 65  74 65 64 20  73 75 63 63  n completed succ
 0019DBE0: 65 73 73 66  75 6C 6C 79  2E 0D 0A 0A  50 72 6F 67  essfully....Prog
 0019DBF0: 72 61 6D 3A  09 43 3A 5C  50 72 6F 67  72 61 6D 20  ram:.C:\Program
 0019DC00: 46 69 6C 65  73 20 28 78  38 36 29 5C  54 75 72 74  Files (x86)\Turt
 0019DC10: 6C 65 20 57  6F 57 5C 57  6F 57 2E 65  78 65 0A 46  le WoW\WoW.exe.F
 0019DC20: 69 6C 65 3A  09 44 61 74  61 5C 74 65  72 72 61 69  ile:.Data\terrai
 0019DC30: 6E 2E 4D 50  51 0A 0A 0A  0A 00 19 00  5D 9C 66 00  n.MPQ.......].f.
 0019DC40: 78 F5 19 00  D4 99 66 00  D1 F5 19 00  FF 00 00 00  x.....f.........
 0019DC50: 64 F4 19 00  40 FB 19 00  CC F5 19 00  04 01 00 00  d...@...........
 0019DC60: 00 00 00 00  CD ED 82 00  02 00 00 00  00 00 00 00  ................
 0019DC70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DC80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DC90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DCA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DCB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DCC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DCD0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DCE0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DCF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DD90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DDA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DDB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DDC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DDD0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DDE0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DDF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DE00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DE10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DE20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DE30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019DE40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

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
Processor Revision:     28928

Percent memory used:    47
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576

## Post 7023 by Luuc — 2020-07-23T07:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7023#p7023 | page 1 | era: pre-1.18.1 -->

Ok Disregard this.  WoW.exe needs to be run as administrator.  Once I did that it works fine.

