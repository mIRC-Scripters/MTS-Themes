[mts]
Name echelon
Author greeny
EMail greeny@nnscript.de
Website www.nnscript.de
Description echelon MTS theme by greeny with 8 schemes. Hope you like it :). You have to install the font from the zip archive for this to work properly, or use another high ASCII font. This theme was tested on the latest KTE 1.4 and worked fine, so die if it doesn't work for you kthxbye?
Version 1.31
MTSVersion 1.1
Script echelon.mrc

Timestamp ON
TimestampFormat 10(15HH14:15nn10)

Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,102,204 0,128,255 0,66,240 253,0,253 116,116,116 174,174,174

FontDefault IBMPC,12
FontQuery IBMPC,12
FontChan IBMPC,12

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 15
CLineRegular 14
CLineEnemy 04
CLineMe 07

Prefix 14ù11í14ù15
ParenText 14(<text>)

TextChan !script echelon.txtal -t $+(,%::cmode) %::nick %::text
TextChanSelf !script echelon.txtal -t $+(,%::cmode) %::me %::text
ActionChan !script echelon.txtal -a $+(,%::cmode) %::nick %::text
ActionChanSelf !script echelon.txtal -a $+(,%::cmode) %::me %::text

NoticeChan <pre> 11notice15 received from 11<nick>15@11<chan>15: <text>
Notice <pre> 11notice15 received from 11<nick>15: <text>
NoticeSelf <pre> 11notice15 sent to 11<target>15: <text>
NoticeSelfChan <pre> 11notice15 sent to 11<target>15: <text>

TextQuery !script echelon.txtal -t $+(,%::cmode) %::nick %::text
TextQuerySelf !script echelon.txtal -t $+(,%::cmode) %::me %::text
ActionQuery !script echelon.txtal -a $+(,%::cmode) %::nick %::text
ActionQuerySelf !script echelon.txtal -a $+(,%::cmode) %::me %::text
TextMsg <pre> 11message15 received from 11<nick>15: <text>
TextMsgSelf <pre> 11message15 sent to 11<target>15: <text>

Mode !script echelon.eval mode %::nick %::chan %::modes
ModeUser <pre> 11usermodes15: <modes>
Join !script echelon.eval join %::nick %::chan
JoinSelf <pre> 11joined15 <chan>
Part !script echelon.eval part %::nick %::chan %::text
Kick !script echelon.eval kick %::knick %::chan $+(%::nick,:) %::text
KickSelf !script echelon.eval kick %::knick %::chan $+(%::nick,:) %::text
Quit !script echelon.eval quit %::nick %::chan %::text
Topic !script echelon.eval topc %::nick %::chan %::text
Nick !script echelon.eval nick %::newnick %::chan %::nick
NickSelf !script echelon.eval nick %::newnick %::chan %::nick
Invite !script echelon.eval invt %::nick %::chan %::chan
ServerError <pre> 11server error15: <text>
Rejoin <pre> 11rejoining15 <chan>
Ctcp <pre> 11ctcp15 received from 11<nick>15: <ctcp> <text>
CtcpChan <pre> 11ctcp15 received from 11<nick>15@11<chan>15: <ctcp> <text>
CtcpSelf <pre> 11ctcp15 sent to 11<nick>15: <ctcp> <text>
CtcpChanSelf <pre> 11ctcp15 sent to 11<chan>15: <ctcp> <text>
CtcpReply <pre> 11ctcpreply15 received from 11<nick>15: <ctcp> <text>
CtcpReplySelf <pre> 11ctcpreply15 sent to 11<nick>15: <ctcp> <text>
Notify <pre> 11notify15: <nick> is now online! <text>
UNotify <pre> 11unnotify15: <nick> is no longer online! <text>
Wallop <pre> 11wallop15: <text>
NoticeServer <pre> 11server notice15 from 11<nick>15: <text>

DNS <pre> 11dns15: looking up <address>...
DNSError <pre> 11dns15: error, unable to resolve <address>
DNSResolve <pre> 11dns15: resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error: <text>
Load <pre> 15Echelon theme v1.31 by greeny loaded. Type /echelon to advertise ;).
Unload <pre> 15Echelon theme v1.31 by greeny unloaded.

Whois !script echelon.whois
Whowas !script echelon.whowas

RAW.Other <pre> 15<text>
RAW.001 !script echelon.welc 1 %::text
RAW.002 !script echelon.welc 2 %::text
RAW.003 !script echelon.welc 3 %::text
RAW.004 !script return
RAW.005 !script return
RAW.221 <pre> 11current modes15: <nick>11/15<modes>
RAW.251 !script echelon.lusers 1 %::users %::text %::value
RAW.252 !script echelon.lusers 2 %::value
RAW.253 !script echelon.lusers 3 %::value
RAW.254 !script echelon.lusers 4 %::value
RAW.255 !script echelon.lusers 5 %::text
RAW.265 <pre> 11local users15: <users>, 11max15: <value>
RAW.266 <pre> 11global users15: <users>, 11max15: <value>
RAW.302 <pre> 11userhost15: <nick>11!15<address>
RAW.324 <pre> 11<chan> modes15: <modes>
RAW.329 !script %:echo %::pre 11channel created15: $asctime(%::text,dddd $+ $chr(44) mmm dd yyyy $+ $chr(44) HH:nn:ss)
RAW.330 !script set -u4 %::echwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 !script echelon.topic 1 %::text
RAW.333 !script echelon.topic 2 %::nick %::text
RAW.341 <pre> 11invited15 <nick> to <chan>
RAW.401 <pre> 11no such nick15 <nick>
RAW.403 <pre> 11no such chan15 <chan>
RAW.404 <pre> 11can't send15 to <chan> (moderated?)
RAW.421 <pre> 11no such command15 <value>
RAW.432 <pre> 11invalid nick15 <value>
RAW.433 <pre> 11nick in use15 <nick>
RAW.471 <pre> 11can't join <chan>15 (limit reached)
RAW.473 <pre> 11can't join <chan>15 (invite only)
RAW.474 <pre> 11can't join <chan>15 (you are banned)
RAW.475 <pre> 11can't join <chan>15 (key needed)

Scheme1 Red
Scheme2 Green
Scheme3 Yellow
Scheme4 Grey
Scheme5 Teal
Scheme6 Orange
Scheme7 White
Scheme8 Inverted

[Scheme1]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 204,0,0 255,0,0 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme2]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,204,0 0,255,0 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme3]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 204,199,0 242,255,0 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme4]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 102,102,102 127,127,127 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme5]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 0,200,225 0,230,255 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme6]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,252,0 204,142,0 255,166,0 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme7]
Colors 01,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,01,15,01,15,14
RGBColors 255,255,255 0,0,0 0,0,164 0,185,0 253,32,0 183,0,0 217,0,217 253,133,0 255,179,0 0,255,0 200,200,200 255,255,255 0,66,240 253,0,253 116,116,116 174,174,174
[Scheme8]
Colors 00,15,15,15,11,11,14,14,14,14,14,15,15,15,15,15,14,14,14,14,14,00,15,00,15,14
RGBColors 235,235,235 0,0,0 0,0,164 0,119,0 253,32,0 183,0,0 164,0,164 225,118,0 240,168,0 0,187,0 0,70,121 0,83,151 0,66,240 210,0,210 115,115,115 35,35,35