[mts]
Name OXYGEN
Author StoleN
Email st0len@hotmail.com
Description OXYGEN theme, contains 9 schemes!
Website http://oxygen.cjb.net/
Version 3.3
MTSVersion 1.1

Script OXYGEN.mrc


Timestamp ON
TimestampFormat 12(01HH14:01nn14:01ss12)

PREFIX 12:11:11:
LOAD !script OXYGEN.load
TEXTCHAN <pre> 11(12<cmode>12<nick>11)01 <text>
TEXTQUERY <pre> 11(12<cmode>12<nick>11)01 <text>
TEXTCHANSELF <pre> 11(12<cmode>12<nick>11)01 <text>
TEXTQUERYSELF <pre> 11(12<cmode>12<nick>11)01 <text>
TEXTMSGSELF <pre> 12/MSG 12<target>12:01 <text>
ACTIONQUERY 12! 12<cmode>12<nick> 01<text>
ACTIONCHANSELF 12! 12<cmode>12<nick> 01<text>
ACTIONQUERYSELF 12! 12<cmode>12<nick> 01<text>
ACTIONCHAN 12! 12<cmode>12<nick> 01<text>
NOTICE <pre> 11-11(12<nick>11)11-01 <text>
NOTICESELF <pre> 12/notice 12<nick>12:01 <text>
NOTICECHANE <pre> 11-11(12<nick>12:12<chan>11)11-01 <text>
NOTICESELFCHAN <pre> 12/notice 12<chan>12:01 <text>
NOTICESERVER <pre> 11-11(12<server>11)11-01 <text>
DNS <pre> 11(12dns12: 11(01<address>11) 11)
DNSRESOLVE <pre> 11(12r12esolved01: 11(12<naddress> 01- 12<iaddress>11) 11(01<raddress>11) 11)
DNSERROR <pre> 11(12u12nable 12t01o 12r12esolve01: 11(12<iaddress>01<naddress>11) )
NOTIFY <pre> 12<nick>12:12 O12nline 11(01<text>11)
UNOTIFY <pre> 12<nick>12:12 O12ffline 11(01<text>11)
SERVERERROR <pre> 11-12error11- 11(01<text>11)
MODE <pre> 11(12<nick>11)12 S12et 12M12ode 11(12<modes>11)
MODEUSER <pre> 11-12U12sermode11- 11(01<modes>11)
CTCP <pre> 11-12ctcp11-11(12<ctcp> 01<text>11)12 f12rom01: 11(12<nick>11)
CTCPREPLY <pre> 11-12ctcp11-11(01<text>11)12 f12rom01: 11(12<nick>11)
CTCPSELF <pre> 12/ctcp 12<ctcp>12:01 <nick>
CTCPCHAN <pre> 11-12ctcp11-11(12<ctcp>:12<chan>:01 <text>11)12 f12rom: 11(12<nick>11)
CTCPCHANSELF <pre> 12/ctcp 12<chan>12:01 <ctcp>
INECHAROWNER .
INVITE <pre> 11(12<nick>11)12 I12nvited 11(12<me>11)12 t12o 11(12<chan>11)
JOIN 11»12»» 11(12<nick>11(12<address>11))12 J12oined 11(12<chan>11)
JOINSELF <pre> 12N12ow talking in 12<chan>
PART 12«11«11« 11(12<nick>11(12<address>11)) 11(12Part:01<text>11)
KICK 12‡‡‡ 11(12<nick>11)12 K12icked 11(12<knick>11(01<text> 11))
KICKSELF 12‡‡‡ 11(12<nick>11)12 K12icked 11(12<knick>11(01<text>11))
REJOIN <pre> 12A01ttempting to rejoin 11(01<chan>11)
QUIT 12¤11¤01¤ 11(12<nick>11(12<address>11)) 11(01<text>11)
NICK <pre> 11(12<nick>11)12 K12nown As 11(12<newnick>11)
NICKSELF <pre> 11(12<nick>11)12 K12nown As 11(12<newnick>11)
TOPIC <pre> 11(12<nick>11)12 T12opic 11'01<text>11'
RAW.001 <pre> 12<text>
RAW.002 <pre> 11(12S12erver:01 <server>11: 12V12ersion:01 <value>11)
RAW.003 <pre> 11(12C12reated:01 <value>11)
RAW.004 !script OXYGEN.raw.004
RAW.005 <pre> 11(12P12rotocols 12s12upported:01 <text>11)
RAW.241 <pre> 11(12U12sers:01 <users> 12I12nvisible:01 <text> 12S12ervers:01 <value>11)
RAW.242 <pre> 11(12O12perators:01 <value>11)
RAW.250 <pre> 11(12T12otal connection:01 <value>11)
RAW.252 <pre> 11(12O12perators:01 <value>11)
RAW.253 <pre> 11(12U12nknown 12c12onnections:01 <value>11)
RAW.254 <pre> 11(12N12umber of channels:01 <value>11)
RAW.255 <pre> 11(12L12ocal 12c12lients: 01<users> 12in 01<value> 12server(s)11)
RAW.265 <pre> 11(12L12ocal 12U12sers:01 <users> <pre> 01- 12M12ax:01 <value>11)
RAW.266 <pre> 11(12G12lobal 12U12sers:01 <users> <pre> 01- 12M12ax:01 <value>11)
RAW.251 <pre> 11(12U12sers: 01Visibles 01<users> 12I12nvisibles 01<text> 12S12ervers 01<value>11)
RAW.243 <pre> 11(12U12nknown Connections:01 <value>11)
RAW.244 <pre> 11(12C12hannels:01 <value>11)
RAW.301 <pre> 12A12way:01 <text>
RAW.302 <pre> 11(12U12serhost: 01<nick> 01<address>11)
RAW.307 <pre> 12R12egistered 12N12ickname: 01Yes
RAW.311 !script whois1
RAW.312 01<pre> 12S12erver: 01<wserver> <serverinfo>
RAW.313 01<pre> 12I12rcop:01 <operline>
RAW.314 !script whowas1
RAW.317 !script %:echo 12:11:11: 12I12dle :01 $OXYGEN.st(%::idletime) 11( 12S12ign on :01 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 11· 12O12nline 12t12ime :01 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 11)
RAW.318 !script whois2
RAW.319 <pre> 12C12hannels:01 <chan>
RAW.324 <pre> 11(12M12odes: at01 <chan> : 11(12 <modes> 11)01 <comments>11)
RAW.332 !script OXYGEN.topic
RAW.333 !script OXYGEN.endtopic
RAW.352 <pre> 12<cmode>12<nick>11(12<address>11) 01 <realname>
RAW.369 !script whowas2
RAW.372 <pre> 01<text>
RAW.376 <pre> 11(12E12nd11)12 /M01OTD
RAW.375 <pre> 11(12/12M12otd11)
RAW.391 <pre> 11(12D12ate: 01<value>11)
RAW.401 <pre> 11(12B12ad 12C12ommand11) 11(12N12o such nick:12 <nick>11)
RAW.403 <pre> 11(12B12ad 12C12ommand11) (12N12o such channel:12 <chan>11)
RAW.404 <pre> 11(12B12ad 12C12ommand11) (12C12annot send to channel:12 <chan>11)
RAW.406 !script nosuchnick
RAW.421 <pre> 11(12B12ad 12C12ommand11) (12U12nknown command:12 <value>11)
RAW.432 <pre> 11(12B12ad 12C12ommand11) (12<nick> 12is an erroneus nickname..11)
RAW.433 <pre> 11(12N12ick12A12lert11) (01The nickname you specified (12<nick>12) is already in use..11)
RAW.441 <pre> 11(12B12ad 12C12ommand11) (12<nick> 12is not on 12<chan>11)
RAW.442 <pre> 11(12B12ad 12C12ommand11) (01you are not on 12<chan>11)
RAW.443 <pre> 11(12B12ad 12C12ommand11) (12<nick> 12is already on 12<chan>11)
RAW.467 <pre> 11(12K12ey 12A12lert11) (01cannot join 12<chan> 11key required..11)
RAW.471 <pre> 11(12B12ad 12C12ommand11) (01cannot join 12<chan> 12channel is full..11)
RAW.473 <pre> 11(12B12ad 12C12ommand11) (01cannot join 12<chan> 12invite required..11)
RAW.474 <pre> 11(12B12an 12A12lert11) (01cannot join 12<chan> 12you're banned..11)
RAW.475 <pre> 11(12B12ad 12C12ommand11) (01cannot join 12<chan> 12incorrect key..11)
RAW.482 <pre> 11(12O12p12A12lert11) (01You're not channel operator at 12<chan>0111)

CLineOwner 15
CLineRegular 10
CLineVoice 11
CLineMe 01
CLineOP 12
CLineHOP 14
CLineIrcOP 14

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0
RGBColors 255,255,255 0,0,0 12,155,240 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 40,158,255 30,115,250 0,88,255 128,20,20 128,128,128 230,230,230
BaseColors 11,12,00,02 

Scheme1 Majestic
Scheme2 Wild
Scheme3 Dream
Scheme4 Blue
Scheme5 Dark
Scheme6 Orange
Scheme7 Green
Scheme8 Blue2

[Scheme1]
Timestamp ON
TimestampFormat 06(14HH:nn:ss06)

PREFIX 4:::
LOAD !script MajesticOXYGEN.load
ACTIONCHAN 4! 4<cmode>4<nick>03 <text>
ACTIONCHANSELF 4! 4<cmode>4<nick>03 <text>
ACTIONQUERY 4! 4<cmode>4<nick>03 <text>
ACTIONQUERYSELF 4! 4<cmode>4<nick>03 <text>
TEXTCHAN <pre> 06(4<cmode>4<nick>06)03 <text>
TEXTCHANSELF <pre> 06(4<cmode>4<nick>06)03 <text>
TEXTQUERY <pre> 06(4<cmode>4<nick>06)03 <text>
TEXTQUERYSELF <pre> 06(4<cmode>4<nick>06)03 <text>
TEXTMSGSELF <pre> 06/04MSG 04<target>04:03 <text>
NOTICE <pre> 06-06(04<nick>06)06-14 <text>
NOTICESELF <pre> 06/04notice 04<nick>04:03 <text>
NOTICECHAN <pre> 06-06(04<nick>14:4<chan>06)06-03 <text>
NOTICESELFCHAN <pre> 06/04notice 04<chant>04:03 <text>
NOTICESERVER <pre> 06-06(04<server>06)06-03 <text>
SERVERERROR <pre> 06-4error06- 06(3<text>06)
DNS <pre> 06(4dns14: 06(04<address>06) 06)
DNSERROR <pre> 06(4u14nable 4t14o 4r14esolve14: 06(04<iaddress>03<naddress>06) )
DNSRESOLVE <pre> 06(4r14esolved14: 06(04<naddress> 14- 04<iaddress>06) 06(03<raddress>06) 06)
NOTIFY <pre> 4<nick>14:4 O14nline 06(14<text>06)
UNOTIFY <pre> 4<nick>14:4 O14ffline 06(14<text>06)
MODE <pre> 06(4<nick>06)4 S14et 4M14ode 06(4<modes>06)
MODEUSER <pre> 06-4U14sermode06- 06(03<modes>06)
CTCP <pre> 06-4ctcp06-06(4<ctcp> 14<text>06)4 f14rom14: 06(4<nick>06)
CTCPSELF <pre> 06/04ctcp 04<ctcp>04:03 <nick>
CTCPCHAN <pre> 06-4ctcp06-06(4<ctcp>:4<chan>:14 <text>06)4 f14rom: 06(4<nick>06)
CTCPREPLY <pre> 06-4ctcp06-06(04<text>06)4 f14rom14: 06(4<nick>06)
CTCPCHANSELF <pre> 06/04ctcp 04<chan>04:03 <ctcp>
INECHAROWNER .
INVITE <pre> 06(4<nick>06)4 I14nvited 06(4<me>06)4 t14o 06(03<chan>06)
JOIN 4»»» 06(4<nick>06(03<address>06))4 J14oined 06(4<chan>06)
JOINSELF <pre> 4N14ow talking in 04<chan>
PART 4««« 06(4<nick>06(03<address>06)) 06(14Part:03<text>06)
KICK 6‡6‡6‡ 06(4<nick>06)4 K14icked 06(4<knick>06(14<text> 06))
KICKSELF 6‡6‡6‡ 06(4<nick>06)4 K14icked 06(4<knick>06(14<text>06))
REJOIN <pre> 04A14ttempting to rejoin 06(14<chan>06)
TOPIC <pre> 06(4<nick>06)4 T14opic 06'14<text>06'
QUIT 13¤14¤15¤ 06(4<nick>06(03<address>06)) 06(03<text>06)
NICK <pre> 06(4<nick>06)4 K14nown As 06(4<newnick>06)
NICKSELF <pre> 06(4<nick>06)4 K14nown As 06(4<newnick>06)
RAW.001 <pre>4 <text>
RAW.002 <pre> 06(4S14erver:03 <server>03: 4V14ersion:03 <value>06)
RAW.003 <pre> 06(4C14reated:03 <value>06)
RAW.004 !script MajesticOXYGEN.raw.004
RAW.005 <pre> 06(4P14rotocols 4s14upported:03 <text>06)
RAW.241 <pre> 06(4U14sers:03 <users> 4I14nvisible:03 <text> 4S14ervers:03 <value>06)
RAW.242 <pre> 06(4O14perators:03 <value>06)
RAW.243 <pre> 06(4U14nknown Connections:03 <value>06)
RAW.244 <pre> 06(4C14hannels:03 <value>06)
RAW.250 <pre> 06(4T14otal connection:03 <value>06)
RAW.251 <pre> 06(4U14sers: 04V14isibles03 <users> 4I14nvisibles03 <text> 4S14ervers3 <value>06)
RAW.252 <pre> 06(4O14perators:03 <value>06)
RAW.253 <pre> 06(4U14nknown 4c14onnections:03 <value>06)
RAW.254 <pre> 06(4N14umber of channels:03 <value>06)
RAW.255 <pre> 06(4L14ocal 4c14lients:03 <users> 14in03 <value> 14server(s)06)
RAW.265 <pre> 06(4L14ocal 4U14sers:03 <users> <pre> 03- 4M14ax:03 <value>06)
RAW.266 <pre> 06(4G14lobal 4U14sers:03 <users> <pre> 14- 4M14ax:03 <value>06)
RAW.301 <pre> 4A14way:03 <text>
RAW.302 <pre> 06(4U14serhost:03 <nick> <address>06)
RAW.307 <pre> 4R14egistered 4N14ickname:03 Yes
RAW.311 !script whois3
RAW.312 <pre> 4S14erver:03 <wserver> <serverinfo>
RAW.313 <pre> 4I14rcop:03 <operline>
RAW.314 !script whowas3
RAW.317 !script %:echo 3:4:4: 04I14dle 14:03 $OXYGEN.st(%::idletime) 6( 04S14ign on 04:03 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 13· 03O14nline 03t14ime13 :03 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 06)
RAW.318 !script whois4
RAW.319 <pre> 4C14hannels:03 <chan>
RAW.324 <pre> 06(4M14odes: at03 <chan> : 06(4 <modes> 06)03 <comments>6)
RAW.332 !script MajesticOXYGEN.topic
RAW.333 !script MajesticOXYGEN.endtopic
RAW.352 <pre> 04<cmode>04<nick>06(03<address>06) 03 <realname>
RAW.369 !script whowas4
RAW.372 <pre> 03<text>
RAW.375 <pre> 06(4/4M14otd06)
RAW.376 <pre> 06(4E14nd06)4 /M14OTD
RAW.391 pre> 06(4D14ate:03 <value>06)
RAW.401 <pre> 06(4B14ad 4C14ommand06) 06(4N14o such nick:03 <nick>06)
RAW.403 <pre> 06(4B14ad 4C14ommand06) (4N14o such channel:03 <chan>06)
RAW.421 <pre> 06(4B14ad 4C14ommand06) (4U14nknown command:03 <value>06)
RAW.404 <pre> 06(4B14ad 4C14ommand06) (4C14annot send to channel:03 <chan>06)
RAW.406 !script nosuchnickMajestic
RAW.432 <pre> 06(4B14ad 4C14ommand06) (3<nick> 14is an erroneus nickname..06)
RAW.433 <pre> 06(4N14ick4A14lert06) (14The nickname you specified (3<nick>14) is already in use..06)
RAW.441 <pre> 06(4B14ad 4C14ommand06) (3<nick> 14is not on 3<chan>06)
RAW.442 <pre> 06(4B14ad 4C14ommand06) (14you are not on 3<chan>06)
RAW.443 <pre> 06(4B14ad 4C14ommand06) (3<nick> 14is already on 3<chan>06)
RAW.467 <pre> 06(4K14ey 4A14lert06) (14cannot join 03<chan> 14key required..06)
RAW.471 <pre> 06(4B14ad 4C14ommand06) (14cannot join 03<chan> 14channel is full..06)
RAW.473 <pre> 06(4B14ad 4C14ommand06) (14cannot join 03<chan> 14invite required..06)
RAW.474 <pre> 06(4B14an 4A14lert06) (14cannot join 03<chan> 14you're banned..06)
RAW.475 <pre> 06(4B14ad 4C14ommand06) (14cannot join 03<chan> 14incorrect key..06)
RAW.482 <pre> 06(4O14p4A14lert06) (14You're not channel operator at 3<chan>1406)

Colors 00,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0
RGBColors 255,255,255 0,0,0 0,0,125 31,57,255 0,122,200 31,191,255 255,53,31 255,175,95 255,255,0 0,145,42 0,200,0 79,255,130 255,207,175 72,50,0 128,128,128 192,192,192
BaseColors 11,11,07,12

CLineOwner 10
CLineOP 03
CLineHOP 04
CLineVoice 14
CLineRegular 04
CLineMe 06
CLineIrcOP 04

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11 

[scheme2]

Timestamp ON
TimestampFormat 13(04HH:nn:ss13)

LOAD !script WildOXYGEN.load
PREFIX 3:4:4:
TEXTCHAN <pre> 13(4<cmode>4<nick>13)02 <text>
TEXTQUERY <pre> 13(4<cmode>4<nick>13)02 <text>
TEXTCHANSELF <pre> 13(4<cmode>4<nick>13)02 <text>
TEXTQUERYSELF <pre> 13(4<cmode>4<nick>13)02 <text>
TEXTMSGSELF <pre> 13/04MSG 04<target>04:02 <text>
ACTIONQUERY 4! 4<cmode>4<nick> <text>
ACTIONCHANSELF 4! 4<cmode>4<nick> <text>
ACTIONQUERYSELF 4! 4<cmode>4<nick> <text>
ACTIONCHAN 4! 4<cmode>4<nick> <text>
NOTICE <pre> 13-13(04<nick>13)13-2 <text>
NOTICESELF <pre> 13/04notice 04<nick>04:02 <text>
NOTICECHANE <pre> 13-13(04<nick>2:4<chan>13)13-2 <text>
NOTICESELFCHAN <pre> 13/04notice 04<chan>04:02 <text>
NOTICESERVER <pre> 13-13(04<server>13)13-2 <text>
DNS <pre> 13(4dns2: 13(04<address>13) 13)
DNSRESOLVE <pre> 13(4r2esolved2: 13(04<naddress> 2- 04<iaddress>13) 13(02<raddress>13) 13)
DNSERROR <pre> 13(4u2nable 4t2o 4r2esolve2: 13(04<iaddress>02<naddress>13) )
NOTIFY <pre> 4<nick>2:4 O2nline 13(2<text>13)
UNOTIFY <pre> 4<nick>2:4 O2ffline 13(2<text>13)
SERVERERROR <pre> 13-4error13- 13(4<text>13)
MODE <pre> 13(4<nick>13)4 S2et 4M2ode 13(4<modes>13)
MODEUSER <pre> 13-4U2sermode13- 13(2<modes>13)
CTCP <pre> 13-4ctcp13-13(4<ctcp> 2<text>13)4 f2rom2: 13(4<nick>13)
CTCPREPLY <pre> 13-4ctcp13-13(04<text>13)4 f2rom2: 13(4<nick>13)
CTCPSELF <pre> 13/04ctcp 04<ctcp>04:02 <nick>
CTCPCHAN <pre> 13-4ctcp13-13(4<ctcp>:4<chan>:2 <text>13)4 f2rom: 13(4<nick>13)
CTCPCHANSELF <pre> 13/04ctcp 04<chan>04:02 <ctcp>
INECHAROWNER .
INVITE <pre> 13(4<nick>13)4 I2nvited 13(4<me>13)4 t2o 13(2<chan>13)
JOIN 3»4»» 13(4<nick>13(02<address>13))4 J2oined 13(4<chan>13)
JOINSELF <pre> 4N2ow talking in 04<chan>
PART 3«4«4« 13(4<nick>13(02<address>13)) 13(2Part:02<text>13)
KICK 6‡‡‡ 13(4<nick>13)4 K2icked 13(4<knick>13(2<text> 13))
KICKSELF 6‡‡‡ 13(4<nick>13)4 K2icked 13(4<knick>13(2<text>13))
REJOIN <pre> 4A2ttempting to rejoin 13(2<chan>13)
QUIT 7¤5¤2¤ 13(4<nick>13(02<address>13)) 13(02<text>13)
NICK <pre> 13(4<nick>13)4 K2nown As 13(4<newnick>13)
NICKSELF <pre> 13(4<nick>13)4 K2nown As 13(4<newnick>13)
TOPIC <pre> 13(4<nick>13)4 T2opic 13'2<text>13'
RAW.001 <pre> 04<text>
RAW.002 <pre> 13(4S2erver:02 <server>02: 4V2ersion:02 <value>13)
RAW.003 <pre> 13(4C2reated:02 <value>13)
RAW.004 !script WildOXYGEN.raw.004
RAW.005 <pre> 13(4P2rotocols 4s2upported:02 <text>13)
RAW.241 <pre> 13(4U2sers:02 <users> 4I2nvisible:02 <text> 4S2ervers:02 <value>13)
RAW.242 <pre> 13(4O2perators:02 <value>13)
RAW.250 <pre> 13(4T2otal connection:02 <value>13)
RAW.252 <pre> 13(4O2perators: <value>13)
RAW.253 <pre> 13(4U2nknown 4c2onnections: <value>13)
RAW.254 <pre> 13(4N2umber of channels: <value>13)
RAW.255 <pre> 13(4L2ocal 4c2lients: <users> in <value> server(s)13)
RAW.265 <pre> 13(4L2ocal 4U2sers:02 <users> <pre> 02- 4M2ax:02 <value>13)
RAW.266 <pre> 13(4G2lobal 4U2sers:02 <users> <pre> 2- 4M02ax:02 <value>13)
RAW.251 <pre> 13(4U2sers: 2Visibles <users> 4I2nvisibles <text> 4S2ervers <value>13)
RAW.243 <pre> 13(4U2nknown Connections:02 <value>13)
RAW.244 <pre> 13(4C2hannels:02 <value>13)
RAW.301 <pre> 4A2way:02 <text>
RAW.302 <pre> 13(4U2serhost: <nick> <address>13)
RAW.307 <pre> 4R2egistered 4N2ickname: Yes
RAW.311 !script whois9
RAW.312 <pre> 4S2erver: <wserver> <serverinfo>
RAW.313 <pre> 4I2rcop:02 <operline>
RAW.314 !script whowas9
RAW.317 !script %:echo 3:4:4: 04I2dle :02 $OXYGEN.st(%::idletime) 13( 04S2ign on :02 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 13· 04O2nline 04t2ime :02 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 13)
RAW.318 !script whois10
RAW.319 <pre> 4C2hannels:02 <chan>
RAW.324 <pre> 13(4M02odes: at02 <chan> : 13(02 <modes> 13)02 <comments>13)
RAW.332 !script WildOXYGEN.topic
RAW.333 !script WildOXYGEN.endtopic
RAW.352 <pre> 04<cmode>04<nick>13(02<address>13) 02 <realname>
RAW.369 !script whowas10 
RAW.372 <pre> 02<text>
RAW.376 <pre> 13(4E2nd13)4 /M2OTD
RAW.375 <pre> 13(4/4M2otd13)
RAW.391 <pre> 13(4D2ate: <value>13)
RAW.401 <pre> 13(4B2ad 4C2ommand13) 13(4N2o such nick:2 <nick>13)
RAW.403 <pre> 13(4B2ad 4C2ommand13) (4N2o such channel:2 <chan>13)
RAW.404 <pre> 13(4B2ad 4C2ommand13) (4C2annot send to channel:2 <chan>13)
RAW.406 !script nosuchnickWild 
RAW.421 <pre> 13(4B2ad 4C2ommand13) (4U2nknown command:2 <value>13)
RAW.432 <pre> 13(4B2ad 4C2ommand13) (4<nick> 2is an erroneus nickname..13)
RAW.433 <pre> 13(4N2ick4A2lert13) (2The nickname you specified (4<nick>2) is already in use..13)
RAW.441 <pre> 13(4B2ad 4C2ommand13) (4<nick> 2is not on 4<chan>13)
RAW.442 <pre> 13(4B2ad 4C2ommand13) (2you are not on 4<chan>13)
RAW.443 <pre> 13(4B2ad 4C2ommand13) (4<nick> 2is already on 4<chan>13)
RAW.467 <pre> 13(4K2ey 4A2lert13) (2cannot join 04<chan> 02key required..13)
RAW.471 <pre> 13(4B2ad 4C2ommand13) (2cannot join 04<chan> 2channel is full..13)
RAW.473 <pre> 13(4B2ad 4C2ommand13) (2cannot join 04<chan> 2invite required..13)
RAW.474 <pre> 13(4B2an 4A2lert13) (2cannot join 04<chan> 2you're banned..13)
RAW.475 <pre> 13(4B2ad 4C2ommand13) (2cannot join 04<chan> 2incorrect key..13)
RAW.482 <pre> 13(4O2p4A2lert13) (2You're not channel operator at 4<chan>213)

Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
RGBColors 244,244,244 0,0,0 128,244,128 0,244,64 0,250,0 0,128,0 0,128,64 0,64,0 128,244,244 0,244,244 0,128,244 0,128,192 0,64,128 244,128,64 244,128,0 193,144,0
BaseColors 11,11,13,12

CLineOwner 11
CLineOP 04
CLineHOP 04
CLineVoice 06
CLineRegular 02
CLineMe 13
CLineIrcOP 04

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[Scheme3]
Timestamp ON
TimestampFormat 12(10HH:nn:ss12)

PREFIX 13:12:12:
LOAD !script dreamOXYGEN.load
TEXTCHAN <pre> 11(12<cmode>12<nick>11)10 <text>
TEXTQUERY <pre> 11(12<cmode>12<nick>11)10 <text>
TEXTCHANSELF <pre> 11(12<cmode>12<nick>11)10 <text>
TEXTQUERYSELF <pre> 11(12<cmode>12<nick>11)10 <text>
TEXTMSGSELF <pre> 11/12MSG 12<target>12:10 <text>
ACTIONQUERY 12! 12<cmode>12<nick> <text>
ACTIONCHANSELF 12! 12<cmode>12<nick> <text>
ACTIONQUERYSELF 12! 12<cmode>12<nick> <text>
ACTIONCHAN 12! 12<cmode>12<nick> <text>
NOTICE <pre> 11-11(12<nick>11)11-10 <text>
NOTICESELF <pre> 11/12notice 12<nick>12:10 <text>
NOTICECHANE <pre> 11-11(12<nick>10:12<chan>11)11-10 <text>
NOTICESELFCHAN <pre> 11/12notice 12<chan>12:10 <text>
NOTICESERVER <pre> 11-11(12<server>11)11-10 <text>
DNS <pre> 11(12dns10: 11(12<address>11) 11)
DNSRESOLVE <pre> 11(12r10esolved10: 11(12<naddress> 10- 12<iaddress>11) 11(11<raddress>11) 11)
DNSERROR <pre> 11(12u10nable 12t10o 12r10esolve10: 11(12<iaddress>10<naddress>11) )
NOTIFY <pre> 12<nick>10:12 O10nline 11(10<text>11)
UNOTIFY <pre> 12<nick>10:12 O10ffline 11(10<text>11)
SERVERERROR <pre> 11-12error11- 11(12<text>11)
MODE <pre> 11(12<nick>11)12 S10et 12M10ode 11(12<modes>11)
MODEUSER <pre> 11-12U10sermode11- 11(10<modes>11)
CTCP <pre> 11-12ctcp11-11(12<ctcp> 10<text>11)12 f10rom10: 11(12<nick>11)
CTCPREPLY <pre> 11-12ctcp11-11(12<text>11)12 f10rom10: 11(12<nick>11)
CTCPSELF <pre> 11/12ctcp 12<ctcp>12:10 <nick>
CTCPCHAN <pre> 11-12ctcp11-11(12<ctcp>:12<chan>:10 <text>11)12 f10rom: 11(12<nick>11)
CTCPCHANSELF <pre> 11/12ctcp 12<chan>12:10 <ctcp>
INECHAROWNER .
INVITE <pre> 11(12<nick>11)12 I10nvited 11(12<me>11)12 t10o 11(10<chan>11)
JOIN 11»12»» 11(12<nick>11(10<address>11))12 J10oined 11(12<chan>11)
JOINSELF <pre> 12N10ow talking in 12<chan>
PART 12«11«11« 11(12<nick>11(10<address>11)) 11(10Part:10<text>11)
KICK 12‡‡‡ 11(12<nick>11)12 K10icked 11(12<knick>11(10<text> 11))
KICKSELF 12‡‡‡ 11(12<nick>11)12 K10icked 11(12<knick>11(10<text>11))
REJOIN <pre> 12A10ttempting to rejoin 11(10<chan>11)
QUIT 13¤12¤11¤ 11(12<nick>11(10<address>11)) 11(10<text>11)
NICK <pre> 11(12<nick>11)12 K10nown As 11(12<newnick>11)
NICKSELF <pre> 11(12<nick>11)12 K10nown As 11(12<newnick>11)
TOPIC <pre> 11(12<nick>11)12 T10opic 11'10<text>11'
RAW.001 <pre> 12<text>
RAW.002 <pre> 11(12S10erver:10 <server>11: 12V10ersion:10 <value>11)
RAW.003 <pre> 11(12C10reated:10 <value>11)
RAW.004 !script dreamOXYGEN.raw.004
RAW.005 <pre> 11(12P10rotocols 12s10upported:10 <text>11)
RAW.241 <pre> 11(12U10sers:11 <users> 12I10nvisible:11 <text> 12S10ervers:11 <value>11)
RAW.242 <pre> 11(12O10perators:11 <value>11)
RAW.250 <pre> 11(12T10otal connection:11 <value>11)
RAW.252 <pre> 11(12O10perators: <value>11)
RAW.253 <pre> 11(12U10nknown 12c10onnections: <value>11)
RAW.254 <pre> 11(12N10umber of channels: <value>11)
RAW.255 <pre> 11(12L10ocal 12c10lients: <users> in <value> server(s)11)
RAW.265 <pre> 11(12L10ocal 12U10sers:10 <users> <pre> 10- 12M10ax:10 <value>11)
RAW.266 <pre> 11(12G10lobal 12U10sers:10 <users> <pre> 10- 12M10ax:10 <value>11)
RAW.251 <pre> 11(12U10sers: 10Visibles <users> 12I10nvisibles <text> 12S10ervers <value>11)
RAW.243 <pre> 11(12U10nknown Connections:11 <value>11)
RAW.244 <pre> 11(12C10hannels:11 <value>11)
RAW.301 <pre> 12A10way:11 <text>
RAW.302 <pre> 11(12U10serhost: <nick> <address>11)
RAW.307 <pre> 12R10egistered 12N10ickname: Yes
RAW.311 !script whois7
RAW.312 <pre> 12S10erver: <wserver> <serverinfo>
RAW.313 <pre> 12I10rcop:11 <operline>
RAW.314 !script whowas7
RAW.317 !script %:echo 13:12:12: 12I10dle :10 $OXYGEN.st(%::idletime) 11( 12S10ign on :10 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 11· 12O10nline 12t10ime :10 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 11)
RAW.318 !script whois8
RAW.319 <pre> 12C10hannels:10 <chan>
RAW.324 <pre> 11(12M10odes: at10 <chan> : 11(10 <modes> 11)10 <comments>11)
RAW.332 !script dreamOXYGEN.topic
RAW.333 !script dreamOXYGEN.endtopic
RAW.352 <pre> 12<cmode>12<nick>11(10<address>11) 10 <realname>
RAW.369 !script whowas8
RAW.372 <pre> 10<text>
RAW.376 <pre> 11(12E10nd11)12 /M10OTD
RAW.375 <pre> 11(12/12M10otd11)
RAW.391 <pre> 11(12D10ate: <value>11)
RAW.401 <pre> 11(12B10ad 12C10ommand11) 11(12N10o such nick:10 <nick>11)
RAW.403 <pre> 11(12B10ad 12C10ommand11) (12N10o such channel:10 <chan>11)
RAW.404 <pre> 11(12B10ad 12C10ommand11) (12C10annot send to channel:10 <chan>11)
RAW.406 !script nosuchnickdream
RAW.421 <pre> 11(12B10ad 12C10ommand11) (12U10nknown command:10 <value>11)
RAW.432 <pre> 11(12B10ad 12C10ommand11) (12<nick> 10is an erroneus nickname..11)
RAW.433 <pre> 11(12N10ick12A10lert11) (10The nickname you specified (12<nick>10) is already in use..11)
RAW.441 <pre> 11(12B10ad 12C10ommand11) (12<nick> 10is not on 12<chan>11)
RAW.442 <pre> 11(12B10ad 12C10ommand11) (10you are not on 12<chan>11)
RAW.443 <pre> 11(12B10ad 12C10ommand11) (12<nick> 10is already on 12<chan>11)
RAW.467 <pre> 11(12K10ey 12A10lert11) (10cannot join 12<chan> 11key required..11)
RAW.471 <pre> 11(12B10ad 12C10ommand11) (10cannot join 12<chan> 10channel is full..11)
RAW.473 <pre> 11(12B10ad 12C10ommand11) (10cannot join 12<chan> 10invite required..11)
RAW.474 <pre> 11(12B10an 12A10lert11) (10cannot join 12<chan> 10you're banned..11)
RAW.475 <pre> 11(12B10ad 12C10ommand11) (10cannot join 12<chan> 10incorrect key..11)
RAW.482 <pre> 11(12O10p12A10lert11) (10You're not channel operator at 12<chan>1011)

Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 0,0,125 31,57,255 0,122,200 31,191,255 255,53,31 255,175,95 255,255,170 255,255,128 249,235,227 245,222,211 239,203,186 72,50,0 128,128,128 192,192,192

CLineOwner 15
CLineRegular 10
CLineVoice 11
CLineMe 00
CLineOP 12
CLineHOP 14
CLineIrcOP 14

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[Scheme4]
Timestamp ON
TimestampFormat 12(10HH:nn:ss12)

PREFIX 13:12:12:
LOAD !script blueOXYGEN.load
TEXTCHAN <pre> 11(13<cmode>13<nick>11)00 <text>
TEXTQUERY <pre> 11(13<cmode>13<nick>11)00 <text>
TEXTCHANSELF <pre> 11(13<cmode>13<nick>11)00 <text>
TEXTQUERYSELF <pre> 11(13<cmode>13<nick>11)00 <text>
TEXTMSGSELF <pre> 11/12MSG 13<target>12:00 <text>
ACTIONQUERY 12! 13<cmode>13<nick>00 <text>
ACTIONCHANSELF 12! 13<cmode>13<nick>00 <text>
ACTIONQUERYSELF 12! 13<cmode>13<nick>00 <text>
ACTIONCHAN 12! 13<cmode>13<nick>00 <text>
NOTICE <pre> 11-11(13<nick>11)11-10 <text>
NOTICESELF <pre> 11/12notice 13<nick>12:10 <text>
NOTICECHANE <pre> 11-11(13<nick>10:13<chan>11)11-10 <text>
NOTICESELFCHAN <pre> 11/12notice 13<chan>12:10 <text>
NOTICESERVER <pre> 11-11(13<server>11)11-10 <text>
DNS <pre> 11(13dns10: 11(13<address>11) 11)
DNSRESOLVE <pre> 11(13r10esolved10: 11(13<naddress> 10- 13<iaddress>11) 11(11<raddress>11) 11)
DNSERROR <pre> 11(13u10nable 13t10o 13r10esolve10: 11(13<iaddress>10<naddress>11) )
NOTIFY <pre> 13<nick>10:13 O10nline 11(10<text>11)
UNOTIFY <pre> 13<nick>10:13 O10ffline 11(10<text>11)
SERVERERROR <pre> 11-13error11- 11(13<text>11)
MODE <pre> 11(13<nick>11)13 S10et 13M10ode 11(00<modes>11)
MODEUSER <pre> 11-13U10sermode11- 11(10<modes>11)
CTCP <pre> 11-13ctcp11-11(13<ctcp> 10<text>11)13 f10rom10: 11(13<nick>11)
CTCPREPLY <pre> 11-13ctcp11-11(13<text>11)13 f10rom10: 11(13<nick>11)
CTCPSELF <pre> 11/12ctcp 13<ctcp>12:10 <nick>
CTCPCHAN <pre> 11-13ctcp11-11(13<ctcp>:13<chan>:10 <text>11)13 f10rom: 11(13<nick>11)
CTCPCHANSELF <pre> 11/12ctcp 13<chan>12:10 <ctcp>
INECHAROWNER .
INVITE <pre> 11(13<nick>11)13 I10nvited 11(13<me>11)13 t10o 11(10<chan>11)
JOIN 11»12»» 11(13<nick>11(00<address>11))13 J10oined 11(10<chan>11)
JOINSELF <pre> 13N10ow talking in 13<chan>
PART 12«11«11« 11(13<nick>11(00<address>11)) 11(10Part:00<text>11)
KICK 12‡‡‡ 11(13<nick>11)13 K10icked 11(13<knick>11(00<text> 11))
KICKSELF 12‡‡‡ 11(13<nick>11)13 K10icked 11(13<knick>11(00<text>11))
REJOIN <pre> 13A10ttempting to rejoin 11(10<chan>11)
QUIT 13¤12¤11¤ 11(13<nick>11(00<address>11)) 11(10<text>11)
NICK <pre> 11(13<nick>11)13 K10nown As 11(13<newnick>11)
NICKSELF <pre> 11(13<nick>11)13 K10nown As 11(13<newnick>11)
TOPIC <pre> 11(13<nick>11)13 T10opic 11'00<text>11'
RAW.001 <pre> 13<text>
RAW.002 <pre> 11(13S10erver:10 <server>11: 13V10ersion:10 <value>11)
RAW.003 <pre> 11(13C10reated:10 <value>11)
RAW.004 !script blueOXYGEN.raw.004
RAW.005 <pre> 11(13P10rotocols 13s10upported:10 <text>11)
RAW.241 <pre> 11(13U10sers:11 <users> 13I10nvisible:11 <text> 13S10ervers:11 <value>11)
RAW.242 <pre> 11(13O10perators:11 <value>11)
RAW.250 <pre> 11(13T10otal connection:11 <value>11)
RAW.252 <pre> 11(13O10perators: <value>11)
RAW.253 <pre> 11(13U10nknown 13c10onnections: <value>11)
RAW.254 <pre> 11(13N10umber of channels: <value>11)
RAW.255 <pre> 11(13L10ocal 13c10lients: <users> in <value> server(s)11)
RAW.265 <pre> 11(13L10ocal 13U10sers:10 <users> <pre> 10- 13M10ax:10 <value>11)
RAW.266 <pre> 11(13G10lobal 13U10sers:10 <users> <pre> 10- 13M10ax:10 <value>11)
RAW.251 <pre> 11(13U10sers: 10Visibles <users> 13I10nvisibles <text> 13S10ervers <value>11)
RAW.243 <pre> 11(13U10nknown Connections:11 <value>11)
RAW.244 <pre> 11(13C10hannels:11 <value>11)
RAW.301 <pre> 13A10way:00 <text>
RAW.302 <pre> 11(13U10serhost: <nick> <address>11)
RAW.307 <pre> 13R10egistered 13N10ickname:00 Yes
RAW.311 !script whois5
RAW.312 <pre> 13S10erver:00 <wserver> <serverinfo>
RAW.313 <pre> 13I10rcop:00 <operline>
RAW.314 !script whowas5
RAW.317 !script %:echo 13:12:12: 13I10dle :00 $OXYGEN.st(%::idletime) 11( 13S10ign on :00 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 11· 13O10nline 13t10ime :10 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 11)
RAW.318 !script whois6
RAW.319 <pre> 13C10hannels:00 <chan>
RAW.324 <pre> 11(13M10odes: at10 <chan> : 11(10 <modes> 11)10 <comments>11)
RAW.332 !script blueOXYGEN.topic
RAW.333 !script blueOXYGEN.endtopic
RAW.352 <pre> 13<cmode>13<nick>11(00<address>11) 00 <realname>
RAW.369 !script whowas6
RAW.372 <pre> 10<text>
RAW.376 <pre> 11(13E10nd11)13 /M10OTD
RAW.375 <pre> 11(13/13M10otd11)
RAW.391 <pre> 11(13D10ate: <value>11)
RAW.401 <pre> 11(13B10ad 13C10ommand11) 11(13N10o such nick:10 <nick>11)
RAW.403 <pre> 11(13B10ad 13C10ommand11) (13N10o such channel:10 <chan>11)
RAW.404 <pre> 11(13B10ad 13C10ommand11) (13C10annot send to channel:10 <chan>11)
RAW.406 !script nosuchnickblue
RAW.421 <pre> 11(13B10ad 13C10ommand11) (13U10nknown command:10 <value>11)
RAW.432 <pre> 11(13B10ad 13C10ommand11) (13<nick> 10is an erroneus nickname..11)
RAW.433 <pre> 11(13N10ick13A10lert11) (10The nickname you specified (13<nick>10) is already in use..11)
RAW.441 <pre> 11(13B10ad 13C10ommand11) (13<nick> 10is not on 13<chan>11)
RAW.442 <pre> 11(13B10ad 13C10ommand11) (10you are not on 13<chan>11)
RAW.443 <pre> 11(13B10ad 13C10ommand11) (13<nick> 10is already on 13<chan>11)
RAW.467 <pre> 11(13K10ey 13A10lert11) (10cannot join 13<chan> 11key required..11)
RAW.471 <pre> 11(13B10ad 13C10ommand11) (10cannot join 13<chan> 10channel is full..11)
RAW.473 <pre> 11(13B10ad 13C10ommand11) (10cannot join 13<chan> 10invite required..11)
RAW.474 <pre> 11(13B10an 13A10lert11) (10cannot join 13<chan> 10you're banned..11)
RAW.475 <pre> 11(13B10ad 13C10ommand11) (10cannot join 13<chan> 10incorrect key..11)
RAW.482 <pre> 11(13O10p13A10lert11) (10You're not channel operator at 13<chan>1011)

Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 0,0,145 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 166,208,255 0,100,200 4,140,251 72,188,244 128,128,128 208,208,208 

CLineOwner 15
CLineRegular 00
CLineVoice 13
CLineMe 11
CLineOP 12
CLineHOP 14
CLineIrcOP 14

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[Scheme5]
Timestamp ON
TimestampFormat 02(03HH15:03nn15:03ss02)

PREFIX 02:02:02:
LOAD !script dark.load
TEXTCHAN <pre> 15(02<cmode>02<nick>15)03 <text>
TEXTQUERY <pre> 15(02<cmode>02<nick>15)03 <text>
TEXTCHANSELF <pre> 15(02<cmode>02<nick>15)03 <text>
TEXTQUERYSELF <pre> 15(02<cmode>02<nick>15)03 <text>
TEXTMSGSELF <pre> 02/MSG 02<target>02:03 <text>
ACTIONQUERY 02! 02<cmode>02<nick> 03<text>
ACTIONCHANSELF 02! 02<cmode>02<nick> 03<text>
ACTIONQUERYSELF 02! 02<cmode>02<nick> 03<text>
ACTIONCHAN 02! 02<cmode>02<nick> 03<text>
NOTICE <pre> 15-15(02<nick>15)15-03 <text>
NOTICESELF <pre> 02/notice 02<nick>02:03 <text>
NOTICECHANE <pre> 15-15(02<nick>02:02<chan>15)15-03 <text>
NOTICESELFCHAN <pre> 02/notice 02<chan>02:03 <text>
NOTICESERVER <pre> 15-15(02<server>15)15-03 <text>
DNS <pre> 15(02dns02: 15(03<address>15) 15)
DNSRESOLVE <pre> 15(02r02esolved03: 15(02<naddress> 03- 02<iaddress>15) 15(03<raddress>15) 15)
DNSERROR <pre> 15(02u02nable 02t03o 02r02esolve03: 15(02<iaddress>03<naddress>15) )
NOTIFY <pre> 02<nick>02:02 O02nline 15(03<text>15)
UNOTIFY <pre> 02<nick>02:02 O02ffline 15(03<text>15)
SERVERERROR <pre> 15-02error15- 15(03<text>15)
MODE <pre> 15(02<nick>15)02 S02et 02M02ode 15(02<modes>15)
MODEUSER <pre> 15-02U02sermode15- 15(03<modes>15)
CTCP <pre> 15-02ctcp15-15(02<ctcp> 03<text>15)02 f02rom03: 15(02<nick>15)
CTCPREPLY <pre> 15-02ctcp15-15(03<text>15)02 f02rom03: 15(02<nick>15)
CTCPSELF <pre> 02/ctcp 02<ctcp>02:03 <nick>
CTCPCHAN <pre> 15-02ctcp15-15(02<ctcp>:02<chan>:03 <text>15)02 f02rom: 15(02<nick>15)
CTCPCHANSELF <pre> 02/ctcp 02<chan>02:03 <ctcp>
INECHAROWNER .
INVITE <pre> 15(02<nick>15)02 I02nvited 15(02<me>15)02 t02o 15(02<chan>15)
JOIN 15»02»» 15(02<nick>15(02<address>15))02 J02oined 15(02<chan>15)
JOINSELF <pre> 02N02ow talking in 02<chan>
PART 02«02«15« 15(02<nick>15(02<address>15)) 15(02Part:03<text>15)
KICK 02‡‡‡ 15(02<nick>15)02 K02icked 15(02<knick>15(03<text> 15))
KICKSELF 02‡‡‡ 15(02<nick>15)02 K02icked 15(02<knick>15(03<text>15))
REJOIN <pre> 02A03ttempting to rejoin 15(03<chan>15)
QUIT 02¤15¤03¤ 15(02<nick>15(02<address>15)) 15(03<text>15)
NICK <pre> 15(02<nick>15)02 K02nown As 15(02<newnick>15)
NICKSELF <pre> 15(02<nick>15)02 K02nown As 15(02<newnick>15)
TOPIC <pre> 15(02<nick>15)02 T02opic 15'03<text>15'
RAW.001 <pre> 02<text>
RAW.002 <pre> 15(02S02erver:03 <server>15: 02V02ersion:03 <value>15)
RAW.003 <pre> 15(02C02reated:03 <value>15)
RAW.004 !script dark.raw.004
RAW.005 <pre> 15(02P02rotocols 02s02upported:03 <text>15)
RAW.241 <pre> 15(02U02sers:03 <users> 02I02nvisible:03 <text> 02S02ervers:03 <value>15)
RAW.242 <pre> 15(02O02perators:03 <value>15)
RAW.250 <pre> 15(02T02otal connection:03 <value>15)
RAW.252 <pre> 15(02O02perators:03 <value>15)
RAW.253 <pre> 15(02U02nknown 02c02onnections:03 <value>15)
RAW.254 <pre> 15(02N02umber of channels:03 <value>15)
RAW.255 <pre> 15(02L02ocal 02c02lients: 03<users> 02in 03<value> 02server(s)15)
RAW.265 <pre> 15(02L02ocal 02U02sers:03 <users> <pre> 03- 02M02ax:03 <value>15)
RAW.266 <pre> 15(02G02lobal 02U02sers:03 <users> <pre> 03- 02M02ax:03 <value>15)
RAW.251 <pre> 15(02U02sers: 03Visibles 03<users> 02I02nvisibles 03<text> 02S02ervers 03<value>15)
RAW.243 <pre> 15(02U02nknown Connections:03 <value>15)
RAW.244 <pre> 15(02C02hannels:03 <value>15)
RAW.301 <pre> 02A02way:03 <text>
RAW.302 <pre> 15(02U02serhost: 03<nick> 03<address>15)
RAW.307 <pre> 02R02egistered 02N02ickname: 03Yes
RAW.311 !script whois11
RAW.312 <pre> 02S02erver: 03<wserver> <serverinfo>
RAW.313 <pre> 02I02rcop:03 <operline>
RAW.314 !script whowas11
RAW.317 !script %:echo 02:02:02: 02I02dle :03 $OXYGEN.st(%::idletime) 15( 02S02ign on :03 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 15· 02O02nline 02t02ime :03 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 15)
RAW.318 !script whois12
RAW.319 <pre> 02C02hannels:03 <chan>
RAW.324 <pre> 15(02M02odes: at03 <chan> : 15(02 <modes> 15)03 <comments>15)
RAW.332 !script dark.topic
RAW.333 !script dark.endtopic
RAW.352 <pre> 02<cmode>02<nick>15(02<address>15) 03 <realname>
RAW.369 !script whowas12
RAW.372 <pre> 03<text>
RAW.376 <pre> 15(02E02nd15)02 /M03OTD
RAW.375 <pre> 15(02/02M02otd15)
RAW.391 <pre> 15(02D02ate: 03<value>15)
RAW.401 <pre> 15(02B02ad 02C02ommand15) 15(02N02o such nick:02 <nick>15)
RAW.403 <pre> 15(02B02ad 02C02ommand15) (02N02o such channel:02 <chan>15)
RAW.404 <pre> 15(02B02ad 02C02ommand15) (02C02annot send to channel:02 <chan>15)
RAW.406 !script nosuchnickdark
RAW.421 <pre> 15(02B02ad 02C02ommand15) (02U02nknown command:02 <value>15)
RAW.432 <pre> 15(02B02ad 02C02ommand15) (02<nick> 02is an erroneus nickname..15)
RAW.433 <pre> 15(02N02ick02A02lert15) (03The nickname you specified (02<nick>02) is already in use..15)
RAW.441 <pre> 15(02B02ad 02C02ommand15) (02<nick> 02is not on 02<chan>15)
RAW.442 <pre> 15(02B02ad 02C02ommand15) (03you are not on 02<chan>15)
RAW.443 <pre> 15(02B02ad 02C02ommand15) (02<nick> 02is already on 02<chan>15)
RAW.467 <pre> 15(02K02ey 02A02lert15) (03cannot join 02<chan> 15key required..15)
RAW.471 <pre> 15(02B02ad 02C02ommand15) (03cannot join 02<chan> 02channel is full..15)
RAW.473 <pre> 15(02B02ad 02C02ommand15) (03cannot join 02<chan> 02invite required..15)
RAW.474 <pre> 15(02B02an 02A02lert15) (03cannot join 02<chan> 02you're banned..15)
RAW.475 <pre> 15(02B02ad 02C02ommand15) (03cannot join 02<chan> 02incorrect key..15)
RAW.482 <pre> 15(02O02p02A02lert15) (03You're not channel operator at 02<chan>0315)

CLineOwner 15
CLineRegular 03
CLineVoice 15
CLineMe 04
CLineOP 02
CLineHOP 15
CLineIrcOP 15

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 99,99,99 157,157,157 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 02,03,04,03 

[Scheme6]

Timestamp ON
TimestampFormat 07(14HH:nn:ss07)

PREFIX 07:07:07:
LOAD !script orange.load
TEXTCHAN <pre> 06(07<cmode>07<nick>06)14 <text>
TEXTQUERY <pre> 06(07<cmode>07<nick>06)14 <text>
TEXTCHANSELF <pre> 06(07<cmode>07<nick>06)14 <text>
TEXTQUERYSELF <pre> 06(07<cmode>07<nick>06)14 <text>
TEXTMSGSELF <pre> 07/MSG 07<target>07:14 <text>
ACTIONQUERY 07! 07<cmode>07<nick> 14<text>
ACTIONCHANSELF 07! 07<cmode>07<nick> 14<text>
ACTIONQUERYSELF 07! 07<cmode>07<nick> 14<text>
ACTIONCHAN 07! 07<cmode>07<nick> 14<text>
NOTICE <pre> 06-06(07<nick>06)06-14 <text>
NOTICESELF <pre> 07/notice 07<nick>07:14 <text>
NOTICECHANE <pre> 06-06(07<nick>07:07<chan>06)06-14 <text>
NOTICESELFCHAN <pre> 07/notice 07<chan>07:14 <text>
NOTICESERVER <pre> 06-06(07<server>06)06-14 <text>
DNS <pre> 06(07dns07: 06(14<address>06) 06)
DNSRESOLVE <pre> 06(07r07esolved14: 06(07<naddress> 14- 07<iaddress>06) 06(14<raddress>06) 06)
DNSERROR <pre> 06(07u07nable 07t14o 07r07esolve14: 06(07<iaddress>14<naddress>06) )
NOTIFY <pre> 07<nick>07:07 O07nline 06(14<text>06)
UNOTIFY <pre> 07<nick>07:07 O07ffline 06(14<text>06)
SERVERERROR <pre> 06-07error06- 06(14<text>06)
MODE <pre> 06(07<nick>06)07 S07et 07M07ode 06(07<modes>06)
MODEUSER <pre> 06-07U07sermode06- 06(14<modes>06)
CTCP <pre> 06-07ctcp06-06(07<ctcp> 14<text>06)07 f07rom14: 06(07<nick>06)
CTCPREPLY <pre> 06-07ctcp06-06(14<text>06)07 f07rom14: 06(07<nick>06)
CTCPSELF <pre> 07/ctcp 07<ctcp>07:14 <nick>
CTCPCHAN <pre> 06-07ctcp06-06(07<ctcp>:07<chan>:14 <text>06)07 f07rom: 06(07<nick>06)
CTCPCHANSELF <pre> 07/ctcp 07<chan>07:14 <ctcp>
INECHAROWNER .
INVITE <pre> 06(07<nick>06)07 I07nvited 06(07<me>06)07 t07o 06(07<chan>06)
JOIN 06»07»» 06(07<nick>06(07<address>06))07 J07oined 06(07<chan>06)
JOINSELF <pre> 07N07ow talking in 07<chan>
PART 07«07«06« 06(07<nick>06(07<address>06)) 06(07Part:14<text>06)
KICK 07‡‡‡ 06(07<nick>06)07 K07icked 06(07<knick>06(14<text> 06))
KICKSELF 07‡‡‡ 06(07<nick>06)07 K07icked 06(07<knick>06(14<text>06))
REJOIN <pre> 07A14ttempting to rejoin 06(14<chan>06)
QUIT 07¤06¤14¤ 06(07<nick>06(07<address>06)) 06(14<text>06)
NICK <pre> 06(07<nick>06)07 K07nown As 06(07<newnick>06)
NICKSELF <pre> 06(07<nick>06)07 K07nown As 06(07<newnick>06)
TOPIC <pre> 06(07<nick>06)07 T07opic 06'14<text>06'
RAW.001 <pre> 07<text>
RAW.002 <pre> 06(07S07erver:14 <server>06: 07V07ersion:14 <value>06)
RAW.003 <pre> 06(07C07reated:14 <value>06)
RAW.004 !script orange.raw.004
RAW.005 <pre> 06(07P07rotocols 07s07upported:14 <text>06)
RAW.241 <pre> 06(07U07sers:14 <users> 07I07nvisible:14 <text> 07S07ervers:14 <value>06)
RAW.242 <pre> 06(07O07perators:14 <value>06)
RAW.250 <pre> 06(07T07otal connection:14 <value>06)
RAW.252 <pre> 06(07O07perators:14 <value>06)
RAW.253 <pre> 06(07U07nknown 07c07onnections:14 <value>06)
RAW.254 <pre> 06(07N07umber of channels:14 <value>06)
RAW.255 <pre> 06(07L07ocal 07c07lients: 14<users> 07in 14<value> 07server(s)06)
RAW.265 <pre> 06(07L07ocal 07U07sers:14 <users> <pre> 14- 07M07ax:14 <value>06)
RAW.266 <pre> 06(07G07lobal 07U07sers:14 <users> <pre> 14- 07M07ax:14 <value>06)
RAW.251 <pre> 06(07U07sers: 14Visibles 14<users> 07I07nvisibles 14<text> 07S07ervers 14<value>06)
RAW.243 <pre> 06(07U07nknown Connections:14 <value>06)
RAW.244 <pre> 06(07C07hannels:14 <value>06)
RAW.301 <pre> 07A07way:14 <text>
RAW.302 <pre> 06(07U07serhost: 14<nick> 14<address>06)
RAW.307 <pre> 07R07egistered 07N07ickname: 14Yes
RAW.311 !script whois13
RAW.312 <pre> 07S07erver: 14<wserver> <serverinfo>
RAW.313 <pre> 07I07rcop:14 <operline>
RAW.314 !script whowas13
RAW.317 !script %:echo 07:07:07: 07I07dle :14 $OXYGEN.st(%::idletime) 06( 07S07ign on :14 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 06· 07O07nline 07t07ime :14 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 06)
RAW.318 !script whois14
RAW.319 <pre> 07C07hannels:14 <chan>
RAW.324 <pre> 06(07M07odes: at14 <chan> : 06(07 <modes> 06)14 <comments>06)
RAW.332 !script orange.topic
RAW.333 !script orange.endtopic
RAW.352 <pre> 07<cmode>07<nick>06(07<address>06) 14 <realname>
RAW.369 !script whowas14
RAW.372 <pre> 14<text>
RAW.376 <pre> 06(07E07nd06)07 /M14OTD
RAW.375 <pre> 06(07/07M07otd06)
RAW.391 <pre> 06(07D07ate: 14<value>06)
RAW.401 <pre> 06(07B07ad 07C07ommand06) 06(07N07o such nick:07 <nick>06)
RAW.403 <pre> 06(07B07ad 07C07ommand06) (07N07o such channel:07 <chan>06)
RAW.404 <pre> 06(07B07ad 07C07ommand06) (07C07annot send to channel:07 <chan>06)
RAW.406 !script nosuchnickorange
RAW.421 <pre> 06(07B07ad 07C07ommand06) (07U07nknown command:07 <value>06)
RAW.432 <pre> 06(07B07ad 07C07ommand06) (07<nick> 07is an erroneus nickname..06)
RAW.433 <pre> 06(07N07ick07A07lert06) (14The nickname you specified (07<nick>07) is already in use..06)
RAW.441 <pre> 06(07B07ad 07C07ommand06) (07<nick> 07is not on 07<chan>06)
RAW.442 <pre> 06(07B07ad 07C07ommand06) (14you are not on 07<chan>06)
RAW.443 <pre> 06(07B07ad 07C07ommand06) (07<nick> 07is already on 07<chan>06)
RAW.467 <pre> 06(07K07ey 07A07lert06) (14cannot join 07<chan> 06key required..06)
RAW.471 <pre> 06(07B07ad 07C07ommand06) (14cannot join 07<chan> 07channel is full..06)
RAW.473 <pre> 06(07B07ad 07C07ommand06) (14cannot join 07<chan> 07invite required..06)
RAW.474 <pre> 06(07B07an 07A07lert06) (14cannot join 07<chan> 07you're banned..06)
RAW.475 <pre> 06(07B07ad 07C07ommand06) (14cannot join 07<chan> 07incorrect key..06)
RAW.482 <pre> 06(07O07p07A07lert06) (14You're not channel operator at 07<chan>1406)

CLineOwner 07
CLineRegular 14
CLineVoice 01
CLineMe 01
CLineOP 07
CLineHOP 14
CLineIrcOP 14

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

Colors 00,14,07,07,14,14,07,2,07,14,14,14,14,14,14,14,07,07,14,14,14,00,14,00,14
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 239,97,0 254,128,44 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 90,90,90 208,212,208
BaseColors 02,03,04,03 

[Scheme7]
Timestamp ON
TimestampFormat 03(09HH13:09nn13:09ss03)

PREFIX 13:09:09:
LOAD !script Green.load
TEXTCHAN <pre> 13(03<cmode>03<nick>13)09 <text>
TEXTQUERY <pre> 13(03<cmode>03<nick>13)09 <text>
TEXTCHANSELF <pre> 13(03<cmode>03<nick>13)09 <text>
TEXTQUERYSELF <pre> 13(03<cmode>03<nick>13)09 <text>
TEXTMSGSELF <pre> 03/MSG 03<target>03:09 <text>
ACTIONQUERY 03! 03<cmode>03<nick> 09<text>
ACTIONCHANSELF 03! 03<cmode>03<nick> 09<text>
ACTIONQUERYSELF 03! 03<cmode>03<nick> 09<text>
ACTIONCHAN 03! 03<cmode>03<nick> 09<text>
NOTICE <pre> 13-13(03<nick>13)13-09 <text>
NOTICESELF <pre> 03/notice 03<nick>03:09 <text>
NOTICECHANE <pre> 13-13(03<nick>03:03<chan>13)13-09 <text>
NOTICESELFCHAN <pre> 03/notice 03<chan>03:09 <text>
NOTICESERVER <pre> 13-13(03<server>13)13-09 <text>
DNS <pre> 13(03dns03: 13(09<address>13) 13)
DNSRESOLVE <pre> 13(03r03esolved09: 13(03<naddress> 09- 03<iaddress>13) 13(09<raddress>13) 13)
DNSERROR <pre> 13(03u03nable 03t09o 03r03esolve09: 13(03<iaddress>09<naddress>13) )
NOTIFY <pre> 03<nick>03:03 O03nline 13(09<text>13)
UNOTIFY <pre> 03<nick>03:03 O03ffline 13(09<text>13)
SERVERERROR <pre> 13-03error13- 13(09<text>13)
MODE <pre> 13(03<nick>13)03 S03et 03M03ode 13(03<modes>13)
MODEUSER <pre> 13-03U03sermode13- 13(09<modes>13)
CTCP <pre> 13-03ctcp13-13(03<ctcp> 09<text>13)03 f03rom09: 13(03<nick>13)
CTCPREPLY <pre> 13-03ctcp13-13(09<text>13)03 f03rom09: 13(03<nick>13)
CTCPSELF <pre> 03/ctcp 03<ctcp>03:09 <nick>
CTCPCHAN <pre> 13-03ctcp13-13(03<ctcp>:03<chan>:09 <text>13)03 f03rom: 13(03<nick>13)
CTCPCHANSELF <pre> 03/ctcp 03<chan>03:09 <ctcp>
INECHAROWNER .
INVITE <pre> 13(03<nick>13)03 I03nvited 13(03<me>13)03 t03o 13(03<chan>13)
JOIN 13»03»» 13(03<nick>13(03<address>13))03 J03oined 13(03<chan>13)
JOINSELF <pre> 03N03ow talking in 03<chan>
PART 03«13«13« 13(03<nick>13(03<address>13)) 13(03Part:09<text>13)
KICK 03‡‡‡ 13(03<nick>13)03 K03icked 13(03<knick>13(09<text> 13))
KICKSELF 03‡‡‡ 13(03<nick>13)03 K03icked 13(03<knick>13(09<text>13))
REJOIN <pre> 03A09ttempting to rejoin 13(09<chan>13)
QUIT 03¤13¤09¤ 13(03<nick>13(03<address>13)) 13(09<text>13)
NICK <pre> 13(03<nick>13)03 K03nown As 13(03<newnick>13)
NICKSELF <pre> 13(03<nick>13)03 K03nown As 13(03<newnick>13)
TOPIC <pre> 13(03<nick>13)03 T03opic 13'09<text>13'
RAW.001 <pre> 03<text>
RAW.002 <pre> 13(03S03erver:09 <server>13: 03V03ersion:09 <value>13)
RAW.003 <pre> 13(03C03reated:09 <value>13)
RAW.004 !script Green.raw.004
RAW.005 <pre> 13(03P03rotocols 03s03upported:09 <text>13)
RAW.241 <pre> 13(03U03sers:09 <users> 03I03nvisible:09 <text> 03S03ervers:09 <value>13)
RAW.242 <pre> 13(03O03perators:09 <value>13)
RAW.250 <pre> 13(03T03otal connection:09 <value>13)
RAW.252 <pre> 13(03O03perators:09 <value>13)
RAW.253 <pre> 13(03U03nknown 03c03onnections:09 <value>13)
RAW.254 <pre> 13(03N03umber of channels:09 <value>13)
RAW.255 <pre> 13(03L03ocal 03c03lients: 09<users> 03in 09<value> 03server(s)13)
RAW.265 <pre> 13(03L03ocal 03U03sers:09 <users> <pre> 09- 03M03ax:09 <value>13)
RAW.266 <pre> 13(03G03lobal 03U03sers:09 <users> <pre> 09- 03M03ax:09 <value>13)
RAW.251 <pre> 13(03U03sers: 09Visibles 09<users> 03I03nvisibles 09<text> 03S03ervers 09<value>13)
RAW.243 <pre> 13(03U03nknown Connections:09 <value>13)
RAW.244 <pre> 13(03C03hannels:09 <value>13)
RAW.301 <pre> 03A03way:09 <text>
RAW.302 <pre> 13(03U03serhost: 09<nick> 09<address>13)
RAW.307 <pre> 03R03egistered 03N03ickname: 09Yes
RAW.311 !script whois15
RAW.312 09<pre> 03S03erver: 09<wserver> <serverinfo>
RAW.313 09<pre> 03I03rcop:09 <operline>
RAW.314 !script whowas15
RAW.317 !script %:echo 13:09:09: 03I03dle :09 $OXYGEN.st(%::idletime) 13( 03S03ign on :09 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 13· 03O03nline 03t03ime :09 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 13)
RAW.318 !script whois16
RAW.319 <pre> 03C03hannels:09 <chan>
RAW.324 <pre> 13(03M03odes: at09 <chan> : 13(03 <modes> 13)09 <comments>13)
RAW.332 !script Green.topic
RAW.333 !script Green.endtopic
RAW.352 <pre> 03<cmode>03<nick>13(03<address>13) 09 <realname>
RAW.369 !script whowas16
RAW.372 <pre> 09<text>
RAW.376 <pre> 13(03E03nd13)03 /M09OTD
RAW.375 <pre> 13(03/03M03otd13)
RAW.391 <pre> 13(03D03ate: 09<value>13)
RAW.401 <pre> 13(03B03ad 03C03ommand13) 13(03N03o such nick:03 <nick>13)
RAW.403 <pre> 13(03B03ad 03C03ommand13) (03N03o such channel:03 <chan>13)
RAW.404 <pre> 13(03B03ad 03C03ommand13) (03C03annot send to channel:03 <chan>13)
RAW.406 !script nosuchnickGreen
RAW.421 <pre> 13(03B03ad 03C03ommand13) (03U03nknown command:03 <value>13)
RAW.432 <pre> 13(03B03ad 03C03ommand13) (03<nick> 03is an erroneus nickname..13)
RAW.433 <pre> 13(03N03ick03A03lert13) (09The nickname you specified (03<nick>03) is already in use..13)
RAW.441 <pre> 13(03B03ad 03C03ommand13) (03<nick> 03is not on 03<chan>13)
RAW.442 <pre> 13(03B03ad 03C03ommand13) (09you are not on 03<chan>13)
RAW.443 <pre> 13(03B03ad 03C03ommand13) (03<nick> 03is already on 03<chan>13)
RAW.467 <pre> 13(03K03ey 03A03lert13) (09cannot join 03<chan> 13key required..13)
RAW.471 <pre> 13(03B03ad 03C03ommand13) (09cannot join 03<chan> 03channel is full..13)
RAW.473 <pre> 13(03B03ad 03C03ommand13) (09cannot join 03<chan> 03invite required..13)
RAW.474 <pre> 13(03B03an 03A03lert13) (09cannot join 03<chan> 03you're banned..13)
RAW.475 <pre> 13(03B03ad 03C03ommand13) (09cannot join 03<chan> 03incorrect key..13)
RAW.482 <pre> 13(03O03p03A03lert13) (09You're not channel operator at 03<chan>0913)

CLineOwner 15
CLineRegular 10
CLineVoice 11
CLineMe 01
CLineOP 12
CLineHOP 14
CLineIrcOP 14

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,0,1,0,15
BASECOLORS 00,11,13,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,128,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 20,255,20 0,144,144 91,173,246 7,123,228 60,255,108 128,128,128 208,208,208 

[Scheme8]
Timestamp ON
TimestampFormat 13(15HH12:15nn12:15ss13)

PREFIX 12:12:12:
LOAD !script Blue2.load
TEXTCHAN <pre> 13(12<cmode>12<nick>13)15 <text>
TEXTQUERY <pre> 13(12<cmode>12<nick>13)15 <text>
TEXTCHANSELF <pre> 13(12<cmode>12<nick>13)15 <text>
TEXTQUERYSELF <pre> 13(12<cmode>12<nick>13)15 <text>
TEXTMSGSELF <pre> 12/MSG 12<target>12:15 <text>
ACTIONQUERY 12! 12<cmode>12<nick> 15<text>
ACTIONCHANSELF 12! 12<cmode>12<nick> 15<text>
ACTIONQUERYSELF 12! 12<cmode>12<nick> 15<text>
ACTIONCHAN 12! 12<cmode>12<nick> 15<text>
NOTICE <pre> 13-13(12<nick>13)13-15 <text>
NOTICESELF <pre> 12/notice 12<nick>12:15 <text>
NOTICECHANE <pre> 13-13(12<nick>12:12<chan>13)13-15 <text>
NOTICESELFCHAN <pre> 12/notice 12<chan>12:15 <text>
NOTICESERVER <pre> 13-13(12<server>13)13-15 <text>
DNS <pre> 13(12dns12: 13(15<address>13) 13)
DNSRESOLVE <pre> 13(12r12esolved15: 13(12<naddress> 15- 12<iaddress>13) 13(15<raddress>13) 13)
DNSERROR <pre> 13(12u12nable 12t15o 12r12esolve15: 13(12<iaddress>15<naddress>13) )
NOTIFY <pre> 12<nick>12:12 O12nline 13(15<text>13)
UNOTIFY <pre> 12<nick>12:12 O12ffline 13(15<text>13)
SERVERERROR <pre> 13-12error13- 13(15<text>13)
MODE <pre> 13(12<nick>13)12 S12et 12M12ode 13(12<modes>13)
MODEUSER <pre> 13-12U12sermode13- 13(15<modes>13)
CTCP <pre> 13-12ctcp13-13(12<ctcp> 15<text>13)12 f12rom15: 13(12<nick>13)
CTCPREPLY <pre> 13-12ctcp13-13(15<text>13)12 f12rom15: 13(12<nick>13)
CTCPSELF <pre> 12/ctcp 12<ctcp>12:15 <nick>
CTCPCHAN <pre> 13-12ctcp13-13(12<ctcp>:12<chan>:15 <text>13)12 f12rom: 13(12<nick>13)
CTCPCHANSELF <pre> 12/ctcp 12<chan>12:15 <ctcp>
INECHAROWNER .
INVITE <pre> 13(12<nick>13)12 I12nvited 13(12<me>13)12 t12o 13(12<chan>13)
JOIN 13»12»» 13(12<nick>13(12<address>13))12 J12oined 13(12<chan>13)
JOINSELF <pre> 12N12ow talking in 12<chan>
PART 12«12«13« 13(12<nick>13(12<address>13)) 13(12Part:15<text>13)
KICK 12‡‡‡ 13(12<nick>13)12 K12icked 13(12<knick>13(15<text> 13))
KICKSELF 12‡‡‡ 13(12<nick>13)12 K12icked 13(12<knick>13(15<text>13))
REJOIN <pre> 12A15ttempting to rejoin 13(15<chan>13)
QUIT 12¤13¤15¤ 13(12<nick>13(12<address>13)) 13(15<text>13)
NICK <pre> 13(12<nick>13)12 K12nown As 13(12<newnick>13)
NICKSELF <pre> 13(12<nick>13)12 K12nown As 13(12<newnick>13)
TOPIC <pre> 13(12<nick>13)12 T12opic 13'15<text>13'
RAW.001 <pre> 12<text>
RAW.002 <pre> 13(12S12erver:15 <server>13: 12V12ersion:15 <value>13)
RAW.003 <pre> 13(12C12reated:15 <value>13)
RAW.004 !script Blue2.raw.004
RAW.005 <pre> 13(12P12rotocols 12s12upported:15 <text>13)
RAW.241 <pre> 13(12U12sers:15 <users> 12I12nvisible:15 <text> 12S12ervers:15 <value>13)
RAW.242 <pre> 13(12O12perators:15 <value>13)
RAW.250 <pre> 13(12T12otal connection:15 <value>13)
RAW.252 <pre> 13(12O12perators:15 <value>13)
RAW.253 <pre> 13(12U12nknown 12c12onnections:15 <value>13)
RAW.254 <pre> 13(12N12umber of channels:15 <value>13)
RAW.255 <pre> 13(12L12ocal 12c12lients: 15<users> 12in 15<value> 12server(s)13)
RAW.265 <pre> 13(12L12ocal 12U12sers:15 <users> <pre> 15- 12M12ax:15 <value>13)
RAW.266 <pre> 13(12G12lobal 12U12sers:15 <users> <pre> 15- 12M12ax:15 <value>13)
RAW.251 <pre> 13(12U12sers: 15Visibles 15<users> 12I12nvisibles 15<text> 12S12ervers 15<value>13)
RAW.243 <pre> 13(12U12nknown Connections:15 <value>13)
RAW.244 <pre> 13(12C12hannels:15 <value>13)
RAW.301 <pre> 12A12way:15 <text>
RAW.302 <pre> 13(12U12serhost: 15<nick> 15<address>13)
RAW.307 <pre> 12R12egistered 12N12ickname: 15Yes
RAW.311 !script whois17
RAW.312 <pre> 12S12erver: 15<wserver> <serverinfo>
RAW.313 <pre> 12I12rcop:15 <operline>
RAW.314 !script whowas17
RAW.317 !script %:echo 12:12:12: 12I12dle :15 $OXYGEN.st(%::idletime) 13( 12S12ign on :15 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 13· 12O12nline 12t12ime :15 $OXYGEN.st($calc($ctime - $ctime(%::signontime))) 13)
RAW.318 !script whois18
RAW.319 <pre> 12C12hannels:15 <chan>
RAW.324 <pre> 13(12M12odes: at15 <chan> : 13(12 <modes> 13)15 <comments>13)
RAW.332 !script Blue2.topic
RAW.333 !script Blue2.endtopic
RAW.352 <pre> 12<cmode>12<nick>13(12<address>13) 15 <realname>
RAW.369 !script whowas18
RAW.372 <pre> 15<text>
RAW.376 <pre> 13(12E12nd13)12 /M15OTD
RAW.375 <pre> 13(12/12M12otd13)
RAW.391 <pre> 13(12D12ate: 15<value>13)
RAW.401 <pre> 13(12B12ad 12C12ommand13) 13(12N12o such nick:12 <nick>13)
RAW.403 <pre> 13(12B12ad 12C12ommand13) (12N12o such channel:12 <chan>13)
RAW.404 <pre> 13(12B12ad 12C12ommand13) (12C12annot send to channel:12 <chan>13)
RAW.406 !script nosuchnickBlue2
RAW.421 <pre> 13(12B12ad 12C12ommand13) (12U12nknown command:12 <value>13)
RAW.432 <pre> 13(12B12ad 12C12ommand13) (12<nick> 12is an erroneus nickname..13)
RAW.433 <pre> 13(12N12ick12A12lert13) (15The nickname you specified (12<nick>12) is already in use..13)
RAW.441 <pre> 13(12B12ad 12C12ommand13) (12<nick> 12is not on 12<chan>13)
RAW.442 <pre> 13(12B12ad 12C12ommand13) (15you are not on 12<chan>13)
RAW.443 <pre> 13(12B12ad 12C12ommand13) (12<nick> 12is already on 12<chan>13)
RAW.467 <pre> 13(12K12ey 12A12lert13) (15cannot join 12<chan> 13key required..13)
RAW.471 <pre> 13(12B12ad 12C12ommand13) (15cannot join 12<chan> 12channel is full..13)
RAW.473 <pre> 13(12B12ad 12C12ommand13) (15cannot join 12<chan> 12invite required..13)
RAW.474 <pre> 13(12B12an 12A12lert13) (15cannot join 12<chan> 12you're banned..13)
RAW.475 <pre> 13(12B12ad 12C12ommand13) (15cannot join 12<chan> 12incorrect key..13)
RAW.482 <pre> 13(12O12p12A12lert13) (15You're not channel operator at 12<chan>1513)

CLineOwner 13
CLineRegular 00
CLineVoice 15
CLineMe 13
CLineOP 12
CLineHOP 14
CLineIrcOP 14

CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

Colors 02,14,07,07,15,15,07,2,07,14,14,14,14,14,14,14,07,07,14,14,14,02,00,02,15
RGBColors 255,255,255 0,0,0 0,50,100 0,148,0 255,0,0 128,0,0 249,235,68 254,128,44 255,255,128 255,255,150 0,148,144 0,255,255 34,145,255 1,85,205 90,90,90 208,212,208
BaseColors 02,03,04,03 
