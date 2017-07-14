[mts]
Name netmaTriX
Author netko
EMail net@BlackX.biz
Website www.BlackX.biz
Description netmaTriX script default theme
Version 1.0
MTSVersion 1.1
Script netmaTriX.mrc

Timestamp ON
TimestampFormat 11[10HH:nn:ss11]
ParenText 11[<text>11]
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

Prefix .
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 0,0,0 157,255,157 78,228,89 71,154,71 0,0,252 255,0,255 127,127,127 210,210,210
Colors 08,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,08,09,08,09,09,09,08

TextChan 11[10<cmode><nick>11] <text>
TextchanSelf 11[10<cmode><nick>11]  ›  <text>
TextQuery  11[10<nick>11] <text>
TextQuerySelf  11[10<me>11]  ›  <text>
Join <pre>join› / 10<nick> 11[10<address>11] 
Part <pre>part› / 10<nick> 11[10<address>11] –› <parentext>
Quit <pre>quit› / 10<nick> 11[10<address>11] –› <parentext>
ActionChan  10<cmode><nick> <text>
ActionChanSelf  ›10<cmode><me> <text>
Mode <pre>rawmode› / 10<nick> sets mode –› 11[10<modes>11]
JoinSelf › now talking in10 <chan>
Kick <pre>kick› / 10<nick> kicked 10<knick> –› <parentext>
KickSelf <pre>kick› / 10<nick> kicked you from 10<chan> –› <parentext> 
Topic !script theme.topic
Nick <pre>nickchange› / 10<nick> –›10 <newnick>
NickSelf <pre>nickchange› / nick changed to 10<newnick>
Invite <pre>invite› / 10<nick> invites you to –›10 <chan>
Rejoin <pre>rejoining› / 10<chan>
Ctcp  <pre>ctcp› / 10<nick> –› 11[10<ctcp>11] 10 <text>
CtcpChan <pre>ctcp› / 10<nick> - <chan> –› 11[10<ctcp>11] 10 <text>
CtcpSelf <pre>ctcp› / 10<target> –› 11[10<ctcp>11] 10 <text>
CtcpChanSelf <pre>ctcp› / 10<target> –› 11[10<ctcp>11] 10 <text>
CtcpReply <pre>ctcpreply› / 10<nick> –› 11[10<ctcp>11]10 <text>
CtcpReplySelf <pre>ctcpreply› / 10<target> –› 11[10<ctcp>11]10 <text>
Notify <pre>notify› / 10<nick> is online
UNotify <pre>unotify› / 10<nick> is  offline
Notice <pre>notice› from / 10<nick> –› <text>
NoticeChan <pre>notice› from / 10<nick> - <chan> –› <text>
Noticeself <pre>notice› to / 10<target> –› <text>
NoticeSelfChan <pre>notice› to / 10<target> –› <text>
NoticeServer <pre>servernotice› / 10<nick> –› <text>
Echo  <pre><text>
EchoTarget  <pre><text>
Error › error –› 11[10<text>11]
Load netmaTriX theme by netko loaded
Unload netmaTriX theme by netko unloaded
Whois !script theme.whois
ModeUser <pre>usermode / mode changed to –› 11[10<modes>11]
TexMsg 11[10<nick>11] <text>
TextMsgSelf › /msg 10<target> 11[10<text>11]
RAW.332 › topic –› 11[10<text>11]
RAW.333 › set by 10<nick> on –› 11[10<text>11]
RAW.324 › modes are –› 11[10<modes>11]
RAW.401 › error –› 11[10no such nick11]10 <nick> 
RAW.403 › error –› 11[10no such channel11]10 <chan>
RAW.404 › error –› 11[10canot send message11]10 <chan> 
RAW.421 › error –› 11[10unknown command11]10 <text> 
RAW.433 › error –› 11[10nickname is alredy in use11]10 <nick>  
RAW.471 › error –› 11[10unabel to join11]10 <chan> +l
RAW.473 › error –› 11[10unabel to join11]10 <chan> +i
RAW.474 › error –› 11[10unabel to join11]10 <chan> +b
RAW.473 › error –› 11[10unabel to join11]10 <chan> +k
RAW.other › <text>

Scheme1 scheme1

[scheme1]
Prefix 4• 
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,255 70,70,70 153,162,166 144,144,144 0,0,252 255,0,255 127,127,127 210,210,210
