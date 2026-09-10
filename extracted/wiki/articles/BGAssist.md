---
title: "BGAssist"
url: "https://turtle-wow.fandom.com/wiki/BGAssist"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-17T06:49:57Z"
fetched: "2026-09-10T07:38:22Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# BGAssist

BGAssist is a comprehensive battleground helper addon designed to assist players during PvP combat. It provides features such as countdown timers, flag tracking, player counting, automated quest handling, minimap button, and more.

## Installation
# Click the **<> Code** and then Download directory <code>zip</code> to download the addon.
# Unpack the <code>.zip</code> and move the BGAssistRU folder into your <code>Interface/AddOns</code> directory 
# Restart the game.

## Git Links
- [**(CFM)**](https://gitlab.com/byCFM/Addons-for-Vanilla-1.12.1-CFM/-/tree/master/BGAssistRU?ref_type=heads)

## Features
Features Overview

- Timer Display: Visual timers for capturing points, graveyard respawns, and flag events.
- Flag Tracking: Shows current flag holder positions and updates on capture/drop.
- Player Counts: Displays counts of players per faction and class breakdown.
- Item Tracking: Tracks specific items like armor scraps, blood, and medals.
- Auto-Quest Handling: Automates quest turn-ins based on tracked items.
- Auto Sign-up & Entry: Automatically signs up and enters BGs based on configuration.
- Minimap Button: Quick access to addon features from the minimap.
- Dynamic Resupply & Flag Locations: Updates position info for flags and bases.
- Customizable UI: Lock, move, and hide windows as preferred.

## Usage
Usage Instructions

- Opening and Closing: Use the assigned keybinding or slash command (/bga) to toggle the main window.
- Timer Functions: Observe timers for graveyard respawn, flag events, and capture points.
- Flag Management: Click on flag icons to target the flag holder or to reset locations.
- Player Counting: View the breakdown of players in the battlefield by faction and class.
- Item Count: See current item counts for relevant quest turns and turn-ins.
- Auto-Quest: When near quest NPCs, auto-accept or turn in quests if enabled.
- Minimap Icon: Use the minimap button for menu access, move icon, or toggle features.
- Auto Sign-up & Auto Entry: When enabled, the addon manages signups and automatic entry into BGs, respecting pre-existing instance settings.

## Preview
Timers:

Options:

targets:

## Setup
Setup and Customization

- Initial Setup:
  - When first loaded, the addon initializes configuration variables.
  - To change window lock, minimap button, or other options, access the dropdown menu via the minimap icon.
- Moving Windows:
  - Unlock the window via the menu, then drag to position.
- Minimap Button:
  - Show or hide via slash command or menu.
  - Drag to reposition around the minimap.
- Color & Appearance:
  - Customize colors and sizes by editing the XML or in-game settings.
- Automatic Features:
  - Enable auto sign-up, auto enter, and auto quest turn-in in the options menu.

## Key Functions
Key Functions and How They Work

- BGAssist_LinkDecode(link): Extracts item ID and name from item links.
- BGAssist_BagCheck(): Counts items in player's inventory based on tracked items.
- BGAssist_CheckMap(): Updates control points, bases, and conflict states.
- BGAssist_Counts(faction): Calculates total points based on player ranks.
- BGAssist_Count(fr, raank): Displays player names for specific rank and faction.
- BGAssist_CountPlayers(): Counts players in the battlefield, updates UI.
- BGAssist_Alterac_SelectQuest(): Handles quest turn-ins automatically.
- BGAssist_SignUpForBG(): Signs up for BG via gossip options.
- BGAssist_AutoProcess(): Automates quest accept/complete based on current zone.
- BGAssist_CheckMap(): Updates control point statuses and timers.
- BGAssist_Timers_OnShow(): Initializes timers for capturing points and graveyard respawn.
- BGAssist_UpdateTimers(): Updates countdown bars for points, flags, and graveyard timers.
- BGAssist_LocateFlags(chatmsg): Detects flag pickup/drop events via chat messages.
- BGAssist_Flags_OnClick(override): Targets flag carrier or resets flag info.
- BGAssist_UpdateTargets(): Finds nearby attackable targets, updates UI.
- BGAssist_Targets_OnShow(): Initializes target info window.
- BGAssist_Target_OnClick(): Targets selected unit.

## FAQs
- Q: How do I toggle the main window?
- A: Use slash command /bga or assign a keybinding for "Toggle BGAssist Window".
- Q: How does auto sign-up work?
- A: When enabled, the addon will automatically register your character for BGs upon queue availability, unless pre-existing instance avoidance is active.
- Q: How can I move the timers window?
- A: Unlock the window via the dropdown menu, then drag to desired position.
- Q: How do I enable/disable the minimap button?
- A: Use /bga or the menu to toggle the minimap icon.
- Q: How does flag tracking work?
- A: Click the flag icons to target or reset holder info, or view current flag status in the flags window.
- Q: How can I customize colors or appearance?
- A: Edit the addon XML or in-game options if provided.
