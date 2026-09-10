# Drop rates

Drop chances for custom and notably changed items: the numbers staff have stated outright, and the rates players have reported from farming. Structured data: `structured/content/drop-rates.yaml`.

## How to read this file

**Two very different kinds of evidence appear here and they are kept apart:**

1. **Staff-stated rates.** When a staff member writes "increased from X% to Y%" in a changelog, that is the server's configured value on that date. These are authoritative but they are *snapshots* — several items below were changed two or three times.
2. **Player-reported rates.** Almost always an anecdote ("40 runs, never seen it") rather than a measured sample. Where a poster gives a count it is recorded; where they do not, the report is marked as impression only. **No player in this extraction publishes a proper tally with successes and trials for a custom item.**

A third source players lean on — the item database at `database.turtlecraft.gg` — is **not part of this extraction**, and it was offline for part of early 2026 — [Scootiesana (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173839#p173839). Anything traceable only to it is labelled "database value (not extracted)".

**Era markers** follow `synthesis/CONVENTIONS.md`: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 → 2026-03-19), **post-1.18.1** (from 2026-03-20).

---

## 1. Staff-stated drop rates

### 1.1 Gathering and herbs

| Item / source | Rate stated | Date | Source | Era |
|---|---|---|---|---|
| **Black Lotus** additional chance from high-level herbs | baseline **0.5%** | 2023-10-18 | [Jamey (staff), 2023-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=71753#p71753) | pre-1.18.1 |
| **Black Lotus** from Dreamfoil, Mountain Silversage, Plaguebloom, Icecap | **2% → 4%** | 2024-04-23 | [Torta (staff), 2024-04-23](https://forum.turtlecraft.gg/viewtopic.php?p=93361#p93361), clarified [Torta (staff), 2024-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=93396#p93396) | pre-1.18.1 |
| **Black Lotus** and **Arcanite Bar** from *low-level* herbs (e.g. Peacebloom) | **4% Black Lotus, 2% Arcanite Bar** | 2024-04-24 | [Torta (staff), 2024-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=93400#p93400) | pre-1.18.1 |
| **Whip Lasher** (Dire Maul) herb drops — Golden Sansam, Arthas' Tears, Swiftthistle, Dreamfoil, Firebloom, Gromsblood, Sungrass | **~1.7% → 4%** | 2024-03-19 | [Akalix (staff), 2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90746#p90746) | pre-1.18.1 |
| **Whip Lasher** — Mountain Silversage, Plaguebloom, Icecap (new) | **4%** | 2024-03-19 | same | pre-1.18.1 |
| **Elemental Air** on Renegade Air Elemental | reduced to **20%** | 2025-08-26 | [Torta (staff), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148454#p148454) | pre-1.18.1 |

The Black Lotus figure was raised again to **6%** on 2025-10-21 per the timeline; the staff post for that step is indexed in `synthesis/turtle-vs-vanilla-timeline.md` B7 rather than quoted here.

**Staff reasoning for the Whip Lasher change:** the three grey drops from Whip Lashers "causes massive inflation and causes the average player's gold to mean far less" — [Akalix (staff), 2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90746#p90746).

### 1.2 Quest items raised to guarantee or near-guarantee

| Item | Rate | Date | Source |
|---|---|---|---|
| Snickerfang Jowl, Vulture Gizzard, Scorpok Pincer, Blasted Boar Lung, Basilisk Brain | raised to **80%** | 2024-03-19 | [Akalix (staff), 2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90751#p90751) |
| **Abyssal Scepter** | **100%** | 2022-09-11 | [Torta (staff), 2022-09-11](https://forum.turtlecraft.gg/viewtopic.php?p=24828#p24828) |
| **Essence of Eranikus** | **100%** | 2023-04-03 | [Torta (staff), 2023-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=40087#p40087) |
| **Tainted Mojo** from Seer Jang'zo and Speaker Ujuwa | **100%** | 2025-02-21 (build 7207, live 2025-04-03) | [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590) |
| **Paw of Chief Rnarl** / **Paw of Belgar** | **100%** | 2025-09-30 | [Torta (staff), 2025-09-30](https://forum.turtlecraft.gg/viewtopic.php?p=153822#p153822) |
| **Creeper Root** from Ruins Creeper | **30% → 40%** | 2025-02-21 | [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590) |
| **Forked Mudrock Tongue** (*Mudrock Soup and Bugs*) | **25% → 50%**, and now drops for all party members | 2025-05-06 | [Torta (staff), 2025-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=129934#p129934) |
| Rods for **The Clutch of Atherelex** | **11% → 35%** | 2025-08-13 | [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131) |
| **Ogre Warbeads** inside Dire Maul | raised to **25%** | 2024-01-16 | [Torta (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84934#p84934) |
| **E'ko** items | party loot removed, chance raised to **60%** | 2023-05-09 | [Torta (staff), 2023-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=45215#p45215) |
| **Middle Piece of an Ancient Idol** from Gahz'ranka | **+10%** | 2026-02-03 | [Shadowsong (staff), 2026-02-03](https://forum.turtlecraft.gg/viewtopic.php?p=167358#p167358) |
| **Panther Hide Sack** | **12% → 18%** ("adjusted to match classic") | 2023-06-27 | [Torta (staff), 2023-06-27](https://forum.turtlecraft.gg/viewtopic.php?p=51551#p51551) |
| **Foulheart Horn** (*Horns of their Allies*), **Blackroot Totem**, **Pridewing Venom Sac** | "increased" — **no figure given** | 2026-03-21 / 03-31 / 04-28 | [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608), [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490), [Jamey (staff), 2026-04-28](https://forum.turtlecraft.gg/viewtopic.php?p=176311#p176311) |

### 1.3 Gear, tokens and recipes

| Item | Rate | Date | Source |
|---|---|---|---|
| **Scythe of Elune** (Lower Karazhan Halls) | raised to **2%** — staff answered a direct question | 2025-05-21 | [Akalix (staff), 2025-05-21](https://forum.turtlecraft.gg/viewtopic.php?p=132271#p132271) |
| **Eye of the Abyss** from Antnormi | "around **1%**" | 2023-01-21 | [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868) |
| All **Idol** drop chances | **0.4% → 1%** | 2023-03-08 | [Jamey (staff), 2023-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=37124#p37124) |
| **Idol of Death** (brought in line) | **0.4% → 1%** | 2024-03-19 | [Akalix (staff), 2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90751#p90751) |
| **Ferra's Collar** from Illyanna Ravenoak's bear Ferra | **14%**, mirroring Pimgib's Collar | 2023-07-10 | [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52800#p52800) |
| unnamed item in the same post | corrected **0.5% → 2%** | 2023-07-10 | same |
| **Scholomance** final-chamber bosses | 5 of 6 raised from **30% → 100%** chance to drop boss loot; the shared 20-item table is **4% per item** | 2023-04-26 | [Jamey (staff), 2023-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=43089#p43089) |
| **Smoldering Dream Essence** (Druid *Emerald Blessing*) | **20% → 35%** | 2023-12-01 | [Dragunovi (staff), 2023-12-01](https://forum.turtlecraft.gg/viewtopic.php?p=79558#p79558) |
| **Bag of the Vast Conscious** from Solnius | **15% → 25%**, plus guaranteed from the Favor | 2023-12-01 | same |
| **Dreamscale** from Solnius | **48% → guaranteed** | 2023-12-01 | same |
| **Formula: Eternal Dreamstone Shard** | **0.x% → 1%** (2023-12-01), then **1.5%** with a 3-day cooldown (2025-06-24) | 2023-12-01 / 2025-06-24 | [Dragunovi (staff), 2023-12-01](https://forum.turtlecraft.gg/viewtopic.php?p=79558#p79558), [Torta (staff), 2025-06-24](https://forum.turtlecraft.gg/viewtopic.php?p=136891#p136891) |
| **Ephemeral Pendant** | **4% → 10%** for all Outland bosses (2025-04-16), then **20%** on all encounters (2025-06-24) | 2025-04-16 / 2025-06-24 | [Torta (staff), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126946#p126946), [Torta (staff), 2025-06-24](https://forum.turtlecraft.gg/viewtopic.php?p=136891#p136891) |
| Endgame **custom dungeon BoE rare drops** | raised from **0.0031%–0.x%** (the post gives the low end) | 2024-07-03 | [Jamey (staff), 2024-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=98410#p98410) |
| **Dragonmaw Bracers / Greaves / Hauberk / Leggings, Stormreaver Boots / Belt** | **0.11% → 1.35%** | 2025-09-02 | [Torta (staff), 2025-09-02](https://forum.turtlecraft.gg/viewtopic.php?p=149960#p149960) |
| **Noble's Pendant** (Gilneas City) | missing drop **added** | 2025-08-13 | [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131) |
| **Gressil, Dawn of Ruin** | a **0.01%** chance quoted in an April-1 post | 2024-04-01 | [Akalix (staff), 2024-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=91795#p91795) — **treat with caution, April 1** |

### 1.4 Staff support answers about specific rates

- On an item players said never appeared on the auction house: "**Currently the drop chance is 0.01%**… The drop chance of this item is **0.02%**" — [Pepesmite (staff), 2024-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=90378#p90378), restated [Pepesmite (staff), 2024-03-18](https://forum.turtlecraft.gg/viewtopic.php?p=90525#p90525). The player had tracked **111 runs of Stormwind Vault** with no trash item at all — [Badmojo74, quoted by Pepesmite, 2024-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=90378#p90378).
- On **Fenektis** (a demon whose wand players farmed): "You're just unlucky. We checked this demon for errors in the loot table and there were none" — [Pepesmite (staff), 2023-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=76125#p76125), answering 30 kills with no drop — [Peponaso2 (player), 2023-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=75989#p75989).
- On a vanilla comparison, staff cited Wowhead: "out of **52,275 boss kills, only 2,129** handcuffs were dropped, which equates to a drop rate of **4.07%**" — [Pepesmite (staff), 2024-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=88389#p88389).
- On Noblegarden: "**Different items have different droprates**" — [Akalix (staff), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91650#p91650), answering [Speedz1337 (player), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91649#p91649). The follow-up "What are the droprates for each individual item?" — [Mac (player), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91653#p91653) — **was never answered**.

---

## 2. Player-reported rates and farming samples

Sorted by how much evidence the poster actually supplies.

### 2.1 Reports with a stated sample size

| Item / source | Report | Sample | Date | Source | Status |
|---|---|---|---|---|---|
| **Intact Pounder Mainframe** (Crowd Pummeler 9-60, quest *A Pounding Brain*) | "It took me around **500 kills** to get that quest item" | ~500 kills, 1 drop | 2025-04-16 | [Speedz1337 (guide writer), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126955#p126955) | consistent with the earlier report below |
| Pummeler mount starting item (same boss) | "These past days I did **100 runs** and wasn't able to drop the item" — had been easy before a content update | 100 runs, 0 | 2023-10-18 | [Shade81 (player), 2023-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=71963#p71963) | **unanswered** |
| **Deadwood Headdress Feather** | reputation arithmetic implies **~1,200 kills**, zero feathers, on two characters: "They do not drop!" | ~1,200 kills, 0 | 2019-10-18 | [Musse (player), 2019-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=4247#p4247) | **unanswered**; oldest report here |
| **Whip Lasher** herbs after the 4% change | "no drop for **400 lashers** kill"; confirmed by a second player at "**10 runs** of DM lashers… not a single Icecap, Plaguebloom, or Silversage" | 400 kills / 10 runs, 0 | 2024-03-20 | Maxmin quoted by [Shoc (player), 2024-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=90885#p90885), and [Drakae (player), 2024-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=90922#p90922), [Jc473 (player), 2024-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=90965#p90965) | **contradicts the staff change** the day before; **consensus** among three players; no staff reply in this extraction |
| **Stormwind Vault** trash items | "**111 runs** deep on swv, never once seen any of the trash items drop"; player was told it was "a typo on the rates" | 111 runs, 0 | 2024-03-16 | quoted in [Pepesmite (staff), 2024-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=90378#p90378), echoed by [Dakkashagga (player), 2024-03-17](https://forum.turtlecraft.gg/viewtopic.php?p=90396#p90396) | staff answered with the 0.01%/0.02% figures above |
| **Devout Skirt** (Stratholme Undead) | "supposedly a **20%** chance… after running strat over **40 times**, I have never seen it drop" — needed to continue a questline | 40 runs, 0 | 2024-12-31 | [Tossia (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=115009#p115009) | **unanswered**; 20% figure is a database value (not extracted) |
| **Devout Mantle** (20%) and **Lightforge Spaulders** (10%), UBRS | "We have done UBRS at least **20 times**… none has ever dropped", plus reports of the same on the Tel'Abim realm; the poster works the probability out with dice | 20+ runs, 0 | 2024-02-06 | [Wilsonsds (player), 2024-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=87109#p87109), maths in [Wilsonsds (player), 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87130#p87130) | **unanswered**; rates are database values (not extracted) |
| **Dungeon Set 1** pieces (Baron Rivendare, Darkmaster Gandling) | database says all D1 pieces share an **11%** chance; "I might have done over **200 runs** of UBRS trying to get the lightbringer chestplate but i have only seen it drop once" | 200+ runs, 1 | 2022-09-12 | [Klouther (player), 2022-09-12](https://forum.turtlecraft.gg/viewtopic.php?p=24939#p24939) | **unanswered** |
| Warrior **T0** chest / legs | "I probably have a combined **60–70 kills** for Rivendare, Drakkisath and Kirtonos… and only got exactly 1 boot drop" | 60–70 kills | 2023-12-29 | [Toaonyk (player), 2023-12-29](https://forum.turtlecraft.gg/viewtopic.php?p=83110#p83110) | **unanswered** |
| **LBRS UBRS-key gems** | "It took me **35 runs** to get the last gem off the last boss. It dropped twice in 35 runs"; another "run it about **15 times**, and I've seen each gem drop one time"; a third "over **45 runs**" | 15 / 35 / 45 runs | 2023-11-06 | [Drubarrymooer (player), 2023-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=76160#p76160), [Wafflecrusher (player), 2023-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=76184#p76184), [Drubarrymooer (player), 2023-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=47681#p47681) | **contested by variance**, no rate established |
| **Hateforge Quarry** epic trinket | "someone that got it on their **23rd** run meanwhile another player ran it over **150x** and no drop"; a hunter "ran it over **125x** before they got their item" | 23 / 125 / 150 runs | 2023-05-27 | [Drubarrymooer (player), 2023-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=47681#p47681) | the same poster's conclusion: "Running a dungeon 5x isn't enough information for a reliable dataset" |
| **Thaddius** T3 head tokens | database says each token has a **33%** chance to drop, twice per kill; a guild logged **15 kills** (30 drop rolls) without one specific token | 15 kills / 30 rolls | 2024-05-07 | [Kord2998 (player), 2024-05-07](https://forum.turtlecraft.gg/viewtopic.php?p=94185#p94185); probability argued back and forth with [Calli (player), 2024-05-07](https://forum.turtlecraft.gg/viewtopic.php?p=94203#p94203) and [Kord2998 (player), 2024-05-07](https://forum.turtlecraft.gg/viewtopic.php?p=94219#p94219) | **contested**; the thread is a statistics argument, not a measurement |
| **Naxxramas** tier 3 | "Ive done over **10–11 lockouts** of Naxxramas and only ended up with 2 pieces of tier 3" | 10–11 lockouts | 2026-03-31 | [Zarahv (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173499#p173499) | argument for a badge system |
| Naxx ranged weapons / **Might of Menethil** | "**13–14 clears**… ive yet to see a single ranged weapon drop from 4H or KT, also we have only had 1 Might of methil drop" | 13–14 clears | 2025-03-03 | [Therlx (player), 2025-03-03](https://forum.turtlecraft.gg/viewtopic.php?p=121461#p121461) | **unanswered** |
| **Plans: Dragonscale Belt Buckle** | database rate is "like **1 in 4000 kills**"; the player killed **200–300** dragons and checked over days that the figure was not a placeholder | 200–300 kills, 0 | 2026-04-03 | [Scootiesana (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173839#p173839) | **unanswered**; the poster notes comparable plans sit at 1–2% |
| **Emerald Sanctum** crafting recipes | "**4% per week** is brutal… you can do ES every lockout for 6 months and still have a good chance of not even seeing the thing drop ONCE" | — (rate quoted, no sample) | 2024-04-04 | [Borefficz (player), 2024-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=92063#p92063) | rate is a database value (not extracted) |
| **Emerald Dream Frog** pet (Emerald Sanctum) | "soft reserving week after week… for **half a year** and havent seen a single drop" | ~26 lockouts, 0 | 2024-04-04 | [Geojak (player), 2024-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=92070#p92070) | **unanswered** |
| **Circle of Flame** (Blackrock Depths) | "this dropped for me and it's the first time i've ever seen it drop in my **1000 runs** of BRD" | 1000 runs, 1 | 2022-08-13 | [Greatgrass (player), 2022-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=22171#p22171) | offered approvingly as an example of a good ultra-rare |

### 2.2 Contested reports with no sample

- **Black Lotus on Ambershire vs. Nordanaar.** "The drop rate of black lotus on ambersire is insanely high. As where on nordanaar it is 4% … Ambershire is **well over 30%**" — [Birtha (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173493#p173493). Immediately disputed: "Give me 100 black lotuses then if you're getting 1 every 3 plants. I don't get 1 per day. In **40–50 gathers**" — [Durin (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173515#p173515). **contested**; neither poster gives a tally, and no staff post in this extraction states a per-realm Black Lotus rate. Note the 4% figure Birtha quotes for Nordanaar matches the staff 2024-04 value, not the later 6%.
- **Prospector's Magnifying Lens** (1.18.1 Survival trinket). A player reported it "only works for JC" and not for Mining after reaching 300 skill and Exalted with the Thorium Brotherhood; another replied that the database implies **1.5× the drop chance** and that "you would need thousands of veins to rule out variance on a chance this small" if the baseline is ~3% from a Rich Thorium Vein — Devastouur quoted by [Elesion (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173826#p173826). **contested, unresolved**; the poster explicitly asked for an official statement and got none in this extraction.
- **Loot-table "stickiness".** Several players claim bosses repeat the same loot: a Gilneas City worgen boss "**30 times in a row** and got the exact same loot every single kill", changing only after other bosses were killed first — [Danwith (player), 2025-07-07](https://forum.turtlecraft.gg/viewtopic.php?p=138351#p138351); War Master Voone "always dropped the T0 hunter's glove along with the throwing axe, I killed that bastard more than **20 times**" — [Tacticalnelf (player), 2024-01-19](https://forum.turtlecraft.gg/viewtopic.php?p=85387#p85387). Countered as ordinary RNG — [Drubarrymooer (player), 2024-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=84638#p84638). **contested, no staff statement in this extraction.**
- **Blacksmithing plans generally.** "you can get some plans as mob drops, but the droprate seems very low every time… And how accurate is the drop rate from the Turtle Wow Database? 45% for the…" — [Achmodeus (player), 2025-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=133221#p133221). The question about database accuracy is **never answered** in this extraction.
- **Top Half of Advance Goldsmithing 2** — a rare BoP recipe half with no confirmed source; the database points at Sunken Temple trolls and a player farmed them without success — [Nobody2u (player), 2025-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=155228#p155228), [Assteeriix (player), 2026-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=167568#p167568). **unresolved.**
- **Schematic: Enchanted Thorium Shells** — staff named Cannon Master Willey as the source on 2026-04-07; a player reported it still not dropping a week later — [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367), [Roegnvald (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175240#p175240). **unresolved at the end of the record.**

### 2.3 Quest-item drop mechanics (affects effective rates)

A structural quirk worth recording because it doubles or quintuples the effective farm for groups: **some Turtle quest items drop for the whole party and some for one player only, and nothing tells you which.**

- *Intercepting Wavecrest*: "with a drop rate of something around **80%**, as our group of 4 players, we couldn't finish the quest with only 20–30 kills, but would have had to kill something like **A HUNDRED** nagas. That's so unusual for Turtle quest design, it seemed like something wasn't working as intended" — [Styopa1 (player), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73526#p73526); staff replied — [Pepesmite (staff), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73571#p73571).
- The general question, raised earlier: "some are lootable for all the people in the party… We play in a group of 4, and the idea of plucking 60 quillboar tusks… ie potentially 200 kills" — [Styopa1 (player), 2023-04-06](https://forum.turtlecraft.gg/viewtopic.php?p=40601#p40601). **No documented rule.**

---

## 3. Rates staff proposed but that are not server values

The 2019–2021 "Online Quest & Item Creator" thread contains many percentages written by staff and players as **design proposals for content that may never have shipped**. They are **not** evidence of live rates. Examples: an 80% quest-item rate proposed for Demon Fall Canyon demons — [Torta (staff), 2020-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=6692#p6692); a 40% Burning Exile drop and a suggested 25% boost to Grubbis Paws — [Dragunovi (staff), 2020-06-04](https://forum.turtlecraft.gg/viewtopic.php?p=6204#p6204), [Dragunovi (staff), 2020-06-06](https://forum.turtlecraft.gg/viewtopic.php?p=6233#p6233); a note that Rockslicer "currently has around a **3%** drop chance" from Rhahk'zor and Belt of the Fang "around **8%**" — [Dragunovi (staff), 2020-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=6248#p6248), [Dragunovi (staff), 2020-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=6249#p6249). The last two describe pre-existing vanilla rates and are the only ones in that thread that describe the live game.

---

## 4. Gaps and unclear points

1. **No player-run measurement exists.** Every player figure in §2 is either a database quote or an anecdote of the form "N runs, no drop". Nobody publishes successes over trials for a custom item, so no player-derived rate can be stated with a confidence interval.
2. **Database rates are the community's real reference and are not in this corpus.** The 11% D1 figure, the 20%/10% UBRS shoulder figures, the 33% Thaddius token figure, the 4% Emerald Sanctum recipe figure and the "1 in 4000" belt buckle all come from `database.turtlecraft.gg`. Players repeatedly asked whether that database is accurate and were never answered.
3. **Custom-zone and custom-dungeon loot rates are almost entirely undocumented.** Of the staff figures in §1, only the Dragonmaw/Stormreaver set pieces, Eye of the Abyss, the Scythe of Elune and Ephemeral Pendant are custom items; the rest are vanilla items retuned.
4. **The Whip Lasher contradiction is unresolved.** Staff raised the rate to 4% on 2024-03-19; three players reported zero drops over 400 kills and 10 dungeon runs the next day; nothing in this extraction closes the loop.
5. **Several 2026 hotfixes say "increased the drop chance" without a number** (Foulheart Horn, Blackroot Totem, Pridewing Venom Sac, Middle Piece of an Ancient Idol gives only "+10%" relative).
6. **Per-realm variation is asserted but never confirmed.** The Ambershire vs. Nordanaar Black Lotus dispute is the only such claim and it is contested.
7. **No sample-size discipline in the corpus.** The clearest statement of the problem comes from a player: "Running a dungeon 5x isn't enough information for a reliable dataset" — [Drubarrymooer (player), 2023-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=47681#p47681). That should be read as a caveat over the whole of §2.
