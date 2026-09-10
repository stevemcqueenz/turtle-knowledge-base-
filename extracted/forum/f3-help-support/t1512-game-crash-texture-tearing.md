---
title: "Game crash & Texture Tearing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1512"
topic_id: 1512
forum_id: 3
forum: "Help & Support"
author: "Snigery"
author_authority: "player"
posted: "2021-01-10T02:58:00Z"
last_post: "2023-11-16T16:32:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:58:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Game crash & Texture Tearing

## Post 9045 by Snigery (Barrens Chat Casualty) — 2021-01-10T02:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9045#p9045 | page 1 | era: pre-1.18.1 -->

I just encountered two game crashes making the first right out of Tarren Mill in Silverpine Forest. I also experience heavy texture tearing issues in this area. Here is the crash log I received the 2nd time, if it helps.
Code: Select all

```
==============================================================================
World of WarCraft (build 5875)

Exe:      C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
Time:     Jan  9, 2021  9:52:07.612 PM
User:     ?
Computer: ?
------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AB00

The instruction at "0x0071AB00" referenced memory at "0x1E233890".
The memory could not be "read".

WoWBuild: 5875
------------------------------------------------------------------------------

----------------------------------------
x86 Registers
----------------------------------------

EAX=1E233890  EBX=00000316  ECX=00000003  EDX=1E230010  ESI=00000009
EDI=1579186C  EBP=0019C7F4  ESP=0019C7B4  EIP=0071AB00  FLG=00010206
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

----------------------------------------
Stack Trace (Manual)
----------------------------------------

Address  Frame    Logical addr  Module

0071AB00 0019C7F4 0001:00319B00 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
00719C14 0019C818 0001:00318C14 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0070CF08 0019C844 0001:0030BF08 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0070B62C 0019C8D8 0001:0030A62C C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0070896E 0019FC54 0001:0030796E C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
004836AB 0019FC94 0001:000826AB C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
00482E7A 0019FD20 0001:00081E7A C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0076FC31 0019FD3C 0001:0036EC31 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
007658E7 0019FD60 0001:003648E7 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0076434C 0019FD6C 0001:0036334C C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0044264E 0019FE34 0001:0004164E C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
004246B0 0019FE68 0001:000236B0 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0042106F 0019FED8 0001:0002006F C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
00420BF1 0019FEF0 0001:0001FBF1 C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0040411E 0019FF80 0001:0000311E C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
77988654 0019FF94 0001:00008654 C:\WINDOWS\System32\KERNEL32.DLL
77B54A47 0019FFDC 0001:00063A47 C:\WINDOWS\SYSTEM32\ntdll.dll
77B54A17 0019FFEC 0001:00063A17 C:\WINDOWS\SYSTEM32\ntdll.dll

----------------------------------------
Stack Trace (Using DBGHELP.DLL)
----------------------------------------

0071AB00 WoW.exe      <unknown symbol>+0 (0x09759060,0x1C1236C8,0x0019C8F8,0x00000000)

----------------------------------------
Loaded Modules
----------------------------------------

0x00400000 - 0x00D06000  C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\WoW.exe
0x04CD0000 - 0x04D66000  C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\fmod.dll
0x10000000 - 0x10069000  C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\DivxDecoder.dll
0x22900000 - 0x22A18000  C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\dbghelp.dll
0x6F200000 - 0x6F210000  C:\WINDOWS\System32\wshbth.dll
0x6F210000 - 0x6F21C000  C:\WINDOWS\System32\winrnr.dll
0x6F220000 - 0x6F233000  C:\WINDOWS\system32\NLAapi.dll
0x6F240000 - 0x6F256000  C:\WINDOWS\system32\pnrpnsp.dll
0x6F260000 - 0x6F271000  C:\WINDOWS\system32\napinsp.dll
0x6F280000 - 0x6F2D6000  C:\Windows\System32\OLEACC.dll
0x6F2E0000 - 0x6F366000  C:\WINDOWS\SYSTEM32\sxs.dll
0x6F370000 - 0x6F50E000  C:\Windows\System32\uiautomationcore.dll
0x6F510000 - 0x6F55E000  C:\WINDOWS\System32\fwpuclnt.dll
0x6F560000 - 0x6F568000  C:\Windows\System32\rasadhlp.dll
0x6F570000 - 0x6F604000  C:\WINDOWS\SYSTEM32\DNSAPI.dll
0x6F610000 - 0x6F66E000  C:\WINDOWS\SYSTEM32\msiso.dll
0x6F670000 - 0x6F7FC000  C:\WINDOWS\SYSTEM32\urlmon.dll
0x6F800000 - 0x6F808000  C:\WINDOWS\SYSTEM32\WINNSI.DLL
0x6F810000 - 0x6F8BD000  C:\WINDOWS\SYSTEM32\winhttp.dll
0x6F8C0000 - 0x6F8D2000  C:\WINDOWS\SYSTEM32\ondemandconnroutehelper.dll
0x6F8E0000 - 0x6FAF9000  C:\WINDOWS\SYSTEM32\iertutil.dll
0x6FB00000 - 0x6FB55000  C:\WINDOWS\SYSTEM32\mswsock.dll
0x6FB60000 - 0x6FC2E000  C:\Windows\System32\Windows.UI.dll
0x6FC30000 - 0x6FC38000  C:\WINDOWS\SYSTEM32\midimap.dll
0x6FC40000 - 0x6FC4A000  C:\WINDOWS\SYSTEM32\msacm32.drv
0x6FC50000 - 0x6FC57000  C:\WINDOWS\SYSTEM32\ksuser.dll
0x6FC60000 - 0x6FC9A000  C:\WINDOWS\SYSTEM32\wdmaud.drv
0x6FCA0000 - 0x6FCA8000  C:\WINDOWS\SYSTEM32\AVRT.dll
0x6FCB0000 - 0x6FDA4000  C:\WINDOWS\SYSTEM32\AUDIOSES.DLL
0x6FDB0000 - 0x6FF2A000  C:\WINDOWS\System32\PROPSYS.dll
0x6FF30000 - 0x6FF52000  C:\WINDOWS\System32\DEVOBJ.dll
0x6FF60000 - 0x6FFBB000  C:\WINDOWS\System32\MMDevApi.dll
0x6FFC0000 - 0x70040000  C:\WINDOWS\SYSTEM32\dsound.dll
0x70040000 - 0x700C7000  C:\Program Files (x86)\Common Files\Microsoft Shared\Ink\tiptsf.dll
0x700D0000 - 0x70992000  C:\WINDOWS\SYSTEM32\igdusc32.dll
0x709A0000 - 0x70A6B000  C:\WINDOWS\SYSTEM32\wintypes.dll
0x70A70000 - 0x70AFC000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
0x70B00000 - 0x70D34000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
0x70D40000 - 0x70DB7000  C:\WINDOWS\SYSTEM32\TextInputFramework.dll
0x70DC0000 - 0x73213000  C:\WINDOWS\SYSTEM32\igdumdim32.dll
0x73220000 - 0x7338C000  C:\WINDOWS\SYSTEM32\d3d9.dll
0x73390000 - 0x733B8000  C:\WINDOWS\SYSTEM32\ntmarta.dll
0x733C0000 - 0x733C9000  C:\WINDOWS\SYSTEM32\ktmw32.dll
0x733D0000 - 0x736D3000  C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\discord_game_sdk.dll
0x736E0000 - 0x736FE000  C:\Users\Michael\entertainment\games\computer\world-of-warcraft\vanilla\DiscordOverlay.dll
0x73700000 - 0x73719000  C:\WINDOWS\SYSTEM32\MSACM32.dll
0x73720000 - 0x73745000  C:\WINDOWS\SYSTEM32\GLU32.dll
0x73750000 - 0x73A14000  C:\WINDOWS\SYSTEM32\WININET.dll
0x73A20000 - 0x73AFF000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
0x73B00000 - 0x73B08000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
0x73B10000 - 0x73B89000  C:\WINDOWS\system32\uxtheme.dll
0x73B90000 - 0x73BC0000  C:\WINDOWS\SYSTEM32\IPHLPAPI.DLL
0x73BC0000 - 0x73BD9000  C:\WINDOWS\SYSTEM32\bcrypt.dll
0x73BE0000 - 0x73BE7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
0x73BF0000 - 0x73C82000  C:\WINDOWS\SYSTEM32\dxgi.dll
0x73C90000 - 0x73CB3000  C:\WINDOWS\SYSTEM32\WINMMBASE.dll
0x73CC0000 - 0x73D2C000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
0x73D30000 - 0x74113000  C:\WINDOWS\SYSTEM32\msi.dll
0x74120000 - 0x74143000  C:\WINDOWS\SYSTEM32\dwmapi.dll
0x74150000 - 0x74167000  C:\WINDOWS\SYSTEM32\MPR.dll
0x74170000 - 0x74192000  C:\WINDOWS\SYSTEM32\USERENV.dll
0x741A0000 - 0x7428A000  C:\WINDOWS\SYSTEM32\DDRAW.dll
0x74290000 - 0x742B4000  C:\WINDOWS\SYSTEM32\WINMM.dll
0x742C0000 - 0x74347000  C:\WINDOWS\SYSTEM32\mscms.dll
0x74350000 - 0x743DE000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.16299.15_none_2c294b7f17b4b002\COMCTL32.dll
0x743E0000 - 0x7445C000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
0x74460000 - 0x744FA000  C:\WINDOWS\SYSTEM32\apphelp.dll
0x74500000 - 0x7450A000  C:\WINDOWS\System32\CRYPTBASE.dll
0x74510000 - 0x74530000  C:\WINDOWS\System32\SspiCli.dll
0x74530000 - 0x745AC000  C:\WINDOWS\System32\msvcp_win.dll
0x745B0000 - 0x74B76000  C:\WINDOWS\System32\windows.storage.dll
0x74B80000 - 0x74C77000  C:\WINDOWS\System32\ole32.dll
0x74C80000 - 0x74CE6000  C:\WINDOWS\System32\WS2_32.dll
0x74CF0000 - 0x74CF7000  C:\WINDOWS\System32\NSI.dll
0x74EF0000 - 0x74F47000  C:\WINDOWS\System32\bcryptPrimitives.dll
0x74F50000 - 0x76283000  C:\WINDOWS\System32\SHELL32.dll
0x762F0000 - 0x76335000  C:\WINDOWS\System32\SHLWAPI.dll
0x76340000 - 0x764B5000  C:\WINDOWS\System32\USER32.dll
0x764C0000 - 0x764D9000  C:\WINDOWS\System32\imagehlp.dll
0x764E0000 - 0x7663E000  C:\WINDOWS\System32\gdi32full.dll
0x76640000 - 0x76A66000  C:\WINDOWS\System32\SETUPAPI.dll
0x76A70000 - 0x76B44000  C:\WINDOWS\System32\COMDLG32.dll
0x76B50000 - 0x76B88000  C:\WINDOWS\System32\cfgmgr32.dll
0x76B90000 - 0x76C4D000  C:\WINDOWS\System32\msvcrt.dll
0x76C50000 - 0x76D0E000  C:\WINDOWS\System32\RPCRT4.dll
0x76D10000 - 0x76E54000  C:\WINDOWS\System32\MSCTF.dll
0x76F00000 - 0x77146000  C:\WINDOWS\System32\combase.dll
0x77150000 - 0x771E3000  C:\WINDOWS\System32\OLEAUT32.dll
0x771F0000 - 0x773C7000  C:\WINDOWS\System32\KERNELBASE.dll
0x773D0000 - 0x774E7000  C:\WINDOWS\System32\ucrtbase.dll
0x774F0000 - 0x77504000  C:\WINDOWS\System32\profapi.dll
0x77570000 - 0x77595000  C:\WINDOWS\System32\IMM32.dll
0x775A0000 - 0x775B6000  C:\WINDOWS\System32\win32u.dll
0x775C0000 - 0x77648000  C:\WINDOWS\System32\shcore.dll
0x77650000 - 0x776D2000  C:\WINDOWS\System32\clbcatq.dll
0x77730000 - 0x777A8000  C:\WINDOWS\System32\ADVAPI32.dll
0x77920000 - 0x77963000  C:\WINDOWS\System32\sechost.dll
0x77970000 - 0x77A40000  C:\WINDOWS\System32\KERNEL32.DLL
0x77A60000 - 0x77AA5000  C:\WINDOWS\System32\powrprof.dll
0x77AB0000 - 0x77AD2000  C:\WINDOWS\System32\GDI32.dll
0x77AE0000 - 0x77AEE000  C:\WINDOWS\System32\kernel.appcore.dll
0x77AF0000 - 0x77C7D000  C:\WINDOWS\SYSTEM32\ntdll.dll

----------------------------------------
Memory Dump
----------------------------------------

Code: 16 bytes starting at (EIP = 0071AB00)

0071AB00: 0F 28 28 0F  59 EC 0F 58  C5 0F 28 68  10 0F 59 EC  .((.Y..X..(h..Y.

Stack: 1024 bytes starting at (ESP = 0019C7B4)

* = addr               **                                         *
0019C7B0: 08 40 83 06  08 40 7A 1A  48 EB 82 06  6C 18 79 15  .@[email protected].
0019C7C0: 16 00 00 00  03 00 00 00  00 00 00 00  00 00 00 00  ................
0019C7D0: 00 19 00 00  80 38 00 00  80 0E 00 00  40 07 00 00  .....8......@...
0019C7E0: 60 90 75 09  10 00 23 1E  10 00 25 1D  DA 9B 3A 1D  `.u...#...%...:.
0019C7F0: 64 E2 3A 1D  18 C8 19 00  14 9C 71 00  60 90 75 09  d.:.......q.`.u.
0019C800: C8 36 12 1C  F8 C8 19 00  00 00 00 00  F8 C8 19 00  .6..............
0019C810: 00 00 00 00  48 EB 82 06  44 C8 19 00  08 CF 70 00  ....H...D.....p.
0019C820: 00 00 00 00  40 8F 75 09  1A 00 00 00  F8 C8 19 00  [email protected].........
0019C830: 00 00 00 00  03 00 00 00  FC 06 00 00  0E 04 00 00  ................
0019C840: 21 01 00 00  D8 C8 19 00  2C B6 70 00  00 00 00 00  !.......,.p.....
0019C850: 08 60 CC 11  88 6A 9F 15  D7 30 38 BF  B5 CF 24 BE  .`...j...08...$.
0019C860: 7C F3 2C BF  00 00 00 00  95 CA 31 3F  5D BE 2A BE  |.,.......1?].*.
0019C870: 24 2D 33 BF  00 00 00 00  00 0F 51 AF  D5 07 79 3F  $-3.......Q...y?
0019C880: 6D 4F 6D BE  00 00 00 00  00 00 00 00  00 00 00 00  mOm.............
0019C890: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........
0019C8A0: 00 00 00 00  00 00 80 3F  08 00 C2 1B  B0 EF CE 00  .......?........
0019C8B0: 49 41 40 00  00 00 00 00  F8 C8 19 00  98 CA 19 00  IA@.............
0019C8C0: E4 C8 19 00  A5 B1 70 00  98 CA 19 00  E4 C8 19 00  ......p.........
0019C8D0: 27 B2 70 00  00 00 00 00  54 FC 19 00  6E 89 70 00  '.p.....T...n.p.
0019C8E0: 00 00 00 00  08 00 12 1C  08 18 F8 1D  2B 00 00 00  ............+...
0019C8F0: 08 00 10 11  08 60 CC 11  00 00 80 3F  00 00 00 00  .....`.....?....
0019C900: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
0019C910: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
0019C920: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
0019C930: 00 00 00 00  00 00 80 3F  08 60 CC 11  B0 EF CE 00  .......?.`......
0019C940: 10 00 25 1D  00 00 00 00  00 00 00 00  00 00 00 00  ..%.............
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
0019CBB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

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
Processor Revision:     17665

Percent memory used:    68
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576
```

## Post 9100 by Dazyduke — 2021-01-13T12:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9100#p9100 | page 1 | era: pre-1.18.1 -->

I see you are on windows, this is good.
Those crashes seem to happen due to new NPCs/models being corrupted.

When you enter the game, try this:
In Video Settings, enable the Vertex animations and restart game.
This should fix the models and you should not see weird glitches.

## Post 13123 by Edwin — 2021-10-18T22:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13123#p13123 | page 1 | era: pre-1.18.1 -->

Hi. The same thing happens to me, but i can't activate [check] the option of Vertex Animation.
> **Dazyduke wrote: Wed Jan 13, 2021 12:38 pm**
> I see you are on windows, this is good.
>  Those crashes seem to happen due to new NPCs/models being corrupted.
>
>  When you enter the game, try this:
>  In Video Settings, enable the Vertex animations and restart game.
>  This should fix the models and you should not see weird glitches.

## Post 18872 by Panurg — 2022-05-27T05:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18872#p18872 | page 1 | era: pre-1.18.1 -->

Could you overcome the problem? I have the same for me.

## Post 18908 by Allwynd01 (Bug Report Enthusiast) — 2022-05-29T08:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18908#p18908 | page 1 | era: pre-1.18.1 -->

It would be nice to take some screenshots or videos.

## Post 18998 by Zytronmegablast — 2022-06-05T17:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18998#p18998 | page 1 | era: pre-1.18.1 -->

Had the same bug.

Corrupted models causing a crash.

The Vertex Animation Shaders solution in video options worked for me.

Clicked it off, restarted game.
Clicked it back on and restarted game fixed the issue.

## Post 77674 by Evilsindri — 2023-11-16T16:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77674#p77674 | page 1 | era: pre-1.18.1 -->

this help me so much, i thought that was a problem with the HD graphs, but i can finally play without crashes at least for no, thank you

