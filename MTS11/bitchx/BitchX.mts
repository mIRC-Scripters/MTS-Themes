[mts]
NAME BitchX
AUTHOR Eric^^
EMAIL eric@eircweb.com
DESCRIPTION BitchX IRC client theme with leeto burrito whois/dns/lusers display. Now with 2 schemes! :)
SCRIPT bx.mrc
WEBSITE http://eircweb.com
VERSION 1.2
MTSVERSION 1.1
PREFIX 04∙00φ04∙
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nn]
LOAD <pre> BitchX Loaded.
ctcpself <pre> -> <nick> <ctcp> <text>
ctcpreplyself <pre> -> <nick> <ctcp> <text>
PARENTEXT 11(00<text>11)
JOINSELF !script
MODE 4<pre> mode14/10<chan> 14[00<modes>14] by00 <nick>
JOIN <pre> 11<nick> 14[10<address>14]15 has joined <chan>
PART <pre> 15<nick> 14[15<address>14]15 has left <chan> 14[15<text>14]
TEXTCHAN 12<lt>15<cmode><nick>12<gt>15 <text>
TEXTQUERY 12<lt>15<nick>12<gt>15 <text>
KICK <pre> <knick> was kicked off by10 <nick> 14(15<text>14)
KICKSELF <pre> You were kicked off by10 <nick> 14(15<text>14)
QUIT 2<pre> 00SignOff 15<nick>:00 <text>
TOPIC <pre> Topic changed by10 <nick>14:15 <text>
NICK <pre> 00<nick> is now known as10 <newnick>
NICKSELF 14>15>00>15 You14(00<nick>14)15 are now known as00 <newnick>
TEXTCHANSELF 13<lt>15<cmode><me>13<gt>15 <text>
TEXTQUERYSELF 13<lt>15<me>13<gt>15 <text>
MODEUSER <pre> mode14/10<nick> 14[00<modes>14]
INVITE <pre> 14<nick>11 invites you to join14 <chan>
ACTIONCHAN ≡0 <cmode><nick>15 <text>
ACTIONQUERY ≡0 <cmode><nick>15 <text>
ACTIONCHANSELF ≡0 <cmode><me>15 <text>
ACTIONQUERYSELF ≡0 <cmode><me>15 <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
CTCPREPLY 14>15>00>9 <nick> 14[03<address>14]9 <ctcp> reply:15 <text>
CTCP 14>15>00>9 <nick> 14[03<address>14]3 requests <ctcp> (<text>) from you
CTCPCHAN 14>15>00>9 <nick> 14[03<address>14]3 requests <ctcp> (<text>) from <chan>
SERVERERROR <pre> Error: <text>
NOTICE 14[00<nick>14]15 <text>
NOTICESERVER 14[00<nick>14]15 <text>
NOTICECHAN 14[00<nick>:<chan>14]15 <text>
NOTIFY <pre> <nick> is online <parentext>
UNOTIFY <pre> <nick> is offline <parentext>
DNSERROR !script Bitchx.DNS
DNSRESOLVE !script Bitchx.DNS
Colors 1,13,4,9,11,15,3,15,15,15,15,15,11,11,15,15,15,11,15,9,15,2,15,1,15,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Fontdefault terminal,12
Fontchan terminal,12
Fontquery terminal,12
raw.341 <pre> <nick> has been invited to <chan>
raw.353 !script bitchx.names b %::text
raw.366 !script bitchx.endofnames
raw.311 !script bitchx.whoisinit %::nick %::address %::realname
raw.319 !script bitchx.whoischans %::chan
raw.312 !script bitchx.whoisserver %::wserver
raw.301 !script bitchx.whoisaway %::text
raw.317 !script bitchx.whoisidle %::idletime %::signontime
raw.318 !script
raw.314 <pre> 10<nick> was 14(15<address>14)  14(15<realname>14)
raw.251 !script bitchx.lusersinit %::users %::text
raw.252 9: 14[15ircops on irc14(00<value>14)]15 
raw.253 9: 14[15unknown connections14(00<value>14)]15 
raw.254 9: 14[15channels formed14(00<value>14)]15 
raw.324 !script
raw.329 !script
raw.255 !script bitchx.lusersend %::users %::value
raw.333 <pre> Topic 14(10<chan>14): set by10 <nick>
raw.332 <pre> Topic 14(10<chan>14): <text>
raw.306 0Away14:15 You're now marked as being away
raw.305 0Away14:15 You're no longer marked as being away
raw.401 0Error14:14 (10<nick>14):15 No such user
raw.403 0Error14:14 (10<chan>14):15 No such channel
raw.404 0Error14:15 Unable to send text to channel  
raw.405 0Error14:14 (10<chan>14):15 Unable to join - You're on too many channels
raw.406 0Error14:14 (10<nick>14):15 No such user
raw.421 0Error14:14 (10<value>14):15 Unknown command
raw.432 0Error14:14 (10<nick>14):15 Is an invalid nickname
raw.433 0Error14:14 (10<nick>14):15 Nickname already taken
raw.438 0Error14:15 Nickname changed too fast, please wait a while and try again...
raw.439 0Error14:15 Target changed too fast, please wait a while and try again...
raw.441 0Error14:14 (10<nick>14):15 Is not on <chan>
raw.442 0Error14:14 (10<chan>14):15 You're not on that channel
raw.443 0Error14:14 (10<nick>14):15 Is already on <chan>
raw.461 0Error14:14 (10<text>14):15 Insuficient parameters
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
SCHEME1 BX-White
RAW.Other <pre> <text>
BaseColors 10,11,15,14

[scheme1]
NOTICESERVER 14[01<nick>14]15 <text>
SNOTICE 14[01<nick>14]01 <text>
PREFIX 4∙1φ4∙
TIMESTAMP OFF
LOAD <pre> BitchX Loaded.
ctcpself <pre> -> <nick> <ctcp> <text>
ctcpreplyself <pre> -> <nick> <ctcp> <text>
PARENTEXT 12(01<text>12)
MODE 4<pre> mode14/10<chan> 14[01<modes>14] by01 <nick>
JOIN <pre> 12<nick> 14[10<address>14]01 has joined <chan>
PART <pre> 01<nick> 14[01<address>14]01 has left <chan> 14[01<text>14]
TEXTCHAN 12<lt>01<cmode><nick>12<gt>01 <text>
TEXTQUERY 12<lt>01<nick>12<gt>01 <text>
KICK <pre> <knick> was kicked off by10 <nick> 14(01<text>14)
KICKSELF <pre> You were kicked off by10 <nick> 14(01<text>14)
QUIT 2<pre> 01SignOff 01<nick>:01 <text>
TOPIC <pre> Topic changed by10 <nick>14:01 <text>
NICK <pre> 01<nick> is now known as10 <newnick>
NICKSELF 14>01>01>01 You14(01<nick>14)01 are now known as01 <newnick>
TEXTCHANSELF 13<lt>01<cmode><me>13<gt>01 <text>
TEXTQUERYSELF 13<lt>01<me>13<gt>01 <text> 
MODEUSER <pre> mode14/10<nick> 14[01<modes>14]
INVITE <pre> 14<nick>12 invites you to join14 <chan>
ACTIONCHAN ≡1 <cmode><nick>01 <text>
ACTIONQUERY ≡1 <cmode><nick>01 <text>
ACTIONCHANSELF ≡1 <cmode><me>01 <text>
ACTIONQUERYSELF ≡1 <cmode><me>01 <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
CTCPREPLY 14>01>01>3 <nick> 14[03<address>14]9 <ctcp> reply:01 <text>
CTCP 14>01>01>3 <nick> 14[03<address>14]3 requests <ctcp> (<text>) from you
CTCPCHAN 14>01>01>3 <nick> 14[03<address>14]3 requests <ctcp> (<text>) from <chan>
SERVERERROR <pre> Error: <text>
NOTICE 14[01<nick>14]01 <text>
NOTICECHAN 14[01<nick>:<chan>14]01 <text>
NOTIFY <pre> <nick> is online <parentext>
UNOTIFY <pre> <nick> is offline <parentext>
DNSERROR !script Bitchx.DNS2
DNSRESOLVE !script Bitchx.DNS2
raw.353 !script bitchx.names w %::text
raw.366 !script bitchx.endofnames2
Colors 0,13,4,9,12,1,3,1,1,1,1,1,12,12,1,1,1,12,1,9,1,0,1,0,1,1
raw.311 !script bitchx.whoisinit2 %::nick %::address %::realname
raw.319 !script bitchx.whoischans2 %::chan
raw.312 !script bitchx.whoisserver2 %::wserver
raw.301 !script bitchx.whoisaway2 %::text
raw.317 !script bitchx.whoisidle2 %::idletime %::signontime
raw.314 <pre> 10<nick> was 14(01<address>14)  14(01<realname>14)
raw.251 !script bitchx.lusersinit2 %::users %::value
raw.252 4: 14[01ircops on irc14(01<value>14)]01 
raw.253 4: 14[01unknown connections14(01<value>14)]01 
raw.254 4: 14[01channels formed14(01<value>14)]01 
raw.255 !script bitchx.lusersend2 %::users %::value
raw.333 <pre> Topic 14(10<chan>14): set by10 <nick>
raw.332 <pre> Topic 14(10<chan>14): <text>
raw.306 1Away14:01 You're now marked as being away
raw.305 1Away14:01 You're no longer marked as being away
raw.401 1Error14:14 (10<nick>14):01 No such user
raw.403 1Error14:14 (10<chan>14):01 No such channel
raw.404 1Error14:01 Unable to send text to channel  
raw.405 1Error14:14 (10<chan>14):01 Unable to join - You're on too many channels
raw.406 1Error14:14 (10<nick>14):01 No such user
raw.421 1Error14:14 (10<value>14):01 Unknown command
raw.432 1Error14:14 (10<nick>14):01 Is an invalid nickname
raw.433 1Error14:14 (10<nick>14):01 Nickname already taken
raw.438 1Error14:01 Nickname changed too fast, please wait a while and try again...
raw.439 1Error14:01 Target changed too fast, please wait a while and try again...
raw.441 1Error14:14 (10<nick>14):01 Is not on <chan>
raw.442 1Error14:14 (10<chan>14):01 You're not on that channel
raw.443 1Error14:14 (10<nick>14):01 Is already on <chan>
raw.461 1Error14:14 (10<text>14):01 Insuficient parameters
raw.467 1Error14:01 <chan> is locked (+k)
raw.471 1Error14:01 <chan> is full (+l)
raw.472 1Error14:01 Unknown character: <text>
raw.473 1Error14:01 <chan> is invite only (+i)
raw.474 1Error14:01 You're banned from <chan> (+b)
raw.475 1Error14:01 <chan> is locked (+k)
raw.478 1Error14:01 <chan> banlist is full
raw.482 1Error14:01 You're not an op on <chan>
raw.352 <pre> <chan> (<address>) <nick> * <realname>
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEREGULAR 01
CLINEFRIEND 12
CLINEENEMY 04
CLINEME 12
CLINECHAROP 10@
CLINECHAROWNER 10.
CLINECHARHOP 10%
CLINECHARVOICE 10+
CLINECHARREGULAR 
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
BaseColors 04,12,10,14