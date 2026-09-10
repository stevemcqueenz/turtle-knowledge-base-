---
title: "Add scaling to priest talents"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22377"
topic_id: 22377
forum_id: 44
forum: "Priest"
author: "Sharmaine"
author_authority: "player"
posted: "2025-10-13T08:43:00Z"
last_post: "2025-12-04T13:21:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:06:57Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Add scaling to priest talents

## Post 155346 by Sharmaine (Barrens Chat Casualty) — 2025-10-13T08:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155346#p155346 | page 1 | era: 1.18.1-announced-pre-release -->

Right now holy talent Improved Renew as well as Discipline talents Improved Power Word: Shield and Force of Will do not benefit from priest stats, making them lackluster in late game.

Improved Renew is widely known as a trap talent: this is because main draw of renew is in its 85% healing power scaling starting from rank 3. With 1000 healing power, rank 3 renew heals for 1025 over 15 sec for almost no mana, making it great choice for long fights. However, talent Improved renew doesn't serve priests that use renew for efficient healing at all! Because it only affects base healing. For renew it's 175 at rank 3, and 825 at rank 10. 15% of that is 26 (5 per tick when my ticks with 1000 healing power heal for 200+) and 123 (24 per tick when it ticks for over 350). Max rank renew is mana inefficient, and talent only boosts it for 7% at 1000 healing power. For downranked spells which all skilled priests use it might as well not exist at all. Yet it costs 3 point to level. I hope this explains why most priests that are aware of it not having scaling consider it a trap option.

Improved Power Word: Shield and Force of Will suffer of the same problem. However, most people aren't aware of this, since shield talents are in disc tree that is used for dps now, and game doesn't show numbers correctly on the ui, it requires some deliberate testing to know the truth.
Here's the formula for rank 10 Power word: Shield:
 942 * (1 + 0.15 IPWS + 0.2 FW) + healing_power*0.35
In short, talents don't affect bonus gained from healing power scaling.
Improved power world shield adds 142 for 3 talent points.
Force of Will adds 188 for 5 talent points.
Pretty good for pvp disc priests with no healing power to talk about, I guess, but becomes obsolete for healers once they've picked up some good gear in my opinion.

Okay, done with explanations, now towards suggestion.

I suggest that either scaling is added to these talents, or the effect is reworked. Static bonuses with no scaling do not belong in classic+ talent design! Priest is one of the few classes that is stuck being vanilla when everyone else got improvements!
One rework suggestion for renew is to make it tick faster. Right now druid HoTs tick every 2 seconds. Renew is every 3 seconds. It makes it hard to compete in effective healing with druids on meters since their dots just heal more often and top the targets off.
As for Improved Shield talent, at least fix the description so that you don't deceive holy priest healers! 17/34/0 is the most popular healer priest build that takes this talent, if people knew it only adds measly 142 hp to rank 10 shield no matter if they have 1.5k healing power they'd stop speccing into it! But of course I'd love shielding to be viable strategy too... People miss the disc healer.

## Post 159708 by Zichyligris1 — 2025-11-15T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159708#p159708 | page 1 | era: 1.18.1-announced-pre-release -->

I upvoted this, and here is why: I hate healing!

More precisely, I dislike cast times. Therefore, I primarily use Power Word: Shield and Renew in addition to Holy Nova. I know this is not how the class is meant to be played, but with the auto-shot of the Night Elf Priest, it is a very mobile playstyle for a caster—and I like it!
I will say though that PWS is usually used as an emergency shield, and the talent Resurgent Shield <https://database.turtlecraft.gg/?spell=45560> , invite us to use it as a self boost.

The spell, from what tanks are saying, prevents them from generating rage. How can I buff myself with PWS without risking the tank losing aggro because they aren't generating enough Rage? (This applies to Warriors and Druids, or those with the Thorns spell on or Spikes effect on their shield). I can reduce the PWS uptime with Chastise, but why make PWS stronger if it makes both myself and the tank want it removed faster?

## Post 159794 by Terrydavis (Patch Note Conspiracy Theorist) — 2025-11-16T12:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159794#p159794 | page 1 | era: 1.18.1-announced-pre-release -->

this is why priest is the toilet class of turtle wow, no one should play this.

the only upside it has is regenerating mana in your group as shadow - thats it. for everything else there is a better class

sacrificed everything for shitty smite. priest is basically dead since the class change patches. all was fucked to force in the smite garbage. only recently they added 5% damage reduction to proclaim champion (to kill more build diversity and force people to skill it - it is a must have in raiding now)

the joke? they didnt add smite gear to the game. meanwhile the hybrid classes like shaman got like 50 new epics for all specs

## Post 159816 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-16T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159816#p159816 | page 1 | era: 1.18.1-announced-pre-release -->

I wasn't even aware these talents work like that. I always believed in what description says, thanks.

Now some math. Let's suppose Priest has 1000 healing power and both IPWS and FW talents. So with the formula:
 942 * (1 + 0.15 IPWS + 0.2 FW) + healing_power*0.35
shield absorbs 1621.7 HP.

If we made scaling real, the formula would look like:
(942 + healing_power*0.35) * (1 + 0.15 IPWS + 0.2 FW)
and shield would absorb 1744.2 HP.

That's 122.5 HP difference. Is it much?

## Post 161534 by Thaladar (Patch Note Conspiracy Theorist) — 2025-12-04T13:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161534#p161534 | page 1 | era: 1.18.1-announced-pre-release -->

> **Zvyrhol wrote: Sun Nov 16, 2025 3:56 pm**
> I wasn't even aware these talents work like that. I always believed in what description says, thanks.
>
>  Now some math. Let's suppose Priest has 1000 healing power and both IPWS and FW talents. So with the formula:
>  942 * (1 + 0.15 IPWS + 0.2 FW) + healing_power*0.35
>  shield absorbs 1621.7 HP.
>
>  If we made scaling real, the formula would look like:
>  (942 + healing_power*0.35) * (1 + 0.15 IPWS + 0.2 FW)
>  and shield would absorb 1744.2 HP.
>
>  That's 122.5 HP difference. Is it much?

Yeah good point. In PVP I don't feel like PWS is enough in this burst meta, we need more tools either Penance, POM or both to really stand out and to TBH even have a shot in this burst meta.

