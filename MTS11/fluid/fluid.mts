;----------fluid.mts----------generated with Theme Editor v0.6.33b by BeteLgeuZe-----
[mts]
Name fluid
Author eli-
Email osiris@415.zzn.com
Website none
Version 2.0
MTSVersion 1.1
 
Script fluid.mrc
 
Timestamp OFF
ParenText (<text>)
RAW.401 <pre> 15No such nickname:3 <nick>
RAW.403 <pre> 15No such channel: 3<chan>
Prefix 3:15:0:
RAW.404 <pre> 15Cannot send text to 3<chan>
RAW.432 <pre> 3<nick>15 is an invalid nickname
RAW.421 <pre> 3<value>15 is an invalid command
RAW.433 <pre> 3<nick> 15is already in use
Quit <pre> 3<nick>15 has quit IRC. 3(0<text>3)
NoticeSelf 15-3> 0<nick>15: <text>
ServerError <pre> 3Error:15 <text>
CtcpReply 15-3> 15CTCPReply3[0<nick>15/0<ctcp>3]0 - 15<text>
RAW.474 <pre> 15Cannot join 3<chan>15. You are banned
ActionChanSelf 3! 15<me>0 <text>
NoticeSelfChan 15-3>0 <chan>15 <text>
RAW.475 <pre> 15Cannot join 3<chan>15. Need channel key
RAW.473 <pre> 3<chan>15 is invite only
CtcpReplySelf 15-3> 15CTCPReply3[0<nick>15/0<ctcp>3]0 - 15<text>
RAW.471 <pre> 3<chan>15 is currently full
DNS 3[15DNS on:0 <address>3]
Notify 3[0Notify3]15 <nick> is on IRC 3(0<text>3)
RAW.252 <pre> 15Opers:3 <value>
RAW.372 <pre> 3<text>
ActionQuerySelf 3! 15<me>0 <text>
RAW.253 <pre> 15Unknown connections:3 <value>
RAW.329 <pre> 15Created on:3 <text>
ActionChan 3! 15<nick>0 <text>
RAW.250 <pre> 15Total connections:3 <value>
RAW.482 <pre> 15You are not opped on 3<chan>
RAW.251 !Script fluid.lusers
TextChan 3(15<cmode>0<nick>3)15 <text>
RAW.376 !Script fluid.emotd
RAW.353 <pre> 3<chan>0-15 <text>
RAW.254 <pre> 15Channels:3 <value>
RAW.366 <pre> 3<chan>0-15 end of /names list
RAW.318 00---15----00---3(15End of /Whois3)00---15----00---
ActionQuery 3! 15<nick>0 <text>
RAW.319 !Script fluid.wchans
RAW.255 <pre> 15Clients:3 <users> 0-15 Servers:3 <value>
RAW.375 !Script fluid.bmotd
RAW.332 <pre> 0Topic 3[15 <text> 3]
RAW.317 !Script fluid.widle
RAW.333 <pre> 15Topic set by 3<nick> [0<text>3]
UNotify 3[0Notify3]15 <nick> has left IRC 03(00<text>03)
RAW.307 0-3Registered
RAW.315 <pre> 15End of /who on 3<value>
Mode <pre> 3<nick>15 sets mode:0 <modes>
KickSelf <pre> 3You15 were kicked from 0<chan>15 by 3<nick>
Nick <pre> 3<nick>15 is now known as 3<newnick>
RAW.312 0-3Server:00 <wserver> 3|15 <serverinfo>
RAW.324 <pre> 15Channel modes:0 <modes>
Load <pre> 3fluid 15theme loaded
RAW.301 0-3Away:00 <text>
RAW.313 0-3<nick>00 is an 15IRC Operator
NoticeServer 15-3> [0<nick>3]15 <text>
RAW.311 !Script fluid.whois
Ctcp 15-3> 15CTCP3[0<nick>15/0<ctcp>3] 0-15 <text>
ModeUser <pre> 3You15 set modes:0 <modes>
Notice 15-3> [0Notice3]15 <nick>3:15 <text>
CtcpSelf 15-3> 15CTCP3[0<nick>15/0<ctcp>3]0 - 15<text>
TextQuerySelf 3(15<me>3)15 <text>
DNSError 3[15DNS failed3]
JoinSelf <pre> 3You15 have joined0 <chan>
CtcpChanSelf 15-3> 15CTCP3[0<chan>15/0<ctcp>3]0 - 15<text>
Unload <pre> 3fluid 15theme unloaded
CtcpChan 15-3> 0CTCP3[0<nick>15:0<chan>15/0<ctcp>3]0 - 15<text>
DNSResolve 3[15DNS resolved to:0 <raddress>3]
TextChanSelf 3(00<cmode>15<me>3)15 <text>
Invite <pre> 3<nick>15 invites you to join0 <chan>
Error <pre> 3Error:15 <text>
Part <pre> 3<nick>15 has left0 <chan>
Rejoin <pre> 15Attempting to rejoin...
TextQuery 3(0<nick>3)15 <text>
Join <pre> 3<nick>15 has joined0 <chan>
Kick <pre> 3<nick>15 has kicked0 <knick> 3(15<text>3)
NoticeChan 3-0<nick>0<target>3-15 <text>
NickSelf <pre> 3You15 are now known as 3<newnick>
Topic <pre> 3<nick>15 changes topic to 3(0<text>3)
 
Colors 01,06,04,08,15,03,03,03,03,03,03,15,07,11,06,15,03,10,03,05,14,01,15,01,00,15
RGBColors 255,255,255 0,0,0 0,0,128 64,159,131 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
BaseColors 03,03,03,03
 
CLineOP 03
CLineVoice 15
CLineRegular 00
CLineMe 03
FontDefault Verdana,10
FontChan Verdana,10
FontQuery Verdana,10
 
Scheme1 Tahoma
Scheme2 Courier New
Scheme4 blue
Scheme3 orange
Scheme5 lime
Scheme6 rust
Description new fluid theme. added a lot more schemes
 
[Scheme1]
Colors 01,06,04,08,15,03,03,03,03,03,03,15,07,11,06,15,03,10,03,05,14,01,00,01,00,15
FontQuery Tahoma,11
FontDefault Tahoma,11
FontChan Tahoma,11
 
[Scheme2]
Colors 01,06,04,07,10,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,14,01,15,01,15,15
FontQuery Courier New,12
FontDefault Courier New,12
FontChan Courier New,12
RGBColors 255,255,255 0,0,0 0,0,128 255,150,66 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
RGBColors 255,255,255 0,0,0 0,0,128 100,149,189 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
RGBColors 255,255,255 0,0,0 0,0,128 220,0,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
BaseColors 03,03,03,03
 
RGBColors 255,255,255 0,0,0 0,0,128 232,0,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
RGBColors 255,255,255 0,0,0 0,0,128 122,122,122 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
[Scheme3]
RGBColors 255,255,255 0,0,0 0,0,128 248,177,71 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
[Scheme4]
RGBColors 255,255,255 0,0,0 0,0,128 113,171,193 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
[Scheme5]
RGBColors 255,255,255 0,0,0 0,0,128 120,241,156 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
[Scheme6]
BaseColors 03,03,03,03
RGBColors 255,255,255 0,0,0 0,0,128 211,138,65 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 166,166,166
 
