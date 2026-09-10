---
title: "Warrior Macros Help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3906"
topic_id: 3906
forum_id: 40
forum: "Warrior"
author: "Eck"
author_authority: "player"
posted: "2022-08-26T15:01:00Z"
last_post: "2022-08-26T18:45:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T07:54:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Warrior Macros Help

## Post 23546 by Eck — 2022-08-26T15:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23546#p23546 | page 1 | era: pre-1.18.1 -->

I'm looking for a macro that will equip a shield and 1h when I switch to defensive stance and equip a 2h or 2x 1h when I switch to battle stance and or berserker stance.

I've been browsing the forums and I've been unable to find it. I can find plenty of macros for Classic WoW but those do not work on here. Any additional macros that anyone thinks would be useful I would appreciate those as well.

Thanks

Eck

## Post 23574 by Eck — 2022-08-26T18:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23574#p23574 | page 1 | era: pre-1.18.1 -->

Ok there is a real simple solution to this...

AddOn Called ItemRack
<https://github.com/Linae-Kronos/ItemRack>

For example

/script EquipSet("DW")
/cast Battle Stance

/script EquipSet("Sword and Board")
/cast Defensive Stance

/script EquipSet("DW")
/cast Berserker Stance

Posting this for anyone else that may run into this problem.

