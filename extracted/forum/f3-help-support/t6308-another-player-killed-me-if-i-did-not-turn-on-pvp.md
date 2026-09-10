---
title: "Another player killed me if I did not turn on PvP ?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6308"
topic_id: 6308
forum_id: 3
forum: "Help & Support"
author: "Ursi"
author_authority: "player"
posted: "2023-03-30T19:07:00Z"
last_post: "2023-03-30T20:14:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:16:15Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Another player killed me if I did not turn on PvP ?

## Post 39681 by Ursi — 2023-03-30T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39681#p39681 | page 1 | era: pre-1.18.1 -->

Explain how another player killed me if I did not turn on PvP mode? This is the second time. I play in Harcord mode.

## Post 39687 by Werefox (Patch Note Conspiracy Theorist) — 2023-03-30T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39687#p39687 | page 1 | era: pre-1.18.1 -->

Are you positive you were not flagged at the moment? E.g. by healing/buffing somebody green shortly before that?

## Post 39689 by Lexiebean (Barrens Chat Casualty) — 2023-03-30T19:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39689#p39689 | page 1 | era: pre-1.18.1 -->

If you flag or buff a PvP flagged player, you will get flagged.
Code: Select all

```
/script spell="Power Word: Fortitude"; onself=IsAltKeyDown(); if onself or not UnitExists("target") or UnitIsEnemy("player", "target") or not UnitIsPVP("target") then CastSpellByName(spell, onself) end
```

Here's an example of a macro that wont buff flagged players. (Also, Alt + Click will self buff you. This works even when targeting friendly targets. Unlike the default self-cast option.)

It might have been changed, but things like throwing leather balls to a PvP flagged player used to flag you.

Basically, don't interact with flagged players.

## Post 39702 by Ursi — 2023-03-30T20:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39702#p39702 | page 1 | era: pre-1.18.1 -->

I was killing a mob, there was no one near me. Another player, a high-level warrior, ran towards me and killed me with the 1st hit.
My name was blue - I understand - does this mean that I do not participate in PVP?
I have been playing on this server for the 3rd week. Maybe you can advise some addons or macros against PVP so as not to kill again.

## Post 39703 by Ursi — 2023-03-30T20:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39703#p39703 | page 1 | era: pre-1.18.1 -->

Thanks for the answers.

