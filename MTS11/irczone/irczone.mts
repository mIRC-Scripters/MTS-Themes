;----------irczone.mts----------generated with Theme Editor v0.6.33b by BeteLgeuZe-----
[mts]
Name irczone
Author [kaos]
Email nilmb@andorra.ad
Description Simple theme.
Website www.ircz.tk
Version 0.2
MTSVersion 1.1
Script irczone.ircz

Timestamp ON
TimestampFormat [h:nntt]

ParenText (<text>)
RAW.403 <pre> The channel [<chan>] doesn't exist.
Prefix [!]
RAW.404 <pre> Cannot send text to [<chan>]
RAW.432 <pre> [<nick>] is an invalid nickname.
RAW.421 <pre> [<value>] is an invalid command.
RAW.433 <pre> [<nick>] is already in use.
Quit <pre> [/Quit] <nick> has quit IRC. (<text>)
NoticeSelf [/noticeSelf] <nick>: » <text>
Echo <pre> <text>
ServerError <pre>15E14E1RR15OR: <text>
CtcpReply [/CTCPReply] [<nick>/<ctcp>] » <text>
RAW.474 <pre> Cannot join [<chan>]. You are banned
ActionChanSelf [/me] <me> <text>
NoticeSelfChan [/noticeSelfChan] <nick>: » <text>
RAW.475 <pre> Cannot join [<chan>]. Need channel key
CtcpReplySelf [/CTCPReply] [<nick>/<ctcp>] » <text>
RAW.471 <pre> 14<chan>15 is currently full
Notify <pre> [Notify] <nick> is on IRC <parentext>
DNS <pre> [DNS] on: <address>
RAW.252 <pre> [Opers]: <value>
RAW.372 <pre> <text>
ActionQuerySelf [/me] <me> <text>
RAW.253 <pre> [Unknown connections]: <value>
RAW.329 <pre> [Created on]: <text>
ActionChan [/me] <nick> <text>
RAW.250 <pre> [Total conections] <value>
RAW.482 <pre> You are not opped on [<chan>]
RAW.251 !Script irczone.lusers
TextChan [<cmode><nick>] <text>
RAW.353 <pre> <chan> <text>
RAW.254 <pre> [Channels]: <value>
RAW.366 <pre> <chan> end of [/names] list.
RAW.318 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
ActionQuery [/me] <nick> <text>
RAW.319 !Script irczone.wchans
RAW.255 !Script irczone.lusersend
RAW.332 <pre> [Topic] <text>
RAW.317 !Script irczone.widle
RAW.333 <pre> [Set by <nick> on <text>]
UNotify <pre> Notify [<nick>] has left IRC <parentext>
RAW.307 <nick> its a registered nick
Mode <pre> [/mode] <nick> sets modes: <modes>
KickSelf <pre> [/kick]: You were kicked from <chan> by <nick> (<text>)
Nick <pre> [/Nick] <nick> is now known as <newnick>
RAW.312 [Server/s] » <wserver> | <serverinfo>
RAW.324 <pre> [Channel modes]: <modes>
Load <pre> [/Theme] [I R C Z o n e] theme loaded...
RAW.301 [/Away] » <text>
RAW.313 » [<nick>] is an IRC Operator
NoticeServer [/NoticeServer] <nick>: » <text>
RAW.311 !Script irczone.whois
Ctcp [/CTCP] [<nick>/<ctcp>] » <text>
ModeUser <pre> [/Mode] You set mode: <modes>
Notice <pre> [/notice] <nick>: <text>
CtcpSelf [/CTCP] [<nick>/<ctcp>] » <text>
TextQuerySelf [<me>] <text>
DNSError <pre> [DNS] failed.
JoinSelf <pre> [/Join] Now talking on <chan>...
CtcpChanSelf [/CTCP] [<nick>/<ctcp>] » <text>
Unload <pre> [/Theme] [I R C Z o n e] theme Unloaded...
CtcpChan [/CTCP] [<nick>:<chan>/<ctcp>] » <text>
DNSResolve <pre> [DNS] resolved to: <raddress>
TextChanSelf [<cmode><nick>] <text>
Invite <pre> [/invite] <nick> invites you to join <chan>
Echotarget <pre> [<text>]
Error <pre> 15E14E1RR15OR: <text>
Part <pre> [/Part] <nick> has left <chan>
Rejoin <pre> Attempting to rejoin...
TextQuery [<nick>] <text>
Join <pre> [/Join] <nick> has joined <chan>
Kick <pre> [/kick] <knick> was kicked by <nick> (<text>)
NoticeChan [/noticeChan] (<nick>\<target>): » <text>
NickSelf <pre> [/Nick] You are now known as <newnick>
Topic <pre> [Topic] <nick> changes topic to '<text>'

Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,14,15,14,00,0,0
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 00,00,00,00

CLineOP 01
CLineHOP 01
CLineVoice 14
CLineRegular 10
CLineMe 07
CLineFriend 02
CLineEnemy 01
CLineCharOwner .
CLineCharOP 01@
CLineCharHOP %
CLineCharVoice 14+
FontDefault verdana,11
FontChan verdana,11
FontQuery verdana,11

