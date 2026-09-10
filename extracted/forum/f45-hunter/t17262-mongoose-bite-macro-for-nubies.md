---
title: "Mongoose Bite macro for nubies"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17262"
topic_id: 17262
forum_id: 45
forum: "Hunter"
author: "pagu"
author_authority: "player"
posted: "2025-01-25T07:40:00Z"
last_post: "2025-02-16T06:08:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:12:23Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Mongoose Bite macro for nubies

## Post 117873 by pagu — 2025-01-25T07:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117873#p117873 | page 1 | era: pre-1.18.1 -->

Hello
Just found out how to use mongoose bite more efficient. Maybe someone will find it useful. Maybe its not new info but i am only learning how to play hunter and want to share

> Mongoose Bite no longer requires you to dodge to use it, now deals 60% Weapon Damage in addition to its current flat damage and resets your auto-attack swing timer.

Ingame tooltip doesnt say it but mongoose resets timer indeed. If you start combat with casting mongoose you start swing timer without autoattack hit

I played warrior years ago and know hint how to use Slam. Just tuned it for mongoose. So here is how to:
 1) Download addon SP_SwingTimer
 2) When you put SwingTimer to AddOns folder rename it from "SP_SwingTimer-4.2.0" to "SP_SwingTimer" or your wow client will not see it
 3) Set up macro
> /run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if st_timer>UnitAttackSpeed"player"*0.8 then CastSpellByName"Mongoose Bite" end

and just spam it
UnitAttackSpeed"player"*0.8 - its for my taste, original value was 0.9 but i dont like to spam button so hard. For fast weapon i set 0.7
If you want to add raptor strike to same button it also works well
> /run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if st_timer>UnitAttackSpeed"player"*0.8 then CastSpellByName"Mongoose Bite" end
>  /cast Raptor Strike

## Post 120111 by pagu — 2025-02-16T06:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120111#p120111 | page 1 | era: pre-1.18.1 -->

The information is out of date
> 2025 — February 12
>  Mongoose Bite will no longer reset the auto-attack timer.

