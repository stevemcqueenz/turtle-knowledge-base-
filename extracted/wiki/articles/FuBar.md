---
title: "FuBar"
url: "https://turtle-wow.fandom.com/wiki/FuBar"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-25T02:56:36Z"
fetched: "2026-09-10T07:38:50Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# FuBar

FuBar is a customizable panel system allowing modules (plugins) to plug into and display various types of information. Users can create, modify, and organize panels to suit their interface needs.

## Installation
**GitAddonsManager**
The easiest way to keep **FuBar** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/laytya/FuBar.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>FuBar</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Optional**: a huge pack of plugins, extra textures, 1.2 compatibility package

Manual Installation Only

# Download the zip by clicking [View raw](https://github.com/laytya/Vanilla-Addons/raw/refs/heads/master/FuBar+plugins.zip)
# Unpack the <code>.zip</code> and move the folders you need into your <code>Interface/AddOns</code> directory 
# Restart the game.

## Git Links
- [**(laytya)**](https://github.com/laytya/Vanilla-Addons/blob/master/FuBar%2Bplugins.zip) - Plugins, extra textures, 1.2 compatibility package
- [**(laytya)**](https://github.com/laytya/FuBar) - Fubar 

## Commands
{| class="fandom-table"
!Command
!Description
!Current State
|-
|**/fubar**
|Prints fubar commands into the chat
|—
|-
|**/fubar adjust**
|Toggle auto-adjustment of Blizzard's frames
|[On]/[Off]
|-
|**/fubar autohideBottom**
|Toggle auto-hiding of bottom panels
|[On]/[Off]
|-
|**/fubar autohideTop**
|Toggle auto-hiding of top panels
|[On]/[Off]
|-
|**/fubar create**
|Create a new panel
|—
|-
|**/fubar fontsize**
|Set the font size for plugin labels
|e.g., 12
|-
|**/fubar overflow**
|Allow plugins to overflow onto another panel
|[On]/[Off]
|-
|**/fubar spacing**
|Adjust spacing between plugins
|e.g., 10
|-
|**/fubar texture**
|Change the background texture of panels
|e.g., Default
|-
|**/fubar thickness**
|Set border thickness between panels
|e.g., 5
|-
|**/fubar transparency**
|Adjust panel transparency
|e.g., 0.8
|-
|**/fubar profile**
|Switch profiles for your addon setup
|e.g., Default
|-
|**/fubar about**
|Print information about the addon
|—
|}

## Panel Management
**Accessing Options:**

- **Right-click on a panel** to open the panel menu.
**Panel Management:**
- **Create a new panel:**  Use the menu to select **Create new panel**.
- **Lock/Unlock panels:**  Lock panels to prevent accidental moving. Unlock to reposition or resize.
- **Attach/Detach panels:**
  - Attach to top or bottom of the screen.
  - Detach panels to move freely.
- **Remove a panel:**  When a panel is empty, or confirm prompt appears, choose **Remove panel**.
**Panel Positioning:**
- **Drag panels** from top or bottom to reposition.
- **Resize panels** by dragging edges when unlocked.
- **Switch panels** with others by dragging plugins between panels.
**Panel Auto-Hiding:**
- Enable **Auto-hide top/bottom panels** to hide panels when not hovered.
- Use the options to toggle auto-hide behavior.

## Preview
Options:

Panel:

## Panel Settings
**Appearance:**

- **Texture:** Change panel background texture.
- **Spacing:** Adjust space between plugins (left, center, right).
- **Font Size:** Set font size for plugin labels.
- **Transparency:** Adjust panel and tooltip transparency.
- **Thickness:** Change the border thickness between panels.

**Overflow & Overflow Plugins:**

- Allow plugins to overflow onto another panel.
- Enable/disable overflow via options or commands.

**Auto-Adjust Frames:**

- Automatically adjust Blizzard’s UI frames for better integration.

## Plugin Management
**Adding Plugins:**

- Use the right-click menu or <code>/fubar</code> options.
- Plugins can be added to left, center, or right sides.
- Plugins can be organized, moved, or removed.

**Removing Plugins:**

- Right-click the plugin or use the panel menu to remove.
- You can also drag plugins out of panels to detach them.

**Plugin Commands:**

- **Show/Hide plugin:** Click on plugin icons to toggle visibility if supported.
- **Reload plugins:** Use <code>/fubar</code> options to reload or configure plugins.

## Advanced Usage
**Profiles:**

- Save different panel setups via profiles.
- Switch profiles to change your UI layout.

**Skinning:**

- Use **Texture** option or <code>/fubar</code> menu to change panel backgrounds.
- Supports custom skins for aesthetic changes.

**Resizing & Moving:**

- Drag panel edges or the entire panel (when unlocked) for custom sizing.
- Panels can be moved to top, bottom, or detached for flexible layout.

## Main Features
- **Panels:** The main bars where plugins are placed. You can create multiple panels and position them at the top or bottom of your screen.
- **Plugins:** Modules providing specific functionality (e.g., clock, map, experience). Plugins can be added, removed, and organized within panels.
- **Attach Points:** Panels can be attached to the top, bottom, or detached from the UI. You can move and switch panels easily.

## Troubleshooting
- **Panels overlapping:** Enable overflow or adjust spacing.
- **Plugins not showing:** Ensure plugins are enabled and not disabled in options.
- **Resizing issues:** Lock panels when resizing to prevent accidental moves.
- **Profiles:** Reload UI after profile changes for proper application.
