[mts]
Name B0ld-zer0
Author R4D|X
EMail r4dix010@hotmail.com
Website http://www.mircscripts.org
Description A c00l theme with l0t 0f zer0s and b0ld shiT! :P
Version 1.0
MTSVersion 1.1
Script b0ld-zer0.mrc
 
Timestamp on
timestampformat (HH:nn)
 
Colors 00,06,05,07,02,02,03,03,04,10,03,01,05,07,14,02,06,02,03,05,02,00,02,00,01,14
 
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11
 
CLineOwner 07
CLineOp 02
CLineHOp 02
CLineVoice 12
CLineRegular 01
CLineMe 04
CLineIrcOp 11
 
Prefix •®•
ParenText (<text>)
 
TextChan (<cmode><nick>) <text>
TextChanSelf (<cmode><me>) <text>
ActionChan <pre> <cmode><nick> <text>
ActionChanSelf <pre> <cmode><me> <text>
NoticeChan <pre> <cmode><nick> n0tice <target> (<text>)
Notice <pre> <cmode><nick> n0tice (<text>)
NoticeSelf <pre> <me> n0tice <chan> (<text>)
NoticeSelfChan <pre> <me> <target> (<text>)
TextQuery (<cmode><nick>) <text>
TextQuerySelf (<cmode><me>) <text>
ActionQuery (<cmode><nick>) <text>
ActionQuerySelf (<cmode><me>) <text>
TextMsg <pre> msg fr0m <nick> (<text>)
TextMsgSelf <pre> msg t0 <nick> (<text>)
 
Mode <pre> <nick> sets m0de (<modes>)
ModeUser <pre> <me> sets m0de (<modes>)
Join <pre> <nick> (<address>) j0in <chan>
JoinSelf <pre> J0ined <chan>
Part 6<pre> <nick> (<address>) parts
Kick <pre> <knick> kicked by <nick> (<text>)
KickSelf <pre> You were kicked by <nick> 0n <chan> (<text>)
Quit <pre> <nick> (<address>) quits (<text>)
Topic <pre> <nick> has set t0pic (<text>)
Nick <pre> <nick> is n0w kn0wn as <newnick>
NickSelf <pre> Y0u are n0w kn0wn as <newnick>
Invite <pre> <nick> invites y0u t0 j0in <chan>
ServerError <pre> Err0r (<text>)
Rejoin <pre> Rej0ining <chan>...
Ctcp <pre> CTCP (<ctcp>) fr0m <nick> (<text>)
CtcpChan <pre> CTCP (<ctcp>) t0 <nick> (<text>)
CtcpSelf <pre> CTCP (<ctcp>) t0 <nick> (<text>)
CtcpChanSelf <pre> CTCP (<ctcp>) t0 <chan> (<text>)
CtcpReply <pre> CTCP (<ctcp>) reply fr0m <nick> (<text>)
CtcpReplySelf <pre> CTCP (<ctcp>) reply sent t0 <chan> <nick> (<text>)
Notify <pre> <nick> is n0w 0nline (<text>)
UNotify <pre> <nick> is n0w 0ffline (<text>)
NoticeServer <pre> <nick> (<text>)
 
DNS <pre> Res0lving DNS 0n <nick> (<address>)
DNSError <pre> Unable t0 res0lve DNS
DNSResolve <pre> DNS res0lved <iaddress> (<raddress>)
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> Err0r (<text>)
Load <pre> b0ld-zer0 theme by R4D|X l0aded !! :) <pre>
Unload <pre> b0ld-zer0 theme BY R4D|X unl0aded !! :( <pre>
 
RAW.311 !script _whois.start %::nick %::address %::realname
RAW.314 <pre> <nick> (12<address>2) • 12<realname>2
RAW.319 : <nick> 0n 12<chan>
RAW.312 : <nick> 0n <wserver> (12<serverinfo>2)
RAW.301 : <nick> is away (12<away>2)
RAW.313 : <nick> is an IRC 0Perat0r (12<operline>2)
RAW.317 !script _whois.idle %::nick %::idletime %::signontime
RAW.318 :...... <pre> End 0f /WH0IS c0mmand <pre> ...........................
RAW.369 <pre> End 0f /WH0WAS c0mmand f0r <nick>
 
RAW.OTHER <pre> <text>
RAW.001 <pre> <text>
RAW.002 <pre> Server (<server>) Versi0n (<value>)
RAW.003 <pre> Server created 0n (<value>)
RAW.005 <pre> Pr0t0c0ls supp0rted by server (<text>)
RAW.221 <pre> User m0des (<modes>)
RAW.250 <pre> T0tal number 0f c0nnecti0ns (<value>)
RAW.251 <pre> T0tal users (<users>) Invisible (<text>) 0n <value> servers
RAW.252 <pre> T0tal number 0f perat0rs (<value>)
RAW.253 <pre> Unkn0wn c0nnecti0ns (<value>)
RAW.254 <pre> Number 0f channels (<value>)
RAW.255 <pre> L0cal clients (<users>) Servers (<value>)
RAW.265 <pre> L0cal users (<users>) Maximum users (<value>)
RAW.266 <pre> Gl0bal users (<users>) Maximum users (<value>)
RAW.302 <pre> Userh0st <nick> (<address>) • (<value>)
RAW.315 <pre> End 0f /WH0 c0mmand 0n <value>
RAW.324 <pre> <chan> m0des (<modes>)
RAW.332 <pre> <chan> t0pic (<text>)
RAW.333 <pre> <chan> t0pic set by <nick> 0n <text>
RAW.341 <pre> <nick> was invited t0 <chan>
RAW.353 <pre> Channel names list <chan> (<text>)
RAW.366 <pre> End 0f /NAMES c0mmand f0r <chan>
RAW.372 <pre> <text>
RAW.375 <pre> Viewing message 0f the day...
RAW.376 <pre> End 0f /MOTD c0mmand
RAW.391 <pre> Server time and date (<text>)
 
RAW.401 <pre> N0 such nickname (<nick>)
RAW.403 <pre> N0 such channel (<chan>)
RAW.404 <pre> Unable to send t0 <chan> (+m)
RAW.421 <pre> Invalid command (<value>)
RAW.432 <pre> Invalid nickname (<nick>)
RAW.433 <pre> Nickname is already in use (<nick>)
RAW.471 <pre> (<chan>) is full (+l)
RAW.473 <pre> (<chan>) is invite 0nly (+i)
RAW.474 <pre> Cann0t j0in (<chan>) you are banned (+b)
RAW.475 <pre> Invalid key t0 j0in (<chan>) (+k)
RAW.482 <pre> You are not 0p (<chan>)
 
IMAGECHAN center chan.jpg
