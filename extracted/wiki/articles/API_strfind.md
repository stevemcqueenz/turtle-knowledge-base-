---
title: "API strfind"
url: "https://turtle-wow.fandom.com/wiki/API_strfind"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:15:09Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["Lua functions"]
---
# API strfind

string.find(s, pattern [, init [, plain]])
Find the first occurrence of the pattern in the string passed. If an instance of the pattern is found a pair of values representing the start and end of the string is returned. If the pattern cannot be found nil is returned.
 > = string.find("Hello Lua user", "Lua")
 7       9
 > = string.find("Hello Lua user", "banana")
 nil
We can optionally specify where to start the search with a third argument. The argument may also be negative which means we count back from the end of the string and start the search.
 > = string.find("Hello Lua user", "Lua", 1)  -- start at first character
 7       9
 > = string.find("Hello Lua user", "Lua", 8)  -- "Lua" not found again after character 8
 nil
 > = string.find("Hello Lua user", "e", -5)   -- first "e" 5 characters from the end
 13      13
The pattern argument can be a regular expression which allows more complex searchs. See the [Patterns Tutorial on Lua-Users.org](http://lua-users.org/wiki/PatternsTutorial) for more information. We can turn off the regular expression feature by using the optional fourth argument plain. plain takes a boolean value and must be preceeded by init. E.g.,
 > = string.find("Hello Lua user", "%su")          -- find a space character followed by "u"
 10      11
 > = string.find("Hello Lua user", "%su", 1, true) -- turn on plain searches, now not found
 nil
