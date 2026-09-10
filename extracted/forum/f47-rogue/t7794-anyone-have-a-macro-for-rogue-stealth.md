---
title: "Anyone have a Macro for Rogue Stealth ?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7794"
topic_id: 7794
forum_id: 47
forum: "Rogue"
author: "Ganasoth"
author_authority: "player"
posted: "2023-06-13T23:37:00Z"
last_post: "2024-01-19T17:56:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T08:19:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Anyone have a Macro for Rogue Stealth ?

## Post 49942 by Ganasoth — 2023-06-13T23:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49942#p49942 | page 1 | era: pre-1.18.1 -->

Hello.
Does anyone have a Macro for Rogue Stealth that doesnt take you out of stealth if you spam the macro?
Say I'm wanting to dismount then go into stealth super fast. I want to be able to spam the macro for stealth but make it so it doesnt take you out of stealth if hit again.

Thanks in advance.

## Post 50099 by Xudo (Grandmaster of Forum PvP) — 2023-06-15T08:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50099#p50099 | page 1 | era: pre-1.18.1 -->

Put stealth on number in "normal" mode. Put nothing on same number in stealth.

## Post 50100 by Elisleris (Bug Report Enthusiast) — 2023-06-15T09:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50100#p50100 | page 1 | era: pre-1.18.1 -->

Try to use such macro:
/script if not buffed("Stealth") then CastSpellByName("Stealth")  end

## Post 50102 by Defb — 2023-06-15T09:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50102#p50102 | page 1 | era: pre-1.18.1 -->

With SuperMacro, I use; Code: Select all

```
/run if not FindBuff("Stealth") then CastSpellByName("Stealth") end
```

## Post 50110 by Nerasw (Barrens Chat Casualty) — 2023-06-15T11:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50110#p50110 | page 1 | era: pre-1.18.1 -->

roid-macros:
Code: Select all

```
/cast [stance:0] stealth
```

## Post 50116 by Ganasoth — 2023-06-15T11:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50116#p50116 | page 1 | era: pre-1.18.1 -->

Thanks guys for the Super Macro code it works great ! I appreciate you all taking the time to  answer that question for me.
Take care.

## Post 56678 by Albusturt — 2023-08-10T13:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56678#p56678 | page 1 | era: pre-1.18.1 -->

> **Nerasw wrote: Thu Jun 15, 2023 11:19 am**
> roid-macros:
>  Code: Select all
>
> ```
> /cast [stance:0] stealth
> ```

How can we add "Get out of stealth while holding shift" to that?

## Post 85367 by Nerasw (Barrens Chat Casualty) — 2024-01-19T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85367#p85367 | page 1 | era: pre-1.18.1 -->

> **Albusturt wrote: Thu Aug 10, 2023 1:00 pm**
> > **Nerasw wrote: Thu Jun 15, 2023 11:19 am**
> > roid-macros:
> >  Code: Select all
> >
> > ```
> > /cast [stance:0] stealth
> > ```
>
>   How can we add "Get out of stealth while holding shift" to that?

iirc it's /cast [stance: 1, mod: shift] stealth
better to refer to roid-macro doc, and sry for necro - was busy for long

