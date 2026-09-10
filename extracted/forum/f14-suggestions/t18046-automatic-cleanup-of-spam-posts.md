---
title: "Automatic cleanup of spam posts"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18046"
topic_id: 18046
forum_id: 14
forum: "Suggestions"
author: "Xudo"
author_authority: "player"
posted: "2025-03-18T07:11:00Z"
last_post: "2025-03-18T21:10:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T11:35:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Automatic cleanup of spam posts

## Post 122860 by Xudo (Grandmaster of Forum PvP) — 2025-03-18T07:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122860#p122860 | page 1 | era: pre-1.18.1 -->

I often see meaningless replies doing thread necromancy on this forum with links to external sites.
I don't know real intentions behind that, but it is probably related to SEO or fishing.
Few years ago I had to solve similar problem. I wrote the script which used moderation account.
It took list of all "recent" threads, then loop over them and "hide" all posts which contain links to external websites. Then it marked all threads as "read". This script was launched hourly.
To reduce amount of false-positives I didn't "deleted" posts, only "hide" them. Mods should have this feature in their toolkit in PHPBB forums. Also I revised deleted posts and made "whitelist" of external sites. If something should not be hidden, I add site to whitelist and "revealed" those posts manually.
Script like this worked very well, but I lost it so I can't share.

## Post 122915 by Zeran (Patch Note Conspiracy Theorist) — 2025-03-18T19:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122915#p122915 | page 1 | era: pre-1.18.1 -->

This forum doesn't get high enough traffic to warrant anything like that, I think. If anything, the combination of scripting this + the subsequent review of false positives would be more work and steps than just reviewing the threads themselves directly when they are reported/flagged.

## Post 122920 by Templar85 (Patch Note Conspiracy Theorist) — 2025-03-18T19:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122920#p122920 | page 1 | era: pre-1.18.1 -->

How can one report a bot account if they see on the forum?

## Post 122929 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-03-18T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122929#p122929 | page 1 | era: pre-1.18.1 -->

> **Zeran wrote: Tue Mar 18, 2025 7:11 pm**
> This forum doesn't get high enough traffic to warrant anything like that, I think. If anything, the combination of scripting this + the subsequent review of false positives would be more work and steps than just reviewing the threads themselves directly when they are reported/flagged.

I disagree.  There are only a few people to report forum issues to, and even fewer that are capable of removing/editing posts.  I stopped reporting them because they just didn't, seem to view it as a priority, as my reports went ignored.

Unfortunately, most people aren't very tech/security savvy and I'm sure more than a fair few have clicked those links and infected their machines or compromised their logins.

If an automated system were in place, instead of the few nefarious posts a week, it would easily drop to almost zero.

