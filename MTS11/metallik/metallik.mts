[mts]
NAME metallik
AUTHOR Prisoner
EMAIL prisoner@vizzavi.pt
DESCRIPTION modern-style theme using gradient effects.
MTSVERSION 1.1
VERSION 1.0

SCRIPT metallik.mrc

BASECOLORS 12,11,11,13
RGBCOLORS 255,255,255 0,32,64 0,0,128 128,0,0 255,0,0 0,78,155 255,255,255 255,128,0 192,192,192 128,128,128 0,120,230 91,173,255 53,154,244 6,116,215 128,128,128 208,208,208
COLORS 1,0,0,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15

CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 12
CLINEOWNER 12
CLINEENEMY 10
CLINEFRIEND 11
CLINEME 11

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Courier new,11
FONTCHAN Courier new,11
FONTQUERY Courier new,11

PREFIX  5·<c4>·<c3>·00
PARENTEXT 10—<c3>¬ '00<text><c3>'00
TIMESTAMP on
TIMESTAMPFORMAT <c4>(<c1>HH<c3>:nn:<c1>ss<c4>)00

LOAD !script metal.start 11
JOINSELF !script %:echo %::pre $metal.ev(joined) $metal.mb(%::chan,b)
JOIN !script %:echo %::pre $metal.ev(joins) $metal.mb(%::nick,b) $metal.pt  $+ %::c3 $+  $+ $replace(%::address,@,10@ $+ %::c3 $+ ) $+ 00 %:comments
PART !script %:echo %::pre $metal.ev(parts) $metal.mb(%::nick,b) $metal.pt  $+ %::c3 $+  $+ $replace(%::address,@,10@ $+ %::c3 $+ ) $+ 00 %::parentext %:comments
QUIT !script %:echo %::pre $metal.ev(quits) $metal.mb(%::nick,b) $metal.pt  $+ %::c3 $+  $+ $replace(%::address,@,10@ $+ %::c3 $+ ) $+  $iif(%::text && %::text != Quit:,10— $+ %::c3 $+ ¬  $+ %::c3 $+ '00 $+ $gettok(%::text,$iif(Quit: * iswm %::text,2-,1-),32) $+  $+ %::c3 $+ ') $+ 00 %:comments
KICK !script %:echo %::pre $metal.ev(kick) $metal.mb(%::knick,b) $metal.pt  $+ %::c1 $+ by $+ %::c3 $+  %::nick $+  %::parentext %:comments
KICKSELF !script %:echo %::pre $metal.ev(kick) $metal.mb(you,b) $metal.pt  $+ %::c1 $+ by $+ %::c3 $+  %::nick $+  %::parentext %:comments
MODE !script %:echo %::pre $metal.ev(chan) $metal.mb(%::nick,b) $metal.pt  $+ $replace($gettok(%::modes,1,32),+, $+ %::c4 $+ + $+ %::c3 $+ ,-, $+ %::c4 $+ - $+ %::c3 $+ ) $iif($gettok(%::modes,2-,32),$metal.ef  $+ %::c3 $+ $ifmatch) $+ 00 %:comments
MODEUSER !script %:echo %::pre $metal.ev(mode)  $+ $replace(%::modes,+, $+ %::c4 $+ + $+ %::c3 $+ ,-, $+ %::c4 $+ - $+ %::c3 $+ ) $+ 00 %:comments
TOPIC !script %:echo %::pre $metal.ev(topic) $metal.mb(%::nick,b) $metal.pt  $+ %::c3 $+ '00 $+ %::text $+  $+ %::c3 $+ '00 %:comments
INVITE !script %:echo %::pre $metal.ev(invite)  $+ %::c1 $+ by  $+ %::c3 $+  $+ %::nick $+  $metal.ef $metal.mb(%::chan,b) %:comments
NICK !script %:echo %::pre $metal.ev(nick)  $+ %::c3 $+  $+ %::nick $+  $metal.ef $metal.mb(%::newnick,b) %:comments
NICKSELF !script %:echo %::pre $metal.ev(nick)  $+ %::c3 $+  $+ %::nick $+  $metal.ef $metal.mb(%::newnick,b) %:comments
TEXTCHAN !script %:echo   $+ %::c4 $+ ‹ $+ $metal.mb(%::cmode $+ %::nick,b) $+  $+ %::c4 $+ › $+ 00 %::text
TEXTQUERY !script %:echo   $+ %::c4 $+ ‹ $+ $metal.mb(%::nick,b) $+  $+ %::c4 $+ › $+ 00 %::text
TEXTCHANSELF !script %:echo   $+ %::c4 $+ ‹ $+ $metal.mb(%::cmode $+ %::me,b) $+  $+ %::c4 $+ › $metal.pt %::text
TEXTQUERYSELF !script %:echo   $+ %::c4 $+ ‹ $+ $metal.mb(%::me,b) $+  $+ %::c4 $+ › $metal.pt %::text
TEXTMSG !script %:echo   $+ %::c4 $+ ‹ $+ $metal.mb(%::nick,b) $+  $+ %::c4 $+ › $+ 00 %::text $+ 00 %:comments
TEXTMSGSELF !script %:echo %::pre $metal.ev(msg) $metal.mb(%::target,b) $metal.pt %::text $+ 00 %:comments
SERVERERROR !script %:echo %::pre $metal.ev(server error) %::text $+ 00 %:comments
REJOIN !script %:echo %::pre $metal.ev(rejoining) $metal.mb(%::chan,b)  $+ %::c1 $+ ...00 %:comments
WALLOP !script %:echo   $+ %::c4 $+ ‹ $+ $metal.mb(%::nick,b) $+  $+ %::c4 $+ › $+ 00 %::text $+ 00 %:comments
DNSERROR !script %:echo %::pre $metal.ev(failed dns) $iif(!%::address,$metal.mb(%::nick,b) $metal.ef  $+ %::c1 $+ no such user,$iif(!%::nick,$metal.mb(%::address,b),$metal.mb(%::nick,b))) %:comments
DNSRESOLVE !script %:echo %::pre $metal.ev(resolved) $iif(!%::nick, $+ %::c3 $+  $+ $iif(%::iaddress == %::raddress,%::naddress,%::iaddress), $+ %::c3 $+  $+ %::nick $metal.pt  $+ %::c3 $+ $iif(%::iaddress == %::raddress,%::naddress,%::iaddress))  $+ %::c1 $+ to $metal.mb(%::raddress,b) %:comments
DNS !script %:echo %::pre $metal.ev(dns) $metal.mb(%::nick $+ %::address,b)  $+ %::c1 $+ ...00 %:comments
ACTIONCHAN !script %:echo  10! $+ $metal.mb(%::cmode $+ %::nick,b) %::text
ACTIONQUERY !script %:echo  10! $+ $metal.mb(%::nick,b) %::text
ACTIONCHANSELF !script %:echo  10! $+ $metal.mb(%::cmode $+ %::me,b) $metal.pt %::text
ACTIONQUERYSELF !script %:echo  10! $+ $metal.mb(%::me,b) $metal.pt %::text
CTCP !script %:echo %::pre $metal.ev($lower(%::ctcp) request)  $+ %::c1 $+ by $metal.mb(%::nick,b) %::parentext %:comments
CTCPCHAN !script %:echo %::pre $metal.ev($lower(%::ctcp) request)  $+ %::c1 $+ by $metal.mb(%::nick,b) $metal.pt $+( $+ %::c3 $+ ,%::chan,00) %::parentext %:comments
CTCPREPLY !script %:echo %::pre $metal.ev($lower(%::ctcp) reply)  $+ %::c1 $+ from $metal.mb(%::nick,b) %::parentext %:comments
CTCPSELF !script %:echo %::pre $metal.ev($lower(%::ctcp))  $+ %::c1 $+ to $metal.mb(%::nick,b) %::parentext %:comments
CTCPCHANSELF !script %:echo %::pre $metal.ev($lower(%::ctcp))  $+ %::c1 $+ to $metal.mb(%::chan,b) %::parentext %:comments
CTCPREPLYSELF !script %:echo %::pre $metal.ev($lower(%::ctcp) reply)  $+ %::c1 $+ to $metal.mb(%::nick,b) %::parentext %:comments
NOTICESERVER !script %:echo %::pre $metal.ev(server) $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) $+ 00 %:comments
NOTICE !script %:echo  10· $metal.mb(%::nick,b) $metal.pt %::text $+ 00 %:comments
NOTICECHAN !script %:echo  10· $metal.mb(%::cmode $+ %::nick,b) $metal.ef $metal.mb(%::target,b) $metal.pt %::text $+ 00 %:comments
NOTICESELF !script %:echo %::pre $metal.ev(notice) $metal.mb(%::target,b) $metal.pt %::text $+ 00 %:comments
NOTICESELFCHAN !script %:echo %::pre $metal.ev(notice) $metal.mb(%::target,b) $metal.pt %::text $+ 00 %:comments
NOTIFY !script %:echo %::pre $metal.mb(%::nick,b) $metal.pt  $+ %::c3 $+  $+ $replace(%::address,@,10@ $+ %::c3 $+ )  $+ %::c1 $+ is online %::parentext %:comments
UNOTIFY !script %:echo %::pre $metal.mb(%::nick,b) $metal.pt  $+ %::c3 $+  $+ $replace(%::address,@,10@ $+ %::c3 $+ )  $+ %::c1 $+ is offline %::parentext %:comments

; whois and start box taked from aeron theme, from demintri script by ceelow.
raw.311 !script metal.whoisstart
raw.319 !script %:echo $metal.× chans  :15 %::chan $+ 00 %:comments
raw.312 !script %:echo $metal.× server :15 %::wserver 14—15¬ %::serverinfo $+ 00 %:comments
raw.301 !script %:echo $metal.× away   :15 %::text $+ 00 %:comments
raw.317 !script %:echo $metal.× idle   :15 $metal.st(%::idletime) 14.15.06 sign on :15 $asctime($ctime(%::signontime),HH:nn - dd/mm/yyyy)) 14.15.06 online time 15: $metal.st($calc($ctime - $ctime(%::signontime))) $+ 00 %:comments
raw.307 !script %:echo $metal.× status :15 is $iif(%::isregd != is,not) a registered nick00 %:comments
raw.378 !script %:echo $metal.× host   :15 %::text $+ 00 %:comments
raw.313 !script %:echo $metal.× ircop  :15 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),14—15¬ $ifmatch) $+ 00 %:comments
raw.318 !script metal.whoisend

raw.314 !script metal.whoisstart
raw.369 !script metal.whoisend

raw.001
raw.002 !script %:echo %::pre $metal.ev(host) $metal.mb(%::server,b) $metal.pt  $+ %::c3 $+ %::value $+ 00 %:comments
raw.003 !script %:echo %::pre $metal.ev(created on)  $+ %::c1 $+ %::value $+ 00 %:comments
raw.004 !script metal.raw.004
raw.005 !script %:echo %::pre $metal.ev(protocols supported)  $+ %::c1 $+ %::text $+ 00 %:comments

raw.251 !script metal.lusersstart
raw.252 !script %:echo 15    operators14 $metal.align($len(%::value ),15,.) $+ 00 %::value $+ 00 %:comments
raw.253 !script %:echo 15      unknown14 $metal.align($len(%::value ),15,.) $+ 00 %::value $+ 00 %:comments
raw.254 !script %:echo 15     channels14 $metal.align($len(%::value ),15,.) $+ 00 %::value $+ 00 %:comments
raw.255 !script metal.raw.255
raw.265 !script %:echo 15  local users14 $metal.align($len(%::users),15,.) $+ 00 %::users 15.14.15 max 14..00 %::value 14—15¬00 $round($calc(%::users  / %::value * 100),0) $+ % $+ 00 %:comments
raw.266 !script metal.lusersend

raw.352 !script %:echo %::pre $metal.mb(%::cmode $+ %::nick,b) $metal.ef $+  $+ %::c3 $+ $replace(%::address,@,10@ $+ %::c3 $+ ) $+  $metal.pt $+  $+ %::c1 %::realname $metal.pt $+  $+ %::c1 %::server $+  $iif(%::away == G,$metal.pt  $+ %::c3 $+ Away) $iif(%::isoper == is,$iif(%::away == H,$metal.pt  $+ %::c3 $+ IRCop, $+ %::c4 $+ / $+ %::c3 $+  IRCop )) $metal.pt  $+ %::c1 $+  $+ %::value hops00 %:comments
raw.315

raw.302 !script %:echo %::pre $metal.ev(userhost)  $+ %::c1 $+ %::nick $+ ! $+ %::address $+ 00 $iif(* isin %::value || - isin %::value,$metal.pt $iif(* isin %::value, $+ %::c3 $+ IRCop00) $iif(- isin %::value,$iif(* isin %::value, $+ %::c4 $+ / $+ %::c3 $+ Away00, $+ %::c3 $+ Away00))) %:comments
raw.341 !script %:echo %::pre $metal.ev(invite)  $+ %::c1 $+ to $metal.mb(%::nick,b) $metal.ef $+  $+ %::c3 $+  %::chan $+ 00 %:comments
raw.324 !script %:echo %::pre $metal.ev(modes)  $+ %::c3 $+  $+ %::chan $+  $metal.ef $metal.mb(%::modes,b) %:comments
raw.329 !script %:echo %::pre $metal.ev(created) $asctime(%::text, $+ %::c1 $+ HH:nn:ss - dd/mm/yyyy $metal.ef  $+ %::c1 $+ ddd00) %:comments
raw.391 !script %:echo %::pre $metal.ev(time)  $+ %::c1 $+ %::text $+ 00 %:comments

raw.375 !script metal.motdstart
raw.372 !script metal.motd
raw.376 !script metal.motdend

raw.401 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ no such nick $metal.ef $metal.mb(%::nick,b) %:comments
raw.403 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ no such channel $metal.ef $metal.mb(%::chan,b) %:comments
raw.404 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ cannot send to channel $metal.ef $metal.mb(%::chan,b) %:comments
raw.406 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ there was no such nick $metal.ef $metal.mb(%::nick,b) %:comments
raw.421 !script %:echo %::pre $metal.ev(error) $metal.mb($+(/,$lower(%::value)),b)  $+ %::c1 $+ is an unknown command00 %:comments
raw.432 !script %:echo %::pre $metal.ev(error) $metal.mb(%::nick,b)  $+ %::c1 $+ is an erroneus nickname00 %:comments
raw.433 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ nick $metal.mb(%::nick,b)  $+ %::c1 $+ is already in use00 %:comments
raw.441 !script %:echo %::pre $metal.ev(error) $metal.mb(%::nick,b)  $+ %::c1 $+ is not on $+ %::c3 $+  %::chan $+ 00 ":comments
raw.442 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ you are not on $metal.mb(%::chan,b) ":comments
raw.443 !script %:echo %::pre $metal.ev(error) $metal.mb(%::nick,b)  $+ %::c1 $+ is already on $+ %::c3 $+  %::chan $+ 00 ":comments
raw.467 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ cannot join $metal.mb(%::chan,b) $metal.ef  $+ %::c3 $+ key required00 %:comments
raw.471 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ cannot join $metal.mb(%::chan,b) $metal.ef  $+ %::c3 $+ channel is full00 %:comments
raw.473 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ cannot join $metal.mb(%::chan,b) $metal.ef  $+ %::c3 $+ invite required00 %:comments
raw.474 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ cannot join $metal.mb(%::chan,b) $metal.ef  $+ %::c3 $+ you're banned00 %:comments
raw.475 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ cannot join $metal.mb(%::chan,b) $metal.ef  $+ %::c3 $+ incorrect key00 %:comments
raw.482 !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ you are not channel operator at $metal.mb(%::chan,b) %:comments

raw.332 !script metal.topic
raw.333 !script metal.endtopic

raw.353 !script metal.names
raw.366 !script metal.endnames

raw.other !script %:echo %::pre $+  $+ %::c1 $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32), $+ %::c3 $+ $metal.ev($ifmatch) $+  $+ %::c1 $+ ) %::text $+ 00 %:comments
ECHO <pre> <c1><text>00
ECHOTARGET <pre><c1><text>00
ERROR !script %:echo %::pre $metal.ev(error)  $+ %::c1 $+ %::text $+ 00 %:comments

scheme1 red/black
scheme2 light-blue/black
scheme3 grey/black
scheme4 blue/white
scheme5 red/white
scheme6 grey/white

[scheme1]

CLINEFRIEND 04
CLINEME 04

BASECOLORS 12,4,4,5
RGBCOLORS 255,255,255 28,0,0 0,0,128 0,144,0 255,0,0 128,0,0 255,255,255 255,128,0 192,192,192 128,128,128 183,0,0 0,255,255 213,0,0 183,0,0 128,128,128 208,208,208

PREFIX  5·13·4·00

[scheme2]

CLINEFRIEND 11
CLINEME 11

BASECOLORS 12,11,11,10
RGBCOLORS 255,255,255 0,66,66 0,0,128 0,144,0 255,0,0 128,0,0 255,255,255 255,128,0 192,192,192 128,128,128 0,179,179 0,255,255 0,215,215 69,137,137 128,128,128 208,208,208

PREFIX  13·10·11·00

[scheme3]

CLINEFRIEND 11
CLINEME 11

BASECOLORS 12,11,11,10
RGBCOLORS 255,255,255 0,60,60 0,0,128 0,144,0 255,0,0 69,137,137 255,255,255 255,128,0 192,192,192 128,128,128 128,128,128 183,183,183 160,160,160 98,98,98 128,128,128 208,208,208

PREFIX  13·10·11·00

[scheme4]

CLINEFRIEND 11
CLINEME 11

BASECOLORS 12,11,11,10
RGBCOLORS 0,115,230 0,0,0 0,0,128 0,144,0 255,0,0 69,137,137 70,70,70 242,242,242 160,160,160 180,180,180 125,190,255 45,150,255 81,168,255 166,210,255 176,176,176 128,128,128
COLORS 7,0,0,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,7,0,14

PREFIX  13·10·11·00

[scheme5]

CLINEFRIEND 11
CLINEME 11

BASECOLORS 12,11,11,10
RGBCOLORS 128,128,128 0,0,0 0,0,128 0,144,0 255,0,0 69,137,137 70,70,70 242,242,242 160,160,160 180,180,180 255,176,176 249,0,0 255,138,138 255,206,206 176,176,176 128,128,128
COLORS 7,0,0,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,0,7,0,14

PREFIX  13·10·11·00

[scheme6]

CLINEFRIEND 11
CLINEME 11

BASECOLORS 12,11,11,10
RGBCOLORS 100,100,100 0,0,0 0,0,128 0,144,0 255,0,0 69,137,137 100,100,100 224,224,224 160,160,160 180,180,180 177,177,177 140,140,140 157,157,157 196,196,196 176,176,176 128,128,128
COLORS 7,0,0,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,13,0,7,0,14

PREFIX  13·10·11·00
