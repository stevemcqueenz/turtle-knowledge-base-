---
title: "pfQuest tracker for Turtle database"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16074"
topic_id: 16074
forum_id: 4
forum: "General"
author: "Ccsica"
author_authority: "player"
posted: "2024-11-22T23:03:00Z"
last_post: "2025-06-04T13:24:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:44:21Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfQuest tracker for Turtle database

## Post 109461 by Ccsica — 2024-11-22T23:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109461#p109461 | page 1 | era: pre-1.18.1 -->

In my quest to get the Seeker of Knowledge title I've been having a hard time keeping track of my completed quests. Since I've been using pfQuest from day 1 which has all my completed quests tracked I knew there had to be a way.

Ended up making a Violentmonkey script that you can use to upload your pfQuest data and it will show which quests you have completed while browsing any of the sites below.

The script works for <https://database.turtlecraft.gg/>, <https://www.wowhead.com/classic/> and <https://classicdb.ch/>.

 **How to install:**
 1. Install [Violentmonkey](https://violentmonkey.github.io/) (or any of its equivalents like [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/)) for your browser of choice.
 2. After Violentmonkey is install, you can install the script by clicking this [link](https://www.cook.as/wow/pfquesttracker/pfQuestTracker.user.js).

 **How to use:**
The first time you visit one of the mentioned sites (you have to be viewing a quest or list of quests) you will get a prompt asking you to upload your pfQuest.lua file. The file is not uploaded to any remote server, just stored in your browser.
![Image](https://www.cook.as/wow/pfquesttracker/turtle_pfquest_upload.png)

That's it, any quests you have completed should now be marked when viewing a list of quests or a quest page.
![Image](https://www.cook.as/wow/pfquesttracker/turtle_pfquest.png)

There's also a little pfQuest link in the top right corner which you can click to upload a new pfQuest.lua to keep the data updated with your latest quests.

For those occasions when pfQuest haven't marked a quest as complete but you know you've completed it, there's a button to mark a quest as complete next to the quest title when viewing a quest page.

Hope this helps any fellow adventurers trying to find quests they're missing.

 --
Sica

## Post 113707 by Laponko — 2024-12-21T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113707#p113707 | page 1 | era: pre-1.18.1 -->

Thanks man! Really works! 150 quests left^^
P.S. Firefox 113.0.03 browser

## Post 113725 by Caixiao99999 (Barrens Chat Casualty) — 2024-12-21T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113725#p113725 | page 1 | era: pre-1.18.1 -->

Thank you so much for creating this plugin! It’s exactly what I’ve been looking for. Really appreciate. this is going to help a lot!

## Post 134264 by Baangaa — 2025-06-04T12:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134264#p134264 | page 1 | era: pre-1.18.1 -->

Ty **Sica**  turtle_in_love_head   for this, it is working. olle !!

< <https://database.turtlecraft.gg/?quests=0.38> >
Choose; Quest/Continent/Zone and it will show all data needed.

## Post 134267 by Grizb37 (Grandmaster of Forum PvP) — 2025-06-04T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134267#p134267 | page 1 | era: pre-1.18.1 -->

You can run /db query

And pf quest will query the server for all your completed quests and mark them off. Better than manually clicking them on the map.

Then you can upload the file to this

