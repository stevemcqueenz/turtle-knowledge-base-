---
title: "WIM"
url: "https://turtle-wow.fandom.com/wiki/WIM"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-28T11:42:03Z"
fetched: "2026-09-10T07:39:57Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# WIM

WIM (WoW Instant Messenger) is an instant messenger interface designed specifically for in-game whispers. It allows you to communicate without interfering with your busy interface during raids, providing the convenience of a dedicated chat window for each user you communicate with.

## Installation
**GitAddonsManager (Recommended)**

The easiest way to keep WIM up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/refaim/WIM.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>WIM</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
[**(refaim)**](https://github.com/refaim/WIM)

## Commands
- **/wim**: Option Window
- **/wim history**: History Viewer
- **/wim help**: Info window
- **/wim reset**: Reset all options to default
- **/wim reset filters**: Reload all built in filter definitions
- **/wim clear history**: Clear history

**Shift + Left Click:**

- **On Minimap Icon**: Drag the minimap icon when in free-moving mode.
- **On Inventory Items**: Insert the item link into the message box (for items in the inventory, trading, looting, etc.).
- **On Trade Skills and Crafts**: Insert links for selected trade skills and craft reagents into the message box.
- **On Loot Items**: Insert the loot item link into the message box.

**Tab:** 

Toggle between messages while in a conversation window.

**Whisper:**

- Click on the name of the person you want to whisper to in the chat
- (<code>/w</code>): Send a whisper message to a player.

**Reply:**
- (<code>/r</code>): Reply to the last whispered message.

**Key Bindings:**

- Be sure to check your Key Bindings screen for WIM's available actions.

## Preview
Options:

WIM:

## Features
- Instant messaging capabilities for whispers, along with organization features like history and recent conversations.
- Customizable interface with options for font size, color choices for incoming and outgoing messages.
- Integration of class icons and colors to visually differentiate players.
- History tracking for messages with automatic cleanup of old messages.
- Filters to block or ignore specific messages based on user-defined patterns.
- Built-in Titan plugin

## Change Log
**Version 1.3.3 (12-27-2017)**

- Refactored code by shirsig.

**Version 1.3.2 (01-05-2017)**

- Added Russian translation (ruRU).

**Version 1.3.1 (10-17-2006)**

- Created a new minimap icon menu; no longer using Blizzard's Drop Down Menu.
- Added the ability to close conversations from the minimap icon menu.
- Made necessary code changes for the Titan plugin and the new minimap icon menu.
- The Who window no longer pops up when speaking with a GM or offline user.
- WIM now replaces the "Send Message" button in the Friends Frame.
- Intercepts <code>/w</code> and <code>/whisper</code> commands and opens a message window.
- Added an option to enable/disable whisper slash command intercepting.
- Added support for LootLink.
- Added support for EngInventory.
- Allowed execution of slash commands inside a message window.

**Version 1.2.13 (10-03-2006)**

- Fixed a bug that caused an error if Titan was not loaded.

**Version 1.2.12 (10-03-2006)**

- Added support for AtlasLoot.
- Introduced an option to keep focus only while in a major city.
- Added an option to hide AFK and DND messages.
- Included an option to enable/disable the use of the 'Escape Key' to close windows.
- Added "Show" and "Hide All Messages" key bindings.
- Added a scroll bar to the general options tab.
- Fixed a nil error in <code>WIM_LoadGuildList()</code>.
- Enabled item linking from the loot window.
- Added support for AllInOneInventory.
- The Who window should no longer pop up when finding similar names.
- Titan is now listed as an optional dependency.

**Version 1.2.11 (09-29-2006)**

- Fixed a spelling mistake on the Windows tab.
- No longer run <code>/who</code> requests on cross-realm users.
- Retrieve information on cross-realm users from raid info.
- The message toggle window now shows only unique users.
- Toggling the window now brings it to the front if hidden.
- The toggling window now auto-focuses when a message is selected.
- The TAB key now toggles windows while focused in another window.
- Allows item linking from the inspect screen and SuperInspect.
- Added a "Did you know?" tab in help.
- Added a "Credits" tab in help.
- Added a button in the options screen to access help.

**Version 1.2.10 (09-26-2006)**

- Made minor adjustments to window focusing behavior.
- Modified the options window to include aliasing, filtering, and history options.
- Added alias filtering, keyword/phrase filtering, and default CT_RABM filter rules.
- Introduced a history engine and options.
- Added a history viewer (<code>/wim history</code>).
- Fixed the transparency of the shortcut bar to 100%.
- Added a button in the message window to access history if available.
- Added options to set the default window position and toggle window cascading.

**Version 1.1.15 (09-19-2006)**

- Added an option to show character information for <code>/who</code> requests.
- Added support for showing class icons.
- Minimap icon no longer shows on top of all other windows unless it's in free-moving mode.
- Enabled item linking in character frames, trade skill windows, and crafting windows.
- Added options to set class color for title bar text and display timestamps.
- Added a shortcut bar and detailed character information (Guild, level, race, class).

**Version 1.1.4 (09-15-2006)**

- Added built-in Titan plugin.
- Adjusted transparency behavior for chat text.
- Corrected the direction for opening the minimap menu.
- Created new graphics for the message window, which is now sizable.
- Reorganized the options window and created a tab for window options.
- Removed the option to show the minimap tooltip.
- Added options for tooltips and window sorting behavior.
- Enabled dragging of message windows by the chat frame and focused on clicking the chat frame.

**Version 1.0.19 (09-12-2006)**

- Fixed issues with in-game languages (Common/Orcish). Resolved conflicts with other language interfaces.
- Recoded function hooks to avoid receiving duplicate messages due to addon conflicts.

**Version 1.0.18 (09-12-2006)**

- Initial public release.
