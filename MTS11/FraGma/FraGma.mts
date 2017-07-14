[MTS]
NAME FraGma+
AUTHOR bore
EMAIL migueleh@sapo.pt
WEBSITE http://fragma.r8.org
DESCRIPTION FraGma standard theme!
VERSION 3
MTSVERSION 1.1
SCRIPT FraGma.mrc
 
TIMESTAMP ON
TIMESTAMPFORMAT 12[ hh:nn ]
 
BASECOLORS 12,1,12,2
COLORS 11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,13,1,13,1
 
fontdefault tahoma,11
fontquery tahoma,11
fontchan tahoma,11
 
clineowner 1
clineop 1
clinehop 1
clinevoice 1
clineregular 1
clineme 12
 
clinecharowner 1.
clinecharop 1@
clinecharhop 1%
clinecharvoice 1+
 
PREFIX 12:
PARENTEXT [<c1><text><c1>]
 
textchan <c1>[<cmode><nick>] <text>
textchanself <c1>[<cmode><me>] <text>
actionchan <c3>*<c1> <cmode><nick> <text>
actionchanself <c3>*<c1> <cmode><me> <text>
notice <c1>[<nick>] <text>
noticeself <c1>:<gt> <c2>[<nick>]<c1> <text>
textquery <c1>[<nick>] <text>
textqueryself <c1>[<me>] <text>
actionquery <c3>*<c1> <nick> <text>
actionqueryself <c3>*<c1> <me> <text>
textmsg <c1>*<nick>* <text>
textmsgsend <c1>*<nick>* <text>
 
MODE <pre> <c1><nick> set <modes>
JOIN <pre> <c1><nick>[<address>] has joined <chan>
JOINSELF !script FGjoins
PART <pre> <c1><nick>[<address>] has left <chan> <parentext>
KICK <pre> <c1><knick>[<kaddress>] was kicked by <nick> . <parentext>
kickself <pre> <c1>You were kicked by <nick>[<address>] from <chan> . <parentext>
quit <pre> <c1><nick>[<address>] has quit . <parentext>
topic <pre> <c1><nick> changed topic to "<text>"
nick <pre> <c1><nick>[<address>] is now known as <newnick>
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
LOAD !script FGload
UNLOAD !script FGunload
 
raw.311 !script FGwhois
raw.319 <pre> <c1> Channels: <chan>
raw.312 <pre> <c1> Server: <wserver>[<serverinfo>]
raw.301 <pre> <c1> Away: True [<text>]
raw.307 !script FGwhois1
raw.317 <pre> <c1> Signed on: <signontime>
raw.318 !script FGwhois2
whowas <pre> <c1>Whowas: <nick>[<address>|<realname>]
 
raw.other <pre> <c1><text>
raw.001 <pre> <c1><text>
raw.002 <pre> <c1> Host: <server> running version <value>
raw.003 <pre> <c1> Server created on: <value>
raw.005 <pre> <c1> Protocols supported by this server: <text>
raw.250 <pre> <c1> Total connection(s): <value>
raw.251 !script FGservt
raw.252 <pre> <c1> Operators online: <value>
raw.253 <pre> <c1> Unknown connections: <value>
raw.254 <pre> <c1> Channels formed: <value>
raw.255 <pre> <c1> Local clients: <users> on <value> server(s)
raw.265 <pre> <c1> Local users: <users> [max: <value>]
raw.266 !script FGservd
raw.302 <pre> <c1>Userhost: <nick> [<address>]
raw.315 <pre> <c1>End of /Who list for <chan>
raw.324 <pre> <c1>Current channel modes: <modes>
raw.332 !script FGtopic
raw.333 !script FGtopic2
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
 
ImageStatus photo fragma.png
MODEUSE <pre> <c1><nick> sets mode <modes>
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 240,246,251 64,91,134 197,209,222 128,128,128 208,208,208
NoticeChan <c1>[<target>] <text>
NoticeSelfChan <c1>[<target>] <text>
TextMsgSelf <c1>*<nick>* <text>
ModeUser <pre> <c1>You have set <modes>
Wallop <pre> <c1>[Wallop] <text>
NoticeServer <pre> <c1>[<nick>] <text>
RAW.314 !Script FGwhoas
RAW.313 <pre> <c1> IRCop: <isoper> [<operline>]
RAW.369 !Script FGwhowas2
RAW.221 <pre> <c1>Current <nick> modes: <modes>
RAW.432 <pre> <c1>Invalid nickname [<nick>]
 
CLineFriend 01
CLineEnemy 01
CLineIrcOp 01
Scheme1 No background
 
[Scheme1]
Timestamp ON
TimestampFormat 12[ hh:nn ]