# NPCs and vendors

Custom vendors, trainers, flight masters, innkeepers and stable masters that Turtle WoW added, grouped by zone and hub; plus notable custom NPCs and outdoor rares. Structured data: `structured/content/vendors.yaml`.

## Read this first: inventories are almost entirely undocumented

**No source in this extraction lists a Turtle vendor's stock.** The community wiki has a `## Sells` heading on exactly four NPC pages and every one of them contains a literal `...` placeholder — [wiki: Aira Starsworn](https://turtle-wow.fandom.com/wiki/Aira_Starsworn), [wiki: Calaire Solarguard](https://turtle-wow.fandom.com/wiki/Calaire_Solarguard), [wiki: Trevor Melain](https://turtle-wow.fandom.com/wiki/Trevor_Melain), [wiki: Historian Samuel Ravencrest](https://turtle-wow.fandom.com/wiki/Historian_Samuel_Ravencrest). Forum posters link `database.turtlecraft.gg` rather than typing stock lists out, and that database is not part of this extraction.

What **is** documented, and is collected below:

1. **Who the vendor is, what their title says they sell, their level, faction and hub** — from 220 wiki NPC pages tagged as vendors, trainers, innkeepers, flight masters, stable masters or battlemasters on Turtle content.
2. **Reputation quartermaster stock with prices** — the wiki faction reward tables. Those are reproduced in `factions.md`, not repeated here.
3. **A handful of individual items and prices players typed into forum posts** — §2 below.

**Coordinates:** not a single source in this extraction gives an in-game X/Y pair for any NPC. Locations are named sub-zones. This is the single largest gap in this document.

**Source tiers.** Every table row below is *community wiki* (`turtle-wow.fandom.com`), not official. Staff and player statements are marked inline.

---

## 1. Named vendors and service NPCs, by zone

220 rows across 33 zone groupings. "Role" is the NPC's wiki `title` field, which is the in-game subtitle — it says the shop type but not the stock.

### Moonwhisper Coast (38)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Grove of the Sun | [Yadriel Summerleaf](https://turtle-wow.fandom.com/wiki/Yadriel_Summerleaf) | — | 50 | Neutral |
| Moonhoof Retreat | [Argnuhl](https://turtle-wow.fandom.com/wiki/Argnuhl) | Trade Supplies | 53 | Horde |
| Moonhoof Retreat | [Ornak Starstrider](https://turtle-wow.fandom.com/wiki/Ornak_Starstrider) | Priest Trainer | 62 | Horde |
| Moonhoof Retreat | [Ortak Runetotem](https://turtle-wow.fandom.com/wiki/Ortak_Runetotem) | Druid Trainer | 58 | Horde |
| Moonhoof Retreat | [Raltok](https://turtle-wow.fandom.com/wiki/Raltok) | Food & Drink | 54 | Horde |
| Moonhoof Retreat | [Yorla](https://turtle-wow.fandom.com/wiki/Yorla) | Alchemy Supplies | 57 | Horde |
| Moonhoof Village | [Bhulf](https://turtle-wow.fandom.com/wiki/Bhulf) | Leatherworking Supplies | 53 | Horde |
| Moonhoof Village | [Fisher Rainstrider](https://turtle-wow.fandom.com/wiki/Fisher_Rainstrider) | Fishing Supplies | 53 | Horde |
| Moonhoof Village | [Herbalist Moka](https://turtle-wow.fandom.com/wiki/Herbalist_Moka) | Herbalism Trainer | 52 | Horde |
| Moonhoof Village | [Hula Swiftmane](https://turtle-wow.fandom.com/wiki/Hula_Swiftmane) | — | 55 | Horde |
| Moonhoof Village | [Innkeeper Warmbreeze](https://turtle-wow.fandom.com/wiki/Innkeeper_Warmbreeze) | Innkeeper | 53 | Horde |
| Moonhoof Village | [Mhulf Nighthorn](https://turtle-wow.fandom.com/wiki/Mhulf_Nighthorn) | Priest Trainer | 56 | Horde |
| Moonhoof Village | [Mhurl Coarsehoof](https://turtle-wow.fandom.com/wiki/Mhurl_Coarsehoof) | Blacksmithing Supplies | 56 | Horde |
| Moonhoof Village | [Ornala](https://turtle-wow.fandom.com/wiki/Ornala) | General Goods | 53 | Horde |
| Moonhoof Village | [Shanni Silkhoof](https://turtle-wow.fandom.com/wiki/Shanni_Silkhoof) | Tailoring Supplies | 50 | Horde |
| Moonhoof Village | [Sol Greycloud](https://turtle-wow.fandom.com/wiki/Sol_Greycloud) | Flight Master | 55 | Horde |
| Moonhoof Village | [Therul](https://turtle-wow.fandom.com/wiki/Therul) | Weaponsmith & Gunsmith | 52 | Horde |
| Moonhoof Village | [Trader Brightgrass](https://turtle-wow.fandom.com/wiki/Trader_Brightgrass) | Trade Supplies | 50 | Horde |
| Moonhoof Village | [Ulf Stonetotem](https://turtle-wow.fandom.com/wiki/Ulf_Stonetotem) | Artisan Blacksmith | 57 | Horde |
| Moro'gai Village | [Bogtu](https://turtle-wow.fandom.com/wiki/Bogtu) | Fruit Vendor | 25 | Neutral |
| Moro'gai Village | [Cook Rem'sai](https://turtle-wow.fandom.com/wiki/Cook_Rem%27sai) | Village Cook | 48 | Neutral |
| Moro'gai Village | [Dhom](https://turtle-wow.fandom.com/wiki/Dhom) | Tools | 50 | Neutral |
| Moro'gai Village | [Elder Krasheen](https://turtle-wow.fandom.com/wiki/Elder_Krasheen) | Mage Trainer | 48 | Neutral |
| Moro'gai Village | [Elder Sage Azh'okar](https://turtle-wow.fandom.com/wiki/Elder_Sage_Azh%27okar) | — | 55 | Neutral |
| Moro'gai Village | [F'eesh](https://turtle-wow.fandom.com/wiki/F%27eesh) | Fisherman | 35 | Neutral |
| Moro'gai Village | [Fra'phani](https://turtle-wow.fandom.com/wiki/Fra%27phani) | Exotic Creatures | 55 | Neutral |
| Moro'gai Village | [Gallitrea](https://turtle-wow.fandom.com/wiki/Gallitrea) | Jewelcrafting Supplies | 48 | Neutral |
| Moro'gai Village | [Ma'shaka](https://turtle-wow.fandom.com/wiki/Ma%27shaka) | Leather Armory | 35 | Neutral |
| Moro'gai Village | [Master Craftsman T'kalpa](https://turtle-wow.fandom.com/wiki/Master_Craftsman_T%27kalpa) | Foreign Elemental Leatherworking | 48 | Neutral |
| Moro'gai Village | [Omna'kar](https://turtle-wow.fandom.com/wiki/Omna%27kar) | Trade Goods | 50 | Neutral |
| Moro'gai Village | [P'li](https://turtle-wow.fandom.com/wiki/P%27li) | Innkeeper | 50 | Neutral |
| Moro'gai Village | [Z'ahk](https://turtle-wow.fandom.com/wiki/Z%27ahk) | Flightmaster | 55 | Neutral |
| Narvalis Point | [Badel Wildlance](https://turtle-wow.fandom.com/wiki/Badel_Wildlance) | — | 44 | Alliance |
| Narvalis Point | [Elendon Truebough](https://turtle-wow.fandom.com/wiki/Elendon_Truebough) | Weapons | 44 | Alliance |
| Narvalis Point | [Irea Dawncaller](https://turtle-wow.fandom.com/wiki/Irea_Dawncaller) | Accommodations | 50 | Alliance |
| Narvalis Point | [Merellanea](https://turtle-wow.fandom.com/wiki/Merellanea) | Hippogryff Master | 56 | Alliance |
| Narvalis Point | [Seltarii Skycloud](https://turtle-wow.fandom.com/wiki/Seltarii_Skycloud) | Reagents & Poisons | 45 | Alliance |
| Sunsworn Camp | [Arcanist Elmarine](https://turtle-wow.fandom.com/wiki/Arcanist_Elmarine) | Expedition Supplies | 45 | Alliance |

### Northwind (28)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Ambershire | [Florette DeMure](https://turtle-wow.fandom.com/wiki/Florette_DeMure) | Herbs and Flowers | 30 | Alliance |
| Ambershire | [Griselda Tilley](https://turtle-wow.fandom.com/wiki/Griselda_Tilley) | Fishing Supplies | 46 | Alliance |
| Ambershire | [Herbert Kent](https://turtle-wow.fandom.com/wiki/Herbert_Kent) | Weapon Merchant | 39 | Alliance |
| Ambershire | [Leander Hering](https://turtle-wow.fandom.com/wiki/Leander_Hering) | — | 45 | Alliance |
| Ambershire | [Leonhart Hamel](https://turtle-wow.fandom.com/wiki/Leonhart_Hamel) | Gryphon Master | 55 | Alliance |
| Ambershire | [Lucia Gallagher](https://turtle-wow.fandom.com/wiki/Lucia_Gallagher) | Trade Goods | 44 | Alliance |
| Ambershire | [Smith Martin](https://turtle-wow.fandom.com/wiki/Smith_Martin) | Expert Blacksmith | 45 | Alliance |
| Ambershire | [Thomas Arello](https://turtle-wow.fandom.com/wiki/Thomas_Arello) | Innkeeper | 50 | Alliance |
| Ambershire | [Ulrich Buckert](https://turtle-wow.fandom.com/wiki/Ulrich_Buckert) | Baked Goods | 34 | Alliance |
| Ambershire | [Wisteria Gallagher](https://turtle-wow.fandom.com/wiki/Wisteria_Gallagher) | General Goods | 46 | Alliance |
| Amberwood Keep | [Argor Smugshield](https://turtle-wow.fandom.com/wiki/Argor_Smugshield) | Armor Smith | 24 | Alliance |
| Amberwood Keep | [Barbara Lee](https://turtle-wow.fandom.com/wiki/Barbara_Lee) | Fletcher | 31 | Alliance |
| Amberwood Keep | [Fidel Prescott](https://turtle-wow.fandom.com/wiki/Fidel_Prescott) | Alchemy Supplies | 24 | Alliance |
| Amberwood Keep | [Jacqueline Marlowe](https://turtle-wow.fandom.com/wiki/Jacqueline_Marlowe) | Sous Chef | 36 | Alliance |
| Amberwood Keep | [Linus Huxley](https://turtle-wow.fandom.com/wiki/Linus_Huxley) | Chef | 36 | Alliance |
| Amberwood Keep | [Meredith Rutland](https://turtle-wow.fandom.com/wiki/Meredith_Rutland) | Shoemaker | 42 | Alliance |
| Crypt | [Count Femur](https://turtle-wow.fandom.com/wiki/Count_Femur) | — | 50 | Horde |
| Jousting Grounds | [Mariah Huckabee](https://turtle-wow.fandom.com/wiki/Mariah_Huckabee) | Drinks and Refreshments | 40 | Alliance |
| Jousting Grounds | [Mitchell Huckabee](https://turtle-wow.fandom.com/wiki/Mitchell_Huckabee) | Donut Vendor | 40 | Alliance |
| Mildenhall Horse Farm | [Horsekeeper Geringt](https://turtle-wow.fandom.com/wiki/Horsekeeper_Geringt) | Riding Trainer | 45 | Alliance |
| Mildenhall Horse Farm | [Nadia Geringt](https://turtle-wow.fandom.com/wiki/Nadia_Geringt) | Horse Breeder | 38 | Alliance |
| Northwind | [Enchantress Magilou](https://turtle-wow.fandom.com/wiki/Enchantress_Magilou) | Expert Enchanter | 50 | Alliance |
| Stillheart Port | [Alison Swift](https://turtle-wow.fandom.com/wiki/Alison_Swift) | Tailor | 42 | Alliance |
| Stillheart Port | [Frederik Hewg](https://turtle-wow.fandom.com/wiki/Frederik_Hewg) | Blacksmithing Supplies | 38 | Alliance |
| The Plump Pumpkin | [Beverly Gale](https://turtle-wow.fandom.com/wiki/Beverly_Gale) | Barmaid | 32 | Alliance |
| The Plump Pumpkin | [Jarold Thorpe](https://turtle-wow.fandom.com/wiki/Jarold_Thorpe) | Food and Drink | 46 | Alliance |
| The Plump Pumpkin | [Udo Keller](https://turtle-wow.fandom.com/wiki/Udo_Keller) | — | 26 | Alliance |
| Witch Coven | [The Witch of Northwind](https://turtle-wow.fandom.com/wiki/The_Witch_of_Northwind) | — | 50 | Neutral |

### Grim Reaches (21)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Dun Kithas | [Barwegg Loadstone](https://turtle-wow.fandom.com/wiki/Barwegg_Loadstone) | Mining Supplies | 28 | Alliance |
| Dun Kithas | [Farwyn Barleynight](https://turtle-wow.fandom.com/wiki/Farwyn_Barleynight) | Stable Master | 30 | Alliance |
| Dun Kithas | [Gazla Blackforge](https://turtle-wow.fandom.com/wiki/Gazla_Blackforge) | General Supplies | 28 | Alliance |
| Dun Kithas | [Gormand Belchbrew](https://turtle-wow.fandom.com/wiki/Gormand_Belchbrew) | Trade Supplies | 25 | Alliance |
| Dun Kithas | [Kargun Mightfall](https://turtle-wow.fandom.com/wiki/Kargun_Mightfall) | Metalsmith | 25 | Alliance |
| Dun Kithas | [Kazand Blundergate](https://turtle-wow.fandom.com/wiki/Kazand_Blundergate) | Ammunition | 23 | Alliance |
| Dun Kithas | [Krangosh Thunderwind](https://turtle-wow.fandom.com/wiki/Krangosh_Thunderwind) | Gryphon Master | 55 | Alliance |
| Dun Kithas | [Velwin Gravelcrest](https://turtle-wow.fandom.com/wiki/Velwin_Gravelcrest) | Food & Drink | 32 | Alliance |
| Dun Kithas | [Vohand Blundergate](https://turtle-wow.fandom.com/wiki/Vohand_Blundergate) | Gunsmith | 33 | Alliance |
| Dun Kithas Magistrate | [Telga Wildward](https://turtle-wow.fandom.com/wiki/Telga_Wildward) | Innkeeper | 30 | Alliance |
| East Ridge Outpost | [Dorlegg Firegrip](https://turtle-wow.fandom.com/wiki/Dorlegg_Firegrip) | Armorer | 40 | Alliance |
| Shatterblade Post | [Bargolnak](https://turtle-wow.fandom.com/wiki/Bargolnak) | Butcher | 25 | Horde |
| Shatterblade Post | [Hagrekk](https://turtle-wow.fandom.com/wiki/Hagrekk) | General Goods | 28 | Horde |
| Shatterblade Post | [Maktha](https://turtle-wow.fandom.com/wiki/Maktha) | Ammunition | 34 | Horde |
| Shatterblade Post | [Ragnaz](https://turtle-wow.fandom.com/wiki/Ragnaz) | Warrior Trainer | 45 | Horde |
| Shatterblade Post | [Razikgar](https://turtle-wow.fandom.com/wiki/Razikgar) | Wyvern Master | 55 | Horde |
| Shatterblade Post | [Tal'garr](https://turtle-wow.fandom.com/wiki/Tal%27garr) | Trade Supplies | 30 | Horde |
| Shatterblade Post | [Targen Bladecall](https://turtle-wow.fandom.com/wiki/Targen_Bladecall) | Weaponsmith | 32 | Horde |
| Shatterblade Post | [Tashga](https://turtle-wow.fandom.com/wiki/Tashga) | Herbalism & Alchemy Supplies | 36 | Horde |
| Shatterblade Post | [Torva](https://turtle-wow.fandom.com/wiki/Torva) | Innkeeper | 25 | Horde |
| Shatterblade Post | [Vagrog](https://turtle-wow.fandom.com/wiki/Vagrog) | Reagents | 30 | Horde |

### Gilneas (20)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Blackthorn's Camp | [Anati Gapper](https://turtle-wow.fandom.com/wiki/Anati_Gapper) | General Goods | 35 | Horde |
| Blackthorn's Camp | [Handon Blackhammer](https://turtle-wow.fandom.com/wiki/Handon_Blackhammer) | Blacksmith Supplies | 35 | Horde |
| Blackthorn's Camp | [Learic Veylon](https://turtle-wow.fandom.com/wiki/Learic_Veylon) | Food & Drink | 30 | Horde |
| Cave above Mossgrove Farm | [Levandra](https://turtle-wow.fandom.com/wiki/Levandra) | — | 44 | Alliance |
| Ravenshire | [Alexandra](https://turtle-wow.fandom.com/wiki/Alexandra) | — | 30 | Alliance |
| Ravenshire | [Jacob Stewards](https://turtle-wow.fandom.com/wiki/Jacob_Stewards) | Trade Goods | 45 | Alliance |
| Ravenshire | [Larry Bolder](https://turtle-wow.fandom.com/wiki/Larry_Bolder) | Armorsmith and Shieldcrafter | 35 | Alliance |
| Ravenshire | [Maria Galwest](https://turtle-wow.fandom.com/wiki/Maria_Galwest) | Gryphon Master | 55 | Alliance |
| Ravenshire | [Narwick Everton](https://turtle-wow.fandom.com/wiki/Narwick_Everton) | Butcher | 36 | Alliance |
| Ravenshire | [Nolan Tanner](https://turtle-wow.fandom.com/wiki/Nolan_Tanner) | Food & Drink | 30 | Alliance |
| Ravenshire | [Samantha Stewards](https://turtle-wow.fandom.com/wiki/Samantha_Stewards) | General Goods | 45 | Alliance |
| Ravenshire | [Todd Bolder](https://turtle-wow.fandom.com/wiki/Todd_Bolder) | — | 40 | Alliance |
| Shademore Tavern | [Adam Bonlay](https://turtle-wow.fandom.com/wiki/Adam_Bonlay) | Trade Supplies | 32 | Alliance |
| Shademore Tavern | [Cook Harry](https://turtle-wow.fandom.com/wiki/Cook_Harry) | — | 35 | Alliance |
| Shademore Tavern | [Mariette Shademore](https://turtle-wow.fandom.com/wiki/Mariette_Shademore) | — | 33 | Alliance |
| Stillward Church | [Andana](https://turtle-wow.fandom.com/wiki/Andana) | Bat Master | 55 | Horde |
| Stillward Church | [Balgon Slin](https://turtle-wow.fandom.com/wiki/Balgon_Slin) | Blacksmith | 35 | Horde |
| Stillward Church | [Dark Bishop Mordren](https://turtle-wow.fandom.com/wiki/Dark_Bishop_Mordren) | — | 52 | Horde |
| Stillward Church | [Savenna Mosscage](https://turtle-wow.fandom.com/wiki/Savenna_Mosscage) | General Goods | 36 | Horde |
| Vagrant Encampment | [Camp Chef Velden](https://turtle-wow.fandom.com/wiki/Camp_Chef_Velden) | Meat Vendor | 40 | Alliance |

### Thalassian Highlands (13)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Brinthilien | [Alyssia Solar](https://turtle-wow.fandom.com/wiki/Alyssia_Solar) | Cloth & Leather Armor Merchant | 11 | Alliance |
| Brinthilien | [Dalicia Sweetsilver](https://turtle-wow.fandom.com/wiki/Dalicia_Sweetsilver) | — | 10 | Alliance |
| Brinthilien | [Leela the Shadow](https://turtle-wow.fandom.com/wiki/Leela_the_Shadow) | Rogue Trainer | 8 | Alliance |
| Brinthilien | [Lor'thas the Holy](https://turtle-wow.fandom.com/wiki/Lor%27thas_the_Holy) | Paladin Trainer | 5 | Alliance |
| Brinthilien | [Magister Ala'shor Sunblood](https://turtle-wow.fandom.com/wiki/Magister_Ala%27shor_Sunblood) | Mage Trainer | 10 | Alliance |
| Brinthilien | [Malanius Silvershine](https://turtle-wow.fandom.com/wiki/Malanius_Silvershine) | Food Merchant | 3 | Alliance |
| Brinthilien | [Melonius Silvershine](https://turtle-wow.fandom.com/wiki/Melonius_Silvershine) | Mail Armor Merchant | 10 | Alliance |
| Brinthilien | [Priestess Maelah Sunsworn](https://turtle-wow.fandom.com/wiki/Priestess_Maelah_Sunsworn) | Priest Trainer | 5 | Alliance |
| Brinthilien | [Ranger Rubinah Sunsworn](https://turtle-wow.fandom.com/wiki/Ranger_Rubinah_Sunsworn) | Hunter Trainer | 8 | Alliance |
| Brinthilien | [Torial Dawnrise](https://turtle-wow.fandom.com/wiki/Torial_Dawnrise) | General Goods | 3 | Alliance |
| Brinthilien | [Valanos Dawnfire](https://turtle-wow.fandom.com/wiki/Valanos_Dawnfire) | Warrior Trainer | 11 | Alliance |
| Thalassian Highlands | [Calaire Solarguard](https://turtle-wow.fandom.com/wiki/Calaire_Solarguard) | Trade Supplies | 10 | Alliance |
| Thaumarium | [Aira Starsworn](https://turtle-wow.fandom.com/wiki/Aira_Starsworn) | General Goods | 10 | Alliance |

### Stonetalon Mountains (12)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Amani'Alor | [Ranor Riptusk](https://turtle-wow.fandom.com/wiki/Ranor_Riptusk) | General Goods | 3 | Horde |
| Amani'Alor | [Reolis Riptusk](https://turtle-wow.fandom.com/wiki/Reolis_Riptusk) | Horde Cloth Quartermaster | 11 | Horde |
| Amani'Alor | [Rinja Scenttusk](https://turtle-wow.fandom.com/wiki/Rinja_Scenttusk) | Stable Master | 30 | Horde |
| Amani'Alor | [Talkharu Riptusk](https://turtle-wow.fandom.com/wiki/Talkharu_Riptusk) | Blacksmithing Supplies | 30 | Horde |
| Amani'Alor | [Zul'Mabe Bearclaw](https://turtle-wow.fandom.com/wiki/Zul%27Mabe_Bearclaw) | Bear Merchant | 11 | Horde |
| Bael Hardul | [Begwynn Blackmallet](https://turtle-wow.fandom.com/wiki/Begwynn_Blackmallet) | Leatherworking Supplies | 30 | Alliance |
| Bael Hardul | [Borrin Dustshoulder](https://turtle-wow.fandom.com/wiki/Borrin_Dustshoulder) | General Goods | 20 | Alliance |
| Bael Hardul | [Brundah Cliffbrow](https://turtle-wow.fandom.com/wiki/Brundah_Cliffbrow) | Innkeeper | 20 | Alliance |
| Bael Hardul | [Dugin Coalborn](https://turtle-wow.fandom.com/wiki/Dugin_Coalborn) | Blacksmith | 18 | Alliance |
| Bael Hardul | [Orman Granitemantle](https://turtle-wow.fandom.com/wiki/Orman_Granitemantle) | Trade Supplies | 20 | Alliance |
| Bael Hardul | [Orrik Thunderbeard](https://turtle-wow.fandom.com/wiki/Orrik_Thunderbeard) | Gryphon Master | 55 | Alliance |
| Bael Hardul | [Throki Cliffbrow](https://turtle-wow.fandom.com/wiki/Throki_Cliffbrow) | Barkeep | 20 | Alliance |

### Lapidis Isle (10)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Caelan's Rest | [Angela Goodwill](https://turtle-wow.fandom.com/wiki/Angela_Goodwill) | Barmaid | 52 | Alliance |
| Caelan's Rest | [Chef Jenkel](https://turtle-wow.fandom.com/wiki/Chef_Jenkel) | Cooking Trainer | 35 | Alliance |
| Caelan's Rest | [Cook Lopperson](https://turtle-wow.fandom.com/wiki/Cook_Lopperson) | Cooking Supplies | 30 | Alliance |
| Caelan's Rest | [Denia Hale](https://turtle-wow.fandom.com/wiki/Denia_Hale) | General Goods | 47 | Alliance |
| Caelan's Rest | [Dudley](https://turtle-wow.fandom.com/wiki/Dudley) | Trade Supplies | 47 | Alliance |
| Caelan's Rest | [Fellis Bander](https://turtle-wow.fandom.com/wiki/Fellis_Bander) | Bartender | 47 | Alliance |
| Caelan's Rest | [Sailor 'Deepmug'](https://turtle-wow.fandom.com/wiki/Sailor_%27Deepmug%27) | Rum Vendor | 48 | Alliance |
| Caelan's Rest | [Sean Pinerock](https://turtle-wow.fandom.com/wiki/Sean_Pinerock) | Blacksmith | 53 | Alliance |
| Caelan's Rest | [Stablemaster Yannis](https://turtle-wow.fandom.com/wiki/Stablemaster_Yannis) | — | 35 | Alliance |
| Caelan's Rest | [Vanessa Porter](https://turtle-wow.fandom.com/wiki/Vanessa_Porter) | Gryphon Master | 55 | Alliance |

### Balor (8)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| SI:7 Outpost | [Elindra Swiftluck](https://turtle-wow.fandom.com/wiki/Elindra_Swiftluck) | Provisions | 35 | Alliance |
| SI:7 Outpost | [Fanny Forgeguard](https://turtle-wow.fandom.com/wiki/Fanny_Forgeguard) | — | 35 | Alliance |
| SI:7 Outpost | [Fydent Mossrage](https://turtle-wow.fandom.com/wiki/Fydent_Mossrage) | Accommodations | 50 | Alliance |
| SI:7 Outpost | [Nundir Feathersoar](https://turtle-wow.fandom.com/wiki/Nundir_Feathersoar) | Gryphon Master | 55 | Alliance |
| Stormbreaker Point | [Grexx](https://turtle-wow.fandom.com/wiki/Grexx) | Weapons | 45 | Horde |
| Stormbreaker Point | [Hefeni](https://turtle-wow.fandom.com/wiki/Hefeni) | Wind Rider Master | 55 | Horde |
| Stormbreaker Point | [Seer Sarno](https://turtle-wow.fandom.com/wiki/Seer_Sarno) | Reagents | 55 | Horde |
| Stormbreaker Point | [Zohze](https://turtle-wow.fandom.com/wiki/Zohze) | Accommodations | 30 | Horde |

### Orgrimmar (7)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Cleft of Shadow | [Ka'zinka](https://turtle-wow.fandom.com/wiki/Ka%27zinka) | Demon Trainer | 35 | Horde |
| Cleft of Shadow | [Zim'bwaba](https://turtle-wow.fandom.com/wiki/Zim%27bwaba) | Warlock Trainer | 60 | Horde |
| Cleft of Shadows | [Ewe'luas](https://turtle-wow.fandom.com/wiki/Ewe%27luas) | Mage Trainer | 60 | Horde |
| Hall of the Brave | [Fahesa Steelweaver](https://turtle-wow.fandom.com/wiki/Fahesa_Steelweaver) | Thorn Gorge Battlemaster | 61 | Horde |
| Valley of Honor | [Brakan](https://turtle-wow.fandom.com/wiki/Brakan) | Survival Trainer | 28 | Horde |
| Valley of Honor | [Rishu](https://turtle-wow.fandom.com/wiki/Rishu) | Survivalist Supplies | 33 | Horde |
| Valley of Spirits | [Ureda](https://turtle-wow.fandom.com/wiki/Ureda) | Mage Trainer | 60 | Horde |

### Tel'Abim (6)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Tel Co. Basecamp | [Chef Danonzo Laxjolt](https://turtle-wow.fandom.com/wiki/Chef_Danonzo_Laxjolt) | Culinary Expert | 59 | Neutral |
| Tel Co. Basecamp | [Klazz](https://turtle-wow.fandom.com/wiki/Klazz) | Trade Supplies | 40 | Neutral |
| Tel Co. Basecamp | [Tezzin Skyfuse](https://turtle-wow.fandom.com/wiki/Tezzin_Skyfuse) | Flight Master | 55 | Neutral |
| Tel Co. Basecamp | [Wazlon Headiron](https://turtle-wow.fandom.com/wiki/Wazlon_Headiron) | Engineering Supplies | 50 | Neutral |
| Tel Co. Basecamp | [Wezzy Coppersaw](https://turtle-wow.fandom.com/wiki/Wezzy_Coppersaw) | Ammunition | 50 | Neutral |
| Tel Co. Basecamp | [Wrex Ozzlelight](https://turtle-wow.fandom.com/wiki/Wrex_Ozzlelight) | Innkeeper | 46 | Neutral |

### Burning Steppes (5)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Karfang Hold | [Blacksmith Torren](https://turtle-wow.fandom.com/wiki/Blacksmith_Torren) | Weapons and Armor | 54 | Horde |
| Karfang Hold | [Golsh](https://turtle-wow.fandom.com/wiki/Golsh) | General Goods | 50 | Horde |
| Karfang Hold | [Herekk](https://turtle-wow.fandom.com/wiki/Herekk) | Stable Master | 48 | Horde |
| Karfang Hold | [Sarkensh](https://turtle-wow.fandom.com/wiki/Sarkensh) | Trade Supplies | 47 | Horde |
| Karfang Hold | [Soresh](https://turtle-wow.fandom.com/wiki/Soresh) | Innkeeper | 52 | Horde |

### Ironforge (5)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Forlorn Cavern | [Fulgrom Darkgrovel](https://turtle-wow.fandom.com/wiki/Fulgrom_Darkgrovel) | Warlock Trainer | 45 | Alliance |
| Forlorn Cavern | [Rabertha Darkgrovel](https://turtle-wow.fandom.com/wiki/Rabertha_Darkgrovel) | Demon Trainer | 45 | Alliance |
| Hall of Arms | [Fanwyn Wildbrand](https://turtle-wow.fandom.com/wiki/Fanwyn_Wildbrand) | Thorn Gorge Battlemaster | 61 | Alliance |
| Military Ward | [Eissinn Cragbelly](https://turtle-wow.fandom.com/wiki/Eissinn_Cragbelly) | Survival Trainer | 20 | Alliance |
| Military Ward | [Theminn Cragbelly](https://turtle-wow.fandom.com/wiki/Theminn_Cragbelly) | Survivalist Supplies | 24 | Alliance |

### Stormwind City (5)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Slaughtered Lamb | [Frejwin Darkgrovel](https://turtle-wow.fandom.com/wiki/Frejwin_Darkgrovel) | Warlock Trainer | 50 | Alliance |
| Stormwind Keep | [Ingwelda Wildbrand](https://turtle-wow.fandom.com/wiki/Ingwelda_Wildbrand) | Thorn Gorge Battlemaster | 61 | Alliance |
| The Park | [AJ Springberry](https://turtle-wow.fandom.com/wiki/AJ_Springberry) | Hunter Trainer | 12 | Alliance |
| The Park | [Marven](https://turtle-wow.fandom.com/wiki/Marven) | Pet Trainer | 35 | Alliance |
| The Park | [Willhelm Rockdust](https://turtle-wow.fandom.com/wiki/Willhelm_Rockdust) | Hunter Trainer | 60 | Alliance |

### Swamp of Sorrows (5)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Sorrowguard Keep | ['Sly' Duncan](https://turtle-wow.fandom.com/wiki/%27Sly%27_Duncan) | Mushroom Seller | 25 | Alliance |
| Sorrowguard Keep | [Howard Gray](https://turtle-wow.fandom.com/wiki/Howard_Gray) | Trade Supplies | 35 | Alliance |
| Sorrowguard Keep | [Janet Hollowworth](https://turtle-wow.fandom.com/wiki/Janet_Hollowworth) | Blacksmith | 40 | Alliance |
| Sorrowguard Keep | [Lucas](https://turtle-wow.fandom.com/wiki/Lucas) | Cobbler | 40 | Alliance |
| Stonard | [Swampwalker Krug](https://turtle-wow.fandom.com/wiki/Swampwalker_Krug) | Expert Survivalist | 40 | Horde |

### Gillijim's Isle (4)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Distillery Island | ['Moonshine' Marty](https://turtle-wow.fandom.com/wiki/%27Moonshine%27_Marty) | The Bootlegger | 50 | Neutral |
| Kalkor Point | [Isidora](https://turtle-wow.fandom.com/wiki/Isidora) | Enchanting Supplies | 53 | Neutral |
| Kalkor Point | [Karpos](https://turtle-wow.fandom.com/wiki/Karpos) | Blacksmithing Supplies | 50 | Neutral |
| Kalkor Point | [Kryillos](https://turtle-wow.fandom.com/wiki/Kryillos) | General Supplies | 50 | Neutral |

### Mulgore (4)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Bloodhoof Village | [Ammi Summerpelt](https://turtle-wow.fandom.com/wiki/Ammi_Summerpelt) | Survivalist Supplies | 39 | Horde |
| Bloodhoof Village | [Nasnan Hillcreek](https://turtle-wow.fandom.com/wiki/Nasnan_Hillcreek) | Survival Trainer | 50 | Horde |
| Bloodhoof Village | [Pargan Starstrider](https://turtle-wow.fandom.com/wiki/Pargan_Starstrider) | Priest Trainer | 32 | Horde |
| Camp Narache | [Nuhlok Starstrider](https://turtle-wow.fandom.com/wiki/Nuhlok_Starstrider) | Priest Trainer | 11 | Horde |

### (no location given) (3)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| (no location given) | [Blood Ring Gladiator](https://turtle-wow.fandom.com/wiki/Blood_Ring_Gladiator_(Alliance)) | — | 30 | Neutral |
| (no location given) | [Sunnyglade Emissary](https://turtle-wow.fandom.com/wiki/Sunnyglade_Emissary) | — | 30 | Neutral |
| (no location given) | [Thorn Gorge Emissary](https://turtle-wow.fandom.com/wiki/Thorn_Gorge_Emissary) | — | 30 | Neutral |

### Darnassus (3)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Craftsmen's Terrace | [Marlarin](https://turtle-wow.fandom.com/wiki/Marlarin) | Survivalist Supplies | 32 | Alliance |
| Craftsmen's Terrace | [Nallaeth](https://turtle-wow.fandom.com/wiki/Nallaeth) | Survival Trainer | 40 | Alliance |
| Warrior's Terrace | [Rubertus Wildbrand](https://turtle-wow.fandom.com/wiki/Rubertus_Wildbrand) | Thorn Gorge Battlemaster | 61 | Alliance |

### Dun Morogh (3)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Anvilmar | [Marrek Stromnur](https://turtle-wow.fandom.com/wiki/Marrek_Stromnur) | Mage Trainer | 5 | Alliance |
| Anvilmar | [Thorinn Darkgrovel](https://turtle-wow.fandom.com/wiki/Thorinn_Darkgrovel) | Warlock Trainer | 5 | Alliance |
| Kharanos | [Dyrohrinn Boulderhorn](https://turtle-wow.fandom.com/wiki/Dyrohrinn_Boulderhorn) | Survival Trainer | 50 | Alliance |

### Undercity (3)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Rogues' Quarter | [Cynthessa Grimblood](https://turtle-wow.fandom.com/wiki/Cynthessa_Grimblood) | Survival Trainer | 50 | Horde |
| Rogues' Quarter | [Mort Gallspewer](https://turtle-wow.fandom.com/wiki/Mort_Gallspewer) | Survivalist Supplies | 39 | Horde |
| Royal Quarter | [Esoch Steelweaver](https://turtle-wow.fandom.com/wiki/Esoch_Steelweaver) | Thorn Gorge Battlemaster | 61 | Horde |

### Durotar (2)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Razor Hill | [Thonk](https://turtle-wow.fandom.com/wiki/Thonk) | Survival Trainer | 50 | Horde |
| The Den | [Zin'jashi](https://turtle-wow.fandom.com/wiki/Zin%27jashi) | Warlock Trainer | 5 | Horde |

### Elwynn Forest (2)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Elwynn Forest | [Krennan Wildberry](https://turtle-wow.fandom.com/wiki/Krennan_Wildberry) | Survival Trainer | 30 | Alliance |
| Elwynn Forest | [Tabetha Wildberry](https://turtle-wow.fandom.com/wiki/Tabetha_Wildberry) | Survivalist Supplies | 26 | Alliance |

### Thunder Bluff (2)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Hunter Rise | [Suda Steelweaver](https://turtle-wow.fandom.com/wiki/Suda_Steelweaver) | Thorn Gorge Battlemaster | 61 | Horde |
| Spirit Rise | [Artahla Starstrider](https://turtle-wow.fandom.com/wiki/Artahla_Starstrider) | Priest Trainer | 50 | Horde |

### Tirisfal Glades (2)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Brill | [Karolina Cloven](https://turtle-wow.fandom.com/wiki/Karolina_Cloven) | Survival Trainer | 50 | Horde |
| Remnants Camp | [Barkeep Clemens](https://turtle-wow.fandom.com/wiki/Barkeep_Clemens) | The Army of Lordaeron | 15 | Alliance |

### Alah'Thalas (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Bazaar | [Hellador Swiftluck](https://turtle-wow.fandom.com/wiki/Hellador_Swiftluck) | Survival Trainer | 50 | Alliance |

### Blackstone Island (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Rustgate Ridge | [Feebeld](https://turtle-wow.fandom.com/wiki/Feebeld) | Survival Trainer | 50 | Horde |

### Desolace (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Nijel's Point | [Nerean Stagtree](https://turtle-wow.fandom.com/wiki/Nerean_Stagtree) | Expert Survivalist | 40 | Alliance |

### Hinterlands (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Revantusk Village | [Mezaji](https://turtle-wow.fandom.com/wiki/Mezaji) | Warlock Trainer | 60 | Horde |

### Scarlet Enclave (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| New Avalon | [Daron Truthkeeper](https://turtle-wow.fandom.com/wiki/Daron_Truthkeeper) | Renowned Scarlet Blacksmith | 50 | Neutral |

### Stranglethorn Vale (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Old Port Authority | [Nizzle](https://turtle-wow.fandom.com/wiki/Nizzle) | Kezan Imports | 60 | Neutral |

### Sunnyglade Valley (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Caverns of Time | [Alurzion](https://turtle-wow.fandom.com/wiki/Alurzion) | Sunnyglade Valley Battlemaster | 61 | Neutral |

### Teldrassil (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Dolanaar | [Filadon Shieldarrow](https://turtle-wow.fandom.com/wiki/Filadon_Shieldarrow) | Survival Trainer | 50 | Alliance |

### Thousand Needles (1)

| Hub | NPC | Role | Lv | Side |
|---|---|---|---|---|
| Sagh's Refuge | [Aganna Windhorn](https://turtle-wow.fandom.com/wiki/Aganna_Windhorn) | Leatherworking Supplies | 25 | Horde |


---

## 2. Vendor stock and prices that a source actually states

| Vendor | Location | Item | Price | Source |
|---|---|---|---|---|
| **Rufus Hardwick** (Survival Trainer) | Nesingwary's Expedition, Stranglethorn Vale | Flint & Tinder, Unlit Poor Torches, Simple Wood, **Traveler's Tent Blueprints** | Blueprints **1 g 50 s** (2023); the whole starter kit plus the quest cost 1 g 45 s 65 c in 2019 | [Neo4m (player), 2023-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=46021#p46021), [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641) |
| **Jaquilina Dramet** (Superior Axecrafter) | Nesingwary's Expedition, Stranglethorn Vale | Coil of Sturdy Rope | **35 s** | [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641) |
| **Mazk Snipeshot** (Engineering Supplies) | Booty Bay — the Old Port Authority building | Cheap Goblin's Oil (**BoP**) | 40 s 50 c (2019) → **45 s** (2023) | [Gifted (guide writer), 2019-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=3641#p3641), [Neo4m (player), 2023-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=46021#p46021), BoP: [Sharq (player), 2024-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=86439#p86439) |
| Gardening seed vendors | Mulgore, Teldrassil, Eastern Plaguelands | **Magic Mushroom Spores** (item 51716) | **2 g 50 s**, or 2 g with the Honored 20% discount | [Speedz1337 (guide writer), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136320#p136320) |
| **Mortimer Stansfield** (Alliance) / **Kern Mosshoof** (Horde) | outside Stormwind / Bloodhoof Village, Mulgore | Simple Wooden Planter recipe (needs Survival 75) | not stated | [Speedz1337 (guide writer), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136320#p136320) |
| **Dronormu** (Wardens of Time quartermaster) | Caverns of Time | reputation rewards | not stated | [Elisleris (player), 2025-01-13](https://forum.turtlecraft.gg/viewtopic.php?p=116560#p116560), [Geojak (player), 2023-07-26](https://forum.turtlecraft.gg/viewtopic.php?p=54708#p54708) |
| **Gizbert Eggwell** | Stormwind and Orgrimmar | buys back Noblegarden reward items ("they're not going to give you full value") | — | [Akalix (staff), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91650#p91650) |
| Blacksmithing Suppliers | Stormwind, Orgrimmar, Ironforge, Thunder Bluff, Sen'jin Village, Bloodvenom Post | the **Forgotten Knowledge I** plans | not stated | see `professions-and-recipes.md` §4.1 |

**Vendor changes recorded by staff:**

- The 1.18.1 hotfix added "missing **Survival supplies** to **Rufus Hardwick**" — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490).
- **Wood was removed from vendors** in 1.18.1 and moved to the Woodcutting gathering activity — [Elesion (player), 2026-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=173031#p173031). **single source**, but consistent with the staff Woodcutting note — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).
- **Alah'Thalas merchants** were added in 1.17.2; the city itself dates to 1.15.0 — [Torta (staff), 2020-10-04](https://forum.turtlecraft.gg/viewtopic.php?p=7948#p7948).
- Argent Dawn vendors show their full inventory regardless of reputation, with the reputation requirement moved onto the items (a vanilla 1.7.0 rule the wiki records as still in force) — [wiki: Argent Dawn](https://turtle-wow.fandom.com/wiki/Argent_Dawn).
- **Strong Fishing Pole** has limited stock (timeline B7).

---

## 3. Notable custom NPCs

### Survival trainers (15 on the wiki, all Turtle content)

The 1.18.1 Survival overhaul spread trainers across both factions' low-level hubs, alongside two dedicated **"Survivalist Supplies"** vendors.

| NPC | Role | Lv | Side | Location |
|---|---|---|---|---|
| [Rufus Hardwick](https://turtle-wow.fandom.com/wiki/Rufus_Hardwick) | Survival Trainer | 40 | Neutral | Nesingwary's Expedition, Stranglethorn Vale |
| [Eissinn Cragbelly](https://turtle-wow.fandom.com/wiki/Eissinn_Cragbelly) | Survival Trainer | 20 | Alliance | Military Ward, Ironforge |
| [Brakan](https://turtle-wow.fandom.com/wiki/Brakan) | Survival Trainer | 28 | Horde | Valley of Honor, Orgrimmar |
| [Krennan Wildberry](https://turtle-wow.fandom.com/wiki/Krennan_Wildberry) | Survival Trainer | 30 | Alliance | Elwynn Forest |
| [Nallaeth](https://turtle-wow.fandom.com/wiki/Nallaeth) | Survival Trainer | 40 | Alliance | Craftsmen's Terrace, Darnassus |
| [Nerean Stagtree](https://turtle-wow.fandom.com/wiki/Nerean_Stagtree) | Survival Trainer | 40 | Alliance | Nijel's Point, Desolace |
| [Swampwalker Krug](https://turtle-wow.fandom.com/wiki/Swampwalker_Krug) | Survival Trainer | 40 | Horde | Stonard, Swamp of Sorrows |
| [Hellador Swiftluck](https://turtle-wow.fandom.com/wiki/Hellador_Swiftluck) | Survival Trainer | 50 | Alliance | Bazaar, Alah'Thalas |
| [Dyrohrinn Boulderhorn](https://turtle-wow.fandom.com/wiki/Dyrohrinn_Boulderhorn) | Survival Trainer | 50 | Alliance | Kharanos, Dun Morogh |
| [Filadon Shieldarrow](https://turtle-wow.fandom.com/wiki/Filadon_Shieldarrow) | Survival Trainer | 50 | Alliance | Dolanaar, Teldrassil |
| [Nasnan Hillcreek](https://turtle-wow.fandom.com/wiki/Nasnan_Hillcreek) | Survival Trainer | 50 | Horde | Bloodhoof Village, Mulgore |
| [Karolina Cloven](https://turtle-wow.fandom.com/wiki/Karolina_Cloven) | Survival Trainer | 50 | Horde | Brill, Tirisfal Glades |
| [Thonk](https://turtle-wow.fandom.com/wiki/Thonk) | Survival Trainer | 50 | Horde | Razor Hill, Durotar |
| [Cynthessa Grimblood](https://turtle-wow.fandom.com/wiki/Cynthessa_Grimblood) | Survival Trainer | 50 | Horde | Rogues' Quarter, Undercity |
| [Feebeld](https://turtle-wow.fandom.com/wiki/Feebeld) | Survival Trainer | 50 | Horde | Rustgate Ridge, Blackstone Island |

Survivalist Supplies vendors: [Ammi Summerpelt](https://turtle-wow.fandom.com/wiki/Ammi_Summerpelt) (lv 39, Bloodhoof Village) and [Marlarin](https://turtle-wow.fandom.com/wiki/Marlarin) (lv 32, Craftsmen's Terrace, Darnassus). Staff fixed Orgrimmar Grunts so they "correctly direct players to the Survival Trainer" — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490).

### Flight masters on custom routes (14)

| NPC | Side | Hub |
|---|---|---|
| [Leonhart Hamel](https://turtle-wow.fandom.com/wiki/Leonhart_Hamel) | Alliance | Ambershire, Northwind |
| [Orrik Thunderbeard](https://turtle-wow.fandom.com/wiki/Orrik_Thunderbeard) | Alliance | Bael Hardul, Stonetalon Mountains |
| [Vanessa Porter](https://turtle-wow.fandom.com/wiki/Vanessa_Porter) | Alliance | Caelan's Rest, Lapidis Isle |
| [Krangosh Thunderwind](https://turtle-wow.fandom.com/wiki/Krangosh_Thunderwind) | Alliance | Dun Kithas, Grim Reaches |
| [Nundir Feathersoar](https://turtle-wow.fandom.com/wiki/Nundir_Feathersoar) | Alliance | SI:7 Outpost, Balor |
| [Maria Galwest](https://turtle-wow.fandom.com/wiki/Maria_Galwest) | Alliance | Ravenshire, Gilneas |
| [Merellanea](https://turtle-wow.fandom.com/wiki/Merellanea) | Alliance | Narvalis Point, Moonwhisper Coast |
| [Cedrik Prose](https://turtle-wow.fandom.com/wiki/Cedrik_Prose) | Alliance | Refuge Pointe, Arathi Highlands |
| [Razikgar](https://turtle-wow.fandom.com/wiki/Razikgar) | Horde | Shatterblade Post, Grim Reaches |
| [Andana](https://turtle-wow.fandom.com/wiki/Andana) | Horde | Stillward Church, Gilneas |
| [Hefeni](https://turtle-wow.fandom.com/wiki/Hefeni) | Horde | Stormbreaker Point, Balor |
| [Sol Greycloud](https://turtle-wow.fandom.com/wiki/Sol_Greycloud) | Horde | Moonhoof Village, Moonwhisper Coast |
| [Z'ahk](https://turtle-wow.fandom.com/wiki/Z%27ahk) | Neutral | Moro'gai Village, Moonwhisper Coast |
| [Tezzin Skyfuse](https://turtle-wow.fandom.com/wiki/Tezzin_Skyfuse) | Neutral | Tel Co. Basecamp, Tel'Abim |

Route pairs are listed per zone in `zones.md`. Post-release, staff fixed "an awkward transition between Ratchet, Talrendis Point and Shimmering Lake" and the Druid flight masters in Moonglade — [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367), [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608).

### Mount vendors and riding trainers

| NPC | Role | Lv | Location | Note |
|---|---|---|---|---|
| [Horsekeeper Geringt](https://turtle-wow.fandom.com/wiki/Horsekeeper_Geringt) | Riding Trainer | 45 | Mildenhall Horse Farm, Northwind | |
| [Nadia Geringt](https://turtle-wow.fandom.com/wiki/Nadia_Geringt) | Horse Breeder | 38 | Mildenhall Horse Farm, Northwind | mount vendor |
| [Zul'Mabe Bearclaw](https://turtle-wow.fandom.com/wiki/Zul%27Mabe_Bearclaw) | Bear Merchant | 11 | Amani'Alor, Stonetalon Mountains | Revantusk |
| **Vanira Quel'Belore** | Thalassian unicorns | — | Alah'Thalas | unarmored from level 40, armored from 60 — [wiki: Silvermoon Remnant](https://turtle-wow.fandom.com/wiki/Silvermoon_Remnant) |
| **Vanessa Clang** | Durotar Labor Union quartermaster | — | Sparkwater Port | rocket cars; race-locking is **contested**, see `factions.md` |
| **Soalara Dawnstar** / **Alinerenah Sunsparrow** | Silvermoon Remnant quartermasters | — | Alah'Thalas | two vendors for one faction — unique per the wiki |
| **Lonum Magicus** | Dalaran quartermaster | — | Dalaran | also sells the Dalaran Warhorse (timeline B6) |

### Battlemasters for the custom battlegrounds

[Alurzion](https://turtle-wow.fandom.com/wiki/Alurzion) (lv 61, Bronze dragon) runs **Sunnyglade Valley** from the Caverns of Time; [Sunnyglade Emissary](https://turtle-wow.fandom.com/wiki/Sunnyglade_Emissary), [Thorn Gorge Emissary](https://turtle-wow.fandom.com/wiki/Thorn_Gorge_Emissary) and [Blood Ring Gladiator](https://turtle-wow.fandom.com/wiki/Blood_Ring_Gladiator_(Alliance)) (all lv 30) stand in the capitals. Details belong to the PvP document.

### Flavour and one-off NPCs worth knowing

| NPC | Where | Why |
|---|---|---|
| [Count Femur](https://turtle-wow.fandom.com/wiki/Count_Femur) | the Crypt, Northwind | a level-50 **skeleton** Blacksmithing vendor |
| [The Witch of Northwind](https://turtle-wow.fandom.com/wiki/The_Witch_of_Northwind) | Witch Coven, Northwind | Alchemy trainer and a quest-chain hub |
| [Enchantress Magilou](https://turtle-wow.fandom.com/wiki/Enchantress_Magilou) | Northwind | Expert Enchanter |
| ['Moonshine' Marty](https://turtle-wow.fandom.com/wiki/%27Moonshine%27_Marty) | Distillery Island, Gillijim's Isle | "The Bootlegger", alcohol vendor, Southsea Freebooters |
| [Sailor 'Deepmug'](https://turtle-wow.fandom.com/wiki/Sailor_%27Deepmug%27) | Caelan's Rest, Lapidis Isle | Rum Vendor — relevant to the Bloodsail rum turn-ins |
| [Fra'phani](https://turtle-wow.fandom.com/wiki/Fra%27phani) | Moro'gai Village, Moonwhisper Coast | "Exotic Creatures" |
| [Aneka Konko](https://turtle-wow.fandom.com/wiki/Aneka_Konko) | Ratchet | the only Kontsuma representative; starts the Kamio quests |
| [Levandra](https://turtle-wow.fandom.com/wiki/Levandra) | cave above Mossgrove Farm, Gilneas | hidden Herbalism vendor and quest giver |

**Staff NPC hotfixes (1.18.1):** Moro'gai Defenders now properly attack players engaging in PvP; missing gossip text added for **Ranshalla**; **Cairne Bloodhoof's** gossip fixed — [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608), [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139), [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490). Earlier: the NPC **Cla'ckora**'s despawn timer was changed to 30 minutes and **Lady Sylvanas Windrunner** gained a gossip bubble — [Torta (staff), 2024-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=106599#p106599).

---

## 4. Outdoor rares and named elites

The staff patch threads say 1.16.0 added "many new Rare Bosses lurking in level 40+ zones" and 1.17.0 added a further named list, but **the extracted staff text does not reproduce the names** — [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049), [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868). The wiki supplies these, of which only two have a loot list:

| Rare | Type | Lv | Zone / sub-zone | Loot on the wiki? |
|---|---|---|---|---|
| [Firstborn of Arugal](https://turtle-wow.fandom.com/wiki/Firstborn_of_Arugal) | Rare Elite | 55 | Gilneas | yes |
| [Admiral Barean Westwind](https://turtle-wow.fandom.com/wiki/Admiral_Barean_Westwind) | Rare Elite | 60 | Light's Point, Scarlet Enclave | yes — 8 items incl. Jacket of the Scarlet Admiral |
| [Baron Perenolde](https://turtle-wow.fandom.com/wiki/Baron_Perenolde) | Rare | 45 | (tied to the Legacy of Perenolde chain) | yes |
| [Mavel Brightwood](https://turtle-wow.fandom.com/wiki/Mavel_Brightwood) | Rare Elite | 60 | Tyr's Hand, Eastern Plaguelands | no |
| [Bethelon Wildwhisper](https://turtle-wow.fandom.com/wiki/Bethelon_Wildwhisper) | Rare Elite | 60 | Thalanaar, Feralas | no |
| [Lord Hel'nurath](https://turtle-wow.fandom.com/wiki/Lord_Hel%27nurath) | Rare Elite | 62 | Dire Maul West | no |
| [Thundertusk](https://turtle-wow.fandom.com/wiki/Thundertusk) | Rare | 58 | Moonwhisper Coast | no |
| [Margon the Mighty](https://turtle-wow.fandom.com/wiki/Margon_the_Mighty) | Rare Elite | 54–55 | Lapidis Isle | no |
| [Foreman Darkskull](https://turtle-wow.fandom.com/wiki/Foreman_Darkskull) | Rare | 52–53 | The Jade Mine, Gillijim's Isle | no |
| [Embereye](https://turtle-wow.fandom.com/wiki/Embereye) | Rare | 51 | Deepneck Cove, Gillijim's Isle | no |
| [Bonecruncher](https://turtle-wow.fandom.com/wiki/Bonecruncher) | Rare | 44 | Brol'ok Mound, Gilneas | no |
| [Friar Montero](https://turtle-wow.fandom.com/wiki/Friar_Montero) | Rare Elite | 35 | Saint Mara Abbey, Northwind | no |
| [Goldtusk](https://turtle-wow.fandom.com/wiki/Goldtusk) | Rare | 34 | Northwind | no |
| [Quistis the Malign](https://turtle-wow.fandom.com/wiki/Quistis_the_Malign) | Rare | 33 | Northwind | no |
| [Snugg](https://turtle-wow.fandom.com/wiki/Snugg) | Rare | 31 | Ruins of Breezehaven, Balor | no |

Post-1.18.1 respawn tuning on Moonwhisper Coast: **Rotvine**, **Grammon the Ageless** and **Tidelord Rrurgaz** were reduced to a 10-minute respawn — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490). Staff also noted "Some mobs in high level zones now share spawn points" without naming the zones — [Jamey (staff), 2026-04-28](https://forum.turtlecraft.gg/viewtopic.php?p=176311#p176311).

Outdoor **world bosses** (Nerubian Overseer, Ostarius of Uldum, Concavius) are covered in `zones.md` §4 and the dungeons-and-raids document.

**Dungeon and raid bosses are deliberately excluded** from this file — they belong to `synthesis/content/dungeons-and-raids.md`. Where a Turtle NPC page carries a loot list, it is almost always an instance boss (81 of the 86 loot-bearing Turtle NPC pages).

---

## 5. Gaps and unclear points

1. **No vendor inventories anywhere.** This is the defining gap. Everything a vendor sells is known only through the item database, which is not extracted. The only stocked items with a price in this whole corpus are the eight rows in §2.
2. **No coordinates.** Zero X/Y pairs in the entire extraction, for any NPC. The wiki `location` field is a sub-zone name.
3. **Faction quartermasters for six custom reputations are unnamed** — see `factions.md` §4.
4. **The Jewelcrafting trainers are unnamed.** The official page names six cities; no wiki NPC page in this extraction is tagged as a Jewelcrafting trainer.
5. **Vendor levels look inconsistent** — e.g. a level-3 General Goods vendor next to a level-11 armour merchant in the same hub (Brinthilien), and a level-25 Fruit Vendor beside a level-55 "Exotic Creatures" NPC in Moro'gai Village. These are wiki infobox values, reproduced as given.
6. **The wiki has two spellings of one Orgrimmar sub-zone** ("Cleft of Shadow" and "Cleft of Shadows"), which splits three trainers across two hub names in the tables above.
7. **Rare-boss loot is undocumented** for 12 of the 15 outdoor rares, and the staff "named list" from 1.17.0 never appears in the extracted text.
8. **No stable-master or innkeeper prices**, and no source states which hubs are faction-locked; the `Side` column is the wiki infobox `faction` field, which is not the same thing as who may use the NPC.
