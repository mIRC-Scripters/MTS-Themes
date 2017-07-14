[mts]
; Theme information
Name bl0x
MTSVersion 1.1
Version 1.00
Author Lezard
EMail Lezard@teamscript.net
Description Mon thème perso en MTS
Timestamp ON
TimestampFormat 2(0hh:nn2)
BaseColors 00,01,02,03
RGBColors 255,255,255 0,0,0 0,175,255 0,125,185 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 0,175,255
 
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,00,01,00,00
FontDefault Verdana,9
FontChan Verdana,9
FontQuery Verdana,9
CLineOwner 03
 
CLineOp 03
CLineHOp 02
CLineVoice 02
CLineRegular 00
CLineMe 02
CLineIrcOp 02
Prefix <c0>...<c3>
ParenText <c3>(<c1><text><c3>)
TextChan <c3><cmode><c1><nick> <c3>: <text>
TextChanSelf <c3><cmode><c1><me> <c3>: <text>
ActionChan <pre> <c3><cmode><c1><nick> <text>
ActionChanSelf <pre> <c3><cmode><c1><me> <text>
NoticeChan <pre><c3> Notice on<c1> <target><c3> : <text>
Notice <pre><c3> Notice from<c1> <nick><c3> : <text>
NoticeSelf <pre><c3> Notice to<c1> <target><c3> : <text>
NoticeSelfChan <pre><c3> Notice to<c1> <target><c3> : <text>
TextQuery <c1><nick> <c3>: <text>
TextQuerySelf <c1><me> <c3>: <text>
ActionQuery <pre> <c1><nick> <text>
ActionQuerySelf <c1><me> <text>
TextMsg <pre><c3> Message from<c1> <nick><c3> : <text>
TextMsgSelf <pre><c3> Message to<c1> <target><c3> : <text>
 
Mode <pre> <c3>Mode :<c1> <nick><c3> sets <c1><modes>
ModeUser <pre> <c3>Mode : You set<c1> <modes>
Join <pre> <c3>Join :<c1> <nick> <c3>(<c1><address><c3>)
JoinSelf <pre> <c3>You joined<c1> <chan>
Part <pre> <c3>Part :<c1> <nick> <c3>(<c1><address><c3>) <parentext>
Kick <pre> <c3>Kick :<c1> <nick> <c3>(<c1><address><c3>) kicked<c1> <knick><c3> from<c1> <chan> <parentext>
KickSelf <pre> <c3>Kick :<c1> <nick> <c3>(<c1><address><c3>) kicked you from<c1> <chan> <parentext>
 
Quit <pre> <c3>Quit :<c1> <nick><c3>(<c1><address><c3>) has quit IRC <parentext>
Topic <pre> <c3>Topic :<c1> <nick><c3> changed topic <parentext>
Nick <pre><c3> Nick :<c1> <nick><c3> is now known as<c1> <newnick>
NickSelf <pre><c3> You are now known as<c1> <newnick>
Invite <pre><c3> Invite :<c1> <nick> <c3>(<c1><address><c3>) invited you to join<c1> <chan>
ServerError <pre><c3> Error :<c1> <text>
Rejoin <pre><c3> Attempting to rejoin<c1> <chan>
Ctcp <pre><c3> CTCP from<c1> <nick><c3> :<c1> <ctcp> <text>
CtcpChan <pre><c3> CTCP from<c1> <nick><c3> :<c1> <ctcp> <text>
CtcpReply <pre><c3> CTCP reply from<c1> <nick><c3> :<c1> <ctcp> <text>
CtcpReplySelf <pre><c3> CTCP reply from<c1> <nick><chan><c3> :<c1> <ctcp> <text>
CtcpSelf <pre><c3> CTCP to<c1> <nick><c3> :<c1> <ctcp> <text>
CtcpChanSelf <pre><c3> CTCP to<c1> <chan><c3> :<c1> <ctcp> <text>
Notify <pre><c3> Notify :<c1> <nick><c3> is online right now
UNotify <pre><c3> Notify :<c1> <nick><c3> isn't online anymore
Wallop <pre><c3> Wallop :<c1> <text>
NoticeServer <pre><c3> Server <nick> :<c1> <text>
 
DNS <pre><c3> DNS : Looking up <nick><address>
DNSError <pre><c3> DNS : DNS error
DNSResolve <pre><c3> DNS : Resolved <nick> (<address>) to <iaddress>
 
Echo <c0><text>
EchoTarget <c0><text>
Error <pre><c3> Error :<c1> <text>
Load <pre><c1> bl0x<c3> by Lezar\ ... <c1>loaded
Unload <pre><c1> bl0x<c3> by Lezar\ ... <c1>unloaded
 
RAW.311 !Script blx.whoisstart
 
Script bl0x.mrc
RAW.318 !Script blx.whoisend
 
RAW.314 !Script blx.whowasstart
RAW.369 !Script blx.whowasend
 
RAW.312 <pre><c3> Server :<c1> <wserver><c3> (<c1><serverinfo><c3>)
RAW.319 <pre><c3> Channels :<c1> <chan>
RAW.301 <pre><c3> Away :<c1> <text>
RAW.307 <pre><c3> Registered nick :<c1> <isregd>
RAW.313 <pre><c3> IRCop
RAW.317 <pre><c3> Idle :<c1> <idletime><c3>, signontime <c1><signontime>
RAW.Other <pre><c3> Raw : <numeric> <text>
 
RAW.001 <pre><c3> Welcome to IRC !
RAW.003 <pre> Server created on :<c1> <value>
RAW.005 <pre> Protocols supproted by this server :<c1> <text>
RAW.221 <pre> Current user mode :<c1> <modes>
RAW.250 <pre> There are<c1> <value<c3> total connections
RAW.251 <pre> There are <users> users (<text> invisibles) on <value> servers
RAW.252 <pre> There are <value> operators online
RAW.253 <pre> There are <value> unknown connections
RAW.254 <pre> <value> channels formed
RAW.265 <pre> There are <users> total users (<value> maximum)
RAW.324 <pre> Channel modes :<c1> <modes>
RAW.332 <pre> Topic is :<c1> <text>
RAW.333 <pre> Topic was set by<c1> <nick><c3> at<c1> <text>
RAW.341 <pre> Invite :<c1> <nick><c3> was invited to<c1> <chan>
RAW.352 !Script blx.who
RAW.315 <pre> Who end
 
RAW.353 <pre> Names on<c1> <chan><c3> :<c1> <text>
RAW.366 <pre> End of names list
RAW.372 <pre> MOTD :<c1> <text>
RAW.375 <pre> Beginning MOTD
RAW.376 <pre> Ending MOTD
RAW.391 <pre> Server's time :<c1> <text>
RAW.401 <pre> Error :<c1> No such nickname : <nick>
RAW.403 <pre> Error :<c1> No such channel : <chan>
RAW.404 <pre> Error :<c1> Unable to send message : <chan>
RAW.421 <pre> Error :<c1> Invalid command : <value>
RAW.432 <pre> Error :<c1> Invalid nickname : <nick>
RAW.433 <pre> Error :<c1> Nickname already in use : <nick>
RAW.471 <pre> Error :<c1> Channel is full : <chan>
RAW.473 <pre> Error :<c1> Invite only channel : <chan>
RAW.474 <pre> Error :<c1> You are banned from this channel :<chan>
RAW.475 <pre> Error :<c1> Password required : <chan>
RAW.482 <pre> Error :<c1> You are not operator on <chan>
RAW.329 !Script
 
Scheme1 White bg
Scheme2 Red - Black bg
Scheme3 Red - White bg
Scheme4 Green
 
[Scheme1]
BaseColors 01,00,02,03
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
CLineRegular 01
CLineMe 01
Timestamp ON
TimestampFormat 2(1hh:nn2)
 
[Scheme2]
Timestamp ON
TimestampFormat 2(0hh:nn2)
BaseColors 00,01,02,03
RGBColors 255,255,255 0,0,0 215,0,0 0,125,185 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 0,175,255
 
[Scheme3]
BaseColors 01,00,02,03
RGBColors 255,255,255 0,0,0 215,0,0 0,125,185 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 0,175,255
 
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
Timestamp ON
TimestampFormat 2(1hh:nn2)
 
CLineRegular 01
 
[Scheme4]
BaseColors 00,01,02,03
RGBColors 255,255,255 0,0,0 0,235,0 0,205,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 0,175,255
Timestamp ON
TimestampFormat 2(0hh:nn2)
 
