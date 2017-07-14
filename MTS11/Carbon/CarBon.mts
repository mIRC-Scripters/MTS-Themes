[mts]
NAME Carbon
AUTHOR PuffGirl
EMAIL Napoleonika@gmail.com
DESCRIPTION Default Puff v1.0 Theme
SCRIPT Carbon.mrc
VERSION 1.0
MTSVERSION 1.1

TIMESTAMP ON
TIMESTAMPFORMAT <c1>,<c1> <c1>,<c3> HH:nn <c1>,<c1>  

FONTDEFAULT tahoma,10
FONTCHAN tahoma,10
FONTQUERY tahoma,10


PREFIX  › 
PARENTEXT (<text>)

TEXTCHAN <pre> <c1>(14 <cmode><nick> <c1>) <text>
TEXTCHANSELF <pre> (14 <cmode><c1><nick> ) <text>
ACTIONCHAN <c1> ! <cmode><nick> <text>
ACTIONCHANSELF <c1> ! <cmode><nick> <text>
NOTICECHAN  ›› Notice: <nick>:<target> › <text>
NOTICE  ›› Notice: <nick> (<address>) › <text>
NOTICESELF  ›› Notice: <nick> <text>
NOTICESELFCHAN  ›› Notice: <target> <text>
TEXTQUERY <pre> <c1>( <nick> <c1>) <text>
TEXTQUERYSELF <pre> ( <nick> ) <text>
ACTIONQUERY <c1> ! <nick> <text>
ACTIONQUERYSELF <c1> ! <me> <text>
TEXTMSG ›-<pre>  <c1>( <nick> <c1>) <text>
TEXTMSGSELF ›-<pre>  <c1>( <target> <c1>) <text>

MODE !script carbon.onmode
JOIN !script carbon.onjoin
PART !script carbon.onpart
JOINSELF <pre> Now talking in <chan>
TOPIC !script show.topic

KICK !script carbon.kick
KICKSELF <pre> You were kicked from <chan> by <nick> <pre> (<address>) ( <text> )
QUIT !script carbon.onquit
NICK !script carbon.onnick
MODEUSER  ›› Usermode: Changed to <modes>
INVITE  ›› Invite: <pre> -› <c1><nick> invites you to join <c1><chan>
NICKSELF  ›› You are now <pre> <c1><nick>

CTCP  ›› CTCP: <c1><nick> <ctcp> <pre> <text>
CTCPCHAN  ›› CTCP: <c1><nick> <ctcp> <pre> <text> (<chan>)
CTCPREPLY  ›› CTCP: <c1><nick> <ctcp> <pre> Reply: <text>
CTCPSELF  ›› CTCP: <c1><nick> <ctcp> <pre> <text>
CTCPCHANSELF  ›› CTCP: <chan> <ctcp> <pre> <text> 
CTCPREPLYSELF  ›› CTCP: <c1><nick> <ctcp> <pre> Reply: <text>

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
RAW.004 !script
RAW.005 !script
RAW.006 !script
RAW.007 !script

RAW.311 !script carbon.whois1
RAW.312 !script carbon.whois3     
RAW.314 !script carbon.whowas   
RAW.319 !script carbon.whois2                                 
RAW.301 !script carbon.whois4                         
RAW.307 !script carbon.whois5                 
RAW.313 !script carbon.whois6           
RAW.317 !script carbon.whois7  
RAW.318 !script carbon.whois8 

RAW.323 <pre> End of channels list
RAW.324 !script main.modes
RAW.329 !script chan.created
RAW.332 !script show.topic %::pre %::text
RAW.333 <pre> Set by <c1><nick> on <text>
RAW.341 <pre> Invite: <c1><nick> has been invited to <c1><chan>
RAW.364 <pre> Link: <text>
RAW.366 !script main.users
RAW.371 <text>
RAW.374 <pre> End of Info <server>
RAW.391 <pre> Server Time: <value>   

RAW.401 <pre> No such nickname: <nick>
RAW.403 <pre> No such channel: <chan>
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
RAW.461 <pre> More parameters needed for: <text>
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
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

LOAD !script carbon.load 
UNLOAD !script carbon.unload 

SCHEME1 Blue
SCHEME2 Red
SCHEME3 Liquid
SCHEME4 Solid
SCHEME5 Ebon
SCHEME6 Urban
SCHEME7 Maze

[SCHEME1]

BaseColors 02,02,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME2]

BaseColors 04,04,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME3]

BaseColors 10,10,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME4]

BaseColors 07,07,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME5]

BaseColors 01,01,14,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME6]

BaseColors 14,14,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210

[SCHEME7]

BaseColors 06,06,15,01
Colors 00,01,01,05,01,01,01,01,01,01,01,01,07,01,06,01,01,01,01,05,00,00,01,00,01,01
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127  210,210,210