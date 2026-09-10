---
title: "Moosnuckel's Sunderarmor"
url: "https://turtle-wow.fandom.com/wiki/Moosnuckel%27s_Sunderarmor"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-29T04:19:25Z"
fetched: "2026-09-10T07:39:17Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Moosnuckel's Sunderarmor

Moosnuckel's (the best tauren warrior) fork of sunderarmor (ref: [Sunderarmor](https://github.com/melbaa/sunderarmor)) that adds many quality of life features

## Installation
**GitAddonsManager**

The easiest way to keep Moosnuckel's **sunderarmor** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/gutterrotisaseriousissue-cyber/sunderarmor.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to Atlas, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git links
- **[(Moosnuckel's Sunderarmor)](https://github.com/gutterrotisaseriousissue-cyber/sunderarmor.git)**

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/tankmode</code>
/sunder tank
|Toggles between dps & tank mode (prevents spam)
|-
|<code>/sundercounts</code>
|Prints how many sunders people did
|-
|/sunderreset
|Resets the counts you have collected
|-
|<code>/sunder</code>
<code>/sundertoggle</code>
|Both will disable the addon until reenabled (default on with non-warrior classes)
|}

## Preview
## Features
Features & Usage Tips

**Smart Notification**

***"Start Sunder" (Green)*:** Reminds you to apply Sunder Armor when you target a new enemy and enter combat with them.

***"Stop Sunder" (Red)*:** Alerts you immediately when the target reaches the maximum 5 stacks so you don't waste rage.

***"Maintenance" (Yellow)*:** Confirms when you successfully refresh the timer on a fully stacked target.

***"Sunder Soon" Warning*:** Warns you when the Sunder debuff is about to expire (5 seconds remaining) so you don't lose the stack.

**Accurate Tracking**

**Real-Time Stack Counts:** Displays current stack numbers in your chat window as they apply

**Smart Accuracy:** Automatically ignores Misses, Dodges, Parries, and Blocks so your count is always correct.

**Lag Protection:** Prevents double-counting or skipping numbers if the server is lagging.

**Modes & Automation**

**Raid Sync:** Automatically shares data with other warriors in your party or raid who have the addon, keeping everyone's count synchronized.

**Tank Mode:** Allows Main Tanks to spam Sunder freely without flooding the data for other warriors.

**Auto-Disable:** The addon automatically turns itself off if you log in on a class other than a Warrior.

## Contributors
shagu/pfui

melbaa for the original branch.

Moosnuckel (best tauren warrior)
