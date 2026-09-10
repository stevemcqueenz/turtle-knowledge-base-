---
title: "What is account wide and what isn't? - And other newbie questions"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4024"
topic_id: 4024
forum_id: 4
forum: "General"
author: "Testaccount995"
author_authority: "player"
posted: "2022-09-03T17:05:00Z"
last_post: "2022-09-07T22:09:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:10:37Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# What is account wide and what isn't? - And other newbie questions

## Post 24294 by Testaccount995 — 2022-09-03T17:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24294#p24294 | page 1 | era: pre-1.18.1 -->

Hi!
I'm new and testing the waters to find a new wow-home :)

I've seen there's a LOT of stuff added, and so far the writing is superb, the voice acting is spine-chilling good and overall everything looks great!

So I have a few (maybe very?) specific questions that I haven't been able to get a clear enough answer.

- What is account wide and what isn't? For example: Are titles account wide? Are mounts? Store bought items? Store bought extra bag slots? Unlocked transmogs? The list goes on, but I think any experienced player can tell me these in a "x, y and z are(n't), everything else is(n't)"
- Is there a failsafe way to know if someone is pvp flagged within your own faction? (green/blue name gets hiden by nameplates in my screen)
- Which classes have had their playstyle significantly changed, and if so, how? For example: Hunter in WotlK stoped caring about mana and became a skill machinegun with full mobility as marskman due to aspect of the viper rework, while in vanilla was a serial mana starver.
Thanks a lot in advance!

## Post 24305 by Valadorn (Patch Note Conspiracy Theorist) — 2022-09-03T20:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24305#p24305 | page 1 | era: pre-1.18.1 -->

Nothing is account wide

## Post 24337 by Thol (Barrens Chat Casualty) — 2022-09-04T07:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24337#p24337 | page 1 | era: pre-1.18.1 -->

- Donation tokens are account wide, that's it.

- You can use this macro to not buff flagged players:
Buff Macro - Alt to self cast. Will not buff PVP flagged targets. - by Nakie Code: Select all

```
/script spell="Power Word: Fortitude"; onself=IsAltKeyDown(); if onself or not UnitExists("target") or UnitIsEnemy("player", "target") or not UnitIsPVP("target") then CastSpellByName(spell, onself) end
```

You can also use this: <https://github.com/Lexiebean/PvPWarning>

- You can check class changes on the official website:
![Image](https://i.imgur.com/HKJbMV0.jpeg)
Here's the link for hunter: <https://turtlecraft.gg/#/hunter>
Mana management is part of Vanilla design and is here to stay I think.

## Post 24442 by Testaccount995 — 2022-09-05T21:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24442#p24442 | page 1 | era: pre-1.18.1 -->

Thank you guys, very helpful!

In case someone else finds this thread, I'll answer my own third question, based on what I could inquire in game:

Shammie, warrior, hunter and paladin play different.
The rest apparently not so much.
Some other stuff became viable (mainly feral druid).

## Post 24620 by Feruah — 2022-09-07T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24620#p24620 | page 1 | era: pre-1.18.1 -->

Only the donation tokens are account-wide, the rewards are not?

