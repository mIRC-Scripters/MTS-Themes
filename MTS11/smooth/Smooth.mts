[mts]
NAME Smooth
AUTHOR Eric^^
EMAIL eric@eircweb.com
DESCRIPTION Plain and simple theme with leeto burrito whois and topic displays. 14 color schemes included, it's themealicious!
SCRIPT smooth.mrc
WEBSITE http://eircweb.com
MTSVERSION 1.1
VERSION 1.2
PREFIX <c1>[ç<c1>]
TIMESTAMP OFF
TIMESTAMPFORMAT [hh:nn]
PARENTEXT <c1>(<text><c1>)
LOAD <pre> Smooth theme loaded.
UNLOAD <pre> Smooth theme unloaded.
CTCPSELF -><c1> <nick> <ctcp> <text>
CTCPREPLYSELF -><c1> <nick> <ctcp> <text>
MODE <pre> <nick> sets mode to <c1>(<modes><c1>)
JOIN <pre> Join: <nick> <c1>(<address><c1>)
PART <pre> Part: <nick> <c1>(<address><c1>) <parentext>
TEXTCHAN <c1><lt><cnick><cmode><nick><c1><gt> <text>
TEXTQUERY <c1><lt><nick><c1><gt> <text>
KICK <pre> <nick> has kicked <knick> <parentext>
KICKSELF <pre> You've been kicked by <nick> <parentext>
QUIT <pre> Quit: <nick> <c1>(<address><c1>) <parentext>
TOPIC <pre> <nick> sets topic to <c1>(<text><c1>)
NICK <pre> <nick> is now known as <newnick>
NICKSELF <pre> <nick> is now known as <newnick>
TEXTCHANSELF <c1><lt><cnick><cmode><me><c1><gt> <text>
TEXTQUERYSELF <c1><lt><me><c1><gt> <text>
MODEUSER <pre> Mode (<modes><c1>)
INVITE <pre> <nick> has invited you to join <chan>
ACTIONCHAN <c1>* <cmode><nick> <text>
ACTIONQUERY <c1>* <nick> <text>
ACTIONCHANSELF <c1>* <cmode><me> <text>
ACTIONQUERYSELF <c1>* <me> <text>
CTCP <pre> CTCP: <nick> <c1>(<address><c1>) <c1>(<ctcp><c1>) <parentext>
CTCPCHAN <pre> CTCP: <nick> <c1>(<address><c1>) <c1>(<ctcp><c1>) <parentext>
CTCPREPLY <pre> CTCPREPLY: <nick> <c1>(<address><c1>) <c1>(<ctcp> <text><c1>)
SERVERERROR <pre> <c1>Error: <text>
NOTICE <c1>[<nick><c1>] <text>
NOTICECHAN <c1>[<nick><c1>:<chan><c1>] <text>
NOTIFY <pre> <nick> <parentext> is online...
UNOTIFY <pre> <nick> <parentext> is offline...
DNS <pre> Looking up <address>...
DNSERROR <pre> Unable to resolve <c1>(15<iaddress><naddress><c1>)
DNSRESOLVE <pre> Resolved <naddress> <c1>(15<iaddress><c1>) to <raddress>
COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15,0
BASECOLORS 04,04,04,04
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT terminal,13
FONTCHAN terminal,13
FONTQUERY terminal,13
raw.311 !script default.whoisinit %::c1 %::nick %::address %::realname
raw.319 !script default.whoischans %::c1 %::chan
raw.312 <c1>| Server<c1>: <wserver>
raw.301 <c1>| Away<c1>: <text>
raw.317 !script default.whoisidle %::c1 %::idletime
raw.318 !script default.whoisend %::c1
raw.314 <pre> <nick> was <address> * <realname>
raw.251 <pre> Connected to <server>...
raw.332 !script default.topicis %::chan %::c1 %::text
raw.333 !script default.topicset %::chan %::c1 %::nick %::text
raw.324 !script default.modes %::chan %::c1 %::modes
raw.352 <pre> <chan> - <nick> is <address> * <realname>
raw.329 !script default.created %::chan %::c1 %::text
raw.305 <pre> You're now back.
raw.306 <pre> You're now away.
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> - There was no such nick
raw.421 <pre> Unknown command: <value>
raw.432 <pre> Invalid nickname: <nick>
raw.433 <pre> Nickname already in use: <nick>
raw.436 <pre> Nickname collision with: <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Nickname changed too fast, please wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan>
raw.461 <pre> More parameters needed for: <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan> :: It's keyed (+k)
raw.471 <pre> Cannot join <chan> :: It's full (+l)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> Cannot join <chan> - It's invite only (+i)
raw.474 <pre> Cannot join <chan> - You're banned (+b)
raw.475 <pre> Cannot join <chan> - Incorrect key
raw.478 <pre> Cannot ban <text>. <chan> banlist is full.
raw.482 <pre> You're not a channel operator on <chan>
raw.511 <pre> You're /silence list is full.
CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 15
CLINEOWNER 00
CLINEENEMY 04
CLINEFRIEND 07
CLINEME 00
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular -
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
scheme1 Navy Blue
scheme2 Dark green
scheme3 Brown
scheme4 Purple
scheme5 Orange
scheme6 Yellow
scheme7 Light Green
scheme8 Turquoise
scheme9 Sky Blue
scheme10 Blue
scheme11 Pink
scheme12 Dark Grey

[scheme1]
BASECOLORS 02,02,02,02

[scheme2]
BASECOLORS 03,03,03,03

[scheme3]
BASECOLORS 05,05,05,05

[scheme4]
BASECOLORS 06,06,06,06

[scheme5]
BASECOLORS 07,07,07,07

[scheme6]
BASECOLORS 08,08,08,08

[scheme7]
BASECOLORS 09,09,09,09

[scheme8]
BASECOLORS 10,10,10,10

[scheme9]
BASECOLORS 11,11,11,11

[scheme10]
BASECOLORS 12,12,12,12

[scheme11]
BASECOLORS 13,13,13,13

[scheme12]
BASECOLORS 14,14,14,14

