[mts]
Name Eistee
Author Eistee
Email none
Website http://www.mircscripts.org/comments.php?id=1503
Description Advanced Theme by Eistee have fun :)		Added Some more RAW handlings		Adden Dark Scheme			Fixed Some bugs					Thx to my Betatester CruNcher
Version 1.1
MTSVersion 1.1

Colors 0,2,4,7,12,2,10,3,4,3,3,1,14,7,6,1,12,12,10,5,2,0,1,15,1,14
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 01,02,03,04

CLineOwner 04
CLineOP 02
CLineHOP 10
CLineVoice 03
CLineMe 12
CLineFriend 07
CLineEnemy 05
CLineIrcOP 06

CLineCharOwner 04*
CLineCharOP 02@
CLineCharHOP 10%
CLineCharVoice 03+

FontDefault Lucida Console,12
FontChan Lucida Console,12
FontQuery Lucida Console,12

Prefix  12•02•01•
ParenText 01(<text>01)
Timestamp OFF
TimestampFormat  14HH:nn:ss
Script Eistee.mrc

TextChan        !script %:echo $timestamp $+   $Eistee.nick(%::nick,%::chan) $+ : %::text
TextChanSelf    !script %:echo $timestamp $+   $Eistee.nick(%::me,%::chan) $+ : %::text
ActionChan      !script %:echo $timestamp • $+ $Eistee.nick(%::nick,%::chan) $+   %::text
ActionChanSelf  !script %:echo $timestamp • $+ $Eistee.nick(%::me,%::chan) $+   %::text
NoticeChan      !script %:echo $timestamp « $+ $Eistee.nick(%::nick,%::chan) $+ %::chan $+ : %::text
Notice          !script %:echo $timestamp « $+ $Eistee.nick(%::nick,%::chan) $+ : %::text
NoticeSelf      !script %:echo $timestamp » $+ $Eistee.nick(%::nick,%::chan) $+ : %::text
NoticeSelfChan  !script %:echo $timestamp » $+ $Eistee.nick(%::me,%::chan) $+ %::chan $+ : %::text
TextQuery       !script %:echo $timestamp $+   $Eistee.nick(%::nick) $+ : %::text
TextQuerySelf   !script %:echo $timestamp $+   $Eistee.nick(%::me) $+ : %::text
ActionQuery     !script %:echo $timestamp • $+ $Eistee.nick(%::nick) $+   %::text
ActionQuerySelf !script %:echo $timestamp • $+ $Eistee.nick(%::me) $+   %::text
TextMsg         !script %:echo $timestamp « $+ $Eistee.nick(%::target) $+ : %::text
TextMsgSelf     !script %:echo $timestamp » $+ $Eistee.nick(%::target) $+ : %::text

Mode          !script %:echo $timestamp $Eistee.pre(03, ) mode $Eistee.nick(%::nick,%::chan) sets01: $Eistee.mode(%::modes)
ModeUser      !script %:echo $timestamp $Eistee.pre(03, ) mode $Eistee.nick(%::me,%::chan) sets01: $Eistee.mode(%::modes)
Join          !script %:echo $timestamp $Eistee.pre(03, ) join $Eistee.nick(%::nick,%::chan) $Eistee.address(%::address) $Eistee.chan(%::chan)
JoinSelf      !script %:echo $timestamp $Eistee.pre(03, ) join $Eistee.nick(%::me,%::chan) $Eistee.address(%::address) $Eistee.chan(%::chan)
Part          !script %:echo $timestamp $Eistee.pre(02, ) part $Eistee.nick(%::nick,%::chan) $Eistee.address(%::address) $Eistee.chan(%::chan) %::parentext
Kick          !script %:echo $timestamp $Eistee.pre(04, ) kick $Eistee.nick(%::knick,%::chan) $Eistee.address(%::kaddress) $Eistee.chan(%::chan) by $Eistee.nick(%::nick,%::chan) %::parentext
KickSelf      !script %:echo $timestamp $Eistee.pre(04, ) kick $Eistee.nick(%::knick,%::chan) $Eistee.address(%::kaddress) $Eistee.chan(%::chan) by $Eistee.nick(%::nick,%::chan) %::parentext
Quit          !script %:echo $timestamp $Eistee.pre(02, ) quit $Eistee.nick(%::nick,%::chan) $Eistee.address(%::address) $Eistee.chan(%::chan) %::parentext
Topic         !script %:echo $timestamp $Eistee.pre(10, ) topic changed by $Eistee.nick(%::nick,%::chan) to01: $Eistee.mode(%::text)
Nick          !script %:echo $timestamp $Eistee.pre(03, ) nick $Eistee.nick(%::nick,%::chan) is now known as $Eistee.nick(%::newnick,%::chan)
NickSelf      !script %:echo $timestamp $Eistee.pre(03, ) nick $Eistee.nick(%::nick,%::chan) is now known as $Eistee.nick(%::newnick,%::chan)
Invite        !script %:echo $timestamp $Eistee.pre(10, ) invite $Eistee.nick(%::nick,%::chan) $Eistee.address(%::address) $Eistee.chan(%::chan)
ServerError   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error($replace(%::text,:,$+(,$color(Normal text).dd,:,$color(Kick text).dd),$chr(40),$+(,$color(Normal text).dd,$chr(40),,$color(Kick text).dd),$chr(41),$+(,$color(Normal text).dd,$chr(41),,$color(Kick text).dd),$chr(91),$+(,$color(Normal text).dd,$chr(91),,$color(Kick text).dd),$chr(93),$+(,$color(Normal text).dd,$chr(93),,$color(Kick text).dd)))
Rejoin        !script %:echo $timestamp $Eistee.pre(02, ) Attempting to rejoin $Eistee.chan(%::chan)
Ctcp          !script %:echo $timestamp $Eistee.pre(04,«) ctcp $Eistee.nick(%::nick,%::chan) $Eistee.mode(%::ctcp) request %::parentext
CtcpChan      !script %:echo $timestamp $Eistee.pre(04,«) ctcp $Eistee.nick(%::nick,%::chan) $Eistee.chan(%::chan) $Eistee.mode(%::ctcp) request %::parentext
CtcpSelf      !script %:echo $timestamp $Eistee.pre(04,») ctcp $Eistee.nick(%::nick,%::chan) $Eistee.mode(%::ctcp) request %::parentext
CtcpChanSelf  !script %:echo $timestamp $Eistee.pre(04,») ctcp $Eistee.chan(%::chan) $Eistee.mode(%::ctcp) request %::parentext
CtcpReply     !script %:echo $timestamp $Eistee.pre(04,«) ctcp $Eistee.mode(%::ctcp) reply from $Eistee.nick(%::nick,%::chan) %::parentext
CtcpReplySelf !script %:echo $timestamp $Eistee.pre(04,») ctcp $Eistee.nick(%::nick,%::chan) $Eistee.mode(%::ctcp) reply %::parentext
Notify        !script %:echo $timestamp $Eistee.pre(07, ) $Eistee.nick(%::nick) $iif(@ isin %::address,$Eistee.address(%::address)) is on IRC %::parentext
UNotify       !script %:echo $timestamp $Eistee.pre(07, ) $Eistee.nick(%::nick) $iif(@ isin %::address,$Eistee.address(%::address)) has left IRC %::parentext
Wallop        !script %:echo $timestamp n $+ $Eistee.nick(%::nick) $+ : %::text
NoticeServer  !script %:echo $timestamp $iif((%::target == AUTH),$Eistee.pre(02, ) $+(02,$chr(40),12,%::target,02,$chr(41),) $remove(%::text,***,--),$Eistee.pre(02, ) $+(02,$chr(40),12,%::nick,02,$chr(41),) $remove(%::text,***,--))

DNS        !script %:echo $timestamp $Eistee.pre(02, ) dns $iif(%::nick,$Eistee.nick(%::nick)) $Eistee.address(%::address) Looking up ...
DNSError   !script %:echo $timestamp $Eistee.pre(02, ) dns $Eistee.address(%::address) Unable to resolve
DNSResolve !script %:echo $timestamp $Eistee.pre(02, ) dns $Eistee.address(%::address) Resolved to $Eistee.address(%::raddress)
Echo       !script %:echo $timestamp $Eistee.pre(02, ) %::text
EchoTarget !script %:echo $timestamp $Eistee.pre(02, ) %::text
Error      !script %:echo $timestamp $Eistee.pre(04, ) %::text
;Load 
;Unload 

RAW.301 !script
RAW.307 !script set %::reg %::text
RAW.309 !script set %::lang %::text
RAW.310 !script set %::help %::text
RAW.311 !script
RAW.312 !script
RAW.313 !script
RAW.314 !script
RAW.317 !script
RAW.318 !script Eistee.who.end %::nick
RAW.319 !script
RAW.320 !script set %::sec %::text
RAW.335 !script set %::bot %::text
RAW.369 !script Eistee.who.end %::nick
RAW.378 !script set %::from %::text
Whois   !script Eistee.whois
Whowas  !script Eistee.whowas

RAW.001   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) %::value $gettok(%::text,1- $+ $calc($numtok(%::text,32) - 1),32) $+(01,$chr(40),12,$replace($gettok(%::text,$numtok(%::text,32),32),!,14!12,@,14@12),01,$chr(41))
RAW.002   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Server host01:12 %::server running version01:12 %::value
RAW.003   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) This server was created on01:12 %::value
RAW.004   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Server version01:12 $gettok(%::text,1- $+ $calc($numtok(%::text,32) - 2),32) | %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Available user modes01:12 $gettok(%::text,$calc($numtok(%::text,32) - 1),32) | %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Available channel modes01:12 $gettok(%::text,$numtok(%::text,32),32)
RAW.005   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) %::value %::text
;RAW.006 MAP out
;RAW.007 MAP end
;RAW.212 STATS M
;RAW.219 STATS end
RAW.221 !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Current usermode- %::nick - %::modes - %::text
;RAW.242 Server Up 15 days, 13:30:34 STATS u
RAW.250 !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Total connections- %::value - %::text
RAW.251   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Users01:12 %::users Invisible01:12 %::text Servers01:12 %::value
RAW.252   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Operators online01:12 %::value
RAW.253   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Unknown connections01:12 %::value
RAW.254   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Number of channels01:12 %::value
RAW.255   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Local clients01:12 %::users servers01:12 %::value
;RAW.256 ADMIN head
;RAW.257 ADMIN owner
;RAW.258 ADMIN text
RAW.265   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Local users01:12 %::users $+ /12 $+ %::value
RAW.266   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) Global users01:12 %::users $+ /12 $+ %::value
;RAW.271 SILENCE list
;RAW.272 SILENCE end
;RAW.290 /helpop
;RAW.292 /helpop
RAW.302   !script %:echo $timestamp $Eistee.pre(2, ) $+(Userhost,$color(Normal text).dd,:) $Eistee.nick(%::nick) $Eistee.address(%::address) $iif((- isin %::value),04Away) $iif((+ isin %::value),03Online) $iif((* isin %::value),06IRCop)
;RAW.304 STATS b F
RAW.315   !script Eistee.who.end %::value
RAW.324   !script %:echo $timestamp $Eistee.pre(10, ) $Eistee.chan($+(,$color(Topic text).dd,%::chan)) $+(,$color(Topic text).dd,Mode:) $Eistee.mode($+(,$color(Topic text).dd,%::modes))
;RAW.321 LIST start
;RAW.322 LIST text
;RAW.323 LIST end
;RAW.328 Eistee #real-support :http://www.fuckup.org.uk/~larne/rules.html
RAW.329   !script %:echo $timestamp $Eistee.pre(10, ) $Eistee.chan($+(10,%::chan)) 10Formed: $Eistee.mode($+(10,$asctime(%::text,dd.mm.yyyy HH:nn:ss)))
RAW.331   !script %:echo $timestamp $Eistee.pre(10, ) $Eistee.chan(%::chan) Topic: $Eistee.mode(%::text)
RAW.332   !script %:echo $timestamp $Eistee.pre(10, ) $Eistee.chan(%::chan) Topic: $Eistee.mode(%::text)
RAW.333   !script %:echo $timestamp $Eistee.pre(10, ) $Eistee.chan(%::chan) Set by: $Eistee.nick(%::nick,%::chan) on $Eistee.mode(%::text)
RAW.341   !script %:echo $timestamp $Eistee.pre(10, ) 10invited 01(10 $+ %::nick $+ 01) (10 $+ $replace(%::address,@,14@10) $+ 01)10 to 01[10 $+ %::chan $+ 01]
RAW.346   !script %:echo $timestamp $Eistee.pre(2, ) invite $Eistee.chan(%::chan) set by $Eistee.nick($gettok(%::text,2,32),%::chan) on $asctime($gettok(%::text,3,32)) $Eistee.mode($gettok(%::text,1,32))
RAW.347   !script %:echo $timestamp $Eistee.pre(2, ) invite $Eistee.chan(%::chan) %::text
RAW.348   !script %:echo $timestamp $Eistee.pre(2, ) except $Eistee.chan(%::chan) set by $Eistee.nick($gettok(%::text,2,32),%::chan) on $asctime($gettok(%::text,3,32)) $Eistee.mode($gettok(%::text,1,32))
RAW.349   !script %:echo $timestamp $Eistee.pre(2, ) except $Eistee.chan(%::chan) %::text
RAW.351   !script %:echo $timestamp $Eistee.pre(2, ) 02(12INFO02) %::value %::text
RAW.352   !script Eistee.who
RAW.353   !script %:echo $timestamp $Eistee.pre(10, ) $Eistee.chan($+(10,%::chan)) 10Names: $Eistee.mode($+(10,$replace($gettok(%::text,2-,32),$chr(42),$+(06,$chr(42),10),$chr(64),$+(12,$chr(64),10),%,10%10,+,03+10)))
RAW.366   !script
RAW.367   !script %:echo $timestamp $Eistee.pre(2, ) ban $Eistee.chan(%::chan) set by $Eistee.nick($gettok(%::text,2,32),%::chan) on $asctime($gettok(%::text,3,32)) $Eistee.mode($gettok(%::text,1,32))
RAW.368   !script %:echo $timestamp $Eistee.pre(2, ) ban $Eistee.chan(%::chan) %::text
;RAW.371 INFO out
RAW.372   !script %:echo $timestamp $Eistee.pre(02, ) 02(12MOTD02) %::text
;RAW.374 INFO end
RAW.375   !script %:echo $timestamp $Eistee.pre(02, ) 02(12MOTD02) Start of MOTD 12············02············01············14············15············
RAW.376   !script %:echo $timestamp $Eistee.pre(02, ) 02(12MOTD02) End of MOTD 12·············02·············01············14············15············
RAW.377   !script %:echo $timestamp $Eistee.pre(02, ) 02(12NOTE02) %::value %::text
RAW.391   !script %:echo $timestamp $Eistee.pre(02, ) 02(12INFO02) Server Time01:12 %::text
RAW.401   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(No such nickname $Eistee.nick(%::nick).error)
RAW.402   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(No such server $Eistee.nick(%::nick).error)
RAW.403   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(No such channel $Eistee.chan(%::chan).error)
RAW.404   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Cannot send to channel $Eistee.chan(%::chan).error)
RAW.405   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(You have joined too many channels $Eistee.chan(%::chan).error)
RAW.406   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::text $Eistee.nick(%::value).error)
RAW.408   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(No such service $Eistee.nick(%::value).error)
RAW.409   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.412   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.421   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Unknown command01:04 / $+ %::value)
RAW.422   !script %:echo $timestamp $Eistee.pre(02, ) 02(12MOTD02) File is missing
RAW.430   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value $+ 01:04 %::text)
RAW.431   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.432   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error($replace(%::text,:,01:04) $Eistee.nick(%::value).error)
RAW.433   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(nick $Eistee.nick(%::nick).error is already in use.)
;RAW.434 RULES File missing
RAW.436   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Nickname collision KILL $Eistee.nick(%::nick).error)
RAW.437 <value> -=- <text>
RAW.438   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::text)
RAW.440   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error($Eistee.nick(%::nick).error %::text)
RAW.441   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error($Eistee.nick(%::nick).error is not on $Eistee.chan($gettok(%::text,1,32)).error)
RAW.442   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(You're not on $Eistee.chan(%::value).error)
RAW.443   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(invite $Eistee.nick(%::nick,$gettok(%::text,1,32)) $gettok(%::text,2-,32) $Eistee.chan($gettok(%::text,1,32)).error)
RAW.444   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::text $Eistee.nick(%::value).error)
RAW.460   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.461   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Not enough parameters01:04 / $+ %::value)
RAW.462   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.463   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.464   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.465   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.466   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.467   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.468   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::text $Eistee.chan(%::chan).error)
RAW.471   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Channel is full 05(04+l05) $Eistee.chan(%::chan).error)
RAW.473   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Channel is invite only 05(04+i05) $Eistee.chan(%::chan).error)
RAW.474   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Banned from channel 05(04+b05) $Eistee.chan(%::chan).error)
RAW.475   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Channel key required 05(04+k05) $Eistee.chan(%::chan).error)
RAW.477   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::text $Eistee.chan(%::chan).error)
RAW.478   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error($Eistee.chan(%::chan).error $gettok(%::text,2-,32) $Eistee.mode(%::value).error)
;RAW.480 Cannot knock on #chan (You're already there!)
RAW.481   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Permission Denied01:04 You're not an IRC operator.)
RAW.482   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(Not opped in $Eistee.chan(%::chan).error)
RAW.484   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::text $Eistee.chan(%::chan).error)
RAW.485   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(You're not channel owner of $Eistee.chan(%::chan).error)
RAW.491   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(No O-lines for your host.)
RAW.501   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
RAW.502   !script %:echo $timestamp $Eistee.pre(04, ) $Eistee.error(%::value %::text)
;RAW.607 WATCH end
RAW.Other !script %:echo $timestamp $Eistee.pre(02, ) %::text

Scheme1 Dark

[Scheme1]

RGBColors 255,255,255 0,0,0 0,0,255 0,192,0 255,96,96 160,0,0 192,0,192 255,192,64 255,255,0 64,255,64 0,192,192 0,255,255 128,128,255 255,0,255 128,128,128 208,208,208
Colors 1,11,4,7,12,11,10,9,4,9,9,0,15,7,13,0,11,11,10,6,11,1,0,1,0,14,13,1

CLineOP 12
CLineVoice 09
CLineMe 08
CLineIrcOP 13

CLineCharOP 12@
CLineCharVoice 09+

Prefix  12•11•00•
ParenText 00(<text>00)
TimestampFormat  15HH:nn:ss

Script Eistee_dark.mrc




;Fixes
;empty Topic
;parentext ctcp reply
;added some error handlings
;Unreal Chan +r join
