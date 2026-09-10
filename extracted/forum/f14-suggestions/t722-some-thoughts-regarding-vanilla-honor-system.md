---
title: "Some thoughts regarding Vanilla Honor System"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=722"
topic_id: 722
forum_id: 14
forum: "Suggestions"
author: "Xerron"
author_authority: "player"
posted: "2019-08-14T10:31:00Z"
last_post: "2020-05-06T12:01:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T12:43:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Some thoughts regarding Vanilla Honor System

## Post 3715 by Xerron (Barrens Chat Casualty) — 2019-08-14T10:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3715#p3715 | page 1 | era: pre-1.18.1 -->

Hello,

From my understanding, and correct me if I'm wrong, the honor and ranking system goes like this:

 - you pvp for honor
 - honor gives you a standing on your faction
 - each standing gives an amount of RP (RP = RANK POINTS)
 - this RP helps you rank up

ranking table looks like this  :

Rank 14 60 000 RP.
Rank 13 55 000 RP.
Rank 12 50 000 RP.
Rank 11 45 000 RP.
Rank 10 40 000 RP.
Rank 9 35 000 RP.
Rank 8 30 000 RP.
Rank 7 25 000 RP.
Rank 6 20 000 RP.
Rank 5 15 000 RP.
Rank 4 10 000 RP.
Rank 3 5 000 RP.
Rank 2 2 000 RP.
Rank 1 0 / 15 HKs. *different here on turtle

You start at 0 RP and make your way up the ladder and depending on your standing you get :

 12 000 RP: Top 0.03 % of CP earners.
 11 000 RP: Top 0.08 % of CP earners.
 10 000 RP: Top 2 % of CP earners.
 9 000 RP: Top 3.5 % of CP earners.
 8 000 RP: Top 6 % of CP earners.
 7 000 RP: Top 10 % of CP earners.
 6 000 RP: Top 15.9 % of CP earners.
 5 000 RP: Top 28.8 % of CP earners.
 4 000 RP: Top 32.7 % of CP earners.
 3 000 RP: Top 43.6 % of CP earners.
 2 000 RP: Top 56.6 % of CP earners.
 1 000 RP: Top 69.7 % of CP earners.
 400 RP: Top 84.5 % of CP earners.

 *CP earners = Contribution Points earners, total number of people who pvpd last week.

Here's the catch! Each week you lose 20% if your total RP, called RP Decay

Example :

Say you're rank5 and you have 15000 RP. In order to advance to rank6 you will need to get 5000 RP + decay:
 - decay from 15000 RP = 3000 RP
So you need a total of 8000 RP
 8 000 RP: Top 6 % of CP earners.
So if your server has 1000 people on your faction that got honor this week, your standing needs to be <= 60

All good and simple so far.

Now the problem on Turtle wow. From my investigation we got like 30 people ( or around this value each week, maybe more, probably growing) on ally side who were CP earners. This means standing 1 only got in top 3.2% and got 9 000 RP (Top 3.5 % of CP earners).

With this low number of CP earners, it's impossible to rank up more than R12 because:
at rank 12 you have : 50000 RP
max gain per week : 9000 RP
decay for rank12 : 10000
 ----------------------------------------
weekly gain :  9000 - 10000 = -1000
so you're de-ranking instead

What I suggest is changing the ranking points gain table a bit depending on the total number of people who gain honor:

![Image](https://i.ibb.co/Tt7DWnC/table.png)

OR... a totally new system, or maybe like post 2.0

Anyways, let's discuss possible solutions.

Cheers!

Edit: updated image link, tinypic is shutting down.

*Last edited by Xerron on Wed Sep 18, 2019 8:43 pm, edited 1 time in total.*

## Post 3717 by Sinrek (Grandmaster of Forum PvP) — 2019-08-14T10:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3717#p3717 | page 1 | era: pre-1.18.1 -->

I feel like a schoolboy on such a greatly explained system and a possible solution. Feels like I gotta study the issue even more precisely than ever.

## Post 3719 by Chlothar (Barrens Chat Casualty) — 2019-08-14T21:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3719#p3719 | page 1 | era: pre-1.18.1 -->

Thx for the post and the work behind it. I agree with you that changing the numbers would possibly be the easiest and best solution for making max pvp ranks accessable. It will still need some work and time to get above rank 10.

It`s a different question if people should have marshal/warlord gear at this state of the game.

## Post 3721 by Xerron (Barrens Chat Casualty) — 2019-08-15T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3721#p3721 | page 1 | era: pre-1.18.1 -->

I did some more thinking !

While the first suggestion is more complicated, i think increasing RP might help too. Code: Select all

```
Original Gain / Suggested gain
12000 / 14438
11000 / 13438
10000 / 12438
9000 / 11438
8000 / 10438
7000 / 9438
6000 / 8438
5000 / 7438
4000 / 6438
3000 / 5438
2000 / 4438
1000 / 3438
400 / 2838
```

The formula behind is is :
if [total number of people who got honor] <= 1250 then
new RP gain = Original Gain + ( 1250 - [total number of people who got honor]) * 2
Where 2 can be 2 or 1.5 or a different ratio

Just an early morning thought!

turtle_tongue

## Post 3724 by Chlothar (Barrens Chat Casualty) — 2019-08-15T08:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3724#p3724 | page 1 | era: pre-1.18.1 -->

Alsoa  good guess, but with let`s say 30 active PvPers you would still not be able to reach rank 14.

If only 3.5% of top CP earners can get 9000 RP. With 30 active CP gainers that will be 1 of them being able to get 9000RP with standing 1. That put in your Formula the new RP gain for this one person will be 9000+2440 = 11440 RP which is still too little RP in total to get max rank. Or am i wrong with that?

## Post 3747 by Torta (Turtle WoW Team) [STAFF] — 2019-08-18T21:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3747#p3747 | page 1 | era: pre-1.18.1 -->

Up. Don't want this thread to get lost.

## Post 5833 by Reito — 2020-05-06T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=5833#p5833 | page 1 | era: pre-1.18.1 -->

Hi there, is there some followup on this thread? Ingame people mentioned there were some changes in the decay speed, but I cant find it anywhere in the annoucements. Thanks!

