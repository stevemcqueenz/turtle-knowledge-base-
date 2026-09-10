---
title: "Hidden private servers: proof of concept"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24920"
topic_id: 24920
forum_id: 4
forum: "General"
author: "Generalist"
author_authority: "player"
posted: "2026-04-20T20:24:00Z"
last_post: "2026-04-21T02:42:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:35:02Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Hidden private servers: proof of concept

## Post 176027 by Generalist — 2026-04-20T20:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176027#p176027 | page 1 | era: post-1.18.1 -->

Hello,
I've just set up a private server to test that it's possible to play with **20-30 ms ping** with wifi on both ends and 200 km (one way) trip on anonymised network called **Yggdrasil**. This is the only reliable way to protect servers from Blizz in any country. In Yggdrasil, server and users connect only to the nearest public peer and the network will do the rest. I strongly recommend using a firewall.

There is a catch however. It only supports IPv6 internally and some WoW clients and servers do not.
So with some usage of a tool called Socat I managed to redirect traffic on the client machine ports 3724 and 8085 to the IPv6. There are other tools to do that. Of course your realmlist must point to 127.0.0.1. On the server side the database table (at least for Cmangos) has to be modified. Code: Select all

```
alter table account_logons modify column ip varchar(45);
```

And change listen addresses from 0.0.0.0 to ::

Clever devs will surely come up with solutions how to support IPv6 directly in the client or use some robust existing solutions. Maybe even embed the Yggdrasil client itself.
<https://yggdrasil-network.github.io/>

Get your nearest peer from the [public list](https://publicpeers.neilalexander.dev/) and peer config could look like this. Nothing else needs changing. Code: Select all

```
Peers: [
tls://x.x.x.x:yyyy
]
```

For your own private server you must be careful not to expose your identity with registering a domain. Also you should use VPN/TOR for all related public communication outside Yggdrasil. Maybe it would be best to let others spread the word about your server.

*Last edited by Generalist on Fri Apr 24, 2026 6:32 am, edited 3 times in total.*

## Post 176044 by Sleeplust (Patch Note Conspiracy Theorist) — 2026-04-21T01:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176044#p176044 | page 1 | era: post-1.18.1 -->

Emmm, without transfering characters, only around half players who are able to use it would consider trying.

## Post 176046 by Bigsmerf (Grandmaster of Forum PvP) — 2026-04-21T02:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176046#p176046 | page 1 | era: post-1.18.1 -->

> **Sleeplust wrote: Tue Apr 21, 2026 1:52 am**
> Emmm, without transfering characters, only around half players who are able to use it would consider trying.

Half is still insanely more than enough for even multiple servers

The other half is more than welcome to miss out on the fun.   satisfied_turtle

