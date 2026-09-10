---
title: "Multibox restriction exception for addon developers"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15756"
topic_id: 15756
forum_id: 14
forum: "Suggestions"
author: "Ai96"
author_authority: "player"
posted: "2024-11-10T21:26:00Z"
last_post: "2024-11-11T04:59:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T11:45:16Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Multibox restriction exception for addon developers

## Post 107446 by Ai96 — 2024-11-10T21:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107446#p107446 | page 1 | era: pre-1.18.1 -->

Multiboxing is limited by the rules to 2 accounts per player, with an exception for summoning services. I have a suggestion to add another exception to the rule for addon developers.

I'm developing an addon that's intended to be used by multiple raid members, and a feature of this addon is automatic syncing of data between players to keep the state of the addon consistent between them. It would help me rapid prototype my addon during development **a lot** if I could have 3 or more clients open during development and just reload UI on all of them whenever I make a code change. Right now if I want to do that, I have to ask a friend or guildie to join a raid group with me and update their addon every time I want to make a change, have them stream on discord or tell me what state their addon is in over chat or whatever - it's very cumbersome and one of their accounts is locked into just sitting in a raid group with me during that time.

I propose that for the purposes of addon development you can use more accounts (max 5? 10?) with some heavy restrictions like:

 * You can't level up any character past level 5 (so your characters can whisper others, might be needed for a feature you're developing) on more than 2 accounts
 * You cant send gold or items or anything like that from your 2 "main accounts" to the other accounts
 * Characters on these "other accounts" cannot leave their starting zone
 * Maybe require explicit permission from a GM?
 * Whatever else you can think of, I'm just spitballing

## Post 107460 by Akos1896 (Grandmaster of Forum PvP) — 2024-11-11T00:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107460#p107460 | page 1 | era: pre-1.18.1 -->

I'm not against the idea but how do you make sure it just doesn't become a common excuse?
Something like 'don't ban me bro, I was def doing science and developing addons'.

## Post 107466 by Bonho — 2024-11-11T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107466#p107466 | page 1 | era: pre-1.18.1 -->

Friend, you are asking to create the rule for the exceptional situtaion. How many new addons have you seen in the last year? Just communicate with administration and ask them for individual permition if such exists

## Post 107479 by Zeran (Patch Note Conspiracy Theorist) — 2024-11-11T04:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107479#p107479 | page 1 | era: pre-1.18.1 -->

Just run a local WoW 1.12 server and connect as many clients as you want? Unless you specifically need to test some twow-specific functionality.

