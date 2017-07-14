[mts]
NAME pepsi
AUTHOR blueflame
EMAIL blueflame@twodeg.net
DESCRIPTION ported from my script obsolete to mts
SCRIPT pepsi.mrc
WEBSITE http://www.twodeg.net/obsolete
MTSVERSION 1.1
VERSION 1.2

BASECOLORS 12,14,15,00
COLORS 1,15,14,14,14,14,14,14,14,14,14,15,14,14,15,15,14,14,14,14,15,1,15,1,14,15
RGBCOLORS 255,255,255 0,0,0 0,0,168 0,168,0 255,84,88 168,0,0 168,0,168 168,84,0 255,252,88 88,252,88 0,168,168 88,252,255 0,128,192 255,84,255 120,116,120 168,168,168
FONTDEFAULT terminal,12
FONTCHAN terminal,12
FONTQUERY terminal,12
PREFIX <c3>ú<c1>û<c3>ú
TIMESTAMP OFF
TIMESTAMPFORMAT <c2>(<c3>hh:nn<c2>)

PARENTEXT <c2>(<text><c2>)
LOAD <pre> pepsi theme loaded
UNLOAD <pre> pepsi theme unloaded

CTCP <c3>>>> <c2>(<c4>ctcp<c2>­<c1><nick><c2>(<c3><address><c2>))<c4> <ctcp> <text>
CTCPCHAN <c3>>>> <c2>(<c4>ctcp<c2>­<c1><nick>/<chan><c2>(<c3><address><c2>))<c4> <ctcp> <text>
CTCPREPLY <pre> <c2>(<c4>ctcp<c3>:<c4>reply<c2>­<c1><ctcp><c2>)<c3> <nick> <c2><gt><c3> <ctcp> <text>
CTCPSELF <c2>><c2>(<c4>ctcp<c2>(<c1><nick><c2>))<c4> <ctcp> <text>
CTCPREPLYSELF ><c2>(<c4>ctcp<c3>:<c4>reply<c2>­<c1><ctcp>)<c3> <nick> <c2><gt><c3> <ctcp> <text>

TEXTCHAN <c1>(<c3><cmode><c2><nick><c1>) <text>
TEXTQUERY <c1>( <c2><nick><c1>) <text>
TEXTCHANSELF <c1>(<c3><cmode><c2><nick><c1>) <text>
TEXTQUERYSELF <c1>( <c2><nick><c1>) <text>
TEXTMSG <c2>+<c4>msg<c2>:<c1><nick><c2>+ <text>
TEXTMSGSELF <c1><gt><c2>(<c4>msg<c2>(<c1><nick><c2>)) <text>

ACTIONCHANSELF <c2>ð <c3><me> <text>
ACTIONQUERYSELF <c2>ð <c3><me> <text>
ACTIONCHAN <c2>ð <c3><nick> <text>
ACTIONQUERY <c2>ð <c3><nick> <text>

NOTICE <c1>-<c3><nick><c1>(<c3><address><c1>)- <text>
NOTICESELF <c1>><c2>(<c4>not<c2>(<c1><nick><c2>)) <text>
NOTICESELFCHAN ><c2>(<c4>not<c2>(<c1><chan><c2>)) <text>
NOTICECHAN <c1>-<c3><nick><c2>/<c3><chan><c1>(<c3><address><c1>)- <text>
;NOTICESERVER <c1>-<c3><nick><c1>)- <text>

JOIN <pre> <c2>(<c4>join<c2>­<c1><chan><c2>)<c3> <nick> <c2>(<c3><address><c2>) <ts>
JOINSELF <pre> <c3>Now chillin' in<c4> <chan> <ts>
PART <pre> <c2>(<c4>part<c2>­<c1><chan><c2>)<c3> <nick> <c2>(<c3><address><c2>)<c3> <c2>(<c4><text><c2>) <ts>
QUIT <pre> <c2>(<c4>quit<c2>­<c1><chan><c2>)<c3> <nick> <c2>(<c4><text><c2>) <ts>
TOPIC <pre> <c2>(<c4>topic<c2>­<c1><chan><c2>):<c3> <nick> <c2><gt> <c3><text> <ts>

KICK <pre> <c2>(<c4>kick<c2>­<c1><chan><c2>)<c3> <nick> <c2><gt><c3> <knick> <c2>(<c4><text><c2>) <ts>
KICKSELF <c3>>>> <c2>You have been kicked off <c1><chan><c2> by <c3><nick> <c2>(<c4><text><c2>) <ts>

NICK <pre> <c2>(<c4>nick<c2>­<c1><chan><c2>)<c3> <nick> <c2><gt><c4> <newnick> <ts>
NICKSELF <pre> <c2>(<c4>nick<c2>­<c1><chan><c2>)<c3> <nick> <c2><gt><c4> <newnick> <ts>

MODE <pre> <c2>(<c4>mode<c2>­<c1><chan><c2>)<c3> <nick> <c2>(<c4><modes><c2>) <ts>
MODEUSER <pre> <c2>(<c4>mode<c2>­<c1><me><c2>)<c4> <modes> <ts>

INVITE <c3>>>> <c2>(<c4>invite<c2>­<c1><nick><c2>)<c3> <chan> <ts>
SERVERERROR <pre> <c2>(<c4>error<c2>­<c1>server<c2>)<c3> <text> <ts>

notify <pre> <c2>(<c4>notify<c2>­<c1><nick><c2>(<c3><address><c2>)) on <c2>(<c3><text><c2>) <ts>
unotify <pre> <c2>(<c4>notify<c2>­<c1><nick><c2>(<c3><address><c2>)) off <c2>(<c3><text><c2>)<ts>
;NOTIFY <pre> <c2>(<c4>notify<c2>­<c1><nick><c2>(<c1><address><c2>)<c3> on <ts>
;UNOTIFY <pre> <c2>(<c4>notify<c2>­<c1><nick><c2>(<c1><address><c2><c3>) off <ts>

DNS ><c2>(<c4>dns<c2>(<c1><address><c2>))
DNSERROR <c2>(<c4>dns<c2>­<c1><address><c2>)<c3> error
DNSRESOLVE <c2>(<c4>dns<c2>­<c1><address><c2>)<c3> <raddress>


raw.001 <c1>ÚÄ[ <c4>connected
raw.002 <c1>³<c4> serverÿÿÿ<c2>:<c3> <server> <value>
raw.003 <c1>³<c4> createdÿÿ<c2>:<c3> <value>
raw.004 !script
raw.005 !script pepsi.005
raw.251 !script pepsi.251
raw.252 <c1>³<c4> opersÿÿÿÿ<c2>:<c3> <value>
raw.254 <c1>³<c4> channelsÿ<c2>:<c3> <value>
raw.255 <c1>³<c4> i haveÿÿÿ<c2>:<c3> <users> users and <value> servers
raw.265 !script %:echo  $+ %::c1 $+ ³ $+  $+ %::c4 localÿÿÿÿ $+ %::c2 $+ : $+  $+ $::c3 %::users ( $+ $round($calc(%::users / %::value * 100),2) $+ $chr(37) of the max)
raw.266 !script pepsi.266

raw.375 <c1>ÚÄ[ <c4><server>'s<c3> motd
;raw.372 - By connecting to this server you agree to be bound
raw.376 <c1>ÀÄ[<c4> end<c3> of the message of the day.

raw.311 !script pepsi.311  $+ %::c2 %::nick %::address %::realname
raw.319 !script pepsi.319  $+ %::c2 %::chan
raw.312 !script pepsi.312 %::wserver
raw.301 0.a15w14ayÿÿÿÿÿÿ15: <text>
raw.307 0.i15d14entÿÿÿÿÿ15: <isregd>
raw.317 !script pepsi.317  $+ %::c2 %::idletime
raw.318 0ÀÄÄÄ--15-00ÄÄ15ÄÄÁ14Ä15--14ÄÄÄÄÄ--ÿ-ÿÿ-
raw.314 <pre> <c2>(<c4>who<c2>­<c1><nick><c2>(<c1><address><c2>))<c3> <realname>
;raw.251 <pre> <c2>Connected to <c3><server><c2>. <ts>
raw.332 <pre> <c2>(<c4>topic<c2>­<c1><chan><c2>)<c3> <text> <ts>
raw.333 <pre> <c2>(<c4>topic<c2>­<c1><chan><c2>)<c3> <nick> <c2>(<c4><text><c2>) <ts>

raw.324 !script
;raw.324 <pre> <c2>(<c4>mode<c2>­<c1><chan><c2>)<c4> <modes> <ts>
raw.329 !script
;raw.329 <pre> <c2>(<c4>created<c2>­<c1><chan><c2>)<c3> <text> <ts>

raw.352 <pre> <c2>(<c4>who<c2>­<c1><chan><c2>)<c3> <nick><c2>(<c3><address><c2>) <realname>
raw.305 <pre> You are now set as back.
raw.306 <pre> You are now set as away.
raw.401 <pre> <c2>No such nick:<c3> <nick>
raw.403 <pre> <c2>No such channel:<c3> <chan>
raw.404 <pre> Cannot send text/data to <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> <c2>(<c4>whowas<c2>­<c1><nick><c2>)<c3> There was no such nick
raw.421 <pre> <c2>(<c4>ambiguous<c3>:<c4>command<c2>­<c1><value><c2>)
raw.432 <pre> <c2>(<c4>invalid<c3>:<c4>nick<c2>­<c1><nick><c2>)
raw.433 <pre> <c2>(<c4>nick<c2>­<c1><nick><c2>)<c3> in use
raw.436 <pre> <c2>(<c4>nick<c2>­<c1><nick><c2>)<c3> collision
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Nickname changed too fast, please wait a while and try again...
raw.441 <pre> <c3><nick><c2> is not on<c3> <chan>
raw.442 <pre> <c2>You are not on <c3><chan>
raw.443 <pre> <c3><nick> <c2>is already on<c3> <chan>
raw.461 <pre> <c2>More parameters needed for:<c3> <text>
raw.465 <pre> <c3>You are banned from this server.
raw.467 <pre> <c2>(<c4>join<c3>:<c4>error<c2>­<c1><chan><c2>)<c4> key needed
raw.471 <pre> <c2>(<c4>join<c3>:<c4>error<c2>­<c1><chan><c2>)<c4> user limit reached
raw.472 <pre> <c2>(<c4>unknown<c3>:<c4>mode<c2>­<c1><text><c2>)
raw.473 <pre> <c2>(<c4>join<c3>:<c4>error<c2>­<c1><chan><c2>)<c4> channel is invite only
raw.474 <pre> <c2>(<c4>join<c3>:<c4>error<c2>­<c1><chan><c2>)<c4> you're banned
raw.475 <pre> <c2>(<c4>join<c3>:<c4>error<c2>­<c1><chan><c2>)<c4> Incorrect key
raw.478 <pre> <c2>Cannot ban <c3><text><c2>. <chan> <c3>banlist is full.
raw.482 <pre> <c2>You are not a op on <c3><chan>
raw.511 <pre> <c3>Your /silence list is full.
CLINEOP 12
CLINEHOP 15
CLINEVOICE 15
CLINEREGULAR 14
CLINEOWMER 00
CLINEENEMY 04
CLINEFRIEND 07
CLINEME 12
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular ÿ
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>

scheme1 white
scheme2 dark blue
scheme3 green
scheme4 red
scheme5 dark red
scheme6 purple
scheme7 orange
scheme8 yellow
scheme9 bright green
scheme10 turquoise
scheme11 bright blue
scheme12 pink
scheme13 dark grey
scheme14 light grey

[scheme1]
BASECOLORS 0,14,15,00
CLINEOP 00
[scheme2]
BASECOLORS 2,14,15,00
CLINEOP 02
[scheme3]
BASECOLORS 3,14,15,00
CLINEOP 03
[scheme4]
BASECOLORS 4,14,15,00
CLINEOP 04
[scheme5]
BASECOLORS 5,14,15,00
CLINEOP 05
[scheme6]
BASECOLORS 6,14,15,00
CLINEOP 06
[scheme7]
BASECOLORS 7,14,15,00
CLINEOP 07
[scheme8]
BASECOLORS 8,14,15,00
CLINEOP 08
[scheme9]
BASECOLORS 9,14,15,00
CLINEOP 09
[scheme10]
BASECOLORS 10,14,15,00
CLINEOP 10
[scheme11]
BASECOLORS 11,14,15,00
CLINEOP 11
[scheme12]
BASECOLORS 13,14,15,00
CLINEOP 13
[scheme13]
BASECOLORS 14,14,15,00
CLINEOP 14
[scheme14]
BASECOLORS 15,14,15,00
CLINEOP 15