---
title: "EnemyFrames"
url: "https://turtle-wow.fandom.com/wiki/EnemyFrames"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:43:33Z"
fetched: "2026-09-10T07:38:44Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# EnemyFrames

-EnemyFrames** displays enemy unit frames, nameplates, target castbars, battlefield flags, incoming spells, and more.

## Installation
  -GitAddonsManager**

The easiest way to keep **EnemyFrames** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/byCFM2/enemyFrames.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the enemyFrames-master folder to enemyFrames
# Restart the game

  -Note**; 

- Delete the addons SavedVariables files if you experience issues. 
- Turn off nameplate and target cast bar functions in EnemyFrame's feature and nameplate tab if you use Shagutweaks or shaguplates.

## Git links
- **[(byCFM2)](https://github.com/byCFM2/enemyFrames)**
- [**(iliana)**](https://iliana-sc.github.io/enemyframes/)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/efd help</code>
|Displays a list of available commands and their descriptions.
|-
|<code>/efd config</code>
|Opens the addon configuration window.
|-
|<code>/efd reload</code>
|Reloads the addon configuration.
|-
|<code>/efd toggle [target]</code>
|Toggles visibility of specific enemy unit frames (replace <code>[target]</code> with the target name or ID).
|-
|<code>/efd showall</code>
|Shows all enemy unit frames.
|-
|<code>/efd hideall</code>
|Hides all enemy unit frames.
|-
|<code>/efd [icon_name]</code>
|Sets the icon for the currently targeted enemy (e.g., <code>/efd skull</code>).
|-
|<code>/efd showcastbars</code>
|Displays castbars for enemy abilities.
|-
|<code>/efd hidecastbars</code>
|Hides castbars for enemy abilities.
|}

## Quick Setup
- <code>/efs</code> — Opens the settings menu for customization
- <code>/efc</code> — Shows current battlefield scores and nearby players

  -Managing Raid Targets**

- Left-click on a unit frame to target that enemy
- Right-click on a unit frame to spawn a target menu for assigning raid icons
- Use the raid target icons to mark enemies for easier coordination

  -Customization & Configuration**

- Use <code>/efs</code> to access the in-game settings menu
- Adjust layout, display options, icons, and more
- Default icons can be set to class, rank, or portrait
- Enable or disable features like name display, mana bars, cast timers, and target counters

## Key Bindings
The addon supports key bindings for assigning raid icons quickly:

- Assign Skull to Target
- Target Skull
- Assign Moon to Target
- Assign Square to Target
- Assign Triangle to Target
- Assign Star to Target
- Assign Diamond to Target
- Assign Circle to Target
- Assign Cross to Target

Use your WoW keybinding interface to assign these commands for quick raid marking.

## How to Use
- Enemy frames are draggable and can be locked/unlocked via the settings button
- Right-click on a frame to bring up the raid target icon menu
- Click on the icons to set or clear raid marks
- The frames display enemy info like class, rank, race, health, and status effects
- The bottom bar allows toggling display options such as name, mana, cast timers, and icons

## Preview
Settings:

Frames:

## Features
- Custom enemy unit frames with health, castbars, and icons
- Raid target icons and targeting menus
- Battlefield flags and announcements
- Incoming spell indicators
- Configurable layout options
- Easy commands for setup and info
