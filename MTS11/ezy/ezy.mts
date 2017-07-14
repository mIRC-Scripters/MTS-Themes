[mts]
NAME ezy
AUTHOR Kins
EMAIL evil_coder@hotmail.com
DESCRIPTION A very simple and mIRC default look alike theme.
SCRIPT ezy.mrc
WEBSITE http://www.banglacafe.com
MTSVERSION 1.1
VERSION 1.1

PREFIX ƒ

Timestamp ON
TimestampFormat [HH:nn]

PARENTEXT [<text>]

LOAD <pre> ezy loaded.
UNLOAD <pre> ezy unloaded.

FontDefault Fixedsys,9
FontChan Fixedsys,9
FontQuery Fixedsys,9

Colors 0,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

MODE <pre> Modes: <nick> sets mode <modes>
REJOIN <pre> Attempting to rejoin..
JOINSELF <pre> Now talking in <chan>..
JOIN <pre> Joins: <nick> [<address>]
PART <pre> Parts: <cmode><nick> [<address>] <parentext>
QUIT <pre> Quits: <cmode><nick> [<address>] <parentext>
NICK <pre> Nicks: <nick> is now known as <newnick>
NICKSELF <pre> Nicks: You're now known as <newnick>
KICK <pre> Kicks: <knick> was kicked by <nick> <parentext>
KICKSELF <pre> Kicks: You've been kicked from <chan> by <nick> <parentext>
TOPIC <pre> Topics: <nick> sets topic: <text>
INVITE <pre> Invites: <nick> has invited you to join <chan>
MODEUSER <pre> U/mode: <modes>

TEXTCHAN [<cmode><nick>] <text>
TEXTQUERY [<nick>] <text>
TEXTCHANSELF [<cmode><me>] <text>
TEXTQUERYSELF [<me>] <text>

ACTIONCHAN <pre> <cmode><nick> <text>
ACTIONQUERY <pre> <nick> <text>
ACTIONCHANSELF <pre> <cmode><me> <text>
ACTIONQUERYSELF <pre> <me> <text>

NOTICECHAN <pre> Notice From <nick> on <chan> : <text>
NOTICE <pre> Notice From <nick> : <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>

Ctcp <pre> [CTCP/<nick>] <ctcp> <text>
CtcpChan <pre> [CTCP/<nick>/<chan>] <ctcp> <text>
CtcpSelf <pre> [CTCP/<nick>] <ctcp> <text>
CtcpChanSelf <pre> [CTCP/<nick>/<chan>] <ctcp> <text>
CtcpReply <pre> [CTCP Reply/<nick>] <ctcp> <text>
CtcpReplySelf <pre> [CTCP Reply/<nick>] <ctcp> <text>

NOTIFY <pre> Notify: <nick> [<address>] <parentext> is online!
UNOTIFY <pre> Notify: <nick> [<address>] <parentext> is offline!

DNS <pre> Looking up <address>..
DNSERROR <pre> Unable to resolve [<iaddress><naddress>]
DNSRESOLVE <pre> Resolved <naddress> [<iaddress>] to <raddress>

RAW.401 <pre> The <nick> doesn't exist!
RAW.403 <pre> The <chan> doesn't exist!
RAW.404 <pre> Cannot send text to <chan>!
RAW.432 <pre> Error: <nick> is an invalid nickname!
RAW.471 <pre> <chan> is currently full!
RAW.421 <pre> Error: <value> is an invalid command!
RAW.433 <pre> <nick> is already in use!
RAW.353 <pre> <chan>: <text>
RAW.366 <pre> <chan>: end of names list!
RAW.250 <pre> Total connections: <value>
RAW.482 <pre> Error: You are not opped in <chan>
RAW.474 <pre> Cannot join <chan>, You are banned!
RAW.475 <pre> Cannot join <chan>, Need channel key!
RAW.301 <pre> Away: <text>
RAW.313 <pre> Status: <nick> <text>
RAW.307 <pre> Regd: <nick> is a registered nick
RAW.254 <pre> Channels: <value>
RAW.253 <pre> Unknown connections: <value>
RAW.252 <pre> Opers: <value>
RAW.317 !Script ezy.widle
RAW.319 !Script ezy.wchans
RAW.311 !Script ezy.whois
RAW.255 !Script ezy.lusersend
RAW.330 !Script ezy.auth 
RAW.332 !Script ezy.topic 
RAW.333 !Script ezy.topicset 
RAW.318 !Script ezy.whoisend
RAW.312 !Script ezy.server 
RAW.324 !Script ezy.chmode 
RAW.329 !Script ezy.topicend 
RAW.251 !Script ezy.lusers

EchoTarget <pre> <text>
Error <pre> Error: <text>
ServerError <pre> Server Error: <text>

CLINEOP 05
CLINEHOP 06
CLINEVOICE 03
CLINEREGULAR 01
CLINEOWNER 12
CLINEME 04

CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +