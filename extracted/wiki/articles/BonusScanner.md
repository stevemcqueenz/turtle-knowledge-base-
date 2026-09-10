---
title: "BonusScanner"
url: "https://turtle-wow.fandom.com/wiki/BonusScanner"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T12:13:32Z"
fetched: "2026-09-10T07:38:27Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# BonusScanner

-BonusScanner** scans your equipment for cumulative item bonuses and displays the total values for various stats and resistances. Use this to quickly see how your gear boosts your character. 

## Installation
  -GitAddonsManager** 

The easiest way to keep **BonusScanner** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/jrc13245/BonusScanner.git
# **Select the Branch:** Ensure that the main branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>BonusScanner</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.
  -Notes:**

- The addon analyzes item tooltip data; ensure items are properly cached.
- BonusScanner updates bonuses on login and whenever your inventory changes, providing real-time info.

## Git Links
- **[(jrc13245)](https://github.com/jrc13245/BonusScanner)**

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/bscan show</code>
|Show overall bonuses
|-
|<code>/bscan details</code>
|Show bonuses with slot-specific details
|-
|<code>/bscan <itemlink></code>
|Bonuses for a linked item (Shift-Click item)
|-
|<code>/bscan <slotname></code>
|Bonuses for a specific slot (e.g., Head, Neck)
|}

## Preview
## Key Features
- Detects bonuses like Strength, Agility, Stamina, etc.
- Shows resistance bonuses (Arcane, Fire, Frost, etc.).
- Displays set bonuses and enchantments.
- Supports detailed slot bonuses breakdown.
- User-friendly slash commands for quick info.

## Developer Info
For advanced users or developers, the code provides functions to access bonus data programmatically:

  -BonusScanner:GetBonus(bonus)**

- Returns total of a certain bonus type or 0 if not that bonus type is not present. 
- **Example**: BonusScanner:GetBonus('CRIT') returns crit chance bonus of your current equipment.

  -BonusScanner:GetSlotBonuses(slotname)**

- Returns table of bonuses on a certain item slot or an empty table if nothing present.
- **Example**: BonusScanner:GetSlotBonuses('Trinket0') returns bonuses on your first trinket slot

  -BonusScanner:GetBonusDetails(bonus)**

- Returns slot distribution of a certain bonus type

  -BonusScanner:GetSlotBonus(bonus, slotname)**

- Returns the bonus amount of a certain bonus type on a certain item slot..
- **Example**: BonusScanner:GetSlotBonus('DMG', 'Head') returns the spell damage bonus on your helmet. 

  -BonusScanner_Update()** 

- Gets called, after bonuses get updated. Empty function to hook into.

## Bonus Types
Available bonus types are:<syntaxhighlight lang="lua">
types = {
'STR', -- strength
'AGI', -- agility
'STA', -- stamina
'INT', -- intellect
'SPI', -- spirit
'ARMOR', -- reinforced armor (not base armor)

'ARCANERES', -- arcane resistance
'FIRERES', -- fire resistance
'NATURERES', -- nature resistance
'FROSTRES', -- frost resistance
'SHADOWRES', -- shadow resistance

'FISHING', -- fishing skill
'MINING', -- mining skill
'HERBALISM', -- herbalism skill
'SKINNING', -- skinning skill
'DEFENSE', -- defense skill

'BLOCK', -- chance to block
'BLOCKVALUE', -- increased block value
'DODGE', -- chance to dodge
'PARRY', -- chance to parry
'ATTACKPOWER', -- attack power
'ATTACKPOWERUNDEAD', -- attack power against undead
'ATTACKPOWERFERAL', -- attack power in feral form

'CRIT', -- chance to get a critical strike
'RANGEDATTACKPOWER', -- ranged attack power
'RANGEDCRIT', -- chance to get a crit with ranged weapons
'TOHIT', -- chance to hit

'DMG', -- spell damage
'DMGUNDEAD', -- spell damage against undead

'ARCANEDMG', -- arcane spell damage
'FIREDMG', -- fire spell damage
'FROSTDMG', -- frost spell damage
'HOLYDMG', -- holy spell damage
'NATUREDMG', -- nature spell damage
'SHADOWDMG', -- shadow spell damage
'SPELLCRIT', -- chance to crit with spells
'HEAL', -- healing
'HOLYCRIT', -- chance to crit with holy spells
'SPELLTOHIT', -- Chance to Hit with spells

'SPELLPEN', -- amount of spell resist reduction

'HEALTHREG', -- health regeneration per 5 sec.
'MANAREG', -- mana regeneration per 5 sec.
'HEALTH', -- health points
'MANA', -- mana points
};
</syntaxhighlight>

## **Debugging**
To enable debug messages, set:<syntaxhighlight lang="lua">
BonusScanner.ShowDebug = true
</syntaxhighlight>Debug messages will appear in your chat frame, indicating scans and actions.
