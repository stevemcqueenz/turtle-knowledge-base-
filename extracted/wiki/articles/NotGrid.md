---
title: "NotGrid"
url: "https://turtle-wow.fandom.com/wiki/NotGrid"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T12:56:19Z"
fetched: "2026-09-10T07:39:21Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# NotGrid

NotGrid is a party and raid frame addon inspired by Grid, designed for Vanilla WoW (1.12.1). It provides customizable unit frames with features suited for healing and raid management, supporting click-casting, macros, proximity checks, and more.

## Installation
**GitAddonsManager (Recommended)**

The easiest way to keep **Notgrid** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/KameleonUK/NotGrid.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>notgrid</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Optional**:

- **[Clique](Clique):** Enables click-casting.
- **[LazySpell](LazySpell):** Automates spell rank selection based on unit health.

## Git links
- [**(gnwl)**](https://github.com/gnwl/NotGrid) - normal version
- [**(KameleonUK)**](https://github.com/KameleonUK/NotGrid)
- [**(wormuz)**](https://github.com/wormuz/NotGrid) - updated for UnitXP_SP3 users

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/notgrid</code> or <code>/ng</code>
|Opens the configuration menu for quick adjustments.
|-
|<code>/notgrid grid</code>
|Applies a style similar to the original Grid layout.
|-
|<code>/notgrid reset</code>
|Restores all settings to default values.
|-
|<code>/ngcast spellname(Rank X)</code>
|Casts a spell via mouseover macro on the unit under cursor. Example: <code>/ngcast Renew(Rank 4)</code>
|}

Use / for separating multiple Buffs/Debuffs to track on one icon.

I use invert bottom right icon to keep track of who is missing Fortitude in raid:

## Setup & Configuration
**Accessing the Config Menu**
- Use <code>/notgrid</code> or <code>/ng</code> to open the menu.
- Use <code>/notgrid grid</code> to apply a grid style.
- Use <code>/notgrid reset</code> to restore defaults.
**UI Scaling**

If you're having issues with the frame borders/edges being un-uniformly sized or appearing clipped by the healthbar make sure to have a proper [UI scale](http://wow.gamepedia.com/UI_Scale) set. 

**Set UI scale:** 

- <code>/console UIScale <value></code>    

**Recommended Formula:**

- <code>UIScale = 768 / verticalResolution</code>

**Examples for common resolutions:**
{| class="fandom-table"
!Resolution
!Command
!Explanation
|-
|1280x1024
|<code>/console UIScale 0.75</code>
|Matches a 1024 pixel height (768/1024 ≈ 0.75).
|-
|1600x900
|<code>/console UIScale 0.853</code>
|For 900 height (768/900 ≈ 0.853).
|-
|1920x1080
|/console UIScale 0.7111
|Full HD 1080p resolution
|-
|1920x1200
|<code>/console UIScale 0.64</code>
|Minimum UI scale (for 1200 height) to avoid glitches.
|-
|2560x1440
|<code>/console UIScale 0.533</code>
|For 1440 height (768/1440).
|-
|3840x2160
|<code>/console UIScale 0.355</code>
|For 2160 height (4K resolution).
|}

For resolutions above **1920x1200** you  may need to manually set the scale using:

- <code>/run UIParent:SetScale(0.533)</code>

Note that this setting isn't saved across reloads, so you'd need an addon or macro to set it each time.

**Customizing Frames**
- Use the configuration menu to resize, recolor, and reposition frames.
- Adjust the appearance of borders, health/power bars, icons, and texts.
- Enable/disable features like pet frames, aura icons, healing bars, etc.

## Preview
Notgrid:

Options:

## Features Explained
**Frame Customization**
- Resize units (<code>Unit Width</code>, <code>Unit Height</code>)
- Change border style (<code>Border Artwork</code>, <code>Unit Border</code>)
- Position health/power bars (<code>Power Position</code>, <code>Health Orientation</code>)
- Set colors for class, pet, or custom colors.
**Icon Tracking**
- Track specific buffs/debuffs via the <code>tracking icons</code> listed in options.
- Show/hide icons based on buff/debuff presence.
- Invert icons to hide when aura is present (useful for buffing the raid).
**Proximity & Range**
- **Map-based:** Uses map regions for distance estimation.
- **Spell-based:** Detects 40-yard spells to check if units are in range.
- **Map size data:** Comes with default values for Azeroth and other regions.
**Warnings & Alerts**
- **Aggro:** Highlights frames with threat.
- **Low Mana:** Changes border color if mana drops below threshold.
- **Target Highlight:** Highlights your current target.
**Macros & Click Casting**
- Use <code>/ngcast</code> for mouseover spell casts.
- Supports macros with consideration for spell ranks.

## Contributors
- [gnwl](https://github.com/gnwl) (author)
- [shikulja](https://github.com/shikulja) (Russian localization)
