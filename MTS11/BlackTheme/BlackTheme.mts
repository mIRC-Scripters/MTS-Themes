; Theme information
[mts]
Name BlackTheme
Author John Endicott
EMail teenmanlds@yahoo.com
Website http://teenman.cjb.net
Description My first theme, and I wanted it dark.
Version 1.1
MTSVersion 1.1

Timestamp ON
TimestampFormat 15[hh:nntt]

BaseColors 14,15,04,03
Colors 01,15,15,15,04,04,15,15,15,15,15,14,15,15,15,14,15,15,15,15,15,01,14,01,15,15

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11

Prefix 4•
ParenText 4(<text>4)

TextChan 4(15<nick>4) <text>
TextChanSelf 4(15<me>4) <text>
ActionChan 4* <nick> <text>
ActionChanSelf 4* <me> <text>
NoticeChan Notice from 15<nick>:15<target>: <text>
Notice Notice to 15<nick>: <text>
NoticeSelf -» 15<target>-» <text>
NoticeSelfChan -» 15<target>-» <text>
TextQuery 4(15<nick>4) <text>
TextQuerySelf 4(15<me>4) <text>
ActionQuery 4* <nick> <text>
ActionQuerySelf 4* <me> <text>
TextMsg Private Message from 15<nick>: <text>
TextMsgSelf Private Message to 15<nick>: <text>

Mode <pre> 15<nick> sets mode: 15<modes>
ModeUser <pre> 15<nick> sets usermode: 15<modes>
Join <pre> 15<nick> has joined 15<chan>
JoinSelf <pre> You have joined 15<chan>
Part <pre> 15<nick> has left 15<chan> <parentext>
Kick <pre> 15<knick> has been kicked from 15<chan> by 15<nick> <parentext>
KickSelf <pre> You have been kicked from 15<chan> <parentext>
Quit <pre> 15<nick> has quit IRC <parentext>
Topic <pre> 15<nick> has changed topic to '<text>'
Nick <pre> 15<nick> is known as 15<newnick>
NickSelf <pre> Your new nick is 15<newnick>
Invite <pre> You have been invited to 15<chan>
ServerError <pre> Server Error: <text>
Rejoin <pre> Attempting to rejoin 15<chan>
Ctcp <pre> CTCP: <ctcp>:<text>
CtcpChan <pre> CTCP on 15<chan>: <ctcp>:<text>
CtcpSelf <pre> CTCP-» 15<nick>-» <ctcp>:<text>
CtcpChanSelf <pre> CTCP-» 15<chan>-» <ctcp>:<text>
CtcpReply <pre> CTCP Reply from 15<nick>: <ctcp>:<text>
CtcpReplySelf <pre> CTCP Reply-» 15<chan><nick>-» <ctcp>:<text>
Notify <pre> 15<nick> is on IRC <parentext>
UNotify <pre> 15<nick> has quit IRC <parentext>
Wallop <pre> Wallop from 15<nick>: <text>
NoticeServer <pre> Server Notice from 15<nick>: <text>

DNS <pre> DNS Request: 15<nick><address>
DNSError <pre> 4DNS Failed!
DNSResolve <pre> DNS Resolved of 15<nick> 4(15<address>4): 15<iaddress>
Echo <text>
EchoTarget <text>
Error <pre> Script Error: <text>
Load <pre> BlackTheme v1.0 Loaded
Unload <pre> Thank you for loading BlackTheme

RAW.311 9• WHOIS 15<nick>: <realname> - <address>
RAW.314 9• WHOWAS 15<nick>: <realname> - <address>
RAW.319 9• Channels: <chan>
RAW.312 9• Server: <wserver> - <serverinfo>
RAW.301 9• 15<nick> is away <parentext>
RAW.307 9• Nickname is registered - <isregd>
RAW.313 9• IRCop - <isoper> - <operline>
RAW.317 9• 15<nick> signed on 15<signontime> - Idle for 15<idletime>
RAW.318 9• End of whois for 15<nick>
RAW.369 9• End of whowas for 15<nick>

RAW.Other <text>
RAW.001 <pre> Welcome to IRC
RAW.002 <pre> Server 15<server> running 15v<value>
RAW.003 <pre> Server created on: 15<value>
RAW.005 <pre> Server Protocols: <text>
RAW.221 <pre> Usermode for 15<nick>: 15<modes>
RAW.250 <pre> Total Connections: 15<value>
RAW.251 <pre> Users: 15<users> - Invisible: 15<text> - Servers: 15<value>
RAW.252 <pre> Operators: 15<value>
RAW.253 <pre> Unkown Connections: 15<value>
RAW.254 <pre> Number of Channels: 15<value>
RAW.255 <pre> Local Clients: 15<users> - Servers: 15<value>
RAW.265 <pre> Local Users: 15<users> - Max: 15<value>
RAW.266 <pre> Global Users: 15<users> - Max: 15<value>
RAW.302 <pre> Userhost for 15<nick>: 15<address> <value>
RAW.315 <pre> End of /Who for 15<value>
RAW.324 <pre> Channel Modes for 15<chan>: 15<modes>
RAW.332 <pre> Topic for 15<chan> is '<text>'
RAW.333 <pre> Topic for 15<chan> set by 15<nick> on 15<text>
RAW.341 <pre> 15<nick> was invited to 15<chan>
RAW.352 <pre> Who Data: <text>
RAW.353 <pre> <chan> <text>
RAW.366 <pre> End of Names list for 15<chan>
RAW.372 <pre> MOTD: <text>
RAW.375 <pre> <text>
RAW.376 <pre> <text>
RAW.391 <pre> Time/Date at Server: 15<text>

RAW.401 <pre> No such nickname 4(<nick>4)
RAW.403 <pre> No such channel 4(<chan>4)
RAW.404 <pre> Unable to send message to channel 4(<chan>4)
RAW.421 <pre> Invalid Command 4(<value>4)
RAW.432 <pre> Invalid Nickname 4(<nick>4)
RAW.433 <pre> Nickname in use 4(<nick>4)
RAW.471 <pre> Channel Full 4(<chan>4)
RAW.473 <pre> Channel is invite only 4(<chan>4)
RAW.474 <pre> You are banned from Channel 4(<chan>4)
RAW.475 <pre> Key required to enter channel 4(<chan>4)
RAW.482 <pre> Your are not an OP 4(<chan>4)
