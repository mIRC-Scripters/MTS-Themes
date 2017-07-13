[mts]
Name rot
Author GotchO
Email GotchO@aeiou.pt
Website fuck you
Description new theme...
Version 0.5
MTSVersion 1.0

Scheme1 orange
Scheme2 blue
Scheme3 Megabyte
Scheme4 Megabyte(b)


RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Colors 1,15,15,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15
BaseColors 04,14,15,00

CLineOp 00
CLineVoice 14
CLineRegular 15
CLineMe 04

FontDefault Tahoma,-8
FontQuery Tahoma,-8
FontChan Tahoma,-8

Timestamp <c1>(<c3>HH:nn<c1>)

Prefix <c2>.<c3>•<c2>.

Notice <pre> <c1>notice<c2>: from<c3> <nick> <c1>(<c3><text><c1>)
NoticeSelf <pre> <c1>notice<c2>: to<c3> <nick> <c1>(<c3><text><c1>)
NoticeChan <pre> <c1>notice<c2>: from<c3> <chan> by <nick> <c1>(<c3><text><c1>)
NoticeSelfChan <pre> <c1>notice<c2>: to<c3> <chan> <c1>(<c3><text><c1>)
TextChan <c1><cmode><c3><nick><c1> . <c2><text>
TextChanSelf <c1><cmode><c2><me><c1> . <c3><text>
ActionChan <pre> <c1>action<c2>:<c3> <nick> <text>
ActionChanSelf <pre> <c1>action<c2>:<c3> <me> <text>
TextQuery <c3><nick><c1> . <c2><text>
TextQuerySelf <c2><me><c1> . <c3><text>
ActionQuery <pre> <c1>action<c2>:<c3> <nick> <text>
ActionQuerySelf <pre> <c1>action<c2>:<c3> <me> <text>
TextMsg <pre> <c1>msg<c2>: from<c3> <gt> <c1>(<c3><text><c1>)
TextMsgSelf <pre> <c1>msg<c2>: to<c3> <target> <c1>(<c3><text><c1>)
NICK <pre> <c1>Nick<c3>: <nick><c2> changed to<c3> <newnick>
NICKSELF <pre> <c1>Nick<c3>: you<c2> changed to<c3> <newnick> 

Mode <pre> <c1>mode<c2>: <c1>(<c3><modes><c1>) <c2>by<c3> <nick>
UserMode <pre> <c1>usermode<c2>:<c3> <nick> <c2>changes to:<c3> <modes>
Join <pre> <c1>join<c2>:<c3> <nick> <c1>(<c3><address><c1>)
JoinSelf !Script theme.join
Part <pre> <c1>part<c2>:<c3> <nick> <c1>(<c3><address><c1>) <parentext>
Kick <pre> <c1>kick<c2>: <c3><knick><c2> was kicked by<c3> <nick> <c1>(<text><c1>)
KickSelf <pre> <c1>WAKE UP<c2>: <c3>you<c2> were kicked by<c3> <nick><c2>, from<c3> <chan> <c1>(<text><c1>)
Quit <pre> <c1>quit<c2>:<c3> <nick> <c1>(<c3><address><c1>) <c1>(<text><c1>)
Topic !script theme.changetopic
Invite <pre> <c1>invite<c2>:<c3> <nick> <c2>has invited you to join<c3> <chan>
ServerError <pre> <c1>error<c2>:<c3> <text>
Rejoin <pre> <c1>rejoining <c3><chan><c1>...
Notify <pre> <c1>notify<c2>: <c3><nick><c2> is online <c1>(<c3><text><c1>)
UNotify <pre> <c1>notify<c2>: <c3><nick><c2> is offline

DNS <pre> <c1>dns resolving<c2>:<c2> looking up <c3><address>...
DNSError <pre> <c1>dns resolving<c2>: <c2>unable to resolve <c3><address>
DNSResolve <pre> <c1>dns resolving<c2>: <c2>resolved <c3><address> <c2>to<c3> <raddress>

Ctcp <pre> <c1>(<c2>CTCP<c2>:<c3><nick><c1>) <ctcp> <text>
CtcpChan <pre> <c1>(<c2>CTCP<c2>:<chan>::<c3><nick><c1>) <ctcp> <text>
CtcpSelf <pre> <c1>(<c2>CTCP<c2>:<c3><me><c1>) <ctcp> <text>
CtcpChanSelf <pre> <c1>(<c2>CTCP<c2>:<chan>::<c3><me><c1>) <ctcp> <text>
CtcpReply <pre> <c1>(<c2>CTCP Reply<c2>:<c3><nick><c1>) <ctcp> <text>
CtcpReplySelf <pre> <c1>(<c2>CTCP Reply<c2>:<c3><me><c1>) <ctcp> <text>

Script rot.mrc

RAW.311 !Script theme.rtwhois
RAW.314 !Script <c2>whowas<c1>:<c2> <nick> <c3> <realname> <c1>(<c3><address><c1>)
RAW.319 <c1>› <c2>channels<c1>:<c3> <chan>
RAW.312 <c1>› <c2>server<c1>:<c3> <wserver> - <c1>(<c3><serverinfo><c1>)
RAW.301 <c1>› <c2>away<c1>:<c3> <text>
RAW.307 <c1>› <c2>registered<c1>:<c3> <isregd>
RAW.313 <c1>› <c2>ircop<c1>:<c3> <isoper> <c1>,<c3> <operline>
RAW.317 !Script theme.idle
RAW.318 <c2>¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
RAW.369 <c3>end of whowas :: <nick>

RAW.Other <pre> <text>
RAW.001 <pre> <c3><text>
RAW.002 <pre> <c1>host<c2>: <c3><server><c2> running version<c3> <value>
RAW.003 <pre> server created on<c2>:<c3> <value>
RAW.005 <pre> protocols supported by this server<c2>:<c3> <text>
RAW.250 <pre> total connection(s)<c2>:<c3> <value>
RAW.251 <pre> <c2>users<c3>: <c3><users> <c2>invisible<c2>:<c3> <text> <c2>servers<c2>:<c3> <value>
RAW.252 <pre> <c2>operator(s) online<c3>:<c3> <value>
RAW.253 <pre> <c2>unknown connection(s)<c3>:<c3> <value>
RAW.254 <pre> <c2>number of channels formed<c3>: <c3><value>
RAW.255 <pre> <c2>local clients<c3>: <c3><users> <c2>on<c3> <value><c2> server(s)
RAW.265 <pre> <c2>local users<c3>: <c3><users> <c2>max<c3>: <c3><value>
RAW.266 <pre> <c2>global users<c3>: <c3><users> <c2>max<c3>:<c3> <value>
RAW.302 <pre> userhost<c2>:<c3> <nick> <c1>(<c3><address><c1>)
RAW.324 <pre> <c2><chan> modes<c1>:<c3> <modes>
RAW.329 !Script theme.created
RAW.332 !Script theme.topic
RAW.333 !script theme.settopic
RAW.341 <pre> <c3><nick><c2> has been invited to join <c3><chan>
RAW.352 <pre> <c3><cmode><nick> <c1>(<c3><address><c1>)<c3> <realname>
RAW.353 <pre> <c1><chan><c2>:<c3> <text>
RAW.366 <pre> end of <c3>/names<c2> list for <chan>
RAW.375 <pre> Message of the day<c2>:
RAW.372 <pre> <text>
RAW.376 <pre> end of <c3>/motd<c2> command
RAW.391 <pre> <c2>date\time: <c3><text>
RAW.401 <pre> no such nickname<c2>: <c3><nick>
RAW.403 <pre> no such channel<c2>: <c3><chan>
RAW.404 <pre> unable to send message to <c3><chan>
RAW.421 <pre> invalid command<c2>: <c3><value>
RAW.433 <pre> <c3><nick><c2> is already in use
RAW.471 <pre> <c2>can't join <c3><chan> <c1>(<c3>its full +l<c1>)
RAW.473 <pre> <c2>can't join <c3><chan> <c1>(<c3>its invite only +i<c1>)
RAW.474 <pre> <c2>can't join <c3><chan> <c1>(<c3>you're banned +b<c1>)
RAW.475 <pre> <c2>can't join <c3><chan> <c1>(<c3>requires key +k<c1>)
RAW.482 <pre> <c2>you're not operator on<c3> <chan>
 
RAW.401 <pre> <nick> <c2>does not exist...
RAW.403 <pre> <chan> <c2>does not exist...
RAW.404 <pre> <c2>unable to send msg to <chan>
RAW.421 <pre> <c3><value> <c2>is an unrecognised command
RAW.432 <pre> <c3><nick> <c2>is invalid
RAW.433 <pre> <c3><nick> <c2>is in use...
RAW.471 <pre> <c3><chan> <c2>is full <c3>(+l)
RAW.473 <pre> <c3><chan> <c2>is invite only <c3>(+i)
RAW.474 <pre> <c2>banned from <chan><c3> (+b) , <c2>unable to join...
RAW.475 <pre> <c2>key required <c3>(+k) , <c2>unable to join...
RAW.482 <pre> <c2>you are not an operator in<c3> <chan>

load you load rot theme :) 
unload :( you unload rot theme

[scheme1]
BaseColors 07,14,15,00

CLineMe 07

[scheme2]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 123,194,253 0,0,255 255,0,255 192,192,192 251,251,251
BaseColors 11,14,15,00

CLineMe 11

[scheme3]
RGBCOLORS 255,255,255 0,0,0 0,88,176 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,40,64 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Colors 10,15,15,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,10,15,10,15
BaseColors 02,14,15,00

CLineMe 02

Prefix <c2>-<c3>›
 
[scheme4]
RGBCOLORS 255,255,255 0,0,0 0,88,176 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,40,64 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Colors 1,15,15,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15
BaseColors 02,14,15,00

CLineMe 02

Prefix <c2>-<c3>›

