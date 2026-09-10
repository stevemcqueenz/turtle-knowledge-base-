---
title: "Talent \"Enrage\" bug ?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6082"
topic_id: 6082
forum_id: 40
forum: "Warrior"
author: "Iambuck"
author_authority: "player"
posted: "2023-03-19T10:44:00Z"
last_post: "2023-03-19T15:54:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T07:54:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Talent "Enrage" bug ?

## Post 38214 by Iambuck — 2023-03-19T10:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38214#p38214 | page 1 | era: pre-1.18.1 -->

Hello guys,

I am playing fury war on TWoW and I picked the "Enrage" talent. I am amready aware the "sit-macro" does not work on this server. And nothing wrong with the talent when I am leveling in Open world.

However when I tank dungeons I noticed that I do take a lot of hits and therefore a high dose of CS, but Enrage NEVER triggers in dungeons.

Is it a wanted mechanic ?

## Post 38222 by Jammyxx (Patch Note Conspiracy Theorist) — 2023-03-19T12:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38222#p38222 | page 1 | era: pre-1.18.1 -->

If youre overleveled and got high defense you wont be getting crit.

## Post 38228 by Xudo (Grandmaster of Forum PvP) — 2023-03-19T15:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38228#p38228 | page 1 | era: pre-1.18.1 -->

Engrage procs only from getting critical hit. Crushing blows are not crits, but they look very similar.
As a warrior tank, you are very unlikely get critical hit because you have a lot of different avoidance mechanics: miss of a mob, dodge, parry, block.

Logic of rolling crit/hit etc [https://github.com/vmangos/core/blob/de ... .cpp#L2105](https://github.com/vmangos/core/blob/development/src/game/Objects/Unit.cpp#L2105)
In short.
Chance of mob to miss depends on your defense and is like 5%.
Chance to block, parry and dodge you can see in spellbook. For example lets take that you have 5.16% chance to block, 5.95% chance to dodge, 10.16% chance to dodge. Assume that hit is in front and you are not sitting, attacker is of 20 lvl, you are of 17 lvl. Crushing blows are possible and lets assume it is 15%. Assume that attacker has 7% chance to crit.
Server rolls some number. For example this number is 71.3
Then server checks, whether this number is less than miss chance?
 71.3 > 5, then it is not miss
Then server checks whether rolled number is less than miss+dodge chance.
 71.3 > (5+5.95=10.95), then it is not dodge either
Then server checks whether rolled number is less than miss+dodge+parry chance.
 71.3 > (5+5.95+10.16=21.11), then it is not parry
Then there is chance of glancing blow, I skip it. It should not happen if both targets are of same level.
Then server checks whether rolled number is less than chance to block.
 71.3 > (5+5.95+10.16+5.16=26.27), then it is not block
Then server checks whether rolled number is less than chance to crit.
 71.3 > (5+5.95+10.16+5.16+7=33.27), then it is not crit
Then server checks whether rolled number is crushing blow.
 71.3 > (5+5.95+10.16+5.16+7+15=48.27), then it is not crushing blow

If you use Shield block, then your block chance increases for 75% then calculation after parry looks like
 71.3 > (5+5.95+10.16+80.16=101.27), hit is considered blocked
You are literally critimmune if you are under effect of Shield Block and have usual warrior avoidance stats.

