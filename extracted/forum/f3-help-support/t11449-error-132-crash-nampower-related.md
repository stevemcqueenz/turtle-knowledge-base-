---
title: "Error #132 Crash - Nampower related?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11449"
topic_id: 11449
forum_id: 3
forum: "Help & Support"
author: "Cromius"
author_authority: "player"
posted: "2023-11-04T03:24:00Z"
last_post: "2023-11-07T02:52:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:59:15Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Error #132 Crash - Nampower related?

## Post 75819 by Cromius — 2023-11-04T03:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75819#p75819 | page 1 | era: pre-1.18.1 -->

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:6DD82DD9

The instruction at "0x6DD82DD9" referenced memory at "0x00000000".
The memory could not be "read".

WoWBuild: 5875

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 6DD82DD9 0019FAD4 0001:00001DD9 C:\Users\Scott\Turtle Wow\nampower.dll
 6DD8BD3E 0019FAF8 0001:0000AD3E C:\Users\Scott\Turtle Wow\nampower.dll
 6DD8F774 0019FB18 0001:0000E774 C:\Users\Scott\Turtle Wow\nampower.dll
 6DD8E864 0019FB68 0001:0000D864 C:\Users\Scott\Turtle Wow\nampower.dll
 006E5AC3 0019FB80 0001:002E4AC3 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 004E611E 0019FBB8 0001:000E511E C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 004E718C 0019FBEC 0001:000E618C C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 006F9231 0019FC34 0001:002F8231 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 006F65EF 0019FC44 0001:002F55EF C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 006F425B 0019FCAC 0001:002F325B C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 006F699B 0019FCD4 0001:002F599B C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 006F423C 0019FCF8 0001:002F323C C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00704D27 0019FD20 0001:00303D27 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 004B7B11 0019FD8C 0001:000B6B11 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00483C32 0019FDA8 0001:00082C32 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00766028 0019FDDC 0001:00365028 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 004246B0 0019FE10 0001:000236B0 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00423DA0 0019FE2C 0001:00022DA0 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00423A76 0019FE3C 0001:00022A76 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00423971 0019FE6C 0001:00022971 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00420D28 0019FEC8 0001:0001FD28 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 00420BF1 0019FEE0 0001:0001FBF1 C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 0040411E 0019FF70 0001:0000311E C:\Users\Scott\Turtle Wow\WoW_tweaked.exe
 753AFCC9 0019FF80 0001:0000FCC9 C:\WINDOWS\System32\KERNEL32.DLL
 774D7B1E 0019FFDC 0001:00066B1E C:\WINDOWS\SYSTEM32\ntdll.dll
 774D7AEE 0019FFEC 0001:00066AEE C:\WINDOWS\SYSTEM32\ntdll.dll

## Post 75944 by Taiga85 — 2023-11-05T03:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75944#p75944 | page 1 | era: pre-1.18.1 -->

same thing here

WoW.exe Error #132

can happen before or after I login to the game
after choosing a toon

There are tears in the game for short time before clashing as well

I havent had this issue when I had GTX960.

My PC specs:

R7-5800X
 32GB ram
RX 6700 XT Driver: 31.0.22017.3004 updated 16/10/23 (was GTX 960)
SSD

 2X 27 inch QHD LG monitor Both works for G-sync, and freesync

## Post 76128 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-11-06T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76128#p76128 | page 1 | era: pre-1.18.1 -->

Greetings!
We do not support running Vfixes or Vtweaks/Nampower. This modification is supported by the authors. You can ask the author directly here <https://github.com/namreeb/nampower> .
Also I advise you to come to our discor in canal <https://discord.com/channels/4666224558> ... 5222984744. There you will get help much faster.

## Post 76237 by Cowdy — 2023-11-07T02:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76237#p76237 | page 1 | era: pre-1.18.1 -->

You still get error#132 without running any moddings, its the patch 1.17 problem.

