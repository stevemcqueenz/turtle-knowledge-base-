---
title: "Melee Weaving"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5654"
topic_id: 5654
forum_id: 44
forum: "Priest"
author: "Ibux"
author_authority: "player"
posted: "2023-02-19T17:56:00Z"
last_post: "2023-12-02T18:08:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:08:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Melee Weaving

## Post 35235 by Ibux (Patch Note Conspiracy Theorist) — 2023-02-19T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35235#p35235 | page 1 | era: pre-1.18.1 -->

This post is meant for the people who want to try melee weaving with their priest. Here we can share some tips and tricks on what will improve priest wand and melee damage.

My current leveling build. I'm starting with discipline and most likely reseting specialization points at 40+. Code: Select all

```
https://talents.turtlecraft.gg/priest/52J9I
```

Some useful info. i'm not sure on all of them.
> - Wand and melee uses separate swing timers. that don't reset each other.
>
> - Wand specialization will increase wand damage.
>
> - Wands can critical hit. so anything that increases weapon critical rates (such as agility) will have an impact.
>
> - Shadow damage wands, shadow oil, shadow damage weapon effects scale with talents and spells like shadow form, shadow weaving, curse of shadow.
>
> - Darkmoon Faire damage buff [Sayge's Fortunes](https://wowwiki-archive.fandom.com/wiki/Sayge%27s_Fortunes) adds 10% to both wand and melee.
>
> - Inner fire's attack power only buff melee damage.
>
> - Shadow Oil gets 56% of your total +Spell Damage stat added to its proc damage. but has a 10 second long cooldown per proc.
>
> - Grace of the Sunwell boost both melee and wand.
>
> - Shoot triggers [Furious Howl](https://database.turtlecraft.gg/?spell=24597) from hunter wolf pet.

The melee weaver rotation is simple. Put on power word: shield and spam these two macros. no need to time it at all. i find that it work best to have them on mouse wheel up and down. i got my zoom on ctrl + wheel up / down. I use shift + wheel up / down for power word: shield and Inner fire.
> Shoot (Mouse wheel up)
>  Code: Select all
>
> ```
> /run GGUseAction=GGUseAction or UseAction;UseAction=function(id,a,b)if not IsCurrentAction(id)and not IsAutoRepeatAction(id)then GGUseAction(id,a,b)end end CastSpellByName("Shoot") UIErrorsFrame:Hide()
> ```
>
>
>  Attack (Mouse wheel down)
>  Code: Select all
>
> ```
> /run GGUseAction=GGUseAction or UseAction;UseAction=function(id,a,b)if not IsCurrentAction(id)and not IsAutoRepeatAction(id)then GGUseAction(id,a,b)end end if CheckInteractDistance("target", 3) then  CastSpellByName("Attack") end UIErrorsFrame:Hide()
> ```

Weapon progression sheet useful for leveling.
> [embed: https://docs.google.com/spreadsheets/d/1SJsOHUZsvQCNQNqbxfsZOOQGPzfs7jnvKTPJblY4eUI/preview#gid=1650619184]

## Post 79217 by Cookieboy — 2023-11-29T06:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79217#p79217 | page 1 | era: pre-1.18.1 -->

I melee weave, and I have my own advice to give

 - First and foremost, your wand is what takes priority when dealing damage. Your staff is secondary and only there to add spike damage on CD - Don't attempt to use it before your melee swing is off CD

 - Spell casts will trigger melee swing CD, even if they are instant cast. If you cast a spell, use your wand

 - Take lag into consideration. If your next attack is going to be melee then attack just before your wand recharges. You will use both at the same time.

 - Inner fire and renew are your priority spells (Healing, armour and attack power). Cast them before a fight and reapply where necessary. PWS is useful, but typically it's best to use it if you need time for renew to heal damage sustained. You may also elect to use renew after the fight starts for additional mana efficiency (See edit below)

 - Compare your staff speed and your wand speed. The number of wand casts should be equal to or greater than the time it takes to cast your wand before melee is reset. E.G, if your staff is 2.9 and your wand is 2.0, then you cast twice before you swing.

 - Take advantage of dragon buffs. They will increase your weaving damage by an insane amount, especially at lower levels.

[Edit]

 - You may also incorporate instant cast spells without disrupting DPS, but only after a melee attack (I recommend either using Renew, Inner Fire, or SWP where appropriate). Once your instant spell is cast you can immediately attack with the wand.

## Post 79639 by Chyk — 2023-12-02T13:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79639#p79639 | page 1 | era: pre-1.18.1 -->

Have anyone tried melee weawing in raids?
In theory it's a good DPS boost but in practice I'm not so sure

## Post 79666 by Zvyrhol (Grandmaster of Forum PvP) — 2023-12-02T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79666#p79666 | page 1 | era: pre-1.18.1 -->

> **Chyk wrote: Sat Dec 02, 2023 1:43 pm**
> Have anyone tried melee weawing in raids?
>  In theory it's a good DPS boost but in practice I'm not so sure

I haven't tried - but I know top shadow priests use this technique. DPS boost is one thing, another is proccing Seal of Wisdom for extra mana. Mind Flay lasts 3 seconds and after it stops casting, you are able to automatically deal melee dmg (supposing you are in melee range) and you can start casting Mind Flay again after you see melee damage numbers on the screen. So yeah, this technique is generally superior but has one disadvantage - you must be in melee range of your enemy. This is not always optimal because moving to melee range forces you to not cast spells and some bosses have also melee mechanics that can kill you. You should experiment with this yourself!

## Post 79668 by Chyk — 2023-12-02T18:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79668#p79668 | page 1 | era: pre-1.18.1 -->

> **Zvyrhol wrote: Sat Dec 02, 2023 4:54 pm**
> I haven't tried - but I know top shadow priests use this technique. DPS boost is one thing, another is proccing Seal of Wisdom for extra mana. Mind Flay lasts 3 seconds and after it stops casting, you are able to automatically deal melee dmg (supposing you are in melee range) and you can start casting Mind Flay again after you see melee damage numbers on the screen. So yeah, this technique is generally superior but has one disadvantage - you must be in melee range of your enemy. This is not always optimal because moving to melee range forces you to not cast spells and some bosses have also melee mechanics that can kill you. You should experiment with this yourself!

That's pure theory :)

I've tried weaving with a macro with Anathema vs raider training dummy and damage was god damn awful, I think some melees were skipped because of MF>MF spam.
Not sure about bosses, but at dummy it was maybe 3% of DPS, doesnt seem to be worth it.

Seal is procced by spells too and in AQ40 I havent got any problems with mana as SP.

Maybe, just maybe, it's worth with using some special gear, like putting Shadow Oil on a fast weapon, since I've heard it scales like 60% of SP and has internal CD of 10sec, with full consumables I've got maybe 900SP so it's about 600damage per 10sec at max.

Looking for practical answers from raiders but thanks!

