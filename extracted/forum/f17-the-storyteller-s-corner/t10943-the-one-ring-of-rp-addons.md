---
title: "The One Ring... of RP addons"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10943"
topic_id: 10943
forum_id: 17
forum: "The Storyteller’s Corner"
author: "Luxlorica"
author_authority: "player"
posted: "2023-10-16T18:54:00Z"
last_post: "2023-10-19T20:32:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T10:45:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The One Ring... of RP addons

## Post 71325 by Luxlorica — 2023-10-16T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71325#p71325 | page 1 | era: pre-1.18.1 -->

Is there an agreed upon RP addon that everyone uses?

I tried turtlerp but it is very broken.

And since that kind of addon only matters if others are using it too, is there one that is recomended?

## Post 71338 by Kefke (Patch Note Conspiracy Theorist) — 2023-10-16T20:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71338#p71338 | page 1 | era: pre-1.18.1 -->

TurtleRP *shouldn't* be broken. Double check your install? Because that *is* the one that I and many others use.

## Post 71344 by Luxlorica — 2023-10-16T21:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71344#p71344 | page 1 | era: pre-1.18.1 -->

Alas, mine is very broken, a global variable in a nil state and nothing works. I got the v1.1.1 installed, it shows up just fine, the gui is there, but touch a button and it just hands out errors.

I tried the 1.1.0 version and no good.

I toddled on over to the discord, there is a long bug report channel with several of these indications from after the patch. Many people having similar problems. But no response from anyone on the development side.

So I am wondering if the app is just busted and people have moved to something else.

## Post 71381 by Kefke (Patch Note Conspiracy Theorist) — 2023-10-17T02:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71381#p71381 | page 1 | era: pre-1.18.1 -->

All I can say for sure is that I use it on my characters, and haven't had any issues. In fact, I just signed in to mess around with it, and confirmed it's currently working for me.

![Image](https://i.imgur.com/N5CnlM9.png)

As you can see, there's a fair bit of activity going on. Sorry to hear that it's not working for you, and I hope that you'll be able to resolve whatever is wrong.

## Post 71937 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-10-18T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71937#p71937 | page 1 | era: pre-1.18.1 -->

> **Luxlorica wrote: Mon Oct 16, 2023 9:23 pm**
> Alas, mine is very broken, a global variable in a nil state and nothing works. I got the v1.1.1 installed, it shows up just fine, the gui is there, but touch a button and it just hands out errors.

If even one value in your character's **TurtleRP.lua** file is wrong or misconfigured, it causes the AddOn to completely break.  The only way to fix this is to delete each character's individual **TurtleRP.lua** file, then redo their profiles in the game.

You can open the lua files in a text editor and retrieve your character's profile information if need be.  I'd recommend popping that stuff into a text document for future ease of access.

To answer your original question, though, there's nothing like "TotalRP" for vanilla *World of Warcraft*.  "TurtleRP" is the most functional vanilla roleplaying AddOn, but people still use "MyRolePlay" on occasion.  Even if one joins the appropriate global channels, the two aren't presently compatible with one another, sadly.

*Last edited by Jolikmc on Wed Oct 18, 2023 8:58 pm, edited 1 time in total.*

## Post 71965 by Gundrust0 — 2023-10-18T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71965#p71965 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Tue Oct 17, 2023 2:33 am**
> As you can see, there's a fair bit of activity going on. Sorry to hear that it's not working for you, and I hope that you'll be able to resolve whatever is wrong.

What version are you using? because the one on TWOW wiki (<https://tempranova.github.io/turtlerp/>) didn't work for me, granted, i didn't cleared my WTF for any remnants of 'other' versions.

## Post 71990 by Kefke (Patch Note Conspiracy Theorist) — 2023-10-18T21:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71990#p71990 | page 1 | era: pre-1.18.1 -->

> **Gundrust0 wrote: Wed Oct 18, 2023 6:23 pm**
> > **Kefke wrote: Tue Oct 17, 2023 2:33 am**
> > As you can see, there's a fair bit of activity going on. Sorry to hear that it's not working for you, and I hope that you'll be able to resolve whatever is wrong.
>
>   What version are you using? because the one on TWOW wiki (<https://tempranova.github.io/turtlerp/>) didn't work for me, granted, i didn't cleared my WTF for any remnants of 'other' versions.

I used the the same one, so I really don't know. Sorry. I know it sucks to hear "it worked for me", but without knowing your setup, I really wouldn't know where to begin on giving advice.

## Post 72020 by Luxlorica — 2023-10-19T04:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72020#p72020 | page 1 | era: pre-1.18.1 -->

Solution

I removed all the saved variable for the addon, removed the addon, and the reinstalled it and now it works. I can only guess that a saved variable was malformed and that goofed it all up.

But there we go.

## Post 72039 by Kefke (Patch Note Conspiracy Theorist) — 2023-10-19T07:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72039#p72039 | page 1 | era: pre-1.18.1 -->

Congrats! Glad to hear you got it resolved.

## Post 72233 by Gundrust0 — 2023-10-19T20:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72233#p72233 | page 1 | era: pre-1.18.1 -->

Word of advice, install this manually, I was using the GitAddonManager from the wiki and that was the problem. I just installed it manually (freshly downloaded from the same repo) and it works alright.

