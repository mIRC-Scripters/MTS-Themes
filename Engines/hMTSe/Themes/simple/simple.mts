[MTS]
NAME Simple Theme
AUTHOR oMri^^
EMAIL zola@aquanet.co.il
DESCRIPTION A simple, clean and smooth theme.
WEBSITE Under construction
MTSVERSION 1.1
VERSION 1.0

PREFIX 15*
PARENTEXT [<text>]
TIMESTAMP ON
TIMESTAMPFORMAT 15[02HH:nntt15]
LOAD <PRE> 02Loaded Simple theme by oMri^^ [v1.0]
SCRIPT simple.mrc

CTCPSELF 02CTCP -> <nick> 02<ctcp> <text>
CTCPCHANSELF 15[02CTCP15] -> <chan> 02<ctcp> <text>
CTCPREPLYSELF 15[02CTCP15] -> <chan> 02<ctcp> <parentext>
MODE <pre> 03Modes: <nick> sets mode: <modes>
JOIN <pre> 03Joins: <nick>/<address>
JOINSELF <pre> 03Joining <chan>... 
PART <pre> 10Parts: <nick>/<address> <parentext>
TEXTCHAN 15[02<cmode>01<nick>15] <text>
TEXTQUERY 15[02<cmode>01<nick>15] <text>
TEXTCHANSELF 15[02<cmode>14<me>15] <text>
TEXTQUERYSELF 15[02<cmode>14<me>15] <text>
KICK <pre> 03Kick: <knick> was kicked by <nick> [<text>]
KICKSELF <pre> 03You've been kicked by <nick> from <chan> <text>
QUIT <pre> 02Quit: <nick>/<address> <parentext>
TOPIC <pre> 03Topic: <nick> sets topic to: <text>
NICK <pre> 03Nick: <nick> is now known as <newnick>
MODEUSER <pre> 03Modes: <modes>
INVITE <pre> 10Invite: <nick> has invited you to join <chan>
NICKSELF <pre> 02You are now known as <newnick>

CTCP <pre> 02Personal CTCP from <nick>: <ctcp> <parentext>
CTCPCHAN <pre> 02CTCP from <nick>: <ctcp> <parentext>
CTCPREPLY <pre> 02<nick>'s <CTCP> reply: <text>
SERVERERROR <pre> 04Error: <text>
NOTICESERVER <pre> 05Notice: [01<nick>05] <text>
NOTICE <pre> 05Notice: [01<nick>05] <text>
NOTICECHAN <pre> 05ChanNotice: [01<nick>:<chan>05] <text>
NOTICESELF 04-> <nick> <text>
NOTICESELFCHAN 04-> <chan> <text>
NOTIFY <pre> 06Notify: <nick> [<text>06] is online
UNOTIFY <pre> 06Notify: <nick> [<text>06] is offline
DNS <pre> 14Looking up <address>...
DNSERROR <pre> 14Unable to resolve [<iaddress><naddress>]
DNSRESOLVE <pre> 14Resolved <naddress> (<iaddress>) to <raddress>
ACTIONCHAN <pre> 02<cmode>06<nick> <text>
ACTIONQUERY <pre> 06<nick> <text>
ACTIONCHANSELF <pre> 02<cmode>06<me> <text>
ACTIONQUERYSELF <pre> 06<me> <text>

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>

CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEREGULAR 01
CLINEOWNER 01
CLINEENEMY 04
CLINEFRIEND 07
CLINEME 12
CLINECHAROP 12@
CLINECHARHOP 12%
CLINECHARVOICE 12+
CLINECHARREGULAR

COLORS 0,6,4,5,2,3,10,4,3,15,2,1,5,7,6,1,10,2,3,5,1,0,1,0,15,4
BASECOLORS 2,3,4,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT Tahoma,12
FONTCHAN Tahoma,12
FONTQUERY Tahoma,12

RAW.311 !script simple.whois %::nick %::address %::realname
RAW.318 !script end.of.whois
RAW.319 <pre> 10Channels: 02<chan>
RAW.312 <pre> 10Server: 02<wserver>
RAW.317 <pre> 10Been idle for: 02<idletime> 10secs
RAW.301 <pre> 10Away: 02<text>
RAW.313 <pre> 10ServAccess: 02<ircop> an IRC Operator
RAW.307 <pre> 10Registered nick
RAW.314 <pre> 10Whowas: 02<nick>10/02<address> 10[02<text>10]
RAW.401 <pre> 04No such nickname <nick>
RAW.403 <pre> 04No such nickname <chan>
RAW.404 <pre> 04Unable to send message to <chan> (possible server desynch)

RAW.324 <pre> 03Modes: <modes>
RAW.471 <pre> 04Can't join <chan> 15(its full +l)
RAW.473 <pre> 04Can't join <chan> 15(its invite only +i)
RAW.474 <pre> 04Can't join <chan> 15(you're banned +b)
RAW.467 <pre> 04Can't join <chan> 15(requires key +k)
RAW.482 <pre> 03<chan>: You're not an operator
RAW.332 <pre> 03Topic: '<text>'
RAW.333 <pre> 03Set by: <nick> 03on 03<text>
RAW.433 <pre> 04Nickname/&nick is already in use
RAW.315 <pre> 03End of /WHO list for <value>
RAW.001 <pre> 03<text>
RAW.002 <pre> 10Host: 02<host> 10running version 02<version>
RAW.003 <pre> 10Server created on: 02<date>
RAW.005 <pre> 10Protocols: 02<text> 10are available on this server.
RAW.250 <pre> 10Total connection(s): 02<value>
RAW.251 <pre> 10Users: 02<users> 10Invisible: 02<value> 10Servers: 02<text>
RAW.252 <pre> 10Operator(s) online: 02<value>
RAW.253 <pre> 10Unknown connection(s): 02<value>
RAW.254 <pre> 10Number of channels formed: 02<value>
RAW.255 <pre> 10Local clients: 02<users> 10on 02<value> 10server(s)
RAW.302 <pre> 10Userhost: 02<nick> 10[02<address>10]
RAW.265 <pre> 10Local users: 02<users> 10Max: 02<value>
RAW.266 <pre> 10Global users: 02<users> 10Max: 02<value>
RAW.391 <pre> 10Date: 02<date>
RAW.375 <pre> 10Message of the day:
RAW.376 <pre> 10End of /MOTD command.
RAW.372 14<text>
RAW.421 <pre> 04Invalid command: <text>

NAMES <pre> 03Names: for <chan> <text>
NOTONCHAN <pre> 04You're not on a channel
