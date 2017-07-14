[mts]
NAME aerials
AUTHOR Adam^
EMAIL aserio88@hotmail.com
DESCRIPTION aerials theme using BitchX scheme.
SCRIPT aerials.mrc
WEBSITE none
MTSVERSION 1.1
VERSION 1.1
PREFIX 13∙12√13∙
PARENTEXT 13∙12√13∙12 <text>
TIMESTAMP OFF
TIMESTAMPFORMAT ∙HH:NN∙
LOAD <pre> 12Aerials theme loaded.
UNLOAD <pre> 12Aerials theme unloaded.
CTCPSELF !script %:echo %::pre 12ctcp1/13 $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick
CTCPREPLYSELF !script %:echo %::pre 12ctcpreply1/13 $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick 12(13 $+ %::text $+ 12)
MODE <pre> 12mode1/13<chan>1 <nick> 12(13<modes>12)
JOIN <pre> 12join1/13<chan>1 <nick> 12(13<address>12)
JOINSELF <pre> 12Now talking in13 <chan>
PART <pre> 12part1/13<chan>1 <nick> 12(13<address>12)
TEXTCHAN !script %:echo  13<12 $+ %::cmode $+ %::nick $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 13>12 %::text
TEXTQUERY !script %:echo  13<12 $+ %::nick $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 13>12 %::text
KICK <pre> 12kick1/13<chan>1 <nick> 12(13<knick>12)1 <text>
KICKSELF <pre> 12kick1/13<chan>1 <nick> 12(13<me>12)1 <text>
QUIT <pre> 12quit1/13<chan>1 <nick> 12(13<address>12)1 <text>
TOPIC <pre> 12topic1/13<chan>1 <nick> 12(13<text>12)
NICK <pre> 12nick1/13<chan>1 <nick> 13->1 <newnick>
TEXTCHANSELF !script %:echo  13<12 $+ %::cmode $+ %::me $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 13>12 %::text
TEXTQUERYSELF !script %:echo  13<12 $+ %::me $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 13>12 %::text
MODEUSER <pre> 1<me>12 sets usermode:1 <modes>
INVITE <pre> 12invite1 <nick> 12(13<chan>12)
NICKSELF <pre> 12nick1/13<chan>1 <nick> 13->1 <newnick>
ACTIONCHAN 13≡12 <nick> <text>
ACTIONQUERY 13≡12 <nick> <text>
ACTIONCHANSELF 13≡12 <me> <text>
ACTIONQUERYSELF 13≡12 <me> <text>
CTCP !script %:echo %::pre 12ctcp1/13 $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 $+ %::nick 
CTCPCHAN <pre> 12ctcp1/13<ctcp> 1<nick>
CTCPREPLY !script %:echo %::pre 12ctcpreply1/13 $+ $replace(%::ctcp,VERSION,version,TIME,time,PING,ping) 1 %::nick 12(13 $+ %::text $+ 12)
SERVERERROR <pre> 12servererror 12(13<text>12)
NOTICE <pre> 12notice 1<nick> 12(13<text>12)
NOTICECHAN <pre> 12notice1/13<chan> 1<nick> 12(13<text>12)
NOTICESELF <pre> 12notice 1<nick> 12(13<text>12)
NOTICESELFCHAN <pre> 12notice1/13<chan> 1<nick> 12(13<text>12)
NOTIFY <pre> 12notify 1<nick> 12(13<text>12)
UNOTIFY <pre> 12unotify 1<nick> 12(13<text>12)
DNS <pre> 12dns 1<nick> 12(13<address>12)
DNSERROR <pre> 12dns 12(13unable to resolve12)
DNSRESOLVE <pre> 12dns 1<nick> 12(13<raddress>12)1 resolved
COLORS 11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,11,12,12,12,11
RGBCOLORS 255,255,255 64,64,64 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 64,128,128 201,198,180 113,102,81 87,82,68 128,128,128 210,210,210
FONTDEFAULT TERMINAL,13
FONTCHAN TERMINAL,13
FONTQUERY TERMINAL,13
whois !script aerials.whois
raw.332 <pre>12 Current topic:13 <text>
raw.317 !script return
raw.333 !script return
raw.324 !script return
raw.329 !script return
raw.312 !script return
raw.305 <pre> 12You13 are no longer marked as away.
raw.306 <pre> 12You13 are no longer marked as away.
raw.401 <pre> 12No such user:1 <nick>
raw.404 <pre> 12Cannot send to channel:1 +m
raw.467 <pre> 12Cannot join <chan>:1 +k
raw.471 <pre> 12Cannot join <chan>:1 +l
raw.473 <pre> 12Cannot join <chan>:1 +i
raw.474 <pre> 12Cannot join <chan>:1 +b
raw.475 <pre> 12Cannot join <chan>:1 +k
raw.353 !script return
raw.366 !script return
raw.327 <pre> 12<text>
raw.other <pre> 12<text>
raw.821 !script return
raw.822 !script return
RAW.001 <pre>12 <text>
RAW.002 <pre> 12Host: 13<server> running version <value>
RAW.003 <pre> 12Server created on:13 <value>
RAW.005 <pre> 12Protocols supported by this server:13 <text>
RAW.250 <pre> 12Total connection(s):13 <value>
RAW.251 <pre> 12Users:13 <users> 12Invisible:13 <text> 12Servers:13 <value>
RAW.252 <pre> 12Operator(s) online:13 <value>
RAW.253 <pre> 12Unknown connection(s):13 <value>
RAW.254 <pre> 12Number of channels formed:13 <value>
RAW.255 <pre> 12Local clients:13 <users> on <value> server(s)
RAW.265 <pre> 12Local users:13 <users> 12Max:13 <value>
RAW.266 <pre> 12Global users:13 <users> 12Max:13 <value>
RAW.302 <pre> 12Userhost:13 <nick> [<address>]
CLINEOP 12
CLINEHOP 00
CLINEVOICE 13
CLINEREGULAR 1
CLINEOWMER 12
CLINEENEMY 12
CLINEFRIEND 12
CLINEME 12
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> 12<text>
ECHOTARGET <pre> 12<text>
ERROR <pre> 12<text>
scheme1 Light Blue
scheme2 Purple/Pink
scheme3 Green
[scheme1]
COLORS 11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,11,12,12,12,11
RGBCOLORS 255,255,255 58,70,80 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 180,192,210 104,129,147 71,86,99 127,127,127 210,210,210
[scheme2]
COLORS 11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,11,12,12,12,11
RGBCOLORS 255,255,255 107,58,112 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 185,170,183 171,104,179 148,67,141 127,127,127 210,210,210
[scheme3]
COLORS 11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,12,11,12,12,12,11
RGBCOLORS 255,255,255 63,73,63 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 140,155,141 92,104,91 71,81,70 127,127,127 210,210,210