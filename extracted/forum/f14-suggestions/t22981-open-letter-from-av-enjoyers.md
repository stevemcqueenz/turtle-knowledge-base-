---
title: "Open Letter from AV Enjoyers"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22981"
topic_id: 22981
forum_id: 14
forum: "Suggestions"
author: "Zvyrhol"
author_authority: "player"
posted: "2025-11-23T08:42:00Z"
last_post: "2025-11-25T20:12:00Z"
post_count: 21
pages: 1
fetched: "2026-09-10T11:09:26Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Open Letter from AV Enjoyers

## Post 160378 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-23T08:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160378#p160378 | page 1 | era: 1.18.1-announced-pre-release -->

TL;DR

Change GetHonorGain() in Formulas.h to the following:
Code: Select all

```
inline float GetHonorGain(uint8 killerLevel, uint8 victimLevel, uint32 victimRank, uint32 totalKills = 0, uint32 groupSize = 1, bool battlegroundAV = false)
{
// Penalty due to level diff
float diffLevelPenalty = XP::BaseGainLevelFactor(killerLevel, victimLevel);

// Same unit killing penalty
// [-PROGRESSIVE] Total kills per day cahnged in 1.12 (http://wow.gamepedia.com/Patch_1.12.0#General)
// Honorable Kills now diminish at a rate 10% per kill rather than 25% per kill.
float penalty = 4.0f;
if (sWorld.GetWowPatch() >= WOW_PATCH_112 || !sWorld.getConfig(CONFIG_BOOL_ACCURATE_PVP_REWARDS))
penalty = 10.0f;

double sameVictimPenalty;
if (battlegroundAV)
sameVictimPenalty = totalKills >= static_cast<uint32>(penalty / 2) ? 0.5 : (1.0 - ((double)totalKills / penalty));
else
sameVictimPenalty = totalKills >= static_cast<uint32>(penalty) ? 0 : 1 - totalKills / penalty;

// Level related coefficient
double levelCoeff;

if (killerLevel >= 60)
levelCoeff = 1;
else if ((killerLevel <= 59) && (killerLevel >= 50))
levelCoeff = 0.9545;
else if ((killerLevel <= 49) && (killerLevel >= 40))
levelCoeff = 0.5707;
else if ((killerLevel <= 39) && (killerLevel >= 30))
levelCoeff = 0.3434;
else if ((killerLevel <= 29) && (killerLevel >= 20))
levelCoeff = 0.2070;
else if (killerLevel <= 19)
levelCoeff = 0.1212;
else
levelCoeff = 0.1212; // Not sure

float expFactor = 188.3f;

// [-PROGRESSIVE] Honor gain per victim rank changed in 1.8
// Values from http://www.wowwiki.com/Honor_system_(pre-2.0_formulas)
if (sWorld.GetWowPatch() < WOW_PATCH_108 && sWorld.getConfig(CONFIG_BOOL_ACCURATE_PVP_REWARDS))
expFactor = 157.4f;

return levelCoeff * sameVictimPenalty * (expFactor * exp(0.05331 * victimRank)) * diffLevelPenalty / groupSize;
}
```

and change HonorableKillPoints() in HonorMgr.cpp to the following:
Code: Select all

```
float HonorMgr::HonorableKillPoints(Player* killer, Player* victim, uint32 groupSize)
{
if (!killer || !victim || !groupSize)
return 0.0;

uint32 totalKills = killer->GetHonorMgr().CalculateTotalKills(victim);
uint32 victimRank = victim->GetHonorMgr().GetRank().visualRank;
uint8 killerLevel = killer->GetLevel();
uint8 victimLevel = victim->GetLevel();
bool battlegroundAV = killer->GetBattleGroundTypeId() == BATTLEGROUND_AV;

return MaNGOS::Honor::GetHonorGain(killerLevel, victimLevel, victimRank, totalKills, groupSize, battlegroundAV);
}
```

---

Dear Developers,

On behalf of the regular players of Alterac Valley, I kindly request that you consider changing the way two specific functions in your core work:

 *GetHonorGain* in Formulas.h
 *HonorableKillPoints* in HonorMgr.cpp

The proposed code modification limits *diminishing returns* on honor in Alterac Valley. As you know, *diminishing returns* reduce honor gained when killing the same player multiple times. We, the regular players of Alterac Valley, find this mechanic harmful in long, so-called "turtle games", because it effectively reduces honor gained per hour to nearly zero.

 *Diminishing returns* is also responsible for the enormous gap in honor gains between rapid games and long ones. Because of this, players pressure each other not to play Alterac Valley in the traditional, objective-based way (as was common in original WoW in 2005). Instead, players feel forced to rush objectives and end the game as quickly as possible for optimal honor per hour.

We, the players of Alterac Valley, believe the battleground was not designed to be played this way. We also believe the solution proposed above would fix the problem and help restore Alterac Valley to its original epic and iconic gameplay. Long and epic battles would once again become the norm rather than a punishment for players trying to progress in the PvP ranking system.

This change would be a win-win for two groups of players who historically disagree:
PvP-focused players who want efficient honor gains and players who want to enjoy classic Alterac Valley gameplay.

With this change, PvP-oriented players could participate in longer battles without suffering near-zero honor gains, and the second group would finally be able to experience the "old" Alterac Valley more frequently.

Additionally, this change aligns with the approach taken by Turtle WoW, which restored the map to its pre-nerfed design.

We kindly ask you to consider our proposal.

 *Alterac Valley Enjoyers*

---

Details

- Penalty for killing same player multiple times is now limited to 50% instead of 100%. This ensures that HKs stay as a relevant source of honor in long games and always reward at least 50% of total honor for honorable kill.

- The code was tested and works as intended.

- Diminishing returns is limited only in AV. In other battlegrounds and in open world old formula is still applied.

- Penalty in proposed formula is capped at 50% but could be easily changed to another level if needed.

## Post 160399 by Cherrylips — 2025-11-23T12:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160399#p160399 | page 1 | era: 1.18.1-announced-pre-release -->

What are u talking a about within 13 mins all the objectives are done (can even cap last towers within 15 mins) and we been running it for weeks ally side, only horde people refuse to do objectives. if they would it would be a 50/50 chance either side wins, but they prefer to win so they rush.
Kind regards someone who grinded 700k honor a week and 800k this week and knows whats up.

## Post 160403 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-23T12:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160403#p160403 | page 1 | era: 1.18.1-announced-pre-release -->

> **Cherrylips wrote: Sun Nov 23, 2025 12:28 pm**
> What are u talking a about within 13 mins all the objectives are done (can even cap last towers within 15 mins) and we been running it for weeks ally side, only horde people refuse to do objectives. if they would it would be a 50/50 chance either side wins, but they prefer to win so they rush.
>  Kind regards someone who grinded 700k honor a week and 800k this week and knows whats up.

Yes, this fix is irrelevant in shorter games. It is focused on longer "turtle" games.

## Post 160407 by Cherrylips — 2025-11-23T14:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160407#p160407 | page 1 | era: 1.18.1-announced-pre-release -->

there shouldn't be any rewarding behaviour for turtle games the whole objective is to get to the enemy base and manage the other 39 people u have with you.There is no point for turtles other then  griefing on purpose or accidental.

Its like taking WSG flag and sitting not turning it in.

## Post 160412 by Kerenis (Patch Note Conspiracy Theorist) — 2025-11-23T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160412#p160412 | page 1 | era: 1.18.1-announced-pre-release -->

> **Zvyrhol wrote: Sun Nov 23, 2025 12:52 pm**
> > **Cherrylips wrote: Sun Nov 23, 2025 12:28 pm**
> > What are u talking a about within 13 mins all the objectives are done (can even cap last towers within 15 mins) and we been running it for weeks ally side, only horde people refuse to do objectives. if they would it would be a 50/50 chance either side wins, but they prefer to win so they rush.
> >  Kind regards someone who grinded 700k honor a week and 800k this week and knows whats up.
>
>  Yes, this fix is irrelevant in shorter games. It is focused on longer "turtle" games.

You're just promoting a way to make AV games longer than they should be, just to increase honor gains

This affects negatively to people farming AV for reputation

## Post 160414 by Whylolbut — 2025-11-23T15:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160414#p160414 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Sun Nov 23, 2025 2:29 pm**
> > **Zvyrhol wrote: Sun Nov 23, 2025 12:52 pm**
> > > **Cherrylips wrote: Sun Nov 23, 2025 12:28 pm**
> > > What are u talking a about within 13 mins all the objectives are done (can even cap last towers within 15 mins) and we been running it for weeks ally side, only horde people refuse to do objectives. if they would it would be a 50/50 chance either side wins, but they prefer to win so they rush.
> > >  Kind regards someone who grinded 700k honor a week and 800k this week and knows whats up.
> >
> >  Yes, this fix is irrelevant in shorter games. It is focused on longer "turtle" games.
>
>   You're just promoting a way to make AV games longer than they should be, just to increase honor gains
>
>  This affects negatively to people farming AV for reputation

no he is just a bad player that doesnt want to put in the effort to win a game so just wants to no brain zerg mid for honor indefinitly.

## Post 160416 by Cherrylips — 2025-11-23T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160416#p160416 | page 1 | era: 1.18.1-announced-pre-release -->

> **Whylolbut wrote: Sun Nov 23, 2025 3:04 pm**
> > **Kerenis wrote: Sun Nov 23, 2025 2:29 pm**
> > > **Zvyrhol wrote: Sun Nov 23, 2025 12:52 pm**
> > > Yes, this fix is irrelevant in shorter games. It is focused on longer "turtle" games.
> >
> >   You're just promoting a way to make AV games longer than they should be, just to increase honor gains
> >
> >  This affects negatively to people farming AV for reputation
>
>   no he is just a bad player that doesnt want to put in the effort to win a game so just wants to no brain zerg mid for honor indefinitly.

So basically soak up honor while putting his char on follow xD

## Post 160418 by Garganta — 2025-11-23T15:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160418#p160418 | page 1 | era: 1.18.1-announced-pre-release -->

> **Zvyrhol wrote: Sun Nov 23, 2025 8:42 am**
> TL;DR
>
>  Change GetHonorGain() in Formulas.h to the following:
>  Code: Select all
>
> ```
> inline float GetHonorGain(uint8 killerLevel, uint8 victimLevel, uint32 victimRank, uint32 totalKills = 0, uint32 groupSize = 1, bool battlegroundAV = false)
>         {
>             // Penalty due to level diff
>             float diffLevelPenalty = XP::BaseGainLevelFactor(killerLevel, victimLevel);
>
>             // Same unit killing penalty
>             // [-PROGRESSIVE] Total kills per day cahnged in 1.12 (http://wow.gamepedia.com/Patch_1.12.0#General)
>             // Honorable Kills now diminish at a rate 10% per kill rather than 25% per kill.
>             float penalty = 4.0f;
>             if (sWorld.GetWowPatch() >= WOW_PATCH_112 || !sWorld.getConfig(CONFIG_BOOL_ACCURATE_PVP_REWARDS))
>                 penalty = 10.0f;
>
> 			double sameVictimPenalty;
> 			if (battlegroundAV)
> 				sameVictimPenalty = totalKills >= static_cast<uint32>(penalty / 2) ? 0.5 : (1.0 - ((double)totalKills / penalty));
> 			else
> 				sameVictimPenalty = totalKills >= static_cast<uint32>(penalty) ? 0 : 1 - totalKills / penalty;
>
>             // Level related coefficient
>             double levelCoeff;
>
>             if (killerLevel >= 60)
>                 levelCoeff = 1;
>             else if ((killerLevel <= 59) && (killerLevel >= 50))
>                 levelCoeff = 0.9545;
>             else if ((killerLevel <= 49) && (killerLevel >= 40))
>                 levelCoeff = 0.5707;
>             else if ((killerLevel <= 39) && (killerLevel >= 30))
>                 levelCoeff = 0.3434;
>             else if ((killerLevel <= 29) && (killerLevel >= 20))
>                 levelCoeff = 0.2070;
>             else if (killerLevel <= 19)
>                 levelCoeff = 0.1212;
>             else
>                 levelCoeff = 0.1212; // Not sure
>
>             float expFactor = 188.3f;
>
>             // [-PROGRESSIVE] Honor gain per victim rank changed in 1.8
>             // Values from http://www.wowwiki.com/Honor_system_(pre-2.0_formulas)
>             if (sWorld.GetWowPatch() < WOW_PATCH_108 && sWorld.getConfig(CONFIG_BOOL_ACCURATE_PVP_REWARDS))
>                 expFactor = 157.4f;
>
>             return levelCoeff * sameVictimPenalty * (expFactor * exp(0.05331 * victimRank)) * diffLevelPenalty / groupSize;
>         }
> ```
>
>   and change HonorableKillPoints() in HonorMgr.cpp to the following:
>  Code: Select all
>
> ```
> float HonorMgr::HonorableKillPoints(Player* killer, Player* victim, uint32 groupSize)
> {
>     if (!killer || !victim || !groupSize)
>         return 0.0;
>
>     uint32 totalKills = killer->GetHonorMgr().CalculateTotalKills(victim);
>     uint32 victimRank = victim->GetHonorMgr().GetRank().visualRank;
>     uint8 killerLevel = killer->GetLevel();
>     uint8 victimLevel = victim->GetLevel();
> 	bool battlegroundAV = killer->GetBattleGroundTypeId() == BATTLEGROUND_AV;
>
>     return MaNGOS::Honor::GetHonorGain(killerLevel, victimLevel, victimRank, totalKills, groupSize, battlegroundAV);
> }
> ```
>
>
> ---
>
>  Dear Developers,
>
>  On behalf of the regular players of Alterac Valley, I kindly request that you consider changing the way two specific functions in your core work:
>
>  *GetHonorGain* in Formulas.h
>  *HonorableKillPoints* in HonorMgr.cpp
>
>  The proposed code modification limits *diminishing returns* on honor in Alterac Valley. As you know, *diminishing returns* reduce honor gained when killing the same player multiple times. We, the regular players of Alterac Valley, find this mechanic harmful in long, so-called "turtle games", because it effectively reduces honor gained per hour to nearly zero.
>
>  *Diminishing returns* is also responsible for the enormous gap in honor gains between rapid games and long ones. Because of this, players pressure each other not to play Alterac Valley in the traditional, objective-based way (as was common in original WoW in 2005). Instead, players feel forced to rush objectives and end the game as quickly as possible for optimal honor per hour.
>
>  We, the players of Alterac Valley, believe the battleground was not designed to be played this way. We also believe the solution proposed above would fix the problem and help restore Alterac Valley to its original epic and iconic gameplay. Long and epic battles would once again become the norm rather than a punishment for players trying to progress in the PvP ranking system.
>
>  This change would be a win-win for two groups of players who historically disagree:
>  PvP-focused players who want efficient honor gains and players who want to enjoy classic Alterac Valley gameplay.
>
>  With this change, PvP-oriented players could participate in longer battles without suffering near-zero honor gains, and the second group would finally be able to experience the "old" Alterac Valley more frequently.
>
>  Additionally, this change aligns with the approach taken by Turtle WoW, which restored the map to its pre-nerfed design.
>
>  We kindly ask you to consider our proposal.
>
>
>  *Alterac Valley Enjoyers*
>
>
>
> ---
>
>
>  Details
>
> - Penalty for killing same player multiple times is now limited to 50% instead of 100%. This ensures that HKs stay as a relevant source of honor in long games and always reward at least 50% of total honor for honorable kill.
>
> - The code was tested and works as intended.
>
> - Diminishing returns is limited only in AV. In other battlegrounds and in open world old formula is still applied.
>
> - Penalty in proposed formula is capped at 50% but could be easily changed to another level if needed.

I agree with you![👍](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f44d.svg)
AV is more or less a brain dead game as is now.
Ppl that want to rush in AV are either forced to do so because of honor per hour, or most likely ppl that got used to Classic brain rotting meta.
And maybe never experienced AV as it was when it first came out.

Longer games with possibility to jump out for AB / WSG would be the best solution for those that want quick games.
AV was never intended to be fast paced.
Those ppl can do the fast paced XF shait for honor per hour.
Let us slowpokes have some piece of enjoyable pvp left.
Pvp is horrible on Nord.
Give free transfer with gear only on char to TA.

And no, I won't lvl and grind the ranks again all over on TA.

## Post 160482 by Kerenis (Patch Note Conspiracy Theorist) — 2025-11-23T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160482#p160482 | page 1 | era: 1.18.1-announced-pre-release -->

> **Garganta wrote: Sun Nov 23, 2025 3:21 pm**
> AV was never intended to be fast paced.
>  Those ppl can do the fast paced XF shait for honor per hour.
>  Let us slowpokes have some piece of enjoyable pvp left.

AV is not PVP, its more a PVE raid than anything

## Post 160486 by Escaton1 (Barrens Chat Casualty) — 2025-11-23T23:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160486#p160486 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Sun Nov 23, 2025 10:37 pm**
> > **Garganta wrote: Sun Nov 23, 2025 3:21 pm**
> > AV was never intended to be fast paced.
> >  Those ppl can do the fast paced XF shait for honor per hour.
> >  Let us slowpokes have some piece of enjoyable pvp left.
>
>   AV is not PVP, its more a PVE raid than anything

It's designed to be the most PvP battleground in the game, 80 players throwing hands continuously for long periods of time. There's no battleground that enables nearly as much PvP in the game

## Post 160495 by Insanefool (Barrens Chat Casualty) — 2025-11-24T01:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160495#p160495 | page 1 | era: 1.18.1-announced-pre-release -->

> **Cherrylips wrote: Sun Nov 23, 2025 2:15 pm**
> there shouldn't be any rewarding behaviour for turtle games the whole objective is to get to the enemy base and manage the other 39 people u have with you.There is no point for turtles other then  griefing on purpose or accidental.
>
>  Its like taking WSG flag and sitting not turning it in.

True pvpers do not queue warsong to capture the flag but to dominate the map completely. If you arent aiming to camp the gy while holding the flag in your fully maxed out character then you are just a new scrub and you are missing the true essence of WSG. Historically I have not seen many players on turtle wow that understand this, but that should have been expected for a soft RP PVE server.

AV on the other hand is a bit different. While turtling in AV is a completely normal part of the game mode; the part that is not normal is the horrible changes to the AV map the devs made long ago which increase the intensity of turtling. Mostly the addition of invisible walls everywhere and the changing of graveyard locations.

I promise you that the horrible turtle wow exclusive invisible walls makes the diminishing returns of honor in a 2 hour game feel worse than they should. I'm certain that the diminishing returns to honor were added because back in the day on turtle WoW (prior to the map changes) AV was pretty much the only battle ground that ever ran because it was farmed by everyone for honor. There was a time where the honor nerfs combined with the thoughtless map changes felt like they were trying to do everything they could to kill AV completely but yet there were still few queues for other bgs.

I think it took another 2 years before people got so sick and fed up of the AV bullshit that other queues started to reliably pop because farming AV for honor was forced to be such a sub-optimal method and often a torturous experience for everyone including the people that dont even care about honor points.

## Post 160500 by Kerenis (Patch Note Conspiracy Theorist) — 2025-11-24T03:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160500#p160500 | page 1 | era: 1.18.1-announced-pre-release -->

> **Escaton1 wrote: Sun Nov 23, 2025 11:18 pm**
> > **Kerenis wrote: Sun Nov 23, 2025 10:37 pm**
> > > **Garganta wrote: Sun Nov 23, 2025 3:21 pm**
> > > AV was never intended to be fast paced.
> > >  Those ppl can do the fast paced XF shait for honor per hour.
> > >  Let us slowpokes have some piece of enjoyable pvp left.
> >
> >   AV is not PVP, its more a PVE raid than anything
>
>   It's designed to be the most PvP battleground in the game, 80 players throwing hands continuously for long periods of time. There's no battleground that enables nearly as much PvP in the game

Thats why it has more NPCs than most dungeons, and the main objective is killing a bunch of bosses, right? ![🙄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f644.svg)

## Post 160643 by Jinxes — 2025-11-25T13:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160643#p160643 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Sun Nov 23, 2025 10:37 pm**
> > **Garganta wrote: Sun Nov 23, 2025 3:21 pm**
> > AV was never intended to be fast paced.
> >  Those ppl can do the fast paced XF shait for honor per hour.
> >  Let us slowpokes have some piece of enjoyable pvp left.
>
>   AV is not PVP, its more a PVE raid than anything

Ironically it is the opposite. AV is more of a PvP experience than any other battleground.

Back in the day, when AV was first released, it was the better PvP experience out of all the battlegrounds, because the addition of powerful NPC's to chew through on a linear path meant that the "middle" of the map could shift between graveyards. It was a true push and pull between large competing groups of players, and everybody could contribute somehow.

Compare that to WSG, which rewards players for *avoiding the opposite team and running away from them with their flag*, and AB, which rewards players for *splitting up and sitting on a flag point, away from the action*.

Alterac Valley was more reminiscent of Southshore before battlegrounds were released than WSG and AB ever were. Blizzard struck **gold** with AV. Then the combination of nerfed NPC numbers, health, and damage, and the insane gear power scaling of later WoW, completely ruined AV's balance.

AV only works as intended if it is balanced so that rushing is not possible, at which point it is the best PvP that WoW has to offer.

## Post 160645 by Xudo (Grandmaster of Forum PvP) — 2025-11-25T13:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160645#p160645 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Mon Nov 24, 2025 3:49 am**
> > **Escaton1 wrote: Sun Nov 23, 2025 11:18 pm**
> > > **Kerenis wrote: Sun Nov 23, 2025 10:37 pm**
> > > AV is not PVP, its more a PVE raid than anything
> >
> >   It's designed to be the most PvP battleground in the game, 80 players throwing hands continuously for long periods of time. There's no battleground that enables nearly as much PvP in the game
>
>   Thats why it has more NPCs than most dungeons, and the main objective is killing a bunch of bosses, right? ![🙄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f644.svg)

Yeah. Lets pretend that DotA is the PvE game because there are a lot of creeps along the way.

## Post 160648 by Kerenis (Patch Note Conspiracy Theorist) — 2025-11-25T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160648#p160648 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xudo wrote: Tue Nov 25, 2025 1:08 pm**
> > **Kerenis wrote: Mon Nov 24, 2025 3:49 am**
> > > **Escaton1 wrote: Sun Nov 23, 2025 11:18 pm**
> > > It's designed to be the most PvP battleground in the game, 80 players throwing hands continuously for long periods of time. There's no battleground that enables nearly as much PvP in the game
> >
> >   Thats why it has more NPCs than most dungeons, and the main objective is killing a bunch of bosses, right? ![🙄](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f644.svg)
>
>  Yeah. Lets pretend that DotA is the PvE game because there are a lot of creeps along the way.

Creeps om the way is not even close to defeating Drekthar boss and his bunch of bodyguards to win

You can win AV without killing a single player

## Post 160649 by Kerenis (Patch Note Conspiracy Theorist) — 2025-11-25T13:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160649#p160649 | page 1 | era: 1.18.1-announced-pre-release -->

> **Jinxes wrote: Tue Nov 25, 2025 1:00 pm**
> > **Kerenis wrote: Sun Nov 23, 2025 10:37 pm**
> > > **Garganta wrote: Sun Nov 23, 2025 3:21 pm**
> > > AV was never intended to be fast paced.
> > >  Those ppl can do the fast paced XF shait for honor per hour.
> > >  Let us slowpokes have some piece of enjoyable pvp left.
> >
> >   AV is not PVP, its more a PVE raid than anything
>
>   Ironically it is the opposite. AV is more of a PvP experience than any other battleground.
>
>  Back in the day, when AV was first released, it was the better PvP experience out of all the battlegrounds, because the addition of powerful NPC's to chew through on a linear path meant that the "middle" of the map could shift between graveyards. It was a true push and pull between large competing groups of players, and everybody could contribute somehow.
>
>  Compare that to WSG, which rewards players for *avoiding the opposite team and running away from them with their flag*, and AB, which rewards players for *splitting up and sitting on a flag point, away from the action*.
>
>  Alterac Valley was more reminiscent of Southshore before battlegrounds were released than WSG and AB ever were. Blizzard struck **gold** with AV. Then the combination of nerfed NPC numbers, health, and damage, and the insane gear power scaling of later WoW, completely ruined AV's balance.
>
>  AV only works as intended if it is balanced so that rushing is not possible, at which point it is the best PvP that WoW has to offer.

Best PVP WoW has to offer, and will ever be, is Arathi Basin

## Post 160651 by Xudo (Grandmaster of Forum PvP) — 2025-11-25T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160651#p160651 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Tue Nov 25, 2025 1:44 pm**
> You can win AV without killing a single player

Same true for wsg and ab. Only arena requires you to kill.

## Post 160656 by Terrydavis (Patch Note Conspiracy Theorist) — 2025-11-25T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160656#p160656 | page 1 | era: 1.18.1-announced-pre-release -->

> **Cherrylips wrote: Sun Nov 23, 2025 2:15 pm**
> there shouldn't be any rewarding behaviour for turtle games

op is a noob cheater who loves turtle games, ignore him
he pretends like he speaks for the people but he doesnt, he loves to hug npcs, safespot and farm free kills. he considers this amazing fun. on top of that he plays like 1 AV a month. he is ridiculous

in short: this guy is totally delusional - no one wants cancer shit turtle games. especially on twow where this is super easy to grief AV

people want honor
people want rep
people want to win on alliance side

op is one of the clowns who mass reported """bugs""" in AV and ruined the map forever. however he isnt aware of this he actually thinks he improved things.

> **Kerenis wrote: Tue Nov 25, 2025 1:46 pm**
> Best PVP WoW has to offer, and will ever be, is Arathi Basin

wsg and ab are total trash they are 90% gear checks

ab is basically decided within the first 2 minutes, the side who wins the first battle at BS usually also wins the game, its the most boring bg of all

## Post 160666 by Escaton1 (Barrens Chat Casualty) — 2025-11-25T14:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160666#p160666 | page 1 | era: 1.18.1-announced-pre-release -->

> **Terrydavis wrote: Tue Nov 25, 2025 2:07 pm**
> > **Cherrylips wrote: Sun Nov 23, 2025 2:15 pm**
> > there shouldn't be any rewarding behaviour for turtle games
>
>   op is a noob cheater who loves turtle games, ignore him
>  he pretends like he speaks for the people but he doesnt, he loves to hug npcs, safespot and farm free kills. he considers this amazing fun. on top of that he plays like 1 AV a month. he is ridiculous
>
>  in short: this guy is totally delusional - no one wants cancer shit turtle games. especially on twow where this is super easy to grief AV
>
>  people want honor
>  people want rep
>  people want to win on alliance side
>
>
>  op is one of the clowns who mass reported """bugs""" in AV and ruined the map forever. however he isnt aware of this he actually thinks he improved things.
>
> > **Kerenis wrote: Tue Nov 25, 2025 1:46 pm**
> > Best PVP WoW has to offer, and will ever be, is Arathi Basin
>
>   wsg and ab are total trash they are 90% gear checks
>
>  ab is basically decided within the first 2 minutes, the side who wins the first battle at BS usually also wins the game, its the most boring bg of all

We got enough forum schizos currently, go away and try in a couple months.
Or never, that's fine too   smiling_turtle

## Post 160670 by Blackduck4 (Barrens Chat Casualty) — 2025-11-25T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160670#p160670 | page 1 | era: 1.18.1-announced-pre-release -->

Turtling is more fun than quick games, I love fighting on the bridge.

## Post 160697 by Zvyrhol (Grandmaster of Forum PvP) — 2025-11-25T20:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160697#p160697 | page 1 | era: 1.18.1-announced-pre-release -->

> **Kerenis wrote: Sun Nov 23, 2025 2:29 pm**
> > **Zvyrhol wrote: Sun Nov 23, 2025 12:52 pm**
> > > **Cherrylips wrote: Sun Nov 23, 2025 12:28 pm**
> > > What are u talking a about within 13 mins all the objectives are done (can even cap last towers within 15 mins) and we been running it for weeks ally side, only horde people refuse to do objectives. if they would it would be a 50/50 chance either side wins, but they prefer to win so they rush.
> > >  Kind regards someone who grinded 700k honor a week and 800k this week and knows whats up.
> >
> >  Yes, this fix is irrelevant in shorter games. It is focused on longer "turtle" games.
>
>   You're just promoting a way to make AV games longer than they should be, just to increase honor gains
>
>  This affects negatively to people farming AV for reputation

AV reputation is much easier to farm than any other BG related reputation.
Also, you don't only get rep for killing last boss. I've checked AV code that Turtle WoW runs and you might be surprised that repeatable quests award rep to everyone in the raid. Also, enemy NPCs are source of infinite rep, your raid gets 1 point per kill.

> **Kerenis wrote: Sun Nov 23, 2025 10:37 pm**
> > **Garganta wrote: Sun Nov 23, 2025 3:21 pm**
> > AV was never intended to be fast paced.
> >  Those ppl can do the fast paced XF shait for honor per hour.
> >  Let us slowpokes have some piece of enjoyable pvp left.
>
>   AV is not PVP, its more a PVE raid than anything

AV was designed for large battles, AV is like instanced Southshore vs Tarren Mill world PvP with addition of NPCs.
The fact that people have learnt to remove any PvP interaction from this battleground is the result of honor/rep farm optimization. Virtual numbers have become more important than pure fun.

It's a common mistake among WoW community to think AV is PvE focused. I think the reason is that people started to play AV like that during late Vanilla after some nerfs to this BG and old original way of playing was widely forgotten.
People mainly remember AV from late Vanilla or Classic WoW where people min-maxed it to the limit.
Meanwhile this is how it was played in early Vanilla (and sometimes games like these happen on Turtle WoW):

[embed: https://www.youtube.com/embed/-7RBF8cYZRs]

[embed: https://www.youtube.com/embed/2K_RpQmuqxs]

[embed: https://www.youtube.com/embed/0uuGQMYA-hI]

[embed: https://www.youtube.com/embed/i5AexfXZwBU]

