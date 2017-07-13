[mts]
Name WinXP (Silver)
Author PhreakD
Email padovani@vetorialnet.com.br
Description Windows XP (Silver)
Website N/A
Version 1.0
MTSVersion 1.0

RGBColors 255,255,255 1,1,1 1,1,190 1,144,1 255,1,1 128,1,1 160,1,160 255,128,1 255,255,1 1,255,1 200,230,255 1,130,220 1,150,255 255,1,255 128,128,128 208,208,208
Colors 0,14,14,1,14,1,14,14,11,11,15,14,14,2,14,14,14,11,11,11,14,15,1,14,14,15
BaseColors 02,03,04,01

FontDefault tahoma,10
FontChan tahoma,10
FontQuery tahoma,10

Prefix 14(1>14)
Timestamp OFF
TimestampFormat 14hh:nn:ss

Load <pre> WinXP (Silver) (v1.0) Loaded. Bÿ PhreakD.
Unload <pre> Unloaded Theme.

TextChan 1[14<cmode>15<nick>1>1 <text>
TextChanself 1[14<cmode>14<nick>1>1 <text>

TextQuery 1[15<nick>1>1 <text>
TextQuerySelf 1[14<nick>1>1 <text>

ActionChan 15* 15<nick>14 <text>
ActionQuery 15* 15<nick>14 <text>
ActionQuerySelf 15* 15<nick>14 <text>
ActionChanSelf 15* 15<nick>14 <text>

Notice 15(1<nick>15)14 <text>
NoticeChan 15(1<nick>15)14 <text>
NoticeSelf -> <nick> <text>
NoticeSelfChan -> <chan> <Text>

Ctcp <pre> <nick> <ctcp> 15(1<text>15)
CtcpSenf <pre> <nick> <ctcp> <text>
CtcpReplySelf <pre> <nick> <text>
CtcpReply <pre> <nick> <ctcp> 15(1<text>15)
CtcpReplySelf <pre> <nick> <ctcp> 15(1<text>15)

Mode <pre> <nick> sets mode 15(1<modes>15)

NOTIFY <pre> 12<nick> is online
UNOTIFY <pre> 9<nick> is offline

DNS <pre> 15Looking up <address>...
DNSError <pre> 15Unable to resolve (<iaddress><naddress>).
DNSResolve <pre> 15Resolved <naddress> (1<iaddress>15) to (1<raddress>15)

Join <pre> 15<nick> has joined <chan> 15(1<address>15)
Part <pre> 15<nick> has left <chan> 15(1<address>15)
Kick <pre> 14<nick> has kicked <knick> 15(1<text>15)
KickSelf <pre> 14You've been kicked by <nick> 15(1<text>15)
Quit <pre> 14<nick> has left IRC 15(1<text>15)
Topic 03<pre> <nick> sets topic 15(1<text>15)
Nick 03<pre> 14<nick> is now known as <newnick>
Invite <pre> 15You've been invited to join <chan> by <nick>

WHOWAS <nick> was (02<address>) :: (02<realname>)

raw.311 14::1 Whois15: <nick> (1<address>15) is <realname>
raw.319 14::15 1Channels: <chan>
raw.312 14::15 1Server: <wserver>
raw.301 14::15 1Away reason: <text>
raw.317 14::15 1Signed on: <signontime>
raw.318 14::15 1End of Whois
raw.251 14::1 Users online15: <users> (1Invisible15: <value>)
raw.252 14::1 Operators online15: <value> 
raw.253 14::1 Unknown connections15: <value>
raw.254 14::1 Channels formed15: <value>
raw.332 <pre> 15Topic:1 <text>
raw.333 <pre> 15Topic set by0 <nick> 15on1 <text>
raw.324 <pre> 15Modes:1 <modes>
raw.329 <pre> 15Created on1 <text>
raw.305 <pre> Back.
raw.306 <pre> Away.
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to: <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> - There was no such nick
raw.421 <pre> /<value>15: unknown command
raw.432 <pre> Invalid nickname: <nick>
raw.433 <pre> Nickname already in use: <nick>
raw.436 <pre> Nickname collision with: <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Target changed too fast, please wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan>
raw.461 <pre> More parameters needed for: <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan> - It's keyed (+k)
raw.471 <pre> Cannot join <chan> - It's full (+l)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> Cannot join <chan> - It's invite only (+i)
raw.474 <pre> Cannot join <chan> - You're banned (+b)
raw.475 <pre> Cannot join <chan> - Incorrect key
raw.478 <pre> Cannot ban <text>. <chan> banlist is full.
raw.482 <pre> You're not a channel operator on <chan>
raw.511 <pre> You're /silence list is full.
raw.352 14::15 <nick> is <address> (<realname>)

ClineOp 15
ClineHOp 15
ClineVoive 15
ClineRegular 10
ClineOwmer 15
ClineEnnemy 4
ClineFriend 12
ClineMe 00
ClineCharOp @
ClineCharOwner .
ClineCharHOp %
ClineCharVoice +
ClineCharRegular

QueryEcho <pre> <text>
ChanEcho <pre> <text>
Error <pre> <text>

ImageButtons buttons.bmp