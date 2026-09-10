---
title: "Modifier macros for downranking with mouseover"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11409"
topic_id: 11409
forum_id: 44
forum: "Priest"
author: "Abovex"
author_authority: "player"
posted: "2023-11-02T12:01:00Z"
last_post: "2023-11-10T02:40:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:08:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Modifier macros for downranking with mouseover

## Post 75433 by Abovex — 2023-11-02T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75433#p75433 | page 1 | era: pre-1.18.1 -->

I'm looking for a macro template that will let me use several ranks of a spell binded on one button using modifiers in the macro and heal on mouseover or heal myself automatically with said ranks if i'm not mousing over a raid frame or someones character.
The tbc onward version of said template would be:
#showtooltip
/cast [nomod,@mouseover,help,nodead][nomod,@player] Spell
/cast [mod:shift,@mouseover,help,nodead][mod:shift,@player] Spell(Rank 1)
/cast [mod:ctrl,@mouseover,help,nodead][mod:ctrl,@player] Spell(Rank 2)
/cast [mod:alt,@mouseover,help,nodead][mod:alt,@player] Spell(Rank 3)

I have no idea how to write such a macro for the 1.12 client.

## Post 75632 by Ortogs — 2023-11-03T06:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75632#p75632 | page 1 | era: pre-1.18.1 -->

Install Roid macros

Check out this website for how you can do this here: <https://denniswg.github.io/Roid-Macros/conditions/mod/>

## Post 76740 by Forthehorde — 2023-11-10T02:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76740#p76740 | page 1 | era: pre-1.18.1 -->

Addon "Quick Heal" is a one-button heal that auto-downranks your heals, as well as auto-selecting your targets based on need and user-set priority.  You can find it here: <https://github.com/Zebouski/QuickHeal>

