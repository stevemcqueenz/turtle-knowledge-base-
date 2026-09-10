---
title: "Running the Turtle WoW client on an M1 Mac?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4345"
topic_id: 4345
forum_id: 3
forum: "Help & Support"
author: "Thefishyone"
author_authority: "player"
posted: "2022-09-23T05:28:00Z"
last_post: "2023-03-24T15:39:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T09:16:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Running the Turtle WoW client on an M1 Mac?

## Post 25876 by Thefishyone — 2022-09-23T05:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25876#p25876 | page 1 | era: pre-1.18.1 -->

So I have the opportunity to pick up a shiny new M1 Mac (been a PC guy since’98), but am not quite ready to give up my vanilla addiction yet. An M1 Mac will not natively run 32 bit software of any kind, but have any of you Macophiles gotten the Turtle client to run on an M1 Mac using Wine? If so, could you give me any pointers to getting it to run in a stable manner?

I don’t need an in-depth guide, just confirmation that someone out there made it work and some general pointers on how I can, as well.

Thanks!

## Post 26275 by Katysps — 2022-09-27T14:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26275#p26275 | page 1 | era: pre-1.18.1 -->

I have been unable to get it working on my M2 Mac, even with paid software like Crossover. From several days of searching, I can't find any guides or success stories. Anyone I've seen online that says it is running on an M1/M2 Mac does not post configuration files or details. I'm gonna mess with Parallels tonight when I get home but I think it might be a lost cause on M1/M2 Macs.

## Post 26324 by Allwynd01 (Bug Report Enthusiast) — 2022-09-28T07:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26324#p26324 | page 1 | era: pre-1.18.1 -->

Seems like getting an Apple computer nowadays is like setting oneself up for a scenario where gaming is more scarce than on Linux.

If you want to play games, I'd advise to stay away from Apple and their ARM CPUs. It seems that they don't get enough outside 3rd party support and Apple still believe that "because they are Apple" everyone will automatically and magically flock to them to bring them 3rd part support.

I have nothing against Apple, but this move from them was a douchebag one and it's causing their users more problems than fixing any. It just isn't worth it.

## Post 26376 by Shamma (Bug Report Enthusiast) — 2022-09-28T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26376#p26376 | page 1 | era: pre-1.18.1 -->

It must be very lucrative for 3rd party to want to mess with Apple. I used to develop software crossplattform and keep it up to date with MacOS. No more. They overhaul their OS/platform making it incompatible with what they used to have way too often.

To keep any native somewhat complex MacOS software running on a Mac you need to push updates every 2 years at least (if not every year) just to keep up with them "updating" OS X.

Then add to this completely changing the architecture every decade - they used to be PowerPC based in the 2000s, then became Intel based, now their own ARM. A lot of time needed on the software developers' side to make existing software work when a change like this happens.

Making software run that you do not have the source code for, and software that is not native to the OS in the first place... Monumental task.

## Post 27169 by Triblex — 2022-10-12T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27169#p27169 | page 1 | era: pre-1.18.1 -->

Finally. Turtle wow is playable on Apple Silicon over parallels 18 without crashes and texture glitches. If someone wants to play on mac m1/m2/etc you can download parallels desktop 18.0.2 from rutracker.

Tested on: Air M1, Pro 14 M1 Pro (i love apple macs naming   wary_turtle_head  )

## Post 29142 by Thefishyone — 2022-11-13T21:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29142#p29142 | page 1 | era: pre-1.18.1 -->

> **Triblex wrote: Wed Oct 12, 2022 10:55 am**
> Finally. Turtle wow is playable on Apple Silicon over parallels 18 without crashes and texture glitches. If someone wants to play on mac m1/m2/etc you can download parallels desktop 18.0.2 from rutracker.
>
>  Tested on: Air M1, Pro 14 M1 Pro (i love apple macs naming   wary_turtle_head  )

Very cool, I had given up hope.

You say you got it running on Parallels using which version of Windows? Will Parallels run x86 Windows, or do I have to get Windows for ARM?

## Post 29280 by Isildor — 2022-11-15T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29280#p29280 | page 1 | era: pre-1.18.1 -->

Just get regular windows 10, you don't need windows for arm

## Post 29339 by Triblex — 2022-11-16T12:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29339#p29339 | page 1 | era: pre-1.18.1 -->

> **Thefishyone wrote: Sun Nov 13, 2022 9:32 pm**
> Very cool, I had given up hope.
>
>  You say you got it running on Parallels using which version of Windows? Will Parallels run x86 Windows, or do I have to get Windows for ARM?

Parallels install Windows 11 Arm by default. Just install parallels and it will do his job.

## Post 29766 by Thefishyone — 2022-11-24T02:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29766#p29766 | page 1 | era: pre-1.18.1 -->

Awesome, many thanks!

Will it also work on newer versions of Parallels, or only the one you mentioned?

## Post 32243 by Mfrobinson — 2023-01-07T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32243#p32243 | page 1 | era: pre-1.18.1 -->

I too have successfully launched Turtle WOW on my ARM M1 using Parallels 18.  However the performance is so blazingly fast that my mouse control can't keep up.  The slightest movement of the mouse sends my view screaming to a new location.  Basically I can't control my character, nor examine terrain effectively.  Setting "system settings -> Accessibility -> Display -> Reduce Motion" has not effect. Any suggestions on how to slow things down?  Thanks!

Problem solved!  You MUST run the game in Parallels non-coherence mode where all performance returns to my Apple X86 architecture performance.  Run in Coherence mode and the mouse is uncontrollable.  Also... setting the Parallels VM to video games only mode, makes it impossible to perform any other sorts of file manipulation and editing (so if you use your VM for anything other than gaming, that's not an option.)

## Post 38261 by Noobturtle — 2023-03-19T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38261#p38261 | page 1 | era: pre-1.18.1 -->

I tried playing game using parallel I run the wow.exe from the parallel but im getting error 132 how can I fix that?

## Post 38408 by Sentic1989 — 2023-03-21T00:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38408#p38408 | page 1 | era: pre-1.18.1 -->

Hey, I'm also playing on an m2 MacBook pro. but I experience crashes every now and then. The screen will completely freeze and the sound goes in a loop. To get the game running again I need to force reset windows and ope the game again. its extremely frustrating. I have no idea whats really causing it either.

## Post 38896 by Kingawoo — 2023-03-24T15:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38896#p38896 | page 1 | era: pre-1.18.1 -->

> **Mfrobinson wrote: Sat Jan 07, 2023 5:47 pm**
> I too have successfully launched Turtle WOW on my ARM M1 using Parallels 18.  However the performance is so blazingly fast that my mouse control can't keep up.  The slightest movement of the mouse sends my view screaming to a new location.  Basically I can't control my character, nor examine terrain effectively.  Setting "system settings -> Accessibility -> Display -> Reduce Motion" has not effect. Any suggestions on how to slow things down?  Thanks!
>
>  Problem solved!  You MUST run the game in Parallels non-coherence mode where all performance returns to my Apple X86 architecture performance.  Run in Coherence mode and the mouse is uncontrollable.  Also... setting the Parallels VM to video games only mode, makes it impossible to perform any other sorts of file manipulation and editing (so if you use your VM for anything other than gaming, that's not an option.)

Settings > Hardware > Mouse & Keyboard > Mouse: Optimize for games

That's the fix I found for that issue.

