---
title: "Conditional IF/THEN Mecro help please"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5025"
topic_id: 5025
forum_id: 3
forum: "Help & Support"
author: "Gladeshadow"
author_authority: "player"
posted: "2022-12-07T16:24:00Z"
last_post: "2022-12-07T16:53:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:19:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Conditional IF/THEN Mecro help please

## Post 30309 by Gladeshadow (Patch Note Conspiracy Theorist) — 2022-12-07T16:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30309#p30309 | page 1 | era: pre-1.18.1 -->

Looking for help on how to make conditional macros, if possible. As a specific example, I want to make one similar to the following:
/cast demoralizing shout; IF target affect by demoralizing shout THEN cast sunder

Any example of how to do this or telling me it's not possible is much appreciated. I have already googled the topic, but haven't yet seen anything about this kind of case.

## Post 30311 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-07T16:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30311#p30311 | page 1 | era: pre-1.18.1 -->

You're going to want both SuperMacro and Zorlen, and then you're going to want to reference things like this: [https://www.briankoponen.com/zorlen-add ... -warcraft/](https://www.briankoponen.com/zorlen-addon-vanilla-world-warcraft/)

As for the syntax, I have a Hunter macro that makes use of if/then, just as an example of how some of those functions above that Zorlen avails you make writing such macros easier.
Code: Select all

```
/script PetAttack(target)
/run if CheckInteractDistance("target",3) then castAttack() else castAutoShot() end
/run if (not isMarked(target)) then CastSpellByName("Hunter's Mark") end
/script CastPetAction(9)
```

## Post 30312 by Gladeshadow (Patch Note Conspiracy Theorist) — 2022-12-07T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30312#p30312 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed Dec 07, 2022 4:36 pm**
> You're going to want both SuperMacro and Zorlen, and then you're going to want to reference things like this: [https://www.briankoponen.com/zorlen-add ... -warcraft/](https://www.briankoponen.com/zorlen-addon-vanilla-world-warcraft/)
>
>  As for the syntax, I have a Hunter macro that makes use of if/then, just as an example of how some of those functions above that Zorlen avails you make writing such macros easier.
>  Code: Select all
>
> ```
> /script PetAttack(target)
> /run if CheckInteractDistance("target",3) then castAttack() else castAutoShot() end
> /run if (not isMarked(target)) then CastSpellByName("Hunter's Mark") end
> /script CastPetAction(9)
> ```

Looks great. Thank you!

