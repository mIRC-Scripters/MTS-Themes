[mts]
Name Bloop
Author haliku
Email sayjinboy@hotmail.com
Description My custom blue, green, and red themes.  Originally designed for my upcoming script.
Website None yet.
Version v0.1
MTSVersion 1.1
Script bloop.mrc

Prefix <c1>ò<c4>ò<c3>ò<c1>
Load <pre> Thanks for using my Theme.. by haliku .. enjoy
UnLoad <pre> Thanks for using my Theme.. by haliku.. hope ya liked it
TextChan <c4>[<c1><cmode><nick><c4>]<c1> <text>
TextChanSelf <c4>[<c1><cmode><me><c4>]<c1> <text>
TextQuery <c4>[<c1><nick><c4>]<c1> <text>
TextQuerySelf <c4>[<c1><me><c4>]<c1> <text>
TextMsg <c1>Msg: <nick> :<text>
Rejoin <pre> <c1>Attempting to rejoin <chan>..
Join !script %:echo %::pre  $+ %::c1 $+ Joins: %::nick  $+ %::c4 $+ [ $+ %::c1 $+  $+ %::address $+  $+ %::c4 $+ ] %::parentext  $+ $iif($left($target,1) == $chr(35),%::c4 $+ [ $+ %::c1 $+  $+ $iif($nick(%::chan,0) == 1,$nick(%::chan,0) user,$nick(%::chan,0) users) $+  $+ %::c4 $+ ])
JoinSelf <pre> <c1>Join: Now talking in <chan>
Part !script %:echo $+(,%::c1,ó,%::c4,ó,%::c3,ó)  $+ %::c1 $+ Parts: %::nick  $+ %::c4 $+ [ $+ %::c1 $+  $+ %::address $+  $+ %::c4 $+ ] %::parentext  $+ $iif($left($target,1) == $chr(35),%::c4 $+ [ $+ %::c1 $+  $+ $iif($calc($nick(%::chan,0) - 1) == 1,$calc($nick(%::chan,0) - 1) user,$calc($nick(%::chan,0) - 1) users) $+  $+ %::c4 $+ ])
NickSelf <pre> <c1>Nickname Change: Your nick is now <newnick>
Nick <pre> <c1>Nickname Change: <nick> to <newnick>
Quit !script %:echo $+(,%::c1,!,%::c4,!,%::c3,!)  $+ %::c1 $+ Quits: %::nick  $+ %::c4 $+ [ $+ %::c1 $+  $+ %::address $+  $+ %::c4 $+ ] %::parentext  $+ $iif($left($target,1) == $chr(35),%::c4 $+ [ $+ %::c1 $+  $+ $iif($calc($nick(%::chan,0) - 1) == 1,$calc($nick(%::chan,0) - 1) user,$calc($nick(%::chan,0) - 1) users) $+  $+ %::c4 $+ ])
Mode <c1>+<c4>+<c3>+ <c1>Channel Mode: <nick> sets mode: <modes>
ModeUser <c1>+<c4>+<c3>+ <c1>UserMode: <mode>
ActionChanSelf <c1>*<c4>*<c3>*<c4> <cmode><me> <text>
ActionChan <c1>*<c4>*<c3>*<c4> <cmode><nick> <text>
Kick <c1>-<c4>-<c3>- <c1>Kick: <knick> <c4>[<c1><kaddress><c4>]<c1> by <nick> <c4>(<text>)
KickSelf <c1>-<c4>-<c3> <c1>Kick: You have been kicked from <chan> by <nick> <c4>(<text>)
Invite <c1>+<c4>+<c3>+ <c1>Invite: <me> has been invited to <chan> by <nick>
NoticeChan !script echo -a $timestamp $+(,%::c1,+,,%::c4,+,,%::c3,+) $+(,%::c1,Notice:) %::nick - %::text
Notice !script echo -a $timestamp $+(,%::c1,+,,%::c4,+,,%::c3,+) $+(,%::c1,Notice:) %::nick - %::text
NoticeSelf <c1>+<c4>+<c3>+ <c1>Outgoing Notice: <target> -> '<text>'
NoticeSelfChan <c1>+<c4>+<c3>+ <c1>Outgoing Notice: <target> -> '<text>'
Whowas <pre> <c1>Whowas: <nick> [<c3><address><c1>] <realname>
NoticeServer <c1>+<c4>+<c3>+ <c1>Server Notice:<c3><nick><c3>:<c1> <text>
DNS <pre> <c1>DNS: Looking up <address>....
DNSError <pre> <c1>DNS: Error, unable to resolve...
DNSResolve <pre> <c1>DNS:<c4> <iaddress> <c1>-<gt> <c4><naddress>
Ctcp <pre> <c1>CTCP: <nick>: <ctcp> <text>
CtcpChan <pre> <c1>CTCP: <nick> [<chan>]: <ctcp> <text>
CtcpSelf <pre> <c1>Outgoing CTCP: <nick>: <ctcp> <text>
CtcpChanSelf <pre> <c1>Outgoing CTCP: <chan>: <ctcp> <text>
CtcpReply <pre> <c1>CTCP Reply: <nick>: <ctcp> <text>
CtcpReplySelf <pre> <c1>CTCP Reply: <me>: <ctcp> <text>


Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>

RAW.001 <pre> <c1><text>
RAW.002 <pre> <c1>Host: <server> running version <c4><value>
RAW.003 <pre> <c1>Server created on: <c4><value>
RAW.005 <pre> <c1>Protocols supported by this server: <c4><text>
RAW.250 <pre> <c1>Total connection(s): <c4><value>
RAW.251 <pre> <c1>Users: <c4><users> <c1>Invisible: <c4><text> <c1>Servers: <c4><value>
RAW.252 <pre> <c1>Operator(s) online: <c4><value>
RAW.253 <pre> <c1>Unknown connection(s): <c4><value>
RAW.254 <pre> <c1>Number of channels formed: <c4><value>
RAW.255 <pre> <c1>Local clients: <c4><users> <c1>on <c4><value> <c1>server(s)
RAW.265 <pre> <c1>Local users: <c4><users> <c1>Max: <c4><value>
RAW.266 <pre> <c1>Global users: <c4><users> <c1>Max: <c4><value>
RAW.302 <pre> <c1>Userhost: <c4><nick><c1>[<c3><address><c1>]
RAW.315 !script /return
;<pre> <c1>End of /WHO list for <c4><chan>
RAW.324 !script if (%::modes == +) { %:echo %::pre  $+ %::c1 $+ Modes: None  } | else { %:echo %::pre  $+ %::c1 $+ Modes: %::modes $+  }
RAW.329 !script /return
RAW.332 <pre> <c1>Topic: <c4>'<c1><text><c4>'
RAW.333 <pre> <c1>Set by: <c4><nick> <c1>on <c4><text><c1>.
RAW.341 <pre> <c4>Invite: <nick> <c1>has been invited to <c4><chan>
RAW.352 !script /return
;<pre> <c1><cmode><c4><nick>[<c3><address><c1>] <c1><realname>
RAW.353 <pre> <c4><chan>: <c3><text>
RAW.366 <pre> <c1>End of /NAMES list for <c4><chan>
RAW.375 <pre> <c1>Message of the day:
RAW.372 <pre> <c4><text>
RAW.376 <pre> <c1>End of /MOTD command.
RAW.391 <pre> <c1>Date: <value>
RAW.401 <pre> <c4>Error: <c1><nick>: No such nickname
RAW.403 <pre> <c4>Error: <c1><chan>: No such channel
RAW.404 <pre> <c4>Error: <c1>Unable to send message to <chan>
RAW.421 <pre> <c4>Error: <c1>Unknown command:<c4> <value>
RAW.433 <pre> <c4>Error: <c1>Unable to change nickname: <nick> is already in use.
RAW.471 <pre> <c4>Error: <c1>Unable to join <c4><chan>: it is too full. <c4>[<c1>+l<c4>] 
RAW.473 <pre> <c4>Error: <c1>Unable to join <c4><chan>: it is set to "Invite Only". <c4>[<c1>+i<c4>]
RAW.474 <pre> <c4>Error: <c1>Unable to join <c4><chan>: you are banned. <c4>[<c1>+b<c4>]
RAW.475 <pre> <c4>Error: <c1>Unable to join <c4><chan>: it requires a key to join. <c4>[<c1>+k<c4>]
RAW.482 <pre> <c4>Error: <c1>You are not opped on <c4><chan>

RAW.Other <pre> <text>
Raw.401 !script raw.401
Raw.311 !script raw.311 
Raw.312 !script raw.312
Raw.318 !script raw.318
Raw.319 !script raw.319
RAW.330 !script return
Raw.301 !script raw.301
Raw.307 !script raw.307 
Raw.313 !script raw.313
Raw.317 !script raw.317
Timestamp ON
TimestampFormat <c4>[<c1>h:nn;ss tt<c4>]<c1>

FONTDEFAULT IBMPC,10
FONTCHAN IBMPC,10
FONTQUERY IBMPC,10

CLineOwner 0
CLineOp 8
CLineHop 8
CLineVoice 8
CLineRegular 8
CLineMe 0
CLineFriend 0
CLineIrcop 0
BaseColors 00,00,13,02
RGBColors 255,255,255 0,0,0 136,192,255 80,164,0 255,0,0 64,80,120 16,108,216 255,128,0 136,192,255 56,96,240 0,148,144 0,255,255 136,192,255 32,116,208 128,128,128 208,212,208
Colors 05,00,04,05,02,03,03,03,03,03,03,00,05,07,00,00,03,02,03,05,01,05,08,05,00,15

Scheme1 Army Green
[Scheme1]
BaseColors 00,00,13,02
RGBColors 255,255,255 0,0,0 71,169,73 80,164,0 255,0,0 39,78,12 16,108,216 255,128,0 56,169,96 56,96,240 0,148,144 0,255,255 15,136,69 55,130,30 128,128,128 208,212,208

Scheme2 Deep Crimson
[Scheme2]
BaseColors 00,00,13,02
RGBColors 255,255,255 0,0,0 252,112,112 80,164,0 255,0,0 123,6,6 16,108,216 255,128,0 254,165,165 56,96,240 0,148,144 0,255,255 136,192,255 216,10,10 128,128,128 208,212,208
