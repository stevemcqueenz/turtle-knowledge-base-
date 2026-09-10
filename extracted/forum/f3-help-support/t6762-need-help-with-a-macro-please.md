---
title: "Need help with a macro please"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6762"
topic_id: 6762
forum_id: 3
forum: "Help & Support"
author: "Jimmyjimjames"
author_authority: "player"
posted: "2023-04-22T19:36:00Z"
last_post: "2023-04-24T04:46:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T09:14:40Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Need help with a macro please

## Post 42609 by Jimmyjimjames — 2023-04-22T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42609#p42609 | page 1 | era: pre-1.18.1 -->

I am trying to make a macro that will target the nearest enemy and then use X ability, I am able to do this but I run into the problem of the target nearest enemy part continuing to cycle thru enemies, does anyone know a way to make it so I am able to target nearest enemy(or anything similar) and continue to use the ability in the macro without changing targets to something else until my target dies?

## Post 42619 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-22T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42619#p42619 | page 1 | era: pre-1.18.1 -->

What have you got? You could try this at the beginning and else the rest of your current macro. Code: Select all

```
/script if UnitExists("target")
```

## Post 42620 by Jimmyjimjames — 2023-04-22T20:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42620#p42620 | page 1 | era: pre-1.18.1 -->

/run TargetNearestEnemy()
/cast Serpent Sting(Rank 1)

That's what the macro is. I tried adding the script but it gave me an error, I'm not using any macro addons if I needed one for that to work

## Post 42627 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-22T21:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42627#p42627 | page 1 | era: pre-1.18.1 -->

Try Code: Select all

```
/script if UnitExists("target") cast Serpent Sting(Rank 1) else run TargetNearestEnemy()
```

Shouldn't need any addons.

## Post 42628 by Jimmyjimjames — 2023-04-22T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42628#p42628 | page 1 | era: pre-1.18.1 -->

its giving me an error, that sounds like what I would want tho

## Post 42631 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-22T21:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42631#p42631 | page 1 | era: pre-1.18.1 -->

I can't log in to check, but thinking about it, is this not default behaviour anyway? Casting Serpant Sting should automatically cast at the nearest one no?

## Post 42637 by Jimmyjimjames — 2023-04-22T22:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42637#p42637 | page 1 | era: pre-1.18.1 -->

I was thinking that too, it seems to only work with some abilities, it works for my raptor strike but when I try to do it with sting even next to a target it wont do it

## Post 42679 by Jimmyjimjames — 2023-04-23T07:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42679#p42679 | page 1 | era: pre-1.18.1 -->

bump?

## Post 42685 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-23T08:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42685#p42685 | page 1 | era: pre-1.18.1 -->

Try this: Code: Select all

```
/script if not UnitExists("target") then TargetNearestEnemy() end
/cast Serpent Sting(Rank 1)
```

## Post 42688 by Jimmyjimjames — 2023-04-23T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42688#p42688 | page 1 | era: pre-1.18.1 -->

it seems to working the way i wanted, thank you for taking the time to help me. means a lot

## Post 42690 by Jimmyjimjames — 2023-04-23T09:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42690#p42690 | page 1 | era: pre-1.18.1 -->

is there a way after my target dies to allow the macro to go to another target if the current one is dead?

## Post 42693 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-23T10:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42693#p42693 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/script if UnitHealth("target")==0 and UnitExists("target") then ClearTarget() end
/script if not UnitExists("target") then TargetNearestEnemy() end
/cast Serpent Sting(Rank 1)
```

## Post 42806 by Jimmyjimjames — 2023-04-24T04:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42806#p42806 | page 1 | era: pre-1.18.1 -->

It works perfectly, thank you. I found the command to add a pet attack with it, I think its good to go :)

