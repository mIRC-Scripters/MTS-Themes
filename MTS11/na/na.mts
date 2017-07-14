[mts]
Name N/A
Author pal
EMail Stankus@centras.lt
Description This is my first maked theme, so if u like it - enjoy. (I used the NoNameScript (www.nnscript.de) Theme stuff)
Version 1.1
MTSVersion 1.1
Script na.mrc

Timestamp ON
TimestampFormat 1 HH:nn:ss ›

Colors 00,14,04,05,14,14,04,02,04,02,02,01,04,07,06,15,12,02,14,15,07,00,15,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,65,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 0,45,0 0,80,255

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

CLineOwner 07
CLineOP 12
CLineVoice 15
CLineRegular 14
CLineEnemy 04
CLineMe 07
CLineFriend 08

Prefix 15×
ParenText (<text>)

TextChan [ <cmode><nick> ] <text>
TextChanSelf [ <cmode><me> ] <text>
ActionChan × <cmode><nick> <text>
ActionChanSelf × <cmode><nick> <text>

NoticeChan —<nick>@<chan>— <text>
Notice —<nick>— <text>
NoticeSelf —<target>— <text>
NoticeSelfChan —<target>— <text>

TextQuery [ <nick> ] <text>
TextQuerySelf [ <nick> ] <text>
ActionQuery × <nick> <text>
ActionQuerySelf × <nick> <text>
TextMsg [ <nick> ] <text>
TextMsgSelf » ‹<target>› <text>

Mode <pre> <nick> sets mode » <modes>
ModeUser <pre> <me> sets mode » <modes>
Join <pre> <nick> (<address>) has joined <chan>
JoinSelf <pre> Now talking in » <chan>
Part <pre> <nick> (<address>) has left » <chan> <parentext>
Kick <pre> <knick> was kicked by » <nick> <parentext>
KickSelf <pre> <me> was kicked by <nick> <parentext>
Quit <pre> <nick> (<address>) Quit <parentext>
Topic <pre> <nick> changes topic to » <text>
Nick <pre> <nick> is now known as » <newnick>
NickSelf <pre> <me> is now known as <newnick>
Invite <pre> <nick> (<address>) invites you to join » <chan>
ServerError <pre> <text>
Rejoin <pre> Rejoined channel » <chan>
Ctcp (<nick> <ctcp>) <text>
CtcpChan (<cmode><nick>:<chan> <ctcp>) <text>

CtcpSelf » (<target>) <ctcp> <text>
CtcpChanSelf » (<target>) <ctcp> <text>

CtcpReply [<nick> <ctcp>] <text>
CtcpReplySelf » [<target>] <ctcp> <text>
Notify <pre> <nick> is now online
UNotify <pre> <nick> is now offline
Wallop <pre> Wallops » <nick> <text>
NoticeServer ‹<nick>› <text>

DNS <pre> Looking up <address>
DNSError <pre> Unable to resolve <address>
DNSResolve <pre> Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error » <text>
Load <pre> N/A theme by pal loaded...
Unload <pre> N/A theme by pal unloaded...

Whois !script cl.whois
Whowas !script cl.whowas

RAW.Other <pre> <text>
RAW.330 !script set -u4 %::clwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 <pre> Topic is  <text>
RAW.333 <pre> Set by <nick> on <text>

Scheme1 xz

[Scheme1]
RGBColors 42,42,42 200,200,200 0,110,56 0,147,0 255,0,0 127,0,0 156,0,156 252,65,0 255,255,0 0,252,0 0,147,147 0,255,255 0,100,252 255,0,255 170,170,170 0,153,255