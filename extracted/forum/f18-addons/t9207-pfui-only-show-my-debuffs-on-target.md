---
title: "PFUI: Only show my debuffs on target"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9207"
topic_id: 9207
forum_id: 18
forum: "AddOns"
author: "Hawksley"
author_authority: "player"
posted: "2023-08-29T21:01:00Z"
last_post: "2024-04-08T19:11:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T10:29:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PFUI: Only show my debuffs on target

## Post 59827 by Hawksley — 2023-08-29T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59827#p59827 | page 1 | era: pre-1.18.1 -->

Is it possible to configure PFUI to only show my debuffs on the target?

I've been looking for this option but can't seem to find it.

## Post 80115 by Raxk — 2023-12-06T21:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80115#p80115 | page 1 | era: pre-1.18.1 -->

whelp, also searching for  the same and couldnt find a answer.

## Post 80116 by Nullnvoid — 2023-12-06T22:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80116#p80116 | page 1 | era: pre-1.18.1 -->

PFUI specifically i don't know anything about. I don't think this is possible with the version 1.12 client that turtlewow uses though. The best you could probably do is have an addon that only shows debuffs that your "class" can cast and if there is some ransom item or spell that uses the same icon as your class spell it would trigger a false positive.

## Post 83909 by Manateufel — 2024-01-07T16:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83909#p83909 | page 1 | era: pre-1.18.1 -->

Maybe 'Chronometer' will help with that, at least I was able to track my Druid HoTs

## Post 83923 by Balake (Bug Report Enthusiast) — 2024-01-07T19:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83923#p83923 | page 1 | era: pre-1.18.1 -->

Not possible, the client isn't told by the server what buffs & debuffs belong to whom.

I secondly suggest Chronometer as the best addon for tracking your debuffs on enemies.

## Post 89227 by Schwarzschild (Barrens Chat Casualty) — 2024-03-02T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89227#p89227 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sun Jan 07, 2024 7:58 pm**
> Not possible, the client isn't told by the server what buffs & debuffs belong to whom.
>
>  I secondly suggest Chronometer as the best addon for tracking your debuffs on enemies.

Using PFUI, Chronometer conflicts with the aux-addon, completely breaking my UI (actionbar buttons unclickable; any button clicks just returning a Chronometer LUA error) when both addons are activated. Deleting WDB did not help.

Modified Power Auras is even worse. Super buggy; auras get deleted on a whim, addon UI being unresponsive.

Theoretically the built in Debuff Bar in PFUI should be able to do the trick using a Whitelist filter, but I have no idea how to configure that and there seems to be absolutely ZERO documentation on the web.

## Post 89241 by Bordar — 2024-03-02T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89241#p89241 | page 1 | era: pre-1.18.1 -->

You can't do that on vanilla client.
This client can't recognize one mob with same name with other, so if you cast something on defias pillager addon will show it on every mob with same name

## Post 89702 by Fireman591 — 2024-03-08T17:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89702#p89702 | page 1 | era: pre-1.18.1 -->

That's not true.  You can create a whitelist of buffs/debuffs to show on the nameplates that will only show those buff/debuffs. Just move the whitelist filter to the first entry. I think that's how it works.  Been a while but it is most certainly possible to filter the buffs/debuffs. You can also create a blacklist as well. I think there is a filter specifically for your own buffs/debuffs as well.

## Post 91984 by Neinnlive — 2024-04-03T08:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91984#p91984 | page 1 | era: pre-1.18.1 -->

> **Fireman591 wrote: Fri Mar 08, 2024 5:25 pm**
> That's not true.  You can create a whitelist of buffs/debuffs to show on the nameplates that will only show those buff/debuffs. Just move the whitelist filter to the first entry. I think that's how it works.  Been a while but it is most certainly possible to filter the buffs/debuffs. You can also create a blacklist as well. I think there is a filter specifically for your own buffs/debuffs as well.

That'll mean you see the debuffs from same classes also. SW:Pain for example.

Is there no other solution. Didnt anyone ever found workaround/addon to be able to only see on debuffs/dots. I would also be ok to see them on an extra window or so.

## Post 91989 by Borefficz (Patch Note Conspiracy Theorist) — 2024-04-03T08:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91989#p91989 | page 1 | era: pre-1.18.1 -->

> **Hawksley wrote: Tue Aug 29, 2023 9:01 pm**
> Is it possible to configure PFUI to only show my debuffs on the target?
>
>  I've been looking for this option but can't seem to find it.

Debuff bar/enable debuffs on nameplates and whitelist what you want to see.

## Post 92396 by Hawksley — 2024-04-08T19:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92396#p92396 | page 1 | era: pre-1.18.1 -->

Went with Chronometer in the end, does the job nicely.

