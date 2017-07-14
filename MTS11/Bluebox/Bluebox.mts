; Theme information
[mts]
Name Bluebox
Author nacitar
EMail nacitar@earthlink.net
Version 1.0
MTSVersion 1.1
 
Timestamp ON
TimestampFormat 12[14HH12:14nn12:14ss12]
 
Colors 01,15,14,14,14,14,14,14,14,14,14,15,14,14,15,15,14,14,14,14,15,02,11,01,14,15
RGBColors 255,255,255 0,0,0 0,0,127 0,168,0 255,84,88 168,0,0 168,0,168 168,84,0 255,252,88 88,252,88 0,168,168 0,218,223 23,139,255 255,84,255 120,116,120 168,168,168
 
FontDefault fixedsys,12
FontQuery fixedsys,12
FontChan fixedsys,12
 
CLineOwner 03
CLineOp 12
CLineHOp 12
CLineVoice 10
CLineRegular 10
CLineMe 11
CLineIrcOp 08
 
Prefix 0×
ParenText 15(<text>)
 
TextChan 10<lt>12<nick>10>15 <text>
TextChanSelf 10<lt>12<me>10>15 <text>
ActionChan 10* 12<nick>15 <text>
ActionChanSelf 10* 12<nick>15 <text>
NoticeChan 00-11<nick>12/11<target>00-15 <text>
Notice 00-11<nick>00-15 <text>
NoticeSelf 00-12[00notice12(11<nick>12)]00-15 <text>
NoticeSelfChan 00-12[00notice12(11<target>12)]00-15 <text>
TextQuery 10<lt>12<nick>10>15 <text>
TextQuerySelf 10<lt>12<me>10>15 <text>
ActionQuery 10* 12<nick>15 <text>
ActionQuerySelf 10* 12<nick>15 <text>
TextMsg 00-12MSG00:11<nick>00-15 <text>
TextMsgSelf 00-> 12[00msg12(11<target>12)]15 <text>
 
Mode 00× 12[00mode12(11<nick>12)] 15<modes>
ModeUser 00× 12[00mode12(11<me>12)] 15<modes>
Join 00× 12[00join12(11<nick>12)] 15<address>
JoinSelf 00× 12[00join12(11<me>12)] 15<address>
Part 00× 12[00part12(11<nick>12)] 15<address>
Kick 00× 12[00kick12(11<nick>12)] 00<knick> 11>15 <text>
KickSelf 00× 12[00kick12(11<nick>12)] 00<knick> 11>15 <text>
Quit 00× 12[00quit12(11<nick>12)]15 <text>
Topic 00× 12[00topic12(11<nick>12)]15 <text>
Nick 0× 12[00nickchange12(11<nick>12)]00 -> 11<newnick>
NickSelf 0× 12[00nickchange12(11<nick>12)]00 -> 11<newnick>
Invite 0× 12[00invite12(11<nick>12)] 11<chan>
ServerError 0× 12[00server-error12] 15<text>
Rejoin 00× 12[00rejoin12(11<chan>12)] 15Attempting to rejoin...
Ctcp 12[00ctcp12(11<nick>12)] <ctcp> <text>
CtcpChan 12[00ctcp12(11<nick>12/11<chan>12)] <ctcp> <text>
CtcpSelf 15-> 12[00ctcp12(11<nick>12)]15 <ctcp> <text>
CtcpChanSelf 15-> 12[00ctcp12(11<chan>12)]15 <ctcp> <text>
CtcpReply 12[00ctcp12(11<nick>12)] <ctcp> <text>
CtcpReplySelf 15-> 12[00ctcp12(11<nick>12)] <ctcp> <text>
Notify 00× 12[00notify12] 11<nick>12(15<server>12) is 00online
UNotify 00× 12[00notify12] 11<nick>12(15<server>12) is 00offline
Wallop <pre> <text>
NoticeServer 00-11<nick>00-15 <text>
 
DNS 00× 12[00dns12]15 Looking up address 11<address>15...
DNSError 00× 12[00dns12]00 Error 11> 15Could not resolve address
DNSResolve 00× 12[00dns12]15 Resolved: 12<raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <text>
Load <pre> 12Bluebox Loaded
Unload <pre> 12Bluebox Unloaded
 
RAW.311 00× 12[00user12(11<nick>12)] 15<address> 12*15 <realname>
RAW.319 00× 12[00chan12(11<nick>12)] 15<chan>
RAW.312 00× 12[00serv12(11<nick>12)] 15<wserver> 12*15 <serverinfo>
RAW.301 00× 12[00away12(11<nick>12)] 15<text>
RAW.307 !Script
RAW.313 !Script
RAW.317 00× 12[00idle12(11<nick>12)] 15<idletime>, signed on <signontime>
RAW.318 !Script
 
RAW.001 !Script
RAW.002 !Script
RAW.003 !Script
RAW.005 !Script
RAW.221 0× 12[00usermode12(11<nick>12)]15 <modes>
RAW.250 0× 12Total connections: 11<value>
RAW.251 0× 12Users: 11<users> 12 Invisible:11 <text> 12 Servers:11 <value>
RAW.252 0× 12Number of operators: 11<value>
RAW.253 0× 12Number of unknown connections: 11<value>
RAW.254 0× 12Number of channels: 11<value>
RAW.255 0× 12Local clients: 11<users> 12 Servers:11 <value>
RAW.265 0× 12Local users: 11<users> 12 Max:11 <value>
RAW.266 0× 12Global users: 11<users> 12 Max:11 <value>
RAW.302 0× 12[00userhost12(11<nick>12)]15 <address>
RAW.315 !Script
RAW.324 00× 12[00mode12(11<chan>12)] 15<modes>
RAW.332 00× 12[00topic12(11<chan>12)]15 <text>
RAW.333 00× 12Topic set by 11<nick>12 on 11<text>
RAW.341 00-> 12[00invite12(11<nick>12)] 11<chan>
RAW.352 00× 12[00user12(11<nick>12)] 15<address> 12*15 <realname>
RAW.353 !Script %:echo 0× 12[00names12(11 $+ %::chan $+ 12)] 11> 12[11 $+ $replace( $sorttok($gettok( %::text ,2-,32),32) ,$chr(32),12] [11) $+ 12]
RAW.366 !Script
RAW.372 !Script
RAW.375 !Script
RAW.376 !Script
RAW.329 !Script %:echo 00× 12Channel created on11 $asctime( %::text ,dddd mmm dd yyyy HH:nn:ss)
RAW.004 !Script
 
RAW.401 00× 12No such nick: 11<nick>
RAW.403 00× 12No such channel: 11<chan>
RAW.404 00× 12Unable to send message to 11<chan>
RAW.421 00× 12Unknown command: 11<value>
RAW.432 00× 12Invalid nick: 11<nick>
RAW.433 00× 12Nick in use: 11<nick>
RAW.471 00× 12Channel is full: 11<chan>
RAW.473 00× 12Channel is invite only: 11<chan>
RAW.474 00× 12Cannot join 11<chan>12, address is banned
RAW.475 00× 12Cannot join 11<chan>12, need correct key
RAW.482 00× 12You are not an operator on <chan>
RAW.441 !Script %:echo 00× 12Nick11 %::chan 12is not on11 $gettok( %::text ,1,32)
Description blue theme made for nacitar by nacitar
 
