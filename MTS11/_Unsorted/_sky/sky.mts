[MTS]
NAME Sky
AUTHOR ^AcidSkull^
EMAIL mafafa2@cantv.net
WEBSITE http:\\a-script.go.to
DESCRIPTION 7 Schemes
VERSION 2.0
MTSVERSION 1.1

TIMESTAMPFORMAT 6[13hh:nn6]
TIMESTAMP OFF

COLORS 15,12,4,5,14,1,1,1,1,1,1,14,5,4,6,1,1,2,1,5,1,15,1,15,1,15,6,15
RGBCOLORS 150,150,150 59,115,152 47,124,166 0,144,0 62,124,187 80,80,80 120,120,120 255,128,0 255,255,0 0,255,0 67,128,194 114,159,205 51,118,172 161,183,202 0,0,0 250,250,250
FONTDEFAULT Tahoma,12
FONTCHAN Tahoma,12
FONTQUERY Tahoma,12

ACTIONCHAN 6[11Action6] 5<nick>:  0<text> 
ACTIONCHANSELF 6[11Action6] 5<cmode><nick>:  1<text>
ACTIONQUERY 0[12<nick>0]  5<text>
ACTIONQUERYSELF 0[ 12<nick>0 ]  1<text>
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
JOIN 6[11Join6] 12<nick> (0<address>2)
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
TEXTCHAN 13·11· 13<cmode>12<nick> 6<text>
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
RAW.311 !script w.hois %::nick %::address %::realname
RAW.312     11Server: 13 <wserver>
RAW.313 12Stat 6::13 IRC Operator
RAW.314 2<nick>0 was 6[13<address>6] 12[<realname>] 
RAW.315 12Who 6::13 end of /who  1[<value>]
RAW.317 !script idle.t %::idletime
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

Scheme1 Black Sky
Scheme2 Bright
Scheme3 Bright2
Scheme4 Zerox
Scheme5 Brown
Scheme6 Orange

[scheme1]
RGBCOLORS 102,175,217 59,115,152 47,124,166 0,144,0 62,124,187 98,153,221 148,202,252 255,128,0 255,255,0 0,255,0 67,128,194 114,159,205 51,118,172 151,174,196 149,173,196 0,0,0
LOAD Bright2 12S11k13y 6T0he5me 14Loaded...
UNLOAD Black 12S11k13y 6T0he5me 14Unloaded...
LOAD Black 12S11k13y 6T0he5me 14Loaded...

[Scheme2]
LOAD Bright 12S11k13y 6T0he5me 14Loaded...
UNLOAD Bright 12S11k13y 6T0he5me 14Unloaded...
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hois %::nick %::address %::realname
RAW.317 !script idleh.t %::idletime
RAW.312  º 11Server:  ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 13<text>

[Scheme3]
RGBCOLORS 102,175,217 59,115,152 47,124,166 0,144,0 62,124,187 98,153,221 148,202,252 255,128,0 255,255,0 0,255,0 67,128,194 114,159,205 51,118,172 151,174,196 149,173,196 0,0,0
LOAD Bright2 12S11k13y 6T0he5me 14Loaded...
UNLOAD Bright2 12S11k13y 6T0he5me 14Unloaded...
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hois %::nick %::address %::realname
RAW.317 !script idleh.t %::idletime
RAW.312  º 11Server:  ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 13<text>

[scheme4]
UNLOAD Zerox 12S11k13y 6T0he5me 14Unloaded...
LOAD Zerox 12S11k13y 6T0he5me 14Loaded...
FONTDEFAULT Zero Threes,12
FONTCHAN Arial,12
FONTQUERY Zero Threes,12

[scheme5]
LOAD Brown 12S11k13y 6T0he5me 14Loaded...
UNLOAD Brown 12S11k13y 6T0he5me 14Unloaded...
RGBCOLORS 91,91,91 128,128,128 186,153,133 0,144,0 150,150,150 162,150,130 80,80,80 255,128,0 255,255,0 0,255,0 159,159,159 80,80,80 144,144,144 80,80,80 91,91,91 214,210,198
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hois %::nick %::address %::realname
RAW.317 !script idleh.t %::idletime
RAW.312  º 11Server:  ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 6<text>


[Scheme6]
RGBCOLORS 91,91,91 128,128,128 186,153,133 0,144,0 150,150,150 140,140,140 80,80,80 255,128,0 255,255,0 0,255,0 159,159,159 190,113,59 104,104,104 166,166,166 91,91,91 36,36,36
LOAD Orange 12S11k13y 6T0he5me 14Loaded...
UNLOAD Orange 12S11k13y 6T0he5me 14Unloaded...
FONTDEFAULT Bright,12
FONTCHAN Bright,12
FONTQUERY Bright,12
RAW.311 !script wh.hois %::nick %::address %::realname
RAW.317 !script idleh.t %::idletime
RAW.312  º 11Serv:    ¯¯    13 <wserver>
RAW.319  º 11Chans:   ¯¯     13 <chan>
TEXTCHAN 13ù11ù 13<cmode>12<nick> 6<text>
TEXTCHANSELF 13ù11ù 13<cmode>12<me> 13<text>