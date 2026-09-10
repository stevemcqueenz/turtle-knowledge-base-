---
title: "Disconnected from server since yesterday"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22672"
topic_id: 22672
forum_id: 3
forum: "Help & Support"
author: "Cidertime"
author_authority: "player"
posted: "2025-10-31T04:03:00Z"
last_post: "2025-10-31T12:43:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:38:41Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Disconnected from server since yesterday

## Post 157904 by Cidertime — 2025-10-31T04:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157904#p157904 | page 1 | era: 1.18.1-announced-pre-release -->

Since yesterday, I've been unable to access the server. It keeps disconnecting. This happened in August, but it resolved itself. I've read that many people are experiencing this issue. Is there any information on how to resolve this? Thanks in advance.   scared_turtle_head

## Post 157927 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-10-31T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157927#p157927 | page 1 | era: 1.18.1-announced-pre-release -->

> **Cidertime wrote: Fri Oct 31, 2025 4:03 am**
> Since yesterday, I've been unable to access the server. It keeps disconnecting. This happened in August, but it resolved itself. I've read that many people are experiencing this issue. Is there any information on how to resolve this? Thanks in advance.   scared_turtle_head

Hello!

Here are some troubleshooting steps you can try:
Use a VPN – This can help bypass connection restrictions.
Switch your connection type – Try wired, Wi-Fi, or mobile hotspot to see if the issue persists.
Restart your router – A simple reboot may resolve connectivity problems.
Change your IP address – This can be done via your router settings.

Also...

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
SET realmList "logon.turtle-wow.com"
SET patchList "logon.turtle-wow.com"
 - Hit Save
(*please note:  The Launcher will over-ride this setting, so please use wow.exe to launch the game during this time*)

[https://protonvpn.com/free-vpn?srsltid= ... DgV4O9HW8-](https://protonvpn.com/free-vpn?srsltid=AfmBOoqZX-WoXP1kQCQ1u3LEGgSI2DUk71nSoObjs14HDnDgV4O9HW8-)

This is a free VPN service which you can use to test if your ISP is blocking/disrupting ports needed by our servers to establish a connection.

## Post 157933 by Cidertime — 2025-10-31T12:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157933#p157933 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks for the advice! But with VPN, my ping is 10k. Looks like I'll have to put WoW on hold until better times :(

