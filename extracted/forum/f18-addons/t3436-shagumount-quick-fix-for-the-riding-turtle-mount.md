---
title: "ShaguMount quick fix for the Riding Turtle Mount"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3436"
topic_id: 3436
forum_id: 18
forum: "AddOns"
author: "Feyfolken"
author_authority: "player"
posted: "2022-07-31T20:33:00Z"
last_post: "2022-08-01T12:41:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:33:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# ShaguMount quick fix for the Riding Turtle Mount

## Post 20768 by Feyfolken — 2022-07-31T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20768#p20768 | page 1 | era: pre-1.18.1 -->

**ShaguMount quick fix for the Riding Turtle Mount:**
Open ShaguMount.lua, replace *"ability_hunter_pet_turtle"* with *"inv_pet_speedy"*.
Done! :D

With the 1.16.1 the turtle mount icon switched from "ability_hunter_pet_turtle" to "inv_pet_speedy", this is why your just have to update its name to make it work.

You can add any custom mount to the list as long as you know the name of the icon it uses in game.

To know the name of an icon you will need two tools;
An MPQ Editor, such as "**Ladik's MPQ Editor**"
And a BLP image converter such as "**BLPNG Converter**"
Both can be easily found on the internet.

In order to find your custom mount icon, open TWoW custom patches with the MPQ Editor (icons are located in the Interface folder).
Extract them and navigate to your MPQ Editor directory where you will find a new folder named "work".
Your icons are in there but you can not visualize them because they are in BLP format.

No Problemo! Open BLPNG Converter, then select all your BLP icons and drag them in the big PNG square.
Bam! your icons are now in a readable format!

Now all you need to do is to find the icon of your custom mount and add it to the list between quotation marks.

There is probably a simplier way to find the name of an icon though.
And I apologize, I am not able to provide a full list a the TWoW custom mounts as I haven't acces to all of them in game :/

## Post 20770 by Geojak (Grandmaster of Forum PvP) — 2022-07-31T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20770#p20770 | page 1 | era: pre-1.18.1 -->

There is a macro to show your buffs icons

## Post 20775 by Feyfolken — 2022-07-31T23:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20775#p20775 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sun Jul 31, 2022 9:46 pm**
> There is a macro to show your buffs icons

Would you mind copy/paste it in here? I would help a lot!

## Post 20785 by Geojak (Grandmaster of Forum PvP) — 2022-08-01T07:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20785#p20785 | page 1 | era: pre-1.18.1 -->

/run  c=0; for i=1,40 do B=UnitBuff("target",i) print(B) end

print command is from some addon i have, no idea which, if it doesnt work repalce that with the standard lua

## Post 20791 by Feyfolken — 2022-08-01T12:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20791#p20791 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Mon Aug 01, 2022 7:50 am**
> /run  c=0; for i=1,40 do B=UnitBuff("target",i) print(B) end
>
>  print command is from some addon i have, no idea which, if it doesnt work repalce that with the standard lua

Well your macro works like a charm. Thank you very much for your help! :D

