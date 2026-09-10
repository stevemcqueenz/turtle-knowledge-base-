---
title: "API debugprofilestart"
url: "https://turtle-wow.fandom.com/wiki/API_debugprofilestart"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T09:50:27Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API debugprofilestart

starts a timer for profiling during debugging.

## Addon
Example from addon named SW Stats<syntaxhighlight lang="lua">
	if checkPerf then
		if decoderOnly then
			for i=1, totalRuns do
				SW_IntTblAscii85:encode(enc[i]);
				encStr[i] = table.concat(SW_IntTblAscii85.outBuff);
			end
			mem = gcinfo();
			debugprofilestart(); 
			for i=1, totalRuns do
				tmpTable, tmpSize = SW_IntTblAscii85:decode(encStr[i]);
			end
			ms = debugprofilestop();
			mem = gcinfo() - mem;
			SW_printStr(ms.." meminc:"..mem.." AmountOfInts:"..totalInts.." #Tables:"..totalRuns);
			
		else
			mem = gcinfo();
			debugprofilestart(); 
			for i=1, totalRuns do
				SW_IntTblAscii85:encode(enc[i]);
				tmpTable, tmpSize = SW_IntTblAscii85:decode(table.concat(SW_IntTblAscii85.outBuff));
			end
			ms = debugprofilestop();
			mem = gcinfo() - mem;
			SW_printStr(ms.." meminc:"..mem.." AmountOfInts:"..totalInts.." #Tables:"..totalRuns);
		end
</syntaxhighlight>Example from addon named OneView<syntaxhighlight lang="lua">
function OneView:BuildFrame()
	debugprofilestart()
	
	if not self.frame.bags[-1] then 
		self.frame.bags[-1] = CreateFrame("Frame", "OVBankBag", self.frame)
		self.frame.bags[-1]:SetID(-1)
		self.frame.bags[-1].size = 24
		for slot = 1, 24 do
			self.frame.bags[-1][slot] = CreateFrame("Button", self.frame.bags[-1]:GetName().."Item"..slot, self.frame.bags[-1], "OneViewItemButtonTemplate")
			self.frame.bags[-1][slot]:SetID(slot)
		end
	end
</syntaxhighlight>Example from addon named CensusPlus<syntaxhighlight lang="lua">
	--
	-- Has the user added any search criteria?
	--
	if ((guildKey ~= nil) or (raceKey ~= nil) or (classKey ~= nil) or (levelKey ~= nil)) then
		--
		-- Get totals for this criteria
		--
		g_AccumulateGuildTotals = false;
		CensusPlus_ForAllCharacters(realmName, factionGroup, raceKey, classKey, guildKey, levelKey, TotalsAccumulator);
		
		if( CensusPlus_EnableProfiling ) then
			CensusPlus_Msg( "PROFILE: Time to do calcs 1 " .. debugprofilestop() / 1000000000 );
			debugprofilestart();
		end
</syntaxhighlight>
