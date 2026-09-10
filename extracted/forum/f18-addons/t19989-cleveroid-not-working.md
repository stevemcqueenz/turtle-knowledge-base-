---
title: "cleveroid not working"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19989"
topic_id: 19989
forum_id: 18
forum: "AddOns"
author: "Queenivy4"
author_authority: "player"
posted: "2025-06-22T19:00:00Z"
last_post: "2025-06-23T15:35:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:25:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# cleveroid not working

## Post 136655 by Queenivy4 — 2025-06-22T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136655#p136655 | page 1 | era: pre-1.18.1 -->

hello turtle wow ^_^ im trying to make #showtooltip macros. i tried cleveroid with all other addons off, and the following in my dlls.txt
![Image](https://i.imgur.com/YVSb2Bu.png)
but the tooltips flash on and then immediately off on loading. ive tried launching from the superwow exe and from the turtle client. it works with clevermacros but i would like the additional functionality offered by cleveroid, any ideas?

example of one of my macros
#showtooltip
/startattack
/cast [stance:1] charge; [nostance:1] battle stance

## Post 136667 by Jan125 (Barrens Chat Casualty) — 2025-06-22T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136667#p136667 | page 1 | era: pre-1.18.1 -->

I recommend checking out <https://github.com/jrc13245/CleveRoidMacros> , since it is an updated fork of CleveRoid.

Other things to consider:
 -If by flashing, you mean darkened/normal colored icon: No real workaround.
 -The functionality may be case sensitive.

## Post 136725 by Oomentaloo (Barrens Chat Casualty) — 2025-06-23T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136725#p136725 | page 1 | era: pre-1.18.1 -->

The macro works for me.
You don't need [nostance] btw.
Code: Select all

```
#showtooltip
/startattack
/cast [stance:1] Charge; Battle Stance
```

## Post 136743 by Queenivy4 — 2025-06-23T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136743#p136743 | page 1 | era: pre-1.18.1 -->

> **Jan125 wrote: Sun Jun 22, 2025 8:52 pm**
> I recommend checking out <https://github.com/jrc13245/CleveRoidMacros> , since it is an updated fork of CleveRoid.
>
>  Other things to consider:
>  -If by flashing, you mean darkened/normal colored icon: No real workaround.
>  -The functionality may be case sensitive.

ahh!! it was because i wasnt using capitals!! amazing. weirdly, it works fine on clevermacros without capitalization. and yes i do have that version of cleveroid, but thank you for making sure <3

> **Oomentaloo wrote: Mon Jun 23, 2025 11:13 am**
> The macro works for me.
>  You don't need [nostance] btw.
>  Code: Select all
>
> ```
> #showtooltip
> /startattack
> /cast [stance:1] Charge; Battle Stance
> ```

thank you for the tip ^_^ it was because i wasnt using capitalization

