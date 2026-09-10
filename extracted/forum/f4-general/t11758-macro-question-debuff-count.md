---
title: "macro question: debuff count"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11758"
topic_id: 11758
forum_id: 4
forum: "General"
author: "Aizawakai"
author_authority: "player"
posted: "2023-11-16T18:47:00Z"
last_post: "2024-01-06T08:01:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:55:54Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# macro question: debuff count

## Post 77699 by Aizawakai — 2023-11-16T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77699#p77699 | page 1 | era: pre-1.18.1 -->

Hello:

I found some explanations about UnitDebuff on [https://vanilla-wow-archive.fandom.com/ ... UnitDebuff](https://vanilla-wow-archive.fandom.com/wiki/API_UnitDebuff)
Code: Select all

```
name, rank, icon, count, debuffType, duration, expirationTime, unitCaster, isStealable, shouldConsolidate, spellId
= UnitDebuff("unit", index or ["name", "rank"][, "filter"])
```

so I wrote a macro to monitor the stack count of the sunder armor debuff on the target. However, when I use the macro, I find that it keeps casting the sunder armor skill. Can anyone help me with this?
Code: Select all

```
/script local c, p, b, i = CastSpellByName; for i = 1, 16 do b = UnitDebuff("target", i); if b and strfind(b, "Ability_Warrior_Sunder") then _, _, _, p = b; break; end; end; if not p or p < 5 then c("Sunder Armor") end
```

## Post 83766 by Xevra — 2024-01-06T05:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83766#p83766 | page 1 | era: pre-1.18.1 -->

Yes, I believe I have figured it out.

Try this:
Code: Select all

```
/script local b,c,i; for i = 1, 16 do b = UnitDebuff("target", i); if b and strfind(b, "Ability_Warrior_Sunder") then b, c = UnitDebuff("target", i); break; end; end; if not c or c < 5 then CastSpellByName("Sunder Armor") end;
```

In TurtleWoW, UnitDebuff only seems to return two outputs to the player; the name of the buff icon and the count.

So `buff, count = UnitDebuff("target", i);` will correctly assign values to buff and count.

Here's also a SuperMacro function that will return the number of sunders on a target:
Code: Select all

```
function CountSunders()
local buff, index, count = 0;
for index=1,16
do
buff = UnitDebuff("target", index);
if buff then
if strfind(buff, "Ability_Warrior_Sunder") then
buff, count = UnitDebuff("target", index);
end;
end;
end;
return count;
end;
```

## Post 83775 by Reploidrocsa (Bug Report Enthusiast) — 2024-01-06T08:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83775#p83775 | page 1 | era: pre-1.18.1 -->

The supermacro addon reads up to 16 buffs/debuffs so everytime sunder armor is in 17th position it won't be read unless you change some lines of code (honestly, we should report this to the author of the addon so he can update it).

Got the exact same problem for my druid powershifting macros by detecting if i was or wasn't in cat form

