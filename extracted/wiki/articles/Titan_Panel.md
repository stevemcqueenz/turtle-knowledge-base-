---
title: "Titan Panel"
url: "https://turtle-wow.fandom.com/wiki/Titan_Panel"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-07-01T10:38:28Z"
fetched: "2026-09-10T07:39:52Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Titan Panel

-Titan Panel** is a customizable in-game info bar that displays real-time data like gold, XP, FPS, latency, and more. It supports plugins to enhance your UI and optimize your gameplay experience.

## Installation
  -Manual Installation Only**

# Download this zip: [**Titan_v2.20.zip**](https://web.archive.org/web/20061109140913/http://downloadmod.worldofwar.net/upload/ui/1156392959Titan_v2.20.zip)
# Unpack the <code>.zip</code> and move the folders into your <code>Interface/AddOns</code> directory and restart the game.

## Basic Usage
Basic Usage & Customization

- **Enabling/Disabling Mods:** Use the in-game Addons menu to toggle specific Titan plugins.
- **Moving Panels:** Drag the top or bottom bars to reposition them.
- **Changing Bar Layout:**
  - Toggle between single or double bars.
  - Choose top or bottom placement.
  - Enable or disable auto-hide.
  - Adjust transparency, scale, and font size in the options menu.
- **Button Alignment:** Switch between left, center, or right alignment for panel buttons.
- **Plugin Management:** Right-click the panel to access the context menu:
  - Add or remove plugins.
  - Configure options like auto-hide, tooltips, and display settings.

- **Localization:** Available in English, French, German, and others—set via game language options.
- **Resetting Settings:** Use the "Reset" option in the right-click menu to restore defaults.
- **Troubleshooting:** For issues, use the "Load Error" popup to report problems.

## Preview
Titan Panel:

Option:

## Key Features
- **Real-Time Info Display:** Money, Bag space, FPS, Latency, Location, XP, Honor, Time, and more.
- **Customizable Bars:** One or two bars, with optional double bar configuration.
- **Plugin System:** Supports a variety of plugins for additional info and controls.
- **Auto Gear Management:** TitanRider auto equips/unequips riding gear.
- **Performance Enhancements:** Optimized for minimal lag and smooth operation.
- **In-Game Settings Menu:** Access options for auto-hide, layout, plugin categories, and localization.

## **List of Titan Plugins**
{| class="fandom-table"
|**Name**
|**Version**
|**Last Update**
|**Author**
|**Description**
|-
|**TitanAmmo**
|2.04
| -
|TitanMod
|show ammo counts
|-
|**TitanBag**
|2.04
| -
|TitanMod
|show room left in bags
|-
|**TitanClock**
|2.04
| -
|TitanMod
|clock with offsets for your true timezone
|-
|**TitanCoords**
|2.04
| -
|TitanMod
|displays location, plus coordinates. Won't work inside instances
|-
|**TitanMoney**
|2.04
| -
|TitanMod
|displays money count
|-
|**TitanXP**
|2.04
| -
|TitanMod
|displays XP and tooltip with more information
|-
|**TitanVolume**
|2.04
| -
|TitanMod
|Volume slider for the main volume
|-
|**TitanLootType**
|2.04
| -
|TitanMod
|displays party loot settings
|-
|**TitanPerformance**
|2.04
| -
|TitanMod
|Shows the Performance data of WoW. Memory usage by UI, garbage collection time, fps, latency
|-
|**TitanUIScale**
|2.04
| -
|TitanMod
|slider for scaling the Titan Panel and the overall UI elements
|-
|**HonorPlus**
|r10.1700
|9/22/05
|Swiftstab
|Shows Honor Information on the Titan Panel
|-
|**ItemBonuses**
|0.9
|10/12/05
|CrowleyAJ
|Shows the total bonus given by items for each stat
|-
|**Regen**
|1700
|9/21/05
|skeetskeet
|Show the amount of HP and Mana regenerated per tick
|-
|**Repair**
|0.2
|7/18/05
|LumpN
|Shows the current/max durability of each item you are currently wearing and the money needed to repair them
|}

## Developer's Guide
  -Basic Structure of a Titan Panel Button**

A Titan panel button generally consists of:

- **The button itself**: Displays on the Titan panel. Can be text, icons, or complex UI frames.
- **Context menu**: Right-click options.
- **Tooltip**: Hover information.
- **Control window**: Optional window for settings or controls.

  -Defining a Button in XML**<syntaxhighlight lang="lua">
<Frame parent="UIParent">
  <Frames>
    <Button name="TitanPanelExampleButton" inherits="TitanPanelTextTemplate"
            frameStrata="FULLSCREEN" toplevel="true">
      <Scripts>
        <OnLoad>
          TitanPanelExampleButton_OnLoad();
          TitanPanelButton_OnLoad();
        </OnLoad>
      </Scripts>
    </Button>
  </Frames>
</Frame>
</syntaxhighlight>

- **OnLoad**: Sets up plug-in details and registers with Titan Panel.
- **Inheritance Templates**: Specify the button type (see below).

  -Template Types for Buttons**

Choose the template based on your plug-in's display needs:
{| class="fandom-table"
!Template Name
!Description
!Notes
|-
|**TitanPanelButtonTemplate**
|Basic button with right-click menu and default handlers. No display content — add child frames.
|Use if adding custom UI elements.
|-
|**TitanPanelTextTemplate**
|Button with a text string.
|Ideal if only displaying text.
|-
|**TitanPanelIconTemplate**
|Button with an icon.
|Icons appear on the right side; <code>icon</code> texture and <code>iconWidth</code> define appearance.
|-
|**TitanPanelComboTemplate**
|Icon + text combo.
|Shows icon (optional) with text; <code>ShowIcon</code> controls visibility, <code>iconButtonWidth</code> sets space.
|-
|**TitanPanelChildButtonTemplate**
|Child button within a parent.
|For multiple buttons in one panel; hook <code>OnClick</code> for different behaviors.
|-
|**TitanOptionsSliderTemplate**
|Vertical sliders for control windows.
|Used for sliders, not top-level buttons.
|}

  -Registering Your Plug-in**

Before calling <code>TitanPanelButton_OnLoad()</code>, set up your plug-in's registry table. This defines appearance and behavior:
{| class="fandom-table"
!Field
!Description
|-
|<code>id</code>
|Unique string ID.
|-
|<code>builtIn</code>
|Set to <code>1</code> to appear in built-in menu.
|-
|<code>menuText</code>
|Label in the toggle menu.
|-
|<code>buttonTextFunction</code>
|Function name returning button text.
|-
|<code>tooltipTitle</code>
|Tooltip header.
|-
|<code>tooltipTextFunction</code>
|Function returning tooltip text.
|-
|<code>tooltipCustomFunction</code>
|Function to update the tooltip dynamically.
|-
|<code>icon</code>
|Icon texture name.
|-
|<code>iconWidth</code>
|Width (pixels) of icon. Default: 16.
|-
|<code>iconButtonWidth</code>
|Width (pixels) of icon or combo button.
|-
|<code>savedVariables</code>
|Table of persistent variables (<code>ShowIcon</code>, <code>ShowLabelText</code>, etc.). Access with <code>TitanGetVar()</code> / <code>TitanSetVar()</code>.
|-
|<code>frequency</code>
|Update interval in seconds.
|-
|<code>updateType</code>
|Which functions to update (<code>tooltip</code>, <code>button</code>, or both).
|}

  -Example Registry Setup**<syntaxhighlight lang="lua">
function TitanPanelExamplePlugin_OnLoad()
  this.registry = {
    id = "Example",
    menuText = "Example Plug-in",
    tooltipTitle = "Example Plug-in",
    buttonTextFunction = "TitanPanelExamplePlugin_GetButtonText",
  };
end

function TitanPanelExamplePlugin_GetButtonText()
  return "Example"
end
</syntaxhighlight>This creates a simple plug-in displaying "Example" on the panel.

  -Handling Clicks**

- **Left Clicks**: Hook the <code>OnClick</code> event or create a control frame called <code>TitanPanel(ID)ControlFrame</code>.
- **Right Clicks**: Ensure <code>TitanPanelButton_OnClick()</code> is called to handle context menus.

  -Creating a Context Menu**

Define <code>TitanPanelRightClickMenu_Prepare(ID)</code> to build your menu:<syntaxhighlight lang="lua">
function TitanPanelRightClickMenu_PrepareExampleMenu()
  TitanPanelRightClickMenu_AddTitle(TitanPlugins["Example"].menuText);
  TitanPanelRightClickMenu_AddToggleIcon("Example");
  TitanPanelRightClickMenu_AddToggleLabelText("Example");
  TitanPanelRightClickMenu_AddSpacer();
  TitanPanelRightClickMenu_AddCommand(TITAN_PANEL_MENU_HIDE, "Example", TITAN_PANEL_MENU_FUNC_HIDE);
end
</syntaxhighlight>

  -Building a Context Menu**

Use the following functions to add menu items:
{| class="fandom-table"
!Function
!Description
|-
|<code>TitanPanelRightClickMenu_AddTitle(text, level?)</code>
|Adds a menu title.
|-
|<code>TitanPanelRightClickMenu_AddSpacer(level?)</code>
|Adds space.
|-
|<code>TitanPanelRightClickMenu_AddToggleIcon(id)</code>
|Toggle icon visibility.
|-
|<code>TitanPanelRightClickMenu_AddToggleLabelText(id)</code>
|Toggle label text.
|-
|<code>TitanPanelRightClickMenu_AddToggleColoredText(id)</code>
|Toggle colored text.
|-
|<code>TitanPanelRightClickMenu_AddCommand(text, value, funcname, level?)</code>
|Add command with callback.
|-
|<code>TitanPanelRightClickMenu_AddToggleVar(text, id, var, toggleTable?)</code>
|Toggle variable.
|}

  -Important Notes**
- The example plugin's registry lacks variables and icon — toggles won't work without them.
- The <code>GetButtonText</code> method should return display text or labels.
- Ensure your registry includes all necessary fields for full functionality.

## Updates
Version Updates & Fixes
- **2.19.1:** Fixed Weapon Quick Swap dependency.
- **2.19:** Updated for Patch 1.11.
- **2.18:** Added Titan Zonespeed, fixed casting bar blur, introduced new Titan Repair, and improved performance.
- **2.17.1:** Fixed overlap issues, enhanced TitanRepair and BonusScanner performance.
- **2.17:** Overall performance boost, fixed lag in TitanRepair, added option to disable inventory damage check, improved equipment changers, fixed French locale typos.
- **2.16.3 - 2.16.1:** Various bug fixes including lag, errors, and localization.
- **2.16:** Fixed Auto Join bug, Rider display, and improved performance.
- **2.15.5 - 2.15.1:** Bug fixes, added profession bags, compatibility with WoW 1.10, and Rider improvements.
- **2.14.2 - 2.14:** Removed Titan Naked for clarity, fixed graphics, auto join, and death in battlegrounds.
- **2.13.1 - 2.13:** Fixed debug errors, added localization, and improved auto join/release.
- **2.12 - 2.11:** Tooltip fixes and Rider compatibility.
- **2.10 - 2.09:** Added TitanRider for auto gear equip/unequip, fixed bugs, and localization.
- **2.08 - 2.07:** UI scaling fixes, timezone settings, and conflict resolutions.
- **2.06 - 2.05:** UI adjustments, clock display fixes, and graphics revamp.
- **2.04 - 2.03:** Tooltip flashing fix, new options menu, plugin categorization, and version display.
