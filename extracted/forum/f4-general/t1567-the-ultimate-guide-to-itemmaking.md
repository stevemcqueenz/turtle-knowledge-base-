---
title: "The Ultimate Guide to Itemmaking"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1567"
topic_id: 1567
forum_id: 4
forum: "General"
author: "Dragunovi"
author_authority: "staff"
posted: "2021-02-01T23:59:00Z"
last_post: "2024-02-13T03:57:00Z"
post_count: 24
pages: 1
fetched: "2026-09-10T09:54:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The Ultimate Guide to Itemmaking

## Post 9270 by Dragunovi (Turtle WoW Team) [STAFF] — 2021-02-01T23:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9270#p9270 | page 1 | era: pre-1.18.1 -->

This has been written to guide the next generations that decided to (and were mad enough) seek the path of itemmaking. I'll explain some important things to keep in mind while making your items, lets go!
Firstly, the most important factor of items: Balancing them.
You might be asking: *How do I gauge how powerful my item should be?*
And for that we use this site: [https://wow.allakhazam.com/wiki/Itemiza ... _%28wow%29](https://wow.allakhazam.com/wiki/Itemization_Formulas_%28wow%29)
 *(Just ignore the TBC stats, its mostly the same.)*

 **Some undocumented things in the formula table:**
%1 Dodge is equal to 11.5 stat budget.
%1 Parry is equal to 15.65 stat budget, the reason for this is that when you successfully parry an attack you gain something some people dub as the Parry Haste, this makes your next attack go off %40 faster, which coupled with the fact that you fully mitigated an attack its a pretty nice boost to your overall aggro generation.
%1 Block is equal to 5.65 stat budget.
%1 Melee Critical Chance is equal to 14 stat budget.
%1 Spell Critical Chance is equal to 11.3 stat budget.
%1 Melee Hit Chance is equal to 9.55 stat budget
%1 Spell Hit Chance is equal to 11 stat budget. Though its adviced to not use hit chance and crit chance a lot as its very valuable while costing very little stat budget.
+ Weapon Skill is assumed to be 3 stat budget per point but don't have concrete info on it.
And lastly 1 Stamina is equal to 1 stat budget in Vanilla, it got changed to 0.67 in TBC.

Now that the stat weights are out of the way, you might be wondering:
 ***Am I really gonna have to use these formulas to figure out the stat weight when making all items?***
And well, you could do that, or go the lazy mans way and copy the stat weights off of an already existing item and use that on your item, though remember all item slots don't have the same stat budget, so check the site when copying the stat budget from an item. This will especially feel apparent on ranged items and their very limited stat budgets, barely enough to add a bit of attack power or spell power.
 ***One last thing to note,*** the cost of adding a particular stat increases if you dump all of your budget into it and decreases when adding points to all stats which helps the hybrid classes (Sometimes called the "Hybrid Grace"), this is apparent on items like Rainbow Girdle and Songbird Blouse. This "Hybrid Grace" stat spread shouldn't be used on regular quest rewards as it would be too powerful. And **no,** using both Strength/Agility and Attack Power doesn't bypass this rule, you'll still suffer from a stat penalty.

 **Important things to have on your item:**

 **Item Level:** This number is normally +5 of the item's required level to wear, with it being higher on raid items depending on the raid tier. *Without this stat your item cannot be repaired or enchanted.*
 **ALWAYS have this on your items.**

 **Durability:** This number is usually copied with stat budget, with it usually being lower on daggers and fist weapons when comparing to other items. *Without this your item will have infinite durability which would be a bit broken.*
 **Do NOT add durability on: Necklaces, Rings, Trinkets, Tabards, Shirts and Capes.**

 **Disenchant ID:** I'll admit it, this stat is pretty hard to keep track off but thankfully MrKrisSatan posted a list of them under this post so you can utilise that for your IDs. Remember that weapons and armors have different disenchant IDs even at the same level.
 *Without this stat your item cannot be disenchanted (Duh.)*
 **Do NOT add this stat on items that are sold on infinite stock, like reputation items. This would break the enchanting reagents economy and would be disasterous.**
 **Edit:** MrKrisSatan provided a list of disenchant IDs with a comment under this post, you can utilise that for your items now.

 **Armor:** Self explanatory, there isn't a formula for this so just copy and paste it from existing items. If you can't find an item on the item slot and level you can increase or decrease: *1-3 armor for cloth items, 2-5 for leather items, 4-6 for mail items and 6-9 for plate items for every item level gap.*
 **This stat is normally used on equipment, though you can make exceptions on some special items. Every 10 armor is equal to 1 normal stat budget on non-armor items.** (Good for bear druids!)

 *Sell and Buy Prices:* These are well, as their name suggests, selling and buying prices for your items. If this item is sold by a vendor your selling price should be Buying price divided by 4, rounded down to the highest number on copper. **Not specifying the buy price doesn't change anything, but apparently the server gives a small error when doing buybacks on vendors so its just good to have it on items.**

 *Material:* This specifies what sound your item makes when its being moved on your inventory. This isn't anything crucial, but its a good detail to be aware of.

 *Ranged Mod Range:* This bracket is pretty obscure as there's nothing written on the side. Just know this: **If you're making a ranged weapon, ALWAYS write 100 on the bracket, any other number will simply break your ranged weapon.**

 *Ammo Type:* Self explanatory, select **Arrows** for **Bows** and **Crossbows**, **Bullets** for **Guns**, **Thrown** for **Throwing Weapons** and **None** for **Wands**.

 **Sheathing:** *Only effects weapons*, the bar explains mostly everything though select the *"Staff"* option for polearms as they look weird otherwise and *"0"* for fist weapons for them to disappear *(When its added one day, until then just find the number on the SQL and change it to 0)* to make it disappear when sheathed as they look very weird when shown.

 *Food Type:* This stat affects what you can feed it to your pet.

 *Start Quest:* This attaches a quest to your item which you can accept by using it, *Remember to leave a minimum level on your item so level 1's can't take it for an extreme experience boost if boosted by a high level player.*

 *Buy Count:* This changes how many of an item you can buy with every click, has no effect on items that aren't sold by a vendor, usually used for food and water items.

 *Party Loot (Flags Bracket)*: Allows the item to be looted by all members of the party when selected, usually used for quest items.

 **Expected Questions:**

 ***How do I make an Off-Hand Frill item?***
Choose "Holdable" on your Inventory Type bracket, then select "Armor" on the Class bracket then choose "Miscellaneous" on the Subclass bracket.

 ***How do I make an Unique item?***
First select "ITEM_FLAG_UNK16" on the Flags bracket, then scroll down and change the Max Count number to 1.

 ***What do I have to do to make a reputation locked item?***
Go to the "Required Reputation Faction and Required Reputation Rank" bracket and select the reputation and reputation rank you like. Don't touch internally used factions like Monster as they might cause issues.

 ***How do I make an item that's locked in a specific zone/place that disappears when you leave it?***
Go down to the "Area Bound" or "Map Bound" bracket. Area Bound is used for small subzones around to world when Map Bound is used for entire instances, the keys that drop from the Ogre Bosses in Dire Maul North are an example of this.

 ***If I want to make an item that has special stats like dodge, parry, crit etc, what do I need to do?***
If you want to make an item that gives special stats like that you'll need to find a passive spell for it. Use a site like <https://classicdb.ch/> and search the name of it, though you need to search "Spell Dam" for spell power and "Increase Healing" for healing power, the passive spells you need have a cog as their icons. Then select the number you like. Remember to check the itemization budget page for the appropriate info. Then copy the spell ID that's written on your internet search bar and paste it on one of the Spell ID/Spell Trigger ID brackets, selecting "On Equip" on the side bar.

 ***What do I need to do to make weapons that have special effects when Right-Clicked on?***

Firstly look for your desired spell like a fire blast or frost bolt on the aforementioned site. Then copy the Spell ID and paste it on one of the Spell ID/Spell Trigger ID brackets, selecting "On Use". Remember go up to the Flags bracket and select the "ITEM_FLAG_USABLE" option and "ITEM_FLAG_NO_EQUIP_COOLDOWN" if you want your item to be instantly usable when equipped without activating the 30 second equip cooldown, this would be pretty powerful on normal items so its usually used on quest items. For "On Use" items you can change the "Spell Charges" bracket if you want your item to have limited uses. Make this number above the negative (Ex. 3 or 5) if you want the item to stay after its uses are expended (Ex. Manual Crowd Pummeler)
or in the negatives (Ex. -3 or -5) if you want your item to completely disappear after its uses are expended.
And lastly add a number to the "Spell Cooldown" bracket for it to have a cooldown. Though this number is calculated in miliseconds so you might need a calculator.
Don't worry about the "Spell Category/ Spell Category Cooldown" bracket, its probably evil voodoo and doesn't affect your item.

 **What do I need to do to make weapons that have special on hit effects or *procs* as the cool kids call?**
Follow the previous steps but choose "On Hit" on the side bar. Then go to the "Spell PPM Rate" bar which is short for Procs Per Minute. This number is usually set around 1-5 for normal procs or something around 10-15 for very weak procs such as dealing 20 damage.

 ***What about the other effects on the side bar?***
Honestly I'm too scared to test, leave them be.

And that was it. Feel free to ask me anything you struggle by commenting on this post or directly contacting me in our discord server.

## Post 9275 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2021-02-02T13:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9275#p9275 | page 1 | era: pre-1.18.1 -->

I did a lot of research on disenchant ID's on several repacks, this is what I found

Dust from Disenchanting
Disenchanted from Uncommon quality items.
Strange Dust: Level 5-25 uncommon/green quality items Disenchant ID: 1
Soul Dust: Level 26-35 uncommon/green quality items Disenchant ID: 4
Vision Dust: Level 36-45 uncommon/green quality items Disenchant ID: 7
Dream Dust: Level 46-55 uncommon/green quality items Disenchant ID: 8
Illusion Dust: Level 56-60 uncommon/green quality items Disenchant ID: 10

Essences from Disenchanting
Disenchanted from Uncommon quality items.
Lesser Magic Essence: Level 5-15 uncommon/green quality items Disenchant ID: 21
Greater Magic Essence: Level 16-25 uncommon/green quality items Disenchant ID: 22
Lesser Astral Essence: Level 21-25 uncommon/green quality items Disenchant ID: 23
Greater Astral Essence: Level 26-30 uncommon/green quality items Disenchant ID: 24
Lesser Mystic Essence: Level 31-35 uncommon/green quality items Disenchant ID: 25
Greater Mystic Essence: Level 36-40 uncommon/green quality items Disenchant ID: 26
Lesser Nether Essence: Level 41-45 uncommon/green quality items Disenchant ID: 27
Greater Nether Essence: Level 46-50 uncommon/green quality items Disenchant ID: 28
Lesser Eternal Essence: Level 51-55 uncommon/green quality items Disenchant ID: 29
Greater Eternal Essence: Level 56-60 uncommon/green quality items Disenchant ID: 30

Shards from Disenchanting
Disenchanted from Rare quality items, and sometimes Uncommon quality items.
Small Glimmering Shard: Level 16-25 rare/blue quality items Disenchant ID: 41
Large Glimmering Shard: Level 26-30 rare/blue quality items Disenchant ID: 42
Small Glowing Shard: Level 31-35 rare/blue quality items Disenchant ID: 43
Large Glowing Shard: Level 36-40 rare/blue quality items Disenchant ID: 44
Small Radiant Shard: Level 40-45 rare/blue quality items Disenchant ID: 45
Large Radiant Shard: Level 46-50 rare/blue quality items Disenchant ID: 46
Small Brilliant Shard: Level 51-55 rare/blue quality items Disenchant ID: 47
Large Brilliant Shard: Level 56-60 rare/blue quality items Disenchant ID: 48

Crystals from Disenchanting
Disenchanted from Epic quality items, and sometimes Rare quality items.
Nexus Crystal: Level 56-60 items Disenchant ID: 65

## Post 9308 by Dragunovi (Turtle WoW Team) [STAFF] — 2021-02-06T18:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9308#p9308 | page 1 | era: pre-1.18.1 -->

Can confirm these numbers are correct, feel free to use them.
The essences generally drop from weapons while the dust drops from armor pieces (From my observation).

## Post 9310 by Lexi (Barrens Chat Casualty) — 2021-02-06T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9310#p9310 | page 1 | era: pre-1.18.1 -->

Love the guide but I have two questions.
Is an on hit proc from a trinket or piece of armor such as hand of Justice made the same way as ones on weapons? I imagine they're not since the first type works with animal form druids while the later does not.
Are there any estimated stat weights for the following?
 1. bonus to a weapon skill
 2. Physical hit and spell hit
 3. Haste

## Post 9316 by Balake (Bug Report Enthusiast) — 2021-02-07T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9316#p9316 | page 1 | era: pre-1.18.1 -->

On hit procs from a trinket or a piece of armor need to be an equip effect that gives an aura, and then that aura gives the on-hit chance. Example, hand of justice <https://classicdb.ch/?item=11815> gives the player this aura <https://classicdb.ch/?spell=15600> (All buffs are auras, but some auras don't show up on the buff bar above.) then that aura gives a chance to proc this "trigger spell" <https://classicdb.ch/?spell=15601>

## Post 9317 by Dragunovi (Turtle WoW Team) [STAFF] — 2021-02-19T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9317#p9317 | page 1 | era: pre-1.18.1 -->

> **Lexi wrote: Sat Feb 06, 2021 11:13 pm**
> Love the guide but I have two questions.
>  Is an on hit proc from a trinket or piece of armor such as hand of Justice made the same way as ones on weapons? I imagine they're not since the first type works with animal form druids while the later does not.
>  Are there any estimated stat weights for the following?
>  1. bonus to a weapon skill
>  2. Physical hit and spell hit
>  3. Haste

Physical and Spell hit should require 14 stat budget too. Haste doesn't have a stat budget as its not used in any of the items aside from On Use: effects on a few items. My prediction on +Weapon Skill is 3 stat budget per skill point but sadly don't have any concrete info on it.

## Post 10112 by Dragunovi (Turtle WoW Team) [STAFF] — 2021-04-14T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10112#p10112 | page 1 | era: pre-1.18.1 -->

Bump.

## Post 10113 by Sinrek (Grandmaster of Forum PvP) — 2021-04-14T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10113#p10113 | page 1 | era: pre-1.18.1 -->

I'd like to add a small note if I may; every item from the quest rewards should have, besides correct stats, adequate power for the task completed.

You shouldn't have anything above green for a fetch or kill quest, anything above rare (blue) from an end quest in the chain, and, you've guessed it, epic items require some epic quests to send players on.

Besides mid-level greens (armour and weapons) we greatly lack tons of common and trash items.
Study the quests and rewards appropriately, please.

## Post 10231 by Starkobjekt (Barrens Chat Casualty) — 2021-05-09T17:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10231#p10231 | page 1 | era: pre-1.18.1 -->

what is the stat budget for defense?

## Post 10495 by Dragunovi (Turtle WoW Team) [STAFF] — 2021-05-09T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10495#p10495 | page 1 | era: pre-1.18.1 -->

Guide updated to correct some stat budgets on oddball stats.

## Post 10657 by Leojj — 2021-05-24T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10657#p10657 | page 1 | era: pre-1.18.1 -->

Is there any way to have honor rankings as a prerequisite for starting quests?

Also how functional is the NPC creator, any bugs we should look out for?

## Post 45671 by Bombaybadboy — 2023-05-12T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45671#p45671 | page 1 | era: pre-1.18.1 -->

> **Dragunovi wrote: Mon Feb 01, 2021 11:59 pm**
> **Some undocumented things in the formula table:**
>  %1 Dodge is equal to 11.5 stat budget.
>  %1 Parry is equal to 15.65 stat budget, the reason for this is that when you successfully parry an attack you gain something some people dub as the Parry Haste, this makes your next attack go off %40 faster, which coupled with the fact that you fully mitigated an attack its a pretty nice boost to your overall aggro generation.
>  %1 Block is equal to 5.65 stat budget.
>  %1 Melee Critical Chance is equal to 14 stat budget.
>  %1 Spell Critical Chance is equal to 11.3 stat budget.
>  %1 Melee Hit Chance is equal to 9.55 stat budget
>  %1 Spell Hit Chance is equal to 11 stat budget. Though its adviced to not use hit chance and crit chance a lot as its very valuable while costing very little stat budget.
>  + Weapon Skill is assumed to be 3 stat budget per point but don't have concrete info on it.
>  And lastly 1 Stamina is equal to 1 stat budget in Vanilla, it got changed to 0.67 in TBC.

Are these values being used by the dev team? Because some of them are fairly off.

## Post 45674 by Balake (Bug Report Enthusiast) — 2023-05-12T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45674#p45674 | page 1 | era: pre-1.18.1 -->

> **Bombaybadboy wrote: Fri May 12, 2023 10:36 am**
> Are these values being used by the dev team? Because some of them are fairly off.

This is the budget confirmed by Dragunovi only two days ago
![Image](https://media.discordapp.net/attachments/895751435797536788/1105968929366614056/image.png?width=398&height=609)

And yes I agree, some of the stat budgets are very unbalanced. Intellect, spirit and mp5 for example should be halved in budget.

## Post 45735 by Bombaybadboy — 2023-05-13T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45735#p45735 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Fri May 12, 2023 10:36 am**
> And yes I agree, some of the stat budgets are very unbalanced. Intellect, spirit and mp5 for example should be halved in budget.

I meant more that some of the values are different to blizz ones. Like the budget for 1% parry is normally 20 and 1% spell hit is 8 etc.

Was wondering why they were different. Although i agree not all stats are made equal in vanilla.

## Post 45739 by Balake (Bug Report Enthusiast) — 2023-05-13T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45739#p45739 | page 1 | era: pre-1.18.1 -->

> **Bombaybadboy wrote: Sat May 13, 2023 11:35 am**
> I meant more that some of the values are different to blizz ones. Like the budget for 1% parry is normally 20 and 1% spell hit is 8 etc.
>
>  Was wondering why they were different. Although i agree not all stats are made equal in vanilla.

Is here a source that blizz budget counts 20 for parry and 8 for spellhit?

## Post 45742 by Bombaybadboy — 2023-05-13T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45742#p45742 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sat May 13, 2023 11:54 am**
> Is here a source that blizz budget counts 20 for parry and 8 for spellhit?

it's in [https://wow.allakhazam.com/wiki/Itemiza ... _%28wow%29](https://wow.allakhazam.com/wiki/Itemization_Formulas_%28wow%29)

Any rating costs 1 budget each, 1% parry is 20 parry rating so costs 20, 1% spell hit is 8 spell hit rating so costs 8.

## Post 45955 by Enceebe (Barrens Chat Casualty) — 2023-05-15T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45955#p45955 | page 1 | era: pre-1.18.1 -->

If I want to great a Item made for crafting for example a low level shield how do I add that?

## Post 46751 by Xudo (Grandmaster of Forum PvP) — 2023-05-20T10:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46751#p46751 | page 1 | era: pre-1.18.1 -->

> **Dragunovi wrote: Mon Feb 01, 2021 11:59 pm**
> **Some undocumented things in the formula table:**
>  %1 Dodge is equal to 11.5 stat budget.
>  %1 Parry is equal to 15.65 stat budget, the reason for this is that when you successfully parry an attack you gain something some people dub as the Parry Haste, this makes your next attack go off %40 faster, which coupled with the fact that you fully mitigated an attack its a pretty nice boost to your overall aggro generation.
>  %1 Block is equal to 5.65 stat budget.
>  %1 Melee Critical Chance is equal to 14 stat budget.
>  %1 Spell Critical Chance is equal to 11.3 stat budget.
>  %1 Melee Hit Chance is equal to 9.55 stat budget
>  %1 Spell Hit Chance is equal to 11 stat budget. Though its adviced to not use hit chance and crit chance a lot as its very valuable while costing very little stat budget.
>  + Weapon Skill is assumed to be 3 stat budget per point but don't have concrete info on it.
>  And lastly 1 Stamina is equal to 1 stat budget in Vanilla, it got changed to 0.67 in TBC.

I think that those values should not scale linearly.
I mean 1% of hit should be 11 stat budget, but 2% of hit should be like 11+22=33 stat budget and 3% of hit should be like 11+22+33=66 stat budget.

Trustrike shoulders <https://database.turtlecraft.gg/?item=12927> are better than most epics.
Why? because they increase hit by 2%
Bloodvine Goggles <https://database.turtlecraft.gg/?item=19999> are better than some t2 heads.
Why? because they increase hit by 2%

This table is good reference to describe original considerations on making items. But if item is clear bis without doubts compared to many other items with higher stat budged, then it is good idea to revise those considerations.

## Post 46759 by Balake (Bug Report Enthusiast) — 2023-05-20T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46759#p46759 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Sat May 20, 2023 10:24 am**
> I think that those values should not scale linearly.
>  I mean 1% of hit should be 11 stat budget, but 2% of hit should be like 11+22=33 stat budget and 3% of hit should be like 11+22+33=66 stat budget.
>
>  Trustrike shoulders <https://database.turtlecraft.gg/?item=12927> are better than most epics.
>  Why? because they increase hit by 2%
>  Bloodvine Goggles <https://database.turtlecraft.gg/?item=19999> are better than some t2 heads.
>  Why? because they increase hit by 2%
>
>  This table is good reference to describe original considerations on making items. But if item is clear bis without doubts compared to many other items with higher stat budged, then it is good idea to revise those considerations.

It already works like that, everything is taken to the power of 3/2 and then added up.

Truestrike shoulders and bloodvine goggles are not good because they give 2% hit, they are good because they don't exaggeratedly spend their allocated budget on stamina.

## Post 46910 by Elesion (Patch Note Conspiracy Theorist) — 2023-05-21T19:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46910#p46910 | page 1 | era: pre-1.18.1 -->

So I've always been fascinated by item budgeting and this thread has some really helpful resources. Thank you for those! But I'm not sure I'm doing it right. I'll be calculating with precise numbers but rounding all values in the post to make it more readable.

I would like to look at healing rings like Rosewine Circle <https://database.turtlecraft.gg/?item=13178> a vanilla item from LBRS:
blue (0.625*ilevel - 1.15) ring (*0.55) of ilvl 60 means 20 stat budget, to the power of 1.5 is 89 effective budget.
 29 healing (*0.45) is 13 cost, to the power of 1.5 is 47 effective cost.
 5 mp5 (*2.5 from the wiki since this is a Blizzard item) is 12.5 cost, to the power of 1.5 is 44 effective cost.
So Rosewine Circle has an effective budget of 89 and costs 91. Seems perfect to me, well within the reasonable zone.

Now let's compare with Deepearth Signet <https://database.turtlecraft.gg/?item=83460> a Turtle custom item from Karazhan Crypt:
blue (0.625*ilevel - 1.15) ring (*0.55) of ilvl 65 means 22 stat budget, to the power of 1.5 is 101 effective budget.
 24 healing (*0.45) is 11 cost, to the power of 1.5 is 35 effective cost.
 6 mp5 (*2 from the picture above since this is a Turtle item) is 12 cost, to the power of 1.5 is 42 effective cost.
So Deepearth Signet has an effective budget of 101 and costs 77? Even if I use the blizzlike cost for mp5 it's only 94.

Is Rosewine just slightly more powerful than it should be and Deepearth way underpowered? If I run Loop of Field Medicine <https://database.turtlecraft.gg/?item=60368> another Turtle custom healer ring of ilvl 65 I get 99 cost on a budget of 101, so I don't believe I'm doing it wrong and I think the mp5 cost being 2 in the picture above is probably correct. But maybe someone can spot an error I'm making, I appreciate any helpful comments. 77 on a 101 budget just seems way off.

## Post 87586 by Xudo (Grandmaster of Forum PvP) — 2024-02-12T08:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87586#p87586 | page 1 | era: pre-1.18.1 -->

Can someone explain how exactly stat budget is applied?
For example staff [Jin\'do\'s Judgement](https://database.turtlecraft.gg/?item=19884)
It has +10 intellect, +10 stamina +2% spell hit, +14mp5, +27 spell damage.  Its item level is 66, quality is purple, two-handed weapon. According to [Itemization Formulas](https://wow.allakhazam.com/wiki/Itemization_Formulas_%28wow%29) it has 0.77(by quality)*66-1 * 1(by slot)=49.82 stat budget.
According to stat budget table [viewtopic.php?p=45674#p45674](https://forum.turtlecraft.gg/viewtopic.php?p=45674#p45674)
 10 int = 10 stat budget
 10 stamina = 10 stat budget
 2% spell hit = 22 stat budget
 14mp5 = 28 stat budget
 27 spell damage = 23.22 stat budget
total is 10+10+22+28+23.22 = 93.22

 93.22 is almost twice as high as 49.82
What am I missing in calculations?

EDIT: fixed link to alakhazam

*Last edited by Xudo on Mon Feb 12, 2024 6:34 pm, edited 1 time in total.*

## Post 87623 by Jan125 (Barrens Chat Casualty) — 2024-02-12T16:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87623#p87623 | page 1 | era: pre-1.18.1 -->

I mean, shouldn't slot = 2 because staff?

## Post 87632 by Ravenstone (Patch Note Conspiracy Theorist) — 2024-02-12T19:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87632#p87632 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Mon Feb 12, 2024 8:17 am**
>

You haven't multiplied your values to the power of 1.5 before adding them all up.
I'd also imagine that like spellpower swords, it is lacking damage compared to its actual iLvl which allows it to gain other stats, but I'm not 100% on that. Would explain it though.

## Post 87663 by Xudo (Grandmaster of Forum PvP) — 2024-02-13T03:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87663#p87663 | page 1 | era: pre-1.18.1 -->

Right. Power of 3/2 was the last step in calculation which I missed.
> The complicated part of this process is that everything must be raised to the 3/2 power and then added together, and should equal the budget (also to the 3/2 power.) So:
>
>  Itemization Points 3/2 = Attribute Cost #1 3/2 + Attribute Cost #2 3/2 + ...

So 49.82 in power 1.5 is equal to 351,64
 10 intellect = 10 stat budget = 31,62
 10 stamina = 10 stat budget = 31,62
 2% hit = 22 stat budget = 103,18
 14mp5 = 28 stat budget = 148,16
 27 spell damage = 23,22 budget = 111,89
sum of values from stats is 426,49 and it is closer to 351,64
It is still not equal, but actual budget values could be different.

