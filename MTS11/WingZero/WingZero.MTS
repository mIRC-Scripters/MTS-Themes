[mts]
; Information
Name WingZero
Author nothing
EMail nothing@stormgarde.com
website http://www.nlink.org
Description Makes your mIRC look like N-Link WingZero X-NP / Tested with KTE on QuakeNet/euIRC/EFNet / plz report any bugs.
Version 2.0
MTSVersion 1.1

Script WingZero.mrc

;
; Appereance
;
Prefix 14-3×14-
Timestamp on
timestampformat 15[HH:nn]
parentext 14(15<text>14)
ImageStatus photo ZeroSys.jpg
;
; Chan Events
;
TextChan 3<lt>15<cmode><nick>3<gt> 15<text>
TextChanSelf 3<lt>14<cmode><me>3<gt> <text>
ActionChan * <nick> <text>
ActionChanSelf * <me> <text>
NoticeChan Notice: 14[<nick>]:<target> <text>
Notice Notice: 14[<nick>]  <text>
NoticeSelf Notice: -> 14[<nick>]  <text>
NoticeSelfChan Notice: 14[<me>]:<target>  <text>
TextQuery 3<lt>15<nick>3<gt> 15<text>
TextQuerySelf 3<lt>14<me>3<gt> <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <me> <text>
TextMsg 14<- msg <nick>15 <text>
TextMsgSelf 14msg -> <target>15 <text>
;
; Basic IRC Events
;
Mode <pre> 14mode <chan>:15 <modes>14 by 3<nick>
ModeUser <pre> 14Modes <nick>:15 <modes>
Join 9--»3 <nick> 14[<address>] has joined <chan>
JoinSelf 9--»3 <me> 14[<address>] has joined <chan>
Part 4«-- <nick> 14[<address>] has left <chan>
Kick <pre> 4<knick>14 was kicked from <chan> by15 <nick> 14(<text>)
KickSelf 14*** You were kicked by <nick> (<text>)
Quit 4«--SignOff: <nick> 15(14<text>15)
Topic <pre> 14<nick> changes <chan> topic to:15 <text>
Nick <pre> 14Change Nick <nick> Is Now Known As3 <newnick>
NickSelf <pre> 14You Are Now Known As <newnick>
Invite *** <nick> (<address>) invites you to join <chan>
ServerError <text>
Rejoin * Attempting to rejoin channel <chan>
CTCP <pre> 14<nick> [<address>] requested CTCP <ctcp> from you
CTCPChan <pre> 14<nick> [<address>] requested CTCP <ctcp> from <chan>
CTCPSelf <pre> 14ctcp15 <nick>14: <ctcp>
CTCPChanSelf <pre> 14ctcp15 <chan>14: <ctcp>
CTCPReply <pre> 14CTCP <ctcp> reply from <nick>: <text>
CTCPReplySelf <pre> 14CTCP <ctcp> reply from <nick>: <text>
Notify *** User <nick> is online. <text>
UNotify *** User <nick> is offline. <text>
Wallop <text>
NoticeServer 15[14<server>15] 15<text>
;
; Non-IRC Events
;
DNS
DNSError <pre> 0dns15: <iaddress> 4failed
DNSResolve <pre> 0dns15: resolved <iaddress> to <raddress>
ECHO <text>
EchoTarget <text>:<target>
Error 0Error! <text>
Load 15Loaded WingZero X-NP theme based on 4.::14W15in14g5|15Z14er15ø4::. Dch4/X-NP / © 2001 N-Link Inc. v.3.0.0
Unload 15Unloaded WingZero X-NP theme based on 4.::14W15in14g5|15Z14er15ø4::. Dch4/X-NP / © 2001 N-Link Inc. v.3.0.0
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.whois
RAW.313  14· 14[address14]15 <address>
RAW.314  0·15·14·-----------------------------------·4.::14whowas4::.14·-------------------------------------·15·0·
RAW.315  14· 4.::14nickname4::. 15<nick>
RAW.316  14· 4.::14address4::. 15<address>
RAW.319  14· 14[channels14]00 <chan>
RAW.312  14· 14[server14]15 <wserver> 14(<serverinfo>)
RAW.301  14· 14[away14]15 <away>
RAW.307  14· 14[registered14]15 Nick <isregd> registered
RAW.313  14· 14[status14]15 <nick> <operline>
RAW.309  14· 14[language14]15 <nick> <text> 
RAW.310  14· 14[helpop14]15 <nick> <text> 
RAW.325  14· 14[mode(s)14]15 <nick> <text> 
RAW.330  14· 14[auth14]15 <value> <text> 
RAW.317  !Script wz.widle
RAW.318  0·15·14·---------------------------------------------------------------------------------------·15·0·
RAW.369  0·15·14·---------------------------------------------------------------------------------------·15·0·
;
; Other RAWs
;
RAW.Other 15[<numeric>15] 14<text> 15[14Unknown RAW15]
RAW.001 14Welcome:15 <text>
RAW.002 14server:15 <server>  14server version:15 <value>
RAW.003 14server created on:0 <value>
RAW.004 14Server Support:0 <text>
RAW.005 14Server Support:0 <text>
RAW.006 14Server Support:0 <text>
RAW.221 <pre> User Modes: <modes>
RAW.242 14server uptime:0 <value>
RAW.250 <pre> Total number of connections: <value>
RAW.251 14users:0 <users> 14invis:0 <text> 14servers:0 <value>
RAW.252 14operators:0 <value>
RAW.253 14unknown connections:0 <value>
RAW.254 14channels:0 <value>
RAW.255 14local clients:0 <users> 14servers:0 <value>
RAW.265 14local users:0 <users> 14maximum users:0 <value>
RAW.266 14global users:0 <users> 14maximum users:0 <value>
RAW.302 14userhost:0 <nick> <lt><address><gt> <value>
RAW.305 14Away: 0You're marked as beeing away.
RAW.306 14Away: 0You're no longer marked as being away.
RAW.315 <pre> End of /WHO command on <value>
RAW.324 <pre> 14Channel Modes:3 <modes>
RAW.331 No topic is set.
RAW.332 <pre> 14Topic for <chan> is: <text>
RAW.333 <pre> 14Topic set by <nick> (<text>)
RAW.341 <pre> <nick> was invited to <chan>
RAW.352 14[<chan> 15<away><cmode> 0<nick>14!15<address> 14(15<server>14/0<value>14)]
RAW.353 14channel names list:0 <chan> <text>
RAW.366 End of /NAMES command for <chan>
RAW.367 <chan> <text>
RAW.368 <pre> <chan>: End of banlist
RAW.372 <pre> <text>
RAW.375 MOTD start...
RAW.376 End of /MOTD command
RAW.378
RAW.381 You now have 11op status. <address>
RAW.386 <text>
RAW.391 <pre> Server time and date: <text>
;
; Error RAWs
;
RAW.401 0Error! 14The Nickname <nick> is not present on this Server.
RAW.403 0Error! 14The Channel <chan> is not present on this Server.
RAW.404 0Error! Unable to send to <chan>.
RAW.406 0Error! <nick> was not present on this server.
RAW.421 0Error! <value>: Invalid command.
RAW.422 0Error! MOTD File is missing.
RAW.432 0Error! <nick>: Invalid nickname.
RAW.433 0Error! <nick>: Nickname is already in use.
RAW.442 0Error! <chan>: You're not on that channel.
RAW.451 0Error! You have not registered.
RAW.471 0Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 0Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 0Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 0Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 0Error! You are not an op on <chan>.
RAW.501 0Error! Unknown MODE flag.
RAW.502 0Error! Can't change modes for other users.
RAW.511 0Error! Your silence list is full.
RAW.522 0Error! <text>
;
; Fonts
;
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
;
; NickList
;
CLineMe 14
CLineOwner 12
CLineOp 12
CLineHOp 12
CLineVoice 15
CLineRegular 00
CLineFriend 00
CLineEnemy 00
CLineIrcOp 12
;
; Colors
;
colors 1,15,14,7,14,14,14,14,14,14,14,15,14,14,14,15,14,14,14,14,14,1,15,1,14,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
;
; Scheme
;
Scheme1 CustomToolbar
Scheme2 Redwing
Scheme3 RedwingCustom
Scheme4 LightBlueIce
Scheme5 LightBlueIceCustom
Scheme6 HalfLife
Scheme7 HalfLifeCustom

[scheme1]
ImageToolbar photo Bgtoolbar.bmp
ImageButtons buttons.bmp
ImageSwitchbar stretch black.bmp

[scheme2]
;
; Appereance
;
prefix 14-5×14-
parentext 5(15<text>5)
;
; Chan Events
;
TextChan 5<lt>15<cmode><nick>5<gt> 15<text>
TextChanSelf 5<lt>14<cmode><me>5<gt> <text>
TextQuery 5<lt>15<nick>5<gt> 15<text>
TextQuerySelf 5<lt>14<me>5<gt> <text>
NoticeChan 14Notice: 5[14<nick>5]15:<target> <text>
Notice 14Notice: 5[14<nick>5]15 <text>
NoticeSelf Notice: 4-> 5[14<nick>5]15  <text>
NoticeSelfChan 14Notice: 5[14<nick>5]15:<target>  <text>
;
; Basic IRC Events
;
Mode <pre> 14mode <chan>:15 <modes>14 by 5<nick>
Nick <pre> 14Change Nick <nick> Is Now Known As5 <newnick>
Join 9--»3 <nick> 5[14<address>5]14 has joined <chan>
Joinself 9--»3 <me> 5[14<address>5]14 has joined <chan>
Part 4«-- <nick> 5[14<address>5]14 has left <chan>
Kick <pre> 4<knick>14 was kicked from <chan> by15 <nick> 5(14<text>5)
Quit 4«--SignOff: <nick> 5(14<text>5)
CTCP <pre> 14<nick> 5[14<address>5]14 requested CTCP4 <ctcp> 14from you
CTCPChan <pre> 14<nick> 5[14<address>5]14 requested CTCP4 <ctcp> 14from <chan>
CTCPSelf <pre> 14ctcp15 <nick>14: <ctcp>
CTCPChanSelf <pre> 14ctcp15 <chan>14: <ctcp>
CTCPReply <pre> 14CTCP4 <ctcp> 14reply from <nick>4:15 <text>
CTCPReplySelf <pre> 14CTCP4 <ctcp> 14reply from <nick>4:15 <text>
;
; Non-IRC Events
;
Error 4Error! <text>
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.rhois
RAW.313  14· 5[14address5]15 <address>
RAW.319  14· 5[14channels5]0 <chan>
RAW.312  14· 5[14server5]15 <wserver> 5(14<serverinfo>5)
RAW.301  14· 5[14away5]15 <away>
RAW.307  14· 5[14registered5]15 Nick <isregd> registered
RAW.313  14· 5[14status5]15 <nick> <operline>
RAW.309  14· 5[14language5]15 <nick> <text>
RAW.310  14· 5[14helpop5]15 <nick> <text>
RAW.325  14· 5[14modes5]15 <nick> <text>
RAW.330  14· 5[14auth5]15 <value> <text>
RAW.317  !Script wz.ridle
;
; Other RAWs
;
RAW.324 <pre> 14Channel Modes:5 <modes>
RAW.332 <pre> 14Topic for <chan> is4: <text>
RAW.333 <pre> 14Topic set by <nick> 5(14<text>5)
RAW.352 5[14<chan> 15<away><cmode> 0<nick>4!15<address> 5(15<server>4/0<value>5)]
;
; Error RAWs
;
RAW.401 4Error! 14The Nickname <nick> is not present on this Server.
RAW.403 4Error! 14The Channel <chan> is not present on this Server.
RAW.404 4Error! Unable to send to <chan>.
RAW.406 4Error! <nick> was not present on this server.
RAW.421 4Error! <value>: Invalid command.
RAW.422 4Error! MOTD File is missing.
RAW.432 4Error! <nick>: Invalid nickname.
RAW.433 4Error! <nick>: Nickname is already in use.
RAW.442 4Error! <chan>: You're not on that channel.
RAW.451 4Error! You have not registered.
RAW.471 4Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 4Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 4Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 4Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 4Error! You are not an op on <chan>.
RAW.501 4Error! Unknown MODE flag.
RAW.502 4Error! Can't change modes for other users.
RAW.511 4Error! Your silence list is full.
RAW.522 4Error! <text>
;
; Nicklist
;
CLineMe 5
CLineOwner 4
CLineOp 4
CLineHOp 4
CLineIrcOp 5







[scheme3]
;
; Appereance
;
prefix 14-5×14-
parentext 5(15<text>5)
ImageToolbar photo Bgtoolbar.bmp
ImageButtons buttons.bmp
ImageSwitchbar stretch black.bmp
;
; Chan Events
;
TextChan 5<lt>15<cmode><nick>5<gt> 15<text>
TextChanSelf 5<lt>14<cmode><me>5<gt> <text>
TextQuery 5<lt>15<nick>5<gt> 15<text>
TextQuerySelf 5<lt>14<me>5<gt> <text>
NoticeChan 14Notice: 5[14<nick>5]15:<target> <text>
Notice 14Notice: 5[14<nick>5]15 <text>
NoticeSelf Notice: 4-> 5[14<nick>5]15  <text>
NoticeSelfChan 14Notice: 5[14<nick>5]15:<target>  <text>
;
; Basic IRC Events
;
Mode <pre> 14mode <chan>:15 <modes>14 by 5<nick>
Nick <pre> 14Change Nick <nick> Is Now Known As5 <newnick>
Join 9--»3 <nick> 5[14<address>5]14 has joined <chan>
Joinself 9--»3 <me> 5[14<address>5]14 has joined <chan>
Part 4«-- <nick> 5[14<address>5]14 has left <chan>
Kick <pre> 4<knick>14 was kicked from <chan> by15 <nick> 5(14<text>5)
Quit 4«--SignOff: <nick> 5(14<text>5)
CTCP <pre> 14<nick> 5[14<address>5]14 requested CTCP4 <ctcp> 14from you
CTCPChan <pre> 14<nick> 5[14<address>5]14 requested CTCP4 <ctcp> 14from <chan>
CTCPSelf <pre> 14ctcp15 <nick>14: <ctcp>
CTCPChanSelf <pre> 14ctcp15 <chan>14: <ctcp>
CTCPReply <pre> 14CTCP4 <ctcp> 14reply from <nick>4:15 <text>
CTCPReplySelf <pre> 14CTCP4 <ctcp> 14reply from <nick>4:15 <text>
;
; Non-IRC Events
;
Error 4Error! <text>
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.rhois
RAW.313  14· 5[14address5]0<address>
RAW.319  14· 5[14channels5]0 <chan>
RAW.312  14· 5[14server5]15 <wserver> 5(14<serverinfo>5)
RAW.301  14· 5[14away5]0 <away>
RAW.307  14· 5[14registered5]0Nick <isregd> registered
RAW.313  14· 5[14status5]0 <nick> <operline>
RAW.309  14· 5[14language5]0 <nick> <text>
RAW.310  14· 5[14helpop5]15 <nick> <text>
RAW.325  14· 5[14modes5]0 <nick> <text>
RAW.330  14· 5[14auth5]15 <value> <text>
RAW.317  !Script wz.ridle
;
; Other RAWs
;
RAW.324 <pre> 14Channel Modes:5 <modes>
RAW.332 <pre> 14Topic for <chan> is4: <text>
RAW.333 <pre> 14Topic set by <nick> 5(14<text>5)
RAW.352 5[14<chan> 15<away><cmode> 0<nick>4!15<address> 5(15<server>4/0<value>5)]
;
; Error RAWs
;
RAW.401 4Error! 14The Nickname <nick> is not present on this Server.
RAW.403 4Error! 14The Channel <chan> is not present on this Server.
RAW.404 4Error! Unable to send to <chan>.
RAW.406 4Error! <nick> was not present on this server.
RAW.421 4Error! <value>: Invalid command.
RAW.422 4Error! MOTD File is missing.
RAW.432 4Error! <nick>: Invalid nickname.
RAW.433 4Error! <nick>: Nickname is already in use.
RAW.442 4Error! <chan>: You're not on that channel.
RAW.451 4Error! You have not registered.
RAW.471 4Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 4Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 4Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 4Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 4Error! You are not an op on <chan>.
RAW.501 4Error! Unknown MODE flag.
RAW.502 4Error! Can't change modes for other users.
RAW.511 4Error! Your silence list is full.
RAW.522 4Error! <text>
;
; Nicklist
;
CLineMe 5
CLineOwner 4
CLineOp 4
CLineHOp 4
CLineIrcOp 5






[scheme4]
;
; Appereance
;
Prefix 10:::
timestampformat 10|14hh:nn10|
parentext 10:15<text>10:
;
; Chan Events
;
TextChan 10:15<cmode><nick>10::15 <text>
TextChanSelf 10:14<cmode><me>10::15 <text>
TextQuery 10:15<cmode><nick>10::15 <text>
TextQuerySelf 10:14<cmode><me>10::15 <text>
NoticeChan 10:14Notice10:14<nick>10::14<target>0 <text>
Notice 10:14Notice10:14<nick>10::0 <text>
TextMsg 10:14msg10:14<nick>10::0 <text>
TextMsgSelf 14msg -> <me>15 <text>
;
; Basic IRC Events
;
Mode <pre> 10:14<nick>10:14 sets mode 10:15<modes>10:14 in <chan>
ModeUser <nick> 10:::14 10:14modes10:14 <modes>
Join 10:3<nick>10:14 has joined <chan> 10:14<address>10:
JoinSelf 10:3<me>10:14 has joined <chan> 10:14<address>10:
Part 10:4<nick>10:14 has left <chan> 10:14<address>10:
Kick <pre> 10:14<knick>10:14 been kicked from <chan> by 10:14<nick>10:15 <text>
Quit 4QuitIRC 10:14<nick>10:14 <text>
Topic <pre> 10:14<nick>10:14 changes topic to0 <text>
Nick <pre> 10:14<nick>10:14 changed nick to 10:15<newnick>10:
NickSelf <pre> 14Nick is now 10:14<newnick>10:
NoticeServer 10:14<server>10:15 <text>
;
; Non-IRC Events
;
Error 11Error! <text>
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.bhois
RAW.313  10:14host10:0 <address>
RAW.319  10:14chans10:0 <chan>
RAW.312  10:14server10:0 <wserver> 10:14<serverinfo>10:
RAW.301  10:14away10:0 <away>
RAW.307  10:14reg10:0 Registered with NickServ
RAW.310  10:14helpop10:0 <nick> <text>
RAW.313  10:14status10:0 <nick> <operline>
RAW.309  10:14lang10:0 <nick> <text>
RAW.325  10:14cserv10:0 <nick> <text>
RAW.330  10:14auth10:0 <value> <text>
RAW.317  !Script wz.bidle
RAW.318  1-----10:14end of Whois10:
;
; Other RAWs
;
RAW.001 <pre> 14Welcome:15 <text>
RAW.002 <pre> 14server:15 <server>  14server version:15 <value>
RAW.003 <pre> 14server created on:0 <value>
RAW.004 <pre> 14Server Support:0 <text>
RAW.005 <pre> 14Server Support:0 <text>
RAW.006 <pre> 14Server Support:0 <text>
RAW.221 <pre> User Modes: <modes>
RAW.242 <pre> 14server uptime:0 <value>
RAW.250 <pre> Total number of connections: <value>
RAW.251 <pre> 14users:0 <users> 14invis:0 <text> 14servers:0 <value>
RAW.252 <pre> 14operators:0 <value>
RAW.253 <pre> 14unknown connections:0 <value>
RAW.254 <pre> 14channels:0 <value>
RAW.255 <pre> 14local clients:0 <users> 14servers:0 <value>
RAW.265 <pre> 14local users:0 <users> 14maximum users:0 <value>
RAW.266 <pre> 14global users:0 <users> 14maximum users:0 <value>
RAW.302 <pre> 14userhost:0 <nick> <lt><address><gt> <value>
RAW.324 <pre> 10:14modes10:14 <modes>
RAW.332 <pre> 10:14<chan>10:14 <text>
RAW.333 <pre> 10:14Topic was set by10:14 <nick> 10:14 on 10:14<text>10:
RAW.352 10:14mode10:15<away><cmode>1--10:1410:15<nick>14!15<address> 1-10:14serv10:15<server> 
RAW.353 14channel names list:0 <chan> <text>
;
; Error RAWs
;
RAW.401 11Error! 14The Nickname <nick> is not present on this Server.
RAW.403 11Error! 14The Channel <chan> is not present on this Server.
RAW.404 11Error! Unable to send to <chan>.
RAW.406 11Error! <nick> was not present on this server.
RAW.421 11Error! <value>: Invalid command.
RAW.422 11Error! MOTD File is missing.
RAW.432 11Error! <nick>: Invalid nickname.
RAW.433 11Error! <nick>: Nickname is already in use.
RAW.442 11Error! <chan>: You're not on that channel.
RAW.451 11Error! You have not registered.
RAW.471 11Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 11Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 11Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 11Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 11Error! You are not an op on <chan>.
RAW.501 11Error! Unknown MODE flag.
RAW.502 11Error! Can't change modes for other users.
RAW.511 11Error! Your silence list is full.
RAW.522 11Error! <text>
;
; NickList
;
CLineMe 11
CLineOwner 10
CLineOp 10
CLineHOp 10
CLineIrcOp 10






[scheme5]
;
; Appereance
;
Prefix 10:::
timestampformat 10|14hh:nn10|
parentext 10:15<text>10:
ImageToolbar photo Bgtoolbar.bmp
ImageButtons buttons.bmp
ImageSwitchbar stretch black.bmp
;
; Chan Events
;
TextChan 10:14<cmode><nick>10::14 <text>
TextChanSelf 10:15<cmode><me>10::14 <text>
TextQuery 10:14<cmode><nick>10::14 <text>
TextQuerySelf 10:15<cmode><me>10::14 <text>
NoticeChan 10:14Notice10:14<nick>10::14<target>0 <text>
Notice 10:14Notice10:14<nick>10::0 <text>
TextMsg 10:14msg10:14<nick>10::0 <text>
TextMsgSelf 14msg -> <me>15 <text>
;
; Basic IRC Events
;
Mode <pre> 10:14<nick>10:14 sets mode 10:15<modes>10:14 in <chan>
ModeUser <nick> 10:::14 10:14modes10:14 <modes>
Join 10:3<nick>10:14 has joined <chan> 10:14<address>10:
JoinSelf 10:3<me>10:14 has joined <chan> 10:14<address>10:
Part 10:4<nick>10:14 has left <chan> 10:14<address>10:
Kick <pre> 10:14<knick>10:14 been kicked from <chan> by 10:14<nick>10:15 <text>
Quit 4QuitIRC 10:14<nick>10:14 <text>
Topic <pre> 10:14<nick>10:14 changes topic to0 <text>
Nick <pre> 10:14<nick>10:14 changed nick to 10:15<newnick>10:
NickSelf <pre> 14Nick is now 10:14<newnick>10:
NoticeServer 10:14<server>10:15 <text>
;
; Non-IRC Events
;
Error 11Error! <text>
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.bhois
RAW.313  10:14host10:0 <address>
RAW.319  10:14chans10:0 <chan>
RAW.312  10:14server10:0 <wserver> 10:14<serverinfo>10:
RAW.301  10:14away10:0 <away>
RAW.307  10:14reg10:0 Registered with NickServ
RAW.313  10:14status10:0 <nick> <operline>
RAW.309  10:14lang10:0 <nick> <text>
RAW.310  10:14helpop10:0 <nick> <text>
RAW.325  10:14cserv10:0 <nick> <text>
RAW.330  10:14auth10:0 <value> <text>
RAW.317  !Script wz.bidle
RAW.318  1-----10:14end of Whois10:
;
; Other RAWs
;
RAW.001 <pre> 14Welcome:15 <text>
RAW.002 <pre> 14server:15 <server>  14server version:15 <value>
RAW.003 <pre> 14server created on:0 <value>
RAW.004 <pre> 14Server Support:0 <text>
RAW.005 <pre> 14Server Support:0 <text>
RAW.006 <pre> 14Server Support:0 <text>
RAW.221 <pre> User Modes: <modes>
RAW.242 <pre> 14server uptime:0 <value>
RAW.250 <pre> Total number of connections: <value>
RAW.251 <pre> 14users:0 <users> 14invis:0 <text> 14servers:0 <value>
RAW.252 <pre> 14operators:0 <value>
RAW.253 <pre> 14unknown connections:0 <value>
RAW.254 <pre> 14channels:0 <value>
RAW.255 <pre> 14local clients:0 <users> 14servers:0 <value>
RAW.265 <pre> 14local users:0 <users> 14maximum users:0 <value>
RAW.266 <pre> 14global users:0 <users> 14maximum users:0 <value>
RAW.302 <pre> 14userhost:0 <nick> <lt><address><gt> <value>
RAW.324 <pre> 10:14modes10:14 <modes>
RAW.332 <pre> 10:14<chan>10:14 <text>
RAW.333 <pre> 10:14Topic was set by10:14 <nick> 10:14 on 10:14<text>10:
RAW.352 10:14mode10:15<away><cmode>1--10:1410:15<nick>14!15<address> 1-10:14serv10:15<server> 
RAW.353 14channel names list:0 <chan> <text>
;
; Error RAWs
;
RAW.401 11Error! 14The Nickname <nick> is not present on this Server.
RAW.403 11Error! 14The Channel <chan> is not present on this Server.
RAW.404 11Error! Unable to send to <chan>.
RAW.406 11Error! <nick> was not present on this server.
RAW.421 11Error! <value>: Invalid command.
RAW.422 11Error! MOTD File is missing.
RAW.432 11Error! <nick>: Invalid nickname.
RAW.433 11Error! <nick>: Nickname is already in use.
RAW.442 11Error! <chan>: You're not on that channel.
RAW.451 11Error! You have not registered.
RAW.471 11Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 11Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 11Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 11Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 11Error! You are not an op on <chan>.
RAW.501 11Error! Unknown MODE flag.
RAW.502 11Error! Can't change modes for other users.
RAW.511 11Error! Your silence list is full.
RAW.522 11Error! <text>
;
; NickList
;
CLineMe 11
CLineOwner 10
CLineOp 10
CLineHOp 10
CLineIrcOp 10






[scheme6]
;
; Appereance
;
Prefix 7/\
timestampformat 07hh:nn¨
parentext 7<text>
;
; Chan Events
;
TextChan 7<lt>14<cmode><nick>7<gt> 15<text>
TextChanSelf 7<lt>15<cmode><me>7<gt> 15 <text>
TextQuery 7<lt>14<cmode><nick>7<gt> 15<text>
TextQuerySelf 7<lt>15<cmode><me>7<gt> 15 <text>
;
; Basic IRC Events
;

Join 7 <nick> 14[<address>] has 3joined14 <chan>
JoinSelf 7 <me> 14[<address>] has 3joined14 <chan>
Part 7 <nick> 14[<address>] has 4left14 <chan>
Kick <pre> 7<knick>14 was kicked from <chan> by7 <nick> 14(<text>14)
Quit 14<nick> has left the Game reason: <text>
Nick <pre> 14<nick> Is Now Known As7 <newnick>
NickSelf <pre> 7You Are Now Known As <newnick>
;
; Non-IRC Events
;
Error 7Error! <text>
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.hlhois
RAW.313  7· 7[address7]14 <address>
RAW.319  7· 7[channels7]00 <chan>
RAW.312  7· 7[server7]14 <wserver> 14(<serverinfo>)
RAW.301  7· 7[away7]14 <away>
RAW.307  7· 7[registered7]14 Nick <isregd> registered
RAW.313  7· 7[status7]14 <nick> <operline>
RAW.309  7· 7[language7]14 <nick> <text> 
RAW.310  7· 7[helpop7]14 <nick> <text> 
RAW.325  7· 7[mode(s)7]14 <nick> <text> 
RAW.330  7· 7[auth7]14 <value> <text> 
RAW.317  !Script wz.hlidle
RAW.318  <pre> 14End of Player Info
;
; Other RAWs
;
RAW.001 <pre> 14Welcome:15 <text>
RAW.002 <pre> 14server:15 <server>  14server version:15 <value>
RAW.003 <pre> 14server created on:0 <value>
RAW.004 <pre> 14Server Support:0 <text>
RAW.005 <pre> 14Server Support:0 <text>
RAW.006 <pre> 14Server Support:0 <text>
RAW.221 <pre> User Modes: <modes>
RAW.242 <pre> 14server uptime:0 <value>
RAW.250 <pre> Total number of connections: <value>
RAW.251 <pre> 14users:0 <users> 14invis:0 <text> 14servers:0 <value>
RAW.252 <pre> 14operators:0 <value>
RAW.253 <pre> 14unknown connections:0 <value>
RAW.254 <pre> 14channels:0 <value>
RAW.255 <pre> 14local clients:0 <users> 14servers:0 <value>
RAW.265 <pre> 14local users:0 <users> 14maximum users:0 <value>
RAW.266 <pre> 14global users:0 <users> 14maximum users:0 <value>
RAW.302 <pre> 14userhost:0 <nick> <lt><address><gt> <value>
RAW.324 <pre> 10:14modes10:14 <modes>
RAW.332 <pre> 10:14<chan>10:14 <text>
RAW.333 <pre> 10:14Topic was set by10:14 <nick> 10:14 on 10:14<text>10:
RAW.353 <pre> 14channel names list:0 <chan> <text>
;
; Error RAWs
;
RAW.401 7Error! 14The Nickname <nick> is not present on this Server.
RAW.403 7Error! 14The Channel <chan> is not present on this Server.
RAW.404 7Error! Unable to send to <chan>.
RAW.406 7Error! <nick> was not present on this server.
RAW.421 7Error! <value>: Invalid command.
RAW.422 7Error! MOTD File is missing.
RAW.432 7Error! <nick>: Invalid nickname.
RAW.433 7Error! <nick>: Nickname is already in use.
RAW.442 7Error! <chan>: You're not on that channel.
RAW.451 7Error! You have not registered.
RAW.471 7Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 7Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 7Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 7Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 7Error! You are not an op on <chan>.
RAW.501 7Error! Unknown MODE flag.
RAW.502 7Error! Can't change modes for other users.
RAW.511 7Error! Your silence list is full.
RAW.522 7Error! <text>
;
; NickList
;
CLineMe 0
CLineOwner 7
CLineOp 7
CLineHOp 7
CLineVoice 15
CLineRegular 14
CLineFriend 14
CLineEnemy 14
CLineIrcOp 7






[scheme7]
;
; Appereance
;
Prefix 7/\
timestampformat 07hh:nn¨
parentext 7<text>
ImageToolbar photo Bgtoolbar.bmp
ImageButtons buttons.bmp
ImageSwitchbar stretch black.bmp
;
; Chan Events
;
TextChan 7<lt>14<cmode><nick>7<gt> 15<text>
TextChanSelf 7<lt>15<cmode><me>7<gt> 15 <text>
TextQuery 7<lt>14<cmode><nick>7<gt> 15<text>
TextQuerySelf 7<lt>15<cmode><me>7<gt> 15 <text>
;
; Basic IRC Events
;

Join 7 <nick> 14[<address>] has 3joined14 <chan>
JoinSelf 7 <me> 14[<address>] has 3joined14 <chan>
Part 7 <nick> 14[<address>] has 4left14 <chan>
Kick <pre> 7<knick>14 was kicked from <chan> by7 <nick> 14(<text>14)
Quit 14<nick> has left the Game reason: <text>
Nick <pre> 14<nick> Is Now Known As7 <newnick>
NickSelf <pre> 7You Are Now Known As <newnick>
;
; Non-IRC Events
;
Error 7Error! <text>
;
; Whois/Whowas/RAW-events
;
RAW.311  !Script wz.hlhois
RAW.313  7· 7[address7]14 <address>
RAW.319  7· 7[channels7]00 <chan>
RAW.312  7· 7[server7]14 <wserver> 14(<serverinfo>)
RAW.301  7· 7[away7]14 <away>
RAW.307  7· 7[registered7]14 Nick <isregd> registered
RAW.313  7· 7[status7]14 <nick> <operline>
RAW.309  7· 7[language7]14 <nick> <text> 
RAW.310  7· 7[helpop7]14 <nick> <text> 
RAW.325  7· 7[mode(s)7]14 <nick> <text> 
RAW.330  7· 7[auth7]14 <value> <text> 
RAW.317  !Script wz.hlidle
RAW.318  <pre> 14End of Player Info
;
; Other RAWs
;
RAW.001 <pre> 14Welcome:15 <text>
RAW.002 <pre> 14server:15 <server>  14server version:15 <value>
RAW.003 <pre> 14server created on:0 <value>
RAW.004 <pre> 14Server Support:0 <text>
RAW.005 <pre> 14Server Support:0 <text>
RAW.006 <pre> 14Server Support:0 <text>
RAW.221 <pre> User Modes: <modes>
RAW.242 <pre> 14server uptime:0 <value>
RAW.250 <pre> Total number of connections: <value>
RAW.251 <pre> 14users:0 <users> 14invis:0 <text> 14servers:0 <value>
RAW.252 <pre> 14operators:0 <value>
RAW.253 <pre> 14unknown connections:0 <value>
RAW.254 <pre> 14channels:0 <value>
RAW.255 <pre> 14local clients:0 <users> 14servers:0 <value>
RAW.265 <pre> 14local users:0 <users> 14maximum users:0 <value>
RAW.266 <pre> 14global users:0 <users> 14maximum users:0 <value>
RAW.302 <pre> 14userhost:0 <nick> <lt><address><gt> <value>
RAW.324 <pre> 10:14modes10:14 <modes>
RAW.332 <pre> 10:14<chan>10:14 <text>
RAW.333 <pre> 10:14Topic was set by10:14 <nick> 10:14 on 10:14<text>10:
RAW.353 <pre> 14channel names list:0 <chan> <text>
;
; Error RAWs
;
RAW.401 7Error! 14The Nickname <nick> is not present on this Server.
RAW.403 7Error! 14The Channel <chan> is not present on this Server.
RAW.404 7Error! Unable to send to <chan>.
RAW.406 7Error! <nick> was not present on this server.
RAW.421 7Error! <value>: Invalid command.
RAW.422 7Error! MOTD File is missing.
RAW.432 7Error! <nick>: Invalid nickname.
RAW.433 7Error! <nick>: Nickname is already in use.
RAW.442 7Error! <chan>: You're not on that channel.
RAW.451 7Error! You have not registered.
RAW.471 7Error! Cannot join <chan>: <lt>+l<gt>.
RAW.473 7Error! Cannot join <chan>: <lt>+i<gt>.
RAW.474 7Error! Cannot join <chan>: <lt>+b<gt>.
RAW.475 7Error! Cannot join <chan>: <lt>+k<gt>.
RAW.482 7Error! You are not an op on <chan>.
RAW.501 7Error! Unknown MODE flag.
RAW.502 7Error! Can't change modes for other users.
RAW.511 7Error! Your silence list is full.
RAW.522 7Error! <text>
;
; NickList
;
CLineMe 0
CLineOwner 7
CLineOp 7
CLineHOp 7
CLineVoice 15
CLineRegular 14
CLineFriend 14
CLineEnemy 14
CLineIrcOp 7