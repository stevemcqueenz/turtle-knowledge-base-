---
title: "failed to read directory at path: with error: The system cannot find the path specified. (os error 3)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20967"
topic_id: 20967
forum_id: 3
forum: "Help & Support"
author: "Chimkin"
author_authority: "player"
posted: "2025-08-15T17:39:00Z"
last_post: "2025-09-25T15:33:00Z"
post_count: 21
pages: 1
fetched: "2026-09-10T08:39:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# failed to read directory at path: with error: The system cannot find the path specified. (os error 3)

## Post 145840 by Chimkin — 2025-08-15T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145840#p145840 | page 1 | era: pre-1.18.1 -->

Had issues with the update so I uninstalled and re-installed now this is the error message I receive.

failed to read directory at path: with error: The system cannot find the path specified. (os error 3)

Any ideas what could be the cause of this now?

## Post 145897 by Agorilla — 2025-08-15T19:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145897#p145897 | page 1 | era: pre-1.18.1 -->

I'm new to Turtle WoW and I'm getting the same error.

I have two SSDs and tried various locations in both. The program is currently installed in "D:\Games\TurtleWoW" but I've tried my user profile "C:\Users\Username\Games\TurtleWoW" with the same effect.

Here are the Logs:
[2025-08-15 09:31:22.165] [info] [SETUP]
───────────────────
│ Launcher v2.2.0 │
───────────────────
[2025-08-15 09:31:22.221] [info] [STRONGHOLD] Loaded
[2025-08-15 09:31:22.237] [info] [Fetch] Cache miss for "/api/mirrors"
[2025-08-15 09:31:32.473] [info] [PATCHER] Config.wtf successfully patched
[2025-08-15 09:31:32.473] [info] [CONFIG] Applied preset none
[2025-08-15 09:31:32.479] [info] [UPDATER] Launching client at ""
[2025-08-15 09:31:32.479] [info] [Fetch] Cache miss for "/api/regions"
[2025-08-15 09:31:32.479] [info] [Fetch] Cache miss for "/api/versions"
[2025-08-15 09:31:32.924] [warn] [SETUP] Region "undefined" not found, resetting account
[2025-08-15 09:31:45.268] [info] [AUTH] Logged in as Username@EU
[2025-08-15 09:31:45.274] [info] [UPDATER] Launching client at ""
[2025-08-15 09:31:45.278] [info] [ADDONS] Verifying...
[2025-08-15 09:31:45.287] [info] [Fetch] Cache miss for "/api/news/tweets"
[2025-08-15 09:31:45.288] [info] [Fetch] Cache miss for "/api/news/changelogs"
[2025-08-15 09:31:45.410] [info] [UPDATER] Verifying client files at ""...
[2025-08-15 09:31:45.412] [info] [Fetch] Cache miss for "/api/manifest?build=exe&version=EU&language=en"
[2025-08-15 09:31:47.954] [info] [API] Logging activity "verify_failed" Detail:
"failed to read directory at path: with error: The system cannot find the path specified. (os error 3)"
[2025-08-15 09:31:47.954] [error] [UPDATER] Verification failed failed to read directory at path: with error: The system cannot find the path specified. (os error 3)
[2025-08-15 09:31:47.959] [warn] [UPDATER] WoW.exe not found
[2025-08-15 09:31:54.181] [info] [UPDATER] Verifying client files at ""...

## Post 145920 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-08-15T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145920#p145920 | page 1 | era: pre-1.18.1 -->

**IF YOU'RE GETTING: "Error: Verify your game data by clicking RETRY" FOLLOW THESE STEPS**

 1. Close the Launcher if you have it open.
 2. Open appdata: To do this, you'll need to press the 'Start' button on your keyboard or click into the Windows Icon on the bottom left of your screen.
 3. Type In: %AppData% and hit Enter on your keyboard.
 4. Look for and Delete the 'turtle-wow' folder (it will be there).
 5. Close out this AppData folder, we'll no longer need this.
 6. Open your Turtle WoW folder.
 7. Navigate to the Data folder.
 8. Delete 'patch-8.mpq'
 9. Re-Open the Launcher.
 10. This will ask you if you'd like to "Add Components" or something like this. Just click the first Option available and continue.
 11. Update button will appear on your Launcher.
 12. Update the Launcher.
 13. Confirm the Deletion of the turtle wow exes if it asks you to confirm to continue.
 14. It'll then begin to update. GG.

NOTE: At step 9, it's been reported that the ERROR can still appear. If that happens, go into the Twpatcher. You'll then see UPDATE.

NOTE(2): If the Update freezes on you, change your region to WORLD. To do this, navigate to the top-right of your Launcher and hit the Cog Wheel (settings). Under 'SELECT DOWNLOAD MIRROR' click on 'World'

## Post 146496 by Gangstabacon — 2025-08-17T14:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146496#p146496 | page 1 | era: pre-1.18.1 -->

These steps worked for me as long as I ran the Launcher as admin in step 9.

## Post 146553 by Clyptos — 2025-08-17T17:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146553#p146553 | page 1 | era: pre-1.18.1 -->

Didnt work for me until I unmarked the "read only" box on my Turtle wow folder.

## Post 146745 by Joosh82 — 2025-08-18T12:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146745#p146745 | page 1 | era: pre-1.18.1 -->

> **Gangstabacon wrote: Sun Aug 17, 2025 2:58 pm**
> These steps worked for me as long as I ran the Launcher as admin in step 9.

Running as Admin worked for me, didn't even bother with the other steps.

## Post 146801 by Captdsparrow — 2025-08-18T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146801#p146801 | page 1 | era: pre-1.18.1 -->

> **Clyptos wrote: Sun Aug 17, 2025 5:53 pm**
> Didnt work for me until I unmarked the "read only" box on my Turtle wow folder.

Dude thank you!! I've tried every suggestion for the last few days and nothing has worked. Was starting to look at other private servers, this is the only thing that fixed the issue, thank you!

## Post 146839 by Dswiefl — 2025-08-18T20:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146839#p146839 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Fri Aug 15, 2025 8:56 pm**
> **IF YOU'RE GETTING: "Error: Verify your game data by clicking RETRY" FOLLOW THESE STEPS**
>
>  1. Close the Launcher if you have it open.
>  2. Open appdata: To do this, you'll need to press the 'Start' button on your keyboard or click into the Windows Icon on the bottom left of your screen.
>  3. Type In: %AppData% and hit Enter on your keyboard.
>  4. Look for and Delete the 'turtle-wow' folder (it will be there).
>  5. Close out this AppData folder, we'll no longer need this.
>  6. Open your Turtle WoW folder.
>  7. Navigate to the Data folder.
>  8. Delete 'patch-8.mpq'
>  9. Re-Open the Launcher.
>  10. This will ask you if you'd like to "Add Components" or something like this. Just click the first Option available and continue.
>  11. Update button will appear on your Launcher.
>  12. Update the Launcher.
>  13. Confirm the Deletion of the turtle wow exes if it asks you to confirm to continue.
>  14. It'll then begin to update. GG.
>
>  NOTE: At step 9, it's been reported that the ERROR can still appear. If that happens, go into the Twpatcher. You'll then see UPDATE.
>
>  NOTE(2): If the Update freezes on you, change your region to WORLD. To do this, navigate to the top-right of your Launcher and hit the Cog Wheel (settings). Under 'SELECT DOWNLOAD MIRROR' click on 'World'

Hello.
This doesn't work for me. I have only downloaded and installed the launcher itself. Upon first startup I receive this message. There is no Data folder with a patch-8.mpq yet!
I still tried to delete the AppData TurtleWoW folder, ran the launcher as admin, but I can't uncheck the folders read only option, as soon as I close properties and reopen it is back to read only.
What else can I try? I also redownloaded the launcher as well.
Thanks!

## Post 146854 by Dswiefl — 2025-08-18T21:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146854#p146854 | page 1 | era: pre-1.18.1 -->

> **Dswiefl wrote: Mon Aug 18, 2025 8:18 pm**
> > **Pepesmite wrote: Fri Aug 15, 2025 8:56 pm**
> > **IF YOU'RE GETTING: "Error: Verify your game data by clicking RETRY" FOLLOW THESE STEPS**
> >
> >  1. Close the Launcher if you have it open.
> >  2. Open appdata: To do this, you'll need to press the 'Start' button on your keyboard or click into the Windows Icon on the bottom left of your screen.
> >  3. Type In: %AppData% and hit Enter on your keyboard.
> >  4. Look for and Delete the 'turtle-wow' folder (it will be there).
> >  5. Close out this AppData folder, we'll no longer need this.
> >  6. Open your Turtle WoW folder.
> >  7. Navigate to the Data folder.
> >  8. Delete 'patch-8.mpq'
> >  9. Re-Open the Launcher.
> >  10. This will ask you if you'd like to "Add Components" or something like this. Just click the first Option available and continue.
> >  11. Update button will appear on your Launcher.
> >  12. Update the Launcher.
> >  13. Confirm the Deletion of the turtle wow exes if it asks you to confirm to continue.
> >  14. It'll then begin to update. GG.
> >
> >  NOTE: At step 9, it's been reported that the ERROR can still appear. If that happens, go into the Twpatcher. You'll then see UPDATE.
> >
> >  NOTE(2): If the Update freezes on you, change your region to WORLD. To do this, navigate to the top-right of your Launcher and hit the Cog Wheel (settings). Under 'SELECT DOWNLOAD MIRROR' click on 'World'
>
>   Hello.
>  This doesn't work for me. I have only downloaded and installed the launcher itself. Upon first startup I receive this message. There is no Data folder with a patch-8.mpq yet!
>  I still tried to delete the AppData TurtleWoW folder, ran the launcher as admin, but I can't uncheck the folders read only option, as soon as I close properties and reopen it is back to read only.
>  What else can I try? I also redownloaded the launcher as well.
>  Thanks!

I don't know what I did differently this time, but after reinstalling and getting the error again, without doing anything else, I simply restarted the launcher and this time there was the Update button. Its downloading right now, I hope it works, will update.

Edit: Managed to install and launch the game!

## Post 146871 by Foxylittlething — 2025-08-18T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146871#p146871 | page 1 | era: pre-1.18.1 -->

[![Image](https://i.ibb.co/QFvfyCqS/turtle.png)](https://imgbb.com/)

not working for me.
made all steps from guide post.
still nothing.

any advice?

## Post 146917 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-08-19T06:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146917#p146917 | page 1 | era: pre-1.18.1 -->

> **Foxylittlething wrote: Mon Aug 18, 2025 11:01 pm**
> [![Image](https://i.ibb.co/QFvfyCqS/turtle.png)](https://imgbb.com/)
>
>  not working for me.
>  made all steps from guide post.
>  still nothing.
>
>  any advice?

Hello. The error message explains the reason. You have not specified the path to the game folder in the launcher. Specify it again and restart the launcher.

## Post 147266 by Foxylittlething — 2025-08-20T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147266#p147266 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Tue Aug 19, 2025 6:12 am**
> > **Foxylittlething wrote: Mon Aug 18, 2025 11:01 pm**
> > [![Image](https://i.ibb.co/QFvfyCqS/turtle.png)](https://imgbb.com/)
> >
> >  not working for me.
> >  made all steps from guide post.
> >  still nothing.
> >
> >  any advice?
>
>  Hello. The error message explains the reason. You have not specified the path to the game folder in the launcher. Specify it again and restart the launcher.

 1. than how it verifying files about 2 minutes, before this error?
[![Image](https://i.ibb.co/kg9CkgwK/turtle1.png)](https://imgbb.com/)

 2. i checked settings after verifying and error appear. path correctly set.
[![Image](https://i.ibb.co/8TgQ2PH/turtle2.png)](https://imgbb.com/)

## Post 147274 by Foxylittlething — 2025-08-20T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147274#p147274 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Tue Aug 19, 2025 6:12 am**
> > **Foxylittlething wrote: Mon Aug 18, 2025 11:01 pm**
> > [![Image](https://i.ibb.co/QFvfyCqS/turtle.png)](https://imgbb.com/)
> >
> >  not working for me.
> >  made all steps from guide post.
> >  still nothing.
> >
> >  any advice?
>
>  Hello. The error message explains the reason. You have not specified the path to the game folder in the launcher. Specify it again and restart the launcher.

Ok. Another question than.
Where launcher saves this path to game? registry? some config file?

## Post 147389 by Grumpy88 — 2025-08-20T23:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147389#p147389 | page 1 | era: pre-1.18.1 -->

What helped me was running as administrator and changed download mirror to world in cogwheel

## Post 147721 by Peaksforum — 2025-08-22T16:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147721#p147721 | page 1 | era: pre-1.18.1 -->

Hello,

it is enough to run the launcher as administrator.
It seems that with standard permissions the launcher cannot open the installation path.

Good luck and have fun in game boys

## Post 149227 by Lokisan — 2025-08-29T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149227#p149227 | page 1 | era: pre-1.18.1 -->

I'm stuck on Step 7. My Turtle WoW folder has nothing called data. Am I missing something?

## Post 149240 by Sophics — 2025-08-29T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149240#p149240 | page 1 | era: pre-1.18.1 -->

Had to launch the second launcher under administrator mode on step 9. The one without the uppercase letters.
[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/hqRN3ZJ]

## Post 149928 by Olddragon — 2025-09-02T19:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149928#p149928 | page 1 | era: pre-1.18.1 -->

> **Foxylittlething wrote: Wed Aug 20, 2025 2:06 pm**
> > **Pepesmite wrote: Tue Aug 19, 2025 6:12 am**
> > > **Foxylittlething wrote: Mon Aug 18, 2025 11:01 pm**
> > > [![Image](https://i.ibb.co/QFvfyCqS/turtle.png)](https://imgbb.com/)
> > >
> > >  not working for me.
> > >  made all steps from guide post.
> > >  still nothing.
> > >
> > >  any advice?
> >
> >  Hello. The error message explains the reason. You have not specified the path to the game folder in the launcher. Specify it again and restart the launcher.
>
>   Ok. Another question than.
>  Where launcher saves this path to game? registry? some config file?

I have the same problem. All I have is 2 folders one for Cache that contains nothing and one for WTF with a file called Config.wtf. I also have the uninstall and the turtle-wow.exe but nothing else and I'm stuck.

Edit: then after I cloesed the lancher and reopened it I got Update but I had to wait. I'm not good at waiting. tnx for the infor

## Post 150071 by Nudeward — 2025-09-03T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150071#p150071 | page 1 | era: pre-1.18.1 -->

Im trying the full client download under the download button

## Post 150894 by Artexx — 2025-09-08T23:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150894#p150894 | page 1 | era: pre-1.18.1 -->

I ran TurtleWoW as admin. Boom it worked.

## Post 153161 by Jasonargo — 2025-09-25T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153161#p153161 | page 1 | era: pre-1.18.1 -->

I just had the same problem on a clean install and none of the above helped, got the error on first start up.

What solved it for me was selecting a new empty folder in the launcher. Using the original Games/TurtleWoW folder didn't work.

