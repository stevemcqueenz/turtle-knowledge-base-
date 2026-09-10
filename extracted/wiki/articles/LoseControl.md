---
title: "LoseControl"
url: "https://turtle-wow.fandom.com/wiki/LoseControl"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-10-12T16:06:42Z"
fetched: "2026-09-10T07:39:09Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# LoseControl

LoseControl helps you track and display crowd control (CC) effects on your character. It visually shows the duration of CC spells and can announce when you're sapped or CC'ed, making it easier to react during PvP or challenging encounters.

## Installation
  -GitAddonsManager**

The easiest way to keep **LoseControl** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/xVitali2/Addons-for-Vanilla-1.12.1/tree/bc17245418db266ccc9fee9f4165d02f99adfdf9/LoseControl
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move the LoseControl folder into your <code>Interface/AddOns</code> directory 
# Restart the game.

## Git Links
- **[(xVitali2)](https://github.com/xVitali2/Addons-for-Vanilla-1.12.1/tree/bc17245418db266ccc9fee9f4165d02f99adfdf9/LoseControl)**

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/saysapped</code>
|Toggle chat notifications when you are sapped or CC'ed
|-
|<code>/ssap</code>
|Short command for toggling the chat notification feature
|-
|<code>/losecontrol unlock</code>
|Unlock the icon for right-click dragging to reposition it
|-
|<code>/losecontrol lock</code>
|Lock the icon in place
|-
|<code>/losecontrol size x</code>
|Set the icon size to <code>x</code> (range 10-50)
|}

## Preview
CC Animation:

CC Timer:

## Key Features
- Visual icon on your screen displaying current CC effects.
- Priority-based tracking of most impactful CCs.
- Optional chat notifications when sapped or CC'ed.
- Customizable icon size and position via slash commands.

## Spells Tracked
The addon includes a comprehensive list of crowd control spells from various classes such as:

- Druid (Hibernate, Bash, Feral Charge)
- Hunter (Freezing Trap, Scatter Shot)
- Mage (Polymorph, Frost Nova)
- Paladin (Hammer of Justice, Repentance)
- Priest (Mind Control, Psychic Scream)
- Rogue (Sap, Gouge, Kidney Shot)
- Warlock (Fear, Seduction)
- Warrior (Charge Stun, Intimidating Shout)
- And many others (see full spell list in the addon code)
