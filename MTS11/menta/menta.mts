[mts]
Name menta
Author ac-
Email ifmatch@hotmail.com
Description thank you for use my theme.
Version 1.0
MTSVersion 1.1
Website

Timestamp off
SCRIPT mnta.mrc
BaseColors 14,03,15,9
Colors 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
RGBCOLORS 225,225,225 0,0,0 0,0,128 64,128,128 255,0,0 0,64,64 128,0,128 0,79,157 255,255,0 128,128,0 0,128,64 39,80,80 0,255,255 255,0,128 128,128,128 97,97,97

FontDefault tahoma,10
FontChan tahoma,10
FontQuery tahoma,10
CLineOwner 2  
ClineOp 7
CLineVoice 3
CLineMe
CLineRegular
CLineCharOwner     .
CLineCharOP        @
CLineCharHOP       %
CLineCharVoice     +
CLineCharRegular   
Load !script loaad
Unload !script unloaad
Prefix 1
TextChan <pre> 1<timestamp> 10.9·3 <cmode><nick> 9·10.14 <text>
TextChanSelf <pre> 1<timestamp> 10.9·3 <cmode><me> 9·10.15 <text>
Mode <pre> 1<timestamp> 10·9Mode 11[14<chan>11/14 <modes>11]14 by <nick>
ModeUser <pre> 1<timestamp> 10·9Mode 11[14<nick> <modes>11]
Part <pre> 1<timestamp> 10·9Part 14<chan> 11[5<nick> <address>11]14 <parentext>
Joinself <pre> 1<timestamp> 10·9Join 14<chan> 11[5<me> <address>11] 
Join <pre> 1<timestamp> 10·9Join 14<chan> 11[5<nick> <address>11]
Kick <pre> 1<timestamp> 10·9Kick 11[14<chan>11/5 <knick> <address>11]14 <parentext> by <nick>
KickSelf <pre> 1<timestamp> 10·9Kicked14 by 11[14<chan>11/ 5<nick> <address>11]14 <parentext>
Quit <pre> 1<timestamp> 10·9Quit 11[5<nick> <address>11]14 <parentext>
Topic <pre> 1<timestamp> 10·9Topic 11[14<chan>11/ 14<text>11]14 by <nick>
Nick <pre> 1<timestamp> 10·9Nick 11[14<nick> 5·14 <newnick>11]
NickSelf <pre> 1<timestamp> 10·9Nick 11[14<nick> 5·14 <newnick>11]
Invite <pre> 1<timestamp> 10·9Invite14 <chan> by <nick>
TextQuery <pre> 1<timestamp> 10.9·3 <nick> 9·10.14 <text>
TextQuerySelf <pre> 1<timestamp> 10.9·3 <nick> 9·10.15 <text>
Notify <pre> 1<timestamp>  10.9··14<nick is on IRC
Unotify <pre> 1<timestamp>  10.9··14<nick has left IRC
ServerError <pre> 1<timestamp> 9Error:14 <text>
Notice <pre> 1<timestamp> 10·9Not:3<nick> 14<text>
NoticeSelf <pre> 1<timestamp> 10·9Not:3<nick> 15<text>
Rejoin <pre> 1<timestamp> 10·9Rejoining 14 <chan> <parentext>
Wallop <pre> 1<timestamp>  10·9Wallop:14 <text>
ActionChan <pre> 1<timestamp>10 ···  3<cmode><nick> 14<text>
ActionChanSelf <pre> 1<timestamp>10 ···  3<cmode><me> 15<text>
ActionQuery <pre> 1<timestamp>10 ···  3<nick> 14<text>
ActionQuerySelf <pre> 1<timestamp>10 ···  3<nick> 15<text>
NoticeServer <pre> 1<timestamp> 10·9Not:14 <nick> <text>
CTCP 1<timestamp> <pre> 11[14<ctcp>11/14 <nick>11] 14<text>
CTCPSelf 1<timestamp> <pre> 11[14<ctcp>11/14 <nick>11] 15<text>
CTCPChan 1<timestamp> <pre> 11[14<ctcp>11·14<nick>11/14 <chan>11] 14<text>
CTCPChanSelf 1<timestamp> <pre> 11[14<ctcp>11/14 <chan>11] 15<text>
CtcpReply 1<timestamp> <pre> 11[14<ctcp>11/ 14<nick>11] 14<text>
CtcpReplySelf 1<timestamp> <pre> 11[14<ctcp>11/14 <nick>11] 15<text>
TextMsg 1<timestamp> 10.9·3 <nick> 9·10.14 <text>
TextMsgSend 1<timestamp> 10.9·3 <nick> 9·10.15 <text>
Echo 1<timestamp> <pre> 14<text>
EchoTarget 1<timestamp> <pre> 14<target> <text>
Error 1<timestamp> <pre> 14<text>
DNS 10·14Looking up 11[14<address>11]
DNSError 10·14Unable to resolve 11[14<address>11]
DNSResolve 10·14Resolved 11[14<address> to <iaddress>11]

RAW.001 <pre> 9»14Welcome to IRC
RAW.003 <pre> 9»14Server created on <value>
RAW.005 <pre> 9»14Protocols supported by server <text>
RAW.221 <pre> 9»14Current usermode 11[14<nick>11/14 <modes>11]
RAW.250 <pre> 9»14Total connections <value>
RAW.251 <pre> 9»14Users 11[14Visibles11/14 <users>11] [14Invisible11/14 <text>11] 14Servers <value>
RAW.252 <pre> 9»14Operators 11[14<value>11]
RAW.253 <pre> 9»14Unknown connections 11[14<value>11]
RAW.254 <pre> 9»14Number of channels 11[14<value>11]
RAW.255 <pre> 9»14Local clients 11[14<users> in <value> server(s)11]
RAW.265 <pre> 9»14Local users 11[14<users>11/14 max:<value>11]
RAW.266 <pre> 9»14Global users 11[14<users>11/14 max:<value>11]
RAW.302 <pre> 9»14Userhost 11[5<nick> <address>11]
RAW.315 <pre> 9»14End of /who
RAW.324 !script oth2 %::chan %::modes
RAW.332 !script oth3 %::chan %::text
RAW.333 !script oth4 %::chan %::nick %::text
RAW.341 <pre> 9»14User was invited 11[14<chan> by <nick>11]
RAW.352 <pre> 9»14who <nick> <address> <realname>
RAW.353 !script oth %::chan %::text
RAW.372 <pre> 9»14<text>
RAW.375 <pre> 9»14Message of the day:
RAW.376 <pre> 9»14End message of the day.
RAW.391 <pre> 9»14Date 11[14<value>11]
RAW.401 <pre> 9»14No such nickname 11[14<nick>11]
RAW.403 <pre> 9»14No such channel 11[14<chan>11]
RAW.404 <pre> 9»14Unable to send message to 11[14<chan>11]
RAW.421 <pre> 9»14Invalid command 11[14<value>11]
RAW.433 <pre> 9»14Nickname in use 11[14<nick>11]
RAW.471 <pre> 9»14Channel full 11[14<chan>11]
RAW.473 <pre> 9»14Channel invite only 11[14<chan>11]
RAW.474 <pre> 9»14You banned from channel 11[14<chan>11]
RAW.475 <pre> 9»14Channel key required 11[14<chan>11]
RAW.482 <pre> 9»14Not opped 11[14<chan>11]
RAW.314 <pre> 9»14whowas 11[14<nick> <address> <realname>11]
RAW.369 <pre> 9»14End of /whowas
RAW.311 !script whois1 %::address %::nick %::realname 
RAW.319 !script whois2 %::chan
RAW.312 !script whois3 %::wserver
RAW.317 !script whois4 %::idletime %::signontime
RAW.301 !script whois5 %::text
RAW.318 !script whois6
RAW.313 !script whois7 %::isoper %::nick
RAW.307 !script whois8 %::isregd

Scheme1 blackdark

[Scheme1]
BaseColors 14,03,15,9
RGBCOLORS 0,0,0 233,233,233 0,255,64 192,192,192 255,0,0 117,117,117 128,0,128 88,88,88 128,128,128 255,255,255 0,176,176 207,207,207 64,0,64 195,195,195 158,158,158 209,209,209
