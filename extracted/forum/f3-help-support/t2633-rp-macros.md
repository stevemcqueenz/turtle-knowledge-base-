---
title: "RP macros?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2633"
topic_id: 2633
forum_id: 3
forum: "Help & Support"
author: "Missbliss"
author_authority: "player"
posted: "2022-01-29T21:48:00Z"
last_post: "2022-01-30T05:00:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:26:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# RP macros?

## Post 16480 by Missbliss — 2022-01-29T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16480#p16480 | page 1 | era: pre-1.18.1 -->

I was looking for some cool RP macros to try out, and I came across two types, but neither seems to work. The first is this:

/run SendChatMessage(GetRandomArgument("Wait, ya big oaf!","GET HERE!","Wait for me, ya dimwit!","Wher' do ya think ya goin', hmm?","Don' ya walk away from me!","Not so fast, ya dumb ass!","Aye, let's get a move on!"),"say")

which apparently didn't work in retail either, 'cause it was replaced with this:

/run local a={"Wait, ya big oaf!","GET HERE!","Wait for me, ya dimwit!","Wher' do ya think ya goin', hmm?","Don' ya walk away from me!","Not so fast, ya dumb ass!","Aye, let's get a move on!"} SendChatMessage(a[random(#a)],"SAY")

Still, the second one doesn't work either. When I try it, I get the error message "Unexpected symbol near `#' ", whatever that means. I have no idea. Would be cool if I could get it to work, though, so I could deliver a cool coup de grace when I use execute, and one that's not always the same.

Thanks in advance.

## Post 16481 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2022-01-29T21:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16481#p16481 | page 1 | era: pre-1.18.1 -->

Change the second line to this one and it'll work:
Code: Select all

```
SendChatMessage(a[random(table.getn(a))],"SAY")
```

## Post 16482 by Missbliss — 2022-01-29T22:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16482#p16482 | page 1 | era: pre-1.18.1 -->

wow, thank you so much! i know i probably won't get it, but if you have time, could you maybe explain what was wrong, so perhaps I might learn a bit?

## Post 16483 by Missbliss — 2022-01-29T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16483#p16483 | page 1 | era: pre-1.18.1 -->

also, how would i add /me emotes into it? where the choice could be either /say or /me

## Post 16487 by Snigery (Barrens Chat Casualty) — 2022-01-30T04:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16487#p16487 | page 1 | era: pre-1.18.1 -->

> **Missbliss wrote: Sat Jan 29, 2022 10:32 pm**
> also, how would i add /me emotes into it? where the choice could be either /say or /me

If you replace the "say" with "emote" it will be sent to chat as an emote message.

## Post 16488 by Snigery (Barrens Chat Casualty) — 2022-01-30T05:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16488#p16488 | page 1 | era: pre-1.18.1 -->

> **Missbliss wrote: Sat Jan 29, 2022 10:24 pm**
> wow, thank you so much! i know i probably won't get it, but if you have time, could you maybe explain what was wrong, so perhaps I might learn a bit?

The reason for the error is macros use the LUA language and you had a syntax error. In the second example you are storing your strings in a table/array and choosing a random index/position of the string to use in the chat message function. The # symbol is an operator that was meant to return the length (total number of indexes/positions) in your table/array. I thought it worked for me before as well, but it was giving you an error with how it was used.

Ingameacct12345 used the better method imo. It utilizes the built in table utility of LUA and using the table.getn() function, returns the length of the table or number of items in it.

Using the /run or /script commands you can pretty much use most of LUA (<https://www.lua.org/manual/5.1/manual.html>)  in WoW to do some crazy stuff, aside from the macro character limit which there are ways around like the SuperMacro addon.

