---
title: "Bulk rename herbalist plants for easier AH searching"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24034"
topic_id: 24034
forum_id: 14
forum: "Suggestions"
author: "Illutian"
author_authority: "player"
posted: "2026-02-19T20:59:00Z"
last_post: "2026-02-20T15:17:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T11:03:03Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bulk rename herbalist plants for easier AH searching

## Post 168946 by Illutian — 2026-02-19T20:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168946#p168946 | page 1 | era: 1.18.1-announced-pre-release -->

Basically, rename them to be something like "Plant: [current name]". - The search pattern would just be "Plant:".

This way you can easily run AH scans to update pricings instead of scanning the entire 'Trade Goods' section.

I'm pretty sure the names can be customized, as the game should be using ItemIDs when referencing what's needed to craft.

## Post 168971 by Xudo (Grandmaster of Forum PvP) — 2026-02-20T05:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168971#p168971 | page 1 | era: 1.18.1-announced-pre-release -->

I just scanned herbs by specific name one by one.
You probably not interested in Peacebloom price to scan it.

## Post 168976 by Illutian — 2026-02-20T06:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168976#p168976 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Fri Feb 20, 2026 5:39 am**
> I just scanned herbs by specific name one by one.
>  You probably not interested in Peacebloom price to scan it.

Ya, right now, I'm going through each of the Alchemy stuff I craft normally for the herbs. But it's a pain...and I can't go do something else while it scans like I do for "Elixir"/"Flask"/"Potion".

## Post 168977 by Xudo (Grandmaster of Forum PvP) — 2026-02-20T07:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168977#p168977 | page 1 | era: 1.18.1-announced-pre-release -->

I think it is more like feature request to aux. To make custom list of stuff to scan in AH.
Would be much easier than changing game
<https://github.com/shirsig/aux-addon-vanilla>
or that <https://github.com/Nelethor/Aux-Revamped>

## Post 168987 by Atreidon (Grandmaster of Forum PvP) — 2026-02-20T08:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168987#p168987 | page 1 | era: 1.18.1-announced-pre-release -->

I'd like to report a bug, there is some RP left in my auctionhouse simulator!

Irony aside, problems like this are easily solved by using AUX.
Just seach for: Code: Select all

```
gromsblood;mountain silversage
```

## Post 168990 by Illutian — 2026-02-20T09:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168990#p168990 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Fri Feb 20, 2026 7:05 am**
> I think it is more like feature request to aux. To make custom list of stuff to scan in AH.
>  Would be much easier than changing game
>  <https://github.com/shirsig/aux-addon-vanilla>
>  or that <https://github.com/Nelethor/Aux-Revamped>

Pretty sure the custom lists in Aux still require the "Blizzard query" results. - Unless this is what Atreidon suggested.

Atreidon's suggestion does work. - I didn't think the 'multi-search' would function until after the general query Blizzard allows.

If only Blizzard had broken Trade Goods down into gathering professions for 'more narrowed' searches. Like they did for Armor and Weapon categories.

## Post 169020 by Koilos33 — 2026-02-20T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169020#p169020 | page 1 | era: 1.18.1-announced-pre-release -->

In aux, you can make multiple queries at the same time by separating them with ";"
so you could do:

peacebloom/exact; grave moss/exact; fadeleaf/exact

This would do all 3 searches and list them together. You could create and save one of this queries and just click it and wait. You can include all the modifiers you need in each query.

