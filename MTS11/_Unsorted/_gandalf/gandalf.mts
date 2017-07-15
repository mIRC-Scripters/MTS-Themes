[MTS]
Name Gandalf
Author oMri^^
Email zola@aquanet.co.il
Description Fresh, yet abstract theme.
Website http://titaniumirc.cjb.net
Version 1.0
MTSVersion 1.1

Timestamp ON
TimestampFormat 15(10h:nntt15)
Prefix 15›14›10›
Parentext (<text>)
Load <PRE> Loaded Gandalf theme.
Script gandalf.mrc

Colors 00,06,04,05,02,03,03,03,03,03,03,01,05,07,06,01,03,02,03,05,01,00,01,00,01,15
RGBColors 255,255,255 0,0,0 0,0,128 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,252,255 0,0,255 255,0,255 128,124,128 208,204,208
BaseColors 0,0,0,0

CLineOwner 02
CLineOP 02
CLineHOP 04
CLineVoice 06
CLineRegular 15
CLineMe 10
CLineFriend 12
CLineEnemy 14
CLineIrcOP 06

CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
FontDefault Verdana,10
FontChan Verdana,10
FontQuery Verdana,10

CTCPSelf <PRE> 15CTCP› 10<nick> 15›10<ctcp>15› 10<text>
CTCPChanSelf <PRE> 15CTCP› 10<chan> 15›10<ctcp>15› 10<text>
CTCPReplySelf <PRE> 15CTCP› 10<chan> 15›10<ctcp>15› 10<parentext>

Mode <pre> 10<nick> sets mode› <modes>
Join <pre> 10<nick> 14<address>10 has 15joined10 <chan>
JoinSelf <pre> 10Joining <chan>15...
Part <pre> 10<nick> 14<address>10 has 15left10 <chan>

TEXTChan 15(<cmode>14<nick>15) <text>
TEXTQuery 15(<cmode>14<nick>15) <text>
TEXTChanSelf 15(<cmode>02<me>15) <text>
TEXTQuerySelf 15(<cmode>02<me>15) <text>

Kick <pre> 10<knick> was kicked by <nick> 15(<text>15)
KickSelf <pre> 10You've been kicked by <nick> from <chan> 15(<text>15)

Quit <pre> 02<nick> 14<address>02 has quit <parentext>
Topic <pre> 02<nick> sets topic to› <text>
Nick <pre> 02<nick> is now known as› <newnick>
NickSelf <pre> 02You are now known as› <newnick>
ModeUser <pre> 10Personal modes› <modes>
Invite <pre> 15<nick> has invited you to join <chan>

CTCP <pre> 14Personal CTCP from <nick>› <ctcp> 15(<parentext>15)
CTCPChan <pre> 14CTCP from <nick>› <ctcp> 15(<parentext>15)
CTCPReply !script ctcp.rep %::nick %::CTCP %::text

SERVERError <pre> 15Error <text>
NOTICEServer <pre> 05Notice 14<nick>05› <text>
NOTICE <pre> 05Notice 14<nick>05› <text>
NOTICEChan <pre> 05Notice 14<nick><chan>05› <text>
NOTICESelf <pre> 15<nick> › <text>
NOTICESelfChan <pre> 15<chan> › <text>

NOTIFY !script notify.on %::nick %::text
UNOTIFY !script notify.off %::nick %::text

DNS <pre> 15Looking up DNS <address>
DNSError <pre> 15Unable to resolve DNS (<iaddress> to<naddress>)
DNSResolve <pre> 15Resolved DNS (<iaddress> to<raddress>)

ACTIONChan 02<cmode>06<nick> <text>
ACTIONQuery 06<nick> <text>
ACTIONChanSelf 02<cmode>06<me> <text>
ACTIONQuerySelf 06<me> <text>

Names <pre> 15Names for <chan> <text>
NotonChan <pre> 15You're not on a channel

Echo <pre> <text>
EchoTarget <pre> <text>
Error <pre> <text>

RAW.311 !script simple.whois %::nick %::address %::realname
RAW.318 !script end.of.whois
RAW.319 10Channels› 02<chan>
RAW.312 10Server› 02<wserver>
RAW.317 10Been idle for› 02<idletime> 10secs
RAW.301 10Away› 02<text>
RAW.313 10ServAccess› 02<ircop> an IRC Operator
RAW.307 10Registered nick
RAW.314 <pre> 10Whowas› 02<nick>(<address>) 15(02<text>15)
RAW.381 <pre> 10You are now a 02IRC Operator
RAW.401 <pre> 15No such nickname› <nick>
RAW.403 <pre> 15No such channel› <chan>
RAW.404 <pre> 15Unable to send message to› <chan> (possible server desynch)

RAW.324 !script simple.modes %::modes
RAW.471 <pre> 15Can't join <chan> (its full +l)
RAW.473 <pre> 15Can't join <chan> (its invite only +i)
RAW.474 <pre> 15Can't join <chan> (you're banned +b)
RAW.467 <pre> 15Can't join <chan> (requires key +k)
RAW.482 <pre> 15<chan>› You're not an operator
RAW.332 <pre> 10Topic is› <text>
RAW.333 <pre> 10Set by› <nick> on <text>
RAW.433 <pre> 15Nickname <nick> is already in use
RAW.315 <pre> 15End of /WHO list for <value>
RAW.250 <pre> 15Total connection(s)› <value>
RAW.251 <pre> 15Users› <users> Invisible› <value>
RAW.252 <pre> 15Operator(s) online› <value>
RAW.253 <pre> 15Unknown connection(s)› <value>
RAW.254 <pre> 15Number of channels formed› <value>
RAW.255 <pre> 15Local clients› <users> on <value> server(s)
RAW.302 <pre> 15Userhost› <nick> 14<address>
RAW.265 <pre> 15Local users› <users> Max› <value>
RAW.266 <pre> 15Global users› <users> Max› <value>
RAW.391 <pre> 15Date› <date>
RAW.421 <pre> 15Invalid command› <text>

