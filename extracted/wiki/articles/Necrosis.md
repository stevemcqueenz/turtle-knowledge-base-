---
title: "Necrosis"
url: "https://turtle-wow.fandom.com/wiki/Necrosis"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-21T02:54:49Z"
fetched: "2026-09-10T07:39:19Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Necrosis

-Necrosis** is a mod designed to assist Warlocks in managing their soul shards, stones, and demons. While it can't brew coffee, it's an invaluable tool for Warlocks!

## Installation
  -GitAddonsManager**

The easiest way to keep **Necrosis** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/T321us/necrosis-twow.git
# **Select the Branch:** Ensure that the main branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the necrosis-twow-main folder to necrosis
# Restart the game

## Git Links
- [**(T321us)**](https://github.com/T321us/necrosis-twow)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/necro</code>
|Opens the options window.
|-
|<code>/necrosis recall</code>
|Resets button positions to the center of the screen.
|-
|<code>/necrosis sm</code>
|Toggles short messages on or off for notifications.
|-
|<code>/necrosis cast [spell]</code>
|Casts the specified spell if available.
|-
|<code>/necrosis help</code>
|Displays help messages regarding the usage of Necrosis.
|}

## Usage
Operating Necrosis is straightforward. It features a sphere and seven buttons:

- **Sphere:** Displays the number of soul shards you have.
- **Create/Equip Fire Stone:** A button for fire stone management.
- **Create/Equip/Use Spellstone:**
  - Right-click to create or equip.
  - Left-click to create or use.
- **Create/Use/Give Healthstone:**
  - No target or an enemy target: Use the stone.
  - Friendly player target: Give the stone.
- **Create/Use Soulstone:**
  - Use on a friendly player: Apply the stone.
  - Use on yourself: Apply the stone.
- **Summon Steed:** A button to summon your mount.
- **Demon Menu:** Access and summon your demons, including Fel Domination.
- **Spell Timers:** Displays timers for your spells to the right of this button.
  - Right-click to use your Hearthstone.

## Features
  -Button Customization:**

- Move buttons for soul shards, spells, and demon menus around the screen.

- **Configuration Options**:
  - **Locking Icons**: Prevent icons from moving to avoid accidental misplacement.
  - **Soul Shard Management**:
  -* Sort and destroy soul shards.

  -Alerts:**

- Toggle alerts for Shadow Trance and Anti-Fear spells.

- **Spell Timers**: Display timers for ongoing spells.
- **Graphical Interface**: Configurable options for graphical enhancements, including button scaling, rotation, and colors.

  -Menu Management:**

- Customize the display of buff, pet, and curse menus.
- Control showing or hiding various stones (e.g., Firestone, Felstone, etc.).

  -Click Functions**
- **Necrosis Button**: Main button for accessing all Warlock functionalities.
- **Spell Timer Button**: Click to show spell cooldown timers.
- **Shadow Trance Button**: Click to toggle visibility/activation of Shadow Trance effects.
- **Anti-Fear Button**: Click to manage Anti-Fear effects and visibility.
- **Buff Menu Button**: Click to open/close the buff menu.
- **Pet Menu Button**: Click to manage and summon pets.
- **Curse Menu Button**: Click to access curse spells.

  -Additional Miscellaneous Functions**

  -Slider Adjustments:** Adjust settings using sliders for:

- Rotation and scale of buttons.
- Timer display positions and types.

- **Tooltip Management**: Controls the display of tooltips for timers and buttons.

## Preview
Necrosis:

Option:

## Changelog
Here are some notable changes from previous versions:

- Updated Spell Cooldowns
- Allow Infernal and Demonic Stones in Soul Shard bags
- Removed non-castable spells
- Removed mana check on Demonic Sac ([RuskeMiahahn](https://github.com/RuskeMiahahn/necrosis-twow))
- Added missing Stone buffs
- Updated shard counting ([pylebec](https://github.com/pylebecq/necrosis-twow))
- Fel Domination CD tracking ([pylebec](https://github.com/pylebecq/necrosis-twow))
- Removed init dialog options ([BlackHobbiT](https://github.com/BlackHobbiT/necrosis-twow))

  -1.5.2a**

- TOC updated for compatibility.
- Fixed an Epic Steed bug for the French client.
- Now operates correctly during duels.
- Middle-clicking on the curse menu now attempts to recast the curse with the intended amplification.
- Keybinds added for Banish, Life Tap, and recasting curses.

  -1.5.2**

- Added Demonic Sacrifice and keybind for Shadow Ward.
- Corrected localization errors in French and German.
- Improved curse menu behavior, allowing for amplified casting and targeted assistance before casting.
- Soulshard sorting is now disabled by default to prevent issues.

  -1.5.1**

- Visual enhancements for timers with better performance.
- New features such as the addition of Exhaustion Curse and Amplify Curse.

  -1.5**

- Major timer rework for reduced lag.
- New configurations for summons that include talking when summoning demons.
