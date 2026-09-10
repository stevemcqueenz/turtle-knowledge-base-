---
title: "Increased draw distance?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4284"
topic_id: 4284
forum_id: 14
forum: "Suggestions"
author: "Allwynd01"
author_authority: "player"
posted: "2022-09-19T18:22:00Z"
last_post: "2025-02-11T15:20:00Z"
post_count: 16
pages: 1
fetched: "2026-09-10T11:37:23Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Increased draw distance?

## Post 25526 by Allwynd01 (Bug Report Enthusiast) — 2022-09-19T18:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25526#p25526 | page 1 | era: pre-1.18.1 -->

There was a tool called "WoW Machinima Tool" and it worked for 3.3.5. It allowed all kinds of fun things:

 - detach camera from character
 - hide trees
 - change the fog colors of a zone to other zones' fog colors
 - increase draw distance
 - change time of day

I've tried to get that tool to work with 1.12.1, but it just refuses to work, I've come to terms with that, but what does the community think of having draw distance increased?

To my understanding, the default maximum draw distance or farclip (I'm not sure if they are interchangeable terms) is 777 for Vanilla, in WoTLK it got increased to 1277 and in further expansions even more.

Should this be possible for Turtle WoW? As either a client-side thing or a server-side thing. I think someone may say that there can be negative consequences for those who don't use this (if it's client-side), but I believe the draw distance can be increased to some extent to make the visuals more beautiful. Empty zones like The Barrens of Westfall show how poor the draw distance really is and that it can be somewhat better.

## Post 25537 by Geojak (Grandmaster of Forum PvP) — 2022-09-19T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25537#p25537 | page 1 | era: pre-1.18.1 -->

Vanilla-tweaked can increase draw distance

## Post 25538 by Geojak (Grandmaster of Forum PvP) — 2022-09-19T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25538#p25538 | page 1 | era: pre-1.18.1 -->

[viewtopic.php?t=3268&start=20](https://forum.turtlecraft.gg/viewtopic.php?t=3268&start=20)

## Post 25551 by Pantheon (Barrens Chat Casualty) — 2022-09-20T00:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25551#p25551 | page 1 | era: pre-1.18.1 -->

Didnt a version of Optifine work for WoW before? I remember seeing a very old video on YouTube of some guy absolutely CRANKING the view distance, he could see from the top of Kalimdor all the way to the end. He even saw the lifts working in TB from Org.

Edit: It wasnt Optifine it was Machinima Tool. Here's the video I saw on YouTube
[embed: https://www.youtube.com/embed/nzTYvEBsghc]

## Post 119310 by Tumicate — 2025-02-08T09:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119310#p119310 | page 1 | era: pre-1.18.1 -->

> **Pantheon wrote: Tue Sep 20, 2022 12:22 am**
> Didnt a version of Optifine work for WoW before? I remember seeing a very old video on YouTube of some guy absolutely CRANKING the view distance, he could see from the top of Kalimdor all the way to the end. He even saw the lifts working in TB from Org.
>
>  Edit: It wasnt Optifine it was Machinima Tool. Here's the video I saw on YouTube
> [embed: https://www.youtube.com/embed/nzTYvEBsghc]

Just tried machinima and it doesn't seem to be compatible with turtlewow.
Does anyone could get it working? Or do we have any chance of this draw distance plan moving foward? (i use tweaks and still find it not enough)   unhappy_turtle

## Post 119330 by Silhouette (Barrens Chat Casualty) — 2025-02-08T17:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119330#p119330 | page 1 | era: pre-1.18.1 -->

This Machinima Tool is a Cataclysm version of Azeroth, it's in no way meant to be used for Vanilla and it looks quite unplayable with such fps drops. Really just meant for Machinimists to showcase some good landscapes rather than a tool to improve player experience.

## Post 119335 by Steakhouse (Patch Note Conspiracy Theorist) — 2025-02-08T17:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119335#p119335 | page 1 | era: pre-1.18.1 -->

I imagine it'll probably happen with the unreal engine

## Post 119336 by Silhouette (Barrens Chat Casualty) — 2025-02-08T17:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119336#p119336 | page 1 | era: pre-1.18.1 -->

> **Steakhouse wrote: Sat Feb 08, 2025 5:43 pm**
> I imagine it'll probably happen with the unreal engine

That mostly depends on the way the upcoming game client will be optimized, as well as their server capacity since allowing more informations to a player is creating more load to the server.

Though, bear in mind that Unreal Engine 5 isn't optimized for MMOs, and Twow devs are very unlikely to customize this game engine in order to make it work perfectly for WoW. They're essentialy taking the UE5 as it is and tweaking the graphics.

## Post 119337 by Steakhouse (Patch Note Conspiracy Theorist) — 2025-02-08T17:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119337#p119337 | page 1 | era: pre-1.18.1 -->

Draw distance doesn't increase server load afaik since object spawn distance isn't related to draw distance

## Post 119339 by Silhouette (Barrens Chat Casualty) — 2025-02-08T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119339#p119339 | page 1 | era: pre-1.18.1 -->

> **Steakhouse wrote: Sat Feb 08, 2025 5:58 pm**
> Draw distance doesn't increase server load afaik since object spawn distance isn't related to draw distance

Yet it is atleast an hardware issue because of all the things to render, most games doing something equivalent apply several Level of Details (different textures) depending on the range between the player and an object otherwise the whole thing would be way too heavy to load even with modern hardware. I doubt that such technicality is something that Twow is capable of.

## Post 119360 by Steakhouse (Patch Note Conspiracy Theorist) — 2025-02-08T20:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119360#p119360 | page 1 | era: pre-1.18.1 -->

But LOD is client dependent not server dependent

## Post 119372 by Silhouette (Barrens Chat Casualty) — 2025-02-08T21:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119372#p119372 | page 1 | era: pre-1.18.1 -->

> **Steakhouse wrote: Sat Feb 08, 2025 8:06 pm**
> But LOD is client dependent not server dependent

By Hardware, I mean not only the server but the hardware that any of us possess so server-side issue or not there is still gonna be a problem resulting in a poor player experience hence the FPS drop in the video above. I don't imagine UE5 Graphics with unlimited draw distance without a powerpoint gaming experience of 1 FPS.

## Post 119378 by Jan125 (Barrens Chat Casualty) — 2025-02-08T22:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119378#p119378 | page 1 | era: pre-1.18.1 -->

Texture size shouldn't affect rendering performance in most cases, IIRC.
Vanilla already has an implementation of mesh-LoD (Terrain complexity), object-LoD (fade-in), and primitive culling of objects based on bounding boxes/obstructions (Trees will flicker in and out of existance at very high artificial view distances).
Obviously, advances in rendering techniques and optimization will solve some of these issues.
UE5 will probably implement a sort of chunk loading like the original game. It remains to be seen how well it will work.

## Post 119523 by Steakhouse (Patch Note Conspiracy Theorist) — 2025-02-10T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119523#p119523 | page 1 | era: pre-1.18.1 -->

> **Silhouette wrote: Sat Feb 08, 2025 9:00 pm**
> > **Steakhouse wrote: Sat Feb 08, 2025 8:06 pm**
> > But LOD is client dependent not server dependent
>
>  By Hardware, I mean not only the server but the hardware that any of us possess so server-side issue or not there is still gonna be a problem resulting in a poor player experience hence the FPS drop in the video above. I don't imagine UE5 Graphics with unlimited draw distance without a powerpoint gaming experience of 1 FPS.

So don't increase the draw distance if your hardware can't take it ? Are we misunderstanding each other's position here ?

## Post 119577 by Silhouette (Barrens Chat Casualty) — 2025-02-10T22:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119577#p119577 | page 1 | era: pre-1.18.1 -->

> **Steakhouse wrote: Mon Feb 10, 2025 2:22 pm**
> So don't increase the draw distance if your hardware can't take it ? Are we misunderstanding each other's position here ?

We will see how it is by the end of the year, if everything is still going according to the 2025 roadmap. The best compromised would be a better draw distance, but not something as extreme as the one using Machinima Tool.

## Post 119634 by Steakhouse (Patch Note Conspiracy Theorist) — 2025-02-11T15:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=119634#p119634 | page 1 | era: pre-1.18.1 -->

Just let people set it with a slider

