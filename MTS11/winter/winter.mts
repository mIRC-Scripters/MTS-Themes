[mts]
Name Winter
Author greeny
EMail greeny@nnscript.de
Website www.nnscript.de
Description The oh-so-famous Winter MTS theme, now with aligned nickname option in /wintersetup and 21 different color combinations! thrillar scheme by [rx-thrillar], thanks!
Version 3.12
MTSVersion 1.1
Script winter.mrc

Timestamp ON
TimestampFormat 02(12HH02:12nn02:12ss02)

Colors 11,02,01,01,01,01,12,12,12,12,12,01,01,12,01,01,12,12,12,01,01,11,01,11,01,01,01,11
RGBColors 255,255,255 0,0,0 0,139,253 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 211,225,233 0,78,155 255,0,255 54,64,71 141,155,169

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 01
CLineOP 01
CLineHOP 01
CLineVoice 12
CLineRegular 02
CLineEnemy 04
CLineMe 07

Prefix    02 —›12
ParenText 02(12<text>02)12

TextChan !script winter.text $+(02,%::cmode,,%::nick) %::text
TextChanSelf !script winter.text $+(02,%::cmode,,%::me) %::text
ActionChan !script winter.action $+(02,%::cmode,,%::nick) %::text
ActionChanSelf !script winter.action $+(02,%::cmode,,%::me) %::text

NoticeChan 02-<nick>02@<chan>02- <text>
Notice 02-<nick>02- <text>
NoticeSelf <pre> -<target>12- <text>
NoticeSelfChan <pre> -<target>12- <text>

TextQuery !script winter.text %::nick %::text
TextQuerySelf !script winter.text %::me %::text
ActionQuery !script winter.action %::nick %::text
ActionQuerySelf !script winter.action %::me %::text
ActionMsg • 12•<nick>!<address>12• <text>
ActionMsgSelf <pre> • 12•<target>12• <text>
TextMsg 12•<nick>!<address>12• <text>
TextMsgSelf <pre> 12•<target>12• <text>

Mode <pre> mode: 02(12<nick>02)12 sets 02(12<modes>02)
ModeUser <pre> usermode: set to 02(12<modes>02)
Join <pre> join: 02(12<nick>02) (12<address>02)
JoinSelf <pre> joined 02(12<chan>02)
Part <pre> part: 02(12<nick>02) (12<address>02) <parentext>
Kick <pre> kick: 02(12<knick>02)12 was kicked by 02(12<nick>02) <parentext>
KickSelf <pre> kick: 02(12<me>02)12 was kicked by 02(12<nick>02) <parentext>
Quit <pre> quit: 02(12<nick>02) (12<address>02) <parentext>
Topic <pre> topic: 02(12<nick>02)12 changes topic to 02(12<text>02)
Nick <pre> nick: 02(12<nick>02)12 is now known as 02(12<newnick>02)
NickSelf <pre> nick: 02(12<me>02)12 is now known as 02(12<newnick>02)
Invite <pre> invite: 02(12<nick>02)12 invites you to join 02(12<chan>02)
ServerError <pre> error:12 <text>
Rejoin <pre> rejoined 02(12<chan>02)
Ctcp 12?<nick>12? <ctcp> <text>
CtcpChan 02?<nick>02@<chan>02? <ctcp> <text>
CtcpSelf <pre> 12?<target>12? <ctcp> <text>
CtcpChanSelf <pre> 12?<target>12? <ctcp> <text>
CtcpReply 02!<nick>02! <ctcp> <text>
CtcpReplySelf <pre> 12!<target>12! <ctcp> <text>
Notify <pre> notify: 02(12<nick>02)12 is now online!
UNotify <pre> unnotify: 02(12<nick>02)12 is now offline!
Wallop <pre> wallop: 02(12<nick>02)12 <text>
NoticeServer 02-<nick>02- <text>

DNS <pre> dns: resolving 02(12<address>02)12...
DNSError <pre> dns: unable to resolve 02(12<address>02)12
DNSResolve <pre> dns: resolved 02(12<address>02)12 to 02(12<raddress>02)12
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> error: <text>
Load <pre> 02(12Winter02)12 theme v3.12 by greeny loaded. Type /wintersetup to configure!
Unload !script %:echo %::pre 02(12Winter02)12 theme v3.12 by greeny unloaded. | unset %wintermts.*

Whois !script winter.whois
Whowas !script winter.whowas

RAW.002 <pre> host: 02(12<server>02)12, running version 02(12<value>02)12
RAW.003 <pre> server created on: 02(12<value>02)12
RAW.005 <pre> protocols supported by this server: 02(12<text>02)12
RAW.250 <pre> total connection(s): 02(12<value>02)12
RAW.251 <pre> users: 02(12<users>02)12, invisible: 02(12<text>02)12, servers: 02(12<value>02)12
RAW.252 <pre> operator(s) online: 02(12<value>02)12
RAW.253 <pre> unknown connection(s): 02(12<value>02)12
RAW.254 <pre> number of channels formed: 02(12<value>02)12
RAW.255 <pre> local clients: 02(12<users>02)12 on 02(12<value>02)12 server(s)
RAW.265 <pre> local users: 02(12<users>02)12, max: 02(12<value>02)12
RAW.266 <pre> global users: 02(12<users>02)12, max: 02(12<value>02)12
RAW.303 <pre> 02(12<nick>02)12 is online
RAW.315 <pre> end of 02(12/who02)12 list for 02(12<chan>02)12
RAW.324 <pre> 02(12<chan>02)12 modes: 02(12<modes>02)12
RAW.329 !script %:echo %::pre channel created: $+(02,$chr(40),12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02,$chr(41))
RAW.332 <pre> topic: 02(12<text>02)12
RAW.333 <pre> set by: 02(12<nick>02)12 on 02(12<text>02)12
RAW.341 <pre> 02(12<nick>02)12 has been invited to join 02(12<chan>02)12
RAW.352 <pre> 02(12/who02)12 <nick> 02(12<address>02)12 <realname>
RAW.353 <pre> 02(12/names02)12 <text>
RAW.366 <pre> end of 02(12/names02)12 list for 02(12<chan>02)12
RAW.372   <c2> <text>
RAW.376 <pre> end of 02(12/motd02)12
RAW.391 !script %:echo %::pre local time: $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ , server time: $sd($gettok(%::text,3-,32))
RAW.401 <pre> no such nickname: 02(12<nick>02)12
RAW.403 <pre> no such channel: 02(12<chan>02)12
RAW.404 <pre> unable to send message to 02(12<chan>02)12
RAW.421 <pre> 02(12<value>02)12 is an invalid command
RAW.433 <pre> nickname 02(12<nick>02)12 is already in use
RAW.442 <pre> you're not on that channel 02(12<chan>02)12
RAW.443 <pre> 02(12<nick>02)12 is already on that channel
RAW.461 <pre> 02(12<value>02)12 not enough parameters
RAW.471 <pre> can't join <chan> 02(12full (+l)02)12
RAW.473 <pre> can't join <chan> 02(12invite only (+i)02)12
RAW.474 <pre> can't join <chan> 02(12you're banned (+b)02)12
RAW.475 <pre> can't join <chan> 02(12requires key (+k)02)12
RAW.482 <pre> you're not opped on 02(12<chan>02)12
RAW.Other !script %:echo %::pre $lower(%::text)

Scheme1 Dirt
Scheme2 Grass
Scheme3 Water
Scheme4 Blood
Scheme5 Moonlight
Scheme6 Goldmine
Scheme7 Weed
Scheme8 Idontknow
Scheme9 Black&White
Scheme10 Orange
Scheme11 Danger
Scheme12 Jungle
Scheme13 Concrete
Scheme14 Dark Orange
Scheme15 Pink
Scheme16 Hell
Scheme17 Light Blue
Scheme18 thrillar
Scheme19 Brown
Scheme20 Ice

[Scheme1]
RGBColors 255,255,255 0,0,0 164,155,136 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 228,224,216 117,106,81 255,0,255 54,64,71 141,155,169
[Scheme2]
RGBColors 255,255,255 0,0,0 135,165,136 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 216,228,216 81,119,79 255,0,255 54,64,71 141,155,169
[Scheme3]
RGBColors 255,255,255 0,0,0 133,152,167 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 216,226,228 78,101,120 255,0,255 54,64,71 141,155,169
[Scheme4]
RGBColors 255,255,255 0,0,0 167,133,133 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 228,216,216 120,78,78 255,0,255 54,64,71 141,155,169
[Scheme5]
RGBColors 0,0,0 202,233,255 117,193,255 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 102,164,255 38,54,64 34,145,255 255,0,255 54,64,71 141,155,169
[Scheme6]
RGBColors 0,0,0 255,244,202 255,238,117 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 255,221,102 55,43,0 255,189,34 255,0,255 54,64,71 141,155,169
[Scheme7]
RGBColors 0,0,0 205,255,202 117,255,128 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 121,255,102 53,64,38 118,198,91 255,0,255 54,64,71 141,155,169
[Scheme8]
RGBColors 0,0,0 255,202,202 255,117,117 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 255,102,102 51,0,0 255,34,34 255,0,255 54,64,71 141,155,169
[Scheme9]
RGBColors 0,0,0 228,228,228 185,185,185 0,147,0 127,127,127 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 178,178,178 35,35,35 144,144,144 255,0,255 54,64,71 141,155,169
[Scheme10]
RGBColors 255,255,255 0,0,0 217,152,0 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 255,172,0 255,234,189 185,120,0 255,0,255 54,64,71 141,155,169
[Scheme11]
RGBColors 0,0,0 255,255,255 255,227,145 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 60,60,60 251,188,0 255,0,255 54,64,71 141,155,169
[Scheme12]
RGBColors 0,0,0 255,255,255 181,219,176 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 60,60,60 130,185,106 255,0,255 54,64,71 141,155,169
[Scheme13]
RGBColors 0,0,0 255,255,255 177,206,222 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 60,60,60 67,167,184 255,0,255 54,64,71 141,155,169
[Scheme14]
RGBColors 0,0,0 255,255,255 255,156,9 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 49,49,49 255,200,98 255,0,255 54,64,71 141,155,169
[Scheme15]
RGBColors 0,0,0 255,255,255 255,9,249 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 22,22,22 255,98,255 255,0,255 54,64,71 141,155,169
[Scheme16]
RGBColors 0,0,0 255,255,255 255,9,15 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 22,22,22 255,66,70 255,0,0 54,64,71 141,155,169
[Scheme17]
RGBColors 255,255,255 0,0,0 40,105,255 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 85,153,255 236,241,255 0,98,244 255,0,255 54,64,71 141,155,169
[Scheme18]
RGBColors 0,0,0 230,230,230 133,152,167 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 20,31,49 78,101,120 255,0,255 54,64,71 141,155,169
[Scheme19]
RGBColors 0,0,0 230,230,230 169,156,131 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 34,34,34 123,106,74 255,0,255 54,64,71 141,155,169
[Scheme20]
RGBColors 0,0,0 230,230,230 130,164,170 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 9,107,255 34,34,34 73,124,124 255,0,255 54,64,71 141,155,169
