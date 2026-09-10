---
title: "Macro question"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7344"
topic_id: 7344
forum_id: 4
forum: "General"
author: "Grok69"
author_authority: "player"
posted: "2023-05-19T15:12:00Z"
last_post: "2023-05-20T03:34:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:06:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro question

## Post 46625 by Grok69 — 2023-05-19T15:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46625#p46625 | page 1 | era: pre-1.18.1 -->

Hey, trying to incoporate /startAttack into my warrior's macros so I don't have to bind Attack to a key to save room, but it doesn't seem to be working. Any tips?

For example,

/startAttack
/cast Charge

doesn't make me start attacking if charge doesn't cast if I am too close, in combat, or if it is on CD.

## Post 46685 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-20T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46685#p46685 | page 1 | era: pre-1.18.1 -->

Vanilla doesn't have "convenience" shortcuts like "StartAttack" and "Cast" only works when you specify ranks of spells, too.  However, it's still possible to do what you're asking.  The **purely Vanilla** macro for this would be something like… Code: Select all

```
/run –-CastSpellByName("Charge")
/run if(not PlayerFrame.inCombat) then AttackTarget(); end
/run CastSpellByName("Charge")
```

Notes
- The first line adds the range and cooldown to your macro icon.
This **does not** add a proper tooltip (unless using AddOns).
- The second line sets the player into attack mode **if not in combat**.
If no target is selected, it will also select the nearest attackable mob (again, if not in combat).
"/run AttackTarget();" by itself also works, but if you click the macro again, you'll fall *out* of combat.
- The last line casts the **highest rank** of Charge.
"/cast Charge (Rank #)" also works, but you have to specify the rank.

*Last edited by Jolikmc on Sat May 20, 2023 4:08 am, edited 1 time in total.*

## Post 46693 by Gentlebenrawr — 2023-05-20T03:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46693#p46693 | page 1 | era: pre-1.18.1 -->

if you don't already have it, install the Supermacro addon.  most of what gets posted will require it in order to work.

