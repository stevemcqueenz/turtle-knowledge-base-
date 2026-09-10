---
title: "Disconnecting after loading"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22525"
topic_id: 22525
forum_id: 3
forum: "Help & Support"
author: "Aeotald"
author_authority: "player"
posted: "2025-10-22T05:00:00Z"
last_post: "2025-10-25T07:26:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:38:50Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Disconnecting after loading

## Post 156558 by Aeotald — 2025-10-22T05:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156558#p156558 | page 1 | era: 1.18.1-announced-pre-release -->

Hello!
I have an issue after loading the world on any charecter - Disconnected from server.
Either when retreiving charaacter list.
Tried almost everything - nothing helps.
Game logins - Reignar, Aeotald.
Thank you.

## Post 156565 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-10-22T06:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156565#p156565 | page 1 | era: 1.18.1-announced-pre-release -->

> **Aeotald wrote: Wed Oct 22, 2025 5:00 am**
> Hello!
>  I have an issue after loading the world on any charecter - Disconnected from server.
>  Either when retreiving charaacter list.
>  Tried almost everything - nothing helps.
>  Game logins - Reignar, Aeotald.
>  Thank you.

Hello!

Here are some troubleshooting steps you can try:
Use a VPN – This can help bypass connection restrictions.
Switch your connection type – Try wired, Wi-Fi, or mobile hotspot to see if the issue persists.
Restart your router – A simple reboot may resolve connectivity problems.
Change your IP address – This can be done via your router settings.

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

## Post 156598 by Stefka12222 — 2025-10-22T10:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156598#p156598 | page 1 | era: 1.18.1-announced-pre-release -->

None of this is working.

## Post 156609 by Aeotald — 2025-10-22T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156609#p156609 | page 1 | era: 1.18.1-announced-pre-release -->

Using good VPN helped thanks!

## Post 156618 by Swagd — 2025-10-22T13:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156618#p156618 | page 1 | era: 1.18.1-announced-pre-release -->

> **Aeotald wrote: Wed Oct 22, 2025 12:09 pm**
> Using good VPN helped thanks!

Which VPN?

## Post 156629 by lydocaines — 2025-10-22T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156629#p156629 | page 1 | era: 1.18.1-announced-pre-release -->

Hi, guys! I've conducted a mini-internal investigation and have some disappointing news for my Russian segment. My backbone provider with IP 79.104.225.146 is dropping traffic.
I checked the traceroute with and without a VPN to the domain logon.turtlecraft.gg with IP 51.68.218.191.
If I don't use a VPN, packets are lost on the backbone provider. Everything was working yesterday. This is either a blocking issue or faulty routing. Press F boyZ :)

## Post 156685 by Frantic213210 — 2025-10-23T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156685#p156685 | page 1 | era: 1.18.1-announced-pre-release -->

Has anyone found a solution?

## Post 156868 by E7paul1 — 2025-10-24T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156868#p156868 | page 1 | era: 1.18.1-announced-pre-release -->

> **lydocaines wrote: Wed Oct 22, 2025 4:42 pm**
> Hi, guys! I've conducted a mini-internal investigation and have some disappointing news for my Russian segment. My backbone provider with IP 79.104.225.146 is dropping traffic.
>  I checked the traceroute with and without a VPN to the domain logon.turtlecraft.gg with IP 51.68.218.191.
>  If I don't use a VPN, packets are lost on the backbone provider. Everything was working yesterday. This is either a blocking issue or faulty routing. Press F boyZ :)

i have checked some IPs too.

logon.turtle-wow.com 51.68.218.191 - works fine, possible to login

logon.turtlecraft.gg 51.77.122.52 - works fine, possible to login

The game server address 51.38.72.24:8090 - initial handshake goes well, but after that the server stops responding. This looks like a geo-block, possibly implemented through OVH hosting.

## Post 156969 by Kharietash — 2025-10-25T07:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156969#p156969 | page 1 | era: 1.18.1-announced-pre-release -->

Situation: disconnect at the end of loading.
I dont use VPN services, but I use shadowsocks.
What helps me?
Using proxifier to make wow.exe works through my shadowsocks via SOCKS5.
Now i can get into the game.

