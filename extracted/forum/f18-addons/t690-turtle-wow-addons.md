---
title: "Turtle WoW AddOns"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=690"
topic_id: 690
forum_id: 18
forum: "AddOns"
author: "Pompa"
author_authority: "player"
posted: "2019-07-23T13:56:00Z"
last_post: "2022-12-16T14:02:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T10:33:06Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW AddOns

## Post 3508 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-23T13:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3508#p3508 | page 1 | era: pre-1.18.1 -->

Greetings, I have been fixing or enhancing some AddOns, you'll find them on this post. Download them here: [https://drive.google.com/drive/folders/ ... sp=sharing](https://drive.google.com/drive/folders/1uegaeb2TlkrDyI-g9rGLWnifQBatfcY8?usp=sharing)

 **AddOn List:**
- **AtlasLoot TW Edition** *[Enhancement]*: AtlasLoot Enhanced + Turtle WoW custom content. It will be updated whenever we release new bosses.

- **MyRolePlay** *[Fix]*: Fixed a crash that was happening whenever a player moved the mouse pointer over a GM character.

- **EzDismount** *[Enhancement]*: You'll be able to auto dismount from the Riding Turtle too.

- **LazyPig** *[Enhancement]*: You'll be able to auto dismount from the Riding Turtle too.

- **HideGryphons** *[New]*: This small AddOn will remove the action bar gryphons from your interface.

- **GearMenu** *[Fix]*: "Fixed" (it's actually a client limitation) a bug where the AddOn was crashing for bags larger than 28 slots..

## Post 3509 by Lefaux — 2019-07-23T14:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3509#p3509 | page 1 | era: pre-1.18.1 -->

great stuff, thank you so much for that.

Is there a github repo for those for easier updating?

if not... want me to maintain one?

## Post 3510 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-23T14:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3510#p3510 | page 1 | era: pre-1.18.1 -->

> **Lefaux wrote: Tue Jul 23, 2019 2:53 pm**
> great stuff, thank you so much for that.
>
>  Is there a github repo for those for easier updating?
>
>  if not... want me to maintain one?

Yeah I was thinking about the GitHub repo too, but I didn't want to use my personal account and I was too lazy to create a new one just for that.

Anyway, only AtlasLoot should receive updates, so it's ok!

## Post 3511 by Kizzi — 2019-07-23T20:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3511#p3511 | page 1 | era: pre-1.18.1 -->

Gotcha. Will there be any updates to it?

## Post 3515 by Jinxz — 2019-07-23T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3515#p3515 | page 1 | era: pre-1.18.1 -->

Getting this error, can you help?

> Fehler: AceLocale(AtlasLoot): Improper translation exists. "PvP Rewards (Level 70)" is likely misspelled for locale deDE.
>  AddOn: AtlasLoot
>  Datei:locale.de.lua
>  Zeile:3
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler: attempt to concatenate field `Blackfathom Deeps' (a nil value)
>  AddOn: AtlasLoot
>  Datei:loottables.en.lua
>  Zeile:24
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler: attempt to index global `AtlasLoot_TableNames' (a nil value)
>  AddOn: AtlasLoot
>  Datei:loottables.de.lua
>  Zeile:8
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler: attempt to concatenate field `Argent Dawn' (a nil value)
>  AddOn: AtlasLoot
>  Datei:ButtonRegistry.lua
>  Zeile:17
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler: attempt to concatenate field `New feature in 4.05.00: Advanced searching functionality is now available. You can type in a partial item name, for example typing 'elixir' gives all items in the database with 'elixir' in the name.  Big thanks to Kurax for his help.' (a nil value)
>  AddOn: AtlasLoot
>  Datei:AtlasLoot.lua
>  Zeile:121
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler:attempt to call global `AtlasLoot_OnLoad' (a nil value)
>  Codezeile:AtlasLootItemsFrame:OnLoad
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler:attempt to call global `AtlasLootOptions_SetupSlider' (a nil value)
>  Codezeile:AtlasLootOptionsFrameSliderButtonRad:OnLoad
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler:attempt to call global `AtlasLootOptions_SetupSlider' (a nil value)
>  Codezeile:AtlasLootOptionsFrameSliderButtonPos:OnLoad
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler:AtlasLootOptionsFrameResetPosition:SetText("text")
>  Codezeile:AtlasLootOptionsFrameResetPosition:OnLoad
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler:AtlasLootOptionsFrameDefaultSettings:SetText("text")
>  Codezeile:AtlasLootOptionsFrameDefaultSettings:OnLoad
>  Fehler Nummer:1
>  --------------------------------------------------
>  Fehler:attempt to call global `AtlasLootMinimapButton_Init' (a nil value)
>  Codezeile:AtlasLootMinimapButtonFrame:OnEvent
>  Fehler Nummer:1

## Post 3518 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-23T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3518#p3518 | page 1 | era: pre-1.18.1 -->

> **Jinxz wrote: Tue Jul 23, 2019 8:10 pm**
> Getting this error, can you help?
>
> > Fehler: AceLocale(AtlasLoot): Improper translation exists. "PvP Rewards (Level 70)" is likely misspelled for locale deDE.
> >  AddOn: AtlasLoot
> >  Datei:locale.de.lua
> >  Zeile:3
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler: attempt to concatenate field `Blackfathom Deeps' (a nil value)
> >  AddOn: AtlasLoot
> >  Datei:loottables.en.lua
> >  Zeile:24
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler: attempt to index global `AtlasLoot_TableNames' (a nil value)
> >  AddOn: AtlasLoot
> >  Datei:loottables.de.lua
> >  Zeile:8
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler: attempt to concatenate field `Argent Dawn' (a nil value)
> >  AddOn: AtlasLoot
> >  Datei:ButtonRegistry.lua
> >  Zeile:17
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler: attempt to concatenate field `New feature in 4.05.00: Advanced searching functionality is now available. You can type in a partial item name, for example typing 'elixir' gives all items in the database with 'elixir' in the name.  Big thanks to Kurax for his help.' (a nil value)
> >  AddOn: AtlasLoot
> >  Datei:AtlasLoot.lua
> >  Zeile:121
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler:attempt to call global `AtlasLoot_OnLoad' (a nil value)
> >  Codezeile:AtlasLootItemsFrame:OnLoad
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler:attempt to call global `AtlasLootOptions_SetupSlider' (a nil value)
> >  Codezeile:AtlasLootOptionsFrameSliderButtonRad:OnLoad
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler:attempt to call global `AtlasLootOptions_SetupSlider' (a nil value)
> >  Codezeile:AtlasLootOptionsFrameSliderButtonPos:OnLoad
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler:AtlasLootOptionsFrameResetPosition:SetText("text")
> >  Codezeile:AtlasLootOptionsFrameResetPosition:OnLoad
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler:AtlasLootOptionsFrameDefaultSettings:SetText("text")
> >  Codezeile:AtlasLootOptionsFrameDefaultSettings:OnLoad
> >  Fehler Nummer:1
> >  --------------------------------------------------
> >  Fehler:attempt to call global `AtlasLootMinimapButton_Init' (a nil value)
> >  Codezeile:AtlasLootMinimapButtonFrame:OnEvent
> >  Fehler Nummer:1

Make sure to use only my AtlasLoot, don't use mine + AtlasLoot Enhanced. I only tested it in the English client, by the way.

## Post 5976 by Connelly — 2020-05-13T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=5976#p5976 | page 1 | era: pre-1.18.1 -->

> **Pompa wrote: Tue Jul 23, 2019 1:56 pm**
> - **GearMenu** *[Fix]*: "Fixed" (it's actually a client limitation) a bug where the AddOn was crashing for bags larger than 28 slots..

There's still seems to be a problem with this one. The addon fails to swap certain pieces for me, and I get the following message: "Code\GM_ItemHelper.lua:188: Invalid inventory slot in IsInventoryItemLocked"

If I understand that line of code correctly, it seems to be stating a max value for the number of slots in a bag. Whatever the case, when I look at my bags, i noticed the following:

I have three of the custom server bags, 1 Turtle Traveler's Bag from hc mode, and 2 Loremaster's Backpack from turtle shop. The bags are ordered such as: default backpack, 18, 20, 28, 28. The items that the addon has problem swapping are in the four last slots of the first 28 bag, so I assume those four slots are the source of the problem (and I guess it would also happen the same with the other x28 bag). To illustrate:

![Image](https://i.imgur.com/unbroio.jpg)

## Post 7800 by Ghostx4242 — 2020-09-25T03:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7800#p7800 | page 1 | era: pre-1.18.1 -->

Thanks for the thread! :)

## Post 8770 by Westorz — 2020-12-23T23:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8770#p8770 | page 1 | era: pre-1.18.1 -->

Sorry to mini-necro but is there a difference between LazyPig and Ezdismount? Just curious why there are 2 dismount addons

## Post 8773 by Balake (Bug Report Enthusiast) — 2020-12-24T12:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8773#p8773 | page 1 | era: pre-1.18.1 -->

Lazypig also does other things like remove salvation when tanking, automatically open vendors and flightpaths, etc.

## Post 11960 by Speedz1337 (Patch Note Conspiracy Theorist) — 2021-09-03T06:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11960#p11960 | page 1 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/a7j9zY3.png)

I am getting this error when opening AtlasLoot enhanced.  Is there a way to fix this?

## Post 19046 by Furiousnow — 2022-06-08T04:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19046#p19046 | page 1 | era: pre-1.18.1 -->

Are these addons still being updated? I don't notice any differences in Atlasloot for example.

## Post 19047 by Redmagejoe (Grandmaster of Forum PvP) — 2022-06-08T04:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19047#p19047 | page 1 | era: pre-1.18.1 -->

> **Furiousnow wrote: Wed Jun 08, 2022 4:18 am**
> Are these addons still being updated? I don't notice any differences in Atlasloot for example.

<https://github.com/Lexiebean/>
<https://github.com/CosminPOP/>

## Post 30450 by Tobias — 2022-12-11T04:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30450#p30450 | page 1 | era: pre-1.18.1 -->

The version of Lazy Pig provided only auto dismounts the turtle mount and doesn't work with any other mount

## Post 30809 by Matty — 2022-12-16T14:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30809#p30809 | page 1 | era: pre-1.18.1 -->

Hi.. any addons mobinfo2 work for turle version ? .. i try all mobinfo2 .. but not counting killing mob or items and creat database self

