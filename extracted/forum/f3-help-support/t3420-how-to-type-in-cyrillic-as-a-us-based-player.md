---
title: "How to type in cyrillic  as a US based player?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3420"
topic_id: 3420
forum_id: 3
forum: "Help & Support"
author: "Idontcare8979"
author_authority: "player"
posted: "2022-07-30T21:57:00Z"
last_post: "2025-01-31T17:29:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:47:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How to type in cyrillic  as a US based player?

## Post 20707 by Idontcare8979 — 2022-07-30T21:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20707#p20707 | page 1 | era: pre-1.18.1 -->

I downloaded turtle wow and cannot type in Cyrillic. I have the Russian language pack installed on my computer and can type in Cyrillic no problem in retail classic wow, but on private server vanilla clients when I try and type in Cyrillic it comes up as Latin letters with weird marks over them. When other players type in Cyrillic I can read it fine but when I try it does not work. Any solutions? I assume the issue is that I downloaded Turtle from the US, but I even made a new windows account with the default language as Russian and set my vpn to Ukraine and redownloaded turtle and the problem still persists.

## Post 41161 by Troxxor — 2023-04-11T16:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41161#p41161 | page 1 | era: pre-1.18.1 -->

I have this exact issue, I can read cyrillic and when I write, it's latin vowels with funny symbols over them.

Other people can read my gibberish as cyrillic, but I cannot, on my screen it is just jibberish!

Any solution for this?

## Post 51517 by Haharinsky — 2023-06-27T17:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51517#p51517 | page 1 | era: pre-1.18.1 -->

Same here. I think the problem with Windows version or default enconding settings. Because I have US Windows installed

## Post 51519 by Werefox (Patch Note Conspiracy Theorist) — 2023-06-27T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51519#p51519 | page 1 | era: pre-1.18.1 -->

You need to set up your system locale which is "Language for non-Unicode programs" in your Win Region and language settings, Administrative tab.

## Post 54194 by Haharinsky — 2023-07-21T08:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54194#p54194 | page 1 | era: pre-1.18.1 -->

Worked for me:
 1. Win+R, type "regedit" and press Enter
 2. Open "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\CodePage"
 3. Scroll to the bottom, find "ACP" and set "1251". It is better to remember what value was here before.
 4. Reboot

## Post 78810 by Fred25 — 2023-11-26T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78810#p78810 | page 1 | era: pre-1.18.1 -->

Thanks for help, guys!

## Post 118063 by Makskluver — 2025-01-27T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118063#p118063 | page 1 | era: pre-1.18.1 -->

Didn't help, any other ideas?

## Post 118104 by Allwynd01 (Bug Report Enthusiast) — 2025-01-27T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118104#p118104 | page 1 | era: pre-1.18.1 -->

Maybe you "CAN" type, but you just can't see it. Try if others are seeing the correct letters even if you aren't.

## Post 118559 by Makskluver — 2025-01-31T17:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118559#p118559 | page 1 | era: pre-1.18.1 -->

I and others see only "funny" letters

