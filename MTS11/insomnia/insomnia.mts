[mts]
Name iNSoMnIa
MTSVersion 1.1
Version 5.0
Author nix2k@EFNet
EMail nick@emergeonline.org
Website http://www.emergeonline.org
Colors 01,6,4,5,10,10,07,14,4,07,07,00,07,7,15,00,14,04,07,5,00,01,00,01,00,15
BaseColors 14,09,00,01
Load <pre> iNSoMnIa theme loaded <pre>
Unload <pre> iNSoMnIa theme unloaded <pre>
Prefix <c1>•
ParenText <c1>(<c2><text><c1>)
Mode <pre> <c1><nick> sets mode:<c2> <modes>
ModeUser <pre> <c1><nick> sets mode:<c2> <modes>
Join <pre> <c1>Join:<c2> <nick> <c1>(<c2><address><c1>) <parentext>
JoinSelf <pre> <c1>You have joined<c2> <chan>
Part <pre> <c1>Part:<c2> <nick> <c1>(<c2><address><c1>) <parentext>
Kick <pre> <c1>Kick:<c2> <knick> <c1>was kicked by<c2> <nick> <c1><parentext>
KickSelf <pre> <c1>You were kicked from<c2> <chan> <c1>by<c2> <nick> <c1>(<c2><address><c1>)<c2> <parentext>
Quit <pre> <c1>Quit:<c2> <nick> <c1>(<c2><address><c1>) has quit irc<c2> <parentext>
Topic <pre> <c1><nick> sets topic:<c2> <text>
Nick <pre> <c1><nick> is now known as<c2> <newnick>
NickSelf <pre> <c1>You are now<c2> <newnick>
Invite <pre> <c1><nick> invites you to join<c2> <chan>
ServerError <pre> <c1>Error:<c2> <text>
Notice [Personal Notice] <nick>: <text>
NoticeChan [Channel Notice: <chan>] <nick>: <text>
NoticeSelf Notice -> -<me>- <text>
Rejoin <pre> <c1>Rejoining<c2> <chan>...
TextChan <c1>(<c2><cmode><nick><c1>) <text>
TextChanSelf <c1>[<c2><cmode><me><c1>] <text>
ActionChan <c1>* <cmode><nick> <text>
ActionChanSelf <c1>* <cmode><me> <text>
DNS <pre> <c1>DNS:<c2> Looking up <nick> <c1>(<c2><address><c1>)
DNSError <pre> <c1>DNS:<c2> Error looking up <nick> <c1>(<c2><address><c1>)
DNSResolve <pre> <c1>DNS: Resolved <c2><address> <c1>to<c2> <raddress>
TextQuery <c1>(<nick><c1>) <text>
TextQuerySelf <c1>[<c2><me><c1>] <text>
ActionQuery <c1>* <nick> <text>
ActionQuerySelf <c1>* <me> <text>
TextMsg <c1>(<nick><c1>) <text>
TextMsgSelf <pre> <c1>MSG:<c2> *<target>* <c1>-> <text>
CTCP <pre> <c1>CTCP:<c2> <nick> <c1>(<c2><address><c1>) <ctcp> <text>
CTCPSelf -> [<nick>] <ctcp> <text>
CTCPChan <pre> <c1>CTCP:<c2> <nick><c1>:<c2><chan> <c1>(<c2><address><c1>) <ctcp> <text>
CTCPChanSelf -> [<nick>] <ctcp> <text>
CTCPReply <pre> <c1>CTCP reply:<c2> <nick><chan> <c1>(<c2><address><c1>) <ctcp> <text>
CTCPReplySelf <pre> <c1>Sending reply:<c2> <nick> <c1>(<c2><address><c1>) <ctcp> <text>
Notify <pre> <c1><nick> is on IRC (<c2><text><c1>)
UNotify <pre> <c1><nick> has left IRC (<c2><text><c1>)
Whowas <pre> Whowas: <nick> [<address>] <realname>
Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <text>
Whois !script ins.whois
Whowas !script ins.whowas
RAW.330 !script ins.auth
RAW.329 !Script %:echo %::pre Created on: $asctime(%::text,dddd) $+ , $asctime(%::text,mmmm doo) $+ , $asctime(%::text,yyyy) at $asctime(%::text,h:nntt)
RAW.001 !script %:echo %::pre Welcome %::text
RAW.002 !script %:echo %::pre Server: %::server running version %::value
RAW.003 !script %:echo %::pre Server created on: %::value
RAW.005 !script %:echo %::pre Protocols supported by this server: %::text
RAW.250 !script %:echo %::pre Total connection(s): %::value
RAW.251 !script %:echo %::pre Users: %::users Invisible: %::text Servers: %::value
RAW.252 !script %:echo %::pre Operator(s) online: %::value
RAW.253 !script %:echo %::pre Unknown connection(s): %::value
RAW.254 !script %:echo %::pre Number of channels formed: %::value
RAW.255 !script %:echo %::pre Local clients: %::users on %::value server(s)
RAW.265 !script %:echo %::pre Local users: %::users Max: %::value
RAW.266 !script %:echo %::pre Global users: %::users Max: %::value
RAW.302 !script %:echo %::pre Userhost: %::address
RAW.315 !script %:echo %::pre End of /WHO list for %::chan 
RAW.324 !script %:echo %::pre Modes in %::chan $+ : %::modes
RAW.332 !script %:echo %::pre Topic is: ' $+ %::text $+  $+ %::c1 $+ '
RAW.333 !script %:echo %::pre Set by: %::nick on %::text
RAW.338 !script $iif($version == 6.17,noop,return)
RAW.341 !script %:echo %::pre %::nick has been invited to %::chan
RAW.352 !script %:echo %::pre %::nick ( $+ %::address $+ ) %::realname $iif($gettok(%::text,5,32) == H,[Away])
RAW.353 !script %:echo %::pre %::chan $+ : $gettok(%::text,2-,32)
RAW.366 !script %:echo %::pre End of /NAMES list for %::chan
RAW.375 !script %:echo %::pre %::text
RAW.376 !script %:echo %::pre End %::text
RAW.391 !script %:echo %::pre Date: %::value
RAW.401 !script %:echo %::pre No such nickname %::nick
RAW.403 !script %:echo %::pre No such channel %::chan
RAW.404 !script %:echo %::pre Unable to send message to %::chan
RAW.421 !script %:echo %::pre Invalid command: %::value
RAW.433 !script %:echo %::pre Nickname is already in use: %::nick
RAW.471 !script %:echo %::pre Unable to join %::chan (its full +l)
RAW.473 !script %:echo %::pre Unable to join %::chan (its invite only +i)
RAW.474 !script %:echo %::pre Unable to join %::chan (you're banned +b)
RAW.475 !script %:echo %::pre Unable to join %::chan (requires key +k)
RAW.482 !script %:echo %::pre You're not a operator on %::chan
RAW.Other !script %:echo %::pre %::text
ImageToolbar fill bg.jpg
ImageSwitchbar fill bg.jpg
CLineOwner 14
CLineOP 14
CLineHOP 14
CLineVoice <c2>
CLineRegular 15
CLineMe 07
ClineCharOP 14@
ClineCharHOP 14%
ClineCharVoice 14+
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Timestamp ON
TimestampFormat  <c1>[<c2>h:nntt<c1>] 
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
Script insomnia.mrc
NoticeServer <pre> <c1>Server:<c2> <nick><c1> <text>
Description Theme based on my old iNSoMnIa script.
CLineIrcOp 10
Scheme1 Orange
Scheme2 Purple
Scheme3 Yellow
Scheme4 Pink
Scheme5 Red
Scheme6 Cyan
Scheme7 Grey
Scheme8 Blue
Scheme9 Light Blue
Scheme10 Maroon
Scheme11 Light Purple
Scheme12 Mint
Scheme13 Dark Pink
Scheme14 Slate
Scheme15 Red/Pink
Scheme16 Pastel Blue
Scheme17 Pastel Pink
Scheme18 Pastel Orange
Scheme19 Pastel Green
Scheme20 Pastel Purple
Scheme21 Green (Arial)
Scheme22 Orange (Arial)
Scheme23 Purple (Arial)
Scheme24 Yellow (Arial)
Scheme25 Pink (Arial)
Scheme26 Red (Arial)
Scheme27 Cyan (Arial)
Scheme28 Grey (Arial)
Scheme29 Blue (Arial)
Scheme30 Light Blue (Arial)
Scheme31 Maroon (Arial)
Scheme32 Light Purple (Arial)
Scheme33 Mint (Arial)
Scheme34 Dark Pink (Arial)
Scheme35 Slate (Arial)
Scheme36 Red/Pink (Arial)
Scheme37 Pastel Blue (Arial)
Scheme38 Pastel Pink (Arial)
Scheme39 Pastel Orange (Arial)
Scheme40 Pastel Green (Arial)
Scheme41 Pastel Purple (Arial)
Scheme42 Orange (White)
Scheme43 Purple (White)
Scheme44 Yellow (White)
Scheme45 Pink (White)
Scheme46 Red (White)
Scheme47 Cyan (White)
Scheme48 Grey (White)
Scheme49 Blue (White)
Scheme50 Light Blue (White)
Scheme51 Maroon (White)
Scheme52 Light Purple (White)
Scheme53 Mint (White)
Scheme54 Dark Pink (White)
Scheme55 Slate (White)
Scheme56 Red/Pink (White)
Scheme57 Pastel Blue (White)
Scheme58 Pastel Pink (White)
Scheme59 Pastel Orange (White)
Scheme60 Pastel Green (White)
Scheme61 Pastel Purple (White)
Scheme62 Orange (White/Arial)
Scheme63 Purple (White/Arial)
Scheme64 Yellow (White/Arial)
Scheme65 Pink (White/Arial)
Scheme66 Red (White/Arial)
Scheme67 Cyan (White/Arial)
Scheme68 Grey (White/Arial)
Scheme69 Blue (White/Arial)
Scheme70 Light Blue (White/Arial)
Scheme71 Maroon (White/Arial)
Scheme72 Light Purple (White/Arial)
Scheme73 Mint (White/Arial)
Scheme74 Dark Pink (White/Arial)
Scheme75 Slate (White/Arial)
Scheme76 Red/Pink (White/Arial)
Scheme77 Pastel Blue (White/Arial)
Scheme78 Pastel Pink (White/Arial)
Scheme79 Pastel Orange (White/Arial)
Scheme80 Pastel Green (White/Arial)
Scheme81 Pastel Purple (White/Arial)

[Scheme1]
BaseColors 14,07,00,01

[Scheme2]
BaseColors 14,06,00,01

[Scheme3]
BaseColors 14,08,00,01

[Scheme4]
BaseColors 14,13,00,01

[Scheme5]
BaseColors 14,09,00,01

[Scheme6]
BaseColors 14,10,00,01

[Scheme7]
BaseColors 14,15,00,01

[Scheme8]
BaseColors 14,12,00,01

[Scheme9]
BaseColors 14,11,00,01

[Scheme10]
BaseColors 14,05,00,01

[Scheme11]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 128,128,255 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme12]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 71,241,155 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme13]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 185,31,123 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme14]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 54,78,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme15]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 253,18,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme16]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 40,176,254 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme17]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 255,115,181 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme18]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 255,128,115 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme19]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 120,216,120 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme20]
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 216,120,215 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme21]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,09,00,01

[Scheme22]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,07,00,01

[Scheme23]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,06,00,01

[Scheme24]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,08,00,01

[Scheme25]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,13,00,01

[Scheme26]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,04,00,01

[Scheme27]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,10,00,01

[Scheme28]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,15,00,01

[Scheme29]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,12,00,01

[Scheme30]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,11,00,01

[Scheme31]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
BaseColors 14,05,00,01

[Scheme32]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 128,128,255 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme33]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 71,241,155 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme34]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 185,31,123 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme35]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 54,78,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme36]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 253,18,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme37]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 40,176,254 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme38]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 255,115,181 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme39]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 255,128,115 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme40]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 120,216,120 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme41]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 216,120,215 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01

[Scheme42]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,07,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme43]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme44]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,08,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme45]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,13,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme46]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,04,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme47]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,10,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme48]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,15,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme49]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,12,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme50]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,11,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme51]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,05,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme52]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 128,128,255 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme53]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 71,241,155 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme54]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 185,31,123 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme55]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 54,78,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme56]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 253,18,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme57]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 40,176,254 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme58]BaseColors 14,06,00,01
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 255,115,181 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme59]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 255,128,115 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme60]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 120,216,120 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme61]
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 216,120,215 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme62]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,07,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme63]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme64]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,08,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme65]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,13,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme66]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,04,00,01
ImageToolbar fill 
ImageSwitchbar fill


[Scheme67]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,10,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme68]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,15,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme69]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,12,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme70]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,11,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme71]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,05,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme72]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 128,128,255 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme73]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 71,241,155 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme74]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 185,31,123 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme75]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 54,78,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme76]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 253,18,96 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme77]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 40,176,254 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme78]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 255,115,181 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme79]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 255,128,115 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme80]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 120,216,120 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill

[Scheme81]
FontDefault Arial,11
FontChan Arial,11
FontQuery Arial,11
RGBcolors 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 216,120,215 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
BaseColors 14,06,00,01
ImageToolbar fill 
ImageSwitchbar fill
