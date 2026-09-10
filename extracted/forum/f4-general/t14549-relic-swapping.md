---
title: "Relic swapping"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14549"
topic_id: 14549
forum_id: 4
forum: "General"
author: "Akos1896"
author_authority: "player"
posted: "2024-07-12T09:54:00Z"
last_post: "2024-07-12T11:41:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:52:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Relic swapping

## Post 99252 by Akos1896 (Grandmaster of Forum PvP) — 2024-07-12T09:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99252#p99252 | page 1 | era: pre-1.18.1 -->

Hey!

I wanna mention relic swapping real quick here.
Most of you are probably aware of how it works but there are people who play a relic-using class and are not.
My goal is to let these people know about this.
Relic swapping is a bit min-maxie but can make your character stronger if you decide to do it.

What it means: Relics can be swapped in combat and a lot of them gives specific boni for specific abilities. If you macro these abilities in a way that the specific relic gets equipped before using the ability, you can make your character stronger since it will receive buffs which otherwise wouldn't happen.

Example:
Let's say that you play an enh shaman and you use totem of crackling thunder which has a chance to give haste after lightning bolts and stormstrikes. Let's say that you also have totem of the stonebreaker from ES in your bag. If you don't relic swap you get the haste procs from crackling thunder but won't get the attack power procs from shocks. Since these two relic proc from different abilities, via relic swapping you can make sure that you both get the haste from crackling thunder and the attack power of stonebreaker, leading to more overall DPS.

What about GCD?
There are some concerns regarding this:
[https://www.reddit.com/r/classicwow/com ... wap_macro/](https://www.reddit.com/r/classicwow/comments/10s61u0/relic_swap_macro/)
However: when I was testing it in TWOW it worked fine. Relic swap + spellcast macro was executed with one button press, without delay.

An example of how it works:

Shocks:
/equip Totem of the Stonebreaker
/cast (whatever shock)

This switches to stonebreaker every time you shock for the AP proc.

Lightning Bolt and Stormstrike:
/equip Totem of Crackling Thunder
/cast Stormstrike

This switches it back whenever you need the relic benefit for these spells.

Since chain lightning doesn't get buffed by these, I suggest a chain lightning macro with totem of the storm.
Same for lesser healing wave and totem of life or the Scholo relic.
Same if you get the world boss relic and summon a strength or agi totem.
Same if you are a troll and you get the hex relic.

This intends to be a generic tip for classes who use relics. Used shamans in the example because I made the test with my shaman.

Caution:
In my tests I did not encounter GCD issues but I might have overlooked something. If you wanna use it to make your toon stronger, please test this and make sure that there are no side effects.

## Post 99257 by Geojak (Grandmaster of Forum PvP) — 2024-07-12T11:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99257#p99257 | page 1 | era: pre-1.18.1 -->

This is common knowledge for paladins. If you want to avoid the gcd issue which occurs if you switch relic during gcd (resets the duration) then only switch when of gcd (can be checked in code)

Example with roid macros
/equip [nocooldown:Flash_of_Light] libram of light
/cast Flash of light

Librams are extremly powerful with these macros as you can gain extra bonus power to your character just by having all of these in your bag and macroed.

