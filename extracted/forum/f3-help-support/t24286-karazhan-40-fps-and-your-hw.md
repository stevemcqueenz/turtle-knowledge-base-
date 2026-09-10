---
title: "Karazhan 40 , FPS and your HW"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24286"
topic_id: 24286
forum_id: 3
forum: "Help & Support"
author: "moloki"
author_authority: "player"
posted: "2026-03-14T16:05:00Z"
last_post: "2026-03-16T13:47:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:36:39Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Karazhan 40 , FPS and your HW

## Post 170812 by moloki — 2026-03-14T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170812#p170812 | page 1 | era: 1.18.1-announced-pre-release -->

Our guild has been complaining internally for a long time about the abysmally poor performance on many encounters in Karazhan40 compared to other Vanilla raids. Interestingly, performance gets significantly better in Outlands, which is strange.

I really hope this doesn’t get even worse in future raids and new content. I’m not sure what the exact reason is, but I suspect there may simply be too much happening at once for the older 1.12 client to handle. One could argue that Turtle WoW should try to address this issue, but I doubt that will happen.

I’m curious to know what hardware other Kara40 raiders are using and what approximate FPS you get during encounters.

Please let me know what CPU, RAM and GPU you have.
Might also be interesting to know how many need to use PerfBoost in order to even raid (like me)

Example:
Ryzen 3 1200, 16GB DDR4, GTX 1660 6GB.
FPS in karazhan can be as low as 2-5fps on GnarlMoon, medivh, Anomalus to about 30fps-ish on thrash.
I use PerfBoost on bosses to remove ALL players farther away than 2yards.
its not even playable without it on bosses unfortunately.

Very curious what numbers and setup others play with.

Thank you

## Post 170848 by quetal — 2026-03-15T04:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170848#p170848 | page 1 | era: 1.18.1-announced-pre-release -->

probably all our hardware is well more than enough.
it's an old single-threaded piece of software, meaning if you add anything like addons and such the timing for the calculation of a single frame can get worse dramatically if you're not very sensible about what you add to the workload that can't be processed in parallel (all one pipeline).

I have a gtx 1060 6gb, haven't looked at the fps so much because for me it plays "normally" (>60 average fps, big fps drops only when the raid or part of it is wiped) and advise the following:
 * install superwow
 * install vanillafixes
 * install unitxp
 * don't use dxvk
 * disable all but the essential addons (like Big Wigs)
 * for the addons that you use that are nieche (even e.g. pallypower), there are sometimes alternative versions that are better maintained / more recently updated

The big performance hitters can be old addons for damage meters and such. If you look closely at each addons repository you will surely find that some are not maintained anymore and you will find more recently updated alternatives. E.g. since shagu stopped developing, if you use his addons e.g. pfui, the repository urls that you had are now deprecated and you need to look on github for new forks and use those instead (or find replacement addons).

Besides that, also of course make sure the game actually uses your graphics card and not the cpu's embedded gpu unit (e.g. disable in bios lol, or check in nvidia control panel "manage 3d settings" then "program settings" and go through the options like "OpenGL Rendering GPU").

## Post 170849 by moloki — 2026-03-15T04:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170849#p170849 | page 1 | era: 1.18.1-announced-pre-release -->

its not the addons. i tested with none ofc. what cpu n memory u have? 60+ fps in karazhan 40  seems suss. none in my guild except for one using 5090 and a monster computer reports so high fps.. are you playing at 640x480?

oh, you are not using dxvk?? why not?

## Post 170971 by Dili — 2026-03-16T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170971#p170971 | page 1 | era: 1.18.1-announced-pre-release -->

Hey this helped me a bit.

i5 13k, 4080 usw.

before I also turned down my resolution to 720p and put some image sharpening and lowered terrain distance (200) didnt help much with the fps issue but this perf boost addon works like a charm.

Are there more addons/scripts/dll like this?? pls share

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/HZ0LZzp]

Nvidia Image Sharpening Trick;
[embed: https://www.youtube.com/embed/_is1jRo86VM]

