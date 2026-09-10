---
title: "Linux Launcher after domain change"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23350"
topic_id: 23350
forum_id: 3
forum: "Help & Support"
author: "Kagamul"
author_authority: "player"
posted: "2025-12-20T17:13:00Z"
last_post: "2025-12-23T09:20:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:37:44Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Linux Launcher after domain change

## Post 163367 by Kagamul — 2025-12-20T17:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163367#p163367 | page 1 | era: 1.18.1-announced-pre-release -->

The linux launcher stopped working since the domain change.
Downloading it from the new domain (and clearing the ~/.local/share/turtle-wow folder) doesn't seem to help.
Manually setting the new domain in ~/.local/share/turtle-wow/preferences.json to "serverUrl":"<https://launcher.turtlecraft.gg>" also doesn't work: Code: Select all

```
[2025-12-20 17:49:44.840] [info] [UPDATER] Launching client at "/share/apps/TurtleWOW"
[2025-12-20 17:49:45.873] [info] [Fetch] Cache miss for "/api/mirrors"
[2025-12-20 17:49:45.892] [warn] [Fetch] Failed to fetch "/api/mirrors" 500 url not allowed on the configured scope: https://launcher.turtlecraft.gg/api/mirrors
[2025-12-20 17:49:45.892] [info] [SETUP] Server unreachable, going offline
```

Opening <https://launcher.turtlecraft.gg/api/mirrors> manually in a browser does work normally and doesn't run into a code 500, however, so I'm at a loss here...

I'm assuming we'll have to wait for an updated launcher version?

## Post 163370 by Venomtongue — 2025-12-20T18:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163370#p163370 | page 1 | era: 1.18.1-announced-pre-release -->

Running into the same issue.

## Post 163421 by Rocketsboy85 — 2025-12-21T08:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163421#p163421 | page 1 | era: 1.18.1-announced-pre-release -->

I second this. Exactly the same issue happened to me. Linux launcher need an update.

## Post 163445 by Bogdantomasciuc — 2025-12-21T13:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163445#p163445 | page 1 | era: 1.18.1-announced-pre-release -->

Same boat. What is needed to change in config or elsewhere to get the launcher to connect to the update servers?

## Post 163447 by Saenonf — 2025-12-21T13:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163447#p163447 | page 1 | era: 1.18.1-announced-pre-release -->

Hi Linux mates,

I'm trying with this config in my /etc/hosts and it looks like is running good (in this moment is downloading from the new mirrors, first install in my linux computer) - you can check these ips resolving the DNS:
Code: Select all

```
# TurtleCraft launcher (new)
172.66.157.146 launcher.turtlecraft.gg
104.20.23.69 launcher.turtlecraft.gg
172.66.157.146 turtle-wow.org
172.66.157.146 launcher.turtle-wow.org
104.20.23.69 turtle-wow.org
104.20.23.69 launcher.turtle-wow.org
```

After include this config (with the launcher closed): Code: Select all

```
resolvectl flush-caches
```

And launch it again, in my case in pop!_os with a custom command to launch it using my nvidia card: Code: Select all

```
prime-run mangohud ./TurtleWoW*.AppImage
```

Let me if this helps you :)

## Post 163448 by Warpq — 2025-12-21T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163448#p163448 | page 1 | era: 1.18.1-announced-pre-release -->

That worked like a charm.
Thank you very much   smiling_turtle

## Post 163462 by Bladeira — 2025-12-21T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163462#p163462 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks Saenonf
Code: Select all

```
sudo nano /etc/hosts
```

add
Code: Select all

```
# TurtleCraft launcher (new)
172.66.157.146 launcher.turtlecraft.gg
104.20.23.69 launcher.turtlecraft.gg
172.66.157.146 turtle-wow.org
172.66.157.146 launcher.turtle-wow.org
104.20.23.69 turtle-wow.org
104.20.23.69 launcher.turtle-wow.org
```

save

did the job.

## Post 163467 by Saenonf — 2025-12-21T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163467#p163467 | page 1 | era: 1.18.1-announced-pre-release -->

you're welcome mates! very happy that it was useful!

## Post 163535 by Dzver — 2025-12-23T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163535#p163535 | page 1 | era: 1.18.1-announced-pre-release -->

thanks for this

