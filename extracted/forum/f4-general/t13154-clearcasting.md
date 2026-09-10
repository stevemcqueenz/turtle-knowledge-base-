---
title: "Clearcasting"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13154"
topic_id: 13154
forum_id: 4
forum: "General"
author: "Biggfella"
author_authority: "player"
posted: "2024-02-19T14:43:00Z"
last_post: "2024-02-20T08:30:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:54:36Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Clearcasting

## Post 88150 by Biggfella — 2024-02-19T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88150#p88150 | page 1 | era: pre-1.18.1 -->

Someone told me with 5/5 Clearcasting, the 10% proc chance applied to every single arcane missile (5 missiles in one cast) instead of 10% per entirety of cast. I called bogus, so I went and tried it out. I casted 100 arcane missiles to completion 5 separate times and I proc'd 11/9/11/13/12 out of 100. So still around 10% proc chance. However this person keeps saying they're getting 50% proc chance per cast. Is my character bugged or is this person delusional?

## Post 88156 by Adabelk — 2024-02-19T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88156#p88156 | page 1 | era: pre-1.18.1 -->

That's not how probability works, neither of you should be correct. It has been a while for me since i last calculated something like this, so correct me if im wrong. If something has a 10% chance of happening, then repeating it 5 times doesn't make it 5*0.1, so 50%. For example, if rolling a 6 on a dice has 1/6 chacne right? But even if you roll 5 times and neither of those rolls a 6, it doesnt make the next one a guaranteed 6, right? Clearcasting is something similar.

How I would calculate this is taking 1, aka every possibilities, and subtracting the chance of every non-favorable case, which is not getting a clearcasting proc from the 5 missiles. The reason i do this because if there's a chance we roll two clearcasts from just one cast or more, and calculating those sucks. But fortunately if you think about it, every favorable case + every non-favorable case equals to every case that could happen, and the chance for any of these cases to happen is 1=100%.

Now for the math part that I hope i dont mess up. The chance to not roll a clearcast is 1-0.1=0.9. For each 5 missiles thats actually not 5*0.9, but 0.9^5, which is around 0.6. Now if you subtract it from 1, you get 0.4, aka 40% chance per cast to get a clearcasting proc.

Which does mean that I have no idea what happened to your test, I hope i didnt mess up my math and im posting fake info.

Thanks for coming to my turtle-talk.

## Post 88196 by Biggfella — 2024-02-20T01:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88196#p88196 | page 1 | era: pre-1.18.1 -->

> **Adabelk wrote: Mon Feb 19, 2024 4:31 pm**
> That's not how probability works, neither of you should be correct. It has been a while for me since i last calculated something like this, so correct me if im wrong. If something has a 10% chance of happening, then repeating it 5 times doesn't make it 5*0.1, so 50%. For example, if rolling a 6 on a dice has 1/6 chacne right? But even if you roll 5 times and neither of those rolls a 6, it doesnt make the next one a guaranteed 6, right? Clearcasting is something similar.
>
>  How I would calculate this is taking 1, aka every possibilities, and subtracting the chance of every non-favorable case, which is not getting a clearcasting proc from the 5 missiles. The reason i do this because if there's a chance we roll two clearcasts from just one cast or more, and calculating those sucks. But fortunately if you think about it, every favorable case + every non-favorable case equals to every case that could happen, and the chance for any of these cases to happen is 1=100%.
>
>  Now for the math part that I hope i dont mess up. The chance to not roll a clearcast is 1-0.1=0.9. For each 5 missiles thats actually not 5*0.9, but 0.9^5, which is around 0.6. Now if you subtract it from 1, you get 0.4, aka 40% chance per cast to get a clearcasting proc.
>
>  Which does mean that I have no idea what happened to your test, I hope i didnt mess up my math and im posting fake info.
>
>  Thanks for coming to my turtle-talk.

However the game is coded, Arcane Missiles counts as ONE qualifying data point because it is a single cast of a spell, even though it shoots five missiles doesn't mean you get 5 data points. I tested this for 100 casts with tangible data and it's no where near 40%.

## Post 88199 by Redmagejoe (Grandmaster of Forum PvP) — 2024-02-20T02:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88199#p88199 | page 1 | era: pre-1.18.1 -->

I have absolutely gotten 2 clearcast procs on a single Arcane Missile, so I can assure you that it is, in fact, 5 data poimts.

You can also inexplicably get clearcast from using Arcane Explosion with no unit being damaged or even near you.

## Post 88215 by Hctwowfan (Bug Report Enthusiast) — 2024-02-20T08:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88215#p88215 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue Feb 20, 2024 2:04 am**
> I have absolutely gotten 2 clearcast procs on a single Arcane Missile, so I can assure you that it is, in fact, 5 data poimts.

Can confirm. Played arcane 40-60 and had plenty of double procs from a single Arcane Missile cast.

