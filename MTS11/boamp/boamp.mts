[mts]
NAME boamp
AUTHOR Eric^^
SCRIPT boamp.mrc
EMAIL ericn@accesswave.ca
DESCRIPTION Theme designed to match boamp skin for winamp
WEBSITE http://accesswave.ca/~ericn/
MTSVERSION 1.1
VERSION 1.0
PREFIX 8•
PARENTEXT 8(<text>8)
TIMESTAMP ON
TIMESTAMPFORMAT 8[04HH:nn8]
LOAD <pre> boamp theme loaded.
CTCPSELF [08CTCP] -> <nick> 08<ctcp> <text>
CTCPCHANSELF [08CTCP] -> <chan> 08<ctcp> <text>
CTCPREPLYSELF [08CTCPREPLY] -> <nick> 08<ctcp> <parentext>
TEXTCHANSELF 8/7<cmode><me>8] <text>
TEXTQUERYSELF 8/7<cmode><me>8] <text>
TEXTCHAN 8/4<cmode><nick>8] <text>
TEXTQUERY 8/4<cmode><nick>8] <text>
ACTIONCHAN <pre> <cmode><nick> <text>
ACTIONQUERY <pre> <nick> <text>
ACTIONCHANSELF <pre> <cmode><me> <text>
ACTIONQUERYSELF <pre> <me> <text>
MODE <pre> 04<nick> sets mode to:8 <modes>
JOIN <pre> <nick> 8(<address>8) has joined <chan>
JOINSELF !script 
PART <pre> <nick> 8(<address>8) has left <chan> <parentext>
KICK <pre> 4<knick> was kicked by <nick>: <text>
KICKSELF <pre> 4You've been kicked by <nick>: <text>
QUIT <pre> <nick> 8(<address>8) has left irc <parentext>
TOPIC <pre> 4<nick> sets topic to:8 <text>
NICK <pre> <nick> is now known as <newnick>
MODEUSER <pre> Mode: <modes>
INVITE <pre> <nick> has invited you to join <chan>
NICKSELF <pre> You are now known as <newnick>
CTCP <pre> <nick> requests <ctcp> <parentext> from you
CTCPCHAN <pre> <nick> requests <ctcp> <parentext> from <chan>
CTCPREPLY <pre> 8<nick>'s <ctcp> reply: <text>
SERVERERROR <pre> Error: <text>
NOTICESERVER 4(8<nick>4) <text>
NOTICE  4(8<nick>4) <text>
NOTICECHAN  4(8<nick>4:8<chan>4) <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
NOTIFY <pre> <nick> is online <parentext>
UNOTIFY <pre> <nick> is offline <parentext>
DNS <pre> 7Looking up8 <address>...
DNSERROR <pre> 7Unable to resolve8 <iaddress><naddress>
DNSRESOLVE <pre> 7Resolved8 <naddress> (<iaddress>) to <raddress>
COLORS 2,12,4,4,8,4,7,7,7,7,7,12,12,8,8,12,4,4,7,4,8,1,8,2,4,8
BASECOLORS 02,03,04,01
RGBCOLORS 255,255,255 0,0,0 49,66,78 0,100,60 160,135,77 128,0,0 160,0,160 215,181,103 226,198,11 0,255,0 0,144,144 0,255,255 100,145,166 255,0,255 128,128,128 208,208,208
FONTDEFAULT verdana,11
FONTCHAN verdana,11
FONTQUERY verdana,11
WHOIS !script boamp.whois
raw.317 !script
raw.301 !script
raw.311 !script
raw.312 !script
raw.319 !script
raw.318 !script
raw.314 <nick> was 8(04<address>8) (04<realname>8)
raw.251 8Lusers:4 <users> users, <text> invisible, <value> servers.
raw.252 8Operators online:4 <value> 
raw.253 8Unknown connections:4 <value>
raw.254 8Channels formed:4 <value>
raw.255 4Clients: <users>, Servers: <value>
raw.332 <pre> 4Topic:8 <text>
raw.333 <pre> 4Topic set by8 <nick> 4on8 <text>
raw.324 <pre> 4Modes:08 <modes>
raw.329 <pre> 4Created on08 <text>
raw.352 <pre> <chan> <nick> is <address> (<realname>)
raw.305 <pre> 4You're now8 back.
raw.306 <pre> 4You're now8 away.
raw.341 <pre> <nick> has been invited to <chan>
raw.401 <pre> 4No such nickname:8 <nick>
raw.403 <pre> 4No such channel:8 <chan>
raw.404 <pre> 4Cannot send text/data to:8 <chan>
raw.405 <pre> 4Cannot join <chan>. You're on too many channels.
raw.406 <pre> 4Whowas on <nick>:8 There was no such nick
raw.421 <pre> 4No such command:8 /<value>
raw.432 <pre> 4Invalid nickname:8 <nick>
raw.433 <pre> 4Nickname already in use:8 <nick>
raw.436 <pre> 4Nickname collision with:8 <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Target changed too fast, please wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan>
raw.461 <pre> 4More parameters needed for:8 <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> 4Cannot join <chan>:8 It's keyed (+k)
raw.471 <pre> 4Cannot join <chan>:8 It's full (+l)
raw.472 <pre> 4Unknown character:8 <text>
raw.473 <pre> 4Cannot join <chan>:8 It's invite only (+i)
raw.474 <pre> 4Cannot join <chan>:8 You're banned (+b)
raw.475 <pre> 4Cannot join <chan>:8 Incorrect key
raw.478 <pre> 4Cannot ban <text>:8 <chan> banlist is full.
raw.482 <pre> You're not a channel operator on <chan>
raw.511 <pre> You're ignore list is full.
CLINEOP 07
CLINEHOP 07
CLINEVOICE 07
CLINEREGULAR 04
CLINEOWNER 07
CLINEENEMY 10
CLINEFRIEND 07
CLINEME 08
CLineCharOwner 12.
CLineCharOP 12@
CLineCharHOP 12%
CLineCharVoice 12+
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
scheme1 Black background

[scheme1]
COLORS 1,12,4,4,8,4,7,7,7,7,7,12,12,8,8,12,4,4,7,4,8,1,8,1,4,8