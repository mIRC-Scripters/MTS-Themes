[mts]
; Theme information
Name bW
Author seNTi|
EMail seNTi2001@lycos.com
Website http://www.mircworks.cjb.net
Description A theme for those of you who like white backgrounds. ;)
Version 1.0
MTSVersion 1.0
;
; Basic text appearance
Prefix 4[1ß4]
Timestamp [hh:nn:ss]
ParenText 10(3<text>10)
; Text IRC events
TextChan <pre> <lt><cmode><nick><gt> <text>
TextChanSelf <pre> <lt><cmode><me><gt> <text>
ActionChan <pre> * <cmode><nick> <text>
ActionChanSelf <pre> * <cmode><me> <text>
NoticeChan <pre> <nick>:<target> <text>
Notice <pre> -<nick>- <text>
NoticeSelf <pre> -<me>:<chan>- <text>
NoticeSelfChan <pre> <me>:<target> <text>
TextQuery <pre> <lt><cmode><nick><gt> <text>
TextQuerySelf <pre> <lt><cmode><me><gt> <text>
ActionQuery <pre> * <cmode><nick> <text>
ActionQuerySelf <pre> * <cmode><me> <text>
TextMsg <pre><gt>msg from<lt> <nick>: <text>
TextMsgSelf <pre><gt>msg to<lt> <nick>: <text>
; Basic IRC events
Mode <pre> <nick>: <modes>
ModeUser <pre> Usermode(s): <modes>
Join <pre> Join: <nick> ± <address>
JoinSelf <pre> Joined <chan>
Part <pre> Part: <nick> ± <address>
Kick <pre> Kick: <knick> kicked by <nick> ± <text>
KickSelf <pre> Kick: You were kicked by <nick> ± <text>
Quit <pre> Quit: <nick> ± <text>
Topic <pre> Topic: <nick> has set a new topic: <text>
Nick <pre> Nick Change: <nick> is now known as <newnick>
NickSelf <pre> Nick Change: You are now known as <newnick>
Invite <pre> Invite: <nick> invites you to join <chan>
ServerError <pre> Error: <text>
Rejoin <pre> Rejoining <chan>...
Ctcp <pre> CTCP <lt><ctcp><gt> from <nick> ± <text>
CtcpChan <pre> CTCP <lt><ctcp><gt> <nick> ± <text>
CtcpSelf <pre> CTCP <lt><ctcp><gt> sent to <nick> ± <text>
CtcpChanSelf <pre> CTCP <lt><ctcp><gt> sent to <chan> ± <text>
CtcpReply <pre> CTCP <lt><ctcp><gt> reply from <nick> ± <text>
CtcpReplySelf <pre> CTCP <lt><ctcp><gt> reply sent to <chan><nick> ± <text>
Notify <pre> Notification from <nick>: <text>
UNotify <pre> Un-Notify: <lt><nick><gt> ± <text>
Wallop
NoticeServer <pre> <nick>:<text>
; Non-IRC events
DNS <pre> Performing DNS on <nick><address>
DNSError <pre> Unable to perform DNS.
DNSResolve <pre> DNS Successful; <iaddress> -<gt> <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error: <text>
Load <pre> The bW Theme is loaded!
Unload <pre> The bW Theme has been unloaded.
; Whois and Whowas raws and events
RAW.311 <pre> Whois! Nick: <nick> ± Address: <address> ± Real Name: <realname>
RAW.314 <pre> Who Was? Nick: <nick> ± Address: <address> ± Real Name: <realname>
RAW.319 <pre> Whois! Channels: <chan>
RAW.312 <pre> Whois! Server: <wserver> ± <serverinfo>
RAW.301 <pre> Whois! Away MSG: <away>
RAW.307
RAW.313 <pre> Whois! IRCop! <operline>
RAW.317 <pre> Whois! Idle Time: <idletime> ± Sign-On Time: <signontime>
RAW.318 <pre> End of /WHOIS command for <nick>
RAW.369 <pre> End of /WHOWAS command for <nick>
Whois
Whowas
; Other raws
RAW.Other
RAW.001 <pre> <text>
RAW.002 <pre> Server: <server> ± Version: <value>
RAW.003 <pre> Server created on <value>
RAW.005 Protocols supported by server: <text>
RAW.221 <pre> User Modes: <modes>
RAW.250 <pre> Total number of connections: <value>
RAW.251 <pre> Total users in all: <users> ± Invisible: <text> ± on <value> servers.
RAW.252 <pre> Total number of operators: <value>
RAW.253 <pre> Unknown connections: <value>
RAW.254 <pre> Number of channels: <value>
RAW.255 <pre> Local clients: <users> ± Servers: <value>
RAW.265 <pre> Local users: <users> ± Maximum Users: <value>
RAW.266 <pre> Global users: <users> ± Maximum users: <value>
RAW.302 <pre> Userhost: <nick> <lt><address><gt> ± <value>
RAW.315 <pre> End of /WHO command on <value>
RAW.324 <pre> Channel <chan> modes: <modes>
RAW.332 Channel <chan> topic: <text>
RAW.333 <pre> Topic of <chan> set by <nick> on <text>
RAW.341 <pre> <nick> was invited to <chan>
RAW.352
RAW.353 <pre> Channel names list: <chan> ± <text>
RAW.366 <pre> End of /NAMES command for <chan>
RAW.372 <pre> •• <text>
RAW.375 <pre> Viewing Message Of The Day...
RAW.376 <pre> End of /MOTD command
RAW.391 <pre> Server time and date: <text>
; Error raws
RAW.401 <pre> Error! <nick>: No such nickname.
RAW.403 <pre> Error! <chan>: No such channel.
RAW.404 <pre> Error! Unable to send to <chan>
RAW.421 <pre> Error! <value>: Invalid command.
RAW.432 <pre> Error! <nick>: Invalid nickname.
RAW.433 <pre> Error! <nick>: Nickname is already in use!
RAW.471 <pre> Error! <chan> is full. <lt>+l<gt>
RAW.473 <pre> Error! <chan> is invite-only! <lt>+i<gt>
RAW.474 <pre> Error! Cannot join <chan>; your address is banned. <lt>+b<gt>
RAW.475 <pre> Error! A key is required to join <chan>. <lt>+k<gt>
RAW.482 <pre> Error! You are not an op on <chan>!
Colors 00,06,04,05,02,12,03,03,04,11,08,01,05,07,14,15,04,04,02,05,02,00,14,00,01,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 213,213,0 0,187,47 0,144,144 0,225,225 0,0,255 100,0,100 128,128,128 195,195,195
FontDefault Verdana,13
FontChan Verdana,13
FontQuery Verdana,12
CLineMe 13
CLineOwner 02
CLineOp 02
CLineHOp 02
CLineVoice 02
CLineRegular 02
CLineFriend 02
CLineEnemy 02
CLineIrcOp 02
