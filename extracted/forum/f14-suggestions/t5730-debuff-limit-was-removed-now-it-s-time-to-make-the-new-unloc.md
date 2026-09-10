---
title: "Debuff limit was removed, now it's time to make the new unlocked debuffs worthwhile to use"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5730"
topic_id: 5730
forum_id: 14
forum: "Suggestions"
author: "Balake"
author_authority: "player"
posted: "2023-02-24T12:09:00Z"
last_post: "2023-02-25T07:53:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T12:22:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Debuff limit was removed, now it's time to make the new unlocked debuffs worthwhile to use

## Post 35925 by Balake (Bug Report Enthusiast) — 2023-02-24T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35925#p35925 | page 1 | era: pre-1.18.1 -->

Removal of debuff limit is a welcome change that's desperately needed to help the weak classes, however most of the debuffs they weren't using weren't being used because they're kinda weak in the first place. Some changes can be made to help with that.

First and definitely the most major change: Debuff durations. Vanilla is sadly a scuffed mess of a client, and the API doesn't even send debuff timers which is important for dot classes. Addons can never replicate it perfectly because dotting two identical mobs will count as dotting one mob and the timers will be inaccurate because of that. I'm not knowledgeable on the coding behind it, though since threat API can be sent to the client through the twthreat addon, i'm hoping there can be an addon that receives timers directly from the server. Hopefully such a change is possible.

Now to look at each class individually and see why their debuffs are not being used.

Druids
 *Fix the bug of percentage damage increases [https://github.com/slowtorta/turtlewow- ... ssues/2546](https://github.com/slowtorta/turtlewow-bug-tracker/issues/2546)

Hunters
 *Add Arcane shot and serpent sting mana cost reduction to the t3 set bonus <https://database.turtlecraft.gg/?spell=28751>
 *Add a talent in survival tree that gives spell damage from a percentage of ranged attack power.

Rogues
 *Add rupture to the Improved Eviscerate talent <https://database.turtlecraft.gg/?search=improved+evis>
 *Add rupture to the T3 set bonuses <https://database.turtlecraft.gg/?spell=28814> <https://database.turtlecraft.gg/?spell=28811>
 *Move Vile poisons talent up from 4th to 3rd row

Shamans
 *Remove stacks from Stormstrike. So many things randomly do nature damage and consume it (poisons, stings, **thunderfury**). It will never be consistent with all that stuff and moonkins/ele shamans/the enhancer won't get any benefit. So removing the stacks and making it just a 12 second debuff on the target would be very helpful for these underperformers.

Warlocks these ones definitely need a lot of work. Imagine being THE dot class yet your dots are so bad you'd rather just spam shadowbolts.
 *Rename Curse of Agony into Agony. Make it a regular dot that can be used alongside your assigned curse that you have to do for the sake of the raid.
 *In that vein, rename Improved Curse of agony talent into Improved Agony, and buff it to 5/10/15% because 6% is a joke
 *Remove Improved Curse of Weakness, it's a dead slot that can be free'd up to be used later for something else.
 *Change effect of curse of weakness: reduce target's damage done (same as original) **and** reduce their chance to dodge attacks by 1%.
 *Make fel concentration a 2 point talent for 35/70%
 *Add immolate to the T3 set bonus <https://database.turtlecraft.gg/?spell=28829>

Warriors
 *Make rend usable in berserker stance. Add a weapon damage scaling to it (more favorable for 2 handers)

## Post 35938 by Redmagejoe (Grandmaster of Forum PvP) — 2023-02-24T13:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35938#p35938 | page 1 | era: pre-1.18.1 -->

What you've discussed is definitely a worthwhile consideration. An addon that receives the data directly from the server would have to come from the dev team itself, so I'd suggest trying to proposition them about how feasible such a development might be. We may be able to work around the client's limitations through the use of a Turtle-proprietary addon feeding the players the data directly.

## Post 35952 by Gantulga (Grandmaster of Forum PvP) — 2023-02-24T14:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35952#p35952 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Fri Feb 24, 2023 12:09 pm**
> Rogues
>  *Add rupture to the Improved Eviscerate talent <https://database.turtlecraft.gg/?search=improved+evis>
>  *Add rupture to the T3 set bonuses <https://database.turtlecraft.gg/?spell=28814> <https://database.turtlecraft.gg/?spell=28811>
>  *Move Vile poisons talent up from 4th to 3rd row

Garrote and rupture need baseline buffs and actual scaling to be worth using at all, the same applies to Druid's bleeds.
Poisons need to stack with WF totem to be usable.

Warriors and hunters do not need any buffs. Hunters could use some spellpower related buffs if trueshot is toned down though, but not as long as it exists in its current form.

## Post 35982 by Shamma (Bug Report Enthusiast) — 2023-02-24T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35982#p35982 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Fri Feb 24, 2023 1:56 pm**
> What you've discussed is definitely a worthwhile consideration. An addon that receives the data directly from the server would have to come from the dev team itself, so I'd suggest trying to proposition them about how feasible such a development might be. We may be able to work around the client's limitations through the use of a Turtle-proprietary addon feeding the players the data directly.

This is not entirely true. The devs need to create and open the API. We can then write/extend the addons ourselves to use the API.

## Post 35983 by Ninoa — 2023-02-24T18:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35983#p35983 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Fri Feb 24, 2023 12:09 pm**
> Hunters
>  *Add Arcane shot and serpent sting mana cost reduction to the t3 set bonus <https://database.turtlecraft.gg/?spell=28751>
>  *Add a talent in survival tree that gives spell damage from a percentage of ranged attack power.

In pve, hunters don't spec into the survival tree. You'd lose out on too much pet damage, probably leaving a status quo in place. A more obvious solution is to just make it scale from RAP.

## Post 35987 by Ugoboom (Bug Report Enthusiast) — 2023-02-24T18:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35987#p35987 | page 1 | era: pre-1.18.1 -->

+1 to most of these suggestions

> **Balake wrote: Fri Feb 24, 2023 12:09 pm**
> *Rename Curse of Agony into Agony. Make it a regular dot that can be used alongside your assigned curse that you have to do for the sake of the raid.
>  *In that vein, rename Improved Curse of agony talent into Improved Agony, and buff it to 5/10/15% because 6% is a joke

This has pvp concerns, allowing CoS or CoEx ontop of Agony. IDK man that's pretty big

> **Balake wrote: Fri Feb 24, 2023 12:09 pm**
> *Make rend usable in berserker stance. Add a weapon damage scaling to it (more favorable for 2 handers)

Yes to the scaling. The TBC or stronger WotLK scaling formula should be backported. This makes rend usable during leveling as its 100% arp and your low crit make it a good choice with it actually doing good base damage.

However, adding it to zerk stance has pvp concerns, as well as enforces the reduced skill cieling of dps warrior. Making rend a strong dps up when maintained, will encourage people to actually act on and use the overpower procs they get. Top players would see the proc, use it, apply a rend, then back to zerk stance to keep WW on cooldown. The more a dps warrior is encouraged to master rage management and dance those stances, the better. Warriors who want to just zug and relax can just chill in zerk stance like we do now, but they shouldnt be rewarded with top dps by doing this.

> **Shamma wrote: Fri Feb 24, 2023 6:09 pm**
> This is not entirely true. The devs need to create and open the API. We can then write/extend the addons ourselves to use the API.

TWThreat operates on a server API, but also the same server dev wrote the addon too. We are allowed to use this API for other addons, but nobody has bothered. So it's open, but the other guy is also right in that the server devs only care to write to use it.

## Post 36048 by Noce (Patch Note Conspiracy Theorist) — 2023-02-25T07:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36048#p36048 | page 1 | era: pre-1.18.1 -->

mbe make Stormstrike not only a nature dmg buff, since shamans do use other elements as dmg. mbe also rework Curse of the Elements? SS incr dmg taken, CotE lowers resist. mbe make em a bit weaker so stacking both isnt to op? id keep the debuff duration and stacks for both. so u cant just cast it once and gg. make game a bit challenging.

also id take into consideration to rework on all buffs, debuffs in general. some are rly op.

one more thing, id love to see all pets just like shamans wolves. as cast ability, with duration and cd. pets are just to op here.

