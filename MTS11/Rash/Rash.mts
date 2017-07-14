; An orange theme :p Not exactly what I set out to do, but I liked it.
; Theme information
;
; Basic text appearance
; Text IRC events
; Basic IRC events
; Non-IRC events
; Whois and Whowas raws and events
; Other raws
; Error raws
[mts]
Name Rustic Ash
Author zipperface
EMail wedgymstr@earthlink.net
Website N/A
Description A pleasent orange theme ;p
Version v1.3
MTSVersion 1.1
Script Rash.mrc
 
Scheme1 Rustic Ash Dark
Scheme2 Fire Ash
 
BaseColors 04,05,12,13
Colors 14,12,05,12,12,12,04,12,07,04,07,13,00,07,13,13,04,05,12,05,13,14,13,14,13,14
RGBColors 255,255,255 14,23,0 0,0,128 0,144,0 235,167,0 150,106,0 160,0,160 255,186,19 255,255,0 0,255,0 0,144,144 0,255,255 208,181,124 236,229,212 128,128,128 208,208,208
 
FontDefault Verdana,9
FontQuery Verdana,9
FontChan Verdana,9
 
CLineOwner 13
CLineOP 07
CLineHOP 07
CLineVoice 12
CLineUOP 12-
CLineRegular 00
CLineMe 04
CLineFriend 15
CLineEnemy 14
CLineIrcOp 05
CLineCharOwner 04.
CLineCharOP 07@
CLineCharHOP 07%
CLineCharVoice 12+
CLineCharUOP 12-
CLineCharRegular
 
Prefix <c1>[<c4>†<c1>]
Timestamp ON
TimestampFormat 12[13h:nntt12]
ParenText (<c4><text>)
 
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
 
Mode <pre> <c3>[<c4><nick><c3>: <modes><c3>]
ModeUser <pre> <c3>[<c4>Usermode<c3>: <modes><c3>]
Join <pre> .::<c4>Join::. <nick> (<c4><address>)
JoinSelf <pre> .::<c4>Now Talking In<c4>:<c4> <chan> ::.
Part <pre> .::<c4>Part::. <nick> (<c4><address>) <parentext>
Kick <pre> .::<c4>Kick::. <nick> kicked <knick> <c3>(<text><c3>)
KickSelf <pre> .::<c4>Kick::. You were kicked from <chan> by <nick> <c3>(<text><c3>)
Quit <pre> .::<c4>Quit::. <nick> (<c4><address>) <parentext>
Topic <pre> <c3>[<c4><nick> changed topic<c3>] <text>
Nick <pre> <c3>[Nick<c3>: <nick> is now known as <newnick><c3>]
NickSelf <pre> *** Your nick is now <newnick>
Invite <pre> <c3><lt><c4>!<c3><gt> <nick> Invites you to join <chan>
Rejoin <pre> Attempting to rejoin....
Ctcp <pre> <c3>[<c4><nick><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpChan <pre> <c3>[<c4><nick><c3>:<c4><chan><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpSelf <pre> <c3>--> [<c4><nick><c3>:<c4>CTCP <ctcp><c3>] <text>
CtcpChanSelf <pre> <c3>--> [<c4><nick><c3>:<c4><chan><c3>:<c4>CTCP <ctcp><c3>] <text>
Notify <pre> [<c4><nick>] [<c4><address>] is online.
UNotify <pre> [<c4><nick>] [<c4><address>] is now offline.
NoticeServer <c3><lt>- <nick><c3>: <text>
ServerError <c3>-<c4>Server Error<c3>: <text>
Wallop <c3><lt>-<gt> *<nick>*<c3>: <text>
 
DNS <pre> Looking up <address>....
DNSError <pre> <c3>[<c4>DNS<c3>] DNS Error, unable to resolve...
DNSResolve <pre> <c3>[<c4>DNS<c3>:<c4> <iaddress><c3>] <naddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <c3>-<c4>Error<c3>: <text>
Load <pre> Loaded MTS Theme<c3>: Rustic Ash
Unload <pre> Unloading MTS Theme<c3>: Rustic Ash
 
RAW.311 !Script whos.start
RAW.314 !Script whos.start
RAW.319 <pre><c3>----<c1>|<c4> <chan>
RAW.312 <pre><c3>----<c1>|<c4> <wserver> <serverinfo>
RAW.301 <pre><c3>----<c1>|<c4> <away>
RAW.307 <pre><c3>----<c1>|<c4> <isregd>
RAW.313 <pre><c3>----<c1>|<c4> <operline>
RAW.317 !Script whos.idlesign
RAW.318 <pre><c3>----------<c1>[ /whois end
RAW.369 <pre><c3>----------<c1>[ /whowas end
 
RAW.001 <pre> <text>
RAW.002 <pre> <c3>-<c4>Server<c3>: <server> <c3>-<c4>Version<c3>: <value>
RAW.003 <pre> <c3>-<c4>Created<c3>: <value>
RAW.221 <pre> <c3>[<c4>Usermodes<c3>: <modes><c3>]
RAW.250 <pre> <c3>-<c4>Connections<c3>: <value>
RAW.251 <pre> <c3>-<c4>Users<c3>: <users> <c3>-<c4>Invisible<c3>: <text> <c3>-<c4>Servers<c3>: <value>
RAW.252 <pre> <c3>-<c4>Operators<c3>: <value>
RAW.253 <pre> <c3>-<c4>Unknown Connections<c3>: <value>
RAW.254 <pre> <c3>-<c4>Channels<c3>: <value>
RAW.255 <pre> <c3>-<c4>Local Clients<c3>: <users> <c3>-<c4>Servers<c3>: <value>
RAW.265 <pre> <c3>-<c4>Local Users<c3>: <users> <pre> <c3>-<c4>Max<c3>: <value>
RAW.266 <pre> <c3>-<c4>Global Users<c3>: <users> <pre> <c3>-<c4>Max<c3>: <value>
RAW.302 <pre> <c3>-<c4>Localhost<c3>: <address>
RAW.315 <pre> <c3>-<c4>End of /who<c3>: <value>
RAW.324 <pre> <c3>[<c4><chan><c3>: <modes><c3>]
RAW.332 <pre> <c3>[<c4>Topic<c3>:<c4> <chan><c3>] <text>
RAW.333 <pre> <c3>-<c4>Set By<c3>:<c4> <nick> <c3>-<c4> <text>
RAW.372 <pre> <c3>--<c4> <text>
RAW.375 <pre> <c3>-- /*
RAW.376 <pre> <c3>-- */
 
RAW.401 <pre> <c3>-<c4>No such nick<c3>: <nick>
RAW.403 <pre> <c3>-<c4>No such channel<c3>: <chan>
RAW.404 <pre> <c3>-<c4>Unable to send message<c3>: <chan>
RAW.421 <pre> <c3>-<c4>Invalid command<c3>: <value>
RAW.432 <pre> <c3>-<c4>Invalid nick<c3>: <nick>
RAW.433 <pre> <c3>-<c4>Nick is in use<c3>: <nick>
RAW.471 <pre> <c3>-<c4>Channel is full (+l)<c3>: <chan>
RAW.473 <pre> <c3>-<c4>Channel is invite only (+i)<c3>: <chan>
RAW.474 <pre> <c3>-<c4>Cannot join, banned from channel (+b)<c3>: <chan>
RAW.475 <pre> <c3>-<c4>Cannot join, channel key required (+k)<c3>: <chan>
RAW.482 <pre> <c3>-<c4>You are not opped<c3>: <chan>
 
[Scheme1]
Colors 01,12,05,12,12,12,04,12,07,04,07,13,00,07,13,13,04,05,12,05,13,01,13,01,13,14
 
[Scheme2]
BaseColors 04,05,12,15
Colors 01,07,05,14,12,12,04,04,07,04,07,15,00,07,15,15,07,05,12,05,15,01,15,01,15,14
RGBColors 255,255,255 14,23,0 0,0,128 0,144,0 235,0,0 192,0,0 160,0,160 198,0,0 255,255,0 0,255,0 0,144,144 0,255,255 110,110,110 236,229,212 128,128,128 208,208,208
TimestampFormat 04[15h:nntt04]
 
CLineOwner 10