---
title: "Help with some macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5714"
topic_id: 5714
forum_id: 44
forum: "Priest"
author: "Eynarxdd"
author_authority: "player"
posted: "2023-02-23T05:30:00Z"
last_post: "2024-06-14T15:09:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T08:08:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with some macros

## Post 35763 by Eynarxdd — 2023-02-23T05:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35763#p35763 | page 1 | era: pre-1.18.1 -->

Need macro for shoot it always cancel and if is possible shadow word pain and vampiric with shoot... and any other useful macros thank you..

## Post 35785 by Ibux (Patch Note Conspiracy Theorist) — 2023-02-23T10:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35785#p35785 | page 1 | era: pre-1.18.1 -->

Check out this link if you want vanilla macros. <https://github.com/Meridaw/Vanilla-Macros>

Or download this addon if you want to use tbc+ macros <https://github.com/DennisWG/Roid-Macros>

## Post 35872 by Eynarxdd — 2023-02-23T23:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35872#p35872 | page 1 | era: pre-1.18.1 -->

Thank you so much!!!

## Post 96627 by Diepuppe — 2024-06-09T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96627#p96627 | page 1 | era: pre-1.18.1 -->

Either im doing something wrong or they simple dont work
for example when i try to cast dispel i only write all the text in chat

## Post 96629 by Ibux (Patch Note Conspiracy Theorist) — 2024-06-09T07:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96629#p96629 | page 1 | era: pre-1.18.1 -->

> **Diepuppe wrote: Sun Jun 09, 2024 7:39 am**
> Either im doing something wrong or they simple dont work
>  for example when i try to cast dispel i only write all the text in chat

download: <https://github.com/Lexiebean/Decursive>
and use this macro to cleanse Code: Select all

```
/decursive
```

nice quality of life. the addon prioritizes your target first.

for the macro that writes all the text in the chat. my first assumption is that there is an extra space in the text that you have to remove, otherwise it cuts the macro so you see text in the chat.

## Post 96641 by Diepuppe — 2024-06-09T14:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96641#p96641 | page 1 | era: pre-1.18.1 -->

yea seems like there was an extra space
Now its working, but what about to make it mouseover?
im trying to figure out how to bind healings with ctrl\shift\alt and some other skills by this scheme

## Post 96643 by Ibux (Patch Note Conspiracy Theorist) — 2024-06-09T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96643#p96643 | page 1 | era: pre-1.18.1 -->

> **Diepuppe wrote: Sun Jun 09, 2024 2:30 pm**
> yea seems like there was an extra space
>  Now its working, but what about to make it mouseover?
>  im trying to figure out how to bind healings with ctrl\shift\alt and some other skills by this scheme

for decursive you can use this version to mouseover: Code: Select all

```
/run Dcr_Clean(GetMouseFocus().unit)
```

for mouseover without the addon you can try this: Code: Select all

```
/run i=(GetMouseFocus().unit) if i then CastSpellByName("Dispel Magic") SpellTargetUnit(i) else CastSpellByName("Dispel Magic") end
```

here is a macro that uses alt key as modifier to cast dispel on the player: Code: Select all

```
/run if IsAltKeyDown() then CastSpellByName("Dispel Magic",1) else CastSpellByName("Dispel Magic")end
```

## Post 97008 by Diepuppe — 2024-06-14T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97008#p97008 | page 1 | era: pre-1.18.1 -->

Ok so what i want to use
/script local d=CastSpellByName; if(IsControlKeyDown()) then d("Heal") elseif (IsAltKeyDown()) then d("Flash Heal") elseif (IsShiftKeyDown()) then d("Renew") end

Only first "Heal" doesnt work

