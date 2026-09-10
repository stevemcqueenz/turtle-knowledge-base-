---
title: "SW Harbour crashing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3089"
topic_id: 3089
forum_id: 3
forum: "Help & Support"
author: "Masturbek"
author_authority: "player"
posted: "2022-06-01T20:16:00Z"
last_post: "2022-10-04T08:10:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:20:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# SW Harbour crashing

## Post 18954 by Masturbek — 2022-06-01T20:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18954#p18954 | page 1 | era: pre-1.18.1 -->

SW Harbour crashing. what should i do? Code: Select all

```
This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AACE

The instruction at "0x0071AACE" referenced memory at "0x20937210".
The memory could not be "read".

WoWBuild: 5875
------------------------------------------------------------------------------

----------------------------------------
x86 Registers
----------------------------------------

EAX=20937210  EBX=14C714C6  ECX=14C714C6  EDX=20934010  ESI=00000003
EDI=20BECD2C  EBP=0018C7FC  ESP=0018C7BC  EIP=0071AACE  FLG=00010202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

----------------------------------------
Stack Trace (Manual)
----------------------------------------

Address  Frame    Logical addr  Module

0071AACE 0018C7FC 0001:00319ACE C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
00719C14 0018C820 0001:00318C14 C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0070CF08 0018C84C 0001:0030BF08 C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0070B62C 0018C8E0 0001:0030A62C C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0070896E 0018FC5C 0001:0030796E C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0048370C 0018FC9C 0001:0008270C C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
00482E7A 0018FD28 0001:00081E7A C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0076FC31 0018FD44 0001:0036EC31 C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
007658E7 0018FD68 0001:003648E7 C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0076434C 0018FD74 0001:0036334C C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0044264E 0018FE3C 0001:0004164E C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
004246B0 0018FE70 0001:000236B0 C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0042106F 0018FEE0 0001:0002006F C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
00420BF1 0018FEF8 0001:0001FBF1 C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0040411E 0018FF88 0001:0000311E C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
75BD339A 0018FF94 0001:0000339A C:\Windows\syswow64\kernel32.dll
77DB9ED2 0018FFD4 0001:00029ED2 C:\Windows\SysWOW64\ntdll.dll
77DB9EA5 0018FFEC 0001:00029EA5 C:\Windows\SysWOW64\ntdll.dll

----------------------------------------
Stack Trace (Using DBGHELP.DLL)
----------------------------------------

0071AACE WoW.exe      <unknown symbol>+0 (0x10AE1F00,0x27FBC248,0x0018C900,0x00000000)

----------------------------------------
Loaded Modules
----------------------------------------

0x002B0000 - 0x00346000  C:\Users\user\Downloads\Turtle WoW 1.16.0\fmod.dll
0x00400000 - 0x00D06000  C:\Users\user\Downloads\Turtle WoW 1.16.0\WoW.exe
0x10000000 - 0x10069000  C:\Users\user\Downloads\Turtle WoW 1.16.0\DivxDecoder.dll
0x19EC0000 - 0x19FD8000  C:\Users\user\Downloads\Turtle WoW 1.16.0\dbghelp.dll
0x66630000 - 0x66682000  C:\Windows\system32\RASAPI32.dll
0x666D0000 - 0x666E5000  C:\Windows\system32\rasman.dll
0x68440000 - 0x692EC000  C:\Windows\system32\nvd3dum.dll
0x6A1F0000 - 0x6A1FD000  C:\Windows\system32\rtutils.dll
0x6B5C0000 - 0x6B783000  C:\Windows\system32\d3d9.dll
0x6C0A0000 - 0x6C3A3000  C:\Users\user\Downloads\Turtle WoW 1.16.0\discord_game_sdk.dll
0x6D150000 - 0x6D35E000  C:\Windows\system32\nvspcap.dll
0x6D360000 - 0x6D42C000  C:\Program Files (x86)\NVIDIA Corporation\3D Vision\nvSCPAPI.dll
0x6EF40000 - 0x6F035000  C:\Windows\System32\PROPSYS.dll
0x6FCB0000 - 0x6FCEF000  C:\Windows\SysWOW64\schannel.dll
0x71110000 - 0x71118000  C:\Windows\system32\Secur32.dll
0x71120000 - 0x711A4000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.7601.17514_none_ec83dffa859149af\COMCTL32.dll
0x713B0000 - 0x713B6000  C:\Windows\system32\rasadhlp.dll
0x713C0000 - 0x713F8000  C:\Windows\System32\fwpuclnt.dll
0x71400000 - 0x7140D000  C:\Windows\system32\wshbth.dll
0x71410000 - 0x71418000  C:\Windows\System32\winrnr.dll
0x71420000 - 0x71432000  C:\Windows\system32\pnrpnsp.dll
0x71440000 - 0x71467000  C:\Program Files (x86)\Common Files\Microsoft Shared\Windows Live\WLIDNSP.DLL
0x71560000 - 0x71570000  C:\Windows\system32\napinsp.dll
0x71570000 - 0x71580000  C:\Windows\system32\NLAapi.dll
0x71580000 - 0x71593000  C:\Windows\system32\dwmapi.dll
0x715D0000 - 0x715D7000  C:\Windows\system32\WSOCK32.dll
0x715E0000 - 0x715E6000  C:\Windows\system32\sensapi.dll
0x71920000 - 0x71926000  C:\Windows\System32\wship6.dll
0x71930000 - 0x71938000  C:\Windows\system32\credssp.dll
0x71940000 - 0x71945000  C:\Windows\System32\wshtcpip.dll
0x71950000 - 0x7198C000  C:\Windows\system32\mswsock.dll
0x71990000 - 0x719B5000  C:\Windows\system32\powrprof.dll
0x71D00000 - 0x71D1C000  C:\Windows\system32\cryptnet.dll
0x71D20000 - 0x71D36000  C:\Windows\system32\GPAPI.dll
0x71DD0000 - 0x71E50000  C:\Windows\system32\UxTheme.dll
0x72530000 - 0x7256D000  C:\Windows\SysWOW64\bcryptprimitives.dll
0x72580000 - 0x727C0000  C:\Windows\system32\msi.dll
0x727D0000 - 0x7296E000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_6.0.7601.17514_none_41e6975e2bd6f2b2\comctl32.dll
0x729E0000 - 0x729E6000  C:\Windows\system32\d3d8thk.dll
0x72BD0000 - 0x72BEC000  C:\Windows\system32\iphlpapi.DLL
0x72BF0000 - 0x72C22000  C:\Windows\system32\WINMM.dll
0x72C30000 - 0x72C47000  C:\Windows\system32\bcrypt.dll
0x72C50000 - 0x72C71000  C:\Windows\system32\ntmarta.dll
0x72C80000 - 0x72C83000  C:\Windows\system32\api-ms-win-core-synch-l1-2-0.DLL
0x72CC0000 - 0x72D04000  C:\Windows\system32\dnsapi.DLL
0x72D10000 - 0x72D22000  C:\Windows\system32\MPR.dll
0x72D90000 - 0x72D9B000  C:\Windows\system32\profapi.dll
0x72DA0000 - 0x72DB7000  C:\Windows\system32\USERENV.dll
0x72E50000 - 0x72E9C000  C:\Windows\system32\apphelp.dll
0x72EA0000 - 0x72EA9000  C:\Windows\system32\VERSION.dll
0x72F60000 - 0x72F67000  C:\Windows\system32\WINNSI.DLL
0x72F70000 - 0x72FA8000  C:\Windows\system32\ncrypt.dll
0x72FB0000 - 0x72FEB000  C:\Windows\system32\rsaenh.dll
0x72FF0000 - 0x73007000  C:\Windows\system32\CRYPTSP.dll
0x73FA0000 - 0x73FD0000  C:\Windows\system32\wdmaud.drv
0x740F0000 - 0x740F7000  C:\Windows\system32\midimap.dll
0x74100000 - 0x74136000  C:\Windows\system32\AUDIOSES.DLL
0x74140000 - 0x74179000  C:\Windows\System32\MMDevApi.dll
0x74180000 - 0x741F2000  C:\Windows\system32\dsound.dll
0x74200000 - 0x74279000  C:\Windows\system32\mscms.dll
0x74280000 - 0x742FB000  C:\Windows\AppPatch\AcSpecfc.DLL
0x743E0000 - 0x743E8000  C:\Windows\system32\msacm32.drv
0x743F0000 - 0x743F7000  C:\Windows\system32\AVRT.dll
0x74400000 - 0x7441E000  C:\Users\user\Downloads\Turtle WoW 1.16.0\DiscordOverlay.dll
0x74420000 - 0x74424000  C:\Windows\system32\ksuser.dll
0x74430000 - 0x74439000  C:\Windows\system32\ktmw32.dll
0x74440000 - 0x7444D000  C:\Windows\system32\sfc_os.DLL
0x74450000 - 0x74453000  C:\Windows\system32\sfc.dll
0x74460000 - 0x7446F000  C:\Windows\system32\samcli.dll
0x74480000 - 0x74698000  C:\Windows\AppPatch\AcGenral.DLL
0x746A0000 - 0x746B4000  C:\Windows\system32\MSACM32.dll
0x746C0000 - 0x746C6000  C:\Windows\system32\DCIMAN32.dll
0x746D0000 - 0x747B7000  C:\Windows\system32\DDRAW.dll
0x747C0000 - 0x747E2000  C:\Windows\system32\GLU32.dll
0x747F0000 - 0x748B8000  C:\Windows\system32\OPENGL32.dll
0x75450000 - 0x7545C000  C:\Windows\syswow64\CRYPTBASE.dll
0x75460000 - 0x754C0000  C:\Windows\syswow64\SspiCli.dll
0x754C0000 - 0x75560000  C:\Windows\syswow64\ADVAPI32.dll
0x75560000 - 0x75572000  C:\Windows\syswow64\DEVOBJ.dll
0x755E0000 - 0x7577D000  C:\Windows\syswow64\SETUPAPI.dll
0x75780000 - 0x75803000  C:\Windows\syswow64\CLBCatQ.DLL
0x75810000 - 0x75920000  C:\Windows\syswow64\urlmon.dll
0x75920000 - 0x75977000  C:\Windows\syswow64\SHLWAPI.dll
0x75980000 - 0x75A80000  C:\Windows\syswow64\USER32.dll
0x75A80000 - 0x75AFB000  C:\Windows\syswow64\COMDLG32.dll
0x75B00000 - 0x75B8F000  C:\Windows\syswow64\OLEAUT32.dll
0x75B90000 - 0x75B95000  C:\Windows\syswow64\PSAPI.DLL
0x75BA0000 - 0x75BAC000  C:\Windows\syswow64\MSASN1.dll
0x75BB0000 - 0x75BB6000  C:\Windows\syswow64\NSI.dll
0x75BC0000 - 0x75CD0000  C:\Windows\syswow64\kernel32.dll
0x75CD0000 - 0x75E2C000  C:\Windows\syswow64\ole32.dll
0x75E30000 - 0x75F20000  C:\Windows\syswow64\RPCRT4.dll
0x75F20000 - 0x75F47000  C:\Windows\syswow64\CFGMGR32.dll
0x75F50000 - 0x76B9A000  C:\Windows\syswow64\SHELL32.dll
0x76BA0000 - 0x76C6C000  C:\Windows\syswow64\MSCTF.dll
0x76C70000 - 0x76CA5000  C:\Windows\syswow64\WS2_32.dll
0x76CB0000 - 0x76CC9000  C:\Windows\SysWOW64\sechost.dll
0x76CD0000 - 0x76D6D000  C:\Windows\syswow64\USP10.dll
0x76D70000 - 0x76E8A000  C:\Windows\syswow64\WININET.dll
0x76E90000 - 0x76ED5000  C:\Windows\syswow64\WLDAP32.dll
0x76EE0000 - 0x76F26000  C:\Windows\syswow64\KERNELBASE.dll
0x76F30000 - 0x76F5F000  C:\Windows\syswow64\WINTRUST.DLL
0x76F60000 - 0x76F63000  C:\Windows\syswow64\Normaliz.dll
0x76F70000 - 0x77000000  C:\Windows\syswow64\GDI32.dll
0x77000000 - 0x77060000  C:\Windows\syswow64\IMM32.dll
0x770F0000 - 0x772A8000  C:\Windows\syswow64\iertutil.dll
0x772B0000 - 0x7735C000  C:\Windows\syswow64\msvcrt.dll
0x77360000 - 0x7738A000  C:\Windows\syswow64\imagehlp.dll
0x77390000 - 0x774B1000  C:\Windows\system32\crypt32.dll
0x77D50000 - 0x77D5A000  C:\Windows\syswow64\LPK.dll
0x77D80000 - 0x77F00000  C:\Windows\SysWOW64\ntdll.dll

----------------------------------------
Memory Dump
----------------------------------------

Code: 16 bytes starting at (EIP = 0071AACE)

0071AACE: 0F 28 00 0F  59 C4 0F 28  48 10 0F 59  CC 0F 28 50  .(..Y..(H..Y..(P

Stack: 1024 bytes starting at (ESP = 0018C7BC)

* = addr                                         **                       *
0018C7B0: 00 18 00 00  08 AA B8 03  08 C0 B8 03  08 A8 B5 20  ...............
0018C7C0: 08 AA B8 03  2C CD BE 20  C6 00 00 00  14 00 00 00  ....,.. ........
0018C7D0: C7 00 00 00  14 00 00 00  00 32 00 00  00 05 00 00  .........2......
0018C7E0: 40 32 00 00  00 05 00 00  00 1F AE 10  10 40 93 20  @2...........@.
0018C7F0: 10 00 78 2B  31 05 2E 2C  C8 14 C9 14  20 C8 18 00  ..x+1..,.... ...
0018C800: 14 9C 71 00  00 1F AE 10  48 C2 FB 27  00 C9 18 00  ..q.....H..'....
0018C810: 00 00 00 00  00 C9 18 00  00 00 00 00  08 AA B8 03  ................
0018C820: 4C C8 18 00  08 CF 70 00  00 00 00 00  A0 1E AE 10  L.....p.........
0018C830: 14 00 00 00  00 C9 18 00  00 00 00 00  03 00 00 00  ................
0018C840: 9C 00 00 00  0C 06 00 00  97 01 00 00  E0 C8 18 00  ................
0018C850: 2C B6 70 00  01 00 00 00  08 80 EB 0B  88 E8 D5 19  ,.p.............
0018C860: B1 AF A2 3E  7A 97 23 3E  42 43 6F 3F  00 00 00 00  ...>z.#>BCo?....
0018C870: A4 BB 72 BF  8D 49 5B 3D  46 5C A0 3E  00 00 00 00  ..r..I[=F\.>....
0018C880: A2 56 15 31  10 57 7C 3F  7B 88 2C BE  00 00 00 00  .V.1.W|?{.,.....
0018C890: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
0018C8A0: 00 00 00 00  00 00 00 00  00 00 00 00  49 41 40 00  ............IA@.
0018C8B0: 00 00 00 00  F4 C8 18 00  49 41 40 00  00 00 00 00  ........IA@.....
0018C8C0: 00 C9 18 00  A0 CA 18 00  EC C8 18 00  A5 B1 70 00  ..............p.
0018C8D0: A0 CA 18 00  EC C8 18 00  27 B2 70 00  00 00 00 00  ........'.p.....
0018C8E0: 5C FC 18 00  6E 89 70 00  01 00 00 00  08 80 FB 27  \...n.p........'
0018C8F0: 08 68 1D 12  9A 00 00 00  08 00 08 0C  08 80 EB 0B  .h..............
0018C900: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
0018C910: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........
0018C920: 00 00 00 00  00 00 00 00  00 00 80 3F  00 00 00 00  ...........?....
0018C930: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
0018C940: 08 80 EB 0B  B0 EF CE 00  10 00 78 2B  01 00 00 00  ..........x+....
0018C950: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C960: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C970: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C980: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C990: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C9A0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C9B0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C9C0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C9D0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C9E0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018C9F0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CA90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CAA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CAB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CAC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CAD0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CAE0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CAF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB70: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CB90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CBA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0018CBB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

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
Processor Revision:     10759

Percent memory used:    57
Total physical memory:  -19021824
Free Memory:            1800798208
```

Page file:              -1
Total virtual memory:   2147352576

## Post 26691 by Icyexploit — 2022-10-04T08:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26691#p26691 | page 1 | era: pre-1.18.1 -->

i have crash too. 3 round

