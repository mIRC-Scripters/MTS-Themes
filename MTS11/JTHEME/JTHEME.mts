
[mts]
Name JTheme
Author J_S_P (JusTeen)
Email anyirc@yahoo.com
Description My first MTS
Website www.anyirc.net
Version 1.0
MTSVersion 1.1

Script JTheme.mrc

Timestamp ON
TimestampFormat 10[14::10H:nn14::10]

ParenText 14:::::7 [<text>7]
RAW.401 <pre> No suck nick:<c4> <nick>
ImageButtons Buttons.png
RAW.403 <pre> No such channel:<c4> <chan>
Prefix 7[14::10@14::7]
RAW.404 <pre> Unable to send messages to <c4><chan>
RAW.432 <pre> Invalid nick:<c4> <nick>
RAW.421 <pre> Invalid command:<c4> <value>
RAW.433 <pre> Nick is already in use:<c4> <nick>
Quit <pre> 14::::5 <nick> 7[<address>7]10 Quit <parentext>
NoticeSelf 14::::: 7[5<nick>7] <text>
Echo <pre> <text>
CtcpReply <pre> 14::::: 7[5<nick>7:<ctcp>7] <text>
RAW.474 <pre> Cannot join, banned from channel (+b):<c4> <chan>
ActionChanSelf 14::::: 7<me> <text>
NoticeSelfChan 14::::: 7[<target>7] <text>
RAW.475 <pre> Cannot join, channel key required (+k):<c4> <chan>
RAW.473 <pre> Channel is invite only (+i):<c4> <chan>
CtcpReplySelf <pre> 14::::: 7[5<nick>7:<ctcp>7] <text>
TextMsg <pre> MSG from <nick>: <text>
RAW.471 <pre> Channel is full (+l):<c4> <chan>
Notify <pre> 14::::: 7[10NOTIFY7]5 <nick> 10Is OnLine.
DNS <pre> 14::::7 [DNS7] 5Looking up <address> 14...
RAW.252 <pre> (Operators:<c3> <value>)
RAW.328 <pre> 10Website:  <text>
RAW.372 <pre> <text>
ActionQuerySelf 14::::: 7<me> <text>
RAW.001 <pre> <text>
RAW.253 <pre> (Unknown connections:<c3> <value>)
RAW.265 <pre> (Local users:<c3> <users>) (Max:<c3> <value>)
RAW.329 !script %:echo %::pre 10Created:  $asctime(%::value)
ActionChan 14::::: 10<nick> <text>
RAW.002 <pre> 14::::: 7[10Server7: <server>7]14:::::7 [10Version7: <value>7]
RAW.250 <pre>14 ::::: 7[10Connections7: <value>7]
RAW.266 <pre> (Global users:<c3> <users>) (Max:<c3> <value>)
RAW.482 <pre> You are not an operator in<c4> <chan>
RAW.003 <pre> :::::7 [10Created7: <value>7]
RAW.251 <pre> ::::: 7[10Users7:<users>7]14:::7[10Invisible7: <text>7]14:::7[10Servers7: <value>7]
TextChan !script calmblue.textchan
RAW.352 <pre> <nick><c2>!<address> <away> <wserver>(<value>) <realname>
RAW.376 <pre> <c3>Message of the day end
RAW.005 <pre> 14::::: 7[10Protocols Supported7: <text>7]
RAW.341 <pre> Invited <nick> to <chan>
RAW.353 <pre> 10Names:  <text>
RAW.254 <pre> (Channels:<c3> <value>)
RAW.366 <pre> End of names list for <chan>
ActionQuery   14::::: 10<nick> <text>
ImageToolbar Fill
RAW.255 <pre> (Local clients:<c3> <users>) (Servers:<c3> <value>)
RAW.375 <pre> <c3>Message of the day
RAW.332 <pre> 10Topic:  <text>
RAW.333 <pre> 00Topic:  Set by <nick> on <text>
UNotify <pre> <c4>(NOTIFY<c4>) <nick> is now offline.
RAW.Other <pre> <text>
RAW.315 <pre> End of /who: <value>
Mode <pre> 14:::::5 <nick> 10Sets Mode7: <modes>
KickSelf <pre> 14::::: 10You were kicked from 14<chan>10 by 5<nick> <parentext>
Nick <pre> 14::::: 5<nick>10 Changed Nick To 5<newnick>
RAW.324 <pre> 10Modes:  <modes>
Load <pre> 5Loaded Theme:7[14::10JTheme v.1.014::7]
RAW.221 <pre> 14::::: 7[10Usermodes7: <modes>7]
RAW.302 <pre> (Userhost:<c3> <address>)
NoticeServer <pre> 14::::: 7[5<nick>7] <text>
Ctcp <pre> :::::: 7[5<nick>7:<ctcp>7] <text>
Whowas <pre> <nick> was <realname> (<address>)
ImageSwitchbar Fill Bar_top.bmp
ModeUser <pre> 14:::::10 Usermode7: <modes>
Notice 14::::: 7[5<nick>7] <text>
TextMsgSelf <pre> MSG to <nick>: <text>
CtcpSelf <Pre> 14:::::7 [5<nick>7:<ctcp>7] <text>
TextQuerySelf  <c1><me>:  <text>
Whois !script calmblue.whois
DNSError <pre> 14::::: 7[DNS7] 5Error, unable to resolve...
CtcpChanSelf <pre> 14::::: 7[5<chan>7:<ctcp>7] <text>
JoinSelf <pre> 14:::::10 Now talking in 7: <chan>
Unload <pre>5 Unloaded Theme:7[14::10JTheme v.1.014::7]
CtcpChan <pre> 14::::: 7[5<nick>7:10<chan>7:<ctcp>7] <text>
DNSResolve <pre> 14:::::7 [5DNS7:<iaddress>7] <naddress>
TextChanSelf  10<me>:  <text>
Invite <pre> 14:::::5 <nick> 10Invites You To Join 14<chan>
EchoTarget <pre> <text>
Error <pre> 14::::: 7[5ERROR7] <text>
Part <pre> 14:::: 5<nick>7 [<address>7]10 Leaves5 <chan> <parentext>
Rejoin <pre> Attempting to rejoin....
TextQuery  <c2><nick>:  <text>
Wallop <c4>(WALLOP<c4>) <nick>: <text>
Join <pre> 14::::: 5<nick> 7[<address>7]10 Enters <chan>
Kick <pre> 14:::::5 <nick>10 Kicked 5<knick> <parentext>
NoticeChan 14:::::7 [5<nick>7:<target>7] <text>
NickSelf <pre> 14::::: 10 Your nick is now 7<newnick>
Topic <pre> <nick> changed topic to<c4>: <text>

Colors 11,03,12,7,5,14,12,10,10,10,10,14,3,10,14,5,10,10,10,3,5,11,01,11,05,15
RGBColors 250,250,255 0,0,83 165,165,255 55,113,55 255,0,0 0,128,192 116,0,196 255,178,63 79,186,255 0,252,0 0,162,200 211,225,233 0,0,252 255,0,255 122,122,127 180,180,190
BaseColors 05,14,03,07

CLineOwner 01
CLineOP 05
CLineHOP 08
CLineVoice 01
CLineRegular 10
CLineMe 14
CLineFriend 01
CLineEnemy 04
CLineIrcOP 12

CLineCharOwner *
CLineCharOP @
CLineCharHOP -
CLineCharVoice +
CLineCharRegular .

FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10

ImageButtons Buttons.png
ImageSwitchbar Fill Bar_top.bmp

