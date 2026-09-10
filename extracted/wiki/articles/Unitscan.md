---
title: "Unitscan"
url: "https://turtle-wow.fandom.com/wiki/Unitscan"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-15T17:03:25Z"
fetched: "2026-09-10T07:39:56Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Unitscan

Unitscan is an essential tool for survival in hardcore mode. It provides a curated list of dangerous elites and rares, helping you stay alert and avoid deadly encounters. 

## Installation
**GitAddonsManager**

The easiest way to keep **Unitscan** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/RetroCro/unitscan-turtle-hc.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>unitscan-turtle-hc</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Optional:** 

- SoloRaidTargetIcons - lets you put raid markers on units without being in a party.
- Codex - see target abilities in the tooltip.

## Git Links
- [**(RetroCro)**](https://github.com/RetroCro/unitscan-turtle-hc) - fork extends unitscan-turtle by provinding a prepopulated list of dangerous elite mobs, rares, and other units.
- [**(FSuhas)**](https://github.com/FSuhas/Unitscan-Turtle-) - New version of Unitscan for Turtle with many new features for Superwow users, compatible with or without Superwow.
- [**(gttnvk)**](https://github.com/gttnvk/unitscan-soft.git) - Less spammy, less intrusive much more customizable with commands (use /unitscanhelp in game to see commands)

## Usage
- **Moving the Frame:**  Hold **CTRL + SHIFT + Left Click** and drag to reposition the unitscan display.
- **Listing Targets:**  <code>/unitscan</code> — Lists all currently active scan targets.
- **Adding/Removing Custom Targets:**  <code>/unitscan name</code> — Adds or removes a specific name from active targets. Targets added this way are temporary and removed after being found.
- **Target the Last Found Unit:**  <code>/unitscantarget</code> — Targets the most recently detected unit.
- **Persistent Custom Targets:**  To permanently add targets, edit <code>zonetargets.lua</code> and add an entry for that unit.

## Preview
## Features
Key Features & Functionality

- **Zone Targets List:**  The list of dangerous units is in the file <code>zonetargets.lua</code>. You can customize or expand it if needed.
- **Automatic Zone Target Management:**  Units are loaded based on your current zone. Targets are reloaded when you change zones and 90 seconds after finding a target to detect roaming elites.
- **Alerts:**  Unitscan alerts you when attackable NPCs are alive nearby. It pauses in combat or when auto-attack, auto-shoot, or wanding are active.
- **Manual Targeting:**  Targets are not auto-targeted when found. Use the <code>/unitscantarget</code> macro or click in the unitscan window to target them.

## Compatibility
Addon Compatibility

- **Targeting Behavior:**  Uses <code>TargetByName</code> to find exact matches. This temporarily switches your target to the found unit and then restores your previous target.
- **Addon Compatibility:**  Some addons that respond to target switches (like PvP alerts) may trigger when a new target is found due to this behavior.
