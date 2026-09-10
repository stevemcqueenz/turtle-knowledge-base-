---
title: "haste enchants >< raw ap enchants (revised version)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11230"
topic_id: 11230
forum_id: 45
forum: "Hunter"
author: "Nurincarinun"
author_authority: "player"
posted: "2023-10-27T14:03:00Z"
last_post: "2023-11-08T16:50:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:14:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# haste enchants >< raw ap enchants (revised version)

## Post 74308 by Nurincarinun — 2023-10-27T14:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74308#p74308 | page 1 | era: pre-1.18.1 -->

***[08.11.2023, 17:25, edit]: This post's original form is now replaced with a new post with corrected formulas and better formatting. I hope as this it is more legible and comprehensible.***

Hello and olleH. My ingame name is Nurinkhan. (And Carinun, the other half of my hunter personality.)

 **For tldr / toolbox section, skip introduction.**

Introduction:

This is a revised version of an earlier post by me, where I want to investigate how good my rp idea of a speedy hunter is in comparison to a more common playstyle of amassing raw ap stats (agi, (r)ap, hit, crit) in combination with maximizing output of aimed shots (not covered yet) and prbly melee weaving (not covered yet). I corrected the older post before, and now realized I used the formula to calculate the avg dmg per swing incorrectly; this is mainly the difference spawning this post.

So, this far, this post only covers auto shot usage (no ability shots like aimed shot or trueshot, neither melee weaving) and does not include usage of ap increase time windows (like from Devilsaur Eye or Jom Gabbar) or haste increase windows (like from Rapid Fire or Kiss of the Spider), neither any procs (like Quick Shots or the set bonus of the ZG fist weapons). I also wasn't sure how to include scopes into the dmg formulas, so they are for now absent. Then, there may be reasonable deviations from what I considered BiS gear pieces that might deserve investigation. And I neglected any weapon skill bonuses (like from Troll Racial or Eye of Nerub), as well as possible impact from available sources of armorpen stats. Possibly I was ignorant of other things, too, in the end; so feel free to extend this.

 **Here is a *tldr section* for you that includes a *toolbox* for quick calculations with your numbers:**

some definitions of literals:
A: ap worth of stats from gear that doesn't change between the two compared scenarios
a: extra ap worth of stats from the enchants of the unhastened scenario
H: summed haste rating in % as seen in gear tooltips from the hastened scenario
Wdps: ranged weapon's dps as seen in its tooltip
Ws: ranged weapon's speed as seen in its tooltip
N: number of shots needed to be fired to reach the point where one extra full shot is fired in the hastened scenario in comparison to the unhastened scenario
(r)ap: attack power = ranged attack power for this purpose, melee exclusive ap is ignored
hit: additional hitchance in % as seen from gear tooltips
crit: additional critchance in % as seen from gear tooltips
agi: additional agility as seen from gear tooltips
Ap: sum of ap worth of stats from gear
As: attack speed
Ash: As with haste applied (hastened attack speed)
A.: the amount of A we need to overcome to make the hastened scenario better than the unhastened scenario

borrowed formulas (assumptions):
 1hit->32ap (icyveins)
 1crit->32ap (icyveins)
 1agi->3ap (raidbuffed) (icyveins)
(Wdps + Ap/14) * Ws = average weapon damage per swing (vanilla wow wiki)

own formulas (toolbox):
H = (As / Ash) -100% (derived from ingame checks)
N = 1/H (derivation see below)
A.=a/H-Wdps*14 (derivation see below)

We can use this toolbox by inserting the data from our gear and hastened and unhastened scenario and see which of the two scenarios is better in terms of raw auto shot shooting in a fight where we land at least N shots with the unhastened attack speed. We will have to compare A. to A and see which is bigger. Only if A is bigger than A. does our overall dmg done benefit more from the haste H than from its replacement by the amount a of extra worth of ap from stats.

By these means, I calculated that with my gear, the 3%haste enchants (hands, legs, head) are worth less than the 23agi enchants (+7 hands, +8(x2) legs and head) that I would use. I also calculated that with BiS gear while keeping the ranged weapon and enchants of my actual gear, this would be the other way around (the haste enchants would be worth more than the 23agi enchants). Finally, I calculated that with complete BiS gear, and 5%haste enchants versus ZG&naxx&15agihands enchants, the haste would be inferior. This is all in terms of summed avg dmg per swing over shots fired at the moment when with the extra haste we shoot one more arrow (or bullet) than without the extra haste. I will keep my haste enchants for now, because I like to (and also because I think that for my goal of ZG/AQ20 content for now, the difference of enchants considering my gear will not be of relevant difference; ie my gear even without enchants would be good enough still).

 **This is where the *tldr ends*. Within the following wall of text you may find the rationale and derivations behind the formulas in the toolbox section.**

How do I calculate here? Well, the thing that bothered me most is: How do I calculate the real dmg done in this comparison? A "half shot" will never be fired, and will never do any dmg: If my haste increase gives me like 0,5 more shots in the first 10 seconds compared to non-haste increase, the haste will be wasted; only when there is a full shot fired is there any effect on real dmg (compared to the "theoretical dmg" done by 0,5 of a shot) coming into play by haste. **This brings us to *the derivation of: N=(1/H)***

table for
amount of shots fired | time taken with haste | time taken without haste

 0 | 0    | 0
 1 | 2,4  | 2,9
 2 | 4,8  | 5,8
 3 | 7,2  | 8,7
 4 | 9,6  | 11,6
 5 | 12,0 | 14,5
 6 | 14,4 | 17,4
 7 | 16,8 | 20,3

We can see that there is a change of the relation between the time taken to shoot an amount of shots with and without haste where when the 4th shot is fired without haste (and before), the 5th shot fired (and before) with haste takes more time; but with the 5th shot fired without haste (and after), the 6th shot fired (and after) with haste takes less time. Let's try find out how this can be turned into a simple calculation:

As = attack speed
H = Haste Rating in %
n = amount of shots fired with attack speed
Ash = attack speed with haste applied

As*n (=time taken to fire n shots with attack speed) is smaller than Ash*(n+1) (=time taken to fire one more shot with hastened attack speed than with unhastened attack speed) until after they are even, which is when the unequality gets reversed (from "is smaller than" over "is equal" to "is bigger than") - we thus look for when they are even (the turning point) to find out at what count of shots (n) they will reverse their unequal relationship and thus the first "full" shot gets fired with the hastened speed that is more than the (full) shots fired with the unhastened speed at the same moment (that n will be =:N). In equations with literals as assigned above:

(n+1)*Ash=n*As

If we use that (H+100%)=As/Ash, we can get As=Ash*(H+100%) and insert:

(n+1)*Ash=n*(Ash*(H+100%))
n*Ash+Ash=n*(Ash*H+Ash)
Ash+Ash/n=Ash*H+Ash |-Ash
Ash/n=Ash*H |*n
Ash=Ash*H*n |/(Ash*H)
Ash/(Ash*H)=n
 1/H=n =:N

This last equation gives us a way to calculate the number of full shots fired with an attack speed at the moment when one more shot gets fired with a haste rating applied to that attack speed by just inserting the concrete numbers for the literals as assigned above. For the example with a haste rating of 20% this would mean:

N=(1/H)=(1/20%)=5

We get the n=5 where unhastened attack speed (5th shot fired at 14.5sec) is overtaken by hastened attack speed (6th shot fired at 14.4sec) by one shot as seen in table above; so as expected the general formula gives us the specific answer we also found in the table.

Next, we can put in numbers from gear and find out whether at this point the haste enchants are worth more than the agi enchants.

My gear setup:

Beastmaster's Cap: 22agi, 1hit
Onyxia Tooth Pendant: 12agi, 1hit, 1crit
Beastmaster's Mantle: 1crit, 12agi
Beastmaster's Tunic: 25agi, 1crit
Cloak of the Black Baron: 15agi, 20ap
Beastmaster's Bindings: 18agi
Beastmaster's Gloves: 1hit, 14agi
Beastmaster's Belt: 17agi, 1hit
Beastmaster's Pants: 1crit, 28agi
Beastmaster's Boots: 24agi
TER: 15agi, 1hit
TER: 15agi, 1hit
Shendralar Trinket: 48rap
Blackhand's Breadth: 2crit
Huntsman's Harpoon: 35agi
Revantusk Shadow Hunter's Longbow: 22ap
fixed enchants between the two scenarios:
chest: +4agi (from +4allstats)
cloak: +3agi
belt: +6agi
 2hweap: +25agi
(not included in calculations yet: rangedweap: +7scope)
sum: 290agi, 6hit, 6crit, 90rap

 1agi->3ap (icyveins for raidbuffed)
 1crit->32ap (icyveins)
 1hit->32ap (icyveins)

worth of ap from my gear that stays the same between the two scenarios: 870 + 192 + 192 + 90 = 1344 = A
Wdps=33.3
Ws=2.9
H=3%
a=69
N=(1/H)=(33+1/3)=(100/3)

c1: (Wdps+(A+a)/14)*Ws*N >?< (Wdps+A/14)*Ws*(N+1) :c2
c1: (33.3+(1344+69)/14)*2.9*(100/3) >?< (33.3+1344/14)*2.9*(103/3) :c2
c1: 12975.42 > 12873,97 :c2

We can see that the summed avg dmg per shot at the moment of the Nth shot without haste (c1) is bigger than the avg dmg per shot in the scenario with haste (c2) at the same moment, which is where the N+1st shot is fired with haste. The agi enchants are thus superior to the haste enchants in these terms.

Now as a follow up question, I wondered how much of attack power from gear that is fixed between the two scenarios would be needed to make the extra haste worthwhile instead of the extra stats worth of ap. **This brings us to *the derivation of: A.=a/H-Wdps*14***

A: amount of ap worth from gear that stays the same between the two conditions
H: summed up haste rating in % that is extra in the hastened condition
a: ap worth of stats that is extra in the unhastened condition
A.: the amount of A that needs to be overcome to make the dmg done benefit more from the extra haste than from the extra ap worth of stats of the respective conditions

Similar to the derivation considering N, I assume that there is an amount of A where the dmg done in the unhastened condition (c1) is the same as in the hastened condition (c2), and that there is an unequality between c1 and c2 that turns around at this point (dmg done with c1 is bigger than with c2 until a certain amount of A is in play (A<=A.); whereas if that amount A. is overcome by A (A>A.), the amount of dmg done with the extra haste (c2) will be bigger than with the extra stats worth of ap (c1)).

Thus we compare:

c1:= (Wdps + ((A+a)/14)) * Ws * N
>?<
c2:= (Wdps + (A/14)) * Ws * (N+1)

And look for the point where c1=c2:

(Wdps+((A+a)/14))*Ws*1/H=(Wdps+(A/14))*Ws*((1/H)+1)

(Wdps+(A+a)/14)*Ws*1/H=(Wdps+A/14)*Ws*(1+H/H) |*H

(Wdps+(A+a)/14)*Ws=(Wdps+A/14)*Ws*(1+H) |/Ws

(Wdps+(A+a)/14)=(Wdps+A/14)*(1+H)

(Wdps+A/14)+a/14=(Wdps+A/14)+(Wdps+A/14)*H |-(Wdps+A/14)

a/14=(Wdps+A/14)*H |/H

a/14/H=Wdps+A/14 |*14

a/H=A+Wdps*14 |-Wdps*14

a/H-Wdps*14=A =:A.

This shows that there is a point at wich the development of summed dmg from avg dmg per shot over the amount of full shots fired in the two attack speed conditions is the same with a certain amount of stats worth of ap that is fixed between the two conditions, which should be the turning point. We can now check the numbers for each scenario before and after this amount of Ap (A.-1 & A.+1) to see whether and how it turns.

Let's put in numbers from my gear:

 69/3%-33.3*14=A.
 2300-466.2=A.
 1833.8=A.

So at 1833.8 worth of ap by stats from gear that stay the same between c1 and c2 should be where the two scenarios (in this specific case 23agi><3%haste by enchants) result in same dmg for the amount of shots where the hastened scenario is with one extra shot. Now let's see the values of dmg done between the two scenarios at N for one point of ap before A. (Nb with Ab=(A.-1)) and after it (Na with Aa=(A.+1)).

Nbc1 = (Wdps + (Ab + a)/14) * Ws * N >?< (Wdps + Ab/14) * Ws * (N+1) = Nbc2

Nac1 = (Wdps + (Aa + a)/14) * Ws * N >?< (Wdps + Aa/14) * Ws * (N+1) = Nac2

Put in the numbers, and we get:

Nbc1 = (33.3 + (1832.8 + 69)/14) * 2.9 * (100/3) >?< (33.3 + 1832.8/14) * 2.9 * (103/3) = Nbc2

Nac1 = (33.3 + (1834.8 + 69)/14) * 2.9 * (100/3) >?< (33.3 + 1834.8/14) * 2.9 * (103/3) = Nac2

Calculate, and we end up with:

Nbc1 = 16350.4762 > 16350.2690 = Nbc2

Nac1 = 16364.2857 < 16364.4929 = Nac2

And indeed, we see that the relation of dmg dealt between the two scenarios changes under the condition of stats worth of attack power that remain the same between the two scenarios around the found value A. and that the haste would be worth more than the agi at some point of stats worth of attack power amassed.

Let's look at my gear and calculate the worth of ap of its stats to see whether +23agi enchants would be better than 3%haste enchants or vice versa.

So from my gear setup I get A=1344 worth of ap in stats that stay the same between the two conditions of enchants. The calculated amount of ap worth of stats that would need to be overcome so that the haste enchants would be worth more than the agi enchants in the example of my gear state was A.=1833.8; since my A<A. the 23agi enchants scenario would be better in place of the 3%haste enchants scenario considering firing only auto shots (no ability shots like aimed shot or trueshot).

My next question was: is there the possibility of a gear where the 3%haste enchants would be worth more than the 23agi enchants? Let's go to the extreme and calculate the A of a BiS example with the same ranged weap and the same fixed enchants as in my gear:

T3:
 33agi, 1hit
 23 agi, 1hit, 1crit
 24agi, 1crit
 31agi, 2crit
 42agi, 1crit
 29agi, 1crit
 45agi, 1hit, 1crit
 26agi, 1hit
 30agi
 30agi, 1hit (Prestor's Talisman of Connivery)
 34agi (Band of Reanimation)
 64ap (Slayer's Crest)
 1crit, 1hit (Kiss of the Spider)
 45agi (Eye of Nerub)
 22ap (Revantusk Shadow Hunter's Longbow)
 10agi, 50ap (cloak from Nerubian Overseer)
fixed enchants:
chest: +4agi (+4alls stats)
cloak: +3agi
belt: +6agi
 2hweap: +25agi
sum: 440agi, 6hit, 8crit, 136rap
worth of ap: 1320 + 192 + 256 + 136 = 1904

Since A. stays the same (no change of the "a" from agi enchants, no change of the "H" from haste enchants, no change of the Wdps since the ranged weapon stays the same) and is A.=1833.8, from the comparison with A=1904 we now see we overcome the threshold for A necessary to make the 3%haste enchants worth more in terms of dmg dealt than the 23agi enchants.

Let's go on an do this comparison with raw ap BiS enchants (ZG & naxx, as well as 15agi hands and 7agi bracers) and thus also include the 2% haste on shoulders enchant from Hyjal, while also using Nerubian Slavemaker.

Our gear stats worth of ap now increase by:
Revantusk Shadow Hunter's Longbow -> Nerubian Slavemaker: +2ap, +1crit
fixed enchants: +7agi bracers
worth of ap: 32 + 21 + 2 = 55
added on the 1904 worth of ap from the rest of gear, A is now: A=1959

Haste is now: H=5%

additional stats in unhastened scenario now cover:
 26ap, 1crit (shoulder naxx)
 24rap, 1hit (x2) (head and legs ZG)
 15agi (hands)
sum in worth of ap: 74 + 32 + 64 + 45 = 215 = a

Nerubian Slavemaker: Wdps=57.2

We put the numbers into the formulas, and see:
N=(1/H)=20
(a/H)-(Wdps*14)=(215/5%)-(57.2*14)=4300-800.8=3499.2=A.

We see that A.=3499.2>A=1959, and thus the naxx&ZG&15agi enchants are better than the haste enchants with this setup of BiS gear.

Next todo would be considering the use of trueshot or aimed shot rotations, and even further the other things mentioned in the introduction. [edit: Some of them are considered in my new post about ideas for mechanics to synergyze with haste: [viewtopic.php?t=11616](https://forum.turtlecraft.gg/viewtopic.php?t=11616)]

Thanks for reading! I am curious of how this will go on, but it will take some time until I can take more time to continue this in a mathematical way.

Best regards,
Nurinkhan

*Last edited by Nurincarinun on Sat Nov 11, 2023 2:29 pm, edited 12 times in total.*

## Post 76502 by Nurincarinun — 2023-11-08T16:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76502#p76502 | page 1 | era: pre-1.18.1 -->

bump because corrected, revised, and reformatted

