---
title: "Working  Auctioneer (DOWNLOAD+INSTRUCTIONS)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1645"
topic_id: 1645
forum_id: 18
forum: "AddOns"
author: "Sweddybawls"
author_authority: "player"
posted: "2021-03-13T08:35:00Z"
last_post: "2025-09-20T20:27:00Z"
post_count: 26
pages: 1
fetched: "2026-09-10T10:23:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Working  Auctioneer (DOWNLOAD+INSTRUCTIONS)

## Post 9747 by Sweddybawls — 2021-03-13T08:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9747#p9747 | page 1 | era: pre-1.18.1 -->

One of the first things on a new server for me to do is getting some  auction helper to peddle my harvested herbs and skinned skins.

After some searching on this forum i  kept failing to get my preferred addon, Auctioneer working.
I tried Aux, but it's not what i'm used to and it doesn't do what i want, or i just don't know how to use it properly.

I've been trying to get Auctioneer to work and finally achieved success and so now i share my gained knowledge here for other vanilla newbs that are looking to get this addon working.

 **STEP 1: Download all the files**

You will need Auctioneer itself, plus two others that Auctioneer depends on to function properly.
Follow the below links and down all 3 files.
Also i will be ssuming that you install this on a fresh WoW client install, you can "reset" your install by deleting the WTF folder found in the Turtle WoW Client folder.
If you already have many addons setup you might want to omit this, but depending on earlier failed attempts to install Auctioneer (especially Stubby) you might encounter errors, for those see below.

 -Auctioneer: <https://legacy-wow.com/vanilla-addons/Auctioneer/>
 -EnhTooltip: <https://legacy-wow.com/vanilla-addons/EnhTooltip/>
 -Stubby: <https://legacy-wow.com/vanilla-addons/Stubby/>

 **STEP 2: Extract the files in your addon folder**

The easiest way to do this is just copy all three downloaded .ZIP files into you wow addon folder.
For a standard Turtle wow install this would be X:\Turtle WoW\Interface\Addons (remember to change X to the drive letter where you installed the Turtle  Wow Client)

Once copied extract the files. I'm using WINRAR([https://www.win-rar.com/start.html?&L=0)](https://www.win-rar.com/start.html?&L=0%29) for this but other like 7ZIP might work too.
In Windows just right-click the .ZIP files and select "**Extract here**"
 **RENAME** the newly extracted folders to remove any bit containing "-".
Having a dash in the addon folder name will prevent the client from loading the addon.
So RENAME the folder Auctioneer-Vanilla-Master or Auctioneer-Master to just plain "Auctioneer".

 **Step 3: Launch WoW, login and enable Addons**

Once properly extracted you can now launch the client and login.
After login at the character selection screen at the bootm right corner you will see a button marked "addons"
When you click the button a list of installed addons will  be shown.
Make sure to ENABLE "load out of date addons" and ENABLE "Auctioneer", "EnhTooltip"  and "Stubby"
Click ok and you can now enter the game with the addon loaded.

 **Note 1:**

Veteran user of Auctioneer in a newer expansion might expect the "SCAN" button but it's missing when at the auction master in this version.
In this older version that button is not yet implemented, so to scan the auctions just go to the auction master and type "/auctioneer scan" in the chat.

 **Note 2:**
It is important to understand you tried this on a fresh/clean client or things might go wrong.
My biggest issue was that i tried wrong/not working addons before, and cached data was interfering with this correct addons.
I kept getting errors upon login about Stubby getting a NIL value.
If you get something similar, try deleting the old addon .LUA file that you might already have.
In case of stubby i had to delete X:\\Turtle WoW\WTF\ Account\"Your account name"\Saved Variables\Stubby.lua (again Change X with your client installation drive and insert your account name)
If you have separate configurations for your addons per character look for the files in X:\\Turtle WoW\WTF\ Account\"Your account name"\Turtle Wow\"Your character name(s)"\Saved variables\Stubby.lua
(above info referenced from the Nostalrius forums: [https://nostalrius.org/viewtopic.php?f= ... 7&start=10](https://nostalrius.org/viewtopic.php?f=63&t=3615&start=10))

Congrats, your addon  should now be working and you're well on your way to WoW-richdom .

Happy trading!

## Post 9831 by Vaelen007 — 2021-03-21T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9831#p9831 | page 1 | era: pre-1.18.1 -->

Excellent guide. Can you get Informant to work now? :D

## Post 16995 by Chouette — 2022-02-12T15:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16995#p16995 | page 1 | era: pre-1.18.1 -->

When you download the auctineer map file / addon don't forget to change the file name from Auctioneer-Vanilla-master > Auctioneer

So cut off the -Vanilla-master part, after this the game seems to recognize the addons as being there (in the interface > addons). Same principle seemed to apply for the 'Vanilla Plus' Private Server when I tried.

Thanks for sharing the guide, wil try out:
 -Auctioneer: <https://legacy-wow.com/vanilla-addons/Auctioneer/>
 -EnhTooltip: <https://legacy-wow.com/vanilla-addons/EnhTooltip/>
 -Stubby: <https://legacy-wow.com/vanilla-addons/Stubby/>

Mentioned by Topic Starter today.

I was secretly hoping for a alpha/vanilla client working Tradeskillmaster addon version like the one Classic WoW has but it seems this is the best next option till this date.

## Post 16998 by Geojak (Grandmaster of Forum PvP) — 2022-02-12T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16998#p16998 | page 1 | era: pre-1.18.1 -->

Can I ask, what feature of auctioneer were you missing for aux?

## Post 38071 by Grauhase — 2023-03-17T11:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38071#p38071 | page 1 | era: pre-1.18.1 -->

Thank you so much!
I'm new to the server...
They should pin this post right besides the Auctioneer link in the addons page:
[viewtopic.php?f=18&t=874](https://forum.turtlecraft.gg/viewtopic.php?f=18&t=874)

## Post 38162 by Reploidrocsa (Bug Report Enthusiast) — 2023-03-18T08:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38162#p38162 | page 1 | era: pre-1.18.1 -->

Does the scan feature still take +20min to scan the whole AH?

## Post 38279 by Xudo (Grandmaster of Forum PvP) — 2023-03-20T04:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38279#p38279 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sat Feb 12, 2022 8:31 pm**
> Can I ask, what feature of auctioneer were you missing for aux?

Not exactly a features of auctioneer, but I miss following:

Searching for alternatives. For example when I search for Runecloth Bag(14 slot), I'd like to see Journeyman Backpack (14slot) too.

In "post" window when I choose green item with random suffix (of the bear) I would like to see all items of the type with different suffixes (of power, of the wolf etc).

Reuse of dataset. When I choose item in "post" tab, it shows result of the search. When I switch to "search" tab and search for exactly same item, I'd like to see same result of the search in this tab. Or at least button "buyout" in "post" tab.

Calculation of cost price. For example I am alchemist. I want to choose some specific recipe and see how much will it cost to craft 10, 20, 100 units of it using materials from AH.

## Post 38297 by Szachmatsky — 2023-03-20T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38297#p38297 | page 1 | era: pre-1.18.1 -->

Thank you for this!!!

## Post 41269 by Sixgun — 2023-04-12T14:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41269#p41269 | page 1 | era: pre-1.18.1 -->

Anyone else having problems with Auctioneer splitting up stacks incorrectly?

For instance, I want to post 4 stacks @ 5pc ea.
...but when you hit post auctions, it splits it 2 @ 5ea, and 1 @ 10ea.

I have resorted to manually sorting stacks, it's a pia.

## Post 43202 by Faldomir — 2023-04-26T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43202#p43202 | page 1 | era: pre-1.18.1 -->

I installed it without issues but it is SLOW - it's telling me I have 2+ more hour to wait to finish my scan at 5 auctions a second

## Post 43232 by Belphegore — 2023-04-26T14:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43232#p43232 | page 1 | era: pre-1.18.1 -->

> **Faldomir wrote: Wed Apr 26, 2023 1:24 pm**
> I installed it without issues but it is SLOW - it's telling me I have 2+ more hour to wait to finish my scan at 5 auctions a second

Is that not simply a vanilla limitation? I remember it being the same back in 2004/2005.
Would love if this is not the case though.

## Post 43430 by Mel7588 — 2023-04-27T15:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43430#p43430 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sat Feb 12, 2022 8:31 pm**
> Can I ask, what feature of auctioneer were you missing for aux?

Appraiser, but this version of Auctioneer does not have it either. That is the only worthwhile feature. The rest is manual anyway.

## Post 43501 by Geojak (Grandmaster of Forum PvP) — 2023-04-27T20:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43501#p43501 | page 1 | era: pre-1.18.1 -->

What is appraiser? I don't use auctioneer

## Post 44289 by Danesh — 2023-05-03T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44289#p44289 | page 1 | era: pre-1.18.1 -->

The Scan is too low. Do you have any kind of solution? Auctions per second are very slow and it tells me that it would take hours to finish.

## Post 44291 by Spoing — 2023-05-03T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44291#p44291 | page 1 | era: pre-1.18.1 -->

Ive scanned the AH and it does take a long time. The first few minutes it seems to scan rare stuff so it does like 5 items per scan pulse. But then it starts picking up speed and you get the real timer. Still, it took at least 1 hour+ to do a full scan. The limitation is that youre only allowed to do a search every few seconds, and since the scan basically does a ton of searches it is held back by this limitation. Doesnt help that some people spam the AH with a ton of 1 stacks, so you spend 5 minutes scanning a ton of 1 light leather stacks.

## Post 44300 by Danesh — 2023-05-03T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44300#p44300 | page 1 | era: pre-1.18.1 -->

> **Spoing wrote: Wed May 03, 2023 4:54 pm**
> Ive scanned the AH and it does take a long time. The first few minutes it seems to scan rare stuff so it does like 5 items per scan pulse. But then it starts picking up speed and you get the real timer. Still, it took at least 1 hour+ to do a full scan. The limitation is that youre only allowed to do a search every few seconds, and since the scan basically does a ton of searches it is held back by this limitation. Doesnt help that some people spam the AH with a ton of 1 stacks, so you spend 5 minutes scanning a ton of 1 light leather stacks.

Thanks for the information   turtle_in_love_head

## Post 44668 by Duckwarrior — 2023-05-06T07:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44668#p44668 | page 1 | era: pre-1.18.1 -->

Heys,thank u post!
But i can't download that three addons,when i click DOWNLOAD button, then page change to Oops! That page can’t be found.
Do u know any other ways to download it?

## Post 44669 by Duckwarrior — 2023-05-06T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44669#p44669 | page 1 | era: pre-1.18.1 -->

ok it's network error , just try more
thanks!

## Post 45838 by Lipidus — 2023-05-14T14:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45838#p45838 | page 1 | era: pre-1.18.1 -->

hey guys. Iam getting this message kinda forever...

"Current page took more than 20 seconds to complete, retrying page"

Any solution for that?

cheers

## Post 46002 by Monkeywrench — 2023-05-16T01:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46002#p46002 | page 1 | era: pre-1.18.1 -->

Thanks for this, would appreciate an update if there is a newer version we can use on TurtleWoW, love the server, love the community, best private server i've seen so far. Used to play on Elysium and Nostalrius.

## Post 69256 by Yifopek — 2023-10-06T21:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69256#p69256 | page 1 | era: pre-1.18.1 -->

is this use-able for anybody in current turtle wow server conditions?

For me when I start scanning it stops as soon as I'm marked as AFK after a few minutes, when I notice and make it start again it restarts from beginning. And since it would take hours I have no chance of every finishing a full scan - which makes the displayed statistics and all the advanced features useless.

Aux has the "continue scan" feature when the scan is canceled due to AFK which makes it superior, even though it's way to present the information is much less to my liking.

## Post 115667 by Jakob2803 — 2025-01-06T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115667#p115667 | page 1 | era: pre-1.18.1 -->

Thanks, this worked fine with no errors.
For the Auctioneer folder, remember to remove "-vanilla" as well as -master. But that is covered in the OP as well.  happy_turtle_head

> **Yifopek wrote: Fri Oct 06, 2023 9:40 pm**
> is this use-able for anybody in current turtle wow server conditions?

 1829 pages and it tells me 2,5 hours remaining. Might be too long to wait.
Also I expected it to automatically check listing when trying to post an item, but this doesn't seem to happen.

## Post 133626 by Gustavro — 2025-05-30T09:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133626#p133626 | page 1 | era: pre-1.18.1 -->

Hi, all seems to work but when I run WoW a "Interface\Addons\Stubby.lua:630: attempt to index global `Stubby config' (a nil value)" pop up appears and Auctioneer doesn't work.

Anyone knows how to fix this?

## Post 140425 by Deafguy1964 — 2025-07-19T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140425#p140425 | page 1 | era: pre-1.18.1 -->

Does anyone have a link to a working Auctioneer add on for Turtle WoW?

## Post 148654 by Remimayner — 2025-08-27T13:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148654#p148654 | page 1 | era: pre-1.18.1 -->

Made all by this instruction (with different replacement scenarios cus some files appears in addon parts), but I got dependency missing in addon menu. Maybe this is because the launcher doesn't work for me?

## Post 152493 by Traintech (Barrens Chat Casualty) — 2025-09-20T20:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152493#p152493 | page 1 | era: pre-1.18.1 -->

Thanks for the guide but from the links provided, I somehow, have a scan button. Things seem to be working though. As for the complaints on how long it takes to scan: You are scanning every single page of the AH. This is going to take time.

