[mts]
NAME Eclipse v1
AUTHOR Dallas
EMAIL Icebreaker006@hotmail.com
DESCRIPTION Eclipse Theme. =\?
WEBSITE http://www.controlroot.net/geek-x
MTSVERSION 1.1
VERSION 1.0
PREFIX <c4>»»
TIMESTAMP ON
TIMESTAMPFORMAT <c1>(<c1><c2>hh<c1>:<c2>nn<c1>)<c1>
Script eclipse.mrc
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1
BaseColors 01,01,01,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 208,212,208
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Default<c4>)
scheme1 Orange
scheme2 Blue
scheme3 Red
scheme4 Grey
scheme5 Green
scheme6 Baby Blue
scheme7 Dark Orange
scheme8 Dark Red
scheme9 Dark Blue
scheme10 Dark Yellow
scheme11 Dark Baby Blue
scheme12 Pink
scheme13 Dark Pink


QUIT  !script %:echo %::pre Quit $+ %::c1 $+  $+ %::c2 %::nick $+  $+ %::c2 $replace(%::address,@, $+ %::c4 $+ @ $+  $+ %::c2,., $+ %::c4 $+ . $+  $+ %::c2)  $+ %::c4 $+ ( $+ %::c2 $+ %::text $+  $+ %::c4 $+ )
JOIN !script %:echo %::pre Join $+ %::c1 $+  $+ %::c2 %::nick $+  $+ %::c2 $replace(%::address,@, $+ %::c4 $+ @ $+  $+ %::c2,., $+ %::c4 $+ . $+  $+ %::c2)
JOINSELF <pre> Joined<c1>:<c2> <chan> <c4>as<c2> <nick>
PART  !script %:echo %::pre Part $+ %::c1 $+  $+ %::c2 %::nick $+  $+ %::c2 $replace(%::address,@, $+ %::c4 $+ @ $+  $+ %::c2,., $+ %::c4 $+ . $+  $+ %::c2)

MODE <pre> Mode<c1>:<c2> <nick> <c4><modes>

KICK <pre> Kick<c1>:<c2> <nick> <c4>kicked<c2> <knick> <c4>(<c2><text><c4>)
KICKSELF <pre> Kick<c1>:<c2> <nick> <c4>kicked<c2> <knick> <c4>(<c2><text><c4>)

TOPIC <pre> Topic<c1>:<c2> <nick> <c4>changes to<c2> <text>
NICK <pre> Nick<c1>:<c2> <nick> <c4>is now know as<c2> <newnick>
NICKSELF <pre> Nick<c1>:<c2> <nick> <c4>is now know as<c2> <newnick>
MODEUSER <pre> Modes set<c1>:<c2> <modes>
INVITE <pre> Invite<c1>:<c2> <nick> <c4>invite you to<c2> <chan>

TEXTCHAN <c1>(<c4><cmode><c2><nick><c1>)<c2> <text>
TEXTQUERY <c1>(<c2><nick><c1>)<c2> <text>
TEXTCHANSELF <c1>(<c4><cmode><c2><me><c1>)<c2> <text>
TEXTQUERYSELF <c1>(<c2><me><c1>)<c2> <text>

ACTIONCHAN <c1>!<c4><cmode><c2><nick><c1>:<c2> <text>
ACTIONQUERY <c1>!<c2><nick><c1>:<c2> <text>
ACTIONCHANSELF <c1>!<c4><cmode><c2><me><c1>:<c2> <text>
ACTIONQUERYSELF <c1>!<c2><me><c1>:<c2> <text>

Ctcp <pre> ctcp<c1>:<c2> <nick> <ctcp> <c4>(<c2><text><c4>)
CtcpChan <pre> ctcp<c1>:<c2> <nick>@<chan> <ctcp> <c4>(<c2><text><c4>)
CtcpSelf <pre> ctcpsent<c1>:<c2> <nick> <ctcp> <c4>(<c2><text><c4>)
CtcpChanSelf <pre> ctcpsent<c1>:<c2> <chan> <ctcp> <c4>(<c2><text><c4>)
CtcpReply <pre> ctcpreply<c1>:<c2> <nick> <ctcp> <c4>(<c2><text><c4>)
CtcpReplySelf <pre> ctcpreply<c1>:<c2> <nick> <ctcp> <c4>(<c2><text><c4>)

SERVERERROR <pre> Servererror<c1>:<c2> <text>

NOTICESERVER <pre> <c4>(<c2><nick><c4>)<text>
NOTICE <pre> <c4>(<c2><nick><c4>) <text>
NOTICECHAN <pre> <c4>(<c2><nick><c4>/<c2><chan><c4>) <text>
NOTICESELF <pre> <c4>(<c2><nick><c4>) <text>
NOTICESELFCHAN <pre> <c4>(<c2><nick><c4>/<c2><chan><c4>) <text>

NOTIFY <pre> <nick> is Online!
UNOTIFY <pre> <nick> has left IRC.

DNS <pre> DNS<c1>:<c2> <Address>
DNSERROR <pre> Unable to resolve<c1>:<c2> <address>
DNSRESOLVE <pre> DNS Resolved<c1>:<c2> <naddress> <raddress>

raw.311 !Script eclipse.whois1
raw.319 !Script eclipse.whois4
raw.317 !Script eclipse.whois2
raw.312 !Script eclipse.whois3
raw.301 !Script eclipse.whois5
raw.313 !Script eclipse.whois6
raw.318 !Script eclipse.whois7

raw.314 <pre> <nick> was <address><c1>:<c2> <realname>
raw.251 <pre> Connected<c1>:<c2> <server> Users<c1>:<c2> <users> Invisible<c1>:<c2> <text> Servers<c1>:<c2> <value>
raw.252 <pre> Operators online<c1>:<c2> <value> 
raw.253 <pre> Unknown connections<c1>:<c2> <value>
raw.254 <pre> Channels formed<c1>:<c2> <value>
raw.255 <pre> Clients<c1>:<c2> <users>
raw.332 <pre> Topic<c1>:<c2> <text>
raw.333 <pre> Topic set by<c1>:<c2> <nick>
raw.324 <pre> Modes<c1>:<c2> <modes>
raw.352 <pre> <chan> <nick> 00is 9<address> (<realname>)
raw.329 !Script %:echo %::pre Created on $+ %::c1 $+ : $+ %::c2 $asctime(%::text,ddd) $+ , $asctime(%::text,mm/dd) $+ $asctime(%::text,/yyyy)  $+ %::c1 $+ @ $+ %::c2 $asctime(%::text,h:nntt)
raw.305 <pre> You are now<c1>:<c2> Back 
raw.306 <pre> You are now<c1>:<c2> Away
raw.401 <pre> No such nick<c1>:<c2> <nick>
raw.403 <pre> No suck chan<c1>:<c2> <chan>
raw.404 <pre> Cannot send<c1>:<c2> <text> to <chan>
raw.405 <pre> Cannot join<c1>:<c2> <chan> Your on to many
raw.406 <pre> /Whowas error, no such nick<c1>:<c2> <nick>
raw.421 <pre> No commands for<c1>:<c2> /<value>
raw.432 <pre> Invalid nickname<c1>:<c2> <nick>
raw.433 <pre> Nickname already in use<c1>:<c2> <nick>
raw.436 <pre> Nickname collision with<c1>:<c2> nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again
raw.439 <pre> Nickname changed too fast, please wait a while and try again
raw.441 <pre> <nick> is not on<c1>:<c2> <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on<c1>:<c2> <chan>
raw.461 <pre> More parameters needed for<c1>:<c2> <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan><c1>:<c2> neet +k key
raw.471 <pre> Cannot join <chan><c1>:<c2> Full +l
raw.472 <pre> Unknown character<c1>:<c2> <text>
raw.473 <pre> Cannot join <chan><c1>:<c2> You must be invited +i
raw.474 <pre> Cannot join <chan><c1>:<c2> Your ban +b
raw.475 <pre> Cannot join <chan><c1>:<c2> Incorect key
raw.478 <pre> Cannot ban <text><c1>:<c2> Banlist is full
raw.482 <pre> You're not a channel operator on4:1 <chan>
raw.511 <pre> You're /silence list is full.

[scheme1]
BaseColors 07,01,07,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 208,212,208
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Orange<c4>)

[scheme2]
BaseColors 12,01,12,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 208,212,208
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Blue<c4>)

[scheme3]
BaseColors 04,01,04,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 208,212,208
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Red<c4>)

[scheme4]
BaseColors 15,01,15,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 90,90,90
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Grey<c4>)

[scheme5]
BaseColors 03,01,03,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 208,212,208
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Green<c4>)

[scheme6]
BaseColors 12,01,12,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,170,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Baby Blue<c4>)

[scheme7]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0
BaseColors 07,00,07,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Dark Orange<c4>)


[scheme8]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0
BaseColors 04,00,04,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Dark Red<c4>)

[scheme9]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0
BaseColors 12,00,12,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Dark Blue<c4>)

[scheme10]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0
BaseColors 08,00,08,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Dark Yellow<c4>)

[scheme11]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0
BaseColors 12,00,12,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,170,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Dark Baby Blue<c4>)

[scheme12]
BaseColors 13,01,13,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,170,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Pink<c4>)

[scheme13]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0
BaseColors 13,00,13,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,170,255 255,0,255 60,60,60 132,132,132
LOAD <pre> Loaded Eclipse theme <c4>(<c1>Dark Pink<c4>)
