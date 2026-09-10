---
title: "DiscordMiniPanels"
url: "https://turtle-wow.fandom.com/wiki/DiscordMiniPanels"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-07T13:39:16Z"
fetched: "2026-09-10T07:38:39Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# DiscordMiniPanels

These mods replace the default spellbook and bag frames with scalable, movable, scrolling frames that display more detailed info. Both can be resized smaller, and the inventory includes extra tabs for item types, qualities, soulbound items, stacks, and up to 5 custom user-defined tabs. Bags can be named individually. Items are sortable by name, bag, quality, level, and type. There's also a compact mode similar to AllInOneInventory. Items can be dropped anywhere in the window and will automatically find the first empty slot.

## **Installation**
  -Manual Installation only**

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Extract the .zip file, move the DiscordMiniSpellbook and DiscordMiniInventory folder from inside the Discord_collection folder to your <code>Interface/AddOns</code> directory
# Restart the game.
  -Important:** The default keybindings "b" and "p" open the default bags and spellbook. The addons have their own section in the keybinding options where you can add the default keys to open them.

## Git Links
- [**(crazypoultry)**](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)

## Commands
  -Spellbook Slash Commands:**
{| class="fandom-table"
!Command
!Description
|-
|/dmsb
|Toggle the spellbook
|-
|/dmsb scale #
|Set the spellbook's scale (1-100)
|-
|/dmsb reset
|Reset the spellbook to the middle of the screen
|-
|/dmsb replace
|Replace the default spellbook
|-
|/dmsb selfcast
|Set spells to self-cast by default from the spellbook
|-
|/dmsb tabs
|Toggle display of the spellbook tabs
|-
|/dmsb drag
|Toggle the ability to drag the spellbook frame
|}

  -Inventory Slash Commands:**
{| class="fandom-table"
!Command
!Description
|-
|/dmin
|Toggle the inventory
|-
|/dmin scale #
|Set the inventory's scale (1-100)
|-
|/dmin reset
|Reset the inventory to the middle of the screen
|-
|/dmin replace
|Replace the default bags
|-
|/dmin selfcast
|Set items to self-cast by default from the inventory
|-
|/dmin combine
|Combine multiple instances of the same item into 1 button (e.g., 5 stacks of 20 silk cloth show as 100 silk cloth)
|-
|/dmin tabs
|Toggle the side tabs
|-
|/dmin bags
|Toggle the bag tabs
|-
|/dmin compact
|Toggle between compact and detailed modes
|-
|/dmin drag
|Toggle the ability to drag the frame
|-
|/dmin bag name
|Set the name of a bag in the tab (bag can be backpack, bag1, bag2, bag3, bag4)
|-
|/dmin noclose
|Keep the frame from closing when leaving mailbox, merchant, etc.
|-
|/dmin showempty
|Show empty bag buttons when viewing ALL and bag tabs
|-
|/dmin ctab "tab name" "item name"
|Create a custom tab with the specified name and add the item to it (quotes required)
|-
|/dmin cleartab tabName
|Delete the specified custom tab
|}

  -*Note**:* Quotes are required for tab and item names.

## Preview
Spellbook:

Inventory:

## Key Features
- **Replacement Frames:** Resizable, movable, scrollable, info-rich.
- **Tabs:** Extra tabs for item types, qualities, stacks, soulbound, and custom user-defined.
- **Bag Management:** Bags can be named and have individual tabs.
- **Sorting & Stacking:** Items can be sorted by various criteria and stacked automatically.
- **Quick Drop:** Drop items anywhere to place in first available slot.
- **Compact Mode:** All-in-one style display with minimal clutter.
- **Custom Tabs:** Up to 5 user-defined, for specific items.

## Tips
  -Customizing Your Inventory & Spellbook**

- **Resizing & Moving:** Drag the frames by holding the left mouse button to position them exactly where you want.
- **Scaling:** Use <code>/dmin scale #</code> or <code>/dmsb scale #</code> commands to resize the inventory or spellbook windows for your preference.
- **Bag Naming:** Personalize your bag tabs with <code>/dmin bag name</code> for easier identification.
- **Creating Custom Tabs:** Use <code>/dmin ctab "tab name" "item name"</code> to organize specific items, making quick access easier.

  -Managing Tabs & Bags**

- **Hiding Tabs/Bags:** Use <code>/dmin tabs</code> or <code>/dmin bags</code> to toggle visibility if you want a cleaner interface.
- **Auto-Selecting Tabs:** The addon automatically updates the tab display based on your current inventory or spellbook tab.

  -Using the Drop Functionality**

- Simply drag any item into the inventory window, and it will automatically place in the first available slot, saving you time.

  -Sorting & Stacking**

- Use <code>/dmin combine</code> to merge stacks for a cleaner inventory.
- Items can be sorted dynamically by name, level, quality, or bag via the sorting options in the menu or <code>/dmin sortby [criteria]</code>.

  -Quick Access & Hotkeys**

- Assign keybindings to toggle the inventory (<code>/dmin</code>) for instant access.
- You can bind a key to toggle the spellbook as well.

  -Performance Tips**

- **Compact Mode:** Toggle to reduce clutter and improve performance if you have many items.
- **Show Empty Slots:** Use <code>/dmin showempty</code> to display empty bag slots, which can be helpful for planning inventory management.
  -Troubleshooting**
- **Frame Not Moving:** Ensure drag is enabled (<code>/dmin drag</code>), and the frame isn't locked.
- **Commands Not Responding:** Make sure you've typed commands exactly, quotes are necessary for custom tab/item commands.
- **Customization Limits:** You can create up to 5 custom tabs; delete unused ones with <code>/dmin cleartab tabname</code>.

  -Settings**

  -Saved Variables:** Your settings are saved between sessions; reset positions or settings with <code>/dmin reset</code> or <code>/dmsb reset</code>.

## Changes
  -Version 1.1**

- Updated the .toc files.
- Changed both mods to allow scaling up to 200%.
- Fixed DMIN showing tokens instead of an item's actual subtype.
- DMIN now allows up to 10 custom tabs.
- Fixed the /dmin ctab command not letting you add items to a tab if you were using all available custom tabs.
- Custom tabs no longer require you to use exact item names. You can use partial names or lua's regular expressions.
- Might have fixed an error message in DMIN when a quest item disappears and becomes another item.
- Added an Actions tab to the spellbook that shows what each action ID holds. Your actions can be drag and dropped in this window. Changing them there will, of course, change them in any action buttons that use those action IDs.
- The spellbook should now show all character macros as well as base macros.
- Fixed the data tooltip showing up on-screen. This is also fixes items not being marked as soulbound, not being recolored as unusable, and there being no soulbound & unusable tabs.
- Fixed /dmin showempty not working.
- Fixed the stack split bug when in Compact mode.
