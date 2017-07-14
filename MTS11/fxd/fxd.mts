[mts]
NAME fxd
AUTHOR fxd
EMAIL fxd@post.com
DESCRIPTION a simple grey theme.
WEBSITE http://textos.tk/
MTSVERSION 1.1
VERSION 0.2
PREFIX 0.15.
PARENTEXT 15(16<text>15)
TIMESTAMP On
TIMESTAMPFORMAT 15(16HH:nn15)
LOAD <pre> fxd.mts 15loaded.
CTCPSELF <pre> 16ctcp17: 15(16<ctcp>15) 17to 15<nick> <text>
CTCPREPLYSELF <pre> 16ctcp17: <nick> 15(16<ctcp>15) <parentext>
MODE <pre> 16modes17: 16(15<modes>16)17 by 15<nick>
JOIN <pre> 16joins17: <nick> 16(15<address>16)17 has joined 16<chan>
JOINSELF <pre> 17joining16 <chan>17..
PART <pre> 16parts17: <nick> 16(15<address>16)17 has parted 16<chan>
TEXTCHAN 15(16<cmode>17<nick>15)16 <text>
TEXTQUERY 15(16<cmode>17<nick>15)16 <text>
KICK <pre> 16kicks17: <knick> 15kicked from 16<chan>17 by15 <nick> <parentext>
KICKSELF <pre> 16kicks17: 15you 17have been kicked by15 <nick> <parentext>
QUIT <pre> 16quits17: <nick> <parentext>
TOPIC <pre> 16topic17: 15(16<text>15) 17by 15<nick> 
NICK <pre> 16nicks17: 15<nick>17 now uses 15(16<newnick>15)
NICKSELF <pre> 16nicks17: 15<nick>17 now uses 15(16<newnick>15)
TEXTCHANSELF 16(15<cmode>17<me>16)16 <text>
TEXTQUERYSELF 16(15<cmode>17<me>16)16 <text>
MODEUSER <pre> 16mymodes17: 15(16<modes>15)
INVITE <pre> 16invites17: 15(16<chan>15)17 by 15<nick>
ACTIONCHAN 15! 17<nick> 15: 16<text>
ACTIONQUERY 15! 17<nick> 15: 16<text>
ACTIONCHANSELF 16! 17<me> 15: 16<text>
ACTIONQUERYSELF 16! 17<me> 15: 16<text>
CTCP <pre> 16ctcp17: request of 15(16<ctcp>15) <parentext> 17by 15<nick> 
CTCPCHAN <pre> 16ctcp17: request of 15(16<ctcp>15) <parentext> 17by 15<nick> 17(<chan>)
CTCPREPLY <pre> 16ctcp17: 15(16<ctcp>15) 17reply from 15<nick>17: <text>
SERVERERROR <pre> 15(16error15)17: <text>
NOTICESERVER 15(16<nick>15) 15: 16<text> 
NOTICE 15ntc17(2)16<nick> 15: 17<text>
NOTICECHAN 15ntc17:16<nick>15(16<chan>15)17: <text>
NOTICESELF 15ntc17(1)16<nick> 15: 17<text>
NOTICESELFCHAN 15ntc17:15(16<chan>15) 15: 17<text>
NOTIFY <pre> 15(16<nick>15) <parentext> 17is online.
UNOTIFY <pre> 15(16<nick>15) <parentext> 17is offline.
DNS <pre> 17looking up 15(16<address>15)17..
DNSERROR <pre> 17impossible to resolve 15(16<iaddress><naddress>15)
DNSRESOLVE <pre> 17resolved 15<naddress> 15(16<iaddress>15) 17to 15<raddress>.
COLORS 14,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,15,1,14,0,14
BASECOLORS 1,14,15,10
RGBCOLORS 233,233,233 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 72,80,96 160,172,184
FONTDEFAULT tahoma,9
FONTCHAN tahoma,9
FONTQUERY tahoma,9
raw.311 <pre> 16whois on 17<nick> 15(16<address>15)17 <realname>
raw.319 <pre> 16channels17: <chan>
raw.312 <pre> 16server17: <wserver>
raw.301 <pre> 16away17: <text>
raw.317 <pre> 16signed on17: <signontime>
raw.314 <pre> <nick> was (<address>) <realname>
raw.251 <pre> 17connected to: 15(16<server>15)17. users online: 15(16<users>15)17. invisible: 15(16<text>15)17. servers: 15(16<value>15)
raw.252 <pre> 17operators online: 15(16<value>15) 
raw.253 <pre> 17unknown connections: 15(16<value>15)
raw.254 <pre> 17channels formed: 15(16<value>15)
raw.255 <pre> 17clients: 15(16<users>15)17. servers: 15(16<value>15)
raw.332 <pre> 16topic17: 15(17<text>15)
raw.333 <pre> 16set by17: 17<nick> 16on 17<text>
raw.324 <pre> 16modes17: 15(17<modes>15)
raw.352 <pre> 17<nick>16 is 15(16<address>15) 17<realname>.
raw.329 <pre> 16created on17: 15(17<text>15)
raw.305 <pre> 17you've set back.
raw.306 <pre> 17you've set away.
raw.401 <pre> 15(16<nick>15)17 no such nickname.
raw.403 <pre> 15(16<chan>15)17 no such channel.
raw.404 <pre> 15(16<nick>15)17 cannot send text.
raw.405 <pre> 17you're on too many channels to join 15(16<chan>15)
raw.406 <pre> 15(16<nick>15)17 there was no such nick.
raw.421 <pre> 15(16<value>15)17 no such command.
raw.432 <pre> 15(16<nick>15)17 invalid nickname.
raw.433 <pre> 15(16<nick>15)17 nickname already in use.
raw.436 <pre> 15(16<nick>15)17 nickname collision.
raw.438 <pre> 17wait 20s and try again.
raw.439 <pre> 17wait 20s and try again.
raw.441 <pre> 15(16<nick>15)17 is not on 15<chan>.
raw.442 <pre> 15(16<chan>15)17 you're not there.
raw.443 <pre> 15(16<nick>15)17 is already on 15<chan>.
raw.461 <pre> 15(16<nick>15)17 more parameters needed.
raw.465 <pre> 17banned from the server.
raw.467 <pre> 15(16<chan>15)17 cannot join. [+k].
raw.471 <pre> 15(16<chan>15)17 cannot join. [+l].
raw.472 <pre> 15(16<text>15)17 unknown character. 
raw.473 <pre> 15(16<chan>15)17 cannot join. [+i].
raw.474 <pre> 15(16<chan>15)17 cannot join. [+b].
raw.475 <pre> 15(16<chan>15)17 cannot join. (wrong key).
raw.478 <pre> 15(16<text>15)17 cannot be banned. ban list is full.
raw.482 <pre> 15(16<chan>15)17 not a channel operator.
raw.511 <pre> 17you're /silence list is full.
CLINEOP 16
CLINEHOP 16
CLINEVOICE 16
CLINEREGULAR 16
CLINEOWNER 16
CLINEENEMY 16
CLINEFRIEND 16
CLINEME 15
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
