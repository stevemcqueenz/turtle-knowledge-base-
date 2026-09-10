---
title: "pfUI pvp flag"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3941"
topic_id: 3941
forum_id: 18
forum: "AddOns"
author: "Mosch0512"
author_authority: "player"
posted: "2022-08-28T20:29:00Z"
last_post: "2024-10-22T22:35:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:28:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfUI pvp flag

## Post 23861 by Mosch0512 — 2022-08-28T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23861#p23861 | page 1 | era: pre-1.18.1 -->

is there a way to make the flagged for pvp symbol in pfUI moore visible?

Because right now it is displayed in the center of the health bar and sometimes its hard to spot.
![Image](https://i.imgur.com/wLkXvz8.jpg)

## Post 23902 by Zirtox — 2022-08-29T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23902#p23902 | page 1 | era: pre-1.18.1 -->

Go to PFUI folder, then go into api folder and open unitframes.lua.
Press ctrl+F and type pvpIcon.
Now you can enter your own preference SetWidth and SetHeight is ofcourse how big you want it to be and with SetPoint you can change the location of it.

## Post 23907 by Mosch0512 — 2022-08-29T12:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23907#p23907 | page 1 | era: pre-1.18.1 -->

Dude thats exactly what i wanted to be able to do thx man <3

this is what i changed
Code: Select all

```
f.pvpIcon:SetWidth(16)
f.pvpIcon:SetHeight(16)
f.pvpIcon:SetPoint("CENTER", 0, 0)
f.pvpIcon.texture:SetTexture(pfUI.media["img:pvp"])
f.pvpIcon.texture:SetAllPoints(f.pvpIcon)
f.pvpIcon.texture:SetVertexColor(1,1,1,.5)
f.pvpIcon:Hide()
```

to Code: Select all

```
f.pvpIcon:SetWidth(25)
f.pvpIcon:SetHeight(25)

 --f.pvpIcon:SetPoint("CENTER", 0, 0)
if f.config.portrait == "right" then
f.pvpIcon:SetPoint("CENTER", f, "BOTTOMRIGHT", 0, 0)
else
f.pvpIcon:SetPoint("CENTER", f, "BOTTOMLEFT", 0, 0)
end

f.pvpIcon.texture:SetTexture(pfUI.media["img:pvp"])
f.pvpIcon.texture:SetAllPoints(f.pvpIcon)
f.pvpIcon.texture:SetVertexColor(1,1,1,1)
f.pvpIcon:Hide()
```

This is how it looks :D
![Image](https://i.imgur.com/M1gZ8hL.jpg)

## Post 104438 by Alexgreat — 2024-10-22T22:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104438#p104438 | page 1 | era: pre-1.18.1 -->

I wanted this too. Thanks for ask  smiling_turtle_head  , your config looks cool. I have mining too but can't remove the buff on buff frame and leave the minimap icon only.
.SOLVED.

