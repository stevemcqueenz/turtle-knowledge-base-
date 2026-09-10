---
title: "Turtle WoW Paladin Guide - 1.17.2"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4593"
topic_id: 4593
forum_id: 41
forum: "Paladin"
author: "Unchallenged"
author_authority: "player"
posted: "2022-10-18T00:03:00Z"
last_post: "2026-01-08T10:49:00Z"
post_count: 49
pages: 2
fetched: "2026-09-10T07:55:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW Paladin Guide - 1.17.2

## Post 27457 by Unchallenged (Barrens Chat Casualty) — 2022-10-18T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27457#p27457 | page 1 | era: pre-1.18.1 -->

This isn't designed to hit EVERY single nail on the head, but a simple guide for TWoW Paladins.
 - If You Have Suggestions, Drop a Comment!

 --==  BASIC INFO ==--
Paladins are not the fastest leveling class early on, but can make up for it towards the end, and are very versatile being able to perform all 3 group roles.
<https://database.turtlecraft.gg/?spells=7.2#0+2+1>
Spells not listed, Holy Strike R2(8), R3(16), R4(24), R5(32), R6 (40), R7 (48), R8 (56)

 --== BEST RACE  ==--
PvE Melee (Tank/Ret): Human
Sword/Mace Specialization: You must increase your hit chance and reduce dodge/block/glance.
Note: +3 weapons skill is equal to approximately 1% chance to hit
Perception now also grants 2% increased physical and spell critical strike chance for the duration.

PvE Caster: High Elf
Quel’dorei Meditation: Recovers 10% of mana activates after a 1.5-second cast Cooldown 3 minutes.
Note: As a Healer this is HUGE for dungeons/raids, with less downtime in general
Enchanting Specialization: +10 Enchanting is just another benefit to the race.

PvP: Dwarf
Stoneform : While active, grants immunity to Bleed, Poison, and Disease effects.  In addition, Armor increased by 10%.  Lasts 8 sec.

 --== TURTLE WOW NOTABLE CHANGES ==--
Turtle WoW Paladins have (3) new abilities;

Holy Strike (Lv 4): Strike your target for X to Y Holy damage, restoring Z health and Z mana to you and your party.

Crusader Strike (Lv 8): A strike that causes X% weapon damage plus an additional Y and grants you a stack of Zeal. Zeal stacks up to 3 times. Lasts 30 sec.

Zeal increases your attack and casting speed by 3%.

Paladins should make use of (Equip adds X Damage to melee attacks) as these all trigger Judge of Wisdom (JoW). These can also CRIT based on spell crit and proc Vengeance. (List Below)

Hand of Reckoning: Taunts the target to attack you, causing a high threat.

Consecration: Baseline, Lv 20
Prot Talent Shield Specialization: Restore 2% Mana When Block Occurs 5 sec cd.
Divine Shield now reduces all damage dealt by 50% instead of reducing attack speed by 100%.
Ret Talent Seal of Command Not Unlocked Till Lv 30.

Blessing of Freedom, Blessing of Sacrifice and Blessing of Protection are now Hand of Freedom, Hand of Sacrifice and Hand of Protection. They do not remove active blessings, but are exclusive to each other (for example, the target can’t have Hand of Freedom and Hand of Sacrifice from one Paladin at the same time.)

All ranks of Blessing of Might, Blessing of Wisdom, Blessing of Kings, Blessing of Salvation, Blessing of Light and Blessing of Sanctuary now have a 10 minute duration.

All ranks of Greater Blessing of Might, Greater Blessing of Wisdom, Greater Blessing of Kings, Greater Blessing of Salvation, Greater Blessing of Light and Greater Blessing of Sanctuary now have a 30 minute duration.

Additional Changes Can Be Seen Here:
<https://turtlecraft.gg/#/paladin>
[viewtopic.php?p=102974#p102969](https://forum.turtlecraft.gg/viewtopic.php?p=102974#p102969)

 --== PALADIN RECOMMENDED SKILLS WHILE LEVELING  ==--

Seal of Righteousness 3.4 or Faster
Seal of Command 3.5 of Slower (ONLY USE/TRAIN Rank 1 To Conserve Mana till 60, Same Weapon DMG)
Seal of Wisdom Lv 18/28/38
Seal of Light Lv 28
Seal of Justice (Skip)
Seal of the Crusader (Skip)

Judgment
Crusader Strike:
Holy Strike: Main Ability All Specs 100% Holy damage attack (Free) cost.
Divine Protection
Hammer of Justice
Purify
Lay on Hands
Holy Light
Flash of Light
Divine Shield
Cleanse
Hammer of Wrath
Summon Warhorse
Summon Charger
Consecration - Trained Baseline Lv 20
Blessing of Sanctuary - (If Your Prot)
Righteous Fury - (If Your Prot + Plan To Dungeon & Leveling in a group)
Redemption - (Skip - If Hardcore)
Divine Intervention - (Skip - If Hardcore)

Hand of Protection
Hand of Freedom
Blessing of Wisdom
Blessing of Might

Devotion Aura - (Lv 16 Swap To Retribution Aura)
Retribution Aura - Main Aura From 16+
Concentration Aura - Main Healing Aura 22+
SKIP Resist Auras - But Situational.

 --== PALADIN ADDONS ==--

 1. Swing Timer
<https://github.com/EinBaum/SP_SwingTimer>

 2. No Error Sound Effects (No More "I'm not ready yet, and all that other noise").
<https://github.com/mrrosh/NoErrorSounds>

 3. Turtle Version 1.17.2 PallyPower - an easy-to-use interface that allows you to set your blessings and automatically check for missing buffs.
<https://github.com/madScripting/PallyPower-TurtleWoW>

 3.  ETL - Exp Per hour/time til level addon
<https://github.com/shirsig/ETL>

 4.  Outfitter - is an equipment management addon that gives you fast access to multiple outfits.
<https://github.com/CosminPOP/Outfitter>

 5.  SuperMacro - provides a very much improved interface for macros
<https://github.com/Monteo/SuperMacro>

 --== MACROS ==--

Example 1:  Begins Auto Attack, cast CS
/script if (not PlayerFrame.inCombat) then AttackTarget() end
/cast Crusader Strike

Example 2: Begins Auto Attack, then checks for SoR, if no SoR casts SoR, else uses CS.
/script if (not PlayerFrame.inCombat) then AttackTarget() end
/script if buffed("Seal of Righteousness") then CastSpellByName("Crusader Strike") else if not buffed("Seal of Righteousness") then CastSpellByName("Seal of Righteousness") end end

Example 3: Begins Auto Attack, checks for SoR, if No SoR casts SoR, else judges JoR
/script if (not PlayerFrame.inCombat) then AttackTarget() end
/script if buffed("Seal of Righteousness") then CastSpellByName("Judgement") else if not buffed("Seal of Righteousness") then CastSpellByName("Seal of Righteousness") end end

Can edit above with different Seals etc.

 --== BEST SPEC FOR LEVELING PALADIN ==--
The great thing about Vanilla Wow is the customized talent tree that allows players options, so while one spec may work for one, it won't work for another.

Protection Leveling Build - 0/31/20 (No Dungeons - More Armor, NO RF Threat, More Stuns, No Taunt)
[https://talents.turtlecraft.gg/paladin? ... AAAAAAA%3D](https://talents.turtlecraft.gg/paladin?points=AAAAAAAAAAAAAAAoYFBYAYBoAgBAAoQoQKAYAAAAAAA%3D)
 --> Stat Priorities: Int/Stam
 10-14 5xRedoubt
 15-19 3xPrecision, 2xToughness
 20-24 1xBoS, 3xShield Special, 1xToughness
 25-29 3xImp Hammer, 2xToughness
 30-34 1xHoly Shield, 4xReckoning
 35-39 1xReck, 4xRighteous Strikes
 40-44 1xBulwark of the Righteous, 4xBenediction
 45-49 1xBenediction, 4xDeflection
 50-54 1xDeflection, 2xPursuit, 2xImp Ret Aura
 55-60 1xKings, 3xVindication, 2xImp Judgement

Protection Leveling Build - 0/31/20 (Yes Dungeons - RF Threat/Reduction)
[https://talents.turtlecraft.gg/paladin? ... AAAAAAA%3D](https://talents.turtlecraft.gg/paladin?points=AAAAAAAAAAAAAAAoYFZYAAZoAgBAAoQoQKAAAAAAAAA%3D)
 --> Stat Priorities: Stam/Int
 10-14 5-Redoubt
 15-19 3-Precision, 2-Toughness
 20-24 1-BoS, 3-Shield Special, 1-Imp RF
 25-29 2-Imp RF, 3-Toughness
 30-34 1-Holy Shield, 4-Reckoning
 35-39 1-Reck, 4-Righteous Strikes
 40-44 1-Bulwark of the Righteous, 4-Benediction
 45-49 1xBenediction, 4xDeflection
 50-54 1xDeflection, 2xPursuit, 2xImp Ret Aura
 55-60 1xKings, (Below)...
(If Raid Tanking)
 2xImproved Hand of Reck
 3xRighteous Defense
or
 2xImproved Judgement
 3xVindication

Protection Notes:
Improved Hand of Reckoning is not required to tank dungeons before the endgame.
If need be can always BOP the target.

Retribution Leveling Build - 11/8/31
[https://talent-builder.haaxor1689.dev/c ... 1205000100](https://talent-builder.haaxor1689.dev/calculator/custom?t0=_pgv9YDGsH&t1=2uLmYNGgaP&t2=Sg8mfTVwpx&t=0500050001000000000000000000-0050300000000000000000000000-0050005005120020301205000100)
 --> Stat Priorities: Str/Stam/Agi
 10-14 5xBenediction
 15-19 5xDeflection
 20-24 2xPursuit, 3xConviction
 25-29 2xImp Ret Aura, 2xConviction, 1xKings
 30-34 1-SoC, 3x2h Special, 1-Vengeance
 35-39 5-Crusading Strikes
 40-44 1-Rep, 4 Redoubt
 45-49 1-Redoubt, 3-Precision, 1-Divine Strength
 50-54 4-Divine Strength,1-Spiritual Focus
 55-58 1-Spiritual Focus, 3-Holy Judgement
 59-60 (4 Choices); You are left with Pt! Do as you wish...
 1-Sanctity Aura
 1-2-Imp Judgement
 1-2-ILoH
 1-3 Vengeance

 --== End Game 60 Builds ==--
Holy Lv 60 Build: 31/7/13
[https://talents.turtlecraft.gg/paladin? ... AAAAAAA%3D](https://talents.turtlecraft.gg/paladin?points=AoaAYSVQBAYABAFACAAAAAAAAAAAFAAoAKAAAAAAAAA%3D)

Prot Lv 60 Build: 11/40/0 - Threat Build
[https://talents.turtlecraft.gg/paladin? ... AAAAAAA%3D](https://talents.turtlecraft.gg/paladin?points=AoAoBAAAAAAAAAAoYFZbCAZoAoBAAAAAAAAAAAAAAAA%3D)

Solo Self Heal Build: 25/21/0 + 5
[https://talents.turtlecraft.gg/paladin? ... AAAAAAA%3D](https://talents.turtlecraft.gg/paladin?points=AoaoZAFABAAAAAAoYFZYAABAAAAAAAAAAAAAAAAAAAA%3D)
You are left with 5 Pt! Do as you wish...
Reckoning
Righteous Defense
Ironclad
Etc... Drop a COMMENT!

Ret Lv 60 Build: 11/8/30 +2
[https://talents.turtlecraft.gg/paladin? ... dIFABAA%3D](https://talents.turtlecraft.gg/paladin?points=FAAAAAAAAAAAAAAoYAAAAAAAAAAAAoTAFKAYdIFABAA%3D)
 -- Guardian's Favor
 -- Spiritual Focus
or (You have Hit Through Gear)
[https://talents.turtlecraft.gg/paladin? ... dIFABAA%3D](https://talents.turtlecraft.gg/paladin?points=FoCABQAAAAAAAAAAAAAAAAAAAAAAAoTAFKAYdIFABAA%3D)

 --== Basic Leveling Rotation ==--
Level 1-30 (Judging too often can speed kill time, but also eats more mana)
Use Seal of Righteousness (SoR)
Use Blessing of Might/Wisdom (as needed)
Use Max Rank Holy Strike (It's FREE Recovers Mana Cost + JoW)
Consecration 2+ Targets.
Finish off With Judge of Righteousness.
Reseal and go again

Level 20+ (Prot) Open World
Use Blessing of Sanctuary
Judging too often can speed kill time, but also eats more mana)
Use Max Rank Holy Strike (It's FREE Recovers Mana Cost + JoW)
Use Seal of Righteousness (SoR) or Seal of Wisdom/Light(SoW/L) in AoE 3+ Situations.
Auto Till Low
 - If Redoubt Procs, Cast Holy Shield(HS) - (Blocks will Regen Cost of HS)
Finish off With Judge of Righteousness if using.
Reseal and go again

Level 30+ (Prot) Dungeon
Use Blessing of Sanctuary
Judging too often can speed kill time, but also eats more mana)
Use Max Rank Holy Strike (It's FREE Recovers Mana Cost + JoW)
 -> Use Seal of Wisdom(SoW) 100%
Judge SoW, Reseal SoW
Drop Highest Rank Consecrate, followed by R1
If Redoubt Procs, Cast Holy Shield(HS) - (Blocks will Regen Cost of HS)
Auto Till Low
Reseal and go again
Bosses JoW, can use SoR for more threat, but high-rank consecrate+hs is generally enough.

Level 30+ (Ret)
Judging too often can speed kill time, but also eats more mana)
Use Blessing of Might/Wis
Use Seal of Command R1 (SoC)
Use Max Rank Holy Strike (It's FREE Recovers Mana Cost + JoW)
Auto Till Low
Can cast Judgement between Autos, finish off With Judge of Command (JoC)
Why?- R1 SoC is pretty inexpensive so judging for that extra dmg between autos is fine vs SoR.
Reseal and go again
A harder Target can be Stunned/Judged for more damage/burst.

 --== ENCHANTS ==--

Helm/Leg
Holy: Lesser Arcanum of Rumination +150 Mana
Prot: Lesser Arcanum of Constitution +100 Health
Ret: Lesser Arcanum of Voracity +8 Strength

Other Options;
Arcanum of Protection 1% Dodge
Arcanum of Focus +8 Healing/Damage
Arcanum of Rapidity 1% Haste

ZG RELEASE:
Syncretist’s Sigil: 10 Stam / 7 Defense / +24 Healing

Shoulder
Holy: Zandalar Signet of Serenity +33 Healing
Prot: Zandalar Signet of Mojo +18 Damage/Healing
Ret: Zandalar Signet of Might +30 AP

Cloak
Holy: Enchant Cloak – Subtlety
Prot: Enchant Cloak – Superior Defense or Enchant Cloak – Dodge
Ret: Enchant Cloak – Subtlety

Chest
Holy: Enchant Chest – Major Mana + 100 Mana
Prot: Enchant Chest – Major Health + 100 Health, or Enchant Chest – Lesser Absorption
Ret: Enchant Chest – Greater Stats +4 Stats

Bracer
Holy: Enchant Bracer – Mana Regeneration, Enchant Bracer – Healing Power or Enchant Bracer – Greater Intellect
Prot: Enchant Bracer – Superior Stamina or Enchant Bracer – Deflection
Ret: Enchant Bracer – Superior Strength

Glove
Holy: Enchant Gloves – Healing Power +30 Healing
Prot: Enchant Gloves – Greater Strength, Enchant Gloves – Threat or Enchant Gloves – Superior Agility
Ret: Enchant Gloves – Greater Strength, Enchant Gloves – Superior Agility or Enchant Gloves – Minor Haste,

Boot
Holy: Enchant Boots – Greater Stamina or Enchant Boots – Spirit
Prot: Enchant Boots – Greater Stamina
Ret: Enchant Boots – Greater Agility
or Enchant Boots – Minor Speed

Weapon Enchants
Holy: Healing Power, Mighty Intellect
Prot: Weapon Chain, Strength, Spell Power, Fiery, Crusader, Lifestealing
Ret: 2H Weapon - Agility, Strength, Fiery, Crusader, Lifestealing

Holy:  Brilliant Mana Oil, Lesser Mana Oil
Weapon Oils [Below If Not Windfury Present]
Prot: Brilliant Mana Oil, Lesser Mana Oil
Ret: (AP) Elemental Sharpening Stone [2%Crit], (SP) (Shadow Oil)

 --== Bonus damage Items in Turtle WoW ==--
Paladins should make use of (Equip adds X Damage to melee attacks) as these all trigger Judge of Wisdom (JoW). These can also CRIT based off spell crit and proc Vengeance.

Repaired Electro-Lantern - <https://database.turtlecraft.gg/?item=65030>
Storm Gauntlets - <https://database.turtlecraft.gg/?item=12632>
Fiery Plate Gauntlets - <https://database.turtlecraft.gg/?item=12631>
Flameskin Gloves - <https://database.turtlecraft.gg/?item=81267>
Lavadrenched Chainmail - <https://database.turtlecraft.gg/?item=80704>
Incendosaur Skin Pauldrons - <https://database.turtlecraft.gg/?item=60572>
Incendosaur Skin Gloves - <https://database.turtlecraft.gg/?item=60582>
Incendosaur Skin Boots - <https://database.turtlecraft.gg/?item=60568>
Fiery Retributer - <https://database.turtlecraft.gg/?item=19968>
Crimson Spellblade - <https://database.turtlecraft.gg/?item=81018>
Blazefury Medallion - <https://database.turtlecraft.gg/?item=17111>
Leggings of Fiery Temper - <https://database.turtlecraft.gg/?item=61505>
Ring of Electrical Binding - <https://database.turtlecraft.gg/?item=61332>

 --== PROFESSIONS ==--

 3 Main Professions;

Engineering/Mining: Most things made by engineers are Eng Only.
+ Early On Range AoE Bombs
+ Early Goggles
+ Early On Dummy+Bop
+ Mid Game/End Game Trinkets
+ End Game Battle Pets
+ End Game Transportation/Gear.

Blacksmith/Mining - Not as useful SC with access to AH, but on HC very useful.
+ Sharpening Stones
+ Belt Buckles
+ Shield Spikes
+ Mithril Spurs
+ Leveling Armor;
Low Lv: Runed Copper
<https://database.turtlecraft.gg/?search=Runed+Copper>
Mid-Lv: Green Iron
<https://database.turtlecraft.gg/?search=Green+Iron>
 43-45+: Steel Plate
<https://database.turtlecraft.gg/?search=steel+plate>
+ End Game Armor/Weapons

Alchemy/Herbing - Highly Recommended on HC, BUT most items can be purchased from Alchs.
+ Access To Elixer/Pots early on
+ Stats for a short duration, but have to continue to apply.
+ Swift Pots are useful, if no Alchy, buy 5-10 Swift to last till 60.
+ Invis Potions
+ Limited Invulnerability
+ Petrification

*Last edited by Unchallenged on Wed Dec 04, 2024 12:09 am, edited 37 times in total.*

## Post 27458 by Unchallenged (Barrens Chat Casualty) — 2022-10-18T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27458#p27458 | page 1 | era: pre-1.18.1 -->

Reserved

## Post 27502 by Ghola (Patch Note Conspiracy Theorist) — 2022-10-18T21:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27502#p27502 | page 1 | era: pre-1.18.1 -->

thats not what stoneform does

## Post 33132 by Dietrommel — 2023-01-25T09:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33132#p33132 | page 1 | era: pre-1.18.1 -->

Thanks for the Guide!

What specifically made you differentiate between Dungeon and non-Dungeon?
I am only lv. 15 right now and that might be a noob question :-D

## Post 35737 by Deleigh — 2023-02-22T17:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35737#p35737 | page 1 | era: pre-1.18.1 -->

what is a good rotation for low level, middle level, and high level?

## Post 36642 by Wrathweaver (Patch Note Conspiracy Theorist) — 2023-03-02T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36642#p36642 | page 1 | era: pre-1.18.1 -->

> **Dietrommel wrote: Wed Jan 25, 2023 9:56 am**
> Thanks for the Guide!
>
>  What specifically made you differentiate between Dungeon and non-Dungeon?
>  I am only lv. 15 right now and that might be a noob question :-D

This guide is a bit outdated.
The main change is judement of the crusader procs weapon and no longer debuffs to increase holy damage by a large amount.
Main issue for both dungeon and especially solo is mana and damage for holy (holy no longer very viable solo, its a pure healing spec now).
Crusader strike does some damage but will use most of your mana.
What you want to be looking for is a good proc weapons for leveling and then look for another proc weapon for the next levels.

For pvp and other instances, most paladins have different proc weapons for different bosses and situations.
Many have charge weapons that they rotate i think.

Turtle wow paladin is the only class that has the real private server ascension feel to them, all other classes are vanilla+ more or less.

Edit: note that some proc weapons might be changed into normal weapons because they are too powerful, look at AH and dont rely too much on database.

## Post 37401 by Alexam89 — 2023-03-11T15:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37401#p37401 | page 1 | era: pre-1.18.1 -->

Thank a lot for the guide, is it a way to see the talent levelling order in the skill trees? For example in a build for prot paladin dungeon I do not understand where to put my points first, should I put 5 point into second row and go futher, or I should put all the points in the second row, and then proceed. I guess I have to put only 5 points, but what should I prioritize?

## Post 39131 by Jotafran — 2023-03-26T11:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39131#p39131 | page 1 | era: pre-1.18.1 -->

Yes pls, Can you update the guide and put the talent expediture in order for levelling?. Thanks.

## Post 41565 by Bittermens (Barrens Chat Casualty) — 2023-04-14T19:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41565#p41565 | page 1 | era: pre-1.18.1 -->

This guide not only needs an update but also a DPS Guide now that spelladin is a thing.

## Post 41609 by Galindae — 2023-04-15T05:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41609#p41609 | page 1 | era: pre-1.18.1 -->

sorry guide is in russian byt i hope it will help (about spell retri paladin)

[embed: https://www.youtube.com/embed/yaKGx_84h2Q]

## Post 53209 by Unchallenged (Barrens Chat Casualty) — 2023-07-12T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53209#p53209 | page 1 | era: pre-1.18.1 -->

> **Dietrommel wrote: Wed Jan 25, 2023 9:56 am**
> Thanks for the Guide!
>
>  What specifically made you differentiate between Dungeon and non-Dungeon?
>  I added the lil notes under for reasoning;
>  - More Armor/Defense For Survival, No Imp Threat or Taunt.
>  vs
>  - More Hit For Tanking Threat With Imp Threat + Taunt.
>
>  I am only lv. 15 right now and that might be a noob question :-D

How was your living experience on Paladin?

## Post 53211 by Unchallenged (Barrens Chat Casualty) — 2023-07-12T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53211#p53211 | page 1 | era: pre-1.18.1 -->

> **Deleigh wrote: Wed Feb 22, 2023 5:20 pm**
> what is a good rotation for low level, middle level, and high level?

I Added in the rotation I had mostly used, when low/mid - high level it's very situational.

SoW/JoW is great if your running 10 Holy for the 100% chance to heal through and need lots of mana.

Otherwise SoL/JoL can maintain your health, while blocks from Prot regen your mana with enough mobs.

## Post 53213 by Unchallenged (Barrens Chat Casualty) — 2023-07-12T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53213#p53213 | page 1 | era: pre-1.18.1 -->

> **Alexam89 wrote: Sat Mar 11, 2023 3:53 pm**
> Thank a lot for the guide, is it a way to see the talent levelling order in the skill trees? For example in a build for prot paladin dungeon I do not understand where to put my points first, should I put 5 point into second row and go futher, or I should put all the points in the second row, and then proceed. I guess I have to put only 5 points, but what should I prioritize?

> **Jotafran wrote: Sun Mar 26, 2023 11:05 am**
> Yes pls, Can you update the guide and put the talent expediture in order for levelling?. Thanks.

I Updated and added Talent Progression for Prot/Ret, let me know what you think.

## Post 54897 by Vidac7 — 2023-07-27T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54897#p54897 | page 1 | era: pre-1.18.1 -->

What are the stat priorities for each build?

## Post 71801 by Munra — 2023-10-18T08:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71801#p71801 | page 1 | era: pre-1.18.1 -->

> **Unchallenged wrote: Tue Oct 18, 2022 12:03 am**
> Blacksmith/Mining - Not as useful SC with access to AH, but on HC can be useful.

Nice guide, thanks you very much for this. Since english is not my strongest, I couldnt figured out what you mean by "SC", what does it stand for?

## Post 71802 by Sylveria (Grandmaster of Forum PvP) — 2023-10-18T08:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71802#p71802 | page 1 | era: pre-1.18.1 -->

> **Munra wrote: Wed Oct 18, 2023 8:07 am**
> > **Unchallenged wrote: Tue Oct 18, 2022 12:03 am**
> > Blacksmith/Mining - Not as useful SC with access to AH, but on HC can be useful.
>
>   Nice guide, thanks you very much for this. Since english is not my strongest, I couldnt figured out what you mean by "SC", what does it stand for?

SC = Softcore (just a normal Character without Hardcore-Challenge), you may also say NHC (Non-Hardcore)

## Post 71810 by Munra — 2023-10-18T08:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71810#p71810 | page 1 | era: pre-1.18.1 -->

> **Mavbyte wrote: Wed Oct 18, 2023 8:19 am**
> SC = Softcore (just a normal Character without Hardcore-Challenge), you may also say NHC (Non-Hardcore)

Thank you very much!!  satisfied_turtle

## Post 92694 by Manbearpig — 2024-04-14T22:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92694#p92694 | page 1 | era: pre-1.18.1 -->

Awesome help for new Paladins!!

In your opinion, which leveling build would be the safer choice for hardcore players?

## Post 92853 by Unchallenged (Barrens Chat Casualty) — 2024-04-16T18:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92853#p92853 | page 1 | era: pre-1.18.1 -->

> **Manbearpig wrote: Sun Apr 14, 2024 10:40 pm**
> Awesome help for new Paladins!!
>
>  In your opinion, which leveling build would be the safer choice for hardcore players?

Prot Paladins is the safer choice for HC Players.

 20-30 is pretty straightforward you'll do just as much damage as a ret paladin, only will have a shield to block to regen mana per block, and can make your dungeon groups pretty quick.

you can still heal (collect int/stm gear) or fill a dps role.

The differences are pretty minimal.

## Post 100081 by Hollem — 2024-07-21T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100081#p100081 | page 1 | era: pre-1.18.1 -->

I don't understand why the *Only undead* stuff like exorcism isn't just removed to be baseline to all mobs. It just opens up more for that Pally without adding anything.

## Post 101028 by Ltanailov — 2024-09-10T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101028#p101028 | page 1 | era: pre-1.18.1 -->

> **Unchallenged wrote: Tue Oct 18, 2022 12:03 am**
> 45-49 1-Benediction, 4-Deflection
>  50-54 1-Deflection, 2-Pursuit, 2-Conviction
>  55-60 1-Conviction, 2-Imp Ret Aura, 2-Deflection

Total 7 points in Deflection, is that a mistake?

## Post 101264 by Kaizod — 2024-09-14T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101264#p101264 | page 1 | era: pre-1.18.1 -->

I found this [Smoldering Brand] while questing in Duskwood (Alliance):

<https://database.turtlecraft.gg/?item=70047>

adds 2-6 fire dmg. Would it be useful for a leveling pally?

## Post 101311 by Bigsmerf (Grandmaster of Forum PvP) — 2024-09-15T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101311#p101311 | page 1 | era: pre-1.18.1 -->

> **Kaizod wrote: Sat Sep 14, 2024 4:53 pm**
> I found this [Smoldering Brand] while questing in Duskwood (Alliance):
>
>  <https://database.turtlecraft.gg/?item=70047>
>
>  adds 2-6 fire dmg. Would it be useful for a leveling pally?

Unless you have nothing better, then it would be pretty good. Any weapon for a melee class that isn't feral druid while levelling should focus mainly on the weapon damage, speed, or total DPS. I wouldn't really be sure what to tell you in this case though.

## Post 101314 by Atreidon (Grandmaster of Forum PvP) — 2024-09-15T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101314#p101314 | page 1 | era: pre-1.18.1 -->

> **Kaizod wrote: Sat Sep 14, 2024 4:53 pm**
> I found this [Smoldering Brand] while questing in Duskwood (Alliance):
>
>  <https://database.turtlecraft.gg/?item=70047>
>
>  adds 2-6 fire dmg. Would it be useful for a leveling pally?

If the extra elemental damage is listed like it is on this item or thunderfury, it is added into the weaponswing and offers you no additional upside. The fireproc items that are sometimes mentioned for paladins are all listing it as green text like this:
<https://database.turtlecraft.gg/?item=12631>

Evaluate smoldering brand how you would also judge any generic melee weapon, because thats what it is.

## Post 101991 by Unchallenged (Barrens Chat Casualty) — 2024-09-26T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101991#p101991 | page 1 | era: pre-1.18.1 -->

> **Ltanailov wrote: Tue Sep 10, 2024 3:56 pm**
> > **Unchallenged wrote: Tue Oct 18, 2022 12:03 am**
> > 45-49 1-Benediction, 4-Deflection
> >  50-54 1-Deflection, 2-Pursuit, 2-Conviction
> >  55-60 1-Conviction, 2-Imp Ret Aura, 2-Deflection
>
>   Total 7 points in Deflection, is that a mistake?

Yah it was supposed to be "Conviction" to make 5/5.

I fixed/updated the text/links.

Thanks!

## Post 102023 by HerTiSo — 2024-09-27T13:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102023#p102023 | page 1 | era: pre-1.18.1 -->

> **Unchallenged wrote: Thu Sep 26, 2024 9:59 pm**
> I fixed/updated the text/links.
>
>  Thanks!

Thanks for your work; I'm digging the guide as a paladin newcomer!

## Post 105642 by Gord44 — 2024-10-31T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105642#p105642 | page 1 | era: pre-1.18.1 -->

will this guide still be somewhat correct with the new patch? ie prot leveling still effective? thanks!

## Post 106302 by HerTiSo — 2024-11-04T12:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106302#p106302 | page 1 | era: pre-1.18.1 -->

> **Gord44 wrote: Thu Oct 31, 2024 4:17 pm**
> will this guide still be somewhat correct with the new patch? ie prot leveling still effective? thanks!

Not really, unfortunately, as it relied on stacking holy debuffs on the enemy—which don't exist anymore. I'm probably going to write up a new guide myself soon.

*Last edited by HerTiSo on Thu Nov 07, 2024 3:23 pm, edited 1 time in total.*

## Post 106313 by Steakhouse (Patch Note Conspiracy Theorist) — 2024-11-04T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106313#p106313 | page 1 | era: pre-1.18.1 -->

> **Gord44 wrote: Thu Oct 31, 2024 4:17 pm**
> will this guide still be somewhat correct with the new patch? ie prot leveling still effective? thanks!

Aoe prot leveling/grinding is alive and well and zeal makes it all the better. Im leveling as holy/ret til 30, and respeccing as soon as I can get Holy Shield.

## Post 108164 by Fetza — 2024-11-16T18:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108164#p108164 | page 1 | era: pre-1.18.1 -->

First of all thank you for the guide Unchallenged! I appreciate it so much. I realized soon the talent tree is changed and this guide is probably built on a previous patch system. Do you plan to update the guide? I would love a refreshed leveling and end game retribution talent build If it is possible.

## Post 109694 by Kriegwraith — 2024-11-24T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109694#p109694 | page 1 | era: pre-1.18.1 -->

Awesome guide, helped me so far.
Will it be updated with new talents by any chance?

## Post 111198 by Unchallenged (Barrens Chat Casualty) — 2024-12-04T00:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111198#p111198 | page 1 | era: pre-1.18.1 -->

Updated for 1.17.2 (Drop Comments If Any Suggestions)

## Post 116787 by Notemede — 2025-01-15T09:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116787#p116787 | page 1 | era: pre-1.18.1 -->

Hi, first of all thanks for taking your time to do this guide. I'm new to paladin in TWOW. I have some question hope you can let me figure out. Why is holy strike main spell for Ret ? I know it's free but since the changes to Crusader Strike seems more optimal to me X%wep damage than +Holy DMG.
At later when I finally get Vengeful Strike (you have old talents in the link for retri lvling) should I just use Holy Strike just for the buff(like 20 sec or so)?

## Post 117046 by funeh (Barrens Chat Casualty) — 2025-01-17T06:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117046#p117046 | page 1 | era: pre-1.18.1 -->

Yeah i also don't understand why would you use holy strike and not crusader strike. CS deals so much more dmg and also gives attack speed buff.

## Post 122720 by chongtxtx — 2025-03-16T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122720#p122720 | page 1 | era: pre-1.18.1 -->

Dude I just want to say I used the hell out of this guide from the start of my character to his aq40 tanking. Thanks man!! Great guide!

## Post 123175 by CoreyHavok1 — 2025-03-20T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123175#p123175 | page 2 | era: pre-1.18.1 -->

Thank you for updating for 17.2, first time classic pally, first time playing alliance -_-

## Post 124957 by Cazzum — 2025-04-01T19:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124957#p124957 | page 2 | era: pre-1.18.1 -->

waiting for new patch update <3

## Post 124958 by Springboards (Bug Report Enthusiast) — 2025-04-01T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124958#p124958 | page 2 | era: pre-1.18.1 -->

> **funeh wrote: Fri Jan 17, 2025 6:32 am**
> Yeah i also don't understand why would you use holy strike and not crusader strike. CS deals so much more dmg and also gives attack speed buff.

because 6 months ago it was the opposite

## Post 127879 by DrakkarBCN — 2025-04-21T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127879#p127879 | page 2 | era: pre-1.18.1 -->

Hello @Unchallenged

first of all: Thanks for the guide!!!

I have a question regarding following text:

> Level 20+ (Prot) Open World
>  Use Blessing of Sanctuary
>  Judging too often can speed kill time, but also eats more mana)
>  Use Max Rank Holy Strike (It's FREE Recovers Mana Cost + JoW)
>  Use Seal of Righteousness (SoR) or Seal of Wisdom/Light(SoW/L) in AoE 3+ Situations.
>  Auto Till Low
>  - If Redoubt Procs, Cast Holy Shield(HS) - (Blocks will Regen Cost of HS)
>  Finish off With Judge of Righteousness if using.
>  Reseal and go again

- **SOLVED, I found it in Talents!** I can't find the "Blessing of Sanctuary", wich blessing is this?

- What is the reason to use "Seal of Wisdom" in A? (What is the "Seal of Light", can't find it)

## Post 128913 by Skew88 — 2025-04-28T23:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128913#p128913 | page 2 | era: pre-1.18.1 -->

How do you use the PallyPower addon? I recall having to simply click in the frame of every class and then a blessing icon appears, and then pressing again, you can cycle through all your available blessings. However, nothing happens when I do this.

## Post 129261 by tussor — 2025-05-01T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129261#p129261 | page 2 | era: pre-1.18.1 -->

thanks !

## Post 130337 by Achmodeus — 2025-05-09T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130337#p130337 | page 2 | era: pre-1.18.1 -->

Hi,

Thank you for this amazing guide.

I'm currently doing the Hardcore, SaS and Artisan's Quest challenge.
I would consider running a Protection build, surely because this is my first Paladin run. But I'm curious if Retri would be better as you can only get one crafted shield in this game.

Thanks :)

## Post 130687 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-12T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130687#p130687 | page 2 | era: pre-1.18.1 -->

> **Achmodeus wrote: Fri May 09, 2025 5:07 pm**
> I'm currently doing the Hardcore, SaS and Artisan's Quest challenge.
>  I would consider running a Protection build, surely because this is my first Paladin run. But I'm curious if Retri would be better as you can only get one crafted shield in this game.
>
>  Thanks :)

Definitely go ret as Artisan. And remember that dead enemies deal no damage.

> **DrakkarBCN wrote: Mon Apr 21, 2025 8:52 pm**
> - What is the reason to use "Seal of Wisdom" in A? (What is the "Seal of Light", can't find it)

Seal of wisdom recovers mana. As a prot, you level by killing large groups of monsters with Consecration, which eats a lot of mana. Seal of light heals you when you're hitting stuff.

## Post 132968 by walkingmind — 2025-05-25T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132968#p132968 | page 2 | era: pre-1.18.1 -->

Thanks for the guide. Yet couldn't get the macros working. Using ones from wiki page <https://turtle-wow.fandom.com/wiki/Paladin_Macros>

## Post 142081 by Seridion — 2025-07-29T13:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142081#p142081 | page 2 | era: pre-1.18.1 -->

Hi all,

Is this guide up to date?

## Post 143404 by Brugg — 2025-08-06T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143404#p143404 | page 2 | era: pre-1.18.1 -->

"2. No Error Sound Effects (No More "I'm not ready yet, and all that other noise").
<https://github.com/mrrosh/NoErrorSounds>"

No need of this addon, go to sound options and uncheck "error speech"

## Post 143752 by Unchallenged (Barrens Chat Casualty) — 2025-08-08T06:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143752#p143752 | page 2 | era: pre-1.18.1 -->

This guide is nearly 3 years old at this point, and started (WAY WAY before Class Changes 2.0)

Some Class Changes will update/change, just drop comments and we can work on improving the guide from this point going forward.

Who knows what class changes 3,4,5 will bring.

Addon-wise, twow is always making advances to client that weren't around in the past so some addons might/might not find use anymore :-)

Thanks, all for the positive feedback!

## Post 159135 by Nuninho32 — 2025-11-10T23:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159135#p159135 | page 2 | era: 1.18.1-announced-pre-release -->

Viable for 1.18?

## Post 164667 by Kisada — 2026-01-08T10:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164667#p164667 | page 2 | era: 1.18.1-announced-pre-release -->

is this guide still valid or out of date?

