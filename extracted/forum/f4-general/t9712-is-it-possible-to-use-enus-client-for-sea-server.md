---
title: "Is it possible to use enUS client for SEA server"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9712"
topic_id: 9712
forum_id: 4
forum: "General"
author: "Milap"
author_authority: "player"
posted: "2023-09-13T04:16:00Z"
last_post: "2023-09-18T00:59:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:01:36Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is it possible to use enUS client for SEA server

## Post 63440 by Milap — 2023-09-13T04:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63440#p63440 | page 1 | era: pre-1.18.1 -->

I have friends both in EU server & SEA server, but I don't want to keep two duplicated client in my little disk

Is it possible to use the EU client for the SEA server

 1. I just changed the `realmlist.wtf` in EU client but the HanZi was disappeared on my screen

 2. I also use the SET textLocale "enUS" in SEA client (It is for the 1.14 client, but I give it a try), apparently it doesn't work

dead_turtle_head   dead_turtle_head   dead_turtle_head

Ask for help for resolve this problem

## Post 63444 by Geojak (Grandmaster of Forum PvP) — 2023-09-13T04:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63444#p63444 | page 1 | era: pre-1.18.1 -->

You can use the Englisch Client to play in English on the sea servers. You could use the locale emulator to tweak it itno being Chinese like they do on the EU servers currently

## Post 63502 by Milap — 2023-09-13T07:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63502#p63502 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Wed Sep 13, 2023 4:38 am**
> You can use the Englisch Client to play in English on the sea servers. You could use the locale emulator to tweak it itno being Chinese like they do on the EU servers currently

Thanks for reply, I already tried, but the HanZi character just disappear now, before the sea server release, I could see the hanzi characters, but don't know why I could not see them now after change `realmlist.wtf`

## Post 63822 by Milap — 2023-09-13T23:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63822#p63822 | page 1 | era: pre-1.18.1 -->

<https://imageupload.io/JQLb1HIHksmDJv7>

<https://imageupload.io/tlIDUMRayU1IKDt>

just like this, when I use EU client logon SEA server, all HanZi just disappear, is it relate to the server ban or just local config   crying_turtle   crying_turtle   crying_turtle

but if I logon to the EU server, I could receive and see the Hanzi

## Post 63833 by 108 — 2023-09-14T01:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63833#p63833 | page 1 | era: pre-1.18.1 -->

Maybe you can try pfUI and change the fonts manually to unicode ones.

## Post 63857 by Milap — 2023-09-14T02:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63857#p63857 | page 1 | era: pre-1.18.1 -->

> **108 wrote: Thu Sep 14, 2023 1:03 am**
> Maybe you can try pfUI and change the fonts manually to unicode ones.

Thanks the suggestion, I already download unicode font in /wow/Fonts directory, I could see and use Hanzi in EU server on chat channel and DM to others

But don't know why the name disappeared , I will try pfUI again, sadly  I like the blizzard style

## Post 65148 by Milap — 2023-09-18T00:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65148#p65148 | page 1 | era: pre-1.18.1 -->

Resolved, I use MPQ editor open the patch-3.mpq of SEA client, and found this

Fonts\ARIALN.ttf
Fonts\FRIZQT__.ttf
Fonts\FZBWJW.ttf
Fonts\FZJZJW.ttf
Fonts\FZLBJW.ttf
Fonts\FZXHJW.ttf
Fonts\FZXHLJW.ttf
Fonts\MORPHEUS.ttf
Fonts\SKURRI.ttf.ttf

compare with my Fonts clients, and rename the tff file to those names, it works well after I done

the final tff files like

ARIALN.ttf
FZJZJW.ttf
FZXHJW.ttf
SKURRI.ttf.ttf	(this one has two extensions like in mpq file)
ZYKai_T.ttf
FRIZQT__.ttf
FZL2JW.ttf
FZXHLJW.ttf
ZYHei.ttf
FZBWJW.ttf
FZLBJW.ttf
MORPHEUS.ttf
ZYKai_C.ttf

I don't know what's the other names mean

