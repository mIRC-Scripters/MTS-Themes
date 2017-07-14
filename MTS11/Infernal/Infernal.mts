[mts]
Name Infernal
Author greeny
EMail greeny@nnscript.de
Website www.nnscript.de
Description Infernal MTS theme by greeny with huge whois :p
Version 1.25
MTSVersion 1.1
Script infernal.mrc

Timestamp ON
TimestampFormat 13(15HH13:15nn13)

Colors 01,15,13,00,13,13,13,13,13,13,13,15,13,13,15,00,13,13,13,13,15,01,15,01,15,14
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 253,107,0 116,116,116 193,193,193

FontDefault Bright,10
FontQuery Bright,10
FontChan Bright,10

CLineOwner 13
CLineOP 13
CLineHOP 13
CLineVoice 15
CLineRegular 14
CLineEnemy 04
CLineMe 07

Prefix 14>13>14>
ParenText (<text>)

TextChan !script %:echo $+($str( ,$calc(19- $len($+(%::cmode,%::nick,:)))),$+(13,%::cmode,,%::nick,13:) %::text) %:comments
TextChanSelf !script %:echo $+($str( ,$calc(19- $len($+(%::cmode,%::nick,:)))),$+(13,%::cmode,,%::nick,13:) %::text) %:comments
ActionChan !script %:echo 13> $+($str( ,$calc(16- $len($+(%::cmode,%::nick)))),$+(13,%::cmode,,%::nick)  %::text) %:comments
ActionChanSelf !script %:echo 13> $+($str( ,$calc(16- $len($+(%::cmode,%::nick)))),$+(13,%::cmode,,%::nick)  %::text) %:comments

NoticeChan <pre> 13notice15 from 13<nick>15@13<chan>15: <text>
Notice <pre> 13notice15 from 13<nick>15: <text>
NoticeSelf <pre> 13notice15 to 13<target>15: <text>
NoticeSelfChan <pre> 13notice15 to 13<target>15: <text>

TextQuery !script %:echo $+($str( ,$calc(19- $len($+(%::nick,:)))),$+(%::nick,13:)) %::text %:comments
TextQuerySelf !script %:echo $+($str( ,$calc(19- $len($+(%::nick,:)))),$+(%::nick,13:)) %::text %:comments
ActionQuery !script %:echo 13> $+($str( ,$calc(16- $len(%::nick))),%::nick)  %::text %:comments
ActionQuerySelf !script %:echo 13> $+($str( ,$calc(16- $len(%::nick))),%::nick)  %::text %:comments
ActionMsg <pre> 13action15 from 13<nick>!<address>15 <text>
ActionMsgSelf <pre> 13action15 to 13<target>15: <text>
TextMsg <pre> 13message15 from 13<nick>!<address>15 <text>
TextMsgSelf <pre> 13message15 to 13<target>15: <text>

Mode !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  sets mode: %::modes %:comments
ModeUser <pre> 13usermodes15: <modes>
Join !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  has joined %::chan %:comments
JoinSelf <pre> 13joined15 <chan>
Part !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  has left %::chan %::parentext %:comments
Kick !script %:echo $+($str( ,$calc(18- $len(%::knick))),%::knick)  was kicked by %::nick %::parentext %:comments
KickSelf !script %:echo $+($str( ,$calc(18- $len(%::knick))),%::knick)  was kicked by %::nick %::parentext %:comments
Quit !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  has quit IRC %::parentext %:comments
Topic !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  changed topic to $+(',%::text,') %:comments
Nick !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  is now known as %::newnick %:comments
NickSelf !script %:echo $+($str( ,$calc(18- $len(%::nick))),%::nick)  is now known as %::newnick %:comments
Invite <pre> 13invite15: <nick> invites you to join <chan>
ServerError <pre> 13server error15: <text>
Rejoin <pre> 13rejoining15 <chan>
Ctcp <pre> 13ctcp15 from 13<nick>15: <ctcp> <text>
CtcpChan <pre> 13ctcp15 from 13<nick>15@13<chan>15: <ctcp> <text>
CtcpSelf <pre> 13ctcp15 to 13<nick>15: <ctcp> <text>
CtcpChanSelf <pre> 13ctcp15 to 13<chan>15: <ctcp> <text>
CtcpReply <pre> 13ctcpreply15 from 13<nick>15: <ctcp> <text>
CtcpReplySelf <pre> 13ctcpreply15 to 13<nick>15: <ctcp> <text>
Notify <pre> 13notify15: <nick> is now online! <text>
UNotify <pre> 13unnotify15: <nick> is no longer online! <text>
Wallop <pre> 13wallop15: <nick>: <text>
NoticeServer <pre> 13server notice15 from 13<nick>15: <text>

DNS <pre> 13dns15: looking up <address>...
DNSError <pre> 13dns15: error, unable to resolve <address>
DNSResolve <pre> 13dns15: resolved <address> to <raddress>
Echo <pre> 15<text>
EchoTarget <pre> 15<text>
Error <pre> 15error: <text>
Load <pre> 13infernal15 theme v1.25 by greeny loaded.
Unload <pre> 13infernal15 theme v1.25 by greeny unloaded.

Whois !script infernal.whois
Whowas !script infernal.whowas

RAW.002 <pre> 13host15: <server> running version <value>
RAW.003 <pre> 13server created on15: <value>
RAW.005 <pre> 13protocols supported by this server15: <text>
RAW.250 <pre> 13total connection(s)15: <value>
RAW.251 <pre> 13users15: <users>, invisible: <text>, servers: <value>
RAW.252 <pre> 13operator(s) online15: <value>
RAW.253 <pre> 13unknown connection(s)15: <value>
RAW.254 <pre> 13number of channels formed15: <value>
RAW.255 <pre> 13local clients15: <users> on <value> server(s)
RAW.265 <pre> 13local users15: <users>, max: <value>
RAW.266 <pre> 13global users15: <users>, max: <value>
RAW.303 <pre> 13<nick>15 is online
RAW.315 <pre> 13end of /who15 list for <chan>
RAW.324 <pre> 13<chan> modes15: <modes>
RAW.329 !script %:echo %::pre 13channel created15: $asctime(%::text,dddd mmmm dd HH:nn:ss yyyy) %:comments
RAW.332 <pre> 13topic15: <text>
RAW.333 <pre> 13set by15: <nick> on <text>
RAW.341 <pre> 13<nick>15 has been invited to join <chan>
RAW.352 <pre> 13who15: <nick>!<address> is <realname>
RAW.353 <pre> 13/names15: <text>
RAW.366 <pre> 13end of /names15: <chan>
RAW.372   <c2> <text>
RAW.376 <pre> 13end of /motd
RAW.391 <pre> 13date15: <text>
RAW.401 <pre> 13no such nickname15: <nick>
RAW.403 <pre> 13no such channel15: <chan>
RAW.404 <pre> 13unable15 to send message to <chan>
RAW.421 <pre> 13<value>15 is an invalid command
RAW.433 <pre> 13nickname15 <nick> is already in use
RAW.442 <pre> 13you're15 not on that channel <chan>
RAW.443 <pre> 13<nick>15 is already on that channel
RAW.461 <pre> 13<value>15 not enough parameters
RAW.471 <pre> 13can't15 join <chan> (full (+l))
RAW.473 <pre> 13can't15 join <chan> (invite only, +i)
RAW.474 <pre> 13can't15 join <chan> (you're banned, +b)
RAW.475 <pre> 13can't15 join <chan> (requires key, +k)
RAW.482 <pre> 13you're15 not opped on (<chan>)
RAW.Other <pre> 15<text>

Scheme1 Blue
Scheme2 Green
Scheme3 Red
Scheme4 Dark
Scheme5 Dark Blue
Scheme6 Dark Green
Scheme7 Dunno
Scheme8 Bright orange
Scheme9 Bright blue
Scheme10 Bright green
Scheme11 Grey teal
Scheme12 Darker grey teal
Scheme13 Cold
Scheme14 Teal

[Scheme1]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,158,253 116,116,116 193,193,193

[Scheme2]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,253,146 116,116,116 193,193,193

[Scheme3]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 253,0,0 116,116,116 193,193,193

[Scheme4]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 74,74,74 116,116,116 193,193,193

[Scheme5]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 12,0,232 116,116,116 193,193,193

[Scheme6]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 9,164,0 116,116,116 193,193,193

[Scheme7]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 151,232,0 116,116,116 193,193,193

[Scheme8]
Colors 00,01,13,04,13,13,13,13,13,13,13,01,13,13,01,14,13,13,13,13,01,00,01,00,14,14,01,00
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 242,103,0 69,69,69 117,117,117

[Scheme9]
Colors 00,01,13,04,13,13,13,13,13,13,13,01,13,13,01,14,13,13,13,13,01,00,01,00,14,14,01,00
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 12,0,242 69,69,69 117,117,117

[Scheme10]
Colors 00,01,13,04,13,13,13,13,13,13,13,01,13,13,01,14,13,13,13,13,01,00,01,00,14,14,01,00
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,145,3 69,69,69 117,117,117

[Scheme11]
Colors 00,01,13,04,13,13,13,13,13,13,13,01,13,13,01,14,13,13,13,13,01,00,01,00,14,14,01,00
RGBColors 180,180,180 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,94,145 54,54,54 93,93,93

[Scheme12]
Colors 00,15,13,04,13,13,13,13,13,13,13,15,13,13,15,15,13,13,13,13,15,00,15,00,15,15,15,00
RGBColors 36,36,36 211,211,211 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,132,202 77,77,77 141,141,141

[Scheme13]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,116,210 116,116,116 193,193,193

[Scheme14]
RGBColors 221,221,221 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 0,151,168 116,116,116 193,193,193
