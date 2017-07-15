[MTS]
Name Deefece
Author AnTr0
Email antr0@terra.com.ar
Description Blue & Grey tones theme with hotlinks on + - modes. Plus 5 schemes.
Version 2.09.21
MTSVersion 1.1
 
Colors 2,11,0,12,15,15,15,15,15,15,15,15,11,15,15,15,15,15,15,11,15,15,1,2,0,0,0,14
RGBColors 248,252,248 48,44,48 48,64,80 0,72,0 255,0,0 104,0,0 144,0,144 240,120,0 248,248,160 16,180,80 0,144,144 104,180,224 88,120,248 224,0,224 144,144,144 208,208,208
BaseColors 15,11,12,00

CLineOwner 14
CLineOP 14
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 11
CLineFriend 12
CLineEnemy 04
CLineIrcOP 04
 
CLineCharOwner 14.
CLineCharOP 14@
CLineCharHOP 15%
CLineCharVoice 15+
CLineCharRegular 00
CLineCharMe 11
CLineCharFriend 12:o)
CLineCharEnemy 04:o(
 
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11 
 
;ImageStatus               
;ImageChan 
;ImageQuery    
;ImageMirc  
;ImageToolbar  
ImageButtons Deefece-buttons.png
;ImageSwitchbar 
 
Prefix <c2>•<c1>•<c4>•
ParenText <c4>(<c1><text><c4>)
Script Script.mrc
Scheme1 Dark, grey & red 
Scheme2 Brown, grey & orange
Scheme3 Green & grey
Scheme4 Black to white
Scheme5 Old prefix
 
TextChan !script Deefece.text chan
TextChanSelf !script Deefece.text chan
ActionChan <c4>* <c3><cmode><cnick><nick><c1> <text>
ActionChanSelf <c4>* <c3><cmode><cnick><me><c1> <text>                
NoticeChan <c4>- <c3><cmode><cnick><nick> <c4>(<c1><address><c4>) <c3>: <target> <c4>-<c1> <text>        
Notice <c4>- <cnick><nick> <c4>(<c1><address><c4>) <c4>-<c1> <text>
NoticeSelf <c4>-> - <cnick><nick> <c4>-<c1> <text>
NoticeSelfChan <c4>-> - <c3><target> <c4>-<c1> <text>
TextQuery !script Deefece.text query 
TextQuerySelf !script Deefece.text query Self 
ActionQuery <c4>* <c2><nick><c1> <text>
ActionQuerySelf <c4>* <cnick><me><c1> <text>
TextMsg <c1>*<nick>* <text>                 
TextMsgSelf <c4>*<c2><me><c4>*<c1> <text>
 
Mode <pre> <c4>Mode <c2><chan> <c4>: <c1><modes> <c4>( <cnick><nick><c3>!<cnick><address> <c4>)
ModeUser <pre> <c1>Mode <c2><me> <c4>: <c2><modes> 
Join !script Deefece.jpq Join 
JoinSelf !script Deefece.jpq JoinSelf ,Joining,Waiting for stats...
Part !script Deefece.jpq Part
Kick !script Deefece.kick 
KickSelf !script Deefece.kick Self
Quit !script Deefece.jpq Quit 
Topic !script Deefece.topic
Nick <pre> <c4>Nick: <c2><nick> <c1>is now <c2><newnick><c3>!<c1><address>
NickSelf <pre> <c1>Your nick is now: <c2><newnick>
Invite <pre> <c4>Invite <c2><chan> <c4>: <c1><nick><c3>!<c1><address> 
ServerError <pre> <c2> Server error <c4>:<c1> <text>      
;Rejoin ????     
Ctcp !Script Deefece.ctcp requested by 
CtcpChan !Script Deefece.ctcp requested at $+(,%::c2,%::chan,,%::c1) by 
CtcpSelf !Script Deefece.ctcp to 
CtcpChanSelf !Script Deefece.ctcp to ,chan
CtcpReply !Script Deefece.ctcp Reply from 
CtcpReplySelf !Script Deefece.ctcp to
Notify !Script Deefece.notify NOTIFY is online
Unotify !Script Deefece.notify UNOTIFY is offline
Wallop <pre> <c2> Wallop <c4>:<c1> <text>
NoticeServer <pre> <c2> Server notice <c4>:<c1> <text> 
 
DNS
DNSError !Script Deefece.dns Error $iif(%::nick && %::address,%::nick is online but couldn't resolve.,$iif(%::nick,User %::nick was not found.,Unable to resolve %::address .))
DNSResolve !Script Deefece.dns Resolved to:
Echo <pre> <c1><text>
EchoTarget <pre> <c1><target> <text>
Error <pre> <c3><ERROR>: <c1><text>
Load <pre> <c1>DeeFeCe Theme loaded. Click <c3>.here.<c1> to see the readme file.
Unload <pre> <c1>DeeFeCe Theme unloaded.
 
Whois !Script Deefece.whox is
Whowas !Script Deefece.whox was 
 
RAW.001 <pre> <c1>Wellcome to IRC <c2><me> <c1>. 
RAW.002 <pre> <c1>Server: <c2><server> <c1>Version: <c2><value>
RAW.003 <pre> <c1>Created on: <c2><value>
RAW.005 <pre> <c1>Protocols supported: <c2><text> 
RAW.250 <pre> <c1>Total connetions: <c2><value>
RAW.251 <pre> <c1>Users: <c2><users> <c1>Invisible: <c2><text> <c1>Servers: <c2><value>
RAW.253 <pre> <c1>Unknown connetions: <c2><value>
RAW.254 <pre> <c1>Number of channels: <c2><value> 
RAW.255 <pre> <c1>Clients: <c2><users> <c1>Services: <c2><value> 
RAW.265 !Script
RAW.266 !Script
RAW.301 <pre> <c2><nick> <c1>is away: <c2><text>
RAW.302 !Script %:echo %::pre $+(,%::c1,Userhost: ,%::c2,%::nick,,%::c3,!,%::c2,%::address,$chr(32),,%::c4,$chr(40),,%::c1,user is $iif(%::value = +,here,away),,%::c4,$chr(41))
RAW.303 !Script %:echo %::pre $+(,%::c2,%::nick ,%::c1,is online.)
RAW.305 !Script Deefece.Raw.305 You are back from:,You are not away.
RAW.306 !Script %:echo %::pre $+(,%::c1,You are away:,%::c2 $awaymsg)
RAW.307 !Script
RAW.311 !Script deefece.whoxadd Realname:,Address:,Channels:,Server:,Info:,Signon:,Idle:,Registered:,IRCop:,Yes,No,End of whois.
RAW.312 !Script
RAW.313 !Script
RAW.314 !Script deefece.whoxadd Realname:,Address:,Signoff:,Server:,Yes,No,End of whowas.
RAW.315 !Script 
RAW.317 !Script
RAW.318 !Script
RAW.319 !Script
RAW.324 !Script Deefece.Raw.324 %::chan %::modes
RAW.329 !Script %:echo %::pre $+(,%::c1,Creation time:,%::c2 $asctime(%::value))
RAW.331 <pre> <c4>Topic of <c2><chan> <c4>: -<c2>No topic on this channel<c4>-
RAW.332 <pre> <c4>Topic of <c2><chan> <c4>is: "<c2><text><c4>"
RAW.352 !Script Deefece.Raw.352 
RAW.366 !Script
RAW.368 !Script
RAW.369 !Script
RAW.372 <pre> <c1><text>
RAW.375 <pre> <c1>Message of the day:
RAW.376 !Script
RAW.333 <pre> <c4>Topic of <c2><chan> <c4>set on <c2><text> <c4>by <c2><nick> 
RAW.401 <pre> <c1>There is no <c2><nick> <c1>user.
RAW.403 <pre> <c1>There is no <c2><chan> <c1>channel.
RAW.404 <pre> <c1>Unable to send message to <c2><chan>
RAW.406 !Script Deefece.whox There was no such nick.
RAW.421 <pre> <c2>/<value> <c1>is an invalid command.
RAW.422 <pre> <c1>No <c2>MOTD <c1>file on this server.
RAW.432 <pre> <c2><nick> <c1> is an invalid nickname. 
RAW.433 <pre> <c1>Nickname <c2><nick> <c1>is in use.
RAW.471 <pre> <c1>Channel <c2><chan> <c1>is full <c4>(<c1>+l mode<c4>) 
RAW.473 <pre> <c1>Channel <c2><chan> <c1>is only for invited people <c4>(<c1>+i mode<c4>) 
RAW.474 <pre> <c1>You are banned from channel <c2><chan> <c4>(<c1>+b mode<c4>) 
RAW.475 <pre> <c1>You have to enter the password to join <c2><chan> <c4>(<c1>+k mode<c4>)
RAW.482 <pre> <c1>You are not an <c3>@<c1>OP of <c2><chan> <c1>.
  
RAW.Other <pre> <c1>Raw <c3><numeric> <c1>default data<c4>: <c2><text> 
 
[Scheme1]
Description jauaja
Colors 1,14,4,4,15,15,15,15,15,15,15,15,14,15,14,15,15,15,15,14,15,15,1,1,15,14,14,14
BaseColors 15,14,04,00
 
CLineMe 04
CLineFriend 07
CLineEnemy 11
CLineIrcOP 11
 
ClineCharMe 04
CLineCharFriend 07:o)
CLineCharEnemy 11:o(

[Scheme2]
Colors 5,14,4,4,15,15,15,15,15,15,15,15,14,15,14,15,15,15,15,14,15,15,1,5,15,14,14,14
BaseColors 15,14,07,00
 
CLineMe 07
CLineFriend 04
CLineEnemy 11
CLineIrcOP 11
 
ClineCharMe 07
CLineCharFriend 04:o)
CLineCharEnemy 11:o(

[Scheme3]
Colors 3,10,0,9,15,15,15,15,15,15,15,15,10,15,15,15,15,15,15,10,15,15,1,3,0,0,0,14
BaseColors 15,10,09,00

CLineMe 10
CLineFriend 09
CLineEnemy 11
CLineIrcOP 11
 
ClineCharMe 10
CLineCharFriend 09:o)
CLineCharEnemy 11:o(

[Scheme4]
Colors 1,14,0,14,15,15,15,15,15,15,15,15,14,15,14,15,15,15,15,14,15,15,1,1,15,14,14,14
BaseColors 15,14,00,00

ClineMe 14

ClineCharMe 14

[Scheme5]
Prefix <c2>»<c1>»<c4>»

