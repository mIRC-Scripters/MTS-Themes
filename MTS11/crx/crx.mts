[mts]
NAME CRX
AUTHOR cyberreality
EMAIL cyberreality@cyber.cz
DESCRIPTION dark theme
SCRIPT crx.mrc
WEBSITE http://cyberreality.dontexist.net
MTSVERSION 1.1
VERSION 1.1

Timestamp ON
TimestampFormat 14[15HH:nn:ss14]
ParenText 14[15<text>14]
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

Prefix 14::15::
COLORS 1,7,4,3,14,14,0,15,4,9,14,15,7,4,15,15,14,4,10,5,15,1,15,1,15,14,6,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

TextChan 15[14<cmode><nick>15] <text>
TextchanSelf 15[14<cmode><nick>15] › <text>
TextQuery  15[14<cmode><nick>15] <text>
TextQuerySelf  15[14<me>15] › <text>
Join 15join› / <nick> 14[15<address>14]
JoinSelf <pre> 14now talking in15 <chan>
Part 14part› / 15<nick> 14[15<address>14] –› <parentext>
Quit 5::4:: 4quit› / 15<nick> 14[15<address>14] –› <parentext>
Kick 5::4:: 4kick› / 15<nick> 4kicked 14<knick> –› <parentext>
KickSelf 5::4:: 4kick› / 15<nick> 4kicked14 you from 15<chan> –› <parentext> 
ActionChan  7<cmode><nick> 15<text>
ActionChanSelf  7›<cmode><me> 15<text>
Mode 3::9:: 9mode› 15<nick> 14sets 9mode –› 14[15<modes>14]
ModeUser 3::9:: 9usermode / mode changed to –› 14[15<modes>14]
Topic !script theme.topic
Nick <pre> nickchange› / 15<nick> –›15 <newnick>
NickSelf <pre> nickchange› / nick changed to 15<newnick>
Invite 0invite› / 15<nick> invites you to –›15 <chan>
Rejoin <pre> rejoining› / 15<chan>
Ctcp  4ctcp› / 15<nick> –› 14[15<ctcp>14] 15 <text>
CtcpChan 4ctcp› / 15<nick> - <chan> –› 14[15<ctcp>14] 15 <text>
CtcpSelf 4ctcp› / 15<target> –› 14[15<ctcp>14] 15 <text>
CtcpChanSelf 4ctcp› / 15<target> –› 14[15<ctcp>14] 15 <text>
CtcpReply 4ctcpreply› / 15<nick> –› 14[15<ctcp>14]15 <text>
CtcpReplySelf 4ctcpreply› / 15<target> –› 14[15<ctcp>14]15 <text>
Notify notify› / 15<nick> is online
UNotify unotify› / 15<nick> is  offline
Notice 7notice› / 15<nick> –› <text>
NoticeChan 7notice› from / 15<nick> - <chan> –› <text>
Noticeself 7notice› to / 15<target> –› <text>
NoticeSelfChan 7notice› to / 15<target> –› <text>
NoticeServer 7servernotice› / 15<nick> –› <text>
DNS <pre> 14Looking up 15<address>....
DNSError <pre> 14DNS Error, unable to resolve...
DNSResolve <pre> 14Resolved 15<naddress> 14to 15<iaddress>
Echo  <pre> <text>
EchoTarget  <pre> <text>
Error › error –› 14[15<text>14]
Load CRX theme by cyberreality loaded
Unload CRX theme by cyberreality unloaded
TexMsg 14[15<nick>14] <text>
TextMsgSelf › /msg 15<target> 14[15<text>14]
RAW.311 15::14:: Whois <pre> 14[ Nickname: 15<nick> 14Address: 15<address> 14Realname: 15<realname> 14]
RAW.314 15::14:: Whois <pre> 14[ Nickname: 15<nick> 14Address: 15<address> 14Realname: 15<realname> 14]
RAW.319 15::14:: Whois <pre> 14[ Channels: 15<chan> 14]
RAW.312 15::14:: Whois <pre> 14[ Server: 15<wserver> <serverinfo> 14]
RAW.301 15::14:: Whois <pre> 14[ Away: 15<text> 14]
RAW.307 15::14:: Whois <pre> 14[ Registered Nickname: 15<isregd> 14]
RAW.313 15::14:: Whois <pre> 14[ Ircop: 15<operline> 14]
RAW.317 15::14:: Whois <pre> 14[ Idle time: 15<idletime>s 14Signed on: 15<signontime> 14]
RAW.318 15::14:: Whois <pre> 14[ Whois for 15<nick> 14ended... 14]
RAW.369 15::14:: Whois <pre> 14[ /who for 15<nick> 14ended.. 14]
RAW.332 14› topic –› 14[15<text>14]
RAW.333 14› set by 15<nick> 14on –› [15<text>14]
RAW.324 14› modes are –› 14[15<modes>14]
RAW.401 › error –› 14[15no such nick14]15 <nick> 
RAW.403 › error –› 14[15no such channel14]15 <chan>
RAW.404 › error –› 14[15cannot send message14]15 <chan> 
RAW.405 › error –› 14[15you're on too many channels14]
RAW.406 › error –› 14[15Whowas on <nick> - There was no such nick14]
RAW.421 › error –› 14[15unknown command14]15 <text> 
RAW.432 › error –› 14[15<nick>, erroneus nickname14]
RAW.433 › error –› 14[15nickname is alredy in use14]15 <nick>  
RAW.436 › error –› 14[15nickname collision with <nick>14]
RAW.438 › error –› 14[15Nickname changed too fast, please wait a while and try again...14]
RAW.439 › error –› 14[15Nickname changed too fast, please wait a while and try again...14]
RAW.441 › error –› 14[15<nick> is not on <chan>14]
RAW.442 › error –› 14[15you're not on <chan>14]
RAW.443 › error –› 14[15<nick> is already on <chan>14]
RAW.461 › error –› 14[15More parameters needed for: <text>14]
RAW.465 › error –› 14[15you're banned from this server!14]
RAW.467 › error –› 14[15cannot join14]15 <chan>4 +k
RAW.471 › error –› 14[15cannot join14]15 <chan>4 +l
RAW.472 › error –› 14[15is an unknown character14]
RAW.473 › error –› 14[15cannot join14]15 <chan>4 +i
RAW.474 › error –› 14[15cannot join14]15 <chan>4 +b
RAW.475 › error –› 14[15cannot join14]15 <chan>4 Incorrect key
RAW.478 › error –› 14[15<chan>'s banlist is full14]
RAW.482 › error –› 14[15you're not an op in <chan>14]
RAW.511 › error –› 14[15your silence list is full14]
RAW.other › <text>