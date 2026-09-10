---
title: "Sinister Strike startattack macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12560"
topic_id: 12560
forum_id: 4
forum: "General"
author: "Munchlax"
author_authority: "player"
posted: "2024-01-05T03:19:00Z"
last_post: "2024-01-06T17:34:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:55:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Sinister Strike startattack macro

## Post 83668 by Munchlax — 2024-01-05T03:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83668#p83668 | page 1 | era: pre-1.18.1 -->

Hello everyone,

I was wondering if i could get some help setting up a macro to similar to this one in classicwow

#showtooltip
/startattack
/cast Sinister Strike

I have tried this in turtlewow and it does not work. I was wondering what i am doing wrong and appreciate any help!

Thanks for your time!

Munchlax

## Post 83669 by Koronisz (Barrens Chat Casualty) — 2024-01-05T03:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83669#p83669 | page 1 | era: pre-1.18.1 -->

[https://github.com/Meridaw/Vanilla-Macr ... 0strike.md](https://github.com/Meridaw/Vanilla-Macros/blob/master/Rogue/Sinister%20strike.md)

You can also look into macro addons <https://turtle-wow.fandom.com/wiki/Addons>

## Post 83815 by Munchlax — 2024-01-06T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83815#p83815 | page 1 | era: pre-1.18.1 -->

Hey Koronisz,

I will try this out and thank you for the link to turtle wow's addons!

Munchlax

## Post 83834 by Annoying (Barrens Chat Casualty) — 2024-01-06T17:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83834#p83834 | page 1 | era: pre-1.18.1 -->

/script if not IsCurrentAction(55) then UseAction(55) end
/cast Sinister Strike

Put auto attack on slot 55 or change the number to something else.

![Image](https://i.imgur.com/IbP6QK0.jpg)

