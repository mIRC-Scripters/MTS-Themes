[mts]
Name sombra
MTSVersion 1.1
RAW.311 !Script sombrawhois <nick> <address> <realname> <c1>

BaseColors 0,9,1,1
Version 0.2!
Author [SiGurD]
EMail gazel@pobladores.com
Description Simple theme with 7 schemes.
Script sombra.mrc
Prefix <c2>·
ParenText <text>
TextChan ‹<cmode><nick>› <text>
TextChanSelf ‹<cmode><me>› <text>
ActionChan *<cmode><nick> <text>
ActionChanSelf *<cmode><me> <text>
NoticeChan [<nick>:<chan>] <text>
Notice <pre> <nick>:<text>
NoticeSelf <pre> <nick>:<text>
NoticeSelfChan [<nick>:<chan>] <text>
TextQuery ‹<nick>› <text>
TextQuerySelf ‹<nick>› <text>
ActionQuery *<nick> <text>
ActionQuerySelf *<nick> <text>
TextMsg ‹<nick>› <text>
TextMsgSelf ‹<me>› <nick> <text>
Mode <pre> <nick> sets mode to: <modes>
ModeUser <pre> <nick> mode set to <modes>
Join <pre> <nick>!<address> join(<chan>)
JoinSelf <pre> <nick>!<address> joined <chan>
Part <pre> <nick>!<address> part(<chan>)
Kick <pre> <knick> has been kicked by <nick> (<parentext>)
KickSelf <pre> you've been kicked in <chan> by <nick>: <parentext>
Quit <pre> <nick>!<address> quit(<parentext>)
Topic <pre> <nick> set topic to: <text>
Nick <pre> <nick> is now know as <newnick>
NickSelf <pre> <nick> is now know as <newnick>
CtcpReplySelf <pre> CTCP Reply <nick> <text>
CtcpReply <pre> CTCP Reply <nick> <text>
CtcpChanSelf <pre> CTCP <nick>!<ctcp> <text>
CtcpChan <pre> CTCP <nick>!<ctcp> <text>
Ctcp <pre> CTCP <nick>!<ctcp> : <text>
Rejoin <pre> attempt to rejoin .... <chan>
ServerError <pre> Error: <text>
Invite <pre> <nick> invite you to <chan>
CtcpSelf <pre> CTCP <nick>!<ctcp> : <text>

DNS <pre> looking up <nick> <address>
DNSError <pre> unable to resolve <nick> <address>
DNSResolve <pre> resolved <raddress>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> Error: <text>
Load <pre> sombra theme...

RAW.319       <c1>chan: <chan>
RAW.312      <c1>serv: <server> <serverinfo>
RAW.301 !script isaway
RAW.307      <c1>regs: <isregd>
RAW.313      <c1>ircop: <isoper>
RAW.317 !script sombraidle <idletime> <singontime> <c1>
RAW.318 <c1>…end of whois

RAW.324 <pre> modes: <modes>
RAW.332 <pre> topic <text> by <nick>
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,0,1,0,15,0,1
RGBColors 255,255,255 0,0,0 0,0,160 106,128,149 98,157,128 255,0,80 224,0,16 204,189,51 255,196,136  115,140,140 200,176,240 96,120,168 192,224,25 72,128,183 96,96,96 208,208,208

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
CLineCharFriend 0
CLineFriend 0
CLineOwner 0
CLineCharOwner 0.
CLineOp 0
CLineCharOp 0@
CLineVoice 0
CLineCharVoice 0+
CLineRegular 0
CLineCharRegular 0
CLineMe 11
CLineCharMe 11
CLineEnemy 0
CLineCharEnemy 0
CLineIrcOp 0
CLineCharIrcOp 
Scheme1 White
Scheme2 Blue
Scheme3 Silver
Scheme4 Grey
Scheme5 Green
Scheme6 Orange
Scheme7 Blue+

[Scheme1]
Colors 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0
BaseColors 7,7,3,12
CLineCharFriend 00
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 3
CLineCharOp 3@
CLineVoice 9
CLineCharVoice 9+
CLineRegular 1
CLineCharRegular 1
CLineMe 11
CLineCharMe 11
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 

[Scheme2]
Colors 11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,11,1,1,1,11
BaseColors 8,8,3,12
CLineCharFriend 00
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 1
CLineCharOp 1@
CLineVoice 1
CLineCharVoice 1+
CLineRegular 1
CLineCharRegular 1
CLineMe 10
CLineCharMe 10
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 

[Scheme3]
Colors 3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,3
BaseColors 15,15,3,12
CLineCharFriend 00
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 1
CLineCharOp 1@
CLineVoice 1
CLineCharVoice 1+
CLineRegular 1
CLineCharRegular 1
CLineMe 10
CLineCharMe 10
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 

[Scheme4]
Colors 14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,15,14,15,15,15,14
BaseColors 10,10,3,12
CLineCharFriend 00
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 1
CLineCharOp 1@
CLineVoice 1
CLineCharVoice 1+
CLineRegular 1
CLineCharRegular 1
CLineMe 10
CLineCharMe 10
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 

[Scheme5]
Colors 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,4,1,1,1,4
BaseColors 13,13,3,12
CLineCharFriend 00
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 1
CLineCharOp 1@
CLineVoice 1
CLineCharVoice 1+
CLineRegular 1
CLineCharRegular 1
CLineMe 10
CLineCharMe 10
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 

[Scheme6]
Colors 7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,7,1,7,1,1,1,7
BaseColors 15,15,3,12
CLineCharFriend 00
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 1
CLineCharOp 1@
CLineVoice 1
CLineCharVoice 1+
CLineRegular 1
CLineCharRegular 1
CLineMe 10
CLineCharMe 10
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 

[Scheme7]
Colors 13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,13,1,1,1,13
BaseColors 0,0,3,12
CLineCharFriend 0
CLineFriend 1
CLineOwner 1
CLineCharOwner 1.
CLineOp 1
CLineCharOp 1@
CLineVoice 1
CLineCharVoice 1+
CLineRegular 1
CLineCharRegular 1
CLineMe 10
CLineCharMe 10
CLineEnemy 1
CLineCharEnemy 1
CLineIrcOp 1
CLineCharIrcOp 1
