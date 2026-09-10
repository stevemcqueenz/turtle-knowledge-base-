---
title: "Turtle WoW Database Addon and Software"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20910"
topic_id: 20910
forum_id: 14
forum: "Suggestions"
author: "Lacustat"
author_authority: "player"
posted: "2025-08-14T09:05:00Z"
last_post: "2025-08-14T09:05:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T11:21:28Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW Database Addon and Software

## Post 145346 by Lacustat — 2025-08-14T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145346#p145346 | page 1 | era: pre-1.18.1 -->

I Poste in English and in German

 **ENGLISCH**

Hello everyone,

Yesterday I had the idea to create an addon for Turtle WoW to feed a database with information, so that we have up-to-date data similar to WoWHead.

So I programmed an addon that reads data while playing — loot, location, NPC, NPC level, and so on.

It worked right away, so I also converted it to JavaScript, allowing the database to read it easily.

I also quickly built a small piece of software in C# that can then send everything to a database. It runs in the tray, reads the data from the SavedVariable, and would transmit it directly.

Here is an example of what the data looks like when it is read:
Code: Select all

```
[274] = { ["zone"] = "Maraudon", ["session_id"] = "s-1755125511", ["client_locale"] = "enUS", ["addon_version"] = "1.4.0", ["ob_seq"] = 81, ["loot_method"] = "group", ["quality"] = 1, ["corpse_sig"] = "Maraudon|Deep Borer||10|55|87756384", ["ts"] = 1755127682, ["qty"] = 1, ["npc_level"] = 47, ["item_id"] = 4304, ["source_spell"] = "Skinning", ["item_name"] = "Thick Leather", ["item_link"] = "|cffffffff|Hitem:4304:0:0:0|h[Thick Leather]|h|r", ["y"] = 52.84, ["x"] = 12.44, ["group_size"] = 3, ["source_type"] = "skinning", ["device_id"] = "tl-689d1707-8bcd556a", ["npc_name"] = "Deep Borer", ["player_level"] = 60, ["subzone"] = "", },
```

And here is an example of how it is converted for JS:
Code: Select all

```
TurtleLootExport = { ["lines"] = { [1] = "{\"ts\":1755101339,\"zone\":\"Un'Goro Crater\",\"subzone\":\"The Marshlands\",\"x\":68.07,\"y\":49.6,\"npc_name\":\"Venomhide Ravasaur\",\"npc_level\":50,\"player_level\":60,\"group_size\":1,\"loot_method\":\"freeforall\",\"source_type\":\"skinning\",\"source_spell\":\"Skinning\",\"item_id\":4304,\"item_name\":\"Thick Leather\",\"qty\":1,\"quality\":1,\"corpse_sig\":\"Un'Goro Crater|Venomhide Ravasaur|The Marshlands|70|50|87755066\",\"client_locale\":\"enUS\",\"addon_version\":\"1.3.0\"}",
```

My question to the Turtle WoW team at this point is: Do you want something like this?
If so, I’ll provide you with the complete code and would be happy to do so.
 ------------------------------------------------------------------------------------------------------------------------------------------------

 **GERMAN**

Hallo zusammen,
ich hatte gestern die Idee für Turtle WoW ein Addon zu erstellen um die Datenbank mit Informationen zu füttern. So das wir Aktuelle daten haben wie bei WoWHead. Also habe ich ein Addon Programmiert das daten ausliest beim Spielen. Loot, Location, NPC, Level from NPC und so weiter. Das funktionierte gleich auf anhieb, darauf hin habe ich es auch gleich noch umwandeln lassen für JS, das es eine Datenbank einfach lesen kann. Eine kleine Software in C# habe ich auch noch gleich gebastelt die das ganze dann an eine Datenbank senden kann. Die läuft im Tray und liest die Daten aus der SavedVariable aus und würde sie direkt übertragen.

Hier mal ein Beispiel von wie die Daten aussehen wie sie ausgelesen werden: Code: Select all

```

[274] = { ["zone"] = "Maraudon", ["session_id"] = "s-1755125511", ["client_locale"] = "enUS", ["addon_version"] = "1.4.0", ["ob_seq"] = 81, ["loot_method"] = "group", ["quality"] = 1, ["corpse_sig"] = "Maraudon|Deep Borer||10|55|87756384", ["ts"] = 1755127682, ["qty"] = 1, ["npc_level"] = 47, ["item_id"] = 4304, ["source_spell"] = "Skinning", ["item_name"] = "Thick Leather", ["item_link"] = "|cffffffff|Hitem:4304:0:0:0|h[Thick Leather]|h|r", ["y"] = 52.84, ["x"] = 12.44, ["group_size"] = 3, ["source_type"] = "skinning", ["device_id"] = "tl-689d1707-8bcd556a", ["npc_name"] = "Deep Borer", ["player_level"] = 60, ["subzone"] = "", },

```

Jetzt ein Beispiel wie es Konvertiert wird für JS: Code: Select all

```

TurtleLootExport = { ["lines"] = { [1] = "{\"ts\":1755101339,\"zone\":\"Un'Goro Crater\",\"subzone\":\"The Marshlands\",\"x\":68.07,\"y\":49.6,\"npc_name\":\"Venomhide Ravasaur\",\"npc_level\":50,\"player_level\":60,\"group_size\":1,\"loot_method\":\"freeforall\",\"source_type\":\"skinning\",\"source_spell\":\"Skinning\",\"item_id\":4304,\"item_name\":\"Thick Leather\",\"qty\":1,\"quality\":1,\"corpse_sig\":\"Un'Goro Crater|Venomhide Ravasaur|The Marshlands|70|50|87755066\",\"client_locale\":\"enUS\",\"addon_version\":\"1.3.0\"}",

```

Meine Frage wäre jetzt hier an der Stelle an das Turtle WoW Team. Wollt ihr sowas ? Wenn ja stelle ich euch den Kompletten Code zur Verfügung und würde mich freuen.

