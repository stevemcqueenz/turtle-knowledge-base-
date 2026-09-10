---
title: "CooldownTimers"
url: "https://turtle-wow.fandom.com/wiki/CooldownTimers"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-26T14:46:24Z"
fetched: "2026-09-10T07:38:32Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# CooldownTimers

CooldownTimers (CDT) creates customizable bars that count down the remaining time until a spell, item, or ability cooldown finishes. It helps you track important cooldowns easily during gameplay.

## Installation
**GitAddonsManager**

The easiest way to keep **CooldownTimers** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Road-block/CooldownTimers.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to CooldownTimers, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(Road-block)**](https://github.com/Road-block/CooldownTimers)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/cdt on</code>
|Enable the cooldown bars.
|-
|<code>/cdt off</code>
|Disable the cooldown bars.
|-
|<code>/cdt menu</code>
|Show the configuration/options menu.
|-
|<code>/cdt unlock</code>
|Unlock bars for repositioning.
|-
|<code>/cdt lock</code>
|Lock bars in place.
|-
|<code>/cdt report</code>
|Toggle cooldown reporting to party/raid.
|-
|<code>/cdt report <channel></code>
|Set report channel (<code>party</code>, <code>say</code>, <code>guild</code>, <code>yell</code>, <code>select</code>).
|-
|<nowiki>/cdt style <minutes|seconds></nowiki>
|Changes the display style of the countdown (either minutes or seconds).
|-
|<code>/cdt groups</code>
|Manage cooldown groups (create, delete, assign).
|}

## Preview
Options:

Timer:

Alert:

## Configuration
Access the options menu with <code>/cdt menu</code>. Here you can:

- Change textures, colors, and bar sizes.
- Adjust how many columns and spacing.
- Enable or disable icons, text, and time display.
- Set alert sounds and behaviors.
- Manage groups for organizing cooldowns.

## Features
- **Configurable Bars:** Adjust position, size, scale, colors, and textures.
- **Cooldown Detection:** Tracks spell, item, pet, and special abilities cooldowns.
- **Grouping:** Organize cooldowns into groups for easier management.
- **Reporting:** Send cooldown status messages to chat channels.
- **Visual Customization:** Change bar textures, colors, and display styles.
- **Alerts & Sounds:** Notifications when cooldowns finish.

## Localization
The addon supports multiple languages, including English, German, French, and more. The labels and messages adapt based on your game locale.
