; Theme information
[mts]
Name licht theme
Author Klaus Schänke
EMail klaus.schaenke@hamburg.de
Website N/A
Description A light, and easy theme. Lots of color schemes.
Version 1.0
MTSVersion 1.1
Script licht.mrc
 
Timestamp ON
TimestampFormat 1(hh:nn)
 
Colors 00,02,02,02,02,02,02,02,02,02,02,01,14,02,07,01,02,02,02,02,01,00,01,00,01,15
RGBColors 255,255,255 0,0,0 0,0,128 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
 
FontDefault Tahoma,10
FontChan Tahoma,10
FontQuery Tahoma,10
 
CLineOwner 01
CLineOp 01
CLineHOp 01
CLineVoice 01
CLineRegular 01
CLineMe 02
CLineFriend 01
CLineEnemy 01
CLineIrcOp 07
 
TextChan (<nick>) <text>
TextChanSelf (<me>) <text>
ActionChan <nick> <text>
ActionChanSelf <me> <text>
NoticeChan [<target>] <text>
Notice [<target>] <text>
NoticeSelf [<target>] <text>
NoticeSelfChan [<target>] <text>
TextQuery (<nick>) <text>
TextQuerySelf (<me>) <text>
ActionQuery <nick> <text>
ActionQuerySelf <me> <text>
TextMsg (<nick>) <text>
TextMsgSelf (<me>) <text>
 
Mode mode ... <modes> by: <nick>
ModeUser mode ... <modes> by: <me>
Join join ... <nick> - <chan>
JoinSelf join ... <chan>
Part part ... <nick> - <chan>
Kick kick ... <nick> kicked <knick> why? <text>
KickSelf Kicked ... by: <nick> why? <text>
Quit quit ... <nick> - <text>
Topic topic ... <text> by: <nick>
Nick nick ... <nick> changed to <newnick>
NickSelf new nick ... <newnick>
Invite invite ... <chan> by: <nick>
ServerError server error ... <text>
Rejoin rejoining ... <chan>
Ctcp ctcp ... (<ctcp>) - <text>
CtcpChan ctcp ... (<ctcp>) - on <chan> - <text>
CtcpSelf ctcp ... (<ctcp>) - sent to <nick> - <text>
CtcpChanSelf ctcp ... (<ctcp>) - sent to <chan> - <text>
CtcpReply ctcp reply ... (<ctcp>) - <text>
CtcpReplySelf ctcp reply ... sent to <nick><chan>
Notify notify ... <nick> is online - <text>
UNotify notify ... <nick> is offline - <text>
Wallop wallop ... <text>
NoticeServer server notice ... <nick> - <text>
 
DNS dns ... <nick>@<address>
DNSError dns ... error
DNSResolve dns ... resolved <nick>@<address> - <naddress>@<iaddress>
Echo echo ... <text>
EchoTarget echo ... (<chan>) - <text>
Error error ... <text>
Load licht theme loaded - viel glück
Unload licht theme unloaded
 
RAW.311 !Script licht.whois %::nick %::address %::realname
RAW.314 !Script licht.whowas %::nick %::address %::realname
RAW.319 - channels ~ <chan>
RAW.312 - server ~ <wserver> - <serverinfo>
RAW.301 - away ~ <text>
RAW.307 - registerednick ~ <isregd>
RAW.313 - ircop ~ <isoper> - <operline>
RAW.317 !Script licht.idle
RAW.318 end of whois on <nick>
RAW.369 end of whowas on <nick>
Whois -
Whowas -
 
RAW.Other raw ... <text>
RAW.001 willkommen zu irc
RAW.002 server & version ... <server> - <value>
RAW.003 server created on ... <value>
RAW.005 protocols ... <text>
RAW.221 usermode ... <nick> - <modes>
RAW.250 connections ... <value>
RAW.251 users/invis/servers ... <users>/<text>/<value>
RAW.252 operators ... <value>
RAW.253 unknown connections ... <value>
RAW.254 total channels ... <value>
RAW.255 local clients/servers ... <users>/<servers>
RAW.265 local users/max ... <users>/<value>
RAW.266 global users/max ... <users>/<value>
RAW.302 userhost ... <nick>@<address> - <value>
RAW.315 end of who on <value>
RAW.324 channel modes ... <chan> modes - <modes>
RAW.332 !Script licht.topic %::chan %::text
RAW.333 !Script licht.topic2 %::nick %::text
RAW.341 invited ... <nick> to <chan>
RAW.352 who ... <nick>@<address> - <cmode> - <wserver> - <text>
RAW.353 names ... (<chan>) - <text>
RAW.366 names ... end
RAW.372 motd ... <text>
RAW.375 motd ... start
RAW.376 motd ... end
RAW.391 time & date ... <text>
 
RAW.401 no such nickname - <text>
RAW.403 no such channel - <chan>
RAW.404 unable to send - <chan>
RAW.421 invalid command - <value>
RAW.432 invalid nickname - <nick>
RAW.433 nickname being used - <nick>
RAW.471 channel is full - <chan>
RAW.473 channel is invite only - <chan>
RAW.474 banned from channel - <chan>
RAW.475 password needed - <chan>
RAW.482 you arn't opped - <chan>
 
Scheme1 black
Scheme2 dark blue
Scheme3 sand
Scheme4 dirt
Scheme5 heaven
Scheme6 innocent
Scheme7 amp
 
[Scheme1]
RGBColors 0,0,0 255,255,255 200,200,200 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
[Scheme2]
RGBColors 255,255,255 38,83,129 159,199,237 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
[Scheme3]
RGBColors 212,210,195 9,9,9 155,146,121 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
[Scheme4]
RGBColors 51,51,51 255,255,255 124,124,124 200,0,0 0,36,168 128,0,0 200,220,224 240,240,240 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FontDefault IBMPC,11
FontChan IBMPC,11
FontQuery IBMPC,11
[Scheme5]
RGBColors 206,213,225 105,131,168 0,0,128 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
[Scheme6]
RGBColors 255,255,255 81,6,12 0,0,128 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
[Scheme7]
RGBColors 63,63,63 208,136,63 166,93,29 200,0,0 0,36,168 128,0,0 200,220,224 32,80,96 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
 
