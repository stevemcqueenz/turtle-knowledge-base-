---
title: "ColdEmbrace"
url: "https://turtle-wow.fandom.com/wiki/ColdEmbrace"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T12:15:19Z"
fetched: "2026-09-10T07:38:32Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ColdEmbrace

-ColdEmbrace** is an innovative loot system designed for managing Mainspec (MS) and Offspec (OS) mechanics, along with unique features for earning effort points.

As the official guild addon for Cold Embrace at Turtle WoW, it is specifically crafted to streamline loot rolling within a raid environment. The addon features an intuitive interface that allows players to roll for items based on their class and specialization preferences.

With its integration of chat commands and event triggers, ColdEmbrace significantly enhances the functionality of the loot rolling process, making it a comprehensive tool for guilds.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the ColdEmbrace-main folder to ColdEmbrace
# Restart the game

## Git Links
  -[(ColdembraceBloxie)](https://github.com/ColdembraceBloxie/ColdEmbrace)**

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/ce or /coldembrace
|Displays help for the addon
|-
|/ce test 
|Command to test roll frames locally
|-
|/rl or /reload 
|Reload UI.
|-
|/autores 
|Resurrect dead raid members.
|-
|/reset or /resetinstance or /resetinstances 
|Reset Instances.
|-
|/rms or /rollms 
|Main Spec roll.
|-
|/ros or /rollos 
|Off Spec roll.
|-
|/rfs or /rollfs 
|Free Spec roll. (you won't pay the items price even if you win)
|-
|/rxmg or /rollxmg 
|Transmog roll.
|-
|/attackstart and /attackstop 
|Spammable start/stop attacking command
|-
|/cevc
|Checks version of the addon
|-
|/cevra
|Announces version in a raid
|-
|/ceva
|Forces version announcement in a raid
|}

## Collecting Points
Players accumulate points in two primary ways:

# **Legacy Points**: Earn 1 point for every raid instance attended, regardless of when it occurred.
# **Recent Raid Points**: Earn 1-3 points for each raid attended in the last 8 weeks, based on the raid's difficulty and time investment.

  -Points System**

- **Up to 175 Points**: Increase your roll strength for both Mainspec and Offspec rolls.
- **Beyond 175 Points**: Additional points can still be accumulated but do not enhance your roll strength further.

Cold Embrace members can check their points here: [Point Tracker](https://docs.google.com/spreadsheets/d/1UeBm39n4mppE5olJ9giPMv9It4M3lRfgS9lDFbyzgck/edit?gid=122731704#gid=122731704)

## Rolling for Loot
  -Mainspec (MS) Rolls**

- **Eligibility**: Mainspec rolls are exclusive to main characters and their intended raid specs. Alts are prohibited from MS rolling under the current system.
- **Roll Strength Calculation**:
  - **Min Roll**: Points (max 175)
  - **Max Roll**: Points * 0.7 + 100
  - Rolls will range from **0-100** and **175-222**.

  -Offspec (OS) Rolls**

- **Eligibility**: Offspec rolls require a payment based on the item price upon winning. Mains can roll for offspec items, and alts are also eligible.
- **Note**: An Offspec roll can win over a Mainspec roll; however, its success is weighted by the player's points.
- **Roll Strength Calculation**:
  - **Min Roll**: Points - 100 (max 75)
  - **Max Roll**: Points * 0.7 + 70 (max 120)
  - Rolls will range from **0-70** and **75-120**.

  -Offspec (Free) Rolls**

- This is similar to the current Offspec roll system. Players roll between **1-69** regardless of points, and winning an item has no point cost.
- Free rolls will always lose to Offspec or Mainspec rolls.

  -Transmog (XMog) Rolls**

- Transmog rolls allow players to unlock new outfits. The roll strength is **1-50**, and winning an item via this method incurs no point penalties. However, the winner must return the item after unlocking its transmog.

## Winning Items & Costs
If a player wins an item through Mainspec or Offspec, they incur a handicap on future rolls based on the item's rarity. The cost associated with winning an item is detailed in the “Price” column of the item list: [Item Price List](https://docs.google.com/spreadsheets/d/1UeBm39n4mppE5olJ9giPMv9It4M3lRfgS9lDFbyzgck/edit?gid=2144356961#gid=2144356961).

  -Note**: Costs are paid using **Legacy Points** exclusively, not Recent Raid Points. New guild members may find their roll strength increasing even after winning a few items on this list.

## Preview
## Features
# **Button Creation**:
1.* The script creates buttons for different functionalities, including main spec, off spec, greed, transmog rolls, and a pass button.
# **Skin Management**:
1.* Users can choose between different skins for the UI elements based on <code>ColdEmbraceVariables.Skin</code>.
# **Automatic Resurrection**:
1.* A function that automatically resurrects players of certain classes when they are dead.
# **Rolling System**:
1.* Main spec, off spec, greed, and transmog rolling mechanisms, allowing players to roll for loot.
# **Version Checking**:
1.* Checks the version of the addon for players in a raid and provides a summary.
# **Chat Integration**:
1.* Sends messages to various chat channels like raid warnings and system chat.
# **AFK Notification**:
1.* Notifies the raid when a player goes AFK.

  -Click Functions**

# **Need Button (<code>NeedFrameCE</code>)**:
1.* On Click: Calls <code>ColdEmbrace_MainSpecRoll()</code> and hides the item frame.
1.* On Enter: Displays tooltip with details about main spec rolls.
# **Offspec Button (<code>OffspecFrameCE</code>)**:
1.* On Click: Calls <code>ColdEmbrace_OffSpecRoll()</code> and hides the item frame.
1.* On Enter: Displays tooltip with details about off spec rolls.
# **Greed Button (<code>GreedFrameCE</code>)**:
1.* On Click: Calls <code>ColdEmbrace_GreedRoll()</code> and hides the item frame.
1.* On Enter: Displays tooltip with details about greed rolls.
# **Transmog Button (<code>XmogFrameCE</code>)**:
1.* On Click: Calls <code>ColdEmbrace_XMogRoll()</code> and hides the item frame.
1.* On Enter: Displays tooltip with details about transmog rolls.
# **Pass Button (<code>PassFrameCE</code>)**:
1.* On Click: Hides the item frame.
1.* On Enter: Displays tooltip stating that it will close the loot window.
  -Miscellaneous**
- Functions also handle tooltips for buttons, display updates, and response behaviors based on various in-game events (e.g. receiving resurrection requests or specific chat messages).

## Changes
- Fixed codestyle: Removed all trailing spaces
- Added a new command to test roll frames locally: /ce test
- Removed the "CE_Roll:" text from the item name inside the roll window
- Added generic function to display backdrops/borders
- Big UI Code cleanup
  - Fixed wrong parents of all buttons
  - Removed obsolete workaround functions to hide buttons
  - Created a separate text frame to show items
  - Fixed button position and frame sizing
  - Added Window/Button Backgrounds
- Added support for pfUI themes
- Update dependencies to guarantee proper load order
- Preload roll window already on login
- Get rid of obsolete individual draw functions
- Fix window position not being saved across sessions
- Make sure the window can't spawn off-screen
- Removed old/obsolete UI code
- Fixed roll values for people outside the guild *(aligned to values of people without officer notes: 0-100 MS and 0-70 OS)*
- Organized and unified all roll strength calculations
- Adjusted button color and hover effects
- Added proper item name and rarity border color
- Added a slash command to switch between 3 skins
- Now only update the item info when the item changes
- Updated skin system to use highlight textures
- Removed duplicate font and increase window size
- Added tooltip information to every roll button
