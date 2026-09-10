---
title: "Spell tooltip generator"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11783"
topic_id: 11783
forum_id: 29
forum: "Modding"
author: "Tenyar"
author_authority: "player"
posted: "2023-11-17T22:50:00Z"
last_post: "2024-01-19T18:09:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:42:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Spell tooltip generator

## Post 77893 by Tenyar — 2023-11-17T22:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77893#p77893 | page 1 | era: pre-1.18.1 -->

I've been playing with the idea on making custom classes with custom spells and needed to make custom tooltips for them. I started out downloading icons from wowhead and importing into GIMP, and using the text tool to make changes and the results were..less than ideal.

So *obviously*  the only thing to do was take three days to write a program to mimic the style of the tooltips in game; What I came up with is the following, maybe someone here in the modding section, or, someone stumbling across this from a Google search will find it useful.

You can select from a variety of spell icons (Over 23,000 found from [Here](https://github.com/Gethe/wow-ui-textures)), input a unique spell name, and specify parameters such as resource cost, type, cast time, cooldown, and rank level. Additionally, the program allows for the setting of range and a comprehensive description of the spell's effects and characteristics. There are also options to denote whether a spell is a talent, class requirements, or level requirement. Whenever finished you can save completed tooltips directly as PNG files.

There are a few settings that will allow setting a default save path, and a limit of 'remembered' icons that can be reselected instead of searching through the entire list again.

There may also be a secret. :)

Here is what the final tooltip looks like.
![Image](https://github.com/Tenyar97/World-of-Warcraft-Tooltip-Generator/blob/main/Entangling%20Roots%20Preview.png?raw=true)

And here is the user interface.
![Image](https://i.imgur.com/us5mF8k.png)

The JAR and of course source code can be found at my [GitHub](https://github.com/Tenyar97/World-of-Warcraft-Tooltip-Generator).

I hope someone finds it useful!

## Post 77907 by Xudo (Grandmaster of Forum PvP) — 2023-11-18T06:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77907#p77907 | page 1 | era: pre-1.18.1 -->

Github recommended me another project aimed for creating custom spells: <https://github.com/stoneharry/WoW-Spell-Editor>

## Post 77917 by Balake (Bug Report Enthusiast) — 2023-11-18T10:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77917#p77917 | page 1 | era: pre-1.18.1 -->

Does it let  you to use your own images for the spell icon?

## Post 77919 by Tenyar — 2023-11-18T10:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77919#p77919 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sat Nov 18, 2023 10:18 am**
> Does it let  you to use your own images for the spell icon?

Yes! It loads images from the 'Icons' folder; You can place additional icons in there and it will automatically load them and sort alphabetically.

> **Xudo wrote: Sat Nov 18, 2023 6:16 am**
> Github recommended me another project aimed for creating custom spells: <https://github.com/stoneharry/WoW-Spell-Editor>

I actually did use that to make spells for my custom[Witch Doctor](https://forum.turtlecraft.gg/viewtopic.php?t=7268) class!

That is a great tool but in my experience it was kind of finicky to setup, and didn't support Turtle's architecture. My tool  is aimed at creating quick mockups that will get the idea across while (hopefully) looking better than just slapping new text on a tooltip plate in GIMP.

## Post 85369 by Denoryl — 2024-01-19T18:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85369#p85369 | page 1 | era: pre-1.18.1 -->

Hi, I wanted to try it but there's no .exe, I downloaded it on Github but couldn't find a way to launch it, I'm not familiar with Git tho, maybe I missed something

How do you install or launch it ?

