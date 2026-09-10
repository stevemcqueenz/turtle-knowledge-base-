---
title: "RollFor"
url: "https://turtle-wow.fandom.com/wiki/RollFor"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-14T03:01:59Z"
fetched: "2026-09-10T07:39:31Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# RollFor

-RollFor** is designed to manage rolling for items within the game. It streamlines the rolling process, making it more efficient and user-friendly, particularly in raid environments.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the RollFor-main folder to RollFor
# Restart the game

  -Note**: If you want to install the addon via the launcher, use https://github.com/sica42/RollFor instead.

## Git Links
- [**(sica42)**](https://github.com/sica42/RollFor)

## Commands
  -Usage**
{| class="fandom-table"
!Function
!Description
|-
|/rfo
|Access options GUI
|-
|/rfw
|Winners tracking popup
|-
|/rf <item link>
|Roll an item.
|-
|/rr <item link>
|Raid-roll an item from your bags.
|-
|/irr <item link>
|Instantly raid-roll an item.
|-
|/rf 2x<item link>
|Roll for two items (two top rolls win).
|-
|/arf
|Ignore soft-res and allow everyone to roll.
|-
|/sr
|Import Soft Res data.
|-
|/srs
|Show soft-reserved items.
|-
|/src
|Check soft-res status.
|-
|/cr
|Cancel rolls.
|-
|/fr
|Finish rolls early.
|-
|/sro
|Fix mistyped player names in Soft-Res.
|-
|/sr init
| Clear soft-res data.
|}

  -Configuration**
{| class="fandom-table"
!Function
!Description
|-
|/rf config help
|Shows config slash commands
|-
|/rf config 
|Show configuration
|-
|/rf config minimap 
|Toggle minimap icon
|-
|/rf config minimap lock 
|Lock/unlock minimap icon
|-
|/rf config default-rolling-time 
|Show default rolling time
|-
|/rf config master-loot-frame-rows 
|Show master loot frame rows 
|-
|/rf config default-rolling-time <seconds> 
|Set default rolling time 
|-
|/rf config ms 
|Show MS rolling threshold
|-
|/rf config ms <threshold> 
|Set MS rolling threshold
|-
|/rf config os 
|Show OS rolling threshold
|-
|/rf config os <threshold> 
|Set OS rolling threshold
|-
|/rf config tmog 
|Toggle TMOG rolling
|-
|/rf config tmog <threshold> 
|Set TMOG rolling threshold
|-
|/rf config auto-master-loot 
|Toggle auto master loot
|-
|/rf config superwow-auto-loot-coins 
|Roggle auto-loot coins with SuperWoW 
|-
|/rf config classic-look
|Toggle classic look
|-
|/rf config loot-frame-cursor 
|Toggle displaying loot frame at cursor position 
|-
|/rf config auto-loot 
|Toggle auto-loot
|-
|/rf config auto-rr
|Toggle auto raid-roll
|-
|/rf config auto-tmog 
|Toggle transmog roll on trash loot
|-
|/rf config auto-loot-messages
|Toggle auto-loot messages 
|-
|/rf config ml 
|Toggle master loot warning
|-
|/rf config raid-roll-again 
|Toggle Raid roll again button
|-
|/rf config auto-group-loot 
|Toggle auto group loot
|-
|/rf config auto-class-announce 
|Toggle announcing of class restriction on items
|}

  -Click Functions**

- **Minimap Icon Click:**  Access soft-res data and perform actions related to the addon.
- **Shift-click the map icon:**  View the winners tracking popup.
- **Ctrl-click the map icon:**  Open the Options GUI.

## Preview
Loot Window:

Roll Window:

## Features
- **Soft Reservation Integration:**  Fully integrated loot list that shows soft-reserved items and who reserved them. Automatically enables Master Loot when targeting a boss.
- **Master Loot Window Enhancements:**  Displays players sorted by class and adds a confirmation window for clarity and safety.
- **Roll Management:**  Detects when someone rolls too many times and ignores extra rolls. Automatically resolves ties and provides opportunities for players to re-roll.
- **Automated Options:**  Customizable configurations, accessible through /rf config. Automates notifications for eligible players regarding roll windows.
- **Raid Trades Tracking:**  Keeps track of trades within raids.
- **Minimap Icon Status:**  Color-coded notifications for soft-res status:
  - Green: Everyone has soft-reserved.
  - Orange: Some players have not soft-reserved.
  - Red: Outdated soft-res data.
  - White: No soft-res data available.
- **Multiple Roll Types Supported:**  Includes general rolling, off-spec rolls, and transmogrification rolls. Supports “two top rolls win” mechanics.

  -New Features in Sica42's Fork**

- **/rf config auto-class-announce:**  Replaces normal roll messages with class information for restricted items.
- **/rf config auto-tmog:**  Disables tmog rolling for trash items by default.
- **/rf config loot-frame-cursor:**  Positions the loot frame at the cursor’s location.
- **Winners Tracking Popup:**  Access via shift-clicking the map icon or typing /rfw. Customizable filters and sort options for the winners list.
- **New Options GUI:**  Access through Ctrl-click on the map icon or type /rfo.

- **Roll Popup Notifications:**  Displays rolling notifications for eligible group members when the loot master starts a roll.

## Soft-Res setup
  1: Create a Soft Res list at https://raidres.fly.dev.
  2: Ask raiders to add their items.
  3: When ready, lock the raid and click on **RollFor export** (raidres.fly.dev).

  
  
  
  
  
  
  4: Click on **Copy RollFor data to clipboard** buton.

  
  
  
  
  
  
  5: Click on the minimap icon or type <code>/sr</code>.
  6: Paste the data into the window.
  7: Click **Import!**.
