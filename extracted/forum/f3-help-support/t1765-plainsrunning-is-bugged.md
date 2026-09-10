---
title: "Plainsrunning is bugged"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1765"
topic_id: 1765
forum_id: 3
forum: "Help & Support"
author: "Qixel"
author_authority: "player"
posted: "2021-05-11T16:27:00Z"
last_post: "2021-05-11T17:20:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:27:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Plainsrunning is bugged

## Post 10513 by Qixel (Barrens Chat Casualty) — 2021-05-11T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10513#p10513 | page 1 | era: pre-1.18.1 -->

The base buff of Plainsrunning and all of its stacks are now removed upon using any ability. This includes spells and attacks, even ones like skinning mobs. I noticed this a long while ago, but assumed it was a stealth nerf done due to pvp. However, I recieved word from Torta today that no change has been done to Plainsrunning, so if something changed it is a bug.

As such, I am doing my due diligence and reporting it. <3

## Post 10515 by Torta (Turtle WoW Team) [STAFF] — 2021-05-11T17:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10515#p10515 | page 1 | era: pre-1.18.1 -->

I reviewed our commit history and indeed noticed Pompa changed it to be interrupted on spell cast, back to February 2020. I was wrong saying no changes been done to it.

However, this fix has absolutely nothing to do with PvP. Initial implementation was too OP because it'd allow Taurens to kite bosses and engage in battles with creatures while having a 60-100% speed buff, and basically be on mount without having normal mounting restrictions. So it will not be reverted and working as intended.

