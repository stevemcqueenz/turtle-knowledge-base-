---
title: "Loot All without Shift"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1997"
topic_id: 1997
forum_id: 29
forum: "Modding"
author: "Rytz"
author_authority: "player"
posted: "2021-08-30T22:36:00Z"
last_post: "2025-10-01T09:25:00Z"
post_count: 29
pages: 1
fetched: "2026-09-10T10:39:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Loot All without Shift

## Post 11890 by Rytz (Barrens Chat Casualty) — 2021-08-30T22:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11890#p11890 | page 1 | era: pre-1.18.1 -->

I found this hack on reddit:
[https://www.reddit.com/r/lightshope/com ... ot_client/](https://www.reddit.com/r/lightshope/comments/7dpj1w/autoloot_client/)

If applied, the shift requirement to loot is inverted so that a standalone click will loot all and holding shift will allow you to loot manually.

Open the WoW.exe file with a hex editor and apply the following change:

Search: Code: Select all

```
74 10 33 C9 E8 C8 00 00 00 5F
```

Replace: Code: Select all

```
75 10 33 C9 E8 C8 00 00 00 5F
```

I've been testing it for a couple days now on the latest client and appears to work fine.  Works on resource nodes as well.

## Post 11894 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2021-08-31T12:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11894#p11894 | page 1 | era: pre-1.18.1 -->

It works, thank you so much for this!

## Post 11895 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2021-08-31T13:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11895#p11895 | page 1 | era: pre-1.18.1 -->

If anyone else wants to do this here is a copy of my .exe, I have the improved FoV too btw

[https://drive.google.com/file/d/1i3rpfw ... sp=sharing](https://drive.google.com/file/d/1i3rpfwgYGXc75RBURd6CQFWJSlor_aI9/view?usp=sharing)

## Post 11896 by Fizzeek (Barrens Chat Casualty) — 2021-08-31T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11896#p11896 | page 1 | era: pre-1.18.1 -->

:O

Does it auto loot when pickpocketing??

## Post 11899 by Rytz (Barrens Chat Casualty) — 2021-08-31T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11899#p11899 | page 1 | era: pre-1.18.1 -->

> **Fizzeek wrote: Tue Aug 31, 2021 2:12 pm**
> :O
>
>  Does it auto loot when pickpocketing??

Good question.  Don't play a rogue so I'm not sure.  If you have to hold shift to auto-loot when pickpocketing then probably yes.

I've noticed that chests/containers generally don't work with this unless you've already opened it once.  Maybe there is something special with loot containers that have a timer.  Hardly a concern, though.

Sometimes I still get a manual window when looting a mob too quickly after killing it.  Always works on the 2nd try.

## Post 11901 by Fizzeek (Barrens Chat Casualty) — 2021-08-31T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11901#p11901 | page 1 | era: pre-1.18.1 -->

Just downloaded Mrkrissatan's .exe and can confirm that it DOES autoloot pickpocket. This is amazing, thank you!

## Post 11903 by Joy — 2021-08-31T17:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11903#p11903 | page 1 | era: pre-1.18.1 -->

> **Fizzeek wrote: Tue Aug 31, 2021 3:49 pm**
> Just downloaded Mrkrissatan's .exe and can confirm that it DOES autoloot pickpocket. This is amazing, thank you!

Ooo? Does this mean we can now have working macros such as:

/cast Pick Pocket
/cast Ambush

That would be wicked.  :)

## Post 11905 by Jetlogix — 2021-08-31T22:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11905#p11905 | page 1 | era: pre-1.18.1 -->

what a benefit. tested and more than satisfied. thx

## Post 11925 by Markuis (Patch Note Conspiracy Theorist) — 2021-09-02T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11925#p11925 | page 1 | era: pre-1.18.1 -->

Does it work with skinning? And chests?

## Post 11979 by Rytz (Barrens Chat Casualty) — 2021-09-03T22:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11979#p11979 | page 1 | era: pre-1.18.1 -->

> **Markuis wrote: Thu Sep 02, 2021 9:09 am**
> Does it work with skinning? And chests?

The first time you open a chest it seems loot is always manual.  If you cancel and loot again it will loot everything.  I don't remember if that happened without this mod.  Might have something to do with containers having a timer.

Can't answer for skinning.  Mining and herbing are automatic.  I would guess skinning is as well.

## Post 12020 by Paw (Bug Report Enthusiast) — 2021-09-05T02:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12020#p12020 | page 1 | era: pre-1.18.1 -->

Bump

## Post 12030 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2021-09-05T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12030#p12030 | page 1 | era: pre-1.18.1 -->

It works for skinning and fishing

## Post 12045 by Rytz (Barrens Chat Casualty) — 2021-09-06T04:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12045#p12045 | page 1 | era: pre-1.18.1 -->

I did some testing after noticing that I occasionally would still have to loot manually.  It seems that if there is an item in the loot box that I have never "seen" before (in a loot box), I will have to loot manually (unless I cancel and loot again).

I think there is a cache on the server/db that informs the client what items have been looted in the current session.  I tried scenarios independently of logging out, exiting completely, and clearing the local client cache.  None of these forced me to have to manually loot again.

My guess is that once a player has been completely logged out by the server for a certain period of time, a cache is cleaned out and the player will have to loot manually for each item (the first time it's seen) again.  This likely applies to all types of loot (resources, containers, chests, etc).

## Post 12200 by Rajek — 2021-09-14T12:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12200#p12200 | page 1 | era: pre-1.18.1 -->

> **Mrkrissatan wrote: Tue Aug 31, 2021 1:16 pm**
> If anyone else wants to do this here is a copy of my .exe, I have the improved FoV too btw
>
>  [https://drive.google.com/file/d/1i3rpfw ... sp=sharing](https://drive.google.com/file/d/1i3rpfwgYGXc75RBURd6CQFWJSlor_aI9/view?usp=sharing)

Thank you very much.

## Post 12221 by Karmax — 2021-09-14T22:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12221#p12221 | page 1 | era: pre-1.18.1 -->

Thanks, this is awesome!

Funnily enough I'm so used to shift-looting that now I have to force myself not to press shift on looting - old habits die hard...

And as Rytz posted before: I also still have to shift-loot occasionally.

## Post 13375 by Jcarrill0 (Patch Note Conspiracy Theorist) — 2021-11-03T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13375#p13375 | page 1 | era: pre-1.18.1 -->

Can we Apply this option to the 1.15.2 Patch?

## Post 13381 by Uswer — 2021-11-03T00:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13381#p13381 | page 1 | era: pre-1.18.1 -->

Pls add this in new patch. I cant play without autoloot   unhappy_turtle_head

## Post 13815 by Kiwijello — 2021-11-11T22:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13815#p13815 | page 1 | era: pre-1.18.1 -->

I can confirm this works. And no, I have no affiliation with the person who coded it, nor have I had any virus', hacks, or invasions of any kind since swapping the .exe out.

I only post this due to in game chat wondering if it was a virus.

## Post 14907 by Ryac — 2021-12-28T09:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14907#p14907 | page 1 | era: pre-1.18.1 -->

Does anyone know it this works with the 1.16 patch? seems i can't find the Hex string in the new .exe file ?

## Post 14930 by Anubys — 2021-12-28T15:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14930#p14930 | page 1 | era: pre-1.18.1 -->

Auto loot: [viewtopic.php?f=29&t=2331&sid=7e91376af ... 92e1ca18cb](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331)

## Post 17329 by Volkyte (Patch Note Conspiracy Theorist) — 2022-03-01T13:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17329#p17329 | page 1 | era: pre-1.18.1 -->

is it possible to update the loot icon? (when loot all is enabled the 2 bags are displayed isntead of 1) as per mod working flawlessly to me, i just wish to have that visual upgrade. nothing more =)

## Post 17345 by Barbapapa — 2022-03-02T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17345#p17345 | page 1 | era: pre-1.18.1 -->

Made the changes with Hex Editor. Dont work for me - stillhave to hold shift. :-/
I really cant live with that ^^.

## Post 17354 by Allwynd01 (Bug Report Enthusiast) — 2022-03-02T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17354#p17354 | page 1 | era: pre-1.18.1 -->

> **Anubys wrote: Tue Dec 28, 2021 3:04 pm**
> Auto loot: [viewtopic.php?f=29&t=2331&sid=7e91376af ... 92e1ca18cb](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331)

That auto loot is broken for me. The first time on a new mob never works. It only starts working on the second or third try. It's so annoying I went back to Shift+RMB.

## Post 30795 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2022-12-16T06:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30795#p30795 | page 1 | era: pre-1.18.1 -->

guys just use this

[viewtopic.php?f=29&t=2331](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331)

## Post 74817 by Wez0 (Patch Note Conspiracy Theorist) — 2023-10-30T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74817#p74817 | page 1 | era: pre-1.18.1 -->

Unable to find `74 10 33 C9 E8 C8 00 00 00 5F´ in my current .exe

edit: I re-enabled the patcher.exe and it works

## Post 90890 by Deleigh — 2024-03-20T09:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90890#p90890 | page 1 | era: pre-1.18.1 -->

Unable to find `74 10 33 C9 E8 C8 00 00 00 5F´ in my current .exe

## Post 153771 by Wez0 (Patch Note Conspiracy Theorist) — 2025-09-30T12:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153771#p153771 | page 1 | era: pre-1.18.1 -->

[viewtopic.php?p=74811#p74811](https://forum.turtlecraft.gg/viewtopic.php?p=74811#p74811)

## Post 153873 by Fraidy — 2025-10-01T04:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153873#p153873 | page 1 | era: pre-1.18.1 -->

Enable it in the twow launcher tweaks tab, or install the superwow mod and SuperAPI addon, or vanillatweaks if you don't use the launcher.

## Post 153898 by Rofos — 2025-10-01T09:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153898#p153898 | page 1 | era: pre-1.18.1 -->

OP is from 2021. I have no idea why Wez0 ^^ would necropost here with so many autoloot solutions nowadays.

Ignore this thread if you're reading this. You can enable AutoLoot in your TWoW launcher.

