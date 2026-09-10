# Skill spectrum: new, average and veteran play

Part of the player-behavior corpus (part A). Source: a Python keyword-pattern pass over
`structured/forum/posts/*.jsonl` restricted to General (4), Help & Support (3), Hardcore (37), PvP
(73), Raids (28) and the nine class forums (40–48) — the forums where players describe their own or
others' actual play, gearing and mistakes, as opposed to lore/creative/addon forums. Usernames
pseudonymized via `scrape/pseudonymize.py`. Machine-readable twin: `behavior/skill-spectrum.jsonl`
(19 examples).

**Why this file exists for bot training:** the corpus makes clear that "everyone plays optimally" is
false to how this playerbase actually behaves. A 2025 arrival explicitly contrasts Turtle WoW's
median skill against official Classic Hardcore and calls the difference "incomparable" (§1). Bots
built to look like this community need to *span* a skill range, not cluster at the top of it.

## 1. Players explicitly describing the skill spread

> "Yes, the average player skill is very low here. I've only started here a week ago so it doesn't
> bother me too much yet and I enjoy playing this version for now. I also play Classic Hardcore on
> official (for about 1 year). The difference in players skills/knowledge is incomparable. This might
> be because many players here have never played any other WOW before TWOW, and they don't really
> care. I actually find it amusing and a fun change from a "by the book perfection" every run."
— [Player-0219 (player), 2025-04-21, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=127843#p127843)

A reply in the same General thread reframes the same observation as a *competent-player* skill,
i.e. that adapting to weaker teammates is itself part of "good play", not proof the group is bad:

> "And here is why this is in fact an ego problem and not everyone else sucking. Playing alongside
> weaker players is a skill all in itself. If your tank struggles with more than two mobs, you sheep
> the third. If your group is slow you just match the pace. Way to many people in all games fail to
> realize that playing in a way compatable with your teammates is a skill that has to be trained or
> honed. People who fail to do so arent good players by any metric. Wow is not a difficault game, but
> its a complex one."
— [Player-0149 (player), 2025-04-22, 1.18.1-announced-pre-release](https://forum.turtlecraft.gg/viewtopic.php?p=127997#p127997)

At the other end of the spectrum, a **veteran who has never raided at all** — the raid-readiness bar
itself (described secondhand, quoted inside a nested reply chain) is treated as the reason:

> "I play WoW since 2006, I admit I've never done a raid in my life and after learning what it's like
> and what ti takes, I don't think I will ever do one. A friend of mine who plays here explained me
> the basics - you need to have the best gear from all the dungeons, then you have to spend hundreds
> of Gold to buy some consumables, then do the raid several times, watch videos before that so you
> know what to do at each moment. Then you have to spend 3-4 hours doing the raid itself..."
(quoted two levels deep inside a reply by
[Player-0060 (player), 2024-05-30, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=96015#p96015),
original speaker not independently identifiable in this record)

## 2. Imperfection catalog

Concrete, sourced examples of non-optimal play, organized by the categories the task calls out:

**Ninja-pulling / uncoordinated pulling** — a first-hand account of a Deadmines PUG falling apart
because the DPS kept pulling ahead of the tank and even pulled the boss early via a ninja-looted
chest:

> "tldr: almost died a bunch of times becouse of nubs. im a lvl21 warrior tank, the instance was
> deadmines. for each pack of mobs i was pulling, our lvl 26 warrior dps kept pulling one more. we
> almost wiped twice thanks to him [...]. we found a chest and someone shift+clicked it and ninjaed
> everything right in time to ninjapull the boss too. the healer left me with no heals (the tank)
> twice [...] the healer ragequitted right after the second boss, while flaming and blaming everyone
> else. [...] i will never join another group made of strangers just to die a meaningless death at
> the hands of basic mobs and incompetence."
— [Player-0052 (player), 2023-03-29, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=39603#p39603)

**Ignoring chat / not communicating, bad pulls, ninja looting** — a second, independently reported
bad-tank story with screenshots, same dungeon:

> "Had a tank in a Deadmines run that was ignoring chat and healer calling out OOM. [...] Wiped the
> party at one point [...] Further in the run they Ninja loot/need the Defias Leather mask in a party
> with 2 rogues and then start to not help in fights when mob pulls onto healer/dps. Again not
> speaking/replying to anyone in chat."
— [Player-0053 (player), 2024-12-26, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=114425#p114425)

**Overpulling with fatal consequences (Hardcore)** — the community/rules response to an overpull
death is unsympathetic, framing it as a player error rather than bad luck:

> "You agreed to the rules that included no resurrection *for any reason*. And your reason isn't even
> a bug. You overpulled. People have been killed by actual glitches, like the gryphon in Goldshire or
> the wyvern at Razor Hill malfunctioning, and not been resurrected. That's how it is."
— [Player-0056 (player), 2022-12-21, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=31350#p31350)

Staff give the same "bad pulls happen, plan for them" framing as practical advice rather than a
scolding, including sacrificing a pet rather than the player:

> "Unfortunately, we do not offer revivals under any circumstances. Best of luck in your next life.
> As a HC player, if you have a pet, use them to pull! If it's a bad pull, you can just run and leave
> them to die."
— [Staff-01 (staff), 2023-04-08, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=40743#p40743)

**Not using consumables / undergeared attendance** — named directly as the marker of an unprepared
raider, contrasted with "showing up":

> "Just wanted to point out if someone attends 100% of raids, coming in 50% greens, having pvp spec,
> having no consumables to push barriers, then they shouldn't get veteran status at all."
— [Player-0057 (player), 2020-05-13, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=5959#p5959)

**Wrong spec for content** — same post, "pvp spec" in a PvE raid context is listed alongside
greens and no consumables as a marker of an unprepared player (§ quote above); the class forums
separately show how wide the optimization range gets at the top end — twink BiS spreadsheets broken
down by level bracket:

> "Hey guys, made a 10 & 19 twink BiS List.. will update it if anyone has suggestions. [...] To do
> list: 29/39/49/59 Twink Sets, links to every item..."
— [Player-0058 (player), 2024-06-18, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=97258#p97258)

...against which the realistic, much lower bar that most players actually clear is stated directly
by a veteran giving gearing advice:

> "Most people really only ask for hit cap here, and even that isn't a hard requirement sometimes,
> lawl."
— [Player-0060 (player), 2025-06-01, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=133826#p133826)

**Wrong rank / downranking** is a more nuanced imperfection than the others: downranking (casting a
cheaper low-rank version of a spell) is a *skill-expressive vanilla mechanic*, not simply a mistake —
a new player not doing it is closer to "not yet learned an advanced technique" than "playing wrong".
A shaman leveling-advice post treats downranking Lightning Bolt as expected mana management once
gear is bad and mana is tight:

> "Until you get good gear and alot of spell crit mana will be main issue. So you have to use alot of
> potions and tea, be carefull with chain lightning and sometimes downrank lightning bolt."
— [Player-0222 (player), 2026-04-06, post-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=174156#p174156)

A separate player asks whether the whole downranking mechanic should even exist, underlining that
it's understood as a deliberate, learnable system rather than an obvious "right" way to heal/nuke:

> "Do you guys actually like having to downrank in Vanilla/TBC? I heard the devs never really
> intended for people to be doing that..."
— [Player-0223 (player), 2023-01-27, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=33232#p33232)

**Walking to dungeons / no mount, wrong-terrain deaths** — direct evidence is thin in this corpus
(no post explicitly narrates "I walked to a dungeon because I had no mount"), but a first-Hardcore-
character post shows the adjacent anxiety about dying to mundane movement/terrain rather than combat:

> "This is my first Hardcore on Turtle WoW, I'm trying to mostly maximize my chances at reaching
> level 60 Immortal. [...] Specially on a custom server where I've seen deaths just for walking on
> new terrain and getting fall damage somehow. My biggest fear is to die of natural causes like a big
> fall or stuck underwater."
— [Player-0062 (player), 2022-12-20, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=31223#p31223)

Treat "walking to dungeons specifically because no mount was affordable" as **not found in
sources** at this level of specificity — a gap, not a confirmed pattern (see §4).

## 3. Self-description by skill/experience level

**New-player framing** (117 posts contain an explicit "I'm new/brand new/first time" self-
description in the searched forums) tends to pair the admission with a concrete, sometimes
elementary question:

> "Hi, i've never played classic before )) I've just found out that insignia has different removal
> effects, based on class you're playing. Since it's a private server, do things work as it's
> written in the description of items? [...]"
— [Player-0061 (player), 2024-01-18, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=85119#p85119)

> "I'm also new to TWOW. I have to admit, this is my first private server. I've always avoided
> private servers because they're illegal and always preferred to play on the original versions of
> games. But the idea the developers are presenting here is truly brilliant..."
— [Player-0063 (player), 2025-09-05, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=150340#p150340)

**Veteran framing** (13 posts) is used to lend the poster's opinion authority, often in a
complaint or a class-rework critique, and — notably — non-native English disclaimers appear even
alongside "veteran" self-framing, showing the two traits are independent of each other:

> "Complete bullshit que nearly 6k, and Im a veteran player since 2019 with 3 accounts when only a
> few 100 played on this server yet im stuck now for a few hours to log in...... so no preferential
> treatment i guess"
— [Player-0064 (player), 2023-09-03, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=60629#p60629)

> "I am a main paladin holy player, I have been playing with this class for years since the classic
> [...] as a veteran player I see it unfeasible and inefficient [...]" ... "ps: as you can see my
> native language is not the english i was trying to do the effort to communicate my thought about
> this topic, i hope you guys can understand it"
— [Player-0065 (player), 2024-11-08, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=107042#p107042)

**Anxiety about the skill/gear gap** — a returning/new player worried about being crushed by
long-time veterans in both PvE and PvP at max level, asking veterans to characterize the real
situation rather than assume the worst:

> "My big concern is that I know that the server is on for years now and content keep coming, so I
> am worried how to get to the level of players who have been playing since start of the server. [...]
> Same with PVP [...] I am afraid I wont be able to enjoy it at all as probably everybody is already
> fully geared with the best pvp sets and I will be one shotted. Is this the case?"
— [Player-0066 (player), 2024-11-30, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=110674#p110674)

## 4. Gearing and spec differences by level

The class forums show the honest range directly: a leveling-viability answer that a spec is
"horrendous" for a new/average player until well past level 40, versus a twink-optimization
spreadsheet for players who min-max a *sub-level-60* bracket:

> "Moonkin leveling is horrendous, it's not even really viable at all until well past 40 when you
> have the skills and gear to make it happen. [...] Feral is much better in all ways and is viable in
> raid content when bear and kinda for cat."
— [Player-0067 (player), 2022-08-18, pre-1.18.1](https://forum.turtlecraft.gg/viewtopic.php?p=22731#p22731)

---

## Patterns for bots

- **Skill is a spectrum by design, not a bug** — write some bots that openly under-perform (bad
  pulls, missing consumables, wrong spec for the content, walking into avoidable damage) and have
  other bots react to that the way real players do: mild irritation, unsentimental staff-style
  "that's how it is" responses, or — per §1 — veterans explicitly reframing patience with weak
  players as a skill of their own, not a grievance.
- **Self-description template:** `I'm [new/a veteran] [optional: since <year>/played <other WoW
  version>]. [Question or complaint that follows from that framing]` — new-player framing pairs with
  elementary questions; veteran framing pairs with confident, sometimes harsh class/balance opinions.
- **Downranking and similar "advanced" mechanics should differentiate skill tiers, not be treated as
  universally known** — a new/average bot casts max-rank spells and burns mana fast; a veteran bot
  downranks under mana pressure and explains why when asked (§2).
- **Bad-group narration template:** `<role/level> here, <instance>. <specific other player> kept
  <specific mistake: pulling ahead / not healing / ninja-looting / not responding to chat>. <outcome:
  wipe/near-wipe/quit>.` — model this as a post-mortem complaint, not a request for a rematch.
- **Twink/BiS optimization is a real, sourced extreme** — a small slice of the playerbase tracks
  itemization down to the level bracket (29/39/49/59) and shares spreadsheets; most players, per a
  veteran's own gearing advice, only clear "hit cap, and even that isn't a hard requirement
  sometimes" — bots representing "average" players should land near the second bar, not the first.

## What not to do

- Don't make every bot instantly correct about game mechanics (downranking, hit caps, pull pacing,
  consumable use) — the sourced examples show real players learning these live, sometimes the hard
  way (a dead Hardcore character, a wiped PUG), and staff/veteran responses treat that as normal
  rather than shameful.
- Don't have "new player" bots apologize with total self-deprecation and no pushback — the real
  hardcore-death thread (§2, `p=142521` in `behavior/new-player-questions.md` §6) shows a player who
  accepts the death itself but still argues back against being told to simply "accept" it; new
  players in this corpus have opinions, not just contrition.
- Don't write a ninja-pulling or ninja-looting bot's *own* narration of the event approvingly — every
  sourced instance of this behavior is reported by the *victim* of it, framed as a complaint,
  never as a boast from the ninja-puller's own perspective.
- Don't treat ninja-looting/ninja-pulling problem players as rare outliers requiring elaborate staff
  intervention — in-sources, the community and staff response is short, unsentimental, and mostly
  "that's how the rules are" rather than an escalated moderation event.

## Gaps

- "Walked to a dungeon because they had no mount" as an explicit, self-reported imperfection: not
  found in sources at that specificity — the closest evidence is general Hardcore anxiety about
  dying to terrain/fall damage (§2).
- A systematic breakdown of "average" vs. "veteran" DPS/HPS numbers, attendance rates, or gear score
  by content tier: not found in sources — the corpus gives qualitative self- and peer-description
  (§1, §3) rather than the kind of numeric benchmarking a damage-meter export would provide.
- The original, first-hand author of the "never raided, here's what raid-readiness requires" quote in
  §1 is not independently identifiable from this record — it survives only nested inside another
  player's reply chain (`p=96015`), so authority/context beyond "player" cannot be confirmed.
