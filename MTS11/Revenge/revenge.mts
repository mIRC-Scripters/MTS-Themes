[mts]
Name Revenge
Author sethyx`
EMail sethyx@axelero.hu
Website http://sethyx.atw.hu
Description Revenge MTS theme created for NoNameScript, works in any MTS engine.
Version 1.0
MTSVersion 1.1
Script revenge.mrc

Timestamp ON
TimestampFormat 11>HH11:nn11:ss11<

Colors 02,00,00,04,00,00,03,03,04,08,08,00,00,13,00,00,04,04,08,00,07,02,00,02,00,02
RGBColors 255,255,255 0,0,0 17,43,57 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196
BaseColors 11

FontDefault Comic Sans MS,13
FontQuery Comic Sans MS,13
FontChan Comic Sans MS,13

CLineOwner 00
CLineOP 00
CLineHOP 11
CLineVoice 11
CLineRegular 10
CLineEnemy 04
CLineMe 07

Prefix ×
ParenText 11(<c1><text>11)

TextChan 15<cmode> 11[ <nick>11 ]: <text>
TextChanSelf 15<cmode> 11{ <me>11 }: <text>
ActionChan 15 <cmode>11 <nick> <text>
ActionChanSelf 15 <cmode>11 <me> <text>

NoticeChan 11- <nick>11@<chan>11 - <text>
Notice 11- <nick>11 - <text>
NoticeSelf Notice> 11- <target>11 - <text>
NoticeSelfChan Notice> 11- <target>11 - <text>

TextQuery 11[ <nick>11 ]: <text>
TextQuerySelf 11{ <me>11 }: <text>
ActionQuery 11 <nick> <text>
ActionQuerySelf 11 <me> <text>
ActionMsg 11 <nick>11!<address> <text>
ActionMsgSelf —› 11 <target> <text>
TextMsg 11*<nick>11!<address>11* <text>
TextMsgSelf —› 11*<target>11* <text>

Mode <pre> 11Mode08: (<c1><nick>08)11 sets 08(15<modes>8)
ModeUser <pre> 11UserMode08:11 is now 08(15<modes>08)
Join <pre> 11Join03: (<c1><nick>03) (<c1><address>03)
JoinSelf <pre> 11Joined:03 (<c1><chan>03)
Part <pre> 11Part4: (11<c1><nick>114) (11<address>4)11 <parentext>
Kick <pre> 11Kick04: (<c1><knick>04)11 was kicked by 04(<c1><nick>04) <parentext>
KickSelf <pre> 11Kick04: (<c1><me>04)11 was kicked by 04(<c1><nick>04) <parentext>
Quit <pre> 11Quit04: (<c1><nick>04) (<c1><address>04) <parentext>
Topic <pre> 11Topic8:11 (<c1><nick>11) changes topic to <parentext>
Nick <pre> 11Nick08: (<c1><nick>08)11 is now known as 08(<c1><newnick>08)
NickSelf <pre> 11Nick8: (<c1><me>08)11 is now known as 08(<c1><newnick>08)
Invite <pre> 11Invite03:03 (<c1><nick>03)11 invites you to join 03(<c1><chan>03)
ServerError <pre> 11Error:11 <text>
Rejoin <pre> 11Rejoining03:11 03(11<c1><chan>03)...
Ctcp 11?<nick>11? <ctcp> <text>
CtcpChan 11?<nick>11@<chan>11? <ctcp> <text>
CtcpSelf —› 11?<target>11? <ctcp> <text>
CtcpChanSelf —› 11?<target>11? <ctcp> <text>
CtcpReply 11!<nick>11! <ctcp> <text>
CtcpReplySelf —› 11!<target>11! <ctcp> <text>
Notify <pre> 11Notify13:11 (<c1><nick>11) is now online!
UNotify <pre> 11UnNotify13:11 (<c1><nick>11) is now offline!
Wallop <pre> 11Wallop:11 (<c1><nick>11) <text>
NoticeServer 11-<nick>11- <text>
DNS <pre> 11DNS:11 resolving <address>...
DNSError <pre> 11DNS:11 unable to resolve <address>
DNSResolve <pre> 11DNS:11 resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 11Error:11 <text>
Load <pre> 11(0Revenge11) theme by 5sethyx`11 loaded.
Unload <pre> 11(0Revenge11) theme by 5sethyx`11 unloaded.

Whois !script revenge.whois
Whowas !script revenge.whowas

RAW.002 <pre> 11Host:11 (<c1><server>11) running version (<c1><value>11)
RAW.003 <pre> 11Server created on:11 (<c1><value>11)
RAW.005 <pre> 11Protocols supported:11 (<c1><text>11)
RAW.250 <pre> 11Total connections:11 (<c1><value>11)
RAW.251 <pre> 11Users:11 (<c1><users>11), Invisible: (<c1><text>11), Servers: (<c1><value>11)
RAW.252 <pre> 11Operators online:11 (<c1><value>11)
RAW.253 <pre> 11Unknown connections:11 (<c1><value>11)
RAW.254 <pre> 11Channels formed:11 (<c1><value>11)
RAW.255 <pre> 11Local clients:11 (<c1><users>11) on (<c1><value>11) server(s)
RAW.265 <pre> 11Local users:11 (<c1><users>11) Max: (<c1><value>11)
RAW.266 <pre> 11Global users:11 (<c1><users>11) Max: (<c1><value>11)
RAW.303 <pre> (<c1><nick>11) is online
RAW.315 <pre> 11End of (<c1>/who11) list for (<c1><chan>11)
RAW.324 <pre> 11Modes in (<c1><chan>11):11 <modes>
RAW.329 !script %:echo %::pre 11Channel created on ( $+ %::c1 $+ $asctime(%::text,dddd mmmm dd HH:nn:ss yyyy) $+ 11)
RAW.332 <pre> 11Topic:11 (<c1><text>11)
RAW.333 <pre> 11Set by:11 (<c1><nick>11) on (<c1><text>11)
RAW.341 <pre> 11Invite:11 (<c1><nick>11) has been invited to join (<c1><chan>11)
RAW.352 <pre> 11/Who:11 <nick> (<c1><address>11) <realname>
RAW.353 <pre> 11/Names:11 (<c1><chan>11) <text>
RAW.366 <pre> 11End of (<c1>/names11) list for (<c1><chan>11)
RAW.369 !script
RAW.372   <c2> <text>
RAW.376 <pre> 11End of (<c1>/motd11)
RAW.391 <pre> 11Date:11 (<c1><text>11)
RAW.401 <pre> 11No such nickname:11 (<c1><nick>11)
RAW.403 <pre> 11No such channel:11 (<c1><chan>11)
RAW.404 <pre> 11Unable to send message to (<c1><chan>11)
RAW.421 <pre> 11Invalid command:11 (<c1><value>11)
RAW.433 <pre> 11Nickname in use:11 (<c1><nick>11)
RAW.442 <pre> 11You're not on that channel:11 (<c1><chan>11)
RAW.443 <pre> 11User already in channel:11 (<c1><nick>11)
RAW.461 <pre> 11Not enough parameters:11 (<c1><value>11)
RAW.471 <pre> 11Can't join <chan>:11 (<c1>full (+l)11)
RAW.473 <pre> 11Can't join <chan>:11 (<c1>invite only (+i)11)
RAW.474 <pre> 11Can't join <chan>:11 (<c1>you're banned (+b)11)
RAW.475 <pre> 11Can't join <chan>:11 (<c1>requires key (+k)11)
RAW.482 <pre> 11You're not opped on (<c1><chan>11)
RAW.Other <pre> <text>