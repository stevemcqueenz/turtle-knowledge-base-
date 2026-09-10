---
title: "Dynamic Raid Scaling"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=674"
topic_id: 674
forum_id: 2
forum: "Announcements"
author: "Pompa"
author_authority: "player"
posted: "2019-07-14T23:30:00Z"
last_post: "2023-09-06T07:47:00Z"
post_count: 45
pages: 2
fetched: "2026-09-10T07:42:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Dynamic Raid Scaling

## Post 3433 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-14T23:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3433#p3433 | page 1 | era: pre-1.18.1 -->

Greetings my turtles! We have been developing a system that will scale raids dynamically depending on the number of players that are doing it. Today, we finished the development and after testing it seems to work perfectly fine.

We have been thinking about this because we need to be aware that even if we have the best community, we are not *that* big, and letting our level 60 players do PvE content without needing to set up the raid meeting MONTHS before the actual date is the best we can do to make everyone happy.

But, as you already know, we are very transparent, so before applying any change to the current state of the server, we want to ask you what do you think.

This is how the scaling system is developed at this moment:

· 20 man raids will scale from 12 to 20 players. (So, the raid will scale from 12, 13, 14... to 20 players, that is, same as if it wasn't scaled).
· 40 man raids will scale from 20 to 40 players. (20, 21, 22... 40).
· **Boss mechanics will still be the same, no changes**.
· Spell damage will still be the same.
· Scaled HP = baseHp * (currentPlayers / maxPlayers).
· Scaled damage = baseDmg * ((currentPlayers / maxPlayers) + ((maxPlayers - currentPlayers) / 100)).
· Scaled mana = baseMana * ((currentPlayers / maxPlayers) + ((maxPlayers - currentPlayers) / 100)).

If people wants it, it could even be made fully optional (maybe a party wanna do a 40 man with less people, just for the challenge). For example, not scaling it if the raid leader has a specific item.

I have been already talking with lots of the current level 60 players, and everyone seems to agree with this change. However, we wanna hear more opinions. Please, when you comment, if possible, **tell us your level and since when have you been playing here!**

## Post 3435 by Reachkid — 2019-07-15T00:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3435#p3435 | page 1 | era: pre-1.18.1 -->

I like it.  If possible, add an NPC at the beginning of the raid, that the raid leader could talk to, to set raid to dynamic scaling or not. (Similar to beginning of ICC, where you could turn off the buff for more challenge)

Also, if possible, consider decreasing loot drops for dynamic raids vs. full raid groups (Or increase drops for full raids =D).  Might incentivise leaders to bring full raids, but not cancel if they can't get it. (ie: the raid isn't a wash if one or two don't show up, and the leaders can decide if the reduced manpower can still beat a non-scaled raid.)

Just my 2 cents.

*Last edited by Reachkid on Mon Jul 15, 2019 12:18 am, edited 1 time in total.*

## Post 3436 by Tamamo-no-Bae (Barrens Chat Casualty) — 2019-07-15T00:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3436#p3436 | page 1 | era: pre-1.18.1 -->

I think this is necessary. We are a private server after all and our population isn't the highest.

In Vanilla Wow it was already super hard to get 40 people together, it's borderline impossible here.

Doing the raids with the correct amount of people should give bonus loot though.

I have a lv 12 Dryad Hunter and I've been on Turtle-wow since December last year.

## Post 3437 by Casanova — 2019-07-15T00:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3437#p3437 | page 1 | era: pre-1.18.1 -->

I like the idea and if you plan to have an option to toggle the scalinh mode off for the purist will be great.

Like people say it was hard even in rerail to get all the people for raiding since if you miss only 5 people you were going to have a hard time.  Classic is comming and we can expect to lose decent numbers in every bracket level. So i support the idea 100%

## Post 3438 by Edo — 2019-07-15T00:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3438#p3438 | page 1 | era: pre-1.18.1 -->

As someone who has been on this server from its start, i really appreciate the amount of work TurtleWow staff puts in to pleasantly surprise us players. This most recent surprise is especially welcomed, since as others have also mentioned, it is very difficult to assemble 40 raid ready players on a smaller server.

That being said, i do have some questions:

 - Will the number of mobs in a pack remain the same (For example, dog packs before Magmadar could be hard to tackle without enough aoe in a smaller raid)

 - Will the number of adds in a boss encounter be scaled down (Garr elementals, Majordomo guards, ...)

 - Some bosses use Shield-like spells that needs to be dps-ed down fast as a part of the encounter mechanic (Majordomo for instance). I assume the damage absorbed wont be changed, but it could be an issue in smaller raids

 -ZG and AQ20 will be especially tricky to scale down perfectly, with even less people to account for if certain mechanics remain the same (number of bats that Priestess Jeklik spawns)

Those are some potential issues i can think of at the moment. I can't wait to try out the new scaled raids, if and when you choose to roll them out, and i'm certain that players' feedback will help fix any problems that might arise.

## Post 3439 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-15T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3439#p3439 | page 1 | era: pre-1.18.1 -->

> **Edo wrote: Mon Jul 15, 2019 12:58 am**
> As someone who has been on this server from its start, i really appreciate the amount of work TurtleWow staff puts in to pleasantly surprise us players. This most recent surprise is especially welcomed, since as others have also mentioned, it is very difficult to assemble 40 raid ready players on a smaller server.
>
>  That being said, i do have some questions:
>
>  - Will the number of mobs in a pack remain the same (For example, dog packs before Magmadar could be hard to tackle without enough aoe in a smaller raid)
>
>  - Will the number of adds in a boss encounter be scaled down (Garr elementals, Majordomo guards, ...)
>
>  - Some bosses use Shield-like spells that needs to be dps-ed down fast as a part of the encounter mechanic (Majordomo for instance). I assume the damage absorbed wont be changed, but it could be an issue in smaller raids
>
>  -ZG and AQ20 will be especially tricky to scale down perfectly, with even less people to account for if certain mechanics remain the same (number of bats that Priestess Jeklik spawns)
>
>  Those are some potential issues i can think of at the moment. I can't wait to try out the new scaled raids, if and when you choose to roll them out, and i'm certain that players' feedback will help fix any problems that might arise.

Thanks for your feedback! The number of mobs will be the same, but with the values scaled down. Of course when we start getting more feedback we can adjust some more things.  turtle_tongue

Regarding Majordomo, don't worry, I believe the spell you mention is this one: <https://classic.wowhead.com/spell=20619/> So, it will be fine. If you talk about this one, <https://classic.wowhead.com/spell=20620/>, this is the spell he uses to make himself invincible, since he is not the creature you need to kill in his encounter.

## Post 3440 by Qixel (Barrens Chat Casualty) — 2019-07-15T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3440#p3440 | page 1 | era: pre-1.18.1 -->

I will always vote in favor of more options. Scaling seems interesting, and if it's enabled as an opt-in option, there's no reason not to have it other than the work required, which now seems to be a non-issue. <3

I would second the suggestion of perhaps increasing drops for larger raids to incentivize players to do them. Perhaps 1 item per 5 raid members (maybe a 20% chance at an extra item for each member past a division of 5?) would be a fair compromise? Of course, numbers could be tweaked as needed.

Engie
Level 60 Warrior
January '19

## Post 3441 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-15T01:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3441#p3441 | page 1 | era: pre-1.18.1 -->

> **Qixel wrote: Mon Jul 15, 2019 1:35 am**
> I will always vote in favor of more options. Scaling seems interesting, and if it's enabled as an opt-in option, there's no reason not to have it other than the work required, which now seems to be a non-issue. <3
>
>  I would second the suggestion of perhaps increasing drops for larger raids to incentivize players to do them. Perhaps 1 item per 5 raid members (maybe a 20% chance at an extra item for each member past a division of 5?) would be a fair compromise? Of course, numbers could be tweaked as needed.
>
>  Engie
>  Level 60 Warrior
>  January '19

Actually the number of dropped items is not that big, for example in MC bosses usually drop 3/4 items. Maybe we could give Turtle Tokens per boss killed with the max number of players. :)

The amount of gold dropped is adjusted too, forgot to mention that.

## Post 3442 by Cael — 2019-07-15T02:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3442#p3442 | page 1 | era: pre-1.18.1 -->

I 100% support this. I would like to see this! I've always wanted to experience vanilla end game content, and this will even let someone like me who RPs more than plays the game, a chance to join a group.

## Post 3443 by Qixel (Barrens Chat Casualty) — 2019-07-15T03:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3443#p3443 | page 1 | era: pre-1.18.1 -->

> **Pompa wrote: Mon Jul 15, 2019 1:39 am**
> Actually the number of dropped items is not that big, for example in MC bosses usually drop 3/4 items. Maybe we could give Turtle Tokens per boss killed with the max number of players. :)
>
>  The amount of gold dropped is adjusted too, forgot to mention that.

Oh, I know, just figured making drops based on the number of people in the raid would be a solid compromise. :3 Turtle Tokens is a fairly solid idea, too. :3

## Post 3446 by Bigpoop — 2019-07-15T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3446#p3446 | page 1 | era: pre-1.18.1 -->

Sounds good... I like it!

## Post 3448 by Lefaux — 2019-07-15T09:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3448#p3448 | page 1 | era: pre-1.18.1 -->

I'd need to jump into this to actually see how it works.

Some things from the top of my head that I could think of could be an issue with smaller raids.
 - Decursing on Chromaggus
 - Skeletons on Nefarian
 - Healers on Patchwerk (depending on whether Hateful Strike counts as spell or not)

I sense balance issues between melee and spell damage on bosses.
I guess you scale down the melee damage to account for less healers in a smaller raid.
If spell damage remains the same and a boss is spell heavy those fewer healers will run oom, making the encounter harder for a smaller raid.
Another thing that comes to mind is mind-controlling bosses. On a raid half the size the problem grows twice as big.

I really love the effort that's put into making raiding on our low-pop server more appealing and I don't want to shoot down the idea at all.
I just want to raise awareness about said topics.

## Post 3449 by Sinrek (Grandmaster of Forum PvP) — 2019-07-15T10:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3449#p3449 | page 1 | era: pre-1.18.1 -->

> **Lefaux wrote: Mon Jul 15, 2019 9:38 am**
> I really love the effort that's put into making raiding on our low-pop server more appealing and I don't want to shoot down the idea at all.
>  I just want to raise awareness about said topics.

Same here. If everything will be in check for scaling down of these raids then I'm all up for the idea! Sounds good.   smiling_turtle_head

## Post 3450 by Realnicolbolas — 2019-07-15T10:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3450#p3450 | page 1 | era: pre-1.18.1 -->

its an interesting concept but it seems abusable.
as in:
>do 12 man ZG
>get full 20 man ZG loot
it seems like a quick and easy way to get lots of loot

## Post 3451 by Badling — 2019-07-15T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3451#p3451 | page 1 | era: pre-1.18.1 -->

Smultron here, got a few hours as 60 now!   happy_turtle_head

Yes please make this a thing, sounds like it could be alot of fun! since we can usualy pull together 10-15 people right now!

making it optional sure why not, might be nice for anyone who only wants the "real" experience?

Thanks for all the hard work, best server ever!

## Post 3452 by Walters — 2019-07-15T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3452#p3452 | page 1 | era: pre-1.18.1 -->

Honestly. You should had started this server with this feature, the population could have been huge by now. But sadly, at this moment (only 1 month before classic) it is not worth the time.

## Post 3453 by Skullmiser (Barrens Chat Casualty) — 2019-07-15T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3453#p3453 | page 1 | era: pre-1.18.1 -->

I don't really like it... If you you only have 20, you do Zul'Gurub or AQ 20.  If you only have about ten, you do Upper Blackrock Spire. If you don't have a key, keep running Lower Blackrock.

If this is implemented, then there should be some population value on which we agree ahead of time that this would no longer be needed.

## Post 3463 by Bazou — 2019-07-17T00:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3463#p3463 | page 1 | era: pre-1.18.1 -->

It's a good idea and I like it! I came from another vanilla server called "Retro", and they went further, squeezing down to 5-persons-raid, but the farming didn't bring good for the community. the relationship among players in Retro became more and more chilly, and the desire for top-end gears
became more and more intense. So I suggest that the number of people can be reduced, but not reduced to 5.

Once again, I sincerely thank the developers' effort !You guys are the BEST!  happy_turtle_head

## Post 3466 by Lefaux — 2019-07-17T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3466#p3466 | page 1 | era: pre-1.18.1 -->

The more I think it through the less I like it.
I don't know about you, but raiding things like MC and Ony and (to a degree) BWL are more than trivial.
The challenge for me is to get 40 people working together.
And the reward is getting me AND the other 39 people sweet purples apart from my main motivation: having an amazing time with them.
So I can optimize my play time - by shortening the raidsize to 20 people, finding more dedicated people only focussed on one thing: Epic Items.
It takes the soul out of raiding for me and since I don't play progress (let's face it.... the bosses have been defeated 15 years ago) I'd rather keep the soul than optimizing loot drops.
Speaking of drops:
Gearing up a raid twice as fast shortens overall playing time.
Following that logic, why play at all?
Pompa could just put the items up on the shop for [iLvl] = [Turtle Token].

Raiding in Vanilla is not about skill.
It's about dedication... mainly a timesink.
But for me the timesink is about the joy of one of my fellow raiders completing their set or finally getting that killer trinket.

And finally I for myself can say that it's a different thing to down Hakkar with 20 people or having a high pitched noise in my ear for 15 minutes because 40 people went mental on Discord because Ragnaros bit the dust.

## Post 3467 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-17T11:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3467#p3467 | page 1 | era: pre-1.18.1 -->

> **Lefaux wrote: Wed Jul 17, 2019 11:38 am**
> The more I think it through the less I like it.
>  I don't know about you, but raiding things like MC and Ony and (to a degree) BWL are more than trivial.
>  The challenge for me is to get 40 people working together.
>  And the reward is getting me AND the other 39 people sweet purples apart from my main motivation: having an amazing time with them.
>  So I can optimize my play time - by shortening the raidsize to 20 people, finding more dedicated people only focussed on one thing: Epic Items.
>  It takes the soul out of raiding for me and since I don't play progress (let's face it.... the bosses have been defeated 15 years ago) I'd rather keep the soul than optimizing loot drops.
>  Speaking of drops:
>  Gearing up a raid twice as fast shortens overall playing time.
>  Following that logic, why play at all?
>  Pompa could just put the items up on the shop for [iLvl] = [Turtle Token].
>
>  Raiding in Vanilla is not about skill.
>  It's about dedication... mainly a timesink.
>  But for me the timesink is about the joy of one of my fellow raiders completing their set or finally getting that killer trinket.
>
>  And finally I for myself can say that it's a different thing to down Hakkar with 20 people or having a high pitched noise in my ear for 15 minutes because 40 people went mental on Discord because Ragnaros bit the dust.

First of all, thank for your feedback and your compromise to this server, Lefaux.

I understand you, but you must understand too that we don't have a Blizzlike population. Because of that, we can't have Blizzlike required players. You just recently reached level 60, but there are players that have been doing UBRS and 5 man instances for more than half a year, and many of them left, which is understandable. It's not fair to not let them progress.

However, remember two things: the mechanics (and spell damage / effects) are the same and the possibility of doing those raids with 20 and 40 people will still exist.

It hurts when a player leaves, specially if it's a level 60 one. I love our players and every decision I make is to let them have fun and a good time in our Turtle realm.

## Post 3473 by Lefaux — 2019-07-18T06:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3473#p3473 | page 1 | era: pre-1.18.1 -->

Don't get me wrong please.
I fully understand why you plan to roll the change out and your reasoning is sound.
It's a necessity.

Think of it like taxes.
I don't like paying 4000 EUR in taxes each month, yet I understand the necessity for taxes :)
Still doesn't make me like it   turtle_tongue_head

I will remain dedicated to this realm no matter if you roll the change out or not.
To me, being part of a community is much like being married... through good times and bad times ;-)

## Post 3474 by Kazgrim (Patch Note Conspiracy Theorist) — 2019-07-18T13:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3474#p3474 | page 1 | era: pre-1.18.1 -->

You pay 4000 EUR a month???? U must make some serious bank

On topic:

I like the idea, I just hope that the level of difficulty remains the same. Also, turtle tokens for players who arnt scaling sounds like a good reward.

## Post 3481 by Skullmiser (Barrens Chat Casualty) — 2019-07-20T04:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3481#p3481 | page 1 | era: pre-1.18.1 -->

I like small servers, because all the guilds tend to be more inclusive. Less choosy, more accepting.. but now if someone is not totally optimal, it may be better to not take them at all, since it'll just make things harder for everyone, scaling it up a bit.

I still don't like the idea.

## Post 3482 by Pompa (Patch Note Conspiracy Theorist) — 2019-07-20T12:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3482#p3482 | page 1 | era: pre-1.18.1 -->

> **Skullmiser wrote: Sat Jul 20, 2019 4:47 am**
> I like small servers, because all the guilds tend to be more inclusive. Less choosy, more accepting.. but now if someone is not totally optimal, it may be better to not take them at all, since it'll just make things harder for everyone, scaling it up a bit.
>
>  I still don't like the idea.

Thanks a lot for your feedback, and I'm sorry you don't like it. However, I don't think what you say will happen here.

Please, read the answer I wrote for Lefaux. Adaptation is key.

## Post 3484 by Sesostris — 2019-07-20T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3484#p3484 | page 1 | era: pre-1.18.1 -->

Athena here!
I love you guys for all your effort and hard work.
I love the change and believe that it will work fine as long as we collaborate to make it run smoothly.
Keep up the good work.

## Post 3487 by Torta (Turtle WoW Team) [STAFF] — 2019-07-21T08:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3487#p3487 | page 1 | era: pre-1.18.1 -->

Scaling is now live. Thank you for all your feedback, let's hope this change will do us only good.

## Post 3572 by Kainnee — 2019-07-26T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3572#p3572 | page 1 | era: pre-1.18.1 -->

> **Pompa wrote: Wed Jul 17, 2019 11:52 am**
> I understand you, but you must understand too that we don't have a Blizzlike population. Because of that, we can't have Blizzlike required players. You just recently reached level 60, but there are players that have been doing UBRS and 5 man instances for more than half a year, and many of them left, which is understandable. It's not fair to not let them progress.
>
>  However, remember two things: the mechanics (and spell damage / effects) are the same and the possibility of doing those raids with 20 and 40 people will still exist.
>
>  It hurts when a player leaves, specially if it's a level 60 one. I love our players and every decision I make is to let them have fun and a good time in our Turtle realm.

"Old" lvl 60 here, in fact first alliance lvl 60, and here are my two cents: Every decision that goes against the spirit of the game is a negative one for me. I love leveling in vanilla and I love raiding in vanilla. It's why I still do it after 14 years. Lvl 40 raids are precisely the reason I play vanilla after all. Sizing down raids was one of the (imo) worst decisions they did to the game and the reason why I can't even stand TBC or WotLk. I - as a longtime lvl 60 - would rather not have scaled down raids. I'd also rather not have crossfaction. I do know that I can't get everything I wish for and there are compromises to be made but I just want to say: Decisions like this can also be the reason why players leave.

About the implemented downscaling: As a raidleader and player who outperforms 99,9% of the people he plays with in a raid environment I can only recommend that you scale down the loot as well. Also, this should explicitly (like crossfaction) be a thing tied to the low population and small lvl 60 community. Once/If the server can live without this feature, it should be disabled asap.

regards,
Kainnee

## Post 3580 by Sinrek (Grandmaster of Forum PvP) — 2019-07-26T22:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3580#p3580 | page 1 | era: pre-1.18.1 -->

Where's the line when we don't need it?

## Post 3583 by Seelenschmied (Barrens Chat Casualty) — 2019-07-27T02:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3583#p3583 | page 1 | era: pre-1.18.1 -->

I think it is a superb thing for this relatively small server.

## Post 3584 by Walters — 2019-07-27T03:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3584#p3584 | page 1 | era: pre-1.18.1 -->

> **Kainnee wrote: Fri Jul 26, 2019 4:22 pm**
> As a raidleader and player who outperforms 99,9% of the people he plays with

Your highness! Where can we get in line for a chance to take a smell of your sacred farts??? Srsly, what a tool.

Also:
>> loves raiding
>> can't even stand TBC or WotLk (where people actually started rading) FACEPALM_TURTLE

He is either biggest troll out here or just another wannabe "veteran".

AS FOR THE TOPIC once again: for a small pop server its a GREAT idea, but sadly too late (weeks before classic)

## Post 3586 by Lefaux — 2019-07-27T08:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3586#p3586 | page 1 | era: pre-1.18.1 -->

I'm not 100% sure if "finishing early" is always a good trait.
Will ask my wife what she thinks about this

## Post 3587 by Kainnee — 2019-07-27T12:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3587#p3587 | page 1 | era: pre-1.18.1 -->

> **Walters wrote: Sat Jul 27, 2019 3:15 am**
> Your highness! Where can we get in line for a chance to take a smell of your sacred farts??? Srsly, what a tool.
>
>  Also:
>  >> loves raiding
>  >> can't even stand TBC or WotLk (where people actually started rading) FACEPALM_TURTLE
>
>  He is either biggest troll out here or just another wannabe "veteran".
>
>  AS FOR THE TOPIC once again: for a small pop server its a GREAT idea, but sadly too late (weeks before classic)

Scoff all you want. I don't care. If loot isn't downsized, not-so-good players may eventually face difficulties getting into raids, that's all I'm saying. Instead of taking everybody who's at least able to pull his own weight, people might start looking closer "at the meters" and rather raid with less than 40 than taking a scrub to fill a spot.

## Post 3588 by Lefaux — 2019-07-27T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3588#p3588 | page 1 | era: pre-1.18.1 -->

Can you help me out what you mean by "downsized"?
Do you mean
a) less loot-drops per boss
b) lower stats on the gear
c) both a) and b)
d) something else I didn't think of

## Post 3589 by Walters — 2019-07-27T17:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3589#p3589 | page 1 | era: pre-1.18.1 -->

> **Lefaux wrote: Sat Jul 27, 2019 4:09 pm**
> Can you help me out what you mean by "downsized"?
>  Do you mean
>  a) less loot-drops per boss
>  b) lower stats on the gear
>  c) both a) and b)
>  d) something else I didn't think of

He means a) - loot system that was implemented in Flexible raids, where boss drop depends on raid size. But he COMPLETELY CANT UNDERSTAND, that even "a scrub" will do at least some damage in Flex, when in 40- ( not full 40) raids you got slots dealing ZERO damage at all. Blizzard cut flex loot only to avoid people gearing too fast with minimum size raids, which IS NOT the main problem of this server (but the low pop is)

## Post 3688 by Ashiel — 2019-08-09T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3688#p3688 | page 1 | era: pre-1.18.1 -->

I think this is a great idea.

## Post 3756 by Lefaux — 2019-08-19T12:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3756#p3756 | page 2 | era: pre-1.18.1 -->

I have some feedback from testing MC for a few weeks now.
Please keep in mind that this is the first private server I played ever, so all memory stems back from retail vanilla (which is quite some time ago).
My feedback is based on raids with between 16 and 22 people, so keep that in mind.

Trash
Trash seems fine in terms of damage and health.
We found issues that are pull-related, meaning mobs that shouldn't be connected on pull **are** connected.
Workaround: split-pull using a capable hunter - yet it would be nice to be able to pull one Lava Annihilator without the two Molten Giants behind him.

One "meh" thing is how Lava Surgers are connected to the Flaming Imps on the way to Lucifron and Magmadar, since sometimes pulling a Surger pulls the Imps, sometimes it doesn't.

Lucifron
 - Mind controls tanks, never had that in retail (but that could just be a two years of RNG)
 - Adds cleave hits harder than I think it should. Currently tanking them with 7200 Armor makes the tank die too fast. Stoneshield Potions are mandatory here. Never had such issues in retail vanilla.
 - Curse of Doom landed a crit, one-shotting a player - I can't remember this being the case on retail.

Magmadar
 - Fine, well done.

Gehennas
Since he's a Flamewalker too, the Cleave of the Adds hits unreasonably hard.
Apart from that the fight seems fine.

Garr
Tanking more than two Adds at a time is impossible, they just wipe the floor with the tank.
I'm not 100% sure how to fix this, since spawning less Adds with Garr seems like a massive change to the scripting.
Our current issue is that we'd need 4 Warlocks and 3 fully geared mitigation tanks.
While the tanks wouldn't be the biggest issue, having 25% of the Raid need to be a Warlock kinda feels weird.
Maybe tuning the damage coefficients on the adds would work - tanking 3-4 of them as a single tank would still be a decent challenge whilst keeping the fun up.

Trash #2
Magma Packs Barrage spell seems to have a shorter casttime than I remember.
Also I can't remember them casting it immediately after being pulled.

Baron Geddon
Mana Burn seems to be an issue because it can't be dispelled fast enough and the damage being a big too high.
We will try to outrage it with some different positioning next time, but in general having no coefficient for spell damage is a problem.

Something's is odd about magic damage on this realm... I never had a topped up player die to being Geddon's bomb.
On Turtle, players are lucky to live through the detonation with 5-10% HP.
I don't recall having EVERY raidmember wear fire protection gear for the fight.

Conclusion
We currently cannot progress beyond Garr or Geddon and we will need more players to do so.

Sidenote: You don't have to be a pro-raider to jump in on our raid. It helps, sure, but it's not a necessity.
Be 60, get a bit of gear together, do your attunement and let's go :)

## Post 3772 by Pompa (Patch Note Conspiracy Theorist) — 2019-08-21T14:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3772#p3772 | page 2 | era: pre-1.18.1 -->

Thanks for your feedback Lefaux. I'll try to answer everything you mentioned.

Lucifron
 **- Mind controls tanks, never had that in retail (but that could just be a two years of RNG)**
I'll need some proof where it's clearly shown that tanks shouldn't be MCd.
 **- Adds cleave hits harder than I think it should. Currently tanking them with 7200 Armor makes the tank die too fast. Stoneshield Potions are mandatory here. Never had such issues in retail vanilla.**
The skill they are using seems correct, I have reduced their damage a little bit if the raid has less than 30 players, though.
 **- Curse of Doom landed a crit, one-shotting a player - I can't remember this being the case on retail.**
That appears to be blizzlike.

Gehennas
 **Since he's a Flamewalker too, the Cleave of the Adds hits unreasonably hard.**
The skill they are using seems correct, I have reduced their damage a little bit if the raid has less than 30 players, though.

Garr
 **Tanking more than two Adds at a time is impossible, they just wipe the floor with the tank.**
I have reduced the HP and damage of the adds if the raid has less than 30 players.

Trash #2
Magma Packs Barrage spell seems to have a shorter casttime than I remember.
Also I can't remember them casting it immediately after being pulled.
What's the name of the mobs you mention? Again, I'd need proof.

Baron Geddon
Mana Burn seems to be an issue because it can't be dispelled fast enough and the damage being a big too high.
We will try to outrage it with some different positioning next time, but in general having no coefficient for spell damage is a problem.
Unfortunately mobs don't have spell damage, they use the damage of the spell itself.

Something's is odd about magic damage on this realm... I never had a topped up player die to being Geddon's bomb.
On Turtle, players are lucky to live through the detonation with 5-10% HP.
I don't recall having EVERY raidmember wear fire protection gear for the fight.
Magic damage should be okay since we haven't modified anything related to that. Remember that our core is a fork of vMaNGOS, which is a fork of Light's Hope core, and a lot of developers are working to make it as Blizzlike as possible.

The Living Bomb damage of Baron Geddon should be around 3200 (<https://classic.wowhead.com/spell=20475>), so leaving a raid member with 5% - 30% makes sense.

 ---

 *NOTE: The changes I've made will take place in the next server update.*

## Post 3777 by Lefaux — 2019-08-23T05:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=3777#p3777 | page 2 | era: pre-1.18.1 -->

thanks a lot... we will test on Sunday.

## Post 56165 by Naite — 2023-08-07T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56165#p56165 | page 2 | era: pre-1.18.1 -->

Hello there, can someone confirm this after 4 years still working the same?

## Post 56181 by Geojak (Grandmaster of Forum PvP) — 2023-08-07T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56181#p56181 | page 2 | era: pre-1.18.1 -->

Yes, naxx scales to 35, rest to 20.
Its one of the best custom features on twow, next to crossfaction probably

## Post 56200 by Wilsonsds (Patch Note Conspiracy Theorist) — 2023-08-08T00:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56200#p56200 | page 2 | era: pre-1.18.1 -->

I have 2 60 toons, holy priest and prot warrior, and i raid with both.

I liked these ideas, the numners seen correct to me

I just wanted to know if UBRS will be scalling too?

Another thing, downscalling  ZG and AQ 20 too much will only make the 5 men more skippable. Whats your thohts on that?

I play on this server for... i dont know 2 years i guess, maybe 1 and 1/2

## Post 56203 by Foobs (Barrens Chat Casualty) — 2023-08-08T00:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56203#p56203 | page 2 | era: pre-1.18.1 -->

I'm for it!! That sounds like a great compromise!!

Watching in guild chat the GM practically beg people to come to raid with them when they only need 4 more is disheartening. I'd rather they be able to get the raid going on time and without having to depend on a few to show up or not.  Some people may love that "I need validity when doing raids" others just want to get their gear and not wait another week or month to do it and possibly get it.

## Post 56250 by Kairion (Bug Report Enthusiast) — 2023-08-08T06:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56250#p56250 | page 2 | era: pre-1.18.1 -->

> **Wilsonsds wrote: Tue Aug 08, 2023 12:06 am**
> I have 2 60 toons, holy priest and prot warrior, and i raid with both.
>
>  I liked these ideas, the numners seen correct to me
>
>  I just wanted to know if UBRS will be scalling too?
>
>  Another thing, downscalling  ZG and AQ 20 too much will only make the 5 men more skippable. Whats your thohts on that?
>
>
>  I play on this server for... i dont know 2 years i guess, maybe 1 and 1/2

 10man content like ubrs is not scaling. Its always at 10 man.
You can downscale aq and zg but its not "optimal" to do. With a 10 man raid size the mobs will be weaker but the boss mechanics remain unchanged and you are much more likely to miss crucial capabilities like manaburn etc if you downscale. You will also need 2 tanks and a decent share of healers regardlessof how much you downscale

Scaling raidsize makes it much more easy to still attempt a raid a few people below raidsize but its by no means an easy mode.

## Post 61121 by Krotux (Barrens Chat Casualty) — 2023-09-06T07:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61121#p61121 | page 2 | era: pre-1.18.1 -->

Are drops also scaled? Otherwise it would always be better to go with less players?

## Post 61122 by Kairion (Bug Report Enthusiast) — 2023-09-06T07:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61122#p61122 | page 2 | era: pre-1.18.1 -->

> **Krotux wrote: Wed Sep 06, 2023 7:44 am**
> Are drops also scaled? Otherwise it would always be better to go with less players?

Drop quentity is not scaling. If you want to maximize loot doing 10 man ZG for Idols and 20 man MC for binding runs is a thing you can do. But honestly, those were things you could do pre-raidscaling too, the change in difficaulty is not that much.

