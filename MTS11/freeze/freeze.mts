[mts]
NAME freezed
AUTHOR dreamerx
EMAIL dreamerx@what.cc
DESCRIPTION freezed
SCRIPT freeze.mrc
WEBSITE http://www.psych0tic.net
VERSION 1.1
MTSVERSION 1.1
PREFIX 14·0x14·
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nn]
LOAD <pre> 11·0freezed11·
ctcpself <pre> -> <nick> <ctcp> <text>
ctcpreplyself <pre> -> <nick> <ctcp> <text>
PARENTEXT 11·14<text>11·
JOINSELF !script
MODE 14<pre> mode14/11<chan> 14·0<modes>14· by0 <nick>
JOIN <pre> 14<nick> 11·0<address>11·14 has joined <chan>
PART <pre> 14<nick> 11·0<address>11·14 has left <chan> 11·14<text>11·
TEXTCHAN 14<lt>0<cmode><nick>14<gt>15 <text>
TEXTQUERY 14<lt>0<nick>14<gt>15 <text>
KICK <pre> <knick> was kicked off <chan> by 11·0<nick>11· 11·(14<text>11)·
KICKSELF <pre> You were kicked off by14 <nick> 11·0<text>11·
QUIT 14<pre> 0SignOff 14<nick>:0 <text>
TOPIC <pre> Topic changed by14 <nick>14:15 <text>
NICK <pre> 14<nick> is now known as 11·0<newnick>11·
NICKSELF 11·0<nick>11·15 has morfed to0 11·0<newnick>11·
TEXTCHANSELF 14<lt>15<cmode><me>14<gt>0 <text>
TEXTQUERYSELF 14<lt>15<me>14<gt>0 <text> 
MODEUSER <pre> mode14/10<nick> 14[00<modes>14]
INVITE <pre> 14<nick>0 invites you to join14 <chan>
ACTIONCHAN 14·0x14·0 <cmode><nick>15 <text>
ACTIONQUERY 14·0x14·0 <cmode><nick>15 <text>
ACTIONCHANSELF 14·0x14·0 <cmode><me>15 <text>
ACTIONQUERYSELF 14·0x14·0 <cmode><me>15 <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
CTCPREPLY 11· 0<nick> 14·0<address>14·15 <ctcp> reply:0 <text>
CTCP 11· <nick> 11·0<address>14·0 requests <ctcp> (<text>) from you
CTCPCHAN 11· 0<nick> 14·0<address>14·0 requests <ctcp> (<text>) from <chan>
SERVERERROR <pre> Error: <text>
NOTICE 11·0<nick>11·15 <text>
NOTICESERVER 11·0<nick>11·15 <text>
NOTICECHAN 11·0<nick>:<chan>11·15 <text>
NOTIFY <pre> <nick> is online <parentext>
UNOTIFY <pre> <nick> is offline <parentext>
DNSERROR !script DNSX
DNSRESOLVE !script DNSX
BaseColors 00,15,14,04
colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,00,01,00,15
RGBColors 255,255,255 0,0,0 30,60,100 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,180,220 1,75,137 128,20,20 128,128,128 208,208,208
FontDefault Verdana,-7
FontQuery Verdana,-7
FontChan Verdana,-7
raw.353 !script names b %::text
raw.366 !script endofnames
raw.311 !script whoisinit %::nick %::address %::realname
raw.319 !script whoischans %::chan
raw.312 !script whoisserver %::wserver
raw.301 !script whoisaway %::text
raw.317 !script whoisidle %::idletime %::signontime
raw.314 <pre> 10<nick> was 14(15<address>14)  14(15<realname>14)
raw.251 !script lusersinit %::users %::text
raw.252 11|· 14(0ircops on irc14(0<value>14)0 
raw.253 11|· 14(0unknown connections14(0<value>14)0
raw.254 11|· 14(0channels formed14(0<value>14)0 
raw.255 !script lusersend %::users %::value
raw.333 <pre> Topic 14(0<chan>14): set by0 <nick>
raw.332 <pre> Topic 14(0<chan>14): <text>
raw.306 0Away14:15 You're now marked as being away
raw.305 0Away14:15 You're no longer marked as being away
raw.401 0Error14:14 11·0<nick>1411· :0 No such user
raw.403 0Error14:14 11·0<chan>1411· :0 No such channel
raw.404 0Error14:15 Unable to send text to channel  
raw.405 0Error14:14 11· 14(0<chan>14):0 Unable to join - You're on too many channels
raw.406 0Error14:14 11·14(0<nick>14):0 No such user
raw.421 0Error14:14 11·14(0<value>14):0 Unknown command
raw.432 0Error14:14 11·14(0<nick>14):0 Is an invalid nickname
raw.433 0Error14:14 11·14(0<nick>14):0 Nickname already taken
raw.438 0Error14:15 Nickname changed too fast, please wait a while and try again...
raw.439 0Error14:15 Target changed too fast, please wait a while and try again...
raw.441 0Error14:14 11·0<nick>14):0 Is not on <chan>
raw.442 0Error14:14 11·14(0<chan>14):0 You're not on that channel
raw.443 0Error14:14 11·14(0<nick>14):0 Is already on <chan>
raw.461 0Error14:14 11·14(0<text>14):0 Insuficient parameters
raw.467 0Error14:15 <chan> is locked (+k)
raw.471 0Error14:15 <chan> is full (+l)
raw.472 0Error14:15 Unknown character: <text>
raw.473 0Error14:15 <chan> is invite only (+i)
raw.474 0Error14:15 You're banned from <chan> (+b)
raw.475 0Error14:15 <chan> is locked (+k)
raw.478 0Error14:15 <chan> banlist is full
raw.482 0Error14:15 You're not an op on <chan>
raw.352 <pre> <chan> (<address>) <nick> * <realname>
CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 15
CLINEFRIEND 11
CLINEENEMY 04
CLINEME 11
CLINECHAROP 10@
CLINECHAROWNER 10.
CLINECHARHOP 10%
CLINECHARVOICE 10+
CLINECHARREGULAR 
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
RAW.Other !script