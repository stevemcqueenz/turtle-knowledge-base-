---
title: "Haste discrepancy in case of Affli lock"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22528"
topic_id: 22528
forum_id: 46
forum: "Warlock"
author: "Veddel"
author_authority: "player"
posted: "2025-10-22T10:59:00Z"
last_post: "2025-10-22T12:11:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:15:53Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Haste discrepancy in case of Affli lock

## Post 156602 by Veddel — 2025-10-22T10:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156602#p156602 | page 1 | era: 1.18.1-announced-pre-release -->

Hello,

I have recognised that in case of warrlock Affliction spells Haste stat is not used properly. The discrepancy is increased in case of higher haste %. I have attached a table wich shows the proper drain soul durations based on haste % and the actual in game values. (I have tested it with different gear combinations, fresly cleared chace and frequnent relogs)

<https://ibb.co/4ZFS1gfQ>

Anyone else have experienced this issue ?  dead_turtle_head

## Post 156605 by Atreidon (Grandmaster of Forum PvP) — 2025-10-22T11:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156605#p156605 | page 1 | era: 1.18.1-announced-pre-release -->

No wl expert in specific, but on Mage i observed some inconsistencies with how haste behaves too. So i suggest you test the following things thurougly to ensure you are not adding up other mistakes:

 1. Ensure you test each piece of haste gear individually. Some instances of haste such as haste enchant on glove has been buggy in the past (idk if it has been fixed since)
 2. Haste on gear and haste from external buffs and talents such as chastize/druid aura etc do behave differently. Buff based haste is applied multiplicatively (at least in mages case) and is performing much worse when haste stacking than you would expect

I did some napkin maths and it looks like your mistake is adding the 6% haste from the talent additively with gear, its multiplicative.
And the game works in 0.04 second ticks, and the game rounds up to the next full tick. These are just the values where you dont manage to get to the full next tick due to multiplicative applying of haste

## Post 156610 by Veddel — 2025-10-22T12:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156610#p156610 | page 1 | era: 1.18.1-announced-pre-release -->

Hello,

Thy for your reply! Yeah I have started with  6% haste from the talent. I have assumed, the 6% from the talent works differently, but I wasn't sure.

