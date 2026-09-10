---
title: "Simple install question, seemingly...."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15449"
topic_id: 15449
forum_id: 18
forum: "AddOns"
author: "Kethmandoo"
author_authority: "player"
posted: "2024-11-01T18:48:00Z"
last_post: "2024-11-01T19:43:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:28:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Simple install question, seemingly....

## Post 105811 by Kethmandoo — 2024-11-01T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105811#p105811 | page 1 | era: pre-1.18.1 -->

Does twow need to be installed in C:\Program Files\twmoa_1171\ for addons in C:\Program Files\twmoa_1171\Interface\AddOns to work?

My laptop is so locked down I can't install in the path above and suspect this is why none of addons work, yes I've fixed the "master" names on all installed addons. None of the common notes I've seen cover this install issue.  wary_turtle

## Post 105815 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-01T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105815#p105815 | page 1 | era: pre-1.18.1 -->

That is correct.  All addons must be in the addons directory to work and the installation directory must be in the same nested folder.

For example, you could install it to "C:\TWoW" then your addons directory would be "C:\TWoW\Interface\AddOns"

If your laptop is "locked down" due to Windows "S-mode", look into disabling it.

## Post 105819 by Kethmandoo — 2024-11-01T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105819#p105819 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Fri Nov 01, 2024 7:14 pm**
> That is correct.  All addons must be in the addons directory to work and the installation directory must be in the same nested folder.
>
>  For example, you could install it to "C:\TWoW" then your addons directory would be "C:\TWoW\Interface\AddOns"
>
>  If your laptop is "locked down" due to Windows "S-mode", look into disabling it.

Does it matter that current path is C:\twmoa_1171\Interface\AddOns  ???

## Post 105821 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-01T19:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105821#p105821 | page 1 | era: pre-1.18.1 -->

> **Kethmandoo wrote: Fri Nov 01, 2024 7:32 pm**
> > **Drubarrymooer wrote: Fri Nov 01, 2024 7:14 pm**
> > That is correct.  All addons must be in the addons directory to work and the installation directory must be in the same nested folder.
> >
> >  For example, you could install it to "C:\TWoW" then your addons directory would be "C:\TWoW\Interface\AddOns"
> >
> >  If your laptop is "locked down" due to Windows "S-mode", look into disabling it.
>
>   Does it matter that current path is C:\twmoa_1171\Interface\AddOns  ???

Nope...as long as twow is installed in that directory as well.

