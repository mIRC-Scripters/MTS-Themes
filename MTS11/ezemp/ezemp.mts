[mts]
NAME ezemp
AUTHOR Blaxheim
EMAIL none
DESCRIPTION ezemp theme
SCRIPT ezemp.mrc
WEBSITE none
MTSVERSION 1.1
VERSION 1.1
PREFIX 1•••
PARENTEXT 1••• <text>
TIMESTAMP ON
TIMESTAMPFORMAT [HH:nntt]
LOAD <pre> ezemp loaded
UNLOAD <pre> ezemp unloaded
CTCPSELF !script %:echo %::pre 1Ctcp/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick
CTCPREPLYSELF !script %:echo %::pre 1Ctcpreply/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick 1[ $+ %::text $+ ]
MODE <pre> 1Mode/<chan>1 [<nick>/<modes>]
JOIN <pre> 1Join/<chan>1 [<nick>/<address>]
JOINSELF <pre> 1Now talking in1 <chan>
PART <pre> 1Part/<chan>1 [<nick>/<address>]
TEXTCHAN !script %:echo 1[ $+ %::cmode $+ %::nick $+ ]1 %::text
TEXTQUERY !script %:echo 1[ $+ %::nick $+ ]1 %::text
KICK <pre> 1Kick/<chan>1 <nick> [<knick>]1 <text>
KICKSELF <pre> 1Kick/<chan>1 <nick> [<me>]1 <text>
QUIT <pre> 1Quit/<chan>1 [<nick>/<address>] <text>
TOPIC <pre> 1Topic/<chan>1 <nick> [<text>]
NICK <pre> 1Nick/<chan>1 <nick> •• <newnick>
TEXTCHANSELF !script %:echo 1[ $+ %::cmode $+ %::me $+ ]1 %::text
TEXTQUERYSELF !script %:echo 1[ $+ %::me $+ ]1 %::text
MODEUSER <pre> 1<me> Sets usermode:1 <modes>
INVITE <pre> 1Invite1 <nick> [<chan>]
NICKSELF <pre> 1Nick/<chan>1 <nick> •• <newnick>
ACTIONCHAN 1* <nick> <text>
ACTIONQUERY 1* <nick> <text>
ACTIONCHANSELF 1* <me> <text>
ACTIONQUERYSELF 1* <me> <text>
CTCP !script %:echo %::pre 1Ctcp/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick
CTCPCHAN <pre> 1Ctcp/<ctcp> 1<nick>
CTCPREPLY !script %:echo %::pre 1Ctcpreply/ $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick 1[ $+ %::text $+ ]
SERVERERROR <pre> 1Servererror [<text>]
NOTICE <pre> 1Notice 1<nick> [<text>]
NOTICECHAN <pre> 1Notice/<chan> 1<nick> [<text>]
NOTICESELF <pre> 1Notice 1<nick> [<text>]
NOTICESELFCHAN <pre> 1Notice/<chan> 1<nick> [<text>]
NOTIFY <pre> 1Notify 1<nick> [<text>]
UNOTIFY <pre> 1Unotice 1<nick> [<text>]
DNS <pre> 1Dns 1<nick> [<address>]
DNSERROR <pre> 1Dns 1[<unabled to resolve>]
DNSRESOLVE 1Dns 1<nick> [<raddress>] resolved
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 230,230,210 255,255,0 0,252,0 0,70,145 15,0,255 0,0,252 10,82,68 128,128,128 210,210,210
FONTDEFAULT TAHOMA,11
FONTCHAN TAHOMA,11
FONTQUERY TAHOMA,11
whois !script ezemp.whois
raw.332 <pre> 1Current topic:1 <text>
raw.317 !script return
raw.333 !script return
raw.324 !script return
raw.329 !script return
raw.312 !script return
raw.305 <pre> 1You1 are no longer marked as away.
raw.306 <pre> 1You1 are no longer marked as away.
raw.401 <pre> 1No such user:1 <nick>
raw.404 <pre> 1Cannot send to channel:1 +m
raw.467 <pre> 1Cannot join <chan>:1 +k
raw.471 <pre> 1Cannot join <chan>:1 +l
raw.473 <pre> 1Cannot join <chan>:1 +i
raw.474 <pre> 1Cannot join <chan>:1 +b
raw.475 <pre> 1Cannot join <chan>:1 +k
raw.353 !script return
raw.366 !script return
raw.327 <pre> 1<text>
raw.other <pre> 1<text>
raw.821 !script return
raw.822 !script return
RAW.001 <pre> 1<text>
RAW.002 <pre> 1Host: [<server>] running version [<value>]
RAW.003 <pre> 1Server created on:1 [<value>]
RAW.005 <pre> 1Protocols supported by this server:1 [<text>]
RAW.250 <pre> 1Total connection(s):1 [<value>]
RAW.251 <pre> 1Users:1 [<users>] 1Invisible:1 [<text>] 1Servers:1 [<value>]
RAW.252 <pre> 1Operator(s) online:1 [<value>]
RAW.253 <pre> 1Unknown connection(s):1 [<value>]
RAW.254 <pre> 1Number of channels formed:1 [<value>]
RAW.255 <pre> 1Local clients:1 [<users>]1 on [<value>]1 server(s)
RAW.265 <pre> 1Local users:1 [<users>]1 1Max:1 [<value>]
RAW.266 <pre> 1Global users:1 [<users>]1 1Max:1 [<value>]
RAW.302 <pre> 1Userhost:1 <nick> [<address>]
CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 1
CLINEOWMER 1
CLINEENEMY 1
CLINEFRIEND 1
CLINEME 4
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> 1<text>
ECHOTARGET <pre> 1<text>
ERROR <pre> 1<text>
scheme1 Beige
scheme2 Gris
[scheme1]
COLORS 7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,7,1,1,1,7
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 230,230,210 255,255,0 0,252,0 0,70,145 15,0,255 0,0,252 10,82,68 128,128,128 210,210,210
[scheme2]
COLORS 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1,1,15
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 230,230,210 255,255,0 0,252,0 0,70,145 15,0,255 0,0,252 10,82,68 128,128,128 210,210,210