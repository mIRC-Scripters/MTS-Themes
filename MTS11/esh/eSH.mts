[MTS]
NAME eSH!
AUTHOR [CaMu]sX
EMAIL camu_the_master@hotmail.com
DESCRIPTION Theme with a lot of schemes in different colors
WEBSITE http://www.eScripting.com.ar
MTSVERSION 1.1
VERSION 1.0a
PREFIX <c1>•<c2>•
PARENTEXT 11[2<text>11]
TIMESTAMP ON
TIMESTAMPFORMAT <c1>[<c1>h:nnt]
LOAD <pre> eSH theme loaded !
UNLOAD <pre> eSH theme unloaded !
CTCPSELF 2!! <nick> / <ctcp> <text>
CTCPREPLYSELF 2!! <nick> 11<ctcp> <parentext>
MODE 2<pre> 2<nick> 11sets mode:2 <modes>
JOIN <pre> 2<nick>11 has joined2 <chan> 
JOINSELF <pre> 2Joining11 <chan>...
PART 2<pre> 2<nick>11 part2 <chan> 11<parentext>
TEXTCHAN 11[211<cmode>2<nick>11]11 <text>
TEXTQUERY 11[211<cmode>2<nick>11]11 <text>
KICK 2<pre> 2<knick>11 was kicked by2 <nick>11 <parentext>
KICKSELF 11<pre> was kicked by2 <nick>11 <parentext>
QUIT 2<pre>2 <nick>11 has quit irc <parentext>
TOPIC 2<pre>2<nick> 11 change topic to:2 <text>
NICK 2<pre> 2<nick> 11 is now known as2 <newnick>
NICKSELF 2<pre> 2<nick>11 is now known as2 <newnick>
TEXTCHANSELF 11[211<cmode>2<me>11]11 <text>
TEXTQUERYSELF 11[2<cmode><me>11]11 <text>
MODEUSER 2<pre> Mode changed to:11 <modes>
INVITE 2<pre>2 <nick> 11invite you to join2 <chan>
ACTIONCHAN <pre>*2 <cmode><nick>2 <text>
ACTIONQUERY <pre>*2 <cmode><nick>2 <text>
ACTIONCHANSELF <pre>*2 <cmode><me>2 <text>
ACTIONQUERYSELF <pre>*2 <cmode><me>2 <text>
CTCP <pre>2 <nick>11 request <ctcp> <parentext> 2from you. 
CTCPCHAN <pre>2 <nick>11 has requested <ctcp> <parentext> from2 <chan>
CTCPREPLY <pre>2 <nick>11 <ctcp> reply:2 <text>
SERVERERROR <pre> 2Error:2 <text>
NOTICESERVER 2<pre>2<nick>2-2 <text>
NOTICE 2<pre>2<nick>11-2 <text>
NOTICECHAN 2<pre> 2<nick>:<chan>11-2 <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
NOTIFY 2<pre>2 <nick>11 <parentext> 2is online
UNOTIFY 11<pre>2 <nick>11 <parentext> 2is offline
DNS 2<pre> Looking for 2<address>...
DNSERROR 2<pre> 11Can´t resolve (2<iaddress><naddress>2)
DNSRESOLVE 2<pre> Resolved11 <naddress>11 (2<iaddress>11) to2 <raddress>
COLORS 0,11,11,11,12,11,12,12,12,12,12,11,11,12,11,11,12,12,12,1,1,0,11,0,2,2,2,0
BASECOLORS 02,11,11,11
RGBCOLORS 0,0,0 255,255,255 89,172,255 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,128,255 89,172,255 255,0,255 128,124,128 208,204,208
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11
raw.311 2» Whois: 11<nick> 2(2<address>2) 2<realname>
raw.319 2» Channels: <chan>
raw.312 2» Server: <wserver>
raw.301 2» Away: <text>
raw.317 2» Started on: <signontime>
raw.314 2» <nick> was (<address>) <realname>
raw.251 2: Connected at <server>. Users online: <users>. Invisible: <text>. Servers: <value>
raw.252 2: Online operators: <value> 
raw.253 2: Unknow connections: <value>
raw.254 2: Channels created: <value>
raw.255 2: Clients: <users>. Servers: <value>
raw.332 2<pre>2Topic:2 <text>
raw.333 2<pre>2set by2 <nick> 11on2 <text>
raw.324 2<pre>2 Modes:2 <modes>
raw.352 2* <chan> 2 <nick> is 2 <address> [<realname>]
raw.329 2<pre> Created on:2 <text>
raw.305 2» Away OFF
raw.306 2» Away ON
raw.401 2» No such nick: <nick>
raw.403 2» No such channel: <chan>
raw.404 2» Can´t send text: <chan>
raw.405 2» Can´t join at <chan> :: You´re into too many channels.
raw.406 2» Whowas <nick> :: no was nickname
raw.421 2» Unknow command: /<value>
raw.432 2» Invalid nickname: <nick>
raw.433 2» Nickname is already in use: <nick>
raw.436 2» Nick collision with: <nick>
raw.438 2» Too nickname changes, wait few minutes...
raw.439 2» <text>
raw.441 2» <nick> are not in <chan>
raw.442 2» You are not in <chan>
raw.443 2» <nick> is already on channel
raw.461 2» Not enough parameters: <text>
raw.467 2» Can´t join at <chan> / Requiere contraseña (+k)
raw.471 2» Can´t join at <chan> / Lleno (+l)
raw.472 2» Unknow character: <text>
raw.473 2» Can´t join at <chan> / Invite only [+i]
raw.474 2» Can´t join at <chan> / You´re banned [+b]
raw.475 2» Can´t join at <chan> / Invalid key
raw.478 2» Can´t put ban <text>. <chan> / Banlist full
raw.482 2» You are not operator / <chan>
raw.511 2» Silence ignored / Silence list is full
CLINEOP 02
CLINEHOP 02
CLINEVOICE 11
CLINEREGULAR 12
CLINEOWNER 11
CLINEENEMY 04
CLINEFRIEND 10
CLINEME 11
CLineCharOwner !
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
SCHEME1 Orange
SCHEME2 Green
SCHEME3 Blue+
SCHEME4 Shadow
SCHEME5 Ice
SCHEME6 White&Grey
SCHEME7 Fire Sgoop

[scheme1]
RGBCOLORS 0,0,0 255,255,255 255,182,108 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 255,128,0 255,188,121 255,0,255 128,124,128 208,204,208

[scheme2]
RGBCOLORS 0,0,0 255,255,255 147,255,147 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,255,0 147,255,147 255,0,255 128,124,128 208,204,208

[scheme3]
RGBCOLORS 0,47,94 255,255,255 100,177,255 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,128,255 119,187,255 255,0,255 128,124,128 208,204,208

[scheme4]
RGBCOLORS 0,0,0 255,255,255 118,118,118 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 196,196,196 110,110,110 255,0,255 128,124,128 208,204,208

[scheme5]
RGBCOLORS 255,255,255 0,0,0 0,107,215 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,107,215 102,179,255 255,0,255 128,124,128 208,204,208

[scheme6]
RGBCOLORS 255,255,255 0,0,0 128,128,128 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 128,128,128 192,192,192 255,0,255 128,124,128 208,204,208

[scheme7]
RGBCOLORS 45,15,0 0,0,0 255,128,64 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 255,111,111 255,128,64 255,0,255 128,124,128 208,204,208