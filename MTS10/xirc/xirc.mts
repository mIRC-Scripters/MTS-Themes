;  XiRC theme
;    *> channel_bg.jpg from digital theme
;    *> Style of theme getted from silver.thm (extreme theme by scratcher)

[mts]
Name XiRC 
Author lobo
EMail caco@linuxmail.org
Website http://x-irc.cjb.net
Description Matrix style
Version 1.0
MTSVersion 1.0
 
Prefix 12›13›14›15›
Timestamp off
ParenText 13[15<text>13]
 
Script
 
; Regular text, nickname or channel, highlighted text, and brackets
BaseColors 13,14,15,14
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,252,0 0,148,144 0,255,255 80,80,80 128,128,128 184,188,184 208,212,208
 
FontDefault verdana,10
FontChan    verdana,10
FontQuery   verdana,10
 
 
CLineOwner 09
CLINEOP 10
CLINEHOP 06
CLINEVOICE 08
CLINEREGULAR 00
CLINEFRIEND 12
CLINEENEMY 04
CLINEME 07

CLINECHAROP 10@
CLINECHAROWNER 10.
CLINECHARHOP 10%
CLINECHARVOICE 10+
CLINECHARREGULAR 

 
TextChan 13( 14<cmode><nick> 13)15 <text>
TextChanSelf 13(15 <cmode><me> 13) <text>
ActionChan 13*14 <cmode><nick>  <text>
ActionChanSelf 13*15 <me>  <text>
NoticeChan <pre> Notice:13 (14 <cmode><nick> 13) (15<target>13) <text>
Notice <pre> Notice:13 (14<nick>13) (15<address>13) <text>
NoticeSelf <pre> Notice Send:13 (15<nick>13) <text>
NoticeSelfChan <pre> Notice Send:13 (15<chan>13) <text>
TextQuery 13(14<nick>13)15 <text>
TextQuerySelf 13(14<me>13) <text>
ActionQuery 13*14 <nick> <text>
ActionQuerySelf 13*14  <text>
TextMsg 13-> (14<nick>13)15 <text>
TextMsgSelf 13-> (14<nick><chan>13)15 <text>
 
Mode <pre> 12(13 ¤ 12) Channel Mode:14 <nick> sets mode 13(15<modes>13)
ModeUser <pre> 12(13 • 12) User Mode:13 (15<modes>13)
Join <pre> 12(13 • 12) Joins:14 <nick> 13(15<address>13)
JoinSelf <pre> Now talking in:14 13(15<chan>13)
Part <pre> 12(13 • 12) Parts:14 <nick> 13(15<address>13) <parentext>
Kick <pre> 12(13 ¤ 12) Kicks:14 <knick> was kicked by14 <nick> <parentext>
KickSelf <pre> 12(13 ¤ 12) Kicks: You were kicked from14 <chan> by14 <nick> 13(15<address>13) <parentext>
Quit <pre> 12(13 • 12) Quits:14 <nick> 13(15<address>13) <parentext>
Topic <pre> 12(13 ¤ 12) Topic Change:14 <nick> sets topic to <text>
Nick <pre> 12(13 × 12) Nick:14 <nick> changed his nick to15 <newnick>
NickSelf <pre> 12(13 × 12) Nick: You changed your nick to14 <newnick>
Invite <pre> 12(13 • 12) Invites: You were invited for14 <chan> by14 <nick>
ServerError 12(13 S 12) Error: <text>
Rejoin <pre> Rejoining to: <chan>
Ctcp <pre> CTCP 13(14<ctcp>13) requested by14 <nick> 13(15<address>13)
CtcpChan <pre> CTCP 13(14<ctcp>13) requested by14 <nick> 13(15<address>13)
CtcpSelf <pre> CTCP 13(14<ctcp>13) requested for14 <nick>
CtcpChanSelf <pre> CTCP 13(14<ctcp>13) requested for14 <chan>
CtcpReply <pre> CTCP 13(14<ctcp>13) reply from14 <nick> 13(15<address>13) <parentext>
CtcpReplySelf <pre> CTCP 13(14<ctcp> [reply]13) for14 <nick> <parentext>
Notify <pre> Notify:14 <nick> is on IRC
UNotify <pre> UNotify:14 <nick> has left IRC
Wallop <pre> Wall OP:14 <nick> 13(15<text>13)
NoticeServer 12(13 S 12) 14 <text>
 
DNS <pre> Looking up <nick><address>
DNSError <pre> Unable to resolve <nick><address>
DNSResolve <pre> Resolved  <address> to <raddress>

Echo <pre> <text>
EchoTarget <pre> <text>
Error  12(13 ø 12) <text>
Load <pre> XiRC Theme v1.0
Unload <pre> Unloading XiRC Theme v1.0
 
 
; Whois and Whowas raws and events
RAW.311     <pre> 12(13 • 12) Info: <realname> 13 (15<address>13)
RAW.314     <pre> 12(13 • 12) Name: <realname> 13(<address>12)
RAW.319     <pre> 12(13 • 12) Channels:15 <chan>
RAW.312     <pre> 12(13 • 12) Server:15 <wserver>
RAW.301     <pre> 12(13 • 12) Away: <text>
RAW.307     <pre> 12(13 • 12) Status:15 <isregd>
RAW.313     <pre> 12(13 • 12) Operator:15 <isoper>
RAW.317     <pre> 12(13 • 12) Idle:15 <idletime> (15sign on: <signontime>13)
RAW.318   12(13 • 12) <pre> End of15 /whois 15—00————————————————15—
RAW.369   12(13 • 12) <pre> End of15 /whowas 15—00————————————————15—
Whois   12(13 • 12) <pre> Start of15 /whois for14 <nick>13 15—00————————15—
Whowas   12(13 • 12) <pre> Start of15 /whowas for14 <nick>13 15—00————————15—
 
 
; Other raws
RAW.Other <pre> 12(13<numeric>12) <text>
RAW.001 <pre> 0Welcome To IRC
RAW.002 <pre> 0Host: 15<server> 0 running version 15<value>
RAW.003 <pre> 0Server created on: 15<value>
RAW.005 <pre> 0Protocols supported by this server: 15<text>
RAW.221 <pre> 0Current Usermode: 15<nick> <modes>
RAW.329 <pre> 12(13 • 12) 0Created on: <text>

RAW.250 <pre> 0Total connection(s): 15<value>
RAW.251 <pre> 0Users: 15<users> 0Invisible: 15<text> 0Servers: 15<value>
RAW.252 <pre> 0Operator(s) online: 15<value>
RAW.253 <pre> 0Unknown connection(s): 15<value>
RAW.254 <pre> 0Number of channels formed: 15<value>
RAW.255 <pre> 0Local clients: 15<users> 0on 15<value> 0server(s)
RAW.265 <pre> 0Local users: 15<users> 0Max: 15<value>
RAW.266 <pre> 0Global users: 15<users> 0Max: 15<value>
RAW.302     <pre> 12(13 • 12) Userhost:15 <nick> 13(15<address>13)
RAW.315   12(13 • 12) <pre> End of15 /who
RAW.324 <pre> 12(13 • 12) 0Modes is 15'<modes>'
RAW.332 <pre> 12(13 • 12) 0Topic is 15'<text>'
RAW.333 <pre> 12(13 • 12) 0Set by: 15<nick> 0on 15<text>
RAW.341 <pre> 0<nick> has been invited to 15<chan>
RAW.352     <pre> 12(13 • 12) <cmode><nick>:13 <realname> (15<address>13)
RAW.353 <pre> 0Nicks:12 <text>
RAW.366 <pre> 0Names end for: 12<chan>
RAW.372 14<text>
RAW.375 <pre> 10Message of the day:
RAW.376 <pre> 10End of /MOTD command.
RAW.391 <pre> 0Time at sever: 12<text>
 
RAW.401 <pre> No such 12<nick>
RAW.403 <pre> No such 12<chan>
RAW.404 <pre> Unable to send message 12<chan>
RAW.421 <pre> Invalid command 12<value>
RAW.432 <pre> Invalid nickname 12<nick>
RAW.433 <pre> Nickname 12<nick> in use
RAW.471 <pre> 0Can't join 15<chan> 0(its full +l)
RAW.473 <pre> 0Can't join 15<chan> 0(its invite only +i)
RAW.474 <pre> 0Can't join 15<chan> 0(you're banned +b)
RAW.475 <pre> 0Can't join 15<chan> 0(requires key +k)
RAW.482 <pre> 0You're not opped on 15<chan>
 
 
ImageMirc fill matrix.jpg
ImageChan photo channel_bg.jpg
ImageQUERY photo channel_bg.jpg
Imagestatus photo channel_bg.jpg


