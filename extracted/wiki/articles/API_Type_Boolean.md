---
title: "API Type Boolean"
url: "https://turtle-wow.fandom.com/wiki/API_Type_Boolean"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:53:48Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type Boolean

A **boolean** data type is one that by definition only has two states, "true" and "false".

## Booleans in Lua
In Lua, the programming language used by the World of Warcraft User Interface, real booleans were not introduced until version 5.0.

Early versions of World of Warcraft used Lua v4, which shows in that the majority of APIs still return **1** for "true", and **nil** for "false".

In Lua, there are only two values that evaluate to a boolean false: **false** and **nil**.

  -ALL OTHER VALUES EVALUATE TO TRUE**. Including 0, which is an important distinction for e.g. C/C++ programmers.

## Gotchas with Booleans in Lua
When used in **if ... then** clauses a **1** result is the same as a **true** result, so you do not have to worry there. But beware of *comparing* the returns of supposedly-boolean functions with eachother without forcing them to actually be boolean.

Example:
 function Func1() return 1; end     -- old-style function returning 1 for true
 function Func2() return true; end  -- new-style function actually using true
 
 if(Func1() == Func2()) then
   print "They're both the same!";
 else
   print "They're different!";
 end
This would output **"They're different!"**, because *1 and true are not the same thing in Lua*.

You can force a value to be boolean by NOTing it twice, like so:
 definitelyBoolean = not not kindaBoolean;
In the earlier disfunctional example, we'd get away with NOTing it just once since we're only testing if they're the same:
 if( (not Func1()) == (not Func2()) ) then
   ...
