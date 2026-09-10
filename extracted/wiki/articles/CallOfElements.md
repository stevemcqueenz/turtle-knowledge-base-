---
title: "CallOfElements"
url: "https://turtle-wow.fandom.com/wiki/CallOfElements"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:10:23Z"
fetched: "2026-09-10T07:38:30Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# CallOfElements

**Call of Elements (COE)** is an all-in-one Shaman class addon updated specifically for TurtleWow. It features a comprehensive totem module that simplifies totem usage and enhances efficiency in both party play and PvP. The addon also includes a robust healing module and various tools for managing Shaman tasks.

## Install
**GitAddonsManager**

The easiest way to keep **CallOfElements** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/sica42/CallOfElements.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip
# Move the CallOfElements folder into your TWow/Interface/AddOns
# Restart the game

## Git Links
- [**(laytya)**](https://github.com/laytya/CallOfElements) - compatible with [HealersMate](HealersMate)
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/CallOfElements)
- **[(sica42)](https://github.com/sica42/CallOfElements)**

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/coe 
|Access the main menu.
|-
|/coe config 
|Open configuration dialog.
|-
|/coe list 
|Show available slash commands.
|-
|/coe priorset 
|Switch to the previous totem set.
|-
|/coe nextset 
|Switch to the next totem set.
|-
|/coe set <name> 
|Switch to the specified totem set (case-sensitive).
|-
|/coe throwset <set-name> 
|Throws the specified totem set by name.
|-
|/coe forcethrowset <set-name> 
|Refresh existing totems with the specified set name.
|-
|/coe restartset 
|Restart the current totem set.
|-
|/coe reset 
|Reset all timers and active sets.
|-
|/coe reload 
|Reload totems and sets.
|-
|/coe resetframes 
|Reset all element bars to the center of the screen.
|-
|/coe resetordering 
|Reset the order of totem bars.
|-
|/coe throwset 
|Throws the active totem set (macro form).
|-
|/coe advised 
|Throws the next advised totem (macro form).
|-
|/run if( COE.Initialized ) then COE_Heal:BestHeal();end
|Executes the healing function that chooses the best healing spell.
|-
|/run if( COE.Initialized ) then COE_Heal:BattleHeal();end
|Uses the Battle Heal function.
|}

## Key Bindings
The addon offers comprehensive key bindings for the Shaman class, allowing quick access to various functions:

- **Configuration Dialog:** Toggle the configuration frame for the addon.
- **Healing Functions:**
  - **BestHeal:** Heal the party member with the lowest health ratio using the most effective spell.
  - **BattleHeal:** Heal the member with the lowest health ratio using a faster-casting spell.
- **Totem Management:**
  - **ThrowAdvisedTotem:** Automatically throws the most appropriate totem based on the situation.
  - **SwitchToNextSet:** Switch between defined totem sets.
  - **ThrowSet:** Throws the active totem set.
  - **ResetSetCycle:** Resets the cycle of totem usage.
- **Totem Bindings:** Quickly throw Earth, Fire, Water, and Air totems, each with multiple ranks available.

## Preview
Options:

Totem Timers:

## Features
- **Totem Module:** Customizable frames manage totems by element (Earth, Fire, Water, Air) that function like standard action bars, complete with timers for active totems and notifications for expiring timers.
- **Custom Totem Sets:** Ability to create personalized sets for faster casting of multiple totems with a single command.
- **Predefined Class Sets:** Automatically activated sets based on the targeted class in PvP, improving gameplay strategy.
- **New Commands for Totem Management:**
  - **Drop Sets by Name:** Use <code>/coe throwset <set-name></code> to cast a specific totem set by name (e.g., <code>/coe throwset fireres</code>, <code>/coe throwset graceofair</code>).
  - **Force Cast Active Totems:** Use <code>/coe forcethrowset <set-name></code> to refresh existing totems regardless of active status.

- **New Configuration Options:** Includes options to forcibly drop totems even if they are currently active and, for **SuperWoW** users, to drop active totems if they are more than 20 yards away.
- **Configuration:** Access the configuration settings to adjust key bindings and module preferences. 
- **Hotkeys:** Bind hotkeys for fast access to healing functions and totem management.
- **Healing Functions:** Use the healing functions automatically during encounters to efficiently manage party health.

## Totem Module
**Totem Bars**
- Each element has its totem bar with customizable buttons that resemble standard action bars.
- Display modes include "Closed", "Open", "Flex", and "Hidden".
- Customize displayed totems and their order easily via configuration mode.
**Totem Advisor**
- Notifies you when party members have debuffs that can be cured with your totems.
- Use your preferred method or the "Throw next advised totem" key binding to activate.
**Totem Timers**
- Each totem button displays a timer with notifications for low time remaining or if a totem expires.
**Totem Sets**
- Predefined sets based on roles and environments (PvE and PvP).
- Allows quick casting of sequences with a single button press.
- New command options to throw sets by name and force drop existing totems.

## Healing Module
**Overview**

The Healing Module of the Call of Elements addon is responsible for managing healing logic, determining priority targets, and selecting the most effective healing spells to use based on several parameters and thresholds.

**Key Components**

# **Initialization & Event Handling**
1. * The module initializes by setting healing thresholds and registering important events.
1. * Listens for the <code>PLAYER_ENTERING_WORLD</code> event to load available healing spells.
# **Healing Thresholds:**
1. * **HealingNeeded:** Healing is only performed if the target's health ratio falls below 85%.
1. * **OverrideTarget:** A target can only be healed if no party/raid member is below 50% health, should a friendly target be actively selected.
# **Target Selection Logic:**
1. * Prioritizes healing the party member with the lowest health ratio but also considers the player's health and any selected friendly target.
1. * If a friendly non-party/non-raid target is selected and no other party members are in urgent need, it will heal that target.
# **Spell Determination:**
1. * The module dynamically selects the best spell to use for healing, aiming to maximize efficiency in terms of mana consumption and casting speed.
1. * Supports choices between high-healing spells and quicker-casting spells to adapt to different combat scenarios.
