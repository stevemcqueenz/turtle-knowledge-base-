---
title: "Carbonite"
url: "https://turtle-wow.fandom.com/wiki/Carbonite"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-17T17:02:30Z"
fetched: "2026-09-10T07:38:30Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Carbonite

Carbonite is a comprehensive addon that provides map, quest, waypoint, and social features.

## Installation
  -GitAddonsManager**

The easiest way to keep **Carbonite** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://gitlab.com/knights-of-sunwell/carbonite-vanilla.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move these folders into your <code>Interface/AddOns</code> directory and restart the game.

- Carbonite
- Carboniteltems
- CarboniteNodes
- CarboniteTransfer

## Git Links
- [**(knights-of-sunwell)**](https://gitlab.com/knights-of-sunwell/carbonite-vanilla)

## Usage
- The Carbonite logo appears on login if installed correctly.
- Access the main features via the minimap icon or the map interface (default key: m).

  -Minimap & Map**

- Left click minimap icon: toggles the map.
- Right click minimap icon: opens the main menu.
- M: toggles fullscreen map.
- Scroll wheel: zooms in/out.
- Shift + click: pings the minimap.
- Alt + M: opens the default Blizzard map.

  -Map Controls**

- Drag map: move around.
- Right click in map: opens map menu with options like GOTO, Notes, Save/Restore Scale.
- M: toggle full-screen map.
- Map follows you by default; can be toggled off.

  -Quest & Quest Watch**

- The quest log replaces Blizzard's default.
- Shift + quest title: add to watch list.
- Right click quests for options: share, abandon, watch all.
- Quest objectives: round buttons to activate GOTO, toggle objectives, or send status messages.
- Quest Givers: show icons (parchment for normal, blue ! for dailies).

  -HUD & Map**

- Auto-tracking arrow: points to current target/objective.
- Drag HUD arrow to move.
- Right click arrow: targets the target of your target.
- Left click arrow: targets the NPC/Player pointed at.

  -Social & Punks**

- Press O to open social window.
- Pals tab: manage friends across characters.
- Punks tab: track enemy players, note their locations, and keep notes.
- Right click on punk entries for options like add, remove, or notes.

  -Favorites & Notes**

- The Favorites window manages locations, notes, and paths.
- Create notes via right-clicking map.
- Targets and notes are saved in folder structures, similar to a file system.
- Use the "Record" mode to capture new locations/path points.

  -Warehouse**

- Browse all your characters' gear and bank items.
- Search for items across all characters.
- Link items or export/import data for character management.
- Sync data between characters or accounts.

  -Map & Icons**

- Clickable icons represent players, quest givers, points of interest.
- Colors indicate friend, guild, party, enemy, or quest status.
- Icons can show health bars, combat status, and target info.
- Use the Guide feature to locate POIs like mailboxes, flight paths, vendors.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/Carb</code>
|Open main menu
|-
|<code>/carb options</code>
|Open options window
|-
|<code>/carb map</code>
|Toggle map fullscreen
|-
|<code>/carb quest</code>
|Open quest log
|-
|<code>/carb warehouse</code>
|Open warehouse
|-
|<code>/carb help</code>
|Show help info
|}

## Preview
Options:

Map:

## Features & Tips
- Map follows your position and zoom level settings are saved.
- Quest objectives dynamically update and can be tracked with the Auto Track button.
- Note locations, waypoints, and create paths.
- Track enemy players ("Punks") with visual indicators.
- Gather herb/mining locations are tracked and can be routed.
- Social features include friend lists, enemy notes, and zone monitoring.
- The addon visually overlays points of interest on battleground maps.
- Hover over map icons for tooltips showing detailed info.

## Customization & Settings
- Access options via minimap menu or <code>/carb options</code>.
- Customize map zoom, icon size, quest display, social settings, and more.
- Lock/unlock windows, adjust transparency, and scale windows.
- Save custom map scale and position.
- Enable/disable features like the guide, warehouse, or social notifications.

## Important Notes
- Ensure the addon is enabled at login; otherwise, the logo won’t appear.
- The addon does not modify Blizzard’s core UI but overlays additional info.
- Some features depend on other addons like CarboniteNodes and CarboniteTransfer.
- For debugging or advanced usage, commands like <code>/carb debug</code> are available (see detailed commands).
