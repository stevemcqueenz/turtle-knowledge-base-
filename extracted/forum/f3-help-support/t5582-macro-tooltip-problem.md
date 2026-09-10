---
title: "Macro Tooltip Problem"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5582"
topic_id: 5582
forum_id: 3
forum: "Help & Support"
author: "Yera"
author_authority: "player"
posted: "2023-02-11T01:46:00Z"
last_post: "2023-02-11T10:17:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:18:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro Tooltip Problem

## Post 34523 by Yera — 2023-02-11T01:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34523#p34523 | page 1 | era: pre-1.18.1 -->

So I was looking into macros but the #showtooltip command doesnt work.
I want to change the icon to the Question mark but the icon isnt there. Ive looked anywhere and cant find the darn question mark.
I'm desperste hope someone can help!

## Post 34530 by Ibux (Patch Note Conspiracy Theorist) — 2023-02-11T04:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34530#p34530 | page 1 | era: pre-1.18.1 -->

the icon name for red question mark is Inv_Misc_Questionmark
you can add it to the macro if you edit it the macros-cache file in wtf folder.
or use the [EditMacro](https://wowwiki-archive.fandom.com/wiki/API_EditMacro) function.

## Post 34536 by Piccadilly — 2023-02-11T09:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34536#p34536 | page 1 | era: pre-1.18.1 -->

the #showtooltip function did not exist/work yet in vanilla wow
If you want to be able to use it, you have to use a macro addon that implements it.

## Post 34541 by Shamma (Bug Report Enthusiast) — 2023-02-11T10:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34541#p34541 | page 1 | era: pre-1.18.1 -->

> **Yera wrote: Sat Feb 11, 2023 1:46 am**
> So I was looking into macros but the #showtooltip command doesnt work.
>  I want to change the icon to the Question mark but the icon isnt there. Ive looked anywhere and cant find the darn question mark.
>  I'm desperste hope someone can help!

Use: /run if nil then CastSpellByName("Tooltip Spell") end

