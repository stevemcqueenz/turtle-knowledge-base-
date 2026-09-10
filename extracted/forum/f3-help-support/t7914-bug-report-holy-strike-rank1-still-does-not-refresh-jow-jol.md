---
title: "[BUG REPORT] Holy Strike RANK1 still does not refresh JoW & JoL after other ranks got fixed in 2022"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7914"
topic_id: 7914
forum_id: 3
forum: "Help & Support"
author: "Happyswetie"
author_authority: "player"
posted: "2023-06-21T10:41:00Z"
last_post: "2023-06-29T14:33:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T09:11:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [BUG REPORT] Holy Strike RANK1 still does not refresh JoW & JoL after other ranks got fixed in 2022

## Post 50821 by Happyswetie — 2023-06-21T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50821#p50821 | page 1 | era: pre-1.18.1 -->

As per skill description Holy Strike should be firstly a melee attack then with special effects on it secondly.

In other word, it should be able to refresh the duration of JoW & JoL just like a normal melee attack does.

However when I holy strike a mob nothing happens, JoW just disappears without refreshment.

This affects quite a lot in both PVP & PVE especially when using 2h weapon with slow swingtime.

P. S:
later on i found only rank 1 get affect by this issue while other ranks working well.

really hope rank 1 get fixed as well since it has pretty excellent dpm compared with other ranks

*Last edited by Happyswetie on Wed Jun 28, 2023 8:29 pm, edited 7 times in total.*

## Post 50832 by Geojak (Grandmaster of Forum PvP) — 2023-06-21T13:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50832#p50832 | page 1 | era: pre-1.18.1 -->

Hu, are, you sure. It was a, long tiem like you said but devs, had that fixed already. Woukd be, sad to be back

## Post 50839 by Bigsmerf (Grandmaster of Forum PvP) — 2023-06-21T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50839#p50839 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Jun 21, 2023 1:52 pm**
> Hu, are, you sure. It was a, long tiem like you said but devs, had that fixed already. Woukd be, sad to be back

I just had a stroke, and am currently in the hospital recovering from reading that.

## Post 50869 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-06-21T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50869#p50869 | page 1 | era: pre-1.18.1 -->

Er, are you *okay*, Geojak…?

Anyway, let's see…  According to the *Turtle WoW* Armory entries on [Holy Strike](https://www.wowhead.com/classic/spell=13953/holy-strike)…
> Holy Strike
>  20 mana, 5 yd range
>  Instant
>  Consecrates your weapon, inflicting X to X
>  additional damage on your next attack. All
>  damage caused is considered holy damage.

Now, then.  According to *Wowpedia*'s article on [Judgement (Classic)](https://wowpedia.fandom.com/wiki/Judgement_%28Classic%29)…
> If the Judgement is a debuff, the duration of it can be refreshed each time the Judging Paladin lands a melee hit.

If I'm understanding this correctly, since the attack isn't "physical", but instead "magical", it should have no effect on Judgements.  Although, Torta [said otherwise](https://github.com/slowtorta/turtlewow-bug-tracker/issues/1413) on the bug tracker…
> *[Holy Strike not refreshing Judgements is]* not intended, it's a bug and yet to be fixed. Duplicate: #975

Anyway.  You say that Holy Strike is *eating* Judgements?  Yeah, if that's the case, that's definitely not right.  You might want to head to the bug tracker and file a report there, as well.

## Post 50875 by Ghola (Patch Note Conspiracy Theorist) — 2023-06-21T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50875#p50875 | page 1 | era: pre-1.18.1 -->

easy enough to just test. my holy strike still refreshes judgements

## Post 51696 by Happyswetie — 2023-06-28T19:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51696#p51696 | page 1 | era: pre-1.18.1 -->

> **Ghola wrote: Wed Jun 21, 2023 10:37 pm**
> easy enough to just test. my holy strike still refreshes judgements

did you test with rank 1? later  i found this issue only affect holy strike r1 instead of the whole ranks now

*Last edited by Happyswetie on Wed Jun 28, 2023 9:07 pm, edited 2 times in total.*

## Post 51697 by Happyswetie — 2023-06-28T19:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51697#p51697 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Jun 21, 2023 1:52 pm**
> Hu, are, you sure. It was a, long tiem like you said but devs, had that fixed already. Woukd be, sad to be back

now rank 2 to 8 seem fine but only rank 1 got the problem

## Post 51698 by Happyswetie — 2023-06-28T20:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51698#p51698 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Wed Jun 21, 2023 9:56 pm**
> Er, are you *okay*, Geojak…?
>
>  Anyway, let's see…  According to the *Turtle WoW* Armory entries on [Holy Strike](https://www.wowhead.com/classic/spell=13953/holy-strike)…
> > Holy Strike
> >  20 mana, 5 yd range
> >  Instant
> >  Consecrates your weapon, inflicting X to X
> >  additional damage on your next attack. All
> >  damage caused is considered holy damage.
>
>   Now, then.  According to *Wowpedia*'s article on [Judgement (Classic)](https://wowpedia.fandom.com/wiki/Judgement_%28Classic%29)…
> > If the Judgement is a debuff, the duration of it can be refreshed each time the Judging Paladin lands a melee hit.
>
>   If I'm understanding this correctly, since the attack isn't "physical", but instead "magical", it should have no effect on Judgements.  Although, Torta [said otherwise](https://github.com/slowtorta/turtlewow-bug-tracker/issues/1413) on the bug tracker…
> > *[Holy Strike not refreshing Judgements is]* not intended, it's a bug and yet to be fixed. Duplicate: #975
>
>  Anyway.  You say that Holy Strike is *eating* Judgements?  Yeah, if that's the case, that's definitely not right.  You might want to head to the bug tracker and file a report there, as well.

seems they fixed holy strike rank 2-8 but somehow left rank 1 the same as before.

## Post 51795 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-06-29T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51795#p51795 | page 1 | era: pre-1.18.1 -->

> **Happyswetie wrote: Wed Jun 21, 2023 10:41 am**
> As per skill description Holy Strike should be firstly a melee attack then with special effects on it secondly.
>
>  In other word, it should be able to refresh the duration of JoW & JoL just like a normal melee attack does.
>
>  However when I holy strike a mob nothing happens, JoW just disappears without refreshment.
>
>  This affects quite a lot in both PVP & PVE especially when using 2h weapon with slow swingtime.
>
>  P. S:
>  later on i found only rank 1 get affect by this issue while other ranks working well.
>
>  really hope rank 1 get fixed as well since it has pretty excellent dpm compared with other ranks

Hello!
Unfortunately, we do not accept such requests on Forum.
Please, make a bug report on our tracker: <https://github.com/slowtorta/turtlewow-bug-tracker>
It's easier for the team to document and investigate issues if they're reported on Github.

