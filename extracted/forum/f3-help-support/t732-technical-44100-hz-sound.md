---
title: "Technical: 44100 Hz sound"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=732"
topic_id: 732
forum_id: 3
forum: "Help & Support"
author: "Musse"
author_authority: "player"
posted: "2019-08-20T08:31:00Z"
last_post: "2023-11-10T13:33:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:59:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Technical: 44100 Hz sound

## Post 3765 by Musse (Barrens Chat Casualty) — 2019-08-20T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3765#p3765 | page 1 | era: pre-1.18.1 -->

I have a new sound device based on wireless headphones. They work flawlessly in other software, except in the WoW client. In the client I sometimes hear some static noise, and this wether or not I have ingame music on. I read on the web about the (vanilla) client and this problem, and there was a suggestion to make sure the sound output from the sound device is 48000 Hz (DVD quality) to get rid of the problem.

I don't have any static noise problems when using my main sound output, which is HMDI-sound at 48000 Hz to external speakers connected to my monitor. Nor do I have any "switching" sound problems when using this sound device (see below).

Unfortunately the highest sound my wireless headphones can output is 44100 Hz (CD quality).
Is there some hidden setting in a eg. "INF-file" to set the client to output lower quality sound (if this in fact is the problem - I'm a bit sceptical)?

I also have a problem, when using headphoines, where if switching between software and then switching back to the WoW client sometimes the sound disappear all together. Though this is only if running two clients, and the sound disapearing is only from one client. This is also only if I inbetween switching client changed the default sound output between speakers and headphones. I'm pretty sure the problem is because the "silent" client tries to send the sound to the "wrong" sound device. Any hidden setting to force the client to send the sound to a specific sound device and not like now to the Windows default device? Such a setting would also be great if you wanted the WoW sound coming from one sound device, and sound from other software from another (eg. default device).

Please note that all the mentioned problems are occasionally and not always, so it's hard to analyze the problems exactly!

I'm running Windows 10 (LTSC 1809 / 17763.678) 64bit.
Intel Dual Core @ 3.0 Ghz + NVidia GT 710 + 16 GB Ram
The HDMI-sound mentioned comes from the GT 710.
The Headphones again are bluetooth 5 connected via a bluetooth 4 dongle over USB 2.0.
I run the WoW client in something you could call "medium" graphics settings. No video problems.
No performance problems in any (other) software or games (even AutoCAD 2017 runs very smoothly).

EDIT: I notice no matter what sound device I use, the WoW client doesn't have "backgound" sound, ie. no sound if you minimize the client (running Windowed mode). This fact might be the part of the problem where sound disapear from one client which using two clients and switcing between them.

## Post 3912 by Fedaykin — 2019-09-13T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3912#p3912 | page 1 | era: pre-1.18.1 -->

First off, im not a dev, or staff, so lets get that outta the way...

Now then, this is more of a windows based / hardware issue than a client issue.
The sound options in Vanilla are pretty basic, and any edit to a config or inf file can
introduce some instabilities.

Not saying that your issue isn't a problem, but the easiest solution may be to just run
the sound back thru your speakers, or, whatever hardware you have that didn't manifest
this issue. You could also tweak your sound settings thru windows and the volume control /
mixer applet, or third party (if it uses it) software from the manufacturer. On My personal
Machine: Win 10 /i7 8 core/12gb ram/ and BT 4, any sound coming thru my BT connection
sux hard, lol, so i just use wired headphones....

My 2 pence worth, but i really think you should dig into windows for a solution...

Sorry  turtle_tongue

## Post 3982 by Musse (Barrens Chat Casualty) — 2019-09-18T02:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3982#p3982 | page 1 | era: pre-1.18.1 -->

I had two problem here - when using bluetooth headset:

 1) some static noise, and not always
Must have to do with the headset solution itself. I guess not much to do. I acctually don't think it's related to sound quality (Hz).

 2) that sound from only one (Windows) program was heard at a time - the one "maximized".
Turned out to be wrong "output" from the headset.
The headset creates two sound outputs in Windows Sound: "Headphones" and "Headset and Microphone". If settting "Headphones" as default, I have the issue that background programs don't produce sounds, but with "Headset and Microphone" as default I can hear sound from all running programs, also those minimized.
Seems this was/is a Windows issue. Has nothing to do with the WoW client. Same problem (if "Headphones") with any two Windows programs. Strange one though ...

Yes, any bluetooth solution sux :P Bluetooth is a flopp, but I don't have an option due to cost. If I were rich I would get a Plantronics wireless - non-bluetooth :)

## Post 4038 by Yutilk (Barrens Chat Casualty) — 2019-09-21T07:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4038#p4038 | page 1 | era: pre-1.18.1 -->

Did you ever fix this issue? maybe I could help.

## Post 4052 by Musse (Barrens Chat Casualty) — 2019-09-22T15:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4052#p4052 | page 1 | era: pre-1.18.1 -->

> **Yutilk wrote: Sat Sep 21, 2019 7:17 am**
> Did you ever fix this issue? maybe I could help.

Thanks, as I wrote in my last post I see my issues as "solved".

The static issue (which is not very bad) is not much to do about, since if I listen VERY carefully also my speakers/other sound output creates a very weak static "pop" sometimes. Eg, when mounting/dismounting. It's just much cleared when you wear headphones. This must simply have to do with the sound quality of the client itself.

The other issue was really just about which sound output I choose in Windows Sound (Control Panel).

And in the end, same old story, anything wireless cannot compete with wired stuff. Keep your wiring mess and things are better. :)

## Post 76786 by Neinnlive — 2023-11-10T13:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76786#p76786 | page 1 | era: pre-1.18.1 -->

> **Musse wrote: Sun Sep 22, 2019 3:30 pm**
> > **Yutilk wrote: Sat Sep 21, 2019 7:17 am**
> > Did you ever fix this issue? maybe I could help.
>
>   Thanks, as I wrote in my last post I see my issues as "solved".
>
>  The static issue (which is not very bad) is not much to do about, since if I listen VERY carefully also my speakers/other sound output creates a very weak static "pop" sometimes. Eg, when mounting/dismounting. It's just much cleared when you wear headphones. This must simply have to do with the sound quality of the client itself.
>
>  The other issue was really just about which sound output I choose in Windows Sound (Control Panel).
>
>  And in the end, same old story, anything wireless cannot compete with wired stuff. Keep your wiring mess and things are better. :)

Any Idea how i change my output device for Turtle WoW?

