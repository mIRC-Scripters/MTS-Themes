[mts]
; Theme information
Name unknown
MTSVersion 1.1
Version v1
Author sn0w
EMail somaio@lover-boy.com
Website www.somaio.cjb.net
Script unknown.mrc
Timestamp ON
TimestampFormat [hh:nnt]
Prefix <c1>צ<c3>צ<c2>צ
BaseColors 14,00,15,02
RGBColors 255,255,255 0,0,0 200,200,200 0,130,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
ParenText <pre> <c2><text>
TextChanSelf <c1>(<c3><cmode><c2><me><c1>)<c2> <text>
ActionChan <c1>ששש <c2><cmode><c3><nick><c2> <text>
FontChan ibmpc,12
FontQuery ibmpc,12
Colors 01,14,14,14,14,14,14,14,14,14,14,00,14,14,00,00,03,14,14,14,00,01,00,01,00,14
ActionChanSelf <c1>ששש <c3><cmode><c4><me><c2> <text>
NoticeChan <c1>-<c3><nick><c1>:<c3><target><c1>-<c2> <text>
Notice <c1>-<c3><nick><c1>-<c2> <text>
NoticeSelf <c1>-<c4><me><c1>-<c2> <text>
NoticeSelfChan <c1>-<c4><me><c1>:<c2><target><c1>-<c2> <text>
TextQuery <c1>(<c3><nick><c1>)<c2> <text>
TextQuerySelf <c1>(<c4><me><c1>)<c2> <text>
ActionQuery <c1>ששש <c3><nick><c2> <text>
ActionQuerySelf <c1>ששש <c4><me><c2> <text>
TextMsg <c1>(<c3><nick><c1>)<c2> <text>
TextMsgSelf <c1>(<c4><me><c1>)<c2> <text>
Mode <pre> <c1>mode(<c2><chan><c1>) <c3><nick> <c1>(<c2><modes><c1>)
Join <pre> <c1>join(<c2><chan><c1>) <c3><nick> <c1>(<c2><address><c1>)
JoinSelf <pre> <c2>welcome <c1><chan>
Part <pre> <c1>part(<c2><chan><c1>) <c3><nick> <c1>(<c2><address><c1>) <c4><text>
Quit <pre> <c1>quit(<c2><nick><c1>) <c3><text>
Topic <pre> <c1>topic(<c2><chan><c1>) <c3><text> <c1>(<c2>by <nick><c1>)
Nick <pre> <c1>nick(<c2><nick><c1>) <c3>change to <c4><newnick>
NickSelf <pre> <c1>nick(<c2><nick><c1>) <c3>change to <c4><newnick>
Invite <pre> <c1>invite(<c2><chan><c1>) <c3>by <c4><nick>
ServerError <pre> <c1>error(<c2><text><c1>)
Rejoin <pre> <c2>rejoin <c1><chan>
Ctcp <pre> <c1><nick> <c2><ctcp>
CtcpChan <pre> <c1><nick><c2>:<c1><chan> <c2><ctcp>
CtcpReply <pre> <c1><nick> <c2><ctcp> <c1><text>
Kick <pre> <c1>kick(<c2><chan><c1>) <c3><knick> <c1>(<c2><text><c1>) <c4>by <nick>
TextChan <c1>(<c2><cmode><c3><nick><c1>)<c2> <text>
Notify <pre> <c1>notify(<c2><nick><c1>) <c3>online <c2><text>
UNotify <pre> <c1>unotify(<c2><nick><c1>) <c3>offline
DNS <pre> <c1>dns request(<c2><address><c1>)
DNSError <pre> <c2>dns error
DNSResolve <pre> <c1>dns resolved(<c2><address><c1>)
Error <pre> <c2>error <c1><text>
Load !Script unk.load
Unload <pre> <c1>unknown <c2>unloaded
ModeUser <pre> <c1>mode(<c2><me><c1>) <c3><modes>
KickSelf <pre> <c1>kick(<c2><chan><c1>) <c3><me> <c1>(<c2><text><c1>) <c4>by <nick>
CtcpSelf <pre> <c1><nick> <c2><ctcp>
NoticeServer !Script %:echo $+(,%::c1,%::nick,,%::c2) $remove(%::text,***)
RAW.311 !Script unk.whois
RAW.319 !Script unk.chan
RAW.312 !Script unk.serv
RAW.301 !Script unk.away
RAW.318 !Script unk.end
RAW.317 !Script unk.idle
RAW.307 !Script halt
Scheme2 blue
Scheme3 yellow
Scheme4 green
Scheme5 light green
Scheme1 red
Scheme6 pink
Scheme7 white bg
Description this shit is from my script unknown (my first mts thm)
RAW.332 <pre> <c1>topic <c2><text>
RAW.333 <pre> <c1>by <c2><nick> <c1>on <c2><text>
RAW.Other <pre> <c2><text>
RAW.324 <pre> <c1>modes <c2><modes>
RAW.329 !Script halt
RAW.335 !Script halt
CLineOwner 14
CLineOp 14
CLineHOp 14
CLineVoice 15
CLineRegular 00
CLineMe 14
CLineFriend 14
CLineEnemy 15
CLineIrcOp 14
FontDefault Terminal,12
CtcpChanSelf <pre> <c1><chan> <c2><ctcp>
CtcpReplySelf <pre> <c1><me> <c2><ctcp> <c1><text>
 
[Scheme1]
Timestamp ON
TimestampFormat [hh:nnt]
BaseColors 04,00,15,02
Colors 01,14,14,14,14,14,14,14,14,14,14,00,14,14,00,00,14,14,14,14,00,01,00,01,00,14
CLineOwner 04
CLineOp 04
CLineHOp 04
CLineVoice 15
CLineRegular 00
CLineMe 04
CLineFriend 04
CLineEnemy 15
CLineIrcOp 14
 
[Scheme2]
Colors 01,14,14,14,14,14,14,14,14,14,14,00,14,14,00,00,03,14,14,14,00,01,00,01,00,14
BaseColors 11,00,15,02
CLineOwner 11
CLineHOp 11
CLineVoice 15
CLineRegular 00
CLineMe 11
CLineFriend 11
CLineEnemy 15
CLineIrcOp 11
 
[Scheme3]
BaseColors 08,00,15,02
 
BaseColors 11,00,15,02
CLineIrcOp 08
CLineEnemy 15
CLineFriend 08
CLineMe 08
CLineRegular 00
CLineVoice 15
CLineHOp 14
CLineOp 08
CLineOwner 08
 
[Scheme4]
BaseColors 03,00,15,02
CLineOwner 03
CLineOp 03
CLineHOp 03
CLineVoice 15
CLineRegular 00
CLineMe 03
CLineFriend 03
CLineEnemy 15
CLineIrcOp 03
 
[Scheme5]
BaseColors 09,00,15,02
CLineIrcOp 09
CLineEnemy 15
CLineFriend 09
CLineMe 09
CLineRegular 00
CLineVoice 15
CLineHOp 09
CLineOp 09
CLineOwner 09
 
[Scheme6]
BaseColors 13,00,15,02
CLineOwner 13
CLineOp 13
CLineHOp 13
CLineVoice 15
CLineRegular 00
CLineMe 13
CLineFriend 13
CLineEnemy 15
CLineIrcOp 13
 
[Scheme7]
Timestamp ON
TimestampFormat [hh:nnt]
BaseColors 02,01,14,07
Colors 00,14,14,14,14,14,14,14,14,14,14,01,14,14,01,01,14,14,14,14,01,00,01,00,01,14
RGBColors 255,255,255 0,0,0 0,103,154 0,130,0 255,0,0 128,0,0 160,0,160 0,0,255 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
 
CLineOwner 14
CLineOp 14
CLineHOp 14
CLineVoice 02
CLineRegular 01
CLineMe 14
CLineFriend 14
CLineEnemy 02
CLineIrcOp 14
 
