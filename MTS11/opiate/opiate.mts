[mts]
name Opiate
Author Djemi - Phrost / sulk
Email djemi84@ciudad.com.ar
Website www.djemi.com.ar
Description Opiate based on sulk's airc theme, dedicated to Phrosty. Enhaced version with new stuff! (Check the tstamp cschemes!)
Version 1.2
MTSVersion 1.1
Colors 1,6,4,5,2,14,3,14,4,14,14,15,5,7,6,0,14,14,14,5,14,1,0,1,15
RGBColors 255,255,255 0,0,0 43,186,255 128,255,128 255,81,81 153,77,77 255,128,255 255,167,79 255,255,0 0,252,0 0,74,149 185,185,255 0,0,252 255,0,255 127,127,127 210,210,210

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Script opiate.mrc
Load !Script sigma.opiate.onload

Scheme1 Prefix »
Scheme2 Prefix *
Scheme3 Prefix •
Scheme4 Prefix ›
Scheme5 Prefix --
Scheme6 Prefix .
Scheme7 Prefix :
Prefix ›
Timestamp OFF
Timestampformat
Parentext 2(14<text>2)

TextChan !script %:echo $sigma.opiate.time 2 $+ %sigma.opiate.u.l $+  $+ %::cmode $+ %::nick $+ 2 $+ %sigma.opiate.u.r $+ 15 %::text
TextChanSelf !script %:echo $sigma.opiate.time_me 3 $+ %sigma.opiate.me.l $+  $+ %::cmode $+ %::me $+ 3 $+ %sigma.opiate.me.r $+ 0 %::text
ActionChan !script %:echo 6 $+ $sigma.opiate.time 6 $+ %sigma.opiate.act %::cmode $+ %::nick %::text
ActionChanSelf !script %:echo 13 $+ $sigma.opiate.time_me 13 $+ %sigma.opiate.act %::cmode $+ %::me %::text
NoticeChan !script %:echo $sigma.opiate.time 5[ $+ %::cmode $+ %::nick $+ : $+ %::target $+ ] %::text
Notice !script %:echo $sigma.opiate.time 5[ $+ %::nick $+ ] %::text
NoticeSelf !script %:echo $sigma.opiate.time_me 5-> [ $+ %::target $+ ] %::text
NoticeSelfChan !script %:echo $sigma.opiate.time_me 5-> [ $+ %::target $+ ] %::text
TextQuery !script %:echo $sigma.opiate.time 2 $+ %sigma.opiate.me.l $+  $+ %::nick $+ 2 $+ %sigma.opiate.me.r $+  %::text
TextQuerySelf !script %:echo $sigma.opiate.time_me 3 $+ %sigma.opiate.me.l $+  $+ %::me $+ 3 $+ %sigma.opiate.me.r $+  %::text
ActionQuery !script %:echo 6 $+ $sigma.opiate.time 6 $+ %sigma.opiate.act %::nick $+ %sigma.opiate.act %::text
ActionQuerySelf !script %:echo 13 $+ $sigma.opiate.time_me 13 $+ %sigma.opiate.act %::me %::text
TextMsg !script %:echo $sigma.opiate.time 2 $+ %sigma.opiate.me.l $+  $+ %::nick $+ 2 $+ %sigma.opiate.me.r $+  %::text
TextMsgSelf !script %:echo $sigma.opiate.time_me 3 $+ %sigma.opiate.me.l $+  $+ %::me -> %::target $+ 3 $+ %sigma.opiate.me.r $+  %::text

Mode !script %:echo $sigma.opiate.time 3 $+ %::pre $+ 15 $+ %::pre 3[14mode3(15 $+ %::nick $+ 3)] 14sets15:3 $replace(%::modes,@,3@14,.,3.14,-,3-14,+,3+14)
ModeUser !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 15 $+ %::pre 3[15umode3(14 $+ %::nick $+ 3)] 15sets mode:3 %::modes
Join !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 14 $+ %::pre 3[15Join3(14 $+ %::chan $+ 3)]15 %::nick 3(14 $+ $replace(%::address,@,3@14,.,3.14,-,3-14) $+ 3) 
JoinSelf !Script %:echo 2 $+ %::pre $+ %::pre now in %::chan
Part !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 14 $+ %::pre 3[14Part3(15 $+ %::chan $+ 3)]14 %::nick 3(15 $+ $replace(%::address,@,3@15,.,3.15,-,3-15) $+ 3)
Kick !Script %:echo $sigma.opiate.time 4 $+ %::pre $+ %::pre 4(14kick4!15 $+ %::knick $+ 4)15 booted by14 %::nick 4(14 $+ %::text $+ 4)
KickSelf !Script %:echo $sigma.opiate.time 4 $+ %::pre $+ %::pre %text You were kicked from %::chan $+  by14 %::nick 4(14 $+ %::text $+ 4)
Quit !Script %:echo $sigma.opiate.time 2 $+ %::pre $+ 14 $+ %::pre 2[15Quit2(14 $+ %::nick $+ 2)] 14(2 $+ %::address $+ 14)14 Quit %::parentext
Topic !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 15 $+ %::pre 3[14topic3(15 $+ %::chan $+ 3)] 2 $+ %::nick 14changes %in topic to 3' $+ %::text $+ '
Nick !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 15 $+ %::pre 3(14nick3!15 $+ %::nick $+ 3) 15changed to3 %::newnick
NickSelf !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 15 $+ %::pre Your nick is now %::newnick
Invite !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 15 $+ %::pre 3[15invite3(14 $+ %::nick $+ 3)] 3(15 $+ %::address $+ 3)15 has invited on3 %::chan
Rejoin !Script %:echo 2 $+ %sigma.opiate.txt $+ %::pre Rejoined %::chan
Ctcp !Script %:echo $sigma.opiate.time 4[4 $+ %from %::ctcp $+ 4]4 %::text
CtcpChan !Script %:echo $sigma.opiate.time 4[14 $+ %::cmode $+ %::nick $+ 4:14 $+ %::chan $+  %::ctcp $+ 4] %::text
CtcpReply !Script %:echo $sigma.opiate.time 4 $+ %::pre $+ 14 $+ %::pre $+ 4 $+ %::pre 4[4 $+ %::nick $+ 14/4 $+ %::ctcp $+ ] reply4: %::text
Notify !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 14 $+ %::pre  $+ %::nick $+  is on IRC. %::parentext
UNotify !Script %:echo $sigma.opiate.time 3 $+ %::pre $+ 14 $+ %::pre  $+ %::nick $+  has left IRC. %::parentext
Wallops !Script %:echo $sigma.opiate.time ! $+ %::nick $+ ! %::text
NoticeServer !script %:echo $sigma.opiate.time 5[Server] %::text

Error 14<pre><pre><pre> 4ERROR: <text>

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 3
CLineRegular 0
CLineMe 4

RAW.311 !Script sigma.opiate.whois.start
RAW.319 !Script %:echo 3Chans15:14 $replace(%::chan,@,3@,+,2+)
RAW.312 !Script %:echo 3Server15:14 $replace(%::wserver,.,3.) 3( $+ %::serverinfo $+ 3)
RAW.301 !Script %:echo 3Away15:14 %::text
RAW.307 !Script %:echo 3Nick15:14 %::text
RAW.313 !Script %:echo 3Ircop15:14 %::operline
RAW.317 !Script %:echo 3Idle15:14 $duration(%::idletime) $+ , signed on $asctime($iif(%::signontime !isnum 1-,$ctime(%::signontime),%::signontime),mmm3 $+ $chr(44) 14dd @ HH3.14nn3.14ss)
RAW.338 !Script %:echo 3U@Host15:14 $replace($gettok(%::text,1,32),@,03@14,.,02.14,-,02-14) 3IP15:14 $replace($gettok(%::text,2,32),@,03@14,.,02.14,-,02-14)
RAW.330 !Script %:echo 3Undernet15:14 $gettok(%::text,2-,32) 3 $+ $gettok(%::text,1,32) $+ 
RAW.318 !Script %:echo 3¯¯¯14¯¯¯15¯¯3¯¯¯¯¯¯14¯¯15¯¯3¯¯¯¯¯14¯¯¯¯¯15¯¯¯3¯¯¯¯14¯¯¯¯¯3[15EOW: %::nick $+ 3]

RAW.353 !Script %:echo 15 %::chan 3 %::text
RAW.366 !Script %:echo 14 %::chan End of /NAMES list
RAW.302 !Script %:echo 14 %::pre $+ %::pre $+ %::pre Userhost: %::nick $+ $iif(* isin %::value,*) $+ = $+ $iif(- isin %::value,-) $+ %::address
RAW.305 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre $+ %::pre You've reappeared...
RAW.306 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre vanished...
RAW.331 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre No topic set
RAW.332 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre Topic is3.:: ' $+ $gettok(%::text,1-,32) $+ ' ::.
RAW.333 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre Topic Info3: %::text
RAW.341 !Script %:echo 3 $+ %::pre 15 $+ %::pre %::nick has been invited to %::chan
RAW.401 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre 3 $+ %::chan %::text
RAW.433 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre 3 $+ %::chan %::text
RAW.471 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre 3 $+ %::chan %::text
RAW.473 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre 3 $+ %::chan %::text
RAW.474 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre 3 $+ %::chan %::text
RAW.475 !Script %:echo $sigma.opiate.time 3 $+ %::pre 15 $+ %::pre 3 $+ %::chan %::text

[Scheme1]
Prefix »
[Scheme2]
Prefix *
[Scheme3]
Prefix •
[Scheme4]
Prefix ›
[Scheme5]
Prefix --
[Scheme6]
Prefix .
[Scheme7]
Prefix :
