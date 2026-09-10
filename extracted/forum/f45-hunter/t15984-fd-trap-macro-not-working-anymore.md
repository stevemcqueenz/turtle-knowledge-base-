---
title: "FD/TRAP macro not working anymore"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15984"
topic_id: 15984
forum_id: 45
forum: "Hunter"
author: "Neoulous"
author_authority: "player"
posted: "2024-11-20T10:46:00Z"
last_post: "2025-09-19T21:43:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:11:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# FD/TRAP macro not working anymore

## Post 108922 by Neoulous — 2024-11-20T10:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108922#p108922 | page 1 | era: pre-1.18.1 -->

My pvp macro for Feign death + trap is not working anymore.

This is macro is :

/cast trap
/cast feign death

And by spamming it in the original version 1.12 and last time I played on Twow, it works like that :

If you are not in combat, it drops a trap
If you are in combat and spamming this macro, it cast feign death and drops a trap.

Please, could  you explain why it is not working anymore and maybe share another macro working like that ?

Thx

## Post 108933 by Annoying (Barrens Chat Casualty) — 2024-11-20T11:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108933#p108933 | page 1 | era: pre-1.18.1 -->

Had the same macro before, but ye it's not working anymore.
Using this atm:

/script if UnitAffectingCombat("player") then CastSpellByName("Feign Death"); PetFollow(); PetPassiveMode();else CastSpellByName("Freezing Trap");end

## Post 152420 by Szczymryj — 2025-09-19T21:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152420#p152420 | page 1 | era: pre-1.18.1 -->

I'll have to check it out as mine one from classic era didn't work on twow as well and it makes my battles worse that no cc sometimes means death...

