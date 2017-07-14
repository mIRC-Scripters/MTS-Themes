[mts]
Name Cynatic
Author drago
EMail drago@cynatic.org
Website www.cynatic.org
Description Cynatic MTS theme. Made by drago, influence by many.
Version 1.22
MTSVersion 1.1
Script cynatic.mrc

Timestamp ON
TimestampFormat 1 hh:nn:sst

FontDefault Anonymous,9
FontQuery Anonymous,9
FontChan Anonymous,9

Colors 0,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLineOwner
CLineOP 01
CLineHOP 01
CLineVoice 14
CLineRegular 14
CLineEnemy 04
CLineMe 05

Prefix 7›
;Prefix 7Û  
ParentText (<text>)

TextChan !script %:echo $_cynspa(2) $_cyncalc(%::cmode $+ %::nick) %::pre %::text %:comments 
TextChanSelf  !script %:echo $_cynspa(2) $_cyncalc(%::cmode $+ %::me) %::pre %::text %:comments 
ActionChan !script %:echo $_cynspa(2) $_cyncalc(_action) %::cmode $+ %::nick %::pre %::text
ActionChanSelf !script %:echo $_cynspa(2) $_cyncalc(_action) %::cmode $+ %::me %::pre %::text

NoticeChan !script %:echo $_cynspa(2) $_cyncalc(_notice) %::nick $+ @ $+ %::chan %::text
Notice !script %:echo $_cynspa(2) $_cyncalc(_notice) ‹‹ %::nick %::text
NoticeSelf !script %:echo $_cynspa(2) $_cyncalc(_notice) ›› %::target %::text
NoticeSelfChan !script %:echo $_cynspa(2) $_cyncalc(_notice) ›› %::target %::text

TextQuery  !script %:echo $_cynspa(2) $_cyncalc(%::nick) %::pre %::text %:comments 
TextQuerySelf  !script %:echo $_cynspa(2) $_cyncalc(%::me) %::pre %::text %:comments 
ActionQuery !script %:echo $c_ynspa(2) $_cyncalc(_action) %::nick %::pre %::text
ActionQuerySelf !script %:echo $_cynspa(2) $_cyncalc(_action) %::me %::pre %::text
TextMsg !script %:echo $_cynspa(2) $_cyncalc(_msg) ‹‹ %::target %::text
TextMsgSelf !script %:echo $_cynspa(2) $_cyncalc(_msg) ›› %target %::text

Mode !script %:echo $_cynspa(2) $_cyncalc(_mode) %::nick sets mode %::pre %::modes
Modeuser !script %:echo $_cynspa(2) $_cyncalc(_usermode) %::me sets %::pre %::modes
Join !script %:echo $_cynspa(2) $_cyncalc(_join) %::nick ( $+ %::address $+ )
JoinSelf !script %:echo $_cynspa(2) $_cyncalc(_join) %::me is entering %::chan ...

Part !script %:echo $_cynspa(2) $_cyncalc(_part) %::nick ( $+ %::address $+ ) %::parentext
Kick !script %:echo $_cynspa(2) $_cyncalc(_kick) %::knick by %::nick %::parentext
KickSelf !script %:echo $_cynspa(2) $_cyncalc(_kick) %::me by %::nick %::parentext
Quit !script %:echo $_cynspa(2) $_cyncalc(_quit) %::nick ( $+ %::address $+ ) quits %::parentext

Topic !script %:echo $_cynspa(2) $_cyncalc(_topic) %::nick sets topic %::pre %::text
Nick !script %:echo $_cynspa(2) $_cyncalc(_nick) %::nick to %::newnick
NickSelf !script %:echo $_cynspa(2) $_cyncalc(_nick) %::me to %::newnick
Invite !script %:echo $_cynspa(2) $_cyncalc(_invite) %::nick invites you to %::pre %::chan
ServerError !script %:echo $_cynspa(2) $_cyncalc(_error) error %::pre %::text

Rejoin !script %:echo $_cynspa(2) $_cyncalc(_rejoin) %::pre %::chan
Ctcp !script %:echo $_cynspa(2) $_cyncalc(_ctcp) %::nick %::ctcp %::text
CtcpChan !script %:echo $_cynspa(2) $_cyncalc(_ctcp) %::nick $+ @ $+ %::chan %::ctcp > %::text
CtcpSelf !script %:echo $_cynspa(2) $_cyncalc(_ctcp) %::target %::ctcp %::text
CtcpChanSelf !script %:echo $_cynspa(2) $_cyncalc(_ctcp) %::target %::ctcp %::text
CtcpReply !script %:echo $_cynspa(2) $_cyncalc(_ctcp) %::nick %::ctcp %::text
CtcpReplySelf !script %:echo $_cynspa(2) $_cyncalc(_ctcp) %::target %::ctcp %::text

Notify !script %:echo $_cynspa(2) $_cyncalc(_notify) %::nick is online!
Unotify !script %:echo $_cynspa(2) $_cyncalc(_notify) %::nick is offline!
Wallop !script %:echo $_cynspa(2) $_cyncalc(_wallop) %::nick> %::pre %::text
NoticeServer !script %:echo $_cynspa(2) $_cyncalc(_notice) %::nick %::pre %::text

DNS !script %:echo $_cynspa(2) $_Cyncalc(_dns) Checking %::address ...
DNSError !script %:echo $_cynspa(2) $_Cyncalc(_dns) Couldn't resolve %::address
DNSResolve !script %:echo $_cynspa(2) $_Cyncalc(_dns) %::address resolved to %::raddress
Echo !script %:echo $_cynspa(2) %::text
EchoTarget !script %:echo $_cynspa(2) %::text
Error !script %:echo $_cynspa(2) $_cyncalc(_error) %::text
Load !script %:echo $_cynspa(2) $_cyncalc(_load) %::pre cynaticMTS by drago
UnLoad !script %:echo $_cynspa(2) $_cyncalc(_unload) %::pre cynaticMTS by drago

Whois !script c.whois
WhoWas !script c.whowas

RAW.Other !script %:echo $_cynspa(2) $_cyncalc(_raw) %::pre %::text

RAW.324 !script %:echo $_cynspa(2) $_cyncalc(_modes) %::chan> modes %::pre %::modes
RAW.229 !script %:echo $_cynspa(2) $_cyncalc(_created) $asctime(%::text)
RAW.330 !script set -u4 %::cwhois.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.332 !script %:echo $_cynspa(2) $_cyncalc(_topic) %::text
RAW.333 !script %:echo $_cynspa(2) $_cyncalc(_setby) %::nick on %::text
RAW.391 !script %:echo %::pre local time; %::text $+ , server time; %::text


Scheme1 plain 
Scheme2 Bluish
Scheme3 green
Scheme4 golden
Scheme5 purple haze
Scheme6 fire

[Scheme1]
Colors 0,3,3,3,2,3,3,3,3,3,3,1,3,3,3,1,3,2,3,5,1,0,1,0,1,15
RGBColors 222,219,214 0,0,0 255,0,0 36,83,121 0,144,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix 7›

[Scheme2]
Colors 0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,5,1,0,1,0,1,15
RGBColors 103,116,138 218,224,234 156,187,240 172,188,215 0,144,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix 2›
CLineOwner
CLineOP 01
CLineHOP 01
CLineVoice 02
CLineRegular 03
CLineEnemy 04
CLineMe 15

[Scheme3]
Colors 0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,5,1,0,1,0,1,15
RGBColors 90,113,105 224,240,236 176,198,191 192,210,206 0,144,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix 2›
CLineOwner
CLineOP 01
CLineHOP 01
CLineVoice 02
CLineRegular 03
CLineEnemy 04
CLineMe 15

[Scheme4]
Colors 0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,5,1,0,1,0,1,15
RGBColors 78,81,85 240,234,212 205,166,10 172,188,215 0,144,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix 2›
CLineOwner
CLineOP 01
CLineHOP 01
CLineVoice 02
CLineRegular 14
CLineEnemy 04
CLineMe 15

[Scheme5]
Colors 0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,5,1,0,1,0,1,15
RGBColors 192,151,194 78,81,85 236,214,242 172,188,215 0,144,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix 2›
CLineOwner
CLineOP 02
CLineHOP 02
CLineVoice 02
CLineRegular 02
CLineEnemy 02
CLineMe 06

[Scheme6]
Colors 0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,5,1,0,1,0,1,15
RGBColors 239,200,179 78,33,8 206,82,14 172,188,215 0,144,0 128,0,0 160,0,160 217,109,50 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Prefix 2›
CLineOwner
CLineOP 01
CLineHOP 02
CLineVoice 02
CLineRegular 07
CLineEnemy 03
CLineMe 05


