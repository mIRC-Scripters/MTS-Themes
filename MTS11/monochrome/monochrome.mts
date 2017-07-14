[mts]
; Theme information
Name monochrome
MTSVersion 1.1
Version 1.0
Author nix
EMail nick@emergeonline.org
Website http://www.emergeonline.org
Description Monochromatic Theme for eMerge. Created for deftoned because he loved my old monochrome theme I created with my old theme system. Enjoy sir.
Colors 01,10,14,07,00,00,07,11,04,10,14,00,07,14,00,15,03,04,03,07,04,01,00,01,00,14
BaseColors 14,02,13,00
Load <pre> 06Monochrome02 theme loaded <pre>
Unload <pre> 06Monochrome02 theme unloaded <pre>
Prefix 06•
ParenText 02(13<text>02)
Mode <pre> 06<nick> sets mode:13 <modes>
ModeUser <pre> 06<nick> sets mode:13 <modes>
Join <pre> 02Join:00 <nick> 02(13<address>02) <parentext>
JoinSelf <pre> 06You have joined13 <chan>
Part <pre> 02Part:00 <nick> 02(13<address>02) <parentext>
Kick <pre> 02Kick:00 <knick> 02was kicked by00 <nick> 02<parentext>
KickSelf <pre> 06You were kicked from00 <chan> 06by00 <nick> 02(13<address>02) <parentext>
Quit <pre> 02Quit:00 <nick> 02(13<address>02) has quit irc13 <parentext>
Topic <pre> 02<nick> sets topic:13 <text>
Nick <pre> 06<nick> is now known as13 <newnick>
NickSelf <pre> 06You are now13 <newnick>
Invite <pre> 06<nick> invites you to join13 <chan>
ServerError <pre> 02Error:00 <text>
Notice [Personal Notice] <nick>: <text>
NoticeChan [Channel Notice: <chan>] <nick>: <text>
NoticeSelf Notice -> -<me>- <text>
Rejoin <pre> 06Rejoining13 <chan>...
TextChan 05(13<cmode><nick>05)00 <text>
TextChanSelf 05[02<cmode>13<me>05]00 <text>
ActionChan 02* <cmode><nick> <text>
ActionChanSelf 02* <cmode><me> <text>
DNS <pre> 02DNS:00 Looking up <nick> 02(13<address>02)
DNSError <pre> 02DNS:00 Error looking up <nick> 02(13<address>02)
DNSResolve <pre> 02DNS:00 Resolved 13<address> 00to13 <raddress>
TextQuery 05(<nick>05)00 <text>
TextQuerySelf 05[13<me>05]00 <text>
ActionQuery 02* <nick> <text>
ActionQuerySelf 02* <me> <text>
TextMsg 05(<nick>05)00 <text>
TextMsgSelf MSG -> *<nick>* <text>
CTCP <pre> 02CTCP:00 <nick> 02(13<address>02) <ctcp> <text>
CTCPSelf -> [<nick>] <text>
CTCPChan <pre> 02CTCP:00 <nick>02:00<chan> 02(13<address>02) <ctcp> <text>
CTCPChanSelf -> [<nick>] <text>
CTCPReply <pre> 02CTCP reply:00 <nick><chan> 02(13<address>02) <ctcp> <text>
CTCPReplySelf <pre> 02Sending reply:00 <nick> 02(13<address>02) <ctcp> <text>
Whowas <pre> Whowas: <nick> [<address>] <realname>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>
RAW.311 !script eme.whois1
RAW.317 !script eme.whois2
RAW.312 !script eme.whois3
RAW.307 !script eme.whois5
RAW.313 !script eme.whois4
RAW.301 !script eme.whois6
RAW.318 !script eme.whois7
RAW.319 !script eme.whois8
RAW.329 !Script %:echo %::pre Created on: $asctime(%::text,dddd) $+ , $asctime(%::text,mmmm doo) $+ , $asctime(%::text,yyyy) at $asctime(%::text,h:nntt)
RAW.001 <pre> <text>
RAW.002 <pre> Server: <server> running version <value>
RAW.003 <pre> Server: created on: <value>
RAW.005 <pre> Protocols supported by this server: <text>
RAW.250 <pre> Total connection(s): <value>
RAW.251 <pre> Users: <users> Invisible: <text> Servers: <value>
RAW.252 <pre> Operator(s) online: <value>
RAW.253 <pre> Unknown connection(s): <value>
RAW.254 <pre> Number of channels formed: <value>
RAW.255 <pre> Local clients: <users> on <value> server(s)
RAW.265 <pre> Local users: <users> Max: <value>
RAW.266 <pre> Global users: <users> Max: <value>
RAW.302 <pre> Userhost: <address>
RAW.315 <pre> End of /WHO list for <chan>
RAW.324 <pre> Modes in <chan>: <modes>
RAW.332 <pre> Topic is: '<text><c1>'
RAW.333 <pre> Set by: <nick> on <text>
RAW.341 <pre> <nick> has been invited to <chan>
RAW.352 <pre> <cmode><nick> (<address>) <realname>
RAW.353 <pre> <chan>: <text>
RAW.366 <pre> End of /NAMES list for <chan>
RAW.375 <pre> Message of the day:
RAW.372 <pre> <text>
RAW.376 <pre> End of /MOTD command.
RAW.391 <pre> Date: <value>
RAW.401 <pre> No such nickname <nick>
RAW.403 <pre> No such channel <chan>
RAW.404 <pre> Unable to send message to <chan>
RAW.421 <pre> Invalid command: <value>
RAW.433 <pre> Nickname: <nick> is already in use.
RAW.471 <pre> Unable to join <chan> (its full +l)
RAW.473 <pre> Unable to join <chan> (its invite only +i)
RAW.474 <pre> Unable to join <chan> (you're banned +b)
RAW.475 <pre> Unable to join <chan> (requires key +k)
RAW.482 <pre> You're not a operator on <chan>
RAW.Other <pre> <text>
BaseColors 15,15,15,15
CLineOwner 13
CLineOP 13
CLineHOP 13
CLineVoice 13
CLineRegular 13
CLineMe 02
ClineCharOwner 02.
ClineCharOP 05@
ClineCharHOP 05%
ClineCharVoice 14+
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Timestamp ON
TimestampFormat 05[02h13:02nn13:02sstt5]
RGBColors 255,255,255 0,0,0 97,97,97 240,240,240 190,190,190 157,157,157 156,156,156 80,80,80 205,205,205 160,150,140 60,60,60 190,190,190 100,100,100 205,205,205 127,127,127 210,210,210
Script monochrome.mrc
NoticeServer <pre> 02Server:00 <nick>13 <text>
Scheme1 TimeStamp Off
Scheme2 Arial
Scheme3 Arial/No TS
Scheme4 Verdana
Scheme5 Verdana/No TS
 
[Scheme1]
Timestamp Off
 
[Scheme2]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
 
[Scheme3]
Timestamp Off
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
 
[Scheme4]
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
 
[Scheme5]
Timestamp Off
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11 
