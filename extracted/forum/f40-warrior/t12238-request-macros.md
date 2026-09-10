---
title: "[REQUEST] Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12238"
topic_id: 12238
forum_id: 40
forum: "Warrior"
author: "Volkyte"
author_authority: "player"
posted: "2023-12-16T11:40:00Z"
last_post: "2024-01-06T20:43:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T07:54:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [REQUEST] Macros

## Post 81397 by Volkyte (Patch Note Conspiracy Theorist) — 2023-12-16T11:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81397#p81397 | page 1 | era: pre-1.18.1 -->

Helllo fellow turtles!  smiling_turtle_head
I am using supermacro and clevermacro addon.
I wish to have help for warrior macroes to help me in tanking/farming more efficiently. I am interested especially in those who allow me to swap in correct stance to use stance locked skills.

Thanks in advance! :D

## Post 83844 by Gdawg45 — 2024-01-06T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83844#p83844 | page 1 | era: pre-1.18.1 -->

Here's one I use all the time.  It allows use of Revenge/Bloodrage/Shield Block to be used automatically when its off CD and you have the rage to use them.  Also, the taunt will activate automatically when a mob isnt targeting you.

/run if not UnitIsUnit('player', 'targettarget') then CastSpellByName('Taunt'); end
/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(2); if isActive then CastSpellByName('Revenge'); end
/cast Shield Block
/cast Bloodrage

## Post 83845 by Gdawg45 — 2024-01-06T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83845#p83845 | page 1 | era: pre-1.18.1 -->

Here's one for start attack with autocast Bloodrage and Sunder Armor

/script if (not PlayerFrame.inCombat) then AttackTarget() end
/cast Sunder Armor
/cast Bloodrage

## Post 83846 by Gdawg45 — 2024-01-06T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83846#p83846 | page 1 | era: pre-1.18.1 -->

/cast Charge
/cast Mocking Blow
/cast Defensive Stance

