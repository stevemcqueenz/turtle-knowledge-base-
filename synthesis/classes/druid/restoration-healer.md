# Druid — Restoration — Healer

Restoration healing at 60 in dungeons and raids, covering the three playstyles the sources distinguish: **Tree of Life (HoT/Rejuvenation spam)**, **Healing Touch caster ("Moonglow HT")**, and **Regrowth/Nature's Grace**. Resto PvP is `pvp.md` (weak); the balance/resto "Moonglow" solo hybrid is `leveling.md`.

Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Kit revisions: batch 2 (1.17.2, Oct 2024: Efflorescence, Genesis, Aessina's Bloom, Preservation, raid-wide Tranquility, Tree aura rework), 1.18.0 (Aug 2025: 2 s Rejuv/Regrowth ticks, Regrowth 20 s, Aessina's Bloom rework, Gift of Nature row 4, Tree +180% armor). **1.18.1 changed nothing in Restoration** (Jamey p166071 lists only bear threat and balance).

## Overview

- **Role**: raid HoT healer (Rejuvenation blanket, Swiftmend), tank direct healer in caster form (Healing Touch downranks), plus Innervate, Rebirth, Tranquility, Remove Curse/Abolish Poison, Mark of the Wild. Tree of Life aura: "the healing power of new party members is increased by an amount equal to 20% of your spirit" (new tooltip quoted by [Relg (player), 2024-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=86150#p86150)); "With 300 spirit you're looking at an extra 60 healing for each person in the tree's group" [Blackduck (player, raid tree), 2024-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=86202#p86202).
- **Strengths (sources)**: "In raid content, resto druids are amazing - as long as we are the *only* resto druid ... that one resto druid is a game changer, and no raid should be without" [Lynxkitten (player, resto main, Ambershire), 2025-10-14](https://forum.turtlecraft.gg/viewtopic.php?p=155593#p155593) (1.18.1-announced era); "Tree is a raidhealer spec ... perfectly build for heavy aoe fights or fights that necessetate prehotting or heavy raidhealing (frost tombs on kt, sapphiron, thaddius, vaelstrasz, magmadar etc)" [Atreidon (player), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102951#p102951); "I regularly get high or on top of the meters in raids up to naxx because of it [Aessina's Bloom]" [Bayanni (player), 2025-10-15](https://forum.turtlecraft.gg/viewtopic.php?p=155621#p155621); Tranquility since batch 2 is "twows most successful spell rework" [Atreidon, 2025-06-27](https://forum.turtlecraft.gg/viewtopic.php?p=137213#p137213).
- **Weaknesses (sources)**: HoTs from different druids do not stack — "bringing a second resto to a raid will drag both of them down substantially" [Elesion (player), 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83440#p83440); "there's only 1 slot for a resto druid in 40-man raid. Maybe 2, if they coordinate ... And resto also sucks because holy priest does resto's 'speciality' (heal over time) much better" [Noephix (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) (post-1.18.1); no fast direct heal — "Tree druids don't have consistent fast heals apart from swiftmend and NS+HT" [Reploidrocsa (player), 2024-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=104703#p104703); "In group content, a resto druid is ok, but we cannot compensate for an undergeared tank" (Lynxkitten); no out-of-combat resurrection (Treezus; smelling salts/jumper cables workaround [Reploidrocsa, 2023-10-15](https://forum.turtlecraft.gg/viewtopic.php?p=70919#p70919)); Tree is slow and cannot cast Healing Touch ([Synlapse (player), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121596#p121596)).
- **Content it excels at**: raid-wide damage fights (Atreidon list above); dungeons when the only healer ("Tree of life is very good when you're the only healer, it becomes very bad the more healers in the group due to its slow heals" [Reploidrocsa, 2023-01-20](https://forum.turtlecraft.gg/viewtopic.php?p=32792#p32792)).
- **Community standing**: **consensus** that resto is desirable as the single druid healer and **contested** on Tree vs caster styles. "Restor Druids are in excelent shape on twow, the only problem I experience is other restor druids in raid" [Kangaraxxus (player), 2023-10-15](https://forum.turtlecraft.gg/viewtopic.php?p=70924#p70924); "Resto is good as long as there is only 1 in the raid, spamming Rejuvenation. Other playstyles for resto are kinda mid" [Noephix, 2025-06-13](https://forum.turtlecraft.gg/viewtopic.php?p=135578#p135578); dissent: "Druids are so bad compared to other healers and bring zero utility other than a battle res" [Biteyou (player), 2024-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=110143#p110143); "Druid was already pretty bottom tier as a healer" [Bigsmerf, 2024-11-16](https://forum.turtlecraft.gg/viewtopic.php?p=108145#p108145). Tree: "I view other resto druids who don't use it with a combination of pity and bewilderment ... it merely has a high skill ceiling" [Treezus (player, tree main), 2024-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=92248#p92248) vs. "This is the reason I never played and not going to play in the future as a Tree. When players are in full BiS ... we don't need extra 60 healing" [Templar85 (player), 2024-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=104735#p104735).

## Official kit (staff)

- Batch 2 [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102966#p102966): Regrowth −20% mana; Tranquility raid-wide, 30-min CD, double mana, 1 s ticks (ranks 4/6/8/10 s); Resto tree: Efflorescence (level 60, Tree), Improved Rejuvenation removed, Genesis, Tranquil Spirit includes Regrowth, Aessina's Bloom, Preservation, Improved Tranquility row 6 (20/40%).
- 1.18.0 [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): Rejuvenation/Regrowth tick every 2 s, Regrowth 20 s; Efflorescence fix; Nature's Reach also affects Abolish Poison/Remove Curse; Aessina's Bloom reworked — requires Improved Healing Touch, next HT −0.15/0.3 s and 5/10% mana refund; Genesis row 3; Nature's Swiftness swapped with Aessina's Bloom (NS now requires Genesis); Improved Regrowth requires Gift of Nature; Gift of Nature row 4, total healing; Tree of Life +180% armor.
- 1.18.1: no Restoration entries [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). Item hotfix: Grandstaff of the Shen'dralar Elder fixed to proc from Rejuvenation (t22214, post-1.18.1 staff note per changelog). Player complaint on Resto T3.5 5-set "Blooming Bud" 20 s linger (t24574, 2026).
- Set bonus: Resto T3 2-set restores raid resources per Rejuv cast ("restore vital resources to your raid like rage, energy and mana constantly since you're using rejuv every gcd" [Blackduck, 2024-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=86164#p86164)). Loop of Infused Renewal proc 10% and benefits from Rejuv talents (1.18.0 itemization, staff 2025-06-30). Idol of Longevity "Gain 25 mana each time you cast Healing Touch" (same).

## Talent build

Three builds. **Full point lists do not exist in text; links are on the 1.17.2/1.18.0 tree (unchanged by 1.18.1).**

| Build | Link | Source | Notes |
|---|---|---|---|
| Healing Touch (caster, no Tree) | `https://talents.turtlecraft.gg/druid?points=BgYbAKAYAI--FAoABbFFQI` | [Bayanni, 2025-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=156226#p156226) | "I don't see any use in imp wrath and you might need to cast roots in some open areas like AQ20 and ZG. Shapeshift also gets you out of CC and making that cheaper is never bad" — i.e. Nature's Grasp + Natural Shapeshifter over Improved Wrath |
| Healing Touch (Skyfont) | `https://talents.turtlecraft.gg/druid?points=oACYQKCYAI--FAoABLFDQAF` | [Skyfont (player), 2025-08-21](https://forum.turtlecraft.gg/viewtopic.php?p=147489#p147489) | reply to "Healing Touch spec ... Omen of Clarity" request |
| Healing Touch (post-1.18.1) | `https://talents.turtlecraft.gg/druid?points=BgCbAKBYAI--FAoABbFFQI` | [Froghijab420, 2026-03-25](https://forum.turtlecraft.gg/viewtopic.php?p=172460#p172460) | "a viable non-tree healing spec - that uses downrank HT spam. Trade out wrath points for NT [Nature's Grasp] if u wanna solo"; "Take Swiftmend - 1 pt ... Take Nature's Swiftness - 1pt ... Subtlety 100% not needed" |
| Tree of Life | `https://talents.turtlecraft.gg/druid?points=BgAbAI--FAFABbFFALFQB` | Bayanni 2025-10-19 | "You could swap 2/2 Imp Tranq for 2/2 Nature's Reach ... I like the imp tranq since it's your one big CD"; Templar85 disagrees: "Improved Tranq talent is deep in the resto tree and does not worth 2 points" [Templar85, 2024-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=110097#p110097) — **contested** |
| Deep resto, no Tree, no Moonglow | (not linked) | Bayanni 2025-10-15: "There is a third spec but I'm still evaluating ... going deep restored without tree or moonglow" | unverified |
| Regrowth/Nature's Grace (old) | `https://talents.turtlecraft.gg/druid/U0XL606-0-UX36JOU` | [Tieku, 2023-01-18](https://forum.turtlecraft.gg/viewtopic.php?p=32717#p32717); [Drummbass, 2023-01-19](https://forum.turtlecraft.gg/viewtopic.php?p=32769#p32769) | pre-batch-2, obsolete tree; "you're itemizing just like a paladin" (int/crit) |
| HotW 0/30/21 hybrid | — | [Dr Thrax, 2025-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=121754#p121754) (classic-era habit) | tank/heal flex; "not excellent of either kind" |

Talents named as mandatory across builds: Swiftmend, Nature's Swiftness, Genesis ("too strong to pass up" — Scattyau, balance thread), Gift of Nature, Improved Healing Touch + Aessina's Bloom (HT build; "Aessina's Bloom really makes the throughput feel great, especially if a tree is already HoTing your target", Bayanni 2025-10-15), Moonglow (HT build: "Moonglow HT is still a thing", Bayanni), Tree of Life + Efflorescence (tree build), Omen of Clarity (HT build request), Nature's Grasp 1 pt. Not taken: Subtlety (Froghijab420), Improved Wrath (Bayanni). Balance-side Moonglow is now questioned: "only one talent in other trees is somehow useful for healing druid. It is Moonglow. Problem is that is so deep in balance tree" [Xudo, 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121600#p121600); "the new talents are so powerful that nobody does this anymore" [Szarszag (player), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121602#p121602) — **contested with Bayanni's Oct 2025 Moonglow HT recommendation.**

**Patch validity**: all links are 1.17.2/1.18.0-tree; 1.18.1 changed no resto talent → valid for 1.18.1.

## Stat priority

- Tree: spirit is a raid stat — "1spirit is 0.2 healing to every member of your party, so in a way every point of spirit is 1sp, very strong even if your personal logs don't reflect it" (Bayanni 2025-10-15); "there's not a lot of competition for non-set healing pieces with high spirit". Healing power and mana regen balanced so mana lasts the fight (Reploidrocsa 2025-09-30, below).
- HT/Regrowth caster: "That build requires alot of intellect ... and spell crit ( the more the better) . In other words you're itemizing just like a paladin" (Drummbass 2023-01-19, pre-batch-2).
- Mana regen: Tree reduces Rejuvenation cost only — "The only spell that profits from the Tree of Lifes mana reduction right now is rejuvenation ... Regrowth eats away mana like hell. So usually i need my own Inervate" [Sylveria, 2023-10-17](https://forum.turtlecraft.gg/viewtopic.php?p=71401#p71401) (pre-batch-2).
- Weights: a TWoW resto weight sheet was in progress (Mondegreen, VanillaRatingBuster thread [p117560](https://forum.turtlecraft.gg/viewtopic.php?p=117560#p117560), 2025-01-22) — not published on the forum. **Gap: no numeric resto weights, no +healing/MP5 exchange rate.**
- PvP: stamina first, PvP set 3/4-piece (see `pvp.md`).

## Single-target (tank) healing

- HT build (entry level / dungeons): "For entry level, healing touch builds are viable and very mana efficient" [Reploidrocsa, 2025-09-30](https://forum.turtlecraft.gg/viewtopic.php?p=153732#p153732); downrank HT spam (Froghijab420); keep max-rank Rejuvenation on the tank for Swiftmend; Nature's Swiftness + max HT for emergencies; Aessina's Bloom refunds (staff 1.18.0). "Other resto druids can keep a few targets topped up easily with HoT's and Healing touch rank 3 (or rank 4)" (Reploidrocsa 2024-10-24). ZG trinket speeds HT (same post).
- Tree on tank-only fights: shift out — "get out of tree form on fights where only tanks take damage like Twins and Patchwerk so you can precast healing touch. You should still keep a max rank rejuv up on tanks though so you can snipe with Swiftmend" (Blackduck 2024-01-28). Shifting costs "a GCD (when you shift back) and about 2-3 healing touches or the act of shapeshifting wastes mana" (Reploidrocsa 2024-10-24).
- Tree direct heal: Regrowth downranked — "Max rank for when you need to top someone up fast. Rest is downranked regrowths. Which one? Depends on your gear, but as a rule of thumb, spam regrowth with full mana and no buffs/consumables. If your mana last 45 seconds or more without any external help/no innervate/ no potions you're good for 90% of the fights with that rank. If your mana lasts more than 1 min 15 secs use a higher rank" [Reploidrocsa, 2025-09-30](https://forum.turtlecraft.gg/viewtopic.php?p=153757#p153757).

## Multi-target / raid healing (Tree)

1. "spam rejuvenation on the raid every gcd (max rank on melee/tanks and rank 4 on everyone else) and then use swiftmend when needed. Only use regrowth as a emergency heal with nature's swiftness. This will top the meters on fights where raid healing is a must like Vael and Vis" (Blackduck 2024-01-28).
2. Do not overwrite another druid's stronger HoT: macro `/cast [@mouseover nobuff:Rejuvenation]Rejuvenation` (Roid macros) — "Every resto druid in my guild is trained to heal like this so druids don't grief each other heals" [Reploidrocsa, 2023-10-17](https://forum.turtlecraft.gg/viewtopic.php?p=71446#p71446); wiki `Druid_Caster_Macros.md` has a vanilla-API equivalent checking `Spell_Nature_Rejuvenation`.
3. Efflorescence (Tree, 60) — "the 'HoT Tree' has the fancy new HoT gimmick" [Tieku, 2024-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=106071#p106071); early HoT renewals grant instant healing "but it's not sustainable manager wise" (Bayanni 2025-10-15).
4. Pre-HoT before predictable AoE (Atreidon 2024-10-12).
5. Tranquility on raid-lead call — "our raid lead calls out tranqs on specific pulls we use about 10 a raid. we run 4-5 druids though and each use it 2-3 times" [Ghen, 2025-08-29](https://forum.turtlecraft.gg/viewtopic.php?p=149160#p149160); "Tranquility also now causes threat for the casting druid" [Atreidon, 2024-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=110109#p110109); "If you wait until 40 people are hurt instead of keeping your prio targets topped at all times you don't know how to play druid" [Reploidrocsa, 2024-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=110115#p110115).
6. AoE threshold: the Tree style is a blanket, no threshold; HT build switches to Rejuv blanket when "raids have more widespread damage and single target heals are less valuable" (Reploidrocsa 2025-09-30).

## Cooldowns and resources

| Tool | Rule | Source |
|---|---|---|
| Swiftmend | snipe on max-rank Rejuv; "1 pt, its very strong" | Blackduck; Froghijab420 |
| Nature's Swiftness | + max Healing Touch (caster) or + Regrowth (tree) emergency | Blackduck; Froghijab420 |
| Innervate | own use is common in tree/Regrowth play ("usually i need my own Inervate") | Sylveria 2023 |
| Tranquility | 30-min, raid-wide, causes threat; ~2–3 per raid per druid | Ghen; Atreidon |
| Rebirth | 30-min battle res (no OOC res) | Treezus |
| Mana | HoTs benefit from Tree mana reduction only for Rejuv; consumables/tea; balance healing power vs regen so "mana can last the entire fight" | Reploidrocsa 2025-09-30 |
| Trinkets | tree: two healing trinkets; caster: ZG trinket (HT cast speed 15 s / 2 min) | Reploidrocsa 2024-10-24 |

## Role strategy

- Be the single tree in the raid or coordinate groups ("assigning heal groups for hots means that some parts of the raid will not be adequately covered", Treezus). "I still recommend tree over moonglow early in raiding ... be open to switching if there's already a lot of trees or there is a strong need in your team for direct heals on the tanks" (Bayanni 2025-10-15).
- Dungeons: HT build; tree "unless you're stacked and your HoTs alone can keep the MT up" (Bayanni 2025-10-15).
- When only one druid is present you also do "the Faerie Fire, Insect Swarm rotation" (Templar85 2024-10-24).
- Group placement: melee groups prefer a shaman, so the tree lands "in the groups that needed the least healing" [Blackduck, 2024-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=86180#p86180).
- Addons: Chronometer/Cursive/DoTimer for HoT tracking (t18518 per summary), pfUI/Clique (t4489), Roid macros.

## Gear / enchants / consumables

- **Tier**: new Resto T2.5 (staff 2023-10-15); T3 2-set resource restore (Blackduck); T3.5 5-set "Blooming Bud" (t24574 complaint, 2026); "couple fights in Naxx where full T2 is BiS" (Templar85 2024-10-24). Post-1.18.1 complaint that "druid healing sets centered on HT" (t22214 reply). Resto T3 ring buff acknowledged (t17746 reply, 2025-02).
- **Weapon/relics**: Atiesh (Druid) — "For Tree druids using hots there is no reason to get it. No personal power increase" (player reply in t13797, pre-1.18.1); Grandstaff of the Shen'dralar Elder procs from Rejuv (1.18.1 fix); Idol of Longevity (25 mana per HT); Loop of Infused Renewal (10% proc, Rejuv-talent scaling).
- **Pre-raid**: not covered by any druid-forum post (gap); rentry.co resto overview `rentry.co/kiv7ntyx` is linked from the wiki Druid page (community, unverified).
- **Consumables**: mana potions, Nordanaar Herbal Tea, runes (balance thread); `(vanilla baseline, not from turtlecraft.gg)` for healing flasks/food — no druid post lists them.

## Common mistakes

1. Two uncoordinated trees overwriting each other's HoTs (Kangaraxxus; Treezus; Syndraela [p120862](https://forum.turtlecraft.gg/viewtopic.php?p=120862#p120862)).
2. Spamming max-rank Rejuv on everyone — "if you wanna max rank blanket raid you oom super quickly" [Ibux, 2022-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=30411#p30411).
3. Regrowth spam at full rank in tree (mana) — use the 45 s–1:15 downrank rule (Reploidrocsa).
4. Staying in tree on tank-only fights (Blackduck).
5. Using Tranquility as a meter pad instead of keeping priority targets up (Reploidrocsa 2024-11-27); ignoring its threat (Atreidon).
6. Taking Subtlety (Froghijab420) or 3/3 Improved Tranquility as a filler (Templar85).

## Sources

| Source | Authority | Date | Era | Agreement |
|---|---|---|---|---|
| t22306 (Lynxkitten p155593, Bayanni p155621/p156226) | players (resto mains) | 2025-10 | 1.18.1-announced | consensus on "one tree" |
| t22168 (Reploidrocsa p153732/p153757) | player (raider, multi-role) | 2025-09-30 | pre-1.18.1 | single |
| t5029 (Blackduck p86164/p86180/p86202, Relg p86150, Treezus p92248, Reploidrocsa p104703/p71446, Templar85 p104735, Atreidon p102951, Kangaraxxus p70924, Sylveria p71401, Ibux p30411) | players | 2022–2024 | pre-1.18.1 | contested (tree vs HT) |
| t15878 Tranquility (Ghen p149160, Atreidon p110109/p137213, Reploidrocsa p110115, Templar85 p110097, Bigsmerf p108145, Biteyou p110143) | players | 2024-11 .. 2025-08 | pre-1.18.1 | contested (OP vs situational) |
| t20919 Skyfont p147489; t24506 Froghijab420 p172460 | players | 2025-08-21; 2026-03-25 | pre / post-1.18.1 | single each |
| t17843 tree critique (Synlapse p121596, Xudo p121600, Szarszag p121602, Dr Thrax p121754) | players | 2025-03 | pre-1.18.1 | consensus (tree feels bad) |
| t5368 Regrowth/NG (Tieku, Drummbass, Reploidrocsa p32792) | players | 2023-01 | pre-1.18.1, obsolete tree | single |
| [Noephix p173102](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) | player | 2026-03-30 | post-1.18.1 | single |
| Staff: Dragunovi p102966, Jamey p141159/p166071, Dragunovi p137624 (items) | staff | 2024–2026 | all | authoritative |
| Wiki `Druid_Caster_Macros.md` | community wiki | undated | — | vanilla baseline |
