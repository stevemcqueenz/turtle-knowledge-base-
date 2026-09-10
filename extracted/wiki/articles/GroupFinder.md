---
title: "GroupFinder"
url: "https://turtle-wow.fandom.com/wiki/GroupFinder"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-03T08:18:19Z"
fetched: "2026-09-10T07:38:55Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# GroupFinder

This addon helps you find groups quickly without sifting through chat spam. It features a streamlined interface with customizable options to filter and display group messages, and tools to manage group invitations efficiently.

## Installation
**GitAddonsManager (Recommended)**

The easiest way to keep GroupFinder up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/redshadowz/GroupFinder.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>GroupFinder</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(redshadowz)**](https://github.com/redshadowz/Groupfinder) - this is for the latest patch, it is unstable as work is ongoing.

## **Features**
**Layout**

The addon is designed for simplicity and ease of use. The main interface is divided into four sections:

- **Top:** Chat Options
- **Under:** Group Filters
- **Middle:** Group Listings
- **Bottom:** Group Maker

**Chat Options**

- **Show groups:** Display group messages in chat.
- **Show Minimap:** Show group messages next to the minimap button.
- **Show New:** Show only new group messages (default: last 3 minutes).
- **Show Chat:** Display other messages in chat (non-group, non-trades).
- **Show Trades:** Show trade messages (WTS/WTB/LFW, etc.).
- **Show Politics:** Show political or offensive messages.
- **Show Loots:** Show loot-related messages (item rolls, money looting, grey items, greed/need rolls, experience/honor gains).

***Note**:* All blocked chat is logged.

**Filtering & Sound**

- **Auto Filter:** Show only groups near your level (default: within 6 levels).
- **Play Sound:** Play a sound when a group is found.
- **Show Dungeon/Raids/Quests/Other/LFM/LFG:** Filter groups by these categories.
- **Keywords:** Text filter for your group list. Use "/" to separate multiple keywords. The dropdown auto-populates based on your level.
- **Auto /Who:** Automatically perform '/who' commands to gather class/level info of groups/players.

**Channel & Spam Management**

- **Join World Channel:** Keep you in the World Channel.
- **Enable Error Filtering:** Block server messages related to group invites, quest sharing, and "Under Attack!"
- **Show Original Chat:** Remove chat formatting (colors, levels, layout).
- **Enable Spam Filtering:** Block repetitive spam messages.
- **Enable Auto Blacklist:** Blacklist players who spam below level 12 automatically.

**Group Maker**

Allows you to send group recruitment messages efficiently:

# Select the **Dungeon/Raid** from a dropdown.
# Choose whether you are **LFM** (Looking For More) or **LFG** (Looking For Group).
# Specify roles needed/have (tank, healer, DPS).
# Click **"Announce"** to send your message to world chat every X minutes (default: 2 minutes).

- You can customize your message in the textbox.
- Use the **"Auto"** feature to automatically adjust the message based on current group size; the message stops when the group is full.

**Whisper & Invite Tools**

Facilitates whispering and inviting players:

# Select the **Dungeon/Raid** to set level range context.
# Click **"Get Who"** to list all players of a specific class within that level range.
# Enter a message in the **Invite** textbox (defaults to the last announce message if blank).
# Click **"Invite"** to whisper players from the list.

***Note**:* Players are not messaged more than once every 15 minutes.

**Additional Notes**

- The Turtle WoW version enforces a whisper limit (~15 whispers), so be mindful when messaging multiple players.
- Shift-right-click the minimap icon to toggle a "hide everything" overlay mode for quick concealment.

## Preview
