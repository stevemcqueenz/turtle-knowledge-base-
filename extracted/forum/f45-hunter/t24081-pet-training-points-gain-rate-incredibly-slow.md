---
title: "Pet training points gain rate incredibly slow?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24081"
topic_id: 24081
forum_id: 45
forum: "Hunter"
author: "Trickyrick"
author_authority: "player"
posted: "2026-02-23T22:40:00Z"
last_post: "2026-02-23T23:21:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:10:19Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Pet training points gain rate incredibly slow?

## Post 169304 by Trickyrick — 2026-02-23T22:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169304#p169304 | page 1 | era: 1.18.1-announced-pre-release -->

I read the turtleWoW wiki about this, and observed it myself. With just a few points per level, my pet is never gonna be able to learn all skills... Is it supposed to be like this, or am i missing something?

## Post 169306 by Hctwowfan (Bug Report Enthusiast) — 2026-02-23T23:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169306#p169306 | page 1 | era: 1.18.1-announced-pre-release -->

The formula for training points (tp) is:

Pet level x (Pet loyalty - 1) = current tp

Max tp is 300:
 60 x (6 - 1) = 300

If your pet gains a level, it gains tp equal to pet loyalty -1.
If your pet gains loyalty, it gains tp equal to its level.

At 30 gaining a level at 6 loyalty:
 30 x 5 = 150 --> 31 x 5 = 155

At 30 gaining loyalty from 4 to 5 (or 5 to 6, doesn't matter, absolute increase is the same):
 30 x 3 = 90 --> 30 x 4 = 120

Everything works as it did in vanilla.

Edit: Your pet will not be able to learn every available ability and passive ever. Max stamina and max armor already take up most of your max tp. Abilities are rather cheap in that regard. Resistances have to be spread across multiple pets for that matter. Have a pet with fire resistance maxed, one with frost resistance, one with nature, one with arcane basically.

