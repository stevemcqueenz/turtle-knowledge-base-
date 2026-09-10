---
title: "Need Help with a Macro Plz!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19577"
topic_id: 19577
forum_id: 45
forum: "Hunter"
author: "Nightdelight"
author_authority: "player"
posted: "2025-05-28T00:01:00Z"
last_post: "2025-05-29T13:42:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:11:45Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Need Help with a Macro Plz!

## Post 133249 by Nightdelight — 2025-05-28T00:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133249#p133249 | page 1 | era: pre-1.18.1 -->

I have found macros for hunters mark and then pet attack, but i want one that does Hunters mark/ pet attack/ Auto shot.
I cant figure it out, been researching and i know i had it before.
Any help is appreciated.

## Post 133251 by Foteinos — 2025-05-28T00:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133251#p133251 | page 1 | era: pre-1.18.1 -->

check roid macros,there are 2 there

## Post 133263 by Nightdelight — 2025-05-28T02:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133263#p133263 | page 1 | era: pre-1.18.1 -->

doesnt help me. Foteinos.
cant do it like i normaly would be able to.

## Post 133296 by Zoogle — 2025-05-28T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133296#p133296 | page 1 | era: pre-1.18.1 -->

> **Nightdelight wrote: Wed May 28, 2025 12:01 am**
> I have found macros for hunters mark and then pet attack, but i want one that does Hunters mark/ pet attack/ Auto shot.
>  I cant figure it out, been researching and i know i had it before.
>  Any help is appreciated.

If you were using the Roids Macros addon, wouldn't it be something like this?

/petattack
/cast !Auto Shot
/cast Hunter's Mark

## Post 133509 by Azcron (Patch Note Conspiracy Theorist) — 2025-05-29T13:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133509#p133509 | page 1 | era: pre-1.18.1 -->

Try this. I know it works with just Mark/Pet attack but I added in auto shot. Let me know if this works. I won't be able to test it until later tonight.
/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("SniperShot")then c("Hunter's Mark") PetAttack() end c("Auto Shot")

