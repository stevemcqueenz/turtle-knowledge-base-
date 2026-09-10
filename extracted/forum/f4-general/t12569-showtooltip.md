---
title: "#showtooltip"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12569"
topic_id: 12569
forum_id: 4
forum: "General"
author: "Azcron"
author_authority: "player"
posted: "2024-01-05T22:18:00Z"
last_post: "2025-08-22T06:51:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T09:41:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# #showtooltip

## Post 83738 by Azcron (Patch Note Conspiracy Theorist) — 2024-01-05T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83738#p83738 | page 1 | era: pre-1.18.1 -->

I know it didn't exist in vanilla but is there an addon that allows this function?

## Post 83739 by Balake (Bug Report Enthusiast) — 2024-01-05T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83739#p83739 | page 1 | era: pre-1.18.1 -->

<https://github.com/DennisWG/Roid-Macros>

## Post 83759 by Nasumi — 2024-01-06T03:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83759#p83759 | page 1 | era: pre-1.18.1 -->

don't know why roid not work for me
im using clevermacro to show that

## Post 83777 by Reploidrocsa (Bug Report Enthusiast) — 2024-01-06T08:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83777#p83777 | page 1 | era: pre-1.18.1 -->

Same, roid macros showtooltip never worked entirely for me. I think there was a vanilla line of code to act as a showtooltip.

Something like /script castspellbyname something something

## Post 83778 by Volkyte (Patch Note Conspiracy Theorist) — 2024-01-06T08:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83778#p83778 | page 1 | era: pre-1.18.1 -->

> **Nasumi wrote: Sat Jan 06, 2024 3:11 am**
> don't know why roid not work for me
>  im using clevermacro to show that

I got roid macros and #showtooltip works. You need to implement compatibility script at start of macroes (check "compatibility" tab)

## Post 83910 by Manateufel — 2024-01-07T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83910#p83910 | page 1 | era: pre-1.18.1 -->

this acts like #showtooltip Code: Select all

```
/run --CastSpellByName("Battle Shout")
```

![Image](https://i.imgur.com/ALhTKuz.png)

![Image](https://i.imgur.com/Th2EKcK.png)

## Post 83922 by Spot (Barrens Chat Casualty) — 2024-01-07T19:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83922#p83922 | page 1 | era: pre-1.18.1 -->

I look at macros like they are ruins from a past civilization that can bring the users great power.  Thank you for helping me make them look better.  :P

## Post 129630 by Brojc — 2025-05-04T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129630#p129630 | page 1 | era: pre-1.18.1 -->

I have cleveroid and shagu extras. Showtooltip works, The macro works but it is still displaying #showtooltip in say chat. How to stop that?

## Post 129631 by Brojc — 2025-05-04T15:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129631#p129631 | page 1 | era: pre-1.18.1 -->

So if this helps anyone. I was making a macro to add startattack to my sinister strike.

I have Cleveroid addon and Shagutweaks extras.

The macro that finally worked without displaying an error or displaying showtooltip in chat was

#showtooltip Sinister Strike
/cast Sinister Strike
/startattack

The name of the ability had to be behind  the showtooltip and the startattack had to be at the end to get rid of the /help error

## Post 129635 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-04T16:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129635#p129635 | page 1 | era: pre-1.18.1 -->

There is also :

<https://github.com/bhhandley/CleveRoidMacros>

## Post 145841 by Benbass — 2025-08-15T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145841#p145841 | page 1 | era: pre-1.18.1 -->

Is anyone able to get the #showtooltip feature to work ? I've tried every single macro addon but nothing works.

## Post 145846 by Fugus (Patch Note Conspiracy Theorist) — 2025-08-15T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145846#p145846 | page 1 | era: pre-1.18.1 -->

> **Benbass wrote: Fri Aug 15, 2025 5:40 pm**
> Is anyone able to get the #showtooltip feature to work ? I've tried every single macro addon but nothing works.

Addons tab

CleveRoid Macros.

But if you want it to change in real time. You have to set the flag for that which is in the readme file on the GitHub link.

## Post 145857 by Benbass — 2025-08-15T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145857#p145857 | page 1 | era: pre-1.18.1 -->

CleveRoid is displaying the same icon and tooltip on all of my macros while on the action bar. I've enabled Nampower and installer superWoW. I've tried disabling all other addons in vain.

It's probably working with a combo of pfUI and shaguTweaks.

## Post 145891 by Fugus (Patch Note Conspiracy Theorist) — 2025-08-15T19:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145891#p145891 | page 1 | era: pre-1.18.1 -->

> **Benbass wrote: Fri Aug 15, 2025 6:23 pm**
> CleveRoid is displaying the same icon and tooltip on all of my macros while on the action bar. I've enabled Nampower and installer superWoW. I've tried disabling all other addons in vain.
>
>  It's probably working with a combo of pfUI and shaguTweaks.

Using shaguTweaks but not pfUI and #showtooltip works fine on mine.

## Post 147655 by Servo — 2025-08-22T06:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147655#p147655 | page 1 | era: pre-1.18.1 -->

also found out the hard way how to get macros working with CleveRoid:

- you need **superwow** & **namepower**
- macros must have a **UNIQUE** name
- use Code: Select all

```
/cleveroid realtime 1
```

to get a realtime update of the icons/tooltips
- syntax error in 1 macro can cause other macros to malfunction
with that my macro is working: Code: Select all

```
#showtooltip
/cast [mod:alt]Seal of Light;Seal of Wisdom
```

but sometimes I still get displayed the wrong icon

