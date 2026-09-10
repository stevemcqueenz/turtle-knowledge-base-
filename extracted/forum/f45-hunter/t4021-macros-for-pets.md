---
title: "Macros for pets?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4021"
topic_id: 4021
forum_id: 45
forum: "Hunter"
author: "Maesus"
author_authority: "player"
posted: "2022-09-03T09:49:00Z"
last_post: "2022-10-11T03:11:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:15:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros for pets?

## Post 24279 by Maesus (Barrens Chat Casualty) — 2022-09-03T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24279#p24279 | page 1 | era: pre-1.18.1 -->

Hello there,

I have the Tab key bound to Pet Attack, but there's no baseline option in Key Bindings for any other pet action, so I need to use a macro, I just can't figure it out.

I'm looking to create a macro that would allow me to pull my pet back from combat - or to cancel an accidental attack, simply by using the **Follow** ability.

I looked around on some (classic) forums and most of them say that /petattack and /petpassive or /petfollow should work, but it doesn't.

Any advice is much appreciated,

## Post 24284 by Friendz001 (Barrens Chat Casualty) — 2022-09-03T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24284#p24284 | page 1 | era: pre-1.18.1 -->

Hi,

yea the reason why its not working is because some stuff got changed from Vanilla to TBC.

If you want to use LUA (macros/scripts) you have to check the old 1.12.1 API, wich is this one:
[https://vanilla-wow-archive.fandom.com/ ... _Functions](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API#Pet_Functions)

As you can see, under Pet Functions, there are alot of functions you can use.
So, if you want your pet to attack, you have to use the "PetAttack();" function, like this: Code: Select all

```
/script PetAttack();
```

This will cause your pet to attack.
And lets say, you want to bind it to your Auto Shot, so everytime you attack, your pet also attacks the
same target immediately, it would look like this: Code: Select all

```
/script PetAttack();
/script if not IsAutoRepeatAction(1) then CastSpellByName("Auto Shot") end
```

The (1) refers to your ActionBar buttons, and you have to put your Auto Shot on that button.
You can change the "1" to any other button you like.
And your macro onto another button, and when you spam your macro, it will fire off Auto Shot + PetAttack.

Otherwise, just browse around in the API for what you need.

I can also strongly recommend using [Super Macro](https://github.com/Monteo/SuperMacro), technically its not needed, but it has so many usefull
features, even outside the code - its just a way better enviroment to create your scripts,
especially because Blizzards macro interaface only offers 255 characters of code.

Hope this helped.

## Post 24289 by Maesus (Barrens Chat Casualty) — 2022-09-03T12:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24289#p24289 | page 1 | era: pre-1.18.1 -->

Works like a charm, thank you! :)

## Post 27102 by Bigssdl — 2022-10-11T03:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27102#p27102 | page 1 | era: pre-1.18.1 -->

i am using key "R" for auto shot and my script:
Code: Select all

```
/script PetAttack();
/script if not IsAutoRepeatAction(r) then CastSpellByName("Auto Shot") end
/cast Hunter's Mark
```

PS: great thx for Friendz001 :)

