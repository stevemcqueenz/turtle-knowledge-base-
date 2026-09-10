---
title: "Instant Disconnect Upon Login Attempt"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21086"
topic_id: 21086
forum_id: 3
forum: "Help & Support"
author: "Thebiglls"
author_authority: "player"
posted: "2025-08-17T21:23:00Z"
last_post: "2025-08-18T17:08:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:41:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Instant Disconnect Upon Login Attempt

## Post 146605 by Thebiglls — 2025-08-17T21:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146605#p146605 | page 1 | era: pre-1.18.1 -->

Hey all,

Whenever I try to login, I get an **instant disconnect.**

The things I tried:
 **1)** Reinstall the game completely (Used an uninstaller program to cleanup any residue files)
 **2)** Changed DNS in router to 1.1.1.1 (And 1.0.0.1)
 **3)** Disabled IPV6 in connection settings
 **4)** Flushed DNS multiple after any attempt
 **5)** Changed PCs DNS to Google's
 **6)** Restarted the PC
 **7)** Tried changing the ream list file suggested from .org to .com
 **8)** Tried launching wow.com directly and not from launcher
 **9)** I did NOT used a VPN as I played the game before in this house on older version (About a month ago) - So I am sure it is not my ISP provider

Please help. as it looks like I am the only 1 having this problem.

Thank you all in advance,
Leon.

## Post 146684 by Removed — 2025-08-18T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146684#p146684 | page 1 | era: pre-1.18.1 -->

I got this problem.

They told me that the problem was caused by my win11 license because i bougth it from instant gaming instead microsoft and was cracked.

Imho, that was a dev bullshit.

 -I played twow for an entire year.
 -My license is okay, i got update, is a regular key
 -Do they think every twow player got a license from microsoft directly?
 -Starting having this problem since a patch

So...they made a mess and now i can't play from my pc, i have to use a fucking portable.

Ah, you have to contact a dev on discord to unlock your account.

## Post 146804 by Thebiglls — 2025-08-18T17:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146804#p146804 | page 1 | era: pre-1.18.1 -->

> **Removed wrote: Mon Aug 18, 2025 7:01 am**
> I got this problem.
>
>  They told me that the problem was caused by my win11 license because i bougth it from instant gaming instead microsoft and was cracked.
>
>  Imho, that was a dev bullshit.
>
>  -I played twow for an entire year.
>  -My license is okay, i got update, is a regular key
>  -Do they think every twow player got a license from microsoft directly?
>  -Starting having this problem since a patch
>
>  So...they made a mess and now i can't play from my pc, i have to use a fucking portable.
>
>  Ah, you have to contact a dev on discord to unlock your account.

Hey, since I managed to fix it out with the help from Discord and my Google-Fu, I'll share the solution here, so you and future players will be able to fix this issue easily:

First, follow this, as posted in discord by @EdEddnEdy:

> If you're experiencing a connection issue with logging into the game
>  1) It is recommended to use a VPN if youre experiencing an issue with logging into the game, as certain ISPs have been blocking Turtle WoW from connecting.
>
>  2)  Flush your DNS
>  Right click Cmd.exe, and open as administrator
>  In the cmd prompt, type ipconfig /flushdns
>
>  3)  Change your DNS to Google's DNS
>  <https://nordvpn.com/de/blog/what-is-google-dns/>
>  (strongly recommend doing a DNS flush after changing, may take up to 60 minutes to see change)
>
>  4)  Disable IPv6 settings
>  Open Control Panel>Network and Internet>Network and Sharing Center and click "Change adapter settings"
>  Right-click your active network connection, select "Properties"
>  Find "Internet Protocol Version 6" and uncheck the box next to it
>  Click "Ok" to save the changes
>
>  Additionally, if you continue to have issues, try to connect to the server's by the following:
>  Open your Game Folder, open Realmlist.wtf
>  Change the information in there to the following:
>  SET realmList "logon.turtle-wow.com"
>  SET patchList "logon.turtle-wow.com"
>  Hit Save
>  (please note:  The Launcher will over-ride this setting, so please use wow.exe to launch the game during this time)
>
>  [https://protonvpn.com/free-vpn?srsltid= ... DgV4O9HW8-](https://protonvpn.com/free-vpn?srsltid=AfmBOoqZX-WoXP1kQCQ1u3LEGgSI2DUk71nSoObjs14HDnDgV4O9HW8-)
>
>  This is a free VPN service which you can use to test if your ISP is blocking/disrupting ports needed by our servers to establish a connection.

The only thing I skipped doing above is using a VPN which is obviously a solution only if your ISP is indeed locking your connection (I think is a very rare case), so instead, what I discovered is that for some reason, you are not able to get into a specific realm, but the game will not allow you do change it, thus you are stuck - In order to change the realm you do this:

Go to Config.wtf in your WTF game's folder and delete the following server name:

SET realmName "XXXXXXXXXX"
so it will be like this:
SET realmName ""

After this, it will let you select a server... For some reason, 1 of the server I previously created a character in auto-kicks me but it does work for the new server (I plated an hour there, already)

Hope this helps you and future players, good luck all and enjoy :D

