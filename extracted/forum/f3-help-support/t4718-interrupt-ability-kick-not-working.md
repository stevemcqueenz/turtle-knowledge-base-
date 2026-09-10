---
title: "Interrupt ability (Kick) not working"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4718"
topic_id: 4718
forum_id: 3
forum: "Help & Support"
author: "Malphias"
author_authority: "player"
posted: "2022-11-01T02:05:00Z"
last_post: "2022-11-30T15:51:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:19:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Interrupt ability (Kick) not working

## Post 28225 by Malphias — 2022-11-01T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28225#p28225 | page 1 | era: pre-1.18.1 -->

Interrupting a spell cast, the casting bar goes away, but shortly after I still get hit by the spell effect.
Details on my specific config:
Playing a rogue (level 22, horde) using the Kick ability.
Currently playing in the Barrens. Used kick on a Stormsnout (lightning cast) and a Bristleback Thornweaver (entangling roots cast). I interrupt the cast with plenty of time to spare (I can see the Kick landed in the combat log), the casting bar goes away (as if interrupted), but then the spell goes off anyway shortly after. I've tried this multiple times with the same result. Maybe I'm missing something? Also, apologies if this has already been posted - when I searched I didn't see anything.

Edit: Kick appears to be working fine for other mobs. For example, the fireball cast by the bristleback geomancers appears to be getting interrupted correctly. So it seems it's just some mobs and casts that have the issue.

## Post 28227 by Shamma (Bug Report Enthusiast) — 2022-11-01T02:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28227#p28227 | page 1 | era: pre-1.18.1 -->

I can confirm this and it also applies for shaman earth shock interrupt.

## Post 28228 by Gantulga (Grandmaster of Forum PvP) — 2022-11-01T03:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28228#p28228 | page 1 | era: pre-1.18.1 -->

This happens with spells that aren't actually interruptible and its been reported on the bug tracker already.

## Post 28229 by Malphias — 2022-11-01T05:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28229#p28229 | page 1 | era: pre-1.18.1 -->

Ok, thanks for the update. However, I'd think something like Entangling Roots cast by a Bristleback Thornweaver should be interruptible; seems like the spell isn't flagged correctly. That power seems like a normal spell, just like the standard druid spell that is interruptible. But in either case, glad it's a known issue - thanks.

## Post 30049 by Annasteeza — 2022-11-30T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30049#p30049 | page 1 | era: pre-1.18.1 -->

Currently have a level 33 shaman and to date Earth Shock fails to interrupt every mob spell's effect. It properly cancels the spell animation, but the effect continues, whether the mob is casting on player or self, heal, damage, snare, they all appear to be interrupted via their animation, but the effect lands a second later regardless.

