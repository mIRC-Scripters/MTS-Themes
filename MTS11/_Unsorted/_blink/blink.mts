[mts]
Name blink
Author webprofit
SCRIPT blink.mrc
Email blink@webproficio.com
Description blink theme. nicely blended ascii theme with 27 schemes, and a clean-clear look.
Website http://www.webproficio.com
Version 1.6
MTSVersion 1.1

Load !script blink.load
Unload <pre> Unloading Blink theme...

Prefix 09ð10ð11ð
Timestamp OFF
TIMESTAMPFORMAT [hh:nn]
ParenText $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))
NoticeServer !script %:echo $+(,%::c2,-,,%::c1,$chr(62),$chr(32),,%::c2,$+(,%::c2,$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::nick))) ),,%::c1,:,,%::c2,$remove(%::text,***))


Mode !script %:echo %::pre $+(,%::c3,m,,%::c2,odes,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) $+(,%::c2,$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::modes))) )

ModeUser !script %:echo %::pre $+(,%::c3,m,,%::c2,odes,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,$chr(41),,%::c3) $+(,%::c2,$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::modes))) )

Join !script %:echo %::pre $+(,%::c3,j,,%::c2,oin,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) $+(,%::c1,$chr(40),$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))),,%::c1,$chr(41))

JoinSelf !script %:echo %::pre $+(,%::c1,Now chatting in,%::c2,:) $+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1))

Part !script %:echo %::pre $+(,%::c3,p,,%::c2,art,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) $+(,%::c1,$chr(40),$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))),,%::c1,$chr(41)) $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))



Quit !script %:echo %::pre $+(,%::c3,q,,%::c2,uit,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,$chr(41),,%::c3) $+(,%::c2,$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))) ) $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))

Kick !script %:echo %::pre $+(,%::c3,k,,%::c2,icks,,%::c1,$chr(40),,%::c3,%::knick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) by %::nick $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))


KickSelf !script %:echo %::pre $+(,%::c3,You were kicked from,,%::c1,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)) $+(,%::c2,by  ,%::c1,$chr(40),,%::c2,%::nick,,<c1>,$chr(41),-,$+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41)))

Topic !script %:echo %::pre $+(,%::c3,t,,%::c2,opic,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))

Nick !script %:echo %::pre $+(,%::c3,n,,%::c2,ick,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,$chr(41),,%::c3) is now known as $+(,%::c1,$chr(40),,%::c3,%::newnick,,%::c1,$chr(41))
NickSelf <pre> <c1> You are now know as <c1>(<c3><newnick><c1>)


Invite !script %:echo %::pre $+(,%::c3,i,,%::c2,nvite,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) $+(,%::c1,$chr(40),$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))),,%::c1,$chr(41))

Notice <c1>-<c2><nick><c1>- <c3><text>
NoticeSelf <c1><gt><gt> <c1>-<c2><nick><c1>- <c3><text>
NoticeChan !script %:echo $+(,%::c1,-,,%::c3,%::nick,,%::c1,:,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,-,,%::c3) %::text

Rejoin <pre> <c3>Rejoining<c1>: <c1>(<c2><chan><c1>)....
ServerError <pre> <c2>Error<c3>: <c3><text>

Notify <c1>[<c3>Notify<c1>] <c3><nick><c1>:<c3> is online <c1>(<c3><text><c1>)
Unotify <c1>[<c3>Notify<c1>] <c3><nick><c1>:<c3> is offline <c1>(<c3><text><c1>)

ActionChan <c3>* <c2>¯<c1>¯ <c2><cmode><c3><nick> <text>
ActionChanSelf <c3>* <c2>¯<c1>¯ <c2><cmode><c3><me> <text>

TextChan <c1><lt><c2><cmode><c4><nick><c1><gt> <c4><text>
TextChanSelf <c1><lt><c2><cmode><c4><me><c1><gt> <c4><text>

TextMsg <c1>*<c3><cmode><c2><nick><c1>* <c4><text>
TextMsgSelf <c2>-<c1><gt> <c1>*<c4><target><c1>* <c4><text>

TextQuery <c1><lt><c2><cmode><c4><nick><c1><gt> <c4><text>
TextQuerySelf <c1><lt><c2><cmode><c4><me><c1><gt> <c4><text>
ActionQuery <c3>* <c2>¯<c1>¯ <c2><cmode><c3><nick> <text>
ActionQuerySelf <c3>* <c2>¯<c1>¯ <c2><cmode><c3><me> <text>

CTCP !script %:echo %::pre $+(,%::c3,c,,%::c2,tcp,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,$chr(41),,%::c3) $+(,%::c2,%::ctcp) $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))

CTCPChan !script %:echo %::pre $+(,%::c3,c,,%::c2,tcp,,%::c1,$chr(40),,%::c3,%::nick,,%::c1,/,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),,%::c1,$chr(41),,%::c3) $+(,%::c2,%::ctcp) $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))
;receive/get a ctcp

CTCPSelf !script %:echo $+(,%::c3,-,,%::C1,>) $+(,%::c3,%::nick) $+(,%::c2,%::ctcp,,%::c1,:,,%::c3, %::text)
CTCPChanSelf !script %:echo $+(,%::c3,-,,%::C1,>) $+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)) $+(,%::c2,%::ctcp,,%::c1,:,,%::c3, %::text)
;send a ctcp

CTCPReply !script %:echo %::pre $+(,%::c3,r,,%::c2,eply,,%::c1,$chr(40),,%::c3,$iif(%chan,$+(,%::c2,$chr(35),,%::c3,$right(%::chan,-1)),%::nick),,%::c1,$chr(41)) $+(,%::c2,%::ctcp) $+(,%::c1,$chr(40),,%::c3,%::text,,%::c1,$chr(41))

CTCPReplySelf !script %:echo $+(,%::c3,-,,%::C1,>) $+(,%::c3,r,,%::c2,eply,,%::c1,: ,%::c3,%::nick) $+(,%::c1,[,,%::c3,%::ctcp,,%::c1,],,%::c2 %::text)

;send a reply


Echo <pre> <text>
EchoTarget <pre> [<target>] <text>
Error <pre> <pre> ERROR: <text>

DNS !script %:echo $+(,%::c1,[,,%::c3,DNS,,%::c1,], Looking up, $iif(%::address,$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))),%::nick)

DNSError !script %:echo $+(,%::c1,$chr(91),,%::c3,DNS,,%::c1,$chr(93)) $+(,%::c2,Unable to resolve,,%::c1,:) $+(,%::c1,$chr(40),$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))),,%::c1,$chr(41))

DNSResolve !script %:echo $+(,%::c1,$chr(91),,%::c3,DNS,,%::c1,$chr(93)) $+(,%::c2,Resolved,,%::c2 $arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::address))),,%::c2 to,,%::c1,:) $+(,%::c1,$chr(40),$arep($xret(%::c1,%::c2,%::c3,%::c4,$+(,%::c3,%::raddress))),,%::c1,$chr(41))

;RAWS
;RAWS
RAW.001 !script halt
RAW.002 !script halt
RAW.003 !script halt
RAW.004 !script halt
RAW.005 !script halt

;NAMES
RAW.353 !Script blink.names1
RAW.366 !Script blink.names2

;WHOIS
raw.311 !script blink.whoisinit
raw.319 !script blink.whoischan
raw.312 !script $iif(%:::whowas != yes,blink.whoisserv, unset %:::whowas)
raw.301 !script blink.whoisaway
raw.307 !script halt
raw.317 !script blink.whoisidle
raw.318 !script blink.whoisend


;LUSERS
RAW.251 !script blink.lusers %::users %::text %::value
RAW.252 !script blink.luserops
RAW.253 !script blink.luserun
RAW.254 !script blink.luserchan
RAW.255 !script blink.luserstat %::users %::value
;if ($rcon(connect,display) == off) { halt } | else { lusers.stat } | halt }

RAW.302 <pre> <c1>Userhost: <c2><nick><c1>[<c3><address><c1>]

;WHO
RAW.352 !script $iif(%blender.who == on,blink.who1,halt)
RAW.315 !script $iif(%blender.who == on,blink.who2,halt)
;WHOWAS
raw.314 !script blink.whowasinit %::nick %::address %::realname
raw.316 !script halt
raw.369 !script halt

;CHANSHIT
RAW.324 !script blink.chanmodes
;RAW.328 !script blink.chanurl
RAW.329 !script blink.chancreat
RAW.331 !script halt
RAW.332 !script blink.chantopic
RAW.333 !script blink.chantopicset
;RAW.366 !script blink.chanjoin


;AWAY
RAW.305 <pre> <c1>(<c3>Back<c1>) <c2>You are no longer away<c1>.
RAW.306 <pre> <c1>(<c3>Away<c1>) <c2>You are now away<c1>.

;MOTD
RAW.375 !script blink.motd1
RAW.372 !script $iif(%blender.motd == on,%:echo $blink.wa(5,80,$+(,%::c3,³ÿ,,%::c2,³,,%::c3,ÿ,%::text)),halt)
RAW.376 !script blink.motd2

;ERRORS
RAW.401 <pre> <c2>Error<c1>:<c3> No such nickname <c1>(<c3><nick><c1>)
RAW.403 <pre> <c2>Error<c1>:<c3> No such channel <c1>(<c3><chan><c1>)
RAW.404 <pre> <c2>Error<c1>:<c3> Unable to send message to <c1>(<c3><chan><c1>)

raw.405 <pre> <c2>Error<c1>:<c3> Cannot Join <chan> <c1>(<c3>You are on too many<c1>)
raw.406 <pre> <c2>Error<c1>:<c3> No such nickname <c1>(<c3><nick><c1>)
RAW.421 <pre> <c2>Error<c1>:<c3> Invalid Command <c1>(<c3><value><c1>)
raw.432 <pre> <c2>Error<c1>:<c3> Invalid Nickname <c1>(<c3><nick><c1>) 
RAW.433 <pre> <c2>Error<c1>:<c3> Nick already in use <c1>(<c3><nick><c1>)

raw.436 <pre> <c2>Error<c1>:<c3> Nick collision with <c1>(<c3><nick><c1>)
raw.438 <pre> <c2>Error<c1>:<c3> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> <c2>Error<c1>:<c3> Nickname changed too fast, please wait a while and try again...
raw.441 <pre> <c2>Error<c1>:<c3> <nick> is not on <c1>(<c3><chan><c1>)
raw.442 <pre> <c2>Error<c1>:<c3> You're not on <c1>(<c3><chan><c1>)
raw.443 <pre> <c2>Error<c1>:<c3> <nick> is already on <c1>(<c3><chan><c1>)

raw.461 <pre> <c2>Error<c1>:<c3> More parameters needed for <c1>(<c3><text><c1>)
raw.465 <pre> <c2>Error<c1>:<c3> Sorry, You're banned from this server.

raw.467 <pre> <c2>Error<c1>:<c3> Cannot Join <chan> <c1>(<c3>its keyed <c1>+<c3>k<c1>)
RAW.471 <pre> <c2>Error<c1>:<c3> Cannot Join <chan> <c1>(<c3>its full <c1>+<c3>l<c1>)
raw.472 <pre> <c2>Error<c1>:<c3> Unknown character<c1>: <c1>(<c3><text><c1>)
RAW.473 <pre> <c2>Error<c1>:<c3> Cannot Join <chan> <c1>(<c3>invite only <c1>+<c3>i<c1>)
RAW.474 <pre> <c2>Error<c1>:<c3> Cannot Join <chan> <c1>(<c3>you are banned <c1>+<c3>b<c1>)
RAW.475 <pre> <c2>Error<c1>:<c3> Cannot Join <chan> <c1>(<c3>requires key <c1>+<c3>k<c1>)
raw.478 <pre> <c2>Error<c1>:<c3> Cannot ban <text> <c1>(<c3>banlist is full<c1>)
RAW.482 <pre> <c2>Error:<c3> You're not opped on <c1>(<c3><chan><c1>)

Colors 1,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,09,1,9,1,09
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 177,217,252 91,173,246 7,123,228 0,0,255 255,0,255 112,112,112 160,160,160



; Regular text, nickname or channel, highlighted text, and brackets
BASECOLORS 11,10,09,09

CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09

ClineCharOwner 12.
ClineCharOP 12@
ClineCharHOP 18%
ClineCharVoice 34+ 

;You can use Font name,size (can be negative to correspond with mIRC
;font size dialog), B (for bold)

FONTDEFAULT Bright,10
FONTCHAN Bright,10
FONTQUERY Bright,10



;Note that this theme does not use images, sounds, 



scheme1 default - white txt
scheme2 blue
scheme3 black - green
scheme4 black - cyan (blended)
scheme5 black - blue
scheme6 black - red
scheme7 black - orange
scheme8 *black - orange2 
scheme9 white - orange
scheme10 white - blue
scheme11 clear - sky
scheme12 clear - lime
scheme13 clear - brick
scheme14 charcoal - orng
scheme15 charcoal - blue
scheme16 charcoal - grn
scheme17 charcoal - red
scheme18 grey - blue
scheme19 khaki
scheme20 night
scheme21 monochrome
scheme22 storm
scheme23 blood
scheme24 *blood2
scheme25 *ice
scheme26 *murky
scheme27 *camo


;scheme clear - plain
;scheme grey - orange
;edge-oragen

[scheme1]
BASECOLORS 11,10,09,00
Prefix 09ð10ð11ð
Colors 1,11,11,11,11,11,11,11,11,11,11,00,11,11,11,00,11,11,11,11,11,1,9,1,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 177,217,252 91,173,246 7,123,228 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09


[scheme2]
BASECOLORS 11,10,09,00
Prefix 09ð10ð11ð
Colors 2,09,09,09,09,09,09,09,09,09,09,00,09,09,09,00,09,09,09,09,09,2,9,2,09
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 177,217,252 91,173,246 7,123,228 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09



[scheme3]
BaseColors 03,14,15,13
Prefix 15ð14ð03ð
Colors 1,15,15,15,15,15,15,15,15,15,15,13,15,15,15,13,15,15,15,15,15,1,13,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 112,112,112 160,160,160
CLineOwner 03
CLineOP 03
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 03


[scheme4]
BASECOLORS 11,10,09,00
Prefix 09ð10ð11ð
Colors 1,11,11,9,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1,9,1,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,213,213 0,164,164 0,121,121 0,0,255 255,0,255 112,112,112 208,208,208
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09

[scheme5]
BaseColors 11,14,15,13
Prefix 15ð14ð11ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,11,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 11


[scheme6]
BaseColors 04,14,15,13
Prefix 15ð14ð04ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,03,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 112,112,112 160,160,160
CLineOwner 04
CLineOP 04
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 04

[scheme7]
BaseColors 07,14,15,13
Prefix 15ð14ð07ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,07,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 112,112,112 160,160,160
CLineOwner 07
CLineOP 07
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 07

[scheme8]
BASECOLORS 11,07,09,15
Prefix 09ð07ð11ð
Colors 1,11,11,9,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1,9,1,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 255,193,172 91,173,246 202,101,0 0,0,255 255,0,255 112,112,112 208,208,208
CLineOwner 11
CLineOP 11
CLineHOP 07
CLineVoice 07
CLineRegular 09
CLineMe 09


[scheme9]
BaseColors 07,14,15,13
Prefix 15ð14ð07ð
Colors 0,15,15,15,15,15,15,15,15,15,15,13,15,15,15,13,15,15,15,15,15,0,07,0,07
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,155,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 121,121,121 88,88,88 155,155,155
CLineOwner 07
CLineOP 07
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 07

[scheme10]
BaseColors 11,14,15,13
Prefix 15ð14ð11ð
Colors 0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,11,0,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,88,152 0,0,255 121,121,121 88,88,88 155,155,155
CLineOwner 11
CLineOP 11
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 11

[scheme11]
BaseColors 10,10,11,01
Prefix 10ð11ð01ð
Colors 0,11,11,10,11,11,11,11,11,11,11,01,11,11,11,01,11,11,11,11,11,0,01,0,11
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,117,255 0,54,117 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 10
CLineOP 10
CLineHOP 11
CLineVoice 11
CLineRegular 01
CLineMe 01

[scheme12]
BaseColors 09,09,03,01
Prefix 09ð03ð01ð
Colors 0,03,03,09,03,03,03,03,03,03,03,01,03,03,03,01,03,03,03,03,03,0,01,0,03
RGBColors 255,255,255 0,0,0 0,0,127 48,123,54 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 22,195,33 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
CLineOwner 09
CLineOP 09
CLineHOP 03
CLineVoice 03
CLineRegular 01
CLineMe 01



[scheme13]
BaseColors 04,04,05,01
Prefix 04ð05ð01ð
Colors 0,05,05,09,05,05,05,05,05,05,05,01,05,05,05,01,05,05,05,05,05,0,01,0,05
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,9,9 148,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210
CLineOwner 04
CLineOP 04
CLineHOP 05
CLineVoice 05
CLineRegular 01
CLineMe 01



[scheme14]
BaseColors 07,14,15,00
Prefix 15ð14ð07ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,07,1,15
RGBColors 255,255,255 52,52,52 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,155,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 174,174,174 220,220,220
CLineOwner 07
CLineOP 07
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 07

[scheme15]
BaseColors 07,14,15,00
Prefix 15ð14ð07ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,07,1,15
RGBColors 255,255,255 52,52,52 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 54,155,246 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 174,174,174 220,220,220
CLineOwner 07
CLineOP 07
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 07

[scheme16]
BaseColors 09,14,15,00
Prefix 15ð14ð09ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,09,1,15
RGBColors 255,255,255 52,52,52 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,155,0 255,255,0 84,216,0 0,144,144 0,128,192 0,0,255 208,208,208 174,174,174 220,220,220
CLineOwner 09
CLineOP 09
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 09

[scheme17]
BaseColors 04,14,15,00
Prefix 15ð14ð04ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,04,1,15
RGBColors 255,255,255 52,52,52 0,0,128 0,144,0 248,0,0 128,0,0 160,0,160 255,155,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 174,174,174 220,220,220
CLineOwner 04
CLineOP 04
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 04


[scheme18]
BaseColors 11,14,15,13
Prefix 15ð14ð11ð
Colors 0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,11,0,15
RGBColors 233,233,233 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,88,152 0,0,255 121,121,121 88,88,88 155,155,155
CLineOwner 11
CLineOP 11
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 11


[scheme19]
BaseColors 11,10,09,15
Prefix 09ð10ð11ð
Colors 13,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,13,11,13,15
RGBColors 233,233,233 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 177,165,122 162,148,91 67,83,11 0,0,255 241,241,227 88,88,88 138,128,116
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 15

;RGBColors 233,233,233 0,0,0 0,0,128 67,56,11 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 67,56,11 144,144,128 241,241,227 88,88,88 133,128,116


[scheme20]
BASECOLORS 11,10,09,00
Prefix 09ð10ð11ð
Colors 1,09,09,09,09,09,09,09,09,09,09,10,09,09,09,10,09,09,09,09,09,1,9,1,09
RGBColors 240,240,240 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 208,200,249 188,172,244 115,128,176 78,90,133 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09

[scheme21]
BaseColors 14,15,13,00
Prefix 13ð15ð14ð
Colors 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,14,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,128,192 0,0,255 208,208,208 112,112,112 160,160,160
CLineOwner 14
CLineOP 14
CLineHOP 15
CLineVoice 15
CLineRegular 13
CLineMe 13

[scheme22]
BaseColors 11,10,00,15
Prefix 00ð10ð11ð
Colors 2,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,2,10,2,15
RGBColors 245,245,245 0,0,0 51,72,94 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 160,204,230 148,170,192 0,0,255 121,121,121 88,88,88 221,221,221
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 00
CLineMe 10



[scheme23]
BASECOLORS 05,10,09,04
Prefix 09ð10ð05ð
Colors 1,09,09,09,09,09,09,09,09,09,09,00,09,09,09,00,09,09,09,09,09,1,9,1,09
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 118,0,0 160,0,160 232,75,0 255,255,0 215,0,0 160,0,0 7,123,228 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 05
CLineOP 05
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09




[scheme24]
BASECOLORS 05,04,11,11
Prefix 11ð04ð05ð
Colors 1,11,11,9,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1,4,1,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 207,0,0 157,0,0 160,0,160 255,128,0 255,255,0 177,217,252 91,173,246 255,45,45 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 09
CLineVoice 09
CLineRegular 10
CLineMe 09


[scheme25]
BaseColors 11,10,12,13
Prefix 12ð10ð11ð
Colors 0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,11,0,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 45,133,197 0,88,152 133,152,168 104,123,139 88,88,88 155,155,155
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 12
CLineMe 12

[scheme26]
BaseColors 11,10,09,15
Prefix 09ð10ð10ð
Colors 3,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,3,09,3,15
RGBColors 233,233,233 0,0,0 0,0,128 47,54,49 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0  144,163,150 121,136,126 77,87,81 0,0,255 255,0,255 88,88,88 155,155,155
CLineOwner 11
CLineOP 11
CLineHOP 14
CLineVoice 14
CLineRegular 15
CLineMe 11




[scheme27]
BASECOLORS 11,10,09,15
Prefix 09ð10ð11ð
Colors 1,11,11,9,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1,9,1,11
RGBColors 255,255,255 0,0,0 32,28,88 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 33,135,84 71,104,70 80,74,61 0,0,255 255,0,255 112,112,112 160,160,160
CLineOwner 11
CLineOP 11
CLineHOP 10
CLineVoice 10
CLineRegular 09
CLineMe 09
