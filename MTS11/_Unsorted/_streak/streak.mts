
[mts]
Name streak
Author Quickman
Email None
Description White background theme for mIRC
Website www.quickirc.cjb.net
Version 1.0
MTSVersion 1.1
Script streak.mrc

Timestamp OFF
TimestampFormat 02(01hh:nntt02)
ParenText 02(01<text>02)
Prefix 10•02•01•
RAW.401 <pre> 10No suck nickname: 02(01<nick>02)
RAW.403 <pre> 10No suck channel: 02(01<chan>02)
RAW.432 <pre> 02(01<nick>02)10 is an invalid nickname
RAW.404 <pre> 02Cannot send text to 02(01<chan>02)10 
RAW.433 <pre> 02(01<nick>02)10 is already in use
RAW.421 <pre> 02(01<value>02)10 is an invalid command
RAW.474 <pre> 02error: You are banned from 02(01<chan>02)10
RAW.475 <pre> 02error: Cannot join 02(01<chan>02)10 02(01Need correct key02)10
RAW.473 <pre> 02error: Cannot join 02(01<chan>02)10 02(01Invite only02)10
RAW.471 <pre> 02error: Cannot join 02(01<chan>02)10 02(01Channel is full02)10
RAW.482 <pre> 02error: You arent an operator in 02(01<chan>02)10
RAW.353 <pre> 02(01<chan>02)10 - 02(01<text>02)10
RAW.332 <pre> 02Topic is 02(01<text>02)10
RAW.333 <pre> 02Topic set by 02(01<nick>02)10
RAW.324 <pre> 02Channel Modes: 02(01<modes>02)10
RAW.301 <pre> 02Away: 02(01<text>02)10
RAW.311 !Script raw.311.s
RAW.319 !Script raw.319.s
RAW.312 !Script raw.312.s
RAW.303 !Script raw.303.s
RAW.307 !Script raw.307.s
RAW.317 !Script raw.317.s
RAW.318 !Script raw.318.s
ActionChanSelf 02* <me> <text>
ActionQuerySelf 02* <me> <text>
ActionChan 02* <nick> <text>
ActionQuery 02* <nick> <text>
ServerError <pre> 02error: 02(01<text>02)
Quit <pre> 10quits: 02(01<nick>02)10 02(01<address>02)10 has quit IRC 02(01<text>02)10
Notify <pre> 10notify: 02(01<nick>02)10 is on IRC 02(01<text>02)10
UNotify <pre> 10notify: 02(01<nick>02)10 has left IRC
TextChan 02(01<cmode>01<nick>02)01 <text>
TextQuerySelf 02(01<me>02)01 <text>
TextChanSelf 02(01<cmode>01<me>02)01 <text>
TextQuery 02(01<nick>02)01 <text>
KickSelf <pre> 10kicks: 02(01Your02)10 ass was kicked from 02(01<chan>02)10 by 02(01<nick>02)10 02(01<text>02)10
Nick <pre> 10nick: 02(01<nick>02)10 is now known as 02(01<newnick>02)10
Mode <pre> 10mode: 02(01<nick>02)10 sets mode: 02(01<modes>02)10
Load <pre> 10streak by 02(01Quickman02)10
Notice !Script theme.notice.s
JoinSelf <pre> 10Now talking in 02(01<chan>02)10
Unload <pre> 10Unloaded theme: 02(01<stream>02)10
Invite <pre> 10invite: 02(01<nick>02)10 invites you to join 02(01<chan>02)10
Error <pre> 10error: 02(01<text>02)10
Part <pre> 10parts: 02(01<nick>02)10 02(01<address>02)10 has parted 02(01<chan>02)10 02(01<text>02)10
Rejoin <pre> 10Attemping to rejoin 02(01<chan>02)10
Join <pre> 10joins: 02(01<nick>02)10 02(01<address>02)10 has joined 02(01<chan>02)10
Kick <pre> 10kicks: 02(01<knick>'s02)10 ass was kicked by 02(01<nick>02)10 from 02(01<chan>02)10 02(01<text>02)10
Topic <pre> 10topic: 02(01<nick>02)10 sets topic: 02(01<text>02)10 

Colors 00,02,02,14,02,02,02,02,02,02,02,01,02,02,01,01,02,02,02,02,02,00,01,00,01,15
RGBColors 255,255,255 0,0,0 0,92,184 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,124,255 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 0,0,0,0

CLineMe 02
CLineFriend 02
CLineOwner 01
CLineOP 01
CLineHOP 01
CLineVoice 01
CLineRegular 01

FontDefault Verdana,10
FontChan Verdana,10
FontQuery Verdana,10

Scheme1 Red
Scheme2 Green

[Scheme1]
 Colors 00,02,02,14,02,02,02,02,02,02,02,01,02,02,01,01,02,02,02,02,02,00,01,00,01,15
RGBColors 255,255,255 0,0,0 128,0,0 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 184,0,0 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208


[Scheme2]
Colors 00,02,02,14,02,02,02,02,02,02,02,01,02,02,01,01,02,02,02,02,02,00,01,00,01,15
RGBColors 255,255,255 0,0,0 0,128,0 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 24,180,40 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208


