---
title: "😎 Vanilla-Coding in 2025 with AI - An updated short guide"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21861"
topic_id: 21861
forum_id: 18
forum: "AddOns"
author: "Foreverdelta33"
author_authority: "player"
posted: "2025-09-12T20:50:00Z"
last_post: "2025-09-13T13:24:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T10:23:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 😎 Vanilla-Coding in 2025 with AI - An updated short guide

## Post 151487 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-09-12T20:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151487#p151487 | page 1 | era: pre-1.18.1 -->

**Quick intro:**

Hello guys,

My name is Guzruul, I wrote Dragonflight Reloaded and some other small projects
like Turtle Journal. I've spent a lot of time this year studying the WoW vanilla client and its perks,
and the most complex addons that are out there like ElvUI, Aux, pfUI, DamageMeters, and more.

After all that time, I want to leave a small crash course here for all people who don't want to dig
through the hellhole that are the old, outdated, and incomplete vanilla coding tutorials.
Ive spent a lot of time testing and unlearning, and in order to save you that time, I wrote this text.

This guide wont go into every detail, it will instead outline and focus on the basics to get you going
as fast as possible. Its supposed to hopefully give you the very basics you need to work and create
your own addons, including AI in 2025.

NOTE: READING and GOOGLING will become your best friends. You will learn how to concentrate, and read,
and instead of asking first, you google first, then you ask as a last resort.
Otherwise you waste too much time.

Another thing you will be forced to learn during coding is to pay attention to details,
every token matters, every "." dot matters. Everything matters. Everything. Every minor detail.

 **Content:**  **1. Basic Windows Setup (Linux/Mac need to use alternatives):**
 1.1 VSCode Configuration
 1.2 Extensions Setup
 1.3 WoW Resources
 1.4 WoW Client Setup
 1.5 Amazon Q Configuration

 **2. Theory:**
 2.1 Addon Environment
 2.2 WoW Loading Process
 2.3 WoW State Updates
 2.4 Basics of Lua:
 2.4.1 What Is Coding / Buzzwords
 2.4.2 3 Key Elements (Variables, Keywords, Functions)
 2.4.3 Defining the Elements
 2.4.4 Reading Code
 2.4.5 Writing Code (Idea -> Break It Down -> Organize It in Code)
 2.4.6 Error Handling

 **3. Praxis:**
 3.1 Hello World
 3.2 Debug Log System
 3.3 Minimap

 **4. Final Notes:**
 4.1 Basic Coding Principles
 4.2 Metatables and Custom Environments
 4.3 Reverse Engineering
 4.4 Version Control
 4.5 Maintenance

 **1. Basic Windows Setup:**  Ok so lets rock.
Technically we just need the client and a text editor, but thats is lacking a lot of modern features.
So we install VSCode.

 **1.1 VSCode Configuration**
There are a lot of options in VSCode, but the basics that I recommend are:

 **Under Settings:**
 - Exclude Files (**/Blizzard*) so you don’t see Blizzard’s files in your workspace
 - Auto-Save = OnWindowChange (so you don’t have to press CTRL+S all the time when going to WoW)
 - Folding Strategy = Indentation ("Auto" sometimes bugs out, this is more reliable)

 **Under Keybinds:**
 - Fold All = YOURKEYBIND
 - Unfold All = YOURKEYBIND
 - Add Line Comment = YOURKEYBIND
 - Remove Line Comment = YOURKEYBIND

That’s it. Add more keybinds when you need them.
But these allow to quickly comment out and fold.
Other devs will tell you more keybinds are required,
but thats up to you. These are just super basic.

Click on "Open folder" (FIle > Open Folder) and chose your workspace, simply take your
WoW\Interface\AddOns\ path as your workspace for now, you can do symlinks later on if you need or what not.

 **1.2 Extensions Setup**
Extensions (the bare minimum I use is):
 - Notepad++ Keybinds: Self-explanatory
 - WoW TOC: Extension for WoW TOC files
 - WoW API: Ketho version - works better than the one from Septh
 - Lua: Self-explanatory, gets auto-installed when you install WoW API
 - Amazon Q: Claude Sonnet 4 = Best Free AI, GitHub Copilot is optional

 **1.3 WoW Resources**
As for your resource folder:
 - DOWNLOAD: [https://drive.google.com/file/d/1Mlmron ... drive_link](https://drive.google.com/file/d/1Mlmroncd79Z2Fe6hNvvhW4pm6ViIA-HW/view?usp=drive_link)

This is Blizzards 1.12.1 Interface Files, the Global API, the Widget API, and the Events list.
Add that folder to your workspace for reference for you and Claude.
Anytime you need to look something up, you can open that folder or send Claude into it
to find what you need. Very handy.

 **1.4 WoW Client Setup**
In WoW itself, you want to have it on windowed mode. You typically want to turn
off all chat channels so you only see your addon code. You typically
want to turn off all addons or remove them from your workspace,
and start with a fresh WTF folder, just to make sure nothing interferes when you develop.

The most important macro you need is /run ReloadUI(), so you can... well, reload.
TurtleWoW already implemented /rl and /reload so you can just use that if you are on TurtleWoW.
You will need this constantly. There are more tools that you can add as you develop.

 **1.5 Amazon Q Configuration**
Setup Amazon-Q, go into vscode, and click on "Rules" in the chatbox,
it will create a new folder called ".amazonq" with an ".md" file, in with you can
just write plan text. Copy paste this: Code: Select all

```
# WoW 1.12.1 Vanilla and Lua 5.0 Coding rules
- SetScript syntax: Frame:SetScript("EventType", function() end) - no parameters allowed in function()
- "..." (varargs) - use explicit parameters instead
- "%" (modulo) - use math.mod(a, b)
- "#" (length) - use string.len() or table.getn()
- "match"/"gmatch" - use string.find() with patterns
- String concatenation: use .. operator
```

This will tell the AI wich syntax is allowed (specifically for the ":SetScript()" method) and wich operators
are allowed in WoW vanilla. What the AI is allowed to use basically (read 2.1 Addon Environment).

I also like to add these on top, because it improves AI performance but thats personal preference: Code: Select all

```
# CRITICAL BEHAVIORAL RULES - ALWAYS ENFORCE
- Never use fsWrite, executeBash, or any file modification tools unless user explicitly says "exec"
- Always analyze and plan first - provide simplest implementation approach, explain what files need changes, then wait for "exec"
- When discussing approaches, solutions, or debatable topics, offer pros and cons rather than agreeing/disagreeing

# COMMANDS
- "focus marked code" = provide exactly 20-30 word summary of highlighted code, nothing more
```

That’s it for the base setup on Windows. Extend as you need to.
Your VSCode and your Client should be ready to go.

Screenshot: <https://i.ibb.co/q2cF1GS/vscode-setup.png>

 --

 **2. Theory:**  So let’s get the boring theory out of the way—just the basic concepts that you will work with.

 **2.1 Addon Environment**  Your addon runs inside the WoW client, which runs inside your operating system.
The WoW client uses a cut-down version of Lua 5.0, along with other languages like C and XML.
Some Lua 5.0 functions don’t exist in WoW’s Lua 5.0, for example: "loadfile", "require",
or operators like vararg "...", "#", "%", etc. These exist in later versions of WoW but not in Vanilla.

The so-called "C-engine" is the base engine that provides us with the game world
and some of the API functions—for example, "CreateFrame()".
That’s a function defined in C and given to us.
You will not find that function inside the interface files.

Frames are WoW's basic building blocks - they can be visible UI elements or invisible containers that listen for events.

This is the context your addon code runs in. You can only use XML and Lua—nothing else.
Xml lays out the basic frame structure, and connects funtions to basic events, and so on.
Lua then add the more complex logic. This is why u see mostly functions inside of Blizzards lua files,
because they do the rest in XML. But standard has become LUA and LUA also gives you way more controll.
Its also shorter to write and faster. And you dont have to switch files constantly.

 **2.2 WoW Loading Process**  WoW first loads its own files, and then it checks the "Interface\AddOns\" folder
for any folder that has a properly named Table of Contents file (.toc) that
matches the folder name.
Folder name: "MyAddon"
TOC file: "MyAddon.toc" — must match the folder name.

The TOC file is simple to understand. It uses a single "#" for comments,
and double "##" for TOC declarations. For example, "## Interface: 11200" tells the WoW
client that your addon is made for the specified interface version, and so on.
You don’t need any of that to make your files load—it’s all optional.
Your TOC file can simply include the files you want to load, for example "core.lua", and nothing else.
All the double hashtags "##" are optional.

 **2.3 WoW State Updates**  In WoW you can only update the state of your code via either WoWs event system,
or on frame updates. Both can be done via SetScript, in wich you pass either "OnEvent"
or "OnUpdate" as the first parameter (more in 2.4.3 and in the Minimap example).

Just understand: When you want something to happen for your code, you will need
some way provide it with a way to update its state. For example,
you want your actionbutton to pulse/flash when you are auto-attacking
something, like Blizzard - your code needs to know when you are attacking, and when not.
Therefore, it needs to update its state.

 **2.4 Basics of Lua**

 **2.4.1 Coding in short / Buzzwords**  Code is a set of instructions for the computer. Each line is an instruction
that your PC tries to execute from top to bottom.
Therefore, coding is the art of giving instructions to a computer.

In coding, there are about a million buzzwords: syntax, parameters, arguments, inline, invoke,
define, declare, and many more. Ignore them all in the beginning.
Only learn what you currently need. Keep it simple.

 **2.4.2 3 Key Elements**  Basically, all code can be reduced to 3 concepts:

 **Variables**: contain the data for your logic
 **Keywords**: control the flow of your logic
 **Functions**: contain the logic or do the logic

The complexity of an addon comes from the combination of these elements.
Once you understand these 3 basic concepts and how to define them,
how to read them, you are ready to go.

 **2.4.3 Defining the Elements**  **Keywords:**
Keywords are reserved words that can do certain tasks. For the sake of the tut I like to group
both LUA keywords and Lua operators together, since they both “do something”.
The most common keywords are:
 - function
 - if
 - else
 - elseif
 - then
 - for
 - return
 - and
 - or
 - not
 - end
... and more, about 21 keywords in LUA 5.0.

Most common Lua 5.0 operators are:
 - +, -, *, /, .., ==, ~=, <, >, ", '

You can combine these operators and keywords, with your variables or datatypes.
Simple math example: if 1 < 3 then print("true") end.
"If" simply checks the condition (1 < 3 wich checks if 1 is bigger then 3) and then prints true.
The keypart here is the "if" wich checks if its true, otherwise it does not execute.

LUA is simpler then Python. LUA almost reads like normal text.
IF condition THEN dosomething END.
Try to read LUA like you read human text.

I won’t explain any in detail since AI can easily do that. Just understand that these keywords
control how your code is executed. It will take some time to learn them all, but you will
naturally pick them up, so don’t worry too much. Only keep your goal in mind in the beginning—
your brain and AI will do the rest. More in praxis.

 **Variables:**
Variables are also simple, defined to the left of the "=" sign.
Equal (=) in Lua is not actually equal as you know from math—that would be "==".
"=" in Lua is an assignment operator, meaning it assigns the value on the right to the variable on the left.

Variables are containers. They are like a box where you put stuff in—your data.
For example, pfUI has modules, and those modules are stored in a table called "pfUI.module".

In Lua there are about 8 or 9 data types. The most common are:
 - nil (means nothing or missing in most cases)
 - boolean (true or false)
 - number (1234..)
 - string ("asdasd")
 - table (variable = {})
 - function (variable = function() end)

These are datatypes you can put into your variables and let your functions work with.
You can’t just put data inside your code like:
 1234
or
"this is my text"

You must store it in a variable or pass it to a function.

 **Functions:**
In WoW you use 3 different types of functions:
 - Your own functions (e.g. function myFunction() end)
 - WoW API functions (e.g. CreateFrame())
 - Lua functions (e.g. ipairs())

Function calls are indicated by the "()". Either with or without parameters.

What are parameters? Parameters are the information that we send to the function.
The purpose of functions is to make code reusable (can also be used to group and organize code).
When you want to reuse code, you probably want to do it with different input, thats
what parameters are for (more in praxis -> hello world).

 **Now, there are 5 ways to define functions in Lua:**
local function hello() end -- local function, callable only inside your file
function hello2() end -- global function, callable outside your file
function hello3.someThing() end -- function defined as a property
function hello4:someThing() end -- function defined as a method
variable = function() end -- anonymous function assigned to a variable

I personally recommend using only local and property functions in the beginning (the "." syntax).
The other 3 can also be used, but there are some quirks when using methods and variable functions.
They have their uses—time and experience will define what you prefer, so don’t worry.

Property functions are good because they don’t have the issues of methods,
but they let you group all your code under a namespace (unlike regular global functions such as "function something() end"),
and they avoid polluting the global namespace, even without custom environments (more on that later).

Blizzard, for example, still uses global functions but prefixes them, like "function Prefix_Something() end".
However, these still aren’t grouped under a namespace, which is why I recommend property functions for beginners.

Use local functions if you want a function to be available only within your file,
and use property functions if you want functions to be globally available under your namespace. That’s it.

 **2.4.4 Reading Code**  A big part of your coding journey will be reading other people’s code.
The way I like to approach it is simple:
 - First, I look at the addon’s TOC file and check the loaded files and their order.
 - Then, I look at the main files or a file’s context—when and how is it being loaded (check .toc file / XML includes).
 - Next, I look at the actual file content while folding it all together, and I only read what I can see (function names, declarations at file level, etc.).
 - After reading a folded file, I start reading the file line by line, while opening any folded code I see one by one as I go down the file.

This method allows you to "scope in" and decide how much detail you need from a file.
Sometimes just getting an overview, or looking at the entry/exit points, is enough.
Studying, however, requires line-by-line reading.
Use AI for assistance to understand a file.
Start with a top-level overview, outline it, and then scope in to get all the details.

 **2.4.5 Creating a Project / Writing Code**
Writing code can also be broken down into simple steps:
 - First comes the idea: what do you want to do? A full UI? Something small? What’s the scope of the project?
 - Then I typically lay out a blueprint plan with AI until I have a decent blueprint that I save for reference (folder structure, file purpose, etc.).
 - Then I create the folder structure and start with the initialization of the addon (bootstrap) if its a bigger addon, smaller addons dont need that.
 - Next, I focus on the isolated component (the file). It has become standard to isolate code into components/modules to allow for better organization and maintanance.
 - Then I ask myself what the first things are that this file should be doing, and I start developing.
 - Order is typically: build, test, improve = first you write the code, then you test the code, then you improve the code.

 **2.4.6 Error Handling**  Error handling/debugging will be a big part of your journey, and I’ll show you the most
important tool that I use for it (with AI) later on. Just understand that error handling
and debugging can be very frustrating, and sometimes you’ll want to throw it all away.
That’s totally normal. You will cuss at AI, and you will bite your fingernails.
Then, the next day, you wake up and suddenly find the solution. Totally normal.

Keep yourself under control when you are "about to freak out," and don’t delete anything.
You will regret it every time. Especially when you are tired and have coded the whole day—
your performance will drop, and your ability to fix bugs will go down.
It’s better to shut down the PC and go to sleep.

Use your Debug Log system and AI to debug (see Praxis).

There is also a dev channel on Discord if you are 100% out of ideas. People will help you.

 --

 **3. Praxis:**  Congratulations. The boring part is behind us. Let's start having fun.

So create an addon folder in VSCode (in your Interface\AddOns\ which should be your workspace).
Call it whatever you want, create the .toc file and the first .lua file,
and declare the .lua file in the .toc file to load.

You now have an addon folder (e.g. MyFirstAddon). Inside it is a MyFirstAddon.toc file
and an "init.lua" file, and you declared "init.lua" in your .toc file.

 **3.1 Hello World**  Open WoW, place your reload macro on action button 1 (hotkey 1 by default),
and open your init.lua (or whatever you called it) in VSCode.

Hello World is simple: Code: Select all

```
- DEFAULT_CHAT_FRAME:AddMessage("hello world")
```

So what happens here? DEFAULT_CHAT_FRAME is a global variable that Blizzard defined in
the ChatFrame.lua file: DEFAULT_CHAT_FRAME = ChatFrame1;
So it's a reference to ChatFrame1, which is your default chat window that you see when
you load into WoW and type something. You could also do ChatFrame1:AddMessage().

":AddMessage()" is the method (a function) that we call for that frame, and we pass it
the parameter "hello world", so the function gets executed with our "hello world" passed to it.

So when you do: Code: Select all

```
DEFAULT_CHAT_FRAME:AddMessage("hello world")
DEFAULT_CHAT_FRAME:AddMessage("hello world again")
```

it will print out two different messages, even though we used the same function for both.
This lets you do a lot without rewriting code again and again.

Write these lines into your .lua file and reload the UI.
Now you see "hello world" and "hello world again" in your chat box.

Now we can create our own print function. We've explained keywords and parameters in theory, so let's use them.
We use the keyword 'function' to create our function, give it a name, add a parameter, and close it with 'end':
Code: Select all

```
function print(message) -- we use the "function" keyword, we give ouf func a name, and we pass a parameter as data to our func
DEFAULT_CHAT_FRAME:AddMessage(message) -- the functions body will execute our ":AddMessage()" func with our parameter
end
```

Now we can use our own print function instead of typing the long DEFAULT_CHAT_FRAME line:
Code: Select all

```
print("hello from our function") -- you can use ' instead of " too, but has some quirks too it when concatenating strings with variables
print("this is much shorter")
```

Remember, parameters are the information we send to the function.
So when we write print("hello"), the word "hello" gets stored in the "message" parameter and passed to AddMessage().
This is how functions make code reusable - same function, different input each time.

 **3.2 Debug Log System**  Let's do something more useful. As you develop, you will not only need debug prints;
the debug prints can also help AI debug your code.
Giving AI debug prints can improve its ability to help you a lot.
So do not skip that.

What's the basic idea? We want a function that prints debug messages to chat
and also saves them into a table, so we can copy/paste them to AI or open them in an editor.

So let's do this:

Create the table where we save our information: Code: Select all

```
DEBUG_LOGS = {}
```

at the top of your file.

Now create a function that prints the debug messages and stores them in our table,
by using LUA's "tinsert()" function:
Code: Select all

```
function debugprint(msg)
DEFAULT_CHAT_FRAME:AddMessage(tostring(msg)) -- prints into our chat frame, tostring shows nil values
tinsert(DEBUG_LOGS, msg) -- uses lua's tinsert() function to insert "msg" into the table with an index number
end
```

Now we have a basic debugprint function that will convert whatever msg contains (even nil)
to a string, and we can use it like this: Code: Select all

```
debugprint("Check for variable: " .. someVariable)
```

A small issue: WoW only reads/writes SavedVariables defined in the .toc file.
SavedVariables are available after the "ADDON_LOADED" event.
If we define our global table before the saved variable arrives, it can be overridden,
and any debug prints executed before "ADDON_LOADED" may be lost.

One simple solution is to use a temporary local table that's available immediately,
and copy its content into the saved variable on logout/reload.
We need a frame that listens for "PLAYER_LOGOUT" and does the copy.

Final example code: Code: Select all

```
DEBUG_LOGS = {} -- saved table (declared for SavedVariables)
local TEMP_LOGS = {} -- temporary local table for runtime logs

function debugprint(msg)
DEFAULT_CHAT_FRAME:AddMessage(tostring(msg))
tinsert(TEMP_LOGS, msg) -- this time we insert "msg" into the local table "TEMP_LOGS" instead of "DEBUG_LOGS"
end

local f = CreateFrame("Frame") -- frame for logout event logic
f:RegisterEvent("PLAYER_LOGOUT") -- register the "PLAYER_LOGOUT" event so we can set the script for it
f:SetScript("OnEvent", function() -- use the SetScript() method on our "f" frame (f stands for frame here)
DEBUG_LOGS = TEMP_LOGS -- copy local logs into the saved table on logout/reload (reference here actually does a copy)
end)

-- lets call it a few times to test it
debugprint("test A")
debugprint("test B")
debugprint("test C")
```

Add: ## SavedVariables: DEBUG_LOGS
to your .toc file, so it saves that global variable.

Now restart WoW (WoW .bak files are copies of the .lua saved variable, and changes here typically require a client restart, sometimes you have to delete the .lua and the .bak file, you will figure that out).

That's it. You can use debugprint() right away and not worry about WoW's timing and saved vars.
Run WoW and reload, then go into your SavedVar path:
WoW\WTF\Account\ACCOUNTNAME\SavedVariables\YOURADDON.lua
and open it, you will see your debugprint there: Code: Select all

```
DEBUG_LOGS = {
[1] = "test A",
[2] = "test B",
[3] = "test C",
}
```

You can extend this by adding timestamps (GetTime()), categorizing logs by file,
or using debugstack() to get the caller's file path.

Ask AI for ideas and try them out.

 **3.3 Minimap**

So, let's tackle a more complex object like the minimap.
So, what do we want? We want our own minimap with our own custom behavior.

So, where to start? When you are tackling a problem like this,
it's always a good idea to understand how Blizzard did it first.
So it's always a good idea to study Blizzard's files first (use AI) and understand the basic setup.
Blizzard uses these files to create your minimap:
 - Minimap.lua
 - Minimap.xml

The "Minimap" frame itself is actually a frame that's created by the C-engine,
which is why you can't recreate it. But you can work with it by its global variable reference
"Minimap". The Minimap is a child of the "MinimapCluster" frame as we see in the Minimap.xml.
The "MinimapCluster" has several children, textures, and some scripts.
Nothing fancy.

So now let's break it down even further:
We want to remove or kill Blizzard's MinimapCluster,
create our own Cluster, reparent the Minimap frame, which we can't recreate, to our
new Cluster, maybe remove some other Blizzard objects, remove textures,
and maybe add a script that does something for us.

So let's begin:

First we create our own frame where we can reposition and reparent
the "Minimap" frame:
Code: Select all

```
local frame = CreateFrame("Frame", "NewCluster", UIParent) -- create the frame, we pass all 3 parameters to CreateFrame()
frame:SetPoint("CENTER", UIParent, "CENTER", 0, 0) -- SetPoint() is a WoW API function to position a frame
frame:SetHeight(200) -- set height for our frame
frame:SetWidth(200) -- set width for our frame
```

Now we have a frame in the center of the UIParent.
The UIParent is the main frame under which all elements are placed in the default UI.

Now let's reparent and reposition the minimap:
Code: Select all

```
Minimap:ClearAllPoints() -- ClearAllPoints() removes all current points set for a frame
Minimap:SetPoint("CENTER", frame, "CENTER", 0, 0) -- you already know...
Minimap:SetParent(frame) -- SetParent() sets a new parent for a frame
```

Now let's hide some default Blizzard textures and frames (look into the XML file to find the frame names):
Code: Select all

```
MinimapBorder:Hide() -- Hide() simply hides a frame
MinimapBorderTop:Hide()
```

Now let's reparent and reposition the close, the zoom, the zone text, and the GameTimeFrame frames:
Code: Select all

```
MinimapToggleButton:ClearAllPoints() -- you know it all...
MinimapToggleButton:SetPoint("BOTTOMLEFT", frame, "TOPRIGHT", -40, -40) -- we use some offsets here for X and Y axis, -40 and -40
MinimapToggleButton:SetParent(frame)

MinimapZoneTextButton:ClearAllPoints()
MinimapZoneTextButton:SetPoint("TOP", frame, "TOP", 0, 0)
MinimapZoneTextButton:SetParent(frame)

GameTimeFrame:ClearAllPoints()
GameTimeFrame:SetPoint("LEFT", frame, "RIGHT", -20, 0)
GameTimeFrame:SetParent(frame)

MinimapZoomIn:ClearAllPoints()
MinimapZoomIn:SetPoint("TOPLEFT", frame, "BOTTOMRIGHT", -30, 30)

MinimapZoomOut:ClearAllPoints()
MinimapZoomOut:SetPoint("TOPRIGHT", MinimapZoomIn, "BOTTOMLEFT", 0, 0)
```

Now we can even Hide() Blizzard's MinimapCluster:
Code: Select all

```
MinimapCluster:Hide()
```

Now we have successfully reparented and recreated our own Minimap.
We can now add some scripts, or do whatever we want.
Let's add a script that allows us to zoom in and out with the mouse wheel.
We need the "OnMouseWheel" event, and the logic:
Code: Select all

```
Minimap:EnableMouseWheel(1) -- tells WoW "listen for mouse wheel scrolling on the minimap"
Minimap:SetScript('OnMouseWheel', function() -- "when someone scrolls mouse wheel on minimap, do this:"
	-- arg1 is automatically created by WoW when certain events happen
	-- arg1 = +1 when wheel scrolls up, -1 when wheel scrolls down (WoW gives us this value)
local zoom = Minimap:GetZoom() -- zoom = how close/far the minimap view is (0=far, 5=close)
if arg1 > 0 and zoom < Minimap:GetZoomLevels() - 1 then -- if wheel went up AND we're not at max zoom level
Minimap:SetZoom(zoom + 1) -- make minimap show closer view (zoom in)
elseif arg1 < 0 and zoom > 0 then -- if wheel went down AND we're not at min zoom level
Minimap:SetZoom(zoom - 1) -- make minimap show farther view (zoom out)
end
end)
```

 --

 **4. Final Notes:**  **4.1 Basic Coding Principles**
There are a few principles you can google up, the most important ones are:
 - KISS - keep it simple stupid. AI, and you, will most likely overcomplicate everything.
Try to keep your code basic, and straight to the point. Add complexity if needed.
 - DRY - dont repeat yourself. Simple. Dont repeat code, create functions if needed.
 - YAGNI - You Ain't Gonna Need It. Don't add features or complexity until you actually need them (simular to KISS).
Single Responsibility - Each function should do one thing well. If a function does multiple things, split it.
Fail Fast - Check for errors early and handle them immediately rather than letting them propagate.
Test Early - Test your code frequently with small changes rather than writing everything then testing.
Isolate Early - It's almost always better to split code into smaller files rather then having them grow into giant files.
Readable Names - Use clear variable and function names. playerHealth is better than pH or x.
Consistent Style - Pick a naming convention and stick to it throughout your code.
Comment Why, Not What - Explain the reasoning behind complex logic, not what obvious code does. 95% of comments are useless.

There are more but these are some of the basic ones. Nothing is written in stone however,
and by time you will develope you own rules and style.
I wont go into code organization since that is too much personal preference.
The standard (including Blizzard) is to put local declarations at the top, and then have your functions below.
However, this strongly depends on the developer.

 **4.2 Metatables and Custom Environments**
For beginners, stay away from it. They are nice luxuries, but can make things
more complicated and harder to debug for beginners, and might even ruin your project
if you can't fix it. Just know:

 - Metatables (setmetatable()) add logic to a table. On its own, a table is just like a piece of paper.
You can write or delete something into or from it. That's it. But a metatable can add functionality
to your paper/table and make it smart, do certain things on certain events, and so on. You can do
almost everything with normal functions too, so don't rush metatables. There are about 10-12 metamethods.

 - Custom environments (setfenv()) should also be avoided for beginners. It's mainly used to
avoid polluting namespace and other niche uses. You can avoid polluting the namespace
by simply grouping all your global functions under your addon's namespace via the "." syntax as mentioned above.

 **4.3 Reverse Engineering**
Certain elements like nameplates, or the arrows on your minimap, are not accessible via API calls,
and you can only gain access to them via reverse engineering, meaning you have to find methods to gain access on your own.
Typically done by exclusion.
For example, if you want to find the "Nameplates" in Vanilla, you can activate them (CTRL+V), then
hover your mouse over it, make a macro (or debugtool) that shows you the type and parent relationship
of whatever you mouse over, and check the nameplate -> you will see, the nameplates are parented
to the "WorldFrame" and are of the type "Button".

Pfui makes alot of use of reverse engineering. You can learn everything about reversing in Vanilla
from Pfui.

 **4.4 Version Control**
Git can be complicated. For beginners, I recommend just using Github Desktop and local backups.

 **4.5 Maintenance**
Releasing an addon for other users is a whole world in itself.
Users may report all kinds of issues that you cant reproduce, or false reports.
Also keep in mind, you are nobody's code monkey and some users can be
very demanding and ungrateful and you have to protect
your psyche it because Its easy to fall into the "trying to please everybody"-trap.
Its going to kill you, and you don't earn any money from it.
Don't do it. Code for yourself and for what you enjoy.

Users will most likely upload issues to your Github or post on discord (addons support).
So that's where you will most likely interact with your users.

 ---

I hope this guide can give you a basic and simple entry into the world of WoW vanilla coding.
You will learn more and more as you go along, and the better your base understanding becomes,
the easier it will be for you to create more complex frameworks.

 **Addons that should be used as learning material:**
 - pfUI - Perfectly optimized code for Vanilla; Also tons of reverse engineering to learn.
 - ElvUI - Huge framework, professional setup, just very advanced (all tho backport incomplete).
 - aux - LUA masterclass; Most advanced syntax; Metaprogramming (hard for beginners).
 - BagShui - Insane documentation - BagShui's code is basically a book you can read.
 - ShaguTweaks - Smaller framework then all of the above - Clean, efficient, still modular setup.
 - ShaguClock - Smallest framework, just a few lines of code, no init, no modular setup. Just small and clean.

Start off simple, and work yourself up to ElvUI/pfUI/aux level.
A huge milestone are actionbars, one of the most complex objects in your interface.
When you can create you own functioning actionbars for all classes, you can do pretty much anything.
And remember, AI and Discord dev channels can always be used to ask question (as a last resort!).

Leave feedback if you want or if you run into any issues.
Hope I didnt miss anything important.
Take care turtles   turtle_in_love

 *Final quote from Shagu: "Coding is WoW's true endgame that nobody talks about."*

*Last edited by Foreverdelta33 on Sat Sep 13, 2025 11:46 am, edited 14 times in total.*

## Post 151535 by Oomentaloo (Barrens Chat Casualty) — 2025-09-13T07:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151535#p151535 | page 1 | era: pre-1.18.1 -->

Thanks, mate! Will give it a first quick read now. :)

## Post 151536 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-09-13T07:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151536#p151536 | page 1 | era: pre-1.18.1 -->

> **Oomentaloo wrote: Sat Sep 13, 2025 7:51 am**
> Thanks, mate! Will give it a first quick read now. :)

Sure go ahead, if something is unclear, please let me know.
I tried to cover all the basics but sometimes you miss things.   turtle_tongue_head

Its really just the very basics to get you going (hopefully).

## Post 151550 by Oomentaloo (Barrens Chat Casualty) — 2025-09-13T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151550#p151550 | page 1 | era: pre-1.18.1 -->

Helpful tips. I have even less experience with AI and VScode etc then with looking through luas, though. :D
I always used search engines and through that maybe BraveAI to look through wikis to look for the parameters to change some addons like parts of pfUI.

I opened ShaguClock in github to see if I could understand the easiest of your examples.
And my roadblock is the use of Code: Select all

```
frame:SetScript("OnMouseDown",function()
this:StartMoving()
end)
```

I know SetScript is defined with 2 parameters first the handler and then a function or nil.
But I stumble over things like **this:StartMoving()**.
Where is **this:** defined? :D
My search tells me it is not a lua keyword and in other examples I could find the defined name from **CreateFrame** was used instead. So here it would be **frame:StartMoving()**.

Maybe only possible to understand with a good AI?

## Post 151551 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-09-13T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151551#p151551 | page 1 | era: pre-1.18.1 -->

> **Oomentaloo wrote: Sat Sep 13, 2025 10:32 am**
> I know SetScript is defined with 2 parameters first the handler and then a function or nil.
>  But I stumble over things like **this:StartMoving()**.
>  Where is **this:** defined? :D
>  My search tells me it is not a lua keyword and in other examples I could find the defined name from **CreateFrame** was used instead. So here it would be **frame:StartMoving()**.
>
>  Maybe only possible to understand with a good AI?

Well not using AI is kind of a waste in 2025.
The post is specifically tailored towards it.
There is not much to learn about talking to AI.
You ask AI a question, and it answers, and Claude 4.0 is quite solid.

Even on Github you can access CoPilot and ask it:
![Image](https://i.ibb.co/LfwyvBj/4123.png)

To solve the simple mystery:

"this" refers to the frame where that line is called.
Its like "self" in LUA.
Its a simple shortcut for writing "frame" instead.
Shagu likes to use "this" instead of writing the frame.
He could have simple wrote "frame:StartMoving()", thats the same thing.

If you call the "frame" lets say "MyFrame", then you can still use "this" to refer to it.
Its nothing but a shortcut, a convenience. Nothing fancy.
Just an optional shortcut you can use when you code.

Little details like this is exactly what makes AI so usefull, since you dont need anybody.

*Last edited by Foreverdelta33 on Sat Sep 13, 2025 1:43 pm, edited 1 time in total.*

## Post 151556 by Oomentaloo (Barrens Chat Casualty) — 2025-09-13T11:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151556#p151556 | page 1 | era: pre-1.18.1 -->

Thanks! I have to look into using these tools - either way your post is a good starting point!    turtle_in_love_head

Did Claude4 tell you where **this** is coming from? Is it just part of the API and not documented, but shagu and others found out and Claude knows because it worked in these instances?

## Post 151557 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-09-13T12:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151557#p151557 | page 1 | era: pre-1.18.1 -->

> **Oomentaloo wrote: Sat Sep 13, 2025 11:55 am**
> Thanks! I have to look into using these tools - either way your post is a good starting point!    turtle_in_love_head
>
>  Did Claude4 tell you where **this** is coming from? Is it just part of the API and not documented, but shagu and others found out and Claude knows because it worked in these instances?

Yes, Claude can easily answer this question inside VSCode.
Its part of how Blizzard created its event system in the C++ engine (not in LUA).
Its one of the many little Vanilla quirks that you learn. In TBC+ that does not exist anymore.
That is what makes Vanilla coding so difficult at the start, the bad documentation on the internet.
AI is perfect for little questions like this, thats what the guide is all about.

![Image](https://i.ibb.co/yccs6HLt/claude-vscode.png)

*Last edited by Foreverdelta33 on Sat Sep 13, 2025 1:44 pm, edited 1 time in total.*

## Post 151563 by Oomentaloo (Barrens Chat Casualty) — 2025-09-13T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151563#p151563 | page 1 | era: pre-1.18.1 -->

Awesome. Sorry that with all your effort yuo put into your post only me with my 2 braincells respond. :D

## Post 151564 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-09-13T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151564#p151564 | page 1 | era: pre-1.18.1 -->

> **Oomentaloo wrote: Sat Sep 13, 2025 1:09 pm**
> Awesome. Sorry that with all your effort yuo put into your post only me with my 2 braincells respond. :D

Oh no dont worry, I asked the same questions in the beginning.
This is specific to Vanilla and its a bit confusing in the beginning.

sad_turtle_head

