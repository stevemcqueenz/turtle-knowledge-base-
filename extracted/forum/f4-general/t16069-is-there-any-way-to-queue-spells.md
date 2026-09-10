---
title: "Is there any way to queue spells?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16069"
topic_id: 16069
forum_id: 4
forum: "General"
author: "Argonianfly"
author_authority: "player"
posted: "2024-11-22T19:56:00Z"
last_post: "2024-11-25T12:40:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:49:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is there any way to queue spells?

## Post 109432 by Argonianfly — 2024-11-22T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109432#p109432 | page 1 | era: pre-1.18.1 -->

I just started playing a mage and spellcasting feels really bad to me because it seems there's no way to queue up spells at the last second. I have to wait ~0.2 seconds after casting to be able to start another cast and I have high ping, so sometimes it doesn't start casting even when I feel like it started it after finishing the previous cast. I downloaded Nampower because I heard that helps, but I don't feel like it changed anything. In case I didn't download it correctly, I unzipped the nampower-master file to the file where my wow.exe is. I also have VanillaFixes and Tweaks and they seem to be working fine.
Thank you to anyone who can help.

## Post 109433 by amanagor (Grandmaster of Forum PvP) — 2024-11-22T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109433#p109433 | page 1 | era: pre-1.18.1 -->

yes nampower, you need the dll in your main turtle directory, and your client needs to load it. If its installed correctly, this macro : /run QueueSpellByName("frostbolt");QueueSpellByName("frostbolt")
should cast 2 frostbolts in a row with only 1 keypress.

## Post 109472 by Argonianfly — 2024-11-23T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109472#p109472 | page 1 | era: pre-1.18.1 -->

I found what was wrong ty. I hadn't downloaded the nampower dll lol, only the github repository it looks like. Thank you.

## Post 109808 by s2am.s — 2024-11-25T12:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109808#p109808 | page 1 | era: pre-1.18.1 -->

> **Argonianfly wrote: Sat Nov 23, 2024 2:22 am**
> I found what was wrong ty. I hadn't downloaded the nampower dll lol, only the github repository it looks like. Thank you.

Even after downloading the DLL, I'm encountering problems.  crying_turtle

