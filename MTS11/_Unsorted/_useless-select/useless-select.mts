; Theme information
[mts]
Name useless-select
Author yAmi
EMail yAmi@whatz.org
Description simple looking theme with 6 schemes.
Version 0.1b
MTSVersion 1.1
Script useless-select.mrc
 
Timestamp ON
TimestampFormat hh<c3>:<c2>ddt |<c3>-
 
Scheme1 white/blue
Scheme2 white/orange
Scheme3 black/def
Scheme4 black/blue
Scheme5 black/orange
 
BaseColors 15,00,07,07
Colors 15,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,15,00,15,00,00
RGBColors 0,0,0 255,184,72 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 206,53,49 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
 
FontDefault Tahoma,9
FontQuery Tahoma,9
FontChan Tahoma,9
 
CLineMe 07
 
Prefix  
 
TextChan <pre>   .<c3><cmode><nick>: <text>
TextChanSelf <pre>   .<c3><cmode><me>: <text>
ActionChan <pre> !action: <c3><nick> <text>
ActionChanSelf <pre> !action: <c3><me> <text>
NoticeChan <pre> !notice/<c3>chan: from <c3><nick> <text>
Notice <pre> !notice: from <c3><nick> <text>
NoticeSelf <pre> .notice/<c3><nick>: <text>
NoticeSelfChan <pre> .notice/<c3><chan>: <text>
TextQuery <pre> .<c3><nick>: <text>
TextQuerySelf <pre> .<c3><me>: <text>
ActionQuery <pre> !action: <c3><nick> <text>
ActionQuerySelf <pre> !action: <c3><me> <text>
TextMsg <pre> .<c3><nick>: <text>
TextMsgSelf <pre> .<c3><nick>: <text>
 
Mode <pre> .mode: <c3><nick> sets mode <modes> (<c3><chan>)
ModeUser <pre> .mode: <c3><nick> sets mode <modes> (<c3><chan>)
Join <pre> »join: <c3><nick> (<address>) has joined <c3><chan>...
JoinSelf <pre> joined <c3><chan>...
Part <pre> «part: <c3><nick> (<address>) has left <chan> (<text>)
Kick <pre> !kick: <c3><nick> kicked <c3><knick> from <c3><chan> (<text>)
KickSelf <pre> !kick: you kicked <c3><knick> from <c3><chan> (<text>)
Quit <pre> «quit: <c3><nick> has left irc. (<text>)
Topic <pre> !topic: <c3><nick> changed topic: <text>
Nick <pre> .nick: <c3><nick> is now known as <c3><newnick>
NickSelf <pre> .nick: you are now known as <newnick>
Invite <pre> .invite: <c3><nick> invites you to join <c3><chan>
ServerError <pre> .server/<c3>error: <text>
Rejoin <pre> .rejoining: <c3><chan>
Ctcp <pre> !ctcp/<c3><ctcp>: from <c3><nick>
CtcpChan <pre> !ctcp/<c3><ctcp>/<chan>: from <c3><nick>
CtcpSelf <pre> .ctcp/<c3><ctcp>: <nick>
CtcpChanSelf <pre> .ctcp/<c3><ctcp>/<chan> <text>
CtcpReply <pre> .ctcpreply/<c3><ctcp>/<nick>: <text>
CtcpReplySelf <pre> .ctcpreply/<c3><ctcp>/<nick>: <text>
Notify <pre> !notify: <text>
UNotify <pre> !unotify: <text>
Wallop <pre> !wallop: from <c3><nick>: <text>
NoticeServer <pre> .server/<c3>notice: from <c3><nick>: <text>
 
DNS <pre> .dns: looking up <c3><address>...
DNSError <pre> .dns.error: unable to resolve <c3><radress>
DNSResolve <pre> .dns: resolved <c3><address> to <c3><raddress>...
Echo <pre> .<text>
EchoTarget <pre> .<target>: <text>
Error <pre> .error:
Load <pre> Loaded useless-select 0.1b (white/def)
 
RAW.369 
Whois !Script start.select.whois
Whowas !Script start.select.whowas
 
RAW.Other <text>
RAW.001 <pre> .server: welcome to internet relay chatnetwork
RAW.002 <pre> .server: <server> <value>
RAW.003 <pre> .server: created on <value>
RAW.005 <pre> .server: protocols supported <text>
RAW.221 <pre> .server: current usermode: <nick> <modes>
RAW.250 <pre> .server: <value> total connections
RAW.251 <pre> .server: <users> users, <text> invisible, on <value> servers
RAW.252 <pre> .server: <value> operators online
RAW.253 <pre> .server: <value> unknown connections
RAW.254 <pre> .server: number of chans <value>
RAW.255 <pre> .server: <users> local clients, and <value> servers
RAW.265 <pre> .server: <users> local users, max. <value>
RAW.266 <pre> .server: <users> global users, max. <value>
RAW.302 <pre> .server: userhost <nick> (<address>) <value>
RAW.332   topic: <text>
RAW.333 <pre> set by: <c3><nick> @ <text>
RAW.341 <pre> .invite: <c3><nick> for <c3><chan>
RAW.391 <pre> .server/<c3>time: <text>
RAW.330 !Script set -u4 %::select.auth $iif($gettok(%::text,4,32) != as,$ifmatch,$gettok(%::text,1,32))
RAW.305 <pre> .away: you are no longer marked as being away
RAW.306 <pre> .away: you have been marked as being away
 
RAW.401 <pre> .<c3>error: no such nickname
RAW.403 <pre> .<c3>error: no such channel
RAW.404 <pre> .<c3>error: unable to send message to (<c3><chan>)
RAW.421 <pre> .<c3>error: invalid command (<c3><value>)
RAW.432 <pre> .<c3>error: invalid nickname (<c3><value>)
RAW.433 <pre> .<c3>error: nickname in use (<c3><nick>)
RAW.471 <pre> .<c3>error: channel is full (<c3><chan>)
RAW.473 <pre> .<c3>error: channel is invite only (<c3><chan> +i)
RAW.474 <pre> .<c3>error: you are banned from (<c3><chan> +b)
RAW.475 <pre> .<c3>error: channel requires a key (<c3><chan> +k)
RAW.482 <pre> .<c3>error: no op on (<c3><chan>)
RAW.405 <pre> .<c3>error: cannot join <c3><chan> you are on too many channels...
RAW.406 !Script start.select.whowas.error
RAW.436 <pre> .<c3>error: nick collision with <nick>...
 
[Scheme1]
BaseColors 15,00,07,07
RGBColors 0,0,0 255,184,72 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 123,166,214 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
 
Load <pre> Loaded useless-select 0.1b (white/blue)
 
 
[Scheme2]
BaseColors 15,00,07,07
RGBColors 0,0,0 255,184,72 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 214,125,41 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
 
Load <pre> Loaded useless-select 0.1b (white/yellow)
 
 
[Scheme3]
BaseColors 00,15,07,07
Colors 00,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,00,15,15
 
Load <pre> Loaded useless-select 0.1b (black/def)
 
 
[Scheme4]
BaseColors 00,15,07,07
Colors 00,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,00,15,15
RGBColors 0,0,0 255,184,72 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 123,166,214 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
 
Load <pre> Loaded useless-select 0.1b (black/blue)
 
 
[Scheme5]
BaseColors 00,15,07,07
Colors 00,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,00,15,00,15,15
RGBColors 0,0,0 255,184,72 0,0,128 0,148,0 255,0,0 80,91,97 160,0,160 214,125,41 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 60,60,60 255,255,255
 
Load <pre> Loaded useless-select 0.1b (black/orange)
 
