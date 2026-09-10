---
title: "Let hunters queue as tanks"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5623"
topic_id: 5623
forum_id: 14
forum: "Suggestions"
author: "Houseperenolde"
author_authority: "player"
posted: "2023-02-15T21:15:00Z"
last_post: "2024-12-16T21:55:00Z"
post_count: 29
pages: 1
fetched: "2026-09-10T11:41:44Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Let hunters queue as tanks

## Post 34860 by Houseperenolde — 2023-02-15T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34860#p34860 | page 1 | era: pre-1.18.1 -->

Wait! Hear me out.

I've been leveling my hunter (Bonesworth) as a tank (specifically as a pet tank). I've tried to hit each dungeon at its mid-recommended level. Thus far its been great. Until SM-Arm I didn't really even need a healer in the group and even now I only need an off-healer. Now, I had to spec and gear very carefully to do this but its been a fun experience. Partly this was to try something weird on my alt, partly it was due to this server's tank deficit.

My issue is getting groups using LFT. Since I can only queue as dps everyone is stuck waiting for a tank when technically there is already one around. So why not allow hunters to queue as tanks? If a hunter isn't a tank they won't queue as one but for those who know how to do it this would add a few more tanks to the server for, what I assume, is very little code change.

## Post 34864 by Gantulga (Grandmaster of Forum PvP) — 2023-02-15T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34864#p34864 | page 1 | era: pre-1.18.1 -->

Rogues too.

## Post 34867 by Lexiebean (Barrens Chat Casualty) — 2023-02-15T22:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34867#p34867 | page 1 | era: pre-1.18.1 -->

Post about it here: <https://github.com/CosminPOP/LFT/issues/new>

Or you could edit LFT.lua yourself.

Line 2325:
change Code: Select all

```
if LFT.class == 'warrior' then
```

to Code: Select all

```
if LFT.class == 'warrior' or LFT.class == 'hunter' then
```

Line 2416:
remove Code: Select all

```
or LFT.class == 'hunter'
```

Line 3720:
remove Code: Select all

```
or LFT.class == 'hunter'
```

## Post 34868 by Houseperenolde — 2023-02-15T22:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34868#p34868 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Wed Feb 15, 2023 9:46 pm**
> Rogues too.

Not opposed in practice, just never seen it done.

## Post 34882 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-16T05:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34882#p34882 | page 1 | era: pre-1.18.1 -->

Honestly, let anyone queue as Tank or DPS. The only role that ought to be restricted is limiting Healer to people who actually have healing abilities.

## Post 34884 by Kairion (Bug Report Enthusiast) — 2023-02-16T06:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34884#p34884 | page 1 | era: pre-1.18.1 -->

Well its more "inclusive" than having to wisper stacks of dps looking for a dungeons if they want to try it with a [insert class] as tank

I think there is also an expectation players have how adequate they are as tanks if they can que as tank.

Lft groups you pretty much first come first serve.
There are dungeons that are a nightmare with one of the "lesser" tanks and a group with lack of hard cc or means to deal with aoe groups

Sm graveyard without cc dps slapped my shaman tank so silly i rerolled pala. I can very much see the same happening to aspiring rogue tanks.

There is conflict potential when a mm hunter, spriest or warlock ques as tank and gets shuffled in a group that just wants a quick & chill dungeonrun

Not sure whats the right approach, but straight up allowing everyone to que as tank is imho not it

## Post 34898 by Xerilin (Bug Report Enthusiast) — 2023-02-16T09:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34898#p34898 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Thu Feb 16, 2023 5:49 am**
> Honestly, let anyone queue as Tank or DPS. The only role that ought to be restricted is limiting Healer to people who actually have healing abilities.

Agreed!

## Post 34899 by Xerilin (Bug Report Enthusiast) — 2023-02-16T09:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34899#p34899 | page 1 | era: pre-1.18.1 -->

There was a hunter tank on my Classic server. He was actually a really good tank for leveling and end game dungeons and even raids sometimes. He didn't use his pet, but tanked himself. It was a lot of fun ([https://eu.forums.blizzard.com/de/wow/t ... ter/161881](https://eu.forums.blizzard.com/de/wow/t/der-tank-hunter/161881)).

## Post 34902 by Voku — 2023-02-16T10:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34902#p34902 | page 1 | era: pre-1.18.1 -->

I don't like it. Even simply down to the fact that my interface has a very small healthbar for pethealth.
Also it's obvious a lot of players will end up queuing for low level dungeons as tank, because "you don't need a real tank anyways and it's easy" when the difference is instant invite as opposed to waiting 30 minute.

You can always find a group using worldchannel and i bet a lot of players would get a kick out of playing with unconventinal tanks. Or add a tab for custom groups in LFT.

## Post 34903 by Kefke (Patch Note Conspiracy Theorist) — 2023-02-16T10:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34903#p34903 | page 1 | era: pre-1.18.1 -->

Custom group tab is good. Or maybe let players already in a group request a role change if the rest of the group agrees to it? At that point, you don't need to worry about whether it makes sense or not. If a group agrees to let a Priest tank, it's their decision. If they decide to let a Rogue be "healer" for the party, it's their decision.

## Post 34905 by Voku — 2023-02-16T11:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34905#p34905 | page 1 | era: pre-1.18.1 -->

> **Kefke wrote: Thu Feb 16, 2023 10:48 am**
> If a group agrees to let a Priest tank, it's their decision. If they decide to let a Rogue be "healer" for the party, it's their decision.

Just because 3 DPS think it's fine that their Warlock can tank doesn't mean that the healer and other dps that get queued into it will like it. And I as the healer would be the one that has to dodge that group and can't even queue up again for that dungeon, because I'll have to wait for them to be full.

## Post 34906 by Xerilin (Bug Report Enthusiast) — 2023-02-16T11:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34906#p34906 | page 1 | era: pre-1.18.1 -->

Or just get rid of LFT and let everybody make their own groups the way they want. There, I said it!

## Post 34907 by Voku — 2023-02-16T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34907#p34907 | page 1 | era: pre-1.18.1 -->

> **Xerilin wrote: Thu Feb 16, 2023 11:12 am**
> Or just get rid of LFT and let everybody make their own groups the way they want. There, I said it!

LFT is an addon. You don't have to use it to form your group and there are plenty of groups that get together without it.

## Post 34908 by Xerilin (Bug Report Enthusiast) — 2023-02-16T11:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34908#p34908 | page 1 | era: pre-1.18.1 -->

> **Voku wrote: Thu Feb 16, 2023 11:17 am**
> > **Xerilin wrote: Thu Feb 16, 2023 11:12 am**
> > Or just get rid of LFT and let everybody make their own groups the way they want. There, I said it!
>
>  LFT is an addon. You don't have to use it to form your group and there are plenty of groups that get together without it.

I know and I don't always use it. However, the fact that it exists makes finding groups another way harder and leads to weird situations with people forgetting they joined an hour ago and then just leaving, once a group forms. But let's not get sucked too far into that discussion. Everything about it has been said elsewhere and is not the topic here. Sorry for sidetracking. My bad.

## Post 34957 by Ugoboom (Bug Report Enthusiast) — 2023-02-16T23:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34957#p34957 | page 1 | era: pre-1.18.1 -->

> **Xerilin wrote: Thu Feb 16, 2023 9:17 am**
> There was a hunter tank on my Classic server. He was actually a really good tank for leveling and end game dungeons and even raids sometimes. He didn't use his pet, but tanked himself. It was a lot of fun ([https://eu.forums.blizzard.com/de/wow/t ... ter/161881](https://eu.forums.blizzard.com/de/wow/t/der-tank-hunter/161881)).

OK so here's the main problem

Turtle has inhereted 2019 vmangos' insane overtuning of mobs. from 1.5x to 2x damage in certain places.

What worked for tanking on classic, only worked because the damage was so low, does not work here, and you end up unhealable. Same thing was seen on tbc classic where they started ramping up damage, adding tank busters, and heroics ontop of that. Meme tanks are super giga dead in tbc, much to my dissapointment as I was going in expecting I personally could boomie tank. My dreams were shattered.

> **Kefke wrote: Thu Feb 16, 2023 5:49 am**
> Honestly, let anyone queue as Tank or DPS. The only role that ought to be restricted is limiting Healer to people who actually have healing abilities.

Mages cannot tank without 3+ mages in the group all rotating novas and keeping imp blizzard up. This is called spellcleave, and I'm not sure a single spellcleave group has formed on this server ever. Niche groups like these are an obscure edge case and in LFT should not be supported.

Priests? The only time someone really tried going spriest tank is as an undead using touch of weakness as it provided a loooot of threat on each hit. The ability doesn't provide threat here, and even on classic the class was too squishy to actually tank BRD even on a lv 60. Here? they get oneshot. Priests should never be able to queue LFT as tank.

Warlocks will get oneshot if they try to tank. The voidwalker is at best an OT, able to somewhat hold threat on a mob that is not being actively killed. It cannot be used as a MT. Hunter pets are the same way, but at least a survival hunter themselves has a better shot at tanking. It will only really work like a mage tank, and the requirement of another class/spec that can slow the mob is mandatory. Warlocks and hutners should never be allowed to queue as tank.

Rogues are a maybe on if they should be allowed to queue, but this is probably the most involved to pull off. Only those that reach 101.8% avoidance will be safe from any and all phys hits on mobs up to 3 levels higher than them, and getting enough agi and dodge from gear makes this mostly a geared lv 60 raider meme. Keep in mind that any mobs that spam spells will be doing hard to heal damage to the rogue's tiny HP pool.

Shamans are the only ones that I think should be added. But yeah shaman tanks suck. They are strictly worse than paladin on armor as they are down an armor class and dont have bear form like druid does to make up for it. Itemization also hurts them and the few shaman tank items that exist are mostly now at 50-60. If shamans are added to the tank queue, people are gonna have bad times and I definitely see a newborn hatred for noobs who see tank pop up on their shaman's LFT, try it, and then giga clapped because they didnt minmax like the few shaman tanks who actually try the meme, actually do.

> **Xerilin wrote: Thu Feb 16, 2023 11:12 am**
> Or just get rid of LFT and let everybody make their own groups the way they want. There, I said it!

Cringe, LFT is a blessing. The cool thing is that you can still recruit in world chat like you used to, just have them queue LFT or invite to queue together, if someone whispers. LFT is strictly an upgrade over the old ways.

## Post 34967 by Shamma (Bug Report Enthusiast) — 2023-02-17T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34967#p34967 | page 1 | era: pre-1.18.1 -->

Y, no! Hunter pet tanking works (sort of) for organized grps with CC, offtank and ppl agreeing to play it that way. It will be a major flop in LFT. For LFT u need streamlined as much as possible. U got taunt - u can queue as tank, u dont have taunt - u cannot. That is simple and streamlined enough for the cancer LFT is.

Play and enjoy your hunter tanking with his pet. I know it can be done. U know it can be done. LFT will make u believe even a warrior cannot be tank at times.

## Post 34979 by Karrados (Patch Note Conspiracy Theorist) — 2023-02-17T03:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34979#p34979 | page 1 | era: pre-1.18.1 -->

As long as I have the option as a Healer to opt out of those "Secondary" Tanks I am all for adding in the option to Hunters and Rogues.

Because more often than not "Hey, I can tank" from anyone that is not a Tank means that the Healer just has to work more.

Edit: A big thank you to Ugoboom. You are probably the first person that is actually saying what is happening with the Damage numbers of mobs. Anytime I brought it up ingame I was called crazy and that "I am misremembering"

It's not like there exists a version of Vanilla where you can easily check yourself.

## Post 34981 by Zhilo — 2023-02-17T03:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34981#p34981 | page 1 | era: pre-1.18.1 -->

> **Ugoboom wrote: Thu Feb 16, 2023 11:49 pm**
> Shamans are the only ones that I think should be added. But yeah shaman tanks suck. They are strictly worse than paladin on armor as they are down an armor class and dont have bear form like druid does to make up for it. Itemization also hurts them and the few shaman tank items that exist are mostly now at 50-60. If shamans are added to the tank queue, people are gonna have bad times and I definitely see a newborn hatred for noobs who see tank pop up on their shaman's LFT, try it, and then giga clapped because they didnt minmax like the few shaman tanks who actually try the meme, actually do.

Just wanted to point out that shamans are already able to queue as tanks for LFT. I have been tanking dungeons on my shaman since wailing caverns up to Zul farrak at the moment, and squishyness hasn't been an issue yet (I compared health and armor with decently geared warriors and paladins my level whenever i could because i was also worried about my durability as a tank, turns out 30% extra armor from shields is huge, i usually matched them or was only a couple hundreds behind.) But I agree a shaman tank is more of a "secondary" kinda tank, lack of a taunt is horrible, and I felt forced to pick engineering to have additional aoe treat from bombs. Better itemnization and tools would probably seal the deal in making shamans perfectly competitive for 5mans. I have never tanked a raid, here or in retail. I can offer no opinion on that.

## Post 34982 by Syrathegreat (Patch Note Conspiracy Theorist) — 2023-02-17T03:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34982#p34982 | page 1 | era: pre-1.18.1 -->

The issue is with a tool like LFT you're trying to put together a group that has the best chance of clearing the content regardless of skill level - that's why there's level requirements in the first place. The tools that you get as a warrior, druid, or pally mean that even a low skilled player has somewhat of a chance of making it through, even if they're basically hitting random buttons - like with a warrior if they're at least in defensive stance the game is forcing them to gain threat no matter what they're doing. With things like rogues and hunters it can technically work but you need someone who knows what they are doing and that's not something you can anywhere near rely on in something like LFT.

Bottom line is it's just not fair on the other four people who have been assigned to this group to risk being put into a group with someone who doesn't know what they're doing on a class that just doesn't work intuitively as a tank.

## Post 34989 by Karrados (Patch Note Conspiracy Theorist) — 2023-02-17T04:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34989#p34989 | page 1 | era: pre-1.18.1 -->

The Problem with Shaman Tanks is simply that they don't have a defensive button. Paladins can use Holy Shield among other things to negate some damage, Warriors have Shield Block, Bears have a high HP Pool along with a lot of Armor and some helpful spells/abilities.

Shamans might have close-ish armor to those three others but at the end of the day you simply do not have a defensive button that you can pop quite frequently.  You do not have the HP pool of a Bear either which simply means you must overgear the content you are running or your Healer has to work harder to keep you alive.

## Post 34991 by Xudo (Grandmaster of Forum PvP) — 2023-02-17T05:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34991#p34991 | page 1 | era: pre-1.18.1 -->

> **Karrados wrote: Fri Feb 17, 2023 3:17 am**
> Edit: A big thank you to Ugoboom. You are probably the first person that is actually saying what is happening with the Damage numbers of mobs. Anytime I brought it up ingame I was called crazy and that "I am misremembering"

I add to the fact that damage numbers are too high for low level dungeons. Like they were designed like for minmaxers who play 100% efficiently with good gear, consumables and know how to use their class.

## Post 34995 by Kairion (Bug Report Enthusiast) — 2023-02-17T06:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34995#p34995 | page 1 | era: pre-1.18.1 -->

The reason why shaman is in the lft tool is because a sizeableportion of the shaman playerbase wants to tank and the class is at least bearable as a tank in most groups.

If you have rockbiter up, use earthshock and have a shield you can wing it in most dungeons with a shaman tank no problem.

The other suggested classes are much more niche than shaman to begin with. And the skillrequirement the dps and heal need to display goes up the more questionable the tank class choice is.

LFT is primary a tool for the more casual or less social players to begin with. So confronting them with situations where they need to coordinate and play significantly better just by what tank they rolled seems iffy.

I personally even as palatank usually just treat the lft tool as a list of people to /w for a dungeon anyway, so i can pick and choose the classes i want. And i suggest you do the same if you are a hunter or rogue or whatever tank too. Since you probably want to pack some cc or some secondary tanks up.

## Post 108110 by Xudo (Grandmaster of Forum PvP) — 2024-11-16T10:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108110#p108110 | page 1 | era: pre-1.18.1 -->

> **Lexiebean wrote: Wed Feb 15, 2023 10:02 pm**
> Post about it here: <https://github.com/CosminPOP/LFT/issues/new>
>
>  Or you could edit LFT.lua yourself.
>
>  Line 2325:
>  change Code: Select all
>
> ```
> if LFT.class == 'warrior' then
> ```
>
>  to Code: Select all
>
> ```
> if LFT.class == 'warrior' or LFT.class == 'hunter' then
> ```
>
>   Line 2416:
>  remove Code: Select all
>
> ```
> or LFT.class == 'hunter'
> ```
>
>   Line 3720:
>  remove Code: Select all
>
> ```
> or LFT.class == 'hunter'
> ```

Where this file is located?
I did full search for "LFT" in game directory. I found file which look like statistic in WFT/account/character directory and some file from pf-ui. It doesn't seem related to problem.

## Post 108241 by Makipa — 2024-11-17T04:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108241#p108241 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Sat Nov 16, 2024 10:22 am**
> > **Lexiebean wrote: Wed Feb 15, 2023 10:02 pm**
> > Post about it here: <https://github.com/CosminPOP/LFT/issues/new>
> >
> >  Or you could edit LFT.lua yourself.
> >
> >  Line 2325:
> >  change Code: Select all
> >
> > ```
> > if LFT.class == 'warrior' then
> > ```
> >
> >  to Code: Select all
> >
> > ```
> > if LFT.class == 'warrior' or LFT.class == 'hunter' then
> > ```
> >
> >   Line 2416:
> >  remove Code: Select all
> >
> > ```
> > or LFT.class == 'hunter'
> > ```
> >
> >   Line 3720:
> >  remove Code: Select all
> >
> > ```
> > or LFT.class == 'hunter'
> > ```
>
>  Where this file is located?
>  I did full search for "LFT" in game directory. I found file which look like statistic in WFT/account/character directory and some file from pf-ui. It doesn't seem related to problem.

You're a year late lol. Now you need mpqeditor to find it

## Post 108287 by Ulukay (Patch Note Conspiracy Theorist) — 2024-11-17T12:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108287#p108287 | page 1 | era: pre-1.18.1 -->

At the very least, the warlock can be a tank, with his new fire threat abilities. And his survival rate is not zero.
A hunter cannot be a tank because he cannot create enough threat, neither himself nor a pet (the pet's growl does not create enough threat and it is difficult to control it, Distracting Shot is almost useless because it cannot be used in close combat).
A rogue can create a threat depending on chance, which is not very good, and then only at level 60 (so stupid).
The priest tank, although it has one threat-making ability, does not present itself as a tank to me.
Tank Magician -  dead_turtle_head

## Post 108295 by Atreidon (Grandmaster of Forum PvP) — 2024-11-17T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108295#p108295 | page 1 | era: pre-1.18.1 -->

Plenty of people have proven over the years that you can beat this game with pretty much any group composition.

That doesnt mean people want to be roped into these experiments in a pick up group with randoms.

If you wanna play warlock/hunter tank, just find some friends that are okey with it and do dungeon runs that way.

LFT is the junkfood of groupfinders and you cant have it work if every hunter/wl whatever that doesnt know what they do just ques as tank because their pet can tank one mob for 15 seconds...

## Post 108296 by Akos1896 (Grandmaster of Forum PvP) — 2024-11-17T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108296#p108296 | page 1 | era: pre-1.18.1 -->

Not sure who's responsible for LFT but if it can be modified, all we need is a well-placed option saying 'enable alternative tanks' which can be ticked if you want to.
People not wanting a warlock to yolo angry dwarves at Hateforge will not tick it.
People desperate for a tank would sometimes do.

## Post 112950 by Mundane (Barrens Chat Casualty) — 2024-12-16T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112950#p112950 | page 1 | era: pre-1.18.1 -->

Just force warriors que as tank only. Fixed it.

## Post 112969 by Jan125 (Barrens Chat Casualty) — 2024-12-16T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112969#p112969 | page 1 | era: pre-1.18.1 -->

LFTs current version runs on the client for UI, and on the server for building groups.
You can no longer modify your LFT as a hunter to be able to queue as a tank, because there is now a server side check as well.

