[mts]
Name ircNx
Author whut
EMail whut@l33t0rs.net
Website http://www.l33t0rs.net
Description ircN inspired MTS theme created by whut, should work in any MTS engine.
Version 1.04
MTSVersion 1.1
Script ircNx.mrc
 
Timestamp ON
TimestampFormat 01[HH:nn:ss01]
 
Colors 15,06,12,04,02,12,03,10,04,12,03,01,14,07,06,02,10,04,03,04,01,15,01,15,12,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,89,89 0,121,121 0,0,252 255,0,255 127,127,127 210,210,210
 
FontDefault Courier New,12
FontQuery Courier New,12
FontChan Courier New,12
 
CLineOwner 12
CLineOP 03
CLineHOP 02
CLineVoice 14
CLineRegular 10
CLineEnemy 04
CLineMe 07
CLineCharOwner 12*
CLineIrcOp 04
CLineCharIrcOp 04$ 

Prefix ***
ParenText 02(<text>02)
 
TextChan 01[12<cmode><nick>01] <text>
TextChanSelf 01[12<cmode><me>01] <text>
ActionChan • 12<cmode><nick> <text>
ActionChanSelf • 12<cmode><me> <text>
 
NoticeChan [12<nick>:<chan>14]-[<text>]
Notice [12<nick>14]-[<text>]
NoticeSelf [12<nick>@<target>14]-[<text>]
NoticeSelfChan [12<nick>@<target>14]-[<text>]
 
TextQuery <lt><nick><gt> <text>
TextQuerySelf <lt><nick><gt> <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <nick> <text>
ActionMsg * <nick>!<address> <text>
ActionMsgSelf -> * <target> <text>
TextMsg *<nick>!<address>* <text>
TextMsgSelf -> *<target>* <text>
 
Mode <pre> <nick> sets mode: <modes>
ModeUser <pre> <me> sets mode: <modes>
Join <pre> <nick> (<address>) has joined <chan>
JoinSelf <pre> Now talking in <chan>!
Part <pre> <nick> (<address>) has left <chan> <parentext>
Kick <pre> <knick> was kicked by <nick> <parentext>
KickSelf <pre> <me> was kicked by <nick> <parentext>
Quit <pre> <nick> (<address>) Quit <parentext>
Topic <pre> <nick> changes topic to <text>
Nick <pre> <nick> is now known as <newnick>
NickSelf <pre> <me> is now known as <newnick>
Invite <pre> <nick> (<address>) invites you to join <chan>
ServerError 4 <pre> <text>
Rejoin <pre> Rejoined channel <chan>
Ctcp [<nick> <ctcp>] <text>
CtcpChan [<cmode><nick>:<chan> <ctcp>] <text>
 
CtcpSelf -> [<target>] <ctcp> <text>
CtcpChanSelf -> [<target>] <ctcp> <text>
 
CtcpReply [<nick> <ctcp>] <text>
CtcpReplySelf -> [<target>] <ctcp> <text>
Notify <pre> <nick> is now online!
UNotify <pre> <nick> is now offline!
Wallop <pre> Wallops: <nick> <text>
NoticeServer [12<nick>14]-[<text>]
 
DNS <pre> let's take a closer look at <address>
DNSError 4<pre> Unable to resolve <address> - damn!
DNSResolve <pre> Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error 4 <pre> Error: <text>
Load 4 <pre> ircNx theme by whut loaded.
Unload 4 <pre> ircNx theme by whut unloaded.
 
Whois !script ircNx.whois
Whowas !script ircNx.whowas
 
RAW.Other <pre> <text>
RAW.330 !script set -u4 %::ircnxwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 <pre> Topic is '<text>'
RAW.333 <pre> Set by <nick> on <text>
 
Scheme1 Dark
 
[Scheme1]
RGBColors 255,255,255 190,190,190 0,0,230 0,168,0 255,0,0 176,0,0 198,0,198 252,127,0 255,255,0 0,252,0 0,140,140 0,193,193 79,79,255 255,0,255 127,127,127 0,0,0
