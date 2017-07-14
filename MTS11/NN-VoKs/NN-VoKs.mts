[mts]
Name VoKs
Author voks
EMail mirc@planet-voks.de
Website www.planet-voks.de
Description voks MTS theme created for NoNameScript, works in any MTS engine.
Version 1.20
MTSVersion 1.1
Script nn-voks.mrc
 
Colors 01,14,00,07,00,10,00,00,00,00,00,00,00,00,07,00,00,00,00,05,01,01,00,01,00,14
RGBColors 255,255,255 0,0,0 0,127,255 0,147,0 255,0,0 150,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,255 255,0,255 100,100,100 210,210,210
BaseColors 02,02,02,02
 
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11
 
CLineOwner 00
CLineOp 00
CLineHOp 14
CLineVoice 02
CLineRegular 10
CLineMe 07
CLineEnemy 04
CLineIrcOp 03
 
Prefix 02:::
ParenText 02(<text>02)
 
TextChan 10[02<cmode><nick>10] <text>
TextChanSelf 10[02<cmode><me>10] <text>
ActionChan • 02<cmode><nick> <text>
ActionChanSelf • 02<cmode><me> <text>
 
NoticeChan 02-<nick>02@<chan>02- <text>
Notice 02-<nick>02- <text>
NoticeSelf <pre> -<target>- <text>
NoticeSelfChan <pre> -<target>- <text>
 
TextQuery 10[<nick>10] <text>
TextQuerySelf 10[<me>10] <text>
ActionQuery • <nick> <text>
ActionQuerySelf • <me> <text>
TextMsg 02*<target>02* <text>
TextMsgSelf <pre> 02*<target>02* <text>
 
Mode <pre> 10mode: <c1>(<nick><c1>)10 sets <c1>(<modes><c1>)
ModeUser <pre> 10usermode: set to <c1>(<modes><c1>)
Join <pre> 03join: <c2>(<nick><c2>) (03<address><c2>)
JoinSelf <pre> 03joined <c2>(<chan><c2>)
Part <pre> 05part: <c4>(<nick><c4>) <parentext>
Kick <pre> 04kick: <c3>(<knick><c3>)04 was kicked by <c3>(<nick><c3>) <parentext>
KickSelf <pre> 04kick: <c3>(<me><c3>)04 was kicked by <c3>(<nick><c3>) <parentext>
Quit <pre> 05quit: <c4>(<nick><c4>) <parentext>
Topic <pre> 10topic: <c1>(<nick><c1>)10 changes topic to <c1>(<text><c1>)
Nick <pre> 10nick: <c1>(<nick><c1>)10 is now known as <c1>(<newnick><c1>)
NickSelf <pre> 10nick: <c1>(<me><c1>)10 is now known as <c1>(<newnick><c1>)
Invite <pre> 03invite: <c2>(<nick><c2>)03 invites you to join <c2>(<chan><c2>)
ServerError <pre> error: <text>
Rejoin <pre> 10rejoined 02(<chan>02)
Ctcp 10?<nick>10? <ctcp> <text>
CtcpChan 10?<nick>10@<chan>10? <ctcp> <text>
CtcpSelf <pre> 10?<target>10? <ctcp> <text>
CtcpChanSelf <pre> 10?<target>10? <ctcp> <text>
CtcpReply 10!<nick>10! <ctcp> <text>
CtcpReplySelf <pre> 10!<target>10! <ctcp> <text>
Notify <pre> 7notify: <nick> is now online!
UNotify <pre> 7unnotify: <nick> is now offline!
Wallop <pre> wallop: <c4>(<nick><c4>) <text>
NoticeServer 02-<nick>02- <text>
 
DNS <pre> Looking up <address>
DNSError <pre> Unable to resolve <address>
DNSResolve <pre> Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error: <text>
Load 02<pre> 02VoKs theme by voks loaded.
Unload 02<pre> 02VoKs theme by voks unloaded.
 
Whois !script voks.whois
Whowas !script voks.whowas
 
RAW.Other <pre> <text>
RAW.332 <pre> 10Topic is <c1>(<text><c1>)
RAW.333 <pre> 10Set by <c1>(<nick><c1>)10 on <c1>(<text><c1>)
 
Scheme1 White
Scheme2 Grey
Scheme3 Dark Grey
Scheme4 mIRC
Scheme5 Color Whole Lines
Scheme6 CWL White
Scheme7 CWL Grey
Scheme8 CWL Dark Grey
Scheme9 CWL mIRC
 
Timestamp ON
TimestampFormat 10[00HH10:00nn10:00ss10]
 
[Scheme1]
Colors 00,14,01,07,01,10,01,01,01,01,01,01,01,01,07,01,01,01,01,01,00,00,01,00,01,14
CLineOwner 01
CLineOP 01
Timestamp ON
TimestampFormat 10[01HH10:01nn10:01ss10]
 
[Scheme2]
Colors 15,14,01,07,01,10,01,01,01,01,01,01,01,01,07,01,01,01,01,01,15,15,01,15,01,15
CLineOwner 01
CLineOP 01
Timestamp ON
TimestampFormat 10[01HH10:01nn10:01ss10]
 
[Scheme3]
Colors 14,15,00,07,00,10,00,00,00,00,00,00,00,00,15,00,00,00,00,05,14,14,00,14,00,15
RGBColors 255,255,255 0,0,0 0,200,255 0,220,0 255,50,50 255,100,100 150,0,150 255,127,0 255,255,0 0,255,0 0,220,180 0,255,255 0,0,255 255,0,255 100,100,100 175,175,175
CLineHOp 15
 
[Scheme4]
Timestamp ON
TimestampFormat 10[01HH10:01nn10:01ss10]
Colors 00,06,04,05,01,10,01,01,01,01,01,01,05,07,06,01,01,01,01,01,00,00,01,00,01,14
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
CLineOwner 01
CLineOp 01
 
[Scheme5]
BaseColors 10,03,04,05
Prefix :::
ParenText (<text>)
Colors 01,14,02,07,10,10,03,03,04,10,10,00,02,07,07,00,05,05,10,05,01,01,00,01,00,14
ActionChan • <cmode><nick> <text>
ActionChanSelf • <cmode><me> <text>
 
[Scheme6]
Prefix :::
BaseColors 10,03,04,05
Colors 00,14,02,07,10,10,03,03,04,10,10,01,02,07,07,01,05,05,10,05,00,00,01,00,01,14
CLineOwner 01
CLineOp 01
ParenText (<text>)
ActionChanSelf • <cmode><me> <text>
ActionChan • <cmode><nick> <text>
Timestamp ON
TimestampFormat 10[01HH10:01nn10:01ss10]
 
[Scheme7]
Prefix :::
BaseColors 10,03,04,05
Colors 15,14,02,07,10,10,03,03,04,10,10,01,02,07,07,01,05,05,10,05,15,15,01,15,01,14
CLineOwner 01
CLineOp 01
ParenText (<text>)
ActionChanSelf • <cmode><me> <text>
ActionChan • <cmode><nick> <text>
Timestamp ON
TimestampFormat 10[01HH10:01nn10:01ss10]
 
[Scheme8]
Prefix :::
BaseColors 10,03,04,05
Colors 14,15,02,07,10,10,03,03,04,10,10,00,02,07,07,00,05,05,10,05,14,14,00,14,00,15
RGBColors 255,255,255 0,0,0 0,200,255 0,220,0 255,50,50 255,100,100 150,0,150 255,127,0 255,255,0 0,255,0 0,220,180 0,255,255 0,0,255 255,0,255 100,100,100 175,175,175
CLineHOp 15
ParenText (<text>)
ActionChanSelf • <cmode><me> <text>
ActionChan • <cmode><nick> <text>
 
[Scheme9]
Prefix :::
BaseColors 10,03,04,05
Colors 00,06,04,05,01,03,03,03,04,10,10,01,05,07,06,01,05,05,10,05,00,00,01,00,01,14
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
CLineOwner 01
CLineOp 01
ParenText (<text>)
ActionChanSelf • <cmode><me> <text>
ActionChan • <cmode><nick> <text>
Timestamp ON
TimestampFormat 10[01HH10:01nn10:01ss10]
 
