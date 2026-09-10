---
title: "Capitals in 2.0 Client"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14591"
topic_id: 14591
forum_id: 4
forum: "General"
author: "Dracarusggotham"
author_authority: "player"
posted: "2024-07-15T16:42:00Z"
last_post: "2024-07-21T04:35:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:51:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Capitals in 2.0 Client

## Post 99533 by Dracarusggotham (Grandmaster of Forum PvP) — 2024-07-15T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99533#p99533 | page 1 | era: pre-1.18.1 -->

They will change?
I don't mean in the appearance, I mean in the instanced cities.
As you know, when you enter to Orgrimmar or Stormwind for example, the exterior dissapears, this will change? We will be able to see the cities upside of a mountain or climbing in the Stormwind gate?

## Post 99535 by Darktifa (Bug Report Enthusiast) — 2024-07-15T16:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99535#p99535 | page 1 | era: pre-1.18.1 -->

who do u expect to reply about this?

## Post 99604 by Sheed90 (Barrens Chat Casualty) — 2024-07-16T08:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99604#p99604 | page 1 | era: pre-1.18.1 -->

It is possible bacause world streaming will work completely different on unreal engine 5.

But thinks like this may be reworked bacause of performance. Capital Cities are often full with people. So why should a client in Elwynn loads all characters in Stormwind?

## Post 99642 by Daedalus007 (Patch Note Conspiracy Theorist) — 2024-07-16T16:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99642#p99642 | page 1 | era: pre-1.18.1 -->

> **Dracarusggotham wrote: Mon Jul 15, 2024 4:42 pm**
> They will change?
>  I don't mean in the appearance, I mean in the instanced cities.
>  As you know, when you enter to Orgrimmar or Stormwind for example, the exterior dissapears, this will change? We will be able to see the cities upside of a mountain or climbing in the Stormwind gate?

From what I know about Unreal Engine 5, they have stuff like Dynamic LoD, Dynamic Streaming, and Dynamic Culling.
So the easiest way to do it might be to use phasing (players outside your field of view are temporarily hidden until you move the camera towards them) as well as players behind walls and in buildings aren't visible until you move your character over into those areas.

Another method might be to do what some other MMOs do and have an 'enhanced performance' mode where everyone is given a generic full-body cloak/robe in faction colors and their mounts are similarly covered up.  From my analysis of the current client and frametime issues, over 90% of the performance drops seem to happen due to player mounts and pets, especially the custom twow ones.
If it were me there would be that 'enhanced performance' mode activated automatically upon entering major cities.  Everyone would be in a generic robe of the faction color, all player pets (including hunter/warlock pets) would be hidden except your own, and mounts would have a similar 'generic cover' over them.

It is far too early to tell or speculate about this but those are just my thoughts.  Unreal Engine v5 is extremely efficient when compared to UE3 or even UE4.  UE5 from what I've seen has significant performance improvements by reducing excessive draw calls, tessellation, and other factors that hinder performance.  This isn't bloody CryEngine here ;)

## Post 100005 by Allwynd01 (Bug Report Enthusiast) — 2024-07-21T04:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100005#p100005 | page 1 | era: pre-1.18.1 -->

It will probably not work like it is right now. The current WoW is built with the limitations of that engine, which UE5 doesn't have. So all exteriors will most likely remain.

I know you can see certain things in Stormwind depending on where you are, like the Cathedral roof appearing and disappearing. I'd take a guess the cities, especially Orgrimmar and Stormwind will have to be remade with additional assets so that they no longer have empty space, for example, if you could detach the camera from your character and fly it above, you can see buildings have no roofs and aren't fully built, there is only so much to see from the perspective of your character.

So I guess these will be "completed" in the UE5 version, or maybe not, it's a very small issue and I never really asked myself how will they do it.

I'm more interested how do they plan to translate the whole Vanilla WoW into an entirely new engine. I haven't seen anyone really achieve such a thing besides maybe Rockstar doing it with GTA 3, Vice City and San Andreas. I have no idea how this is even done.

I will be more interested to see the snappy and responsive controls of Vanilla WoW being replicated into UE5. Because I remember ever since UE4 and Unity appeared, there have been a lot of wannabe developers who made games in those engines and they were so horrible and sloppy, from obvious things like having horrible lighting to floaty and laggy controls.

Even the trailer Turtle WoW showed for the UE5 shows horrible lighting - in some places it feels almost the same, in others it feels better, but in some it feels entirely worse. I don't know how they will handle this without making the entire ambiance of the game completely botched.

