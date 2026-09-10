---
title: "Bagshui"
url: "https://turtle-wow.fandom.com/wiki/Bagshui"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:01:51Z"
fetched: "2026-09-10T07:38:22Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Bagshui

Bagshui automatically categorizes, sorts, and manages your bags, bank, and keyring. It offers customizable layouts, rules, and various niceties to streamline inventory management.

## Installation
  -GitAddonsManager**

The easiest way to keep **Bagshui** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Skillkrote/Bagshui.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to Bagshui, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- **[(Skillkrote)](https://github.com/Skillkrote/Bagshui)**

## Usage
- Access Settings: Right-click any Bagshui window top-left icon.
- Use <code>/bagshui</code> or <code>/bs</code> commands for quick info.
- Enable Colorblind Mode in Settings > General.
- Use the Organize button to auto-sort and fix inventory.
- Hold Alt + hover over items for cross-character counts.
- Character profiles can be customized and shared.

## Preview
## Features
- Single window for Bags, Bank, and Keyring.
- Auto-categorizing and sorting with customizable rules.
- Offline viewing of character inventories.
- Profession reagent and crafted item identification.
- Automated bag swapping and stacking.
- Selling protection for valuable items.
- Quick access buttons: Clam, Disenchant, Lockpick, Hearthstone.
- Colorblind mode and visual badges.
- Skinning options for pfUI.
- Extensive customization via rules and profiles.

## Compatibility
  -Supported:**

- Vanilla WoW 1.12
- Turtle WoW

  -Supported Addons & Integrations:**

- Blizzard UI, aux, Mail, Postal, CT_MailMod
- Cooldown counts: OmniCC, pfUI, ShaguTweaks, Turtle Dragonflight
- Interface Skins: pfUI skin
- Rule functions: Outfit() (ItemRack, Outfitter), Wishlist() (AtlasLoot)
- Turtle WoW: Guild Bank deposit, Tmog collection (requires Bagshui-Tmog)

  -Localization:**

- English (enUS)
- Chinese (zhCN)

## Core Concepts
  -Layout Hierarchy**
- **Profiles**: Define appearance and organization.
- **Structure**: Organizes how items are grouped (via Groups, Categories, Items).
- **Categories**: Basic item classifications (e.g., Quest Items, Reagents).
- **Groups**: Collections of categories, customizable per profile.
  -Customization**
- **Profiles**: Save different setups for characters or playstyles.
- **Rules**: Create dynamic item matching using functions (see below).
- **Profiles & Structure**: Manage via Inventory window or <code>/bagshui profiles</code>.

## Rule System
Rules are logical statements to categorize items dynamically. Examples:
{| class="fandom-table"
!Example
!Description
|-
|<code>Name("Bread")</code>
|Items with "Bread" in name.
|-
|<code>Type("Quest")</code>
|Items of type "Quest".
|-
|<code>Tooltip("/%+%d+ %a+ resist/")</code>
|Items with specific tooltip pattern (e.g., +12 Frost resist).
|-
|<code>Bag(1)</code>
|Items in bag 1.
|-
|<code>Quality(2,3)</code>
|Items of uncommon or rare quality.
|}

  -Note:**

- Use <code>/pattern/</code> for Lua string pattern matching.
- Use <code>and</code>, <code>or</code>, <code>not</code> for logic.
- Functions like <code>ActiveQuest()</code>, <code>ProfessionCraft()</code>, <code>MatchCategory()</code>, etc., help refine rules.

## **Customization**
  -How Items Are Assigned**

- **Rules**: Evaluate dynamically based on item properties.
- **Assignments**: Static list of item IDs/names.

  -Editing Layout**

- Enter **Edit Mode** (top-left icon or right-click blank area).
- Rearrange Groups/Categories by drag-and-drop.
- Add new Groups or Categories via right-click menus.
- Assign items by Alt+click or right-click context menu.

  -Customization Tips**

- Create custom Categories to override built-in ones.
- Set Sequence numbers for evaluation order.
- Use custom colors, badges, and hide/show options.

## Profiles & Design
- **Profiles**: Save layout and appearance configs.
- **Design**: Visual settings (colors, badges, sizes).
- **Structure**: How items are organized (Groups, Categories, Items).

  -Switching Layouts**

- Use Profiles menu.
- Create duplicates or reset to default.

## Advanced Features
  -Automated Bag Swapping**

- Automatically swap bags when replacing full bags (requires sufficient free space).

  -Cross-Account Item Counts**

- Hover with Alt to see counts across characters.
- Limited by WoW API; out-of-game solutions may be required for full sync.

  -Import/Export**

- Share Profiles, Categories, Sort Orders via <code>/bagshui share</code> or menu.
- Import data from shared exports.

  -Command Line / Slash Commands**

- <code>/bagshui</code> or <code>/bs</code> for commands.
- <code>/bagshui info <itemId></code> to get detailed item info.

## Troubleshooting
- For layout issues, reset window positions with <code>/bagshui reset</code>.
- Use Organize button to auto-sort.
- Enable Colorblind Mode for better visibility.
- Update Profiles to match new features or layouts.
