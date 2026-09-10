---
title: "Suggested update of logic for selecting players for LFT"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16053"
topic_id: 16053
forum_id: 14
forum: "Suggestions"
author: "krylorandrax"
author_authority: "player"
posted: "2024-11-22T11:23:00Z"
last_post: "2024-11-22T16:39:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T11:43:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Suggested update of logic for selecting players for LFT

## Post 109351 by krylorandrax — 2024-11-22T11:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109351#p109351 | page 1 | era: pre-1.18.1 -->

Consider updating the formula/logic used to assemble groups with the following changes;

 **1. Require (Min-Level + 2) as the minimum level for LFT candidates.**

Melee classes suffer badly while leveling from lack of hit gear, some of which can be improved by talents. Even when +Hit talents are available to classes, both melee and casters, the chance to miss is high enough that it will mean a lower level tank is unable to tank the instance or that a caster DPS gets too many resists. There is a more important issue in that lower level players have a significantly reduced chance to resist NPC spells, many of which are CC spells and make either tanking or healing problematic.

Increasing the minimum level for considering a group member in LFT will give more groups a better chance at success while still keeping the dungeons relative to the level bracket

 **2. Add a new weight to LFT candidates for proximity to instance**

There are many times when LFT will form a group only to require 2-3 members of the group to travel a long way, often taking 15-20 mins. It is also not unusual for group members to immediately drop group after seeing that there is no Warlock to summon them. If the distance to a fixed location for each instance (it's meeting stone) was included it would result in more groups being formed with players that are closer to the instances.  This will benefit players that make the effort to travel or be near the instance(s) they are interested in. Players on flights could be weighted by their current destination FP.

Code: Select all

```
try:
SelectPlayersByLevel(Min-Level + 2) AND ClosestMatch(queuedPlayers)
else:
 -- existing logic
```

I believe that both of these changes would improve the LFT experience for all players while still allowing the existing logic to be used as a fallback.

## Post 109356 by RPGnerd (Barrens Chat Casualty) — 2024-11-22T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109356#p109356 | page 1 | era: pre-1.18.1 -->

The concept is promising, and I believe the character level adjustment wouldn't be a significant challenge to implement. Ideally, the character's level should match the level of the final boss for leveling dungeons, while endgame dungeons should require level 60.

As for the proximity feature, it might not be feasible to implement due to possible limitations of the WoW Vanilla 1.12.1 API.

To build on this idea, I suggest leveraging the Meeting Stones near dungeon entrances. Players at the appropriate level who interact with these stones could gain the option to join the LFT queue with priority for that specific dungeon, emphasizing their readiness through the stone interaction.

## Post 109359 by Akos1896 (Grandmaster of Forum PvP) — 2024-11-22T12:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109359#p109359 | page 1 | era: pre-1.18.1 -->

I like the thought put behind this but it would give an unfair advantage to healers since they only need any hit if they want to chip in with some minimal DPS.
It would result in dungeon requirements like: 20-25 unless if you're a healer then come from 18.
On the other hand, it could motivate people to heal dungeons which is a good thing.

## Post 109365 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-22T13:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109365#p109365 | page 1 | era: pre-1.18.1 -->

I've never left a group because there wasn't a warlock there to summon.  Good riddance to the lazy players that drop cause no summons.  Sounds like a problem that fixes itself.  No need to punish players for farming or doing something on another continent.

## Post 109376 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-11-22T14:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109376#p109376 | page 1 | era: pre-1.18.1 -->

I only want 1 change:
 - Same as PvP, PUNISH THE DAMN PLAYERS WHO LEAVE A GROUP, put a debuff like:
"Coward: You left your dungeon group, you can't use the LFT in the next 1 hour.

## Post 109383 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-11-22T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109383#p109383 | page 1 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Fri Nov 22, 2024 2:13 pm**
> I only want 1 change:
>  - Same as PvP, PUNISH THE DAMN PLAYERS WHO LEAVE A GROUP, put a debuff like:
>  "Coward: You left your dungeon group, you can't use the LFT in the next 1 hour.

I support this.  Nothing worse than a 5 man group forming and a 2nd melee dps joins then bounces because there's "competition" without even asking.

## Post 109387 by krylorandrax — 2024-11-22T14:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109387#p109387 | page 1 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Fri Nov 22, 2024 2:13 pm**
> I only want 1 change:
>  - Same as PvP, PUNISH THE DAMN PLAYERS WHO LEAVE A GROUP, put a debuff like:
>  "Coward: You left your dungeon group, you can't use the LFT in the next 1 hour.

While I would challenge that your suggestion is an entirely different one and not an update to the logic in the above, I do think it's worth looking at other implications of what you suggest. I also find it very frustrating when players just "joined" drop group from LFT but there are other considerations to prevent abuse of a "Gollum" debuff;

- What about a player that is kicked by the party leader because that player is considered "competition"? Do they get the debuff?

- What if a player refuses to come to the instance or drop group because they do not want the debuff?

What if instead of punishing bad behavior we instead encouraged/rewarded good player interactions?  I believe that we could reduce the number of players abandoning their groups by adding a reward at the end of the instance instead;

- a +20% Rested XP topup from an item that drops from the last boss in the instance. That would be a useful reward to leveling players.

- A similar reward could be added to bosses in 5-mans that worked like the Stranglethorn chapters whereby each boss drops a scrap/page and combining 20 of them would make a single BoP [Ancient Warfare Text].

*Last edited by krylorandrax on Fri Nov 22, 2024 3:05 pm, edited 3 times in total.*

## Post 109393 by Xudo (Grandmaster of Forum PvP) — 2024-11-22T15:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109393#p109393 | page 1 | era: pre-1.18.1 -->

I think that kind of competition can be prevented on addon level. Like "prefer classes with different armor types".

## Post 109395 by Sylveria (Grandmaster of Forum PvP) — 2024-11-22T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109395#p109395 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Fri Nov 22, 2024 2:29 pm**
> > **Dracarusggotham wrote: Fri Nov 22, 2024 2:13 pm**
> > I only want 1 change:
> >  - Same as PvP, PUNISH THE DAMN PLAYERS WHO LEAVE A GROUP, put a debuff like:
> >  "Coward: You left your dungeon group, you can't use the LFT in the next 1 hour.
>
>  I support this.  Nothing worse than a 5 man group forming and a 2nd melee dps joins then bounces because there's "competition" without even asking.

Can KINDA understand that. But we can also have the opposite case, in which group members are so obnoxious that you just want to leave. with this debuff punishment you force one to stay with those people, like: Tank rolls Need on everything, or something like this. (just as an example)

## Post 109396 by Atreidon (Grandmaster of Forum PvP) — 2024-11-22T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109396#p109396 | page 1 | era: pre-1.18.1 -->

The levelrange lft sets is pretty random anyway. Any decently playing(or somewhat wipe resistent) group can finish the dungeons just fine.

Of course, if everyone is minimum level its gonna be slightly harder than if everyone is 5 levels above the endboss. But its perfectly doable with the current minlevels. I dont want every single thing in this game to be absolutely idiotproof. But then again, i dont use lft anymore because i know the average lft dps player.

The proximity to dungeon as factor however is either useless or unmanageably complicated. A level 34 horde mage questing in shimmering flats can take a teleport to undercity and be in scarlet monestary in 2 minutes. Meanwhile an alliance mage questing in arathi needs at least 15 minutes to get there.

It also doesnt factor in afk or people who "just finish 2 quests" before they get their asses moving.
Expect to auto invite a lot of perpetually afk slackers if proximity to the instance is the deciding factor who gets invited.

Of course this proximity also doesnt matter because the tank will still find his group easily from half a continent over, so even if you are close, the group wont start pulling any sooner

## Post 109397 by Xudo (Grandmaster of Forum PvP) — 2024-11-22T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109397#p109397 | page 1 | era: pre-1.18.1 -->

> **Atreidon wrote: Fri Nov 22, 2024 4:17 pm**
> The proximity to dungeon as factor however is either useless or unmanageably complicated. A level 34 horde mage questing in shimmering flats can take a teleport to undercity and be in scarlet monestary in 2 minutes. Meanwhile an alliance mage questing in arathi needs at least 15 minutes to get there.
>
>  It also doesnt factor in afk or people who "just finish 2 quests" before they get their asses moving.
>  Expect to auto invite a lot of perpetually afk slackers if proximity to the instance is the deciding factor who gets invited.
>
>  Of course this proximity also doesnt matter because the tank will still find his group easily from half a continent over, so even if you are close, the group wont start pulling any sooner

This factor have motivational role if presented correctly.
First of all, there should be only 2 distances: in location of the dungeon and outside location of the dungeon. For example, for Deadmines location of the dungeon is Westfall only. Everything else is "outside".
If DPS will see message "you are not near the dungeon, so you get less priority", then he might think "ah, I should come close to dungeon and be there to increase the chance of finding group.
It is not hard requirement, but it encourage DPS to wait nearby.
It doesn't matter for tank and heal, but it doesn't have to solve problem completely. It might just improve situation.

## Post 109400 by Atreidon (Grandmaster of Forum PvP) — 2024-11-22T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109400#p109400 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Fri Nov 22, 2024 4:25 pm**
> > **Atreidon wrote: Fri Nov 22, 2024 4:17 pm**
> > The proximity to dungeon as factor however is either useless or unmanageably complicated. A level 34 horde mage questing in shimmering flats can take a teleport to undercity and be in scarlet monestary in 2 minutes. Meanwhile an alliance mage questing in arathi needs at least 15 minutes to get there.
> >
> >  It also doesnt factor in afk or people who "just finish 2 quests" before they get their asses moving.
> >  Expect to auto invite a lot of perpetually afk slackers if proximity to the instance is the deciding factor who gets invited.
> >
> >  Of course this proximity also doesnt matter because the tank will still find his group easily from half a continent over, so even if you are close, the group wont start pulling any sooner
>
>  This factor have motivational role if presented correctly.
>  First of all, there should be only 2 distances: in location of the dungeon and outside location of the dungeon. For example, for Deadmines location of the dungeon is Westfall only. Everything else is "outside".
>  If DPS will see message "you are not near the dungeon, so you get less priority", then he might think "ah, I should come close to dungeon and be there to increase the chance of finding group.
>  It is not hard requirement, but it encourage DPS to wait nearby.
>  It doesn't matter for tank and heal, but it doesn't have to solve problem completely. It might just improve situation.

It might shackle the dps closeby to not potentially offend a time optimizing munchkin - i can tell you that this is not motivational to rather be afk cloeby than to actively play somewhere else

