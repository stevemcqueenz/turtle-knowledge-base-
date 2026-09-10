---
title: "updating healcomm libraby"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15621"
topic_id: 15621
forum_id: 18
forum: "AddOns"
author: "Geojak"
author_authority: "player"
posted: "2024-11-06T08:51:00Z"
last_post: "2024-11-29T13:16:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:27:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# updating healcomm libraby

## Post 106656 by Geojak (Grandmaster of Forum PvP) — 2024-11-06T08:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106656#p106656 | page 1 | era: pre-1.18.1 -->

with the many changes in 1.17.2 healcomm has become totally out of date.

healcomm librabry is included in pfui, luna, grid, and even blizzard raid frames with the standalone healcomm addon. YOU are probly using it.

what does healcomm do? all the talents, spells, buffs, debuffs, set bonuses are hand replicated the calcualtion to exaclt predict incoming heals.

for example.
healer 1 has healcomm and starts healing with flash of light a tank B, he now sents to all healcomm users the inforamtion, when his heal is predicted to arrived and how much heal is predicted
healer 2 has healcoom and a raid frame addon like pfui or luna, he sees the incoming healing from healer 1 on the tank and moves someone else

since 1.17.2 healcomm values are just WRONG, totally messed up.

i have finished updating it for paladins.
ironclad, daybreak, changed t3 set bonus, changed blessing of light caluclation, changed flash of light libram values, new flash of light rank 7.

but i dont have a druid, priest or shaman character.
i am looking for people who are interested in helping to get this widely used library addon updated for ALL HEALERS.
espececially the priest change seems substantial!

## Post 107937 by rakeawed — 2024-11-14T09:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107937#p107937 | page 1 | era: pre-1.18.1 -->

To accurately forecast impending heals, the calculations for the skills, spells, buffs, debuffs, and set bonuses are hand-replicated.

## Post 110383 by saeyra — 2024-11-28T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110383#p110383 | page 1 | era: pre-1.18.1 -->

how do I help? I am a priest

## Post 110509 by Geojak (Grandmaster of Forum PvP) — 2024-11-29T13:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110509#p110509 | page 1 | era: pre-1.18.1 -->

> **saeyra wrote: Thu Nov 28, 2024 4:04 pm**
> how do I help? I am a priest

Are you familiar with addon coding?
I have made a githib fork to update the healcomm
<https://github.com/geojak/HealComm>

You can download the half finished addon here and continue coding for priest. Basically you heal, check if the predicted heal matches with your actual heal, try out changed or new relevant set bonus and talents. For priests even the baseline spell healing values changed, so those need updating too. Shadow mend is also missing

So far I finished shamans and paladins, but then my real life baby has been preventing me from continuing.

I got acces to a friend's account who has a shaman and priest, so eventually I will get to priest updating too. Still don't have a druid thought

