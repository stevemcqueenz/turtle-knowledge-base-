---
title: "XLoot"
url: "https://turtle-wow.fandom.com/wiki/XLoot"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-14T14:32:20Z"
fetched: "2026-09-10T07:40:02Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# XLoot

**XLoot** is a customizable loot frame replacement , offering enhanced visual features, flexible options, and improved loot handling.

## Installation
**GitAddonsManager**
The easiest way to keep **XLoot** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Road-block/XLoot_AddOns.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the [Release](https://github.com/Road-block/XLoot_AddOns/releases) page of the repository.
# Get the XLoot_AddOns-x.yy-11200.zip from Latest.
# Unpack the .zip and move these folders into your Interface/AddOns directory and restart the game.

- XLoot
- XLootGroup
- XLootMaster
- XLootMonitor

**Note**:

- XLootGroup, XLootMaster and XLootMonitor are optional and can be disabled or removed if their functionality is not required.
- XLoot is a requirement for any of the other plugins to function.
- XLoot will probably not play nice with other addons that modify the lootframe.

## Git Links
- [**(Road-block)**](https://github.com/Road-block/XLoot_AddOns)

## Usage
**Opening the Options Menu**
- <code>/xloot options</code> Opens the configuration menu in-game for customizing XLoot.

**Loot Frame Interaction**

- Left-click on loot items to pick them up.
- Shift + Left-click on an item to preview/equip.
- Right-click on loot items to dismiss or perform alternative actions if configured.

**Linking Loot**

- Click the **Link All** button to share loot links in chat channels.
- The addon can send loot info via chat channels like raid, party, or custom channels.

**Auto-Closing Loot Frame**

- The loot frame automatically closes when all items are looted or can be forced to close via scripts or commands.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|/xloot
|Prints help and available subcommands.
|-
|/xloot options
|Opens the configuration options menu.
|-
|/xloot advanced
|Options you may not want to mess with, but can anyway.
|-
|/xloot appearance
|Coloring, scaling, and skin of XLootFrame and each individual loot button.
|-
|/xloot behavior
|Change how XLoot behaves.
|-
|/xloot group
|A stack of frames for showing group loot information.
|-
|/xloot history
|Loot History.
|-
|/xloot lock
|[On] Makes loot frame unmoveable.
|-
|/xloot master
|XLoot Master plugin, replacement for the standard Master Looter dropdown.
|-
|/xloot monitor
|XLootMonitor plugin configuration.
|-
|/xloot profile
|[Default] Set profile for this addon.
|-
|/xloot standby
|[Active] Suspend/resume this addon.
|-
|/xloot about
|Print out addon info.
|}

## Preview
Options:

XLoot:

## Configuration Options
**Accessing Options**

- Use <code>/xloot options</code> to open the configuration menu.
- Alternatively, right-click the loot frame or use the in-game menu if integrated.

**Main Settings**

- **Lock Frame**: Locks/unlocks the loot frame position.
- **Scale**: Adjust the size of the loot frame.
- **Cursor Positioning**: Enable/disable frame positioning at cursor.
- **Collapse Loot**: Collapse multiple loot items into a single row.
- **Loot Expand**: Show detailed loot info.
- **Quality Borders & Frames**: Highlight items based on quality with colored borders and frames.
- **Auto Loot**: Enable swift/auto-looting during specific actions like fishing or container opening.

**Appearance**

- **Background & Border Colors**: Customize the frame's background and border.
- **Loot Quality Borders**: Toggle borders around loot items based on quality.
- **Highlight Loot**: Show highlight frames for high-quality loot.
- **Text Colors**: Set text colors for item names and info.

**Behavior**

- **Snap to Cursor**: Frame will appear at cursor position.
- **Smart Snap**: Frame adjusts position intelligently.
- **Link All Visibility**: When to show the link button (always, raid, party).
- **Link Threshold**: Minimum quality level for loot to be linked/shared.
- **Channel Selection**: Choose chat channels for sharing loot links.

**Advanced & Debug**

- Enable debug mode for troubleshooting.
- Force compatibility mode if encountering errors.
- Reset to default settings.

## Usage Tips
- **Positioning**: Drag the loot frame to your preferred screen location. Use <code>/xloot options</code> > **Frame** to lock/unlock.
- **Looting**: Click items directly to loot. Use shift-click for preview.
- **Linking Loot**: Use the **Link All** button to share loot in chat channels.
- **Auto Close**: The frame auto-closes when no more loot is available unless configured otherwise.
- **Swift Looting**: Enable <code>Swiftloot</code> for faster looting during container or corpse looting.

## Additional Features
- **Loot Quality Highlighting**: Items of higher quality can be highlighted with borders or frames.
- **Custom Channels**: Share loot links in custom chat channels.
- **Item Info & Tooltips**: Hover over loot items for detailed info, with options to display additional info text.
- **Collapse & Expand**: Control loot display with collapse or expand options for cleaner UI.

## Troubleshooting
- **Addon Not Displaying Properly**: Make sure all dependencies (like Ace libraries and Dewdrop) are installed.
- **Performance Issues**: Enable debug mode only for troubleshooting.
- **Compatibility Errors**: Use the <code>forcecompat</code> option in <code>/xloot options</code> if errors occur on different WoW versions.

## Frequently Asked Questions
**Q:** How do I change the loot frame position?

**A:** Drag the frame or set position via <code>/xloot options</code> > **Frame** settings.

**Q:** How do I enable or disable loot quality borders?

**A:** In the options menu, toggle **Loot Quality Border** under **Appearance**.

**Q:** How to share loot links?

**A:** Click the **Link All** button or use <code>/xloot link</code> in chat.

**Q:** How to reset settings?

**A:** Use <code>/xloot defaults</code> command or reset in the options menu.

## Support & Feedback
- For bug reports, feature requests, or translations, visit the GitHub repository.
