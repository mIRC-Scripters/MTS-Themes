[mts]
NAME graystatan
AUTHOR AdamS^
EMAIL AdamS@nejashare.com
DESCRIPTION graysatan!
SCRIPT grays.mrc
WEBSITE none
MTSVERSION 1.1
VERSION 1.1
PREFIX 1314
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nntt]
LOAD <pre> 13 graysatan thm loaded
CTCPSELF <pre> 15ctcp14(13<ctcp>14):0 <nick>
CTCPREPLYSELF <pre> 15ctcpreply14(13<ctcp>14):0 <nick> 1413<text>14
MODE <pre> 15mode14(13<chan>14):0 <nick> 1413<modes>14
JOIN <pre> 15join14(13<chan>14):0 <nick> 1413<address>14
JOINSELF <pre> 14Now talking in0 <chan>
PART <pre> 15part14(13<chan>14):0 <nick> 1413<address>14
TEXTCHAN !script %:echo %::pre 13ù15 $+ %::cmode $+ %::nick $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 13ù15 %::text
TEXTQUERY !script %:echo %::pre 13ù15 $+ %::nick $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 13ù15 %::text
KICK <pre> 15kick14(13<chan>14):0 <knick> 1413<text>14 15<text>
KICKSELF <pre> 15You14 have been kicked out of <chan> by <nick> 1413<text>14
QUIT <pre> 15quit14(13<chan>14):0 <nick> 1413<address>14 15<text>
TOPIC <pre> 15topic14(13<chan>14):0 <nick> 1413<text>14
NICK <pre> 15nick14(13<chan>14):0 <nick> 1413<newnick>14
TEXTCHANSELF !script %:echo %::pre 13ù15 $+ %::cmode $+ %::me $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::me))) $+ 13ù15 %::text
TEXTQUERYSELF !script %:echo %::pre 13ù15 $+ %::me $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::me))) $+ 13ù15 %::text
MODEUSER <pre> 15<me>14 sets usermode:0 <modes>
INVITE <pre> 15invite14(13<chan>14):0 <nick>
NICKSELF <pre> 15nick14(13<server>14):0 <nick> 1413<newnick>14
ACTIONCHAN <pre> 13ð15 <nick> <text>
ACTIONQUERY <pre> 13ð15 <nick> <text>
ACTIONCHANSELF <pre> 13ð15 <me> <text>
ACTIONQUERYSELF <pre> 13ð15 <me> <text>
CTCP <pre> 15ctcp14(13<ctcp>14):0 <nick>
CTCPCHAN <pre> 15ctcp14(13<ctcp>14):0 <nick>
CTCPREPLY  <pre> 15ctcpreply14(13<ctcp>14):0 <nick> 1413<text>14
SERVERERROR <pre> 15Servererror:0 <text>
NOTICE 14-15<nick>14(13<address>14)-15 <text>
NOTICECHAN 14-15<nick>14(13<address>14)-15<chan>14-15 <text>
NOTICESELF 14-15<nick>14(13<address>14)-15 <text>
NOTICESELFCHAN 14-15<nick>14(13<address>14)-15<chan>14-15 <text>
NOTIFY <pre> 15notify14(13<nick>14):0 <text>
UNOTIFY <pre> 15unotify14(13<nick>14):0 <text>
DNS <pre> 15Dns14 requested to 0<address> 
DNSERROR <pre> 14Unable to resolve 15dns14 from0 <nick>
DNSRESOLVE <pre> 15Dns14 resolved from0 <raddress>
COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15,15
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,144,144 0,255,255 0,0,255 95,95,95 128,128,128 208,208,208
WHOIS !script grays.whois
FONTDEFAULT TERMINAL,12
FONTCHAN TERMINAL,12
FONTQUERY TERMINAL,12
CLINEOP 15
CLINEHOP 15
CLINEVOICE 15
CLINEREGULAR 15
CLINEOWMER 15
CLINEENEMY 15
CLINEFRIEND 15
CLINEME 0
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> 15<text>
ECHOTARGET <pre> 15<text>
ERROR <pre> 15<text>
raw.332 <pre> 15Current topic:0 <text>
raw.333 <pre> 14Set by15 <nick>14 on0 <text>
raw.324 <pre> 15Current modes:0 <modes>
raw.329 !script return
raw.312 !script return
raw.317 !script return
raw.305 <pre> 15You14 are no longer marked as away
raw.306 <pre> 15You14 are now marked as away
raw.401 <pre> 15No such user:0 <nick>
raw.404 <pre> 15Cannot send to channel:0 +m
raw.467 <pre> 15Cannot join <chan>:0 +k
raw.471 <pre> 15Cannot join <chan>:0 +l
raw.473 <pre> 15Cannot join <chan>:0 +i
raw.474 <pre> 15Cannot join <chan>:0 +b
raw.475 <pre> 15Cannot join <chan>:0 +k
raw.353 !script return
raw.366 !script return
raw.327 <pre> 15<text>
raw.other <pre> 15<text>
raw.821 !script return
raw.822 !script return
RAW.001 <pre> 15<text>
RAW.002 <pre> 15Host: 14<server> running version <value>
RAW.003 <pre> 15Server1 created on:14 <value>
RAW.005 <pre> 15Protocols supported by this server:14 <text>
RAW.250 <pre> 15Total connection(s):14 <value>
RAW.251 <pre> 15Users:14 <users> 15Invisible:14 <text> 15Servers:14 <value>
RAW.252 <pre> 15Operator(s) online:14 <value>
RAW.253 <pre> 15Unknown connection(s):14 <value>
RAW.254 <pre> 15Number of channels formed:14 <value>
RAW.255 <pre> 15Local clients:14 <users> on <value> server(s)
RAW.265 <pre> 15Local users:14 <users> 15Max:14 <value>
RAW.266 <pre> 15Global users:14 <users> 15Max:14 <value>
RAW.302 <pre> 15Userhost:14 <nick> [<address>]

