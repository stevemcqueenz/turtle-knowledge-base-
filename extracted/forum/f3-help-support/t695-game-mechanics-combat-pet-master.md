---
title: "[Game Mechanics][Combat] Pet->Master"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=695"
topic_id: 695
forum_id: 3
forum: "Help & Support"
author: "Meanwalk"
author_authority: "player"
posted: "2019-07-25T10:34:00Z"
last_post: "2019-09-30T09:54:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:30:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Game Mechanics][Combat] Pet->Master

## Post 3555 by Meanwalk — 2019-07-25T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3555#p3555 | page 1 | era: pre-1.18.1 -->

-Open world:

Character is getting in combat on any hostile action taken against his\her pet(successful hit, or even npc spellcast start)

 -Instances:

Owner stay in combat as long as pet is up and in it.

As for hunters, Feign Death clear combat for a second at best, with lucky timing, or does not help at all.

*Last edited by Meanwalk on Fri Oct 11, 2019 11:19 pm, edited 1 time in total.*

## Post 3561 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-25T13:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3561#p3561 | page 1 | era: pre-1.18.1 -->

Hello, I have been testing your reports:

> Character is getting in combat on any hostile action taken against his\her pet(successful hit, or even npc spellcast start)

I can't reproduce what you report. You won't enter combat at spell cast start. Also, you won't even enter combat if someone is hitting your pet unless the pert starts attacking back.

> Owner now stay in combat as long as pet is up and in it - so, for example, eating\drinking between waves on Solakar Flamewreath\Rend Blackhand encounters is not possbile.

I can't reproduce this either, I have tried it in some instances and during the Rend Blackhand encounter and everything worked fine:

![Image](https://i.imgur.com/WOEgHqd.png)

> As for hunters, Feign Death clear combat for a second at best, with lucky timing, or does not help at all.

Unfortunately I can't replicate this either. Feign Death is working perfectly fine, it will get you out of combat completely, even if any mob is still attacking the pet. You won only enter combat again if you are hit with an AoE spell or your pet starts / keeps attacking a mob.

So, please, make sure to delete your WDB folder. Everything you reported is working perfectly fine.

## Post 4116 by Meanwalk — 2019-09-30T09:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4116#p4116 | page 1 | era: pre-1.18.1 -->

Just found out whats behind this issue.
Having any Beastmaster <https://classic.wowhead.com/item=22013/beastmasters-cap> set item, that affect pet stats,  equipped, ie when pet is under atleast one of following effects:
[https://classic.wowhead.com/spell=27038 ... t-health-3](https://classic.wowhead.com/spell=27038/increased-pet-health-3)
[https://classic.wowhead.com/spell=27206 ... t-damage-3](https://classic.wowhead.com/spell=27206/increased-pet-damage-3)
[https://classic.wowhead.com/spell=27043 ... pet-crit-2](https://classic.wowhead.com/spell=27043/increased-pet-crit-2)
[https://classic.wowhead.com/spell=27225 ... t-armor-10](https://classic.wowhead.com/spell=27225/increased-pet-armor-10)
will cause things mentioned on my first post.

Would be great if you check hunter\warlock T1\2 five piece bonuses also:
 -hunter's
<https://classic.wowhead.com/spell=21926/natures-ally>
<https://classic.wowhead.com/spell=21928/natures-ally>
 -warlock's
<https://classic.wowhead.com/spell=21741/demonic-ally>
<https://classic.wowhead.com/spell=21922/demonic-ally>

