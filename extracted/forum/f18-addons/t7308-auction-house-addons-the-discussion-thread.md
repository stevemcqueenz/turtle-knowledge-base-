---
title: "Auction House AddOns - The Discussion Thread"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7308"
topic_id: 7308
forum_id: 18
forum: "AddOns"
author: "Jolikmc"
author_authority: "player"
posted: "2023-05-17T21:29:00Z"
last_post: "2026-04-10T08:04:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T10:20:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Auction House AddOns - The Discussion Thread

## Post 46338 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-17T21:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46338#p46338 | page 1 | era: pre-1.18.1 -->

Hi.  It's me, again.   And this time, I'd like to engage in a discussion about Auction House AddOns.
—
  ![Image](https://i.imgur.com/wfgbmZp.jpg)

Firstly, there's *[Auctioneer](https://www.mediafire.com/file/9k2dzc56hj6kuh4)*.  People can't seem find a "working" version of this one, but a lot of people keep looking.  I, myself, actually took a lot of time to dig through the depths of the Internet to compile a version that works… but the Scan function still seems somewhat busted.  On the bright side, it looks nice and it **mostly** works.

As far as what you can do with *Auctioneer* and its various supplemental AddOns, you can easily post up stacks of stuff, keep a transaction ledger, keep a database of items with up-to-date prices, add *Auctioneer* information to your item tooltips, and a few other cool things.  It's supposed to be able to automatically split stacks, too, but more often than not, it just ends up posting a stack of 2 items with the price of 1, or whatnot.

Something that *Auctioneer* desperately needs is an "inexact search" function when posting items.  For example, if you try and post up a "Simple Robe of Stamina", then *Auctioneer* will **only** give you listings for "Simple Robe of Stamina" rather than *any* "Simple Robe".  *Aux* doesn't seem to have this functionality, either, which is kind of mysterious to me.  I, myself, would love a "no prefix" mode for selling items.

All and all, it's a very nice, very lovely little compilation of AddOns to make buying and *especially* selling much more user-friendly.
—
  ![Image](https://i.imgur.com/cj7TJrK.jpg)

Now, here's *[Aux](https://github.com/shirsig/aux-addon-vanilla)*.  And… wow.  Just… take a minute to *bask* in the radiant glory of that interface.  It is not perfection incarnate?  Such grandure.  So many shades of **one color**.  It brings a tear to my eye.  (,:

Unlike *Auctioneer* it's very easy to find a fully functional version of *Aux* for Vanilla.  It's always been over at shirsig's *GitHub*.  There's even a version for *Classic*, if you're into it.  That aside, *Aux* was not made to "look pretty".  Obviously.  No, it was made for functionality.  And, uh… well… I'm honestly not sure it can do as much as *Auctioneer* is supposed to.  Yes, I worded it that way for a reason.  I worded it that way because I've never actually given *Aux* a fair shake.  Until now, I mean.  I'm honestly kind of impressed?

Much like with *Auctioneer, Aux* can supplement your tooltips with handy vendor and disenchantment information.  It can also split stacks up to help you sell them individually or in smaller groups.  Unlike *Auctioneer*, it also does this *successfully* by doing it slower.  *Also* unlike *Auctioneer*… it won't suggest a price for you.  You have to either click on an existing auction to copy that price, or enter your own price.  Annoyingly, *Aux* doesn't have a nice little interface for money.  Instead, you have to manually enter the values ala "colorblind mode".  For example, "1g 19s 99c".  Very annoying.

 *Aux* seems completely focused on individual item prices and buyout prices only.  While that's actually very useful for someone like me, it might not be as useful for other people.  *Aux* can also scan the entire Auction House by doing a completely empty search, but I'm not sure if it actually keeps a database.  It probably does.  It seems more focused on keeping daily results rather than long-term data, though – which, again, might be useful to some and not to others.  And yes, this still takes around **two hours** to do.  Blame the Vanilla infrastructure.  But on that note, *Aux* has all the tooltip data functionality that *Auctioneer* has, though you have to enable most of it manually (like with *Auctioneer*).  And lastly… *Aux* is self-contained.  There's no "Aux Beancounter" or "Aux Enchantrix".  It does all of this with the **one and only** AddOn.  So, that's definitely something!
—

So, in the end, I dunno what to think.  I'll probably end up using both AddOns together because while I like the functionality of *Aux*, I can't really get over how ugly the interface is… but it honestly does some things better than *Auctioneer*, at present.  I kind of wish there were more Auction House AddOns for Vanilla.  One particular AddOn that I liked was "*Auctionator*".  It was basically *Auctioneer*, but for more casual users.  A couple of people tried back-porting it from *The Burning Crusade*, but neither version that I've found works.  Such is the life of a Vanilla player, I s'pose~

Hope you found this post informative.  Absolutely feel free to talk about these AddOns and more!  That's what a forum is for, after all.  (;

## Post 46378 by Kiersteadmo (Barrens Chat Casualty) — 2023-05-18T05:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46378#p46378 | page 1 | era: pre-1.18.1 -->

I love Aux !!!

## Post 46381 by Duckwarrior — 2023-05-18T06:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46381#p46381 | page 1 | era: pre-1.18.1 -->

I found a bug with auc, it's always post 1/2 prices, caused me a loss

## Post 46411 by Geojak (Grandmaster of Forum PvP) — 2023-05-18T12:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46411#p46411 | page 1 | era: pre-1.18.1 -->

Bug in auc or aux? If its the aux, I would be interested in more details.

At op. What are some features you feel lacking in aux? Other than the interface look.

Have you tried it's auto pricing feature? You can put in bid price 0 to activate it and buyout price as a minimum value, aux then undercuts automatically with a few rules to hopefully find a great sell price to list.

## Post 46935 by Enceebe (Barrens Chat Casualty) — 2023-05-21T22:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46935#p46935 | page 1 | era: pre-1.18.1 -->

I can't even use AUX in the first place. problem either the game does not pick it up at all and it simply does not show up in the addon list or I get a version that shows up in the addon list just to be greated with a LUA Error.

## Post 46952 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-22T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46952#p46952 | page 1 | era: pre-1.18.1 -->

**Did You Know?™**
 *World of Warcraft* only recognizes AddOns whose directory name **matches the internal .TOC file name**.  This is the primary problem people experience.

More Information
> **Jolikmc wrote: Wed May 17, 2023 7:02 am**
> […] some AddOns that are hosted on *GitHub* come in ZIP files which end with "-main", "-master", or sometimes something else.  When unZIPped, the folders also end like this.  Simply remove the "-main" or "-master" from the folder name and it should work fine.
>
>  Examples
>  PallyPower-master → **PallyPower**
>  GlobalFriendsList-main → **GlobalFriendsList**
>  aux-addon-vanilla-master → **aux-addon**
>
>  Basically, if the **folder name** is the same as the **.toc file inside it**, it should be good to go.

—

> **Geojak wrote: Thu May 18, 2023 12:37 pm**
> At op. What are some features you feel lacking in aux? Other than the interface look.

There was something…  Something other than the "search without prefixes" thing in the Post tab, I mean.  I genuinely can't remember what, now, though.  It seems like *Aux* does everything I expect *Auctioneer* to do, plus has some handy features of its own.  It even remembers the prices of things I've previous sold.

One thing I've noticed, though, is that there seems to be no way to clear the Recent Searches tab.  Right-clicking just adds a search query to the Favorite / Saved tab and no combination of Control, Alt, or Shift-Clicking seems to do anything.  It's baffling.

> Have you tried it's auto pricing feature? You can put in bid price 0 to activate it and buyout price as a minimum value, aux then undercuts automatically with a few rules to hopefully find a great sell price to list.

I wasn't aware that was a feature.  Huh.  I guess that's why items that haven't been sold before default to 0c and 0c.

On that note, I recently found out that if you type something like "2048c", *Aux* is smart enough to change that into "20s 48c" for you.  However, if you type "1", it changes it to "1g 00s 00c".  I *know* this will probably be handy later on, when I get better stuff to sell… but to me, it's odd that's how it works.

Incidentally, I didn't intended for this thread to become an "*Aux* Troubleshooting Thread", but here we are, I guess.  d:

## Post 101894 by Yourpalhal — 2024-09-25T15:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101894#p101894 | page 1 | era: pre-1.18.1 -->

I too am unable to clear recent searches. I have tried
/aux clear item cache
and it returns that the command was successful but the saved searches remain.
I initially had an issue where windows tried to put my WDB folder in the hidden VirtualStore folder inside the AppData folder. It was suggested that I move my turtle wow folder out of the C: drive and relocate in the D:(non-windows) drive. This worked as I was able to clear my recent searches with the aforementioned command
This only worked for a while .. any idea why I am unable to get rid of recent searches
Thank you

## Post 115399 by Yourpalhal — 2025-01-04T14:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115399#p115399 | page 1 | era: pre-1.18.1 -->

Delete the aux entries in the WTF/Account/<UserName>/Saved Variables folder

## Post 115433 by Imonobor (Bug Report Enthusiast) — 2025-01-04T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115433#p115433 | page 1 | era: pre-1.18.1 -->

I love aux and can't imagine using the AH without it, but the interface looks horrible. Can't someone make a version that uses blizzard UI skin, or one that is skinnable by PFUI?

## Post 169135 by Ravenofseven72 (Barrens Chat Casualty) — 2026-02-21T17:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169135#p169135 | page 1 | era: 1.18.1-announced-pre-release -->

> **Imonobor wrote: Sat Jan 04, 2025 8:29 pm**
> I love aux and can't imagine using the AH without it, but the interface looks horrible. Can't someone make a version that uses blizzard UI skin, or one that is skinnable by PFUI?

in pfUI kann man ja umskinnen. ich hab erst /aux theme im in-game chat gemacht, neugestartet, und im pfUI den skin angemarked / demarked, restart again. good for me

![Image](https://camo.githubusercontent.com/709d691dac1c9b5564f82fc8b471067cf7d91ca4838864707c5ae1e909d29354/687474703a2f2f692e696d6775722e636f6d2f6849364f44714d2e706e67)

![Image](https://camo.githubusercontent.com/118f112952c88638ef2457bdcf3be63cb11c520641b1e2fb063947974cd52dc7/687474703a2f2f692e696d6775722e636f6d2f644943446e78522e706e67)

## Post 169248 by Imonobor (Bug Report Enthusiast) — 2026-02-23T11:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169248#p169248 | page 1 | era: 1.18.1-announced-pre-release -->

I did find a blizzard UI reskin of aux: <https://github.com/OldManAlpha/aux-addon>

## Post 169267 by Ravenofseven72 (Barrens Chat Casualty) — 2026-02-23T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169267#p169267 | page 1 | era: 1.18.1-announced-pre-release -->

> **Imonobor wrote: Mon Feb 23, 2026 11:25 am**
> I did find a blizzard UI reskin of aux: <https://github.com/OldManAlpha/aux-addon>

thats the orignial i used with the reskins   satisfied_turtle_head

## Post 169571 by Wnz — 2026-02-28T06:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169571#p169571 | page 1 | era: 1.18.1-announced-pre-release -->

I often wonder about the aux base price of items. I read it is something of a average of the last couple of days. For me it is almost always far too low, with actual prices for gatherables often being at 250%+ of the base price.
Is this actually working and it's just me not being up to date?

## Post 174646 by Leilar — 2026-04-10T04:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174646#p174646 | page 1 | era: post-1.18.1 -->

Aux is useless at price data. It'll be convinced the price of an item is 15c if it found one auction with that on its bid price. Don't trust any price numbers it is spitting at you as it is insanely stupid.

## Post 174660 by Zeran (Patch Note Conspiracy Theorist) — 2026-04-10T08:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174660#p174660 | page 1 | era: post-1.18.1 -->

Aux does give you a table of all the different listings if you disagree with what it considers the 100%/base price

