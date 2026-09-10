---
title: "[Add-on] Introducing MetaHunt"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24110"
topic_id: 24110
forum_id: 45
forum: "Hunter"
author: "Metasploit"
author_authority: "player"
posted: "2026-02-27T19:09:00Z"
last_post: "2026-03-11T08:13:00Z"
post_count: 18
pages: 1
fetched: "2026-09-10T08:10:10Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Add-on] Introducing MetaHunt

## Post 169538 by Metasploit — 2026-02-27T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169538#p169538 | page 1 | era: 1.18.1-announced-pre-release -->

**MetaHunt**
 *Twow Hunter's Toolkit*

![Image](https://i.ibb.co/35r5MRkC/image.png)

Hey fellow hunters

Here's a project I have been working on for some weeks and I am happy with the results so its time to release it.

MetaHunt is an addon 100% Hunter and 100% Turtle WoW. English-only atm.

It ships with large datastore of twow data, revives some old good but broken addons (zHunterMod and Feed-O-Matic), and introduce never seen ammo management and pet-centric features.

---
Twow Data

Metahunt ships with a large up-to-date datastore containing all Turtle WOW data a hunter needs :

- All beasts, their location, and the abilities they can learn you
- All Pet families, their abilities and their diet
- All pet abilities ranks
- All ranged weapons, Arrows, Bullets, Quivers and Pouches.
- All Stable, Hunter and Pet Masters
- All Ammo vendors

---
Smart Ammo

- Auto swap your main ammo to junk ammo for shots that doesn't scale on damage, and re-equip you main ammo right away. Don't waste your Doomshots on nothing anymore, save money ! Just make sure you have some rough arrows in your quiver.
- Auto equip another ammo instantly during combat whenever you get out of your current ammo.
- Auto equip the right ammo when you swap from a bow/xbow to a gun and the other way around.

---
Tooltips

Get enhanced mouseover tooltips on :

- Beasts : Shows which abilities a beast can teach. They appear green if you already know them, and red if not.
- Vendors : Shows if a vendor sells Arrows and/or Bullets.
- Your pet : Shows your pet's XP, loyalty, happiness and how much you fed it this session.

---
zBouttons

Old zHunterMod addon on steroids. Fully compatible with Twow, and enhanced with new functionalities

- zAmmo : Track all your ammo Live and swap them in a click or bind
- zPet : collapsible pet Bar regrouping all pet spells and providing an intelligent parent button that always shows you the right spell to use depending on the situation
- zTrack: All your trackings in one collapsible bar
- zAspect: All your Aspects in one collapsible bar, the parent toggle from your primary choice to your 2nd
- zRanged : All the ranged weapons currently in your bags to swap them fast
- But also zMounts, zToys and zCompanions.
[![Image](https://i.ibb.co/dJW0zwMq/zbars.png)](https://imgbb.com/)

---
Feed-O-Matic

Now compatible with Turtle, feed your pet with one key bind, it will always pickup the best food for your pet.
 *Note that I haven't reviewed at all all cooking/quest/bufffood stuff because I am lacking the necessary data. The Turtle  DB is just impossible to fetch on food in the actual state.*

---
Chronometer

The good old Chronometer addon, purged of non-necessary things, dealing with all hunters spells and HL trinkets and reconfigured for a pure hunter use.

---
Autobuy

Define your own simple rules to auto buy ammo and/or pet food when you open a vendor that sells anything of it

---
ICU (I see you)

Old addon used to display Targets' enhanced information when you click on your minimap tracking things. MetaHunt offers many more customization options for it.

---
Auto-Quest

Just spam SHIFT-click on the NPC to validate quests Scorpok and Thorium arrows. Additionally you can have an enhanced tooltip that display your actual Scorpok-related items when you mouseover the mobs involved.

---
The Great Book of Huntards

The book of Hunters is the main GUI of MetaHunt, it allows to display the data constantly collected about you and your pet, and browse the addon's data to find anything a Hunter needs.
- Browse the Metahunt datastores of NPCs (Beast, vendors, masters) and open the map to locate them like in pfQuest
- Track all info about the pet abilities that you know and don't know yet
- Track all info about your stabled pets
- Keep an history of all your pets after you abandon them or if they run away.
- Get all info about ranged weapons, ammo ad ammo bags currently in the game.
[![Image](https://i.ibb.co/Sq52mCs/book1.png)](https://ibb.co/VXJdC4j)

[![Image](https://i.ibb.co/gFJdvZ7Z/book2.png)](https://ibb.co/qFpC0YnY)

[![Image](https://i.ibb.co/xSMk51T2/book3.png)](https://ibb.co/mCHjz9WR)

[![Image](https://i.ibb.co/wF0m93mn/book4.png)](https://ibb.co/C31GkNGj)

---
Small glimpse at the option panel....
[![Image](https://i.ibb.co/wZY7TkrM/options.png)](https://ibb.co/7xbQHfN2)

You can download it on GitHub, and as usual, remove the "-master" from the folder name.
<https://github.com/DuvelCorp/MetaHunt>

Have a nice hunting session.

*Last edited by Metasploit on Mon Mar 09, 2026 12:58 pm, edited 10 times in total.*

## Post 169539 by Metasploit — 2026-02-27T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169539#p169539 | page 1 | era: 1.18.1-announced-pre-release -->

**Credits**

This addon is, in others, a compilation of old vanilla addons that I loved and played with during years. But most of them had become very buggy with TwoW as new contain was added to the server.

I fixed, reworked, enhanced, and melted them within a modern modular framework that I created.

I want to make it crystal clear about what work is mine, and what is not and respectfully credit the original authors for the great stuff I've taken from them

 **About the code**

- zBars, Antidaze and Autostrip were core functionalities of Vanilla [zHunterMod](https://www.wowinterface.com/downloads/info6598-ZHunterMod.html) addon. And I kept the "z" naming of bars/buttons to always remember it. On top of this I have created myself zAmmo, zRanged, zCompanions, zMount, zToys.
Also the SmartAmmo swap-junk feature idea is coming from Zhuntermod: there was a file in it with that functionality, but was like a work-in-progress, totally unfunctional and even "dangerous" in its current state, and was not active in the addon. Since it was a fucking great idea, I recoded it mostly from scratch and made it work reliably and safely.
- [Feed-o-Matic](https://www.wowinterface.com/downloads/info4160-FizzwidgetFeed-O-Matic.html) was entirely the work of Fizzwidget. I made it work for Twow, by melting it as a module calling Metahunt core to get pet's state and up-to-date data for new pet families and their diet.
- Tooltips module is based on [Hunter Helper](https://legacy-wow.com/vanilla-addons/fizzwidget-hunter-helper/), another vanilla addon of Fizzwidget. I kept the general idea, but there's not much original code left from it in Metahunt as I refactored everything so it plugs on MetaHunt controlled event handlers, can work with Turtle wow data, and is now usable on other things than Beasts.
- **Chronometer** was an old and very popular vanilla addon working with ACE2 libraries. It has known uncountable iterations by various people over the years, and I can't credit them all of them here. The current version used by Metahunt is based on [this Twow conversion made by "wigan91"](https://github.com/wigan91/Chronometer-TWoW). I have reworked it to have it Hunter-focused-only: removed the non-hunter/race stuff, added hunter trinkets, improved the definition for spells/effects config that were not correct, added missing hunter spells (not many), and implemented my own bar color scheme fitting better the hunter spells.
- The Map/Marker system is the one of pfQuest from Master Shagu. Unfortunately he is no more reachable for some months and I could not have some talk with him about this. I mostly let it untouched, I just made slight modifications so it can integrate better within Metahunt, and doesn't conflict with pfQuest.
- The system allowing to fetch itemlinks in game (In the Weapon tab of the Hunter Book notably) is the one of [Atlas Twow](https://github.com/Otari98/Atlas).
 **About data sources**

Metahunt ships with its own Turtle-WoW datastores, limited to hunter stuff only, and most of this data is up-to-date (Feb 2026).

Sources used to build the data include:

- pfQuest for Beasts and Ammo vendors NPCs and their spawn points (and beasts respawn times if any). Thank you again Shagu.
- [This invaluable and very accurate spreadsheet](https://docs.google.com/spreadsheets/d/1NbwgI9kuGvAXlfD-tpoXZ2VMwtsUBwPMhI1yrQKgeaU/edit?gid=0#gid=0) for beasts having pet abilities. A big thanks to **Destrose** that crafted this! The Great Book of Huntards is great and accurate also because of YOU.
- Atlas twow for ranged weapon sources
 **With that being said, go back hunting fellas!**

Metasploit <Atlantis>, of Nordaanar.

*Last edited by Metasploit on Wed Mar 04, 2026 4:54 pm, edited 4 times in total.*

## Post 169542 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-27T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169542#p169542 | page 1 | era: 1.18.1-announced-pre-release -->

this is pretty cool. thank you for sharing. i think there is something wrong with these buttons. i can't seem to move them with alt + drag like it say in the tooltip.

![Image](https://i.ibb.co/dJW0zwMq/zbars.png)

## Post 169543 by Metasploit — 2026-02-27T20:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169543#p169543 | page 1 | era: 1.18.1-announced-pre-release -->

> **basednoob wrote: Fri Feb 27, 2026 8:06 pm**
> this is pretty cool. thank you for sharing. i think there is something wrong with these buttons. i can't seem to move them with alt + drag like it say in the tooltip.

Alt-LeftMouseButton drag on the parent button (circled) doesnt work?
Tested it a million times !

Try a /reload

*Last edited by Metasploit on Tue Mar 03, 2026 8:54 pm, edited 1 time in total.*

## Post 169544 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-27T20:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169544#p169544 | page 1 | era: 1.18.1-announced-pre-release -->

> **Metasploit wrote: Fri Feb 27, 2026 8:08 pm**
> > **basednoob wrote: Fri Feb 27, 2026 8:06 pm**
> > this is pretty cool. thank you for sharing. i think there is something wrong with these buttons. i can't seem to move them with alt + drag like it say in the tooltip.
> >
> >  ![Image](https://i.ibb.co/dJW0zwMq/zbars.png)
>
>   Alt-LeftMouseButton drag on the parent button (circled) doesnt work?
>  Tested it a million times !
>
>  Try a /reload

thanks. it started to work now.

## Post 169547 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-27T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169547#p169547 | page 1 | era: 1.18.1-announced-pre-release -->

i think maybe it could be because of this addon. <https://github.com/laytya/MinimapButtonFrame-vanilla>

## Post 169655 by Metasploit — 2026-03-01T08:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169655#p169655 | page 1 | era: 1.18.1-announced-pre-release -->

[New version](https://github.com/DuvelCorp/MetaHunt) available to fix several issues noticed after the first release

- Multiple changes to the addon to reduce its memory and CPU time footprint to the strict minimum possible.
- Restored FeedOMatic pet hunger notifications so hungry/very hungry warnings are emitted reliably again when enabled.
- Fixed Chronometer `Wing Clip` tracking by adding a safe fallback timer path for the missing trigger case.
- Fixed Chronometer `Quick Shots` bar icon by mapping the event to the correct icon texture.
- Fixed module enabled/disabled persistence to be truly per-character instead of account-shared.
- Fixed AutoBuy persistence fallback
- Consolidated FeedOMatic legacy persistence
- Switched Chronometer profile persistence to per-character module storage with one-time migration from existing account profile data.
- Switched Tooltips module options persistence to per-character module storage with one-time migration from existing account settings.

## Post 169680 by Gaz — 2026-03-01T17:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169680#p169680 | page 1 | era: 1.18.1-announced-pre-release -->

Been loving this addon thanks a ton Meta!

## Post 170114 by Metasploit — 2026-03-05T11:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170114#p170114 | page 1 | era: 1.18.1-announced-pre-release -->

[New version](https://github.com/DuvelCorp/MetaHunt) available !

This release fixes several bugs and adds missing pet data.

- Added missing abilities to all pet families.
- Rescraped from Twow DB the previously in correct `Roar of Fortitude` pet-ability.
- Fixed an issue with Tooltip on pet action bar abilities, that were falsely displayed as not learned yet for rankless abilities.
- Restored visible Stable Master auto-scan feedback (`Stable scan complete: X slot(s).`) when opening the stable window.
- Fixed stable scan icon persistence for active pets that were never stabled by capturing current-pet icon data during stable scans.
- Hardened stable-scan bootstrap to initialize on both `PET_STABLE_SHOW` and `PET_STABLE_UPDATE` event paths.
- Fixed issues with taming pet metadata that were not properly recorded since the last update.
- Fixed issues with pet runaway interception that was broken since the last update.
- Updated version-update notification text to include clearer upgrade guidance and plain GitHub URL text for updates.
- Fixed an issue with `zTrack` buttons spells being incorrect after having respec the talents using brainwashing device.

## Post 170116 by Baek (Patch Note Conspiracy Theorist) — 2026-03-05T11:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170116#p170116 | page 1 | era: 1.18.1-announced-pre-release -->

Thank you, kind man, that you are interested in our class. I would like to ask you to make a "Roots" prok on the trap and add, addon "ICU" but it is desirable to make green good, red evil on the mini map. I think you'll understand what I mean. Thank you for your understanding.

## Post 170124 by Metasploit — 2026-03-05T12:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170124#p170124 | page 1 | era: 1.18.1-announced-pre-release -->

> **Baek wrote: Thu Mar 05, 2026 11:50 am**
> Thank you, kind man, that you are interested in our class. I would like to ask you to make a "Roots" prok on the trap and add, addon "ICU" but it is desirable to make green good, red evil on the mini map. I think you'll understand what I mean. Thank you for your understanding.

Just saying... I main hunter since Feb 2005. Its my class :-)

Good idea for ICU. I didnt know this addon, found the description here <https://github.com/shanktank/icu> and its indeed a very interesting feature. I'll see if I can integrate i

I dont understand your "Roots prok on the trap" You mean in chronometer bars ??

## Post 170127 by Baek (Patch Note Conspiracy Theorist) — 2026-03-05T13:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170127#p170127 | page 1 | era: 1.18.1-announced-pre-release -->

> **Metasploit wrote: Thu Mar 05, 2026 12:42 pm**
> > **Baek wrote: Thu Mar 05, 2026 11:50 am**
> > Thank you, kind man, that you are interested in our class. I would like to ask you to make a "Roots" prok on the trap and add, addon "ICU" but it is desirable to make green good, red evil on the mini map. I think you'll understand what I mean. Thank you for your understanding.
>
>   Just saying... I main hunter since Feb 2005. Its my class :-)
>
>  Good idea for ICU. I didnt know this addon, found the description here <https://github.com/shanktank/icu> and its indeed a very interesting feature. I'll see if I can integrate i
>
>  I dont understand your "Roots prok on the trap" You mean in chronometer bars ??

Yes, that's right. There should be two time sensors after the trap is triggered and when someone gets into the roots.

## Post 170157 by Metasploit — 2026-03-05T17:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170157#p170157 | page 1 | era: 1.18.1-announced-pre-release -->

> **Baek wrote: Thu Mar 05, 2026 1:26 pm**
> Yes, that's right. There should be two time sensors after the trap is triggered and when someone gets into the roots.

Both your suggestions will be in next version ;) ICU will most probably be improved.

## Post 170212 by Baek (Patch Note Conspiracy Theorist) — 2026-03-06T12:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170212#p170212 | page 1 | era: 1.18.1-announced-pre-release -->

> **Metasploit wrote: Thu Mar 05, 2026 5:55 pm**
> > **Baek wrote: Thu Mar 05, 2026 1:26 pm**
> > Yes, that's right. There should be two time sensors after the trap is triggered and when someone gets into the roots.
>
>   Both your suggestions will be in next version ;) ICU will most probably be improved.

I tested the addon and found important comments, the time after the trap worked does not show correctly (photo in the attachment)

<https://iimg.su/i/QB25zm>

## Post 170268 by Gaz — 2026-03-07T07:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170268#p170268 | page 1 | era: 1.18.1-announced-pre-release -->

I'm getting 2 possible bugs, first is the pet history tab is not registering my current pet..does it only register pets you have abandoned maybe? 2nd is the pet skills for my crab just do not scan in I click scan from spell book but it just won't register that I have already learned Bubble Barrier. The tooltip also says I have not learned it but Claw does. Thanks!

## Post 170393 by Metasploit — 2026-03-09T12:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170393#p170393 | page 1 | era: 1.18.1-announced-pre-release -->

> **Gaz wrote: Sat Mar 07, 2026 7:56 am**
> I'm getting 2 possible bugs, first is the pet history tab is not registering my current pet..does it only register pets you have abandoned maybe? 2nd is the pet skills for my crab just do not scan in I click scan from spell book but it just won't register that I have already learned Bubble Barrier. The tooltip also says I have not learned it but Claw does. Thanks!

Should be fixed in this new release.

[UPGRADE to 1.1.0 !!!!!!!!!](https://github.com/DuvelCorp/MetaHunt)

Lots of fixes, improvements and 2 new Modules ICU and Auto Quest.

 **Added**
- Added new ICU module with dedicated options panel.
- Added ICU custom popup anchor mode with draggable anchor and direction toggle.
- Added ICU popup hide delay options (INSTANT, 1..10 seconds).
- Added new Auto Quest module for Salt of the Scorpok (Bloodmage Drazial).
- Added new Auto Quest module for Arrows Are For Sissies (Artilleryman Sheldonore).
- Added a Food Feed learning feature to Feed-O-Matic.
- Added Chronometer Entrapment effect tracking support.
 **Changed**
- Loads of Frame/Handlers/Processes adjustments to optimize addon's CPU time and Memory usage.
- Updated Chronometer Improved Wing Clip effect color to MAROON for clearer effect-bar distinction.
- Reworked Stable Master processing to minimize swap-time overhead.
- No auto-scan on PET_STABLE_SHOW.
- Deferred stable scan moved to PET_STABLE_CLOSED.
- Optional heavy workloads are skipped while stable UI is open.
- Changed Hunter Book page order, and default opening page to Beast Lore.
- Optimized Pet History result build/sort path using cached precomputed sort keys.
- Modules Auto-Buy, Auto-Quest, ICU, Feed-O-Matic are by default disabled on first use on a character.
 **Fixed**
- Fixed issues with zButtons, AutoStrip and Chronometer bar anchor not retaining their configured spawn position after disabling/re-enabling the addon.
- Fixed issues with options checkbox-state not always retaining their state on startup.
- Fixed multiple issues in Feed-O-Matic with some foods that were accepted by level 60 pets in Vanilla and are not anymore on Turtle.
- Fixed Chronometer spell/event disable toggles in options so disabled entries now reliably block bar creation.
- Fixed Chronometer Feed Pet bar missing trigger by adding UNIT_AURA fallback detection.
- Fixed stable swap stutter/freezes by removing heavy processing from repeated UNIT_PET bursts during stable interactions.

## Post 170452 by Baek (Patch Note Conspiracy Theorist) — 2026-03-09T21:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170452#p170452 | page 1 | era: 1.18.1-announced-pre-release -->

> **Metasploit wrote: Mon Mar 09, 2026 12:52 pm**
> > **Gaz wrote: Sat Mar 07, 2026 7:56 am**
> > I'm getting 2 possible bugs, first is the pet history tab is not registering my current pet..does it only register pets you have abandoned maybe? 2nd is the pet skills for my crab just do not scan in I click scan from spell book but it just won't register that I have already learned Bubble Barrier. The tooltip also says I have not learned it but Claw does. Thanks!
>
>   Should be fixed in this new release.
>
>
>
>  [UPGRADE to 1.1.0 !!!!!!!!!](https://github.com/DuvelCorp/MetaHunt)
>
>  Lots of fixes, improvements and 2 new Modules ICU and Auto Quest.
>
>  **Added**
> - Added new ICU module with dedicated options panel.
> - Added ICU custom popup anchor mode with draggable anchor and direction toggle.
> - Added ICU popup hide delay options (INSTANT, 1..10 seconds).
> - Added new Auto Quest module for Salt of the Scorpok (Bloodmage Drazial).
> - Added new Auto Quest module for Arrows Are For Sissies (Artilleryman Sheldonore).
> - Added a Food Feed learning feature to Feed-O-Matic.
> - Added Chronometer Entrapment effect tracking support.
>  **Changed**
> - Loads of Frame/Handlers/Processes adjustments to optimize addon's CPU time and Memory usage.
> - Updated Chronometer Improved Wing Clip effect color to MAROON for clearer effect-bar distinction.
> - Reworked Stable Master processing to minimize swap-time overhead.
> - No auto-scan on PET_STABLE_SHOW.
> - Deferred stable scan moved to PET_STABLE_CLOSED.
> - Optional heavy workloads are skipped while stable UI is open.
> - Changed Hunter Book page order, and default opening page to Beast Lore.
> - Optimized Pet History result build/sort path using cached precomputed sort keys.
> - Modules Auto-Buy, Auto-Quest, ICU, Feed-O-Matic are by default disabled on first use on a character.
>  **Fixed**
> - Fixed issues with zButtons, AutoStrip and Chronometer bar anchor not retaining their configured spawn position after disabling/re-enabling the addon.
> - Fixed issues with options checkbox-state not always retaining their state on startup.
> - Fixed multiple issues in Feed-O-Matic with some foods that were accepted by level 60 pets in Vanilla and are not anymore on Turtle.
> - Fixed Chronometer spell/event disable toggles in options so disabled entries now reliably block bar creation.
> - Fixed Chronometer Feed Pet bar missing trigger by adding UNIT_AURA fallback detection.
> - Fixed stable swap stutter/freezes by removing heavy processing from repeated UNIT_PET bursts during stable interactions.

Hi, I'm testing new changes. The chronometer still doesn't work properly. Please add a checkbox to disable the annoying sound of arrows and ammunition. The tracking feature works great, but please add a notification to the desired chat. I couldn't figure out how to make the friendly NPCs appear in green on the minimap.

## Post 170565 by Baek (Patch Note Conspiracy Theorist) — 2026-03-11T08:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170565#p170565 | page 1 | era: 1.18.1-announced-pre-release -->

> **Baek wrote: Mon Mar 09, 2026 9:32 pm**
> > **Metasploit wrote: Mon Mar 09, 2026 12:52 pm**
> > > **Gaz wrote: Sat Mar 07, 2026 7:56 am**
> > > I'm getting 2 possible bugs, first is the pet history tab is not registering my current pet..does it only register pets you have abandoned maybe? 2nd is the pet skills for my crab just do not scan in I click scan from spell book but it just won't register that I have already learned Bubble Barrier. The tooltip also says I have not learned it but Claw does. Thanks!
> >
> >   Should be fixed in this new release.
> >
> >
> >
> >  [UPGRADE to 1.1.0 !!!!!!!!!](https://github.com/DuvelCorp/MetaHunt)
> >
> >  Lots of fixes, improvements and 2 new Modules ICU and Auto Quest.
> >
> >  **Added**
> > - Added new ICU module with dedicated options panel.
> > - Added ICU custom popup anchor mode with draggable anchor and direction toggle.
> > - Added ICU popup hide delay options (INSTANT, 1..10 seconds).
> > - Added new Auto Quest module for Salt of the Scorpok (Bloodmage Drazial).
> > - Added new Auto Quest module for Arrows Are For Sissies (Artilleryman Sheldonore).
> > - Added a Food Feed learning feature to Feed-O-Matic.
> > - Added Chronometer Entrapment effect tracking support.
> >  **Changed**
> > - Loads of Frame/Handlers/Processes adjustments to optimize addon's CPU time and Memory usage.
> > - Updated Chronometer Improved Wing Clip effect color to MAROON for clearer effect-bar distinction.
> > - Reworked Stable Master processing to minimize swap-time overhead.
> > - No auto-scan on PET_STABLE_SHOW.
> > - Deferred stable scan moved to PET_STABLE_CLOSED.
> > - Optional heavy workloads are skipped while stable UI is open.
> > - Changed Hunter Book page order, and default opening page to Beast Lore.
> > - Optimized Pet History result build/sort path using cached precomputed sort keys.
> > - Modules Auto-Buy, Auto-Quest, ICU, Feed-O-Matic are by default disabled on first use on a character.
> >  **Fixed**
> > - Fixed issues with zButtons, AutoStrip and Chronometer bar anchor not retaining their configured spawn position after disabling/re-enabling the addon.
> > - Fixed issues with options checkbox-state not always retaining their state on startup.
> > - Fixed multiple issues in Feed-O-Matic with some foods that were accepted by level 60 pets in Vanilla and are not anymore on Turtle.
> > - Fixed Chronometer spell/event disable toggles in options so disabled entries now reliably block bar creation.
> > - Fixed Chronometer Feed Pet bar missing trigger by adding UNIT_AURA fallback detection.
> > - Fixed stable swap stutter/freezes by removing heavy processing from repeated UNIT_PET bursts during stable interactions.
>
>   Hi, I'm testing new changes. The chronometer still doesn't work properly. Please add a checkbox to disable the annoying sound of arrows and ammunition. The tracking feature works great, but please add a notification to the desired chat. I couldn't figure out how to make the friendly NPCs appear in green on the minimap.

I watched version 1.2.0, I see the attitude to the addition with love. Please take into account my wishes in this message

