---
title: "Post-Patch Bug Report (Hunter/Guild/Items)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24424"
topic_id: 24424
forum_id: 3
forum: "Help & Support"
author: "Lokalpop"
author_authority: "player"
posted: "2026-03-22T20:40:00Z"
last_post: "2026-03-23T00:42:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:36:27Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Post-Patch Bug Report (Hunter/Guild/Items)

## Post 171824 by Lokalpop — 2026-03-22T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171824#p171824 | page 1 | era: post-1.18.1 -->

1. Hunter: Aspect of the Viper Aggro
Issue: Mana regen from Aspect of the Viper is generating threat.
Problem: If a pet pulls 3 mobs but only attacks one, the other two will aggro onto the Hunter due to mana ticks.
Expected: Mana regen should not generate combat threat.
 2. Chat: Overlapping Guild Chats
Issue: After switching guilds, messages from both the old and new guilds appear in the /g channel.
Expected: Joining a new guild should immediately clear the previous guild's chat stream.
 3. Item: +2 Crit Scope Display Bug
Issue: The new +2 Crit Scope does not show as an "Enchant" on the weapon tooltip.
Problem: It is also not reflecting the +2 Critical Strike increase in the character stat pane.
Expected: The stats should be visible on both the item tooltip and the character sheet.
wary_turtle_head

## Post 171851 by Huldra — 2026-03-23T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171851#p171851 | page 1 | era: post-1.18.1 -->

1. Resource generation always generates combat threat.
To reproduce this, try that same pull with a pet without AoTV but, instead, drink a mana potion. Every point of mana or health generated through means outside of natural regen (like the "five second rule") generates 0.5 threat. Alternatively, try the same thing after a Paladin uses Judgement of Wisdom. Each hit will generate mana which should increase your threat on surrounding mobs. This is a known issue you can find by Googling "mana regen threat generation" or something similar.

 2. This should not be expected. In 1.12, the only time that the chat is fully cleared is after logging off and, while I believe chats can be cleared by GMs, this is only for public chat channels on a case-by-case basis.
If this affects guild chat UI, this is an issue of the addon's use of the information the client provides it (Addon sees Guild Chat, prints Guild Chat) and thus not Turtle's problem.

 3. This may be inaccurate, but if I recall correctly, enchantments are not displayed in the stat panel by default and additional addon support is required. For example, the +spell damage on my Warlock's Robe of the Void did not contribute to my stat panel's displayed spell power after manually checking the difference: The panel displayed only the base +46 (or whatever), not the total +53 (with +7 spell dmg).
So, a third time, this is not expected behaviour.

## Post 171855 by Plagues2 (Barrens Chat Casualty) — 2026-03-23T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171855#p171855 | page 1 | era: post-1.18.1 -->

Gonna tag on here.

 1-Serpent sting and serpent pets poison spit cancel each other out.

 2-The "hunter shots now have cast bars" mentioned in the patch notes aren't actually there, unless I misunderstood what it meant.  Scatter / aimed and steady shots do not have cast bars, which I assumed they would.

 3-Kill command has no real "notification" or buff that appears, so you need to stare at the action bars.  A buff icon/text in floating cambat text would be nice.

