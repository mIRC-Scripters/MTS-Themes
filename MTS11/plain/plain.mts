[mts]
Name Plain
Author Decalc
Email decalc@netmadeira.com
Description White and black theme. Default Silence script theme.
Website www.decalc.pt.vu
Version 1.1
MTSVersion 1.1

Script plain.mrc

Timestamp off

Prefix .::
ParenText (<text>)

Quit <pre> Quit: <nick> has quit IRC. (<text>)
NoticeSelf » <nick>: <text>
Echo <pre> <text>
ServerError <pre>4 Error: <text>
CtcpReply » CTCPReply[<nick>/<ctcp>] - <text>
ActionChanSelf ! <me> <text>
NoticeSelfChan » <chan>: <text>
CtcpReplySelf » CTCPReply[<nick>/<ctcp>] - <text>
Notify <pre> Notify <nick> is on IRC <parentext>
DNS <pre> DNS on: <address>
ActionQuerySelf ! <me> <text>
ActionChan ! <nick> <text>
TextChan (<cmode><nick>) <text>
ActionQuery ! <nick> <text>
UNotify <pre> Notify <nick> has left IRC <parentext>
Mode <pre> Mode: <nick> sets modes: <modes>
KickSelf <pre> Kick: You were kicked from <chan> by <nick> (<text>)
Nick <pre> Nick: <nick> is now known as <newnick>
Load <pre> Plain theme loaded...
NoticeServer » (<nick>) <text>
Ctcp » CTCP[<nick>/<ctcp>] - <text>
ModeUser <pre> Mode: You set mode: <modes>
Notice <pre> Notice: <nick>: <text>
CtcpSelf » CTCP[<nick>/<ctcp>] <text>
TextQuerySelf (<me>) <text>
DNSError <pre> DNS failed.
JoinSelf <pre> Now talking on <chan>...
CtcpChanSelf » CTCP[<chan>/<ctcp>] - <text>
Unload <pre> Plain theme unloaded...
CtcpChan » CTCP[<nick>:<chan>/<ctcp>] - <text>
DNSResolve <pre> DNS resolved to: <raddress>
TextChanSelf (<cmode><nick>) <text>
Invite <pre> <nick> invites you to join <chan>
Echotarget <pre> <text>
Error <pre> 4Error: <text>
Part <pre> Part: <nick> has left <chan>
Rejoin <pre> Attempting to rejoin...
TextQuery (<nick>) <text>
Join <pre> Join: <nick> has joined <chan>
Kick <pre> Kick: <knick> was kicked by <nick> (<text>)
NoticeChan » (<nick>\<target>): <text>
NickSelf <pre> You are now known as <newnick>
Topic <pre> Topic: <nick> changes topic to '<text>'
RAW.401 <pre> The nick <nick> doesn't exist.
RAW.403 <pre> The channel <chan> doesn't exist.
RAW.404 <pre> Cannot send text to <chan>
RAW.432 <pre> <nick> is an invalid nickname.
RAW.471 <pre> 14<chan>15 is currently full
RAW.421 <pre> <value> is an invalid command.
RAW.433 <pre> <nick> is already in use.
RAW.301 » Away: <text>
RAW.313 » <nick> is an IRC Operator
RAW.307 » <nick> registered nick
RAW.319 !Script plain.wchans
RAW.311 !Script plain.whois
RAW.255 !Script plain.lusersend
RAW.332 <pre> Topic: <text>
RAW.317 !Script plain.widle
RAW.333 <pre> Set by <nick> on <text>
RAW.353 <pre> <chan> <text>
RAW.254 <pre> Channels: <value>
RAW.366 <pre> <chan> end of /names list.
RAW.318 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
RAW.312 » Server: <wserver> | <serverinfo>
RAW.324 <pre> Channel modes: <modes>
RAW.250 <pre> Total connections: <value>
RAW.482 <pre> You are not opped on <chan>
RAW.251 !Script plain.lusers
RAW.474 <pre> Cannot join <chan>. You are banned
RAW.253 <pre> Unknown connections: <value>
RAW.329 <pre> Created on: <text>
RAW.252 <pre> Opers: <value>
RAW.372 <pre> <text>
RAW.475 <pre> Cannot join <chan>. Need channel key

Colors 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,15,0,0
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 00,00,00,00

CLineOP 01
CLineHOP 01
CLineVoice 01
CLineRegular 01
CLineMe 04
CLineFriend 02
CLineEnemy 01
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault verdana,11
FontChan verdana,11
FontQuery verdana,11

