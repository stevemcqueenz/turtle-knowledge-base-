---
title: "Rolling Stance Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4979"
topic_id: 4979
forum_id: 40
forum: "Warrior"
author: "Pars"
author_authority: "player"
posted: "2022-12-02T04:08:00Z"
last_post: "2022-12-02T10:37:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T07:54:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rolling Stance Macro

## Post 30101 by Pars — 2022-12-02T04:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30101#p30101 | page 1 | era: pre-1.18.1 -->

Hi, I'm in need of help with 1.12 macros.

I want a macro that changes stances based on what stance I'm currently in. In essence I need something like this:
Code: Select all

```
/run if GetShapeshiftFormInfo(1)=True then CastSpellByName("Battle Stance") elseif GetShapeshiftFormInfo(2)=True then CastSpellByName("Defensive Stance") else GetShapeshiftFormInfo(3)=True then CastSpellByName("Berserker Stance")
```

But that doesnt work, I think I'm not using the "if true" statement correctly

I use SuperMacro if that helps.

## Post 30110 by Airwolf — 2022-12-02T07:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30110#p30110 | page 1 | era: pre-1.18.1 -->

No need to use a macro for this,

As the actionbar changes to a new set for every stance you are in just place the "stance spell" you want to change into from the spellbook in one of the slots of the actionbar of the current stance.

## Post 30113 by Pars — 2022-12-02T09:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30113#p30113 | page 1 | era: pre-1.18.1 -->

Well, that is something I haven't thought of!
thanks!

## Post 30114 by Airwolf — 2022-12-02T10:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30114#p30114 | page 1 | era: pre-1.18.1 -->

I use this mainly to activate certain actions that are only usable in one stance.

For example i place taunt in slot 1 of defstance. In slot 1 of battle and berserker stance i place the defstance action.

So  whatever stance i am currenty in i can always hammer 1 two times and taunt easily

