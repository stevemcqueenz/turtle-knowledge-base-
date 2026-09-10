---
title: "Revert Server Time Back to Normal"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23526"
topic_id: 23526
forum_id: 14
forum: "Suggestions"
author: "Pizzayo"
author_authority: "player"
posted: "2026-01-08T12:44:00Z"
last_post: "2026-03-20T18:46:00Z"
post_count: 19
pages: 1
fetched: "2026-09-10T11:00:52Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Revert Server Time Back to Normal

## Post 164671 by Pizzayo (Barrens Chat Casualty) — 2026-01-08T12:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164671#p164671 | page 1 | era: 1.18.1-announced-pre-release -->

Hey! I'm reposting this here for better visibility, since [my original thread in General](https://forum.turtlecraft.gg/viewtopic.php?t=23343) didn’t get much traction.

 **TL;DR: I’d like to suggest reverting server time back to its normal behavior.**

With server time currently running at 2× speed:
- **Server time becomes effectively useless** - it no longer uniquely identifies a moment in time, since the same server time occurs twice per real day.
- Scheduling raids or events “at server time X” becomes unreliable and confusing.
- Addons relying on GetGameTime() break or behave incorrectly.
- Most importantly, **this change does not meaningfully improve access to in-game day or night**. Due to existing in-game timezones (i.e. Kalimdor vs. Eastern Kingdoms), players already have access to both depending on the in-game continent they're on.
Overall, the current behavior removes much of the practical value of server time while introducing coordination and addon compatibility issues. Reverting it would restore a shared, reliable time reference for players and addons.

Thanks, I’d appreciate any feedback.

*Last edited by Pizzayo on Sat Feb 21, 2026 2:18 am, edited 1 time in total.*

## Post 165150 by Lirithiel — 2026-01-14T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165150#p165150 | page 1 | era: 1.18.1-announced-pre-release -->

Absolutely horrible change. Having zone times sped up just warps my sense of time. I really can't believe that there were enough special snowflakes complaining about always playing at night or day. It's why Blizz removed the darkness completely and made all zones (except Thousand Needles) look like daytime even if it's night unless you look up into the sky. Having zones run on a 24-hour clock like IRL just felt natural. Now it's just a hot mess esp for RPers.

## Post 165232 by Thejackallives — 2026-01-15T11:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165232#p165232 | page 1 | era: 1.18.1-announced-pre-release -->

i totally agree i hope this gets reverted back to the way it was

## Post 165269 by Imonobor (Bug Report Enthusiast) — 2026-01-15T19:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165269#p165269 | page 1 | era: 1.18.1-announced-pre-release -->

Is it not possible to decouple the visual time of day from the in-game clock? So we can have the best of both worlds in a sense.
With how many things are hardcoded in the vanilla client, I don't have high hopes though.

## Post 165271 by Pizzayo (Barrens Chat Casualty) — 2026-01-15T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165271#p165271 | page 1 | era: 1.18.1-announced-pre-release -->

> **Imonobor wrote: Thu Jan 15, 2026 7:17 pm**
> Is it not possible to decouple the visual time of day from the in-game clock? So we can have the best of both worlds in a sense.
>  With how many things are hardcoded in the vanilla client, I don't have high hopes though.

Unfortunately not. Here's what a dev said on [the bug report](https://turtlecraft.gg/bug-report?id=18395) I created some time ago:

> It is not possible to change the day night cycle independently of the clock.

## Post 165336 by Imonobor (Bug Report Enthusiast) — 2026-01-16T14:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165336#p165336 | page 1 | era: 1.18.1-announced-pre-release -->

As I suspected. If only we had a certain engine reimplementation of the vanilla client, we could fix so many things...   scared_turtle_head

## Post 165350 by Rejuve (Barrens Chat Casualty) — 2026-01-16T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165350#p165350 | page 1 | era: 1.18.1-announced-pre-release -->

Dont understand much of what ppl write in this thread, but. yes I want things back to how it was up untill two weeks ago.

## Post 165411 by Thejackallives — 2026-01-17T09:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165411#p165411 | page 1 | era: 1.18.1-announced-pre-release -->

its breaking an addon that all levelers such as myself is depending on which is pizzaworldbuff it was 100% reliable and does help alot but now even after updating to the latest version which is modified to work around the server time change its still not reliable and makes mistakes and im sure it will be breaking other addons too and besides the players who complained about day / night cycle they couldve simply changed continents to work that out thats how the game originally designed i guess and also players who use the server time to coordinate content together since theyre from allover the world with different times it will be difficult for them to do that as well.

## Post 165416 by Chev03 — 2026-01-17T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165416#p165416 | page 1 | era: 1.18.1-announced-pre-release -->

Let's hope the TWoW Team has so much design maturity to treat the time change as an experiment that simply needs to be rolled back.

I can't imagine why groups should all of a sudden go for GMT+0 etc time formats to coordinate when the server time was a reliable and easy way to accomplish the goal of coordinating a time.

There is other ways to provide day/night change experience to players. Maybe this can be a mod or switching day/night appearance once a month without touching time itself.

Just don't f* with time xD

## Post 165420 by Xudo (Grandmaster of Forum PvP) — 2026-01-17T11:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165420#p165420 | page 1 | era: 1.18.1-announced-pre-release -->

There was two threads regarding faster day/night cycle
[viewtopic.php?t=12072](https://forum.turtlecraft.gg/viewtopic.php?t=12072)
[viewtopic.php?t=14578](https://forum.turtlecraft.gg/viewtopic.php?t=14578)
From my understanding, "pros" of that change are:
 - some players in worldwide servers had to play in game "night" while they had a day IRL. With faster day/night schedule it can be mixed
 - it might shift schedule of timed events like Fishing Extravaganza
 - it would be possible to add NPC schedules depending on the time of day and that would not be miserable for players in wrong timezones

Communicating via UTC+number time is fine. Whole real world ouside uses it.
Breaking addons is probably unforeseen outcome. Aren't there any alternative ways of getting time?

## Post 169081 by Pizzayo (Barrens Chat Casualty) — 2026-02-21T02:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169081#p169081 | page 1 | era: 1.18.1-announced-pre-release -->

Bump.

Any news, insights or feedback from the turtle team? I haven't heard anything from the team outside of my bug report that was promptly closed.

## Post 169092 by Hotcoldman2 — 2026-02-21T06:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169092#p169092 | page 1 | era: 1.18.1-announced-pre-release -->

Yep, I was a big fan of Azeroth and Kalimdor having different time zones, now it's all kind of all over the place.

## Post 169349 by Turboman (Patch Note Conspiracy Theorist) — 2026-02-24T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169349#p169349 | page 1 | era: 1.18.1-announced-pre-release -->

I thought it was a bug. They should roll back definitely, feels like a hot mess.

## Post 171456 by Rakkanishu — 2026-03-20T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171456#p171456 | page 1 | era: post-1.18.1 -->

Time literally flies now. It breaks the immersion. I am not even talking about roleplayers (gathered for a nice evening chat? well, sit here and watch the sun set then rise, then go down again). there is just something uncomfortably eerie about condensing a good old day into sheer minutes.

Having time passing with a real world speed has always been **great** in WoW, having time zones on Azeroth was **awesome**.

Please, bring normal speed back.

## Post 171484 by Dbl (Barrens Chat Casualty) — 2026-03-20T18:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171484#p171484 | page 1 | era: post-1.18.1 -->

This is one of the worst and most unimmerse  changes rhey ever made, please roll it back we already got Kalim EK different time there was no issue

## Post 171485 by Plagues2 (Barrens Chat Casualty) — 2026-03-20T18:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171485#p171485 | page 1 | era: post-1.18.1 -->

I legit through they broke the day night cycle and came here to look.... This is intended?   I is each day/night cycle like 15 mins now? It moves at the speed of light.

## Post 171486 by Eversong4242 — 2026-03-20T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171486#p171486 | page 1 | era: post-1.18.1 -->

yes! a thousand times yes, whoever had this idea to make wow time like sims???. it's just unplayable rn

## Post 171487 by Eversong4242 — 2026-03-20T18:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171487#p171487 | page 1 | era: post-1.18.1 -->

i used to love looking at the night sky and now there are two moons yeeting trough as if thrown by some titan, come on guys, make it make sense

## Post 171489 by Culetto187 — 2026-03-20T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171489#p171489 | page 1 | era: post-1.18.1 -->

20th of March update fully breaks immersion into the game and removes the charm of loggin into wow during different time IRL to see the differnt time in game.
It should not be that in 40 min irl a full day-night cycle passes. Literally you could see a full day change during a time spam required for a single quest. Ridiculous to me.

If the argument is to provide people with a time change so they experience different vibes and colors of the beautiful world, I have got no problem with speeding up the time but not 100x as it is right now, somewhat like 1 sec IRL to 2 min in game. Make it faster but not to absurd level. If required and completely necessary, make it 2 times faster than IRL or 3x but not what it currently is.

Suggestion: even making it 4hr cycle makes sense. 1hr for the morning, 1hr afternoon, 1hr evening and 1h night. All happy

