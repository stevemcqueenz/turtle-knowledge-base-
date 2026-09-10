---
title: "Detox"
url: "https://turtle-wow.fandom.com/wiki/Detox"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-14T13:49:39Z"
fetched: "2026-09-10T07:38:39Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Detox

Detox is designed to assist in removing debuffs from party or raid members. It is inspired by Decursive and offers features such as customizable filtering, priority curing, live debuff display.

## Installation
# [Download](https://github.com/Road-block/Select_AddOns/raw/refs/heads/master/Detox-r15132.zip) the addon.
# Unpack the .zip
# Move the Detox folder into your Interface/AddOns directory 
# Restart the game.

  -Optional**:  [FuBar & plugins](https://github.com/laytya/Vanilla-Addons/blob/master/FuBar%2Bplugins.zip)

## Git Links
- [**(Road-block)**](https://github.com/Road-block/Select_AddOns/blob/master/Detox-r15132.zip)

{| class="fandom-table"
!Command
!Description
|-
|/detox
|Displays all commands in chat.
|-
|/detox clean
|Initiates an immediate attempt to clean the current group/raid.
|-
|/detox priority
|Toggles the current target's inclusion in the priority list.
|-
|/detox priority group
|Toggles the current target's group for priority curing.
|-
|/detox priority class
|Toggles the current target's class for priority curing.
|-
|/detox blacklist
|Blacklists units out of line of sight for a set duration.
|-
|/detox feedback
|Toggles combat text feedback (using SCT5 or Blizzard's default).
|-
|/detox filter
|Configures filtering options for debuffs and conditions.
|-
|/detox livelistoptions
|Sets options for the live list display.
|-
|/detox hide
|Hides or shows the minimap icon.
|-
|/detox profile
|Sets or switches the addon profile.
|-
|/detox standby
|Suspends or resumes the addon.
|-
|/detox debug
|Enables or disables debugging messages.
|-
|/detox about
|Prints addon info.
|}

  -Keybindings (configured in Key Bindings options)**

- **Clean group:** Shortcut to run Detox:Clean().
- **Toggle target priority:** Shortcut to toggle current target in the priority list.
- **Toggle target group priority:** Shortcut to toggle current target's group in the priority list.
- **Toggle target class priority:** Shortcut to toggle current target's class in the priority list.

## Preview
Minimap options:

Live List:

## Key Features
- Automatic detection and curing of debuffs
- Customizable priority list for curing targets
- Filtering options by debuff type, range, stealth, and class
- Live list of debuffed units with optional sound alerts
- Integration with FuBar and minimap icon
- Localization support for multiple languages
- Support for multiple external libraries

## Final Tips
- Enable debugging in the options for detailed logs
- Use keybindings to quickly clean or toggle priorities
- Customize skip list to avoid unnecessary curing
- Adjust update speed for optimal performance
- Use the live list to monitor debuffs in real-time

## Main Functions
  -Spellbook Management**

- <code>ParseSpellbook()</code>: Reads available spells for curing
- <code>RescanSpellbook()</code>: Checks if spellbook has changed
- <code>CheckPet()</code>: Detects pet type for specific spells

  -Curing Logic**

- <code>Clean()</code>: Initiates the curing process
- <code>UnitCurable()</code>: Checks if a unit can be cured
- <code>CureUnit()</code>: Applies curing spells based on debuffs
- <code>CastCuringSpell()</code>: Casts specific spells on units

  -Combat Feedback**

- <code>MessageCombatFrame()</code>: Displays messages in SCT, MikSBT, or Blizzard FCT

  -Debuff Management**

- <code>AddSkippedDebuff()</code>: Adds debuffs to skip list
- <code>RemoveSkippedDebuff()</code>: Removes debuffs from skip list
- <code>PopulateSkipList()</code>: Updates UI menu for skip list management

  -Priority Handling**

- <code>PriorityPrint()</code>: Notifies when a target is added/removed from priority
- <code>PriorityToggle()</code>: Adds/removes current target to/from priority by class, group, or individual
- <code>UpdatePriority()</code>: Recomputes and sorts priority list
- <code>CreateOptionsTable()</code>: Builds dynamic options menu for prioritization
- <code>GetPriority()</code>: Calculates priority score for each unit

  -Live Display & FuBar**

- <code>OnTooltipUpdate()</code>: Shows debuffs and priorities
- <code>GetRaidColors()</code>: Gets color coding for classes
