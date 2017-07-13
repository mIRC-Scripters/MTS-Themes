[mts]
; Theme information
Name Desert
Author seNTi|
EMail seNTi2001@lycos.com
Website http://www.mircworks.cjb.net
Description The colors of the Desert.
Version 1.0
MTSVersion 1.0
;
; Basic text appearance
Prefix 6¤9¤7¤2¤5¤
Timestamp 12[3hh:nn12]
ParenText
; Text IRC events
TextChan <pre> (<cmode><nick>) <text>
TextChanSelf <pre> (<cmode><me>) <text>
ActionChan <pre> * <cmode><nick> <text>
ActionChanSelf <pre> * <cmode><me> <text>
NoticeChan <pre> <nick>:<target> <text>
Notice <pre> <cmode><nick>:<text>
NoticeSelf <pre> -<nick>:<text>
NoticeSelfChan
TextQuery <pre> (<cmode><nick>) <text>
TextQuerySelf <pre> (<cmode><me>) <text>
ActionQuery <pre> * <cmode><nick> <text>
ActionQuerySelf <pre> * <cmode><me> <text>
TextMsg <pre> <nick><lt>- <text>
TextMsgSelf <pre> <nick>-<gt> <text>
; Basic IRC events
Mode <pre> <nick> has set new mode(s) in <chan>: <modes>
ModeUser <pre> <nick> has set mode <modes>
Join <pre> Join: <nick> (<address>)
JoinSelf <pre> You have joined <chan>.
Part <pre> Part: <nick> (<address>)
Kick <pre> Kick: <knick> was kicked by <nick> <pre> <text>
KickSelf <pre> Kick: You were kicked by <nick> <pre> <text>
Quit <pre> Quit: <nick> <pre> <text>
Topic <pre> Topic: <nick> has set a new topic in <chan> <pre> <text>
Nick <pre> Nick: <nick> is now known as <newnick>
NickSelf <pre> Nick: You are now known as <newnick>
Invite <pre> Invite: <nick> invites you to join <chan>
ServerError <pre> Error: <text>
Rejoin <pre> Attempting to re-join...
Ctcp <pre> CTCP <lt><ctcp><gt> from <nick> <pre> <text>
CtcpChan <pre> CTCP <lt><ctcp><gt> from <nick> <pre> <text>
CtcpSelf <pre> CTCP <lt><ctcp><gt> sent to <nick> <pre> <text>
CtcpChanSelf <pre> CTCP <lt><ctcp><gt> sent to <chan> <pre> <text>
CtcpReply <pre> CTCP <lt><ctcp><gt> reply from <nick> <pre> <text>
CtcpReplySelf <pre> CTCP <lt><ctcp><gt> reply sent to <chan><nick>
Notify
UNotify
Wallop
NoticeServer
; Non-IRC events
DNS <pre> Performing /whois on <nick><address>
DNSError <pre> DNS failed.
DNSResolve <pre> Resolved <iaddress> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error! <text>
Load <pre> You have entered the Desert...
Unload <pre> You have left the desert.
; Whois and Whowas raws and events
RAW.311 <pre> Performing whois on <nick> (<address>)
RAW.314
RAW.319 <pre> Channels: <chan>
RAW.312 <pre> Server: <wserver>
RAW.301 <pre> Away Reason: <text>
RAW.307
RAW.313 <pre> IRCop: <operline>
RAW.317 <pre> Idle Time: <idletime> <pre> Sign-On Time: <signontime>
RAW.318 <pre> End of /whois command on <nick>
RAW.369
Whois
Whowas
; Other raws
RAW.Other
RAW.001 <pre> <text>
RAW.002 <pre> Server: <server> - Version: <value>
RAW.003 <pre> Server created on <value>
RAW.005 <pre> Protocols supported by server: <text>
RAW.221 <pre> Current usermode for <nick>: <modes>
RAW.250 <pre> A total of <value> connections.
RAW.251 <pre> <users> users and <text> invisible users on <value> server(s).
RAW.252 <pre> <value> operators.
RAW.253 <pre> <value> unknown connections.
RAW.254 <pre> <value> number of channel(s) formed.
RAW.255 <pre> <users> local clients and <value> server(s).
RAW.265 <pre> <users> local users and <value> users max.
RAW.266 <pre> <users> global users and <value> maximum users.
RAW.302 <pre> <nick> userhost: <address> - <value>
RAW.315
RAW.324 <pre> <chan> modes: <modes>
RAW.332 <pre> <chan> topic: <text>
RAW.333 <pre> <chan> topic set by <nick> on <text>
RAW.341 <pre> <nick> was invited to <chan>
RAW.352
RAW.353 <pre> <chan> names list: <text>
RAW.366 <pre> End of /names list for <chan>
RAW.372 <pre> + <text>
RAW.375 <pre> Viewing the Message Of The Day...
RAW.376 <pre> End of the /motd
RAW.391 <pre> Server time/date: <text>
; Error raws
RAW.401 <pre> <nick>: no such nickname.
RAW.403 <pre> <chan>: no such channel.
RAW.404 <pre> Unable to send message to <chan>
RAW.421 <pre> <value>: invalid command.
RAW.432 <pre> <nick>: invalid nickname.
RAW.433 <pre> <nick>: nickname is in use.
RAW.471 <pre> Cannot join <chan>; it is full. (User Limit +l)
RAW.473 <pre> Cannot join <chan>; it is invite-only. (Invite only +i)
RAW.474
RAW.475 <pre> Cannot join <chan>; a key is required in order to join (Key +k)
RAW.482 <pre> You are not an op on <chan>!
Colors 02,05,04,08,00,06,03,09,07,06,05,13,05,07,06,01,09,09,00,05,01,02,06,02,05,15
RGBColors 255,255,255 0,0,0 175,95,95 128,128,0 255,0,0 128,0,0 255,255,157 255,128,0 255,255,0 255,181,106 0,144,144 0,255,255 128,128,64 0,202,51 128,128,128 208,208,208
FontDefault Tahoma,12
FontChan Tahoma,12
FontQuery Tahoma,12
CLineOwner 09
CLineOp 05
CLineHOp 12
CLineVoice 13
CLineRegular 00
CLineMe 01
CLineFriend 00
CLineEnemy 00
CLineIrcOp 08
