; Theme information
[mts]
Name The Theme - Astro72 
Author Zach88
EMail thetheme@zpws.net
Description The Theme - Astro 72 is one part of the THE THEME Series. Uses the same text (like whois/ctcps/notices) but with different colors
WEBSITE http://tt.zpws.net
Version 1.0
MTSVersion 1.1
Script tt-script.mrc

Scheme1 The Sky
Scheme2 Splash
Scheme3 Lightning
Scheme4 Love The Bunny
Scheme5 Fire Glow
Scheme6 The Smoke
Scheme7 Binary H4X0R
Scheme8 Yew
Scheme9 Holly
Scheme10 Mars
Scheme11 Firework

Timestamp ON
TimestampFormat 01ù03h:03nn03tt01ù
 
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 0,128,255 255,0,0 67,78,167 62,100,100 255,128,0 255,255,0 130,192,255 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130
 
FontDefault Bright,10
FontQuery Bright,10
FontChan Bright,10
 
Prefix 01ð03ð01ð 
ParenText 0301<text>
 
TextChan 03<lt>03<cmode><nick>03> <text>
TextChanSelf 03<lt>03<cmode><me>03> <text>
ActionChan 01ÄÄ>03 <nick> 01<text>
ActionChanSelf 01ÄÄ>03 <me> 01<text>
NoticeChan !script thetheme.notice.chan
Notice !script thetheme.notice.notice
NoticeSelf !script thetheme.notice.self
NoticeSelfChan !script thetheme.notice.chanself
TextQuery !script thetheme.textquery
TextQuerySelf !script thetheme.textqueryself
ActionQuery 01action:03 <nick> 01<text>
ActionQuerySelf 01action:03 <me> 01<text>
TextMsg !script thetheme.msg
TextMsgSelf !script thetheme.msgse
 
Mode !script thetheme.mode.mode
ModeUser !script thetheme.mode.me
Join !script thetheme.msg.join
JoinSelf !script thetheme.msg.joinme
Part !script thetheme.msg.part
Kick !script thetheme.msg.kicked
KickSelf !script thetheme.msg.kick
Quit !script thetheme.msg.quit
Nick !script thetheme.msg.nickchg
NickSelf !script thetheme.msg.chgnick
Invite !script thetheme.msg.invite
ServerError !script thetheme.error
Rejoin !script thetheme.msg.rejoin
Ctcp !script thetheme.ctcp.ctcp
CtcpChan !script thetheme.ctcp.chan
CtcpSelf !script thetheme.ctcp.self
CtcpChanSelf !script thetheme.ctcp.chan.self
CtcpReply !script thetheme.ctcp.reply
CtcpReplySelf !script thetheme.ctcp.reply.self
Notify !script thetheme.notify
UNotify !script thetheme.unnotify
Wallop !script thetheme.wallop
NoticeServer !script thetheme.notice.server
 
DNS !script thetheme.msg.dns
DNSError !script thetheme.dns.error
DNSResolve !script thetheme.dns.re
Echo  01<text>
EchoTarget 01<text>
Error !script thetheme.error
Load !script thetheme.loaded
Unload !script thetheme.unloaded
 
Whois !script thetheme.whois
Topic !script thetheme.topic.set
 
RAW.Other 01<text>
RAW.001 01<text>
RAW.002 !script thetheme.misc.host
RAW.003 !script thetheme.serv.startup
RAW.005 !script thetheme.serv.proto
RAW.221 !script thetheme.serv.modes
RAW.250 !script thetheme.serv.con
RAW.251 !script thetheme.serv.users
RAW.252 !script thetheme.serv.ops
RAW.253 !script thetheme.serv.unc
RAW.254 !script thetheme.serv.chanform
RAW.255 !script thetheme.serv.local
RAW.265 !script thetheme.serv.localusers
RAW.266 !script thetheme.serv.global
RAW.302 !script thetheme.serv.userhost
RAW.324 !script thetheme.chan.modes
RAW.332 !script thetheme.topic.current
RAW.333 !script thetheme.topicset
RAW.341 !script thetheme.msg.youinvite
 
RAW.401 !script thetheme.nick.not
RAW.403 !script thetheme.chan.not
RAW.404 !script thetheme.chan.mod
RAW.421 !script thetheme.cmd.invalid
RAW.432 !script thetheme.nick.invalid
RAW.433 !script thetheme.nick.inuse
RAW.471 !script thetheme.chan.full
RAW.473 !script thetheme.chan.inv
RAW.474 !script thetheme.chan.banned
RAW.475 !script thetheme.chan.key
RAW.482 !script thetheme.chan.op
RAW.329 !Script thetheme.raw329

[Scheme1]
Colors 00,02,04,07,02,03,03,03,03,09,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 238,238,238 0,0,0 108,47,0 0,128,255 255,0,0 67,78,167 62,100,100 255,128,0 255,255,0 130,192,255 0,144,144 25,96,151 0,0,255 255,0,255 100,100,100 130,130,130

[Scheme2]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 0,0,0 255,255,255 255,0,0 0,128,255 0,0,255 198,0,0 0,255,0 255,128,0 255,255,0 119,187,255 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128
																																																							
[Scheme3]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 0,0,0 255,255,255 255,0,0 255,255,128 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 255,255,0 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128
																												
[Scheme4]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 0,0,0 255,255,255 255,0,0 255,128,255 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 255,200,255 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128

[Scheme5]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 0,0,0 255,255,255 255,0,0 255,0,0 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 255,70,70 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128

[Scheme6]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 192,192,192 0,0,0 255,0,0 62,62,62 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 100,100,100 64,128,128 253,82,0 230,230,230 0,0,0 245,240,250 90,90,90

[Scheme7]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 0,0,0 255,255,255 255,0,0 128,255,128 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 0,255,0 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128

[Scheme8]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 0,0,0 255,255,255 255,0,0 175,175,97 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 128,128,64 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128

[Scheme9]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 255,255,255 0,0,0 255,0,0 175,175,97 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 128,128,64 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128

[Scheme10]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 255,255,255 0,0,0 255,0,0 255,0,0 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 255,70,70 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128

[Scheme11]
Colors 00,01,03,03,03,03,03,03,03,03,01,01,03,03,01,09,03,03,01,01,01,00,01,00,01,14,15,14
RGBColors 255,255,255 0,0,0 255,0,0 255,0,0 0,0,255 198,0,0 0,255,0 255,128,0 128,255,0 0,0,255 64,128,128 253,82,0 230,230,230 192,192,192 153,153,153 128,128,128
