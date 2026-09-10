# Economy: prices, trading talk, gold sinks and RMT attitudes

Sources: `structured/forum/posts/*.jsonl` (161,896 posts across all 31 forums listed in the task), keyword/regex passes described inline. There is no dedicated "Trade" forum in this archive — trade talk is scattered mainly through **Suggestions (f14)**, **General (f4)**, **Hardcore Lounge (f37)**, **Professions (f33)** and **Itemization (f70)**, plus official notices in **Announcements (f2)** and **Patch Notes (f63)**. Most day-to-day buying/selling happens in-game world chat or Discord, which this archive does not capture directly — forum posts mostly *talk about* trading (complaints, suggestions, price checks quoted from memory) rather than being trade ads themselves. That skews every count below toward discussion, not raw classified-ad volume; noted again in Gaps.

## Frequency snapshot (regex pass over all posts, one pass, case-insensitive)

| Pattern | Posts matching |
|---|---|
| "respec" | 2,538 |
| "boost"/"boosting" (any sense, not just paid carries) | 2,268 |
| "auction house" / "AH" | 1,748 |
| "transmog" | 1,693 |
| "carry"/"carrying" | 964 |
| RMT / gold buying / gold selling wording | 859 |
| A `\d+g`, `\d+ gold`, or `\d+g\d+s\d+c` price token appears in the post | 1,211 |
| "mount" near a gold amount / "epic mount" / "riding skill" | 246 |
| "gold making" / "gold per hour" / "farming spot" | 229 |
| "gold sink" (literal phrase) | 194 |
| "guild bank" | 145 |
| "undercut(s/ting)" | 62 |
| WTB | 40 |
| C.O.D. | 36 |
| PST | 32 |
| "Gaston" (the item-restoral NPC) | 18 |
| WTS | 16 |
| "haggl-" | 7 |
| WTT | 3 |

WTS/WTB/PST/C.O.D. are rare in absolute terms (16–40 posts each) precisely because they're chat/Discord phrasing; almost every hit found is either (a) a genuine trade line quoted inside a forum post, or (b) a meta-complaint about world-chat spam ("filter out WTS/WTB"). Both are useful for a bot: they show the phrasing AND how other players react to it.

## How players phrase buying and selling

Real trade-chat phrasing, quoted verbatim inside forum posts (drama/gossip threads mostly, since raw trade spam isn't kept):

- **WTS with price, `>` as separator, bought-price bragging:** "WTS>Spellshock Leggings 650g" — [Player-0004 (player), 2023-06-17](https://forum.turtlecraft.gg/viewtopic.php?p=50355#p50355), in a thread about a ninja-loot dispute ("Praise be 650g!").
- **WTT (want-to-trade), terse, no punctuation:** "WTT edgies for Trade Title /w me" — [Player-0007 (player), 2022-01-11](https://forum.turtlecraft.gg/viewtopic.php?p=15646#p15646); "WTT elusive bank bush for a Guild Bank." — [Player-0008 (player), 2025-07-27](https://forum.turtlecraft.gg/viewtopic.php?p=141642#p141642).
- **PST (please send tell) attached to a group-forming line, not just trade:** "LF3M for UBRS (Flask reserve) Need tank and dps Pst Summons available" — [Player-0289 (player), 2025-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=123076#p123076).
- **Filtering WTS/WTB out of world chat is a recurring player habit**, described approvingly: "I installed an addon that would highlight messages containing specific expressions... It also had a setting to block messages containing specific expressions. Filtering out stuff like 'WTS', 'WTB' and 'pumper' made world chat much more manageable" — [Player-0106 (player), 2023-09-06](https://forum.turtlecraft.gg/viewtopic.php?p=61179#p61179); "Me, I just filter World Chat so only LFT, LFG, WTS & WTB get through." — [Player-0299 (player), 2024-10-31](https://forum.turtlecraft.gg/viewtopic.php?p=105696#p105696).
- **Haggling is expected but low-key ("whisper for the price"):** "You could advertise the basic and whisper for the haggling the price." — [Player-0091 (player), 2018-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=1191#p1191).
- **Undercutting gets talked about with irritation/humor, not procedure:** "Time to rp a black market salesmon that undercuts the greedy cartel auctions lol." — [Player-0283 (player), 2022-07-02](https://forum.turtlecraft.gg/viewtopic.php?p=19545#p19545).
- **C.O.D. abuse is a known scam vector** ("hostage listings"): "After being victim of players asking to buy items cod, only to intentionally not accept, thus keeping said item hostage for 30 days, I'd like to propose making a change to the way cod works... Give the player who sends cod the option to cancel the cod mail, if the other player hasn't accepted it." — [Player-0278 (player), 2024-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=97317#p97317).
- **AH price-anxiety talk is common even without a formal "price check" phrase** — no post in the archive uses the literal phrase "price check"; players instead post live AH numbers directly (see item table below) or complain about their listings being undercut back down.

## Gold-making methods players report, with numbers

- **Dungeon farming rate quoted directly:** "The raw gold from a round (<1hr) of DM runs is not actually all that high (~40g/hr), and is probably only around double how much raw gold you would get from open world f[arming]" — [Player-0284 (player), 2024-01-24](https://forum.turtlecraft.gg/viewtopic.php?p=85785#p85785), discussing Dire Maul "Lasher farms."
- **Hardcore-mode grinding-route rate:** "[After a described 18-step questing/farming loop] Selling everything along the way. At the end of which you should be sitting on about 4-5 gold." — [Player-0102 (player), 2022-07-04, Hardcore Lounge](https://forum.turtlecraft.gg/viewtopic.php?p=19673#p19673).
- **Herb/alchemy transmute income:** "Alchemie has arcane bars transmute for free 5-10g every second(?) day. Similiar tailors get moon cloth and leatherwork get cured rugged hi[de]" — [Player-0221 (player), 2022-09-14](https://forum.turtlecraft.gg/viewtopic.php?p=25022#p25022). A separate report gives a lower, steadier rate for the same transmute: "arcanite bar xmutes go for around 5g per 2 days, or 2.5g per day" — [Player-0285 (player), 2023-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=35471#p35471).
- **Crafted-goods micro-business, priced per item:** "Belt buckles in world chat are sold: 10 int 68g / 6 agility 20g (mats cost 12s25c + 15s58c*8 + 55s20c*2 + 12s53c = 2g59s82c)" — [Player-0155 (player), 2023-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=77988#p77988).
- **Profession-leveling cost as a "gold sink you pay once":** two 2019 guides give concrete costs to level a profession from scratch, e.g. Tailoring 1–300 needs "8 stacks Linen Cloth, 10 stacks Wool Cloth, 38 stacks Silk Cloth, 26 stacks Mageweave Cloth, 45 stacks Runecloth, 12 stacks Rugged Leather... and of course money to buy the coarse thread, rune thread, dye etc. But that's less than 50 gold" — [Player-0276 (player), 2019-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=2120#p2120); Mining enchants "shouldn't cost you more than 2g" — same author, [same day](https://forum.turtlecraft.gg/viewtopic.php?p=2118#p2118).
- **A crafter reports actively speculating/reselling as a business model:** "I focus on crafting and quests. Every day, I buy 500–1000 gold worth of materials and turn them into finished goods for the auction house." — [Player-0275 (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173440#p173440).

## Gold sinks: respec, mounts, guild bank, transmog, Gaston

**Respec cost is the single most stable price in the whole archive: capped at 5 gold, unchanged from at least 2019 through 2026.**

| Date | Author (authority) | Statement |
|---|---|---|
| 2018-10-14 | Player-0277 (player) | "Respeccing for 50g didn't age well imho" — implies an earlier, higher price before the cap |
| 2018-10-16 | Player-0280 (player) | proposes "Respec cost resets back to 1g every month" |
| 2019-03-01 | Player-0293 (player) | "5g is the maximum!" |
| 2019-07-24 | Player-0290 (player) | "respec cost is capped at 5 gold" |
| 2020-09-19 | **Staff-07 (staff)** | "Current respect costs is 5 gold. Lowering or removal isn't an option." — [source](https://forum.turtlecraft.gg/viewtopic.php?p=7679#p7679) |
| 2021-09-21 | Player-0282 (player) | "Still costs the 5g to respec" |
| 2025-08-09 | Player-0279 (player) | "The resets are capped at 5G, only initial reset is 1G." — [source](https://forum.turtlecraft.gg/viewtopic.php?p=143946#p143946) |

Staff treat this as closed/non-negotiable policy (**staff**, outranks the recurring player requests to lower or remove it).

**Riding skill / mounts:** "the free mount is not quick enough to make the 90 gold ride skill irrelevant" — [Player-0288 (player), 2021-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=12519#p12519) (vanilla-standard 90g riding-skill training; treat as this-server-confirmed by a player, not staff-sourced).

**Guild bank was a long-standing player request, eventually added; early asks priced it around 500g for a first tab:** "I would for starters ask 500 gold for the initial tab and go higher up on the next and have 3 tabs overall" — [Player-0337 (player), 2021-10-09](https://forum.turtlecraft.gg/viewtopic.php?p=12959#p12959).

**Transmog cost/availability was debated for years before being implemented, with suggested prices in the 1–20g range per piece and later real "fashion coin"/token pricing that crashed once supply increased:** "Lofty Gold prices (fancier transmogs like Raid tier pieces for example could maybe cost 1-10 gold depending on tier)" — [Player-0300 (player), 2020-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=5356#p5356); once a token system existed, players noted "the quest price will crash to a much more reasonable 5-8g per buyable xmog token instead of the 15-20g we have now" — [Player-0285 (player), 2022-09-11](https://forum.turtlecraft.gg/viewtopic.php?p=24859#p24859).

**Gaston** is the in-game NPC ("Trash Collector Gaston") that restores accidentally-destroyed items for a fee — a targeted gold sink. Its exact location was disputed by players (Ratchet per the rules text vs. Undercity per the in-game NPC data) — [Player-0295 (player), 2023-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=42511#p42511) — and it was pulled and later restored as a feature: "Gaston has been reintegrated into the game. Destroyed items restored by Gaston will now be soulbound." — [**Staff-07 (staff)**, patch note, 2023-12-12](https://forum.turtlecraft.gg/viewtopic.php?p=80839#p80839).

## Gold buying/selling (RMT) attitudes

Staff position is unambiguous and repeated across years — **staff statements outrank the player claims below them**:

- "We are very aware of the impact RMT can have on a server, and we plan to continue addressing it and preventing our economy from falling victim to these pests." — [**Staff-01 (staff)**, 2023-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=40041#p40041)
- "When a player is caught participating in RMT, they are banned for two weeks, their gold is all removed (including what they had earned legitimately), and they are flagged. Their account will be monitored closely going forward... Very few players reoffend, thankfully." — [**Staff-01 (staff)**, 2023-08-09](https://forum.turtlecraft.gg/viewtopic.php?p=56582#p56582)
- "We are currently banning hundreds of bots daily, and the best action you can take is to report them to the GMs when you spot them." — [**Staff-07 (staff)**, 2023-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=64931#p64931)
- "Here on Turtle WoW, we have never allowed RMT. With this, we have also forbidden systems such as **GDKP**... a number of groups have been forming 'TDKP' (tithe-DKP) runs... This sort of system **is not** allowed." — [**Staff-01 (staff)**, 2024-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=86419#p86419)

Player sentiment is mostly aligned with (or resigned to) this policy, and connects it directly to raw-material inflation: "Cheaper consumables mean more players can afford them. That removes temptation of buying gold for real money which is a plague on official servers. Turtle WoW's policy is to get rid of any RMT outside from donation store" (**player claim**, characterizing staff policy — not itself a staff quote) — attributed inside a reply by [Player-0281 (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171739#p171739), who then notes the policy doesn't stop demand: "People still pay for pvp boosting services, leveling services. If someone wants to buy gold, they still buy gold. The point of buying gold is so you don't have to farm it." Read together: staff ban RMT and actively enforce it (bans, gold removal, bot-banning), while players report the temptation/demand persists regardless (**contested** — staff describe enforcement as effective ("very few players reoffend"), this player describes demand as undiminished; both dated, both cited).

Paid carries/boosts are discussed almost entirely in the abstract ("people pay for boosting services") rather than as classified ads with numbers — consistent with there being no Trade forum in this archive; concrete boost/carry pricing is not found in these sources (gap, see below).

## Most-mentioned priced items, with example prices by year

Herb/reagent prices are the best-populated item price series in the archive because Alchemy-consumable inflation was a running community argument, especially 2023–2026. Counts are regex mentions of the item name anywhere in a post (not necessarily always with a price); the "$/herb" figures below are direct quotes, not computed averages, and the archive's own numbers are noisy (an AH snapshot post can list a dozen items at once) — treat single quotes as data points, not a certified market index.

| Item / service | Mentions (all-time) | Example price quotes by year |
|---|---:|---|
| Black Lotus | 323 | 2021: "shooting through the roof... 20g+ per stack" ([Player-0067](https://forum.turtlecraft.gg/viewtopic.php?p=14497#p14497)); 2023: "over 30g ea" ([Player-0018](https://forum.turtlecraft.gg/viewtopic.php?p=67857#p67857)) / "33g each" ([Player-0292](https://forum.turtlecraft.gg/viewtopic.php?p=80494#p80494)); 2024: "49g / herb" ([Player-0298](https://forum.turtlecraft.gg/viewtopic.php?p=90462#p90462)) / weekly AH-scan average "40g 22s (-4g)" ([Player-0155](https://forum.turtlecraft.gg/viewtopic.php?p=91024#p91024)); 2025: "21-23g" ([Player-0287](https://forum.turtlecraft.gg/viewtopic.php?p=141804#p141804)) but also a "740g for a full stack" outlier listing reported the same year ([Player-0297](https://forum.turtlecraft.gg/viewtopic.php?p=152946#p152946)) |
| Arcanite Bar | 86 | 2023: "Paying 30g+ for an arcanite bar is a lot" ([Player-0221](https://forum.turtlecraft.gg/viewtopic.php?p=55964#p55964)); 2024: "Arcane Crystals and Arcanite Bars have gone from 30g on the AH to 50 or 60" ([Player-0274](https://forum.turtlecraft.gg/viewtopic.php?p=87955#p87955)) |
| Elixir / Flask (raid consumables) | 108 / 104 | 2024-03-21 weekly AH-scan average, quoted verbatim: "Flask of the Titans 95g26s (-4g95s); Flask of Distilled Wisdom 72g57s (-1s); Flask of Supreme Power 76g (-3g15s); Elixir of Mongoose 9g42s (+20s); Greater Arcane Elixir 3g89s (+44s); Elixir of the Sages 3g84s (-1g81s)" ([Player-0155](https://forum.turtlecraft.gg/viewtopic.php?p=91024#p91024)) — the same post also lists Gromsblood 1g15s and Mountain Silversage 2g3s, showing how players self-report whole-market snapshots, deltas included |
| Riding Skill (100% ground mount training) | 30 | 2021: "90 gold ride skill" ([Player-0288](https://forum.turtlecraft.gg/viewtopic.php?p=12519#p12519)) |
| Respec (talent reset) | 2,538 posts mention "respec" | Capped at 5g, 2019–2026 (see table above) — the most stable price in the archive |

## What not to do (drawn from complaints in these sources)

- Don't send C.O.D. mail as a bargaining tactic and then not accept it — players call this out as griefing/market manipulation ([Player-0278 (player), 2024-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=97317#p97317)).
- Don't assume a literal "price check" phrase is idiomatic here — it never appears in the archive; players just post the number they saw on the AH.
- Don't treat gold buying/selling as a gray area — staff describe it as against the rules with real, applied penalties (two-week ban + full gold confiscation, including legitimately-earned gold).
- Don't propose lowering or removing the 5g respec cost expecting staff to reconsider — it has been explicitly closed as "not an option" since at least 2020.
- Don't post raw WTS/WTB spam expecting a positive reception on the *forum* — the only forum threads that discuss WTS/WTB are complaints about it cluttering world chat, not classified sections (there is no trade subforum to post it in).

## Patterns for bots

1. **Trade offer template (world-chat register, observed style):** `WTS>[Item Name] [price]g` or `WTB [item], pst offer`. Keep it terse — no please/thank-you, price stated as a bare number + "g".
2. **Group-forming with reserved item + payment note:** `LF[N]M for [instance] ([item] reserve) Need [roles] Pst Summons available.`
3. **Price complaint template:** `[item] is shooting through the roof, we're seeing [X]g+ [unit]` — used by players to open a discussion about AH inflation, not to close a sale.
4. **Respec/gold-sink complaint template a bot can reproduce (and staff will reject):** `Is [Xg] respec/[fee] really necessary? Consider lowering it to [Yg].` — accurate in tone (this is asked repeatedly, 2018–2025) but a bot playing a "staff-aware" veteran should know the reply is always "no, it's capped, not changing."
5. **Selling-fee math flex:** show the mats-cost arithmetic before the sale price, e.g. `(mats cost Ag Bs Cc) → sells for Xg`, mirroring real crafters' posts.
6. **RMT callout template:** `Report gold sellers/bots to the GMs when you see them` — matches actual staff guidance, safe for a bot to repeat verbatim.

## Gaps (not found in sources)

- No literal "price check" phrasing anywhere in the archive.
- No dedicated Trade/classifieds forum, so systematic WTS/WTB ad volume and concrete paid-carry/boost price lists are not captured here — only meta-discussion of them.
- No single canonical, current gold-per-hour figure for "farming" in general; the one dungeon-farm rate found (~40g/hr, Dire Maul) is a single player's self-report, not corroborated.
- No forum thread found describing exact current epic (100%) mount cost on this server (only riding-skill and general "epic mount" cost debate, not a specific confirmed number); vanilla-baseline epic mount cost (100% speed) is commonly 900g, but that is **vanilla baseline knowledge, not from turtlecraft.gg**, and is not confirmed for this server in these sources.
