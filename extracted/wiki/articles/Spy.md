---
title: "Spy"
url: "https://turtle-wow.fandom.com/wiki/Spy"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-29T15:21:49Z"
fetched: "2026-09-10T07:39:41Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Spy

Detects and alerts you to the presence of nearby enemy players.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the Spy-vanilla-main folder to Spy-vanilla
# Restart the game
  -Optional:** [FuBar](FuBar) - A panel that Spy can plug into.

## Git Links
- **[(gutisalex)](https://github.com/gutisalex/Spy-twow)** - normal version
- **[(me0wg4ming)](https://github.com/me0wg4ming/Spy)** - Full SuperWoW integration - Last update: (December 27, 2025)

## Preview
  -Nearby List:**

  -Configuration:**

## Commands
{| class="fandom-table"
!Function
!Description
|-
| /spy show 
| Shows the main window.
|-
| /spy hide 
| Hides the main window.
|-
| /spy reset 
| Resets the position and appearance of the main window.
|-
| /spy clear 
| Clears the list of players that have been detected.
|-
| /spy config 
| Open the Interface Addons configuration window for Spy.
|-
| /spy kos 
| Add/remove a player to/from the Kill On Sight list.
|-
| /spy ignore 
| Add/remove a player to/from the Ignore list.
|-
| /spy stats 
| Shows a list of enemy players encountered, win/loss records and where they were last seen.
|-
| /spy test 
| Shows a warning so it can be re-positioned.
|}

## Features
  -Nearby list**

The Nearby list displays any enemy players that have been detected nearby. Clicking the list allows you to target the player, however this only works out of combat. Players are removed from the list if they have not been detected after a period of time. 

The clear button in the title bar can be used to clear the list, and holding Control while clearing the list will allow you to quickly enable/disable Spy.

  -Last Hour list**

The Last Hour list displays all enemies that have been detected in the last hour.

  -Ignore list**

Players that are added to the Ignore list will not be reported by Spy. You can add and remove players to/from this list by using the button's drop down menu or by holding the Control key while clicking the button.

  -Kill On Sight list**

Players on your Kill On Sight list cause an alarm to sound when detected. You can add and remove players to/from this list by using the button's drop down menu or by holding the Shift key while clicking the button. The drop down menu can also be used to set the reasons why you have added someone to the Kill On Sight list. If you want to enter a specific reason that is not in the list, then use the "Enter your own reason..." in the Other list.

  -Statistics Window**

The Statistics Window contains a list of all enemy encounters which can be sorted by name, level, guild, wins, losses and the last time an enemy was detected. It also provides the ability to search for a specific enemy by name or guild and has filters to show only enemies that are marked as Kill on Sight, with a Win/Loss or entered Reasons.

  -Kill On Sight Button** 

If enabled, this button will be located on the enemy players target frame. Clicking on this button will add/remove the enemy target to/from the Kill On Sight list. Right clicking on the button will allow you to enter Kill on Sight reasons.

## Contributors
- Slipjack (original author)
- Immolation
- [Laytya](https://github.com/laytya) (ported to vanilla)
- [momomeomo](https://github.com/momomeomo) (Turtle changes)
- [me0wg4ming](https://github.com/me0wg4ming) (Full Superwow Integration)
