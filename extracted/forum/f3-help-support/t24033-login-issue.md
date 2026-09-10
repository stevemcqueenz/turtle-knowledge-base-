---
title: "Login issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24033"
topic_id: 24033
forum_id: 3
forum: "Help & Support"
author: "Cheruscan"
author_authority: "player"
posted: "2026-02-19T20:47:00Z"
last_post: "2026-02-20T12:26:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:36:59Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Login issue

## Post 168945 by Cheruscan (Bug Report Enthusiast) — 2026-02-19T20:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168945#p168945 | page 1 | era: 1.18.1-announced-pre-release -->

Hello technically inclined peoples

I am currently working away rom home and have brought my laptop with me to enjoy some Turtle after my 10 hour shifts.

I have done this in the past with no problems, but now the server will automatically disconnect me, I get to the games login screen type my info in get connected and then immediatly get the message that I got disconnected.

At first I thought it must be some bad data so I redownloaded Twow completley, but the issue still persists after a fresh install

I use the turtle launcher and everything works fine there, if that is of import.

## Post 168953 by Pepesmite (Turtle WoW Team) [STAFF] — 2026-02-19T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168953#p168953 | page 1 | era: 1.18.1-announced-pre-release -->

> **Cheruscan wrote: Thu Feb 19, 2026 8:47 pm**
> Hello technically inclined peoples
>
>  I am currently working away rom home and have brought my laptop with me to enjoy some Turtle after my 10 hour shifts.
>
>  I have done this in the past with no problems, but now the server will automatically disconnect me, I get to the games login screen type my info in get connected and then immediatly get the message that I got disconnected.
>
>  At first I thought it must be some bad data so I redownloaded Twow completley, but the issue still persists after a fresh install
>
>  I use the turtle launcher and everything works fine there, if that is of import.

# If you're experiencing a connection issue with logging into the game

 1) It is recommended to use a VPN if youre experiencing an issue with logging into the game, as certain ISPs have been blocking Turtle WoW from connecting.

 2)  Flush your DNS
 - Right click Cmd.exe, and open as administrator
 - In the cmd prompt, type ipconfig /flushdns

 3)  Change your DNS to Google's DNS
<https://nordvpn.com/de/blog/what-is-google-dns/>
(strongly recommend doing a DNS flush after changing, may take up to 60 minutes to see change)

 4)  Disable IPv6 settings
 - Open Control Panel>Network and Internet>Network and Sharing Center and click "Change adapter settings"
 - Right-click your active network connection, select "Properties"
 - Find "Internet Protocol Version 6" and uncheck the box next to it
 - Click "Ok" to save the changes

Additionally, if you continue to have issues, try to connect to the server's by the following:
 - Open your Game Folder, open Realmlist.wtf
 - Change the information in there to the following:
SET realmList "logon.turtle-server-eu.kz"
SET patchList "logon.turtle-server-eu.kz"
 - Hit Save
(*please note:  The Launcher will over-ride this setting, so please use wow.exe to launch the game during this time*)

[https://protonvpn.com/free-vpn?srsltid= ... DgV4O9HW8-](https://protonvpn.com/free-vpn?srsltid=AfmBOoqZX-WoXP1kQCQ1u3LEGgSI2DUk71nSoObjs14HDnDgV4O9HW8-)

This is a free VPN service which you can use to test if your ISP is blocking/disrupting ports needed by our servers to establish a connection.

## Post 169009 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-20T12:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169009#p169009 | page 1 | era: 1.18.1-announced-pre-release -->

as far i saw within my friends, some have the same problem, and after they started using a vpn this issue seases to exist

