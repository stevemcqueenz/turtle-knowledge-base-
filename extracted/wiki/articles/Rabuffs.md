---
title: "Rabuffs"
url: "https://turtle-wow.fandom.com/wiki/Rabuffs"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-28T12:51:10Z"
fetched: "2026-09-10T07:39:26Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Rabuffs

An add-on for tracking raid wide and personal buffs and weapon enchants. With a panel of clickable buttons that light up when a buff is found. Clicking the panel will buff up, which saves space from your action bars. Much of the functionality is also available in macros via the /rab and /rabq commands.

## Installation
**GitAddonsManager (Recommended)**

The easiest way to keep RABuffs up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/MarcelineVQ/Rabuffs.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>RABuffs</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Warning:**

- This version is not backwards compatible with the original - it uses a new format in the WTF file as the original was very impractical to work with. It's recommended backing up your WTF folder or SavedVariables\Rabuffs.lua in case you ever want to revert.

## Git Links
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/Rabuffs) - normal version
- [**(melbaa)**](https://github.com/melbaa/Rabuffs) - older normal version
- [**(pepopo978)**](https://github.com/pepopo978/Rabuffs) - this version is enhanced by SuperWow

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/rab show 
|Shows the UI frame.
|-
|/rab info 
|Displays texture names of the buffs and debuffs on your current target.
|-
|/rab versioncheck (raid, party, guild, PlayerName) 
|Checks RABuffs version used by the raid (default), party, guild or a specific player.
|-
|/rabq {buffquery} 
|Runs a buff query. 
|-
|/rabq 
|For specific syntax help.
|}

- Right-click RaBuffs on the Rabuff window for option to hide the Rabuff window and to configure Rabuff.
- Click on buffs like mark of the wild to automatically buff those who are missing the buff.

## Preview
Rabuff Window:

Mouseover Mark

Mouseover Mark:

## Pepo Changes
- All buffs can be toggled self only rather than having two versions
- Options for hiding in combat and hiding buffs that are active
- Reorganized all the buff menus to make it easier to find things
- Made settings window draggable
- Ability to ignore player names on specific buffs
- Better identification of buffs with the same texture/tooltip
