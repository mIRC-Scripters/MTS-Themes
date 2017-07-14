[mts]
Name Cyclopse
Author Tampered/[JH]
Email jamhar@gmail.com
Website www.nnscript.de
Description A nice theme easy on the eye. Inspired by NoNameScipt.
Version 2.3
MTSVersion 1.1
Script Cyclopse.mrc

Timestamp ON
TimestampFormat 9[00HH9:00nn9]

Colors 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,00,01,00,01
RGBColors 255,255,255 0,0,0 0,0,149 0,196,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 43,255,43 0,102,132 0,159,193 0,101,253 255,0,255 105,105,105 168,168,168
BaseColors 00

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11
ImageStatus photo status.png

CLineOwner 12
CLineOP 12
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineEnemy 04
CLineMe 07

Prefix 8•››
ParenText 8(<c1><text>9)15

TextChan 9[<nick>9] <text>
TextChanSelf 9[<me>9] <text>
ActionChan 9• <cmode><nick> <text>
ActionChanSelf 9• <cmode><me> <text>

NoticeChan 9•<nick>9@<chan>9• <text>
Notice 9•<nick>9• <text>
NoticeSelf • 9•<target>9• <text>
NoticeSelfChan • 9•<target>9• <text>

TextQuery 9(<c1><nick>9) <text>
TextQuerySelf 9(<c1><me>9) <text>
ActionQuery 9• <nick> <text>
ActionQuerySelf 9• <me> <text>
TextMsg 15*<target>15* <text>
TextMsgSelf -> 15*<target>15* <text>

Mode <pre> 0M15ode0: 9[<c1><nick>9]15 sets 9[<c1><modes>9]
ModeUser <pre> 0U15serMode0: set to 9[<c1><modes>9]
Join <pre> 0J15oin0: 8[<c1><nick>8] [<c1><address>8]
JoinSelf <pre> 0J15oined0: 9[<c1><chan>9]
Part <pre> 0P15art0: 4[<c1><nick>4] [<c1><address>4] <parentext>
Kick <pre> 0K15ick0: 9[<c1><knick>9]15 was booted by 9[<c1><nick>9] <parentext>
KickSelf <pre> 0K15ick0: 9[<c1><me>9]15 was booted by 9[<c1><nick>9] <parentext>
Quit <pre> 0Q15uit0: 9[<c1><nick>9] [<c1><address>9] <parentext>
Topic <pre> 0T15opic0: 9[<c1><nick>9]15 changes the channel topic to 9[<c1><text>9]
Nick <pre> 0N15ick0: 9[<c1><nick>9]15 has changed their nick to 9[<c1><newnick>9]
NickSelf <pre> 0N15ick0: 9[<c1><me>9]15 has changed their nick 9[<c1><newnick>9]
Invite <pre> 0I15nvite0: 9[<c1><nick>9]15 invites you to join 9[<c1><chan>9]
ServerError <pre> 0E15rror0: <text>
Rejoin <pre> 0R15ejoined0: 9[<c1><chan>9]
Ctcp 12?<nick>12? <ctcp> <text>
CtcpChan 12?<nick>12@<chan>12? <ctcp> <text>
CtcpSelf -> 12?<target>12? <ctcp> <text>
CtcpChanSelf -> 12?<target>12? <ctcp> <text>
CtcpReply 12!<nick>12! <ctcp> <text>
CtcpReplySelf -> 12!<target>12! <ctcp> <text>
Notify <pre> 0N15otify0: 9[<c1><nick>9]15 is now online!
UNotify <pre> 0U15nNotify0: 9[<c1><nick>9]15 is now offline!
Wallop <pre> 0W15allop0: 9[<c1><nick>9]15 <text>
NoticeServer 12-<nick>12- <text>

DNS <pre> 0D15NS0:15 resolving <address>...
DNSError <pre> 0D15NS0:15 unable to resolve <address>
DNSResolve <pre> 0D15NS0:15 resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 0E15rror0:15 <text>
Load <pre> 9[<c1>Cyclopse9]15 theme by Tampered loaded.
Unload <pre> 9[<c1>Cyclopse9]15 theme by Tampered unloaded.

Whois !script cyclopse.whois
Whowas !script cyclopse.whowas

RAW.002 <pre> 0H15ost0: 8[<c1><server>8]15 running version 8[<c1><value>8]
RAW.003 <pre> 0S15erver created on0: 8[<c1><value>8]
RAW.005 <pre> 0P15rotocols supported0: 8[<c1><text>8]
RAW.250 <pre> 0T15otal connections0: 8[<c1><value>8]
RAW.251 <pre> 0U15sers0: 8[<c1><users>8]15, Invisible: 8[<c1><text>8]15, Servers: 8[<c1><value>8]
RAW.252 <pre> 0O15perators online0: 8[<c1><value>8]
RAW.253 <pre> 0U15nknown connections0: 8[<c1><value>8]
RAW.254 <pre> 0C15hannels formed0: 8[<c1><value>8]
RAW.255 <pre> 0L15ocal clients0: 8[<c1><users>8]15 on 8[<c1><value>8]15 server(s)
RAW.265 <pre> 0L15ocal users0: 8[<c1><users>8]15 Max: 8[<c1><value>8]
RAW.266 <pre> 0G15lobal users0: 8[<c1><users>8]15 Max: 8[<c1><value>8]
RAW.315 <pre> 0E15nd of 8[<c1>/who12]15 list for 8[<c1><chan>12]15
RAW.324 <pre> 0M15odes in 8[<c1><chan>8]15:11 <modes>
RAW.329 !script %:echo %::pre 0C15hannel created on 9[ $+ %::c1 $+ $asctime(%::text,dddd mmmm dd HH:nn:ss yyyy) $+ 9]
RAW.332 <pre> 0T15opic0: 8[<c1><text>8]15
RAW.333 <pre> 0S15et by0: 8[<c1><nick>8]15 on 8[<c1><text>8]
RAW.341 <pre> 0I15nvite0: 8[<c1><nick>8]15 has been invited to join 8[<c1><chan>8]
RAW.352 <pre> 0/15who0: <nick> 8[<c1><address>8]15 <realname>
RAW.353 <pre> 0/15names0: 8[<c1><chan>8]15 <text>
RAW.366 <pre> 0E15nd of 8[<c1>/names8]15 list for 8[<c1><chan>8]
RAW.372   <c2> <text>
RAW.376 <pre> 0E15nd of 8[<c1>/motd8]15
RAW.391 <pre> 0D15ate0: 8[<c1><text>12]8
RAW.401 <pre> 0N15o such nickname0: 8[<c1><nick>8]
RAW.403 <pre> 0N15o such channel0: 8[<c1><chan>8]
RAW.404 <pre> 0U15nable to send message to 8[<c1><chan>8]
RAW.421 <pre> 0I15nvalid command, dumbass!0: 8[<c1><value>8]
RAW.433 <pre> 0N15ickname in use, lamer!0: 8[<c1><nick>8]
RAW.442 <pre> 0Y15ou're not on that channel0: 8[<c1><chan>8]15
RAW.443 <pre> 0U15ser 12[<c1><nick>12]15 already in channel0: 12[<c1><chan>12]15
RAW.461 <pre> 0N15ot enough parameters0: 12[<c1><value>12]
RAW.471 <pre> 0C15an't join <chan>0: 8[<c1>channel is already full of n00bs! (+l)8]
RAW.473 <pre> 0C15an't join <chan>0: 8[<c1>invite only, bitch! (+i)8]
RAW.474 <pre> 0C15an't join <chan>0: 8[<c1>you're banned mother fucker! (+b)8]
RAW.475 <pre> 0C15an't join <chan>0: 8[<c1>enter a key, asshole! (+k)8]
RAW.482 <pre> 0Y15ou're not opped on 8[<c1><chan>8]
RAW.Other <pre> <text>





