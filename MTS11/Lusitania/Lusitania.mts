[mts]
NAME Lusitania
AUTHOR PuffGirl
EMAIL Napoleonika@gmail.com
DESCRIPTION Default Theme is called MiddleAge. Plus 6 schemes: Sphere, Invision, Moonlight, Cold, Static and Fabrics.
SCRIPT Lusitania.mrc
VERSION 1st
MTSVERSION 1.1
WEBSITE www.PT-Scripters.com

LOAD !script lusitania.load 
UNLOAD !script lusitania.unload

TIMESTAMP ON
TIMESTAMPFORMAT  <c3>,<c1>‹ HH:nn <c3>,<c1>›

FONTDEFAULT tahoma,10
FONTCHAN tahoma,10
FONTQUERY tahoma,10

CLINEME 14

PREFIX <c1> • 
PARENTEXT (<text>)

TEXTCHAN !script lusitania.chan.text
TEXTCHANSELF !script lusitania.chan.text
TEXTQUERY !script lusitania.query.text
TEXTQUERYSELF !script lusitania.query.text
TEXTMSG !script lusitania.textmsg
TEXTMSGSELF !script lusitania.textmsg.self

ACTIONCHAN !script lusitania.chan.action
ACTIONCHANSELF !script lusitania.chan.actionself
ACTIONQUERY !script lusitania.query.action
ACTIONQUERYSELF !script lusitania.query.selfaction

NOTICECHAN !script lusitania.noticechan
NOTICE !script lusitania.notice
NOTICESELF !script lusitania.noticeself
NOTICESELFCHAN !script lusitania.noticeself.chan

INVITE !script lusitania.invite

MODE !script lusitania.onmode
MODEUSER <pre> Usermode: <modes> <pre>

JOIN !script lusitania.onjoin
PART !script lusitania.onpart
JOINSELF !script lusitania.joinself
QUIT !script lusitania.onquit

TOPIC !script lusitania.show.topic

KICK !script lusitania.kick
KICKSELF !script lusitania.kickself

NICK !script lusitania.onnick
NICKSELF !script lusitania.nickself

CTCP !script lusitania.ctcp
CTCPCHAN !script lusitania.ctcp
CTCPREPLY !script lusitania.ctcpreply
CTCPSELF !script lusitania.ctcp
CTCPCHANSELF !script lusitania.ctcp 
CTCPREPLYSELF !script lusitania.ctcpreply

NOTIFY  ›› Notify: <c1><nick> is Online
UNOTIFY  ›› Unotify: <c1><nick> is Offline

DNS DNS  ›› Attempting to resolve <address>...
DNSERROR  ›› Dns: Unable to resolve <iaddress><naddress>
DNSRESOLVE  ›› Dns: Ip (<iaddress>) named (<naddress>) resolved to (<raddress>)

Echo <text>
EchoTarget (<target>) <text>
Error   ›› Error: <text>

RAW.001 <pre> Welcome to the <text> network
RAW.002 <pre> Host: <address>
RAW.003 <pre> Created: <value>
RAW.311 !script lusitania.whois1
RAW.312 !script lusitania.whois3     
RAW.314 !script lusitania.whowas   
RAW.319 !script lusitania.whois2                                 
RAW.301 !script lusitania.whois4                         
RAW.307 !script lusitania.whois5                 
RAW.313 !script lusitania.whois6           
RAW.317 !script lusitania.whois7  
RAW.318 !script lusitania.whois8 
RAW.323 <pre> End of channels list
RAW.324 !script lusitania.main.modes
RAW.329 !script lusitania.chan.created
RAW.332 <pre>  Topic: <text> <pre>
RAW.333 !script lusitania.setby
RAW.341 <pre> Invite: <c1><nick> has been invited to <c1><chan>
RAW.364 <pre> Link: <text>
RAW.366 !script lusitania.main.users
RAW.371 <text>
RAW.374 <pre> End of Info <server>
RAW.391 <pre> Server Time: <value>   
RAW.401 <pre> No such nickname: <nick>
RAW.403 !script lusitania.403
RAW.404 <pre> Cannot send text/data to: <chan>
RAW.405 <pre> <chan> You have joined too many channels.
RAW.406 <pre> Whowas on <nick> <pre> There was no such nick
RAW.421 <pre> Unknown command: /<value>
RAW.432 <pre> Invalid nickname: <nick>
RAW.433 <pre> <nick> is already in use
RAW.436 <pre> Nickname collision with: <nick>
RAW.438 <pre> Nickname changed too fast. Try again later
RAW.439 <pre> Target changed too fast. Try again later
RAW.440 <pre> Services are currently down. Try again later.
RAW.441 <pre> <nick> is not on <chan>
RAW.442 <pre> You're not on <chan>
RAW.443 <pre> <nick> is already on <chan> <text>
RAW.461 <pre> <text> <pre> Insufficient parameters!
RAW.465 <pre> You're banned from this server.
RAW.467 <pre> Cannot join <chan> +k
RAW.471 <pre> Cannot join <chan>. Channel is full. +l
RAW.472 <pre> Unknown char: <text>
RAW.473 <pre> Cannot join <chan>. Invited only. +i
RAW.474 <pre> Cannot join <chan>. Banned. +b
RAW.475 <pre> Cannot join <chan>. Wrong channel key.
RAW.478 <pre> Cannot ban <text>. Ban List is full
RAW.482 <pre> You don't have op status on <chan> 

BaseColors 05,14,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,14,01,00,01,00,01,01
RGBColors 74,62,67 255,255,255 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210 

SCHEME1 Sphere
SCHEME2 Invision
SCHEME3 Moonlight
SCHEME4 Cold
SCHEME5 Static
SCHEME6 Fabrics

[SCHEME1]

TIMESTAMPFORMAT <c1>,0 ‹ HH:nn<c1>,0 ›
BaseColors 14,12,12,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,06,01,01,01,01,14,01,00,01,00,01,01
RGBColors 63,54,101 255,255,255 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 176,98,255 255,0,255 127,127,127  210,210,210


[SCHEME2]

TIMESTAMPFORMAT  <c1>,0 ‹ HH:nn<c1>,0 ›
BaseColors 14,01,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,06,01,01,01,01,14,01,00,01,00,01,01
RGBColors 46,92,131 255,255,255 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME3]

TIMESTAMPFORMAT <c1>,0 ‹ HH:nn<c1>,0 ›
BaseColors 02,14,03,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,06,01,01,01,01,01,01,00,01,00,01,01
RGBColors 41,41,84 255,255,255 81,81,162 128,128,192 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME4]

TIMESTAMPFORMAT <c1>,0 ‹ HH:nn<c1>,0 ›
BaseColors 14,02,03,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,06,01,01,01,01,01,01,00,01,00,01,01
RGBColors 198,204,249 80,75,78 81,81,162 128,128,192 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 0,0,252 255,0,255 0,0,151  210,210,210

[SCHEME5]

TIMESTAMPFORMAT <c1>,0 ‹ HH:nn<c1>,0 ›
BaseColors 02,15,01,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,06,01,01,01,01,01,01,00,01,00,01,01
RGBColors 255,255,255 109,121,135 81,81,162 128,128,192 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 0,0,252 255,0,255 0,0,151  210,210,210

[SCHEME6]

BaseColors 15,14,02,14
Colors 00,01,01,05,01,01,01,01,01,01,01,01,01,01,06,01,01,01,01,01,01,00,01,00,01,01
RGBColors 255,255,255 98,105,82 81,81,162 128,128,192 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 255,255,255 0,147,147 0,255,255 0,0,252 255,0,255 0,0,151  210,210,210
