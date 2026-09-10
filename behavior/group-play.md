# Group Play: Roles, Loot, Pulls and Pacing

This file distills how Turtle WoW players describe pick-up groups, 5-mans and raid pulls in their own words: who does what, how loot gets split, how pulls are called, who gets kicked, and what people complain about. Sources: `structured/forum/posts/*.jsonl` forums 3 (Help & Support), 4 (General), 28 (Raids), 37 (Hardcore Lounge), 40-48 (class forums) and 73 (PvP, for battleground group dynamics). Every username is pseudonymized per `behavior/_aliases.json`; staff keep an authority-visible `Staff-NN` alias.

## Frequency evidence

A regex pass over all 161,896 posts in `structured/forum/posts/*.jsonl` (forums 3, 4, 28, 37, 40-48 unless noted):

| Term | Posts matching |
|---|---|
| `ninja`/`ninja looting`/`ninja'd` | 136 |
| `soft reserve` / `SR` | 76 |
| `MS>OS` (and spacing variants) | 13 |
| `master loot` | 37 |
| `gear score` / `gear check` | 39 |
| `LFT` (forums 3+4 only) | 177 |
| `gogogo` / `go go go` | 3 |
| `votekick` / `vote kick` | 0 (players describe kicking in plain language, not that term) |

Loot-etiquette disputes (ninja looting, soft reserve fairness) are the single most common group-play complaint category in this corpus; pacing complaints ("gogogo") are rare as a literal string — see the Turtle-culture file for the server's dominant "take it slow" framing, which suppresses gogogo-style pull culture in players' own descriptions.

## Role expectations: tank / healer / DPS

Players describe tanking as a job with explicit duties — hold aggro, call pulls, manage cooldowns — and treat DPS/tank shortages as a recurring community friction point.

[Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400) (General, *New in tank role*, pre-1.18.1) lays out unusually concrete tanking etiquette for new tanks, worth quoting at length as a template:

> "When in doubt, communicate with your healer. Are you taking too much damage? Are you too fast? Too slow? Keep your healer happy."
> — [Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400), General, *New in tank role*, pre-1.18.1
> "Use ranged weapons for pulls, when appropriate. You can often reduce risk from runners or even split packs by careful pulling instead of charging."
> — [Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400), General, *New in tank role*, pre-1.18.1
> "When in doubt, assign an order for single target killing. [...] I normally go by the rule "if it has a manabar, kill it first"."
> — [Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400), General, *New in tank role*, pre-1.18.1

A chronic tank shortage is a named community complaint, with players blaming levelling warriors who refuse to spec or play tank stance:

> "You're not finding any tanks because people like you are the problem. I'm tired of those leveling warriors that refuse to tank. Until lvl 60 there are no excuses and you can tank without any problems on dps spec. I'm a main tank (warrior) myself."
> — [Player-0134 (player), 2023-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=64636#p64636), General, *How can the server have 8 billion people but getting a group is a nightmare?*, pre-1.18.1
> "I dont even tank at 60, im free to play how i like. Its not my fault game devs make it more fun to dps than tank."
> — [Player-0135 (player), 2023-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=64686#p64686), General, *How can the server have 8 billion people but getting a group is a nightmare?*, pre-1.18.1

Raid loot etiquette threads treat the main tank's gear priority as understood community convention even when not written down:

> "...although shouldn't there be an exception for the main tank automatically getting certain tanking pieces? I think that's generally understood, but it might be nice to have it be official."
> — [Player-0245 (player), 2019-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=4312#p4312), Raids, *Raid Loot Distribution System*, pre-1.18.1

## Loot etiquette

Turtle WoW has no single server-wide loot system; groups negotiate need/greed, soft reserve (SR), "MS>OS" priority and hard reserve (HR) ad hoc, and disputes over these rules are the most-cited group-play friction in the corpus (136 posts mention "ninja", 76 mention "soft reserve"/"SR").

**Soft reserve (SR).** A guild-run raid (Player-0088, Thunder Ale) proposed the system that became the community default, later widely copied by other raids and PUGs:

> "All players can have 1 (one) item soft reserved per raid and it must be declared at least 6 hours before the start of the raid... MS Roll means you should roll for items that fit your Main Spec... OS Roll will happen if nobody rolls for their Main Specs."
> — [Player-0088 (player), 2020-05-26](https://forum.turtlecraft.gg/viewtopic.php?p=6125#p6125), Raids, *Soft Reserve*, pre-1.18.1

SR is contested precisely because it can be gamed — reserving a late-boss item while still rolling need on everything earlier:

> "For example, it is in the best interests of any player who does not need a specific item from an earlier boss... to opt for a later-boss item as their choice of reserved item. [...] It would be pointless for them to reserve earlier gear since it can be won anyway with no consequences."
> — [Player-0090 (player), 2020-06-13](https://forum.turtlecraft.gg/viewtopic.php?p=6353#p6353), Raids, *Soft Reserve*, pre-1.18.1
> "No, there is nothing stopping you from reserving Band of Accuria, OS rolling everything else in the dungeon then capping that prized piece of loot off Rag except ETIQUETTE."
> — [Player-0092 (player), 2020-09-09](https://forum.turtlecraft.gg/viewtopic.php?p=7530#p7530), Raids, *MC Loot Reserve: Working as intended?*, pre-1.18.1

A raid-leader-forced SR change mid-raid produced one of the largest loot-etiquette dramas in the corpus (200+ people reportedly in the raid's voice channel):

> "about to openning Firemaw, the leader suddenly demand me to change my sr [...] I refused again... my friend and I were kicked out of the raid, then they shut down people's mic, no one can express their opinions anymore."
> — [Player-0158 (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=114918#p114918), Help & Support, *They  forced me to change my sr during the raid, I refused,then I got kicked*, pre-1.18.1
> "Once a SR is set in stone at the beginning of a raid that's it, it shouldn't be able to be changed."
> — [Player-0159 (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=115062#p115062), Help & Support, *They  forced me to change my sr during the raid, I refused,then I got kicked*, pre-1.18.1
> "SRs should always be checked and locked in before the fiest boss goes down!"
> — [Player-0149 (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=114938#p114938), Help & Support, *They  forced me to change my sr during the raid, I refused,then I got kicked*, pre-1.18.1

**"MS>OS" / master loot rules.** PUG raid posts spell these out explicitly in their sign-up threads:

> "Loot rules are as follows: MS +1 then OS. No soft reserves. [...] BoP Epics that no one needs for MS / OS will be disenchanted and given to the <guild> guild bank."
> — [Player-0100 (player), 2022-08-24](https://forum.turtlecraft.gg/viewtopic.php?p=23383#p23383), Raids, *<Chosen> hosted Molten Core seeking raiders - August 25th, 9PM est / 2AM server.*, pre-1.18.1
> "If a lot of people already use HR>SR>MS>OS system, then I think it is good idea to automate it via addon."
> — [Player-0155 (player), 2024-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=107641#p107641), Help & Support, *Reserving items in Group Finder*, pre-1.18.1
> "In raids where Master Looter mode is enabled, for a short period of 10 minutes after the boss has been defeated, all raid members will have a claim on the item and can receive it via trade, provided they were present during the boss kill, have not left the raid map, and share the same raid ID."
> — [Staff-02 (staff), 2023-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=52210#p52210), Help & Support, *Accidental loot of petrified leaf by raid master*, pre-1.18.1

**Ninja-looting accusations** are the most common loot complaint by raw count (136 matches). A guild-vs-PUG dispute thread ("BELUGA is the LOOT STEALERS Guild") shows the full accusation pattern: contested definition, screenshots as evidence, threat to report the guild:

> "I went to Hateforge Quarry 15 times yesterday. I just need the trinket and this recipe from there. [...] some liar steals it from me! [...] If the administration does not punish you, I will do so. I will tell about you in our guild so that they kick you from everywhere."
> — [Player-0112 (player), 2023-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=40093#p40093), Help & Support, *BELUGA is the LOOT STEALERS Guild*, pre-1.18.1
> "I wrote to the Beluga Guild Master. He replied "It's not ninja looting because another guild officer put this recipe in the Guild Bank.""
> — [Player-0115 (player), 2023-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=40147#p40147), Help & Support, *BELUGA is the LOOT STEALERS Guild*, pre-1.18.1
> "That's not really a "ninja loot". If you wanted to reserve the item, it should have been clearly indicated at the start of the run and confirmed right before initiating combat. [...] If you're still salty, just add him to your tanking shit list."
> — [Player-0125 (player), 2023-06-12](https://forum.turtlecraft.gg/viewtopic.php?p=49824#p49824), Help & Support, *Ninja loot*, pre-1.18.1

GDKP (gold-based loot) is **banned by rule**, distinguishing Turtle's group-loot culture from other private servers — see `behavior/guild-and-raid-culture.md` for the staff ruling.


## Pull and marking conventions

Explicit pull-marking threads (raid-mark icons, CC assignment callouts) are rare as free text in the corpus; the clearest description comes from the same tanking-tips thread quoted above:

> "Letting dps do some CC spices up their game and makes your job easier. [...] You can also Line-of-sight-pull ranged mobs and gather them up behind some obstacle for easier AE."
> — [Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400), General, *New in tank role*, pre-1.18.1

A raid-design thread on Molten Core praises the original crowd-control assignment culture as something the community values and misses when content skips it:

> "It was a tightly choreographed dance requiring perfect CC assignments, precise positioning, and flawless execution from every single player."
> — [Player-0249 (player), 2025-08-27](https://forum.turtlecraft.gg/viewtopic.php?p=148757#p148757), Raids, *Let's Discuss the Molten Core Rework & The Soul of Vanilla WoW*, pre-1.18.1

**Gap:** we found no forum threads using standard raid-marking vocabulary (skull/cross/square icon call-outs) as etiquette discussion — mark icons are assumed addon/UI knowledge, not something players write guides about. Marked as **not found in sources**.


## Kick / interrupt assignments

No thread in the sampled forums documents a formal interrupt-rotation assignment convention (**not found in sources** — Turtle's small dungeon/raid roster and lack of dedicated theorycraft subforum for interrupts means this is passed peer-to-peer, not written up). Kicking, by contrast, is well documented as a loot- and performance-enforcement tool:

> "The raid leader hard reserved the T2 Judgement Helm... When a PUG mage joined and SRd Formula: Enchant Chest - Greater Stats, he was kicked from the group shortly before the pulls."
> — [Player-0165 (player), 2025-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=121977#p121977), General, *Accountability General*, pre-1.18.1
> "I remember a number of hunters kicked from raids (and guilds) for running out of bullets/arrows. Quite embarrassing, especially when word gets out to the server you're on."
> — [Player-0170 (player), 2025-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=134695#p134695), Hunter, *arrows and bullets*, pre-1.18.1
> "If you ever queue with him again just give him a nice insta kick from the party. DPS are easily replaceable, don't be afraid to reserve items in the future."
> — [Player-0125 (player), 2023-06-12](https://forum.turtlecraft.gg/viewtopic.php?p=49824#p49824), Help & Support, *Ninja loot*, pre-1.18.1
> "I'm getting kicked from groups for not having the absolute pre raid BIS gear for every item. [...] Now people are Gear checking, and doing gear scores FOR MOLTEN CORE. The easiest tier 1 raid."
> — [Player-0176 (player), 2026-01-17](https://forum.turtlecraft.gg/viewtopic.php?p=165399#p165399), General, *Toxic gamers*, 1.18.1-announced-pre-release

## Pacing: "gogogo" vs careful play

The literal string "gogogo" is rare (3 hits server-wide); Turtle's dominant self-description is the opposite — "take it slow" appears 41 times and is treated as server identity, not just dungeon pacing (see `behavior/turtle-culture.md`). Where pacing is discussed in a group-play context, players frame speed as a tank/leader-controlled variable:

> "Are you taking too much damage? Are you too fast? Too slow? Keep your healer happy."
> — [Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400), General, *New in tank role*, pre-1.18.1

One player contrasts Turtle's pacing explicitly against retail/FFXIV's rush culture as a selling point, not a complaint:

> "FFXIV has a great MSQ, don't get me wrong, but it's all GO GO GO! 32 hot keys, one shot mechanics etc. This is the total opposite, and I wish there was a way to convey [...]"
> — [Player-0093 (player), 2020-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=8184#p8184), General, *I Haven't Had This Much Fun In Years!*, pre-1.18.1

## Leaving / being kicked

Beyond loot-driven kicks (above), players describe leaving groups over undergeared members, AFK behavior, and slow performance. Bring-your-own-gear expectations are treated as baseline:

> "I've seen people with tier2 not enchanted. There's a reason many raiders perform so bad dps-wise."
> — [Player-0080 (player), 2020-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=5978#p5978), Raids, *Veteran vs Newbie Raid Loot Issue*, pre-1.18.1
> "If i was a healer i would have already left the raid because the expectation of being limited to tier1 is utter crap. It`s slowing us down."
> — [Player-0080 (player), 2019-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=4382#p4382), Raids, *Raid Loot Distribution System*, pre-1.18.1

## Common complaints about bad players (what NOT to do)

Recurring player complaints, useful as negative examples for bot behavior:

- **Ninja looting / undeclared reserves** — rolling need without stating intent first ([Player-0112 (player), 2023-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=40093#p40093), [Player-0115 (player), 2023-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=40147#p40147)).
- **Gaming soft reserve** — reserving a late/rare item while still need-rolling everything earlier ([Player-0090 (player), 2020-06-13](https://forum.turtlecraft.gg/viewtopic.php?p=6353#p6353)).
- **Showing up undergeared/unenchanted to raids** — tier gear with no enchants, blamed for poor raid DPS ([Player-0080 (player), 2020-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=5978#p5978)).
- **Running out of consumables mid-run** — hunters out of ammo, no potions/food ([Player-0170 (player), 2025-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=134695#p134695)).
- **Refusing to fill the tank role while leveling**, worsening group-finding for everyone ([Player-0134 (player), 2023-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=64636#p64636)).
- **Gatekeeping with excessive gear checks/gearscore** for easy content ([Player-0176 (player), 2026-01-17](https://forum.turtlecraft.gg/viewtopic.php?p=165399#p165399)).
- **Changing agreed-upon loot rules mid-raid** to favor a clique ([Player-0158 (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=114918#p114918), [Player-0165 (player), 2025-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=121977#p121977)).


## Dungeon-finder / LFT etiquette

Turtle WoW ships a custom "Looking For Turtles" (LFT) group-finder addon/tool (177 posts mention "LFT" in forums 3+4, almost all bug reports or how-to questions rather than etiquette discussion — **etiquette content itself is thin in sources**). What etiquette discussion exists concerns loot reservation inside LFT-formed groups and Hardcore-status incompatibility:

> "If you were informed before the dungeon, then I think it is fine. You can quit. You can reserve some item for yourself."
> — [Player-0155 (player), 2024-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=107641#p107641), Help & Support, *Reserving items in Group Finder*, pre-1.18.1
> "Looking for turtles doesn't consider hardcore status of players. It means that if LFT finds enough people and some of them is hardcore, when group will not be arranged."
> — [Player-0155 (player), 2022-09-25](https://forum.turtlecraft.gg/viewtopic.php?p=26138#p26138), Help & Support, *LFT+HC*, pre-1.18.1
> "When someone invites me to a group, it removes the LFT. No, I don't accept. But the LFT is canceled anyway. This is a problem. Because I am again to the end of the queue."
> — [Player-0112 (player), 2023-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=39630#p39630), Help & Support, *Invite cancels LFT*, pre-1.18.1

## Patterns for bots

Concrete, reusable behaviors a bot can follow:

1. **Declare loot intent before pulling.** If planning to need/reserve an item, say so in party/raid chat before combat starts, in the form `<item name> - reserving/need for <spec>`. Never roll need on an item without having said this first.
2. **Lock in a soft reserve before the first pull and don't change it.** If asked to change an SR mid-raid, treat it as a fairness violation and say so, citing [Player-0159 (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=115062#p115062)-style reasoning ("SR should be locked before pulls start").
3. **As tank: check in with the healer periodically** (`you good on mana?` / `want me to slow down?`) rather than pulling on a fixed timer — mirrors [Player-0106 (player), 2022-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=29400#p29400).
4. **As tank: call kill order** for mixed packs, prioritizing casters/healers ("if it has a mana bar, kill it first").
5. **Come prepared**: full consumables (ammo, potions, food, flasks for raid), appropriate enchants. State readiness ("got repairs+consumes, ready") before a pull, mirroring the community's complaint pattern about the opposite ([Player-0170 (player), 2025-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=134695#p134695), [Player-0080 (player), 2020-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=5978#p5978)).
6. **When a dispute happens, cite server rule/etiquette rather than personal accusation** — the community norm is to appeal to the agreed loot rule, not to insult ([Player-0125 (player), 2023-06-12](https://forum.turtlecraft.gg/viewtopic.php?p=49824#p49824)).
7. **In LFT/PUG groups, state loot intentions immediately on group formation**, not at the loot window ([Player-0155 (player), 2024-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=107641#p107641)).


## What not to do

- Do not roll need on an item without declaring intent first (ninja-loot pattern).
- Do not silently reserve a rare/late item while need-rolling everything earlier.
- Do not demand a loot-rule change mid-raid, especially not via a rigged "vote" among guildmates.
- Do not show up to group content without repaired gear, consumables, or basic enchants.
- Do not refuse to fill a needed role (tank/healer) while leveling if capable, without explanation — this is a named community friction point.
- Do not gatekeep easy/farm content with excessive gear-score demands.
- Do not spam "gogogo"-style pressure; Turtle's culture rewards a measured pace.


## Gaps

- No sourced etiquette thread on raid-mark icon conventions (skull/cross assignment) — **not found in sources**.
- No sourced interrupt-rotation assignment convention — **not found in sources**.
- "Votekick" as a literal mechanic/term does not appear in the sampled corpus (0 matches); kicking is described in prose, not as a named UI feature.
