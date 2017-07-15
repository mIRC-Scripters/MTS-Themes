[mts]
NAME Grey
AUTHOR Eric^^
EMAIL eric@eircweb.com
DESCRIPTION Grey theme
WEBSITE http://eircweb.com
MTSVERSION 1.2
VERSION 1.1
PREFIX ***
PARENTEXT 14(1<text>14)
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nn]
LOAD <pre> Grey theme loaded. By Eric^^ <Eric@eircweb.com>
CTCPSELF 1-> <nick> <ctcp> <text>
CTCPREPLYSELF 1-> <nick> 02<ctcp> <parentext>
MODE 14<pre> <nick> sets mode to:1 <modes>
JOIN <pre> 1<nick>14 has joined1 <chan>
JOINSELF 14<pre> Joining1 <chan>...
PART 14<pre> 1<nick>14 has left1 <chan> 1<parentext>
TEXTCHAN 14[1<cmode><nick>14]01 <text>
TEXTQUERY 14[1<cmode><nick>14]01 <text>
KICK 14<pre> 1<knick>14 has been kicked by1 <nick>1 <parentext>
KICKSELF 14<pre> You've been kicked by1 <nick>1 <parentext>
QUIT 14<pre>1 <nick>14 has quit irc <parentext>
TOPIC 14<pre> <nick> sets topic to:1 <text>
NICK 14<pre> 1<nick>14 is now known as1 <newnick>
NICKSELF 14<pre> 1<nick>14 is now known as1 <newnick>
TEXTCHANSELF 10[1<cmode><nick>10]01 <text>
TEXTQUERYSELF 10[1<cmode><nick>10]01 <text>
MODEUSER 14<pre> mode set to:1 <modes>
INVITE 14<pre>1 <nick> 14has invited you to join1 <chan>
ACTIONCHAN *1 <cmode><nick>1 <text>
ACTIONQUERY *1 <cmode><nick>1 <text>
ACTIONCHANSELF *1 <cmode><nick>1 <text>
ACTIONQUERYSELF *1 <cmode><nick>1 <text>
CTCP <pre>1 <nick>14 has requested <ctcp> <parentext> 14from you. 
CTCPCHAN <pre>1 <nick>14 has requested <ctcp> <parentext> from1 <chan>
CTCPREPLY <pre>1 <nick>14 <ctcp> reply:1 <text>
SERVERERROR <pre> 1Error:14 <text>
NOTICESERVER 14-1<nick>14-1 <text>
NOTICE 14-1<nick>14-1 <text>
NOTICECHAN 14-1<nick>:<chan>14-1 <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
NOTIFY 14<pre>1 <nick>1 <parentext> 14is online
UNOTIFY 14<pre>1 <nick>1 <parentext> 14is offline
DNS 14<pre> Looking up <address>...
DNSERROR 14<pre> Unable to resolve (1<iaddress><naddress>14)
DNSRESOLVE 14<pre> Resolved1 <naddress>14 (1<iaddress>14) to1 <raddress>
COLORS 15,1,1,1,14,14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,14
BASECOLORS 01,14,15,10
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT verdana,10
FONTCHAN verdana,10
FONTQUERY verdana,10
raw.311 1* Whois on <nick> (<address>) <realname>
raw.319 1* Channels: <chan>
raw.312 1* Server: <wserver>
raw.301 1* Away: <text>
raw.317 1* Signed on: <signontime>
raw.314 1* <nick> was (<address>) <realname>
raw.251 1* Connected to <server>. Users online: <users>. Invisible: <text>. Servers: <value>
raw.252 1* Operators online: <value> 
raw.253 1* Unknown connections: <value>
raw.254 1* Channels formed: <value>
raw.255 1* Clients: <users>. Servers: <value>
raw.332 14<pre> Topic:1 <text>
raw.333 14<pre> Topic set by1 <nick> 14on1 <text>
raw.324 14<pre> Modes:1 <modes>
raw.352 1* <chan> <nick> is <address> (<realname>)
raw.329 14<pre> Created on:1 <text>
raw.305 <pre> You're now back.
raw.306 <pre> You're now away.
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to: <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> :: There was no such nick
raw.421 <pre> No such command: /<value>
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
raw.467 <pre> Cannot join <chan> - It's keyed (+k)
raw.471 <pre> Cannot join <chan> - It's full (+l)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> Cannot join <chan> - It's invite only (+i)
raw.474 <pre> Cannot join <chan> - You're banned (+b)
raw.475 <pre> Cannot join <chan> - Incorrect key
raw.478 <pre> Cannot ban <text>. <chan> banlist is full.
raw.482 <pre> You're not a channel operator on <chan>
raw.511 <pre> You're /silence list is full.
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEREGULAR 01
CLINEOWNER 01
CLINEENEMY 04
CLINEFRIEND 10
CLINEME 10
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>