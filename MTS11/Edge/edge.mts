[mts]
Name Edge
Author erased (aka angel_0f_life)
Email evilcoder@hotmail.com
Description 65 Schemes.
Version 4.3
MTSVersion 1.1

Scheme1 Dark
Scheme2 Soft
Scheme3 Blood
Scheme4 NeGLigEnCe
Scheme5 Rain
Scheme6 Hallucination
Scheme7 macOS
Scheme8 Optikal v2 
Scheme9 Gnome
Scheme10 Ice
Scheme11 Edge
Scheme12 Confusion
Scheme13 Waiora
Scheme14 Raziel
Scheme15 CrEaToR
Scheme16 Optikal
Scheme17 Kolima
Scheme18 Glaciar
Scheme19 Organ
Scheme20 Silence
Scheme21 Retro
Scheme22 Theme X
Scheme23 Script3r
Scheme24 Default
Scheme25 D-Blue
Scheme26 D-Green
Scheme27 D-Red
Scheme28 D-Rust
Scheme29 D-2nd Style
Scheme30 D-Blue+
Scheme31 is
Scheme32 is-Grey
Scheme33 is-Blue
Scheme34 is-Blue+
Scheme35 Layer
Scheme36 Future
Scheme37 Plain
Scheme38 Coded
Scheme39 Coded.ext
Scheme40 Vitamin C
Scheme41 cc
Scheme42 CC
Scheme43 cc+
Scheme44 CC+
Scheme45 irc-s
Scheme46 irc-s.dark
Scheme47 blueish
Scheme48 bbx
Scheme49 Bright
Scheme50 Megabyte
Scheme51 Axion
Scheme52 OriOn
Scheme53 ptcoders
Scheme54 sand
Scheme55 fucking floo
Scheme56 orange
Scheme57 azul
Scheme58 grange
Scheme59 w.com
Scheme60 Melt it!
Scheme61 irct
Scheme62 dt.net
Scheme63 dt[dark].net
Scheme64 Morgana
Scheme65 methis

Script edge.mrc
Load !script e.load
Unload <pre> <c1>Edg<c2>e<c1> theme unloaded...

TimeStamp On
TimeStampFormat <c2>HH:nn<c1>|
Prefix <c1>:
ParenText <c1>(<c2><text><c1>)

Mode <pre> <c1><nick><c2> sets mode<c1>: <modes>
ModeUser <pre> <c2>Usermode changed to<c1>: <modes>
Join !Script %:echo %::pre $+  $+ %::c1 %::nick  $+ %::c1 $+ ( $+ %::c2 $+ $replace(%::address,@, $+ %::c1 $+ @ $+ %::c2) $+  $+ %::c1 $+ ) $+  $+ %::c2 has joined $+ %::c1 %::chan
JoinSelf !Script e.join
Part !Script %:echo %::pre $+  $+ %::c1 %::nick  $+ %::c1 $+ ( $+ %::c2 $+ $replace(%::address,@, $+ %::c1 $+ @ $+ %::c2) $+  $+ %::c1 $+ ) $+  $+ %::c2 has left $+ %::c1 %::chan %::parentext
Kick <pre><c1> <knick><c2>'s ass was kicked by <c1><nick> <parentext>
KickSelf <pre><c1> You<c2> were kicked by <c1><nick>,<c2> from <c1><chan> <parentext>
Quit !Script %:echo %::pre $+  $+ %::c1 %::nick  $+ %::c1 $+ ( $+ %::c2 $+ $replace(%::address,@, $+ %::c1 $+ @ $+ %::c2) $+  $+ %::c1 $+ ) $+  $+ %::c2 has quit IRC %::parentext
Topic <pre><c1> <nick><c2> changes topic to<c1>: <c2>'<c1><text><c2>'
Nick <pre> <c1><nick><c2> is now known as <c1><newnick>
NickSelf <pre><c1> You<c2> are now known as <c1><newnick>
Invite <pre><c1> <nick><c2> has invited you to join <c1><chan>
ServerError <pre><c2> <text>
Notice <c1><nick><c2> - <text>
NoticeSelf <pre><c1> Notice <c2>(<c1><nick><c2>) - <text>
Rejoin <pre> <c2>Attempting to rejoin <c1><chan><c2>...
TextChan <c1>(<c4><cmode><c3><nick><c1>)<c3> <text>
TextChanSelf <c1>(<c4><cmode><c2><me><c1>)<c2> <text>
ActionChan <c1>! <c4><cmode><c3><nick> <text>
ActionChanSelf <c1>! <c4><cmode><c2><me> <text>

DNS <pre> <c2>Looking up <c1><address><c2>...
DNSError <pre> <c2>Unable to resolve <c1><address>
DNSResolve <pre> <c2>Resolved <c1><address><c2> to <c1><raddress>

TextQuery <c1>(<c3><nick><c1>)<c3> <text>
TextQuerySelf <c1>(<c2><me><c1>)<c2> <text>
ActionQuery <c1>! <c3><nick> <text>
ActionQuerySelf <c1>! <c2><me> <text>
TextMsg <c1>[<c2><nick><c1>]<c2> - <text>
TextMsgSelf <pre> <c1>Msg (<c2><target><c1>)<c2> - <text>

Ctcp <pre> <c3><nick> (<c2><address><c3>)<c2> - CTCP <text>
CtcpSelf <pre><c3> Ctcp (<c2><target><c3>)<c2> - <text>
CtcpChan <pre> <c3><nick><c2>/<c3><chan> <c2>- CTCP <text>
CtcpChanSelf <pre><c3> Ctcp (<c2><target><c3>)<c2> - <text>
CtcpReply <pre> <c3><nick> (<c2><address><c3>)<c2> - CTCP REPLY <text>
CtcpReplySelf <pre> <c3>Ctcp (<c2><target><c3>)<c2> - REPLY <text>

Echo <pre><c2> <text>
EchoTarget <pre> <c1>[<c2><target><c1>]<c2> <text>
Error <pre><c2> <text>


RAW.001 <pre><c2> <text>
RAW.002 <pre><c2> Host server<c1>: <server> <c2>running version <c1><value>
RAW.003 <pre><c2> Server created on<c1>: <value>
RAW.005 <pre><c2> Protocols supported by this server<c1>: <text>
RAW.250 <pre><c2> Total connection(s)<c1>: <value>
RAW.251 !script e.lusers 
RAW.252 <pre><c1> <value><c2> operator(s) online
RAW.253 <pre><c2> Unknown connection(s)<c1>: <value>
RAW.254 <pre><c1> <value> <c2> channels formed
RAW.255 <pre><c2> There are<c1> <users><c2> clients on <c1><value><c2> server(s)
RAW.265 <pre><c2> Local users<c1>: <users> <c2>Max<c1>: <value>
RAW.266 !script e.lusers.end
RAW.302 <pre><c2> Host<c1>: <nick>!<address>
RAW.311 !Script e.whois
RAW.319 !Script e.chans 
RAW.318 !Script e.whois.end
RAW.312 <pre><c1> Server<c2>: <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <pre><c1> Away<c2>: <text>
RAW.307 <pre><c1> Status<c2>: <isregd> registered nickname
RAW.313 <pre><c1> IRCop<c2>: <isoper><c1>/<c2><operline>
RAW.317 !Script e.idle 
RAW.315 <pre><c2> End of <c1>/who<c2> list for<c1> <chan>
RAW.329 !script %:echo %::pre $+  $+ %::c2 Created on $+ %::c1 $+ : $asctime(%::text) %:comments
RAW.324 <pre><c2> Current channel modes<c1>: <modes>
RAW.332 !Script e.topic
RAW.333 !Script e.settopic
RAW.341 <pre><c1> <nick><c2> has been invited to join <c1><chan>
RAW.352 <pre><c4> <cmode><c3><nick> (<c2><address><c3>)<c2> <realname>
RAW.353 <pre><c2> <chan><c1>: <text>
RAW.366 <pre><c2> End of <c1>/names<c2> list for<c1> <chan>
RAW.375 <pre><c2> Message of the day<c1>:
RAW.372 <c2><text>
RAW.376 <pre><c2> End of <c1>/motd<c2> command.
RAW.391 !script %:echo %::pre $+  $+ %::c2 Date $+ %::c1 $+ : $asctime($ctime(%::text)) %:comments
RAW.401 <pre><c2> No such nickname<c1>: <nick>
RAW.403 <pre><c2> No such channel<c1>: <chan>
RAW.404 <pre><c2> Unable to send message to <c1><chan>
RAW.421 <pre><c2> Invalid command<c1>: <value>
RAW.433 <pre><c1> <nick><c2> is already in use. Try <c1>[<nick>]
RAW.471 <pre><c2> Can't join <c1><chan><c2>, because it's full (<c1>mode +l<c2>)
RAW.473 <pre><c2> Can't join <c1><chan><c2>, because it's invite only! (<c1>mode +i<c2>)
RAW.474 <pre><c2> Can't join <c1><chan><c2>, because you're banned! (<c1>mode +b<c2>)
RAW.475 <pre><c2> Can't join <c1><chan><c2>, because it's requires key. Use <c1>/join <chan> <gt>key<lt> <c2>(<c1>mode +k<c2>)
RAW.482 <pre><c2> You're not operator on <c1><chan>


RAW.Other <pre><c2> <text>

Colors 0,2,11,12,2,2,11,2,2,2,2,11,2,11,12,2,2,2,2,12,2,0,12,0,12
RGBColors 255,255,255 0,0,0 51,102,153 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 86,140,193 112,143,190 255,0,255 128,124,128 208,204,208

BaseColors 02,11,12,02

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 02
CLineRegular 12
CLineMe 07

ClineCharOwner 0.
ClineCharOP 0@
ClineCharHOP 0%
ClineCharVoice 0+

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme1]
BaseColors 12,11,11,12
Colors 2,0,11,12,0,0,11,0,0,0,0,11,0,11,12,0,0,0,0,12,0,2,12,2,12
RGBColors 255,255,255 0,0,0 51,102,153 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 159,182,204 86,140,193 255,0,255 128,124,128 208,204,208
CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 11
CLineRegular 12
CLineMe 07

[Scheme2]
Colors 11,2,0,0,2,2,0,2,2,2,2,0,2,0,0,2,2,2,2,0,2,11,12,11,12
RGBColors 255,255,255 0,0,0 51,102,153 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 159,182,204 70,124,167 255,0,255 128,124,128 208,204,208
BaseColors 02,12,12,02
CLineOwner 11
CLineOP 02
CLineHOP 02
CLineVoice 02
CLineRegular 12
CLineMe 01

[Scheme3]
Prefix <c4>[<c1>:<c4>]
Colors 5,4,4,8,4,4,3,3,3,3,3,6,8,4,4,7,3,4,3,8,6,5,8,5,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 60,0,0 202,68,4 232,76,0 255,128,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

BaseColors 08,06,07,04

CLineOwner 04
CLineOP 04
CLineHOP 04
CLineVoice 06
CLineRegular 07
CLineMe 08

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme4]
Prefix <c2>:<c1>:<c2>:
Colors 10,12,12,11,12,12,3,3,3,3,3,2,12,12,12,12,3,12,3,12,12,10,11,10,11
RGBColors 255,255,255 0,0,0 166,190,253 183,234,251 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,64,128 4,173,255 164,209,255 255,0,255 128,128,128 208,208,208

BaseColors 11,12,02,11

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 12
CLineRegular 02
CLineMe 03

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme5]
Prefix <c2>:<c1>:<c2>:
Colors 10,12,12,11,12,12,3,3,3,3,3,2,12,12,12,12,3,12,3,12,12,10,11,10,11
RGBColors 255,255,255 0,0,0 166,190,253 183,234,251 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 81,101,128 166,186,217 164,209,255 255,0,255 128,128,128 208,208,208

BaseColors 11,12,02,11

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 02
CLineRegular 12
CLineMe 03

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme6]
Prefix <c2>:<c1>:<c2>:
Colors 10,12,12,11,12,12,3,3,3,3,3,2,12,12,12,12,3,12,3,12,12,10,11,10,11
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 32,56,56 0,136,128 0,200,200 255,0,255 128,128,128 208,208,208

BaseColors 11,12,11,12

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 12
CLineRegular 15
CLineMe 09

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme7]
Prefix <c3>:<c1>z<c3>:
Colors 15,14,14,1,14,14,3,3,3,3,3,14,14,14,14,1,3,14,3,14,14,15,1,15,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,100,100 35,35,35 255,0,255 63,63,63 208,212,208

BaseColors 01,11,14,12

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 12
CLineRegular 14
CLineMe 1

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme8]
Prefix <c4>[<c1>n<c4>]<c2>
Colors 2,7,7,15,15,15,3,3,3,3,3,15,7,7,7,9,3,7,3,15,15,2,15,2,7
RGBColors 255,255,255 0,0,0 33,57,98 0,144,0 255,0,0 128,0,0 160,0,160 100,179,221 56,122,122 182,215,231 0,148,144 0,255,255 86,119,250 80,103,145 120,140,136 122,158,199

BaseColors 15,07,09,12

CLineOwner 12
CLineOP 12
CLineHOP 12
CLineVoice 07
CLineRegular 15
CLineMe 09

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme9]
Prefix <c4>:<c2>:<c1>:
Colors 0,1,1,15,15,15,14,14,14,14,14,15,14,14,14,1,14,14,14,1,1,0,1,0,1
RGBColors 221,224,229 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 72,78,82

BaseColors 01,15,01,14

CLineOwner 01
CLineOP 01
CLineHOP 01
CLineVoice 15
CLineRegular 14
CLineMe 07

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme10]
Prefix <c4>:<c2>:<c1>:
Colors 0,1,1,12,12,12,9,9,9,9,9,2,9,9,9,1,9,9,9,1,1,0,1,0,1
RGBColors 255,255,255 0,0,0 101,105,124 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 141,153,165 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

BaseColors 01,02,01,09

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 9
CLineRegular 14
CLineMe 07

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme11]
Prefix <c3>(<c1>ø<c3>)
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 32,66,88 79,131,185 132,168,204 187,217,247 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

BaseColors 02,04,03,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme12]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
Prefix <c1>›<c2>›<c3>›<c2>
BaseColors 02,03,04,02
RGBColors 255,255,255 0,51,102 49,99,156 24,129,226 72,132,192 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

[Scheme13]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10
RGBColors 255,255,255 0,0,0 12,119,227 68,150,251 176,196,251 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 02,04,03,02
Prefix <c2>-›
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

[scheme14]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 18,52,86 208,208,208 72,132,192 160,160,160 176,176,176 192,192,192 252,127,0 255,255,0 0,252,0 61,83,105 119,148,176 165,184,203 255,0,255 128,128,128 192,192,192
BaseColors 03,02,04,05
CLineOP 3
CLineVoice 2
CLineRegular 4
CLineMe 0

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix <c2>::::

[scheme15]
Colors 1,3,3,14,15,15,3,3,3,3,3,7,3,3,3,3,3,3,3,3,3,1,15,1,3
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 07,15,14,04
CLineOP 7
CLineVoice 3
CLineRegular 15
CLineMe 14
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix <c2>o

[scheme16]
Colors 10,12,12,0,12,12,11,11,12,12,11,0,11,11,0,0,11,11,12,12,12,11,10,10,11
RGBColors 255,255,255 0,0,0 0,0,168 0,0,255 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 61,83,105 119,148,176 165,184,203 255,0,255 128,128,128 192,192,192
BaseColors 11,12,12,11
CLineOP 11
CLineVoice 12
CLineRegular 00
CLineMe 01
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix <c1>.::

[scheme17]
Colors 1,3,3,9,15,15,3,3,3,3,3,9,3,3,3,3,3,3,3,3,3,1,15,1,3
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 03,15,14,09
CLineOP 3
CLineVoice 9
CLineRegular 15
CLineMe 0
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix <c1>»<c4>»

[scheme18]
Colors 1,8,4,15,6,6,3,11,9,9,9,0,4,15,8,15,3,7,11,4,15,1,0,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 60,165,250 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 0,125,255 128,128,128 208,208,208
BaseColors 06,15,13,00
CLineOP 13
CLineVoice 6
CLineRegular 15
CLineMe 0
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix <c1>::: 
TimeStampFormat <c2>h:nnt<c1>|

[scheme19]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 166,175,166 0,0,0 224,224,224 89,103,96 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 02,04,02,03
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0
FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10
Prefix 4[ð]3

[scheme20]
Prefix 4÷3
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 88,100,93 170,180,172 238,254,243 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 02,03,04,02
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0
FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10

[scheme21]
Prefix 4.|.3
ParenText 2[4<text>2]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 99,116,124 255,255,255 45,46,46 183,185,185 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 03,04,03,02
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

FontDefault Tahoma,10
FontChan Tahoma,10

[scheme22]
Prefix 42[4X2]
ParenText 2[4<text>2]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 255,255,255 39,75,181 72,126,186 134,181,230 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 02,03,04,02
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 14

FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10

[scheme23]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 72,109,153 148,193,232 147,176,206 200,216,230 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 02,04,03,04
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0
ClineCharOwner 6
ClineCharOP 6
ClineCharHOP 6
ClineCharVoice 6
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix 3[4!3] 
ParenText 2[4<text>2]

[scheme24]
Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 93,93,106 177,177,202 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

BaseColors 02,03,04,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme25]
Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 98,106,140 197,212,255 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

BaseColors 02,03,04,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme26]
RGBColors 255,255,255 0,0,0 112,148,104 213,255,197 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
BaseColors 02,03,04,02

Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)
CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme27]
RGBColors 255,255,255 0,0,0 148,112,104 255,214,198 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
BaseColors 02,03,04,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme28]
RGBColors 255,255,255 64,18,2 93,80,62 174,149,116 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
BaseColors 02,03,04,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme29]
RGBColors 255,255,255 0,0,0 38,43,59 72,82,113 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
BaseColors 02,03,04,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme30]
RGBColors 255,255,255 0,0,0 79,131,185 132,168,204 187,217,247 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
BaseColors 02,03,04,02

CLineOwner 0
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

Prefix <c2>·<c3>ø<c2>·
ParenText <c1>(<c3><text><c1>)

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme31]
Prefix <c2>»<c2>
ParenText <c1>(<c3><text><c1>)
Colors 0,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,0,3,0,4
RGBColors 255,255,255 0,0,0 0,0,0 72,87,121 104,126,176 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

BaseColors 02,03,04,02

CLineOwner 1
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 7

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme32]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 204,204,204 59,73,112 106,126,176 98,106,142 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

Prefix <c2>»<c2>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 1
CLineOP 4
CLineHOP 4
CLineVoice 3
CLineRegular 2
CLineMe 7

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme33]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 26,41,74 91,106,149 142,165,206 175,192,221 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

Prefix <c2>»<c2>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 1
CLineOP 4
CLineHOP 4
CLineVoice 3
CLineRegular 2
CLineMe 15

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme34]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 84,104,152 137,154,193 199,207,226 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

Prefix <c2>»<c2>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 1
CLineOP 4
CLineHOP 4
CLineVoice 3
CLineRegular 2
CLineMe 15

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[scheme35]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 221,221,221 0,0,0 128,128,128 151,151,151 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

Prefix <c1>ƒ<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 1
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 14

FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10

[scheme36]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 54,54,66 115,115,123 169,164,193 222,220,232 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208

Prefix <c2>/<c3>!<c2>\
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 1
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 0

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme37]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 255,255,255 0,0,0 101,105,124 143,157,173 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>¢<c3>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 1
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 7

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme38]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 241,241,241 0,0,0 0,0,0 0,112,112 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>»<c3>
ParenText <c4>(<c3><text><c4>)
BaseColors 02,04,03,04

CLineOwner 1
CLineOP 2
CLineHOP 2
CLineVoice 4
CLineRegular 14
CLineMe 15

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme39]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 241,241,241 0,0,0 0,0,0 0,112,112 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>»<c3>
ParenText <c4>(<c3><text><c4>)
BaseColors 02,04,03,04

CLineOwner 1
CLineOP 2
CLineHOP 2
CLineVoice 4
CLineRegular 14
CLineMe 15

FontDefault tahoma,10
FontChan tahoma,10
FontQuery tahoma,10

[scheme40]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 255,255,255 255,155,0 0,0,0 162,162,162 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>†<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 14

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme41]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 243,240,234 0,0,0 102,102,102 179,158,125 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>›<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 14

FontDefault tahoma,10
FontChan tahoma,10
FontQuery tahoma,10

[scheme42]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 243,240,234 0,0,0 102,102,102 179,158,125 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>›<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 14

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme43]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 119,132,149 0,1,5 193,197,206 241,246,249 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>›<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault tahoma,10
FontChan tahoma,10
FontQuery tahoma,10

[scheme44]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 119,132,149 0,1,5 193,197,206 241,246,249 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>›<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,02

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme45]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 104,119,140 145,200,255 145,200,255 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>›<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,04,04,02

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 15
CLineRegular 4
CLineMe 3

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme46]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 145,200,255 145,200,255 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>›<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,04,04,03

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 15
CLineRegular 0
CLineMe 7

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme47]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 48,152,208 145,200,255 213,229,245 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>(<c1>!<c3>)<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,04,04,03

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme48]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 40,113,193 0,18,84 255,255,255 167,217,243 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c2>[<c1>›<c2>]<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,04,03,02

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 4
CLineRegular 3
CLineMe 15

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme49]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 85,130,210 199,216,250 237,242,252 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c1>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03
JoinSelf <pre> <c2>welcome to<c1> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

[scheme50]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,40,64 255,153,51 157,157,157 187,187,187 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03
JoinSelf <pre> <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

[scheme51]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 0,0,0 99,99,99 157,157,157 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03
JoinSelf <pre> <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

[scheme52]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 51,51,51 102,102,102 157,157,157 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03
JoinSelf <pre> <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

[scheme53]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 239,239,239 0,102,152 0,0,0 154,170,182 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,04,03,02
JoinSelf <pre> <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

[scheme54]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 237,227,199 45,55,72 0,0,0 94,102,122 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 04,03,02,03
JoinSelf <pre> <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 15

FontDefault bright,10
FontChan bright,10
FontQuery bright,10

[scheme55]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 212,208,200 0,0,0 83,83,83 198,148,100 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03
JoinSelf <c1>³ <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 7

FontDefault ibmpc,12
FontChan ibmpc,12
FontQuery ibmpc,12

[scheme56]
Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBColors 255,255,255 148,148,148 222,214,198 239,239,239 247,181,132 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,03,04,03
JoinSelf <c1>³ <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 7

FontDefault ibmpc,12
FontChan ibmpc,12
FontQuery ibmpc,12

[scheme57]
Colors 0,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,0,3,0,4
RGBColors 255,255,255 0,0,0 0,0,0 90,132,189 181,181,181 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 02,04,03,02
JoinSelf <c1>³ <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b
CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 4
CLineMe 7

FontDefault ibmpc,12
FontChan ibmpc,12
FontQuery ibmpc,12

[scheme58]
Colors 1,14,14,15,7,7,14,14,14,14,14,7,14,14,7,14,14,14,14,14,7,1,7,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix <c3>³<c1>
ParenText <c1>(<c3><text><c1>)
BaseColors 14,15,07,14
JoinSelf <c1>³ <c1>welcome to<c2> <chan>

RAW.311 !Script edge.whois.b
RAW.319 !Script edge.chans.b
RAW.317 !Script edge.idle.b
RAW.332 !Script edge.topic.b
RAW.333 !Script edge.settopic.b
RAW.312 <c1>³ Server:<c2> <wserver> <c1>(<c2><serverinfo><c1>)
RAW.301 <c1>³ Away:<c2> <text>
RAW.307 <c1>³ Registered nick:<c2> <isregd>
RAW.313 <c1>³ IRCop:<c2> <isoper><c1>/<c2><operline>
RAW.318 !Script edge.whois2.b

JoinSelf !Script edge.join.b
CLineOwner 14
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineRegular 0
CLineMe 7

FontDefault ibmpc,12
FontChan ibmpc,12
FontQuery ibmpc,12

[scheme59]
Colors 1,2,2,0,0,0,2,2,2,2,2,0,2,2,0,2,2,2,2,2,0,1,0,1,0
RGBColors 112,143,190 246,240,251 152,173,210 213,229,245 255,255,255 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
Prefix <c3>›<c1>›
ParenText <c1>(<c3><text><c1>)
BaseColors 00,02,02,00

CLineOwner 02
CLineOP 02
CLineHOP 02
CLineVoice 14
CLineRegular 14
CLineMe 07

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme60]
Colors 0,15,15,11,11,11,15,15,15,15,15,1,15,15,11,15,15,15,15,15,11,0,15,0,15
RGBColors 230,234,240 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 79,121,149 0,0,255 255,0,255 128,128,128 3,50,103

Prefix <c2>::
ParenText <c1>(<c2><text><c1>)
BaseColors 15,11,01,15

CLineOwner 15
CLineOP 15
CLineHOP 15
CLineVoice 11
CLineRegular 01
CLineMe 12

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme61]
Colors 02,11,11,15,15,15,11,11,11,11,11,1,11,11,15,11,11,11,11,11,11,02,14,02,11
RGBColors 255,255,255 0,0,0 33,43,74 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 136,165,193 0,0,255 255,0,255 255,149,0 208,208,208

Prefix <c3>»
ParenText <c1>(<c2><text><c1>)
BaseColors 14,15,11,14

CLineOwner 14
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineRegular 11
CLineMe 7

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme62]
Colors 00,02,02,11,11,11,02,02,02,02,02,02,02,02,11,02,02,02,02,02,02,00,11,00,11
RGBColors 186,198,210 0,0,0 41,84,118 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 99,136,165 0,10,23 255,0,255 128,128,128 208,208,208

Prefix <c2>››<c1>
ParenText <c1>(<c2><text><c1>)
BaseColors 02,11,12,02

CLineOwner 12
CLineOP 12
CLineHOP 12
CLineVoice 11
CLineRegular 02
CLineMe 7

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[scheme63]
Colors 00,02,02,11,11,11,02,02,02,02,02,02,02,02,11,02,02,02,02,02,02,00,11,00,11
RGBColors 41,84,118 0,0,0 99,136,165 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 186,198,210 100,100,100 255,0,255 128,128,128 208,208,208

Prefix <c2>››<c1>
ParenText <c1>(<c2><text><c1>)
BaseColors 02,11,15,02

CLineOwner 02
CLineOP 02
CLineHOP 02
CLineVoice 11
CLineRegular 15
CLineMe 7

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

[Scheme64]
Prefix 11:02:12:
Colors 1,12,12,11,12,12,3,3,3,3,3,2,12,12,12,12,3,12,3,12,12,1,12,1,12
RGBColors 255,255,255 0,0,0 140,169,177 72,101,105 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 81,101,128 82,111,115 179,210,215 255,0,255 128,128,128 208,208,208

BaseColors 11,12,02,11

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 02
CLineRegular 12
CLineMe 00

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

[Scheme65]
Prefix 10~
Colors 2,12,12,11,12,12,3,3,3,3,3,11,12,12,12,12,3,12,3,12,12,2,10,2,12
RGBColors 255,255,255 0,0,0 129,137,128 72,101,105 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 56,60,56 86,100,90 159,166,158 255,0,255 128,128,128 208,208,208

BaseColors 11,12,10,11

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 02
CLineRegular 12
CLineMe 00

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
