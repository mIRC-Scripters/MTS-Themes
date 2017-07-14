[mts]
NAME cesspool
AUTHOR AdamS^
EMAIL aserio88@hotmail.com
DESCRIPTION cesspool.. its just a big bowl of crap!
SCRIPT cesspool.mrc
WEBSITE none
MTSVERSION 1.1
VERSION 1.1
PREFIX 3•10•
PARENTEXT 3•10•1 <text>
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nntt]
LOAD <pre> 3cesspool10 theme loaded3 - 1It's just a big bowl of crap!
CTCPSELF <pre> 3<ctcp>1 requested to:10 <nick>
CTCPREPLYSELF <pre> 3<ctcp>1 reply:10 <nick> 1(10<text>1)
MODE !script %:echo %::pre 3 $+ %::nick $+ 1 sets mode:3 $replace(%::modes,+,3+1,-,3-1)
JOIN <pre> 1Join:3 <nick> 1(10<address>1)
JOINSELF <pre> 1Now talking in10 <chan>
PART <pre> 1Part:3 <nick> 1(10<address>1)
TEXTCHAN 3[1<cmode><nick>3]1 <text>
TEXTQUERY 3[1<cmode><nick>3]1 <text>
KICK <pre> 3<nick>1 kicked10 <knick>: <text>
KICKSELF <pre> 3You1 have been kicked out of <chan> by 10<nick>: <text>
QUIT <pre> 1Quit:3 <nick> 1(10<address>1)
TOPIC <pre> 3<nick>1 changes topic:10 <text>
NICK <pre> 3<nick>1 is now known as10 <newnick>
TEXTCHANSELF 3[1<cmode><me>3]1 <text>
TEXTQUERYSELF 3[1<cmode><me>3]1 <text>
MODEUSER <pre> 3<me>1 sets usermode:10 <modes>
INVITE <pre> 1Invite:3 <nick> 1(10<chan>1)
NICKSELF <pre> 3You1 are now known as10 <newnick>
ACTIONCHAN 3*1 <nick> <text>
ACTIONQUERY 3*1 <nick> <text>
ACTIONCHANSELF 3*1 <me> <text>
ACTIONQUERYSELF 3*1 <me> <text>
CTCP <pre> 3<ctcp>1 requested from10 <nick>
CTCPCHAN <pre> 3<ctcp>1 requested from10 <nick>
CTCPREPLY  <pre> 3<ctcp>1 reply:10 <nick> 1(10<text>1)
SERVERERROR <pre> 3Servererror:10 <text>
NOTICE <pre> 1Notice:3 <nick> 1(10<text>1)
NOTICECHAN <pre> 1Notice:3 <nick> 1(10<text>1)3 <chan>
NOTICESELF <pre> 1Notice:3 <nick> 1(10<text>1)
NOTICESELFCHAN <pre> 1Notice:3 <nick> 1(10<text>1)3 <chan>
NOTIFY <pre> 1Notify:3 <nick> 1(10<text>1)
UNOTIFY <pre> 1Unotify:3 <nick> 1(10<text>1)
DNS <pre> 3Dns1 requested to 10<address> 
DNSERROR <pre> 1Unable to resolve 3dns1 from10 <nick>
DNSRESOLVE <pre> 3Dns1 resolved from10 <raddress>
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0
RGBCOLORS 255,255,255 95,95,95 0,0,127 158,200,134 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,128,0 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
WHOIS !script cesspool.whois
FONTDEFAULT VERDANA,10
FONTCHAN VERDANA,10
FONTQUERY VERDANA,10
CLINEOP 10
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 14
CLINEOWMER 3
CLINEENEMY 15
CLINEFRIEND 14
CLINEME 10
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> 1<text>
ECHOTARGET <pre> 1<text>
ERROR <pre> 1<text>
raw.332 <pre> 1Current topic:10 <text>
raw.333 <pre> 1Set by3 <nick>1 on10 <text>
raw.324 <pre> 1Current modes:10 <modes>
raw.329 !script return
raw.305 <pre> 3You1 are no longer marked as away.
raw.306 <pre> 3You1 are now marked as away.
raw.401 <pre> 1No such user:10 <nick>
raw.404 <pre> 1Cannot send to channel:10 +m
raw.467 <pre> 1Cannot join 3<chan>:10 +k
raw.471 <pre> 1Cannot join 3<chan>:10 +l
raw.473 <pre> 1Cannot join 3<chan>:10 +i
raw.474 <pre> 1Cannot join 3<chan>:10 +b
raw.475 <pre> 1Cannot join 3<chan>:10 +k
raw.353 !script return
raw.366 !script return
raw.327 <pre> 1<text>
raw.other <pre> 1<text>
raw.821 !script return
raw.822 !script return
RAW.001 <pre> 1<text>
RAW.002 <pre> 3Host: 10<server> running version <value>
RAW.003 <pre> 3Server1 created on:10 <value>
RAW.005 <pre> 3Protocols supported by this server:10 <text>
RAW.250 <pre> 3Total connection(s):10 <value>
RAW.251 <pre> 3Users:10 <users> 13Invisible:10 <text> 3Servers:10 <value>
RAW.252 <pre> 3Operator(s) online:10 <value>
RAW.253 <pre> 3Unknown connection(s):10 <value>
RAW.254 <pre> 3Number of channels formed:10 <value>
RAW.255 <pre> 3Local clients:10 <users> on <value> server(s)
RAW.265 <pre> 3Local users:10 <users> 3Max:10 <value>
RAW.266 <pre> 3Global users:10 <users> 3Max:10 <value>
RAW.302 <pre> 3Userhost:10 <nick> [<address>]
scheme1 Blue
scheme2 Red

[scheme1]
RGBCOLORS 255,255,255 95,95,95 0,0,127 145,200,255 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 21,138,255 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
[scheme2]
RGBCOLORS 255,255,255 95,95,95 0,0,127 255,128,128 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 210,0,0 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210 