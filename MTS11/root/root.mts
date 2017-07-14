[mts]
NAME root
AUTHOR Eric^^
EMAIL ericn@accesswave.ca
DESCRIPTION Built to resemble some sort of linux terminal/telnetish type thing. Not recommended for low-resolutions.
WEBSITE http://eric.mircscripts.org
VERSION 1
MTSVERSION 1.1
PREFIX 9#15
TIMESTAMP OFF
TIMESTAMPFORMAT 9#14hh03:14nn9#
SCRIPT root.mrc
LOAD !script root.load
ctcpself 9[14<me>9@14localhost /ctcp <nick>9]15# <ctcp> <text>
ctcpreplyself 9[14<me>9@14localhost /ctcpreply <nick>9]15# <ctcp> <text>
PARENTEXT (<text>)
JOINSELF !script
MODE 3[14<nick>3@14<address> /mode3]15# <modes>
JOIN 3[15<nick>3@15<address> /join3]15#
PART 3[15<nick>3@15<address> /part3]15# <text>
KICK 3[15<nick>3@15<address> /kick <knick>3]15# <text>
KICKSELF kicked* from <chan> by <nick>
QUIT 3[15<nick>3@15<address> /quit3]15# <text>
TOPIC 3[15<nick>3@15<address> /topic3]15# <text>
NICK 3[15<nick>3@15<address> /nick9]15# <newnick>
NICKSELF 9[15<me>9@15localhost /nick3]15# <newnick>
TEXTCHAN 3[15<cmode><nick>3]15 <text>
TEXTQUERY 3[15<cmode><nick>3]15 <text>
;TEXTCHAN 3[15<cmode><nick>3@14<address>3]15# <text>
;TEXTQUERY 3[15<cmode><nick>3@14<address>3]15# <text>
TEXTCHANSELF 9[15<cmode><me>9]15 <text>
TEXTQUERYSELF 9[15<cmode><me>9]15 <text>
;TEXTQUERYSELF 9[15<cmode><me>9@14localhost9]15# <text>
;TEXTCHANSELF 9[15<cmode><me>9@14localhost9]15# <text>
MODEUSER 9[15<me>9@15localhost /mode9]15# <modes>
INVITE <pre> 14<nick>11 invites you to join14 <chan>
ACTIONCHAN <pre> <cmode>15<nick> <text>
ACTIONQUERY <pre> <cmode>15<nick> <text>
ACTIONCHANSELF <pre> <cmode>15<me> <text>
ACTIONQUERYSELF <pre> <cmode>15<me> <text>
;ACTIONCHAN 3[15<cmode><nick>3@14<address>3]15* <text>
;ACTIONQUERY 3[15<cmode><nick>3@14<address>3]15* <text>
;ACTIONCHANSELF 9[15<cmode><me>9@14localhost9]15* <text>
;ACTIONQUERYSELF 9[15<cmode><me>9@14localhost9]15* <text>
CTCPREPLY 3[15<nick>3@15<address> /ctcpreply3]15# <ctcp> <text>
CTCP 3[15<nick>3@15<address> /ctcp3]15# <ctcp> <text>
CTCPCHAN 3[15<nick>3@15<address> /ctcp <chan>3]15# <ctcp> <text>
SERVERERROR 9error15* <text>
NOTICESELF 9[14<me>9@14localhost /notice <nick>9]15# <text>
NOTICESELFCHAN 9[14<me>9@14localhost /notice <nick>9]15# <text>
NOTICE 3[14<nick>3@14<address> /notice3]15# <text>
NOTICESERVER 3[15<server> /notice3]15# <text>
NOTICECHAN 3[14<nick>3@14<address> /notice <chan>3]15# <text>
NOTIFY 9[15<nick>9@15<address> /notify3]15# online (<text>)
UNOTIFY 9[15<nick>9@15<address> /notify3]15# offline (<text>)
DNSERROR 9dns15* cannot resolve...
DNSRESOLVE 9dns15* resolved <naddress> (<iaddress>) to <raddress>
Colors 1,9,9,15,14,9,3,9,9,9,9,15,9,9,14,15,9,9,9,9,15,1,15,1,15,9,1,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255  145,145,145 208,208,208
Fontdefault Lucida console,11
Fontchan Lucida console,11
Fontquery Lucida console,11
raw.341 <pre> <nick> has been invited to <chan>
raw.353 !script root.names %::text
raw.366 !script root.names.end
WHOIS !script root.whois
raw.311 !script
raw.319 !script
raw.312 !script
raw.301 !script
raw.317 !script
raw.318 !script
WHOWAS <pre> <nick> was <address> (<realname>)
raw.324 !script
raw.329 !script
raw.255 !script
raw.333 <pre> Topic set by <nick>
raw.332 <pre> Topic:9 <text>
raw.306 <pre> Now away
raw.305 <pre> Now back
raw.401 <pre> <nick>: No such nickname
raw.403 <pre> <chan>: No such channel
raw.404 <pre> Unable to send text to <chan>
raw.405 <pre> Cannot join <chan>, you're on too many channels
raw.406 <pre> <nick>: No such nickname
raw.421 <pre> /<value>: No such command
raw.432 <pre> <nick>: Invalid nickname
raw.433 <pre> <nick>: Already taken
raw.438 <pre> Nickname changed too fast, wait a while and try again...
raw.439 <pre> Target changed too fast, wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan>
raw.461 <pre> <text>: not enough parameters
raw.467 <pre> <chan> is locked (+k)
raw.471 <pre> <chan> is full (+l)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> <chan> is invite-only (+i)
raw.474 <pre> Banned from <chan>
raw.475 <pre> <chan> is locked (+k)
raw.478 <pre> <chan> banlit is full
raw.482 <pre> You're not an op on <Chan>
raw.352 <pre> <chan> <nick>9@915<address> <realname>
CLINEOP 09
CLINEHOP 03
CLINEVOICE 03
CLINEREGULAR 15
CLINEFRIEND 08
CLINEENEMY 04
CLINEME 09
CLINECHAROP @
CLINECHAROWNER .
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
RAW.Other <pre> <text>
BaseColors 09,03,14,15
scheme1 Timestamp

[SCHEME1]
TIMESTAMP ON