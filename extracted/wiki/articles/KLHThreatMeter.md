---
title: "KLHThreatMeter"
url: "https://turtle-wow.fandom.com/wiki/KLHThreatMeter"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-07T14:10:13Z"
fetched: "2026-09-10T07:39:03Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# KLHThreatMeter

KLHThreatMeter is a threat meter with sunders counter. This version of KTM uses the TWThreat API when available, and the 1.12 threat guessing code otherwise.

## How to install
# Download from **https://github.com/laytya/KLHThreatMeter/releases**
# Unzip the file.
# Delete the current KLHThreatMeter folder inside Interface/Add-ons if it exists.
# Move KLHThreatMeter into Interface/Add-ons

## Git links
[**(laytya)**](https://github.com/laytya/KLHThreatMeter/releases)

## Preview
## Commands
Some of this has been superseded by the GUI. There's a button for Master Target, enabled by default, and a button for Clearing the Raid Threat, disabled by default (click the options button then go to the raid tab, then click the checkbox to enable it).

- Type /ktm to print all the commands in chat.
- Type /ktm gui show to show the threat meter.
- Type /ktm autohide true to automatically show or hide the threat meter when you join or leave a raid
- Type /ktm version query or /ktm v q to check versions.
- Type /ktm version notify or /ktm v n to print out a message telling people with older version to upgrade.
- Target a boss and type /ktm mastertarget or /ktm mas to set a master target. Or type it with no target selected to clear master target.
- Type /ktm resetraid to clear everyone's threat.

## Changes
**17.40.250**
- Added support for TWoW Threat API
**17.39.243**
- Reworked mini-map button logic
- Added option to hide mini-map button
**17.39**
- Added KTM_PetMod
- Some small fixes
- Added mini-map button
- Reverted Execute multiplier to 1 by zelazrgn:
- Onyxia knock away threat reduction is corrected to a 25% reduction
- Small correction to Thunderfury threat values
**17.38**
- Added a fix for Essence of the Red by zelazrgn
**17.37**
- Added Sunder count for raid
- Some Bosses rework
- Fixed Onyxia on Everlook
- Added Execute multiplier (need test)
- Changed to 32 buffs
- Added ruRU support
