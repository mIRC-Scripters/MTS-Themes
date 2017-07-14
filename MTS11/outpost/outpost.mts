[mts]
Name Outpost
Author Zyberdog
EMail zyberdog@quakenet.org
Website www.zyberdog.com
Description Aligned MTS theme using the all too famous Tahoma font. Inspiration gather from Negative Entropy (by Darksadin) and Winter (by greeny). Optimized for use with NNscript and/or QuakeNet/Undernet.
Version 2.3
MTSVersion 1.1
Script outpost.mrc

Timestamp ON
TimestampFormat 02[01HH02:01nn02:01ss02]

Colors 11,02,01,01,01,01,12,12,12,12,12,01,01,12,01,01,12,12,12,01,01,11,01,11,01,01,01,11
RGBColors 0,0,0 240,240,240 136,156,152 24,176,24 255,32,32 176,60,64 192,100,192 255,148,96 248,240,64 0,236,0 0,164,255 24,24,24 72,132,152 232,68,232 72,72,80 112,172,176

FontDefault Tahoma,11
FontQuery Tahoma,11
FontChan Tahoma,11

CLineOwner 01
CLineOP 01
CLineHOP 01
CLineVoice 12
CLineRegular 02
CLineEnemy 04
CLineMe 07

Prefix      
ParenText 02[12<text>02]12

TextChan 02[<cmode><nick>02] <text>
TextChanSelf 02[<cmode><me>02] <text>
ActionChan ° <cmode><nick> <text>
ActionChanSelf ° <cmode><me> <text>

NoticeChan 02‹- notice -<nick>02@<chan>02- <text>
Notice 02‹- notice -<nick>02- <text>
NoticeSelf <pre> 02-› notice -<target>02- <text>
NoticeSelfChan <pre> 02-› notice -<target>02- <text>

TextQuery 02[<nick>02] <text>
TextQuerySelf 02[<me>02] <text>
ActionQuery ° <nick> <text>
ActionQuerySelf ° <me> <text>
ActionMsg ° 12°<nick>!<address>12° <text>
ActionMsgSelf <pre> ° 12°<target>12° <text>
TextMsg 12‹- msg °<nick>!<address>12° <text>
TextMsgSelf <pre> 12-› msg °<target>12° <text>

Mode <pre> 02× 12mode, 02[12<nick>02]12 sets 02[12<modes>02]
ModeUser <pre> 02× 12usermode, set to 02[12<modes>02]
Join <pre> 03› 12join, 02[12<nick>02] [12<address>02]
JoinSelf <pre> 03› 12joined, 02[12<chan>02]
Part <pre> 04‹ 12part, 02[12<nick>02] [12<address>02] <parentext>
Kick <pre> 04‹ 12kick, 02[12<knick>02]12 was kicked by 02[12<nick>02] <parentext>
KickSelf <pre> 04‹ 12kick, 02[12<me>02]12 was kicked by 02[12<nick>02] <parentext>
Quit <pre> 04‹ 12quit, 02[12<nick>02] [12<address>02] <parentext>
Topic <pre> 02× 12topic, 02[12<nick>02]12 changes topic to 02[12<text>02]
Nick <pre> 02× 12nick, 02[12<nick>02]12 is now known as 02[12<newnick>02]
NickSelf <pre> 02× 12nick, 02[12<me>02]12 is now known as 02[12<newnick>02]
Invite <pre> 02× 12invite, 02[12<nick>02]12 invites you to join 02[12<chan>02]
ServerError <pre> 04× 12error, <text>
Rejoin <pre> 02× 12rejoined, 02[12<chan>02]
Ctcp 12?<nick>12? <ctcp> <text>
CtcpChan 02?<nick>02@<chan>02? <ctcp> <text>
CtcpSelf <pre> 12-› ctcp ?<target>12? <ctcp> <text>
CtcpChanSelf <pre> 12-› ctcp ?<target>12? <ctcp> <text>
CtcpReply 02‹- ctcp !<nick>02! <ctcp> <text>
CtcpReplySelf <pre> 12‹- ctcp !<target>12! <ctcp> <text>
Notify <pre> 03› 12notify, 02[12<nick>02]12 is now online
UNotify <pre> 04‹ 12unnotify, 02[12<nick>02]12 is now offline
Wallop <pre> 02× 12wallop, 02[12<nick>02]12 <text>
NoticeServer 02‹- snotice -<nick>02- <text>

DNS <pre> 02× 12dns, resolving 02[12<address>02]12 ...
DNSError <pre> 02× 12dns, unable to resolve 02[12<address>02]12
DNSResolve <pre> 02× 12dns, resolved 02[12<address>02]12 to 02[12<raddress>02]12
Echo <pre> 02× 12<text>
EchoTarget <pre> 02× 12<text>
Error <pre> 04× 12error, <text>
Load !script outpost.load
Unload !script outpost.unload

Whois !script outpost.whois
Whowas !script outpost.whowas

RAW.002 <pre> 02× 12host, 02[12<server>02]12, running version 02[12<value>02]12
RAW.003 <pre> 02× 12server was created on, 02[12<value>02]12
RAW.005 <pre> 02× 12protocols supported by the server, 02[12<text>02]12
RAW.250 <pre> 02× 12total connection(s), 02[12<value>02]12
RAW.251 <pre> 02× 12users, 02[12<users>02]12; invisible, 02[12<text>02]12; servers, 02[12<value>02]12
RAW.252 <pre> 02× 12operator(s) online, 02[12<value>02]12
RAW.253 <pre> 02× 12unknown connection(s), 02[12<value>02]12
RAW.254 <pre> 02× 12number of channels formed, 02[12<value>02]12
RAW.255 <pre> 02× 12local clients, 02[12<users>02]12 on 02[12<value>02]12 server(s)
RAW.265 <pre> 02× 12local users, 02[12<users>02]12; max, 02[12<value>02]12
RAW.266 <pre> 02× 12global users, 02[12<users>02]12; max, 02[12<value>02]12
RAW.301 <pre> 02× 12<nick> is away: <text>
RAW.303 <pre> 02× 02[12<nick>02]12 is online
RAW.315 <pre> 02× 12end of 02[12/who02]12 list for 02[12<chan>02]12
RAW.324 <pre> 02× 02[12<chan>02]12 modes, 02[12<modes>02]12
RAW.329 !script %:echo %::pre × channel created, $+(02,$chr(91),12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02,$chr(93))
RAW.332 <pre> 02× 12topic, 02[12<text>02]12
RAW.333 <pre> 02× 12set by, 02[12<nick>02]12 at 02[12<text>02]12
RAW.341 <pre> 02× 02[12<nick>02]12 has been invited to join 02[12<chan>02]12
RAW.352 <pre> 02× 02[12/who02]12 <nick> 02[12<address>02]12 <realname>
RAW.353 <pre> 02× 02[12/names02]12 <text>
RAW.366 <pre> 02× 12end of 02[12/names02]12 list for 02[12<chan>02]12
RAW.372 <c2> <text>
RAW.376 <pre> 02× 12end of 02[12/motd02]12
RAW.391 !script %:echo %::pre 02× 12local time, $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ ; server time, $sd($gettok(%::text,3-,32))
RAW.401 <pre> 02× 12no such nickname, 02[12<nick>02]12
RAW.403 <pre> 02× 12no such channel, 02[12<chan>02]12
RAW.404 <pre> 02× 12unable to send message to 02[12<chan>02]12
RAW.421 <pre> 02× 02[12<value>02]12 is an invalid command
RAW.433 <pre> 02× 12nickname 02[12<nick>02]12 is already in use
RAW.442 <pre> 02× 12you're not on that channel 02[12<chan>02]12
RAW.443 <pre> 02× 02[12<nick>02]12 is already on that channel
RAW.461 <pre> 02× 02[12<value>02]12 not enough parameters
RAW.471 <pre> 02× 12can't join <chan> 02[12full (+l)02]12
RAW.473 <pre> 02× 12can't join <chan> 02[12invite only (+i)02]12
RAW.474 <pre> 02× 12can't join <chan> 02[12you're banned (+b)02]12
RAW.475 <pre> 02× 12can't join <chan> 02[12requires key (+k)02]12
RAW.482 <pre> 02× 12you're not opped on 02[12<chan>02]12
RAW.Other !script %:echo %::pre 02×12 $lower(%::text)

Scheme1 inverted
Scheme2 red
Scheme3 blue
Scheme4 xemacs
Scheme5 default (aligned)
Scheme6 inverted (aligned)
Scheme7 red (aligned)
Scheme8 blue (aligned)
Scheme9 xemacs (aligned)

[Scheme1]
RGBColors 255,255,255 15,15,15 119,99,101 235,80,235 0,225,255 80,195,195 65,56,65 0,108,160 10,17,195 255,19,255 255,93,0 231,231,231 183,125,105 26,186,26 186,182,179 140,82,76

[Scheme2]
RGBColors 0,0,0 240,240,240 255,73,73 20,175,20 255,30,30 175,60,60 190,99,190 255,147,95 246,238,60 0,236,0 0,162,255 24,24,24 72,130,151 229,69,229 69,73,76 115,173,179

[Scheme3]
RGBColors 0,0,0 240,240,240 0,119,255 20,175,20 255,30,30 175,60,60 190,99,190 255,147,95 246,238,60 0,236,0 0,162,255 24,24,24 72,130,151 229,69,229 69,73,76 115,173,179

[Scheme4]
RGBColors 0,0,0 240,240,240 0,86,215 24,176,24 255,32,32 176,60,64 192,100,192 255,148,96 248,240,64 0,236,0 0,164,255 18,18,31 72,101,253 232,68,232 72,72,80 112,172,176

[Scheme5]
TextChan         !script $outpost.outtext(, %::nick, %::cmode, %::text)
TextChanSelf     !script $outpost.outtext(, %::me, %::cmode, %::text)
TextQuery        !script $outpost.outtext(-›, %::nick, %::cmode, %::text)
TextQuerySelf    !script $outpost.outtext(‹-, %::me, %::cmode, %::text)
TextMsg          !script $outpost.outtext(-› msg, %::target, %::cmode, %::text)
TextMsgSelf      !script $outpost.outtext(‹- msg, %::target, %::cmode, %::text)
ActionChan       !script $outpost.outemote(, %::nick, %::cmode, %::text)
ActionChanSelf   !script $outpost.outemote(, %::me, %::cmode, %::text)
ActionQuery      !script $outpost.outemote(-›, %::nick, %::cmode, %::text)
ActionQuerySelf  !script $outpost.outemote(‹-, %::me, %::cmode, %::text)
NoticeChan       !script $outpost.outevent(02‹ 12notice $+ $chr(44),$+(-,%::nick,02@,%::chan,02- %::text))
Notice           !script $outpost.outevent(02‹ $iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32),12 $+ %::nick $+ $chr(44),12notice $+ $chr(44)),$iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32), %::text,$+(-,%::nick,02- %::text)))
NoticeSelf       !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
NoticeSelfChan   !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
Whois !script outpost.whois.align
Whowas !script outpost.whowas.align
Nick             !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
NickSelf         !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
Mode             !script $outpost.outevent(02× 12mode $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),sets,$chr(32),02[12,%::modes,02]12))
Topic            !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),changes topic to,$chr(32),02[,%::text,02]12 %:comments))
Invite           !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 invites you to join 02[12,%::chan,02]12))
Join             !script $outpost.outevent(03› 12join $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments))
JoinSelf         !script $outpost.outevent(03› 12joined $+ $chr(44),$+(02[12,%::chan,02]12))
Part             !script $outpost.outevent(04‹ 12part $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments,$iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Quit             !script $outpost.outevent(04‹ 12quit $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12, $iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Kick             !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::knick,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12 %:comments,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
KickSelf         !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
ServerError      !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
Rejoin           !script $outpost.outevent(02× 12rejoined $+ $chr(44),$+(02[12,%::chan,02]12))
Ctcp             !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(?,%::nick,12? %::ctcp %::text))
CtcpChan         !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(02?,%::nick,02@,%::chan,02? %::ctcp %::text))
CtcpSelf         !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpChanSelf     !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpReply        !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::nick,02! %::ctcp %::text))
CtcpReplySelf    !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::target,12! %::ctcp %::text))
Notify           !script $outpost.outevent(03› 12notify $+ $chr(44),$+(02[12,%::nick,02]12 is now online))
UNotify          !script $outpost.outevent(04‹ 12unnotify $+ $chr(44),$+(02[12,%::nick,02]12 is now offline))
Wallop           !script $outpost.outevent(02× 12wallop $+ $chr(44),$+(02[12,%::nick,02]12 %::text))
NoticeServer     !script $outpost.outevent(02‹ 12snotice $+ $chr(44),$+(02-,%::nick,02- %::text))
DNS              !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolving 02[12,%::address,02]12 ...))
DNSError         !script $outpost.outevent(02× 12dns $+ $chr(44),$+(unable to resolve 02[12,%::address,02]12))
DNSResolve       !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolved 02[12,%::address,02]12 to 02[12,%::raddress,02]12 %:comments))
Echo             !script $outpost.outevent(02×,%::text)
EchoTarget       !script $outpost.outevent(02×,%::text)
Error            !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
RAW.002          !script $outpost.outevent(02× 12info $+ $chr(44),$+(host 02[12,%::server,02]12 running version 02[12,%::value,02]12))
RAW.003          !script $outpost.outevent(02× 12info $+ $chr(44),$+(server was created on 02[12,%::value02]12))
RAW.005          !script $outpost.outevent(02× 12info $+ $chr(44),$+(protocols supported by the server 02[12,%::text,02]12))
RAW.250          !script $outpost.outevent(02× 12info $+ $chr(44),$+(total connection(s) 02[12,%::value02]12))
RAW.251          !script $outpost.outevent(02× 12info $+ $chr(44),$+(users 02[12,%::users,02]12; invisible 02[12,%::text,02]12; servers 02[12,%::value,02]12))
RAW.252          !script $outpost.outevent(02× 12info $+ $chr(44),$+(operator(s) online 02[12,%::value,02]12))
RAW.253          !script $outpost.outevent(02× 12info $+ $chr(44),$+(unknown connection(s) 02[12,%::value,02]12))
RAW.254          !script $outpost.outevent(02× 12info $+ $chr(44),$+(number of channels formed 02[12,%::value,02]12))
RAW.255          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local clients 02[12,%::users,02]12 on 02[12,%::value,02]12 server,$chr(40),s,$chr(41)))
RAW.265          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.266          !script $outpost.outevent(02× 12info $+ $chr(44),$+(global users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.301          !script $outpost.outevent(02× 12 $+ %::nick is away:,%::text)
RAW.303          !script $outpost.outevent(02× 12ison $+ $chr(44),$+(02[12,%::nick,02]12 is online))
RAW.315          !script $outpost.outevent(02× 12who $+ $chr(44),$+(end of 02[12/who02]12 list for 02[12,%::chan,02]12))
RAW.324          !script $outpost.outevent(02× 12modes $+ $chr(44),$+(02[12,%::chan,02]12 modes 02[12,%::modes,02]12))
RAW.329          !script $outpost.outevent(02× 12info $+ $chr(44),$+(channel created 02[12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02]12))
RAW.332          !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[,%::text,02]12))
RAW.333          !script $outpost.outevent(02× 12set by $+ $chr(44),$+(02[12,%::nick,02]12 at 02[12,%::text,02]12))
RAW.341          !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 has been invited to join 02[12,%::chan,02]12))
RAW.352          !script $outpost.outevent(02× 12who $+ $chr(44),$+(02[12/who02]12 %::nick 02[12,%::address,02]12 %::realname))
RAW.353          !script $outpost.outevent(02× 12names $+ $chr(44),%::text)
RAW.366          !script $outpost.outevent(02× 12names $+ $chr(44),$+(end of 02[12/names02]12 list for 02[12,%::chan,02]12))
RAW.372          !script $outpost.outevent(,%::c2 %::text)
RAW.376          !script $outpost.outevent(02× 12info $+ $chr(44),end of 02[12/motd02]12)
RAW.391          !script $outpost.outevent(02× 12info $+ $chr(44),local time $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ ; server time $sd($gettok(%::text,3-,32)))
RAW.401          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such nickname 02[12,%::nick,02]12))
RAW.403          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such channel 02[12,%::chan,02]12))
RAW.404          !script $outpost.outevent(04× 12error $+ $chr(44),$+(unable to send message to 02[12,%::chan,02]12))
RAW.421          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 is an invalid command))
RAW.433          !script $outpost.outevent(04× 12error $+ $chr(44),$+(nickname 02[12,%::nick,02]12 is already in use))
RAW.442          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not on that channel 02[12,%::chan,02]12))
RAW.443          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::nick,02]12 is already on that channel))
RAW.461          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 not enough parameters))
RAW.471          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12full (+l)02]12))
RAW.473          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12invite only (+i)02]12))
RAW.474          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12you're banned (+b)02]12))
RAW.475          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12requires key (+k)02]12))
RAW.482          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not opped on 02[12,%::chan,02]12))
RAW.Other        !script $outpost.outevent(02×12,$lower(%::text))

[Scheme6]
RGBColors 255,255,255 15,15,15 119,99,101 235,80,235 0,225,255 80,195,195 65,56,65 0,108,160 10,17,195 255,19,255 255,93,0 231,231,231 183,125,105 26,186,26 186,182,179 140,82,76
TextChan         !script $outpost.outtext(, %::nick, %::cmode, %::text)
TextChanSelf     !script $outpost.outtext(, %::me, %::cmode, %::text)
TextQuery        !script $outpost.outtext(-›, %::nick, %::cmode, %::text)
TextQuerySelf    !script $outpost.outtext(‹-, %::me, %::cmode, %::text)
TextMsg          !script $outpost.outtext(-› msg, %::target, %::cmode, %::text)
TextMsgSelf      !script $outpost.outtext(‹- msg, %::target, %::cmode, %::text)
ActionChan       !script $outpost.outemote(, %::nick, %::cmode, %::text)
ActionChanSelf   !script $outpost.outemote(, %::me, %::cmode, %::text)
ActionQuery      !script $outpost.outemote(-›, %::nick, %::cmode, %::text)
ActionQuerySelf  !script $outpost.outemote(‹-, %::me, %::cmode, %::text)
NoticeChan       !script $outpost.outevent(02‹ 12notice $+ $chr(44),$+(-,%::nick,02@,%::chan,02- %::text))
Notice           !script $outpost.outevent(02‹ $iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32),12 $+ %::nick $+ $chr(44),12notice $+ $chr(44)),$iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32), %::text,$+(-,%::nick,02- %::text)))
NoticeSelf       !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
NoticeSelfChan   !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
Whois !script outpost.whois.align
Whowas !script outpost.whowas.align
Nick             !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
NickSelf         !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
Mode             !script $outpost.outevent(02× 12mode $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),sets,$chr(32),02[12,%::modes,02]12))
Topic            !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),changes topic to,$chr(32),02[,%::text,02]12 %:comments))
Invite           !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 invites you to join 02[12,%::chan,02]12))
Join             !script $outpost.outevent(03› 12join $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments))
JoinSelf         !script $outpost.outevent(03› 12joined $+ $chr(44),$+(02[12,%::chan,02]12))
Part             !script $outpost.outevent(04‹ 12part $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments,$iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Quit             !script $outpost.outevent(04‹ 12quit $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12, $iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Kick             !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::knick,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12 %:comments,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
KickSelf         !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
ServerError      !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
Rejoin           !script $outpost.outevent(02× 12rejoined $+ $chr(44),$+(02[12,%::chan,02]12))
Ctcp             !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(?,%::nick,12? %::ctcp %::text))
CtcpChan         !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(02?,%::nick,02@,%::chan,02? %::ctcp %::text))
CtcpSelf         !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpChanSelf     !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpReply        !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::nick,02! %::ctcp %::text))
CtcpReplySelf    !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::target,12! %::ctcp %::text))
Notify           !script $outpost.outevent(03› 12notify $+ $chr(44),$+(02[12,%::nick,02]12 is now online))
UNotify          !script $outpost.outevent(04‹ 12unnotify $+ $chr(44),$+(02[12,%::nick,02]12 is now offline))
Wallop           !script $outpost.outevent(02× 12wallop $+ $chr(44),$+(02[12,%::nick,02]12 %::text))
NoticeServer     !script $outpost.outevent(02‹ 12snotice $+ $chr(44),$+(02-,%::nick,02- %::text))
DNS              !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolving 02[12,%::address,02]12 ...))
DNSError         !script $outpost.outevent(02× 12dns $+ $chr(44),$+(unable to resolve 02[12,%::address,02]12))
DNSResolve       !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolved 02[12,%::address,02]12 to 02[12,%::raddress,02]12 %:comments))
Echo             !script $outpost.outevent(02×,%::text)
EchoTarget       !script $outpost.outevent(02×,%::text)
Error            !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
RAW.002          !script $outpost.outevent(02× 12info $+ $chr(44),$+(host 02[12,%::server,02]12 running version 02[12,%::value,02]12))
RAW.003          !script $outpost.outevent(02× 12info $+ $chr(44),$+(server was created on 02[12,%::value02]12))
RAW.005          !script $outpost.outevent(02× 12info $+ $chr(44),$+(protocols supported by the server 02[12,%::text,02]12))
RAW.250          !script $outpost.outevent(02× 12info $+ $chr(44),$+(total connection(s) 02[12,%::value02]12))
RAW.251          !script $outpost.outevent(02× 12info $+ $chr(44),$+(users 02[12,%::users,02]12; invisible 02[12,%::text,02]12; servers 02[12,%::value,02]12))
RAW.252          !script $outpost.outevent(02× 12info $+ $chr(44),$+(operator(s) online 02[12,%::value,02]12))
RAW.253          !script $outpost.outevent(02× 12info $+ $chr(44),$+(unknown connection(s) 02[12,%::value,02]12))
RAW.254          !script $outpost.outevent(02× 12info $+ $chr(44),$+(number of channels formed 02[12,%::value,02]12))
RAW.255          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local clients 02[12,%::users,02]12 on 02[12,%::value,02]12 server,$chr(40),s,$chr(41)))
RAW.265          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.266          !script $outpost.outevent(02× 12info $+ $chr(44),$+(global users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.301          !script $outpost.outevent(02× 12 $+ %::nick is away:,%::text)
RAW.303          !script $outpost.outevent(02× 12ison $+ $chr(44),$+(02[12,%::nick,02]12 is online))
RAW.315          !script $outpost.outevent(02× 12who $+ $chr(44),$+(end of 02[12/who02]12 list for 02[12,%::chan,02]12))
RAW.324          !script $outpost.outevent(02× 12modes $+ $chr(44),$+(02[12,%::chan,02]12 modes 02[12,%::modes,02]12))
RAW.329          !script $outpost.outevent(02× 12info $+ $chr(44),$+(channel created 02[12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02]12))
RAW.332          !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[,%::text,02]12))
RAW.333          !script $outpost.outevent(02× 12set by $+ $chr(44),$+(02[12,%::nick,02]12 at 02[12,%::text,02]12))
RAW.341          !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 has been invited to join 02[12,%::chan,02]12))
RAW.352          !script $outpost.outevent(02× 12who $+ $chr(44),$+(02[12/who02]12 %::nick 02[12,%::address,02]12 %::realname))
RAW.353          !script $outpost.outevent(02× 12names $+ $chr(44),%::text)
RAW.366          !script $outpost.outevent(02× 12names $+ $chr(44),$+(end of 02[12/names02]12 list for 02[12,%::chan,02]12))
RAW.372          !script $outpost.outevent(,%::c2 %::text)
RAW.376          !script $outpost.outevent(02× 12info $+ $chr(44),end of 02[12/motd02]12)
RAW.391          !script $outpost.outevent(02× 12info $+ $chr(44),local time $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ ; server time $sd($gettok(%::text,3-,32)))
RAW.401          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such nickname 02[12,%::nick,02]12))
RAW.403          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such channel 02[12,%::chan,02]12))
RAW.404          !script $outpost.outevent(04× 12error $+ $chr(44),$+(unable to send message to 02[12,%::chan,02]12))
RAW.421          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 is an invalid command))
RAW.433          !script $outpost.outevent(04× 12error $+ $chr(44),$+(nickname 02[12,%::nick,02]12 is already in use))
RAW.442          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not on that channel 02[12,%::chan,02]12))
RAW.443          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::nick,02]12 is already on that channel))
RAW.461          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 not enough parameters))
RAW.471          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12full (+l)02]12))
RAW.473          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12invite only (+i)02]12))
RAW.474          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12you're banned (+b)02]12))
RAW.475          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12requires key (+k)02]12))
RAW.482          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not opped on 02[12,%::chan,02]12))
RAW.Other        !script $outpost.outevent(02×12,$lower(%::text))

[Scheme7]
RGBColors 0,0,0 240,240,240 255,73,73 20,175,20 255,30,30 175,60,60 190,99,190 255,147,95 246,238,60 0,236,0 0,162,255 24,24,24 72,130,151 229,69,229 69,73,76 115,173,179
TextChan         !script $outpost.outtext(, %::nick, %::cmode, %::text)
TextChanSelf     !script $outpost.outtext(, %::me, %::cmode, %::text)
TextQuery        !script $outpost.outtext(-›, %::nick, %::cmode, %::text)
TextQuerySelf    !script $outpost.outtext(‹-, %::me, %::cmode, %::text)
TextMsg          !script $outpost.outtext(-› msg, %::target, %::cmode, %::text)
TextMsgSelf      !script $outpost.outtext(‹- msg, %::target, %::cmode, %::text)
ActionChan       !script $outpost.outemote(, %::nick, %::cmode, %::text)
ActionChanSelf   !script $outpost.outemote(, %::me, %::cmode, %::text)
ActionQuery      !script $outpost.outemote(-›, %::nick, %::cmode, %::text)
ActionQuerySelf  !script $outpost.outemote(‹-, %::me, %::cmode, %::text)
NoticeChan       !script $outpost.outevent(02‹ 12notice $+ $chr(44),$+(-,%::nick,02@,%::chan,02- %::text))
Notice           !script $outpost.outevent(02‹ $iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32),12 $+ %::nick $+ $chr(44),12notice $+ $chr(44)),$iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32), %::text,$+(-,%::nick,02- %::text)))
NoticeSelf       !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
NoticeSelfChan   !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
Whois !script outpost.whois.align
Whowas !script outpost.whowas.align
Nick             !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
NickSelf         !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
Mode             !script $outpost.outevent(02× 12mode $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),sets,$chr(32),02[12,%::modes,02]12))
Topic            !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),changes topic to,$chr(32),02[,%::text,02]12 %:comments))
Invite           !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 invites you to join 02[12,%::chan,02]12))
Join             !script $outpost.outevent(03› 12join $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments))
JoinSelf         !script $outpost.outevent(03› 12joined $+ $chr(44),$+(02[12,%::chan,02]12))
Part             !script $outpost.outevent(04‹ 12part $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments,$iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Quit             !script $outpost.outevent(04‹ 12quit $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12, $iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Kick             !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::knick,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12 %:comments,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
KickSelf         !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
ServerError      !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
Rejoin           !script $outpost.outevent(02× 12rejoined $+ $chr(44),$+(02[12,%::chan,02]12))
Ctcp             !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(?,%::nick,12? %::ctcp %::text))
CtcpChan         !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(02?,%::nick,02@,%::chan,02? %::ctcp %::text))
CtcpSelf         !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpChanSelf     !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpReply        !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::nick,02! %::ctcp %::text))
CtcpReplySelf    !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::target,12! %::ctcp %::text))
Notify           !script $outpost.outevent(03› 12notify $+ $chr(44),$+(02[12,%::nick,02]12 is now online))
UNotify          !script $outpost.outevent(04‹ 12unnotify $+ $chr(44),$+(02[12,%::nick,02]12 is now offline))
Wallop           !script $outpost.outevent(02× 12wallop $+ $chr(44),$+(02[12,%::nick,02]12 %::text))
NoticeServer     !script $outpost.outevent(02‹ 12snotice $+ $chr(44),$+(02-,%::nick,02- %::text))
DNS              !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolving 02[12,%::address,02]12 ...))
DNSError         !script $outpost.outevent(02× 12dns $+ $chr(44),$+(unable to resolve 02[12,%::address,02]12))
DNSResolve       !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolved 02[12,%::address,02]12 to 02[12,%::raddress,02]12 %:comments))
Echo             !script $outpost.outevent(02×,%::text)
EchoTarget       !script $outpost.outevent(02×,%::text)
Error            !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
RAW.002          !script $outpost.outevent(02× 12info $+ $chr(44),$+(host 02[12,%::server,02]12 running version 02[12,%::value,02]12))
RAW.003          !script $outpost.outevent(02× 12info $+ $chr(44),$+(server was created on 02[12,%::value02]12))
RAW.005          !script $outpost.outevent(02× 12info $+ $chr(44),$+(protocols supported by the server 02[12,%::text,02]12))
RAW.250          !script $outpost.outevent(02× 12info $+ $chr(44),$+(total connection(s) 02[12,%::value02]12))
RAW.251          !script $outpost.outevent(02× 12info $+ $chr(44),$+(users 02[12,%::users,02]12; invisible 02[12,%::text,02]12; servers 02[12,%::value,02]12))
RAW.252          !script $outpost.outevent(02× 12info $+ $chr(44),$+(operator(s) online 02[12,%::value,02]12))
RAW.253          !script $outpost.outevent(02× 12info $+ $chr(44),$+(unknown connection(s) 02[12,%::value,02]12))
RAW.254          !script $outpost.outevent(02× 12info $+ $chr(44),$+(number of channels formed 02[12,%::value,02]12))
RAW.255          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local clients 02[12,%::users,02]12 on 02[12,%::value,02]12 server,$chr(40),s,$chr(41)))
RAW.265          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.266          !script $outpost.outevent(02× 12info $+ $chr(44),$+(global users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.301          !script $outpost.outevent(02× 12 $+ %::nick is away:,%::text)
RAW.303          !script $outpost.outevent(02× 12ison $+ $chr(44),$+(02[12,%::nick,02]12 is online))
RAW.315          !script $outpost.outevent(02× 12who $+ $chr(44),$+(end of 02[12/who02]12 list for 02[12,%::chan,02]12))
RAW.324          !script $outpost.outevent(02× 12modes $+ $chr(44),$+(02[12,%::chan,02]12 modes 02[12,%::modes,02]12))
RAW.329          !script $outpost.outevent(02× 12info $+ $chr(44),$+(channel created 02[12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02]12))
RAW.332          !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[,%::text,02]12))
RAW.333          !script $outpost.outevent(02× 12set by $+ $chr(44),$+(02[12,%::nick,02]12 at 02[12,%::text,02]12))
RAW.341          !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 has been invited to join 02[12,%::chan,02]12))
RAW.352          !script $outpost.outevent(02× 12who $+ $chr(44),$+(02[12/who02]12 %::nick 02[12,%::address,02]12 %::realname))
RAW.353          !script $outpost.outevent(02× 12names $+ $chr(44),%::text)
RAW.366          !script $outpost.outevent(02× 12names $+ $chr(44),$+(end of 02[12/names02]12 list for 02[12,%::chan,02]12))
RAW.372          !script $outpost.outevent(,%::c2 %::text)
RAW.376          !script $outpost.outevent(02× 12info $+ $chr(44),end of 02[12/motd02]12)
RAW.391          !script $outpost.outevent(02× 12info $+ $chr(44),local time $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ ; server time $sd($gettok(%::text,3-,32)))
RAW.401          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such nickname 02[12,%::nick,02]12))
RAW.403          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such channel 02[12,%::chan,02]12))
RAW.404          !script $outpost.outevent(04× 12error $+ $chr(44),$+(unable to send message to 02[12,%::chan,02]12))
RAW.421          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 is an invalid command))
RAW.433          !script $outpost.outevent(04× 12error $+ $chr(44),$+(nickname 02[12,%::nick,02]12 is already in use))
RAW.442          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not on that channel 02[12,%::chan,02]12))
RAW.443          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::nick,02]12 is already on that channel))
RAW.461          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 not enough parameters))
RAW.471          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12full (+l)02]12))
RAW.473          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12invite only (+i)02]12))
RAW.474          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12you're banned (+b)02]12))
RAW.475          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12requires key (+k)02]12))
RAW.482          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not opped on 02[12,%::chan,02]12))
RAW.Other        !script $outpost.outevent(02×12,$lower(%::text))

[Scheme8]
RGBColors 0,0,0 240,240,240 0,119,255 20,175,20 255,30,30 175,60,60 190,99,190 255,147,95 246,238,60 0,236,0 0,162,255 24,24,24 72,130,151 229,69,229 69,73,76 115,173,179
TextChan         !script $outpost.outtext(, %::nick, %::cmode, %::text)
TextChanSelf     !script $outpost.outtext(, %::me, %::cmode, %::text)
TextQuery        !script $outpost.outtext(-›, %::nick, %::cmode, %::text)
TextQuerySelf    !script $outpost.outtext(‹-, %::me, %::cmode, %::text)
TextMsg          !script $outpost.outtext(-› msg, %::target, %::cmode, %::text)
TextMsgSelf      !script $outpost.outtext(‹- msg, %::target, %::cmode, %::text)
ActionChan       !script $outpost.outemote(, %::nick, %::cmode, %::text)
ActionChanSelf   !script $outpost.outemote(, %::me, %::cmode, %::text)
ActionQuery      !script $outpost.outemote(-›, %::nick, %::cmode, %::text)
ActionQuerySelf  !script $outpost.outemote(‹-, %::me, %::cmode, %::text)
NoticeChan       !script $outpost.outevent(02‹ 12notice $+ $chr(44),$+(-,%::nick,02@,%::chan,02- %::text))
Notice           !script $outpost.outevent(02‹ $iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32),12 $+ %::nick $+ $chr(44),12notice $+ $chr(44)),$iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32), %::text,$+(-,%::nick,02- %::text)))
NoticeSelf       !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
NoticeSelfChan   !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
Whois !script outpost.whois.align
Whowas !script outpost.whowas.align
Nick             !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
NickSelf         !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
Mode             !script $outpost.outevent(02× 12mode $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),sets,$chr(32),02[12,%::modes,02]12))
Topic            !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),changes topic to,$chr(32),02[,%::text,02]12 %:comments))
Invite           !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 invites you to join 02[12,%::chan,02]12))
Join             !script $outpost.outevent(03› 12join $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments))
JoinSelf         !script $outpost.outevent(03› 12joined $+ $chr(44),$+(02[12,%::chan,02]12))
Part             !script $outpost.outevent(04‹ 12part $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments,$iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Quit             !script $outpost.outevent(04‹ 12quit $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12, $iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Kick             !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::knick,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12 %:comments,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
KickSelf         !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
ServerError      !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
Rejoin           !script $outpost.outevent(02× 12rejoined $+ $chr(44),$+(02[12,%::chan,02]12))
Ctcp             !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(?,%::nick,12? %::ctcp %::text))
CtcpChan         !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(02?,%::nick,02@,%::chan,02? %::ctcp %::text))
CtcpSelf         !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpChanSelf     !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpReply        !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::nick,02! %::ctcp %::text))
CtcpReplySelf    !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::target,12! %::ctcp %::text))
Notify           !script $outpost.outevent(03› 12notify $+ $chr(44),$+(02[12,%::nick,02]12 is now online))
UNotify          !script $outpost.outevent(04‹ 12unnotify $+ $chr(44),$+(02[12,%::nick,02]12 is now offline))
Wallop           !script $outpost.outevent(02× 12wallop $+ $chr(44),$+(02[12,%::nick,02]12 %::text))
NoticeServer     !script $outpost.outevent(02‹ 12snotice $+ $chr(44),$+(02-,%::nick,02- %::text))
DNS              !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolving 02[12,%::address,02]12 ...))
DNSError         !script $outpost.outevent(02× 12dns $+ $chr(44),$+(unable to resolve 02[12,%::address,02]12))
DNSResolve       !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolved 02[12,%::address,02]12 to 02[12,%::raddress,02]12 %:comments))
Echo             !script $outpost.outevent(02×,%::text)
EchoTarget       !script $outpost.outevent(02×,%::text)
Error            !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
RAW.002          !script $outpost.outevent(02× 12info $+ $chr(44),$+(host 02[12,%::server,02]12 running version 02[12,%::value,02]12))
RAW.003          !script $outpost.outevent(02× 12info $+ $chr(44),$+(server was created on 02[12,%::value02]12))
RAW.005          !script $outpost.outevent(02× 12info $+ $chr(44),$+(protocols supported by the server 02[12,%::text,02]12))
RAW.250          !script $outpost.outevent(02× 12info $+ $chr(44),$+(total connection(s) 02[12,%::value02]12))
RAW.251          !script $outpost.outevent(02× 12info $+ $chr(44),$+(users 02[12,%::users,02]12; invisible 02[12,%::text,02]12; servers 02[12,%::value,02]12))
RAW.252          !script $outpost.outevent(02× 12info $+ $chr(44),$+(operator(s) online 02[12,%::value,02]12))
RAW.253          !script $outpost.outevent(02× 12info $+ $chr(44),$+(unknown connection(s) 02[12,%::value,02]12))
RAW.254          !script $outpost.outevent(02× 12info $+ $chr(44),$+(number of channels formed 02[12,%::value,02]12))
RAW.255          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local clients 02[12,%::users,02]12 on 02[12,%::value,02]12 server,$chr(40),s,$chr(41)))
RAW.265          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.266          !script $outpost.outevent(02× 12info $+ $chr(44),$+(global users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.301          !script $outpost.outevent(02× 12 $+ %::nick is away:,%::text)
RAW.303          !script $outpost.outevent(02× 12ison $+ $chr(44),$+(02[12,%::nick,02]12 is online))
RAW.315          !script $outpost.outevent(02× 12who $+ $chr(44),$+(end of 02[12/who02]12 list for 02[12,%::chan,02]12))
RAW.324          !script $outpost.outevent(02× 12modes $+ $chr(44),$+(02[12,%::chan,02]12 modes 02[12,%::modes,02]12))
RAW.329          !script $outpost.outevent(02× 12info $+ $chr(44),$+(channel created 02[12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02]12))
RAW.332          !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[,%::text,02]12))
RAW.333          !script $outpost.outevent(02× 12set by $+ $chr(44),$+(02[12,%::nick,02]12 at 02[12,%::text,02]12))
RAW.341          !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 has been invited to join 02[12,%::chan,02]12))
RAW.352          !script $outpost.outevent(02× 12who $+ $chr(44),$+(02[12/who02]12 %::nick 02[12,%::address,02]12 %::realname))
RAW.353          !script $outpost.outevent(02× 12names $+ $chr(44),%::text)
RAW.366          !script $outpost.outevent(02× 12names $+ $chr(44),$+(end of 02[12/names02]12 list for 02[12,%::chan,02]12))
RAW.372          !script $outpost.outevent(,%::c2 %::text)
RAW.376          !script $outpost.outevent(02× 12info $+ $chr(44),end of 02[12/motd02]12)
RAW.391          !script $outpost.outevent(02× 12info $+ $chr(44),local time $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ ; server time $sd($gettok(%::text,3-,32)))
RAW.401          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such nickname 02[12,%::nick,02]12))
RAW.403          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such channel 02[12,%::chan,02]12))
RAW.404          !script $outpost.outevent(04× 12error $+ $chr(44),$+(unable to send message to 02[12,%::chan,02]12))
RAW.421          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 is an invalid command))
RAW.433          !script $outpost.outevent(04× 12error $+ $chr(44),$+(nickname 02[12,%::nick,02]12 is already in use))
RAW.442          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not on that channel 02[12,%::chan,02]12))
RAW.443          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::nick,02]12 is already on that channel))
RAW.461          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 not enough parameters))
RAW.471          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12full (+l)02]12))
RAW.473          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12invite only (+i)02]12))
RAW.474          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12you're banned (+b)02]12))
RAW.475          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12requires key (+k)02]12))
RAW.482          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not opped on 02[12,%::chan,02]12))
RAW.Other        !script $outpost.outevent(02×12,$lower(%::text))

[Scheme9]
RGBColors 0,0,0 240,240,240 0,86,215 24,176,24 255,32,32 176,60,64 192,100,192 255,148,96 248,240,64 0,236,0 0,164,255 18,18,31 72,101,253 232,68,232 72,72,80 112,172,176
TextChan         !script $outpost.outtext(, %::nick, %::cmode, %::text)
TextChanSelf     !script $outpost.outtext(, %::me, %::cmode, %::text)
TextQuery        !script $outpost.outtext(-›, %::nick, %::cmode, %::text)
TextQuerySelf    !script $outpost.outtext(‹-, %::me, %::cmode, %::text)
TextMsg          !script $outpost.outtext(-› msg, %::target, %::cmode, %::text)
TextMsgSelf      !script $outpost.outtext(‹- msg, %::target, %::cmode, %::text)
ActionChan       !script $outpost.outemote(, %::nick, %::cmode, %::text)
ActionChanSelf   !script $outpost.outemote(, %::me, %::cmode, %::text)
ActionQuery      !script $outpost.outemote(-›, %::nick, %::cmode, %::text)
ActionQuerySelf  !script $outpost.outemote(‹-, %::me, %::cmode, %::text)
NoticeChan       !script $outpost.outevent(02‹ 12notice $+ $chr(44),$+(-,%::nick,02@,%::chan,02- %::text))
Notice           !script $outpost.outevent(02‹ $iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32),12 $+ %::nick $+ $chr(44),12notice $+ $chr(44)),$iif($istok(Q L S R NickServ ChanServ MemoServ -psyBNC,%::nick,32), %::text,$+(-,%::nick,02- %::text)))
NoticeSelf       !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
NoticeSelfChan   !script $outpost.outevent(02› 12notice $+ $chr(44),$+(-,%::target,02- %::text))
Whois !script outpost.whois.align
Whowas !script outpost.whowas.align
Nick             !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
NickSelf         !script $outpost.outevent(02× 12nick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),is know known as,$chr(32),02[12,%::newnick,02]12))
Mode             !script $outpost.outevent(02× 12mode $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),sets,$chr(32),02[12,%::modes,02]12))
Topic            !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),changes topic to,$chr(32),02[,%::text,02]12 %:comments))
Invite           !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 invites you to join 02[12,%::chan,02]12))
Join             !script $outpost.outevent(03› 12join $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments))
JoinSelf         !script $outpost.outevent(03› 12joined $+ $chr(44),$+(02[12,%::chan,02]12))
Part             !script $outpost.outevent(04‹ 12part $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12 %:comments,$iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Quit             !script $outpost.outevent(04‹ 12quit $+ $chr(44),$+(02[12,%::nick,02]12,$chr(32),02[12,%::address,02]12, $iif(%::text,$+($chr(32),02[12,%::text,02]12))))
Kick             !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::knick,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12 %:comments,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
KickSelf         !script $outpost.outevent(04‹ 12kick $+ $chr(44),$+(02[12,%::me,02]12,$chr(32),was kicked by,$chr(32),02[12,%::nick,02]12,$iif(%::text != %::knick,$+($chr(32),02[12,%::text,02]12))))
ServerError      !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
Rejoin           !script $outpost.outevent(02× 12rejoined $+ $chr(44),$+(02[12,%::chan,02]12))
Ctcp             !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(?,%::nick,12? %::ctcp %::text))
CtcpChan         !script $outpost.outevent(02× 12ctcp $+ $chr(44),$+(02?,%::nick,02@,%::chan,02? %::ctcp %::text))
CtcpSelf         !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpChanSelf     !script $outpost.outevent(03› 12ctcp $+ $chr(44),$+(?,%::target,12? %::ctcp %::text))
CtcpReply        !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::nick,02! %::ctcp %::text))
CtcpReplySelf    !script $outpost.outevent(04‹ 12ctcp $+ $chr(44),$+(!,%::target,12! %::ctcp %::text))
Notify           !script $outpost.outevent(03› 12notify $+ $chr(44),$+(02[12,%::nick,02]12 is now online))
UNotify          !script $outpost.outevent(04‹ 12unnotify $+ $chr(44),$+(02[12,%::nick,02]12 is now offline))
Wallop           !script $outpost.outevent(02× 12wallop $+ $chr(44),$+(02[12,%::nick,02]12 %::text))
NoticeServer     !script $outpost.outevent(02‹ 12snotice $+ $chr(44),$+(02-,%::nick,02- %::text))
DNS              !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolving 02[12,%::address,02]12 ...))
DNSError         !script $outpost.outevent(02× 12dns $+ $chr(44),$+(unable to resolve 02[12,%::address,02]12))
DNSResolve       !script $outpost.outevent(02× 12dns $+ $chr(44),$+(resolved 02[12,%::address,02]12 to 02[12,%::raddress,02]12 %:comments))
Echo             !script $outpost.outevent(02×,%::text)
EchoTarget       !script $outpost.outevent(02×,%::text)
Error            !script $outpost.outevent(04× 12error $+ $chr(44),%::text)
RAW.002          !script $outpost.outevent(02× 12info $+ $chr(44),$+(host 02[12,%::server,02]12 running version 02[12,%::value,02]12))
RAW.003          !script $outpost.outevent(02× 12info $+ $chr(44),$+(server was created on 02[12,%::value02]12))
RAW.005          !script $outpost.outevent(02× 12info $+ $chr(44),$+(protocols supported by the server 02[12,%::text,02]12))
RAW.250          !script $outpost.outevent(02× 12info $+ $chr(44),$+(total connection(s) 02[12,%::value02]12))
RAW.251          !script $outpost.outevent(02× 12info $+ $chr(44),$+(users 02[12,%::users,02]12; invisible 02[12,%::text,02]12; servers 02[12,%::value,02]12))
RAW.252          !script $outpost.outevent(02× 12info $+ $chr(44),$+(operator(s) online 02[12,%::value,02]12))
RAW.253          !script $outpost.outevent(02× 12info $+ $chr(44),$+(unknown connection(s) 02[12,%::value,02]12))
RAW.254          !script $outpost.outevent(02× 12info $+ $chr(44),$+(number of channels formed 02[12,%::value,02]12))
RAW.255          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local clients 02[12,%::users,02]12 on 02[12,%::value,02]12 server,$chr(40),s,$chr(41)))
RAW.265          !script $outpost.outevent(02× 12info $+ $chr(44),$+(local users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.266          !script $outpost.outevent(02× 12info $+ $chr(44),$+(global users 02[12,%::users,02]12; max 02[12,%::value,02]12))
RAW.301          !script $outpost.outevent(02× 12 $+ %::nick is away:,%::text)
RAW.303          !script $outpost.outevent(02× 12ison $+ $chr(44),$+(02[12,%::nick,02]12 is online))
RAW.315          !script $outpost.outevent(02× 12who $+ $chr(44),$+(end of 02[12/who02]12 list for 02[12,%::chan,02]12))
RAW.324          !script $outpost.outevent(02× 12modes $+ $chr(44),$+(02[12,%::chan,02]12 modes 02[12,%::modes,02]12))
RAW.329          !script $outpost.outevent(02× 12info $+ $chr(44),$+(channel created 02[12,$asctime(%::text,dddd mmmm dd HH:nn:ss yyyy),02]12))
RAW.332          !script $outpost.outevent(02× 12topic $+ $chr(44),$+(02[,%::text,02]12))
RAW.333          !script $outpost.outevent(02× 12set by $+ $chr(44),$+(02[12,%::nick,02]12 at 02[12,%::text,02]12))
RAW.341          !script $outpost.outevent(02× 12invite $+ $chr(44),$+(02[12,%::nick,02]12 has been invited to join 02[12,%::chan,02]12))
RAW.352          !script $outpost.outevent(02× 12who $+ $chr(44),$+(02[12/who02]12 %::nick 02[12,%::address,02]12 %::realname))
RAW.353          !script $outpost.outevent(02× 12names $+ $chr(44),%::text)
RAW.366          !script $outpost.outevent(02× 12names $+ $chr(44),$+(end of 02[12/names02]12 list for 02[12,%::chan,02]12))
RAW.372          !script $outpost.outevent(,%::c2 %::text)
RAW.376          !script $outpost.outevent(02× 12info $+ $chr(44),end of 02[12/motd02]12)
RAW.391          !script $outpost.outevent(02× 12info $+ $chr(44),local time $sd($asctime($gettok(%::text,1,32),dd.mm.yyyy $+ $chr(44) HH:nn:ss)) $+ ; server time $sd($gettok(%::text,3-,32)))
RAW.401          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such nickname 02[12,%::nick,02]12))
RAW.403          !script $outpost.outevent(04× 12error $+ $chr(44),$+(no such channel 02[12,%::chan,02]12))
RAW.404          !script $outpost.outevent(04× 12error $+ $chr(44),$+(unable to send message to 02[12,%::chan,02]12))
RAW.421          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 is an invalid command))
RAW.433          !script $outpost.outevent(04× 12error $+ $chr(44),$+(nickname 02[12,%::nick,02]12 is already in use))
RAW.442          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not on that channel 02[12,%::chan,02]12))
RAW.443          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::nick,02]12 is already on that channel))
RAW.461          !script $outpost.outevent(04× 12error $+ $chr(44),$+(02[12,%::value,02]12 not enough parameters))
RAW.471          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12full (+l)02]12))
RAW.473          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12invite only (+i)02]12))
RAW.474          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12you're banned (+b)02]12))
RAW.475          !script $outpost.outevent(04× 12error $+ $chr(44),$+(can't join %::chan 02[12requires key (+k)02]12))
RAW.482          !script $outpost.outevent(04× 12error $+ $chr(44),$+(you're not opped on 02[12,%::chan,02]12))
RAW.Other        !script $outpost.outevent(02×12,$lower(%::text))
