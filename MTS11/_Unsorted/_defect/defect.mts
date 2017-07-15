[mts]

Name        defect
Author      erawtic@efnet
Email       ndove@cox.net
Description a unique, lilac-colored theme with a few color schematics, bold highlighting, and some other neat shit
Website     http://era.echotheory.com/defect
Version     0.3r1
MTSVersion  1.1
Script      defect.mrc

Load   !script _defect.loaded
Unload !script _defect.unload

Colors     0,3,6,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,3,0,3,0,1,4
RGBColors  0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 37,61,119 80,103,153 129,154,204 180,205,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
BaseColors 03,07,04,01

CLineOwner   08
CLineOP      08
CLineHOP     07
CLineVoice   07
CLineRegular 06
CLineMe      04
CLineFriend  03
CLineEnemy   02
CLineIrcOP   08

CLineCharOwner   04.
CLineCharOP      04@
CLineCharHOP     04%
CLineCharVoice   04+
CLineCharRegular

FontDefault IBMPC,12
FontChan    IBMPC,12
FontQuery   IBMPC,12

Prefix    5-6Ä7Ä
ParenText 1[03<text>1]

TimestampFormat 01HH:nn:ss

Echo       !script _defect_echo %::timestamp %::pre 03 $+ $_defect_bold(4,3,%::text)
EchoTarget !script _defect_echo %::timestamp %::pre 03 $+ $_defect_bold(4,3,%::text)
Error      !script _defect_echo %::timestamp %::pre 8error2:3 $_defect_bold(4,3,%::text)

TextChan       !script _defect.textchan %::nick %::text
TextChanSelf   !script _defect.textchan %::me %::text
ActionChan     !script _defect.actionchan %::nick %::text
ActionChanSelf !script _defect.actionchan %::me %::text

TextQuery       !script _defect.textquery %::nick %::text
TextQuerySelf   !script _defect.textquery %::me %::text
ActionQuery     !script _defect.actionquery %::nick %::text
ActionQuerySelf !script _defect.actionquery %::me %::text

TextMsg     !script _defect.textmsg %::target %::nick %::text
TextMsgSelf !script _defect.out msg %::target %::text

Notice         !script _defect.notice %::target %::nick %::text
NoticeChan     !script _defect.notice %::target %::nick %::text
NoticeSelf     !script _defect.out notice %::target %::text
NoticeSelfChan !script _defect.out $iif(@* iswm %::target,wall,notice) %::target %::text

CTCP          !script _defect.ctcp %::target %::nick %::ctcp %::text
CTCPChan      !script _defect.ctcp %::target %::nick %::ctcp %::text
CTCPReply     !script _defect_echo %::timestamp %::pre 6received 1[03 $+ %::ctcp $+ 1] 6reply from8 %::nick $_defect_bold(4,3,%::parentext)
CTCPSelf      !script _defect.out ctcp %::target %::ctcp %::text
CTCPChanSelf  !script _defect.out ctcp %::target %::ctcp %::text
CTCPReplySelf !script _defect.out ctcpreply %::target %::ctcp %::text

Mode     !script _defect_echo %::timestamp %::pre 08 $+ %::nick 6sets channel mode 1[03 $+ %::modes $+ 1]
ModeUser !script _defect_echo %::timestamp %::pre 08 $+ %::nick 6sets user mode 1[03 $+ %::modes $+ 1]
Join     !script _defect_join
JoinSelf !script _defect_echo %::timestamp %::pre 6joined conversation in 08 $+ $lower(%::chan) $+ 2..
Rejoin   !script _defect_echo %::timestamp %::pre 6attempting rejoin on 08 $+ $lower(%::chan) $+ 2..
Part     !script _defect_echo %::timestamp %::pre 08 $+ %::nick 1[06 $+ $replace(%::address,@,8@06) $+ 1]7 has left2.. $iif(%::text,$_defect_bold(4,3,%::parentext))
Kick     !script _defect_echo %::timestamp %::pre 08 $+ %::knick 06was kicked by8 %::nick $+ $iif(%::text == $null,2..) $iif(%::text != $null,$_defect_bold(4,3,%::parentext))
KickSelf !script _defect_echo %::timestamp %::pre 08kicked1: 08you1(02 $+ %::me $+ 1) 06were kicked by8 %::nick $+ $iif(%::text == $null,2..) $iif(%::text != $null,$_defect_bold(4,3,%::parentext))
Quit     !script _defect_echo %::timestamp %::pre 08 $+ %::nick 1[06 $+ $replace(%::address,@,8@06) $+ 1]7 signed off2.. $iif(%::text,$_defect_bold(4,3,%::parentext))
Topic    !script _defect_echo %::timestamp %::pre 08 $+ %::nick 6 $+ $iif(%::text,changed channel topic $_defect_bold(4,3,%::parentext),erased channel topic $+ 2..)
Nick     !script _defect_echo %::timestamp %::pre 08 $+ %::nick 6changed nickname to 1[07 $+ %::newnick $+ 1]
NickSelf !script _defect_echo %::timestamp %::pre 08you1(02 $+ %::me $+ 1) 06are now known as 07 $+ %::newnick
Invite   !script _defect_echo %::timestamp %::pre 08 $+ %::nick 1[06 $+ $replace(%::address,@,8@06) $+ 1]6 invited you to 08 $+ $lower(%::chan) %::parentext

Notify  !script _defect_echo %::timestamp %::pre 08signon1: 04 $+ %::nick 1[06 $+ $replace(%::address,@,8@06) $+ 1]7 is online
UNotify !script _defect_echo %::timestamp %::pre 08signoff1: 04 $+ %::nick 1[06 $+ $replace(%::address,@,8@06) $+ 1]7 is offline

Wallop       !script _defect_echo %::timestamp %::pre 1[06wallop1!08 $+ %::nick $+ 1]3 $_defect_bold(4,3,%::text))
NoticeServer !script _defect_echo %::timestamp 8!06 $+ $lower(%::nick) $+ 3 $_defect_bold(4,3,%::text)
ServerError  !script _defect_echo %::timestamp %::pre 8error2:4 %::text

DNS        !script _defect_echo %::timestamp %::pre 6checking tables for1:8 $iif(%::nick,%::nick,$lower(%::address)) $+ 2..
DNSError   !script _defect_echo %::timestamp %::pre 6dns error1:8 $iif(%::nick && !%::address,%::nick 1[3no such user1]3,$lower(%::address) 1[3unable to resolve1]3)
DNSResolve !script _defect_echo %::timestamp %::pre 6resolved1:8 $iif(!%::nick,$lower($iif(%::iaddress == %::raddress,%::naddress,%::iaddress)),%::nick 1[03 $+ $lower($iif(%::iaddress == %::raddress,%::naddress,%::iaddress)) $+ 1]) 6to1:8 $lower(%::raddress)

ListBegin !script _defect.listbegin
ListText  !script _defect.listtext %::text
ListSep   !script _defect.listsep
ListEnd   !script _defect.listend

Whois   !script _defect.whois_default

raw.312 !script
raw.314 !script _defect_echo %::timestamp %::pre 08 $+ %::nick 1(06 $+ $lower($replace(%::address,@,8@06)) $+ 1)2 was '03 $+ $_defect_bold(4,3,%::realname) $+ 2'
raw.369 !script

raw.001 !script
raw.002 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::server) 6version1:3 %::value
raw.003 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::server) 6created1:3 %::value
raw.005 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::server) 6support1:3 %::text
raw.250 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::server) 6user high1:3 %::value

raw.219 !script _defect_echo %::timestamp %::pre 6end of /stats 1[08 $+ %::value $+ 1]
raw.221 !script _defect_echo %::timestamp %::pre 6current usermode1:08 %::value

raw.251 !script _defect.lusershead
raw.252 !script _defect_echo %::timestamp     8operators 1:4 %::value
raw.253 !script _defect_echo %::timestamp     8unknowns  1:4 %::value
raw.254 !script _defect_echo %::timestamp     8channels  1:4 %::value
raw.255 !script _defect_echo %::timestamp     8clients   1:4 %::users 3client $+ $iif(%::users > 1,s) $+ , %::value 3server $+ $iif(%::value > 1,s)
raw.265 !script _defect_echo %::timestamp     8max local 1:4 %::users 3user $+ $iif(%::users > 1,s) $+ ,4 %::value 3server $+ $iif(%::value > 1,s)
raw.266 !script _defect.lusersfoot

raw.301 !script _defect_echo %::timestamp %::pre 04 $+ %::nick 2is away 1[03 $+ %::text $+ 1]
raw.302 !script _defect_echo %::timestamp %::pre 8userhost1:4 %::nick 2is '03 $+ $replace(%::address,@,7@03) $+ 2'
raw.303 !script _defect_echo %::timestamp %::pre 8ison1:4 $iif(%::text,%::text,<no one>)

raw.324 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::chan) 6modes1:3 %::modes
raw.329 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::chan) 6alive1:3 $remove($duration($calc($ctime - %::value)),ks,k,ays,ay,rs,r,ins,in,ecs,ec)
raw.331 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::chan) 6topic not set
raw.332 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::chan) 6topic1:3 $_defect_bold(4,3,%::text)
raw.333 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::chan) 6topic set by1:3 %::nick 1(02 $+ $remove($duration($calc($ctime - $ctime(%::text))),ks,k,ays,ay,rs,r,ins,in,ecs,ec) ago1)

raw.341 !script _defect_echo %::timestamp %::pre 08 $+ %::nick 6has been invited to 1[07 $+ $lower(%::chan) $+ 1]

raw.352 !script _defect_echo %::timestamp %::pre 4 $+ %::cmode $+ 07 $+ %::nick $+ 1[06 $+ $replace(%::address,@,8@06) $+ 1]3 is ' $+ $_defect_bold(4,3,$replace(%::realname,,03)) $+ ' 1[2 $+ $iif(%::away == G,away,here) $+ 1] -3 $lower(%::wserver) 1-4 %::value 3hop $+ $iif(%::value != 1,s) away
raw.315 !script _defect_echo %::timestamp %::pre 6end of /who 1[08 $+ $lower(%::chan) $+ 1]

raw.353 !script _defect.names
raw.366 !script _defect.namesend

raw.375 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::server) 6message of the day
raw.372 !script _defect_echo %::timestamp   7:3 $_defect_bold(4,3,%::text)
raw.376 !script _defect_echo %::timestamp %::pre 6end 08 $+ $lower(%::server) 6message of the day

raw.391 !script _defect_echo %::timestamp %::pre 08 $+ $lower(%::nick) 6time is1:3 $lower(%::text)

raw.401 !script _defect_echo %::timestamp %::pre 8error1:3 no such nickname 1[04 $+ %::nick $+ 1]
raw.402 !script _defect_echo %::timestamp %::pre 8error1:3 no such server 1[04 $+ %::nick $+ 1]
raw.403 !script _defect_echo %::timestamp %::pre 8error1:3 no such channel 1[04 $+ $lower(%::chan) $+ 1]
raw.404 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:03 can't send to channel 1[04 $+ $iif($me !ison $lower(%::chan),not on channel,$iif(m isincs $gettok($chan($lower(%::chan)).mode,1,32),moderated,banned)) $+ 1]
raw.406 !script _defect_echo %::timestamp %::pre 8error1:3 no such nickname 1[04 $+ %::nick $+ 1]
raw.421 !script _defect_echo %::timestamp %::pre 8error1:3 stupid command 1[07/04 $+ $lower(%::value) $+ 1]
raw.433 !script _defect_echo %::timestamp %::pre 8error1:3 nickname taken 1[04 $+ %::nick $+ 1]
raw.441 !script _defect_echo %::timestamp %::pre 8error1:4 %::nick 3not in channel 1[04 $+ %::chan $+ 1]
raw.461 !script _defect_echo %::timestamp %::pre 8error1:3 not enough parameters 1[04 $+ %::value $+ 1]
raw.471 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:3 can't join channel 1[04+l1]
raw.472 !script _defect_echo %::timestamp %::pre 8error1:4 unknowm mode 1[04 $+ %::value $+ 1]
raw.473 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:3 can't join channel 1[04+i1]
raw.474 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:3 can't join channel 1[04+b1]
raw.475 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:3 can't join channel 1[04+k1]
raw.477 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:3 can't join channel 1[04+r1]
raw.481 !script _defect_echo %::timestamp %::pre 8error1:4 you're not an ircop
raw.482 !script _defect_echo %::timestamp %::pre 8error1:4 $lower(%::chan) $+ 1:3 need ops 1[04-o1]
raw.491 !script _defect_echo %::timestamp %::pre 8error1:4 no o-line for you!

raw.Other !script _defect.parseraw $numeric


; color schemes
Scheme1 Smoke
Scheme2 Ganja
Scheme3 Blues
Scheme4 Sunset
Scheme5 Crimson
; scheme6 by dev@efnet
Scheme6 Citron
Scheme7 Dazed
Scheme8 Mer
Scheme9 Plaid

; cool pastel schemes
Scheme10 Pastel-blue
Scheme11 Pastel-green
Scheme12 Pastel-violet
Scheme13 Pastel-red
Scheme14 Pastel-light
Scheme15 Pastel-haze
Scheme16 Pastel-gray

; variable font scheme
Scheme17 Verdana

; format schemes
Scheme18 Hydrous
Scheme19 Desert

[scheme1]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 90,90,90 136,136,136 188,188,188 255,255,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme2]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 0,115,0 0,188,0 55,255,55 155,255,155 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme3]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 0,65,130 0,115,230 55,155,255 135,195,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme4]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 130,65,0 230,115,0 255,155,55 255,195,135 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
Whois     !script _defect.whois_hydrous

[scheme5]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 130,0,15 200,0,13 255,35,60 255,100,110 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
Whois     !script _defect.whois_hydrous

[scheme6]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 155,159,6 197,202,9 237,242,11 250,255,43 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme7]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 128,0,128 192,0,192 255,64,255 255,128,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme8]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 0,79,79 0,145,145 0,255,255 217,255,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme9]
RGBColors 0,30,30 90,90,90 136,136,136 188,188,188 255,255,255 100,37,0 174,66,0 255,187,60 255,249,176 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme10]
RGBColors 15,25,30 90,90,90 136,136,136 188,188,188 255,255,255 37,58,73 71,111,139 109,151,181 182,203,218 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72

[scheme11]
RGBColors 17,27,27 90,90,90 136,136,136 188,188,188 255,255,255 40,60,60 77,123,122 119,171,170 187,213,213 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
Whois     !script _defect.whois_desert

[scheme12]
RGBColors 17,17,33 90,90,90 136,136,136 188,188,188 255,255,255 37,38,73 66,68,134 127,129,193 194,195,226 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
Whois     !script _defect.whois_desert

[scheme13]
RGBColors 29,19,19 90,90,90 136,136,136 188,188,188 255,255,255 74,46,46 142,88,88 183,137,137 221,199,199 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
Whois     !script _defect.whois_desert

[scheme14]
BaseColors      03,07,04,02
RGBColors       50,88,116 100,100,100 136,136,136 188,188,188 255,255,255 38,138,198 86,171,222 140,198,232 191,223,242 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
ParenText       2[03<text>2]
TimestampFormat 02HH:nn:ss

[scheme15]
BaseColors      03,07,04,02
RGBColors       58,61,41 100,100,100 136,136,136 188,188,188 255,255,255 92,102,64 139,155,98 182,192,154 221,225,208 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
ParenText       2[03<text>2]
TimestampFormat 02HH:nn:ss

[scheme16]
BaseColors      03,07,04,02
RGBColors       70,70,70 100,100,100 136,136,136 188,188,188 255,255,255 125,125,125 175,175,175 215,215,215 250,250,250 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
ParenText       2[03<text>2]
TimestampFormat 02HH:nn:ss

[scheme17]
Load          !script _defect.loaded var
RGBColors     0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 37,61,119 80,103,153 129,154,204 180,205,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
FontDefault   Verdana,11
FontChan      Verdana,11
FontQuery     Verdana,11
Prefix        5­6­7¬
TextChan      !script _defect.textchan_var %::nick %::text
TextChanSelf  !script _defect.textchan_var %::me %::text
TextQuery     !script _defect.textquery_var %::nick %::text
TextQuerySelf !script _defect.textquery_var %::me %::text
Whois         !script _defect.whois_var
ListBegin     !script _defect.listbegin_var
ListText      !script _defect.listtext_var %::text
ListSep       !script _defect.listsep_var
ListEnd       !script _defect.listend_var
raw.366       !script _defect.namesend var

[scheme18]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 0,100,100 0,170,170 35,240,240 125,255,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
Whois     !script _defect.whois_hydrous

[scheme19]
RGBColors 0,0,0 90,90,90 136,136,136 188,188,188 255,255,255 100,95,65 155,145,115 190,185,160 255,255,255 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72 72,72,72
CLineMe   07
Whois     !script _defect.whois_desert

Join     !script _defect_join desert
Part     !script _defect_echo %::timestamp %::pre 8part1/06 $+ $lower(%::chan) 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text))
Mode     !script _defect_echo %::timestamp %::pre 8mode1/06 $+ $lower(%::chan) 1(07 $+ %::nick $+ 1/05 $+ %::modes $+ 1)
Kick     !script _defect_echo %::timestamp %::pre 8kick1/06 $+ $lower(%::chan) 1(07 $+ %::nick 1->05 %::knick $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text))
KickSelf !script _defect_echo %::timestamp %::pre 8kick1/06 $+ $lower(%::chan) 1(07 $+ %::nick 1->08 %::knick $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text))
Quit     !script _defect_echo %::timestamp %::pre 8quit1 $+ $iif($lower(%::chan),/06 $+ $lower(%::chan),:) 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text))
Topic    !script _defect_echo %::timestamp %::pre 8topic1/06 $+ $lower(%::chan) 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text),2erased1..)
Nick     !script _defect_echo %::timestamp %::pre 8nick1/06 $+ $lower(%::chan) 1(07 $+ %::nick 1->05 %::newnick $+ 1)
Invite   !script _defect_echo %::timestamp %::pre 8invite1/06 $+ $lower(%::chan) 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1)

Notify  !script _defect_echo %::timestamp %::pre 8notify1/06online 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text))
UNotify !script _defect_echo %::timestamp %::pre 8notify1/06offline 1(07 $+ %::nick $+ 1/05 $+ $replace(%::address,@,7@05) $+ 1) $iif(%::text,:03 $+ $_defect_bold(4,3,%::text))
