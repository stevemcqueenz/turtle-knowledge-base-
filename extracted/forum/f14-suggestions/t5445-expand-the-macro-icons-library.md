---
title: "Expand the Macro Icons library"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5445"
topic_id: 5445
forum_id: 14
forum: "Suggestions"
author: "Maesus"
author_authority: "player"
posted: "2023-01-27T20:38:00Z"
last_post: "2023-01-28T06:00:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T12:24:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Expand the Macro Icons library

## Post 33305 by Maesus (Barrens Chat Casualty) — 2023-01-27T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33305#p33305 | page 1 | era: pre-1.18.1 -->

Basically the title --

If you're anything like me, you enjoy creating macros solely to change the icons and/or names of spells to further develop whatever class fantasy you have going on. But the icon library is very limited and many of the old icons are just plain boring to look at.

My suggestion is to just expand the Marco Icon Library to match what we see in the Item Creator: [https://dev.turtlecraft.gg/#!/itemcreat ... JOVUxMIl0=](https://dev.turtlecraft.gg/#!/itemcreator/WzAsMCwwLCIiLCIiLDU5MjgsMCwwLDEsMCwwLDAsLTEsLTEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLC0xLDAsLTEsMCwwLDAsMCwtMSwwLC0xLDAsMCwwLDAsLTEsMCwtMSwwLDAsMCwwLC0xLDAsLTEsMCwwLDAsMCwtMSwwLC0xLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLCJOVUxMIl0=)

## Post 33307 by Kefke (Patch Note Conspiracy Theorist) — 2023-01-27T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33307#p33307 | page 1 | era: pre-1.18.1 -->

This sounds great. Also, I never even considered using macros for roleplay immersion.

## Post 33311 by Ghola (Patch Note Conspiracy Theorist) — 2023-01-27T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33311#p33311 | page 1 | era: pre-1.18.1 -->

you can create an icons folder and add them that way, but in my experience they break quite often

also, a lot of icons do exist in the files just not in the macro icon selector, so there might be a way to import them into macros directly, I just never fooled around with that. I was however able to call icons to miks scrolling battle text using their file name

for example:
ICON_CACHE["holy strike"] =					"Interface\\Icons\\inv_sword_01"
ICON_CACHE["crusader strike"] =					"Interface\\Icons\\spell_holy_crusaderstrike"

## Post 33332 by Ibux (Patch Note Conspiracy Theorist) — 2023-01-28T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33332#p33332 | page 1 | era: pre-1.18.1 -->

you can also edit the macro in the macros-cache files to give it the new icon. if you know the icon name.

this macro will tell you the icon name of the buffs / debuffs on a target Code: Select all

```
/script function m(s) DEFAULT_CHAT_FRAME:AddMessage(s); end for i=1,16 do s=UnitBuff("target", i); if(s) then m("B "..i..": "..s); end s=UnitDebuff("target", i); if(s) then m("D "..i..": "..s); end end
```

wowhead also gives you the icon names. under the quick facts.
for example if you google auto shot then the quick facts on the classic wowhead says.
> Icon:  ability_whirlwind

i think maybe you needed big letters in the start of each word. so you change it to Ability_Whirlwind

