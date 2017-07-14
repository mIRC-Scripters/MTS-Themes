[mts]
Name clinic
Author ac-
Email ifmatch@hotmail.com
Description dark theme
Version 1
MTSVersion 1.1
Website
 
BaseColors 12,13,13,12
Colors 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
RGBCOLORS 0,0,0 255,255,255 128,128,128 255,0,0 0,0,255 194,197,186 133,138,117 104,151,124 145,111,122 255,128,0 128,0,255 128,255,0 109,143,146 102,111,153 197,201,148 128,64,0 128,0,130
 
Timestamp on
TimestampFormat 2 h:nntt
SCRIPT clinic.mrc
 
FontDefault IBMPC,12
FontChan IBMPC,12
FontQuery IBMPC,12
CLineOwner 2
ClineOp 6
CLineVoice 14
CLineMe 12
CLineRegular 5
CLineCharOwner     .
CLineCharOP        @
CLineCharHOP       %
CLineCharVoice     +
CLineCharRegular   
Load 6Theme loaded:12 ùby ac-ù
Unload 6Theme unloaded:12 ùby ac-ù
Prefix 2Ã
TextChan <pre> 6<cmode><nick>14 <text>
TextChanSelf <pre> 6<cmode><me>6 <text>
Mode <pre> 6mode <chan>: 12<modes> 6by12 <nick>
ModeUser <pre> 6mode <chan>: 12<nick> <modes>
Part <pre> 6leaving <chan>:12 <nick><address> <parentext>
Joinself !script mod %::chan
Join <pre> 6joining <chan>:12 <nick> <address>
Kick <pre> 6kicking <chan>:12 <knick> <parentext> 6by12 <nick>
KickSelf <pre> 6 You were kicked from:12 <chan>6 by12 <nick> <parentext>
Quit <pre> 6quiting: 12<nick> <address> <parentext>
Topic <pre> 6topic <chan>:12 <text> 6by12 <nick>
Nick <pre> 6nick: 12<nick> 6ñ12 <newnick>
NickSelf <pre> 6nick: 12<nick> 6ñ12 <newnick>
Invite <pre> 6invite:12 <chan> 6by12 <nick>
TextQuery <pre> 6<nick>14 <text>
TextQuerySelf <pre> 6<nick> 6<text>
Notify <pre> 6notify: 2<nick> is on IRC
Unotify <pre> 6unnotify:12 <nick> has left IRC
ServerError <pre> 6Error:12 <text>
Notice <pre> 6notice from:12 <nick> <text>
NoticeSelf <pre> 6notice from:12 <nick> <text>
Rejoin <pre> 6rejoining <chan>:12 <parentext>
Wallop <pre> 6wallop:12 <text>
ActionChan <pre>Ä 6<cmode><nick>14 <text>
ActionChanSelf <pre>Ä 6<cmode><me> <text>
ActionQuery <pre>Ä 6<nick> 14<text>
ActionQuerySelf <pre>Ä 6<nick> <text>
NoticeServer <pre> 6notice from:12 <nick> <text>
CTCP <pre> 6CTCP <ctcp>:12 <nick> <text>
CTCPSelf <pre> 6CTCP <ctcp>:12 <nick> <text>
CTCPChan <pre> 6CTCP <ctcp>:12 <nick> <chan> <text>
CTCPChanSelf <pre> 6CTCP <ctcp>:12 <chan> <text>
CtcpReply <pre> 6CTCPREPLY <ctcp>:12 <nick> <text>
CtcpReplySelf <pre> 6CTCPREPLY <ctcp>:12 <nick> <text>
TextMsg <pre> 6<nick>14 <text>
TextMsgSend <pre> 6<nick>14 <text>
Echo <pre> 12<text>
EchoTarget <pre>6 <target>:12 <text>
Error <pre> 12<text>
DNS 6looking up:12 <address>
DNSError 6unable to resolve: 12<address>
DNSResolve 6resolved <address>:12 to <iaddress>
 
RAW.001 <pre> 6Welcome to IRC
RAW.003 <pre> 6Server created on:12 <value>
RAW.005 <pre> 6Protocols supported by server:12 <text>
RAW.221 <pre> 6Current usermode:12 <modes>
RAW.250 <pre> 6Total connection:12 <value>
RAW.251 <pre> 6Users: 6Visibles 12<users> 6Invisible12 <text> 6Servers12 <value>
RAW.252 <pre> 6Operators: 12<value>
RAW.253 <pre> 6Unknown connections:12 <value>
RAW.254 <pre> 6Number of channels:12 <value>
RAW.255 <pre> 6Local clients:12 <users> in <value> server(s)
RAW.265 <pre> 6Local users:12 <users> max:<value>
RAW.266 <pre> 6Global users:12 <users> max:<value>
RAW.302 <pre> 6Userhost:12 <nick> <address>
RAW.315 <pre> 6End of /who
RAW.324 <pre> 6Channel modes:12 <modes>
RAW.332 <pre> 6Topic is:12 '<text>'
RAW.333 <pre> 6Topic was set by:12 <nick> 6on12 <text>
RAW.341 <pre> 6User was invited:12 <chan> 6by12 <nick>
RAW.352 <pre> 6who:12 <nick> <address> <realname>
RAW.353 !script names %::pre %::chan %::text
RAW.372 <pre> 12<text>
RAW.375 <pre> 6Message of the day:
RAW.376 <pre> 6End message of the day.
RAW.391 <pre> 6Date:12 <value>
RAW.401 <pre> 6No such nickname:12 <nick>
RAW.403 <pre> 6No such channel:12 <chan>
RAW.404 <pre> 6Unable to send message to:12 <chan>
RAW.421 <pre> 6Invalid command12 <value>
RAW.433 <pre> 6Nickname in use:12 <nick>
RAW.471 <pre> 6Channel full:12 <chan>
RAW.473 <pre> 6Channel invite only:12 <chan>
RAW.474 <pre> 6You banned from channel:12 <chan>
RAW.475 <pre> 6Channel key required:12 <chan>
RAW.482 <pre> 6Not opped:12 <chan>
RAW.314 <pre> 6whowas:12 <nick> <address> <realname>
RAW.369 <pre> 6End of /whowas
RAW.311 !script whois1 %::nick %::address %::realname 
RAW.319 !script whois2 %::chan
RAW.312 !script whois3 %::wserver
RAW.317 !script whois4 %::idletime %::signontime
RAW.301 !script whois5 %::text
RAW.318 !script whois6
RAW.313 !script whois7 %::isoper %::nick
RAW.307 !script whois8 %::isregd
 
