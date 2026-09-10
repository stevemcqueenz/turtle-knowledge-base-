---
title: "Is my IP address blocked?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23698"
topic_id: 23698
forum_id: 3
forum: "Help & Support"
author: "Exillmat"
author_authority: "player"
posted: "2026-01-22T07:36:00Z"
last_post: "2026-03-04T15:25:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:36:49Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is my IP address blocked?

## Post 165921 by Exillmat — 2026-01-22T07:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165921#p165921 | page 1 | era: 1.18.1-announced-pre-release -->

Hello everyone

The last 2-3 days, I have been unable to login from my home.
I noticed that it worked fine from a friends house and that made me purchase a VPN service.
When I enable the VPN, I am able to connect. When its disabled, I cannot connect.
How can I check if my IP is blocked?

Best regards
Exill

## Post 165968 by Pepesmite (Turtle WoW Team) [STAFF] — 2026-01-22T14:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165968#p165968 | page 1 | era: 1.18.1-announced-pre-release -->

> **Exillmat wrote: Thu Jan 22, 2026 7:36 am**
> Hello everyone
>
>  The last 2-3 days, I have been unable to login from my home.
>  I noticed that it worked fine from a friends house and that made me purchase a VPN service.
>  When I enable the VPN, I am able to connect. When its disabled, I cannot connect.
>  How can I check if my IP is blocked?
>
>  Best regards
>  Exill

Hello.
We do not block IP addresses unless the account is banned.
If you can log in with a VPN, it means that your ISP has connection issues or does not pass Cloudflare verification.

## Post 166233 by Exillmat — 2026-01-24T09:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166233#p166233 | page 1 | era: 1.18.1-announced-pre-release -->

> **Pepesmite wrote: Thu Jan 22, 2026 2:26 pm**
> > **Exillmat wrote: Thu Jan 22, 2026 7:36 am**
> > Hello everyone
> >
> >  The last 2-3 days, I have been unable to login from my home.
> >  I noticed that it worked fine from a friends house and that made me purchase a VPN service.
> >  When I enable the VPN, I am able to connect. When its disabled, I cannot connect.
> >  How can I check if my IP is blocked?
> >
> >  Best regards
> >  Exill
>
>  Hello.
>  We do not block IP addresses unless the account is banned.
>  If you can log in with a VPN, it means that your ISP has connection issues or does not pass Cloudflare verification.

Thanks for the reply Pepesmite.
I will do some more investigating into the issue.
My job title is Senior Infrastructure Engineer, so I know a few tricks.
I will get back to this post with my findings.

## Post 169220 by Oberkornster — 2026-02-22T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169220#p169220 | page 1 | era: 1.18.1-announced-pre-release -->

> **Exillmat wrote: Sat Jan 24, 2026 9:27 am**
> > **Pepesmite wrote: Thu Jan 22, 2026 2:26 pm**
> > > **Exillmat wrote: Thu Jan 22, 2026 7:36 am**
> > > Hello everyone
> > >
> > >  The last 2-3 days, I have been unable to login from my home.
> > >  I noticed that it worked fine from a friends house and that made me purchase a VPN service.
> > >  When I enable the VPN, I am able to connect. When its disabled, I cannot connect.
> > >  How can I check if my IP is blocked?
> > >
> > >  Best regards
> > >  Exill
> >
> >  Hello.
> >  We do not block IP addresses unless the account is banned.
> >  If you can log in with a VPN, it means that your ISP has connection issues or does not pass Cloudflare verification.
>
>   Thanks for the reply Pepesmite.
>  I will do some more investigating into the issue.
>  My job title is Senior Infrastructure Engineer, so I know a few tricks.
>  I will get back to this post with my findings.

I would be interested in your findings as well. I started getting the unable to connect, as did my son (same household) and I downloaded Proton and that worked. I have no issues using that one as long as I can continue using it for free when I play on Turtle. Look forward to what you have to say. Thank you.

## Post 169244 by Kokuyoo — 2026-02-23T11:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169244#p169244 | page 1 | era: 1.18.1-announced-pre-release -->

The same thing is happening to me, yesterday i was able to use the forum normally, right now theres a problem with the cloudflare that i can't enter to the forum without using  a vpn, it's not the first that it happens but its really annoying

## Post 170055 by Exillmat — 2026-03-04T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170055#p170055 | page 1 | era: 1.18.1-announced-pre-release -->

So I ended up using my VPN to create a VPN gateway for the two IP addresses I came across during the troubleshooting.

I have a Proxmox home server, so I created a Debian LXC and installed WireGuard on it.
Then I went to AirVPN and selected the server with the lowest latency in the Netherlands and made a WireGuard profile to that server.
When I could confirm the VPN client gateway was running, I then created two static gateways for the two IP addresses, TWoW uses for its servers, on my router, pointing to the VPN GW.

This has been working flawless since I set it up.
I have been in dialogue with my ISP, but they demanded that TWoW should run trace commands towards my IP, and I stopped the troubleshooting there.

