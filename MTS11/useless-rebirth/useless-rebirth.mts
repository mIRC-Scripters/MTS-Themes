[mts]
; Theme information
Name useless-rebirth
MTSVersion 1.1
Version 1.1
Author yAmi
EMail yAmi@whatz.org
Description simple looking theme with 4 schemes.
Timestamp ON
TimestampFormat <c4>(<c1>hh<c4>:<c1>nnt<c4>)
 
Prefix <c1>-<c4>!<c1>-
BaseColors 05,05,05,01
RGBColors 24,80,123 255,184,72 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 223,151,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
 
TextChan     <c4>(<cmode><c1><nick><c4>) <text>
TextChanSelf     <c4>(<cmode><c1><me><c4>) <text>
 
Colors 15,05,05,05,01,05,05,05,05,05,05,01,05,07,06,01,05,05,05,05,01,15,05,15,05,15
 
 
FontDefault Tahoma,9
FontChan Tahoma,9
FontQuery Tahoma,9
 
JoinSelf <pre> now talking in <c4><chan> !
Join <pre> <c4><nick> (<address><c4>) joined <c4><chan> !
Part <pre> <c4><nick> <c2>has left <c4><chan>.
 
Kick <pre> <c4><nick> <c2>kicked <c3><knick> <c2>from <c4><chan> <c4>! <parentext>
 
Mode <pre> <c4><nick> <c4>(<c3><modes><c4>) <c2>on <c4><chan>
 
KickSelf <pre> <c2>You were kicked from <c4><chan> <c2>by <c4><nick> <c4>! <parentext>
 
Quit <pre> <c4><nick> <c2>has left IRC. <c4>(<text><c4>)
 
ActionChan <pre> <c4>(<c2><nick><c4>)- <c3><text>
 
ActionChanSelf <pre> <c4>(<c2><me><c4>)- <c3><text>
 
NoticeChan <pre> <c4>[00n<c4>]<c2><target><c4>/<c2><nick><c4>) <c3><text>
 
Notice <pre> <c4>(<c2><nick><c4>) <c3><text>
 
NoticeSelf <pre> <c4>(<c2><me><c4>) <c3><text>
NoticeSelfChan <pre> <c4>(<c2><target><c4>/<c4><me><c4>) <c4><text>
 
TextQuery <c4>[<c2><nick><c4>] <c4><text>
TextQuerySelf <c4>[<c2><me><c4>] <c4><text>
 
ModeUser <pre> <c3>Usermode <c4>: <c4><modes>
 
Nick <pre> <c4><nick> <c2>is now known as <c4><newnick> <c4>!
NickSelf <pre> you're now known as <c4><newnick> <c4>!
Invite <pre> <c4><nick> <c2>invites you to join <c4><chan> <c4>!
ServerError <pre> <c4>Error <c4>: <c3><text> <c4>!
Rejoin <pre> <c2>Trying to rejoin <c4>!
Ctcp <pre> <c4><nick> <c4>[<c2><ctcp><c4>] <c3><text>
CtcpChan <pre> <c4><nick> <c4>[<c3><chan><c4>/<c2><ctcp><c4>] <c3><text>
CtcpSelf <pre> <c4><nick> <c4>[<c2><ctcp><c4>] <c3><text>
CtcpChanSelf <pre> <c4><chan> <c4>[<c2><ctcp><c4>] <c3><text>
CtcpReply <pre> <c4><nick> <c4>[<c2><ctcp><c4>/<target><c3>/reply<c4>] <c3><text>
CtcpReplySelf <pre> <c4><nick> <c4>[<c2><ctcp><c4>/<c3>reply<c4>] <c3><text>
Notify <pre> <c4><nick> <c2>is <c3>O<c2>nline <c4>!
UNotify <pre> <c4><nick> <c2>is <c3>O<c2>ffline <c4>!
 
DNS <pre> <c2>looking up <address>....
DNSError <pre> <c2>unable to resolve <radress>
DNSResolve <pre> <c2>resolved <address> to <raddress>
Echo <pre> <text>
EchoTarget <pre> <c4><target> <text>
Error <pre> <text>
Load <pre> <c2>loaded useless-rebirth (default) <c4>!
CLineMe 01
RAW.401 <pre> <c4>error: <c4><nick> <c2>no such nickname.
RAW.403 <pre> <c4>error: no such channel <c4><chan>.
RAW.404 <pre> <c4>error: unable to send messages to <c3><chan>
RAW.421 <pre> <c4>error: invalid command: <c4><value>
RAW.432 <pre> <c4>error: invalid nickname <c4><nick>
RAW.433 <pre> <c4>error: nickname already in use <c4><nick>
RAW.471 <pre> <c4>error: <c4><chan> <c2>+l <c4>!
RAW.473 <pre> <c4>error: <c4><chan> <c2>+i <c4>!
RAW.474 <pre> <c4>error: cannot join <c4><chan> <c2>+b <c4>!
RAW.475 <pre> <c4>error: cannot join <c4><chan> <c2>+k <c4>!
RAW.482 <pre> <c4>error: you're not a channel operator on <c3><chan>
 
Scheme1 blue
Scheme2 red
Scheme3 green
RAW.318 
RAW.369 
Script useless-rebirth.mrc
RAW.Other <c2><text>
RAW.001 <pre> <c2><text>
RAW.251 <pre> number of users: <users> - invisible: <text> - servers <value>
RAW.252 <pre> operators online: <value>
RAW.253 <pre> unknown connections: <value>
RAW.254 <pre> number of channels formed : <value>
RAW.332 <pre> <c4><chan> <c2>topic is <c4>[<c3> <text> <c4>]
RAW.333 <pre> <c2>set by <c3><nick> <c4>[<c3><text><c4>]
RAW.341 <pre> <c4><nick> <c2>has been invited to join <c3><chan> <c4>
RAW.353 <pre> listing users on <c3><chan> <parentext>.
Topic <pre> <c4><nick> <c2>changed topic to <c4><text>.
RAW.330 !Script set -u4 %::rebirth.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
Whois !Script start.whois
Wallop <pre> <c4> wallop from <nick> <c4>(<text><c4>)
Whowas !Script start.whowas
RAW.002 <pre> <c2> server (<server>) running version <text> <value>
RAW.003 <pre> this server was created <value>
RAW.005 <pre> protocols supported by server: <text>
RAW.250 <pre> <c2>total connections: <value>
RAW.255 <pre> local clients <users> on <value> servers
RAW.265 <pre> local users: <users>, max. <value>
RAW.266 <pre> global users: <users>, max. <value>
RAW.302 <pre> userhost: <nick> (<address>), <value>
RAW.324 <pre> modes on <chan>: <modes>
 
RAW.405 <pre> <c4>error: cannot join. you are on too many channels.
 
RAW.436 <pre> <c4>error: nick collision with <nick>
RAW.438 <pre> <c4>error: nickname changed too fast, please wait a while and try again...
RAW.439 <pre> <c4>error: nickname changed too fast, please wait a while and try again...
 
RAW.441 <pre> <c4>error: <nick> is not on <chan>
RAW.442 <pre> <c4>error: you're not on <chan>
RAW.443 <pre> <c4>error: <nick> is allready on <chan>
RAW.461 <pre> <c4>error: more parameters needed for <value>
RAW.465 <pre> <c4>error: you're banned from this server.
RAW.467 <pre> <c4>error: cannot join <c4><chan> <c2>+k <c4>!
RAW.472 <pre> <c4>error: unknown character: <value>
RAW.478 <pre> <c4>error: cannot ban, banlist is full.
RAW.303 <pre> <c4><nick> is online<c4>!
RAW.305 <pre> <c4>you are no longer marked as being away
RAW.306 <pre> <c4>you have been marked as being away
RAW.391 <pre> server time: <text>
 
[Scheme1]
BaseColors 05,05,05,01
RGBColors 24,80,123 52,147,239 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 223,151,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
Load <pre> <c2>loaded useless-rebirth (blue) <c4>!
Colors 15,05,05,05,01,05,05,05,05,05,05,01,05,07,06,01,05,05,05,05,01,15,05,15,05,15
 
[Scheme2]
BaseColors 05,05,05,01
RGBColors 24,80,123 180,30,45 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 223,151,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
Load <pre> <c2>loaded useless-rebirth (red) <c4>!
Colors 15,05,05,05,01,05,05,05,05,05,05,01,05,07,06,01,05,05,05,05,01,15,05,15,05,15
 
[Scheme3]
BaseColors 05,05,05,01
Load <pre> <c2>loaded useless-rebirth (green) <c4>!
RGBColors 24,80,123 14,130,14 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 223,151,0 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
Colors 15,05,05,05,01,05,05,05,05,05,05,01,05,07,06,01,05,05,05,05,01,15,05,15,05,15
 
