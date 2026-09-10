---
title: "[Request] Add Line Breaks to MyRolePlay Addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3110"
topic_id: 3110
forum_id: 18
forum: "AddOns"
author: "Jolikmc"
author_authority: "player"
posted: "2022-06-08T03:44:00Z"
last_post: "2022-07-12T07:45:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:33:32Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Request] Add Line Breaks to MyRolePlay Addon

## Post 19045 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-06-08T03:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19045#p19045 | page 1 | era: pre-1.18.1 -->

Hey there, AddOn sub-forum.  How many of you are familiar with the *World of Warcraft* v1.x LUA scripting protocol?  Or, in simpler terms, how many of you know enough about Vanilla *WoW* AddOns to make a modification to one?

Here's the deal: it recently came to my attention that the popular and *very* useful roleplaying AddOn, *MyRolePlay*, isn't working as expected.  What's the issue?  Well, it doesn't know how to handle **line breaks**.  I'd like to ask someone who is extremely familiar with Vanilla LUA to have a look at *MyRolePlay*… maybe compare its code to that of *FlagRSP* or *ImmersionRP*… and see if some proper line breaking code can't be implemented.
(Links for all three AddOns can be found [here](https://forum.turtlecraft.gg/viewtopic.php?f=18&t=3048).)

I noticed this, today, when I was working on a roleplay character.  When I checked the xtensionxtooltip2 and MyRolePlay Chat Channels, I also noticed that *MyRolePlay* was sending my character's description without even a *hint* of a line break or line break character.  This seems very unusual to me… like a very basic feature that should be part of the AddOn and simply *isn't*.  I say this because when I tried this experiment with *ImmersionRP*, it actually *did* send my character description with line breaks *intact*.  What's even stranger is that when I checked the SavedVariables files for both AddOns, I discovered that *MyRolePlay* actually *preserves* line breaks exactly as written while *ImmersionRP* straight up *replaces* any line breaks with "\\l".

Now, I've poked around the files of *flagRSP, ImmersionRP,* and *MyRolePlay* for v1.12.  Something I noticed is that both *FlagRSP* and *ImmersionRP* both have code in place which both generates and interprets "\\l" and "\n" escape codes. (*ImmersionRP* also has interpreters for a bunch of other characters such as ">" and "\\%", but I didn't test those.)  *MyRolePlay also* has some interpreters for "\\l", "\n", and curiously, "\r".  However, that's all these things appear to be – *interpreters*.  I can't find a single thing within the "MyRolePlayComm.lua" file that even *hints* at proper line break operations.  It's safe to assume that I've missed something, considering my severe inexperience, but even so… it *is* a bit odd that *MyRolePlay* would just save character descriptions and history with actual, as-written line breaks instead of line break characters.

I know it's a long shot asking this community, but this is the community I call home, so I figured… "why not"?
Any help at all would be **greatly** appreciated.

## Post 19054 by Allwynd01 (Bug Report Enthusiast) — 2022-06-08T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19054#p19054 | page 1 | era: pre-1.18.1 -->

I don't know much about programming, but doesn't this require for the whole client to be modified?

Also, isn't there a way to bypass this limitation with just using tricks with programming? If one knows how to code, they should know the limits and extent of what can be done with a programming language. If I understand correct, line break is something like "/br" or whatever. Isn't there another way to emulate it?

## Post 19062 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-06-08T18:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19062#p19062 | page 1 | era: pre-1.18.1 -->

A very good pair of questions.  Thank you.

To the first question, I imagine that all that needs to be changed is how *MyRolePlay* interprets line breaks.  Right now, it just leaves line breaks exactly as they are when stored in the character's LUA config file.  *MyRolePlay* would need an exception to be added which would go something like…
Code: Select all

```
if ("[line break]") then replace ("[line break]" = "\l")
```

(This is obviously not the correct parsing, but you get the idea.)

This would make sure that a character's description and history are stored as one line (split up along six chunks), each, instead of segmented lines:
> Before
> > ["Description1"] = "Testing.
> >
> >  Yeah, this probably isn't gonna work.
> >  What a mess.",
>
>  After
> > ["Description1"] = "Testing.\l\lYeah, this probably isn't gonna work.\lWhat a mess.",

This is definitely going to be a sub-version (v2.3.0) sort of thing rather than a sub-sub-version ("2.2.5"), but for someone who knows what they're doing, I imagine it shouldn't be too difficult.  Honestly, if I had even a slight idea of what I was doing, I'd do it myself… but I can't even find the place where it reads from the character's local LUA and puts it into the game…

As for the other thing?  Any use of slashes in a *MyRolePlay* profile (ex: "\br") leads to the slash being doubled (ex: "\\br") which cancels any coding it may have represented.  And so, no matter what LUA code I try, it just turns into plain text.

## Post 19138 by Sy — 2022-06-13T02:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19138#p19138 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Wed Jun 08, 2022 3:44 am**
> like a very basic feature that should be part of the AddOn and simply *isn't*.

MRP has a whole bunch of issues, some more silly than others. it's better than having nothing at all, but really quite lacking in various ways, not to mention unstable.

fortunately there is a new RP addon for turtle currently in the works that will *hopefully*, if all goes well, become a replacement for MRP. it's still in development for now, and any public release is still a couple months away at least.

but the new addon will, presumably, have features like being able to display line breaks. ;)

## Post 19159 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-06-14T12:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19159#p19159 | page 1 | era: pre-1.18.1 -->

I find this solution acceptable.

Or, at least, I will in two months or so~

Thanks for the heads up, Sy!

## Post 19904 by Gurky (Barrens Chat Casualty) — 2022-07-12T02:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19904#p19904 | page 1 | era: pre-1.18.1 -->

I might look into this if someone would like. It might be a bit until I get to it and I am not a role player so I would need some more info on it.

## Post 19924 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-12T07:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19924#p19924 | page 1 | era: pre-1.18.1 -->

You would be a hero to a select few, if you did!  I know a few interested parties in the *Discord*.

I don't know much about LUA coding – elsewise, I would have fixed it, myself – but from what I can tell, the AddOn actually *is* working correctly.  Something on the server *back end* changed, preventing line breaks from working in the half-arsed, lazy way that was implemented by the person who back-ported this thing.  In fact, I feel like line breaks *were* working up until somewhere in mid-May…

Anyway, I don't know much about LUA, but if I can be of any assistance, I'll try my best!  (:

