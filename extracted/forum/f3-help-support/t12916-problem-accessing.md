---
title: "Problem accessing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12916"
topic_id: 12916
forum_id: 3
forum: "Help & Support"
author: "Anygood"
author_authority: "player"
posted: "2024-01-29T12:02:00Z"
last_post: "2024-01-31T08:27:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T08:55:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Problem accessing

## Post 86244 by Anygood — 2024-01-29T12:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86244#p86244 | page 1 | era: pre-1.18.1 -->

Hi, I was playing last night till around 01:00 GMT, but when I try and login to play today I authenticate and then I just get "Disconnected from Server". I've checked the website for any server status messages for the 29th Jan and can't see anything relating to any downtime / maintenance or other people having issues.
I've deleted the WDB folder and renamed and create a new Interface folder, but I still get disconnected from the server even though it shows Online and Players in the world.

Is this common, or is there something I can do to resolve this problem?

## Post 86245 by Akos1896 (Grandmaster of Forum PvP) — 2024-01-29T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86245#p86245 | page 1 | era: pre-1.18.1 -->

I had this problem during summer when I played with a weak internet connection or mobile hotspot. Is your internet stabile?

## Post 86247 by Anygood — 2024-01-29T12:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86247#p86247 | page 1 | era: pre-1.18.1 -->

Yes, my connection is stable.

I've been running a ping -t and I get 11 to 15ms per ping to bbc and I just needed to log this in the forum and for you to respond and it works now. All very strange indeed.
I've checked my Dream Machine router and no outage or notifications of any attacks, so not sure what the issues was here.

## Post 86248 by Akos1896 (Grandmaster of Forum PvP) — 2024-01-29T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86248#p86248 | page 1 | era: pre-1.18.1 -->

Tbh I don't have any other idea. Maybe someone else does.

## Post 86249 by Akos1896 (Grandmaster of Forum PvP) — 2024-01-29T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86249#p86249 | page 1 | era: pre-1.18.1 -->

Tbh just tried it, having the same error.

## Post 86250 by Faximilian82 — 2024-01-29T12:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86250#p86250 | page 1 | era: pre-1.18.1 -->

I have the same problem, I think because of the autoloot mod, I returned the original exe and everything worked fine

## Post 86255 by Bogyone (Barrens Chat Casualty) — 2024-01-29T13:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86255#p86255 | page 1 | era: pre-1.18.1 -->

I have this as secondary problem which is the unrelenting series of crashes due to Error 132. I cannot log back in after the crash for some time.

## Post 86381 by Nuri82 — 2024-01-30T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86381#p86381 | page 1 | era: pre-1.18.1 -->

Same here "Disconnected from Server"   unhappy_turtle_head

## Post 86389 by Ataika (Grandmaster of Forum PvP) — 2024-01-30T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86389#p86389 | page 1 | era: pre-1.18.1 -->

Repeating attempts usually work for me but yes i've started to get this disconnected message upon first login as well. Its surely not internet related issue since i have such problem only with my main account, all bank alts are doing great.

## Post 86442 by Darkabom — 2024-01-30T23:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86442#p86442 | page 1 | era: pre-1.18.1 -->

Try this:

Use Notepad to edit your "realmlist.wtf" file (it's located in the root folder where WoW.exe is).

Edit the top line to read:  set realmlist 51.68.197.29
instead of:                       set realmlist logon.turtlecraft.gg

Your realmlist.wtf should now look like this:

set realmlist 51.68.197.29
set patchlist logon.turtlecraft.gg

Save the file. Now the game should log in correctly and quickly. This method will work as long as they don't change the IP address of the logon server.

## Post 86512 by Bowser (Turtle WoW Team) [STAFF] — 2024-01-31T08:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86512#p86512 | page 1 | era: pre-1.18.1 -->

The issues described above have been resolved. There is no need to change your realmlist, it won't help in this case because the issue was related to our round-robin login proxy.

