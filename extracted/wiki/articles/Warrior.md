---
title: "Warrior"
url: "https://turtle-wow.fandom.com/wiki/Warrior"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-15T15:01:10Z"
fetched: "2026-09-10T07:39:58Z"
is_turtle_content: false
patch: null
categories: ["Classes"]
---
# Warrior

Warrior in Vanilla observably has a healthy amount of working builds, with Arms seen in leveling dungeons and battlegrounds, with Fury in leveling and both damage dealing and tanking in raids, and Protection in late dungeons and early raiding. And even better, these builds are fun to play. 

We know we can do even better, preserving what already works while also allowing Arms players to continue into raids, see Fury open up options for solo sustain in the world and battlegrounds, and improve Protection's playstyle where we've carved in a niche in leveling and battlegrounds, as now offer a portion of the thrill and performance of the Fury tanking builds.

As such, the changes we've made to Warrior involve a good amount of shuffling class power around, and so it's easier to explain by writing the changelog in a slightly different format as you'll see below.

## WarriorSim
For all level 60 dps warriors! Check out this Warrior sim, modified with items and races from Turtle WoW: [**Link**](https://thrunk112.github.io/WarriorSim-TurtleWoW)

Unfortunately figuring out how much crit = hit = str = agi, is not straightforward, which is why this sim is useful, to let you select gear pieces and see how the stack up against each-other. 

Turtle WoW has added a LOT of prebis gear that many people forget about, and importantly quite a few new +weapon skill items which really help shake up raid gear progression. Test them out in the sim to see where you should aim your gear grinding efforts next!

## **Baseline Changes**
Rage Generation. 

In Vanilla, the rage generation formula rewards players with the resource with a simple formula converting auto-attack damage done to rage gained, only modified by a coefficient that scales the damage requirements each level.

While Vanilla’s system shines for late 60 raiders, unfortunately everywhere else, players are harshly punished and suffering rage-starvation, especially for:

- Levelers that don’t have the absolute greatest weapon possible.

- Dungeoneers and fresh raiders, in fights where you are unable to offtank for the added rage income.

- When dueling the more heavily armored (and especially shield wearing) player classes.We do recognize the enjoyment found in top-end raiding, and we aim to retain a similar game-feel there. To retain this, and relieve the widespread pain points above, we find that a new rage generation formula that's calculated 90% depending on your gear and 10% of it is predetermined based on your weapon speed best helps achieve this. With the formula change, players will notice significantly increased rage generation in these cases. The top is the same, but the bottom has been raised up.
Rage decay portion of Anger Management has been made baseline, while the in combat part is compensated by the rage generation changes.
----Execute has seen a rebalance, reducing its base damage while increasing the extra rage conversion damage, the values go as follows:

Rank 1 (Level 24): 125 to 75 Damage, 3 to 4 Damage per Extra Rage
Rank 2 (Level 32): 200 to 150 Damage, 6 to 8 Damage per Extra Rage
Rank 3 (Level 40): 325 to 225 Damage, 9 to 12 Damage per Extra Rage
Rank 4 (Level 48): 450 to 300 Damage, 12 to 16 Damage per Extra Rage
Rank 5 (Level 56): 600 to 375 Damage, 15 to 20 Damage per Extra Rage
Execute now also has a 5.5 second cooldown.
----Your off-hand weapon attacks are no longer guaranteed to land while your Heroic Strike is queued.
*Developer Comment: While this mechanic promoted different gearing in comparision to Rogues, it has proven to be quite unintuitive and clunky to use. To compensate for this change the Dual Wield Specialization now increases your chance to hit with your off-hand weapon by 2/4/6/8/10%, more details on that in the Fury section.*
----Dual Wield is now taught at level 10.
----Intervene is now taught at 20 instead of a book item.
----Pummel now only has one rank that deals 5% of your Attack Power as damage instead of a flat value and is now taught at level 18 and will be available for use in Battle Stance.
----Slam is now taught at level 14 and pauses your weapon swing timer instead of resetting it.  
*Developer Comment: This change will help two-handed warrior builds and reduce the unfair advantage of players with better internet connection.*
----Rend now scales with your Attack Power.
----Rage Decay when out of combat is now consistently 2 rage per 2 seconds.
----Hamstring now has a 6 second cooldown.

Sunder Armor's rage cost has been reduced from 15 to 10 rage. 
*Developer Comment: These changes were done to reduce Warrior's stickiness in player combat while elevating Sunder Armor as a tool to trigger weapon effects in its place.*
----Shield Wall is now ended prematurely if you unequip your Shield while the effect is active.
----

## **Arms**
The Arms tree in Vanilla did see plenty of use both early and deep, but builds dipping lower were really only done because of the cleaving power of Sweeping Strikes and/or the healer counter on Mortal Strike. We've fleshed out the lower half of the tree, and have re-homed an ability earlier in the tree as well. This, in combination with becoming the true home of twohanded Slam builds, should now see Arms builds function into raiding, all while maintaining a similar power level for battlegrounds.
----Tactical Mastery has been moved from the 2nd row to the 1st row.
----Improved Rend now requires 2 points instead of 3 points, and increases the bleed damage done by your Rend ability by 10/20% instead of 15/25/35%.
----Deflection has been moved from the 1st row to the 2nd row.
----Amount of rage generated by Improved Charge has been increased from 3/6 rage to 5/10 rage.
----Deep Wounds now deals damage every 1.5 seconds and lasts 6 seconds.
*Developer Comment: This change makes Deep Wounds more useful even in situations where its quickly refreshed by multiple Warriors (such as raids), allowing it to deal atleast a part of its damage before its replaced while doubling its output for situations outside of raids.*
----Improved Hamstring has been removed.
----New Talent: Counterattack (3rd Row Keystone): A strike that becomes active after parrying an opponent's attack. This attack deals X damage plus 10% of your Attack Power and immobilizes the target for 3 sec. Counterattack cannot be blocked, dodged, or parried. 
(5 second cooldown.)
Damage Values:
Rank 1 (Level 20/Talent): 40 Damage
Rank 2 (Level 30): 80 Damage
Rank 3 (Level 40): 120 Damage
Rank 4 (Level 50): 160 Damage
Rank 5 (Level 60): 200 Damage
----Improved Slam is now an Arms tree talent, total points have been reduced from 5 to 2, and now affects global cooldown of Slam in addition to regular cooldown.
----Two-Handed Weapon Specialization now requires 3 points instead of 5 points, increases the damage you deal with two-handed weapons by 2/4/6% and now increases your skill in all two-handed weapons by 1/2/3.
----Poleaxe Specialization and Sword Specialization has been removed.
New Talent: Master of Arms (5th Row / 5 Points): Adds the following effects to your weapon, based on the weapon type.

- Axe - Increases your chance to get a critical strike by 1/2/3/4/5%.

- Mace - Causes your attacks to ignore 2/4/6/8/10 of your target's Armor per level.

- Sword - Gives you a 1/2/3/4/5% chance to get an extra attack on the same target after hitting your target.

- Polearm - Increase the range of melee attacks with melee attacks by 0.4/0.8/1.2/1.6/2.0 yards.

----Sweeping Strikes now costs 20 rage instead of 30 rage and is no longer spent by off-hand hits.
----New Talent: Precision Cut (5th Row / 3 Points): Increases the damage done per extra rage point spent on Execute by 20/40/60%.
----New Talent: Boundless Anger (6th Row / 3 Points): Increases your maximum rage by 10/20/30.
----Improved Disciplines now reduces the cooldown of Retalliation, Recklessness and Shield Wall by 4/8/12 minutes instead of 2/4/6 minutes.
----

## **Fury**
Fury Warrior in Vanilla is famous for its performance and high octane gameplay in raiding, and we intend to not only keep this intact but even enhance it with significant Enrage uptime. However, in all other regards, this tree is lacking. With our talent reworks, ability tuning, and efforts to enhance the tree's neglected berserker flavor, we've carved an additional niche into the Tree, and building into Fury should now be less questionable for use in leveling and in battlegrounds.
In the end, Fury gameplay should remain very similar to the old playstyle, with new exciting Enrage procs and better scaling in early game.
----Booming Voice now increases the area of effect of all shouts and its effects have been increased from 10/20/30/40/50% to 12/24/36/48/60%. 
*Developer Comment: All shouts indicate that this talent now also affects Intimidating Shout, Piercing Howl and Challenging Shout.*
----Unbridled Wrath's proc chance has been increased from 8/16/24/32/40% to 15/30/45/60/75% and its effect is now doubled for two-handed weapons.
----Dual Wield Specialization has been moved from the 4th row to the 2nd row and now also increases your chance to hit with your off-hand weapon by 2/4/6/8/10%.
----Improved Demoralizing Shout has been merged with Improved Battle Shout into a new talent called Improved Shouts in the 3rd row, possessing the effects of both talents.
----Blood Craze's healing has been increased from 1/2/3% to 2/4/6% of your total health.
----Improved Execute has been replaced by Reckless Execute, reducing the cooldown of your Execute by 2/4 seconds. The second point removes the cooldown of your Execute.
----Enrage now lasts 8 seconds instead of 12 seconds but no longer has a maximum of 12 swings.
----New Talent: Improved Pummel (4th Row / 2 Points): Gives your Pummel ability a 25/50% chance to daze the victim for 4 seconds, and spellcasting school lockouts now last 1/2 sec longer.
----Improved Slam has been moved to the Arms tree.
----New Talent: Improved Whirlwind (5th Row / 3 Points): Reduces the cooldown of your Whirlwind ability by 1/1.5/2 sec.
----Improved Intercept has been renamed to Battlefield Mobility and now also reduces the cooldown of Intervene.
----Improved Berserker Rage has been removed.
----New Talent: Blood Drinker (6th Row / 3 Points): While under the effects of Enrage, Death Wish, or Recklessness, your critical strikes with abilities   cause your next 5 melee attacks to heal you for 1/1.5/2% of your maximum health.
----Bloodthirst has been reworked to the following ability: Instantly perform a reckless attack dealing X damage plus 30% attack power, and you suffer a self-inflicted wound for your recklessness.

Damage Values:
Rank 1 (Level 40/Talent): 80 Flat Damage
Rank 2 (Level 48): 100 Flat Damage
Rank 3 (Level 56): 120 Flat Damage
Rank 4 (Level 60): 150 Flat Damage
*Developer Comment: This self-harm does half the base damage, half the scaling and takes your armor damage reduction into account. This self damage can critically strike you and proc Enrage, this chance is equal to your physical critical strike chance.*

## **Protection**
Protection is an odd tree in Vanilla, with the top half offering good defensive options, while the bottom half offered basically nothing good until the capstone. In the interest of improving Protection leveling builds and opening up new builds for end-game, Shield Slam (now talentable at lv 30) has gained significant damage scaling, and alongside it the lower half of the tree has been jazzed up with many new threat and damage options, as well as one relocated defensive option. 
----Improved Bloodrage moved to row 1. Now generates additional 5/10 instant rage.
----Shield Specialization now generates 1/2/3/4/5 rage when a block occurs in addition to increased block chance.
----Anticipation reduced to 3 ranks, grants 7/14/20 Defence.
----Improved Shield Block removed. 
*Developer Comment: This ability is probably one of the most overtuned single talent points in vanilla, as it doubles the potency of Shield Block, an ability which itself is extremely potent in its hidden feature of granting nearly any user immunity to both critical strikes and crushing blows for the single block. While this isn’t that useful in dungeons and versus fast attacking mobs, this ability plus its talent grant 4.4 sec of this immunity every 5 seconds, versus the average raid boss. We don’t want to take away this uniqueness from Warrior tanking, but we also felt that this power being available in row 3 was a little too good. Instead, we’ve moved the power onto a side talent of Shield Slam.*
----Toughness now additionally increases the amount of damage absorbed by your shield by 3/6/9/12/15%.
----New Talent: Improved Intervene grants a 50/100% chance to gain immunity to movement impairing effects for 3 sec after using Intervene.
----Improved Taunt moved from row 4 to row 3.
----Improved Revenge now reduces cooldown of Revenge by 0.5/1/1.5 sec. in addition to the previous effect.
*Developer Comment: Improved Revenge didn’t see much effective use, especially in raiding, so we’ve added a cooldown reduction component that makes it more generally useful.*
----Defiance moved from row 3 to row 4.
----Improved Sunder Armor removed. Base cost of Sunder Armor has been reduced by 5 rage.
----Improved Shield Bash renamed to Gag Order and moved to row 4. Now gives your Shield Slam additional 25/50% chance to dispell a magic effect from the target in addition to he previous effect.
----Improved Disarm reduced to 2 points. Now decreases the cooldown of your Disarm ability by 10/20 secs instead.
----One-Handed Weapon Specialization moved from row 6 to row 5.
----Shield Slam moved to row 5. Damage of Shield Slam is now modified by your attack power in addition to shield block value.
----New Talent: Improved Shield Slam: Reduces the cooldown of Shield Slam by 0.5/1 sec, and using this ability will also grant you an extra 35/70% chance to block the next attack within 5 sec.
----New Talent: Reprisal: Increases the damage dealt by your Revenge ability by 25/50%, and has a 50/100% chance to refund its rage cost if successful.
----Improved Shield Wall moved from row 5 to row 6. Now reduces the cooldown of Shield Wall by 5/10 min and increases its duration by 1/2 sec.
*Developer Comment: We found that the increased duration of Improved Shield Wall is far less useful than simply being able to use it more often. We don’t want players feeling like they’d have to go deep into Arms for Improved Disciplines to enjoy a smaller cooldown for Shield Wall, so we’ve moved some of the power of this talent off of the duration extension, and into a cooldown reduction.*
----New Talent: Defensive Tactics: While wearing a shield, you retain 50/100/150% of the increased threat generation from Defensive Stance in other stances.
----Concussion Blow moved from row 5 to row 7. Now deals damage, causes a high amount of threat and penetrates 50% of the enemy's armor in addition to the previous effect.
*Developer Comment: Another disparity between Vanilla raiding Deep Protection and Fury/Prot hybrid, is how Death Wish’s damage bonus provides for noticeably increased opener/snap threat, while Deep Protection has no such equivalent.* 
*Additionally, vanilla Concussion Blow as it stands is a simple clone of Paladin’s Hammer of Justice, so we feel it warrants some differentiation.*
*As Concussion Blow is less of a magical stun and more of a strong head-cracking blow, we have added a damaging component that half-penetrates the enemy’s armor. This design should result in Concussion Blow being used for maximizing single target opener/snap threat as the first global cooldown.*
**UPDATES | Dated: October 21 2024**Improved Shield Slam: Effect duration and cooldown reduced from 5 seconds to 4.5 seconds and the cooldown reduction on Shield Slam increased from 0.5/1 seconds to 0.75/1.5 seconds.
**UPDATES | Dated: November 1 2024**Damage increase bonus granted by Enrage reduced from 25% to 15%.
----Bloodrage now activates your Enrage.
----Slam cast time increased from 1.5 seconds to 2 seconds.
----Decisive Strike cast time increased from 2 seconds to 2.5 seconds.
----Rend now scales by 5% of your Attack Power per tick of damage, for all ranks.
----Mortal Strike now does 105/110/115/120% weapon damage, instead of weapon damage plus 85/110/135/160.
----Defensive Tactics' multipliers have been raised to 55/110/165%.
