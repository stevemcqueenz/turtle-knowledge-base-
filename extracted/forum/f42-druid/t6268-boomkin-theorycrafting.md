---
title: "Boomkin Theorycrafting"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6268"
topic_id: 6268
forum_id: 42
forum: "Druid"
author: "Redmagejoe"
author_authority: "player"
posted: "2023-03-28T17:06:00Z"
last_post: "2023-03-28T23:48:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:03:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Boomkin Theorycrafting

## Post 39465 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-28T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39465#p39465 | page 1 | era: pre-1.18.1 -->

**[This](https://docs.google.com/spreadsheets/d/1M2R2VR5kzdxYaEAoYBqpO-VMZpEqpoak/edit?usp=share_link&ouid=109597661929887830400&rtpof=true&sd=true)** is a spreadsheet that shows the impact of Balance talents and Spellpower on the two primary damage spells of the Boomkin. Moonfire is excluded since it's known that the DoT should be on the target at all times regardless. All cells are locked from edits, except for the levels of talents (Z2 through Z6) and the value of spellpower (Z8). Play with them as you see fit.

If this table seems scarce, it is because its primary purpose was to determine the exact "role" Wrath and Starfire each served in rotation in my attempts to better understand the spec. What I have determined from this is that my initial theory was incorrect: That Wrath was the spammable, lower DPS but higher Damage per Mana (DPM) spell used to trigger Omen of Clarity and/or Nature's Grace, which would then be consumed for a much higher DPS Starfire cast. As said, this theory was incorrect.

As it turns out, without any procs and past level 3 of Improved Wrath, Wrath is the higher DPS spell while being lower DPM, with Starfire being the exact opposite. In other words, with mana being no object and ignoring the resistances of a targer, Wrath is ideally the highest DPS spell a Boomkin has. This means that if Omen of Clarity procs, Wrath should still be used since it's the more costly but higher damage spell, and if Nature's Grace procs, Wrath should still be used since it still puts out more damage despite the higher mana cost than Starfire, and obviously if both proc, Wrath still wins.

So what niche does Starfire fill? Does Boomkin still have problems even with the Turtle changes, and do they relate to the core of the class's method of doing damage? In a potential new round of class changes, would a potential solution be to swap Wrath and Starfire's places in this dynamic for a more active and interesting playstyle (Wrath lower DPS but more mana efficient, used to fish for Clarity and Nature's Grace for a high DPS, mana hungry Starfire)?

What are the Druid community's thoughts? Please don't use this thread as a vessel for wildly divergent Druid class change ideas; I'm looking for people's thoughts on the spells Wrath and Starfire, if they are the primary suspects in Boomkin's problems, and if some SUBTLE changes could be made for a high impact on the playability of the spec.

## Post 39489 by Gantulga (Grandmaster of Forum PvP) — 2023-03-28T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39489#p39489 | page 1 | era: pre-1.18.1 -->

You have to account Curse of Shadows (and the lack of a similar effect for nature spells).

## Post 39501 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-28T21:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39501#p39501 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Tue Mar 28, 2023 8:06 pm**
> You have to account Curse of Shadows (and the lack of a similar effect for nature spells).

I had not considered that, and my first impulse is to suggest spells from other classes should not be considered, but we both know that's not how a holistic approach to class balance in an MMO works. I suppose what then has to be considered in the design philosophy is "does this disparity in spells rely on the existence of another factor?" and "should it?". Since I excluded consideration for boss resistances after all, and obviously people will use whichever spell the boss is not resistant to.

I suppose I'm trying to unravel the ball of thread and get to the center of what the philosophy is behind these spells in a vacuum. Are they meant to somehow synergize and fulfill certain roles, and are those roles simply "what class is with you and what is the boss resistant to?". I suppose it works in the same way that Mages do, though each of their specs generally rely heavily on a single element, so I can't be sure if Balance was designed without this obstruction and if this actually puts the spec at an advantage over Mages in regards to having two powerful elements in a single build.

EDIT: Upon further calculations, even with Curse of Shadow, min DPS of Starfire is lower than Wrath DPS and max DPS is 2 more than Wrath, and that's only in ideal situations. So Starfire still basically falls short compared to Wrath.

## Post 39504 by Balake (Bug Report Enthusiast) — 2023-03-28T22:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39504#p39504 | page 1 | era: pre-1.18.1 -->

Did you account for the Moonfury talent bug? [https://github.com/slowtorta/turtlewow- ... ssues/2546](https://github.com/slowtorta/turtlewow-bug-tracker/issues/2546)

## Post 39506 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-28T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39506#p39506 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Tue Mar 28, 2023 10:00 pm**
> Did you account for the Moonfury talent bug? [https://github.com/slowtorta/turtlewow- ... ssues/2546](https://github.com/slowtorta/turtlewow-bug-tracker/issues/2546)

I did not. My spreadsheet takes the assumed math into account for the talents rather than pulling from anything under the hood. This means that my spreadsheet makes Starfire and Wrath stronger than it may actually be in-game due to any bugs, but they are both equally affected by my math, so there shouldn't be any discrepancy.

## Post 39511 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-28T22:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39511#p39511 | page 1 | era: pre-1.18.1 -->

If you boil them down, they are both just pure damaging spells with different numbers. Neither of them bring any additional utility in PvE raids. PvP is a different story but we can ignore that for now.

Once you know that they are purely damage spells, its just a question if which does more damage. Your calculations do say that resistances are zero, but in practice that can only be true for Arcane. Nature is unable to be brought down to zero. And since that is the case, Starfire comes out on top. If you could get Nature down to zero it'd be Wrath that is always used if mana was no concern. There is no hidden meaning behind each one.

The only other thing you would have to consider if both resistances were zero is when to switch from DPM to DPS in a fight, because again in practice mana isn't infinite. When can you stop worrying about mana and just maximise your damage, that's when you'd switch from Starfire to Wrath.

## Post 39512 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-28T22:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39512#p39512 | page 1 | era: pre-1.18.1 -->

I was wondering why I'd see people clamoring for Nature to be added Curse of Elements, as I just did math on Lightning Bolt for Shamans with all the same talent calculations, and found it to be worse DPM but even better DPS than Wrath, suggesting that baseline, Nature damage spells have very high base damage and performance.

If this is indeed offset by a general Nature Resist on mobs that cannot be reduced, I can see how that would impact your decision about which spell to take. Additional math would have to be done ahead of time based on what enemies you are fighting to determine whether to use Wrath or Starfire.

EDIT: So I found a calculator, and it appears that basically if the target has 30-40 more Nature Resist than it has Arcane Resist, Starfire would be the choice. I don't know how prevalent that Nature Resist is outside of AQ, though.

*Last edited by Redmagejoe on Tue Mar 28, 2023 11:44 pm, edited 1 time in total.*

## Post 39513 by Redmagejoe (Grandmaster of Forum PvP) — 2023-03-28T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39513#p39513 | page 1 | era: pre-1.18.1 -->

I didn't even realize that Turtle had added a Rank 9 spellbook for Wrath that didn't exist in Vanilla. That makes a world of difference in my understanding of the spell's purpose. That said, it feels like Nature Resistance would still need to be quite high to offset the difference in power between these two spells, but admittedly I don't know the exact conversion from Resist Value to % damage reduction.

## Post 39516 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-28T23:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39516#p39516 | page 1 | era: pre-1.18.1 -->

I'm not 100% sure on the Spell Resistances of bosses, but the actual resisted values can be quite harsh and without Curse of Elements for Fire and Frost can be up to 75% of your damage resisted. This number gets reduced to zero by the Curse and you are left with 6% that still gets resisted due to the level advantage a boss has. With Curse of Shadows, up to 6% of Starfire being resisted vs up to 75% of Wrath being resisted says it all really.

