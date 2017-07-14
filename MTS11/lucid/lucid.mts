[mts]
Name lucid
Author pal
EMail Stankus@centras.lt
Description lucid Theme with 3 schemes.
Version 1.1
MTSVersion 1.1
Script lucid.mrc

Timestamp ON
TimestampFormat 12·11HH12·11nn12·

Colors 01,12,04,07,12,12,12,11,11,11,11,00,07,07,07,15,11,11,12,07,00,01,00,01,00,00
RGBColors 255,255,255 42,42,42 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,181,255 0,91,252 255,0,255 127,127,127 180,180,180

FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10

CLineOwner 07
CLineOP 12
CLineVoice 15
CLineRegular 14
CLineEnemy 04
CLineMe 15
CLineFriend 00

Prefix 15–›
ParenText (<text>)

TextChan 12(<cmode><nick>12) <text>
TextChanSelf 12(<cmode><me>12) <text>
ActionChan › <cmode><nick> <text>
ActionChanSelf › <cmode><nick> <text>

NoticeChan -<nick>@<chan>- <text>
Notice -<nick>- <text>
NoticeSelf -<target>- <text>
NoticeSelfChan -<target>- <text>

TextQuery 12(<nick>12) <text>
TextQuerySelf 12(<nick>12) <text>
ActionQuery › <nick> <text>
ActionQuerySelf › <nick> <text>
TextMsg 12(<nick>12) <text>
TextMsgSelf ··· -<target>- <text>

Mode <pre> <nick> sets mode : <modes>
ModeUser <pre> <me> sets mode : <modes>
Join <pre> <nick> has joined <chan>
JoinSelf <pre> Now talking in : <chan>
Part <pre> <nick> has left : <chan> <parentext>
Kick <pre> <knick> was kicked by : <nick> <parentext>
KickSelf <pre> <me> was kicked by : <nick> <parentext>
Quit <pre> <nick> Quit <parentext>
Topic <pre> <nick> changes topic to : <text>
Nick <pre> <nick> is now known as : <newnick>
NickSelf <pre> <me> is now known as <newnick>
Invite <pre> <nick> invites you to join : <chan>
ServerError <pre> <text>
Rejoin <pre> Rejoined channel : <chan>
Ctcp (<nick> <ctcp>) <text>
CtcpChan (<cmode><nick>:<chan> <ctcp>) <text>

CtcpSelf –› (<target>) <ctcp> <text>
CtcpChanSelf –› (<target>) <ctcp> <text>

CtcpReply [<nick> <ctcp>] <text>
CtcpReplySelf –› [<target>] <ctcp> <text>
Notify <pre> <nick> is now online
UNotify <pre> <nick> is now offline
Wallop <pre> Wallops –› <nick> <text>
NoticeServer -<nick>- <text>

DNS <pre> Looking up <address>
DNSError <pre> Unable to resolve <address>
DNSResolve <pre> Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error › <text>
Load <pre> 12( lucid 12) theme by pal loaded...
Unload <pre> 12( lucid 12) theme by pal unloaded...

Whois !script lucid.w

RAW.Other <pre> <text>
RAW.330 !script set -u4 %::clwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 <pre> Topic is  <text>
RAW.333 <pre> Set by <nick> on <text>

Scheme1 Red
Scheme2 Green
Scheme3 Orange

[Scheme1]
RGBColors 255,255,255 42,42,42 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 255,80,104 255,0,0 255,0,255 127,127,127 180,180,180

[Scheme2]
RGBColors 255,255,255 42,42,42 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,175,0 151,232,0 255,0,255 127,127,127 180,180,180

[Scheme3]
RGBColors 255,255,255 42,42,42 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 255,255,0 252,127,0 255,0,255 127,127,127 180,180,180
