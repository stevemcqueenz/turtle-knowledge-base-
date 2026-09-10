---
title: "Easy fix for multi monitor/ultrawide issues."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3877"
topic_id: 3877
forum_id: 3
forum: "Help & Support"
author: "Chairface"
author_authority: "player"
posted: "2022-08-24T13:49:00Z"
last_post: "2023-09-12T21:16:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:06:18Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Easy fix for multi monitor/ultrawide issues.

## Post 23323 by Chairface — 2022-08-24T13:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23323#p23323 | page 1 | era: pre-1.18.1 -->

I was having a pain of a time getting the game to recognize my 5120x1440 resolution. I tried the tricks I could find and had some success, but always had to mess with it every single time I executed the game.

A four line powershell script will open the game without issues.
It disables extra monitors, launches game, pauses, enables monitors.
Make a blank powershell script file with an extension of .ps1
 ***   YOURSCRIPTNAME.ps1   *** Code: Select all

```
powershell -Command "displayswitch.exe /internal"
YOURPATH\WoW.exe     #your path here
Start-Sleep -Seconds 10       # change time depending on how fast your system loads the game.
powershell -Command "displayswitch.exe /extend"
```

This utilizes the function behind WIN+P.   Unfortunately it cannot be double clicked and you have to right click run powershell.    If your happy with this read no further.

Tuck your script away in a folder somewhere now if you desire.
Right click script file > send to > Desktop (create shortcut)
Right click the new desktop shortcut and click properties.
You can change the icon to the wow icon by clicking 'change icon' then browsing to the wow.exe located in your turtlewow installation folder.

More importantly tho, you need to add the execution ahead of your path in the target form. Your target should look like the example below.

"PATH_TO_SCRIPT\YOURSCRIPTNAME.ps1"
You need to add powershell.exe -ExecutionPolicy Bypass -File to make it double clickable.
powershell.exe -ExecutionPolicy Bypass -File "PATH_TO_SCRIPT\YOURSCRIPTNAME.ps1"

Enjoy!  turtle_tongue

## Post 28987 by Rajek — 2022-11-11T17:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28987#p28987 | page 1 | era: pre-1.18.1 -->

1. Thank you very much for your work. I really appreciate it.
 2. English is not my native language.
 3. I have massive troubles to follow "scripting" and such stuff. It takes me literally hours to figure some stuff out that might be native to you.
That said, here is the thing:

TLDR; Need exact resolution of second monitor, not of Laptop monitor.

On our Laptop is the max resolution 1920x1080 and on my "gaming monitor" I proudly bought for myself it is 3440x1440. In the "old" client it used to work. But after patch 1.16.x it fails on the wide screen monitor.
With your script it only shuts down the second monitor and WoW runs again on the Laptop resolution. When I switch the first and fourth line in your script, in expectation it would solve my problem, it just shuts down my second monitor... and it keeps shut down.
How am I able to tell WoW that it has to accept only my second monitors resolution?
Is there a solution or a workaround for that problem?

If I could only ask for one thing, please, no comments like:
"Just ask Google!1!"
It is really complicated and frustrating for me to search for such topics and most of the time I absolutely have no clue for what I have to search exactly.

Thanks in advance.

## Post 63367 by Boaz — 2023-09-12T21:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63367#p63367 | page 1 | era: pre-1.18.1 -->

I have to bump this and  say you solved my problem completely, now I can play the game

