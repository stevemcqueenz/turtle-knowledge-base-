---
title: "🍕PizzaSlices (OPie Clone)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19173"
topic_id: 19173
forum_id: 18
forum: "AddOns"
author: "Pizzayo"
author_authority: "player"
posted: "2025-05-08T20:00:00Z"
last_post: "2025-05-22T17:43:00Z"
post_count: 27
pages: 1
fetched: "2026-09-10T10:25:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 🍕PizzaSlices (OPie Clone)

## Post 130243 by Pizzayo (Barrens Chat Casualty) — 2025-05-08T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130243#p130243 | page 1 | era: pre-1.18.1 -->

**![🍕](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f355.svg) PizzaSlices**

A radial action menu addon. Essentially a simplified OPie clone.

![Image](https://raw.githubusercontent.com/Pizzahawaiii/media/refs/heads/main/PizzaSlices/demo.gif)

Excited to share my new addon, PizzaSlices, with you. It allows you to create these smoothly animated radial action menus (rings) that you can fill with pretty much anything you want - abilities, professions, mounts, macros, raid marks, toys, companions. Each ring can be bound to a key. Holding down that key will open the ring at your current mouse cursor position, then you select one of its items (slices) with your mouse and letting go of the key again will trigger the selected action. For those of you who know the retail addon OPie, PizzaSlices is pretty much a simplified OPie clone.

[Get it on GitHub](https://github.com/Pizzahawaiii/PizzaSlices) and make sure to check the README for install/upgrade instructions, available commands and more information on how it works.

Latest version: 1.5.2 (12.08.2025)

As always, your feedback is much appreciated!

Pizzahawaii on Turtle Discord
Pizzahawaii / Pizzamista / Pizzapaws / Pizzapimp / Pizzapog on Nordanaar

Changelog

> v1.5.2 (12.08.2025)
> - Attempt to fix Bongos incompatibility

> v1.5.1 (02.08.2025)
> - Fix LUA error that (sometimes?) prevented items from being used through rings, e.g. hearthstone

> v1.5.0 (06.07.2025)
> - Add /ps open <ringIndex> command to open rings through macros
> - Add option to show macro names on open ring slices
> - Add option for black icon borders

> v1.4.5 (11.06.2025)
> - Fix: always save ring key bindings per character, not per account

> v1.4.4 (19.05.2025)
> - Allow adding Winterfall Jujus to rings
> - Minor internal fix to reduce amount of memory garbage created to check for version updates

> v1.4.3 (13.05.2025)
> - Fix bug that prevented you from casting spells with parentheses in their names, if added to rings from the PizzaSlices spell/slice browser in the settings (e.g. "Create Healthstone (Major)" or "Faerie Fire (Feral)")

> v1.4.2 (12.05.2025)
> - Fix bug that spammed you with LUA errors when trying to drag a spell from the spellbook into a ring

> v1.4.1 (12.05.2025)
> - Fix bug that completely broke the addon and spammed you with LUA errors if you don't have pfUI installed

> v1.4.0 (12.05.2025)
> - **Allow adding abilities/items to rings via drag-and-drop from spellbook/bags**
> - Add ability to cast lower spell ranks
> - Fix buggy behavior when/after removing slices from a ring in settings

> v1.3.0 (12.05.2025)
> - Add ability to **reorder ring slices via drag-n-drop** in the settings
> - Make slices slightly transparent while being dragged in the settings

> v1.2.1 (11.05.2025)
> - Fix bug where it wouldn't show spell or item cooldowns in some cases

> v1.2.0 (11.05.2025)
> - **Show cooldown timers** on ability and item slices
> - Fix bug where it wouldn't use items if the ring was bound to *Shift-<key>*

> v1.1.1 (10.05.2025)
> - Fix bug where settings wouldn't show some/most/any usable items when logging in for the very first time
> - Show full item tooltips in settings instead of just item names

> v1.1.0 (10.05.2025)
> - Allow adding **usable items** to rings (e.g. hearthstone, consumables, etc.)
> - Add new settings option to **change animation duration/speed**
> - Improve general settings layout a bit

> v1.0.2 (09.05.2025)
> - Fix "clear raid marks" slice when not using SuperWoW

> v1.0.1 (08.05.2025)
> - Fix LUA error "attempt to index global `PWB' (a nil value)" that appeared on login

> v1.0.0 (08.05.2025)
> - Initial release

*Last edited by Pizzayo on Tue Aug 12, 2025 2:27 pm, edited 20 times in total.*

## Post 130246 by Oomentaloo (Barrens Chat Casualty) — 2025-05-08T20:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130246#p130246 | page 1 | era: pre-1.18.1 -->

Even the beta was nice! Everybody loves Pizza <3

## Post 130247 by Pizzayo (Barrens Chat Casualty) — 2025-05-08T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130247#p130247 | page 1 | era: pre-1.18.1 -->

[Update] v1.0.1 (08.05.2025)

- Fix LUA error "attempt to index global `PWB' (a nil value)" that appeared on login

*Last edited by Pizzayo on Fri May 09, 2025 1:15 pm, edited 1 time in total.*

## Post 130256 by Pizzayo (Barrens Chat Casualty) — 2025-05-08T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130256#p130256 | page 1 | era: pre-1.18.1 -->

> **Oomentaloo wrote: Thu May 08, 2025 8:21 pm**
> Even the beta was nice! Everybody loves Pizza <3

No idea who you are on Disc, but thanks again for testing! I added a shoutout to all beta testers to the readme, hope I didn't forget anyone.

## Post 130285 by Oomentaloo (Barrens Chat Casualty) — 2025-05-09T09:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130285#p130285 | page 1 | era: pre-1.18.1 -->

> **Pizzayo wrote: Thu May 08, 2025 9:55 pm**
> > **Oomentaloo wrote: Thu May 08, 2025 8:21 pm**
> > Even the beta was nice! Everybody loves Pizza <3
>
>   No idea who you are on Disc, but thanks again for testing! I added a shoutout to all beta testers to the readme, hope I didn't forget anyone.

My forum name is slightly different. the "Oo" and "oo" are just for show :D

## Post 130306 by Pizzayo (Barrens Chat Casualty) — 2025-05-09T13:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130306#p130306 | page 1 | era: pre-1.18.1 -->

[Update] v1.0.2 (09.05.2025)

- Fix "clear raid marks" slice when not using SuperWoW

## Post 130309 by Frantsel (Patch Note Conspiracy Theorist) — 2025-05-09T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130309#p130309 | page 1 | era: pre-1.18.1 -->

This looks fantastic! Great work!

Would it be possible to make an addon like this for emotes?

I would absolutely love to see this <3

## Post 130313 by basednoob (Patch Note Conspiracy Theorist) — 2025-05-09T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130313#p130313 | page 1 | era: pre-1.18.1 -->

could also have a menu that pops up with different things in specific battlegrounds. to quickly give feedback on where the flag man is in WSG or incoming enemies in AB and so on. but that probably already exists too. they could also have alternating raid leader messages/strategies stored to inform pugs of specific raids or raid bosses.

## Post 130339 by Pizzayo (Barrens Chat Casualty) — 2025-05-09T17:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130339#p130339 | page 1 | era: pre-1.18.1 -->

> **Frantsel wrote: Fri May 09, 2025 1:53 pm**
> This looks fantastic! Great work!
>
>  Would it be possible to make an addon like this for emotes?
>
>  I would absolutely love to see this <3

> **basednoob wrote: Fri May 09, 2025 2:12 pm**
> could also have a menu that pops up with different things in specific battlegrounds. to quickly give feedback on where the flag man is in WSG or incoming enemies in AB and so on. but that probably already exists too. they could also have alternating raid leader messages/strategies stored to inform pugs of specific raids or raid bosses.

Both of these are technically possible already, you just have to create a bunch of macros and put them on PizzaSlices rings. Thanks for the feedback!

## Post 130413 by Rorquall — 2025-05-10T07:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130413#p130413 | page 1 | era: pre-1.18.1 -->

Hey

I really want to thanks you for this addon, you did a great work.
Is it possible to add the possibility to put the heartstone in please?

thanks again!

## Post 130416 by Pizzayo (Barrens Chat Casualty) — 2025-05-10T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130416#p130416 | page 1 | era: pre-1.18.1 -->

> **Rorquall wrote: Sat May 10, 2025 7:00 am**
> Hey
>
>  I really want to thanks you for this addon, you did a great work.
>  Is it possible to add the possibility to put the heartstone in please?
>
>  thanks again!

Thanks, glad you like it!

Yes, it’s on my roadmap. I will soon add support for any usable items from your inventory, including hearthstone but also things like (buff) food, elixirs, scrolls, rogue poisons.

## Post 130427 by Rorquall — 2025-05-10T09:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130427#p130427 | page 1 | era: pre-1.18.1 -->

nice! love you dude <3

## Post 130436 by Grizb37 (Grandmaster of Forum PvP) — 2025-05-10T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130436#p130436 | page 1 | era: pre-1.18.1 -->

Thank you for your dedication.

Is there a way to make an option to switch between Hold and Toggle?

With the toggle version the menu wouldnt disappear unless you clicked the icon.

Ty again

## Post 130446 by Pizzayo (Barrens Chat Casualty) — 2025-05-10T13:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130446#p130446 | page 1 | era: pre-1.18.1 -->

> **Grizb37 wrote: Sat May 10, 2025 12:01 pm**
> Thank you for your dedication.
>
>  Is there a way to make an option to switch between Hold and Toggle?
>
>  With the toggle version the menu wouldnt disappear unless you clicked the icon.
>
>  Ty again

Yup, not added yet but also on the roadmap. Use [this issue](https://github.com/Pizzahawaiii/PizzaSlices/issues/27) to track the progress.

## Post 130506 by Pizzayo (Barrens Chat Casualty) — 2025-05-10T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130506#p130506 | page 1 | era: pre-1.18.1 -->

[Update] v1.1.0 (10.05.2025)

- Allow adding **usable items** to rings (e.g. hearthstone, consumables, etc.)
- Add new settings option to **change animation duration/speed**
- Improve general settings layout a bit

## Post 130514 by Oomentaloo (Barrens Chat Casualty) — 2025-05-10T22:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130514#p130514 | page 1 | era: pre-1.18.1 -->

> **Frantsel wrote: Fri May 09, 2025 1:53 pm**
> This looks fantastic! Great work!
>
>  Would it be possible to make an addon like this for emotes?
>
>  I would absolutely love to see this <3

I asked pizza about that as well, because it hurts a bit to "waste" a macro for emotes.
I even thought about making emote icons, but after seeing the long list of emotes, I don't think it's worth to put that effort into a ring addon.
Maybe somebody from the RP-community makes an addon for emotes and pizza can workout something like for item rack?

## Post 130515 by Pizzayo (Barrens Chat Casualty) — 2025-05-10T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130515#p130515 | page 1 | era: pre-1.18.1 -->

[Update] v1.1.1 (10.05.2025)

- Fix bug where settings wouldn't show some/most/any usable items when logging in for the very first time
- Show full item tooltips in settings instead of just item names

## Post 130516 by Pizzayo (Barrens Chat Casualty) — 2025-05-10T23:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130516#p130516 | page 1 | era: pre-1.18.1 -->

> **Oomentaloo wrote: Sat May 10, 2025 10:47 pm**
> > **Frantsel wrote: Fri May 09, 2025 1:53 pm**
> > This looks fantastic! Great work!
> >
> >  Would it be possible to make an addon like this for emotes?
> >
> >  I would absolutely love to see this <3
>
>   I asked pizza about that as well, because it hurts a bit to "waste" a macro for emotes.
>  I even thought about making emote icons, but after seeing the long list of emotes, I don't think it's worth to put that effort into a ring addon.
>  Maybe somebody from the RP-community makes an addon for emotes and pizza can workout something like for item rack?

Ah I remember. Yeah that's fair, there's way too many emotes to just set up macros for all of them. I mean adding a separate category to the settings that has most/all emotes wouldn't be hard, technically. The main problem I see is the icons - I would need a large set of icons, one for each emote, and ideally their design/looks should be consistent.

## Post 130588 by Pizzayo (Barrens Chat Casualty) — 2025-05-11T13:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130588#p130588 | page 1 | era: pre-1.18.1 -->

[Update] v1.2.0 (11.05.2025)

- **Show cooldown timers** on ability and item slices
- Fix bug where it wouldn't use items if the ring was bound to *Shift-<key>*

## Post 130605 by Pizzayo (Barrens Chat Casualty) — 2025-05-11T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130605#p130605 | page 1 | era: pre-1.18.1 -->

[Update] v1.2.1 (11.05.2025)

- Fix bug where it wouldn't show spell or item cooldowns in some cases

## Post 130649 by Pizzayo (Barrens Chat Casualty) — 2025-05-11T22:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130649#p130649 | page 1 | era: pre-1.18.1 -->

[Update] v1.3.0 (12.05.2025)

- Add ability to **reorder ring slices via drag-n-drop** in the settings
- Make slices slightly transparent while being dragged in the settings

## Post 130770 by Pizzayo (Barrens Chat Casualty) — 2025-05-12T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130770#p130770 | page 1 | era: pre-1.18.1 -->

[Update] v1.4.0 (12.05.2025)

- **Allow adding abilities/items to rings via drag-and-drop from spellbook/bags**
- Add ability to cast lower spell ranks
- Fix buggy behavior when/after removing slices from a ring in settings

## Post 130776 by Oomentaloo (Barrens Chat Casualty) — 2025-05-12T21:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130776#p130776 | page 1 | era: pre-1.18.1 -->

Nice!

## Post 130778 by Pizzayo (Barrens Chat Casualty) — 2025-05-12T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130778#p130778 | page 1 | era: pre-1.18.1 -->

[Update] v1.4.1 (12.05.2025)

- Fix bug that completely broke the addon and spammed you with LUA errors if you don't have pfUI installed
[Update] v1.4.2 (12.05.2025)

- Fix bug that spammed you with LUA errors when trying to drag a spell from the spellbook into a ring

## Post 130782 by Oomentaloo (Barrens Chat Casualty) — 2025-05-12T23:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130782#p130782 | page 1 | era: pre-1.18.1 -->

Can't wait for the features I get tomorrow   turtle_in_love_head

## Post 130879 by Pizzayo (Barrens Chat Casualty) — 2025-05-13T18:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130879#p130879 | page 1 | era: pre-1.18.1 -->

FYI I decided to stop posting version updates as replies to this thread because (A) it's spammy and (B) it's more work for me and I'm lazy. Will still add them to the changelog in the first post though, of course)

## Post 132557 by Herods — 2025-05-22T17:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132557#p132557 | page 1 | era: pre-1.18.1 -->

Friend, I love you, friend... I was very sad that I didn't have this add-on here, and you solved my problems

