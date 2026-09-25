# Notes: #warlock full-006 (2026-03-02 .. 2026-04-01)

Note: This chunk spans the 1.18.1 "Nightmares of Ursol" release (2026-03-20), so it contains
extensive before/after comparisons. Ambershire/Nordanaar/Tel'Abim are different Turtle realms
referenced throughout (Ambershire = fresh/early phase during this window, reaching BWL by the
end; Nord = Xfaction fast-clearing realm; Tel'Abim (TA) = PvP, non-Xfaction realm with slower
raids — several stat/spec claims are explicitly realm-dependent).

## Experts observed
- **Afraido** — very active, gives concrete numeric answers (hit/crit-to-SP conversions, damage
  multiplier math), posts custom talent-tree redesigns on talent-builder.dev, and authored the
  three pinned 1.18.1 endgame builds (Affliction/Demonology/Destruction) — [[d:warlock#1482828212525469856]] (stat weights), [[d:warlock#1483641110197833728]] (full class threat-modifier table), [[d:warlock#1484228321708478635]] (pinned Affliction build, +4 reactions).
- **W** — appears to have dev/insider knowledge of Turtle-specific mechanics and spell coefficients; posts get community-requested pins — [[d:warlock#1488156105111633930]] (pet AP/SP scaling table, pinned on request), [[d:warlock#1486076970017099837]] (Hellfire SP-coefficient math).
- **sailorVEVO** — leveling specialist, wrote out a full ordered Demonology leveling talent list and stat-priority guide, links own guides in pins — [[d:warlock#1482503137041584229]], [[d:warlock#1482499787617075412]].
- **Frolegacy** (Horde/Tel'Abim raider) — detailed threat-generation breakdowns, pre-K40 BiS lists, dot-ordering-for-threat theorycrafting — [[d:warlock#1480617902515425378]] (Affliction pre-K40 BiS), [[d:warlock#1483237976040280245]] (dot duration design for threat ramp).
- **Summonjutsu - GL <Tremor Totems>** — detailed demo/destro raid mechanics, pet threat and greater-demon management advice — [[d:warlock#1483664616130347188]] (threat-ramp dot ordering explanation), [[d:warlock#1486868497693937906]] (demo hit targets).
- **Lightemgee** — precise mechanical breakdowns (Curse of Doom, Unleashed Potential snapshotting, avoidance mechanics) — [[d:warlock#1486519502404456498]], [[d:warlock#1485403135118807141]].
- **biloen** — Cursive/macro expert, ran controlled dps comparisons between specs — [[d:warlock#1487033518805618818]] (20-run affliction vs fire vs UP-imp test, +80dps for affliction), [[d:warlock#1483947946042065018]] area (haste breakpoint skepticism, confirmed by Nezu/Papaverine/Mooncrazed [[d:warlock#1483947828341637150]]).
- **L-star** — reports actual top-parse specs/points by realm — [[d:warlock#1481757404067533113]] (SM/Ruin 35/11/5 vs top-parser 0/34/17 split), [[d:warlock#1483624063388618843]] (post-patch demo 0/34/17).

## 1.18.1 changes & their effect
- **[All]** Searing Pain cast time increased to 2s (from 1.5s) but base damage +20% and SP
  coefficient raised (~42%→57%); net effect is a large buff, described as "huge" — [[d:warlock#1484367370637017348]] (+2 reactions), [[d:warlock#1484376986892767454]], [[d:warlock#1484377862504054974]]; downside noted for PvP (2s cast easier to interrupt/kick) — [[d:warlock#1484711977132625991]].
- **[Demo]** Unleashed Potential reworked: previously required Critical Strikes to build stacks, now
  builds from *any* damage source, and reaches 3 stacks in 3 seconds — [[d:warlock#1482500057478729879]], [[d:warlock#1485512658433343609]]. Snapshots spell power at the first stack; the SP→pet-Attack-Power transfer happens on the last stack (tooltip doesn't state this) — [[d:warlock#1485403135118807141]], [[d:warlock#1485403274571022407]].
- **[Demo]** Sinister Pursuit changed into a 2-point Demonology talent: permanently +5/10% pet
  movement speed (includes greater demons), taking the old Improved Healthstone talent's slot —
  [[d:warlock#1481400989440544831]], [[d:warlock#1484606812547453018]]. Reception mixed/negative
  ("almost as useless as improved curse of weakness") — [[d:warlock#1481410072289607680]].
- **[All]** Healthstone/Soulstone simplified to a single rank each; Master Conjurer / Improved
  Healthstone talent removed entirely — [[d:warlock#1484990240371245286]], [[d:warlock#1484996323315810576]], [[d:warlock#1484476430493417472]] (soulstone: can no longer give the whole raid soulstones from one cast).
- **[Demo]** Greater/enslaved-demon healing-received reduction (50%) moved off the warlock onto
  the demon only — warlock's own healing received is no longer reduced — [[d:warlock#1481583843390521447]], [[d:warlock#1485836700017098883]] ("work as intended").
- **[Demo]** Avoidance (80% AoE damage reduction on demons) now also applies to cleave attacks —
  [[d:warlock#1485423028417331210]], [[d:warlock#1484358497297498233]].
- **[All]** Curses now have reduced GCD for Reckless/Elements/Shadow (not Curse of Agony) — [[d:warlock#1484690228718469253]].
- **[Affliction]** T3.5 3-piece set bonus stealth-nerfed at launch: extra Siphon Life damage on
  Dark Harvest's last ticks cut from 50% to 25%, on top of the announced mana-drain change —
  community anger, called undisclosed — [[d:warlock#1484639895774298112]], [[d:warlock#1484604962251083816]], [[d:warlock#1484611653042704394]] (+5 reactions, "the nerf is a joke... subhuman behavior... announcing shit and then doing something else"); confirmed as real, not a bug, by devs — [[d:warlock#1485234205213462588]].
- **[Demo]** Ancient Cornerstone Grimoire (Ony trinket) gains new effect: +5% pet and enslaved
  demon damage and health — [[d:warlock#1479499241583018158]].
- **[Destro]** Hellfire's SP coefficient sharply increased (~2%→6.66% per tick per 100 SP,
  totalling ~99.9% of 100 SP over the full channel) — [[d:warlock#1486061716113588304]], [[d:warlock#1486076970017099837]] — but in practice players felt the real dps gain was small/"underwhelming" — [[d:warlock#1486020001709428746]], [[d:warlock#1486074541284266250]].
- **[Bug, persistent]** Greater-demon pathing has been broken since a Jan 14 server maintenance
  (demons walk erratically/lag far behind); still unfixed through this entire chunk (Mar–Apr) despite repeated dev pings — [[d:warlock#1479762378454335661]], [[d:warlock#1483137979391283335]], [[d:warlock#1486079965609853140]], [[d:warlock#1488679393776763020]] (+2 reactions, joking that raising it publicly delays the fix another 6 months).
- **[Bug, post-patch]** Widely reported: greater demons spawn hostile / instantly attack the
  warlock and die seconds after summon (Infernal, Felguard, Doomguard all affected) — [[d:warlock#1484597007854211103]], [[d:warlock#1485245151994450053]], [[d:warlock#1485469238817718283]], [[d:warlock#1487174979618345065]], [[d:warlock#1488010748323041474]]; a partial workaround (update client, reset talents, delete WDB file, redo talents) was reported to help — [[d:warlock#1487176494970048724]] — but the bug persisted for others even after — [[d:warlock#1487212500704563375]].
- **[New content]** New raid "Timbermaw Hold" (TMH) launched with the patch; a secret/10th boss
  drops the new warlock class weapon (a sword), not available on later-phase realms like
  Ambershire until much later — [[d:warlock#1485435797523136563]], [[d:warlock#1488168397630996653]], [[d:warlock#1488174043189477496]]. New Onyxia boss "Broodcommander Axelus" drops a staff (80 SP, 1% crit, chance on direct-damage spell to summon a lvl61 Onyxian whelpling for 10s) usable as a leveling/early-BWL weapon for Demo/SM-Ruin — [[d:warlock#1488194472461336576]], [[d:warlock#1488200733953359996]].

## Spec viability / tier opinions
- **[Pre-patch]** Affliction was the default top raid spec because Suppression gives a free 10%
  hit (vs 0% for Demo/Destro), making it playable with far less gear investment — [[d:warlock#1478791111207288945]], [[d:warlock#1481226579932876821]], [[d:warlock#1482345452148887715]] ("Demo > Aff > Destro on paper, but until endgame gear affliction is just the way to go").
- **[Pre-patch]** Realm/pace dependence: on fast Xfaction realms (Nord) trash/bosses die too
  quickly for affliction's dots to pay off, so Demo dominates; on slower non-Xfaction PvP realms
  (Tel'Abim) longer fights let Affliction compete closely with Demo, with SM/Ruin and Destro
  further behind — [[d:warlock#1483576857428361257]] (detailed by Frolegacy, TA-perspective).
- **[Pre-patch]** SM/Ruin considered weak until heavy T3/T3.5 gear (needs both high hit and high
  crit); "no more 1-button specs on twow" — [[d:warlock#1481226739731664896]], [[d:warlock#1481287628308353165]] ("SM/Ruin needs so much hit and crit I wouldn't even try it till 3.5+ scythe"), disputed by TowelDruid: fine from T2.5/T3 already — [[d:warlock#1481345700125216860]].
- **[Pre-patch]** Destro/Fire was consistently called the worst raiding spec, especially in
  higher-tier content — [[d:warlock#1481121412503572621]], [[d:warlock#1483576857428361257]].
- **[Post-patch]** Demonology became the clear top spec, largely due to guaranteed Unleashed
  Potential stacking and Searing Pain buffs — [[d:warlock#1484828741267095563]] ("demo took over throne — not even affli is comparable to them now, destro imo second best"), [[d:warlock#1487595143765688570]], [[d:warlock#1488319810801631242]] ("its the meta atm"); L-star reported 2nd place overall / 4th on trash in a 1:45 Kara40 as demo, above mages — [[d:warlock#1485510944653180939]].
- **[Post-patch]** Affliction weakened by the T3.5 nerf above; SM/Ruin described as "largely
  untouched" by the patch — [[d:warlock#1484476187211333662]], [[d:warlock#1484476279435821057]].
- **[Post-patch]** Destro/Fire meaningfully buffed (Searing Pain) but still seen as bottom-tier
  in higher raids; Sehnsucht argues it would only become truly viable if Arcane Mage is nerfed
  (15% Arcane Power bonus called "huge") — [[d:warlock#1482917662140137663]], [[d:warlock#1486098247335416049]] ("destro dps falls off hard into late tier raids").
- **[Post-patch]** W's summary: "All trees are good now... demo has higher dps potential but is
  pretty sweaty" — [[d:warlock#1485798620866281473]], [[d:warlock#1485799496737882152]].
- **Trash vs. boss dps tradeoff (extended, disputed thread):** yugi argues Affliction cannot
  compete with Arcane Mage on trash because dots barely tick before fast-dying trash mobs die,
  making Affliction's overall/trash parse rank ~18-20th on K40 — [[d:warlock#1484625025448415254]], [[d:warlock#1484627071207739442]]; W counters that Affliction is meant to be worse on trash/better
  on long fights and is "about as strong as Demo, #1 or close #2" on bosses — [[d:warlock#1484625922316308482]], [[d:warlock#1484627935171444887]] — **unresolved disagreement**.

## Talent builds (endgame)
Three point-total builds pinned by Afraido at patch launch (2026-03-20/21, pinned by moderator
Lyrazia) — exact talent names not legible from the screenshot icons, but point totals and
per-row point counts are:
- **Affliction 35/11/5** — [[d:warlock#1484228321708478635]] (+4 reactions, 📌). Row 1: 5/5 + 5/5;
  further rows include 1/2, 2/2, 3/3, 2/2, 2/2, 3/3, 2/2+1/1, 1/1, 5/5, 1/1 across Affliction; 3/3
  in a Demonology row-1 keystone-adjacent slot; 5/5 in Destruction row 1.
- **Demonology 0/34/17** — [[d:warlock#1484228436888391690]] (+5 reactions, 📌). Heavy Demonology
  investment (5/5, 2/2, 3/3, 5/5, 2/2, 1/1, 3/3, 5/5, 3/3, 1/1 across rows) with 17 points into
  Destruction (5/5 row 1, plus further picks) and 0 into Affliction.
- **Destruction 0/11/40** — [[d:warlock#1484229282854342789]] (+8 reactions, 📌). 40 points deep
  into Destruction (5/5, 5/5, 3/3, 2/2, 1/1, 5/5, 2/2, 5/5, 1/1, 5/5, 1/1 across rows down the
  Destruction tree) with 11 in Demonology (5/5, 3/3, 1/1 partial) and 0 Affliction.
- Reported live top-parse builds: **0/34/17** demo (Tel'Abim, post-patch) — [[d:warlock#1483624063388618843]], [[d:warlock#1483537593584062626]]; pre-patch community split was **35/11/5**
  (~90% of warlocks) vs **0/34/17** (~10% of top parsers) — [[d:warlock#1481757404067533113]].
- **PvP Destruction 5/5/39** (2 points free choice, level 58) recommended by Afraido — [[d:warlock#1487474501812752626]].
- **PvP Affliction 35/5/11** recommended by Afraido for a PvP-focused leveler — [[d:warlock#1485611980990447658]].
- Demo leveling order (see Leveling section) doubles as an early-endgame-transition build per
  sailorVEVO — [[d:warlock#1482503137041584229]].

## Leveling
- **Demonology leveling talent order (full, by sailorVEVO, +2 reactions):** 5/5 Demonic Embrace,
  3/3 Fel Intellect, 1/2 Soul Funnel, 5/5 Improved Corruption, 2/2 Improved Drains, then 2/2
  Improved Life Tap OR 3/5 Suppression (always keep 1pt in Suppression), 2/2 Fel Concentration →
  2/2 Soul Funnel, 1/1 Fel Domination, 4/5 Fel Stamina, 3/3 Nether Studies, 2/2 Master Summoner,
  1/1 Power Overwhelming → 3/3 Unholy Power OR 3/3 Demonic Precision (if fighting many high-level
  mobs), 5/5 Fel Stamina, 5/5 Master Demonologist, 1/1 Soul Link, 3/3 Unleashed Potential (1.18.1,
  if gear supports it) → 3/3 Improved Agony, 2/3 Soul Siphon OR 2/2 Nightfall OR 2/2 Improved
  Life Tap (author leans Soul Siphon) — [[d:warlock#1482503137041584229]]. Alternate order:
  5/5 Imp Corruption first, then Fel Int, then back to Affliction for Fel Concentration — [[d:warlock#1482503293858086996]]; cited generally at [[d:warlock#1479002004322779217]] and [[d:warlock#1479002303821385728]] (early Fel Intellect buffs demon phys/spell dmg via Int transfer).
- **Demo leveling stat priority:** Int and Stam over SP until you have a Shadoweave-tier set
  (~100+ SP), then prioritize Stam/Int with SP opportunistically; Shadoweave set usable all the
  way to 60 — [[d:warlock#1482500870666194975]], [[d:warlock#1482501029407756318]].
- **Fire leveling** is possible but painful: mana runs out fast, pulls threat off your demon, very
  gear (SP) dependent, and key spells unlock late (Soul Fire lvl 30, Conflagrate lvl 40); "worth
  trying, not recommended", best suited to 5-man dungeons — [[d:warlock#1478893299388649583]] (+2 reactions), [[d:warlock#1478904592682061935]]. Fire leveling talent order: Cataclysm→Bane→Devastation→(free choice)→Ruin→Improved Immolate→(free choice)→Conflagrate→fill — [[d:warlock#1478910409527398461]].
- **Affliction leveling** widely called the strongest/safest leveling and open-world-farming spec
  — [[d:warlock#1482466006902374411]], [[d:warlock#1485608962618294353]]. Example leveling
  progression with talent-builder links (void tank+dot+wand core, siphon life added by 33, immolate
  dropped, Shadoweave set collected from 37) — [[d:warlock#1487115677218115665]].
- **Demo recommended for HC/inexperienced levelers** (tankier pet, more forgiving); Affliction
  recommended instead for the "Trial of Heroism" (only-elite-XP) 1.18.1 challenge due to its 10%
  hit — [[d:warlock#1482497977531498572]], [[d:warlock#1482498807831728288]].
- Warlock can level to 60 with talent points spent almost randomly or not spent at all and still
  be safer than nearly any other class — [[d:warlock#1482484924572368937]], [[d:warlock#1482499109007917128]], [[d:warlock#1484161860742680686]].
- Pet roles while leveling: Imp = ranged damage, Succubus = melee damage, Voidwalker = tanking,
  Felhunter = PvP pet (kick + stealth detection) — [[d:warlock#1480688101943808205]] (+2
  reactions). Dungeons: Imp/Succubus preferred over Voidwalker since they can stay invisible and
  are less likely to accidentally pull — [[d:warlock#1485668056544841840]].

## Rotation: single target
- **Affliction core (unchanged by patch):** Curse (Agony/Elements/Recklessness) → Corruption →
  Siphon Life → Drain Soul filler. Never use Immolate in the affliction rotation — [[d:warlock#1478873883200323767]]. Dark Harvest should be used only when: (1) Shadow Vulnerability is up, (2) it will last the dots' full duration, (3) as a finisher; otherwise Drain Soul does more damage and is always available — [[d:warlock#1480626773212397658]] (Buubah's 3 rules), [[d:warlock#1479472912452030665]] (Refrigerador: "Drain soul does more dmg than harvest if you don't have shadow vulnerability up").
- Drain Soul costs mana per tick (not fully upfront), so it can be interrupted with zero mana loss
  — [[d:warlock#1481381182863052983]].
- **Threat-optimal dot order:** apply lowest-damage/longest-duration dots first so damage ramps
  gradually for the tank — Siphon Life → Corruption → Curse → Drain Soul, since Agony/Corruption/
  Siphon Life have 30/24/18s durations "specifically because of the ordering they should be applied
  to allow the tank to generate threat" — [[d:warlock#1483664616130347188]] (detailed).
- **Post-patch top parsers reportedly skip Dark Harvest almost entirely**, using Drain Soul as the
  constant filler and only using DH to finish off a dying target quickly — [[d:warlock#1488508223748177991]], [[d:warlock#1488520834216890489]].
- **Demonology:** Curse of Recklessness (physical dmg amplifies both you and pet threat) → Corruption/Immolate only if trash will live >18s, else straight to Shadow Bolt spam; on bosses,
  weave Searing Pain to build 3 Unleashed Potential stacks (3s post-patch) then Shadow Bolt; no
  extra "rotation" spells beyond watching pet health/cooldowns — [[d:warlock#1483907298123448390]], [[d:warlock#1484699675801157766]], [[d:warlock#1485512658433343609]], [[d:warlock#1487040479907287240]] (prefer CoReck since demons deal physical dmg and it also amplifies tank threat).
- **SM/Ruin:** Corruption/Curse/Siphon Life setup then Shadow Bolt spam filler with Shadowburn
  finisher; in dungeons the setup overhead is too slow — recommended to skip dots and pure Shadow
  Bolt spam instead — [[d:warlock#1486106219427926017]], [[d:warlock#1486106500270395473]].
- **Fire/Destro:** Immolate → Conflagrate → Searing Pain spam post-buff; Soul Fire still hits
  harder per-cast (crit ~6k vs Searing Pain crit ~3k) and can be pre-cast, so it stays in rotation
  despite Searing Pain's dps-per-cast edge — [[d:warlock#1485580656120565841]], [[d:warlock#1485578125935906857]]. Shadowburn's relative value rose after the Searing Pain nerf/rework era
  and pre-patch, used as a finisher/instant weave — [[d:warlock#1480678692064858223]], [[d:warlock#1480678997980348538]].

## Rotation: AoE / multi-target
- **Multi-dot macro (Cursive):** fallback-chain macro casting Siphon Life → Corruption → Curse of
  Agony in priority order via `Cursive:Multicurse(...)`, shared in full by Frolegacy — [[d:warlock#1481741196404723823]]; simpler chain (Curse of Agony → Corruption → Siphon Life → Drain Soul) shared by biloen — [[d:warlock#1480624630120185978]]. Cursive's Multicurse ignores out-of-combat and CC'd targets by default (opt-in `allowooc` flag needed to change) — [[d:warlock#1481745133362876457]].
- Fast-dying trash: use Hellfire/Rain of Fire; slower trash: dot then drain — [[d:warlock#1478873883200323767]].
- **Destro AoE:** Hellfire's coefficient buff (see Changes section) was large on paper but felt
  small in play; no talent buffs Hellfire/Rain of Fire specifically, community requested Pyroclasm
  be changed to buff Hellfire/RoF by 10/20% — [[d:warlock#1486020630502707371]], [[d:warlock#1486025258933813329]] ("if there is one thing Destro should be good at, it is AoE").
- **Demo pet choice for AoE:** Felguard hits hardest in AoE; Infernal is decent at both single-
  target and AoE with the lowest cooldown and fire immunity; Doomguard is best single-target with
  utility (Cripple, War Stomp) — [[d:warlock#1485736529501491250]], [[d:warlock#1487819391289659432]].
- **Farming AoE:** Deep Affliction preferred over Demo for solo AoE farming (e.g. Hyjal satyrs,
  ZG crocs) because Curse of Shadow auto-applies Agony with an instant tick that extends mob leash
  range, and greater-demon pathing bugs make Demo farming unreliable — [[d:warlock#1479253067709943931]], [[d:warlock#1479283757495095469]], [[d:warlock#1483555239897600020]] (ZG pathing "atrocious, almost guaranteed to make you uninstall").

## Stats, caps, weights
- **Hit cap:** 16% total needed to never miss a raid boss; Affliction gets 10% baseline from
  Suppression, so only needs ~6% from gear; PvP hit follows a 3/4/5% rule for level 60/61/62
  targets — [[d:warlock#1478734333920415787]], [[d:warlock#1478877368427872398]], [[d:warlock#1479188460219928841]] (Frolegacy: hit cap is the single biggest priority for Affliction/SM-Ruin before haste/crit/SP/pen).
- **Demo hit:** can run a "soft cap" of ~6-9% and still perform well since pet damage carries
  (Afraido) — [[d:warlock#1482552774196727930]]; refined post-patch consensus: aim for 6% so
  demon "orange hits" (with 3/3 Demonic Precision) don't miss behind the boss, 16% total ideal
  for warlock+demon spells together, realistic target 11-12% with an upcoming TMH item —
  [[d:warlock#1486868497693937906]], [[d:warlock#1486868596096241805]].
- **Hit/crit-to-SP conversion (Afraido, ~1000 SP):** 1% hit ≈ 18 SP, 1% crit ≈ 13 SP in raw dps
  value — [[d:warlock#1482828212525469856]]; a related estimate: SB coefficient means 1% crit
  value scales with SP (higher SP → higher effective crit value) — [[d:warlock#1486035628561797263]].
- **Haste math (Affliction):** raw SP is generally preferred over haste by players, but at SP >
  500, 1% haste ≈ 14 SP in raw dps and rises with SP; formula given: `1% haste = 0.01 * (base + SP
  * coef) / coef * (1 - haste)` — [[d:warlock#1483207560721858722]], [[d:warlock#1483212049680040108]], [[d:warlock#1483215141590798552]].
- **"Haste breakpoints" — contested:** Frolegacy and others describe real breakpoints around 13%,
  22-23%, and ~40s+ where extra haste doesn't shorten Dark Harvest/dot windows due to rounding —
  [[d:warlock#1483234390489432064]], [[d:warlock#1483235518861807678]], [[d:warlock#1483236802599977073]]; disputed as pure visual rounding with no real DPS cliff by Nezu/Papaverine/Mooncrazed and Afraido ("the haste table is a scam many people fell for") — [[d:warlock#1483947828341637150]], [[d:warlock#1483949171743391886]]; biloen's own testing found no missing DPS at any of the claimed breakpoints — [[d:warlock#1483237141013074162]], [[d:warlock#1483237235011620969]]. Post-patch, a player reports the 12%→13% difference is now actually noticeable — [[d:warlock#1488492328862744596]] (**contested, unresolved**).
- **Demo:** haste does NOT benefit pets/demons at all (only speeds Unleashed Potential stacking
  marginally); Hit and Crit are what benefit the demon (crit especially — demon attacks get the
  full 2x crit multiplier, described as "double dipping") — [[d:warlock#1488467880667381891]], [[d:warlock#1488619415791734956]], [[d:warlock#1488619480820088862]]. No gear set (T2/T2.5/T3) meaningfully benefits Demo — "get some hit some crit" — [[d:warlock#1483624063388618843]].
- **Damage-buff multiplier stacking** (all multiplicative, not additive): 10% Shadow Mastery, 20%
  Shadow Vulnerability, 10% Curse of Shadow, 15% Shadow Weaving, 10% Nightfall, 6% Soul
  Entrapment, 4% Demonic Sacrifice → max multiplier 2.024866272 — [[d:warlock#1483585782068281344]], reposted [[d:warlock#1486717785844486205]].
- **Spell pen:** only useful against specific high-resist bosses (e.g. Mephistroth ~200 Shadow
  Resist); resistance floor is 0, so spell pen beyond what's needed to zero out a boss's
  resistance (after curses) is wasted — clear explanation by Afraido — [[d:warlock#1483224035738390630]]; Frolegacy wants Meph resist pushed below 75 specifically — [[d:warlock#1483224880731394129]].
- **Demon Intellect→Spell Power:** a demon's Intellect converts 100% to its own Spell Power; Fel
  Intellect (talent) transfers 30% of the warlock's own Intellect to the demon — [[d:warlock#1484210226877173851]], [[d:warlock#1484214562004930621]] (~+150 SP to demon at raid-geared Int).
- **Full pet AP/SP scaling table (pinned, by W):** Warlock pets gain SP equal to their own
  Intellect; AP-to-weapon-damage scaling: Voidwalker 20%, Succubus 40%, Felhunter 30%,
  Infernal/Felguard/Doomguard 60%. SP scaling of max-rank pet spells: Imp Firebolt 40%; Voidwalker
  Torment 60%, Sacrifice 120%, Suffering 40%; Succubus Lash of Pain 60%; Infernal Immolation 25%
  per tick; Felguard Legion Strike 60%, Felstorm 25% per tick; Doomguard Infernal Blade 5% per
  tick, Rain of Fire 8.3% per tick — [[d:warlock#1488156105111633930]] (+3 reactions, pinned on
  request).
- Devastation's crit benefits both warlock and demon; Improved Searing Pain benefits only the
  warlock, not the demon — [[d:warlock#1485601104212525188]].

## Gear, BiS, pre-raid, set bonuses
- **Affliction pre-K40 BiS (Buubah):** 5/5 T2.5 set, Choker of the Fire Lord, Cloak of the
  Devoured (or Corruption's cloak if no C'thun access), Arcane Accuracy Bracers for hit (else
  Burrowers), T3 belt, Ring of the Fallen God, T3 ring or True Band of Sulfuras, Tear trinket,
  Sapphiron trinket (Whip is a good alt trinket), Wraith Blade weapon, Master Dragonslayer orb
  offhand — [[d:warlock#1480617902515425378]] (+1 reaction).
- **T2.5 5-set > T3 for deep Affliction:** T2.5's +5% Agony damage and Dark Harvest's 400%-damage
  final tick outweigh T3's instant-tick-on-first-Agony-application, because early dot ticks are
  weak anyway; full T3 8-piece considered mostly "useless" for Affliction pre-T3.5 — [[d:warlock#1480617902515425378]] area, [[d:warlock#1480716025883262986]], [[d:warlock#1480541806080037041]] (Derichunddu: "for affli T3 is like useless... just stick with T2.5 till K40, only waist and maybe T3 finger are worth it").
- T3 4-piece Affliction bonus changed in 1.18.1: from an instant Agony tick on application to 4
  ticks of 100% more Agony damage — [[d:warlock#1479284944386920509]].
- T3.5 3-piece bonus nerfed post-launch: extra Siphon-Life-on-Dark-Harvest damage cut from 50% to
  25% (see Changes section) — [[d:warlock#1484639895774298112]].
- Felheart (T3) 5-set bonus tested in-game at only ~0.5-1% extra damage, seen as very weak
  compared to other classes' set bonuses — [[d:warlock#1480464528817917965]], confirmed by
  biloen's own math ("probably bad") — [[d:warlock#1480529521395499019]].
- **Nightfall axe** (T3/T3.5-era weapon) is rarely worn because its base weapon damage (67 dps) is
  far below Kara40-tier weapons (~100 dps); beta log analysis showed Nightfall's actual dps
  contribution is only ~1% overall / ~1.3% boss-only — [[d:warlock#1482927646286413896]], [[d:warlock#1482928258449412216]], [[d:warlock#1482966685244985344]].
- **True Band of Sulfuras (TBOS)** is weak for Affliction (proc doesn't synergize with dots/
  channels, reported ~1% uptime), but becomes attractive for Fire/SM builds after the Searing Pain
  buff since the proc needs direct-damage casts — [[d:warlock#1480998172821033106]], [[d:warlock#1480999109451059414]], [[d:warlock#1487030897843765328]] ("TBoS might become bis for fire lock").
- **Demo/Destro default to T1/T2 sets** (T2.5/T3 belong to Affliction by default and must be
  manually converted at the token vendor); no dedicated T2 set for Demo exists ("might see one in
  Timbermaw") — [[d:warlock#1484147919224307813]], [[d:warlock#1486813098919854310]].
- Demo BiS trinkets: a rare Moonwhisper trinket gives +3% demon damage — [[d:warlock#1485510693149999174]]; Ancient Cornerstone Grimoire (Ony) gives +5% pet/enslaved-demon
  damage and health post-patch — [[d:warlock#1479499241583018158]]. Weapon options: BM Sword or
  Lucid Nightmare + offhand, or Shadow Wing Focus Staff — [[d:warlock#1487941642945167370]].
  Angelista's Grasp (BWL belt) recommended over Tear trinket for hit — [[d:warlock#1485403461787979828]].

## Enchants, imbues, oils, poisons, stones
- ZG head/leg enchant valued at ~18 SP-equivalent vs. haste enchants worth ~13-15 SP — [[d:warlock#1483232982620962991]]. Shoulder haste enchant called the only clearly "worth it"
  haste enchant slot (gloves situationally good too) — [[d:warlock#1483210452153401545]], [[d:warlock#1483215553278640278]].
- Whether Shadow Oil (Shadowbolt III on wand) procs the Shadow Vulnerability talent was
  **unresolved/untested** at time of discussion — [[d:warlock#1482797741393449052]], [[d:warlock#1482806048241881191]] (question unanswered). Frost oil preferred for melee-hybrid
  spellpower builds since it isn't ppm-locked, unlike Shadow oil — [[d:warlock#1482808093204021398]].
- Improved Stones (talent) buffs both Wrathstone (threat reduction) and Felstone (heal amount);
  reported bugged post-patch — Felstone's Improved Stones bonus tooltip and actual heal only
  showing 4% instead of the intended amount — [[d:warlock#1488672252454113432]].

## Consumables & world buffs
- Arcane Resist target of "~200 AR" for the Anomalus fight (Kara40), achieved via crafted
  legs/hat/neck/cloak — [[d:warlock#1480327194751537152]], [[d:warlock#1480332373769060568]]; an
  Arcane Resist raid buff is also available from Emerald Sanctum for guilds not wiping on early
  bosses/trash — [[d:warlock#1480483435956011048]].
- Free Action Potion trivializes the War Stomp stun interrupting the Ritual of Doom (Doomguard)
  quest channel — [[d:warlock#1485500197906809004]].
- Haste potions/Juju Flurry benefit Affliction (dots) and should also be used by Destruction;
  Potion of Quickness shares a cooldown with other protection potions — [[d:warlock#1486559373244370974]], [[d:warlock#1486559622839013456]].

## Cooldowns, resources, threat, utility
- **Full Turtle WoW class threat-modifier table (Afraido):** Warlock 100% base threat, 90% with
  Demonic Sacrifice or Voidstone, 85% with Improved Stones, 81% with Demonic Sacrifice + Voidstone,
  76.5% with Demonic Sacrifice + Improved Stones (compare Warrior Defensive 130%/149.5%, Paladin
  Prot 100%/160%/205%, Priest Shadow 100%/75%/60%, etc.) — [[d:warlock#1483641110197833728]].
- **Warlock has no active threat-reduction ability/talent, unlike every other class** — a major,
  repeated community complaint — [[d:warlock#1483588270486196435]] (+4 reactions: "there is no
  reason to not have some base threat reduction in talents, warlock is the only class that doesn't
  have it baseline"), [[d:warlock#1485689509197774958]] (Szalor: "we have no way of reducing
  [greater demon] threat. No talent, no button to press, nothing").
- Devs reportedly rejected a proposed Demo threat-reduction talent, stating "threat is a mechanic"
  and warlocks "shouldn't have easy access to threat reduction" — [[d:warlock#1483584976875421726]].
- Greater demons generate very high threat (e.g. Doomguard's Infernal Blade ticks every 1s, not
  3s, and scales with spell damage) and get **no benefit at all** from Salvation, Tranquil Air,
  Life Insignia of the Dawn, or Voidstone — [[d:warlock#1485688749441421413]], [[d:warlock#1485689879945023580]], [[d:warlock#1485689509197774958]].
- **Demonic Sacrifice math:** sacrificing a demon for its % damage bonus is worth more than the
  flat percentage suggests because damage-% buffs multiply rather than add — [[d:warlock#1483585681996382291]].
- **Soul Link / greater demon duration:** with Soul Link, enslaved/greater demons stay controlled
  for 3 minutes (down from indefinite pre-nerf-era); if they break outside Soul Link they die
  instantly with no re-enslave — [[d:warlock#1479475737424560179]], [[d:warlock#1485031980365254739]], [[d:warlock#1486017642992107611]].
- **Infernal/Doomguard "kill switch":** an out-of-control Infernal/Doomguard dies instantly the
  moment ~800+ healing occurs anywhere in the raid — even incidental healing not targeted at the
  warlock — but this trick does **not** work inside instances — [[d:warlock#1482855326738022452]], [[d:warlock#1482855594552721624]], [[d:warlock#1482856518306238606]].
- **Curse of Doom** is nearly useless: single tick after 60s, needs a killing blow for only a
  ~5-10% chance to summon a Doomguard, doesn't work on players or their pets, scales worse than
  sustained Curse of Agony if kept up — [[d:warlock#1486519502404456498]], [[d:warlock#1486519711834308789]], [[d:warlock#1486519781594103941]], [[d:warlock#1486520134133879036]], [[d:warlock#1486520436111184095]]; Malediction is argued to make it "not useless" by L-star — [[d:warlock#1480681083044630750]] — **contested** with Afraido's "completely useless now, needs a buff" — [[d:warlock#1480678133287096365]].
- Health Funnel/Soul Funnel to enslaved demons (e.g. ZG-farmed Imp) was nerfed hard post-patch —
  can no longer heal such demons above ~50% — [[d:warlock#1486018079048732792]], [[d:warlock#1486018181435756765]].
- Healthstone/Soulstone simplified to one rank each post-patch (see Changes section);
  soul-shard cost to summon a greater demon reported as tripled by one user — [[d:warlock#1484466003944538162]] — but another clarifies the shard-cost change is specifically about
  Soulwell/soulstones, not greater demon summoning — [[d:warlock#1484476279435821057]], [[d:warlock#1484476430493417472]] (**unclear/contested exactly which cost changed**).

## Tanking specifics
- **Drain tanking** (Voidwalker + Drain Life/Drain Soul) works best on large packs of non-elite
  mobs; against elites the recommended strategy is chain-fear instead — [[d:warlock#1484651182184988926]] (Cinamo/Odessyus).
- **Warlock tanking Twin Emperors (AQ40):** tankable by a Demonology/Affliction-geared warlock
  (reported as viable by a Boomkin-comparison poster); needs ~220 minimum Shadow Resist to remove
  non-resist rolls, and the ability to generate ~5k threat in a few seconds on the teleport swap —
  [[d:warlock#1483897559482237008]], [[d:warlock#1483897719197270167]]. Tactic: dot the boss ~10s
  before a teleport and run back, or dot+Dark-Harvest immediately after the teleport, saving Dark
  Harvest for each swap; standing inside the melee boss before a teleport (so its explosion damage
  is guaranteed on the outgoing tank) is an advanced/optional strat some groups skip — [[d:warlock#1483899063752724540]], [[d:warlock#1483897170183721184]] area, [[d:warlock#1483870059373002863]] (10s pre-teleport dot + Dark Harvest routine, "nowadays I don't even respec").
- **Historical warlock "tank-lock" viability (pre-this-patch):** hellfire + high stam + good
  healing let warlocks off-tank/clear 5-mans (Strat, Scholo) extremely fast; this was later gutted
  when the 20% healing bonus from Master Demonologist was removed — recommend 2 healers if
  attempting it now — [[d:warlock#1488027177860595754]], [[d:warlock#1488027202602799194]], [[d:warlock#1488030213731385435]], [[d:warlock#1488030513989161092]].
- **Firelock tanking:** viable with Wrathstone (gives 40-60% talented extra threat and reduced
  Hellfire self-damage) for dungeons/ZG; Demo with Soul Link considered safer for tougher fights
  like Hakkar — [[d:warlock#1486355435609919620]], [[d:warlock#1486365336855904346]]. Demon Armor
  (talented, Fire) gives ~+400 armor for ~25% damage reduction; Demo's Soul Link (20%) + Master
  Demonologist (10%) gets closer to real tank-level mitigation (~50% with armor) — [[d:warlock#1486370117850763284]]. Progression suggested: start tanking as Demo/Soul Link, move to
  SM/Ruin, then full Destro as gear improves — [[d:warlock#1486368023609872534]], [[d:warlock#1486368143952576643]].

## Dungeons & raids (tactics by instance / boss)
- **Kara40, Anomalus:** wear ~200 Arcane Resist (legs/hat/neck/cloak crafted pieces) — [[d:warlock#1480327194751537152]], [[d:warlock#1480332373769060568]]; ES also provides an Arcane
  Resist buff for guilds clearing fast — [[d:warlock#1480483435956011048]].
- **Kara40, greater-demon pathing:** demons cannot be hidden behind pillars due to a pathing bug,
  and lag ~3s behind "return to owner" commands compared to before — [[d:warlock#1480292848183148544]], [[d:warlock#1480305723647987803]].
- **Meph (K40)** is called a uniquely bad fight for warlocks despite being the "anti-demon class"
  fight: ~200 Shadow Resist on the boss, no non-fire AoE for imps, spell-pen needed specifically
  for this boss — [[d:warlock#1483594395763736697]], [[d:warlock#1483224700074066131]], [[d:warlock#1483224880731394129]].
- **MC/BWL/Ony fire-immune bosses:** Doomguard/Infernal underperform Succubus on these fights;
  Infernal can be used effectively on Firemaw specifically (fire immune, can tank the aura and
  funnel-sustain there) — [[d:warlock#1479532127539302613]], [[d:warlock#1479597163641307216]], [[d:warlock#1479597279165026538]].
- **BWL fire immunity list:** Vael, the 3 drakes, and Nefarian are immune to fire; Broodlord,
  Chromaggus, the new ogre/goblin boss, and "basically every trash mob" in BWL are not — [[d:warlock#1488208031111188640]], [[d:warlock#1488208177421095143]].
- **Greater demon choice by boss (community consensus list):** Gnarlmoon→Infernal; Incantagos→
  Felguard; Anomalus→Doomguard (swap to Infernal if it dies); Medivh→ideally Felguard; later bosses
  → whatever demon is available given raid clear speed — [[d:warlock#1482836194642362511]].
- **Gnarlmoon** is specifically bad for Demo (Soul Link, red/blue moon, owl aura, and ravens kill
  greater demons); Affliction can multi-dot the owls there, "best use case for playing affliction"
  — [[d:warlock#1483593205508341771]].
- **AQ20, 2nd boss:** summoning an Infernal specifically can flag the warlock PvP / turn NPCs
  hostile — [[d:warlock#1486387499973738608]] (question, no confirmed fix found in-chunk).
- **Dire Maul West, ghost mobs** are cited as the one PvE use for Detect Greater Invisibility —
  [[d:warlock#1478262016820121713]] (+1 reaction).
- **Dreadsteed quest (DM:W final boss):** not too hard even pugged; bring plenty of soul shards
  and tell the group in advance you want that boss, since PUGs often skip it if unaware — [[d:warlock#1488259139070333009]] (+1 reaction).
- **Doomguard summon quest (Ritual of Doom):** the Doomguard Commander's War Stomp interrupts the
  prison channel with a 5s stun repeatedly; a Free Action Potion removes the problem entirely — [[d:warlock#1485495255187853442]], [[d:warlock#1485500197906809004]].

## PvP
- Affliction is broadly considered the best warlock PvP spec, largely due to Curse of Exhaustion
  ("make melee lives hell... DoT all from afar") — [[d:warlock#1484223085690486845]], and because
  most Horde PvP opponents pick Forsaken (immune to Fear), making Affliction's non-fear tools more
  reliable — [[d:warlock#1485611672000266320]].
- **Destruction in PvP is considered very weak/"a wheelchair spec":** no Curse of Exhaustion, must
  hard-cast everything (e.g. Immolate from 36y), and by the time a cast finishes a warrior has
  already closed to charge range and stacked instants on you — "playing anything else than affli
  in PvP is trolling" — [[d:warlock#1487499992615882772]] — but a dissenting long-time Destro PvP
  player on Tel'Abim reports it's "very underrated" with ~30% crit, the AQ20 3-piece 1-sec-cast
  Immolate bonus, and 5k+ HP, moving points from instant-Corruption into demon-speed/Fel
  Intellect for Succubus sustain — [[d:warlock#1487531377367711785]] (**contested**).
- Curse of Exhaustion (40% slow, 36yd range, instant, 12s duration, no cooldown) is called "the
  single biggest reason we can't have nice things" because of its PvP power, and is cited as the
  reason devs won't buff other warlock PvP tools — [[d:warlock#1485514505982312599]], [[d:warlock#1485518155550818314]].
- PvP hit rule: 3/4/5% for level 60/61/62 targets respectively — [[d:warlock#1478734333920415787]].
- Killing rogues as Affliction: trinket the opener, then Death Coil/double Fear/CoE/dot/drain;
  called "one of the easier classes to solo" as Affliction — [[d:warlock#1479969109692125224]],
  [[d:warlock#1479969431651352821]] (alt: Succubus seduce on the jump, or Felhunter to catch
  stealth).
- Warlock PvP set bonus complaints: current PvE-reused PvP set gives Immolate cast-time reduction
  (useless, GCD-capped anyway) and no meaningful bonuses; multiple community-proposed alternatives
  (avoid-interrupt %, instant Howl of Terror on long CD, stam/resil/vamp) — [[d:warlock#1487295662319075512]], [[d:warlock#1487296118521069689]], [[d:warlock#1487427619803889724]], [[d:warlock#1487438085804396688]] ("its crap for everyone... little more stam and shit set bonuses").

## Macros, addons, UI
- **Core addon stack repeatedly recommended:** SuperWoW, Cursive, Cleveroid/RoidMacros, aDF for
  dot countdowns and casting macros — [[d:warlock#1479283928484286494]].
- **Cursive Multicurse macros** — priority-fallback chain casting Siphon Life → Corruption →
  Curse of Agony (full Lua shared) — [[d:warlock#1481741196404723823]]; simple one-liner
  `/cursive multicurse Corruption|HIGHEST_HP` — [[d:warlock#1480543912207843470]]; requires
  SuperWoW/nampower to function (nampower version mismatches repeatedly broke Cursive through
  this chunk, with community-shared rollback instructions) — [[d:warlock#1483888636943532225]]–[[d:warlock#1483895877298028554]] (Dots' rollback fix, thanked).
- **DoiteAuras** ("Vanilla WeakAuras Light") — actively developed through this chunk with warlock-
  specific work: pet/demon aura+ability tracking (buff/debuff without targeting), Unleashed
  Potential stack/refresh tracking requests, remaining-time-on-different-buff icon linking —
  [[d:warlock#1478705109369356361]], [[d:warlock#1483219790200836187]], [[d:warlock#1483559623503118448]].
- **KevinTracker** — a simple standalone addon to track Greater Demon and Enslave Demon timers,
  by Blackfox — [[d:warlock#1479627645816803356]] (+1 reaction).
- **Necrosis (TWoW fork)** — broke after the 1.18.1 patch; community-maintained forks exist
  (github.com/Nedlinin/necrosis-twow reported broken, github.com/pylebecq/necrosis-twow works but
  lacks Cursive integration for dot timers) — [[d:warlock#1485242989499515073]], [[d:warlock#1485287910810063008]].
- Shard/Healthstone management addon: "ShardCapPlus" can auto-delete excess soul shards outside a
  shard bag — [[d:warlock#1483496505921896580]]; Necrosis can also limit shard pickup — [[d:warlock#1484454434485305384]].
- Pet-conditional macros: `/script CastSpellByName("Sacrifice")` / `("Seduction")` /
  `("Spell Lock")` for Voidwalker/Succubus/Felhunter respectively — [[d:warlock#1479235229880156311]]; simplest imp attack fix is `/script PetAttack();` when `/petattack` fails — [[d:warlock#1483149237691748616]].
- **HeadshotHank's web AtlasLoot port** for Turtle WoW: https://mrdobby92.github.io/TurtleAtlasLootWeb/ — [[d:warlock#1487752926309912696]].

## Races, professions, gold
- **Race popularity/utility:** Undead and Troll are the most popular races and top PvP/PvE picks
  respectively; Dwarf not yet released at start of chunk — [[d:warlock#1478182059657789624]].
  Orc's Blood Fury considered stronger for damage output than Troll's Berserking after a Berserking
  nerf (10% baseline, down from a higher value) — [[d:warlock#1482238928583921767]], [[d:warlock#1481624157522366567]]; but Orc's demon-command racial ("Command", +5% pet/demon damage)
  is a fairly minor contributor (~5-6% of total SM/Ruin damage from the pet) — [[d:warlock#1481622686604984361]]. Undead and Human cited for "the animations" (aesthetic) — [[d:warlock#1479561151195910285]]. On horde, Tel'Abim has far more Undead warlocks than any other
  race/class combo per server population data — [[d:warlock#1479292245164425298]], [[d:warlock#1479292452061057188]].
- **Gold farming:** solo-farming Hyjal demon satyrs as deep Affliction (dot everything, run in a
  circle, loot) for cloth/shard drops rivals AoE-pull speed — [[d:warlock#1479253647144517834]];
  ZG croc farming for fish-boss summon mats plus Mudskunk fishing afterward is also strong — [[d:warlock#1479258250263269557]], [[d:warlock#1483141959554957332]]. Demo is specifically good
  for solo ZG farming (enslave-and-tank play) but weak for most other farms compared to
  Affliction — [[d:warlock#1479257886113792000]]. Leatherworking (cured hides, Mooncloth,
  arcanite bars) provides steady passive gold from T3-token demand — [[d:warlock#1482004168993542207]], [[d:warlock#1482004369577873581]].

## Bugs & quirks
- Greater demon pathing broken since a mid-January maintenance and unresolved throughout this
  entire chunk despite repeated dev tags; devs reportedly said "it is not easy to fix," disputed
  by players who say it's a straightforward Git revert — [[d:warlock#1483126540035162243]], [[d:warlock#1483140280734453982]], [[d:warlock#1483140372183122022]], [[d:warlock#1483140534049706105]].
- Post-patch: greater demons frequently spawn hostile and instantly attack/kill themselves on the
  warlock across multiple content types (ZG, AQ20, Naxx, Emerald Sanctum, Solnius, Mephistroth) —
  widely reported as intermittent/random, not fully understood — [[d:warlock#1484597007854211103]], [[d:warlock#1485245151994450053]], [[d:warlock#1486582966170816624]], [[d:warlock#1488010897396989972]].
- Pet fear-lockout bug: pets stop responding to any commands after a Fear ends (even once the fear
  duration is over); switching the pet to Follow reverts it, but the underlying bug is long-
  standing — [[d:warlock#1484679948105941122]], [[d:warlock#1484680647015661578]].
- Pet name reroll trick (may be patched): summon pet, cast Eye of Kilrogg, log out/in, resummon —
  pet gets a new random name (and forgets its trained abilities, since it's treated as new) — [[d:warlock#1481779376470098001]], [[d:warlock#1481779607546892358]].
- Demons vanish/get lost when traveling by boat or zeppelin across a loading screen — confirmed
  as expected Turtle behavior, not a bug per se — [[d:warlock#1488016423220543599]], [[d:warlock#1488017534639800370]], [[d:warlock#1488021762233860168]].
- Cursive repeatedly broke on nampower version mismatches after client/launcher updates; rollback
  to a pre-merge commit was the standard community fix — [[d:warlock#1483888636943532225]], [[d:warlock#1483893754849919137]], [[d:warlock#1483894051907571743]] (full manual steps given), reused later at [[d:warlock#1486004763018526800]]–[[d:warlock#1486005339404111953]].
- Improved Stones talent bug (Felstone specifically): tooltip and actual heal amount both stuck at
  4% instead of intended value; respeccing does not remove the Improved Wrathstone effect either
  — [[d:warlock#1488672252454113432]].

## Contested / open questions
- Whether Dark Harvest actually *shortens* dot duration or just adds extra ticks within the
  existing duration was unresolved in-thread — [[d:warlock#1484965985286095061]], [[d:warlock#1484966187245895722]] ("From what I've seen it definitely seems like it shortens the
  duration" — no authoritative confirmation given).
- Whether Shadow Oil (wand enchant) procs the Shadow Vulnerability talent — question raised twice,
  never definitively answered in this chunk — [[d:warlock#1482797741393449052]], [[d:warlock#1482806048241881191]].
- Exact cause/scope of the "3x soulshard cost" complaint — one user says summon cost tripled,
  another says it's actually a Soulwell/soulstone-only change — [[d:warlock#1484466003944538162]], [[d:warlock#1484476279435821057]] (**question effectively unresolved**).
- Whether the new AQ20 2-piece "+5%" type bonuses apply to greater demons at all — [[d:warlock#1487483330969731192]], partially answered ("it does, but for the longest time it wasn't working on demon spells so I wonder whether that got
  fixed") — [[d:warlock#1487525502825660566]] (**unconfirmed**).
- Destro PvP viability — flatly dismissed by Tapka as trolling-tier [[d:warlock#1487499992615882772]] vs. a detailed positive first-hand report from Qazdur [[d:warlock#1487531377367711785]] (**unresolved, opposing first-hand accounts**).
