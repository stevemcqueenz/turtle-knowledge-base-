---
title: "Mobs stacked on top of me - minor gripe"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14103"
topic_id: 14103
forum_id: 14
forum: "Suggestions"
author: "Rfelleto"
author_authority: "player"
posted: "2024-05-31T19:34:00Z"
last_post: "2024-05-31T20:56:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T11:52:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Mobs stacked on top of me - minor gripe

## Post 96103 by Rfelleto (Barrens Chat Casualty) — 2024-05-31T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96103#p96103 | page 1 | era: pre-1.18.1 -->

It is a minor complaint I have and I don't know how feasible this is in vanilla. In retail when a mob charges towards you and he stacks on top of you to attack, he takes one second to step away so he is not on top of your character stacked and attacking.

I don't know if I made myself clear but I would like mobs all stacked on top of my character attacking. Mobs, imo, should step away a bit and start surrounding your character like in retail, until there is no space left and mobs start stacking on each other AROUND the player character, not stacked in a giant murder ball on top of the player character.

## Post 96107 by Zulnam (Bug Report Enthusiast) — 2024-05-31T20:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96107#p96107 | page 1 | era: pre-1.18.1 -->

I would love for a twow developer to chime in on this. Because while it doesn't sound that difficult to implement, we simply don't know, without investigating the code.

Like WoW being an MMORPG the server has to keep track of both player and mob positions (probably true of any game but a singleplayer RPG would only need to do it on client side).

So logical developer mindset would be that Code: Select all

```
calculateDistance(mob.position, player.position) <= [0, 0]
```

than the mob moves away by x and y.

But i am not a game developer and i am taking major trustMeBro leaps here. Again, I would love to hear from an actual developer on the project as to how collision actually works in WoW between characters, if any (technically, there is none, you can walk through any character).

## Post 96109 by Rfelleto (Barrens Chat Casualty) — 2024-05-31T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96109#p96109 | page 1 | era: pre-1.18.1 -->

> **Zulnam wrote: Fri May 31, 2024 8:43 pm**
> I would love for a twow developer to chime in on this. Because while it doesn't sound that difficult to implement, we simply don't know, without investigating the code.
>
>  Like WoW being an MMORPG the server has to keep track of both player and mob positions (probably true of any game but a singleplayer RPG would only need to do it on client side).
>
>  So logical developer mindset would be that Code: Select all
>
> ```
> calculateDistance(mob.position, player.position) <= [0, 0]
> ```
>
>  than the mob moves away by x and y.
>
>  But i am not a game developer and i am taking major trustMeBro leaps here. Again, I would love to hear from an actual developer on the project as to how collision actually works in WoW between characters, if any (technically, there is none, you can walk through any character).

Thank you for chiming in. I though I was the only one a bit disturbed by this :)

I might be wrong, but I think this collision detection doesn't exist in vanilla. Mobs tend to just stack on top of the player. I remember seeing mobs backing away from the player in retail and thought that was really interesting. I would love if it could be introduced in Twow.

