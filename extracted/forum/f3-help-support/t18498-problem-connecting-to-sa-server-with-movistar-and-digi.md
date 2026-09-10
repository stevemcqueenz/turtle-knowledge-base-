---
title: "Problem connecting to SA Server with Movistar and Digi"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18498"
topic_id: 18498
forum_id: 3
forum: "Help & Support"
author: "eguard94"
author_authority: "player"
posted: "2025-04-09T19:19:00Z"
last_post: "2025-04-10T07:08:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:45:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Problem connecting to SA Server with Movistar and Digi

## Post 126199 by eguard94 — 2025-04-09T19:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126199#p126199 | page 1 | era: pre-1.18.1 -->

Hello,

After spending 5 days with Movistar technicians...

I've concluded that your server, salogon.wow-turtle.org, is blocking the 79.X.X.X IP range for Movistar and Digi.

I've been running trace tests with WINMTR and it shows that the block is on your ISP.

We've heard a lot about Movistar blocking Cloudflare due to the Spanish league, but it has nothing to do with it, as it works perfectly for clients not in that IP range.

If it were our ISP blocking, no Movistar client would be able to connect.

I've been gathering information from the hundreds of people who can't access the server, and they all agree on the IP 79.X.X.X. By chance, the server's IP is 79.127.252.97.

Here I leave the thread with Movistar, after several calls with them.
[https://comunidad.movistar.es/t5/Soport ... -p/5242183](https://comunidad.movistar.es/t5/Soporte-Fibra-y-ADSL/Problemas-de-conexi%C3%B3n-con-World-of-Warcraft-Turtle/td-p/5242183)

Obviously it is solved with a VPN, but it is only a temporary solution.

Send tracert:
|------------------------------------------------------------------------------------------|
| WinMTR statistics |
| Host - % | Sent | Recv | Best | Avrg | Wrst | Last |
|------------------------------------------------|------|------|------|------|------|------|
| 192.168.1.1 - 0 | 220 | 220 | 0 | 0 | 3 | 0 |
| 192.168.144.1 - 38 | 87 | 54 | 0 | 2 | 7 | 1 |
| 13.red-81-41-228.staticip.rima-tde.net - 0 | 220 | 220 | 1 | 2 | 14 | 1 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
|be8-400-grtbcnes1.net.telefonicaglobalsolutions.com - 4 | 197 | 191 | 9 | 10 | 22 | 10 |
| 213.140.33.155 - 25 | 111 | 84 | 0 | 10 | 20 | 10 |
| 176.52.248.189 - 80 | 53 | 11 | 0 | 13 | 17 | 17 |
| 5.53.6.76 - 98 | 45 | 1 | 0 | 17 | 17 | 17 |
|ae6-0-grtvirtx4.net.telefonicaglobalsolutions.com - 41 | 83 | 49 | 0 | 83 | 97 | 86 |
| 213.140.35.115 - 90 | 48 | 5 | 0 | 113 | 117 | 112 |
| 94.142.97.162 - 0 | 219 | 219 | 171 | 172 | 187 | 172 |
| 190.98.141.213 - 0 | 219 | 219 | 172 | 173 | 181 | 173 |
| vl204.lim-cir1-dist-2.cdn77.com - 0 | 219 | 219 | 172 | 173 | 181 | 173 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
| No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
|________________________________________________|______|______|______|______|______|______|
WinMTR v0.92 GPL V2 by Appnor MSP - Fully Managed Hosting & Cloud Provider

WinMTR Interpretation
![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) What we see:
Your router (192.168.1.1) responds correctly.

There's connectivity through several intermediate nodes, including Telefónica (Movistar) nodes.

The trace reaches cdn77.com (a content delivery network).

![❌](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/274c.svg) What’s failing:
Starting from hop 14, all following nodes show 100% packet loss.

The final IP 79.127.252.97 (the server for salogon.wow-turtle.org) does not respond at all, not even with error messages.

There's no indication that the connection reaches the server — it gets stuck before arriving.

![🔎](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f50e.svg) What does this mean?
This is not an issue with open ports or your local network.

It’s very likely that the server (or its firewall) is blocking traffic from your IP range (used by Movistar/Digi), in this case, 79.x.x.x.

The fact that it works fine with a VPN confirms this 100%.

## Post 126230 by Rubenek — 2025-04-10T01:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126230#p126230 | page 1 | era: pre-1.18.1 -->

I understand that other than using a VPN, there's no other solution, right?

I'm having the same problem as you. My provider is DIGI, and there's no way to connect to the server once I enter my credentials in the game.

## Post 126249 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-04-10T07:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126249#p126249 | page 1 | era: pre-1.18.1 -->

> **eguard94 wrote: Wed Apr 09, 2025 7:19 pm**
> Hello,
>
>  After spending 5 days with Movistar technicians...
>
>  I've concluded that your server, salogon.wow-turtle.org, is blocking the 79.X.X.X IP range for Movistar and Digi.
>
>  I've been running trace tests with WINMTR and it shows that the block is on your ISP.
>
>  We've heard a lot about Movistar blocking Cloudflare due to the Spanish league, but it has nothing to do with it, as it works perfectly for clients not in that IP range.
>
>  If it were our ISP blocking, no Movistar client would be able to connect.
>
>  I've been gathering information from the hundreds of people who can't access the server, and they all agree on the IP 79.X.X.X. By chance, the server's IP is 79.127.252.97.
>
>  Here I leave the thread with Movistar, after several calls with them.
>  [https://comunidad.movistar.es/t5/Soport ... -p/5242183](https://comunidad.movistar.es/t5/Soporte-Fibra-y-ADSL/Problemas-de-conexi%C3%B3n-con-World-of-Warcraft-Turtle/td-p/5242183)
>
>  Obviously it is solved with a VPN, but it is only a temporary solution.
>
>  Send tracert:
>  |------------------------------------------------------------------------------------------|
>  | WinMTR statistics |
>  | Host - % | Sent | Recv | Best | Avrg | Wrst | Last |
>  |------------------------------------------------|------|------|------|------|------|------|
>  | 192.168.1.1 - 0 | 220 | 220 | 0 | 0 | 3 | 0 |
>  | 192.168.144.1 - 38 | 87 | 54 | 0 | 2 | 7 | 1 |
>  | 13.red-81-41-228.staticip.rima-tde.net - 0 | 220 | 220 | 1 | 2 | 14 | 1 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  |be8-400-grtbcnes1.net.telefonicaglobalsolutions.com - 4 | 197 | 191 | 9 | 10 | 22 | 10 |
>  | 213.140.33.155 - 25 | 111 | 84 | 0 | 10 | 20 | 10 |
>  | 176.52.248.189 - 80 | 53 | 11 | 0 | 13 | 17 | 17 |
>  | 5.53.6.76 - 98 | 45 | 1 | 0 | 17 | 17 | 17 |
>  |ae6-0-grtvirtx4.net.telefonicaglobalsolutions.com - 41 | 83 | 49 | 0 | 83 | 97 | 86 |
>  | 213.140.35.115 - 90 | 48 | 5 | 0 | 113 | 117 | 112 |
>  | 94.142.97.162 - 0 | 219 | 219 | 171 | 172 | 187 | 172 |
>  | 190.98.141.213 - 0 | 219 | 219 | 172 | 173 | 181 | 173 |
>  | vl204.lim-cir1-dist-2.cdn77.com - 0 | 219 | 219 | 172 | 173 | 181 | 173 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  | No response from host - 100 | 44 | 0 | 0 | 0 | 0 | 0 |
>  |________________________________________________|______|______|______|______|______|______|
>  WinMTR v0.92 GPL V2 by Appnor MSP - Fully Managed Hosting & Cloud Provider
>
>
>
>  WinMTR Interpretation
>  ![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg) What we see:
>  Your router (192.168.1.1) responds correctly.
>
>  There's connectivity through several intermediate nodes, including Telefónica (Movistar) nodes.
>
>  The trace reaches cdn77.com (a content delivery network).
>
>  ![❌](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/274c.svg) What’s failing:
>  Starting from hop 14, all following nodes show 100% packet loss.
>
>  The final IP 79.127.252.97 (the server for salogon.wow-turtle.org) does not respond at all, not even with error messages.
>
>  There's no indication that the connection reaches the server — it gets stuck before arriving.
>
>  ![🔎](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f50e.svg) What does this mean?
>  This is not an issue with open ports or your local network.
>
>  It’s very likely that the server (or its firewall) is blocking traffic from your IP range (used by Movistar/Digi), in this case, 79.x.x.x.
>
>  The fact that it works fine with a VPN confirms this 100%.

Greetings!

We regret to inform you that Movistar and Digi cannot establish a connection due to Cloudflare’s restrictions on Spanish internet providers.

As a workaround, we recommend using a VPN to bypass this limitation.

Please let us know if you need further assistance.

