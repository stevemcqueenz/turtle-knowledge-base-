---
title: "6+ Classes limitation"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3283"
topic_id: 3283
forum_id: 29
forum: "Modding"
author: "Erozyt"
author_authority: "player"
posted: "2022-07-16T11:37:00Z"
last_post: "2022-07-21T21:34:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T10:43:40Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 6+ Classes limitation

## Post 20041 by Erozyt — 2022-07-16T11:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20041#p20041 | page 1 | era: pre-1.18.1 -->

Hello turtles  smiling_turtle  ,

This morning I tried to break the 6 classes for a race limitation on the Vanilla/TurtleWoW client, and I achieved this :

![Image](https://i.postimg.cc/5Nr0mSVq/Human-hunter.png)

From what I know with the corresponding sever side modification this should work, so what I am missing ?
Maybe there is an in-game problem with added race/class combinations after the sixth ?
Or a server side issue I am not aware of ?

Can someone enlighten me on this subject ?

Edit: Here [https://www.mediafire.com/file/hwnzh7kz ... W.mpq/file](https://www.mediafire.com/file/hwnzh7kzuvb04de/patch-W.mpq/file) is the mpq, for those that are familiar with WoW patches. You can't actually create the character (need sever side modification) but you can take a look.

*Last edited by Erozyt on Sat Jul 16, 2022 12:45 pm, edited 1 time in total.*

## Post 20042 by Kyzen (Barrens Chat Casualty) — 2022-07-16T12:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20042#p20042 | page 1 | era: pre-1.18.1 -->

turtle_in_love_head

## Post 20053 by Captainslapster — 2022-07-16T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20053#p20053 | page 1 | era: pre-1.18.1 -->

I've actually done this already if you look at the modding channel in the discord. The limit is 8 classes. it's a myth that 6 is the limit. it's just that making extra classes is time consuming.

## Post 20054 by Toyawolf — 2022-07-16T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20054#p20054 | page 1 | era: pre-1.18.1 -->

Just curious, but is it just a coding nightmare to attach an already existing class to a race? Or is there some other complexity involved?

## Post 20056 by Erozyt — 2022-07-16T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20056#p20056 | page 1 | era: pre-1.18.1 -->

> **Captainslapster wrote: Sat Jul 16, 2022 5:59 pm**
> I've actually done this already if you look at the modding channel in the discord. The limit is 8 classes. it's a myth that 6 is the limit. it's just that making extra classes is time consuming.

Even if I had a ninth class button in the XML ?

> **Toyawolf wrote: Sat Jul 16, 2022 6:09 pm**
> Just curious, but is it just a coding nightmare to attach an already existing class to a race? Or is there some other complexity involved?

I don't know if you familiar with any sort of coding, but it's just a new record in the client database (that link an existing class to an existing race). I also modified the UI because the seventh class button was overlapping player customisation.

## Post 20059 by Toyawolf — 2022-07-16T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20059#p20059 | page 1 | era: pre-1.18.1 -->

Fascinating. So it seems easier than I expected it to ever be. Would there be any kind of issues after the class is attached to something new or does it just function like normal?

## Post 20066 by Erozyt — 2022-07-17T07:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20066#p20066 | page 1 | era: pre-1.18.1 -->

> **Toyawolf wrote: Sat Jul 16, 2022 10:02 pm**
> Fascinating. So it seems easier than I expected it to ever be. Would there be any kind of issues after the class is attached to something new or does it just function like normal?

It's all you have to do for the client. But some modifications are necessary server side. You need to link in the server database all the basic spells and passives this race/class combo is supposed to start with. Finally, you have to import your modified client database in your server files for it to notice the new race/class combo an allow the creation of a corresponding character.

## Post 20096 by Gribius123 — 2022-07-18T17:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20096#p20096 | page 1 | era: pre-1.18.1 -->

It would be great to be able to play with a human hunter since according to the history of the game there are human hunters. hopefully a gm plant this request   turtle_in_love_head

## Post 20190 by Captainslapster — 2022-07-21T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20190#p20190 | page 1 | era: pre-1.18.1 -->

To answer questions above. it was 1 edit to the class files to create it. After that it took about 6-9 files in the server core and 2-4 lines in the interface files to integrate the class. I believe there is a hard limit, but it's definitely not 6. I imagine with some play testing you can even have 9 or 10. After the class was made i had to use math to figure out what the "class mask" is to enable spells.

