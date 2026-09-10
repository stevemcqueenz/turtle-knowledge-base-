---
title: "Chronometer"
url: "https://turtle-wow.fandom.com/wiki/Chronometer"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-10T08:06:01Z"
fetched: "2026-09-10T07:38:31Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Chronometer

-Chronometer** is an add-on that tracks the effects of spells you cast, including healing over time (HoTs), damage over time (DoTs), buffs, and debuffs. It provides clear visibility of the remaining duration of your spells, allowing you to know when they are about to fade. This enables you to recast spells or take any necessary actions in a timely manner. Chronometer is built on the Ace2 framework and utilizes CandyBar for its timer bars.

## How to install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the Chronometer-master folder to Chronometer
# Restart the game

## Git links
- [**(Judo101)**](https://github.com/Judo101/Chronometer) - this fork you need to rename the Chronometer-master folder to Chronometer
- [**(MrBoxie88)**](https://github.com/MrBoxie88/Chronometer-TWoW) - this fork you don't need to rename you just move the Chronometer-TWoW folder into TWow/Interface/AddOns

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/chron config 
|Shows a GUI configuration for Chronometer
|-
|/chron anchor 
|Shows or hides the anchor to which Chronometer's timer bars are attached
|-
|/chron bar 
|CandyBar display options
|-
|/chron bar scale 
|Sets the scale of Chronometer's timer bars
|-
|/chron bar growth 
|If toggled true, Chronometer's bars appear above the anchor and grow upwards. If toggled false, Chronometer's bars appear below the anchor and grow downwards.
|-
|/chron bar texture 
|Sets the texture used for the bars
|-
|/chron bar reverse 
|Toggles reversing the bars (filling up instead of emptying out).
|-
|/chron bar bgalpha 
|Sets the transparency of the bar background.
|-
|/chron bar bgcolor 
|Sets the color of the bar background.
|-
|/chron bar color 
|Sets the default bar color (may be overridden for certain spells).
|-
|/chron bar height 
|Sets the height of the bars.
|-
|/chron bar text-color 
|Sets the color of the bar text.
|- 
|/chron bar text-size 
|Sets the size of the bar text.
|-
|/chron bar width 
|Sets the width of the bars.
|-
|/chron bar text 
|Sets the text to be displayed on the bar. Use $s for spell name and $t for the target's name.
|-
|/chron test 
|Runs some test bars so that you can adjust the other options more easily
|-
|/chron kill 
|If toggled true, Chronometer will stop bars when the NPC or player the spell was cast on dies. When there are multiple NPCs with the same name, this becomes very inaccurate, since it has no way of knowing if the one that died was the same one that you cast the spell on initially. If toggled false, deaths will not stop bars.
|-
|/chron fade 
|If toggled true, Chronometer will stop bars when the spell fades from the NPC of player it was cast on. As with the kill option, multiple NPCs with the same name will make this option less accurate.
|-
|/chron ghost 
|Sets the amount of time that "ghost" bars stay around. This is useful for seeing which spells have recently faded, and allows you to more easily recast the spell using Chronometer's bar-click functions.
|-
|/chron self 
|Toggles bars for spell duration's on the player. Some people didn't want to see these, since they already use another add-on like EBB to give them self-buff/de-buff bars.
|}

  -Clicking**

Clicking on the Chronometer Bars

- **Right-clicking** a Chronometer bar will force the bar to disappear - especially useful if you use long de-buffs like Curse of Shadows and leave the /chron kill option off to avoid issues with duplicate NPC names.
- **Left-clicking** a Chronometer bar will recast the spell on the bar's target. If the target is an NPC and there are other NPCs nearby with the same name, Chronometer has no way to distinguish between them, so do so at your own risk.
- **Middle-clicking** a Chronometer Immolate bar will cast Conflagrate on the bar's target. Again, duplicate NPC names can cause problems with this.
- **Middle-clicking** a Chronometer Rejuvenation or Regrowth bar will cast Swiftmend on the bar's target.

## Preview
Timer Bars:

 

Options: 

## TODO
- Go through and make sure that all spell timers are accurate
- Add rogue poisons
- Add bar disappearance on totem death
- Add pet spell-casts (Intimidation, Seduce, etc.)
- More color for bars (by spell school or by buff/de-buff)
- Sort options, something like PerfectRaid's sort functionality. (duration, target, remaining, spell-name, buff, de-buff, etc.)
- Handle diminishing returns
- Get more tricky about distinguishing NPCs with the same name (raid targets, perhaps?)
- Items (Net-o-Matic, Mind Control Cap, etc.) (no rush on this one)
- Better solution for event-based bars

## Contributors
- Bhattu (author)
- [Laytya](https://github.com/laytya) (fixes)
- dein0s (fixes)

## Changes
- Fixed SnD timers to work in KRONOS (LaYt)
- Fixed #1 "Bars not disappearing after kill"
- Added ruRU locale
  -v0.10.3**
- Updated libs
- Reorganized timers
- Fixed mage timers
  -v0.11.0**
- Added waterfall lib and options frame using it
- Added Blizzard timer for mages
- Small fixes
- Added mini-map or Fubar button 
  -v0.11.1**
- Fix onClick remove bar functionality
- Update libs
  -v0.12**
- Added options vertical space between bars & icon position (left/right)
- Ported TBC CandyBar lib
- Added some new textures for bars
- Reworked options to look better in Waterfall
- Added Right-click Mouse-look feature
  -v0.12.1**
- Added Rogue poisons support
- Libs update
  -v0.13**
- Added visibility configuration of spells in options by @dein0s
- Added Flurry timer by @dein0s
- Fixed Fire Vulnerability update mechanics
- Added some SPD trinkets timers & Crusader proc
