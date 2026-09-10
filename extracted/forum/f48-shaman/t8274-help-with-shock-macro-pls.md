---
title: "Help with Shock macro, pls"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8274"
topic_id: 8274
forum_id: 48
forum: "Shaman"
author: "Rewolt"
author_authority: "player"
posted: "2023-07-13T13:11:00Z"
last_post: "2023-07-13T15:52:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:23:41Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with Shock macro, pls

## Post 53305 by Rewolt — 2023-07-13T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53305#p53305 | page 1 | era: pre-1.18.1 -->

Hi all

I am new ins Turtle, and i notice that i cant use macro script in vanilla like i use it in wotlk e.g.

I want to make Flame and Earth Shock on one button, and when i change target Flame is first again. In Wotlk i use:

#showtooltip
/startattack
/castsequence reset=target Flame Shock, Earth Shock

Is there any way to make similar macro in Turtle wow? I found some videos about macro addons, but i dont get it. So i need help.

Tnx

## Post 53316 by Mcnair (Barrens Chat Casualty) — 2023-07-13T15:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53316#p53316 | page 1 | era: pre-1.18.1 -->

Good day.
I can't test it at the moment, but I think something like the code below might work similarly to what you'd like (but not exactly!). It might be using some non-standard macro commands, so you might need the SuperMacro addon for it to work.
It iterates through the debuffs on your target, looking for the debuff from Flame Shock. If it is found on the target, it will cast Earth Shock, if it is not found it will cast Flame Shock.
Caveat: I just modified the safe Shadowmeld macro from Xerron from another topic in a test editor, relying on memory for syntax - it might not work as is.

/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Fire_FlameShock" then x=1 end i=i+1 end if x==0 then CastSpellByName("Flame Shock") else CastSpellByName("Earth Shock") end

## Post 53320 by Rewolt — 2023-07-13T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53320#p53320 | page 1 | era: pre-1.18.1 -->

Hi bro,

Macro works! Thank you!

One more thing. Is there some way to improve macro, make him change picture/icon for Flame and Earth Shock?

