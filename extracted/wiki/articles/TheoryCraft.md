---
title: "TheoryCraft"
url: "https://turtle-wow.fandom.com/wiki/TheoryCraft"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-04T12:19:22Z"
fetched: "2026-09-10T07:39:50Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# TheoryCraft

TheoryCraft calculates detailed combat statistics for your spells and abilities, providing insights into their performance based on your current gear, talents, and buffs. This information can be displayed on tooltips, and some values can be shown directly on your action bar buttons and in the spellbook.
## Installation
  -GitAddonsManager (Recommended)**

The easiest way to keep TheoryCraft up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/tiffanyplus/TheoryCraft-Turtle.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to TheoryCraft-Turtle, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

  -Migrating from TheoryCraft for 1.12:**

TheoryCraft-Turtle is a fork and will conflict with the original version.

# Delete your old <code>wowfolder/Interface/AddOns/TheoryCraft/</code> folder.
# To transfer your settings, navigate to <code>wowfolder/WTF/Account/username/realmname/charactername/SavedVariables/</code>. Rename <code>TheoryCraft.lua</code> to <code>TheoryCraft-Turtle.lua</code>.
# Repeat the renaming process for the <code>TheoryCraft.lua</code> file found in <code>wowfolder/WTF/Account/username/</code> if you wish to preserve estimated enemy mob and player armor values.

## Git links
  -[(tiffanyplus)](https://github.com/tiffanyplus/TheoryCraft-Turtle)**

## Commands
{| class="fandom-table"
!Command
!Description
|-
|/tc
|View the user interface
|-
|/tc more
|List hidden commands
|-
|/tc showmem
|Debug infomation, shows the memory usage (in bytes) as each event occurs
|-
|/tc damtodouble
|Shows how much +damage/+heal is required to double a spells base damage
|-
|/tc dpsmana
|Adds a dps/mana field to the tooltip
|-
|/tc armorchanges
|Prints whenever the armor value of the target changes
|- 
|/tc armor (mob name)
|Prints the mobs armor. Leave blank for all.
|-
|/tc playerarmor (player name, or class)
|Prints a players armor. Leave blank for all.
|-
|/tc calccrits
|Shows your actual crit rate, from combat. Only works for healers.
|}

  -Healing macro:**

You can create macros that use TheoryCraft's casting logic:<syntaxhighlight lang="lua">
/script TheoryCraftCast("Greater Heal", 1)
</syntaxhighlight>
This macro will cast the lowest rank of Greater Heal needed to bring the target to full health. Changing the second argument (e.g., to <code>1.2</code>) will attempt to overheal by that percentage to account for damage taken during the cast.

  -Macro Tooltips:**

- You can display the tooltip for any spell by naming a macro accordingly (e.g., <code>Ice Block(0)</code>). If button text is enabled, the macro name will be hidden.

  -Button Text Setup:**

- In the TheoryCraft UI, you can choose two values to display on your button text. If the first value is not available for a spell, the second will be shown. Button text position, font, color, and size are customizable.

## Preview
## **Features**
- **Detailed Statistics:** Calculates metrics such as:
  - Damage per Second (DPS)
  - Healing per Second (HPS)
  - Damage per Mana (DPM)
  - Healing per Mana (HPM)
  - Crit Chance of Spell
  - Damage until Out of Mana (OOM)
  - Minimum, Maximum, or Average possible damage/healing
  - Casts left until OOM
- **Accounts for Factors:** TheoryCraft considers your set bonuses, estimated enemy armor (by target), and manually set enemy school resistances.
- **Tooltip Embedding:** The "Embed" option updates the damage/healing ranges shown on spell tooltips to reflect the actual calculated values based on your gear.
- **Gear and Stat Analysis:** Shows how your current gear contributes to your damage/healing and can predict the impact of additional stats.

## Formulas
- **Int per Spell Crit @ 60:**
  - Mages: 1% crit per 59.5 int (0.2% base)
  - Priests: 1% crit per 59.5 int (0.8% base)
  - Warlocks: 1% crit per 60.6 int (1.7% base)
  - Druids: 1% crit per 60 int (1.8% base)
  - Shaman: 1% crit per 59.2 int (2.3% base)
  - Paladins: 1% crit per 29.5 int (0% base)
  - For levels below 60, TC uses a scaled melee crit rate.
- **Agi per Crit:** Calculated from your crit rate (modified by attack rating) until level 60, where predefined values are used.
- **Crit % for Hunters:** Melee Crit Rate (from attack tooltip, modified by attack rating) + Lethal Shots
- **Crit Bonus:** Average Hit (not inc crits)Average Crit Damage​−1
- **+Damage Coefficient:** Hardcoded due to the lack of a consistent rule and the impact of cast time-altering effects (like Presence of Mind). Talents modifying spell damage are typically multiplied by the coefficient, but some spells are hardcoded to exclude this based on in-game testing (e.g., Curse of Agony, Drain Life, healing spells). Report any discrepancies on the CurseForge comments.
- **Average Hit (not inc crits):** 2Max Damage−Min Damage​+Min Damage
- **Average Hit (inc crits):** Average Hit (not inc crits) + Average Hit (not inc crits) * (Crit Chance / 100) * Crit Bonus
- **Cast Time:** max(Base Cast Time−100Crit Chance​×Grace,1.5)
- **ICPercent:** Percentage of natural mana regeneration that continues during the 5-second rule (e.g., Mage Armor, Innervate).
- **Regen from Spirit:** Class-specific formulas are used.
- **Regen Per Second:** Regen from spirit + (Mana per 5) / 5
- **True Mana Cost:** ((Mana Cost−Regen per second×Cast Time)−100Crit Chance​×Illumination×(Mana Cost−Regen per second×Cast Time))×(1−Clearcasting)
- **Real Mana Pool:** Total Mana + RotA on use ability
- **DPM (inc crits):** Average Hit (inc crits) / True Mana Cost
- **DPM (not inc crits):** Average Hit (not inc crits) / True Mana Cost
- **Total Damage til Oom:** DPM * Real Mana Pool
- **Cast Procs (Wrath of Cenarius):** Added Amount * (1−(1−Proc Chance)Floor(Proc Duration/Cast Time))
- **Other Procs (Darkmoon):** Added Amount * (1−(1−Proc Chance)Proc Duration/Cast Time)
- **DPS (inc crits):** Average Hit (inc crits) / Cast Time
- **DPS (not inc crits):** Average Hit (not inc crits) / Cast Time
- **DPS after resists:** Cast TimeAverage Hit (inc crits)−Average Hit (not inc crits)×Resist Rate​
- **Next Crit:** Average Hit (not inc crits) * Crit Bonus / 100
- **Next Hit:** Average Hit (not inc crits) / 100
- **Next 10 Pen:** Average Hit (inc crits) * (5×Level of Player)10​×0.75
- **Hunter Rotation Length:** Ceiling(7/speed)×speed+3 or 10, if Rotation Length > 10.7
- **Hunter Autoshot Count:**
  - If Ranged Attack Speed < 3: Floor((Rotation Length−3)/Ranged Attack Speed)+1
  - Else: Floor(Rotation Length/Ranged Attack Speed)
- **10 sec rotation dps:** 10(Autoshot Average Hit (inc crits)×Autoshotcount+Aimed Shot Average Hit (inc crits)+Multi Shot Average Hit (inc crits))​
- **9 sec rotation dps:** 54(Autoshot Average Hit (inc crits)×Floor(6/Ranged Attack Speed+2)×6+Aimed Shot Average Hit (inc crits)×6+Multi Shot Average Hit (inc crits)×5)​
- **Seal unbuffed dps:** Average Melee Hit + Average Melee Hit * Melee crit chance
- **Seal of Command dps:** Seal unbuffed dps * (7/(60/Weapon Speed)×0.7)
- **Seal of Crusader dps:** Average Melee Hit + Attack Power Bonus / 14 * Weapon Speed + (Average Melee Hit + Attack Power Bonus / 14 * Weapon Speed) * Melee crit chance

## Addon Developers
  -Accessing Spell Data:**

To retrieve data from TheoryCraft for a specific spell, use one of the following global functions, listed in order of speed:

- <code>TheoryCraft_GetSpellDataByFrame(tooltip)</code>
- <code>TheoryCraft_GetSpellDataByName(spellname, spellrank)</code>
- <code>TheoryCraft_GetSpellDataByDescription(description)</code> (Extremely slow if data is not already generated)

These functions will return a table containing spell data if available. If the data is not present, TheoryCraft will attempt to generate it (if possible) and cache it for faster future access. The cache is reset when relevant factors change (e.g., equipping new spell damage gear).

  -Example:**<syntaxhighlight lang="lua">
local spelldata = TheoryCraft_GetSpellDataByName("Immolate", 5) Print(spelldata.mindamage)
</syntaxhighlight>

  -Available Spell Data Fields:**

The following fields are accessible in the returned spell data table (or <code>nil</code> if not applicable to the spell):

- <code>description</code>
- <code>mindamage</code>
- <code>maxdamage</code>
- <code>critdmgchance</code>
- <code>critdmgmin</code>
- <code>critdmgmax</code>
- <code>critdmgminminusignite</code>
- <code>critdmgmaxminusignite</code>
- <code>averagedamnocrit</code>
- <code>averagedam</code>
- <code>manacost</code> (true mana cost, includes regen)
- <code>basemanacost</code>
- <code>dpm</code>
- <code>withdotdpm</code>
- <code>dps</code>
- <code>withdotdps</code>
- <code>maxoomdam</code>
- <code>maxevocoomdam</code>
- <code>sealunbuffed</code>
- <code>sealbuffed</code>
- <code>nextagidam</code>
- <code>nextcritdam</code>
- <code>nexthitdam</code>
- <code>nextpendam</code>
- <code>nextagidps</code> (hunter's autoshoot only)
- <code>nextcritdps</code> (hunter's autoshoot only)
- <code>nexthitdps</code> (hunter's autoshoot only)
- <code>nextagidamequive</code>
- <code>nextcritdamequive</code>
- <code>nexthitdamequive</code>
- <code>nextpendamequive</code>
- <code>nextagidpsequive</code> (hunter's autoshoot only)
- <code>nextcritdpsequive</code> (hunter's autoshoot only)
- <code>nexthitdpsequive</code> (hunter's autoshoot only)
- <code>rotationdps</code>
- <code>regendam</code>
- <code>icregendam</code>
- <code>damcoef</code>
- <code>damcoef2</code> (dot coef)
- <code>plusdam</code>
- <code>finaldam</code>
- <code>dameff</code>
- <code>penetration</code>
- <code>dpsafterresists</code>
- <code>lifetapdps</code>
- <code>lifetapdpm</code>
- <code>showonbutton</code> (false if a tooltip is generated but not intended for button display)

All damage (<code>dam</code>/<code>dmg</code>) fields also have corresponding healing (<code>heal</code>) fields (e.g., <code>minheal</code>, <code>maxheal</code>, <code>hpm</code>).

  -Note on <code>TheoryCraft_GetSpellDataByDescription</code>:** This function is significantly slower than the others for generating new data because it requires iterating through your spellbook to match the description. Its use is generally not recommended for performance-sensitive operations.

  -Updating Button Text:**

When spell data or action bars change, TheoryCraft resets the <code>TheoryCraft_UpdatedButtons</code> table to blank. To efficiently update your button text without hooking numerous events, you can use the <code>OnUpdate()</code> event:

# In your <code>OnUpdate()</code> handler, check if a unique identifier you've set in <code>TheoryCraft_UpdatedButtons</code> is still <code>true</code>.
# If it's not <code>true</code>, a data update is needed. Update your button text based on the new TheoryCraft data.
# After updating, set your unique identifier in <code>TheoryCraft_UpdatedButtons</code> back to <code>true</code>.

TheoryCraft will reset <code>TheoryCraft_UpdatedButtons</code> when a repaint is necessary.

  -Regenerating Data:**

You generally shouldn't need to manually regenerate all data, but if necessary, call:<syntaxhighlight lang="lua">TheoryCraft_GenerateAll()</syntaxhighlight>

  -Other Global Functions:**

- <code>TheoryCraft_UpdateTalents(genall)</code>
- <code>TheoryCraft_UpdateGear(target, genall)</code> (Only affects "player" target)
- <code>TheoryCraft_UpdateBuffs(target, genall)</code>
- <code>TheoryCraft_LoadStats()</code>

The <code>genall</code> parameter in <code>TheoryCraft_UpdateTalents</code>, <code>TheoryCraft_UpdateGear</code>, and <code>TheoryCraft_UpdateBuffs</code> controls whether <code>TheoryCraft_LoadStats()</code> and <code>TheoryCraft_GenerateAll()</code> are called automatically. If <code>genall</code> is <code>true</code>, these functions will not be called, even if data changes. This is useful if you want to call multiple update functions before triggering a full regeneration. If <code>genall</code> is <code>false</code>, <code>LoadStats</code> will be called, and <code>GenerateAll</code> will be called automatically if the stats or buffs/gear arrays change.

- <code>TheoryCraft_AddToCustom(linkid)</code>: Pass an item link to this function to add it to the custom outfit.

## Contributors
- Aelian (author)
- [Zaas](https://github.com/Zebouski) (Turtle wow)
- [laytya](https://github.com/laytya) (support macros)

## Changes
  -Talent Updates for 1.17.2:**

TheoryCraft has been updated to support talents introduced in patch 1.17.2 for the following classes:

- Druid:  (Not yet updated)
- Hunter:  (Not yet updated)
- Mage: x (Updated)
- Paladin:  (Not yet updated)
- Priest: x (Updated)
- Rogue:  (Not yet updated)
- Shaman:  (Not yet updated)
- Warrior: x (Updated)
- Warlock: x (Updated)

  -Version Kronos**

- Change/Improvements
- Included "Improved Shadow Bolt" to shadow calculations
- Included "Shadow Weaving" to shadow calculations
- Included "Improved Scorch" to fire calculations
- Included "Stormstrike" to nature calculations
- included "Plagueheart corruption set bonus" to corruptions calculations 

  -Todo-List:**

- need to add healing buff/debuffs to calculations
- fix lifetap feature
- adjust curse of agony to show correct dot damage    

  -Bugs**:

- lifetap feature still bugged and is applied to all abilities except lifetap at the moment    

  -Version 1.06.5**

- Changing action bar pages finally works with button text
- Forms, Warrior stances now work correctly with button text
- Spell Power is +30 healing in addition to spell damage now (as per 1.12 patch notes)
- Added support for G15Bar
- Added support for Discord Group Buttons - even mini spell book is supported
- Fixed a Curse of Doom debuff nil error - a bunny was sacraficed to bring the infomation required =( -untested fix-
- Added ZG Block enchant, and TC is now flooring block instead of rounding (ty bonestriker)
- Fixed a typo on Thunder Clap
- Ammo no longer affects melee attacks (doh!)
- More custom bar addons will have their macro names hidden now

  -Version 1.06.4 (Temporary)**

- 1.07 will be out soon, and is a major rewrite - this is a temporary download.
- Updated TOC
- Added Bongo's Support
- Moonfury is now applied pre gear
- Added latest german locale (I think)
- Fixed TC saying that GLOCK wasn't installed when it was - functionality with latest version of GLOCK untested

  -Version 1.06.3**

- Added Fire Festival Fury.
- Added Very Berry Cream.
- Added Eye of Moam.
- Button text fixed on Flexbar.
- Button text now works with CT Bars.
- Button text now works with GypsyMod HotBar.
- Consecration fixed. (Wasn't able to read in the duration)
- Immolate fixed. (On some talent builds, DoT wouldn't be modified)

  -Version 1.06.2**

- Added Evocation
- Fixed Max Dam w/ Evocation + Gem - was ~ 2000 mana out before.
- Button Text can be disabled.
- Fixed a bug with "Cooldown remaining: "

  -Version 1.06.1**

- Updated Toc to 1.11
- Fixed mage armor (buff description has changed since 1.10)
- Fixed an error on line 65 of Gear. (nil error)

  -Version 1.06**

  -New Features:**

- New Feature: Make a macro with '/script TheoryCraftCast("Greater Heal", 1)', and it'll cast the lowest rank Greater Heal that'll bring the target to full health. Changing the 1 to 1.2 will attempt to overheal by 20% (allowing for damage whilst casting), and so forth.
- New Hidden command: Type /tc dpsmana to add a dps/mana line to the tooltip.
- New Hidden command: Type /tc damtodouble to add show how much +damage it'd take to double your damage on a spell (from base).
- New Command: "/tc more" Prints all non-ui commands.
- New Feature: *Any* macro can have its correct tooltip shown now (even ones that TC doesn't intrepret). Eg, naming a macro Ice Block(0) will show the Ice Block tooltip.
- TC can hook in with the addon "GLOCK - Mob Resistance Calculator" for comprehensive damage stats on any target.
- MASSIVE hit/penetration/resists rewrite, including a new option to Factor Resists in to all calculations, with edit boxes to enter School resist scores. Paints a *much* clearer picture of your gear, and gear you're testing. *Every* TC stat will change appropriately.  You'll notice in particular the worth of 1% to hit, 1% to crit and penetration increase as you target higher level enemies, and in the case of penetration it also increases as you add resists. Try 300 resist to see 10 penetration become better then 100 +damage :).
- Button text now works with Discord Action Bars.
- Button text now works with Nurfed Action Bars.
- Button text now works with Flexbar, for text label substitution though I recommend Flexbar Improved.
- Button text is now fully customizeable in position, font, colour and size.

  -Localisation Updates:**

- German and French locale updates.
- Full +damage support of items that increase damage vs Undead only.
- Elixir of frost power, and possibly other buffs, work again now. (Previously Frost was capitalised, at some patch it was changed to lowercase frost, now I read them case insensitive)

  -Internal Changes:**

- *MASSIVE* memory management overhaul, no regularly called TC function will require garbage collection. (Particularly noticeable for hunters - where TC had runaway memory problems due to the regular gear change event)
- All Button Text labels are created at run time now (previously all were declared in xml file).
- Values returned by GetSpellData are now already modified by armor.
- Note to other developers: Spellcasts, damage til oom (remaining), damage til oom (floored) are now available from GetSpellData functions.
- Speed improvements

  -Bug Fixes:**

- Paladins tooltips are neater for seals now
- Hunters ammo is no longer affected by RWS or Barrage (autoshot damage will now read correctly)
- Fixed outfit name (sometimes showed wrong text)
- Fixed some things were appearing on tooltips that shouldn't have
- DoT hybrid spells now have their dam coef displayed correctly (previously wasn't a percent, eg 0.7% instead of 70%)
- Mana Restore is included in maxoom damage calculations once again (eg robe of the archmage).
- Presence of Mind / Nature's Swiftness / Mind Quickening Gem / Clearcasting and other buffs that changed tooltips are no longer bugged.
- Embeded line now shows more decimal places for dpm/hpm (was incorrectly being rounded to 1 dcp).
- Mages work on the test realm and 1.11 again.
- Fixed a bug with the Stripped version, incorrectly reporting an error of not being installed correctly.

- Version 1.05.5

- This time the nil error is actually fixed ^.^
- Added a guide on getting button text on flexbar. (Text file in addon directory, read it :))

  -Version 1.05.4**

- Fixed a nil error on line 19 of TheoryCraftMitigation

  -Version 1.05.3**

- Targeting a player > 2 levels higher then you will now display the correct resist rate.
- Fixed nil error on line 133 of TheoryCraftMain

  -Version 1.05.2**

- German Locale works again (old one had an encoding error)
- Possibly fixed an error on targetting players

  -Version 1.05.1**

- Bug Fixes
- Minor chance to autoshot rotation formulas if you don't have Aimed Shot.
- Procs work again

  -Version 1.05**

  -New Features:**

- TheoryCraft now calculates the targets armor, based off your actual hits.
- New Command: "/tc armorchanges" to have TC tell you whenever it updates the armor of the target.
- New Command: "/tc armor (mob name)" to see a mobs armor. Or just "/tc armor" to list all.
- New Command: "/tc playerarmor (player name, or class)" to see a players armor. Or just "/tc playerarmor" to list all.
- New Command: "/tc calccrits" to see your *actual* crit rates, based off combat. Healing classes only.
- 10 sec rotation renamed "MS rot"
- 9 sec rotation renamed "AS rot"
- Updated German Locale.
- Updated French Locale.
- Added "Next 10 strength".
- Added support for Thunder Clap.
- Added support for Mocking Blow.
- Added support for Swipe.
- Added support for Shield Slam.
- Added Multi/Arcane shot rotation.
- Added support for "Totem of Life"
- Added support for Shaman totems
- Added support for Shaman 1.11 talents + totem coefficients

  -Updated Crit Formula:**

- Mages now have a 0.2% base spell crit rate, and 1% crit per 59.5 int
- Priests now have a 0.8% base spell crit rate, and 1% crit per 59.5 int
- Warlocks now have a 1.7% base spell crit rate, and 1% crit per 60.6 int
- Druids now have a 1.8% base spell crit rate, and 1% crit per 60 int
- Shaman now have a 2.3% base spell crit rate, and 1% crit per 59.2 int
- Druids now have a 0.9% base melee crit rate (only matters for levels < 60)
- Paladins now have a 0.75% base melee crit rate (only matters for levels < 60)
- Hunters now use 52.91 agi per crit at level 60

  -Bug fixes:**

  -Rogues**:

- Talents can now be tested correctly (previously opportunity was miles off)
- Backstab no longer has values if there is no dagger equipped.
- Fixed opportunity appearing twice on rogue talents.
- Ghostly Strike now works with embed again.
- Riposte now works with embed again.
- Dagger and Fist spec are no longer applied twice.

  -Hunters**:

- Fixed a bug with dequipping ranged attack power items.
- Fixed a bug with ranged weapon speed.
- 10 sec rotation now gets 1 less autoshot in (floor(7/attackspeed)+1), previously (floor(7/attackspeed)+2).
- 9 sec rotation now gets 6 seconds of autoshot instead of 9.
- AS/MS rotations should now be calculated correctly.
- Some things were showing on autoshot that shouldn't have.

  -Warriors**

- Fixed Bloodthirst.
- Rage cost will be updated when 8 piece wrath procs.

  -Shaman**

- Fixed chain lightning and shocks showing damage til oom.
- Healing Wave Rank 4 now has the correct coefficient.
- Lightning Shield now has the correct coefficient.

  -All**:

- Heals no longer show "Up to: " Penetration figure with resists turned on.
- Fixed a bug where TC was reading invisble lines on the right hand side of the tooltip.
- Self/Target buttons now equip two one-handed weapons in the correct hands.
- Next 10 Agility was incorrect for "On Next Attack" abilities such as Raptor Strike, Heroic Strike, has been fixed.
- Next 10 Agility was incorrect for Bloodthirst, has been fixed.
- "Advanced" tab renamed "Vitals".
- Removed some redundant functions from merging Stripped and Normal versions.
- All values are now unrounded right to the point until they're displayed.

  -Version 1.04.6.4**

- Fixed a nil error (found in messy)
- Updated the Paladins regen from spirit formula (now spirit/5+15)
- One less autoshot per 9 second rotation now, should be correct

  -Version 1.04.6.3**

- Set Bonuses are no longer bugged during combat
- Fixed ZHC/ToEP not updating
- Cooldowns are shown on spells again.
- Cooldown remaining is shown now.
- A Lot of Hunter improvements, credits to roy7 of Curse.
- Fixed the calculation of hunter ranged haste (will affect a lot of users rot dps)
- Hunter rotation now has an extra second worth of shots (only some weapons will change here)
- Fixed number of autoshots fired in rotation for slow weapons
- Support for scopes added
- Fixed a typo with 1% hit/crit for rot dps
- Added 9 sec rotation dps for hunters
- Rotation dps will now be anywhere from 10->11 seconds, whatever is most efficient for your weapon.  This'll greatly improve rhok dps.

  -Version 1.04.6.2**

- Outfits work again.

  -Version 1.04.6**

- Version 1.04.5 shall never be mentioned again >.<

  -Version 1.04.5 FIXED**

- Apparently you should never upload a mod at 2am in the morning.  Biggest apologies to everyone who got slaughtered by the last release, this one is fine.

  -Version 1.04.5**

- Big Fix: Firing an arrow/bullet no longer calls for all your gear to be reread, which was causing lag with hunters.
- Big Fix: TC was regenning far too often - now correctly only regens when your gear/buffs change in such a way that your spells are affected.
- Gear reading improved overall - only reads gear that has the item name changed.
- Hybrid spells have their DoT damage coefficient shown again.
- Scatter shot has its text modified again.
- Massively improved German locale.

  -Version 1.04.4.2**

- Fixed a bug with the French Locale
- Fixed a bug with Mar'li's Eye
- Fixed a bug with "of restoration"
- Fixed a bug with the German locale
- Fixed three variables that should have been local, but instead were being accessed as global causing compatibility problems with LazyRogue.

  -Version 1.04.4**

- Sorry, TC settings will be reset again on this release.

  -New Features**

- Time TheoryCraft by clicking "Generate All" on the Button Text tab
- If your gear changes whilst in combat, TC will only reread your main hand/off hand and wand to prevent lag
- TC will only update one button text per frame whilst in combat, removing any possible lag.
- On extremely slow computers you can set TC to always update button text this way (even when out of combat)
- Spell base crit is now shown in advanced
- Block support has been added (hold cursor over block skill in spellbook for more info)
- Tier 3 and AQ sets have been added, outfits now are accessed through a combo box
- Works on french/german localisations now (very limited though)
- Casters lower then level 60 should now have accurate crit rates (goes off your agi per crit compared to agi per crit at 60)
- Testing ring/trinket combos is now easier
- Mage 1.11 Talent support (will enable automatically)
- 1.11 Arcane Missile, Cone of Cold, Ice Barrier and Blast Wave support.
- Added 1.11 Combustion and Winter's Chill buffs/debuffs

  -Bug fixes:**

- Fixed a bug with next 10 agility (was completely incorrect before, no idea which version of TC broke it)
- Paladin Seals have +dmg embeded again
- Fixed an error with Paladins before they get the "Judgement" skill
- Death Coil no longer has talents applied after gear
- Fixed DPS after level based resists (works again)
- Starshards can no longer crit
- Rewrote some tooltip routines, ie limiting button text to a few spells will no longer have a speed penalty, and ondemand is gone
- Advanced has been neatened
- Iceblock bug finally fixed
- Fixed a bug with characterviewer
- Made Button Text tab a bit easier to understand
- I *think* Bloodthirst has been fixed.  Need confirmation as I don't have the ability.
- Improved localisability of gear reading.
- Improved speed of gear reading slightly.
- Fixed a bug with arcanist set bonuses when testing gear.
- Fixed a bug with Hunters and Damage til oom showing on button text (nil error)
- Fixed several ranged attack power bugs regarding item testing

  -Version 1.04.3**

- Everything is pattern based now, simplifying localisations and making the tooltip entirely customizeable (see localisation.lua for more info)
- Only the first 13 chars need to match macro name now (or 12 if rank is two digits)
- Fixed HPM don't include crits option
- Fixed DPM of lightning shield
- Fixed a few nil errors
- Fixed a bug involving Tremor Totems
- Fixed a bug involving Attack Power items regarding Ranged Attack Power when in any outfit other then Equipped and Naked

  -Version 1.04.2**

- New Feature: If you name a macro Shadow Bolt(10) it'll show the tooltip of rank 10 shadow bolt, and if button text is enabled, hide the macro name.
- Base increasers are now multiplied together. Eg, curse of shadow and touch of chaos stack properly now.
- Base increasers are no longer bugged on spells that have talents applied after gear.
- Onclick events will now have the original called regardless of if TC acts on it or not.
- Hunter talent Killer Instinct added.
- Fel Energy added.
- Fixed two nil errors at least one user was getting.

  -Version 1.04.1**

- Talents will now work when you first log in (Previously they'd only work after they were reread, due to your client not having the data ready on login)
- Shoot will no longer bring up an error
- Compatible with autotrade mods again
- Large Button Text will now hide correctly when you flip through action bars

  -Version 1.04**

- Too many changes to list, by a factor of ~ 100.

  -Version 1.03B**

- Fixed a hang during load on german locale.

  -Version 1.03A**

- Added Greater Firepower
- No longer causes errors on unsupported locales of WoW

  -Version 1.03**

- French Support ! Thank you Hip :) (caster's/hybrids only)
- Now much more localisable - every string has been moved to localisation files for each language
- Rewrote a lot of functions to no longer produce errors, and to be more versatile.
- DPS from +dam works again
- Options window is now closeable by ESC key
- Paladin now correctly has holy damage as doing double damage, and going off melee crit rate
- Clearcast now modifies spell mana cost rather then total mana pool
- Fixed Winter's Might Enchant
- Fixed Animist's Carress Enchant
- Fixed Netherwind
- Netherwind is now considered a Proc effect
- Fixed some bugs involving mana cost
- Added some mana per 5 second food buffs

  -Version 1.02J**

- Added Soulfire and shadowburn (Maybe)
- Fixed Hellfire (again....)
- Final +Damage now displays correctly for spells that state what they tick for on the tooltip, rather then the total damage. Eg Arcane Missiles, Siphon life, Drain Life

  -Version 1.02I**

- Fixed the tooltip text for +Damage Coefficient
- +Damage Coefficient now displays correctly for spells that state what they tick for on the tooltip, rather then the total damage. Eg Arcane Missiles, Siphon life, Drain Life
- Fixed curse of agony
- New option, DoT over CT (old one renamed Combined DoT). DoT over Cast Time is expressed as total damage of DoT over the cast time.
- New option, "Show Heal Component" (was always in the mod, just now there's a checkbox for it - for spells like holy nova, holy shock, drain life)

  -Version 1.02H**

- Fixed siphon life

  -Version 1.02G**

- Fixed a reasonably large bug in the detecting buff and debuff functions.
- Fixed corruption (previously was bugged with talents in improved corruption)

  -Version 1.02F**

- Added 3 piece felheart bonus
- Drain Life and Siphon Life now show Healing stats as well as damage (type in /tc healanddamage to disable)
- You can now drag the options frame
- Options frame now has a dark dingy background like every other addon :(

  -Version 1.02E**

- Fixed Hellfire and Siphon Life

  -Version 1.02D**

- Added Ticks For to Rain of Fire
- Added Druid move Claw.

  -Version 1.02C**

- Added a "Ticks For:" line to warlock and druid DoTs/HoTs. (more to come)
- Fixed an error with Seal of Righteousness
- Fixed DPS of Hurricane
- Fixed "Factor Resists" under DPM
- Fixed an error with the Warlock ZG leg/head enchant.

  -Version 1.02B**

- Fixed the description of max w/ evoc + gem.

  -Version 1.02A**

- Fixed an error with the Mage ZG leg/head enchant.

  -Version 1.02**

- Full hunter support.
- Completely rewrote equipment reading function, now 3-10 times quicker and rewrote some internal arrays, report any bugs :)
- Changed a few formulas for casters, to be more accurate
- Holy Shock and Holy Nova now show damage and heal statistics. (Type in /tc healanddamage to disable)
- Arcane missiles is now treated as 1s cast for procs
- Fixed Blessing of Light (previously used paladins buffs, now checks targets)
- Troll +5% vs beasts added.
- Fixed free mana cost error.

  -Version 1.01**

- Druid cat support.
- No longer crashes when lawbringer boots are equipped (and possibly other items)
- Average Hit and DPS figures include crit damage/dps again.
- Added Holy Shock, although limited. (Embed is now correct, but crits/hps/average hit will only show damage values, not heals.)
- Seal of Righteousness now uses 0.12 as the +damage coefficient when you have a 2hander equipped.
- Average Hit now shows average damage over the total duration of all channeled spells. (Previously only spells already expressed like that, eg blizzard, now does it for all)
- Drain Life fixed.
- Divine Favour, Combustion, Blessing of Light, Judgement of the Crusader added.

  -Version 1.00C**

- Warrior/Rogues fixed (1.00A broke them completely).
- Combustion added.
- Drain soul fixed.
- Dps from +dam tooltip now factors in base modifiers eg shadowform/arcane power.

  -Version 1.00B**

- Fixed a large bug with fireball.

  -Version 1.00A**

- Crit chances appearing on spells that cannot crit, fixed.
- Added another DPS figure for spells like immolate that have direct damage then a DoT, and an option for changing how it is calculated under /tc. 
- Changed the way DPM was expressed for spells with DoT components.

  -Version 1.00**

- First Release.
