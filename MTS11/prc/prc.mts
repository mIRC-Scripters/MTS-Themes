[mts]
Name prc
Author phrenic
EMail phren1c@hotmail.com
Website www.nohomepage.com
Description mIRC MTS theme created for prc'irc, works in any MTS engine.
Version 0.12;
MTSVersion 1.1
Script prc.mrc
 
Timestamp ON
TimestampFormat 1HH.nn -
 
Colors 15,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,15,1,15,1,15,6,15
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
Colors 15,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,15,1,15,1,15,6,15
 
FontDefault Tahoma,10
FontQuery Tahoma,10
FontChan Tahoma,10
 
ParenText (<text>)
 
TextChan :: <cmode><nick>: <text>
TextChanSelf ‡ <cmode>'<nick>: 14<text>
ActionChan <pre> <cmode><nick> <text>
ActionChanSelf <pre> <cmode><nick> <text>
 
NoticeChan -<nick>@<chan>- <text>
Notice -<nick>- <text>
NoticeSelf -<target>- <text>
NoticeSelfChan -<target>- <text>
 
TextQuery <nick>: <text>
TextQuerySelf (<nick>): <text>
ActionQuery <pre> <nick> <text>
ActionQuerySelf <pre> <nick> <text>
TextMsg *<nick>* <text>
TextMsgSelf -> *<target>* <text>
 
Mode 7<pre> <nick> sets to mode: <modes>
ModeUser 7<pre> <me> sets to mode: <modes>
Join 14 <nick>  (<address>) entered <chan>
JoinSelf <pre> Sucessfully joined <chan>!
Part 5<pre> <nick> (<address>) has left <chan> <parentext>
Kick <pre> <knick> got kicked by: <nick> <parentext>
KickSelf <pre> <me> [!] got kicked!. by: <nick> <parentext>
Quit <pre> <nick> (<address>) Quit <parentext>
Topic 0<pre> <nick> changes the topic to:  <text>
Nick <pre> <nick> changes to: <newnick>
NickSelf <pre> <me> changes to: <newnick>
Invite <pre> <nick> (<address>) invites you to join <chan>
ServerError <pre> <text>
Rejoin <pre> Rejoined channel <chan>
Ctcp [<nick> <ctcp>] <text>
CtcpChan [<cmode><nick>:<chan> <ctcp>] <text>
 
CtcpSelf -> [<target>] <ctcp> <text>
CtcpChanSelf -> [<target>] <ctcp> <text>
 
CtcpReply [<nick> <ctcp>] <text>
CtcpReplySelf -> [<target>] <ctcp> <text>
Notify <pre> <nick> is now online!
UNotify <pre> <nick> is now offline!
Wallop <pre> Wallops: <nick> <text>
NoticeServer -<nick>- <text>
 
DNS <pre> Looking up <address>
DNSError <pre> Unable to resolve <address>
DNSResolve <pre> Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Error: <text>
Load <pre> prc theme by phrenic loaded.
Unload <pre> prc theme by phrenic unloaded.
 
Whois !script mirc.whois
Whowas !script mirc.whowas
 
RAW.Other <pre> <text>
RAW.330 !script set -u4 %::mircwhois.auth $gettok(%::text,4,32)
RAW.332 <pre> Topic is '<text>'
RAW.333 <pre> Set by <nick> on <text>
 
Scheme1 Orginal fonts
Scheme2 No timestamps
 
RAW.401 ``` error ```
 
Prefix ¤
 
CLineCharRegular 14534
 
CLineRegular 14
CLineOp 07
CLineCharOp 07[@]
 
[Scheme1]
FontDefault Fixedsys,12
FontQuery Fixedsys,12
FontChan Fixedsys,12
 
[Scheme2]
Timestamp OFF
