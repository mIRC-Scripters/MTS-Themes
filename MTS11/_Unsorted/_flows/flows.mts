
[mts]
Name Elements
Author Quickman
Email =\
Description Nice, simple, clean high-color theme
Website www.quickirc.cjb.net
Version 1.1
MTSVersion 1.1
Script flows.mrc

Timestamp OFF
TimestampFormat 02(00hh:nntt02)
ParenText 02(00<text>02)
RAW.401 <pre> 10No suck nickname: 02(00<nick>02)
RAW.403 <pre> 10No suck channel: 02(00<chan>02)
Prefix 02°10°00°
RAW.432 <pre> 02(00<nick>02)10 is an invalid nickname
RAW.404 <pre> 02Cannot send text to 02(00<chan>02)
RAW.433 <pre> 02(00<nick>02)10 is already in use
RAW.421 <pre> 02(00<value>02)10 is an invalid command
Quit <pre> 10quits: 02(00<nick>02)1002(00<address>02)10 has quit IRC 02(00<text>02)10
ServerError <pre> 02error: 02(00<text>02)
RAW.474 <pre> 02(00<chan>02)10 cannot join channel: you are banned
RAW.475 <pre> 10You need a key to join 02(00<chan>02)
ActionChanSelf 02* <me> <text>
RAW.473 <pre> 02(00<chan>02)10 is invite only
RAW.471 <pre> 02(00<chan>02)10 is full
Notify <pre> 10notify: 02(00<nick>02)10 is on IRC 02(00<text>02)10
NoticeChan <pre> 10notice: 02(00<chan>02)10 02(00<nick>02)10 02(00<text>02)10
NoticeSelfChan <pre> 10notice: 02(00<chan>02)10 02(00<me>02)10 02(00<text>02)10
RAW.372 <pre> 02(00<text>02)
RAW.252 <pre> 10Opers: 02(00<value>02)
ActionQuerySelf 02* <me> <text>
ActionChan 02* <nick> <text>
RAW.482 <pre> 10You arent an op in 02(00<chan>02)
TextChan 02(14<cmode>00<nick>02)13 <text>
RAW.353 <pre> 02(00<chan>02) - 02(00<text>02)
RAW.318 0-10End of whois for 02(00<nick>02)
RAW.366 <pre> 10End of /names list
ActionQuery 02* <nick> <text>
RAW.319 !script raw319
RAW.332 <pre> 10Topic is 02(00<text>02)
RAW.317 !Script raw317
RAW.333 <pre> 10Topic set by 02(00<nick>02)
UNotify <pre> 10notify: 02(00<nick>02)10 has left IRC
RAW.307 !Script raw307
RAW.315 <pre> 10End of /who on 02(00<value>02)
KickSelf <pre> 10kicks: 02(00You02)10 were kicked from 02(00<chan>02)10 by 02(00<nick>02)10 02(00<text>02)
Nick <pre> 10nick: 02(00<nick>02)10 02(00<address>02)10  is now known as 02(00<newnick>02)
Mode <pre> 02(00<nick>02)10 sets mode: 02(00<modes>02)10
RAW.312 !Script raw312
RAW.324 <pre> 10Channel modes: 02(00<modes>02)
Load <pre> 10loaded theme: 02(00Flows02)10
RAW.313 !Script raw313
RAW.301 <pre> 10Away: 02(00<text>02)
RAW.311 !Script raw311
Notice !Script theme.notice
TextQuerySelf 02(00<me>02)13 <text>
JoinSelf <pre> 10now talking in 02(00<chan>02)10
Unload <pre> 10unloaded theme: 02(00Flows02)10
Invite <pre> 10invite: 02(00<nick>02)10 invites you to join 02(00<chan>02)10
TextChanSelf 02(14<cmode>00<me>02)13 <text>
Error <pre> 10error: 02(00<text>02)10
Part <pre> 10parts: 02(00<nick>02)10 02(00<address>02)10 has parted 02(00<chan>02)10 02(00<text>02)10
Rejoin <pre> 10attempting to rejoin...
TextQuery 02(00<nick>02)13 <text>
Join <pre> 10joins: 02(00<nick>02)10 02(00<address>02)10 has joined 02(00<chan>02)10
Kick <pre> 10kicks: 02(00<nick>02)10 has kicked 02(00<knick>02)10 02(00<text>02)10
Topic <pre> 10topic: 02(00<nick>02)10 sets topic: 02(00<text>02)10

Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 0,92,184 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 0,124,255 0,252,255 0,0,255 96,92,96 128,124,128 208,204,208
BaseColors 02,01,14,01

CLineOwner 00
CLineOP 00
CLineHOP 02
CLineVoice 00
CLineRegular 00
CLineMe 02
CLineFriend 02
CLineEnemy 04
CLineIrcOP 07

CLineCharOwner 00
CLineCharOP 00
CLineCharHOP 02
CLineCharVoice 00
CLineCharRegular 00

FontDefault Verdana,10
FontChan Verdana,10
FontQuery Verdana,10

Scheme1 Red
Scheme2 Green
Scheme3 Purple
Scheme4 Orange
Scheme5 Gray
Scheme6 Yellow

[Scheme1]
 Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 128,0,0 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 184,0,0 0,252,255 0,0,255 96,96,96 128,124,128 208,204,208

[Scheme2]
Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 0,128,0 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 0,212,0 0,252,255 0,0,255 96,96,96 128,124,128 208,204,208

[Scheme3]
Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 104,0,200 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 133,133,203 0,252,255 0,0,255 96,96,96 128,124,128 208,204,208

[Scheme4]
Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 251,119,0 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 255,140,88 0,252,255 0,0,255 96,96,96 128,124,128 208,204,208

[Scheme5]
Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 96,96,96 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 184,184,184 0,252,255 0,0,255 96,96,96 128,124,128 208,204,208

[Scheme6]
Colors 01,00,00,00,00,00,00,00,00,00,00,13,00,00,13,13,00,00,00,00,00,01,00,01,00,00
RGBColors 255,255,255 0,0,0 255,252,0 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,252,0 147,147,0 0,252,255 0,0,255 96,96,96 128,124,128 208,204,208
