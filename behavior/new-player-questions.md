# New-player questions

Part of the player-behavior corpus (part A). Source: a Python keyword-pattern pass over
`structured/forum/posts/*.jsonl`, restricted to Help & Support (forum 3, n=16,655), General
(forum 4, n=25,501), the nine class forums (40–48, n=16,457 combined), AddOns (forum 18, n=4,302,
for addon questions) and Hardcore (forum 37, n=2,217, for hardcore-rule questions). Usernames
pseudonymized via `scrape/pseudonymize.py`. Machine-readable twin:
`behavior/new-player-questions.jsonl` (46 examples, opening questions and veteran replies together
so the request/response shape is preserved).

**Method note on counts.** Each count below is "posts in the relevant forum(s) whose `content_md`
matches a hand-built regex for that question family" (e.g. `where (is|can i find|do i find|are)` for
"where is X"). This undercounts phrasing the regex doesn't anticipate and can double-count a
post that touches two topics; treat counts as **order-of-magnitude, not exact**, and prefer the
quoted examples as the ground truth for phrasing.

## Category counts

| Category | Matched posts | Forums searched |
|---|---|---|
| Client / launcher issues | 1,117 | Help & Support, General, Classes, AddOns |
| Turtle-specific feature questions (transmog, housing, customization, class quests, racial mounts...) | 761 | same |
| Addon questions | 504 | same |
| "Where is X" (NPC/zone/quest location) | 301 | same |
| Transmog specifically (subset of the feature bucket) | 182 | same |
| Hardcore rules questions | 71 | Help & Support, General, Hardcore |
| Which-class-should-I-play questions | 14 (narrow phrasing) – 31 (looser phrasing) | Help & Support, General, Classes |
| Which-profession questions | 28 (broad "profession" mentions) – 12 (narrow "which/what profession" phrasing) | same |
| Guild quarters / player housing | 24 | Help & Support, General |

For scale: **1,117 client/launcher hits** out of ~62,900 posts searched is the single largest
question family here — unsurprising, since Turtle WoW ships its own launcher/client outside
Blizzard's, and that launcher changes over time (§1).

## 1. Client / launcher questions

The most common Help & Support problem shape: something about downloading, patching, installing,
or launching the modified 1.12 client fails. Veterans and staff answer briefly, often with a link
or an exact command rather than an explanation:

> "Hello Please get a full updated client from the website. Download links here: [link]. If you want
> to transfer your settings and addons from your old client to a new client, copy your WTF folder and
> addons to your new client. DON'T MERGE THE NEW CLIENT WITH THE OLD CLIENT."
— [Player-0032 (player), 2022-12-24, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=31472#p31472)

> "The backend for the launcher is down. I think you have to edit your realmlist with: `SET realmList
> "salogon.turtlecraft.gg"` `SET patchList "salogon.turtlecraft.gg"`"
— [Player-0018 (player), 2025-04-05, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=125560#p125560)

A recurring sub-thread: Mac/Linux users asking for a native client. Four different veterans answer
the same underlying question ("there is no Mac client") with four different personal workarounds,
none of them official — a good example of community-sourced, non-authoritative answers stacking up
in one thread:

> Q: "Hi, I have a IMac with High Sierra OS. Where are client for this?"
— [Player-0033 (player), 2021-08-06, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=11536#p11536)
> A1: "There is no dedicated MAC client. You have to use Wine or something similar to get it to
> play. I have it working fine under Wine." — [Player-0036, 2021-08-07](https://forum.turtlecraft.gg/viewtopic.php?p=11545#p11545)
> A2 (17 days later): "I use Crossover. Works like a charm." — [Player-0213, 2021-08-28](https://forum.turtlecraft.gg/viewtopic.php?p=11866#p11866)
> A3 (six weeks later): "I installed via Parallels on my M1 macbook air and it runs great." — [Player-0214, 2021-10-10](https://forum.turtlecraft.gg/viewtopic.php?p=12963#p12963)
> A4 (three days after that): a link to an external how-to guide instead of a personal answer — [Player-0215, 2021-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=13027#p13027)

## 2. "Where is X" (NPC / quest / zone location)

New players ask short, single-sentence location questions, almost always answered within hours by a
one-line directional reply — no elaborate guide, just the fastest possible answer:

> Q: "Hello guys new to horde player here. Just got to the crossroads and find this orc quest giver
> looking for his wife. I have spend 3 hours around crossroad town trying to find her. Where is his
> wife go?"
— [Player-0034 (player), 2026-01-14, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=165156#p165156)
> A1 (9 minutes later, joking non-answer referencing a classic-WoW meme about this exact quest):
> "i have bad news for Mankirk, mon" — [Player-0209](https://forum.turtlecraft.gg/viewtopic.php?p=165157#p165157)
> A2 (same day, the actual answer): "Follow the road south, you will find her" — [Player-0211](https://forum.turtlecraft.gg/viewtopic.php?p=165158#p165158)
> A3 (a few hours later, a second veteran adds a landmark so the asker doesn't overshoot): "If you
> come across a village called Camp Taurajo you went too far" — [Player-0212](https://forum.turtlecraft.gg/viewtopic.php?p=165178#p165178)

> "there is a npc can change weaponsmith to armorsmith. where is the npc for tribal leatherworking"
— [Player-0035 (player), 2023-11-05, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=75958#p75958)

Sometimes "where is X" is really "does feature X even still exist" — staff answers those with a flat
correction rather than a location:

> Q: "What is the status of the new starter zone quests for other races? I have done the High Elf
> quests on a Nelf before, and now I am no longer able to do that with another Nelf (lvl 8, neutral
> status). Has that changed, because I do not see documentation on that anywhere..."
— [Player-0036 (player), 2021-08-22, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=11764#p11764)
> A (staff, same day): "You can't do the starting zone for the new races with another race."
— [Staff-08 (staff), 2021-08-22, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=11766#p11766)

## 3. Turtle-specific feature questions

Turtle WoW layers custom systems (transmog, guild housing, character customization, racial variants,
class quests) onto vanilla, and new players — especially ones coming from retail/Classic — ask
detailed multi-part questions about how a system works before committing time to it:

> "Hey so i have a few questions about the Transmog system! How restrictive is it?? Can one transmog
> across armor types? Leather to Plate and vice versa etc? Can a clothie transmog a REAL set of armor
> upon their dress? Can one transmog weapons? And if so is it possible to 1handed to 2handed and vice
> versa? Can a shaman transmog their respective axe/mace into a sword? Any info would help before i
> decide to start getting serious about the fashion coin gathering."
— [Player-0037 (player), 2023-04-01, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=39876#p39876)
> A (next day, one dense paragraph covering every sub-question): "you add items to your transmog
> collection simply by equipping it. Then at fashionist you can use appearance from your collection on
> real item in your inventory slot. Which means you can only use appearances of items you can equip.
> That's it"
— [Player-0206 (player), 2023-04-02, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=40000#p40000)

Guild housing has no official index, so the question "where do I find one" gets answered by veterans
listing what they personally remember, hedged with uncertainty about whether guilds still exist at
those spots:

> Q: "I just joined a wonderful guild that owns a Guild House (Base) and I was wondering if there was
> a master list of all the Guild Houses in Turtle WoW to visit. [...] If there isn't a master list
> somewhere, would some of you mind posting where yours are at so that I can come check them out?"
— [Player-0038 (player), 2022-07-12, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=19921#p19921)
> A1 (same day): "This is all i know, have fun exploring the world. <Guild1> Tirisfal near
> Monastery/Citadel [...] <Guild2> Tirisfal (inactive guild, might have been removed) [...]"
— [Player-0201, 2022-07-12](https://forum.turtlecraft.gg/viewtopic.php?p=19941#p19941)
> A2: "<Macrochelys> is in the mountain in Azshara, not possible currently to reach without a guild
> tabard" — [Player-0067](https://forum.turtlecraft.gg/viewtopic.php?p=19943#p19943)
> A3 (correcting A2): "You can get there on foot" + a YouTube link
— [Player-0205](https://forum.turtlecraft.gg/viewtopic.php?p=19944#p19944)

## 4. Class and server choice

Only a narrow slice of posts literally ask "which class should I play" (14 by strict phrasing, up to
~31 with looser matching) — most class-choice discussion happens inside class-forum threads about a
specific spec's viability rather than a blank "pick for me" post. When it is asked directly, it's
usually framed with the asker's prior-game background and playstyle goals:

> "hey! i want to play a competent healer who also has a useful dps spec. Which class should I
> choose? I played all the healers on Classic/retail.. But with the changes turtle wow brings im
> clueless about what to choose.. please help me out"
— [Player-0040 (player), 2023-07-03, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=52167#p52167)

A closely related and very common new-player question is **which server/realm to roll on**
(Nordanaar vs. Ambershire vs. Tel'Abim), which draws multiple competing one-line veteran
characterizations, some genuinely informative and some just joking/toxic:

> Q: "Sorry for the noob question (new to TWOW from anni/cata retail), I don't really get how
> Ambershire is different from Nordanaar. Which server should I roll on? [...] I'm just casual, ~10
> hours a week. I like doing BGs though so preferably a server that has active BG scene and/or WPVP
> would be good."
— [Player-0039 (player), 2025-11-09, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=158973#p158973)
> A1: "Consider Tel'abim since they do have a BG scene and wpvp going on. [...] think of Ambershire
> as a new server that is still progressing while Nordanaar is the established server with everything
> done on there" — [Player-0208](https://forum.turtlecraft.gg/viewtopic.php?p=159024#p159024)
> A2: a structured comparison paragraph by realm (crossfaction status, gear level, population) — [Player-0142](https://forum.turtlecraft.gg/viewtopic.php?p=159025#p159025)
> A3: "There is only one true pvp realm, with no "[slur-adjacent joke]" interactions between
> factions. TEL'ABIM" — [Player-0209](https://forum.turtlecraft.gg/viewtopic.php?p=159055#p159055)
> A4: "If your endgame is PVP, go Tel Abim. If you want quality raiding, go Nordanaar. If you're on
> the toxic side of playerbase, go Ambershire" — [Player-0210](https://forum.turtlecraft.gg/viewtopic.php?p=159094#p159094)

Inside a class forum, the same "should I play X" question gets answered with viability specifics
rather than vibes:

> Q: "I'm an old player of wow (since 2004) [...] Should I play my usual role: Moonkin? I know that
> on vanilla the moonkin are the worst but there is some changes done on this server to balance that."
— [Player-0041 (player), 2022-08-16, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=22590#p22590)
> A1: "Unless you want to tackle aq40 or naxx you'll have fun as moonkin" — [Player-0138](https://forum.turtlecraft.gg/viewtopic.php?p=22614#p22614)
> Follow-up Q: "What about other druid spec? feral and heal? are they balance? Can we heal in dungeon
> during level up as moonkin?" — [Player-0041, next day](https://forum.turtlecraft.gg/viewtopic.php?p=22686#p22686)
> A2 (answering the follow-up directly): "Feral is the best for leveling, both feral tank and resto
> can perform very good in all content. Dps in feral is average compared to other classes but
> slightly better than balance..." — [Player-0138](https://forum.turtlecraft.gg/viewtopic.php?p=22739#p22739)
> A3 (a third veteran adds a caveat to A1's optimism): "Even then its "okay". It's just like shamans
> that it doesnt scale amazingly well..." — [Player-0207](https://forum.turtlecraft.gg/viewtopic.php?p=22844#p22844)

## 5. Addon questions

Addon requests are usually feature-first ("I want X, what addon does that") rather than name-first,
and a single veteran naming one specific addon by name is the standard answer shape:

> Q: "hello, i never used nameplates, nor addons. id like to try some, so i need a suggestion. what
> addon should i use? some minimalistic addon would be awesome. is it possible to remove blizz
> default frames that appear? [...] ty in advance!"
— [Player-0043 (player), 2023-02-17, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=35049#p35049)
> A (same day): "My go to recommendation for any UI related changes is pfUI <link>. It is a
> comprehensive all in one solution for a complete UI overhaul, but you can turn off all elements
> you do not want in the setting. [...] It offers fantastic nameplates with target debuff support."
— [Player-0200 (player), 2023-02-17, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=35052#p35052)

> "Is there an Addon that actually shows map icons for vendors/trainers/professions/ect.?"
— [Player-0044 (player), 2021-11-20, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=14029#p14029)

## 6. Hardcore rules questions

New Hardcore players ask concrete edge-case rules questions (what happens to my paid tokens, what
counts as death), and the thread often takes several posts and several days to converge on a
correct answer — nobody flags the first reply as wrong, it's just superseded later:

> Q: "My druid is level 28, but I would like to restart in HC Mode. However, I spent few token (200)
> for the dual spec. What happens if I delete the druid myself to restart in Hardcore? will I loose
> the token/dual spec?"
— [Player-0045 (player), 2023-03-29, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=39520#p39520)
> A1 (same day, questions the premise instead of answering): "Why do you want to delete it? Just
> make a new character?" — [Player-0216](https://forum.turtlecraft.gg/viewtopic.php?p=39526#p39526)
> A2 (same day, hedged): "I think you can open an in-game ticket and get your tokens returned [...]"
— [Player-0217](https://forum.turtlecraft.gg/viewtopic.php?p=39527#p39527)
> Follow-up Q: "how do I open an in-game ticket ?" — [Player-0045](https://forum.turtlecraft.gg/viewtopic.php?p=39567#p39567)
> A3 (precise UI steps): "On your action bar you have a little section for Character Info, Spellbook,
> Talents, Quest Log, etc. You're looking for a tab called "Help Request" [...]" — [Player-0217](https://forum.turtlecraft.gg/viewtopic.php?p=39632#p39632)
> A4 (two days after the original question, a third veteran, the actually-correct short answer):
> "When hardcore character die all tokens are refunded." — [Player-0218](https://forum.turtlecraft.gg/viewtopic.php?p=39739#p39739)

A second, more emotionally-loaded hardcore-rules thread type: a player who just died pushing back on
being told to accept a "no resurrection" rule, framed as a quality complaint about the death cause
rather than a rules question — see `behavior/skill-spectrum.md` §2 for the matching "you overpulled,
that's how it is" veteran response.

## 7. Professions

Profession questions are comparatively rare as their own topic (this pass found on the order of a
dozen to a few dozen posts, depending on phrasing strictness) — most profession discussion happens
folded into gearing/leveling threads rather than as a standalone "which profession" post:

> "I'm surprised that arrows can't be made. What profession would best suit it?"
— [Player-0047 (player), 2023-04-12, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=41268#p41268)

## 8. Transmog

182 posts touch transmog; most are rules/mechanics questions rather than requests:

> "Hi all, sorry if this has been asked and answered before but I couldn't find it. Am able to
> transmog plate gear with leather gear appearance? Let's say im a warrior and want to mog my armor
> into leather, is that possible?"
— [Player-0049 (player), 2023-11-21, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=78211#p78211)

Note the recurring "sorry if this has been asked before" hedge — new players in an old, deep forum
routinely apologize pre-emptively for a possible duplicate question rather than searching first.

## 9. Guild quarters / player housing

24 posts. Turtle WoW's guild-housing feature has no official location index (see §3); questions here
skew toward "how does the paid Guild Quarters Deed work" and reactions to its gold cost:

> "My name is Doralo the leader of the Merc Guild Murky Waters. We have a guild house located at
> Hillsbrad Foothills at coordinates 14.2,47.7. [...] Unfortunately our tabard teleport does not work
> to this location."
— [Player-0050 (player), 2023-03-28, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=39360#p39360)

> "3000 gold is just way to much. my guild has been here since year 2 or 3. we are small pve/rp no
> way we can ever afford this. maybe 300 gold would be ok even that is high but at least it can be
> done with casual players."
— [Player-0051 (player), 2025-01-23, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=117696#p117696)

---

## Patterns for bots

- **New-player question opener:** state your background first (previous WoW version, how new you
  are, hours/week), then the actual question — `Hi all, [context about who I am]. [Question]?` — this
  shape recurs across class-choice, server-choice, and feature questions alike.
- **Veteran answer length matches question complexity, not politeness:** a one-line factual question
  gets a one-line answer (directional "where is X", "here's the link"); a multi-part question gets
  one dense paragraph that answers every sub-question in order, not several short replies.
- **First answer in a thread is often wrong or incomplete, and nobody apologizes for it** — the
  correct/complete answer frequently arrives from a *different* player, sometimes days later,
  without acknowledging the earlier miss (§1 Mac client thread, §6 hardcore token thread).
  A bot playing "the veteran who eventually gets it right" should feel free to just answer, not
  reference the earlier wrong answers.
- **Pre-emptive apology hedge:** "sorry if this has been asked before" / "sorry for the noob
  question" is a normal, non-embarrassed way new players open a question in an old forum.
  Don't skip it just because the bot "knows" the forum has a search function.
  - **Location answers stay minimal:** "Follow the road south, you will find her" is a complete,
  satisfactory answer on this forum — don't over-elaborate a where-is-X reply into a full guide
  unless asked for one.
- **Multi-post follow-up shape:** original question -> first (sometimes wrong-premise) reply -> asker
  clarifies or asks the next obvious sub-question -> a veteran (same or different) answers precisely.
  Model this as a 3-5 post exchange rather than a single Q-then-perfect-A pair.

## What not to do

- Don't have veteran bots pile on a new player for "not searching first" — the real corpus shows
  veterans answering duplicate/searchable questions plainly, without scolding, even when the asker
  apologizes for possibly repeating a topic.
- Don't invent an authoritative housing/guild-house index — none exists in the sources; every real
  answer is a personal, partial, hedged memory ("This is all i know...").
- Don't give a fabricated single "official" client-download fix — the Mac/Linux thread shows the real
  community answer is several different personal workarounds (Wine, Crossover, Parallels) with no
  single correct one; don't collapse that into false authority.
- Don't have a bot's first answer in a rules-edge-case thread (hardcore tokens, character deletion)
  be stated with total confidence — real early answers here are hedged ("I *think* you can...") and
  are sometimes wrong; save confident, unhedged phrasing for a bot playing the late, correcting
  reply.

## Gaps

- Exact current (2026) client-download URLs and launcher UI text: not captured here (links point to
  in-forum topic references, not the destination content) — not found in sources at the granularity
  needed to reproduce the launcher's own copy.
- A canonical, complete list of guild-house locations or the Guild Quarters Deed's exact current
  gold price: not found in sources; every source here is a single player's partial/dated claim.
- Class-choice and profession-choice question *volume* is likely undercounted by the regexes used
  (§ methodology note) since most of that discussion happens as embedded remarks inside longer class-
  forum threads rather than as a standalone "which X should I pick" post; a follow-up pass with
  looser matching would sharpen these two counts specifically.
