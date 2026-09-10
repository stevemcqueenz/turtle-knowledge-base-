---
title: "Chat"
url: "https://turtle-wow.fandom.com/wiki/Chat"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-29T10:41:05Z"
fetched: "2026-09-10T07:38:31Z"
is_turtle_content: false
patch: null
categories: []
---
# Chat

Chat is primarily text-based communication, initiated by pressing Enter or typing '/' to open the command line. Chat channels are accessed via slash commands (see below).

  -Additional notes:**

- Opposing faction characters can only communicate via /s (say) or /y (yell), and messages are seen in faction language.
- Shift-clicking items or quests inserts clickable links into chat that show descriptions or objectives.
- A profanity filter is enabled by default.

## Chat Commands
  -Basic Chat Commands**
{| class="fandom-table"
!Command
!Usage
!Description
|-
|<code>/1 <message></code>
|<code>/1 Hello</code>
|General chat (worldwide, in macro zone)
|-
|<code>/2 <message></code>
|<code>/2 Selling items</code>
|Trade chat (city-only)
|-
|<code>/3 <message></code>
|<code>/3 Protecting the city</code>
|Local Defense
|-
|<code>/4 <message></code>
|<code>/4 Looking for group</code>
|LFG channel
|-
|<code>/s <message></code>
|<code>/s Hello</code>
|Say (local)
|-
|<code>/y <message></code>
|<code>/y Help!</code>
|Yell (global within zone)
|-
|<code>/p <message></code>
|<code>/p Group up!</code>
|Party chat (party members)
|-
|<code>/g <message></code>
|<code>/g Guild message</code>
|Guild chat
|-
|<code>/o <message></code>
|<code>/o Officers only</code>
|Officer chat (guild officers)
|-
|<code>/ra <message></code>
|<code>/raid Raid message</code>
|Raid chat
|-
|<code>/w <player> <message></code>
|<code>/w Player Hello</code>
|Whisper to a specific player
|-
|<code>/t <player> <message></code>
|<code>/t Player Hello</code>
|Same as whisper
|-
|<code>/r <message></code>
|<code>/r Thanks!</code>
|Reply to last whisper/Tell
|-
|<code>/ignore <player></code>
|<code>/ignore Player</code>
|Ignore a player
|-
|<code>/unignore <player></code>
|<code>/unignore Player</code>
|Unignore a player
|-
|<code>/chathelp</code>
|<code>/chathelp</code>
|Summarizes chat commands
|}

  -Basic Chat with Audible Sounds**
{| class="fandom-table"
!Command
!Usage
!Description
|-
|<code>/inc</code>
|<code>/inc</code>
|Incoming warning (monster approaching)
|-
|<code>/charge</code>
|<code>/charge</code>
|Charge sound
|-
|<code>/flee</code>
|<code>/flee</code>
|Flee sound
|-
|<code>/attack</code>
|<code>/attack</code>
|Attack sound
|-
|<code>/oom</code>
|<code>/oom</code>
|Out of mana alert
|-
|<code>/fol</code>
|<code>/fol</code>
|Follow me
|-
|<code>/wait</code>
|<code>/wait</code>
|Wait command
|-
|<code>/heal</code>
|<code>/heal</code>
|Heal alert
|-
|<code>/cheer</code>
|<code>/cheer</code>
|Cheer sound
|-
|<code>/fire</code>
|<code>/fire</code>
|Fire sound
|-
|<code>/rasp</code>
|<code>/rasp</code>
|Tongue out sound
|-
|<code>/silly</code>
|<code>/silly</code>
|Tell a joke (race/gender-dependent)
|-
|<code>/flirt <player></code>
|<code>/flirt Player</code>
|Flirt with player (race/gender-dependent)
|}

  -Guild Specific Chat**
{| class="fandom-table"
!Command
!Usage
!Description
|-
|<code>/ginfo</code>
|<code>/ginfo</code>
|Basic guild info
|-
|<code>/g <message></code>
|<code>/g Hello guild</code>
|Guild chat
|-
|<code>/guild <message></code>
|<code>/guild Meeting at 8</code>
|Guild message
|-
|<code>/o <message></code>
|<code>/o Officers</code>
|Officers-only chat
|-
|<code>/gmotd <message></code>
|<code>/gmotd Welcome!</code>
|Set guild message of the day
|}

  -Advanced Chat Channel Usage**
{| class="fandom-table"
!Command
!Usage
!Description
|-
|<code>/c <message></code>
|<code>/c Hello all</code>
|Send message to last used /# channel
|-
|<code>/chatlist <channel></code>
|<code>/chatlist</code>
|List channels or members
|-
|<code>/join <channel></code>
|<code>/join General</code>
|Join a channel
|-
|<code>/leave <channel></code>
|<code>/leave General</code>
|Leave a channel
|-
|<code>/ann</code>
|<code>/ann</code>
|Toggle join/leave announcements
|-
|<code>/moderate</code>
|<code>/moderate</code>
|Toggle moderation
|-
|<code>/chatinvite <player></code>
|<code>/chatinvite Player</code>
|Invite to channel
|-
|<code>/ckick <channel> <player></code>
|<code>/ckick General Player</code>
|Kick player from channel
|-
|<code>/ban <player></code>
|<code>/ban Player</code>
|Ban from channel
|-
|<code>/unban <player></code>
|<code>/unban Player</code>
|Unban from channel
|-
|<code>/mute <player></code>
|<code>/mute Player</code>
|Mute player
|-
|<code>/voice <player></code>
|<code>/voice Player</code>
|Change permission (voice)
|-
|<code>/mod <player></code>
|<code>/mod Player</code>
|Promote to moderator
|-
|<code>/pass <channel> <password></code>
|<code>/pass General Secret</code>
|Set channel password
|-
|<code>/owner <player></code>
|<code>/owner Player</code>
|Transfer channel ownership
|}

## **Advanced Chat**
  -Advanced Chat Terminology & Details**

- **Channel Limit:** Max 10 channels at once (excluding say, yell, party, raid, guild, officer, whisper).
- **Undead Channel:** Leftover join/leave messages caused by crashes or exiting game during OOZ channels.
- **Out-Of-Zone (OOZ) Channel:** Zone-specific channels you join outside your current zone, e.g., <code><serverchannel> - <zone></code>. *Note:* As of patch 1.9, joining OOZ channels is restricted.
- **Server Mask Channel:** Default zone channels like 'General', 'Trade', automatically change when moving zones.
- **Chat Types:** SAY, YELL, EMOTE, PARTY, RAID, GUILD, OFFICER, WHISPER, CHANNEL, SYSTEM.
- **Sticky Chat Types:** Remembers last used chat type per session (default: SAY, PARTY, RAID, GUILD).

  -*Note**:* Capital cities have specific channels:

- **Alliance:** Stormwind, Ironforge, Darnassus
- **Horde:** Orgrimmar, Undercity, Thunder Bluff

  -How to Switch Chat Language**

In the chat interface:

# Click the "Chat Bubble" on the chat toolbar.
# Highlight "Language."
# Select from your known languages.

## **FAQ**
  -Out-of-Zone Chat Channel FAQ**

  -Q1:** How do I join an OOZ channel?

- **A:** Use <code>/script JoinChannelByName("Channel - Zone")</code> and add to chat window:
<syntaxhighlight lang="lua">
/script JoinChannelByName("General - Ironforge"); AddChatWindowChannel(1, "General - Ironforge")
</syntaxhighlight>**Q2:** Can I stay in an OOZ channel permanently?

- **A:** No, typically not. Crashes or logouts may leave you stuck; you may need to manually edit your chat-cache file.

  -Q3:** What happens if I join an OOZ channel while in another?

- **A:** Traffic may reroute to the OOZ channel; avoid <code>/leave</code> or <code>/join</code> conflicts while in the OOZ.

  -Q4:** Are there addons to manage OOZ channels?

- **A:** Yes, tools like **ChannelManager** automate joining/leaving common OOZ channels.

  -Q5:** Why aren’t my OOZ visibility options saved?

- **A:** Due to cache limitations, re-add channels via macro:
<syntaxhighlight lang="lua">
/script AddChatWindowChannel(chatFrameIndex, "Channel - Zone")
</syntaxhighlight>

## Troubleshooting
  -Chat Channel Troubleshooting**

# **Cannot talk or see messages:**

Fix undead channels by editing <code>chat-cache.txt</code>:<syntaxhighlight lang="lua">
CHANNELS
END
ZONECHANNELS 0
</syntaxhighlight>Log out, close game, edit file, restart.

  -Cannot see chat in a channel:**

- Right-click chat tab → Filters → Ensure channel is checked.

  -Cannot see system messages:**

- Usually a cache bug; delete <code>chat-cache.txt</code> and relog.

  -Cannot join #2 channel (Trade):**

- Outside cities, Trade is hidden; only join inside city.

  -Channel colors not saved:**

- Saved by channel number; server channels usually in order: 1. General, 2. Trade, etc.

  -Cannot talk in a channel:**

- Reset chat settings:
  - Exit game.
  - Backup and delete WTF & Interface folders.
  - Log in, leave channels:
<syntaxhighlight lang="lua">
/leave General
/leave Trade
</syntaxhighlight>Rejoin channels:<syntaxhighlight lang="lua">
/join General
/join Trade
</syntaxhighlight>Restore folders if needed.
