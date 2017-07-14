[mts]
Name mAx-Theme
Author mAx
Email mAx@factio-Devotionis.de
Description coming sooon..
Website www.mAx-Script.de.vu
Version 2.1
MTSVersion 1.1

Load !Script mAx.load
Unload <pre> <c4>[<c3>mAx<c4>] theme unloaded...
Script mAx.mrc
Scheme1 green on white
Scheme2 red on white
Scheme3 orange on white
Scheme4 blue on black
Scheme5 green on black
Scheme6 red on black
Scheme7 orange on black

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

Prefix <c4>-›
Timestamp ON
TimestampFormat <c4>[ <c2>HH<c4>:<c2>nn<c4> ]
ParenText <c4>(<c3><text><c4>)

ActionQuery <c4>• <c2><nick> <text>
ActionQuerySelf <c4>• <c2><me> <text>
TextChan <c3><cmode><c2><nick><c4>: <text>
TextChanSelf <c3><cmode><c2><me><c4>:  <text>
ActionChan <c4>• <c3><cmode><c2><nick> <text>
ActionChanSelf <c4>• <c3><cmode><c2><me> <text>
TextQuery <c2><nick><c4>: <text>
TextQuerySelf <c2><me><c4>: <text>

TextMsg <pre> <c4>[<c3>msg<c4>] <c2><nick><c4>: <text>
TextMsgSelf <pre> <c4>[<c3>msg<c4>] -<gt> <c4>'<c2><target><c4>' <text>
Notice <pre> <c4>[<c3>notice<c4>] <c2><nick><c4>: <text>
NoticeSelf <pre> <c4>[<c3>notice<c4>] -<gt> <c4>'<c2><target><c4>' <text>
NoticeChan <pre> <c4>[<c3>notice<c4>/<c3><chan><c4>] <c2><nick><c4>: <text>
NoticeChanSelf <pre> <c4>[<c3>notice<c4>] -<gt> <c4>'<c2><target><c4>' <text>

Topic <pre> <c4>[<c3>topic<c4>] <c2><nick> sets topic<c4>: <text>
Mode <pre> <c4>[<c3>mode<c4>] <c3><nick> sets mode<c4>: <c2><modes>
ModeUser <pre> <c4>[<c3>mode<c4>] <c3><nick> sets mode<c4>: <c2><modes>
Nick <pre> <c4>[<c3>nick<c4>] <c3><nick> is now known as<c4>: <c2><newnick>
NickSelf  <pre> <c4>[<c3>nick<c4>] You're now known as<c4>: <c2><newnick>

Join <pre> <c4>[<c3>join<c4>] <c2><nick> <c4>[<c3><address><c4>] joins<c4>: <c3><chan> 
JoinSelf !Script mAx.JoinSelf
Kick <pre> <c4>[<c3>kick<c4>] <c2><knick> <c4>[<c3><kaddress><c4>] got kicked by <c3><nick> <parentext>
KickSelf <pre> <c4>[<c3>kick<c4>] You were kicked by<c4>: <c2><nick> on<c4>: <c3><chan> <parentext>
Part <pre> <c4>[<c3>part<c4>] <c2><nick> <c4>[<c3><address><c4>] parts<c4>: <c3><chan> <parentext>
Quit <pre> <c4>[<c3>quit<c4>] <c2><nick> <parentext>

Invite <pre> <c4>[<c3>invite<c4>] <c2><nick> invites you to join<c4>: <c3><chan>
ServerError <pre> <c4>[<c3>error<c4>] <text>

Rejoin <pre> <c4>[<c3>rejoining<c4>] <chan>...

DNS <pre> <c4>[<c3>dns<c4>] Looking up<c4>: <c2><address> ...
DNSError <pre> <c4>[<c3>dns<c4>] Unable to resolve<c4>: <c2><address>
DNSResolve <pre> <c4>[<c3>dns<c4>] Resolved <c3><address> to <c2><raddress>

RAW.001 <pre> <c4>[<c3>signon<c4>] <text>
RAW.002 <pre> <c4>[<c3>signon<c4>] Your host is <c3><server>, running version <c3><value>
RAW.003 <pre> <c4>[<c3>signon<c4>] This server was created <c3><value>
RAW.004 !Script return
RAW.005 <pre> <c4>[<c3>signon<c4>] Protocols supported by this server: <c3><text>

RAW.250 <pre> <c4>[<c3>signon<c4>] Total connection(s): <c3><value>
RAW.251 <pre> <c4>[<c3>signon<c4>] Users: <c3><users> Invisible: <c3><text> Servers: <c3><value>
RAW.252 <pre> <c4>[<c3>signon<c4>] Operator(s) online: <c3><value>
RAW.253 <pre> <c4>[<c3>signon<c4>] Unknown connection(s): <c3><value>
RAW.254 <pre> <c4>[<c3>signon<c4>] Number of channels formed: <c3><value>
RAW.255 <pre> <c4>[<c3>signon<c4>] Local clients: <c3><users> on <c3><value> server(s)

RAW.265 <pre> <c4>[<c3>signon<c4>] Local users: <c3><users> Max: <c3><value>
RAW.266 <pre> <c4>[<c3>signon<c4>] Global users: <c3><users> Max: <c2><value>

RAW.301 <pre> <c3>Away<c4>: <away>
RAW.302 <pre> <c4>[<c3>signon<c4>] Userhost: <c3><nick> <c4>[<c3><address><c4>]

RAW.305 <pre> <c4>[<c3>away<c4>] You are no longer marked as being away
RAW.306 <pre> <c4>[<c3>away<c4>] You have been marked as being away
RAW.307 <pre> <c3><nick><c4>: Is a registered nick

RAW.310 <pre> <c3>Available for help<c4>: <text>
RAW.311 !Script mAx.311
RAW.312 !Script %:echo %::pre  $+ %::c3 $+ Server $+ %::c4 $+ : %::wserver  $+ %::c4 $+ [ $+ %::c3 $+ %::serverinfo $+  $+ %::c4 $+ ]
RAW.313 <pre> <c3>IRC Operator<c4>: Yes
RAW.314 !Script mAx.314
RAW.315 <pre> <c4>[<c3>names<c4>] End of <c2>/who list

RAW.317 !Script mAx.317
RAW.318 <c3>::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::
RAW.319 !Script %:echo  $+ %::c2 $+ %::pre $+  $+ %::c3 Channels $+  $+ %::c4 $+ : %::chan  $+ %::c4 $+ [ $+ %::c3 $+ $comchan(%::nick,0) comchans $+  $+ %::c4 $+ ]

RAW.324 !Script return

RAW.329 !Script return

RAW.330 <pre> <c3>Auth<c4>: <value>
RAW.332 <pre> <c3>Topic<c4>: <text>
RAW.331 <pre> <c4>[<c3>topic<c4>] No topic is set
RAW.333 !Script mAx.333

RAW.341 <pre> <c4>[<c3>invite<c4>] <c2><nick> has been invited to <c3><chan>

RAW.352 !Script mAx.352

RAW.353 <pre> <c4>[<c3>names<c4>] <c2><chan><c4>: <text>

RAW.366 <pre> <c4>[<c3>names<c4>] End of <c2>/names list

RAW.369 <c3>::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::.:::

RAW.372 <pre> <c4>[<c3>motd<c4>] <text>

RAW.375 <pre> <c4>[<c3>motd<c4>] <c2>Message of the Day<c4>: <c2><value>
RAW.376 <pre> <c4>[<c3>motd<c4>] End of <c2>/motd

RAW.401 <pre> <c4>[<c3>error<c4>] No such nickname<c4> <c3><nick>
RAW.403 <pre> <c4>[<c3>error<c4>] No such channel<c4> <c3><chan>
RAW.404 <pre> <c4>[<c3>error<c4>] Cannot send to channel<c4> <c3><chan>

RAW.406 !Script mAx.406

RAW.416 <pre> <c4>[<c3>error<c4>] Too many lines in the output, restrict your query

RAW.421 <pre> <c4>[<c3>error<c4>] Unknown command<c4>:<c3> <value>

RAW.431 <pre> <c4>[<c3>error<c4>] No nickname given

RAW.433 <pre> <c4>[<c3>error<c4>] Nickname <c2><nick> is already in use

RAW.471 <pre> <c4>[<c3>error<c4>] Cannot join channel<c4>:<c3><chan> <c4>(<c3>limit<c4>)
RAW.473 <pre> <c4>[<c3>error<c4>] Cannot join channel<c4>:<c3><chan> <c4>(<c3>invite only<c4>)
RAW.474 <pre> <c4>[<c3>error<c4>] Cannot join channel<c4>:<c3><chan> <c4>(<c3>you're banned<c4>)
RAW.475 <pre> <c4>[<c3>error<c4>] Cannot join channel<c4>:<c3><chan> <c4>(<c3>invalid key<c4>)
RAW.482 <pre> <c4>[<c3>error<c4>] You're not channel operator

Echo <pre> <text>
Error <pre> <c4>[<c3>error<c4>] <text>
EchoTarget <pre> <c4>[<c3><target><c4>] <text>

CTCPSelf <pre> <c4>[<c3>ctcp<c4>] <c2><ctcp><c4>: <c3><nick> <text>
CTCPReply <pre> <c4>[<c3>ctcp<c4>] <c2><ctcp> reply<c4>: <c3><nick><chan> <c4>[<c3><text><c4>]

CTCP <pre> <c4>[<c3>ctcp<c4>] <c2><ctcp><c4>: <c3><nick> <text>
CTCPChan <pre> <c4>[<c3>ctcp<c4>] <c2><ctcp><c4>: <c3><nick>/<chan> <text>
CTCPChanSelf <pre> <c4>[<c3>ctcp<c4>] <c2><ctcp><c4>: <c3><chan> <text>
CTCPReplySelf <pre> <c4>[<c3>ctcp<c4>] <c2><ctcp> REPLY<c4>: <c3><chan> <text>

RAW.Other <pre> <text>

BaseColors 01,02,12,15
Colors 00,01,14,14,14,14,14,14,14,14,14,01,14,14,14,01,14,14,14,14,14,00,14,00,14,14
RGBColors 255,255,255 0,0,0 90,120,145 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 140,170,190 255,0,255 128,128,128 208,208,208

CLineMe 02
CLineEnemy 12
CLineFriend 12
CLineIrcOP 12

CLineOwner 01
CLineOP 01
CLineHOP 14
CLineVoice 14
CLineRegular 15

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 


[scheme1]
BaseColors 01,03,09,15
Colors 00,01,14,14,14,14,14,14,14,14,14,01,14,14,14,01,14,14,14,14,14,00,14,00,14,14
RGBColors 255,255,255 0,0,0 0,0,128 120,160,120 255,0,0 128,0,0 160,0,160 255,128,0 225,225,0 160,160,110 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLineMe 03
CLineEnemy 09
CLineFriend 09
CLineIrcOP 09

CLineOwner 01
CLineOP 01
CLineHOP 14
CLineVoice 14
CLineRegular 15

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 

[scheme2]
BaseColors 01,05,04,15
Colors 00,01,14,14,14,14,14,14,14,14,14,01,14,14,14,01,14,14,14,14,14,00,14,00,14,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 160,110,110 125,50,50 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLineMe 05
CLineEnemy 04
CLineFriend 04
CLineIrcOP 04

CLineOwner 01
CLineOP 01
CLineHOP 14
CLineVoice 14
CLineRegular 15

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 

[scheme3]
BaseColors 01,08,07,15
Colors 00,01,14,14,14,14,14,14,14,14,14,01,14,14,14,01,14,14,14,14,14,00,14,00,14,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 160,0,0 160,0,160 176,108,40 232,168,128 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLineMe 08
CLineEnemy 07
CLineFriend 07
CLineIrcOP 07

CLineOwner 01
CLineOP 01
CLineHOP 14
CLineVoice 14
CLineRegular 15

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 

[scheme4]
BaseColors 15,02,15,14
Colors 01,15,14,14,14,14,14,14,14,14,14,15,14,14,14,15,14,14,14,14,14,01,14,01,14,14
RGBColors 255,255,255 0,0,0 120,130,140 0,144,0 255,0,0 160,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208 

CLineMe 02
CLineEnemy 15
CLineFriend 15
CLineIrcOP 15

CLineOwner 15
CLineOP 15
CLineHOP 15
CLineVoice 15
CLineRegular 14

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 

[scheme5]
BaseColors 15,03,15,14
Colors 01,15,14,14,14,14,14,14,14,14,14,15,14,14,14,15,14,14,14,14,14,01,14,01,14,14
RGBColors 255,255,255 0,0,0 0,0,128 90,100,80 255,0,0 160,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208 

CLineMe 03
CLineEnemy 15
CLineFriend 15
CLineIrcOP 15

CLineOwner 15
CLineOP 15
CLineHOP 15
CLineVoice 15
CLineRegular 14

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 


[scheme6]
BaseColors 15,05,15,14
Colors 01,15,14,14,14,14,14,14,14,14,14,15,14,14,14,15,14,14,14,14,14,01,14,01,14,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 174,100,80 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208 

CLineMe 05
CLineEnemy 15
CLineFriend 15
CLineIrcOP 15

CLineOwner 15
CLineOP 15
CLineHOP 15
CLineVoice 15
CLineRegular 14

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 

[scheme7]
BaseColors 15,07,15,14
Colors 01,15,14,14,14,14,14,14,14,14,14,15,14,14,14,15,14,14,14,14,14,01,14,01,14,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 160,0,0 160,0,160 255,180,100 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208 

CLineMe 07
CLineEnemy 15
CLineFriend 15
CLineIrcOP 15

CLineOwner 15
CLineOP 15
CLineHOP 15
CLineVoice 15
CLineRegular 14

ClineCharOwner 14.
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+ 