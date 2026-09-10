---
title: "MacOS AppleSilicon Launcher"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19403"
topic_id: 19403
forum_id: 29
forum: "Modding"
author: "Mpukka"
author_authority: "player"
posted: "2025-05-19T10:25:00Z"
last_post: "2025-12-12T09:44:00Z"
post_count: 49
pages: 2
fetched: "2026-09-10T10:38:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# MacOS AppleSilicon Launcher

## Post 131899 by Mpukka — 2025-05-19T10:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131899#p131899 | page 1 | era: pre-1.18.1 -->

For all the Mac Guys with AppleSilicon. I found a project to play TurtleWoW on Mac with good performance. Check it out:

<https://github.com/tairasu/TurtleSilicon>

Its on the beginning but runs good.

## Post 131993 by Idiots009 — 2025-05-19T18:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131993#p131993 | page 1 | era: pre-1.18.1 -->

it does not work on macOS 10.14.6, app is asking for update macOS to 10.11 or newer ffs

## Post 131998 by Mpukka — 2025-05-19T19:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131998#p131998 | page 1 | era: pre-1.18.1 -->

I tested it on the newest MacOS with M4 Chip and it works with 120fps in the wilds

## Post 132088 by Akamizu — 2025-05-20T10:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132088#p132088 | page 1 | era: pre-1.18.1 -->

> **Idiots009 wrote: Mon May 19, 2025 6:36 pm**
> it does not work on macOS 10.14.6, app is asking for update macOS to 10.11 or newer ffs

what device are you trying it on?
macOS 10.14.6 is Mojave (2018) was never supported by Apple Silicon
By macOS 10.11 do you mean Big Sur?

## Post 132138 by Ayrill — 2025-05-20T13:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132138#p132138 | page 1 | era: pre-1.18.1 -->

Hi! thanks for sharing that project :D

i just got a new mac and would like to try this! how do i set this whole thing up? any chance for a tutorial for non mac users?

thanks!

Edit: got it to run :D hardest part was to get CrossOver 25 cracked   dead_turtle_head  but its running like a charm now (Macbook Pro M4 Pro 120fps capped)

*Last edited by Ayrill on Tue May 20, 2025 5:01 pm, edited 1 time in total.*

## Post 132163 by Mpukka — 2025-05-20T16:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132163#p132163 | page 1 | era: pre-1.18.1 -->

@Ayrill it should also work with the tiral from Crossover. How i understand it uses only a part of crossover which also could be used from the trial version

## Post 132251 by Akamizu — 2025-05-21T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132251#p132251 | page 1 | era: pre-1.18.1 -->

Yes. The trial is enough. It should also work after the trial expires since CrossOver never has to actually run - it just uses the binaries.

In a future release CrossOver will not be needed anymore.

## Post 132349 by Idiots009 — 2025-05-21T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132349#p132349 | page 1 | era: pre-1.18.1 -->

I'm using MacBook 12-inch 2016. MacOS 10.11 meant El Capitan which is older than Mojave. By a chance is it possible to modify app to work with Intel Macs. CrossOver causes a tons of lags rather than Wine emulator.

## Post 132601 by Akamizu — 2025-05-23T04:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132601#p132601 | page 1 | era: pre-1.18.1 -->

> **Idiots009 wrote: Wed May 21, 2025 2:43 pm**
> I'm using MacBook 12-inch 2016. MacOS 10.11 meant El Capitan which is older than Mojave. By a chance is it possible to modify app to work with Intel Macs.

TurtleSilicon and the patches are only intended for Apple Silicon devices, not Intel. The project exists only because of the instruction set difference between ARM and x86. Intel macs can simply run it using CrossOver

> **Idiots009 wrote: Wed May 21, 2025 2:43 pm**
> CrossOver causes a tons of lags rather than Wine emulator.

CrossOver itself is using Wine to run Windows apps. The custom d3d9.dll in use will not work for Intel macs. I suggest you to get VanillaFixes to launch it with DXVK - although I tried it on a 2015 Intel Mac and performance is still extremely low (5-15 fps in SW and 30-50 fps in the wilds).
If you want the most performance out of your machine... Windows bootcamp is your best bet

## Post 132789 by Turtlefield — 2025-05-24T09:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132789#p132789 | page 1 | era: pre-1.18.1 -->

This is a great initiative, thanks to any developer listening in :D
Currently i run VMware arm-windows on my M1, but I would like to use this instead.
However, i need to know.... will "launch game" launch the launcher for addon-updating, or would I have to manually update addons like when using Wine?

## Post 132796 by Mpukka — 2025-05-24T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132796#p132796 | page 1 | era: pre-1.18.1 -->

@Turtlefield. It launches only the game (wow.exe) not the turtle wow launcher. You have to add addons manually

## Post 132955 by Ayrill — 2025-05-25T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132955#p132955 | page 1 | era: pre-1.18.1 -->

> **Mpukka wrote: Sat May 24, 2025 10:55 am**
> @Turtlefield. It launches only the game (wow.exe) not the turtle wow launcher. You have to add addons manually

any chance to add another button to also start the launcher? (even if booting the game isn't working like this) just to update the addons? :)

## Post 133539 by Ayrill — 2025-05-29T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133539#p133539 | page 1 | era: pre-1.18.1 -->

i saw a new update got pushed :D

RosettaX87 runs now as a service within the launcher (sudo password is still needed)

Is it possible to save the password in a local config file or disable the password check? (like the SuperWoW auto login via config?)

Also does that mean CrossOver is not needed anymore? (kinda new to that Mac stuff sorry :D)

## Post 133735 by murvar — 2025-05-31T09:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133735#p133735 | page 1 | era: pre-1.18.1 -->

This is awesome! Would it be possible to add support for VanillaFixes?

## Post 134003 by Ayrill — 2025-06-02T17:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134003#p134003 | page 1 | era: pre-1.18.1 -->

> **murvar wrote: Sat May 31, 2025 9:13 am**
> This is awesome! Would it be possible to add support for VanillaFixes?

im sure if you have vanilla fixes in the folder it works, because for me even SuperWoW is active when i boot the game :)

## Post 134045 by Akamizu — 2025-06-03T06:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134045#p134045 | page 1 | era: pre-1.18.1 -->

In my experience VanillaFixes on Apple Silicon reduces FPS by a lot. In Stormwind my FPS cuts in half

## Post 135086 by stevemcqueen — 2025-06-10T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135086#p135086 | page 1 | era: pre-1.18.1 -->

Wow, thats awesome. It finally works. Within cities sure it drops performance but finally I can play on the mac too. Thanks man appreciated.

## Post 136874 by Sarlin1337 — 2025-06-24T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136874#p136874 | page 1 | era: pre-1.18.1 -->

I am still new to MacOS, rosetta 2 is being discontinued as well as any intel based 32 bit support in future OS releases. I'm guessing that would affect this project as well.  I am a little concerned for the future, but they did add a MacOS gaming section and Steam got native support using chromium.

Still playing turtle WoW in a VM atm.

## Post 141603 by Deathsorrow — 2025-07-26T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=141603#p141603 | page 1 | era: pre-1.18.1 -->

Can somebody post some benchmarks ? How does TurtleSillicon perform on the m4 mini ? I have a m1 mini and it generally fluctuates around 50fps in the human starting zone.

## Post 144364 by Sichieri — 2025-08-11T00:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144364#p144364 | page 1 | era: pre-1.18.1 -->

I've been waiting for this since the 'Game Porting Toolkit' launched, and it finally happened!

Despite this, performance is still not what I'd like. I have an M1 Max with 32 GPUs and expected to run the game with at least 100+ FPS, but I can't even get 60. I'm not sure if I messed up any settings. Any tips would be appreciated. Thx.

## Post 144929 by Odinist — 2025-08-12T21:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144929#p144929 | page 1 | era: pre-1.18.1 -->

> **Deathsorrow wrote: Sat Jul 26, 2025 6:38 pm**
> Can somebody post some benchmarks ? How does TurtleSillicon perform on the m4 mini ? I have a m1 mini and it generally fluctuates around 50fps in the human starting zone.

Runs (well, ran...) great on my M4 mini. However, a few days ago I went ahead and jumped on the Tahoe beta, and it has tanked my performance with this. Even just the login screen is an absolute slideshow.

Cyberpunk 2077 and Baldur's Gate 3 both run noticeably better in macOS 26, so it's kinda funny that it tanked TurtleSilicon/TWoW. On a technical level, I'm sure it's just a matter of things working differently enough with gaming in 26 that TurtleSilicon will have to be updated to work with it properly, so I'll just have to be patient.

## Post 147751 by Akamizu — 2025-08-22T21:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147751#p147751 | page 1 | era: pre-1.18.1 -->

the poor performance is caused by ancient x87 instructions that rosetta has to run in software. a faster CPU gives more fps, which is why macs are heavily bottlenecked by single core CPU performance right now. a base M4 should perform better than a M1 Max

 **GPU cores don't matter for turtlesilicon**

tahoe was doing something weird with rosettax87 and we pushed an update that did a bit of bug fixing for macos 26, but i am testing everything on my personal machine which is still macos 15.5 - so i rely on testing from other users

## Post 148666 by Jindra — 2025-08-27T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148666#p148666 | page 1 | era: pre-1.18.1 -->

Hi... Im runnig it on my baseline old macbook air M1 16GB. Besides cities it runs well on the recommendet settings. I dont even mind the meh graphics. But today I went my firts dungeon (DM) and it was insinely bad with the FPS even worse then in Stormwind... Do you have any idea about how to work around this?

Im considiring to by a new Mac, but only if it will help:D If I go from M1 air to M3 pro or perhaps M4 air, do you thing it will be fixed? Or just waste of the money?:)

PS: Im not that crazy to buy new mac just becouse of the turtle, but it will be a big factor in getty the newest machin vs I would be buying olderone.

## Post 148752 by Camsco — 2025-08-27T19:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148752#p148752 | page 1 | era: pre-1.18.1 -->

Anyone noticing a Sound issue? I can't get any sound to play besides music and ambience.

## Post 149690 by Pukeevilya — 2025-09-01T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149690#p149690 | page 1 | era: pre-1.18.1 -->

Hello silicon lovers. Has anyone managed to download release 1.5.2 or the latest source code?

## Post 149799 by Miladin — 2025-09-01T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149799#p149799 | page 1 | era: pre-1.18.1 -->

Hey peeps..
Seems link is down?
Any other source where we can download this?

## Post 150668 by Aks666 — 2025-09-07T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150668#p150668 | page 1 | era: pre-1.18.1 -->

Looks like the project is dead... Site is offline

## Post 151464 by Gashrafdsh — 2025-09-12T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151464#p151464 | page 1 | era: pre-1.18.1 -->

<https://github.com/henhouse/TurtleSilicon>

edit: just tried it out, working flawlessly with my macbook pro M4 max so far

## Post 152003 by Maccabird5 — 2025-09-16T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152003#p152003 | page 1 | era: pre-1.18.1 -->

On macOS Tahoe, FPS drop down to like 1-2.  Updated Crossover and it unfortunately didn't fix the issue.  Anyone have any suggestions?

## Post 152247 by Aks666 — 2025-09-18T12:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152247#p152247 | page 1 | era: pre-1.18.1 -->

Can’t confirm.
Drops down to 5 FPS or worse happen to me only in some instances or places like the stronghold in grim reaches

## Post 152671 by Levana — 2025-09-22T11:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152671#p152671 | page 1 | era: pre-1.18.1 -->

Seems like its shut down from bliz.

Dont update ur os or ull have struggle with fps!

## Post 152672 by Dimastasc — 2025-09-22T12:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152672#p152672 | page 1 | era: pre-1.18.1 -->

Oh sure, of course! We’ll just keep on suffering, downloading all kinds of junk just to barely launch Turtle WoW and enjoy that “unique” experience of playing with calculator-level performance. But hey, at least it looks stylish! Because god forbid we buy a decent cheap laptop on Windows — that would be way too easy, and worse, it’s not an Apple. No, no, much better to suffer through laggy raids, freeze on every pack of mobs, and proudly say: “No Windows for me, only pain and suffering — but it’s beautiful!”

## Post 153311 by Aks666 — 2025-09-26T12:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153311#p153311 | page 1 | era: pre-1.18.1 -->

Windows idiots really need to rant everywhere. xD

## Post 153478 by Feroxus2 — 2025-09-27T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153478#p153478 | page 1 | era: pre-1.18.1 -->

Hello guys, I made this post yesterday. Hopefully it will help you as it did help me.
[embed: https://s9e.github.io/iframe/2/reddit.min.html#turtlewow/comments/1nr7uub#theme=]

## Post 153509 by Seanage — 2025-09-28T04:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153509#p153509 | page 1 | era: pre-1.18.1 -->

Hello, since project is shutdown, anyone keeping this update? This will not run properly on Macos Tahoe, lag is unplayable.

## Post 154549 by Satoriarie — 2025-10-06T02:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154549#p154549 | page 2 | era: 1.18.1-announced-pre-release -->

today update broke launch does anyone know how to fix?

## Post 154551 by Satoriarie — 2025-10-06T02:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154551#p154551 | page 2 | era: 1.18.1-announced-pre-release -->

AppleSilicon launcher WoW_tweaked
This application has encountered a critical error:
ERROR. #132 (0x85100084) Fatal Exception
Program: Z:,Users|satoriarieDownloads, TurtleWowbow_tweaked.exe
Exception: OxC000001D (ILLEGAL_INSTRUCTION) at 0107:006FA876 </>
el[ur
Press ok to terminate the apolication.
OK

## Post 154563 by Satoriarie — 2025-10-06T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154563#p154563 | page 2 | era: 1.18.1-announced-pre-release -->

so I tried VM Fusion and its not playeble anymore... all time sounds glitching and freezing..
Why TurtleWOW dont wanna make MacOS support, TurtleSilicon was so nice... but developer scary from lawsuit
So maybe some one have any guesses how to fix it

## Post 154593 by Satoriarie — 2025-10-06T11:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154593#p154593 | page 2 | era: 1.18.1-announced-pre-release -->

I fix it

## Post 154627 by Teul — 2025-10-06T18:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154627#p154627 | page 2 | era: 1.18.1-announced-pre-release -->

Yup, can't log-in anymore since the new update. Damn! Any alternatives?

## Post 154629 by Yanchesky — 2025-10-06T18:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154629#p154629 | page 2 | era: 1.18.1-announced-pre-release -->

> **Satoriarie wrote: Mon Oct 06, 2025 11:14 am**
> I fix it

How did you manage to fix it?

## Post 154663 by Satoriarie — 2025-10-07T04:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154663#p154663 | page 2 | era: 1.18.1-announced-pre-release -->

I instal VM put clean build update it with launcher and put back in macOS patch it with turtle silicon and it work

## Post 154693 by Desmond92 — 2025-10-07T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154693#p154693 | page 2 | era: 1.18.1-announced-pre-release -->

Hey, i have the same error too. Still can't login. Any solutions ?

And btw very strange issue in some dungeons my FPS drops to 0 on my mac M1

## Post 154733 by Noobedynoob — 2025-10-07T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154733#p154733 | page 2 | era: 1.18.1-announced-pre-release -->

can someone pls share that silicon launcher the website is down and i am unable to find it anywhere thanks in advance!

## Post 154923 by Aks666 — 2025-10-09T05:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154923#p154923 | page 2 | era: 1.18.1-announced-pre-release -->

> **Desmond92 wrote: Tue Oct 07, 2025 8:45 am**
> Hey, i have the same error too. Still can't login. Any solutions ?
>
>  And btw very strange issue in some dungeons my FPS drops to 0 on my mac M1

Yes, dungeons are unplayable unfortunately.

## Post 154927 by Desmond92 — 2025-10-09T06:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154927#p154927 | page 2 | era: 1.18.1-announced-pre-release -->

> **Aks666 wrote: Thu Oct 09, 2025 5:45 am**
> > **Desmond92 wrote: Tue Oct 07, 2025 8:45 am**
> > Hey, i have the same error too. Still can't login. Any solutions ?
> >
> >  And btw very strange issue in some dungeons my FPS drops to 0 on my mac M1
>
>   Yes, dungeons are unplayable unfortunately.

Ahh ok.. i will buy some cheap windows PC to play.

## Post 154937 by Korythael — 2025-10-09T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154937#p154937 | page 2 | era: 1.18.1-announced-pre-release -->

I play on a Mac ARM using VMware Fusion with a virtual machine running Windows 11, and it has been working perfectly for me for months without any issues. I haven’t installed anything on the Mac itself outside of the virtual machine

## Post 161061 by Stingray88 — 2025-11-29T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161061#p161061 | page 2 | era: 1.18.1-announced-pre-release -->

Hey all, I'm trying to get this working but I'm stumped right on the first step...

> 1. Launch TurtleSilicon.app

What app? I've downloaded the .zip file from the Github page. I've downloaded the client from Turtle WoW's website, and I've got CrossOver... but where is the app I'm supposed to run in step 1? There are no .app files in the package from Github or Turtle WoW...

What am I missing here?

## Post 162552 by Woronokin — 2025-12-12T09:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162552#p162552 | page 2 | era: 1.18.1-announced-pre-release -->

I found the TurtleSilicon project discord - <https://discord.gg/95eapx5m> , version 2.1.0 is already available for download there. Unfortunately, the launcher does not solve the problem of running on mac os 26.1 (tahoe), has anyone found a way to run the game on this version?

