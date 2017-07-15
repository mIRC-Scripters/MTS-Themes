;----------warm.mts----------generated with Theme Editor v0.6.33b by BeteLgeuZe-----
;Good Addon! :p
;
;Warm Theme by: McCrackin
;Server: irc.initialized.org
;Ports: 6667
;Room: #lobby
;
;By no way can I and will I copyright this, it's mIRC, its great
;All I ask is not to rip the whole theme from me.
;
;Questions/Comments: unsmile01@hotmail.com
;
[mts]
Name Warm
Author McCrackin
Email unsmile01@hotmail.com
Description Warm Colors, based off the MTS Theme "Blue"
Website
Version 1.0
MTSVersion 1.1
Script warm.mrc

Timestamp ON
TimestampFormat 5: : 4[7 hh:nn:ss 4]5 : :

PARENTEXT <text>
raw.401 4[7 ERROR 4]<c1> no such nick:<c3> <nick> <comments>
raw.403 4[7 ERROR 4]<c1> no such channel:7 <chan> <comments>
PREFIX 5-7-4>
raw.404 4[7 ERROR 4]<c1> cannot send to channel: 7 <chan> <comments>
raw.432 4[7 ERROR 4] <c3><nick><c1> is an erroneus nickname <comments>
raw.501 4[7 Unknown Mode Flag 4]
raw.421 !script %:echo 4[7 ERROR 4]7 $+(,%::c3,/,$lower(%::value))  $+ %::c1 $+ is an unknown command %:comments
raw.433 4[7 ERROR 4]<c1> nick <c3><nick><c1> is already in use <comments>
QUIT !script %:echo 4[7 QUITS 4]5 : : 4[7 %::nick 4(7 %::address 4) ]5 : : 4[7 $iif(%::text && %::text != Quit:,7 $gettok(%::text,$iif(Quit: * iswm %::text,2-,1-),32)) $+  %:comments 4]
raw.406 4[7 ERROR 4]<c1> there was no such nick:7 <nick> <comments>
NOTICESELF 4[7 NOTICE: <target> 4] <text>
raw.441 4[7 ERROR 4] <nick><c1> is not on7 <chan> <comments>
ECHO <pre> <c1><text>
SERVERERROR 4[7 ERROR 4]4 <text>
CTCPREPLY !script %:echo 4[ 7REPLY: $upper(%::ctcp) 4] from [7 %::nick 4] %::parentext $+ %:comments
raw.442 4[7 ERROR 4] you are not on<c3> <chan> <comments>
raw.474 4[7 ERROR 4] cannot join7 <chan> $+ 4: you're banned <comments>
ACTIONCHANSELF  4* <c3><cmode><me>11 <text>
NOTICESELFCHAN <c2>[7 NOTICE <c4>[ <c3><target><c4> ] 4] <text>
raw.443 4[7 ERROR 4]7 <nick><c1> is already on<c3> <chan> <comments>
raw.467 4[7 ERROR4 ] cannot join7 <chan> $+ 4: key required <comments>
raw.475 4[7 ERROR 4] cannot join7 <chan>4 $+ : incorrect key <comments>
raw.616 !script %:echo  $+ %::c4         : › $+ %::c2 Real Hostname  $+ %::c4 $+ : $+ %::c3 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ])
raw.381 4[7 You are now a IRC Operator 4]
raw.473 4[7 ERROR 4] cannot join7 <chan> $+ 4: invite required <comments>
CTCPREPLYSELF !script %:echo 4[ 7Reply: $upper(%::ctcp) 4] to [7 %::nick 4] %::parentext $+ %:comments
raw.614 !script %:echo 5         : ›4 Help5 :7 is available for help.
TEXTMSG  4[7 <nick> 4] <text>
raw.615 !script %:echo  $+ %::c4         : › $+ %::c2 Modes  $+ %::c4 $+ : $+ %::c3 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ])
raw.391 !script %::echo %::pre 12Time: $+ %::c3 $asctime($ctime(%::text),HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ )) %:comments
raw.471 4[7 ERROR 4] cannot join7 <chan> $+ 4: channel is full <comments>
DNS <c2>[7 DNS 4] <c4>: : 4[ <c3><nick><address>4 ]
NOTIFY 7<nick> <c4>[ <c3><address><c4> ] <c1>is online <parentext>
raw.252 <c4>     : ›<c2>  Operators <c4>:<c3> <value>
raw.372 <c4>     : ›<c1>  <text>
ACTIONQUERYSELF  4* <c3><me>11 <text>
raw.253 <c4>     : ›<c2>  Unknown <c4>:<c3> <value>
raw.265 <c4>     : ›<c2>  Local users <c4>:<c3> <users> <c4>[ <c1>Max:<c3> <value> <c4>]
raw.329 !script %:echo 4[7 Created4 ] $asctime(%::text,HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ )) %:comments
ACTIONCHAN  4*<c3> <cmode><nick> <c1><text>
raw.002 4[7 HOST 4]<c2> <server><c1> running <value>
raw.266 !script warm.lusersend
raw.482 4[7 ERROR 4] you are not channel operator at7 <chan> <comments>
raw.003 7Created on:4 <value>
raw.251 !script warm.lusersstart
TEXTCHAN 4[7 <cmode><nick> 4] <text>
raw.004 !script warm.raw.004
raw.352 !script %:echo  $+ %::c2 $+ %::cmode $+ %::nick  $+ %::c4 $+ [ $+ %::c3 %::address  $+ %::c4 $+ ]  $+ %::c3 $+ · $+ %::c3 %::realname  $+ %::c3 $+ · $+ %::c1 %::server $+  $iif(%::away == G, $+ %::c3 $+ ·  $+ %::c4 $+ [ $+ %::c3 Away) $iif(%::isoper == is,$iif(%::away == H, $+ %::c3 $+ ·  $+ %::c4 $+ [ $+ %::c3 IRCop  $+ %::c4 $+ ],/ IRCop  $+ %::c4 $+ ]),$iif(%::away == G, $+ %::c4 $+ ]))  $+ %::c3 $+ · %::value hops %:comments
raw.005 7Protocols supported:<c1> <text>
raw.341 7<nick><c1> was invited to join7 <chan> <comments>
raw.353 !script warm.names
raw.318 <c4>   [<c3> End <c4>] ———————————————————————————
raw.254 <c4>     : ›<c2>  Channels <c4>:<c3> <value>
raw.366 !script warm.endnames
ACTIONQUERY  4*<c3> <nick> <c1><text>
raw.319 <c4>         : ›<c2> Channels <c4>:<c3> <chan>
raw.255 !script warm.raw.255
raw.304 4[7 <value> <text> 4]
raw.008 4[7 <value> <text> 4]
raw.320 !script %:echo  $+ %::c4         : › $+ %::c2 IRCop  $+ %::c4 $+ : $+ %::c3 $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ])
raw.332 !script warm.topic
raw.317 !script %:echo  $+ %::c4 $str($chr(160),7) : › $+ %::c2 Idle  $+ %::c4 $+ : $+ %::c3 $blue.st(%::idletime)  $+ %::c4 $+ [ $+ %::c2 Sign on: $+ %::c3 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy  $+ %::c4 $+ ( $+ %::c3 $+ ddd $+ %::c4 $+ ))  $+ %::c3 $+ · $+ %::c2 Online time: $+ %::c3 $blue.st($calc($ctime - $ctime(%::signontime)))  $+ %::c4 $+ ]
raw.369 <c4>   [<c3> End <c4>] ———————————————————————————
raw.333 !script warm.endtopic
raw.378 <c4>         : ›<c2> Real Hostname <c4>:<c3> <text>
raw.314 !script warm.whowasstart
UNOTIFY 7<nick> <c4>[ <c3><address><c4> ] <c1>is offline <parentext>
raw.307 !script %:echo  $+ %::c4         : › $+ %::c2 Status  $+ %::c4 $+ : $+ %::c3 is $iif(%::isregd != is,not) a registered nick
raw.315 <pre> <c1>End of /who for <c3><value>
raw.other !script %:echo  $+ %::c1 $iif(%::nick != $gettok(%::text,1,32) || %::chan != $gettok(%::text,1,32), $+ %::c3 $+ $ifmatch $+  $+ %::c4 : $+ %::c1) %::text $+  %:comments
KICKSELF 4[7 KICKED 4from7 <chan> <c1>by7 <nick> 4]12 : : 4[7 <parentext> 4]
MODE !script %:echo 4[7 ChanMode: %::nick 4sets mode7 ( $gettok(%::modes,1,32)  7) $gettok(%::modes,2-,32) $+  %:comments 4]
NICK 4[7 NICK: <nick> 4is now known as [7 <newnick> 4]
raw.312 <c4>         : ›<c2> Server <c4>:<c3> <wserver> <c4>[<c2> <serverinfo> <c4>]
raw.324 4[7 MODES4 ]5 : :4[7 <chan><c4> [<c3> <modes><c4> ]4 ]4 <comments>
LOAD !script warm.start
raw.301 <c4>         : ›<c2> Away <c4>:<c3> <text>
raw.313 !script %:echo  $+ %::c4         : › $+ %::c2 IRCop  $+ %::c4 $+ : $+ %::c3 $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ])
raw.310 !script %:echo 5         : ›4 Help5 :7 is available for help.
raw.302 !script %:echo 4[7 USERHOST4] %::nick $+ ! $+ %::address $iif(* isin %::value || - isin %::value, $+ %::c4 $+ [ $+ %::c3 $+  $iif(* isin %::value,IRCop ) $iif(- isin %::value,$iif(* isin %::value, / Away,Away))  $+ %::c4 $+ ]) $+  %:comments
NOTICESERVER !script %:echo 4[7 Server 4]4 $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) $+  %:comments
raw.335 !script %:echo  $+ %::c4         : › $+ %::c2 Bot  $+ %::c4 $+ : $+ %::c3 $iif($gettok(%::text,3-,32), $+ %::c4 $+ [ $+ %::c3 $ifmatch  $+ %::c4 $+ ])
raw.311 !script warm.whoisstart
CTCP !script %:echo 4[ 7CTCP: $upper(%::ctcp) 4] from [ 7 $+ %::nick 4] %::parentext $+  %:comments
MODEUSER 4[7 UserMode: <modes> 4]
NOTICE 4[7 <nick> <c4>(<c3><address><c4>)4 ]4 <text>
TEXTMSGSELF 4[7 MSG 4] sent to 4[<c3> <target>4 ]: <text>
CTCPSELF !script %:echo 4[ 7CTCP: $upper(%::ctcp) 4] to [7 %::nick 4] %::parentext $+ %:comments
TEXTQUERYSELF 4[<c3> <me> 4] <text>
DNSERROR !script %:echo 4[7 Failed to resolve $+ %::c3 $iif(!%::address,%::nick 4]5 : : 4[ $+ %::c3 no such user $+ 4 ] ,$iif(!%::nick,%::address,%::nick) 4] $+ ) $+  %:comments
JOINSELF 4[7 JOINING 4]5 : : 4[7 <chan> 4]
CTCPCHANSELF !script %:echo 4[ 7CTCP: $upper(%::ctcp) 4] to [ 7 %::chan 4] %::parentext $+  %:comments
DNSRESOLVE !script %:echo 4[ 7Resolved: $iif(!%::nick,$iif(%::iaddress == %::raddress,%::naddress,%::iaddress),%::nick  $+ %::c4 $+ [ $+ %::c3 $iif(%::iaddress == %::raddress,%::naddress,%::iaddress)  $+ %::c4 $+ ])  $+ %::c1 $+ to $+ %::c3 %::raddress $+  %:comments 4]
CTCPCHAN !script %:echo 4[ 7CTCP: $upper(%::ctcp) 4] from [ 7 $+ %::chan $+ : %::nick 4] %::parentext $+  %:comments
INVITE 4[7 INVITE (<chan>) 4] by [7 <nick> 4]
TEXTCHANSELF 4[7 <cmode><me> 4] <text>
ECHOTARGET <pre> <c1><text>
ERROR 4[7 ERROR 4] <text>
PART 4[7 PARTS 4]5 : : 4[7 <nick> 4(7 <address> 4) ] <parentext>
REJOIN 4[7 Attempting to rejoin <c3><chan>... 4]
TEXTQUERY  4[7 <nick> 4] <text>
WALLOP 4[7 <nick> 4] <text>
JOIN 4[7 JOINS 4]5 : : 4[7 <nick> 4(<c3> <address> 4) 4]
KICK 4[7 KICK 4]5 : : 4[7 <knick> 4]5 : : 4By: 7 <nick> 4[7 <parentext> 4]
NOTICECHAN 4[7 <nick> <c4>(<c3><target><c4>)4 ]4 <text>
NICKSELF 4[7 NICK: <nick> 4is now known as [<c3> <newnick> 4]
TOPIC 4[7 TOPIC: <text> 4]<c4> : : 4[<c3> <nick> 4]

Colors 01,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,0,0 128,0,0 255,128,0 128,128,128 208,208,208
BaseColors 11,11,13,12

CLineOwner 15
CLineOP 04
CLineHOP 07
CLineVoice 05
CLineRegular 00
CLineCharOwner *
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

