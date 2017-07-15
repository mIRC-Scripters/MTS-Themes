;Mts theme information
[mts]
; Theme information
Name EcP
Author Exudate
Email the_reflecting_god@linuxmail.org
Website N/A
Description Default Edrive theme..Its a little blue with black..I Love it and hope you like it too!!!
Version v1.00
MTSVersion 1.1
;
; Basic text appearance
Prefix <c1>[<c4>E!<c1>]
Timestamp 12[13h:nntt12]
ParenText (<c4><text>)
; Text IRC events
TextChan <c3><lt><cmode><nick><c3><gt> <text>
TextChanSelf <c3><lt><cmode><me><c3><gt> <text>
ActionChan * <cmode><nick> <text>
ActionChanSelf * <cmode><me> <text>
NoticeChan <c3><lt>- <nick><c3>-<target><c3>: <text>
Notice <c3><lt>- <nick><c3>: <text>
NoticeSelf <c3>-<gt> <nick><c3>: <text>
NoticeSelfChan <c3>-<gt> <target><c3>: <text>
TextQuery <c3><lt><nick><c3><gt> <text>
TextQuerySelf <c3><lt><me><c3><gt> <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <me> <text>
TextMsg <c3><lt> MSG<c3>-<nick><c3>: <text>
TextMsgSelf <c3><gt> MSG<c3>-<nick><c3>: <text>
; Basic IRC events
Mode <pre> <c3>[<c4><nick><c3>: <modes><c3>]
ModeUser <pre> <c3>[<c4>Usermode<c3>: <modes><c3>]
Join <pre> <c1>[<c4>»<c1>] <c1>[<c4>Join <nick><c1> ] (<c4><address>)
JoinSelf <pre> <c1>[<c4>»<c1>] <c4>Now Talking In<c4>:<c4> <chan> 
Part <pre> <c1>[<c4>«<c1>] <c1>[<c4>Part <nick><c1> ] (<c4><address>)
Kick <pre>  <c2>[<c4>««<c2>] <c2>[<c4><knick> has been kicked by <nick><c2> ] <c3>(<c4><text><c3>)
KickSelf <pre>  <c2>[<c4>««<c2>] <c2>[<c4>You were just kicked from <chan> by <nick><c2> ] <c3>(<c4><text><c3>)
Quit <pre> <c1>[<c4>v<c1>] <c1>[<c4>Quit <nick><c1> ] (<c4><address>) <parentext>
Topic <pre> <c3>[<c4><nick> changed topic<c3>] <text>
Nick <pre> <c3>[Nick<c3>: <nick> is now known as <newnick><c3>]
Nick <pre> <c3>[Nick<c3>: <nick> is now known as <newnick><c3>]
NickSelf <pre> <c1>[<c4>v<c1>]   Your nick is now known as <newnick> ...
Invite <pre> <c3><lt><c4>!<c3><gt> <nick> Invites you to join <chan>
ServerError
Rejoin <pre> <c1>[<c4>»«<c1>] <c1>[<c4> Attemting to rejoin please wait....<c1> ]
Ctcp <pre> <c3>[<c4><nick><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpChan <pre> <c3>[<c4><nick><c3>:<c4><chan><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpSelf <pre> <c3>--> [<c4><nick><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpChanSelf <pre> <c3>--> [<c4><nick><c3>:<c4><chan><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpReply
CtcpReplySelf
Notify <pre> <c1>[<c4>Contact list<c1>] <c1>[<c4><nick> has Signed On...<c1> ]
UNotify <pre> <c1>[<c4>Contact list<c1>] <c1>[<c4><nick> has Signed Off...<c1> ]
Wallop
NoticeServer <c3><lt>- <nick><c3>: <text>
; Non-IRC events
DNS <pre> Looking up <address>....
DNSError <pre> <c1>[<c4>DNS<c1>] DNS Error, unable to resolve...
DNSResolve <pre> <c1>[<c4>DNS<c1>:<c4> <iaddress><c3>] <naddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <c3><c4>Error!!<c3>: <text>
Load <pre>  <c1>[<c4>Initializing<c1>] <c1>[<c4> Loaded EcP mts theme...<c1> ]
Unload <pre> <c1>[<c4>Initializing<c1>] <c1>[<c4> Unloaded EcP mts theme...<c1> ]
; Whois and Whowas raws and events
RAW.311 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Nickname: <nick> Address: <address> Realname: <realname><c1> ] 
RAW.314 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Nickname: <nick> Address: <address> Realname: <realname><c1> ] 
RAW.319 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Channels: <chan><c1> ]
RAW.312 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Server: <wserver> <serverinfo><c1> ]
RAW.301 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Away: <text><c1> ]
RAW.307 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Registered Nickname: <isregd><c1> ] 
RAW.313 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Ircop: <operline><c1> ]
RAW.317 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> Idle time: <operline> Signed on: <signontime> <c1> ]
RAW.318 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> whois has been displayed above...<c1> ] <c1>[<c4> Whois for <nick> ended... <c1> ]
RAW.369 <pre> <c1>[<c4>Whois<c1>] <c1>[<c4> who has been also displayed above...<c1> ] 
Whois
Whowas
; Other raws
RAW.Other
RAW.001 <pre> <text>
RAW.002 <pre> <c3><c4>Server<c3>: <server> <c3><c4>Version<c3>: <value>
RAW.003 <pre> <c3><c4>Created<c3>: <value>
RAW.005
RAW.221 <pre> <c3>[<c4>Usermodes<c3>: <modes><c3>]
RAW.250 <pre> <c3><c4>Connections<c3>: <value>
RAW.251 <pre> <c3><c4>Users<c3>: <users> <c3><c4>Invisible<c3>: <text> <c3><c4>Servers<c3>: <value>
RAW.252 <pre> <c3><c4>Operators<c3>: <value>
RAW.253 <pre> <c3><c4>Unknown Connections<c3>: <value>
RAW.254 <pre> <c3><c4>Channels<c3>: <value>
RAW.255 <pre> <c3><c4>Local Clients<c3>: <users> <c3>-<c4>Servers<c3>: <value>
RAW.265 <pre> <c3><c4>Local Users<c3>: <users> <pre> <c3>-<c4>Max<c3>: <value>
RAW.266 <pre> <c3><c4>Global Users<c3>: <users> <pre> <c3>-<c4>Max<c3>: <value>
RAW.302 <pre> <c3><c4>Localhost<c3>: <address>
RAW.315 <pre> <c3><c4>End of /who<c3>: <value>
RAW.324 <pre> <c3>[<c4><chan><c3>: <modes><c3>]
RAW.332 <pre> <c3>[<c4>Topic<c3>:<c4> <chan><c3>] <text>
RAW.333 <pre> <c3><c4>Set By<c3>:<c4> <nick> <c3>-<c4> <text>
RAW.341
RAW.352
RAW.353
RAW.366
RAW.372 <pre> <c3><c4> <text>
RAW.375 <pre> <c3><c4> MOTD
RAW.376 <pre> <c3><c4> /MOTD
RAW.391
; Error raws
RAW.401 <pre> <c1>[<c4>Bad Command<c1>] <c1>[<c4>No such nick : <nick> <c1> ]
RAW.403 <pre> <c1>[<c4>Bad Command<c1>] <c1>[<c4>No such channel : <chan> <c1> ]
RAW.404 <pre> <c1>[<c4>Bad Command<c1>] <c1>[<c4>Unable to sent a message : <chan> <c1> ]
RAW.421 <pre> <c1>[<c4>Bad Command<c1>] <c1>[<c4>Wrong Key : <value> <c1> ]
RAW.432 <pre> <c1>[<c4>Bad Command<c1>] <c1>[<c4>Wrong nick : <nick> <c1> ]
RAW.433 <pre> <c1>[<c4>NickAlert<c1>] <c1>[<c4>The nickname you specified is already in use please try a different nick thank you! : <nick> <c1> ]
RAW.471 <pre> <c1>[<c4>ChanAlert<c1>] <c1>[<c4>Sorry but the channel has reached its limit of visitors specified by one of the operator : <chan> <c1> ]
RAW.473 <pre> <c1>[<c4>ChanAlert<c1>] <c1>[<c4>Sorry but you can join the channel right now cause invite only has been on (+i) : <chan> <c1> ]
RAW.474 <pre> <c1>[<c4>Ban Alert<c1>] <c1>[<c4>Sorry but you can't join <chan> cause you have been banned from it.. <c1> ]
RAW.475 <pre> <c1>[<c4>KeyAlert<c1>] <c1>[<c4>Sorry but you can't enter <chan> to enter it you must specify a key.. <c1> ]
RAW.482 <pre> <c1>[<c4>OpAlert<c1>] <c1>[<c4>Sorry but you aren't an operator on <chan> <c1> ]
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
CLineOwner 13
CLineCharOwner
BaseColors 04,07,12,13
RGBColors 255,255,255 14,23,0 0,0,128 0,144,0 0,154,184 0,139,159 0,111,162 0,177,232 0,109,174 0,255,0 0,144,144 0,255,255 0,106,131 220,255,255 0,126,149 0,154,177
Colors 01,12,05,12,12,12,04,12,07,04,07,13,00,07,13,13,04,05,12,05,13,01,13,01,13,14
CLineOp 04
CLineHOp 05
CLineVoice 12
CLineRegular 13
CLineMe 07
CLineFriend 15
CLineEnemy 14
CLineIrcOp 05

