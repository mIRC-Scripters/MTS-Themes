[mts]
Name Calm Blue
Author Ymar_the_Leprechaun
EMail ymar@mircscripts.org
Website www.mircscripts.org/~ymar
Description A calm blue theme
Version 1.3
MTSVersion 1.1
RGBColors 250,250,255 0,0,83 165,165,255 55,113,55 255,0,0 0,128,192 116,0,196 15,160,210 255,255,0 0,252,0 0,107,147 0,255,255 0,0,252 255,0,255 122,122,127 180,180,190
Colors  0,3,7,7,5,14,2,10,10,10,10,14,3,10,14,5,10,10,10,3,5,0,5,0,5,15
BaseColors 05,14,03,07

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Prefix     <c1>(?<c1>)     
Timestamp On
TimeStampFormat 5[h:nntt5]
ParenText <c4>(<text><c4>)

Load <pre> <c1>Loaded MTS Theme:<c2> Calm Blue
Unload <pre> <c1>Unloaded MTS Theme:<c2> Calm Blue

TextChan !script calmblue.textchan
TextChanSelf  10<me>:  <text>

TextQuery  <c2><nick>:  <text>
TextQuerySelf  <c1><me>:  <text>

ActionChan  * <nick> <text>
ActionChanSelf  * <me> <text>
ActionQuery  * <nick> <text>
ActionQuerySelf  * <me> <text>

NoticeChan <c1> (<nick><c1>:<target><c1>)  <text>
Notice <c1> (<nick><c1>)  <text>
NoticeSelf <c2>-<c1><gt> (<nick><c1>)  <text>
NoticeSelfChan <c2>-<c1><gt> (<target><c1>)  <text>
NoticeServer <pre> <c1> (<nick><c1>)  <text>

TextMsg <pre> MSG from <nick>: <text>
TextMsgSelf <pre> MSG to <target>: <text>

Ctcp <pre> <c1> (<nick><c1>:<ctcp><c1>)  <text>
CtcpChan <pre> <c1>(<nick><c1>:<chan><c1>:<ctcp><c1>)  <text>
CtcpSelf <c1>-<gt> (<nick><c1>:<ctcp><c1>)  <text>
CtcpChanSelf <c1>-<gt> (<chan><c1>:<ctcp><c1>)  <text>
CtcpReply <c1><lt>- (<nick><c1>:<ctcp><c1>)  <text>
CtcpReplySelf <pre> <c1>[<nick><c1>:CTCP <ctcp><c1>] <text>

ServerError
Wallop <c4>(WALLOP<c4>) <nick>: <text>

Mode <pre> <nick> sets mode<c4>:  <modes>
ModeUser <pre> Usermode<c4>:  <modes>

Join <pre> <nick> <c4>(<address><c4>) enters <chan>
JoinSelf <pre> Now talking in<c4>: <chan>
Part <pre> <nick> <c4>(<address><c1><c4>) leaves <chan> <parentext>

Kick <pre> <nick> kicked <knick> <parentext>
KickSelf <pre> You were kicked from <chan> by <nick> <parentext>
Quit <pre> <nick> <c4>(<address><c4>) quit <parentext>
Topic <pre> <nick> changed topic to<c4>: <text>
Nick <pre> <nick> changed nick to <newnick>
NickSelf <pre> Your nick is now <newnick>
Invite <pre> <nick> invites you to join <chan>
Rejoin <pre> Attempting to rejoin....

Notify <pre> <c4>(NOTIFY<c4>) <nick> is online.
UNotify <pre> <c4>(NOTIFY<c4>) <nick> is now offline.

DNS <pre> <c1>(DNS<c1>) Looking up <address>...
DNSError <pre> <c1>(DNS<c1>) DNS Error, unable to resolve...
DNSResolve <pre> <c1>[DNS<c1>: <iaddress><c1>] <naddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <c4>(ERROR<c4>) <text>

Whois !script calmblue.whois
Whowas <pre> <nick> was <realname> (<address>)

RAW.Other <pre> <text>
RAW.002 <pre> (Server:<c3> <server>) (Version:<c3> <value>)
RAW.003 <pre> (Created:<c3> <value>)
RAW.005 <pre> (Protocols supported:<c3> <text>) 
RAW.221 <pre> (Usermodes:<c3> <modes>)
RAW.250 <pre> (Connections:<c3> <value>)
RAW.251 <pre> (Users:<c3> <users>) (Invisible:<c3> <text>) (Servers:<c3> <value>)
RAW.252 <pre> (Operators:<c3> <value>)
RAW.253 <pre> (Unknown connections:<c3> <value>)
RAW.254 <pre> (Channels:<c3> <value>)
RAW.255 <pre> (Local clients:<c3> <users>) (Servers:<c3> <value>)
RAW.265 <pre> (Local users:<c3> <users>) (Max:<c3> <value>)
RAW.266 <pre> (Global users:<c3> <users>) (Max:<c3> <value>)
RAW.302 <pre> (Userhost:<c3> <address>)

RAW.315 <pre> End of /who: <value>
RAW.324 <pre> 10Modes:  <modes>
RAW.332 <pre> 10Topic:  <text>
RAW.333 <pre> 00Topic:  Set by <nick> on <text>
RAW.328 <pre> 10Website:  <text>
RAW.329 !script %:echo %::pre 10Created:  $asctime(%::value)
RAW.341 <pre> Invited <nick> to <chan>
RAW.352 <pre> <nick><c2>!<address> <away> <wserver>(<value>) <realname>
RAW.353 <pre> 10Names:  <text>
RAW.366 <pre> End of names list for <chan>
RAW.372 <pre> <text>
RAW.375 <pre> <c3>Message of the day
RAW.376 <pre> <c3>Message of the day end
RAW.391

RAW.401 <pre> No suck nick:<c4> <nick>
RAW.403 <pre> No such channel:<c4> <chan>
RAW.404 <pre> Unable to send messages to <c4><chan>
RAW.421 <pre> Invalid command:<c4> <value>
RAW.432 <pre> Invalid nick:<c4> <nick>
RAW.433 <pre> Nick is already in use:<c4> <nick>
RAW.471 <pre> Channel is full (+l):<c4> <chan>
RAW.473 <pre> Channel is invite only (+i):<c4> <chan>
RAW.474 <pre> Cannot join, banned from channel (+b):<c4> <chan>
RAW.475 <pre> Cannot join, channel key required (+k):<c4> <chan>
RAW.482 <pre> You are not an operator in<c4> <chan>

CLineOwner 5
CLineOp 5
CLineHOp 3
CLineVoice 7
CLineRegular 14
CLineMe 10
CLineFriend 10
CLineEnemy 4
CLineIrcOp 15

Script calmblue.mrc

Scheme1 No hosts
Scheme2 v1.2 style

[Scheme1]
Join <pre> <nick> enters <chan>
Part <pre> <nick> leaves <chan> <parentext>
Quit <pre> <nick> quit <parentext>

[Scheme2]
NoticeChan <c1><lt><c2>-<c1> [<nick><c1>(<chan><c1>)]:  <text>
Notice <c1><lt><c2>-<c1> [<nick><c1>]:  <text>
NoticeSelf <c2>-<c1><gt> [<nick><c1>]:  <text>
NoticeSelfChan <c2>-<c1><gt> [<chan><c1>]:  <text>
NoticeServer <c1><lt><c2>-<c1> [<nick><c1>]:  <text>
Ctcp <pre> <c1><lt>-- [<nick><c1>:CTCP <ctcp><c1>] <text>
CtcpChan <pre> <c1><lt>-- [<nick><c1>(<chan><c1>):CTCP <ctcp><c1>] <text>
CtcpSelf <pre> <c1>--<gt> [<nick><c1>:CTCP <ctcp><c1>] <text>
CtcpChanSelf <pre> <c1>--<gt> [<nick><c1>:<chan><c1>:CTCP <ctcp><c1>] <text>
CtcpReply <pre> <c1>[<nick><c1>:CTCP <ctcp><c1>] <text>
CtcpReplySelf <pre> <c1>[<nick><c1>:CTCP <ctcp><c1>] <text>
RGBColors 250,250,255 0,0,83 100,100,255 55,113,55 255,0,0 0,128,192 116,0,196 255,169,83 255,255,0 0,252,0 0,107,147 0,255,255 0,0,252 255,0,255 122,122,127 180,180,190