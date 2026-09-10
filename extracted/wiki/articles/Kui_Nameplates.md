---
title: "Kui Nameplates"
url: "https://turtle-wow.fandom.com/wiki/Kui_Nameplates"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-11T04:58:34Z"
fetched: "2026-09-10T07:39:05Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Kui Nameplates

Kui-Nameplates offers a sleek and customizable interface for nameplates, showing important information such as enemy casting.

## How to install
Download this add-on only from [**releases**](https://github.com/laytya/Kui-Namaplates/releases). 

Then copy and paste these folders into the Turtle/Interface/Addons folder:

- FuBar_KuiNameplates
- Kui_Media
- Kui_Nameplates
- Kui_Nameplates_Auras

**Important** - If you got ShaguTweaks you need to turn off nameplate scale and nameplate class colors in advanced options.

## Git links
[**(laytya)**](https://github.com/laytya/Kui-Namaplates/releases)

## Commands
- Use /kuinameplates or /knp to open options.
- Click V to show enemy nameplates.
- Click CTRL+V to show nameplates for all NPCs and players (enemies and allies).
- Click Shift+V to show only friendly NPCs/players.

## Preview
## Contributors
- Kesava (author)
- [laytya](https://github.com/laytya) (vanilla port)

## Changes
**beta 0.16**
- Reworked options GUI (ACE3 dialogoptions updated)
- Added offtanks tracker to tankmode
- small updates
- Added libs (submodules removed) to git so you can use [CODE] button and gitaddonmanager again.

**beta 0.16**

- Added the mechanics of recognizing interrupts from all cast fails

**beta 0.14**

- Fixed support for latest SuperWOW 1.5+

**beta 0.11**

- Added options for raid icon
- Added castwarning module
- Added healer mod to tankmodule

**beta 0.10**

- Cleanup,
- tuned tankmod,
- added some textures to media

**beta 0.9**

- some beta updates including 
  - superwow support,
  - tankmod
  - support RAW mod combatlog for reach auras on nameplates
  - Added target arrows

**Beta 0.7**

- Added some Zorlen workaround
- Added support of enemybuffs from classic

**Beta 0.6**

- Added Click Through functionality

**Beta 0.5**

- Fixed Rapture spell gives error
- Added pets to NameOnly nameplates

**Beta 0.4b**

- Fixed - pet bar not working (ACE3 Cursor lib)

**Beta 0.4**

- Added critters
- Fixed [#1](https://github.com/laytya/Kui-Namaplates/issues/1)
- Many fixes of aura logic
- Added some missing auras
- Fixes timers of sunder, roots, polymorph
- Fixes for classcolor delay
- Updated LibBableSpell-3.0

**Beta 0.3**

- Updated callbacks in UnitCasting lib
- Switched to LibBabble-Spell-3.0
- Cleanup libs

**Beta 0.2**

Reworked UnitCasting Lib:

- Added Buffs.
- Added many spells.
- Added callbacks for many events such NewBuff or NewCast

- Fixed cast-bar to work w/ new UnitCasting
- Added working auras
- Added special look of Totems
- Added Rare & Elite marks

**v 0.1**

- First release of ported Kui-Nameplates
- May have bugs, so issues are welcome
