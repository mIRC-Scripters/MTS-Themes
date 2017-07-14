; Theme information
;Mode 1,0 <timestamp> Mode 14 <pre> 14<nick> Sets:<c2> <modes>
[mts]
Name rbIRC
Author QuiK
EMail quik@fr.st
Website http://quik.fr.st
Description Based on rbIRC script and rbIRC scheme system with white background
Version 0.2b
MTSVersion 1.1
Script rbIRC_2.mrc
 
Timestamp OFF
TimestampFormat hh:nn
 
Scheme1 Red scheme
Scheme2 Blue scheme
Scheme3 Ilusion scheme
Scheme4 Green Scheme
Scheme5 BlackWhite scheme
Scheme6 Gold Scheme
 
BaseColors 06,13,01,01
Colors 00,06,04,05,14,14,14,14,14,14,14,14,14,14,06,14,14,14,14,05,14,14,00,00,01,14
RGBColors 230,230,230 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11
 
CLineOp 06
CLineMe 13
CLineIrcOp 07
 
Prefix 01•14•<c1>•<c2>•
ParenText (<text>)
 
TextChan 14<timestamp> <c1>(<cmode><c2>01<nick><c1>)01 <text>
TextChanSelf 14<timestamp> <c2>(<c1><cmode>14<me><c2>)14 <text>
ActionChan 14<timestamp> <c1>(Act<c1>)01 <nick> <text>
ActionChanSelf 14<timestamp> <c2>(<c1>Act<c2>)14 *<me> <text>
NoticeChan 14<timestamp> <c1>(<c2>N14otice *<nick><c2>/14<chan><c1>)14 <text>
Notice 14<timestamp> <c1>(<c2>N14otice <nick><c1>)14 <text>
NoticeSelf 14<timestamp> <c1>(<c2>N14otice <nick><c1>)14 <text>
NoticeSelfChan 14<timestamp> <c1>(<c2>N14otice <me><c2>/14<chan><c1>)14 <text>
TextQuery 14<timestamp> 14[<c1><nick>14(<c1><address>14)]15 <text>
TextQuerySelf 01<timestamp> 14[<c2>msg14(<c2><target>14)] <text>
ActionQuery 06<timestamp> *06 <nick> <text>
ActionQuerySelf 01<timestamp> *06 <me> <text>
TextMsg 01<timestamp> <c1>(<cmode><c2>01<nick>)14 <text>
TextMsgSelf 01<timestamp> <c2>(<c2><cmode>01<me>)14 <text>
 
mode !script _chanmodes
ModeUser 00,14 <timestamp> U-mode 01 <pre> 01<me> Sets:14 <modes>
Join 00<timestamp> 14··· <c2> • 14 ··· 01<nick>14 Join > <timestamp> ::<address>:: 01Joins to 14<chan>
JoinSelf <pre> <c1>Y<c2>ou´ve Joined to01 <chan> <c2>at01 <timestamp>
Part 00<timestamp> 14··· <c1> • 14 ··· 14<nick>14 Part > <timestamp> ::<address>:: <c1>Parts 14<chan>
Kick 0,<c2> <timestamp> Kick 14 <pre> <nick> kicked <knick> [<text>]
KickSelf 0,<c2> <timestamp> Kick 14 <pre> <c1>Y<c2>ou ´re kicked by 01<nick> [<text>]
Quit 00<timestamp> 14··· 10 • 14 ··· 14<nick>14 Quit > <timestamp> 14<text>
Topic <timestamp> <pre> <c1>T<c2>opic:01 <text> <c2>by01 <nick> <c2>at 01<timestamp>
Nick 00<timestamp> 14··· 01 • 14 ··· Nick: <nick> ~ <newnick> ::
NickSelf 14<timestamp> <pre> <c1>Y<c2>our nick is now01 <newnick> <c2>at 01<timestamp>
Invite <pre> <nick> <c1>I<c2>nvites you to 14<chan> <c2>at 14<timestamp>
ServerError <pre> <c1>S<c2>erver Error14 <parentext>
Rejoin <pre> <c1>Y<c2>ou attempt to rejoin a channel
Ctcp <pre> <c1>C<c2>tcp <ctcp> recieved from 14<nick> <parentext> <c2>at 14<timestamp>
CtcpChan <pre> <c1>C<c2>tcp <ctcp> recieved from 14<nick><c2>/14<chan> <parentext> <c2>at 14<timestamp>
CtcpSelf <pre> <c1>C<c2>tcp <ctcp> send to 14<nick> <parentext> <c2>at 14<timestamp>
CtcpChanSelf <pre> <c1>C<c2>tcp <ctcp> send to 14<chan> <parentext> <c2>at 14<timestamp>
CtcpReply <pre> <c1>C<c2>tcpreply <ctcp> from 14<nick> <parentext> <c2>at 14<timestamp>
CtcpReplySelf <pre> <c1>C<c2>tcpreply <ctcp> to 14<nick> <parentext> <c2>at 14<timestamp>
Notify <pre> 00,14 Notify 14 <nick> <c1>I<c2>s on IRC 14<timestamp>
UNotify <pre> 00,14 Notify 14 <nick> <c1>H<c2>as left IRC 14<timestamp>
Wallop <pre> <c2>(<c1>WallOp<c2>) 14<text>
NoticeServer <pre> <c2>(<c1>S14notice<c2>)14 <text>
 
DNS <pre> <c1>D<c2>NS (<nick>)
DNSError <pre> <c1>U<c2>nable to resolve 14<address>
DNSResolve <pre> <c1>R<c2>esolved 14<naddress> <c1>(14<iaddress><c1>) <c2>to 14<radd
Echo <pre> <c1>E<c2>cho <text>
EchoTarget <pre> <c1>E<c2>cho <target> <text>
Error <pre> <c1>E<c2>rror: 14<text>
Load <pre> <c1>rb14IRC Theme by QuiK <c1>L01oaded <c1>S01uccesfully
Unload <pre> <c1>rb14IRC 01Theme <c1>U01nloaded
 
RAW.311   00,00....0,<c2> <nick> <c2> is <c1><address> 14<realname>
RAW.314         00,00....<c2>,0 <nick> <c2>is <c1><address> 14<realname>
RAW.319         00,00....<c1>C<c2>hans: 14<chan>
RAW.312         00,00....<c1>U<c2>sing: 14<wserver> <serverinfo>
RAW.301         00,00....<c1>A<c2>way: 14<text>
RAW.307     
RAW.313         00,00....<c1>I<c2>RCop Status
RAW.317 !Script         00,00....%:echo  $+ %::c1 $+ I $+  $+ %::c2 $+ dle:14 $duration(%::idletime)  $+ %::c1 $+ L $+ %::c2 $+ ogin:14 %::signontime
RAW.318   00,00....<pre> <c1>E<c2>nd of whois
RAW.369   00,00....<pre> <c1>E<c2>nd of whowas
 
RAW.001 <c1>W<c2>elcome to IRC <network> Networks Soport
RAW.002 <c1>H<c2>ost 14<sever> <value>
RAW.003 <c1>C<c2>reated on 14<value>
RAW.005 <c1>P<c2>rotocols Supported: 14<text>
RAW.221 <c1>C<c2>urrent <nick>´s usermodes: 14<modes>
RAW.250     <c1>T<c2>otal Connections: 14<value>
RAW.251     <c1>U<c2>sers: 14<users> <c1>(14<text> <c2>invisible<c1>) <c2>on 14<value> <c2>Servers
RAW.252     <c1>I<c2>RC Operators on line: 14<value>
RAW.253     <c1>U<c2>nknow Connections: 14<value>
RAW.254     <c1>C<c2>reate Chans: 14<value>
RAW.255     <c1>L<c2>ocal Users Serv: 14<users> <value>
RAW.265     <c1>L<c2>ocal Users Max: 14<users> <value>
RAW.266     <c1>G<c2>lobal Users Max: 14<users> <value>
RAW.302 <c1>L<c2>ocal Host: 14<nick> <address> <value>
RAW.324         <pre> <c1>M<c2>odes: 14<modes>
RAW.332         <pre> <c1>T<c2>opic: 14<text>
RAW.333         <pre> <c1>S<c2>et by: 14<nick> <c2>at 14<text>
RAW.341 <pre> 14[<c1>I<c2>nvite14] <nick> <c1>I<c2>nvited to 14<chan>
RAW.353 <pre> <c1>N<c2>ames: 14<text>
RAW.366 <pre> <c1>E<c2>nd of Name list of 14<chan>
RAW.372 <pre> <c1>M<c2>otd: <text>
RAW.375 <pre> 14
RAW.376 <pre> <c1>E<c2>nd of MOTD
 
RAW.401 <pre> <c1>N<c2>o such Nickname 14<nick>
RAW.403 <pre> <c1>N<c2>o such Channel 14<chan>
RAW.404 <pre> <c1>U<c2>nable to Send msg in 14<chan>
RAW.421 <pre> <c1>I<c2>nvalid Command 14<value>
RAW.432 <pre> <c1>I<c2>nvalid Nickname 14<nick>
RAW.433 <pre> <c1>N<c2>ickname in use 14<nick>
RAW.471 <pre> <c1>C<c2>hannel full (+l) 4<chan>
RAW.473 <pre> <c1>C<c2>hannel invite only (+i) 14<chan>
RAW.474 <pre> <c1>B<c2>anned (+b) from 14<chan>
RAW.475 <pre> <c1>N<c2>hannel key locked (+k) 14<chan>
RAW.482 <pre> <c1>Y<c2>oy need Op Status
RAW.405 <pre> <c1>C<c2>an't join more channels (14<chan><c2>) server says you're in too many!
RAW.443 <pre> 14<nick> <c2>is already on 14<chan>
RAW.461 <pre> <c1>I<c2>nsufficient parameters 14<text>
RAW.465 <pre> <c1>Y<c2>ou're banned from 14<network>
RAW.478 <pre> <c1>B<c2>anlist is full 14<chan>
 
[Scheme1]
BaseColors 05,04,05,04
 
CLineOp 05
CLineMe 04
CLineIrcOp 07
 
 
[Scheme2]
BaseColors 02,12,01,01
 
CLineOp 02
CLineMe 12
CLineIrcOp 07
 
 
[Scheme3]
BaseColors 11,10,01,01
 
CLineOp 10
CLineMe 11
CLineIrcOp 07
 
RGBColors 230,230,230 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,127,147 0,197,207 0,0,252 255,0,255 127,127,127 210,210,210
 
[Scheme4]
BaseColors 09,03,01,01
 
CLineOp 03
CLineMe 09
CLineIrcOp 07
 
Prefix 14›09›
 
RGBColors 230,230,230 0,0,0 0,0,127 50,102,50 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 100,185,100 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
[Scheme5]
BaseColors 14,15,01,01
 
CLineMe 15
CLineIrcOp 07
 
RGBColors 230,230,230 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 90,90,90 150,150,150
 
[Scheme6]
BaseColors 08,07,01,01
 
CLineOp 07
CLineMe 08
 
RGBColors 230,230,230 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 170,170,0 200,200,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
[Scheme7]
BaseColors 06,13,01,01
 
