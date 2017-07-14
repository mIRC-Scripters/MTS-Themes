; Fixed 'join errors'
; Fixed /names list alignment
; Fixed /silence and /mode #chan +b lists
; Fixed RAW 301
; Fixed common channel number in whowases ;)
; Fixed underlined texts in the dialog
; Fixed on-load variables
; Now strips bold characters to keep the alignment
; Removed support for unrecognized connection raws for the /linesep's used in the engines.
; Notifies show the notes if any
; Added option to show clones in whoises
; Added option to hide the /names list on-joins
; Added/Changed some other raws
; Redesigned the dialog
; Added options to align nicks in the channels
; Added option to hide excess whowas replies

[mts]
Name Garbage
Author Allied
Email allied@mynet.com
Website http://www.mynet.com
Description Garbage is a high ASCII theme that uses the font IBMPC for boxes,alignments etc.Changing the font makes its name real!
SCRIPT Garbage.mrc
Version 1.21
MTSVersion 1.10

FontDefault IBMPC,12
FontChan IBMPC,12
FontQuery IBMPC,12

Colors 1,15,4,0,15,15,15,4,4,4,4,15,4,4,15,0,4,4,4,15,15,1,15,1,15,0
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 74,197,255 0,128,192 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,0,0 128,0,0 72,12,0 128,128,128 208,208,208
BaseColors 15,15,00,14

CLineOwner 04
CLineOP 04
CLineHOP 05
CLineVoice 05
CLineRegular 15
CLineMe 00
CLineFriend 06
CLineEnemy 08
CLineIrcOP 07
CLineCharOwner 04.
CLineCharOP 04@
CLineCharHOP 05%
CLineCharVoice 05+

Prefix ÿ5(û5)ÿ
Timestamp ON
TimestampFormat 14(15HH14:15nn14:15ss14)
ParenText 14[15<text>14]

Load !Script Garbage.load
Unload !Script %:echo %::pre Cleaned out the Garbage

TextChan !Script %:echo $Garbage.nick(0,0,1) $+ 00: %::text
TextChanSelf !Script %:echo $Garbage.nick(0,1,1) $+ 00: %::text
TextQuery !Script %:echo $+($Garbage.align(15 $+ %::nick,$iif($len(%::me) > $len(%::nick),$ifmatch),1),:) %::text
TextQuerySelf !Script %:echo $+($Garbage.align(00 $+ %::me,$iif($len(%::nick) > $len(%::me),$ifmatch),1),:) %::text
TextMsg !Script %:echo %::pre ÿÿÿ14MSG: $+(15,%::nick,) %::text
TextMsgSelf !Script %:echo %::pre ÿÿÿ14MSG: to $+(15,%::nick,) %::text

ActionChan !Script %:echo * $Garbage.nick %::text
ActionChanSelf !Script %:echo * $Garbage.nick(0,1) %::text
ActionQuery !Script %:echo * $+(15,%::nick,) %::text
ActionQuerySelf !Script %:echo * $+(00,%::me,) %::text

Notice !Script %:echo %::pre 14NOTICE: $+(15,%::nick,) %::text
NoticeSelf !Script %:echo %::pre 14NOTICE: to $+(15,%::nick,) %::text
NoticeChan !Script %:echo %::pre 14NOTICE: $+($Garbage.nick,:15,%::target,) %::text
NoticeSelfChan !Script %:echo %::pre 14NOTICE: to $+(15,%::target,) %::text
NoticeServer !Script %:echo [S] $iif($gettok(%::text,1,32) == ***,$deltok(%::text,1,32),%::text)

Join !Script Garbage.Join
Part !Script Garbage.Part
Kick !Script Garbage.Kick
Quit !Script Garbage.Quit
Nick !Script Garbage.NickChange
Invite !Script %:echo %::pre 14Invite: $Garbage.nick(1) to $+(15,%::chan,) %:comments
Rejoin !Script %:echo %::pre 14Rejoin: $+(15,%::chan,)
JoinSelf !Script %:::joinself.ticks. [ $+ [ %::chan ] ] = $ticks
KickSelf !Script %:echo %::pre You were kicked from $+(15,%::chan,) by $Garbage.nick(1) %::parentext %:comments
NickSelf !Script %:echo %::pre 14Nick: $+(15,%::newnick,) $iif(%::address,$+(14[,$ifmatch,14])) %:comments

Mode !Script Garbage.Mode
Topic !Script %:echo %::pre ÿ14Topic: %::text 14by $Garbage.nick %:comments
ModeUser !Script %:echo %::pre 14Usermode: %::modes
Notify !Script %:echo %::pre 14Notify: $+(15,%::nick,) $iif(%::address,$+(14[,$ifmatch,14])) is ONLINE %::parentext %:comments
UNotify !Script %:echo %::pre 14Notify: $+(15,%::nick,) $iif(%::address,$+(14[,$ifmatch,14])) is offline %::parentext %:comments

CTCP !Script %:echo %::pre ÿÿ14CTCP: $+(15,%::nick,) %::ctcp %::text
CTCPSelf !Script %:echo %::pre ÿÿ14CTCP: to $+(15,%::nick,) %::ctcp %::text
CTCPChan !Script %:echo %::pre ÿÿ14CTCP: $+($IRCplus.nick,:15,%::chan,) %::ctcp %::text
CTCPChanSelf !Script %:echo %::pre ÿÿ14CTCP: to $+(15,%::chan,) %::ctcp %::text
CTCPReply !Script %:echo %::pre 14CTCPrp: $+(15,%::nick,,$iif(%::chan,$+(:15,%::chan,))) %::ctcp %::text
CTCPReplySelf !Script %:echo %::pre 14CTCPrp: to $+(15,%::nick,%::chan,) %::ctcp %::text

Wallop !Script %:echo %::pre 14Wallop: $+(15,%::nick,) %::text
ServerError !Script %:echo %::pre ÿ14Error: %::text

Echo !Script %:echo %::pre %::text
EchoTarget !Script %:echo %::pre %::text
Error !Script %:echo %::pre ÿ14Error: %::text

RAW.001 !Script Garbage.RAW001
RAW.002 !Script _dummy_ $Garbage.boxtext(ÿÿ14Version:,%::value)
RAW.003 !Script _dummy_ $Garbage.boxtext(ÿ14Creation:,%::value)
RAW.004 !Script $iif($len(%::text),_dummy_ $Garbage.boxtext(ÿÿÿÿ14Modes:,%::text))
RAW.005 !Script Garbage.RAW005

RAW.251 !Script Garbage.RAW251
RAW.252 !Script _dummy_ $Garbage.boxtext(ÿÿÿ14IRCops:,$Garbage.align($+(04,%::value,),6,1) $Garbage.align($Garbage.round($calc(%::value /%:::lusers.total *100),5) $+ $chr(37),39,1),-1)
RAW.253 !Script _dummy_ $Garbage.boxtext(ÿÿ14Unknown:,$Garbage.align($+(04,%::value,),6,1) $Garbage.align($Garbage.round($calc(%::value /%:::lusers.total *100),5) $+ $chr(37),39,1),-1)
RAW.254 !Script _dummy_ $Garbage.boxtext(ÿ14Channels:,$Garbage.align($+(04,%::value,),6,1) $Garbage.align($Garbage.round($calc(%::value /%:::lusers.total *100),5) $+ $chr(37),39,1),-1)
RAW.255 !Script halt
RAW.265 !Script _dummy_ $Garbage.boxtext(ÿÿÿÿ14Local:,$+($Garbage.align($+(04,%::users,),6,1),/,$Garbage.align($+(04,%::value,),6) $Garbage.align($Garbage.round($calc(%::users /%::value *100),5) $+ $chr(37),32,1)),-1)
RAW.266 !Script Garbage.RAW266

RAW.375 !Script Garbage.RAW375
RAW.372 !Script _dummy_ $Garbage.boxtext($null,%::text)
RAW.376 !Script Garbage.RAW376

RAW.301 !Script Garbage.RAW301
RAW.307 !Script _dummy_ $Garbage.boxtext(ÿÿÿ14Regged:,%::nick is a registered nick,61)
RAW.311 !Script Garbage.RAW311 /whois
RAW.312 !Script Garbage.RAW312
RAW.313 !Script _dummy_ $Garbage.boxtext(ÿÿÿÿ4IRCop:,%::nick %::operline,61)
RAW.314 !Script Garbage.RAW311 /whowas
RAW.317 !Script Garbage.RAW317
RAW.318 !Script Garbage.RAW318 whois
RAW.319 !Script Garbage.RAW319
RAW.369 !Script Garbage.RAW318 whowas

RAW.315 !Script Garbage.RAW315
RAW.352 !Script Garbage.RAW352

RAW.256 !Script Garbage.RAW256
RAW.257 !Script _dummy_ $Garbage.boxtext(ÿÿÿÿÿ14Name:,%::text,61)
RAW.258 !Script _dummy_ $Garbage.boxtext(ÿÿÿÿÿ14Nick:,%::text,61)
RAW.259 !Script Garbage.RAW259

RAW.271 !Script Garbage.RAW271
RAW.272 !Script Garbage.RAW272

RAW.221 !Script %:echo %::pre 14Usermode: %::text
RAW.250 !Script %:echo %::pre 14Total connections: $+(04,%::value)
RAW.302 !Script %:echo %::pre 14Userhost: $+(,$iif(* isin 07,15),%::nick 14[,%::address,14])
RAW.305 !Script %:echo %::pre 14Away: You are set back
RAW.306 !Script %:echo %::pre 14Away: You are set away
RAW.341 !Script %:echo %::pre $+(15,%::nick,) has been invited to $+(15,%::chan,)
RAW.381 !Script %:echo %::pre ÿÿÿ14IRCop15: %::text
RAW.391 !Script %:echo %::pre 14Date: %::text

RAW.324 !Script Garbage.RAW324
RAW.329 !Script Garbage.RAW329
RAW.330 !Script _dummy_ $Garbage.boxtext(ÿÿÿÿ14WebSite:,$deltok(%::text,1,32),61)
RAW.331 !Script Garbage.RAW331
RAW.332 !Script Garbage.RAW332
RAW.333 !Script Garbage.RAW333

RAW.353 !Script Garbage.RAW353
RAW.366 !Script Garbage.RAW366

RAW.367 !Script Garbage.RAW367
RAW.368 !Script Garbage.RAW368

RAW.371 !Script Garbage.RAW371
RAW.374 !Script Garbage.RAW374

RAW.401 !Script %:echo %::pre No such nick $+(15,%::nick,)
RAW.403 !Script %:echo %::pre No such channel $+(15,%::chan,)
RAW.404 !Script %:echo %::pre Can't send to $+(15,%::chan,)
RAW.405 !Script %:echo %::pre Can't join $+(15,%::chan) 14[you are on too many14]
RAW.406 !Script %:echo %::pre No such nick $+(15,%::nick,) for whowas
RAW.421 !Script %:echo %::pre Invalid command $+(15,%::value,)
RAW.433 !Script %:echo %::pre $+(Nick14[15,%::nick,14]) is already in use
RAW.436 !Script %:echo %::pre Nick collision with $+(15,%::nick,)
RAW.438 !Script %:echo %::pre Can't change nick 14[Nick change too fast14]
RAW.439 !Script %:echo %::pre Target change too fast
RAW.441 !Script %:echo %::pre Nick $+(15,%::nick,) isn't on $+(15,%::chan,)
RAW.442 !Script %:echo %::pre You aren't on $+(15,%::chan,)
RAW.443 !Script %:echo %::pre Nick $+(15,%::nick,) is already on $+(15,%::chan,)
RAW.461 !Script %:echo %::pre Can't perform command $+(15,%::text,) 14[Insufficient parameters14]
RAW.465 !Script %:echo %::pre You are banned from this server
RAW.467 !Script %:echo %::pre Can't set key on $+(15,%::chan,) 14[It's already set14]
RAW.471 !Script %:echo %::pre Can't join $+(15,%::chan) 14[+l14]
RAW.472 !Script %:echo %::pre $+(15,%::value,) %::text
RAW.473 !Script %:echo %::pre Can't join $+(15,%::chan) 14[+i14]
RAW.474 !Script %:echo %::pre Can't join $+(15,%::chan) 14[+b14]
RAW.475 !Script %:echo %::pre Can't join $+(15,%::chan) 14[+k14]
RAW.477 !Script %:echo %::pre Can't join $+(15,%::chan) 14[+R14]
RAW.478 !Script %:echo %::pre Can't ban $+(15,%::nick) on $+(15,%::chan) 14[Banlist is full14]
RAW.482 !Script %:echo %::pre You aren't opped on $+(15,%::chan)
RAW.511 !Script %:echo %::pre Can't silence %::text 14[Silence list is full14]
RAW.Other !Script Garbage.RAWOther

Scheme1 The Blues
Scheme2 Redden
Scheme3 Ashen
Scheme4 Blue Blood
Scheme5 Color-blind

[Scheme1]
RGBColors 255,255,255 32,28,88 0,0,128 0,144,0 74,197,255 0,128,192 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,0,0 128,0,0 72,12,0 128,128,128 208,208,208

[Scheme2]
Colors 13,15,4,0,15,15,15,4,4,4,4,15,4,4,15,0,4,4,4,15,15,1,15,1,15,0
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,128,192 72,12,0 128,128,128 208,208,208

[Scheme3]
Colors 1,15,4,0,15,15,15,4,4,4,4,15,4,4,15,0,4,4,4,15,15,1,15,1,15,0
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,128,192 72,12,0 128,128,128 208,208,208

[Scheme4]
RGBColors 255,255,255 32,28,88 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,128,192 72,12,0 128,128,128 208,208,208

[Scheme5]
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 208,208,208 128,128,128 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,0,0 128,0,0 72,12,0 128,128,128 208,208,208