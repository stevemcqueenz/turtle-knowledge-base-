---
title: "EzPoison"
url: "https://turtle-wow.fandom.com/wiki/EzPoison"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-03T19:51:31Z"
fetched: "2026-09-10T07:38:44Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# EzPoison

EzPoison is a Turtle Wow addon that provides a convenient GUI to manage and apply poisons, sharpening stones, and wizard/mana oils to your weapons. This fork includes additional tweaks and quality-of-life improvements.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the EzPoison-master folder to EzPoison
# Restart the game

## Git Links
- [**(nikalsh)**](https://github.com/nikalsh/EzPoison-turtle) - Rogue only
- [**(wierdthing)**](https://github.com/wierdthing/EzPoison) - All Classes

## **Commands**
{| class="fandom-table"
!Function
!Description
|-
|/ezpoison
|Toggles the EzPoison configuration window on/off
|-
|/ezpoison scale
|Sets the window scale if  is between 0.3 and 3. Example: "/ezpoison scale 1.5"
|-
|/ezpoison apply
|Automatically applies poisons if either the main-hand or off-hand selection is out of charges (faded)
|-
|/ezpoison profile <1-7>
|Activates the specified profile number (1 through 7). Example: "/ezpoison profile 3"
|}

  -Apply poisons:**

- **Left-click** on the Main-Hand or Off-Hand icon in the EzPoison window to automatically apply the currently selected poison/stone/oil. Right-click on the icon to open a drop-down where you can pick the type of consumable you want. 
- Move the EzPoison window: Click and drag anywhere on the EzPoison window to reposition it on your screen. 
- Scale the EzPoison window: Use the Fubar options if you have FuBar installed, or use the slash command. 
- Profiles: You can have 7 different profiles, each storing separate Main-Hand and Off-Hand consumable choices. Click the small dots (above the main GUI) to switch profiles directly. Profile names can be changed via FuBar options or by editing the config (EZPcfg in the code).

## **Renaming Profiles**
  -Through FuBar**

- In the FuBar menu, navigate to EzPoison’s options. Each profile has a rename field. Directly in Lua: Edit EZPcfg.Profile[x].Name in your Saved Variables if you’re comfortable editing addon files. 

  -FuBar Integration**

- EzPoison includes FuBar support (via the Ace2 libraries). An icon will appear on the FuBar mini-map area for quick toggling of the config window. 

  -Inventory Counts**

- Hover over the icons to see details. The count on each button represents the total quantity of that poison/stone/oil in your inventory. The icon will fade (opacity ~20%) if you have zero items remaining. Known Limitations / Notes The addon checks your bags for the selected poison/stone/oil. If it cannot find a match, it will notify you in the chat window. Item counts update whenever your bags change or you apply a poison. If numbers seem off, try opening/closing your bags or reapplying poison to refresh.

## Preview
Profiles:

EzPoison window:

## Features
- Simple GUI: Quickly apply poisons, stones, or oils to your main-hand and off-hand weapons.
- Profiles: Save up to 7 different configurations (profiles) for your poisons/stones/oils. Switch between them with a single click or slash command.
- Inventory Tracking: Displays how many of each poison/stone/oil remain in your bags.
- Moveable/Scalable Window: Drag to reposition and adjust the scale of the GUI to fit your UI needs.
- Slash Commands: Control the addon through various **/ezpoison** or **/EzPoison** commands.
