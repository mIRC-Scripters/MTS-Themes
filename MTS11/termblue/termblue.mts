[mts]
NAME termblue
AUTHOR tig0ti
EMAIL admin@tig0ti.org
DESCRIPTION Bright.fon version of blue.mts theme
WEBSITE http://fractalscript.com
MTSVERSION 1.1
VERSION 1.0

SCRIPT termblue.mrc

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 91,173,246 7,123,228 177,217,252 128,128,128 208,208,208


CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 00
CLINEOWNER 00
CLINEENEMY 15
CLINEFRIEND 11
CLINEME 13

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Bright,10
FONTCHAN Bright,10
FONTQUERY Bright,10

PREFIX 12-13:12-
PARENTEXT 12[13<text>12]
TIMESTAMP on
TIMESTAMPFORMAT 12[13HH:nn:ss12]

LOAD !script blue.start
JOIN <pre> 12Joins: 11<nick> 12[13<address>12]
JOINSELF <pre> <c1>Now bitching in <c3><chan>
PART <pre> 12Parts:<c2> <nick> <c4>[<c3><address><c4>] <parentext>
QUIT !script %:echo %::pre 12Quits: $+ %::c2 $+  %::nick  $+ %::c4 $+ [ $+ %::c3  $+ %::address  $+ %::c4 $+ ] $iif(%::text && %::text != Quit:, $+ %::c4 $+ : [ $gettok(%::text,$iif(Quit: * iswm %::text,2-,1-),32)  $+ %::c4 $+ ]) $+  %:comments
KICK <pre> 12Kicks:<c2> <knick> <c1>was kicked from<c3> <chan> <c1>by <c4>[<c3> <nick> <c4>] <parentext>
KICKSELF <pre> 12Kicks: <c2>you <c1>were kicked from<c3> <chan> <c1>by <c4>[<c3> <nick> <c4>] <parentext>
MODE !script %:echo %::pre 12ChanMode: $+ %::c2 %::nick  $+ %::c1 $+ sets mode $+ %::c4 [ $+ %::c3 $+  $gettok(%::modes,1,32)  $+ %::c4 $+ ] $+ %::c3 $gettok(%::modes,2-,32) $+  %:comments
MODEUSER <pre> 12UserMode: <c4>[<c3> <modes> <c4>]
TOPIC <pre> 12Topic:<c4> [<c3> <nick> <c4>] : '<text>'
INVITE <pre> <c4>[ <c1>Invite<c4> (<c3><chan><c4>) ]<c1> by <c4>[<c3> <nick> <c4>] 
NICK <pre> 12Nick:<c2> <nick> <c4>: [<c3> <newnick> <c4>]
NICKSELF <pre> 12Nick:<c2> <nick> <c4>: [<c3> <newnick> <c4>]
TEXTCHAN ÿ<c4>[<c1><cmode><nick><c4>]<c3> <text>
TEXTQUERY ÿ<c4>[<c1><nick><c4>]<c3> <text>
TEXTCHANSELF ÿ<c4>[<c3><cmode><me><c4>]11 <text>
TEXTQUERYSELF ÿ<c4>[<c3> <me><c4>]11 <text>
TEXTMSG ÿ<c4>[<c1><nick><c4>]<c3> <text>
TEXTMSGSELF <pre> <c2>/msg <c4>[ <c3><target><c4> ] :<c1> <text>
SERVERERROR <pre> 12Error:<c3> <text>
REJOIN <pre> <c1>Attempting to rejoin <c3><chan>...
WALLOP ÿ<c4>[<c1><nick><c4>]<c3> <text>
DNSERROR !script %:echo %::pre  $+ %::c1 $+ Failed to resolve $+ %::c3 $iif(!%::address,%::nick  $+ %::c4 $+ : [ $+ %::c3 no such user $+ %::c4 ],$iif(!%::nick,%::address,%::nick) $+ ) $+  %:comments
DNSRESOLVE !script %:echo %::pre 12Resolved: $+ %::c2 $iif(!%::nick,$iif(%::iaddress == %::raddress,%::naddress,%::iaddress),%::nick  $+ %::c4 $+ [ $+ %::c3 $iif(%::iaddress == %::raddress,%::naddress,%::iaddress)  $+ %::c4 $+ ])  $+ %::c1 $+ to $+ %::c3 %::raddress $+  %:comments
DNS <pre> <c2>/dns <c4>[ <c3><nick><address><c4> ]<c1> ...
ACTIONCHAN ÿ<c4>!<c1> <cmode><nick> <c3><text>
ACTIONQUERY ÿ<c4>!<c1> <nick> <c3><text>
ACTIONCHANSELF ÿ<c4>! <c3><cmode><me>11 <text>
ACTIONQUERYSELF ÿ<c4>! <c3><me>11 <text>
CTCP !script %:echo %::pre 12CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp) $+ $iif(%::text,$ifmatch,$+) $+   $+ %::c4 $+ ] $+ %::c1 requested by $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPCHAN !script %:echo %::pre 12CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp) $+ $iif(%::text,$ifmatch,$+) $+  $+ %::c4 $+ ] $+ %::c1 requested at $+ %::c3 %::chan $+  $+ %::c1 by $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPREPLY !script %:echo %::pre 12Reply $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp) $+ $iif(%::text,$ifmatch,$+) $+  $+ %::c4 $+ ] $+ %::c1 from $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPSELF !script %:echo %::pre 12CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp) $+ $iif(%::text,$ifmatch,$+) $+  $+ %::c4 $+ ] $+ %::c1 to $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPCHANSELF !script %:echo %::pre 12CTCP $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp) $+ $iif(%::text,$ifmatch,$+) $+  $+ %::c4 $+ ] $+ %::c1 to $+ %::c4 [ $+ %::c3 $+  %::chan  $+ %::c4 $+ ] %::parentext $+  %:comments
CTCPREPLYSELF !script %:echo %::pre 12Reply $+ %::c4 [ $+ %::c1 $+  $lower(%::ctcp) $+ $iif(%::text,$ifmatch,$+) $+  $+ %::c4 $+ ] $+ %::c1 sent to $+ %::c4 [ $+ %::c3 $+  %::nick  $+ %::c4 $+ ] %::parentext $+  %:comments
NOTICESERVER !script %:echo %::pre 12Server: $+ %::c3 $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) $+  %:comments
NOTICE <pre> <c4>[<c1> <nick> <c4>(<c3><address><c4>) ]<c3> <text>
NOTICECHAN <pre> <c4>[<c1> <nick> <c4>(<c3><target><c4>) ]<c3> <text>
NOTICESELF <pre> <c2>/notice <c4>[ <c3><target><c4> ] :<c1> <text>
NOTICESELFCHAN <pre> <c2>/notice <c4>[ <c3><target><c4> ] :<c1> <text>
NOTIFY <pre> <c2><nick> <c4>[ <c3><address><c4> ] <c1>is online <parentext>
UNOTIFY <pre> <c2><nick> <c4>[ <c3><address><c4> ] <c1>is offline <parentext>

whois !script blue.whois


raw.314 !script blue.whowasstart
raw.369 !script   %:echo  $+ %::c3 ÀÄ $+ %::c2 $+ ÄÄÄÄÄÄÄ $+ %::c3 $+ Ä $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ $+ %::c3 $+ ÄÄÄ $+ %::c2 $+ ÄÄÄÄÄÄÄÄÄÄÄÄÄ

raw.001
raw.002 <pre> 12Host:<c2> <server><c1> running<c4> [<c3> <value> <c4>]
raw.003 <pre> 12Created on:<c3> <value>
raw.004 !script blue.raw.004
raw.005 <pre> 12Protocols supported:<c1> <text>

raw.251 !script blue.lusersstart
raw.252 <c4> ÿÿÿ : ›<c2> ÿOperators <c4>:<c3> <value>
raw.253 <c4> ÿÿÿ : ›<c2> ÿUnknown <c4>:<c3> <value>
raw.254 <c4> ÿÿÿ : ›<c2> ÿChannels <c4>:<c3> <value>
raw.255 !script blue.raw.255
raw.265 <c4> ÿÿÿ : ›<c2> ÿLocal users <c4>:<c3> <users> <c4>[ <c1>Max:<c3> <value> <c4>]
raw.266 !script blue.lusersend

raw.352 !script %:echo %::pre  $+ %::c2 $+ %::cmode $+ %::nick  $+ %::c4 $+ [ $+ %::c3 %::address  $+ %::c4 $+ ]  $+ %::c3 $+ · $+ %::c3 %::realname  $+ %::c3 $+ · $+ %::c1 %::server $+  $iif(%::away == G, $+ %::c3 $+ ·  $+ %::c4 $+ [ $+ %::c3 Away) $iif(%::isoper == is,$iif(%::away == H, $+ %::c3 $+ ·  $+ %::c4 $+ [ $+ %::c3 IRCop  $+ %::c4 $+ ],/ IRCop  $+ %::c4 $+ ]),$iif(%::away == G, $+ %::c4 $+ ]))  $+ %::c3 $+ · %::value hops %:comments
raw.315 <pre> <c1>End of /who for <c3><value>

raw.302 !script %:echo %::pre 12Userhost: $+ %::c2 %::nick $+ ! $+ %::address $iif(* isin %::value || - isin %::value, $+ %::c4 $+ [ $+ %::c3 $+  $iif(* isin %::value,IRCop ) $iif(- isin %::value,$iif(* isin %::value, / Away,Away))  $+ %::c4 $+ ]) $+  %:comments
raw.341 <pre> <c2><nick><c1> was invited to join<c4> [<c3> <chan><c4> ] <comments>
raw.324 <pre> 12Modes:<c1> at<c2> <chan><c4> : [<c3> <modes><c4> ] <comments>
raw.329 !script %:echo %::pre 12Created: $+ %::c3 $asctime(%::text,HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ )) %:comments
raw.391 !script %::echo %::pre 12Time: $+ %::c3 $asctime($ctime(%::text),HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ )) %:comments

raw.375
; raw.375 <pre> <c1>Message of the day
raw.372 <c4> ÿÿÿ : ›<c1> ÿ<text>
raw.376
;raw.376 <pre> <c1>End<c3> /motd

raw.401 <pre> 12Error:<c1> no such nick <c4>: [<c3> <nick><c4> ] <comments>
raw.403 <pre> 12Error:<c1> no such channel <c4>: [<c3> <chan><c4> ] <comments>
raw.404 <pre> 12Error:<c1> cannot send to channel <c4>: [<c3> <chan><c4> ] <comments>
raw.406 <pre> 12Error:<c1> there was no such nick <c4>: [<c3> <nick><c4> ] <comments>
raw.421 !script %:echo %::pre 12Error: $+(,%::c3,/,$lower(%::value))  $+ %::c1 $+ is an unknown command %:comments
raw.432 <pre> 12Error: <c3><nick><c1> is an erroneus nickname <comments>
raw.433 <pre> 12Error:<c1> nick <c3><nick><c1> is already in use <comments>
raw.441 <pre> 12Error:c2> <nick><c1> is not on <c4>[<c3> <chan><c4> ] <comments>
raw.442 <pre> 12Error:c2> you<c1> are not on <c4>[<c3> <chan><c4> ]< <comments>
raw.443 <pre> 12Error:c2> <nick><c1> is already on <c4>[<c3> <chan><c4> ] <comments>
raw.467 <pre> 12Error:<c1> cannot join<c2> <chan> <c4>: [<c3> key required<c4> ] <comments>
raw.471 <pre> 12Error:<c1> cannot join<c2> <chan> <c4>: [<c3> channel is full<c4> ] <comments>
raw.473 <pre> 12Error:<c1> cannot join<c2> <chan> <c4>: [<c3> invite required<c4> ] <comments>
raw.474 <pre> 12Error:<c1> cannot join<c2> <chan> <c4>: [<c3> you're banned<c4> ] <comments>
raw.475 <pre> 12Error:<c1> cannot join<c2> <chan> <c4>: [<c3> incorrect key<c4> ] <comments>
raw.482 <pre> 12Error:<c1> you are not channel operator at <c4>[<c3> <chan> <c4>] <comments>

raw.332 !script blue.topic
raw.333 !script blue.endtopic

raw.353 !script blue.names
raw.366 !script blue.endnames

raw.other !script %:echo %::pre $+  $+ %::c1 $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32), $+ %::c3 $+ $ifmatch $+  $+ %::c4 : $+ %::c1) %::text $+  %:comments
ECHO <pre> <c1><text>
ECHOTARGET <pre> <c1><text>
ERROR <pre> 12Error:<c1> <text>

