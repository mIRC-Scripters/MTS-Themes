[mts]
Name Water
Author greeny
EMail greeny@nnscript.de
Website www.nnscript.de
Description Water MTS theme created for NoNameScript, works in any MTS engine.
Version 1.31
MTSVersion 1.1
Script water.mrc

Timestamp ON
TimestampFormat 11[HH11:nn11:ss11]

Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,02
RGBColors 255,255,255 0,0,0 24,60,82 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196
BaseColors 00

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

CLineOwner 00
CLineOP 00
CLineHOP 11
CLineVoice 11
CLineRegular 10
CLineEnemy 04
CLineMe 07

Prefix 11:::
ParenText 11(<c1><text>11)

TextChan 11[<cmode><nick>11]: <text>
TextChanSelf 11[<cmode><me>11]: <text>
ActionChan 11: <cmode><nick> <text>
ActionChanSelf 11: <cmode><me> <text>

NoticeChan 11-<nick>11@<chan>11- <text>
Notice 11-<nick>11- <text>
NoticeSelf Notice> 11-<target>11- <text>
NoticeSelfChan Notice> 11-<target>11- <text>

TextQuery 11[<nick>11]: <text>
TextQuerySelf 11[<me>11]: <text>
ActionQuery 11: <nick> <text>
ActionQuerySelf 11: <me> <text>
TextMsg 11[<nick>11]: <text>
TextMsgSelf -> 11*<target>11* <text>

Mode <pre> 11Mode:11 (<c1><nick>11) sets 11(<c1><modes>11)
ModeUser <pre> 11UserMode:11 is now 11(<c1><modes>11)
Join <pre> 11Join:11 (<c1><nick>11) (<c1><address>11)
JoinSelf <pre> 11Joined:11 (<c1><chan>11)
Part <pre> 11Part:11 (<c1><nick>11) (<c1><address>11) <parentext>
Kick <pre> 11Kick:11 (<c1><knick>11) was kicked by (<c1><nick>11) <parentext>
KickSelf <pre> 11Kick:11 (<c1><me>11) was kicked by (<c1><nick>11) <parentext>
Quit <pre> 11Quit:11 (<c1><nick>11) (<c1><address>11) <parentext>
Topic <pre> 11Topic:11 (<c1><nick>11) changes topic to <parentext>
Nick <pre> 11Nick:11 (<c1><nick>11) is now known as (<c1><newnick>11)
NickSelf <pre> 11Nick:11 (<c1><me>11) is now known as (<c1><newnick>11)
Invite <pre> 11Invite:11 (<c1><nick>11) invites you to join (<c1><chan>11)
ServerError <pre> 11Error:11 <text>
Rejoin <pre> 11Rejoining:11 (<c1><chan>11)
Ctcp 11?<nick>11? <ctcp> <text>
CtcpChan 11?<nick>11@<chan>11? <ctcp> <text>
CtcpSelf -> 11?<target>11? <ctcp> <text>
CtcpChanSelf -> 11?<target>11? <ctcp> <text>
CtcpReply 11!<nick>11! <ctcp> <text>
CtcpReplySelf -> 11!<target>11! <ctcp> <text>
Notify <pre> 11Notify:11 (<c1><nick>11) is now online!
UNotify <pre> 11UnNotify:11 (<c1><nick>11) is now offline!
Wallop <pre> 11Wallop:11 (<c1><nick>11) <text>
NoticeServer 11-<nick>11- <text>
DNS <pre> 11DNS:11 resolving <address>...
DNSError <pre> 11DNS:11 unable to resolve <address>
DNSResolve <pre> 11DNS:11 resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 11Error:11 <text>
Load <pre> (<c1>Water11) theme by greeny loaded.
Unload <pre> (<c1>Water11) theme by greeny unloaded.

Whois !script water.whois
Whowas !script water.whowas

RAW.002 <pre> 11Host:11 (<c1><server>11) running version (<c1><value>11)
RAW.003 <pre> 11Server created on:11 (<c1><value>11)
RAW.005 <pre> 11Protocols supported:11 (<c1><text>11)
RAW.250 <pre> 11Total connections:11 (<c1><value>11)
RAW.251 <pre> 11Users:11 (<c1><users>11), Invisible: (<c1><text>11), Servers: (<c1><value>11)
RAW.252 <pre> 11Operators online:11 (<c1><value>11)
RAW.253 <pre> 11Unknown connections:11 (<c1><value>11)
RAW.254 <pre> 11Channels formed:11 (<c1><value>11)
RAW.255 <pre> 11Local clients:11 (<c1><users>11) on (<c1><value>11) server(s)
RAW.265 <pre> 11Local users:11 (<c1><users>11) Max: (<c1><value>11)
RAW.266 <pre> 11Global users:11 (<c1><users>11) Max: (<c1><value>11)
RAW.303 <pre> (<c1><nick>11) is online
RAW.315 <pre> 11End of (<c1>/who11) list for (<c1><chan>11)
RAW.324 <pre> 11Modes in (<c1><chan>11):11 <modes>
RAW.329 !script %:echo %::pre 11Channel created on ( $+ %::c1 $+ $asctime(%::text,dddd mmmm dd HH:nn:ss yyyy) $+ 11)
RAW.330 !script set -u4 %::waterwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 <pre> 11Topic:11 (<c1><text>11)
RAW.333 <pre> 11Set by:11 (<c1><nick>11) on (<c1><text>11)
RAW.341 <pre> 11Invite:11 (<c1><nick>11) has been invited to join (<c1><chan>11)
RAW.352 <pre> 11/Who:11 <nick> (<c1><address>11) <realname>
RAW.353 <pre> 11/Names:11 (<c1><chan>11) <text>
RAW.366 <pre> 11End of (<c1>/names11) list for (<c1><chan>11)
RAW.369 !script
RAW.372   <c2> <text>
RAW.376 <pre> 11End of (<c1>/motd11)
RAW.391 <pre> 11Date:11 (<c1><text>11)
RAW.401 <pre> 11No such nickname:11 (<c1><nick>11)
RAW.403 <pre> 11No such channel:11 (<c1><chan>11)
RAW.404 <pre> 11Unable to send message to (<c1><chan>11)
RAW.421 <pre> 11Invalid command:11 (<c1><value>11)
RAW.433 <pre> 11Nickname in use:11 (<c1><nick>11)
RAW.442 <pre> 11You're not on that channel:11 (<c1><chan>11)
RAW.443 <pre> 11User already in channel:11 (<c1><nick>11)
RAW.461 <pre> 11Not enough parameters:11 (<c1><value>11)
RAW.471 <pre> 11Can't join <chan>:11 (<c1>full (+l)11)
RAW.473 <pre> 11Can't join <chan>:11 (<c1>invite only (+i)11)
RAW.474 <pre> 11Can't join <chan>:11 (<c1>you're banned (+b)11)
RAW.475 <pre> 11Can't join <chan>:11 (<c1>requires key (+k)11)
RAW.482 <pre> 11You're not opped on (<c1><chan>11)
RAW.Other <pre> <text>

Scheme1 Colored
Scheme2 Dark
Scheme3 Dark colored

Scheme4 Color whole lines
Scheme5 CWL Colored
Scheme6 CWL Dark
Scheme7 CWL Dark colored

[Scheme1]
Join 03::: 11Join:03 (<c1><nick>03) (<c1><address>03)
JoinSelf 03::: 11Joined:03 (<c1><chan>03)
Part 04::: 11Part:11 (<c1><nick>11) (<c1><address>11) <parentext>
Kick 04::: 11Kick:04 (<c1><knick>04)11 was kicked by 04(<c1><nick>04) <parentext>
KickSelf 04::: 11Kick:04 (<c1><me>04)11 was kicked by 04(<c1><nick>04) <parentext>
Quit 04::: 11Quit:04 (<c1><nick>04) (<c1><address>04) <parentext>
Invite 03::: 11Invite:03 (<c1><nick>03)11 invites you to join 03(<c1><chan>03)

[Scheme2]
RGBColors 255,255,255 0,0,0 17,43,57 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196

[Scheme3]
RGBColors 255,255,255 0,0,0 17,43,57 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196
Join 03::: 11Join:03 (<c1><nick>03) (<c1><address>03)
JoinSelf 03::: 11Joined:03 (<c1><chan>03)
Part 04::: 11Part:11 (<c1><nick>11) (<c1><address>11) <parentext>
Kick 04::: 11Kick:04 (<c1><knick>04)11 was kicked by 04(<c1><nick>04) <parentext>
KickSelf 04::: 11Kick:04 (<c1><me>04)11 was kicked by 04(<c1><nick>04) <parentext>
Quit 04::: 11Quit:04 (<c1><nick>04) (<c1><address>04) <parentext>
Invite 03::: 11Invite:03 (<c1><nick>03)11 invites you to join 03(<c1><chan>03)

[Scheme4]
BaseColors 11

[Scheme5]
BaseColors 11
Join 03::: 11Join:03 (<c1><nick>03) (<c1><address>03)
JoinSelf 03::: 11Joined:03 (<c1><chan>03)
Part 04::: 11Part:11 (<c1><nick>11) (<c1><address>11) <parentext>
Kick 04::: 11Kick:04 (<c1><knick>04)11 was kicked by 04(<c1><nick>04) <parentext>
KickSelf 04::: 11Kick:04 (<c1><me>04)11 was kicked by 04(<c1><nick>04) <parentext>
Quit 04::: 11Quit:04 (<c1><nick>04) (<c1><address>04) <parentext>
Invite 03::: 11Invite:03 (<c1><nick>03)11 invites you to join 03(<c1><chan>03)

[Scheme6]
BaseColors 11
RGBColors 255,255,255 0,0,0 17,43,57 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196

[Scheme7]
BaseColors 11
RGBColors 255,255,255 0,0,0 17,43,57 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196
Join 03::: 11Join:03 (<c1><nick>03) (<c1><address>03)
JoinSelf 03::: 11Joined:03 (<c1><chan>03)
Part 04::: 11Part:11 (<c1><nick>11) (<c1><address>11) <parentext>
Kick 04::: 11Kick:04 (<c1><knick>04)11 was kicked by 04(<c1><nick>04) <parentext>
KickSelf 04::: 11Kick:04 (<c1><me>04)11 was kicked by 04(<c1><nick>04) <parentext>
Quit 04::: 11Quit:04 (<c1><nick>04) (<c1><address>04) <parentext>
Invite 03::: 11Invite:03 (<c1><nick>03)11 invites you to join 03(<c1><chan>03)
