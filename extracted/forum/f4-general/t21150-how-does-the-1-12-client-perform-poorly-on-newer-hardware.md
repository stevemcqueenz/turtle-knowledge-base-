---
title: "How does the 1.12 client perform poorly on newer hardware?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21150"
topic_id: 21150
forum_id: 4
forum: "General"
author: "Mari"
author_authority: "player"
posted: "2025-08-19T05:16:00Z"
last_post: "2025-08-25T10:59:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T09:41:45Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How does the 1.12 client perform poorly on newer hardware?

## Post 146907 by Mari — 2025-08-19T05:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146907#p146907 | page 1 | era: pre-1.18.1 -->

So, this comes from a purely curious perspective. I find it fascinating that the client performs poorly on newer hardware. A game that was nominally designed to be competitively performant on ancient PCs breaking in unforseen ways as technology advances just kinda triggers the part of my brain that wants to learn things. Do we actually know what specifically about it causes those issues? Or does the uh... closed-source nature of it prevent us from knowing the specifics?

Very excited to see the UE5 update btw. Last time I tried playing WoW on my phone it was via ... Steam Link or something? One of those solutions where you stream a game from your PC to your phone. Basically cloud gaming. Wasn't that great, but y'know. I was desperate at the time. That was actually on this server if I'm not mistaken! Amazing to think I could just do that natively in the future.

## Post 146909 by Jan125 (Barrens Chat Casualty) — 2025-08-19T05:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146909#p146909 | page 1 | era: pre-1.18.1 -->

A lot of it has to do with:
 -Lack of multithreading.
 -DirectX 9 slowly being dropped from driver support.
 -Arguably more addons being used.
 -No proper and tested tools for vanilla modding existing, basically. I imagine it's all backported through 3.3.5a tools.

## Post 146919 by Mari — 2025-08-19T06:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146919#p146919 | page 1 | era: pre-1.18.1 -->

> **Jan125 wrote: Tue Aug 19, 2025 5:38 am**
> -Lack of multithreading.
>  ...
>  -Arguably more addons being used.
>  -No proper and tested tools for vanilla modding existing, basically. I imagine it's all backported through 3.3.5a tools.

Hmm... So basically, progress on the hardware side moved to prioritize multi-core performance instead of single-core performance and because the game doesn't do multi-threading, it doesn't see anywhere near as much of a boost from newer hardware that it should?

That makes sense. I can see how that would compound with more addons and mods being used to create an unexpected bottleneck situation. That's actually kinda wild to think about! Thank you.

> **Jan125 wrote: Tue Aug 19, 2025 5:38 am**
> -DirectX 9 slowly being dropped from driver support.

So from what I'm reading, newer hardware that drops "native" support basically emulates it instead? I could see how that would cause some unexpected overhead and weird behavior that could further compound the issue. I had no idea support for DX9 was being dropped, let alone that it's slowly been happening for years!

## Post 146976 by Terrydavis (Patch Note Conspiracy Theorist) — 2025-08-19T11:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146976#p146976 | page 1 | era: pre-1.18.1 -->

while this might be interesting from a cs pov i dont think you can learn much from that, nor can you change anything about it. this is why we need the new UE5 client so bad. it will solve like 1000 issues in one go, the game could finally be turned into what it was meant to be, all things considered, not just performance but also stuff in game.

hopefully everything goes right and this client upgrade can carry us into the 2030s.

## Post 146983 by SvenS2 (Bug Report Enthusiast) — 2025-08-19T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146983#p146983 | page 1 | era: pre-1.18.1 -->

> **Mari wrote: Tue Aug 19, 2025 6:29 am**
> > **Jan125 wrote: Tue Aug 19, 2025 5:38 am**
> > -Lack of multithreading.
> >  ...
> >  -Arguably more addons being used.
> >  -No proper and tested tools for vanilla modding existing, basically. I imagine it's all backported through 3.3.5a tools.
>
>  Hmm... So basically, progress on the hardware side moved to prioritize multi-core performance instead of single-core performance and because the game doesn't do multi-threading, it doesn't see anywhere near as much of a boost from newer hardware that it should?
>
>  That makes sense. I can see how that would compound with more addons and mods being used to create an unexpected bottleneck situation. That's actually kinda wild to think about! Thank you.
>
> > **Jan125 wrote: Tue Aug 19, 2025 5:38 am**
> > -DirectX 9 slowly being dropped from driver support.
>
>  So from what I'm reading, newer hardware that drops "native" support basically emulates it instead? I could see how that would cause some unexpected overhead and weird behavior that could further compound the issue. I had no idea support for DX9 was being dropped, let alone that it's slowly been happening for years!

This is the case for a lot of old games. Unreal Engine 1 and 2 games also have issues with modern hardware, and you have to use workarounds to get them working at a stable fps, or without frame tearing

## Post 146998 by Idontcareatall (Barrens Chat Casualty) — 2025-08-19T12:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146998#p146998 | page 1 | era: pre-1.18.1 -->

Just because you stick a rocket engine into your old car doesn't mean your car can fly.

That's the same principle here. Newest hardware is not optimized to run very old softwares that use deprecated APIs and technologies.

The softwares, themselves, are also not designed with infinite scalability in mind, and when you create a piece of software, it's hard to foresee what will be the state of things in 5, let alone 20, years.

## Post 147279 by Zulex — 2025-08-20T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147279#p147279 | page 1 | era: pre-1.18.1 -->

It's mostly all about single core CPU performance. Like Jan125 mentioned, multithreading is not supported, neither are new CPU technologies and single core performace did not go up considerably since forever, frequency has been mostly stagnating since 2010. There's only like 2x increased performance since 2010 in single core performance while utilizing new tech twow just cannot use.

Compare that to for example GPU GTX 580 released in 2010 vs RTX 5080 released this year, 5080 is basically 14x more powerful.

I tested this in GW2, also running on DX9, when you bump up the CPU frequency, you see a significant rise in FPS, so all these games really benefit from one thing only, CPU frequency boost to higher MHz.

## Post 148157 by Turtlesister (Barrens Chat Casualty) — 2025-08-25T10:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148157#p148157 | page 1 | era: pre-1.18.1 -->

Pardon my confusion, but can you guys inform me with specifiks about how your twow runs poorly?

because mine has ran flawlessly as any other game i play

