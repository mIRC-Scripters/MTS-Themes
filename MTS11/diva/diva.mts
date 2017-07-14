[mts]
; Theme information
Name diva
MTSVersion 1.1
Prefix 12ò2ôó
ParenText <text>
TextChan 14~ (<cmode><nick>) <text>
TextChanSelf 14~ (5<cmode><nick>1) <text>
ActionChan 14~ <nick> <text>
ActionChanSelf 14~ 5<nick>1 <text>
NoticeChan 14~ 5-> <nick> <text>
Notice 14~ 5-> <nick> <text>
NoticeSelf 14~ 5-> <nick> <text>
NoticeSelfChan 14~ 5-> <nick> <text>
TextQuery (<nick>) <text>
TextQuerySelf (5<nick>1) <text>
ActionQuery 14~ <nick> <text>
ActionQuerySelf 14~ <nick> <text>
TextMsg 14~ <nick> <text>
TextMsgSelf 14~ 5<nick> <text>
Mode <pre> e/Mode: 2<nick> sets mode: 2<modes>
Timestamp ON
TimestampFormat h:mm:sst
ModeUser <pre> e/Mode: 2<nick> sets mode: 2<mode>
Join <pre> e/Join: 2<nick> [2<address>] joined 2<chan>
JoinSelf <pre> 2You have joined 2<chan>
Part <pre> e/Part: 2<nick> [2<address>] parted 2<chan>
Kick <pre> e/Kick: 2<knick> was kicked by 2<nick> (2<text>)
KickSelf <pre> 2You have been kicked by 2<nick> "2<text>"
Quit <pre> e/Quit: 2<nick> [2<address>] (2<text>)
Topic <pre> e/Topic: 2<nick> changed topic to "2<text>"
Nick <pre> e/Nickchange: 2<nick> changed alias to 2<newnick>
NickSelf <pre> e/Nickchange: 2<nick> changed alias to 2<newnick>
Invite <pre> e/Invite: 2<nick> invites you to join 2<chan>
ServerError <pre> e/ServerError: 2<text>
Rejoin 14~ Rejoining 2<chan>
Ctcp <pre> e/Ctcp: 2<nick> [2<ctcp>] 2<text>
CtcpChan <pre> e/Ctcp: 2<nick>:2<chan> [2<ctcp>] 2<text>
CtcpSelf <pre> e/Ctcp: 2<nick> [2<ctcp>] 2<text>
CtcpChanSelf <pre> e/Ctcp: 2<chan> [2<ctcp] 2<text>
CtcpReply <pre> e/Ctcp: reply; 2<nick> [2<ctcp>] 2<text>
CtcpReplySelf <pre> e/Ctcp: reply; 2<nick> [2<ctcp>] 2<text>
Notify <pre> e/Notify: 2<nick> [2<address] is online
UNotify <pre> e/Notify: 2<nick> [2<address] is offline
NoticeServer <pre> e/NoticeServer: 2<text>
DNS [dns] Looking up 2<address>....
DNSError [dns] Could not resolv 2<address>!
DNSResolve [dns] Resolved 2<nick> [2<address>] 2<naddress> <iaddress> <raddress>
Error <pre> e/Error: 2<text>
Load <pre> ~ Diva theme loaded! ~
Unload <pre> ~ Diva theme unloaded! ~
RAW.311 !script diva.whoisstart
RAW.319 Channels:2 <chan>
RAW.312 Server:2 <wserver> [2<serverinfo>]
RAW.301 Away:2 <text>
RAW.317 Idle:2 <idletime>sec(s) Sign on: 2<signontime>
RAW.318 ¯¯¯¯¯¯¯¯¯¯( end off /whois )¯¯¯¯¯¯¯¯¯¯ ¯ ¯¯ ¯¯¯¯ ¯ ¯ ¯ ¯¯ ¯
RAW.369 ¯¯¯¯¯¯¯¯¯¯( end off /whowas )¯¯¯¯¯¯¯¯¯¯ ¯ ¯¯ ¯¯¯¯ ¯ ¯ ¯ ¯¯ ¯
 
 
FontDefault Courier New,12
FontChan Courier New,12
FontQuery Courier New,12
BaseColors 01,01,01,01
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,00,01,01,01,01,01,01,01,00,01,00,01,15
 
Script diva.mrc
 
RAW.001 14~ (Diva) Welcome to IRC!
RAW.002 <pre> Host: 2<server> running [2<value>]
RAW.003 <pre> Created on : 2<value>
RAW.251 !script diva.luserstart
RAW.252 <pre> Operators: 2<value>
RAW.253 <pre> Unknown: 2<value>
RAW.254 <pre> Channels: 2<value>
RAW.255 !script diva.raw.255
CLineOwner 12
CLineOp 12
CLineHOp 12
CLineVoice 02
CLineMe 05
RAW.265 <pre> Local users: 2<users>/2<value>
RAW.266 <pre> Global users: 2<users>/2<value>
RAW.324 <pre> Channel modes: 2<modes>
RAW.332 <pre> Topic is: 2<text>
RAW.333 <pre> Set by 2<nick>
RAW.391 <pre> Time/date at server: 2<text>
RAW.372 [2motd]:
RAW.376 [2motd end]
RAW.401 <pre> No such nick: [2<nick>] <comments>
RAW.403 <pre> No such channel: [2<chan>] <comments>
RAW.404 <pre> Can not send to channel: [2<chan>] <comments>
RAW.421 <pre> 2<value> is an unknown commmand<comments>
RAW.432 <pre> <nick> is an invalid nickname <comments>
RAW.433 <pre> 2<nick> is in use <comments>
RAW.471 <pre> Channel is full: [2<chan>] <comments>
RAW.473 <pre> Channal is 2+i [2<chan>] <comments>
RAW.474 <pre> Cannot join channel (2+b) [2<chan>] <comments>
RAW.475 <pre> Channel requires key (2+k) <comments>
RAW.482 <pre> You need ops [2<chan>] <comments>
 
Scheme1 red
Scheme2 blue
 
[Scheme1]
BaseColors 01,01,01,01
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,00,01,01,01,01,01,01,01,00,01,00,01,15
RGBColors 255,255,255 0,0,0 128,0,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 255,0,0 255,0,255 128,128,128 208,208,208
 
[Scheme2]
BaseColors 01,01,01,01
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,00,01,01,01,01,01,01,01,00,01,00,01,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
 
