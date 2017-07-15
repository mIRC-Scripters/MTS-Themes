; weeeeeeeeee
[mts]
Name cIRC
Author drevele
EMail jeffjohnson@zoominternet.net
Website http://www.jeffsworld.net/
Description a intresting theme
Version 1.0
MTSVersion 1.1
Script circ.mrc
 
 
Scheme1 Dark Timestamp
Scheme2 Lite
Scheme3 Lite Timestamp
 
BaseColors 09,03,01,01
Colors 01,06,04,05,02,03,03,03,03,03,03,01,05,07,06,00,03,02,03,05,00,01,03,01,00,15
 
FontDefault Lucida console,11
FontQuery Lucida console,11
FontChan Lucida console,11
 
CLineCharOwner 00#
 
Prefix <c1>[<c2>cIRC<c1>]
ParenText <c2><text>
 
TextChan <c1>[<c2><cmod><nick><c1>]<c2>$ <text>
TextChanSelf <c1>[<c2><cmod><nick><c1>]<c2># <text>
ActionChan <c1>[<c2><cmod><nick><c1>]<c2> * <text>
ActionChanSelf <c1>[<c2><cmod><nick><c1>]<c2> * <text>
NoticeChan <c1>[<c2><cmod><nick>/<chan><c1>]<c2> <text>
Notice <c1>[<c2><nick><c1>]<c2> <text>
NoticeSelf <c1>[<c2><me><c1>]<c2># /notice <nick> <text>
NoticeSelfChan <c1>[<c2><cmod><me><c1>]<c2># notice <chan> <text>
TextQuery <c1>[<c2><nick><c1>]<c2>$ <text>
TextQuerySelf <c1>[<c2><me><c1>]<c2># <text>
ActionQuery <c1>[<c2><nick><c1>]<c2> * <text>
ActionQuerySelf <c1>[<c2><me><c1>]<c2> * <text>
TextMsg <c1>[<c2><nick><c1>]<c2>$ <text>
TextMsgSelf <c1>[<c2><me><c1>]<c2># <text>
 
Mode <c1>[<c2><cmod><nick><c1>]<c2># /mode <chan> <modes>
ModeUser <c1>[<c2><me><c1>]<c2># /usermode <chan> <modes>
Join <c1>[<c2><nick><c1>]<c2>$ /join <chan>
JoinSelf <c1>[<c2><me><c1>]<c2># /join <chan>
Part <c1>[<c2><cmod><nick><c1>]<c2>$ /leave <chan> <text>
Kick <c1>[<c2><cmod><nick><c1>]<c2>$ /kick <chan> <knick> <text>
KickSelf <c1>[<c2><cmod><nick><c1>]<c2>$ /kick <me> <text>
Quit <c1>[<c2><nick><c1>]<c2>$ quit <text>
Topic <c1>[<c2><cmod><nick><c1>]<c2>$ /topic <chan> <text>
Nick <c1>[<c2><cmod><nick><c1>]<c2>$ /su <newnick>
NickSelf <c1>[<c2><cmod><me><c1>]<c2># /su <me> <newnick>
Invite <c1>[<c2><cmod><nick><c1>]<c2># /invite <me> <chan>
ServerError <c1>[<c2><server><c1>]<c2>$ /error <text>
Rejoin <c1>[<c2><cmod><me><c1>]<c2># /rejoin <chan>
Ctcp <c1>[<c2><nick><c1>]<c2>$ /ctcp <me> <ctcp> <text>
CtcpChan <c1>[<c2><cmod><nick><c1>]<c2>$ /ctcp <chan> <ctcp> <text>
CtcpSelf <c1>[<c2><cmod><me><c1>]<c2># /ctcp <nick> <ctcp> <text>
CtcpChanSelf <c1>[<c2><cmod><me><c1>]<c2># /ctcp <chan> <ctcp> <text>
CtcpReply <c1>[<c2><cmod><nick><c1>]<c2>$ /ctcpreply <me> <ctcp> <text>
CtcpReplySelf <c1>[<c2><cmod><me><c1>]<c2># /ctcpreply <nick><chan> <ctcp> <text>
Notify <c1>[<c2><nick><c1>]<c2>$ signon
UNotify <c1>[<c2><nick><c1>]<c2>$ sign off
Wallop <c1>[<c2><nick><c1>]<c2>$ /operwall <text>
NoticeServer <c1>[<c2><cmod><nick><c1>]<c2>$ <text>
 
DNS <c1>[<c2><me><c1>]<c2># /dns <address>
DNSError <c1>[<c2>dns<c1>]<c2>$ fail <address>
DNSResolve <c1>[<c2>dns<c1>]<c2>$ resolve <naddress>
Echo <text>
EchoTarget <text>
Error <c1>[<c2>root<c1>]<c2># error <text>
Load <c1>[<c2>root<c1>]<c2># load cIRC
Unload <c1>[<c2>root<c1>]<c2># unload cIRC
 
RAW.311 !Script c_startwhois
RAW.314 !Script c_startwhowas
RAW.319 <c1>/<c2>chans: <chan>
RAW.312 <c1>/<c2>server: <wserver>
RAW.301 <c1>/<c2>away: <text>
RAW.307 <c1>/<c2>Is a registerd nick
RAW.313 <c1>/<c2>Is a IRCop
RAW.317 !Script c_idsi
RAW.318 !Script c_endwhois
RAW.369 !Script c_endwhowas
 
RAW.Other <text>
RAW.001 <c1>[<c2><server><c1>]<c2>$ welcome <text>
RAW.002 <c1>[<c2><server><c1>]<c2>$ version <value>
RAW.003 <c1>[<c2><server><c1>]<c2>$ created <value>
RAW.005 <c1>[<c2><server><c1>]<c2>$ suported protocols <text>
RAW.221 <c1>[<c2><nick><c1>]<c2>$ modes <nick> <modes>
RAW.250 <c1>[<c2><server><c1>]<c2>$ total connections <value>
RAW.251 !Script c_251
RAW.252 <c1>/<c2>opers: <value>
RAW.253 <c1>/<c2>other connections: <value>
RAW.254 <c1>/<c2>channles: <value>
RAW.255 !Script c_255
RAW.265 !Script c_256
RAW.266 !Script c_266
RAW.302 <c1>/<c2>host: <nick>!<address>
RAW.315 <c1>[<c2><me><c1>]<c2># end who
RAW.324 s_cmod
RAW.332 <c1>/<c2>topic: <text>
RAW.333 <c1>/<c2>set by <nick>
RAW.341 <c1>[<c2><nick><c1>]$ invited <chan>
RAW.352 <nick> <address> <cmode> <away> <chan> <wserver> <realname> <value> <text> <isoper>
RAW.353 <c1>/<c2>nicks: <text>
RAW.366 <c1>/<c2>end of users
RAW.372 <c1>[<c2>motd<c1>]<c2> <text>
RAW.375 <c1>[<c2><server><c1]<c2>$ motd start
RAW.376 <c1>[<c2><server><c1]<c2>$ motd end
RAW.391 <c1>[<c2><server><c1]<c2>$ date <text>
 
RAW.401 <c1>/<c2>no such nick: <nick>
RAW.403 <c1>/<c2>no such channel: <chan>
RAW.404 <c1>/<c2>cannot send to: <chan>
RAW.421 <c1>/<c2>no such comand: <value>
RAW.432 <c1>/<c2>invalid nick: <nick>
RAW.433 <c1>/<c2>nick allready used: <nick>
RAW.471 <c1>/<c2>channel <chan> is full
RAW.473 <c1>/<c2>channle <chan> is invite only!
RAW.474 <c1>/<c2>you are banned from <chan>
RAW.475 <c1>/<c2>channle <chan> needs a key
RAW.482 <c1>/<c2>Your not opped in <chan>
 
[Scheme1]
Timestamp ON
TimestampFormat <c1>[<c2>hh:nntt<c1>]
FontDefault Lucida console,11
FontQuery Lucida console,11
FontChan Lucida console,11
 
[Scheme2]
BaseColors 09,03,01,01
Colors 00,06,04,05,02,03,03,03,03,03,03,00,05,07,06,01,03,02,03,05,01,00,01,00,01,15
 
 
[Scheme3]
Colors 00,06,04,05,02,03,03,03,03,03,03,00,05,07,06,01,03,02,03,05,01,00,01,00,01,15

TimestampFormat <c1>[<c2>hh:nntt<c1>]
FontDefault Lucida console,11
FontQuery Lucida console,11
FontChan Lucida console,11
 
