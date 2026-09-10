# Chat and language patterns

Part of the player-behavior corpus (part A). Source: a Python pass over all 35 files in
`structured/forum/posts/*.jsonl` (161,896 posts total, forums 2–75). Usernames are pseudonymized
throughout via `scrape/pseudonymize.py` (`Player-NNNN` / `Staff-NN`); post URLs are left intact as
citations. Machine-readable twin: `behavior/chat-and-language.jsonl` (31 examples).

**Method note on in-game chat.** The forum has no dedicated "chat log" section. Real `/1`, `/2`,
`/LookingForGroup`, `/trade`, `/world` lines only surface when a player pastes or screenshots them
inside a post (bug reports, ban appeals, guides). A full-corpus grep for the bracket tags found:
`[World]` **8** hits, `[General]` **0**, `[Trade]` **0**, `[LookingForGroup]` **0** — the last three
are **not found in sources** as literal quoted tags; treat the `[World]` examples below as the
closest evidence of the tag format itself. Free-standing marker words are far more common because
players type them straight into the forum in their own guild/LFG/trade ads: `LFG` **266**, `LFM`
**73**, `WTS` **16**, `WTB` **40**, `WTT` **3**, `pst` **32**, `w me` (incl. `/w me`) **7** posts
match "w me" exactly; a looser count of the string `w me` anywhere is **1,042**, and `pst` anywhere
(including "PST" as US Pacific time, a frequent false positive) is **571**.

## 1. Greetings and farewells

Openers counted by regex-matching the first word(s) of a post, all forums, all eras:

| Opener | Count | Opener | Count |
|---|---|---|---|
| `hello` | 3,286 | `good day` | 78 |
| `hi` | 2,125 | `yo` | 47 |
| `hey` | 1,621 | `heya` | 37 |
| `greetings` | 678 | `sup` | 15 |
| — | — | `hiya` | 12 |

7,899 of 161,896 posts (~4.9%) open with a greeting word; the rest simply start the point. `Greetings`
is disproportionately a **staff** register (Turtle WoW Team posts consistently open this way, e.g.
[Staff-01 (staff), 2023-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=58078#p58078): *"Greetings.
All of this information has been communicated to you via the Appeals portal..."*), while `hey`/`hi`/`sup`
skew toward casual player posts and guild-recruitment/LFG openers.

Farewells are looser and less templated (775 posts match `glhf`, `cya`, `see ya`, `stay safe`, `o/`,
`take care`, or `cheers`); `cheers` and `take care` are the most common sign-offs on longer help or
guide posts, `glhf`/`o/` on short PvP or grouping posts.

## 2. LFG / LFM messages

Real LFM ads, quoted verbatim (scrubbed):

> "LFM BWL+ES every monday CET: 19:30 inv / 20:00 start --> you can benefit from SR+/SR Lootsystem
> (read the rules) [...] LFM MC every tuesday CET: 19:30 inv / 20:00 start [...] LFM AQ40 every
> wednesday CET: 19:30 inv / 20:00 start [...] Join this discord-link and follow the instructions:
> <discord link>"
— [Player-0001 (player), 2024-03-27, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=91538#p91538)

> "LFM AQ40 Link Cthun achievement or no inv"
— [Player-0003 (player), 2025-05-02, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=129440#p129440)

A hypothetical example quoted by another player while arguing against class-restrictive recruiting
shows the terse register directly: *"LFM Kara10 full on priests mages warlocks druids."*
— [Player-0002 (player), 2026-03-31, post-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=173424#p173424)

Pattern: **`LFM <content/instance> [<requirement or class filter>] [<day/time + timezone>] [<loot-rule note>] [<contact: PST/Discord>]`**. Recurring weekly raid ads (like the BWL/MC/AQ40 example) repeat the
template block-by-block per event, separated by blank/`.` lines — a spam-resistant layout players use
because World/LFG channel scrolls fast (see §5).

## 3. Trade-chat ads (WTS / WTB / WTT)

> "WTS>Spellshock Leggings 650g" (embedded screenshot, then an unrelated callout at the ninja-looter
> who had complained about the sale)
— [Player-0004 (player), 2023-06-17, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=50355#p50355)

> "WTB this Tabard on Tel'Abim" (with an image of the tabard)
— [Player-0005 (player), 2026-03-19, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=171327#p171327)

> "WTB Lifebloom, Out of Combat Resurrection, Indoor speed, Indoor Set Bonus, Indoor Roots."
(a joke WTB list of missing class abilities, class-forum register)
— [Player-0006 (player), 2026-02-04, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=167375#p167375)

> "WTT edgies for Trade Title /w me"
— [Player-0007 (player), 2022-01-11, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=15646#p15646)

> "WTT elusive bank bush for a Guild Bank."
— [Player-0008 (player), 2025-07-27, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=141642#p141642)

Pattern: **`WTS/WTB/WTT <item> <price>g`** or a bare item/thing list with no price, one line, no
greeting, no sign-off — trade ads are the shortest, most stripped-down register in the whole corpus
(median well under the 33-word Guild Recruitment median, see §7).

## 4. Guild recruitment one-liners and posts

Guild Recruitment (forums 23 and 50, n=1,549 posts) ranges from one-line bump posts to long
lore-flavored banners. Three recurring shapes:

**Terse stat-card style** (very common for solo LFG-a-guild and small guild ads):

> "Level 60 Horde Rogue (NA/EST) looking for a semi-hardcore or casual home for dungeons and raiding.
> Available for raiding Monday/Wed 20:00+ to 01:00 [...]. I'm currently at the 9% Hit Cap and I'm a
> Skinner/LW. I've made the investment in learning the Devilsaur Patterns (Legs and Gauntlets)."
— [Player-0017 (player), 2026-02-15, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=168235#p168235)

> "<Assault> on Ambershire (NA) is a Horde-based guild recruiting for weekly raiding, arenas, bgs and
> wpvp. Our raid team is accepting cross-faction. Leveling and EU players welcome. PST in-game to
> <Name> (Horde) for info or an invite. Thanks"
— [Player-0016 (player), 2025-08-28, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=149041#p149041)

> "The Blackwing Guard raids 6pm pst most days. A fair amount of us are old heads."
— [Player-0018 (player), 2024-01-07, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=83870#p83870)

**ESL/non-native register**, common from smaller international guilds:

> "Hello everyone, it's Player-0009! <hoge> is a guild for ENG/JPN speaker! We play Hardcore mode. (AKA 1 Life
> mode) We always help each other. (Friendly, Teamwork, Teamplay) We have 5members for now. But this
> is not enuff. [...] Pls try /who hoge and PST for more detail if interested!"
— [Player-0009 (player), 2023-08-26, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=59081#p59081)

**RP/lore-flavored banner style** (mostly Alliance/RP guilds, opens with an image + bold guild name,
then in-character flavor text before the OOC "Guild info" block):

> "**<The Greysteel Company>** Hello everyone! I am pleased to announce officially on the forums that,
> <The Greysteel Company> is recruiting and actively seeking out new members! Do you Role Play? [...]"
— [Player-0011 (player), 2019-05-19, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=2931#p2931)

**New-player-looking-for-people** posts get cross-posted verbatim to both General and Guild
Recruitment:

> "Hey turtle wow peeps [...] I'm still pretty new to this community. I love this server but most of
> the players I see are way higher level than me [...] Just looking for some chill people to play
> with, I'm a very friendly and mellow person. [...] I play this game very casually, I would prefer to
> play with people who aren't super intense about wiping and not knowing every dungeon by heart."
— [Player-0019 (player), 2020-11-09, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=8423#p8423)
(identical text also posted to General, same author, same day:
[p=8422](https://forum.turtlecraft.gg/viewtopic.php?p=8422#p8422))

## 5. World/LFG chat quoted in posts

Players constantly *complain about* World/LFG chat (LFG appears in 266 Suggestions/General posts,
mostly debating whether to merge, split, or filter the channels — e.g. *"World Chat is basically
unusable because of the non-stop torrent of guild and raid group spammers"*
— [Player-0197 (player), 2025-06-27, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=137232#p137232)),
but rarely paste raw logs. The one cluster of literal `[World] [name]: message` lines in the corpus is
a staff ban-appeal response quoting a player's own logs back at them as evidence:

> "Here is a brief snippet of your logs: `[World] [Player-XXXX]: There is a way to block chinese from
> the lft ?` `[World] [Player-XXXX]: They dont understand jackshit even simple english xd`" (two
> further lines omitted here — they escalate to a racist threat and were the reason for the ban)
— [Staff-01 (staff), 2023-08-20, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=58078#p58078)

Format confirmed by this one source: **`[World] [<charactername>]: <message>`**, one line per chat
message, no timestamp. This is the only literal evidence of the `[World]` tag; `[General]`,
`[Trade]` and `[LookingForGroup]` as literal bracket tags are **not found in sources** — bots should
treat those three as vanilla-baseline conventions (not confirmed on Turtle specifically) rather than
invent a "confirmed" format for them.

## 6. Tone by context

- **Help & Support (forum 3, n=16,655, median 36 words):** plain, factual, often first-person-singular
  problem statements ("I first crashed 20 minutes ago..."), few emotes, frequent apologies for being
  new or non-native ("sorry if this has been asked before").
- **Suggestions/rant register (forum 14, n=61,143, the single biggest forum in the archive):** longer
  (many multi-paragraph posts), heavy on nested quote-reply chains (`> **Name wrote:** > > **Name2
  wrote:**...`), first-person opinion framing ("I really think...", "In my opinion/experience...").
- **Guild post register:** see §4 — either terse-factual or lore-voiced, almost never uses the nested
  quote-chain style of Suggestions.
- **Hardcore death-story register (forum 37, n=2,217, median 52 words):** mix of matter-of-fact
  ("any death = death" — [Player-0198 (player), 2023-04-07, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=40635#p40635))
  and long emotional post-mortems; staff replies here are notably blunt/unsentimental
  (§8, imperfection catalog carries more Hardcore examples).

## 7. Message length by forum (word count, `content_md.split()`)

| Forum | n | mean | median | p90 | max |
|---|---|---|---|---|---|
| General (4) | 25,501 | 104.0 | 56 | 240 | 5,325 |
| Help & Support (3) | 16,655 | 60.5 | 36 | 132 | 2,644 |
| Guild Recruitment (23+50) | 1,549 | 73.6 | 33 | 189 | 1,077 |
| Hardcore (37) | 2,217 | 92.4 | 52 | 205 | 3,322 |
| PvP (73) | 3,406 | 142.4 | 90 | 325 | 4,211 |

Trade/LFG one-liners (§2–3) sit far below all of these medians — most are under 15 words. PvP has the
longest typical post (patch-balance arguments run long); Help & Support the shortest (single
problem/question, few pleasantries).

## 8. Typos and lowercase habits

1,314 posts across forums 3/4/37/40/42/45 are **entirely lowercase** (40+ letters, zero capitals) —
about the low single digits of a percent of those forums, but a real and recognizable register,
especially for quick complaints/observations:

> "more class changes ⏎ games too easy ⏎ games too hard ⏎ i just wanted to play new vanilla content
> with the old classes."
— [Player-0157 (player), 2025-11-27, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=160868#p160868)

Heavier typo/panic register, from a distressed new player asking to restore a deleted Hardcore
character (kept verbatim — this is exactly the noise real players produce under stress):

> "haw came that in the middle of stormwind city without war mod glhf i os ganked at lvl31 bay a
> druid having the skin of a tiger i ud sai noring about bat i os HC so what i do naw haw to restore
> character if it is even possible?? [...] can some wan help??? can you ress plizz name of the
> caracter is <char>"
— [Player-0021 (player), 2022-12-27, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=31644#p31644)

Abbreviation frequency (whole corpus, case-insensitive substring counts — note `u`/`ur` are
noisy since they also match inside other words, so treat as upper bounds): `u` **76,203**, `ur`
**38,078**, `ppl` **6,986**, `imo` **2,800**, `ez` **2,566**, `pls` **952**, `thx` **504**, `gz`
**458**, `gj` **402**, `gg` **396**, `imho` **341**, `plz` **332**, `afaik` **265**.

## 9. Emotes and emoticons

Corpus-wide counts: `:)` **3,561**, `lol` **3,199**, `:D` **1,610**, `xD` **1,438**, `lmao` **1,039**,
`:(` **744**, `;)` **616**, `rip` **435**, `rofl` **162**, `o7` **142**. 9,640 posts (≈6%) contain at
least one of the common emoticon/laugh tokens. In-house pseudo-emoji shortcodes also appear inline in
`content_md` from the forum's custom emoji set, e.g. `turtle_tongue_head`, `smiling_turtle_head`,
`angry_turtle`, `crying_turtle_head`, `dead_turtle_head`, `happy_turtle_head` — a Turtle-specific
flourish worth reproducing for in-character bot posts, e.g. *"I am server main tank I am server main
tank angry_turtle pst for ware group tank level 12"* — [Player-0199 (player), 2023-09-17, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=64945#p64945).

## 10. Language mixing

**German forum (f56, n=231):** almost entirely German, short and colloquial, `^^` used like a
softening emoticon:

> "Moin, ich schließe mich der Suche an :)"
— [Player-0023 (player), 2025-08-20, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=147193#p147193)

> "Hey, bei uns kann jeder die Klasse spielen, die er/sie gerne möchte." (reply to "was sucht ihr denn
> aktuell für Klassen?")
— [Player-0024 (player), 2025-02-06, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=119168#p119168)

> "Da wir auf einem englischen Server spielen, gibt es inzwischen von uns sogar ein bisschen was auf
> Englisch zu lesen..." ("since we play on an English server, there's now even a little bit of
> English to read from us...") — a German player explicitly noting the English-first norm they're
> stepping outside of.
— [Player-0026 (player), 2023-03-18, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=38156#p38156)

**Non-native English in the main English forums** (122 posts contain an explicit "my English is
[not good]" disclaimer): players still post in English but flag their fluency level up front, then
continue — this disclaimer-then-continue shape is itself a pattern:

> "haha,not google translated , cause of my english is just soso ,i only can read some book,but i
> donot speak and write english,so .... u can buy a new one."
— [Player-0029 (player), 2023-10-07, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=69303#p69303)

> "my english is not the best but can try." (then a full multi-paragraph economic argument)
— [Player-0030 (player), 2023-02-16, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=34897#p34897)

> "Maybe my English is really bad, but I'll try to tell my vision of the paladin." (then a numbered
> class-rework proposal)
— [Player-0031 (player), 2024-11-08, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=107045#p107045)

Chinese-language snippets also appear inline in Help & Support/General when a player defaults to
their own language mid-thread, e.g. a bug report opening in Chinese before switching to English
politeness markers. Not deeply sampled here — flagged as a **gap**, see §12.

---

## Patterns for bots

- **LFM ad:** `LFM <instance/content> [<class/req filter>] [<day> <HH:MM> <TZ> inv/<HH:MM> start] [loot rule note] [Discord/PST contact]`. Repeat one line per event for a recurring raid schedule.
- **WTS/WTB/WTT ad:** `WT(S|B|T) <item> [<price>g] [/w me]` — no greeting, no sign-off, often followed immediately by an unrelated sentence if cross-posted from a screenshot.
- **Guild recruitment opener:** pick one of three registers — (a) terse stat-card (`Level <N> <faction> <class> (<region>) looking for <casual/semi-hardcore/hardcore> home for <content>. Available <days/times>. Currently at <gear stat>.`), (b) ESL enthusiastic (`Hello everyone, it's <Name>! <Guild> is a guild for <audience>! <bullet traits>. Pls try /who <guild> and PST if interested!`), or (c) RP lore banner (image + **bold guild name** + in-character paragraph + OOC "Guild info" block).
- **New-player social post:** open with "Hey turtle wow peeps"/"Hi there!", state how new/casual you are, ask for "chill people", mention timezone, offer Discord contact — cross-post the *same* text to General and Guild Recruitment if in character as a new player looking for company.
- **Apology-then-continue for non-native English:** one clause disclaiming fluency ("my english is not the best but"/"sorry for my english"), then write the full point anyway without further hedging.
- **Lowercase/typo register:** drop capitalization and punctuation entirely for quick reactive posts; under real distress (character death, being stuck), let phonetic misspellings and run-on sentences pile up rather than being clean.
- **Emoticons:** favor `:)`, `lol`, `xD`, `lmao`, `rip` for casual register; reach for the server's custom turtle-emoji shortcodes (`happy_turtle_head`, `angry_turtle`, `crying_turtle_head`, etc.) in-character rather than standard Unicode emoji.
- **Length by context:** keep Help & Support posts short (median ~36 words, one problem, one ask); let PvP/General opinion posts run long (median 56–90 words, up to multi-paragraph with nested quotes); keep trade/LFG lines under 15 words.
- **Nested quoting:** when replying inside a debate thread (Suggestions/PvP/General), quote the specific line being answered with `> **Name wrote:** <original>` before responding — this is the dominant reply shape in the two biggest forums (14, 4).

## What not to do

- Don't post literal `[World]`, `[General]`, `[Trade]`, `[LookingForGroup]` bracket-tagged lines as if they were confirmed in-game UI text scraped from Turtle — only `[World] [name]: msg` has direct evidence here (§5), and even that comes from a single staff ban-appeal quote, not a first-hand player chat log.
- Don't invent hateful or slur-laden "authentic toxic chat" — the one real example of that register in the corpus is precisely the message that got a player banned for 7 days by staff ([Staff-01, 2023-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=58078#p58078)); reproducing it (rather than referencing that it happened and was punished) would be modeling the exact behavior the server bans for.
- Don't have "new player" bots write in perfect, unhedged English — the corpus shows non-native players consistently flag their fluency ("sorry for my english") rather than silently writing flawless prose.
- Don't mix registers within one message type — a WTS/WTB ad that suddenly turns into a paragraph of guild-recruitment prose, or a Help & Support bug report opened with a full LFM-style schedule block, reads as inauthentic; keep each message type's shape (§2–4) intact.
- Don't over-punctuate lowercase/typo-register posts — real examples drop capitals *and* most punctuation together; adding correct commas to an otherwise-lowercase message is a tell.

## Gaps

- `[General]`, `[Trade]`, `[LookingForGroup]` as literal quoted chat tags: not found in sources.
- Full raw `/1`, `/2`, `/trade` chat transcripts (multi-line back-and-forth): not found in sources — the forum only preserves chat via occasional single-line quotes inside bug/ban reports.
- Chinese-language chat/forum register: present but not deeply sampled in this file (see General/Help & Support Chinese-language posts noted in §10); a dedicated pass would need CJK-aware tooling.
