---
title: "API debugstack"
url: "https://turtle-wow.fandom.com/wiki/API_debugstack"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T10:07:50Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API debugstack

Output a string representation of the current calling stack, similar to the standard Lua debug.traceback() call, which is not present in WoW.
<syntaxhighlight lang="lua">
 description = debugstack([start[, count1[, count2]]])
</syntaxhighlight>
## Arguments
### Parameters
  ; start
   Number - the stack depth at which to start the stack trace (default 1 - the function calling debugstack)
  ; count1
   Number - the number of functions to output at the top of the stack (default 12)
  ; count2
   Number - the number of functions to output at the bottom of the stack (default 10)

### Returns
  ; description
   String - a multi-line string showing what the current call stack looks like

If there are more than count1+count2 calls in the stack, they are separated by a "..." line.

## Example
Assume the following example file, "file.lua":
<syntaxhighlight lang="lua">
  1: function a()
  2:   error("Boom!"); 
  3: end
  4:
  5: function b() a(); end
  6:
  7: function c() b(); end
  8:
  9: function d() c(); end
 10:
 11: function e() d(); end
 12:
 13: function f() e(); end
 14:
 15: function errhandler(msg); end
 16:   print msg .. "\nCall stack: \n" .. debugstack(2, 3, 2);
 17: end
 18:
 19: xpcall(f, errhandler);
</syntaxhighlight>
This would output something along the following:
<syntaxhighlight lang="lua">
 file.lua:2: Boom!
 Call stack:
 file.lua:2: in function a
 file.lua:5: in function b
 file.lua:7: in function c
 ...
 file.lua:13: in function f
 file.lua:19
</syntaxhighlight>
Note that despite its all-lowercase name, this is not a core [Lua](Lua) function. It is a WoW API.

## Addon
Example from addon named BugGrabber<syntaxhighlight lang="lua">
-- Error handler
function BugGrabber.GrabError(_, err)
	-- Get the full backtrace
	err = err .. "\n" .. debugstack(4)

	-- Normalize the full paths into last directory component and filename.
	local errmsg = ""
	local looping = false
	for trace in string_gmatch(err, "(.-)\n") do
		local match, found, path, file, line, msg
		found = false

		-- First detect an endless loop so as to abort it below
		if string.find(trace, "BugGrabber") then
			looping = true
		end
</syntaxhighlight>
