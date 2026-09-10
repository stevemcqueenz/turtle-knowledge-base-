---
title: "MyRolePlay for Vanilla (And Also flagRSP and ImmersionRP)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3048"
topic_id: 3048
forum_id: 18
forum: "AddOns"
author: "Jolikmc"
author_authority: "player"
posted: "2022-05-22T05:16:00Z"
last_post: "2022-07-21T07:46:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:33:31Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# MyRolePlay for Vanilla (And Also flagRSP and ImmersionRP)

## Post 18766 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-05-22T05:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18766#p18766 | page 1 | era: pre-1.18.1 -->

I was skimming the forum, today, and I noticed this post in the [GitHub List of VanWoW Addons](https://forum.turtlecraft.gg/viewtopic.php?f=18&t=874):
> **Teki wrote: Tue Jul 27, 2021 1:25 am**
> Is there Myroleplay addon anywhere?

Honestly, even *I* wasn't sure how or where I found *MyRolePlay* for Vanilla since, seemingly, it only came into existence around the time of *The Burning Crusade* (retail).  Regardless, here's two dedicated links for the world's most perfect profile RP addon.  And also, two other ones people liked.
–

MyRolePlay ([v2.2.2](https://www.mediafire.com/file/jl9lcv1fjrx78w3), [v2.2.3](https://forum.turtlecraft.gg/viewtopic.php?p=3508#p3508))
Add a detailed profile to your character and see other characters' profiles in *WoW*'s tooltips.
(AddOn automatically adds your character to "xtensionxtooltip2" and "MyRolePlay" [chat channels](https://wowpedia.fandom.com/wiki/Chat#Chat_Channel_Troubleshooting), which is how it communicates.)

Change Log
> Beta v2.2.3 (July 23rd, 2019) by Pompa
>  ([viewtopic.php?p=3508&sid=96d7d1bb934465 ... ba46#p3508](https://forum.turtlecraft.gg/viewtopic.php?p=3508#p3508))
>  - Fixed a crash that was happening whenever a player moved the mouse pointer over a GM character.
>
>  Beta v2.2.4 (June 17th, 2022) by Jo Li – **Removed** (**Spoiler:** It didn't fix **anything**.  I'm sorry.)
>  - Fixed a bug (hopefully) that would cause MyRolePlay to occasionally return "attempt to index field `?' (a nil value)" errors for lines 637 and 793
>  (As far as I can figure, this was happening because there was a space between lines 634 and 636, as well as 789 and 791.  That shouldn't NORMALLY matter, but I guess either the back-porting of this AddOn was a little shoddy, or Vanilla WoW's LUA architecture is just different enough to sometimes hiccup.)

 
[flagRSP and FriendList](https://www.mediafire.com/file/nlwzympvcg49a3r)
Add a simple profile to your character, see others' profiles in pop-up tooltips, and keep a database of roleplayers.
(AddOn automatically adds your character to "xtensionxtooltip2" chat channel, which is how it communicates.)

[ImmersionRP](https://www.curseforge.com/wow/addons/project-3040/files/all) (Alpha 2 or Alpha 3 only)
Add a simple profile to your character and see others' profiles in pop-up tooltips.
(AddOn automatically adds your character to "xtensionxtooltip2" chat channel, which is how it communicates.
 Additionally, ImmersionRP can be set to add your character to "immersioncomm", instead.)
–

Personally, I recommend *MyRolePlay*.  It has the most options for profiles, such as renaming your character entirely (for you and other *MRP* users) and maintains full compatibility with *flagRSP* while offering a pleasing, non-intrusive interface with logical button placement and a few options for customizing tooltips and the like.
If *flagRSP2* or *ImmersionRP* Alpha 4 were available for Vanilla, I would probably be less biased because those versions of the linked AddOns actually have much of the same options.  *ImmersionRP*, in particular, seems to be the complete underdog, here, as the "immersioncomm" channel is frequently abandoned.  Of course, that's an optional function, so…

Anyway, *MyRolePlay* seems the most compatible and most capable across the board – not to mention the least intrusive. (Pop-up profiles?  *Really*?)  But again, I'm wholeheartedly biased since the other available RP profile mods aren't as up-to-date as *MyRolePlay*.  That, and I've been using it since at least *The Burning Crusade* retail.  Heh.

 **06/07/2022 Edit:**
I just found out something interesting about this version of *MyRolePlay*.

 **It doesn't support line breaks.**

Why?  I don't know.  I just hadn't noticed until now.  If you're someone who puts a lot of history or description into your characters, this is kind of awful.  Kind of *really* awful.  Everything else about it works great, but line breaks just… don't.

I'll look into it and see if something can't be done but I make no promises…

 **06/17/2022 Edit:**
I attempted to fix the "attempt to index field `?' (a nil value)" errors for lines 637 and 793.  There were unnecessary line breaks.  I dunno.  Weird.
(Spoiler: It didn't work.)

*Last edited by Jolikmc on Sun Jul 10, 2022 3:11 am, edited 3 times in total.*

## Post 18802 by Sgttater — 2022-05-23T19:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18802#p18802 | page 1 | era: pre-1.18.1 -->

Does TRP3 not work on this server?

## Post 18873 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-05-27T07:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18873#p18873 | page 1 | era: pre-1.18.1 -->

Nope.  *Classic* uses the modern game's coding system for AddOns, so *Classic* AddOns are not compatible with Vanilla.  Ya know… despite the fact *Classic* is built on top of 1.12.1 rather than be its own thing.

## Post 19391 by Tarok — 2022-06-25T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19391#p19391 | page 1 | era: pre-1.18.1 -->

Thanks for this!!

## Post 19906 by Gurky (Barrens Chat Casualty) — 2022-07-12T02:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19906#p19906 | page 1 | era: pre-1.18.1 -->

For line breaks in your profile try typing \n where the link break should be. I cannot say forsure if this will work or not but \n in lua addons will do a line break in chat.

## Post 19925 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-12T07:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19925#p19925 | page 1 | era: pre-1.18.1 -->

Doesn't work.  The way *MyRolePlay* does things, it automatically modifies any potential code in any of its fields with an extra backslash, thus allowing things like quotation marks, slashes, and asterisks in the actual character information.

## Post 20162 by Cyrindy — 2022-07-21T07:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20162#p20162 | page 1 | era: pre-1.18.1 -->

Anywhere I could troubleshoot for issues on the MRP addon just not working? I have legit no idea why and I've been figuratively slamming my head into a wall for a few hours now.

