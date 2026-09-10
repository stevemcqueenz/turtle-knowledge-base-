---
title: "mouseover macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20580"
topic_id: 20580
forum_id: 41
forum: "Paladin"
author: "Mathal"
author_authority: "player"
posted: "2025-07-30T23:00:00Z"
last_post: "2025-10-07T18:25:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T07:55:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# mouseover macros

## Post 142266 by Mathal — 2025-07-30T23:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142266#p142266 | page 1 | era: pre-1.18.1 -->

How can I write mouseover macros for the hands and heals? I generally cannot heal well without mouseover macros. Are people really just manually clicking characters?

## Post 146600 by 31venture — 2025-08-17T20:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146600#p146600 | page 1 | era: pre-1.18.1 -->

I'm using Luna frames, and it comes with a built in 'LUNAMO' mouseover function built in.

/lunamo Flash of Light(Rank x)

It won't work on the player, just the frame.

## Post 146980 by Catyngla (Barrens Chat Casualty) — 2025-08-19T11:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146980#p146980 | page 1 | era: pre-1.18.1 -->

The closest I found is ClassicMouseover:
<https://github.com/satan666/LazySpell/tree/master>

You just need the ClassicMouseover folder, then type /mcast in your macro instead of /cast

It seems to select the target then cast. I guess it is fine for healing, but may not be a desired behaviour.

However, it works either with the frame or the player/npc.

I'll be looking for more options, like if target exists stuff, etc. I'll let you know of my findings if any

## Post 146991 by Crake (Patch Note Conspiracy Theorist) — 2025-08-19T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146991#p146991 | page 1 | era: pre-1.18.1 -->

<https://github.com/DanielAdolfsson/CleverMacro>

Provides a lot of modern macro functionality, including condition mods and @mouseover functionality. Also adds #showtooltip as well, so unless you're doing something super fancy, practically gives you modern macro usage.

## Post 152916 by Reekharh — 2025-09-24T06:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152916#p152916 | page 1 | era: pre-1.18.1 -->

If you use Pfui, type /pfcast instead of cast and it will work.

Exemple :

#showtooltip Hand of freedom
/pfcast Hand of freedom (Rank X)

## Post 154757 by Azcron (Patch Note Conspiracy Theorist) — 2025-10-07T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154757#p154757 | page 1 | era: 1.18.1-announced-pre-release -->

> **Reekharh wrote: Wed Sep 24, 2025 6:20 am**
> If you use Pfui, type /pfcast instead of cast and it will work.
>
>  Exemple :
>
>  #showtooltip Hand of freedom
>  /pfcast Hand of freedom (Rank X)

This is also the case for anyone using Shagu Tweaks. You can use /stcast SPELLNAME

