---
title: "Support for guilds to use the WoWChat app"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4781"
topic_id: 4781
forum_id: 3
forum: "Help & Support"
author: "Ugoboom"
author_authority: "player"
posted: "2022-11-07T01:32:00Z"
last_post: "2022-11-14T18:50:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:19:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Support for guilds to use the WoWChat app

## Post 28611 by Ugoboom (Bug Report Enthusiast) — 2022-11-07T01:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28611#p28611 | page 1 | era: pre-1.18.1 -->

<https://github.com/fjaros/wowchat> is an app that runs on a VPS or any computer, and can connect to wow private servers in order to relay discord and guild chat back and forth.

This is huge for allowing people on and off the game to communicate, and even allow people who want to keep their RP guild, also stay in touch with the gchat of their raiding guild.

Unfortunately, this tool doesn't work out of the box for Turtle wow, as the server is technically on 1.16.3, and I would like help from the turtle staff or really anyone who knows how to help, in getting this working. Once working, this will be huge to improve the communication QOL for all the guilds on the sever.

 ----

Out of the box, we get this error
Code: Select all

```
07:42:12.446 WARN  i.n.c.DefaultChannelPipeline - An exceptionCaught() event was fired, and it reached at the tail of the pipeline. It usually means the last handler in the pipeline did not handle the exception.
java.lang.IllegalArgumentException: Build 1.16.3 not supported!
```

I made a quick change the app's code to have it pretend to be 1.16.3, and this enables a connection, but the turtle server seems to shut down the connection from its side. This is where I'm stuck.
Code: Select all

```
07:50:59.884 INFO  w.r.RealmConnector - Connecting to realm server logon.turtlecraft.gg:3724
07:51:00.251 INFO  w.r.RealmPacketHandler - Connected! Sending account login information...
07:51:00.568 INFO  w.r.RealmPacketHandler - Successfully logged into realm server. Looking for realm Turtle WoW
07:51:00.707 INFO  w.g.GameConnector - Connecting to game server Turtle WoW (51.89.212.98:8090)
07:51:00.867 INFO  w.g.GamePacketHandler - Connected! Authenticating...
07:51:01.104 INFO  wowchat.WoWChat$ - Disconnected from server! Reconnecting in 10 seconds...x
```

## Post 29178 by Ugoboom (Bug Report Enthusiast) — 2022-11-14T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29178#p29178 | page 1 | era: pre-1.18.1 -->

Update, with the help of Gurky we now have this operational

<https://github.com/Zebouski/WoWChat-Turtle>

Let me know if anyone interested needs help getting this set up.

