[mts]
NAME Blue
AUTHOR Tig0ti
EMAIL tig0ti@fractalscript.com
DESCRIPTION Blue theme by Prisoner, ported to MTS by Tig0ti and Prisoner.
WEBSITE http://fractalscript.com
MTSVERSION 1.1
VERSION 3.5
SCRIPT blue.mrc

BASECOLORS 10,10,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 91,173,246 46,150,243 117,186,249 91,173,246 7,123,228 160,208,252 128,128,128 208,208,208
COLORS  1,10,10,11,11,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,1,0,1,0,15

IMAGEBUTTONS bluebuttons.bmp

CLINEOP 13
CLINEHOP 13
CLINEVOICE 13
CLINEREGULAR 13
CLINEOWNER 13
CLINEENEMY 11
CLINEFRIEND 10
CLINEME 10

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11

PREFIX  <c4>·09 ·
PARENTEXT <c4>: [<c3> <text> <c4>]
TIMESTAMP on
TIMESTAMPFORMAT <c4>[11 HH:nn:ss <c4>]

LOAD !script blue.start
JOINSELF <pre> 09Joined<c4> :<c2> <chan>
JOIN <pre> 09Joins <c4>:<c2> <nick> <c4>[<c3> <address> <c4>]
PART <pre> 09Parts <c4>:<c2> <nick> <c4>[ <c3><address> <c4>] <parentext>
QUIT !script %:echo %::pre 09Quits $+ %::c4 : $+ %::c2 $+  %::nick  $+ %::c4 $+ [ $+ %::c3  $+ %::address  $+ %::c4 $+ ] $iif(%::text && %::text != Quit:, $+ %::c4 $+ : [ $+ %::c3 $gettok(%::text,$iif(Quit: * iswm %::text,2-,1-),32)  $+ %::c4 $+ ]) $+  %:comments
KICK <pre> 09Kicks <c4>:<c2> <knick> <c1>was kicked from<c1> <chan> <c1>by <c4>[<c3> <nick> <c4>] <parentext>
KICKSELF <pre> 09Kicks <c4>: <c2>you <c1>were kicked from<c1> <chan> <c1>by <c4>[<c3> <nick> <c4>] <parentext>
MODE !script %:echo %::pre 09ChanMode $+ %::c4 : $+ %::c2 $+  %::nick  $+ %::c1 $+ sets mode $+ %::c4 [ $+ %::c3 $+  $gettok(%::modes,1,32)  $+ %::c4 $+ ] $+ %::c3 $gettok(%::modes,2-,32) $+  %:comments
MODEUSER <pre> 09UserMode <c4>: <c2><modes>
TOPIC <pre> 09Topic <c4>:<c1> set by <c2><nick> <c4>:<c3> <text>
INVITE <pre> 09Invite <c4>: <c1>to <c2><chan> <c1>by <c4>[ <c3><nick> <c4>] 
NICK <pre> 09Nick <c4>:<c2> <nick> <c4>: [<c3> <newnick> <c4>]
NICKSELF <pre> 09Nick <c4>:<c2> <nick> <c4>: [<c3> <newnick> <c4>]
TEXTCHAN  <c4>[08 <cmode><nick> <c4>]<c3> <text>
TEXTQUERY  <c4>[08 <nick> <c4>]<c3> <text>
TEXTCHANSELF  <c4>[<c3> <cmode><me> <c4>]11 <text>
TEXTQUERYSELF  <c4>[<c3> <me> <c4>]11 <text>
TEXTMSG  <c4>[08 <nick> <c4>]<c3> <text>
TEXTMSGSELF <pre> 11/msg <c4>[ <c3><target><c4> ] :08 <text>
SERVERERROR <pre> 09Error <c4>:<c1> <text>
REJOIN <pre> 11Attempting<c1> to rejoin <c2><chan>...
WALLOP  <c4>[08 <nick> <c4>]<c3> <text>
DNSERROR !script %:echo %::pre 08Failed $+ %::c1 to resolve $+ %::c2 $iif(!%::address,%::nick  $+ %::c4 $+ : [ $+ %::c3 no such user $+ %::c4 ],$iif(!%::nick,%::address,%::nick) $+ ) $+  %:comments
DNSRESOLVE !script %:echo %::pre 09Resolved $+ %::c4 : $+ %::c2 $iif(!%::nick,$iif(%::iaddress == %::raddress,%::naddress,%::iaddress) $+ ,%::nick  $+ %::c4 $+ [ $+ %::c3 $iif(%::iaddress == %::raddress,%::naddress,%::iaddress)  $+ %::c4 $+ ])  $+ %::c1 $+ to $+ %::c3 %::raddress $+  %:comments
DNS <pre> 11/dns <c4>[ <c3><nick><address><c4> ]08 ...
ACTIONCHAN  <c4>!08 <cmode><nick> <c3><text>
ACTIONQUERY  <c4>!08 <nick> <c3><text>
ACTIONCHANSELF  <c4>! <c3><cmode><me>11 <text>
ACTIONQUERYSELF  <c4>! <c3><me>11 <text>
CTCP !script %:echo %::pre 09CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp)  $+ %::c4 $+ ] $+ %::c1 requested by $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPCHAN !script %:echo %::pre 09CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp)  $+ %::c4 $+ ] $+ %::c1 requested at $+ %::c1 %::chan $+  $+ %::c1 by $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPREPLY !script %:echo %::pre 09Reply $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp)  $+ %::c4 $+ ] $+ %::c1 from $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPSELF !script %:echo %::pre 09CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp)  $+ %::c4 $+ ] $+ %::c1 to $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPCHANSELF !script %:echo %::pre 09CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp)  $+ %::c4 $+ ] $+ %::c1 to $+ %::c4 [ $+ %::c3 $+  %::chan  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPREPLYSELF !script %:echo %::pre 09Reply $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp)  $+ %::c4 $+ ] $+ %::c1 sent to $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
NOTICESERVER !script %:echo %::pre 09Server $+ %::c4 : $+ %::c1 $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) $+  %:comments
NOTICE <pre> <c4>[08 <nick> <c4>(<c3><address><c4>) ]<c3> <text>
NOTICECHAN <pre> <c4>[08 <cmode><nick> <c4>(<c3><target><c4>) ]<c3> <text>
NOTICESELF <pre> 11/notice <c4>[ <c3><target><c4> ] :08 <text>
NOTICESELFCHAN <pre> 11/notice <c4>[ <c3><target><c4> ] :08 <text>
NOTIFY <pre> 11<nick> <c4>[ <c3><address><c4> ] <c1>is online <parentext>
UNOTIFY <pre> 11<nick> <c4>[ <c3><address><c4> ] <c1>is offline <parentext>

raw.311 !script blue.whoisstart
raw.319 <c4>         : ›11 Channels <c4>:<c3> <chan>
raw.312 <c4>         : ›11 Server <c4>:<c3> <wserver> <c4>[11 <serverinfo> <c4>]
raw.301 <c4>         : ›11 Away <c4>:<c3> <text>
raw.317 !script %:echo  $+ %::c4 $str($chr(160),7) : ›11 Idle  $+ %::c4 $+ : $+ %::c3 $blue.st(%::idletime)  $+ %::c4 $+ [11 Sign on $+ %::c4 : $+ %::c3 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ ))  $+ %::c4 $+ ·11 Online time $+ %::c4 : $+ %::c3 $blue.st($calc($ctime - $ctime(%::signontime)))  $+ %::c4 $+ ]
raw.307 !script %:echo  $+ %::c4         : ›11 Status  $+ %::c4 $+ : $+ %::c3 is $iif(%::isregd != is,not) a registered nick
raw.378 <c4>         : ›11 Real Hostname <c4>:<c3> <text>
raw.313 !script %:echo  $+ %::c4         : ›11 IRCop  $+ %::c4 $+ : $+ %::c3 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ])
raw.318 <c4>   [<c3> End <c4>] ———————————————————————————

raw.314 !script blue.whowasstart
raw.369 <c4>   [<c3> End <c4>] ———————————————————————————

raw.001
raw.002 <pre> 09Host<c4> :<c2> <server><c1> running<c4> [<c3> <value> <c4>]
raw.003 <pre> 09Created on<c4> :<c1> <value>
raw.004 !script blue.raw.004
raw.005 <pre> 09Protocols supported<c4> :<c1> <text>

raw.251 !script blue.lusersstart
raw.252 <c4>     : ›11  Operators <c4>:<c3> <value>
raw.253 <c4>     : ›11  Unknown <c4>:<c3> <value>
raw.254 <c4>     : ›11  Channels <c4>:<c3> <value>
raw.255 !script blue.raw.255
raw.265 <c4>     : ›11  Local users <c4>:<c3> <users> <c4>[ 08Max:<c3> <value> <c4>]
raw.266 !script blue.lusersend

raw.352 !script %:echo %::pre 11 $+ %::cmode $+ %::nick  $+ %::c4 $+ [ $+ %::c3 %::address  $+ %::c4 $+ ] 11· $+ %::c3 %::realname 11·08 %::server $+  $iif(%::away == G,11·  $+ %::c4 $+ [ $+ %::c3 Away) $iif(%::isoper == is,$iif(%::away == H,11·  $+ %::c4 $+ [ $+ %::c3 IRCop  $+ %::c4 $+ ],/ IRCop  $+ %::c4 $+ ]),$iif(%::away == G, $+ %::c4 $+ ])) 11· $+ %::c3 %::value hops %:comments
raw.315 <pre> 08End<c1> of /who for <c1><value>

raw.302 !script %:echo %::pre 09Userhost $+ %::c4 : $+ %::c2 %::nick $+ ! $+ %::address $iif(* isin %::value || - isin %::value, $+ %::c4 $+ [ $+ %::c3 $+  $iif(* isin %::value,IRCop) $iif(- isin %::value,$iif(* isin %::value, $+ %::c4 $+ / $+ %::c3 Away,Away))  $+ %::c4 $+ ]) $+  %:comments
raw.341 <pre> 09Invite <c4>: <c2><nick><c1> was invited to join<c4> [<c3> <chan><c4> ]
raw.324 <pre> 09Modes<c4> :<c1> at<c2> <chan><c4> : [<c3> <modes><c4> ]
raw.329 !script %:echo %::pre 09Created $+ %::c4 : $+ %::c1 $asctime(%::text,HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ )) %:comments
raw.391 !script %:echo %::pre 09Time $+ %::c4 : $+ %::c1 %::text $+  %:comments

raw.375 
; raw.375 <pre> <c1>Message of the day
raw.372 <c4>     : ›<c1>  <text>
raw.376 
; raw.376 <pre> <c1>End of<c3> /motd

raw.401 <pre> 09Error<c4> :<c1> no such nick <c4>: [<c3> <nick><c4> ]
raw.403 <pre> 09Error<c4> :<c1> no such channel <c4>: [<c3> <chan><c4> ]
raw.404 <pre> 09Error<c4> :<c1> cannot send to channel <c4>: [<c3> <chan><c4> ]
raw.406 <pre> 09Error<c4> :<c1> there was no such nick <c4>: [<c3> <nick><c4> ]
raw.421 !script %:echo %::pre 09Error $+ %::c4 : $+(,%::c2,/,$lower(%::value))  $+ %::c1 $+ is an unknown command %:comments
raw.432 <pre> 09Error<c4> : <c2><nick><c1> is an erroneus nickname
raw.433 <pre> 09Error<c4> :<c1> nick <c1><nick><c1> is already in use
raw.441 <pre> 09Error<c4> :<c1> <nick><c1> is not on <c4>[<c3> <chan><c4> ]
raw.442 <pre> 09Error<c4> :<c1> you<c1> are not on <c4>[<c3> <chan><c4> ]
raw.443 <pre> 09Error<c4> :<c1> <nick><c1> is already on <c4>[<c3> <chan><c4> ]
raw.467 <pre> 09Error<c4> :<c1> cannot join <c2><chan> <c4>: [<c3> key required<c4> ]
raw.471 <pre> 09Error<c4> :<c1> cannot join <c2><chan> <c4>: [<c3> channel is full<c4> ]
raw.473 <pre> 09Error<c4> :<c1> cannot join <c2><chan> <c4>: [<c3> invite required<c4> ]
raw.474 <pre> 09Error<c4> :<c1> cannot join <c2><chan> <c4>: [<c3> you're banned<c4> ]
raw.475 <pre> 09Error<c4> :<c1> cannot join <c2><chan> <c4>: [<c3> incorrect key<c4> ]
raw.482 <pre> 09Error<c4> :<c1> you are not channel operator at <c1><chan>

raw.332 !script blue.topic
raw.333 !script blue.endtopic

raw.353 !script blue.names
raw.366 !script blue.endnames

raw.other !script %:echo %::pre $+  $+ %::c1 $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32),08 $+ $ifmatch $+  $+ %::c4 : $+ %::c1) %::text $+  %:comments
ECHO <pre> <c1><text>
ECHOTARGET <pre> <c1><text>
ERROR <pre> 09Error<c4> :<c1> <text>

scheme1 Blue+
scheme2 Orange
scheme3 Yellow
scheme4 Bright Grey
scheme5 Dark Grey
scheme6 Red
scheme7 Green
scheme8 Purple
scheme9 Outumn
scheme10 water
scheme11 forest
scheme12 dkhtci
scheme13 desert

; 'water', 'forest' and 'dkhtci' schemes are based on 'aerials' 1.1, theme by Adam^ (aserio88@hotmail.com)

[scheme1]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 177,217,252 177,217,252 0,144,144 91,173,246 177,217,252 7,111,203 128,128,128 208,208,208

[scheme2]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,07,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 255,207,159 255,207,159 0,144,144 254,179,103 255,207,159 252,107,1 128,128,128 208,208,208

[scheme3]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 255,255,164 255,255,164 0,144,144 255,255,0 255,255,164 210,210,0 128,128,128 208,208,208

[scheme4]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 239,239,239 239,239,239 0,144,144 212,212,212 239,239,239 177,177,177 128,128,128 208,208,208

[scheme5]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 207,207,207 207,207,207 0,144,144 183,183,183 207,207,207 143,143,143 128,128,128 208,208,208

[scheme6]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 255,72,72 255,72,72 0,144,144 221,0,0 255,72,72 168,0,0 128,128,128 208,208,208

[scheme7]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 0,255,0 0,255,0 0,144,144 0,223,0 0,255,0 0,187,0 128,128,128 208,208,208

[scheme8]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 255,0,255 255,0,255 0,144,144 193,0,193 255,0,255 128,0,128 128,128,128 208,208,208

[scheme9]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 198,198,0 198,198,0 0,144,144 170,170,0 198,198,0 128,128,0 128,128,128 208,208,208

[scheme10]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 111,127,151 111,127,151 0,144,144 90,111,131 111,127,151 183,191,215 128,128,128 208,208,208

[scheme11]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 95,103,95 95,103,95 0,144,144 71,79,71 95,103,95 143,151,143 128,128,128 208,208,208

[scheme12]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 119,103,87 119,103,87 0,144,144 101,92,84 119,103,87 207,199,183 128,128,128 208,208,208

[scheme13]
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 0
CLINEFRIEND 11
CLINEME 11

; If you want those blue buttons in this scheme, comment the next line.
; IMAGEBUTTONS

BASECOLORS 12,11,12,11
COLORS 13,12,12,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,12,13,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 254,124,29 139,149,91 139,149,91 218,218,177 114,123,62 139,149,91 183,191,130 128,128,128 208,208,208
