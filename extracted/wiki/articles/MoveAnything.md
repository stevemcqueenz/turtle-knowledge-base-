---
title: "MoveAnything"
url: "https://turtle-wow.fandom.com/wiki/MoveAnything"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T12:46:11Z"
fetched: "2026-09-10T07:39:17Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# MoveAnything

MoveAnything provides extensive control over the placement, scaling, and visibility of your user interface elements.

## Installation
  -GitAddonsManager (Recommended)**

The easiest way to keep MoveAnything up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/JembaWoW/MoveAnything.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>MoveAnything</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(JembaWoW)**](https://github.com/JembaWoW/MoveAnything)

## **Commands**
- <code>/move</code>: Opens the MoveAnything options window.
- <code>/move framename</code>: Starts moving the frame named "framename".
- <code>/movelist</code>: Lists all valid character-specific settings.
- <code>/movecopy servername playername</code>: Copies layout from another character.
- <code>/movedelete servername playername</code>: Deletes settings for a specific character.

## Preview
Options:

Positioning:

## Detailed Reference
Upon opening the MoveAnything options window, you will see a list of predefined movable elements, including common UI components like the tooltip, casting bar, minimap, bags, and action buttons.

To move a window from this list, check the "Move" box next to its name. A grey overlay will appear over the window, indicating its current position and size. You can move the window by clicking and dragging within this grey area. Even if the window is not currently visible, you can still move it, although it's easier when it's displayed.

- The grey overlay also features small boxes on each edge for resizing. Dragging these boxes will resize the window proportionally.
- Right-clicking the movable area (or unchecking the "Move" box in the options menu) will finalize the movement and scaling.
- Holding <code>Shift</code> while right-clicking will temporarily hide the overlay text and background, providing an unobstructed view of the window you are moving. The resizing handles and movable area remain active.
- To revert a window to its default position and scale, click the "Reset" button next to its name in the options list.

  -Info Panels**

- Info panels, such as the character screen, tradeskill window, bank, and spellbook, appear on the left and center of your screen. Most of these are predefined as movable in MoveAnything.
- When you move an info panel, it detaches from its default position, allowing you to have multiple panels open simultaneously, though this can lead to overlapping.
- MoveAnything also allows you to move the general areas where these panels appear. "Info Panel 1" and "Info Panel 2" in the list control the position and size of the next panel that opens in those spots. Note that moving these areas does not affect panels currently open; you must close and reopen them to see the change.

  -Vertical Bars**

Built-in button bars (action, pet action, bags, micro buttons, etc.) can be moved and scaled. MoveAnything provides separate entries in the list to arrange these bars vertically. Checking the "Move" box next to the vertical option (e.g., "Pet Action Buttons (Vertical)") will stack the buttons one on top of the other. Moving and scaling then works as usual.

  -Bank Bags**

Due to how the game handles bank bags (their size isn't fully known until opened), moving them requires a specific process:

# Open the bank bag.
# Click "Move" in the MoveAnything options.
# Close the bag.
# Click "Move" again.

This ensures the correct size is registered. If you don't follow these steps or are not at the bank, the positioning might not be exact. Normal inventory bags do not have this issue.

  -Moving Frames Not in the List**

MoveAnything can move any UI frame, even if it's not in the predefined list. To move a frame not listed, you need its exact name. You can find this with the Positioning Tool MouseOver.

Once you have the frame name, use the slash command: <code>/move FrameNameHere</code>

Replace "FrameNameHere" with the actual name of the frame. This frame will then be added to your MoveAnything list, and its position will be saved. To remove it from the list, simply "Reset" it. Predefined frames will remain in the list even after being reset.

  -Addon Compatibility with the Main Menu Button**

MoveAnything includes a function <code>GameMenu_AddButton()</code> that allows other addons to add buttons to the main game menu between the "Macros" and "Logout" buttons without conflict. Other addon developers can duplicate this function in their own mods and call it to ensure compatibility.

## Known Problems
- **Scaling Overwrites:** World of Warcraft's UI scaling can sometimes cause scaled windows to revert to their default size if their parent window is scaled afterward. This is particularly noticeable with the Player and Pet windows (the pet window is a child of the player window) and when the main UI frame (<code>UIParent</code>) is scaled, which happens when tabbing out or resizing the game window in windowed mode. A keybinding is available to refresh positions and fix this issue.
- Reloading your UI (<code>/reload ui</code>) can also resolve scaling issues, but the keybinding is a quicker solution.

## **Positioning Tool**
  -Precise Positioning and Alignment**

These buttons provide fine-grained control over the placement of the frame you currently have selected in the "MA 1/20" list. They are ideal for making small adjustments or aligning frames perfectly.

- **+ Next Page:** Clicking this button will move you to the next page or slot in the "MA 1/20" sequence. If you are on "MA 1/20", clicking "+" will take you to "MA 2/20".
- **− Previous Page:** Clicking this button will move you to the previous page or slot in the "MA 1/20" sequence. If you are on "MA 2/20", clicking "-" will take you to "MA 1/20".
- **C−H Center Horizontally:** This button is a quick way to align the selected frame to the horizontal center of your screen or its parent frame. Clicking this will automatically adjust the frame's horizontal position so it's perfectly centered.
- **C−V Center Vertically:** This button is a quick way to align the selected frame to the vertical center of your screen or its parent frame. Clicking this will automatically adjust the frame's vertical position so it's perfectly centered.
- **< Nudge Left:** Clicking this button moves the selected frame a small distance to the left. The increment is usually very small, allowing for pixel-perfect adjustments.
- **> Nudge Right:** Clicking this button moves the selected frame a small distance to the right, again for precise adjustments.
- **^ Nudge Up:** This button moves the selected frame a small distance upwards, useful for fine-tuning vertical placement.
- **v Nudge Down:** This button moves the selected frame a small distance downwards, for precise vertical adjustments.
- **C Center Frame:** This button is a quick way to move the selected frame to the exact center point of your entire screen. It will adjust both the horizontal and vertical position to place the frame in the middle.
- **MouseOver:** This feature in the positioning tool allows you to quickly identify frame that your mouse cursor is currently hovering over.

## Version Notes
  -vJ.11100.0**

- Includes community fixes from wow.jaslaughter.com.
- Still has some known issues (e.g., keyring issue not fixed).
- Suggests considering alternative addons like DFM.

  -vJ.10900.3**

- Mover frames (the grey overlay) are sized correctly regardless of UIScale.
- Added new predefined frames.
- Added 'center' buttons to the nudger (center, center-horizontally, center-vertically).

  -vJ.10900.2**

- All scaling issues appear to be resolved.
- Frame 'jumping' issue appears to be resolved.

  -vJ.10900.1**

- Improved 1.9 support.
- Shift and right-clicking on nudger buttons moves frames in larger increments (1, 10, 50, 250).
- Added a key binding to move the frame under your cursor.

  -vJ.10900**

- Preliminary 1.9 support.
- Workaround for container_frames in 1.9.

  -vJ.1800**

- Works with LoadOnDemand AddOns, including Blizzard UI AddOns.
- Adjusts the button position if Saien's MCP is installed.

  -vJ.1**

- Removed reliance on UNIT_NAME_UPDATE.
- Added a framefinder (from Discord).
- Added a nudge function (from Discord).
