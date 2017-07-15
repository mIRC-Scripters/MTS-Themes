[mts]
Name simple
MTSVersion 1.1

; general.

TIMESTAMP on
TIMESTAMPFORMAT 14[00HH:nn14]
BaseColors 01,01,01,01
Version 0.2
Author fxd
EMail fxd@post.com
Website http://textos.tk/
Description very simple theme. lime font.
Script simple.mrc

; events.

Prefix  14>
ParenText <text>
TextChan 14(<cmode>00<nick>14) <text>
TextChanSelf 00(<cmode>14<me>00) <text>
ActionChan 14! <cmode>00<nick> <text>
ActionChanSelf ! <cmode>14<me> <text>
NoticeChan <pre> notice14: <nick>14[00<chan>14] <text>
Notice <pre> notice14: <nick>14[00<text>14]
NoticeSelf <pre> notice14: <nick>14[00<text>14]
NoticeSelfChan <pre> notice14: <nick>14[<chan>14] <text>
TextQuery 14(00<nick>14) <text>
TextQuerySelf 00(14<nick>00) <text>
ActionQuery 14! 00<nick> <text>
ActionQuerySelf ! 14<nick> <text>
TextMsg <pre> msg14[00<target>14] <text>
TextMsgSelf <pre> msg14[00<target>14] <text>
Mode <pre> mode14: <nick>14[00<modes>14]
ModeUser <pre> usermode14: <nick>14[00<modes>14]
Join <pre> join14: <nick>14[00<address>14] <chan>
JoinSelf <pre> joinself14: <nick>14[00<address>14] <chan>
Part <pre> part14: <nick>14[00<address>14] <chan>
Kick <pre> kick14: <knick> by <nick>14[00<parentext>14]
KickSelf <pre> kickself14: by <nick>14[00<parentext>14]
Quit <pre> quit14: <nick>14[00<address>14] <parentext>
Topic <pre> topic14: <nick>14[00<text>14]
Nick <pre> nick14: <nick>14[00<newnick>14]
NickSelf <pre> nickself14: <nick>14[00<newnick>14]
CtcpReplySelf <pre> ctcp reply self14: <nick>14[00<text>14]
CtcpReply <pre> ctcp reply14: <nick>14[00<text>14]
CtcpChanSelf <pre> ctcp self14: <nick>14[00<ctcp>14] <text>
CtcpChan <pre> ctcp14: <nick>14[00<ctcp>14] <text>
Ctcp <pre> ctcp <nick>14[00<ctcp>14] <text>
Rejoin <pre> attempting to rejoin14[00<chan>14]
ServerError <pre> error14: <text>
Invite <pre> invite14: <nick>14[00<chan>14]
CtcpSelf <pre> ctcp self14: <nick>14[00<ctcp>14] <text>
DNS <pre> looking up14: <nick>14[00<address>14]
DNSError <pre> unable to resolve14: <nick>14[00<address>14]
DNSResolve <pre> resolved14: <raddress>
Echo <pre> <text>
EchoTarget <pre> 14[00<target>14] <text>
Error <pre> error14: <text>
Load <pre> theme loaded.
Unload <pre> theme unloaded.

; raws.

RAW.311 !Script wh0is <nick> <address> <realname>
RAW.314 !Script wh0owas <nick> <address> <realname>
RAW.319  00chan ³³ <chan>
RAW.312  00serv ³³ <server> <serverinfo>
RAW.301  00away ³³ <text>
RAW.307  00nick ³³ <isregd>
RAW.313  00icop ³³ <isoper>
RAW.317  00idle ³³ <idletime> 
RAW.318 !script wh0iss
RAW.324 <pre> mode14[00<modes>14]
RAW.332 <pre> topic14[00<text>14]
raw.333 <pre> setby14: <nick>14[00<text>14]
RAW.401 <pre> error14: no such nickname14[00<nick>14]
RAW.403 <pre> error14: no such channel14[00<chan>14]
RAW.404 <pre> error14: unable to send message to14[00<chan>14]
RAW.421 <pre> error14: bad command14[00<value>14]
RAW.433 <pre> error14: nickname in use14[00<nick>14]
RAW.471 <pre> error14: cannot join14[00<chan>14] +l
RAW.473 <pre> error14: cannot join14[00<chan>14] +i
RAW.474 <pre> error14: cannot join14[00<chan>14] +b
RAW.475 <pre> error14: cannot join14[00<chan>14] +k
RAW.482 <pre> error14: not opped in14[00<chan>14]

; colors.

Colors 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,01,00,01,00,15
RGBColors 255,255,255 40,40,40 50,50,50 60,60,60 70,70,70 80,80,80 90,90,90 100,100,100 110,110,110 120,120,120 130,130,130 140,140,140 150,150,150 160,160,160 160,160,160 208,208,208

; fonts.

FontDefault lime,10
FontChan lime,10
FontQuery lime,10

; nicklist.

ClineMe 15
ClineOwner 15
ClineOP 14
ClineHOP 14
ClineVoice 15
ClineRegular 00
ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice  14+

; schemes.

scheme1 green
scheme2 blubright

[scheme1]

RGBColors 255,255,255 40,40,40 20,50,50 25,60,60 30,70,70 35,80,80 40,90,90 45,100,100 50,110,110 55,120,120 60,130,130 65,140,140 70,150,150 68,136,136 68,136,136 157,206,206

[scheme2]

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

RGBColors 255,255,255 0,0,0 0,33,70 0,43,85 0,53,100 0,63,115 0,73,130 0,83,145 0,93,160 0,103,175 0,113,190 0,120,195 0,130,200 0,135,210 72,164,255 210,233,255

TextChan 14[<cmode>00<nick>14] <text>
TextChanSelf 00[<cmode>14<me>00] <text>
TextQuery 14[00<nick>14] <text>
TextQuerySelf 00[14<nick>00] <text>