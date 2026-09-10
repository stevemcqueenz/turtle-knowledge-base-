---
title: "Can't move target frame"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4664"
topic_id: 4664
forum_id: 3
forum: "Help & Support"
author: "Citron"
author_authority: "player"
posted: "2022-10-25T17:21:00Z"
last_post: "2025-05-13T20:26:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:44:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can't move target frame

## Post 27927 by Citron — 2022-10-25T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27927#p27927 | page 1 | era: pre-1.18.1 -->

Howdy, silly question I suppose but I cannot move my target frame on the original UI. I use no add on. If I right click my player frame and select unlock, I can then move the frame just fine, but for some reason this doesn't work for the target frame. Unlocking the target frame doesn't allow me to move it and nothing happens if I select "lock" on the frame again. It's stuck as "unlocked" until I log out, yet I cannot move it.

Any help?

## Post 27928 by Fin (Patch Note Conspiracy Theorist) — 2022-10-25T17:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27928#p27928 | page 1 | era: pre-1.18.1 -->

Move target unit frame
/script TargetFrame:SetMovable(1)TargetFrame:StartMoving()

Stop moving target unit frame
/script TargetFrame:StopMovingOrSizing()TargetFrame:SetMovable()

## Post 40334 by Landonian89 — 2023-04-05T01:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40334#p40334 | page 1 | era: pre-1.18.1 -->

Hi, i had the same problem. Using those scripts made the target frame vanish completely for some reason.

I was actually able to move the target frame only by targetting myself and having me be the target frame. When trying to do it while a mob, player, or npc were the target, it never gives the option to "Unlock Frame"

Just started and loving Turtle WoW so far!

## Post 40398 by Sixgun — 2023-04-05T16:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40398#p40398 | page 1 | era: pre-1.18.1 -->

If you are not opposed to using add-ons, Z-perl add-on does this beautifully.

## Post 130891 by Kinkyjalepeno — 2025-05-13T20:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130891#p130891 | page 1 | era: pre-1.18.1 -->

> **Landonian89 wrote: Wed Apr 05, 2023 1:45 am**
> I was actually able to move the target frame only by targetting myself and having me be the target frame.

This did it for me - TYTY

