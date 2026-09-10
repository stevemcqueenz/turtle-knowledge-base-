---
title: "Enchanting Hover Macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7630"
topic_id: 7630
forum_id: 33
forum: "Professions"
author: "Saltie"
author_authority: "player"
posted: "2023-06-04T22:41:00Z"
last_post: "2025-11-12T13:09:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:25:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Enchanting Hover Macro?

## Post 48857 by Saltie — 2023-06-04T22:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48857#p48857 | page 1 | era: pre-1.18.1 -->

Hi, I'm looking for a macro that I can use to help speed up enchanting. I know in 3.3.5 clients there's a macro that you press, click on the item, it skips the "Are you sure?" pop-up, and enchants the item. Is there anything like that for 1.12? Thanks in advance!

## Post 48862 by Lexiebean (Barrens Chat Casualty) — 2023-06-05T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48862#p48862 | page 1 | era: pre-1.18.1 -->

Try looking here

[https://vanilla-wow-archive.fandom.com/ ... aceEnchant](https://vanilla-wow-archive.fandom.com/wiki/API_ReplaceEnchant)
[https://vanilla-wow-archive.fandom.com/ ... _Functions](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API#Enchanting_Functions)
[https://vanilla-wow-archive.fandom.com/ ... _Functions](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API#TradeSkill_Functions)

[https://vanilla-wow-archive.fandom.com/ ... rcraft_API](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API)

## Post 48863 by Saltie — 2023-06-05T01:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48863#p48863 | page 1 | era: pre-1.18.1 -->

I've never created macros by hand, I've only ever used ones I've found on the internet :( I don't understand most of what's on that wiki page.

## Post 48867 by Ibux (Patch Note Conspiracy Theorist) — 2023-06-05T03:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48867#p48867 | page 1 | era: pre-1.18.1 -->

[https://github.com/Meridaw/Vanilla-Macr ... nchant.txt](https://github.com/Meridaw/Vanilla-Macros/blob/master/Profession/Mouseover%20enchant.txt)

## Post 48925 by Saltie — 2023-06-05T16:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48925#p48925 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Mon Jun 05, 2023 3:12 am**
> [https://github.com/Meridaw/Vanilla-Macr ... nchant.txt](https://github.com/Meridaw/Vanilla-Macros/blob/master/Profession/Mouseover%20enchant.txt)

That works! Thank you so much!

## Post 159355 by Wez0 (Patch Note Conspiracy Theorist) — 2025-11-12T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159355#p159355 | page 1 | era: 1.18.1-announced-pre-release -->

Code: Select all

```
/run SpellStopTargeting(); local f=GetMouseFocus(); CastSpellByName('Disenchant'); f:Click(); SpellStopTargeting(); ClearCursor();
```

from
[https://turtle-wow.fandom.com/wiki/Prof ... mpaign=h2s](https://turtle-wow.fandom.com/wiki/Profession_Macros?sh=null__2390&m=3&utm_source=reddit&utm_campaign=h2s)

how to set up macro's:
Type /macro in chat or watch:

[embed: https://www.youtube.com/embed/XO_QTFQgVqo]

for auto-loot:
<https://github.com/brndd/vanilla-tweaks/releases/>

