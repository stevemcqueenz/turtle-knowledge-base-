---
title: "I want to develop a web database for Turtle WoW"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24409"
topic_id: 24409
forum_id: 4
forum: "General"
author: "Pucelle"
author_authority: "player"
posted: "2026-03-22T07:27:00Z"
last_post: "2026-04-27T00:50:00Z"
post_count: 16
pages: 1
fetched: "2026-09-10T09:34:56Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I want to develop a web database for Turtle WoW

## Post 171732 by Pucelle — 2026-03-22T07:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171732#p171732 | page 1 | era: post-1.18.1 -->

Found turtle database closed these days.

I had developed a web tool called Azeroth Journal (<https://wow.playjournals.com/classic/>) few years ago, and I'm considering make a turtle wow version.

I'd love to hear your thoughts and ideas!

## Post 171734 by Reploidrocsa (Bug Report Enthusiast) — 2026-03-22T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171734#p171734 | page 1 | era: post-1.18.1 -->

Current database is closed for a few days because of new patch. It's always like that. Is because of that, that game keeps this aura of mystery for long periods of time. I don't want to lose that, so no, i don't want another turtle web database. If they close it for a few weeks i rely on addons or ask on discord, which promotes information sharing and socializing

## Post 171738 by Atreidon (Grandmaster of Forum PvP) — 2026-03-22T08:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171738#p171738 | page 1 | era: post-1.18.1 -->

If they could just not add the new stuff to the database, instead of killing the entire database on a new patch that would be great, loosing access to the DB for days/weeks on end is frustrating for anyone interacting with parts of the game that aren't new content.

I would welcome a DB that stays open during these days, even if its "outdated"

## Post 171748 by Pucelle — 2026-03-22T10:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171748#p171748 | page 1 | era: post-1.18.1 -->

Thanks for your replies, I have another question: I don't know anyelse where can find all turtle wow data, except the `database.turtlewow.gg`. And it would be not legal to crawl the whole site.

## Post 171800 by Xudo (Grandmaster of Forum PvP) — 2026-03-22T16:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171800#p171800 | page 1 | era: post-1.18.1 -->

Even if legal questions don't stop you, cloudflare will do. You will be able to download like 100 pages and then you'll need to enter captcha.

Game client has all info about item descriptions.
You need some kind of add-on to crawl over all items and store it in convenient way to extract it further.
Game client also has literally all info about spells. You need tool to extract and convert .dbc files to sql scripts. I believe tool like this already exists.

Iirc, wowhead was started as community project. Every volunteer player install addon to gather item data. Then they upload gathered data to some website.
Not really reliable way to do stuff as long as people can just edit data before sending. But it worked.

## Post 171806 by Zvyrhol (Grandmaster of Forum PvP) — 2026-03-22T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171806#p171806 | page 1 | era: post-1.18.1 -->

Make comments possible. This is the only feature current turtle database lacks.

## Post 171810 by Crake (Patch Note Conspiracy Theorist) — 2026-03-22T17:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171810#p171810 | page 1 | era: post-1.18.1 -->

> **Xudo wrote: Sun Mar 22, 2026 4:30 pm**
> Game client has all info about item descriptions.
>  You need some kind of add-on to crawl over all items and store it in convenient way to extract it further.

I don’t believe this is correct.

Part of the reason why you’re so often suggested to delete your WDB folder so often is because this is where the client stores a cache of item data from the server. The client itself doesnt actually have the item data, but rather it queries the server for the data then caches it locally for when you next need that info.

So what you would need to do is make an addon that sequentially queries item IDs to cache all the current items, then export that data somehow.

Ive been considering doing it myself for a sort of sixty upgrades style gear planner, but im not certain of the rules around querying the server, and I assume there would be some rate limits in place. Mostly, i just dont want to get banned for overloading the server.

## Post 171840 by Fizzler (Patch Note Conspiracy Theorist) — 2026-03-22T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171840#p171840 | page 1 | era: post-1.18.1 -->

I think it’s fine to have a backup database made by a third party. It is just simply having data saved before hand, not really malicious

## Post 171847 by Pucelle — 2026-03-22T23:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171847#p171847 | page 1 | era: post-1.18.1 -->

> **Xudo wrote: Sun Mar 22, 2026 4:30 pm**
> Even if legal questions don't stop you, cloudflare will do. You will be able to download like 100 pages and then you'll need to enter captcha.
>
>  Game client has all info about item descriptions.
>  You need some kind of add-on to crawl over all items and store it in convenient way to extract it further.
>  Game client also has literally all info about spells. You need tool to extract and convert .dbc files to sql scripts. I believe tool like this already exists.
>
>  Iirc, wowhead was started as community project. Every volunteer player install addon to gather item data. Then they upload gathered data to some website.
>  Not really reliable way to do stuff as long as people can just edit data before sending. But it worked.

Thanks for your reply, I have all the client tools to extrack like dbcs and models, but I really have no experience in making a plugin to query for item datas.

I guess if I can use old classic data, and only crawl turtle wow newly added, and handle cloudflare validation manually each time.

## Post 171848 by Pucelle — 2026-03-22T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171848#p171848 | page 1 | era: post-1.18.1 -->

> **Crake wrote: Sun Mar 22, 2026 5:32 pm**
> > **Xudo wrote: Sun Mar 22, 2026 4:30 pm**
> > Game client has all info about item descriptions.
> >  You need some kind of add-on to crawl over all items and store it in convenient way to extract it further.
>
>   I don’t believe this is correct.
>
>  Part of the reason why you’re so often suggested to delete your WDB folder so often is because this is where the client stores a cache of item data from the server. The client itself doesnt actually have the item data, but rather it queries the server for the data then caches it locally for when you next need that info.
>
>  So what you would need to do is make an addon that sequentially queries item IDs to cache all the current items, then export that data somehow.
>
>  Ive been considering doing it myself for a sort of sixty upgrades style gear planner, but im not certain of the rules around querying the server, and I assume there would be some rate limits in place. Mostly, i just dont want to get banned for overloading the server.

Yes, game data like items store in wdb files, and it may change often, so the best way should be query online database.
And the drop rates never be found elsewhere except online database.

## Post 171849 by Pucelle — 2026-03-22T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171849#p171849 | page 1 | era: post-1.18.1 -->

Currently prepared:
 1. Original classic data from client and open source projects.
 2. Turtle wow client contained dbcs and models, maps, etc.

Currently missing:
 1. Turtle wow item/npc/quests... data, don't know if tutle wow has change existing classic data.
 2. Drop rates

Otherwise:
The tool should focus on exploring, not on best gears or builds.

## Post 171878 by Xudo (Grandmaster of Forum PvP) — 2026-03-23T07:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171878#p171878 | page 1 | era: post-1.18.1 -->

> **Pucelle wrote: Sun Mar 22, 2026 11:42 pm**
> 1. Turtle wow item/npc/quests... data, don't know if tutle wow has change existing classic data.

Turtle wow changed a lot of original item data, especially raid rewards and crafted items.

About server limits to query item data.
You can see that restriction in Atlas Loot. If your local data don't have info about item, then you need to manually right click on item. Then client queries server for that item and after some time, tooltip will work for you.
I mean, client might force you to manually query data and the only automation you can do is to present those items in convenient way to right-click them.

Compared to querying AH prices, I don't think this process will produce heavy load on server.

## Post 171882 by Pucelle — 2026-03-23T08:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171882#p171882 | page 1 | era: post-1.18.1 -->

> **Xudo wrote: Mon Mar 23, 2026 7:56 am**
> > **Pucelle wrote: Sun Mar 22, 2026 11:42 pm**
> > 1. Turtle wow item/npc/quests... data, don't know if tutle wow has change existing classic data.
>
>   Turtle wow changed a lot of original item data, especially raid rewards and crafted items.
>
>  About server limits to query item data.
>  You can see that restriction in Atlas Loot. If your local data don't have info about item, then you need to manually right click on item. Then client queries server for that item and after some time, tooltip will work for you.
>  I mean, client might force you to manually query data and the only automation you can do is to present those items in convenient way to right-click them.
>
>  Compared to querying AH prices, I don't think this process will produce heavy load on server.

Thanks for your reply

## Post 175997 by Zeran (Patch Note Conspiracy Theorist) — 2026-04-20T13:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175997#p175997 | page 1 | era: post-1.18.1 -->

> **Pucelle wrote: Mon Mar 23, 2026 8:37 am**
> > **Xudo wrote: Mon Mar 23, 2026 7:56 am**
> > > **Pucelle wrote: Sun Mar 22, 2026 11:42 pm**
> > > 1. Turtle wow item/npc/quests... data, don't know if tutle wow has change existing classic data.
> >
> >   Turtle wow changed a lot of original item data, especially raid rewards and crafted items.
> >
> >  About server limits to query item data.
> >  You can see that restriction in Atlas Loot. If your local data don't have info about item, then you need to manually right click on item. Then client queries server for that item and after some time, tooltip will work for you.
> >  I mean, client might force you to manually query data and the only automation you can do is to present those items in convenient way to right-click them.
> >
> >  Compared to querying AH prices, I don't think this process will produce heavy load on server.
>
>   Thanks for your reply

So, with the server and the associated DB going down next month, any such preservation of info is now 100x more useful/important, if you are still considering it.

## Post 176256 by Pucelle — 2026-04-25T13:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176256#p176256 | page 1 | era: post-1.18.1 -->

> **Zeran wrote: Mon Apr 20, 2026 1:05 pm**
> > **Pucelle wrote: Mon Mar 23, 2026 8:37 am**
> > > **Xudo wrote: Mon Mar 23, 2026 7:56 am**
> > > Turtle wow changed a lot of original item data, especially raid rewards and crafted items.
> > >
> > >  About server limits to query item data.
> > >  You can see that restriction in Atlas Loot. If your local data don't have info about item, then you need to manually right click on item. Then client queries server for that item and after some time, tooltip will work for you.
> > >  I mean, client might force you to manually query data and the only automation you can do is to present those items in convenient way to right-click them.
> > >
> > >  Compared to querying AH prices, I don't think this process will produce heavy load on server.
> >
> >   Thanks for your reply
>
>   So, with the server and the associated DB going down next month, any such preservation of info is now 100x more useful/important, if you are still considering it.

Sorry, I have trouble in crawling turtle wow database, so this should can't done unless I can get turtle wow data.

## Post 176275 by Sleeplust (Patch Note Conspiracy Theorist) — 2026-04-27T00:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176275#p176275 | page 1 | era: post-1.18.1 -->

> **Pucelle wrote: Sat Apr 25, 2026 1:52 pm**
> Sorry, I have trouble in crawling turtle wow database, so this should can't done unless I can get turtle wow data.

So, the difficulty lies in the lack of source code or something? Another thing to consider if someone's still thinking about improving or creating a WoW database, as I know many such databases give limited information or nothing on quests like how the recipe of of Onyxia cloak is obtained. Some similar profession-related quests' descriptions are also problematic, giving no information like at what skill level of the profession the quest is available. Their categories are not appropriately tagged, so they are pretty "hidden" in the database. For example, I only have an incomplete list of quests displayed when I click the "quests of leatherworking".

