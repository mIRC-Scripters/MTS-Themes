[mts]
NAME Ducktheme
Author Ducksual
Email wc_duxz@hotmail.com
Website None at the moment
Description =)
Version 1
MTSVersion 1.1
script ducktheme.mrc

Colors 2,0,8,13,12,7,7,7,8,7,7,9,8,7,13,9,7,4,08,5,9,02,9,02,4,11
Basecolors 09,00,08,07
rgbcolors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 12,123,184 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
 
FontDefault Times new roman,14
FontQuery times new roman,14
FontChan times new roman,14
 
CLineOwner 4
clineOP 7
CLineHOp 14
ClineVoice 8
ClineRegular 9
ClineMe 0
CLineIrcOP 13
 
Clinecharowner 04!
ClineCharOp @
ClineCharHop %
ClineCharVoice +
CLineCharIrcOp 13^
 
Parentext 4(<c4><text>4)
 
textchan 4(<C3><cmode><nick>4) <c1><text>
textchanself 4(<C3><cmode><me>4) <c1><text>
ActionChan <c2>^ <cmode><nick> <text>
ActionChanSelf <C2>^ <cmode><me> <text>
NoticeChan <c3>-<nick>:<target>- <text>
Notice <c4>-<nick>- <c3><text>
Noticeself <c4>-> <target> <c3><text>
Noticeselfchan <c4>-> <target> <c3><text>
TextQuery 4(<C3><nick>4) <c1><text>
Textqueryself 4(<C3><me>4) <c1><text>
actionquery <c2>^ <nick> <text>
actionqueryself <c2>^ <me> <text>
Textmsg <c3>->*<nick>*<c1> <text>
textmsgself <c3>*<target>*<c1> <text>
 
mode 9(|) 7Mode Change : 4(9<modes>4)7 set by 4(8<nick>4)
join <c1>(|)<c4> Join : 04(08<nick>04) 04(09<address>04)
joinself <c1>(|)<c4> Join : 4(8<me>4) 4(9<address>4)
part <c1>(|) <c4>Part : 4(8<nick>4) 4(9<address>4) <parentext>
kick <c1>(|) <c4>Kick : 4(<c1><knick>4) <c4>kicked by 4(<c3><nick>4)<c4> Reason : 4(<c1><text>4)
kickself <c1>(|) <c4>You were kicked by 4(<c3><nick>4)<c4> Reason : 4(<c1><text>4)
quit 9(|)7 Quit: 8- 4(9<nick>4)8 - <parentext>
Nick 9(|) 7Nick Change : 4(8<nick>4) 7Changes Nickname To 4(9<newnick>4)
NickSelf 9(|) 7Changed nickname to 4(8<newnick>4)
Invite 7You have been invited to 4(07 <chan> 4)
ServerError Server error? Wtf? (<text>)
Rejoin 8Attempting to rejoin...
Ctcp 7 [[8<nick>7]]8 |<ctcp>| <text>
CtcpChan 7 [[8<nick> : <chan>7]]8 |<ctcp>| <text>
CtcpSelf 8-> 7 [[8<nick>7]]8 |<ctcp>| <text>
CtcpChanSelf 8-> 7 [[8<chan>7]]8 |<ctcp>| <text>
CtcpReply 7 [[8<nick>7]]8 |<ctcp>| <text>
CtcpReplySelf 8-> 7 [[8<nick>7]]8 |<ctcp>| <text>
Notify 8<nick> is on irc 4: 8 <text>
UNotify 8<nick> has left irc 4: 8 <text>
Wallop 11Wallop 4: 8<text>
NoticeServer 7-<nick>- 8<text>
 
DNS 7(|) 9Looking up <address>
DNSError 7(|)9 Dns failed
DNSResolve 7(|) 9resolved <naddress> to <raddress>
Echo 9<text>
EchoTarget 7(Echo to : <chan>)9 <text>
Load 4(8Loaded7 [9Ducktheme7]4)
Unload 4(8Unloaded7 [9Ducktheme7]4)
 
RAW.001 7(|)8Welcome to IRC
RAW.332 9(|) 7Topic is 4(08<text>04)
RAW.333 9(|) 7Set By 4(8<nick>4)7 at <text>
 
RAW.324 9(|) 7Modes : 4|8<modes>4|7 set on 4>8<chan>4<
ModeUser 9(|) 7Usermode : 4(9<modes>4)7 set on 4(8<me>4)
Timestamp ON
TimestampFormat 4(08HH:nn4)
Topic 9(|)7 Topic Change: 4(9<nick>4)7 Changes the topic to 4(08<text>04)
Prefix 9(|)
RAW.314 !Script ducktheme.whowas
RAW.330 !Script ducktheme.authed
RAW.319 <pre> 4(08<nick>4)9 is on 4(7Channels:08 <chan>4)
RAW.312 <pre> 4(08<nick>4)9 is on 4(7Address:08 <wserver>4) (7Info:08 <serverinfo>4)
RAW.301 <pre> 4(08<nick>4)9 is away
RAW.307 <pre> 4(08<nick>4) (07<isregd>4)
RAW.313 <pre> 4(08<nick>4)9 <isoper> 4(7<operline>4)
RAW.317 !Script ducktheme.idle
RAW.318 <pre>07 End of Whois
 
RAW.369 <pre>07 End of Whowas
RAW.311 !Script ducktheme.whois

 
