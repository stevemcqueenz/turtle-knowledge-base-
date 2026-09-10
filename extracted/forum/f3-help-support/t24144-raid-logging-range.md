---
title: "Raid logging range"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24144"
topic_id: 24144
forum_id: 3
forum: "Help & Support"
author: "Satasatu3"
author_authority: "player"
posted: "2026-03-02T17:54:00Z"
last_post: "2026-03-05T14:58:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:36:47Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Raid logging range

## Post 169834 by Satasatu3 — 2026-03-02T17:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169834#p169834 | page 1 | era: 1.18.1-announced-pre-release -->

Hey! Theres problem with logging raids, for example when doing Ragnaros fight, someone logging the raid other side of the fight wont reach all the players in the fight. I remember some years ago we had this same problem and there was a fix to this, changing a certain command somewhere, to extend raid logging range. Anyone know the solution?

## Post 169933 by Pepesmite (Turtle WoW Team) [STAFF] — 2026-03-03T12:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169933#p169933 | page 1 | era: 1.18.1-announced-pre-release -->

> **Satasatu3 wrote: Mon Mar 02, 2026 5:54 pm**
> Hey! Theres problem with logging raids, for example when doing Ragnaros fight, someone logging the raid other side of the fight wont reach all the players in the fight. I remember some years ago we had this same problem and there was a fix to this, changing a certain command somewhere, to extend raid logging range. Anyone know the solution?

Hello

[Bug Tracker]
Please, make a bug report on our tracker: <<https://turtlecraft.gg/bug-tracker>>
It's easier for the team to document and investigate issues if they're reported on our own self-hosted instance.

## Post 170132 by Elesion (Patch Note Conspiracy Theorist) — 2026-03-05T14:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170132#p170132 | page 1 | era: 1.18.1-announced-pre-release -->

This is not a bug, it's a feature of the client. Logging range is limited to prevent slowdown.

Some logger addons change it themselves. Or you can find console command to change it ingame online.
Personally I prefer to edit the settings in the file directly. Close your client. Navigate to <turtle folder>\WTF\Config.wtf and open the file in a text editor. Then go looking around for combat log related entries. If they don't exist, they're set to the default (which is like 60 yds iirc) and you can just add the following lines to increase the range to 200 yds.
Code: Select all

```
SET CombatLogRangeParty "200"
SET CombatLogRangePartyPet "200"
SET CombatLogRangeFriendlyPlayers "200"
SET CombatLogRangeFriendlyPlayersPets "200"
SET CombatLogRangeHostilePlayers "200"
SET CombatLogRangeHostilePlayersPets "200"
SET CombatLogRangeCreature "200"
SET CombatDeathLogRange "200"
```

