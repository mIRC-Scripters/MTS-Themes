[mts]
Name Stealth
Author webprofit
SCRIPT stealth.mrc
Email me@webproficio.com
Description 6 NEW!! Has nice clean look w/ 42 scrumptious schemes and has Ascii Joins, Whois, Whowas, Lusers etc. New schemes marked with *.
Website http://www.webproficio.com
Version 1.8
MTSVersion 1.1

Load !script default.load
Unload <pre> Unloading Stealth theme...

Prefix 14¯15¯11¯
Timestamp OFF
TIMESTAMPFORMAT [hh:nn]
ParenText <c1>(<c2><text><c1>)
NoticeServer !script %:echo $+(,%::c2,-,,%::c1,$chr(62),$chr(32),,%::c2,%::nick,,%::c1,:,,$remove(%::text,***))

Mode <pre> <c1>Modes[<c2><chan><c1>] <c3><nick> <c1>(<c2><modes><c1>)
ModeUser <pre> <c1>Modes[<c2><nick><c1>] <c3>sets mode <c1>(<c2><modes><c1>)

Join <pre> <c1>Joins[<c2><chan><c1>] <c3><nick> <c1>(<c2><address><c1>)
JoinSelf <pre> Now talking in <c1>(<c2><chan><c1>)
Part <pre> <c1>Parts[<c2><chan><c1>] <c3><nick> <c1>(<c2><address><c1>)-<parentext>
Quit <pre> <c1>Quits[<c2><nick><c1>]  <c1>(<c2><address><c1>)-<parentext>

Kick <pre> <c1>Kicks[<c2><knick><c1>] <c3>by <nick> <parentext>
KickSelf <pre> <c1>You were kicked from <c1>[<c2><chan><c1>] <c3>by <c1>(<c2><nick><c1>)-<parentext>

Topic <pre> <c1>Topic[<c2><chan><c1>] <c3><nick> <c1>(<c2><text><c1>)
Nick <pre> <c1>Nick[<c2><nick><c1>] <c3>is now known as <c1>(<c2><newnick><c1>)
NickSelf <pre> <c1> You are now know as <c1>(<c2><newnick><c1>)
Invite <pre> <c1>Invite[<c2><chan><c1>] <c1>(<c2><address><c1>) <c3> from <c1>(<c2><nick><c1>)
Notice <c1><gt><gt> <c2><nick>: <text>
NoticeSelf <c1><gt><gt> <c2><nick>: <text>
Rejoin <pre> <c1>Rejoining <c1>(<c2><chan><c1>)....
ServerError <pre> <c2>Error: <c3><text>

Notify <c1>[<c2>Notify<c1>] <nick> is on IRC <parentext>
Unotify <c1>[<c2>Notify<c1>] <nick> has left IRC <parentext>

ActionChan <c3>* <c1>¯ <c3><cmode><nick> <text>
ActionChanSelf <c3>* <c1>¯ <c3><cmode><nick> <text>

TextChan <c1><lt><c3><cmode><c2><nick><c1><gt> <c3><text>
TextChanSelf <c1><lt><c3><cmode><c2><me><c1><gt> <c3><text>
TextMsg <c1>*<c3><cmode><c2><nick><c1>* <c3><text>
TextMsgSend <c1>-<gt> <c3>*<me>* <text>

TextQuery <c1><lt><c3><cmode><c2><nick><c1><gt> <c3><text>
TextQuerySelf <c1><lt><c3><cmode><c2><me><c1><gt> <c3><text>
ActionQuery <c3>* <c1>¯ <c3><cmode><nick> <text>
ActionQuerySelf <c3>* <c1>¯ <c3><cmode><me> <text>

CTCP <pre> <c1>[<c2><nick><c1>] <c2><ctcp> <c3><text>
CTCPChan <pre> <c1>[<c2><nick><c1>/<c2><chan><c1>] <c2><ctcp> <c3><text>
;receive/get a ctcp


CTCPSelf <c1>-<gt> <c1>[<c2><nick><c1>] <c2><ctcp> <c3><text>
CTCPChanSelf <c1>-<gt> <c1>[<c2><chan><c1>] <c2><ctcp> <c3><text>
;send a ctcp

CTCPReply <pre> <c1>[<c2><nick><chan><c1>] <c1><ctcp> reply <c3><text>
;receive a reply
CTCPReplySelf <c1>-<gt> <c1>[<c2><nick><c1>] <c2><ctcp> [REPLY] <c3><text>
;send a reply

Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <pre> ERROR: <text>

DNS <c1>[<c2>DNS<c1>] Looking up <c1>(<c2><nick><address><c1>)
DNSError <c1>[<c2>DNS<c1>] Unable to resolve <c1>(<c2><address><c1>)
DNSResolve <c1>[<c2>DNS<c1>] Resolved <c3><address> <c1>to <c1>(<c2><raddress><c1>)

;RAWS
;RAWS
RAW.001 !script halt
RAW.002 !script halt
RAW.003 !script halt
RAW.004 !script halt
RAW.005 !script halt

;NAMES
RAW.353 !Script default.names1
RAW.366 !Script default.names2

;WHOIS
raw.311 !script default.whoisinit
raw.319 !script default.whoischan
raw.312 !script default.whoisserv
raw.301 !script default.whoisaway
raw.307 !script halt
raw.317 !script default.whoisidle
raw.318 !script default.whoisend


;LUSERS
RAW.251 !script default.lusers %::users %::text %::value
RAW.252 !script default.luserops
RAW.253 !script default.luserun
RAW.254 !script default.luserchan
RAW.255 !script default.luserstat %::users %::value
;if ($rcon(connect,display) == off) { halt } | else { lusers.stat } | halt }

RAW.302 <pre> <c1>Userhost: <c2><nick><c1>[<c3><address><c1>]

;WHO
RAW.352 !script $iif(%stealth.who == on,default.who1,halt)
RAW.315 !script $iif(%stealth.who == on,default.who2,halt)
;WHOWAS
raw.314 !script default.whowasinit %::nick %::address %::realname
raw.316 !script halt

;CHANSHIT
RAW.324 !script default.chanmodes
;RAW.328 !script default.chanurl
RAW.329 !script default.chancreat
RAW.331 !script halt
RAW.332 !script default.chantopic
RAW.333 !script default.chantopicset
;RAW.366 !script default.chanjoin


;AWAY
RAW.305 <pre> <c1>(<c2>Back<c1>) You are no longer away.
RAW.306 <pre> <c1>(<c2>Away<c1>) You are now away.

;MOTD
RAW.375 !script default.motd1
RAW.372 !script $iif(%stealth.motd == on,%:echo $default.wa(5,80,$+(³ÿ,,%::c3,%::text)),halt)
RAW.376 !script default.motd2

;ERRORS
RAW.401 <pre> <c2>Error:<c3> No such nickname <c1>(<c2><nick><c1>)
RAW.403 <pre> <c2>Error:<c3> No such channel <c1>(<c2><chan><c1>)
RAW.404 <pre> <c2>Error:<c3> Unable to send message to <c1>(<c2><chan><c1>)

raw.405 <pre> <c2>Error:<c3> Cannot Join <chan> <c1>(<c2>You are on too many<c1>)
raw.406 <pre> <c2>Error:<c3> No such nickname <c1>(<c2><nick><c1>)
RAW.421 <pre> <c2>Error:<c3> Invalid Command <c1>(<c2><value><c1>)
raw.432 <pre> <c2>Error:<c3> Invalid Nickname <c1>(<c2><nick><c1>) 
RAW.433 <pre> <c2>Error:<c3> Nick already in use <c1>(<c2><nick><c1>)

raw.436 <pre> <c2>Error:<c3> Nick collision with <c1>(<c2><nick><c1>)
raw.438 <pre> <c2>Error:<c3> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> <c2>Error:<c3> Nickname changed too fast, please wait a while and try again...
raw.441 <pre> <c2>Error:<c3> <nick> is not on <c1>(<c2><chan><c1>)
raw.442 <pre> <c2>Error:<c3> You're not on <c1>(<c2><chan><c1>)
raw.443 <pre> <c2>Error:<c3> <nick> is already on <c1>(<c2><chan><c1>)

raw.461 <pre> <c2>Error:<c3> More parameters needed for <c1>(<c2><text><c1>)
raw.465 <pre> <c2>Error:<c3> Sorry, You're banned from this server.

raw.467 <pre> <c2>Error:<c3> Cannot Join <chan> <c1>(<c2>its keyed +k<c1>)
RAW.471 <pre> <c2>Error:<c3> Cannot Join <chan> <c1>(<c2>its full +l<c1>)
raw.472 <pre> <c2>Error:<c3> Unknown character: <c1>(<c2><text><c1>)
RAW.473 <pre> <c2>Error:<c3> Cannot Join <chan> <c1>(<c2>invite only +i<c1>)
RAW.474 <pre> <c2>Error:<c3> Cannot Join <chan> <c1>(<c2>you are banned +b<c1>)
RAW.475 <pre> <c2>Error:<c3> Cannot Join <chan> <c1>(<c2>requires key +k<c1>)
raw.478 <pre> <c2>Error:<c3> Cannot ban <text> <c1>(<c2>banlist is full<c1>)
RAW.482 <pre> <c2>Error:<c3> You're not opped on <c1>(<c2><chan><c1>)

Colors 1,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1,11,1,11
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160

; Regular text, nickname or channel, highlighted text, and brackets
BaseColors 11,15,14,15

CLineOwner 11
CLineOP 11
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 11

ClineCharOwner 12.
ClineCharOP 12@
ClineCharHOP 18%
ClineCharVoice 34+ 

;You can use Font name,size (can be negative to correspond with mIRC
;font size dialog), B (for bold)

FontDefault IBMPC,13
FontChan IBMPC,13
FontQuery IBMPC,13

;Note that this theme does not use images, sounds.



scheme1 - red
scheme2 - orange
scheme3 - yellow
scheme4 - green
scheme5 - purple
scheme6 - grey

scheme7 blue - 
scheme8 *blue - light
scheme9 blue - blend
scheme10 blue - dark
scheme11 blue - dark blend

scheme12 red - 
scheme13 red - blend
scheme14 red - dark
scheme15 red - dark blend

scheme16 green - 
scheme17 green - light
scheme18 green - blend
scheme19 green - darkblend
scheme20 green - dark
scheme21 *green - darklite

scheme22 cyan - 
scheme23 cyan - blend
scheme24 cyan - darkblend
scheme25 *cyan - dark

scheme26 purple -
scheme27 purple - light
scheme28 purple - blend
scheme29 purple - dark


scheme30 white - plain
scheme31 white - orange
scheme32 pale - white
scheme33 grey - grey
scheme34 grey - blue
scheme35 grey - dark
scheme36 *grey - orange



scheme37 orange -
scheme38 orange - dark
scheme39 *orange - darklite

scheme40 khaki -
scheme41 storm
scheme42 *rotten



[scheme1]
BASECOLORS 04,15,14,15
Prefix 14¯15¯04¯
Colors 1,04,04,15,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,1,04,1,04
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,252,88 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 04
CLineOP 04
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 04


[scheme2]
BASECOLORS 07,15,14,15
Prefix 14¯15¯07¯
Colors 1,07,07,15,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,1,07,1,07
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,169,0 255,252,88 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 07
CLineOP 07
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 07

[scheme3]
BASECOLORS 08,15,14,15
Prefix 14¯15¯08¯
Colors 1,08,08,15,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,1,08,1,08
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,252,88 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 08
CLineOP 08
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 08


[scheme4]
BASECOLORS 03,15,14,15
Prefix 14¯15¯03¯
Colors 1,03,03,15,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,1,03,1,03
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 03
CLineOP 03
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 03

[scheme5]
BASECOLORS 06,15,14,15
Prefix 14¯15¯06¯
Colors 1,06,06,15,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,06,1,06,1,06
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 06
CLineOP 06
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 06


[scheme6]
BASECOLORS 14,15,14,15
Prefix 14¯14¯15¯
Colors 1,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,1,15,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 14
CLineOP 14
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 14

[scheme7]
BASECOLORS 11,10,00,10
Prefix 11¯10¯
ParenText <c1>(<c2><text><c1>)
Colors 2,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,10,2,10
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 74,197,255 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 10


[scheme8]
BASECOLORS 11,15,00,10
Prefix 11¯10¯
ParenText <c1>(<c2><text><c1>)
Colors 2,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,10,2,10
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 74,197,255 0,128,192 0,0,255 255,0,255 112,112,112 199,199,199
CLineOwner 11
CLineOP 11
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 10

[scheme9]
BASECOLORS 11,10,11,10
Prefix 11¯10¯
ParenText <c1>(<c2><text><c1>)
Colors 2,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,10,2,10
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 74,197,255 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 10
CLineMe 10

[scheme10]
BASECOLORS 11,10,00,10
Prefix 00¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,11,01,11
RGBColors 255,255,255 5,5,5 32,28,88 0,144,0 235,0,0 200,0,0 160,0,160 255,128,0 255,255,0 27,142,57 116,185,248 0,128,192 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 11

[scheme11]
BASECOLORS 11,10,11,10
Prefix 11¯10¯
ParenText <c1>(<c2><text><c1>)
Colors 01,11,11,15,11,11,11,11,11,11,11,11,11,11,11,15,11,11,11,11,11,01,10,01,15
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 74,197,255 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 10
CLineMe 10




[scheme12]
BASECOLORS 05,04,00,04
Prefix 05¯04¯
ParenText <c1>(<c2><text><c1>)
Colors 09,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,09,05,09,05
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 160,0,0 160,0,160 255,128,0 255,255,0 55,0,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 04
CLineOP 04
CLineHOP 05
CLineVoice 05
CLineRegular 05
CLineMe 07

[scheme13]
BASECOLORS 05,04,05,04
Prefix 05¯04¯
ParenText <c1>(<c2><text><c1>)
Colors 09,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,09,05,09,05
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 160,0,0 160,0,160 255,128,0 255,255,0 55,0,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 04
CLineOP 04
CLineHOP 05
CLineVoice 05
CLineRegular 05
CLineMe 07


[scheme14]
BASECOLORS 05,04,00,04
Prefix 00¯05¯
ParenText <c1>(<c2><text><c1>)
Colors 01,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,01,05,01,05
RGBColors 255,255,255 5,5,5 32,28,88 0,144,0 235,0,0 200,0,0 160,0,160 255,128,0 255,255,0 27,142,57  0,147,147 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 05
CLineOP 05
CLineHOP 04
CLineVoice 04
CLineRegular 00
CLineMe 05

[scheme15]
BASECOLORS 05,04,05,04
Prefix 05¯04¯
ParenText <c1>(<c2><text><c1>)
Colors 01,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,05,01,04,01,05
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 160,0,0 160,0,160 255,128,0 255,255,0 55,0,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 05
CLineOP 05
CLineHOP 04
CLineVoice 04
CLineRegular 04
CLineMe 07


[scheme16]
BASECOLORS 09,10,00,09
Prefix 00¯09¯
ParenText <c1>(<c2><text><c1>)
Colors 01,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,01,10,01,10
RGBColors 255,255,255 0,40,4 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 27,142,57  91,227,64 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 09
CLineOP 09
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 09

[scheme17]
BASECOLORS 09,15,00,09
Prefix 00¯09¯
ParenText <c1>(<c2><text><c1>)
Colors 01,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,01,09,01,09
RGBColors 255,255,255 0,40,3 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 91,227,64  0,147,147 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 09
CLineOP 09
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 09


[scheme18]
BASECOLORS 09,10,09,09
Prefix 10¯09¯
ParenText <c1>(<c2><text><c1>)
Colors 01,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,01,10,01,10
RGBColors 255,255,255 0,40,4 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 27,142,57  91,227,64 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 09
CLineOP 09
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 09

[scheme19]
BASECOLORS 09,10,09,09
Prefix 10¯09¯
ParenText <c1>(<c2><text><c1>)
Colors 01,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,01,10,01,10
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 27,142,57  91,227,64 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 09
CLineOP 09
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 09


[scheme20]
BASECOLORS 09,10,00,09
Prefix 00¯09¯
ParenText <c1>(<c2><text><c1>)
Colors 01,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,01,10,01,10
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 27,142,57  91,227,64 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 09
CLineOP 09
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 09

[scheme21]
BASECOLORS 09,15,00,09
Prefix 00¯09¯
ParenText <c1>(<c2><text><c1>)
Colors 01,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,01,09,01,09
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 91,227,64  0,147,147 0,255,255 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 09
CLineOP 09
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 09

[scheme22]
BASECOLORS 10,11,00,10
Prefix 10¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,11,9,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,47,45 0,147,147 0,255,255 0,0,255 255,0,255 112,112,112 180,180,180
CLineOwner 10
CLineOP 10
CLineHOP 11
CLineVoice 11
CLineRegular 15
CLineMe 11


[scheme23]
BASECOLORS 08,11,10,11
Prefix 10¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 9,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,09,10,9,08
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 56,112,112 0,47,45 0,147,147 0,209,209 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 08
CLineOP 08
CLineHOP 10
CLineVoice 10
CLineRegular 11
CLineMe 11

[scheme24]
BASECOLORS 10,11,00,10
Prefix 10¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 01,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,01,11,01,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,47,45 0,147,147 0,255,255 0,0,255 255,0,255 112,112,112 199,199,199
CLineOwner 10
CLineOP 10
CLineHOP 11
CLineVoice 11
CLineRegular 15
CLineMe 11

[scheme25]
BASECOLORS 08,11,10,11
Prefix 10¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 01,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,08,01,10,01,08
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 56,112,112 0,47,45 0,147,147 0,209,209 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 08
CLineOP 08
CLineHOP 10
CLineVoice 10
CLineRegular 11
CLineMe 11



[scheme26]
BASECOLORS 11,06,00,06
Prefix 00¯06¯
ParenText <c1>(<c2><text><c1>)
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,06,01,06
RGBColors 255,255,255 7,7,25 32,28,88 0,144,0 255,0,0 128,0,0 172,176,245 255,128,0 255,255,0 91,227,64 0,147,147 104,107,173 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 11
CLineOP 11
CLineHOP 06
CLineVoice 06
CLineRegular 00
CLineMe 11

[scheme27]
BASECOLORS 11,15,00,06
Prefix 00¯06¯
ParenText <c1>(<c2><text><c1>)
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,06,01,06
RGBColors 255,255,255 7,7,25 32,28,88 0,144,0 255,0,0 128,0,0 172,176,245 255,128,0 255,255,0 91,227,64 0,147,147 104,107,173 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 11
CLineOP 11
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 11

[scheme28]
BASECOLORS 11,06,11,06
Prefix 00¯06¯
ParenText <c1>(<c2><text><c1>)
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,06,01,06
RGBColors 255,255,255 7,7,25 32,28,88 0,144,0 255,0,0 128,0,0 172,176,245 255,128,0 255,255,0 91,227,64 0,147,147 104,107,173 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 11
CLineOP 11
CLineHOP 06
CLineVoice 06
CLineRegular 00
CLineMe 11

[scheme29]
BASECOLORS 11,06,00,06
Prefix 00¯06¯
ParenText <c1>(<c2><text><c1>)
Colors 01,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,06,01,06
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 172,176,245 255,128,0 255,255,0 91,227,64 0,147,147 104,107,173 0,0,255 255,0,255 127,127,127 199,199,199
CLineOwner 11
CLineOP 11
CLineHOP 06
CLineVoice 06
CLineRegular 00
CLineMe 11

[scheme30]
BASECOLORS 01,01,01,01
Prefix 01¯14¯
Colors 0,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,0,01,0,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 100,100,100 130,130,130
CLineOwner 01
CLineOP 01
CLineHOP 01
CLineVoice 01
CLineRegular 01
CLineMe 14


[scheme31]
BASECOLORS 07,15,14,15
Prefix 14¯07¯
Colors 0,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,0,01,0,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,155,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 88,88,88 155,155,155
CLineOwner 07
CLineOP 07
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 07


[scheme32]
BASECOLORS 11,00,00,11
Prefix 11¯0¯
Colors 10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,10,11
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 81,101,128 166,190,253 0,0,255 255,0,255 100,100,100 130,130,130
CLineOwner 11
CLineOP 11
CLineHOP 11
CLineVoice 11
CLineRegular 11
CLineMe 00



[scheme33]
BASECOLORS 14,15,14,15
Prefix 14¯14¯15¯
Colors 0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,0,14
RGBColors 235,235,235 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 80,80,80 104,104,104
CLineOwner 15
CLineOP 15
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 14

[scheme34]
BASECOLORS 11,15,14,15
Prefix 14¯15¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,0,11
RGBColors 235,235,235 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,72,141 0,0,255 255,0,255 80,80,80 104,104,104
CLineOwner 11
CLineOP 11
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 11




[scheme35]
BASECOLORS 14,15,00,14
Prefix 15¯14¯
ParenText <c1>(<c2><text><c1>)
Colors 01,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,01,14,01,14
RGBColors 255,255,255 15,15,15 32,28,88 0,144,0 255,0,0 128,0,0 172,176,245 255,128,0 255,255,0 91,227,64 0,147,147 104,107,173 0,0,255 255,0,255 140,140,140 200,200,200
CLineOwner 14
CLineOP 14
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 14

[scheme36]
BASECOLORS 11,15,14,15
Prefix 15¯11¯
ParenText <c1>(<c2><text><c1>)
Colors 0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,0,11
RGBColors 235,235,235 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 227,168,28 0,0,255 255,0,255 40,40,40 125,125,125
CLineOwner 11
CLineOP 11
CLineHOP 15
CLineVoice 15
CLineRegular 14
CLineMe 11


[scheme37]
BASECOLORS 07,08,00,08
Prefix 07¯08¯
Colors 06,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,06,07,06,07
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 252,107,0 254,159,65 255,207,159 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 07
CLineOP 07
CLineHOP 08
CLineVoice 08
CLineRegular 00
CLineMe 07



[scheme38]
BASECOLORS 07,08,00,08
Prefix 07¯08¯
Colors 01,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,01,07,01,07
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 252,107,0 254,159,65 255,207,159 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 07
CLineOP 07
CLineHOP 08
CLineVoice 08
CLineRegular 00
CLineMe 07

[scheme39]
BASECOLORS 07,15,00,08
Prefix 07¯08¯
Colors 01,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,07,01,07,01,07
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 252,107,0 254,159,65 255,207,159 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 195,195,195
CLineOwner 07
CLineOP 07
CLineHOP 15
CLineVoice 15
CLineRegular 00
CLineMe 07

[scheme40]
BASECOLORS 04,05,01,05
Prefix 04¯05¯
Colors 00,04,04,15,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,00,04,00,04
RGBColors 241,241,227 60,54,34 0,0,128 0,144,0 113,103,64 166,152,102 160,0,160 255,128,0 255,252,88 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 04
CLineOP 04
CLineHOP 05
CLineVoice 05
CLineRegular 01
CLineMe 04

[scheme41]
BASECOLORS 11,10,00,10
Prefix 11¯10¯
ParenText <c1>(<c2><text><c1>)
Colors 2,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,10,2,10
RGBColors 255,255,255 0,0,0 51,72,94 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 160,204,230 148,170,192 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 10

[scheme42]
BASECOLORS 04,05,15,05
Prefix 04¯05¯
Colors 01,04,04,15,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,04,01,04,01,04
RGBColors 241,241,227 55,69,10 0,0,128 0,144,0 162,148,91 177,165,122 160,0,160 255,128,0 255,252,88 0,255,0 0,144,144 0,128,192 0,0,255 255,0,255 112,112,112 199,199,199
CLineOwner 04
CLineOP 04
CLineHOP 05
CLineVoice 05
CLineRegular 01
CLineMe 04




