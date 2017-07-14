[mts]
Name IRCube Mts
Author MijT
EMail ayudahtml@interlap.com.ar
Website http://ircube.dsland.org
Description IRCube Theme Default New Generation. Only one scheme... Enjoy it!
Version 2.6ng
MTSVersion 1.1
Script ircube.mrc
Unload <pre> IRCube mts unloaded... by MijT [v2.6ng] / only for all
Load <pre> IRCube mts loaded... by MijT [v2.6ng] / only for all
Colors 6,7,7,7,10,10,10,9,15,15,15,10,7,7,0,0,9,9,15,7,15,7,1,12,10,15,7,7
RGBColors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 32,60,104 128,160,192 255,255,0 0,128,192 208,208,208 0,180,176 16,36,88 64,64,64 128,128,128 88,172,248
ClineOP 15
ClineHOP 15
ClineVOICE 10
ClineREGULAR 0
ClineOWNER 1
ClineME 7
ClineCHAROP 15@
ClineCHARHOP 15%
ClineCHARVOICE 10+
ClineCHARREGULAR
FontDefault verdana,11
FontQuery verdana,11
FontChan verdana,11
Timestamp OFF
Prefix 0»15»
ParenText [<text>]
TextChan !script %:echo $iif(%::cmode,15 $+ %::cmode $+  $+ %::nick,15:: $+ %::nick) $+ :. %::text
TextChanSelf !script %:echo $iif(%::cmode,15 $+ %::cmode $+  $+ %::me,15:: $+ %::me) $+ :. %::text
ActionChan -<cmode><nick> <text>
ActionChanSelf -<cmode><me> <text>
NoticeServer <pre> notice/server: <text>
Notice <pre> notice/<nick>: <text>
NoticeChan <pre> <nick>/<chan>/notice: <text>
NoticeSelf <pre> notice to <nick>: <text>
NoticeSelfChan <pre> notice to <chan>: <text>
TextQuery ::<nick>:. <text>
TextQuerySelf ::<me>:. <text>
ActionQuery -<nick> <text>
ActionQuerySelf -<me> <text>
Mode <pre> <nick> set <chan> mode: <modes>
ModeUser <pre> New usermodes: <modes>
Join <pre> JOIN: <nick> [<address>]
JoinSelf <pre> Now talking in <chan>
Part !script %:echo %::pre PART: %::nick $+([,%::address,]) %::parentext
Kick <pre> KICK: <knick> by <nick> <parentext>
KickSelf <pre> You were kicked by <nick> <parentext>
Quit <pre> QUIT: <nick> [<address>] <parentext>
Topic <pre> <nick> sets topic to: <text>
Nick <pre> <nick> is now <newnick>
NickSelf <pre> Your new nickname is: <newnick>
ServerError <pre> Server: <text>
Rejoin <pre> Attempting to rejoin <chan>
Notify <pre> Notify: <nick> [<address>] is Online
UNotify <pre> UNotify: <nick> [<address>] is Offline
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <text>
Whois !Script th.whois
CtcpSelf CTCP [<nick>] <CTCP>
CtcpChanSelf CTCP [<chan>] <CTCP>
Ctcp CTCP <CTCP> by <nick> <parentext>
CtcpChan CTCP <CTCP> <chan>: by <nick> <parentext>
CtcpReply CTCP <CTCP> (<nick>): <text>
CtcpReplySelf CTCP <CTCP> (<nick>): <text>
Raw.Other <pre> <text>
Raw.250 <pre> Total connection(s): <value>
Raw.251 <pre> Users: <users> Invisible: <value>
Raw.252 <pre> Operator(s) online: <value>
Raw.253 <pre> Unknown connection(s): <value>
Raw.254 <pre> Number of channels formed: <value>
Raw.265 <pre> Local users: <users> Max: <value>
Raw.266 <pre> Global users: <users> Max: <value>
Raw.324 !script %:echo %::pre $iif($len(%::modes) > 1,Modes: %::modes,No Modes)
Raw.329 !script %:echo %::pre Created: $asctime(%::text,HH:nn:ss - dd/mm/yyyy) 
Raw.332 <pre> Topic: <text>
Raw.333 <pre> Set by: <nick>
Raw.391 <pre> Date: <date>
Raw.401 <pre> <nick>...No such nickname
Raw.403 <pre> <chan>...No such channel
Raw.404 <pre> Cannot send data to <chan>
Raw.421 <pre> /<value>...Invalid command
Raw.432 <pre> <nick>...Invalid nickname
Raw.433 <pre> <nick> already in use
Raw.471 <pre> Unable to join <chan> (full)
Raw.473 <pre> Unable to join <chan> (invite only)
Raw.474 <pre> Unable to join <chan> (banned)
Raw.475 <pre> Unable to join <chan> (incorrect key)
Raw.482 <pre> Your are not op on <chan>
Raw.other !script %:echo %::pre %::text $iif(%:comments,$+([,%:comments,]))