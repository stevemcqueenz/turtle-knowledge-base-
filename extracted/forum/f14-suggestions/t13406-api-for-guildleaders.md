---
title: "API for guildleaders"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13406"
topic_id: 13406
forum_id: 14
forum: "Suggestions"
author: "Neinnlive"
author_authority: "player"
posted: "2024-03-15T18:17:00Z"
last_post: "2025-06-06T08:57:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T11:28:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# API for guildleaders

## Post 90284 by Neinnlive — 2024-03-15T18:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90284#p90284 | page 1 | era: pre-1.18.1 -->

Ahoi,

i'd like to have an API for lists of my guild, for example members and their ranks/classes/notes. Need that for Spreadsheets with all data possible.

Hauter rein,

Neinn

## Post 90328 by Zeran (Patch Note Conspiracy Theorist) — 2024-03-16T13:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90328#p90328 | page 1 | era: pre-1.18.1 -->

Check out the Guild Functions section in the Lua API here: [https://vanilla-wow-archive.fandom.com/ ... _Functions](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API#Guild_Functions)

In particular, GetGuildRosterInfo() sounds like it will give you what you are looking for: [https://vanilla-wow-archive.fandom.com/ ... RosterInfo](https://vanilla-wow-archive.fandom.com/wiki/API_GetGuildRosterInfo)

I would assume that you can get the number of guild members through GetNumGuildMembers(), and then use it to index into GetGuildRosterInfo() and collect all the information about each member.

Then you would just print it out in the format that you need (e.g. CSV to import into Microsoft Excel).

PS: I've found <https://github.com/laytya/WowLuaVanilla> to be a very useful addon for working with Lua inside WoW.

## Post 134490 by Neinnlive — 2025-06-06T08:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134490#p134490 | page 1 | era: pre-1.18.1 -->

Ahoi,

seems like i needed to create my own small Addon/.lua to export Data.

Dunno if anybode is interested but i exported with my own built "GuildDataExporter".

 --------------------------------------------------

.lua Code: Select all

```
-- GuildDataExporter.lua - Finale Version für dein spezifisches Turtle WoW

SLASH_EXPORTGUILD1 = "/exportguild";

SlashCmdList["EXPORTGUILD"] = function()
GuildRosterExportData = GuildRosterExportData or {};

DEFAULT_CHAT_FRAME:AddMessage("|cff00ffffGuildDataExporter: Export wird gestartet...|r");

GuildRosterExportData = {};

local memberCounter = 0;

local numMembers = GetNumGuildMembers();
if numMembers == 0 then
DEFAULT_CHAT_FRAME:AddMessage("|cffff0000GuildDataExporter: Keine Gildenmitglieder gefunden oder Roster nicht geladen. Bitte Gildenfenster (J) öffnen und durchscrollen.|r");
return;
end

 -- Hier ist die Änderung: 'Nr' wurde der Headerzeile hinzugefügt
table.insert(GuildRosterExportData, "Nr,Name,Rank,RankIndex,Level,Class,Zone,Note,OfficerNote,Online,Status,ClassFileName,AchievementPoints,AchievementRank,IsMobile");

for i = 1, numMembers do
memberCounter = memberCounter + 1;

local name, rank, rankIndex, level, class, zone, note, officerNote, online, status, classFileName, achievementPoints, achievementRank, isMobile = GetGuildRosterInfo(i);

local safeName = name or "";
local safeRank = rank or "";
local safeClass = class or "";
local safeZone = zone or "";
local safeStatus = status or "";
local safeClassFileName = classFileName or "";

local cleanNote = (note and string.gsub(note, ",", "")) or "";
local cleanOfficerNote = (officerNote and string.gsub(officerNote, ",", "")) or "";

local safeRankIndex = rankIndex or 0;
local safeLevel = level or 0;

local safeAchievementPoints = tostring(achievementPoints or 0);
local safeAchievementRank = tostring(achievementRank or 0);

local safeOnline = online and "TRUE" or "FALSE";
local safeIsMobile = isMobile and "TRUE" or "FALSE";

local line = string.format("%d,%s,%s,%d,%d,%s,%s,%s,%s,%s,%s,%s,%s,%s",
memberCounter,
safeName,
safeRank,
safeRankIndex,
safeLevel,
safeClass,
safeZone,
cleanNote,
cleanOfficerNote,
safeOnline,
safeStatus,
safeClassFileName,
safeAchievementPoints,
safeAchievementRank,
safeIsMobile
);

table.insert(GuildRosterExportData, line);
end

DEFAULT_CHAT_FRAME:AddMessage("|cff00ff00GuildDataExporter: Export abgeschlossen!|r");
DEFAULT_CHAT_FRAME:AddMessage("|cffffd700GuildDataExporter: Logge aus und finde die Daten in:|r");
DEFAULT_CHAT_FRAME:AddMessage("|cffffd700C:\\Users\\<NAME>\\AppData\\Local\\VirtualStore\\Program Files\\Games\\Turtle WoW\\WTF\\Account\\<ACCOUNT NAME>\\SavedVariables\\GuildDataExporter.lua|r");
end
```

 --------------------------------------------------

.toc
Code: Select all

```
## Interface: 11200
## Title: Guild Data Exporter
## Notes: Exports guild roster data to SavedVariables.
## SavedVariables: GuildRosterExportData

GuildDataExporter.lua
```

 --------------------------------------------------

go online, open your guild window and also show offline members

use /exportguild

in chat

 --------------------------------------------------

due to write protection and due to the fact i wont do that export every day i took that exported data from

C:\Users\<NAME>\AppData\Local\VirtualStore\Program Files\Games\Turtle WoW\WTF\Account\<NAME>\SavedVariables

to

C:\Users\<NAME>\OneDrive\Games\tw-Zusatz\Export_von_Daten_WoW
(my cloud)

 --------------------------------------------------

wrote a python script, named:
convert_guild_data.py

with following code:
Code: Select all

```
import re
import os

def convert_guild_data():
# --- DEINE PFADE SIND HIER FESTGELEGT ---
# Der Ordner, in dem die .py-Datei liegt und die saubere CSV-Datei erstellt wird
# Dies ist der Pfad, den du mir als Wunschordner genannt hast.
base_folder = r'C:\Users\<NAME>\OneDrive\Games\tw-Zusatz\Export_von_Daten_WoW'

# Pfad zur Eingabedatei (die du hierher verschiebst)
# Das Skript erwartet die Datei HIER!
input_lua_path = os.path.join(base_folder, 'GuildDataExporter.lua')

# Pfad zur Ausgabedatei (die saubere CSV-Datei, die im base_folder erstellt wird)
output_csv_path = os.path.join(base_folder, 'guild_roster_clean.csv')

cleaned_lines = []
in_data_block = False

try:
# Öffne die Eingabedatei aus dem WoW SavedVariables Ordner
with open(input_lua_path, 'r', encoding='utf-8') as f_in:
for line in f_in:
line = line.strip() # Entfernt Leerzeichen und Zeilenumbrüche am Anfang und Ende

# Prüfe, ob wir den Datenblock erreichen
if line.startswith("GuildRosterExportData = {"):
in_data_block = True
continue # Diese Zeile selbst überspringen

# Wenn wir im Datenblock sind
if in_data_block:
if line == "}":
break # Ende des Datenblocks, Schleife beenden

# Verwende reguläre Ausdrücke, um die Lua-Syntax "[X] = " und das abschließende "," zu entfernen
# Es wird nur der Inhalt zwischen den Anführungszeichen extrahiert
match = re.match(r'^\[\d+\] = "(.*)",?$', line)
if match:
data_content = match.group(1) # Hier ist unser sauberer Datenstring
cleaned_lines.append(data_content)
else:
# Falls eine Zeile nicht dem erwarteten Muster entspricht (z.B. Kommentare, leere Zeilen), warnen
print(f"Warnung: Unerwartetes Zeilenformat in {input_lua_path}: {line}")

# Prüfe, ob überhaupt Daten gefunden und bereinigt wurden
if not cleaned_lines:
print(f"Fehler: Keine Daten im Format [X] = \"...\" in {input_lua_path} gefunden.")
return False

# Stelle sicher, dass der Zielordner (base_folder) existiert
# Wenn der Ordner nicht existiert, wird er hier erstellt
os.makedirs(os.path.dirname(output_csv_path), exist_ok=True)

# Schreibe die bereinigten Daten in die neue CSV-Datei
with open(output_csv_path, 'w', encoding='utf-8', newline='') as f_out:
for cleaned_line in cleaned_lines:
f_out.write(cleaned_line + '\n') # Füge jede Zeile mit einem Zeilenumbruch hinzu

print(f"Erfolgreich konvertiert! Die saubere Datei liegt hier: {output_csv_path}")
return True

except FileNotFoundError:
# Hier ist die korrigierte Zeile: Der gesamte String ist jetzt in einer Zeile
print(f"Fehler: Die Eingabedatei wurde nicht gefunden: {input_lua_path}")
print("Bitte stelle sicher, dass die 'GuildDataExporter.lua' im SavedVariables-Ordner vorhanden ist und der Pfad korrekt ist.")
return False
except Exception as e:
print(f"Ein unerwarteter Fehler ist aufgetreten: {e}")
return False

# Starte die Konvertierungsfunktion, wenn das Skript ausgeführt wird
print("Starte Konvertierung...")
convert_guild_data()
```

 --------------------------------------------------

open PowerShell and use
cd C:\Users\fleis\OneDrive\Games\tw-Zusatz\Export_von_Daten_WoW
and
python convert_guild_data.py

 --------------------------------------------------

You will have your .csv in that folder and will be able to import it anywhere... for example Google Sheets.

German comments in that code - btw, i am no coder and never did .lua or .py before. Feel free to make it better and let me know.

For me, it works perfectly now. One important note: with that code, it is NOT allowed to have "," in your ingame member notes or offi-notes. That will cause failures in your exported data.

Hauter rein,

Neinn

