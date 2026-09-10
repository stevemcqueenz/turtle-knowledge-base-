---
title: "Attack Speed Enchantment will be overridden by flurry，This is a serious BUG。"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11715"
topic_id: 11715
forum_id: 3
forum: "Help & Support"
author: "Mmjjfsdjs"
author_authority: "player"
posted: "2023-11-14T16:15:00Z"
last_post: "2023-11-14T17:04:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:58:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Attack Speed Enchantment will be overridden by flurry，This is a serious BUG。

## Post 77364 by Mmjjfsdjs — 2023-11-14T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77364#p77364 | page 1 | era: pre-1.18.1 -->

Hi, I found a BUG in the game where my character is a warrior and accumulates 10% speed, but I found that when I triggered the flurry buff, my attack speed was not properly increased.    I have a weapon with 3.7 speed, when I have 10% speed, its speed becomes 3.35, which is correct, but when I trigger 30% acceleration of the flurry  BUFF, my attack speed is 2.58, which I think is incorrect, the flurry BUFF overrides the enchantment of my equipment.    Please fix them.

## Post 77368 by Balake (Bug Report Enthusiast) — 2023-11-14T16:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77368#p77368 | page 1 | era: pre-1.18.1 -->

screenshots?

## Post 77371 by Mmjjfsdjs — 2023-11-14T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77371#p77371 | page 1 | era: pre-1.18.1 -->

I don't know how to put pictures on this forum, I can only describe my problem

I have 10% haste, and when I have all my gear with me, my attack speed of 3.7 hammer hits becomes 3.35. Shouldn't it be 3.33?

And when I had flurry,My attack speed is now 2.58,Why not 2.59。

How is 10%haste calculated？

## Post 77376 by Nurincarinun — 2023-11-14T17:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77376#p77376 | page 1 | era: pre-1.18.1 -->

Calculation:

As: attack speed without haste
Ash: attack speed with haste
H: haste rating

As/Ash=(H+100%)

So it'd take 3.7 to 3.7/1.1=3.3636 with 10% haste. Applying another 30% by flurry will take 3.3636 to 3.3636/1.3=2.5874. Interesting, I would've expected a summative multiplicator of 1/1.4 for the conversion. This is the convoluted multiplying by means of how I could relate your numbers though.

