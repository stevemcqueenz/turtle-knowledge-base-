---
title: "Multiboxing on one account"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6531"
topic_id: 6531
forum_id: 14
forum: "Suggestions"
author: "Edouchan"
author_authority: "player"
posted: "2023-04-11T10:22:00Z"
last_post: "2023-04-14T18:52:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T12:20:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Multiboxing on one account

## Post 41127 by Edouchan — 2023-04-11T10:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41127#p41127 | page 1 | era: pre-1.18.1 -->

would this be a possible thing to do?
is there a reason im overlooking on why this isnt a good idea?

its something ive always wandered about why its ok to multibox on multiple account but hasnt been allowed on a single account.

is there a reason which would make doing it on a single account frowned upon opposed to doing it on multiple?(for example you could still boost yourself if you have 2 accounts)

it seems like it could be a fun thing to do from time to time but i dont really like the idea of juggling multiple accounts.

## Post 41129 by Xudo (Grandmaster of Forum PvP) — 2023-04-11T10:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41129#p41129 | page 1 | era: pre-1.18.1 -->

Actually, I'd like to be able to login to single account from two clients and play different characters.
Dualboxing is allowed for regular players.
Currently, optimal strategy is to create multiple accounts. 1 account per character to be able to help your low level characters by high level ones.

## Post 41137 by Mcnair (Barrens Chat Casualty) — 2023-04-11T12:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41137#p41137 | page 1 | era: pre-1.18.1 -->

I am afraid that is simply not possible. The technical limitation being how the whole authentication to WoW servers work. One account can only establish one connection to the service, thus you can't log in into two separate characters on the same account.
So it is not about being frowned upon, but rather a limitation of the technology of our time.

## Post 41142 by Edouchan — 2023-04-11T12:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41142#p41142 | page 1 | era: pre-1.18.1 -->

dang thats the big sad

## Post 41162 by Xudo (Grandmaster of Forum PvP) — 2023-04-11T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41162#p41162 | page 1 | era: pre-1.18.1 -->

> **Mcnair wrote: Tue Apr 11, 2023 12:11 pm**
> I am afraid that is simply not possible. The technical limitation being how the whole authentication to WoW servers work. One account can only establish one connection to the service, thus you can't log in into two separate characters on the same account.
>  So it is not about being frowned upon, but rather a limitation of the technology of our time.

I doubt your expertise on this. What kind of technology prevents this?
Currently when you log to account in from second window, server forcefully disconnects you.
It means that server just kicks all other sessions of account on login.
It can not done from game client. They don't communicate with eachother. Especially on different computers.

## Post 41558 by Ugoboom (Bug Report Enthusiast) — 2023-04-14T18:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41558#p41558 | page 1 | era: pre-1.18.1 -->

> **Edouchan wrote: Tue Apr 11, 2023 10:22 am**
> would this be a possible thing to do?
>  is there a reason im overlooking on why this isnt a good idea?

I believe even if you were able to retool the server to allow this, you could run into issues with addons saving, anything in the WTF folder. I've had addon configs break when i've done a wierd combo of logging into 1 account with 2 clients on accident before.

Anyway, use <https://github.com/Haaxor1689/turtle-autologin> to make managing the logins for multiple accounts super duper easy.

