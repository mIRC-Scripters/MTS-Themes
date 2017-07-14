;----------kod.mts----------generated with Theme Editor v0.6.33b by BeteLgeuZe-----
[mts]
Name <no name>
Author
Email
Description
Website
Version
MTSVersion 1.1
 
Timestamp ON
TimestampFormat hh:nn
 
Prefix .15.14.
ActionChanSelf <pre> 15<cmode>14<nick>: <text>
ActionChan <pre> 15<cmode>14<nick>: <text>
TextChan (15<cmode>14<nick>) <text>
TextChanSelf (15<cmode>14<nick>) <text>
NoticeChan <pre> ® notice15(<chan>) <cmode>14<nick>: <text>
 
Colors 02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02,00,02,00,00
RGBColors 255,255,255 0,0,0 0,0,64 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 14,15,02,0
 
Notice <pre> ® notice 14<nick>: <text>
NoticeSelf <pre> ¯ notice 14<nick>: <text>
NoticeSelfChan <pre> ¯ notice15(<chan>) <cmode>14<nick>: <text>
TextQuery (15<cmode>14<nick>) <text>
TextQuerySelf (15<cmode>14<nick>) <text>
ActionQuery <pre> 15<cmode>14<nick>: <text>
ActionQuerySelf <pre> 15<cmode>14<nick>: <text>
Mode <pre> 15mode; 15<cmode>14<nick> sets mode 14<modes>
 
 
ModeUser <pre> 15mode; 15<cmode>14<nick> sets mode 14<modes>
Join <pre> 15join; 14<nick> 15(14<address>15) <chan>
 
FontDefault IBMPC,12
 
FontChan IBMPC,12
FontQuery IBMPC,12
 
JoinSelf --- Joined <chan> ---
Part <pre> 15part; 14<nick> 15(14<address>15)
 
Kick <pre> 15kick; 15<cmode>14<nick> kicks 14<knick> 15(14<address>15) from <chan>: <text>
KickSelf --- You got kicked by <nick>: <text> ---
Quit <pre> 15quit; 14<nick> 15(14<address>15): <text>
Topic <pre> 15topic; 15<cmode>14<nick>: <text>
Script kod.mrc
 
RAW.314 !script kod.whoisstart
 
RAW.319 !Script %:echo 14³Channels15ÄÄÄÄÄÄ14×15Ä  $+ %::chan
RAW.312 !Script %:echo 14³Server15ÄÄÄÄÄÄÄÄ14×15Ä  $+ %::wserver ( $+ %::serverinfo $+ )
RAW.301 !Script %:echo 14³Away15ÄÄÄÄÄÄÄÄÄÄ14×15Ä  $+ %::text
RAW.311 !script kod.whoisstart
 
RAW.307 !Script %:echo 14³Regustred Nick14×15Ä  $+ %::isregd
RAW.313 !Script %:echo 14³IRCop15ÄÄÄÄÄÄÄÄÄ14×15Ä  $+ %::isoper $+ , %::operline
RAW.317 !Script %:echo 14³Idle/signon15ÄÄÄ14×15Ä %::Idletime$+ s $+ / $+ %::signontime
RAW.318 !script KOD.WHOISEND
 
DNS !script dns.lookup
DNSError !script dns.error
 
DNSResolve !script dns.resolv
Ctcp 14[<nick> <ctcp>14]
CtcpChan 14[<nick>/<chan> <ctcp>14]
CtcpSelf -> 14[<nick>14] <ctcp>
CtcpChanSelf -> 14[<chan>14] <ctcp>
CtcpReply 14[<nick> <ctcp> reply14]: <text>
CtcpReplySelf 14[<nick> <ctcp> reply14]: <text>
Nick <pre> 15nick; 14<nick> to 14<newnick>
NickSelf <pre> 15nick; 14<nick> to 14<newnick>
Invite <pre> 15invite; 14<nick> invites you to join 14<chan>
ServerError <pre> 15servererror;<c1> <text>
Rejoin <pre> Attempting to rejoin <chan>
Notify <pre> 15notify; 15<nick> is online.
UNotify <pre> 15notify; 15<nick> is offline.
NoticeServer <pre> 15server notice;<c1> <text>
RAW.001 Welcome to IRC
RAW.002 <pre> 15host;<c1> <server> running <c1> <value>
 
RAW.003 <pre> 15info; Created on<c1> <value>
 
RAW.005 <pre> 15protocols supported;<c1> <text>
RAW.221 <pre> 15current usermode;<c1> <nick> <modes>
RAW.250 <pre> 15total connections;<c1> <text>
RAW.251 <pre> 15lusers; There are<c1> <users> online and<c1> <text> is invisable on<c1> <value> servers
RAW.252 <pre> 15lusers;<c1> <value> IRC Operators online atm.
RAW.253 <pre> 15lusers;<c1> <value> unnknown connections
RAW.254 <pre> 15lusers;<c1> <value> channels formed
RAW.255 <pre> 15lusers; I have<c1> <users> clients and<c1> <value> server(s)
RAW.265 <pre> 15lusers; Current local users:<c1> <users> Max:<c1> <value>
RAW.266 <pre> 15lusers; Current global users:<c1> <users> Max:<c1> <value>
RAW.302 <pre> 15local host; <nick> <address> <value>
 
RAW.324 <pre> 15<chan> modes; <modes>
RAW.332 <pre> 15<chan> topic; <text>
RAW.333 <pre> 15<chan> topic set by 14<nick>
RAW.341 <pre> 15invite; 14<nick> was invited to 14<chan>
RAW.372 <pre> 15motd; 14<text>
RAW.391 <pre> 15info; Time/date at server:<c1> <text>
RAW.401 <pre> 15error; No such nickname 14(15<nick>14)
RAW.403 <pre> 15error; No such channel 14(15<chan>14)
RAW.404 <pre> 15error; Unable to send message to 14<chan>
RAW.421 <pre> 15error; Invalid command 14(15<value>14)
RAW.432 <pre> 15error; Invalid nickname 14(15<nick>14)
RAW.433 <pre> 15error; Nickname in use 14(15<nick>14)
RAW.471 <pre> 15error; 14<chan> is full
RAW.473 <pre> 15error; 14<chan> is invite only
RAW.474 <pre> 15error; You are banned from 15<chan>
RAW.475 <pre> 15error; 15<chan> requires the correct key
RAW.482 <pre> 15error; You do not have to operator status in 15<chan>
 
