---
title: "/Startattack stoped working on one of my toons."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10294"
topic_id: 10294
forum_id: 3
forum: "Help & Support"
author: "Hoodooman"
author_authority: "player"
posted: "2023-09-27T20:55:00Z"
last_post: "2023-09-29T08:45:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:03:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# /Startattack stoped working on one of my toons.

## Post 67255 by Hoodooman (Barrens Chat Casualty) — 2023-09-27T20:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67255#p67255 | page 1 | era: pre-1.18.1 -->

So yesterday my macros worked fine, but today they do not. I tried rewriting them in multiple different ways, but nothing worked. I got on another toon and the same macros worked fine. What is the deal here? I got muted last night for 20 min over something stupid is this some sort of mod abuse?

Edit: After more tests it doesn't work on either toon unless combined with charge, but still shows the /help message.

Edit 2: I isolated all my addons and it still does not work. If anyone else is having this issue add a comment.

Edit 3: So another player gave me this /run if not IsCurrentAction(47) then UseAction(47) end which works with much more effort. I don't know how many other players were effected by this, but breaking everyones toons is not cool. It also puts a roadblock for normal players to be efficient. So it would be nice to make /startattack functional again.

## Post 67406 by Bigsmerf (Grandmaster of Forum PvP) — 2023-09-28T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67406#p67406 | page 1 | era: pre-1.18.1 -->

Ah, yes. Obviously the GMs and devs are conspiring against all players they wish silenced. A whole twenty minutes of being unable to access communication... What monsters!

## Post 67429 by Isvya (Patch Note Conspiracy Theorist) — 2023-09-28T15:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67429#p67429 | page 1 | era: pre-1.18.1 -->

/startattack is not a function in our client, there is no such command unless you have an addon that can do it for you.
So yeah the devs 100% broke your addon as a lil revenge  wary_turtle_head
Like rly bruh?

## Post 67529 by Hoodooman (Barrens Chat Casualty) — 2023-09-29T06:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67529#p67529 | page 1 | era: pre-1.18.1 -->

Yes. Very sinister.

## Post 67555 by Holyhorrorr (Barrens Chat Casualty) — 2023-09-29T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67555#p67555 | page 1 | era: pre-1.18.1 -->

> **Hoodooman wrote: Wed Sep 27, 2023 8:55 pm**
> So yesterday my macros worked fine, but today they do not. I tried rewriting them in multiple different ways, but nothing worked. I got on another toon and the same macros worked fine. What is the deal here? I got muted last night for 20 min over something stupid is this some sort of mod abuse?
>
>  Edit: After more tests it doesn't work on either toon unless combined with charge, but still shows the /help message.
>
>  Edit 2: I isolated all my addons and it still does not work. If anyone else is having this issue add a comment.
>
>  Edit 3: So another player gave me this /run if not IsCurrentAction(47) then UseAction(47) end which works with much more effort. I don't know how many other players were effected by this, but breaking everyones toons is not cool. It also puts a roadblock for normal players to be efficient. So it would be nice to make /startattack functional again.

There is an easier way then using "CurrentAction".
Code: Select all

```
/run if PlayerFrame.inCombat==nil then AttackTarget() end
```

or Code: Select all

```
/run if not PlayerFrame.inCombat then AttackTarget() end
```

Both should work fine.

