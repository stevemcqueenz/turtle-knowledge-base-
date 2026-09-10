---
title: "Changing the damage font resolution?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3782"
topic_id: 3782
forum_id: 29
forum: "Modding"
author: "Grodo"
author_authority: "player"
posted: "2022-08-19T11:43:00Z"
last_post: "2022-09-05T15:20:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:43:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Changing the damage font resolution?

## Post 22810 by Grodo — 2022-08-19T11:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22810#p22810 | page 1 | era: pre-1.18.1 -->

Hi.
Does anyone know this is possible? I wish to have a higher resolution on damage text . preferably hardwired without addon. If not possible, what addon could be used?
Thanks

## Post 22833 by Facemaker — 2022-08-19T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22833#p22833 | page 1 | era: pre-1.18.1 -->

as much as i want it. no it is not possible onb 1.12.1 client, sadly. neither addons nor client wise

## Post 22885 by Grodo — 2022-08-20T06:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22885#p22885 | page 1 | era: pre-1.18.1 -->

Such a shame. Its the only text that really is so low resolution...

## Post 24319 by Dogfood420 — 2022-09-03T23:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24319#p24319 | page 1 | era: pre-1.18.1 -->

> **Facemaker wrote: Fri Aug 19, 2022 2:59 pm**
> as much as i want it. no it is not possible onb 1.12.1 client, sadly. neither addons nor client wise

Do you know why it is not possible?
Like technical details

## Post 24425 by Facemaker — 2022-09-05T15:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24425#p24425 | page 1 | era: pre-1.18.1 -->

> **Dogfood420 wrote: Sat Sep 03, 2022 11:51 pm**
> > **Facemaker wrote: Fri Aug 19, 2022 2:59 pm**
> > as much as i want it. no it is not possible onb 1.12.1 client, sadly. neither addons nor client wise
>
>   Do you know why it is not possible?
>  Like technical details

There's no real fix to that. The combat text that appears over units is not part of the UI but rendered as part of the 3d game world and then upscaled with a very bad algorithm that produces the pixelation you see ingame. Since addons cannot touch the 3d game world, nothing can be done about that.

So for anything lower than legion your options are:

 -Use an addon that redirects the damage output (such as SCT, MSBT) and lose the text placement over units

 -Live with the pixelization

Combat text addons simply create a frame on the UI to which they redirect the relevant combat text (damage taken, damage dealt, messages, etc)

However, even the 2d text is not always easy to deal with, due to how old wow client handled text, even text that is part of the UI can look bad.

That happens as the result of a combination of UI scale, the text size you set in the UI and the resolution you play at.

The higher the res, the lower the UI scale needed but lowest that wow can go is 0.64 and, even if you enter a value below that using a console command will just set it to 0.64 which can cause even 2d text to look bad. Especially, if you want to use pixel perfect fonts

It takes a bit of playing around to find a good combo in my experience

