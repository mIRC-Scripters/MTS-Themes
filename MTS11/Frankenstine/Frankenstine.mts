[mts]
NAME Frankenstine
AUTHOR Kins
EMAIL evil_coder@hotmail.com
DESCRIPTION A white bg theme with 25 scheme using Bright & Terminal font.
SCRIPT Frankenstine.mrc
WEBSITE http://www.banglacafe.com
MTSVERSION 1.1
VERSION 1.1

PREFIX <c1>

Timestamp ON
TimestampFormat <c1>HH<c2>:<c1>nn Ã

PARENTEXT <c1>[<text><c1>]

LOAD <pre> Frankenstine theme <c1>loaded.
UNLOAD <pre> Frankenstine theme <c1>unloaded.

FontDefault Bright,10
FontChan Bright,10
FontQuery Bright,10

Colors 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1
RGBColors 255,255,255 70,70,70 0,0,170 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,180,100 145,213,115 12,149,194 101,148,182 0,0,255 255,119,187 128,128,128 208,208,208
BASECOLORS 04,05

MODE <pre> Mode: <c1><nick> sets mode <c1><modes>
REJOIN <pre> Attempting to rejoin..
JOINSELF <pre> Now talking in <c1><chan>..
JOIN <pre> Join: <nick> <c1>[<address><c1>]
PART <c1> Part: <nick> <c1>[<address><c1>] <parentext>
QUIT <c1> Quit: <nick> <c1>[<address><c1>] <parentext>
NICK <pre> Nick: <c1><nick> is now known as <c1><newnick>
NICKSELF <pre> Nick: <c1>You're now known as <c1><newnick>
KICK <c1> Kick: <c1><knick> was kicked out by <c1><nick> <parentext>
KICKSELF <c1> Kick: <c1>You've been kicked from <c1><chan> by <c1><nick> <parentext>
TOPIC <pre> Topic: <c1><nick> sets topic<c2> <text>
INVITE <pre> Invite: <c1><nick> has invited you to join <c1><chan>
MODEUSER <pre> U/mode<c1>: <modes>

TEXTCHAN <c1>[<c2><cmode><nick><c1>] <text>
TEXTQUERY <c1>[<nick><c1>] <text>
TEXTCHANSELF <c1>[<c2><cmode><me><c1>] <text>
TEXTQUERYSELF <c1>[<me><c1>] <text>

ACTIONCHAN <c1>þ<c2> <cmode><nick> <text>
ACTIONQUERY <c1>þ <nick> <text>
ACTIONCHANSELF <c1>þ<c2> <cmode><me> <text>
ACTIONQUERYSELF <c1>þ <me> <text>

NOTICECHAN <pre> Notice From <c1><nick> on <c1><chan> : <text>
NOTICE <pre> Notice From <c1><nick> : <text>
NOTICESELF <c2><pre> <c1><nick> <text>
NOTICESELFCHAN <c2><pre> <c1><chan> <text>

Ctcp <pre> [CTCP/<c1><nick>] <ctcp> <text>
CtcpChan <pre> [CTCP/<c1><nick>/<c1><chan>] <ctcp> <text>
CtcpSelf <pre> [CTCP/<c1><nick>] <ctcp> <text>
CtcpChanSelf <pre> [CTCP/<c1><nick>/<c1><chan>] <ctcp> <text>
CtcpReply <pre> [CTCP Reply/<c1><nick>] <ctcp> <text>
CtcpReplySelf <pre> [CTCP Reply/<c1><nick>] <ctcp> <text>

NOTIFY <pre> Notify<c1>: <nick> <c1>[<address><c1>] <parentext> is online!
UNOTIFY <c1> Notify<c1>: <nick> <c1>[<address><c1>] <parentext> is offline!

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
RAW.301 ´ Away<c1>: <text>
RAW.313 ´ Status<c1>: <nick> <text>
RAW.307 ´ Regd<c1>: <nick> is a registered nick
RAW.254 ´ Channels<c1>: <value>
RAW.253 ´ Unknown connections<c1>: <value>
RAW.252 ´ Opers<c1>: <value>
RAW.317 !Script Frankenstine.widle
RAW.319 !Script Frankenstine.wchans
RAW.311 !Script Frankenstine.whois
RAW.255 !Script Frankenstine.lusersend
RAW.330 !Script Frankenstine.auth 
RAW.332 !Script Frankenstine.topic 
RAW.333 !Script Frankenstine.topicset 
RAW.318 !Script Frankenstine.whoisend
RAW.312 !Script Frankenstine.server 
RAW.324 !Script Frankenstine.chmode 
RAW.329 !Script Frankenstine.topicend 
RAW.251 !Script Frankenstine.lusers

EchoTarget <pre> <text>
Error <pre> Error<c1>: <text>
ServerError <pre> Server Error<c1>: <text>

CLINEOP 04
CLINEHOP 05
CLINEVOICE 07
CLINEREGULAR 14
CLINEOWNER 08
CLINEME 04

CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +

scheme1 Blue - 1
scheme2 green - 1
scheme3 Brown
scheme4 Purple
scheme5 Orange
scheme6 Yellow
scheme7 Green - 2
scheme8 Icey - 1
scheme9 Icey - 2
scheme10 Blue - 2
scheme11 Pink
scheme12 Grey
scheme13 Term-Blue - 1
scheme14 Term-green - 1
scheme15 Term-Brown
scheme16 Term-Purple
scheme17 Term-Orange
scheme18 Term-Yellow
scheme19 Term-Green - 2
scheme20 Term-Icey - 1
scheme21 Term-Icey - 2
scheme22 Term-Blue - 2
scheme23 Term-Pink
scheme24 Term-Grey
scheme25 Term-Red

[scheme1]
BASECOLORS 02,12

CLINEOP 12
CLINEHOP 11
CLINEVOICE 10
CLINEREGULAR 14
CLINEOWNER 02
CLINEME 12

[scheme2]
BASECOLORS 03,09

CLINEOP 03
CLINEHOP 10
CLINEVOICE 09
CLINEREGULAR 14
CLINEOWNER 11
CLINEME 03

[scheme3]
BASECOLORS 05,04

[scheme4]
BASECOLORS 06,05

[scheme5]
BASECOLORS 07,08

[scheme6]
BASECOLORS 08,07

[scheme7]
BASECOLORS 09,03

CLINEOP 03
CLINEHOP 10
CLINEVOICE 09
CLINEREGULAR 14
CLINEOWNER 11
CLINEME 03

[scheme8]
BASECOLORS 10,11

CLINEOP 10
CLINEHOP 09
CLINEVOICE 11
CLINEREGULAR 14
CLINEOWNER 08
CLINEME 10

[scheme9]
BASECOLORS 11,10

CLINEOP 10
CLINEHOP 09
CLINEVOICE 11
CLINEREGULAR 14
CLINEOWNER 08
CLINEME 10

[scheme10]
BASECOLORS 12,02

CLINEOP 12
CLINEHOP 11
CLINEVOICE 10
CLINEREGULAR 14
CLINEOWNER 02
CLINEME 12

[scheme11]
BASECOLORS 13,06

CLINEOP 13
CLINEHOP 11
CLINEVOICE 10
CLINEREGULAR 14
CLINEOWNER 06
CLINEME 13

[scheme12]
BASECOLORS 14,01

CLINEOP 05
CLINEHOP 01
CLINEVOICE 15
CLINEREGULAR 14
CLINEOWNER 01
CLINEME 05

[scheme13]
BASECOLORS 02,12

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 12
CLINEHOP 11
CLINEVOICE 10
CLINEREGULAR 14
CLINEOWNER 02
CLINEME 12

[scheme14]
BASECOLORS 03,09

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 03
CLINEHOP 10
CLINEVOICE 09
CLINEREGULAR 14
CLINEOWNER 11
CLINEME 03

[scheme15]
BASECOLORS 05,04

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

[scheme16]
BASECOLORS 06,05

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

[scheme17]
BASECOLORS 07,08

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

[scheme18]
BASECOLORS 08,07

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

[scheme19]
BASECOLORS 09,03

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 03
CLINEHOP 10
CLINEVOICE 09
CLINEREGULAR 14
CLINEOWNER 11
CLINEME 03

[scheme20]
BASECOLORS 10,11

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 10
CLINEHOP 09
CLINEVOICE 11
CLINEREGULAR 14
CLINEOWNER 08
CLINEME 10

[scheme21]
BASECOLORS 11,10

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 10
CLINEHOP 09
CLINEVOICE 11
CLINEREGULAR 14
CLINEOWNER 08
CLINEME 10

[scheme22]
BASECOLORS 12,02

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 12
CLINEHOP 11
CLINEVOICE 10
CLINEREGULAR 14
CLINEOWNER 02
CLINEME 12

[scheme23]
BASECOLORS 13,06

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 13
CLINEHOP 11
CLINEVOICE 10
CLINEREGULAR 14
CLINEOWNER 06
CLINEME 13

[scheme24]
BASECOLORS 14,01

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 05
CLINEHOP 01
CLINEVOICE 15
CLINEREGULAR 14
CLINEOWNER 01
CLINEME 05

[scheme25]
BASECOLORS 04,05

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

CLINEOP 04
CLINEHOP 05
CLINEVOICE 07
CLINEREGULAR 14
CLINEOWNER 08
CLINEME 04