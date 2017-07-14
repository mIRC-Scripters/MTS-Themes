# ------------------------------------------ #
# Name: EasyTheme, EasyTheme.mts
# Author: iD - iD@uNkn0wn.eu
# Greetings to: #help.script & #ircscript.help
# ------------------------------------------ #

EasyTheme.mts
[mts]
Name EasyTheme
Author iD - uNkn0wn.eu
Email iD@uNkn0wn.eu
Description EasyTheme - Enjoy it :)
Website www.uNkn0wn.eu
Version 1.6a
MTSVersion 1.1
Script EasyTheme.mrc
LOAD !script EasyTheme.load
ParenText 5(0<text>5)
Prefix 5[0¤5] 5›
ServerError 5[0Æ5]›15 Error:0 <text>
CtcpReply 5[0?¿5] 8› !<nick>8! <ctcp> <text>
CtcpReplySelf 5[0?¿5] 5› 8!<target>8! <ctcp> <text>
TextMsg 5*<nick>5!<address>* <text>
ActionQuerySelf 05[0!¡!05] ›0<me>5 <text>
ActionChan 05[0!¡!05] ›14 <cmode>0<nick>5 <text>
ActionMsgSelf —› 5* <target> <text>
ActionQuery 05[0!¡!05] ›0<nick>5 <text>
NoticeServer  5[050!¡!05] ›14 Notice: 5-0<nick>5-14 <text>
Ctcp 5[0?¿5] 8› ?0<nick>8?0 <ctcp> <text>
TextMsgSelf 5[0—›5] › 5*<target>5* <text>
CtcpSelf 5[0?¿5] 8› ?<target>8? <ctcp> <text>
TextQuerySelf 5[0†5] › (14<me>5)0 <text>
CtcpChanSelf 5[0?¿5] 5› 8?<target>8? <ctcp> <text>
ActionMsg 5* <nick>5!<address> <text>
NoticeChan 5[050!¡!05] ›14 Notice: 5-14<cmode>0<nick>5- <text>
NickSelf 5[0!¡!5] 5›14 Nick:0 <me>14 changed nick to 0<newnick>

Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 255,127,0 118,0,137 255,185,59 255,255,62 0,213,67 10,10,40 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213

BaseColors 08,00,00,00

CLineOwner 02
CLineOP 05
CLineVoice 04
CLineRegular 14
CLineMe 07
CLineIrcOP 11

CLineCharOwner *
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Scheme1 DarkBlue Blue
Scheme2 DarkBlue Green
Scheme3 DarkBlue Gold
Scheme4 DarkBlue Light Yellow

Scheme5 DarkGreen Orange
Scheme6 DarkGreen Blue
Scheme7 DarkGreen Green
Scheme8 DarkGreen Gold
Scheme9 DarkGreen Light Yellow

Scheme10 DarkRed Orange
Scheme11 DarkRed Blue
Scheme12 DarkRed Green
Scheme13 DarkRed Gold
Scheme14 DarkRed Light Yellow

Scheme15 White Orange
Scheme16 White Green
Scheme17 White Blue
Scheme18 White Gold

ActionChanSelf 05[0!¡!05] ›14 <cmode>0<me>5 <text>

NoticeSelf 5[050!¡!05] ›14 Notice: 5-0<target>5- <text>
NoticeSelfChan 5[050!¡!05] ›14 Notice: 5-0<target>5- <text>

Join 5[0/j5] 5›14 14Join:0 <nick> 5(0<address>5)
Part 5[0/p5] 5›14 14Part:0 <nick> 5(0<address>5)
JoinSelf 5[0/j5] 5›14 14Joined: 5(0 <chan> 5)

Kick 5[0Æ5] 5›14 kick:0 <nick>14 has fucked 0<knick> <parentext>
KickSelf 5[0Æ5] 5›14 You were kicked from 0<nick>14 @ 0<chan> 0<parentext>

Quit 5[0µ5] 5›14 Quit: 0<nick> 5(0<address>5)14 has left IRC0 <parentext>

Rejoin 5[0?¿5] 5›14 Rejoining:0 <chan>

Invite 5[0!¡!5] 5›14 Invite:0 <nick>14 invites you to join 5(0 <chan> 5)
Topic 5[0/t5] 5›14 Topic: 0<nick>14 changes topic to 5(0 <text> 5)

TextChan 5[0†5] › (14<cmode><nick>5)0 <text>
TextChanSelf 5[0†5] › (0<cmode>14<me>5)0 <text>


raw.311 !script Whois.addr
raw.319 !script Whois.chan 
raw.312 !script Whois.using
raw.330 !script Whois.authed
raw.301 !script Etaway
raw.313 !script Whois.ircop
raw.317 !script Whois.idle
raw.318 !script Whois.stop
raw.307 !script Whois.reg
raw.379 !script Whois.modes
raw.378 !script Whois.connect
raw.313 !script Whois.administrator
raw.310 !script Whois.helper
raw.671 !script Whois.ssl

raw.329

raw.324 5[0/t5] 5›14 Modes:0 <modes>
raw.333 5[0/t5] 5›14 Topic is set by0 <nick> 14on0 <text>
raw.332 5[0/t5] 5›14 Topic is "0<text>0" 
raw.306 5[0/a5] 5›14 You're now marked as being away.
raw.305 5[0/a5] 5›14 You're no longer marked as being away
raw.401 5[0/n5] 5›14 Nick:0 <nick> 14no such nickname.
raw.432 5[0/n5] 5›0 <nick>14 is an invalid nickname.
raw.433 5[0/n5] 5›14 Nickname already taken.
raw.438 5[0/n5] 5›14 Nickname changed too fast, please wait a while and try again...
raw.439 5[0/e5] 5›14 Target changed too fast, please wait a while and try again...
raw.473 5[0/e5] 5›14 Unable to join  -0 <chan>14 is invite only 5(0+i5)14.
raw.474 5[0/e5] 5›14 Unable to join - You're banned from 0<chan>14 5(0+b5)14.
raw.475 5[0/e5] 5›14 Unable to join  -0 <chan>14 is locked 5(0+k5)14.
raw.478 5[0/e5] 5›0 <chan>14 banlist is full.
raw.482 5[0/e5] 5›14 You're not an op on 0<chan>14.
raw.405 5[0/j5] 5›0 5(0<chan>5)014: Unable to join - You're on too many channels.
raw.471 5[0/e5] 5›0 5(0<chan>5)014: Unable to join - Channel is full (+l)

Timestamp ON
TimestampFormat 5(0HH:nn:ss5)
Nick 5[0!¡!5] 5›14 Nick:0 <nick>14 changed nick to 0<newnick>

CtcpChan 5[0?¿5] 8› ?<nick>14@0<chan>8?0 <ctcp> <text>

Notify 5[0!¡!5] ›14 Notify:0 <nick>14 is now online!
UNotify 5[0!¡!5] ›14 Notify:0 <nick>14 is now offline!
Wallop 5[0~5] ›14 Wallop:0 ~ <nick> ~0 <text>

ModeUser 5[0±5] 5›14 UserMode is now 0<modes>
Mode 5[0±5] 5›14 Mode:0 <nick>14 sets0 <modes>
TextQuery 5[0†5] › (0<nick>5)0 <text>

[Scheme1]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 40,40,100 118,0,137 255,185,59 255,255,62 0,213,67 10,10,40 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213 
[Scheme2]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 0,126,0 118,0,137 255,185,59 255,255,62 0,213,67 10,10,40 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme3]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 252,191,87 118,0,137 255,185,59 255,255,62 0,213,67 10,10,40 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme4]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 252,225,140 118,0,137 255,185,59 255,255,62 0,213,67 10,10,40 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213

[Scheme5]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 255,127,0 118,0,137 255,185,59 255,255,62 0,213,67 10,25,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme6]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 40,40,100 118,0,137 255,185,59 255,255,62 0,213,67 10,25,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme7]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 0,126,0 118,0,137 255,185,59 255,255,62 0,213,67 10,25,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme8]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 252,191,87 118,0,137 255,185,59 255,255,62 0,213,67 10,25,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme9]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 252,225,140 118,0,137 255,185,59 255,255,62 0,213,67 10,25,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213

[Scheme10]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 255,127,0 118,0,137 255,185,59 255,255,62 0,213,67 25,10,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme11]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 40,40,100 118,0,137 255,185,59 255,255,62 0,213,67 25,10,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme12]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 0,126,0 118,0,137 255,185,59 255,255,62 0,213,67 25,10,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme13]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 252,191,87 118,0,137 255,185,59 255,255,62 0,213,67 25,10,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213
[Scheme14]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 254,254,254 0,0,0 14,59,112 0,112,62 207,0,45 252,225,140 118,0,137 255,185,59 255,255,62 0,213,67 25,10,10 76,255,213 76,255,213 227,123,255 127,127,127 255,255,213

[Scheme15]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 0,0,0 254,254,220 0,0,127 0,144,0 255,0,0 255,127,0 159,0,159 255,127,0 255,255,0 0,248,0 254,254,254 0,255,255 0,0,255 255,0,255 127,127,127 0,0,0
[scheme16]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 0,0,0 254,254,220 0,0,127 0,144,0 255,0,0 0,126,0 159,0,159 255,127,0 255,255,0 0,248,0 254,254,254 0,255,255 0,0,255 255,0,255 127,127,127 0,0,0
[scheme17]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 0,0,0 254,254,220 0,0,127 0,144,0 255,0,0 40,40,100 159,0,159 255,127,0 255,255,0 0,248,0 254,254,254 0,255,255 0,0,255 255,0,255 127,127,127 0,0,0
[scheme18]
Colors 10,07,00,04,00,00,00,05,05,05,05,00,00,00,05,00,05,05,05,14,00,10,00,10,14,14
RGBColors 0,0,0 254,254,220 0,0,127 0,144,0 255,0,0 252,191,87 159,0,159 255,127,0 255,255,0 0,248,0 254,254,254 0,255,255 0,0,255 255,0,255 127,127,127 0,0,0