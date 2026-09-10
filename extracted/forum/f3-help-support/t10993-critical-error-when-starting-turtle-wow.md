---
title: "Critical Error When Starting Turtle WoW"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10993"
topic_id: 10993
forum_id: 3
forum: "Help & Support"
author: "Nosver4tu"
author_authority: "player"
posted: "2023-10-18T17:12:00Z"
last_post: "2023-10-18T17:12:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:00:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Critical Error When Starting Turtle WoW

## Post 71936 by Nosver4tu — 2023-10-18T17:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71936#p71936 | page 1 | era: pre-1.18.1 -->

Dear Turtle WoW Support Team,

I hope this message finds you well. I am writing to report a critical issue that I have been encountering whenever I attempt to launch Turtle WoW. Unfortunately, this issue prevents the game from starting successfully.

The specific error message I receive is as follows:

[=============================================================================
World of WarCraft (build 5875)

Exe:      D:\turtle_client_116\WoW.exe
Time:     Oct 18, 2023  6:59:27.403 PM
User:     benja
Computer: HOME
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	D:\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:76AD22A0

The instruction at "0x76AD22A0" referenced memory at "0x708D11D0".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=708D11CC  EBX=05845378  ECX=00000002  EDX=010589F8  ESI=01058740
EDI=00000000  EBP=0019F874  ESP=0019F854  EIP=76AD22A0  FLG=00210202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 76AD22A0 0019F874 0001:000512A0 C:\WINDOWS\System32\MSCTF.dll
 76AD1857 0019F888 0001:00050857 C:\WINDOWS\System32\MSCTF.dll
 707D0C51 0019F8A0 0001:0005FC51 C:\WINDOWS\SYSTEM32\textinputframework.dll
 76AB21D7 0019F8E0 0001:000311D7 C:\WINDOWS\System32\MSCTF.dll
 76AA6FD6 0019F930 0001:00025FD6 C:\WINDOWS\System32\MSCTF.dll
 76B1F6D5 0019F940 0001:0009E6D5 C:\WINDOWS\System32\MSCTF.dll
 76B62318 0019F964 0001:00001318 C:\WINDOWS\System32\IMM32.dll
 76ABA7B5 0019F998 0001:000397B5 C:\WINDOWS\System32\MSCTF.dll
 76ABAC00 0019F9C8 0001:00039C00 C:\WINDOWS\System32\MSCTF.dll
 76ABACFB 0019F9D4 0001:00039CFB C:\WINDOWS\System32\MSCTF.dll
 76B6602F 0019F9F4 0001:0000502F C:\WINDOWS\System32\IMM32.dll
 76B6726D 0019F9FC 0001:0000626D C:\WINDOWS\System32\IMM32.dll
 773785B2 0019FA78 0001:000A75B2 C:\WINDOWS\System32\combase.dll
 77378155 0019FA88 0001:000A7155 C:\WINDOWS\System32\combase.dll
 680F59B4 0019FACC 0001:000549B4 C:\WINDOWS\SYSTEM32\dsound.dll
 680EB3D3 0019FB18 0001:0004A3D3 C:\WINDOWS\SYSTEM32\dsound.dll
 680EAB8A 0019FB30 0001:00049B8A C:\WINDOWS\SYSTEM32\dsound.dll
 680DAC52 0019FDA4 0001:00039C52 C:\WINDOWS\SYSTEM32\dsound.dll
 680DC0C4 0019FDB4 0001:0003B0C4 C:\WINDOWS\SYSTEM32\dsound.dll
 1000CA0E 0019FE1C 0001:0000BA0E D:\turtle_client_116\fmod.dll
 00457007 0019FE60 0001:00056007 D:\turtle_client_116\WoW.exe
 00420E4A 0019FEC8 0001:0001FE4A D:\turtle_client_116\WoW.exe
 00420BF1 0019FEE0 0001:0001FBF1 D:\turtle_client_116\WoW.exe
 0040411E 0019FF70 0001:0000311E D:\turtle_client_116\WoW.exe
 7760FCC9 0019FF80 0001:0000FCC9 C:\WINDOWS\System32\KERNEL32.DLL
 77757C6E 0019FFDC 0001:00066C6E C:\WINDOWS\SYSTEM32\ntdll.dll
 77757C3E 0019FFEC 0001:00066C3E C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 76AD22A0 MSCTF.dll    TF_IsCtfmonRunning+19392 (0x00000000,0x01058230,0x00000000,0x0019F8A0)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00400000 - 0x00D26000  D:\turtle_client_116\WoW.exe
 0x02800000 - 0x02869000  D:\turtle_client_116\DivxDecoder.dll
 0x0F3B0000 - 0x0F4C8000  D:\turtle_client_116\dbghelp.dll
 0x10000000 - 0x10096000  D:\turtle_client_116\fmod.dll
 0x63210000 - 0x654CD000  C:\WINDOWS\System32\DriverStore\FileRepository\nvmdig.inf_amd64_da725289af73928f\nvd3dum.dll
 0x654D0000 - 0x657D3000  D:\turtle_client_116\discord_game_sdk.dll
 0x66320000 - 0x6633D000  C:\WINDOWS\SYSTEM32\winmmbase.dll
 0x66340000 - 0x66359000  C:\WINDOWS\SYSTEM32\MSACM32.dll
 0x680A0000 - 0x6811F000  C:\WINDOWS\SYSTEM32\dsound.dll
 0x68120000 - 0x68129000  C:\WINDOWS\SYSTEM32\ktmw32.dll
 0x68130000 - 0x6814E000  D:\turtle_client_116\DiscordOverlay.dll
 0x68150000 - 0x6818F000  C:\WINDOWS\SYSTEM32\GLU32.dll
 0x68190000 - 0x68293000  C:\WINDOWS\SYSTEM32\OPENGL32.dll
 0x682A0000 - 0x682A7000  C:\WINDOWS\SYSTEM32\DCIMAN32.dll
 0x682B0000 - 0x68399000  C:\WINDOWS\SYSTEM32\DDRAW.dll
 0x683A0000 - 0x683B9000  C:\WINDOWS\SYSTEM32\MPR.dll
 0x683C0000 - 0x6844D000  C:\WINDOWS\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.19041.3570_none_c0ddcb7e38bd1f11\COMCTL32.dll
 0x68450000 - 0x684C7000  C:\WINDOWS\SYSTEM32\AcSpecfc.DLL
 0x6D9C0000 - 0x6DA5F000  C:\WINDOWS\SYSTEM32\apphelp.dll
 0x6DA70000 - 0x6DB4C000  C:\WINDOWS\SYSTEM32\wintypes.dll
 0x6E480000 - 0x6E580000  C:\WINDOWS\SYSTEM32\drvstore.dll
 0x6E580000 - 0x6E617000  C:\WINDOWS\System32\DriverStore\FileRepository\nvmdig.inf_amd64_da725289af73928f\nvldumd.dll
 0x70140000 - 0x701D3000  C:\WINDOWS\SYSTEM32\mscms.dll
 0x70450000 - 0x704EB000  C:\WINDOWS\SYSTEM32\CoreMessaging.dll
 0x704F0000 - 0x7076F000  C:\WINDOWS\SYSTEM32\CoreUIComponents.dll
 0x70770000 - 0x7082A000  C:\WINDOWS\SYSTEM32\textinputframework.dll
 0x70830000 - 0x70856000  C:\WINDOWS\SYSTEM32\cryptnet.dll
 0x70C70000 - 0x70C9C000  C:\WINDOWS\SYSTEM32\dxcore.dll
 0x724A0000 - 0x72739000  C:\WINDOWS\SYSTEM32\msi.dll
 0x72C50000 - 0x72DDF000  C:\WINDOWS\SYSTEM32\d3d9.dll
 0x731C0000 - 0x731C8000  C:\WINDOWS\SYSTEM32\WSOCK32.dll
 0x73310000 - 0x73335000  C:\WINDOWS\SYSTEM32\USERENV.dll
 0x73640000 - 0x73A95000  C:\WINDOWS\SYSTEM32\WININET.dll
 0x73CB0000 - 0x73CD9000  C:\WINDOWS\SYSTEM32\devobj.dll
 0x73FE0000 - 0x740A2000  C:\WINDOWS\SYSTEM32\dxgi.dll
 0x74250000 - 0x7426E000  C:\WINDOWS\SYSTEM32\gpapi.dll
 0x74270000 - 0x7427E000  C:\WINDOWS\SYSTEM32\msasn1.dll
 0x742B0000 - 0x742B8000  C:\WINDOWS\SYSTEM32\VERSION.dll
 0x742C0000 - 0x742DC000  C:\WINDOWS\SYSTEM32\profapi.dll
 0x74300000 - 0x74376000  C:\WINDOWS\SYSTEM32\WINSPOOL.DRV
 0x74380000 - 0x7438D000  C:\WINDOWS\SYSTEM32\UMPDC.dll
 0x74390000 - 0x743D4000  C:\WINDOWS\SYSTEM32\powrprof.dll
 0x743F0000 - 0x74411000  C:\WINDOWS\SYSTEM32\SspiCli.dll
 0x748C0000 - 0x748E8000  C:\WINDOWS\SYSTEM32\WINMM.dll
 0x74900000 - 0x74926000  C:\WINDOWS\SYSTEM32\dwmapi.dll
 0x74940000 - 0x7494C000  C:\WINDOWS\SYSTEM32\ColorAdapterClient.dll
 0x74B10000 - 0x74B3F000  C:\WINDOWS\system32\rsaenh.dll
 0x74B40000 - 0x74B53000  C:\WINDOWS\SYSTEM32\CRYPTSP.dll
 0x74B60000 - 0x74B89000  C:\WINDOWS\SYSTEM32\ntmarta.dll
 0x74B90000 - 0x74B9A000  C:\WINDOWS\SYSTEM32\CRYPTBASE.DLL
 0x74BB0000 - 0x74C24000  C:\WINDOWS\system32\uxtheme.dll
 0x74F20000 - 0x74F44000  C:\WINDOWS\SYSTEM32\Wldp.dll
 0x74F50000 - 0x75563000  C:\WINDOWS\SYSTEM32\windows.storage.dll
 0x75580000 - 0x7558F000  C:\WINDOWS\SYSTEM32\kernel.appcore.dll
 0x75590000 - 0x7560B000  C:\WINDOWS\System32\msvcp_win.dll
 0x75610000 - 0x75686000  C:\WINDOWS\System32\sechost.dll
 0x75690000 - 0x7573F000  C:\WINDOWS\System32\COMDLG32.dll
 0x757A0000 - 0x7585F000  C:\WINDOWS\System32\msvcrt.dll
 0x75860000 - 0x758BF000  C:\WINDOWS\System32\bcryptPrimitives.dll
 0x75A30000 - 0x75FE7000  C:\WINDOWS\System32\SHELL32.dll
 0x75FF0000 - 0x760AF000  C:\WINDOWS\System32\RPCRT4.dll
 0x760B0000 - 0x7624C000  C:\WINDOWS\System32\USER32.dll
 0x762B0000 - 0x766E8000  C:\WINDOWS\System32\setupapi.dll
 0x766F0000 - 0x7692A000  C:\WINDOWS\System32\KERNELBASE.dll
 0x76930000 - 0x76A50000  C:\WINDOWS\System32\ucrtbase.dll
 0x76A50000 - 0x76A74000  C:\WINDOWS\System32\GDI32.dll
 0x76A80000 - 0x76B54000  C:\WINDOWS\System32\MSCTF.dll
 0x76B60000 - 0x76B85000  C:\WINDOWS\System32\IMM32.dll
 0x76B90000 - 0x76C0E000  C:\WINDOWS\System32\clbcatq.dll
 0x76C10000 - 0x76C8B000  C:\WINDOWS\System32\ADVAPI32.dll
 0x76C90000 - 0x76D73000  C:\WINDOWS\System32\ole32.dll
 0x76D80000 - 0x76DC5000  C:\WINDOWS\System32\SHLWAPI.dll
 0x76DD0000 - 0x76ECF000  C:\WINDOWS\System32\CRYPT32.dll
 0x76ED0000 - 0x76EE9000  C:\WINDOWS\System32\bcrypt.dll
 0x76F10000 - 0x76F97000  C:\WINDOWS\System32\shcore.dll
 0x76FA0000 - 0x77003000  C:\WINDOWS\System32\WS2_32.dll
 0x77010000 - 0x7705C000  C:\WINDOWS\System32\WINTRUST.DLL
 0x77060000 - 0x77148000  C:\WINDOWS\System32\gdi32full.dll
 0x77150000 - 0x771E6000  C:\WINDOWS\System32\OLEAUT32.dll
 0x771F0000 - 0x77209000  C:\WINDOWS\System32\imagehlp.dll
 0x772B0000 - 0x772C8000  C:\WINDOWS\System32\win32u.dll
 0x772D0000 - 0x77550000  C:\WINDOWS\System32\combase.dll
 0x775B0000 - 0x775EB000  C:\WINDOWS\System32\cfgmgr32.dll
 0x775F0000 - 0x776E0000  C:\WINDOWS\System32\KERNEL32.DLL
 0x776F0000 - 0x77894000  C:\WINDOWS\SYSTEM32\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 76AD22A0)

 76AD22A0: 8B 78 04 8B  CF FF 15 B4  47 B4 76 FF  D7 8B 7D F4  .x......G.v...}.

Stack: 1024 bytes starting at (ESP = 0019F854)

 * = addr               **                                         *
 0019F850: B0 01 AA 76  40 87 05 01  40 18 AD 76  30 82 05 01  ...v@[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection)...
 0019F860: 80 5A 74 05  02 00 00 00  00 00 00 00  40 87 05 01  .Zt.........@...
 0019F870: 28 42 77 70  88 F8 19 00  57 18 AD 76  00 00 00 00  (Bwp....W..v....
 0019F880: 30 82 05 01  00 00 00 00  A0 F8 19 00  51 0C 7D 70  0...........Q.}p
 0019F890: D0 53 84 05  30 82 05 01  F0 0B 7D 70  D8 C5 F5 00  .S..0.....}p....
 0019F8A0: E0 F8 19 00  D7 21 AB 76  30 82 05 01  30 83 05 01  .....!.v0...0...
 0019F8B0: 78 53 84 05  A0 A4 EE 00  34 00 A0 05  00 00 00 00  xS......4.......
 0019F8C0: 03 00 00 00  60 FF 19 00  01 00 00 00  B0 F8 19 00  ....`...........
 0019F8D0: 00 00 00 00  30 83 05 01  30 83 05 01  4C 83 05 01  ....0...0...L...
 0019F8E0: 30 F9 19 00  D6 6F AA 76  78 53 84 05  1C F9 19 00  0....o.vxS......
 0019F8F0: 01 00 00 00  58 6B F1 00  00 00 00 00  80 5A 74 05  ....Xk.......Zt.
 0019F900: A0 A4 EE 00  78 53 84 05  F0 83 EF 00  1E 5E 73 77  ....xS.......^sw
 0019F910: 00 00 00 00  00 00 00 00  50 A8 AB 76  A8 15 A8 76  ........P..v...v
 0019F920: 08 59 74 05  19 05 04 00  00 00 00 00  00 00 00 00  .Yt.............
 0019F930: 40 F9 19 00  D5 F6 B1 76  78 3C EF 00  19 05 04 00  @......vx<......
 0019F940: 64 F9 19 00  18 23 B6 76  19 05 04 00  88 F9 19 00  d....#.v........
 0019F950: 50 A8 AB 76  78 53 84 05  F0 83 EF 00  01 00 00 00  P..vxS..........
 0019F960: 58 6B F1 00  98 F9 19 00  B5 A7 AB 76  00 00 00 00  Xk.........v....
 0019F970: C0 F6 B1 76  88 F9 19 00  78 3C EF 00  F0 CA AA 76  ...v....x<.....v
 0019F980: F0 83 EF 00  78 53 84 05  78 3C EF 00  F0 83 EF 00  ....xS..x<......
 0019F990: 20 00 00 00  8C 53 84 05  C8 F9 19 00  00 AC AB 76   ....S.........v
 0019F9A0: 78 3C EF 00  78 53 84 05  08 00 00 80  03 00 00 00  x<..xS..........
 0019F9B0: 00 01 00 00  F8 12 FC 00  01 00 00 00  78 53 84 05  ............xS..
 0019F9C0: 03 00 00 00  08 00 00 80  D4 F9 19 00  FB AC AB 76  ...............v
 0019F9D0: 00 00 00 00  F4 F9 19 00  2F 60 B6 76  08 00 00 80  ......../`.v....
 0019F9E0: 03 00 00 00  20 63 F1 00  00 00 00 00  50 4D B6 76  .... c......PM.v
 0019F9F0: 03 00 00 00  FC F9 19 00  6D 72 B6 76  78 FA 19 00  ........mr.vx...
 0019FA00: B2 85 37 77  D0 31 F0 00  00 00 00 00  01 00 00 00  ..7w.1..........
 0019FA10: E8 06 3A 0F  90 59 0F 68  00 00 00 00  D0 46 F1 00  ..:..Y.h.....F..
 0019FA20: 10 00 00 00  D0 31 F0 00  00 00 00 00  44 FA 19 00  .....1......D...
 0019FA30: 20 63 F1 00  20 63 F1 00  00 00 00 00  04 00 00 00   c.. c..........
 0019FA40: 80 0B 0D 68  5C FA 19 00  28 6B 0D 68  34 08 3A 0F  ...h\...(k.h4.:.
 0019FA50: 98 FA 19 00  04 00 00 00  90 E3 0C 68  74 FA 19 00  ...........ht...
 0019FA60: BB 72 0D 68  00 00 00 00  98 FA 19 00  E8 FA 19 00  .r.h............
 0019FA70: 80 72 0D 68  78 8D D4 DC  88 FA 19 00  55 81 37 77  .r.hx.......U.7w
 0019FA80: 90 59 0F 68  00 00 00 00  CC FA 19 00  B4 59 0F 68  .Y.h.........Y.h
 0019FA90: 00 00 00 00  00 00 00 00  E8 06 3A 0F  90 59 0F 68  ..........:..Y.h
 0019FAA0: 00 00 00 00  E8 06 3A 0F  00 00 00 00  00 00 00 00  ......:.........
 0019FAB0: 4B AB 0E 68  E8 06 3A 0F  C8 05 3A 0F  01 00 00 00  K..h..:...:.....
 0019FAC0: 00 00 00 00  08 00 00 00  18 FB 19 00  18 FB 19 00  ................
 0019FAD0: D3 B3 0E 68  F8 FA 19 00  01 00 00 00  C8 05 3A 0F  ...h..........:.
 0019FAE0: 00 00 00 00  34 10 0A 68  00 10 0A 68  28 08 3A 0F  ....4..h...h(.:.
 0019FAF0: 28 08 3A 0F  01 00 00 00  34 10 0A 68  00 10 0A 68  (.:.....4..h...h
 0019FB00: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FB10: 28 08 3A 0F  C8 05 3A 0F  30 FB 19 00  8A AB 0E 68  (.:...:.0......h
 0019FB20: 20 00 00 00  00 00 00 00  01 00 00 00  00 00 00 00   ...............
 0019FB30: A4 FD 19 00  52 AC 0D 68  20 00 00 00  01 00 00 00  ....R..h .......
 0019FB40: 54 FB 19 00  FF FF FF FF  00 00 00 00  50 75 45 00  T...........PuE.
 0019FB50: 04 27 00 00  34 10 0A 68  00 10 0A 68  00 00 00 00  .'..4..h...h....
 0019FB60: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FB70: 00 00 00 00  91 C9 00 10  01 00 00 00  00 00 00 00  ................
 0019FB80: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FB90: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FBA0: 60 FF 19 00  76 00 78 00  88 51 6F 77  04 00 00 00  `...v.x..Qow....
 0019FBB0: 04 00 00 00  01 00 00 00  00 00 00 00  43 3A 5C 57  ............C:\W
 0019FBC0: 49 4E 44 4F  57 53 5C 73  79 73 74 65  6D 33 32 5C  INDOWS\system32\
 0019FBD0: 64 33 64 39  2E 64 6C 6C  00 FD 19 00  33 CA 80 76  d3d9.dll....3..v
 0019FBE0: FC FB 19 00  70 75 45 00  86 CA 80 76  7C FD 19 00  ....puE....v|...
 0019FBF0: 00 00 00 01  F8 FB 19 00  00 00 65 00  1C 01 00 00  ..........e.....
 0019FC00: 06 00 00 00  02 00 00 00  F0 23 00 00  02 00 00 00  .........#......
 0019FC10: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC20: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC30: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC40: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0019FC50: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................

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
Processor Revision:     24067

Percent memory used:    25
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -1
Total virtual memory:   2147352576]

In order to bypass this issue and launch the game, I have resorted to turning off two out of my three monitors. However, I believe this is not a sustainable solution, as it severely hampers my overall gaming experience.

I would greatly appreciate your assistance in resolving this problem as soon as possible. If there are any additional details or information you require from me to diagnose and rectify this issue, please do not hesitate to ask.

Thank you for your attention to this matter, and I look forward to your prompt response.

Sincerely,

NoS

