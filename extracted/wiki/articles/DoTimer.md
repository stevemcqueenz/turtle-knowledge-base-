---
title: "DoTimer"
url: "https://turtle-wow.fandom.com/wiki/DoTimer"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-08T17:02:35Z"
fetched: "2026-09-10T07:38:39Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# DoTimer

-DoTimer** is a highly sophisticated DoT (Damage-over-Time) tracking tool. It tracks up to 10 targets with 20 debuffs each, supports macro functions, offers customizable interfaces, and detects resistances, immunities, and other effects for high accuracy.

## Installation
  -GitAddonsManager**

The easiest way to keep **DoTimer** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/kc8pnd/DoTimer.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>DoTimer</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

  -Note:** Replace <code>"expalert.wav"</code> with your preferred sound file in the addon directory for custom alerts.

## Git Links
- [**(kc8pnd)**](https://github.com/kc8pnd/DoTimer)

## Usage Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/dotimer help</code>
|Show help menu with available commands
|-
|<code>/dotimer</code> / <code>/dot</code>
|Open GUI interface
|-
|<code>/dotimer on</code>
|Enable tracking
|-
|<code>/dotimer off</code>
|Disable tracking
|-
|<code>/dotimer reset</code>
|Reset settings
|-
|<code>/dotimer help [category]</code>
|Specific help on categories (e.g., sizing, interface)
|}

  -Common Settings via** <code>/dotimer</code> **GUI**

- Change display mode (icons/bars)
- Adjust scale and layout
- Enable/disable sounds
- Set max targets/debuffs
- Lock/unlock interface
- Toggle features like only current target timers, hide target names, etc.

## Preview
Options:

Timers:

## Core Features
- **Target Separation & Management:** Supports tracking multiple targets simultaneously.
- **Debuff Support:** Tracks up to 20 debuffs per target; older entries are overwritten when limits are reached.
- **Timer Display:** Show timers as icons or bars (no other formats planned). Timers update several times per second for accuracy.
- **Smart Timer Handling:** Avoids erratic deletion of timers, detects resists, immunities, reflect, evade, etc.
- **Macro Support:** Extensive functions for macro automation and debuff checks.
- **Interface Customization:** Scale, position, layout, sorting, display mode, and more.
- **Sound Alerts:** Play sounds near expiration; customizable sound files.
- **Ghost Timers & Simulations:** For testing and recasting timers.
- **Localization & Support:** Supports multiple languages and additional classes.

## Customization & Interface
  -Layout & Size**

Use <code>/dotimer</code> commands or GUI options to:

- Change scale (<code>/dotimer scale 1.5</code>)
- Switch display mode (<code>/dotimer set format bars</code>)
- Adjust bar length: <code>/dotimer bar length 200</code>
- Lock/unlock interface positions

  -Target & Debuff Display**

- Show only current target's timers (<code>/dotimer onlytarget on</code>)
- Enable/disable target names
- Change layout (up, down, left, right) with <code>/dotimer set layout</code> command

  -Sound & Alerts**

- Enable sound notifications (<code>/dotimer play sounds</code>)
- Replace default sound by placing a file named <code>expalert.wav</code> in your addon folder
- Ghost timers can automatically cast Conflag or Swiftmend if enabled

## Macro Support & Sample Macros
DoTimer provides several functions for macro automation. Here are some examples:
 <syntaxhighlight lang="lua">-- Cast corruption if not on target, else shadow bolt
 /script if DoT_IsPSpell("Corruption") then CastSpellByName("Shadow Bolt") end
 
 -- Cast corruption and immolate if not present, then shadow bolt
 /script if DoT_IsPSpell("Corruption") then if not DoT_SpellOnTarget("Immolate") then CastSpellByName("Immolate") end end
 
 -- Cast Curse of Shadow if not on target, else shadow bolt
 /script if not DoT_IsSpell("Curse of Shadow") then CastSpellByName("Shadow Bolt") end
 
 -- Cast Curse of Shadow or Curse of Agony
 /script if not DoT_DetermineSpell("Curse of Shadow", "Curse of Agony") then CastSpellByName("Shadow Bolt") end
 
 -- Cast Conflagrate after Immolate has been active for 13 seconds
 /script if DoT_ReturnElapsed("Immolate") >= 13 then CastSpellByName("Conflagrate") end
 
 -- Banish if less than 2 seconds remaining
 /script if DoT_ReturnRemaining("Banish") <= 2 then CastSpellByName("Banish") end
 
 -- Rejuvenate or Swiftmend depending on castability
 /script local r,s,c="Rejuvenation",DoT_SpellOnTarget,CastSpellByName; if (s(r) or s("Regrowth")) then c("Swiftmend") else c(r) end</syntaxhighlight>

## Class & Spell Support
  -DoTimer** supports all classes, with some support for priests, druids, and hunters. It tracks common DoTs, curses, and buffs.

  -How to Customize Spells**

Edit <code>spells.lua</code> and <code>spellsdata.lua</code> to add or modify spells:

  -Use the format:**<syntaxhighlight lang="lua">
["texture_path"] = { name = "Spell Name", duration = seconds, multiplier = 1 }
</syntaxhighlight>

Add to class-specific spell tables in <code>DefineSpells</code>.

## Changelog Highlights
- Version **1.1.6**: Fixed issues for Turtle WoW
- Version **1.1.5.2**: Fix for Shaman
- Version **1.1.5.1**: Added Shaman, Russian localization
- Version **1.1**: Major improvements:
  - Smarter ghost timers
  - Show only current target
  - Improved layout options
  - Smarter spell detection
  - Support for more classes and spells
