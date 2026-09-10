---
title: "Chastise Self macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17767"
topic_id: 17767
forum_id: 44
forum: "Priest"
author: "Beararms99"
author_authority: "player"
posted: "2025-02-27T15:28:00Z"
last_post: "2025-03-02T15:56:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:07:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Chastise Self macro

## Post 121132 by Beararms99 — 2025-02-27T15:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121132#p121132 | page 1 | era: pre-1.18.1 -->

Anyone know how to make a chastise Self macro without using an mod key? I already use a mod key to cast the spell usually but I want to find a way to cast it on myself while targeting an enemy.

## Post 121139 by basednoob (Patch Note Conspiracy Theorist) — 2025-02-27T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121139#p121139 | page 1 | era: pre-1.18.1 -->

> **Beararms99 wrote: Thu Feb 27, 2025 3:28 pm**
> Anyone know how to make a chastise Self macro without using an mod key? I already use a mod key to cast the spell usually but I want to find a way to cast it on myself while targeting an enemy.

try this Code: Select all

```
/run if UnitIsFriend("target") then CastSpellByName("Chastise") else CastSpellByName("Chastise",1)end
```

## Post 121330 by Beararms99 — 2025-03-01T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121330#p121330 | page 1 | era: pre-1.18.1 -->

Thank for you your reply. That one works for targeting a friend or myself but i want to be able to cast on self while targeting an enemy. I dont think it will work without using a self cast key

## Post 121335 by basednoob (Patch Note Conspiracy Theorist) — 2025-03-01T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121335#p121335 | page 1 | era: pre-1.18.1 -->

> **Beararms99 wrote: Sat Mar 01, 2025 4:44 pm**
> Thank for you your reply. That one works for targeting a friend or myself but i want to be able to cast on self while targeting an enemy. I dont think it will work without using a self cast key

this should buff you when you got a enemy targeted

## Post 121387 by Reomc1 — 2025-03-02T10:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121387#p121387 | page 1 | era: pre-1.18.1 -->

I use RoidMacros and highly recommend it.

/cast [@player] Chastise

Does exactly what you want. It will target you no matter what.

## Post 121406 by Mosttrustworthy — 2025-03-02T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121406#p121406 | page 1 | era: pre-1.18.1 -->

No add-ons required, although I do like SuperMacro.

/script if UnitIsEnemy("target") then TargetUnit("player") CastSpellByName("Chastise") TargetLastEnemy() else CastSpellByName("Chastise") end

If your target is an enemy, it targets yourself and casts Chastise, then re-targets the enemy.
Otherwise is just casts Chastise.
It even fits into the default character limit, at 141 characters. There's even room to add DoEmote("Roar") somewhere.

