; This MTS theme is based
; On a ircN theme "by silence"
; Silence saw a screenshot of this, and made it.
; So, like he thanks the original author
; I'm thaking him too. Thx =)
;
; Greetz
[mts]
; Theme information
Name Bitch
MTSVersion 1.1
Version 1.0a
Author Wouter
EMail the_wouter@hotmail.com
Timestamp ON
TimestampFormat (dd-mm-yy/HH:nn:ss)
BaseColors 00,15,10,11
 
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,42,21 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
Colors 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,15,15,15,15,01,00,01,15,15
 
Prefix <c4>~<c3>/<c4>~
 
ParenText <c2><text><c2>
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
CLineOwner 15
 
Script Bitch.mrc
 
RAW.Other <pre> <c2><text>
RAW.333 <pre> <c2>Set by <c1><nick> <c2>on <c1><text>
RAW.332 <pre> <c2>Topic is '<c1><text><c2>'
Whois !Script bitch.whois
Whowas !Script bitch.whowas
DNSError <pre> 15DNS for 0"<address>" 15Failed.
Echo <pre> 15<text>
EchoTarget <pre> 15<text>
Error <pre> 15Error: 0<text>
Unload <c2>Bitch <c2>theme by <c1>Wouter <c2>unloaded.
 
Mode <pre> <c2>(<c3>mode<c2>/<c3><chan><c2>) <c1><modes> <c2>by <c1><nick> <c2>(<c1><address><c2>)
 
ModeUser <pre> <c1><me> <c2>sets mode: <c1><modes>
 
Join <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
 
Part <pre> <c3><nick> <c4>part<c2>/<c3><chan> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
 
Kick <pre> <c1><knick> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
 
KickSelf <pre> <c1><me> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
Quit <pre> <c4>signoff<c2>/<c3><nick> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
JoinSelf <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
Topic <pre> <c2> [ <c3>topic<c2>-<c4>o<c3>n <c1><chan> <2> by <c1><nick> <c2> ] '<text>'
 
Nick <pre> <c3>nickchange<2> <nick> to <c1><newnick>
 
NickSelf <pre> <c1><me> <c2> is know known as <c1><newnick>
Invite 14[<c1><nick>(<address>)14] <c2>invites you to join <c4><chan>
 
ServerError <pre> error: <text>
 
Rejoin <pre> <c2>rejoined(<c1><chan><c2>)
 
Ctcp <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) <c2> request by <c1><nick>
 
Notify <pre> <c1><nick> <c2>has arrived.
UNotify <pre> <c1><nick> <c2>has dissapeared.
 
TextChan 14(<c1><cmode><c2><nick>14) <c2><text>
 
TextChanSelf 14(<c1><cmode><c1><nick>14) <c1><text>
 
ActionChan <c1>æ <c2><nick> <text>
ActionChanSelf <c1>æ <nick> <text>
 
Description Bitch MTS Theme thingie. Who's your daddy!
 
TextQuery 14(<c2><nick>14) <c2><text>
TextQuerySelf 14(<c1><nick>14) <c1><text>
 
ActionQuerySelf <c1>æ <nick> <text>
ActionQuery <c1>æ <c2><nick> <text>
 
CtcpChan <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) (<c1><text><c2>)<c2> request by <c1><nick> <c2>
 
Load <c2>Bitch <c2>theme by <c1>Wouter<c2> ready to rock.
RAW.002 <pre> <c2><server> <value>
 
RAW.003 <pre> <c2>server created on <c1><value>
NoticeChan <c4>notice14[15<nick>:<target>14] 15<text>
 
Notice <c4>notice14[15<nick>14] 15<text>
NoticeSelf <c3>-> <c4>notice14[15<nick>14] 15<text>
 
NoticeSelfChan <c3>-> <c4>notice14[15<target>14] 15<text>
 
TextMsg 11msg14[15<nick>14] 15<text>
TextMsgSelf 11-> 11msg14[15<nick>14] <text>
 
CtcpSelf 11-> <c2>(<c3>ctcp<c2>/<c3><nick><c2>) <c1><ctcp><c2> <text>
CtcpChanSelf 11-> <c3>ctcp(<c3><ctcp><c2>/<c3><chan><c2>) <c2><text>
Wallop <c4>wallops14[<c4><nick>14] <c1><text>
 
 
CtcpReply 11-> 10ctcp-reply14/11<ctcp> 0<text>
 
CtcpReplySelf 11-> 10ctcp-reply14/11<nick> 0<ctcp>
 
RAW.401 <pre> 15 No such nickname -- 0<nick>
RAW.403 <pre> 15 No such # -- 0<chan>
RAW.404 <pre> 15 Unable to send message to 0<chan>
RAW.421 <pre> 15invalid /command -- 0/<value>
RAW.432 <pre> 15invalid nickname -- 0<nick>
 
RAW.433 <pre> 15Nickname is in use .. (0<nick>15)
RAW.471 <pre> 15Uhoh.. 0<chan> 15is full.
RAW.473 <pre> 0<chan> 15is on invite only (+i)
RAW.474 <pre> 15You are banned from 0<chan> (+b)
RAW.475 <pre> 0<chan> 15 requires a key.
RAW.482 <pre> 15 You aren't opped(+o) in 0<chan>
 
RAW.221 <pre> 15usermode 0<nick> <modes>
RAW.250 <pre> <c2><value>
RAW.251 <pre> 15There are <c1><users> <c2>users, <c1><value> <c2>invisible & <c1><text> <c2>servers.
RAW.252 <pre> <c1><value> 15operators
RAW.253 <pre> <c1><value> <c2>unknown connections.
RAW.254 <pre> <c1><value> 15channels.
RAW.391 <pre> 15Time 0<text>
 
RAW.255 <pre> <c1><users> <c2> Local clients & <c1><value> <c2>servers
RAW.265 <pre> 15Local users: <c1><users> 15(max: <c1><value>15)
RAW.005 <pre> <c2><text>
 
RAW.266 <pre> 15Global users: <c1><users> 15(max: <c1><value>15)
RAW.302 <pre> using userhost <nick> <adress> <value>
RAW.315 <pre> End of /who <value>
RAW.324 <pre> <c1><chan> 15modes: <c1><modes>
RAW.341 <pre> <c1><nick> <c2> was invited to <c1><chan>
RAW.372 <pre> 15Message of the day: "<c1><text>15"
 
RAW.001 <pre> <c2>Welcome <text>
 
DNSResolve !Script bitch.dns
DNS !Script bitch.pwhois
 
Scheme1 Bitch (¤¤¤)
Scheme3 Bitch (•Ø•)
Scheme2 Bitch («-»)
NoticeServer <c4>servernotice14(<c1><nick>14) <c1><text>
Website /
 
[Scheme1]
Timestamp ON
TimestampFormat (dd-mm-yy/HH:nn:ss)
BaseColors 00,15,10,11
 
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,42,21 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
Colors 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,15,15,15,15,01,00,01,15,15
 
Prefix <c4>¤<c3>¤<c4>¤
 
ParenText <c2><text><c2>
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
CLineOwner 15
 
Script NN-Bitch.mrc
 
RAW.Other <pre> <c2><text>
RAW.333 <pre> <c2>Set by <c1><nick> <c2>on <c1><text>
RAW.332 <pre> <c2>Topic is '<c1><text><c2>'
Whois !Script bitch.whois
Whowas !Script bitch.whowas
DNSError <pre> 15DNS for 0"<address>" 15Failed.
Echo <pre> 15<text>
EchoTarget <pre> 15<text>
Error <pre> 15Error: 0<text>
Unload <c2>Bitch <c2>theme by <c1>Wouter <c2>unloaded.
 
Mode <pre> <c2>(<c3>mode<c2>/<c3><chan><c2>) <c1><modes> <c2>by <c1><nick> <c2>(<c1><address><c2>)
 
ModeUser <pre> <c1><me> <c2>sets mode: <c1><modes>
 
Join <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
 
Part <pre> <c3><nick> <c4>part<c2>/<c3><chan> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
 
Kick <pre> <c1><knick> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
 
KickSelf <pre> <c1><me> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
Quit <pre> <c4>signoff<c2>/<c3><nick> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
JoinSelf <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
Topic <pre> <c2> [ <c3>topic<c2>-<c4>o<c3>n <c1><chan> <2> by <c1><nick> <c2> ] '<text>'
 
Nick <pre> <c3>nickchange<2> <nick> to <c1><newnick>
 
NickSelf <pre> <c1><me> <c2> is know known as <c1><newnick>
Invite 14[<c1><nick>(<address>)14] <c2>invites you to join <c4><chan>
 
ServerError <pre> error: <text>
 
Rejoin <pre> <c2>rejoined(<c1><chan><c2>)
 
Ctcp <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) <c2> request by <c1><nick>
 
Notify <pre> <c1><nick> <c2>has arrived.
UNotify <pre> <c1><nick> <c2>has dissapeared.
 
TextChan 14(<c1><cmode><c2><nick>14) <c2><text>
 
TextChanSelf 14(<c1><cmode><c1><nick>14) <c1><text>
 
ActionChan <c1>æ <c2><nick> <text>
ActionChanSelf <c1>æ <nick> <text>
 
Description Bitch-O MTS Theme thingie. Who's your daddy!
 
TextQuery 14(<c2><nick>14) <c2><text>
TextQuerySelf 14(<c1><nick>14) <c1><text>
 
ActionQuerySelf <c1>æ <nick> <text>
ActionQuery <c1>æ <c2><nick> <text>
 
CtcpChan <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) (<c1><text><c2>)<c2> request by <c1><nick> <c2>
 
Load <c2>Bitch <c2>theme by <c1>Wouter<c2> ready to rock.
RAW.002 <pre> <c2><server> <value>
 
RAW.003 <pre> <c2>server created on <c1><value>
NoticeChan <c4>notice14[15<nick>:<target>14] 15<text>
 
Notice <c4>notice14[15<nick>14] 15<text>
NoticeSelf <c3>-> <c4>notice14[15<nick>14] 15<text>
 
NoticeSelfChan <c3>-> <c4>notice14[15<target>14] 15<text>
 
TextMsg 11msg14[15<nick>14] 15<text>
TextMsgSelf 11-> 11msg14[15<nick>14] <text>
 
CtcpSelf 11-> <c2>(<c3>ctcp<c2>/<c3><nick><c2>) <c1><ctcp><c2> <text>
CtcpChanSelf 11-> <c3>ctcp(<c3><ctcp><c2>/<c3><chan><c2>) <c2><text>
Wallop <c4>wallops14[<c4><nick>14] <c1><text>
 
NoticeServer <c4>servernotice14(<c1><nick>14) <c1><text>
 
CtcpReply 11-> 10ctcp-reply14/11<ctcp> 0<text>
 
CtcpReplySelf 11-> 10ctcp-reply14/11<nick> 0<ctcp>
 
RAW.401 <pre> 15 No such nickname -- 0<nick>
RAW.403 <pre> 15 No such # -- 0<chan>
RAW.404 <pre> 15 Unable to send message to 0<chan>
RAW.421 <pre> 15invalid /command -- 0/<value>
RAW.432 <pre> 15invalid nickname -- 0<nick>
 
RAW.433 <pre> 15Nickname is in use .. (0<nick>15)
RAW.471 <pre> 15Uhoh.. 0<chan> 15is full.
RAW.473 <pre> 0<chan> 15is on invite only (+i)
RAW.474 <pre> 15You are banned from 0<chan> (+b)
RAW.475 <pre> 0<chan> 15 requires a key.
RAW.482 <pre> 15 You aren't opped(+o) in 0<chan>
 
RAW.221 <pre> 15usermode 0<nick> <modes>
RAW.250 <pre> <c2><value>
RAW.251 <pre> 15There are <c1><users> <c2>users, <c1><value> <c2>invisible & <c1><text> <c2>servers.
RAW.252 <pre> <c1><value> 15operators
RAW.253 <pre> <c1><value> <c2>unknown connections.
RAW.254 <pre> <c1><value> 15channels.
RAW.391 <pre> 15Time 0<text>
 
RAW.255 <pre> <c1><users> <c2> Local clients & <c1><value> <c2>servers
RAW.265 <pre> 15Local users: <c1><users> 15(max: <c1><value>15)
RAW.005 <pre> <c2><text>
 
RAW.266 <pre> 15Global users: <c1><users> 15(max: <c1><value>15)
RAW.302 <pre> using userhost <nick> <adress> <value>
RAW.315 <pre> End of /who <value>
RAW.324 <pre> <c1><chan> 15modes: <c1><modes>
RAW.341 <pre> <c1><nick> <c2> was invited to <c1><chan>
RAW.372 <pre> 15Message of the day: "<c1><text>15"
 
RAW.001 <pre> <c2>Welcome <text>
 
DNSResolve !Script bitch.dns
DNS !Script bitch.pwhois
 
[Scheme2]
Timestamp ON
TimestampFormat (dd-mm-yy/HH:nn:ss)
BaseColors 00,15,10,11
 
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,42,21 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
Colors 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,15,15,15,15,01,00,01,15,15
 
Prefix <c4>«<c3>-<c4>»
 
ParenText <c2><text><c2>
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
CLineOwner 15
 
Script NN-Bitch.mrc
 
RAW.Other <pre> <c2><text>
RAW.333 <pre> <c2>Set by <c1><nick> <c2>on <c1><text>
RAW.332 <pre> <c2>Topic is '<c1><text><c2>'
Whois !Script bitch.whois
Whowas !Script bitch.whowas
DNSError <pre> 15DNS for 0"<address>" 15Failed.
Echo <pre> 15<text>
EchoTarget <pre> 15<text>
Error <pre> 15Error: 0<text>
Unload <c2>Bitch <c2>theme by <c1>Wouter <c2>unloaded.
 
Mode <pre> <c2>(<c3>mode<c2>/<c3><chan><c2>) <c1><modes> <c2>by <c1><nick> <c2>(<c1><address><c2>)
 
ModeUser <pre> <c1><me> <c2>sets mode: <c1><modes>
 
Join <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
 
Part <pre> <c3><nick> <c4>part<c2>/<c3><chan> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
 
Kick <pre> <c1><knick> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
 
KickSelf <pre> <c1><me> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
Quit <pre> <c4>signoff<c2>/<c3><nick> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
JoinSelf <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
Topic <pre> <c2> [ <c3>topic<c2>-<c4>o<c3>n <c1><chan> <2> by <c1><nick> <c2> ] '<text>'
 
Nick <pre> <c3>nickchange<2> <nick> to <c1><newnick>
 
NickSelf <pre> <c1><me> <c2> is know known as <c1><newnick>
Invite 14[<c1><nick>(<address>)14] <c2>invites you to join <c4><chan>
 
ServerError <pre> error: <text>
 
Rejoin <pre> <c2>rejoined(<c1><chan><c2>)
 
Ctcp <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) <c2> request by <c1><nick>
 
Notify <pre> <c1><nick> <c2>has arrived.
UNotify <pre> <c1><nick> <c2>has dissapeared.
 
TextChan 14(<c1><cmode><c2><nick>14) <c2><text>
 
TextChanSelf 14(<c1><cmode><c1><nick>14) <c1><text>
 
ActionChan <c1>æ <c2><nick> <text>
ActionChanSelf <c1>æ <nick> <text>
 
Description Bitch-O MTS Theme thingie. Who's your daddy!
 
TextQuery 14(<c2><nick>14) <c2><text>
TextQuerySelf 14(<c1><nick>14) <c1><text>
 
ActionQuerySelf <c1>æ <nick> <text>
ActionQuery <c1>æ <c2><nick> <text>
 
CtcpChan <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) (<c1><text><c2>)<c2> request by <c1><nick> <c2>
 
Load <c2>Bitch <c2>theme by <c1>Wouter <c2>ready to rock.
RAW.002 <pre> <c2><server> <value>
 
RAW.003 <pre> <c2>server created on <c1><value>
 
Notice <c4>notice14[15<nick>14] 15<text>
 
 
TextMsg 11msg14[15<nick>14] 15<text>
TextMsgSelf 11-> 11msg14[15<nick>14] <text>
 
CtcpSelf 11-> <c2>(<c3>ctcp<c2>/<c3><nick><c2>) <c1><ctcp><c2> <text>
CtcpChanSelf 11-> <c3>ctcp(<c3><ctcp><c2>/<c3><chan><c2>) <c2><text>
Wallop <c4>wallops14[<c4><nick>14] <c1><text>
 
NoticeServer <c4>servernotice14(<c1><nick>14) <c1><text>
 
CtcpReply 11-> 10ctcp-reply14/11<ctcp> 0<text>
 
CtcpReplySelf 11-> 10ctcp-reply14/11<nick> 0<ctcp>
 
RAW.401 <pre> 15 No such nickname -- 0<nick>
RAW.403 <pre> 15 No such # -- 0<chan>
RAW.404 <pre> 15 Unable to send message to 0<chan>
RAW.421 <pre> 15invalid /command -- 0/<value>
RAW.432 <pre> 15invalid nickname -- 0<nick>
 
RAW.433 <pre> 15Nickname is in use .. (0<nick>15)
RAW.471 <pre> 15Uhoh.. 0<chan> 15is full.
RAW.473 <pre> 0<chan> 15is on invite only (+i)
RAW.474 <pre> 15You are banned from 0<chan> (+b)
RAW.475 <pre> 0<chan> 15 requires a key.
RAW.482 <pre> 15 You aren't opped(+o) in 0<chan>
 
RAW.221 <pre> 15usermode 0<nick> <modes>
RAW.250 <pre> <c2><value>
RAW.251 <pre> 15There are <c1><users> <c2>users, <c1><value> <c2>invisible & <c1><text> <c2>servers.
RAW.252 <pre> <c1><value> 15operators
RAW.253 <pre> <c1><value> <c2>unknown connections.
RAW.254 <pre> <c1><value> 15channels.
RAW.391 <pre> 15Time 0<text>
 
RAW.255 <pre> <c1><users> <c2> Local clients & <c1><value> <c2>servers
RAW.265 <pre> 15Local users: <c1><users> 15(max: <c1><value>15)
RAW.005 <pre> <c2><text>
 
RAW.266 <pre> 15Global users: <c1><users> 15(max: <c1><value>15)
RAW.302 <pre> using userhost <nick> <adress> <value>
RAW.315 <pre> End of /who <value>
RAW.324 <pre> <c1><chan> 15modes: <c1><modes>
RAW.341 <pre> <c1><nick> <c2> was invited to <c1><chan>
RAW.372 <pre> 15Message of the day: "<c1><text>15"
 
RAW.001 <pre> <c2>Welcome <text>
 
DNSResolve !Script bitch.dns
DNS !Script bitch.pwhois
NoticeChan <c4>notice14[15<nick>:<target>14] 15<text>
NoticeSelf <c3>-> <c4>notice14[15<nick>14] 15<text>
NoticeSelfChan <c3>-> <c4>notice14[15<target>14] 15<text>
 
[Scheme3]
Timestamp ON
TimestampFormat (dd-mm-yy/HH:nn:ss)
BaseColors 00,15,10,11
 
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,42,21 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
 
Colors 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,15,15,15,15,01,00,01,15,15
 
Prefix <c3>•<c4>Ø<c3>•
 
ParenText <c2><text><c2>
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
CLineOwner 15
 
Script NN-Bitch.mrc
 
RAW.Other <pre> <c2><text>
RAW.333 <pre> <c2>Set by <c1><nick> <c2>on <c1><text>
RAW.332 <pre> <c2>Topic is '<c1><text><c2>'
Whois !Script bitch.whois
Whowas !Script bitch.whowas
DNSError <pre> 15DNS for 0"<address>" 15Failed.
Echo <pre> 15<text>
EchoTarget <pre> 15<text>
Error <pre> 15Error: 0<text>
Unload <c2>Bitch <c2>theme by <c1>Wouter <c2>unloaded.
 
Mode <pre> <c2>(<c3>mode<c2>/<c3><chan><c2>) <c1><modes> <c2>by <c1><nick> <c2>(<c1><address><c2>)
 
ModeUser <pre> <c1><me> <c2>sets mode: <c1><modes>
 
Join <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
 
Part <pre> <c3><nick> <c4>part<c2>/<c3><chan> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
 
Kick <pre> <c1><knick> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
 
KickSelf <pre> <c1><me> <c2> was kicked off <c1><chan> <c2> by <nick> (<c1><parentext><c2>)
Quit <pre> <c4>signoff<c2>/<c3><nick> <c2>(<c1><parentext><c2>) (<c1><address><c2>)
JoinSelf <pre> <c3><nick> <c4>join<c2>/<c3><chan> <c2>(<address>)
Topic <pre> <c2> [ <c3>topic<c2>-<c4>o<c3>n <c1><chan> <2> by <c1><nick> <c2> ] '<text>'
 
Nick <pre> <c3>nickchange<2> <nick> to <c1><newnick>
 
NickSelf <pre> <c1><me> <c2> is know known as <c1><newnick>
Invite 14[<c1><nick>(<address>)14] <c2>invites you to join <c4><chan>
 
ServerError <pre> error: <text>
 
Rejoin <pre> <c2>rejoined(<c1><chan><c2>)
 
Ctcp <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) <c2> request by <c1><nick>
 
Notify <pre> <c1><nick> <c2>has arrived.
UNotify <pre> <c1><nick> <c2>has dissapeared.
 
TextChan 14(<c1><cmode><c2><nick>14) <c2><text>
 
TextChanSelf 14(<c1><cmode><c1><nick>14) <c1><text>
 
ActionChan <c1>æ <c2><nick> <text>
ActionChanSelf <c1>æ <nick> <text>
 
Description Bitch-O MTS Theme thingie. Who's your daddy!
 
TextQuery 14(<c2><nick>14) <c2><text>
TextQuerySelf 14(<c1><nick>14) <c1><text>
 
ActionQuerySelf <c1>æ <nick> <text>
ActionQuery <c1>æ <c2><nick> <text>
 
CtcpChan <c2>(<c3>ctcp<c2>/<c3><ctcp><c2>) (<c1><text><c2>)<c2> request by <c1><nick> <c2>
 
Load <c2>Bitch <c2>theme by <c1>Wouter <c2>ready to rock.
RAW.002 <pre> <c2><server> <value>
 
RAW.003 <pre> <c2>server created on <c1><value>
NoticeChan <c4>notice14[15<nick>:<target>14] 15<text>
 
Notice <c4>notice14[15<nick>14] 15<text>
 
 
TextMsg 11msg14[15<nick>14] 15<text>
TextMsgSelf 11-> 11msg14[15<nick>14] <text>
 
CtcpSelf 11-> <c2>(<c3>ctcp<c2>/<c3><nick><c2>) <c1><ctcp><c2> <text>
CtcpChanSelf 11-> <c3>ctcp(<c3><ctcp><c2>/<c3><chan><c2>) <c2><text>
Wallop <c4>wallops14[<c4><nick>14] <c1><text>
 
 
CtcpReply 11-> 10ctcp-reply14/11<ctcp> 0<text>
 
CtcpReplySelf 11-> 10ctcp-reply14/11<nick> 0<ctcp>
 
RAW.401 <pre> 15 No such nickname -- 0<nick>
RAW.403 <pre> 15 No such # -- 0<chan>
RAW.404 <pre> 15 Unable to send message to 0<chan>
RAW.421 <pre> 15invalid /command -- 0/<value>
RAW.432 <pre> 15invalid nickname -- 0<nick>
 
RAW.433 <pre> 15Nickname is in use .. (0<nick>15)
RAW.471 <pre> 15Uhoh.. 0<chan> 15is full.
RAW.473 <pre> 0<chan> 15is on invite only (+i)
RAW.474 <pre> 15You are banned from 0<chan> (+b)
RAW.475 <pre> 0<chan> 15 requires a key.
RAW.482 <pre> 15 You aren't opped(+o) in 0<chan>
 
RAW.221 <pre> 15usermode 0<nick> <modes>
RAW.250 <pre> <c2><value>
RAW.251 <pre> 15There are <c1><users> <c2>users, <c1><value> <c2>invisible & <c1><text> <c2>servers.
RAW.252 <pre> <c1><value> 15operators
RAW.253 <pre> <c1><value> <c2>unknown connections.
RAW.254 <pre> <c1><value> 15channels.
RAW.391 <pre> 15Time 0<text>
 
RAW.255 <pre> <c1><users> <c2> Local clients & <c1><value> <c2>servers
RAW.265 <pre> 15Local users: <c1><users> 15(max: <c1><value>15)
RAW.005 <pre> <c2><text>
 
RAW.266 <pre> 15Global users: <c1><users> 15(max: <c1><value>15)
RAW.302 <pre> using userhost <nick> <adress> <value>
RAW.315 <pre> End of /who <value>
RAW.324 <pre> <c1><chan> 15modes: <c1><modes>
RAW.341 <pre> <c1><nick> <c2> was invited to <c1><chan>
RAW.372 <pre> 15Message of the day: "<c1><text>15"
 
RAW.001 <pre> <c2>Welcome <text>
 
DNSResolve !Script bitch.dns
DNS !Script bitch.pwhois
NoticeSelf <c3>-> <c4>notice14[15<nick>14] 15<text>
NoticeSelfChan <c3>-> <c4>notice14[15<target>14] 15<text>
NoticeServer <c4>servernotice14(<c1><nick>14) <c1><text>
 
