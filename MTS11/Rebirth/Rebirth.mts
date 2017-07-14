[mts]
Name Rebirth
Author Nick
EMail nick@acresource.com
Website http://www.acresource.com
Description Rebirth MTS theme.
Version 4.5
MTSVersion 1.1
Script Rebirth.mrc
 
Timestamp ON
TimestampFormat [h:nn T]
 
Scheme1 No Timestamp
Scheme2 Dark Sandblast
 
Colors 00,02,02,09,02,02,02,02,02,02,02,02,02,02,02,01,02,02,02,02,01,00,01,00,01,15
RGBColors 200,200,200 0,0,0 0,0,0 198,2,23 0,0,0 67,78,167 0,0,0 64,128,128 255,255,0 0,0,150 0,0,200 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
FontDefault bright,13
FontQuery bright,13
FontChan bright,13
 
Prefix 1-9ù1-
ParenText <pre> 5<text>
 
TextChan !Script %:echo 9[5 $+ %::cmode $+ %::nick $+ $str($chr(255),$calc(12 - $len(%::cmode $+ %::nick))) $+ 9] %::text
TextChanSelf !Script %:echo 9[9 $+ %::cmode $+ %::me $+ $str($chr(255),$calc(12 - $len(%::cmode $+ %::me))) $+ 9] %::text
ActionChan 9!5 <nick> <text>
ActionChanSelf 9!5 <nick> <text>
NoticeChan <pre> notice5(<target>5): <text>
Notice <pre> notice5(<nick>5) <text>
NoticeSelf <pre> notice5(<text>5) sent to 9<nick>
NoticeSelfChan <pre> notice5(<text>5) sent to 9<target>
TextQuery !Script %:echo 9[5 $+ %::nick $+ $str($chr(255),$calc(12 - $len(%::nick))) $+ 9] %::text
TextQuerySelf !Script %:echo 9[9 $+ %::me $+ $str($chr(255),$calc(12 - $len(%::me))) $+ 9] %::text
ActionQuery 10!5 <nick> <text>
ActionQuerySelf 10!5 <nick> <text>
TextMsg <pre> message from5(<nick>5): <text>
TextMsgSelf <pre> message5(<target>5): <text>
 
Mode <pre> mode5(<modes>5) changed by <nick>
ModeUser <pre> <me> sets mode5(<modes>5) on <chan>
Join <pre> joins5(<nick>9[<address>9]5)
JoinSelf <pre> you have joined 5<chan>
Part <pre> parts5(<nick>9[<address>9]5)
Kick <pre> kick5(<nick>:<knick>5) 9[ <text> 9]
KickSelf <pre> You were kicked from 9<chan> by 5<nick>9[ <text> 9]
Quit <pre> quit5(<nick>9[<address>9]5) <text>
Topic <pre> topic5(9<chan> by 9<nick>5) <text>
Nick <pre> nick5(9<nick>5) changed to 9<newnick>
NickSelf <pre> nickname now 9<newnick>
Invite <pre> invite5(<chan>5) by 9<nick>
ServerError <pre> server error5(<text>5)
Rejoin <pre> rejoin attempt5(<chan>5)
Ctcp <pre> ctcp5(<ctcp>5) by 9<nick>
CtcpChan <pre> ctcp5(<ctcp>5) from 9<chan>(<nick>9) <text>
CtcpSelf <pre> ctcp5(<ctcp>5) sent to 9<nick>
CtcpChanSelf <pre> ctcp5(<ctcp>5) sent to 9<chan>
CtcpReply <pre> reply5(<ctcp>:<nick>5) <text>
CtcpReplySelf <pre> reply5(<ctcp>5) sent to 9<nick>
Notify <pre> notify5(<nick>5) <text>
UNotify <pre> unotify5(<nick>5) <text>
Wallop <pre> wallop5(<text>5)
NoticeServer <pre> servernotice5(<nick>5) <text>
 
DNS <pre> dns5(<address>5)
DNSError <pre> dns5(<address>5) error, could not resolve
DNSResolve <pre> dns5(<address>5) resolved to 9<raddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> 9error: <text>
Load !Script rebirth.load
Unload <pre> theme5(Rebirth 1.05) unloaded, sorry you had to do that!
 
Whois !script rebirth.whois
 
RAW.Other <pre> <text>
RAW.001 <pre> <text>
RAW.002 <pre> 5<server> is running version 9<value>
RAW.003 <pre> 5<server> was created on 9<value>
RAW.005 <pre> protocols5(<text>5) are supported.
RAW.221 <pre> usermodes5(<nick>9 / <modes>5) are set.
RAW.250 <pre> connections5(<value>5) total.
RAW.251 <pre> 9Users: <users> / 9Invisible: <text> / 9Servers: <value>
RAW.252 <pre> 9Operators online: <value>
RAW.253 <pre> 9Unknown connections: <value>
RAW.254 <pre> 9Channels: <value>
RAW.255 <pre> 9Local clients: <users> / 9Servers: <value>
RAW.265 <pre> 9Local users: <users> / 9Max: <value>
RAW.266 <pre> 9Global users: <users> / 9Max: <value>
RAW.302 <pre> userhost5(<nick>5) 9<address>
RAW.324 <pre> chanmodes5(<chan>9 / <modes>5)
RAW.332 <pre> topic5(<chan>5) <text>
RAW.333 <pre> topic on 9<chan> set by 9<nick> on 9<text>.
RAW.341 <pre> invited5(<nick>5) into 9<chan>
 
RAW.401 <pre> no such nickname5(<nick>5)
RAW.403 <pre> no such channel5(<chan>5)
RAW.404 <pre> chan5(<chan>5) 9unable to send message
RAW.421 <pre> command5(<value>5) 9invalid
RAW.432 <pre> nickname5(<nick>5) 9invalid
RAW.433 <pre> nickname5(<nick>5) 9in use
RAW.471 <pre> channel5(<chan>5) 9is full
RAW.473 <pre> channel5(<chan>5) 9invite only
RAW.474 <pre> channel5(<chan>5) 9you are banned, no access allowed
RAW.475 <pre> channel5(<chan>5) 9key required
RAW.482 <pre> channel5(<chan>5) 9not oped, command not functionable
 
 
[Scheme1]
Timestamp OFF
TimestampFormat [h:nn T]
 
 
[Scheme2]
Colors 00,01,02,05,02,02,02,02,02,02,02,02,02,02,02,01,02,02,02,02,01,00,01,00,01,15
RGBColors 0,0,0 255,255,255 255,255,255 198,2,23 0,0,0 200,200,200 0,0,0 64,128,128 255,255,0 255,148,40 0,0,200 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130