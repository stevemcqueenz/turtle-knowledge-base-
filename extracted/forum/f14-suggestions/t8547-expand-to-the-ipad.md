---
title: "Expand to the Ipad"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8547"
topic_id: 8547
forum_id: 14
forum: "Suggestions"
author: "Wher0"
author_authority: "player"
posted: "2023-07-29T00:58:00Z"
last_post: "2023-10-25T12:25:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T12:05:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Expand to the Ipad

## Post 55011 by Wher0 (Barrens Chat Casualty) — 2023-07-29T00:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55011#p55011 | page 1 | era: pre-1.18.1 -->

Hmm?  insidious_turtle

## Post 55095 by Wher0 (Barrens Chat Casualty) — 2023-07-29T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55095#p55095 | page 1 | era: pre-1.18.1 -->

It’s probably unrealistic, but Blizzard did it! ![🤟🏼](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f91f-1f3fc.svg)![✌️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/270c.svg)![🖐🏽](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f590-1f3fd.svg)![👍](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f44d.svg)![🤣](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f923.svg)![👽](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f47d.svg)

Edit: with Diablo !

## Post 55148 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-07-30T07:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55148#p55148 | page 1 | era: pre-1.18.1 -->

If you can get the Vanilla client working on an iPad, maybe they'll consider it.  Hell, if you can get the Vanilla client working on an iPad, you'll probably be revered as a hero to the community.

The first iPad didn't even come out 'til 2010 *and*, as far as I know, it has almost no compatibility with MacOS applications, much less apps from four-to-six years *prior* to its release.  Even iPhone OS 1 (2008) lacked the ability to use any MacOS programs.

Honestly, I think the only way one might get old *World of Warcraft* on their tablet is if someone either creates an emulator of some sort (not unheard of), or if they somehow decompile the program back into its source code and recompile it for a different operating system.

## Post 55184 by Allwynd01 (Bug Report Enthusiast) — 2023-07-30T13:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55184#p55184 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Sun Jul 30, 2023 7:34 am**
> If you can get the Vanilla client working on an iPad, maybe they'll consider it.  Hell, if you can get the Vanilla client working on an iPad, you'll probably be revered as a hero to the community.
>
>  The first iPad didn't even come out 'til 2010 *and*, as far as I know, it has almost no compatibility with MacOS applications, much less apps from four-to-six years *prior* to its release.  Even iPhone OS 1 (2008) lacked the ability to use any MacOS programs.
>
>  Honestly, I think the only way one might get old *World of Warcraft* on their tablet is if someone either creates an emulator of some sort (not unheard of), or if they somehow decompile the program back into its source code and recompile it for a different operating system.

In other words, it will probably never happen. From what I've seen, it is now difficult to play Turtle WoW or other Vanilla servers on Mac OS if they have an ARM CPU, other people here say that Parallels is the only solution. I don't know how many people are willing to buy it, I don't even know if they can pirate it from somewhere. It seems like the 1-time purchase is 130 EUR, but none of that is a concern of mine, because for now I'm running Windows and if Windows 12 becomes really bad, like bloated with AI garbage, online-only, cloud garbage, requires subscription and such, I will finally move to Linux and Turtle WoW works there too, I've tested it personally, I only wasn't able to install my nVidia drivers properly, because whatever "proprietary" options the Linux distro provided, obviously didn't work properly as I could barely get 25-30 FPS in Turtle WoW on Linux vs 100-200+ on Windows.

## Post 55266 by Healthyboundary — 2023-07-30T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55266#p55266 | page 1 | era: pre-1.18.1 -->

I thought it could be fun to have a companion app with minigames like gardening that raise your in game stats from playing the app. I always thought WoD missed an opportunity with how they turned the settlement dailies into a near mobile game but forced you to get in game to handle it.

## Post 55270 by Emilyrose89 — 2023-07-30T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55270#p55270 | page 1 | era: pre-1.18.1 -->

This is a pretty technical question so here's a pretty technical answer...

broadly speaking there arw 4 ways to run a game (or any program really)

 1.  Natively, just like running a program compiled for Windows OS with x86 architecture (just like the WoW client is) on an x86 machine running windows.  To compile a WoW client for iOS with ARM architecture (the os and cpu architecture on iPad) would at least require access to the source code, plus maybe some tweaks to the code assuming some parts of the code were specifically written to only work with Windows on x86.  So that's probably not gonna happen.

 2.  Through a translation layer; in this case we would need to translate Windows system calls within the client to iOS system calls, and translate x86 machine code into ARM machine code.  For translating Windows system calls WINE is the go to tool, and how us Linux folks and presumably the desktop Mac users run the WoW client.  I'm not super familiar with WINE but from a quick google it looks like progress on translating windows system calls to iOS system calls is somewhere between nonexistent to really early and experimental, so without some big new advances from WINE that's not gonna work.  Translating from x86 to ARM maybe a bit easier; Apple released a tool called Rosetta Stone to translate x86 to ARM for running x86 software on the new M1/M2 macs which also use ARM chips, now how easy it would be to make it work on iOS is a whole other challenge.

 3.  In a virtual machine.  On a quick search I found a project called UTM to spin up a virtual machine on iOS.  So I guess you could emulate a Windows x86 machine on your iPad and run WoW within that vm, however that adds a huge extra layer of work your cpu would need to do and you're really pushing that little iPad way past what it was meant to do.

 4.  Remote desktop.  For this you need to run WoW on a windows x86 machine, but then you can broadcast the video from the program over the internet to you're iPad and send input from youre iPad to the computer running WoW.  This could be done with Parallels as someone earlier in the thread mentioned

## Post 73167 by Fred25 — 2023-10-23T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73167#p73167 | page 1 | era: pre-1.18.1 -->

> **Emilyrose89 wrote: Sun Jul 30, 2023 10:15 pm**
> This is a pretty technical question so here's a pretty technical answer...
>
>  broadly speaking there arw 4 ways to run a game (or any program really)
>
>  1.  Natively, just like running a program compiled for Windows OS with x86 architecture (just like the WoW client is) on an x86 machine running windows.  To compile a WoW client for iOS with ARM architecture (the os and cpu architecture on iPad) would at least require access to the source code, plus maybe some tweaks to the code assuming some parts of the code were specifically written to only work with Windows on x86.  So that's probably not gonna happen.
>
>  2.  Through a translation layer; in this case we would need to translate Windows system calls within the client to iOS system calls, and translate x86 machine code into ARM machine code.  For translating Windows system calls WINE is the go to tool, and how us Linux folks and presumably the desktop Mac users run the WoW client.  I'm not super familiar with WINE but from a quick google it looks like progress on translating windows system calls to iOS system calls is somewhere between nonexistent to really early and experimental, so without some big new advances from WINE that's not gonna work.  Translating from x86 to ARM maybe a bit easier; Apple released a tool called Rosetta Stone to translate x86 to ARM for running x86 software on the new M1/M2 macs which also use ARM chips, now how easy it would be to make it work on iOS is a whole other challenge.
>
>  3.  In a virtual machine.  On a quick search I found a project called UTM to spin up a virtual machine on iOS.  So I guess you could emulate a Windows x86 machine on your iPad and run WoW within that vm, however that adds a huge extra layer of work your cpu would need to do and you're really pushing that little iPad way past what it was meant to do.
>
>  4.  Remote desktop.  For this you need to run WoW on a windows x86 machine, but then you can broadcast the video from the program over the internet to you're iPad and send input from youre iPad to the computer running WoW.  This could be done with Parallels as someone earlier in the thread mentioned

Thanks. It`s interesting!

## Post 73620 by Sem3223 — 2023-10-25T12:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73620#p73620 | page 1 | era: pre-1.18.1 -->

Hello. Thanks for the up-to-date information. I like devices like iPads. After all, I am studying to become a JavaScript developer, so I want to constantly develop myself to become an experienced specialist. And of course, my preparation directly depends on the software I work with. I usually use Apple technology for coding. Therefore, I very often read articles like this <https://setapp.com/how-to/how-to-fix-frozen-mac> to avoid serious mistakes and know how to fix various problems. This allows me to be more productive and learn faster.

