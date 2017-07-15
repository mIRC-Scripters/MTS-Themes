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
Name sun theme
Author crazy2k
EMail crazytwok@mail.com
Description sun theme
Version 2.0
MTSVersion 1.1
script sun.mrc
 
Timestamp ON
TIMESTAMPFORMAT 12HH:nn 15>
 
BaseColors 11,12,00,02
Colors 02,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,02,00,02,11,11
RGBColors 255,255,255 0,0,0 105,25,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 244,188,0 255,85,0 128,20,20 128,128,128 208,208,208
 
FontDefault bright,11
FontQuery bright,11
FontChan bright,11
 
CLineOwner 12
CLineOp 12
CLineHOp 15
CLineVoice 15
CLineRegular 11
CLineMe 00

Prefix 
 
TextChan 0<cmode>12<nick> 0þ11 <text>
TextChanSelf 0<cmode>12<nick> 0þ0 <text>
ActionChan * 12<cmode>11<nick> <text>
ActionChanSelf * 12<cmode>11<me> <text>
NoticeChan 12- [11<nick>12(11<chan>12)] -11 <text>
Notice 12- [11<nick>12] - 11<text>
NoticeSelf 12- [11<nick>12] 11<text>
NoticeSelfChan 12- [11<nick>12(11<chan>12)] -11 <text>
TextQuery 0<cmode>12<nick> 0þ11 <text>
TextQuerySelf 0<cmode>12<nick> 0þ0 <text>
ActionQuery * 11<nick> <text>
ActionQuerySelf * 11<me>0 <text>
TextMsg 12[]11<nick>12<gt> <text>
TextMsgSelf --> 0<lt>11<target>0<gt> <text>
 
Mode <pre> 12mode:11 <nick> 12sets mode:11 <modes>
ModeUser <pre> 12mode:11 <me> 12sets usermode:11 <modes>
Join <pre> 11 <nick> 12(<address>) 12has joined to:11 <chan>
JoinSelf <pre> 12we are in11 <chan> 12now
Part <pre> 11 <nick> 12has left:11 <chan>
Kick <pre> 11<knick> 12was kicked by: 11<nick> 12(11<text>12)
KickSelf <pre> 12you were kicked from 11<chan> 12by 11<nick>12 (11<text>12)
Quit <pre> 11<nick> 12has quit IRC (11<text>12)
Topic <pre> 12new topic:11 '<text>' 12set by 11<nick>
Nick <pre> 11<nick>12 is now known as 11<newnick>
NickSelf <pre> 12your new nickname: 11<newnick>
Invite <pre> 11<nick> 12has invited you to join 11<chan>
ServerError <pre> 12error:11 <text>
Rejoin <pre> 12rejoining 11<chan>12...
Ctcp <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpChan <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpSelf <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpChanSelf <pre> 12ctcp:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpReply <pre> 12ctcp reply:11 <nick>12::11<ctcp> 12[11<text>12]11
CtcpReplySelf <pre> 12ctcp reply:11 <nick>12::11<ctcp> 12[11<text>12]11
Notify <pre> 11<nick> 12(11<text>12) is on IRC
UNotify <pre> 11<nick> 12(11<text>12) has left IRC
NoticeServer <pre> 12server notice:11 <text>
 
Echo <pre> <text>
EchoTarget <pre> <chan>: <text>
Error <pre> 12error:11 <text>
Load <pre> sun theme loaded
Unload <pre> sun theme unloaded

RAW.311 !script ft.whois1 %::nick %::address %::realname
RAW.319 !script ft.whois2 %::chan
RAW.312 !script ft.whois3 %::wserver %::serverinfo
RAW.301 !script ft.whois4 %::text
RAW.317 !script ft.whois5 %::idletime %::signontime
RAW.318 !script ft.whois6 %::nick

RAW.Other <pre> 11<text>
RAW.001 <pre> 12welcome to IRC.
RAW.002 <pre> 12server:11 <server>,12 version:11 <value>
RAW.003 <pre> 12server created on: 11<value>
RAW.005 <pre> 12protocols supported by this server: 11<text>
RAW.221 <pre> 12current usermode for 11<nick>12:11 <modes>
RAW.250 <pre> 12total connections: 11<value>
RAW.251 <pre> 12there are 11<users> users, <text> invisible, <value> servers
RAW.252 <pre> 12operators:11 <value>
RAW.253 <pre> 12unknown connections:11 <value>
RAW.254 <pre> 12there are 11<value> 12channels
RAW.255 <pre> 12local clients: 11<users>. 12servers:11 <value>
RAW.265 <pre> 12local users:11 <users>, 12max: 11<value>
RAW.266 <pre> 12global users:11 <users>, 12max:11 <value>
RAW.302 <pre> 12userhost: 11<nick> <address> <value>
RAW.315 <pre> 12end of /who: 11<value>
RAW.324 <pre> 12channel modes: 11<modes>
RAW.332 <pre> 12topic:11 '<text>'
RAW.333 <pre> 12topic set by 11<nick>12 on11 <text>
RAW.341 <pre> 11<nick>12 was invited to join to: 11<chan>
RAW.352 <pre> 11<nick> <address> <cmode> <away> <chan> <wserver> <realname> <value> <text> <isoper>
RAW.353 <pre> 12names on 11<chan>: <text>
RAW.366 <pre> 12end of names list: 11<chan>
RAW.372 <pre> 11<text>
RAW.375 <pre> 12message of the day:
RAW.376 <pre> 12end of message of the day:
RAW.391 <pre> 12time/date: 11<text>
 
RAW.401 <pre> 11<nick>12 no such nickname
RAW.403 <pre> 11<chan>12 no such channel
RAW.404 <pre> 11<chan>12 unable to send message
RAW.421 <pre> 11<value> 12invalid command
RAW.432 <pre> 11<nick> 12invalid nickname
RAW.433 <pre> 11<nick> 12nickname in use
RAW.471 <pre> 11<chan>12 channel full
RAW.473 <pre> 11<chan> 12channel invite only
RAW.474 <pre> 11<chan> 12banned from channel
RAW.475 <pre> 11<chan>12 channel key required
RAW.482 <pre> 11<chan>12 you don't have op
 
Website -

scheme1 black bg
scheme2 blue sun
scheme3 grey sun

[scheme1]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 40,40,40 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 244,188,0 255,85,0 128,20,20 128,128,128 208,208,208

[scheme2]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 0,0,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 161,208,255 0,128,255 128,20,20 128,128,128 208,208,208

[scheme3]
BaseColors 11,12,00,02
RGBColors 255,255,255 0,0,0 0,0,0 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 230,235,240 160,160,160 128,20,20 128,128,128 208,208,208