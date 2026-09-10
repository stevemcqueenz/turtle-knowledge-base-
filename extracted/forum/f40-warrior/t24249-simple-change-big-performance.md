---
title: "Simple Change, Big performance"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24249"
topic_id: 24249
forum_id: 40
forum: "Warrior"
author: "Wilsonsds"
author_authority: "player"
posted: "2026-03-11T01:56:00Z"
last_post: "2026-03-13T13:14:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T07:51:46Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Simple Change, Big performance

## Post 170561 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-03-11T01:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170561#p170561 | page 1 | era: 1.18.1-announced-pre-release -->

Please consider adding a new talent called Guardian's Revenge in the same row as Defensive Tactics.

What does it do? It improves Revenge by fulfilling the Reprisal requirement: Revenge is now also activated when an ally is hit by a direct melee attack from a creature (AKA: your friend has the threat). AoE attacks and cleaves do not count. It also grants additional bonus threat to Revenge.

However, Guardian's Revenge can only be used on the same target that struck your raid or party member.

## Post 170563 by Xudo (Grandmaster of Forum PvP) — 2026-03-11T06:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170563#p170563 | page 1 | era: 1.18.1-announced-pre-release -->

I don't think it is possible. Do you have any examples of this in other spells?

Would be much easier if rule will be "Sunder armor deals additional threat if you are not target of your target". Sunder armor doesn't need to be activated, so no complex mechanics involved. In the same time, your goal "provide additional threat if you lost the aggro" will be achieved.

## Post 170572 by Cysthen (Patch Note Conspiracy Theorist) — 2026-03-11T10:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170572#p170572 | page 1 | era: 1.18.1-announced-pre-release -->

I think the only way to achieve this would be to create some kind of aura which takes up a buff slot. -1

## Post 170606 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-03-11T20:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170606#p170606 | page 1 | era: 1.18.1-announced-pre-release -->

I do not think “there is no existing example” is enough to call it impossible. This would not be a simple database-only talent, but I believe it is scriptable on the server side.

As far as I know, the server can already react to combat proc events, identify who was hit, who attacked, and restrict effects to a specific valid target. Revenge itself is already a reactive ability based on combat events, so this would be more of an extension of its trigger conditions rather than a completely new mechanic.

The real question is whether the developers consider the scripting effort and edge-case filtering worthwhile. However, this kind of script could also open doors for other similar mechanics in the future.

## Post 170635 by Eyeburn (Barrens Chat Casualty) — 2026-03-12T02:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170635#p170635 | page 1 | era: 1.18.1-announced-pre-release -->

You make a talent that makes Revenge always active.  This is how you fix the OT problem for prot warriors using the prot tree.  While you're at it, change defensive tactics to remove the damage penalty on dstance and get rid of the battle stance tanking nonsense.  Where are the other tanks forces to take 10% more damage to remove a 10% damage penalty?  It's dumb.

## Post 170749 by SvenS2 (Bug Report Enthusiast) — 2026-03-13T13:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170749#p170749 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Wed Mar 11, 2026 6:20 am**
> I don't think it is possible. Do you have any examples of this in other spells?

It's possible to implement in Warcraft 3's engine via just GUI commands, so it should be possible in WoW's. A very oversimplified example:

1. Event handler for on attack event.
2. Pick all units within X radius of the player character, where picked unit is of type ally && in party.
3. If Attack on picked unit is Melee && picked unit =/= player character.
4. Then change Revenge's active flag on.
5. Apply talent CD or have it by proc based.

As for example for similar abilities in WoW, talents that check for Critical Hits by allies works on a similar principle

The only part that I'm not sure is feasible is the ability being enabled only vs the unit that issued the attack. Might be pretty wonky, plus I don't see a reason to place such a restriction, so long as the talent is proc or CD based.

