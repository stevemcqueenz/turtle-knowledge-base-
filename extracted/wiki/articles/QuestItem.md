---
title: "QuestItem"
url: "https://turtle-wow.fandom.com/wiki/QuestItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-28T14:46:43Z"
fetched: "2026-09-10T07:39:26Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# QuestItem

QuestItem helps you identify which quest a specific item belongs to, whether you've picked it up before or after installing the addon. It displays quest names, statuses, and item counts in tooltips and the item list, making it safer to destroy quest items once you're done.

## Installation
  -GitAddonsManager**

The easiest way to keep **QuestItem** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/wow-vanilla-addons/QuestItem.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>QuestItem</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

  -Optional**: [QuestHistory](https://github.com/GrenderG/QuestHistory)

## Git Links
- [**(wow-vanilla-addons)**](https://github.com/wow-vanilla-addons/QuestItem)

## Usage
  -Access Configuration:**

- <code>/questitem</code> or <code>/qi</code> in chat to open the addon configuration menu.

  -Manual Item Mapping:**

- Shift + Right Click on an item in the list to manually set or change the quest association.

  -Change Quest Status:**

- Alt + Left Click on an item in the list to cycle through quest statuses (active, complete, abandoned).

  -Tooltip Display Settings:**

- Enable/disable in the configuration menu whether quest info appears in item tooltips.
- Choose to show/hide item counts in tooltips and list.

  -Sorting & Display:**

- Items can be sorted in the list.
- Optionally display only items relevant to the current character.
- Show/hide counts and total counts for items.

## Preview
Option:

Tooltip:

QuestItem:

## Key Features:
- Automatically identifies quest items upon pickup.
- Shows quest name, status (active, complete, abandoned) in tooltips.
- Tracks items for each character separately.
- Displays how many items are needed and how many you currently have.
- Manual mapping of unidentified items via right-click.
- Change quest status directly from the item list (Alt + Left Click).
- Configuration options for display and behavior.
