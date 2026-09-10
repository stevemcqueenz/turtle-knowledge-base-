---
title: "ProcDoc"
url: "https://turtle-wow.fandom.com/wiki/ProcDoc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-05-10T08:34:11Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ProcDoc

-ProcDoc** is a lightweight addon that visually alerts you when your character gains an instant or free-cast buff (procs), such as Clearcasting, Shadow Trance, Overpower, etc. It provides pulsing visual cues to help you never miss a proc.

## Installation
  -GitAddonsManager**

The easiest way to keep **ProcDoc** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/thezephyrsong/ProcDoc.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>ProcDoc</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- **[(thezephyrsong)](https://github.com/thezephyrsong/ProcDoc)**

## Settings
- <code>/procdoc</code>: Open the configuration menu for visuals, sounds, and enabled procs.
- Use sliders in the options panel to adjust:
  - **Transparency:** Min/Max alpha (faint to bright).
  - **Size:** Min/Max size of pulsing textures.
  - **Pulse Speed:** How fast the pulsing animation occurs.
  - **Offsets:** Vertical (top) and horizontal (sides) alert positions.
  - **Sound:** Mute/unmute proc sounds and adjust volume.
  - **Top/Side Offset:** Fine-tune alert positions on screen.

## Preview
Options: 

## Key Features
- **Visual Alerts:** Pulsing images around or above your character for active procs.
- **Multiple Buff Support:** Supports many class-specific procs with customizable visuals.
- **Automatic Detection:** No manual setup required; detects procs automatically.
- **Configurable Appearance:** Use <code>/procdoc</code> to tweak alerts, including size, transparency, offsets, and sounds.
- **Sound Alerts:** Optional sound cues when procs occur (muted or volume adjustable).

## Supported Procs
  -Warlock**
- Shadow Trance
  -Mage**
- Clearcasting
- Netherwind Focus
- Temporal Convergence
- Flash Freeze
- Arcane Surge
  -Warrior**
- Enrage
- Overpower
- Execute
- Revenge
- Counterattack
  -Druid**
- Clearcasting
- Nature’s Grace
- Tiger’s Fury
- Astral Boon
- Natural Boon
- Arcane Eclipse
- Nature Eclipse
  -Rogue**
- Remorseless
- Riposte
- Surprise Attack
  -Shaman**
- Clearcasting
- Nature's Swiftness
- Stormstrike
- Flurry
  -Priest**
- Resurgence
- Enlightened
- Searing Light
  -Hunter**
- Quick Shots
- Counterattack
- Mongoose Bite
  -Paladin**
- Hammer of Wrath

## Adding Custom Procs
- You can add new procs or alerts by editing the addon’s <code>PROC_DATA</code> and <code>ACTION_PROCS</code> tables in the code.
- For support, contact the addon author to include new procs in updates.

## License & Credits
- Free to use, modify, and share.
- Credits: Clempton, Clumpton, Fruiter
