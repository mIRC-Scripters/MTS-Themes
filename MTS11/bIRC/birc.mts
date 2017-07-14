[mts]
name .b ! r c X; v1.0
author AkUzZeR
email akuzzer@hotmail.com
description b ! r c X; default theme
script birc.mrc
website unknown
mtsversion 1.1
version 1.1
actionchan 02·•    [<cmode><nick>] <text>
ACTIONQUERY 02·•   [<nick>] <text>
ACTIONCHANSELF 02·•   > <text>
ACTIONQUERYSELF 02·•   > <text>
CTCP 2·•   CTCP(12<ctcp>02) (12<text>02) from <nick>
CTCPCHAN 02·•   CTCP(12<ctcp>:<chan>02) (12<text>02) from <nick>
CTCPREPLY 02·•   CTCP(12<ctcp>:REPLY02) (12<text>02) from <nick>
CTCPSELF 02·•   CTCP(12<ctcp>02) (12<text>02) from <nick>
CTCPREPLYSELF 02·•   CTCP(12<ctcp>:REPLY:<chan>02) (12<text>02) from <nick>
DNS 03·•   DNS(12<address>05)
DNSERROR 03·•   DNS ERROR(12Unable to resolve03) (12<iaddress>:<naddress>03)
DNSRESOLVE 03·•   DNS RESOLVED(12<iaddress> to: <raddress>03)
ECHO ·•   Echo: <text>
ECHOTARGET ·•   Echo: <text>
ERROR ·•   Error: <text>
INVITE 04·•   02INVITE(2 <nick> to: <chan> 02)
JOIN 05·•   <nick>02@05<address> joins
JOINSELF 05·•   joining to: 2<chan>   
KICK 02·•   KICK 05<nick> 02kicks to: 05<knick> 02(<parentext>)
KICKSELF 02·•   KICK 05<nick> 02kick your ass (<parentext>)
LOAD !script bx.load
MODE 02·•   <nick>04 set modes to: 02<modes>
MODEUSER 02·•   6Personal Modes: 05<modes>
NICK 02·•   03<nick> 04changes your nick:03 <newnick>
NICKSELF 02·•   03your nick is now:04 <newnick>
NOTICESERVER 02·•   SNOTICE(4<text>02)
NOTICE 02·•   NOTICE(4<nick>:<text>02)
NOTICECHAN 02·•   NOTICE(4<chan>:<nick>:<text>02)
NOTICESELF 02·•   NOTICE(4<nick>:<text>02)
NOTICESELFCHAN 02·•   NOTICE(4<chan>:<nick>:<text>02)
NOTIFY 02·•   05NOTIFY(<nick> joins to IRC05)
PARENTEXT 14(1<text>14)
PART 02·•   03<nick>05@03<address> parts <parentext>
PREFIX ·•
QUIT 02·•   05<nick>04@05<address> QUITS <parentext> 
SERVERERROR 02·•   Error: <text>
SCRIPT birc.mrc
TEXTCHAN  1(02<cmode>1<nick>1): <text>
TEXTQUERY 1(1<nick>1): <text>
TEXTCHANSELF 1(05<cmode>02<nick>1): <text>
TEXTQUERYSELF 1(02<me>1): <text>
TIMESTAMP ON
TIMESTAMPFORMAT  02[05 hh:nn 02]
TOPIC 02·•   <nick> 05changes topic to: 14"<text>14"
UNLOAD !script bx.unload
UNOTIFY 02·•   05NOTIFY(<nick> left IRC05)
COLORS 0,3,4,1,12,12,3,13,10,14,1,1,7,3,1,1,6,10,13,12,0,0,1,0,1,1,1
BASECOLORS 2,12,11,14
RGBCOLORS 255,255,255 0,0,0 236,77,0 255,92,15 255,119,53 255,143,89 255,174,136 255,197,168 255,255,0 0,255,0 209,218,228 0,236,236 0,0,255 161,183,202 128,128,128 208,208,208
FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11
raw.311 !script bx.whois %::nick %::address %::realname
raw.319 02·•    /  14<nick> 02on: 14<chan>
raw.312 02·•    /  14<nick> 03using:  14<wserver> - <serverinfo>
raw.301 02·•    /  14<nick> 02is away: 14<text>    
raw.307 02·•    /  14<nick> 02is a registered nick
raw.317 !script bx.idle  %::nick %::idletime %::signontime
raw.318 02·•    / 02end of whois of: 14 <nick>·
raw.314 02·•    14<nick> 02is: (14<address>02) : 02(14<realname>02)
raw.251 02·•    there are: 14<users>02 users 04+ 14<text> 02invisibles in:  14<value> 02servers
raw.252 02·•    IRCops online: 14<value>
raw.253 02·•    Unknown connections: 14<value>
raw.254 02·•    Active Channels: 14<value>
raw.255 02·•    Servers: 14<value> 02\ Clients: 14<value>
raw.332 02·•    14<chan> 02Topic: 14<text> 
raw.333 02·•    14<chan> 02Topic set by: 14<nick> 02on: 14<text>
raw.324 02·•    14<chan> 02Modes: 14<modes>
raw.352 02·•    14<chan> 02: 14<nick> 02is: 14<address> 02: 14<realname>
raw.329 02·•    14<chan> 02Created on: 14<text>
raw.305 14·•    You're now in away mode
raw.306 14·•    You're not in away mode
raw.401 02·•    14<nick> 02: No such nick
raw.403 02·•    14<chan> 02: No such nick
raw.404 02·•    14<nick> 02: Can't send text
raw.406 02·•    14<nick> 02: This is not a nickname
raw.421 02·•    Unknown command:   14/<value>
raw.432 02·•    14<nick> 02: Invalid nickname, Wrong Characters
raw.433 02·•    14<nick> 02: Is already in use
raw.438 02·•    02Nick change too fast, wait a moment please
raw.439 02·•    02Nick change too fast, wait a moment please
raw.441 02·•    14<nick> 02is not on: 14<chan>
raw.442 02·•    You're not on: 14<chan>
raw.443 02·•    14<nick> 02is on: 14<chan>
raw.461 02·•    Insufficient parammeters: 14<text>
raw.465 02·•    ¡Error! You're banned from this server
raw.467 02·•    Can't join 14<chan> 02is in mode 14<chan>+k
raw.471 02·•    Can't join 14<chan> 02is in mode 14<chan>+l
raw.472 02·•    14<text> 02: Is an unknown character
raw.473 02·•    Can't join 14<chan> 02is in mode 14<chan>+i
raw.474 02·•    Can't join 14<chan> 02is in mode 14<chan>+b 02You're banned
raw.475 02·•    Can't join 14<chan> 02Incorrect Key!
raw.478 02Error banning: 14<text> 02\ 14<chan>02 banlist is full
raw.482 02·•    You're not opped in: 14<chan>
raw.511 02·•    You're silence list is full!
raw.327 <text>
raw.other <text>


CLINEOP 02
CLINEHOP 05
CLINEVOICE 07
CLINEREGULAR 14
CLINEOWMER 02
CLINEENEMY 13
CLINEFRIEND 12
CLINEME 01
CLineCharOwner 02-
CLineCharOP 02@
CLineCharHOP 05%
CLineCharVoice 07+
CLineCharRegular 14
CLineIrcOP 10