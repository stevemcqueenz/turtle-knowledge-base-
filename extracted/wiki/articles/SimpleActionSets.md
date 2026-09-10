---
title: "SimpleActionSets"
url: "https://turtle-wow.fandom.com/wiki/SimpleActionSets"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-13T20:28:17Z"
fetched: "2026-09-10T07:39:38Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# SimpleActionSets

**SimpleActionSets** allows you to save all 120 action buttons into customizable sets, which can be swapped on the fly for quick access to different action configurations.

## Installation
**GitAddonsManager**

The easiest way to keep **SimpleActionSets** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/pepopo978/SimpleActionSets.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the SimpleActionSets-master folder to SimpleActionSets
# Restart the game

## Git links
- [**(pepopo978)**](https://github.com/pepopo978/SimpleActionSets) 

## Preview
## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/sas</code>
|Opens the main SAS window.
|-
|<code>/sas swap [set_name]</code>
|Swap to a saved set.
|-
|<code>/sas save [set_name]</code>
|Save current configuration as a set.
|-
|<code>/sas savecurrent</code>
|Save current configuration as the current set.
|-
|<code>/sas delete [set_name]</code>
|Delete a saved set.
|-
|<code>/sas debug</code>
|Toggle debug mode.
|-
|<code>/sas show</code>
|Show or toggle the SAS main window.
|}

## **Help**
Simple Action Sets Help

**Action Set Slots**

- Click or drag to pick up an action.
- Click or drop on another action to move the action.
- Hold down Shift and click to copy an action.
- Drag or right-click off the Simple Action Sets frame to delete it.
- Hold down Control and click to delete an action.

**Action Set Bars**

- Click or drag the bar ID button to pick up the action bar.
- Click or drop on a bar ID button to swap action bars.
- Hold down Shift and click to copy an action bar.
- Hold down Control and click to delete an action bar.

**Action Set Bar Check Buttons**

- Disabling an action bar with the check button will prevent this entire bar from being applied when applying action sets.

**How to Swap Action Sets**

- Action sets can be swapped either from the Simple Action Sets' **Action Sets** menu, or by **right-clicking on the SAS minimap button** and selecting the set there.
- You can also put action sets into a macro by calling the set with: <code>/sas swap setname</code>

**Additional Information**

- Any bar that is unchecked or empty will not be swapped.
- If a bar has actions but some are empty, those actions will be cleared. You can change this behavior in the options tab.
- Items you possess will show with a green border (similar to equipped item indicators). If you do not have the item, the button will appear dimmed with a red border.
- Swapping a large number of actions can be slow and may cause a hitch.
- The fewer actions that differ from those already on your game’s action bars, the faster the swap will be.
- Turning off as many action bars in the set as possible will also improve swap speed.

## Features
- Save actions in to sets. Save all 120, or just 1.
- Swap those sets out at any time through a UI, drop-down menu, or macro.
- Save new sets directly from your action bars, alter those sets independent of the default UI, or create them from scratch. Spells, macros, items, even dragged from the action bars, can be dropped in to the Simple Action Sets setup frame actions.
- Action sets can swap out up to all 120 actions regardless of the bar mods used.
- If the player doesn't have an item at the time they swap in a set that includes it, automatically add the item to the bar when the player gets more (if the action button hasn't been used by that time).
- Titan Panel support.

## Contributors
- [Brodrick](http://web.archive.org/web/20060619062720/http://ui.worldofwar.net:80/ui.php?id=1560) (original creator)
- [Pepo](https://github.com/pepopo978) (compatibility with Superwow, fixes)
- [Ehawne](https://github.com/MarcelineVQ) (brainwasher compatability, fixes)
- [Oldi](https://github.com/0ldi)
- [evilbunny235](https://github.com/evilbunny235/SimpleActionSets)
