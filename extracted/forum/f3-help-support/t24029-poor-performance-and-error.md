---
title: "Poor performance and error"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24029"
topic_id: 24029
forum_id: 3
forum: "Help & Support"
author: "Buttwhole"
author_authority: "player"
posted: "2026-02-19T17:30:00Z"
last_post: "2026-02-19T19:09:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:37:00Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Poor performance and error

## Post 168920 by Buttwhole — 2026-02-19T17:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168920#p168920 | page 1 | era: 1.18.1-announced-pre-release -->

On a daily basis the game crashes and or freezes for a long period of time. The game also runs at 25fps in sw and down to 10fps in molten core!

I am running the game through Lutris on Linux Bazzite, but i update the game and install the addon through the Launcher.

This is my pc:

[embed: //drive.google.com/file/d/1HVmUxgIVOCF4HEKlTF1_uvglHu5bXl4b/preview]

This is my video settings:
[embed: //drive.google.com/file/d/1yVY9zMJR9obusN-TeG9oz9FDC5FqTqSx/preview]

This is my pc monitor:
[embed: //drive.google.com/file/d/1NeBrF7v9_T7ZnqeY2tN_Huegl2-R_DHc/preview]

This is my cpu usage (As seen in the picture 1 core is at 100%. It seems that 1 core spikes at 75-100% for a second and then goes down to 25-50% again):
[embed: //drive.google.com/file/d/1yXhTQKS1zSZdr3B_8gNyIQ4_TMqWmihs/preview]

I got all the mods installed:
[embed: //drive.google.com/file/d/1L1F663_ENCI9BkNN_7TCaKO-srmBnvYJ/preview]

I have disabled the weather affects through the xp mod from launcher

I got about 25 addons installed including pfui and memory set to 0:
[embed: //drive.google.com/file/d/16RiGZeVTpLXYtQHz6C5Y59EsixeM6Gce/preview]

If i disable all addons i get about 45fps in SW:
[embed: //drive.google.com/file/d/1RUCzvfXirpLpXwH8ZrAyyQ6exc-2Pcln/preview]

If i put my video settings to lowest except resolution i get about 65fps in sw:

[embed: //drive.google.com/file/d/1dX11tEvPADXcXuCnZaGe9YEQvOMiPDyt/preview]

Yes i know this game is ancient and performs poorly but are there any way i can improve my situation? It would be nice to at least not have 10fps or lower while running Molten Core. I rly dont want to disable all addons and run the game on lowest to be able to have 65fps in stormwind xP

I also get this error from time to time, i even got it just now with all  the addons disabled and video on low:

[embed: //drive.google.com/file/d/1JPvgk_6CxJftWhsXvvEddf_MXM89dyFz/preview]

## Post 168923 by Drubarrymooer (Grandmaster of Forum PvP) — 2026-02-19T18:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168923#p168923 | page 1 | era: 1.18.1-announced-pre-release -->

In the game config in lutris, are you running protonge?

You could also try forcing it to run on a single core in lutris, as I doubt it's optimized for multi threading.

## Post 168925 by Buttwhole — 2026-02-19T18:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168925#p168925 | page 1 | era: 1.18.1-announced-pre-release -->

> **Drubarrymooer wrote: Thu Feb 19, 2026 6:03 pm**
> In the game config in lutris, are you running protonge?
>
>  You could also try forcing it to run on a single core in lutris, as I doubt it's optimized for multi threading.

I run it through Wine in Lutris

I tried setting it to 1 core in Lutris but that just made the game run on 15fps on lowest setting instead of around 50fps, lol !

## Post 168927 by Drubarrymooer (Grandmaster of Forum PvP) — 2026-02-19T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168927#p168927 | page 1 | era: 1.18.1-announced-pre-release -->

> **Buttwhole wrote: Thu Feb 19, 2026 6:44 pm**
> > **Drubarrymooer wrote: Thu Feb 19, 2026 6:03 pm**
> > In the game config in lutris, are you running protonge?
> >
> >  You could also try forcing it to run on a single core in lutris, as I doubt it's optimized for multi threading.
>
>   I run it through Wine in Lutris
>
>  I tried setting it to 1 core in Lutris but that just made the game run on 15fps on lowest setting instead of around 50fps, lol !

Try running it in protonge.  That gave me a massive performance boost on my setup at home.

## Post 168931 by Buttwhole — 2026-02-19T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168931#p168931 | page 1 | era: 1.18.1-announced-pre-release -->

> **Drubarrymooer wrote: Thu Feb 19, 2026 6:50 pm**
> > **Buttwhole wrote: Thu Feb 19, 2026 6:44 pm**
> > > **Drubarrymooer wrote: Thu Feb 19, 2026 6:03 pm**
> > > In the game config in lutris, are you running protonge?
> > >
> > >  You could also try forcing it to run on a single core in lutris, as I doubt it's optimized for multi threading.
> >
> >   I run it through Wine in Lutris
> >
> >  I tried setting it to 1 core in Lutris but that just made the game run on 15fps on lowest setting instead of around 50fps, lol !
>
>  Try running it in protonge.  That gave me a massive performance boost on my setup at home.

Nope it didnt do anything, still same 55 fps with everything on low in sw.
I tried running it through steam proton experimental.

