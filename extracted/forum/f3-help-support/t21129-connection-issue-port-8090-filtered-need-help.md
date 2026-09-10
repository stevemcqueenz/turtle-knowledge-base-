---
title: "Connection Issue – Port 8090 Filtered? Need Help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21129"
topic_id: 21129
forum_id: 3
forum: "Help & Support"
author: "Vgvg"
author_authority: "player"
posted: "2025-08-18T19:45:00Z"
last_post: "2025-08-25T19:15:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:40:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Connection Issue – Port 8090 Filtered? Need Help

## Post 146833 by Vgvg — 2025-08-18T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146833#p146833 | page 1 | era: pre-1.18.1 -->

Hi,

I’ve been having trouble connecting to TurtleWoW without using a VPN, and after weeks of troubleshooting I think I’ve narrowed it down to something on the server/firewall side. I’d really appreciate some clarification or help from the TurtleWoW team.

What I tested
 1 Wireshark traces (my PC → TurtleWoW):
a SYN packets go out to 51.38.62.24:8090.
b No SYN/ACK ever comes back (just retransmissions).
c With VPN enabled, SYN/ACK returns and the handshake completes → game works fine.

 2 Comparing with another server (Ascension):
a Handshake succeeds normally (no VPN required).
b So my PC, router, and ISP path are capable of handling this traffic.

 3 Local setup:
a Opened all ports on my router/firewall.
b Tried direct modem connection.
c Changed DNS.

 4 ISP involvement:
a I escalated the case with my ISP’s support, they confirmed they don’t filter port 8090 traffic and sent this to prove they tested from an AWS machine outside my home network.

AWS nmap test (i have a print of this if u guys need it):

$ nmap -Pn -p 8090 51.38.62.24
Host is up.

PORT     STATE    SERVICE
 8090/tcp filtered opsmessaging

Could someone from the TurtleWoW team confirm:

Is there a firewall, geo-block, or access control list (ACL) filtering traffic on port 8090?
If yes, is it possible to whitelist affected IP ranges or provide an alternate port for login?
If not intentional, could you check with OVH whether their side is filtering?

I’ve done as much troubleshooting as possible on my side and with my ISP. At this point, I think only the TurtleWoW team can resolve or clarify what’s happening.

## Post 147584 by Vgvg — 2025-08-21T21:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147584#p147584 | page 1 | era: pre-1.18.1 -->

Up? Someone can help here? Me and my ISP have been trying a lot of things but I feel I have exhausted options on our side...

## Post 148258 by Vgvg — 2025-08-25T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148258#p148258 | page 1 | era: pre-1.18.1 -->

hello

