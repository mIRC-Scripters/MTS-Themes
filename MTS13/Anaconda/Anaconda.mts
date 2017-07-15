[mts]
NAME AnacønÐa
VERSION 2.1
MTSVERSION 1.3
AUTHOR SolidSnake
WEBSITE http://anaconda.pt.vu
EMAIL solidsnake@netcabo.pt
SCRIPT Anaconda.mrc
DESCRIPTION MTS theme dedicated to AnacønÐa NS script.

COLORs 1,15,15,14,14,0,0,15,15,15,15,15,0,0,15,0,15,15,15,14,15,01,0,1,0,15,14,01
BASECOLORS 00,04,14,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 210,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLINEIRCOP 04
CLINEOWNER 04
CLINEOP 15
CLINEHOP 15
CLINEVOICE 14
CLINEME 04
CLINEFRIEND 03
CLINEENEMY 05
CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Tahoma,11
FONTQUERY Tahoma,11
FONTCHAN Tahoma,11

IMAGECHAN photo pics\default\anaconda2.jpg
IMAGEQUERY photo pics\default\anaconda2.jpg
IMAGESTATUS center pics\default\anaconda1.jpg
IMAGEMIRC tile pics\default\back1.jpg

PREFIX <c2>›<c3>›
PARENTEXT <c3>(<text><c3>)

TIMESTAMP ON
TIMESTAMPFORMAT <c3>(<c4>HH:nn<c3>)

LOAD <pre> AnacønÐa MTS theme loaded
UNLOAD <pre> AnacønÐa MTS theme unloaded

JOINSELF <c2>» You joined: <chan>
REJOIN <c2>» You rejoined: <chan>
JOIN <c2>» Joins: <nick> <c2>(<address><c2>)
PART <c2>« Parts: <nick> <c2>(<address><c2>) <parentext>
QUIT <c2>«« Quits: <nick> <c2>(<address><c2>) <parentext>
MODEUSER <pre> Usermode: <modes>
MODE <pre> Mode change: <modes> by <nick>
KICKSELF <c2>«« ! You have been kicked from <chan> by <nick> <parentext>
KICK <c2>«« ! Kicked <knick> from <chan> by <nick> <parentext>
NICKSELF <pre> Nick change: <nick> ›› <newnick>
NICK <pre> Nick change: <nick> ›› <newnick>
TOPIC <pre> Topic change: <text> <c2>(by <nick><c2>)
INVITE <c2>! » Invite: <nick> invites you to join <chan>
TEXTQUERYSELF <c3>· <me> <c3>· <text>
TEXTMSGSELF <c3> » Msg (<nick>): <text>
TEXTCHANSELF <c3>· <cmode><me> <c3>· <text>
ACTIONQUERYSELF ¤ <me> <text>
ACTIONCHANSELF ¤ <cmode><me> <text>
TEXTQUERY <c1>· <nick> <c1>· <text>
TEXTMSG <c1>· <nick> <c1>· <text>
TEXTCHAN <c1>· <cmode><nick> <c1>· <text>
ACTIONQUERY ¤ <nick> <text>
ACTIONCHAN ¤ <cmode><nick> <text>
NOTICESELF <c2>»<c3>» <c3>(<nick><c3>): <text>
NOTICECHANSELF <c2>»<c3>» <c3>(<chan><c3>): <text>
NOTICE <c2>«<c3>« <c3>(<nick><c3>): <text>
NOTICECHAN <c2>«<c3>« <c3>(<nick>/<chan><c3>): <text>
CTCPSELF !script %:echo %::pre CTCP  $+ $upper(%::ctcp) $+  to %::nick $iif(%::text,%::parentext)
CTCP !script %:echo %::pre CTCP  $+ $upper(%::ctcp) $+  from %::nick $iif(%::text,%::parentext)
CTCPCHANSELF !script %:echo %::pre CTCP  $+ $upper(%::ctcp) $+  to %::chan $iif(%::text,%::parentext)
CTCPCHAN !script %:echo %::pre CTCP  $+ $upper(%::ctcp) $+  from %::nick on %::chan $iif(%::text,%::parentext)
CTCPREPLYSELF !script %:echo %::pre CTCP reply  $+ $upper(%::ctcp) $+  to %::nick $iif(%::text,%::parentext)
CTCPREPLY !script %:echo %::pre CTCP reply  $+ $upper(%::ctcp) $+  from %::nick $iif(%::text,%::parentext)
SERVERERROR <c2>(<server><c2>): <text>
WALLOPS <c2>¤<nick><c2>¤: <text>
NOTICESERVER <c3>(<server><c3>): <text>
NOTIFY  <pre> Notify: <nick> <c2>(<address><c2>) - <text>
UNOTIFY  <pre> Unotify: <nick> <c2>(<address><c2>) - <text>
DNS <pre> DNS: <nick>
DNSRESOLVE !script %:echo %::pre DNS Resolve:  $+ %::naddress $+  -  $+ %::raddress $+  $iif(%::nick,-  $+ $ifmatch $+ )
DNSERROR <pre> DNS Error: <address>

RAW.251 !script anac.raw 251
RAW.252  - Operators: <value>
RAW.253  - Unknown: <value>
RAW.254  - Channels: <value>
RAW.255  - Users: <users> <c2>(on <value> servers<c2>)
RAW.265  - Local Users: <users> <c2>(max: <value><c2>)
RAW.266 !script anac.raw 266
RAW.375 !script anac.raw 375
RAW.372  <text>
RAW.376 !script anac.raw 376
RAW.324 <pre> Modes: <modes>
RAW.329 !script %:echo %::pre Creation: $anac.time($ctime(%::text))
RAW.332 <pre> Topic: <text>
RAW.333 <pre> Set by <nick> at <text>
RAW.353 <pre> Names for <chan>: <text>
Raw.366 !script
RAW.352 !script %:echo %::pre %::cmode $+ %::nick $chr(183) %::address $chr(183) %::realname $chr(183) %::wserver $iif(%::isoper == is,$chr(183) Operator) $iif(%::away == G,$chr(183) Away) $chr(183) %::value
RAW.315 !script
RAW.311 !script anac.raw 311
RAW.314 !script anac.raw 314
RAW.312 <c2> › Server: <wserver> <c2> (<serverinfo><c2>)
RAW.307 !script %:echo  $+ %::c2 › Status: is $iif(%::isregd != is,not) a registered nick
RAW.330 !script %:echo  $+ %::c2 › Login: $gettok(%::text,1,32)
RAW.319 !script anac.raw 319
RAW.308 <c2> › Administrator: Yes
RAW.313 !script %:echo  $+ %::c2 › Operator: $iif(%::isoper == is,Yes,No)  $+ %::c2 $+ ( $+ %::operline $+  $+ %::c2 $+ )
RAW.309 <c2> › CSop: Yes
RAW.310 <c2> › Helper: Yes
RAW.301 <c2> › Away: <text>
RAW.378 <c2> › <text>
RAW.379 <c2> › <text>
RAW.317 !script %:echo  $+ %::c2 › Idle: $anac.dur(%::idletime)  $+ %::c2 $+ (Signon: $anac.time($ctime(%::signontime)) $+  $+ %::c2 $+ )
RAW.318 !script %:echo [/Whois]
RAW.369 !script %:echo [/Whowas]
RAW.421 !script %:echo %::pre $anac.err Unknown command ( $+ %::value $+ )
RAW.461 !script %:echo %::pre $anac.err Need more parameters ( $+ %::text $+ )
RAW.472 !script %:echo %::pre $anac.err Unknown character ( $+ %::text $+ )
RAW.302 !script %:echo %::pre Userhost:  $+ %::c2 $+ ( $+ %::nick $+  $+ %::c2 $+ )  $+ %::c2 $+ ( $+ %::address $+  $+ %::c2 $+ ) $iif(* isin %::value,(Operator)) $iif(- isin %::value,(Away))
RAW.341 <pre> Invite: <nick> invited to join <chan>
RAW.306 <pre> <c2>(Away) You are marked as being away
RAW.305 <pre> <c2>(Away) You are no longer away
RAW.465 !script %:echo %::pre $anac.err Cannot connect to server (you are banned)
RAW.438 !script %:echo %::pre $anac.err Nick changed too fast, please wait a while and try again ( $+ %::nick $+ )
RAW.439 !script %:echo %::pre $anac.err Target changed too fast, please wait a while and try again ( $+ %::value $+ )
RAW.401 !script %:echo %::pre $anac.err There is no such nick ( $+ %::nick $+ )
RAW.406 !script %:echo %::pre $anac.err There was no such nick ( $+ %::nick $+ )
RAW.403 !script %:echo %::pre $anac.err There is no such channel ( $+ %::chan $+ )
RAW.436 !script %:echo %::pre $anac.err Nick collision with %::nick
RAW.432 !script %:echo %::pre $anac.err Nick %::nick is an invalid nick
RAW.433 !script %:echo %::pre $anac.err Nick %::nick is already in use
RAW.443 !script %:echo %::pre $anac.err %::nick is already on %::chan
RAW.441 !script %:echo %::pre $anac.err %::nick is not on %::chan
RAW.477 !script %:echo %::pre $anac.err You need to register and/or identify nick to join %::chan
RAW.442 !script %:echo %::pre $anac.err You are not on %::chan
RAW.482 !script %:echo %::pre $anac.err You are not an channel operator on %::chan
RAW.404 !script %:echo %::pre $anac.err Cannot send to channel ( $+ %::chan $+ )
RAW.405 !script %:echo %::pre $anac.err Cannot join %::chan (too many channels)
RAW.474 !script %:echo %::pre $anac.err Cannot join %::chan (you are banned)
RAW.473 !script %:echo %::pre $anac.err Cannot join %::chan (invite required)
RAW.471 !script %:echo %::pre $anac.err Cannot join %::chan (channel is full)
RAW.467 !script %:echo %::pre $anac.err Cannot join %::chan (key required)
RAW.475 !script %:echo %::pre $anac.err Cannot join %::chan (incorrect key)
RAW.478 !script %:echo %::pre $anac.err Cannot ban on %::chan (banlist is full)
RAW.OTHER <pre> <text>

SCHEME1 Sckull
SCHEME2 Rose
SCHEME3 Cyborg
SCHEME4 Sword
SCHEME5 Snake

[scheme1]
COLORs 0,14,1,1,14,14,1,14,14,14,14,14,14,14,14,1,14,14,14,1,14,0,1,0,14,1,1,0
BASECOLORS 15,10,01,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,170,120 0,255,255 0,0,255 255,0,255 100,100,100 208,208,208

CLINEIRCOP 02
CLINEOWNER 02
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEME 10
CLINEFRIEND 03
CLINEENEMY 04

IMAGECHAN photo pics\sckull\sckull.jpg
IMAGEQUERY photo pics\sckull\sckull.jpg
IMAGESTATUS photo pics\sckull\sckull.jpg
IMAGEMIRC tile pics\default\back2.jpg

[scheme2]
COLORs 0,14,1,1,14,14,1,14,14,14,14,14,14,14,14,1,14,14,14,1,14,0,1,0,14,1,1,0
BASECOLORS 15,07,01,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,95,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 100,100,100 208,208,208

CLINEIRCOP 02
CLINEOWNER 02
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEME 07
CLINEFRIEND 03
CLINEENEMY 04

IMAGECHAN photo pics\rose\rose.jpg
IMAGEQUERY photo pics\rose\rose.jpg
IMAGESTATUS photo pics\rose\rose.jpg
IMAGEMIRC tile pics\default\back2.jpg

[scheme3]
COLORs 0,14,1,1,14,14,1,14,14,14,14,14,14,14,14,1,14,14,14,1,14,0,1,0,14,1,1,0
BASECOLORS 15,12,01,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,95,0 255,255,0 0,255,0 0,144,144 0,255,255 000,80,200 255,0,255 100,100,100 208,208,208

CLINEIRCOP 02
CLINEOWNER 02
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEME 12
CLINEFRIEND 03
CLINEENEMY 04

IMAGECHAN photo pics\cyborg\cyborg.jpg
IMAGEQUERY photo pics\cyborg\cyborg.jpg
IMAGESTATUS photo pics\cyborg\cyborg.jpg
IMAGEMIRC tile pics\default\back2.jpg

[scheme4]
COLORs 0,14,1,1,14,14,1,14,14,14,14,14,14,14,14,1,14,14,14,1,14,0,1,0,14,1,1,0
BASECOLORS 15,04,01,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 210,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLINEIRCOP 06
CLINEOWNER 06
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEME 04
CLINEFRIEND 07
CLINEENEMY 05

IMAGECHAN photo pics\sword\sword.jpg
IMAGEQUERY photo pics\sword\sword.jpg
IMAGESTATUS photo pics\sword\sword.jpg
IMAGEMIRC tile pics\default\back2.jpg

[scheme5]
BASECOLORS 00,12,14,15
RGBCOLORS 255,255,255 0,0,0 0,0,255 0,144,0 210,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,80,255 255,0,255 128,128,128 208,208,208

CLINEIRCOP 02
CLINEOWNER 02
CLINEOP 15
CLINEHOP 15
CLINEVOICE 15
CLINEME 12
CLINEFRIEND 02
CLINEENEMY 04

IMAGECHAN center pics\snake\chan.jpg
IMAGEQUERY center pics\snake\chan.jpg
IMAGESTATUS center pics\snake\status.jpg