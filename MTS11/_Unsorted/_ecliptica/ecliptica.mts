[MTS]
NAME Ecliptica::
AUTHOR AcidSkull
EMAIL mafafa2@cantv.net
WEBSITE http:\\a-script.go.to
DESCRIPTION 50 Schemes. 3 Fonts 
VERSION 4.1
MTSVERSION 1.1

ACTIONCHAN [2a1] 112<nick>1: 5<text>1 [2a1]
ACTIONCHANSELF [2a1] 112<cmode><nick>1: 5<text>1 [2a1]
ACTIONQUERY [2a1] 112<nick>1: 5<text>1 [2a1]
ACTIONQUERYSELF 12<cmode><mek>1: 5<text>1
CTCP 14[2Ctcp14] 1[12<nick>1]14  14[1<ctcp>14][1<text>14]
CTCPCHAN 14[2Ctcp14] 14[12<Chan>12]14[1<ctcp>14][1<text>14]
CTCPREPLY 14[2Ctcp Reply14] 14[12<nick>12]14[1<ctcp>14][1<text>14]
CTCPSELF 14[2Ctcp14] 1[12<nick>1]14  14[1<ctcp>14][1<text>14]
CTCPCHANSELF 14[2Ctcp14] 14[12<Chan>12]14[1<ctcp>14][1<text>14]
CTCPREPLYSELF 14[2Ctcp Reply14] 14[12<Chan>12]14[1<ctcp>14][1<text>14]
DNS 12DNS :  14<address>
DNSERROR 12DNS Error :  14unable to resolve <iaddress> ; <naddress>
DNSRESOLVE 12DNS :  14Address <iaddress> ; <naddress>
ECHO 12echo:1 <text>
ECHOTARGET 12echo:1 <text>
ERROR 12Error:1 <text>
INVITE 14[2Invite14]1 <nick> 14has invited you to join 14[2<chan>14]
JOIN 14[2Join14] [10»14] 1[12<nick>1]1 [14<address> 1]
JOINSELF 14[2Channel14] 1 Joining10 <chan> 
KICK 14[2Kick14]1 <nick> 12kick14 <knick> [<text>] - 14[2<chan>14]
KICKSELF 14[2Kick14] [10x14] You have been kicked by <nick> from 14[2<chan>14] [<text>] 
LOAD 12Ecl14ip2tica > 1theme loaded...
MODE 2Modes15:14 <nick> 2sets mode15:14 <modes>
MODEUSER 14[2Mode14] [ 1<modes>14]
NAMES 12Names 14::14 <chan>1 <text>
NICK 14[2Nick14] <nick> 1changes nick to [<newnick>]
NICKSELF 14[2Nick14] Your new nick is [<newnick>] 
NOTICE 14[5Notice14] 14[12<nick>12] [1<text>14]
NOTICECHAN 14[4Notice14]  [1<chan>14] 14[12<nick>12] [1<text>14]
NOTICESELF 14[4Notice14] [1<text>14]
NOTICESELFCHAN 14[4Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[4Notice14] 14[12<nick>12] [1<text>14]



NOTIFY 14[4Notify14] 14[12<nick>12]1 is online  [12<address>1] 14[1<text>14]
NOTONCHAN [2&1] 14You aren`t on a channel
PARENTEXT 1[12<text>1]
PART 14[2Part14] [10«14] 1[12<nick>1]1 [14<address>1]
PREFIX 14:14:
QUIT 14[2Quit14] [10x14] <nick> [<address>] [<text>]
REJOIN 12Rejoining: 1<chan>
SCRIPT ecliptica.mrc
SERVERERROR 14[2Error14] [1<text>14]
TEXTCHAN 14[12<cmode>5<nick>14]6 <text>
TEXTQUERY 14[12<nick>14]1 6<text>
TEXTCHANSELF 14[ 12<cmode>1<me>14]6 <text>
TEXTQUERYSELF 14[1<me>14]6 <text>
TIMESTAMP ON
TIMESTAMPFORMAT 6|10hh:nn6| 1 »10»
TOPIC 14[2Topic14]  1[12<nick>1] sets new topic:10<text>
UNLOAD 12Ecl14ip2tica > 1theme unloaded...
UNOTIFY 14[4Notify14] 14[12<nick>12]1 is Offline  [12<address>1] 14[1<text>14] 

CLINEOP 12
CLINEVOICE 2
CLINEREGULAR 1
CLINEOWNER 4
CLINEME 14
CLINECHAROP 12@
CLINECHARVOICE 12+
CLINECHARREGULAR
CLINEIRCOP 4

COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
BASECOLORS 2,12,11,14
RGBCOLORS 187,187,187 80,115,163 94,121,159 0,144,0 124,155,184 124,155,184 101,118,148 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 20,31,49
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11

Raw.001 12Conected to 14::1 <text>
Raw.002 12Host 14::1 <address>
Raw.003 12Created 14::1 <value>
Raw.005 12Protocols Supportedd 14::1 <text>
RAW.221 12UserModes 2<nick> 14::1 <modes>
RAW.250 12Conectionsd 14::1 <value>
RAW.251 2<users>14 users 14:: 12<text>14 invisible 14:: 1<value>14 servers
RAW.252 12Opers online 14::1 <value>
RAW.253 12Unknown Connections 14::1 <value>
RAW.254 12Channels 14::1 <value>
RAW.255 2Clients14 <users> 14:: 12Servers14 <value>
RAW.265 2Local users14 <users> 14:: 12Max14 <value>
RAW.266 2Global users14 <users> 14:: 12Max14 <value>
RAW.301 12Away 14::1 <text>
RAW.302 12UserHost 14::1 <nick> [adress] [<value>)
RAW.305 12Away 14::1 You're no longer marked as being away
RAW.306 12Away 14::1 You're now marked as being away
RAW.307 12Reg Nick 14::14 <nick>
RAW.311 !script w.hois %::nick %::address %::realname
RAW.312 12Server 14::14 <wserver>
RAW.313 12Stat 14::4 IRC Operator
RAW.314 2<nick>14 was 12[<address>] 1[<realname>]
RAW.315 12Who 14::14 end of /who  1[<value>]
RAW.317 !script idle.t %::idletime
RAW.318 !script
RAW.319 12Channels14:14 <chan>
RAW.324 12Channel Modes 14::14 <modes>
RAW.332 12Topic 14::14 <text>
RAW.333 <pre> 2Set by15:14 <nick> 12on <text>
RAW.341 12Invite 14::14 <nick> has been invited to 1<chan>
RAW.353 12Names 14::14 <chan> <text>
RAW.366 12Names 14::14 end of /names <chan>
RAW.381 12You are now a 14IRC Operator [<address>]
RAW.401 [2&1] 14No such nickname15:14 [<nick>]
RAW.403 [2&1] 14No such nickname15:14 [<chan>]
RAW.404 [2&1] 14Can`t send menssage to 15:14 [<nick>]
RAW.421 [2&1] 14Invalid Command15:14 [<text>]1
RAW.433 [2&1] 14<nick>14 is alredy in use
RAW.467 [2&1] 14Can`t join15:14 [<chan>]1 +k
RAW.471 [2&1] 14Can`t join15:14 [<chan>]1 is full
RAW.473 [2&1] 14Can`t join15:14 [<chan>]1 +i Invited only
RAW.474 [2&1] 14Can`t join15:14 [<chan>]1 Banned
RAW.482 [2&1] 14You should be an IRC Operator

Scheme1 DarkBlue
Scheme2 GrayBlue
Scheme3 Black&White
Scheme4 Gray&Black
Scheme5 Green
Scheme6 Light Blue
Scheme7 L-Blue2
Scheme8 Idhai
Scheme9 Yellow
Scheme10 White
Scheme11 Silence
Scheme12 DarkRide
Scheme13 Ocean
Scheme14 BlueGray
Scheme15 White2
Scheme16 Blue
Scheme17 Arabia
Scheme18 Arena
Scheme19 Rain
Scheme20 WhiteBlue
Scheme21 Kult
Scheme22 Weed
Scheme23 DarkGreen
Scheme24 Nebulosa
Scheme25 White3
Scheme26 Purple
Scheme27 Kult2
Scheme28 Nebulosa2
Scheme29 Def
Scheme30 BlueGray2
Scheme31 Lblue3
Scheme32 Green2
Scheme33 WhiteBlue2
Scheme34 Weed2
Scheme35 DarkBlue2
Scheme36 Sand
Scheme37 Dunnas
Scheme38 idkwtnt
Scheme39 40th
Scheme40 Terminal
Scheme41 Sombra
Scheme42 DarkRide2
Scheme43 BlueGray3
Scheme44 Sblue
Scheme45 Sky1
Scheme46 Sky2
Scheme47 Sky3
Scheme48 Sky4
Scheme49 Sky5

[scheme1]
COLORS 8,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,8,1,8,1,15,6,8
RGBCOLORS 187,187,187 255,255,255 218,232,248 0,144,0 255,0,0 136,182,238 203,223,248 255,128,0 10,10,10 0,255,0 104,163,234 0,255,255 157,191,242 161,183,202 120,169,228 208,208,208
UNLOAD 1DarkBlue 12Ecl14ip2tica > 1theme loaded...
LOAD 1DarkBule 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[ 6Notice14] [1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [12<address>1] 14[1<text>14]

[scheme2]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 131,137,135 180,180,180 0,144,0 255,0,0 140,140,140 180,180,180 255,128,0 255,255,0 0,255,0 90,90,90 0,255,255 160,160,160 161,183,202 128,128,128 14,39,61
UNLOAD 12Gray13Blue 12Ecl14ip2tica > 1theme loaded...
LOAD 12Gray13Blue 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[ 2Nick14] Your new nick is [<newnick>) 
NOTICE 14[ 5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[ 6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[ 6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[ 6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[ 6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[ 6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 1[10 hh:nn 1]14 •

[scheme3]
COLORS 1,0,0,0,14,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,1,0,1,0,15,6,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 255,255,255 255,0,255 128,128,128 180,180,180
ACTIONCHAN [15a1] 115<nick>1: 15<text>1 [15a1]
ACTIONCHANSELF [15a15] 1515<cmode><nick>15: 15<text>15 [15a15]
ACTIONQUERY [15a15] 1515<nick>15: 15<text>15 [15a15]
ACTIONQUERYSELF 15<cmode><mek>15: 15<text>15
CTCP 15[15Ctcp15] 15[15<nick>15)15  15[15<ctcp>15][15<text>15]
CTCPCHAN 15[15Ctcp15] 15[15<Chan>15)15[15<ctcp>15][15<text>15]
CTCPREPLY 15[15Ctcp Reply15] 15[15<nick>15)15[15<ctcp>15][15<text>15]
CTCPSELF 15[15Ctcp15] 15[15<nick>15)15  15[15<ctcp>15][15<text>15]
CTCPCHANSELF 15[15Ctcp15] 15[15<Chan>15)15[15<ctcp>15][15<text>15]
CTCPREPLYSELF 15[15Ctcp Reply15] 15[15<Chan>15)15[15<ctcp>15][15<text>15]
DNS 15DNS :  15<address>
DNSERROR 15DNS Error :  15unable to resolve <iaddress> ; <naddress>
DNSRESOLVE 15DNS :  15Address <iaddress> ; <naddress>
ECHO 15echo:15 <text>
ECHOTARGET 15echo:15 <text>
ERROR 15Error:15 <text>
INVITE 15[ 15Invite15]15 <nick> 15has invited you to join 15[15<chan>15]
JOIN 15[ 15Join15] [15»15) 15[15<nick>15)15 [15<address> 15)
JOINSELF 15[ 15Channel15] 15 Joining15 <chan> 
KICK 15[ 15Kick15]15 <nick> 15kick15 <knick> [<text>) - 15[15<chan>15]
KICKSELF 15[ 15Kick15] [15x15) You have been kicked by <nick> from 15[15<chan>15] [<text>) 
LOAD 15Black&White 15Ecl15ip15tica > 15theme loaded...
MODE 15Modes15:15 <nick> 15sets mode15:15 <modes>
MODEUSER 15[ 15Mode15] [ 15<modes>15]
NAMES 15Names 15::15 <chan>15 <text>
NICK 15[ 15Nick15] <nick> 15changes nick to [<newnick>)
NICKSELF 15[ 15Nick15] Your new nick is [<newnick>) 
NOTICE 15[ 15Notice15] 15[15<nick>15) [15<text>15]
NOTICECHAN 15[ 15Notice15]  [ 15<chan>15] 15[15<nick>15) [15<text>15]
NOTICESELF 15[ 15Notice15] [ 15<text>15]
NOTICESELFCHAN 15[ 15Notice15] [ 15<chan>15]  [15<text>15]
NOTICESERVER 15[ 15Notice15] 15[15<nick>15) [ 15<text>15]
NOTIFY 15[ 15Notify15] 15[15<nick>15)15 is online  [ 15<address>15] 15[ 15<text>15]
NOTONCHAN [15&15] 15You aren`t on a channel
PARENTEXT 15[15<text>15)
PART 15[ 15Part15] [15«15) 15[15<nick>15)15 [15<address>15)
PREFIX 15:15:
QUIT 15[ 15Quit15] [15x15) <nick> [<address>] [<text>)
REJOIN 15Rejoining: 15<chan>
SCRIPT ecliptica.mrc
SERVERERROR 15[ 15Error15] [ 15<text>15]
TEXTCHAN 15[ 15<cmode>15<nick>15] 15<text>
TEXTQUERY 15[ 15<nick>15]15 15<text>
TEXTCHANSELF 15[ 15<cmode>15<me>15] 15<text>
TEXTQUERYSELF 15[ 15<me>15]15 15<text>
TIMESTAMP ON
TIMESTAMPFORMAT 14[15hh:nn14] 
TOPIC 15[ 15Topic15]  15[15<nick>15) sets new topic:15<text>
UNLOAD 15Black&White 15Ecl15ip15tica > 15theme unloaded...
UNOTIFY 15[ 15Notify15] 15[15<nick>15)15 is Offline  [15<address>15] 15[ 15<text>15] 

Raw.001 15Conected to 15::15 <text>
Raw.002 15Host 15::15 <address>
Raw.003 15Created 15::15 <value>
Raw.005 15Protocols Supportedd 15::15 <text>
RAW.221 15UserModes 15<nick> 15::15 <modes>
RAW.250 15Conectionsd 15::15 <value>
RAW.251 15<users>15 users 15:: 15<text>15 invisible 15:: 15<value>15 servers
RAW.252 15Opers online 15::15 <value>
RAW.253 15Unknown Connections 15::15 <value>
RAW.254 15Channels 15::15 <value>
RAW.255 15Clients15 <users> 15:: 15Servers15 <value>
RAW.265 15Local users15 <users> 15:: 15Max15 <value>
RAW.266 15Global users15 <users> 15:: 15Max15 <value>
RAW.301 15Away 15::15 <text>
RAW.302 15UserHost 15::15 <nick> [adress] [<value>)
RAW.305 15Away 15::15 You're no longer marked as being away
RAW.306 15Away 15::15 You're now marked as being away
RAW.307 15Reg Nick 15::15 <nick>
RAW.311 !script w.thois %::nick %::address %::realname
RAW.312 15Server 15::15 <wserver>
RAW.313 15Stat 15::15 IRC Operator
RAW.314 15<nick>15 was 15[<address>] 15[<realname>]
RAW.315 15Who 15::15 end of /who  15[<value>]
RAW.317 !script idle.ti %::idletime
RAW.318 !script
RAW.319 15Channels15:15 <chan>
RAW.324 15Channel Modes 15::15 <modes>
RAW.332 15Topic 15::15 <text>
RAW.333 <pre> 15Set by15:15 <nick> 15on <text>
RAW.341 15Invite 15::15 <nick> has been invited to 15<chan>
RAW.353 15Names 15::15 <chan> <text>
RAW.366 15Names 15::15 end of /names <chan>
RAW.381 15You are now a 15IRC Operator [<address>]
RAW.401 [15&15] 15No such nickname15:15 [<nick>]
RAW.403 [15&15] 15No such nickname15:15 [<chan>]
RAW.404 [15&15] 15Can`t send menssage to 15:15 [<nick>]
RAW.421 [15&15] 15Invalid Command15:15 [<text>]15
RAW.433 [15&15] 15<nick>15 is alredy in use
RAW.467 [15&15] 15Can`t join15:15 [<chan>]15 +k
RAW.471 [15&15] 15Can`t join15:15 [<chan>]15 is full
RAW.473 [15&15] 15Can`t join15:15 [<chan>]15 +i Invited only
RAW.474 [15&15] 15Can`t join15:15 [<chan>]15 Banned
RAW.482 [15&15] 15You should be an IRC Operator


[scheme4]
COLORS 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,14,14,0
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 255,255,255 255,0,255 128,128,128 208,208,208
ACTIONCHAN [1a1] 11<nick>1: 1<text>1 [1a1]
ACTIONCHANSELF [1a1] 11<cmode><nick>1: 1<text>1 [1a1]
ACTIONQUERY [1a1] 11<nick>1: 1<text>1 [1a1]
ACTIONQUERYSELF 1<cmode><mek>1: 1<text>1
CTCP 1[1Ctcp1] 1[1<nick>1)1  1[1<ctcp>1][1<text>1]
CTCPCHAN 1[1Ctcp1] 1[1<Chan>1)1[1<ctcp>1][1<text>1]
CTCPREPLY 1[1Ctcp Reply1] 1[1<nick>1)1[1<ctcp>1][1<text>1]
CTCPSELF 1[1Ctcp1] 1[1<nick>1)1  1[1<ctcp>1][1<text>1]
CTCPCHANSELF 1[1Ctcp1] 1[1<Chan>1)1[1<ctcp>1][1<text>1]
CTCPREPLYSELF 1[1Ctcp Reply1] 1[1<Chan>1)1[1<ctcp>1][1<text>1]
DNS 1DNS :  1<address>
DNSERROR 1DNS Error :  1unable to resolve <iaddress> ; <naddress>
DNSRESOLVE 1DNS :  1Address <iaddress> ; <naddress>
ECHO 1echo:1 <text>
ECHOTARGET 1echo:1 <text>
ERROR 1Error:1 <text>
INVITE 1[ 1Invite1]1 <nick> 1has invited you to join 1[1<chan>1]
JOIN 1[ 1Join1] [1»1) 1[1<nick>1)1 [1<address> 1)
JOINSELF 1[ 1Channel1] 1 Joining1 <chan> 
KICK 1[ 1Kick1]1 <nick> 1kick1 <knick> [<text>) - 1[1<chan>1]
KICKSELF 1[ 1Kick1] [1x1) You have been kicked by <nick> from 1[1<chan>1] [<text>) 
LOAD 1White&Black 1Ecl1ip1tica > 1theme loaded...
MODE 1Modes1:1 <nick> 1sets mode1:1 <modes>
MODEUSER 1[ 1Mode1] [ 1<modes>1]
NAMES 1Names 1::1 <chan>1 <text>
NICK 1[ 1Nick1] <nick> 1changes nick to [<newnick>)
NICKSELF 1[ 1Nick1] Your new nick is [<newnick>) 
NOTICE 1[ 1Notice1] 1[1<nick>1) [1<text>1]
NOTICECHAN 1[ 1Notice1]  [ 1<chan>1] 1[1<nick>1) [1<text>1]
NOTICESELF 1[ 1Notice1] [ 1<text>1]
NOTICESELFCHAN 1[ 1Notice1] [ 1<chan>1]  [1<text>1]
NOTICESERVER 1[ 1Notice1] 1[1<nick>1) [ 1<text>1]
NOTIFY 1[ 1Notify1] 1[1<nick>1)1 is online  [ 1<address>1] 1[ 1<text>1]
NOTONCHAN [1&1] 1You aren`t on a channel
PARENTEXT 1[1<text>1)
PART 1[ 1Part1] [1«1) 1[1<nick>1)1 [1<address>1)
PREFIX 1:1:
QUIT 1[ 1Quit1] [1x1) <nick> [<address>] [<text>)
REJOIN 1Rejoining: 1<chan>
SCRIPT ecliptica.mrc
SERVERERROR 1[ 1Error1] [ 1<text>1]
TEXTCHAN 1[ 1<cmode>1<nick>1] 1<text>
TEXTQUERY 1[ 1<nick>1]1 1<text>
TEXTCHANSELF 1[ 1<cmode>1<me>1] 1<text>
TEXTQUERYSELF 1[ 1<me>1]1 1<text>
TIMESTAMP ON
TIMESTAMPFORMAT 14[1 hh:nn 14] »14» 
TOPIC 1[ 1Topic1]  1[1<nick>1) sets new topic:1<text>
UNLOAD 1White&Black 1Ecl1ip1tica > 1theme unloaded...
UNOTIFY 1[ 1Notify1] 1[1<nick>1)1 is Offline  [1<address>1] 1[ 1<text>1] 

Raw.001 1Conected to 1::1 <text>
Raw.002 1Host 1::1 <address>
Raw.003 1Created 1::1 <value>
Raw.005 1Protocols Supportedd 1::1 <text>
RAW.221 1UserModes 1<nick> 1::1 <modes>
RAW.250 1Conectionsd 1::1 <value>
RAW.251 1<users>1 users 1:: 1<text>1 invisible 1:: 1<value>1 servers
RAW.252 1Opers online 1::1 <value>
RAW.253 1Unknown Connections 1::1 <value>
RAW.254 1Channels 1::1 <value>
RAW.255 1Clients1 <users> 1:: 1Servers1 <value>
RAW.265 1Local users1 <users> 1:: 1Max1 <value>
RAW.266 1Global users1 <users> 1:: 1Max1 <value>
RAW.301 1Away 1::1 <text>
RAW.302 1UserHost 1::1 <nick> [adress] [<value>)
RAW.305 1Away 1::1 You're no longer marked as being away
RAW.306 1Away 1::1 You're now marked as being away
RAW.307 1Reg Nick 1::1 <nick>
RAW.311 !script w.ahois %::nick %::address %::realname
RAW.312 1Server 1::1 <wserver>
RAW.313 1Stat 1::1 IRC Operator
RAW.314 1<nick>1 was 1[<address>] 1[<realname>]
RAW.315 1Who 1::1 end of /who  1[<value>]
RAW.317 !script idle.a %::idletime
RAW.318 !script
RAW.319 1Channels1:1 <chan>
RAW.324 1Channel Modes 1::1 <modes>
RAW.332 1Topic 1::1 <text>
RAW.333 <pre> 1Set by1:1 <nick> 1on <text>
RAW.341 1Invite 1::1 <nick> has been invited to 1<chan>
RAW.353 1Names 1::1 <chan> <text>
RAW.366 1Names 1::1 end of /names <chan>
RAW.381 1You are now a 1IRC Operator [<address>]
RAW.401 [1&1] 1No such nickname1:1 [<nick>]
RAW.403 [1&1] 1No such nickname1:1 [<chan>]
RAW.404 [1&1] 1Can`t send menssage to 1:1 [<nick>]
RAW.421 [1&1] 1Invalid Command1:1 [<text>]1
RAW.433 [1&1] 1<nick>1 is alredy in use
RAW.467 [1&1] 1Can`t join1:1 [<chan>]1 +k
RAW.471 [1&1] 1Can`t join1:1 [<chan>]1 is full
RAW.473 [1&1] 1Can`t join1:1 [<chan>]1 +i Invited only
RAW.474 [1&1] 1Can`t join1:1 [<chan>]1 Banned
RAW.482 [1&1] 1You should be an IRC Operator

CLINEOP 1
CLINEVOICE 14
CLINEREGULAR 1
CLINEOWNER 1
CLINEME 1
CLINECHAROP 1@
CLINECHARVOICE 1+
CLINECHARREGULAR 1
CLINEIRCOP 1

[scheme5]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 0,147,26 2,200,37 0,144,0 210,211,213 0,111,19 0,249,44 255,128,0 255,255,0 0,255,0 0,179,31 0,255,255 0,166,29 218,219,221 0,136,23 0,0,0
UNLOAD 1Green 12Ecl14ip2tica > 1theme loaded...
LOAD 1Green 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[ 2Nick14] Your new nick is [<newnick>) 
NOTICE 14[ 5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[ 6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[ 6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[ 6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[ 6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[ 6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 10[ hh:nn 1] »10»


[scheme6]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 55,111,156 102,153,204 0,144,0 62,124,187 73,134,194 39,112,192 255,128,0 255,255,0 0,255,0 84,141,199 0,255,255 73,134,194 161,183,202 73,134,194 19,62,108
UNLOAD 2Light6Blue 12Ecl14ip2tica > 1theme loaded...
LOAD 2Light6Blue 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[ 2Nick14] Your new nick is [<newnick>) 
NOTICE 14[ 5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[ 6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[ 6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[ 6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[ 6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[ 6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>


[scheme7]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 59,115,152 47,124,166 0,144,0 62,124,187 60,119,185 92,145,203 255,128,0 255,255,0 0,255,0 67,128,194 63,121,180 51,118,172 161,183,202 52,104,163 51,85,113
UNLOAD 2D6Blue2 12Ecl14ip2tica > 1theme loaded...
LOAD 2D6Blue2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[ 2Nick14] Your new nick is [<newnick>) 
NOTICE 14[ 5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[ 6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[ 6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6[ 10hh:nn6 ] 1 »10»

[scheme8]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 59,115,152 109,134,163 0,144,0 62,124,187 60,119,185 162,192,225 255,128,0 255,255,0 0,255,0 128,174,225 63,121,180 108,162,221 161,183,202 112,147,190 0,0,0
UNLOAD 2Idhai 12Ecl14ip2tica > 1theme loaded...
LOAD 2Idhai 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>

[scheme9]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 189,167,6 240,236,159 0,144,0 62,124,187 255,252,183 255,243,98 255,128,0 255,255,0 250,250,250 190,190,190 63,121,180 238,227,17 247,241,135 200,200,200 0,0,0
UNLOAD 2Yellow 12Ecl14ip2tica > 1theme loaded...
LOAD 2Yellow 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>

[scheme10]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 0,0,0 24,62,124 0,144,0 255,0,0 45,58,96 83,83,83 255,128,0 255,255,0 0,255,0 74,128,182 0,255,255 80,108,144 161,183,202 108,108,108 255,255,255
UNLOAD 1White 12Ecl14ip2tica > 1theme loaded...
LOAD 1White 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]

[scheme11]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 82,102,111 93,112,116 0,144,0 255,0,0 55,69,98 101,118,148 255,128,0 255,255,0 0,255,0 72,94,125 0,255,255 67,81,110 161,183,202 56,63,91 29,29,46
UNLOAD 2Silence 12Ecl14ip2tica > 1theme loaded...
LOAD 2Silence 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 1[10 hh:nn 1]14 •

[scheme12]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 68,77,104 80,88,105 0,144,0 255,0,0 85,106,130 83,83,83 255,128,0 255,255,0 0,255,0 63,69,64 0,255,255 81,102,111 133,125,132 108,108,108 7,8,8
UNLOAD 1DarkRide 12Ecl14ip2tica > 1theme loaded...
LOAD 1DarkRide 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 12 [ 10hh:nn12 ] 1 »10»

[scheme13]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 136,144,149 80,88,105 0,144,0 255,0,0 85,106,130 83,83,83 255,128,0 255,255,0 0,255,0 99,97,111 0,255,255 143,141,156 133,125,132 75,73,84 210,208,219
UNLOAD 1Ocean 12Ecl14ip2tica > 1theme loaded...
LOAD 1Ocean 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT [hh:nn]  

[scheme14]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 162,172,177 181,190,200 0,144,0 210,211,213 171,173,182 207,211,218 255,128,0 255,255,0 0,255,0 167,178,190 0,255,255 156,173,177 218,219,221 149,163,176 122,132,141
UNLOAD 1Blue-Gray 12Ecl14ip2tica > 1theme loaded...
LOAD 1Blue-Gray 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 1[10 hh:nn 1]14 •

[scheme15]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 82,102,111 93,112,116 0,144,0 255,0,0 55,69,98 101,118,148 255,128,0 255,255,0 0,255,0 19,44,106 0,255,255 67,81,110 161,183,202 56,63,91 250,250,250
UNLOAD 2White2 12Ecl14ip2tica > 1theme loaded...
LOAD 2White2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»

[scheme16]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 130,176,253 54,129,252 0,144,0 210,211,213 83,147,253 177,206,254 255,128,0 255,255,0 0,255,0 111,164,253 35,117,252 3,74,192 218,219,221 69,138,252 0,13,58
UNLOAD 1Blue 12Ecl14ip2tica > 1theme loaded...
LOAD 1Blue 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 5|10hh:nn5| »10» 

[scheme17]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 91,91,91 100,84,70 0,144,0 210,211,213 96,72,36 115,115,115 255,128,0 255,255,0 0,255,0 151,136,104 0,255,255 155,137,100 218,219,221 112,114,103 214,205,192
UNLOAD Arabia 12Ecl14ip2tica > 1theme loaded...
LOAD 1Arabia 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10» 

[scheme18]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 91,91,91 100,84,70 0,144,0 210,211,213 96,72,36 115,115,115 255,128,0 255,255,0 0,255,0 151,136,104 0,255,255 155,137,100 218,219,221 112,114,103 0,0,0
UNLOAD Arena 12Ecl14ip2tica > 1theme loaded...
LOAD 1Arena 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10» 

[scheme19]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 136,144,149 80,88,105 0,144,0 85,106,130 85,106,130 83,83,83 255,128,0 255,255,0 0,255,0 99,97,111 0,255,255 143,141,156 133,125,132 75,73,84 0,0,0
UNLOAD 1Rain 12Ecl14ip2tica > 1theme loaded...
LOAD 1Rain 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»

[scheme20]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 59,115,152 47,124,166 0,144,0 62,124,187 60,119,185 120,120,120 255,128,0 255,255,0 0,255,0 67,128,194 63,121,180 51,118,172 161,183,202 52,104,163 250,250,250
UNLOAD 1WhiteBlue 12Ecl14ip2tica > 1theme loaded...
LOAD 1WhiteBlue 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>

[scheme21]
RGBCOLORS 187,187,187 0,0,0 24,62,124 0,144,0 255,0,0 45,58,96 83,83,83 255,128,0 255,255,0 0,255,0 74,128,182 0,255,255 80,108,144 161,183,202 108,108,108 208,208,208
UNLOAD 2Kult 12Ecl14ip2tica > 1theme loaded...
LOAD 2Kult 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 1[10 hh:nn 1]14 •

[scheme22]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 134,180,140 65,120,65 0,144,0 109,163,116 109,163,116 77,117,77 255,128,0 255,255,0 0,255,0 96,147,96 0,255,255 78,129,78 213,339,216 136,166,136 3,37,6
UNLOAD 2Weed 12Ecl14ip2tica > 1theme loaded...
LOAD 2Weed 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»

[scheme23]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 134,180,140 65,120,65 0,144,0 109,163,116 109,163,116 77,117,77 255,128,0 255,255,0 0,255,0 96,147,96 0,255,255 78,129,78 213,339,216 136,166,136 0,0,0
UNLOAD 2Dark3Green 12Ecl14ip2tica > 1theme loaded...
LOAD 2Dark3Green 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»

[scheme24]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 80,115,163 94,121,159 0,144,0 124,155,184 124,155,184 101,118,148 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 0,0,0
UNLOAD 2Nebulosa 12Ecl14ip2tica > 1theme loaded...
LOAD 2Nebulosa 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 


[scheme25]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 80,115,163 94,121,159 0,144,0 124,155,184 124,155,184 130,130,130 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 255,255,255
UNLOAD 2White3 12Ecl14ip2tica > 1theme loaded...
LOAD 2White3 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»

[scheme26]

COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 197,199,214 164,175,204 0,144,0 124,155,184 165,171,231 198,202,240 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 73,77,101
UNLOAD 2White3 12Ecl14ip2tica > 1theme loaded...
LOAD 2White3 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6 |10hh:nn6| 1 »10»


[scheme27]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 80,115,163 94,121,159 0,144,0 124,155,184 124,155,184 101,118,148 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 20,31,49
UNLOAD 2Kult2 12Ecl14ip2tica > 1theme loaded...
LOAD 2Kult2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14]6 <text> 
TEXTQUERYSELF 14[ 1<me>14]6 <text>
TIMESTAMPFORMAT 6³10hh:nn6³ 1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme28]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 80,115,163 94,121,159 0,144,0 124,155,184 124,155,184 101,118,148 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 0,0,0
UNLOAD 2Nebulosa2 12Ecl14ip2tica > 1theme loaded...
LOAD 2Nebulosa2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6³10hh:nn6³ 1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme29]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 0,0,0 24,62,124 0,144,0 255,0,0 45,58,96 83,83,83 255,128,0 255,255,0 0,255,0 74,128,182 0,255,255 80,108,144 161,183,202 108,108,108 208,208,208
UNLOAD 1Def3 12Ecl14ip2tica > 1theme loaded...
LOAD 1Def 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6³10hh:nn6³5 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme30]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 162,172,177 181,190,200 0,144,0 210,211,213 171,173,182 207,211,218 255,128,0 255,255,0 0,255,0 167,178,190 0,255,255 156,173,177 218,219,221 149,163,176 122,132,141
UNLOAD 1Blue-Gray2 12Ecl14ip2tica > 1theme loaded...
LOAD 1Blue-Gray2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6[10hh:nn6]1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme31]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 55,111,156 102,153,204 0,144,0 62,124,187 73,134,194 39,112,192 255,128,0 255,255,0 0,255,0 84,141,199 0,255,255 73,134,194 161,183,202 73,134,194 19,62,108
UNLOAD 2L6Blue3 12Ecl14ip2tica > 1theme loaded...
LOAD 2L6Blue3 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6³10hh:nn6³1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme32]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 0,147,26 2,200,37 0,144,0 210,211,213 0,111,19 0,249,44 255,128,0 255,255,0 0,255,0 0,179,31 0,255,255 0,166,29 218,219,221 0,136,23 0,0,0
UNLOAD 1Green2 12Ecl14ip2tica > 1theme loaded...
LOAD 1Green2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6³10hh:nn6³1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme33]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 59,115,152 47,124,166 0,144,0 62,124,187 60,119,185 120,120,120 255,128,0 255,255,0 0,255,0 67,128,194 63,121,180 51,118,172 161,183,202 120,120,120 255,255,255
UNLOAD 1WhiteBlue2 12Ecl14ip2tica > 1theme loaded...
LOAD 1WhiteBlue2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6³10hh:nn6³1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)
ImageStatus photo bg.png

[Scheme34]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 134,180,140 65,120,65 0,144,0 109,163,116 109,163,116 77,117,77 255,128,0 255,255,0 0,255,0 96,147,96 0,255,255 78,129,78 213,339,216 136,166,136 3,37,6
UNLOAD 2Weed2 12Ecl14ip2tica > 1theme loaded...
LOAD 2Weed2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14] 6<text> 
TEXTQUERYSELF 14[ 1<me>14]12 6<text>
TIMESTAMPFORMAT 6³10hh:nn6³1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme35]
COLORS 8,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,8,1,8,1,15,6,8
RGBCOLORS 187,187,187 255,255,255 218,232,248 0,144,0 255,0,0 136,182,238 203,223,248 255,128,0 10,10,10 0,255,0 104,163,234 0,255,255 157,191,242 161,183,202 120,169,228 208,208,208
UNLOAD 1DarkBlue2 12Ecl14ip2tica > 1theme loaded...
LOAD 1DarkBlue2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6³10hh:nn6³1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme36]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 128,128,128 186,153,133 0,144,0 150,150,150 162,150,130 80,80,80 255,128,0 255,255,0 0,255,0 159,159,159 0,255,255 144,144,144 237,235,231 91,91,91 214,210,198
UNLOAD 5Sand 12Ecl14ip2tica > 1theme loaded...
LOAD 5Sand 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14]6 <text> 
TEXTQUERYSELF 14[ 1<me>14]6 <text>
TIMESTAMPFORMAT 6³ 10hh:nn 6³ 1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme37]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 128,128,128 179,172,157 0,144,0 150,150,150 162,150,130 203,199,188 255,128,0 255,255,0 0,255,0 159,159,159 0,255,255 144,144,144 237,235,231 135,135,135 0,0,0
UNLOAD 5Dunnas 12Ecl14ip2tica > 1theme loaded...
LOAD 5Dunnas 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTCHANSELF 14[ 12<cmode>5<me>14]6 <text> 
TEXTQUERYSELF 14[ 1<me>14]6 <text>
TIMESTAMPFORMAT 6³ 10hh:nn 6³ 1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme38]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 128,128,128 186,153,133 0,144,0 150,150,150 162,150,130 0,0,0 255,128,0 255,255,0 0,255,0 159,159,159 0,255,255 144,144,144 237,235,231 91,91,91 255,255,255
UNLOAD 5Idkhtnt 12Ecl14ip2tica > 1theme loaded...
LOAD 5Idkhtnt 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TEXTQUERYSELF 14[ 1<me>14]6 <text>
TIMESTAMPFORMAT 6³ 10hh:nn 6³ 1 ¯10¯
FONTDEFAULT bright,11
FONTCHAN bright,11
FONTQUERY bright,11
RAW.311 !script w.hoist %::nick %::address %::realname
RAW.317 !script idle.tt %::idletime
RAW.312 12º Server 14::14 <wserver>
RAW.319 12º Channels14:14 <chan>
JOIN 14[2Join14] [10¯14) 1[12<nick>1)1 [14<address> 1)
PART 14[2Part14] [10®14) 1[12<nick>1)1 [14<address>1)

[scheme39]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 128,128,128 186,153,133 0,144,0 150,150,150 162,150,130 0,0,0 255,128,0 255,255,0 0,255,0 159,159,159 0,255,255 144,144,144 237,235,231 91,91,91 214,210,198
UNLOAD 140th 12Ecl14ip2tica > 1theme loaded...
LOAD 140th 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14[2Nick14] Your new nick is [<newnick>) 
NOTICE 14[5Notice14] 14[12<nick>12) [1<text>14]
NOTICECHAN 14[6Notice14]  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14[6Notice14] [ 1<text>14]
NOTICESELFCHAN 14[6Notice14] [ 1<chan>14]  [1<text>14]
NOTICESERVER 14[6Notice14] 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 10 hh:nn 6 |1 »10»

[scheme40]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 80,115,163 94,121,159 0,144,0 124,155,184 124,155,184 101,118,148 255,128,0 255,255,0 0,255,0 135,165,205 0,255,255 136,158,181 161,183,202 125,150,174 20,31,49
UNLOAD 1Terminal 12Ecl14ip2tica > 1theme loaded...
LOAD 1Terminal 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14Ý2Nick14Ý Your new nick is [<newnick>) 
NOTICE 14Ý5Notice14Ý 14[12<nick>12) [1<text>14]
NOTICECHAN 14Ý6Notice14Ý  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14Ý6Notice14Ý [ 1<text>14]
NOTICESELFCHAN 14Ý6Notice14Ý [ 1<chan>14]  [1<text>14]
NOTICESERVER 14Ý6Notice14Ý 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6|1 ³10³ 

TEXTCHAN 1Í10Í 12<cmode>5<nick>14 10Í1Í6 <text>
TEXTCHANSELF 1Í10Í 12<cmode>1<me>14 10Í1Í66 <text>
JOIN 14Ý2Join14Ý [10¯14) 1[12<nick>1)1 [14<address>1)
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]

INVITE 14Ý2Invite14Ý1 <nick> 14has invited you to join 14[2<chan>14]
ACTIONCHAN 112<nick>1: 5<text>1 [2a1]
ACTIONCHANSELF 112<cmode><nick>1: 5<text>1 [2a1]
ACTIONQUERY 112<nick>1: 5<text>1 [2a1]
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]
KICKSELF 14Ý2Kick14Ý [10x14) You have been kicked by <nick> from 14[2<chan>14] [<text>)
MODEUSER 14Ý2Mode14Ý [1<modes>14]
NICK 14Ý2Nick14Ý <nick> 1changes nick to [<newnick>)
PART 14Ý2Part14Ý [10®14) 1[12<nick>1)1 [14<address>1)
QUIT 14Ý2Quit14Ý [10x14) <nick> [<address>] [<text>)
TOPIC !script topic.t %::nick %::text 


FONTDEFAULT Terminal,14
FONTCHAN Terminal,14
FONTQUERY Terminal,14

RAW.311 !script w.tis %::nick %::address %::realname
RAW.317 !script idle.dt %::idletime
RAW.312 12Ã Server 14::14 <wserver>
RAW.319 12Ã Channels14:14 <chan>
RAW.332 !script topic.s %::text 

JOINSELF !script chan.s %::chan

[scheme41]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 91,91,91 128,128,128 90,90,90 0,144,0 150,150,150 140,140,140 80,80,80 255,128,0 255,255,0 0,255,0 159,159,159 190,113,59 104,104,104 166,166,166 91,91,91 36,36,36
UNLOAD 1Sombra 12Ecl14ip2tica > 1theme loaded...
LOAD 1Sombra 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14Ý2Nick14Ý Your new nick is [<newnick>) 
NOTICE 14Ý5Notice14Ý 14[12<nick>12) [1<text>14]
NOTICECHAN 14Ý6Notice14Ý  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14Ý6Notice14Ý [ 1<text>14]
NOTICESELFCHAN 14Ý6Notice14Ý [ 1<chan>14]  [1<text>14]
NOTICESERVER 14Ý6Notice14Ý 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6|1 ³10³ 

TEXTCHAN 1Í10Í 12<cmode>5<nick>14 10Í1Í6 <text>
TEXTCHANSELF 1Í10Í 12<cmode>1<me>14 10Í1Í66 <text>
JOIN 14Ý2Join14Ý [10¯14) 1[12<nick>1)1 [14<address>1)
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]

INVITE 14Ý2Invite14Ý1 <nick> 14has invited you to join 14[2<chan>14]
ACTIONCHAN 112<nick>1: 5<text>1 [2a1]
ACTIONCHANSELF 112<cmode><nick>1: 5<text>1 [2a1]
ACTIONQUERY 112<nick>1: 5<text>1 [2a1]
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]
KICKSELF 14Ý2Kick14Ý [10x14) You have been kicked by <nick> from 14[2<chan>14] [<text>)
MODEUSER 14Ý2Mode14Ý [1<modes>14]
NICK 14Ý2Nick14Ý <nick> 1changes nick to [<newnick>)
PART 14Ý2Part14Ý [10®14) 1[12<nick>1)1 [14<address>1)
QUIT 14Ý2Quit14Ý [10x14) <nick> [<address>] [<text>)
TOPIC !script topic.t %::nick %::text 


FONTDEFAULT Terminal,14
FONTCHAN Terminal,14
FONTQUERY Terminal,14

RAW.311 !script w.tis %::nick %::address %::realname
RAW.317 !script idle.dt %::idletime
RAW.312 12Ã Server 14::14 <wserver>
RAW.319 12Ã Channels14:14 <chan>
RAW.332 !script topic.s %::text 

JOINSELF !script chan.s %::chan

[scheme42]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 68,77,104 80,88,105 0,144,0 255,0,0 85,106,130 83,83,83 255,128,0 255,255,0 0,255,0 63,69,64 0,255,255 81,102,111 133,125,132 108,108,108 7,8,8
UNLOAD 1DarkRide2 12Ecl14ip2tica > 1theme loaded...
LOAD 1DarkRide2 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14Ý2Nick14Ý Your new nick is [<newnick>) 
NOTICE 14Ý5Notice14Ý 14[12<nick>12) [1<text>14]
NOTICECHAN 14Ý6Notice14Ý  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14Ý6Notice14Ý [ 1<text>14]
NOTICESELFCHAN 14Ý6Notice14Ý [ 1<chan>14]  [1<text>14]
NOTICESERVER 14Ý6Notice14Ý 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6|1 ³10³ 

TEXTCHAN 1Í10Í 12<cmode>5<nick>14 10Í1Í6 <text>
TEXTCHANSELF 1Í10Í 12<cmode>1<me>14 10Í1Í66 <text>
JOIN 14Ý2Join14Ý [10¯14) 1[12<nick>1)1 [14<address>1)
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]

INVITE 14Ý2Invite14Ý1 <nick> 14has invited you to join 14[2<chan>14]
ACTIONCHAN 112<nick>1: 5<text>1 [2a1]
ACTIONCHANSELF 112<cmode><nick>1: 5<text>1 [2a1]
ACTIONQUERY 112<nick>1: 5<text>1 [2a1]
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]
KICKSELF 14Ý2Kick14Ý [10x14) You have been kicked by <nick> from 14[2<chan>14] [<text>)
MODEUSER 14Ý2Mode14Ý [1<modes>14]
NICK 14Ý2Nick14Ý <nick> 1changes nick to [<newnick>)
PART 14Ý2Part14Ý [10®14) 1[12<nick>1)1 [14<address>1)
QUIT 14Ý2Quit14Ý [10x14) <nick> [<address>] [<text>)
TOPIC !script topic.t %::nick %::text 


FONTDEFAULT Terminal,14
FONTCHAN Terminal,14
FONTQUERY Terminal,14

RAW.311 !script w.tis %::nick %::address %::realname
RAW.317 !script idle.dt %::idletime
RAW.312 12Ã Server 14::14 <wserver>
RAW.319 12Ã Channels14:14 <chan>
RAW.332 !script topic.s %::text 

JOINSELF !script chan.s %::chan

[scheme43]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 162,172,177 181,190,200 0,144,0 210,211,213 171,173,182 207,211,218 255,128,0 255,255,0 0,255,0 167,178,190 0,255,255 156,173,177 218,219,221 149,163,176 122,132,141
UNLOAD 1BlueGray3 12Ecl14ip2tica > 1theme loaded...
LOAD 1BlueGray3 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14Ý2Nick14Ý Your new nick is [<newnick>) 
NOTICE 14Ý5Notice14Ý 14[12<nick>12) [1<text>14]
NOTICECHAN 14Ý6Notice14Ý  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14Ý6Notice14Ý [ 1<text>14]
NOTICESELFCHAN 14Ý6Notice14Ý [ 1<chan>14]  [1<text>14]
NOTICESERVER 14Ý6Notice14Ý 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6|1 ³10³ 

TEXTCHAN 1Í10Í 12<cmode>5<nick>14 10Í1Í6 <text>
TEXTCHANSELF 1Í10Í 12<cmode>1<me>14 10Í1Í66 <text>
JOIN 14Ý2Join14Ý [10¯14) 1[12<nick>1)1 [14<address>1)
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]

INVITE 14Ý2Invite14Ý1 <nick> 14has invited you to join 14[2<chan>14]
ACTIONCHAN 112<nick>1: 5<text>1 [2a1]
ACTIONCHANSELF 112<cmode><nick>1: 5<text>1 [2a1]
ACTIONQUERY 112<nick>1: 5<text>1 [2a1]
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]
KICKSELF 14Ý2Kick14Ý [10x14) You have been kicked by <nick> from 14[2<chan>14] [<text>)
MODEUSER 14Ý2Mode14Ý [1<modes>14]
NICK 14Ý2Nick14Ý <nick> 1changes nick to [<newnick>)
PART 14Ý2Part14Ý [10®14) 1[12<nick>1)1 [14<address>1)
QUIT 14Ý2Quit14Ý [10x14) <nick> [<address>] [<text>)
TOPIC !script topic.t %::nick %::text 


FONTDEFAULT Terminal,14
FONTCHAN Terminal,14
FONTQUERY Terminal,14

RAW.311 !script w.tis %::nick %::address %::realname
RAW.317 !script idle.dt %::idletime
RAW.312 12Ã Server 14::14 <wserver>
RAW.319 12Ã Channels14:14 <chan>
RAW.332 !script topic.s %::text 

JOINSELF !script chan.s %::chan

[scheme44]
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 187,187,187 82,102,111 93,112,116 0,144,0 255,0,0 55,69,98 101,118,148 255,128,0 255,255,0 0,255,0 19,44,106 0,255,255 67,81,110 161,183,202 56,63,91 250,250,250
UNLOAD 1Sblue 12Ecl14ip2tica > 1theme loaded...
LOAD 1Sblue 12Ecl14ip2tica > 1theme loaded...
NICKSELF 14Ý2Nick14Ý Your new nick is [<newnick>) 
NOTICE 14Ý5Notice14Ý 14[12<nick>12) [1<text>14]
NOTICECHAN 14Ý6Notice14Ý  [ 1<chan>14] 14[12<nick>12) [1<text>14]
NOTICESELF 14Ý6Notice14Ý [ 1<text>14]
NOTICESELFCHAN 14Ý6Notice14Ý [ 1<chan>14]  [1<text>14]
NOTICESERVER 14Ý6Notice14Ý 14[12<nick>12) [ 1<text>14]
NOTIFY 14[6Notify14] 14[12<nick>12)1 is online  [ 12<address>1] 14[ 1<text>14]
TIMESTAMPFORMAT 6 |10hh:nn6|1 ³10³ 

TEXTCHAN 1Í10Í 12<cmode>5<nick>14 10Í1Í6 <text>
TEXTCHANSELF 1Í10Í 12<cmode>1<me>14 10Í1Í66 <text>
JOIN 14Ý2Join14Ý [10¯14) 1[12<nick>1)1 [14<address>1)
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]

INVITE 14Ý2Invite14Ý1 <nick> 14has invited you to join 14[2<chan>14]
ACTIONCHAN 112<nick>1: 5<text>1 [2a1]
ACTIONCHANSELF 112<cmode><nick>1: 5<text>1 [2a1]
ACTIONQUERY 112<nick>1: 5<text>1 [2a1]
KICK 14Ý2Kick14Ý1 <nick> 12kick14 <knick> [<text>) - 14[2<chan>14]
KICKSELF 14Ý2Kick14Ý [10x14) You have been kicked by <nick> from 14[2<chan>14] [<text>)
MODEUSER 14Ý2Mode14Ý [1<modes>14]
NICK 14Ý2Nick14Ý <nick> 1changes nick to [<newnick>)
PART 14Ý2Part14Ý [10®14) 1[12<nick>1)1 [14<address>1)
QUIT 14Ý2Quit14Ý [10x14) <nick> [<address>] [<text>)
TOPIC !script topic.t %::nick %::text 


FONTDEFAULT Terminal,14
FONTCHAN Terminal,14
FONTQUERY Terminal,14

RAW.311 !script w.tis %::nick %::address %::realname
RAW.317 !script idle.dt %::idletime
RAW.312 12Ã Server 14::14 <wserver>
RAW.319 12Ã Channels14:14 <chan>
RAW.332 !script topic.s %::text 

JOINSELF !script chan.s %::chan

[scheme45]

TIMESTAMP OFF

COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 150,150,150 59,115,152 47,124,166 0,144,0 62,124,187 80,80,80 120,120,120 255,128,0 255,255,0 0,255,0 67,128,194 114,159,205 51,118,172 161,183,202 0,0,0 250,250,250
FONTDEFAULT Tahoma,12
FONTCHAN Tahoma,12
FONTQUERY Tahoma,12

ACTIONCHAN 6[11Action6] 5<nick>:  0<text> 
ACTIONCHANSELF 6[11Action6] 5<cmode><nick>:  1<text>
ACTIONQUERY 0[12<nick>0]  5<text>
ACTIONQUERYSELF 0[12<nick>0]  1<text>
CTCP 6[11Ctcp6]  12<nick>  6<ctcp>  5<text>
CTCPSELF 6[11Ctcp6]  0<nick>  6<ctcp>  5<text>
CTCPCHAN 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPCHANSELF 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPREPLY 6[11Reply6]  0<nick>  6<ctcp>  5<text>
CTCPREPLYSELF 6[13Reply6]  0<nick>  6<ctcp>  6<text>
DNS 12DNS :   14<address>
DNSERROR 12DNS Error :  14unable to resolve 6<iaddress> ; <naddress>
DNSRESOLVE 12DNS :  14Address 6<iaddress> ; <naddress>
ERROR 12Error:4 <text>
INVITE 6[11Invite6]  12<nick>  6has invited you to join  5<chan>
JOIN 6[11Join6] 12<nick> [0<address>2)
JOINSELF 6[11Join6] Joining10  11<chan> 
KICK 6[11Kick6] 12<nick> 6kick 0<knick> 6[11<text>6]
KICKSELF 6[11Kick6] 12<nick> 6has kick you from 6[11<chan>6] 6[11<text>6]
LOAD 12S11k13y 6T0he5me 14Loaded...
MODE 6[11Mode6] 12<nick> 6sets mode15:14 <modes>
MODEUSER 6[11Mode6]  0<modes>
NAMES 6[11Names6] 12<chan> 0<text>
NICK 6[11Nick6] 12<nick> 5changes nick to 13<newnick>
NICKSELF 6[11Nick6] 0your new nick is 13<newnick>
NOTICE 6[11Notice6] 12<nick> 13<text>
NOTICECHAN 6[11Notice6] 12<chan> 5<nick> 0<text>
NOTICESELF 6[11Notice6] 12<nick> 13<text>
NOTICESELFCHAN 6[11Notice6] 12<chan> 0<text>
NOTICESERVER 6[11Notice6] 12<nick> 0<text>
NOTIFY 6[11Notify6] 12<nick> 0is online 5<address> 13<text>
NOTONCHAN 6[11Error6] 14You're not on a channel
PART 6[11Part6] 12<nick> 6[0<address>6]
QUIT 6[11Quit6] 12<nick> 6[0<address>6] [13<text>6]
REJOIN 12Rejoining: 13<chan>
SERVERERROR 6[11Error6] 0<text>
SCRIPT sky.mrc
TEXTCHAN 13·11· 13<cmode>12<nick> 6 <text>
TEXTQUERY 12<nick> 6<text>
TEXTCHANSELF 13·11· 13<cmode>12<me> 13<text>
TEXTQUERYSELF 12<nick> 13<text>
TOPIC 6[11Topic6] 12<nick> 6sets new topic : 13<text>
UNLOAD 12S11k13y 6T0he5me 14Unloaded...
UNOTIFY 6[11Notify6] 12<nick> 0is offline 5<address> 13<text>

CLINEOP 12
CLINEVOICE 11
CLINEREGULAR 13
CLINEOWNER 4
CLINEME 0
CLINECHAROP 12@
CLINECHARVOICE 12+
CLINECHARREGULAR
CLINEIRCOP 4

Raw.001 12Conected to 6::13 <text>
Raw.002 12Host 6::13 <address>
Raw.003 12Created 6::13 <value>
Raw.005 12Protocols Supported 6::13 <text>
RAW.221 12UserModes 2<nick> 6::13 <modes>
RAW.250 12Connections 6::13 <value>
RAW.251 2<users>6 users 14:: 12<text>6 invisible 14:: 1<value>6 servers
RAW.252 12IRC Opers 6::13 <value>
RAW.253 12Unknown 6::13 <value>
RAW.254 12Channels 6::13 <value>
RAW.255 2Clients6 <users> 14:: 12Servers6 <value>
RAW.265 2Local users6 <users> 14:: 12Max6 <value>
RAW.266 2Global users6 <users> 14:: 12Max6 <value>
RAW.301 12Away 6::13 <text>
RAW.302 12UserHost 14::12 <nick> 6[13adress6] 5[6<value>5]
RAW.305 12Away 6::13 You're no longer marked as being away
RAW.306 12Away 6::13 You're now marked as being away
RAW.307 12Reg Nick 6::13 <nick>
RAW.311 !script w.hoisl %::nick %::address %::realname
RAW.312     11Server: 13 <wserver>
RAW.313 12Stat 6::13 IRC Operator
RAW.314 2<nick>0 was 6[13<address>6] 12[<realname>] 
RAW.315 12Who 6::13 end of /who  1[<value>]
RAW.317 !script idle.tl %::idletime
RAW.318 !script
RAW.319     11Chans: 13 <chan>
RAW.324 12Channel Modes 6::13 <modes>
RAW.332 12Topic 6::13 <text>
RAW.333 2Set by15:6 <nick> 12on 13<text>
RAW.341 12Invite 6::13 12<nick>13 has been invited to 1<chan>
RAW.353 12Names 6::13 <chan> <text>
RAW.366 12Names 6::13 end of /names 0<chan>
RAW.381 12You are now a 14IRC Operator 6[0<address>6]
RAW.401 6No such nickname15:6 [0<nick>6]
RAW.403 6No such nickname15:6 [0<chan>6]
RAW.404 6Can't send menssage to15:6 [0<nick>6]
RAW.421 6Invalid Command15:6 [0<text>6]
RAW.433 6<nick>0 is alredy in use
RAW.467 6Can't join15:6 [0<chan>6] +k
RAW.471 6Can't join15:6 [0<chan>6] is full
RAW.473 6Can't join15:6 [0<chan>6] +i Invited Only
RAW.474 6Can't join15:6 [0<chan>6] Banned
RAW.482 [2&14] 14You should be an IRC Operator

[scheme46]


TIMESTAMP OFF

COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11

ACTIONCHAN 6[11Action6] 5<nick>:  0<text> 
ACTIONCHANSELF 6[11Action6] 5<cmode><nick>:  1<text>
ACTIONQUERY 0[12<nick>0]  5<text>
ACTIONQUERYSELF 0[12<nick>0]  1<text>
CTCP 6[11Ctcp6]  12<nick>  6<ctcp>  5<text>
CTCPSELF 6[11Ctcp6]  0<nick>  6<ctcp>  5<text>
CTCPCHAN 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPCHANSELF 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPREPLY 6[11Reply6]  0<nick>  6<ctcp>  5<text>
CTCPREPLYSELF 6[13Reply6]  0<nick>  6<ctcp>  6<text>
DNS 12DNS :   14<address>
DNSERROR 12DNS Error :  14unable to resolve 6<iaddress> ; <naddress>
DNSRESOLVE 12DNS :  14Address 6<iaddress> ; <naddress>
ERROR 12Error:4 <text>
INVITE 6[11Invite6]  12<nick>  6has invited you to join  5<chan>
JOIN 6[11Join6] 12<nick> [0<address>2)
JOINSELF 6[11Join6] Joining10  11<chan> 
KICK 6[11Kick6] 12<nick> 6kick 0<knick> 6[11<text>6]
KICKSELF 6[11Kick6] 12<nick> 6has kick you from 6[11<chan>6] 6[11<text>6]
MODE 6[11Mode6] 12<nick> 6sets mode15:14 <modes>
MODEUSER 6[11Mode6]  0<modes>
NAMES 6[11Names6] 12<chan> 0<text>
NICK 6[11Nick6] 12<nick> 5changes nick to 13<newnick>
NICKSELF 6[11Nick6] 0your new nick is 13<newnick>
NOTICE 6[11Notice6] 12<nick> 13<text>
NOTICECHAN 6[11Notice6] 12<chan> 5<nick> 0<text>
NOTICESELF 6[11Notice6] 12<nick> 13<text>
NOTICESELFCHAN 6[11Notice6] 12<chan> 0<text>
NOTICESERVER 6[11Notice6] 12<nick> 0<text>
NOTIFY 6[11Notify6] 12<nick> 0is online 5<address> 13<text>
NOTONCHAN 6[11Error6] 14You're not on a channel
PART 6[11Part6] 12<nick> 6[0<address>6]
QUIT 6[11Quit6] 12<nick> 6[0<address>6] [13<text>6]
REJOIN 12Rejoining: 13<chan>
SERVERERROR 6[11Error6] 0<text>
SCRIPT sky.mrc
TEXTCHAN 13·11· 13<cmode>12<nick> 6 <text>
TEXTQUERY 12<nick> 6<text>
TEXTCHANSELF 13·11· 13<cmode>12<me> 13<text>
TEXTQUERYSELF 12<nick> 13<text>
TOPIC 6[11Topic6] 12<nick> 6sets new topic : 13<text>
UNOTIFY 6[11Notify6] 12<nick> 0is offline 5<address> 13<text>

CLINEOP 12
CLINEVOICE 11
CLINEREGULAR 13
CLINEOWNER 4
CLINEME 0
CLINECHAROP 12@
CLINECHARVOICE 12+
CLINECHARREGULAR
CLINEIRCOP 4

RGBCOLORS 102,175,217 59,115,152 47,124,166 0,144,0 62,124,187 98,153,221 148,202,252 255,128,0 255,255,0 0,255,0 67,128,194 114,159,205 51,118,172 151,174,196 149,173,196 0,0,0
UNLOAD Black 12S11k13y 6T0he5me 14Unloaded...
LOAD Black 12S11k13y 6T0he5me 14Loaded...

Raw.001 12Conected to 6::13 <text>
Raw.002 12Host 6::13 <address>
Raw.003 12Created 6::13 <value>
Raw.005 12Protocols Supported 6::13 <text>
RAW.221 12UserModes 2<nick> 6::13 <modes>
RAW.250 12Connections 6::13 <value>
RAW.251 2<users>6 users 14:: 12<text>6 invisible 14:: 1<value>6 servers
RAW.252 12IRC Opers 6::13 <value>
RAW.253 12Unknown 6::13 <value>
RAW.254 12Channels 6::13 <value>
RAW.255 2Clients6 <users> 14:: 12Servers6 <value>
RAW.265 2Local users6 <users> 14:: 12Max6 <value>
RAW.266 2Global users6 <users> 14:: 12Max6 <value>
RAW.301 12Away 6::13 <text>
RAW.302 12UserHost 14::12 <nick> 6[13adress6] 5[6<value>5]
RAW.305 12Away 6::13 You're no longer marked as being away
RAW.306 12Away 6::13 You're now marked as being away
RAW.307 12Reg Nick 6::13 <nick>
RAW.311 !script w.hoisl %::nick %::address %::realname
RAW.312     11Server: 13 <wserver>
RAW.313 12Stat 6::13 IRC Operator
RAW.314 2<nick>0 was 6[13<address>6] 12[<realname>] 
RAW.315 12Who 6::13 end of /who  1[<value>]
RAW.317 !script idle.tl %::idletime
RAW.318 !script
RAW.319     11Chans: 13 <chan>
RAW.324 12Channel Modes 6::13 <modes>
RAW.332 12Topic 6::13 <text>
RAW.333 2Set by15:6 <nick> 12on 13<text>
RAW.341 12Invite 6::13 12<nick>13 has been invited to 1<chan>
RAW.353 12Names 6::13 <chan> <text>
RAW.366 12Names 6::13 end of /names 0<chan>
RAW.381 12You are now a 14IRC Operator 6[0<address>6]
RAW.401 6No such nickname15:6 [0<nick>6]
RAW.403 6No such nickname15:6 [0<chan>6]
RAW.404 6Can't send menssage to15:6 [0<nick>6]
RAW.421 6Invalid Command15:6 [0<text>6]
RAW.433 6<nick>0 is alredy in use
RAW.467 6Can't join15:6 [0<chan>6] +k
RAW.471 6Can't join15:6 [0<chan>6] is full
RAW.473 6Can't join15:6 [0<chan>6] +i Invited Only
RAW.474 6Can't join15:6 [0<chan>6] Banned
RAW.482 [2&14] 14You should be an IRC Operator


[Scheme47]

Timestamp off
COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 150,150,150 59,115,152 47,124,166 0,144,0 62,124,187 80,80,80 120,120,120 255,128,0 255,255,0 0,255,0 67,128,194 114,159,205 51,118,172 161,183,202 0,0,0 250,250,250
LOAD Bright 12S11k13y 6T0he5me 14Loaded...
UNLOAD Bright 12S11k13y 6T0he5me 14Unloaded...
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hoisl %::nick %::address %::realname
RAW.317 !script idleh.tl %::idletime
RAW.312  º 11Server:  ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 13<text>
RAW.318 !script
RAW.319     11Chans: 13 <chan>
RAW.324 12Channel Modes 6::13 <modes>
RAW.332 12Topic 6::13 <text>
RAW.333 2Set by15:6 <nick> 12on 13<text>
RAW.341 12Invite 6::13 12<nick>13 has been invited to 1<chan>
RAW.353 12Names 6::13 <chan> <text>
RAW.366 12Names 6::13 end of /names 0<chan>
RAW.381 12You are now a 14IRC Operator 6[0<address>6]
RAW.401 6No such nickname15:6 [0<nick>6]
RAW.403 6No such nickname15:6 [0<chan>6]
RAW.404 6Can't send menssage to15:6 [0<nick>6]
RAW.421 6Invalid Command15:6 [0<text>6]
RAW.433 6<nick>0 is alredy in use
RAW.467 6Can't join15:6 [0<chan>6] +k
RAW.471 6Can't join15:6 [0<chan>6] is full
RAW.473 6Can't join15:6 [0<chan>6] +i Invited Only
RAW.474 6Can't join15:6 [0<chan>6] Banned
RAW.482 [2&14] 14You should be an IRC Operator
RAW.312     11Server: 13 <wserver>
RAW.313 12Stat 6::13 IRC Operator
RAW.314 2<nick>0 was 6[13<address>6] 12[<realname>] 
RAW.315 12Who 6::13 end of /who  1[<value>]
Raw.001 12Conected to 6::13 <text>
Raw.002 12Host 6::13 <address>
Raw.003 12Created 6::13 <value>
Raw.005 12Protocols Supported 6::13 <text>
RAW.221 12UserModes 2<nick> 6::13 <modes>
RAW.250 12Connections 6::13 <value>
RAW.251 2<users>6 users 14:: 12<text>6 invisible 14:: 1<value>6 servers
RAW.252 12IRC Opers 6::13 <value>
RAW.253 12Unknown 6::13 <value>
RAW.254 12Channels 6::13 <value>
RAW.255 2Clients6 <users> 14:: 12Servers6 <value>
RAW.265 2Local users6 <users> 14:: 12Max6 <value>
RAW.266 2Global users6 <users> 14:: 12Max6 <value>
RAW.301 12Away 6::13 <text>
RAW.302 12UserHost 14::12 <nick> 6[13adress6] 5[6<value>5]
RAW.305 12Away 6::13 You're no longer marked as being away
RAW.306 12Away 6::13 You're now marked as being away
RAW.307 12Reg Nick 6::13 <nick>
RAW.311 !script w.hoisl %::nick %::address %::realname
ACTIONCHAN 6[11Action6] 5<nick>:  0<text> 
ACTIONCHANSELF 6[11Action6] 5<cmode><nick>:  1<text>
ACTIONQUERY 0[12<nick>0]  5<text>
ACTIONQUERYSELF 0[12<nick>0]  1<text>
CTCP 6[11Ctcp6]  12<nick>  6<ctcp>  5<text>
CTCPSELF 6[11Ctcp6]  0<nick>  6<ctcp>  5<text>
CTCPCHAN 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPCHANSELF 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPREPLY 6[11Reply6]  0<nick>  6<ctcp>  5<text>
CTCPREPLYSELF 6[13Reply6]  0<nick>  6<ctcp>  6<text>
DNS 12DNS :   14<address>
DNSERROR 12DNS Error :  14unable to resolve 6<iaddress> ; <naddress>
DNSRESOLVE 12DNS :  14Address 6<iaddress> ; <naddress>
ERROR 12Error:4 <text>
INVITE 6[11Invite6]  12<nick>  6has invited you to join  5<chan>
JOIN 6[11Join6] 12<nick> [0<address>2)
JOINSELF 6[11Join6] Joining10  11<chan> 
KICK 6[11Kick6] 12<nick> 6kick 0<knick> 6[11<text>6]
KICKSELF 6[11Kick6] 12<nick> 6has kick you from 6[11<chan>6] 6[11<text>6]
MODE 6[11Mode6] 12<nick> 6sets mode15:14 <modes>
MODEUSER 6[11Mode6]  0<modes>
NAMES 6[11Names6] 12<chan> 0<text>
NICK 6[11Nick6] 12<nick> 5changes nick to 13<newnick>
NICKSELF 6[11Nick6] 0your new nick is 13<newnick>
NOTICE 6[11Notice6] 12<nick> 13<text>
NOTICECHAN 6[11Notice6] 12<chan> 5<nick> 0<text>
NOTICESELF 6[11Notice6] 12<nick> 13<text>
NOTICESELFCHAN 6[11Notice6] 12<chan> 0<text>
NOTICESERVER 6[11Notice6] 12<nick> 0<text>
NOTIFY 6[11Notify6] 12<nick> 0is online 5<address> 13<text>
NOTONCHAN 6[11Error6] 14You're not on a channel
PART 6[11Part6] 12<nick> 6[0<address>6]
QUIT 6[11Quit6] 12<nick> 6[0<address>6] [13<text>6]
REJOIN 12Rejoining: 13<chan>
SERVERERROR 6[11Error6] 0<text>
SCRIPT sky.mrc
TEXTQUERY 12<nick> 6<text>
TEXTQUERYSELF 12<nick> 13<text>
TOPIC 6[11Topic6] 12<nick> 6sets new topic : 13<text>
UNOTIFY 6[11Notify6] 12<nick> 0is offline 5<address> 13<text>

CLINEOP 12
CLINEVOICE 11
CLINEREGULAR 13
CLINEOWNER 4
CLINEME 0
CLINECHAROP 12@
CLINECHARVOICE 12+
CLINECHARREGULAR
CLINEIRCOP 4

[Scheme48]

Timestamp off
LOAD Brown 12S11k13y 6T0he5me 14Loaded...
UNLOAD Brown 12S11k13y 6T0he5me 14Unloaded...
RGBCOLORS 91,91,91 128,128,128 186,153,133 0,144,0 150,150,150 162,150,130 80,80,80 255,128,0 255,255,0 0,255,0 159,159,159 80,80,80 144,144,144 80,80,80 91,91,91 214,210,198
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hoisl %::nick %::address %::realname
RAW.317 !script idleh.tl %::idletime
RAW.312  º 11Server:  ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 6<text>

RAW.318 !script
RAW.319     11Chans: 13 <chan>
RAW.324 12Channel Modes 6::13 <modes>
RAW.332 12Topic 6::13 <text>
RAW.333 2Set by15:6 <nick> 12on 13<text>
RAW.341 12Invite 6::13 12<nick>13 has been invited to 1<chan>
RAW.353 12Names 6::13 <chan> <text>
RAW.366 12Names 6::13 end of /names 0<chan>
RAW.381 12You are now a 14IRC Operator 6[0<address>6]
RAW.401 6No such nickname15:6 [0<nick>6]
RAW.403 6No such nickname15:6 [0<chan>6]
RAW.404 6Can't send menssage to15:6 [0<nick>6]
RAW.421 6Invalid Command15:6 [0<text>6]
RAW.433 6<nick>0 is alredy in use
RAW.467 6Can't join15:6 [0<chan>6] +k
RAW.471 6Can't join15:6 [0<chan>6] is full
RAW.473 6Can't join15:6 [0<chan>6] +i Invited Only
RAW.474 6Can't join15:6 [0<chan>6] Banned
RAW.482 [2&14] 14You should be an IRC Operator
RAW.312     11Server: 13 <wserver>
RAW.313 12Stat 6::13 IRC Operator
RAW.314 2<nick>0 was 6[13<address>6] 12[<realname>] 
RAW.315 12Who 6::13 end of /who  1[<value>]
Raw.001 12Conected to 6::13 <text>
Raw.002 12Host 6::13 <address>
Raw.003 12Created 6::13 <value>
Raw.005 12Protocols Supported 6::13 <text>
RAW.221 12UserModes 2<nick> 6::13 <modes>
RAW.250 12Connections 6::13 <value>
RAW.251 2<users>6 users 14:: 12<text>6 invisible 14:: 1<value>6 servers
RAW.252 12IRC Opers 6::13 <value>
RAW.253 12Unknown 6::13 <value>
RAW.254 12Channels 6::13 <value>
RAW.255 2Clients6 <users> 14:: 12Servers6 <value>
RAW.265 2Local users6 <users> 14:: 12Max6 <value>
RAW.266 2Global users6 <users> 14:: 12Max6 <value>
RAW.301 12Away 6::13 <text>
RAW.302 12UserHost 14::12 <nick> 6[13adress6] 5[6<value>5]
RAW.305 12Away 6::13 You're no longer marked as being away
RAW.306 12Away 6::13 You're now marked as being away
RAW.307 12Reg Nick 6::13 <nick>
RAW.311 !script w.hoisl %::nick %::address %::realname
ACTIONCHAN 6[11Action6] 5<nick>:  0<text> 
ACTIONCHANSELF 6[11Action6] 5<cmode><nick>:  1<text>
ACTIONQUERY 0[12<nick>0]  5<text>
ACTIONQUERYSELF 0[12<nick>0]  1<text>
CTCP 6[11Ctcp6]  12<nick>  6<ctcp>  5<text>
CTCPSELF 6[11Ctcp6]  0<nick>  6<ctcp>  5<text>
CTCPCHAN 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPCHANSELF 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPREPLY 6[11Reply6]  0<nick>  6<ctcp>  5<text>
CTCPREPLYSELF 6[13Reply6]  0<nick>  6<ctcp>  6<text>
DNS 12DNS :   14<address>
DNSERROR 12DNS Error :  14unable to resolve 6<iaddress> ; <naddress>
DNSRESOLVE 12DNS :  14Address 6<iaddress> ; <naddress>
ERROR 12Error:4 <text>
INVITE 6[11Invite6]  12<nick>  6has invited you to join  5<chan>
JOIN 6[11Join6] 12<nick> [0<address>2)
JOINSELF 6[11Join6] Joining10  11<chan> 
KICK 6[11Kick6] 12<nick> 6kick 0<knick> 6[11<text>6]
KICKSELF 6[11Kick6] 12<nick> 6has kick you from 6[11<chan>6] 6[11<text>6]
MODE 6[11Mode6] 12<nick> 6sets mode15:14 <modes>
MODEUSER 6[11Mode6]  0<modes>
NAMES 6[11Names6] 12<chan> 0<text>
NICK 6[11Nick6] 12<nick> 5changes nick to 13<newnick>
NICKSELF 6[11Nick6] 0your new nick is 13<newnick>
NOTICE 6[11Notice6] 12<nick> 13<text>
NOTICECHAN 6[11Notice6] 12<chan> 5<nick> 0<text>
NOTICESELF 6[11Notice6] 12<nick> 13<text>
NOTICESELFCHAN 6[11Notice6] 12<chan> 0<text>
NOTICESERVER 6[11Notice6] 12<nick> 0<text>
NOTIFY 6[11Notify6] 12<nick> 0is online 5<address> 13<text>
NOTONCHAN 6[11Error6] 14You're not on a channel
PART 6[11Part6] 12<nick> 6[0<address>6]
QUIT 6[11Quit6] 12<nick> 6[0<address>6] [13<text>6]
REJOIN 12Rejoining: 13<chan>
SERVERERROR 6[11Error6] 0<text>
SCRIPT sky.mrc
TEXTQUERY 12<nick> 6<text>
TEXTQUERYSELF 12<nick> 13<text>
TOPIC 6[11Topic6] 12<nick> 6sets new topic : 13<text>
UNOTIFY 6[11Notify6] 12<nick> 0is offline 5<address> 13<text>

CLINEOP 12
CLINEVOICE 11
CLINEREGULAR 13
CLINEOWNER 4
CLINEME 0
CLINECHAROP 12@
CLINECHARVOICE 12+
CLINECHARREGULAR
CLINEIRCOP 4

[Scheme49]

Timestamp off
RGBCOLORS 91,91,91 128,128,128 186,153,153 0,144,0 150,150,150 140,140,140 80,80,80 255,128,0 255,255,0 0,255,0 159,159,159 190,113,59 104,104,104 166,166,166 91,91,91 36,36,36
LOAD Orange 12S11k13y 6T0he5me 14Loaded...
UNLOAD Orange 12S11k13y 6T0he5me 14Unloaded...
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hoisl %::nick %::address %::realname
RAW.317 !script idleh.tl %::idletime
RAW.312  º 11Serv:    ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 13<text>
RAW.318 !script
RAW.319     11Chans: 13 <chan>
RAW.324 12Channel Modes 6::13 <modes>
RAW.332 12Topic 6::13 <text>
RAW.333 2Set by15:6 <nick> 12on 13<text>
RAW.341 12Invite 6::13 12<nick>13 has been invited to 1<chan>
RAW.353 12Names 6::13 <chan> <text>
RAW.366 12Names 6::13 end of /names 0<chan>
RAW.381 12You are now a 14IRC Operator 6[0<address>6]
RAW.401 6No such nickname15:6 [0<nick>6]
RAW.403 6No such nickname15:6 [0<chan>6]
RAW.404 6Can't send menssage to15:6 [0<nick>6]
RAW.421 6Invalid Command15:6 [0<text>6]
RAW.433 6<nick>0 is alredy in use
RAW.467 6Can't join15:6 [0<chan>6] +k
RAW.471 6Can't join15:6 [0<chan>6] is full
RAW.473 6Can't join15:6 [0<chan>6] +i Invited Only
RAW.474 6Can't join15:6 [0<chan>6] Banned
RAW.482 [2&14] 14You should be an IRC Operator
RAW.312     11Server: 13 <wserver>
RAW.313 12Stat 6::13 IRC Operator
RAW.314 2<nick>0 was 6[13<address>6] 12[<realname>] 
RAW.315 12Who 6::13 end of /who  1[<value>]
Raw.001 12Conected to 6::13 <text>
Raw.002 12Host 6::13 <address>
Raw.003 12Created 6::13 <value>
Raw.005 12Protocols Supported 6::13 <text>
RAW.221 12UserModes 2<nick> 6::13 <modes>
RAW.250 12Connections 6::13 <value>
RAW.251 2<users>6 users 14:: 12<text>6 invisible 14:: 1<value>6 servers
RAW.252 12IRC Opers 6::13 <value>
RAW.253 12Unknown 6::13 <value>
RAW.254 12Channels 6::13 <value>
RAW.255 2Clients6 <users> 14:: 12Servers6 <value>
RAW.265 2Local users6 <users> 14:: 12Max6 <value>
RAW.266 2Global users6 <users> 14:: 12Max6 <value>
RAW.301 12Away 6::13 <text>
RAW.302 12UserHost 14::12 <nick> 6[13adress6] 5[6<value>5]
RAW.305 12Away 6::13 You're no longer marked as being away
RAW.306 12Away 6::13 You're now marked as being away
RAW.307 12Reg Nick 6::13 <nick>
RAW.311 !script w.hoisl %::nick %::address %::realname
ACTIONCHAN 6[11Action6] 5<nick>:  0<text> 
ACTIONCHANSELF 6[11Action6] 5<cmode><nick>:  1<text>
ACTIONQUERY 0[12<nick>0]  5<text>
ACTIONQUERYSELF 0[12<nick>0]  1<text>
CTCP 6[11Ctcp6]  12<nick>  6<ctcp>  5<text>
CTCPSELF 6[11Ctcp6]  0<nick>  6<ctcp>  5<text>
CTCPCHAN 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPCHANSELF 6[11Ctcp6]  11[0<chan>11]0  12<nick>  6<ctcp>  5<text>
CTCPREPLY 6[11Reply6]  0<nick>  6<ctcp>  5<text>
CTCPREPLYSELF 6[13Reply6]  0<nick>  6<ctcp>  6<text>
DNS 12DNS :   14<address>
DNSERROR 12DNS Error :  14unable to resolve 6<iaddress> ; <naddress>
DNSRESOLVE 12DNS :  14Address 6<iaddress> ; <naddress>
ERROR 12Error:4 <text>
INVITE 6[11Invite6]  12<nick>  6has invited you to join  5<chan>
JOIN 6[11Join6] 12<nick> [0<address>2]
JOINSELF 6[11Join6] Joining10  11<chan> 
KICK 6[11Kick6] 12<nick> 6kick 0<knick> 6[11<text>6]
KICKSELF 6[11Kick6] 12<nick> 6has kick you from 6[11<chan>6] 6[11<text>6]
MODE 6[11Mode6] 12<nick> 6sets mode15:14 <modes>
MODEUSER 6[11Mode6]  0<modes>
NAMES 6[11Names6] 12<chan> 0<text>
NICK 6[11Nick6] 12<nick> 5changes nick to 13<newnick>
NICKSELF 6[11Nick6] 0your new nick is 13<newnick>
NOTICE 6[11Notice6] 12<nick> 13<text>
NOTICECHAN 6[11Notice6] 12<chan> 5<nick> 0<text>
NOTICESELF 6[11Notice6] 12<nick> 13<text>
NOTICESELFCHAN 6[11Notice6] 12<chan> 0<text>
NOTICESERVER 6[11Notice6] 12<nick> 0<text>
NOTIFY 6[11Notify6] 12<nick> 0is online 5<address> 13<text>
NOTONCHAN 6[11Error6] 14You're not on a channel
PART 6[11Part6] 12<nick> 6[0<address>6]
QUIT 6[11Quit6] 12<nick> 6[0<address>6] [13<text>6]
REJOIN 12Rejoining: 13<chan>
SERVERERROR 6[11Error6] 0<text>
SCRIPT sky.mrc
TEXTQUERY 12<nick> 6<text>
TEXTQUERYSELF 12<nick> 13<text>
TOPIC 6[11Topic6] 12<nick> 6sets new topic : 13<text>
UNOTIFY 6[11Notify6] 12<nick> 0is offline 5<address> 13<text>

CLINEOP 12
CLINEVOICE 11
CLINEREGULAR 13
CLINEOWNER 4
CLINEME 0
CLINECHAROP 12@
CLINECHARVOICE 12+
CLINECHARREGULAR
CLINEIRCOP 4