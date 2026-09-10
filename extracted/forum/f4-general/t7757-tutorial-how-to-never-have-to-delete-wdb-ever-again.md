---
title: "[TUTORIAl] How to never have to delete WDB ever again"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7757"
topic_id: 7757
forum_id: 4
forum: "General"
author: "Allwynd01"
author_authority: "player"
posted: "2023-06-11T14:50:00Z"
last_post: "2025-12-02T03:37:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T09:38:32Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [TUTORIAl] How to never have to delete WDB ever again

## Post 49655 by Allwynd01 (Bug Report Enthusiast) — 2023-06-11T14:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49655#p49655 | page 1 | era: pre-1.18.1 -->

A little backstory...

Usually there is a suggestion that if something is wrong with the game to delete the WDB folder. I tried a few options to make it so the folder never gets created in the first place, I tried setting it to Read-Only, but that didn't work.

At the same time I was looking for a solution to prevent the malware known as Microsoft Edge of automatically reinstalling on my Windows 11 every time I check for updates and I found a solution for that, which I thought "what if I use it to solve the WDB problem with Turtle WoW so people never have to delete WDB again?"

The solution itself is very simple - you have disable inheritance for the folder, which makes it so nobody on the computer is authorized to modify the folder or its contents, the only way to bypass it is to use Regedit to add the option "Take ownership" to the right click context menu.

Here with screenshots I've explained what needs to be done:

 1. Delete WDB with Shift+Del and create a new one to make sure it's empty.
 2. Right click it and go into Properties -> Security - > Advanced
 3. Under Permissions you click "Disable Inheritance" and  you get a prompt and choose "disable all inherited permissions from this object"
 4. Click Apply, confirm "Yes"

![Image](https://i.ibb.co/sC9ymgx/image.png)

If you have succeeded, trying to open the folder should result in the following error.

![Image](https://i.ibb.co/JFN92SD/image.png)

And it's done. From now on the WDB folder becomes locked and nobody can write inside it so it stays empty, effectively not creating any database so you never have to delete it ever again, this can also eliminate a lot of problems with the game and if you have further problems, you will be 120% sure that they are not WDB-related.

## Post 88972 by Oscar2390 — 2024-02-28T22:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88972#p88972 | page 1 | era: pre-1.18.1 -->

Thanks for the tutorial!

## Post 88992 by Vision0228 — 2024-02-29T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88992#p88992 | page 1 | era: pre-1.18.1 -->

How does implementing this affect the game? Does your client have to query the server for everyting everytime you log into the game? Does it result in lags and freezes?

## Post 89059 by Bigsmerf (Grandmaster of Forum PvP) — 2024-02-29T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89059#p89059 | page 1 | era: pre-1.18.1 -->

Is it weird that I've pretty much never had the need to delete my WDB before? I just hardly run into problems... Maybe it's the minimal addons I use?

## Post 89096 by Terry1054 — 2024-03-01T07:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89096#p89096 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Sun Jun 11, 2023 2:50 pm**
> A little backstory...
>
>  Usually there is a suggestion that if something is wrong with the game to delete the WDB folder. I tried a few options to make it so the folder never gets created in the first place, I tried setting it to Read-Only, but that didn't work.
>
>  At the same time I was looking for a solution to prevent the malware known as Microsoft Edge of automatically reinstalling on my Windows 11 every time I check for updates and I found a solution for that, which I thought "what if I use it to solve the WDB problem with Turtle WoW so people never have to delete WDB again?"
>
>
>
>
>
>  The solution itself is very simple - you have disable inheritance for the folder, which makes it so nobody on the computer is authorized to modify the folder or its contents, the only way to bypass it is to use Regedit to add the option "Take ownership" to the right click context menu.
>
>  Here with screenshots I've explained what needs to be done:
>
>  1. Delete WDB with Shift+Del and create a new one to make sure it's empty.
>  2. Right click it and go into Properties -> Security - > Advanced
>  3. Under Permissions you click "Disable Inheritance" and  you get a prompt and choose "disable all inherited permissions from this object"
>  4. Click Apply, confirm "Yes"
>
>
>
>  ![Image](https://i.ibb.co/sC9ymgx/image.png)
>
>
>  If you have succeeded, trying to open the folder should result in the following error.
>
>  ![Image](https://i.ibb.co/JFN92SD/image.png)
>
>  Thanks for the great guide! I really like this game. However, lately I have not had enough time due to studying. I completely understand how difficult it is to balance gaming and homework. Personally, I found this wonderful service <https://essayusa.com/do-my-homework/> which helps me when things get unbearable. Their trusted experts help me with my assignments, allowing me to focus more on the quests and worry less about deadlines. Give it a try - it might just be the secret weapon you need to conquer Azeroth and the scientists!
>  And it's done. From now on the WDB folder becomes locked and nobody can write inside it so it stays empty, effectively not creating any database so you never have to delete it ever again, this can also eliminate a lot of problems with the game and if you have further problems, you will be 120% sure that they are not WDB-related.

It`s interesting. Thanks!

*Last edited by Terry1054 on Fri Mar 01, 2024 11:00 am, edited 2 times in total.*

## Post 89117 by Calli (Patch Note Conspiracy Theorist) — 2024-03-01T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89117#p89117 | page 1 | era: pre-1.18.1 -->

> **Bigsmerf wrote: Thu Feb 29, 2024 3:33 pm**
> Is it weird that I've pretty much never had the need to delete my WDB before? I just hardly run into problems... Maybe it's the minimal addons I use?

Yes it is for sure. Addons make it complicated. You are really need to use no more than 4-7 addons to be efficient in all aspects.

## Post 89127 by Grizb37 (Grandmaster of Forum PvP) — 2024-03-01T13:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89127#p89127 | page 1 | era: pre-1.18.1 -->

> **Calli wrote: Fri Mar 01, 2024 10:50 am**
> > **Bigsmerf wrote: Thu Feb 29, 2024 3:33 pm**
> > Is it weird that I've pretty much never had the need to delete my WDB before? I just hardly run into problems... Maybe it's the minimal addons I use?
>
>   Yes it is for sure. Addons make it complicated. You are really need to use no more than 4-7 addons to be efficient in all aspects.

It's more for when the Devs change items if you don't delete WDB you'll see the old version until you do. So you could be seeing wrong stats on gear.

## Post 160258 by SvenS2 (Bug Report Enthusiast) — 2025-11-21T17:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160258#p160258 | page 1 | era: 1.18.1-announced-pre-release -->

Hello, how can I revert this? I've tried several methods online, but I can't seem to revert ownership

## Post 160437 by Allwynd01 (Bug Report Enthusiast) — 2025-11-23T17:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160437#p160437 | page 1 | era: 1.18.1-announced-pre-release -->

> **SvenS2 wrote: Fri Nov 21, 2025 5:10 pm**
> Hello, how can I revert this? I've tried several methods online, but I can't seem to revert ownership

Funny thing is that since 2024 I use Linux Mint and I don't have access to Windows and I don't remember a the deeper tricks in Windows, but try the following:

As the tutorial states:

> The solution itself is very simple - you have disable inheritance for the folder, which makes it so nobody on the computer is authorized to modify the folder or its contents, the only way to bypass it is to use Regedit to add the option "Take ownership" to the right click context menu.

You have to use Regedit and add the option "Take Ownership" to the context menu.

Use this guide to add the option to your context menu:

[https://www.tenforums.com/tutorials/384 ... -10-a.html](https://www.tenforums.com/tutorials/3841-add-take-ownership-context-menu-windows-10-a.html)

After that I think you have to right click the WDB folder, select "Take Ownership", which from I remember is the highest level of authority on Windows... assuming your user account is also an administrator.

From that point on the easiest would be to select the folder and press SHIFT+DEL on your keyboard so you can securely delete the folder.

After that just log into the game and the game should create its own WDB folder.

## Post 160574 by SvenS2 (Bug Report Enthusiast) — 2025-11-24T19:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160574#p160574 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks, I'll give it a try!

## Post 161149 by Ironbob (Barrens Chat Casualty) — 2025-12-01T04:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161149#p161149 | page 1 | era: 1.18.1-announced-pre-release -->

U can just use the launcher.
Cog then always delete wdb at start of game

## Post 161197 by SvenS2 (Bug Report Enthusiast) — 2025-12-01T12:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161197#p161197 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ironbob wrote: Mon Dec 01, 2025 4:35 am**
> U can just use the launcher.
>  Cog then always delete wdb at start of game

Valid now, but it didn't use to have that feature back when this was posted

## Post 161206 by Snkx (Patch Note Conspiracy Theorist) — 2025-12-01T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161206#p161206 | page 1 | era: 1.18.1-announced-pre-release -->

Deleting it everytime is unnecessary imo, just causes longer load times when you first log in as nothing is cached.

I'd only delete it once a week when the updates are published or if you run into a bug.

## Post 161279 by Sleeplust (Patch Note Conspiracy Theorist) — 2025-12-02T03:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161279#p161279 | page 1 | era: 1.18.1-announced-pre-release -->

Nice solution. I have the Deleting WDB function enabled on official launcher and I'm not sure how many glitches I've encountered relates to WDB folder. Another question: Would game errors pop up when the game itself finds it unable to modify WDB?

