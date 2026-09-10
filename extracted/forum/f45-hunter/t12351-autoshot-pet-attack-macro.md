---
title: "Autoshot+Pet Attack macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12351"
topic_id: 12351
forum_id: 45
forum: "Hunter"
author: "Azcron"
author_authority: "player"
posted: "2023-12-21T14:29:00Z"
last_post: "2024-04-25T09:09:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T08:13:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Autoshot+Pet Attack macro?

## Post 82164 by Azcron (Patch Note Conspiracy Theorist) — 2023-12-21T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82164#p82164 | page 1 | era: pre-1.18.1 -->

I've been trying to get a macro to have my pet attack when casting autoshot. I've tried different macros that ive come across but nothing is working. Anyone have a macro that works for them?

## Post 82165 by Vimgreen — 2023-12-21T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82165#p82165 | page 1 | era: pre-1.18.1 -->

Think these ones mostly worked for me:

<https://forum.nostalrius.org/viewtopic.php?f=38&t=21017>

## Post 82399 by Snigery (Barrens Chat Casualty) — 2023-12-23T04:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82399#p82399 | page 1 | era: pre-1.18.1 -->

> **Azcron wrote: Thu Dec 21, 2023 2:29 pm**
> I've been trying to get a macro to have my pet attack when casting autoshot. I've tried different macros that ive come across but nothing is working. Anyone have a macro that works for them?

Code: Select all

```
/run CastSpellByName("Auto Shot") PetAttack()
```

Something like this might work?

## Post 82454 by Azcron (Patch Note Conspiracy Theorist) — 2023-12-23T17:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82454#p82454 | page 1 | era: pre-1.18.1 -->

Finally found one that works!
/script PetAttack(target)
/cast Auto Shot

## Post 82499 by Turtlebisque — 2023-12-24T01:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82499#p82499 | page 1 | era: pre-1.18.1 -->

Don't use this in dungeons it won't end well I promise

## Post 82808 by Azcron (Patch Note Conspiracy Theorist) — 2023-12-26T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82808#p82808 | page 1 | era: pre-1.18.1 -->

> **Turtlebisque wrote: Sun Dec 24, 2023 1:49 am**
> Don't use this in dungeons it won't end well I promise

I've been using this in dungeons..currently lvl 47 and have not ran into any issues?

## Post 82848 by Turtlebisque — 2023-12-26T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=82848#p82848 | page 1 | era: pre-1.18.1 -->

Dont want your pet to body pull mobs. I keep my pet attack macro on a special key if I want it to attack or not

## Post 87627 by Ihavenoclothes — 2024-02-12T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87627#p87627 | page 1 | era: pre-1.18.1 -->

I've been using this one.

/script if GetUnitName("target")==nil then TargetNearestEnemy() end
/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(12) then CastSpellByName("Auto Shot") end
/script PetAttack()

## Post 93447 by Booglesz — 2024-04-25T00:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93447#p93447 | page 1 | era: pre-1.18.1 -->

/script if UnitExists("target") then if a ==0 then PetAttack(target) a=1 else if UnitExists("pettarget") and UnitIsUnit("target","pettarget") then PetFollow("Leonhardtusk") a=0 else PetAttack(target) end;end; else PetFollow("Leonhardtusk") a=0 end;

Change "Leonhardtusk" to your name.
This is attack and if you press it again it turns on follow and brings them back to you. I have it bound to one of my mouse buttons for quick on off usage

pet attack/pet follow

/script if GetUnitName("target")==nil then TargetNearestEnemy() end
/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(3) then CastSpellByName("Auto Shot") end

auto shot/melee attack on/off

i have each one bound to mouse keys for quick usage

## Post 93467 by Calli (Patch Note Conspiracy Theorist) — 2024-04-25T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93467#p93467 | page 1 | era: pre-1.18.1 -->

Just bind pet attack and pet follow to ur mouse roll and put zooms elsewhere to make your life easy. Macroing this very basic thing is nonsense and can make a mess very easy in dungeons especially at hc

