---
title: "Turtle WoW on Linux?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22655"
topic_id: 22655
forum_id: 4
forum: "General"
author: "SvenS2"
author_authority: "player"
posted: "2025-10-29T19:56:00Z"
last_post: "2025-12-11T14:10:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T09:38:20Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW on Linux?

## Post 157751 by SvenS2 (Bug Report Enthusiast) — 2025-10-29T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157751#p157751 | page 1 | era: 1.18.1-announced-pre-release -->

Hello, is TWoW supported on any Linux distribution? I'm not looking forward to upgrading to Win11 and am looking for an alternative operating system, but would also like to continue playing TWoW.

## Post 157754 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-10-29T20:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157754#p157754 | page 1 | era: 1.18.1-announced-pre-release -->

There is a native Unreal 2.0 client in the works.  In the meantime you can install it via appimage or wine.

<https://lutris.net/games/turtlewow/>

There is also a steam proton install guide itonbob was kind enough to post.
[viewtopic.php?p=156386&hilit=Proton#p156386](https://forum.turtlecraft.gg/viewtopic.php?p=156386&hilit=Proton#p156386)

## Post 157765 by Kerenis (Patch Note Conspiracy Theorist) — 2025-10-29T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157765#p157765 | page 1 | era: 1.18.1-announced-pre-release -->

You can keep using w10 indefinitely. End of SUPPORT doesnt mean it will magically stop workimg. Just get a good antimalware kit

Alternatively, get W10 LTSC IoT version. Its W10 without all the bloat and support to 2032

## Post 157776 by SvenS2 (Bug Report Enthusiast) — 2025-10-30T00:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157776#p157776 | page 1 | era: 1.18.1-announced-pre-release -->

Alright thank you both

## Post 157783 by Ironbob (Barrens Chat Casualty) — 2025-10-30T05:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157783#p157783 | page 1 | era: 1.18.1-announced-pre-release -->

[viewtopic.php?t=19067](https://forum.turtlecraft.gg/viewtopic.php?t=19067)

## Post 159937 by Matches (Barrens Chat Casualty) — 2025-11-17T20:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159937#p159937 | page 1 | era: 1.18.1-announced-pre-release -->

> **SvenS2 wrote: Wed Oct 29, 2025 7:56 pm**
> Hello, is TWoW supported on any Linux distribution? I'm not looking forward to upgrading to Win11 and am looking for an alternative operating system, but would also like to continue playing TWoW.

It's supported under all distributions.  This is not new - you could run WoW under Linux fifteen years ago.

Install WINE (Stands for "WINE Is Not an Emulator", something like that).

Then install WoW, in the usual way - run the installer.

Apply the patch which updates to 1.12.1.

Then download the TWoW installer, which installs itself over WoW, IIRC.

Then run WoW like this : "wine WoW.exe"

## Post 160061 by Imonobor (Bug Report Enthusiast) — 2025-11-19T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160061#p160061 | page 1 | era: 1.18.1-announced-pre-release -->

> **SvenS2 wrote: Wed Oct 29, 2025 7:56 pm**
> Hello, is TWoW supported on any Linux distribution? I'm not looking forward to upgrading to Win11 and am looking for an alternative operating system, but would also like to continue playing TWoW.

When I moved from Windows to Linux, I just copied over my already installed and set-up TWoW folder onto my new linux ext4 drive, and ran it through proton (Lutris or Steam, whichever, you prefer), and everything worked perfectly out of the box. Most other games run just as smoothly without issues.

I did have some trouble with proton when I tried running games directly from the windows-formatted NTFS drive, so keep that in mind. You can reformat a drive from NTFS to EXT4, but make sure to backup any valuable data first.

## Post 160081 by Valoryanna — 2025-11-19T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160081#p160081 | page 1 | era: 1.18.1-announced-pre-release -->

> **SvenS2 wrote: Wed Oct 29, 2025 7:56 pm**
> Hello, is TWoW supported on any Linux distribution? I'm not looking forward to upgrading to Win11 and am looking for an alternative operating system, but would also like to continue playing TWoW.

It's very straight forward:
Assuming you already have proton installed, I'd recommend you to use Lutris to manage the game. With it you can configure several options, like which version of wine or proton to use, enabling DXVK (i strongly suggest to use it) or selecting your .exe if you plan to use superWoW for example.

my computer is 12yo and the game runs smoothly, except in SW because the amount of people there, and from time to time I crash because I modded my game with the HD patches.

My distro is Linux Mint and I use GE-Proton9

Also, I only use the launcher for updating the client, as it doesn't work properly: it does not detects the mods for example, but also I prefer to manually handle everything.
I'm sure you can get it to work, i just didn't invest time to fix it

I'm sure if you follow a guide on how to play wow on linux, you'll make it

## Post 160124 by Ironbob (Barrens Chat Casualty) — 2025-11-19T23:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160124#p160124 | page 1 | era: 1.18.1-announced-pre-release -->

> **Valoryanna wrote: Wed Nov 19, 2025 3:36 pm**
> > **SvenS2 wrote: Wed Oct 29, 2025 7:56 pm**
> > Hello, is TWoW supported on any Linux distribution? I'm not looking forward to upgrading to Win11 and am looking for an alternative operating system, but would also like to continue playing TWoW.
>
>   It's very straight forward:
>  Assuming you already have proton installed, I'd recommend you to use Lutris to manage the game. With it you can configure several options, like which version of wine or proton to use, enabling DXVK (i strongly suggest to use it) or selecting your .exe if you plan to use superWoW for example.
>
>  my computer is 12yo and the game runs smoothly, except in SW because the amount of people there, and from time to time I crash because I modded my game with the HD patches.
>
>  My distro is Linux Mint and I use GE-Proton9
>
>  Also, I only use the launcher for updating the client, as it doesn't work properly: it does not detects the mods for example, but also I prefer to manually handle everything.
>  I'm sure you can get it to work, i just didn't invest time to fix it
>
>  I'm sure if you follow a guide on how to play wow on linux, you'll make it

U can literally do all that from steam.

## Post 160151 by Allwynd01 (Bug Report Enthusiast) — 2025-11-20T09:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160151#p160151 | page 1 | era: 1.18.1-announced-pre-release -->

Short answer:

Yes, Turtle WoW runs on Linux just fine. Because it's an old game with low system requirements, it runs just as good on Linux if not better. I've actually heard people say having performance issues with Turtle WoW on Windows 10/11 and as soon as they moved to Linux, those performance issues disappearing.

Long answer:

I've been using Linux Mint as my main OS since Match 2024 and I've continued playing Turtle WoW on the same day I moved to Linux from Windows. First I didn't know a lot so I was using Wine or Steam to run Windows games, later on I had issues where some games that used to work suddenly stopped working with Wine then I found PortProton, which uses Steam's Proton to launch Windows programs and since then games have worked again.

Another thing I've noticed is that I noticed is sometimes some games have lower FPS on Wine and higher on PortProton as the latter uses th

![Image](https://i.ibb.co/0RMDxNHL/image.png)

## Post 160185 by Ironbob (Barrens Chat Casualty) — 2025-11-20T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160185#p160185 | page 1 | era: 1.18.1-announced-pre-release -->

Proton is based on wine but got more fixes for programs so not that weird

## Post 160199 by Koilos33 — 2025-11-20T21:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160199#p160199 | page 1 | era: 1.18.1-announced-pre-release -->

I'm playing on a Steam Deck in desktop mode. Proton makes it work just fine!

## Post 162369 by SvenS2 (Bug Report Enthusiast) — 2025-12-10T16:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162369#p162369 | page 1 | era: 1.18.1-announced-pre-release -->

> **Koilos33 wrote: Thu Nov 20, 2025 9:50 pm**
> I'm playing on a Steam Deck in desktop mode. Proton makes it work just fine!

Can you recommend a guide on how to setup Turtle WoW on Steam deck? Or do you use it docked and not with the controller?

## Post 162453 by Ironbob (Barrens Chat Casualty) — 2025-12-11T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162453#p162453 | page 1 | era: 1.18.1-announced-pre-release -->

> **SvenS2 wrote: Wed Dec 10, 2025 4:46 pm**
> > **Koilos33 wrote: Thu Nov 20, 2025 9:50 pm**
> > I'm playing on a Steam Deck in desktop mode. Proton makes it work just fine!
>
>  Can you recommend a guide on how to setup Turtle WoW on Steam deck? Or do you use it docked and not with the controller?

[viewtopic.php?t=19067](https://forum.turtlecraft.gg/viewtopic.php?t=19067)
U can finde community controller layouts in steam

## Post 162466 by SvenS2 (Bug Report Enthusiast) — 2025-12-11T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162466#p162466 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ironbob wrote: Thu Dec 11, 2025 1:17 pm**
> > **SvenS2 wrote: Wed Dec 10, 2025 4:46 pm**
> > > **Koilos33 wrote: Thu Nov 20, 2025 9:50 pm**
> > > I'm playing on a Steam Deck in desktop mode. Proton makes it work just fine!
> >
> >  Can you recommend a guide on how to setup Turtle WoW on Steam deck? Or do you use it docked and not with the controller?
>
>  [viewtopic.php?t=19067](https://forum.turtlecraft.gg/viewtopic.php?t=19067)
>  U can finde community controller layouts in steam

Awesome, thank you

