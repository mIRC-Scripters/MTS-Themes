[mts]
NAME Xperiment
AUTHOR Kins
EMAIL evil_coder@hotmail.com
DESCRIPTION Just an experiment, ;-)
SCRIPT Xperiment.mrc
WEBSITE http://www.banglacafe.com
MTSVERSION 1.1
VERSION 1.0

PREFIX <c1>þ

Timestamp ON
TimestampFormat <c1>HH<c2>:<c1>nn Ã 

PARENTEXT <c1>[<text><c1>]

LOAD <pre> Xperiment loaded.
UNLOAD <pre> Xperiment unloaded.

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

BASECOLORS 12,04
Colors 15,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,15,5,15,5,5
RGBColors 0,100,0 70,70,70 0,130,0 0,160,0 220,0,0 128,0,0 70,0,70 175,75,0 7,85,114 9,119,162 12,149,194 101,148,182 202,122,51 220,210,190 221,204,185 222,221,213

MODE <pre> Mode: <c1><nick> sets mode <c1><modes>
REJOIN <pre> Attempting to rejoin..
JOINSELF <pre> Now talking in <c1><chan>..
JOIN <pre> Join: <nick> <c1>[<address><c1>]
PART <pre> Part: <nick> <c1>[<address><c1>] <parentext>
QUIT <pre> Quit: <nick> <c1>[<address><c1>] <parentext>
NICK <pre> Nick: <c1><nick> is now known as <c1><newnick>
NICKSELF <pre> Nick: <c1>You're now known as <c1><newnick>
KICK <pre> Kick: <c1><knick> was kicked by <c1><nick> <parentext>
KICKSELF <pre> Kick: <c1>You've been kicked from <c1><chan> by <c1><nick> <parentext>
TOPIC <pre> Topic: <c1><nick> sets topic:<c2> <text>
INVITE <pre> Invite: <c1><nick> has invited you to join <c1><chan>
MODEUSER <pre> U/mode<c1>: <modes>

TEXTCHAN <c1>[<c2><cmode><nick><c1>] <text>
TEXTQUERY <c1>[<nick><c1>] <text>
TEXTCHANSELF <c1>[<c2><cmode><me><c1>] <text>
TEXTQUERYSELF <c1>[<me><c1>] <text>

ACTIONCHAN <c1>!<c2> <cmode><nick> <text>
ACTIONQUERY <c1>! <nick> <text>
ACTIONCHANSELF <c1>!<c2> <cmode><me> <text>
ACTIONQUERYSELF <c1>! <me> <text>

NOTICECHAN <pre> Notice From <c1><nick> on <c1><chan> : <text>
NOTICE <pre> Notice From <c1><nick> : <text>
NOTICESELF <c2>-> <c1><nick> <text>
NOTICESELFCHAN <c2>-> <c1><chan> <text>

Ctcp <pre> [CTCP/<c1><nick>] <ctcp> <text>
CtcpChan <pre> [CTCP/<c1><nick>/<c1><chan>] <ctcp> <text>
CtcpSelf <pre> [CTCP/<c1><nick>] <ctcp> <text>
CtcpChanSelf <pre> [CTCP/<c1><nick>/<c1><chan>] <ctcp> <text>
CtcpReply <pre> [CTCP Reply/<c1><nick>] <ctcp> <text>
CtcpReplySelf <pre> [CTCP Reply/<c1><nick>] <ctcp> <text>

NOTIFY <pre> Notify<c1>: <nick> <c1>[<address><c1>] <parentext> is online!
UNOTIFY <pre> Notify<c1>: <nick> <c1>[<address><c1>] <parentext> is offline!

DNS <pre> Looking up <c1><address>..
DNSERROR <pre> Unable to resolve <c1>[<iaddress><naddress><c1>]
DNSRESOLVE <pre> Resolved <naddress> <c1>[<iaddress><c1>] to <raddress>

RAW.401 <pre> The <c1><nick> doesn't exist!
RAW.403 <pre> The <c1><chan> doesn't exist!
RAW.404 <pre> Cannot send text to <c1><chan>!
RAW.432 <pre> Error<c1>: <nick> is an invalid nickname!
RAW.471 <pre> <c1><chan> is currently full!
RAW.421 <pre> Error<c1>: <value> is an invalid command!
RAW.433 <pre> <c1><nick> is already in use!
RAW.353 <pre> <chan><c1>: <text>
RAW.366 <pre> <chan><c1>: end of names list!
RAW.250 <pre> Total connections<c1>: <value>
RAW.482 <pre> Error<c1>: You are not opped in <c1><chan>
RAW.474 <pre> Cannot join <c1><chan>, You are banned!
RAW.475 <pre> Cannot join <c1><chan>, Need channel key!
RAW.301 ³ Away<c1>: <text>
RAW.313 ³ Status<c1>: <nick> <text>
RAW.307 ³ Regd<c1>: <nick> is a registered nick
RAW.254 ³ Channels<c1>: <value>
RAW.253 ³ Unknown connections<c1>: <value>
RAW.252 ³ Opers<c1>: <value>
RAW.317 !Script Xperiment.widle
RAW.319 !Script Xperiment.wchans
RAW.311 !Script Xperiment.whois
RAW.255 !Script Xperiment.lusersend
RAW.330 !Script Xperiment.auth 
RAW.332 !Script Xperiment.topic 
RAW.333 !Script Xperiment.topicset 
RAW.318 !Script Xperiment.whoisend
RAW.312 !Script Xperiment.server 
RAW.324 !Script Xperiment.chmode 
RAW.329 !Script Xperiment.topicend 
RAW.251 !Script Xperiment.lusers

EchoTarget <pre> <text>
Error <pre> Error<c1>: <text>
ServerError <pre> Server Error<c1>: <text>

CLINEOP 04
CLINEHOP 07
CLINEVOICE 05
CLINEREGULAR 12
CLINEOWNER 01
CLINEME 04
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +

scheme1 1
scheme2 2
scheme3 3
scheme4 4
scheme5 5
scheme6 6
scheme7 7
scheme8 8
scheme9 9
scheme10 10
scheme11 11
scheme12 12
scheme13 13
scheme14 14
scheme15 15
scheme16 16
scheme17 17
scheme18 18
scheme19 19

[scheme1]
BASECOLORS 04,05
Colors 13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,13,1,1

[scheme2]
BASECOLORS 12,05
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme3]
BASECOLORS 06,07
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme4]
BASECOLORS 06,07
Colors 13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,13,1,1

[scheme5]
BASECOLORS 05,07
Colors 13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,13,1,1

[scheme6]
BASECOLORS 12,04
Colors 13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,13,1,1

[scheme7]
BASECOLORS 04,05
Colors 14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,14,1,14,1,1

[scheme8]
BASECOLORS 05,07
Colors 14,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,14,1,14,1,1

[scheme9]
BASECOLORS 12,07
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme10]
BASECOLORS 04,07
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme11]
BASECOLORS 07,04
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme12]
BASECOLORS 04,05
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme13]
BASECOLORS 05,06
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1

[scheme14]
BASECOLORS 10,11
Colors 15,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,15,8,15,8,8
CLINEOP 10
CLINEHOP 08
CLINEVOICE 09
CLINEREGULAR 11
CLINEOWNER 01
CLINEME 10

[scheme15]
BASECOLORS 10,09
Colors 15,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,15,11,15,11,11
CLINEOP 10
CLINEHOP 08
CLINEVOICE 09
CLINEREGULAR 11
CLINEOWNER 01
CLINEME 10

[scheme16]
BASECOLORS 09,11
Colors 15,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,15,10,15,10,10
CLINEOP 10
CLINEHOP 08
CLINEVOICE 09
CLINEREGULAR 11
CLINEOWNER 01
CLINEME 10

[scheme17]
BASECOLORS 03,02
Colors 15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,0,0
CLINEOP 02
CLINEHOP 08
CLINEVOICE 03
CLINEREGULAR 11
CLINEOWNER 09
CLINEME 02

[scheme18]
BASECOLORS 02,03
Colors 15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15,0,0
CLINEOP 02
CLINEHOP 08
CLINEVOICE 03
CLINEREGULAR 00
CLINEOWNER 09
CLINEME 02

[scheme19]
BASECOLORS 03,00
Colors 15,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,15,02,15,02,02
CLINEOP 02
CLINEHOP 08
CLINEVOICE 03
CLINEREGULAR 00
CLINEOWNER 09
CLINEME 02