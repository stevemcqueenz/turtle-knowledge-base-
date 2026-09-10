---
title: "Bongos"
url: "https://turtle-wow.fandom.com/wiki/Bongos"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T12:53:57Z"
fetched: "2026-09-10T07:38:27Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Bongos

-Bongos** is a flexible, movable bar framework. It allows you to customize action bars, bags, pet bars, class bars, and more, with options for positioning, scaling, visibility, and behavior.

## Installation
  -GitAddonsManager**

The easiest way to keep **Bongos** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/MarcelineVQ/Bongos.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a .zip.
# Unpack the .zip and move these folders into your Interface/AddOns directory and restart the game.

- Bongos
- Bongos_ActionBar
- Bongos CastBar
- Bongos_MapBar
- Bongos_Options
- Bongos_RollBar
- Bongos_Stats
- Bongos_XP

  -Optional**: 

- [CyCircled](CyCircled) - Add new skins on action buttons

## Git Links
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/Bongos)

## Basic Usage
  -Moving Bars**

- Unlock bars: Use the lock/unlock button.
- Drag with your mouse to reposition.
- Lock bars to prevent movement.

  -Showing/Hiding Bars**

- Use commands /bg show <bar>, /bg hide <bar>, or /bg toggle <bar> to control visibility.
- <bar> can be a specific number, name, or special keyword (all, bags, menu, etc.).

  -Profiles**

- Save current setup: /bg save <profile_name>
- Load a profile: /bg load <profile_name>
- Delete a profile: /bg delete <profile_name>
- Set a profile as default: /bg setdefault <profile_name>
- Clear default profile (use default WoW behavior): /bg cleardefault

  -Adjusting Scale and Opacity**

- Set scale: /bg scale <bar> <value> (e.g., /bg scale 1 0.8)
- Set opacity: /bg setalpha <bar> <value> (e.g., /bg setalpha 1 0.5)

  -Sticky Bars**

- Enable or disable sticky snapping: /bg stickybars on or /bg stickybars off

  -Reusing Blizzard Buttons**

- Toggle reusing Blizzard's default action buttons: /bg reuse on or /bg reuse off
- Reusing saves memory but may cause conflicts.

  -Additional Commands**

- Show help: /bg help
- Show current configuration: /bg (or /bob)
- Reset layout: /bg reset
- Toggle self-cast with right-click: /bg selfcast on / /bg selfcast off
- Show/hide macro/hotkey text: /bg macrotext on, /bg hotkeys on
- Adjust cooldown text size: /bg cooldownsize <size> (e.g., /bg cooldownsize 18)

## Commands
{| class="fandom-table"
!Command
!Description
!Example
|-
|/bg show <bar>
|Show specific bar (number, name, or keyword)
|/bg show 1
|-
|/bg hide <bar>
|Hide specific bar
|/bg hide pet
|-
|/bg toggle <bar>
|Toggle visibility
|/bg toggle 2
|-
|/bg scale <bar> <value>
|Set scale (size) of a bar
|/bg scale 1 0.75
|-
|/bg setalpha <bar> <value>
|Set opacity of a bar
|/bg setalpha 1 0.5
|-
|/bg save <profile>
|Save current layout as a profile
|/bg save MyProfile
|-
|/bg load <profile>
|Load a saved profile
|/bg load MyProfile
|-
|/bg delete <profile>
|Delete a profile
|/bg delete MyProfile
|-
|/bg setdefault <profile>
|Set default profile for new characters
|/bg setdefault MyProfile
|-
|/bg cleardefault
|Reset to default profile
|/bg cleardefault
|-
|`/bg stickybars on
|off`
|Enable or disable sticky snapping
|-
|`/bg reuse on
|off`
|Enable or disable reusing Blizzard buttons
|-
|`/bg selfcast on
|off`
|Enable or disable right-click self-cast
|-
|/bg help
|Show help message
|/bg help
|-
|/bg reset
|Reset layout to defaults
|/bg reset
|}

## Preview
## Key Features
  -Movable Bars**
- Drag and reposition action bars, pet bars, bag bars, and other UI elements.
- Bars can be locked/unlocked to prevent accidental movement.
  -Customizable Appearance**
- Scale bars individually.
- Adjust bar opacity (alpha).
- Change bar position and save custom layouts.
- Sticky bars can snap together for easier alignment.
  -Bar Management**
- Show, hide, or toggle visibility of individual bars or all bars.
- Automatically anchor bars close to each other.
- Save and load multiple profiles for different setups.
  -Profiles**
- Save your layouts as profiles.
- Load, delete, or reset profiles.
- Set a default profile for new characters.
  -Right-Click Menus**
- Context menus for each bar for quick access to options like locking, hiding, scaling, and more.
  -Compatibility & Integration**
- Supports other addons like CT_BottomBar, Infield, and more.
- Reuse Blizzard's default action buttons to save memory.
  -Miscellaneous**
- Enable/disable sticky behavior.
- Enable/disable reusing Blizzard-created buttons.
- Set keybindings for quick actions.
- Show/hide macro and hotkey text on action buttons.
- Customize cooldown count size and color.
- Toggle self-casting with right-click.

## Advanced Usage
  -Context Menus**
- Right-click on a bar to access quick options like lock, hide, scale, and more.
  -Profiles & Layouts**
- Create multiple profiles for different playstyles or characters.
- Easily switch between profiles without losing your setup.
  -Keybindings**
- Assign quick keys for showing/hiding bars or toggling options.
- Keybinding commands are typically set via WoW's keybinding menu, but you can also script custom ones.
  -Special Bar Types**
- Bag bar (bags)
- Menu bar (menu)
- Pet bar (pet)
- Class bar (class)
- Stats bar (stats)
- Experience bar (xp)
- Roll bar (roll)
- Cast bar (cast)
- Keyring (key)
  -Enabling/Disabling Features**
- Sticky bars: /bg stickybars on
- Reuse Blizzard buttons: /bg reuse on
- Selfcast: /bg selfcast on
- Show grid: /bg showgrid
- Hide grid: /bg hidegrid

## Tips & Tricks
- Use the right-click menu for quick configuration of each bar.
- Save profiles before making major changes.
- Lock bars when you're satisfied with positioning.
- Unlock to fine-tune placement.
- Use profiles to experiment with different setups without losing your preferred layout.
- Customize cooldown counts and colors for better visibility.
- Use keybindings to toggle visibility of important bars like the bag or menu bar.

## Troubleshooting
- **Bars not moving?** Make sure they are unlocked.
- **Profiles not loading?** Ensure profiles are saved correctly and you're using the right profile name.
- **Reusing Blizzard buttons causes conflicts?** Toggle /bg reuse off.
- **Addon conflicts?** Disable other UI addons that modify action bars.

## Final Notes
- Always back up your profiles before making major changes.
- Use profiles to easily switch between different layouts.
- Experiment with settings to find what best suits your playstyle.
- Keep your addon updated for the latest features and fixes.
