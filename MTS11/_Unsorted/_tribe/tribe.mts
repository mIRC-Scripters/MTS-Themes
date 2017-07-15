[mts]
NAME tribe
AUTHOR airjer
EMAIL airjer@sp00fed.host.name
DESCRIPTION tribe theme, port of the best lookin theme for an mirc script ever in my opinion ;p
WEBSITE http://www.airjer.net
MTSVERSION 1.1
VERSION 1.2

SCRIPT tribe.mrc

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 00,11,11,10
RGBCOLORS 255,255,255 0,0,0 000,000,160 000,000,128 255,000,000 127,000,000 224,000,016 000,136,000 160,136,248 000,252,000 200,176,240 128,128,255 144,255,200 255,184,184 127,127,127 210,210,210

CLINEOWNER 11
CLINEOP 11
CLINEHOP 11
CLINEVOICE 11
CLINEREGULAR 11
CLINEENEMY 04
CLINEFRIEND 00
CLINEME 09
CLINEIRCOP 12

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

FONTDEFAULT Verdana,9
FONTCHAN Verdana,9
FONTQUERY Verdana,9

PREFIX <c1>»<c2>»
PARENTEXT (<text>)
TIMESTAMP off
TIMESTAMPFORMAT <c2>[<c1>h:nn:sst<c2>] 

LOAD !script tribe.start
JOIN <pre> <c4>joins <c1><nick> <c4>(<address>)
JOINSELF •¯¯¯¯¯¯¯[ <c2><chan> ]
PART <pre> <c4>parts <c1><nick> <c4>(<address>) <c1><parentext>
QUIT !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ » $+ %::c2 quits $+ %::c1 %::nick  $+ %::c4 $+  ( $+ %::address $+ ) $iif(%::text,$iif($gettok(%::text,1,32) == Quit: && $gettok(%::text,2-,32), ( $+ $gettok(%::text,2-,32) $+ ),$iif($gettok(%::text,1,32) != Quit:,%::parentext))) %:comments
KICK <pre> <c1><knick> <c2>kicked by <c1><nick> <c1><parentext>
KICKSELF <pre> <c2>[ update <c2>] <c2>( kicked from <chan> by <nick> <parentext> <c2>)
MODE !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ »  $+ %::c4 $+  [ $+ %::c2 $+  mode $+ %::c4 [ $+ %::nick $+  $+ %::c4 [  $+ %::c2 $+  $gettok(%::modes,1,32) $iif($gettok(%::modes,2-,32),$ifmatch $+ ) %:comments $+  $+ %::c4 $+  ]
MODEUSER <pre> <c4>[<c2>mode <c4>[<nick> <c4>[<modes><c4>]
TOPIC <pre> <c4>[<c2>topic changed <c4>[ <nick> <c4>[ <text> <c4>]
INVITE <pre> <c4>[<c2>invite <c4>[<nick> <c4>[ <chan> <c4>]
NICK <pre> <c2>nick change <c4>[ <nick> 8» <newnick> <c4>]
NICKSELF <pre> <c2>nick change <c4>[ <nick> 8» <newnick> <c4>]
TEXTCHAN <c2>[<cmode><nick><c2>] <text>
TEXTQUERY <c2>[<nick><c2>] <text>
TEXTCHANSELF <c2>(<cmode><nick><c2>) <text>
TEXTQUERYSELF <c2>(<nick><c2>) <text>
TEXTMSG <c2>[<nick><c2>] <text>
TEXTMSGSELF <c2>[msg: <target><c2>] <text>
SERVERERROR <c2>[bad command - <text><c2>]
REJOIN <pre> rejoining...
WALLOP <c2>[<nick><c2>] <text>
DNS 
DNSERROR !script %:echo [ $+ %::c2 $+  resolve error: $iif(!%::address, $+ %::nick no such user,$iif(!%::nick,%::address,%::nick) $+ ) %:comments
DNSRESOLVE !script tribe.dns
ACTIONCHAN <c4>* <cmode><nick> <text>
ACTIONQUERY <c4>* <nick> <text>
ACTIONCHANSELF <c4>* <cmode><me> <text>
ACTIONQUERYSELF <c4>* <me> <text>
CTCP !script %:echo  $+ %::c2 $+  [ ctcp.. $+ %::c2 $+ $lower(%::ctcp) req. by $+ %::c2 %::nick ( $+ %::address $+ ) $+ %::c2 $+ ]
CTCPCHAN !script %:echo  $+ %::c2 $+ [ctcp: $+ $lower(%::ctcp) by %::nick $+  $+ %::c2 $+  ] %::parentext %:comments
CTCPREPLY !script %:echo  $+ %::c2 $+ [ $+ $lower(%::ctcp) reply » %::nick %::parentext  $+ %::c2 $+  ]
CTCPSELF !script %:echo  $+ %::c2 $+ [ctcp: %::nick $+  $+ %::c2 $+  ] $lower(%::ctcp) $+ %::parentext %:comments
CTCPCHANSELF !script %:echo  $+ %::c2 $+ [ctcp: %::chan  $+ %::c2 $+ ] $+ $lower(%::ctcp) $+ %::parentext %:comments
CTCPREPLYSELF !script %:echo  $+ %::c2 $+ [ $+ $lower(%::ctcp) reply » %::nick %::parentext  $+ %::c2 $+ ]NOTICESERVER !script %:echo [ $+ %::c2 $+ server: $iif($gettok(%::text,1,32) == ***,$gettok(%::text,2-,32),%::text) %:comments
NOTICE <c4>!notice!(<nick>) <text><c4>!
NOTICECHAN <c4>!notice!(<target> » <nick>) <text><c4>!
NOTICESELF -> -<target>- <text>
NOTICESELFCHAN -> -<target>- <text>
NOTIFY <pre> <c2>[<nick> is ON irc <c2>]
UNOTIFY <pre> <c2>[<nick> has QUIT irc (or changed nick)<c2>]

raw.311 !script tribe.whoisstart
raw.319 [<c2>channels: <chan>
raw.312 [<c2>server: <server> 14(15<serverinfo>14)
raw.301 [<c2>away: <text>
raw.317 !script %:echo [ $+ %::c2 $+ idle: $tribe.st(%::idletime)
raw.378 [<c2>real hostname: <text>
raw.313 !script %:echo [ $+ %::c2 $+ ircop: $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),( $+ $ifmatch $+ ) )
raw.318 •______________[ <c2>whois (15from <server><c2>) ]
raw.307 

raw.314 !script tribe.whowasstart
raw.369 •___________[ <c2>whowas (15from <server><c2>) ]

raw.001 
raw.002 [<c2>host: <server> running <value>
raw.003 [<c2>created on: 15<value>
raw.004 !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ » [ $+ %::c2 $+ usermodes: $gettok(%::text,3,32)  $+ %::c2 $+ chanmodes: $gettok(%::text,4,32)
raw.005 [<c2>protocols: <text>

raw.252 <pre> <value> IRC Operators online
raw.254 <pre> <value> channels formed
raw.265 !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ » Current local users: %::users Max: %::value

raw.315 <pre> <c2>[ end of <value> search <c2>(15from <server><c2>)<c2> ]
raw.352 !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ » %::cmode $+ %::nick · ( $+ %::address $+ ) · %::realname · $+ %::c2 %::wserver $+  $iif(%::away == G,· <2>[ Away) $iif(%::isoper == is,$iif(%::away == H,·  $+ %::c2 $+ [ IRCop  $+ %::c2 $+ ],/ IRCop  $+ %::c2 $+ ]),$iif(%::away == G, $+ %::c2 $+ ])) · %::value hops %:comments

raw.302 !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ » [ $+ %::c2 $+ userhost: %::nick $+ ! $+ %::address $iif(* isin %::value || - isin %::value, $+ %::c2 $+ [ $iif(* isin %::value,IRCop ) $iif(- isin %::value,$iif(* isin %::value, / Away,Away))  $+ %::c2 $+ ]) $+  %:comments
raw.341 <pre> <c4>[<c2>invite <c4>[<nick><c4>[ <chan> <c4>]
raw.324 

raw.372 <text>
raw.375 <pre>
raw.376 <pre>

raw.391 !script %:echo  $+ %::c1> $+ » $+ %::c2 $+ » [ $+ %::c2 $+ time: %::text $+ %:comments
raw.401 <c2>[<nick> is not on irc <c2>(15from <server><c2>)]
raw.403 <c2>[<chan> no such channel <c2>(15from <server><c2>)]
raw.404 <c2>[<chan> is moderated, cannot send text <c2>(15from <server><c2>)]
raw.406 <c2>[error: there was no such nickname<c2>]
raw.421 !script %:echo  $+ %::c2 $+ [bad command - $+(/,$lower(%::value)) $+  $+ %::c2 $+ ]
raw.432 <c2>[<nick> is an erroeus nickname <c2>(15from <server><c2>)]
raw.433 <c2>[<nick> is already in use <c2>(15from <server><c2>)]
raw.441 <c2>[<nick> is not <chan> <c2>(15from <server><c2>)]
raw.442 <c2>[you are not on <chan> <c2>(15from <server><c2>)]
raw.443 <c2>[<nick> is already on <chan> <c2>(15from <server><c2>)]
raw.467 <c2>[cannot join <chan> - key required <c2>(15from <server><c2>)]
raw.471 <c2>[cannot join <chan> - channel is full <c2>(15from <server><c2>)]
raw.473 <c2>[cannot join <chan> - invite required <c2>(15from <server><c2>)]
raw.474 <c2>[cannot join <chan> - you're banned <c2>(15from <server><c2>)]
raw.475 <c2>[cannot join <chan> - incorrect key <c2>(15from <server><c2>)]
raw.482 <c2>[you are not channel operator on <chan> <c2>(15from <server><c2>)]

raw.332 !script tribe.topic
raw.333 !script tribe.endtopic

raw.353 !script tribe.names
raw.366 !script tribe.endnames

raw.other 
ECHO <pre> <c1><text>
ECHOTARGET <pre> <c1><text>
ERROR <c2>[error: <text>

ImageMirc Tile blue1.png
ImageChan Tile blue1.png
Imagestatus Center blue.png
ImageSwitchbar Tile blue1.png

SCHEME1 default-timestamp
SCHEME2 nuclear
SCHEME3 nuclear-timestamp
SCHEME4 radiation
SCHEME5 radiation-timestamp

[scheme1]
TIMESTAMP on

[scheme2]
CLINEOWNER 09
CLINEOP 09
CLINEHOP 09
CLINEVOICE 09
CLINEREGULAR 12
CLINEENEMY 04
CLINEFRIEND 00
CLINEME 09
CLINEIRCOP 15

BASECOLORS 00,09,09,12

LOAD !script tribe.start.nuclear

ImageMirc Tile green1.png
ImageChan Tile green1.png
Imagestatus Center green.png
ImageSwitchbar Tile green1.png

[scheme3]
CLINEOWNER 09
CLINEOP 09
CLINEHOP 09
CLINEVOICE 09
CLINEREGULAR 12
CLINEENEMY 04
CLINEFRIEND 00
CLINEME 09
CLINEIRCOP 15

BASECOLORS 00,09,09,12

TIMESTAMP on
LOAD !script tribe.start.nuclear

ImageMirc Tile green1.png
ImageChan Tile green1.png
Imagestatus Center green.png
ImageSwitchbar Tile green1.png

[scheme4]
CLINEOWNER 04
CLINEOP 04
CLINEHOP 04
CLINEVOICE 04
CLINEREGULAR 13
CLINEENEMY 00
CLINEFRIEND 07
CLINEME 13
CLINEIRCOP 11

BASECOLORS 00,04,04,13

LOAD !script tribe.start.radiation

ImageMirc Tile red1.png
ImageChan Tile red1.png
Imagestatus Center red.png
ImageSwitchbar Tile red1.png

[scheme5]
CLINEOWNER 04
CLINEOP 04
CLINEHOP 04
CLINEVOICE 04
CLINEREGULAR 13
CLINEENEMY 00
CLINEFRIEND 07
CLINEME 13
CLINEIRCOP 11

BASECOLORS 00,04,04,13

TIMESTAMP on
LOAD !script tribe.start.radiation

ImageMirc Tile red1.png
ImageChan Tile red1.png
Imagestatus Center red.png
ImageSwitchbar Tile red1.png