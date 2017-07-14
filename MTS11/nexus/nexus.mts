[mts]
Name Nexus
Author Jake Ray
Email himynameisjake@bellsouth.net
Website http://www.amishrakefight.org/gfy
Description Nexus Theme v3.4 for MTS -- Not completely different from standard mIRC, but with enough variety to make it pretty or happy or some other cliche word like that.
Version 3.4
MTSVersion 1.1

Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 52,147,239 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 11,14,00,15

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 14
CLineRegular 00
CLineMe 00

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Prefix <c3>--<c1>»
ParenText <c1>-- <c2>(<c1><text><c2>)

Timestamp ON
TimestampFormat <c2>(<c3>hh<c1>:<c3>nn<c1>:<c3>sstt<c2>)

Script nexus.mrc

TextChan <c2>(<c1><cmode><c3><nick><c2>) <text>
TextChanSelf <c2>(<c1><cmode><c3><me><c2>) <text>
ActionChan <c1><cmode><c3><nick> <text>
ActionChanSelf <c1><cmode><c3><me> <text>
NoticeChan <c2>(<c3>-<c1>@<c3><nick><c1>:<c3><chan><c1>@<c3>-<c2>) <text>
Notice <c3>Notice <c2>(<c1><nick> <c3>-- <c1><address><c2>) <text>
NoticeSelf <pre> <c2>(<c3>Notice <c2>/ <c1><target><c2>) <text>
NoticeSelfChan <pre> <c2>(<c3>ChanNotice <c2>/ <c1><target><c2>) <text>
TextQuery <c2>(<c3><nick><c2>) <text>
TextQuerySelf <c2>(<c3><me><c2>) <text>
ActionQuery <c3><nick> <text>
ActionQuerySelf <c3><me> <text>
TextMsg <c3>Privmsg <c2>(<c1><nick> <c3>-- <c1><address><c2>) <text>
TextMsgSelf <pre> <c2>(<c3>Message <c2>/ <c1><target><c2>) <text>

Mode !script %:echo $+(,%::c1,-,%::c3,-,,%::c1,-) $+(,%::c3,%::nick,) sets mode $+(,%::c2,$chr(40),,%::c1,$gettok(%::modes,1,32)) $+(,%::c3,$gettok(%::modes,2-,32),,%::c2,$chr(41)) %:comments
ModeUser <c1>-<c3>-- <c3><me> sets usermode <c2>(<c1><modes><c2>)
Join <pre> <c3><nick> <c2>(<c1><address><c2>) has joined <c2>(<c1><chan><c2>)
JoinSelf <c1>-<c3>-- <c3>Joined <c1>: <c3><chan>
Part <c1>«<c3>-- <c3><nick> <c2>(<c1><address><c2>) has parted <c2>(<c1><chan><c2>) <parentext>

Kick <c1>«<c3>-- <knick> was kicked from <c2>(<c1><chan><c2>) by <c3><nick> <parentext>
KickSelf <c1>«<c3>-- You were kicked from <c1><chan> by <c3><nick> <c2>(<c1><text><c2>) 

Quit !script %:echo $+(,%::c1,«,,%::c3,--) $+(,%::c3,%::nick,) $+(,%::c2,$chr(40),,%::c1,%::address,,%::c2,$chr(41),) has left IRC $iif(%::text,$+(,%::c2,$chr(40),,%::c1,%::text,,%::c2,$chr(41))) %:comments

Topic <c1>-<c3>-- <c3><nick> changes the topic to<c1>: <text>

Nick <c1>-<c3>-<c1>- <nick> changes nick to <c1><newnick>
NickSelf <c1>-<c3>- <c1>- Your nick is now <c1><newnick>

Invite <c1>-<c3>-- <nick> invites you to join <c1><chan>

ServerError <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>-<text>

Rejoin <c1>-<c3>-- <c3>Rejoining <c1>: <c2><chan>

Ctcp <c3>Ctcp <c2>(<c1><nick> <c3>-- <c1><address> <c2>) <c1><ctcp> <text> 
CtcpChan <c2>(<c3>-<c1>#<c3><nick><c1>:<c3><chan><c1>#<c3>-<c2>) <c1><ctcp> <text>
CtcpSelf <pre> <c2>(<c3>CTCP <c2>/ <c1><target><c2>) <c1><ctcp> <text>
CtcpChanSelf <pre> <c2>(<c3>CTCP-Chan <c2>/ <c1><target><c2>) <c1><ctcp> <text>
CtcpReply <c3>--<c1>- <c3>CTCP-Reply <c2>(<c1><nick> <c3>-- <c1><address> <c3>-- <c3><ctcp><c2>) <text>
CtcpReplySelf <pre> <c2>(<c3>CTCP-Reply <c2>/ <c1><target><c2>) <c1><ctcp> <text>

Notify <c1>-<c3>-<c1>- <c3><nick> is now online <c2>(<c1><text><c2>)
UNotify <c1>-<c3>-<c1>- <c3><nick> is now offline <c2>(<c1><text><c2>)

Wallop <c3>Wallop <c2>(<c1><nick> <c3>-- <c1><address><c2>) <text>
NoticeServer <c3>Server <c2>(<c1><server><c2>) <text>

DNS <c1>-<c3>-<c1>- <c2>(<c1>DNS<c2>) Attempting to resolve <c1><nick><address>
DNSError !script %:echo $+(,%::c1,-,%::c3,-,,%::c1,-) $+(,%::c2,$chr(40),,%::c1,DNS,,%::c2,$chr(41),) Unable to resolve $+(,%::c1,$iif(%::nick,%::nick,%::address))
DNSResolve !script %:echo $+(,%::c1,-,%::c3,-,,%::c1,-) $+(,%::c2,$chr(40),,%::c1,DNS,,%::c2,$chr(41),) Resolved $+(,%::naddress,) to $+(,%::c2,$chr(40),,%::c1,%::iaddress,,%::c2,$chr(41),) %:comments

Echo <pre> <c3><text>
EchoTarget <pre> <c3><text>
Error <c1>-<c3>-- <c2>(<c1>Error<c2>) <text>

Load <pre> <c3>Nexus theme <c1>v1.5 loaded
Unload <pre> <c3>Nexus theme <c1>v1.5 unloaded

raw.001 <pre> <text>
raw.002 <c3><server> <c1>-- <c3><value> 
raw.003 <c1>-<c3>--Server created on <c1><value>
raw.005 <c1>-<c3>-<c1>- <c3>Server Modes <c1>: <c3><text>
raw.221 <c1>-<c3>-<c1>- <c3>UserModes <c1>: <c3><modes>
raw.250 !script nexus.lusersstart
raw.251 !script nexus.lusersstart
raw.252 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Operators,) $+(,%::c1,:,) $+(,%::c3,%::value)
raw.253 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Unknown,) $+(,%::c1,:,) $+(,%::c3,%::value)
raw.254 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Channels,) $+(,%::c1,:,) $+(,%::c3,%::value)
raw.255 !script nexus.lusersend
raw.265 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Local Users,) $+(,%::c1,:,) $+(,%::c3,%::users) $+(,%::c2,$chr(40),,%::c1,%::value,$chr(32),,%::c3,max,,%::c2,$chr(41))
raw.266 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Global Users,) $+(,%::c1,:,) $+(,%::c3,%::users) $+(,%::c2,$chr(40),,%::c1,%::value,$chr(32),,%::c3,max,,%::c2,$chr(41))
raw.329 !script nexus.join
raw.301 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Away) $+(,%::c1,:,) $+(,%::c3,%::text)
raw.302 <c1>-<c3>-- <c3>Userhost <c2>(<c1><nick><c2>) <c3><address>
raw.309 !script %:echo $str( ,3)  $+ %::c1 $+ »  $+ %::c3 $+  $+ $iif(%isregd == is,Registered Nick,Unregistered Nick) $+ 
raw.311 !script nexus.whoisstart
raw.312 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Server,) $+(,%::c1,:,) $+(,%::c3,$replace(%::wserver,$chr(46),$+(,%::c1,$chr(46),,%::c3))) $+(,%::c2,$chr(40),,%::c1,%::serverinfo,,%::c2,$chr(41))
raw.313 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Operator) $+(,%::c1,:,) $+(,%::c3,Yes)
raw.314 !script nexus.whowasstart
raw.315 !script nexus.whoend
raw.317 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Idle,) $+(,%::c1,:,) $+(,%::c3,$remove($duration(%::idletime),ks,k,ays,ay,rs,r,ins,in,ecs,ec,$chr(32))) $+(,%::c2,$chr(40),,%::c3,Signed on) $+(,%::c1,$remove($duration($calc($ctime - $ctime(%::signontime))),ks,k,ays,ay,rs,r,ins,in,ecs,ec,$chr(32)),,%::c3) since $+($replace($asctime($ctime(%::signontime),ddd hh:nn:sstt),:,$+(,%::c1,:,,%::c3),/,$+(,%::c1,/,,%::c3)),,%::c2,$chr(41))
raw.318 !script %:echo $+(,%::c2,$chr(91),,%::c3,/whois,$chr(32),,%::c1,%::nick,,%::c2,$chr(93),$str(—,35))
raw.319 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Channels,) $+(,%::c1,:,)) $+(,%::c3,$replace(%::chan,@,$+(,%::c1,@,),+,$+(,%::c1,+,)))
raw.324 <c1>-<c3>-<c1>- <c3>Channel Modes <c1>: <c3><modes>
raw.330 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Registered,) $+(,%::c1,:,) $iif($gettok(%::text,1,32) == is,$gettok(%::text,4,32),$gettok(%::text,1,32))
raw.331 <c1>-<c3>-<c1>- <c3>No topic set in <c1><chan>
raw.332 !script nexus.topicstart
raw.333 !script nexus.topicend
raw.338 !script %:echo $str( ,3) $+(,%::c1,»,) $+(,%::c3,Actual Host,) $+(,%::c1,:,) $+(,%::c3,$replace(%::chan,@,$+(,%::c1,@,,%::c3),$chr(46),$+(,%::c1,$chr(46),,%::c3))) $+(,%::c2,$chr(40),,%::c1,$remove($gettok(%::text,2,32),[,]),,%::c2,$chr(41),)
raw.352 !script nexus.who
raw.353 !script nexus.namesstart
raw.366 !script nexus.namesend
raw.369 !script %:echo $+(,%::c2,$chr(91),,%::c3,/whowas,$chr(32),,%::c1,%::nick,,%::c2,$chr(93),$str(—,35))
raw.375 !script %:echo $+(,%::c2,$chr(91),,%::c3,/motd,$chr(32),,%::c1,Start,,%::c2,$chr(93),$str(—,35))
raw.376 !script %:echo $+(,%::c2,$chr(91),,%::c3,/whowas,$chr(32),,%::c1,End,,%::c2,$chr(93),$str(—,35))
raw.401 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>No such nickname <c1><nick>
raw.402 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>No such server <c1><nick>
raw.403 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>No such channel <c1><chan>
raw.422 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Motd file is missing
raw.471 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Unable to send to <c1><chan>
raw.421 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Unknown command <c1><value>
raw.422 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Motd file is missing
raw.433 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Nickname in use <c1><nick>
raw.442 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>You aren't on <c1><chan>
raw.471 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Channel <c1><chan> is full <c2>(<c1>+l<c2>)
raw.473 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Channel <c1><chan> is invite only <c2>(<c1>+i<c2>)
raw.474 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Banned from <c1><chan> <c2>(<c1>+b<c2>)
raw.475 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>Key required for <c1><chan> <c2>(<c1>+k<c2>)
raw.482 <c1>-<c3>-<c1>- <c2>(<c1>Error<c2>) <c3>You aren't an op in <c1><chan>
raw.other <c1>-<c3>-<c1>- <text>

scheme1 Red
scheme2 Orange
scheme3 Cyan
scheme4 Teal
scheme5 Green
scheme6 Purple
scheme7 Blue (Light)
scheme8 Blue (Medium)
scheme9 Blue (Dark)
scheme10 Red (Light)
scheme11 Red (Medium)
scheme12 Red (Dark)
scheme13 Green (Light)
scheme14 Green (Medium)
scheme15 Green (Dark)
scheme16 Royal
scheme17 Cinnamon
scheme18 Forest
scheme19 Slate
scheme20 Hunter
scheme21 Tiger
scheme22 Laser
scheme23 Water
scheme24 The Gray One
scheme25 Tangerine
scheme26 Sand
scheme27 Orangey
scheme28 Verdana
scheme29 OtherBlue
scheme30 Gold

[scheme1]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 04,14,00,15

CLineOwner 04
CLineOP 04
CLineHOP 04
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme2]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 136,0,136 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 07,14,00,15

CLineOwner 07
CLineOP 07
CLineHOP 07
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme3]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 11,14,00,15

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme4]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 10,14,00,15

CLineOwner 10
CLineOP 10
CLineHOP 10
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme5]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 03,14,00,15

CLineOwner 03
CLineOP 03
CLineHOP 03
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme6]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 196,0,186 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 06,14,00,15

CLineOwner 06
CLineOP 06
CLineHOP 06
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme7]
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01,01,00
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,210 255,0,255 107,107,107 210,210,210
BaseColors 12,14,01,01

CLineOwner 02
CLineOP 02
CLineHOP 02
CLineVoice 14
CLineRegular 01
CLineMe 01

[scheme8]
Colors 15,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,15,01,15,01,01,01,15
RGBColors 255,255,255 0,0,0 0,0,100 0,147,0 255,0,0 127,0,0 136,0,136 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,220 255,0,255 127,127,127 230,230,230
BaseColors 12,02,02,01

CLineOwner 02
CLineOP 02
CLineHOP 02
CLineVoice 12
CLineRegular 01
CLineMe 01

[scheme9]
Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,00,00,02
RGBColors 255,255,255 0,0,0 0,0,40 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 75,102,230 0,255,255 0,0,252 255,0,255 137,137,137 220,220,220
BaseColors 10,14,00,00

CLineOwner 10
CLineOP 10
CLineHOP 10
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme10]
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01,01,00
RGBColors 255,255,255 0,0,0 0,0,157 0,147,0 180,30,45 95,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 107,107,107 210,210,210
BaseColors 04,14,01,01

CLineOwner 05
CLineOP 05
CLineHOP 05
CLineVoice 14
CLineRegular 01
CLineMe 01

[scheme11]
Colors 15,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,15,01,15,01,01,01,15
RGBColors 255,255,255 0,0,0 0,0,157 0,147,0 180,30,45 95,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 107,107,107 230,230,230
BaseColors 04,05,05,01

CLineOwner 05
CLineOP 05
CLineHOP 05
CLineVoice 14
CLineRegular 01
CLineMe 01

[scheme12]
Colors 05,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,05,00,05,00,00,00,05
RGBColors 255,255,255 0,0,0 0,0,157 0,147,0 255,0,0 40,0,0 156,0,156 252,107,1 255,255,0 0,252,0 230,75,102 0,255,255 0,0,252 255,0,255 137,137,137 220,220,220
BaseColors 10,14,00,00

CLineOwner 10
CLineOP 10
CLineHOP 10
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme13]
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01,01,00
RGBColors 255,255,255 0,0,0 0,0,127 0,167,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,200,0 0,147,147 0,255,255 0,0,210 255,0,255 107,107,107 210,210,210
BaseColors 03,14,01,01

CLineOwner 03
CLineOP 03
CLineHOP 03
CLineVoice 14
CLineRegular 01
CLineMe 01

[scheme14]
Colors 15,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,15,01,15,01,01,01,15
RGBColors 255,255,255 0,0,0 0,0,127 0,107,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,185,0 0,147,147 0,255,255 0,0,210 255,0,255 107,107,107 230,230,230
BaseColors 09,03,03,01

CLineOwner 03
CLineOP 03
CLineHOP 03
CLineVoice 09
CLineRegular 01
CLineMe 01

[scheme15]
Colors 03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,00,03,00,00,00,03
RGBColors 255,255,255 0,0,0 0,0,127 0,40,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 102,230,75 0,255,255 0,0,252 255,0,255 137,137,137 220,220,220
BaseColors 10,14,00,00

CLineOwner 10
CLineOP 10
CLineHOP 10
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme16]
Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,00,00,02
RGBColors 255,255,255 0,0,0 10,11,32 0,147,0 255,0,0 127,0,0 136,0,136 252,127,0 255,255,0 0,252,0 180,183,246 115,118,181 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 10,11,00,00

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 10
CLineRegular 00
CLineMe 00

[scheme17]
Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,00,00,02
RGBColors 255,255,255 0,0,0 50,0,0 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 246,180,183 181,115,118 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 10,11,00,00

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 10
CLineRegular 00
CLineMe 00

[scheme18]
Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,00,00,02
RGBColors 255,255,255 0,0,0 10,32,11 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 180,246,183 115,181,118 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 10,11,00,00

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 10
CLineRegular 00
CLineMe 00

[scheme19]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 54,66,76 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 74,119,195 0,0,252 255,0,255 157,157,187 210,210,210
BaseColors 11,14,00,00

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme20]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 3,33,6 0,0,127 35,152,67 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,157,127 210,210,210
BaseColors 03,14,00,00

CLineOwner 03
CLineOP 03
CLineHOP 03
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme21]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 136,0,136 252,157,56 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 07,14,00,15

CLineOwner 07
CLineOP 07
CLineHOP 07
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme22]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,230,230 18,18,18 0,0,127 0,147,0 235,87,45 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 145,127,127 210,210,210
BaseColors 04,14,00,15

CLineOwner 04
CLineOP 04
CLineHOP 04
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme23]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 230,230,245 18,18,27 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 45,87,195 255,0,255 127,127,145 210,210,210
BaseColors 12,14,00,00

CLineOwner 12
CLineOP 12
CLineHOP 12
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme24]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 240,240,240 20,20,20 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 99,99,99 150,150,150
BaseColors 15,14,00,00

CLineOwner 14
CLineOP 14
CLineHOP 14
CLineVoice 15
CLineRegular 00
CLineMe 00

[scheme25]
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01,01,00
RGBColors 220,220,220 0,0,0 0,0,157 0,147,0 255,0,0 95,0,0 156,0,156 215,130,32 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 100,100,100 210,210,210
BaseColors 07,14,01,01

CLineOwner 07
CLineOP 07
CLineHOP 07
CLineVoice 14
CLineRegular 01
CLineMe 01

[scheme26]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 245,255,232 149,158,126 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 79,88,45 0,0,252 255,0,255 56,65,49 210,210,210
BaseColors 11,14,00,00

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 14
CLineRegular 01
CLineMe 01

[scheme27]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 232,232,234 20,22,25 0,0,127 0,147,0 255,0,0 127,0,0 136,0,136 252,127,3 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 07,14,00,15

CLineOwner 07
CLineOP 07
CLineHOP 07
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme28]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 52,147,239 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 11,14,00,15

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 14
CLineRegular 00
CLineMe 00

FontDefault Verdana,10
FontChan Verdana,10
FontQuery Verdana,10

[scheme29]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 0,177,195 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 11,14,00,15

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 14
CLineRegular 00
CLineMe 00

[scheme30]
Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 207,197,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
BaseColors 08,14,00,15

CLineOwner 08
CLineOP 08
CLineHOP 08
CLineVoice 14
CLineRegular 00
CLineMe 00


