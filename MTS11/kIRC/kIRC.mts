[mts]
VERSION 1.0
 
NAME kIRC
AUTHOR Konan
EMAIL Konan@kirc.slackerzgaming.com
DESCRIPTION kIRC Main Theme
WEBSITE http://kirc.slackerzgaming.com
MTSVERSION 1.1
 
Script kIRC.mrc
 
BaseColors 09,00,00,09
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
COLORS 1,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,9
 
PREFIX <c1>º
PARENTEXT <c1>(<c2><text><c1>)
 
TIMESTAMP ON
TIMESTAMPFORMAT <c1>(<c2>hh:nntt<c1>)
 
LOAD <pre> <c1>kIRC<c2> Theme Loaded. By <c1>Konan0 (http://kirc.slackerzgaming.com) <pre>
 
MODE <pre> <c1><nick>0 sets mode to:<c1> <modes>
MODEUSER <pre> mode set to:<c1><modes>
 
JOIN <pre> <c1><nick> (<address>)<c2> has joined <c1><chan>
JOINSELF <pre> <c2>Joining<c1> <chan><c2>....
 
PART <pre> <c1><nick> (<address>)<c2> has left <c1><chan> <parentext>
 
TEXTCHAN <c1>[<cmode>0<nick><c1>]<c2> <text>
TEXTQUERY <c1>[<cmode>0<nick><c1>]<c2> <text>
TEXTQUERYSELF <c2>[<cmode><c1><me><c2>]<c2> <text>
 
KICK <pre> <c1><knick>0 has been kicked by <c1><nick><c2> <parentext>
KICKSELF <pre> You have been kicked from 9<chan>0 by <c1><nick> (<address>)<c2> <parentext>
 
QUIT <pre> <c1><nick> (<address>)<c2> has quit irc <parentext>
 
TOPIC <pre> <c1><nick><c2> sets topic to: <text>
NICK <pre> <c1><nick><c2> is now know as <c1><newnick>
 
NICKSELF <pre> You are now known as <c1><newnick>
TEXTCHANSELF <c2>[<cmode><c1><me><c2>]<c2> <text>
 
 
INVITE <pre> <c1><nick> (<address>)<c2> has invited you to join <c1><chan>
 
ACTIONCHAN <pre> <c1><cmode>0<nick><c2> <text>
ACTIONQUERY <pre> <c1><cmode>0<nick><c2> <text>
ACTIONCHANSELF <pre> <c1><cmode>0<me><c2> <text>
ACTIONQUERYSELF <pre> <c1><cmode>0<me><c2> <text>
 
CTCP <pre> <c1><nick> (<address>)<c2> has requested <c1><ctcp> <parentext> <c2>from you. 
CTCPCHAN <pre> <c1><nick> (<address>)<c2> has requested <c1><ctcp> <parentext> <c2>from<c1> <chan>
CTCPREPLY <pre> <c1><nick> (<address>)<c2> <ctcp> reply:<c1> <text>
 
SERVERERROR <pre> <c1>Error:<c2> <text>
 
NOTICESERVER <pre> <c1><nick><c2> <pre> <text>
NOTICE <pre><pre><c1><nick>:<c2> <text>
NOTICECHAN <pre><pre><c1><cmode><chan>:<nick><c2> <text>
NOTICESELF -> <c1><nick>:<c2> <text>
NOTICESELFCHAN -> <chan> <text>
NOTIFY <pre> <c1><nick><c2> <parentext> is online
UNOTIFY <pre> <c1><nick><c2> <parentext> is offline
 
CLineIrcOP 04
CLINEOP 00
CLINEVOICE 00
CLINEREGULAR 00
CLINEME 09
 
ImageButtons mIRCFlatButtons.bmp
 
 
FONTDEFAULT verdana,10
FONTCHAN verdana,10
FONTQUERY verdana,10
 
 
raw.311 !Script kirc.whois1
raw.319 !Script kirc.whois4
raw.317 !Script kirc.whois2
raw.312 !Script kirc.whois3
raw.301 !Script kirc.whois5
raw.313 !Script kirc.whois6
raw.318 !Script kirc.whois7
raw.314 <pre> <c2><c1><nick><c2> was (<c1><address><c2>) <realname>
raw.251 <pre> Connected to <server>. Users online: <users>. Invisible: <text>. Servers: <value>
raw.252 <pre> Operators online: <value> 
raw.253 <pre> Unknown connections: <value>
raw.254 <pre> Channels formed: <value>
raw.255 <pre> Clients: <users>. Servers: <value>
raw.330 !Script halt
raw.332 <pre> 0Topic:<c2> <text>
raw.333 <pre> 0Topic set by<c1> <nick><c2> on <text>
raw.324 <pre> 0Modes in <chan>:<c1> <modes>
raw.352 !script %:echo %::pre <c1> $+ %::chan %::nick <c2>is <c1> $+  %::cmode $+ %::address ( $+ %::realname $+ ) %::away 
raw.329 !Script %:echo %::pre  $+ %::c2 $+ Created on: $+ %::c1 $asctime(%::text,ddd) $+ , $asctime(%::text,mm/dd) $+ $asctime(%::text,/yyyy) at $asctime(%::text,h:nntt)
raw.305 <pre> <c2>You're now <c1>back.
raw.306 <pre> <c2>You're now <c1>away.
raw.401 <pre> <c2>No such nickname: <c1><nick>
raw.403 <pre> <c2>No such channel: <c1><chan>
raw.404 <pre> <c2>Cannot send text/data to: <c1><chan>
raw.405 <pre> <c2>Cannot join <c1><chan>. 0You're on too many channels.
raw.406 <pre> <c2>Whowas on <c2><nick> - There was no such nick
raw.421 <pre> <c2>No such command: <c1>/<value>
raw.432 <pre> <c2>Invalid nickname: <c1><nick>
raw.433 <pre> <c2>Nickname already in use: <c1><nick>
raw.436 <pre> <c2>Nickname collision with: <c1><nick>
raw.438 <pre> <c2>Nickname changed too fast, please wait a while and try again...
raw.439 <pre> <c2>Nickname changed too fast, please wait a while and try again...
raw.441 <pre> <c1><nick> <c2>is not on <c1><chan>
raw.442 <pre> <c2>You're not on <c1><chan>
raw.443 <pre> <c1><nick> <c2>is already on <c1><chan>
raw.461 <pre> <c2>More parameters needed for: <c1><text>
raw.465 <pre> <c2>Sorry, You're <c1>banned <c2>from this server.
raw.467 <pre> <c2>Cannot join <c1><chan> <c2>- It's keyed <c1>(+k)
raw.471 <pre> <c2>Cannot join <c1><chan> <c2>- It's full <c1>(+l)
raw.472 <pre> <c2>Unknown character: <c1><text>
raw.473 <pre> <c2>Cannot join <c1><chan> <c2>- It's invite only <c1>(+i)
raw.474 <pre> <c2>Cannot join <c1><chan> <c2>- You're banned 9(+b)
raw.475 <pre> <c2>Cannot join <c1><chan> <c2>- Incorrect 9key
raw.478 <pre> <c2>Cannot ban <c1><text>. <c1><chan> <c2>banlist is full.
raw.482 <pre> <c2>You're not a channel operator on <c1><chan>
raw.511 <pre> <c2>You're /silence list is full.
 
Scheme1 Red
Scheme2 Blue
Scheme3 Yellow
Scheme4 Purple
Scheme5 Orange
Scheme6 Grey
 
[Scheme1]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 243,10,10 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
COLORS 1,1,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,4
BASECOLORS 04,00,00,04
CLINEME 04

[Scheme2]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,148,144 0,255,255 16,106,241 255,0,255 128,128,128 208,212,208
COLORS 1,1,0,0,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,12
BASECOLORS 12,00,00,12
CLINEME 12

[Scheme3]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 243,10,10 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
COLORS 1,1,0,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,8
BASECOLORS 08,00,00,08
CLINEME 08

[Scheme4]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 243,10,10 128,0,0 189,34,195 255,128,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
COLORS 1,1,0,0,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,6
BASECOLORS 06,00,00,06
CLINEME 06

[Scheme5]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 243,10,10 128,0,0 189,34,195 253,114,2 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
COLORS 1,1,0,0,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,7
BASECOLORS 07,00,00,07
CLINEME 07

[Scheme6]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 243,10,10 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 97,90,90 208,212,208
COLORS 1,1,0,0,14,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,14
BASECOLORS 14,00,00,14
CLINEME 14


 
