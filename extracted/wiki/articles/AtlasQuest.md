---
title: "AtlasQuest"
url: "https://turtle-wow.fandom.com/wiki/AtlasQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-03T12:18:38Z"
fetched: "2026-09-10T07:38:22Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# AtlasQuest

AtlasQuest provides detailed quest information for dungeons, raids, and instances. It integrates with Atlas and AlphaMap to display quests directly on the map, making it easier to find and complete quests in your dungeons.

## Installation
**GitAddonsManager**

The easiest way to keep **AtlasQuest** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Otari98/AtlasQuest.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to AtlasQuest, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Required**: In order for AtlasQuest to function, it requires **[Atlas](Atlas).**

**Optional**: **[AtlasLoot](AtlasLoot)**

## Git Links
- [**(Otari98)**](https://github.com/Otari98/AtlasQuest)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/aq help</code>
|Show help and list available commands
|-
|<code>/aq show</code>
|Show the AtlasQuest panel
|-
|<code>/aq hide</code>
|Hide the AtlasQuest panel
|-
|<code>/aq list</code>
|List all available instances and raids
|-
|<code>/aq list inst a</code>
|List all Alliance quests for the current instance
|-
|<code>/aq list inst h</code>
|List all Horde quests for the current instance
|-
|<code>/aq list [instanceID]</code>
|Show quests for a specific instance (replace [instanceID])
|}

## Features & Usage Tips
**Viewing Quests**
- Select an instance or dungeon from the list.
- The panel will display available quests, color-coded by difficulty and whether they are in your quest log.
- Use the **Next/Previous** buttons to navigate through multiple pages of quests.
- Check "Finished" to mark quests as completed.
**Map Integration**
- The addon automatically shows/hides based on whether you're using Atlas or AlphaMap.
- You can switch the display side (left/right) in options for your preference.
**Item Tooltips**
- Hover over quest items for detailed info.
- Right-click items to view them in your inventory.
- Shift + Click on quest items to insert a clickable link into chat.
- Ctrl + Click to dress up with the item in Dressing Room.

## Preview
## Configuration & Options
**Accessing Options**

- Open the options panel via <code>/aq</code> and select **Options**.
- Customize:
  - Show panel on startup
  - Display side (left/right)
  - Enable/disable color coding
  - Auto-query server for item info
  - Show quest notes and descriptions

**Key Options**

- **Auto Show**: Automatically opens the quest panel when entering a dungeon.
- **Side Selection**: Choose whether the panel appears on the left or right side of your map.
- **Color Coding**: Quests are colored based on level difficulty. Disable if you prefer no color cues.
- **Quest Log Check**: Quests you've completed are highlighted in blue.

## Contributors
- Shahopriest (original author)
- [Nonameby](https://github.com/Nonameby/AtlasQuest) (Turtle WoW edition and quests)
- [Otari](https://github.com/Otari98/AtlasQuest) (overhaul/revamp, menu changes, bugfixes/updates)
