---
title: "Pet one button macro for hunters/"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14717"
topic_id: 14717
forum_id: 45
forum: "Hunter"
author: "Obigaming"
author_authority: "player"
posted: "2024-08-29T05:39:00Z"
last_post: "2024-12-30T06:56:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:12:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Pet one button macro for hunters/

## Post 100362 by Obigaming — 2024-08-29T05:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100362#p100362 | page 1 | era: pre-1.18.1 -->

Im fairly new to turtle-wow and I was wondering since my first 30+ character is a hunter if there was a one button macros to call pet, feed pet, mend pet, revive pet and dismiss pet? ive tried one that worked on classic wow even tho these are two different versions i thought it mightve work, i was wrong. So pls if anyone knows how to scrit a macro for what i mentioned ill greatly appreciate it.

## Post 100363 by Ibux (Patch Note Conspiracy Theorist) — 2024-08-29T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100363#p100363 | page 1 | era: pre-1.18.1 -->

this one is nice
[https://github.com/Meridaw/Vanilla-Macr ... 0Attack.md](https://github.com/Meridaw/Vanilla-Macros/blob/master/Hunter/Pet/Uber%20Pet%20Attack.md)

## Post 100376 by Mosttrustworthy — 2024-08-29T12:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100376#p100376 | page 1 | era: pre-1.18.1 -->

Due to the volume of the desired functionality, it is necessary either to split the macro into two, or avail yourself of some macro-extending add-on.
I use SuperMacro, myself.

If Pet does not exist, Call Pet
Else if Pet is dead, Revive Pet
Else if Pet is in combat, Mend Pet
Else if Pet is the current target, Feed Pet with whatever is in the second slot of the first bag
Else Dismiss Pet
> /script local CSBN = CastSpellByName if not UnitExists("pet") then CSBN("Call Pet") elseif UnitIsDead("pet") then CSBN("Revive Pet") elseif UnitAffectingCombat("pet") then CBSN("Mend Pet") elseif UnitIsUnit("target", "pet") then CSBN("Feed Pet") PickupContainerItem(0, 2) else CSBN("Dismiss Pet") end

To select a different inventory slot to use with Feed Pet, change the numbers in PickupContainerItem(0, 2).
The game considers your bags to be your Containers, while your equipped gear is your Inventory.
Your bags go from 0 to 4, with 0 being the original backpack, getting further along the bag list as the number increases.
Inventory slots go from 1 to however many slots are in the specified bag.
Keep appropriate pet food in the same slot of the same bag and the macro will always work. Neglect this aspect of bag management and your pet might accidentally eat your Hearthstone.

Enabling mid-combat Dismissal requires an adjustment.

Etc.
If Pet is the current target, Dismiss Pet
Else if Pet is NOT in combat, Feed Pet
Else Mend Pet
> /script local CSBN = CastSpellByName if not UnitExists("pet") then CSBN("Call Pet") elseif UnitIsDead("pet") then CSBN("Revive Pet") elseif UnitIsUnit("pet") then CBSN("Dismiss Pet") elseif not UnitAffectingCombat("pet") then CSBN("Feed Pet") PickupContainerItem(0, 2) else CSBN("Mend Pet") end

## Post 114823 by IlaHaley — 2024-12-30T06:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114823#p114823 | page 1 | era: pre-1.18.1 -->

Oh, I see now, thank you!

