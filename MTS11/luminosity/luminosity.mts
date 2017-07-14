[mts]
Name luminosity
Author zioxide
EMail zioxideinc@gmail.com
Website http://zioxide.zapto.org
Description Default scheme: Midnight; Other schemes: Beach, Lunar, Ice, Desert, Autumn, Stone, Black Ice
Version 1.4
MTSVersion 1.1
Script luminosity.mrc

Timestamp ON
TimestampFormat <c1>,<c4>  h:nnt   

Scheme1 Beach
Scheme2 Lunar
Scheme3 Ice
Scheme4 Desert
Scheme5 Autumn
Scheme6 Stone
Scheme7 Black Ice

BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 15,43,62 225,225,225 133,152,167 0,147,0 255,0,0 127,0,0 12,35,52 252,127,0 255,255,0 0,252,0 9,107,255 119,153,176 103,132,152 116,149,182 54,64,71 141,155,169

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 11
CLineAdmin 11
CLineOp 11
CLineHOp 12
CLineVoice 12

Prefix     <c2>• <c3>•  <c1>
ParenText <c2>(<c1><text><c2>)

TextChan <c2>(<cmode><c1><nick><c2>) <text>
TextChanSelf <c2>(<cmode><c1><nick><c2>) <text>
ActionChan <c2>• <nick> <text>
ActionChanSelf <c2>• <me> <text>
NoticeChan <c2>-<c1><nick>:<target><c2>- <text>
Notice <c2>-<c1><nick> <c2>(<c1><address><c2>)- <text>
NoticeSelf <c2>-> -<c1><nick><c2>- <text>
NoticeSelfChan <c2>-> -<c1><target><c2>- <text>
TextQuery <c2>(<c1><nick><c2>) <text>
TextQuerySelf <c2>(<c1><nick><c2>) <text>
ActionQuery <c2>• <nick> <text>
ActionQuerySelf <c2>• <me> <text>
TextMsg <c2>*<c1><nick><c2>* <text>
TextMsgSelf <c2>-> *<c1><target><c2>* <text>

Mode <pre><c1> mode: <nick> <c3>(<c2><address><c3>) <c1>set: <modes>
ModeUser <pre><c1> usermode: <modes>
Join <pre><c1> join: <nick> <c3>(<c2><address><c3>)
JoinSelf <pre><c1> joined <chan>
Part !Script %:echo $+(%::pre,,%::c1) part: %::nick $+(,%::c3,$chr(40),,%::c2,%::address,,%::c3,$chr(41)) $iif(%::text,$+(,%::c3,$chr(40),,%::c2,%::text,,%::c3,$chr(41)))
Kick <pre><c1> kick: <nick> <c3>(<c2><address><c3>)<c1> kicked <knick> <c3>(<c2><text><c3>)
KickSelf <pre><c1> You were kicked from <chan> by <nick> <c3>(<c2><text><c3>)
Quit !Script %:echo $+(%::pre,,%::c1) quit: %::nick $+(,%::c3,$chr(40),,%::c2,%::address,,%::c3,$chr(41)) $iif(%::text,$+(,%::c3,$chr(40),,%::c2,%::text,,%::c3,$chr(41)))
Topic <pre><c1> <nick> sets topic: <c3>(<c2><text><c3>)
Nick <pre><c1> nick: <nick> <c3>(<c2><address><c3>)<c1> is now <newnick>
NickSelf <pre><c1> nick: <newnick>
Invite <pre><c1> invite: <nick> <c3>(<c2><address><c3>)<c1> invites you to join <chan>
ServerError <pre><c1> error: <text>
Rejoin <pre><c1> Rejoining <chan>
Ctcp <c2>[<c1><nick> <ctcp><c2>] <c1><text>
CtcpChan <c2>[<c1><nick>:<chan> <ctcp><c2>] <c1><text>
CtcpSelf <c2>-> [<c1><target> <ctcp><c2>] <c1><text>
CtcpChanSelf <c2>-> [<c1><target> <ctcp><c2>] <c1><text>
CtcpReply <c2>[<c1><nick> <ctcp> reply<c2>] <c1><text>
CtcpReplySelf <c2>-> [<c1><target> <ctcp> reply<c2>] <c1><text>
Notify <pre><c1> notify: <nick> <c3>(<c2><address><c3>) is on irc
UNotify <pre><c1> notify: <nick> <c3>(<c2><address><c3>) is off irc
Wallop <c2>!<c1><nick><c2>!<c1> <text>
NoticeServer <c2>-<c1><server><c2>-<c1> <text>

DNS !Script %:echo %::pre $+(,%::c1) dns: resolving %::address
DNSError !Script %:echo %::pre $+(,%::c1) dns: unable to resolve %::address
DNSResolve !Script %:echo $str($chr(160) ,14) $+(,%::c1) resolved: %::raddress
Echo <c1><text>
EchoTarget <c1><text>
Error <pre><c1> error: <text>
Load <pre><c1> luminosity theme by zioxide loaded
Unload <pre><c1> luminosity theme by zioxide unloaded

Whois !Script luminosity.whois
Whowas !Script luminosity.whowas

RAW.Other <c1><text>
RAW.001 <c1>Welcome <text>
RAW.002 <c1>Your Host Is <server>, running <value>
RAW.003 <c1>This server was created on <value>
RAW.005 <text>
RAW.221 <pre><c1> usermode: <modes>
RAW.250 <pre><c1><value> total connections
RAW.251 <pre><c1>There are <users> users online, <text> invisible, on <value> servers
RAW.252 !Script %:echo $+(%::pre,,%::c1,%::value) $iif(%::value == 1,operator,operators) online
RAW.253 <pre><c1><value> unknown connections
RAW.254 !Script %:echo $+(%::pre,,%::c1,%::value) $iif(%::value == 1,channel,channels) formed
RAW.255 <pre><c1>I have <users> clients and <value> servers
RAW.265 <pre><c1>Current local users: <users> max: <value>
RAW.266 <pre><c1>Current global users: <users> max: <value>
RAW.302 <pre><c1> userhost <nick>: <address>
RAW.324 <pre><c1> modes: <c3>(<c2><modes><c3>)<c1>
RAW.332 <pre><c1> topic: <c3>(<c2><text><c3>)<c1>
RAW.333 !Script %:echo $+(%::pre,,%::c1) set by: $+(,%::c3,$chr(40),,%::c2,%::nick,,%::c3,$chr(41),,%::c1) on $+(,%::c3,$chr(40),,%::c2,$asctime($ctime(%::text),ddd mmm dd $+ $chr(44) yyyy h:nn tt),,%::c3,$chr(41),,%::c1)
RAW.341 <pre><c1><nick> invited to <chan>
RAW.353 <pre><c1>names <c3>(<c2><chan><c3>):<c1> <text>
RAW.366 <pre><c1>end of /names <chan>
RAW.372 <c1><text>
RAW.375 <pre><c1>MOTD - <server>
RAW.376 <pre><c1>end of MOTD
RAW.391 <pre><c1>server time: <text>
RAW.329 !Script %:echo $+(%::pre,,%::c1) channel created: $+(,%::c3,$chr(40),,%::c2,$asctime(%::text,ddd mmm dd $+ $chr(44) yyyy h:nn tt),,%::c3,$chr(41))

RAW.401 <pre><c1> error: <nick> no such nickname
RAW.403 <pre><c1> error: <chan> no such channel
RAW.404 <pre><c1> error: <chan> unable to send message
RAW.421 <pre><c1> error: <value> invalid command
RAW.432 <pre><c1> error: <nick> invalid nickname
RAW.433 <pre><c1> error: <nick> is in use
RAW.471 <pre><c1> error: <chan> is full
RAW.473 <pre><c1> error: <chan> invite only
RAW.474 <pre><c1> error: <chan> banned from channel
RAW.475 <pre><c1> error: <chan> key required
RAW.482 <pre><c1> error: <chan> you aren't an op
Raw.408 <pre><c1> error: <chan> you cannot use colors on this channel

[Scheme1]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 242,238,231 100,100,100 133,152,167 0,147,0 255,0,0 127,0,0 221,227,232 252,127,0 255,255,0 0,252,0 9,107,255 140,162,174 124,149,163 116,149,182 54,64,71 141,155,169

[Scheme2]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 227,227,227 75,75,75 133,152,167 0,147,0 255,0,0 127,0,0 215,215,215 252,127,0 255,255,0 0,252,0 9,107,255 39,86,117 23,57,80 116,149,182 54,64,71 141,155,169

[Scheme3]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 253,253,253 100,100,100 133,152,167 0,147,0 255,0,0 127,0,0 221,227,232 252,127,0 255,255,0 0,252,0 9,107,255 118,138,148 105,126,138 116,149,182 54,64,71 141,155,169 

[Scheme4]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 240,233,223 51,51,51 133,152,167 0,147,0 255,0,0 127,0,0 222,216,206 252,127,0 255,255,0 0,252,0 9,107,255 128,118,105 115,107,94 116,149,182 54,64,71 141,155,169

[Scheme5]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 240,233,223 51,51,51 133,152,167 0,147,0 255,0,0 127,0,0 224,216,204 252,127,0 255,255,0 0,252,0 9,107,255 132,70,30 171,103,61 116,149,182 54,64,71 141,155,169

[Scheme6]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 240,240,240 44,44,44 133,152,167 0,147,0 255,0,0 127,0,0 229,229,229 252,127,0 255,255,0 0,252,0 9,107,255 114,16,16 102,10,10 116,149,182 54,64,71 141,155,169

[Scheme7]
BaseColors 01,11,12,06
Colors 00,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,00,01,00,01,01
RGBColors 17,17,17 160,160,160 133,152,167 0,147,0 255,0,0 127,0,0 28,28,28 252,127,0 255,255,0 0,252,0 9,107,255 118,140,163 101,123,145 103,132,152 54,64,71 141,155,169