[MTS]
NAME eight
AUTHOR bore
EMAIL migueleh@sapo.pt
WEBSITE http://fragma.r8.org
DESCRIPTION eight theme, chtrunfa's theme..
VERSION 0.9
MTSVERSION 1.1

SCRIPT eight.mrc
 
Scheme1 Rain
Scheme2 Pain
Scheme3 Snow
Scheme4 White

TIMESTAMP ON
TIMESTAMPFORMAT 12|0 hh:nn:ss 12|
 
BASECOLORS 0,11,12,0
COLORS 2,12,12,12,12,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,0
RGBCOLORS 255,255,255 0,0,0 33,57,98 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 238,238,238 96,136,202 200,200,200 128,128,128 78,78,140
 
fontdefault tahoma,11
fontquery tahoma,11
fontchan tahoma,11
 
clineregular 11
clineowner 11
clineop 00
clinehop 11
clinevoice 11
clineme 12
clinefriend 11
clineenemy 15
clineircop 11

clinecharowner 1.
clinecharop 1@
clinecharhop 1%
clinecharvoice 1+
 
PREFIX <c2>:.
PARENTEXT [<c1><text><c1>]
 
textchan !script 8chan
textchanself !script 8chanme
actionchan <c3>*<c1> <cmode>0<nick> <text>
actionchanself <c3>*<c1> <cmode>0<me> <text>
notice <c1>[<nick>] <text>
noticeself <c1>:<gt> <c2>[<nick>]<c1> <text>
textquery <c3>[<c4>0 <nick> <c3>]<c4> <text>
textqueryself <c3>[<c4>0 <me> <c3>]<c4> <text>
actionquery <c3>*<c1> 0<nick> <text>
actionqueryself <c3>*<c1> 0<me> <text>
textmsg <c1>*<nick>* <text>
textmsgsend <c1>*<nick>* <text>
 
MODE <pre> <c1><nick> set <modes>
JOIN <pre> <c1><nick><c3>[<c1><address><c3>]<c4> has joined <chan>
JOINSELF !script 8joins
PART <pre> <c1><nick><c3>[<c1><address><c3>]<c4> has left <chan><c4> <parentext>
KICK <pre> <c1><knick><c3>[<c1><kaddress><c3>]<c4> was kicked by <nick> . <c4> <c3>[<c1><text><c3>]<c4>
kickself <pre> <c1>You were kicked by <nick><c3>[<c1><address><c3>]<c4> from <chan> . <c3>[<c1><text><c3>]<c4>
quit <pre> <c1><nick><c3>[<c1><address><c3>]<c4> has quit <c3>[<c1><text><c3>]<c4>
topic <pre> <c1><nick> changed topic to "<text>"
nick <pre> <c1><nick><c3>[<c1><address><c3>]<c4> is now known as <newnick>
nickself <pre> <c1>You're now known as <newnick>
invite <pre> <c1><nick> is inviting you to join <chan>
servererror <pre> <c1>[Error] <text>
rejoin <pre> <c1>Rejoining <chan>..
ctcp <pre> <c1>[<nick>] . <ctcp> . <text>
ctcpchan <pre> <c1>[<nick>|<chan>] <ctcp> . <text>
ctcpself <pre> <c1>[<nick>] . <ctcp> . <text>
ctcpchanself <pre> <c1> [<chan>] <ctcp> . <text>
ctcpreply <pre> <c1>[<nick>|<chan>] <ctcp> reply from <text>
ctcpreplyself <pre> <c1>[<nick>] <ctcp> reply from <text>
notify <pre> <c1>Notify: <nick><parentext> is online.
unotify <pre> <c1>Notify: <nick><parentext> is now offline.
 
dns <pre> <c1>Looking up <nick>[<address>]...
dnserror <pre> <c1>Unable to resolve <address>.
dnsresolve <pre> <c1>Resolved <address> to <raddress>
echo <pre> <c1><text>
echotarget <pre> <c1>[<target>] <text>
error <pre> <c1>[Error] <text>
LOAD !script 8load
UNLOAD !script 8unload
 
raw.311 !script 8whois
raw.319 <pre> <c1> Channels: <chan>
raw.312 <pre> <c1> Server: <wserver>[<serverinfo>]
raw.301 <pre> <c1> Away: True [<text>]
raw.307 !script 8whois1
raw.317 <pre> <c1> Signed on: <signontime>
raw.318 !script 8whois2
whowas <pre> <c1>Whowas: <nick>[<address>|<realname>]
 
raw.other <pre> <c1><text>
raw.001 <pre> <c1><text>
raw.002 <pre> <c1> Host: <server> running version <value>
raw.003 <pre> <c1> Server created on: <value>
raw.005 <pre> <c1> Protocols supported by this server: <text>
raw.250 <pre> <c1> Total connection(s): <value>
raw.251 !script 8servt
raw.252 <pre> <c1> Operators online: <value>
raw.253 <pre> <c1> Unknown connections: <value>
raw.254 <pre> <c1> Channels formed: <value>
raw.255 <pre> <c1> Local clients: <users> on <value> server(s)
raw.265 <pre> <c1> Local users: <users> [max: <value>]
raw.266 !script 8servd
raw.302 <pre> <c1>Userhost: <nick> [<address>]
raw.315 <pre> <c1>End of /Who list for <chan>
raw.324 <pre> <c1>Current channel modes: <modes>
raw.332 !script 8topic
raw.333 !script 8topic2
raw.341 <pre> <c2><nick> has been invited to <chan>
raw.352 <pre> <c1><cmode><nick> [<address>] <realname>
raw.353 <pre> <c1>Listing <chan>: <text>
raw.366 <pre> <c1>End of /Names list for <chan>
raw.372 <pre> <c1><text>
raw.375 <pre> <c1>MOTD [Message Of The Day]:
raw.376 <pre> <c1>End of /MOTD.
raw.391 <pre> <c1>Time/Date: <value>
 
raw.401 <pre> <c1>No such nickname [<nick>]
raw.403 <pre> <c1>No such channel [<chan>]
raw.404 <pre> <c1>Unable to send message to <chan>
raw.421 <pre> <c1>Unknown command [<value>]
raw.433 <pre> <c1><nick> is already in use.
raw.471 <pre> <c1>Can't join <chan> [full | +l]
raw.473 <pre> <c1>Can't join <chan> [invite only | +i]
raw.474 <pre> <c1>Can't join <chan> [banned | +b]
raw.475 <pre> <c1>Can't join <chan> [key | +k]
raw.482 <pre> <c1>You're not opped on <chan>

NoticeChan <c1>[<target>] <text>
NoticeSelfChan <c1>[<target>] <text>
TextMsgSelf <c1>*<nick>* <text>
ModeUser <pre> <c1>You have set <modes>
Wallop <pre> <c1>[Wallop] <text>
NoticeServer <pre> <c1>[<nick>] <text>
RAW.314 !Script 8whoas
RAW.313 <pre> <c1> IRCop: <isoper> [<operline>]
RAW.369 !Script 8whowas2
RAW.221 <pre> <c1>Current <nick> modes: <modes>
RAW.432 <pre> <c1>Invalid nickname [<nick>]

[Scheme1]
TIMESTAMP ON
TIMESTAMPFORMAT 11| hh:nn:ss |

BASECOLORS 0,11,0,0
COLORS 2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,0
RGBCOLORS 255,255,255 0,0,0 81,101,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 238,238,238 84,101,154 200,200,200 128,128,128 78,78,140

clineme 11


[Scheme2]
TIMESTAMP ON
TIMESTAMPFORMAT 12|0 hh:nn:ss 12|

BASECOLORS 12,11,12,12

clineme 12
COLORS 2,0,0,0,0,0,0,0,0,12,12,12,12,12,12,12,12,12,12,12,12,2,12,2,12,2,12,12
RGBCOLORS 255,255,255 0,0,0 51,102,153 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 238,238,238 white 200,200,200 128,128,128 78,78,140

[Scheme3]
TIMESTAMP ON
TIMESTAMPFORMAT 2|2 hh:nn:ss 2|

clineme 11

BASECOLORS 12,11,12,2

COLORS 3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,2
RGBCOLORS 51,102,153 0,0,0 51,102,153 255,255,255 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 51,102,153 51,102,153 200,200,200 128,128,128 78,78,140

[Scheme4]
TIMESTAMP ON
TIMESTAMPFORMAT 2|2 hh:nn:ss 2|

BASECOLORS 12,11,12,2
COLORS 3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2
RGBCOLORS 51,102,153 0,0,0 51,102,153 255,255,255 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 51,102,153 51,102,153 200,200,200 128,128,128 78,78,140

clineme 11