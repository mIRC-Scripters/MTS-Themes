[MTS]
NAME neptune
AUTHOR scratcher
WEBSITE
EMAIL scratcher@netcabo.pt
DESCRIPTION getting to the point... the right one...
VERSION 3.0
MTSVERSION 1.1

SCRIPT neptune.mrc

SCHEME1 mercury
SCHEME2 mars
SCHEME3 saturn
SCHEME4 nereid

RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 5,110,200 90,170,245 175,215,250 127,127,127 210,210,210
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0
BASECOLORS 00,12,00,11

CLINEIRCOP 12
CLINEOWNER 12
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 00
CLINEME 13
CLINEFRIEND 13
CLINEENEMY 11
CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Tahoma,11
FONTQUERY Tahoma,11
FONTCHAN Tahoma,11
PREFIX 11:12:13:
PARENTEXT 11[ <text> 11]
TIMESTAMP ON
TIMESTAMPFORMAT 11(13 HH:nn:ss 11)

LOAD !script neptune.about

SERVERERROR 11(13 <server> 11) <text>
JOINSELF <pre> Join:12 <chan>
REJOIN <pre> ReJoin:12 <chan>
JOIN !script %:echo $neptune.gfx(1) Join:12 %::nick 11(13 %::address 11) joined12 %::chan $+  $neptune.notify %:comments
PART !script %:echo $neptune.gfx(1) Part:12 %::nick 11(13 %::address 11) parted from12 %::chan $+  %::parentext $neptune.notify %:comments
QUIT !script %:echo $neptune.gfx(1) Quit:12 %::nick 11(13 %::address 11) quited from12 IRC %::parentext $neptune.notify %:comments
MODEUSER !script %:echo $neptune.gfx(4) User Mode:12 %::nick set mode 11(13 %::modes 11) %:comments
MODE !script %:echo $neptune.gfx(4) Channel Mode:12 %::nick set mode 11(13 $gettok(%::modes,1,32) 11) $iif($gettok(%::modes,2-,32),to12 $ifmatch $+ ) in12 %::chan %:comments
KICKSELF !script %:echo $neptune.gfx(4) Kick:12 You were kicked from12 %::chan by12 %::nick 11(13 %::address 11) %::parentext %:comments
KICK !script %:echo $neptune.gfx(4) Kick:12 %::knick was kicked from12 %::chan by12 %::nick $+  %::parentext %:comments
NICKSELF !script %:echo $neptune.gfx(4) Nickname:12 You changed your nickname to13 %::newnick %:comments
NICK !script %:echo $neptune.gfx(4) Nickname:12 %::nick changed his nickname to13 %::newnick %:comments
TOPIC !script %:echo $neptune.gfx(4) Channel Topic:12 %::nick set topic in12 %::chan to: %::text %:comments
INVITE !script %:echo $neptune.gfx(4) Invite:12 You were invited for12 %::chan by12 %::nick 11(13 %::address 11) %:comments
TEXTQUERYSELF 11(13 <me> 11) <text>
TEXTCHANSELF 11(13 <cmode><me> 11) <text>
TEXTMSGSELF <pre> Message:11 (13 <target> 11) <text>
ACTIONQUERYSELF 11!13 <me> <text>
ACTIONCHANSELF 11!13 <cmode><me> <text>
TEXTQUERY 11(12 <nick> 11) <text>
TEXTCHAN 11(12 <cmode><nick> 11) <text>
TEXTMSG 11(12 <nick> 11) <text>
ACTIONQUERY 11!12 <nick> <text>
ACTIONCHAN 11!12 <cmode><nick> <text>
NOTICESERVER !script %:echo %::pre Notice:11 (12 %::server 11) $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text)
NOTICESELF <pre> Notice:11 (13 <target> 11) <text>
NOTICESELFCHAN <pre> Notice:11 (13 <target> 11) <text>
NOTICE <pre> Notice:11 (12 <nick> 11) (13 <address> 11) <text>
NOTICECHAN <pre> Notice:11 (12 <nick> 11) (12 <target> 11) <text>
WALLOP 11(12 <nick> 11) <text>
CTCPSELF !script %:echo %::pre CTCP 11(12 $lower(%::ctcp) 11) to12 %::nick %:comments
CTCP !script %:echo %::pre CTCP 11(12 $lower(%::ctcp) 11) requested by12 %::nick %:comments
CTCPCHANSELF !script %:echo %::pre CTCP 11(12 $lower(%::ctcp) 11) to12 %::chan $+  %::parentext %:comments
CTCPCHAN !script %:echo %::pre CTCP 11(12 $lower(%::ctcp) 11) requested by12 %::nick at12 %::chan $+  %::parentext %:comments
CTCPREPLYSELF !script %:echo %::pre CTCP 11(12 $lower(%::ctcp) 11) reply sent to12 %::nick $+  %::parentext %:comments
CTCPREPLY !script %:echo %::pre CTCP 11(12 $lower(%::ctcp) 11) reply from12 %::nick $+  %::parentext %:comments
DNS <pre> DNS:11 (12 <nick> 11)
DNSRESOLVE <pre> DNS Resolve:11 (12 <nick> 11) (13 <address> 11) (13 <raddress> 11)
DNSERROR <pre> DNS Error:11 (12 <nick> 11)
NOTIFY <pre> Notify:11 (12 <nick> 11) (13 <address> 11) <parentext>
UNOTIFY <pre> UNotify:11 (12 <nick> 11) (13 <address> 11) <parentext>

RAW.001
RAW.002 <pre> Host:13 <server> 11(13 <value> 11)
RAW.003 <pre> Host Creation:13 <value>
RAW.004 !script neptune.raw
RAW.005 <pre> Protocols:13 <text>
RAW.251 !script %:echo $neptune.gfx(2,1) /Lusers 11(13 %::server 11) $neptune.gfx(5,28)
RAW.252 !script %:echo $neptune.gfx(3,4) Operators:13 %::value
RAW.253 !script %:echo $neptune.gfx(3,4) Unknown:13 %::value
RAW.254 !script %:echo $neptune.gfx(3,4) Channels:13 %::value
RAW.255 !script neptune.raw
RAW.265 !script %:echo $neptune.gfx(3,4) Local Users:13 %::users $+  $chr(183) Maximum:13  %::value 11(13 $int($calc(%::users / %::value * 100)) $+ % 11)
RAW.266 !script neptune.raw
RAW.391 <pre> Time:13 <text>
RAW.375 !script %:echo $neptune.gfx(2,1) /MOTD 11(13 %::server 11) $neptune.gfx(5,28)
RAW.372 !script %:echo $neptune.gfx(3,4) %::text
RAW.376 !script %:echo $neptune.gfx(2,1) /MOTD11 $neptune.gfx(5,24)
RAW.324 <pre> Channel Modes:13 <modes>
RAW.329 !script %:echo %::pre Channel Creation:13 $asctime(%::text,HH:nn:ss - dd/mm/yy 11(13 dddd 11))
RAW.332 !script neptune.raw
RAW.333 !script neptune.raw
RAW.353 !script neptune.raw
RAW.366 !script %:echo $neptune.gfx(2,1) /Names11 $neptune.gfx(5,24)
RAW.352 !script %:echo %::pre 13 $+ %::cmode $+ %::nick $+(11,$chr(183),13) %::address $+(11,$chr(183),13) %::realname $+(11,$chr(183),13) %::wserver $iif(%::isoper == is,$+(11,$chr(183),13) Operator) $iif(%::away == G,$+(11,$chr(183),13) Away) $+(11,$chr(183),13) %::value
RAW.315
RAW.311 !script neptune.raw
RAW.312 !script %:echo $neptune.gfx(3,4) Server:13 %::wserver 11(13 %::serverinfo 11)
RAW.307 !script %:echo $neptune.gfx(3,4) Status:13 is $iif(%::isregd != is,not) a registered nick
RAW.330 !script %:echo $neptune.gfx(3,4) Login:13 $gettok(%::text,1,32)
RAW.378 !script %:echo $neptune.gfx(3,4) Hostname:13 %::text
RAW.319 !script %:echo $neptune.gfx(3,4) Channels:13 %::chan
RAW.308 !script %:echo $neptune.gfx(3,4) Administrator:13 Yes
RAW.313 !script %:echo $neptune.gfx(3,4) Operator:13 $iif(%::isoper == is,Yes,No) $iif($gettok(%::text,3-,32),11(13 $ifmatch 11))
RAW.309 !script %:echo $neptune.gfx(3,4) CSop:13 Yes
RAW.310 !script %:echo $neptune.gfx(3,4) Helper:13 Yes
RAW.301 !script %:echo $neptune.gfx(3,4) Away:13 %::text
RAW.317 !script %:echo $neptune.gfx(3,4) Idle:13 $neptune.duration(%::idletime) 11( Connected on:13 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yy 11(13 dddd 11)) $+  $chr(183) Connected at:13 $neptune.duration($calc($ctime - $ctime(%::signontime))) 11)
RAW.318 !script %:echo $neptune.gfx(2,1) /Whois11 $neptune.gfx(5,24)
RAW.314 !script neptune.raw
RAW.369 !script %:echo $neptune.gfx(2,1) /Whowas11 $neptune.gfx(5,24)
RAW.421 !script %:echo %::pre Error:13 Unknown command (/ $+ $lower(%::value) $+ )
RAW.461 <pre> Error:13 Need more parameters (<text>)
RAW.472 <pre> Error:13 Unknown character (<text>)
RAW.302 !script %:echo %::pre Userhost:11 (12 %::nick 11) (13 %::address 11) $iif(* isin %::value,(13 Operator 11)) $iif(- isin %::value,(13 Away 11))
RAW.341 !script %:echo $neptune.gfx(4) Invite:12 %::nick was invited for12 %::chan
RAW.465 <pre> Error:13 Cannot connect to server (you are banned)
RAW.438 <pre> Error:13 Nick changed too fast, please wait a while and try again (<nick>)
RAW.439 <pre> Error:13 Target changed too fast, please wait a while and try again (<value>)
RAW.401 <pre> Error:13 There is no such nick (<nick>)
RAW.406 <pre> Error:13 There was no such nick (<nick>)
RAW.403 <pre> Error:13 There is no such channel (<chan>)
RAW.436 <pre> Error:13 Nick collision with <nick>
RAW.432 <pre> Error:13 Nick <nick> is an erroneus nick
RAW.433 <pre> Error:13 Nick <nick> is already in use
RAW.443 <pre> Error:13 <nick> is already on <chan>
RAW.441 <pre> Error:13 <nick> is not on <chan>
RAW.477 <pre> Error:13 You need a registered and identified nick to join <chan>
RAW.305 <pre> Back:13 You are no longer away
RAW.306 <pre> Away:13 You have marked as being away
RAW.442 <pre> Error:13 You are not on <chan>
RAW.482 <pre> Error:13 You are not operator on <chan>
RAW.404 <pre> Error:13 Cannot send to channel (<chan>)
RAW.405 <pre> Error:13 Cannot join <chan> (too many channels)
RAW.474 <pre> Error:13 Cannot join <chan> (you are banned)
RAW.473 <pre> Error:13 Cannot join <chan> (invite required)
RAW.471 <pre> Error:13 Cannot join <chan> (channel is full)
RAW.467 <pre> Error:13 Cannot join <chan> (key required)
RAW.475 <pre> Error:13 Cannot join <chan> (incorrect key)
RAW.478 <pre> Error:13 Cannot ban on <chan> (banlist is full)
RAW.OTHER <pre> <text>

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> Error: <text>

[SCHEME1]
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 100,100,100 160,160,160 210,210,210 127,127,127 210,210,210

[SCHEME2]
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 150,5,5 210,20,20 240,20,20 127,127,127 210,210,210

[SCHEME3]
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 10,120,10 30,170,25 60,230,50 127,127,127 210,210,210

[SCHEME4]
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,140,140 0,200,200 0,250,250 127,127,127 210,210,210