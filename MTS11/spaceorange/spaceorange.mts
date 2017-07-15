[mts]
; Theme information
Name Spaceorange
MTSVersion 1.1
Version 1.0
Author cyndis
Script spaceorange.mrc
FontDefault Courier New,13,B
FontChan Courier New,13,B
FontQuery Courier New,13,B
CLineCharRegular 01
CLineCharMe 01#
Colors 01,07,07,07,07,07,07,07,07,07,07,07,07,07,06,07,07,07,07,07,07,01,07,01,07,14
 
Prefix <c1>×0
TextChan !Script %:echo %::pre  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick $+ %::cmode) $+  $+ %::c2 $+ ]0 %::text
 
TextChanSelf !Script %:echo %::pre  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick $+ %::cmode) $+  $+ %::c2 $+ ]0 %::text
 
ActionChan !Script %:echo %::pre  $+ %::c2 $+ *0 $so_alignr(9,»,%::nick $+ %::cmode) %::text
ActionChanSelf !Script %:echo %::pre  $+ %::c2 $+ *0 $so_alignr(9,»,%::nick $+ %::cmode) %::text
 
NoticeChan !Script %:echo $so_ntype(%::target)  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
 
Notice !Script %:echo $so_ntype(%::target)  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0  %::text
NoticeSelf !Script %:echo $so_ntype(%::target)  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
 
NoticeSelfChan !Script %:echo $so_ntype(%::target)  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
 
TextQuery !Script %:echo %::pre  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
TextQuerySelf !Script %:echo %::pre  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
 
ActionQuery !Script %:echo %::pre  $+ %::c2 $+ *0 $so_alignr(9,»,%::nick) %::text
ActionQuerySelf !Script %:echo %::pre  $+ %::c2 $+ *0 $so_alignr(9,»,%::nick) %::text
TextMsg !Script %:echo  $+ %::c1 $+ P  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
TextMsgSelf !Script %:echo  $+ %::c1 $+ P  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
 
Mode !Script %:echo  $+ %::c1 $+ M  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ sets mode:  $+ %::modes
ModeUser !Script %:echo  $+ %::c1 $+ M  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ sets mode:  $+ %::modes
 
Join !Script %:echo  $+ %::c1 $+ J  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::address joined
JoinSelf !Script %:echo  $+ %::c1 $+ J  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::address joined
 
Part !Script %:echo  $+ %::c1 $+ P  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::address parted: %::text
 
Kick !Script %:echo  $+ %::c1 $+ K  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 kicked %::knick $+ : %::text
 
KickSelf !Script %:echo  $+ %::c1 $+ K  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ kicked %::knick $+ : %::text
 
Quit !Script %:echo  $+ %::c1 $+ Q  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::address disconnected from irc: %::text
 
Topic !Script %:echo  $+ %::c1 $+ T  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ changed topic to: %::text
 
Nick !Script %:echo  $+ %::c1 $+ n  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ changed nickname to  $+ %::newnick
NickSelf !Script %:echo  $+ %::c1 $+ n  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ changed nickname to  $+ %::newnick
Invite !Script %:echo  $+ %::c1 $+ I  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ invites you to join %::chan
 
ServerError !Script %:echo  $+ %::c1 $+ E 7[0 $+ servererr $+ 7] 0 $+ Server error: %::text
 
Rejoin !Script %:echo  $+ %::c1 $+ R  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ rejoining %chan $+ ...
 
Ctcp !Script %:echo  $+ %::c1 $+ c  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ received CTCP: %::ctcp %::text
 
CtcpChan !Script %:echo  $+ %::c1 $+ t  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::chan received CTCP: %::ctcp %::text
 
CtcpSelf !Script %:echo  $+ %::c1 $+ c 7[0 $+ $so_alignr(9,»,%::me) $+ 7] 0 $+ sent CTCP to %::nick $+ : %::ctcp %::text
CtcpChanSelf !Script %:echo  $+ %::c1 $+ c  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::me) $+  $+ %::c2 $+ ] 0 $+ sent CTCP to %::chan $+ : %::ctcp %::text
 
CtcpReply !Script %:echo  $+ %::c1 $+ r  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ] 0 $+ received CTCPreply: %::ctcp %::text
CtcpReplySelf !Script %:echo  $+ %::c1 $+ c  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::me) $+  $+ %::c2 $+ ] 0 $+ sent CTCPreply to $so_replytarget(%::chan,%::nick) $+ : %::ctcp %::text
 
NoticeServer !Script %:echo  $+ %::c1 $+ S  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::nick) $+  $+ %::c2 $+ ]0 %::text
 
DNS !Script so_dns_start
DNSError !Script so_dns_error
DNSResolve !Script so_dns_resolve
Echo !Script %:echo 0 $+ %::text
 
EchoTarget !Script %:echo 0 $+ %::text
Error !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 %::text
 
RAW.311 !Script so_whois_start
 
RAW.314 !Script so_whois_start
RAW.319 !Script so_whois_chan
RAW.312 !Script so_whois_server
RAW.301 !Script so_whois_away
RAW.307 !Script so_whois_regnick
RAW.313 !Script so_whois_ircop
RAW.317 !Script so_whois_idle
RAW.369 !Script so_whois_end
RAW.318 !Script so_whois_end
 
RGBColors 255,255,255 0,0,0 0,0,127 0,168,0 255,84,88 168,0,0 168,0,168 255,128,64 255,252,88 88,252,88 0,168,168 0,218,223 23,139,255 255,84,255 120,116,120 168,168,168
RAW.001 !Script %:echo %::pre  $+ %::pre $+ Welcome to IRC!
RAW.002 <pre> <c2> Server is running <server> <value>
RAW.003 <pre> <c2> Server created on <value>
RAW.005 <pre> <c2> Settings: <text>
RAW.221 <pre> <c2> Usermode: <modes> <nick>
RAW.250 <pre> <c2> Connections: <value>
RAW.251 <pre> <c2> Users: <users> Invisible: <text> Servers: <value>
RAW.252 <pre> <c2> Operators: <value>
RAW.253 <pre> <c2> Unknown: <value>
RAW.254 <pre> <c2> Channels: <value>
RAW.255 <pre> <c2> Local: <users> clients, <value> servers
RAW.265 <pre> <c2> Local users: <users> Maximum: <value>
RAW.266 <pre> <c2> Global users: <users> Maximum: <value>
RAW.302 <pre> <c2> Userhost: <nick> is <address> <value>
RAW.315 <pre> <c2> End of /WHO at <value>
RAW.324 !Script %:echo  $+ %::c1 $+ M  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::chan) $+  $+ %::c2 $+ ] 0 $+ channel modes:  $+ %::modes
RAW.332 !Script %:echo  $+ %::c1 $+ T  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::chan) $+  $+ %::c2 $+ ] 0 $+ channel topic is: %::text
RAW.333 !Script %:echo  $+ %::c1 $+ T  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::chan) $+  $+ %::c2 $+ ] 0 $+ topic set on %::text by %::value
RAW.341 !Script %:echo  $+ %::c1 $+ I  $+ %::c2 $+ [0 $+ $so_alignr(9,»,%::chan) $+  $+ %::c2 $+ ] 0 $+ <nick> was invited to join <chan>
RAW.352 <pre><c2> /WHO: <nick><cmode> @ <address> is <away> <chan> <wserver> <realname> <value> <text> <isoper>
RAW.372 <pre>0 <text>
RAW.375 <pre>0 Message of the day:
RAW.376 <pre>0 End of MOTD
RAW.391 <pre>0 Date: <text>
 
RAW.401 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 No such nickname: %::nick
RAW.403 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 No such channel: %::chan
RAW.404 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Can't send message to %::chan
RAW.421 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Invalid command: %::value
RAW.432 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Invalid nickname: %::nick
RAW.433 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Nickname in use: %::nick
RAW.471 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Channel is full (+l): %::chan
RAW.473 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Channel is invite only (+i): %::chan
RAW.474 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 You are banned (+b): %::chan
RAW.475 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 Channel is locked (+k): %::chan
RAW.482 !Script %:echo  $+ %::c1 $+ E  $+ %::c2 $+ [0 $+ $so_alignr(9,»,error) $+  $+ %::c2 $+ ]0 You are a peon (-o): %::chan
 
 
BaseColors 12,07,01,01
 
Scheme1 redsymbol
Scheme2 yellowsymbol
Scheme3 greensymbol
Scheme4 lbluesymbol
Scheme5 red
Scheme6 yellow
Scheme7 green
Scheme8 lblue
Scheme9 redbrack
Scheme10 yellowbrack
Scheme11 greenbrack
Scheme12 lbluebrack
 
[Scheme1]
BaseColors 04,07,01,01

[Scheme2]
BaseColors 08,07,01,01

[Scheme3]
BaseColors 09,07,01,01

[Scheme4]
BaseColors 11,07,01,01

[Scheme5]
BaseColors 04,04,01,01

[Scheme6]
BaseColors 08,08,01,01

[Scheme7]
BaseColors 09,09,01,01

[Scheme8]
BaseColors 11,11,01,01

[Scheme9]
BaseColors 12,04,01,01

[Scheme10]
BaseColors 12,08,01,01

[Scheme11]
BaseColors 12,09,01,01

[Scheme12]
BaseColors 12,11,01,01 
