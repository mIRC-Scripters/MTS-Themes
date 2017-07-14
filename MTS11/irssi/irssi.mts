[mts]
Name irssi
Author hjst
EMail henry@hjst.org
Website http://hjst.org
Description A theme which makes mIRC resemble irssi.
Version 1.00
MTSVersion 1.1
Script irssi.mrc
 
Timestamp ON
TimestampFormat 14HH:nn
 
Colors 15,01,01,08,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,15,01,15,14,01

; RGBColors:
; 00 - White
; 01 - Light Grey
; 02 - Blue
; 03 - Dark Green
; 04 - Red
; 05 - Dark Red
; 06 - Dark Purple
; 07 - Orange
; 08 - Bright Yellow
; 09 - Bright Green
; 10 - Dark Cyan
; 11 - Cyan
; 12 - Light Blue
; 13 - Bright Purple
; 14 - Dark Grey
; 15 - Black

RGBColors 255,255,255 220,220,220 0,0,230 0,168,0 255,0,0 190,0,0 198,0,198 252,127,0 255,255,0 0,252,0 0,170,170 0,230,230 79,79,255 255,0,255 127,127,127 0,0,0
 
CLineOwner 06
CLineOP 05
CLineHOP 06
CLineVoice 14
CLineRegular 14
CLineEnemy 04
CLineMe 11
CLineIrcOp 04
CLineCharIrcOp 04$ 

02(<text>02)
Prefix 00-04!00-
ParenText 05[<text>05]
 
TextChan 03<lt><cmode><nick>03<gt> <text>
TextChanSelf 03<lt><cmode><me>03<gt> <text>
ActionChan * 12<cmode><nick> <text>
ActionChanSelf * 12<cmode><me> <text>
 
NoticeChan 14-13<nick>14(06<chan>14)- <text>
Notice 14-13<nick>14(06<address>14)- <text>
NoticeSelf 05[notice14(04<nick>14)05] <text>
NoticeSelfChan 05[notice14(04<nick>14@05<target>14)05] <text>
NoticeServer 03!<nick> <text>
 
TextQuery 03<lt><nick>03<gt> <text>
TextQuerySelf 03<lt><nick>03<gt> <text>
;TextQuery <lt><nick><gt> <text>
;TextQuerySelf <lt><nick><gt> <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <nick> <text>
ActionMsg * <nick>!<address> <text>
ActionMsgSelf -> * <target> <text>
TextMsg *<nick>!<address>* <text>
TextMsgSelf -> *<target>* <text>
 
Mode <pre> 11<nick> sets mode: 00<modes>
ModeUser <pre> 11<me> sets mode: 00<modes>
Join <pre> 11<nick> has joined 00<chan>
JoinSelf <pre> 11<me> has joined 00<chan>
Part <pre> 10<nick> has left <parentext>
Quit <pre> 10<nick> has quit <parentext>
Kick <pre> 10<knick> was 05kicked by 11<nick> <parentext>
KickSelf <pre> 10<me> was 05kicked by 11<nick> <parentext>
Topic <pre> 00<nick> changed the topic of <chan> to: 00<text>
Nick <pre> 10<nick> is now known as 11<newnick>
NickSelf <pre> You're now known as 00<newnick>
Invite <pre> 11<nick> 14(10<address>14) invites you to join 00<chan>
ServerError <pre> 04SERVER ERROR:05 <text>
Rejoin <pre> Rejoined channel 00<chan>

Ctcp 09<nick>03 requested CTCP 09<ctcp> 03 from 09<me>: <text>
CtcpChan 09<cmode><nick>03:<chan> 09<ctcp>: <text>
CtcpSelf 05[ctcp14(04<target>14)05]00 <ctcp> <text>
CtcpChanSelf 05[ctcp14(04<target>14)05]00 <ctcp> <text>
CtcpReply CTCP 00<ctcp> reply from 00<nick>: <text>
CtcpReplySelf 05[ctcp14(04<target>14)05]00 <ctcp> <text>

Notify <pre> 00<nick> is now online!
UNotify <pre> 00<nick> is now offline!
Wallop <pre> 00Wallops: 11<nick> <text>
 
DNS <pre> Resolving <address>
DNSError <pre>04 Unable to resolve <address>
DNSResolve <pre> Resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 04Error: <text>
Load <pre> 11irssi 00theme loaded.
Unload <pre> 11irssi theme unloaded.
 
Whois !script irssi.whois
; Whowas !script ircNx.whowas
 
;RAW.Other <pre> <text>
RAW.332 <pre> Topic for 10<chan>: <text>
RAW.333 <pre> Topic set by 00<nick> <parentext>
 
