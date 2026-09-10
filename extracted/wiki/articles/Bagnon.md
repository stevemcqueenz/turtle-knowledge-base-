---
title: "Bagnon"
url: "https://turtle-wow.fandom.com/wiki/Bagnon"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:12:00Z"
fetched: "2026-09-10T07:38:22Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Bagnon

**Bagnon** is designed to enhance inventory management. It consolidates all your bags and bank contents into single, customizable frames for easier access and organization. Additionally, it offers features like color-coded item slots, quick switching between characters’ inventories, and flexible configuration options to improve your overall gameplay experience by making inventory management more streamlined and visually intuitive.

## Installation
**GitAddonsManager**

The easiest way to keep **Bagnon** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/McPewPew/Bagnon.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move these folders into your <code>Interface/AddOns</code> directory and restart the game.

- Bagnon
- Bagnon_Core
- Bagnon_Forever
- Bagnon_Options

**Optional**: [KC_Items](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/KC_Items_v.94.5)

## Git Links
- [**(McPewPew)**](https://github.com/McPewPew/Bagnon)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/bagnon</code> or <code>/bgn</code>
|Opens the Bagnon menu options.
|-
|<code>/bgn bags</code>
|Toggles the display of your inventory bags.
|-
|<code>/bgn bank</code>
|Toggles the display of your bank.
|-
|<code>/bgn delete <character> <realm></code>
|Removes stored data about a specific character.
|-
|<code>/bgn overridebank</code>
|Toggles whether talking to NPCs opens the bank or not.
|-
|<code>/bgn debug</code>
|Enables debug information (for troubleshooting).
|-
|<code>/bgn nodebug</code>
|Disables debug information.
|}

**Keybindings**
- **Toggle Inventory:** <code>BAGNON_TOGGLE</code>
- **Toggle Bank:** <code>BANKNON_TOGGLE</code>

**Moving Frames**

- Unlock frames (via right-click menu), then click and drag the title bar to reposition.

**Hiding Bags**

- Shift-Click on any bag within the frame to toggle its visibility.

**Viewing Other Characters**

- Click the arrow button on the frame title to select a different character’s inventory or bank.

**Searching**

- Double-click the frame title to open a search box.

## Preview
Options:

Settings:

Bagnon:

## Main Features
- **Unified Inventory Display:** View all bags and bank contents in single, easy-to-manage frames.
- **Color-Coded Slots & Borders:**
  - Ammo & Soul Bags: Yellow borders.
  - Profession Bags: Green borders.
  - Keyring Slots: Orange borders.
  - Item borders are color-coded based on item quality.
- **Access from Anywhere:** View other characters’ inventories and banks (requires Bagnon_Forever).
- **Dynamic Loading:** Frames load only when needed for performance.
- **Customizable & Modular:** Enable or disable features as you prefer.
- **Frame Movement:** Drag frames when unlocked.
- **Hiding Bags:** Shift-Click individual bags within the frame to toggle visibility.
- **Searching:** Double-click the frame title to open a search dialog.
- **Character Switching:** Double-click the title (with Bagnon_Forever) to switch between characters’ data.
- **Slash Commands & Keybindings:** Quick toggle inventory/bank views.

## Configuration
- Right-click on the top part of the Bagnon frame to access options:
  - Change appearance (size, position, borders).
  - Enable/disable specific bags.
  - Adjust color-coding and borders.
  - Toggle tooltips and info display.
  - Set preferences for viewing other characters’ data.

## Bagnon Addons
Overview of Bagnon Addons

- **Bagnon:** Combines all your bags into a single, customizable frame.
- **Banknon:** Displays your bank in one frame.
- **Bagnon_Core:** Core files necessary for both Bagnon and Banknon.
- **Bagnon_Options:** Configuration menu for Bagnon.
- **Bagnon_Forever:** Optional; view other characters’ inventory and bank from anywhere.
- **Bagnon_DB:** (Optional) Saves character inventory data.
- **Bagnon_KC:** (Optional) Alternative database system using KC_Items.
