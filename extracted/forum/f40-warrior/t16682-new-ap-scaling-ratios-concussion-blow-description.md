---
title: "New AP scaling ratios? Concussion Blow description?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16682"
topic_id: 16682
forum_id: 40
forum: "Warrior"
author: "Ivgas"
author_authority: "player"
posted: "2024-12-23T12:10:00Z"
last_post: "2025-01-08T19:27:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T07:53:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# New AP scaling ratios? Concussion Blow description?

## Post 114000 by Ivgas — 2024-12-23T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114000#p114000 | page 1 | era: pre-1.18.1 -->

Hi!

Recently Rend and Shield Slam have received an Attack Power scaling coefficient. Unfortunately I failed to find the info what the ratios for AP are for those abilities. Can anybody provide that info?

Also, the reworked Concussion Blow states that it penetrates 100% of the enemy armor. Is that penetration applied only for the blow's damage, or for the whole stun duration?

Thank you in advance. Wishing everyone best holidays.

## Post 115236 by rubixluffy — 2025-01-02T14:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115236#p115236 | page 1 | era: pre-1.18.1 -->

Have the same question. Tests are confusing.

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

## Post 115927 by Ivgas — 2025-01-08T19:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115927#p115927 | page 1 | era: pre-1.18.1 -->

I did some testing and here's what I came up with:

Concussion Blow seems to have **0.15 AP** scaling in battle and berserker (100 AP adds 15 damage). The damage always bypasses all enemy armor.
Rend is the same (**0.15 AP**)
Shield Slam seems to be harder to track (damage is varied) but it is about **0.25 to 0.3 AP**.

