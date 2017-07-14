[mts]
Name popua
Author PaTaGoN
Email patagon@mtv.com
Description A strange theme with 2 schemes and whois display
Version 1.3
MTSVersion 1.0
Website http://wombat.scriptmania.com

Scheme1 Grey
Scheme2 Violet

Load <pre> theme loaded: popua
Unload <pre> theme unloaded: popua

Prefix 14Ä15Ä00Ä
Timestamp off

FontDefault terminal,8
FontChan terminal,8
FontQuery terminal,8

BaseColors 00,08,15,14
Colors 5,7,4,8,11,11,3,3,3,3,3,15,5,7,6,0,3,2,3,0,12,5,0,5,11,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 104,52,64 160,0,160 255,128,0 218,250,62 0,255,0 0,144,144 173,233,235 173,201,255 255,0,255 128,128,128 208,208,208

SCRIPT pa.mrc

RAW.311 !script w.init %::nick %::address %::realname 
RAW.319 !script w.chan %::chan
RAW.312 !script w.server %::wserver
RAW.317 !script w.idle %::idletime 
RAW.301 !script w.away %::text
RAW.318 !script w.end 

CLineOwner 00
ClineOp 00
CLineVoice 00
CLineMe 08
CLineRegular 11

Mode <pre> 00Mode(04<chan>00) <modes> by 11<nick>00
ModeUser <pre> 00Mode(11<nick>00) <modes>
Join <pre> 00Join(04<chan>00) <nick> (11<address>00) 
Joinself 15<pre> 00Join(04<chan>00) 
Part <pre> 00Part(04<chan>00) <nick> (11<address>00) <parentext>
TextChan 14>00<cmode>15<nick>14: <text>
TextChanSelf 12>00<cmode>08<me>12: <text>
Kick <pre> 00Kick(04<chan>00) <knick> (11<address>00) by 11<nick>00 <parentext>
KickSelf <pre> 00Kick(04<chan>00) <nick> (11<address>00) <parentext>
Quit <pre> 00Quit <nick> (11<address>00) <parentext>
Topic <pre> 00Topic(04<chan>00) '<text>' by 11<nick>00
Nick <pre> 00Nick <nick> (11<address>00) 00is now known as 11<newnick>
NickSelf <pre> 00Your nick is 11<newnick>
Invite <pre> 00Invite(04<chan>00) by 11<nick>00
TextQuery 14>00<cmode>15<nick>14: <text>
TextQuerySelf 12>00<cmode>08<me>12: <text>

ServerError <pre> 00Error:00 <text>
Notice 11-<nick> 00<text>
NoticeSelf 11-> -<nick> 00<text>
Rejoin <pre> 11Rejoining(04<chan>00)...

ActionChan * 00<cmode>15<nick>14: <text>
ActionChanSelf * 00<cmode>15<nick>14: <text>
ActionQuery * 15<nick>00: <text>
ActionQuerySelf * 15<nick>00: <text>

CTCP <pre> 04<ctcp> <nick> <text>
CTCPSelf <pre> 04<ctcp> <nick> <text>
CTCPChan <pre> 04<ctcp> <nick> - <chan> <text>
CTCPChanSelf <pre> 04<ctcp> <chan> <text>
CtcpReply <pre> 04<ctcp> <nick> <text>
CtcpReplySelf <pre> 04<ctcp> <nick> <text>
TextMsg * 15<nick>00: <text>
TextMsgSend * 15<nick>00: <text>

Echo <pre> 00<text>
EchoTarget <pre> (04<target>00) <text>
Error <pre> 00<text>

RAW.250 <pre> 00Total connections: 08<value>
RAW.251 <pre> 00Users (Visibles 08<users> 00- Invisible 08<text>00) 00Servers: 08<value>
RAW.252 <pre> 00IRCop on: 08<value>
RAW.253 <pre> 00Unknown connections: 08<value>
RAW.254 <pre> 00Channels: 08<value>
RAW.302 <pre> 00Userhost: <nick> (11<address>)
RAW.315 <pre> 00End of /WHO list
RAW.324 <pre> 00Mode(04<chan>00) <modes>
RAW.332 <pre> 00Topic(04<chan>00) is '<text>' 
RAW.333 <pre> 00by 11<nick>00 on 11<text>
RAW.341 <pre> 11<nick> 00has been invited to 04<chan>
RAW.352 <pre> 00<nick> <address> <realname> <cmode> 
RAW.353 <pre> 00/NAMES LIST(04<chan>00) - <text>
RAW.375 <pre> 00Message of the day:
RAW.372 <pre> 08<text>
RAW.376 <pre> 00End of /MOTD 
RAW.391 <pre> 00Date: 08<value>
RAW.401 <pre> 11<nick> 00No such nickname 
RAW.403 <pre> 04<chan> 00No such channel
RAW.404 <pre> 04<chan> 00Unable to send message to
RAW.421 <pre> 08<value> 00Invalid command
RAW.433 <pre> 00The nickname 11<nick>00 is already in use
RAW.471 <pre> 00You can't join(40<chan>00) (full +l)
RAW.473 <pre> 00You can't join(04<chan>00) (invite only +i)
RAW.474 <pre> 00You can't join(04<chan>00) (banned +b)
RAW.475 <pre> 00You can't join(04<chan>00) (key +k)
RAW.482 <pre> 00You don´t have @
RAW.Other <pre> 00<text>

[Scheme1]
BaseColors 01,02,11,08
RGBColors 255,255,255 0,0,0 69,100,263 0,213,213 0,0,168  124,136,156  255,128,0 125,18,105 255,255,0 50,100,160 165,723,45 178,218,213 181,220,255  0,104,52 128,28,28  255,243,255

Prefix 03Ä12Ä15Ä

[Scheme2]
BaseColors 11,12,02,14
RGBColors 255,255,255 0,0,0 135,150,250 0,144,0 255,0,0 60,40,120 205,128,0 255,128,0 255,255,0 0,255,0 0,144,144 214,95,220 25,150,250 128,20,20 128,128,128 208,208,208

Prefix 12Ä02Ä15Ä