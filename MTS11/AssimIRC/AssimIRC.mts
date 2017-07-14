; Default Assimilated mIRC Theme
; Please do not modify.
;
; fo9
[mts]
Name Assimilated mIRC's Default Theme
Author firstof9
EMail firstof9@ownz-the.net
Website http://www.assimirc.ownz-the.net
Description Assimilated mIRC's Default Theme
Version 1.2
MTSVersion 1.1
 
Scheme1 Timestamp Enabled
 
BaseColors 03,14,07,09
Colors 01,03,04,14,14,14,14,04,15,03,08,10,14,11,06,10,03,07,10,14,10,05,15,01,10,14
 
FontDefault Verdana,11
FontQuery Verdana,11
FontChan Verdana,11
 
CLineOp 03
CLineHOp 07
CLineVoice 04
CLineRegular 10
CLineMe 11
CLineIrcOp 13
 
CLineCharMe 11-
CLineCharIrcOp 13~
 
Prefix <c1>•<c2>§<c1>•<c2>
Timestamp OFF
 
TextChan (<cnick><cmode><nick>) <text>
TextChanSelf (<cnick><cmode><nick>) <text>
ActionChan * <nick> <text>
ActionChanSelf * <nick> <text>
NoticeChan <nick> <text>
Notice <nick> <text>
NoticeSelf <nick> <text>
NoticeSelfChan <nick> <text>
TextQuery (<nick>) <text>
TextQuerySelf (<nick>) <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <nick> <text>
TextMsg <nick> <text>
TextMsgSelf <nick> <text>
 
Mode Mode- <nick> sets mode: <modes>
ModeUser Mode- <nick> sets mode: <modes>
Join Joins- <nick> [<address>] <comments> [<users> users]
JoinSelf You have joined: <chan>
Part Parts- <nick> [<address>] <text> [<users> users]
Kick Kick- <knick> was kicked by <nick> (<text>)
KickSelf You have been kicked by <nick> <text>
Quit Quits- <nick> [<address>] (<text>)
Topic <nick> changed topic to <text>
Nick <nick> is now known as <newnick>
NickSelf <nick> is now known as <newnick>
Invite <nick> invites you to join <chan>
ServerError Server Error: <text>
Rejoin Rejoining....
Ctcp <pre> ctcp<c1> <nick> <c1>[<c3><ctcp><c1>]<c3> <text>
CtcpChan <pre> ctcp<c1> <nick>:<chan> <c1>[<c3><ctcp><c1>]<c3> <text>
CtcpSelf <pre> ctcp<c1> <nick> <c1>[<c3><ctcp><c1>]<c3> <text>
CtcpChanSelf <pre> ctcp send<c1> <chan> <c1>[<c3><ctcp><c1>]<c3> <text>
CtcpReply <pre> ctcp<c1> <nick><chan> <c1>[<c3><ctcp> reply<c1>]<c3> <text>
CtcpReplySelf <pre> sending reply<c1> <nick> <c1>[<c3><ctcp><c1>]<c3> <text>
NoticeServer Server Notice- <text>
 
DNS Looking up <address>....
DNSError Could not resolve.
DNSResolve <C1>Resolved<C2> <nick> <C1>(<C2><address><c1>)<c2> <naddress> <iaddress> <raddress>
Error error <text>
Load <pre> AssimIRC Theme Loaded v(1.1)
Unload <pre> AssimIRC Theme Un-Loaded
 
RAW.311 <c1>Nick:<c2> <nick> <address> <c1>(<c2><realname><c1>)
RAW.314 WhoWas for <nick> [<address>] <realname>
RAW.319 <c1>Channels:<c2> <chan>
RAW.312 <c1>Server:<c2> <wserver> <c1>--- (<c2><serverinfo><c1>)
RAW.301 <c1>Away:<c2> <text>
RAW.307 <c1>Registered:<c2> <isreg>
RAW.313 <c1>IRCOp:<c2> <isoper>
RAW.317 <c1>Idle:<c2> <idletime> <c1>SignOn:<c2> <signontime>
RAW.369 --- End of WhoWas
 
RAW.221 <nick> modes: <modes>
RAW.250 <c1>T<c2>otal <c1>C<c2>onnections: <value>
RAW.254 Channels: <value>
RAW.266 Global Users: <users> max: <value>
RAW.324 <chan> modes: <modes>
RAW.332 Topic is <text>
RAW.333 Set by <nick> on <text>
RAW.305 No longer marked away.
RAW.306 Now marked as away.
 
RAW.401 No such nick: <nick>
RAW.403 No such channel: <chan>
RAW.404 Unable to send message to <chan>
RAW.421 Unknown Command: <value>
RAW.432 Invalid nick: <nick>
RAW.433 Nick in use: <nick>
RAW.471 <chan> is full
RAW.473 <c1>Channel is invite Only:<C2> <chan>
RAW.474 <c1>Banned from channel:<c2> <chan>
RAW.475 <chan> requires a key
RAW.482 You are not oped in <chan>
 
imagebuttons assimirc-buttons.bmp
imagetoolbar assimirc.bmp
imageswitchbar assimirc.bmp
imagemirc assimirc.bmp
imagestatus borglogo.jpg
 
[Scheme1]
Timestamp ON
 
TimestampFormat (hh:mmtt)
