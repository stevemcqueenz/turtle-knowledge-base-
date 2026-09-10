---
title: "BananaBar"
url: "https://turtle-wow.fandom.com/wiki/BananaBar"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-26T14:18:05Z"
fetched: "2026-09-10T07:38:23Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# BananaBar

**BananaBar** allows you to easily select marked units by searching for raid or party members’ targets that have specific symbols or Hunter's Mark.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the bananabar-master folder to bananabar
# Restart the game

**Note:** 

- Be sure to delete any old "Banana" files when you download **BananaBar** to avoid conflicts.
- When used alongside [SuperWoW](https://github.com/balakethelock/SuperWoW) it enhances consistency in target selection.

## Git Links
[(Otari98)](https://github.com/Otari98/bananabar)

## **How to Use**
- **Left-click on Raid Symbol or Hunter's Mark Button**  Searches for a mob with the specified symbol. BananaBar checks all raid or party members and their targets for the specified symbol or Hunter's Mark. If a matching unit is found, it will be targeted. If no units are found, an error sound is played.

**Chat Command:**

- <code>/bananatarget 1-8</code> or <code>/bbtarget 1-8</code>  Mark 1 is the star, Mark 8 is the skull, and the others are easily deduced. This allows you to use the addon’s functionality in macros.

- **Ctrl+Left-click on Raid Symbol Button:**  Sets a raid symbol to your current target. If the target already has the specified symbol, it will be removed. (Only works if you are a Raid Leader, Raid Officer, or Party Leader.)
- **Ctrl+Left-click on Hunter's Mark Button:**  Sets Hunter's Mark to your current target. (Only works if you are a Hunter.)

**Ctrl+Right-click:**

Moves the buttons around the screen.

**Restrictions:**

- Only **one Hunter's Mark** is supported at a time. If more than one is set, the Hunter's Mark button will not work correctly.
- If both **Hunter's Mark** and a **Raid Symbol** are set on the same target, only the Raid Symbol will be shown.

**Settings**:

You can open the settings dialog with the following commands:

- <code>/bb</code>
- <code>/bbr</code>
- <code>/banana</code>
- <code>/bananabar</code>

Note: The <code>/bb</code> shortcut may conflict with other addons using the same command.

You can also open the settings window via a keyboard shortcut.

## Preview
BananaBar:

Option:

## **Settings**
- **Disable Sound**  If checked, the addon will not play any sounds.
- **Disable Error Text**  If checked, the addon will not display any error messages in the chat window if no marked target is found.
- **Show Buttons in Raid**  If checked, the buttons will be visible when you're in a raid group (40 players). If unchecked, the buttons are hidden.
- **Show Buttons in Party**  If checked, the buttons will be visible when you're in a party (5 players). If unchecked, the buttons are hidden.
- **Show Buttons Out of Group**  If checked, the buttons will appear even when you're not in any group.
- **Hide Unused Buttons**  If checked, any buttons without a target will be hidden. This is useful if you only want to use the buttons for targeting units and not for assigning symbols.
- **Layout Combo Box**  Choose your preferred button layout. The Hunter’s Mark button is detached and can be freely moved in any layout.
- **Button Size**  Adjust the size of the buttons in this section.
- **Reset Defaults**  Resets all settings to their default values, including button positions. Use this if buttons are missing or behaving unexpectedly.

## Features
- Easy-to-use interface for applying raid target symbols.
- Customizable layouts and button sizes.
- Support for sound notifications when applying/removing symbols.
- Configuration settings available through slash commands.

## History
**1.6**

- Reduced memory usage by 99%—no need to create new tables every frame.
- Refactored code for better performance, readability, and stability.
- Added new options: Invert direction and detach 9th symbol (Hunter's Mark).

**1.5 Beta 1**

- Added a new button for Hunter's Mark functionality.

**1.0**

- Fixed issues with button frames not hiding in RC1.

**1.0 RC1**

- Icons now display on the left side of the CT_Raid maintank window.
- Works in both raids and normal parties.
- Added target names (useful in vertical layout).

**1.0 Beta 12**

- Reworked button position saving and scaling.
- Button scaling is now relative to WoW’s interface scaling settings.
- New keyboard shortcut for clearing all raid symbols.

**1.0 Beta 11**

- Internal release for bug fixes.

**1.0 Beta 10**

- Fixed bug where buttons weren’t shown after the first install.
- Added key bindings for targeting by symbol and resetting button positions.

**1.0 Beta 9**

- Fixed chat window spam issue.

**1.0 Beta 8**

- Bug fix for <code>nil</code> reference error.

**1.0 Beta 7**

- Buttons for dead targets are now greyed out.
- Button frames can be toggled off.
- Added shortcuts for targeting by symbol.

**1.0 Beta 6**

- Fixed incorrect slash commands for the config menu.

**1.0 Beta 5**

- First official release.
