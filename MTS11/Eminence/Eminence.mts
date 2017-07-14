[mts]
;Theme information
Name Eminence
MTSVersion 1.1
Version 1.0
Author kriven
EMail kriven@mail.com
Website http://kriven.cjb.net
Description evolution!1.o default theme
 
Timestamp ON
TimestampFormat 0[HH:nn:ss]
Prefix 0›››
ParenText <text>
TextChan <lt><cmode><nick><gt> <text>
TextChanSelf <lt><cmode><nick><gt> <text>
ActionChan <cmode><nick> <text>
ActionChanSelf <cmode><me> <text>
NoticeChan <target> <text>
Notice <nick> <text>
NoticeSelf <lt><nick><gt> <text>
NoticeSelfChan <target> <text>
TextQuery <nick> <text>
TextQuerySelf <me> <text>
ActionQuery <nick> <text>
ActionQuerySelf <me> <text>
TextMsg <nick> <text>
TextMsgSelf <nick> <text>
Mode <pre> <nick> set <modes>
ModeUser <pre> You have set <modes>
Join <pre> <nick> 0[<address>] has joined <chan>
JoinSelf <pre> Now talking in <chan>
Part <pre> <nick> 0[<address>] has left <chan> <parentext>
Kick <pre> <knick> 0[<kaddress>] was kicked by <nick> : <parentext>
KickSelf <pre> You were kicked by <nick> 0[<address>] from <chan> : <parentext>
Quit <pre> <nick> 0[<address>] has quit : <parentext>
Topic <pre> <nick> changed topic to "<text>"
Nick <pre> <nick> 0[<address>] is now known as <newnick>
NickSelf <pre> You're now known as <newnick>
Invite <pre> <nick> is inviting you to join <chan>
ServerError <pre> 0[Error!] <text>
Rejoin <pre> Rejoining <chan>...
Ctcp <pre> 0[<nick>] : <ctcp> : <text>
CtcpChan <pre> 0[<nick>|<chan>] <ctcp> : <text>
CtcpSelf <pre> 0[<nick>] : <ctcp> : <text>
CtcpChanSelf <pre> 0[<chan>] <ctcp> : <text>
CtcpReply <pre> 0[<nick>|<chan>] <ctcp> reply from <text>
CtcpReplySelf <pre> 0[<nick>] <ctcp> reply from <text>
Notify <pre> Notify: <nick> <parentext> is on IRC
UNotify <pre> Notify: <nick> <parentext> has left IRC
Wallop <pre> 0[Wallop] <text>
NoticeServer <pre> 0[<nick>] <text>
DNS <pre> Looking up <nick>[<address>]...
DNSError <pre> Unable to resolve <address>
DNSResolve <pre> Resolved <address> to <raddress>
Echo <text>
EchoTarget <target> <text>
Error <pre> 0[Error] <text>
Load <pre> Loaded MTS Theme: Eminence
Unload <pre> Unloading MTS Theme: Eminence
 
Script Eminence.mrc
RAW.311 !Script E.Whois
RAW.314 !Script E.whowas
RAW.319 <pre> 0Channels: <chan>
RAW.312 <pre> 0Server: <wserver> 0[<serverinfo>]
raw.301 <pre> 0Away: True 0[<text>]
RAW.307 !Script E.whois1
RAW.313 <pre> 0IRCop: <isoper> 0[<operline>]
RAW.317 <pre> 0Signed on: <signontime>
RAW.318 !Script E.whois2
RAW.369 !Script E.whowas2
Whowas <pre> 0Whowas: <nick>0[<address>|<realname>]
RAW.Other <pre> <text>
RAW.001 <pre> <text>
RAW.002 <pre> 0Host: <server> running version <value>
RAW.003 <pre> 0Server created on: <value>
RAW.005 <pre> 0Protocols supported by this server: <text>
RAW.221 <pre> 0Current <nick> modes: <modes>
RAW.250 <pre> 0Total connection(s): <value>
RAW.251 !Script E.servt
RAW.252 <pre> 0Operators online: <value>
RAW.253 <pre> 0Unknown connections: <value>
RAW.254 <pre> 0Channels formed: <value>
RAW.255 <pre> 0Local clients: <users> 0on <value> 0server(s)
RAW.265 <pre> 0Local users: <users> 0[max: <value>]
RAW.266 !Script E.servd
RAW.302 <pre> 0Userhost: <nick> 0[<address>]
RAW.315 <pre> 0End of /Who list for: <chan>
RAW.324 <pre> 0Current channel modes: <modes>
RAW.332 !Script E.topic
RAW.333 !Script E.topic2
RAW.341 <pre> <nick> 0has been invited to: <chan>
RAW.352 <pre> <cmode><nick> 0[<address>] <realname>
RAW.353 <pre> 0Listing <chan>0: <text>
RAW.366 <pre> 0End of /Names list for: <chan>
RAW.372 <pre> <text>
RAW.375 <pre> MOTD 0[Message Of The Day]:
RAW.376 <pre> End of /MOTD
RAW.391 <pre> Time/Date: <value>
RAW.401 <pre> No such nickname 0[<nick>]
RAW.403 <pre> No such channel 0[<chan>]
RAW.404 <pre> Unable to send message to <chan>
RAW.421 <pre> Unknown command 0[<value>]
RAW.432 <pre> Invalid nickname 0[<nick>]
RAW.433 <pre> <nick> is already in use!
RAW.471 <pre> Can't join <chan> 0[full | +l]
RAW.473 <pre> Can't join <chan> 0[invite only | +i]
RAW.474 <pre> Can't join <chan> 0[banned | +b]!
RAW.475 pre> Can't join <chan> 0[key | +k]
RAW.482 <pre> You're not opped on <chan>
RAW.Other <text>
 
BaseColors 02,12,09,08
RGBColors 255,255,255 0,0,0 98,142,191 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 249,215,79 170,255,85 0,147,147 0,255,255 193,210,230 255,0,255 127,127,127 210,210,210
Colors 02,00,15,08,00,12,08,12,09,09,12,00,12,09,00,00,12,12,00,08,00,02,00,02,00,12
 
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
CLineIrcOp 07
CLineMe 12
CLineFriend 09
 
Scheme1 Tahoma
 
[Scheme1]
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
 
