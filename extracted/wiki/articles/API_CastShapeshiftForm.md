---
title: "API CastShapeshiftForm"
url: "https://turtle-wow.fandom.com/wiki/API_CastShapeshiftForm"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-09T17:31:17Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CastShapeshiftForm

Casts Shapeshift on yourself. This is class dependant - not all classes have special abilities.
<syntaxhighlight lang="lua">
  CastShapeshiftForm(index);
</syntaxhighlight>
## Parameters
### Arguments
  - index**
   relates to the different forms:

  ; Druid
  * 1 = Bear/Dire Bear Form
  * 2 = Aquatic Form
  * 3 = Cat Form
  * 4 = Travel Form
  * 5 = Moonkin Form
  ; Rogue
  * 1 = Stealth
  ; Warrior
  * 1 = Battle Stance
  * 2 = Defensive Stance
  * 3 = Beserker Stance

### Returns
   **nil**

## Example
<syntaxhighlight lang="lua">
  CastShapeshiftForm(1);
</syntaxhighlight>
### Result
Shapeshifts caster into Bear Form.

## Note
Note, casting the spell again changes back to caster form. So, for instance;
<syntaxhighlight lang="lua">
  if (GetNumShapeshiftForms()==1) then CastShapeshiftForm(1);end;
</syntaxhighlight>
In this case, the script checks if you're in Bear/Dire Bear form, and if so, casts the spell to change you back to Caster form. It has the same restrictions as other casting spells in that the trigger event needs to involve a keystroke or mouse click.

To use a particular shape in a **macro** and avoiding error messages, use:
<syntaxhighlight lang="lua">
  /script icon, name, active = GetShapeshiftFormInfo(**index**);if (active==1) then CastShapeshiftForm(**index**);end;
</syntaxhighlight>
where **index** is the number of the shape as given above.

## Example
This Example shows how to return to your human form our of any other form.
<syntaxhighlight lang="lua">
  for i=1, GetNumShapeshiftForms() do
     _, name, active = GetShapeshiftFormInfo(i);
     if( active ~= nil ) then
        DEFAULT_CHAT_FRAME:AddMessage("SQS: leaving '"..name.."'");
        CastShapeshiftForm(i)
        break;
     end
  end
</syntaxhighlight>
----

## Macros
Aquatic / Travel Form<syntaxhighlight lang="lua">
/run for i = 2, GetNumShapeshiftForms(), 2 do local _, _, active = GetShapeshiftFormInfo(i) if not active then CastShapeshiftForm(i) end end UIErrorsFrame:Clear()
</syntaxhighlight>Vanish / Spammable stealth<syntaxhighlight lang="lua">
/run if UnitAffectingCombat("player") then CastSpellByName("Vanish")end local _, _, active = GetShapeshiftFormInfo(1) if not active then CastShapeshiftForm(1)end
</syntaxhighlight>Shift out of any Druid form<syntaxhighlight lang="lua">
/run for i=1, GetNumShapeshiftForms() do if ({GetShapeshiftFormInfo(i)})[3] then CastShapeshiftForm(i) end end
</syntaxhighlight>

## Addon
Example from addon named DoctorDruid<syntaxhighlight lang="lua">
function DD__SHAPESHIFT(ddform)
	if not ddform then ddform = 0; end
	local shapeshifts = GetNumShapeshiftForms();
	if ddform>shapeshifts then return; end
	local formallowed, icon, name, active, castable;
	for i = 1,shapeshifts do
		icon, name, active, castable = GetShapeshiftFormInfo(i);

		if active==1 then
			-- If the current shape matches the selected shape, nothing will be done.
			-- And if one form is active while you want another, you transform back into the caster form.
			if ddform~=i then CastShapeshiftForm(i); return true; end
			return false;
		end

		-- In all other cases, you are in caster form. Here, it is determined whether the desired form is allowed.
		if ddform==i and castable then formallowed = true; end

	end
	if ddform>0 and formallowed then CastShapeshiftForm(ddform); return true; end
	return false;
end
</syntaxhighlight>
