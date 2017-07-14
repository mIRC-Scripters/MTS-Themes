[mts]
NAME Foggy
AUTHOR Kins
EMAIL evil_coder@hotmail.com
DESCRIPTION A white bg theme with some light color.
SCRIPT Foggy.mrc
WEBSITE http://www.banglacafe.com
MTSVERSION 1.1
VERSION 1.1

PREFIX <c1>

Timestamp ON
TimestampFormat <c1>HH<c2>:<c1>nn ´

PARENTEXT <c1>[<text><c1>]

LOAD <pre> Foggy theme <c1>loaded.
UNLOAD <pre> Foggy theme <c1>unloaded.

FontDefault Bright,10
FontChan Bright,10
FontQuery Bright,10

Colors 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2
RGBCOLORS 255,255,255 223,117,117 90,170,240 126,197,248 180,220,250 228,52,220 233,125,227 242,183,239 255,140,25 255,174,102 255,206,157 68,136,0 94,187,0 111,221,0 222,155,152 237,192,186
BASECOLORS 04,03

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

RAW.401 <pre> The nick <c1><nick> doesn't exist!
RAW.403 <pre> The channel <c1><chan> doesn't exist!
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
RAW.253 Ã Unknown connections<c1>: <value>
RAW.301 Ã Away<c1>: <text>
RAW.313 Ã Status<c1>: <nick> <text>
RAW.307 Ã Regd<c1>: <nick> is a registered nick
RAW.254 Ã Channel<c1>: <value>
RAW.252 Ã Opers<c1>: <value>
RAW.317 !Script Foggy.widle
RAW.319 !Script Foggy.wchans
RAW.311 !Script Foggy.whois
RAW.255 !Script Foggy.lusersend
RAW.330 !Script Foggy.auth 
RAW.332 !Script Foggy.topic 
RAW.333 !Script Foggy.topicset 
RAW.318 !Script Foggy.whoisend
RAW.312 !Script Foggy.server 
RAW.324 !Script Foggy.chmode 
RAW.329 !Script Foggy.topicend 
RAW.251 !Script Foggy.lusers

EchoTarget <pre> <text>
Error <pre> Error<c1>: <text>
ServerError <pre> Server Error<c1>: <text>

CLINEOP 04
CLINEHOP 05
CLINEVOICE 02
CLINEREGULAR 03
CLINEOWNER 07
CLINEME 04

CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +

scheme1 Purple
scheme2 Orange
scheme3 Green
scheme4 Coffe
scheme5 Term-Blue 
scheme6 Term-Purple
scheme7 Term-Orange
scheme8 Term-Green
scheme9 Term-Coffe

[scheme1]
Colors 0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,6,0,6,6
BASECOLORS 07,05
CLINEOP 07
CLINEHOP 15
CLINEVOICE 05
CLINEREGULAR 06
CLINEOWNER 15
CLINEME 07

[scheme2]
Colors 0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,0,9,9
BASECOLORS 10,08
CLINEOP 10
CLINEHOP 15
CLINEVOICE 08
CLINEREGULAR 10
CLINEOWNER 15
CLINEME 10

[scheme3]
Colors 0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,0,11,11
BASECOLORS 13,12
CLINEOP 13
CLINEHOP 15
CLINEVOICE 11
CLINEREGULAR 12
CLINEOWNER 15
CLINEME 13

[scheme4]
Colors 0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,0,14,14
BASECOLORS 15,01
CLINEOP 10
CLINEHOP 14
CLINEVOICE 08
CLINEREGULAR 15
CLINEOWNER 14
CLINEME 10

[scheme5]
Colors 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,0,2,2
BASECOLORS 04,03
FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9
CLINEOP 04
CLINEHOP 05
CLINEVOICE 02
CLINEREGULAR 03
CLINEOWNER 07
CLINEME 04

[scheme6]
Colors 0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,6,0,6,6
BASECOLORS 07,05
FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9
CLINEOP 07
CLINEHOP 15
CLINEVOICE 05
CLINEREGULAR 06
CLINEOWNER 15
CLINEME 07

[scheme7]
Colors 0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,9,0,9,9
BASECOLORS 10,08
FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9
CLINEOP 10
CLINEHOP 15
CLINEVOICE 08
CLINEREGULAR 10
CLINEOWNER 15
CLINEME 10

[scheme8]
Colors 0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,0,11,11
BASECOLORS 13,12
FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9
CLINEOP 13
CLINEHOP 15
CLINEVOICE 11
CLINEREGULAR 12
CLINEOWNER 15
CLINEME 13

[scheme9]
Colors 0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,0,14,14
BASECOLORS 15,01
FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9
CLINEOP 10
CLINEHOP 14
CLINEVOICE 08
CLINEREGULAR 15
CLINEOWNER 14
CLINEME 10