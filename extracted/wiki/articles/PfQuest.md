---
title: "PfQuest"
url: "https://turtle-wow.fandom.com/wiki/PfQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-23T05:23:38Z"
fetched: "2026-09-10T07:39:24Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# PfQuest

pfQuest assist players in locating in-game objects and quest-related points of interest by parsing quest objectives and plotting them on both the world and minimaps using an extensive internal database.

## Installation
**GitAddonsManager**

The easiest way to keep **AtlasLoot** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/shagu/pfQuest.git
# Add the following URL to GitAddonsManager: https://github.com/shagu/pfQuest-turtle.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:
# Download **[pfQuest-turtle](https://github.com/shagu/pfQuest-turtle/archive/master.zip)**
# Unpack the Zip file
# Rename the folder "pfQuest-turtle-master" to "pfQuest-turtle"
# Copy "pfQuest-turtle" into TWoW\Interface\AddOns
# Download **[pfQuest](https://github.com/shagu/pfQuest/releases/latest/download/pfQuest-full.zip)**
# Unpack the Zip-file
# Move the <code>pfQuest</code> folder into <code>TWoW\Interface\AddOns</code>
# Restart Wow

**Important**: Set "Script Memory" to "0" ([HowTo](https://i.imgur.com/rZXwaK0.jpg))

## Git Links
- [**(pfQuest)**](https://github.com/shagu/pfQuest) - This is required
- [**(pfQuest turtle)**](https://github.com/shagu/pfQuest-turtle) - Support for Turtle custom quests and units

## Commands
{| class="fandom-table"
!Slash Command
!Description
|-
|<code>/db</code> / <code>/shagu</code> / <code>/pfquest</code> / <code>/pfdb</code>
|Main command to access all pfQuest functions
|-
|<code>/db lock</code>
|Lock or unlock the map tracker
|-
|<code>/db tracker</code>
|Show or hide the quest tracker
|-
|<code>/db journal</code>
|Show the quest journal
|-
|<code>/db arrow</code>
|Toggle the quest arrow display
|-
|<code>/db show</code>
|Show the database interface
|-
|<code>/db config</code>
|Open the configuration UI
|-
|<code>/db locale</code>
|Display current addon locales
|-
|<code>/db scan</code>
|Scan server for custom items
|-
|<code>/db query</code>
|Query server for completed quests
|-
|<code>/db clean</code>
|Clear all custom map nodes
|-
|<code>/db reset</code>
|Reset all data and settings to default
|-
|<code>/db chests</code>
|Show all chests on the map
|-
|<code>/db item <name></code>
|Search for an item and show location
|-
|<code>/db vendor <name></code>
|Search for vendors selling an item
|-
|<code>/db unit <name></code>
|Search for a mob or unit
|-
|<code>/db object <name></code>
|Search for game objects
|-
|<code>/db quest <name></code>
|Search for a specific quest
|-
|<code>/db quests</code>
|Show all quests on the map
|-
|<code>/db meta <name> <min> <max></code>
|Search for meta relations (e.g., level range)
|-
|<code>/db chests <name></code>
|Search for chests
|-
|<code>/db taxi [faction]</code>
|Show taxi nodes for a faction
|-
|<code>/db rares [min] [max]</code>
|Show rare mobs within level range
|-
|<code>/db mines [min] [max]</code>
|Show mining nodes within skill range
|-
|<code>/db herbs [min] [max]</code>
|Show herbal nodes within skill range
|-
|<code>/db debug</code>
|Toggle debug mode
|}

## Preview
Minimap Menu:

Browser:

Map:

## Controls
- To change node colors on the World Map, **click** the node.
- To remove previously done quests from the map, **shift-click** the quest giver on the world-map
- To temporarily hide clusters on the world-map, hold the **ctrl-key**
- To temporarily hide nodes on the mini-map, hover it and hold the **ctrl-key**
- To open Shortcut Menu **Left-Click** the mini-map button
- To move the mini-map-button, **shift-drag** the icon
- To move the arrow, **shift-drag** the frame

## Auto-Tracking
The add-on features 4 different modes that define how the new or updated quest-objectives should be handled. Those modes can be selected on the drop-down menu in the top-right area the map.

- **Option: All Quests** Every quest will be automatically shown and updated on the map.
- **Option: Tracked Quests** Only tracked quests (Shift-Click) will be automatically shown and updated on the map.
- **Option: Manual Selection** Only quest objectives that have been manually displayed ("Show"-Button in the Quest-log) will be displayed. Completed quest objectives will be still automatically removed from the map.
- **Option: Hide Quests** Same as "Manual Selection" and in addition to that, Quest-Givers won't be shown automatically. Also completed quest objectives will remain on the map. This mode won't touch any of the map nodes created.
