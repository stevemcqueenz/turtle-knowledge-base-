---
title: "Макрос"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4000"
topic_id: 4000
forum_id: 40
forum: "Warrior"
author: "Martinsov"
author_authority: "player"
posted: "2022-09-01T19:13:00Z"
last_post: "2023-04-19T19:54:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T07:54:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Макрос

## Post 24180 by Martinsov — 2022-09-01T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24180#p24180 | page 1 | era: pre-1.18.1 -->

Помогите пожалуста как правильно написать макрос для воина на Рывок+Подрезание Сухожильев

## Post 24213 by Dasenel — 2022-09-02T08:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24213#p24213 | page 1 | era: pre-1.18.1 -->

Привет, макро чекает стойку, переходит в боевую, юзает рывок или подрезать сухожилия в зависимости от расстояния до цели.

/script texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Charge"); else CastSpellByName("Battle Stance"); end;
/cast Hamstring

## Post 24239 by Martinsov — 2022-09-02T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24239#p24239 | page 1 | era: pre-1.18.1 -->

Спасибо попробую

## Post 24249 by Martinsov — 2022-09-02T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24249#p24249 | page 1 | era: pre-1.18.1 -->

Все работает кроме подрезать сухожильев

## Post 24276 by Dasenel — 2022-09-03T06:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24276#p24276 | page 1 | era: pre-1.18.1 -->

Тот же макрос, только надо добавить автоатаку на 36 слот, мб с ней заработает

/script texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Charge"); else CastSpellByName("Battle Stance"); end;
/script if not IsCurrentAction(36) then UseAction(36) end;
/cast Hamstring

## Post 42255 by Varvarka — 2023-04-19T19:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42255#p42255 | page 1 | era: pre-1.18.1 -->

А может кто помочь с макросом/аддоном на смену 2h/1h+sh

