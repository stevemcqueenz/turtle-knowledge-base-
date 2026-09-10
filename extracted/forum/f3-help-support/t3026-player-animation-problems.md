---
title: "Player Animation Problems?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3026"
topic_id: 3026
forum_id: 3
forum: "Help & Support"
author: "Wolfe070"
author_authority: "player"
posted: "2022-05-17T17:12:00Z"
last_post: "2024-01-26T06:05:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:55:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Player Animation Problems?

## Post 18661 by Wolfe070 — 2022-05-17T17:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18661#p18661 | page 1 | era: pre-1.18.1 -->

Hello all,

First, I would like to thank the Turtle WoW team for all the fantastic work they have put in and continue to put into the project - it’s an amazing thing! :)

I wanted to bring up a couple problems I have noticed not just with turtle WoW but a couple other vanilla servers - player animation problems.

When player characters move around the world it is often jagged or unsmooth - this can be seen in this video comparing different private servers - some private servers have this unsmooth movement, others do not.

 *edit* As seen here -
[embed: https://www.youtube.com/embed/vBn_W8ppQOw?start=3]

There is also an unsmooth player turning animation, where the player character will unsmoothly / jaggedly turn to look in another direction. I do not know if this is connected to the first issue.

This has been brought up a few times on the discord, but I wanted to make a forum post to see if it could get some more traction.

[https://discord.com/channels/4666224558 ... 6771831838](https://discord.com/channels/466622455805378571/691438750185553950/845791636771831838)

 -My  post

[https://discord.com/channels/4666224558 ... 5931328593](https://discord.com/channels/466622455805378571/691438750185553950/823580795931328593)

 -Coun Ironhoof

[https://discord.com/channels/4666224558 ... 4500076545](https://discord.com/channels/466622455805378571/691438750185553950/921063064500076545)

 -INKU

It may also be found here in the vmangos github development “issues” -

<https://github.com/vmangos/core/issues/129>

I can try to put a video to demonstrate the turn animation issues too if it helps!
Thanks again for your time and I know this problem is probably beyond the Turtle WoW project, but I wanted to bring it up nonetheless.

Spirits be wit ya!
 -Wolfe/Wolftusk   smiling_turtle_head

## Post 19232 by Wolfe070 — 2022-06-18T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19232#p19232 | page 1 | era: pre-1.18.1 -->

In searching for solutions to these problems, I was able to fix the player side turning animation problem!

 ****The other problem with other player characters moving in a glitchy way I have not solved, as shown in the video above.****

The turning problem however seems to be client side, and I was able to fix it (I think) by forcing the client to run at 64 fps. I could only do this by creating a read-only config file with SET gxRefresh "64" and **ALSO** using my nvdia control panel to force it to stay at 64 fps.

This second step was done by opening Nvidia Control Panel, going to "Manage 3D settings" - under 3D settings, going to the program settings tab, adding the turtle wow.exe, and force a "Max Frame Rate" to "64". Attached is a screenshot of this step.

[![Image](https://i.ibb.co/XCPjvZW/Screenshot-2022-06-18-072206.png)](https://ibb.co/87wNSDm)

I will continue looking for solutions to the other player character animation issues, but it might be connected the mangos core/server backend. It is strange how some servers seem to have this problem, and others not so much.

Again thank you to all the devs and players for your time!   smiling_turtle

Cheers,
 -Wolftusk

## Post 85889 by Zblankz — 2024-01-26T06:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85889#p85889 | page 1 | era: pre-1.18.1 -->

Why in the world did no one reply to this? Because I've been struggling with this issue for two days now at least I know I'm not the only one with the issue as I literally tried every possible solution and was at wits end

