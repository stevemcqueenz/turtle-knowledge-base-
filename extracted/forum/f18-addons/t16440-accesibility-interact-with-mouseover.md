---
title: "Accesibility (Interact With Mouseover)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16440"
topic_id: 16440
forum_id: 18
forum: "AddOns"
author: "akira1422"
author_authority: "player"
posted: "2024-12-10T23:01:00Z"
last_post: "2025-10-05T22:08:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T10:23:38Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Accesibility (Interact With Mouseover)

## Post 112132 by akira1422 — 2024-12-10T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112132#p112132 | page 1 | era: pre-1.18.1 -->

I play the game 1 handed after a stroke that impacted my right hand. I'm doing well with it, but one difference from Retail/Classic is there's no interact with mouse-over in this version. I've looked around in the forums and someone talked about a macro, but that was unsuccessful.

I'm doing okay with right clicking my trackpad, but a key binding for it would be incredible. All the posts I had found are from 2022 or earlier.

This is what I found, I'm sure I'm not doing something right.

/script SetBinding("Z", "TURNORACTION")
/script SaveBindings(1)

Is there an add-on or macro wizardry that can help with my issue?

Thanks!

## Post 112155 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2024-12-11T03:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112155#p112155 | page 1 | era: pre-1.18.1 -->

Ill try to help you, but I dont quite understand the problem yet.

So are you looking for mouse-over macros, so you can use abilities on whatever you are mousing over?
Or are you trying to create a macro that turns ur character?

The script you provided does not address "Interact with Mouseover.",
so Im a bit confused right now.

If you can give me a better explanation of what you desire, I will try to help as good as possible.

## Post 112176 by amanagor (Grandmaster of Forum PvP) — 2024-12-11T07:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112176#p112176 | page 1 | era: pre-1.18.1 -->

Not sure if this is what you're looking for, but there is a dll called interact that does this: Interact is a mod that allows you to bind a key which you can then use to interact with the world around you. Using the key you will be able to pick herbs, mine veins, loot enemies and much more without the need to use the mouse to target the object.

It doesnt need mouseover either, it will just interact with game objects and lootable mobs in range.

## Post 112240 by akira1422 — 2024-12-11T13:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112240#p112240 | page 1 | era: pre-1.18.1 -->

> **amanagor wrote: Wed Dec 11, 2024 7:56 am**
> Not sure if this is what you're looking for, but there is a dll called interact that does this: Interact is a mod that allows you to bind a key which you can then use to interact with the world around you. Using the key you will be able to pick herbs, mine veins, loot enemies and much more without the need to use the mouse to target the object.
>
>  It doesnt need mouseover either, it will just interact with game objects and lootable mobs in range.

That's exactly what I'm after! I use an xbox compatibility controller with joy2key and one button on it is Crtl-C. I target mobs, NPC's and just hit that button. With it missing on the vanilla client, it's a pain to stop and right click on the trackpad. I have dedicated buttons for camera movement, that's the only thing keeping me from fully enjoying the game.

Would you be able to point me in the right direction?

## Post 112245 by amanagor (Grandmaster of Forum PvP) — 2024-12-11T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112245#p112245 | page 1 | era: pre-1.18.1 -->

> **akira1422 wrote: Wed Dec 11, 2024 1:37 pm**
> > **amanagor wrote: Wed Dec 11, 2024 7:56 am**
> > Not sure if this is what you're looking for, but there is a dll called interact that does this: Interact is a mod that allows you to bind a key which you can then use to interact with the world around you. Using the key you will be able to pick herbs, mine veins, loot enemies and much more without the need to use the mouse to target the object.
> >
> >  It doesnt need mouseover either, it will just interact with game objects and lootable mobs in range.
>
>   That's exactly what I'm after! I use an xbox compatibility controller with joy2key and one button on it is Crtl-C. I target mobs, NPC's and just hit that button. With it missing on the vanilla client, it's a pain to stop and right click on the trackpad. I have dedicated buttons for camera movement, that's the only thing keeping me from fully enjoying the game.
>
>  Would you be able to point me in the right direction?

github.com/luskanek/Interact
you will also need vanillafixes, which you can find here github.com/hannesmann/vanillafixes/releases

## Post 112280 by akira1422 — 2024-12-11T18:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112280#p112280 | page 1 | era: pre-1.18.1 -->

> **amanagor wrote: Wed Dec 11, 2024 2:18 pm**
> > **akira1422 wrote: Wed Dec 11, 2024 1:37 pm**
> > > **amanagor wrote: Wed Dec 11, 2024 7:56 am**
> > > Not sure if this is what you're looking for, but there is a dll called interact that does this: Interact is a mod that allows you to bind a key which you can then use to interact with the world around you. Using the key you will be able to pick herbs, mine veins, loot enemies and much more without the need to use the mouse to target the object.
> > >
> > >  It doesnt need mouseover either, it will just interact with game objects and lootable mobs in range.
> >
> >   That's exactly what I'm after! I use an xbox compatibility controller with joy2key and one button on it is Crtl-C. I target mobs, NPC's and just hit that button. With it missing on the vanilla client, it's a pain to stop and right click on the trackpad. I have dedicated buttons for camera movement, that's the only thing keeping me from fully enjoying the game.
> >
> >  Would you be able to point me in the right direction?
>
>  github.com/luskanek/Interact
>  you will also need vanillafixes, which you can find here github.com/hannesmann/vanillafixes/releases

Thank you sooooo much! I'll get this all set up and post back here to let you know how it went. Gaming with 1 hand has been challenging to say the least.

Edit: It works perfectly!!!

*Last edited by akira1422 on Wed Dec 11, 2024 11:08 pm, edited 1 time in total.*

## Post 144702 by Themythicalgoon — 2025-08-12T03:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144702#p144702 | page 1 | era: pre-1.18.1 -->

I can't get the keybindings to show up in my game? Somebody please help i need this mod lol

## Post 153863 by Glyphedtank09 — 2025-10-01T01:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153863#p153863 | page 1 | era: pre-1.18.1 -->

Does anyone have a copy of Interact.dll? The github is offline. My brother also has a disability with his right and this sounds like it would make it easier for him to play. Any way to upload to google drive or share somehow?

## Post 153928 by Catyngla (Barrens Chat Casualty) — 2025-10-01T14:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153928#p153928 | page 1 | era: pre-1.18.1 -->

> **Glyphedtank09 wrote: Wed Oct 01, 2025 1:17 am**
> Does anyone have a copy of Interact.dll? The github is offline. My brother also has a disability with his right and this sounds like it would make it easier for him to play. Any way to upload to google drive or share somehow?

I think this is a fork the original mod:
<https://github.com/vargv666/Interact>

Edit: this one seems to have a release: <https://github.com/jilinge2/Interact>

## Post 153965 by Glyphedtank09 — 2025-10-01T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153965#p153965 | page 1 | era: pre-1.18.1 -->

Which one would you use?? I dont know much about this stuff

I followed the instructions, but they dont include the Interact.dll file and it says failed to load properly. Do you have a copy of Interact.dll that I could download from somewhere?

## Post 153967 by Catyngla (Barrens Chat Casualty) — 2025-10-01T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153967#p153967 | page 1 | era: pre-1.18.1 -->

The second link and go on the right, "Latest release". You should be able to download a zip file.

## Post 153983 by Glyphedtank09 — 2025-10-02T03:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153983#p153983 | page 1 | era: pre-1.18.1 -->

thank you for the help!

## Post 154520 by Giovanynajera — 2025-10-05T22:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154520#p154520 | page 1 | era: 1.18.1-announced-pre-release -->

> **Glyphedtank09 wrote: Thu Oct 02, 2025 3:25 am**
> thank you for the help!

did you make it work? as today Oct 5th i log and my addon just crashed, and now i can't make it work, i did everyhint the guide says

