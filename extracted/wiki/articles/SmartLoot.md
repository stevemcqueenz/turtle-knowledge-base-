---
title: "SmartLoot"
url: "https://turtle-wow.fandom.com/wiki/SmartLoot"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-04T09:59:02Z"
fetched: "2026-09-10T07:39:40Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# SmartLoot

SmartLoot is designed to replace or enhance the default group loot frames that appear when items are up for roll in a group setting.

## Installation
**GitAddonsManager (Recommended)**

The easiest way to keep SmartLoot up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/akidraham/SmartLoot.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to SmartLoot, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(akidraham)**](https://github.com/akidraham/SmartLoot)
- [**(Necroskillz)**](https://github.com/Necroskillz/SmartLoot)

## **Commands**
- <code>/sloot</code>: This is the primary slash command to open the SmartLoot options window.

**Click Functions:**

- **Minimap Button (Left Click):** Opens the SmartLoot options window.
- **Minimap Button (Right Click and Drag):** Allows the user to reposition the minimap button.
- **Need Button on Loot Frame:** Rolls Need on the displayed item.
- **Greed Button on Loot Frame:** Rolls Greed on the displayed item.
- **Pass Button on Loot Frame:** Rolls Pass on the displayed item.
- **Item Icon on Loot Frame (Mouseover):** Displays the standard game tooltip for the item.
- **"Always [Roll Type] on [Item Name]" in Advanced Roll Dropdowns:** Adds a loot rule to automatically roll the selected type (Need, Greed, or Pass) on that specific item in the future.
- **Checkboxes in Options Frame:** Toggles various SmartLoot options on or off (e.g., Show anchor, Hide default loot frames, Autoloot, Autoconfirm, Autoconfirm all, Show minimap button).
- **Slider for Loot Frame Count in Options Frame:** Adjusts the number of visible loot frames.
- **Slider for Minimap Button Position in Options Frame:** Adjusts the angular position of the minimap button.
- **"Apply Filter" Button in Autoroll List:** Filters the list of remembered loot rules based on the selected quality and name filter.
- **Scroll Bar in Autoroll List:** Navigates through the list of remembered loot rules.
- **"Remove" Button next to an item in the Autoroll List:** Deletes the remembered loot rule for that item.
- **Need/Greed/Pass Radio Buttons next to an item in the Autoroll List:** Changes the remembered loot rule for that item.

## Preview
Options:

SmartLoot:

## **Features**
- **Compact Group Loot Frames:** Provides smaller, movable frames for group loot rolls.
- **Movable Loot Frames:** Users can position the SmartLoot frames anywhere on the screen.
- **Autoconfirm BoP Rolls:** Automatically confirms rolling on Bind-on-Pickup (BoP) items if a loot rule is defined for them.
- **Autoconfirm All Rolls:** Automatically confirms rolling on ALL BoP items, regardless of defined rules.
- **Automatic Rolling based on Rules:** Remembers user's roll choices (Need, Greed, Pass) for specific items and automatically rolls the same way the next time that item drops.
- **Options Window (GUI):** A graphical interface to configure all the addon's settings and manage remembered loot rules.
- **Configurable Number of Loot Frames:** Allows the user to set how many loot frames are visible at once.
- **Minimap Button:** Provides a button on the minimap for easy access to the options.
- **Movable Minimap Button:** The minimap button can be dragged to a desired position around the minimap.
- **Hide Default Loot Frames:** Option to hide the standard Blizzard group loot UI when SmartLoot's frames are active.
- **Test Loot:** A debugging feature to display fake loot items in the SmartLoot frames.
