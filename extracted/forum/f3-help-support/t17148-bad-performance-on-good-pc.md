---
title: "Bad performance on good pc"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17148"
topic_id: 17148
forum_id: 3
forum: "Help & Support"
author: "Ashwhole"
author_authority: "player"
posted: "2025-01-17T00:37:00Z"
last_post: "2025-10-21T17:59:00Z"
post_count: 36
pages: 2
fetched: "2026-09-10T08:38:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bad performance on good pc

## Post 117028 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117028#p117028 | page 1 | era: pre-1.18.1 -->

Hi

I have bad performance on my pc. It can range from 144fps to 10fps.

Fps dropping to below 30fps in storwmind and down to 10fps in 40man raid.

It can also drop down to 20fps in random places with no people around whatsoever.

I got latest vanilla fixes installed and i got the launcher setting so game uses more then 2gb ram.

This is my pc:

Operatingsystem: Windows 10 Home
GPU: ASUS GeForce STRIX GTX 970 4GB PhysX DirectCU II OC
CPU: i7 4970k, Socket 1150 LGA, 4GHz, Motherboard: Asus Z97A - Intel Haswell - PCI Express 3.0 - (2014)
RAM:  Corsair 4x4gb (16gb) 1600MHz CM8GX3M2A1600C9

For example at 50fps:
CPU usage 18%
Memory usage 1000mb
GPU usage 1%

 - I am running the game on max settings.
 - I am running the game in full windowed mode.
 - I have tried to use with and without vsync there is no difference.
 - I do not use the HD packs.
 -

I cant remember how much the computer was using at 10fps but it wasnt 90 or 100% of cpu or ram.

How do i solve this?

## Post 117030 by Talon2e — 2025-01-17T01:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117030#p117030 | page 1 | era: pre-1.18.1 -->

After the reset this weekend I was having a similar issue where if I did not move i have 60FPS but the moment I started moving I dropped to 30FPS.  Ended up seeing in my video settings the refresh rate was 60hz and changed to 100hz and it's been 101FPS since.

## Post 117031 by Soulutions — 2025-01-17T01:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117031#p117031 | page 1 | era: pre-1.18.1 -->

Try Vanilla Fixes it worked well for me, jumping from 40 to around 120 fps
I suggest dxvk as well for a more modern graphics API.
<https://github.com/hannesmann/vanillafixes>

DXVK is packaged with VanillaFixes in an optional download if you want to go with DXVK.

Edit: I am dumb and didnt read that you already got VanillaFixes installed.
But perhaps going with DXVK helps?

## Post 117042 by Aleksxz — 2025-01-17T04:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117042#p117042 | page 1 | era: pre-1.18.1 -->

It feels like launching VanillaFixes on admin helped me a bit also.

## Post 117070 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T12:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117070#p117070 | page 1 | era: pre-1.18.1 -->

> **Soulutions wrote: Fri Jan 17, 2025 1:12 am**
> Try Vanilla Fixes it worked well for me, jumping from 40 to around 120 fps
>  I suggest dxvk as well for a more modern graphics API.
>  <https://github.com/hannesmann/vanillafixes>
>
>  DXVK is packaged with VanillaFixes in an optional download if you want to go with DXVK.
>
>  Edit: I am dumb and didnt read that you already got VanillaFixes installed.
>  But perhaps going with DXVK helps?

I have vanillafixes installed through this link: <https://github.com/hannesmann/vanillafixes/releases> It should work for nvidia 970 right? At least what internet says. But i get no performance boost from it.

## Post 117072 by Soulutions — 2025-01-17T13:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117072#p117072 | page 1 | era: pre-1.18.1 -->

> **Ashwhole wrote: Fri Jan 17, 2025 12:34 pm**
> > **Soulutions wrote: Fri Jan 17, 2025 1:12 am**
> > Try Vanilla Fixes it worked well for me, jumping from 40 to around 120 fps
> >  I suggest dxvk as well for a more modern graphics API.
> >  <https://github.com/hannesmann/vanillafixes>
> >
> >  DXVK is packaged with VanillaFixes in an optional download if you want to go with DXVK.
> >
> >  Edit: I am dumb and didnt read that you already got VanillaFixes installed.
> >  But perhaps going with DXVK helps?
>
>   I have vanillafixes installed through this link: <https://github.com/hannesmann/vanillafixes/releases> It should work for nvidia 970 right? At least what internet says. But i get no performance boost from it.

Are you launching witht the TurtleWoW Launcher?
The Turtle Wow Launcher is launching the original WoW.exe while you need to launch VanillaFixes.exe
So you can use the TurtleLauncher to apply 4GB Ram Patches etc. but after that you will have to start VanillaFixes.exe

## Post 117073 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T13:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117073#p117073 | page 1 | era: pre-1.18.1 -->

Nope im launching through vanilla fixes

## Post 117075 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T14:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117075#p117075 | page 1 | era: pre-1.18.1 -->

The performance for me is the same with out without launching through vanillafixes.

I also tried downloading directx9 cause some did it and it helped. It does nothing for me. h

I run the game with 120hz refresh rate. I cant use the 140hz one. I tried lower it to 60hz to see if it help. It does nothing for me.

## Post 117080 by Soulutions — 2025-01-17T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117080#p117080 | page 1 | era: pre-1.18.1 -->

At least installing DXVK should do something since it's a complete replacement of the graphics API.
Could be worse ,though unlikely, or it could be better, but it seems unlikely that NOTHING is changing if you correctly installed DXVK.
So my guess is tbh that you did not correctly install VanillaFixes or DXVK.

## Post 117082 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117082#p117082 | page 1 | era: pre-1.18.1 -->

> **Soulutions wrote: Fri Jan 17, 2025 3:38 pm**
> At least installing DXVK should do something since it's a complete replacement of the graphics API.
>  Could be worse ,though unlikely, or it could be better, but it seems unlikely that NOTHING is changing if you correctly installed DXVK.
>  So my guess is tbh that you did not correctly install VanillaFixes or DXVK.

I just extract the zip called vanilafixes 1.5.2 dxvk.zip into my turte wow folder. And then i start the game from the Vanilla Fixes file. Is there more to it then that? I dunno something might be happening but im not seeing it as a FPS improvement. The fps stays the same as without vanillafixes. Now it tried both Vanillafixes without dxvk and vanillafixes with dxvk and there is no differense in fps.

## Post 117083 by Darktifa (Bug Report Enthusiast) — 2025-01-17T17:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117083#p117083 | page 1 | era: pre-1.18.1 -->

> **Ashwhole wrote: Fri Jan 17, 2025 12:37 am**
> How do i solve this?

are u always launching VanillaFixes as admin?

## Post 117087 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117087#p117087 | page 1 | era: pre-1.18.1 -->

> **Darktifa wrote: Fri Jan 17, 2025 5:27 pm**
> > **Ashwhole wrote: Fri Jan 17, 2025 12:37 am**
> > How do i solve this?
>
>   are u always launching VanillaFixes as admin?

Yep, it doesnt change the fps

## Post 117089 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T17:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117089#p117089 | page 1 | era: pre-1.18.1 -->

Ive been reading through other threads about performance issues on twow, and they give advice like go into nvidia control center, add the game exe to the thing, and then adjust the performance settings and fps setting. But im not sure sure if i should add the exe file or vanillafixes now instead?
Will this even change anything? Since gpu performance is like 1% anyway.

I did it anyway i went into the nvidia control panel, added the twow exe file, i put the performance to max instead of balanced, i put the fps locked at 120. Logged into the game but nothing has changed fps wise.

I also tried disabling all addons. It doesnt change a thing.

## Post 117092 by Akos1896 (Grandmaster of Forum PvP) — 2025-01-17T18:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117092#p117092 | page 1 | era: pre-1.18.1 -->

It's to be expected. This is a new, next gen game and technology needs to catch up to produce such hardwares which can run this smoothly.

## Post 117098 by Ashwhole (Barrens Chat Casualty) — 2025-01-17T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117098#p117098 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Fri Jan 17, 2025 6:39 pm**
> It's to be expected. This is a new, next gen game and technology needs to catch up to produce such hardwares which can run this smoothly.

Haha..  nice one   insidious_turtle

It can take a lot of works to get next gen game to run smoothly and the same with really gold games :D

## Post 117165 by Ashwhole (Barrens Chat Casualty) — 2025-01-18T15:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117165#p117165 | page 1 | era: pre-1.18.1 -->

Well im not rly sure about how to proceed now :S

## Post 117179 by Allwynd01 (Bug Report Enthusiast) — 2025-01-18T17:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117179#p117179 | page 1 | era: pre-1.18.1 -->

I have a similar PC, but neither your or mine are "good" anymore, they are quite old and outdated. When I read your first sentence, I thought you were going to list hardware from the last 5 years at least.

I have:

OS: Linux Mint 22.1
CPU: i5 8400
GPU: GTX 1650
RAM: 8 GB

I don't experience none of the issues you do and I even play on Linux.

It's an issue I've heard from many people before. Whether it's just Turtle WoW or just Vanilla 1.12.1 in general, a lot of people with new hardware are experiencing performance issues. It can be attributed to the fact that the client is that from 2004 and it hasn't been optimized for new hardware.

There isn't really much you can do, that's your hardware configuration and if it's causing problems, maybe the combination of the different components is causing it, since my PC is similar to yours, but I don't experience those issues.

As others suggested, you can use the Vanilla Tweaks program, but from what I know it does, it basically patches the WoW.exe so it can use more than 4GB of RAM. And that's about it.

When the UE5 client launches, the performance issues will be a thing of the past.

## Post 119403 by Ashwhole (Barrens Chat Casualty) — 2025-02-09T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119403#p119403 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Sat Jan 18, 2025 5:43 pm**
> I have a similar PC, but neither your or mine are "good" anymore, they are quite old and outdated. When I read your first sentence, I thought you were going to list hardware from the last 5 years at least.
>
>  I have:
>
>  OS: Linux Mint 22.1
>  CPU: i5 8400
>  GPU: GTX 1650
>  RAM: 8 GB
>
>  I don't experience none of the issues you do and I even play on Linux.
>
>  It's an issue I've heard from many people before. Whether it's just Turtle WoW or just Vanilla 1.12.1 in general, a lot of people with new hardware are experiencing performance issues. It can be attributed to the fact that the client is that from 2004 and it hasn't been optimized for new hardware.
>
>  There isn't really much you can do, that's your hardware configuration and if it's causing problems, maybe the combination of the different components is causing it, since my PC is similar to yours, but I don't experience those issues.
>
>  As others suggested, you can use the Vanilla Tweaks program, but from what I know it does, it basically patches the WoW.exe so it can use more than 4GB of RAM. And that's about it.
>
>  When the UE5 client launches, the performance issues will be a thing of the past.

Oh by ''good pc'' i ment a pc that is 10 years newer then vanilla is and had resonably good specs at the time.

Anyhow i seems rly hard resolve this issue ive tried all kinds of things but nothing has worked!   dead_turtle_head

## Post 119406 by Grizb37 (Grandmaster of Forum PvP) — 2025-02-09T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119406#p119406 | page 1 | era: pre-1.18.1 -->

I was using an old version of VanillaFixes, upgraded to a new one and FPS increased massively.

It does more than just increase the RAM, it switches from DirectX9 to Vulkan for rendering, DirectX9 is anicent and sucks on Modern Graphics Cards

Also in raids DPS Meters can slow your game down when everyone is AOE'ing

## Post 121809 by blesso — 2025-03-05T22:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121809#p121809 | page 1 | era: pre-1.18.1 -->

I have the exact same issues @Ashwholes. Your hardware isn’t the issue I have a 4060 and a great cpu. Can play most triple A games on high. This has to be an issue with the client. But some of my other friends who have were performing computers don’t have the same issue. So I have no idea.

## Post 131552 by Ciscowz — 2025-05-17T07:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131552#p131552 | page 1 | era: pre-1.18.1 -->

Yeah it's the same for me, i'm having a top gen CPU and a 4070 RTX GPU and experiencing some issues in game sometimes. Should be running that damn game at like 500fps in every situation but i stick to 120fps and get some stuttering in some zones from time to time.
Don't know if TWoW devs can do something about it but i don't think so unfortunately...

I have a question though, whats "UE5" ?

## Post 131563 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-05-17T09:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131563#p131563 | page 1 | era: pre-1.18.1 -->

The new launcher supports tweaks and settings without requiring technical expertise.
Enable DXVK in the launcher and see if that resolves your resolution issue. If not, try enabling MultiMonitorFix as well. Even 4K at 240 Hz (3840×2160) should cause no issues at all if you enable DXVK.

Links for manual installation (without the launcher):

<https://turtle-wow.fandom.com/wiki/Clie> ... and_Tweaks (VanillaFixes with DXVK)

<https://github.com/Mates1500/VanillaMultiMonitorFix>

## Post 131600 by Jan125 (Barrens Chat Casualty) — 2025-05-17T12:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131600#p131600 | page 1 | era: pre-1.18.1 -->

UE5 = Unreal Engine 5.
Turtle WoW has a rewrite of the client in that engine in the works.
It would allow greater flexibility/generally better optimization options for modern hardware, just because it actually uses still-supported technology.

Keep in mind that WoW is an old game, built on old technologies.
Slowly, these old components in Windows will break on the software AND hardware side.
We have had this happen multiple times with DirectX/Direct3D 9. That is the graphics interface this version of WoW uses. It is slowly breaking.
Current issues for example include color filter issues (greyed-out items not being displayed, for example the unavailable role selectors in the dungekn finder/LFT),
severe framerate drops on nVidia cards with Hardware Cursor enabled (tradeoff if you turn it off is that the mouse may be sluggish),
and generally bad performance from it no longer being properly emulated by graphics card vendors in hardware.
We alao had The Crash Room in SM: Library a few... months? ago.

There is also the issue that WoW does not really use all CPU cores effectively.

## Post 131633 by Mundane (Barrens Chat Casualty) — 2025-05-17T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131633#p131633 | page 1 | era: pre-1.18.1 -->

Are You using Vulkan rendering option from launcher? Why not?
Also if that does not help try seeing what your gpu is doing when fps drops down. When my gpu clocks down due to being bored of having nothing to do, it tends to clock down Vram aswell which then in turn tanks fps. Selecting Max performance for wow.exe in nvidia control panel fixes that.

## Post 131823 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-18T21:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131823#p131823 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Sat May 17, 2025 9:23 am**
> Links for manual installation (without the launcher):

Forum has mangled your 1st link. BTW, does launcher install latest DXVK? Cause latest VanillaFixes uses a buggy one.

## Post 131947 by Sadaron — 2025-05-19T13:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131947#p131947 | page 1 | era: pre-1.18.1 -->

I have the same problem. It went well when I used vanillafixes and ran it as an administrator, not trough the launcher. But as of latest launcher update my files got deleted, and the game feels sluggish again. I enabled tweaks in the launcher (monitorfix, dxvk 2.5.3, vanillafixes 1.5.3).
Nothing helped. FPS between 60 to 40 with drops to 20 and lower. My last flight path travel had 25 fps. Earlier 144 without a problem? Any fixes? I even reinstalled the whole game and still no cure.

## Post 132055 by Nalam — 2025-05-20T07:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132055#p132055 | page 1 | era: pre-1.18.1 -->

> **Sadaron wrote: Mon May 19, 2025 1:29 pm**
> I have the same problem. It went well when I used vanillafixes and ran it as an administrator, not trough the launcher. But as of latest launcher update my files got deleted, and the game feels sluggish again. I enabled tweaks in the launcher (monitorfix, dxvk 2.5.3, vanillafixes 1.5.3).
>  Nothing helped. FPS between 60 to 40 with drops to 20 and lower. My last flight path travel had 25 fps. Earlier 144 without a problem? Any fixes? I even reinstalled the whole game and still no cure.

Same for me. Mods installed through the launcher don't work.

## Post 137060 by Ghysal94 — 2025-06-26T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137060#p137060 | page 1 | era: pre-1.18.1 -->

I discovered the server recently and decicded to give it a try but I never manager to get any decent FPS in game.

First I tried with launcher without any changes in tweajs or options.
Then I tried to lower graphic settings to the lowest and got to almost 60 fps but with drops to 10-20 everytime something moves, which results in almost permanent 20 fps in starting zone.

I tried to add tweaks, it did nothing.

I then uninstalled everything, downloaded the client only, added VanillaFixes manually but nothing changed.
I also tried to switch to fullscreen instead of windowed but it made the screen black and impossible to change the setting afterwards so ... nothing more.
I played all the classic Blizzard's servers and never had any performance issues with the same setup   sad_turtle_head

## Post 137062 by Nalam — 2025-06-26T08:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137062#p137062 | page 1 | era: pre-1.18.1 -->

If you are playing on a laptop with two GPUs you have to choose the gaming GPU and not the integrated one. You can check in nvidia control panel (or AMD equivalent). I play on two different laptops and I had to manually choose the correct graphics card on both.

## Post 137063 by Cecilc (Barrens Chat Casualty) — 2025-06-26T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137063#p137063 | page 1 | era: pre-1.18.1 -->

It’s been lagging more and more recently….

## Post 137073 by Aqdill — 2025-06-26T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137073#p137073 | page 1 | era: pre-1.18.1 -->

Sometimes, removing memory limit for addons (set to 0) could help.
I've reinstalled Turtle WoW with a launcher, and had huge fps drop. Before that i had 147+fps.
Removing memory limit for addons (on character selection screen, Addons>Top Right Corner should be 0) resolved my issue.

## Post 137160 by branut — 2025-06-26T23:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137160#p137160 | page 1 | era: pre-1.18.1 -->

My game freezes 1 or 2 seconds every 5-10 mins.. after 3 months I realized that it was being caused by Shagu Tweaks :/

## Post 141133 by Nrgsa — 2025-07-24T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141133#p141133 | page 1 | era: pre-1.18.1 -->

hey did anyone find a fix? my games closes when i get low fps in raids especially now in kara 40 with all the spell details, i have turned some settings lower, i have ryzen 5 6 core, 2070 super everything is updated, reinstalled game, all mods etc on, deleteed wdb folder but during big lag spikes/drop in fps the game just closes down.

## Post 155949 by Ashwhole (Barrens Chat Casualty) — 2025-10-17T19:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155949#p155949 | page 1 | era: 1.18.1-announced-pre-release -->

Nope no fix so far still terrible performance

## Post 156492 by Pdot3 — 2025-10-21T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156492#p156492 | page 1 | era: 1.18.1-announced-pre-release -->

besides usinv dxvk and vanillafixes from launcher

Disable vsync and hardwaremouse in the ingamesettings

If you get screen tearing without vsync enable it with your gpu app

## Post 156494 by Snadileoboy (Barrens Chat Casualty) — 2025-10-21T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156494#p156494 | page 2 | era: 1.18.1-announced-pre-release -->

I think graphic card needs to be updated and maybe and gpu. Increase ram would not Hurt. Maybe after these changes fps increase

