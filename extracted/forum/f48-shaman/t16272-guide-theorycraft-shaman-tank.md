---
title: "Guide & Theorycraft Shaman Tank"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16272"
topic_id: 16272
forum_id: 48
forum: "Shaman"
author: "Mimiwarmini"
author_authority: "player"
posted: "2024-12-02T07:33:00Z"
last_post: "2026-04-18T18:27:00Z"
post_count: 87
pages: 3
fetched: "2026-09-10T08:20:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Guide & Theorycraft Shaman Tank

## Post 110875 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-02T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110875#p110875 | page 1 | era: pre-1.18.1 -->

**Shaman Tank Guide 20/03/2026 v1.18.1**

![Image](https://i.postimg.cc/5tztrNMr/Capture-d-cran-2024-12-02-154036.png)

Summary :
I Presentation
II Introduction
III Reminder: What is a tank?
IV Redundant question about the shaman tank
V Basic statistic
VI The spell
VII Talents
VIII Threat per sec (Tps)
IX More threat with AP and SP
X Mana Management
XI Rotation and Combo
XII Gears
XIII Debuff, Buff, Enchantment, Consumable
XIV Leveling (simple)
XV Tank comparison (simple)
XVI Advantage and disadvantage of the shaman tank
XVII Tank Shaman resume

---

 *I Presentation:*

Hello to you,
I am Mimishammini, a player with some experience on wow, notably for the 1.12 (classic), TBC (2.4.3), TLK (3.3.5), Cata (4.3.5) expansions.
I was the raid leader and main tank for each of them in addition to having assembled all the characters on TLK and all the tanks for the other expansions, I am passionate about craft theory thanks to the people at Elitist Jerk who gave me a taste for math and simulation (thanks Rawr).
---

 *II Introduction :*

The objective of this guide is to create a collection in order to centralize information on the shaman tank that has recently appeared since update 1.17.2 on Turtle Wow
Indeed, this server changed the spells/talents and added items, completely changing the meta that we know on version 1.12
I therefore jumped at the opportunity to try to clarify this new (not so new) role of the shaman.
This guide is of course subject to constructive debate and should change as new information becomes available.
This guide is designed for PvE and raids.
---

 *III Reminder: What is a tank?*

A tank is a character that has several roles:
 - Take damage in place of your allies
 - Keep the threat high on enemies so that they are focused on us all the time
 - Set the pace on the speed of execution of the dungeon (it is he who decides when to start the fight)
---
Mentality of a tank:
 - The tank is the most important character in a raid, his death impacts the raid significantly, from the loss of an ally to the wype.
 - The tank must know how to adapt and make quick decisions when a situation goes wrong.
 - He respects his healers and considers that their mana is also his.
 - He will do everything in his power to create comfortable situations in which DPS can exploit all their destructive talents.
 - The tank role can be frustrating because it requires a greater investment in terms of Gear compared to the other role and is not often rewarded for its true value
(Beginner tanks often suffer from this).
 - It is therefore important to keep in mind the responsibility you have in taking on this role (the loss of a main tank can in the extreme lead to the dissolution of a guild, yes yes).
---

 *IV Redundant question about the shaman tank:*

Can the tank shaman really tank even though he has mail?
As for the leveling 1-60 part, this poses no problem, for the THL and raid part, this is what we will try to visualize.

Mana regeneration is not a problem?
No, it doesn't pose any problem, only the shaman's gameplay is unique and requires switching between a "regeneration" phase and an "increased threat" phase.

Can the Sham tank MT?
Yes and no all will depend on your Gears, your raid composition, the consumables you have, your level of play and the level of play of your mates

Isn't the Sham Tank the weakest tank?
Like other tanks, the shaman tank has its strengths and weaknesses, making it a viable alternative

Should the sham tank play Strength or Agility?
With the Rockbiter buff which gives us 653 Ap, it's as if we had 326.5 Strength, plus the Agi increases our threat and our tankiness, so I think the agi is more interesting

Aren't you supposed to use a dagger when you play sham tank?
Before or played dagger because Rockbiter brought a fixed threat for each melee hit, so we took a dagger to maximize the threat, with the changes made to rockbiter (which no longer offers this threat) and the addition of certain spells, playing a dagger for speed is a nonsense

Why play this class as a tank when other better known ones are already working on it?
Because the strength of the shaman tank allows it to generate a greater threat than any other tank, whether in AoE or single-target situations.
---

 *V Basic statistic:*

(assumed level 60)

Strength (str):
 1 str = 2 attack power (AP)
 20 str = 1 blocking value
---
Agility (agi):
 1 agi = 2 points of armor
 20 agi = 1.0% Physical Critical
 20 agi = 1.0% dodge
---
Stamina (sta):
 1 sta = 10.0 PV
 1 sta = 10.5 HP for Tauren Shamans
---
Intel(int):
 1 int = 15 mana points
 59.5 int = 1% magic crit
---
Spirit (spi):
The Spirit increases mana regeneration as long as you do not cast a spell, and returns 5 seconds after casting a spell
(see the value with the BetterCharacterStats addon)
---
MP5:
Regenerates mana continuously without conditions (regeneration occurs every 2 seconds)
---
Haste:
Increases casting and attack speed by multiplying haste bonuses between them
Example: Let's take a weapon with a speed of 2.80, using Bloodlust we obtain a buff of 15% haste and another of 5% haste for 5 seconds if we perform a critical hit
Calculate: Attack Speed ​​= Weapon Speed ​​/ ((1 + haste1 / 100) * (1 + haste2 / 100))
Attack Speed ​​= 2.8 / (1.15 * 1.05)) = 2.32
---
Critical:
Crits multiply physical damage by 2, magic damage by 1.5 (except with specific talent) and threat values ​​​​by 2
---
Hit:
Reduce the chances of missing with techniques and spells
 - Hard cap physics, 1h weapon and 2h weapon = 8% hit (on boss lvl 63)
 - Magic hard cap, weapon 1h and 2h = 17% hit (on boss lvl 63)
 5 additional weapon skill points = 1% success
---
Weapon Skill:
 1 point increases the hit by 0.2% and reduces Glancing damage reduction by 2%
Glancing is an event that occurs when landing melee white attacks on level 63+ mobs or bosses.
It has a 35% proc rate.
It reduces damage taken by 35%.
It cannot critically strike.
We can reduce Glancing damage reduction by a maximum of 30% or 15 weapon skill points
---
Avoidance:
Avoidance is the ability to avoid a blow, it allows when it is at 102.4 (not 100%, because bosses lvl 63 have more weapon skill due to the difference in lvl between us and him) to remove Avoidance Table Crush (boss lvl 63)
The Avoidance table is a die roll rolled when one suffers damage, which takes the events in the following order as values ​​=
Miss > Dodge > Parry > Block > Crush > Hit
Since the events are launched on the same die, we add the chances together to give the avoidance rate
Example: If I have 2.6% Miss, 50% Dodge and 50% Parry, I will never take damage, because my die roll will fall either on the Miss, Dodge or Parry event
---
Crush:
A Crush is a move that hits for 150% normal damage
---
Defense:
 1 defense skill point = 0.04 Miss, Dodge, Parry, Block
 1 defense skill point = 0.04 less chance of receiving a critical hit (cap at 5.6% or 140 additional defense skill points for lvl 63 bosses)
---
Miss:
The attack is missed, no damage taken or given.
---
Dodge:
The attack is dodged no damage suffered or given, if the blow is given from behind the dodge is not applied
---
Parade:
The attack is parried, no damage taken or given, after a Parry the speed of your next automatic attack is faster
---
Block:
Attack is reduced by a portion of damage based on block value
---
Armor:
Reduces damage taken by 1%
Calculate for enemy lvl 60+: %Reduction = (Armor / ((467.5 * Enemy_level) + Armor -22167.5)) * 100
---
Threat:
Threat is a hidden value that forces the NPC (except in the case of a special rule) to hit the target with the highest value
 1 point of damage inflicted = 1 point of Threat
 1 healing point = 0.25 threat point on the target's target
 1 mana point which is not generated naturally = 0.5 threat point on the target
Certain kinds generate Threat values ​​directly (Ex: Heroic Strike)
To summarize agro there are 3 possibilities =
 - Make a Taunt that places us at the highest value
 - If you are in melee, you must generate 110% of the current threat value (Ex: current value = 1000 you must make 1100 threat to resume agro)
 - If you are at a distance, you must generate 130% of the current threat value (We agree casters, we don't get into melee)
---

 *VI The spells :*

We are going to make an exhaustive list of all the spells that can be used by the shaman tank

Single Target Threat Generation:
 - Lightning Strike = Mandatory, it causes 60% of the weapon's damage in the form of physical damage in addition to causing 20% ​​of the weapon's damage in the form of natural damage, it also consumes a shield charge and there strengthens, Lightning Shield > 4 attack power for 1 additional damage, Water Shield > 20 attack power for 1 additional mana, Earth Shield: 15 attack power for 1 additional health point restored. (Instant, 9 sec cooldown, Spell cost = 182 mana)
 - StormStrike = Mandatory, it causes 100% of the weapon's damage in the form of physical damage and it increases our next 2 sources of nature damage by 25% (Instant, 8 sec cooldown, Spell cost = 152 mana)
 - Earth Shock = Mandatory, it has a hidden effect which multiplies the threat it generates by 1.5, Interrupts the spell during casting, it causes 492 - 520 natural damage increased by our attack power (10%) (Instant, 6 sec cooldown, Spell cost = 450 mana)
 - Flame Shock = Situational, it causes 291 - 292 fire damage increased by our attack power (8,5%), it also does 423 fire damage in 15 sec increased by our attack power (1.5% per tick , 1 tick every 3 sec) (Instant, 6 sec cooldown, Spell cost = 410 mana)
 - Frost Shock = Situational, it causes 442 - 470 frost damage increased by our attack power (10%), it slows the target's movements by 50% for 8 sec (Instant, 6 sec cooldown, Cost of sort = 430 mana)
 - Lightning Bolt = Situational, it causes 428 - 477 nature damage (3 seconds of casting, Cost of the spell = 240 mana)
 - Lightning Shield = Situational, when using this spell, 3 orb charges are given to us for 10 minutes, it causes 198 nature damage if an enemy hits us with a melee attack or spell and consumes a charge, this effect can only occur once every 2 seconds (Instant, Spell Cost = 310 mana)
 - Molten Blast = Situational, it causes 290 - 331 fire damage, re-target your Searing Totem and refresh your Flame Shock effect (2 seconds of casting, Cost of the spell = 210 mana)
 - Searing Totem = Situational, summons a fire totem that inflicts 40 - 54 fire damage every 2 seconds for 55 seconds on a single target (Instant, Spell Cost = 170 mana)
---

Multi-Target Threat Generation:
 - Chain Lightning = Situational, it causes 391 - 438 nature damage, bounces from target to target up to 3 targets in total, loses 30% of its value per bounce (2.5 seconds of casting, Cost of the spell = 490 mana )
 - Stoneclaw Totem = Situational, summons a earth totem  which has 485 health points and that taunt creatures every 2 seconds for 15 seconds within a radius of 8 yards (Instant, 30 sec cooldown, Spell cost = 140 mana)
 - Fire Nova Totem = Situational, summons a fire totem which inflicts after 4 seconds 413 - 459 fire damage within a 10 yard radius, the totem is instantly destroyed (Instant, 15 sec cooldown, Cost of sort = 520 mana)
 - Magma Totem = Situational, summons a fire totem that inflicts 75 fire damage every 2 seconds for 20 seconds within a radius of 8 yards (Instant, Spell Cost = 650 mana)
---
Buff and Totem:
 - Rockbiter = Mandatory, it increases our attack power by 653 and our threat generates by 35% (for 1 hour)
 - BloodLust = Situational, increases spell haste and melee by 20% for 30 sec plus your critical costs increases spell haste and melee by an additional 8% for your group for 6 sec, this effect occurs as long as Bloodlust is active (Instant , 300 sec cooldown, Spell cost = 395 mana)
 - Water Shield = Mandatory, when using this spell we are given 3 orb charges for 10 minutes, it gives us back 130 mana if an enemy hits us with a melee attack or spell and consumes a charge, this effect can only occur once every 2 seconds (Instant, Sorting Cost = 0 mana)
 - Earth Shield = Situational, when using this spell we are given 3 orb charges for 10 minutes, it gives us 150 health back if an enemy hits us with a melee attack or spell and consumes a charge, this effect can only occur once every 2 seconds (Instant, Sorting cost = 300 mana)
---
_Earth Totem
 - Stoneskin Totem = Mandatory, summons an earth totem that reduces damage suffered by group members by 30, within a 20 yard radius, for 120 sec (Instant, Spell Cost = 210 mana)
 - Strength of Earth Totem = Situational, summons an earth totem that increases the strength by 60 of all party members within a 20 yard radius for 120 sec (Instant, Spell Cost = 224 mana)
 - Tremor Totem = Situational, summons an earth totem that removes the effects of fear, charm, sleep within a 30 yard radius for 120 sec (Instant, Spell Cost = 60 mana)
 - Earthbind Totem = Situational, summons an earth totem that slows enemies within a 10 yard radius for 45 sec (Instant, 15 sec cooldown, Spell cost = 91 mana)
---
_Water Totem
 - Healing Stream Totem = Situational, summons a water totem that heals 14 every 2 seconds to all group members within a 20 yard radius for 60 seconds (Instant, Spell Cost = 80 mana)
 - Mana Spring Totem = Situational, summons a water totem that restores 10 mana points every 2 seconds to all group members within a 20 yard radius for 60 seconds (Instant, Spell Cost = 100 mana)
 - Poison Cleansing Totem = Situational, summons a water totem that removes 1 stack of poison every 5 seconds from all group members within a 20 yard radius for 120 seconds (Instant, Spell Cost = 152 mana)
 - Disease Cleansing Totem = Situational, summons a water totem that removes 1 stack of disease every 5 seconds from all group members within a 20 yard radius for 120 seconds (Instant, Spell Cost = 152 mana)
 - Fire Resistance Totem = Situational, summons a water totem that increases fire resistance by 60 to all party members within a 30 yard radius for 120 sec (Instant, Spell Cost = 180 mana)
---
_Air Totem
 - Grace of Air Totem = Mandatory, summons an air totem that increases the agility of all party members by 75 within a 20 yard radius for 120 sec (Instant, Spell Cost = 310 mana)
 - Windfury Totem = Situational, summons an air totem which gives a 20% chance triggers 1 additional attack with the primary attack to all party members within a 20 yard radius for 120 sec (Instant, Spell Cost = 115 mana )
 - Grouding Totem = Situational, summons an air totem which redirects the next spell cast on a group member for 45 sec, cannot redirect area spells (Instant, 20 sec cooldown, Spell Cost = 91 mana)
 - WindWall Totem = Situational, summons an air totem that reduces ranged damage by 83 to group members within a 20 yard radius for 120 sec (Instant, Spell Cost = 224 mana)
 - Nature Resistance Totem = Situational, summons an air totem that increases nature resistance by 60 to all party members within a 30 yard radius for 120 sec (Instant, Spell Cost = 180 mana)
---
_Fire Totem
 - Frost Resistance Totem = Situational, summons a fire totem that increases frost resistance by 60 to all party members within a 30 yard radius for 120 sec (Instant, Spell Cost = 180 mana)
---
Utility :
 - Earthshaker Slam = Mandatory, taunt the target, has no effect if the target is already attacking us (Instant, 10 sec cooldown, Spell cost = 0 mana)
 - Purge = Situational, purges the targeted enemy and removes 2 beneficial effects (Instant, 8 sec cooldown, Spell Cost = 152 mana)
 - Cure Poison = Situational, heals the target and removes 1 stack of poison (Instant, Spell Cost = 136 mana)
 - Cure Disease = Situational, heals the target and removes 1 stack of disease (Instant, Spell Cost = 136 mana)
 - Calm Elements = Situational, calms an elemental and reduces its range to 10 yards (Instant, Spell Cost = 90 mana)
---
Racial Shaman:
_Orc
 - Feral Spirit = Situational, Summons 2 spectral wolves under the command of the shaman for 20 sec (Instant, 300 sec cooldown, Spell cost = ? mana)
---
_Tauren
 - Totemic Slam = Situational, it causes 10% attack power in the form of physical damage in addition to reducing attack and casting speed by 25% for 8 sec (Instant, 90 sec cooldown, Cost of the spell = 76 mana)
---
_Troll
 - Hex = Transforms the enemy into a frog that cannot cast spells and deals 66% less damage for up to 4 sec, only works on beasts, humanoids and creatures (Instant, 300 sec cooldown, Cost of the spell = ? mana)
---

 *VII Talents:*

The most important thing when you choose your talents without a mathematical approach is to first have an idea of ​​your needs in order to select the talent that will allow you to improve your uncomfortable situation, this rule can apply to all other classes

I will not do a mathematical demonstration, because talents must be adapted according to situations, instead, I will present several situations to you and the way in which I adapted my talents

The shaman is a basic class which is not intended for taking damage, because it wears mail which gives armor lower than the plate and does not have a spell which increases its armor

In order to check this, let's start by listing the spells that can increase our durability:
 - Earth Shield
 - Stoneskin Totem
 - Healing Stream Totem
 - Grace of Air Totem

We see that these spells do not considerably increase our tankiness, but that's still it, let's now move on to the talent:

Legend:
 - Red = Threat generation
 - Blue = Mana generation
 - Green = Survivability
 - Purple = Fulfills several roles
 - Yellow = Mandatory
 - Red cross over the talent = Too deep in a non-enh tree to become relevant

![Image](https://i.postimg.cc/Sx1DvgPP/Talent-Utile.png)
---
Many talents that increase threat are found in the Enhancement and Elemental branch, let's look at which spells are impacted by these talents:

_Elemental
 - Concussion: Shock, Lightning Strike
 - Elemental Devastation: All
 - Reverb: Shock, Lightning Strike
 - Call of Flame: Totem fire, Flame Shock
 - Flame Guidance: Totem fire, Flame Shock, Lightning Strike
---
_Amelioration
 - Ancestral Knowledge: All
 - Thundering Strike: Weapon Attack, Lightning Strike, StormStrike
 - Totemic Alignment: Totem fire, Healing Stream Totem
 - Lightning Strike: add spell, Earth Shock
 - Flurry: Attack weapon
 - Enhancing Totem: Grace of Air Totem, Strength of Earth Totem
 - StormStrike: add spell
 - Weapon Mastery: Weapon Attack, Lightning Strike, StormStrike
 - BloodLust: Attack Weapon
---
The Elemental part increases magical damage where the Enhancement branch increases physical damage.
Ps: I'm not talking about the talents that increase Lightning Bolt and Chain Lightning, because they are incantation spells, their use represents a danger, because during the incantation the avoidance is reduced to 0
---

 *VIII Threat per sec (Tps):*

For these calculations, I would only take into account the talents and buffs that we can provide ourselves, for the choice of weapon, I would take two, a fast one (Mallet of the Awakening) and a slow one. (Grand Marshal's Punisher) they have almost equivalent dps (the mallet is stronger), I will not take into account the bonuses they provide.

Buff:
 - Rockbiter (653)
---
Threat Weapon Attack:
Calculates base = (((Weapon Damage Min + Weapon Damage Max) / 2 + **AP / 14** * Weapon Speed) / Weapon Speed) * 1.45
 - Mallet of the Awakening = ((108 + **46.6** * 1.8) / 1.8) * 1.45 = 154.63 Tps
 - Grand Marshal's Punisher = ((173 + **46.6** * 2.9) / 2.9) * 1.45 = 154.13 Tps
---
Threat Lightning Shield:
Calculate per tick = (Spell DPS + **SP** * 0.33) / 3 * 1.45
 - Lightning Shield = (198 + **0** * 0.33) / 3 * 1.45 = 95.7 Tps
---
Threat Earth Shield:
Calculate per tick = (Spell HEAL + **SP** * 0.2) * 0.25 / 3 * 1.45
 - Earth Shield = (150 + **0**) * 0.25 / 3 * 1.45 = 18.13 Tps
---
Threat Water Shield:
Calculate per tick = Spell MANA * 0.5 / 3 * 1.45
 - Water Shield = 130 * 0.5 / 3 * 1.45 = 31.42 Tps
---
Threat Lightning Strike:
Calculates value per hit (vph) = (Weapon Damage Min + Weapon Damage Max) / 2 + **AP/14** * Weapon Speed
 - Mallet of the Awakening = 108 + **46.6** * 1.8 = 192
 - Grand Marshal's Punisher = 173 + **46.6** * 2.9 = 308
Calculate base = ((vph * 0.8 + SP * 0.05) / 9) * 1.45
 - Mallet of the Awakening = ((192 * 0.8 + 0) / 9) * 1.45 = 24.75 Tps
 - Grand Marshal's Punisher = ((308 * 0.8 + 0) / 9) * 1.45 = 39.70 Tps
Calculates base with Lightning Shield = ((vph * 0.8 + SP * 0.05) + **Spell DPS** + AP / 4) / 9 * 1.45
 - Mallet of the Awakening = ((192 * 0.8 + 0) + **198** + 163.25) / 9 * 1.45 = 82.95 Tps
 - Grand Marshal's Punisher = ((308 * 0.8 + 0) + **198** + 163.25) / 9 * 1.45 = 97.90 Tps
Calculate base with Earth Shield = (((vph * 0.8  + SP * 0.05) + (**Spell Heal** + AP / 15) * 0.25) / 9) * 1.45
 - Mallet of the Awakening = ((192 * 0.8 + 0) + (**150** + 44) * 0.25) / 9 * 1.45 = 32.56 Tps
 - Grand Marshal's Punisher = ((308 * 0.8 + 0) + (**150** + 44) * 0.25) / 9 * 1.45 = 47.51 Tps
Calculate base with Water Shield = (((vph * 0.8  + SP * 0.05) + (**Spell Mana** + AP / 18) * 0.5) / 9) * 1.45
 - Mallet of the Awakening = ((192 * 0.8  + 0) + (**130** + 36.28) * 0.5) / 9 * 1.45 = 38.14 Tps
 - Grand Marshal's Punisher = ((308 * 0.8  + 0) + (**130** + 36.28) * 0.5) / 9 * 1.45 = 53.09 Tps
---
Threat Stormstrike:
Calculate base = (vph / 8) * 1.45
 - Mallet of the Awakening = (192 / 8) * 1.45 = 34.80 Tps
 - Grand Marshal's Punisher = (308 / 8) * 1.45 = 55.83 Tps
---
Threat Earth Shock:
Calculate base = (Spell DPS + **AP** * 0.1 + SP * 0.386) * 1.5 / 6 * 1.45
 - Earth Shock Max = (520 + **653** * 0.1 + 0 * 0.386) * 1.5 / 6 * 1.45 = 212.17 Tps
 - Earth Shock Min = (492 + **653** * 0.1 + 0 * 0.386)) * 1.5 / 6 * 1.45 = 202.02 Tps
---
Threat Flame Shock:
Calculate base = ((Spell DPS + **AP** * 0.085 + SP * 0.214) / 6 + (Dot DPS) + ((**AP** * 0.015 + SP * 0.1) * 4) / 15) * 1.45
 - Flame Shock = ((292 + **653** * 0.085 + 0 * 0.214) / 6 + (423 + (**653** * 0.015  + 0 * 0.1) * 4) / 15) * 1.45 = 125.66 Tps
---
Threat Frost Shock:
Calculate base = (Spell DPS + **AP** * 0.1 + SP * 0.386) / 6 * 1.45
 - Frost Shock Max = (470 + **653** * 0.1 + 0 * 0.386) / 6 * 1.45 = 129.36 Tps
 - Frost Shock Min = (442 + **653** * 0.1 + 0 * 0.386) / 6 * 1.45 = 122.60 Tps
---
Totem Threat with the Totemic Alignment talent:

Threat Stoneclaw Totem:
 - Stoneclaw Totem = 150 * 0.9 * 1.45 / 2 = 97.88 Tps
---
Threat Searing Totem:
Calculate base = (Spell DPS + **SP** * 0.08 / 55 * 2) * 0.9 * 1.45 / 2
 - Searing Totem Max = (54 + **0** * 0.08 / 55 * 2) * 0.9 * 1.45 / 2 = 23.49 Tps
 - Searing Totem Min = (40 + **0** * 0.08 / 55 * 2) * 0.9 * 1.45 / 2 = 17.40 Tps
---
Threat Fire Nova Totem:
Calculate base = (Spell DPS + **SP** * 0.15) * 0.9 * 1.45 / 15
 - Fire Nova Totem Max = (459 + **0** * 0.15) * 0.9 * 1.45 / 15 = 39.93Tps
 - Fire Nova Totem Min = (413 + **0** * 0.15) * 0.9 * 1.45 / 15 = 35.93 Tps
---
Threat Magma Totem:
Calculate base = (Spell DPS + **SP** * 0.032) * 0.9 * 1.45 / 2
 - Magma Totem = (75 + **0** * 0.032) * 0.9 * 1.45 / 2 = 48.94 Tps
---
Threat Healing Stream Totem :
Calculate base = (Spell HEAL + **SP** * 0.0216) * 0.25 * 1.45 / 2
 - Healing Stream Totem = (14 + **0** * 0.0216) * 0.25 * 1.45 / 2 = 2.54 Tps
(We do not multiply by 0.6 because it is we who regenerate health and not the totem)
---
Threat Mana Spring Totem :
Calculate base = Spell Mana * 0.5  * 1.45 / 2
 - Mana Spring Totem = 10 * 0.5  * 1.45 / 2 = 3.63 Tps
(We do not multiply by 0.6 because it is we who regenerate mana and not the totem)
---
With these calculations, we can only say that a slow weapon will give us more Threat than a fast weapon
The Tps values ​​presented allow you to have an overview of the Threat that can be generated, but in no case to establish an order of priority, because the talents, gear and buff are not all present
I would also like to point out that the Tps is calculated on a single target and in no way represents the real values ​​that you will obtain in game

Ok great, but why are you showing us this? Well, all these calculations are intended to give us a starting point in order to guide us in the choice of our talents:

Here are 2 examples of talent trees that maximize one of the sources of Threat:

Threat generation oriented talent tree with Auto Attack:
![Image](https://i.postimg.cc/x1165w6T/Talent-Cac.png)

Talent tree oriented towards Threat generation with Shock and Totem:
![Image](https://i.postimg.cc/3wP9KdY1/Talent-Totem.png)

Of course these trees can be modified as you wish and depending on your situation, it's up to you to do your tests
---

 *IX More threat with AP and SP:*

During different tests I noticed that the devastation talent increases the hit spell by 12% under proc,
For the sake of efficiency and to avoid misses I would like to add 4% hit spell which forces me to take caster items
The objective is to observe how AP and SP increase threat in order to have an idea of ​​the loss/gain that taking a caster item can cause.
For this, we will start with basic statistics where we have 100 AP and 100 SP

We will now calculate 3 different threats with [AP=0,SP=0], [AP=100,SP=0], [AP=0,SP=100] and look at the delta between each of them:

![Image](https://i.postimg.cc/VvXRJRWD/Capture-Tableau.png)
---
The first observation that we can make is that the SP is not a negligible statistic and that it is close to the gain obtained with the AP
We also see that SP CAN become a better statistic if we integrate it into a rotation with Lightning Shield
I say CAN and I emphasize this point because depending on the talents, selecting the SP can become more powerful than the AP and vice versa.
---
Here are the advantages and disadvantages of taking items that give SP, int, sta, hit spell:

_Advantage
 - Spells can no longer miss under devastation proc
 - Int increases our crits with spells and our mana gauge
 - SP increases our threat generation with spells

_Disadvantage
 - Possible loss of defensive statistics like agi (depends on tankiness)
 - Possible loss of threat on single targets (depends on talents and rotation)
---
 *X Mana management:*

This part aims to present the different ways of managing mana
Before getting to the heart of the matter, I would like to remind you that like a healer who Overheals, the shaman tank can Overthreat
Overthreat so good! Does that mean my shaman generates 100 times more threat than other classes?

Not really, let's start by defining what Overthreat is:
Overthreat is the act of generating much more threat than is necessary to maintain aggro from the beginning to the end of the enemy's life.
> Example 1:
>  An enemy has 6000 life points
>  My 3 melee dps do 100 DPS and generate 100 Tps
>  I generated 3000 threats, am I in Overthreat?
>
>  Total DPS (DPSt) = Sum(DPS)
>  Total DPS = 100 + 100 + 100 = 300
>
>  Total DPS threat generation = Enemy Life / **DPSt** * Highest Threat
>  Total dps threat generation = 6000 / **300** * 100 = 2000 threat
>
>  How many threats should I generate?
>  Tank Threat Generation = Enemy Life / **DPSt** * Highest Threat - Highest Threat / 1.1 (1.1 for melee, 1.3 for range)
>  Tank threat generation = 6000 / **300** * 100 - 100 / 1.1 = 1909 threat
>
>  I generated 3000 instead of 1909, I am in Overthreat
>  I generated 1091 Overthreat, this threat is a waste of mana if you used spells to generate it

> Example 2:
>  An enemy has 6000 life points
>  My 3 melee dps do 200 DPS and generate 200 Tps
>  I generated 3000 threats, am I in Overthreat?
>
>  Total DPS = 200 + 200 + 200 = 600
>
>  Total dps threat generation = 6000 / **600** * 200 = 2000 threat
>
>  How many threats should I generate?
>  Tank threat generation = 6000 / **600** * 200 - 200 / 1.1 = 1819 threat
>
>  I generated 3000 instead of 1819, I am in Overthreat
>  I generated 1181 Overthreat, this threat is a waste of mana if you used spells to generate it

Higher DPSt reduces the threat to generate
Well of course this is a textbook case, what happens when there are disparities between dps?
> Example 3:
>  An enemy has 6000 life points
>  My 3 melee dps do 400, 100, 100 DPS and generate 400, 100, 100 Tps
>  I generated 3000 threats, am I in Overthreat?
>
>  Total DPS = 400 + 100 + 100 = 600
>  Total dps threat generation = 6000 / **600** * 400 = 4000 threat
>
>  How many threats should I generate?
>  Tank threat generation = 6000 / **600** * 400 - 400 / 1.1 = 3637 threat
>
>  I generated 3000 instead of 3637, I need to generate more threat
>  I need to generate 637 additional threats

For the same total DPS, but with a greater disparity, we see that I have to generate a lot more threat
It is therefore important to standardize our DPS

> Example 4:
>  An enemy has 6000 life points
>  My 3 melee dps do 200, 50, 50 DPS and generate 200, 50, 50 Tps
>  I generated 3000 threats, am I in Overthreat?
>
>  Total DPS = 200 + 50 + 50 = 400
>  Total dps threat generation = 6000 / **400** * 200 = 3000 threat
>
>  How many threats should I generate?
>  Tank threat generation = 6000 / **400** * 200 - 200 / 1.1 = 2819 threat
>  I generated 3000 instead of 2819, I am in Overthreat
>  I generated 181 Overthreat, this threat is a waste of mana if you used spells to generate it

We see that the threat to be generated depends largely on our dps
We can say that Overthreat makes us lose mana unnecessarily (if you chain together mob packs you will regen often)
The performance of our dps plays a huge role in the threat generated and therefore indirectly on our mana management.
If this happens, don't hesitate, ask the weakest dps to make an effort, and ask your strongest dps to calm down.
---
Calculation of mana per sec (Mps):

Calculate Mps = Spell mana / **time between two uses**

_Spell
 - Lightning Strike = 182 / **9** = 20.22 Mps
 - StormStrike = 152 / **8** = 19 Mps
 - Earth Shock = 450 / **6** = 75 Mps
 - Flame Shock = 410 / **6** = 68.33 Mps
 - Frost Shock = 430 / **6** = 71.66 Mps
 - Lightning Bolt = 240 / **3** = 80 Mps
 - Molten Blast = 210 / **2** = 105 Mps
 - Lightning Shield = 370 / **18** = 20.56 Mps
 - Chain Lightning = 490 / **6** = 81.67 Mps
 - BloodLust = 395 / **300** = 1.32 Mps
 - Water Shield = returns 130 mana every 2 seconds (3 seconds with talent)
 - Earth Shield = 300 / **18** = 16.67 Mps

_Earth Totem
 - Stoneskin Totem = 210 / **120** = 1.75 Mps
 - Stoneclaw Totem = 140 / **30** = 4.67 Mps
 - Strength of Earth Totem = 224 / **120** = 1.87 Mps
 - Tremor Totem = 60 / **120** = 0.5 Mps
 - Earthbind Totem = 91 / **45** = 2.02 Mps

_Water Totem
 - Healing Stream Totem = 80 / **60** = 1.33 Mps
 - Mana Spring Totem = returns 10 mana every 2 seconds
 - Poison Cleansing Totem = 152 / **120** = 1.27 Mps
 - Disease Cleansing Totem = 152 / **120** = 1.27 Mps
 - Fire Resistance Totem = 180 / **120** = 1.5 Mps

_Air Totem
 - Grace of Air Totem = 310 / **120** = 2.58 Mps
 - Windfury Totem = 115 / **120** = 0.96 Mps
 - Grouding Totem = 91 / **1** = 6.06 Mps
 - WindWall Totem = 224 / **120** = 1.87 Mps
 - Nature Resistance Totem = 180 / **120** = 1.5 Mps

_Fire Totem
 - Searing Totem = 170 / **55** = 3.09 Mps
 - Fire Nova Totem = 520 / **15** = 34.66 Mps
 - Magma Totem = 650 / **20** = 32.5 Mps
 - Frost Resistance Totem = 180 / **120** = 1.5 Mps
---
_Calculates mana with a single target rotation, without talent
 - Lightning Shield = 20.56 Mps
 - StormStrike = 19 Mps
 - Earth Shock = 75 Mps
 - Lightning Strike = 20.22 Mps
 - Stoneskin Totem = 1.75 Mps
 - Healing Stream Totem = 1.33 Mps
 - Grace of Air Totem = 2.58 Mps
 - Searing Totem = 3.09 Mps
Total Mps = 143.53 Mps

Over a 120 sec fight, we will need 17224 mana points to rotate at 100%.
This is clearly not feasible as it stands.
---
Let's take a closer look at our mana regeneration talents:
_Elemental
 - Convection
 - Elemental Focus

_Amelioration

_Restoration
 - Tidal Focus

Calculates mana with a single target rotation, with 100% active talent
 - Lightning Shield = 20.56 Mps
 - StormStrike = 19 * 0.3 =  5.7 Mps
 - Earth Shock = 75 * 0.3 = 22.5 Mps
 - Lightning Strike = 20.22 * 0.3 =  6.07 Mps
 - Stoneskin Totem = 1.75 * 0.75 = 1.31 Mps
 - Healing Stream Totem = 1.33 * 0.75 = 1 Mps
 - Grace of Air Totem = 2.58 * 0.75 = 1.94 Mps
 - Searing Totem = 3.09 * 0.75 = 2.32 Mps
Total Mps = 61.4 Mps

In a 120 sec fight, we will need 7368 mana points to rotate at 100%.
This is still not possible as it stands.
---
Let's change the rotation
Calculates mana with the new single target rotation, with 100% active talent
 - Water Shield = 130 / 3 = -43.33 Mps
 - StormStrike = 5.7 Mps
 - Earth Shock = 22.5 Mps
Calculate the mana of Lightning Strike with water shield = (Spell mana - (130 + AP / 20)) / 9
 - Lightning Strike (Under Elemental Focus) = (182 * 0.3 - (130 + 653 / 18)) / 9 = -12.41 Mps
 - Stoneskin Totem = 1.31 Mps
 - Mana Spring Totem = 100 * 0.75 / 120 - 10 / 2 = -4.37 Mps
 - Grace of Air Totem = 1.94 Mps
 - Searing Totem = 2.32 Mps
Total MPs = -26.34 Mps
---
In a 120 sec fight, we will need 0 mana points to rotate at 100%.
With this rotation we see that we generate mana because the Mps is negative, this gives us the possibility of switching between a rotation which consumes and one which regenerates it allowing us to better adapt our threat (because a ration which consumes mana will create more threat than one which generates it)

We also see that by increasing AP, Lightning Strike will end up generating mana
How much AP does Lightning Strike generate mana from?
Calculates the AP needed for Lightning Strike with Water Shield so that Lightning Strike costs 0 mana
> > (182 - (130 + AP / 18)) / 9
>  > (182 - (130 + AP / 18)) / 9 = 0
>  > 182 / 9 - (130 + AP / 18) / 9 = 0
>  > 20.22 - (130 + AP / 18) / 9 = 0
>  > 20.22 - 130 / 9 - AP / 18 / 9 = 0
>  > 20.22 - 14.44 - AP / 18 / 9 = 0
>  > 5.78 - AP / 18 / 9 = 0
>  > 5.78 - AP / 162 = 0
>  > -AP / 162 = -5.78
>  > AP / 162 = 5.78
>  > AP = 5.78 * 162
>  > AP = 5.78 * 162 = 936

Any AP point above 936 will cause us to generate mana (1 AP = 0.0062 additional mana/sec)

That's all well and good, but not all of our fights last 120 seconds, so what's happening?

Mana regeneration will clearly be impacted if you continue on a full rotation, this is where we will enter into Threat/mana ratios
I won't give a demonstration, but the advice I can provide you is that in the case where the fights are very fast, you can lower your tankiness in order to increase your rage generation, because a short fight reduces the chance of taking big damage by limiting the number of events
> Example:
>  An enemy hits 100 at a rate of 1/sec and has a 5% critical chance
>
>  - In a 15 sec fight you will suffer at least 1500 damage and you will have 15 events with a 5% chance of suffering critical hits
>  - In a 30 sec fight you will suffer at least 3000 damage and you will have 30 events with a 5% chance of suffering critical hits
>  - In a 45 sec fight you will suffer at least 4500 damage and you will have 45 events with a 5% chance of suffering critical hits

We can then say that a short fight allows us to suffer less damage, it is therefore important to use the appropriate spells for this situation in order to save your resources as much as possible (this kind of thinking gave birth to the fury spec /prot which largely favors threat generation over tankiness and full damage raid compositions)

Another problem the shaman may encounter is mana regeneration with Water Shield
Indeed to benefit from regeneration, you have to suffer damage so when you partially block or take a direct hit no problem, on the other hand if you Miss, Dodge, Parry well you generate much less especially on a single target
> Example:
>  An enemy hits 100 at a rate of 3/sec
>  If we Miss, Dodge, Parry, we will lose a lot of mana regeneration

---
_Elemental Focus
Another statistic we might be interested in is the critical cost chance.
apart from the fact that it increases our threat, it allows us to proc our Elemental Focus talent which reduces the mana cost of our next shock by 60% (yes the other spells are not affected by this proc)
Our objective is that each Shock is under this proc, for this we will calculate the chances of physical criticism necessary to reach it all while taking into account the magic criticism obtained by other intermediaries (intel, buff)
For this calculation, I would use Flurry's availability formula based on the chances of reviews that I will arrange:
Formula Flurry = 1 – (1 – c)^**x**
where "c" represents the chance of criticism and **x** the number of attacks carried out in a furry cycle the result expresses a % of availability of the proc

Elemental Focus availability calculation based on critical chance:
Rotation: Stormstrike > Shock > Lightning Strike
Melee weapon speed 2.9, 2.8, 2.7 (I don't take haste bonuses into account)
Totem: Magma Totem or Searing totem, damage every 2 sec

At T = 0, 2 stack of Elemental Focus proc 1 stack is consumed every 6 seconds (5 with talents)
Let's take the most disadvantageous case or Elemental Focus proc at the start of the rotation on your first Auto attack
> - T = 0
>  > Auto attack
>  > 2 Elemental Focus
>  > Stormstrike
>  - T = 1.5
>  >Shock
>  > 1 Elemental Focus
>  - T = 2
>  > Totem Damage
>  - T = 2.7
>  > Auto attack
>  - T = 2.8
>  > Auto attack
>  - T = 2.9
>  > Auto attack
>  - T = 3
>  >Lightning Strike
>  - T = 4
>  > Totem Damage
>  - T = 5.4
>  > Auto attack
>  - T = 5.6
>  > Auto attack
>  - T = 5.8
>  > Auto attack
>  - T = 6
>  > Totem Damage
>  - T = 7.5
>  > Shock
>  > 0 Elemental Focus

Let's count the number of physical and magical attacks (Lightning Strike counts as 1 physical attack and 1 magical attack)
Physical attack (xPhy) = 4
Magic Attack (**xMag**) = 6

A problem that arises is the incompatibility of events, in fact we cannot have an attack that is both physical and magical, which means that two probability of occurrence of the event will have to be given, let's start with the fact that we have X% Phy crit chance (cPhy) and X% Mag crit chance (cMag)

Calculation of proc availability with crit phy = 1 - (1 - cPhy) ^ xPhy
Calculation of proc availability with crit mag = 1 - (1 - cMag) ^ **xMag**

Graphical representation of the Availability of Elemental focus according to Crit Phy or Mag :
![Image](https://i.postimg.cc/nh5FxmLW/graph1.png)
> Example with 38% Crit Phy and 15% Crit Mag :
>  Calculation of proc availability with crit phy =  1 - (1 - 0.38) ^ 4 = 0.8522 or 85.22% availability
>  Calculation of proc availability with crit mag = 1 - (1 - 0.15) ^ 6 = 0.6229 or 62.29% availability

We can say that it is simple to proc Elemental Focus

There are few alternatives, that's why increasing the AP, having a lot of buffs that generate mana are essential with high gear

I leave you a talent tree that reduces mana consumption:
![Image](https://i.postimg.cc/L5ST1wqg/Talent-Mana.png)
---
 *XI Rotation and Combo:*

In this part I will present different sequences of simple spells depending on the situation that we may encounter as a tank

_Multi target pull
Chain Lightning > Fire Nova Totem

_Single target pull
Lightning Bolt > Lightning Bolt > Earth Shock
Molten Blast > Molten Blast > Molten Blast > Flame Shock (use against enemies that resist the nature element)

_Boss pull
Before pull Lightning Shield > Mana Spring Totem > Grace of Air Totem > Stoneskin Totem > regenerate your mana
Pull > Searing Totem > BloodLust > Lightning Bolt > Chain Lightning > Stormstrike > Earth Shock > Lightning Strike > Water Shield

_Pull an additional pack while you already have quite a few enemies on you (Magma Totem is currently active)
Earth shock (pack sweater) > Recal Totemic > Fire Nova Totem > Magma Totem

_Fail pull pack 3 enemy without mana
Water Shield > Mana Spring Totem > Auto Attack > Switch > Lightning Strike > Switch > Auto Attack

_An ally has failed pulled a pack in your place and is heading towards you
Earthbind Totem > Nova Fire Totem > Chain Lightning

_An ally takes back your agro
Earthshaker Slam > EarthShaker

_Rotation on 3 targets
Auto Attack > Stormstrike > Switch > Earth Shock > Switch > Auto Attack > Lightning Strike

_Single target rotation
Stormstrike > Earth Shock > Lightning Strike

_Multi target rotation
Stoneclaw Totem > Fire Nova Totem > Magma Totem > Recal Totemic > Stoneskin Totem > Fire Nova Totem > Magma Totem

Other combos exist, of course, I have shown you the main ones
---

 *XII Gears:*

This part will evolve as new items are added. It is possible that you do not like these item choices, so I remain open to debate as long as it remains constructive and mathematically understandable.

Not all the items shown have been raid-tested yet, but after numerous trials, I can now present the section I use pre-raid for Lower Karazhan, Onixya, and Molten Core

To explain these choices, here are the objectives set when designing the build:
 - The items chosen must be exclusively from the Pre-raid
 - Enchantments are not to be taken into account
 - Def min = 20 (Not really a specific goal, given that it's difficult for us to achieve immunity to critical hits and critical hits aren't as devastating on Turtle WoW)
 - Hit min = 5% (Hit is an important and easy stat to obtain, plus it significantly increases agility, so we need to reach the cap as quickly as possible.)
 - **Sta**min = 160 (By extending tauren it allows me to have 4000 hp, if I add the buffs and enchantments, i reach 7500 HP, it should allow me to resist if I take a crit + crush + parry rush)
 - Agi min = 100 (in order to have 5% additional critical for more procs with Elemental Focus and increase my dodge by 5%)
 - Armor min = 6000 (we are aiming for a 55% reduction on boss lvl 63 in full buff and enchantment, i.e. 7050 armor)
 - Threat = equipment increasing threat generation
 - Avoidance = equipment increasing the ability to miss, dodge, parry, block, reduce crit
 - Mitigation = equipment increasing stamina
 - The rest as a bonus

_Head
 - (Threat) Timeloop Headguard = 317 armor, **20 sta**, 19 str, 12 int, 5 def, 11 spell damage, <https://database.turtlecraft.gg/?item=61053>
 - (Avoidance) Helm of the Great Chief = 362 armor, **26 sta**, 12 agi, 6 def, <https://database.turtlecraft.gg/?item=12636>
 - (Mitigation) Helm of Narv = 309 armor, **32 sta**, 13 agi, 18 spi, <https://database.turtlecraft.gg/?item=2245>

_Shoulder
 - (Threat) Towerforge Pauldrons = 317 armor, **20 sta**, 15 str, 1% hit, 1% crit <https://database.turtlecraft.gg/?item=60009>
 - (Threat) Shoulderguards of the Defiler = 290 armor, **12 sta**, 2% hit, 20 ap, <https://database.turtlecraft.gg/?item=61017>
 - (Avoidance) Pauldrons of Elusiveness = 286 armor, **20 sta**, 8 agi, 1% dodge, <https://database.turtlecraft.gg/?item=60792>

_Chest
 - (Threat) Towerforge Breastplate = 422 armor, **28 sta**, 23 str, 1% crit, 1% haste, <https://database.turtlecraft.gg/?item=60008>
 - (Avoidance) Invulnerable Mail = 504 armor, **10 sta**, 13 def, <https://database.turtlecraft.gg/?item=12641>
 - (Avoidance) Footman's Breastplate = 381 armor, **12 sta**, 13 str, 4 def, <https://database.turtlecraft.gg/?item=83260>
 - (Avoidance) Cadaverlink Vest = 376 armor, 29 agi, 13 int, 9spi, 2% haste, <https://database.turtlecraft.gg/?item=83462>
 - (Avoidance) Bloodmail Hauberk = 360 armor, **15 sta**, 10 agi, 15 int, 10 str, 1% dodge, <https://database.turtlecraft.gg/?item=14611>
 - (Mitigation) Royal Decorated Armor = 344 armor, **26 sta**, 12 agi, 8 str, <https://database.turtlecraft.gg/?item=11820>

_Wrist
 - (Threat) = Aurastone Bracers = 167 armor, **5 sta**, 5 agi, 5 str, 5 int, 5 spi, 18 sp <https://database.turtlecraft.gg/?item=84604>
 - (Threat) Slashclaw Bracers = 155 armor, **7 sta**, 7 agi, 6 spi, 1% hit, <https://database.turtlecraft.gg/?item=13211>
 - (Avoidance) Beaststalker's Bindings = 148 armor, **7 sta**, 15 agi, <https://database.turtlecraft.gg/?item=16681>
 - (Mitigation) Demon Howl Wristguards = 160 armor, **17 sta**, 14 ap, <https://database.turtlecraft.gg/?item=18394>

_Hands
 - (Threat) Gauntlets of Temporal Guidance = 249 armor, **12 sta**, 18 agi, 8 int, 1% hit, <https://database.turtlecraft.gg/?item=61013>
 - (Threat) Bloodmail Gauntlets = 225 armor, **10 sta**, 9 str, 10 int, 1% Crit, <https://database.turtlecraft.gg/?item=14615>
 - (Threat) Savage Gladiator Grips = 211 armor, **14 sta**, 9 agi, 5 str, 12 int, <https://database.turtlecraft.gg/?item=11730>
 - (Threat) Voone's Vice Grips = 221 armor, **6 sta**, 9 agi, 2% hit, <https://database.turtlecraft.gg/?item=13963>
 - (Avoidance) Gauntlets of Deftness = 311 armor, **10 sta**, 23 agi, <https://database.turtlecraft.gg/?item=22410>
 - (Mitigation) Bloodsoul Gauntlets = 238 armor, **17 sta**, 10 agi, 1% crit, <https://database.turtlecraft.gg/?item=19692>

_Waist
 - (Threat) Imbued Planar Belt = 218 armor, **15 sta**, 15 agi, 9 int, 11 spell damage, <https://database.turtlecraft.gg/?item=61041>
 - (Threat) Bloodmail Belt = 202 armor, **11 sta**, 12 agi, 12 str, 9 int, <https://database.turtlecraft.gg/?item=14614>
 - (Avoidance) Stoneforge Girdle = 208 armor, **18 sta**, -6 agi, 6 def, <https://database.turtlecraft.gg/?item=60615>
 - (Mitigation) Heavy Timbermaw Belt = 253 armor, **18 sta**, 1% dodge, <https://database.turtlecraft.gg/?item=19043>

_Legs
 - (Threat) Azurite Legguards = 339 armor, **14 sta**, 14 agi, 14 str, 11 int, 7 spi, 8 Hp5, 6 Mp5, <https://database.turtlecraft.gg/?item=61054>
 - (Threat) Bloodmail Legguards = 315 armor, **16 sta**, 12 agi, 15 str, 15 int, <https://database.turtlecraft.gg/?item=14612>
 - (Avoidance) Leggings of Alacrity = 334 armor, **16 sta**, 26 agi, 1% dodge, <https://database.turtlecraft.gg/?item=60503>
 - (Mitigation) Leggings of Destruction = 324 armor, **20 sta**, 14 agi, 13 int, 1% crit, <https://database.turtlecraft.gg/?item=18524>
 - (Mitigation) Savage Gladiator Leggings = 296 armor, **19 sta**, 18 agi, 12 str, <https://database.turtlecraft.gg/?item=11728>

_Feet
 - (Threat) Bloodmail Boots = 247 armor, **10 sta**, 9 agi, 9 str, 10 int, 1% hit, <https://database.turtlecraft.gg/?item=14616>
 - (Threat) Savage Gladiator Greaves = 233 armor, **13 sta**, 15 agi, 10 str, <https://database.turtlecraft.gg/?item=11731>
 - (Avoidance) Greaves of the Elusive = 289 armor, **18 sta**, 8 agi, 1% dodge, 1% hit, <https://database.turtlecraft.gg/?item=61024>
 - (Mitigation) Heavy Timbermaw Boots = 318 armor, **21 sta**, 1% dodge, <https://database.turtlecraft.gg/?item=19048>

_Neck
 - (Threat) Shard of Eternity = 30 armor, **8 sta**, 8 agi, 8 str, 8 int, 8 spi, 5 def, 8 spell damage, 11 Healing, <https://database.turtlecraft.gg/?item=61012>
 - (Avoidance) Amulet of Warding = 50 armor, **13 sta**, 2 spi, 1% dodge <https://database.turtlecraft.gg/?item=60420>
 - (Avoidance) Evil Eye Pendant = 15 agi, 7 def, <https://database.turtlecraft.gg/?item=18381>
 - (Avoidance) Medallion of Grand Marshal Morris = **7 sta**, 10 def, <https://database.turtlecraft.gg/?item=13091>
 - (Mitigation) Wormheart = 50 armor, **25 sta**, -20 str, 7 hp5, <https://database.turtlecraft.gg/?item=83458>

_Back
 - (Threat) Cloak of Revanchion = 45 armor, **11 sta**, 10 agi, 10 str, <https://database.turtlecraft.gg/?item=23127>
 - (Threat) Shadow Silk Cloak = 45 armor, 6 def, 15 spell damage, 8 RS, <https://database.turtlecraft.gg/?item=61593>
 - (Avoidance) Shade of Reminisce = 10 agi, 1% dodge, 10 RS, <https://database.turtlecraft.gg/?item=60804>
 - (Mitigation) Redoubt Cloak = 45 armor, **15 sta**, 7 def, <https://database.turtlecraft.gg/?item=18495>
 - (Mitigation) Cloak of the Protector = 114 armor, **10 sta**, 5 def, <https://database.turtlecraft.gg/?item=80759>
 - (Mitigation) Cloak of Warding = 214 armor, 5 def, <https://database.turtlecraft.gg/?item=18413>

_Ring
 - (Threat) Band of the Ogre King = **13 sta**, 14 str, <https://database.turtlecraft.gg/?item=18522>
 - (Threat) Myrmidon's Signet = **17 sta**, 7 agi, 10 str, <https://database.turtlecraft.gg/?item=2246>
 - (Threat) Hardened Stone Band = **8 sta**, 8 str, 3 def, <https://database.turtlecraft.gg/?item=18674>
 - (Avoidance) Band of the Steadfast Hero = **12 sta**, 7 str, 7 def, <https://database.turtlecraft.gg/?item=22331>
 - (Avoidance) Naglering = 50 armor, **10 sta**, 5 def, <https://database.turtlecraft.gg/?item=11669>
 - (Avoidance) Ring of Authority = 100 armor, **8 sta**, 3 agi, 3 spi, 1% dodge, 1% block, <https://database.turtlecraft.gg/?item=50189>
 - (Avoidance) Sapphire Luminescence = 13 agi, 8 str, 5 def, <https://database.turtlecraft.gg/?item=55259>
 - (Mitigation) Band of Resolution = **18 sta**, 5 def, <https://database.turtlecraft.gg/?item=22680>
 - (Mitigation) Ring of Sacrifice = 25 armor, **24 sta**, -10 str, -20 spi, <https://database.turtlecraft.gg/?item=83264>
 - (All) Drakeclaw Band = random bonuses, 4 def, <https://database.turtlecraft.gg/?item=10795>

_Trinket
 - (Threat) Counterattack Lodestone = 34 ap, 1% parry, <https://database.turtlecraft.gg/?item=18537>
 - (Threat) Hand of Justice = 20 ap, <https://database.turtlecraft.gg/?item=11815>
 - (Threat) Corrosive Core = 1% hit, 40 armor ignore, 10 RN, <https://database.turtlecraft.gg/?item=80674>
 - (Avoidance) Force of Will = 7 def, <https://database.turtlecraft.gg/?item=11810>
 - (Avoidance) Scale of the Makrura = 140 armor, 5 def, <https://database.turtlecraft.gg/?item=61511>
 - (Avoidance) Vigilance Charm = 2% dodge, <https://database.turtlecraft.gg/?item=18370>
 - (Avoidance) Mark of Tyranny = 180 armor, 10 RA, 1% dodge, <https://database.turtlecraft.gg/?item=13966>
 - (Mitigation) Hatereaver Cog = 120 armor, **12 sta**, 1% haste, 5 RF, <https://database.turtlecraft.gg/?item=60559>
 - (Mitigation) Mossheart's Heart = 145 armor, 8Hp5, <https://database.turtlecraft.gg/?item=61059>
 - (Other) Enamored Water Spirit = <https://database.turtlecraft.gg/?item=20503>

_Shield
 - (Threat) Force Reactive Disk = 2548 armor, **11 sta**, <https://database.turtlecraft.gg/?item=18168>
 - (Threat) Skullflame Shield = 2256 armor, 10 RF, 10 RS, <https://database.turtlecraft.gg/?item=1168>
 - (Avoidance) Vault's Defender = 2217 armor, **10 sta**, 6 agi, 1% dodge, 1% block, <https://database.turtlecraft.gg/?item=40003>
 - (Avoidance) Draconian Deflector = 2153 armor, **7 sta**, 10 def, 10 RF, <https://database.turtlecraft.gg/?item=12602>
 - (Mitigation) Bonewall = 2206 armor, **14 sta**, 5 str, 5 RS, 7 def, <https://database.turtlecraft.gg/?item=83444>
 - (Mitigation) Time-Shifting Wheel = 2468 armor, **10 sta**, 10 int, 3% reduce crit, 33 heal, <https://database.turtlecraft.gg/?item=61009>

_Weapon
 - (Threat) Blackthorn's Blackjack = 92 - 171 damage, 2.80 speed, 12 str, 1% hit, <https://database.turtlecraft.gg/?item=84600>
 - (Threat) Persuader = 86 - 161, 2.70, 1% hit, 1% crit, <https://database.turtlecraft.gg/?item=22384>
 - (Threat) Axe of the Deep Woods = 78 - 146 damage, 2.70 speed, <https://database.turtlecraft.gg/?item=811>
 - (Avoidance) Revantusk Defender's Deflector = 61 - 110 damage, 2.00 speed, **12 sta**, 4 def, <https://database.turtlecraft.gg/?item=80635>
 - (Mitigation) Mass of McGowan = 80 - 141 damage, 2.80 speed, **10 sta**, 10 str, <https://database.turtlecraft.gg/?item=13006>
 - (Mitigation) Hurley's Tankard = 71 - 132 damage, 2.70 speed, **12 sta**, 7 agi, <https://database.turtlecraft.gg/?item=18044>

_Totem
 - Totem of the Calming River = <https://database.turtlecraft.gg/?item=61698>
 - (Threat) Totem of Rage = <https://database.turtlecraft.gg/?item=22395>
 - (Threat) Totem of Tides = <https://database.turtlecraft.gg/?item=58146>
---

Pre Raid :
> Head
>  - Timeloop Headguard = 317 armor, **20 sta**, 19 str, 12 int, 5 def, 11 spell damage, <https://database.turtlecraft.gg/?item=61053>
>
>  Shoulder
>  - Pauldrons of Elusiveness = 286 armor, **20 sta**, 8 agi, 1% dodge, <https://database.turtlecraft.gg/?item=60792>
>
>  Chest
>  - Royal Decorated Armor = 344 armor, **26 sta**, 12 agi, 8 str, <https://database.turtlecraft.gg/?item=11820>
>
>  Wrist
>  - Slashclaw Bracers = 155 armor, **7 sta**, 7 agi, 6 spi, 1% hit, <https://database.turtlecraft.gg/?item=13211>
>
>  Hands
>  - Voone's Vice Grips = 221 armor, **6 sta**, 9 agi, 2% hit, <https://database.turtlecraft.gg/?item=13963>
>
>  Waist
>  - Imbued Planar Belt = 218 armor, **15 sta**, 15 agi, 9 int, 11 spell damage, <https://database.turtlecraft.gg/?item=61041>
>
>  Legs
>  - Leggings of Alacrity = 334 armor, **16 sta**, 26 agi, 1% dodge, <https://database.turtlecraft.gg/?item=60503>
>
>  Feet
>  - Greaves of the Elusive = 289 armor, **18 sta**, 8 agi, 1% dodge, 1% hit, <https://database.turtlecraft.gg/?item=61024>
>
>  Neck
>  - Shard of Eternity = 30 armor, **8 sta**, 8 agi, 8 str, 8 int, 8 spi, 5 def, 8 spell damage, 11 Healing, <https://database.turtlecraft.gg/?item=61012>
>
>  Back
>  - Redoubt Cloak = 45 armor, **15 sta**, 7 def, <https://database.turtlecraft.gg/?item=18495>
>
>  Ring
>  - Naglering = 50 armor, **10 sta**, 5 def, <https://database.turtlecraft.gg/?item=11669>
>  - Ring of Authority = 100 armor, **8 sta**, 3 agi, 3 spi, 1% dodge, 1% block, <https://database.turtlecraft.gg/?item=50189>
>
>  Trinket
>  - Hatereaver Cog = 120 armor, **12 sta**, 1% haste, 5 RF, <https://database.turtlecraft.gg/?item=60559>
>  - Counterattack Lodestone = 34 ap, 1% parry, <https://database.turtlecraft.gg/?item=18537>
>
>  Shield
>  - Vault's Defender = 2217 armor, **10 sta**, 6 agi, 1% dodge, 1% block, <https://database.turtlecraft.gg/?item=40003>
>
>  Weapon
>  - Blackthorn's Blackjack = 92 - 171 damage, 2.80 speed, 12 str, 1% hit, <https://database.turtlecraft.gg/?item=84600>
>
>  Totem
>  - Totem of the Calming River = <https://database.turtlecraft.gg/?item=61698>
>  - Totem of Rage = <https://database.turtlecraft.gg/?item=22395>
>  - Totem of Tides = <https://database.turtlecraft.gg/?item=58146>

---
T1 Bis :
> Head
>  - Blackstone Crown = 473 armor, **34 sta**, 15 agi, 10 str, 1% dodge, <https://database.turtlecraft.gg/?item=83565>
>
>  Shoulder
>  - Shoulderpads of True Flight = 413 armor, **18 sta**, 18 agi 9 int, 1% hit, <https://database.turtlecraft.gg/?item=81264>
>  - Earthfury Pauldrons = 317 armor, **15 sta**, 15 agi, 8 str, 9 int, 5 RS, 1% hit, <https://database.turtlecraft.gg/?item=47121>
>
>  Chest
>  - Cryptbone Hauberk = 592 armor, **22 sta**, 10 agi, 16 str, 1% hit, 10 def <https://database.turtlecraft.gg/?item=51786>
>  - Earthfury Breastplate = 422 armor, **20 sta**, 22 agi, 14 str, 12 int, 10 RF, 1% crit, <https://database.turtlecraft.gg/?item=47122>
>  - Breastplate of the Chromatic Flight = 418 armor, **30 sta**, 20 agi, 15 int, 15 RF, <https://database.turtlecraft.gg/?item=83416>
>
>  Wrist
>  - Wristguards of True Flight = 198 armor, **11 sta**, 19 agi, 6 int, 1% hit, <https://database.turtlecraft.gg/?item=18812>
>  - Earthfury Bracelets = 185 armor, **12 sta**, 12 agi, 11 str, 8 int, <https://database.turtlecraft.gg/?item=47123>
>
>  Hands
>  - Rune Infused Gauntlets = 264 armor, **21 sta**, 17 agi, 1% haste, 1% dodge, <https://database.turtlecraft.gg/?item=61266>
>
>  Waist
>  - Stoneslate Belt = 340 armor, **22 sta**, 14 agi, 10 int, 1% dodge, <https://database.turtlecraft.gg/?item=51785>
>  - Earthfury Girdle = 237 armor, **15 sta**, 16 agi, 12 str, 9 int, 7 RF,  <https://database.turtlecraft.gg/?item=47125>
>
>  Legs
>  - Outrider's Chain Leggings = 396 armor, **23 sta**, 35 agi, 1% crit, 1% hit, <https://database.turtlecraft.gg/?item=22673>
>
>  Feet
>  - Sabatons of the Flamewalker = 298 armor, **21 sta**, 10 agi, 11 int, 20 ap, 5 def, <https://database.turtlecraft.gg/?item=19144>
>  - Greaves of the Elusive = 289 armor, **18 sta**, 8 agi, 1% dodge, 1% hit, <https://database.turtlecraft.gg/?item=61024>
>
>  Neck
>  - Shard of Eternity = 30 armor, **8 sta**, 8 agi, 8 str, 8 int, 8 spi, 5 def, 8 spell damage, 11 Healing, <https://database.turtlecraft.gg/?item=61012>
>
>  Back
>  - Dragon's Blood Cape = 106 armor, **22 sta**, 9 str, 10 RF, 5RS, 5 RA 5 def, <https://database.turtlecraft.gg/?item=17107>
>
>  Ring
>  - Ring of Binding = 100 armor, **16 sta**, 5 all res, 6 def, <https://database.turtlecraft.gg/?item=18813>
>  - Heavy Dark Iron Ring = 110 armor, **20 sta**, 5 def, <https://database.turtlecraft.gg/?item=18879>
>  - Ring of Authority = 100 armor, **8 sta**, 3 agi, 3 spi, 1% dodge, 1% block, <https://database.turtlecraft.gg/?item=50189>
>
>  Trinket
>  - Onyxia Blood Talisman = 7 hp5, 15 RF, 2% parry, 7 def, <https://database.turtlecraft.gg/?item=18406>
>  - Araxxna's Husk = 140 armor, **15 sta**, 1% dodge, <https://database.turtlecraft.gg/?item=61816>
>  - Shawl of the Castellan = 2% haste, 1% dodge, <https://database.turtlecraft.gg/?item=61299>
>
>  Shield
>  - Earthen Guard = 2575 armor, **19 sta**, 1% block, 14 block value, 7 def, <https://database.turtlecraft.gg/?item=20688>
>
>  Weapon
>  - Deathbringer = 114 - 213 damage, 2.90 speed, <https://database.turtlecraft.gg/?item=17068>
>
>  Totem
>  - Totem of the Calming River = <https://database.turtlecraft.gg/?item=61698>
>  - Totem of Rage = <https://database.turtlecraft.gg/?item=22395>
>  - Totem of Tides = <https://database.turtlecraft.gg/?item=58146>

---

 *XIII Debuff, Buff, Enchantment, Consumable:*

Here is the list of debuffs, buffs, enchantments and consumables that can be used for our shaman tank

Debuff :
> Offensive
>  - Warrior = Sunder Armor
>  - Paladin = Judgement of Crusader
>  - Hunter = Hunter's Mark
>  - Rogue = Hemorrhage, Expose Armor, Exploit Vulnerability
>  - Mage = Scorch
>  - Warlock = Curse of Recklessness, Curse of the Elements
>  - Druid = Faerie Fire
>
>  Défensive
>  - Warrior = Thunder Clap, Demoralizing Shout, Disarm
>  - Paladin = Judgement of Light, Vindication
>  - Hunter = Screech
>  - Priest = Hex of Weakness
>  - Shaman = Totemic Slam
>  - Warlock = Curse of Tongues
>  - Druid = Demoralizing Roar, Insect Swarm

---
Buff :
> Offensive
>  - Warrior = Battle Shout
>  - Paladin = Blessing of kings, Blessing of Might, Retribution Aura
>  - Hunter = Furious Howl, Trueshot Aura
>  - Priest = Enlighten
>  - Shaman = Strength of Earth Totem, Grace of Air Totem,
>  - Mage = Arcane Intellect
>  - Druid = Mark of the Wild
>
>  Défensive
>  - Warrior = Thunder Clap, Demoralizing Shout, Disarm
>  - Paladin = Blessing of Light, Blessing of Sacrifice, Blessing of Sanctuary, Devotion Aura, Shadow Resistance Aura, Frost Resistance Aura, Fire Resistance Aura
>  - Priest = Power word : Fortitude, Proclaim Champion, Shadow Protection
>  - Shaman = Strength Totem, Grace of Air Totem, Stoneskin Totem, Windwall Totem, Fire resistance Totem, Frost resistance Totem, Nature resistance Totem, Healing Stream Totem
>  - Warlock = Blood Pact
>  - Druid = Mark of the Wild

---

Enchantment :
> Head
>  - Lesser Arcanum of Constitution = 100 hp, <https://database.turtlecraft.gg/?item=11642>
>  - Invocation of Greater Protection = 2% dodge, <https://database.turtlecraft.gg/?item=92006>
>  - Arcanum of Protection = 1% dodge, <https://database.turtlecraft.gg/?item=18331>
>
>  Shoulder
>  - Fortitude of the Scourge = 100 armor, 16 sta, <https://database.turtlecraft.gg/?item=23549>
>  - Zandalar Signet of Tenacity = 14 sta, <https://database.turtlecraft.gg/?item=65033>
>
>  Chest
>  - Core Armor Kit = 5def, <https://database.turtlecraft.gg/?item=18251> (Letther working)
>  - Rugged Armor Kit = 40 armor, 5 sta, <https://database.turtlecraft.gg/?item=15564> (Letther working)
>  - Enchant Chest - Greater Stats = 4 stats, <https://database.turtlecraft.gg/?item=16253>
>  - Enchant Chest - Major Health = 100 hp, <https://database.turtlecraft.gg/?item=16221>
>
>  Wrist
>  - Enchant Bracer - Greater Deflection = 5 def, <https://database.turtlecraft.gg/?item=61221>
>  - Enchant Bracer - Superior Stamina = 9 sta, <https://database.turtlecraft.gg/?item=16251>
>  - Enchant Bracer - Greater Agility = 7 agi, <https://database.turtlecraft.gg/?item=60969>
>
>  Hands
>  - Core Armor Kit = 5 def, <https://database.turtlecraft.gg/?item=18251> (Letther working)
>  - Rugged Armor Kit = 40 armor, 5 sta, <https://database.turtlecraft.gg/?item=15564> (Letther working)
>  - Enchant Gloves - Superior Agility = 15 agi, <https://database.turtlecraft.gg/?item=20731>
>  - Enchant Gloves - Threat = 2% Threat, <https://database.turtlecraft.gg/?item=20726>
>
>  Waist
>  - Bloody Belt Buckle = 1% reduce crit, <https://database.turtlecraft.gg/?item=61810> (Blackmithing)
>  - Arcanite Belt Buckle = 5 def, <https://database.turtlecraft.gg/?item=61784> (Blackmithing)
>  - Mithril Belt Buckle = 6 agi, <https://database.turtlecraft.gg/?item=61782> (Blackmithing)
>
>  Legs
>  - Core Armor Kit = 5def, <https://database.turtlecraft.gg/?item=18251> (Letther working)
>  - Invocation of Greater Protection = 2% dodge, <https://database.turtlecraft.gg/?item=92006>
>  - Rugged Armor Kit = 40 armor, 5 sta, <https://database.turtlecraft.gg/?item=15564> (Letther working)
>  - Arcanum of Protection = 1% dodge, <https://database.turtlecraft.gg/?item=18331>
>
>  Feet
>  - Core Armor Kit = 5def, <https://database.turtlecraft.gg/?item=18251> (Letther working)
>  - Rugged Armor Kit = 40 armor, 5 sta, <https://database.turtlecraft.gg/?item=15564> (Letther working)
>  - Enchant Boots - Superior Stamina = 15 sta, <https://database.turtlecraft.gg/?item=61219>
>  - Enchant Boots - Greater Agility = 7 agi, <https://database.turtlecraft.gg/?item=16245>
>
>  Back
>  - Enchant Cloak - Dodge = 1% dodge, <https://database.turtlecraft.gg/?item=20736>
>  - Enchant Cloak - Lesser Agility = 3 agi, <https://database.turtlecraft.gg/?item=11206>
>  - Enchant Cloak - Superior Defense = 70 armor, <https://database.turtlecraft.gg/?item=16224>
>
>  Ring
>  - Gorgeous Moutain Gemstone = 1% block chance, (Jewel Crafting)
>  - Stunning Imperial Gemstone = 3 stats, (Jewel Crafting)
>  - Tempered Azerothian Gemstone = 6 sta, (Jewel Crafting)
>
>  Shield
>  - Enchant Shield - Lesser Block = 2% block chance, <https://database.turtlecraft.gg/?item=11168>
>  - Enchant Shield - Greater Stamina = 7 sta, <https://database.turtlecraft.gg/?item=16217>
>
>  Weapon
>  - Enchant Weapon - Unholy weapon = <https://database.turtlecraft.gg/?spell=20033>
>  - Enchant Weapon - Icy Chill = <https://database.turtlecraft.gg/?item=16223>
>  - Enchant Weapon - Crusader = <https://database.turtlecraft.gg/?item=16252>
>  - Enchant Weapon - Spell Power = <https://database.turtlecraft.gg/?item=18259>

---

Consumable :

> Potion (only one) :
>  - Major Rejuvenation Potion > 1440 à 1761 Mana rendu CD 2 min : <https://database.turtlecraft.gg/?item=18253>
>  - Major Healing Potion > 1050 à 1751 Health rendu CD 2 min : <https://database.turtlecraft.gg/?item=13446>
>
>  Flask (only one) :
>  - Flask of Supreme Power > 150 Spell Power 120 min : <https://database.turtlecraft.gg/?item=13512>
>  - Flask of the Titans > 1200 Health 120 min : <https://database.turtlecraft.gg/?item=13510>
>  - Flask of Chromatic Resistance > 50 Resi all 120 min : <https://database.turtlecraft.gg/?item=13513>
>
>  Elixir (cumulative) :
>  - Elixir of Greater Nature Power > 55 Spell Power nature 60 min : <https://database.turtlecraft.gg/?item=50237>
>  - Elixir of Greater Firepower > 40 Spell Power fire 60 min : <https://database.turtlecraft.gg/?item=21546>
>  - Elixir of Brute Force > 18 Strength et Stamina 60 min : <https://database.turtlecraft.gg/?item=13453>
>  - Concoction of the Arcane Giant > 35 Spell Power et 25 Strength 60 min : <https://database.turtlecraft.gg/?item=47412>
>  - Concoction of the Dreamwater > 35 Spell Power et 35 Power Attack 60 min : <https://database.turtlecraft.gg/?item=47414>
>  - Concoction of the Emerald Mongoose > 15 Spell Power, 15 Agility et 2 % Critical : <https://database.turtlecraft.gg/?item=47410>
>  - Elixir of Greater Intellect > 25 Intelligence 60 min : <https://database.turtlecraft.gg/?item=9179>
>  - Elixir of Sage > 18 Intelligence et Spirit 60 min : <https://database.turtlecraft.gg/?item=13447>
>  - Gift of Arthas > 8 damage taken for mob : <https://database.turtlecraft.gg/?item=9088>
>
>  Food (only one) :
>  - Hardened Mushroom > 25 Stamina 15 min : <https://database.turtlecraft.gg/?item=51717>
>  - Power Mushroom > 20 Strength 15 min : <https://database.turtlecraft.gg/?item=51720>
>
>  Zul'Gurub (only one) :
>  - Spirit of Zanza > 50 Stamina et Spirit 120 minutes : <https://database.turtlecraft.gg/?item=20079>
>
>  Blasted land (only one) :
>  - R.O.I.D.S. > 25 Strength 60 min : <https://database.turtlecraft.gg/?item=8410>
>  - Lung Juice Cocktail > 25 Stamina 60 min : <https://database.turtlecraft.gg/?item=8411>
>
>  WinterSpring (cumulative) :
>  - Juju Ember > 15 Resi fire 10min : <https://database.turtlecraft.gg/?item=12455>
>  - Juju Escape > 5% Dodge 10 sec : <https://database.turtlecraft.gg/?item=12459>
>
>  Alcool (only one) :
>  - Rumsey Rum Black Label > 15 Stamina 15 min : <https://database.turtlecraft.gg/?item=21151>
>  - Medivh's Merlot > 25 Stamina 15 min : <https://database.turtlecraft.gg/?item=61174>
>
>  Other :
>  - Whipper Root Tuber > 700 à 901 CD 10 sec : <https://database.turtlecraft.gg/?item=11951>

---

XIV Leveling (simple):

Yes, I know, I said I wouldn't talk about this part but since I'm often asked about it I chose to give in.

In this part we will discuss one of the ways to build your shaman tank, there are undoubtedly others (like that of Akos = [viewtopic.php?t=16489](https://forum.turtlecraft.gg/viewtopic.php?t=16489))
but since it is with this one that I built my shaman tank, I at least know that it works

Mentality to have when leveling:

The first thing to know is the speed at which you want to progress:

 - Hard try = quest optimization, boost, optimal equipment already prepared, you can skip this part, no need to read further
 - Normal try = we set objectives in increments of 10 levels, which we divide into small objectives to be completed on a daily basis, this guide is made for you
 - Chill try = we explore the game, we don't set an objective, we read the quests to immerse ourselves in the story, we will learn our mechanics on the job, this part may interest you

Let's start at the beginning, I created my shaman (regardless of his race), I raised him to level 10, I have my talent tree, what do I do now?

 - We make sure we have our Earth Totem and our Fire Totem
 - We will choose a profession (even if I recommend doing it before level 10),
I recommend Lether Working and Skinning, even if they are less interesting at high level it will allow you to have suitable equipment (obligatory as a tank) and to make you a little gold (useful for buying spells),
another profession will be Blackmithing and Minning, all your craft will have to be sold, up to lvl 40 where certain equipment can be equipped, it is interesting at high level because it will allow you to create pre-raid equipment and make a little money gold too
 - We set a leveling goal of lvl 20
---

_Leveling 10 - 20
I assume that you have chosen Lether Working (LW)

This is the most delicate phase of leveling because as a tank we must prepare Wailing Caverns (WC),
if we don't have enough gear we risk having some problem,
especially if you find yourself in groups of players lacking kindness (guys, no toxicity at this level, we encourage and explain)

Don't panic, we have our Lether Working lvl 65, we craft some item and we go to Ragefeu (lvl 15).

Your talent tree looks like this:
![Image](https://i.postimg.cc/RC1GBS8h/Talent-Lvl-15.png)

Before leaving for the dungeon went to do the quest <https://database.turtlecraft.gg/?quest=40390> and took the shield, that will be enough in addition to the few items you will have with LW to do this dungeon

We will look for the following list of items:
![Image](https://i.postimg.cc/j5PJYrB8/Wish-List1.png)

These items are a good base (if you better forget these items)

During the dungeon our spells and skills to use will be:
 - Rockbiter
 - Auto attack
 - Earth shock
 - Lightning Shield
 - Searing Totem
 - Stoneclaw Totem
 - Stoneskin Totem
 - Totemic Recall
 - Earthshaker Slam

(Remember to take water)

The goal is to reach lvl 17 with 900 armor mini, 600 Health mini
The Cobalt Buckler shield = <https://database.turtlecraft.gg/?item=5302> will come in handy

Your talent tree looks like this:
![Image](https://i.postimg.cc/028n2gRh/Talent-Lvl-17.png)

Once this objective is achieved, we leave for WC

We will look for the following list of items:
![Image](https://i.postimg.cc/L57dtr8p/Wish-List2.png)

The following quests are mandatory to complete:
 - Deviate Eradication = <https://database.turtlecraft.gg/?quest=1487> for Patern: Deviate Scale Belt
 - Deviate Hides = <https://database.turtlecraft.gg/?quest=1486> for Deviate Hide Pack

Your LW is 15 mini

Once Lvl 20 your talent tree looks like this:
![Image](https://i.postimg.cc/G2CY7YbV/Talent-Lvl-20.png)

Don't hesitate to farm the dungeon several times, excluding items it will give you XP and game knowledge
---
_Leveling 20 - 30

Go get your Water Totem

Continued to level up by farming or doing quests until Lvl 23

Once Lvl 23 your talent tree looks like this:
![Image](https://i.postimg.cc/KzDTdzzy/Talent-Lvl-23.png)

Then went to Shadowfang Keep (SFK)

We will look for the following list of items:
![Image](https://i.postimg.cc/hPfQKTFz/Wish-List3.png)

The following quests are mandatory to complete:
 - Arugal Must Die = <https://database.turtlecraft.gg/?quest=1014> for Seal of Sylvanas

During the dungeon our spells and skills to use will be:
 - Rockbiter
 - Auto attack
 - Earth shock
 - Lightning Shield
 - Searing Totem
 - Fire Nova Totem
 - Stoneclaw Totem
 - Stoneskin Totem
 - Healing Stream Totem
 - Totemic Recall
 - Earthshaker Slam

Don't hesitate to farm the dungeon several times, excluding items it will give you XP and game knowledge

Continued to level up by farming or doing quests until Lvl 26

Once Lvl 26 your talent tree looks like this:
![Image](https://i.postimg.cc/J07XmLDD/Talent-Lvl-26.png)

Went to Blackfathom Deeps (BFD)

The dungeon just aims to give you XP,
there are not many interesting items,
but it is good to do it until lvl 30

List of quests Blackfathom Deeps:
 - Allegiance to the Old Gods = <https://database.turtlecraft.gg/?quest=6564>
 - Amongst the Ruins = <https://database.turtlecraft.gg/?quest=6921>
 - The Essence of Aku'Mai = <https://database.turtlecraft.gg/?quest=6563>
 - Baron Aquanis = <https://database.turtlecraft.gg/?quest=909>
 - Blackfathom Villainy = <https://database.turtlecraft.gg/?quest=6561>

During the dungeon our spells and skills to use will be:
 - Rockbiter
 - Auto attack
 - Earth shock
 - Water Shield
 - Searing Totem
 - Fire Nova Totem
 - Magma Totem
 - Stoneclaw Totem
 - Stoneskin Totem
 - Mana Spring Totem
 - Totemic Recall
 - Earthshaker Slam

Once Lvl 30 your talent tree looks like this:
![Image](https://i.postimg.cc/L5y18bj6/Talent-Lvl-30.png)
---

_Leveling 30 - 40

Get your Air Totem

Go do the Chief Engineer Scooty quest sequence = <https://database.turtlecraft.gg/?quest=2842>

You will have 2 dungeons to do Gnomeregan and Razorfen Kraul

Gnomeragan (Gnome)

The following quest is mandatory to complete:
 - Rig Wars = <https://database.turtlecraft.gg/?quest=2841> for Triprunner Dungarees

Razorfen Kraul (RFK)

The following quests are mandatory to complete:
 - A Vengeful Fate = <https://database.turtlecraft.gg/?quest=1102> for Marbled Buckler
 - Willix the Importer = <https://database.turtlecraft.gg/?quest=1144> for Monkey Ring

We will look for the following list of items for the 2 dungeons:
![Image](https://i.postimg.cc/K83931T4/Wish-List4.png)

Continue until lvl 35

Once Lvl 35 your talent tree looks like this:
![Image](https://i.postimg.cc/yYdRb7z7/Talent-Lvl-35.png)

We are now off to the Scarlet Monastery series,
I'm spoiling everything right away, yes, the Chain of the Crusader set is good but if you are LW the Tough Scorpid items are better because the action is much more interesting than the force

Set Chain of the Crusader
![Image](https://i.postimg.cc/4xRcwyMY/chaincru.png)

Item Tough Scorpid
![Image](https://i.postimg.cc/zGDg46zN/scorp.png)

The Scarlet Monastery dungeon has 4 different dungeon instances you will have to do all 4

The following quest is mandatory to complete:
 - Compendium of the Fallen = <https://database.turtlecraft.gg/?quest=1049>

We will look for the following list of items for the 2 dungeons (out of set):
![Image](https://i.postimg.cc/JnKwYsPM/Wish-List5.png)

Afterwards, you can go to Razorfen Down to finish XP at lvl 40
the items are either too hard to get or not interesting hence the fact of doing it last

Once Lvl 40 your talent tree looks like this:
![Image](https://i.postimg.cc/RZJHvGFQ/Talent-Lvl-40.png)
---
_Leveling 40 - 50

Rise Lvl 44

Once Lvl 44 your talent tree looks like this:
![Image](https://i.postimg.cc/kMj68LtM/Talent-Lvl-44.png)

Go to the Gilneas dungeon (new Twow instance that I found great)

We will look for the following list of items:
![Image](https://i.postimg.cc/SNhTYSrG/Wish-List6.png)

Rise Lvl 46

Once Lvl 46 your talent tree looks like this:
![Image](https://i.postimg.cc/Fs7fxGjf/Talent-Lvl-46.png)

Go to the Zul'farrak dungeon (ZF)

This dungeon only has one item likely to interest us :
![Image](https://i.postimg.cc/ydhRMHZV/Wish-List7.png)

The following quest is mandatory to complete:
 - Divino-matic Rod = <https://database.turtlecraft.gg/?quest=2768>

Don't hesitate to farm this dungeon, with the totems the shaman can easily take large groups, with a good AOE team you will wreak havoc

Once Lvl 50 your talent tree looks like this:
![Image](https://i.postimg.cc/XvcXvP0D/Talent-Lvl-50.png)
---

_Leveling 50 - 60

From this level range there is no longer any real problem for XP,

The dungeons to do are:
 - Sunken Temple
 - Hate Forge
 - Blackrock Depths
 - Dire Maul
 - Scholomance
 - Stratholme
 - Lower Blackrock spire
 - Upper Blackrock spire

I recommend that you find out about the different pre-raid items that you can pick up and do your Onyxia and Molten Core access as soon as you can.

Here is your talent tree at lvl 60:
![Image](https://i.postimg.cc/Y9r0LxpT/Talent-Lvl-60.png)

 *XV Tank comparison (simple):*

Before detailing this chapter, I would like to point out that the objective of this chapter is in no way to establish a ranking between tanks
In addition, the information provided takes the rules of a basic raid as a scenario without taking into account the unique strategies of each boss (it is therefore normal that the subject is subject to debate if you start to specify a raid or a boss)
I would also like to point out that I will not provide any mathematical approach to this subject due to the titanic work of writing.

The objective is to present a general idea of ​​the tanks' capabilities and how the Shaman tank can fit in with them in order to observe these strengths and weaknesses.

The scenarios are as follows:
 - Fight against a normal boss which requires a lot of threat generation
 - Fight against a boss with heavy physical damage
 - Fight against a boss with heavy magic damage
 - Fight against a pack of 4+ enemies
 - Combat sequence with continuous movement
 - Combat sequence without continuous movement

For each scenario we will rate the tank's performance in adapting to the situation from 1 to 5 (the higher the rating, the better the tank is in this situation)

Here is the result for each tank based on these scenarios:
![Image](https://i.postimg.cc/zfvQXJnF/compar.png)

Here are the observations that can be made about the shaman tank:
 - The Shaman tank will have fewer tools than the other tanks to avoid damage
 - The Shaman tank will have fewer tools than other tanks to mitigate damage
 - The Shaman tank will have more tools than other tanks to reduce magic damage
 - The Shaman tank will have more tools than other tanks to generate threat on a single target
 - The Shaman tank will have more tools than other tanks to generate threat on multiple targets
 - The Shaman tank will have fewer tools than other tanks to manage these resources, making certain situations more complex
---

 *XVI Advantage and disadvantage of the shaman tank:*

Advantage :
 - A large generation of threats both in multi and single target
 - Buffs that adapt to a lot of situations and which also boost allies
 - Great magic resistance
 - A tank that does as much damage as a dps

Disadvantage:
 - Long cooldown
 - Difficult mana management
 - Lots of spells to know
 - A lack of items to mount the defense

The shaman tank is a tank that has calm gameplay
He has a long cooldown which allows him to take the time to assess the situation at all times unlike the other tank which spams much more
For a player starting out as a tank, this is not a class that I would recommend because it requires a lot of knowledge of its mechanics.
Getting started with mana management can quickly become a problem for tanks who are used to playing other tanks, you will have to be patient and learn to trust your threat generation
---

 *XVII Tank Shaman resume:*

The shaman tank is a tank with a great ability to generate threat, whether on one or multiple targets.
However, it has few items that allow it to increase damage reduction.

Here's what you need to know about the shaman tank:

_Gameplay Philosophy:
 - Always place the best Totems for yourself and your allies.
 - Avoid overthreat (generating more threat than necessary) to conserve mana (too much threat generated = too many spells used = mana loss).
 - Adapt to any situation by using your full arsenal (fear control, poison, disease, interrupt casts, etc...).

_Spell combo depending on the situation:
Preparation before the start of the fight =>
![Image](https://i.postimg.cc/26ysr2Qq/Rockbiter.png)>![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)

At the pull of a normal target =>
![Image](https://i.postimg.cc/Zn7FZxLW/Water-Shield.png)>![Image](https://i.postimg.cc/L8n23tQf/Chain-Lightning.png)>![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>![Image](https://i.postimg.cc/4ydSR59m/Searing-Totem.png)>![Image](https://i.postimg.cc/xCFPMSXp/Stormstrike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)
At the pull of a target with high damage =>
![Image](https://i.postimg.cc/4xMLpstr/Earth-Shield.png)>![Image](https://i.postimg.cc/L8n23tQf/Chain-Lightning.png)>![Image](https://i.postimg.cc/FFc3Fc9k/Totemic-Slam.png)>![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>![Image](https://i.postimg.cc/4ydSR59m/Searing-Totem.png)>![Image](https://i.postimg.cc/xCFPMSXp/Stormstrike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)
At the pull of a target with hight DPS =>
![Image](https://i.postimg.cc/L68N7nVn/Ligntning-Shield.png)>![Image](https://i.postimg.cc/L8n23tQf/Chain-Lightning.png)>![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>![Image](https://i.postimg.cc/4ydSR59m/Searing-Totem.png)>![Image](https://i.postimg.cc/xCFPMSXp/Stormstrike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)

At the pull of a normal group =>
![Image](https://i.postimg.cc/Zn7FZxLW/Water-Shield.png)>![Image](https://i.postimg.cc/L8n23tQf/Chain-Lightning.png)>![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>![Image](https://i.postimg.cc/cCS5rS2c/Magma-Totem.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)
At the pull of a group with high damage =>
![Image](https://i.postimg.cc/4xMLpstr/Earth-Shield.png)>![Image](https://i.postimg.cc/L8n23tQf/Chain-Lightning.png)>![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>![Image](https://i.postimg.cc/cCS5rS2c/Magma-Totem.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)
At the pull of a group with hight DPS =>
![Image](https://i.postimg.cc/Zn7FZxLW/Water-Shield.png)>![Image](https://i.postimg.cc/L8n23tQf/Chain-Lightning.png)>![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>![Image](https://i.postimg.cc/SRP2gS4X/Fire-Nova-Totem.png)>![Image](https://i.postimg.cc/cCS5rS2c/Magma-Totem.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)

Rotate Spell of a normal target =>
![Image](https://i.postimg.cc/xCFPMSXp/Stormstrike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>Refresh![Image](https://i.postimg.cc/Zn7FZxLW/Water-Shield.png)
Rotate Spell a target with high damage =>
![Image](https://i.postimg.cc/xCFPMSXp/Stormstrike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>Refresh![Image](https://i.postimg.cc/4xMLpstr/Earth-Shield.png)
Rotate Spell a target with hight DPS =>
![Image](https://i.postimg.cc/xCFPMSXp/Stormstrike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)>Refresh![Image](https://i.postimg.cc/L68N7nVn/Ligntning-Shield.png)

Rotate Totem of a normal target =>
![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>Wait 15 sec>![Image](https://i.postimg.cc/MKWfmLS8/Strength-of-Earth-Totem.png)>Refresh![Image](https://i.postimg.cc/4ydSR59m/Searing-Totem.png)>Refresh![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>Refresh![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)
Rotate Totem a target with high damage =>
![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>Wait 15 sec>![Image](https://i.postimg.cc/YCtc91Yx/Stoneskin-Totem.png)>Refresh![Image](https://i.postimg.cc/4ydSR59m/Searing-Totem.png)>Refresh![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>Refresh![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)
Rotate Totem a target with hight DPS =>
![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>Wait 15 sec>![Image](https://i.postimg.cc/MKWfmLS8/Strength-of-Earth-Totem.png)>![Image](https://i.postimg.cc/SRP2gS4X/Fire-Nova-Totem.png)>Wait 4 sec>![Image](https://i.postimg.cc/4ydSR59m/Searing-Totem.png)>Refresh![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>Refresh![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)

Rotate Spell of a normal group =>
![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>Refresh![Image](https://i.postimg.cc/Zn7FZxLW/Water-Shield.png)
Rotate Spell a group with high damage =>
![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>Refresh![Image](https://i.postimg.cc/4xMLpstr/Earth-Shield.png)
Rotate Spell a group with hight DPS =>
![Image](https://i.postimg.cc/8kMHsx1L/Lightning-Strike.png)>Refresh![Image](https://i.postimg.cc/Zn7FZxLW/Water-Shield.png)

Rotate Totem of a normal group =>
![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>Wait 15 sec>![Image](https://i.postimg.cc/MKWfmLS8/Strength-of-Earth-Totem.png)>Refresh![Image](https://i.postimg.cc/cCS5rS2c/Magma-Totem.png)>Refresh![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>Refresh![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)
Rotate Totem a group with high damage =>
![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>Wait 15 sec>![Image](https://i.postimg.cc/YCtc91Yx/Stoneskin-Totem.png)>Refresh![Image](https://i.postimg.cc/cCS5rS2c/Magma-Totem.png)>Refresh![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>Refresh![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)
Rotate Totem a group with hight DPS =>
![Image](https://i.postimg.cc/8PqNwF2K/Stoneclaw-Totem.png)>Wait 15 sec>![Image](https://i.postimg.cc/MKWfmLS8/Strength-of-Earth-Totem.png)>![Image](https://i.postimg.cc/SRP2gS4X/Fire-Nova-Totem.png)>Wait 4 sec>![Image](https://i.postimg.cc/cCS5rS2c/Magma-Totem.png)>Refresh![Image](https://i.postimg.cc/xd3mnP0P/Mana-Spring-Totem.png)/![Image](https://i.postimg.cc/j5vyQ4mQ/Healing-Spring-Totem.png)>Refresh![Image](https://i.postimg.cc/6qy4VJdQ/Grace-of-Air-Totem.png)/![Image](https://i.postimg.cc/rF4Kq9jC/Windfury-Totem.png)

After each combat or when the fire totems reach the end of their lifespan =>
![Image](https://i.postimg.cc/zBywFcZV/Totemic-Recall.png)

For effectively taunt =>
![Image](https://i.postimg.cc/zGR14Jw5/Earthshaker-Slam.png)>![Image](https://i.postimg.cc/xd1xz56p/Earth-Shock.png)

For Kites =>
![Image](https://i.postimg.cc/Tw6N7x0q/Earthbind-Totem.png)>Run in circles around the totem

For dispel poison =>
![Image](https://i.postimg.cc/mkcdhrgL/Cure-Poison.png) or ![Image](https://i.postimg.cc/sXT8v8Pc/Poison-Cleansing-Totem.png)

For dispel desease =>
![Image](https://i.postimg.cc/XY6274MD/Cure-Disease.png) or ![Image](https://i.postimg.cc/Pq2K4DCK/Disease-Cleansing-Totem.png)

For dispel fear =>
![Image](https://i.postimg.cc/mkFwB6mx/Tremor-Totem.png)

For cancel a single-target spell =>
![Image](https://i.postimg.cc/8zwny93q/Grounding-Totem.png)

For reduce range damage =>
![Image](https://i.postimg.cc/R0ydyBTf/Windwall-Totem.png)

_Recommended talent:
![Image](https://i.postimg.cc/Y9r0LxpT/Talent-Lvl-60.png)

_Statistics to be compiled:
For up tankiness =>
Stamina>Agilty>Dodge>Defense

For up threat =>
Hit>Agility>PowerSpell>Critical>Strength

There you go, thank you for reading me and see you soon In Game

 ***Mimishammini***

Bonus :

[embed: https://www.youtube.com/embed/X5eRDYuYZHM]

Source :

[embed: https://s9e.github.io/iframe/2/reddit.min.html#classicwow/comments/95abc8#theme=]

[https://www.warcrafttavern.com/wow-clas ... basestats/](https://www.warcrafttavern.com/wow-classic/tools/basestats/)
[https://www.wowhead.com/classic/guide/t ... lassic-wow](https://www.wowhead.com/classic/guide/threat-overview-classic-wow)
<https://www.wowhead.com/classic/spell=10414/earth-shock>
[https://www.wowhead.com/classic/fr/spel ... de-flammes](https://www.wowhead.com/classic/fr/spell=29228/horion-de-flammes)
[https://www.wowhead.com/classic/fr/spel ... n-de-givre](https://www.wowhead.com/classic/fr/spell=8056/horion-de-givre)
[https://www.wowhead.com/classic/guide/t ... lassic-wow](https://www.wowhead.com/classic/guide/threat-overview-classic-wow)
<https://vanilla-wow-archive.fandom.com/wiki/Attributes>
[https://vanilla-wow-archive.fandom.com/ ... tack_power](https://vanilla-wow-archive.fandom.com/wiki/Attack_power)
<https://wowpedia.fandom.com/wiki/Damage_reduction>
<https://classicdb.ch/?spell=10424> (Stoneclaw Totem)
<https://database.turtlecraft.gg/?item=61237> (Mallet of the Awakening)
<https://database.turtlecraft.gg/?item=18865> (Grand Marshal's Punisher)
[viewtopic.php?t=23919](https://forum.turtlecraft.gg/viewtopic.php?t=23919)

[embed: https://docs.google.com/spreadsheets/d/1b5wfBLYoopE7_4r2lhrJHx395K1AlZKx8qMeu821nW4/preview#gid=]

*Last edited by Mimiwarmini on Sun Mar 22, 2026 12:31 am, edited 113 times in total.*

## Post 110876 by amanagor (Grandmaster of Forum PvP) — 2024-12-02T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110876#p110876 | page 1 | era: pre-1.18.1 -->

The best guide for shaman tank, is to not play it. Hopefuly devs get the message that we would rather have functioning ele and enha specs than a gimmicky unviable tank spec

## Post 110880 by Bigsmerf (Grandmaster of Forum PvP) — 2024-12-02T08:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110880#p110880 | page 1 | era: pre-1.18.1 -->

> **amanagor wrote: Mon Dec 02, 2024 7:38 am**
> The best guide for shaman tank, is to not play it. Hopefuly devs get the message that we would rather have functioning ele and enha specs than a gimmicky unviable tank spec

Mald harder, this is absolutely peak. KEEP THIS SHIT UP SHAMTANKS WE LOVE YOU.

## Post 110890 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-02T10:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110890#p110890 | page 1 | era: pre-1.18.1 -->

Great post!

Will give a lengthier answer later but one thing for now.
Regarding threat, the below was mentioned:
'1 healing point = 1 threat point on the target's target'

But
[https://www.wowhead.com/classic/guide/t ... lassic-wow](https://www.wowhead.com/classic/guide/threat-overview-classic-wow)

'Healing Aggro: Healing generates threat at a 1-to-0.25 ratio, so for instance healing a player for 100 health would generate 25 threat. To clarify, overhealing does not generate threat. Since healing spells are not directed at any specific mob, threat is distributed equally to all of the mobs that are actively engaged by the party/raid.'

_______________

In my experience stoneclaw totem is excellent for aoe threat. It has a 15 sec uptime and a 30 sec CD so it is not spammable but it is important to mention it.
To some degree mana and life totems also function as threat totems as they generate resources but their threat is minimal compared to magma, fire nova or stoneclaw.

For magma totem: I suggest having diffeent ranks on the action bar (it is good but super expensive). You perfectly explain overthreat - many times it is enough to use a downgraded magma totem and save a bunch of mana.

_______________

Created a 'manual' for the shaman talents from tanking POV.
The meaning of the colors:
red - offensive/threat centric
blue - mana sustain
green - survivability
purple - other / does many things
yellow - must have
red cross over the talent - too deep in a non-enh tree to become relevant

I think that any combination of the highlighted talents can be a good experimental build.
Note: I marked stable shields in yellow because 3/3 is needed for lightning shield. Marked flurry in red - I'd absolutely take it but after nerf I think it's not necessarily a core option.

![Image](https://i.postimg.cc/WpD99hZ2/talentinos.jpg)

Some personal opinion (requires math and testing, currently 100% subjective):
 * Shield spec. is overrated since we won't cap defense and have no added benefit from blocks, only the added blocked amount. Picking ancestral knowledge instead might be a weird but valid choice.
 * If you only raid tank and your job is to stall 1-2 big mobs. totemic alignment might not be needed. In any other case, yes.
 * Once geared enough, threat talents are usually better than def talents which are better than mana sustain talents. But during leveling, I'd say def > mana sustain > threat (dead tank is a bad tank, oom tank is a dead tank). Because of this I think that a leveling tank shaman and a raiding tank shaman has a different 'proposed talent tree'.
 * Call of flame and flame guidance are nice talents for leveling but tank shaman has limited SP and totem scaling is not so good, these talents seem bad to me at lategame.
 * Don't underestimate tidal focus when leveling, totems are expensive. Never take tidal focus when done leveling.

I'll sketch up a possible way of doing a shaman tank while leveling.
Here I'll be a bit outrageous and will go by ancestral knowledge even if at earlier levels it barely does anything. I honestly believe that shield spec without shield payoff or a block chance talent is still worse.

![Image](https://i.postimg.cc/Zqbm3rCY/talent1.png)

 1. Fill out enh 1st row as you prefer.
 2. Get totemic alignment asap, you have stoneclaw totem early.
 3. Rush lightning strike so you get something similar to a rotation by the time you reach level 20 (f.ex. lightning bolt pull, LS, shock, shock LS etc).

![Image](https://i.postimg.cc/k50ksK5t/talent2.png)

Here I'd either advise to take a breather, get tidal focus and after that rush stormstrike or rush stormstrike and then get tidal focus.
During leveling, shaman tanks have mana problems and elemental focus needs 11 talents in the elemental tree (+ decent enough gear to crit reliably). Tidal focus is your 'poor man's' mana saving which gives you breathing room until you gear up and get elemental focus.
Here I skipped flurry because at this stage I don't think that crit is consistent enough yet.

<https://i.postimg.cc/BngcZ1kf/talent3.png>

It was time to break into the elemental tree. During leveling take convection at row 1 first, mana is key.
You need to spend 5 more talent points. If you start to get confident with your crits, go 3 into elemental devastation and the rest into the shock power. I mostly advise that, extra hit is also nice anyway.
At this point you're gear is better. Pick elemental focus and go 4/5 reverb for smaller shock CD.
It opens up call of flame which makes your magma and fire nova totems much better during dungeons for the lategame. We are at lvl 53 now.

For the remainder get 3 elemental weapons. finish thundering strikes ang go 3/5 flurry.

![Image](https://i.postimg.cc/sxXbKrWv/talent4.png)

But by the time you reach this point you can respec differently, more into threat, if you wanna do that.

A final build I really like is this:
![Image](https://i.postimg.cc/TYmvsTSD/talent5.png)

But if someone takes this really seriously (I don't), people can save 2-4 tank builds into the brainwashing device based on the current circumstances. F.ex. having a sustain build, a survival build, a threat build and a balanced build.

## Post 110930 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-02T14:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110930#p110930 | page 1 | era: pre-1.18.1 -->

Hi Akos1896,

Thank you for your participation

I find your view of things very interesting and I would not fail to include some of the aspects that you address in this guide

> **Akos1896 wrote: Mon Dec 02, 2024 10:13 am**
> Will give a lengthier answer later but one thing for now.
>  Regarding threat, the below was mentioned:
>  '1 healing point = 1 threat point on the target's target'
>
>  But
>  [https://www.wowhead.com/classic/guide/t ... lassic-wow](https://www.wowhead.com/classic/guide/threat-overview-classic-wow)
>
>  'Healing Aggro: Healing generates threat at a 1-to-0.25 ratio, so for instance healing a player for 100 health would generate 25 threat. To clarify, overhealing does not generate threat. Since healing spells are not directed at any specific mob, threat is distributed equally to all of the mobs that are actively engaged by the party/raid.'

I will modify this

> **Akos1896 wrote: Mon Dec 02, 2024 10:13 am**
> In my experience stoneclaw totem is excellent for aoe threat. It has a 15 sec uptime and a 30 sec CD so it is not spammable but it is important to mention it.

Indeed, I can't talk about it because I still have to test its threat generation

My hypothesis about Stoneclaw Totem's behavior:

The Stoneclaw Totem performs a mass taunt on all enemies within its range.

The taunt works as follows:

If the totem does not have the enemy's focus, it takes the current threat value multi by 110% and subtracts it from the current value

Example :
The totem appears, it does not have the enemy's focus, the current threat value is 1000, it taunts

Calculation of generated threat = Current Threat * 1.1 - Current Threat
Calculate the threat generated = 1100 - 1000 = 100 threat

With the Totemic Alignment talent 60% of this threat would be transmitted to us which would give the following result:

Calculation of threat received = (Current Threat * 1.1 - Current Threat) * 0.6
Calculate generated threat = (1100 - 1000) * 0.6 = 60 threat

So yes this totem would be interesting to integrate, but I still lack information to be able to really talk about it

> **Akos1896 wrote: Mon Dec 02, 2024 10:13 am**
> To some degree mana and life totems also function as threat totems as they generate resources but their threat is minimal compared to magma, fire nova or stoneclaw.

Mana Spring Totem increases threat? Do you have a source or a hypothesis on this?

> **Akos1896 wrote: Mon Dec 02, 2024 10:13 am**
> For magma totem: I suggest having diffeent ranks on the action bar (it is good but super expensive). You perfectly explain overthreat - many times it is enough to use a downgraded magma totem and save a bunch of mana.

Ok I will discuss the rank of spells soon

> **Akos1896 wrote: Mon Dec 02, 2024 10:13 am**
> Created a 'manual' for the shaman talents from tanking POV.
>  The meaning of the colors:
>  red - offensive/threat centric
>  blue - mana sustain
>  green - survivability
>  purple - other / does many things
>  yellow - must have
>  red cross over the talent - too deep in a non-enh tree to become relevant
>
>  I think that any combination of the highlighted talents can be a good experimental build.
>  Note: I marked stable shields in yellow because 3/3 is needed for lightning shield. Marked flurry in red - I'd absolutely take it but after nerf I think it's not necessarily a core option.
>
>  ![Image](https://i.postimg.cc/WpD99hZ2/talentinos.jpg)

Thanks, I'll add that

> **Akos1896 wrote: Mon Dec 02, 2024 10:13 am**
> Some personal opinion (requires math and testing, currently 100% subjective):
>  * Shield spec. is overrated since we won't cap defense and have no added benefit from blocks, only the added blocked amount. Picking ancestral knowledge instead might be a weird but valid choice.
>  * If you only raid tank and your job is to stall 1-2 big mobs. totemic alignment might not be needed. In any other case, yes.
>  * Once geared enough, threat talents are usually better than def talents which are better than mana sustain talents. But during leveling, I'd say def > mana sustain > threat (dead tank is a bad tank, oom tank is a dead tank). Because of this I think that a leveling tank shaman and a raiding tank shaman has a different 'proposed talent tree'.
>  * Call of flame and flame guidance are nice talents for leveling but tank shaman has limited SP and totem scaling is not so good, these talents seem bad to me at lategame.
>  * Don't underestimate tidal focus when leveling, totems are expensive. Never take tidal focus when done leveling.
>
>  I'll sketch up a possible way of doing a shaman tank while leveling.
>  Here I'll be a bit outrageous and will go by ancestral knowledge even if at earlier levels it barely does anything. I honestly believe that shield spec without shield payoff or a block chance talent is still worse.
>
>  ![Image](https://i.postimg.cc/Zqbm3rCY/talent1.png)
>
>  1. Fill out enh 1st row as you prefer.
>  2. Get totemic alignment asap, you have stoneclaw totem early.
>  3. Rush lightning strike so you get something similar to a rotation by the time you reach level 20 (f.ex. lightning bolt pull, LS, shock, shock LS etc).
>
>  ![Image](https://i.postimg.cc/k50ksK5t/talent2.png)
>
>  Here I'd either advise to take a breather, get tidal focus and after that rush stormstrike or rush stormstrike and then get tidal focus.
>  During leveling, shaman tanks have mana problems and elemental focus needs 11 talents in the elemental tree (+ decent enough gear to crit reliably). Tidal focus is your 'poor man's' mana saving which gives you breathing room until you gear up and get elemental focus.
>  Here I skipped flurry because at this stage I don't think that crit is consistent enough yet.
>
>  <https://i.postimg.cc/BngcZ1kf/talent3.png>
>
>  It was time to break into the elemental tree. During leveling take convection at row 1 first, mana is key.
>  You need to spend 5 more talent points. If you start to get confident with your crits, go 3 into elemental devastation and the rest into the shock power. I mostly advise that, extra hit is also nice anyway.
>  At this point you're gear is better. Pick elemental focus and go 4/5 reverb for smaller shock CD.
>  It opens up call of flame which makes your magma and fire nova totems much better during dungeons for the lategame. We are at lvl 53 now.
>
>  For the remainder get 3 elemental weapons. finish thundering strikes ang go 3/5 flurry.
>
>  ![Image](https://i.postimg.cc/sxXbKrWv/talent4.png)
>
>  But by the time you reach this point you can respec differently, more into threat, if you wanna do that.
>
>  A final build I really like is this:
>  ![Image](https://i.postimg.cc/TYmvsTSD/talent5.png)
>
>  But if someone takes this really seriously (I don't), people can save 2-4 tank builds into the brainwashing device based on the current circumstances. F.ex. having a sustain build, a survival build, a threat build and a balanced build.

I haven't yet tackled the leveling part because it's just a hobby for me (I built my shaman tank from lvl 1-60, after having taken all my tank skills I went for Elemental Focus at lvl 46, for the Critics it's not a problem since we are fully agi)

I don't necessarily agree with the fact that you can't be cap def depending on your level of itemization and the enchantments you have (not tested yet)

Ancestral Knowledge is not really profitable, in view of its contribution and for 5 points, because it increases the basic characteristics

Basic characteristic for a tauren shaman (Lvl 60):
Str: 90
Agi: 50
Sta: 97
Int: 85
Spi: 102

With Ancestral Knowledge 5/5
he would give:
Str: 90 * 0.1 = 9
Agi: 50 * 0.1 = 5
Sta: 97 * 0.1 = 10
Int: 85 * 0.1 = 9
Spi: 102 * 0.1 = 10

I prefer Shield Specialization,  avoidance is still important to avoid crushes

## Post 110932 by amanagor (Grandmaster of Forum PvP) — 2024-12-02T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110932#p110932 | page 1 | era: pre-1.18.1 -->

> **Bigsmerf wrote: Mon Dec 02, 2024 8:25 am**
> > **amanagor wrote: Mon Dec 02, 2024 7:38 am**
> > The best guide for shaman tank, is to not play it. Hopefuly devs get the message that we would rather have functioning ele and enha specs than a gimmicky unviable tank spec
>
>   Mald harder, this is absolutely peak. KEEP THIS SHIT UP SHAMTANKS WE LOVE YOU.

until i see a shaman main tank, kt, i wont consider it a real spec.

## Post 110956 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-02T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110956#p110956 | page 1 | era: pre-1.18.1 -->

Mimiwarmini:
Unfortunately I can't show official documentation. Before class changes we were discussing the totem threat talent at DC shaman channel after it got released and a green name confirmed this.
Basically:
[https://www.wowhead.com/classic/guide/t ... lassic-wow](https://www.wowhead.com/classic/guide/t%20...%20lassic-wow)
This logic getting applied to mana/health regen made by the totem, goes through mana/health threat calculation and you get 60% of it if I'm correct. It's almost negligeable but it's there if you wanna max-out TPS.

amanagor:
If that's all you expect to consider shamans valid tanks, you should have even accepted them before CC2 when they didn't even have taunts since some madmen like Shockwarden have regularly MT-t KT as a shaman even back then. But I gotta admit, from the 4 tanking classes, shaman is the weakest.

## Post 110984 by Bigsmerf (Grandmaster of Forum PvP) — 2024-12-02T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110984#p110984 | page 1 | era: pre-1.18.1 -->

> **amanagor wrote: Mon Dec 02, 2024 2:43 pm**
> > **Bigsmerf wrote: Mon Dec 02, 2024 8:25 am**
> > > **amanagor wrote: Mon Dec 02, 2024 7:38 am**
> > > The best guide for shaman tank, is to not play it. Hopefuly devs get the message that we would rather have functioning ele and enha specs than a gimmicky unviable tank spec
> >
> >   Mald harder, this is absolutely peak. KEEP THIS SHIT UP SHAMTANKS WE LOVE YOU.
>
>   until i see a shaman main tank, kt, i wont consider it a real spec.

Should I tell 'em guys...

## Post 111443 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-05T04:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111443#p111443 | page 1 | era: pre-1.18.1 -->

Update : Addition of the “XI Gears” chapter, it presents items that can be useful in Pre-raid

## Post 111475 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-05T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111475#p111475 | page 1 | era: pre-1.18.1 -->

Wanted to make some tests, created a new, leveling tank shammie.
I have to admit, I underestimated how bad early-shaman mitigation is. After this, I agree with you that shield spec is needed.
Initially elemental tree has to be ignored in my opinion since it's biggest upgrades (clearcasting, deva) require consistent crit (+deva is more like a raid utility for those pesky lvl 63 mobs).

In my opinion level 16 is the earliest when shaman tanking is possible with 5 talents in shield spec and 2 into totem threat. To be fair, the earlier shaman tanks did their job without any AoE threat but now that we have a tool I advise against tanking before taking those talents.
Almost every bigger pack would turn into a kite-fest since even healer aggro can grief you (if totem threat doesn't help).

After that, 3 points into improved elemental shields for the added orbs (great passive way of keeping threat) and LS. Having a shock, LS, passive orb procs, the totems and a taunt should be a good enough toolkit to properly tank.
In my opinion level 16 is the minimum, level 20 is the optimal minimum for starting tanking (RFC is boring anyway).
After those I went for +armor/dodge. Even as a tauren, I felt how squishy I am for the moment being. That talent really helped and made me decent in 'squishiness'.
Now I'm lvl 22 and planning to finish +armor/dodge talent, get 1% crit and after that having enough TP for added shield armor.

What I noticed when tanking:
WC has the weird side-effect that your main aoe-threat method is stoneclaw totem but WC requires you to use tremor at many places. It's fine but you gotta be prepared to choose between proper aoe threat and negating the option of sleep.
Fire nova somewhat helps if you can plan ahead and place it properly.
Started to use R1 lb at this level. Way faster range-pulling than max ranked LB even around level 20. Having max-ranked LB at a different key for cases when I wanna have a big threat lead on a target and I wanna range pull.

DM: Getting inside the instance is hell. Place is filled with allie chars with WM on. One wrong tab, one AOE totem etc and you get jumped by half of the playerbase. All I'm saying is that the place is so overcrowded that even as a tank just run in and keep a low profile until you're inside the instance. Way too easy to trigger unexpected world PVP.

## Post 111525 by Snipesta (Barrens Chat Casualty) — 2024-12-05T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111525#p111525 | page 1 | era: pre-1.18.1 -->

Blizzard originally had the idea in mind for Shaman Tanking but with them being a hybrid class they don't necessarily have a dedicated tank spec unlike paladins...but to prove people wrong is the best feeling in the world. I approve this guide!

## Post 111530 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-05T21:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111530#p111530 | page 1 | era: pre-1.18.1 -->

If I know well, originally enh was supposed to be a tank tree, ele a caster with some melee (think of original ele deva) and resto is well... Resto.
But this got changed quickly during development.

## Post 111537 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-05T22:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111537#p111537 | page 1 | era: pre-1.18.1 -->

> **Snipesta wrote: Thu Dec 05, 2024 9:04 pm**
> Blizzard originally had the idea in mind for Shaman Tanking but with them being a hybrid class they don't necessarily have a dedicated tank spec unlike paladins...but to prove people wrong is the best feeling in the world. I approve this guide!

Thank you for your message, it makes me happy :)

The aim of this guide is to observe the results, whether good or bad, using a mathematical approach.

Thanks to this I hope to be able to provide answers on certain unclear points on the shaman's game play

but it is far from finished, there is still a lot of research to do and things that I must post to better support my remarks because this guide is clearly not complete and it still remains too vague on certain aspects

## Post 111538 by Turbosaxophonic (Patch Note Conspiracy Theorist) — 2024-12-05T23:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111538#p111538 | page 1 | era: pre-1.18.1 -->

> **Snipesta wrote: Thu Dec 05, 2024 9:04 pm**
> Blizzard originally had the idea in mind for Shaman Tanking but with them being a hybrid class they don't necessarily have a dedicated tank spec unlike paladins...but to prove people wrong is the best feeling in the world. I approve this guide!

I think the idea of Shaman’s hybrid identity was Enhancement being the melee DPS/tanking tree like Druid’s Feral, with the distinction between the two being that Enh’s tanking abilities are separate from the DPS talents, whereas Druids are true hybrid with Feral talents benefiting both forms at the same time

## Post 111551 by Reivaj — 2024-12-06T02:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111551#p111551 | page 1 | era: pre-1.18.1 -->

As a fellow shaman tank I love to see this great post. Mimiwarmini thank you very much to put together such an interesting guide for the community of turtle wow. Your work is appreciate it!

## Post 111552 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-06T02:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111552#p111552 | page 1 | era: pre-1.18.1 -->

> **Reivaj wrote: Fri Dec 06, 2024 2:21 am**
> As a fellow shaman tank I love to see this great post. Mimiwarmini thank you very much to put together such an interesting guide for the community of turtle wow. Your work is appreciate it!

Thank you for reading me, I appreciate your comment :)

## Post 111623 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-06T19:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111623#p111623 | page 1 | era: pre-1.18.1 -->

There is a new custom trinket called obsidian brooch.
Useable from lvl 33, boe, non-unique and gives 11 stam.
Currently around 5-6g in AH.
What I'm saying is that there's a new way to boost stam at early-mid game (trinket slots were almost useless until lategame before).
Since non-unique, once you hit lvl 33, you can reward yourself with +22 stamina as a tank.
Can't wait to get there, I'm lvl 27 with the new char rn.

Btw before I forget.
My main shaman tank is troll.
Hex is super situational but sometimes good (I use it at Black Morass to frog the p2 spawn of the dragon flight, helps a lot).
There's a custom boe relic which makes hex 1,5 sec longer. Without it it's almost worthless as a tank. With it, it has some niche situations. Can't recall its mana cost rn.

## Post 111848 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-09T03:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111848#p111848 | page 1 | era: pre-1.18.1 -->

Update :
 - Addition of the “XII Debuff, Buff, Enchantment, Consumable” chapter, it presents the list of Debuff, Buff, Enchantment, Consumable that can be found

 - Review of Tps calculation formulas with the addition of Spell power (SP)

## Post 111851 by Neechy (Patch Note Conspiracy Theorist) — 2024-12-09T04:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111851#p111851 | page 1 | era: pre-1.18.1 -->

Thanks for making this guide. Very in depth.

While I am not happy with CC2 changes to ele, I think enh tank is headed in the right direction.

Now we just need our own Thunderfury :-)

> **Neechy wrote: Mon Dec 09, 2024 2:50 am**
> Sham'Rok, Hammer of the Storm Lord
>  Item Level 75
>  Binds when picked up
>  Unique
>  Main Hand	 ......................................... Mace
>  42 - 110 Damage ..................... Speed 1.90
>  + 16 - 30 Nature Damage
>  (52.1 damage per second)
>  Durability 100 / 100
>  Classes: Shaman
>  Requires Level 60
>  Chance on hit: Blasts your enemy with lightning, dealing 150 Nature damage and then jumping to additional nearby enemies. Each jump reduces that victim's Nature resistance by 15. Affects 3 targets. Your primary target is also consumed by a cyclone, slowing its attack speed by 10% for 12 sec.

## Post 111941 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-09T19:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111941#p111941 | page 1 | era: pre-1.18.1 -->

Upgrade : added calculation of the threat of the stoneclaw totem (finally), modification of the AOE rotation, a big thank you to Rinzu for this contribution

## Post 111944 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-09T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111944#p111944 | page 1 | era: pre-1.18.1 -->

Excellent updates!
Honestly, for a long time was considering creating my own guide with my own ideas but now I'm convinced it will not be needed.
For the topic of 'what is post-CC2 tank shaman and how it works' your article is the place to turn to.
Since it is a rather unknown topic and many people are trying out tank shaman (I'm serious), I'd ask the devs to please place this article to the TWOW side if Mimi agrees to it so it can be easily available to players even after new threads just push this down from the forum's right side.

## Post 111952 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-09T20:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111952#p111952 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Mon Dec 09, 2024 7:41 pm**
> Excellent updates!
>  Honestly, for a long time was considering creating my own guide with my own ideas but now I'm convinced it will not be needed.
>  For the topic of 'what is post-CC2 tank shaman and how it works' your article is the place to turn to.
>  Since it is a rather unknown topic and many people are trying out tank shaman (I'm serious), I'd ask the devs to please place this article to the TWOW side if Mimi agrees to it so it can be easily available to players even after new threads just push this down from the forum's right side.

Thank you for your encouragement,
I would be very happy if this contribution were better known archived :),
but I am not yet satisfied enough with this work,
there are still points to be addressed for this guide to be worthy of value,
more than 'it is still possible that the sham tank could experience buffs or nerfs so until the devs have stabilized all of that I doubt it will be useful to make this guide official

## Post 111968 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-09T23:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111968#p111968 | page 1 | era: pre-1.18.1 -->

Another topic which came to my mind.
The question of how deep is it worth going into flurry:
![Image](https://i.postimg.cc/y8B25z8T/Flurry.jpg)

The talent currently gives 7% haste for the 1st TP and 2% for any subsequent one.
I see a case of putting exactly 1 TP into the talent.

## Post 111972 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-10T00:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111972#p111972 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Mon Dec 09, 2024 11:47 pm**
> Another topic which came to my mind.
>  The question of how deep is it worth going into flurry:
>  ![Image](https://i.postimg.cc/y8B25z8T/Flurry.jpg)
>
>  The talent currently gives 7% haste for the 1st TP and 2% for any subsequent one.
>  I see a case of putting exactly 1 TP into the talent.

Let's start simply, putting 1 point in flurry is worse because it's as you say 7% of hate for 1 point so I don't think there is any debate on that,
as for mounting flurry calculates it is complex because the formula for haste means that the bonuses multiply between them so if you have several buffs which increase the haste the talent will not generate the same Tps, this is one of the reasons why I do not want to do research equation because there are too many possibilities

> Haste:
>  Increases casting and attack speed by multiplying haste bonuses between them
>  Example: Let's take a weapon with a speed of 2.80, using Bloodlust we obtain a buff of 15% haste and another of 5% haste for 5 seconds if we perform a critical hit
>  Calculate: Attack Speed ​​= Weapon Speed ​​/ ((1 + haste1 / 100) * (1 + haste2 / 100))
>  Attack Speed ​​= 2.8 / (1.15 * 1.05)) = 2.32

i use this talent  :
![Image](https://i.postimg.cc/Jh6P3gwP/Talent4.jpg)

## Post 112104 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-10T18:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112104#p112104 | page 1 | era: pre-1.18.1 -->

Upgrade :  Addition of the “IX More threat with AP and SP” chapter, it simply presents the advantages and disadvantage of taking caster items

## Post 112111 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-10T19:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112111#p112111 | page 1 | era: pre-1.18.1 -->

Excellent, as always.
What I'd add is a list of useful (not necessarily bis) gears during leveling, including custom content.
So for example a beginner, lvl 30 shaman tank would have some insights what to look for.
I'd gladly help with this but I think Atlas needs to be properly updated before this segment can be created.

Another, less exact topic is an analysis between the differences of shaman as MT and shaman as OT. Talent priorities, rotation. I know this is a bit vague of a suggestion but I see a room for improvement in the article by giving insights to these 2, similar but different roles.

Another possible segment could be about the differences between the old shaman tanking and the new shaman tanking. F.ex. I had to learn the hard way that we prefer slower weapons now, not the fast daggers. Does force-reactive disk still have a place in our toolkit? Did chain lightning pull stayed just as important now, that we have proper AoE threat? Questions like this.
For perspective:
'My personal BIS' shaman tanking guide is this:
<https://www.youtube.com/watch?v=kKQnV-kpDhU>
Sometimes re-watching it and loving what these guys have done. Sure, it is for Vanilla so not even CC1 TWOW changes are included like water shield. But a comparison segment would be very cool and would be very helpful for old-timer shaman tanks. To see what 'logic' has fundamentally changed and what stayed the same.

One more possible segment is about the ideal party composition of a tank shaman in a raid. Which comp gives him the most? Which comp receives the most from him? Alongside with some other good variances and some avoid-if-possible group comps.

Other than that, continuing leveling up the 'test' shaman tank to learn more about that segment of the game. Big moo is currently lvl 44, has experience tanking dungeons up to Gilneas.
Once (if - I don't promise I do it) I finish leveling, I can share my experiences (problematic levels, decision-making when taking talents at a given level etc).

_________

Regarding your threat segment. I am very happy that life totem was included in the calculations. If you wish so, adding the same for mana totem would be interesting. I know that it's threat generation greatly depends on the number of mana users in the group, but still.

Last observation: AP vs SP segment compared specific spells with LS in use if I understand it right. In practice shamans frequently use mana shield while tanking. It would be interesting to see the modified values if mana (or even earth) shield was in use.

Don't get me wrong, I don't wanna give you a ton of work :D You do whatever you do. Just giving my feedbacks - I want this article to be as good as possible, just like you.

## Post 112115 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-10T19:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112115#p112115 | page 1 | era: pre-1.18.1 -->

Thank you for your comments,

in fact, I do not address these subjects and I think that the vision of raid / group composition is important to know,

for the difference between Sham tank OT and MT I intend to address the subject it will allow me to clarify the course to reach at a level of statistics, (I am doing research on the list of all the raid bosses to be able to calculate the need for stats), this will also allow me to talk about magic resistance and the advantage of a tank shaman over magic type bosses

As for comparing the new one to the old shaman, I don't see much interest because he is not well known by the whole community,

For the threat generated when you gain mana, it seems that it is the same formula as for the generation of threat with healing, I have not yet found a source on,

For the rest we'll see XD

## Post 112214 by Mekunekud (Barrens Chat Casualty) — 2024-12-11T11:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112214#p112214 | page 1 | era: pre-1.18.1 -->

Just for reference
Mana gains outside of buffs and spirit should be 50% of value in terms of threat. 100 mana should create 50 threat, minus/plus modifiers like Rockbiter.
This should include Water Shield, as well as Healing/Mana Spring due to Totemic Alignment.
It'd require testing ofc but mana gains are superior to healing in threat also because everyone burns mana during a fight so having 5 mana users gaining 10mp/2 or  whatever mana tide now generates will be larger than healing spring unless you can gain enough +healing that it outscales mana by 50%, same as with Earth Shield.
I don't think water shield will outthreat Lightning shield on a single target encounter but when doing trash, it's probably a safer bet if it works properly.

## Post 112226 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-11T11:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112226#p112226 | page 1 | era: pre-1.18.1 -->

> **Mekunekud wrote: Wed Dec 11, 2024 11:03 am**
> Just for reference
>  Mana gains outside of buffs and spirit should be 50% of value in terms of threat. 100 mana should create 50 threat, minus/plus modifiers like Rockbiter.
>  This should include Water Shield, as well as Healing/Mana Spring due to Totemic Alignment.
>  It'd require testing ofc but mana gains are superior to healing in threat also because everyone burns mana during a fight so having 5 mana users gaining 10mp/2 or  whatever mana tide now generates will be larger than healing spring unless you can gain enough +healing that it outscales mana by 50%, same as with Earth Shield.
>  I don't think water shield will outthreat Lightning shield on a single target encounter but when doing trash, it's probably a safer bet if it works properly.

Hi Mekunekud, thanks for your contribution

Effect when you regenerate man you increase your threat with KTH meter I observed that I gained 5 threat per tick of the Mana Spring Totem,

The problem I have today is that I don't have a reliable enough source to talk about the generation of this threat so remember that I don't have a 100% sure source or test, I prefer to refrain from talking about what I don't know

## Post 112289 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-11T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112289#p112289 | page 1 | era: pre-1.18.1 -->

A minor footnote to tank shaman players.
When you rush into mobs which you know will silence you, rush there with a lightning shield on. Silence is preventing eating up too much mana anyway and that added threat from the lightning shield orbs help a ton.

## Post 112377 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-12T11:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112377#p112377 | page 1 | era: pre-1.18.1 -->

Upgrade : added calculation of the threat with mana , added threat calculations with the Mana Spring totem, Water Shield and Lightning Stike while under Water Shield, thank you to Akos for this contribution

## Post 112407 by Dezhan (Barrens Chat Casualty) — 2024-12-12T15:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112407#p112407 | page 1 | era: pre-1.18.1 -->

Only use totems for threat in 5 man, in raid they are absolut useless,  you need all St threat you can get to hold aggro.

As I understand it devs not working on shaman tanks, and no plan to do  so.

You are and will be the worse tank. Full P1 paladin will be better than bis geared shaman tank  in threat/surv.

## Post 112530 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-13T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112530#p112530 | page 1 | era: pre-1.18.1 -->

One correction for my table of relevant talents.
In theory, restoration tree's improved water shield can be very good for a tank shaman but in practice it would be never taken, it is way too deep into restoration.
Same goes for restorative totems (more life or mana via water totem, minimally more threat also).

## Post 112567 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-13T11:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112567#p112567 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Fri Dec 13, 2024 8:09 am**
> One correction for my table of relevant talents.
>  In theory, restoration tree's improved water shield can be very good for a tank shaman but in practice it would be never taken, it is way too deep into restoration.
>  Same goes for restorative totems (more life or mana via water totem, minimally more threat also).

I don't think it's relevant to add it because the Improved Water Shield talent

allows our regeneration to continue depending on the shield stack,

there is not much problem refreshing the shield, but the points are not very useful because we may not have a spi

## Post 112754 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-15T02:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112754#p112754 | page 1 | era: pre-1.18.1 -->

Upgrade : Addition of the “XIV Leveling (simple)” chapter, it presents the dungeons that you can do, their loot and presents you with the talent choices based on your lvl

## Post 112806 by Elisleris (Bug Report Enthusiast) — 2024-12-15T21:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112806#p112806 | page 2 | era: pre-1.18.1 -->

> **Mimiwarmini wrote: Mon Dec 02, 2024 7:33 am**
> Enchantment :
>
>  _Head
>  - Presence of Might = 10 sta, 7 def, 15 shield block, <https://database.turtlecraft.gg/?item=19782>

This is Warrior enchant. Is it possible to apply it to Shaman gear?

## Post 112810 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-15T22:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112810#p112810 | page 2 | era: pre-1.18.1 -->

> **Elisleris wrote: Sun Dec 15, 2024 9:37 pm**
> > **Mimiwarmini wrote: Mon Dec 02, 2024 7:33 am**
> > Enchantment :
> >
> >  _Head
> >  - Presence of Might = 10 sta, 7 def, 15 shield block, <https://database.turtlecraft.gg/?item=19782>
>
>   This is Warrior enchant. Is it possible to apply it to Shaman gear?

ho, you're right I'll remove it immediately, Thank you :)

## Post 112811 by Elisleris (Bug Report Enthusiast) — 2024-12-15T22:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112811#p112811 | page 2 | era: pre-1.18.1 -->

If this will be helpful, I use enchants for 2% Dodge from Kara10 for my prot pala legs and head <https://database.turtlecraft.gg/?item=92006>
Also there is enchant for 1% Dodge from Dire Maul book <https://database.turtlecraft.gg/?item=18331>

## Post 112812 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-15T22:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112812#p112812 | page 2 | era: pre-1.18.1 -->

> **Elisleris wrote: Sun Dec 15, 2024 10:45 pm**
> If this will be helpful, I use enchants for 2% Dodge from Kara10 for my prot pala legs and head <https://database.turtlecraft.gg/?item=92006>
>  Also there is enchant for 1% Dodge from Dire Maul book <https://database.turtlecraft.gg/?item=18331>

Thank you for your contribution has been added :)

## Post 113270 by jmwg — 2024-12-18T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113270#p113270 | page 2 | era: pre-1.18.1 -->

> **Mimiwarmini wrote: Sun Dec 15, 2024 10:29 pm**
> > **Elisleris wrote: Sun Dec 15, 2024 9:37 pm**
> > > **Mimiwarmini wrote: Mon Dec 02, 2024 7:33 am**
> > > Enchantment :
> > >
> > >  _Head
> > >  - Presence of Might = 10 sta, 7 def, 15 shield block, <https://database.turtlecraft.gg/?item=19782>
> >
> >   This is Warrior enchant. Is it possible to apply it to Shaman gear?
>
>
>  ho, you're right I'll remove it immediately, Thank you :)

ZG's enchantment should be available to all classes. This opens up more options. Don't developers notice? The current enchantment is no longer enough for everyone.  dead_turtle_head

## Post 113290 by Elisleris (Bug Report Enthusiast) — 2024-12-18T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113290#p113290 | page 2 | era: pre-1.18.1 -->

> **jmwg wrote: Wed Dec 18, 2024 9:10 pm**
> ZG's enchantment should be available to all classes. This opens up more options. Don't developers notice? The current enchantment is no longer enough for everyone. dead_turtle_head

More options? Each healer will take Druid enchant , each Spell damager will choose Mage enchant, tanks will search for warrior enchant

## Post 113291 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-18T23:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113291#p113291 | page 2 | era: pre-1.18.1 -->

I think he used irony. There's a factual error in the guide rn, proposing warrior ZG enchant to tanks.
Will be corrected, I think.

## Post 113304 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-19T00:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113304#p113304 | page 2 | era: pre-1.18.1 -->

> **Akos1896 wrote: Wed Dec 18, 2024 11:36 pm**
> I think he used irony. There's a factual error in the guide rn, proposing warrior ZG enchant to tanks.
>  Will be corrected, I think.

it's already fixed ;)

## Post 113311 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-19T01:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113311#p113311 | page 2 | era: pre-1.18.1 -->

Upgrade : Addition of equipment in the gears section classified by family:
 - Threat = equipment increasing threat generation
 - Avoidance = equipment increasing the ability to miss, dodge, parry, block, reduce crit
 - Mitigation = equipment increasing stamina

## Post 113455 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-20T01:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113455#p113455 | page 2 | era: pre-1.18.1 -->

Hey!
Was checking the gearing section, it is awesome!
One potential addition:
Is 'Ring of Authority' good enough to be added amongst the ring recommendations? (BoP from Kara Crypts custom dungeon)

<https://database.turtlecraft.gg/?item=50189>

## Post 113513 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-20T08:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113513#p113513 | page 2 | era: pre-1.18.1 -->

Upgrade :  Changed the Flame Shock calculation formula threat, added the “Ring of Authority” ring

## Post 113543 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-20T11:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113543#p113543 | page 2 | era: pre-1.18.1 -->

Found new pre-raid items. It is up to you if they are worthy for the list.

Kara Crypts BoP weapon. A bit like Mass of McGowan but faster, less strength but higher DPS and also gives armor. <https://database.turtlecraft.gg/?item=60416>

BM BoP axe. A bit fast but not too fast and has very relevant stats.
<https://database.turtlecraft.gg/?item=61046>

This one is an extremely rare trash drop in BM. Good for spell power-focused tanks since besides pulling, all of our spells are instant:
<https://database.turtlecraft.gg/?item=61564>

Shaman T0 and T0,5 are important to be mentioned I think, really good items with some armor set bonus reward.
(... of Elements, ... of the Five Thunders)

## Post 113565 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-20T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113565#p113565 | page 2 | era: pre-1.18.1 -->

> **Akos1896 wrote: Fri Dec 20, 2024 11:04 am**
> Found new pre-raid items. It is up to you if they are worthy for the list.
>
>  Kara Crypts BoP weapon. A bit like Mass of McGowan but faster, less strength but higher DPS and also gives armor. <https://database.turtlecraft.gg/?item=60416>

Indeed this mass is interesting if we just look at the statistics but the threat lost is really important, so the gains remain minimal and for me have no place in pre-raid stuff
> BM BoP axe. A bit fast but not too fast and has very relevant stats.
>  <https://database.turtlecraft.gg/?item=61046>

I obtained this ax during my BM, and I took the opportunity to test it, I obtained the same conclusion as for the mace you proposed

> This one is an extremely rare trash drop in BM. Good for spell power-focused tanks since besides pulling, all of our spells are instant:
>  <https://database.turtlecraft.gg/?item=61564>

This trinket is indeed very interesting, but I don't see myself needing this object while the casters in my group would have a greater use for it (it's a blacklist move for ninja loot)

## Post 113852 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-22T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113852#p113852 | page 2 | era: pre-1.18.1 -->

Upgrade : Addition of the “XV Tank comparison (simple)” chapter, it presents in a simple way the differences between the shaman tank and the other tanks

## Post 113853 by Xudo (Grandmaster of Forum PvP) — 2024-12-22T14:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113853#p113853 | page 2 | era: pre-1.18.1 -->

> **Mimiwarmini wrote: Mon Dec 02, 2024 7:33 am**
> **Shaman Tank Guide 20/12/2024**

Sry, buy my eyes hurt reading this. Consider other color, please.

## Post 113858 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-22T14:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113858#p113858 | page 2 | era: pre-1.18.1 -->

Hey!

Potential chest item to the prebis list:
<https://database.turtlecraft.gg/?item=83462>

While lacking in stam and defensive effects, has a lot of agi and haste (+ some int).

## Post 113863 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-22T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113863#p113863 | page 2 | era: pre-1.18.1 -->

> **Xudo wrote: Sun Dec 22, 2024 2:25 pm**
> > **Mimiwarmini wrote: Mon Dec 02, 2024 7:33 am**
> > **Shaman Tank Guide 20/12/2024**
>
>   Sry, buy my eyes hurt reading this. Consider other color, please.

I darkened the color it should be better, after the resolution of your screen plays a lot, Thank you :)

> **Akos1896 wrote: Sun Dec 22, 2024 2:36 pm**
> Hey!
>
>  Potential chest item to the prebis list:
>  <https://database.turtlecraft.gg/?item=83462>
>
>  While lacking in stam and defensive effects, has a lot of agi and haste (+ some int).

I add this , Thank you :)

## Post 113869 by Xudo (Grandmaster of Forum PvP) — 2024-12-22T15:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113869#p113869 | page 2 | era: pre-1.18.1 -->

> **Mimiwarmini wrote: Sun Dec 22, 2024 3:06 pm**
> > **Xudo wrote: Sun Dec 22, 2024 2:25 pm**
> > > **Mimiwarmini wrote: Mon Dec 02, 2024 7:33 am**
> > > **Shaman Tank Guide 20/12/2024**
> >
> >   Sry, buy my eyes hurt reading this. Consider other color, please.
>
>   I darkened the color it should be better, after the resolution of your screen plays a lot, Thank you :)

You would be better to make it lighter instead. Turtle forum has dark background, so dark text on dark background is a problem to read.

## Post 113889 by Reivaj — 2024-12-22T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113889#p113889 | page 2 | era: pre-1.18.1 -->

Hello everybody!

In regards to the new tweaks (revised, Decemeber 22), now Ancestral Knowledge talent increases by 5% total stats, instead of base stats. I think this talent now could be a great contender as overall improvement for tank/dps spec. But I'm lacking data. Could somebody confirm how much this extra 5% will mean with decent gear equipped from 60's dungeons? Or even raids?

On the other hand, if using this talent, we'll have to sacrifice points to fill it out completely or if not completely, balanced it with other talents. For example, comes to mind Flurry, since it has been buffed. Lets say 3/5 in each of them if going for the "balanced" option with threat generation through auto-attack which is our biggest threat generator. This leaves 3% extra of all of our total stats + 14% extra attack speed when a crit occurs.

![Image](https://i.imgur.com/JbUQXvj.png)

## Post 113900 by Mimiwarmini (Barrens Chat Casualty) — 2024-12-22T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113900#p113900 | page 2 | era: pre-1.18.1 -->

> **Reivaj wrote: Sun Dec 22, 2024 6:09 pm**
> Hello everybody!
>
>  In regards to the new tweaks (revised, Decemeber 22), now Ancestral Knowledge talent increases by 5% total stats, instead of base stats. I think this talent now could be a great contender as overall improvement for tank/dps spec. But I'm lacking data. Could somebody confirm how much this extra 5% will mean with decent gear equipped from 60's dungeons? Or even raids?
>
>  On the other hand, if using this talent, we'll have to sacrifice points to fill it out completely or if not completely, balanced it with other talents. For example, comes to mind Flurry, since it has been buffed. Lets say 3/5 in each of them if going for the "balanced" option with threat generation through auto-attack which is our biggest threat generator. This leaves 3% extra of all of our total stats + 14% extra attack speed when a crit occurs.
>
>  ![Image](https://i.imgur.com/JbUQXvj.png)

Indeed since the new Ancestral Knowledge update has become much more profitable but given the fact that no reliable mathematical demonstration has been given we can only affirm that this talent is useful for increasing mitigation, avoidance, threat generation and mana regeneration

Flurry is a talent that only increases threat generation on a single target

They are therefore not comparable because we will choose them for different situations and different needs.

The question that it is wise to ask would be in which case Flurry is more useful to us than Ancestral Knowledge and vice versa and it is according to your needs

## Post 119031 by Markuis (Patch Note Conspiracy Theorist) — 2025-02-05T12:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119031#p119031 | page 2 | era: pre-1.18.1 -->

There could be a section about which race is best -as it's not clearly stated that it's the tauren-. Also, no mention to RFC dungeon. Is it because it's not worth once you are ready to tank?

## Post 119033 by amanagor (Grandmaster of Forum PvP) — 2025-02-05T12:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119033#p119033 | page 2 | era: pre-1.18.1 -->

> **Markuis wrote: Wed Feb 05, 2025 12:19 pm**
> There could be a section about which race is best -as it's not clearly stated that it's the tauren-. Also, no mention to RFC dungeon. Is it because it's not worth once you are ready to tank?

you don't need a tank to do rfc. If anything, i think ideal setup to "tank" rfc is to use a hunter pet... at least thats what the winning comp used in some hc tournament on classic.

## Post 119060 by Markuis (Patch Note Conspiracy Theorist) — 2025-02-05T17:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119060#p119060 | page 2 | era: pre-1.18.1 -->

> **amanagor wrote: Wed Feb 05, 2025 12:27 pm**
> > **Markuis wrote: Wed Feb 05, 2025 12:19 pm**
> > There could be a section about which race is best -as it's not clearly stated that it's the tauren-. Also, no mention to RFC dungeon. Is it because it's not worth once you are ready to tank?
>
>   you don't need a tank to do rfc. If anything, i think ideal setup to "tank" rfc is to use a hunter pet... at least thats what the winning comp used in some hc tournament on classic.

Consider that we are talking about shaman tanking and how it could be done, as it may lack certain tools or could have less obvious ones. So, I think it's fair to ask about it. Like, at what level do we have enough tools to do so? What should be the gear/stat requirements? Are there any special encounters we should be careful of?

Maybe you don't need a tank for RFC but many people do, and wipes are a thing even there.

Edit: I'm thinking that RFC is also the perfect place to start spreading the "shamans can tank" idea, as well as to get a first taste of what it's like for the shaman player.

## Post 119082 by Akos1896 (Grandmaster of Forum PvP) — 2025-02-05T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119082#p119082 | page 2 | era: pre-1.18.1 -->

I leveled a shaman tank after cc2, a tauren.
Also having a troll one.

Giving my take.
For leveling, tauren feels the best option. HP increase is not that big but without real defensives, a war stomp makes wonders. Just enough time for a heal to arrive or for one mob to die. Also, tauren shaman racial is what I call an 'almost defensive'. That haste reduction can save you.
Tauren is arguably the best high-end shaman tank, too but it's much more debatable. If you are decently geared and consumed, good healers keep you alive and your main measure becomes your threat output. Berserking is perfect for that, making a good case for trolls. Some people still say tauren stating that extra HP allows you to gear a bit more offensively, having a threat advantage.
Imo trolls are better lategame since on-demand threat spikes are better than a small flat threat increase.
Orcs have some added threat from melee hits if using an axe (in aggregate) but they are the worst option. Still playable if that's what you like to play.
For leveling I skipped RFC and started with WC. Imo you need the totem threat talent to properly tank first, making the first option to properly tank level 16. On paper you can start earlier but 1) you're squishier than a usual tank 2) old shammie tanks had no aoe threat; it is doable but most people would just end up with all the mobs running around, I don't recommend it.
Your main problem will be squishiness. At level 33 that boe jewelcrafting trinket solves it. Non-unique, you basically get 22 stam for free. Honestly, had no real squishiness problems after that but I also focused on defensive talents and gearing.
Before that healers gotta be more alert than usual. But you can also circumvent that by putting some low-level enchants, buckles etc on your gear and using some low-level potions. After the trinkets you need 0 extra push to be valid at dungeon level.

+1: For special encounters, keep a tab on places with high nat rez, f.ex. some parts of Maraudon. Just use frost shock there. Less threat but worths it.
Maraudon silence dinos can be tricky, too. Run in, use two aoe totems and melee tab. Ask some sec from DPS before they start the zug.

For stats, go stam first. Then agi.
Str vs int is debatable. Optimally str is better but it all depends on how well you can manage your mana.
Forget spirit.
Later when sp items appear... Maybe around agi.

PS: From the moment you have a rockbiter, a taunt, an elemental shield and (preferably) totem threat, you are good to go.

PS2: Havent played since December. If there were big item/talent changes since then, I'm unaware of those

## Post 119140 by Markuis (Patch Note Conspiracy Theorist) — 2025-02-06T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119140#p119140 | page 2 | era: pre-1.18.1 -->

> **Akos1896 wrote: Wed Feb 05, 2025 7:36 pm**
>

Thank you. I'll keep the troll I have. I think I'll still try RFC just to practice before WC.

## Post 119171 by Xudo (Grandmaster of Forum PvP) — 2025-02-06T16:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119171#p119171 | page 2 | era: pre-1.18.1 -->

> **Akos1896 wrote: Wed Feb 05, 2025 7:36 pm**
> Your main problem will be squishiness. At level 33 that boe jewelcrafting trinket solves it. Non-unique, you basically get 22 stam for free. Honestly, had no real squishiness problems after that but I also focused on defensive talents and gearing.

I think you overestimating those trinkets. 220 hp is nice, but you can get 300 from Warchief blessing. I think it still work in dungeons.

## Post 119183 by Bigsmerf (Grandmaster of Forum PvP) — 2025-02-06T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119183#p119183 | page 2 | era: pre-1.18.1 -->

> **Markuis wrote: Thu Feb 06, 2025 10:45 am**
> > **Akos1896 wrote: Wed Feb 05, 2025 7:36 pm**
> >
>
>   Thank you. I'll keep the troll I have. I think I'll still try RFC just to practice before WC.

I would recommend this. I personally tried running RFC as a shamtank multiple times pre CC2 and- while it wasn't -too- hard, there were some rocky moments. You'll want the extra experience before you take on a more serious instance.

## Post 119187 by Akos1896 (Grandmaster of Forum PvP) — 2025-02-06T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119187#p119187 | page 2 | era: pre-1.18.1 -->

If you consider WC, make sure you already have tremor totem, when going there.
Cleansing totems are a plus but less important.
I also recommend a UI showing enemy castbar. At dungeon-level one of the biggest advantage of a shaman tank is how he can oppress a caster mob. Those druids casting sleep are a perfect proving ground to practice earth shocking (later grounding totem helps in, too).
A tip: once you have several ranks of earth shock, always keep (at least) rank 1 and the highest level on your action bar.
Secret of a mana user tank is to not waste mana. Sometimes you won't need the threat, only the interrupt.

Ah yes. Should be obvious if you wanna tank but: have a threatmeter.

## Post 119235 by Markuis (Patch Note Conspiracy Theorist) — 2025-02-07T08:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119235#p119235 | page 2 | era: pre-1.18.1 -->

> **Akos1896 wrote: Thu Feb 06, 2025 8:33 pm**
> A tip: once you have several ranks of earth shock, always keep (at least) rank 1 and the highest level on your action bar.
>  Secret of a mana user tank is to not waste mana. Sometimes you won't need the threat, only the interrupt.
>
>  Ah yes. Should be obvious if you wanna tank but: have a threatmeter.

Are there any other spells we may want to keep a lower level version ready?

I'm using one (threat meter tw I think it's called) bit it takes a while to display the threat.

## Post 119237 by Xudo (Grandmaster of Forum PvP) — 2025-02-07T08:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119237#p119237 | page 2 | era: pre-1.18.1 -->

> **Akos1896 wrote: Thu Feb 06, 2025 8:33 pm**
> Those druids casting sleep are a perfect proving ground to practice earth shocking (later grounding totem helps in, too).

Tremor totem works fine against that sleep too. Save shocks to interrupt healing

## Post 119240 by Akos1896 (Grandmaster of Forum PvP) — 2025-02-07T10:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119240#p119240 | page 2 | era: pre-1.18.1 -->

You can do it but I find it less reliable. Before patch 2.3.0 tremor pulsates every 5 sec. Unless you time it perfectly, you lose seconds of control as the tank. Healing can be annoying, sure but I prio making sure I stay in control.
But yes, spec with good timing, that's also a way.

## Post 125844 by Mimiwarmini (Barrens Chat Casualty) — 2025-04-07T11:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125844#p125844 | page 2 | era: pre-1.18.1 -->

Upgrade: Added changes related to the April 1st update:
 - Updated spell descriptions for Lightning Strike and Bloodlust
 - Updated Lightning Strike's threat calculation
 - Updated Lightning Strike's mana calculation
 - Reworked the "Calculations of Time Depending on AP and SP" table with new threat calculations
 - Added Earth Shield's threat calculation
 - Fixed the Stoneclaw Totem spell description

## Post 141792 by Mimiwarmini (Barrens Chat Casualty) — 2025-07-28T00:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141792#p141792 | page 2 | era: pre-1.18.1 -->

Hi, updates for this guide will be applied when the game is upgraded to 1.18.

## Post 146125 by Jimyape — 2025-08-16T11:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146125#p146125 | page 2 | era: pre-1.18.1 -->

How is the tank-version of T2.5 not part of this guide? Or did this just come with 1.18?

## Post 147845 by Mimiwarmini (Barrens Chat Casualty) — 2025-08-23T13:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147845#p147845 | page 2 | era: pre-1.18.1 -->

Upgrade: Added changes related to upgrade 1.18:
 - Updated spell descriptions for Stormstrike, Molten Blast, Grounding Totem, Purge
 - Updated All threat calculation
 - Updated Talents
 - Reworked the "Calculations of Time Depending on AP and SP" table with new threat calculations

> **Jimyape wrote: Sat Aug 16, 2025 11:01 am**
> How is the tank-version of T2.5 not part of this guide? Or did this just come with 1.18?

Hi, I don't plan to talk about THL stuff for the moment because I haven't done enough testing with it yet.

## Post 147855 by SvenS2 (Bug Report Enthusiast) — 2025-08-23T14:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147855#p147855 | page 3 | era: pre-1.18.1 -->

I'll likely never use this, but huge kudos for the effort!

## Post 148684 by Bearlylegal — 2025-08-27T15:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148684#p148684 | page 3 | era: pre-1.18.1 -->

Great work. Cant wait to read the updated stuff for 1.18 tanking.

## Post 159482 by Mimiwarmini (Barrens Chat Casualty) — 2025-11-13T09:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159482#p159482 | page 3 | era: 1.18.1-announced-pre-release -->

Upgrade : Replacement of old talent

## Post 160205 by Mimiwarmini (Barrens Chat Casualty) — 2025-11-21T02:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160205#p160205 | page 3 | era: 1.18.1-announced-pre-release -->

Upgrade : Addition of the “XVII Tank Shaman resume” chapter, it explains in simple terms how to play the shaman tank

## Post 161975 by Turney — 2025-12-08T05:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161975#p161975 | page 3 | era: 1.18.1-announced-pre-release -->

Fantastic and thoroughly worked out guide, helped me a lot fleshing out my tanking build!

Few things that spontaneously come to my mind worth adding:

XII Gears:
_Chest
 - (Avoidance) Bloodmail Hauberk = 360 armor, 15 sta, 10 agi, 15 int, 10 str, 1% dodge, <https://database.turtlecraft.gg/?item=14611>

_Ring
 - (Avoidance) Sapphire Luminescence = 13 agi, 8 str, 5 def, <https://database.turtlecraft.gg/?item=55259>

XIII Debuff, Buff, Enchantment, Consumable:
Consumable:
 - Elixir of Brute Force = <https://database.turtlecraft.gg/?item=13453>

## Post 162210 by Mimiwarmini (Barrens Chat Casualty) — 2025-12-09T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162210#p162210 | page 3 | era: 1.18.1-announced-pre-release -->

> **Turney wrote: Mon Dec 08, 2025 5:57 am**
> Fantastic and thoroughly worked out guide, helped me a lot fleshing out my tanking build!
>
>  Few things that spontaneously come to my mind worth adding:
>
>  XII Gears:
>  _Chest
>  - (Avoidance) Bloodmail Hauberk = 360 armor, 15 sta, 10 agi, 15 int, 10 str, 1% dodge, <https://database.turtlecraft.gg/?item=14611>
>
>  _Ring
>  - (Avoidance) Sapphire Luminescence = 13 agi, 8 str, 5 def, <https://database.turtlecraft.gg/?item=55259>
>
>  XIII Debuff, Buff, Enchantment, Consumable:
>  Consumable:
>  - Elixir of Brute Force = <https://database.turtlecraft.gg/?item=13453>

Thanks for your feedback Turney, I added your proposal :)

## Post 162265 by Mimiwarmini (Barrens Chat Casualty) — 2025-12-10T02:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162265#p162265 | page 3 | era: 1.18.1-announced-pre-release -->

Upgrade : Addition of the “_Pre Raid” the "XII Gears" section, she shows the gear tested and usable for the Lower Karazhan, MC and Onixya raids

## Post 162282 by Turney — 2025-12-10T06:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162282#p162282 | page 3 | era: 1.18.1-announced-pre-release -->

Fantastic! :-)

Another two possible Gear additions:

_Feet
 - (Avoidance) Wind Dancer Boots = 247 armor, 9 sta, 16 agi, 1% dodge, <https://database.turtlecraft.gg/?item=13260>

_Back
 - (Avoidance) Shifting Cloak = 48 armor, 8 sta, 17 agi, <https://database.turtlecraft.gg/?item=18511>

## Post 162459 by Surtugal (Barrens Chat Casualty) — 2025-12-11T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162459#p162459 | page 3 | era: 1.18.1-announced-pre-release -->

Guess I have to lvl another shaman ![😄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f604.svg) sounds fun!

## Post 165354 by Mimiwarmini (Barrens Chat Casualty) — 2026-01-16T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165354#p165354 | page 3 | era: 1.18.1-announced-pre-release -->

Upgrade : Changed the description of the Skill weapon's impact on Glancing

## Post 167922 by Mimiwarmini (Barrens Chat Casualty) — 2026-02-11T00:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167922#p167922 | page 3 | era: 1.18.1-announced-pre-release -->

Upgrade : Improvement of the consumables list on Chapter : XIII Debuff, Buff, Enchantment, Consumable

## Post 167927 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-11T03:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167927#p167927 | page 3 | era: 1.18.1-announced-pre-release -->

> **Mimiwarmini wrote: Wed Feb 11, 2026 12:28 am**
> Upgrade : Improvement of the consumables list on Chapter : XIII Debuff, Buff, Enchantment, Consumable

thanks for this. lots of good info. you could have updated the shaman wiki page too.

## Post 167992 by Mimiwarmini (Barrens Chat Casualty) — 2026-02-11T21:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167992#p167992 | page 3 | era: 1.18.1-announced-pre-release -->

> **basednoob wrote: Wed Feb 11, 2026 3:36 am**
> > **Mimiwarmini wrote: Wed Feb 11, 2026 12:28 am**
> > Upgrade : Improvement of the consumables list on Chapter : XIII Debuff, Buff, Enchantment, Consumable
>
>   thanks for this. lots of good info. you could have updated the shaman wiki page too.

Hello, what are you talking about when you talk about the wiki?

If you're talking about the changes in 1.18.1, I'll update them only when the version is released.

## Post 170086 by Mimiwarmini (Barrens Chat Casualty) — 2026-03-05T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170086#p170086 | page 3 | era: 1.18.1-announced-pre-release -->

Upgrade : Addition of the “T1 Bis” the "XII Gears" section, she shows the gear tested and usable for the Lower Karazhan, MC and Onyxia raids

## Post 170764 by Aymanibousi — 2026-03-13T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170764#p170764 | page 3 | era: 1.18.1-announced-pre-release -->

SO Which one is the best threat from those 2 trees?s

Here are 2 examples of talent trees that maximize one of the sources of Threat:

Threat generation oriented talent tree with Auto Attack:
![Image](https://i.postimg.cc/DZZNtq6Z/Capture-Talent-Auto.png)

Talent tree oriented towards Threat generation with Shock and Totem:
![Image](https://i.postimg.cc/Xq6r7DDf/Capture-d-ecran-2025-11-13-102122.png)

Of course these trees can be modified as you wish and depending on your situation, it's up to you to do your tests
---

 *IX More threat with AP and SP:*

During different tests I noticed that the devastation talent increases the hit spell by 12% under proc,
For the sake of efficiency and to avoid misses I would like to add 4% hit spell which forces me to take caster items
The objective is to observe how AP and SP increase threat in order to have an idea of ​​the loss/gain that taking a caster item can cause.
For this, we will start with basic statistics where we have 100 AP and 100 SP

We will now calculate 3 different threats with [AP=0,SP=0], [AP=100,SP=0], [AP=0,SP=100] and look at the delta between each of them:

![Image](https://i.postimg.cc/VvXRJRWD/Capture-Tableau.png)
---

## Post 171704 by Mimiwarmini (Barrens Chat Casualty) — 2026-03-22T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171704#p171704 | page 3 | era: post-1.18.1 -->

Upgrade : Recalculates mana and threat generated with changes to Lightning Shield

Coming soon :
 - Explanation of how Elementary Weapon works with Rockbitter
 - Implementation of the Call of Earth talent

## Post 175785 by Mimiwarmini (Barrens Chat Casualty) — 2026-04-18T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175785#p175785 | page 3 | era: post-1.18.1 -->

Good evening,

To those reading this, I want to thank you for reading and improving this post.

As you know, the server will unfortunately be closing, so I wanted to thank you for your kindness, especially to those who messaged me in-game.

I wish you all the best and I hope to see a gaming atmosphere like the one on Turtle again.

