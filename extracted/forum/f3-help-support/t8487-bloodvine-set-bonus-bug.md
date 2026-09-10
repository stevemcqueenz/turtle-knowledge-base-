---
title: "Bloodvine set bonus bug"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8487"
topic_id: 8487
forum_id: 3
forum: "Help & Support"
author: "Pngu"
author_authority: "player"
posted: "2023-07-26T02:36:00Z"
last_post: "2023-07-26T12:55:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:10:06Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bloodvine set bonus bug

## Post 54693 by Pngu — 2023-07-26T02:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54693#p54693 | page 1 | era: pre-1.18.1 -->

When you have all 3 pieces of the bloodvine set plus 300 tailoring, you gain 2% spell crit. I had it, but when I used a transmog on the chest piece, the bonus was lost. I know for sure because not only was the chest piece name and bonus greyed out, but the critical chance on the BetterCharacterStats addon wasn't counting the extra 2%. After I removed xmog it showed the extra 2%;

## Post 54730 by Hctwowfan (Bug Report Enthusiast) — 2023-07-26T10:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54730#p54730 | page 1 | era: pre-1.18.1 -->

How do you know that your spell crit% is actually 2% lower than it should be when it could easily be a display bug from your addon? You dont.

Cast the same spell on a training dummy at least 1000 times with and without the item transmogged. If it is in fact bugged, you should get 20 less crits with the transmogged item. That sample size may still be too small to actually prove that your spell crit% is lower than it should be.

Come back with the crit% after you tested it. If your numbers prove that your crit% is bugged, report the bug on github.

## Post 54731 by Kairion (Bug Report Enthusiast) — 2023-07-26T11:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54731#p54731 | page 1 | era: pre-1.18.1 -->

BetterCharacterStats is known to not pick up on setbonuses if the Transmog function is used on setpieces.

The bonus does in fact work as advertised, its just the addon that can not properly track it. Can be easily tested with shooting target dummies (or using a more easily noticeable setbonus to check instead)

## Post 54744 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-07-26T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54744#p54744 | page 1 | era: pre-1.18.1 -->

> **Pngu wrote: Wed Jul 26, 2023 2:36 am**
> When you have all 3 pieces of the bloodvine set plus 300 tailoring, you gain 2% spell crit. I had it, but when I used a transmog on the chest piece, the bonus was lost. I know for sure because not only was the chest piece name and bonus greyed out, but the critical chance on the BetterCharacterStats addon wasn't counting the extra 2%. After I removed xmog it showed the extra 2%;

Its a visual bug.  You do indeed retain the set bonus.

