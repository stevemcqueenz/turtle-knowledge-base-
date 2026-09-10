---
title: "What's with bow?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24881"
topic_id: 24881
forum_id: 45
forum: "Hunter"
author: "Tesswow"
author_authority: "player"
posted: "2026-04-17T11:49:00Z"
last_post: "2026-04-17T14:05:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:09:49Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# What's with bow?

## Post 175559 by Tesswow — 2026-04-17T11:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175559#p175559 | page 1 | era: post-1.18.1 -->

Laminated Recurve Bow
 10-20 damage
 2.60 speed

damage 47-58

Oakwood Bow
 14-25 damage
 1.90 speed

damage 41-53

Why does the second bow do less damage, even though it has higher base damage and faster speed? Mob damage didn't seem to make much of a difference either.

## Post 175560 by SvenS2 (Bug Report Enthusiast) — 2026-04-17T12:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175560#p175560 | page 1 | era: post-1.18.1 -->

Attack Power coefficient is based on weapon speed

[https://wowpedia.fandom.com/wiki/Attack ... oefficient](https://wowpedia.fandom.com/wiki/Attack_power_coefficient)

In this case, Oakwood Bow has 13.6% increase from AP and Laminated Recurve Bow has 18.6%. So white hits might be stronger, but Oakwood bow should still do more overall dps given the speed

## Post 175562 by Tesswow — 2026-04-17T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175562#p175562 | page 1 | era: post-1.18.1 -->

> **SvenS2 wrote: Fri Apr 17, 2026 12:32 pm**
> Attack Power coefficient is based on weapon speed
>
>  [https://wowpedia.fandom.com/wiki/Attack ... oefficient](https://wowpedia.fandom.com/wiki/Attack_power_coefficient)
>
>  In this case, Oakwood Bow has 13.6% increase from AP and Laminated Recurve Bow has 18.6%. So white hits might be stronger, but Oakwood bow should still do more overall dps given the speed

Am I correct in understanding that Arcane Shot will deal 78.4% more damage with Laminated Recurve Bow?

## Post 175564 by SvenS2 (Bug Report Enthusiast) — 2026-04-17T14:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175564#p175564 | page 1 | era: post-1.18.1 -->

> **Tesswow wrote: Fri Apr 17, 2026 1:53 pm**
> > **SvenS2 wrote: Fri Apr 17, 2026 12:32 pm**
> > Attack Power coefficient is based on weapon speed
> >
> >  [https://wowpedia.fandom.com/wiki/Attack ... oefficient](https://wowpedia.fandom.com/wiki/Attack_power_coefficient)
> >
> >  In this case, Oakwood Bow has 13.6% increase from AP and Laminated Recurve Bow has 18.6%. So white hits might be stronger, but Oakwood bow should still do more overall dps given the speed
>
>   Am I correct in understanding that Arcane Shot will deal 78.4% more damage with Laminated Recurve Bow?

Generally yes, instant attacks are better with slower weapons. But keep in mind that normalization is applied. Ranged abilities like multi-shot, aimed shot, and I assume TWoW's version of arcane shot are normalized to have attack power contribution as if the weapon has 2.8 speed (regardless of the weapon's actual speed)

Edit: I'm not sure how you got 78.4%. Can you please clarify?

