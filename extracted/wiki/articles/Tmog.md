---
title: "Tmog"
url: "https://turtle-wow.fandom.com/wiki/Tmog"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-16T18:36:31Z"
fetched: "2026-09-10T07:39:52Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Tmog

Tmog add detailed information about your transmog collection. It displays appearance info on item tooltips, provides an Item Browser to search and try on all game items, and allows outfit management.

## Installation
  -GitAddonsManager**

The easiest way to keep **Tmog** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Otari98/Tmog.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to Tmog, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(Otari98)**](https://github.com/Otari98/Tmog)

## Initial Setup
- When using the addon for the first time:
  - Visit the **Fashionista NPC** in Stormwind or Orgrimmar.
  - For each item slot, click once.
  - For weapons:
  -* Equip any item of each type you own (dagger, polearm, staff, sword, axe, mace, etc.).
  -* Talk to the NPC, click on the respective slot, and equip the item.
  -* Repeat for all weapon types you have.
  - For armor:
  -* Equip an item, and click once to cache.
- Your collection is now cached. 
  -*Note**:* If you have multiple items with the same appearance, equip each to ensure proper recognition.

## Slash Commands
- <code>/tmog show</code> — Toggle the Tmog window.
- <code>/tmog reset</code> — Reset the position of the addon button.
- <code>/tmog wipe</code> — Reset this character's collection.
- <code>/tmog lock</code> — Lock or unlock the button's position.
- <code>/tmog debug</code> — Toggle debug messages.
- <code>/tmog repair</code> — Attempt to repair your cache.

## Preview
## Features
  -Main Window**
- **Toggle Window:** <code>/tmog show</code>
- **Search & Browse Items:** Use the item browser to search all items, try on gear, or create outfits.
- **Outfit Management:** Save, load, delete, and share outfits.
  -Outfit Management**
- **Create New Outfit:** Use the outfit popup to name and save your current gear.
- **Apply Outfit:** Select from saved outfits to dress your character.
- **Share & Import:** Generate code for sharing outfits, or import codes to load others' outfits.
  -Item Browser**
- Search by item name or browse by category/type.
- Preview items on a dressing room model.
- Equip items directly from the browser.
- View collection status via tooltips (collected or not).
  -Tooltips**
- Hover over items to see:
  - Name, quality, ItemID.
  - Collection status (collected/not).
  - Shares appearance info with similar items.
  -Additional Options**
- Filter by collected/not collected.
- Show only usable items.
- Ignore level restrictions.

## Known Issues
- Some items may show as not collected but are equipped without alerts.
- Tooltips may display inaccuracies—report bugs.
- The addon is a work in progress; expect bugs.

## Credits
- [Shagu](https://github.com/shagu)
- [Zaas](https://github.com/Zebouski)
- [CosminPOP](https://github.com/CosminPOP)

Special thanks to the community for feedback and bug reports.
