[mts]
Name CombinationX
Author Zmodem
EMail zmodem@clanx0.cjb.net
Website http://www.mircscripts.org/
Description CombinationX provides a sleek combination of colors and attributes in order to create a sleek and easy-on-the-eyes mIRC look for users.
Version 0.31
MTSVersion 1.1
RGBColors 255,255,255 0,128,192 0,64,128 55,113,55 255,128,0 0,128,192 116,0,196 15,160,210 255,255,0 0,252,0 0,107,147 0,255,255 0,0,252 255,0,255 122,122,127 180,180,190
Colors  2,8,4,5,9,9,9,9,9,9,9,0,4,5,0,0,9,9,9,9,5,2,0,2,5,15,5,2
BaseColors 01,04,05,09

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Prefix 03•<c4>• <c1>
Timestamp Off
TimeStampFormat 5[h:nntt5]
ParenText <c1><text>

Load <pre>Loaded MTS Theme:<c2> CombinationX
Unload <pre>Unloaded MTS Theme:<c2> CombinationX

TextChan !script comx.textchan
TextChanSelf !script comx.metextchan

TextQuery 15(<c4>?15)(00<nick>15) <text>
TextQuerySelf 15(<c4>?15)(<c1><nick>15) <text>

ActionChan  * <nick> <text>
ActionChanSelf  * <me> <text>
ActionQuery  * <nick> <text>
ActionQuerySelf  * <me> <text>

NoticeChan <c1> (<nick><c1>:<target><c1>)  <text>
Notice <c1> (<nick><c1>)  <text>
NoticeSelf <c2>-<c1><gt> (<nick><c1>)  <text>
NoticeSelfChan <c2>-<c1><gt> (<target><c1>)  <text>
NoticeServer <pre> <c1> (<nick><c1>)  <text>

TextMsg <pre> MSG from <nick>: <text>
TextMsgSelf <pre> <c4>(/MSG): You -> <nick>: <text>

Ctcp <pre> <c1> (<nick><c1>:<ctcp><c1>)  <text>
CtcpChan <pre> <c1>(<nick><c1>:<chan><c1>:<ctcp><c1>)  <text>
CtcpSelf <c1>-<gt> (<nick><c1>:<ctcp><c1>)  <text>
CtcpChanSelf <c1>-<gt> (<chan><c1>:<ctcp><c1>)  <text>
CtcpReply <c1><lt>- (<nick><c1>:<ctcp><c1>)  <text>
CtcpReplySelf <pre> <c1>[<nick><c1>:CTCP <ctcp><c1>] <text>

ServerError
Wallop <c4>(WALLOP<c4>) <nick>: <text>

Mode <pre> <c4>(/Mode): <nick> has modified the channel modes: <modes>
ModeUser <pre> <c4>(/Mode ME): You've modified your modes: <modes>

Join <pre> <c4>(/Join): <nick> (<address>)
JoinSelf <pre> <c4>You are now on: <chan>
Part <pre> <c4>(/Part): <nick> (<address>) - (Msg: <parentext>)

Kick <pre> <c4>(/Kick): <nick> -> <knick> (Msg: <parentext>)
KickSelf <pre> <c4>(/Kick): <nick> -> You (Msg: <parentext>)
Quit <pre> <c1>(/Quit): <nick> (Msg: <parentext>)
Topic <pre> <c4>(/Topic): <nick> has changed the topic to: <text>
Nick <pre> <c4>(/Nick): <nick> is now: <newnick>
NickSelf <pre> <c4>(/Nick): Your new nickname is now: <newnick>
Invite <pre> <c4>(/Invite): <nick> has invitied you to: <chan>
Rejoin <pre> <c1>(/Rejoin): Attempting to rejoin: <chan>

Notify <pre> <c1>(/Notify): <nick> is online.
UNotify <pre> <c1>(/Notify): <nick> has left.

DNS <pre> <c1>(/Dns): Trying to resolve: <address>
DNSError <pre> <c1>(/Dns): ERROR: Unable to resolve!
DNSResolve <pre> <c1>[DNS: <iaddress>] <naddress>
Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <c4>(ERROR<c4>) <text>

Whois !script comx.whois
Whowas <pre> <c1>(/Whowas): <nick> was: <realname> (<address>)

RAW.Other <pre> <text>
RAW.001 <pre> <text>
RAW.002 <pre> <c4>(Server: <server>) (Version: <value>)
RAW.003 <pre> <c4>(Created: <value>)
RAW.005 <pre> <c4>(Protocols supported: <text>)
RAW.221 <pre> <c4>(Usermodes: <modes>)
RAW.250 <pre> <c4>(Connections: <value>)
RAW.251 <pre> <c4>(Users: <users>) (Invisible: <text>) (Servers: <value>)
RAW.252 <pre> <c4>(Operators: <value>)
RAW.253 <pre> <c4>(Unknown connections: <value>)
RAW.254 <pre> <c4>(Channels: <value>)
RAW.255 <pre> <c4>(Local clients: <users>) (Servers: <value>)
RAW.265 <pre> <c4>(Local users: <users>) (Max: <value>)
RAW.266 <pre> <c4>(Global users: <users>) (Max: <value>)
RAW.302 <pre> <c4>(Userhost: <address>)

RAW.315 <pre> 00End of /who: <value>
RAW.324 <pre> <c4>Modes:  <modes>
RAW.332 <pre> <c4>Topic:  <text>
RAW.333 <pre> <c4>Topic:  Set by <nick> on <text>
RAW.328 <pre> <c4>Website:  <text>
RAW.329 !script %:echo %::pre 10Created:  $asctime(%::value)
RAW.341 <pre> <c1> <nick> to <chan>
RAW.352 <pre> <nick><c2>!<address> <away> <wserver>(<value>) <realname>
RAW.353 <pre> <c1>Names:  <text>
RAW.366 <pre> 00End of /Names: <chan>
RAW.372 <pre> <c2><text>
RAW.375 <pre> <c4>__ _ _ ___(/Motd) _______ _ __ _ _ _____ _ ______
RAW.376 <pre> <c4>__ _ _ ___(/Motd) _______ _ __ _ _ _____ _ ______
RAW.391

RAW.401 <pre> <c1>Nickname does not exist:00 <nick>
RAW.403 <pre> <c1>Channel does not exist:00 <chan>
RAW.404 <pre> <c1>Message undeliverable to: 00<chan>
RAW.421 <pre> <c1>Command not found:00 <value>
RAW.432 <pre> <c1>The nickname you are trying to use is already active:00 <nick>
RAW.433 <pre> <c1>The nickname you are trying to use is already active:00 <nick>
RAW.471 <pre> <c1>This channel is full (+l):00 <chan>
RAW.473 <pre> <c1>This channel is invite only (+i):00 <chan>
RAW.474 <pre> <c1>Cannot join this channel, you are banned from it (+b):00 <chan>
RAW.475 <pre> <c1>You cannot join this channel without a key (+k):00 <chan>
RAW.482 <pre> <c1>Only operators can use this operation on:<c4> <chan>

CLineOwner 8
CLineOp 8
CLineHOp 8
CLineVoice 4
CLineRegular 15
CLineMe 0
CLineFriend 15
CLineEnemy 15
CLineIrcOp 15

ImageMirc tile bg.bmp
ImageToolbar tile bg.bmp

Script CombinationX.mrc

Scheme1 No @/+/-/?

Scheme2 +TimeStamp

Scheme3 /|\ And No @/+/-/?

[Scheme1]
TextChan 15(00<nick>15) <text>
TextChanSelf 15(<c1><me>15) <text>

TextQuery 15(00<nick>15) <text>
TextQuerySelf 15(<c1><nick>15) <text>

Script CombinationX.mrc

[Scheme2]
TimeStamp On

Script CombinationX.mrc

[Scheme3]
TimeStamp On

TextChan 15(00<nick>15) <text>
TextChanSelf 15(<c1><me>15) <text>

TextQuery 15(00<nick>15) <text>
TextQuerySelf 15(<c1><nick>15) <text>

Script CombinationX.mrc