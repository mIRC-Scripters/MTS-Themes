[mts]
Name TripleK
Author quickman
Description Tons of different ways to make this look, white and black background, simple coloring.
Email wilcl2x4x9@charter.net
MTSVersion 1.1
Script triplek.mrc
Version 1.0

Prefix  <c1>:<c2>:
ParenText <c1>(<c2><text><c1>)
Timestamp OFF
TimestampFormat <c1>(<c2>hh:nn<c1>)
Echo <pre> <c3><text>
EchoTarget <pre> <c1>[<c2><target><c1>]<c3> <text>
Error <pre> <c3><text>
Load <c1>›<c2>› <c2>loaded: <c1>theme<c1>(<c2>TripleK<c1>) by <c2>quickman
Unload <c1>‹<c2>‹ <c2>unloaded: <c1>theme<c1>(<c2>TripleK<c1>) by <c2>quickman

TextChan <timestamp> <c1><lt><c1><cmode><c3><nick><c1><gt> <c3><text>
TextChanSelf <timestamp> <c1><lt><c1><cmode><c3><me><c1><gt> <c3><text>
ActionChan <timestamp> <c2>! <c1><cmode><c3><nick> <text>
ActionChanSelf <timestamp> <c2>! <c1><cmode><c3><me> <text>
Join <timestamp>  <c1>›<c2>› <c2>entering<c1>(<c2><chan><c1>): <c1><nick><c1>[<c2><address><c1>]
JoinSelf <timestamp>  <c1>›<c2>› <c1>Now talking in <c2><chan> 
Part <timestamp>  <c1>‹<c2>‹ <c2>leaving<c1>(<c2><chan><c1>): <c1><nick><c1>[<c2><address><c1>] <parentext>
Kick <timestamp>  <c1>‹<c2>‹ <c2>kicked<c1>(<c2><chan><c1>): <c2><nick><c1>[<c2><address><c1>] kicked <c2><knick> <parentext>
KickSelf  <timestamp>  <c1>‹<c2>‹ <c2>kicked<c1>(<c2><chan><c1>): <c2>You <c1>by <c2><nick> <parentext>
Quit <timestamp>  <c1>‹<c2>‹ <c2>quiting<c1>: <c1><nick><c1>[<c2><address><c1>] <parentext>
Nick <timestamp> <pre> <c2>nick change<c1>: <c1><nick><c1>[<c2><address><c1>] to <c2><newnick>
NickSelf <timestamp> <pre> <c2>nick change<c1>: <c1>you are now known as <c2><newnick>
ServerError <pre> <c1>error: <c2><text>
Mode <timestamp> <pre> <c2>modes set<c1>(<c2><chan><c1>): <c2><modes> <c1>by <c2><nick>
ModeUser <timestamp> <pre> <c2>modes set<c1>: <modes><c1>(<c2>You<c1>)
Topic <timestamp> <pre> <c2>topic set<c1>:<c1>(<c2><chan><c1>) <text> <c1>(<c2>by <nick><c1>)
Notify <timestamp> <pre> <c2>notify: <c1><nick><c1>[<c2><address><c1>] is on irc <parentext>
Unotify <timestamp> <pre> <c2>notify: <c1><nick><c1>[<c2><address><c1>] has left irc <parentext>
Invite <timestamp> <pre> <c1><nick><c1>[<c2><address><c1>] invites you to join <c2><chan>
Notice <c1>-<c3><nick><c2>- <c3><text>
NoticeSelf <c1>-> <target>: <c3><text>
NoticeChan <c1>-<c3><nick>/<chan><c2>- <c3><text>
NoticeSelfChan <c1>-> <target>: <c3><text>
NoticeServer <c1>-<c3><server><c2>- <c3><text>
Rejoin <timestamp> <pre> <c1>attempting to rejoin <c2><chan>
Wallop <timestamp> <pre> <c1>wallops<c1>(<c2><nick><c1>) <c3><text>
TextQuery <timestamp> <c1><lt><c3><nick><c1><gt> <c3><text>
TextQuerySelf <timestamp> <c1><lt><c3><me><c1><gt> <c3><text>
ActionQuery <timestamp> <c2>! <c3><nick> <text>
ActionQuerySelf <timestamp> <c2>! <c3><me> <text>
TextMsg <timestamp> <c1><nick><c1>[<c2><address><c1>]<c3> <text>
TextMsgSelf <timestamp> <c1>msg to <c1>(<c2><target><c1>): <text>
CTCP <timestamp> <pre> <c2>ctcp: <c1><nick><c1>[<c2><address><c1>]<c3> <ctcp> <text>
CTCPSelf <timestamp> <pre> <c2>ctcp send: <c1><ctcp> <text><c1>(<c2><target><c1>)
CTCPChan <timestamp> <pre> <c2>ctcp: <c1><nick><c1>[<c2><address><c1>] <c2><chan>:<c3> <ctcp> <text>
CTCPChanSelf <timestamp> <pre> <c2>ctcp send: <c1><ctcp> <text><c1>(<c2><target><c1>)
CTCPReply <timestamp> <pre> <c2>ctcp reply <ctcp>: <c1><nick><c1>[<c2><address><c1>]<c3> <text>
CTCPReplySelf <timestamp> <pre> <c2>ctcp reply send: <ctcp> <text><c1>(<c2><target><c1>)

RAW.001 <pre> <c1>welcome to irc <c2><me>!
RAW.002 <pre> <c1>the server(<c2><server><c1>) is using <c2>
RAW.003 <pre> <c1>server(<c2><server><c1>) created on <c2><value>
RAW.250 <pre> <c1>total connections: <c2><value>
RAW.251 <pre> <c1>users<c1>(<c2><server><c1>): <c2><users> - <c1>Invisible: <c2><text> - <c1>Servers: <c2><value>
RAW.252 <pre> <c1>opers<c1>(<c2><server><c1>): <c2><value>
RAW.253 <pre> <c1>unknown connections<c1>(<c2><server><c1>): <c2><value>
RAW.254 <pre> <c1>number of channels<c1>(<c2><server><c1>): <c2><value>
RAW.255 <pre> <c1>local clients, servers<c1>(<c2><server><c1>): <c2><users><c1>, <c2><value>
RAW.265 <pre> <c1>local users, max<c1>(<c2><server><c1>): <c2><users><c1>, <c2><value>
RAW.266 <pre> <c1>global users, max<c1>(<c2><server><c1>): <c2><users><c1>, <c2><value>
RAW.314 <pre> <c1>whowas<c1>(<c2><server><c1>): <c2><nick> <c1>was <c2><text>
RAW.369 <pre> <c1>end of whowas for <c2><nick>
RAW.375 <pre> <c1>motd begin<c1>(<c2><server><c1>)
RAW.267 <pre> <c1>service agents<c1>(<c2><server><c1>): <c2><value>
RAW.376 <pre> <c1>motd end<c1>(<c2><server><c1>)
RAW.391 <pre> <c1>time/date<c1>(<c2><server><c1>): <c2><text>
RAW.330 <pre> <c1>etc.<c1>(<c2><chan><c1>): <c2><text>
RAW.311 !script triplek_whois_start
RAW.307 ¦ registered nick: yes 
RAW.308 ¦ services admin: yes 
RAW.309 ¦ csop: yes 
RAW.310 ¦ helpop: yes 
RAW.313 ¦ oper: yes 
RAW.312 ¦ server: <c2><wserver><c1>(<c2><serverinfo><c1>)
RAW.378 ¦ host: <text>
RAW.301 ¦ away: <text>
RAW.317 !script triplek_raw_317
RAW.318 <c1>`—————end of whois
RAW.319 !script triplek_raw_319
RAW.332 <pre> <c2>topic is<c1>: <c2><text>
RAW.333 <pre> <c2>topic<c1>(<c2><chan><c1>): set by <c2><nick> <c1>on <c2><text>
RAW.324 <pre> <c2>modes<c1>(<c2><chan><c1>): <c2><text>
RAW.329 !script %:echo %::pre  $+ %::c1 $+ created on: $+  $+ %::c2 $+ $asctime(%::text)
RAW.401 <pre> <c2>invalid nick<c1>: <c2><nick>
RAW.403 <pre> <c2>invalid channel<c1>: <c2><chan>
RAW.404 <pre> <c2>send error<c1>: to <c2><chan>
RAW.421 <pre> <c2>invalid command<c1>: <c2><value>
RAW.433 <pre> <c2>used nick<c1>: <c2><nick>
RAW.471 <pre> <c2>join error<c1>(<c2><chan><c1>): <c1>haha capacity reached<c1>(<c2>+l<c1>)
RAW.473 <pre> <c2>join error<c1>(<c2><chan><c1>): <c1>haha you're not invited<c1>(<c2>+i<c1>)
RAW.474 <pre> <c2>join error<c1>(<c2><chan><c1>): <c1>haha you're banned<c1>(<c2>+b<c1>)
RAW.475 <pre> <c2>join error<c1>(<c2><chan><c1>): <c1>haha you're locked out<c1>(<c2>+k<c1>)
RAW.482 <pre> <c2>invalid command<c1>(<c2><chan><c1>): <c1>you're not an operator

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 0,64,128 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,124,255 255,0,255 128,128,128 210,210,210

FontDefault verdana,10
FontChan verdana,10
FontQuery verdana,10

ClineOp 02
ClineHop 12
ClineVoice 14
ClineRegular 01
ClineOwner 02
ClineEnemy 04
ClineFriend 12
ClineMe 12

ClineCharOwner .
ClineCharOp @
ClineCharHop %
ClineCharVoice +
ClineCharRegular

scheme1 red
scheme2 green
scheme3 gold
scheme4 orange
scheme5 purple
scheme6 black
scheme7 brown
scheme8 gray
scheme9 pink
scheme10 cyan
scheme11 moon
scheme12 rage
scheme13 techno
scheme14 mine
scheme15 blaze
scheme16 oil
scheme17 mono
scheme18 mud
scheme19 dust
scheme20 intense
scheme21 forest
scheme22 aquamarine
scheme23 ruby
scheme24 emerald
scheme25 golddust
scheme26 ash
scheme27 quartz
scheme28 amber
scheme29 silver
scheme30 ruby+
scheme31 seastone

[scheme1]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 127,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,0,0 255,0,255 128,128,128 210,210,210

[scheme2]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 0,106,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,180,0 255,0,255 128,128,128 210,210,210

[scheme3]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 128,128,64 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 176,176,0 255,0,255 128,128,128 210,210,210

[scheme4]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 159,80,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,128,0 255,0,255 128,128,128 210,210,210

[scheme5]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 91,0,183 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 95,100,160 255,0,255 128,128,128 210,210,210

[scheme6]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 0,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,0 255,0,255 128,128,128 210,210,210

[scheme7]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 85,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 145,72,72 255,0,255 128,128,128 210,210,210

[scheme8]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 83,83,83 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 159,159,159 255,0,255 128,128,128 210,210,210

[scheme9]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 204,0,204 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,0,255 255,0,255 128,128,128 210,210,210

[scheme10]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,255 0,0,0 56,114,114 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,147,147 255,0,255 128,128,128 210,210,210

[scheme11]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 0,75,151 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,124,255 255,0,255 128,128,128 210,210,210

[scheme12]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 145,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,0,0 255,0,255 128,128,128 210,210,210

[scheme13]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 0,106,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,180,0 255,0,255 128,128,128 210,210,210

[scheme14]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 128,128,64 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 176,176,0 255,0,255 128,128,128 210,210,210

[scheme15]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 159,80,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,128,0 255,0,255 128,128,128 210,210,210

[scheme16]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 103,0,206 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 95,100,160 255,0,255 128,128,128 210,210,210

[scheme17]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 255,255,255 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,255,255 255,0,255 128,128,128 210,210,210

[scheme18]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 100,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 145,72,72 255,0,255 128,128,128 210,210,210

[scheme19]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 83,83,83 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 159,159,159 255,0,255 128,128,128 210,210,210

[scheme20]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 204,0,204 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,0,255 255,0,255 128,128,128 210,210,210

[scheme21]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 0,0,0 255,255,255 56,114,114 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,147,147 255,0,255 128,128,128 210,210,210

[scheme22]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 240,246,255 0,0,0 0,64,128 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,124,255 255,0,255 128,128,128 210,210,210

[scheme23]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,244,244 0,0,0 127,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,0,0 255,0,255 128,128,128 210,210,210

[scheme24]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 238,255,238 0,0,0 0,106,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,180,0 255,0,255 128,128,128 210,210,210

[scheme25]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,255,236 0,0,0 128,128,64 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 176,176,0 255,0,255 128,128,128 210,210,210

[scheme26]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,241,235 0,0,0 159,80,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,128,0 255,0,255 128,128,128 210,210,210

[scheme27]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 241,241,248 0,0,0 91,0,183 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 95,100,160 255,0,255 128,128,128 210,210,210

[scheme28]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 247,238,238 0,0,0 85,0,0 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 145,72,72 255,0,255 128,128,128 210,210,210

[scheme29]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 245,245,245 0,0,0 83,83,83 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 159,159,159 255,0,255 128,128,128 210,210,210

[scheme30]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 255,243,255 0,0,0 204,0,204 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 255,0,255 255,0,255 128,128,128 210,210,210

[scheme31]

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,1,15,6,0
BaseColors 2,12,1,0
RGBColors 240,255,255 0,0,0 56,114,114 0,144,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,147,147 255,0,255 128,128,128 210,210,210