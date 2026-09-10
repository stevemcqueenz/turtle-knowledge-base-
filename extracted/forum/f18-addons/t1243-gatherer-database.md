---
title: "Gatherer Database"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1243"
topic_id: 1243
forum_id: 18
forum: "AddOns"
author: "Yobrabro"
author_authority: "player"
posted: "2020-08-21T05:07:00Z"
last_post: "2023-01-20T15:04:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T10:33:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Gatherer Database

## Post 7319 by Yobrabro — 2020-08-21T05:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7319#p7319 | page 1 | era: pre-1.18.1 -->

Hello!

I'm having trouble with the built-in database for the version of Gatherer that I have. Most/many of the nodes it has in the database are wrong. Does anybody know of a usuable database for Turtle wow? Or maybe just a way to clear the database so I can start building my own?

## Post 8367 by Pofjewownewb — 2020-11-04T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8367#p8367 | page 1 | era: pre-1.18.1 -->

Oh
I could use something like this.

Anyone has an idea?

## Post 8381 by Gheor (Turtle WoW Team) [STAFF] — 2020-11-05T20:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8381#p8381 | page 1 | era: pre-1.18.1 -->

I have Gatherer, there is no data as far as I know, I only have what I find around the world.

## Post 8387 by Tortuga (Barrens Chat Casualty) — 2020-11-07T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8387#p8387 | page 1 | era: pre-1.18.1 -->

Well, there is one in wow_folder\WTF\Account\ACCNAME\SavedVariables\Gatherer.lua
This file contains a shitload of fake nodes in Code: Select all

```
GatherItems = {
... over 86000 lines of info
}
```

full of nodes that don't exist, mostly having non-English names.
So probably cleaning those lines, leaving just Code: Select all

```
GatherItems = {}
```

would help, but this way you lose all data of already recorded "good" nodes too.

The big question is, how this file gets populated first time. I always play on English client, so those Chinese, Russian, French-named nodes could not get there normally; yet they are there even on a fresh account. That addon is a nightmare code-wise, so I prefer to live with those fake nodes than try to fix it.

## Post 8390 by Pofjewownewb — 2020-11-07T12:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8390#p8390 | page 1 | era: pre-1.18.1 -->

Well, I've found this in the turtle discord.
If you are using pfQuest - make a macro with:

/db clean
/db reset
/db taxi
/db chests
/db rares
/db object Mailbox
/db object Meeting Stone
/db herbs
/db mines

If you add a number 1-300 after herbs/mines it will show only that level.

This will clean your map, and show the flightpaths, chests, rares, mailboxes, meeting stones and herbs/nodes. But you'll have to click it everytime you login.

## Post 24438 by Gascoigne — 2022-09-05T20:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24438#p24438 | page 1 | era: pre-1.18.1 -->

Have you managed to fix the nodes? Now I'm working on a project where nodes weren't programmed correctly from the beginning. Consequently, many bugs appeared in the database, making the working process almost impossible to execute. The most essential is the [lead enrichment api](https://www.globaldatabase.com/data-enrichment) that can't be properly managed in the MySQL datastore. I can't even access the data in the workflows that were inserted a long time ago.
I hope you understand that the database is a complete mess of unorganized data.

## Post 28056 by Kohiras — 2022-10-27T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28056#p28056 | page 1 | era: pre-1.18.1 -->

I find the post from the **Fix** what it need to let it work

Gatherer AddOn Busted in Winterspring
[viewtopic.php?t=980](https://forum.turtlecraft.gg/viewtopic.php?t=980)

## Post 32812 by Kostet171 — 2023-01-20T15:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32812#p32812 | page 1 | era: pre-1.18.1 -->

Hello guys! who has a working finder installed, please give me via google drive or what kind of exchanger I, as a beginner, cannot download from github
Hi guys! who has a working finder installed, please give me through google drive or some exchanger, as a beginner I can’t download from github

