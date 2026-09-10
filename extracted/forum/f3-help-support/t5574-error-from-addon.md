---
title: "Error from addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5574"
topic_id: 5574
forum_id: 3
forum: "Help & Support"
author: "Pasis"
author_authority: "player"
posted: "2023-02-09T20:46:00Z"
last_post: "2024-10-02T07:12:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:51:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Error from addon

## Post 34461 by Pasis — 2023-02-09T20:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34461#p34461 | page 1 | era: pre-1.18.1 -->

Trouble with addons - in some game locations my chat window begins to shout “error…, error…”.
I got 2 types of error:

 **1)**
 *Error from addon Gatherer:*
> ERROR: Interface\AddOns\Gatherer\Gatherer.lua![:1321:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1321.svg) attempt to index local `r' (a nil value)

Temporary solving by switching minimap off in Gatherers options. But after changing azeroths location it may begin again.

 **2)**
 *Error may because of Chartographer:*
> ERROR: Babble-Zone-2.2: Reverse translation for "Amani'alor" does not exist

Dont know what to do with it at all.

Please help me!
How to continue use this addons and not suffer from this very annoying chat messages?

## Post 34462 by Shamma (Bug Report Enthusiast) — 2023-02-09T21:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34462#p34462 | page 1 | era: pre-1.18.1 -->

> **Pasis wrote: Thu Feb 09, 2023 8:46 pm**
> Trouble with addons - in some game locations my chat window begins to shout “error…, error…”.
>  I got 2 types of error:
>
>  **1)**
>  *Error from addon Gatherer:*
> > ERROR: Interface\AddOns\Gatherer\Gatherer.lua![:1321:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1321.svg) attempt to index local `r' (a nil value)
>
>  Temporary solving by switching minimap off in Gatherers options. But after changing azeroths location it may begin again.
>
>  **2)**
>  *Error may because of Chartographer:*
> > ERROR: Babble-Zone-2.2: Reverse translation for "Amani'alor" does not exist
>
>  Dont know what to do with it at all.
>
>  Please help me!
>  How to continue use this addons and not suffer from this very annoying chat messages?

Are u using these versions:
<https://github.com/Haaxor1689/Gatherer>
<https://github.com/Haaxor1689/Cartographer>

## Post 34575 by Pasis — 2023-02-11T18:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34575#p34575 | page 1 | era: pre-1.18.1 -->

Deleted older versions and put this ones, that you advised.
Gatherers error stil remains even in Stormwind:
ERROR: Interface\AddOns\Gatherer\Gatherer.lua![:1837:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1837.svg) table index is nil

## Post 60152 by Commiskey — 2023-08-30T21:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60152#p60152 | page 1 | era: pre-1.18.1 -->

Gatherer still throwing these addons

## Post 60154 by Hctwowfan (Bug Report Enthusiast) — 2023-08-30T22:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60154#p60154 | page 1 | era: pre-1.18.1 -->

You could replace gatherer with pfquest and use the respective database commands:
/db mines - to show all mining nodes
/db herbs - to show all herbs
/db xyz - to only show smth specific
/db clean - to clean up your map
or shift-click the node types you don't want

Mining nodes and herbs are static in twow, they'll be where they are shown on the map unless recently gathered. Things like truesilver will always be truesilver, never mithril, same for gold and iron and tin and silver. If it shows silver, it's silver, not tin with a chance to be silver.

## Post 101907 by Saphiron — 2024-09-25T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101907#p101907 | page 1 | era: pre-1.18.1 -->

> **Hctwowfan wrote: Wed Aug 30, 2023 10:20 pm**
> You could replace gatherer with pfquest and use the respective database commands:
>  /db mines - to show all mining nodes
>  /db herbs - to show all herbs
>  /db xyz - to only show smth specific
>  /db clean - to clean up your map
>  or shift-click the node types you don't want
>
>  Mining nodes and herbs are static in twow, they'll be where they are shown on the map unless recently gathered. Things like truesilver will always be truesilver, never mithril, same for gold and iron and tin and silver. If it shows silver, it's silver, not tin with a chance to be silver.

Can anyone confirm this? Just tried and show all mines and everything. If the nodes don't change its location or type, it  means that gatherer is useless in twow.

## Post 102358 by Hctwowfan (Bug Report Enthusiast) — 2024-10-02T07:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=102358#p102358 | page 1 | era: pre-1.18.1 -->

The static spawns have been changed a while back to prevent camping rich thorium spawns. Pfquest still superior tho imo

