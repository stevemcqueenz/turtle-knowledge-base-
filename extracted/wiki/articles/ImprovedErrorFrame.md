---
title: "ImprovedErrorFrame"
url: "https://turtle-wow.fandom.com/wiki/ImprovedErrorFrame"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-07T18:00:12Z"
fetched: "2026-09-10T07:39:00Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ImprovedErrorFrame

Display errors in scroll-able/selecting frame.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the ImprovedErrorFrame-main folder to ImprovedErrorFrame
# Restart the game

## Git Links
[**(Sebben7Sebben)**](https://github.com/Sebben7Sebben/ImprovedErrorFrame)

## Commands
<code>**/ief**</code> 
- Main command to set options for the Improved Error Frame.
**/ief notify**

- **ON**: Alerts are enabled for delay notifications.
- **OFF**: Alerts are disabled for delay notifications.

**/ief blink**

- **ON**: The button blinks when there are pending errors.
- **OFF**: The blinking of the button when there are pending errors is disabled.

**/ief count**

- **ON**: Displays the count of pending errors on the button.
- **OFF**: The count of pending errors is not displayed.

**/ief always**

- **ON**: The notification button is always shown, regardless of errors.
- **OFF**: The notification button is hidden when there are no errors.

**/ief sound**

- **ON**: A sound will play upon notification of errors.
- **OFF**: Sound notifications are disabled.

**/ief empty** 

- **ON**: The button graphic changes when blinking.
- **OFF**: The button graphic does not change with blinking.

**/ief debug** 

- **ON**: FrameXML verbose logging is enabled for debugging.
- **OFF**: FrameXML verbose logging is disabled.

**Click Functions**
# **ImprovedErrorFrame_Report_OnClick**:
1. * Hookable function for add-ons to react when the report button is clicked.
# **IEFMinimapButton Functions**:
1. * <code>IEFMinimapButton_OnMouseDown</code>: Handles button dragging.
1. * <code>IEFMinimapButton_OnMouseUp</code>: Handles button release, error display, and reset.
1. * <code>IEFMinimapButton_OnHide</code>: Resets moving status when the button is hidden.
**Status and Change Functions**
# **Change Functions**:
1. * <code>changeBlink</code>: Toggles blinking of the minimap button based on settings.
1. * <code>changeCount</code>: Updates the minimap button text based on the error count.
1. * <code>changeAlways</code>: Adjusts the visibility of the minimap button based on the <code>alwaysShow</code> setting.
# **Events Handling**:
1. * Handled system events, particularly for loading variables and settings, and for updating the UI.
**Other Functions**
# **Error Population**:
1. * <code>populateErrors</code>: Builds the error messages string to be displayed in the frame.
# **Update Status**:
1. * <code>updateStatus</code>: Toggles visibility and updates the minimap button based on the number of errors.
# **Count Errors**:
1. * <code>countErrors</code>: Counts the number of unviewed errors from the error message list.

## Preview
## Features
# **Minimap Button**:
1. * Shows a button on the minimap when errors are present.
1. * Flashes when errors are shown; hidden if no bugs.
1. * Button can be dragged (Shift + Left Click) and reset (Shift + Right Click).
# **Error Reporting**:
1. * Includes a report button that only appears if <code>ImprovedErrorFrame.displayReportButton</code> is set to true.
1. * Allows users to report errors directly.
# **Configurable Settings**:
1. * Display error messages immediately or on button click.
1. * Options to blink notification icon or turn off blinking.
1. * Display the count of errors on the button.
1. * Configurable option to always show the error button even when there are no errors.
1. * Option to disable sound notifications.
1. * Ability to have an empty button during flashing for clearer count reading.
1. * Verbose XML error logging.
# **Localization**:
1. * Support for German and French localizations.
# **Error Handling**:
1. * Improved handling of errors with detailed messages (including addon name, file name, line number).
1. * Status tracking for error messages (new, shown, viewed).
1. * Capability to keep an error message list with comprehensive data about each error instance.
