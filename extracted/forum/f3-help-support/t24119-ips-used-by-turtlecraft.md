---
title: "IPs used by turtlecraft"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24119"
topic_id: 24119
forum_id: 3
forum: "Help & Support"
author: "Enragedtomato"
author_authority: "player"
posted: "2026-02-28T22:03:00Z"
last_post: "2026-03-01T16:43:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:36:52Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# IPs used by turtlecraft

## Post 169610 by Enragedtomato — 2026-02-28T22:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169610#p169610 | page 1 | era: 1.18.1-announced-pre-release -->

Hello guys,

I am looking for a comprehensive IP/Subnet list used by turtlecraft (Launcher, Login server, realms, etc.). I want to set up custom routing.

So far the connections I have seen on my machine are to these 5 addresses: Code: Select all

```
Remote Address	Remote Host Name
172.65.251.78
172.66.157.146
104.20.23.69
51.68.218.191	ip191.ip-51-68-218.eu
51.38.72.24	ip24.ip-51-38-72.eu
```

I've tried searching the forum, but didn't find any proper list

## Post 169677 by Enragedtomato — 2026-03-01T16:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169677#p169677 | page 1 | era: 1.18.1-announced-pre-release -->

Okay, I did some more monitoring and I have this picture now:
Code: Select all

```
# launcher (news & updates)
172.65.251.78       # Cloudflare subnet 172.65.240.0/20
172.66.157.146      # Cloudflare subnet 172.66.144.0/20
104.20.23.69        # Cloudflare subnet 104.20.16.0/20

# login screen before login (news?)
172.66.157.146      # Cloudflare subnet 172.66.144.0/20

# logon server
51.68.218.191       # logon.turtle-server-eu.kz
51.77.122.52        # logon.turtle-server-eu.kz

# Nordanaar realm
51.38.72.24         # ip24.ip-51-38-72.eu
```

## Post 169678 by Enragedtomato — 2026-03-01T16:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169678#p169678 | page 1 | era: 1.18.1-announced-pre-release -->

At the moment, only the below IP (whole subnet?) is being blocked at my place
 104.20.23.69

All other IPs are fine to reach directly

