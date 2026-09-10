---
title: "Lutris on Linux Mint"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4616"
topic_id: 4616
forum_id: 3
forum: "Help & Support"
author: "Fenzakosu"
author_authority: "player"
posted: "2022-10-20T15:10:00Z"
last_post: "2023-03-08T19:23:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T09:17:18Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Lutris on Linux Mint

## Post 27612 by Fenzakosu — 2022-10-20T15:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27612#p27612 | page 1 | era: pre-1.18.1 -->

Hello, any advice on how I could play Turtle Wow on Linux by using Lutris?

## Post 27628 by Totuga (Barrens Chat Casualty) — 2022-10-20T20:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27628#p27628 | page 1 | era: pre-1.18.1 -->

43

*Last edited by Totuga on Wed Apr 26, 2023 4:08 am, edited 1 time in total.*

## Post 27646 by Fenzakosu — 2022-10-21T06:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27646#p27646 | page 1 | era: pre-1.18.1 -->

Nope, still doesn't work. When I start WoW.exe through Lutris , it just stops. If I launch it via terminal by using wine , it crashes.

World of WarCraft (build 5875)

Exe:      H:\turtle_client_116\WoW.exe
Time:     Oct 21, 2022  8:58:39.870 AM
User:     lucas
Computer: LUCAS-MS-7788
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	H:\turtle_client_116\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0040D620

The instruction at "0x0040D620" referenced memory at "0x00000000".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=00000000  EBX=00000000  ECX=00000000  EDX=00000000  ESI=01C8A408
EDI=00000001  EBP=0032FD70  ESP=0032FD48  EIP=0040D620  FLG=00210246
CS =0023      DS =002B      ES =002B      SS =002B      FS =006B      GS =0063

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 0040D620 0032FD70 0001:0000C620 H:\turtle_client_116\WoW.exe
 0046AB94 0032FD9C 0001:00069B94 H:\turtle_client_116\WoW.exe
 0046AC1A 0032FDA8 0001:00069C1A H:\turtle_client_116\WoW.exe
 0046A4F3 0032FDE4 0001:000694F3 H:\turtle_client_116\WoW.exe
 00402B3B 0032FE20 0001:00001B3B H:\turtle_client_116\WoW.exe
 00420E4A 0032FE88 0001:0001FE4A H:\turtle_client_116\WoW.exe
 00420BF1 0032FEA0 0001:0001FBF1 H:\turtle_client_116\WoW.exe
 0040411E 0032FF30 0001:0000311E H:\turtle_client_116\WoW.exe
 7B454882 0032FF48 0001:00033882 C:\windows\system32\kernel32.dll
 7B454CFC 0032FFD8 0001:00033CFC C:\windows\system32\kernel32.dll
 7B45488E 0032FFEC 0001:0003388E C:\windows\system32\kernel32.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 0040D620 WoW.exe      <unknown symbol>+0 (0x00000000,0x00837038,0x0032FD90,0x0032FD9B)
 0046AB94 WoW.exe      <unknown symbol>+0 (0x0032FDBC,0x0032FDE4,0x0046A4F3,0x01CABA48)
 0046AC1A WoW.exe      <unknown symbol>+0 (0x01CABA48,0x0032FE00,0x01CABA48,0x008013EC)
 0046A4F3 WoW.exe      <unknown symbol>+0 (0x004029EF,0x004246B0,0x00000102,0x01CABC08)
 00402B3B WoW.exe      <unknown symbol>+0 (0x00000000,0x01CABC08,0x00420D0A,0x00000000)
 00420E4A WoW.exe      <unknown symbol>+0 (0x00000000,0x004021E9,0x00000001,0x00000001)
 00420BF1 WoW.exe      <unknown symbol>+0 (0x004099A0,0x00400000,0x00000000,0x001150EE)
 0040411E WoW.exe      <unknown symbol>+0 (0x3FFFF000,0x7B454CFC,0x7B454CFC,0x7B454CFC)
 7B454882 kernel32.dll <unknown symbol>+0 (0x3FFFF000,0x00401000,0x0032FF74,0x0032FF74)
 7B454CFC kernel32.dll <unknown symbol>+0 (0x7B45488E,0x00401000,0x3FFFF000,0x00000000)
 7B45488E kernel32.dll <unknown symbol>+0 (0x00000000,0x00000000,0x00000000,0x00905A4D)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x00330000 - 0x003C6000  H:\turtle_client_116\fmod.dll
 0x00400000 - 0x00D06000  H:\turtle_client_116\WoW.exe
 0x02630000 - 0x0264E000  H:\turtle_client_116\DiscordOverlay.dll
 0x02650000 - 0x02953000  H:\turtle_client_116\discord_game_sdk.dll
 0x10000000 - 0x10069000  H:\turtle_client_116\DivxDecoder.dll
 0x62440000 - 0x62769000  C:\windows\system32\d3d9.dll
 0x7A840000 - 0x7A942000  C:\windows\system32\OPENGL32.dll
 0x7B020000 - 0x7B0E0000  C:\windows\system32\kernelbase.dll
 0x7B420000 - 0x7B673000  C:\windows\system32\kernel32.dll
 0x7BC30000 - 0x7BEB3000  C:\windows\system32\ntdll.dll
 0x7DB20000 - 0x7DB4F000  C:\windows\system32\uxtheme.dll
 0x7DBC0000 - 0x7DC33000  C:\windows\system32\setupapi.dll
 0x7DE30000 - 0x7DECC000  C:\windows\system32\winex11.drv
 0x7E120000 - 0x7E144000  C:\windows\system32\mpr.dll
 0x7E190000 - 0x7E222000  C:\windows\system32\WININET.dll
 0x7E230000 - 0x7E253000  C:\windows\system32\msacm32.dll
 0x7E260000 - 0x7E31F000  C:\windows\system32\WINMM.dll
 0x7E330000 - 0x7E34D000  C:\windows\system32\iphlpapi.dll
 0x7E360000 - 0x7E38B000  C:\windows\system32\ws2_32.dll
 0x7E390000 - 0x7E3A7000  C:\windows\system32\WSOCK32.dll
 0x7E3D0000 - 0x7E442000  C:\windows\system32\rpcrt4.dll
 0x7E480000 - 0x7E5B3000  C:\windows\system32\ole32.dll
 0x7E5C0000 - 0x7E5DB000  C:\windows\system32\shcore.dll
 0x7E5F0000 - 0x7E644000  C:\windows\system32\shlwapi.dll
 0x7E680000 - 0x7F05C000  C:\windows\system32\SHELL32.dll
 0x7F070000 - 0x7F083000  C:\windows\system32\imm32.dll
 0x7F090000 - 0x7F0D2000  C:\windows\system32\usp10.dll
 0x7F100000 - 0x7F1AC000  C:\windows\system32\msvcrt.dll
 0x7F1D0000 - 0x7F306000  C:\windows\system32\gdi32.dll
 0x7F340000 - 0x7F548000  C:\windows\system32\user32.dll
 0x7F570000 - 0x7F6DE000  C:\windows\system32\COMCTL32.dll
 0x7F6F0000 - 0x7F763000  C:\windows\system32\ADVAPI32.dll
 0x7FFD0000 - 0x7FFE0000  C:\windows\system32\version.dll
 0xCF4B0000 - 0xCF522000  H:\turtle_client_116\dbghelp.dll
 0xDF960000 - 0xDFA6C000  C:\windows\system32\oleaut32.dll
 0xDFAA0000 - 0xDFB8C000  C:\windows\system32\ucrtbase.dll
 0xE58E0000 - 0xE5900000  C:\windows\system32\winepulse.drv
 0xE5A30000 - 0xE5A79000  C:\windows\system32\dsound.dll
 0xF3410000 - 0xF3433000  C:\windows\system32\mmdevapi.dll
 0xF78C0000 - 0xF7900000  C:\windows\system32\winevulkan.dll
 0xF7A30000 - 0xF7A41000  C:\windows\system32\mswsock.dll
 0xF7A70000 - 0xF7A82000  C:\windows\system32\vulkan-1.dll
 0xF7A90000 - 0xF7A98000  C:\windows\system32\api-ms-win-appmodel-runtime-l1-1-2.dll
 0xF7AA0000 - 0xF7AAE000  C:\windows\system32\api-ms-win-core-localization-l1-2-1.dll
 0xF7AB0000 - 0xF7AC4000  C:\windows\system32\api-ms-win-core-fibers-l1-1-1.dll
 0xF7AD0000 - 0xF7ADA000  C:\windows\system32\api-ms-win-core-synch-l1-2-0.dll
 0xF7AE0000 - 0xF7AF0000  C:\windows\system32\ktmw32.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 0040D620)

 0040D620: 8B 01 BA FF  FE FE 7E 03  D0 83 F0 FF  33 C2 83 C1  ......~.....3...

Stack: 1024 bytes starting at (ESP = 0032FD48)

 * = addr                            **                                *
 0032FD40: 08 95 C9 01  E8 A5 C8 01  79 FB 73 00  00 00 00 00  ........y.s.....
 0032FD50: 00 00 00 00  E8 A5 C8 01  00 00 00 00  49 00 00 00  ............I...
 0032FD60: 40 70 83 00  7A DE 98 76  9C FD 32 00  8C DE 63 00  @p..z..v..2...c.
 0032FD70: 9C FD 32 00  94 AB 46 00  00 00 00 00  38 70 83 00  ..2...F.....8p..
 0032FD80: 90 FD 32 00  9B FD 32 00  94 FD 32 00  80 04 00 00  ..2...2...2.....
 0032FD90: 04 00 00 00  03 00 00 00  00 00 00 00  A8 FD 32 00  ..............2.
 0032FDA0: 1A AC 46 00  BC FD 32 00  E4 FD 32 00  F3 A4 46 00  ..F...2...2...F.
 0032FDB0: 48 BA CA 01  00 FE 32 00  48 BA CA 01  EC 13 80 00  H.....2.H.......
 0032FDC0: 00 00 00 00  FF FF FF FF  00 00 00 00  80 04 00 00  ................
 0032FDD0: 60 03 00 00  00 00 00 00  00 00 00 00  00 00 58 44  `.............XD
 0032FDE0: 00 00 90 44  20 FE 32 00  3B 2B 40 00  EF 29 40 00  ...D .2.;+@..)@.
 0032FDF0: B0 46 42 00  02 01 00 00  08 BC CA 01  00 00 00 00  .FB.............
 0032FE00: 48 BA CA 01  BD BC CA 01  F3 DF BE 04  00 00 00 00  H...............
 0032FE10: 7F 0E 7F 02  01 00 00 00  07 00 00 00  B8 BC CA 01  ................
 0032FE20: 88 FE 32 00  4A 0E 42 00  00 00 00 00  08 BC CA 01  ..2.J.B.........
 0032FE30: 0A 0D 42 00  00 00 00 00  00 00 00 00  00 F0 FF 3F  ..B............?
 0032FE40: 45 6E 67 69  6E 65 20 39  00 FE 32 00  72 B3 07 7B  Engine 9..2.r..{
 0032FE50: 18 3D C5 00  00 80 FF 3F  65 6E 00 00  72 B3 07 7B  .=.....?en..r..{
 0032FE60: BC 20 00 00  00 00 00 00  55 53 00 00  77 D0 64 00  . ......US..w.d.
 0032FE70: 8C FE 32 00  00 F0 FF 3F  A0 FE 32 00  A9 9A 65 00  ..2....?..2...e.
 0032FE80: F3 DF BE 04  A0 FE 32 00  A0 FE 32 00  F1 0B 42 00  ......2...2...B.
 0032FE90: 00 00 00 00  E9 21 40 00  01 00 00 00  01 00 00 00  .....!@.........
 0032FEA0: 30 FF 32 00  1E 41 40 00  A0 99 40 00  00 00 40 00  0.2..A@...@...@.
 0032FEB0: 00 00 00 00  EE 50 11 00  0A 00 00 00  00 00 00 00  .....P..........
 0032FEC0: 00 00 00 00  00 F0 FF 3F  05 00 00 C0  EE 50 11 00  .......?.....P..
 0032FED0: F0 FE 32 00  44 00 00 00  00 00 00 00  C0 1A 11 00  ..2.D...........
 0032FEE0: D8 1A 11 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0032FEF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0032FF00: 00 00 00 00  01 00 00 00  00 00 00 00  27 00 00 00  ............'...
 0032FF10: 2B 00 00 00  2F 00 00 00  BC FE 32 00  90 F8 32 00  +.../.....2...2.
 0032FF20: 74 FF 32 00  40 B1 40 00  60 FE 7F 00  00 00 00 00  t.2.@.@.`.......
 0032FF30: 48 FF 32 00  82 48 45 7B  00 F0 FF 3F  FC 4C 45 7B  H.2..HE{...?.LE{
 0032FF40: FC 4C 45 7B  FC 4C 45 7B  D8 FF 32 00  FC 4C 45 7B  .LE{.LE{..2..LE{
 0032FF50: 00 F0 FF 3F  00 10 40 00  74 FF 32 00  74 FF 32 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection).
 0032FF60: 00 00 00 00  00 00 00 00  00 10 40 00  00 F0 FF 3F  ..........@....?
 0032FF70: 00 00 00 00  FF FF FF FF  50 D8 46 7B  68 45 43 7B  ........P.F{hEC{
 0032FF80: 00 00 00 00  D8 FF 32 00  00 F0 FF 3F  00 00 00 00  ......2....?....
 0032FF90: 00 00 00 00  4C FF 32 00  66 4C 45 7B  00 00 00 00  ....L.2.fLE{....
 0032FFA0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0032FFB0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 0032FFC0: 00 00 00 00  00 00 00 00  00 00 00 00  00 56 1C 11  .............V..
 0032FFD0: 00 00 00 00  E4 FF 32 00  EC FF 32 00  8E 48 45 7B  ......2...2..HE{
 0032FFE0: 8E 48 45 7B  00 10 40 00  00 F0 FF 3F  00 00 00 00  .HE{..@....?....
 0032FFF0: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 00330000: 4D 5A 90 00  03 00 00 00  04 00 00 00  FF FF 00 00  MZ..............
 00330010: B8 00 00 00  00 00 00 00  40 00 00 00  00 00 00 00  ........@.......
 00330020: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 00 00  ................
 00330030: 00 00 00 00  00 00 00 00  00 00 00 00  F0 00 00 00  ................
 00330040: 0E 1F BA 0E  00 B4 09 CD  21 B8 01 4C  CD 21 54 68  ........!..L.!Th
 00330050: 69 73 20 70  72 6F 67 72  61 6D 20 63  61 6E 6E 6F  is program canno
 00330060: 74 20 62 65  20 72 75 6E  20 69 6E 20  44 4F 53 20  t be run in DOS
 00330070: 6D 6F 64 65  2E 0D 0D 0A  24 00 00 00  00 00 00 00  mode....$.......
 00330080: 46 47 7A 03  02 26 14 50  02 26 14 50  02 26 14 50  FGz..&.P.&.P.&.P
 00330090: 81 3A 1A 50  05 26 14 50  6D 39 1E 50  07 26 14 50  .:.P.&.Pm9.P.&.P
 003300A0: 6D 39 10 50  00 26 14 50  02 26 15 50  9F 26 14 50  m9.P.&.P.&.P.&.P
 003300B0: 60 39 07 50  0D 26 14 50  56 05 25 50  04 26 14 50  `9.P.&.PV.%P.&.P
 003300C0: 56 05 24 50  52 26 14 50  C5 20 12 50  03 26 14 50  V.$PR&.P. .P.&.P
 003300D0: 02 26 14 50  08 26 14 50  FD 06 10 50  03 26 14 50  .&.P.&.P...P.&.P
 003300E0: 52 69 63 68  02 26 14 50  00 00 00 00  00 00 00 00  Rich.&.P........
 003300F0: 50 45 00 00  4C 01 03 00  2E 18 B2 43  00 00 00 00  PE..L......C....
 00330100: 00 00 00 00  E0 00 0E 21  0B 01 06 00  00 50 02 00  .......!.....P..
 00330110: 00 30 00 00  00 D0 06 00  10 2D 09 00  00 E0 06 00  .0.......-......
 00330120: 00 30 09 00  00 00 00 10  00 10 00 00  00 02 00 00  .0..............
 00330130: 04 00 00 00  00 00 00 00  04 00 00 00  00 00 00 00  ................
 00330140: 00 60 09 00  00 10 00 00  00 00 00 00  02 00 00 00  .`..............

 ------------------------------------------------------------------------------

======================================================================
Hardware/Driver Information:
Processor:              0x0
Page Size:              4096
Min App Address:        0x10000
Max App Address:        0x7ffeffff
Processor Mask:         0x3
Number of Processors:   2
Processor Type:         586
Allocation Granularity: 65536
Processor Level:        6
Processor Revision:     14857

Percent memory used:    59
Total physical memory:  2147483647
Free Memory:            2147483647
Page file:              -524289
Total virtual memory:   2147352575

## Post 27647 by Totuga (Barrens Chat Casualty) — 2022-10-21T07:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27647#p27647 | page 1 | era: pre-1.18.1 -->

42

*Last edited by Totuga on Wed Apr 26, 2023 4:08 am, edited 2 times in total.*

## Post 27653 by Fenzakosu — 2022-10-21T12:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27653#p27653 | page 1 | era: pre-1.18.1 -->

Error log is Wine without Lutris. I also get :

"   Cannot add PPA: ''This PPA does not support focal''.    "

, when I run

" sudo add-apt-repository ppa:ubuntu-wine/ppa " .

## Post 27655 by Projecx (Barrens Chat Casualty) — 2022-10-21T14:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27655#p27655 | page 1 | era: pre-1.18.1 -->

You're better off running it through Steam and Proton.

## Post 27658 by Fenzakosu — 2022-10-21T15:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27658#p27658 | page 1 | era: pre-1.18.1 -->

> **Projecx wrote: Fri Oct 21, 2022 2:45 pm**
> You're better off running it through Steam and Proton.

Nope, tried that one also, no luck whether I use it with Lutris or just Steam & Proton.

## Post 27665 by Projecx (Barrens Chat Casualty) — 2022-10-21T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27665#p27665 | page 1 | era: pre-1.18.1 -->

> **Fenzakosu wrote: Fri Oct 21, 2022 3:40 pm**
> > **Projecx wrote: Fri Oct 21, 2022 2:45 pm**
> > You're better off running it through Steam and Proton.
>
>  Nope, tried that one also, no luck whether I use it with Lutris or just Steam & Proton.

Odd, I have installed Mint and Turtle WoW on 3 separate systems and only once had a minor problem with a Nvidia GTX 660 driver.

What is your system's hardware configuration?

Also you have to install all the Linux runtimes and Proton manually in Steam for some reason. When I first tried I didn't realize you had to do this.

## Post 27667 by Fenzakosu — 2022-10-21T18:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27667#p27667 | page 1 | era: pre-1.18.1 -->

cpu:
Intel(R) Pentium(R) CPU G2030 @ 3.00GHz, 2993 MHz
Intel(R) Pentium(R) CPU G2030 @ 3.00GHz, 2993 MHz
keyboard:
/dev/input/event6    China Resource Semico USB Keyboard
Logitech Unifying Receiver
mouse:
Logitech Unifying Receiver
/dev/input/mice      China Resource Semico USB Keyboard
monitor:
SAMSUNG SyncMaster
graphics card:
ATI Oland PRO [Radeon R7 240/340]
sound:
Intel 6 Series/C200 Series Chipset Family High Definition Audio Controller
ATI Oland/Hainan/Cape Verde/Pitcairn HDMI Audio [Radeon HD 7000 Series]
storage:
Intel 6 Series/C200 Series Chipset Family Desktop SATA Controller (IDE mode, ports 0-3)
Intel 6 Series/C200 Series Chipset Family Desktop SATA Controller (IDE mode, ports 4-5)
network:
enp3s0               Realtek RTL810xE PCI Express Fast Ethernet controller
wlxd03745041514      TP-Link TL-WN722N v2
network interface:
wlxd03745041514      Ethernet network interface
lo                   Loopback network interface
enp3s0               Ethernet network interface
docker0              Ethernet network interface
disk:
/dev/sda             TOSHIBA DT01ACA0
partition:
/dev/sda1            Partition
/dev/sda2            Partition
cdrom:
/dev/sr0             TSSTcorp CDDVDW SH-224DB
usb controller:
Intel 6 Series/C200 Series Chipset Family USB Enhanced Host Controller #2
Intel 6 Series/C200 Series Chipset Family USB Enhanced Host Controller #1
bios:
BIOS
bridge:
Intel 6 Series/C200 Series Chipset Family PCI Express Root Port 1
Intel H61 Express Chipset LPC Controller
Intel Xeon E3-1200 v2/3rd Gen Core processor PCI Express Root Port
Intel Xeon E3-1200 v2/3rd Gen Core processor DRAM Controller
Intel 6 Series/C200 Series Chipset Family PCI Express Root Port 5
hub:
Intel Integrated Rate Matching Hub
Linux Foundation 2.0 root hub
Intel Integrated Rate Matching Hub
Linux Foundation 2.0 root hub
memory:
Main Memory
unknown:
FPU
DMA controller
PIC
Keyboard controller
/dev/lp0             Parallel controller
Intel 6 Series/C200 Series Chipset Family MEI Controller #1
Intel 6 Series/C200 Series Chipset Family SMBus Controller
Serial controller

## Post 27668 by Totuga (Barrens Chat Casualty) — 2022-10-21T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27668#p27668 | page 1 | era: pre-1.18.1 -->

41

*Last edited by Totuga on Wed Apr 26, 2023 4:08 am, edited 1 time in total.*

## Post 27675 by Fenzakosu — 2022-10-21T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27675#p27675 | page 1 | era: pre-1.18.1 -->

Doesn't work still. I give up. Thanks for trying to help me, folks.    smiling_turtle_head

## Post 37180 by Pttfire29 — 2023-03-08T19:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37180#p37180 | page 1 | era: pre-1.18.1 -->

- Install regular WoW Classic with Lutris.

- Download Turtle WoW zip.

- Extract the Turtle WoW into the Program Files folder in the Lutris WoW Classic installation folder

- Copy the Lutris configuration for the WoW Classic (it's an option in the menu)

- Edit the copied configuration by changing it's name and the executable to WoW.exe from Turtle WoW

