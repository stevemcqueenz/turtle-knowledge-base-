---
title: "RecipeRadar"
url: "https://turtle-wow.fandom.com/wiki/RecipeRadar"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-03-16T12:08:42Z"
fetched: "2026-09-10T07:39:28Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# RecipeRadar

Recipe Radar is a World of Warcraft UI add-on that assists players in finding recipes. It knows about vendors who sell recipes in the current region or by profession. It has a number of filtering options and can even locate vendors on the world map.

## How to Install
Download the [Zip](https://github.com/laytya/RecipeRadar-vanilla/archive/refs/heads/master.zip). Then copy the "RecipeRadar" folder and add it to your Twow/Interface/AddOns folder.

## Git Links
[**(laytya)**](https://github.com/laytya/RecipeRadar-vanilla)

## Preview
## Commands
/rrdr

When you get in game, you may want to map a key to toggle Recipe Radar. You should be able to find the option to do this in your Key Bindings menu, all the way at the bottom.  Otherwise, you can hit the new icon on your mini-map to open Recipe Radar or use the slash command.

## Contributors
- Jay Miller (Author)
- [laytya](https://github.com/laytya) (vanilla port)

## ChangeLog
  -v1.15.1; 22.10.2022**

- Fixed minimap button placing.

  -v1.15; 3.02.2017**

- Added square minimaps support for icons on minimap & for minimapbutton
- Fixed first startup errors
- More support for MBB

  -v1.14; 2.02.2017**

- Added MBB compatibility (better mini-map button management),
- Added RUru localization by Maus.
- Backported some fixes from original 1.14 release.

  -v1.11; September 18, 2006**

- Fixed item linking bug (thank you, TDurden!).
- Fixed a bug that could occur for unlucky Dragonscale/Elemental LW'ers and Armorsmiths (thank you, Arilaw!).

  -v1.10; September 16, 2006**

- I'd forgotten to enable specialization checking!  It should now work.
- Auctioneer and Recipe Book are now supported in the recipe icon mouseover.  Thanks very much to borohir for this functionality!

  -v1.9; September 5, 2006**

- Recipes names are now cached when learned.  This should make new Blizzard patches less of a hassle.
- Availability checking now takes faction reputation and trade skill specialties into account.
- Adjusted some vendor information.
- Reduced memory usage significantly.

  -v1.8; July 11, 2006**

- Several new German region names were missing in v1.7.  Hopefully they are all correct now.
- Adjusted some vendor information.

  -v1.7; June 24, 2006**

- Fixed the nasty profession selection bug for non-English versions.
- Profession icons should now show up for non-English versions.
- Unlearning a profession should now be handled correctly.
- Fixed several new 1.11 German region names.
- Added the new 1.11 Cenarion Circle recipes.
- Several vendors were incorrectly marked as Alliance-only (thank you, Howlin!).

  -v1.6; June 21, 2006**

- Added a right-click context menu to the scroll frame.  From this
- Menu users can map vendors and expand/collapse all items.
- Fixed bug causing non-English profession stuff to suck (thank you ElKano and Jeremy Gurr!).
- Alts of a different team should no longer appear in the availability list.
- Adjusted the German translation.
- Adjusted some vendor locations.

  -v1.5; May 11, 2006**

- All recipes that are named differently after learning (eg. transmutes)
- Should now show up correctly as known or not.  This applies, in theory, to all locales.
- Revamped the filtering code and fixed filtering, I hope, for non-
- English versions.
- Non-applicable professions and known recipes are now different filtering
- Categories in both availability modes.
- Fixed the incompatibility with Metamap, more or less.
- Tweaked the German translation and some vendor locations.

  -v1.4; May 7, 2006**

- Revised German translation (thanks to DJMars and Elkano!).
- Drop-down filters are now effected every time Recipe Radar is opened.
- Filters should now work much more intuitively.
- Fixed a bug that sometimes caused an error message on startup and/or
- Zone changes.
- Changed Alliance color to blue.
- Added a couple of missing vendors/recipes and improved the positions of
- Several others.
- Enchant Bracer - Healing should now show up correctly as known or not.

  -v1.3; April 29, 2006**

- Fixed a bug that was preventing about half of the maps from displaying
-  On non-English clients.
- Adjusted some vendor locations.

  -v1.2; April 28, 2006**

- Fixed chat message parsing bugs in non-English versions.
- Added an option to auto-map (but not auto-unmap!) contributive vendors.
- Added the number of learnable recipes to mapped vendor tool-tips.
- Changed the '/rr' slash command to '/rrdr'.
- Map tool-tips will hopefully no longer run off the screen.

  -v1.1; April 27, 2006**

- Added support for the frFR locale. (I hope it works..)
- Added the ability to view regions other than the current region.  The
- Relevant settings now appear in the Options frame.
- Instance vendors can no longer be mapped.
- Non-English versions should now be able to use the dropdowns (I hope).
- Now accounting for WoW's "Mithril Head Trout" bug - it should now show
- Up correctly as known or not.

  -v1.0; April 24, 2006**
