[mts]
NAME WinXP
AUTHOR Eric^^
EMAIL eric@eircweb.com
DESCRIPTION Windows XP theme for eIRC
WEBSITE http://eircweb.com
MTSVERSION 1.1
VERSION 2.0
PREFIX 12(0>12)
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nn]
LOAD <pre> XP theme (v1.0) loaded. By Eric^^ <Eric@eircweb.com>
CTCPSEND <pre> <nick> <ctcp> <text>
CTCPREPLYSELF <pre> <nick> <text>
MODE <pre> <nick> sets mode 10(12<modes>10)
JOIN <pre> 15<nick> has joined <chan> 10(12<address>10)
PART <pre> 15<nick> has left <chan> 10(12<address>10)
TEXTCHAN 12[14<cmode>00<nick>12>10 <text>
TEXTQUERY 12[00<nick>12>10 <text>
KICK <pre> 15<nick> has kicked <knick> 10(12<text>10)
KICKSELF <pre> 15You've been kicked by <nick> 10(12<text>10)
QUIT <pre> 00<nick> has left IRC 10(12<text>10)
TOPIC 03<pre> <nick> sets topic 10(12<text>10)
NICK 03<pre> 15<nick> is now known as <newnick>
TEXTCHANSELf 12[14<cmode>15<nick>12>10 <text>
TEXTQUERYSELF 12[15<nick>12>10 <text>
INVITE <pre> 00You've been invited to join <chan> by <nick>
ACTIONCHAN 10* 00<nick>10 <text>
ACTIONQUERY 10* 00<nick>10 <text>
ACTIONQUERYSELF 10* 00<nick>10 <text>
ACTIONCHANSELF 10* 00<nick>10 <text>
CTCP <pre> <nick> <ctcp> 10(12<text>10)
CTCPREPLY <pre> <nick> <ctcp> 10(12<text>10)
NOTICE 10(12<nick>10)15 <text>
NOTICECHAN 10(12<nick>10)15 <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <Text>
NOTIFY <pre> 9<nick> is online
UNOTIFY <pre> 9<nick> is offline
DNS <pre> 10Looking up <address>...
DNSERROR <pre> 10Unable to resolve (<iaddress><naddress>).
DNSRESOLVE <pre> 10Resolved <naddress> (12<iaddress>10) to (12<raddress>10)
COLORS 2,10,10,15,10,0,10,10,12,12,15,10,10,9,10,10,10,12,12,12,10,10,1,2,10,15
BASECOLORS 10,15,12,01
RGBCOLORS 255,255,255 0,0,0 0,0,190 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 200,230,255 0,130,220 0,150,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT tahoma,12
FONTCHAN tahoma,12
FONTQUERY tahoma,12
raw.311 15::12 Whois10: <nick> (12<address>10) is <realname>
raw.319 15::10 12Channels: <chan>
raw.312 15::10 12Server: <wserver>
raw.301 15::10 12Away reason: <text>
raw.317 15::10 12Signed on: <signontime>
raw.318 15::10 12End of Whois
WHOWAS <nick> was (02<address>) :: (02<realname>)
raw.251 15::12 Users online10: <users> (12Invisible10: <value>)
raw.252 15::12 Operators online10: <value> 
raw.253 15::12 Unknown connections10: <value>
raw.254 15::12 Channels formed10: <value>
raw.332 <pre> 10Topic:00 <text>
raw.333 <pre> 10Topic set by0 <nick> 10on00 <text>
raw.324 <pre> 10Modes:00 <modes>
raw.329 <pre> 10Created on00 <text>
raw.305 <pre> Back.
raw.306 <pre> Away.
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to: <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> - There was no such nick
raw.421 <pre> /<value>10: unknown command
raw.432 <pre> Invalid nickname: <nick>
raw.433 <pre> Nickname already in use: <nick>
raw.436 <pre> Nickname collision with: <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Target changed too fast, please wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan>
raw.461 <pre> More parameters needed for: <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan> - It's keyed (+k)
raw.471 <pre> Cannot join <chan> - It's full (+l)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> Cannot join <chan> - It's invite only (+i)
raw.474 <pre> Cannot join <chan> - You're banned (+b)
raw.475 <pre> Cannot join <chan> - Incorrect key
raw.478 <pre> Cannot ban <text>. <chan> banlist is full.
raw.482 <pre> You're not a channel operator on <chan>
raw.511 <pre> You're /silence list is full.
raw.352 15::10 <nick> is <address> (<realname>)
CLINEOP 15
CLINEHOP 15
CLINEVOICE 15
CLINEREGULAR 10
CLINEOWMER 15
CLINEENNEMY 4
CLINEFRIEND 12
CLINEME 00
CLINECHAROP @
CLINECHAROWNER .
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR
QUERYECHO <pre> <text>
CHANECHO <pre> <text>
ERROR <pre> <text>