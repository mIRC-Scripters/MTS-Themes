; Theme information
;
; Basic text appearance
; Text IRC events
; Basic IRC events
; Non-IRC events
; Whois and Whowas raws and events
; Other raws
; Error raws
[mts]
Name firetwo
Author crazy2k
EMail crazytwok@mail.com
Description A nice theme
Version 2.0
MTSVersion 1.1
script firetwo.mrc
 
Timestamp OFF
 
BaseColors 11,12,00,02
Colors 02,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,01,00,02,11,11
RGBColors 255,255,255 0,0,0 10,40,80 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 100,190,255 90,120,250 128,20,20 128,128,128 208,208,208
 
FontDefault Verdana,11
FontQuery Verdana,11
FontChan Verdana,11
 
CLineOwner 12
CLineOp 12
CLineHOp 15
CLineVoice 15
CLineRegular 11
CLineMe 00
 
Prefix 0•12•0
 
TextChan 1112[0<cmode>11<nick>12] <text>
TextChanSelf 0<lt>11<me>0<gt> <text>
ActionChan * 12<cmode>11<nick> <text>
ActionChanSelf * 12<cmode>11<me> <text>
NoticeChan 12- [11<nick>12(11<chan>12)] -11 <text>
Notice 12- [11<nick>12] - 11<text>
NoticeSelf 12- [11<nick>12] 11<text>
NoticeSelfChan 12- [11<nick>12(11<chan>12)] -11 <text>
TextQuery 12[]11<nick>12<gt> <text>
TextQuerySelf 0<lt>11<me>0<gt> <text>
ActionQuery * 11<nick> <text>
ActionQuerySelf * 11<me>0 <text>
TextMsg 12[]11<nick>12<gt> <text>
TextMsgSelf --> 0<lt>11<target>0<gt> <text>
 
Mode <pre> 12mode:11 <nick> 12sets mode:11 <modes>
ModeUser <pre> 12mode:11 <me> 12sets usermode:11 <modes>
Join <pre> 11 <nick> 12(<address>) 12has joined to:11 <chan>
JoinSelf <pre> 12we are in11 <chan> 12now
Part <pre> 11 <nick> 12has left:11 <chan>
Kick <pre> 11<knick> 12was kicked by: 11<nick> 12(11<text>12)
KickSelf <pre> 12you were kicked from 11<chan> 12by 11<nick>12 (11<text>12)
Quit <pre> 11<nick> 12has quit IRC (11<text>12)
Topic <pre> 12new topic:11 '<text>' 12set by 11<nick>
Nick <pre> 11<nick>12 is now known as 11<newnick>
NickSelf <pre> 12your new nickname: 11<newnick>
Invite <pre> 11<nick> 12has invited you to join 11<chan>
ServerError <pre> 12error:11 <text>
Rejoin <pre> 12rejoining 11<chan>12...
Ctcp <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpChan <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpSelf <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpChanSelf <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpReply <pre> 12ctcp reply:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpReplySelf <pre> 12ctcp reply:11 <nick>12::11<ctcp> 12[11<text>12]11
Notify <pre> 11<nick> 12(11<text>12) is on IRC
UNotify <pre> 11<nick> 12(11<text>12) is has left IRC
NoticeServer <pre> 12server notice:11 <text>
 
Echo <pre> <text>
EchoTarget <pre> <chan>: <text>
Error <pre> 12error:11 <text>
Load <pre> Fire theme loaded
Unload <pre> Fire theme unloaded

RAW.311 !script ft.whois1 %::nick %::address %::realname
RAW.319 !script ft.whois2 %::chan
RAW.312 !script ft.whois3 %::wserver %::serverinfo
RAW.301 !script ft.whois4 %::text
RAW.317 !script ft.whois5 %::idletime %::signontime
RAW.318 !script ft.whois6 %::nick

RAW.Other <pre> 11<text>
RAW.001 <pre> 12welcome to IRC.
RAW.002 <pre> 12server:11 <server>,12 version:11 <value>
RAW.003 <pre> 12server created on: 11<value>
RAW.005 <pre> 12protocols supported by this server: 11<text>
RAW.221 <pre> 12current usermode for 11<nick>12:11 <modes>
RAW.250 <pre> 12total connections: 11<value>
RAW.251 <pre> 12there are 11<users> users, <text> invisible, <value> servers
RAW.252 <pre> 12operators:11 <value>
RAW.253 <pre> 12unknown connections:11 <value>
RAW.254 <pre> 12there are 11<value> 12channels
RAW.255 <pre> 12local clients: 11<users>. 12servers:11 <value>
RAW.265 <pre> 12local users:11 <users>, 12max: 11<value>
RAW.266 <pre> 12global users:11 <users>, 12max:11 <value>
RAW.302 <pre> 12userhost: 11<nick> <address> <value>
RAW.315 <pre> 12end of /who: 11<value>
RAW.324 <pre> 12channel modes: 11<modes>
RAW.332 <pre> 12topic:11 '<text>'
RAW.333 <pre> 12topic set by 11<nick>12 on11 <text>
RAW.341 <pre> 11<nick>12 was invited to join to: 11<chan>
RAW.352 <pre> 11<nick> <address> <cmode> <away> <chan> <wserver> <realname> <value> <text> <isoper>
RAW.353 <pre> 12names on 11<chan>: <text>
RAW.366 <pre> 12end of names list: 11<chan>
RAW.372 <pre> 11<text>
RAW.375 <pre> 12message of the day:
RAW.376 <pre> 12end of message of the day:
RAW.391 <pre> 12time/date: 11<text>
 
RAW.401 <pre> 11<nick>12no such nickname
RAW.403 <pre> 11<chan>12 no such channel
RAW.404 <pre> 11<chan>12 unable to send message
RAW.421 <pre> 11<value> 12invalid command
RAW.432 <pre> 11<nick> 12invalid nickname
RAW.433 <pre> 11<nick> 12nickname in use
RAW.471 <pre> 11<chan>12 channel full
RAW.473 <pre> 11<chan> 12channel invite only
RAW.474 <pre> 11<chan> 12banned from channel
RAW.475 <pre> 11<chan>12 channel key required
RAW.482 <pre> 11<chan>12you don't have op
 
Website -
 
Scheme2 green one
Scheme3 dark night
Scheme4 plain one
Scheme5 pink one
Scheme1 red one
Scheme6 green copper
Scheme7 beach
Scheme8 yellow
 
[Scheme1]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 80,0,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 225,0,14 216,53,72 128,20,20 128,128,128 208,208,208
 
[Scheme2]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 0,50,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,165,14 0,128,90 128,20,20 128,128,128 208,208,208
 
[Scheme3]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 40,60,85 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 120,135,190 120,135,230 128,20,20 128,128,128 208,208,208
 
[Scheme4]
BaseColors 11,12,00,02
RGBColors 150,150,150 0,0,0 255,255,255 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 70,70,70 150,150,150 128,20,20 128,128,128 208,208,208
 
[Scheme5]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 165,0,75 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,150,190 255,0,120 128,20,20 128,128,128 208,208,208
 
[Scheme6]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 0,80,102 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,180,220 0,152,180 128,20,20 128,128,128 208,208,208

[Scheme7]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 36,50,80 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 236,208,47 240,160,50 128,20,20 128,128,128 208,208,208
 
[Scheme8]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 100,100,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 255,255,100 200,200,0 128,20,20 128,128,128 208,208,208