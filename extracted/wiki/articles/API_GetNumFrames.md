---
title: "API GetNumFrames"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumFrames"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T12:08:41Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumFrames

Get the current number of Frame (and derivative) objects

## Addon
Example from addon named Sprocket<syntaxhighlight lang="lua">
function TriggerDef.prototype:GetType()
	return self.type;
end

function TriggerDef.prototype:ToString()
	return string.format("<%s instance: %s>", tostring(self.class), tostring(self.triggerName))
end

function TriggerDef.prototype:GetTriggerName()
	return self.triggerName;
end

function TriggerDef.prototype:GetNumFrames()
	return table.getn( self.frames );
end
</syntaxhighlight>Example from addon named Sprocket<syntaxhighlight lang="lua">
	-- See if the frame we're over has a menu/trigger association
	while ( 1 ) do
		for index = 1, trigger:GetNumFrames() do
			frame = trigger:GetFrameByID( index );
			if ( frame:GetName() == hoverFrame:GetName() ) then
				menuName = frame:GetMenuName();
				self:SetActiveAction( frame );
				break;
			end
		end
</syntaxhighlight>Example from addon named Sprocket<syntaxhighlight lang="lua">
	-- Update the frames based on which buttons are using them
	for buttonID = 1, self:GetNumButtons() do
		button = self:GetButtonByID( buttonID )
		for frameID = 1, button:GetNumFrames() do
			frame = button:GetFrameByID( frameID )
			if ( not self.buttonFrames[frame:GetName()] ) then
				self:AddButtonFrame( frame:GetName() )
			end
			
			if ( self.buttonFrames[frame:GetName()] ) then
				self.buttonFrames[frame:GetName()].isDirty = false
				self.buttonFrames[frame:GetName()]:Show()
			end
		end
	end
</syntaxhighlight>
