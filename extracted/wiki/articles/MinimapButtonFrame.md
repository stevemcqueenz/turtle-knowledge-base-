---
title: "MinimapButtonFrame"
url: "https://turtle-wow.fandom.com/wiki/MinimapButtonFrame"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-03-20T09:47:07Z"
fetched: "2026-09-10T07:39:15Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# MinimapButtonFrame

This add-on gathers up all of your mini-map add-on buttons and puts them into a movable frame.

## How to Install
# [**Download**](https://github.com/laytya/MinimapButtonFrame-vanilla/releases/latest) and extract the archive.
# Copy "MinimapButtonFrame" folder into your "twow/Interface/Addons/" directory.
# Optionally (if you have [**FuBar**](https://github.com/laytya/Vanilla-Addons/blob/master/FuBar%2Bplugins.zip)) copy "MinimapButtonFrameFu" folder into your "twow/Interface/Addons/" directory.

## Git Links
[**(laytya)**](https://github.com/laytya/MinimapButtonFrame-vanilla)

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/mbf
|Displays the command line options in the chat frame 
|-
|/mbf add 
|Adds a non gathered button under the mouse to the frame 
|-
|/mbf remove
|Removes a gathered button under the mouse from the frame 
|-
|/mbf show   
|Shows the Main MBF Frame 
|-
|/mbf hide   
|Hides the Main MBF Frame 
|-
|/mbf info   
|Shows information about the object under the cursor 
|-
|/mbf scan   
|Performs a manual scan for minimap buttons 
|-
|/mbf config 
|Shows the configuration screen 
|-
|/mbf help   
|Shows command help and information
|}

Blizzard mini-map buttons that are not always visible (Battleground, LFG) will only appear on the frame when they are normally shown. If Active Scanning is off they will not be gathered unless you do a /mbf scan while they are visible.

## Preview
Option:

MBF Frame:

## Contributors
- Bachlott (author)
- [laytya](https://github.com/laytya) (vanilla port)

## History
**v1.12**

- Updated to TWoW 1.17.2

**v1.11**

- Added Auto Hide functionality
- Added TWoW buttons
- some fixes

**1.10e**

- Added support for EVTCalendar

**1.10d**

- Separate FuBar plugin (need translation of locales differ enUS and ruRU)

**1.10c**

- Added ItemSync compatibility
- Added DPSMate button to default auto include, if it not gathering by MBF use /mbf add command

**1.10b**

- fixed finally MiniMapTrackingFrame error

**1.10a**

- fix MiniMapTrackingFrame error
- fix some interaddon compatibility, dont use such names:  "minimapButton"

**1.10**

- Backported to vanilla
- update TOC
- added ruRU locale
- minor fixes
