[mts]
Name clean
Author zaiko
Email zaiko@kracked.com
Description timestamped theme! ported from my script mortal dreams to MTS, including 7 schemes. have "show /names on join" on to get a better look when joining a channel!
Version 1.1
MTSVersion 1.1
Website http://mortal-dreams.n3.net
Script clean.mrc

Load <pre> loaded theme "clean" by zaiko

Prefix <c2>-<c1>ø<c2>-
ParenText <c1>(<c2><text><c1>)
Echo <pre> <c1><text>
EchoTarget <pre> <c1><text>
Error 4(ERROR)
TimeStamp OFF
TimeStampFormat (HH:nn:ss)

Mode <timestamp> <c2>::<c1>:<c4>: <c1>mode(<c2><chan><c1>) <c2><modes> <c1>by <c2><nick> <c1>(<c2><address><c1>)
ModeUser <timestamp> <c2>::<c1>:<c4>: <c1>mode(<c2><me><c1>) sets <c2><modes>
Join <timestamp> <c2>::<c1>:<c4>: <c1>joins(<c2><chan><c1>) <c2><nick> <c1>(<c2><address><c1>)
JoinSelf !script .timestamp -f  | %:echo  $+ %::c1 $+ .-——-—joined( $+ %::c2 $+ %::chan $+  $+ %::c1 $+ )...
Part <timestamp> <c2>::<c1>:<c4>: <c1>part(<c2><chan><c1>) <c2><nick> <c1>(<c2><address><c1>) <parentext>
Kick <timestamp> <c2>::<c1>:<c4>: <c1>kick(<c2><chan><c1>) <c2><knick> <c1>by <c2><nick> <c1>(<c2><address><c1>) <parentext>
KickSelf <timestamp> <c2>::<c1>:<c4>: <c1>kick(<c2><chan><c1>) <c2><knick> <c1>(<c2>you<c1>) <c1>by <c2><nick> <c1>(<c2><address><c1>) <parentext>
Quit <timestamp> <c2>::<c1>:<c4>: <c1>quit(<c2><chan><c1>) <c2><nick> <c1>(<c2><address><c1>) <parentext>
Topic <timestamp> <c2>::<c1>:<c4>: <c1>topic(<c2><chan><c1>) <c2><nick> <c1>(<c2><address><c1>) sets topic to: <c2><text>
Nick <timestamp> <c2>::<c1>:<c4>: <c1>nick(<c2><chan><c1>) <c2><nick> <c1>to <c2><newnick>
NickSelf <pre> <c1>you're now known as <newnick>
Invite <timestamp> <c2>::<c1>:<c4>: <c1>invite(<c2><chan><c1>) by <c2><nick> <c1>(<c2><address><c1>)
ServerError <pre> <c1>(ERROR): <c2><text>
Notice <timestamp> <c1>-(<c2><nick><c1>)- <text>
NoticeChan <timestamp> <c1>-(<c2><nick><c1>/<c2><chan><c1>)- <text>
NoticeSelf <timestamp> <pre> <c1>notice send(<c2><target><c1>): <text>
NoticeSelfChan <timestamp> <pre> <c1>notice send(<c2><target><c1>): <text>
NoticeServer <c2>!<c1><server><c2>!<c1> <text>
Rejoin <pre> <c1>Rejoining <chan>...
TextChan <timestamp> <c1>(1<cmode><nick><c1>) <text>
TextChanSelf <timestamp> <c2>(1<cmode><me><c2>) <text>
ActionChan <timestamp> — <nick> <text>
ActionChanSelf <timestamp> — <me> <text>
Wallop <timestamp> <c2>::<c1>:<c4>: <c1>wallops(<c2><nick><c1>) $3-
Notify <timestamp> <c2>::<c1>:<c4>: <c1>notify(<c2><nick><c1>):<parentext>
Unotify <timestamp> <c2>::<c1>:<c4>: <c1>unotify(<c2><nick><c1>):<parentext>

DNS <pre> <c1>Looking up <nick><address>
DNSError <pre> <c1>Unable to resolve <address>
DNSResolve (DNS) Resolved: <address> to <raddress> 

TextQuery <timestamp> <c1>(1<nick><c1>) <text>
TextQuerySelf <timestamp> <c1>(1<me><c1>) <text>
ActionQuery <timestamp> — <nick> <text>
ActionQuerySelf <timestamp> — <me> <text>
TextMsg <timestamp> <c1>-(<c2><nick><c1>/<c2>privmsg<c1>)- <text>
TextMsgSelf <timestamp> <c2>::<c1>:<c4>: <c1>msg send(<c2><target><c1>) <text>

CTCP <timestamp> <c2>::<c1>:<c4>: <c1>ctcp(<c2><nick><c1>) <ctcp> <text>
CTCPSelf <timestamp> <c2>::<c1>:<c4>: <c1>ctcp send(<c2><target><c1>): <ctcp> <text>
CTCPChan <timestamp> <c2>::<c1>:<c4>: <c1>ctcp(<c2><chan><c1>) from <c2><nick><c1>: <ctcp> <text>
CTCPChanSelf <timestamp> <c2>::<c1>:<c4>: <c1>ctcp send(<c2><target><c1>): <ctcp> <text>
CTCPReply <timestamp> <c2>::<c1>:<c4>: <c1>ctcp(<c2><ctcp> reply<c1>) from <c2><nick><c1>: <text>
CTCPReplySelf <timestamp> <c2>::<c1>:<c4>: <c1>ctcp reply send(<c2><target><c1>): <ctcp> <text>

Whowas <pre> <c1>Whowas: <c2><nick><c1>[<c2><address><c1>] <realname>

Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>

RAW.311 !script clean.whois.start 
RAW.307 <c1>| registred: yes 
RAW.308 <c1>| admin: yes 
RAW.309 <c1>| csop: yes 
RAW.310 <c1>| helper: yes 
RAW.313 <c1>| ircop: yes 
RAW.317 !script %:echo  $+ %::c1 $+ $chr(124) idletime: $duration(%::idletime)  $+ %::c1 $+ signed on $+ %::c2 %::signontime  $+ %::c1 $+ - online:  $+ %::c2 $+ $duration($calc($ctime - $ctime(%::signontime)))
RAW.319 <c1>| channels: <chan>
RAW.312 <c1>| server: <wserver> <c1>-<c2> <serverinfo>
RAW.378 <c1>| hostname: <text>
RAW.301 <c1>| away: <text>
RAW.318 !script %:echo  $+ %::c1 $+ `-—--—-( $+ %::c2 $+ end of whois $+ %::c1 $+ )..... | .timestamp -f (HH:nn:ss)


RAW.001 !script %:echo %::pre  $+ %::c1 $+ [ $+ %::c2 $+ connected $+  $+ %::c1 $+ ] | %:echo  $+ %::c1 $+ -
RAW.002 <pre> <c1><text>
RAW.003 <pre> <c1><text>
RAW.004 <c1>-
RAW.005 !script
RAW.250 <pre> <c1>Total connection(s): <c2><value>
RAW.251 <pre> <c1>Users: <c2><users> <c1>Invisible: <c2><text> <c1>Servers: <c2><value>
RAW.252 <pre> <c1>Operator(s) online: <c2><value>
RAW.253 <pre> <c1>Unknown connection(s): <c2><value>
RAW.254 <pre> <c1>Number of channels formed: <c2><value>
RAW.255 <pre> <c1>Local clients: <c2><users> <c1>on <c2><value> <c1>server(s)
RAW.265 <pre> <c1>Local users: <c2><users> <c1>Max: <c2><value>
RAW.266 <pre> <c1>Global users: <c2><users> <c1>Max: <c2><value>
RAW.302 <pre> <c1>Userhost: <c2><nick><c1>[<c3><address><c1>]
RAW.305 <pre> <c1>You are no longer marked as being away
RAW.306 <pre> <c1>You have been marked as being away
RAW.315 <pre> <c1>End of /WHO list for <c2><chan>
RAW.324 !script
RAW.329 !script
RAW.369 !script
RAW.332 !script .timestamp -f  | %:echo  $+ %::c1 $+ $chr(124) topic: %::text
RAW.333 !script %:echo  $+ %::c1 $+ $chr(124) set by %::nick at %::text | .timestamp -f (HH:nn:ss)
RAW.341 <pre> <c2><nick> <c1>has been invited to <c2><chan>
RAW.352 <pre> <c1><cmode><nick>[<c2><address><c1>]: <c2><realname>
RAW.353 !script clean.names 
RAW.366 !script clean.names.end
RAW.375 <pre> <c1>Message of the day:
RAW.372 <c3><text>
RAW.376 <pre> <c1>End of Message of the day
RAW.391 <pre> <c1>Date: <c2><value>
RAW.401 <pre> <c1>No such nickname as <c2><nick>
RAW.403 <pre> <c1>No such channel as <c2><chan>
RAW.404 <pre> <c1>Unable to send message to <c2><chan>
RAW.421 <pre> <c1>Unknown command:<c2> <value>
RAW.433 <pre> <c1>The nickname <c2><nick><c1> is already in use.
RAW.471 <pre> <c1>Can't join <c2><chan> <c1>(the channel is full (+l))
RAW.473 <pre> <c1>Can't join <c2><chan> <c1>(invite only (+i))
RAW.474 <pre> <c1>Can't join <c2><chan> <c1>(you're banned (+b))
RAW.475 <pre> <c1>Can't join <c2><chan> <c1>(wrong key (+k))
RAW.482 <pre> <c1>You're not a operator on <c2><chan>
RAW.328 !script

RAW.Other <pre><c1> [<c2><numeric><c1>] <text>

CLineOwner 2
CLineOP 12
CLineHOP 15
CLineVoice 2
CLineRegular 1
CLineMe 2
ClineCharOwner .
ClineCharOP @
ClineCharHOP %
ClineCharVoice + 

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Colors 0,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,0,1,0,12,15
RGBColors 255,255,255 0,0,0 0,64,128 72,164,80 255,9,9 185,0,0 193,0,193 255,128,64 255,255,128 120,236,128 80,168,176 120,228,232 0,128,255 255,80,255 75,75,75 155,155,155
BaseColors 02,12,02,01

Scheme1 green
Scheme2 red
Scheme3 purple
Scheme4 grey
Scheme5 coolblue
Scheme6 coogreen
Scheme7 coolred

[scheme1]
Colors 0,9,3,4,3,9,9,9,9,9,9,1,3,9,9,1,9,9,9,9,9,0,1,0,9,15
RGBColors 255,255,255 0,0,0 0,64,128 53,121,58 255,9,9 185,0,0 193,0,193 255,128,64 255,255,128 27,180,38 80,168,176 120,228,232 0,128,255 255,80,255 75,75,75 155,155,155
Basecolors 03,09,03,01

CLineOwner 3
CLineOP 9
CLineVoice 3
CLineMe 3

[scheme2]
Colors 0,4,5,3,5,4,4,4,4,4,4,1,5,4,4,1,4,4,4,4,4,0,1,0,5,15
RGBColors 255,255,255 0,0,0 0,64,128 72,164,80 255,13,13 157,0,0 193,0,193 255,128,64 255,255,128 120,236,128 80,168,176 120,228,232 0,128,255 255,80,255 75,75,75 155,155,155
Basecolors 05,04,05,01

CLineOwner 5
CLineOP 4
CLineVoice 5
CLineMe 5

[scheme3]
Colors 0,13,6,4,6,13,13,13,13,13,13,1,6,13,13,1,13,13,13,13,13,0,1,0,12,15
RGBColors 255,255,255 0,0,0 0,64,128 72,164,80 255,9,9 185,0,0 164,0,164 255,128,64 223,223,0 120,236,128 80,168,176 120,228,232 0,128,255 240,0,240 75,75,75 155,155,155
Basecolors 06,13,06,01

CLineOwner 6
CLineOP 13
CLineVoice 6
CLineMe 6

[scheme4]
Colors 0,15,14,4,14,15,15,15,15,15,15,1,14,15,15,1,15,15,15,15,15,0,1,0,15,15
RGBColors 255,255,255 0,0,0 0,64,128 72,164,80 255,9,9 185,0,0 164,0,164 255,128,64 255,255,128 120,236,128 80,168,176 120,228,232 0,128,255 240,0,240 75,75,75 141,141,141
Basecolors 14,15,14,01

CLineOwner 14
CLineOP 15
CLineVoice 14
CLineMe 14

[scheme5]
Colors 6,12,2,4,2,12,12,12,12,12,12,1,2,12,12,1,12,12,12,12,12,6,1,6,12,15
RGBColors 255,255,255 0,0,0 0,88,176 66,151,72 255,9,9 185,0,0 181,220,253 255,128,64 255,255,128 54,226,67 80,168,176 35,203,207 0,128,255 255,80,255 75,75,75 155,155,155
Basecolors 02,12,02,01

CLineOwner 2
CLineOP 12
CLineVoice 2
CLineMe 2

[scheme6]
Colors 6,9,3,4,3,9,9,9,9,9,9,1,3,9,9,1,9,9,9,9,9,6,1,6,9,15
RGBColors 255,255,255 0,0,0 0,88,176 65,150,71 255,9,9 185,0,0 221,255,230 255,128,64 210,210,0 26,181,37 80,168,176 120,228,232 0,128,255 255,80,255 75,75,75 155,155,155
Basecolors 03,09,03,01

CLineOwner 3
CLineOP 9
CLineVoice 3
CLineMe 3

[scheme7]
Colors 6,4,5,4,4,4,4,4,4,4,4,1,5,4,4,1,4,4,4,4,4,6,1,6,4,15
RGBColors 255,255,255 0,0,0 0,88,176 62,142,68 255,9,9 185,0,0 255,215,215 255,128,64 255,255,128 0,183,0 80,168,176 45,215,219 0,128,255 255,80,255 75,75,75 155,155,155
Basecolors 05,04,05,01

CLineOwner 5
CLineOP 4
CLineVoice 5
CLineMe 5
