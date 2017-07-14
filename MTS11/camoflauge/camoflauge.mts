[mts]
NAME camoflauge
AUTHOR removed
SCRIPT camoflauge.mrc
EMAIL removed@hotmail.com
DESCRIPTION A theme with a camoflauge look
WEBSITE none
MTSVERSION 1.1
VERSION 1.0

COLORS 07,00,06,06,08,08,06,06,06,06,06,00,00,08,08,00,08,08,06,06,08,07,08,07,08,08
BASECOLORS 00,06,07,08
RGBCOLORS 255,255,255 0,0,0 0,64,128 0,100,60 160,135,77 128,0,0 155,77,00 00,75,24 255,255,189 0,0,130 0,144,144 0,255,255 100,145,166 121,0,121 128,128,128 208,208,208

CLINEOP <c4>
CLINEHOP <c4>
CLINEVOICE <c2>
CLINEREGULAR <c1>
CLINEOWNER <c4>
CLINEENEMY <c2>
CLINEFRIEND <c4>
CLINEME <c4>
CLineCharOwner <c1>.
CLineCharOP <c1>@
CLineCharHOP <c1>%
CLineCharVoice <c1>+
CLineCharRegular

FONTDEFAULT IBMPC,14
FONTCHAN IBMPC,14
FONTQUERY IBMPC,14

PREFIX <c4>Φ
PARENTEXT <c4><text>
TIMESTAMP OFF
TIMESTAMPFORMAT <c1>[<c2>H:nn<c1>]
SCRIPT camoflauge.mrc
SCHEME1 Winter Camo

TEXTCHAN <c1>[<c4><cmode><nick><c1>] <c2><text>
TEXTCHANSELF <c1>[<c4><cmode><me><c1>] <c2><text>
ACTIONCHAN <c1>action[<c4><cmode><nick><c1>] <c2><text>
ACTIONCHANSELF <c1>action[<c4><cmode><me><c1>] <c2><text>

NOTICE <c1>notice[<c4><nick><c1>] <c2><text>
NOTICESELF <c1>notice[<c4><nick><c1>] <c2><text>
NOTICECHAN  <c1>notice[<c4><nick><c1>:<c4><chan><c1>] <c1><text>
NOTICESELFCHAN <c1>notice[<c4><chan><c1>] <c2><text>
NOTICESERVER <c1>notice[<c4><text><c1>]

TEXTQUERY <c1>[<c4><cmode><nick><c1>] <c2><text>
TEXTQUERYSELF <c1>[<c4><cmode><me><c1>] <c2><text>
ACTIONQUERY <c1>action[<c4><nick><c1>] <c4><text>
ACTIONQUERYSELF <c1>action[<c4><me><c1>] <c2><text>
TEXTMSGSELF !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ msg[ $+ %::c4 $+ %::text $+  $+ %::c1 $+ ]  $+ %::c2 $+ to $1

MODE <pre> <c1>mode[<c4><modes><c1>] <c2>set by <nick>
MODEUSER <pre> <c1>status[<c4><modes><c1>]
JOIN <pre> <c1>join[<c4><nick><c1>:<c2><address><c1>]
JOINSELF !script
PART <pre> <c1>part[<c4><nick><c1>:<c2><address><c1>] <c2><parentext>
KICK <pre> <c1>kick[<c4><knick><c1>] <c2>by <nick> <parentext>
KICKSELF <pre> <c1>kick[<c4><me><c1>] <c2>from <chan> by <nick> <parentext>
QUIT <pre> <c1>quit[<c4><nick><c1>:<c2><address><c1>] <c2><parentext>
TOPIC <pre> <c1>topic[<c4><chan><c1>:<c4><text><c1>] <c2>set by <nick>
NICK <pre> <c1>nick[<c4><newnick><c1>] <c2>changed from <nick>
NICKSELF <pre> <c1>nick[<c4><newnick><c1>]
INVITE <pre> <c1>invite[<c4><chan><c1>] <c2>from <nick>
SERVERERROR <pre> <c1>error[<c4><text><c1>]
REJOIN <pre> <c1>rejoin[<c4><chan><c1>]

CTCP !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ ctcp[ $+ %::c4 $+ %::ctcp $+  $+ %::c1 $+ ]  $+ %::c2 $+ from %::nick
CTCPCHAN !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ ctcp[ $+ %::c4 $+ %::ctcp $+  $+ %::c1 $+ ]  $+ %::c2 $+ from %::chan
CTCPREPLY !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ ctcp $+ %::c2 $+ r $+ %::c1 $+ eply[ $+ %::c4 $+ %::parentext $+  $+ %::c1 $+ ]  $+ %::c2 $+ from %::nick
CTCPSELF !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ ctcp[ $+ %::c4 $+ %::ctcp $+  $+ %::c1 $+ ]  $+ %::c2 $+ to $1
CTCPCHANSELF !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ ctcp[ $+ %::c4 $+ %::ctcp $+  $+ %::c1 $+ ]  $+ %::c2 $+ to %::chan
CTCPREPLYSELF !script %:echo  $+ %::c4 $+ Φ  $+ %::c1 $+ ctcp $+ %::c2 $+ reply[ $+ %::c4 $+ %::text $+  $+ %::c1 $+ ]

NOTIFY <pre> <c1>online[<c4><nick><c1>] <c2><parentext>
UNOTIFY <pre> <c1>offline[<c4><nick><c1>]
WALLOP <pre> <c1>wallop[<c4><text><c1>]
NOTICESERVER <pre> <c1>serv<c2>n<c1>otice[<c4><text><c1>]<c2>from <nick>

DNS <pre> <c1>dns[<c4>lookup<c1>] <c2><address>
DNSERROR <pre> <c1>dns[<c4>error<c1>] <c2><iaddress><naddress>
DNSRESOLVE <pre> <c1>dns[<c4>resolved<c1>] <c2><naddress> <c1>---> <c2><raddress>

ECHO <pre> <c4><text>
ECHOTARGET <pre> <c4><text>
ERROR <pre> <c4><text>
LOAD <pre> <c2>ca<c1>mo<c4>fl<c1>au<c2>ge <c4>loaded at <timestamp>
UNLOAD <pre> <c2>ca<c1>mo<c4>fl<c1>au<c2>ge <c4>unloaded at <timestamp>

raw.250 !script
raw.251 <c4>Global: <c1>users[<c4><users><c1>] <c1>invisible[<c4><text><c1>] <c1>servers[<c4><value><c1>]
raw.252 <c4>Global: <c1>opers[<c4><value><c1>]
raw.253 <c4>Global: <c1>unknown[<c4><value><c1>]
raw.254 <c4>Global: <c1>channels[<c4><value><c1>]
raw.255 <c4>Local: <c1>clients[<c4><users><c1>] <c1>servers[<c4><value><c1>]
raw.265 !script
raw.266 !script
raw.302 !script
WHOIS !script camo.whois
raw.other <pre> <c4><text>
raw.002 !script
raw.317 !script
raw.301 !script %:echo  $+ %::c4 $+ ║  $+ %::c1 $+ away:  $+ %::c4 $+ ║ $+ %::c2 $+ %::text
raw.307 !script %:echo  $+ %::c4 $+ ║  $+ %::c1 $+ reg:  $+ %::c4 $+ ║ $+ %::c2 $+ this is a registered nick
raw.311 !script
raw.312 !script
raw.313 !script %:echo  $+ %::c4 $+ ║  $+ %::c1 $+ oper:  $+ %::c4 $+ ║ $+ %::c2 $+ yes
raw.319 !script
raw.318 !script
raw.314 <c1>whowas[<c4><nick><c1>:<c4><address><c1>]
raw.332 <pre> <c1>topic[<c4><text><c1>]
raw.333 !script
raw.324 <pre> <c1>modes[<c4><modes><c1>]
raw.329 !script
raw.352 <pre> <c1>who[<c4><chan><c1>] <c1><cmode><c2><nick><c1>:<c2><address> (<realname>)
raw.305 <pre> <c1>status[<c4>back<c1>]
raw.306 <pre> <c1>status[<c4>away<c1>]
raw.341 !script
raw.401 <pre> <c1>error[<c4><nick><c1>] <c2>no such nick
raw.403 <pre> <c1>error[<c4><chan><c1>] <c2>no such channel
raw.404 <pre> <c1>error[<c4><chan><c1>] <c2>cannot send data to channel
raw.405 <pre> <c1>error[<c4><chan><c1>] <c2>you are on too many channels
raw.406 <pre> <c1>error[<c4><nick><c1>] <c2>there was no such nick
raw.421 <pre> <c1>error[<c4>/<value><c1>] <c2>no such command
raw.432 <pre> <c1>error[<c4><nick><c1>] <c2>invalid nickname
raw.433 <pre> <c1>error[<c4><nick><c1>] <c2>nickname in use
raw.436 <pre> <c1>error[<c4><nick><c1>] <c2>nickname collision
raw.438 <pre> <c1>error[<c4>nick change too fast, try again later<c1>] 
raw.439 <pre> <c1>error[<c4>target changed too fast, try again later<c1>] 
raw.441 <pre> <c1>error[<c4><chan><c1>] <c2><nick> is not in that channel
raw.442 <pre> <c1>error[<c4><chan><c1>] <c2>you are not in that channel
raw.443 <pre> <c1>error[<c4><chan><c1>] <c2><nick> is already in that channel
raw.461 <pre> <c1>error[<c4><text><c1>] <c2>more paramaters needed
raw.465 <pre> <c1>error[<c4>you are banned from this server<c1>] 
raw.467 <pre> <c1>error[<c4><chan><c1>] <c2>no key given
raw.471 <pre> <c1>error[<c4><chan><c1>] <c2>full
raw.472 <pre> <c1>error[<c4><text><c1>] <c2>invalid character
raw.473 <pre> <c1>error[<c4><chan><c1>] <c2>invite only
raw.474 <pre> <c1>error[<c4><chan><c1>] <c2>you're banned
raw.475 <pre> <c1>error[<c4><chan><c1>] <c2>incorrect key
raw.478 <pre> <c1>error[<c4><chan><c1>] <c2>cannot ban <text>, banlist is full
raw.482 <pre> <c1>error[<c4><chan><c1>] <c2>you are not an op
raw.511 <pre> <c1>error[<c4>You're ignore list is full<c1>]





[scheme1]
COLORS 00,01,15,15,12,12,15,15,15,15,15,01,01,12,12,01,12,12,15,15,12,00,12,00,12,12
BASECOLORS 01,14,00,12