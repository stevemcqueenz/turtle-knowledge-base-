---
title: "Slam macro doesnt work anymore"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11642"
topic_id: 11642
forum_id: 40
forum: "Warrior"
author: "Kodama024"
author_authority: "player"
posted: "2023-11-12T00:19:00Z"
last_post: "2024-08-30T23:35:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T07:53:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Slam macro doesnt work anymore

## Post 76967 by Kodama024 — 2023-11-12T00:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76967#p76967 | page 1 | era: pre-1.18.1 -->

/run if false then CastSpellByName"Slam()" end
/run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if st_timer>UnitAttackSpeed"player"*0.9 then CastSpellByName"Slam()" end

it worked perfectly fine up until today.

what it does is it only cast slam on swing reset

## Post 76983 by Ibux (Patch Note Conspiracy Theorist) — 2023-11-12T08:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76983#p76983 | page 1 | era: pre-1.18.1 -->

it is pretty lame if you need a macro like this to play slam spec. i suggest twow separate the auto attack swing timer from slam. so that it doesn't interfere with it.

## Post 77043 by Kodama024 — 2023-11-12T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77043#p77043 | page 1 | era: pre-1.18.1 -->

ah criticises use of macro, suggests 3rd party addon. x)

I have attack timer addon but i'm not a fan of having to watch it all the time. Slam macro lets me be more aware of mechanics and stuff. Its just QoL man..
So i would appreciate if someone could help me figure out why it doenst work anymore.

## Post 78889 by Tyrgrim — 2023-11-27T04:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78889#p78889 | page 1 | era: pre-1.18.1 -->

Just avoid slam until level 54. Get decisive strike. And use it as a rage dump attack.

## Post 79461 by Raukodor (Bug Report Enthusiast) — 2023-12-01T01:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79461#p79461 | page 1 | era: pre-1.18.1 -->

Decisive strike cause less dps than slam

## Post 79463 by Bigsmerf (Grandmaster of Forum PvP) — 2023-12-01T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79463#p79463 | page 1 | era: pre-1.18.1 -->

> **Raukodor wrote: Fri Dec 01, 2023 1:44 am**
> Decisive strike cause less dps than slam

Which makes sense, since you can use it while moving.

## Post 79466 by Xudo (Grandmaster of Forum PvP) — 2023-12-01T06:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79466#p79466 | page 1 | era: pre-1.18.1 -->

> **Kodama024 wrote: Sun Nov 12, 2023 12:19 am**
> /run if false then CastSpellByName"Slam()" end
>  /run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if st_timer>UnitAttackSpeed"player"*0.9 then CastSpellByName"Slam()" end
>
>  it worked perfectly fine up until today.
>
>  what it does is it only cast slam on swing reset

I don't see where st_timer variable is defined. It might be nil and comparison fails

## Post 100097 by Ericnew — 2024-07-22T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100097#p100097 | page 1 | era: pre-1.18.1 -->

st_timer is a global variable in the SP_SwingTimer addon. Please check if the error is caused by an update to SP_SwingTimer.

## Post 100433 by Tacticalnelf (Barrens Chat Casualty) — 2024-08-30T23:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100433#p100433 | page 1 | era: pre-1.18.1 -->

> **Kodama024 wrote: Sun Nov 12, 2023 12:19 am**
> /run if false then CastSpellByName"Slam()" end
>  /run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if st_timer>UnitAttackSpeed"player"*0.9 then CastSpellByName"Slam()" end
>
>  it worked perfectly fine up until today.
>
>  what it does is it only cast slam on swing reset

/run if false then CastSpellByName"Slam()" end
This line seems redundant because if false will never be true, so CastSpellByName("Slam()") will never be called.

Try this one

/run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i break end end end
/run if not IsCurrentAction(_a) then UseAction(_a) end
/run if st_timer and st_timer > UnitAttackSpeed("player") * 0.9 then CastSpellByName("Slam()") end

