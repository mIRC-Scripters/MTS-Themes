[mts]
NAME Crispy
AUTHOR Kins
EMAIL evil_coder@hotmail.com
DESCRIPTION White background theme with Terminal,9 Font and 14 color display.
SCRIPT Crispy.mrc
WEBSITE http://www.banglacafe.com
MTSVERSION 1.1
VERSION 1.0

PREFIX <c1>þ

Timestamp ON
TimestampFormat <c1>HH<c2>:<c1>nn Ã 

PARENTEXT <c1>[<text><c1>]

LOAD <pre> Crispy theme loaded.
UNLOAD <pre> Crispy theme unloaded.

FontDefault Terminal,9
FontChan Terminal,9
FontQuery Terminal,9

Colors 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1
RGBColors 255,255,255 70,70,70 0,0,170 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,180,100 145,213,115 12,149,194 101,148,182 0,0,255 255,119,187 128,128,128 208,208,208
BASECOLORS 04,05

MODE <pre> Mode: <c1><nick> sets mode <c1><modes>
REJOIN <pre> Attempting to rejoin...
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
MODEUSER <pre> U/mode: <c1>'<mode><c1>'

TEXTCHAN <c1>[<c2><cmode><nick><c1>] <text>
TEXTQUERY <c1>[<nick><c1>] <text>
TEXTCHANSELF <c1>[<c2><cmode><me><c1>] <text>
TEXTQUERYSELF <c1>[<me><c1>] <text>

ACTIONCHAN <c1>*<c2> <cmode><nick> <text>
ACTIONQUERY <c1>* <nick> <text>
ACTIONCHANSELF <c1>*<c2> <cmode><me> <text>
ACTIONQUERYSELF <c1>* <me> <text>

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

NOTIFY <pre> Notify<c1>: <nick> <c1>[<address><c1>] <parentext> is online...
UNOTIFY <pre> Notify<c1>: <nick> <c1>[<address><c1>] <parentext> is offline...

DNS <pre> Looking up <c1><address>...
DNSERROR <pre> Unable to resolve <c1>[<iaddress><naddress><c1>]
DNSRESOLVE <pre> Resolved <naddress> <c1>[<iaddress><c1>] to <raddress>

RAW.401 <pre> The nick <c1><nick> doesn't exist!
RAW.403 <pre> The channel <c1><chan> doesn't exist!
RAW.404 <pre> Cannot send text to <c1><chan>!
RAW.432 <pre> <c1><nick> is an invalid nickname!
RAW.471 <pre> <c1><chan> is currently full!
RAW.421 <pre> <c1><alue> is an invalid command!
RAW.433 <pre> <c1><nick> is already in use!
RAW.353 <pre> <chan><c1>: <text>
RAW.366 <pre> <c1><chan> end of <c1>/names list!
RAW.250 <pre> Total connections<c1>: <value>
RAW.482 <pre> You are not opped on <c1><chan>
RAW.474 <pre> Cannot join <c1><chan>, You are banned!
RAW.475 <pre> Cannot join <c1><chan>, Need channel key!
RAW.372 <pre> <text>
RAW.301 ³ Away<c1>: <text>
RAW.313 ³ Status<c1>: <nick> <text>
RAW.307 ³ Regd<c1>: <nick> is a registered nick
RAW.254 ³ Channels<c1>: <value>
RAW.253 ³ Unknown connections<c1>: <value>
RAW.252 ³ Opers<c1>: <value>
RAW.317 !Script Crispy.widle
RAW.319 !Script Crispy.wchans
RAW.311 !Script Crispy.whois
RAW.255 !Script Crispy.lusersend
RAW.330 !Script Crispy.auth 
RAW.332 !Script Crispy.topic 
RAW.333 !Script Crispy.topicset 
RAW.318 !Script Crispy.whoisend
RAW.312 !Script Crispy.server 
RAW.324 !Script Crispy.chmode 
RAW.329 !Script Crispy.topicend 
RAW.251 !Script Crispy.lusers

EchoTarget <pre> <text>
Error <pre> Error<c1>: <text>
ServerError <pre> Server Error<c1>: <text>

CLINEOP 10
CLINEHOP 09
CLINEVOICE 12
CLINEREGULAR 01
CLINEOWNER 08
CLINEME 04
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +

scheme1 Navy Blue
scheme2 Dark green
scheme3 Brown
scheme4 Purple
scheme5 Orange
scheme6 Yellow
scheme7 Light Green
scheme8 Baby blue - 1
scheme9 Baby blue - 2
scheme10 Blue
scheme11 Pink
scheme12 Dark Grey

[scheme1]
BASECOLORS 02,12

[scheme2]
BASECOLORS 03,09

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

[scheme8]
BASECOLORS 10,11

[scheme9]
BASECOLORS 11,10

[scheme10]
BASECOLORS 12,02

[scheme11]
BASECOLORS 13,06

[scheme12]
BASECOLORS 14,01