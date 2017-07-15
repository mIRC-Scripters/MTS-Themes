[mts]
Name XmIRC
Author Xeek
EMail XeekDroagon@gmail.com
Website http://82.34.139.53/~xeek/
Description :: XmIRC ::
Version 1.3
MTSVersion 1.1
Script XmIRC.mrc

Timestamp ON
TimestampFormat 14[15hh:nn:sstt14]
ParenText 14[15<text>14]
FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

Prefix 14:15:0:
COLORS 1,7,4,3,14,14,0,15,4,9,14,15,7,4,15,15,14,4,10,5,15,1,15,1,15,14,6,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

Load XmIRC '05 Theme By Xeek Loaded
Unload XmIRC '05 Theme By Xeek Unloaded
TextChan 14[0<cmode><nick>14]0 <text>
TextchanSelf 14[0<cmode><nick>14]0 <text>
TextQuery 14[0<nick>14]0 <text>
TextQuerySelf 14[0<me>14]0 <text>
Join <pre> 15Join: <nick> 14[15<address>14]
JoinSelf <pre> 15now talking in <chan>
Part <pre> 15Part: <nick> 14[0<address>14] 14[15<text>14]
Quit <pre> 15Quit: <nick> 14[0<address>14] 14[15<text>14]
Kick <pre> 15Kick: <knick> was kicked from <chan> by <nick> 14[15<text>14]
KickSelf <pre> 15Kick: You were kicked from <chan> by <nick> 14[15<text>14] 
ActionChan 14~ <nick> 14<text>
ActionChanSelf 14~ <me> 14<text>
Mode <pre> 15Mode: <nick> sets mode: 14[15<modes>14]
ModeUser <pre> 15Mode: <nick> sets mode: 14[15<modes>14]
Topic !script topic
Nick <pre> 15Nick: <nick> is now known as <newnick>
NickSelf <pre> 15Nick: <nick> is now known as <newnick>
Invite <pre> 15Invite: <nick> invites you to <chan>
Rejoin <pre> 15rejoining <chan>.. .
Ctcp <pre> 4[CTCP :: <nick>] –› [<ctcp>] <text>
CtcpChan <pre> 4[CTCP :: <chan> :: <nick>] –› [<ctcp>] <text>
CtcpSelf <pre> 4[CTCP :: <nick>] –› [<ctcp>] <text>
CtcpChanSelf <pre> 4[CTCP :: <target>] –› [<ctcp>] <text>
CtcpReply <pre> 4[CTCP Reply :: <nick>] –› [<ctcp>] <text>
CtcpReplySelf <pre> 4[CTCP Reply :: <target>] –› [<ctcp>] <text>
Notify <pre> 15Notify: <nick> is online
UNotify <pre> 15Unotify: <nick> is  offline
Notice <pre> 4Notice: 15<nick> <text>
NoticeChan <pre> 4Notice: 15[<chan> :: <nick>] <text>
Noticeself <pre> 4Notice: 15<target> <text>
NoticeSelfChan <pre> 4Notice: 15<target> <text>
NoticeServer       (?)      <nick> <text>
DNS <pre> 15[DNS] Looking up <address>....
DNSError <pre> 15[DNS] Error, unable to resolve...
DNSResolve <pre> 15[DNS] Resolved <naddress> to <iaddress>
Echo  <pre> <text>
EchoTarget  <pre> <text>
Error Error: 14[15<text>14]
TexMsg 14[15<nick>14] <text>
TextMsgSelf 15<target> 14[15<text>14]
RAW.332 <pre> 15Topic: 14[15<text>14]
RAW.333 <pre> 15set by 15<nick> on <text>
RAW.324 <pre> 15modes are <modes>
RAW.401 Error: 14[15no such nick14]15 <nick> 
RAW.403 Error: 14[15no such channel14]15 <chan>
RAW.404 Error: 14[15cannot send message14]15 <chan> 
RAW.405 Error: 14[15you're on too many channels14]
RAW.406 Error: 14[15Whowas on <nick> - There was no such nick14]
RAW.421 Error: 14[15unknown command14]15 <text> 
RAW.432 Error: 14[15<nick>, erroneus nickname14]
RAW.433 Error: 14[15nickname is alredy in use14]15 <nick>  
RAW.436 Error: 14[15nickname collision with <nick>14]
RAW.438 Error: 14[15Nickname changed too fast, please wait a while and try again...14]
RAW.439 Error: 14[15Nickname changed too fast, please wait a while and try again...14]
RAW.441 Error: 14[15<nick> is not on <chan>14]
RAW.442 Error: 14[15you're not on <chan>14]
RAW.443 Error: 14[15<nick> is already on <chan>14]
RAW.461 Error: 14[15More parameters needed for: <text>14]
RAW.465 Error: 14[15you're banned from this server!14]
RAW.467 Error: 14[15cannot join14]15 <chan> +k14[15+k You need a key14]
RAW.471 Error: 14[15cannot join14]15 <chan> +l14[15+l Chan is full14]
RAW.473 Error: 14[15Cannot join14]15 <chan> +i14[15+i invite only14]
RAW.474 Error: 14[15Cannot join14]15 <chan> +b14[15+b You are banned14]
RAW.475 Error: 14[15Cannot join14]15 <chan> 14[15Incorrect key14]
RAW.478 Error: 14[15<chan>'s banlist is full14]
RAW.482 Error: 14[15You're not an op in <chan>14]
RAW.511 Error: 14[15Your silence list is full14]
RAW.other <text>

Scheme1 Default

[Scheme1]
RGBColors RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
