---
title: "ShaguDPS"
url: "https://turtle-wow.fandom.com/wiki/ShaguDPS"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-24T11:38:18Z"
fetched: "2026-09-10T07:39:37Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ShaguDPS

-ShaguDPS** is a customizable damage and healing meter. It tracks combat performance, providing detailed statistics on damage, healing, and more.

## Installation
  -GitAddonsManager**

The easiest way to keep **ShaguDPS** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/shagu/ShaguDPS.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>ShaguDPS</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(shagu)**](https://github.com/shagu/ShaguDPS)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/sdps</code>
|Print the addon commands
|-
|<code>/sdps visible 1</code>
|Show the main window (0 or 1)
|-
|<code>/sdps width 180</code>
|Set the width of the DPS window
|-
|<code>/sdps height 17</code>
|Set the height of bars
|-
|<code>/sdps bars 8</code>
|Number of bars displayed
|-
|<code>/sdps trackall 1</code>
|Track all nearby units (0 or 1)
|-
|<code>/sdps texture 2</code>
|Choose status bar texture (1-4)
|-
|<code>/sdps pastel 1</code>
|Use pastel colors (0 or 1)
|-
|<code>/sdps backdrop 0</code>
|Show/hide window backdrop
|-
|<code>/sdps lock 1</code>
|Lock window to prevent moving
|-
|<code>/sd toggle</code>
|Toggle visibility of the main window
|}

  -Configuration**

- **Display Settings:** Adjust window visibility, size, texture, and colors via <code>/sdps</code> command.
- **Tracking Scope:** Choose whether to track all units or only selected targets.
- **Data Persistence:** Save data across sessions or reset with <code>/sdps reset</code>.

  -Range Control**

Since ShaguDPS relies on combat log data, range limits the information collected. To increase the combat log range (default 40 yards) to 200 yards, run:<syntaxhighlight lang="lua">
/run for _,n in pairs({"Party", "PartyPet", "FriendlyPlayers", "FriendlyPlayersPets", "HostilePlayers", "HostilePlayersPets", "Creature" }) do SetCVar("CombatLogRange"..n, 200) end
</syntaxhighlight>

## Preview
Settings:

Meter:

## Key Features
- Parses combat log data to monitor damage and healing.
- Supports customizable display and tracking options.
- Compatible with various UI mods.
- Range control for combat log data collection.
- Provides commands for quick configuration.
