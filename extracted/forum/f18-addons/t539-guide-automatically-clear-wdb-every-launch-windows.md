---
title: "GUIDE: Automatically clear WDB every launch (Windows)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=539"
topic_id: 539
forum_id: 18
forum: "AddOns"
author: "Distortedshadow"
author_authority: "player"
posted: "2019-05-12T00:42:00Z"
last_post: "2026-02-10T19:06:00Z"
post_count: 23
pages: 1
fetched: "2026-09-10T10:20:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# GUIDE: Automatically clear WDB every launch (Windows)

## Post 2766 by Distortedshadow — 2019-05-12T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=2766#p2766 | page 1 | era: pre-1.18.1 -->

Want to be sure you're using the latest and greatest of Turtle Tech (tm) without having to manually delete your WDB folder every so often or when switching between servers? Well, there's a few methods to 'fix' this issue:

Very Easy Method

 1. Delete WDB folder
 2. Create a new Textfile
 3. Name it "WDB" and remove .txt at the end (if you can't see file extensions, you'll have to enable that. Google it, it depends on your OS)

Easy Method

Change WDB's permissions so that nobody can write to it. To do this, right click WDB, hit Properties, go to the Security tab, hit Edit, and you should see a window like this. Change every group or user's permissions to DENY write access. Save and you're finished. (Also make sure WDB is empty, delete anything inside)

![Image](https://puu.sh/DrymG.png)
(thanks musse)

Longer, CMD Method

If the above trick doesn't work for you for whatever reason, make a text file anywhere like Desktop or in your turtle wow directory. Call it Vanilla Wow Launcher or something. Edit it, post the following inside: Code: Select all

```
rmdir /s /q "D:\WoW112\WDB"
START "" "D:\WoW112\Wow.exe"
```

Save it. **Rename those file paths to whatever makes sense for you, obviously, based on where you have your 1.12 WoW directory saved.**

Rename the file's extension from .txt to .bat (you'll have to have extensions showing for this).

From now on, run WoW from your new .bat file instead of the .exe. It'll now delete WDB, launch WoW, and rebuild it.

What is WDB and why do this?

It's just a local cache folder. All that means is that the first time your WoW client sees a creature's name, or your items descriptions or cooldowns or a tooltip of an ability or whatever, it saves that value to your WDB folder so that instead of pulling data from the server the next time you log into the game to figure out what everything in the world 'is', it just uses that local file. **In short, it saves a small amount of web traffic.**

The reason you want to do this is because conflicts can happen and your client will believe incorrect information. For example, a lot of people didn't clear WDB when Survival was introduced, and incorrectly have items that do not work because they claim to require Survival 25 when in fact they only require Survival 1. Also, if two servers have conflicting information about an item, your cache wins and the server loses, and you always want the server to win.

It's entirely safe and the only side effect is a few extra megabytes of web traffic.

*Last edited by Distortedshadow on Mon Apr 17, 2023 5:23 am, edited 6 times in total.*

## Post 2780 by Musse (Barrens Chat Casualty) — 2019-05-12T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=2780#p2780 | page 1 | era: pre-1.18.1 -->

And if you launch two clients? There is no problem deleting the folder "WDB" while the other client is running??
MAYBE it works if just emptying the WDB folder (with DEL instead of RMDIR )?

Then we have the problems with open files in WDB. This probably means not being able to delete files or remove directory.
I.e. that .bat file is probably not "general" - probably doesn't work in dual launch situations ... might even lead to serious problems.

A side note: I have never been able to solve any problem by emptying WBD. I doubt it's very important to do at every launch.

## Post 2781 by Distortedshadow — 2019-05-12T16:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=2781#p2781 | page 1 | era: pre-1.18.1 -->

Hey Musse, thanks for the reply.

Deleting WDB at runtime will cause no problems. Even if it would (ie the file is actively being read, which they won't be) the bat file simply not delete the directory. You can test this yourself by running the game and deleting the WDB cache mid play.

Deleting your local cache can never lead to serious problems, but not deleting it can, if you don't (at a minimum) delete it when you switch servers or when a content patch is released.

You probably just haven't been aware of the issues not clearing your cache has, but they will result in conflicts.

## Post 2782 by Distortedshadow — 2019-05-12T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=2782#p2782 | page 1 | era: pre-1.18.1 -->

I should also add that because Turtle WoW has custom content, your WDB will directly conflict with other 'vanilla' 1.12 servers if you're using the same directory to connect between them. You absolutely should delete it every launch in that case.

## Post 2789 by Musse (Barrens Chat Casualty) — 2019-05-12T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=2789#p2789 | page 1 | era: pre-1.18.1 -->

Seems you are right that the there is no problem deleting WDB during "runtime".

I even tested to make the WDB folder read-only (file security):
If the WDB files are so "destructive" this must be the easiest way? No files are written to the folder.
I just tested, seems to launch game, and everything is working fine. No files in WDB.

## Post 2812 by Distortedshadow — 2019-05-13T01:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=2812#p2812 | page 1 | era: pre-1.18.1 -->

You're right, doing that does work. I didn't even think of changing the actual folder permissions. I'll append that to the guide at the top as the easy solution, thanks!

## Post 4002 by Yutilk (Barrens Chat Casualty) — 2019-09-19T07:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4002#p4002 | page 1 | era: pre-1.18.1 -->

Is there an easier way to do this?

## Post 4006 by Pompa (Patch Note Conspiracy Theorist) — 2019-09-19T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4006#p4006 | page 1 | era: pre-1.18.1 -->

> **Yutilk wrote: Thu Sep 19, 2019 7:31 am**
> Is there an easier way to do this?

Yes, just read the guide of this post.  turtle_tongue_head

## Post 4015 by Musse (Barrens Chat Casualty) — 2019-09-20T02:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4015#p4015 | page 1 | era: pre-1.18.1 -->

> **Distortedshadow wrote: Sun May 12, 2019 12:42 am**
> Easy Method
>
>  Change WDB's permissions so that nobody can write to it. To do this, right click WDB, hit Properties, go to the Security tab, hit Edit, and you should see a window like this. Change every group or user's permissions to DENY write access. Save and you're finished. (Also make sure WDB is empty, delete anything inside)

Changing every user's or group's permissions this way to complicated. And the more complicated, the bigger risk you don't remember what you did. Simple solution is put write deny for "Everyone" (user). That way you only changed one user/group.

You probably are owner of the folder, but better double check that. If not, make yourself (user) owner of the folder - just in case.

## Post 11379 by Totem — 2021-07-23T11:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11379#p11379 | page 1 | era: pre-1.18.1 -->

Hi!

I tried changing all the groups and users acces as said in the "easy mode" tutorial. Now I can't open up the application with the warning sign "This application can't be run as you may not have access to one or several files".
I gave up and try to re-install Turtle WoW just to be met with another warning that i can't delete the files as i'm not administrator.

I must have done something terribly wrong, any way to troubleshoot this?

Sincerely,
Totem

## Post 11650 by Damryx — 2021-08-13T20:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11650#p11650 | page 1 | era: pre-1.18.1 -->

I searched and cannot find any WDB files in my TurtleWoW folder. what should i does?

## Post 14948 by Manateufel — 2021-12-28T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14948#p14948 | page 1 | era: pre-1.18.1 -->

**Very Easy Solution**

 1. Delete WDB folder
 2. Create a new Textfile
 3. Name it "WDB" and remove .txt at the end (search web how to see such things)
Have fun

## Post 50213 by Imam — 2023-06-16T02:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50213#p50213 | page 1 | era: pre-1.18.1 -->

Thank you ！it helps me a lot ，very good guide ！  turtle_in_love

## Post 79811 by Daniknez — 2023-12-04T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79811#p79811 | page 1 | era: pre-1.18.1 -->

Any know about error like FrameXML folder delete in Interface. I cant enter in game...Thanks

## Post 93703 by Ashwhole (Barrens Chat Casualty) — 2024-04-28T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93703#p93703 | page 1 | era: pre-1.18.1 -->

> **Manateufel wrote: Tue Dec 28, 2021 6:05 pm**
> **Very Easy Solution**
>
>  1. Delete WDB folder
>  2. Create a new Textfile
>  3. Name it "WDB" and remove .txt at the end (search web how to see such things)
>  Have fun

This how you show file name extensions such as .txt in windows 10

[https://fileinfo.com/help/windows_10_sh ... extensions](https://fileinfo.com/help/windows_10_show_file_extensions)

## Post 93706 by Grizb37 (Grandmaster of Forum PvP) — 2024-04-28T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93706#p93706 | page 1 | era: pre-1.18.1 -->

I wouldn't recommend clearing it everytime... Makes your ui loading take abit longer everytime you log in, I'd just clear it manually once every week when they release the weekly updates.

## Post 93710 by Ashwhole (Barrens Chat Casualty) — 2024-04-28T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93710#p93710 | page 1 | era: pre-1.18.1 -->

> **Manateufel wrote: Tue Dec 28, 2021 6:05 pm**
> **Very Easy Solution**
>
>  1. Delete WDB folder
>  2. Create a new Textfile
>  3. Name it "WDB" and remove .txt at the end (search web how to see such things)
>  Have fun

I have only tried this method for a few hours but it seems to be working perfectly fine even with 2 accounts running at the same time. I had to enable extensions in windows to see the .txt and remove it from the file.

## Post 98748 by Secretbossfight — 2024-07-07T02:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98748#p98748 | page 1 | era: pre-1.18.1 -->

I use Python to accomplish this. I actually have a .py script that deletes the WDB folder, copies my password to the clipboard, and starts the game. Do mind that this means storing your password as a string in plain text in the .py file, but if your Turtle WoW password is unique (and it should be!) then you minimize the risk.

## Post 152234 by Iwonnviolet — 2025-09-18T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152234#p152234 | page 1 | era: pre-1.18.1 -->

> **Grizb37 wrote: Sun Apr 28, 2024 8:06 pm**
> I wouldn't recommend clearing it everytime... Makes your ui loading take abit longer everytime you log in, I'd just clear it manually once every week when they release the weekly updates.

I also recommend this method, removing it from time to time. Works good for me :)

## Post 152910 by TR0Y — 2025-09-24T05:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152910#p152910 | page 1 | era: pre-1.18.1 -->

Simple my script autohotkey for clear folder WoW   happy_turtle_head

 ****capability****:
- Clear "WDB" folder
- Clear "Errors" folder
- Clear all *.log files in WoW folder
- Clear *.BAK files addons options in *..\WTF\Account\*AccountName*\*RealmName*\*NickName** all realms folders characters
- Clear DirectX folder cache
 ****how to use?****
- Download the file and move it to the root folder of the game client and run it

---
[>>> Download <<<](https://drive.google.com/file/d/1z3grGTNb9y4jnEUwtlwsmZe4BuZXTrbj/view?usp=sharing)
---
 **Source script**:Code: Select all

```
#Requires AutoHotkey v2.0

if (!DirExist(A_ScriptDir "\WDB")) {
msgbox("ERROR!`nThe current folder is not a WoW client folder`n`n>> COPY OR MOVE THIS SCRIPT FILE TO THE WOW CLIENT'S ROOT FOLDER <<")
ExitApp
}

Result := MsgBox("Clear *.wdb files cache?",, "y/n")
if Result = "yes" {
if (DirExist(A_ScriptDir "\WDB")) {																																																																						; if "wdb" folder exist
FileDelete(A_ScriptDir "\WDB\*.wdb")																																																																					; delete
}
}

Result := MsgBox("Clear temporary *.DMP(error reports)?",, "y/n")																																																								; dump(error reports) temp. files
if Result = "yes" {
if (DirExist(A_ScriptDir "\Errors")) {
FileDelete(A_ScriptDir "\Errors\*.dmp")
FileDelete(A_ScriptDir "\Errors\*.txt")
}
}

Result := MsgBox("Clear temporary *.LOG files?",, "y/n")																																																													; logs files
if Result = "yes" {
FileDelete(A_ScriptDir "\*.log")
FileDelete(A_ScriptDir "\*.log.?")
Loop Files, A_ScriptDir "\*.log", "R"  																																																																					; R - recurse into subfolders
{
FileRecycle(A_LoopFilePath)
}
}

Result := MsgBox("Clear temporary *.BAK backup addon's files?",, "y/n")																																																					; BAKup files addons options in ..\WTF\Account\*AccountName*\*RealmName*\*NickName*
if Result = "yes" {
Loop Files, A_ScriptDir "\*.bak", "R"
{
FileRecycle(A_LoopFilePath)
}
}

Result := MsgBox("Clear DirectX folder cache?",, "y/n")
if Result = "yes" {
if (DirExist("C:\Users\" A_UserName "\AppData\Local\D3DSCache")) {																																																						; clear DirectX folder cache
DirDelete("C:\Users\" A_UserName "\AppData\Local\D3DSCache", true)
}
if not(DirExist("C:\Users\" A_UserName "\AppData\Local\D3DSCache")) {																																																				; create cache folder DirectX again, if it deleted
DirCreate "C:\Users\" A_UserName "\AppData\Local\D3DSCache"
}
}

msgbox("Cleaning WoW folder is complete!")
```

## Post 163507 by Frionaise — 2025-12-22T21:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163507#p163507 | page 1 | era: 1.18.1-announced-pre-release -->

A nice to the point and easy to follow guide with good screen shots. Thumbs up from a windows admin and thank you.

## Post 165619 by Ankerdankerf — 2026-01-19T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165619#p165619 | page 1 | era: 1.18.1-announced-pre-release -->

> **Manateufel wrote: Tue Dec 28, 2021 6:05 pm**
> **Very Easy Solution**
>
>  1. Delete WDB folder
>  2. Create a new Textfile
>  3. Name it "WDB" and remove .txt at the end (search web how to see such things)
>  Have fun

This is the only one really easy solution.
Don't do something strage in your registy or change permissions.

## Post 167904 by Ravenofseven72 (Barrens Chat Casualty) — 2026-02-10T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167904#p167904 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ankerdankerf wrote: Mon Jan 19, 2026 4:33 pm**
> > **Manateufel wrote: Tue Dec 28, 2021 6:05 pm**
> > **Very Easy Solution**
> >
> >  1. Delete WDB folder
> >  2. Create a new Textfile
> >  3. Name it "WDB" and remove .txt at the end (search web how to see such things)
> >  Have fun
>
>   This is the only one really easy solution.
>  Don't do something strage in your registy or change permissions.

i dont know where, but it gives a setting for this. i only need to delete the WDB Folder, after next start there is a new One :) . In Launcher , under Settings, "clean wdb on each launch" .

