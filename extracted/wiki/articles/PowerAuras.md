---
title: "PowerAuras"
url: "https://turtle-wow.fandom.com/wiki/PowerAuras"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-28T12:30:12Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# PowerAuras

This mod was made to have better visibility when you get buffs or debuffs. Very useful for short buffs or debuffs, it allows you to have in the center of the screen, or around your character, very customizable visual effects, instead of constantly looking at the other side of the screen to see if you have a buff or a debuff on you. Originally made to have better visibility on the shorter buffs like "Clearcasting" or a boost trinket you activate, it now works with debuffs (whatever they're called) and also debuff types like Magic or Curse.

## How to install
Download from [**releases**](https://github.com/laytya/PowerAuras-vanilla/releases). then just copy "PowerAuras" folder to your addon's directory.

## Git links
[**(laytya)**](https://github.com/laytya/PowerAuras-vanilla/releases)

## How to use
- Type /powa to open the effect editor, then you can choose the texture to apply to the effect, the position, the size, the symmetry, etc...
- Then, enter the name or a part of the name of the buff / debuff (ex: if you try to activate the visual effect on "Clearcasting", you can enter only "Clear" in the name of the buff).
- The Mod will take care to show the effect where you wish and to remove it when the buff is finished.
- You can so easily change the 100 available textures or add new ones.

## Preview
## Contributors
- Sinsthar (author)
- [LaYt](https://github.com/laytya) (continued)
- [shikulja](https://github.com/shikulja) (Russian localization)

## Updates
**Version 2.21**

- Added combat status check - just type "combat" in buff name field

**Version 2.20-vanila** 

- Added weapon enchant, you can use weapon enchant name as buff. if you add 'main' or 'off' words, it will look in specific slots.
- Back-ported image auras from newest mod, so you can use up to 50 ones. Don't forget to adjust number in advanced options.

**Version 2.10** 

- Added a button "+" to easily add more effects 
- Added a button "-" to clear all unused effects and sort the other by type 
- You can now move the effects with more precision and anywhere one the screen (or outside ;)
- Added a way to ignore or not the upper/lowercase of buffs/debuffs names (fixing some bugs in non-latin versions of the game) 
- Added two new animation's options : "Begin animation" and "End animation", allowing more cool effects combinations 
- Changed numbers of animations by names 
- Finally, added the 10th animation 
- Added a option to show the 2 shortest timers for both buffs and debuffs 
- Visual upgrade of the option interface 
- Useless option "Quick Hide" as been removed 
- Advanced command line parameters removed (no more used) 
- Finally, fixed the bug which cause some effects beeing randomly activated or deactivated 
- Some minor animation bugs fixes 

**Version 2.01** 

- Added a timer for debuffs and debuff types (and more functions)
- Added the option "animation speed" for all effects
- Added the option "animation duration", if you want an effect to be hidden after some time
- Added the option to show the effects only when buff/debuff are not active
- Added an option to easily change the number of textures available to the Mod
- Fixed a bug causing incorrect display of debuff types on non-english versions of the game
- Fixed a bug not allowing to save the maximum number of texture correctly

**Version 1.12b** 

- Added 5 textures and 3 animations (don't overwrite your textures if you modified or created new ones)
- Added a movable timer for buffs (debuffs in a future version). This timer will always show the remaining time of the shortest buff.
- You can now increase the maximum number of effects to 100 (with the command /powa maxeffect)
- You can enter several names of buffs/debuffs on a single page of effect, if you separate them by "/" (ex: Fortitude/Mark of the wild)
- You can activate a type of debuff which isn't a Magic, Disease... with the word "None" (the effect will show if the debuff has no particular type). Furthermore, you can enter multiple type of debuffs to the "Name of the debuff" (to track Poison and Disease for example).

**Version 1.12a** 

- Fixed a problem with memory usage, it should work great now

**Version 1.12**

- Added the possibility to save yours effects in a list common to all the characters, juste click the button "List"
- Added advanced options, available by typing : / powa help
