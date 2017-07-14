[mts]
Name Shout
Author Rizla
Email Rizla@aserne.dk
Website www.Rizla.frac.dk
Description Not very colorfull, but thats the way i like it, simple and clean. :)
Version 1.6
MTSVersion 1.1
Script shout.mrc

Timestamp ON
TimestampFormat 12(HH12:nn12:ss12)
Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,02
RGBColors 255,255,255 0,0,0 24,60,82 0,196,0 255,69,43 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,137,183 119,198,255 49,89,115 255,0,255 145,145,145 196,196,196
BaseColors 00
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11
CLineOwner 00
CLineOP 00
CLineHOP 15
CLineVoice 15
CLineRegular 12
CLineEnemy 04
CLineMe 10
Prefix 12:::
ParenText 12(<c1><text>12)
TextChan 12(<cmode><nick>12): <text>
TextChanSelf 12(<cmode><me>12): <text>
ActionChan 12! <cmode><nick> <text>
ActionChanSelf 12! <cmode><me> <text>
NoticeChan 12-<nick>12@<chan>12- <text>
Notice 12-<nick>12- <text>
NoticeSelf Notice> 12-<target>12- <text>
NoticeSelfChan Notice> 12-<target>12- <text>
TextQuery 12(<nick>12): <text>
TextQuerySelf 12(<me>12): <text>
ActionQuery 12! <nick> <text>
ActionQuerySelf 12! <me> <text>
TextMsg 12(<nick>12): <text>
TextMsgSelf -> 12*<target>12* <text>
Mode <pre> 12Mode:12 (<c1><nick>12) sets 12(<c1><modes>12)
ModeUser <pre> 12UserMode:12 is now 12(<c1><modes>12)
Join <pre> 12Join:12 (<c1><nick>12) (<c1><address>12)
JoinSelf <pre> 12Joined:12 (<c1><chan>12)
Part <pre> 12Part:12 (<c1><nick>12) (<c1><address>12) <parentext>
Kick <pre> 12Kick:12 (<c1><knick>12) was kicked by (<c1><nick>12) <parentext>
KickSelf <pre> 12Kick:12 (<c1><me>12) was kicked by (<c1><nick>12) <parentext>
Quit <pre> 12Quit:12 (<c1><nick>12) (<c1><address>12) <parentext>
Topic <pre> 12Topic:12 (<c1><nick>12) changes topic to <parentext>
Nick <pre> 12Nick:12 (<c1><nick>12) is now known as (<c1><newnick>12)
NickSelf <pre> 12Nick:12 (<c1><me>12) is now known as (<c1><newnick>12)
Invite <pre> 12Invite:12 (<c1><nick>12) invites you to join (<c1><chan>12)
ServerError <pre> 12Error:12 <text>
Rejoin <pre> 12Rejoining:12 (<c1><chan>12)
Ctcp 12?<nick>12? <ctcp> <text>
CtcpChan 12?<nick>12@<chan>12? <ctcp> <text>
CtcpSelf -> 12?<target>12? <ctcp> <text>
CtcpChanSelf -> 12?<target>12? <ctcp> <text>
CtcpReply 12!<nick>12! <ctcp> <text>
CtcpReplySelf -> 12!<target>12! <ctcp> <text>
Notify <pre> 12Notify:12 (<c1><nick>12) is now online!
UNotify <pre> 12UnNotify:12 (<c1><nick>12) is now offline!
Wallop <pre> 12Wallop:12 (<c1><nick>12) <text>
NoticeServer 12-<nick>12- <text>
DNS <pre> 12DNS:12 resolving <address>...
DNSError <pre> 12DNS:12 unable to resolve <address>
DNSResolve <pre> 12DNS:12 resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 12Error:12 <text>
Load <pre> (<c1>Shout12) theme by Rizla loaded.
Unload <pre> (<c1>Shout12) theme by Rizla unloaded.
Whois !script shout.whois
Whowas !script shout.whowas
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
RAW.330 !script set -u4 %::shoutwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
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
RAW.401 <pre> 12No such nickname:12 (<c1><nick>12)
RAW.403 <pre> 12No such channel:12 (<c1><chan>12)
RAW.404 <pre> 12Unable to send message to (<c1><chan>12)
RAW.421 <pre> 12Invalid command:12 (<c1><value>12)
RAW.433 <pre> 12Nickname in use:12 (<c1><nick>12)
RAW.442 <pre> 12You're not on that channel:12 (<c1><chan>12)
RAW.443 <pre> 12User already in channel:12 (<c1><nick>12)
RAW.461 <pre> 12Not enough parameters:12 (<c1><value>12)
RAW.471 <pre> 12Can't join <chan>:12 (<c1>full (+l)12)
RAW.473 <pre> 12Can't join <chan>:12 (<c1>invite only (+i)12)
RAW.474 <pre> 12Can't join <chan>:12 (<c1>you're banned (+b)12)
RAW.475 <pre> 12Can't join <chan>:12 (<c1>requires key (+k)12)
RAW.482 <pre> 12You're not opped on (<c1><chan>12)
RAW.Other <pre> <text>
default