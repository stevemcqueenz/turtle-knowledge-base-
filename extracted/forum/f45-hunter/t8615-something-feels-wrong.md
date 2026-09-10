---
title: "Something feels wrong."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8615"
topic_id: 8615
forum_id: 45
forum: "Hunter"
author: "Kwall"
author_authority: "player"
posted: "2023-08-01T16:54:00Z"
last_post: "2023-09-04T13:40:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:14:27Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Something feels wrong.

## Post 55495 by Kwall — 2023-08-01T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55495#p55495 | page 1 | era: pre-1.18.1 -->

So it's more of an annoyance than anything but when you attack a mob and send your pet in it doesn't growl when it should. If I don't spam the growl button on the pull the mob will run to me and start hitting me the pet won't use growl until to mob stops moving it's like a delay or something growl has a 5 yard range it just feels wrong. This doesn't happen in other private servers Ive played. I also remember this not being an issue in vanilla but it was a long time ago and my memory could be wrong. I haven't played classic so I can't comment on that but videos Ive seen it seems to be working fine. I put a bug ticket in on git hub. But I've seen other similar tickets get closed and its still happening. It's not just growl it's any pet ability they just don't use them when the should.

## Post 60783 by Vimgreen — 2023-09-04T13:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60783#p60783 | page 1 | era: pre-1.18.1 -->

I just have a suspicion that it might be because this server runs on 1.12 while classic ran on the modern version of the game. So this issue was probably present in actual vanilla. Just a guess tho.

## Post 60785 by Kairion (Bug Report Enthusiast) — 2023-09-04T13:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60785#p60785 | page 1 | era: pre-1.18.1 -->

Do you have claw on autocast?

The pet does a priority list of its abilities. Not entirely sure but i think it picks leftmost autocast abilities in the bars first. Turns out if you have claw, it is never off gcd, so it will never growl if growl is to the right (at least thats how it was on a previous server i played. Haven't played hunter here too much)

