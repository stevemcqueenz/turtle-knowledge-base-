---
title: "OmniCC"
url: "https://turtle-wow.fandom.com/wiki/OmniCC"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-26T12:42:53Z"
fetched: "2026-09-10T07:39:21Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# OmniCC

Omni Cooldown Count (OmniCC) is a universal cooldown count plugin.  Anything that uses the default functions for cooldown models should have a cooldown count added with this addon, including the default blizzard action bars, your inventory, and the character sheet. Cooldown counts are generated dynamically, so OmniCC should be much more efficient than just pregenerating the cooldown counts for every possible button. 

## Installation
**GitAddonsManager** 

The easiest way to keep **OmniCC** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Otari98/OmniCC.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>!OmniCC</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(crazypoultry)**](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/!OmniCC_v6.8.30/!OmniCC) Version: 6.8.30 (normal)
- [**(Otari98)**](https://github.com/Otari98/OmniCC) Version: 1.3.3.7 (lightweight)

## Commands
Use /omnicc or /occ to print OmniCC's commands into the chat.
{| class="fandom-table"
!Command
!Description
!Example
|-
|<code>/omnicc size <value></code>
|Set font size of cooldown numbers
|<code>/omnicc size 18</code>
|-
|<code>/omnicc font <nowiki><font path></nowiki></code>
|Set font (e.g., <code>Fonts\FRIZQT__.TTF</code>)
|<code>/omnicc font Fonts\ARIALN.TTF</code>
|-
|<code>/omnicc min <seconds></code>
|Show cooldowns only if longer than specified seconds
|<code>/omnicc min 3</code>
|-
|<code>/omnicc color <duration> <r> <g> <nowiki><b></nowiki></code>
|Set color for cooldowns of a specific duration
|<code>/omnicc color long 1 0 0</code>
|-
|<code>/omnicc scale <duration> <value></code>
|Set scale for cooldowns of specific duration
|<code>/omnicc scale short 0.8</code>
|-
|<code>/omnicc model</code>
|Toggle cooldown model visibility
|<code>/omnicc model</code>
|-
|<code>/omnicc shine</code>
|Toggle bright flashes when cooldown completes
|<code>/omnicc shine</code>
|-
|<code>/omnicc shinescale <value></code>
|Set size of flash effect
|<code>/omnicc shinescale 4</code>
|-
|<code>/omnicc reset</code>
|Reset all settings to default
|<code>/omnicc reset</code>
|}

## Preview
Priest:

Warrior:

## Key Features
- **Universal Compatibility:** Works with default Blizzard action bars, inventory, character sheet, and other UI elements.
- **Dynamic Counts:** Cooldown text updates in real-time, avoiding pre-generation of all cooldowns.
- **Customization:** Adjust font, size, color, scale, and toggle features like shiny flashes.
- **Cooldown Model & Flashes:** Optional visual indicators for cooldown completion.
- **Compatibility:** Updated for WoW version 1.12 and TurtleWow.

## Additional Tips
**Configuring for Your UI**

- **Default Settings:** Use <code>/omnicc reset</code> to restore default configuration if custom settings cause display issues.
- **Compatibility Tips:** Disable other cooldown addons to prevent conflicts, especially those that modify cooldown displays.

**Custom Font Paths**

- Use full path for custom fonts, e.g., <code>Fonts\ARIALN.TTF</code>. Valid paths include:
  - Standard fonts like <code>Fonts\FRIZQT__.TTF</code>
  - User-installed or custom font files
- **Tip:** Test font changes with <code>/omnicc font</code> command to verify validity.

**Performance Tips**

- OmniCC is designed to be efficient, but excessive customization or many cooldowns can impact performance.
- **Solution:** Use <code>/omnicc min <value></code> to hide cooldown text for short, less critical timers.

**Shine & Visual Effects**

- Bright flashes are optional and can be distracting for some users.
- Use <code>/omnicc shinescale <value></code> to customize size; larger values make flashes more prominent.
- To disable shine effects, run <code>/omnicc shine</code> again.

**Color Coding for Quick Recognition**

- Set different colors for durations like <code>vlong</code>, <code>long</code>, <code>medium</code>, and <code>short</code>:
  - Example:
  - * <code>/omnicc color long 0 1 0</code> (green for long cooldowns)
  - * <code>/omnicc color short 1 0 0</code> (red for quick cooldowns)

## Troubleshooting
- **Fonts:** Ensure you specify correct font paths; invalid fonts revert to default.
- **Cooldown Flash:** Bright flashes are disabled by default; enable via <code>/omnicc shine</code>.
- **Visibility:** If cooldown text or model isn’t showing, check <code>/omnicc model</code> and <code>/omnicc hide</code> commands.
- **Compatibility:** Remove old folders (<code>!OmniCC</code>) before installing new versions to prevent conflicts.

## Changelogs
**6.8.30** 

- Updated for 1.12 
- Added another check for invalid fonts 
- Adjusted the cooldown count timing to not show 0, again :) 

**6.7.30** 

- The shine is now disabled by default. 
- Fixed an issue causing cooldown flashes to not inherit its parent's opacity 

**6.7.24** 

- Made OmniCC a proper addon. 
- Adjusted the cooldown count timing to not show 0 
- Improved performance slightly for cooldowns under a minute 
- Added the ABInfo style flash to OmniCC 
- Added vlong to the list of adjustable duration setting, for cooldowns greater than an hour. 
- Consolidated /omnicc showmodel and /omnicc model into /omnicc model 
- Added the following commands:  
- /omnicc scale [duration] [value] - Sets the scale of the cooldown text for the given duration 
- /omnicc shine - Toggles bright cooldown flashes 
- /omnicc shinescale [value] - Sets the scale to use for bright cooldown flashes
