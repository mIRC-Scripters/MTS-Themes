[mts]
Name Hysteria
Author StoleN
Email st0len@hotmail.com
Description Hysteria theme with 5 schemes using Bright font!
Website http://oxygen.cjb.net/
Version 1.0
MTSVersion 1.1

Script Hysteria.mrc


Timestamp OFF
TimestampFormat 11(00HH00:00nn00:00ss11)

LOAD !script Hysteria.load
Prefix <c2>ú<c3>ú
TEXTCHAN <pre>11(13<cmode>13<nick>11)00 <text>
TEXTQUERY <pre>11(13<cmode>13<nick>11)00 <text>
TEXTCHANSELF <pre>11(13<cmode>13<nick>11)00 <text>
TEXTQUERYSELF <pre>11(13<cmode>13<nick>11)00 <text>
TEXTMSGSELF <pre>13/MSG 13<target>13:00 <text>
ACTIONQUERY <pre>13! 13<cmode>13<nick> 00<text>
ACTIONCHANSELF <pre>13! 13<cmode>13<nick> 00<text>
ACTIONQUERYSELF <pre>13! 13<cmode>13<nick> 00<text>
ACTIONCHAN <pre>13! 13<cmode>13<nick> 00<text>
NOTICE <pre>11-11(13<nick>11)11-00 <text>
NOTICESELF <pre>13/Notice: 13<nick>13:00 <text>
NOTICECHANE <pre>11-11(13<nick>13:13<chan>11)11-00 <text>
NOTICESELFCHAN <pre>13/Notice: 13<chan>13:00 <text>
NOTICESERVER <pre>11-11(13<server>11)11-00 <text>
DNS <pre>13/Dns: 11(00<address>11) 11)
DNSRESOLVE <pre>13/Dns: 11(13r13esolved00: 11(13<naddress> 00- 13<iaddress>11) 11(00<raddress>11) 11)
DNSERROR <pre>13/Dns: 11(13u13nable 13t00o 13r13esolve00: 11(13<iaddress>00<naddress>11) )
NOTIFY <pre>13<nick>13:13 O13nline 11(00<text>11)
UNOTIFY <pre>13<nick>13:13 O13ffline 11(00<text>11)
SERVERERROR <pre>11-13error11- 11(00<text>11)
MODE <pre>13/Mode: 11(13<nick>11)13 S13ets 13m13ode 11(13<modes>11)
MODEUSER <pre>11-13U13sermode11- 11(00<modes>11)
CTCP <pre>13/Ctcp: 11(13<ctcp> 00<text>11)13 f13rom00: 11(13<nick>11)
CTCPREPLY <pre>11-13ctcp11-11(00<text>11)13 f13rom00: 11(13<nick>11)
CTCPSELF <pre>13/Ctcp 13<ctcp>13:00 <nick>
CTCPCHAN <pre>13/Ctcp: 11(13<ctcp>:13<chan>:00 <text>11)13 f13rom: 11(13<nick>11)
CTCPCHANSELF <pre>13/Ctcp 13<chan>13:00 <ctcp>
INECHAROWNER .
INVITE <pre>13/Invite: 11(13<nick>11)13 I13nvited 11(13<me>11) 13to 11(13<chan>11)
JOIN <pre>13/Join: 11(13<nick>11(13<address>11))
JOINSELF <pre>13N13ow talking in 13<chan>
PART <pre>13/Part: 11(13<nick>11(13<address>11)) 11(00<text>11)
KICK <pre>13/Kick: 11(13<nick>11)13 k13icked 11(13<knick>11(00<text>11))
KICKSELF <pre>13/Kick: 11(13<nick>11)13 k13icked 11(13<knick>11(00<text>11))
REJOIN <pre>13A00ttempting to rejoin 11(00<chan>11)
QUIT <pre>13/Quit: 11(13<nick>11(13<address>11)) 11(00<text>11)
NICK <pre>13/Nick: 11(13<nick>11)13 is k13nown as 11(13<newnick>11)
NICKSELF <pre>13/Nick: 11(13<nick>11)13 is k13nown as 11(13<newnick>11)
TOPIC <pre>13/Topic: 11(13<nick>11)13 Changed the topic to 11'00<text>11'
RAW.001 <pre>13<text>
RAW.002 <pre>11(13S13erver:00 <server>11: 13V13ersion:00 <value>11)
RAW.003 <pre>11(13C13reated:00 <value>11)
RAW.004 !script Hysteria.raw.004
RAW.005 <pre>11(13P13rotocols 13s13upported:00 <text>11)
RAW.241 <pre>11(13U13sers:00 <users> 13I13nvisible:00 <text> 13S13ervers:00 <value>11)
RAW.242 <pre>11(13O13perators:00 <value>11)
RAW.250 <pre>11(13T13otal connection:00 <value>11)
RAW.252 <pre>11(13O13perators:00 <value>11)
RAW.253 <pre>11(13U13nknown 13c13onnections:00 <value>11)
RAW.254 <pre>11(13N13umber of channels:00 <value>11)
RAW.255 <pre>11(13L13ocal 13c13lients: 00<users> 13in 00<value> 13server(s)11)
RAW.265 <pre>11(13L13ocal 13U13sers:00 <users>  00- 13M13ax:00 <value>11)
RAW.266 <pre>11(13G13lobal 13U13sers:00 <users>  00- 13M13ax:00 <value>11)
RAW.251 <pre>11(13U13sers: 00Visibles 00<users> 13I13nvisibles 00<text> 13S13ervers 00<value>11)
RAW.243 <pre>11(13U13nknown Connections:00 <value>11)
RAW.244 <pre>11(13C13hannels:00 <value>11)
RAW.301 12³ ³ 13A13way:00 <text>
RAW.302 <pre>11(13U13serhost: 00<nick> 00<address>11)
RAW.307 12³ ³ 13R13egistered 13N13ickname: 00Yes
RAW.311 !script whois1
RAW.312 12³ ³ 13S13erver: 00<wserver> <serverinfo>
RAW.313 12³ ³ 13I13rcop:00 <operline>
RAW.314 !script whowas1
RAW.317 !script %:echo %::00 $+ 12³ ³ 13I13dle :00 $Hysteria.st(%::idletime) 11( 13S13ign on :00 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) , 13O13nline 13t13ime :00 $Hysteria.st($calc($ctime - $ctime(%::signontime))) 11)
RAW.318 !script whois2
RAW.319 12³ ³ 13C13hannels:00 <chan>
RAW.324 <pre>11(13M13odes: at00 <chan> : 11(13 <modes> 11)00 <comments>11)
RAW.332 !script Hysteria.topic
RAW.333 !script Hysteria.endtopic
RAW.352 <pre> 13<cmode>13<nick>11(13<address>11) 00 <realname>
RAW.369 !script whowas2
RAW.372 <pre>00<text>
RAW.376 <pre>11(13E13nd11)13 /M00OTD
RAW.375 <pre>11(13/13M13otd11)
RAW.391 <pre>11(13D13ate: 00<value>11)
RAW.401 11(13B13ad 13C13ommand11) 11(13N13o such nick:13 <nick>11)
RAW.403 11(13B13ad 13C13ommand11) (13N13o such channel:13 <chan>11)
RAW.404 11(13B13ad 13C13ommand11) (13C13annot send to channel:13 <chan>11)
RAW.406 !script nosuchnick
RAW.421 <pre>11(13B13ad 13C13ommand11) (13U13nknown command:13 <value>11)
RAW.432 <pre>11(13B13ad 13C13ommand11) (13<nick> 13is an erroneus nickname..11)
RAW.433 <pre>11(13N13ick13A13lert11) (00The nickname you specified (13<nick>13) is already in use..11)
RAW.441 <pre>11(13B13ad 13C13ommand11) (13<nick> 13is not on 13<chan>11)
RAW.442 <pre>11(13B13ad 13C13ommand11) (00you are not on 13<chan>11)
RAW.443 <pre>11(13B13ad 13C13ommand11) (13<nick> 13is already on 13<chan>11)
RAW.467 <pre>11(13K13ey 13A13lert11) (00cannot join 13<chan> 11key required..11)
RAW.471 <pre>11(13B13ad 13C13ommand11) (00cannot join 13<chan> 13channel is full..11)
RAW.473 <pre>11(13B13ad 13C13ommand11) (00cannot join 13<chan> 13invite required..11)
RAW.474 <pre>11(13B13an 13A13lert11) (00cannot join 13<chan> 13you're banned..11)
RAW.475 <pre>11(13B13ad 13C13ommand11) (00cannot join 13<chan> 13incorrect key..11)
RAW.482 <pre>11(13O13p13A13lert11) (00You're not channel operator at 13<chan>0011)

CLineOwner 12
CLineRegular 00
CLineVoice 13
CLineMe 12
CLineOP 11
CLineHOP 12
CLineIrcOP 12

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault Bright,10 
FontChan Bright,10 
FontQuery Bright,10

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 91,173,246 7,123,228 177,217,252 128,128,128 208,208,208

Scheme1 Green
Scheme2 Yellow
Scheme3 Red
Scheme4 Cyan
Scheme5 Smoke

[Scheme1]

CLineOwner 12
CLineRegular 00
CLineVoice 13
CLineMe 12
CLineOP 11
CLineHOP 12
CLineIrcOP 12

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 20,210,50 0,160,70 120,255,150 128,128,128 208,208,208

[Scheme2]

CLineOwner 12
CLineRegular 00
CLineVoice 13
CLineMe 12
CLineOP 11
CLineHOP 12
CLineIrcOP 12

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,255,90 255,255,50 255,255,155 128,128,128 208,208,208

[Scheme3]

CLineOwner 12
CLineRegular 00
CLineVoice 13
CLineMe 12
CLineOP 11
CLineHOP 12
CLineIrcOP 12

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,0,0 150,0,0 243,47,12 128,128,128 208,208,208

[Scheme4]

CLineOwner 12
CLineRegular 00
CLineVoice 13
CLineMe 12
CLineOP 11
CLineHOP 12
CLineIrcOP 12

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 64,128,128 52,105,105 106,181,181 128,128,128 208,208,208

[Scheme5]

CLineOwner 12
CLineRegular 00
CLineVoice 13
CLineMe 12
CLineOP 11
CLineHOP 12
CLineIrcOP 12

COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BASECOLORS 11,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 192,192,192 128,128,128 220,220,220 128,128,128 208,208,208