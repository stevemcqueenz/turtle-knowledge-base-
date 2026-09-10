---
title: "🐧 Turtle Launcher — Linux Guide"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16049"
topic_id: 16049
forum_id: 4
forum: "General"
author: "Shadowclone"
author_authority: "player"
posted: "2024-11-22T04:24:00Z"
last_post: "2025-08-28T06:11:00Z"
post_count: 32
pages: 1
fetched: "2026-09-10T09:41:31Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 🐧 Turtle Launcher — Linux Guide

## Post 109302 by Shadowclone — 2024-11-22T04:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109302#p109302 | page 1 | era: pre-1.18.1 -->

**Unfortunately, the new Turtle Launcher do not seem to work out of the box on the default Wine or Bottles, it kept crashing for me. After trying various methods, I found that Lutrix was the most effective solution to get the launcher up and running. In this guide, I'll walk you through the process step by step.**

- ****Step 1.**** — Download the Turtle Launcher client and unzip it into a desired folder on your Linux system. ![Image](https://i.imgur.com/3i94Umm.png)

- ****Step 2.**** — For this guide, we'll be using Lutrix with the Flatpak package manager. You can download Flatpak from Flathub (<https://flathub.org/apps/net.lutris.Lutris>). ![Image](https://i.imgur.com/r4dOfu7.png)

- ****Step 3.**** — Launch Lutrix and click the "+" button in the top-left corner. Select "Add locally installed game" from the menu. ![Image](https://i.imgur.com/22B0Cgt.png) ![Image](https://i.imgur.com/X3VZ4Y7.png)

- ****Step 4.**** — In the 'Game info' tab, enter 'Turtle' as the game name and select 'Wine' as the runner. ![Image](https://i.imgur.com/PABdLHc.png)

- ****Step 5.**** — On the 'Game options' tab, click the "..." button next to the working directory and select your Turtle WoW folder. For the executable, choose the TurtleWoW.exe file. ![Image](https://i.imgur.com/lC6UDpM.png)

- ****Step 6.**** — In the 'Runner options' tab, select 'GE-Proton' as the Wine version. ![Image](https://i.imgur.com/x5OlDzi.png)

- ****Step 7.**** — Save your changes and click the "Play" button to start the launcher. It takes a few seconds to start the first time. ![Image](https://i.imgur.com/E6HzbcB.png)

 **That's it! With these steps, you should be able to get Turtle Launcher up and running on your Linux system using Lutrix. Avoid clicking the 'Clean re-install' button on the launcher, as it wiped my entire PC for some reason.**

## Post 109303 by Shadowclone — 2024-11-22T04:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109303#p109303 | page 1 | era: pre-1.18.1 -->

**If this guide helped you and you'd like to show your gratitude, feel free to send me a in-game message or donation. My character's name is Shadowclone.**

/bow

![Image](https://i.imgur.com/bXVwqro.png)

## Post 109354 by Leordian — 2024-11-22T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109354#p109354 | page 1 | era: pre-1.18.1 -->

I use the launcher like you explained, but my game isn't working in a borderless window anymore. Is it me or this a lutris problem?

## Post 109385 by Shadowclone — 2024-11-22T14:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109385#p109385 | page 1 | era: pre-1.18.1 -->

> **Leordian wrote: Fri Nov 22, 2024 11:54 am**
> I use the launcher like you explained, but my game isn't working in a borderless window anymore. Is it me or this a lutris problem?

My borderless window is working without issues.

Are you using dual monitors? Have you tried doing a clean install from scratch? Is there anything specific about your setup? Have you tried to mess around with some Lutris settings to see if that fixes the issue?

## Post 109413 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-22T18:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109413#p109413 | page 1 | era: pre-1.18.1 -->

I appreciate the effort but this didn't work for me.  I did manage to get it to load but its very laggy and perma prompts to download the latest version.  On top of all that, it says "please close wow to continue" despite only the launcher being open.

Still, thank you for the guide.  Linux needs more love.

## Post 109415 by Allwynd01 (Bug Report Enthusiast) — 2024-11-22T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109415#p109415 | page 1 | era: pre-1.18.1 -->

It works with PortProton, you don't even have to do anything - just right click the .exe and select "Run with PortProton", it works just fine.

## Post 109670 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-24T14:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109670#p109670 | page 1 | era: pre-1.18.1 -->

They released an appimage.  Shout out to the launcher support channel on the twow discord.
[https://turtle-eu.b-cdn.net/client/CD3E ... W.AppImage](https://turtle-eu.b-cdn.net/client/CD3E89628289158D91BC9B351BEA0EE6FED6C7497BBAB9AB120517A1CC23D9AD/TurtleWoW.AppImage)

## Post 109680 by Shadowclone — 2024-11-24T15:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109680#p109680 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Sun Nov 24, 2024 2:46 pm**
> They released an appimage.  Shout out to the launcher support channel on the twow discord.
>  [https://turtle-eu.b-cdn.net/client/CD3E ... W.AppImage](https://turtle-eu.b-cdn.net/client/CD3E89628289158D91BC9B351BEA0EE6FED6C7497BBAB9AB120517A1CC23D9AD/TurtleWoW.AppImage)

The appimage is not working for me.

## Post 109683 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-24T15:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109683#p109683 | page 1 | era: pre-1.18.1 -->

> **Shadowclone wrote: Sun Nov 24, 2024 3:26 pm**
> > **Drubarrymooer wrote: Sun Nov 24, 2024 2:46 pm**
> > They released an appimage.  Shout out to the launcher support channel on the twow discord.
> >  [https://turtle-eu.b-cdn.net/client/CD3E ... W.AppImage](https://turtle-eu.b-cdn.net/client/CD3E89628289158D91BC9B351BEA0EE6FED6C7497BBAB9AB120517A1CC23D9AD/TurtleWoW.AppImage)
>
>   The appimage is not working for me.

Did you right click it and allow it to run as an executable?  You may have missing dependencies.

sudo add-apt-repository
ppa:ubuntu-toolchain-r/test sudo apt-get update
sudo apt-get install gcc-4.9 sudo apt-get upgrade libstdc++6

## Post 109687 by Dezhan (Barrens Chat Casualty) — 2024-11-24T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109687#p109687 | page 1 | era: pre-1.18.1 -->

Just use steam works great with launcher

## Post 109688 by Shadowclone — 2024-11-24T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109688#p109688 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Sun Nov 24, 2024 3:49 pm**
> > **Shadowclone wrote: Sun Nov 24, 2024 3:26 pm**
> > > **Drubarrymooer wrote: Sun Nov 24, 2024 2:46 pm**
> > > They released an appimage.  Shout out to the launcher support channel on the twow discord.
> > >  [https://turtle-eu.b-cdn.net/client/CD3E ... W.AppImage](https://turtle-eu.b-cdn.net/client/CD3E89628289158D91BC9B351BEA0EE6FED6C7497BBAB9AB120517A1CC23D9AD/TurtleWoW.AppImage)
> >
> >   The appimage is not working for me.
>
>  Did you right click it and allow it to run as an executable?  You may have missing dependencies.
>
>  sudo add-apt-repository
>  ppa:ubuntu-toolchain-r/test sudo apt-get update
>  sudo apt-get install gcc-4.9 sudo apt-get upgrade libstdc++6

It doesn't work for me. I've got the latest version of Zorin OS, Appimage's should already have all dependencies included. Why they don't make a flatpak instead?

## Post 109689 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-24T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109689#p109689 | page 1 | era: pre-1.18.1 -->

> **Dezhan wrote: Sun Nov 24, 2024 4:10 pm**
> Just use steam works great with launcher

It does not work for everyone unfortunately.  That's the whole point of this thread.

## Post 109690 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-24T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109690#p109690 | page 1 | era: pre-1.18.1 -->

> **Shadowclone wrote: Sun Nov 24, 2024 4:14 pm**
> > **Drubarrymooer wrote: Sun Nov 24, 2024 3:49 pm**
> > > **Shadowclone wrote: Sun Nov 24, 2024 3:26 pm**
> > > The appimage is not working for me.
> >
> >  Did you right click it and allow it to run as an executable?  You may have missing dependencies.
> >
> >  sudo add-apt-repository
> >  ppa:ubuntu-toolchain-r/test sudo apt-get update
> >  sudo apt-get install gcc-4.9 sudo apt-get upgrade libstdc++6
>
>   It doesn't work for me. I've got the latest version of Zorin OS, Appimage's should already have all dependencies included. Why they don't make a flatpak instead?

That's a good question.   The machine I got it running on is running the latest version of Zorin as well.  That's unfortunate its not working for you.  I'm sorry I can't help more.  My knowledge is quite limited.

I would check out launcher support in the twow discord.

## Post 115425 by Crapman — 2025-01-04T18:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115425#p115425 | page 1 | era: pre-1.18.1 -->

cant continue on first time set-up. cant selcet a download region either. do someone know more about this problem?

[embed: //drive.google.com/file/d/1_hRh-42gO8DoORDfcwG2fk5Oo-g8dUVl/preview]

## Post 115436 by Tialian — 2025-01-04T21:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115436#p115436 | page 1 | era: pre-1.18.1 -->

> **Crapman wrote: Sat Jan 04, 2025 6:49 pm**
> cant continue on first time set-up. cant selcet a download region either. do someone know more about this problem?
>
>
> [embed: //drive.google.com/file/d/1_hRh-42gO8DoORDfcwG2fk5Oo-g8dUVl/preview]

I ran into this same issue trying to setup through Lutris yesterday, what I ended up doing is going through Steam, adding non-steam game and pointing it to the WoW.exe from the download.

Then enable compatibility, proton experimental.

## Post 115469 by Allwynd01 (Bug Report Enthusiast) — 2025-01-05T07:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115469#p115469 | page 1 | era: pre-1.18.1 -->

I think there is an issue with the Linux launcher. I emphasize the Linux launcher, the one that's not an .exe, but an .appimage instead. When I start the game through it, there are two problems:

 1. you can't switch between characters in the character select screen, as soon as you click on another character, the UI of the game sort of freezes and you only hear the music, you can leave the game like that and it won't fix itself

 2. when you log into your character and you are in the loading screen, waiting for that progress bar to fill up, as soon as it completely fills up, it remains like this indefinitely, you just hear the music, I think it's a combination of the login music + the music of the zone you're in right now, you can also leave it for 30 minutes like that if you want, it won't fix itself

The only fix is to close the launcher. For some reason, leaving it running after launching the game causes some severe problems. I usually close the launcher as soon as I click on PLAY.

If this problem can't be fixed, then there should at least be an option added into the launcher settings where as soon as you start the game, the launcher closes. Other games I've seen that use launchers have this feature for one reason or another.

## Post 115597 by Crapman — 2025-01-06T12:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115597#p115597 | page 1 | era: pre-1.18.1 -->

> **Tialian wrote: Sat Jan 04, 2025 9:32 pm**
> > **Crapman wrote: Sat Jan 04, 2025 6:49 pm**
> > cant continue on first time set-up. cant selcet a download region either. do someone know more about this problem?
> >
> >
> > [embed: //drive.google.com/file/d/1_hRh-42gO8DoORDfcwG2fk5Oo-g8dUVl/preview]
>
>   I ran into this same issue trying to setup through Lutris yesterday, what I ended up doing is going through Steam, adding non-steam game and pointing it to the WoW.exe from the download.
>
>  Then enable compatibility, proton experimental.

this works like a charm, even with the turtlewow.exe so i can use the nice launcher and its tweaks, addons and mods whats the reason for me was to try this. earlier i just console "wine wow.exe" packed into a starter just to click it - works for me all the time. steam proton does anything more than lutris, dont know. thank you very much.

## Post 115649 by Tialian — 2025-01-06T17:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115649#p115649 | page 1 | era: pre-1.18.1 -->

> **Crapman wrote: Mon Jan 06, 2025 12:19 pm**
> this works like a charm, even with the turtlewow.exe so i can use the nice launcher and its tweaks, addons and mods whats the reason for me was to try this. earlier i just console "wine wow.exe" packed into a starter just to click it - works for me all the time. steam proton does anything more than lutris, dont know. thank you very much.

Oh nice, I didn't even consider using the Turtle launcher but gave it a try and looks like it has some nice tweaks to enable. It doesn't have a description for most of the addons so room for improvement there, but may circle back to look at those more after I see how the tweaks improve things.

## Post 117302 by Chillmaxed — 2025-01-20T00:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117302#p117302 | page 1 | era: pre-1.18.1 -->

AppImage did not work for me without crashing repeatedly in character selection screen.
Unsure of what might be missing on my end (Fedora 41 Workstation)

This method with using Lutris and the .exe works like a charm and no issues so far.

Thank you very much!

## Post 118440 by Aggroholic — 2025-01-30T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118440#p118440 | page 1 | era: pre-1.18.1 -->

I was able to install it in Manjaro using this guide. In orde to launch the game from the launcher.

I tried to use the .AppImage but when the wow.exe started it will freeze and stop responding, although if I ran the wow exe directly I worked just fine.

## Post 119682 by Ulfheddir — 2025-02-12T01:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119682#p119682 | page 1 | era: pre-1.18.1 -->

Can this work for VM's Ubuntu? I tried install lutris, but have issue with URL (net.lutris.Lutris), can't install it. Appimage just didnt run (yeah, i eun it like executable). So. if you can help me - help, please)

## Post 121165 by doctorappimage — 2025-02-27T22:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121165#p121165 | page 1 | era: pre-1.18.1 -->

Hello,

I tried running the appimage on my debian-based system. I got the following error.
Code: Select all

```
:$ ./TurtleWoW.AppImage
A JavaScript error occurred in the main process
Uncaught Exception:
Error: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.32' not found (required by /tmp/user/1000/.org.chromium.Chromium.5yq43I)
at process.func [as dlopen] (node:electron/js2c/asar_bundle:2:2131)
at Object.<anonymous> (node:internal/modules/cjs/loader:1356:18)
at Object.func [as .node] (node:electron/js2c/asar_bundle:2:2358)
at Module.load (node:internal/modules/cjs/loader:1126:32)
at node:internal/modules/cjs/loader:967:12
at Function._load (node:electron/js2c/asar_bundle:2:13327)
at Module.require (node:internal/modules/cjs/loader:1150:19)
at require (/tmp/user/1000/.mount_TurtleV7y2k4/resources/app.asar/out/main/bytecode-loader.js:53:19)
at Module.<anonymous> (evalmachine.<anonymous>:1:2169)
at Module._extensions..jsc (/tmp/user/1000/.mount_TurtleV7y2k4/resources/app.asar/out/main/bytecode-loader.js:71:26)
```

Please fix!

In fact, the appimages are supposed to be libre software under GPL, right? Where is the source code? If we can see the source code, code monkeys in the community can try to fix it. Or are the appimages proprietary/closed source?

A WoW/Linux youtuber by the name of "Waffles" has already made a video on the deficiencies of this appimage. See the video "Appimages Aren't Really Fit for Purpose" at Code: Select all

```
https://youtu.be/VVioHJhl5ds
```

.

Given this, can we hope to see a flatpak for Turtle WoW at some point in the future? Your responses are much appreciated.

## Post 124780 by Alunda — 2025-03-31T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124780#p124780 | page 1 | era: pre-1.18.1 -->

Same here on Debian 12 Bookworm:
Code: Select all

```
A JavaScript error occurred in the main process
Uncaught Exception:
Error: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.32' not found (required by /tmp/.org.chromium.Chromium.oyBv0d)
at process.func [as dlopen] (node:electron/js2c/asar_bundle:2:2131)
at Object.<anonymous> (node:internal/modules/cjs/loader:1356:18)
at Object.func [as .node] (node:electron/js2c/asar_bundle:2:2358)
at Module.load (node:internal/modules/cjs/loader:1126:32)
at node:internal/modules/cjs/loader:967:12
at Function._load (node:electron/js2c/asar_bundle:2:13327)
at Module.require (node:internal/modules/cjs/loader:1150:19)
at require (/tmp/.mount_Turtle1tobgZ/resources/app.asar/out/main/bytecode-loader.js:53:19)
at Module.<anonymous> (evalmachine.<anonymous>:1:2169)
at Module._extensions..jsc (/tmp/.mount_Turtle1tobgZ/resources/app.asar/out/main/bytecode-loader.js:71:26)
```

Meanwhile the client itself runs fine with: Code: Select all

```
wine WoW.exe
```

## Post 127108 by Merides — 2025-04-17T07:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127108#p127108 | page 1 | era: pre-1.18.1 -->

Greetings :)

i got this error too, but i searched a bit in the net and found a solution which actually works for me. So regarding the mentioned error message - posted from Alunda -
> A JavaScript error occurred in the main process
>  Uncaught Exception:
>  Error: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.32' not found (required by /tmp/.org.chromium.Chromium.oyBv0d)
>  at process.func [as dlopen] (node:electron/js2c/asar_bundle:2:2131)
>  at Object.<anonymous> (node:internal/modules/cjs/loader![:1356:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1356.svg)18)
>  at Object.func [as .node] (node:electron/js2c/asar_bundle:2:2358)
>  at Module.load (node:internal/modules/cjs/loader![:1126:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1126.svg)32)
>  at node:internal/modules/cjs/loader:967:12
>  at Function._load (node:electron/js2c/asar_bundle:2:13327)
>  at Module.require (node:internal/modules/cjs/loader![:1150:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1150.svg)19)
>  at require (/tmp/.mount_Turtle1tobgZ/resources/app.asar/out/main/bytecode-loader.js:53:19)
>  at Module.<anonymous> (evalmachine.<anonymous>:1:2169)
>  at Module._extensions..jsc (/tmp/.mount_Turtle1tobgZ/resources/app.asar/out/main/bytecode-loader.js:71:26)

in the first place i thought it could be an issue with chromium so i installed chromium first, but that didn't helped and so it is really what the message describes ***surprise*** it could be solved by adding and updating sources for the actually installed GLIBC.

So what i did was the following: Code: Select all

```
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
```

... starting the appimage via terminal shows a normal startup and everything works fine: Code: Select all

```
surila@~/Games/WoWTurtle ./TurtleWoW.AppImage
09:23:55.734 › Launcher v1.3.1 starting in "/home/tofe/Games/WoWTurtle"...
libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
09:23:56.734 › Local version "1.17.2 (7207)" is missing, setting based on server "EU"
09:23:56.735 › Verifying addons...
09:23:56.747 › Loading profiles...
09:23:57.016 › [Fetch] Cache miss for "/api/addons"
09:23:57.089 › Verifying client files at /home/tofe/Games/WoWTurtle...
09:23:57.335 › [Fetch] Cache miss for "/api/files/EU"
09:23:57.766 › Reading client version...
09:23:57.778 › Client version is: 1.17.2 (7207)
09:23:58.372 › [Fetch] Cache miss for "/tweets/10"
09:23:58.375 › [Fetch] Cache miss for "/topics"
09:23:59.876 › Addon "KLHThreatMeter" has an update available
```

I'm using Linux Mint 21.3 (Virginia) which is based on Ubuntu 22.04 (jammy). Actually i'm searching for a solution to make this working with steam + proton - If i found one i will post it here too ;)

I hope this helps a bit.

Cheers

## Post 127124 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-04-17T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127124#p127124 | page 1 | era: pre-1.18.1 -->

> **Merides wrote: Thu Apr 17, 2025 7:35 am**
> Greetings :)
>
>  i got this error too, but i searched a bit in the net and found a solution which actually works for me. So regarding the mentioned error message - posted from Alunda -
> > A JavaScript error occurred in the main process
> >  Uncaught Exception:
> >  Error: /lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.32' not found (required by /tmp/.org.chromium.Chromium.oyBv0d)
> >  at process.func [as dlopen] (node:electron/js2c/asar_bundle:2:2131)
> >  at Object.<anonymous> (node:internal/modules/cjs/loader![:1356:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1356.svg)18)
> >  at Object.func [as .node] (node:electron/js2c/asar_bundle:2:2358)
> >  at Module.load (node:internal/modules/cjs/loader![:1126:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1126.svg)32)
> >  at node:internal/modules/cjs/loader:967:12
> >  at Function._load (node:electron/js2c/asar_bundle:2:13327)
> >  at Module.require (node:internal/modules/cjs/loader![:1150:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1150.svg)19)
> >  at require (/tmp/.mount_Turtle1tobgZ/resources/app.asar/out/main/bytecode-loader.js:53:19)
> >  at Module.<anonymous> (evalmachine.<anonymous>:1:2169)
> >  at Module._extensions..jsc (/tmp/.mount_Turtle1tobgZ/resources/app.asar/out/main/bytecode-loader.js:71:26)
>
>  in the first place i thought it could be an issue with chromium so i installed chromium first, but that didn't helped and so it is really what the message describes ***surprise*** it could be solved by adding and updating sources for the actually installed GLIBC.
>
>  So what i did was the following: Code: Select all
>
> ```
> sudo add-apt-repository ppa:ubuntu-toolchain-r/test
> sudo apt-get update
> sudo apt-get upgrade
> sudo apt-get dist-upgrade
> ```
>
>   ... starting the appimage via terminal shows a normal startup and everything works fine: Code: Select all
>
> ```
> surila@~/Games/WoWTurtle ./TurtleWoW.AppImage
> 09:23:55.734 › Launcher v1.3.1 starting in "/home/tofe/Games/WoWTurtle"...
> libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
> 09:23:56.734 › Local version "1.17.2 (7207)" is missing, setting based on server "EU"
> 09:23:56.735 › Verifying addons...
> 09:23:56.747 › Loading profiles...
> 09:23:57.016 › [Fetch] Cache miss for "/api/addons"
> 09:23:57.089 › Verifying client files at /home/tofe/Games/WoWTurtle...
> 09:23:57.335 › [Fetch] Cache miss for "/api/files/EU"
> 09:23:57.766 › Reading client version...
> 09:23:57.778 › Client version is: 1.17.2 (7207)
> 09:23:58.372 › [Fetch] Cache miss for "/tweets/10"
> 09:23:58.375 › [Fetch] Cache miss for "/topics"
> 09:23:59.876 › Addon "KLHThreatMeter" has an update available
> ```
>
>   I'm using Linux Mint 21.3 (Virginia) which is based on Ubuntu 22.04 (jammy). Actually i'm searching for a solution to make this working with steam + proton - If i found one i will post it here too ;)
>
>  I hope this helps a bit.
>
>  Cheers

Just an idea, if you haven't already, but you should try asking on the Mint forums as well.  I cut my teeth on Mint and remember those forums being one of the most friendly and helpful of all the various Linux communities.  Just a friendly suggestion.  GL!

## Post 127133 by Merides — 2025-04-17T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127133#p127133 | page 1 | era: pre-1.18.1 -->

Thanks for the idea ;) ... but this is actual a pretty good workaround solution for me to start the launcher for updating the addons via appimage and looking for news and updating the game as well. For the game start i use my steam/proton link to the game, which works as expected if i run it via VanillaFixes.exe or WoW.exe inside my steam library.

## Post 128467 by Merides — 2025-04-25T14:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128467#p128467 | page 1 | era: pre-1.18.1 -->

Hello again :),

i had some time to think this over again and after the solution i already provided (adding the ppa + updating - see my last posts) i just found out that i can modify the "launch arguments" in the settings of the turtle wow (appimage-) launcher and point to my existing steam installation of turtle wow - this does the trick for me - i just configured this argument and starting the game with the following command: Code: Select all

```
steam steam://rungameid/15131900130145337344
```

... were the number here is the gameid of turtle wow in my steam library (this has to be changed to your own steam id if someone wants to try this).

To get this ID (you need to have steam already been installed and turtle wow configured as a "non steam game" in your steam library. Then just choose the settings wheel and create a desktop shortcut. After this, right click on the created shortcut and click on properties - there you should find your gameid.

After that you can delete the shortcut of course ;) - it's only a workaround to get the ID.

I tested it and it works just as expected - Enjoy and have fun!

Cheers

## Post 132022 by Steakhouse (Patch Note Conspiracy Theorist) — 2025-05-20T00:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132022#p132022 | page 1 | era: pre-1.18.1 -->

Howdie ! I installed Fedora Workstation 42 today and have been getting things set up. Like others in this thread, going through Lutris did not work - I immediately get a WoW error saying I'm trying to read from an invalid address, but running with Wine works fine, by simply opening a command line in my WoW folder and running Code: Select all

```
wine WoW.exe
```

. This is a bit of a chore and Wine doesn't show up in my "open with" options. Any suggestions ?

## Post 132024 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-05-20T01:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132024#p132024 | page 1 | era: pre-1.18.1 -->

> **Steakhouse wrote: Tue May 20, 2025 12:39 am**
> Howdie ! I installed Fedora Workstation 42 today and have been getting things set up. Like others in this thread, going through Lutris did not work - I immediately get a WoW error saying I'm trying to read from an invalid address, but running with Wine works fine, by simply opening a command line in my WoW folder and running Code: Select all
>
> ```
> wine WoW.exe
> ```
>
> . This is a bit of a chore and Wine doesn't show up in my "open with" options. Any suggestions ?

On lutris, are you using proton-ge?  I'm on Nobara 42 which is based on fedora.

On shortcuts, unfortunately making wine shortcuts is beyond my RHEL knowledge.

## Post 144369 by Qpe — 2025-08-11T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144369#p144369 | page 1 | era: pre-1.18.1 -->

No matter what i do, what runner i use, route of installation, i always end up with a white box, a black box, or no box at all.

## Post 144524 by Keurcte — 2025-08-11T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144524#p144524 | page 1 | era: pre-1.18.1 -->

Hello, Linux user here.  Recently just signed up to Turtle WoW this last weekend.  Been amazing.

If you are a Steam user, and have steam client for Linux installed this is what I did.

Extract the client contents to your home folder, such as ~/TWoW
Run steam, and go to your Library.  On the bottom left corner there is an add game option.  Click it and add Non-Steam Game.
Point it to the WoW.exe in your ~/TWoW folder (Or whatever folder you called it).
Once the game is added right click and go to properties then to compatibility.  I ran it on expiremental for the Proton version.

I hope those steps are easy enough to follow, if not I can write better once I am home if need be.

EDIT: I did see someone mentioned this does not work for everyone.  One thing to try is to use different Proton versions and see if you find one that can work.

## Post 148836 by Turney — 2025-08-28T06:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148836#p148836 | page 1 | era: pre-1.18.1 -->

What worked for me was to use the preset "turtlewow" in Lutris, which fails when trying to download the game files (I guess it has a deprecated file/server), and use the manually downloaded .zip-file from the website.
Instantly worked like a charm, Ubuntu 24.04.

