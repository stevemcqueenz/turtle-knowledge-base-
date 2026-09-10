---
title: "Gatherer AddOn Busted in Winterspring"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=980"
topic_id: 980
forum_id: 3
forum: "Help & Support"
author: "Gifted"
author_authority: "player"
posted: "2020-03-29T15:39:00Z"
last_post: "2023-09-21T06:08:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T09:04:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Gatherer AddOn Busted in Winterspring

## Post 5559 by Gifted (Barrens Chat Casualty) — 2020-03-29T15:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=5559#p5559 | page 1 | era: pre-1.18.1 -->

It seems to be working in all other zones and worked prior to the patch. Here's the message from gatherer...

 **ERROR:** Interface\AddOns\Gatherer\Gatherer.lua![:1321:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1321.svg) attempt to index a local 'r' (a nil value)

 **~Gifted**

## Post 5560 by Gifted (Barrens Chat Casualty) — 2020-03-29T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=5560#p5560 | page 1 | era: pre-1.18.1 -->

Sorry, I'm helping with testing the new patch, so most players will be unaffected by this bug. I've posted on the Turtle WoW discord under 'patch qa'.

 **~Gifted**

## Post 20675 by Comak — 2022-07-30T11:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20675#p20675 | page 1 | era: pre-1.18.1 -->

I had a similar error in line 1401.
Solved the problem by adding a check for nil.
Here is the code and the fix

function Gatherer_AbsCoord(continent, zone, x, y)
if ((continent == 0) or (zone == 0)) then return x, y; end
local r = GatherRegionData[continent][zone];
if (r == nil) then return 0,0; end -- fix
local absX = x * r.scale + r.xoffset;
local absY = y * r.scale + r.yoffset;
return absX, absY;
end

## Post 21266 by Caniko — 2022-08-06T13:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21266#p21266 | page 1 | era: pre-1.18.1 -->

Hey folks,

I made a TurtleWoW specific Gatherer with the fix, find it here:
<https://github.com/caniko/TurtleWoW-Gatherer>

Kind regards

## Post 21291 by Faustorgo (Barrens Chat Casualty) — 2022-08-07T01:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21291#p21291 | page 1 | era: pre-1.18.1 -->

> **Caniko wrote: Sat Aug 06, 2022 1:30 pm**
> Hey folks,
>
>  I made a TurtleWoW specific Gatherer with the fix, find it here:
>  <https://github.com/caniko/TurtleWoW-Gatherer>
>
>  Kind regards

Man amazing thanks   turtle_in_love_head   turtle_in_love_head   turtle_in_love_head

## Post 22256 by Stubbyrole — 2022-08-14T04:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22256#p22256 | page 1 | era: pre-1.18.1 -->

> **Caniko wrote: Sat Aug 06, 2022 1:30 pm**
> Hey folks,
>
>  I made a TurtleWoW specific Gatherer with the fix, find it here:
>  <https://github.com/caniko/TurtleWoW-Gatherer>
>
>  Kind regards

If anyone is having problems getting this to show up in their AddOns List, remember to rename the folder to "Gatherer", instead of "TurtleWoW-Gatherer". I made this mistake.

## Post 22791 by Flaktrack — 2022-08-19T09:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22791#p22791 | page 1 | era: pre-1.18.1 -->

Greetings!

Ok i like gathering and i like my personal database ... now a little extra ...

Since Turtle WoW adds various zones your previous collected nodes in you personal Gatherer Database are getting scrambled (for example Silithus nodes in Orgrimmar or Hinterlands nodes in Stormwind and so on). Because of the addition of the new zones Gillijim's Isle, Hyjal, Lapidis Isle and Scarlet Enclave the database needs to be converted to reflect the new alphabetical order. I remembered the "Zone Rematch" function provided by Gatherer which was necessary a few times in WoW history.

[![Image](https://s20.directupload.net/images/220819/temp/s5v73p3c.jpg)](https://www.directupload.net/file/d/6646/s5v73p3c_jpg.htm)

Perhaps Caniko or someone else can use this in his Turtle Wow Gatherer fork as this could help with the mentioned guild sync problem (players broadcasting wrong nodes ...).

So here is a dirty workaround ...  happy_turtle_head

 **For now - just for the english client**

Download the file and overwrite (after backup ;-) the existing one in your WoW\Interface\Addons\Gatherer folder
[GatherRegionData.lua](https://drive.google.com/file/d/1IUOrFUep1UfzcV1t2Nnmp1wKTP4AqJI1/view?usp=sharing)

Or modify the file GathererRegionData.lua for yourself:

Adding new zones and renumbering all:
Code: Select all

```
-- english/US locale
else

GatherRegionData[1][0]  = { name = "Kalimdor" };
GatherRegionData[1][1]  = { scale = 0.15670371525706, xoffset = 0.41757282062541, yoffset = 0.33126468682991, name = "Ashenvale" };
GatherRegionData[1][2]  = { scale = 0.13779501505279, xoffset = 0.55282036918049, yoffset = 0.30400571307545, name = "Aszhara" };
GatherRegionData[1][3]  = { scale = 0.17799008894522, xoffset = 0.38383175154516, yoffset = 0.18206216123156, name = "Darkshore" };
GatherRegionData[1][4]  = { scale = 0.02876626176374, xoffset = 0.38392150175204, yoffset = 0.10441296545475, name = "Darnassis" };
GatherRegionData[1][5]  = { scale = 0.12219839120669, xoffset = 0.34873187115693, yoffset = 0.50331046935371, name = "Desolace" };
GatherRegionData[1][6]  = { scale = 0.14368294970080, xoffset = 0.51709782709100, yoffset = 0.44802818134926, name = "Durotar" };
GatherRegionData[1][7]  = { scale = 0.14266384095509, xoffset = 0.49026338351379, yoffset = 0.60461876174686, name = "Dustwallow" };
GatherRegionData[1][8]  = { scale = 0.15625084006464, xoffset = 0.41995800144849, yoffset = 0.23097545880609, name = "Felwood" };
GatherRegionData[1][9]  = { scale = 0.18885970960818, xoffset = 0.31589651244686, yoffset = 0.61820581746798, name = "Feralas" };
GatherRegionData[1][10] = { scale = 0.18885970960818, xoffset = 0.31589651244686, yoffset = 0.61820581746798, name = "Hyjal" };
GatherRegionData[1][11] = { scale = 0.06292695969921, xoffset = 0.50130287793373, yoffset = 0.17560823085517, name = "Moonglade" };
GatherRegionData[1][12] = { scale = 0.13960673216274, xoffset = 0.40811854919226, yoffset = 0.53286226907346, name = "Mulgore" };
GatherRegionData[1][13] = { scale = 0.03811449638057, xoffset = 0.56378554142668, yoffset = 0.42905218646258, name = "Ogrimmar" };
GatherRegionData[1][14] = { scale = 0.09468465888932, xoffset = 0.39731975488374, yoffset = 0.76460608512626, name = "Silithus" };
GatherRegionData[1][15] = { scale = 0.13272833611061, xoffset = 0.37556627748617, yoffset = 0.40285135292988, name = "StonetalonMountains" };
GatherRegionData[1][16] = { scale = 0.18750104661175, xoffset = 0.46971301480866, yoffset = 0.76120931364891, name = "Tanaris" };
GatherRegionData[1][17] = { scale = 0.13836131003639, xoffset = 0.36011098024729, yoffset = 0.03948322979210, name = "Teldrassil" };
GatherRegionData[1][18] = { scale = 0.27539211944292, xoffset = 0.39249347333450, yoffset = 0.45601063260257, name = "Barrens" };
GatherRegionData[1][19] = { scale = 0.11956582877920, xoffset = 0.47554411191734, yoffset = 0.68342356389650, name = "ThousandNeedles" };
GatherRegionData[1][20] = { scale = 0.02836291430658, xoffset = 0.44972878210917, yoffset = 0.55638479002362, name = "ThunderBluff" };
GatherRegionData[1][21] = { scale = 0.10054401185671, xoffset = 0.44927594451520, yoffset = 0.76494573629405, name = "UngoroCrater" };
GatherRegionData[1][22] = { scale = 0.19293573573141, xoffset = 0.47237382938446, yoffset = 0.17390990272233, name = "Winterspring" };
GatherRegionData[2][0]  = { name = "Azeroth" };
GatherRegionData[2][1]  = { scale = 0.07954563533736, xoffset = 0.43229874660542, yoffset = 0.25425926375262, name = "Alterac" };
GatherRegionData[2][2]  = { scale = 0.10227310921644, xoffset = 0.47916793249546, yoffset = 0.32386170078419, name = "Arathi" };
GatherRegionData[2][3]  = { scale = 0.07066771883566, xoffset = 0.51361415033147, yoffset = 0.56915717993261, name = "Badlands" };
GatherRegionData[2][4]  = { scale = 0.09517074521836, xoffset = 0.48982154167011, yoffset = 0.76846519986510, name = "BlastedLands" };
GatherRegionData[2][5]  = { scale = 0.08321525646393, xoffset = 0.04621224670174, yoffset = 0.61780780524905, name = "BurningSteppes" };
GatherRegionData[2][6]  = { scale = 0.07102298961531, xoffset = 0.47822105868635, yoffset = 0.73863555048516, name = "DeadwindPass" };
GatherRegionData[2][7]  = { scale = 0.13991525534426, xoffset = 0.40335096278072, yoffset = 0.48339696712179, name = "DunMorogh" };
GatherRegionData[2][8]  = { scale = 0.07670475476181, xoffset = 0.43087243362495, yoffset = 0.73224350550454, name = "Duskwood" };
GatherRegionData[2][9]  = { scale = 0.10996723642661, xoffset = 0.51663255550387, yoffset = 0.15624753972085, name = "EasternPlaguelands" };
GatherRegionData[2][10] = { scale = 0.09860350595046, xoffset = 0.41092682316676, yoffset = 0.65651531970162, name = "Elwynn" };
GatherRegionData[2][11] = { scale = 0.09860350595046, xoffset = 0.41092682316676, yoffset = 0.65651531970162, name = "Gillijim" };
GatherRegionData[2][12] = { scale = 0.09090931690055, xoffset = 0.42424361247460, yoffset = 0.30113436864162, name = "Hilsbrad" };
GatherRegionData[2][13] = { scale = 0.02248317426784, xoffset = 0.47481923366335, yoffset = 0.51289242617182, name = "Ironforge" };
GatherRegionData[2][14] = { scale = 0.07839152145224, xoffset = 0.51118749188138, yoffset = 0.50940913489577, name = "Lapidis" };
GatherRegionData[2][15] = { scale = 0.07839152145224, xoffset = 0.51118749188138, yoffset = 0.50940913489577, name = "LochModan" };
GatherRegionData[2][16] = { scale = 0.06170112311456, xoffset = 0.49917278340928, yoffset = 0.68359285304999, name = "Redridge" };
GatherRegionData[2][17] = { scale = 0.06338794005823, xoffset = 0.46372051266487, yoffset = 0.57812379382509, name = "Scarlet" };
GatherRegionData[2][18] = { scale = 0.06338794005823, xoffset = 0.46372051266487, yoffset = 0.57812379382509, name = "SearingGorge" };
GatherRegionData[2][19] = { scale = 0.11931848806212, xoffset = 0.35653502290090, yoffset = 0.24715695496522, name = "Silverpine" };
GatherRegionData[2][20] = { scale = 0.03819701270887, xoffset = 0.41531450060561, yoffset = 0.67097280492581, name = "Stormwind" };
GatherRegionData[2][21] = { scale = 0.18128603034401, xoffset = 0.39145470225916, yoffset = 0.79412224886668, name = "Stranglethorn" };
GatherRegionData[2][22] = { scale = 0.06516347991404, xoffset = 0.51769795272070, yoffset = 0.72815974701615, name = "SwampOfSorrows" };
GatherRegionData[2][23] = { scale = 0.10937523495111, xoffset = 0.49929119700867, yoffset = 0.25567971676068, name = "Hinterlands" };
GatherRegionData[2][24] = { scale = 0.12837403412087, xoffset = 0.36837217317549, yoffset = 0.15464954319582, name = "Tirisfal" };
GatherRegionData[2][25] = { scale = 0.02727719546939, xoffset = 0.42973999245660, yoffset = 0.23815358517831, name = "Undercity" };
GatherRegionData[2][26] = { scale = 0.12215946583965, xoffset = 0.44270955019641, yoffset = 0.17471356786018, name = "WesternPlaguelands" };
GatherRegionData[2][27] = { scale = 0.09943208435841, xoffset = 0.36884571674582, yoffset = 0.71874918595783, name = "Westfall" };
GatherRegionData[2][28] = { scale = 0.11745423014662, xoffset = 0.46561438951659, yoffset = 0.40971063365152, name = "Wetlands" };
end
```

Note: Mapscales in the new zones are wrong ... needs to be figured out ...

Modifiy the last "US/UK" entry - Zone reordering (new zones are 10 in Kalimdor, and 11, 14, 17 Eastern Kingdoms ... all added at the end)
Code: Select all

```
["US/UK"] = { -- Identical for name fixes purpose only
{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 10},
{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 11, 14, 17};
```

 **Better Backup you WTF or Saved Variables folder! You never know ...**

 - Now ingame you can open the Gatherer Options and hit the button on the bottom left "Zone Match".
 - then select "US/UK" in both Dropdown boxes.
 - hit "Accept"

[![Image](https://s20.directupload.net/images/220819/temp/apkv7kvr.jpg)](https://www.directupload.net/file/d/6646/apkv7kvr_jpg.htm)

There should be a message in the Chat that the zones were swapped.
And just do this once ... if you do it twice the zones are scrambled again.

No guarantees ... BACKUP!

Good Luck!   dead_turtle_head   smiling_turtle

[Flaktrack - Mage, Jazzgitti - HC Hunter, Zackflak - HC Shaman]

*Last edited by Flaktrack on Sun Aug 21, 2022 12:24 pm, edited 1 time in total.*

## Post 22818 by Philipred — 2022-08-19T12:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22818#p22818 | page 1 | era: pre-1.18.1 -->

> **Caniko wrote: Sat Aug 06, 2022 1:30 pm**
> Hey folks,
>
>  I made a TurtleWoW specific Gatherer with the fix, find it here:
>  <https://github.com/caniko/TurtleWoW-Gatherer>
>
>  Kind regards

Thanks for the effort
Is there a list of turtle wow addons we all can use?

## Post 23708 by Caniko — 2022-08-27T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23708#p23708 | page 1 | era: pre-1.18.1 -->

> **Flaktrack wrote: Fri Aug 19, 2022 9:18 am**
> Perhaps Caniko or someone else can use this in his Turtle Wow Gatherer fork as this could help with the mentioned guild sync problem (players broadcasting wrong nodes ...).

Being experimental, I can add this to an experimental line; keep what we know as stable as an alternative. You can also make a PR, I'll gladly review!

## Post 66135 by Thebattousai — 2023-09-21T06:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66135#p66135 | page 1 | era: pre-1.18.1 -->

Caniko, I downloaded your Turtle WoW Gatherer but I continued to get an error, at rapid speed, (30,000 errors until I deleted it) stating *Gatherer Cycle #0 delay 0.00*. Not sure how to resolve this. Have you experienced this or know how to resolve this issue?

> **Caniko wrote: Sat Aug 06, 2022 1:30 pm**
> Hey folks,
>
>  I made a TurtleWoW specific Gatherer with the fix, find it here:
>  <https://github.com/caniko/TurtleWoW-Gatherer>
>
>  Kind regards

