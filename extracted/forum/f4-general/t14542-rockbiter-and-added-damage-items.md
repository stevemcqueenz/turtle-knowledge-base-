---
title: "Rockbiter and added damage items"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14542"
topic_id: 14542
forum_id: 4
forum: "General"
author: "Akos1896"
author_authority: "player"
posted: "2024-07-11T18:57:00Z"
last_post: "2024-07-12T06:15:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:52:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rockbiter and added damage items

## Post 99213 by Akos1896 (Grandmaster of Forum PvP) — 2024-07-11T18:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99213#p99213 | page 1 | era: pre-1.18.1 -->

Guys, you know if items which give additional damage procs (like the Gilneas ring) work with rockbiter threat?

## Post 99216 by Redmagejoe (Grandmaster of Forum PvP) — 2024-07-11T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99216#p99216 | page 1 | era: pre-1.18.1 -->

> **Akos1896 wrote: Thu Jul 11, 2024 6:57 pm**
> Guys, you know if items which give additional damage procs (like the Gilneas ring) work with rockbiter threat?

Nothing modifies Rockbiter, currently (pre Class Changes v2).  Rockbiter does 2 things which are, sadly, independent of each other.  First, it increases your attack power like Battle Shout or Blessing of Might.  Second, it adds a weapon-speed-scaling flat threat bonus to all of your auto attacks.

Thus, the idea is that your auto attacks already do 1 dmg = 1 threat, while Rockbiter increases your AP so that your auto attacks now do more damage, but still 1 dmg = 1 threat + bonus threat.  I will chase down the formula for how the values below are divided/multiplied by weapon speed and edit this post once I find the info again.

![Image](https://i.imgur.com/YLDOe55.png)

Based on your question, it seems you're asking if there's any interaction between weapon procs and Rockbiter.  Sadly, as it does not apply to "separate damage instances" (+lightning damage, fiery blaze, etc) and does not modify your overall auto attack threat but rather just adds a flat bonus, there is 0 interaction.

## Post 99217 by Akos1896 (Grandmaster of Forum PvP) — 2024-07-11T19:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99217#p99217 | page 1 | era: pre-1.18.1 -->

Ah! I see.
I was hoping for a way to cheeze it for better threat generation like the way paladins can proc off from similar effects ('adds x damage to your hits' kind of effects).
My hope was that these effects can proc another 'threat package' from rockbiter.

## Post 99238 by Atreidon (Grandmaster of Forum PvP) — 2024-07-12T06:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99238#p99238 | page 1 | era: pre-1.18.1 -->

There three things that interact with rockbiters threat component.

Crits, haste & extra attacks. but fireprocs are not weaponhits and therefore dont count.

