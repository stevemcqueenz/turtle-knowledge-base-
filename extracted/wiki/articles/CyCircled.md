---
title: "CyCircled"
url: "https://turtle-wow.fandom.com/wiki/CyCircled"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-14T11:47:52Z"
fetched: "2026-09-10T07:38:35Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# CyCircled

cyCircled provides round, textured skins for action buttons used by various addons. It allows users to customize the appearance of their action buttons with different skins, colors, and overlays.

## Installation
**GitAddonsManager**

The easiest way to keep **cyCircled** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/M0kh/cyCircled.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a .zip.
# Unpack the .zip and rename the folder to cyCircled, removing the -master suffix.
# Move the folder into your Interface/AddOns directory and restart the game.

## Git Links
- [**(M0kh)**](https://github.com/M0kh/cyCircled)
- [**(retrospectx)**](https://github.com/retrospectx/cyCircled)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|/cc
|Print commands for cyCircled
|-
|/cc colors
|Change the ring color
|-
|/cc elements
|Toggle skin elements on/off
|-
|/cc skins
|Change the skin (e.g., Serenity)
|-
|/cc detach tooltip
|Detach tooltip from the panel (Off to attach)
|-
|/cc lock tooltip
|Lock or unlock the tooltip (implied command)
|-
|/cc profile
|Manage or switch profiles
|-
|/cc standby
|Set or toggle standby mode
|-
|/cc about
|Show information about the addon
|}

## Preview
Minimap Menu:

ElvUI Skin:

## Core Features
- Supports multiple addons for button skinning:
  - Bartender2, AutoBar, Pubcrawl, ItemRack, BlueSpirit, AspectBar, TrackBar, WindAction, BagnOn, TrinketMenu, XAD, Flexbar, TradesBar, and more.
- Customizable skins with preset styles:
  - Beveled, Circle, CirclePro, Fade, FadeCircle, Rounded, Square, SquareThin, Thinnerest, Serenity, Sprocket, Caith, Glossy, Deuce, simpleSquare, ElvUI, and more.
- Flexible skin parameters:
  - Size, position, texture, blend mode, frame level, scale, alpha, icon overlays, and more.
- Color customization:
  - Normal, hover, and equipped overlay colors.

## Configuration Options
**Skin Selection**
- Choose from predefined skins (e.g., Beveled, Circle, Serenity, etc.)
- Change via dropdown in minimap menu.
**Colors**
- **Normal**: Default button color.
- **Hover**: Color when mouse is over.
- **Equipped**: Overlay color when an item is equipped.
**Elements**
- Toggle skins for individual elements:
  - Icon, overlay, equip, flash, cooldown, hotkey, count, autocast, autocast arrows, normal, highlight, pushed, checked textures.

## Skin Elements & Parameters
**Supported Skin Elements:**

- icon: Button icon texture
- overlay: Base overlay texture
- equip: Texture shown when an item is equipped
- flash: Highlight for active buttons (e.g., attack)
- cooldown: Cooldown animation overlay
- hotkey: Hotkey text position
- count: Count text position
- autocast: Autocast animation overlay
- autocastable: Arrow indicators for autocast

**Texture Parameters:**
{| class="fandom-table"
!Parameter
!Description
|-
|w / h
|Width / height of element
|-
|x / y
|Offset position
|-
|p / rp
|Point / relative point (default: CENTER)
|-
|tex
|Texture file path
|-
|bm
|Blend mode (e.g., BLEND, ADD)
|-
|dl
|Draw layer (e.g., BACKGROUND, OVERLAY)
|-
|fl
|Frame level
|-
|s
|Scale (default: 1.0)
|-
|a
|Alpha (opacity)
|}

## Customization & Skinning Functions
- **ApplySkin(id, data)**: Applies textures and parameters to specified elements.
- **ApplyColors(data)**: Sets overlay vertex colors based on user-selected colors.
- **SkinNormalTexture(id)**: Skins the normal texture of a button.
- **SkinHighlightTexture(id)**: Skins the highlight texture.
- **SkinPushedTexture(id)**: Skins the pushed texture.
- **SkinCheckedTexture(id)**: Skins the checked texture.
- **SkinIcon(id, alias)**: Skins the icon overlay.
- **SkinCooldown(id)**: Skins the cooldown overlay.
- **SkinHotkey(id)**: Skins the hotkey string.
- **SkinCount(id)**: Skins the count text.
- **SkinOverlay(id)**: Creates and skins the overlay texture.
- **SkinEquipBorder(id)**: Styles the border when an item is equipped.
- **SkinFlashTexture(id)**: Styles the flash texture.
- **SkinAutocast(id)**: Styles autocast animations.

## Module Support
- Modules (plugins) for each supported addon are initialized on load.
- You can enable/disable individual plugins via options menu.
- Each plugin has ApplySkin() and ApplyColors() methods for customization.

## Additional Notes
- **Beta Version Warning:**
  - "I'm a BETA VERSION! Bugs guaranteed."
  - Use with caution; report issues if they occur.
- **Localization Support:**
  - Supports multiple languages: enUS, zhCN, koKR, deDE.
- **Skin Files & Textures:**
  - Located in the textures folder within the addon directory.
  - Custom skins can be added or modified by editing the skins.lua table.
