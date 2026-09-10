---
title: "Boar Charge Damage Calculation"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11639"
topic_id: 11639
forum_id: 45
forum: "Hunter"
author: "Gladeshadow"
author_authority: "player"
posted: "2023-11-11T23:44:00Z"
last_post: "2023-11-12T20:03:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:14:05Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Boar Charge Damage Calculation

## Post 76962 by Gladeshadow (Patch Note Conspiracy Theorist) — 2023-11-11T23:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76962#p76962 | page 1 | era: pre-1.18.1 -->

Potential scenario and question for boar damage.
Say there is a hunter with a boar (standard 2.0 attack speed). That hunter is specced in beast mastery and has the devilsaur tooth (use guarantees pet’s next attack is critical). I’m imaging the following scenario and wondering if any of you have damage calculations or can do test runs to figure out damage. So just the facts below.
Boar (2.0 attack speed)
Charge 6 (adds 550 attack power to next attack)
Devilsaur Tooth activated (guaranteed critical attack from pet)
Talent Unleashed Fury (pet does 20% more damage)
Talent Bestial Wrath activated (pet does 50% more damage)

How much damage would we be looking at? I assume there might be some weird order of operations affecting this calculation.

There also might be some damage modifiers I’m missing, so you might consider those as well. Some I left out, like the orc racial Command (+5% pet damage) and Breastplate of Beast Mastery (+3% pet damage) since they’re rare and not standard equipment that everyone can easily access. Feel free to use those in calculations as well if theorizing maximum possible damage.

## Post 77082 by Nurincarinun — 2023-11-12T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77082#p77082 | page 1 | era: pre-1.18.1 -->

Hm... So I would pick up the following formula of calculating avg dmg per swing:

Wdps: weapon dps from tooltip
Ap: summed up ap in play for the attack
Ws: (base) weapon speed
Wavg: average dmg per weapon swing

(Wdps + Ap/14) * Ws = Wavg

That would mean we take the Wdps value from the tooltip of the boar when there are no dmg multipliers in play, add the 550 ap /14 from the charge buff, multiply this by the boars "weapon" speed (the 2.0 attack speed). The resulting number would then be multiplied by the crit and dmg bonus multipliers - since these last are all multiplications, the order of applying those in the calculation would not matter.

I am unsure whether the ap in the avg dmg per swing formula should be divided by exactly 14 for a pet and how big the crit multiplier is (100%?); however we can see here that the application of the bonuses does not rly depend on something like a convoluted sequence.

If you want to calculate the minimal and maximal dmg done by this first attack after a charge, I think you would have to use: (Wlow+(Ap/14*Ws))*(CritMultiplier+100%)*(SummedDmgMultipliers+100%) for the minimum, with Wlow being the lower bound number from the attack tooltip while no dmg multipliers in play; and (Wup+(Ap/14*Ws))*(CritMultiplier+100%)*(SummedDmgMultipliers+100%) for the maximum, with Wup being the upper bound number from said tooltip at a moment without dmg multipliers.

Practically, you can just take the numbers from the boar's tooltip for Wdps and Wlow and Wup and then not include the summed dmg multipliers in the calculations - in the tooltip, they are already accounted for. Also, if there is any haste affecting the pet, the tooltip will not show the needed base Ws for the formulas above. This can be recalculated when the haste rating is known by Ws=As/(H+100%) with As as the attack speed from the tooltip (where haste is applied) and H as the summed haste rating in effect on your pet.

I sadly do not own the Devilsaur Tooth to easily test this myself; but I think once these numbers are calculated, you can go for a few tries and check the numbers - take into account, however, that the above calculations will not include dmg reduction eg from the target's armor, thus the numbers popping up ingame will prbly be lower.

[edit: I will put an example here with fantasy numbers which I will replace by in game numbers when available to me:

Boar's Attack Speed without any haste: 2.0
Boar's example dmg window as in tooltip without any dmg multipliers: 100-150
Boar's example dps as in tooltip and as from the above values: 62.5
Boar's Charge ap bonus: 550
Pet's assumed ap->+Wdmg factor: 1/14
Pet's assumed crit multiplicator: 100%

Average dmg: ((62.5+(550/14))*2.0)*170%*200%=692.1428
Minimum dmg: (100+(550/14*2.0))*170%*200%=607.1428
Maximum dmg: (150+(550/14*2.0))*170%*200%=777.1428

So in this example we'd be looking at dmg between 607-777, on avg 692 as a first hit that also crits after a charge; whereas these values would then be affected by the target's dmg reduction, eg from armor.]

I am not an expert on this, but I hope this could help, maybe at least to get a step further in tackling this issue.

btw: Can that first attack after a charge be a bite? That would add some more dmg. [edit: Nvm, I forgot that bite deals only a little bit of flat dmg instead of a boosted wdmg...]

