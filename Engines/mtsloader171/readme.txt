MTS loader v1.71 written by Snake (liquidsnake@sapo.pt)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;                                                                                                            ;;;
;;; After unzipped, type /load -rs <path to mts loader .mrc file> on mirc to load this addon into it, and type ;;;
;;; /mts to display the main dialog box. You can also type /mtshelp to learn more about this addon             ;;;
;;;                                                                                                            ;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

:::::::::::::::: DISCLAIMER :::;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
:::                                                                                                           :::
::: You don't have to ask my permission to use this addon on your mIRC script or even modify it. You are free :::
::: to do whatever you want to it. You don't even have to give me credits for it, despite the fact that I do  :::
::: like to get credits for what I do. You are also welcome to report bugs and give sugestions. However, I    :::
::: don't have to reply to any questions or give any help concerning this addon, or even mIRC scripting at    :::
::: all. If I do reply to any email, chat or whatever means you use to contact me, you are just lucky.        :::
:::                                                                                                           :::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::: Whats new (v1.71) :::

 - Self text will no longer get parsed when containing MTS tags
 - Fixed bug that would append a meaningless line to the end of whois output 
 - Fixed bug that wouldn't display the full server info at the whois output
 - Fixed bug that would make the timestamp go back to the one of the current theme when restarting
 - raw 332 no longer has duplicated code
 - Raws output will no longer be blocked if no format is given by the current theme
 - Theme previews will be generated in its fullness even when no output is set to any given event used in the preview

::: Version 1.70 :::

 - raw 377 and 378 events are know assigned to MOTD output
 - raw 315 and 378 events no longer have duplicated code
 - Fixed signon time bug when whois output is handled by a single alias
 - Added support for assigning colors to owners (~) and admins (&) mode
 - Theme loader no longer blocks sound requests
 - Fixed bug that would override option "alt + o > sounds > requests > send '!nick file' as private message"
 - Fixed bug that would override option "mIRC Options->Sounds->Beep on"
 - Fixed bug that would override option to choose if colors are applied only on messages or nicklist, at "alt + b > colors > add/edit"
 - Added option to make an accurate preview, by loading the rgbcolors into mIRC (at the cost of generating the previews slowerly)
 - Fixed channel modes output but that would only display the modes and hide their parameters (example: the output of "+rntk pass" would only be "+rntk")

::: Version 1.67 :::

- Added support to the /action command
- Fixed bug that wouldn't request the whois info when option at alt + b > control > notify > edit >
 "perform /whois" was checked
- Theme engine will now check if the highlight sounds exists before it attempts to play it, in order to
  stop an error message to appear
- Fixed bug that wouldn't display anything when the user performed a /me command in a query
- When unloading themes, the engine will first check if the script file of the current theme is loaded before
  it attempts to unload it, in order to prevent an error message to appear

::: Version 1.66 :::

- Added support to alt + b > notify tab > options
- Added support to alt + o > IRC > Show in active
- Fixed /msg command bug that displayed my your own nickname
- When loadding/unloading themes, everything will be removed from alt + b > colors to prevent crashes
- Raw messages are now displayed at the status window instead of the active window

::: Version 1.65 :::

- Fixed unload-load bug
- Fixed /mtsunload error when no theme is loaded
- Updated to mIRC 6.16

::: Version 1.64 :::

- Fixed bug that didn't let users select and save a diferent font size after loading a theme
- Events/messages/raws that are displayed in the active window will be redirected to the status window
  if the connection ID that received them isn't the active connection at a given moment
- Added support for name colors. This should be implemented since the first release, but I missread this
  requirement from the MTS specification draft. Sorry for the inconvinience that this issue might have caused
- Fixed bug that switched query's background images for channel's background images
- Preview implementation changed (again). The previewer will now strip color control codes from the text.
  Because of this, there will never be a preview that matchs a theme with 100% accuracy. However, the previews
  will be generated faster, and will no longer spawn the usual bug that messed up all colors
- Themes are now unloaded faster.
- Updated to mIRC 6.15. This is important, because if you try to unload the current theme under a previous
  version of mIRC, you'll get a nasty surprise.

::: Version 1.63 :::

- Fixed /drawreplace error (so I hope)
- Fixed issue concerning the parsing of multiple commands in a !scripted event

::: Version 1.62 :::

- DNS event bug fixed
- Load/unload bug fixed
- /describe command bug fixed;
- Added support for /qmsg and /qme commands
- mIRC's path will be removed from loaded theme files

::: Version 1.6 :::

- All windows are minimized, not just the windows of the active connection
- Already supports Options -> IRC -> Events options
- Already able to blink when a channel/query message arrives, on options - IRC - options
- No more mixing the messages with the nickname on highlight
- Changed algorithm that switch colors on theme preview (It may not work properly,but I won't explain why)
- /dns xxx.xxx.xxx.xxx behaves diferently, but may not work 100% right on all themes
- /me and /msg bug concerning %::nick variable fixed
- /me, /describe, /msg, /say, /notice, /ctcp and /ctcpreply bug concerning %::target fixed
- Updated to mIRC 6.12 (Don't even dare to try this addon in a previous version, you'll regret that)

::: Version 1.5 :::

- Main dialog aligned correctly;
- Several bugs fixed (DCC halting, messed up colors on preview, timestamp, /describre cmd, etc...);
- Added a popup menu to the themes list (works with popups.dll);
- It now uses hash tables instead of globar variables;
- All generated previews will be saved for later use (you can erase them all);
- The preview now supports events begining by !script;
- When opening the main dialog, it will be selected the theme corresponding to the last preview generated;
- Adapted to mIRC 6.03 and 6.1