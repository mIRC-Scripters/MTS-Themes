[mts]
Name TotalFusion
Author M1r0
EMail m1r0@mailx.ch
Website www.miro.mxx.ch
Description My theme.
Version 1.1
MTSVersion 1.1
Script totalfusion.mrc

Timestamp ON
TimestampFormat 12[HH12:nn12:ss12]

Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,02
RGBColors 255,255,255 0,0,0 17,43,57 0,189,0 255,0,0 255,13,215 211,201,3 252,127,0 255,255,0 125,255,125 0,137,183 119,198,255 0,128,255 90,234,237 145,145,145 196,196,196
BaseColors 00

FontDefault Tahoma,11
FontQuery Tahoma,15
FontChan Tahoma,14

CLineOwner 00
CLineOP 08
CLineHOP 09
CLineVoice 06
CLineRegular 00
CLineEnemy 04
CLineMe 07

Prefix 11:12|11:
ParenText 12(<c1><text>12)

TextChan 12[6<cmode><nick>12]: 8 <text>
TextChanSelf 4[6<cmode><me>4]: 7 <text>
ActionChan 12: 6<cmode><nick> <text>
ActionChanSelf 8: 6<cmode><me> <text>

NoticeChan 13-<nick>6@<chan>13- <text>
Notice 13-<nick>13- <text>
NoticeSelf Notice> 13-<target>13- <text>
NoticeSelfChan Notice> 13-<target>13- <text>

TextQuery 12[<nick>12]: <text>
TextQuerySelf 4[<me>4]: <text>
ActionQuery 12: <nick> <text>
ActionQuerySelf 4: <me> <text>
TextMsg 12[<nick>12]: <text>
TextMsgSelf -> 4*<target>4* <text>

Mode <pre> 6Mode:6 (<c1><nick>6) sets 6(<c1><modes>6)
ModeUser <pre> 6UserMode:6 is now 6(<c1><modes>6)
Join <pre> 3Join:3 (<c1><nick>3) (<c1><address>3)
JoinSelf <pre> 3Joined:3 (<c1><chan>3)
Part <pre> 4Part:4 (<c1><nick>4) (<c1><address>4) <parentext>
Kick <pre> 4Kick:4 (<c1><knick>4) was kicked by (<c1><nick>4) <parentext>
KickSelf <pre> 4Kick:4 (<c1><me>4) was kicked by (<c1><nick>4) <parentext>
Quit <pre> 4Quit:4 (<c1><nick>4) (<c1><address>4) <parentext>
Topic <pre> 13Topic:13 (<c1><nick>13) changes topic to <parentext>
Nick <pre> 3Nick:3 (<c1><nick>3) is now known as (<c1><newnick>3)
NickSelf <pre> 3Nick:3 (<c1><me>3) is now known as (<c1><newnick>3)
Invite <pre> 9Invite:9 (<c1><nick>9) invites you to join (<c1><chan>9)
ServerError <pre> 4Error:4 <text>
Rejoin <pre> 9Rejoining:9 (<c1><chan>9)
Ctcp 5<<<nick>5>> <ctcp> <text>
CtcpChan 5<<<nick>5@<chan>5>> <ctcp> <text>
CtcpSelf -> 5<<<target>5>> <ctcp> <text>
CtcpChanSelf -> 5<<<target>5>> <ctcp> <text>
CtcpReply 5!<nick>5! <ctcp> <text>
CtcpReplySelf -> 5!<target>5! <ctcp> <text>
Notify <pre> 13Notify:13 (<c1><nick>13) is now online!
UNotify <pre> 13UnNotify:13 (<c1><nick>13) is now offline!
Wallop <pre> 13Wallop:13 (<c1><nick>13) <text>
NoticeServer 13-<nick>13- <text>
DNS <pre> 12DNS:12 resolving <address>...
DNSError <pre> 12DNS:12 unable to resolve <address>
DNSResolve <pre> 12DNS:12 resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 4Error:4 <text>
Load <pre> 13(11T12otal 11F12usion13) 10theme by M1r0 loaded.
Unload <pre> 13(11T12otal 11F12usion13) 10theme by M1r0 unloaded.

Whois !script TotalFusion.whois
Whowas !script TotalFusion.whowas

RAW.002 <pre> 12Host:12 (<c1><server>12) running version (<c1><value>12)
RAW.003 <pre> 12Server created on:12 (<c1><value>12)
RAW.005 <pre> 12Protocols supported:12 (<c1><text>12)
RAW.250 <pre> 12Total connections:12 (<c1><value>12)
RAW.251 <pre> 12Users:12 (<c1><users>12), Invisible: (<c1><text>12), Servers: (<c1><value>12)
RAW.252 <pre> 12Operators online:12 (<c1><value>12)
RAW.253 <pre> 12Unknown connections:12 (<c1><value>12)
RAW.254 <pre> 12Channels formed:12 (<c1><value>12)
RAW.255 <pre> 12Local clients:12 (<c1><users>12) on (<c1><value>12) server(s)
RAW.265 <pre> 12Local users:12 (<c1><users>12) Max: (<c1><value>12)
RAW.266 <pre> 12Global users:12 (<c1><users>12) Max: (<c1><value>12)
RAW.303 <pre> (<c1><nick>12) is online
RAW.315 <pre> 12End of (<c1>/who12) list for (<c1><chan>12)
RAW.324 <pre> 12Modes in (<c1><chan>12):12 <modes>
RAW.329 !script %:echo %::pre 12Channel created on ( $+ %::c1 $+ $asctime(%::text,dddd mmmm dd HH:nn:ss yyyy) $+ 12)
RAW.330 !script set -u4 %::TotalFusionwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 <pre> 12Topic:12 (<c1><text>12)
RAW.333 <pre> 12Set by:12 (<c1><nick>12) on (<c1><text>12)
RAW.341 <pre> 12Invite:12 (<c1><nick>12) has been invited to join (<c1><chan>12)
RAW.352 <pre> 12/Who:12 <nick> (<c1><address>12) <realname>
RAW.353 <pre> 12/Names:12 (<c1><chan>12) <text>
RAW.366 <pre> 12End of (<c1>/names12) list for (<c1><chan>12)
RAW.369 !script
RAW.372   <c2> <text>
RAW.376 <pre> 12End of (<c1>/motd12)
RAW.391 <pre> 12Date:12 (<c1><text>12)
RAW.401 <pre> 13No such nickname:13 (<c1><nick>13)
RAW.403 <pre> 13No such channel:13 (<c1><chan>13)
RAW.404 <pre> 13Unable to send message to (<c1><chan>13)
RAW.421 <pre> 13Invalid command:13 (<c1><value>13)
RAW.433 <pre> 13Nickname in use:13 (<c1><nick>13)
RAW.442 <pre> 13You're not on that channel:13 (<c1><chan>13)
RAW.443 <pre> 13User already in channel:13 (<c1><nick>13)
RAW.461 <pre> 13Not enough parameters:13 (<c1><value>13)
RAW.471 <pre> 13Can't join <chan>:13 (<c1>full (+l)13)
RAW.473 <pre> 13Can't join <chan>:13 (<c1>invite only (+i)13)
RAW.474 <pre> 13Can't join <chan>:13 (<c1>you're banned (+b)13)
RAW.475 <pre> 13Can't join <chan>:13 (<c1>requires key (+k)13)
RAW.482 <pre> 13You're not opped on (<c1><chan>13)
RAW.Other <pre> <text>

Scheme1 M1r0 Style

[Scheme1]
RGBColors 255,255,255 0,0,0 17,43,57 0,189,0 255,0,0 255,13,215 211,201,3 252,127,0 255,255,0 125,255,125 0,137,183 119,198,255 0,128,255 90,234,237 145,145,145 196,196,196
BaseColors 11
Mode 06:8:6: 6Mode:6 (<c1><nick>6) sets 6(<c1><modes>6)
ModeUser 06:8:6: 6UserMode:6 is now 6(<c1><modes>6)
Join 03:9:3: 3Join:03 (<c1><nick>03) (<c1><address>03)
JoinSelf 03:9:3: 3Joined:03 (<c1><chan>03)
Part 04::: 4Part:12 (<c1><nick>12) (<c1><address>12) <parentext>
Kick 04::: 4Kick:04 (<c1><knick>04)12 was kicked by 04(<c1><nick>04) <parentext>
KickSelf 04::: 4Kick:04 (<c1><me>04)12 was kicked by 04(<c1><nick>04) <parentext> 8W6o0t !8!6!
Quit 04::: 4Quit:04 (<c1><nick>04) (<c1><address>04) <parentext>
Invite 03::: 12Invite:03 (<c1><nick>03)12 invites you to join 03(<c1><chan>03)
Topic 13:12:13: 13Topic:13 (<c1><nick>13) changes topic to <parentext>
Nick 9:3:9: 3Nick:3 (<c1><nick>3) is now known as (<c1><newnick>3)
NickSelf 9:3:9: 3Nick:3 (<c1><me>3) is now known as (<c1><newnick>3)
