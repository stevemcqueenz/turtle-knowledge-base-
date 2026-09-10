---
title: "[Release] CleveRoidMacros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16633"
topic_id: 16633
forum_id: 18
forum: "AddOns"
author: "Mewtinybray"
author_authority: "player"
posted: "2024-12-20T18:28:00Z"
last_post: "2026-02-04T16:09:00Z"
post_count: 24
pages: 1
fetched: "2026-09-10T10:22:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] CleveRoidMacros

## Post 113607 by Mewtinybray — 2024-12-20T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113607#p113607 | page 1 | era: pre-1.18.1 -->

CleveRoidMacros
 *If CleverMacro and Roid-Macros had a lovechild...*
---

- Modern and advanced macros.  Nearly all modern conditionals where possible.
- Fully dynamic icons and tooltips with #showtooltip
- Cast sequence support
- Additional slash commands for /startattack, /petattack, /retarget and more..
- Additional conditionals to check for buff including stack count and time remaining (on player)
- Mouseover and focus support *focus requires other addons to provide it
- Macros will highlight, respond to if they're usable, in/out of range and mana/rage/energy
- Macros will show item counts and cast counts of spells requiring reagents
- And more ...

---
Read the README. Questions and feedback welcomed.  Open an issue on GitHub or ask in the [#addons-support](https://discord.com/channels/466622455805378571/466627627554439178) channel on Discord.

 **Download and Instructions:** [GitHub](https://github.com/bhhandley/CleveRoidMacros)

## Post 114504 by Gahnfaustt — 2024-12-27T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114504#p114504 | page 1 | era: pre-1.18.1 -->

Hey i am using your addon since a few days now and love it so far. Makes alot of things much easier.
But i cant figure out out to make a mouseover Macro for abilites such as Taunt or Shield Bash for example.

#showtooltip
/startattack
/cast [mod:shift,@mouseover, harm][harm][@targettarget] Taunt

is what i got but it doesnt work. How could i fix this

## Post 114505 by Mewtinybray — 2024-12-27T13:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114505#p114505 | page 1 | era: pre-1.18.1 -->

The cascading conditional blocks is syntax for Classic/Retail so it won't work.  I'll have that coming in one of the next releases.  I already have it working, just need to deal with some other fixes before I release that.

That being said, you'd want to do something like:
> #showtooltip
>  /startattack
>  /cast [@mouseover mod:shift harm] Taunt
>  /cast [harm] Taunt
>  /cast [@targettarget] Taunt

You can still one-line it, just have to be more expanded for now:

> #showtooltip
>  /startattack
>  /cast [@mouseover mod:shift harm] Taunt; [harm] Taunt; [@targettarget] Taunt

You can use commas or spaces to separate the conditionals.  Another useful conditional is **targeting** so you can do something like this which would prevent it from being cast if your target is already targeting you:

> /cast [@target harm notargeting:player] Taunt

## Post 114522 by Gahnfaustt — 2024-12-27T17:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114522#p114522 | page 1 | era: pre-1.18.1 -->

cool, thank you very much. I think this is the best macro addon for classic so far

## Post 114524 by Snkx (Patch Note Conspiracy Theorist) — 2024-12-27T17:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114524#p114524 | page 1 | era: pre-1.18.1 -->

> **Gahnfaustt wrote: Fri Dec 27, 2024 5:03 pm**
> cool, thank you very much. I think this is the best macro addon for classic so far

This isn't classic. This is vanilla

## Post 115124 by Gahnfaustt — 2025-01-01T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115124#p115124 | page 1 | era: pre-1.18.1 -->

Looking to write a macro that switches from Battle Stance to Berserker Stance and vice versa. And when presssing Shift it switches me to Defensive Stance.
I got the Battle/Zerker stance part working, but i cant get the modiefier to work.
So far it looks like this:

#showtooltip
/cast [modifier:shift,nostance:2] Defensive Stance; [stance:1] Berserker Stance; Battle Stance

Any ideas?

## Post 115127 by Bahamutxd (Barrens Chat Casualty) — 2025-01-01T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115127#p115127 | page 1 | era: pre-1.18.1 -->

> **Gahnfaustt wrote: Wed Jan 01, 2025 3:14 pm**
> Looking to write a macro that switches from Battle Stance to Berserker Stance and vice versa. And when presssing Shift it switches me to Defensive Stance.
>  I got the Battle/Zerker stance part working, but i cant get the modiefier to work.
>  So far it looks like this:
>
>  #showtooltip
>  /cast [modifier:shift,nostance:2] Defensive Stance; [stance:1] Berserker Stance; Battle Stance
>
>  Any ideas?

According to documentation, stance is not "noable" - so try checking for stance:1/3 instead.

Also, use mod:shift

## Post 115783 by gregster45 — 2025-01-07T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115783#p115783 | page 1 | era: pre-1.18.1 -->

Just a heads up, this addon and Turtle WoW Dragonflight UI don't like each each. It causes flickering of the extra action bars and icons.

the default and pfui work great!

All in all super thankful for your work here!

## Post 115841 by Mewtinybray — 2025-01-08T07:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115841#p115841 | page 1 | era: pre-1.18.1 -->

> **gregster45 wrote: Tue Jan 07, 2025 7:36 pm**
> Just a heads up, this addon and Turtle WoW Dragonflight UI don't like each each. It causes flickering of the extra action bars and icons.
>
>  the default and pfui work great!
>
>  All in all super thankful for your work here!

Interesting, tDF uses the default bars so I'm surprised that happens.  I'll definitely take a look and it may already be fixed in the new version, I'm just waiting for a separate update before releasing it.

Thanks for letting me know!

## Post 115843 by Noce (Patch Note Conspiracy Theorist) — 2025-01-08T07:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115843#p115843 | page 1 | era: pre-1.18.1 -->

hello, i didnt yet tried your addon, but it seems great and will use it asap.
one thing i wanted to see in roidmacros and now here in your addon, is to have shorter version of Commands and Conditionals. like /castsequence --> /castseq   [cooldown] --> [cd] etc..

## Post 115847 by TikkiTikki — 2025-01-08T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115847#p115847 | page 1 | era: pre-1.18.1 -->

I was trying to make a macro to cancel Bloodrage before using a healing pot/bandage and was looking to see if there was a vanilla macro addon with /cancelaura, because CleverMacro doesn't have it implemented, and stumbled upon this. This is a pretty new release, but even then, I'm surprised this doesn't have more traction than it already does, the amount of features in this addon is insane! The dynamic #showtooltip is also super nice.

This has to be the best vanilla macro addon out there, it has nearly everything, so thank you for this!

## Post 115850 by Mewtinybray — 2025-01-08T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115850#p115850 | page 1 | era: pre-1.18.1 -->

> **Noce wrote: Wed Jan 08, 2025 7:43 am**
> hello, i didnt yet tried your addon, but it seems great and will use it asap.
>  one thing i wanted to see in roidmacros and now here in your addon, is to have shorter version of Commands and Conditionals. like /castsequence --> /castseq   [cooldown] --> [cd] etc..

Appreciate you testing it out and any feedback.  I'll maybe consider some aliases but you do have 511 characters (with superwow) and at a certain point I don't think it's a macro issue.

> **TikkiTikki wrote: Wed Jan 08, 2025 8:24 am**
> I was trying to make a macro to cancel Bloodrage before using a healing pot/bandage and was looking to see if there was a vanilla macro addon with /cancelaura, because CleverMacro doesn't have it implemented, and stumbled upon this. This is a pretty new release, but even then, I'm surprised this doesn't have more traction than it already does, the amount of features in this addon is insane! The dynamic #showtooltip is also super nice.
>
>  This has to be the best vanilla macro addon out there, it has nearly everything, so thank you for this!

Glad you're finding it useful.  The original and updated RoidMacros by MarcelineVQ has /cancelaura -- this addon is my attempt at merging the two macro addons with some of my own additions.  The next release will have some new features including
- Cascading conditional syntax (like in Retail)
- Mouse button awareness [btn:1/2] for buttons 1-5
- Not needing to keep copies of spells on your bars
- And a few other things along with an improved readme.
Hopefully in the next few days.

## Post 117157 by Kangaraxxus — 2025-01-18T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117157#p117157 | page 1 | era: pre-1.18.1 -->

Thank you for your work!
I've tried your addon and it mostly works except for macros like this Code: Select all

```
/cast [@mouseover,help,nodead,nobuff:Innervate,nobuff:Lesser Innervate,power<30,rawpower>30] Innervate; [@mouseover]; [@player,nobuff:Innervate] Innervate
```

it seem to brake because of conditions nodead, power, rawpower

## Post 117237 by Jan125 (Barrens Chat Casualty) — 2025-01-19T09:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117237#p117237 | page 1 | era: pre-1.18.1 -->

> **Kangaraxxus wrote: Sat Jan 18, 2025 1:09 pm**
> Thank you for your work!
>  I've tried your addon and it mostly works except for macros like this Code: Select all
>
> ```
> /cast [@mouseover,help,nodead,nobuff:Innervate,nobuff:Lesser Innervate,power<30,rawpower>30] Innervate; [@mouseover]; [@player,nobuff:Innervate] Innervate
> ```
>
>  it seem to brake because of conditions nodead, power, rawpower

nobuff:Lesser Innervate
> nobuff:"Lesser Innervate"
OR
> nobuff:Lesser_Innervate

## Post 119037 by Gahnfaustt — 2025-02-05T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119037#p119037 | page 1 | era: pre-1.18.1 -->

Can anyone help me with some Macros that does the following things:

 1: Macro that uses Charge when i am in Battle stance and Intercept when in Berzerker Stance, but changes to Battle stance and casts Charge when i am out of combat. and changes from Battle Stance to Berserker Stance and casts intercept when i am in Combat
So far i got this:
#showtooltip
/startattack
/cast [nocombat,stance:1] Charge; [combat,nostance:3] Berserker Stance; [nocombat,nostance:1] Battle Stance; [combat,stance:3] Intercept

but the stance switching is not happening

 2: A macro that toggles Heroic Strike/Cleave on/off. i Know there is the "~" command but its not working for Heroic Strike/CLeave

## Post 122193 by Hexagun81 — 2025-03-10T15:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122193#p122193 | page 1 | era: pre-1.18.1 -->

Any idea why this macro will try casting Battle Shout despite : 1) bloodrage being on cooldown 2) my character already has the Battle Shout buff.

#showtooltip Bloodrage
/cast [nocooldown:Bloodrage] Bloodrage
/cast [cooldown:Bloodrage,nomybuff:Battle_Shout] Battle Shout

## Post 127285 by Domize — 2025-04-18T08:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127285#p127285 | page 1 | era: pre-1.18.1 -->

No idea if you're still working on this macro add-on, but for some reason i get high memory consumption and eventually the game will start to stutter.   wary_turtle

[![Image](https://tinypic.host/images/2025/04/29/Clipboard_04-18-2025_01.th.jpg)](https://tinypic.host/image/Clipboard-04-18-2025-01.38Z3GQ)

*Last edited by Domize on Tue Apr 29, 2025 8:57 pm, edited 1 time in total.*

## Post 127770 by TR0Y — 2025-04-21T08:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127770#p127770 | page 1 | era: pre-1.18.1 -->

this addon drops fps by ~5% and the animation of movement is slightly shaking

## Post 128084 by Munra — 2025-04-23T05:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128084#p128084 | page 1 | era: pre-1.18.1 -->

> **Mewtinybray wrote: Wed Jan 08, 2025 7:19 am**
> > **gregster45 wrote: Tue Jan 07, 2025 7:36 pm**
> > Just a heads up, this addon and Turtle WoW Dragonflight UI don't like each each. It causes flickering of the extra action bars and icons.
> >
> >  the default and pfui work great!
> >
> >  All in all super thankful for your work here!
>
>   Interesting, tDF uses the default bars so I'm surprised that happens.  I'll definitely take a look and it may already be fixed in the new version, I'm just waiting for a separate update before releasing it.
>
>  Thanks for letting me know!

Have you found any work around to this? i also got flickering with cleveroid macros, if i could i would ditch it but is kinda of a must for me, got all my macros based on that.

## Post 128917 by Chlamydius — 2025-04-29T00:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128917#p128917 | page 1 | era: pre-1.18.1 -->

> **Munra wrote: Wed Apr 23, 2025 5:47 am**
> > **Mewtinybray wrote: Wed Jan 08, 2025 7:19 am**
> > > **gregster45 wrote: Tue Jan 07, 2025 7:36 pm**
> > > Just a heads up, this addon and Turtle WoW Dragonflight UI don't like each each. It causes flickering of the extra action bars and icons.
> > >
> > >  the default and pfui work great!
> > >
> > >  All in all super thankful for your work here!
> >
> >   Interesting, tDF uses the default bars so I'm surprised that happens.  I'll definitely take a look and it may already be fixed in the new version, I'm just waiting for a separate update before releasing it.
> >
> >  Thanks for letting me know!
>
>   Have you found any work around to this? i also got flickering with cleveroid macros, if i could i would ditch it but is kinda of a must for me, got all my macros based on that.

I'm interested in a work around as well. RoidMacros didn't have the flickering/stuttering, but is missing some important features from CleverRoid

## Post 129555 by Lunadrix — 2025-05-04T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129555#p129555 | page 1 | era: pre-1.18.1 -->

would it be possible for the tooltip to change depending on condition? (i.e. having 1 stealth ability and 1 non stealth ability in the same macro - and this tooltip would change depending on whether you're in stealth) ?

## Post 142472 by Cabum (Barrens Chat Casualty) — 2025-08-01T10:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142472#p142472 | page 1 | era: pre-1.18.1 -->

Hi, is it possible to equip a named trinket, or inventory grid nr, in slot 14 (bottom trinket)?

## Post 147743 by medusin — 2025-08-22T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147743#p147743 | page 1 | era: pre-1.18.1 -->

Good afternoon, everyone. Sorry for the inconvenience, but I wanted to know if you could help me with a macro since I have no idea how to do it. All I need it to do is have my Holy Shock heal a friend if I have the pointer over the frame, even if I have an enemy target. And if the pointer isn't over anyone, it deals damage to the target. Is there a way to do this?

## Post 167444 by Markodern1 — 2026-02-04T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167444#p167444 | page 1 | era: 1.18.1-announced-pre-release -->

Had the same issual as other people in this thread, after installing this mod god stuttering and a microfreeze every couple of minutes, used pfDebug and yep - without it all the mods consume around 12kb, with it ~150kb. I hope there's a better alternative.

