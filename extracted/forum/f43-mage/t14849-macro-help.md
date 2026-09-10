---
title: "macro help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14849"
topic_id: 14849
forum_id: 43
forum: "Mage"
author: "Anveena"
author_authority: "player"
posted: "2024-09-12T00:57:00Z"
last_post: "2024-09-14T12:50:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:05:31Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# macro help

## Post 101125 by Anveena (Barrens Chat Casualty) — 2024-09-12T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101125#p101125 | page 1 | era: pre-1.18.1 -->

I'm trying to set up this [macro](https://github.com/Meridaw/Vanilla-Macros/blob/master/Mage/Useful%20Mage%20Macros.md#12-shatter-frozen-attack):

This macro usually spams Frostbolt (Rank 1). But when your target is frozen, it cast Frostbolt (Rank 10).
Code: Select all

```
/script x=UnitDebuff("target");if(x=="Frost Nova" or x=="Frostbite") then CastSpellByName("Frostbolt(Rank 10)");end; else if not(x=="Frost Nova" or x=="Frostbite") then CastSpellByName("Frostbolt(Rank 1)");end;end;
```

But it shows a lua error when I use it, can someone help me to configure it correctly?

## Post 101126 by Micfild — 2024-09-12T02:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101126#p101126 | page 1 | era: pre-1.18.1 -->

/script x=UnitDebuff("target");if(x=="Frost Nova" or x=="Frostbite") then CastSpellByName("Frostbolt(Rank 10)") else then CastSpellByName("Frostbolt(Rank 1)");end;

This should fix the problem. When you use "else" you don't close the "if" statement before it. Also the second "if" statement was redundant, since you're using "else" to capture situations when the condition isn't met.

For future reference, when you get a lua error i recommend posting the error message as well, as it might help diagnose the problem.

Hope this helps.

GL HF :)

## Post 101159 by Anveena (Barrens Chat Casualty) — 2024-09-12T16:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101159#p101159 | page 1 | era: pre-1.18.1 -->

Ty for help, I got this error now:

[string "x=UnitDebuff("target");if(x=="Frost Nova" or x=="Frostbite") th..."]:1:unexpected symbol near 'then'

## Post 101160 by Ibux (Patch Note Conspiracy Theorist) — 2024-09-12T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101160#p101160 | page 1 | era: pre-1.18.1 -->

try this one Code: Select all

```
/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("FrostArmor") or not b("FrostNova")then c("Frostbolt(Rank 1)")else c("Frostbolt(Rank 10)")end
```

## Post 101179 by Anveena (Barrens Chat Casualty) — 2024-09-13T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101179#p101179 | page 1 | era: pre-1.18.1 -->

Works with Frost Nova   satisfied_turtle_head  , but not Frostbite. Didn't return any error this time
When I hit Frostbite, I keep casting Frostbolt (rank 1)

## Post 101183 by Ibux (Patch Note Conspiracy Theorist) — 2024-09-13T03:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101183#p101183 | page 1 | era: pre-1.18.1 -->

> **Anveena wrote: Fri Sep 13, 2024 12:57 am**
> Works with Frost Nova   satisfied_turtle_head  , but not Frostbite. Didn't return any error this time
>  When I hit Frostbite, I keep casting Frostbolt (rank 1)

hmm, that means the icon name i used for frostbite is wrong.
use the macro under to print the icon debuff / buff names on the target when frostbite proc is up to get the icon name. and then replace FrostArmor with the correct name. Code: Select all

```
/run function m(s) DEFAULT_CHAT_FRAME:AddMessage(s); end for i=1,16 do s=UnitBuff("target", i); if(s) then m("B "..i..": "..s); end s=UnitDebuff("target", i); if(s) then m("D "..i..": "..s); end end
```

## Post 101216 by Anveena (Barrens Chat Casualty) — 2024-09-13T15:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101216#p101216 | page 1 | era: pre-1.18.1 -->

I used the macro, the icon is correct: Spell_Frost_FrostArmor
crying_turtle

## Post 101242 by Ibux (Patch Note Conspiracy Theorist) — 2024-09-14T06:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101242#p101242 | page 1 | era: pre-1.18.1 -->

> **Anveena wrote: Fri Sep 13, 2024 3:54 pm**
> I used the macro, the icon is correct: Spell_Frost_FrostArmor
>   crying_turtle

try adding more and more of the full name. i hope this will work. because otherwise I'm not sure how to fix it   scared_turtle

## Post 101258 by Anveena (Barrens Chat Casualty) — 2024-09-14T12:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101258#p101258 | page 1 | era: pre-1.18.1 -->

I already did that, it didn't work either, I gave up already!!! Thanks for all the help!

