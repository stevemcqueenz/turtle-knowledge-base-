---
title: "MobInfo2"
url: "https://turtle-wow.fandom.com/wiki/MobInfo2"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:54:26Z"
fetched: "2026-09-10T07:39:16Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# MobInfo2

-MobInfo-2** provides detailed information about [mobs](Mob) (monsters and opponents) you encounter. It enhances the standard game tooltip and the target frame with valuable data collected as you play.

## Installation
  -GitAddonsManager (Recommended)**

The easiest way to keep MobHealth2 up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/robs898/MobInfo2.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>MobInfo2</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

- Start fighting mobs. You will begin to see health on the target frame and information in the tooltip after killing and looting.

  -Important Note:** 

- If you have [Shagutweaks](ShaguTweaks) you can turn off everything in the health/mana tab in the MobHealth2 options menu as these features come with it.
- If you were previously using a separate MobHealth addon (like the original MobHealth or MobHealth2), it is recommended to disable or remove it as MobInfo-2 includes this functionality.

  -Optional**: [MobInfo2 Browser](https://github.com/xVitali2/Addons-for-Vanilla-1.12.1/tree/master/MobInfo2_Browser)

## Git Links
- [**(robs898)**](https://github.com/robs898/MobInfo2)
- [**(xVitali2)**](https://github.com/xVitali2/Addons-for-Vanilla-1.12.1/tree/master/MobInfo2)

## Commands
{| class="fandom-table"
!Command
!Action
|-
|/mobinfo2 or /mi2
|Open or close the configuration panel
|-
|/mobinfo2 version
|Display the current version of MobInfo2
|-
|/mobinfo2 notes
|Display recent patch notes
|-
|/mobinfo2 convertdroprate
|Convert data from DropRate addon into MobInfo2 database
|-
|/mobinfo2 help
|Show list of available slash commands
|-
|/mobinfo2 <optionName>
|Toggle a boolean option (e.g., showclass, showhealth)
|-
|/mobinfo2 <optionName> <value>
|Set a numeric or text option (e.g., targetfontsize 12)
|-
|/mi2 stablemax
|Toggle showing stable health maximum in target frame
|-
|/mi2 trimdownmobdata
|Initiate trimming down mob data (requires confirmation)
|-
|/mi2 manaposy 20
|Set vertical position of mana in target frame to 20
|-
|/mi2 savebasicinfo
|Toggle recording of basic mob information
|-
|/mi2 manapercent
|Toggle showing percentage of mana in display
|-
|/mi2 healthpercent
|Toggle showing percentage of health in display
|-
|/mi2 showkills
|Toggle showing number of kills
|-
|/mi2 showcoin
|Toggle showing average coin drop
|-
|/mi2 searchminloots 5
|Set minimum loots for search to 5
|-
|/mi2 searchnormal
|Include normal mobs in search
|-
|/mi2 saveitems
|Toggle saving loot item details
|-
|/mi2 saveplayerhp
|Toggle storing player health data
|-
|/mi2 showblanklines
|Toggle showing blank lines in tooltip
|-
|/mi2 showxp
|Toggle showing XP
|-
|/mi2 importonlynew
|Toggle importing only new mobs
|-
|/mi2 showempty
|Toggle showing empty loots
|-
|/mi2 targethealth
|Toggle showing target health
|-
|/mi2 showtotal
|Toggle showing total average mob value
|-
|/mi2 savelocation
|Toggle recording mob location
|-
|/mi2 clearhealthdb
|Clear health database (requires confirmation)
|-
|/mi2 keypressmode
|Toggle MobInfo display on ALT key press
|-
|/mi2 searchminlevel 10
|Set minimum search level to 10
|-
|/mi2 showquality
|Toggle showing loot quality counters
|-
|/mi2 compactmode
|Toggle compact tooltip layout
|-
|/mi2 targetfont
|Set target frame font (requires font ID or name)
|-
|/mi2 alloff
|Switch all MobInfo show options to OFF
|-
|/mi2 showcombined
|Toggle showing combined mode message
|-
|/mi2 showlocation
|Toggle showing mob location
|-
|/mi2 targetmana
|Toggle showing target mana
|-
|/mi2 searchmobname Defias
|Search for mobs with "Defias" in name
|-
|/mi2 showclothskin
|Toggle showing cloth and skinning loot separately
|-
|/mi2 cleartarget
|Clear data for current target
|-
|/mi2 disablemobinfo
|Disable MobInfo in tooltips
|-
|/mi2 targetfontsize 14
|Set target frame font size to 14
|-
|/mi2 itemfilter Wool
|Set item filter to "Wool"
|-
|/mi2 importmobdata
|Initiate external database import
|-
|/mi2 showmana
|Toggle showing mob mana info
|-
|/mi2 manaposx -10
|Set horizontal mana position to -10
|-
|/mi2 savechardata
|Toggle saving character-specific data
|-
|/mi2 allon
|Enable all MobInfo show options
|-
|/mi2 showiv
|Toggle showing average item value
|-
|/mi2 itemtooltip
|Toggle displaying mob names in item tooltips
|-
|/mi2 showno2lev
|Toggle showing kills needed to level
|-
|/mi2 showdamage
|Toggle showing mob damage info
|-
|/mi2 searchelite
|Toggle including elite mobs in search
|-
|/mi2 searchmaxlevel 50
|Set maximum search level to 50
|-
|/mi2 showloots
|Toggle showing number of loots
|-
|/mi2 minimal
|Apply minimal configuration preset
|-
|/mi2 clearplayerdb
|Clear player health database (requires confirmation)
|-
|/mi2 combinedmode
|Toggle combining data for mobs with same name but different levels
|-
|/mi2 showcloth
|Toggle showing cloth loot count
|-
|/mi2 searchitemname Linen Cloth
|Search for mobs dropping "Linen Cloth"
|-
|/mi2 clearmobdb
|Clear mob info database (requires confirmation)
|-
|/mi2 sortbyvalue
|Sort search results by mob profit
|-
|/mi2 deletesearch
|Delete all mobs in current search result (requires confirmation)
|-
|/mi2 showhealth
|Toggle showing mob health info
|-
|/mi2 showitems
|Toggle showing loot item names and amounts
|-
|/mi2 searchboss
|Include boss mobs in search
|-
|/mi2 itemsquality 3
|Set minimum item quality to 3 (green) for recording
|-
|/mi2 default
|Apply default MobInfo2 settings
|-
|/mi2 healthposy 15
|Set vertical health position to 15
|-
|/mi2 healthposx 5
|Set horizontal health position to 5
|-
|/mi2 showclass
|Toggle showing mob class info
|}

## Preview
Options:

Tooltip:

## **Backing Up Your Database**
It is highly recommended to regularly back up your MobInfo-2 database. The entire database is stored in a single file:

WTF\Account\<your_account_name>\SavedVariables\MobInfo2.lua

To back up:

# Log out of the game completely. This ensures the latest data is saved to the file.
# Navigate to the path listed above.
# Copy the MobInfo2.lua file to a safe location outside of your WoW installation folder.

To restore:

# Log out of World of Warcraft completely.
# Copy your backed-up MobInfo2.lua file back into the SavedVariables folder, overwriting the existing file if prompted.
# Log back into the game.

## Key Features
MobInfo-2 offers several features to enhance your gameplay experience:

- **Enhanced Tooltip:** Adds extra information to the game's tooltip when you mouse over a mob.
- **Target Frame Health/Mana:** Displays numeric and percentage values for your target's health and mana directly on the target frame.
- **Data Collection:** Automatically builds a database of information about mobs you fight and loot.
- **Configurable Options:** Provides a comprehensive options menu to customize the display and collected data.
- **Database Search:** Allows searching the collected data, including finding the most profitable mobs.
- **Database Import:** Supports importing MobInfo and MobHealth databases from other users.
- **DropRate Conversion:** Can convert data from the older DropRate addon's database.

## Data Collected and Displayed
MobInfo-2 collects various data points for each mob you encounter. This data is displayed in the tooltip or used for calculations. Some stats are stored per character, while others are global.

  -General Mob Information:**

- Class
- Health (Current and Total)
- Mana (Current and Total)
- XP (Experience gained from the last kill)
- # to Level (Estimated number of kills needed to gain a level)
- Quality (Item quality dropped by the mob)
- Resistances and Immunities (Tracks various spell schools)
- Attempts to Run (If the mob attempts to flee when low on health)
- Mob Type (Normal, Rare/Elite, Boss)

  -Player-Specific Information (Stored per character):**

- Damage (Min/Max damage range the mob deals to you)
- DPS (Your damage per second against the mob)
- Kills (Number of times you've killed this mob)

  -Loot Information:**

- Total Looted (Number of times you have looted the mob)
- Empty Loots (Number of times the mob had no loot)
- Cloth Drops (Number of times cloth dropped - specifically tracks Linen, Wool, Silk, Mageweave, Felcloth, Runecloth, Mooncloth)
- Skinning Drops (Number of times skinning loot was obtained - tracks various leather/hide/scale types)
- Avg Coin Drop (Average money dropped)
- Avg Item Value (Average vendor value of items dropped - attempts to use data from other addons like Auctioneer, Informant, or pfUI if available)
- Total Mob Value (Sum of average coin and item value)
- Rarity of dropped items (Count of Grey, White, Green, Blue, Purple items)
- Item List (A list of recorded items looted, by item ID and amount - can be filtered by quality)

## Combined Mode
MobInfo-2 offers a **Combined Mode** where data for mobs with the same name but different levels is combined into a single tooltip display. This can be useful for seeing overall statistics for a mob type regardless of its specific level. This mode can be enabled through the options dialog.

## Target Frame Health/Mana Display
MobInfo-2 can show the exact numeric and percentage health and mana values on the default target frame. This display is highly customizable through the MobInfo-2 options dialog, allowing you to adjust position, font, size, and more. The Lua code shows options for `HealthPosX`, `HealthPosY`, `ManaPosX`, `ManaPosY`, and `TargetFontSize`.

## Importing an External Database
MobInfo-2 allows you to import databases from other users or older MobHealth versions.

  -Important Warning:** The database you import **MUST** be from someone using the exact same World of Warcraft client language (localization) as you. Importing a database from a different language client will not work and may corrupt your existing database. The Lua code specifically checks for locale compatibility during import.

Before importing, always back up your own MobInfo-2 database (see above).

To import:

# Close your World of Warcraft client completely.
# Back up your current MobInfo-2 database.
# Rename the external database file you want to import from MobInfo2.lua (or MobHealth.lua for MobHealth) to MI2_Import.lua.
# Copy the MI2_Import.lua file into your World of Warcraft\Interface\AddOns\MobInfo2\ folder.
# Start World of Warcraft and log in with a character.
# Open the MobInfo-2 options dialog (/mi2).
# Go to the "Database" page. You should see an indication that valid data for import has been found, and the "Import" button should be clickable. The Lua code checks for an "ImportSignature" to see if data has already been imported from this file.
# Choose whether to import only unknown mobs or all mobs (existing mob data will be added to).
# Click the "Import" button. A summary of the import results will appear in your chat window.
# Log out of World of Warcraft to ensure the newly imported data is saved.
# Delete the MI2_Import.lua file from the World of Warcraft\Interface\AddOns\MobInfo2\ folder.

## Converting a DropRate Database
MobInfo-2 can convert data from an older DropRate addon database. This requires an additional item database addon to be installed and active during the conversion.

  -Mandatory Requirement:** You must have one of the following item database addons installed and active for the conversion to work: [ItemSync](ItemSync), [LootLink](LootLink), [LootLink Enhanced](LootLink Enhanced), or [KS_Items](KS_Items). These addons are needed to convert item names (used by DropRate) into item ID codes (used by MobInfo-2). LootLink is recommended due to the availability of large pre-built databases.

To perform the conversion:

# Ensure you have MobInfo-2, DropRate, and one of the required item database addons installed and active.
# Back up your MobInfo-2 database and your DropRate database (World of Warcraft\WTF\Account\<your_account_name>\SavedVariables\DropRate.lua). The conversion will modify both.
# Type /mi2 convertDropRate in the chat window and press Enter to start the conversion. The results will appear in your chat log.
# Log out of World of Warcraft to save the modified databases.
# Check the DropRate.lua file in your SavedVariables folder. Data successfully converted to MobInfo-2 will have been removed from the drdb section of this file. Entries remaining in drdb were not converted (either because they were non-mob data like chests/mining, or they referenced items not found in your item database).
# If the conversion was successful and you are satisfied, you can leave things as they are. If many items were not converted, consider obtaining a larger item database and repeating the process (the converter will only process data still remaining in the DropRate database).
# If the conversion encountered errors or you are unhappy with the result, restore your backups of MobInfo2.lua and DropRate.lua (after exiting WoW).

  -Important Note:** You should **NEVER** have both DropRate and MobInfo-2 active during normal gameplay, except for the specific purpose of performing the conversion. Having both active will lead to incorrect data collection and potentially double-counting data during conversion.

## Frequently Asked Questions
- **Where do the health values come from? Why do max health values change at first?**

 [World of Warcraft](World of Warcraft) does not directly provide exact numeric health values for mobs to addons. MobInfo-2 (and its predecessors MobHealth and MobHealth2) approximates this value by calculating the "Points-Per-Percent" (PPP). This is done by tracking the damage you deal and the corresponding percentage change in the mob's health. The accuracy of the PPP value improves with more fights against the same mob type. MobInfo-2 accumulates data from up to 100 fights for the best approximation. You can use the "Show stable Health Max" option to prevent the max health value from updating during a fight.
- **How do I change tooltip position or popup behavior?**

 MobInfo-2 only adds information *to* the tooltip; it does not control *where* or *how* the tooltip appears. To customize tooltip positioning or behavior, you need a separate tooltip control addon. Popular options include [TipBuddy](TipBuddy), [AF Tooltip Extreme](AF Tooltip Extreme), or [TooltipsKhaos](TooltipsKhaos) (often part of larger addon compilations).

## Version History
- **3.12/3.11:** Fixed battleground-related bugs. Added display for temporary mob immunities.
- **3.10:** Added tracking for mobs attempting to run when low on health. Improved zone handling. Fixed loot counter issues. Added BC compatibility. Fixed item tooltip percentages.
- **3.05:** Fixed combined mode zone display. Fixed pet kill XP tracking. Updated localizations.
- **3.04:** Fixed XP detection. Updated Spanish localization. Removed some chat commands.
- **3.03/3.02:** Fixed money drop recording in item list. Updated localizations. Improved spell school conversion. Added Spanish localization detection. Fixed various minor bugs related to kills and health display.
- **3.01:** Implemented mob resistance and immunity tracking. Extended options and database for this data. Recorded XP per character. Improved event handling and tooltip performance. Added support for new skinning loot. Stored and checked WoW client language.
