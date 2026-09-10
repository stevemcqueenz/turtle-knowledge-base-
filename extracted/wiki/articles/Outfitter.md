---
title: "Outfitter"
url: "https://turtle-wow.fandom.com/wiki/Outfitter"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-04T06:32:58Z"
fetched: "2026-09-10T07:39:23Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Outfitter

Outfitter is designed to help you manage your gear and quickly swap between different sets of equipment.

## Installation
**GitAddonsManager (Recommended)**

The easiest way to keep Outfitter up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/sica42/Outfitter.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to Outfitter, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Optional**: [FuBar Plugin](https://github.com/Voidmenull/FuBar_OutfitterFu) for Outfitter.

## Git Links
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/Outfitter)
- [**(pepopo978)**](https://github.com/pepopo978/Outfitter)
- [**(sica42)**](https://github.com/sica42/Outfitter)

## Accessing Outfitter
To open the Outfitter interface:

# Open your character window (default key: c).
# Click the button with a robe icon located in the top right corner of the character window.

## Outfit Categories
Outfitter organizes your gear sets into distinct categories and automatically creates several pre-configured outfits upon first use.

- **Complete Wardrobes:** These outfits contain an item for every equipment slot. Equipping a Complete Wardrobe will replace any other outfits you are currently wearing.
  - **Normal:** Created based on the gear you were wearing when Outfitter was first run.
  - **Birthday Suit:** A naked outfit that removes all equipped gear.
- **Mix-n-match:** Partial outfits designed to be layered over a Complete Wardrobe. Selecting a Mix-n-match outfit replaces all other outfits except the selected Complete Wardrobe, which serves as a base. Examples include resistance gear sets. Outfitter attempts to create these automatically if you possess relevant gear.
- **Accessories:** Partial outfits that can be freely combined with other outfits. Use these for equipping specific items like tradeskill tools, utility items, fishing poles, etc. Outfitter searches your bags for common tradeskill items and creates Accessory outfits for them automatically.
- **Special Occasion:** Outfits that are automatically equipped based on specific in-game events, zones, or character states. These can be temporarily disabled using the menu next to the outfit name.
  - **Argent Dawn:** Equipped when you are in the Plaguelands, Scholomance, or Stratholme. Automatically includes your Argent Dawn trinket if you have one.
  - **Riding:** Equipped when you mount up. Automatically includes items like [Carrot on a Stick](Carrot on a Stick), boots with [Mithril Spurs](Mithril Spurs), and gloves with the Riding Skill enchantment if you possess them. By default, this outfit is disabled in battlegrounds.
  - **Dining:** Equipped when you begin eating or drinking. Initially transparent, it can be customized with items that boost [Spirit](Spirit) or health/mana regeneration to reduce downtime. Care should be taken not to include items that significantly reduce [Stamina](Stamina) or [Intellect](Intellect).
  - **Battlegrounds:** Equipped when you enter one of the three battlegrounds, useful for automatically equipping PvP gear.
  - **Class-Specific:** Outfits for specific class forms or stances (e.g., Priest: Shadowform, Rogue: Stealth, Warrior: Stances, Druid: Shapeshift Forms). These are transparent by default and have no effect until customized.

## Creating an Outfit
# Click the **New Outfit** button at the bottom of the Outfitter window.
# In the New Outfit window, enter a name for your new outfit.
# Choose how to initially set up the outfit from the **Optimize** menu:
- **Use Current Outfit:** Creates a Complete Wardrobe based on the items you currently have equipped.
- **Create Empty Outfit:** Creates an outfit with no slots enabled.
- **Optimize for [Attribute]:** Outfitter will scan your inventory and bags to generate an outfit that maximizes the selected attribute (e.g., [Stamina](Stamina), [Nature Resistance](Nature Resistance), Spell Damage). Slots without items contributing to the chosen attribute will not be enabled in the new outfit.

## Updating an Outfit
# Open Outfitter and select the outfit you wish to modify from your list.
# The selected outfit will be equipped, and its enabled slots will have checkmarks.
# Equip an item (by dragging from your bags or using QuickSlots) to add it to the selected outfit.
# Uncheck the box next to a slot to remove the item from that outfit.
# Use the **Enable all** and **Enable none** buttons at the top of the character window for quick management of all slots.

## Minimap Button
Outfitter provides a button on your minimap for quick access. It is initially located at the center left of your minimap.

- **Repositioning:** You can drag the minimap button to any desired location. This position will be saved between game sessions.
- **Accessing the Menu:** Click the button to open the Outfitter minimap menu. From here, you can open the main Outfitter UI or quickly select an outfit to wear.
- **Hiding the Button:** You can disable the minimap button entirely via the Outfitter Options panel.

## QuickSlots
QuickSlots are automatically added to your character window for each equipment slot, providing a convenient way to access relevant items.

- **Accessing QuickSlots:** Click an item slot in your character window.
- **Functionality:** A row of inventory slots will appear, displaying all items in your bags (and bank, when the bank window is open) that can be equipped in that slot. An empty slot is also included, allowing you to quickly unequip the item from that slot.

## Commands
You can use the following slash commands in macros or the chat window:

- **/outfitter wear outfitname**: Equips the outfit named "outfitname".
- **/outfitter unwear outfitname**: Unequips the outfit named "outfitname".
- **/outfitter toggle outfitname**: Toggles the outfit named "outfitname" (equips it if it's not currently worn, unequips it if it is).
- **/outfitter summary**: Displays a summary of the current stats.

## Key Bindings
You can assign up to 10 specific outfits to key bindings for rapid equipping or unequipping.

# Use the menu next to an outfit in the Outfitter UI to select one of the 10 available key binding slots you wish to assign it to.
# Open World of Warcraft's Key Binding settings (default key: Escape -> Key Bindings).
# Scroll down to the **Outfitter** section. Here you will see the 10 key binding slots listed, allowing you to assign a desired key combination to each.

## Preview
## Known Issues
- Activating an outfit while an item is held on the cursor (e.g., dragging from a bag) may cause the outfit to fail to equip correctly.
- Optimizing for +Healing may sometimes select gear with lower overall damage+healing stats compared to gear with only +Healing.
- Generating an outfit will not find items located in the main bank slots (**Note:** This issue was fixed in v1.4b5).

## History
This section lists significant features and fixes introduced in various versions of Outfitter.

**Version 2.0**
- Outfit analyzer displays complete statistics for the current outfit.
- Generate outfits to maximize TankPoints and HealPoints.
- Unequipping items attempts to return them to their original bag.
- Dining outfit automatically unequips when health and mana reach 100%.
- Enhanced tooltips in the character window explaining how each stat affects other attributes.
- Added Mage Evocate and Hunter aspects Special Occasion outfits.
- Create custom Special Occasion outfits for particular zones/areas.
- Scriptable special occasion outfits with custom event triggers and code.
- Shows info in item tooltips stating whether that item would be an upgrade for you.
- Show info in item tooltips listing the outfits in which the item is used.
- Ability to update an outfit with the currently equipped items.

**Version 1.4**
- Special Occasion outfit added for Mages when evocating.
- Special Occasion outfits added for the various hunter aspects.
- Battleground and Around Town outfits now have German translations.
- Eastern and Western Plaguelands are correctly identified by German versions.
- Titan and FuBar menus will now update when renaming an outfit.
- Multipart enchants are supported (ie, Zul'Gurub).
- Korean language support.

**Version 1.4b5**
- Generating an outfit now properly recognizes items in the main bank slots.
- Added Korean translation.

**Version 1.4b4**
- Arclight Spanner is no longer counted as an unused item.
- Added Small Soul Pouch (12 slot shard bag).
- Ammo slot now ignores unequipping ammo.
- Multipart enchants are supported (ie, Zul'Gurub).
- Health regen items of the form "xx health per 5 sec." are supported.

**Version 1.4b3**
- Fixed outfit optimization bug so that 2H weapons are compared correctly to 1H/OH combinations.
- Fixed shapeshift/stance detection for patch 1.12.
- Fixed Priest: Shadowform.

**Version 1.4b2**
- Changed cloak to low priority when unequipping since it doesn't have durability.
- Fixed inventory caching bug (sometimes caused current outfit to appear as "Custom").

**Version 1.3.3**
- Added a spaz filter to prevent outfits from toggling repeatedly if the user spams a key binding.
- Added an on-screen message when changing outfits using a key binding.
- Removed Repair Bags feature.
- Added Naxxramas to the Argent Dawn zone list.
- Corrected plaguelands zone names for German clients.

**Version 1.3.2**
- Patch 1.11 compatibility.
- Added ability to deposit only the unique items in an outfit to the bank.
- Improved QuickSlot support for ammo slot.
- Mining pick, skinning knife, blacksmith hammer, twilight cultist pieces and other items are now excluded from being displayed in the unused items list.
- Dining outfit now automatically unequips once health and mana reach 99%.
- Fixed initialization so that Argent Dawn, Riding, Fishing etc. outfits are automatically set up again.
- Added ability to recover from outfit stack corruption errors.

**Version 1.3.1**
- Selected items are no longer accidentally updated if another outfit with overlapping items is deposited to the bank.
- Outfit status is now correctly updated after depositing, withdrawing, opening or closing the bank window.
- Battleground-specific outfits are now given priority over the general Battleground outfit when there is overlap.
- Minimap and Titan outfit menus will now update if they're open during an outfit change.
- Removed ammo items from the Unused Items list.
- Identical items which are both used in an outfit will no longer list one of those items as being unused.

**Version 1.3**
- Repair All button for repairing everything including items in backpacks.
- Show and hide helm and cloak settings are saved with each helm and cloak.
- Ammo slot is now supported in outfits.
- Improved performance.
- Enabled outfit changes when hunters are feigning death.
- Titan Outfitter displays the name of the most recently equipped outfit.

**Version 1.2**
- Added Around Town outfit which is equipped automatically in friendly cities.
- Added Shaman: Ghost Wolf outfit.
- Added battleground-specific outfits for AB, AV, WSG.
- Added Chance to Hit with Spells outfit generation.
- Gave priority to Rune and Seal of the Dawn.
- Modified stat parsing to ignore set bonuses when generating outfits.
- Modified minimap outfit menu to only list outfits which actually contain items.
- Odds 'n Ends (unused items) now show icons and color-coded names.

**Version 1.1**
- Better performance when changing outfits and generating smart outfits.
- Supports identical items which only differ by their enchantments.
- Outfits with missing items are displayed in red and the missing items for that outfit are listed in the tooltip.
- New category, Odds 'n ends, lists all equipable items not part of any outfit.
- New support for banked items when the bank window is opened:
  - QuickSlots include banked items.
  - Outfits with banked items are displayed in blue with a tooltip listing banked items.
  - Items for an outfit can be moved directly to or from the bank.
  - Outfits can be equipped directly from the bank.
- Generated outfits take contributions from other item stats into account (Agility, Stamina, Intellect, Spirit, Strength).
- Support for minimaps which have been repositioned.
- Improved support for complex item swaps for weapon, trinket and ring slots.
- Rings, trinkets, and weapons calculated correctly when generating outfits.
- On-equip category-specific spell damage supported.
- Titan Panel support.
