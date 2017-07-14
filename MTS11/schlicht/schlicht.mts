[mts]
Name Schlicht
Author tomate
EMail webmaster@nahkampfnager.de
Website www.nahkampfnager.de
Description Schlicht. My very own theme. Love it or hate it. Credits go to greeny, because I used some of the nns (www.nnscript.de) whois stuff.
Version 1.8
MTSVersion 1.1
Script schlicht.mrc

Timestamp ON
TimestampFormat 14HHnn.ss      

Colors 01,14,14,14,15,15,14,14,14,14,14,00,14,14,14,15,14,14,15,14,14,01,00,01,00,15,15,14
RGBColors 255,255,255 33,33,33 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,212,255 0,120,255 255,0,255 144,144,144 196,196,196
BaseColors 11,12

CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 15
CLineRegular 14
CLineMe 00
CLineFriend 15
CLineEnemy 04
CLineIrcOP 00

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

Scheme1 Buchenrot
Scheme2 Grasgrün
Scheme3 Sonnengelb

Prefix       
ParenText <text>

TextChan <nick><c1>: <text>
TextChanSelf <me><c1>: <text>
ActionChan <c2><nick> <text>
ActionChanSelf <c2><nick> <text>

NoticeChan <pre>notice from <nick>/<chan><c2>: <text>
Notice <pre>notice from <nick><c2>: <text>
NoticeSelf <pre>notice sent to <target><c2>: <text>
NoticeSelfChan <pre>notice sent to <target><c2>: <text>

TextQuery <nick><c1>: <text>
TextQuerySelf <nick><c1>: <text>
ActionQuery <c2><nick> <text>
ActionQuerySelf <c2><nick> <text>
TextMsg <pre><pre>msg from <nick><c2>: <text>
TextMsgSelf <pre><pre>msg sent to <target><c2>: <text>

Mode <pre><pre> <nick> <c1>sets mode <modes>
ModeUser <pre> <me> <c1>sets mode <modes>
Join <pre><pre> <nick> <c2>enters <chan>
JoinSelf <pre> now <c2>talking in <chan>
Part <pre><pre> <nick> <c2>leaves <chan> <parentext>
Kick <pre><pre> <nick> <c2>kicked <knick> <parentext>
KickSelf <pre> <nick> <c2>kicked <me> <parentext>
Quit <pre><pre> <nick> <c2>quits <parentext>
Topic <pre><pre> <nick> <c1>changed topic to <text>
Nick <pre><pre> <nick> <c1>changed nick to <newnick>
NickSelf <pre><pre> <me> <c1>changed nick to <newnick>
Invite <pre> <nick> invites you to join<c2>: <chan> 
ServerError <pre><pre> <text>
Rejoin <pre> <c2>rejoined channel <chan>
Ctcp ctcp received from <nick><c2>: <ctcp> <text>
CtcpChan ctcp received from <nick> at <chan><c2>: <ctcp> <text>
CtcpSelf ctcp sent to <target><c2>: <ctcp> <text>
CtcpChanSelf ctcp sent to <target><c2>: <ctcp> <text>
CtcpReply replies to ctcp<c2>: <ctcp> <text>
CtcpReplySelf <target> replies to ctcp<c2>: <ctcp> <text>
Notify <pre> <nick> is now online! <text>
UNotify <pre> <nick> is now offline! <text>
Wallop <pre> Wallops<c1>: <nick> <text>
NoticeServer servernotice from <nick><c2>: <text>

DNS Looking up <address>
DNSError Unable to resolve <address>
DNSResolve Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error<c2>: <text>
Load Schlicht loaded
Unload Schlicht unloaded

Whois !script schlicht.whois
Whowas !script schlicht.whowas

RAW.Other <pre> <text>
RAW.330 !script set -u4 %::schlichtwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 <pre> <c1>topic is <text>
RAW.333 <pre> <c1>set by <nick> on <text>
RAW.341 <pre> <nick> has been invited to join <chan>
RAW.401 <pre> there is no one using nick <nick>
RAW.403 <pre> there is no channel <chan>
RAW.433 <pre> nickname <nick> is already in use
RAW.471 <pre> you can't join channel <chan>: +l
RAW.473 <pre> you can't join channel <chan>: +i
RAW.474 <pre> you can't join channel <chan>: +b
RAW.475 <pre> you can't join channel <chan>: +k

[Scheme1]
Colors 01,14,14,14,15,15,14,14,14,14,14,00,14,14,14,15,14,14,15,14,14,01,00,01,00,15,15,14
RGBColors 255,255,255 33,33,33 0,0,128 0,144,0 231,73,63 180,30,30 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 144,144,144 196,196,196
BaseColors 04,05

CLineOwner 04
CLineOP 04
CLineHOP 04
CLineVoice 15
CLineRegular 14
CLineMe 00
CLineFriend 15
CLineEnemy 04
CLineIrcOP 00

[Scheme2]
Colors 01,14,14,14,15,15,14,14,14,14,14,00,14,14,14,15,14,14,15,14,14,01,00,01,00,15,15,14
RGBColors 255,255,255 33,33,33 0,0,128 45,145,75 255,0,0 170,30,30 160,0,160 255,128,0 255,255,0 140,200,140 0,144,144 0,255,255 0,0,255 255,0,255 144,144,144 196,196,196
BaseColors 09,03

CLineOwner 09
CLineOP 09
CLineHOP 09
CLineVoice 15
CLineRegular 14
CLineMe 00
CLineFriend 15
CLineEnemy 04
CLineIrcOP 00

[Scheme3]
Colors 01,14,14,14,15,15,14,14,14,14,14,00,14,14,14,15,14,14,15,14,14,01,00,01,00,15,15,14
RGBColors 255,255,255 33,33,33 0,0,128 0,144,0 255,0,0 170,30,30 160,0,160 255,166,0 255,200,15 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 144,144,144 196,196,196
BaseColors 08,07

CLineOwner 07
CLineOP 07
CLineHOP 07
CLineVoice 15
CLineRegular 14
CLineMe 00
CLineFriend 15
CLineEnemy 04
CLineIrcOP 00