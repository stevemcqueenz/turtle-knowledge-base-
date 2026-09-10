---
title: "Logging in but Not Logging in"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11047"
topic_id: 11047
forum_id: 3
forum: "Help & Support"
author: "Zokk"
author_authority: "player"
posted: "2023-10-20T20:39:00Z"
last_post: "2023-10-21T08:21:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T09:00:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Logging in but Not Logging in

## Post 72466 by Zokk (Barrens Chat Casualty) — 2023-10-20T20:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72466#p72466 | page 1 | era: pre-1.18.1 -->

In the middle a real PITA issue.

Launching client, logging in successfully, I know this because it handshakes > Successfully logs in/Connected. But it immediately boots me back to login screen with "Disconnected from server"

I know I'm using correct details as if i intentionally use wrong details it says as such.

Can a GM please check logs and/or advise on why this is happening? Are there any local client logs i can paste here to help troubleshoot issue.

Thanks

## Post 72471 by Zokk (Barrens Chat Casualty) — 2023-10-20T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72471#p72471 | page 1 | era: pre-1.18.1 -->

FYI - even with a clean/empty WTF & WDB problem still persists. I'm hoping some server side logs will reveal something obvious, please help GM's!

Its llike my IP has bene banned maybe ? Is that symptoms of an IP issue? I am playing from a different geo location to usual but last night it worked.

## Post 72472 by Zokk (Barrens Chat Casualty) — 2023-10-20T21:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72472#p72472 | page 1 | era: pre-1.18.1 -->

So after spamming login over 30 times it let me login to char screen, then bombed out before actually loading in with:

"Your game interface files are corrupt. please remove your Interface\FrameXML folder"

Now there isnt even a file/folder anywhere in the WOW directory of that name (outisde of logs dir), in the Logs DIR, there is a FrameXML and the content is as follows:

 10/20 21:59:46.709  ** Loading table of contents Interface\FrameXML\FrameXML.toc
 10/20 21:59:46.709  ++ Loading file Interface\FrameXML\Turtle_TransmogUI\Turtle_TransmogUI.xml
 10/20 21:59:46.709  Couldn't find inherited node: TransmogPlayerSlotSmall
 10/20 21:59:46.709  ++ Loading file Interface\FrameXML\Turtle_ShopUI\Turtle_ShopUI.xml
 10/20 21:59:46.709  Texture ShopFrameEntryFrameImage: Unable to load texture file Interface\ShopFrame\1\1

So looks like some files have gone AWOL? been nuked by AV maybe, even though I've ex the directory. Anyone else got any bright ideas?

## Post 72478 by Zokk (Barrens Chat Casualty) — 2023-10-20T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72478#p72478 | page 1 | era: pre-1.18.1 -->

Ok I can confirm its categorically NOT a game/client issue. Fully downloaded and extracted again and same problem. No addons.

Need some backend help here! I can only presume its something in particular with my 1 of my Chars on the Character selection screen, that's causing it to bomb out?

Help

## Post 72485 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-10-20T22:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72485#p72485 | page 1 | era: pre-1.18.1 -->

**Edit:** Never mind.  I misunderstood the situation.
—

Original Post It sounds like the server is down.  Simple as that.

You're not banned, otherwise it would tell you.  Your files aren't corrupt if you just did a fresh install and the client isn't outright crashing.  A log in leading to either a realm select or outright disconnect usually means the server is having issues and/or outright down.  So, just be patient.

*Last edited by Jolikmc on Fri Oct 20, 2023 10:29 pm, edited 2 times in total.*

## Post 72486 by Zokk (Barrens Chat Casualty) — 2023-10-20T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72486#p72486 | page 1 | era: pre-1.18.1 -->

So to summarise this issue.

Completely clean download of install files from twow server.

Extracted, no addons, complete vanilla build and environment and the problem still apparent, what i can definitively say is that its to do with 1 particular char, i know which one and I'm pretty sure its because i have some gear transmoged on said character. When i logged into first time on clean build, although all gear was equipped, in all the slots that had Tmog'd gear in the icons where not displayed properly in character sheet. When i switched 1 piece of gear the char sheet refreshed and then successfully displayed proper icons.

However, log off, and try to log back in get the same login/ Booted to disconnected from server.

So this is a Tmog bug guys, I need some tech support on this from you guys please, either fix the issue or are you able to remove the Tmog on the item of gear that's causing the problem? I'm sure one of you can prob see under the bonnet what item is causing the bug.

So to be ABSOLUTELY CLEAR, as I don't want a palm off response of clean install and empty WTF/WDB as I've already done it, it does NOT fix this problem.

## Post 72539 by Zokk (Barrens Chat Casualty) — 2023-10-21T08:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72539#p72539 | page 1 | era: pre-1.18.1 -->

I have rasied a ticket internally to the game.. Fingers crossed

