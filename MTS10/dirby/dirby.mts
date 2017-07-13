[mts]
NAME Dirby
AUTHOR murphyx
EMAIL murphyx@eresmas.com
DESCRIPTION Simple theme Dirby. My first theme in MTS, At the moment alone a scheme:)
SCRIPT dirby.mrc
WEBSITE - - -
MTSVERSION 1.1
VERSION 1.0
LOAD !script _onload

PREFIX 14·0· 
PAREN TEXT  (<text>)
TIMESTAMP ON
TIMESTAMPFORMAT 2: H:nn : 

colors 10,8,4,5,2,2,3,2,1,2,2,0,5,5,2,0,15,15,2,5,1,11,8,11,1,15
RGBColors  255,255,255 0,0,0 0,0,128 168,210,157 167,0,0 128,0,0 160,0,160 255,128,0  208,208,28 0,255,0 80,115,140 120,141,175 0,0,255 255,0,255 128,128,128  208,208,208

FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11

JOIN <pre>  Join: <nick> (<address>) in: <chan> 
JOINSELF  !script js %::chan
REJOIN <pre> Attempting to rejoin         
PART <pre> 15Part: <nick> (<address>) in: <chan> 

QUIT <pre> Disconnect: <nick> (<address>): "<text>"  

TOPIC <pre> Topic: has been changed in <chan> by <nick> : " <text> " 

NICK  <pre> Newnick: <nick> is now known as : ( <newnick> )
NICKSELF <pre> Newnick: You is now known as : ( <newnick> )

MODE <pre> Modes: <nick> sets mode in <chan> : (<modes>)
MODEUSER <pre> Usermodes: You  change usermodes: (<modes>)

KICK  <pre> Kick: <knick> was kicked of <chan> by <nick>: (<text>)
KICKSELF <pre> Kick: You were kicked from <chan> by <nick>: (<text>)

INVITE <pre> Invite: <nick> invites you to join in: <chan> 

TEXTCHAN 2(3<cmode>2<nick>) <text>
TEXTCHANSELF 2(8<cmode>2<nick>) <text>
TEXTMSG 2(3<cmode>2<nick>) <text>
TEXTMSGSELF 2(msg/<cmode><nick>) <text>
TEXTQUERY 2(3<cmode>2<nick>) <text>
TEXTQUERYSELF 2(8<cmode>2<nick>) <text>

ACTIONCHAN 14·0· <cmode><nick> <text>
ACTIONCHANSELF 14·0· <cmode><me> <text>
ACTIONQUERY 14·0· <cmode><nick> <text>
ACTIONQUERYSELF  14·0· <cmode><me> <text>

NOTICECHAN <pre> Notice from <nick> for <chan>: <text> 
NOTICESERVER <pre>  Notice from Server: <text>
SERVERERROR <pre>  Server Error:  <text>
WALLOP <pre> Wallop: <text>.

NOTIFY <pre> Notify: <nick> is now online: <text>
UNOTIFY <pre> Notify: <nick> is now offline           
NOTICE <pre> Notice from <nick>: <text> 
NOTICESELF <pre> Notice for <nick>: <text>
NOTICESELFCHAN <pre> Notice for <chan>: <text>

CTCP <pre> CTCP <ctcp> <text> send: <nick>          
CTCPCHAN <pre> CTCP <ctcp> <text> send <nick> from <chan>                
CTCPSELF <pre> CTCP <ctcp> <text> <nick>              
CTCPCHANSELF <pre> CTCP  <ctcp> <text> for you from <chan>                
CTCPREPLY <pre> CTCPREPLY <ctcp> of <nick>:  <text>       

DNS <pre> Dns: <address>                 
DNSERROR  <pre>  Unable to resolve: <address>
DNSRESOLVE <pre> Resolved: <address> to <raddress>

raw.001  <pre> Welcome to the Relay Network <me>
raw.002  <pre> You host is <server>, running version <value>
raw.003  <pre> This server was created: <value>
raw.004  <pre> Server:8 <server>
raw.005  <pre> Protocols supported by server:8 <text>
raw.251  <pre> Users:8 (<users>)10>Invisible:8 (<text>)10>Servers:8 (<value>) 
raw.252  <pre> Ircops:8  (<value>)  
raw.253  <pre> Unknown connections:8 (<value>) 
raw.254  <pre> Channels:8 (<value>) 
raw.255  <pre> Servers:8 (<value>)10>  Clients:8 (<users>) 
raw.265  <pre> Current local users:8 (<users>)10> max:8  (<value>)
raw.266  <pre> Currente global users:8 (<users>)10> max:8 (<value>) 
raw.301  !script w.a %::nick %::text
raw.305 <pre> Away |[Off]|
raw.306 <pre> Away |[On]|
raw.307 !script w.r 
raw.311 !script w.s %::nick %::address %::realname
raw.312 !script w.se %::nick %::server
raw.317 !script w.i %::nick %::idletime %::signontime 
raw.318 !script w.f %::text 
raw.319 !script w.c %::chan
raw.324 !script wcm %::chan %::modes
raw.329 !script wcd %::text
raw.332 !script wct %::chan %::text
raw.341 <pre> <nick> has been invited to: <chan> 
raw.333 !script wcc %::nick %::text
raw.353 !script n.c %::text
raw.366 !script enn %::text 
raw.372 <text>
raw.375 [3/MOTD ___________________________  0___8 _15 _ 
raw.376 [3/End MOTD ________________________  0___8 _15 _ 
raw.378 !script w.h  %:: nick %::text
raw.379 !script w.us %::nick %::text
raw.381 <pre> You are now: (IRCOP)
raw.401 <pre> No such nick
raw.403 <pre> No such chan
raw.404 <pre> Can't send text to <chan> mode: (+m)
raw.405 <pre> Can't join in: <chan> , server says you're in too many channels!
raw.406 <pre> No such nick
raw.421 <pre> Unknown command /<value>
raw.422 <pre> Servet haven't MOTD
raw.432 <pre> <nick> Erroneus nickname/Invalid characters. 
raw.433 <pre> <nick> is in use/ or is protect.
raw.436 <pre> nick collision with <nick>
raw.438 <pre> Nick change too fast, wait a moment
raw.439 <pre> Nick change too fast, wait a moment 
raw.441 <pre> <nick> is not on <chan> 
raw.442 <pre> You're not on <chan> 
raw.443 <pre> <nick> is already on <chan> 
raw.461 <pre> Insufficient parameters <text>
raw.465 <pre> You're banned from this server
raw 464 <pre> Bad password 
raw.471 <pre> Can't join in: <chan> .Channel is full (+l)
raw.472 <pre> <text>: Unknown character
raw.473 <pre> Can't join in: <chan> .0nly invite (+i)
raw.474 <pre> Can't join in: <chan> .This banned (+b)
raw.475 <pre> Can't join in: <chan> .Need key (+k)
raw 477 <pre> Can't join in: <chan> .Only nick register (+r)
raw.478 <pre> <chan> it's can't. banlist is full.<text>
raw.482 <pre> You're not operator (+o) in <chan> 
raw.511 <pre> List is full
CLINEME 00
CLINEOP 08
CLINEVOICE 03
CLINEREGULAR 15
CLINEHOP 03
CLINEOWMER 06

scheme1 greace

[scheme1]
LOAD !script _onload.s
colors 10,8,4,5,2,2,14,2,1,2,2,0,5,5,2,0,15,15,2,5,1,11,0,11,1,15
RGBColors  255,255,255 0,0,0 0,0,128 61,64,80 167,0,0 128,0,0 160,0,160 255,128,0  208,208,28 0,255,0 119,131,145 112,128,137 0,0,255 255,0,255 96,107,125 208,208,208
raw.353 !script n.c.s %::text
raw.366 !script enn.s %::text 
