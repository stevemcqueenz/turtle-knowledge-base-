---
title: "Can't login in the website"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15944"
topic_id: 15944
forum_id: 3
forum: "Help & Support"
author: "bsides"
author_authority: "player"
posted: "2024-11-18T19:32:00Z"
last_post: "2024-12-28T18:27:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:48:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can't login in the website

## Post 108545 by bsides — 2024-11-18T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108545#p108545 | page 1 | era: pre-1.18.1 -->

I just can't login. It reads: The username field value does not exist.

Tested in Chrome, Firefox, both with or without extensions, private / incognito window and nothing. Same error.

Also, where the cloudflare thing used to appear, it just turn out black. I think that's the culprit, but I may be wrong. Full disclosure, I'm a web developer. I checked the network tab and the data is not reflecting the form.

The console throws stuff on form submit:

Uncaught TurnstileError: [Cloudflare Turnstile] Nothing to reset found for provided container.
at m (api.js:1:10643)
at Object.f [as reset] (api.js:1:24669)
at login:266:19
at r (events.js:34:9)
at Yt (events.js:49:12)
at Gt (events.js:4:5)
at supportDispatches.js:12:14
at Array.forEach (<anonymous>)
at hd (supportDispatches.js:9:16)
at Array.<anonymous> (supportDispatches.js:5:5)
auto/:1

The resource [https://challenges.cloudflare.com/cdn-c ... /h/b/cmg/1](https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/cmg/1) was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.

Let me know if I can help you guys debug this. I don't think I'm the only one here.

EDIT: Also tested in Safari, Arc, Firefox for mac and Firefox for linux, in 3 different machines. Same error. My IP is fixed and I don't have any blockers / firewall on my ISP.

## Post 109008 by Cleptomanic — 2024-11-20T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109008#p109008 | page 1 | era: pre-1.18.1 -->

can you login in the client?
Because it says to me: The username field value does not exist.

Thats why i thought i forgot my username and created a topic just now.

## Post 109275 by bsides — 2024-11-21T21:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109275#p109275 | page 1 | era: pre-1.18.1 -->

I could login in the client to download the patch and then, after it fully downloaded and restarted, I couldn't anymore. I says "the information entered is invalid"  - and I'm 100% sure it's the same as the information used before to patch the game client. In fact, I had to login several times during the update because it kept disconnecting.

I don't know what else to do =/

## Post 109638 by Vanth (Turtle WoW Team) [STAFF] — 2024-11-24T10:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109638#p109638 | page 1 | era: pre-1.18.1 -->

You can visit our Discord server and ask for assistance in the support channel

## Post 109979 by bsides — 2024-11-26T12:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109979#p109979 | page 1 | era: pre-1.18.1 -->

I see. Well, thank you for the hint, I'll see what I can do.

I think it's sad that a forum with this name can't have it here though. Forums are searchable and public, discord servers are private and not publicly searchable.

## Post 114309 by Hindslegs95 — 2024-12-25T17:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114309#p114309 | page 1 | era: pre-1.18.1 -->

Sorry to slightly necropost, but I'm putting this here in case anyone else runs into this problem. I have not figured out how to fix the new account creation bug of "this username/email has already been taken", but I have figured out that I was using my forum login info for the twow main website, and it was not the same username/password. More than likely, the incorrect password and username is being used to try and sign in to the main website and game client.

However, I am still waiting for an answer/fix for the new account creation issue.

Edit: Yes, I have tried using other browsers/email accounts and all result in the same thing, "This email has already been taken."

## Post 114678 by Wyvren — 2024-12-28T18:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114678#p114678 | page 1 | era: pre-1.18.1 -->

this appears to be very common so I would think a GM would post some kind of solution

