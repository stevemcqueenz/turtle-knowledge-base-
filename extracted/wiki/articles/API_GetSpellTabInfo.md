---
title: "API GetSpellTabInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetSpellTabInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T10:22:15Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSpellTabInfo

Retrieves information about the specified line of spells  
<syntaxhighlight lang="lua">
name, texture, offset, numSpells = GetSpellTabInfo(spellbookTabNum) 
</syntaxhighlight>
## Parameters
**Arguments**

  ; spellbookTabNum
   Number - The index of the tab, ranges from 1 to MAX_SKILLLINE_TABS

**Returns**

   name, texture, offset, numSpells

  ; name
   String - The name of the spell line (General, Shadow, Fury, etc.)
  ; texture
   String - The texture path for the spell line's icon
  ; offset
   Number - The number of spells before this spell line (will be one less than the index of the first spell in this spell line)
  ; numSpells
   Number - The number of spells in this spell line

## Example
<syntaxhighlight lang="lua">
 for i = 1, MAX_SKILLLINE_TABS do
    local name, texture, offset, numSpells = GetSpellTabInfo(i);
    
    if not name then
       break;
    end
    
    for s = offset + 1, offset + numSpells do
       local	spell, rank = GetSpellName(s, BOOKTYPE_SPELL);
       
       if rank then
           spell = spell.." "..rank;
       end
       
       DEFAULT_CHAT_FRAME:AddMessage(name..": "..spell);
    end
 end
</syntaxhighlight>

## Addon
Example from addon named Clique<syntaxhighlight lang="lua">
function Clique:ScanSpellbook()
    self:LevelDebug(2, "Clique:ScanSpellbok()")
    
    local tabs = GetNumSpellTabs()
    local name,texture,start,offset = GetSpellTabInfo(tabs)
    local numspells = start + offset
    
    self.spellbook = self:ClearTable(self.spellbook)
	self.spellbook.buffs = buff_lookup
    
    -- ace:print("Scanning " .. tabs .. " tabs for spells.")
    for i=1,numspells do
        local name,rank = GetSpellName(i, BOOKTYPE_SPELL)
		-- ace:print("** Scanning spell id: " .. i .. " found " .. name .. ".")
		local _,_,numrank = string.find(rank, L"RANK" .. " (%d+)")
		numrank = tonumber(numrank)
		
        if buff_lookup[name] or cure_lookup[name] then
            if numrank then
                self.spellbook[name] = numrank
            else
                self.spellbook[name] = true
            end
        end
        
        if dual_lookup[name] and numrank then
            local spell = string.format("%s(%s %d)", name, L"RANK", numrank)
            dual_lookup[spell] = true
        end
    end
end
</syntaxhighlight>
