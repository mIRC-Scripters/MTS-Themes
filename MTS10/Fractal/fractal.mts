[mts]
NAME Fractal
AUTHOR Tig0ti
EMAIL tig0ti@terra.es
DESCRIPTION Default Fractal script theme.
SCRIPT fractal.mrc
WEBSITE http://fractal.irc-scripts.com
MTSVERSION 1.0
VERSION 1.0
PREFIX 02¢¢
PARENTEXT (<text>)
TIMESTAMP h:nnt
LOAD !script _onload
UNLOAD <pre> 05Fractal 02theme unloaded
CTCPSELF 04CTCP(05<ctcp>04) 02-> 05<nick>
CTCPREPLYSELF 04CTCPREPLY(05<ctcp>04) 02-> 05<nick>
MODE 3<pre> <nick> sets mode 05<modes>
JOIN <pre> 07<nick> (<address>) has joined <chan>
JOINSELF <pre> 07Joining <chan>... 
PART <pre> 03<nick> (<address>) parts <parentext>
TEXTCHAN (05<cmode><nick>) <text>
TEXTQUERY (5<cmode><nick>) <text>
KICK <pre> 14<nick> kicked <knick> <parentext>
KICKSELF <pre> 14<nick> kicked you off <chan>: <text>
QUIT <pre> 04<nick> (<address>) quits <parentext>
TOPIC <pre> 03<nick> changes topic to '<text>03'
NICK <pre> 10<nick> is now known as <newnick>
TEXTCHANSELF (04<cmode><me>) <text>
TEXTQUERYSELF (04<cmode><me>) <text>
MODEUSER <pre> Usermode 05<modes>
INVITE 04INVITE(05<chan>04) 02from 05<nick>
NICKSELF <pre> You're now known as 05<newnick>
ACTIONCHAN * 06<cmode><nick> <text>
ACTIONQUERY * 06<nick> <text>
ACTIONCHANSELF * 06<cmode><me> <text>
ACTIONQUERYSELF * 06<me> <text>
CTCP <pre> 04CTCP(05<ctcp> <text>04) 02from 05<nick>
CTCPCHAN <pre>  04CTCP(05<ctcp>:<chan> <text>04) 02from 05<nick>
CTCPREPLY <pre> 04<ctcp>REPLY(05<text>04) 02from 05<nick>
SERVERERROR <pre> Error (<text>)
NOTICESERVER <pre> 4SNotice: 05<text>
NOTICE 04<lg>-(05<nick>04)- 05<text>
NOTICECHAN 04<lg>-(05<nick>:<chan>04)- 05<text>
NOTICESELF 04-> 05<nick>: <text>
NOTICESELFCHAN 04-> 05<chan>: <text>
NOTIFY <pre> 05<nick> 2is now online (<text>)
UNOTIFY <pre>  05<nick> 2is now offline (<text>)
DNS 14|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯(05/dns <address>14)¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
DNSERROR 14| 02Unable to resolve (05<iaddress><naddress>02).
DNSRESOLVE 14| 02Resolved 05<naddress> 02(05<iaddress>02) to 05<raddress>
COLORS  0,6,10,12,2,2,2,7,14,5,10,1,2,2,2,2,3,4,3,2,2,0,2,0,2,0
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11
raw.311 !script _whois.start %::nick %::address %::realname
raw.319 02| 14<nick> 02on <chan>
raw.312 02| 14<nick> 02using <wserver> (<serverinfo>)
raw.301 02| 14<nick> 02is away 14(02<text>14)
raw.317 !script _whois.idle %::nick %::idletime %::signontime
raw.318 02|_(end of /w 14<nick>02)___________14_02_____14___02 ___ __ 14_
raw.314 05<nick> 02was (05<address>02) 02<realname>
raw.251 02There are 05<users>02 users 04+ 05<text> 02invisible in 05<value> 02servers
raw.252 02Operators online 05<value> 
raw.253 02Unknown connections 05<value>
raw.254 02Channels formed 05<value>
raw.255 02Servers 05<value> 02Clients 05<users>
raw.332 <pre> 03<chan> topic: <text>
raw.333 <pre> 03<chan> topic: set by <nick> on <text>
raw.324 <pre> 03<chan> modes: <modes>
raw.352 <pre> 02<chan> ~ 05<nick> 02is 05<address>02 (<realname>)
raw.329 <pre> 03<chan> created on: <text>
raw.305 <pre> 02You are no longer marked as being away
raw.306 <pre> 02You are now marked as being away
raw.401 <pre> 05<nick> 02no such nick
raw.403 <pre> 05<chan> 02no such chan
raw.404 <pre> 05<chan> 02cannot send text
raw.405 <pre> 02Can't join more channels (05<chan>02), server says you're in too many!
raw.406 <pre> 05<nick> 02there was no such nickname
raw.421 <pre> 02Unknown command 05/<value>
raw.432 <pre> 05<nick> 02invalid nickname, wrong characters.
raw.433 <pre> 02Nickname 05<nick> 02is already in use
raw.436 <pre> 02There's been a nickname collision with 05<nick>
raw.438 <pre> 02Nick change too fast, wait a while
raw.439 <pre> 02Nick change too fast, wait a while
raw.441 <pre> 05<nick> 02is not on 05<chan>
raw.442 <pre> 02You're not on 05<chan>
raw.443 <pre> 05<nick>02 is already on 05<chan>
raw.461 <pre> 02Insufficient parameters 05<text>
raw.465 <pre> 04You're banned from this server!
raw.467 <pre> 02Cannot join 05<chan> 02(+k)
raw.471 <pre> 02Cannot join 05<chan> 02(+l)
raw.472 <pre> 05<text>02 is an unknown character
raw.473 <pre> C02Cannot join 05<chan> 02(+i)
raw.474 <pre> 02Cannot join 05<chan> 02(+b)
raw.475 <pre> 02Cannot join 05<chan> 02incorrect key!
raw.478 <pre> 02Error banning 05<text>02. 05<chan>02 banlist is full.
raw.482 <pre> 02You're not opped in 05<chan>
raw.511 <pre> 05Your silence list is full!
CLINEOP 04
CLINEHOP 04
CLINEVOICE 05
CLINEREGULAR 01
CLINEOWMER 06
CLINEENEMY 03
CLINEFRIEND 07
CLINEME 04
CLineCharOwner 06-
CLineCharOP 04@
CLineCharHOP 04%
CLineCharVoice 05+
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
IMAGECHAN photo fr-imgchan.png
