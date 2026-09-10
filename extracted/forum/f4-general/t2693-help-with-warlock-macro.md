---
title: "Help With Warlock Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2693"
topic_id: 2693
forum_id: 4
forum: "General"
author: "Katvena"
author_authority: "player"
posted: "2022-02-10T13:06:00Z"
last_post: "2022-02-10T18:52:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:11:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help With Warlock Macro

## Post 16925 by Katvena — 2022-02-10T13:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16925#p16925 | page 1 | era: pre-1.18.1 -->

I am trying to make a Macro to target a mod and auto attack and make my demon to attack the mob at the same time. I don't want to cast a spell with the macro.

/script if GetUnitName("target")==nil then TargetNearestEnemy() end
/script PetAttack(target)

That macro don't work, i have to click the mob click attack. The macro only make my demon attack. it does not target the mob and me auto attack

## Post 16927 by Katvena — 2022-02-10T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16927#p16927 | page 1 | era: pre-1.18.1 -->

I cant even Target the mob

/stopattack
/targetattack
/startattack

Don't work

## Post 16929 by Blaut — 2022-02-10T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16929#p16929 | page 1 | era: pre-1.18.1 -->

It's funny, but I just started learning how to create scripts for the game in two windows (without third-party software) yesterday. Here's the solution. I don't have a pet to test it, but it should work.
/run if GetUnitName("target")==nil then TargetNearestEnemy() AttackTarget() else AttackTarget() end
/run PetAttack()

## Post 16935 by Katvena — 2022-02-10T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16935#p16935 | page 1 | era: pre-1.18.1 -->

I wrote it very slow and I check it to see that I wrote it right.

/run if GetUnitName("target")==nil then TargetNearestEnemy() AttackTarget() else AttackTarget() end

I did not put /run PetAttack()

I try it and the game say ive got nothing to attack. So it did not work

## Post 16936 by Katvena — 2022-02-10T18:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16936#p16936 | page 1 | era: pre-1.18.1 -->

Sorry it done work, but only on RED mobs not YELLOW mobs,

The first time I use the Macro was on a sheep and sheep are YELLOW MOBS

I try it a again with  /run PetAttack() and it works

Thank you every much Blaut

