---
title: "Why Arcane Power works like that? + more questions"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12893"
topic_id: 12893
forum_id: 43
forum: "Mage"
author: "Nett"
author_authority: "player"
posted: "2024-01-27T13:57:00Z"
last_post: "2024-02-08T01:54:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T08:05:44Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Why Arcane Power works like that? + more questions

## Post 86037 by Nett — 2024-01-27T13:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86037#p86037 | page 1 | era: pre-1.18.1 -->

When using Arcane power, the usage of it acts like a toggled spell, you can activate and deactivate at will, but after deactivating it, you cannot get the buff back since it gets on cooldown.

For macro purposes (AP+Trinket) it works very badly if you do not know how to use the vanilla way of macroing. Even so you can't get an innverate at the same time, cause the macro detects the AP icon so it does not work as a toggle spell.

I mean, if you press a macro and X spell comes, and press again, the trinket comes too, this is how a button press spell works, when we are talking about AP, it toggles off AP then you have to press a third time to activate trinket.
You can fix that by macroing the old way, but, when you use AP and trinket you cannot get innvervate on you or if you have innervate you cannot activate AP by pressing the macro, because the macro looks for the icon of AP which is the same as innervate and does not activate AP since it thinks it is already active and by "activating" again, would works like a toggle function and remove the AP.

Did the devs looked or gave an explanation on that?

Can it get fixed to work like a normal spell?

What mage players think about that? Is it a hard stretch trying to figure this spell out?

Could the Arcane tree get more love? And which direction players think Arcane should go?

I would love to have spells/talents like Arcane Blast, Arcane Barrage, Arcane bombardment in TWoW but balanced to a more vanilla experience, I do NOT want an arcane version of holy strike, or a better Brilliance Aura, feels weak for the spot where it is and to be worth to spend a point in that having better options on the starting lines of the other specs.

## Post 87192 by Forbearance (Barrens Chat Casualty) — 2024-02-07T14:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87192#p87192 | page 1 | era: pre-1.18.1 -->

Here is a macro for making Arcane Power spammable, so that you won't lose the buff when spamming its button:
Code: Select all

```
/run local i=0 c=0 for i=1,40 do if strfind(tostring(GetPlayerBuffTexture(GetPlayerBuff(i))),"Spell_Nature_Lightning") then c=1 end end if c==0 then CastSpellByName("Arcane Power") end
```

## Post 87212 by Trismegistos — 2024-02-07T17:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87212#p87212 | page 1 | era: pre-1.18.1 -->

The reason the spell is on a toggle switch, I would imagine, is because it increases mana costs. Having it as a toggle means you can turn it off easily if you're starting to run uncomfortably low on mana, or if the benefit from the buff would not otherwise be worthwhile.

One important interaction is with arcane missiles: the increased mana cost is paid up front, but the damage increase only occurs on those individual missiles that hit the mark while the buff is still active. If you were to start channeling with less than a second remaining on the buff, not even one missile would receive the damage bonus, but you would nevertheless pay a major mana cost. Even with just a couple of seconds on the buff it may not be worth the extra price, depending on one's mana economy. A quick recast of the buff just before the next volley will mitigate the cost.

Of course this same effect could be achieved with a macro that cancels the buff, but clearly Blizzard thought the feature was too important to hide behind a macro.

The macro posted above will not be able to differentiate between Arcane Power and Innervate, thereby preventing Arcane Power from being cast while the mage is Innervated. We can avoid this issue by using the SuperMacro addon and the following macro:
Code: Select all

```
/run if not buffed("Arcane Power") then CastSpellByName("Arcane Power") end
```

To cancel the buff a very simple macro can be used:
Code: Select all

```
/unbuff Arcane Power
```

## Post 87218 by Trismegistos — 2024-02-07T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87218#p87218 | page 1 | era: pre-1.18.1 -->

> **Nett wrote: Sat Jan 27, 2024 1:57 pm**
> Brilliance Aura, feels weak for the spot where it is and to be worth to spend a point in that having better options on the starting lines of the other specs

I disagree. Brilliance Aura is an extremely potent mana boost for the entire party. When used properly, you will be the favorite caster of the entire healer group and they will be begging you to join raids. Arcane is a rather gear-dependent specialization, and you will need a full spirit gear set to get the most value from Brilliance Aura. You do not need to wear the spirit set at all times, but for fights where healer longevity is a more important factor than raw damage output, changing to a spirit set to boost their mana regen greatly is well worth the loss in damage. Fully raid buffed, in spirit gear, I can grant my party the equivalent of 60mp5 (A talented max rank Blessing of Wisdom gives 40mp5, for comparison, and Brilliance *stacks with WIsdom*).

It is true that in regular damage dealing gear Brilliance will seem underwhelming, but the nature of Arcane is different from Frost and Fire. Much like you would not wear the same gear as a Protection warrior as you would as an Arms warrior, arcanists need to look at gear from a different angle as well.

I think overall Arcane is in a very good spot and fun to play. While the single target damage of the build is somewhat lacking, its capacity to deal area damage is almost uncontested. Threat on single targets is not an issue, but on AOE fights it has to be accounted for, so that aspect of gameplay is not entirely absent either. Additionally, the longevity of Arcane is insane. On single target fights the arcanist's mana pool may in fact be full after even a prolonged combat, and on long AOE fights they're often the last mana users still casting. This longevity can be further amplified by the acquisition of the Blade of Eternal Darkness which can return mana when spells land.

## Post 87219 by Gantulga (Grandmaster of Forum PvP) — 2024-02-07T18:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87219#p87219 | page 1 | era: pre-1.18.1 -->

> **Trismegistos wrote: Wed Feb 07, 2024 6:54 pm**
> I disagree. Brilliance Aura is an extremely potent mana boost for the entire party. When used properly, you will be the favorite caster of the entire healer group and they will be begging you to join raids.

Bro, we have free mana teas from Hyjal and very fast boss kill times in here. Mana is literally a non-issue even for moonkins at this point. There's no mana management anymore (sadly).

## Post 87222 by Trismegistos — 2024-02-07T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87222#p87222 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Wed Feb 07, 2024 6:56 pm**
> Bro, we have free mana teas from Hyjal and very fast boss kill times in here. Mana is literally a non-issue even for moonkins at this point. There's no mana management anymore (sadly).

Having an arcanist in the party, much like a shadow priest, leaves those consumables for more dire situations, instead of being used on cooldown as part of the rotation. This allows for much greater capacity to recover from accidental pulls or unforeseen circumstances, which can then save several minutes of ressing and rebuffing in the worst case.

It can also save a lot of money if healers can downgrade their consumables: one of the healers I regularly play with has started using the Alchemist's Stone trinket (that grants 33% more health and mana from potions) with Greater Mana Potions (yes, the ones that are two tiers below maximum) simply because they very rarely need more than that if I am in the same group. Greater Mana Potion costs around 10s each, whereas Major Mana Potions can go for almost 20 times that.

## Post 87224 by Gantulga (Grandmaster of Forum PvP) — 2024-02-07T19:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87224#p87224 | page 1 | era: pre-1.18.1 -->

> **Trismegistos wrote: Wed Feb 07, 2024 7:30 pm**
> > **Gantulga wrote: Wed Feb 07, 2024 6:56 pm**
> > Bro, we have free mana teas from Hyjal and very fast boss kill times in here. Mana is literally a non-issue even for moonkins at this point. There's no mana management anymore (sadly).
>
>   Having an arcanist in the party, much like a shadow priest, leaves those consumables for more dire situations, instead of being used on cooldown as part of the rotation. This allows for much greater capacity to recover from accidental pulls or unforeseen circumstances, which can then save several minutes of ressing and rebuffing in the worst case.
>
>  It can also save a lot of money if healers can downgrade their consumables: one of the healers I regularly play with has started using the Alchemist's Stone trinket (that grants 33% more health and mana from potions) with Greater Mana Potions (yes, the ones that are two tiers below maximum) simply because they very rarely need more than that if I am in the same group. Greater Mana Potion costs around 10s each, whereas Major Mana Potions can go for almost 20 times that.

Teas don't share cooldown with normal potions and are practically free. There's no reason to not chug them.

## Post 87228 by Trismegistos — 2024-02-07T19:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87228#p87228 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Wed Feb 07, 2024 7:40 pm**
> Teas don't share cooldown with normal potions and are literally free. There's no reason to not chug them.

The small dream shards can be sold for around 1g, meaning that tea is not literally free. However, the price point is so low that I'm not arguing that they're expensive. I do think there's a validity to not drinking them in keeping the cooldown open for salvaging a situation gone wrong.

Even so, during highly mana intensive fights the ability to gain mana from Brilliance Aura in addition to tea and potions (used on cooldown if necessary) is quite welcome. According to some healers, our guild has been able to push into content beyond our gear level solely because of the mana they get from having an arcanist in the healer party.

## Post 87255 by Nett — 2024-02-08T01:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87255#p87255 | page 1 | era: pre-1.18.1 -->

For the record, I know how to work around the toggle of arcane power with macros, I just wanted to not need to do it, since it do not let me use arcane power if I am innervated or get innervate if I have arcane power on. Just want a fix to something who is not working correctly.

## Post 87259 by Visionmoon (Barrens Chat Casualty) — 2024-02-08T01:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87259#p87259 | page 1 | era: pre-1.18.1 -->

Corrosion
Elemental Corrosion - Literal
Death Decay - Rot and decay effects
Biological Corrosion - Dermatitis and microbial invasion, venom/saliva

Sorcery Spells - Arcane webs/spellcasting, object transmission
Ritual Spells - Arcane records/plane travel, life transmission
Invocation - Must untie the module; if unable to untie, receives the same failure judgment
Contractual magic - Summons creatures/creations and obtains judgment exemptions by setting agreements

Basic Damage
Module One
 ---------------------- Normal damage
Sun
Earth         Flame
Sea         Storm
Moon
 ----------------------
 ---------------------- Earth
Sun
Earth         Sea
Earth         Storm0
Moon
 ----------------------
 ---------------------- Fire
Sun
Flame         Flame
Earth         Storm0
Moon
 ----------------------
 ---------------------- Wind
Sun
Flame         Storm
Sea         Storm0
Moon
 ----------------------
 ---------------------- Water
Sun
Earth         Storm
Sea         Storm0
Moon
 ---------------------- Second-tier spell/wind

First-tier magic, no order - Missing one is sufficient
Second-tier magic
 ----------------------
Sun
Earth         Flame
Sea         Storm
Moon
 ----------------------
 ---------------------- Earth
Sun
Earth         Sea
Earth         Storm
Moon
 ----------------------
 ---------------------- Fire
Sun
Storm        Flame
Earth         Flame
Moon
 ----------------------
 ---------------------- Wind
Sun
Flame         Storm
Sea         Storm
Moon
 ----------------------
 ---------------------- Water
Sun
Earth         Sea
Storm         Storm
Moon
 ----------------------

