---
title: "Questions about Concussion Blow and damage formula"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16852"
topic_id: 16852
forum_id: 40
forum: "Warrior"
author: "rubixluffy"
author_authority: "player"
posted: "2025-01-02T05:26:00Z"
last_post: "2025-01-09T11:36:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T07:53:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Questions about Concussion Blow and damage formula

## Post 115195 by rubixluffy — 2025-01-02T05:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115195#p115195 | page 1 | era: pre-1.18.1 -->

Damage of "Concussion Blow" is confusing.
Based on 5 points of talents "One-handed Weapon Specialization", we deal 110% damage in Battle Stance and 99% damage in Protection Stance.
Consussion Blow's base damage is 235.

Tests in Battle Stance:
AP | Damage | Extra AP Damage upon 100%Base | Extra AP Damage upon 110%Base
 410 | 296 | (296 - 235)/110% = 55 | 296/110% - 235 = 34
 648 | 332 | (332 - 235)/110% = 88 | 332/110% - 235 = 67
 802 | 355 | (355 - 235)/110% = 109 | 355/110% - 235 = 88
 1094 | 399 | (399 - 235)/110% = 149 | 399/110% - 235 = 128
Data of the 4th column(Extra AP Damage upon 110%Base) does not make sense.
So, based on the tested data, the 3rd column(Extra AP Damage upon 100%base) make sense.
That means "One-handed Weapon Specialization" does not affect Concussion Blow's base 235 damage.
In Battle Stance, damage of Concussion Blow = 235 + (AP/14 * 1.9).

Tests in Protection Stance:
AP | Damage | Extra AP Damage upon 100%Base | Extra AP Damage upon 99%Base
 410 | 266 | (266 - 235)/99% = 31 | 266/99% - 235 = 34
 648 | 298 | (298 - 235)/99% = 63 | 298/99% - 235 = 66
 802 | 319 | (319 - 235)/99% = 85 | 319/99% - 235 = 87
 1094 | 359 | (359 - 235)/99% = 125 | 359/99% - 235 = 128
Data of the 3rd column does not make sense. The 4th column's data are closed to Battle Stance's 4th column.
So, "One-handed Weapon Specialization" does affect Concussion Blow's base 235 damage.
But, how does AP affect damage? 410AP increase 34 damage, but 238AP(from 410 to 648) increase 32(from 34 to 66) damage.

And, is there any place to find formulas of damage, threat, and more?

## Post 115986 by Ivgas — 2025-01-09T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115986#p115986 | page 1 | era: pre-1.18.1 -->

My warrior is now level 53, and for a while since the update I've seen 0.15 AP scaling on the spell in battle and berserker stances (100 AP adds 15 damage)

