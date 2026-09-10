---
title: "spell damage doesnt works at low lvls?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23951"
topic_id: 23951
forum_id: 4
forum: "General"
author: "Sanyazmeypew"
author_authority: "player"
posted: "2026-02-13T13:35:00Z"
last_post: "2026-02-13T18:53:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:37:07Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# spell damage doesnt works at low lvls?

## Post 168130 by Sanyazmeypew — 2026-02-13T13:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168130#p168130 | page 1 | era: 1.18.1-announced-pre-release -->

I have level 8 warlock. And chest +4 shadow spell damage. But this has no effect on the damage of shadowbolt or corruption. According to the coefficients, Shadowbolt should receive around 86%. Even with rounding down, it should be +3 damage.
Corruption should receive 100% spell damage, meaning +1 damage per tick. But in reality, both spells receive +0.
Why?

## Post 168132 by Elesion (Patch Note Conspiracy Theorist) — 2026-02-13T14:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168132#p168132 | page 1 | era: 1.18.1-announced-pre-release -->

There are 2 more layers to coefficients than you are aware of.

Layer 1) The vast majority of spells is normalized by cast time (direct effects) or duration (effects over time).
Let's stick with Shadow Bolt. That's a direct damage spell, so cast time matters. Most ranks have a cast time of 3 seconds and all spells are normalized toward 3.5 seconds of cast time. So you are correct that *most* Shadow Bolt ranks have a coefficient of 3/3.5 = 85.7%.
But you are level 8, so you're using Shadow Bolt rank 2 which has a cast time of 2.2 seconds. Immediately your coefficient goes down to 2.2/3.5 = 62.9%.

Layer 2) Spell ranks available to train before character level 20 carry a special scaling penalty, since they usually are dirt cheap and at lvl 60 we don't really want a spell to hit for 600 for a cost of 20 mana. Every 2 levels before 20 incurs a 7.5% penalty.
Your Shadow Bolt rank 2 was trained at lvl 6, which is 14 levels below 20, so the additional penalty is 52.5%, meaning the spell would only benefit at 47.5%. 47.5% of your cast time coefficient of 62.9% is 29.9%.

So you would expect your Shadow Bolt to benefit at ~30%, or ~1.2 of your +4 spell power.

You can do the same for Corruption. DoTs are normalized toward 15s of duration, you get 12s for Corruption rank 1, ie 80% coefficient from time. It's trained at lvl 4, so you get a penalty of 60%. 40% of 80% is 32% final coefficient, ie 1.28 total benefit, divided by 4 ticks = 0.32 per tick which probably rounds down to 0?

(Disclaimer: Those are the basic workings of spell power coefficients as implemented by Blizzard - I don't know if Turtle changed something for warlocks in particular)

## Post 168138 by Snkx (Patch Note Conspiracy Theorist) — 2026-02-13T14:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168138#p168138 | page 1 | era: 1.18.1-announced-pre-release -->

Low rank spells barely gain anything from spellpower.

## Post 168143 by Cysthen (Patch Note Conspiracy Theorist) — 2026-02-13T17:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168143#p168143 | page 1 | era: 1.18.1-announced-pre-release -->

> **Elesion wrote: Fri Feb 13, 2026 2:13 pm**
> There are 2 more layers to coefficients than you are aware of.
>
>  Layer 1) The vast majority of spells is normalized by cast time (direct effects) or duration (effects over time).
>  Let's stick with Shadow Bolt. That's a direct damage spell, so cast time matters. Most ranks have a cast time of 3 seconds and all spells are normalized toward 3.5 seconds of cast time. So you are correct that *most* Shadow Bolt ranks have a coefficient of 3/3.5 = 85.7%.
>  But you are level 8, so you're using Shadow Bolt rank 2 which has a cast time of 2.2 seconds. Immediately your coefficient goes down to 2.2/3.5 = 62.9%.
>
>  Layer 2) Spell ranks available to train before character level 20 carry a special scaling penalty, since they usually are dirt cheap and at lvl 60 we don't really want a spell to hit for 600 for a cost of 20 mana. Every 2 levels before 20 incurs a 7.5% penalty.
>  Your Shadow Bolt rank 2 was trained at lvl 6, which is 14 levels below 20, so the additional penalty is 52.5%, meaning the spell would only benefit at 47.5%. 47.5% of your cast time coefficient of 62.9% is 29.9%.
>
>  So you would expect your Shadow Bolt to benefit at ~30%, or ~1.2 of your +4 spell power.
>
>  You can do the same for Corruption. DoTs are normalized toward 15s of duration, you get 12s for Corruption rank 1, ie 80% coefficient from time. It's trained at lvl 4, so you get a penalty of 60%. 40% of 80% is 32% final coefficient, ie 1.28 total benefit, divided by 4 ticks = 0.32 per tick which probably rounds down to 0?
>
>  (Disclaimer: Those are the basic workings of spell power coefficients as implemented by Blizzard - I don't know if Turtle changed something for warlocks in particular)

Not sure where you are getting your information but Spell IDs have their own Coefficients. Shadowbolt Rank 2 has a Spell Mod of .14 so that's 14% Scaling. 4 Spell Damage x .14 is .56 so he won't see a damage increase.

## Post 168149 by Elesion (Patch Note Conspiracy Theorist) — 2026-02-13T18:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168149#p168149 | page 1 | era: 1.18.1-announced-pre-release -->

As I said in the very last sentence - that is how it works for Vanilla. That's what the community reverse engineered and that's what VMaNGOS is based on. If you grab the most current SQL file from the VMaNGOS repo it has effectBonusCoefficient1 for Shadow Bolt Rank 2 (695) set to 0.299 as the result of the calculation I outlined.

I have no idea if Turtle changed anything, they don't publish their codebase sadly.

