---
title: "I can't log into the game"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7749"
topic_id: 7749
forum_id: 3
forum: "Help & Support"
author: "Geebomb"
author_authority: "player"
posted: "2023-06-11T02:03:00Z"
last_post: "2024-06-18T04:50:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T08:52:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I can't log into the game

## Post 49622 by Geebomb — 2023-06-11T02:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49622#p49622 | page 1 | era: pre-1.18.1 -->

i have no clue what's going on, but i can't log into the game.

i've deleted the WDB folder and the issue still remains. after a "successful" login i immediately get disconected, and if i type in my credentials afterwards, it says that there's been too many unsuccessful authentication attempts. tried to login to this forum with same credentials and well, i am here. i've changed my password, still nothing. what's worse, the game won't recognize my new password, only the old one(but the issues still remain).

do i have to re install the client to fix this or is there another way?

## Post 49636 by Allwynd01 (Bug Report Enthusiast) — 2023-06-11T09:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49636#p49636 | page 1 | era: pre-1.18.1 -->

Maybe your firewall, ISP or antivirus is blocking connection to the server through the client.

## Post 49652 by Geebomb — 2023-06-11T13:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49652#p49652 | page 1 | era: pre-1.18.1 -->

tried firewall and my antivirus but nothin happened, connected to a different network and damn i believe it IS the ISP. but the game login still uses my old password even though i changed it here. i guess i can't change that one at all

## Post 49706 by Allwynd01 (Bug Report Enthusiast) — 2023-06-11T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49706#p49706 | page 1 | era: pre-1.18.1 -->

I had a similar problem many years ago when me and a friend from another country wanted to play Age of Empires 2 together through Hamachi and I couldn't connect from my home network, but as soon as I connected my laptop to another network, it worked immediately. I was so pissed off for 30 minutes that I was so close to changing my ISP, I'm glad I didn't.

There could be some solutions, like fiddling with your router settings and making sure the connection to Turtle WoW is allowed, resetting your router settings (as long as that doesn't mess up your whole connection, for me it doesn't so I do it every now and then if I feel it's causing me some problems), you could try to contact your ISP and see what they have to say about this and what they can do.

When did this start? Were you able to play ever before on your network or you just started playing on this server and never had the chance to on your network?

## Post 49712 by Geebomb — 2023-06-11T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49712#p49712 | page 1 | era: pre-1.18.1 -->

it started yesterday night, the day before was all ordinary, lil bit iffy at times, but i wrote it off as usual "spam the login till it stops disconnecting you", because sometimes it does happen just without the "too many attempts" message.

i figured it's because of the server, friday evening, the server is overpopulated or something. it was 3am so i didn't wanna fiddle around too much. today i logged in at work, and everything was fine again. so most likely isp, or router is being wacky. been on the lookout to contact my isp to get a new router because this one feels like it's outta commission

imma start with the simplest option. just reboot it, then see what else comes to mind. reset or something else

## Post 49760 by Allwynd01 (Bug Report Enthusiast) — 2023-06-12T09:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49760#p49760 | page 1 | era: pre-1.18.1 -->

My router is around 12 years old, I'm surprised it still works and hasn't fallen apart.

Another possibility could be the Turtle WoW server denying access to your IP through your own ISP. You can try to connect with your ISP through VPN and see if that changes anything... all with the goal to minimize the scope of the problem.

Alternatively, I think, based on ISP, you either have a static IP or a dynamic one and if you test that stuff with VPN prior to this, you can then either by yourself or ask your ISP to issue you a new IP.

## Post 49772 by Faefinwe — 2023-06-12T11:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49772#p49772 | page 1 | era: pre-1.18.1 -->

Same here.  I get "failed to apply patch" error.  I've already uninstalled and reinstalled the game and I still get that error and I can't play.  Does anyone know how to fix this problem?  Please help.  Thanks

## Post 49789 by Geebomb — 2023-06-12T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49789#p49789 | page 1 | era: pre-1.18.1 -->

it's all good, everything works now, the router rebooted on its own and that fixed the issue lmao. Unusual that it actively blocked me from playing the game though, since i could use internet normally in any other way, eg i was playing Heroes of the Storm that same night.

seems like Faefinwe has a lot more serious issue though i don't know how to help with that one

## Post 50007 by Faefinwe — 2023-06-14T14:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50007#p50007 | page 1 | era: pre-1.18.1 -->

Yeah it's kind of frustrating really and I really want to play.... so not sure how to move forward.... sigh

## Post 54334 by Raxk — 2023-07-23T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54334#p54334 | page 1 | era: pre-1.18.1 -->

For future reference, would like you add this is not a Router Problem, but an IP problem. I too encountered this error and trough extensive troubleshooting i found the problem was that the P supplied by one of my ISP was "blocked" by Turtle WoW. As soon as it connected, it promptly disconnected.

For reference i use 2xWan (internet). One for Main other for Backup. When this happened to me i was using the Backup internet WHICH uses the same router as the Main One, although both connections have different public IP's. The router itself makes all the managing of both internets (also called load balancing).

One way to solve this problem, Like the OP did was to reboot the router, most of internet connections use Dynamic IP which means the router will ask a new IP to the ISP, therefore solving the problem. If you have fixed IP from the Operator and this happens, i have no idea how you can fix it, probably have to ask Turtle WoW staff to see if the IP is on a Block list .

Cheers-

## Post 97219 by Felgor — 2024-06-18T04:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97219#p97219 | page 1 | era: pre-1.18.1 -->

I'm having an issue where I was disconnected from the game and now when i try to log in, I'm stuck forever in Authenticating.

