[mts]
Name E-Sicle
MTSVersion 1.1
Version 1.0
Author haykk
EMail haykk@techie.com
Website http://www.z-scripters.tech.nu
Description A Theme and A Scheme:)
Timestamp ON
TimestampFormat [ hh:nn:ss ]
Prefix •
ParenText 01[02<text>01]
TextChan 2<pre> 1[2<nick>1]1 <text>
TextChanSelf 2<pre> 1[2<me>1]14 <text>
ActionChan 2<pre> 2<nick> 1<text>
ActionChanSelf 2<pre> 2<me> 1<text>
NoticeChan 2<pre> 1-2<nick>1-2<chan>1- <text>
Notice 2<pre> 1-2<nick>1- <text>
NoticeSelf 2<pre> 1--> -1<2nick1>- <text>
NoticeSelfChan 2<pre> 1--> 1-2<nick>1- <text>
TextQuery 2<pre> 1[2<nick>1]1 <text>
TextQuerySelf 2<pre> 1[2<me>1]1 <text>
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
ActionQuery 2<pre> 2<nick> 1<text>
ActionQuerySelf 2<pre> 2<me> 1<text>
RAW.401 2<pre> No such nickname - <nick>
RAW.403 2<pre>No such channel - <chan>
RAW.404 2<pre> Unable to send messege - <chan>
RAW.421 2<pre> Invalid command - <value>
RAW.432 2<pre> Invalid nickname - <nick>
RAW.433 2<pre> Nickname in use - <nck>
RAW.471 2<pre> Channel full - <chan>
RAW.473 2<pre> Invite only in the channel - <chan>
RAW.474 2<pre> Banned from the channel - <chan>
RAW.475 2<pre> Key required to join the channel - <chan>
RAW.482 2<pre> Need op status to perform - <chan>
RAW.254 2<pre> 1Channels formed: <value>
RAW.252 2<pre>1 Operators: <value>
RAW.253 2<pre>1 Uknown connections: <value>
RAW.324 2<pre>1 Modes set: <modes>
RAW.332 2<pre> 1Channel Topic: <text>
RAW.333 2<pre> 1Topic set by <nick> on <text>
RAW.311 !Script E-Sicle_whois_start
RAW.314 2<pre> 1WHOWAS on <nick> (<address>)
RAW.319 2<pre> 1Channels: <chan>
RAW.312 2<pre> 1Server: <wserver>
RAW.301 2<pre> 1Away: <text>
RAW.313 2<pre> 1IRCOP: <isoper> <operonline>
RAW.318 2<pre> 1END OF WHOIS
RAW.369 2<pre> 1END OF WHOWAS
DNS 2<pre>1 Looking for <address>....
DNSError 2<pre>1 Unable to find <iaddress>
DNSResolve 2<pre>1 Resolved <naddress> (02<iaddress>01) to <raddress>
Echo 2<pre> 1<text>
EchoTarget 2<pre> 1<text>
Error 2<pre> 1<text>
Load 2<pre> 1E-Sicle theme by haykk loaded
Unload 2<pre> 1E-Sicle theme by haykk unloaded
Mode 2<pre> 1<nick> sets mode <modes>
ModeUser 2<pre> 1<me> sets mode <modes>
Join 2<pre> 12<nick> (<address>) joined <chan>
JoinSelf 2<pre> 12Joining <chan>...
Part 2<pre> 7<nick> (<address>) has left <chan>
Kick 2<pre> 4<knick> has been kicked by <nick>. Reason: <text>
KickSelf 2<pre> 4You were kicked by <nick>. Reason: <text>
Quit 2<pre> 3<nick> (<address>) has left IRC
Topic 2<pre> 12<Nick> changes topic to:1 <text>
Nick 2<pre> 1<nick> is known as <newnick>
NickSelf 2<pre> 1You are known as <newnick>
Invite 2<pre> 1<nick> invites you to join <chan>
ServerError 2<pre> 1Error: <text>
Rejoin 2<pre> Rejoining <chan>....
Notify 2<pre> 7<Nick> [<address>] connected to IRC
UNotify 2<pre> 7<nick> [<address>] left IRC
NoticeServer 2<pre> 1-2<nick>1- <text>
CLineCharOp 02@
CLineCharHOp 02%
CLineCharVoice 02+
CLineMe 07
CLineIrcOp 04
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,15
RGBColors 255,255,255 0,0,0 80,108,144 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 101,182,220 74,128,182 255,0,255 127,127,127 210,210,210
Ctcp 2<pre> 4[<nick>] <ctcp> <text>
CtcpChan 2<pre> 4[<nick>: <chan>] <ctcp> <text>
CtcpSelf 2<pre> 4-> [<nick>] <ctcp> <text>
CtcpChanSelf 2<pre> 4-> [<chan>] <ctcp> <text>
CtcpReply 2<pre> 4[<nick>] <ctcp> reply: <text>
CtcpReplySelf 2<pre> 4[<nick>] <ctcp> reply: <text>
BaseColors 12,02,11,01
Scheme1 Light blue
Script E-Sicle.mrc
RAW.317 2<pre> 1Idle: <idletime>, singed on: <signontime>
[Scheme1]
Colors 11,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,11,01,11,01,15
TextChanSelf 2<pre> 1[2<me>1]1 <text>
Join 2<pre> 12<nick> (<address>) joined <chan>
JoinSelf 2<pre> 12Joining <chan>...
BaseColors 12,02,11,10
RGBColors 255,255,255 0,0,0 46,62,84 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 74,128,182 101,182,220 32,64,100 255,0,255 127,127,127 210,210,210
