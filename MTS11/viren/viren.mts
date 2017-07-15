[mts]
NAME viren
AUTHOR Prisoner
EMAIL prisoner@vizzavi.pt
DESCRIPTION light, good-looking theme.
MTSVERSION 1.1
VERSION 1.0

SCRIPT viren.mrc

BASECOLORS 01,02,02,02
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,0,0 128,128,128 0,0,255 255,0,255 128,128,128 208,208,208
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,0,1,15

CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 1
CLINEOWNER 1
CLINEENEMY 1
CLINEFRIEND 14
CLINEME 14

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Verdana,11
FONTCHAN Verdana,11
FONTQUERY Verdana,11

PREFIX  <c2>›12›<c1>
PARENTEXT <c4>(<c1><text><c4>)<c1>
TIMESTAMP on
TIMESTAMPFORMAT <c4>(01HH<c4>:01nn<c4>:01ss<c4>)<c1>

LOAD !script viren.start 11
JOINSELF <pre> Now talking in<c3> <chan>01
JOIN !script %:echo %::pre  $+ %::c3 $+ %::nick  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ )  $+ %::c1 $+ has joined $+ %::c2 %::chan $+  $+ %::c1 %:comments
PART !script %:echo %::pre  $+ %::c3 $+ %::nick  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ )  $+ %::c1 $+ has left $+ %::c2 %::chan %::parentext $+  $+ %::c1 %:comments
QUIT !script %:echo %::pre  $+ %::c3 $+ %::nick  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ )  $+ %::c1 $+ has left $+ %::c2 IRC $+ %::c1 %::parentext %:comments
KICK <pre> <c3><knick> <c1>was kicked by<c2> <nick> <c1>from<c2> <chan><c1> <parentext>
KICKSELF <pre> <c3>you <c1>were kicked by<c2> <nick> <c1>from<c2> <chan><c1> <parentext>
MODE <pre> <c2><nick> <c1>sets mode<c3> <modes> <c1>on<c2> <chan><c1>
MODEUSER <pre> User mode changed:<c3> <modes><c1>
TOPIC <pre> <c3><nick> <c1>changes<c2> <chan> <c1>topic to: <c4>'<c1><text><c4>'<c1>
INVITE !script %:echo %::pre  $+ %::c2 $+ %::nick  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ )  $+ %::c1 $+ invites you to join $+ %::c3 %::chan $+  $+ %::c1 %:comments
NICK <pre> <c2><nick><c1> is now known as <c3><newnick><c1>
NICKSELF <pre> <c2>you<c1> are now known as <c3><newnick><c1>
TEXTCHAN  <c4>(<c3><cmode>10<nick><c4>)<c1> <text><c1>
TEXTQUERY  <c4>(10<nick><c4>)<c1> <text><c1>
TEXTCHANSELF  <c4>(<c3><cmode>11<me><c4>)<c2> <text><c1>
TEXTQUERYSELF  <c4>(11<me><c4>)<c2> <text><c1>
TEXTMSG  <c4>(10<nick><c4>)<c1> <text><c1>
TEXTMSGSELF <pre> msg to<c3> <nick><c4> -<c2> <text><c1>
SERVERERROR <pre><c3> <server> <c4>-<c1> <text><c1>
REJOIN <pre> Attempting to rejoin <c3><chan><c1> ...
WALLOP  <c4>(10<nick><c4>)<c1> <text>
DNSERROR !script %:echo %::pre Failed to resolve $iif(!%::address, $+ %::c2 $+ %::nick  $+ %::c4 $+ -  $+ %::c3 $+ no such user,$iif(!%::nick, $+ %::c3 $+ %::address, $+ %::c3 $+ %::nick)) $+  $+ %::c1 %:comments
DNSRESOLVE !script %:echo %::pre Resolved $iif(!%::nick, $+ %::c2 $+ $iif(%::iaddress == %::raddress,%::naddress,%::iaddress), $+ %::c2 $+ %::nick  $+ %::c4 $+ - $+ %::c2 $iif(%::iaddress == %::raddress,%::naddress,%::iaddress))  $+ %::c1 $+ to $+ %::c3 %::raddress $+  $+ %::c1 %:comments
DNS <pre> dns<c3> <nick><address><c1> ...
ACTIONCHAN  <c4>! <c3><cmode>10<nick><c1> <text><c1>
ACTIONQUERY  <c4>! 10<nick> <c1><text><c1>
ACTIONCHANSELF  <c4>! <c3><cmode>10<nick>02 <text><c1>
ACTIONQUERYSELF  <c4>! 10<nick>02 <text><c1>
CTCP !script %:echo %::pre ctcp $+ %::c3 $lower(%::ctcp)  $+ %::c1 $+ requested by $+ %::c2 %::nick $+  $+ %::c1 %::parentext %:comments
CTCPCHAN !script %:echo %::pre ctcp $+ %::c3 $lower(%::ctcp)  $+ %::c1 $+ requested at $+ %::c2 %::chan  $+ %::c1 $+ by $+ %::c2 %::nick $+ <c1> %::parentext %:comments
CTCPREPLY !script %:echo %::pre ctcp $+ %::c3 $lower(%::ctcp)  $+ %::c1 $+ reply from $+ %::c2 %::nick $+  $+ %::c1 %::parentext %:comments
CTCPSELF !script %:echo %::pre ctcp $+ %::c3 $lower(%::ctcp)  $+ %::c1 $+ to $+ %::c2 %::nick $+  $+ %::c1 %::parentext %:comments
CTCPCHANSELF !script %:echo %::pre ctcp $+ %::c3 $lower(%::ctcp)  $+ %::c1 $+ to $+ %::c2 %::chan $+  $+ %::c1 %::parentext %:comments
CTCPREPLYSELF !script %:echo %::pre ctcp $+ %::c3 $lower(%::ctcp)  $+ %::c1 $+ reply sent to $+ %::c2 %::nick $+  $+ %::c1 %::parentext %:comments
NOTICESERVER !script %:echo %::pre $+  $+ %::c3 %::server  $+ %::c4 $+ - $+ %::c1 $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) $+  $+ %::c1 %:comments
NOTICE <pre><c3> <nick> <c4>-<c1> <text><c1>
NOTICECHAN !script %:echo %::pre $+  $+ %::c3 %::nick  $+ %::c4 $+ ( $+ $viren.colorcmode(%::target) $+  $+ %::c4 $+ )  $+ %::c4 $+ - $+ %::c1 %::text $+  $+ %::c1 %:comments
NOTICESELF <pre> notice to<c3> <target> <c4>-<c2> <text><c1>
NOTICESELFCHAN <pre> notice to<c3> <target> <c4>-<c2> <text><c1>
NOTIFY !script %:echo %::pre  $+ %::c3 $+ %::nick  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ )  $+ %::c1 $+ is online %::parentext %:comments
UNOTIFY !script %:echo %::pre  $+ %::c3 $+ %::nick  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ )  $+ %::c1 $+ is offline %::parentext %:comments

raw.311 !script viren.whoisstart
raw.319  <c4>.<c2> Channels:<c1> <chan><c1>
raw.312  <c4>.<c2> Server:<c1> <wserver> <c4>-<c1> <serverinfo>
raw.301  <c4>.<c2> Away:<c3> <text><c1>
raw.317 !script %:echo   $+ %::c4 $+ . $+ %::c2 Idle: $+ %::c1 $viren.st(%::idletime)  $+ %::c4 $+ . $+ %::c2 Sign on: $+ %::c1 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy - ddd))  $+ %::c4 $+ . $+ %::c2 Online time: $+ %::c1 $viren.st($calc($ctime - $ctime(%::signontime))) $+  $+ %::c1 %:comments
raw.307 !script %:echo   $+ %::c4 $+ . $+ %::c2 Status: $+ %::c1 is $iif(%::isregd != is,not) a registered nick $+ %::c1 %:comments
raw.378  <c4>.<c2> Hostname:<c1> <text><c1>
raw.313 !script %:echo   $+ %::c4 $+ . $+ %::c2 IRCop: $+ %::c1 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32), $+ %::c4 $+ - $+ %::c3 $ifmatch) $+  $+ %::c1 %:comments
raw.318 !script viren.whoisend

raw.314 !script viren.whoisstart
raw.369 !script viren.whoisend

raw.001
raw.002 <pre> Your host is <c3><server><c1> running <c2><value><c1>
raw.003 <pre> This server was created on<c3> <value><c1>
raw.004 !script viren.raw.004
raw.005 <pre> Protocols supported include: <c3><text><c1>

raw.251 !script viren.lusersstart
raw.252  <c4>.<c1> Operators:<c2> <value><c1>
raw.253  <c4>.<c1> Unknown:<c2> <value><c1>
raw.254  <c4>.<c1> Channels:<c2> <value><c1>
raw.255 !script viren.raw.255
raw.265 !script %:echo   $+ %::c4 $+ . $+ %::c1 Global users: $+ %::c2 %::users  $+ %::c4 $+ . $+ %::c1 max: $+ %::c2 %::value  $+ %::c4 $+ ( $+ %::c3 $+ $round($calc(%::users  / %::value * 100),0) $+ % $+  $+ %::c4 $+ ) $+ %::c1 %:comments
raw.266 !script viren.lusersend

raw.352 !script %:echo %::pre $+( $+ %::c3,%::cmode, $+ %::c1,%::nick)  $+ %::c4 $+ ( $+ %::c1 $+ $replace(%::address,@, $+ %::c4 $+ @ $+ %::c1 $+ ) $+  $+ %::c4 $+ ) - $+ %::c1 %::realname  $+ %::c4 $+ - $+ %::c1 %::server $+  $+ %::c1 $iif(%::isoper == is, $+ %::c4 $+ - 12IRCop $+ %::c1) $iif(%::away == G,$iif(%::isoper == is, $+ %::c4 $+ / 12Away $+ %::c1, $+ %::c4 $+ - 12Away $+ %::c1)))  $+ %::c4 $+ - $+ %::c2 %::value  $+ %::c1 $+ hops %:comments
raw.315

raw.302 !script %:echo %::pre  $+ %::c2 $+ Userhost: $+ %::c1 %::nick $+ ! $+ %::address $+ 12 $iif(* isin %::value || - isin %::value, $+ %::c4 $+ - $iif(* isin %::value,12IRCop $+ %::c1) $iif(- isin %::value,$iif(* isin %::value, $+ %::c2 $+ / 12Away $+ %::c1,12Away $+ %::c1))) %:comments
raw.341 <pre> <c3><nick><c1> was invited to join <c2><chan><c1>
raw.324 <pre> <c2><chan><c1> modes:<c3> <modes><c1>
raw.329 !script %:echo %::pre  $+ %::c2 $+ %::chan  $+ %::c1 $+ created on $+ %::c3 $asctime(%::text,HH:nn:ss - dd/mm/yyyy - ddd) $+  $+ %::c1 %:comments
raw.391 <pre> <c1>Time:<c3> <text><c1>

raw.375 
raw.372 <c2> .12:  <c1><text><c1>
raw.376 

raw.401 <pre> <c2>Error:<c1> no such nick <c4>-<c3> <nick><c1>
raw.403 <pre> <c2>Error:<c1> no such channel <c4>-<c3> <chan><c1>
raw.404 <pre> <c2>Error:<c1> cannot send to channel <c4>-<c3> <chan><c1>
raw.406 <pre> <c2>Error:<c1> there was no such nick <c4>-<c3> <nick><c1>
raw.421 !script %:echo %::pre  $+ %::c2 $+ Error: $+ %::c1 unknown command  $+ %::c4 $+ - $+ %::c3 $+(/,$lower(%::value)) $+  $+ %::c1 %:comments
raw.432 <pre> <c2>Error:<c1> erroneus nickname <c4>-<c3> <nick><c1>
raw.433 <pre> <c2>Error:<c1> nick <c3><nick><c1> is already in use
raw.441 <pre> <c2>Error:<c1> <c3><nick><c1> is not on <c2><chan><c1>
raw.442 <pre> <c2>Error:<c1> <c3>you<c1> are not on <c2><chan><c1>
raw.443 <pre> <c2>Error:<c1> <c3><nick><c1> is already on <c2><chan><c1>
raw.467 <pre> <c2>Error:<c1> cannot join<c2> <chan> <c4>- <c3>key required<c1>
raw.471 <pre> <c2>Error:<c1> cannot join<c2> <chan> <c4>- <c3>channel is full<c1>
raw.473 <pre> <c2>Error:<c1> cannot join<c2> <chan> <c4>- <c3>invite required<c1>
raw.474 <pre> <c2>Error:<c1> cannot join<c2> <chan> <c4>- <c3>you're banned<c1>
raw.475 <pre> <c2>Error:<c1> cannot join<c2> <chan> <c4>- <c3>incorrect key<c1>
raw.482 <pre> <c2>Error:<c1> <c3>you<c1> are not channel operator on <c2><chan><c1>

raw.332 !script viren.topic
raw.333 !script viren.endtopic

raw.353 !script viren.names
raw.366 !script viren.endnames

raw.other !script %:echo %::pre $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32), $+ %::c3 $+ $ifmatch $+ : $+ %::c1) %::text $+  $+ %::c1 %:comments
ECHO <pre> <c1><text><c1>
ECHOTARGET <pre> <c1><text><c1>
ERROR <pre> <c1>Error:<c3> <text><c1>

scheme1 red/blue
scheme2 light blue
scheme3 peace

[scheme1]

BASECOLORS 01,02,05,02
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 110,110,110 128,128,128 0,0,255 255,0,255 128,128,128 208,208,208

[scheme2]

BASECOLORS 01,02,12,02

[scheme3]

CLINEOP 2
CLINEHOP 2
CLINEVOICE 2
CLINEREGULAR 2
CLINEOWNER 2
CLINEENEMY 1
CLINEFRIEND 5
CLINEME 5

PREFIX  05›02›<c1>
BASECOLORS 14,02,05,07
COLORS 0,2,2,5,5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,15,5,0,2,15
RGBCOLORS 255,255,255 154,151,124 133,158,177 0,144,0 255,0,0 55,105,152 160,0,160 124,132,102 255,255,0 0,255,0 148,148,100 128,128,128 79,105,113 255,0,255 128,128,128 208,208,208
