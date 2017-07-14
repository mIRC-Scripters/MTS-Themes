[mts]
NAME Pulsar
AUTHOR Mortifero & brain 
EMAIL Mortifero@mail.pt
DESCRIPTION Pulsar theme from eXtreme and 3 more schemes (all credits for brain).
MTSVERSION 1.1
VERSION 2.0

SCRIPT pulsar.mrc
COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 0,15,15,4
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
CLINEOWNER 00
CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 00
CLINEENEMY 14
CLINEFRIEND 15
CLINEME 15
CLINEIRCOP 04
CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11
PREFIX 05::04::
PARENTEXT : 04[ <text> 04]
TIMESTAMP on
TIMESTAMPFORMAT 14(15HH:nn:ss14)
LOAD !script pulsar.start
JOIN  5• Joins:4 <nick> (<address>4)
JOINSELF <pre> Now in <chan>
PART  5• Parts:4 <nick> (<address>4) <parentext>
QUIT !script %:echo  5• Quits:4 %::nick 4( $+ %::address $+ 4) $iif(%::text,$iif($gettok(%::text,1,32) == Quit: && $gettok(%::text,2-,32),: 04[ $gettok(%::text,2-,32) 04],$iif($gettok(%::text,1,32) != Quit:,%::parentext))) %:comments
KICK <pre> Kicks: <knick> was kicked from4 <chan> by04 <nick> <parentext>
KICKSELF <pre> Kicks: you were kicked from4 <chan> by04 <nick> <parentext>
MODE !script %:echo  14[4ø14] ChanMode:4 %::nick sets mode 4[ $+ $gettok(%::modes,1,32) $+ 4] $iif($gettok(%::modes,2-,32),$ifmatch $+ ) %:comments
MODEUSER  14[4ø14] UserMode: 4[<modes>4]
TOPIC <pre> Topic: 4<nick> changed it to<parentext>
INVITE <pre> 4[Invite4 (<chan>4)] by15 <nick>
NICK <pre> Nick: 4<nick> : 4[ <newnick> 4]
NICKSELF <pre> Nick: 4<nick> : 4[ <newnick> 4]
TEXTCHAN  4(<cmode><nick>4)15 <text>
TEXTQUERY  4(<nick>4)15 <text>
TEXTCHANSELF  4(<cmode><me>4) <text>
TEXTQUERYSELF  4(<me>4) <text>
TEXTMSG  4(<nick>4)15 <text>
TEXTMSGSELF  5›4› Msg: to 4[ <target>4 ] :15 <text>
SERVERERROR  5›4› Error:15 <text>
REJOIN <pre> Attempting to rejoin <chan>...
WALLOP  4(<nick>4)15 <text>
DNS  5• Looking up host of4 <nick><address> ...
DNSERROR !script %:echo  5• Failed to resolve4 $iif(!%::address,%::nick : 4[ no such user4 ],$iif(!%::nick,%::address,%::nick) $+ ) %:comments
DNSRESOLVE !script %:echo  5• Resolved4 $iif(!%::nick,$iif(%::iaddress == %::raddress,%::naddress,%::iaddress),%::nick ( $+ $iif(%::iaddress == %::raddress,%::naddress,%::iaddress) $+ 4)) to4 %::raddress $+  %:comments
ACTIONCHAN  4! <cmode><nick> <text>
ACTIONQUERY  4! <nick> <text>
ACTIONCHANSELF  4! <cmode><me> <text>
ACTIONQUERYSELF  4! <me> <text>
CTCP !script %:echo  4(ø4) Ctcp: 4[ $+ $lower(%::ctcp) $+ 4] requested by4 %::nick $+  %::parentext %:comments
CTCPCHAN !script %:echo  4(ø4) Ctcp: 4[ $+ $lower(%::ctcp) $+ 4] requested at4 %::chan by4 %::nick $+  %::parentext %:comments
CTCPREPLY !script %:echo  4(ø4) Reply: 4[ $+ $lower(%::ctcp) $+ 4] from4 %::nick $+  %::parentext %:comments
CTCPSELF !script %:echo  4(ø4) Ctcp: 4[ $+ $lower(%::ctcp) $+ 4] to4 %::nick $+  %::parentext %:comments
CTCPCHANSELF !script %:echo  4(ø4) Ctcp: 4[ $+ $lower(%::ctcp) $+ 4] to4 %::chan $+  %::parentext %:comments
CTCPREPLYSELF !script %:echo  4(ø4) Reply: 4[ $+ $lower(%::ctcp) $+ 4] sent to4 %::nick $+  %::parentext %:comments
NOTICESERVER !script %:echo  5›4› Server:15 $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) %:comments
NOTICE  5›4› 4[<nick> 4(<address>4)]15 <text>
NOTICECHAN  5›4› 4[<cmode><nick> 4(<target>4)]15 <text>
NOTICESELF  5›4› Notice: to 4[ <target>4 ] :15 <text>
NOTICESELFCHAN  5›4› Notice: to 4[ <target>4 ] :15 <text>
NOTIFY  5›4› Notify:4 <nick> (<address>4) is online <parentext>
UNOTIFY  5‹4‹ Notify:4 <nick> (<address>4) is offline <parentext>

raw.311 !script pulsar.whoisstart
raw.319          14›15› 4Channels: <chan>
raw.312          14›15› 4Server: <wserver> 14(15<serverinfo>14)
raw.301          14›15› 4Away: <text>
raw.317 !script %:echo $str($chr(160),7)  14›15› 4Idle: $pulsar.st(%::idletime) 14[15Sign on: $asctime($ctime(%::signontime),HH:nn:ss - dd/mmm/yyyy 14(15dddd14)) · 15Online time: $pulsar.st($calc($ctime - $ctime(%::signontime)))
raw.307 !script %:echo          14›15› 4Status: is $iif(%::isregd != is,not) a registered nick
raw.378          14›15› 4Real Hostname:15 <text>
raw.313 !script %:echo         14›15› 4IRCop: $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),14(15 $+ $ifmatch $+ 14) )
raw.318     5• End of /Whois info 14————————————————
raw.314 !script pulsar.whowasstart
raw.369     5• End of /Whowas info 14————————————————
raw.001 
raw.002  14[4ø14] Host: 15<server> running 15<value>
raw.003  14[4ø14] Created on: 15<value>
raw.004 !script %:echo  14[4ø14] Usermodes:15 $gettok(%::text,3,32) · Chanmodes:15 $gettok(%::text,4,32)
raw.005  14[4ø14] Protocols: 15<text>
raw.251 !script pulsar.lusersstart
raw.252          14›15› 4Opers: <value>
raw.253          14›15› 4Unknown: <value> 
raw.254          14›15› 4Chans: <value>
raw.255          14›15› 4Clients: <users> · 4servers: <value>
raw.265 !script %:echo $str($chr(160),7)  14›15› 4Local:  %::users · 4max: %::value 14[15 $+ $round($calc($calc(%::users / %::value) * 100),1) $+ % $+ 14 $+ ]
raw.266 !script pulsar.lusersend
raw.315  5›4› End of /Who for 4<value>
raw.352 !script %:echo  5›4› %::cmode $+ %::nick · 14(15 $+ %::address $+ 14) · %::realname ·4 %::wserver $+  $iif(%::away == G,· 4[ Away) $iif(%::isoper == is,$iif(%::away == H,· 4[ IRCop 4],/ IRCop 4]),$iif(%::away == G,4])) · %::value hops %:comments
raw.302 !script %:echo  5• Userhost:4 %::nick $+ ! $+ %::address $iif(* isin %::value || - isin %::value,4[ $iif(* isin %::value,IRCop ) $iif(- isin %::value,$iif(* isin %::value, / Away,Away)) 4]) $+  %:comments
raw.341  5• Invite: to 4<nick> to join 4<chan> <comments>
raw.324 <pre> Modes: at 4<chan> : 4[<modes>4] <comments>
raw.329 !script %:echo %::pre Created: $asctime(%::text,HH:nn:ss - dd/mmm/yyyy 14(15dddd14)) %:comments
raw.372        ·  <text>
raw.375  4(ø4) Message of the day
raw.376  4(ø4) End of /motd
raw.391 !script %:echo %::pre Time:15 %::text $+  %:comments
raw.401  14[4ø14] Error: No such nick : 4[ <nick>4 ] <comments>
raw.403  14[4ø14] Error: No such channel : 4[ <chan>4 ] <comments>
raw.404  14[4ø14] Error: Cannot send to 4<chan> <comments>
raw.406  14[4ø14] Error: There was no such nick : 4[ <nick>4 ] <comments>
raw.421 !script %:echo  14[4ø14] Error:4 $+(/,$lower(%::value)) is an unknown command %:comments
raw.432  14[4ø14] Error: 4<nick> is a erroeus nickname <comments>
raw.433  14[4ø14] Error: nick 4<nick> is already in use <comments>
raw.441  14[4ø14] Error: 4<nick> is not on 4<chan> <comments>
raw.442  14[4ø14] Error: 4you are not on 4<chan> <comments>
raw.443  14[4ø14] Error: 4<nick> is already on 4<chan> <comments>
raw.467  14[4ø14] Error: Cannot join4 <chan> : 4[ key required4 ] <comments>
raw.471  14[4ø14] Error: Cannot join4 <chan> : 4[ channel is full4 ] <comments>
raw.473  14[4ø14] Error: Cannot join4 <chan> : 4[ invite required4 ] <comments>
raw.474  14[4ø14] Error: Cannot join4 <chan> : 4[ you're banned4 ] <comments>
raw.475  14[4ø14] Error: Cannot join4 <chan> : 4[ incorrect key4 ] <comments>
raw.482  14[4ø14] Error: You are not channel operator on 4<chan> <comments>
raw.332 !script pulsar.topic
raw.333 !script pulsar.endtopic
raw.353 !script pulsar.names
raw.366 !script pulsar.endnames
raw.other !script %:echo  14[4ø14] $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32),4 $+ $ifmatch $+ :) %::text %:comments

ECHO <pre> <c1><text>
ECHOTARGET <pre> <c1><text>
ERROR  14[4ø14] Error: <text>

SCHEME1 White
SCHEME2 Verdana
SCHEME3 timestamp off

[scheme1]
COLORS 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
CLINEOWNER 02
CLINEOP 01
CLINEHOP 01
CLINEVOICE 15
CLINEREGULAR 01
CLINEENEMY 14
CLINEFRIEND 15
CLINEME 15
CLINEIRCOP 04
TIMESTAMP ON
TIMESTAMPFORMAT 01(14HH:nn:ss01) 
PART 4• Parts04: <nick> 04[<address>04] : <parentext>
LOAD 4• Pulsar White 04[by MoRtifero04] [MoRtifero@mail.pt04]

[SCHEME2]
TIMESTAMP on
TIMESTAMPFORMAT 14(15HH:nn:ss14)
FONTDEFAULT Verdana,11
FONTCHAN Verdana,11
FONTQUERY Verdana,11

[SCHEME3]
TIMESTAMP off