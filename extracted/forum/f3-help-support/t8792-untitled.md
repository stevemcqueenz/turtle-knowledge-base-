---
title: "游戏一直弹出错误"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8792"
topic_id: 8792
forum_id: 3
forum: "Help & Support"
author: "Yunxiaocn"
author_authority: "player"
posted: "2023-08-10T16:03:00Z"
last_post: "2023-08-10T16:03:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:09:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 游戏一直弹出错误

## Post 56711 by Yunxiaocn — 2023-08-10T16:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56711#p56711 | page 1 | era: pre-1.18.1 -->

==============================================================================
World of WarCraft (build 5875)

Exe:      D:\Game\WOW1.165\WoW_Auto.exe
Time:     Aug 10, 2023 11:55:18.758 PM
User:     XZQ
Computer: XZQ-PC
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	D:\Game\WOW1.165\WoW_Auto.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:0071AACE

The instruction at "0x0071AACE" referenced memory at "0x22195A10".
The memory could not be "read".

WoWBuild: 5875
 ------------------------------------------------------------------------------

 ----------------------------------------
x86 Registers
 ----------------------------------------

EAX=22195A10  EBX=450F442D  ECX=450F442D  EDX=22192010  ESI=00000012
EDI=31BDF38C  EBP=0018C7FC  ESP=0018C7BC  EIP=0071AACE  FLG=00210202
CS =0023      DS =002B      ES =002B      SS =002B      FS =0053      GS =002B

 ----------------------------------------
Stack Trace (Manual)
 ----------------------------------------

Address  Frame    Logical addr  Module

 0071AACE 0018C7FC 0001:00319ACE D:\Game\WOW1.165\WoW_Auto.exe
 00719C14 0018C820 0001:00318C14 D:\Game\WOW1.165\WoW_Auto.exe
 0070CF08 0018C84C 0001:0030BF08 D:\Game\WOW1.165\WoW_Auto.exe
 0070B62C 0018C8E0 0001:0030A62C D:\Game\WOW1.165\WoW_Auto.exe
 0070896E 0018FC5C 0001:0030796E D:\Game\WOW1.165\WoW_Auto.exe
 004836AB 0018FC9C 0001:000826AB D:\Game\WOW1.165\WoW_Auto.exe
 00482E7A 0018FD28 0001:00081E7A D:\Game\WOW1.165\WoW_Auto.exe
 0076FC31 0018FD44 0001:0036EC31 D:\Game\WOW1.165\WoW_Auto.exe
 007658E7 0018FD68 0001:003648E7 D:\Game\WOW1.165\WoW_Auto.exe
 0076434C 0018FD74 0001:0036334C D:\Game\WOW1.165\WoW_Auto.exe
 0044264E 0018FE3C 0001:0004164E D:\Game\WOW1.165\WoW_Auto.exe
 004246B0 0018FE70 0001:000236B0 D:\Game\WOW1.165\WoW_Auto.exe
 0042106F 0018FEE0 0001:0002006F D:\Game\WOW1.165\WoW_Auto.exe
 00420BF1 0018FEF8 0001:0001FBF1 D:\Game\WOW1.165\WoW_Auto.exe
 0040411E 0018FF88 0001:0000311E D:\Game\WOW1.165\WoW_Auto.exe
 76BE343D 0018FF94 0001:0000343D C:\Windows\syswow64\kernel32.dll
 77649812 0018FFD4 0001:00029812 C:\Windows\SysWOW64\ntdll.dll
 776497E5 0018FFEC 0001:000297E5 C:\Windows\SysWOW64\ntdll.dll

 ----------------------------------------
Stack Trace (Using DBGHELP.DLL)
 ----------------------------------------

 0071AACE WoW_Auto.exe <unknown symbol>+0 (0x42613DA0,0x322CA348,0x0018C900,0x00000000)

 ----------------------------------------
Loaded Modules
 ----------------------------------------

 0x002F0000 - 0x00386000  D:\Game\WOW1.165\fmod.dll
 0x00400000 - 0x00D06000  D:\Game\WOW1.165\WoW_Auto.exe
 0x0F000000 - 0x0F006000  C:\Program Files (x86)\NVIDIA Corporation\CoProcManager\detoured.dll
 0x0F3D0000 - 0x0FFAE000  C:\Windows\system32\nvd3dum.dll
 0x10000000 - 0x10069000  D:\Game\WOW1.165\DivxDecoder.dll
 0x12CE0000 - 0x12DF8000  D:\Game\WOW1.165\dbghelp.dll
 0x50EF0000 - 0x5198D000  C:\Windows\system32\igdumd32.dll
 0x58E30000 - 0x58F17000  C:\Windows\system32\nvumdshim.dll
 0x5E770000 - 0x5E777000  C:\Windows\system32\midimap.dll
 0x5E780000 - 0x5E794000  C:\Windows\system32\MSACM32.dll
 0x5E7A0000 - 0x5E7A8000  C:\Windows\system32\msacm32.drv
 0x5E7B0000 - 0x5E7E6000  C:\Windows\system32\AUDIOSES.DLL
 0x5E7F0000 - 0x5E7F7000  C:\Windows\system32\AVRT.dll
 0x5E800000 - 0x5E804000  C:\Windows\system32\ksuser.dll
 0x5E810000 - 0x5E840000  C:\Windows\system32\wdmaud.drv
 0x60CA0000 - 0x60D12000  C:\Windows\system32\dsound.dll
 0x61AB0000 - 0x61AF1000  C:\Windows\SysWOW64\schannel.dll
 0x67AC0000 - 0x67AE5000  C:\Windows\system32\powrprof.dll
 0x69080000 - 0x6908D000  C:\Windows\system32\wshbth.dll
 0x69090000 - 0x69098000  C:\Windows\System32\winrnr.dll
 0x690A0000 - 0x690B2000  C:\Windows\system32\pnrpnsp.dll
 0x69300000 - 0x69310000  C:\Windows\system32\napinsp.dll
 0x69E30000 - 0x6A02F000  C:\Windows\system32\d3dx9_43.dll
 0x6A580000 - 0x6A883000  D:\Game\WOW1.165\discord_game_sdk.dll
 0x6E2B0000 - 0x6E397000  C:\Windows\system32\DDRAW.dll
 0x6E3A0000 - 0x6E468000  C:\Windows\system32\OPENGL32.dll
 0x6E470000 - 0x6E633000  C:\Windows\system32\d3d9.dll
 0x6FD00000 - 0x6FE9E000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_6.0.7601.24483_none_2b200f664577e14b\Comctl32.dll
 0x72670000 - 0x7269F000  D:\Game\WOW1.165\d3d9.dll
 0x72CA0000 - 0x72D24000  C:\Windows\WinSxS\x86_microsoft.windows.common-controls_6595b64144ccf1df_5.82.7601.18837_none_ec86b8d6858ec0bc\COMCTL32.dll
 0x72E20000 - 0x72E28000  C:\Windows\System32\npmproxy.dll
 0x72E50000 - 0x72E5E000  C:\Windows\system32\RpcRtRemote.dll
 0x72E60000 - 0x72E9B000  C:\Windows\system32\rsaenh.dll
 0x72EA0000 - 0x72EB7000  C:\Windows\system32\CRYPTSP.dll
 0x72EC0000 - 0x72ECD000  C:\Windows\system32\dhcpcsvc6.DLL
 0x72ED0000 - 0x72EE0000  C:\Windows\System32\nlaapi.dll
 0x72EE0000 - 0x72F3A000  C:\Windows\System32\netprofm.dll
 0x72F40000 - 0x72F52000  C:\Windows\system32\dhcpcsvc.DLL
 0x72F70000 - 0x72F76000  C:\Windows\System32\wship6.dll
 0x72F80000 - 0x72F86000  C:\Windows\system32\rasadhlp.dll
 0x72F90000 - 0x72FC8000  C:\Windows\System32\fwpuclnt.dll
 0x72FD0000 - 0x72FD4000  C:\Windows\system32\api-ms-win-downlevel-advapi32-l2-1-0.dll
 0x72FE0000 - 0x72FE8000  C:\Windows\system32\Secur32.dll
 0x72FF0000 - 0x73034000  C:\Windows\system32\DNSAPI.dll
 0x73040000 - 0x73045000  C:\Windows\System32\wshtcpip.dll
 0x73050000 - 0x7308C000  C:\Windows\system32\mswsock.dll
 0x73180000 - 0x73183000  C:\Windows\system32\api-ms-win-core-synch-l1-2-0.DLL
 0x73190000 - 0x73197000  C:\Windows\system32\WINNSI.DLL
 0x731A0000 - 0x731BC000  C:\Windows\system32\IPHLPAPI.DLL
 0x73330000 - 0x73351000  C:\Windows\system32\ntmarta.dll
 0x73360000 - 0x73369000  C:\Windows\system32\version.DLL
 0x734A0000 - 0x73595000  C:\Windows\System32\PROPSYS.dll
 0x735A0000 - 0x735D9000  C:\Windows\System32\MMDevApi.dll
 0x735E0000 - 0x7361A000  C:\Windows\SysWOW64\nvinit.dll
 0x73620000 - 0x73652000  C:\Windows\system32\WINMM.dll
 0x739C0000 - 0x739D3000  C:\Windows\system32\dwmapi.dll
 0x73A00000 - 0x73A80000  C:\Windows\system32\uxtheme.dll
 0x73C20000 - 0x73C6B000  C:\Program Files (x86)\NVIDIA Corporation\CoProcManager\nvd3d9wrap.dll
 0x73C80000 - 0x73CB3000  C:\Program Files (x86)\NVIDIA Corporation\CoProcManager\nvdxgiwrap.dll
 0x73E30000 - 0x73E52000  C:\Windows\system32\GLU32.dll
 0x73E70000 - 0x73E79000  C:\Windows\system32\ktmw32.dll
 0x73E80000 - 0x73E9E000  D:\Game\WOW1.165\DiscordOverlay.dll
 0x747B0000 - 0x747B8000  C:\Windows\system32\credssp.dll
 0x74880000 - 0x74886000  C:\Windows\system32\SensApi.dll
 0x74890000 - 0x748AD000  C:\Windows\system32\cryptnet.dll
 0x748B0000 - 0x748C6000  C:\Windows\system32\GPAPI.dll
 0x748D0000 - 0x74909000  C:\Windows\system32\ncrypt.dll
 0x74910000 - 0x7494D000  C:\Windows\SysWOW64\bcryptprimitives.dll
 0x74950000 - 0x74967000  C:\Windows\system32\bcrypt.dll
 0x749C0000 - 0x749C7000  C:\Windows\system32\WSOCK32.dll
 0x749F0000 - 0x749F4000  C:\Windows\system32\api-ms-win-downlevel-shlwapi-l2-1-0.dll
 0x74C30000 - 0x74C36000  C:\Windows\system32\DCIMAN32.dll
 0x74C40000 - 0x74C46000  C:\Windows\system32\d3d8thk.dll
 0x74D20000 - 0x74D2C000  C:\Windows\syswow64\CRYPTBASE.dll
 0x74D30000 - 0x74D90000  C:\Windows\syswow64\SspiCli.dll
 0x74D90000 - 0x74DC5000  C:\Windows\syswow64\WS2_32.dll
 0x74DD0000 - 0x75008000  C:\Windows\syswow64\iertutil.dll
 0x75010000 - 0x7501C000  C:\Windows\syswow64\MSASN1.dll
 0x75020000 - 0x75024000  C:\Windows\syswow64\api-ms-win-downlevel-user32-l1-1-0.dll
 0x75030000 - 0x75152000  C:\Windows\syswow64\CRYPT32.dll
 0x75160000 - 0x751FD000  C:\Windows\syswow64\USP10.dll
 0x75290000 - 0x7529B000  C:\Windows\syswow64\profapi.dll
 0x752A0000 - 0x752B9000  C:\Windows\SysWOW64\sechost.dll
 0x752C0000 - 0x752D9000  C:\Windows\syswow64\USERENV.dll
 0x752E0000 - 0x752E4000  C:\Windows\syswow64\api-ms-win-downlevel-ole32-l1-1-0.dll
 0x752F0000 - 0x75727000  C:\Windows\syswow64\WININET.dll
 0x75730000 - 0x75775000  C:\Windows\syswow64\WLDAP32.dll
 0x75780000 - 0x75821000  C:\Windows\syswow64\ADVAPI32.dll
 0x75830000 - 0x7583A000  C:\Windows\syswow64\LPK.dll
 0x75840000 - 0x758D2000  C:\Windows\syswow64\OLEAUT32.dll
 0x758E0000 - 0x75970000  C:\Windows\syswow64\GDI32.dll
 0x75970000 - 0x759F3000  C:\Windows\syswow64\CLBCatQ.DLL
 0x75A30000 - 0x75A42000  C:\Windows\syswow64\DEVOBJ.dll
 0x75A50000 - 0x75B1E000  C:\Windows\syswow64\MSCTF.dll
 0x75B20000 - 0x75C10000  C:\Windows\syswow64\RPCRT4.dll
 0x75C10000 - 0x75C70000  C:\Windows\syswow64\IMM32.dll
 0x75C70000 - 0x75C74000  C:\Windows\syswow64\api-ms-win-downlevel-version-l1-1-0.dll
 0x75C80000 - 0x75CD7000  C:\Windows\syswow64\SHLWAPI.dll
 0x75CE0000 - 0x75D07000  C:\Windows\syswow64\CFGMGR32.dll
 0x75D10000 - 0x75D16000  C:\Windows\syswow64\NSI.dll
 0x75D20000 - 0x75D25000  C:\Windows\syswow64\api-ms-win-downlevel-advapi32-l1-1-0.dll
 0x75D30000 - 0x75D33000  C:\Windows\syswow64\normaliz.DLL
 0x75DA0000 - 0x75EA0000  C:\Windows\syswow64\USER32.dll
 0x75EA0000 - 0x75F4C000  C:\Windows\syswow64\msvcrt.dll
 0x75F50000 - 0x76B9C000  C:\Windows\syswow64\SHELL32.dll
 0x76BA0000 - 0x76BCF000  C:\Windows\syswow64\WINTRUST.dll
 0x76BD0000 - 0x76CE0000  C:\Windows\syswow64\kernel32.dll
 0x76CE0000 - 0x76CE4000  C:\Windows\syswow64\api-ms-win-downlevel-shlwapi-l1-1-0.dll
 0x76CF0000 - 0x76CF5000  C:\Windows\syswow64\PSAPI.DLL
 0x76D00000 - 0x76E4F000  C:\Windows\syswow64\urlmon.dll
 0x76E50000 - 0x76E53000  C:\Windows\syswow64\api-ms-win-downlevel-normaliz-l1-1-0.dll
 0x76EE0000 - 0x7707D000  C:\Windows\syswow64\SETUPAPI.dll
 0x77080000 - 0x771DF000  C:\Windows\syswow64\ole32.dll
 0x771E0000 - 0x77227000  C:\Windows\syswow64\KERNELBASE.dll
 0x77610000 - 0x77790000  C:\Windows\SysWOW64\ntdll.dll

 ----------------------------------------
Memory Dump
 ----------------------------------------

Code: 16 bytes starting at (EIP = 0071AACE)

 0071AACE: 0F 28 00 0F  59 C4 0F 28  48 10 0F 59  CC 0F 28 50  .(..Y..(H..Y..(P

Stack: 1024 bytes starting at (ESP = 0018C7BC)

 * = addr                                         **                       *
 0018C7B0: 00 18 00 00  C8 DC 19 05  08 80 1A 05  08 10 27 43  ..............'C
 0018C7C0: C8 DC 19 05  8C F3 BD 31  2D 00 00 00  44 00 00 00  .......1-...D...
 0018C7D0: 0F 00 00 00  45 00 00 00  00 3A 00 00  40 00 00 00  ....E....:..@...
 0018C7E0: 00 00 00 00  00 00 00 00  A0 3D 61 42  10 20 19 22  .........=aB. ."
 0018C7F0: 10 00 03 45  05 40 0F 45  E8 01 00 00  20 C8 18 00  [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection).... ...
 0018C800: 14 9C 71 00  A0 3D 61 42  48 A3 2C 32  00 C9 18 00  ..q..=aBH.,2....
 0018C810: 00 00 00 00  00 C9 18 00  00 00 00 00  C8 DC 19 05  ................
 0018C820: 4C C8 18 00  08 CF 70 00  00 00 00 00  60 3B 61 42  L.....p.....`;aB
 0018C830: 0F 01 00 00  00 C9 18 00  00 00 00 00  03 00 00 00  ................
 0018C840: 48 06 00 00  0C 00 00 00  07 00 00 00  E0 C8 18 00  H...............
 0018C850: 2C B6 70 00  00 00 00 00  08 60 98 0E  28 95 16 21  ,.p......`..(..!
 0018C860: 86 B9 71 BF  33 1F 1A BE  E4 F0 95 BE  00 00 00 00  ..q.3...........
 0018C870: 98 95 A8 3E  D7 FC DC BE  2E FE 56 BF  00 00 00 00  ...>......V.....
 0018C880: 5C EB 94 B1  84 B0 63 3F  CF 09 EA BE  00 00 00 00  \.....c?........
 0018C890: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
 0018C8A0: 00 00 00 00  00 00 00 00  00 00 00 00  49 41 40 00  ............IA@.
 0018C8B0: 00 00 00 00  F4 C8 18 00  49 41 40 00  00 00 00 00  ........IA@.....
 0018C8C0: 00 C9 18 00  A0 CA 18 00  EC C8 18 00  A5 B1 70 00  ..............p.
 0018C8D0: A0 CA 18 00  EC C8 18 00  27 B2 70 00  00 00 00 00  ........'.p.....
 0018C8E0: 5C FC 18 00  6E 89 70 00  00 00 00 00  08 00 2C 32  \...n.p.......,2
 0018C8F0: 08 C0 40 23  24 01 00 00  08 00 C5 0E  08 60 98 0E  ..@#$........`..
 0018C900: 00 00 80 3F  00 00 00 00  00 00 00 00  00 00 00 00  ...?............
 0018C910: 00 00 00 00  00 00 80 3F  00 00 00 00  00 00 00 00  .......?........
 0018C920: 00 00 00 00  00 00 00 00  00 00 80 3F  00 00 00 00  ...........?....
 0018C930: 00 00 00 00  00 00 00 00  00 00 00 00  00 00 80 3F  ...............?
 0018C940: 08 60 98 0E  B0 EF CE 00  10 00 03 45  00 00 00 00  .`.........E....
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

这个应该怎么办  unhappy_turtle

