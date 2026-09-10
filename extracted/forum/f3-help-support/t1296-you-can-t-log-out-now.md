---
title: "You can't log out now."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1296"
topic_id: 1296
forum_id: 3
forum: "Help & Support"
author: "Roxanneflowers"
author_authority: "player"
posted: "2020-09-26T16:38:00Z"
last_post: "2020-09-26T23:03:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:29:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# You can't log out now.

## Post 7847 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-09-26T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7847#p7847 | page 1 | era: pre-1.18.1 -->

Since yesterday, this bug has just started happening.
I would have alts inside of Stormwind (mailbox by bank) or Ironforge (inside the bank) and when I tried to log out I was consistently getting told "You Can't Do That" in a way that is consistent with being in combat ... except that my alts (8 of them) were inside capital cities.

So this morning I decided to do a little testing to find the "shape" of the bug and the trigger conditions for it.

For this past week, I've had a pile of alts near the mailbox by the bank in Stormwind and I would log in, cast a Bright Campfire and log out to the next alt so as to rotate through them all and get +1 Survival skill on each one (so as to push towards 150/150).

But starting yesterday, I would log in, cast a Bright Campfire ... and be told I couldn't log out.
I had to Force Quit the game client in order to get out of it ... then log back in, switch to the next alt, and have it happen all over again.
Every.
Single.
Alt.

So this morning, I was wondering if there was something really hinky going on and started doing impromptu QA testing.

My Hunter cast a Bright Campfire next to the mailbox by the bank in Stormwind ... and couldn't log out.
Okay ... run to a different part of Stormwind ... still can't log out.
Run to the Deeprun Tram ... zone into the Deeprun Tram ... OH HEY, I can log out in the Deeprun Tram!
Zone back into Stormwind ... can't log out.

Okay, that's interesting.
The behavior is consistent with the Stuck In Combat Status bug which can be caused by a desync between server and client over combat status if your PC moves far enough away from an aggroed mob to despawn it from your client before combat status drops (so it drops on the server, but the client never implements the status drop).

Now normally you can just go and clobber a Critter to enforce combat status against a local mob (the Critter) which then drops when the Critter dies, clearing the stuck in combat bug.

So with the "You can't log out now." condition in effect, I wandered over to kill a Rat by the Auction House in Stormwind ... and still couldn't log out.

The other thing you can do to try and clear the stuck in combat bug is to change zones (map change).  However, the stuck in combat bug will resume if you re-enter the original zone without killing anything in the second zone to force your game client to "keep up" with current events.  I've had the stuck in combat bug occur in Westfall, zoned over to Elwynn Forest, healed up, returned to Westfall, and upon entry into Westfall have been automatically put right back into combat status because the game client records the combat status of the original mob in Westfall which has not been cleared yet.

This stuck in combat while in the zone and even after returning to the zone condition was consistent with my trip to the Deeprun Tram, where I could log out, but then upon returning to Stormwind while in the tunnel could not log out.

The next test that I did was to log into a fresh alt and without casting anything at all attempt to log out.
This was successful on multiple alts.
Log in -> log out -> no problem.
Log in -> cast Bright Campfire -> You can't log out now.

So at this point, I was pretty sure that the Bright Campfire has started doing something it's not supposed to, which is somehow putting the PC into combat status (and you can't log out while in combat).  I'm kind of wondering if it's doing something absurdly wonky like the Bright Campfire is buffing the Mailbox(!) which then puts the caster into combat status.

The next test that I tried was to see if I could cast a Bright Campfire OUTSIDE of Stormwind or Ironforge and log out successfully.  YES, casting a Bright Campfire outside of the Resting zone boundary allowed my characters to log out.  My QA testing methodology was to wander out of Stormwind to behind one of the siege weapons, cast Bright Campfire there and attempt to log out.  Log out was permitted while in Elwynn Forest after casting Bright Campfire.

Then I moved from Elwynn Forest over the boundary line into Stormwind (Zzz status) and was able to log out.

I then conducted additional testing at the very gate of Stormwind, where I would have an alt right up against the inside of the Resting boundary and then cast Bright Campfire from there so that when the Bright Campfire spawns in it is on the other side of the Resting zone boundary outside of Stormwind.  That way my PC is inside Stormwind and the Bright Campfire is outside in Elwynn Forest.  Can log out under those conditions.

So I've basically narrowed things down to there must have been some sort of change made *somewhere* recently that causes an unanticipated/unwanted interaction between the Bright Campfire and the stuck in combat bug that prevents logout.  I have NO IDEA what this change might entail or how it could inter(re)act this way with Bright Campfire, but it is extremely reliable and repeatable on my game client.

Fortunately, I now have a workaround (of sorts) for being able to keep casting Bright Campfire across the Resting boundary zone layer of capital cities in order to avoid the issue, but ultimately that's kind of an unsatisfactory state of affairs.

I was prompted to write this post owing to the fact that in the past half hour I saw someone in world chat asking how they could get rid of the stuck in combat bug, and I'm wondering if they were experiencing the same problem(s) I was (and for the same reasons?).

Please forward the content and QA steps testing from this post to the appropriate staffer(s) for validation of the issue which is most definitely an edge case condition, but also an easily repeatable one.

## Post 7850 by Sinrek (Grandmaster of Forum PvP) — 2020-09-26T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7850#p7850 | page 1 | era: pre-1.18.1 -->

Have you tried to wait for Bright Campfire to run out and then logout in the rested XP state area?

In the wilds?

## Post 7851 by Unangwata (Patch Note Conspiracy Theorist) — 2020-09-26T18:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7851#p7851 | page 1 | era: pre-1.18.1 -->

I suspect perhaps Bright Fire puts buff on pvp flagged characters and u get combat status and pvp flag from that. Maybe that's why in cities it happens more.

## Post 7852 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-09-26T18:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7852#p7852 | page 1 | era: pre-1.18.1 -->

Additional data point.

I tried casting a Bright Campfire in the middle of a bridge over the canals in Stormwind.  Could log out just fine ... probably because there was nothing else around for the Bright Campfire to affect/buff meaning no in combat status could apply.

> **Unangwata wrote: Sat Sep 26, 2020 6:39 pm**
> I suspect perhaps Bright Fire puts buff on pvp flagged characters and u get combat status and pvp flag from that. Maybe that's why in cities it happens more.

Considering that there are plenty of PvP flagged NPCs around at the mailbox in Stormwind and at the bank in Ironforge, this is looking to be a rather likely explanation of the edge case.

## Post 7858 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-09-26T23:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7858#p7858 | page 1 | era: pre-1.18.1 -->

Yet another data point.

After completing a Deadmines run, I was selling junk to the Bowyer vendor near Sentinel Hill in Westfall and cast a Bright Campfire (since it was off cooldown).  I then ran up the hill to the tower and just for shizzle tried to log out on the tower ramp.

You can't log out now.

There were no other PCs around, so I can only assume that the logout lock was imposed by the Bright Campfire buffing PvP enabled NPCs.

