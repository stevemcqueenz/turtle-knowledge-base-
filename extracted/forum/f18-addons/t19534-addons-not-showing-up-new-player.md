---
title: "Addons Not Showing Up - New Player"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19534"
topic_id: 19534
forum_id: 18
forum: "AddOns"
author: "TigerProphet"
author_authority: "player"
posted: "2025-05-25T19:16:00Z"
last_post: "2025-05-27T16:14:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:25:37Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Addons Not Showing Up - New Player

## Post 132971 by TigerProphet — 2025-05-25T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132971#p132971 | page 1 | era: pre-1.18.1 -->

Hi,
I feel silly for bringing up something that I feel should be so easy.  I got all signed up and being an old (like 12yrs ago) WoW player I know how important addons can be.  So I researched, went to the main addons page, downloaded, installed an setup GitAddons Manager.  I loaded in the suggested addons and then there is no Addons button at character screen.  Nor can I get to things like pfUI from /pfui in game.  I've been at this for hours w/ chatgpt and Google.  I have no idea what the problem is, I've been through every folder to check the .toc files, checked to be sure there were no master designation on file names etc and everything looks good.  I see that the TurtleWoW launcher has an Addon feature, maybe that is the ticket?  I thought that using the GitAddons Manager would make this easier.  Sorry if I am being a newb but this is kind of sucking the fun out of it.  I am going to play without them but it would be nice to have Questie etc.  Any help or wise words would be greatly appreciated.

## Post 133066 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-05-26T13:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133066#p133066 | page 1 | era: pre-1.18.1 -->

GitAddons Manager may misplace files.
Instead use the TurtleWoW launcher's built-in AddOns tab.
Or put each addon's folder into \Interface\AddOns\ directly.

At the end of the day, the files have to be in Interface\AddOns and the foldername must
match the .toc file name. So "pfUI" as foldername and "pfUI.toc" for the toc-file.

Thats the basic rules for AddOn loadup by the WoW engine.
If no AddOns are in your Interface\AddOns folder, then they wont show up in the character sleection screen.

## Post 133088 by TigerProphet — 2025-05-26T16:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133088#p133088 | page 1 | era: pre-1.18.1 -->

Thanks so much for the reply.  Yeah, all of the addons are in the Addons folder and I checked and the folder name of each matches the .toc.  So I don't understand why none of them are appearing.  I guess I'll just delete them and stat over.  I saw a video of someone and they were taking the links to each blue folder under GitHub where I was going up the "Code" button where I grabbed the main GitHub address.  I saw that it brought in the needed supporting files (ie bagnon is a group of addons).  Anyway, I'm a long way out of my wow and addon days (last played in like 2010-2011) so I never had these kinds of issues (we had Curse and the like to manage this stuff).

Anyhow, this is what the addon site recommended and so I thought it would make it easier.  Oh well.

BTW - I've seen some posts on pfUI having issues and people talking about SuperWoW being the fix.  I'd never heard of SuperWoW but thought it was no longer supported and could break.  I mean I just want some quality of life upgrades (ie Questie) and maybe if I stick with it threat meters etc.  Maybe I should have tried Shagu, though it wouldn't fix everything.

Thanks so much for replying, its been like poking around in a dark room lol

Have a great day!

## Post 133134 by TigerProphet — 2025-05-26T23:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133134#p133134 | page 1 | era: pre-1.18.1 -->

I figured it out.  I installed Turtle Wow in a specific place and followed all instructions.  I deleted it all out to start over, downloaded an addon from the launcher, saw it worked, went to find it and my addon folder was still empty.  Turns out the game was looking under a different path under the user and Local...in there was another full path to TurtleWow/interface/addons.  I put everything in there and it worked.  Now I just need to figure out this SuperWoW thing I keep hearing about.

Have a great one!

## Post 133174 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-05-27T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133174#p133174 | page 1 | era: pre-1.18.1 -->

Turtle Launcher causes sime issues lately lol. A friend if mine had a bug with it too, but a different one.

Btw pfui doesnt have any problems, it works great and Shagu is always maintaining it.
Superwow just adds some more functionality and fixes Vanilla Client bug for casting bars,
wich isnt pfuis fault.

Glad it all worked out, even tho Its hard to believe that the addon folder where your wow.exe
is located at was properly populated. But still glad it works now.

## Post 133213 by TigerProphet — 2025-05-27T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133213#p133213 | page 1 | era: pre-1.18.1 -->

Yeah, it was so weird that the path that drills down through the user>AppData>Local>TurtleWow>Interface>Addons is where the game was looking for addons vs say C:/Games/TurtleWow/Interface/Addons (where the .exe is).  Makes no sense to me and I haven't seen anyone with that same issue.  I am hoping there isn't some kind of issue there...I know my system does not like me messing w/ that path as it is less secure and can wreak havoc is malware got in there etc.  If there are thoughts, from those more technically inclined than I, feel free to weigh in.

Thanks for talking about SuperWoW.  I really don't understand it tbh (ie is it maintained, what does it really do, benefits, etc) especially if I was going to just use the regular TurtleWow Launcher (unless there is a benefit not to).  In trying to follow those instruction (not the.dll version to amend the launcher) I got all twisted yesterday and gave up lol.

