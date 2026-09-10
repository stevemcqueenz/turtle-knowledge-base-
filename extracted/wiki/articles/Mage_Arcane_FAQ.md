---
title: "Mage Arcane FAQ"
url: "https://turtle-wow.fandom.com/wiki/Mage_Arcane_FAQ"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-24T16:36:40Z"
fetched: "2026-09-10T07:39:11Z"
is_turtle_content: false
patch: null
categories: ["Classes"]
---
# Mage Arcane FAQ

Go back to https://turtle-wow.fandom.com/wiki/Mage_FAQ

## Is Arcane good on this server?
Yes arcane is quite good since 1.17.2 patch on Nov 8th 2024.  Can read about the changes here https://forum.turtle-wow.org/viewtopic.php?p=102974#p102968

## What's a good spec for leveling?
This is just an example there is no single right answer.  It's probably not even worth putting a point in Arcane power until you get more geared / get 6PC Tier3.  

Top priority is improved arcane missiles.  Get everything in the arcane tree first unless you want the ability to aoe kite with cone of cold and arcane explosion.  Can dip into fire tree if you prefer.  

Priorities:  

# Improved arcane missiles
# Arcane focus
# Arcane concentration
# Temporal convergence
# Arcane meditation
# Arcane potency
# Accelerated arcana
# Resonance cascade
# Go into frost / fire tree

## What's a good spec for raiding?
Just make sure you get all of the good arcane talents as shown above. All of the extra talent points matter a lot less and can instead be used on flame throwing/elemental precision/more arcane talents.

## What rotation to use for arcane?
In general with low amounts of haste:
 Surge -> Rupture -> Missiles

During arcane power or MQG:
 Rupture -> Missiles (surge has 1.5s gcd that doesn't benefit from haste at all)

Full rotation at the start of a short fight where you have all cooldowns and less than 17% gear/consume haste:
 Rupture -> MQG -> Arcane power -> Missiles -> Rupture if rupture buff about to fall off -> Missiles

 With more haste than that it is better to use MQG and Arcane power separately.  You can use Arcane Power right before MQG ends to still benefit from the cooldown reduction.

If you have little to no haste, Surge is always worth it even to the point of canceling missiles early so long as you aren't clipping missile casts and you have extra mana.  If your rupture buff is active you should still try to maximize using it by waiting as long as possible to interrupt for surge.

Rupture is only worth canceling missiles for if you don't already have rupture buff.

When moving, you can use fire blast to fish for resists to then be able to fire off an arcane surge.

To give you an idea the raw dps of each spell without haste at end game
 base_sp = 1000, base_crit = 40, base_hit = 16, base_haste = 0
 
 Arcane Rupture - 2961 avg dmg, 2.4 avg cast time, 1233 dps
 Arcane Surge   - 2359 avg dmg, 1.5 avg cast time, 1573 dps
 Arcane Missiles with rupture buff    - 1223 avg dmg, 0.94 avg cast time, 1297 dps
 Arcane Missiles without rupture buff - 1020 avg dmg, 0.94 avg cast time, 1081 dps

## Where can I sim gear and rotations?
https://isfir.github.io/wowsims-turtle/mage/

## What gear to wear on bosses?
You can theorycraft your own bis using the gearplanner: https://pbrigade.gitlab.io/gear-planner/

Single Target BIS:

You can either use the 2 haste shoulder enchant or the Saph enchant. 2 haste is better on single target but Saph enchant does give you more versatility if there any AOE cleave during the fight.

Mixed AOE/Single Target:

Can also use Eyestalk Waistcord if you think you wont have mana issues over the whole fight duration.

## What gear to wear on trash?
If you are not expecting to often take damage on trash, you should wear 3PC Frost/Fire and 3PC Arcane as of the Nightmares of Ursol Patch. Otherwise use 5PC:

Option 1: Using 3PC/3PC

Option 2: Using T3.5 5PC

The above were provided from the following sim: https://isfir.github.io/wowsims-turtle/mage/. One should test trinket usages on trash over fights etc. 

## How can I cast Arcane missiles again only after the current channel has finished?
Check out https://github.com/pepopo978/nampower I made it so that you can queue spells including channeling ones along with a lot of other improvements.  There's even an option to press a spell twice during a channel to have it cast right after the next tick.

## Fresh 60 Arcane Stat Weights on Bosses from sim
generated with https://github.com/pepopo978/wowsim
Take with a grain of salt, no promises this perfectly matches turtle or there aren't bugs.

Weights are dependent on many factors like your gear and raid composition but to give a general idea with endgame gear and buffs:
 20k runs, 180 sec +- 5%, 0.07s server lag per cast

 control_sp = 300
 control_crit = 18
 control_hit = 13
 control_haste = 2
 no cooldowns

 surge when available -> rupture when available -> missiles

 20sp DPS Mean                 : 648.3 in 162.5 casts
 1 haste DPS Mean              : 643.3 in 163.8 casts
 1 hit DPS Mean                : 642.7 in 162.6 casts
 1 crit DPS Mean               : 641.8 in 162.5 casts
 control DPS Mean              : 636.5 in 162.5 casts

 ------ Per Spell Data ------
 20sp:
     Arcane Rupture                : 12.5 casts, 19474 dmg (16.7%), 1562 avg dmg, 2.35 avg cast time, 663.9 dps
     Arcane Missile                : 134.6 casts, 77193 dmg (66.2%), 573 avg dmg, 0.93 avg cast time, 618.5 dps
     Arcane Surge                  : 15.4 casts, 20033 dmg (17.2%), 1299 avg dmg, 1.5 avg cast time, 866.1 dps
 1 haste:
     Arcane Rupture                : 12.6 casts, 19300 dmg (16.6%), 1535 avg dmg, 2.33 avg cast time, 658.2 dps
     Arcane Missile                : 135.7 casts, 76482 dmg (66.1%), 564 avg dmg, 0.92 avg cast time, 614.6 dps
     Arcane Surge                  : 15.6 casts, 20012 dmg (17.3%), 1281 avg dmg, 1.5 avg cast time, 853.9 dps
 1 hit:
     Arcane Rupture                : 12.5 casts, 19336 dmg (16.7%), 1550 avg dmg, 2.35 avg cast time, 659.1 dps
     Arcane Missile                : 135.0 casts, 76878 dmg (66.5%), 569 avg dmg, 0.93 avg cast time, 614.3 dps
     Arcane Surge                  : 15.2 casts, 19471 dmg (16.8%), 1282 avg dmg, 1.5 avg cast time, 854.5 dps
 1 crit:
     Arcane Rupture                : 12.5 casts, 19268 dmg (16.6%), 1546 avg dmg, 2.35 avg cast time, 657.2 dps
     Arcane Missile                : 134.6 casts, 76335 dmg (66.1%), 567 avg dmg, 0.93 avg cast time, 611.6 dps
     Arcane Surge                  : 15.4 casts, 19927 dmg (17.3%), 1290 avg dmg, 1.5 avg cast time, 860.3 dps
 control:
     Arcane Rupture                : 12.5 casts, 19127 dmg (16.7%), 1533 avg dmg, 2.35 avg cast time, 652.0 dps
     Arcane Surge                  : 15.4 casts, 19691 dmg (17.2%), 1276 avg dmg, 1.5 avg cast time, 850.6 dps
     Arcane Missile                : 134.6 casts, 75756 dmg (66.1%), 563 avg dmg, 0.93 avg cast time, 607.0 dps

 1 haste % Missiles with Rupture: 57.8%
 1 crit % Missiles with Rupture: 57.8%
 1 hit % Missiles with Rupture : 58.5%
 20sp % Missiles with Rupture  : 57.8%
 control % Missiles with Rupture: 57.8%

So for this example 20 sp resulted in 12 more dps so we can compare that to the other stats to get a SP weight for each.

A 1 dps change in the average obviously will affect this a lot so assume at least +- 1 for these.

 ------ Stat Weights (in Spell Power) ------
 1 Hit Rating                  : 10.51 SP
 1 Haste Rating                : 11.53 SP
 1 Crit Rating                 : 8.98 SP

## Low Haste End Game Arcane Stat Weights on Bosses from sim
generated with https://github.com/pepopo978/wowsim
Take with a grain of salt, no promises this perfectly matches turtle or there aren't bugs.

Weights are dependent on many factors like your gear and raid composition but to give a general idea with endgame gear and buffs:
### 5% starting haste
 20k runs, 180 sec, 0.07s server lag per cast

 control_sp = 1100
 control_crit = 40
 control_hit = 15
 control_haste = 5
 using wrath of cenarius and tbos
 no cooldowns

 surge when available -> rupture when available -> missiles

 20sp DPS Mean                 : 1374.1 in 167.0 casts
 1 haste DPS Mean              : 1372.5 in 168.3 casts
 1 hit DPS Mean                : 1371.7 in 167.2 casts
 1 crit DPS Mean               : 1369.0 in 166.9 casts
 control DPS Mean              : 1359.7 in 167.0 casts

 Total spell dmg               : 1232478.7
 Total dot dmg                 : 0.0
 Total dmg                     : 1232478.7
 Average char dps              : 1369.4
 Highest single char dps       : 1609.5

 ------ Per Spell Data ------
 20sp:
     Arcane Rupture  : 12.8 casts, 40143 dmg (16.2%), 3141 avg dmg, 2.28 avg cast time, 1377.3 dps
     Arcane Missile  : 138.9 casts, 168669 dmg (68.2%), 1214 avg dmg, 0.9 avg cast time, 1354.1 dps
     Arcane Surge    : 15.3 casts, 38523 dmg (15.6%), 2517 avg dmg, 1.5 avg cast time, 1678.0 dps
 1 haste:
     Arcane Rupture  : 12.9 casts, 40206 dmg (16.3%), 3115 avg dmg, 2.26 avg cast time, 1377.9 dps
     Arcane Missile  : 140.0 casts, 168294 dmg (68.1%), 1202 avg dmg, 0.89 avg cast time, 1347.8 dps
     Arcane Surge    : 15.5 casts, 38556 dmg (15.6%), 2493 avg dmg, 1.5 avg cast time, 1662.1 dps
 1 hit:
     Arcane Rupture  : 12.8 casts, 40109 dmg (16.2%), 3136 avg dmg, 2.28 avg cast time, 1375.4 dps
     Arcane Missile  : 139.4 casts, 169461 dmg (68.7%), 1215 avg dmg, 0.9 avg cast time, 1355.2 dps
     Arcane Surge    : 15.0 casts, 37344 dmg (15.1%), 2496 avg dmg, 1.5 avg cast time, 1664.1 dps
 1 crit:
     Arcane Rupture  : 12.8 casts, 40059 dmg (16.2%), 3133 avg dmg, 2.28 avg cast time, 1374.0 dps
     Arcane Surge    : 15.3 casts, 38431 dmg (15.6%), 2510 avg dmg, 1.5 avg cast time, 1673.1 dps
     Arcane Missile  : 138.9 casts, 167928 dmg (68.2%), 1209 avg dmg, 0.9 avg cast time, 1348.3 dps
 control:
     Arcane Rupture  : 12.8 casts, 39744 dmg (16.2%), 3109 avg dmg, 2.28 avg cast time, 1363.5 dps
     Arcane Missile  : 138.9 casts, 166828 dmg (68.2%), 1201 avg dmg, 0.9 avg cast time, 1339.3 dps
     Arcane Surge    : 15.3 casts, 38184 dmg (15.6%), 2497 avg dmg, 1.5 avg cast time, 1664.6 dps

 ------ Rupture Missile Statistics ------
 20sp % Missiles with Rupture  : 62.0%
 1 crit % Missiles with Rupture: 62.0%
 1 hit % Missiles with Rupture : 62.6%
 1 haste % Missiles with Rupture: 62.5%
 control % Missiles with Rupture: 62.0%

So for this example 20 sp resulted in ~14 more dps so we can compare that to the other stats to get a SP weight for each.

A 1 dps change in the average obviously will affect this a lot so assume at least +- 1 for these.

 ----- Stat Weights (in Spell Power) ------
 1 Hit Rating                  : 16.67 SP
 1 Haste Rating                : 17.78 SP
 1 Crit Rating                 : 12.92 SP

### 15% starting haste
There are some breakpoints where different haste values will allow you to fit more missiles into your rupture buff where 1 additional haste has a larger impact.

Additionally due to haste scaling multiplicatively 1 point of haste when you already have 15% is turning into 1.15.   See the haste section for more details.

 control_sp = 1100
 control_crit = 40
 control_hit = 15
 control_haste = 15
 using wrath of cenarius and tbos
 no cooldowns

 20sp DPS Mean                 : 1494.8 in 179.9 casts
 1 haste DPS Mean              : 1494.8 in 181.4 casts
 1 hit DPS Mean                : 1492.9 in 180.2 casts
 1 crit DPS Mean               : 1488.6 in 179.9 casts
 control DPS Mean              : 1479.4 in 179.9 casts

 Total spell dmg               : 1340008.5
 Total dot dmg                 : 0.0
 Total dmg                     : 1340008.5
 Average char dps              : 1490.1
 Highest single char dps       : 1738.5

 ------ Per Spell Data ------
 20sp:
     Arcane Rupture    : 13.9 casts, 43665 dmg (16.2%), 3149 avg dmg, 2.09 avg cast time, 1504.1 dps
     Arcane Missile    : 149.0 casts, 182165 dmg (67.8%), 1223 avg dmg, 0.83 avg cast time, 1480.4 dps
     Arcane Surge      : 17.0 casts, 43018 dmg (16.0%), 2524 avg dmg, 1.5 avg cast time, 1682.6 dps
 1 haste:
     Arcane Rupture    : 14.0 casts, 43691 dmg (16.2%), 3118 avg dmg, 2.07 avg cast time, 1508.2 dps
     Arcane Missile    : 150.3 casts, 182335 dmg (67.8%), 1213 avg dmg, 0.82 avg cast time, 1486.9 dps
     Arcane Surge      : 17.1 casts, 42824 dmg (15.9%), 2503 avg dmg, 1.5 avg cast time, 1668.9 dps
 1 hit:
     Arcane Rupture    : 13.9 casts, 43700 dmg (16.3%), 3149 avg dmg, 2.09 avg cast time, 1504.5 dps
     Arcane Missile    : 149.6 casts, 182959 dmg (68.2%), 1223 avg dmg, 0.83 avg cast time, 1481.4 dps
     Arcane Surge      : 16.7 casts, 41840 dmg (15.6%), 2500 avg dmg, 1.5 avg cast time, 1666.4 dps
 1 crit:
     Arcane Rupture    : 13.9 casts, 43492 dmg (16.2%), 3139 avg dmg, 2.09 avg cast time, 1499.3 dps
     Arcane Missile    : 149.0 casts, 181387 dmg (67.8%), 1217 avg dmg, 0.83 avg cast time, 1473.8 dps
     Arcane Surge      : 17.0 casts, 42857 dmg (16.0%), 2516 avg dmg, 1.5 avg cast time, 1677.1 dps
 control:
     Arcane Rupture    : 13.9 casts, 43243 dmg (16.2%), 3118 avg dmg, 2.09 avg cast time, 1489.6 dps
     Arcane Missile    : 149.0 casts, 180211 dmg (67.7%), 1209 avg dmg, 0.83 avg cast time, 1464.3 dps
     Arcane Surge      : 17.0 casts, 42621 dmg (16.0%), 2504 avg dmg, 1.5 avg cast time, 1669.2 dps

 ------ Rupture Missile Statistics ------
 20sp % Missiles with Rupture  : 64.7%
 1 crit % Missiles with Rupture: 64.7%
 1 hit % Missiles with Rupture : 65.4%
 1 haste % Missiles with Rupture: 66.7%
 control % Missiles with Rupture: 64.8%

 ------ Stat Weights (in Spell Power) ------
 1 Hit Rating                  : 17.53 SP
 1 Haste Rating                : 20.00 SP
 1 Crit Rating                 : 11.95 SP

## High Haste Arcane Stat Weights on Bosses from sim
generated with https://github.com/pepopo978/wowsim
Take with a grain of salt, no promises this perfectly matches turtle or there aren't bugs.

Some players have been stacking haste using 3.5 arcane set and other items.  There's a lot of free haste on the set and certain haste thresholds can result in extra arcane missiles landing with rupture buff or being able to use arcane power twice in a fight (not captured in these weights).

 20k runs, 180 sec +- 5%, 0.07s server lag per cast

 control_sp = 1050
 control_crit = 35
 control_hit = 15
 control_haste = 25
 using wrath of cenarius and tbos
 no cooldowns

 rupture when available -> missiles   NO SURGE

 1 hit DPS Mean                : 1520.5 in 210.5 casts
 20sp DPS Mean                 : 1518.8 in 210.4 casts
 1 haste DPS Mean              : 1517.3 in 212.5 casts
 1 crit DPS Mean               : 1513.1 in 210.5 casts
 control DPS Mean              : 1502.1 in 210.4 casts

 1 hit:
     Arcane Rupture                : 15.6 casts, 46465 dmg (17.0%), 2981 avg dmg, 1.92 avg cast time, 1549.7 dps
     Arcane Missile                : 194.9 casts, 227168 dmg (83.0%), 1165 avg dmg, 0.75 avg cast time, 1550.8 dps
 20sp:
     Arcane Rupture                : 15.6 casts, 46600 dmg (17.0%), 2986 avg dmg, 1.92 avg cast time, 1551.8 dps
     Arcane Missile                : 194.8 casts, 226734 dmg (83.0%), 1164 avg dmg, 0.75 avg cast time, 1548.3 dps
 1 haste:
     Arcane Rupture                : 15.8 casts, 46551 dmg (17.0%), 2951 avg dmg, 1.9 avg cast time, 1550.2 dps
     Arcane Missile                : 196.7 casts, 226512 dmg (83.0%), 1151 avg dmg, 0.75 avg cast time, 1540.5 dps
 1 crit:
     Arcane Rupture                : 15.6 casts, 46314 dmg (17.0%), 2971 avg dmg, 1.92 avg cast time, 1544.3 dps
     Arcane Missile                : 194.9 casts, 225996 dmg (83.0%), 1160 avg dmg, 0.75 avg cast time, 1542.8 dps
 control:
     Arcane Rupture                : 15.6 casts, 45936 dmg (17.0%), 2944 avg dmg, 1.92 avg cast time, 1530.2 dps
     Arcane Missile                : 194.8 casts, 224392 dmg (83.0%), 1152 avg dmg, 0.75 avg cast time, 1532.2 dps

 1 haste % Missiles with Rupture: 69.6%
 control % Missiles with Rupture: 69.6%
 1 hit % Missiles with Rupture : 70.3%
 1 crit % Missiles with Rupture: 69.6%
 20sp % Missiles with Rupture  : 69.6%

 ----- Stat Weights (in Spell Power) ------
 1 Hit Rating                  : 22.04 SP
 1 Haste Rating                : 18.20 SP
 1 Crit Rating                 : 13.17 SP

## Weights at different starting haste values
 20k runs, 180 sec, 0.07s server lag per cast

 control_sp = 1100
 control_crit = 40
 control_hit = 15
 control_haste = 5
 using wrath of cenarius and tbos
 no cooldowns

 surge when available -> rupture when available -> missiles

{| class="article-table"
|+
! Starting haste !! +1 Hit (SP) !! +1 Haste (SP) !! +1 Crit (SP) !! +1 Haste % Missiles w/ Rupture
|-
| 0  || 16.11 || 18.75 || 12.08 || 1.1% gain vs control
|-
| 1  || 17.64 || 17.50 || 12.22 || 0% gain vs control
|-
| 2  || 17.14 || 16.83 || 14.44 || 0% gain vs control
|-
| 3  || 16.57 || 20.14 || 12.29 || 1.5% gain vs control
|-
| 4  || 18.79 || 19.73 || 14.50 || 1.5% gain vs control
|-
| 5  || 18.03 || 16.34 || 12.11 || 0.4% gain vs control
|-
| 6  || 17.20 || 18.67 || 12.67 || 0.4% gain vs control
|-
| 7  || 16.79 || 18.40 || 14.69 || 0.5% gain vs control
|-
| 8  || 15.65 || 16.77 || 10.56 || 0.6% gain vs control
|-
| 9  || 17.45 || 16.69 || 12.61 || 0% gain vs control
|-
| 10 || 16.84 || 16.46 || 12.03 || 0% gain vs control
|-
| 11 || 17.32 || 17.05 || 13.02 || 0.1% gain vs control
|-
| 12 || 17.55 || 15.48 || 12.90 || 0% gain vs control
|-
| 13 || 15.20 || 18.53 || 11.87 || 1% gain vs control
|-
| 14 || 16.77 || 15.57 || 12.46 || 0.5% gain vs control
|-
| 15 || 17.45 || 19.49 || 11.97 || 1.9% gain vs control
|-
| 16 || 16.36 || 15.15 || 13.82 || 0% gain vs control
|-
| 17 || 17.93 || 19.27 || 13.41 || 1.7% gain vs control
|-
| 18 || 16.50 || 18.63 || 12.38 || 1.3% gain vs control
|-
| 19 || 17.06 || 19.26 || 15.09 || 1.3% gain vs control
|-
| 20 || 16.35 || 17.50 || 11.77 || 0.7% gain vs control
|}

## Arcane Stat Weights on trash AOE from sim
 base_sp = 1000
 base_crit = 40
 base_hit = 16
 50k, 30 sec fight, 3 mobs, level 60
 spam arcane explosion, 0.07s server lag per cast

 20sp DPS Mean                                     : 1353 in 18.9 casts
 1 crit DPS Mean                                   : 1353 in 18.9 casts
 1 hit DPS Mean                                    : 1344 in 18.9 casts
 1 haste DPS Mean                                  : 1344 in 18.9 casts
 control DPS Mean                                  : 1344 in 18.9 casts

 1 haste          ~= 0 sp
 1 hit            ~= 0 sp
 1 crit           ~= 20 sp

for fresh 60s with 

 control_sp = 300
 control_crit = 18
 control_hit = 13

crit less valuable

 1 haste          ~= 0 sp
 1 hit            ~= 0 sp
 1 crit           ~= 16 sp

## Boss Trinket Comparison 1 min fight
generated with https://github.com/pepopo978/wowsim

 10k runs 1 min fight
 base_sp = 1000
 base_crit = 35
 base_hit = 16
 base_haste = 9
 use arcane power + active trinket 5 seconds into fight

 mqg DPS Mean                  : 1522 in 64.7 casts
 reos DPS Mean                 : 1440 in 59.3 casts
 mark of champ DPS Mean        : 1436 in 59.3 casts
 charm of magic DPS Mean       : 1432 in 59.3 casts
 sigil DPS Mean                : 1426 in 64.2 casts
 toep DPS Mean                 : 1408 in 59.3 casts
 tear DPS Mean                 : 1404 in 59.3 casts
 eye of dim DPS Mean           : 1400 in 59.3 casts
 shard of nightmare DPS Mean   : 1398 in 59.2 casts
 gulch DPS Mean                : 1396 in 59.4 casts
 zandalarian DPS Mean          : 1386 in 59.3 casts
 nothing DPS Mean              : 1371 in 59.3 casts

## Boss Trinket Comparison 2 min fight
generated with https://github.com/pepopo978/wowsim

 10k runs 2 min fight
 base_sp = 1000
 base_crit = 35
 base_hit = 16
 base_haste = 9
 use arcane power + active trinket 5 seconds into fight

 mqg DPS Mean                  : 1405 in 122 casts
 mark of champ DPS Mean        : 1394 in 117 casts
 sigil DPS Mean                : 1387 in 126 casts
 gulch DPS Mean                : 1383 in 119 casts
 reos DPS Mean                 : 1380 in 117 casts
 tear DPS Mean                 : 1363 in 117 casts
 charm_of_magic DPS Mean       : 1361 in 117 casts
 eye of dim DPS Mean           : 1359 in 117 casts
 shard of nightmare DPS Mean   : 1357 in 117 casts
 toep DPS Mean                 : 1351 in 117 casts
 zandalarian DPS Mean          : 1338 in 117 casts
 nothing DPS Mean              : 1331 in 117 casts

## Boss Trinket Comparison 3 min fight
generated with https://github.com/pepopo978/wowsim

 10k runs 3 min fight
 base_sp = 1000
 base_crit = 35
 base_hit = 16
 base_haste = 9
 use arcane power + active trinket 5 seconds into fight and 2 min into fight

 mark of champ DPS Mean        : 1379 in 174 casts
 gulch DPS Mean                : 1379 in 179 casts
 sigil DPS Mean                : 1372 in 188 casts
 reos DPS Mean                 : 1370 in 174 casts
 mqg DPS Mean                  : 1367 in 179 casts
 tear DPS Mean                 : 1349 in 174 casts
 shard of nightmare DPS Mean   : 1344 in 174 casts
 eye of dim DPS Mean           : 1344 in 174 casts
 toep DPS Mean                 : 1340 in 174 casts
 charm of magic DPS Mean       : 1338 in 174 casts
 zandalarian DPS Mean          : 1328 in 174 casts
 nothing DPS Mean              : 1317 in 174 casts

## Boss Trinket Comparison 4 min fight
generated with https://github.com/pepopo978/wowsim

 10k runs 4 min fight
 base_sp = 1000
 base_crit = 35
 base_hit = 16
 base_haste = 9
 use arcane power + active trinket 5 seconds into fight and 2/3 min into fight

 gulch DPS Mean                : 1375 in 238 casts
 mark of champ DPS Mean        : 1373 in 232 casts
 sigil DPS Mean                : 1365 in 251 casts
 reos DPS Mean                 : 1358 in 232 casts
 mqg DPS Mean                  : 1348 in 237 casts
 tear DPS Mean                 : 1343 in 232 casts
 charm of magic DPS Mean       : 1339 in 232 casts
 eye of dim DPS Mean           : 1338 in 232 casts
 shard of nightmare DPS Mean   : 1337 in 232 casts
 toep DPS Mean                 : 1328 in 232 casts
 zandalarian DPS Mean          : 1318 in 232 casts
 nothing DPS Mean              : 1310 in 232 casts

## Boss Trinket Comparison for Fresh 60
 control_sp = 300
 control_crit = 18
 control_hit = 13
 control_haste = 2

 mark of champ DPS Mean        : 697 in 110 casts
 reos DPS Mean                 : 686 in 110 casts
 tear DPS Mean                 : 686 in 110 casts
 mqg DPS Mean                  : 685 in 115 casts
 sigil DPS Mean                : 679 in 117 casts
 gulch DPS Mean                : 679 in 112 casts
 shard of nightmare DPS Mean   : 674 in 110 casts
 toep DPS Mean                 : 663 in 110 casts
 eye of dim DPS Mean           : 663 in 110 casts
 charm_of_magic DPS Mean       : 660 in 110 casts
 zandalarian DPS Mean          : 654 in 110 casts
 nothing DPS Mean              : 646 in 110 casts

## Arcane Trinket comparison on trash AOE
 base_sp = 1000
 base_crit = 40
 base_hit = 16
 10k, 30 sec fight, 3 mobs, level 60
 spam arcane explosion, 0.07s server lag per cast

 charm_of_magic DPS Mean                           : 1491 in 18.9 casts
 reos DPS Mean                                     : 1441 in 18.9 casts
 toep DPS Mean                                     : 1422 in 18.9 casts
 mark of champ DPS Mean                            : 1416 in 18.9 casts
 zandalarian hero charm DPS Mean                   : 1411 in 18.9 casts
 eye of dim DPS Mean                               : 1407 in 18.9 casts
 tear DPS Mean                                     : 1397 in 18.9 casts
 shard of nightmare DPS Mean                       : 1393 in 18.9 casts
 gulch DPS Mean                                    : 1389 in 18.9 casts
 nothing DPS Mean                                  : 1376 in 18.9 casts
 mqg DPS Mean                                      : 1376 in 18.9 casts

## How does haste work with Accelerated Arcana?
See https://turtle-wow.fandom.com/wiki/Mage_General_FAQ#How_does_haste_work? for a general explanation of haste.

The Accelerated Arcana talent doesn't actually give 5% haste (5% increase in casting speed), it actually gives a 5% reduction in casting time. Thus when calculating your cast time in general, with h your haste in decimals, and c the base cast time of your spell, then the actual cast time of you spell would be 
 <math>0.95 \cdot \frac{c}{1+h}</math>
Where the 0.95 is from the Accelerated Arcana Talent

## How does haste work with arcane missiles?
The cast time of the arcane missile channel follows the same haste formula as other spells.  That cast time is then divided by either 5 or 6 (if you are using one of the belts that increases the base channel time by 1 second).

So as an example if I just have the 5% haste from gear:
 <math>\text{Channel time for 5 missiles} = \frac{5}{1.05} = 4.76s</math>

Same example but with a belt that increases the missile channel time by 1s:
 <math>\text{Channel time for 6 missiles} = \frac{6}{1.05} = 5.71s</math>
