---
title: "Shellcoin EXPOSED"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14805"
topic_id: 14805
forum_id: 4
forum: "General"
author: "Zvyrhol"
author_authority: "player"
posted: "2024-09-06T20:24:00Z"
last_post: "2026-02-11T21:08:00Z"
post_count: 26
pages: 1
fetched: "2026-09-10T09:37:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Shellcoin EXPOSED

## Post 100825 by Zvyrhol (Grandmaster of Forum PvP) — 2024-09-06T20:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100825#p100825 | page 1 | era: pre-1.18.1 -->

EDIT:
This exploit has been fixed. You can still read what it was about below.

From September 3 2025 patch notes:
> - Fixed the quest reward for “**Excessive Regulations**.”

Description is ambiguous but here is what has really changed. Both quests no longer reward Shellcoin. The reward was changed to false Shellcoin that is vendor item and is worth nothing.
So the Shellcoin system is saved and players can no longer supply more Shellcoins via other way than spending gold. The corrupted Shellcoins still exist in the system, however, amount will never increase so in long-term it shouldn't hurt the system.

 *************************************************************************

 **Shellcoin EXPOSED**

It's over. If you read this now and have some Shellcoins in the bank, ignore the rest of this post, log in to the game and sell them IMMEDIATELY - there is a chance they are still worth something.
Shellcoin has been a nice idea, a shame it's inevitably doomed by simple economic laws and math devs didn't think about. The worst thing is nothing would help Shellcoin recover at this point without Turtle devs manually intervening in mechanism of their acquiring but I will talk about it later.

Let me explain. We all were thinking that Shellcoin can be obtained only via spending gold to the NPC and its price is dynamically changing based on supply/demand balance. However, this has changed. Do you know a few months ago there was a story event about Shellcoin representatives added to the game? In the past they used to sell Shellcoins in Stormwind and Orgrimmar. This story progressed and according to the current lore of Turtle WoW, authorities of Stormwind and Orgrimmar banned Shellcoin business in these cities (as if they knew what would happen to the Shellcoin). This caused Shellcoin's team migrating to Booty Bay and now they sell the Shellcoin only there.
What if I told you this short quest chain has invisibly corrupted whole Shellcoin supply/demand system? The source of this corruption was final reward of the quest...

There are 2 quests in the game: one for Horde and one for Alliance. Both of them can be completed only once and both of them lead to the same reward: the Shellcoin itself. But what's the problem? Now watch this video.

[embed: https://www.youtube.com/embed/wUKXKqMqPtA]

As you can see after obtaining the Shellcoing from the quest its price on the market is still the same. It's a fact as proved in the video - watch my gold balance.

 **Shellcoin is mathematically unprofitable**

I'm not math expert though I would try apply game theory here. In theory base price of Shellcoin is always 0g - you buy the first Shellcoin on the server for free. I skip the fee part of buying/selling Shellcoin because it's relatively low, you pay always 20 copper. Then **number of Shellcoins generated** raises from 0 to 1 and every time you buy Shellcoin this way it increases by 1, it decreases by 1 when you sell it. Every next Shellcoin can be generated for (base price + **number of Shellcoins generated** * 0.002g).
For example: the server has generated 10 Shellcoins. The price of the next Shellcoin is 0g + 10 * 0.002g = 0.02g.
This system makes sense because if all Shellcoin owners sell all of their Shellcoins, the price will go back to 0g - it's zero-sum game. There is only 1 type of player in this game:  Shellcoin trader. The goal of the game is to earn gold by buying Shellcoin when it's low and selling it when it's high. These were all rules of the first Shellcoin system.

What you could see in video proof is that you get actual Shellcoin via the quest in the game but the variable called **number of Shellcoins generated** didn't increase because the price of Shellcoin remains the same.
Quest existence actually changes this system a lot. Now there are 2 types of players in this game: previously known Shellcoin trader and quest enjoyer - a person who got their Shellcoin via the quest. Important thing is that it's still zero-sum game. Overall gold spent on Shellcoins equals to gold gained by selling Shellcoins.
Now let's delve into quest enjoyer. It's the type of player that got 1 Shellcoin out of the system. Let's assume every quest enjoyer immediately sells their Shellcoin after they complete the quest chain. That means quest enjoyer type of player ALWAYS wins this game - they will always collect the gold from the system because Shellcoin always has positive price.

Because of that and because it's a zero-sum game and there are 2 types of players it's mathematically proved that Shellcoin trader - must lose in general. Quest enjoyer can sell their Shellcoin which has the following results: they get gold, the variable **number of Shellcoins generated** in the system decreases by 1. Note that this variable doesn't reflect actual number of Shellcoins in the game.

In other words and from another point of view our current Shellcoin system is flooded with A LOT of Shellcoins generated via the quest that are no gold-backed. If now suddenly all Shellcoin traders decide to sell their Shellcoins, it will become clear that some Shellcoins would cost nothing. The first who sell them will get gold before the price drops to 0g. I don't have data about current state of Shellcoin system but I try to estimate. I assume 10 characters (you can do this quest on alts) complete this quest chain a day. I haven't found when exactly this quest became available but I estimate it was added half a year ago. 180 * 10 = 1 800 Shellcoins generated by the quest. At the moment I'm writing this post the Shellcoin costs about 30g. That means there are 15 000 Shellcoins officially generated. So according to my estimations 10.71% of current Shellcoins are worth nothing. The quest became a ticking a bomb, the more time passes, the more and more the Shellcoin deteriorates.

How to fix Shellcoin?

The problem is it's impolite to change the rules in the middle of the game, especially the game that some people (or even guilds) invested tons of gold. BTW do you remember how people cried when Goblin Brainwashing Device was changed? But the Shellcoin will be doomed if nothing changes. There are a few directions devs can choose.
 1. Remove Shellcoin as a quest reward. The corruption of Shellcoin will stop though the current damage won't be healed. There will always be 1800 Shellcoins in the system that are worth nothing.
 2. Fix the quest so when you complete it, you get a Shellcoin but it counts to the system. So when you complete the quest, the Shellcoin's price will automatically increase. It has one major problem: if Shellcoin becomes very popular and for example costs 1000g, then one single quest will generate 1000g raw gold.
 3. End Shellcoin's life and add new currency that works the same way as first Shellcoin before it was moved to Booty Bay. Let the Shellcoin die, it's just a matter of time until it's consumed by corruption. When it drops to 0g introduce new currency - I propose the name "Moocoin". Ideally it should be based on first Shellcoin system. I'm great fan of this idea because it allows you to continue the legacy of the first Shellcoin. In spite of all Shellcoin isn't only a currency but it has some place in lore of Turtle WoW - there could be some interesting quests describing why Shellcoin was to fall or quest about K'ron Tusk's future. If you don't follow Turtle WoW's lore, K'ron Tusk is the founder of the Shellcoin.

Some people invest their gold in Shellcoin and quit the game. They permanently increase its price. Then why do you think Shellcoin's price will fall to the ground?

To answer this question, let's go back to the first Shellcoin system and game theory when there was only 1 type of player: Shellcoin trader. In that system if someone invested their gold in Shellcoin and then permanently quit Turtle WoW (let's call them "Dead player"), we could assume that that person lost this game - in general they sacrificed their gold so the Shellcoin could cost more. And because they were considered "Dead players" they couldn't sell their Shellcoins anymore. "Dead players" actually pumped the whole Shellcoin system, thanks to them the Shellcoin price constantly rose over months.
However, in current Shellcoin system the gold leaks from it and it's done by quest enjoyers. The real question is: can "Dead players" gold surpass quest enjoyers'' leak? I can't prove it because unfortunately, the page that allowed everyone to see Shellcoin's price is not working anymore. Though from my experience the price of Shellcoin has been declining since the system was changed. I think the Shellcoin costs less now than a day before exploitive quests were added. I would be grateful if someone presents data in the comments.

Some information about the quests

For Alliance: <https://database.turtlecraft.gg/?quest=39989> and for Horde: <https://database.turtlecraft.gg/?quest=39984>.
Both of these quests require level 30. I have talked with random rich guy in Orgrimmar who claims that he used to create lv 1 alts just to complete the quest back when it didn't have level requirement, then he sold the Shellcoins for 10g each. Both quests require you to pay some gold before you get a Shellcoin. I have done it as Horde character and I paid only 10g. You might think that if quest requires you to spend more gold than the Shellcoin is worth, people won't do it. But the truth is in general quest enjoyer won't care what the price of quest is. Some of them want to complete all quests in the game, others are annoyed when their quest addon shows them uncompleted quest on the map. And finally let's be honest, most of players are unconscious what the final reward could be, they just do the quest because of curiosity.

Why have you written a post about this instead of contacting Turtle WoW team directly?

I have a few reasons.
 1. I assume that facing the consequences of your mistake is the best way to learn not to make it ever again. Let the team listen to complaints of the community when Shellcoin significantly lose its value. Let them have a lesson to learn.
 2. I want to make Turtle WoW community more conscious about how current Shellcoin system really works and why average Shellcoin trader must lose. The belief that it will cost more in the future is just stupid. What a pity that many guilds still invest huge amounts of gold in a game that turns out to be gambling. I remind you: I've just mathematically proved that Shellcoin trader loses gold on average.
 3. I like watching someone choke on their pride. You probably heard that GMs and devs have openly advertised Shellcoin in every possible way. Even GM Saelas recently have said in World chat: "Shellcoin is the best choice". Haha. I want to see their faces now.
 4. As I said earlier, I don't like when someone is changing the rules in the middle of the game. Devs would probably do that and people wouldn't even notice.
 5. I like to see the world burn. Contacting devs wouldn't have the same effect as this post. Imagine what will happen within a few hours after I post this? Why does everyone want to sell all Shellcoins now?

At least I'm honest.

*Last edited by Zvyrhol on Wed Feb 11, 2026 9:11 pm, edited 1 time in total.*

## Post 100848 by Fornow (Barrens Chat Casualty) — 2024-09-07T04:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100848#p100848 | page 1 | era: pre-1.18.1 -->

Well yeah, it's a scam. That's the whole point. It's modeled on real-world crypto currencies in case that was lost on you.

## Post 100858 by Geojak (Grandmaster of Forum PvP) — 2024-09-07T11:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100858#p100858 | page 1 | era: pre-1.18.1 -->

Thank you for this post. I realised the same problem of the quest eventually mathematicslly will ruin the previous direct link between shell coin number in exiszance and it's value. That's when I sold all my coins half a year ago. Only the quest enjoyed can win and the dumb trader is financing it.

I give you some rough outline about shellcoin price history in the last 11 motnsh.

The shellcoin value rose all the way from 15g to 30g in a matter of two weeks around a year ago, then crashed down in half a day to 20g. This happened shortly before the new patch dropped that introduced hyjal.

For around 8 months the value was mostly unchanging in between 22-24g, new shellcoin quest were introduced sometime around new year I believe.

Sometine during the hack the shellcoin website went down. Next time I checked ingame around a month ago, the value was 33g to my suprise. It has been steadily falling since then. Whoever pushed the value up must be loosing tons of gold to quest enjoyers, proofing the point.

## Post 100904 by Sinrek (Grandmaster of Forum PvP) — 2024-09-08T15:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100904#p100904 | page 1 | era: pre-1.18.1 -->

That's not a problem.

It's a meme and it's working as intended.

## Post 100908 by Satirical (Barrens Chat Casualty) — 2024-09-08T16:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100908#p100908 | page 1 | era: pre-1.18.1 -->

Way to miss the joke about it being based off the crypto craze a few years ago. Of course its a money loss.

## Post 100909 by Xudo (Grandmaster of Forum PvP) — 2024-09-08T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100909#p100909 | page 1 | era: pre-1.18.1 -->

I believe one of the reasons why shellcoin exist is to remove gold from economy.
People buy it, expecting that later they will earn more money by selling it.
Effectively this removes gold from economy if people keep buying this currency.
If people stop buying it, then this function of shellcoin will not work.

If it won't remove gold from economy, then prices will inflate over time (faster than they already are). Devs should increase shellcoin price on quest turn-in. Otherwise, people won't buy this currency.

## Post 100918 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-09-08T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100918#p100918 | page 1 | era: pre-1.18.1 -->

FUD!!!! you mad bro because you didn't get in early?

## Post 100919 by Zulnam (Bug Report Enthusiast) — 2024-09-08T22:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100919#p100919 | page 1 | era: pre-1.18.1 -->

First lore-friendly rug pull?

## Post 100922 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-09-08T23:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100922#p100922 | page 1 | era: pre-1.18.1 -->

Price of shellcoin is supposed to go up when a shellcoin is given for a quest so this is a bug because the price is fixed based on circulation. When the price is fixed it will pump to the moon, better buy in now.

## Post 100944 by Geojak (Grandmaster of Forum PvP) — 2024-09-09T12:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100944#p100944 | page 1 | era: pre-1.18.1 -->

Did anyone make a bug report on the tracker? Or would it just be closed as "not a bug"...

## Post 100968 by Zvyrhol (Grandmaster of Forum PvP) — 2024-09-09T18:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100968#p100968 | page 1 | era: pre-1.18.1 -->

> **Eversongwoods wrote: Sun Sep 08, 2024 11:28 pm**
> Price of shellcoin is supposed to go up when a shellcoin is given for a quest so this is a bug because the price is fixed based on circulation. When the price is fixed it will pump to the moon, better buy in now.

Why do you assume it's going to be fixed this way? Do you think devs want the quest to generate Shellcoin that counts to the system (read it: generates raw gold equal to current Shellcoin price)? Personally, I don't think so.

## Post 100973 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-09-09T21:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100973#p100973 | page 1 | era: pre-1.18.1 -->

Torta is a shellcoin enthusiast so it will be dealt with in a profitable manner for holders.

## Post 100974 by Zvyrhol (Grandmaster of Forum PvP) — 2024-09-09T21:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100974#p100974 | page 1 | era: pre-1.18.1 -->

> **Eversongwoods wrote: Mon Sep 09, 2024 9:20 pm**
> Torta is a shellcoin enthusiast so it will be dealt with in a profitable manner for holders.

SheNNcoin xD

## Post 101254 by Amarion — 2024-09-14T09:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101254#p101254 | page 1 | era: pre-1.18.1 -->

Get your FUDing butt out of here. SHELLCOIN TO THE MOON!   insidious_turtle   insidious_turtle   insidious_turtle
You do realize the Shellcoin is a parody of crypto currencies? It's a literal shitpost in form of a game mechanic :D

## Post 109897 by Zvyrhol (Grandmaster of Forum PvP) — 2024-11-25T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109897#p109897 | page 1 | era: pre-1.18.1 -->

Shellcoin is ticking bomb.

## Post 109911 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-11-25T22:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109911#p109911 | page 1 | era: pre-1.18.1 -->

Shellcoin is a hedge against inflation so its never too late to buy in. 100G by 2026

## Post 109929 by Weskil — 2024-11-26T00:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109929#p109929 | page 1 | era: pre-1.18.1 -->

I've got a bag full of counterfeit shellcoin ready to dump on the market the moment it starts to take off.
I mean, uh, moo?

## Post 117532 by Tumicate — 2025-01-22T11:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117532#p117532 | page 1 | era: pre-1.18.1 -->

When are we going to have another hipe? Devs or community need to hipe it from time to time, otherwise it will just die.

## Post 117534 by Atreidon (Grandmaster of Forum PvP) — 2025-01-22T11:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117534#p117534 | page 1 | era: pre-1.18.1 -->

> **Tumicate wrote: Wed Jan 22, 2025 11:11 am**
> When are we going to have another hipe? Devs or community need to hipe it from time to time, otherwise it will just die.

I swear there is a wonderful opportunity to critique crypto currencies and the real life monetary systems with no guaranteed backing of a coins value here...

## Post 117679 by Tumicate — 2025-01-23T15:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117679#p117679 | page 1 | era: pre-1.18.1 -->

yeah... devs could make a system with daily random buy and sell orders to make the coin fluctuate randomly so players can speculate future prices, or... they could turn it into (another) poorly thought out social criticism.

## Post 117715 by Eversongwoods (Patch Note Conspiracy Theorist) — 2025-01-23T21:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117715#p117715 | page 1 | era: pre-1.18.1 -->

Shellcoin is just fine the way it is, over 24g at the moment. Going to the moon!

## Post 117980 by Zvyrhol (Grandmaster of Forum PvP) — 2025-01-26T15:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117980#p117980 | page 1 | era: pre-1.18.1 -->

Hardcore players haven't been able to complete Shellcoin quest chain since the last update. It's good change but the core problem of Shellcoin remains - the quest is still in the game.

I estimate that the Shellcoin would cost 100g now if there was no outside intervention of Shellcoin supply via these quests.

## Post 140838 by Zvyrhol (Grandmaster of Forum PvP) — 2025-07-22T08:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140838#p140838 | page 1 | era: pre-1.18.1 -->

I've checked if it still works today on my alt. Shellcoin system can still be exploited by completing quest.

Though it costs more than 27g now. One year ago the price was 22g.

## Post 143231 by Zvyrhol (Grandmaster of Forum PvP) — 2025-08-05T11:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143231#p143231 | page 1 | era: pre-1.18.1 -->

Seems like new server Ambershire might cause potential Shellcoin collapse on Nordanaar. Here is why:

> **What if Ambershire isn't popular and fades over time?**
>  In that case, it'll be merged into Nordanaar. Nordanaar players and guilds will have name priority during the merge.
>
>  **What if Nordanaar population declines over time?**
>  Then Ambershire will be merged into Nordanaar, whether you like it or not. Nordanaar is eternal.

Shellcoin system is a separate thing on all servers. What would actually happen if you merge the servers? It means that every character and their items will be transfered to another realm. The problem is, Shellcoin is included. Let's say 100 000 Shellcoins are being transfered this way. Meanwhile, the Nordanaar should have their own Shellcoin price unchanged by server merge. On top of that, the quest I've talked about in original post still exploits the system. It's a matter of time until people find out there are more Shellcoins than gold in the Shellcoin system.

## Post 164846 by Zvyrhol (Grandmaster of Forum PvP) — 2026-01-10T20:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=164846#p164846 | page 1 | era: 1.18.1-announced-pre-release -->

So nearly 1.5 years have passed since this post was written. Let's review it from time perspective - was I wrong?

I was certainly wrong about possible rapid fall of Shellcoin - that didn't happen. I suspected that when this knowledge becomes more widespread, all people who had invested in Shellcoin would spontanously rush to sell all their Shellcoins before inevitable happens. I suspected this information to spread in a week at the latest. From my observation, the knowledge is still not spread across the community and in my opinion this is why the Shellcoin hasn't fallen yet.
I still believe Shellcoin will fall eventually - I was wrong only about how long it would take.

Nothing was changed to Shellcoin as far as I know. Rules of the system written in original post still apply today.

Let's compare Shellcoin prices. One and half year ago, the price of Shellcoin was about 22g. A few days ago the price was about 25g. That means the Shellcoin increased it's price despite being vulnerable to this exploit.

Maybe I have underestimated how many players leave the game forever with their Shellcoins sitting cozy in their never used inventory. These players actually increase Shellcoin price in long-term and work like counterweight to this exploit. So far, I believe this is the only argument that may contradict my theory of Shellcoin's fall.

But let's study the details. Increase in price from 22g to 25g effectively translates to 1500 new Shellcoins generated on top of amount that was generated before.
So there are only 1500 new Shellcoins in the system since I posted. In my opinion, there is something wrong about this number. In my opinion, in normal server economy people would accumulate more currency. 1500 Shellcoins from this period translates to 35 250 gold total. This is the whole new gold server invested in Shellcoin for 1.5 years. Not much for WHOLE server if you ask me.

I know one guy who makes insane profit on AH and has more gold than that in inventory.
If Shellcoin truly was long-term, flawless investment, old players (and Nordanaar has many such players) would naturally invest in it instead of leaving their gold vulnerable to inflation. 35 250 gold in 1.5 years for whole mega private server is in my opinion too low number to be possible in flawless system.

I have also one more thought about Shellcoin's fall. The fact is that: we lack any information that would give us any new clue to support this theory.
What I mean is, if a single dev of Turtle could simply count number of total Shellcoins in all characters' inventories on Nordanaar via some SQL script and share this information with us, that would be enough to ultimately find out if this theory is true.
I haven't contacted any dev in this regard and I doubt any dev would spend their time to do such work. Maybe if I donate...

The last possible way I could think about is to ask all biggest guilds' officers about how many Shellcoins they store in their guild bank, then sum these up. For individuals, that would be impossible work but there aren't that many guilds on Nordanaar so it doesn't look like hard work at first glance. But that would only allow us to acknowledge the amount of Shellcoins stored by big guilds, not by private investors - and I believe they are the vast majority of Shellcoin owners.

## Post 167989 by Zvyrhol (Grandmaster of Forum PvP) — 2026-02-11T21:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167989#p167989 | page 1 | era: 1.18.1-announced-pre-release -->

I've recently found out Shellcoin was secretly fixed about half year ago in weekly maintenance.
So my last post was wrong and original post is finally invalid. In short, Shellcoin is saved.

From September 3 2025 patch notes:
> - Fixed the quest reward for “**Excessive Regulations**.”

Description is ambiguous but here is what has really changed. Both quests no longer reward Shellcoin. The reward was changed to false Shellcoin that is vendor item and is worth nothing.
So the Shellcoin system is saved and players can no longer supply more Shellcoins via other way than spending gold. The corrupted Shellcoins still exist in the system, however, amount will never increase so in long-term it shouldn't hurt the system.

