---
title: "Help with LazySpell and PfUI"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13246"
topic_id: 13246
forum_id: 18
forum: "AddOns"
author: "Imonobor"
author_authority: "player"
posted: "2024-02-25T19:17:00Z"
last_post: "2024-03-05T18:37:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:29:21Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with LazySpell and PfUI

## Post 88751 by Imonobor (Bug Report Enthusiast) — 2024-02-25T19:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88751#p88751 | page 1 | era: pre-1.18.1 -->

Hello!
I need some help with setting up LazySpell (<https://github.com/laytya/Lazyspell>) with PfUI's click casting. According to LazySpell, with version 0.4 it should support PfUI, but I just can't get it working.

Here is what I've done so far:
 -Installed and enabled LazySpell
 -Set up Clickcasting in PfUI settings by enabling it for all unit frames (all boxes ticked) and entering "/cast Flash Heal(Rank 1)" under "Middle Click"

Middle clicking on any unit frame does cast Flash Heal, but only Rank 1, no matter the health deficit. I've looked at the LazySpell settings and everything seems to be set up correctly. Disabling PFUI's clickcasting makes clicking on a frame throw an error, so it's clearly "interacting" with pfui in some form, I just can't get it to rank the spells.

## Post 89492 by Repmar — 2024-03-05T15:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89492#p89492 | page 1 | era: pre-1.18.1 -->

Can't remember if I got Lazyspell to work with PFUI and Clique, but if it's all the same to you, you could try SmartHealer instead (<https://github.com/melbaa/SmartHealer>). Definitely works with PFUI and Clique, not sure about PFUI and its click casting. Try it.

## Post 89502 by Imonobor (Bug Report Enthusiast) — 2024-03-05T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89502#p89502 | page 1 | era: pre-1.18.1 -->

> **Repmar wrote: Tue Mar 05, 2024 3:55 pm**
> Can't remember if I got Lazyspell to work with PFUI and Clique, but if it's all the same to you, you could try SmartHealer instead (<https://github.com/melbaa/SmartHealer>). Definitely works with PFUI and Clique, not sure about PFUI and its click casting. Try it.

Thank you! Works like a charm, with PfUI clickcasting too!   turtle_in_love_head

