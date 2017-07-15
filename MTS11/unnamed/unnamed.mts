[mts]
Name unnamed
Author Tig0ti
EMail admin@tig0ti.org
Website http://fractalscript.com
Description greyish theme using fixedsys. now with a few colorful schemes
Version 2.0
MTSVersion 1.1 
Script unnamed.mrc
scheme1 blueish
BaseColors 15,11,02,00
colors 13,00,15,11,15,15,15,15,15,15,15,00,00,15,15,00,15,15,15,15,15,13,00,13,15,00
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 92,104,105 128,128,128 193,193,193 
FontDefault Fixedsys,9
FontQuery Fixedsys,9
FontChan Fixedsys,9
CLineOwner 11
CLineOp 00
CLineHOp 00
CLineVoice 15
CLineRegular 15
CLineMe 00 
Prefix 15 ×
Timestamp OFF 
TimestampFormat [hh:nn]
Parentext 15(00<text>15)
TextChan 15<lt><cmode>00<nick>15<gt> <text>
TextChanSelf 15<lt><cmode>00<me>15<gt> <text>
ActionChan 15» <cmode>00<nick> <text>
ActionChanSelf 15» <cmode>00<me> <text>
NoticeChan <pre> 15<lt><lt> Notice(00<nick>15/00<chan>15) 00<text>
Notice <pre> 15<lt><lt> Notice(00<nick>15) 00<text>
NoticeSelf <pre> 15<gt><gt> Notice(00<nick>15) 00<text>
NoticeSelfChan <pre> 15<gt><gt> Notice(00<chan>15) 00<text>
TextQuery 15<lt>00<nick>15<gt> <text>
TextQuerySelf 15<lt>00<me>15<gt> <text>
ActionQuery 15»00<nick> <text>
ActionQuerySelf 15» 00<me> <text>
mode !script %:echo %::timestamp %::pre 00 $+ %::nick 15sets mode 00> 15 $+ $gettok(%::modes,1,32) 00 $+ $gettok(%::modes,2-,32)
ModeUser <pre> 00You 15setted umode 00<modes>
Join <timestamp> <pre> 00<nick> 15(<address>) joined 00<chan>
JoinSelf <timestamp> <pre> Now talking in 00<chan>
Part <timestamp> <pre> 00<nick> 15(<address>) parts <parentext>
Kick <timestamp> <pre> 00<knick>15 was kicked off by 00<nick> <parentext>
KickSelf <timestamp> <pre> 00You15 were kicked off <chan> by 00<nick> <parentext>
Quit <timestamp> <pre> 00<nick> 15(<address>) signed off <parentext>
Topic <timestamp> <pre> 00<nick> 15changed topic to '00<text>15'
Nick <timestamp> <pre> 00<nick>15 is now known as 00<newnick>
NickSelf <timestamp> <pre> 00You15 are now known as 00<newnick>
Invite <pre> 00<nick>15 just invited you to join 00<chan>
ServerError <pre> Error: <text>
Rejoin <timestamp> <pre> Rejoining 00<chan>
Ctcp <pre> 15<lt><lt> CTCP(00<nick>15/00<ctcp>15) 00<text>
CtcpChan <pre> 15<lt><lt> CTCP(00<nick>15:00<chan>15/00<ctcp>15) 00<text>
CtcpSelf <pre> 15gt><gt> CTCP(00<nick>15/00<ctcp>15) 00<text>
CtcpChanSelf <pre> 15<gt><gt> CTCP(00<chan>15/00<ctcp>15) 00<text>
CtcpReply <pre> 15<lt><lt> CTCPReply(00<nick>15/00<ctcp>15) 00<text>
CtcpReplySelf <pre> 15gt><gt> CTCPReply(00<nick>15/00<ctcp>15) 00<text>
Notify <pre> 00<nick> 15(00<text>15) is on IRC
UNotify <pre> 00<nick> 15(00<text>15) has left IRC
NoticeServer <pre> 15Snotice(00<server>15) 00<text> 
Load !script _some.load
Unload <pre> unnamed theme unloaded
DNS <pre> 15Dns >> 00<address>
DNSERROR <pre> 15Unable to resolve DNS 14(00<iaddress><naddress14)
DNSRESOLVE <pre> 15Resolved 00<naddress>15 (00<iaddress>15) to 00<raddress>
RAW.311 !script _some.whois
RAW.319 !script _some.wchans
RAW.312 <pre> 13<nick> 15on 00<server> 15(00<serverinfo>15)
RAW.301 <pre> 13<nick> 15is away:00 <text>
RAW.307 <pre> 13<nick> 00is 15a registered nickname
RAW.313 <pre> 13<nick> 00is 15an IRC Operator
RAW.317 !script _some.widle
RAW.318 <pre> End of whois on 00<nick>
RAW.369 <pre> End of whowas on 00<nick>
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
RAW.332 <pre> Topic is '00<text>15'
RAW.333 <pre> Topic was set by 00<nick>15 on 00<text>
RAW.353 !script _some.names
RAW.366 <pre> 00<chan>15- end o names list
RAW.372 <pre> <text>
RAW.375 <pre> 00<server>15 MOTD
RAW.376 <pre> End of 00<server>15's MOTD
RAW.401 <pre> No such nick 00<nick>
RAW.403 <pre> No such channel 00<chan>
RAW.404 <pre> Cannot send text to 00<chan>
RAW.421 <pre> 00<value>15 is an unrecognized command
RAW.432 <pre> Invalid chars in 00<nick>
RAW.433 <pre> Nickname in use 00<nick>
RAW.471 <pre> Cannot join 00<chan> 15(00+l15)
RAW.473 <pre> Cannot join 00<chan> 15(00+i15)
RAW.474 <pre> Cannot join 00<chan> 15(00+b15)
RAW.475 <pre> Cannot join 00<chan> 15(00+k15)
RAW.482 <pre> You're not opped on 00<chan> 
scheme2 greenish
scheme3 darker
scheme4 yellow
scheme5 idontknow
[scheme1]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 0,74,111 128,128,128 0,134,198
[scheme2]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 44,88,88 128,128,128 70,140,140
[scheme3]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 53,53,53 128,128,128 112,112,112
[scheme4]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 83,83,0 128,128,128 198,198,0
[scheme5]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 41,41,41 128,128,128 0,193,49
[scheme5]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 117,58,0 128,128,128 204,102,0
