---
title: "get rid of error \"spell is not ready\"ect"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8612"
topic_id: 8612
forum_id: 18
forum: "AddOns"
author: "Jeaz"
author_authority: "player"
posted: "2023-08-01T15:25:00Z"
last_post: "2023-08-01T20:00:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:31:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# get rid of error "spell is not ready"ect

## Post 55480 by Jeaz — 2023-08-01T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55480#p55480 | page 1 | era: pre-1.18.1 -->

Hello, i'm looking for an addon who can hide error in red text like "spell is not ready", "invalid target", "inventory is full"..and so on

I've tried Ncerror, Perror, errormonster, but all of them dont work on turtle wow.

If someone can help me, i'll appreciate.

Thx a lot

## Post 55481 by Xerilin (Bug Report Enthusiast) — 2023-08-01T15:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55481#p55481 | page 1 | era: pre-1.18.1 -->

Try Shagu Tweaks

## Post 55482 by Balake (Bug Report Enthusiast) — 2023-08-01T15:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55482#p55482 | page 1 | era: pre-1.18.1 -->

add this line at the end of a macro you can press a lot. If error messages are enabled, it will disable them. If they are disabled, it will do nothing.

/script UIErrorsFrame:Hide()

For example if you were a mage you would do

/cast Fireball
/script UIErrorsFrame:Hide()

and just replace your fireball in action bar with the macro.

## Post 55484 by Jeaz — 2023-08-01T15:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55484#p55484 | page 1 | era: pre-1.18.1 -->

Thx a lot ! the only downside is that it also disables on-screen quest tracking

## Post 55485 by Jammyxx (Patch Note Conspiracy Theorist) — 2023-08-01T15:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55485#p55485 | page 1 | era: pre-1.18.1 -->

Move anything addon.

Can move or disable them messages

## Post 55490 by Trismegistos — 2023-08-01T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55490#p55490 | page 1 | era: pre-1.18.1 -->

RogueSpam can be used to selectively hide error messages. Despite its name, it works great for any class.

## Post 55518 by Jeaz — 2023-08-01T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55518#p55518 | page 1 | era: pre-1.18.1 -->

> **Trismegistos wrote: Tue Aug 01, 2023 4:38 pm**
> RogueSpam can be used to selectively hide error messages. Despite its name, it works great for any class.

Thats exactly what ive been looking for !! Thx mate, and thx all of you guys who tried to help me.

