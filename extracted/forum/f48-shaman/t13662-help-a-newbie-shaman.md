---
title: "help a newbie shaman"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13662"
topic_id: 13662
forum_id: 48
forum: "Shaman"
author: "Vorobo"
author_authority: "player"
posted: "2024-04-16T16:53:00Z"
last_post: "2024-05-11T19:06:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:22:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# help a newbie shaman

## Post 92839 by Vorobo — 2024-04-16T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92839#p92839 | page 1 | era: pre-1.18.1 -->

Hello! I'm looking for a macro for a shaman to heal by mouseover, I used to heal with this /LUNAMO Healing Wave but now these macros don't work. suggest alternatives. Thank you

## Post 92842 by Akos1896 (Grandmaster of Forum PvP) — 2024-04-16T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92842#p92842 | page 1 | era: pre-1.18.1 -->

Would love to help (loving shamans) but I can't. Never used macro for healing.
My method is assigning chain heal to 2, lesser healing wave to 3, healing wave to 4, using shift+ctrl for different levels of downgrades and doing it manually.

## Post 92847 by Vorobo — 2024-04-16T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92847#p92847 | page 1 | era: pre-1.18.1 -->

It’s all about saving time; going to Target and pressing a button is slower than moving a mouseover. but thanks anyway

## Post 94563 by Obzbud — 2024-05-11T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94563#p94563 | page 1 | era: pre-1.18.1 -->

Mouseover works on PFui. /pfcast (spellname)

## Post 94569 by Imonobor (Bug Report Enthusiast) — 2024-05-11T18:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94569#p94569 | page 1 | era: pre-1.18.1 -->

If you want your spells to automatically downrank based on missing HP percentage of the mouseover target, you can use SmartHealer (<https://github.com/melbaa/SmartHealer>) - it works with the mouseover functions of pfUI, Clique and ClassicMouseover. I've only used pfUI of the three and it works well, although you might also need TheoryCraft for precise calculations.
The trouble is that you need to bind the heal to a mouse button (at least for Clique and pfUI) for it to scale. For normal mouseover that you put on your hotbars, a macro with "/pfcast Healing Wave" works well.

Also, welcome, fellow shaman. Hope you enjoy your stay!

## Post 94572 by Sharq — 2024-05-11T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94572#p94572 | page 1 | era: pre-1.18.1 -->

If you don't have pfui ( /pfcast ) then I suggest putting Code: Select all

```
/run TargetUnit("focus")
```

before the rest of the macro and then using the target. I think this could be easily extended to use different ranks of a spell based on target hp. Like Code: Select all

```
/script if(UnitHealth("target")/UnitHealthMax("target")<0.50) then CastSpellByName("Flash Heal(Rank 3)")else CastSpellByName("Flash Heal(Rank 1)"); end
```

from [https://github.com/Meridaw/Vanilla-Macr ... ages%20.md](https://github.com/Meridaw/Vanilla-Macros/blob/master/Priest/Cast%20heals%20based%20on%20health%20percentages%20.md)

