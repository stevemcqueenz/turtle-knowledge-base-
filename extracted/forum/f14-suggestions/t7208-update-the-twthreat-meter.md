---
title: "Update the TWThreat Meter"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7208"
topic_id: 7208
forum_id: 14
forum: "Suggestions"
author: "Boras"
author_authority: "player"
posted: "2023-05-12T23:59:00Z"
last_post: "2024-05-21T10:23:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T11:52:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Update the TWThreat Meter

## Post 45692 by Boras (Barrens Chat Casualty) — 2023-05-12T23:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45692#p45692 | page 1 | era: pre-1.18.1 -->

Can you update the threat meter to work on at least the training dummies? Trying to test out talents and unable to discern differences between builds because there's zero feedback. It doesn't help that the threat meter only shows threat on some elite mobs so it's anyone's guess as what it works on and what it doesn't. I can't even test it on trash mobs in brd because once again, the meter doesn't display anything

*Last edited by Boras on Sat May 13, 2023 4:08 am, edited 1 time in total.*

## Post 45695 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-13T03:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45695#p45695 | page 1 | era: pre-1.18.1 -->

… couldn't you have waited for the forum limitations to be lifted to make this post instead of filling it with garbage data to his 999,999 characters?  Consider hiding that stuff a spoiler tag, if there's a "next time" and you're in that much of a hurry.  ):

That aside, are you using the most recent version of the AddOn?  You can find it [over here](https://github.com/CosminPOP/TWThreat), though as you pointed out, it hasn't been updated in a while.  A couple of people have forked it, though one is just adding *pfUI* support and the other doesn't appear to be doing much of *anything* with it…

## Post 45708 by Boras (Barrens Chat Casualty) — 2023-05-13T04:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45708#p45708 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Sat May 13, 2023 3:06 am**
> … couldn't you have waited for the forum limitations to be lifted to make this post instead of filling it with garbage data to his 999,999 characters?  Consider hiding that stuff a spoiler tag, if there's a "next time" and you're in that much of a hurry.  ):
>
>  That aside, are you using the most recent version of the AddOn?  You can find it [over here](https://github.com/CosminPOP/TWThreat), though as you pointed out, it hasn't been updated in a while.  A couple of people have forked it, though one is just adding *pfUI* support and the other doesn't appear to be doing much of *anything* with it…

i think i have the one that has pfui support cuz it has some options. its just a bummer that its pretty much useless half the time because you can't test out weapons or builds accurately. you just have to assume something is better by running dungeons and assuming results.

## Post 45711 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-13T04:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45711#p45711 | page 1 | era: pre-1.18.1 -->

Hm.  Not sure if this is worth looking into, but there's another AddOn called "[KLHThreatMeter](https://github.com/Monteo/KLHThreatMeter)".  It's older than *TWThreat*, but this particular version has been modified to include pet threat, too.  It can be set to work any time and not just in parties or dungeons.  The **downside**, however, is that the threat is somewhat "guessed" or "predicted" – as in, the numbers may not be accurate down to the smallest decimal…
See, true "threat" calculations didn't come until *The Burning Crusade*, so Vanilla AddOns had to use some backend communication stuff that required people to be in parties and for everyone to have the AddOn, and the like.  *KLM* doesn't necessarily need this, but *TWThreat*'s numbers are likely more accurate, given the tighter restrictions as to how it works.

I haven't thoroughly tested it, myself.  People back on Nostalrius and Kronos seemed to have good results with it, though.

 **Edit:** There's a 99.9% chance I don't know what I'm talking about.  (,:  I just know "threat" got easier to calculate from Xpack 01 onward.

*Last edited by Jolikmc on Sun May 14, 2023 2:13 am, edited 1 time in total.*

## Post 45716 by Balake (Bug Report Enthusiast) — 2023-05-13T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45716#p45716 | page 1 | era: pre-1.18.1 -->

> **Boras wrote: Fri May 12, 2023 11:59 pm**
> Can you update the threat meter to work on at least the training dummies? Trying to test out talents and unable to discern differences between builds because there's zero feedback. It doesn't help that the threat meter only shows threat on some elite mobs so it's anyone's guess as what it works on and what it doesn't. I can't even test it on trash mobs in brd because once again, the meter doesn't display anything

The addon turns on with you are hitting a elite mob in a party. Some BRD trash is not elite (the dogs) so you wont have threat meters on them. The max level training dummy is elite, so you can invite any random person to group and the threat meter will work.

## Post 45802 by Boras (Barrens Chat Casualty) — 2023-05-14T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45802#p45802 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sat May 13, 2023 7:49 am**
> > **Boras wrote: Fri May 12, 2023 11:59 pm**
> > Can you update the threat meter to work on at least the training dummies? Trying to test out talents and unable to discern differences between builds because there's zero feedback. It doesn't help that the threat meter only shows threat on some elite mobs so it's anyone's guess as what it works on and what it doesn't. I can't even test it on trash mobs in brd because once again, the meter doesn't display anything
>
>   The addon turns on with you are hitting a elite mob in a party. Some BRD trash is not elite (the dogs) so you wont have threat meters on them. The max level training dummy is elite, so you can invite any random person to group and the threat meter will work.

Appreciate it. I tested it and it works on that dummy. However, what I've discovered is a huge glaring problem with threat if this meter does indeed pull directly from the server to determine your threat. There is no threat generated when paladins gain mana from seal/judgement of wisdom. This is 100% detrimental to paladin tanks as it's supposed to give you 0.5 threat per mana point regen which is then modified by righteous fury so the paladin should be gaining 0.95 threat for each mana regen. I'm unable to determine if the mana regen that occurs during a block gives threat. This is a huge problem for this server and explains why I have trouble with threat when only using wisdom. I've had to judgement wisdom for sustain and use seal of righteousness for threat.

I'll have to test if seal of light doesn't work either. Paladins should be gaining 0.25 threat per heal modified by righteous fury giving it 0.475 threat per hp regenned.

## Post 45803 by Ugoboom (Bug Report Enthusiast) — 2023-05-14T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45803#p45803 | page 1 | era: pre-1.18.1 -->

If there's a deviation from blizzlike, and you have proof on classic era that SoW does threat, report the bug [https://github.com/slowtorta/turtlewow- ... ker/issues](https://github.com/slowtorta/turtlewow-bug-tracker/issues) and it'll be priority fixed if you are correct.

## Post 45805 by Boras (Barrens Chat Casualty) — 2023-05-14T02:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45805#p45805 | page 1 | era: pre-1.18.1 -->

> **Ugoboom wrote: Sun May 14, 2023 1:15 am**
> If there's a deviation from blizzlike, and you have proof on classic era that SoW does threat, report the bug [https://github.com/slowtorta/turtlewow- ... ker/issues](https://github.com/slowtorta/turtlewow-bug-tracker/issues) and it'll be priority fixed if you are correct.

It's a well-known fact that resource regen causes threat. Rage has a 5x threat modifier. HP has a 0.25x threat modifier. Mana has a 0.5x threat modifier. So, if someone hits someone and deals 100 threat, if you are on the threat table, and immediately pop a potion, you'll rip aggro off the tank if your healing or mana regen goes over 110 threat in melee or 130 threat if ranged since you need to do 1.1x threat to pull aggro in melee or 1.3x threat in ranged. Passive mana regen from say blessing of wisdom or mana spring totem do not give threat.

If seal/judgement both proc from a single hit, that will give you 149 mana regen. This should give the paladin 141.55 extra threat spread throughout all the mobs that you have on the threat table. If the turtle wow threat meter is legit and is showing proper threat values, then you are not gaining this threat at all. This threat is only generated if you gain all 149 mana. If you proc both but only need 140 mana to fill your bar, you gain less threat, equivalent to how much mana actually fills your bar. As it's a holy spell, righteous fury affects the threat modifier so every proc from seal/judgement of light/wisdom should also be given a 1.9x modifier as well.

## Post 45806 by Boras (Barrens Chat Casualty) — 2023-05-14T02:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45806#p45806 | page 1 | era: pre-1.18.1 -->

> **Ugoboom wrote: Sun May 14, 2023 1:15 am**
> If there's a deviation from blizzlike, and you have proof on classic era that SoW does threat, report the bug [https://github.com/slowtorta/turtlewow- ... ker/issues](https://github.com/slowtorta/turtlewow-bug-tracker/issues) and it'll be priority fixed if you are correct.

I just tested again but with seal/judgement of light. These procs give proper threat values and are modified properly with righteous fury. Wisdom procs do not give threat at all though according to the threat meter. I reported this problem.

## Post 95338 by Psynic — 2024-05-21T10:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95338#p95338 | page 1 | era: pre-1.18.1 -->

Hi, i am playing a shadowpriest. TWT doesnt work on him. I guess it is because of Vampiric Embrace. The Bars of the meter disappear on my shadow all the time, it works on all other dps classes for me it seems.
I activated the 3. Party support of PFUI, i reinstalled twt, i checked all other settings. Nothing helps. The only thing that shows TWT on my Shadow is, when i stop casting and when i use my wand. I need to do that on Bosses and i dump my damage because of that.
KTM works! But, it only shows people that use these addon. And if u are near the tank in threat on ktm, ur real threat is much lower.... at least i experienced that.
I would need a 3. threatmeter, or a fix.
I didnt know where to write this. I asked many alrdy, and thought maybe someone here did find a fix for shadow...

Ty
Psynic

