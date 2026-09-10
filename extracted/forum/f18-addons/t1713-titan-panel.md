---
title: "Titan Panel"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1713"
topic_id: 1713
forum_id: 18
forum: "AddOns"
author: "Titan"
author_authority: "player"
posted: "2021-04-16T21:11:00Z"
last_post: "2026-01-09T03:46:00Z"
post_count: 21
pages: 1
fetched: "2026-09-10T10:22:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Titan Panel

## Post 10126 by Titan — 2021-04-16T21:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10126#p10126 | page 1 | era: pre-1.18.1 -->

I download Titan Panel addon but cannot get it to work. Any tricks or tip that can help? I appreciate you time.

R/
Titan

## Post 10127 by Fizzeek (Barrens Chat Casualty) — 2021-04-16T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10127#p10127 | page 1 | era: pre-1.18.1 -->

Is it for classic? It won't work if it's for classic and not vanilla.

If it is for vanilla, make sure the folder doesn't have "-master" on it. If it does, remove that part.

## Post 10129 by Titan — 2021-04-16T21:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10129#p10129 | page 1 | era: pre-1.18.1 -->

It was a link on this forum that I download from and I removed the "-master" but it wont see all of its abilities.

## Post 10130 by Fizzeek (Barrens Chat Casualty) — 2021-04-16T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10130#p10130 | page 1 | era: pre-1.18.1 -->

I just looked up the titan panel link and downloaded it myself, and sure enough I can't see it either. So I went into the Titan-Panel---1.12.1 folder and took out the folders inside that one and put THOSE directly into the addons folder, seemed to work for me.

I've never used this addon so dunno if this is how it's supposed to work, but I'd try copy/pasting everything inside that Titan-Panel---1.12.1 folder directly into addons, should do it.

## Post 10133 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-04-17T02:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10133#p10133 | page 1 | era: pre-1.18.1 -->

Yes, you have to take them all out - those are the actual addons that run on top of the master Titan Panel addon.

## Post 10141 by Titan — 2021-04-17T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10141#p10141 | page 1 | era: pre-1.18.1 -->

I have done that. But only Titan Stance Set appears on the on the panel as a plug in. I am not sure of what is causing the rest of the plugins to fail and not be seen.

## Post 15935 by Biggun — 2022-01-16T23:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15935#p15935 | page 1 | era: pre-1.18.1 -->

Resurrecting this because I am experiencing the same.  So far, of the built-in addons, only Stance, ItemBonus, and BG will work.  The rest won't.

I can get WIM, the instant messager, to work.  I can get RestedXP to work, an addon that wasn't a built-in for Titan but made for TitanPanel.

But the rest won't.  Bags, Money, Coords (I know that got changed but the update looked to apply to later versions of WoW only), Ammo, etc.  None of those work on TitanPanel for 1.12 now.

## Post 15940 by Kiwijello — 2022-01-17T02:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15940#p15940 | page 1 | era: pre-1.18.1 -->

I have gotten FuBar to work from WowLegacy. I could not get Titan to work either :(

## Post 15962 by Lexiebean (Barrens Chat Casualty) — 2022-01-17T18:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15962#p15962 | page 1 | era: pre-1.18.1 -->

Titan is a strange mess.

Here's my working setup. Drag/drop the contents into ..\Interface\AddOns

You'll end up with:

..\Interface\AddOns\TitanAmmo\TitanAmmo.toc
..\Interface\AddOns\Titan\TitanAmmo\TitanAmmo.lua

So you might notice that the .toc and the .lua/.xml are in different folders.
IDK why it was done like that, but it works.

[Google Drive Link](https://drive.google.com/file/d/1PzFcA2uA8rRl2E529XHZvO_afFxVC47R/view?usp=sharing)

## Post 16496 by Layt — 2022-01-30T13:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16496#p16496 | page 1 | era: pre-1.18.1 -->

TitanPanel was broken in those times. Use FuBar-2.0
there is some links for sets.

Include my set: [https://github.com/laytya/Vanilla-Addon ... lugins.zip](https://github.com/laytya/Vanilla-Addons/blob/master/FuBar%2Bplugins.zip)

## Post 17002 by Corpius — 2022-02-12T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17002#p17002 | page 1 | era: pre-1.18.1 -->

i tried downloading your set Layt, after struggling with any other install of FuBar, and get the same thing an explosion of lua errors that won't load the base package, i end up with a million assets on my minimap and most of the 'addons' are working. but even when anything that isn't fubar / fubar related is unloaded. fubar itself won't load.

anyone else having this issue? one of the errors was missing ace depency (which should be included) so i added it to my addons folder as well.. same outcome

## Post 17012 by Layt — 2022-02-13T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17012#p17012 | page 1 | era: pre-1.18.1 -->

hm, can u make some screenshots of errors?

## Post 47309 by Cerealwalrus — 2023-05-24T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47309#p47309 | page 1 | era: pre-1.18.1 -->

i also have been struggling to get titan panel working properly, anyone else able to find a solution or working config?

## Post 53099 by Martimsf182 — 2023-07-12T00:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53099#p53099 | page 1 | era: pre-1.18.1 -->

I was just searching for this and i've realised whats the "problem" and how to set it up (TitanPanel).
After you download Titan Panel from Legacy, type in TitanPanel on Vaniilla Version and search, there you will find all the plugins you want to add to the bar, just Download them and put them into your addons, then ingame add them on the bar built ins! It works :)

## Post 54760 by Seekah — 2023-07-26T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54760#p54760 | page 1 | era: pre-1.18.1 -->

Did anyone get titanbar to work? I'm a rogue and sometimes when I pickpocket the money doesn't add. So I want to display my gold coins on screen.. Or can any other mod do this?

## Post 54769 by Seekah — 2023-07-26T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54769#p54769 | page 1 | era: pre-1.18.1 -->

Found as Martims said, you have to go here : <https://legacy-wow.com/vanilla-addons/>
Then select expansion Vanilla and then search for "Titan Panel" and add all of them manually 1 by 1 , it works.

## Post 143284 by Ankerdankerf — 2025-08-05T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143284#p143284 | page 1 | era: pre-1.18.1 -->

Its a very old thread but...

Any idea if someone does update Titan Panel for TWoW?
I love this Panel and the plugins for Titan Panel.
But there are so many problems with TWoW because of differents between TWoW and retail Vanilla.

I have no idea of coding LUA or WoW AddOns at all.

## Post 143290 by basednoob (Patch Note Conspiracy Theorist) — 2025-08-05T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143290#p143290 | page 1 | era: pre-1.18.1 -->

> **Ankerdankerf wrote: Tue Aug 05, 2025 6:32 pm**
> Its a very old thread but...
>
>  Any idea if someone does update Titan Panel for TWoW?
>  I love this Panel and the plugins for Titan Panel.
>  But there are so many problems with TWoW because of differents between TWoW and retail Vanilla.
>
>  I have no idea of coding LUA or WoW AddOns at all.

<https://turtle-wow.fandom.com/wiki/Titan_Panel>

## Post 156650 by Ankerdankerf — 2025-10-22T21:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156650#p156650 | page 1 | era: 1.18.1-announced-pre-release -->

> **basednoob wrote: Tue Aug 05, 2025 7:16 pm**
> > **Ankerdankerf wrote: Tue Aug 05, 2025 6:32 pm**
> > Its a very old thread but...
> >
> >  Any idea if someone does update Titan Panel for TWoW?
> >  I love this Panel and the plugins for Titan Panel.
> >  But there are so many problems with TWoW because of differents between TWoW and retail Vanilla.
> >
> >  I have no idea of coding LUA or WoW AddOns at all.
>
>  <https://turtle-wow.fandom.com/wiki/Titan_Panel>

Thats what I ment.
last update is...20 years ago...?^^

## Post 156651 by Azcron (Patch Note Conspiracy Theorist) — 2025-10-22T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156651#p156651 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ankerdankerf wrote: Wed Oct 22, 2025 9:02 pm**
> > **basednoob wrote: Tue Aug 05, 2025 7:16 pm**
> > > **Ankerdankerf wrote: Tue Aug 05, 2025 6:32 pm**
> > > Its a very old thread but...
> > >
> > >  Any idea if someone does update Titan Panel for TWoW?
> > >  I love this Panel and the plugins for Titan Panel.
> > >  But there are so many problems with TWoW because of differents between TWoW and retail Vanilla.
> > >
> > >  I have no idea of coding LUA or WoW AddOns at all.
> >
> >  <https://turtle-wow.fandom.com/wiki/Titan_Panel>
>
>  Thats what I ment.
>  last update is...20 years ago...?^^

Retail "Vanilla" and Turtle WoW (Twow) operate on fundamentally different client architectures. Retail uses Blizzard’s modern client, which includes updated APIs, graphical enhancements, and structural changes that affect how addons are loaded and executed. In contrast, Twow runs on the original World of Warcraft client from the early 2000s, the "OG client", which retains the legacy addon framework and scripting environment from that era.

Because of these differences, addons designed for Retail are typically incompatible with Twow. To ensure proper functionality on Twow, you’ll need to source an older version of the addon, one that was built specifically for the original client or for private servers that emulate it. Compatibility hinges on matching the addon’s codebase to the client’s API version and scripting limitations.

## Post 164720 by Ravenofseven72 (Barrens Chat Casualty) — 2026-01-09T03:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164720#p164720 | page 1 | era: 1.18.1-announced-pre-release -->

> **basednoob wrote: Tue Aug 05, 2025 7:16 pm**
> > **Ankerdankerf wrote: Tue Aug 05, 2025 6:32 pm**
> > Its a very old thread but...
> >
> >  Any idea if someone does update Titan Panel for TWoW?
> >  I love this Panel and the plugins for Titan Panel.
> >  But there are so many problems with TWoW because of differents between TWoW and retail Vanilla.
> >
> >  I have no idea of coding LUA or WoW AddOns at all.
>
>  <https://turtle-wow.fandom.com/wiki/Titan_Panel>

seems to work fine, think it needs finetunening  for Turtle :)

