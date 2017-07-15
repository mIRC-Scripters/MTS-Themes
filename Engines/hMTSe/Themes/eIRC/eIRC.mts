[mts]
NAME eIRC
AUTHOR Eric^^
EMAIL eric@eircweb.com
DESCRIPTION Default eIRC theme, very plain, but nice.
SCRIPT eirc.mrc
WEBSITE http://eircweb.com
MTSVERSION 1.0
VERSION 1.0
PREFIX *
PARENTEXT (<text>)
TIMESTAMP 1[02HH:nn1]
LOAD <pre> eIRC theme (v1.0) loaded. By Eric^^ <Eric@eircweb.com>
CTCPSELF [02CTCP] -> <nick> 02<ctcp> <text>
CTCPREPLYSELF [02CTCPREPLY] -> <nick> 02<ctcp> <parentext>
MODE 3<pre> <nick> sets mode to: <modes>
JOIN <pre> Join: <nick>::<address>
JOINSELF <pre> Joining <chan>... 
PART <pre> Part: <nick>::<address>
TEXTCHAN <lt>02<cmode><nick><gt> <text>
TEXTQUERY <lt>02<cmode><nick><gt> <text>
KICK 3<pre> <nick> has kicked <knick>: <text>
KICKSELF 3<pre> You've been kicked by <nick>: <text>
QUIT 02<pre> Quit: <nick>::<address> <parentext>
TOPIC 03<pre> <nick> sets topic to: <text>
NICK 03<pre> <nick> is now known as <newnick>
TEXTCHANSELF <lt>02<cmode><me><gt> <text>
TEXTQUERYSELF <lt>02<cmode><me><gt> <text>
MODEUSER <pre> Mode: <modes>
INVITE <pre> <nick> has invited you to join <chan>
NICKSELF 4* You are now known as <newnick>
ACTIONCHAN *02 <cmode><nick> <text>
ACTIONQUERY *02 <nick> <text>
ACTIONCHANSELF *02 <cmode><me> <text>
ACTIONQUERYSELF *02 <me> <text>
CTCP <pre> Personal CTCP from <nick>::<ctcp> <parentext>
CTCPCHAN <pre> CTCP: <nick>::<ctcp> <parentext>
CTCPREPLY <pre> <nick>'s <ctcp> reply: <text>
SERVERERROR <pre> Error: <text>
NOTICESERVER (02<nick>) <text>
NOTICE (02<nick>) <text>
NOTICECHAN (02<nick>:<chan>) <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
NOTIFY <pre> <nick> (<text>) is online
UNOTIFY <pre> <nick> (<text>) is offline
DNS <pre> Looking up <address>...
DNSERROR <pre> Unable to resolve (<iaddress><naddress>).
DNSRESOLVE <pre> Resolved <naddress> (<iaddress>) to <raddress>
COLORS 0,6,4,5,2,3,3,3,2,2,3,1,5,7,12,1,3,2,2,5,1,0,1,0,1,7
BASECOLORS 2,3,4,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT tahoma,12
FONTCHAN tahoma,12
FONTQUERY tahoma,12
raw.311 !script default.whoisinit <nick> <address> <realname>
raw.319 14: 02Channels: <chan>
raw.312 14: 02Server: <wserver>
raw.301 12: 02Away: <text>
raw.317 !script default.whoisidle <idletime> <signontime>
raw.318 !script default.whoisend
raw.314 <nick> was (02<address>) :: (02<realname>)
raw.251 !script default.lusersinit <users> <text> <value>
raw.252 14: 02Operators online: <value> 
raw.253 14: 02Unknown connections: <value>
raw.254 14: 02Channels formed: <value>
raw.255 !script default.lusersend <users> <value>
raw.332 03<pre> Topic:02 <text>
raw.333 03<pre> Topic set by2 <nick> 3on2 <text>
raw.324 03<pre> Modes:02 <modes>
raw.352 <pre> <chan> :: <nick> is <address> (<realname>)
raw.329 03<pre> Created on02 <text>
raw.305 <pre> You're now back.
raw.306 <pre> You're now away.
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to: <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> :: There was no such nick
raw.421 !script default.unknowncommand /<value>
raw.432 <pre> Invalid nickname: <nick>
raw.433 <pre> Nickname already in use: <nick>
raw.436 <pre> Nickname collision with: <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Nickname changed too fast, please wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan>
raw.461 <pre> More parameters needed for: <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan> :: It's keyed (+k)
raw.471 <pre> Cannot join <chan> :: It's full (+l)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> Cannot join <chan> :: It's invite only (+i)
raw.474 <pre> Cannot join <chan> :: You're banned (+b)
raw.475 <pre> Cannot join <chan> :: Incorrect key
raw.478 <pre> Cannot ban <text>. <chan> banlist is full.
raw.482 <pre> You're not a channel operator on <chan>
raw.511 <pre> You're /silence list is full.
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEREGULAR 01
CLINEOWMER 01
CLINEENEMY 04
CLINEFRIEND 07
CLINEME 12
CLineCharOwner 09.
CLineCharOP 12@
CLineCharHOP 10%
CLineCharVoice 07+
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>