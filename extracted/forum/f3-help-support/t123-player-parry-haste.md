---
title: "Player parry haste"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=123"
topic_id: 123
forum_id: 3
forum: "Help & Support"
author: "Easygoes"
author_authority: "player"
posted: "2018-10-10T03:45:00Z"
last_post: "2018-10-16T12:34:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T09:33:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Player parry haste

## Post 690 by Easygoes — 2018-10-10T03:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=690#p690 | page 1 | era: pre-1.18.1 -->

Greetings,

Currently, parry haste is being applied to players.

In short, many bosses, when parrying an attack, will have a portion of their auto attack immediately shortened (i want to say 40%?).

This is currently happening with player parries as well, making parrying an attack a DPS boost, when that is not intended.

## Post 693 by Easygoes — 2018-10-10T04:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=693#p693 | page 1 | era: pre-1.18.1 -->

Sorry- meant to post this in the Development section.

## Post 811 by Jamey (Turtle WoW Team) [STAFF] — 2018-10-15T18:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=811#p811 | page 1 | era: pre-1.18.1 -->

This should be fixed on the next update.

## Post 820 by Rageseethes — 2018-10-16T05:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=820#p820 | page 1 | era: pre-1.18.1 -->

As the [original thread](https://forum.turtlecraft.gg/viewtopic.php?f=16&t=123) got locked untimely:
 1. PH is supposed to affect players too. It's supposed to be an all-encompassing mechanic which affects ALL creatures, PC or NPC.
 2. PH is absolutely not confined to "many bosses" only, as the original source stated. In pseudo-programmatic terms, it's a binary flag which is enabled by default (for ALL creatures) with some EXTREMELY rare exceptions during the early iterations of WoW (such as Patchwerk in Classic, Shahraz/Nalorakk/Brutallus in TBC, Kologarn in pre-3.2 WotLK).
 3. The swing time reduction granted through PH is not a flat 40%, but a conditional "up to 40%" instead. More than 60% of the creature's swing time left: full reduction; between 60% and 20% swing time left: reset swing time left to 20% (thus a 0-40% reduction); below 20% swing time left: no reduction.

Removing the benefits of PH for players is not a "fix". It would merely be a mistake.

## Post 821 by Torta (Turtle WoW Team) [STAFF] — 2018-10-16T06:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=821#p821 | page 1 | era: pre-1.18.1 -->

Unlocked for further discussion.

## Post 823 by Maerchen — 2018-10-16T06:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=823#p823 | page 1 | era: pre-1.18.1 -->

Rage is right. Parry is a more valuable/expensive stat than Dodge for this very reason.

## Post 836 by Rageseethes — 2018-10-16T12:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=836#p836 | page 1 | era: pre-1.18.1 -->

Perhaps I should have been clearer, the previous statements have simply overlooked some of WoW's subtle mechanical idiosyncrasies. There's hardly anything worth mentioning when it comes to NPC creatures, all of them can parry therefore all of them benefit from PH (unless explictly overridden through a disabled PH flag). The things get more interesting when considering the PC creatures, as the concepts of parry and PH are closely intertwined but otherwise distinct. In pseudo-logical formulation, PH is a subset of P therefore: 1. PH implies P, and 2. not(P) implies not(PH). That is to say, there are classes of PC creatures who cannot benefit from PH whatsoever, for instance casters (mages/warlocks) or druids in animal forms. The original "all creatures should benefit from PH" is meant to be understood as "all creatures which can parry should benefit from PH".

