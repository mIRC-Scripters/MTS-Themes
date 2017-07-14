[mts]
NAME 13th
AUTHOR kenneth
EMAIL kenneth@e13th.org
DESCRIPTION A simple and rather pleasing theme. Thanks goes to Kamek and Oxigun.
WEBSITE www.mircscripts.org
MTSVERSION 1.1
VERSION 1.3

Scheme1 Black bg

PREFIX 6-0-6-
PARENTEXT 15[16<text>15]

TIMESTAMP On
TIMESTAMPFORMAT 10[16h:nnt10]

LOAD <pre> 9 13th loaded..
SCRIPT 13th.mrc

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>

CTCPSELF <pre> 16ctcp 15..16<ctcp>15/ 16to 15<nick> <text>
CTCPREPLYSELF <pre> 16ctcp 15..16<ctcp>15/ 16to 15<nick> <parentext>
MODE <pre> 16modes 16[15<modes>16:10<chan>16]16 by 15<nick>
JOIN <pre> 16joins.. 25<nick> 16[15<address>16]
JOINSELF <pre> 16joined <chan>25..
PART <pre> 16parts.. 25<nick> 16[15<address>16>
TEXTCHAN 15(16<cmode>22<nick>15)16 <text>
TEXTQUERY 15(22<nick>15)16 <text>
KICK <pre> <knick> 15kicked by 22<nick> <parentext>
KICKSELF <pre> you 15kicked by 22<nick> <parentext>
QUIT <pre> 2quits.. 25<nick> <parentext>
TOPIC <pre> 16topic10:25 <parentext> 16by 15<nick> 
NICK <pre> 15<nick>16 changed nick to 15[16<newnick>15]
NICKSELF <pre> 15<nick>16 changed nick to 15[16<newnick>15]
TEXTCHANSELF 22(18<cmode>15<me>22)16 <text>
TEXTQUERYSELF 22(15<me>22)16 <text>
MODEUSER <pre> 16modes 15[16<modes>16:10<nick>15]
INVITE <pre> 15<nick> 16invites you to 15[16<chan>15]
ACTIONCHAN 15· 16<cmode>10<nick> 16<text>
ACTIONQUERY 15· 10<nick> 16<text>
ACTIONCHANSELF 15· 15<me> 16<text>
ACTIONQUERYSELF 15· 15<me> 16<text>
CTCP <pre> 16ctcp 15..16<ctcp>15/ 16by 15<nick> <parentext> 
CTCPCHAN <pre> 16ctcp 15..16<ctcp>15/ 16by 15<nick>17:16<chan> <parentext> 
CTCPREPLY <pre> 16ctcp 15..16<ctcp> reply15/ 16from 15<nick> 16· <text> 
SERVERERROR <pre> 15[16error15]17> <text>
NOTICESERVER 15[16<nick>15]25<text> 
NOTICE [15notice17:16<nick>]15: 25<text>
NOTICECHAN [15notice17:16<nick>1/16<chan>]15: 25<text>
NOTICESELF -15notice17>16<nick>-15: 25<text>
NOTICESELFCHAN -15notice17>16<chan>-15: 25<text>
NOTIFY <pre> 16<nick>, <parentext> 16is online.
UNOTIFY <pre> 16<nick>, <parentext> 16is offline.
DNS <pre> 25..resolving 15[16<address>15]
DNSERROR <pre> 25cannot resolve 15[16<iaddress><naddress>15]
DNSRESOLVE <pre> 16resolved 15<naddress> 16to 15<raddress>.

raw.314 <pre> <nick> was [<address>] <realname>
raw.311 !script default.whoisinit %::nick %::address %::realname
raw.319 15|. 06channels: <chan>
raw.312 15|. 06server: <wserver>
raw.301 15|. 06away: <text>
raw.317 !script default.whoisidle %::idletime %::signontime
raw.318 !script default.whoisend
raw.251 <pre> 22users online 15[16<users>15]16, invisible 15[16<text>15]16, servers 15[16<value>15]
raw.252 <pre> 22operators online: 15[16<value>15] 
raw.253 <pre> 22unknown connections: 15[16<value>15]
raw.254 <pre> 22channels formed: 15[16<value>15]
raw.255 <pre> 22clients: 15[16<users>15]16. servers: 15[16<value>15]
raw.332 <pre> 16topic10:22 <text> 
raw.333 <pre> 16topic set by 22<nick> 16on <text>
raw.324 <pre> 16modes 15[22<modes>15]
raw.352 <pre> 10<nick>16 is 15(16<address>15) 17<realname>.
raw.305 <pre> 16..you are set back. 
raw.306 <pre> 16..you are set away. shoo?
raw.401 <pre> 15[16<nick>, no such nickname.15]
raw.403 <pre> 15[16<chan>, no such channel.15]
raw.404 <pre> 15[16<nick>, cannot send text.15]
raw.405 <pre> 16..you're on too many channels!
raw.406 <pre> 15[16<nick>, invalid, or don't match any nicks.15]
raw.421 <pre> 16[22<value>16, invalid command.16]
raw.432 <pre> 15[16<nick>, invalid nickname.15]
raw.433 <pre> 15[16<nick>, nickname in use.15] 
raw.436 <pre> 15[16<nick>, nick collision.15] 
raw.438 <pre> 16..target changed too fast! 
raw.439 <pre> 16..target changed too fast!
raw.441 <pre> 15[16<nick>, is not in <chan>.15] 
raw.442 <pre> 15[16<nick>, you're not in <chan>.15] 
raw.443 <pre> 15[16<nick>, is already in <chan>.15] 
raw.461 <pre> 15[16<text>, more paremeters needed.15] 
raw.465 <pre> 16 ..you are banned from the server.
raw.467 <pre> 15[16<chan> - cannot join channel, key set.15] 
raw.471 <pre> 15[16<chan> - cannot join channel, limited.15] 
raw.472 <pre> 15[16<text> - invalid character.15] 
raw.473 <pre> 15[16<chan> - cannot join channel, invite only.15] 
raw.474 <pre> 15[16<chan> - you're banned.15] 
raw.475 <pre> 15[16<chan> - cannot join channel, invalid key.15] 
raw.478 <pre> 15[16<text> - cannot ban <nick>, <chan> 's banlist if full.15]
raw.482 <pre> 15[16<chan> - not a channel operator.15]
RAW.Other <pre> <text>

COLORS 14,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,8,0,14,0,14
RGBCOLORS 255,255,255 0,0,0 255,208,203 0,144,0 255,0,0 128,0,0 109,156,240 255,128,0 63,100,123 208,193,219 198,229,235 0,255,255 0,0,255 255,0,255 36,73,94 188,198,241 
BASECOLORS 1,14,15,6

FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11

CLINEOP 15
CLINEHOP 15
CLINEVOICE 06
CLINEREGULAR 00
CLINEOWNER 00
CLINEME 07
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular

[Scheme1]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1