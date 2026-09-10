---
title: "Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=119"
topic_id: 119
forum_id: 18
forum: "AddOns"
author: "Ziin"
author_authority: "player"
posted: "2018-10-09T22:44:00Z"
last_post: "2022-08-30T20:00:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:33:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros

## Post 679 by Ziin — 2018-10-09T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=679#p679 | page 1 | era: pre-1.18.1 -->

Hi! i was looking for a functionally macros for my warrior to change
from two-handed weapon to a one-handed weapon with a shield, but
non o what i found actually works, could you pls help me?

i been trying theses:

/equip *weapon*

or

/equipslot17 *weapon*

or

/script WeaponSwap(“weapon”)

## Post 1543 by Sinrek (Grandmaster of Forum PvP) — 2018-12-12T00:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=1543#p1543 | page 1 | era: pre-1.18.1 -->

Why not use Outfitter addon for that?

Otherwise you'd need either supermacros addon or find a knowledgable folks with LUA experience.

## Post 1545 by Owondyah (Barrens Chat Casualty) — 2018-12-12T08:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=1545#p1545 | page 1 | era: pre-1.18.1 -->

There is a simple workaround for that.

As rogue, I do weapon switching a lot. I just put dagger on my, previously keybinded, action bar and when i'm in stealth and need dagger based opener I just press that key and dagger is in my main hand.

After I'm out of stealth I just press that other key which contains a sword I previously used and dagger is swapped with a sword.

No need for addons or macros. Just put weapons on your bar as regular skills/spells.

In your case you'd have to switch a 1h for 2h swords and then press a key to equip a sword.
When you switch back to 2h, you'll see your 1h and shield icons light up on action bars meaning they are unequipped and ready to use in your bag.

## Post 24011 by Luclar — 2022-08-30T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24011#p24011 | page 1 | era: pre-1.18.1 -->

I/m looking for help on how to eat using a knife; forum replies: I eat with a spoon and recommend it. Me googling for answers about knives; google result: how to use spoons. Thanks forum trolls. If you don't know anything about knives, spare us your sentiments.

Legend for dummies: knife=macro, spoon=nonemacro, chopstick=xboxcontroller.

P.S. I love chopsticks so I'll go comment about them in the chopstick tread.

Best I could find was:
/script UseContainerItem(0,2) (to swap main hand wpn)
/equip (shield name here)
were 0,2 in your bag can swap your main hand, and create a separate macro for a 2hander like
/equip 2handedhere
Putting all 3 lines in 1 macro also kind of works.

