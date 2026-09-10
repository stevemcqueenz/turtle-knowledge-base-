---
title: "UberBanish"
url: "https://turtle-wow.fandom.com/wiki/UberBanish"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-17T12:29:10Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# UberBanish

**UberBanish** is designed to improve Banish management during raids and parties. It provides real-time timers, alerts, and communication features to coordinate Banishes effectively.

## Installation
**GitAddonsManager**

The easiest way to keep **UberBanish** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://gitlab.com/Artur91425/UberBanish.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the UberBanish-master folder to UberBanish
# Restart the game

## Git Links
- [**(Artur91425)**](https://gitlab.com/Artur91425/UberBanish)

## Usage
**Basic Controls:**

- **Left-Click on the Banish Button:** Cast Banish (Rank 2)
- **Right-Click on the Banish Button:** Cast Banish (Rank 1)
- **Shift + Drag the Banish Button:** Move the button on-screen
- **Left-Click on the Minimap Button**: Hide / show the Banish Button.

**Configuration Options:**

Access the configuration window by right-clicking the minimap button.

- Enable/Disable addon
- Debugging messages
- Announcements (Say, Party, Raid)
- Warnings for early breaks
- Notifications on Warlock deaths
- Sound alerts and warning timings

## Preview
Configuration:

Banish Button:

## Key Features
Key Features & How to Use:

- **Automatic Timer:** When you cast Banish, a timer appears counting down. Alerts can notify you at 20s, 10s, 5s, and 1s remaining.
- **Early Break Detection:** If Banish is broken early, a warning message appears and a sound is played.
- **Rebanish on Break:** Clicking the warning message will reapply Banish.
- **Death Alerts:** If you die during Banish, other Warlocks will receive a message. Clicking it will target the dead Warlock's previous target.
- **Communication:** Alerts are sent via whispers or raid/party chat, configurable in settings.

## Information
In the addon, there are two variants for detecting Banish:

# **Correct**. The timer is activated at the event CHAT_MSG_SPELL_PERIODIC_CREATURE_DAMAGE.
# **Incorrect**. If the above event does not work, then the timer is activated at the SPELLCAST_STOP event, which is not very reliable. In this case, the Banish button with the timer will be pulsed.

**Note**: For reasons unknown to me, all events for a unit do not work if the unit on which event, is at a great distance (about 28-30 yards) from the player. In other words, if the player will cast Banish at the maximum available distance, then the events for the 1 detection variant may not work, but for 2 will work as SPELLCAST_STOP only works for the player.
