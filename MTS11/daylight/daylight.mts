; Theme information
[mts]
Name daylight
Author thechin
EMail admin@thechin.net
Website www.thechin.net
Description Daylight theme by thechin, I would like to thank all the people who helped me with it. (sed, biz, memo, tig0ti and mavric-)
Version 1.0
MTSVersion 1.1
Script daylight.mrc
 
Timestamp ON
TimestampFormat 01h:nntt
 
Scheme1 Red
Scheme2 Blue
Scheme3 Green
Scheme4 Teal
 
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 198,2,23 255,0,0 67,78,167 62,100,100 255,128,0 255,255,0 0,255,0 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
FontDefault Bright,10
FontQuery Bright,10
FontChan Bright,10
 
Prefix 01-07-01-
ParenText 07/01<text>
 
TextChan 07<lt>07<cmode><nick>07> <text>
TextChanSelf 07<lt>07<cmode><me>07> <text>
ActionChan 01*07 <nick> 01<text>
ActionChanSelf 01*07 <me> 01<text>
NoticeChan <pre> 0101notice07: 01<target> 07(<text>07)
Notice <pre> 01notice07: 01<nick> 07(01<text>07)
NoticeSelf <pre> 0101notice07: -> 01<target> 07(01<text>07)
NoticeSelfChan <pre> 0101notice07: -> 01<target> 07(01<text>0107)
TextQuery 07<lt>07<cmode><nick>07> <text>
TextQuerySelf 07<lt>07<cmode><me>07> <text>
ActionQuery 01*07 <nick> 01<text>
ActionQuerySelf 01*07 <me> 01<text>
TextMsg <pre> 01msgfrom07: 01<nick> 07(01<text>07)
TextMsgSelf <pre> 01msg07: 01<target> 07(01<text>07)
 
Mode <pre> 01<nick> changes mode07:01 <modes>
ModeUser <pre> 01<me> changes mode07:01<modes>
Join <pre> 01join07: 01<nick>01 07(01<address>0107)
JoinSelf <pre> 01joined07: 01<chan>01 01<me> 07(01<address>0107)
Part <pre> 01part0107:01 01<nick>01 07(01<address><parentext>0107)
Kick <pre> 01kicked0107: 01<knick> from <chan> by <nick>01 07(01<address><parentext>0107)
KickSelf <pre> 01kicked07: 01you from <chan> by <nick>01 07(01<address><parentext>0107)
Quit <pre> 01quits0107: 01<nick>01 07(01<address><parentext>0107)
Topic <pre> 01topic0107: 01<nick> 07(01<text>07)
Nick <pre> 01nick07: 01<nick> to 07<newnick>
NickSelf <pre> 01nick07: 01<me> to 07<newnick>
Invite <pre> 01invite07: <nick> 01to 07<chan>
ServerError <pre> 01error07: 01<text>
Rejoin <pre> 01rejoining07: 01<chan>
Ctcp <pre> 01ctcp07: 07<ctcp> 01<nick>
CtcpChan <pre> 01ctcp07:01<chan> 07<ctcp> 01from <nick>
CtcpSelf <pre> 01ctcp07: -> 01<nick> 07<ctcp> 01<text>
CtcpChanSelf <pre> 01ctcp07: -> 01<chan> 07<ctcp> 01<text>
CtcpReply <pre> 01ctcpreply07: 01<nick> 07<ctcp> 01<text>
CtcpReplySelf <pre> 01ctcpreply07: -> 01<nick> 07<ctcp>
Notify <pre> 01notify07: 07(01<nick>07) 07(01<text>07)
UNotify <pre> 01unnotify07: 07(01<nick>07) 07(01<text>07)
Wallop <pre> 01wallop07: 07(01<text>07)
NoticeServer <pre> 01snotice07: 0701<nick> 07(01<text>07)
 
DNS <pre> 01dns07: 01looking up 07(01<address>07)
DNSError <pre> 01dnserr07: 01can't look up 07(01<address>07)
DNSResolve <pre> 01dnsr07: 01resolved 07(01<address>07/01<raddress>07)
Echo <pre> 01<text>
EchoTarget <pre> 01<text>
Error <pre> 01<text>
Load <pre> 01load07: 07(01Daylight theme loaded07)
Unload <pre> 01unload07: 07(01Daylight theme unloaded07)
 
Whois !script daylight.w
 
RAW.Other <pre> 01<text>
RAW.001 <pre> 01<text>
RAW.002 <pre> 01host07: 07(01<server>07) 01running version 07(01<value>07)
RAW.003 <pre> 07(01<server>07) 01created on 07(01<value>07)
RAW.005 <pre> 01protocols supported by this server07: 07(01<text>0107)
RAW.221 <pre> 01current umodes07: 07(01<nick> 07/<modes>07)
RAW.250 <pre> 01total connections07: 07(01<text>07)
RAW.251 <pre> 01users07: 07(01<users>07) 01invisible07: 07(01<text>07) 01servers07: 07(01<value>07)
RAW.252 <pre> 01operators online07: 07(01<value>07)
RAW.253 <pre> 01unknown connections07: 07(01<value>07)
RAW.254 <pre> 01number of chans formed07: 07(01<value>07)
RAW.255 <pre> 01local clients07: 01<users> on 07<value> 01servers
RAW.265 <pre> 01local users07: 01<users> 01max07: 01<value>
RAW.266 <pre> 01global users07: 01<users> 01max07: 01<value>
RAW.302 <pre> 01userhost07: 01<nick> 07(01<address>0107)
RAW.324 <pre> 01channel modes07: 07(01<chan>07/01<modes>07)
RAW.332 <pre> 01curtopic07: 07(01<text>07)
RAW.333 <pre> 01topic set by07: 07<nick> 01on 07<text>
RAW.341 <pre> 01invited 07<nick> 01to <chan>
 
RAW.401 <pre> 01no such nick07: 07(01<nick>07)
RAW.403 <pre> 01no such chan07: 07(01<chan>07)
RAW.404 <pre> 01can't send to <chan>07: 07(01moderated07)
RAW.421 <pre> 01invalid command used07: 07(01<value>07)
RAW.432 <pre> 01nick not valid07: 07(01<value>07)
RAW.433 <pre> 01nick is in use07: 07(01<nick>07)
RAW.471 <pre> 01can't join <chan>07: 07(01limit reached07)
RAW.473 <pre> 01can't join <chan>07: 07(01invitation only07)
RAW.474 <pre> 01can't join <chan>07: 07(01banned07)
RAW.475 <pre> 01can't join <chan>07: 07(01channel key needed07)
RAW.482 <pre> 01can't execute <chan>07: 07(01not an operator07)
RAW.329 !Script %:echo %::pre 01channel created07: 01 $asctime( %::text ,dddd mmm dd yyyy HH:nn:ss) 
 
[Scheme1]
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 198,2,23 255,0,0 67,78,167 62,100,100 255,0,0 255,255,0 0,255,0 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
[Scheme2]
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 198,2,23 255,0,0 67,78,167 62,100,100 0,0,140 255,255,0 0,255,0 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
[Scheme3]
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 198,2,23 255,0,0 67,78,167 62,100,100 0,128,0 255,255,0 0,255,0 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
[Scheme4]
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 198,2,23 255,0,0 67,78,167 62,100,100 64,128,128 255,255,0 0,255,0 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
