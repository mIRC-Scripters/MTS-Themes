[mts]
; Theme information
Name BlackY
MTSVersion 1.1
Author J_S_P
Version 1.0
EMail anyirc@yahoo.com
Prefix 0>
 
 
 
FontDefault Terminal,12
FontChan Terminal,12
FontQuery Terminal,12
 
Colors 01,00,4,0,00,00,00,4,11,00,00,00,00,4,00,0,00,00,00,00,00,1,00,1,00,00
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 74,197,255 0,128,192 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,0,0 128,0,0 72,12,0 128,128,128 203,203,203
 
CLineOwner 00
CLineCharOwner 11!
CLineOp 00
CLineCharOp 11@
CLineHOp 00
CLineCharHOp 11*
CLineCharVoice 11+
CLineVoice 00
CLineRegular 00
CLineFriend 04
CLineEnemy 11
CLineIrcOp 07
 
ParenText 4(0<text>4)
 
TextChan <pre>4[11<cmode>0<nick>4]0 <text>
 
TextChanSelf <pre>4[11<cmode>0<me>4]0 <text>
 
ActionChan 0-->4[11<cmode>0<nick>4]0 <text>
 
ActionChanSelf 0-->4[11<cmode>0<me>4]0 <text>
 
NoticeChan 0-->4(11N0otice 11C00han4) 11F0rom 4[11<cmode>0<nick> 0<chan>4]0 <text>
 
Notice 0-->4(11N0otice4) 11F0rom 4[0<nick>4]0 <text>
 
NoticeSelf 0-->4(11N0otice4) 11T0o 4[0<nick>4]0 <text>
 
NoticeSelfChan 0-->4(11N0otice4) 11T0o 4[0<chan>4]0 <text>
 
TextQuery <pre>4[11<cmode>0<nick>4]0 <text>
 
TextQuerySelf <pre>4[11<cmode>0<me>4]0 <text>
 
ActionQuery 0-->4[0<nick>4]0 <text>
 
ActionQuerySelf 0-->4[0<me>4]0 <text>
TextMsg 0-->4(11P0msg4) 11F0rom 4[0<nick>4]0 <text>
 
TextMsgSelf 0-->4(11P0msg4) 11T0o 4[0<nick>4]0 <text>
 
Mode <pre>4[0<nick>4]11 S0et 11M0ode 11T0o 4(0<modes>4)
 
ModeUser <pre>4[0<me>4]11 S0et 11M0ode 11T0o 4(0<modes>4)
 
Join <pre>4[0<nick>11:15<address>4]11 J0oined 4(0<chan>4)
 
JoinSelf <pre>4[0<nick>11:15<address>4]11 J0oined 4(0<chan>4)
 
Part <pre>4[0<nick>11:15 <address>4]11 P0arted 4(0<text>4)
 
Kick <pre>4[0<nick>4]11 K0icked 4[0<knick>4]0 <text>
 
 
KickSelf <pre>4[0<nick>4]11 K0icked 4[0<knick>4]0 <text>
Quit <pre>4[0<nick>11:15 <address>4]11 Q0uit <parentext>
 
Topic <pre>4[0<nick>4]11 S0et 11T0opic 4"0<text>4"
 
Nick <pre>4[0<nick>4]11 I0s 11N0ow 11K0nown 11A0s 4[0<newnick>4]
 
NickSelf <pre>4[0<nick>4]11 I0s 11N0ow 11K0nown 11A0s 4[0<newnick>4]
Invite 0-->4[11<cmode>0<nick>4]11 I0nvites 11Y0ou 11T0o 11J0oin 4(0<chan>4)
 
ServerError 0-->4(11S0erver 11E0rror4)0 <text>
 
Rejoin 0-->11A0ttempting 11T0o 11R0ejoin11...
 
Ctcp <pre>4[0<nick>4]0 <ctcp>
 
CtcpChan <pre>4[0<nick>11:0<chan>4]0 <ctcp>
 
CtcpSelf 0-->4[0<nick>4]0 <ctcp>
 
CtcpChanSelf 0-->4[0<chan>4]11 <ctcp>
 
CtcpReply 0-->4[0<nick>11:0<chan>4]11:4(0<ctcp> 11R0eply4)0 <text>
 
Notify <pre>4[0<nick>4]11 I0s 11O0n11L0ine
 
UNotify <pre>4[0<nick>4]11 I0s 11O0ff11L0ine
 
Wallop 0-->4(11W0allop4)11:4[0<nick>4]0 <text>
 
NoticeServer 0-->4(11N0otice 11S0erver4)0 <text>
DNS 0-->4(0DNS4)11 L0ooking 11U0p 4(15<address>4)11...
 
DNSError 0-->4(0DNS4)11 C0ould 11N0ot 11R0esolve 4(0<address>4)
 
DNSResolve 0-->4(0DNS4)11 R0esolved 4[0<nick>11:15<address>4]11:4(0<naddress>11:0<iaddress>11:0<raddress>4)
 
Echo <pre><text>
 
EchoTarget <pre><text>
Error 0-->4(11E0rror4)0 <text>
 
Load 0-->4(0Loaded4)11 B0lack11Y0 v.1.0 11B0y 4[0J_S_P4]
 
Unload 0-->4(0UnLoaded4)11 B0lack11Y0 v.1.0 11B0y 4[0J_S_P4]
 
RAW.311 0-->4(0Nick4)11:4[0<nick>11:15<address>11:0<realname>4]
 
RAW.314 0-->4(0WhoWas4)11 F0or 4[0<nick>11:15<address>11:0<realname>4]
RAW.319 0-->4(0Channels4)11:0 <chan>
 
RAW.312 0-->4(0Server4)11:0 <wserver> 4(0<serverinfo>4)
 
RAW.301 0-->4(0Away4)11:0 <text>
 
RAW.307 0-->4(0Registered4)11:0 <isreg>
 
RAW.313 0-->4(0IRCOp4)11:0 <isoper>
 
RAW.317 0-->4(0Idle4)11:0 <idletime> 4(0SignOn4)11:0 <signontime>
 
RAW.318 0-->11E0nd 11O0f 4(0WhoIs4)11 L0ist11...
 
RAW.369 0-->11E0nd 11O0f 4(0WhoWas4)11...
 
Whois 0-->11S0tart 11O0f 4(0WhoIs4)11 L0ist11...
 
 
Whowas 0-->11S0tart 11O0f 4(0WhoWas4)11 L0ist11...
 
RAW.Other 0-->0<text>
 
RAW.001 0-->0<text>
RAW.002 0-->4(0Server4)11:0 <server> 4(0Version4)11:0 <value>
RAW.003 0-->4(0Created4)11:0 <value>
RAW.005 0-->4(0Protocols Supported4)11:0 <text>
 
 
 
 
 
ImageButtons Buttons.png
ImageSwitchbar Fill Bar_top.bmp
 
RAW.221 0-->4(0Usermodes4)11:0 <modes>
 
RAW.250 0-->4(0Connections4)11:0 <value>
 
RAW.251 0-->4(0Users4)11:0 <users> 4(0Invisible4)11:0 <text> 4(0Servers4)11:0 <value>
 
RAW.252 0-->4(0Operators4)11:0 <value>
 
RAW.253 0-->4(0Unknown Connections4)11:0 <value>
 
RAW.254 0-->4(0Channels4)11:0 <value>
 
RAW.255 0-->4(0Local Clients4)11:0 <users> 4(0Servers4)11:0 <value>
 
RAW.265 0-->4(0Local users4)11:0 <users> 4(0Max4)11:0 <value>
 
RAW.266 0-->4(0Global Users4)11:0 <users> 4(0Max4)11:0 <value>
 
RAW.302 0-->4(0Userhost4)11:0 <address>
 
RAW.315 0-->11E0nd 11O0f 4(0Whois4)11:0 <value>
 
RAW.324 0-->4(0Modes4)11:0 <modes>
 
RAW.332 0-->4(0Topic4)11: 4"0<text>4"
 
RAW.333 0-->4(0Topic4)11:11 S0et 11B0y 4[0<nick>4]11 O0n 4(0<text>4)
 
RAW.341 0-->11I0nvited 4[0<nick>4]11 To 4(0<chan>4)
Description #2 Theme By J_S_P! A Black Back whit the usual Swichbar Img and some Buttons! it's worth a try!!
RAW.352 0-->4[0<nick>11:15<address>4] 0<away> <wserver>4(0<value>4)0 <realname>
 
RAW.353 0-->4(0Names4)11:0 <text>
 
RAW.366 0-->11E0nd 11O0f 11N0ames 11L0ist 11F0or 4(0<chan>4)
 
RAW.372 <pre> <text>
RAW.375 0-->11M0essage 11O0f 11T0he 11D0ay
 
RAW.376 0-->11M0essage 11O0f 11T0he 11D0ay 11E0nd
 
RAW.401 <pre>11N0o 11S0uck 11N0ick11:4[0<nick>4]
 
RAW.403 <pre>11N0o 11S0uch 11C0hannel11:4 (0<chan>4)
 
RAW.404 <pre>11U4nable 11T0o 11S0end 11M0essages 11T0o11: 4(<chan>4)
 
RAW.421 <pre>11I0nvalid 11C0ommand11: 4(0<value>4)
 
RAW.432 <pre>11I0nvalid 11N0ick11: 4[0<nick>4]
 
RAW.433 <pre>11N0ick 11I0s 11A0lready 11I0n 11U0se11: 4[0<nick>4]
 
RAW.471 <pre>11C0hannel 11I0s 11F0ull 4(0+l4)11: 4(0<chan>4)
 
RAW.473 <pre>11C0hannel 11I0s 11I0nvite 11O0nly 4(0+i4)11: 4(0<chan>4)
 
RAW.474 <pre>11C0annot 11J0oin11,11 B0anned 11F0rom 11C0hannel 4(0+b4)11:4 (0<chan>4)
 
RAW.475 <pre>11C0annot 11J0oin11,11 C0hannel 11K0ey 11R0equired 4(0+k4)11: 4(0<chan>4)
 
RAW.482 <pre>11Y0ou 11A0re 11N0ot11 A0n 11O0perator 11I0n11: 4(0<chan>4)
 
