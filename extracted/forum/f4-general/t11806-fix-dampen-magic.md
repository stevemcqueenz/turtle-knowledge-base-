---
title: "Fix dampen magic"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11806"
topic_id: 11806
forum_id: 4
forum: "General"
author: "Ataika"
author_authority: "player"
posted: "2023-11-20T09:32:00Z"
last_post: "2023-11-20T17:37:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:57:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Fix dampen magic

## Post 78059 by Ataika (Grandmaster of Forum PvP) — 2023-11-20T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78059#p78059 | page 1 | era: pre-1.18.1 -->

Currently dampen magic is bugged and reduces dot damage by EVERY TICK and not overall damage as it shoud.

Corruption = 1000 damage per 18 seconds
How it should work = 1000 damage minus 90 dampen magic bonus = 910 damage to mage = 151 damage per tick
How it works now = it reduces damage of EVERY TICK = 1000 damage = 166 damage pet tick - 90 dampen = 75 damage per tick

Which means in its current state it HALVES any incoming magical dot = is game breaking on arena or any competitive pvp.

Please fix this

*Last edited by Ataika on Mon Nov 20, 2023 11:21 am, edited 1 time in total.*

## Post 78065 by Darktifa (Bug Report Enthusiast) — 2023-11-20T10:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78065#p78065 | page 1 | era: pre-1.18.1 -->

Isn't this how dampen magic always worked vs dots?

## Post 78070 by Ataika (Grandmaster of Forum PvP) — 2023-11-20T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78070#p78070 | page 1 | era: pre-1.18.1 -->

> **Darktifa wrote: Mon Nov 20, 2023 10:29 am**
> Isn't this how dampen magic always worked vs dots?

Nope

Dampens magic used against the targeted party member, decreasing spellpower applied to enemy spells by 90 and decreasing spellpower applied to ally heals by 180 for all damage and healing spell effects you receive.

It must work overall, not apply to every tick which is insanely op.

## Post 78072 by Zvyrhol (Grandmaster of Forum PvP) — 2023-11-20T10:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78072#p78072 | page 1 | era: pre-1.18.1 -->

How about Amplify Magic spell? Does it apply to any HOT the same way as DOT to Dumpen? I'm just wondering

## Post 78076 by Ataika (Grandmaster of Forum PvP) — 2023-11-20T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78076#p78076 | page 1 | era: pre-1.18.1 -->

> **Zvyrhol wrote: Mon Nov 20, 2023 10:58 am**
> How about Amplify Magic spell? Does it apply to any HOT the same way as DOT to Dumpen? I'm just wondering

Have not investigated this, spell rarely used in pvp

## Post 78120 by Xudo (Grandmaster of Forum PvP) — 2023-11-20T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78120#p78120 | page 1 | era: pre-1.18.1 -->

There is a bug about Amplify magic in Torta github
[https://github.com/slowtorta/turtlewow- ... ssues/4430](https://github.com/slowtorta/turtlewow-bug-tracker/issues/4430)
I didn't find any bugs about it in vMangos repository.
So if you really want it fixed, fill a ticket there. If you don't have github account, then post description here and I will fill a bug there for you.

