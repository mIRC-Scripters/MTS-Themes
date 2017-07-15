Kte v1.5
--------------------------------------------------- - -  -    -

MTS Home page: http://www.mircscripts.org/mts.php

Features:
- Compatible with MTS 1.0 and 1.1 themes
- Works on mIRC 6.01 and 6.02
- Supports most MTS features, like events, schemes, images,
  nicklist coloring and fonts
- Precompiles themes (slow loading, fast theming)
- Theme preview
- vPak, gzip and .zip support
- Your settings are restored if you stop using themes
- You define what you want to be applied

To be available in next releases:
- Sound support


Loading Kte
--------------------------------------------------- - -  -    -
  The first step is loading Kte. It's something simple, but
remember you must use the right mIRC version.

  If Kte is on the same directory as mIRC, you can use this:
    /load -rs kte.mrc

  If it's on a subdirectory on mIRC's directory, you can use a
relative path, like (supposing it's in 'Kte'):
    /load -rs kte\kte.mrc

  If it's on another directory, you'll need to specify a full
path. If it has spaces, surround it with quotes:
    /load -rs c:\mystuff\kte.mrc

*** To update, replace the files in the Kte directory with
    the new ones. If you are updating from Kte 1.0, you should
    do it while mIRC is NOT running. If you are updating from
    another version, you can just /load the script file again if
    mIRC is running. After that, you should reload the current
    theme (if any) in order to update your compiled script file.


Loading a theme
--------------------------------------------------- - -  -    -
  To load a theme in Kte, you may use /theme.load or /kte_load
(both do the same). For example, to load the theme called
"Sample" (which should be in your themes directory if the path
isn't specified), use the syntax '/theme.load Sample'.
  Kte supports simple MTS themes and vPak archives. If you
specify a path for nGZIPn.dll, it will also support gzipped
versions of the mentioned formats. As result, the supported
extensions will be .mts, .mts.gz, .vpk and .vpk.gz. For zipped
files support, you must have mUnzip, and specify its path on the
Settings dialog.
  If you prefer, you may open a theme loading dialog by typing
just '/theme.load'.
  Some themes include schemes, which are small variations to
their appearance. To use, for example, the 5th scheme from the
Sample theme, use '/theme.load -s5 Sample'.
  You can define what you want and what you don't want to be
loaded on the load dialog. You can't, however, use this to mix
settings from different themes.
  Theme loading in Kte may take a little long, since it compiles
the theme into a scripting file for best performance.


Changing schemes
--------------------------------------------------- - -  -    -
  If you want to use a different scheme from the current theme,
you may use /theme.scheme or /kte_scheme. It's a bit faster than
using /theme.load again, as /theme.scheme skips some steps of
loading a whole new theme.
  To list all the schemes from the current theme, type just
'/theme.scheme'.
  To load a new scheme, you may specify its number (for example,
to load the 3rd scheme, use '/theme.scheme 3') or its name (to
load the scheme named 'Blue', type '/theme.scheme blue').
  If you want to load the default scheme, you may use
'/theme.scheme -d'.


Unloading a theme
--------------------------------------------------- - -  -    -
  When you load a theme, the previous one is automatically
unloaded; however, if you don't want to use any theme, type
'/theme.unload' or '/kte_unload'.
  Kte restores your colors, RGB values, nicklist colors, fonts
and timestamp settings when you use /theme.unload. However, due
to a limitation in mIRC, some cases of nicklist coloring can't be
restored correctly: if you have one or more color settings which
refer to the same nickname (does not apply to "Any nick"), only
one of them will be restored. Also, font recovery is not
complete: misc windows, like Notify and URL List, use the same
font as the status window when restored (which is enough for most
users).
  Anyway, I hope the current restoring helps you with most (if
not all) of the problems of quitting using any themes. If you
would like to see some improvements, please contact me.


Settings
--------------------------------------------------- - -  -    -
  To change engine settings, type '/theme.load', and click the
File\Settings menu.
  You can, for example, set up the default path for your themes
folder, clear your cache directory, or even hide the /names list
you get when joining a channel.


Misc notes
--------------------------------------------------- - -  -    -
  You can get nGZIPn and mUnzip on http://www.mircscripts.org/
(DLLs section), and several themes on the Themes section.

  If you want to quit using Kte, just type '/unload -rs kte.mrc'.
If you are using a theme, you'll be asked if you want to unload
it first.

  Kte reads where some events should be displayed from mirc.ini
and caches the information. In case you have changed something
and wants to force Kte to read mirc.ini again, you may use
'/kte_refresh'.

  If you want to use Kte in your script, feel free to change
Kte-Dyn.dat (the source of the dynamic script file) or Kte.mrc to
fit your needs, as long as you give me credits. You can also use
two small functions which may ease information output: /kte_echo
and /kte_error.
  The syntax is simple: '/kte_echo <window> <text>', where
<window> is the window where you want to echo (can be -a for
active window or -s for status window), and <text> is the text
you want to output. It's a shortcut for using the Echo MTS event.
/kte_error works the same way, but for the Error event.
  If you're writing an add-on, I wouldn't recommend using these
aliases, though, or your add-on will only work if the user has
Kte.


Theme problems
--------------------------------------------------- - -  -    -
  These are common theme problems:
  - When you preview a theme, it echoes something to the status
    window. This is because the theme is using /echo directly
    instead of %:echo, defined by the standard, and needs fixing.
  - Kte simply says "invalid theme file". Possible causes are
    that the theme doesn't have a Name line, doesn't define the
    version of the MTS standard it's made for (MTSVersion line)
    or defines it as something different than 1.0 or 1.1 (there
    are a few themes still based on early 0.9x standards).
  - On some events that you call, like when you send a CTCP or
    a notice, some themes show your nickname instead of the
    target's nickname. This is because the theme is using <nick>
    where it should use <target>. If you have knowledge of the
    themes format, you can easily fix that on the .mts file.
    Anyway, authors should be contacted to fix their themes.

  In any cases, you should check if there isn't a newer version
of the theme available.


Version history
--------------------------------------------------- - -  -    -
1.0 - First public release.
1.1 - Added more information to Readme.
    - Fixed bugs related to:
      - Events: kick, /names, part, /whois
      - General: scheme loading, theme unloading, loading
        packed/gzipped themes, loading themes with background
        pictures.
      - Kte on directories containing spaces.
    - Caching improvement:
      - Compiled themes are now cached.
      - Each different scheme in a theme will have its own
        cached bitmap now.
    - New options:
      - It's now possible to hide some messages and events that
        appear when you're connecting to a server or joining a
        channel.
      - You can set what you want to be cached now.
      - Now you can skip some stuff from being applied while
        loading themes.
    - Changed the way the preview works. There won't be any
      problems related to previewing themes with background
      pictures anymore.
    - Kte will perform some cleanup now when unloaded.
    - CTCP replies are now echoed to the Status window, like
      mIRC does by default.
    - Settings restoration now takes your timestamp back.
    - Added an Edit command to the File menu in the loading
      dialog. If you have KThm (K Theme Editor) loaded, it will
      be used for editing. If not, Notepad will be called.
    - Some minor changes.
1.2 - JoinSelf is now supported.
    - Fixed problem with themes which don't use a Prefix line.
    - Fixed problems related to:
      - Events: Join
      - Timestamp: %::timestamp, base colors on timestamps.
    - Added /kte.* commands, which do just the same as their
      /theme.* counterparts.
    - Kte now reads mirc.ini to determine the target of the
      events. This includes the "Show in active" group in mIRC
      Options and the Events settings for channels. To force a
      refresh, use '/kte_refresh' (this is the first Kte-
      specific command, by the way).
    - Improved how the Load event is displayed.
    - Added a Font Replacement section to the options dialog.
      If you don't have IBMPC or GwdTE_437 installed, Kte will
      automatically set up replacements for them with Terminal.
      If you have Microsoft Sans Serif installed, it will be
      set as a replacement for MS Sans Serif.
    - Kte.dll now has a few more built-in functions.
      Previeweing themes became much faster.
    - Numerous minor fixes.
1.3 - DCC Chat connections are themed now.
      Kte won't theme DCC Chats if you have more than one chat
      with the same person, to avoid conflicts and problems.
    - Kte now fully works on mIRC 6.0 and 6.01 (but it's still
      compatible with mIRC 5.91).
    - Fixed %::cmode in events.
    - Improved how numeric replies (raws) are handled.
    - In mIRC 6.01, Kte will detect the "Show Away in active"
      option.
    - Fixed (hopefully) preview not working for some people.
    - Kte should work properly now with fserves.
    - Several, really numerous other bugfixes.
1.31 (Minor, mostly bugfix release)
    - This may be the last release of Kte that will be
      compatible with mIRC 5.91.
    - Hopefully, the bug that showed wrong channel names and
      nicknames has been fixed.
    - Improved Kte.dll: much smaller, and the preview bug
      should be gone forever.
    - Got rid of the /me bug on DCCs.
    - A few other issues fixed here or there.
1.4 - mIRC 6.01 is required now.
    - Renamed all /kte.* commands to /kte_*. Please change any
      references to them, as /kte.* won't be supported in future
      releases.
    - Added zipped themes support (mUnzip is required)
    - Added %::parentext to CTCP-related events
    - Channel and query backgrounds should now always be
      applied.
    - Fixed a few display bugs on the main dialog
    - Kte now uses %:comments instead of %:comment, as the
      standard says.
    - The bug that showed wrong channel names and nicknames is
      gone for good this time (I hope).
    - Several other reported bugs fixed.
1.5 - Compatible with mIRC 6.01 and 6.02.
    - Added more information to this file: made some aspects
      clearer, added how to load Kte.
    - Several internal changes, again:
      - New kte-dyn system (faster, but more complicated
        to change).
      - More corrections in problems with background pictures.
      - Once more, numerous minor bugs were fixed.
    - Preview files are now saved in .png format if you are
      using True Color (24-bit) or Full Color (32-bit) color
      settings. As the .png saver still has issues with other
      color depths, .bmp is used on them instead.
    - There are now two previews: the standard one and a
      bigger one, that pops up on a separate window.
    - Added a "Change scheme" menu item. Can also be used as
      a good example of how to read information from the
      current theme from any other script.


Author
--------------------------------------------------- - -  -    -
Nickname: Kamek
Channels: #IRCzone on BRASnet (irc.brasnet.org)
          #mircscripts.org on undernet (eu.undernet.org)
Contact:  talk to me on IRC or send me a private message
          on mircscripts.org.


Thanks
--------------------------------------------------- - -  -    -
Without these people, Kte wouldn't be the same...

mIRC creator: Khaled Mardam-Bey
They're cool: crazy2k, Dark_Greg, Eric^^, Tig0ti, outbreak
Bug trackers: blue-elf, Ymar
Oh, and also: all the other people who reported bugs
Annoying ppl: fubar, nacitar, oracel (kidding)
vPak support: Variant (vPak addon)
gzip support: Necroman (nGZIPn.dll)
.zip support: Info-ZIP (base for mUnzip.dll)
Numeric info: pai (Numerics reference: http://www.pairc.com/)
Compiler boy: tabo
Hosting this: mircscripts.org
Of course...: you, for using it :)
