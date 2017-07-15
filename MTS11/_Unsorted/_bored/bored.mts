[mts]
Name bored
Author LeYeR
EMail leyerpunk@tujefa.org
Website http://ust.port5.com
Description I designed this theme cause i was bored... it has a nice whois\whowas display
Version 0.8
MTSVersion 1.1
Script bored.mrc
 
Timestamp OFF
Timestampformat 10[ 11hh:nntt 10]
 
Scheme1 IBPMC
 
BaseColors 02,12,01,01
Colors 01,06,14,11,15,14,13,15,15,15,15,11,13,13,06,11,15,15,15,13,14,01,00,01,14,15
RGBColors 255,255,255 0,0,0 32,60,104 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,128,192 255,0,255 128,128,128 208,212,208
 
FontDefault terminal,12
FontQuery terminal,12
FontChan terminal,12
 
CLineMe 12
 
Prefix 10::11:
ParenText 10[14<text>10]
 
TextChan !Script %:echo $_align(13,13<06 $+ %::cmode $+ %::nick) $+ 13> 00 $+ %::text $+ 
TextChanSelf !Script %:echo $_align(13,06<13 $+ %::cmode $+ %::me) $+ 06> 00 $+ %::text $+ 
ActionChan !Script %:echo $_align(14,þ 06 $+ %::cmode $+ %::nick) 13 $+ %::text $+ 
ActionChanSelf !Script %:echo $_align(14,þ 06 $+ %::cmode $+ %::me) 13 $+ %::text $+ 
NoticeChan <pre> 11[14notice10(14<target>10)11] 6<nick> <text>
Notice <pre> 11[14notice10(14<nick>10)11] <text>
NoticeSelf <pre> 11[14notice10(14<nick>10)11] <text>
NoticeSelfChan <pre> 11[14notice10(14<target>10)11] 6<nick> <text>
TextQuery !Script %:echo $_align(13,06<13 $+ %::nick) $+ 06> 00 $+ %::text $+ 
TextQuerySelf !Script %:echo $_align(13,06<13 $+ %::nick) $+ 06> 00 $+ %::text $+ 
ActionQuery !Script %:echo $_align(14,þ 06 $+ %::nick $+ ) 13 $+ %::text $+
ActionQuerySelf !Script %:echo þ $_align(14,þ 13 $+ %::me) $+  00 $+ %::text $+ 
TextMsgSelf <pre> 13*06<nick>13* 14<text>
 
Mode <pre> 11[14mode10(14<chan>10)11] 11 <modes>  by <nick>
ModeUser <pre> 11[14mode10(14<me>10)11] 11<modes>
Join 14-15> 11[14join10(14<chan>10)11] <nick> 11(10<address>11)
JoinSelf 14-15> 11[14joined10(14<chan>10)11] <comments>
Part 15<14- 11[14part10(14<chan>10)11] <nick> 11(10<address>11) <parentext>
Kick 15<14- 11[14kick10(14<chan>10)11] 11<knick> by <nick> <parentext>
KickSelf <timestamp> 15<14- 11[14kick10(14<chan>10)11] 11<knick> by <nick> <parentext>
Quit 15<14- 11[14signoff10(14<chan>10)11] <nick> <parentext>
Topic 14<lt>15-14<gt> 11[14topic10(14<chan>10)11] <text> ... by 10<nick>
Nick 14<lt>15-14<gt> 11[14nick10(14<chan>10)11] <nick> to 10<newnick>
NickSelf 14<lt>15-14<gt> 11[14nick10(14<me>10)11] newnick: 10<newnick>
Invite <pre> 11[14invite10(14<nick>10)11] to <chan>
ServerError <pre> 11[14server10(14error10)11] <text>
Ctcp <pre> 11[14ctcp10(14<CTCP>10)11] by 10<nick> <text>
CtcpChan <pre> 11[14ctcp10(14<ctcp>10)11] by 10<nick> on <chan> <text>
CtcpSelf <pre> 11[14ctcp10(14<CTCP>10)11] to 10<nick> <text>
CtcpChanSelf <pre> 11[14ctcp10(14<ctcp>10)11] to 10<chan> <text>
CtcpReply <pre> 11[14ctcp10(14<CTCP>10)11] reply by 10<nick> <text>
CtcpReplySelf <pre> 11[14ctcp10(14<CTCP>10)11] reply to 10<nick> <text>
Notify <pre> 11[14notify10(14<nick>10)11] 11(10<address>11) <parentext>
UNotify <pre> 11[14unotify10(14<nick>10)11] 11(10<address>11) <parentext>
NoticeServer !Script %:echo %::timestamp 11[14server10(14notice10)11] 00 $+ $remove(%::text,*) $+ 
 
Echo <pre> <text>
EchoTarget <pre> 11[14echo10(14<chan>10)11] <text>
Error <pre> 11:10Error11: 14<text>
 
RAW.369 !script return
Whois !script t.b.whois
Whowas !script t.b.whowas
 
RAW.Other <pre> 06::13<numeric>06:: 14<text>
RAW.251 !script return
RAW.324 <pre> 11[14modes10(14<chan>10)11] <modes>
RAW.332 <pre> 11[14topic10(14<chan>10)11] <text>
RAW.333 <pre> 11[14topic10(14<chan>10)11] set by: <nick> on <value>
RAW.353 !script return
RAW.366 !script return
RAW.391 <pre> 11[14server10(14time10)11]: <text>
RAW.329 <pre> 11[14created on10(14<chan>10)11] <value>
RAW.305 <pre> 11[14info10(14away10)11] turned off...
RAW.306 <pre> 11[14info10(14away10)11] turned on...
RAW.999 !script return
 
RAW.401 !Script %:echo %::pre 14no such nick00: 11(10 $+ %::nick $+ 11) | whowas %::nick
RAW.403 <pre> 14no such channel00: 11(10<chan>11)
RAW.404 <pre> 11[14error10(14<chan>10)11]: can't send data
RAW.421 <pre> 11[14internal10(14error10)11]: invalid command 11(10/<value>11)
RAW.432 <pre> 11[14internal10(14error10)11]: invalid nickname 11(10<nick>11)
RAW.433 <pre> 11[14internal10(14error10)11]: nick in use 11(10<nick>11)
RAW.471 <pre> 11[14error10(14<chan>10)11]: channel full
RAW.473 <pre> 11[14error10(14<chan>10)11]: invite only
RAW.474 <pre> 11[14error10(14<chan>10)11]: banned
RAW.475 <pre> 11[14error10(14<chan>10)11]: channel key required
RAW.482 <pre> 11[14error10(14<chan>10)11]: not opped
RAW.406 <pre> 11[14error10(14<nick>10)11]: wasn't connected
 
 
[Scheme1]
FontDefault IBMPC,12
FontQuery IBMPC,12
FontChan IBMPC,12
 
Prefix 1011
 
