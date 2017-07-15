[mts]
Name Viagra2
Author Kiu_man
EMail kiuman@kiuman.com.ar
Website http://www.kiuman.com.ar
Description Simple blue theme using Tahoma (ViagraPower Simil)
Version 2.0
MTSVersion 1.1 
Script viagra2.mrc
scheme1 Verdana
BaseColors 15,11,02,00
colors 12,07,15,11,15,15,15,15,15,15,15,00,00,15,15,00,15,15,15,15,15,11,01,12,15,00
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 128,191,255 196,225,255 57,97,140 255,128,255 128,128,128 193,193,193 
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11 
CLineOwner 00
CLineOp 11
CLineHOp 11
CLineVoice 11
CLineRegular 11
CLineMe 00 
Prefix  ×
Timestamp OFF 
TimestampFormat [HH:nn]
Parentext 15(00<text>15)
TextChan 11<timestamp> <lt>00<cmode><nick>11<gt> <text>
TextChanSelf 00<timestamp> <lt><cmode><me><gt> <text>
ActionChan 7<timestamp> * <cmode><nick> <text>
ActionChanSelf 7<timestamp> * <cmode><me> <text>
NoticeChan <timestamp> <pre> 07 NoticeFrom(15<nick>07/15<chan>07)- 11<text>
Notice <timestamp> <pre> 07 NoticeFrom(15<nick>07)- 11<text>
NoticeSelf <timestamp> <pre> 07 NoticeTo(15<nick>07)- 11<text>
NoticeSelfChan <timestamp> <pre> 07 NoticeTo(15<chan>07)- 11<text>
TextQuery 11<timestamp> <lt>00<nick>11<gt> <text>
TextQuerySelf 00<timestamp> <lt><me><gt> <text>
ActionQuery 7<timestamp> * <nick> <text>
ActionQuerySelf 7<timestamp> * <me> <text>
mode !script %:echo %::pre 11 $+ %::nick 10sets mode 11[00 $+ $gettok(%::modes,1,32) $+ 00 $gettok(%::modes,2-,32) $+ 11]
ModeUser 00 <timestamp> <pre> You 15setted umode 00<modes>
Join <timestamp> 09<pre> 00<nick> 15(<address>) 09joined 00<chan>
JoinSelf <timestamp> 00<pre> Now talking in <chan>
Part <timestamp> 07<pre> 00<nick> 15(<address>) 07parts <parentext>
Kick <timestamp> 04<pre> 00<knick>15 was 04kicked off by 00<nick> <parentext>
KickSelf <timestamp> 04<pre> 00You15 were 4kicked off <chan> by 00<nick> <parentext>
Quit <timestamp> 07<pre> 00<nick> 15(<address>) 07signed off <parentext>
Topic <timestamp> <pre> 00<nick> 15changed topic to '00<text>15'
Nick <timestamp> <pre> 10<nick> is now known as 11<newnick>
NickSelf <timestamp> <pre> 10You are now known as 11<newnick>
Invite <timestamp> <pre> 00<nick>15 just invited you to join 00<chan>
ServerError <pre> Error: <text>
Rejoin <pre> Rejoining 00<chan>
Ctcp <pre> 15 CTCPFrom(00<nick>15/00<ctcp>15) 00<text>
CtcpChan <pre> 15 CTCPChanelFrom(00<nick>15/00<chan>15/00<ctcp>15) 00<text>
CtcpSelf <pre> 15 CTCPto(00<nick>15/00<ctcp>15) 00<text>
CtcpChanSelf <pre> 15 CTCPto(00<chan>15/00<ctcp>15) 00<text>
CtcpReply <pre> 15 CTCPReplyFrom(00<nick>15/00<ctcp>15) 00<text>
CtcpReplySelf <pre> 15 CTCPReplyTo(00<nick>15/00<ctcp>15) 00<text>
Notify <pre> 09<nick> 07(00<text>07) is on IRC
UNotify <pre> 09<nick> 07(00<text>07) has left IRC
NoticeServer <pre> 15Snotice(00<server>15) 00<text> 
Load !script _some.load
Unload <pre> Viagra2 theme unloaded
DNS <pre> 15Dns >> 00<address>
DNSERROR <pre> 15Unable to resolve DNS 14(00<iaddress><naddress14)
DNSRESOLVE <pre> 15Resolved 00<naddress>15 (00<iaddress>15) to 00<raddress>
RAW.311 !script _some.whois
RAW.319 !script _some.wchans
RAW.312 <pre> 11<nick> 15on 00<wserver> 15(00<serverinfo>15)
RAW.301 <pre> 11<nick> 15is away:00 <text>
RAW.307 <pre> 11<nick> 15is a registered nickname
RAW.313 <pre> 11<nick> 15is an 09IRC Operator
RAW.317 !script _some.widle
RAW.318 <pre> 11--------------------------------------------------
RAW.369 <pre> End of whowas on 00<nick>
RAW.250 <pre> 00<value>15 total connections
RAW.251 <pre> There are 00<users>15 users, 00<text>15 invisible, on 00<value>15 servers
RAW.252 <pre> 00<value>15 operators connected
RAW.253 <pre> There are 00<value> 15unknown connections
RAW.254 <pre> A total of 00<value>15 channels are formed
RAW.255 <pre> Local clients: 00<users>15 users on 00<value>15 servers
RAW.265 <pre> Local users: 00<users>15 users on 00<value>15 servers
RAW.266 <pre> Global users: 00<users>15 users on 00<value>15 servers
RAW.315 <pre> End of who on 00<value>
RAW.324 <pre> Channel modes: 00<modes>
RAW.332 <pre> Topic is '00<text>15'
RAW.333 <pre> Topic was set by 00<nick>15 on 00<text>
RAW.353 <pre> 00<chan>15 - <text>
RAW.366 <pre> 00<chan>15 - end of names list
RAW.372 <pre> <text>
RAW.375 <pre> 00<server>15 MOTD
RAW.376 <pre> End of 00<server>15's MOTD
RAW.401 <pre> 04No such nick 00<nick>
RAW.403 <pre> 04No such channel 00<chan>
RAW.404 <pre> 04Cannot send text to 00<chan>
RAW.421 <pre> 00<value>15 is an unrecognized command
RAW.432 <pre> 04Invalid chars in 00<nick>
RAW.433 <pre> 00Nickname in use <nick>
RAW.471 <pre> 00Cannot join 00<chan> 15(00+l15)
RAW.473 <pre> 00Cannot join 00<chan> 15(00+i15)
RAW.474 <pre> 00Cannot join 00<chan> 15(00+b15)
RAW.475 <pre> 00Cannot join 00<chan> 15(00+k15)
RAW.482 <pre> 00You're not opped on 00<chan> 
[scheme1]
FontDefault Verdana,11
FontQuery Verdana,11
FontChan Verdana,11 
