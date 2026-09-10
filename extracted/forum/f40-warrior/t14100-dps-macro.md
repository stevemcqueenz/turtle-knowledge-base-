---
title: "DPS macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14100"
topic_id: 14100
forum_id: 40
forum: "Warrior"
author: "Bigbearimpact"
author_authority: "player"
posted: "2024-05-31T07:27:00Z"
last_post: "2024-07-22T06:25:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T07:53:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# DPS macro

## Post 96085 by Bigbearimpact — 2024-05-31T07:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96085#p96085 | page 1 | era: pre-1.18.1 -->

Hello, i never use macro before but trying to put a macro that use ww and hs when rage is above certain level otherwise spam BT. will this one work with supermacro? i havent tested it out yet. Thanks!

/script if (not PlayerFrame.inCombat) then AttackTarget() end
/cast [rage>55] Whirlwind
/cast [rage>42] Heroic Strike
/cast Bloodthirst

## Post 100095 by Ericnew — 2024-07-22T06:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100095#p100095 | page 1 | era: pre-1.18.1 -->

You can try the following macro, but it requires the support of ClassMacros and SuperMacro.

/StartAttack
/script C =CastSpellByName;
/script hp =UnitHealth("target")/UnitHealthMax("target");
/script mp =UnitMana("player");
/script incombat =UnitAffectingCombat("player");
/script if incombat==1 and mp>42 and hp>0.21 then C("Heroic Strike"); end;
/script if mp>55 and hp>0.21 then C("Whirlwind"); end;

