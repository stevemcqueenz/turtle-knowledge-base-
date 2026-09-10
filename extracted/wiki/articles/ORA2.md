---
title: "ORA2"
url: "https://turtle-wow.fandom.com/wiki/ORA2"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-07T10:53:31Z"
fetched: "2026-09-10T07:39:21Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ORA2

oRa is a dynamic raid assist add-on.

## How to Install
# Visit the GitHub link you find, then click [**releases**](https://github.com/xorann/oRA2/releases), then select oRA2.zip
# Use [7zip](https://www.7-zip.org/) to extract the zip
# Move the oRA2 folder into your TWow/Interface/AddOns
# Restart the game

## Git Links
[**(xorann)**](https://github.com/xorann/oRA2)

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/ora
|Open ora2 GUI.
|-
|/oracl Textures 
|[BantoBar] Set all statusbar textures. 
|-
|/oracl assist
|Options for assist.
|-
|/oracl cooldown 
|Options for CoolDown.
|-
|/oracl durability
|Options for durability checks.
|-
|/oracl groupsetup
|Options for the group setup plugin. 
|-
|/oracl invite
|Options for invite.
|-
|/oracl item
|Options for item checks.
|-
|/oracl latency
|Options for latency checks.
|-
|/oracl minimap 
|[Shown] Toggle the mini-map button. 
|-
|/oracl mt
|Options for the main-tanks.
|-
|/oracl pt
|Options for the player-targets. 
|-
|/oracl ready
|Options for ready checks and votes. 
|-
|/oracl resist
|Options for resistance checks. 
|-
|/oracl resurrection
|Options for resurrection. 
|-
|/oracl rw
|Options for raid warning.
|-
|/oracl status
|Request a status update
|-
|/oracl useshorthands
|[On] Toggle using of CTRA short-hands
|-
|/oracl version
|Options for version checks. 
|-
|/oracl zone
|Options for zone checks.
|-
|/oracl detach Tooltip
|[Off] Detach the tool-tip from the panel.
|-
|/oracl lock Tooltip
|[Off] Lock the tool-tips position. When the tool-tip is locked, you must use Alt to access it with your mouse.
|-
|/oracl hide
|[Off] Hide the plugin from the panel or mini-map, leaving the add-on running.
|-
|/oracl profile
|[Default] Set profile for this add-on.
|-
|/oracl standby
|[Suspended] Suspend/resume this add-on. 
|-
|/oracl about
|Print out addon info
|}

**Commands**

- <code>**/rainvite**</code> – Guild invite command.
- <code>**/rakeyword**</code> – A command related to guild invitations.
- <code>**/ready**</code> - perform a ready check
- **MT and PT commands**: Ability to assign Main Tanks and Player Targets via tooltips or keybindings.

**Click Functions**

- **Ctrl+Alt+Click**: Used to disable or re-enable oRA by clicking the FBP (FuBar plugin).
- **Alt-Drag**: A new way to interact with the system for certain options (e.g., horizontal layout).
- **Click on tooltip**: To assign MTs and PTs by targeting the player and clicking the tooltip.
- **Tooltip**: Click functions for interacting with the list of MTs and PTs, which can be non-interactive or enable interaction depending on the feature.

## Preview
## Features
**Cooldown Monitor**
- Added Innervate, Divine Intervention, Shield Wall and Challenging Shout/Roar
- Added configuration for each Spell
- Added an option to lock the Frame. If the frame is unlocked in can be moved by Drag&Drop (pressing you Alt-key is not necessary anymore)
- Added an option to scale the bar size

**Resurrection Monitor**

- Added an option to lock the Frame. If the frame is unlocked in can be moved by Drag&Drop (pressing you Alt-key is not necessary anymore)

**Invite**

- Added Auto Promote Feature: automatically promotes all players on your Auto Promote list to raid assistants whenever you become the raid leader or when you already are the raid leader and they join the raid
- Added the possibility to define multiple keywords for Auto Invite. Separate your keywords with a Space, e.g. "inv raid" would mean whenever someone whispers you "inv" or "raid", you would automatically invite them.

**Ready Check**

- Added Slash command <code>**/ready**</code> to perform a ready check
- Raid members without oRA2 can participate in ready checks by whispering + or -

**Main Tank**

- Added a Test option to set up the main tank frame outside of a raid group
**Guild invite**

- Can now take level as an optional argument to invite players of a certain level or higher.

**Leader/Invite functionality**

- Uses <code>InviteUnit</code> and <code>UninviteUnit</code> APIs if available.

**Durability/Resistance checks**

- Prevents players from appearing twice in these checks.

**SurfaceLib integration**

- For textures and updates.

**Level of Detail (LoD)**

- oRA2 now uses LoD, similar to BigWigs, which will break external modules.

**Participant/Ready status**

- Updated to use SurfaceLib.

**Fixed localization issues**

- Updates for various languages (e.g., zhCN, koKR, deDE, frFR).

**Improved resurrection monitoring**

- Ensures proper behavior when players are mid-resurrection.

**Tooltips**

- Ability to detach and display non-interactive lists of Player Targets (PT) and Main Tanks (MT).

**Resurrection monitor improvements**

- Better handling when leaving and rejoining a raid with resurrections.

**Texture changing**

- Default texture set and ability to change textures for certain modules.

**Horizontal layout**

- Added option for a horizontal layout for MT frames.

**AceLocale-2.2 and AceHook 2.1 support**

- Localization and hooks added for various improvements.

**Cooldown module**

- Ability to change textures and some drycoded improvements.
