---
title: "Working Auctioneer WITH SCAN"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3213"
topic_id: 3213
forum_id: 18
forum: "AddOns"
author: "Vociferous"
author_authority: "player"
posted: "2022-07-02T06:45:00Z"
last_post: "2023-12-16T03:02:00Z"
post_count: 23
pages: 1
fetched: "2026-09-10T10:29:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Working Auctioneer WITH SCAN

## Post 19551 by Vociferous — 2022-07-02T06:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19551#p19551 | page 1 | era: pre-1.18.1 -->

Got tired of not knowing AH prices. Messed around with this for a bit and got it to work. There is still something off about the "search auctions" tab and I think it has something to do with new items added to the database and, as of now, I have not added the values to the addon. This is not mine, obviously. Reposting it with some fixings. This is a combination of 3 different versions of Auctioneer. Your "informant" addon may be a newer version than the one posted and if the one posted here gives you an error at login you can update it with no issues. You can also install the "swatter" addon. If you get any strange errors or the addon is not working post a reply - may need to refresh some cache data in the addon itself or you may need to delete any old Auctioneer data in your WTF account folder.

[embed: //drive.google.com/file/d/1pjZlefvbQlX91rFL95cpdh0UqKz6mwZG/preview]

## Post 19603 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-02T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19603#p19603 | page 1 | era: pre-1.18.1 -->

Just out of curiosity, what's different about this version of *Auctioneer*?  Can you be as specific as possible?  I ask because, as far as I could tell, the [official 1.12.1 download](https://www.curseforge.com/wow/addons/auctioneer/files/all?filter-game-version=2020709689%3A1) worked fine?  It was just slow.  But then, *Aux* is slow, too, so…

## Post 19612 by Geojak (Grandmaster of Forum PvP) — 2022-07-02T21:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19612#p19612 | page 1 | era: pre-1.18.1 -->

is this better than aux?

## Post 19623 by Vociferous — 2022-07-03T02:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19623#p19623 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Sat Jul 02, 2022 5:37 pm**
> Just out of curiosity, what's different about this version of *Auctioneer*?  Can you be as specific as possible?  I ask because, as far as I could tell, the [official 1.12.1 download](https://www.curseforge.com/wow/addons/auctioneer/files/all?filter-game-version=2020709689%3A1) worked fine?  It was just slow.  But then, *Aux* is slow, too, so…

Any auctioneer addon I found for 1.16 (or 1.12 whatever you want to call it) were throwing errors and wasn't scanning correctly. This one has a scan button, no more typing in /auc scan. Trivial, I know... I think Aux is a mess, a complete code disaster and would personally prefer the blizzard UI AH with a working AH addon. IDK about you but a 2h scan was too much. I've been doing scans in about 30mins. That's the difference. With some I am seeing a 40min search time. Down from well over 2 hours.

More or less the difference is it works as intended, at least the scan and ?askprice works as intended.

(I just downloaded 3.8 version from curseforge that was linked. AH scanning won't make it passed first page.)

As a side note I found a backported Aux to Auctionator addon from the waybackmachine website that I am looking into making viable for 1.12.

## Post 19627 by Geojak (Grandmaster of Forum PvP) — 2022-07-03T07:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19627#p19627 | page 1 | era: pre-1.18.1 -->

The slwo scan is server side. You can only access one page berry 4 seconds l.

So aux and auctioneer should have very Similiar scan times.

There is a aux branch on githib for vanilla already. I even made a few pull requests earlier this year.

But I agree that the code of aux is hard to ubdertsand.

## Post 19628 by Vociferous — 2022-07-03T09:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19628#p19628 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sun Jul 03, 2022 7:34 am**
> The slwo scan is server side. You can only access one page berry 4 seconds l.
>
>  So aux and auctioneer should have very Similiar scan times.
>
>  There is a aux branch on githib for vanilla already. I even made a few pull requests earlier this year.
>
>  But I agree that the code of aux is hard to ubdertsand.

There is a scan request inside the addon to request from the server, this time was changed in the addon also.

## Post 19636 by Reploidrocsa (Bug Report Enthusiast) — 2022-07-03T14:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19636#p19636 | page 1 | era: pre-1.18.1 -->

it takes me around 1 hour to scan the AH, is this normal?

## Post 19645 by Vociferous — 2022-07-04T01:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19645#p19645 | page 1 | era: pre-1.18.1 -->

> **Reploidrocsa wrote: Sun Jul 03, 2022 2:50 pm**
> it takes me around 1 hour to scan the AH, is this normal?

This highly depends on the amount of auctions listed at the time, the servers ability to handle your request to scan, your addon being able to scan correctly and the performance of the computer you are using. I haven't seen an hour long scan time since the AH changes which added the fee back. It's about 30 minutes, 40minutes if the population of the server is above 1000. The way the AH works in vanilla is the AH system can only handle so many 'requests' for items at a time. These requests are pages, so 10 items at a time. The delay is 4seconds before you can search another page. You could reduce the time further down to that 4 seconds, but the way auctioneer works is that it converts everything you see on the AH into code that is written into a .txt file in the addon under your WTF folder, so making it search quicker won't make it write quicker. I will get a "unable to request page will retry in 10 seconds" error about twice a scan. If you see it more than it is more than likely your game is lagging with the server or your addon is still writing data into the .txt file. You can try to clear the Auctioneer folder inside the WTF folder and see if that helps any.

Vanilla will always have a slow AH scan. There is never going to be a perfect solution. But at the end of the day, a 30 minute scan is better than a 2 hour scan.

## Post 19930 by Treakon — 2022-07-12T08:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19930#p19930 | page 1 | era: pre-1.18.1 -->

if it works can you please make it downloadable?

## Post 19993 by Paulhqv — 2022-07-14T09:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19993#p19993 | page 1 | era: pre-1.18.1 -->

Cant download. "file is in user`s trash"
Make it downloadable pls ?

## Post 19995 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-14T09:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19995#p19995 | page 1 | era: pre-1.18.1 -->

For those having trouble downloading this specific version of *Auctioneer*, use this link:
[https://drive.google.com/file/d/1pjZlef ... 6mwZG/view](https://drive.google.com/file/d/1pjZlefvbQlX91rFL95cpdh0UqKz6mwZG/view)

It's the same link you get when you click the little "pop-out" icon on the file listing, above.

## Post 20008 by Atello — 2022-07-15T06:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20008#p20008 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Thu Jul 14, 2022 9:47 am**
> For those having trouble downloading this specific version of *Auctioneer*, use this link:
>  [https://drive.google.com/file/d/1pjZlef ... 6mwZG/view](https://drive.google.com/file/d/1pjZlefvbQlX91rFL95cpdh0UqKz6mwZG/view)
>
>  It's the same link you get when you click the little "pop-out" icon on the file listing, above.

Does not work, leads to the same "file is in user's trash" error.

## Post 20011 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-15T09:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20011#p20011 | page 1 | era: pre-1.18.1 -->

You need to be **logged out of *Google*** to view / download this particular file.  Why?  I don't know.

I just know that I could download it without a problem while in Incognito Mode under *Google Chrome*. ![Image](https://i.imgur.com/aN3Zmx1.png)

 
But, you know what?  I can do you all one better.  Guess what I found?
  **[*MediaFire* - auctioneerpack-3.9.0.1067.zip](https://www.mediafire.com/file/9k2dzc56hj6kuh4/auctioneerpack-3.9.0.1067.zip)** ![Image](https://i.imgur.com/isPJ7NH.jpg)

 
I have found the **absolute last v1.12.1 release** of *Auctioneer*.  [Straight from the source](https://web.archive.org/web/20110113062434/http://auctioneeraddon.com/dl/zzOld/AuctioneerComplete/?all=1) (sort of).

Some Irrelevant "Blah"
| This version of Auctioneer Complete is actually an entire version (and several sub-versions) above what was originally posted. It also comes with **everything** you'd exepct: Auctioneer, BeanCounter, Enchantrix, EnhToolTip, Informant, and Stubby. Sadly, **Bottom Scanner** wasn't created until v3.9.0.1170, which was during *The Burning Crusade* days, so that's not here. I also wasn't able to get *Itemizer* ("Stores items and their corresponding links") from 1061 to work on my end, but that's what *[Telo LootLink Enhanced](https://legacy-wow.com/vanilla-addons/telo-lootlink-enhanced/)* is for, so~ Anyway, as far as I can tell, everything works exactly like it should. I've had no problems with it at all **and** it comes with that extremely handy "UiRefresh" button under the "Post Auctions" tab which shows you *all* the auctions for that particular item and sets your price to match – something I was *sorely* missing. (I ended resorting to *Aux* just for that. *Eww~!*) Now, it's worth mentioning that there are later releases of this AddOn for *The Burning Crusade* which use TOC 11200 for everything but Auctioneer, itself. I'm sure you could [Frankenstein's Monster](https://web.archive.org/web/20110112153336/http://auctioneeraddon.com/dl/zzOld/) something together. In fact, here's a list of the last 11200 TOC versions of each of these AddOns: | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) | |---| … but that's entirely on you if it doesn't work properly. That aside, 3.9.0.1067 *does* work perfectly, so I ain't'a gonna complain'a! Ciao~ | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |
|---|---|
| Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |

## Post 20021 by Gurky (Barrens Chat Casualty) — 2022-07-16T01:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20021#p20021 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Fri Jul 15, 2022 9:55 am**
> You need to be **logged out of *Google*** to view / download this particular file.  Why?  I don't know.
>
>  I just know that I could download it without a problem while in Incognito Mode under *Google Chrome*. ![Image](https://i.imgur.com/aN3Zmx1.png)
>
>
>   
>  But, you know what?  I can do you all one better.  Guess what I found?
>    **[*MediaFire* - auctioneerpack-3.9.0.1067.zip](https://www.mediafire.com/file/9k2dzc56hj6kuh4/auctioneerpack-3.9.0.1067.zip)** ![Image](https://i.imgur.com/isPJ7NH.jpg)
>
>
>
>   
>  I have found the **absolute last v1.12.1 release** of *Auctioneer*.  [Straight from the source](https://web.archive.org/web/20110113062434/http://auctioneeraddon.com/dl/zzOld/AuctioneerComplete/?all=1) (sort of).
>
>  Some Irrelevant "Blah"
> | This version of Auctioneer Complete is actually an entire version (and several sub-versions) above what was originally posted. It also comes with **everything** you'd exepct: Auctioneer, BeanCounter, Enchantrix, EnhToolTip, Informant, and Stubby. Sadly, **Bottom Scanner** wasn't created until v3.9.0.1170, which was during *The Burning Crusade* days, so that's not here. I also wasn't able to get *Itemizer* ("Stores items and their corresponding links") from 1061 to work on my end, but that's what *[Telo LootLink Enhanced](https://legacy-wow.com/vanilla-addons/telo-lootlink-enhanced/)* is for, so~ Anyway, as far as I can tell, everything works exactly like it should. I've had no problems with it at all **and** it comes with that extremely handy "UiRefresh" button under the "Post Auctions" tab which shows you *all* the auctions for that particular item and sets your price to match – something I was *sorely* missing. (I ended resorting to *Aux* just for that. *Eww~!*) Now, it's worth mentioning that there are later releases of this AddOn for *The Burning Crusade* which use TOC 11200 for everything but Auctioneer, itself. I'm sure you could [Frankenstein's Monster](https://web.archive.org/web/20110112153336/http://auctioneeraddon.com/dl/zzOld/) something together. In fact, here's a list of the last 11200 TOC versions of each of these AddOns: | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) | |---| … but that's entirely on you if it doesn't work properly. That aside, 3.9.0.1067 *does* work perfectly, so I ain't'a gonna complain'a! Ciao~ | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |
> |---|---|
> | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |

Thanks for sharing.

## Post 20043 by Vociferous — 2022-07-16T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20043#p20043 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Fri Jul 15, 2022 9:55 am**
> You need to be **logged out of *Google*** to view / download this particular file.  Why?  I don't know.
>
>  I just know that I could download it without a problem while in Incognito Mode under *Google Chrome*. ![Image](https://i.imgur.com/aN3Zmx1.png)
>
>
>   
>  But, you know what?  I can do you all one better.  Guess what I found?
>    **[*MediaFire* - auctioneerpack-3.9.0.1067.zip](https://www.mediafire.com/file/9k2dzc56hj6kuh4/auctioneerpack-3.9.0.1067.zip)** ![Image](https://i.imgur.com/isPJ7NH.jpg)
>
>
>
>   
>  I have found the **absolute last v1.12.1 release** of *Auctioneer*.  [Straight from the source](https://web.archive.org/web/20110113062434/http://auctioneeraddon.com/dl/zzOld/AuctioneerComplete/?all=1) (sort of).
>
>  Some Irrelevant "Blah"
> | This version of Auctioneer Complete is actually an entire version (and several sub-versions) above what was originally posted. It also comes with **everything** you'd exepct: Auctioneer, BeanCounter, Enchantrix, EnhToolTip, Informant, and Stubby. Sadly, **Bottom Scanner** wasn't created until v3.9.0.1170, which was during *The Burning Crusade* days, so that's not here. I also wasn't able to get *Itemizer* ("Stores items and their corresponding links") from 1061 to work on my end, but that's what *[Telo LootLink Enhanced](https://legacy-wow.com/vanilla-addons/telo-lootlink-enhanced/)* is for, so~ Anyway, as far as I can tell, everything works exactly like it should. I've had no problems with it at all **and** it comes with that extremely handy "UiRefresh" button under the "Post Auctions" tab which shows you *all* the auctions for that particular item and sets your price to match – something I was *sorely* missing. (I ended resorting to *Aux* just for that. *Eww~!*) Now, it's worth mentioning that there are later releases of this AddOn for *The Burning Crusade* which use TOC 11200 for everything but Auctioneer, itself. I'm sure you could [Frankenstein's Monster](https://web.archive.org/web/20110112153336/http://auctioneeraddon.com/dl/zzOld/) something together. In fact, here's a list of the last 11200 TOC versions of each of these AddOns: | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) | |---| … but that's entirely on you if it doesn't work properly. That aside, 3.9.0.1067 *does* work perfectly, so I ain't'a gonna complain'a! Ciao~ | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |
> |---|---|
> | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |

Thank you for that. These can be hard to find. This version is working better. I suggest opening the AH Scanning LUA and changing the time from 20seconds down to 6-10seconds to speed up scanning. Server side is maxed at a 6sec search time and that's just how the database is and cannot be changed. This version seems to be working better than what I posted otherwise.

## Post 20187 by Cyruspyrus — 2022-07-21T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20187#p20187 | page 1 | era: pre-1.18.1 -->

why did you throw this in trash man. i went to grab this from the .drive and it says its in your trash, can you restore please?

## Post 20249 by Gurky (Barrens Chat Casualty) — 2022-07-24T18:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20249#p20249 | page 1 | era: pre-1.18.1 -->

> **Cyruspyrus wrote: Thu Jul 21, 2022 7:32 pm**
> why did you throw this in trash man. i went to grab this from the .drive and it says its in your trash, can you restore please?

The download is working for me. Please try again.

## Post 20645 by Renox — 2022-07-29T11:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20645#p20645 | page 1 | era: pre-1.18.1 -->

It seems this version, linked above, scans the AH correctly but it doesn't save the scanned items for me.

## Post 24041 by Dheard81 — 2022-08-31T00:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24041#p24041 | page 1 | era: pre-1.18.1 -->

> **Vociferous wrote: Sat Jul 16, 2022 1:17 pm**
> > **Jolikmc wrote: Fri Jul 15, 2022 9:55 am**
> > You need to be **logged out of *Google*** to view / download this particular file.  Why?  I don't know.
> >
> >  I just know that I could download it without a problem while in Incognito Mode under *Google Chrome*. ![Image](https://i.imgur.com/aN3Zmx1.png)
> >
> >
> >   
> >  But, you know what?  I can do you all one better.  Guess what I found?
> >    **[*MediaFire* - auctioneerpack-3.9.0.1067.zip](https://www.mediafire.com/file/9k2dzc56hj6kuh4/auctioneerpack-3.9.0.1067.zip)** ![Image](https://i.imgur.com/isPJ7NH.jpg)
> >
> >
> >
> >   
> >  I have found the **absolute last v1.12.1 release** of *Auctioneer*.  [Straight from the source](https://web.archive.org/web/20110113062434/http://auctioneeraddon.com/dl/zzOld/AuctioneerComplete/?all=1) (sort of).
> >
> >  Some Irrelevant "Blah"
> > | This version of Auctioneer Complete is actually an entire version (and several sub-versions) above what was originally posted. It also comes with **everything** you'd exepct: Auctioneer, BeanCounter, Enchantrix, EnhToolTip, Informant, and Stubby. Sadly, **Bottom Scanner** wasn't created until v3.9.0.1170, which was during *The Burning Crusade* days, so that's not here. I also wasn't able to get *Itemizer* ("Stores items and their corresponding links") from 1061 to work on my end, but that's what *[Telo LootLink Enhanced](https://legacy-wow.com/vanilla-addons/telo-lootlink-enhanced/)* is for, so~ Anyway, as far as I can tell, everything works exactly like it should. I've had no problems with it at all **and** it comes with that extremely handy "UiRefresh" button under the "Post Auctions" tab which shows you *all* the auctions for that particular item and sets your price to match – something I was *sorely* missing. (I ended resorting to *Aux* just for that. *Eww~!*) Now, it's worth mentioning that there are later releases of this AddOn for *The Burning Crusade* which use TOC 11200 for everything but Auctioneer, itself. I'm sure you could [Frankenstein's Monster](https://web.archive.org/web/20110112153336/http://auctioneeraddon.com/dl/zzOld/) something together. In fact, here's a list of the last 11200 TOC versions of each of these AddOns: | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) | |---| … but that's entirely on you if it doesn't work properly. That aside, 3.9.0.1067 *does* work perfectly, so I ain't'a gonna complain'a! Ciao~ | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |
> > |---|---|
> > | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |
>
>
>  Thank you for that. These can be hard to find. This version is working better. I suggest opening the AH Scanning LUA and changing the time from 20seconds down to 6-10seconds to speed up scanning. Server side is maxed at a 6sec search time and that's just how the database is and cannot be changed. This version seems to be working better than what I posted otherwise.

THank you for the suggestion. For those of us who are not tech savvy, could someone screen shot where to make this change in scan time? I've opened the LUA but can't figure this out - I don't know anything about coding...

## Post 30076 by Goawayjesus — 2022-12-01T10:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30076#p30076 | page 1 | era: pre-1.18.1 -->

Thanks a lot for your efforts on this. I have downloaded the archived version, but I also cannot find where to change the scan time to 6 seconds in the LUA. I have had a pretty extensive dig through all of them. The original file from the OP is no longer available to compare for reference, either. Did anyone figure it out?

## Post 31710 by Bopeuph — 2022-12-28T13:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31710#p31710 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Fri Jul 15, 2022 9:55 am**
> You need to be **logged out of *Google*** to view / download this particular file.  Why?  I don't know.
>
>  I just know that I could download it without a problem while in Incognito Mode under *Google Chrome*. ![Image](https://i.imgur.com/aN3Zmx1.png)
>
>
>   
>  But, you know what?  I can do you all one better.  Guess what I found?
>    **[*MediaFire* - auctioneerpack-3.9.0.1067.zip](https://www.mediafire.com/file/9k2dzc56hj6kuh4/auctioneerpack-3.9.0.1067.zip)** ![Image](https://i.imgur.com/isPJ7NH.jpg)
>
>
>
>   
>  I have found the **absolute last v1.12.1 release** of *Auctioneer*.  [Straight from the source](https://web.archive.org/web/20110113062434/http://auctioneeraddon.com/dl/zzOld/AuctioneerComplete/?all=1) (sort of).
>
>  Some Irrelevant "Blah"
> | This version of Auctioneer Complete is actually an entire version (and several sub-versions) above what was originally posted. It also comes with **everything** you'd exepct: Auctioneer, BeanCounter, Enchantrix, EnhToolTip, Informant, and Stubby. Sadly, **Bottom Scanner** wasn't created until v3.9.0.1170, which was during *The Burning Crusade* days, so that's not here. I also wasn't able to get *Itemizer* ("Stores items and their corresponding links") from 1061 to work on my end, but that's what *[Telo LootLink Enhanced](https://legacy-wow.com/vanilla-addons/telo-lootlink-enhanced/)* is for, so~ Anyway, as far as I can tell, everything works exactly like it should. I've had no problems with it at all **and** it comes with that extremely handy "UiRefresh" button under the "Post Auctions" tab which shows you *all* the auctions for that particular item and sets your price to match – something I was *sorely* missing. (I ended resorting to *Aux* just for that. *Eww~!*) Now, it's worth mentioning that there are later releases of this AddOn for *The Burning Crusade* which use TOC 11200 for everything but Auctioneer, itself. I'm sure you could [Frankenstein's Monster](https://web.archive.org/web/20110112153336/http://auctioneeraddon.com/dl/zzOld/) something together. In fact, here's a list of the last 11200 TOC versions of each of these AddOns: | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) | |---| … but that's entirely on you if it doesn't work properly. That aside, 3.9.0.1067 *does* work perfectly, so I ain't'a gonna complain'a! Ciao~ | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |
> |---|---|
> | Auctioneer: 3.9.0.1063 (Complete 1067) BeanCounter: 3.9.0.1106 (Complete 1111) Enchantrix: 3.9.0.1105 (Complete 1111) EnhToolTip: 3.9.0.1066 (standalone release only) Informant: 3.9.0.1000 (Complete 1067) Itemizer: 3.9.0.1247 (standalone release only) Stubby: 3.9.0.1053 (Complete 1067) |

Okay, so what am I doing wrong?  Every version I've tried, including this one, throws up an error with !swatter on login, and Auctioneer doesn't work.  It's been a while, but I remember just dropping the folders into the AddOns folder.  The error:

Interface\AddOns\!Swatter\Support\LibStib.lua:4: attempt to index global '_G' (a nil value)

Thanks for the help!

## Post 77106 by Aurkanthis — 2023-11-13T00:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77106#p77106 | page 1 | era: pre-1.18.1 -->

So, what is the best way to get auctioneer working in November 2023?

## Post 81372 by Nz12345678 — 2023-12-16T03:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81372#p81372 | page 1 | era: pre-1.18.1 -->

Seems to work for me, I used standard build, BUT TAKES A LONG TIME to download AH data,
I understand this is a limitation for this version,

Someone mentioned lowering the request rate improves the overall speed but im unsure exactly what modification is required on what file for auctioneerpack-3.9.0.1067 with twmoa_1170

If anyone has further information I would be keen to talk to you. :)

