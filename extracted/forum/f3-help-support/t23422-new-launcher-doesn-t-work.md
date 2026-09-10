---
title: "New launcher doesn't work"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23422"
topic_id: 23422
forum_id: 3
forum: "Help & Support"
author: "Markodern1"
author_authority: "player"
posted: "2025-12-28T13:02:00Z"
last_post: "2025-12-28T14:23:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:37:39Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# New launcher doesn't work

## Post 163914 by Markodern1 — 2025-12-28T13:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163914#p163914 | page 1 | era: 1.18.1-announced-pre-release -->

Came back after 2 weeks, downloaded new launcher, it's stuck at "looking for updates", then after some time "unidentified error occured", games itself simply crashes with error 132 (which it did all the time before but automatic launcher scan always helped), mods tab had couple things with update warning, but nothing happens there either. VPN or switching region doesn't help.
Also, this message:
Failed to fetch
 --------------
No additional information
[media]<https://ibb.co/PZVbD7zB>
<https://ibb.co/1tWY14cN>[/media]

## Post 163916 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-12-28T13:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163916#p163916 | page 1 | era: 1.18.1-announced-pre-release -->

> **Markodern1 wrote: Sun Dec 28, 2025 1:02 pm**
> Came back after 2 weeks, downloaded new launcher, it's stuck at "looking for updates", then after some time "unidentified error occured", games itself simply crashes with error 132 (which it did all the time before but automatic launcher scan always helped), mods tab had couple things with update warning, but nothing happens there either. VPN or switching region doesn't help.
>  Also, this message:
>  Failed to fetch
>  --------------
>  No additional information
>   [media]<https://ibb.co/PZVbD7zB>
>  <https://ibb.co/1tWY14cN>[/media]

Greetings!

The best solution for you would be to join our Discord channel and ask your question there. We’ve set up a dedicated #launcher-support channel where you can get real-time help from other players on our server.

While Forum is great for general discussions, Discord is much faster for troubleshooting.

We’d love to see you there!

## Post 163921 by Markodern1 — 2025-12-28T13:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163921#p163921 | page 1 | era: 1.18.1-announced-pre-release -->

> **Pepesmite wrote: Sun Dec 28, 2025 1:10 pm**
> > **Markodern1 wrote: Sun Dec 28, 2025 1:02 pm**
> > Came back after 2 weeks, downloaded new launcher, it's stuck at "looking for updates", then after some time "unidentified error occured", games itself simply crashes with error 132 (which it did all the time before but automatic launcher scan always helped), mods tab had couple things with update warning, but nothing happens there either. VPN or switching region doesn't help.
> >  Also, this message:
> >  Failed to fetch
> >  --------------
> >  No additional information
> >   [media]<https://ibb.co/PZVbD7zB>
> >  <https://ibb.co/1tWY14cN>[/media]
>
>  Greetings!
>
>  The best solution for you would be to join our Discord channel and ask your question there. We’ve set up a dedicated #launcher-support channel where you can get real-time help from other players on our server.
>
>  While Forum is great for general discussions, Discord is much faster for troubleshooting.
>
>  We’d love to see you there!

I cannot ask my question on your Discord channel since to do that i need to confirm my phone number, and every time I'm trying to do that it says "incorrect phone number"

## Post 163926 by Zeran (Patch Note Conspiracy Theorist) — 2025-12-28T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163926#p163926 | page 1 | era: 1.18.1-announced-pre-release -->

> **Markodern1 wrote: Sun Dec 28, 2025 1:21 pm**
> > **Pepesmite wrote: Sun Dec 28, 2025 1:10 pm**
> > > **Markodern1 wrote: Sun Dec 28, 2025 1:02 pm**
> > > Came back after 2 weeks, downloaded new launcher, it's stuck at "looking for updates", then after some time "unidentified error occured", games itself simply crashes with error 132 (which it did all the time before but automatic launcher scan always helped), mods tab had couple things with update warning, but nothing happens there either. VPN or switching region doesn't help.
> > >  Also, this message:
> > >  Failed to fetch
> > >  --------------
> > >  No additional information
> > >   [media]<https://ibb.co/PZVbD7zB>
> > >  <https://ibb.co/1tWY14cN>[/media]
> >
> >  Greetings!
> >
> >  The best solution for you would be to join our Discord channel and ask your question there. We’ve set up a dedicated #launcher-support channel where you can get real-time help from other players on our server.
> >
> >  While Forum is great for general discussions, Discord is much faster for troubleshooting.
> >
> >  We’d love to see you there!
>
>   I cannot ask my question on your Discord channel since to do that i need to confirm my phone number, and every time I'm trying to do that it says "incorrect phone number"

In the folder where your game is installed (same folder as the .exe file), make sure realmlist.wtf says the following:
Code: Select all

```
SET realmList "logon.turtle-server-eu.kz"
SET patchList "logon.turtle-server-eu.kz"
```

And in the launcher, click on the Cog icon in the top right, then the faint turtle icon in the bottom right in the window that opens. Make sure that Server URL is:
Code: Select all

```
https://launcher.turtlecraft.gg/
```

