[mts]
Name Digital
Author HENNESSY
Email HennesScript@planet.nl
Website http://HennesScript.cjb.net
Description The world is digital. 4 schemes and a timestamp special mode.
Version 0.7
MTSVersion 1.0
SCHEME1 Blue Light
SCHEME2 Yellow Sun
SCHEME3 Red Orange 
SCHEME4 Timestamp special
SCRIPT Digital.mrc
Load <pre>load<c1>) Digital theme loaded
Unload <pre>unload<c1>) Digital theme unloaded
Colors 1,9,0,4,9,9,0,15,0,15,15,0,8,8,15,0,15,15,0,7,11,1,0,1,0,15 
Prefix <c2>.<c1>.<c2>0<c1>1<c2>0<c1>1<c2>.<c1>.(
Timestamp [HH:nn:ss]
ParenText (<text>)
Mode <pre>mode<c1>) <nick> sets mode: <modes>
ModeUser <pre>mode<c1>) <nick> sets mode: <modes>
Join <pre>join<c1>) <nick> <c1>(<c3><address><c1>)
JoinSelf <pre>joining<c1>) <chan>
Part <pre>part<c1>) <nick> <c1>(<c3><address><c1>) <parentext>
Kick <pre>kick<c1>) <knick> is kicked by <nick> <parentext>
KickSelf <pre>kicked<c1>) You were kicked by <nick> <c1>(<c3><address><c1>) from <chan> <parentext>
Quit <pre>quit<c1>) <nick> <c1>(<c3><address><c1>) <parentext>
Topic <pre>topic<c1>) <nick> sets a new topic: <text>
Nick <pre>nick<c1>) <nick> is now known as <newnick>
NickSelf <pre>nick<c1>) You are now known as <newnick>
Invite <pre>invite<c1>) <nick> invites you to join <chan>
ServerError <pre>error<c1>) Error: <text>
Notice -<nick>- <text>
NoticeChan -<nick>:<chan>- <text>
NoticeSelf -<nick>- <text>
Rejoin <pre> <c1>Rejoining <c2><chan><c1>...
TextChan <c1>..<cmode><nick><c1>..<c3> <text>
TextChanSelf <c1>..<cmode><me><c1>..<c3> <text>
ActionChan * <cmode><nick> <text>
ActionChanSelf * <cmode><me> <text>
DNS <pre>dns<c1>) Looking up <nick><address>
DNSError <pre>dns error<c1>) unable to resolve <nick><address>
DNSResolve <pre>dns<c1>) Resolved: <address>to <raddress>
TextQuery <c1>..<nick><c1>..<c3> <text>
TextQuerySelf <c1>..<me><c1>..<c3> <text>
ActionQuery * <nick> <text>
ActionQuerySelf * <me> <text>
TextMSG <c1>..<nick><c1>..<c3> <text>
TextMSGSelf <c1>..<me><c1>..<c3> -> <nick>: <text>
CTCP <pre>ctcp<c1>) <nick> <c1>[<c3><ctcp><c1>]<c3> <text>
CTCPSelf <pre>ctcp<c1>) <nick> <c1>[<c3><ctcp><c1>]<c3> <text>
CTCPChan <pre>ctcp<c1>) <nick>:<chan> <c1>[<c3><ctcp><c1>]<c3> <text>
CTCPChanSelf <pre>ctcp send<c1>) <chan> <c1>[<c3><ctcp><c1>]<c3> <text>
CTCPReply <pre>ctcp<c1>) <nick><chan> <c1>[<c3><ctcp> reply<c1>]<c3> <text>
CTCPReplySelf <pre>sending reply<c1>) <nick> <c1>[<c3><ctcp><c1>]<c3> <text>
Whowas <c1>*<c3> Whowas: <nick> (<address>) <realname>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>
RAW.311 !script digital.whois1
RAW.317 !script digital.whois2
RAW.312 !script digital.whois3
RAW.307 !script digital.whois4
RAW.313 !script digital.whois5
RAW.301 !script digital.whois6
RAW.318 !script digital.whois7
RAW.319 <c1>. <c3> Channels:<c2> <chan>
RAW.001 <c1>*<c3> <c1><text>
RAW.002 <c1>*<c3> <c1>Server: <server> running version <value>
RAW.003 <c1>*<c3> <c1>Server: created on: <value>
RAW.005 <c1>*<c3> <c1>Protocols supported by this server: <text>
RAW.250 <c1>*<c3> <c1>Total connection(s): <value>
RAW.251 <c1>*<c3> <c1>Users: <users> Invisible: <text> Servers: <value>
RAW.252 <c1>*<c3> <c1>Operator(s) online: <value>
RAW.253 <c1>*<c3> <c1>Unknown connection(s): <value>
RAW.254 <c1>*<c3> <c1>Number of channels formed: <value>
RAW.255 <c1>*<c3> <c1>Local clients: <users> on <value> server(s)
RAW.265 <c1>*<c3> <c1>Local users: <users> Max: <value>
RAW.266 <c1>*<c3> <c1>Global users: <users> Max: <value>
RAW.302 <c1>*<c3> <c1>Userhost: <address>
RAW.315 <c1>*<c3> <c1>End of /WHO list for <chan>
RAW.324 <c1>*<c3> <c1>Modes in <chan>: <modes>
RAW.332 <c1>*<c3> <c1>Topic is: '<text><c1>'
RAW.333 <c1>*<c3> <c1>Set by: <nick> on <text>
RAW.341 <c1>*<c3> <c2><nick> has been invited to <chan>
RAW.352 <c1>*<c3> <c1><cmode><nick> (<address>) <realname>
RAW.353 <c1>*<c3> <c2><chan>: <text>
RAW.366 <c1>*<c3> <c1>End of /NAMES list for <chan>
RAW.375 <c1>*<c3> <c1>Message of the day:
RAW.372 <c3><text>
RAW.376 <c1>*<c3> <c1>End of /MOTD command.
RAW.391 <c1>*<c3> <c1>Date: <value>
RAW.401 <c1>*<c3> <c1>No such nickname <nick>
RAW.403 <c1>*<c3> <c1>No such channel <chan>
RAW.404 <c1>*<c3> <c1>Unable to send message to <chan>
RAW.421 <c1>*<c3> <c1>Invalid command: <value>
RAW.433 <c1>*<c3> <c1>Nickname: <nick> is already in use.
RAW.471 <c1>*<c3> <c1>Unable to join <chan> (its full +l)
RAW.473 <c1>*<c3> <c1>Unable to join <chan> (its invite only +i)
RAW.474 <c1>*<c3> <c1>Unable to join <chan> you're banned +b)
RAW.475 <c1>*<c3> <c1>Unable to join <chan> (requires key +k)
RAW.482 <c1>*<c3> <c1>You're not a operator on <chan>
RAW.Other <pre> <text>
RGBcolors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 120,120,120 160,160,160 208,208,208
BaseColors 9,3,0,15
CLineOwner 00
CLineOP 31
CLineHOP 46
CLineVoice 61
CLineRegular 03
CLineMe 09
ClineCharOwner 00.
ClineCharOP 31@
ClineCharHOP 46%
ClineCharVoice 61+ 
FontDefault Verdana,11
FontChan Verdana,11
FontQuery Verdana,11
ImageToolbar fill bar1bg.jpg
ImageSwitchbar fill bar2bg.jpg
ImageMirc tile main_bg.jpg
ImageChan photo channel_bg.jpg

[SCHEME1]
BaseColors 11,12,0,15
CLineRegular 11

[SCHEME2]
BaseColors 8,7,0,15
CLineRegular 7

[SCHEME3]
BaseColors 7,4,0,15
CLineRegular 7

[SCHEME4]
Timestamp OFF
Join !script %:echo %::pre $+ join $+ %::c1 $+ ) %::nick  $+ %::c1 $+ ( $+ %::c3 $+ %::address $+  $+ %::c1 $+ ) $digital.ts
JoinSelf !script %:echo %::pre $+ joining $+ %::c1 $+ ) %::chan $digital.ts
Part !script %:echo %::pre $+ part $+ %::c1 $+ ) %::nick  $+ %::c1 $+ ( $+ %::c3 $+ %::address $+  $+ %::c1 $+ ) %::parentext $digital.ts
Kick !script %:echo %::pre $+ kick $+ %::c1 $+ ) %::knick is kicked by %::nick %::parentext $digital.ts
KickSelf !script %:echo %::pre $+ kicked $+ %::c1 $+ ) You were kicked by %::nick  $+ %::c1 $+ ( $+ %::c3 $+ %::address $+  $+ %::c1 $+ ) from %::chan %::parentext $digital.ts
Quit !script %:echo %::pre $+ quit $+ %::c1 $+ ) <nick>  $+ %::c1 $+ ( $+ %::c3 $+ %::address $+  $+ %::c1 $+ ) %::parentext $digital.ts
Invite !script %:echo %::pre $+ invite $+ %::c1 $+ ) %::nick invites you to join %::chan $digital.ts
ServerError !script %:echo %::pre $+ error $+ %::c1 $+ ) Error: %::text $digital.ts