---
title: "Suggestion for Lunatic Gear Progression"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19523"
topic_id: 19523
forum_id: 72
forum: "Level One Lunatics"
author: "Cysthen"
author_authority: "player"
posted: "2025-05-25T03:55:00Z"
last_post: "2026-03-22T22:26:00Z"
post_count: 59
pages: 2
fetched: "2026-09-10T10:44:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Suggestion for Lunatic Gear Progression

## Post 132893 by Cysthen (Patch Note Conspiracy Theorist) — 2025-05-25T03:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132893#p132893 | page 1 | era: pre-1.18.1 -->

**Suggestion for Lunatic Gear Progression**

Not sure what the intentions are with Lunatic Gear moving forward with these Raids but we ran some tests on a vmangos server and believe Hit would be the perfect stat that speeds up our Runs without giving us too much power in PVP.

To the concern about PVP.  A Level 1 can already hit a Level 60 Player with very little miss chance. With that said Hit is weaker in PVP than Weapon Damage and there seems to be no issue giving us Weapon Damage.

I'd also like to note ****please stop having items be Grey or White you can't Master Loot them.****

 ****Notes:****
- We are aware Master Looter has been changed in 1.18.1 to affect Grey and White Rarity, it is currently bugged and forces Greys and Whites to be master looted while it's set to Uncommon.

- When it is fixed we'll change the current Weapons back to White Rarity. That said it doesn't change much else on this list as there isn't really anything that makes sense as White Rarity and the Hit items are appropriately Blue Rarity.

---
 **How PVE Hit Works**

Enemies have ****99% Avoidance from the front**** and that pretty much never changes.

![Image](https://i.imgur.com/3ZNrxAo.png)
---

Enemies have ****45-50% Miss chance from behind with 0 Hit**** and this value can change with Hit.

![Image](https://i.imgur.com/kapw1Rt.png)
---

 ****10% Hit**** on a vmangos Server makes it ****22-25% Miss chance from behind**** for reference.

![Image](https://i.imgur.com/hwxpoFm.png)
---

If we are going strictly off of the Test Results:
 ****44% from behind for Zero Hit.****
 ****22% from behind for 10%.****
That would put****each point of hit valued at 2.2% additional chance to hit from behind.****
Even with ****5% hit we would continue to miss exactly 33% of attacks****, according to these tests.

 ****We'd miss a third of attacks at 5%.****

You would still need 2 Rogues to Tank each target and how we play would remain the same, only slightly increase our overall clear times, as well as help Rogue Threat.

These tests were performed by Pyropal. Thank you.

---
 **How PVP Hit Works**

I've decided to add this section because there seems to be some reluctance from the developers to add hit items for us. I am not sure if the disconnect is a misunderstanding of how it works or just being unaware so I am clearing that up right now.

 2 Hours testing a Level 1 with 5 Weapon Skill hitting a Level 60 with 300 Defense:

[embed: https://www.youtube.com/embed/NUQEcrvCaOs]

---

![Image](https://i.imgur.com/vREFErv.jpeg)
---
We have 83% Hit/17% Miss against a Level 60.
The test results show that a Level 1 already has no issue hitting a majority of attacks on a player regardless of level.
These tests were done on a Level 60 in full Naxx Gear on Turtle WoW. With that proven it is our firm belief that Hit would very minimally affect PVP if that was a concern or reason for hesitation. Thank you.

---
 **Healing Threat Issues (Resolved)**  Saving the following for records. It appears they went with a Lunatic Exclusive option which is very impressive.
Thank you so much **Jamey**. Absolutely huge.

Currently ****Lesser Heal Rank 1, Healing Touch Rank 1, and Lesser Healing Wave Rank 1 all do twice as much threat**** as Paladin Heals. This is a major balance issue seeing as our content is heavily focused on managing threat. This causes a major bottleneck in performance for Priests, Druids, and Shamans when in reality they should have more healing over time potential than Paladins.

After researching this issue I've found that it can be addressed in two ways.

The easiest way is just running an SQL to reduce the threat of those 3 Rank 1 Healing Spell IDs. Seeing as Healing Threat isn't much of an issue endgame or outside of our content I see this as an extremely low risk solution.

 **SQL:** Code: Select all

```
REPLACE INTO `spell_threat` (`entry`, `Threat`, `multiplier`, `ap_bonus`) VALUES
(5185, 0, 0.5, 0),
(2050, 0, 0.5, 0),
(8004, 0, 0.5, 0);
```

The second more difficult solution is a C++ Core Edit that makes it so it only affects players with the Lunatic Spell ID. If this is to be considered I highly doubt this would be the method you all use compared to the above method. However I figured I'd include this to show how Lunatic Exclusive Changes could be made.

 **C++ Core Edit:** Code: Select all

```
// --- Configuration ---
// Level One Lunatic Challenge ID
#define SPELL_LEVEL_ONE_LUNATIC_ID 57736

// --- Implementation Logic ---
if (caster->HasAura(SPELL_LEVEL_ONE_LUNATIC_ID))
{
// Define targeted Rank 1 heal IDs
static const std::unordered_set<uint32> lowRankHealIds = {
 8004, // Lesser Healing Wave (Rank 1)
 5185, // Healing Touch (Rank 1)
 2050  // Lesser Heal (Rank 1)
};

// Retrieve the spell currently being processed
if (Spell* spell = caster->GetCurrentSpell(CURRENT_GENERIC_SPELL))
{
if (lowRankHealIds.find(spell->m_spellInfo->Id) != lowRankHealIds.end())
{
threat *= 0.5f; // Apply 50% threat reduction
}
}
}
```

Paladins were obviously given less healing threat due to the nature of how they have to run into melee range for Judgment. When you go into melee range the threat threshold is reduced by 20% making it much easier to take aggro. Priest, Druid, and Shaman Lunatics often run in to attack with Fishing Poles, or have enemies run past them that immediately aggro and kill them. As well as simply are unable to perform on the same level as Paladin due to this bottleneck even though they have more healing over time potential.

For these reasons it would be an extreme quality of life balance change for these spells to have the same threat output as Paladin. Thank you.

---
 **Note to Developers**

We are coding these items as a community, it takes a village and I personally have learned quite a lot in how much effort and time this takes. Hence the 1100+ thread edits and easily 50+ Hours we've put in. We are doing it in phases as we work down the forum thread.

All items are coded via a Spoiler under each item, including a picture of the model we choose.

However please note that obviously this won't include ****Entry ID's**** and whatever ****Flag ID**** is used for these to be ****Lunatic Exclusive****. Those would have to be handled by you all of course unless we learn what our Flag ID is.

I would also like to add that aside from learning how to code some by making a template for reference, ****AI was NOT used AT ALL**** for any of these item names, flavor texts, model choices, or stat spreads. ****It was all done via conversation amongst the community**** with many people inputting what they think is best.

One last comment, we're new to a lot of this and New Spell IDs in particular are a lot more complicated it seems. We have included them however please feel free to double check those in particular.

Thank you all so much we are only trying to help.

---
![Image](https://i.imgur.com/6TvMMAj.jpeg)
![Image](https://i.imgur.com/gm3Ewfn.png)
---
 **Ragefire Chasm 1-2 Hours**

 ****Oggleflint:****
 **The Blazing Pan**
Mace 4.2 DPS, 6-9 Damage, 1.8 Speed.
"Don't be surprised if your enemies end up well-done." ****Changes****
Quality: **2**

 ****Taragaman the Hungerer:****
 **Cultist's Firestick**
Wand 4.4 DPS, 5-11 Damage, 1.8 Speed.
"A crude wand once wielded by a member of the Burning Blade." ****Changes****
Quality: **2**

 ****Jergosh the Invoker:****
 **Ash-Covered Tunic**
Cloth Chest 26 Armor, 1 Stamina.
Add 2 Spell Damage, 1% Spell Hit.
"Looks like this belonged to someone who made it this far... but didn't make it out." ****Changes****
Quality: **3**
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2: **23727**
spelltrigger_2: **1**

 ****Notes:****
- Not sure why the reluctance on Spell Hit or Spell Damage, Casters are much weaker currently.

 ****Bazzalan:****
 **Fiery Cloak**
Cape 10 Armor, 1 Stamina, 1 Fire Resist.
Remove 1 Stamina, Add 1% Hit.
"Scorched by the fires and covered in ashes." ****Changes****
Quality: **3**
stat_type1:
stat_value1:
spellid_1: **15464**
spelltrigger_1: **1**

 ****Notes:****
- We already have an absurd amount of Stamina. This was an odd choice.

Hit items stay relevant for the entirety of progression remaining a reason to come back.
---
![Image](https://i.imgur.com/SJPFN9E.jpeg)
---
 **Frostmane Hollow**

 ****Tan'sha the Sleek and Handler Oboka:****
 **Frostmane's Fury**
Necklace 2 Attack Power.
"It appears to be a tooth from a leopard, or perhaps a tiger cub?" Troll Tribal Necklace Model
![Image](https://i.imgur.com/udzAI8e.jpeg)
class: **4**
subclass: **0**
name: **Frostmane's Fury**
displayid: **9860**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **245**
InventoryType: **2**
ItemLevel: **35**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It appears to be a tooth from a leopard, or perhaps a tiger cub?"**
MaxDurability:
maxcount: **1**

 ****Notes:****
- Flavor Text in reference of Snow Leopards in Dun Morogh dropping White Tiger Cubs.

 ****Battlemaster Ubukazl:****
 **Berserker's Tomahawk**
Thrown Weapon 5.8 DPS, 9-13 Damage, 1.9 Speed, 1 Strength, 1 Spirit.
"The Frostmanes believe the heat is in the tools."  Sharp Throwing Axe Model
![Image](https://i.imgur.com/iHmp9qd.png)
class: **2**
subclass: **16**
Sheath: **0**
name: **Berserker's Tomahawk**
displayid: **20782**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **416**
InventoryType: **25**
ItemLevel: **5**
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2: **6**
stat_value2: **1**
dmg_min1: **9**
dmg_max1: **13**
armor:
delay: **1900**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
range_mod: **100**
ammo_type: **4**
description:**"The Frostmanes believe the heat is in the tools."**
MaxDurability:**400**

 ****Notes:****
- You can't scope a Throwing Weapon so the DPS is appropriate.

- For reference a Scoped Defias Longbow is 7.5 DPS.

 ****Kan'za the Seer:****
 **Kan'za's Skinner**
Dagger 2.8 DPS, 1.4 Speed, 1% Spell Crit, Requires 50 Skinning.
"It appears to be coated in frosty flesh.'" Harpy Skinner Model
![Image](https://i.imgur.com/hX3CntV.jpeg)
class: **2**
subclass: **15**
Sheath: **3**
name: **Kan'za's Skinner**
displayid: **20411**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **679**
InventoryType: **21**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **3**
dmg_max1: **5**
armor:
delay: **1400**
spellid_1: **23765**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
RequiredSkill: **393**
RequiredSkillRank: **50**
TotemCategory: **1**
description:**"It appears to be coated in frosty flesh.'"**
MaxDurability:**25**

 ****Notes:****
- It would be a better Swap Weapon when you need an Offhand but worse DPS than the Wailing Caverns Staff.

- This model is extremely unique and only used on that Quest Reward. Its a Blue Skinning Knife.

 ****Hailar the Frigid:****
Drops one of the following:

 **Frostbound Breastplate**
Add Mail Chest 72 Armor, 1 Stamina, 1 Strength, 1% Hit.
"The biting cold only strengthens your resolve." Formidable Chestpiece Model
![Image](https://i.imgur.com/Gd9gCdd.png)
class: **4**
subclass: **3**
name: **Frostbound Breastplate**
displayid: **27212**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **683**
InventoryType: **5**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
stat_type2: **4**
stat_value2: **1**
dmg_min1:
dmg_max1:
armor: **72**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The biting cold only strengthens your resolve."**
MaxDurability: **65**

 ****Notes:****
- Removed the Mail Chest from Smite, this is more appropriate.

 **Frost-Tipped Pike**
Add Polearm 2.4 DPS, 7-11 Damage, 3.80 Speed, Chance on hit: Target's movement slowed by 30% and increasing the time between attacks by 25% for 5 sec.
"You be friends with the elements now." Ice Barbed Spear Model
![Image](https://i.imgur.com/2FrEbsw.png)
class: **2**
subclass: **6**
Sheath: **1**
name: **Frost-Tipped Pike**
displayid: **31613**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **1298**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **7**
dmg_max1: **11**
armor:
delay: **3800**
spellid_1: **20005**
spelltrigger_1: **2**
spellid_2:
spelltrigger_2:
spellppmRate_1: **1**
bonding: **1**
description: **"You be friends with the elements now."**
MaxDurability: **60**

 ****Notes:****
- DPS is extremely low to facilitate having the Icy Chill Proc.

- Flavor Text is a reword from the amazing trailer. "The Frostmanes be friends with the elements now."

- It's come to our attention that Polearm Training requires Level 5. Recommend removing the Polearm Training Level Requirement. It wouldn't hurt anything.

- There is already a Polearm lower than Level 5 in the game to support this change: <https://database.turtlecraft.gg/?item=3367>

We're looking forward to hopefully being able to experience this content.
---
![Image](https://i.imgur.com/hb6poxD.jpeg)
---
 **The Deadmines 3-5 Hours in Full 10 Man**

 ****Jared Voss:****
 **Defias Longbow**
Bow 3.1 DPS, 6-9 Damage, 2.4 Speed. ****Changes****
Quality: **2**

 ****Notes:****
- Thank you for this fine addition. Model and name are good however the lack of flavor text is a little sad.

- Minor concerns about the overuse of the word Defias on items now with this, the Cape, and Chest.

 ****Keeping the following for records:****
 **Poisoner's Longbow**
Time Frozen Bow Model
![Image](https://i.imgur.com/eR5TWHG.png)
class: **2**
subclass: **2**
Sheath: **0**
name: **Poisoner's Longbow**
displayid: **20552**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **46**
InventoryType: **15**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **6**
dmg_max1: **9**
armor:
delay: **2400**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:**"That's not from Stranglethorn!"**
MaxDurability:**25**

 ****Rhakzor:****
 **Defias Mage Drape**
 10 Armor, 1 Intellect.
"A simple cloak worn by novice spellcasters of the Defias Brotherhood."

 ****Miner Johnson (Rare):****
 **Lampblack Buckler**
Add Shield 66 Armor, 1 Block, 2 Spirit, Requires 50 Mining.
"Coal dust has permanently sealed the sifting mesh." Shield of Thorsen Model
![Image](https://i.imgur.com/UWS2CXy.png)
class: **4**
subclass: **6**
Sheath: **4**
name: **Lampblack Buckler**
displayid: **28742**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **49**
InventoryType: **14**
ItemLevel: **5**
RequiredLevel:
stat_type1: **6**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **66**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
RequiredSkill: **186**
RequiredSkillRank: **50**
description: **"Coal dust has permanently sealed the sifting mesh."**
MaxDurability: **35**
block: **1**

 ****Sneed:****
 **Fractured Sword**
Increase DPS to 4.0 to get closer to The Blazing Pan.
Add 2 Attack Power.
"The blade's chipped. So was its owner." ****Changes****
Quality: **2**
dmg_min1: **13**
dmg_max1: **15**
spellid_1: **9136**
spelltrigger_1: **1**

 ****Masterpiece Harvester:****
 **Gearcatcher Grips**
Add Leather Gloves 26 Armor, 2 Attack Power, 1% Hit.
"If it jams, do NOT reach in."    Ranger Gloves Model
![Image](https://i.imgur.com/DlAgIfb.png)
class: **4**
subclass: **2**
name: **Gearcatcher Grips**
displayid: **15018**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **32**
InventoryType: **10**
ItemLevel: **25**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **26**
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2: **15464**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"If it jams, do NOT reach in."**
MaxDurability: **20**

 ****Gilnid:****
 **Lavishly Gilded Mitts**
Add Cloth Gloves 12 Armor, 2 Spell Damage, 1% Spell Hit.
"There's a cutout on one of the fingers for a ring."   Packmaster Gloves Model
![Image](https://i.imgur.com/qPgAfnu.png)
class: **4**
subclass: **1**
name: **Lavishly Gilded Mitts**
displayid: **17186**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **32**
InventoryType: **10**
ItemLevel: **25**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **12**
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2: **23727**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"There's a cutout on one of the fingers for a ring."**
MaxDurability: **18**

 ****Notes:****
- The Glove Model is literally what Gilnid is wearing.

 ****Smite:****
 **Smite's Mighty Fishing Pole**
Add Fishing Rod 2.0 DPS, 4-8 Damage, 3.0 Speed, +5 Fishing Skill.
"I'll have to improvise!" The Murkfisher Model
![Image](https://i.imgur.com/1zpkaLY.png)
class: **2**
subclass: **20**
Sheath: **1**
name: **Smite's Mighty Fishing Pole**
displayid: **20731**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **23**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **4**
dmg_max1: **8**
armor:
delay: **3000**
spellid_1: **7823**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"I'll have to improvise!"**
MaxDurability: **25**

 ****Notes:****
- Recently lowered the damage of this to 2.0 DPS from 2.8 DPS. It's more appropriate as it doesn't miss and might of been too strong originally.

Including this Chestpiece here for Records however I moved it to Frostmane Hollow.
 **First Mate's Hauberk**
Add Mail Chest 72 Armor, 1 Stamina, 1 Strength, 1% Hit.
"You there, check out that poise!"
Runed Copper Breastplate Model
![Image](https://i.imgur.com/6rBIbpL.png)
class: **4**
subclass: **3**
name: **First Mate's Hauberk**
displayid: **25848**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **83**
InventoryType: **5**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
stat_type2: **4**
stat_value2: **1**
dmg_min1:
dmg_max1:
armor: **72**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"You there, check out that poise!"**
MaxDurability: **65**

 ****Cookie:****
 **Murloc Eye on a String**
 1 Spirit.
"Ewww, you're disgusting!"  ****Notes:****
- Thank you for this fine addition, 1 Spirit is enough.

- The reason we asked for 2 Spirit was because it would be more sought after for Healers/Troll Warrior compared to the 1 Stamina PVP Necklace.

 ****Captain Greenskin:****
 **The Greenskin**
Add Cape 7 Armor, 1% Spell Hit.
"Was.. was he wearing a cloak?" Venomshroud Cape Model
![Image](https://i.imgur.com/qdKsgWx.png)
class: **4**
subclass: **1**
name: **The Greenskin**
displayid: **26201**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **32**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **7**
delay:
spellid_1: **23727**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Was.. was he wearing a cloak?"**
MaxDurability:

 ****Edwin Vancleef:****
Drops Both of the following:

 **Broken Stonemason's Guild Signet**
 1 Spirit.
"Worn by those who built Stormwind and later vowed to unmake it."

 **Tattered Defias Rags**
Leather Chest 38 Armor, 1 Stamina, 2 Attack Power.
Add 1% Hit.
"Frayed remnants of a revolt, stained with blood and betrayal."  ****Changes****
Quality: **3**
spellid_2: **15464**
spelltrigger_2: **1**

 ****Notes:****
- The current state of this item is just worse than the 1 Agility Chest off Anacondra.

- It currently only drops instead of the Ring not both, 3 Vancleef 2-4 Hour Raids and we've only seen 1 Chest.

- The model change is quite sad removing the arms, its invisible when wearing a tabard and was previously a reskin for Blackened Defias Chest and Tunic of Westfall. It would have been very appropriate compared to other well known Twink items. displayid: **27877**

- Throwing in a positive to say the flavor text is very cool. :)

- Recommend if you're concerned about the power of these items drop everything but the Hit. However would like to add this is an end boss that takes hours to get to.

- The only reason we had the 1 Stamina on all Chests was because when we get Hit Boots we lose 12 Stamina when we drop Fishing Boots, so it would help offset that some. Aside from the fact that it's also a Chest piece, typically the most stat heavy.

 ****Keeping the following for records:****
 **Rags of the Brotherhood**
Rigid Tunic Model
![Image](https://i.imgur.com/f4P1Ozx.png)
class: **4**
subclass:**2**
name: **Rags of the Brotherhood**
displayid: **27877**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **72**
InventoryType: **5**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **38**
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2: **15464**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"There's a letter in the pocket, too damaged to read."**
MaxDurability: **55**

This would give us proper item progression and help the economy so we would have to get enchants repeatedly.
This is only allows for 3% Hit prior to Wailing Caverns.
---
![Image](https://i.imgur.com/BVkMbnI.png)
---
 **Wailing Caverns 4-6 Hours in Full 10 Man**

 ****Lady Anacondra:****
 **Snakeswarm Robe**
Cloth Chest 21 Armor, 1 Intellect. ****Changes****
bonding: **1**
description: **"It attracts small snakes, you're not sure if it's for safety or food."**

 ****Notes:****
- No Flavor Text :o

 **Serpent Scale Mantle**
Leather Chest 40 Armor, 1 Agility.  ****Changes****
description: **"Intended for Fang initiates."**

 ****Notes:****
- No Flavor Text :o

 **Cobra-Eye Greatstaff**
Add Staff 3.8 DPS 2 Spell Damage, 3.2 Speed, Chance on landing a damaging spell to deal 5-7 Nature Damage. 10% Chance.
"Technically, she isn't using it anymore..." Living Root Model
![Image](https://i.imgur.com/2V4AelS.jpeg)
class: **2**
subclass: **10**
Sheath: **2**
name: **Cobra-Eye Greatstaff**
displayid: **20336**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **97**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **10**
dmg_max1: **14**
armor:
delay: **3200**
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2: **New Proc Spell ID Below**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Technically, she isn't using it anymore..."**
MaxDurability: **55**

 ****New Spell ID****
ID: **New Spell ID Entry Here**
Name: **Charged Bolt**
School: **4**
Attributes: **384**
Effect1: **2**
Base Points: **4**
Die Sides: **3**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
ID: **New Proc Spell ID Entry Here**
Name: **Charged Bolt Trigger**
Attributes: **384**
Effect1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
Proc Chance: **10**
Proc Flags: **65536**

 ****Notes:****
- Perhaps make this a 25% Drop.

- The same Proc Spell ID is used in Gnomeregan on a Dagger.

 ****Kresh:****
 **Kresh's Plastron**
Add 70 Armor, 2 Block, 3 Stamina Shield.
"The back is twice as hard, but twice as heavy." Headhunter's Buckler Model
![Image](https://i.imgur.com/k87MKP5.jpeg)
class: **4**
subclass: **6**
Sheath: **4**
name: **Kresh's Plastron**
displayid: **28269**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **68**
InventoryType: **14**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **3**
dmg_min1:
dmg_max1:
armor: **70**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The back is twice as hard, but twice as heavy."**
MaxDurability: **35**
block: **2**

 ****Notes:****
- Furbolg Pouch from Timbermaw Rep is 10 Stamina, with a 7 Stamina Enchant this would allow Shield users to have a Shield option with the same Stats.

 ****Lord Cobrahn:****
 **Leggings of the Cuspid**
Add Leather Legs 34 Armor, 2 Attack Power, 1% Hit.
“A lesser fang, worn with greater ambition.”    Arachnidian Legguards Model
![Image](https://i.imgur.com/Cyar25P.jpeg)
class: **4**
subclass: **2**
name: **Leggings of the Cuspid**
displayid: **26212**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **32**
InventoryType: **7**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **34**
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2: **15464**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **“A lesser fang, worn with greater ambition.”**
MaxDurability: **20**

 ****Deviate Faerie Dragon (Rare):****
 **Feyscale Steppers**
Add Cloth Boots 20 Armor, 2 Spell Damage, 1% Spell Hit.
"They seem to move a half-step before you do.”   Celestial Slippers Model
![Image](https://i.imgur.com/Z8R8Rbc.jpeg)
class: **4**
subclass: **1**
name: **Feyscale Steppers**
displayid: **26261**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **32**
InventoryType: **8**
ItemLevel: **25**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **20**
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2: **23727**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"They seem to move a half-step before you do."**
MaxDurability: **20**

 ****Zandara Windhoof:****
 **Windhoof Gauntlets**
Add Mail Gloves 46 Armor, 1 Strength, 1% Hit.
"The last Matriarch of the Windhoof clan was obsessed with the secrets still lost to the caverns." Chromatic Gauntlets Model
![Image](https://i.imgur.com/wvwh7A7.jpeg)
class: **4**
subclass: **3**
name: **Windhoof Gauntlets**
displayid: **31680**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **47**
InventoryType: **10**
ItemLevel: **25**
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **46**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The last Matriarch of the Windhoof clan was obsessed with the secrets still lost to the caverns."**
MaxDurability: **20**

 ****Lord Pythas:****
 **Serpentbloom**
Add 1h Mace 2.8 DPS, 1.8 Speed, 2 Healing, 2% Meditation, Requires 50 Herbalism.
"Blooming with gentle anticipation..." Venomspitter Model
![Image](https://i.imgur.com/SB2w1sL.jpeg)
class: **2**
subclass: **4**
Sheath: **3**
name: **Serpentbloom**
displayid: **24740**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **82**
InventoryType: **21**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **4**
dmg_max1: **6**
armor:
delay: **1800**
spellid_1: **7675**
spelltrigger_1: **1**
spellid_2: **51252**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
RequiredSkill: **182**
RequiredSkillRank: **50**
description: **"Blooming with gentle anticipation..."**
MaxDurability: **25**

 ****Skum:****
 **Barely-Charged Leggings**
Add Cloth Legs 26 Armor, 2 Spell Damage, 1% Spell Hit.
"Now these have potential."   Aurora Pants Model
![Image](https://i.imgur.com/V5DtLJo.jpeg)
class: **4**
subclass: **1**
name: **Barely-Charged Leggings**
displayid: **14659**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **56**
InventoryType: **7**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **26**
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2: **23727**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Now these have potential."**
MaxDurability: **35**

 ****Vangros:****
 **Enraging Footwraps**
Add Leather Boots 28 Armor, 2 Attack Power, 1% Hit.
"Stitched together with primal rage."    Scaled Leather Boots Model
![Image](https://i.imgur.com/qH9BVQO.jpeg)
class: **4**
subclass: **2**
name: **Enraging Footwraps**
displayid: **11581**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **32**
InventoryType: **8**
ItemLevel: **25**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **28**
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2: **15464**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Stitched together with primal rage."**
MaxDurability: **20**

 ****Lord Serpentis:****
 **Savage Stompers**
Add Mail Boots 52 Armor, 1 Strength, 1% Hit.
"What does it mean to be a lord? To lead, to rule, or to have the savagery to stomp all who oppose you?" Swiftdart Battleboots Model
![Image](https://i.imgur.com/LLa8Z4y.jpeg)
class: **4**
subclass: **3**
name: **Savage Stompers**
displayid: **23901**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **47**
InventoryType: **8**
ItemLevel: **25**
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **52**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"What does it mean to be a lord? To lead, to rule, or to have the savagery to stomp all who oppose you?"**
MaxDurability: **30**

 ****Verdan the Everliving:****
Drops Both of the following:

 **Living Sprig on a String**
Add Bow 2.3 DPS, 2.4 Speed, 1% Dodge.
"The string is slimy. Why does it smell like murloc?" Thornflinger Model
![Image](https://i.imgur.com/1Zrwqmc.jpeg)
class: **2**
subclass: **2**
Sheath: **0**
name: **Living Sprig on a String**
displayid: **27492**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **52**
InventoryType: **15**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **5**
dmg_max1: **6**
armor:
delay: **2400**
spellid_1: **13669**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:**"The string is slimy. Why does it smell like murloc?"**
MaxDurability:**25**

 ****Notes:****
- Tank Bow for Troll Warriors.

 **Everliving Lotus**
Class: Druid
Use: Teaches Mark of the Wild (Rank 2).
"It appears to be wavering with irregular movement."
Black Lotus Model
![Image](https://i.imgur.com/1eps7a3.jpeg)
class: **9**
subclass: **0**
AllowableClass: **1024**
name: **Everliving Lotus**
displayid: **24688**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **49**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **5286**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It appears to be wavering with irregular movement."**
MaxDurability:

 ****Notes:****
- <https://database.turtlecraft.gg/?spell=5286>

 ****Mutanus the Devourer:****
Drops 2 of the following:

 **Devourer's Crook**
Add Staff 4.6 DPS, 9–26 Damage, 3.80 Speed, 2 Agility.
"The toothmarks stop just short of the grip. Convenient.” Wildstaff Model
![Image](https://i.imgur.com/h5EfMU4.jpeg)
class: **2**
subclass: **10**
Sheath: **2**
name: **Devourer's Crook**
displayid: **24014**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **98**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
stat_type1: **3**
stat_value1: **2**
dmg_min1: **9**
dmg_max1: **26**
armor:
delay: **3800**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The toothmarks stop just short of the grip. Convenient.”**
MaxDurability: **60**

 **Mutant Scale Legplates**
Add Mail Legs 62 Armor, 1 Strength, 1% Hit.
"Twisted and slimy, these scales have been reinforced by the nightmare." Scaled Sand Reaver Leggings Model
![Image](https://i.imgur.com/FiCxclT.jpeg)
class: **4**
subclass: **3**
name: **Mutant Scale Legplates**
displayid: **34266**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **47**
InventoryType: **7**
ItemLevel: **5**
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **62**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Twisted and slimy, these scales have been reinforced by the nightmare."**
MaxDurability: **45**

 **Broken Bottle of Port**
Add Unique Trinket 2% Dodge.
"Signed, 'Best wishes, Baron Revilgaz'" 99-Year-Old Port Model
![Image](https://i.imgur.com/ZxZY8qz.jpeg)
class: **4**
subclass: **0**
name: **Broken Bottle of Port**
displayid: **18079**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **86**
InventoryType: **12**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **13670**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Signed, 'Best wishes, Baron Revilgaz'"**
MaxDurability:
maxcount: **1**

 **Shallow Fathom Ring**
Add Unique Ring 2 Spirit Enchantable.
"There are traces of ooze stuck to the band." Maiden's Circle Model
![Image](https://i.imgur.com/TYyaCaX.jpeg)
class: **4**
subclass: **0**
name: **Shallow Fathom Ring**
displayid: **9833**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **52**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **6**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"There are traces of ooze stuck to the band."**
MaxDurability:
maxcount: **1**

We think these would be appropriate rewards for Wailing Caverns.
This is only allows for 5% Hit prior to Shadowfang Keep.
---
![Image](https://i.imgur.com/DQvKdXa.jpeg)
---
 **Warsong Gulch Reputation Rewards:**
 ****Would like to add for the sake of PVP Gear:****

 ****Note to Developers:****
- It appears PVP Items don't have Reputation Requirements on them, and that the Vender allows access to the items once you hit the requirements instead. We included Reputation Requirements on these items anyway, however the best way would be to leave them off and do it like the rest of them.

 ****Alliance Honored:****
 **Caretaker's Cape**
Add Cape 8 Armor 1 Stamina, 2 Healing. Caretaker's Cape Model
![Image](https://i.imgur.com/TRlG6Xv.jpeg)
class: **4**
subclass: **1**
name: **Caretaker's Cape**
displayid: **32067**
Quality: **3**
Flags:
BuyPrice: **2250**
SellPrice: **530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **8**
delay:
spellid_1: **7675**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:

 **Lorekeeper's Ring**
Add Unique Ring 2 Spell Damage. Lorekeeper's Ring Model
![Image](https://i.imgur.com/hEqMiUd.jpeg)
class: **4**
subclass: **0**
name: **Lorekeeper's Ring**
displayid: **28812**
Quality: **3**
Flags:
BuyPrice: **10000**
SellPrice: **2500**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **5**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**

 **Protector's Band**
Add Unique Ring 1 Strength. Protector's Band Model
![Image](https://i.imgur.com/KTrD3fF.jpeg)
class: **4**
subclass: **0**
name: **Protector's Band**
displayid: **9832**
Quality: **3**
Flags:
BuyPrice: **10000**
SellPrice: **2500**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **5**
stat_type1: **4**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**

 **Sentinel's Medallion**
Add Unique Neck 1 Stamina. Sentinel's Medallion Model
![Image](https://i.imgur.com/Zcu8mMU.jpeg)
class: **4**
subclass: **0**
name: **Sentinel's Medallion**
displayid: **32073**
Quality: **3**
Flags:
BuyPrice: **10000**
SellPrice: **2500**
InventoryType: **2**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**

 ****Alliance Revered:****
 **Sentinel's Blade**
Add Dagger 4.6 DPS, 1.7 Speed, 1 Stamina. Sentinel's Blade Model
![Image](https://i.imgur.com/DwSDCIu.jpeg)
class: **2**
subclass: **15**
Sheath: **3**
name: **Sentinel's Blade**
displayid: **32075**
Quality: **3**
Flags:
BuyPrice: **4563**
SellPrice: **913**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **5**
dmg_max1: **11**
armor:
delay: **1700**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Protector's Sword**
Add Sword 4.6 DPS, 2.7 Speed, 1 Stamina. Protector's Sword Model
![Image](https://i.imgur.com/7AwYBSw.jpeg)
class: **2**
subclass: **7**
Sheath: **3**
name: **Protector's Sword**
displayid: **32077**
Quality: **3**
Flags:
BuyPrice: **4563**
SellPrice: **913**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **9**
dmg_max1: **16**
armor:
delay: **2700**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Lorekeeper's Staff**
Add Staff 4.6 DPS, 2.9 Speed, 1 Stamina. Lorekeeper's Staff Model
![Image](https://i.imgur.com/3FM3f4l.jpeg)
class: **2**
subclass: **10**
Sheath: **2**
name: **Lorekeeper's Staff**
displayid: **18289**
Quality: **3**
Flags:
BuyPrice: **12106**
SellPrice: **1521**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **8**
dmg_max1: **19**
armor:
delay: **2900**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **60**

 **Outrunner's Bow**
Add Bow 3.6 DPS, 2.4 Speed, 1 Stamina. Outrunner's Bow Model
![Image](https://i.imgur.com/NgywEBI.jpeg)
class: **2**
subclass: **2**
Sheath: **0**
name: **Outrunner's Bow**
displayid: **32081**
Quality: **3**
Flags:
BuyPrice: **4563**
SellPrice: **913**
InventoryType: **15**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1514**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **6**
dmg_max1: **11**
armor:
delay: **2400**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 ****Horde Honored:****
 **Battle Healer's Cloak**
Add Cape 8 Armor 1 Stamina, 2 Healing. Battle Healer's Cloak Model
![Image](https://i.imgur.com/GWdQA9V.jpeg)
class: **4**
subclass: **1**
name: **Battle Healer's Cloak**
displayid: **32066**
Quality: **3**
Flags:
BuyPrice: **2250**
SellPrice: **530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **8**
delay:
spellid_1: **7675**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:

 **Advisor's Ring**
Add Unique Ring 2 Spell Damage. Advisor's Ring Model
![Image](https://i.imgur.com/od3w5NX.jpeg)
class: **4**
subclass: **0**
name: **Advisor's Ring**
displayid: **30661**
Quality: **3**
Flags:
BuyPrice: **10000**
SellPrice: **2500**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **5**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**

 **Legionnaire's Band**
Add Unique Ring 1 Strength. Legionnaire's Band Model
![Image](https://i.imgur.com/PN2rD2P.jpeg)
class: **4**
subclass: **0**
name: **Legionnaire's Band**
displayid: **29697**
Quality: **3**
Flags:
BuyPrice: **10000**
SellPrice: **2500**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **5**
stat_type1: **4**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**

 **Scout's Medallion**
Add Unique Neck 1 Stamina. Scout's Medallion Model
![Image](https://i.imgur.com/wamSTMx.jpeg)
class: **4**
subclass: **0**
name: **Scout's Medallion**
displayid: **32008**
Quality: **3**
Flags:
BuyPrice: **10000**
SellPrice: **2500**
InventoryType: **2**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**

 ****Horde Revered:****
 **Scout's Blade**
Add Dagger 4.6 DPS, 1.7 Speed, 1 Stamina. Scout's Blade Model
![Image](https://i.imgur.com/BWcfWaF.jpeg)
class: **2**
subclass: **15**
Sheath: **3**
name: **Scout's Blade**
displayid: **32074**
Quality: **3**
Flags:
BuyPrice: **4563**
SellPrice: **913**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **5**
dmg_max1: **11**
armor:
delay: **1700**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Legionnaire's Sword**
Add Sword 4.6 DPS, 2.7 Speed, 1 Stamina. Legionnaire's Sword Model
![Image](https://i.imgur.com/nyIKUEp.jpeg)
class: **2**
subclass: **7**
Sheath: **3**
name: **Legionnaire's Sword**
displayid: **32076**
Quality: **3**
Flags:
BuyPrice: **4563**
SellPrice: **913**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **9**
dmg_max1: **16**
armor:
delay: **2700**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Advisor's Gnarled Staff**
Add Staff 4.6 DPS, 2.9 Speed, 1 Stamina. Advisor's Gnarled Staff Model
![Image](https://i.imgur.com/oIQ6fvW.jpeg)
class: **2**
subclass: **10**
Sheath: **2**
name: **Advisor's Gnarled Staff**
displayid: **20330**
Quality: **3**
Flags:
BuyPrice: **12106**
SellPrice: **1521**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **8**
dmg_max1: **19**
armor:
delay: **2900**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **60**

 **Outrider's Bow**
Add Bow 3.6 DPS, 2.4 Speed, 1 Stamina. Outrider's Bow Model
![Image](https://i.imgur.com/8PcuZ9Z.jpeg)
class: **2**
subclass: **2**
Sheath: **0**
name: **Outrider's Bow**
displayid: **32079**
Quality: **3**
Flags:
BuyPrice: **4563**
SellPrice: **913**
InventoryType: **15**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1515**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1: **6**
dmg_max1: **11**
armor:
delay: **2400**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

Warsong Gulch has rewards for every other bracket, this would bring it in line with other brackets.
---
![Image](https://i.imgur.com/OdDMsBR.jpeg)
---
 **Arathi Basin Reputation Rewards:**
 ****Yes we can que Arathi Basin at the Battlemaster, please add it to the Minimap Button.****
New Add-on enables us to que it anywhere: <https://github.com/JardineWebSolutions/PVPWhen>

 ****Alliance Honored:****
 **Highlander's Cloth Girdle**
Add Cloth Belt 12 Armor, 1 Stamina, 2 Spell Damage. Highlander's Cloth Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **1**
name: **Highlander's Cloth Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **3603**
SellPrice: **720**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1599**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **12**
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **15**

 **Highlander's Leather Girdle**
Add Leather Belt 26 Armor, 1 Stamina, 2 Attack Power. Highlander's Leather Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **2**
name: **Highlander's Leather Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **4520**
SellPrice: **860**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1599**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **26**
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **20**

 **Highlander's Plate Girdle**
Add Mail Belt 42 Armor, 1 Stamina, 1 Strength. Highlander's Plate Girdle Model
![Image](https://i.imgur.com/W8bnrv0.jpeg)
class: **4**
subclass: **3**
name: **Highlander's Plate Girdle**
displayid: **34394**
Quality: **3**
Flags:
BuyPrice: **5030**
SellPrice: **930**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1599**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
stat_type2: **4**
stat_value2: **1**
dmg_min1:
dmg_max1:
armor: **42**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 ****Alliance Revered:****
 **Highlander's Cloth Boots**
Add Cloth Boots 20 Armor, 1 Stamina, Run speed increased slightly. Highlander's Cloth Boots Model
![Image](https://i.imgur.com/7Tf0Gkn.jpeg)
class: **4**
subclass: **1**
name: **Highlander's Cloth Boots**
displayid: **34240**
Quality: **3**
Flags:
BuyPrice: **3603**
SellPrice: **720**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1599**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **20**
delay:
spellid_1: **23990**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Highlander's Leather Boots**
Add Leather Boots 28 Armor, 1 Stamina, Run speed increased slightly. Highlander's Leather Boots Model
![Image](https://i.imgur.com/nmKdjTB.jpeg)
class: **4**
subclass: **2**
name: **Highlander's Leather Boots**
displayid: **34247**
Quality: **3**
Flags:
BuyPrice: **4520**
SellPrice: **860**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1599**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **28**
delay:
spellid_1: **23990**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Highlander's Plate Greaves**
Add Mail Boots 52 Armor, 1 Stamina, Run speed increased slightly. Highlander's Plate Greaves Model
![Image](https://i.imgur.com/Cu7Rpq7.jpeg)
class: **4**
subclass: **3**
name: **Highlander's Plate Greaves**
displayid: **34395**
Quality: **3**
Flags:
BuyPrice: **5030**
SellPrice: **930**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1599**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **52**
delay:
spellid_1: **23990**
spelltrigger_1:**1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 ****Horde Honored:****
 **Defiler's Cloth Girdle**
Add Cloth Belt 12 Armor, 1 Stamina, 2 Spell Damage. Defiler's Cloth Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **1**
name: **Defiler's Cloth Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **3603**
SellPrice: **720**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1598**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **12**
delay:
spellid_1: **9393**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **15**

 **Defiler's Leather Girdle**
Add Leather Belt 26 Armor, 1 Stamina, 2 Attack Power. Defiler's Leather Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **2**
name: **Defiler's Leather Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **4520**
SellPrice: **860**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1598**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **26**
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **20**

 **Defiler's Plate Girdle**
Add Mail Belt 42 Armor, 1 Stamina, 1 Strength. Defiler's Plate Girdle Model
![Image](https://i.imgur.com/W8bnrv0.jpeg)
class: **4**
subclass: **3**
name: **Defiler's Plate Girdle**
displayid: **34394**
Quality: **3**
Flags:
BuyPrice: **5030**
SellPrice: **930**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel:
RequiredReputationFaction: **1598**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **1**
stat_type2: **4**
stat_value2: **1**
dmg_min1:
dmg_max1:
armor: **42**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 ****Horde Revered:****
 **Defiler's Cloth Boots**
Add Cloth Boots 20 Armor, 1 Stamina, Run speed increased slightly. Defiler's Cloth Boots Model
![Image](https://i.imgur.com/7Tf0Gkn.jpeg)
class: **4**
subclass: **1**
name: **Defiler's Cloth Boots**
displayid: **34240**
Quality: **3**
Flags:
BuyPrice: **3603**
SellPrice: **720**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1598**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **20**
delay:
spellid_1: **23990**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Defiler's Leather Boots**
Add Leather Boots 28 Armor, 1 Stamina, Run speed increased slightly. Defiler's Leather Boots Model
![Image](https://i.imgur.com/nmKdjTB.jpeg)
class: **4**
subclass: **2**
name: **Defiler's Leather Boots**
displayid: **34247**
Quality: **3**
Flags:
BuyPrice: **4520**
SellPrice: **860**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1598**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **28**
delay:
spellid_1: **23990**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Defiler's Plate Greaves**
Add Mail Boots 52 Armor, 1 Stamina, Run speed increased slightly. Defiler's Plate Greaves Model
![Image](https://i.imgur.com/Cu7Rpq7.jpeg)
class: **4**
subclass: **3**
name: **Defiler's Plate Greaves**
displayid: **34395**
Quality: **3**
Flags:
BuyPrice: **5030**
SellPrice: **930**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel:
RequiredReputationFaction: **1598**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **52**
delay:
spellid_1: **23990**
spelltrigger_1:**1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 ****Note to Developers:**** The original design of these items seemed to be a bit outdated.
For both 1-9 and 10-19 it didn't quite seem appropriate to create these with Class Restrictions as it would be practically the same items with additional Paladin and Shaman Versions (Lamellar, Lizardhide).

Doing Class Restrictions would also restrict certain classes (Druid, Shaman) from being able to use the Cloth Belt for Spell Damage. After deliberation with the community, this decision to exclude Class Restrictions was done on the premise that it would be less work and cover more bases at the same time.

Best in Slot would consist of items from every dungeon, Reputation Cape for Healers, Weapons, Belt for All Classes and Boots for PVP. This would make the challenge completely rounded.

 **10-19 Arathi Basin Reputation Rewards:**
 ****Including 10-19 to help facilitate Arathi Basin being added to both our brackets.****

 ****Alliance Honored:****
 **Highlander's Cloth Girdle**
Add Cloth Belt 44 Armor, 2 Stamina, 2 Intellect, 6 Spell Damage. Highlander's Cloth Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **1**
name: **Highlander's Cloth Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **4203**
SellPrice: **1020**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel: **18**
RequiredReputationFaction: **1599**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **2**
stat_type2: **5**
stat_value2: **2**
dmg_min1:
dmg_max1:
armor: **44**
delay:
spellid_1: **9396**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Highlander's Leather Girdle**
Add Leather Belt 45 Armor, 3 Stamina, 12 Attack Power. Highlander's Leather Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **2**
name: **Highlander's Leather Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **6020**
SellPrice: **1260**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel: **18**
RequiredReputationFaction: **1599**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **3**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **9141**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Highlander's Plate Girdle**
Add Mail Belt 55 Armor, 3 Stamina, 5 Strength. Highlander's Plate Girdle Model
![Image](https://i.imgur.com/W8bnrv0.jpeg)
class: **4**
subclass: **3**
name: **Highlander's Plate Girdle**
displayid: **34394**
Quality: **3**
Flags:
BuyPrice: **7030**
SellPrice: **1430**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel: **18**
RequiredReputationFaction: **1599**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **3**
stat_type1: **4**
stat_value1: **5**
dmg_min1:
dmg_max1:
armor: **55**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 ****Alliance Revered:****
 **Highlander's Cloth Boots**
Add Cloth Boots 42 Armor, 2 Stamina, 4 Spell Damage, Run speed increased slightly. Highlander's Cloth Boots Model
![Image](https://i.imgur.com/7Tf0Gkn.jpeg)
class: **4**
subclass: **1**
name: **Highlander's Cloth Boots**
displayid: **34240**
Quality: **3**
Flags:
BuyPrice: **5803**
SellPrice: **1220**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel: **18**
RequiredReputationFaction: **1599**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **42**
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2: **23990**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Highlander's Leather Boots**
Add Leather Boots 52 Armor, 3 Stamina, 2 Agility, Run speed increased slightly. Highlander's Leather Boots Model
![Image](https://i.imgur.com/nmKdjTB.jpeg)
class: **4**
subclass: **2**
name: **Highlander's Leather Boots**
displayid: **34247**
Quality: **3**
Flags:
BuyPrice: **6520**
SellPrice: **1460**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel: **18**
RequiredReputationFaction: **1599**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **3**
stat_type1: **3**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **52**
delay:
spellid_1: **23990**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Highlander's Plate Greaves**
Add Mail Boots 66 Armor, 3 Stamina, 2 Strength, Run speed increased slightly. Highlander's Plate Greaves Model
![Image](https://i.imgur.com/Cu7Rpq7.jpeg)
class: **4**
subclass: **3**
name: **Highlander's Plate Greaves**
displayid: **34395**
Quality: **3**
Flags:
BuyPrice: **8420**
SellPrice: **1830**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel: **18**
RequiredReputationFaction: **1599**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **3**
stat_type1: **4**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **66**
delay:
spellid_1: **23990**
spelltrigger_1:**1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 ****Horde Honored:****
 **Defiler's Cloth Girdle**
Add Cloth Belt 44 Armor, 2 Stamina, 2 Intellect, 6 Spell Damage. Defiler's Cloth Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **1**
name: **Defiler's Cloth Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **4203**
SellPrice: **1020**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel: **18**
RequiredReputationFaction: **1598**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **2**
stat_type2: **5**
stat_value2: **2**
dmg_min1:
dmg_max1:
armor: **44**
delay:
spellid_1: **9396**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Defiler's Leather Girdle**
Add Leather Belt 45 Armor, 3 Stamina, 12 Attack Power. Defiler's Leather Girdle Model
![Image](https://i.imgur.com/NzEN7xX.jpeg)
class: **4**
subclass: **2**
name: **Defiler's Leather Girdle**
displayid: **34244**
Quality: **3**
Flags:
BuyPrice: **6020**
SellPrice: **1260**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel: **18**
RequiredReputationFaction: **1598**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **3**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **9141**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **25**

 **Defiler's Plate Girdle**
Add Mail Belt 55 Armor, 3 Stamina, 5 Strength. Defiler's Plate Girdle Model
![Image](https://i.imgur.com/W8bnrv0.jpeg)
class: **4**
subclass: **3**
name: **Defiler's Plate Girdle**
displayid: **34394**
Quality: **3**
Flags:
BuyPrice: **7030**
SellPrice: **1430**
InventoryType: **6**
ItemLevel: **5**
RequiredLevel: **18**
RequiredReputationFaction: **1598**
RequiredReputationRank: **5**
stat_type1: **7**
stat_value1: **3**
stat_type1: **4**
stat_value1: **5**
dmg_min1:
dmg_max1:
armor: **55**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 ****Horde Revered:****
 **Defiler's Cloth Boots**
Add Cloth Boots 42 Armor, 2 Stamina, 4 Spell Damage, Run speed increased slightly. Defiler's Cloth Boots Model
![Image](https://i.imgur.com/7Tf0Gkn.jpeg)
class: **4**
subclass: **1**
name: **Defiler's Cloth Boots**
displayid: **34240**
Quality: **3**
Flags:
BuyPrice: **5803**
SellPrice: **1220**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel: **18**
RequiredReputationFaction: **1598**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **42**
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2: **23990**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Defiler's Leather Boots**
Add Leather Boots 52 Armor, 3 Stamina, 2 Agility, Run speed increased slightly. Defiler's Leather Boots Model
![Image](https://i.imgur.com/nmKdjTB.jpeg)
class: **4**
subclass: **2**
name: **Defiler's Leather Boots**
displayid: **34247**
Quality: **3**
Flags:
BuyPrice: **6520**
SellPrice: **1460**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel: **18**
RequiredReputationFaction: **1598**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **3**
stat_type1: **3**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **52**
delay:
spellid_1: **23990**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

 **Defiler's Plate Greaves**
Add Mail Boots 66 Armor, 3 Stamina, 2 Strength, Run speed increased slightly. Defiler's Plate Greaves Model
![Image](https://i.imgur.com/Cu7Rpq7.jpeg)
class: **4**
subclass: **3**
name: **Defiler's Plate Greaves**
displayid: **34395**
Quality: **3**
Flags:
BuyPrice: **8420**
SellPrice: **1830**
InventoryType: **8**
ItemLevel: **35**
RequiredLevel: **18**
RequiredReputationFaction: **1598**
RequiredReputationRank: **6**
stat_type1: **7**
stat_value1: **3**
stat_type1: **4**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor: **66**
delay:
spellid_1: **23990**
spelltrigger_1:**1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **30**

This would help enable Arathi Basin for both our brackets with proper rewards.

---
![Image](https://i.imgur.com/IQGGZjw.png)
---
 **Shadowfang Keep 10 Man**
 ****Future Suggestion:****

 ****Note to Developers:****
- Shadowfang Keep is most likely our last 10 Man and will be brutally unforgiving.

- We designed the items with that in mind. It will be our Naxxaramas of 10 Man Content.

 ****Rethilgore:****
 **Rugged Drape**
Add Cape 12 Armor 2 Stamina 1 Spirit.
"Surprisingly warm compared to the cell block..." Dokebi Cape Model
![Image](https://i.imgur.com/LSDQ2pZ.jpeg)
class: **4**
subclass: **1**
name: **Rugged Drape**
displayid: **27584**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2: **6**
stat_value2: **1**
dmg_min1:
dmg_max1:
armor: **12**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Surprisingly warm compared to the cell block..."**
MaxDurability:

 ****Notes:****
- This item is entirely designed for Troll Warriors, every other class will typically use the Hit Capes over this. Warrior gets threat spamming Battle Shout so they can sacrifice the Hit.

 ****Fel Steeds:****
 **Unstable Lantern**
Add Offhand 4 Spirit, 2 Healing, Increase the Spirit of nearby party members by 4.
"Radiant and spectral energy of its owner still lingers." Everglow Lantern Model
![Image](https://i.imgur.com/dOxTB5f.jpeg)
class: **4**
subclass: **0**
Sheath: **7**
name: **Unstable Lantern**
displayid: **7557**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **68**
InventoryType: **23**
ItemLevel: **5**
RequiredLevel:
stat_type1: **6**
stat_value1: **4**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **7675**
spelltrigger_1: **1**
spellid_2: **7363**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Radiant and spectral energy of its owner still lingers."**
MaxDurability:

 ****Notes:****
- While this item may seem strong, it is a healer offhand for Priest and Druid who don't have access to a Shield with a 9 Spirit Enchant.

- It's also a unique support buff for Troll Warrior groups. For example a Warlock could use it and Battleshout would do more threat buffing Imp as well.

 ****Razorclaw the Butcher:****
 **Butcher's Band**
Add Unique Ring 4 Attack Power.
"It appears to be a small tourniquet still drenched in blood." Onyxia Blood Talisman Model
![Image](https://i.imgur.com/jDxujnJ.jpeg)
class: **4**
subclass: **0**
name: **Butcher's Band**
displayid: **30764**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **1245**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It appears to be a small tourniquet still drenched in blood."**
MaxDurability:
maxcount: **1**

 ****Baron Silverlaine:****
 **Silverlaine's Family Jewel**
Add Unique Ring 4 Spell Damage.
"Emanates a haunting confidence, as if his lordship never ended." Shimmering Diamond Band Model
![Image](https://i.imgur.com/pqaJXtA.jpeg)
class: **4**
subclass: **0**
name: **Silverlaine's Family Jewel**
displayid: **31906**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **1245**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Emanates a haunting confidence, as if his lordship never ended."**
MaxDurability:
maxcount: **1**

 ****Prelate Ironmane:****
Drops 2 of the Following:

 **Prelate's Sacred Texts**
Class: Priest
Use: Teaches Resurrection (Rank 1).
"The peace and light of Glenshire manifested, still reaching out beyond the pages." Sacred Highborne Writings Model
![Image](https://i.imgur.com/8aqDqiX.jpeg)
class: **9**
subclass: **0**
AllowableClass: **16**
name: **Prelate's Sacred Texts**
displayid: **1103**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **49**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **3215**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The peace and light of Glenshire manifested, still reaching out beyond the pages."**
MaxDurability:

 ****Notes:****
- <https://database.turtlecraft.gg/?spell=3215>

 **Holy Writ of the First Light**
Class: Paladin
Use: Teaches Resurrection (Rank 1).
"These writings on the Light serve as a testament to true humility." A Torn Letter Model
![Image](https://i.imgur.com/U4Pwu1a.jpeg)
class: **9**
subclass: **0**
AllowableClass: **2**
name: **Holy Writ of the First Light**
displayid: **3032**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **49**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **7330**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"These writings on the Light serve as a testament to true humility."**
MaxDurability:

 ****Notes:****
- The Spell ID that teaches Redemption says it teaches Resurrection (Rank 1).

- I'm including this note with the link just because the tooltip is confusing: <https://database.turtlecraft.gg/?spell=7330>

 **Scripture of Ancestral Sermons**
Class: Shaman
Use: Teaches Call Spirit (Rank 1).
"Surely I must to give this copy to Father Brightcopf." Deciphered Script Model
![Image](https://i.imgur.com/C2E0QKi.jpeg)
class: **9**
subclass: **0**
AllowableClass: **64**
name: **Scripture of Ancestral Sermons**
displayid: **8927**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **49**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **3217**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Surely I must to give this copy to Father Brightcopf."**
MaxDurability:

 ****Notes:****
- The Spell ID that teaches Ancestral Spirit says it teaches Call Spirit (Rank 1).

- I'm including this note with the link just because the tooltip is confusing: <https://database.turtlecraft.gg/?spell=3217>

 ****Commander Springvale****
 **Springvale's Resurgence**
Add Unique Ring 2% Health Regeneration in Combat.
"Hold the line, even in death." Ceremonial Centaur Ring Model
![Image](https://i.imgur.com/b4oo1fe.jpeg)
class: **4**
subclass: **0**
name: **Springvale's Resurgence**
displayid: **14438**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **1245**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **Custom Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Hold the line, even in death."**
MaxDurability:
maxcount: **1**

 ****New Spell ID****
ID: **New Spell ID Entry Here**
Name: **Combat Health Regen 2**
Effect1: **6**
EffectApplyAuraName1: **85**
EffectBasePoints1: **1**

 ****Odo the Blindwatcher:****
Drops both of the following:

 **Band of the Blind's Eye**
Add Unique Ring 2% Meditation.
"Reborn of forbidden magic." Jin'do's Evil Eye Model
![Image](https://i.imgur.com/vrSiuk5.jpeg)
class: **4**
subclass: **0**
name: **Band of the Blind's Eye**
displayid: **32335**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **1245**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Reborn of forbidden magic."**
MaxDurability:
maxcount: **1**

 **Odo's Remorse**
Class: Druid
Use: Teaches Thorns (Rank 1).
"Jagged shards of his now broken spine still hold faculty." Dwarf Spine Model
![Image](https://i.imgur.com/jfWoaGc.jpeg)
class: **9**
subclass: **0**
AllowableClass: **16**
name: **Odo's Remorse**
displayid: **6349**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **49**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **786**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Jagged shards of his now broken spine still hold faculty."**
MaxDurability:

 ****Notes:****
- <https://database.turtlecraft.gg/?spell=786>

 ****Deathsworn Captain (Rare):****
 **Pauldrons of Past Misfortune**
Add Mail Shoulder 54 Armor, 1% Hit.
"Sworn to both the sword and my research. -*Twain*."  Twain's Shoulder Model
![Image](https://i.imgur.com/0GFaGjy.png)
class: **4**
subclass: **3**
name: **Pauldrons of Past Misfortune**
displayid: **7004**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **4536**
InventoryType: **3**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **54**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Sworn to both the sword and my research. -*Twain*."**
MaxDurability: **30**

 ****Notes:****
- This would be the last hit I would give at 6%. It gets us to 31% Miss from behind.

- It felt appropriate because there's not really any other stat worth getting another Sapphiron Enchant.

- Thats why they're epic rarity, it's the last hit piece with a very cool model.

- This model is currently not available at all and fits Shadowfang Keep's Theme quite well.

- Fun Trivia: Twain Martin was a programmer during Vanilla, it's safe to assume he might of made these. The reference to research in the Flavor Text and keeping his name included felt appropriate.

 ****Fenrus the Devourer:****
 **Mantle of the Void**
Add Cloth Shoulder 12 Armor, 1% Spell Hit.
"Darkness emanates from the thread, every pulse like a muffled roar."   Royal Cap Spaulders Model
![Image](https://i.imgur.com/JQaxiRX.jpeg)
class: **4**
subclass: **1**
name: **Mantle of the Void**
displayid: **28817**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **1232**
InventoryType: **3**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **12**
delay:
spellid_1: **23727**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Darkness emanates from the thread, every pulse like a muffled roar."**
MaxDurability: **25**

 ****Notes:****
- It felt appropriate because there's not really any other stat worth getting another Sapphiron Enchant.

- Thats why they're epic rarity, it's the last hit piece with a very cool model.

- This model is normally Mail however there are many Cloth Shoulders that look similar so I think it's appropriately unique.

 ****Wolf Master Nandos:****
 **Shoulderpads of the Slavering Horror**
Add Leather Shoulder 32 Armor, 1% Hit.
"Shivering cold to the touch, as if life ended long ago, only convulsions and purpose remain."  Defiler's Epaulets Model
![Image](https://i.imgur.com/GS35f6n.jpeg)
class: **4**
subclass: **2**
name: **Shoulderpads of the Slavering Horror**
displayid: **32740**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **3428**
InventoryType: **3**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor: **32**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Shivering cold to the touch, as if life ended long ago, only convulsions and purpose remain."**
MaxDurability: **30**

 ****Notes:****
- This would be the last hit I would give at 6%. It gets us to 31% Miss from behind.

- It felt appropriate because there's not really any other stat worth getting another Sapphiron Enchant.

- Thats why they're epic rarity, it's the last hit piece with a very cool model.

- This model is normally Cloth and is very unique. It looks appropriate for Wolf Master Nandos.

 **Secret Item** This item is shrouded in secrecy. Only those in a locked Discord Channel know of it's whispers.
<https://discord.gg/cBNgPqyn7T>

 ****Archmage Arugal:****
Drops 1 of the Following:

 **Enduring Vial of Worgen Blood**
Unique Trinket: 2% Health Reneration in Combat.
Chance when struck in combat to Heal for 10.
"Lingering dark magic still churns the blood." Worgan Blood Vial Model
![Image](https://i.imgur.com/qC9g8mx.jpeg)
class: **4**
subclass: **0**
name: **Enduring Vial of Worgen Blood**
displayid: **15741**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **1242**
InventoryType: **12**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **Combat Health Regen 2 Spell ID (See Commander Springvale)**
spelltrigger_1: **1**
spellid_2: **New Proc Spell ID Below**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Lingering dark magic still churns the blood."**
MaxDurability:
maxcount: **1**

 ****New Spell ID Entry Here****
ID: **Spell ID Here**
Name: **Heal Self 10**
Targets:**1**
EffectImplicitTargetA1:**1**
Attributes: **384**
Effect1: **10**
Base Points: **9**
Die Sides: **1**

 ****New Proc Spell ID****
ID: **New Proc Spell ID Entry Here**
Name: **Proc Heal Self 10**
Effect1: **6**
EffectApplyAuraName1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
Proc Chance: **5**
Proc Flags: **64**
RecoveryTime: **20000**

 ****Notes:****
- Included a 20 Second Cooldown on the Heal to prevent it from being too strong.

 **Splintered Seal of the Archmage**
Unique Trinket: 1% Spell Crit.
Chance on landing a damaging spell to increase your Spell Damage by 15 for 12 Seconds.
"It appears to be a relic of the fallen city, bestowed by the Council of Six." Dalaran Pendant Model
![Image](https://i.imgur.com/tMleDXD.png)
class: **4**
subclass: **0**
name: **Splintered Seal of the Archmage**
displayid: **6502**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **1242**
InventoryType: **12**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **23765**
spelltrigger_1: **1**
spellid_2: **New Proc Spell ID Below**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"It appears to be a relic of the fallen city, bestowed by the Council of Six."**
MaxDurability:
maxcount: **1**

 ****New Spell ID Entry Here****
ID: **Spell ID Here**
Name: **Arugal's Insight**
Targets:**1**
DurationIndex: **21**
EffectImplicitTargetA1:**1**
Attributes: **0**
Effect1: **6**
EffectApplyAuraName1: **13**
EffectBasePoints1: **14**
EffectMiscValueA1: **127**

 ****New Proc Spell ID****
ID: **New Proc Spell ID Entry Here**
Name: **Proc Arugal's Insight**
Effect1: **6**
EffectApplyAuraName1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
EffectImplicitTargetA1: **1**
Attributes: **384**
Proc Chance: **5**
Proc Flags: **65536**
RecoveryTime: **0**

 **Riven Remnants of Ur**
Unique Trinket: 2 Mana per 5.
Your Heals have a chance to grant a 8 Damage Shield to your target for 12 Seconds.
"This parchment may still hold secrets of the void..." Green Hills of Stranglethorn - Page 1 Model
![Image](https://i.imgur.com/VE9oz9T.png)
class: **4**
subclass: **0**
name: **Riven Remnants of Ur**
displayid: **7629**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **1242**
InventoryType: **12**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **21360**
spelltrigger_1: **1**
spellid_2: **New Proc Spell ID Below**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"This parchment may still hold secrets of the void..."**
MaxDurability:
maxcount: **1**

 ****New Spell ID Entry Here****
ID: **Spell ID Here**
Name: **Ur's Protection**
School: **4**
DurationIndex: **21**
EffectImplicitTargetA1:**6**
Effect1: **6**
EffectApplyAuraName1: **15**
EffectBasePoints1: **7**
SpellVisualID: **1555**

 ****New Proc Spell ID****
ID: **New Proc Spell ID Entry Here**
Name: **Proc Ur's Protection**
Effect1: **6**
EffectApplyAuraName1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
EffectImplicitTargetA1: **25**
Attributes: **384**
Proc Chance: **5**
Proc Flags: **65536**
RecoveryTime: **0**

 ****Notes:****
- The Spell Visual is set to Mark of the Dragon Lord, it's a purple bubble effect.

- Adding this note to specify, it appears Mark of the Dragon Lord's Spell Visual was changed on Turtle WoW from its original 1.12.1 Spell Visual. I'm referring to the original Spell Visual ID.

 **Shackle of Broken Ambition**
Unique Trinket: 1% Crit.
Attacks have a chance to increase your Haste by 2% for 12 Seconds.
"A bleak reminder of the curse on Pyrewood Village." Mark of the Worgen Model
![Image](https://i.imgur.com/hWwJK71.png)
class: **4**
subclass: **0**
name: **Shackle of Broken Ambition**
displayid: **32297**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **1242**
InventoryType: **12**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **15462**
spelltrigger_1: **1**
spellid_2: **New Proc Spell ID Below**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"A bleak reminder of the curse on Pyrewood Village."**
MaxDurability:
maxcount: **1**

 ****New Spell ID Entry Here****
ID: **Spell ID Here**
Name: **Arugal's Arrogance**
Targets:**1**
DurationIndex: **21**
EffectImplicitTargetA1:**1**
Attributes: **0**
Effect1: **6**
EffectApplyAuraName1: **110**
EffectBasePoints1: **1**

 ****New Proc Spell ID****
ID: **New Proc Spell ID Entry Here**
Name: **Proc Arugal's Arrogance**
Effect1: **6**
EffectApplyAuraName1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
EffectImplicitTargetA1: **1**
Attributes: **384**
Proc Chance: **5**
Proc Flags: **16**
RecoveryTime: **0**

If you look at the design of where we placed the items, the Leather pieces take the most to obtain, this is on purpose. End Bosses, Harvester, Vangros. Rogues are required for these dungeons and are the highest population of Lunatics so it only makes sense to make these items routed in this way. Thank you for reading.

---
![Image](https://i.imgur.com/WTVVlNV.jpeg)
---
 **40 Man Gnomeregan**
 ****Future Future Suggestion:****

 ****Grubbis:****
Drops 1 of the following and a Set Token:

 **Chomper's Chunker**
 5.2 DPS +1-2 Nature Damage 3.2 Speed 2h Mace.
 2 Strength.
"It leaves cog shaped indents with each swing."  Finkle's Lava Dredger Model
![Image](https://i.imgur.com/iWcOEW4.jpeg)
class: **2**
subclass: **5**
Sheath: **1**
name: **Chomper's Chunker**
displayid: **31265**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **9427**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
stat_type1: **4**
stat_value1: **2**
dmg_min1: **12**
dmg_max1: **18**
dmg_min2: **1**
dmg_max2: **2**
dmg_type2: **4**
armor:
delay: **3200**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It leaves cog shaped indents with each swing."**
MaxDurability: **45**

 **Basilisk Blaster**
 4.2 DPS +1-2 Nature Damage 2.8 Speed Gun.
 2 Attack Power.
"The stock has started to petrify."  Daryl's Hunting Rifle Model
![Image](https://i.imgur.com/7iJ0HBk.jpeg)
class: **2**
subclass: **3**
Sheath: **0**
name: **Basilisk Blaster**
displayid: **20732**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **4783**
InventoryType: **15**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **9**
dmg_max1: **12**
dmg_min2: **1**
dmg_max2: **2**
dmg_type2: **4**
armor:
delay: **2800**
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The stock has started to petrify."**
MaxDurability: **35**

 **Grubbis's Eye on a Stick**
Class: Hunter
Use: Teaches Hunter's Mark Rank 1
"To hunt is to see what others ignore, this arrow ignored nothing and neither will you."  Eyepoker Model
![Image](https://i.imgur.com/ZV3GExx.jpeg)
class:  **9**
subclass:  **0**
AllowableClass:  **4**
name:  **Grubbis's Eye on a Stick**
displayid:  **21014**
Quality:  **3**
Flags:
BuyPrice:  **1**
SellPrice:  **2349**
InventoryType:
ItemLevel:
RequiredLevel:  **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:  **5298**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding:  **1**
description:  **"To hunt is to see what others ignore, this arrow ignored nothing and neither will you."**
MaxDurability:

 ****Notes:****
- Hunters are pretty good as is, however they don't have a single button to press at ranged it's strictly Auto Shot. With how often we resist spells we think this would be an appropriate addition to the Hunter rotation because it would typically require being cast a few times before being active. We believe this gives Hunter more to do and fixes that problem.

- <https://database.turtlecraft.gg/?spell=5298>

 **Grime-Encrusted Cloak**
Quest Item (Set Token).
"You can't seem to tell where the fabric begins and the grime ends."  Acidproof Cloak Model
![Image](https://i.imgur.com/xbNpGNV.jpeg)
Class:  **12**
Subclass:  **0**
name:  **Grime-Encrusted Cloak**
displayid:  **23085**
Quality:  **4**
Flags:  **64**
BuyPrice:  **1**
SellPrice:  **12293**
StartQuest:  **0**
bonding:  **1**
description:  **"You can't seem to tell where the fabric begins and the grime ends."**

 ****Viscous Fallout:****
Drops 1 of the following and a Set Token:

 **Toxic Poker**
 5.0 DPS +2-3 Nature Damage 1h 1.4 Speed Dagger.
 1 Stamina, 1 Spirit.
"Appears as if it fell and landed point first into the acid."  Gut Ripper Model
![Image](https://i.imgur.com/lC8Etpv.jpeg)
class: **2**
subclass: **15**
Sheath: **3**
name: **Toxic Poker**
displayid: **20312**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **6426**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
stat_type2: **6**
stat_value2: **1**
dmg_min1: **4**
dmg_max1: **5**
dmg_min2: **2**
dmg_max2: **3**
dmg_type2: **4**
armor:
delay: **1400**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Appears as if it fell and landed point first into the acid."**
MaxDurability: **35**

 **Idol of Viscosity**
Unique Relic Idol
Equip: Your Wrath has a chance to slow the targets attack speed by 10% for 10 Seconds.
"It's so sticky."  Orb of Kaladoon Model
![Image](https://i.imgur.com/gC4M80T.jpeg)
class: **4**
subclass: **8**
name: **Idol of Viscosity**
displayid: **3109**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8619**
InventoryType: **28**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **New Proc Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It's so sticky."**
maxcount: **1**

Viscous Fallout
 10 seconds remaining
Attack speed reduced by 10%.

ID: Spell ID Here
SpellName: **Viscous Fallout**
Attributes: **0x10**
SpellFamilyName: **0**
DurationIndex: **21**
Effect1: **6**
EffectApplyAuraName1: **107**
EffectBasePoints1: **-11**
SpellVisualID: **162**

ID: New Proc Spell ID Entry Here
SpellName: **Proc Viscous Fallout**
Attributes: **0x00000140**
Effect1: **6**
EffectApplyAuraName1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
SpellFamilyName: **7**
SpellFamilyMask: **1**
CustomChance: **5**
procFlags: **65536**

 **Hydromancer Gemstones**
Class: Warlock
Use: Teaches Unending Breath
"Broken shards litter the ground amongst the slime, perhaps they can be of some use."  Blue Power Crystal Model
![Image](https://i.imgur.com/rTNsSXb.jpeg)
class: **9**
subclass: **0**
AllowableClass: **256**
name: **Hydromancer Gemstones**
displayid: **6614**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **4349**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **5698**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Broken shards litter the ground amongst the slime, perhaps they can be of some use."**
MaxDurability:

 ****Notes:****
- This is the only spell we plan on adding outside of the 1-9 Bracket, other spells we've considered are either convenience (like Ressurection in SFK) or fix a problem. This one is strictly for flavor and would unironically be useful for the Underwater Boss if we get Blackfathom Deeps.

- <https://database.turtlecraft.gg/?spell=5698>

 **Grime-Encrusted Cloak**
Quest Item (Set Token).
"You can't seem to tell where the fabric begins and the grime ends."  Acidproof Cloak Model
![Image](https://i.imgur.com/xbNpGNV.jpeg)
Class:  **12**
Subclass:  **0**
name:  **Grime-Encrusted Cloak**
displayid:  **23085**
Quality:  **4**
Flags:  **64**
BuyPrice:  **1**
SellPrice:  **12293**
StartQuest:  **0**
bonding:  **1**
description:  **"You can't seem to tell where the fabric begins and the grime ends."**

 ****Electrocutioner 6000:****
Drops 1 of the following and a Set Token:

 **Electrocutioner's Arm**
 5.2 DPS +1-2 Nature Damage 2.4 Speed 1h Sword.
 1 Strength. 2 Attack Power.
"The perfect size to insert in that outlet over there. Coincidence?"  Speedsteel Rapier Model
![Image](https://i.imgur.com/TZSKJSj.jpeg)
class: **2**
subclass: **7**
Sheath: **3**
name: **Electrocutioner's Arm**
displayid: **28708**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **9626**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2:
stat_value2:
dmg_min1: **10**
dmg_max1: **12**
dmg_min2: **1**
dmg_max2: **2**
dmg_type2: **4**
armor:
delay: **2400**
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The perfect size to insert in that outlet over there. Coincidence?"**
MaxDurability: **35**

 **Totem of the Electrocutioner**
Your Lightning Bolt has a chance to interrupt the target.
"The elements don't dabble in justice."  Totem of Static Charge Model
![Image](https://i.imgur.com/MzZWq83.jpeg)
class: **4**
subclass: **9**
name: **Totem of the Electrocutioner**
displayid: **28108**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8619**
InventoryType: **28**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **New Proc Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The elements don't dabble in justice."**
maxcount: **1**

 ****New Spell ID****
Name: **Electrocution**
Attributes: **0x00000150**
Effect1: **33**
EffectBasePoints1: **2000**
EffectImplicitTargetA1: **6**
SpellVisualID: **9009**
SoundID: **2125**

 ****New Proc Spell ID****
Name: **Proc Electrocution**
SpellFamilyName: **11**
SpellFamilyMask: **1**
procFlags: **65536**
EffectTriggerSpell1: **Insert Above Spell ID**
CustomChance: **5**
RecoveryTime: **0**

 **Charged Servo**
Class: Warrior
Use: Teaches Thunder Clap Rank 1
"Grounding yourself is for cowards."  Thundering Charm Model
![Image](https://i.imgur.com/40mw1Qu.jpeg)
class: **9**
subclass: **0**
AllowableClass: **1**
name: **Charged Servo**
displayid: **6424**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **12832**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **3726**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Grounding yourself is for cowards."**
MaxDurability:

 ****Notes:****
- Warriors are currently doing less DPS than Shaman with Totemic Slam. When attacking with a Fishing Pole they can't use Heroic Strike so they're limited to Auto Attack just like Hunters. This would give them a single button to press that increases their lackluster damage with a cooldown that will resist often as well as give them a small support debuff. This will help Warriors not be entirely useless aside from picking Troll Warrior for niche tank situations.

- <https://database.turtlecraft.gg/?spell=3726>

 **Grime-Encrusted Gear**
Quest Item (Set Token).
"Caked grime obscures the gear's purpose."  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
Class: **12**
Subclass: **0**
name: **Grime-Encrusted Gear**
displayid: **1221**
Quality: **4**
Flags: **64**
BuyPrice: **1**
SellPrice: **12461**
StartQuest: **0**
bonding: **1**
description: **"Caked grime obscures the gear's purpose."**

 ****Crowd Pummeler 9-60:****
Drops 1 of the following and a Set Token:

 **Little Pummeler**
 1.1 DPS 3.5 Speed 2h Mace.
Chance on Hit: Stun for 1 Second.
"When conventional tools don't get the job done."  Headbasher Model
![Image](https://i.imgur.com/WB17Xhy.jpeg)
class: **2**
subclass: **5**
Sheath: **1**
name: **Little Pummeler**
displayid: **5530**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8349**
InventoryType: **17**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **3**
dmg_max1: **5**
dmg_min2:
dmg_max2:
dmg_type2:
armor:
delay: **3500**
spellid_1: **23454**
spelltrigger_1: **2**
spellid_2:
spelltrigger_2:
spellppmRate_1: **1**
bonding: **1**
description: **"When conventional tools don't get the job done."**
MaxDurability: **45**

 **Libram of Pummeling**
Your Seal of Righteousness attacks have a chance to lower the targets cast speed by 20% for 10 Seconds.
"Justice has no backdoors."  Whirling Bronze Gizmo Model
![Image](https://i.imgur.com/znM7cSq.jpeg)
class: **4**
subclass: **7**
name: **Libram of Pummeling**
displayid: **7840**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **9823**
InventoryType: **28**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **New Proc Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Justice has no backdoors."**
maxcount: **1**

 ****New Spell ID****
SpellName: **Mechanical Concussion**
DurationIndex: **21**
Effect1: **6**
EffectApplyAuraName1: **108**
EffectBasePoints1: **-21**
SpellVisualID: **142**

 ****New Proc Spell ID****
Effect1: **42**
EffectTriggerSpell1: **60040**
EffectImplicitTargetA1: **6**
SchoolMask: **0**
SpellFamilyName: **10**
SpellFamilyMask: **0x800000**
procFlags: **0x10000**
CustomChance: **5**

 **Manual Crowd Pummeler’s Punch-Card**
Class: Paladin
Use: Teaches Blessing of Might Rank 1
"Standard operating procedure: Smash everything."  Yellow Punch Card Model
![Image](https://i.imgur.com/4sV77Du.jpeg)
class: **9**
subclass: **0**
AllowableClass: **2**
name: **Manual Crowd Pummeler’s Punch-Card**
displayid: **7355**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **11642**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **19741**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Standard operating procedure: Smash everything."**
MaxDurability:

 ****Notes:****
- <https://database.turtlecraft.gg/?spell=19741>

 **Grime-Encrusted Gear**
Quest Item (Set Token).
"Caked grime obscures the gear's purpose."  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
Class: **12**
Subclass: **0**
name: **Grime-Encrusted Gear**
displayid: **1221**
Quality: **4**
Flags: **64**
BuyPrice: **1**
SellPrice: **12461**
StartQuest: **0**
bonding: **1**
description: **"Caked grime obscures the gear's purpose."**

 ****Dark Iron Ambassador (Rare):****
Drops 1 of the following and a Set Token:

 **Dark Iron Orb**
Held in Off-Hand
 2 Stamina, 4 Spell Damage, 1% Spell Crit.
"You can tell this orb has experienced a lifetime of rumination."  Cursed Eye of Paleth Model
![Image](https://i.imgur.com/aFflwwF.jpeg)
class: **4**
subclass: **0**
Sheath: **7**
name: **Dark Iron Orb**
displayid: **21598**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8268**
InventoryType: **23**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2: **23765**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"You can tell this orb has experienced a lifetime of rumination."**
MaxDurability:

 **Emissary Shooter**
 6.4 DPS 2.2 Speed Shadow Damage Wand
 2 Intellect, 6 Spell Damage.
"The shadowgem reflects the light in an unnatural way."  Woestave Model
![Image](https://i.imgur.com/eE504UO.jpeg)
class: **2**
subclass: **19**
Sheath: **0**
name: **Emissary Shooter**
displayid: **32685**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **9139**
InventoryType: **26**
ItemLevel: **5**
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
dmg_min1: **11**
dmg_max1: **17**
dmg_type1: **5**
armor:
delay: **2200**
spellid_1: **9396**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The shadowgem reflects the light in an unnatural way."**
MaxDurability:

 **Grime-Encrusted Cloak**
Quest Item (Set Token).
"You can't seem to tell where the fabric begins and the grime ends."  Acidproof Cloak Model
![Image](https://i.imgur.com/xbNpGNV.jpeg)
Class:  **12**
Subclass:  **0**
name:  **Grime-Encrusted Cloak**
displayid:  **23085**
Quality:  **4**
Flags:  **64**
BuyPrice:  **1**
SellPrice:  **12293**
StartQuest:  **0**
bonding:  **1**
description:  **"You can't seem to tell where the fabric begins and the grime ends."**

 ****Mekgineer Thermaplug:****
Drops 1 of the following and 2 Set Tokens:

 **Charged Mekgineer Wrench**
 4.2 DPS 2.0 Speed 1h Mace, 7 Healing, 3% Meditation.
"Lefty loosy, righty tighty."  Arclight Spanner Model
![Image](https://i.imgur.com/BRG6qK4.jpeg)
class: **2**
subclass: **4**
Sheath: **3**
name: **Charged Mekgineer Wrench**
displayid: **7494**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12382**
InventoryType: **21**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **8**
dmg_max1: **9**
armor:
delay: **2000**
spellid_1: **7677**
spelltrigger_1: **1**
spellid_2: **51253**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Lefty loosy, righty tighty."**
MaxDurability: **35**

 **Thermaplugg's Lower Left Core**
 86 Armor 3 Block Shield
 3 Stamina, 1 Spirit, When struck in combat inflict 1 Nature damage to the attacker.
"You got served."  Force Reactive Disk Model
![Image](https://i.imgur.com/74ohEmy.jpeg)
class: **4**
subclass: **6**
Sheath: **4**
name: **Thermaplugg's Lower Left Core**
displayid: **30561**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18423**
InventoryType: **14**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **3**
stat_type1: **6**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **86**
delay:
spellid_1: **22351**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"You got served."**
MaxDurability: **45**
block: **3**

 **Thermaplugg's Right Finger**
 4.2 DPS 1.8 Speed Dagger 4 Spell Damage, Chance on landing a damaging spell to deal 5-7 Nature Damage. 10% Chance.
"It points towards the future."  Julie's Dagger Model
![Image](https://i.imgur.com/TRff7xy.jpeg)
class: **2**
subclass: **15**
Sheath: **3**
name: **Thermaplugg's Right Finger**
displayid: **13001**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12913**
InventoryType: **13**
ItemLevel: **5**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **7**
dmg_max1: **8**
armor:
delay: **1800**
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2: **Wailing Caverns Cobra-Eye Greatstaff New Proc Spell ID**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"It points towards the future."**
MaxDurability: **40**

 **Grime-Encrusted Scraps**
Quest Item (Set Token). x2
"It sticks to your hands."  Devilsaur Leather
![Image](https://i.imgur.com/pNlofgf.jpeg)
Class: **12**
Subclass: **0**
name: **Grime-Encrusted Scraps**
displayid: **21366**
Quality: **4**
Flags: **64**
BuyPrice: **1**
SellPrice: **18973**
StartQuest: **0**
bonding: **1**
description: **"It sticks to your hands."**

 **Gnomeregan Set Rewards**
Class Quests inside Gnomeregan.

Turning in these Quests will require the Set Tokens as well as other obscure items in the World like The Rock a 100 Gold Ring from a Vender in Booty Bay.

Keep in mind we are dropping 15 Stamina not using Lucky Fishing Hat for these so overall they make us lose a little bit of Health for other benefits.

---
![Image](https://i.imgur.com/mFmrQYU.png)
---
 ****Warrior****

 **Coif of the Electrocutioner**
 61 Armor 12 Stamina 1% Dodge Mail Helm.  Sparkmetal Coif Model
![Image](https://i.imgur.com/Kx0Ducq.jpeg)
class: **4**
subclass: **3**
AllowableClass: **1**
name: **Coif of the Electrocutioner**
displayid: **15324**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **25030**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **61**
delay:
spellid_1: **13669**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **50**
itemset: **Electrocutioner's Mail Set ID**

 **Drape of the Electrocutioner**
 18 Armor 2 Stamina 3 Spirit Cloak.  Dark Phantom Cape Model
![Image](https://i.imgur.com/Ri89TDz.jpeg)
class: **4**
subclass: **1**
AllowableClass: **1**
name: **Drape of the Electrocutioner**
displayid: **28652**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2: **6**
stat_value2: **3**
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Electrocutioner's Mail Set ID**

 **Electrocutioner's Gear**
 1 Stamina 2% Health Regeneration in Combat Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **1**
name: **Electrocutioner's Gear**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **Health Regen 2 ID**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Electrocutioner's Mail Set ID**

 ****Notes:****
- See Shadowfang Keep Commander Springvale for Spell ID

 ****Electrocutioner's Mail****
 3 Piece Bonus: Chance to gain Static Barrier when casting Thunder Clap.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Electrocutioner's Mail**
itemID_1: **Coif of the Electrocutioner ID**
itemID_2: **Drape of the Electrocutioner ID**
itemID_3: **Electrocutioner's Gear ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **11841**
EffectImplicitTargetA1: **1**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
SpellFamilyName: **4**
SpellFamilyMask: **0x1**
procFlags: **0x4**
ppmRate: **0**
CustomChance: **5**

 ****Notes:****
- This is meant to trigger only on the cast of Thunder Clap, not on the damage done. It will be better due to resists, and also prevent it from triggering too often if it hits multiple targets.

- Static Barrier: <https://database.turtlecraft.gg/?spell=11841>

---
![Image](https://i.imgur.com/WLM3IyS.jpeg)
---
 ****Paladin****

 **Coif of the Sentry**
 61 Armor 12 Stamina 4 Healing Mail Helm.  Golden Scale Coif Model
![Image](https://i.imgur.com/w7SEqhW.jpeg)
class: **4**
subclass: **3**
AllowableClass: **2**
name: **Coif of the Sentry**
displayid: **15333**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **25030**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **61**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **50**
itemset: **Sentry's Mail Set ID**

 **Drape of the Sentry**
 18 Armor 2 Intellect 4 Healing Cloak.  Windchaser Cloak Model
![Image](https://i.imgur.com/Yd5THnC.jpeg)
class: **4**
subclass: **1**
AllowableClass: **2**
name: **Drape of the Sentry**
displayid: **26175**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Sentry's Mail Set ID**

 **Sentry's Gear**
 1 Stamina 2% Meditation Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **2**
name: **Sentry's Gear**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Sentry's Mail Set ID**

 ****Sentry's Mail****
 3 Piece Bonus: Your heals have a chance to increase your Healing by 20 for 12 Seconds.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Sentry's Mail**
itemID_1: **Coif of the Sentry ID**
itemID_2: **Drape of the Sentry ID**
itemID_3: **Sentry's Gear ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
Name: **Sentry's Resolve**
Effect1: **13**
EffectApplyAuraName1: **135**
EffectBasePoints1: **19**
Duration: **24**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **New Spell ID Above**
EffectImplicitTargetA1: **1**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/bX6Zpgy.jpeg)
---
 ****Rogue****

 **Hood of the Ambusher**
 45 Armor 12 Stamina 4 Attack Power Leather Helm.  Shadowcraft Cap Model
![Image](https://i.imgur.com/7kLLRur.jpeg)
class: **4**
subclass: **2**
AllowableClass: **8**
name: **Hood of the Ambusher**
displayid: **28180**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Ambusher's Leather Set ID**

 **Cloak of the Ambusher**
 18 Armor 2 Stamina 1% Hit Cloak.  Shadow Prowler's Cloak Model
![Image](https://i.imgur.com/5lxt2Ty.jpeg)
class: **4**
subclass: **1**
AllowableClass: **8**
name: **Cloak of the Ambusher**
displayid: **24013**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Ambusher's Leather Set ID**

 **Ambusher's Cog**
 1 Stamina 4 Attack Power Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **8**
name: **Ambusher's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Ambusher's Leather Set ID**

 ****Ambusher's Leather****
 3 Piece Bonus: Eviscerate grants 25 Energy when it's a Miss, Dodge, or Parry.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Ambusher's Leather**
itemID_1: **Hood of the Ambusher ID**
itemID_2: **Cloak of the Ambusher ID**
itemID_3: **Ambusher's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
Name: **Ambusher's Failsafe**
Effect1: **30**
EffectBasePoints1:**25**
EffectMiscValue1: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **Above New Spell ID**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
SpellFamilyName: **8**
SpellFamilyMask: **0x20000**
procFlags: **0x800**
procEx: **0x16**
CustomChance: **100**

---
![Image](https://i.imgur.com/l6fJ5Rz.jpeg)
---
 ****Hunter****

 **Hood of the Lurker**
 45 Armor 12 Stamina 4 Attack Power Leather Helm.  Tattered Leather Hood Model
![Image](https://i.imgur.com/9nx7zfI.jpeg)
class: **4**
subclass: **2**
AllowableClass: **4**
name: **Hood of the Lurker**
displayid: **21958**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Lurker's Leather Set ID**

 **Cloak of the Lurker**
 18 Armor 2 Stamina 1% Hit Cloak.  Shifting Cloak Model
![Image](https://i.imgur.com/WhgksYl.jpeg)
class: **4**
subclass: **1**
AllowableClass: **4**
name: **Cloak of the Lurker**
displayid: **30851**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Lurker's Leather Set ID**

 **Lurker's Cog**
 1 Stamina 4 Attack Power Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **4**
name: **Lurker's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Lurker's Leather Set ID**

 ****Lurker's Leather****
 3 Piece Bonus: Your Ranged Attacks have a chance to deal 5-7 Nature Damage.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Lurker's Leather**
itemID_1: **Hood of the Lurker ID**
itemID_2: **Cloak of the Lurker ID**
itemID_3: **Lurker's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
SpellName: **Lurker's Poison**
Effect1: **2**
EffectBasePoints1: **4**
EffectDieSides1: **3**
SchoolMask: **8**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **Above New Spell ID**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
procFlags: **0x40000**
CustomChance: **5**

---
![Image](https://i.imgur.com/ZmniEOR.jpeg)
---
 ****Shaman****

 **Technician Goggles**
 45 Armor 12 Stamina 4 Healing Leather Helm.  Speedy Racer Goggles Model
![Image](https://i.imgur.com/bP6yCyj.jpeg)
class: **4**
subclass: **2**
AllowableClass: **64**
name: **Technician Goggles**
displayid: **18579**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Technician's Leather Set ID**

 **Cloak of the Technician**
 18 Armor 2 Intellect 4 Healing Cloak.  Dark Hooded Cape Model
![Image](https://i.imgur.com/OQ5Fw6G.jpeg)
class: **4**
subclass: **1**
AllowableClass: **64**
name: **Cloak of the Technician**
displayid: **23000**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Technician's Leather Set ID**

 **Technician's Cog**
 1 Stamina 2% Meditation Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **64**
name: **Technician's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Technician's Leather Set ID**

 ****Technician's Leather****
 3 Piece Bonus: Your heals have a chance to apply Lightning Shield (Rank 1) to your target.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Technician's Leather**
itemID_1: **Technician Goggles ID**
itemID_2: **Cloak of the Technician ID**
itemID_3: **Technician's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **324**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/hqC489T.png)
---
 ****Druid****

 **Burrower Goggles**
 45 Armor 12 Stamina 4 Healing Leather Helm.  Catseye Ultra Goggles Model
![Image](https://i.imgur.com/Tij4krX.jpeg)
class: **4**
subclass: **2**
AllowableClass: **1024**
name: **Burrower Goggles**
displayid: **19402**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Burrower's Leather Set ID**

 **Cloak of the Burrower**
 18 Armor 2 Intellect 4 Healing Cloak.  Eskhandar's Pelt Model
![Image](https://i.imgur.com/cafRpVg.jpeg)
class: **4**
subclass: **1**
AllowableClass: **1024**
name: **Cloak of the Burrower**
displayid: **30577**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Burrower's Leather Set ID**

 **Burrower's Cog**
 1 Stamina 2% Meditation Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **1024**
name: **Burrower's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Burrower's Leather Set ID**

 ****Burrower's Leather****
 3 Piece Bonus: Your heals have a chance to apply Rejuvenation (Rank 1) to your target.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Burrower's Leather**
itemID_1: **Burrower Goggles ID**
itemID_2: **Cloak of the Burrower ID**
itemID_3: **Burrower's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **774**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/zpkbyEx.jpeg)
---
 ****Mage****

 **Cowl of the Flamewalker**
 37 Armor 12 Stamina 4 Spell Damage Cloth Helm.  Felcloth Hood Model
![Image](https://i.imgur.com/Flz16uM.jpeg)
class: **4**
subclass: **1**
AllowableClass: **128**
name: **Cowl of the Flamewalker**
displayid: **24933**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12478**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **37**
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **40**
itemset: **Flamewalker's Cloth Set ID**

 **Shroud of the Flamewalker**
 18 Armor 2 Stamina 1% Spell Hit Cloak.  Cloak of Flames Model
![Image](https://i.imgur.com/LelsQOj.jpeg)
class: **4**
subclass: **1**
AllowableClass: **128**
name: **Shroud of the Flamewalker**
displayid: **23421**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **23766**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Flamewalker's Cloth Set ID**

 **Flamewalker's Sprocket**
 1 Stamina 4 Spell Damage Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **128**
name: **Flamewalker's Sprocket**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Flamewalker's Cloth Set ID**

 ****Flamewalker's Cloth****
 3 Piece Bonus: Your direct damaging spells have a chance to make your next Fireball (Rank 1) instant.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Flamewalker's Cloth**
itemID_1: **Cowl of the Flamewalker ID**
itemID_2: **Shroud of the Flamewalker ID**
itemID_3: **Flamewalker's Sprocket ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
SpellName: **Flamewalker's Hindsight**
EffectApplyAuraName1: **43**
EffectBasePoints1: **-100**
SpellFamilyName: **3**
SpellFamilyMask: **0x1**
StackAmount: **1**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **Above New Spell ID**
EffectImplicitTargetA1: **1**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
procFlags: **0x10000**
CustomChance: **10**

---
![Image](https://i.imgur.com/nHfHjUD.png)
---
 ****Warlock****

 **Cowl of the Ambassador**
 37 Armor 12 Stamina 4 Spell Damage Cloth Helm.  Original Ironweave Cowl Model
![Image](https://i.imgur.com/oBINXwr.png)
class: **4**
subclass: **1**
AllowableClass: **256**
name: **Cowl of the Ambassador**
displayid: **16824**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12478**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **37**
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **40**
itemset: **Ambassador's Cloth Set ID**

 ****Notes:****
- It appears you removed the availability of the original Ironweave Cowl. It is a Glossy Black Hood Model that is no longer obtainable so the current DisplayID is wrong. I am trying to find the original DisplayID I will come back and fix it soon.

- After further inspection, they share the same Display ID and it was tampered with on Turtle WoW. So the original Ironweave Cowl Model is currently unobtainable and I'm not sure if you all have it on any Display ID available. It looks like it was "yoinked" from the game.

- Thank you ****Bolton**** and ****Willberg**** on the Radio Team and Hardcore Victims Unit Episode 3 for this discovery. Scholomance Academy Hood shares the model we're looking for. We've changed the Display ID to Scholomance Academy Hood. <https://database.turtlecraft.gg/?item=50095>

 **Shroud of the Ambassador**
 18 Armor 2 Stamina 1% Spell Hit Cloak.  Redoubt Cloak Model
![Image](https://i.imgur.com/GM7B51g.jpeg)
class: **4**
subclass: **1**
AllowableClass: **256**
name: **Shroud of the Ambassador**
displayid: **30831**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **23766**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Ambassador's Cloth Set ID**

 **Ambassador's Sprocket**
 1 Stamina 4 Spell Damage Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **256**
name: **Ambassador's Sprocket**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Ambassador's Cloth Set ID**

 ****Ambassador's Cloth****
 3 Piece Bonus: Your Imp now benefits from 100% of your Intellect and Spell Hit.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Ambassador's Cloth**
itemID_1: **Cowl of the Ambassador ID**
itemID_2: **Shroud of the Ambassador ID**
itemID_3: **Ambassador's Sprocket ID**
SpellID: **New Spell ID Below**
Threshold: **3**

 ****New Spell ID****
SpellName: **Ambassador's Guidance**
Effect1: **13**
EffectApplyAuraName1: **216**
EffectBasePoints1: **100**
EffectApplyAuraName2: **Shared Spell Hit ID?**
EffectBasePoints2: **100**
EffectMiscValue1: **3**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **13**
EffectApplyAuraName1: **216**
EffectTriggerSpell1: **Above New Spell ID**

 ****Notes:****
- This Spell ID in particular is a bit more confusing, not sure if I did it right.

- I recommend using this spell for reference, sharing Spell Hit seems to be more on the custom side than typical vmangos resources. <https://database.turtlecraft.gg/?spell=51717>

---
![Image](https://i.imgur.com/pts2rXg.jpeg)
---
 ****Priest****

 **Cowl of the Medic**
 37 Armor 12 Stamina 4 Healing Cloth Helm.  Aurora Cowl Model
![Image](https://i.imgur.com/WE0B4i5.jpeg)
class: **4**
subclass: **1**
AllowableClass: **16**
name: **Cowl of the Medic**
displayid: **15287**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12478**
InventoryType: **1**
ItemLevel: **5**
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **37**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **40**
itemset: **Medic's Cloth Set ID**

 **Shroud of the Medic**
 18 Armor 2 Intellect 4 Healing Cloak.  Parachute Cloak
![Image](https://i.imgur.com/3F8awBl.jpeg)
class: **4**
subclass: **1**
AllowableClass: **16**
name: **Shroud of the Medic**
displayid: **23129**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel: **5**
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Medic's Cloth Set ID**

 **Medic's Sprocket**
 1 Stamina 2% Meditation Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **16**
name: **Medic's Sprocket**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Medic's Cloth Set ID**

 ****Medic's Cloth****
 3 Piece Bonus: Your heals have a chance to apply Power Word: Shield (Rank 1) to your target.  ****New Set Spell ID****
entry: **New Set ID Here**
name: **Medic's Cloth**
itemID_1: **Cowl of the Medic ID**
itemID_2: **Shroud of the Medic ID**
itemID_3: **Medic's Sprocket ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **17**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/Als4f96.jpeg)
---
![Image](https://i.imgur.com/cXsrFyy.jpeg)
---
 **Gnomeregan Set Quest NPC**
Near the top of the Ramp above The Clean Zone there will be a new Gnome NPC named ****Tigol Bytes****.

 ****Tigol Bytes NPC Info.****

name: **Tigol Bytes**
displayid: **6628**
npcflags: **3**
faction: **35**
Emote ID: **133**

 ****Notes:****
- Most importantly he's holding a Remote type of item. Item ID: **60539** is perfect.  <https://database.turtlecraft.gg/?item=60539>

- We like Display ID: **6628** overall however Display ID: **20341** has a good outfit to differentiate him, keeping the goggles obviously.

 ****NPC Greeting:****

Emote ID: **133**
Triggers: **Menu 1**
Shows Text:

Greetings... Uhm could you move a bit to the left my device is losing signal... Thank you that's much better.

If you happen upon anything of value and are in need of help let me know I'm very good with my hands.

Choice: **What are you doing up here?**

Redirects to **Menu 2**
Emote ID: **5**
Shows Text:

Honestly the signal downstairs is horrible! I have many clients I am in contact with and they are in need of my expertise.

I took this job because I heard it's just guarding a post but they have everything under control! It's great I can contact my clients at the same time and besides I could really use the funds.

Choice: **You're low on gold. Did something happen?**

Redirects to **Menu 3**
Emote ID: **1**
Shows Text:

Let's just say I had a handful of deals go bad. I did everything like they wanted but they didn't like the outcome. However the issue really is that I needed some materials for projects and told them I'd get their gold as soon as I finished those jobs.

I've learned that you can't always trust people to pay out and I'm in a bit of a bad spot right now. However I have a few projects in the works and I'm confident I'll pull through.

Choice: **What did you mean if I find anything of value you'd be able to help?**

Redirects to **Menu 4**
Emote ID: **133**
Shows Text:

Well I've been known to make nothing into something, there's a lot of junk scattered around Gnomeregan and I'm sure if I could get my hands on some of it I might be able to make wonders.

However like I said I'm on hard times right now, if you find something you think is interesting bring it to me and we'll see if I get inspired.

 ****Custom Voices:****
I recorded these myself. **Volca** recommended **.mp3**
These are available for direct download.

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275167377%3Fsecret_token%3D]

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275168874%3Fsecret_token%3D]

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275169069%3Fsecret_token%3D]

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275169747%3Fsecret_token%3D]

---
![Image](https://i.imgur.com/oEjiXqF.png)
---
 **Gnomeregan Set Quest**

 ****Grime-Encrusted Cloak****

What do you have here? Interesting, it appears to be some sort of drape covered in muck however there might be some potential beneath all of that grime. I tell you what, if you get me a few things I think I can soak up the grime and buff this out for you. I would need Mooncloth and Flask of Chromatic Resistance to soak it up and  Whipper Root Tubers to scrub it all out for you. As well as payment of course.

Grime-Encrusted Cloak: **1**
Mooncloth: **3**
Flask of Chromatic Resistance: **1**
Whipper Root Tuber: **20**
Requires: **100 Gold**
entry: **New ID Here**
Method: **2**
AllowableClass: **Class ID Here**
MinLevel: **1**
QuestLevel: **1**
ConditionType: **27**
ConditionValue1: **57736**
Title: **Grime-Encrusted Cloak**
Details: **What do you have here? Interesting, it appears to be some sort of drape covered in muck however there might be some potential beneath all of that grime. I tell you what, if you get me a few things I think I can soak up the grime and buff this out for you. I would need Mooncloth and Flask of Chromatic Resistance to soak it up and  Whipper Root Tubers to scrub it all out for you. As well as payment of course.**
Objectives: **Get Tigol Bytes what he needs for the Grime-Encrusted Cloak.**
ReqItemID1: **Grime-Encrusted Cloak ID**
ReqItemCount1: **1**
ReqItemID2: **14342**
ReqItemCount2: **3**
ReqItemID3: **13513**
ReqItemCount3: **1**
ReqItemID4: **11951**
ReqItemCount4: **20**
RewOrReqMoney: **-1000000**
RewItemID1: **Corresponding Class Cloak ID**
RewItemCount1: **1**
OfferRewardText: **Extraordinary! $N I would like you to know this turned out much better than I thought it would, and with materials to spare! Perhaps we should do business again sometime.**

 ****Notes:****
- The ConditionType and ConditionValue1 has the Lunatic Challenge ID, I think that should make it Lunatic Exclusive so it doesn't appear otherwise.

- Instead of posting this 9 times for each class, it seemed appropriate to just post it once, obviously this would have to be copied and changed for each class.

 ****Grime-Encrusted Gear****

Hm? Interesting very interesting. This gear is so coated with grime and it's so small that I really don't think we can buff this out. I think I could coat it and create a new inner band if you insist on utilizing this. Judging by it's size there is one band that comes to mind that should fit perfectly and it's The Rock. I've seen it on display at Booty Bay. Then I would need some Delicate Arcanite Converters and Dark Iron Bars to make a proper coating. As well as payment of course.

Grime-Encrusted Gear: **1**
The Rock: **1**
Delicate Arcanite Converter: **3**
Dark Iron Bar: **20**
Requires: **100 Gold**
entry: **New ID Here**
Method: **2**
AllowableClass: **Class ID Here**
MinLevel: **1**
QuestLevel: **1**
ConditionType: **27**
ConditionValue1: **57736**
Title: **Grime-Encrusted Gear**
Details: **Hm? Interesting very interesting. This gear is so coated with grime and it's so small that I really don't think we can buff this out. I think I could coat it and create a new inner band if you insist on utilizing this. Judging by it's size there is one band that comes to mind that should fit perfectly and it's The Rock. I've seen it on display at Booty Bay. Then I would need some Delicate Arcanite Converters and Dark Iron Bars to make a proper coating. As well as payment of course.**
Objectives: **Get Tigol Bytes what he needs for the Grime-Encrusted Gear.**
ReqItemID1: **Grime-Encrusted Gear ID**
ReqItemCount1: **1**
ReqItemID2: **7337**
ReqItemCount2: **1**
ReqItemID3: **16006**
ReqItemCount3: **3**
ReqItemID4: **11371**
ReqItemCount4: **20**
RewOrReqMoney: **-1000000**
RewItemID1: **Corresponding Class Ring ID**
RewItemCount1: **1**
OfferRewardText: **Extraordinary! $N I would like you to know this turned out much better than I thought it would, and with materials to spare! Perhaps we should do business again sometime.**

 ****Notes:****
- The ConditionType and ConditionValue1 has the Lunatic Challenge ID, I think that should make it Lunatic Exclusive so it doesn't appear otherwise.

- Instead of posting this 9 times for each class, it seemed appropriate to just post it once, obviously this would have to be copied and changed for each class.

 ****Grime-Encrusted Scraps****

This grime is really caked on, it's literally solidified. If we're going to have any chance at restoring this it's going to need a lot of work. I have heard of a coarse sand that isn't typically available to mortal races and this is the only time I have ever thought I'd need it. In order to have any shot at this I am going to need 5 Golden Pearls to withstand scraping this, 20 Hourglass Sand, and 20 Stonescale Oils to help loosen up the grime. As well as payment.

Grime-Encrusted Scraps: **1**
Golden Pearl: **5**
Hourglass Sand: **20**
Stonescale Oil: **20**
Requires: **100 Gold**
entry: **New ID Here**
Method: **2**
AllowableClass: **Class ID Here**
MinLevel: **1**
QuestLevel: **1**
ConditionType: **27**
ConditionValue1: **57736**
Title: **Grime-Encrusted Scraps**
Details: **This grime is really caked on, it's literally solidified. If we're going to have any chance at restoring this it's going to need a lot of work. I have heard of a coarse sand that isn't typically available to mortal races and this is the only time I have ever thought I'd need it. In order to have any shot at this I am going to need 5 Golden Pearls to withstand scraping this, 20 Hourglass Sand, and 20 Stonescale Oils to help loosen up the grime. As well as payment.**
Objectives: **Get Tigol Bytes what he needs for the Grime-Encrusted Scraps.**
ReqItemID1: **Grime-Encrusted Scraps ID**
ReqItemCount1: **1**
ReqItemID2: **13926**
ReqItemCount2: **5**
ReqItemID3: **19183**
ReqItemCount3: **20**
ReqItemID4: **13423**
ReqItemCount4: **20**
RewOrReqMoney: **-1000000**
RewItemID1: **Corresponding Class Head ID**
RewItemCount1: **1**
OfferRewardText: **Extraordinary! $N I would like you to know this turned out much better than I thought it would, and with materials to spare! Perhaps we should do business again sometime.**

 ****Notes:****
- The ConditionType and ConditionValue1 has the Lunatic Challenge ID, I think that should make it Lunatic Exclusive so it doesn't appear otherwise.

- Instead of posting this 9 times for each class, it seemed appropriate to just post it once, obviously this would have to be copied and changed for each class.

---
 **Assault on Gnomeregan Promotional Video**

[embed: https://www.youtube.com/embed/vSaJ3feLePg]

---

Community Recognition. Credit to Raethelunatic, Beef, Solutions, Taksman, Theonehunter, Tommytango, Edahs on Names, Item Models, Flavor Texts.

As well as an absolutely HUGE shout out to Zvyrhol for supporting this thread with Tigol Bytes' NPC images created on a Vmangos Server.

---
 *Disclaimer: I am not part of the dev team. I am only making a forum post to help support and facilitate the content this community enjoys with the support of the Lunatic Community. We have been very patient for nearly a year and now we just want to help.*

*Last edited by Cysthen on Wed Apr 15, 2026 1:34 pm, edited 1153 times in total.*

## Post 132927 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-25T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132927#p132927 | page 1 | era: pre-1.18.1 -->

Who told you lvl 1 lunatics are supposed to have gear progression?

## Post 132928 by Cysthen (Patch Note Conspiracy Theorist) — 2025-05-25T13:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132928#p132928 | page 1 | era: pre-1.18.1 -->

> **Noephix wrote: Sun May 25, 2025 12:55 pm**
> Who told you lvl 1 lunatics are supposed to have gear progression?

They do already now, it's just Deadmines takes 4+ Hours.

## Post 132991 by StabsMcKenzy (Barrens Chat Casualty) — 2025-05-25T22:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132991#p132991 | page 1 | era: pre-1.18.1 -->

> **Noephix wrote: Sun May 25, 2025 12:55 pm**
> Who told you lvl 1 lunatics are supposed to have gear progression?

I guess it would depend on your definition of "progression" wouldn't it? Based on the usual mmo term, it's safe to say that any new gear that provides better stats than your current gear would be considered progression. Some will argue that only getting new "tiers" of gear is progression and anything in between is meaningless.

If you're the kind of person to align with the first definition, then I'd say the two change logs that stated "new gear for lunatics in rfc and deadmines" seems like a reasonable place to assume we were informed from. So to answer your question the dev's/gm's would be the ones who said we have gear progression.

If you're more interested in the second definition then worry not. There isn't gear progression for lvl 1 lunatics and there likely won't be. Cysthen is requesting they add more "meaningless gear" for lvl 1s, so no need to concern yourself.

## Post 133130 by Totallynotmel — 2025-05-26T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133130#p133130 | page 1 | era: pre-1.18.1 -->

We hunger for gear like raccoons in a dumpster.
#Fashion4Lunatics

## Post 162536 by Cysthen (Patch Note Conspiracy Theorist) — 2025-12-12T05:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162536#p162536 | page 1 | era: 1.18.1-announced-pre-release -->

Plan on editing this some more with more ideas and tweaking what was there. We discovered Warrior Tanking Potential so Hunter threat reduction on Bow is less important. Learning every day.

Here is our Server First Mutanus the Devourer:

[embed: https://www.youtube.com/embed/0uBNFXg1Rag]

Here is an example of our Loot Driven Runs that don't do full Runs whats so ever because theres no point with the current items in place.

[embed: https://www.youtube.com/embed/2TlQq4yi_es]

Full runs are more fun and more epic and our community wants to have a reason to do them.

## Post 162666 by Cysthen (Patch Note Conspiracy Theorist) — 2025-12-13T15:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162666#p162666 | page 1 | era: 1.18.1-announced-pre-release -->

Gnomeregan Template is complete as a rough draft. The idea is to have the Set Requirements cost a lot of gold similar to the Karazhan and Naxx Requirements. Items from Venders across the world like The Rock for 100 Gold and weird stuff. This challenge is a Gold Dump and helps the Server Economy and this plays into that some.

*Last edited by Cysthen on Fri Jan 23, 2026 2:06 pm, edited 1 time in total.*

## Post 162673 by Xudo (Grandmaster of Forum PvP) — 2025-12-13T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162673#p162673 | page 1 | era: 1.18.1-announced-pre-release -->

First of all, I am neutral regarding gear for lunatics. Lvl 19 twinks (and 29 and 39) got their additional items from turtle, so more items for lvl 1 will be totally fair.

I just think that it is very unusual that you guys want some gear progression for very niche part of community when there is "normal" gear progression at lvl 60.
Assuming that anyone need to create lvl 60 character to make lvl 1 lunatic, it is double unusual.
Like "we don't want to involve in high level dungeons and raids and pvp, but we still need some gear progression".
Only rational explanation is that there is something very wrong with lvl 60 gear progression that discourage you to involve in it.

## Post 162688 by Cysthen (Patch Note Conspiracy Theorist) — 2025-12-13T18:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162688#p162688 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Sat Dec 13, 2025 4:09 pm**
> First of all, I am neutral regarding gear for lunatics. Lvl 19 twinks (and 29 and 39) got their additional items from turtle, so more items for lvl 1 will be totally fair.
>
>  I just think that it is very unusual that you guys want some gear progression for very niche part of community when there is "normal" gear progression at lvl 60.
>  Assuming that anyone need to create lvl 60 character to make lvl 1 lunatic, it is double unusual.
>  Like "we don't want to involve in high level dungeons and raids and pvp, but we still need some gear progression".
>  Only rational explanation is that there is something very wrong with lvl 60 gear progression that discourage you to involve in it.

Good concerns however you don't need a 60 to enjoy the Lunatic Challenge. It helps sure but we have access to Fishing and many have joined this server specifically for this Challenge and have gotten full best in slot with gold from Fishing. We run these Raids every Week already and there's no incentive to do full runs we stop part way through and kill Early Bosses because they're the only ones that drop rewards and loot for us. It's all already there and is a seperate endgame it's just not fleshed out fully currently.

Honestly for me personally I've done the content at 60 and it feels too easy. I've enjoyed hosting these Raids at Level 1 more because we have to come up with more unique solutions for encounters. For example we had to have a Hunter get threat on a specific Snake during the Mutanus Escort because otherwise the Tauren does too much threat on its first Target and dies because we can't heal him.

These items only drop if the Dungeon ID has only Lunatics inside so they are genuine Raids. There's nothing stopping players from enjoying both 60 and Level 1 Raids.

## Post 163901 by Drazenexe — 2025-12-28T04:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163901#p163901 | page 1 | era: 1.18.1-announced-pre-release -->

Ain't no way a vtuber on here, yeah im deleting my fully decked out lvl 1

## Post 165342 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-16T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165342#p165342 | page 1 | era: 1.18.1-announced-pre-release -->

We are beginning to code these items and take suggestions for Models, Names, and Flavor Texts from the community.

Ragefire Chasm Items have Code added for the changes under each item via a Spoiler for the developers to copy paste if they want to support these changes.

More coming soon we plan to code everything listed. Learning quite a bit, some of the item effects might change if the spell IDs are not available.

## Post 165353 by Xudo (Grandmaster of Forum PvP) — 2026-01-16T17:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165353#p165353 | page 1 | era: 1.18.1-announced-pre-release -->

Speaking of coding your own items, wouldn't it be easier to setup your own server "just for lunatics"?
I mean, you can reuse almost all Vanilla content. You can add any item in one evening. You would be able to add any additional skills. You don't use much of turtle-specific content. You would be able to tweak any game formulas to balance it between fun/challenging specifically for lvl1s. And you would not need to care how it would affect rest of the world.

## Post 165358 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-16T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165358#p165358 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Fri Jan 16, 2026 5:58 pm**
> Speaking of coding your own items, wouldn't it be easier to setup your own server "just for lunatics"?
>  I mean, you can reuse almost all Vanilla content. You can add any item in one evening. You would be able to add any additional skills. You don't use much of turtle-specific content. You would be able to tweak any game formulas to balance it between fun/challenging specifically for lvl1s. And you would not need to care how it would affect rest of the world.

We already have items and play here it's just questionable because the progression is non-existent. I have no interest in hosting a Server, an odd suggestion. My only interest is streamlining anything I can for them so they can spend as little resources and time as necessary to support us. As that seems to be an issue for some reason as the last year has showed us with still no items past Sneed and Anacondra. Is partially why I updated the Lunatic Information Forum as well as it was not receiving updates and was misleading. Another method of streamlining things for them so they have one less thing to worry about.

As for Turtle specific content. We use Deadmines, Wailing Caverns extensions, all zones for Exploration Title, and Wildhammer/Centaur Reputation which is custom here.

## Post 165369 by Terrydavis (Patch Note Conspiracy Theorist) — 2026-01-16T20:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165369#p165369 | page 1 | era: 1.18.1-announced-pre-release -->

my suggestion is to delete all lvl 1 content and not waste a single further dev hour on that as it only caters to 0.1% of the server

## Post 165382 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-16T21:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165382#p165382 | page 1 | era: 1.18.1-announced-pre-release -->

> **Terrydavis wrote: Fri Jan 16, 2026 8:21 pm**
> my suggestion is to delete all lvl 1 content and not waste a single further dev hour on that as it only caters to 0.1% of the server

I don't think they'll delete one of the most fun things on the server with a thriving community, but I am seeing that this is a recurring sentiment among players about dev time being spent. Which is why we are trying to streamline that, so that the people who don't care such as yourself can see it as less dev time.

## Post 165555 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-18T20:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165555#p165555 | page 1 | era: 1.18.1-announced-pre-release -->

After many hours of work.

We have finished the coding information for all gear in The Deadmines. I also restructured the thread to make it more presentable.

All Spoiler dropdowns also include an image of the chosen item models.

We also added a Note to the Developers on the top, as obviously we don't have any Entry ID's or the Lunatic Flag ID.

Thank you all.

Everything past Deadmines is a work in progress still. Thank you to the Lunatic Community for your contribution on Names, Item Models, Flavor Texts, and more.

## Post 166016 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-23T01:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166016#p166016 | page 1 | era: 1.18.1-announced-pre-release -->

After significantly more hours and edits.

I would like to announce we have finished coding information for all gear in Wailing Caverns.

Thank you Taksman, Solutions, Beef, Raethelunatic and the rest of the Lunatic Community on any input for these items, names, models, and flavor text.

There are some in particular that literally made me laugh out loud mostly Kresh's Pastron and Leggings of the Cuspid.

This is a big milestone. That is all of our current available PVE Raids with items available to the developers to use if they want via copying parameters or for inspiration.

Following this I will finish working on a Promotional Gnomeregan 40 Video we recorded.

Up next we will attack the PVP Reputation Items, I will make sure to include Level 19 variations for Arathi Basin as well so that its more easily given to both our brackets on the Mini-map.

Then on to SFK. Which should be fun because theres a few more Custom Spell IDs. That was a learning experience.

Thank you Turtle WoW Team, and Community.

## Post 166031 by ferundal (Barrens Chat Casualty) — 2026-01-23T09:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166031#p166031 | page 1 | era: 1.18.1-announced-pre-release -->

Lol 1 lvl Lunatic is gankers who abuse overstats on 1 level. What gear progression you even talk about? No one will change gear for you. Want more hit? Level up.

## Post 166032 by Atreidon (Grandmaster of Forum PvP) — 2026-01-23T09:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166032#p166032 | page 1 | era: 1.18.1-announced-pre-release -->

Isnt the whole point of twinks that you dont have to chase the carrot and can just get your items and enchants and be done with it?

## Post 166034 by ferundal (Barrens Chat Casualty) — 2026-01-23T10:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166034#p166034 | page 1 | era: 1.18.1-announced-pre-release -->

Also entire point of 1 lvl Lunatic PvE progression is "To see how far 1 lvls can go in WoW", not "how far they will go with items that helps them go further"

## Post 166037 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-23T10:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166037#p166037 | page 1 | era: 1.18.1-announced-pre-release -->

> **ferundal wrote: Fri Jan 23, 2026 10:08 am**
> Also entire point of 1 lvl Lunatic PvE progression is "To see how far 1 lvls can go in WoW", not "how far they will go with items that helps them go further"

We already have items in our dungeons and raid them twice a week with both NA and EU, it's just there's no reason to go past Sneed or Anacondra so we don't. So we already have carrots.

And if you read Hit does hardly anything for us and isn't even really noticable until about 3%. Even in full BiS listed with 5% we're still going to miss 33% of Attacks.

Unless you've done testing on a vmangos server like we have you wouldn't know that, and it looks really scary on paper but in reality it's not.

The hit on here isn't to change how we play, it's to change clear times some as they're long currently and to miss about a third of attacks instead of half. (Only from behind, Rogues ping pong enemies and it takes 2 to threat, we'll still miss every attack from the front). Which seems an appropriate item progression and to help Rogue Threat.

These changes would give us hit and miniscule attack power. With PVP Towers coming in 16+ Level Zones like The Barrens and Redridge our PVP will shift focus to higher levels. We hit for like 20 Damage at best. If we get a few more attacks in that's fine because we're going to get bodied anyway.

Not to mention help the economy as we'll need additional Enchants.

*Last edited by Cysthen on Thu Jan 29, 2026 12:04 am, edited 1 time in total.*

## Post 166041 by Chillalotsd — 2026-01-23T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166041#p166041 | page 1 | era: 1.18.1-announced-pre-release -->

> **ferundal wrote: Fri Jan 23, 2026 9:40 am**
> Lol 1 lvl Lunatic is gankers who abuse overstats on 1 level.

Please keep in mind, that we can only attack people, who attacked us first. There are nearly no people with activated warmode in the starter zones, so it's very hard for us, to really find someone to fight.
On a normal session of 2-3 hours, I get about 5-15 kills and getting killed about 10 times. Is that, what you call "ganking"?

## Post 166053 by Cnolle — 2026-01-23T13:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166053#p166053 | page 1 | era: 1.18.1-announced-pre-release -->

This is amazing I would love to see gearing implemented for level ones that doesn’t make a level one overtly unkillable but does give level ones the ability to fight higher level players or monsters using +hit

## Post 166056 by Drubarrymooer (Grandmaster of Forum PvP) — 2026-01-23T14:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166056#p166056 | page 1 | era: 1.18.1-announced-pre-release -->

I like the idea but I'm a bit concerned with the stats.  A lot of the stats seem high for level 1 when they already have access to many high level enchants.

## Post 166058 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-23T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166058#p166058 | page 1 | era: 1.18.1-announced-pre-release -->

> **Drubarrymooer wrote: Fri Jan 23, 2026 2:15 pm**
> I like the idea but I'm a bit concerned with the stats.  A lot of the stats seem high for level 1 when they already have access to many high level enchants.

I mean keep in mind these are 10 Man Raid drops that take hours. I don't think a spirit or two and 2 attack power is very high personally. Casters do significantly less damage so that's why I put a proc on the staff. As they don't have access to Fiery Enchant in PVP for example for their spells.

## Post 166059 by Drubarrymooer (Grandmaster of Forum PvP) — 2026-01-23T14:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166059#p166059 | page 1 | era: 1.18.1-announced-pre-release -->

> **Cysthen wrote: Fri Jan 23, 2026 2:20 pm**
> > **Drubarrymooer wrote: Fri Jan 23, 2026 2:15 pm**
> > I like the idea but I'm a bit concerned with the stats.  A lot of the stats seem high for level 1 when they already have access to many high level enchants.
>
>   I mean keep in mind these are 10 Man Raid drops that take hours. I don't think a spirit or two and 2 attack power is very high personally. Casters do significantly less damage so that's why I put a proc on the staff. As they don't have access to Fiery Enchant in PVP for example for their spells.

I was thinking more about 12 stam and the amount of spell/healing power.  Most of the pieces are fine.

## Post 166060 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-23T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166060#p166060 | page 1 | era: 1.18.1-announced-pre-release -->

> **Drubarrymooer wrote: Fri Jan 23, 2026 2:25 pm**
> > **Cysthen wrote: Fri Jan 23, 2026 2:20 pm**
> > > **Drubarrymooer wrote: Fri Jan 23, 2026 2:15 pm**
> > > I like the idea but I'm a bit concerned with the stats.  A lot of the stats seem high for level 1 when they already have access to many high level enchants.
> >
> >   I mean keep in mind these are 10 Man Raid drops that take hours. I don't think a spirit or two and 2 attack power is very high personally. Casters do significantly less damage so that's why I put a proc on the staff. As they don't have access to Fiery Enchant in PVP for example for their spells.
>
>  I was thinking more about 12 stam and the amount of spell/healing power.  Most of the pieces are fine.

That 12 Stamina is because we already have access to Fishing Hat with 15 Stamina. It's losing 3 Stamina for other bonuses. However when I get to Gnomeregan I might drop it down to 10 Stamina.

I'm a little reluctant to do that because we're already losing 12 Stamina for the Hit Boots. We have to be able to survive some mechanics in PVE.

As for Spell Damage and Healing. Our spells have very little scaling. 10 Healing is only 1 more on our Heals for example. Not to mention Casters are losing another 10 Stamina not using Furbolg Pouch to use that Staff until the last boss of Gnomeregan Dagger. So Casters are already down 22 Stamina in a full DPS set.

## Post 166315 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-24T18:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166315#p166315 | page 1 | era: 1.18.1-announced-pre-release -->

Warsong Gulch Items are complete. All Buy and Sell Prices are half of their Level 19 Versions.

I put the Reputation Requirement on the items but noticed they aren't available to be seen on the Vender until you have the Repuation. This might be a seperate NPC Coding I am not aware of in which case the new item ID's can be added to those locations.

That said from my understanding Reputation Requirements are typically handled by items so I included them anyway.

## Post 166575 by Fizzler (Patch Note Conspiracy Theorist) — 2026-01-26T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166575#p166575 | page 1 | era: 1.18.1-announced-pre-release -->

Not sure if devs will listen to your proposal to make lunatic content that is like 0.1% of the player base though hope you get your gear

## Post 166594 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-27T02:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166594#p166594 | page 1 | era: 1.18.1-announced-pre-release -->

> **Fizzler wrote: Mon Jan 26, 2026 7:16 pm**
> Not sure if devs will listen to your proposal to make lunatic content that is like 0.1% of the player base though hope you get your gear

Thank you. Rewards help drive interest. We just recently got Logs for our Raids and are doing them twice a week. NA Times and EU Times. Did a Gnomeregan Raid to showcase our communities potential and growth.

Appreciate the support. We care not just because we love and enjoy this content but anyone who's done it with us can see the immense potential of what it can become. These items are the culmination of the entire community and what we think would be appropriate.

More to come soon, will try to code the whole thing over time. Maybe a few slight changes, for example considering Healing Threat Reduction on Priest/Druid/Shaman Set however if we get these other items the Healing Threat issue might go away with Tanks doing more threat in the first place so it's hard to say until we see what that can look like.

## Post 166608 by berdal (Barrens Chat Casualty) — 2026-01-27T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166608#p166608 | page 1 | era: 1.18.1-announced-pre-release -->

This becomes too similar to lvl60 endgame IMHO.

I'd say tone it down a little. Items are too powerful. Most items should have at most one stat modifier, and be white/green/blue, instead of green/blue/epic. Also decrease drop rate.

But agree, L1L needs item proper rebalance on existing items, drops from all/more bosses.

But LOVE your enthusiasm! Keep at it :) I hope you get their attention.

## Post 166611 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-27T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166611#p166611 | page 1 | era: 1.18.1-announced-pre-release -->

> **berdal wrote: Tue Jan 27, 2026 11:17 am**
> This becomes too similar to lvl60 endgame IMHO.
>
>  I'd say tone it down a little. Items are too powerful. Most items should have at most one stat modifier, and be white/green/blue, instead of green/blue/epic. Also decrease drop rate.
>
>  But agree, L1L needs item proper rebalance on existing items, drops from all/more bosses.
>
>  But LOVE your enthusiasm! Keep at it :) I hope you get their attention.

I only made the Chest pieces that way, and the Cape and Chest is already 25% Droprate.

White Items can't be Master Looted even if the Loot Rules are set to Common. On Master Loot right clicking a White Item even with those Loot Rules Set just loots the item. We've had many mishaps and accidental loots with new Raid Leaders due to this issue. That's why I made the move to Green/Blue/Epic instead. And the only Epics are on Mutanus, Arugal, and Gnomeregan which is entirely appropriate having personally done Mutanus.

I tried to walk a fine line on item power for this to be as digestible for the Devs as possible. It's hard to understand until you see it but Hit isn't as strong as people think it is. 1% makes you go from 50% Miss from behind to 47% Miss. You aren't going to feel that change at all as a player until you get more.

For example we used Fire-toasted Bun (2% Hit, Limited Use) from Fire Festival and could hardly even tell if the 2% Hit did anything. I know it did, but when you're still missing 44% of attacks it's hard to tell.

It's not going to drastically change how we play, I stopped at 5% Hit on here because I think it's an appropriate stopping point. It limits us to missing a third of attacks instead of half. Not to mention it requires us to drop 12 Stamina not using Fishing Boots and to buy another Sapphiron Enchant to benefit from the full 5%. So there's quite a lot of trade offs happening and helping fund endgame 60 Guilds. On top of earning the items in the first place.

I think it should look similar to 60 endgame. It's already its own form of endgame. The only difference being our items are silly and all have flavor texts using the existing items for example.

I gave the Kresh Shield 3 Stamina to be a Furbolg Pouch Equivalent for Shield Users with 7 Stamina Enchant.

What's on display here, would create a fully fleshed out alternative endgame to the existing one at Level 60. Available to all players meanwhile being extremely accessible to casuals/newcomers, since all you have to do is log in on a newly created Level 1. As well as help the economy with the repeated need for enchants and a significant gold dump required for the Gnomeregan pieces.

Some of the later pieces might get reevaluated as I get to coding them. For example 1% Meditation wasn't an available Spell ID so I changed the Healing Mace in Wailing Caverns to 2 Healing instead of 4.

As for future items with 2% Health Regeneration in Combat for example, the current lowest available Spell ID is 5% so I'll have to create a new Spell ID for that as it's not ideal to settle for Health per 5 with Troll Warrior.

## Post 166702 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-28T03:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166702#p166702 | page 1 | era: 1.18.1-announced-pre-release -->

[viewtopic.php?f=63&t=23765](https://forum.turtlecraft.gg/viewtopic.php?f=63&t=23765)

While I appreciate the changes, especially the Bow, and Spirit additions to Neck/Ring.

Both Chest and Fiery Cloak Changes are questionable. Let me reiterate.

 99% Miss doesn't change from the front.

 50% Miss from behind is base.

 1% Hit = 47% Miss from Behind only.
 2% Hit = 44% Miss from Behind only.
 3% Hit = 41% Miss from Behind only.
 4% Hit = 38% Miss from Behind only.
 5% Hit = 35% Miss from Behind only.

I don't think theres any harm in giving us anywhere from 3-5% over the course of a long progression such as this.

We won't notice much improvement at all until an entire Raid has about 2-3%.
Not to mention the current Chest situation, lets just say the Wailing Caverns 1 Agility one is better.
We already have a lot of Stamina, if anything more Stamina hurts PVP more than the Hit would.

The only reason I put Stamina on those Chests is to slightly offset losing 12 Stamina when using the Hit Boots.

If you were going to drop some stats on this sheet, it would be everything but the Hit.

That aside, thank you so much I will continue to do my best to provide this for you all to either use outright or for inspiration. Also Whites can't be Master Looted. Thank you.

Edit: After including Hit Math Images 1% Hit is more like 2.2% Hit, its been a long time so my memory was a little fogged on the exact numbers but it was about right give or take.

*Last edited by Cysthen on Thu Jan 29, 2026 12:07 am, edited 2 times in total.*

## Post 166724 by Xudo (Grandmaster of Forum PvP) — 2026-01-28T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166724#p166724 | page 1 | era: 1.18.1-announced-pre-release -->

Sorry for offtopic, but why 1% of hit gives 3% of effect? Shouldn't it give 1% of effect? Did you fill bugreport about it?

## Post 166727 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-28T09:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166727#p166727 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Wed Jan 28, 2026 8:42 am**
> Sorry for offtopic, but why 1% of hit gives 3% of effect? Shouldn't it give 1% of effect? Did you fill bugreport about it?

This is just how it works on a vmangos private server we did for testing. It doesn't change anything from hitting from the front. It's not a bug it's just what happens on a Level 1.

## Post 166729 by Xudo (Grandmaster of Forum PvP) — 2026-01-28T09:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166729#p166729 | page 2 | era: 1.18.1-announced-pre-release -->

By the way, why you ask about so small numbers? With 50% of misses you can aswell ask for +5% hit items.
Assuming that lunatics never level up and their items are not available for normals, it will be fine.

## Post 166731 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-28T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166731#p166731 | page 2 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Wed Jan 28, 2026 9:51 am**
> By the way, why you ask about so small numbers? With 50% of misses you can aswell ask for +5% hit items.
>  Assuming that lunatics never level up and their items are not available for normals, it will be fine.

Yeah no.

I'm not asking for +50 Weapon Skill or 5% Hit on a single piece that's ridiculous.

 1% Hit is a modest ask on a single piece requiring Raids to do multiple runs to collect them all over a significant amount of time. That's what a true progression would be.

Not to mention if they ever allow us to level again 1% Hit is eventually replaceable and would of been genuinely earned doing these Raids.

At minimum I think end bosses should have a blue with 1% Hit only. We didn't get that and it's worse than the Wailing Caverns Chest.

I'll include pictures for our Hit Testing soon.

## Post 166809 by Cysthen (Patch Note Conspiracy Theorist) — 2026-01-29T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166809#p166809 | page 2 | era: 1.18.1-announced-pre-release -->

I have updated the thread with our Hit Math findings.
Including test pictures performed by Pyropal on a vmangos server.

This update includes a complete inclusion of 1-9 and 10-19 Arathi Basin Items to help facilitate them enabling it for both of our brackets.

As well as new notes on the recently changed items. Thank you.

## Post 167275 by KROGUARDIOUS — 2026-02-03T02:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167275#p167275 | page 2 | era: 1.18.1-announced-pre-release -->

Make the items green for master loot please!

## Post 167332 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-03T17:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167332#p167332 | page 2 | era: 1.18.1-announced-pre-release -->

It took a long time but I'd like to announce that we've finally completed Coding Shadowfang Keep Items.

Thank you to Theonehunter, Tommytango, and Taksman for helping with Item Name and Flavor Text ideas.

I picture Shadowfang Keep being one of our last 10 Mans as far as difficulty is concerned.

Thank you Turtle WoW Team. I hope any of this can help expedite future support.

Also I would like to add. Not sure if there are any plans for the new Frostmane Hollow Dungeon for us however it would be cool to have that be a simulatanous release. Might be a pipe dream. I haven't heard anything about it, wish you all the best on it.

## Post 167637 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-07T05:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167637#p167637 | page 2 | era: 1.18.1-announced-pre-release -->

Update: 2/7/26
---
I've added the following section explaining how Level 1's can already hit Level 60 players reliably with testing in support of us potentially getting Hit items and it barely affecting PVP.

---
 **How PVP Hit Works**

I've decided to add this section because there seems to be some reluctance from the developers to add hit items for us. I am not sure if the disconnect is a misunderstanding of how it works or just being unaware so I am clearing that up right now.

 2 Hours testing a Level 1 with 5 Weapon Skill hitting a Level 60 with 300 Defense:

[embed: https://www.youtube.com/embed/NUQEcrvCaOs]

---

![Image](https://i.imgur.com/vREFErv.jpeg)
---
We have 83% Hit/17% Miss against a Level 60.
The test results show that a Level 1 already has no issue hitting a majority of hits on a player regardless of level.
These tests were done on a Level 60 in full Naxx Gear on Turtle WoW. With that proven it is our firm belief that Hit would very minimally affect PVP if that was a concern or reason for hesitation. Thank you.
---

*Last edited by Cysthen on Sun Feb 15, 2026 1:13 am, edited 1 time in total.*

## Post 167651 by Xudo (Grandmaster of Forum PvP) — 2026-02-07T10:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167651#p167651 | page 2 | era: 1.18.1-announced-pre-release -->

Just mention. There is new low level dungeon coming. Probably in Dun Moron for 13-20 levels.

[embed: https://www.youtube.com/embed/ji9v7ZbDBb0]

## Post 167672 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-07T13:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167672#p167672 | page 2 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Sat Feb 07, 2026 10:48 am**
> Just mention. There is new low level dungeon coming.

Yeah we're all very excited for it, I think it was a slightly missed opportunity to not also advertise a simulatanous release as a 10 Man Lunatic Raid. That said I absolutely love the trailer that Troll Voice Actor was phenomenal loved it. As of right now we have no confirmation what's so ever if we'll get access but I'd like to assume of course we will if not immediately. Hopefully. I would add items for it here as well but this stuff has to remain a mystery until it comes out. :)

## Post 167692 by Isvya (Patch Note Conspiracy Theorist) — 2026-02-07T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167692#p167692 | page 2 | era: 1.18.1-announced-pre-release -->

If they add this before reworking pvp gear i'll uninstall straight away.

Dont get me wrong, you did put in alot of effort and i dont see any reason against addig these lunatic items.

## Post 167694 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-07T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167694#p167694 | page 2 | era: 1.18.1-announced-pre-release -->

> **Isvya wrote: Sat Feb 07, 2026 5:51 pm**
> If they add this before reworking pvp gear i'll uninstall straight away.
>
>  Dont get me wrong, you did put in alot of effort and i dont see any reason against addig these lunatic items.

They can add the Lunatic PVP Items first ;)

## Post 167695 by Xudo (Grandmaster of Forum PvP) — 2026-02-07T18:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167695#p167695 | page 2 | era: 1.18.1-announced-pre-release -->

I actually agree with Isvya. I am not against niche players that don't grief others.
But a lot of people will be offended that that niche minority get reworked gameplay while glaring problems at lvl 60 exist so long.

## Post 167696 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-07T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167696#p167696 | page 2 | era: 1.18.1-announced-pre-release -->

I am hoping 1.18.1 covers a lot of those issues for endgame players to be entirely honest at which point if they have some spare time they can utilize some of this premade stuff to expedite stuff for us as well.

I'd also like to note that leveling brackets have suffered as well from questionable changes like the Battleground Announcements being removed. That and the PVP Debuff is EXTREMELY questionable prior to level 60. For example Physical Damage being increased beyond Spell Damage in our 1-9 Bracket makes absolutely 0 sense, and the Healing Debuff doesn't affect in Combat Health Regeneration. If anything we need to be doing more damage to kill eachother easier. The only beneficial change was the Healing Reduction for us.

I agree whole heartedly that PVP has been ignored for a long time, not just for us since warmode changes but for the entire server. So I 100% understand where that sentiment is coming from.

This post is more of a PVE Issue which seems to be their specialty. Kara 40 came out with gear on every boss and our content seems to be treated differently for some reason.

I do agree though, I would respect PVP Issues being handled first and I really hope 1.18.1 delivers.

## Post 167977 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-11T17:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167977#p167977 | page 2 | era: 1.18.1-announced-pre-release -->

Update: 2/11/26 ****(Resolved)**** Thank you **Jamey**
---
Edited to address our Priest, Druid, and Shaman Healers who are bottlenecked with threat issues compared to Paladin for a very stupid reason. I've added the following section to address this problem.

---
 **Healing Threat Issues**

Currently ****Lesser Heal Rank 1, Healing Touch Rank 1, and Lesser Healing Wave Rank 1 all do twice as much threat**** as Paladin Heals. This is a major balance issue seeing as our content is heavily focused on managing threat. This causes a major bottleneck in performance for Priests, Druids, and Shamans when in reality they should have more healing over time potential than Paladins.

After researching this issue I've found that it can be addressed in two ways.

 ****Note to Developers:**** I haven't had a chance to test these yet on a vmangos server however I am looking into it and will try to include proof of these solutions working in the future.

The easiest way is just running an SQL to reduce the threat of those 3 Rank 1 Healing Spell IDs. Seeing as Healing Threat isn't much of an issue endgame or outside of our content I see this as an extremely low risk solution.

 **SQL:** Code: Select all

```
REPLACE INTO `spell_threat` (`entry`, `Threat`, `multiplier`, `ap_bonus`) VALUES
(5185, 0, 0.5, 0),
(2050, 0, 0.5, 0),
(8004, 0, 0.5, 0);
```

The second more difficult solution is a C++ Core Edit that makes it so it only affects players with the Lunatic Spell ID. If this is to be considered I highly doubt this would be the method you all use compared to the above method. However I figured I'd include this to show how Lunatic Exclusive Changes could be made.

 **C++ Core Edit:** Code: Select all

```
// --- Configuration ---
// Level One Lunatic Challenge ID
#define SPELL_LEVEL_ONE_LUNATIC_ID 57736

// --- Implementation Logic ---
if (caster->HasAura(SPELL_LEVEL_ONE_LUNATIC_ID))
{
// Define targeted Rank 1 heal IDs
static const std::unordered_set<uint32> lowRankHealIds = {
 8004, // Lesser Healing Wave (Rank 1)
 5185, // Healing Touch (Rank 1)
 2050  // Lesser Heal (Rank 1)
};

// Retrieve the spell currently being processed
if (Spell* spell = caster->GetCurrentSpell(CURRENT_GENERIC_SPELL))
{
if (lowRankHealIds.find(spell->m_spellInfo->Id) != lowRankHealIds.end())
{
threat *= 0.5f; // Apply 50% threat reduction
}
}
}
```

Paladins were obviously given less healing threat due to the nature of how they have to run into melee range for Judgment. When you go into melee range the threat threshold is reduced by 20% making it much easier to take aggro. Priest, Druid, and Shaman Lunatics often run in to attack with Fishing Poles, or have enemies run past them that immediately aggro and kill them. As well as simply are unable to perform on the same level as Paladin due to this bottleneck even though they have more healing over time potential.

For these reasons it would be an extreme quality of life balance change for these spells to have the same threat output as Paladin. Thank you.

---

*Last edited by Cysthen on Fri Mar 06, 2026 12:10 am, edited 3 times in total.*

## Post 168230 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-14T22:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168230#p168230 | page 2 | era: 1.18.1-announced-pre-release -->

Update 2/14/26 Frostmane  Hollow
---
This thread has been updated to include Frostmane Hollow.
In hopes that it can help bring Frostmane Hollow to Lunatics on release.
I want to thank Tommytango, Taksman, and Theonehunter for all of the help with this.

Thank you so much.

---
![Image](https://i.imgur.com/SJPFN9E.jpeg)
---
 **Frostmane Hollow**

 ****Note to Developers:****
- We have no idea what these boss names are, or if this is going to be added for Lunatics or not but figured we'd go ahead and start putting some of these ideas down anyway if you haven't already gotten to this.

 ****Green Room Boss Troll with Snow Leopard Add:****
 **Frostmane's Fury**
Necklace 2 Attack Power.
"It appears to be a tooth from a leopard, or perhaps a tiger cub?" Troll Tribal Necklace Model
![Image](https://i.imgur.com/udzAI8e.jpeg)
class: **4**
subclass: **0**
name: **Frostmane's Fury**
displayid: **9860**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **245**
InventoryType: **2**
ItemLevel: **35**
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It appears to be a tooth from a leopard, or perhaps a tiger cub?"**
MaxDurability:
maxcount: **1**

 ****Notes:****
- Flavor Text in reference of Snow Leopards in Dun Morogh dropping White Tiger Cubs.

 ****Purple Room Boss Warmaster Troll:****
 **Berserker's Tomahawk**
Thrown Weapon 5.8 DPS, 9-13 Damage, 1.9 Speed, 1 Strength, 1 Spirit.
"The Frostmanes believe the heat is in the tools."  Sharp Throwing Axe Model
![Image](https://i.imgur.com/iHmp9qd.png)
class: **2**
subclass: **6**
name: **Berserker's Tomahawk**
displayid: **20782**
Quality: **2**
Flags:
BuyPrice: **1**
SellPrice: **416**
InventoryType: **25**
ItemLevel:
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2: **6**
stat_value2: **1**
dmg_min1: **9**
dmg_max1: **13**
armor:
delay: **1900**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:**"The Frostmanes believe the heat is in the tools."**
MaxDurability:**400**

 ****Notes:****
- You can't scope a Throwing Weapon so the DPS is appropriate.

- For reference a Scoped Defias Longbow is 7.5 DPS.

 ****Kanza the Seer:****
 **Kanza's Skinner**
Skinning Knife 2.8 DPS, 1.4 Speed, 1% Spell Crit, Requires 50 Skinning.
"It appears to be coated in frosty flesh.'" Harpy Skinner Model
![Image](https://i.imgur.com/hX3CntV.jpeg)
class: **12**
subclass: **0**
name: **Kanza's Skinner**
displayid: **20411**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **679**
InventoryType: **21**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **3**
dmg_max1: **5**
armor:
delay: **1400**
spellid_1: **23765**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
RequiredSkill: **393**
RequiredSkillRank: **50**
TotemCategory: **1**
description:**"It appears to be coated in frosty flesh.'"**
MaxDurability:**25**

 ****Notes:****
- It would be a better Swap Weapon when you need an Offhand but worse DPS than the Wailing Caverns Staff.

- This model is extremely unique and only used on that Quest Reward. Its a Blue Skinning Knife.

 ****Blue Room Ice Rock Elemental:****
Drops one of the following:

 **Frostbound Breastplate**
Add Mail Chest 72 Armor, 1 Stamina, 1 Strength, 1% Hit.
"The biting cold only strengthens your resolve." Formidable Chestpiece Model
![Image](https://i.imgur.com/Gd9gCdd.png)
class: **4**
subclass: **3**
name: **Frostbound Breastplate**
displayid: **27212**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **683**
InventoryType: **5**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
stat_type2: **4**
stat_value2: **1**
dmg_min1:
dmg_max1:
armor: **72**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The biting cold only strengthens your resolve."**
MaxDurability: **65**

 ****Notes:****
- Removed the Mail Chest from Smite, this is more appropriate.

 **Frost-Tipped Pike**
Add Polearm 2.4 DPS, 7-11 Damage, 3.80 Speed, Chance on hit: Target's movement slowed by 30% and increasing the time between attacks by 25% for 5 sec.
"You be friends with the elements now." Ice Barbed Spear Model
![Image](https://i.imgur.com/2FrEbsw.png)
class: **2**
subclass: **6**
name: **Frost-Tipped Pike**
displayid: **31613**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **1298**
InventoryType: **17**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **7**
dmg_max1: **11**
armor:
delay: **3800**
spellid_1: **20005**
spelltrigger_1: **2**
spellid_2:
spelltrigger_2:
spellppmRate_1: **1**
bonding: **1**
description: **"You be friends with the elements now."**
MaxDurability: **60**

 ****Notes:****
- DPS is extremely low to facilitate having the Icy Chill Proc.

- Flavor Text is a reword from the amazing trailer. "The Frostmanes be friends with the elements now."

We're looking forward to hopefully being able to experience this content.
---

*Last edited by Cysthen on Thu Mar 05, 2026 11:50 pm, edited 1 time in total.*

## Post 170188 by Cysthen (Patch Note Conspiracy Theorist) — 2026-03-05T23:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170188#p170188 | page 2 | era: 1.18.1-announced-pre-release -->

Update: 3/5/2026 Gnomeregan 40
---
This is a big one, after over a month of the community coming together on this I'm proud to announce we've completed Gnomeregan 40.

This was an immense amount of effort, what the developers do on this server is an insurmountable feat and we have the utmost respect for what they do. Moreso after having done this.

There's not much else to say aside from "Gnomer 40 When".

The following includes loot for every boss, as well as Item Sets for every class, and an NPC for Set Token Quests and Gossip in a location safe for both Factions. (Luckily he's bad at his job and doesn't mind lol). ![🙂](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f642.svg)

---
![Image](https://i.imgur.com/WTVVlNV.jpeg)
---
 **40 Man Gnomeregan**
 ****Future Future Suggestion:****

 ****Grubbis:****
Drops 1 of the following and a Set Token:

 **Chomper's Chunker**
 5.2 DPS +1-2 Nature Damage 3.2 Speed 2h Mace.
 2 Strength.
"It leaves cog shaped indents with each swing."  Finkle's Lava Dredger Model
![Image](https://i.imgur.com/iWcOEW4.jpeg)
class: **2**
subclass: **5**
name: **Chomper's Chunker**
displayid: **31265**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **9427**
InventoryType: **17**
ItemLevel:
RequiredLevel:
stat_type1: **4**
stat_value1: **2**
dmg_min1: **12**
dmg_max1: **18**
dmg_min2: **1**
dmg_max2: **2**
dmg_type2: **4**
armor:
delay: **3200**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It leaves cog shaped indents with each swing."**
MaxDurability: **45**

 **Basilisk Blaster**
 4.2 DPS +1-2 Nature Damage 2.8 Speed Gun.
 2 Attack Power.
"The stock has started to petrify."  Daryl's Hunting Rifle Model
![Image](https://i.imgur.com/7iJ0HBk.jpeg)
class: **2**
subclass: **3**
name: **Basilisk Blaster**
displayid: **20732**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **4783**
InventoryType: **15**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **9**
dmg_max1: **12**
dmg_min2: **1**
dmg_max2: **2**
dmg_type2: **4**
armor:
delay: **2800**
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The stock has started to petrify."**
MaxDurability: **35**

 **Grubbis's Eye on a Stick**
Class: Hunter
Use: Teaches Hunter's Mark Rank 1
"To hunt is to see what others ignore, this arrow ignored nothing and neither will you."  Eyepoker Model
![Image](https://i.imgur.com/ZV3GExx.jpeg)
class:  **9**
subclass:  **0**
AllowableClass:  **4**
name:  **Grubbis's Eye on a Stick**
displayid:  **21014**
Quality:  **3**
Flags:
BuyPrice:  **1**
SellPrice:  **2349**
InventoryType:
ItemLevel:
RequiredLevel:  **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1:  **5298**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding:  **1**
description:  **"To hunt is to see what others ignore, this arrow ignored nothing and neither will you."**
MaxDurability:

 ****Notes:****
- Hunters are pretty good as is, however they don't have a single button to press at ranged it's strictly Auto Shot. With how often we resist spells we think this would be an appropriate addition to the Hunter rotation because it would typically require being cast a few times before being active. We believe this gives Hunter more to do and fixes that problem.

- <https://database.turtlecraft.gg/?spell=5298>

 **Grime-Encrusted Cloak**
Quest Item (Set Token).
"You can't seem to tell where the fabric begins and the grime ends."  Acidproof Cloak Model
![Image](https://i.imgur.com/xbNpGNV.jpeg)
Class:  **12**
Subclass:  **0**
name:  **Grime-Encrusted Cloak**
displayid:  **23085**
Quality:  **4**
Flags:  **64**
BuyPrice:  **1**
SellPrice:  **12293**
StartQuest:  **0**
bonding:  **1**
description:  **"You can't seem to tell where the fabric begins and the grime ends."**

 ****Viscous Fallout:****
Drops 1 of the following and a Set Token:

 **Toxic Poker**
 5.0 DPS +2-3 Nature Damage 1h 1.4 Speed Dagger.
 1 Stamina, 1 Spirit.
"Appears as if it fell and landed point first into the acid."  Gut Ripper Model
![Image](https://i.imgur.com/lC8Etpv.jpeg)
class: **2**
subclass: **15**
name: **Toxic Poker**
displayid: **20312**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **6426**
InventoryType: **13**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
stat_type2: **6**
stat_value2: **1**
dmg_min1: **4**
dmg_max1: **5**
dmg_min2: **2**
dmg_max2: **3**
dmg_type2: **4**
armor:
delay: **1400**
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Appears as if it fell and landed point first into the acid."**
MaxDurability: **35**

 **Idol of Viscosity**
Unique Relic Idol
Equip: Your Wrath has a chance to slow the targets attack speed by 10% for 10 Seconds.
"It's so sticky."  Orb of Kaladoon Model
![Image](https://i.imgur.com/gC4M80T.jpeg)
class: **4**
subclass: **8**
name: **Idol of Viscosity**
displayid: **3109**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8619**
InventoryType: **28**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **New Proc Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"It's so sticky."**
maxcount: **1**

Viscous Fallout
 10 seconds remaining
Attack speed reduced by 10%.

ID: Spell ID Here
SpellName: **Viscous Fallout**
Attributes: **0x10**
SpellFamilyName: **0**
DurationIndex: **21**
Effect1: **6**
EffectApplyAuraName1: **107**
EffectBasePoints1: **-11**
SpellVisualID: **162**

ID: New Proc Spell ID Entry Here
SpellName: **Proc Viscous Fallout**
Attributes: **0x00000140**
Effect1: **6**
EffectApplyAuraName1: **42**
EffectTriggerSpell1: **Insert Above Spell ID**
SpellFamilyName: **7**
SpellFamilyMask: **1**
CustomChance: **5**
procFlags: **65536**

 **Hydromancer Gemstones**
Class: Warlock
Use: Teaches Unending Breath
"Broken shards litter the ground amongst the slime, perhaps they can be of some use."  Blue Power Crystal Model
![Image](https://i.imgur.com/rTNsSXb.jpeg)
class: **9**
subclass: **0**
AllowableClass: **256**
name: **Hydromancer Gemstones**
displayid: **6614**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **4349**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **5698**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Broken shards litter the ground amongst the slime, perhaps they can be of some use."**
MaxDurability:

 ****Notes:****
- This is the only spell we plan on adding outside of the 1-9 Bracket, other spells we've considered are either convenience (like Ressurection in SFK) or fix a problem. This one is strictly for flavor and would unironically be useful for the Underwater Boss if we get Blackfathom Deeps.

- <https://database.turtlecraft.gg/?spell=5698>

 **Grime-Encrusted Cloak**
Quest Item (Set Token).
"You can't seem to tell where the fabric begins and the grime ends."  Acidproof Cloak Model
![Image](https://i.imgur.com/xbNpGNV.jpeg)
Class:  **12**
Subclass:  **0**
name:  **Grime-Encrusted Cloak**
displayid:  **23085**
Quality:  **4**
Flags:  **64**
BuyPrice:  **1**
SellPrice:  **12293**
StartQuest:  **0**
bonding:  **1**
description:  **"You can't seem to tell where the fabric begins and the grime ends."**

 ****Electrocutioner 6000:****
Drops 1 of the following and a Set Token:

 **Electrocutioner's Arm**
 5.2 DPS +1-2 Nature Damage 2.4 Speed 1h Sword.
 1 Strength. 2 Attack Power.
"The perfect size to insert in that outlet over there. Coincidence?"  Speedsteel Rapier Model
![Image](https://i.imgur.com/TZSKJSj.jpeg)
class: **2**
subclass: **7**
name: **Electrocutioner's Arm**
displayid: **28708**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **9626**
InventoryType: **13**
ItemLevel:
RequiredLevel:
stat_type1: **4**
stat_value1: **1**
stat_type2:
stat_value2:
dmg_min1: **10**
dmg_max1: **12**
dmg_min2: **1**
dmg_max2: **2**
dmg_type2: **4**
armor:
delay: **2400**
spellid_1: **9136**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The perfect size to insert in that outlet over there. Coincidence?"**
MaxDurability: **35**

 **Totem of the Electrocutioner**
Your Lightning Bolt has a chance to interrupt the target.
"The elements don't dabble in justice."  Totem of Static Charge Model
![Image](https://i.imgur.com/MzZWq83.jpeg)
class: **4**
subclass: **9**
name: **Totem of the Electrocutioner**
displayid: **28108**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8619**
InventoryType: **28**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **New Proc Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The elements don't dabble in justice."**
maxcount: **1**

 ****New Spell ID****
Name: **Electrocution**
Attributes: **0x00000150**
Effect1: **33**
EffectBasePoints1: **2000**
EffectImplicitTargetA1: **6**
SpellVisualID: **9009**
SoundID: **2125**

 ****New Proc Spell ID****
Name: **Proc Electrocution**
SpellFamilyName: **11**
SpellFamilyMask: **1**
procFlags: **65536**
EffectTriggerSpell1: **Insert Above Spell ID**
CustomChance: **5**
RecoveryTime: **0**

 **Charged Servo**
Class: Warrior
Use: Teaches Thunder Clap Rank 1
"Grounding yourself is for cowards."  Thundering Charm Model
![Image](https://i.imgur.com/40mw1Qu.jpeg)
class: **9**
subclass: **0**
AllowableClass: **1**
name: **Charged Servo**
displayid: **6424**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **12832**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **3726**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Grounding yourself is for cowards."**
MaxDurability:

 ****Notes:****
- Warriors are currently doing less DPS than Shaman with Totemic Slam. When attacking with a Fishing Pole they can't use Heroic Strike so they're limited to Auto Attack just like Hunters. This would give them a single button to press that increases their lackluster damage with a cooldown that will resist often as well as give them a small support debuff. This will help Warriors not be entirely useless aside from picking Troll Warrior for niche tank situations.

- <https://database.turtlecraft.gg/?spell=3726>

 **Grime-Encrusted Gear**
Quest Item (Set Token).
"Caked grime obscures the gear's purpose."  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
Class: **12**
Subclass: **0**
name: **Grime-Encrusted Gear**
displayid: **1221**
Quality: **4**
Flags: **64**
BuyPrice: **1**
SellPrice: **12461**
StartQuest: **0**
bonding: **1**
description: **"Caked grime obscures the gear's purpose."**

 ****Crowd Pummeler 9-60:****
Drops 1 of the following and a Set Token:

 **Little Pummeler**
 1.1 DPS 3.5 Speed 2h Mace.
Chance on Hit: Stun for 1 Second.
"When conventional tools don't get the job done."  Headbasher Model
![Image](https://i.imgur.com/WB17Xhy.jpeg)
class: **2**
subclass: **5**
name: **Little Pummeler**
displayid: **5530**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8349**
InventoryType: **17**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **3**
dmg_max1: **5**
dmg_min2:
dmg_max2:
dmg_type2:
armor:
delay: **3500**
spellid_1: **23454**
spelltrigger_1: **2**
spellid_2:
spelltrigger_2:
spellppmRate_1: **1**
bonding: **1**
description: **"When conventional tools don't get the job done."**
MaxDurability: **45**

 **Libram of Pummeling**
Your Seal of Righteousness attacks have a chance to lower the targets cast speed by 20% for 10 Seconds.
"Justice has no backdoors."  Whirling Bronze Gizmo Model
![Image](https://i.imgur.com/znM7cSq.jpeg)
class: **4**
subclass: **7**
name: **Libram of Pummeling**
displayid: **7840**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **9823**
InventoryType: **28**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **New Proc Spell ID Below**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Justice has no backdoors."**
maxcount: **1**

 ****New Spell ID****
SpellName: **Mechanical Concussion**
DurationIndex: **21**
Effect1: **6**
EffectApplyAuraName1: **108**
EffectBasePoints1: **-21**
SpellVisualID: **142**

 ****New Proc Spell ID****
Effect1: **42**
EffectTriggerSpell1: **60040**
EffectImplicitTargetA1: **6**
SchoolMask: **0**
SpellFamilyName: **10**
SpellFamilyMask: **0x800000**
procFlags: **0x10000**
CustomChance: **5**

 **Manual Crowd Pummeler’s Punch-Card**
Class: Paladin
Use: Teaches Blessing of Might Rank 1
"Standard operating procedure: Smash everything."  Yellow Punch Card Model
![Image](https://i.imgur.com/4sV77Du.jpeg)
class: **9**
subclass: **0**
AllowableClass: **2**
name: **Manual Crowd Pummeler’s Punch-Card**
displayid: **7355**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **11642**
InventoryType:
ItemLevel:
RequiredLevel: **1**
stat_type1:
stat_value1:
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **19741**
spelltrigger_1: **0**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"Standard operating procedure: Smash everything."**
MaxDurability:

 ****Notes:****
- <https://database.turtlecraft.gg/?spell=19741>

 **Grime-Encrusted Gear**
Quest Item (Set Token).
"Caked grime obscures the gear's purpose."  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
Class: **12**
Subclass: **0**
name: **Grime-Encrusted Gear**
displayid: **1221**
Quality: **4**
Flags: **64**
BuyPrice: **1**
SellPrice: **12461**
StartQuest: **0**
bonding: **1**
description: **"Caked grime obscures the gear's purpose."**

 ****Dark Iron Ambassador (Rare):****
Drops 1 of the following and a Set Token:

 **Dark Iron Orb**
Held in Off-Hand
 2 Stamina, 4 Spell Damage, 1% Spell Crit.
"Pondering this fills your mind with dark thoughts."  Cursed Eye of Paleth Model
![Image](https://i.imgur.com/aFflwwF.jpeg)
class: **4**
subclass: **0**
name: **Dark Iron Orb**
displayid: **21598**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **8268**
InventoryType: **23**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2: **23765**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Pondering this fills your mind with dark thoughts."**
MaxDurability:

 **Emissary Shooter**
 6.4 DPS 2.2 Speed Shadow Damage Wand
 2 Intellect, 6 Spell Damage.
"The shadowgem glitters."  Woestave Model
![Image](https://i.imgur.com/eE504UO.jpeg)
class: **2**
subclass: **19**
name: **Emissary Shooter**
displayid: **32685**
Quality: **3**
Flags:
BuyPrice: **1**
SellPrice: **9139**
InventoryType: **26**
ItemLevel:
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
dmg_min1: **11**
dmg_max1: **17**
dmg_type1: **5**
armor:
delay: **2200**
spellid_1: **9396**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"The shadowgem glitters."**
MaxDurability:

 **Grime-Encrusted Cloak**
Quest Item (Set Token).
"You can't seem to tell where the fabric begins and the grime ends."  Acidproof Cloak Model
![Image](https://i.imgur.com/xbNpGNV.jpeg)
Class:  **12**
Subclass:  **0**
name:  **Grime-Encrusted Cloak**
displayid:  **23085**
Quality:  **4**
Flags:  **64**
BuyPrice:  **1**
SellPrice:  **12293**
StartQuest:  **0**
bonding:  **1**
description:  **"You can't seem to tell where the fabric begins and the grime ends."**

 ****Mekgineer Thermaplug:****
Drops 1 of the following and 2 Set Tokens:

 **Charged Mekgineer Wrench**
 4.2 DPS 2.0 Speed 1h Mace, 7 Healing, 3% Meditation.
"Lefty loosy, righty tighty."  Arclight Spanner Model
![Image](https://i.imgur.com/BRG6qK4.jpeg)
class: **2**
subclass: **4**
name: **Charged Mekgineer Wrench**
displayid: **7494**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12382**
InventoryType: **21**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **8**
dmg_max1: **9**
armor:
delay: **2000**
spellid_1: **7677**
spelltrigger_1: **1**
spellid_2: **51253**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"Lefty loosy, righty tighty."**
MaxDurability: **35**

 **Thermaplugg's Lower Left Core**
 86 Armor 3 Block Shield
 3 Stamina, 1 Spirit, When struck in combat inflict 1 Nature damage to the attacker.
"You got served."  Force Reactive Disk Model
![Image](https://i.imgur.com/74ohEmy.jpeg)
class: **4**
subclass: **6**
name: **Thermaplugg's Lower Left Core**
displayid: **30561**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18423**
InventoryType: **14**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **3**
stat_type1: **6**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor: **86**
delay:
spellid_1: **22351**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description: **"You got served."**
MaxDurability: **45**
block: **3**

 **Thermaplugg's Right Finger**
 4.2 DPS 1.8 Speed Dagger 4 Spell Damage, Chance on landing a damaging spell to deal 5-7 Nature Damage. 10% Chance.
"It points towards the future."  Julie's Dagger Model
![Image](https://i.imgur.com/TRff7xy.jpeg)
class: **2**
subclass: **15**
name: **Thermaplugg's Right Finger**
displayid: **13001**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12913**
InventoryType: **13**
ItemLevel:
RequiredLevel:
stat_type1:
stat_value1:
dmg_min1: **7**
dmg_max1: **8**
armor:
delay: **1800**
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2: **Wailing Caverns Cobra-Eye Greatstaff New Proc Spell ID**
spelltrigger_2: **1**
spellppmRate_1:
bonding: **1**
description: **"It points towards the future."**
MaxDurability: **40**

 **Grime-Encrusted Scraps**
Quest Item (Set Token). x2
"It sticks to your hands."  Devilsaur Leather
![Image](https://i.imgur.com/pNlofgf.jpeg)
Class: **12**
Subclass: **0**
name: **Grime-Encrusted Scraps**
displayid: **21366**
Quality: **4**
Flags: **64**
BuyPrice: **1**
SellPrice: **18973**
StartQuest: **0**
bonding: **1**
description: **"It sticks to your hands."**

 **Gnomeregan Set Rewards**
Class Quests inside Gnomeregan.

Turning in these Quests will require the Set Tokens as well as other obscure items in the World like The Rock a 100 Gold Ring from a Vender in Booty Bay.

Keep in mind we are dropping 15 Stamina not using Lucky Fishing Hat for these so overall they make us lose a little bit of Health for other benefits.

---
![Image](https://i.imgur.com/mFmrQYU.png)
---
 ****Warrior****

 **Coif of the Electrocutioner**
 61 Armor 12 Stamina 1% Dodge Mail Helm.  Sparkmetal Coif Model
![Image](https://i.imgur.com/Kx0Ducq.jpeg)
class: **4**
subclass: **3**
AllowableClass: **1**
name: **Coif of the Electrocutioner**
displayid: **15324**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **25030**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **61**
delay:
spellid_1: **13669**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **50**
itemset: **Electrocutioner's Mail Set ID**

 **Drape of the Electrocutioner**
 18 Armor 2 Stamina 3 Spirit Cloak.  Dark Phantom Cape Model
![Image](https://i.imgur.com/Ri89TDz.jpeg)
class: **4**
subclass: **1**
AllowableClass: **1**
name: **Drape of the Electrocutioner**
displayid: **28652**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2: **6**
stat_value2: **3**
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1:
spelltrigger_1:
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Electrocutioner's Mail Set ID**

 **Electrocutioner's Gear**
 1 Stamina 2% Health Regeneration in Combat Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **1**
name: **Electrocutioner's Gear**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **Health Regen 2 ID**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Electrocutioner's Mail Set ID**

 ****Notes:****
- See Shadowfang Keep Commander Springvale for Spell ID

 ****Electrocutioner's Mail****
 3 Piece Bonus: Chance to gain Static Barrier when casting Thunder Clap.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Electrocutioner's Mail**
itemID_1: **Coif of the Electrocutioner ID**
itemID_2: **Drape of the Electrocutioner ID**
itemID_3: **Electrocutioner's Gear ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **11841**
EffectImplicitTargetA1: **1**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
SpellFamilyName: **4**
SpellFamilyMask: **0x1**
procFlags: **0x4**
ppmRate: **0**
CustomChance: **5**

 ****Notes:****
- This is meant to trigger only on the cast of Thunder Clap, not on the damage done. It will be better due to resists, and also prevent it from triggering too often if it hits multiple targets.

- Static Barrier: <https://database.turtlecraft.gg/?spell=11841>

---
![Image](https://i.imgur.com/WLM3IyS.jpeg)
---
 ****Paladin****

 **Coif of the Sentry**
 61 Armor 12 Stamina 4 Healing Mail Helm.  Golden Scale Coif Model
![Image](https://i.imgur.com/w7SEqhW.jpeg)
class: **4**
subclass: **3**
AllowableClass: **2**
name: **Coif of the Sentry**
displayid: **15333**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **25030**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **61**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **50**
itemset: **Sentry's Mail Set ID**

 **Drape of the Sentry**
 18 Armor 2 Intellect 4 Healing Cloak.  Windchaser Cloak Model
![Image](https://i.imgur.com/Yd5THnC.jpeg)
class: **4**
subclass: **1**
AllowableClass: **2**
name: **Drape of the Sentry**
displayid: **26175**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Sentry's Mail Set ID**

 **Sentry's Gear**
 1 Stamina 2% Meditation Unique Ring  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **2**
name: **Sentry's Gear**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Sentry's Mail Set ID**

 ****Sentry's Mail****
 3 Piece Bonus: Your heals have a chance to increase your Healing by 20 for 12 Seconds.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Sentry's Mail**
itemID_1: **Coif of the Sentry ID**
itemID_2: **Drape of the Sentry ID**
itemID_3: **Sentry's Gear ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
Name: **Sentry's Resolve**
Effect1: **13**
EffectApplyAuraName1: **135**
EffectBasePoints1: **19**
Duration: **24**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **New Spell ID Above**
EffectImplicitTargetA1: **1**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/bX6Zpgy.jpeg)
---
 ****Rogue****

 **Hood of the Ambusher**
 45 Armor 12 Stamina 4 Attack Power Leather Helm.  Shadowcraft Cap Model
![Image](https://i.imgur.com/7kLLRur.jpeg)
class: **4**
subclass: **2**
AllowableClass: **8**
name: **Hood of the Ambusher**
displayid: **28180**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Ambusher's Leather Set ID**

 **Cloak of the Ambusher**
 18 Armor 2 Stamina 1% Hit Cloak.  Shadow Prowler's Cloak Model
![Image](https://i.imgur.com/5lxt2Ty.jpeg)
class: **4**
subclass: **1**
AllowableClass: **8**
name: **Cloak of the Ambusher**
displayid: **24013**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Ambusher's Leather Set ID**

 **Ambusher's Cog**
 1 Stamina 4 Attack Power Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **8**
name: **Ambusher's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Ambusher's Leather Set ID**

 ****Ambusher's Leather****
 3 Piece Bonus: Eviscerate grants 25 Energy when it's a Miss, Dodge, or Parry.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Ambusher's Leather**
itemID_1: **Hood of the Ambusher ID**
itemID_2: **Cloak of the Ambusher ID**
itemID_3: **Ambusher's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
Name: **Ambusher's Failsafe**
Effect1: **30**
EffectBasePoints1:**25**
EffectMiscValue1: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **Above New Spell ID**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
SpellFamilyName: **8**
SpellFamilyMask: **0x20000**
procFlags: **0x800**
procEx: **0x16**
CustomChance: **100**

---
![Image](https://i.imgur.com/l6fJ5Rz.jpeg)
---
 ****Hunter****

 **Hood of the Lurker**
 45 Armor 12 Stamina 4 Attack Power Leather Helm.  Tattered Leather Hood Model
![Image](https://i.imgur.com/9nx7zfI.jpeg)
class: **4**
subclass: **2**
AllowableClass: **4**
name: **Hood of the Lurker**
displayid: **21958**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Lurker's Leather Set ID**

 **Cloak of the Lurker**
 18 Armor 2 Stamina 1% Hit Cloak.  Shifting Cloak Model
![Image](https://i.imgur.com/WhgksYl.jpeg)
class: **4**
subclass: **1**
AllowableClass: **4**
name: **Cloak of the Lurker**
displayid: **30851**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **15464**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Lurker's Leather Set ID**

 **Lurker's Cog**
 1 Stamina 4 Attack Power Unique Ring.  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **4**
name: **Lurker's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9137**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Lurker's Leather Set ID**

 ****Lurker's Leather****
 3 Piece Bonus: Your Ranged Attacks have a chance to deal 5-7 Nature Damage.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Lurker's Leather**
itemID_1: **Hood of the Lurker ID**
itemID_2: **Cloak of the Lurker ID**
itemID_3: **Lurker's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
SpellName: **Lurker's Poison**
Effect1: **2**
EffectBasePoints1: **4**
EffectDieSides1: **3**
SchoolMask: **8**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **Above New Spell ID**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
procFlags: **0x40000**
CustomChance: **5**

---
![Image](https://i.imgur.com/ZmniEOR.jpeg)
---
 ****Shaman****

 **Technician Goggles**
 45 Armor 12 Stamina 4 Healing Leather Helm.  Speedy Racer Goggles Model
![Image](https://i.imgur.com/bP6yCyj.jpeg)
class: **4**
subclass: **2**
AllowableClass: **64**
name: **Technician Goggles**
displayid: **18579**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Technician's Leather Set ID**

 **Cloak of the Technician**
 18 Armor 2 Intellect 4 Healing Cloak.  Dark Hooded Cape Model
![Image](https://i.imgur.com/OQ5Fw6G.jpeg)
class: **4**
subclass: **1**
AllowableClass: **64**
name: **Cloak of the Technician**
displayid: **23000**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Technician's Leather Set ID**

 **Technician's Cog**
 1 Stamina 2% Meditation Unique Ring  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **64**
name: **Technician's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Technician's Leather Set ID**

 ****Technician's Leather****
 3 Piece Bonus: Your heals have a chance to apply Lightning Shield (Rank 1) to your target.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Technician's Leather**
itemID_1: **Technician Goggles ID**
itemID_2: **Cloak of the Technician ID**
itemID_3: **Technician's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **324**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/hqC489T.png)
---
 ****Druid****

 **Burrower Goggles**
 45 Armor 12 Stamina 4 Healing Leather Helm.  Catseye Ultra Goggles Model
![Image](https://i.imgur.com/Tij4krX.jpeg)
class: **4**
subclass: **2**
AllowableClass: **1024**
name: **Burrower Goggles**
displayid: **19402**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **18273**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **45**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **45**
itemset: **Burrower's Leather Set ID**

 **Cloak of the Burrower**
 18 Armor 2 Intellect 4 Healing Cloak.  Eskhandar's Pelt Model
![Image](https://i.imgur.com/cafRpVg.jpeg)
class: **4**
subclass: **1**
AllowableClass: **1024**
name: **Cloak of the Burrower**
displayid: **30577**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Burrower's Leather Set ID**

 **Burrower's Cog**
 1 Stamina 2% Meditation Unique Ring  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **1024**
name: **Burrower's Cog**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Burrower's Leather Set ID**

 ****Burrower's Leather****
 3 Piece Bonus: Your heals have a chance to apply Rejuvenation (Rank 1) to your target.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Burrower's Leather**
itemID_1: **Burrower Goggles ID**
itemID_2: **Cloak of the Burrower ID**
itemID_3: **Burrower's Cog ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **774**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/zpkbyEx.jpeg)
---
 ****Mage****

 **Cowl of the Flamewalker**
 37 Armor 12 Stamina 4 Spell Damage Cloth Helm.  Felcloth Hood Model
![Image](https://i.imgur.com/Flz16uM.jpeg)
class: **4**
subclass: **1**
AllowableClass: **128**
name: **Cowl of the Flamewalker**
displayid: **24933**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12478**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **37**
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **40**
itemset: **Flamewalker's Cloth Set ID**

 **Shroud of the Flamewalker**
 18 Armor 2 Stamina 1% Spell Hit Cloak.  Cloak of Flames Model
![Image](https://i.imgur.com/LelsQOj.jpeg)
class: **4**
subclass: **1**
AllowableClass: **128**
name: **Shroud of the Flamewalker**
displayid: **23421**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **23766**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Flamewalker's Cloth Set ID**

 **Flamewalker's Sprocket**
 1 Stamina 4 Spell Damage Unique Ring  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **128**
name: **Flamewalker's Sprocket**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Flamewalker's Cloth Set ID**

 ****Flamewalker's Cloth****
 3 Piece Bonus: Your direct damaging spells have a chance to make your next Fireball (Rank 1) instant.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Flamewalker's Cloth**
itemID_1: **Cowl of the Flamewalker ID**
itemID_2: **Shroud of the Flamewalker ID**
itemID_3: **Flamewalker's Sprocket ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Spell ID****
SpellName: **Flamewalker's Hindsight**
EffectApplyAuraName1: **43**
EffectBasePoints1: **-100**
SpellFamilyName: **3**
SpellFamilyMask: **0x1**
StackAmount: **1**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **42**
EffectTriggerSpell1: **Above New Spell ID**
EffectImplicitTargetA1: **1**

 ****New Proc Spell ID****
entry: **Above New Set Spell Template ID**
procFlags: **0x10000**
CustomChance: **10**

---
![Image](https://i.imgur.com/nHfHjUD.png)
---
 ****Warlock****

 **Cowl of the Ambassador**
 37 Armor 12 Stamina 4 Spell Damage Cloth Helm.  Ironweave Cowl Model
![Image](https://i.imgur.com/oBINXwr.png)
class: **4**
subclass: **1**
AllowableClass: **256**
name: **Cowl of the Ambassador**
displayid: **34781**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12478**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **37**
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **40**
itemset: **Ambassador's Cloth Set ID**

 ****Notes:****
- It appears you removed the availability of the original Ironweave Cowl. It is a Glossy Black Hood Model that is no longer obtainable so the current DisplayID is wrong. I am trying to find the original DisplayID I will come back and fix it soon.

 **Shroud of the Ambassador**
 18 Armor 2 Stamina 1% Spell Hit Cloak.  Redoubt Cloak Model
![Image](https://i.imgur.com/GM7B51g.jpeg)
class: **4**
subclass: **1**
AllowableClass: **256**
name: **Shroud of the Ambassador**
displayid: **30831**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **23766**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Ambassador's Cloth Set ID**

 **Ambassador's Sprocket**
 1 Stamina 4 Spell Damage Unique Ring  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **256**
name: **Ambassador's Sprocket**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **9394**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Ambassador's Cloth Set ID**

 ****Ambassador's Cloth****
 3 Piece Bonus: Your Imp now benefits from 100% of your Intellect and Spell Hit.
 ****New Set Spell ID****
entry: **New Set ID Here**
name: **Ambassador's Cloth**
itemID_1: **Cowl of the Ambassador ID**
itemID_2: **Shroud of the Ambassador ID**
itemID_3: **Ambassador's Sprocket ID**
SpellID: **New Spell ID Below**
Threshold: **3**

 ****New Spell ID****
SpellName: **Ambassador's Guidance**
Effect1: **13**
EffectApplyAuraName1: **216**
EffectBasePoints1: **100**
EffectApplyAuraName2: **Shared Spell Hit ID?**
EffectBasePoints2: **100**
EffectMiscValue1: **3**

 ****New Set Spell Template ID****
entry: **New Set Spell Template ID**
Effect1: **13**
EffectApplyAuraName1: **216**
EffectTriggerSpell1: **Above New Spell ID**

 ****Notes:****
- This Spell ID in particular is a bit more confusing, not sure if I did it right.

- I recommend using this spell for reference, sharing Spell Hit seems to be more on the custom side than typical vmangos resources. <https://database.turtlecraft.gg/?spell=51717>

---
![Image](https://i.imgur.com/pts2rXg.jpeg)
---
 ****Priest****

 **Cowl of the Medic**
 37 Armor 12 Stamina 4 Healing Cloth Helm.  Aurora Cowl Model
![Image](https://i.imgur.com/WE0B4i5.jpeg)
class: **4**
subclass: **1**
AllowableClass: **16**
name: **Cowl of the Medic**
displayid: **15287**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12478**
InventoryType: **1**
ItemLevel:
RequiredLevel:
stat_type1: **7**
stat_value1: **12**
dmg_min1:
dmg_max1:
armor: **37**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability: **40**
itemset: **Medic's Cloth Set ID**

 **Shroud of the Medic**
 18 Armor 2 Intellect 4 Healing Cloak.  Parachute Cloak
![Image](https://i.imgur.com/3F8awBl.jpeg)
class: **4**
subclass: **1**
AllowableClass: **16**
name: **Shroud of the Medic**
displayid: **23129**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **16530**
InventoryType: **16**
ItemLevel:
RequiredLevel:
stat_type1: **5**
stat_value1: **2**
stat_type2:
stat_value2:
dmg_min1:
dmg_max1:
armor: **18**
delay:
spellid_1: **7676**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
itemset: **Medic's Cloth Set ID**

 **Medic's Sprocket**
 1 Stamina 2% Meditation Unique Ring  Gnomeregan Gear Model
![Image](https://i.imgur.com/QQX5Rwx.jpeg)
class: **4**
subclass: **0**
AllowableClass: **16**
name: **Medic's Sprocket**
displayid: **1221**
Quality: **4**
Flags:
BuyPrice: **1**
SellPrice: **12325**
InventoryType: **11**
ItemLevel: **35**
RequiredLevel:
stat_type1: **7**
stat_value1: **1**
dmg_min1:
dmg_max1:
armor:
delay:
spellid_1: **51252**
spelltrigger_1: **1**
spellid_2:
spelltrigger_2:
spellppmRate_1:
bonding: **1**
description:
MaxDurability:
maxcount: **1**
itemset: **Medic's Cloth Set ID**

 ****Medic's Cloth****
 3 Piece Bonus: Your heals have a chance to apply Power Word: Shield (Rank 1) to your target.  ****New Set Spell ID****
entry: **New Set ID Here**
name: **Medic's Cloth**
itemID_1: **Cowl of the Medic ID**
itemID_2: **Shroud of the Medic ID**
itemID_3: **Medic's Sprocket ID**
SpellID: **New Proc Spell ID Below**
Threshold: **3**

 ****New Set Spell Template ID****
Spell ID: **New Set Template Spell ID**
Effect1: **42**
EffectTriggerSpell1: **17**
EffectImplicitTargetA1: **6**

 ****New Proc Spell ID****
entry: **New Set Spell Template ID Above**
procFlags: **0x100000**
CustomChance: **5**

---
![Image](https://i.imgur.com/Als4f96.jpeg)
---
![Image](https://i.imgur.com/cXsrFyy.jpeg)
---
 **Gnomeregan Set Quest NPC**
Near the top of the Ramp above The Clean Zone there will be a new Gnome NPC named ****Tigol Bytes****.

 ****Tigol Bytes NPC Info.****

name: **Tigol Bytes**
displayid: **6628**
npcflags: **3**
faction: **35**
Emote ID: **133**

 ****Notes:****
- Most importantly he's holding a Remote type of item. Item ID: 60539 is perfect.  <https://database.turtlecraft.gg/?item=60539>

- We like Display ID: 6628 overall however he could have Display ID: 20341's outfit to differentiate him, keeping the goggles obviously.

 ****NPC Greeting:****

Emote ID: **133**
Triggers: **Menu 1**
Shows Text:

Greetings... Uhm could you move a bit to the left my device is losing signal... Thank you that's much better.

If you happen upon anything of value and are in need of help let me know I'm very good with my hands.

Choice: **What are you doing up here?**

Redirects to **Menu 2**
Emote ID: **5**
Shows Text:

Honestly the signal downstairs is horrible! I have many clients I am in contact with and they are in need of my expertise.

I took this job because I heard it's just guarding a post but they have everything under control! It's great I can contact my clients at the same time and besides I could really use the funds.

Choice: **You're low on gold. Did something happen?**

Redirects to **Menu 3**
Emote ID: **1**
Shows Text:

Let's just say I had a handful of deals go bad. I did everything like they wanted but they didn't like the outcome. However the issue really is that I needed some materials for projects and told them I'd get their gold as soon as I finished those jobs.

I've learned that you can't always trust people to pay out and I'm in a bit of a bad spot right now. However I have a few projects in the works and I'm confident I'll pull through.

Choice: **What did you mean if I find anything of value you'd be able to help?**

Redirects to **Menu 4**
Emote ID: **133**
Shows Text:

Well I've been known to make nothing into something, there's a lot of junk scattered around Gnomeregan and I'm sure if I could get my hands on some of it I might be able to make wonders.

However like I said I'm on hard times right now, if you find something you think is interesting bring it to me and we'll see if I get inspired.

 ****Custom Voices:****
I recorded these myself. **Volca** recommended **.mp3**
These are available for direct download.

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275167377%3Fsecret_token%3D]

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275168874%3Fsecret_token%3D]

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275169069%3Fsecret_token%3D]

[embed: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2275169747%3Fsecret_token%3D]

---
![Image](https://i.imgur.com/oEjiXqF.png)
---
 **Gnomeregan Set Quest**

 ****Grime-Encrusted Cloak****

What do you have here? Interesting, it appears to be some sort of drape covered in muck however there might be some potential beneath all of that grime. I tell you what, if you get me a few things I think I can soak up the grime and buff this out for you. I would need Mooncloth and Flask of Chromatic Resistance to soak it up and  Whipper Root Tubers to scrub it all out for you. As well as payment of course.

Grime-Encrusted Cloak: **1**
Mooncloth: **3**
Flask of Chromatic Resistance: **1**
Whipper Root Tuber: **20**
Requires: **100 Gold**
entry: **New ID Here**
Method: **2**
AllowableClass: **Class ID Here**
MinLevel: **1**
QuestLevel: **1**
ConditionType: **27**
ConditionValue1: **57736**
Title: **Grime-Encrusted Cloak**
Details: **What do you have here? Interesting, it appears to be some sort of drape covered in muck however there might be some potential beneath all of that grime. I tell you what, if you get me a few things I think I can soak up the grime and buff this out for you. I would need Mooncloth and Flask of Chromatic Resistance to soak it up and  Whipper Root Tubers to scrub it all out for you. As well as payment of course.**
Objectives: **Get Tigol Bytes what he needs for the Grime-Encrusted Cloak.**
ReqItemID1: **Grime-Encrusted Cloak ID**
ReqItemCount1: **1**
ReqItemID2: **14342**
ReqItemCount2: **3**
ReqItemID3: **13513**
ReqItemCount3: **1**
ReqItemID4: **11951**
ReqItemCount4: **20**
RewOrReqMoney: **-1000000**
RewItemID1: **Corresponding Class Cloak ID**
RewItemCount1: **1**
OfferRewardText: **Extraordinary! $N I would like you to know this turned out much better than I thought it would, and with materials to spare! Perhaps we should do business again sometime.**

 ****Notes:****
- The ConditionType and ConditionValue1 has the Lunatic Challenge ID, I think that should make it Lunatic Exclusive so it doesn't appear otherwise.

- Instead of posting this 9 times for each class, it seemed appropriate to just post it once, obviously this would have to be copied and changed for each class.

 ****Grime-Encrusted Gear****

Hm? Interesting very interesting. This gear is so coated with grime and it's so small that I really don't think we can buff this out. I think I could coat it and create a new inner band if you insist on utilizing this. Judging by it's size there is one band that comes to mind that should fit perfectly and it's The Rock. I've seen it on display at Booty Bay. Then I would need some Delicate Arcanite Converters and Dark Iron Bars to make a proper coating. As well as payment of course.

Grime-Encrusted Gear: **1**
The Rock: **1**
Delicate Arcanite Converter: **3**
Dark Iron Bar: **20**
Requires: **100 Gold**
entry: **New ID Here**
Method: **2**
AllowableClass: **Class ID Here**
MinLevel: **1**
QuestLevel: **1**
ConditionType: **27**
ConditionValue1: **57736**
Title: **Grime-Encrusted Gear**
Details: **Hm? Interesting very interesting. This gear is so coated with grime and it's so small that I really don't think we can buff this out. I think I could coat it and create a new inner band if you insist on utilizing this. Judging by it's size there is one band that comes to mind that should fit perfectly and it's The Rock. I've seen it on display at Booty Bay. Then I would need some Delicate Arcanite Converters and Dark Iron Bars to make a proper coating. As well as payment of course.**
Objectives: **Get Tigol Bytes what he needs for the Grime-Encrusted Gear.**
ReqItemID1: **Grime-Encrusted Gear ID**
ReqItemCount1: **1**
ReqItemID2: **7337**
ReqItemCount2: **1**
ReqItemID3: **16006**
ReqItemCount3: **3**
ReqItemID4: **11371**
ReqItemCount4: **20**
RewOrReqMoney: **-1000000**
RewItemID1: **Corresponding Class Ring ID**
RewItemCount1: **1**
OfferRewardText: **Extraordinary! $N I would like you to know this turned out much better than I thought it would, and with materials to spare! Perhaps we should do business again sometime.**

 ****Notes:****
- The ConditionType and ConditionValue1 has the Lunatic Challenge ID, I think that should make it Lunatic Exclusive so it doesn't appear otherwise.

- Instead of posting this 9 times for each class, it seemed appropriate to just post it once, obviously this would have to be copied and changed for each class.

 ****Grime-Encrusted Scraps****

This grime is really caked on, it's literally solidified. If we're going to have any chance at restoring this it's going to need a lot of work. I have heard of a coarse sand that isn't typically available to mortal races and this is the only time I have ever thought I'd need it. In order to have any shot at this I am going to need 5 Golden Pearls to withstand scraping this, 20 Hourglass Sand, and 20 Stonescale Oils to help loosen up the grime. As well as payment.

Grime-Encrusted Scraps: **1**
Golden Pearl: **5**
Hourglass Sand: **20**
Stonescale Oil: **20**
Requires: **100 Gold**
entry: **New ID Here**
Method: **2**
AllowableClass: **Class ID Here**
MinLevel: **1**
QuestLevel: **1**
ConditionType: **27**
ConditionValue1: **57736**
Title: **Grime-Encrusted Scraps**
Details: **This grime is really caked on, it's literally solidified. If we're going to have any chance at restoring this it's going to need a lot of work. I have heard of a coarse sand that isn't typically available to mortal races and this is the only time I have ever thought I'd need it. In order to have any shot at this I am going to need 5 Golden Pearls to withstand scraping this, 20 Hourglass Sand, and 20 Stonescale Oils to help loosen up the grime. As well as payment.**
Objectives: **Get Tigol Bytes what he needs for the Grime-Encrusted Scraps.**
ReqItemID1: **Grime-Encrusted Scraps ID**
ReqItemCount1: **1**
ReqItemID2: **13926**
ReqItemCount2: **5**
ReqItemID3: **19183**
ReqItemCount3: **20**
ReqItemID4: **13423**
ReqItemCount4: **20**
RewOrReqMoney: **-1000000**
RewItemID1: **Corresponding Class Head ID**
RewItemCount1: **1**
OfferRewardText: **Extraordinary! $N I would like you to know this turned out much better than I thought it would, and with materials to spare! Perhaps we should do business again sometime.**

 ****Notes:****
- The ConditionType and ConditionValue1 has the Lunatic Challenge ID, I think that should make it Lunatic Exclusive so it doesn't appear otherwise.

- Instead of posting this 9 times for each class, it seemed appropriate to just post it once, obviously this would have to be copied and changed for each class.

---

## Post 170676 by Peacefulm — 2026-03-12T13:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170676#p170676 | page 2 | era: 1.18.1-announced-pre-release -->

+1

Let me heroic strike with my fishing pole! Haha! Having battle stance count as 1 of the 3 starting abilities is disappointing but adding on top that in PvE (unless tanking) you can’t even press the heroic strike button.

## Post 170678 by Cysthen (Patch Note Conspiracy Theorist) — 2026-03-12T13:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170678#p170678 | page 2 | era: 1.18.1-announced-pre-release -->

> **Peacefulm wrote: Thu Mar 12, 2026 1:23 pm**
> +1
>
>  Let me heroic strike with my fishing pole! Haha! Having battle stance count as 1 of the 3 starting abilities is disappointing but adding on top that in PvE (unless tanking) you can’t even press the heroic strike button.

Yeah this is a big reason we put Thunderclap as an ability in Gnomeregan. I don't think fundamentally changing how abilities work is appropriate however Warrior is definitely lacking so Thunderclap was an appropriate add.

Not to mention some of the 2h Items have Support Procs. This prevents Rogues from getting overpowered effects but helps classes that are lacking to have more utility.

*Last edited by Cysthen on Thu Mar 12, 2026 4:26 pm, edited 2 times in total.*

## Post 170679 by Rotorboat — 2026-03-12T13:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170679#p170679 | page 2 | era: 1.18.1-announced-pre-release -->

This is absolutely amazing. If the Devs implemented this, it would dramatically increase the amount of people doing the challenge. With the lack of PvP I've seen less and less people doing this challenge and as there isn't much content available for the lunatics it seems like it would get stale quickly as there is nothing to progress or work towards. Hopefully the Devs have taken the time to read through this and have plans to add new and exciting content for the Lunatics who seem to have been pushed Into corner and forgotten about.

## Post 170680 by Enterblank — 2026-03-12T13:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170680#p170680 | page 2 | era: 1.18.1-announced-pre-release -->

Personally, I would love the Disguise skill for Rogues. Or even as a learnable skill for any lunatic. It would be so much fun to hunt down the recipes to roleplay around the world.

Love the work you've done here. My fingers are crossed so tightly

## Post 170684 by Jackiechun — 2026-03-12T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170684#p170684 | page 2 | era: 1.18.1-announced-pre-release -->

Wow, what a well thought-out post.

It is interesting to see the hit chance math laid out bare right before my eyes. I don't even have to think to see that it would be a meaningful addition for specific items in this game mode while causing almost no effect on outside players.

And with regards to the dungeon gear progression, how cool! The proposed items simultaneously give a varied progression path to Lunatics, promote participating more fully in raids and pvp, and hit the flavor and theme of Vanilla/Classic in a way we're only used to seeing from Twow devs themselves!

Were these changes to be implemented, this would provide, what, months-to-a-year of content, with no active development work from the staff save for copying and pasting it in? If I were them, I would probably use the exciting upcoming patch as a chance to add some of these (probably adjust Deadmines, finish adding WC items, add SFK + Frostmane Hollow? idk). Or given the new PVP additions, perhaps adding the the honor/WSG/AB rewards. With all of the work that lunatics put into media creation and promotion, I bet that would bring in a whole mess of new players!

Keep up the good work!

## Post 170722 by Birdy97 — 2026-03-13T05:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170722#p170722 | page 2 | era: 1.18.1-announced-pre-release -->

+1
Awesome post! I might be slightly biased as a lunatic player myself but id love to see these additions to the challenge.

With the removal of being able to turn the challenge off its almost become its own end game and that's something I've never heard of with any other server! With these items being added, it helps keep the motivation up for continually upgrading my character and giving me something to chase, not to mention fund enchanters.

I know a lot of people are interested in twinking but its mainly for PVP, with this challenge also having a PVE aspect its something that's completely unique and I'm quite interested to see how far lunatics can go!

## Post 171032 by Kurokun14 — 2026-03-16T23:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171032#p171032 | page 2 | era: 1.18.1-announced-pre-release -->

Absolutely feel the lack of lv1 gear or progression after making a character would love to have more to work towards inside or out of raids. also why cant i open chests in raids XD

## Post 171818 by Peacefulm — 2026-03-22T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171818#p171818 | page 2 | era: post-1.18.1 -->

Hopefully if we get frostmane we get gear like proposed here.

It was disappointing not getting it at launch with the new update but if we do get it and there is no exclusive hear for us in it that would be more disappointing- as a troll warrior lunatic having 3 pieces of gear that would work for me like the ones suggested would be great!

I’d skip the necklace as the +1 spirit from DM is better for me, but the throwing axes (being thematic) but also having spirit along with a 1.4 speed dagger that does more dps than 1 (looking at you deadman dagger) plus a new chest would be fantastic.

They would only really be slight upgrades but ones I’d 100% go for and then have to get enchanted again so adding to the overalll economy!

## Post 171838 by Cysthen (Patch Note Conspiracy Theorist) — 2026-03-22T22:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171838#p171838 | page 2 | era: post-1.18.1 -->

Not sure if you can Heroic Strike with a Skinning Knife however the Polearm would add more support for a Warrior DPS Set as well as the Chest and Throwing Knife.

Edit: Skinning Knife was changed to a Dagger.

