---
title: "Lag on Linux"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15058"
topic_id: 15058
forum_id: 3
forum: "Help & Support"
author: "Shroomerian"
author_authority: "player"
posted: "2024-10-02T12:22:00Z"
last_post: "2024-10-06T17:39:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T08:51:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Lag on Linux

## Post 102377 by Shroomerian — 2024-10-02T12:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102377#p102377 | page 1 | era: pre-1.18.1 -->

I've been trying it out lately on Linux using Lutris, it seems to run fine but at peak hours (usually at the afternoon or weekends) I get really bad lag and I end up staring at enemies and after 10-15 seconds they are dead with me at half health since I couldn't cast abilities. When I checked the green bar it said my latency was at 30-40ms but that clearly wasn't the case

Has anyone else experienced this? I live in EU and the servers are there so I'm surprised why that's the case. Usually it runs smoothly but those little moments make me quit and wait for tomorrow or a better day to play.

Here are my Lutris/wine settings:

Wine version: wine-ge-8-26-x86_64
DXVK version: v2.4.1
Esync and Fsync disabled
WINEARCH: win32

Also I have went through the Client Fixes and Tweaks wiki page on the TurtleWoW fandom page and installed VanillaFixes, Vanilla-Tweaks, Nampower, SuperWoW and Classic-Snowfall, and some addons with GitAddonsManager but this issue was present before I installed any addons.

Thank you.   happy_turtle_head

## Post 102378 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-10-02T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102378#p102378 | page 1 | era: pre-1.18.1 -->

Hmmm...it almost sounds like you're possibly missing dependencies.  If I may ask, what lutris installer script did you use?  The turtlewow one or the wotlk one?  Ime the turtle wow one does a very frequent shader cache that the wotlk one does not do.

## Post 102381 by Shroomerian — 2024-10-02T14:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102381#p102381 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Wed Oct 02, 2024 1:50 pm**
> Hmmm...it almost sounds like you're possibly missing dependencies.  If I may ask, what lutris installer script did you use?  The turtlewow one or the wotlk one?  Ime the turtle wow one does a very frequent shader cache that the wotlk one does not do.

This is the one, it's the first one which appeared on a google search: <https://lutris.net/games/turtlewow/>

*Last edited by Shroomerian on Wed Oct 02, 2024 2:46 pm, edited 1 time in total.*

## Post 102382 by Zulnam (Bug Report Enthusiast) — 2024-10-02T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102382#p102382 | page 1 | era: pre-1.18.1 -->

Try it via the steam compatibility tool as well. VanillaFixes and Vanilla-Tweaks doesn't work (for me at least, Mint 22), but the original executable works just fine without any lag.

## Post 102386 by Shroomerian — 2024-10-02T15:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102386#p102386 | page 1 | era: pre-1.18.1 -->

I've run it with my system's wine instead of wine-ge and I've noticed that wine-ge's logs in Lutris have stuff like this:

(wine:429092): GStreamer-WARNING **: 17:23:59.559: Failed to load plugin '~/.local/share/lutris/runners/wine/wine-ge-8-26-x86_64/lib64/gstreamer-1.0/libgstdeinterlace.so': ~/.local/share/lutris/runners/wine/wine-ge-8-26-x86_64/lib64/gstreamer-1.0/libgstdeinterlace.so: wrong ELF class: ELFCLASS64

There's a dozen of these errors, they seem to be libraries and they all start with libgst probably related to gstreamer. Forums say that these shouldn't affect Lutris games, but these don't appear on the system wine, so I'll try to play on the System wine during an afternoon and or next weekend and I'll notify if the error persists.

## Post 102398 by Shroomerian — 2024-10-02T20:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102398#p102398 | page 1 | era: pre-1.18.1 -->

I've followed the instructions set out here on this wow forum: [https://eu.forums.blizzard.com/en/wow/t ... e/446970/4](https://eu.forums.blizzard.com/en/wow/t/wow-classic-on-linux-non-stop-crashing-unplayable/446970/4)

I know that my install didn't necessarily crash but it was about Lutris and seemed similar enough so here's what I did from the comment by Sogla:

Disable Esync, Disable Fsync
Advanced option: Disable wine in sandbox
Disable easy anti-cheat, disable battleye anti-cheat
DLL override: Key=locationapi.dll, Value=delete

$export WINEPREFIX=/home/$USER/Games/turtlewow`
$winetricks mf
$winetricks sapi

And it SEEMS to have fixed the issue, I get a more correct reading of 60ms of latency and now if there's any freeze where I can't do anything or stare at an enemy it's now 1-2 seconds instead of the previous 5-10 that I experienced which seems to be more in line with what I experienced on Windows. I'll post any more info if this issue persists or reappears.

*Last edited by Shroomerian on Wed Oct 02, 2024 8:07 pm, edited 1 time in total.*

## Post 102424 by Ibux (Patch Note Conspiracy Theorist) — 2024-10-03T09:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102424#p102424 | page 1 | era: pre-1.18.1 -->

> **Shroomerian wrote: Wed Oct 02, 2024 2:45 pm**
> > **Drubarrymooer wrote: Wed Oct 02, 2024 1:50 pm**
> > Hmmm...it almost sounds like you're possibly missing dependencies.  If I may ask, what lutris installer script did you use?  The turtlewow one or the wotlk one?  Ime the turtle wow one does a very frequent shader cache that the wotlk one does not do.
>
>   This is the one, it's the first one which appeared on a google search: <https://lutris.net/games/turtlewow/>

you should use this one: [https://lutris.net/games/world-of-warcr ... lich-king/](https://lutris.net/games/world-of-warcraft-wrath-of-the-lich-king/)

## Post 102536 by Allwynd01 (Bug Report Enthusiast) — 2024-10-05T04:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102536#p102536 | page 1 | era: pre-1.18.1 -->

I use PortProton and never had any errors.

I tried Lutris at some point, but I was unable to set it up, it seemed too complicated for an out-of-the-box experience.

I have also tried playing through regular Wine and through Steam and it also works just fine. I just prefer PortProton, because it's no-nonsense and it works with a few clicks withou requiring you to run through any hoops.

You should try it too. It's available in the software store and it gets updates weekly.

## Post 102538 by HerTiSo — 2024-10-05T06:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102538#p102538 | page 1 | era: pre-1.18.1 -->

Proton-GloriousEggroll all the way.

## Post 102539 by Ibux (Patch Note Conspiracy Theorist) — 2024-10-05T06:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102539#p102539 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Sat Oct 05, 2024 4:48 am**
> I use PortProton and never had any errors.
>
>  I tried Lutris at some point, but I was unable to set it up, it seemed too complicated for an out-of-the-box experience.
>
>  I have also tried playing through regular Wine and through Steam and it also works just fine. I just prefer PortProton, because it's no-nonsense and it works with a few clicks withou requiring you to run through any hoops.
>
>  You should try it too. It's available in the software store and it gets updates weekly.

it is easy. there is a small guide on the turtle wiki here: [Playing Turtle-Wow on Linux](https://turtle-wow.fandom.com/wiki/Playing_Turtle-Wow_on_Linux)

## Post 102571 by Allwynd01 (Bug Report Enthusiast) — 2024-10-05T16:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102571#p102571 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Sat Oct 05, 2024 6:46 am**
> > **Allwynd01 wrote: Sat Oct 05, 2024 4:48 am**
> > I use PortProton and never had any errors.
> >
> >  I tried Lutris at some point, but I was unable to set it up, it seemed too complicated for an out-of-the-box experience.
> >
> >  I have also tried playing through regular Wine and through Steam and it also works just fine. I just prefer PortProton, because it's no-nonsense and it works with a few clicks withou requiring you to run through any hoops.
> >
> >  You should try it too. It's available in the software store and it gets updates weekly.
>
>   it is easy. there is a small guide on the turtle wiki here: [Playing Turtle-Wow on Linux](https://turtle-wow.fandom.com/wiki/Playing_Turtle-Wow_on_Linux)

Maybe you are right, I've found my solution with PortProton. Before that I used Wine which was also just double-clicking the  .exe of the game to play.

## Post 102577 by HerTiSo — 2024-10-05T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102577#p102577 | page 1 | era: pre-1.18.1 -->

TBF - why not just go for Bazzite nowadays?

## Post 102648 by Allwynd01 (Bug Report Enthusiast) — 2024-10-06T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102648#p102648 | page 1 | era: pre-1.18.1 -->

> **HerTiSo wrote: Sat Oct 05, 2024 5:56 pm**
> TBF - why not just go for Bazzite nowadays?

I'm a Linux noob and Mint is close to Ubuntu, which is something I'm familiar with. I don't have the time or enthusiasm to learn a new distro based on something like Fedora I haven't used before. It may be better, but I don't think I will ever find out. At this point I'm done with messing with computers, I just wanted to get rid of Windows and Linux Mint XFCE does a fantastic job for me, I don't feel the need to try to find something better.

