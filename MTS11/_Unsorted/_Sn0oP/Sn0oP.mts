[mts]
Name Sn0oP Theme (Light blue)
AUTHOR Sn0oPy-G-
EMAIL Sn0oPDoG@cs.com
DESCRIPTION The theme of Sn0oP SkRiPt v 1.0
WEBSITE None
MTSVERSION 1.1
VERSION 1.0
PREFIX <c1>•<c2>•
TIMESTAMP ON
TIMESTAMPFORMAT <c1>[99h:nn<c1>]99tt
LOAD !script Sn0oP.Load Default
IMAGEBUTTONS buttons.bmp
IMAGETOOLBAR buttonbg.bmp
PARENTEXT <c1>[<text><c1>]
SCRIPT sn0op.mrc

COLORS 03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,00,03,00,00,00,03
RGBCOLORS 255,255,255 0,0,0 113,184,255 0,0,160 0,148,144 0,0,0 255,0,0 0,148,0 128,128,128 208,212,208 255,128,0 0,0,0 80,100,128 168,208,255 80,80,80 200,212,216
BASECOLORS 02,00,00,00
FONTDEFAULT verdana,11
FONTCHAN verdana,11
FONTQUERY verdana,11

CTCPSELF <pre> <c1>(<nick><c1>) <ctcp> > <text>
CTCPREPLYSELF <pre> <c1>(<nick><c1>) <ctcp> > <partentext>
MODE <pre> <nick> sets Mode: <modes>
JOIN <pre> <c1>Join: <nick> <c1>( <address> <c1>)
PART <pre> <c1>Part: <nick> <c1>( <address> <c1>)
JOINSELF <pre> <c1>Joining: <chan>
TEXTCHAN <cmode><c1>[<nick><c1>] <text>
TEXTQUERY <c1>[<nick><c1>] <text>
KICK <pre> <c1>Kick: <c1>[<nick><c1>] -> <c1>[<knick><c1>] <c1>[<text><c1>]
KICKSELF <pre> <c1>Kick: <c1>[<nick><c1>] -> <c1>[You<c1>] <c1>[<text><c1>]
QUIT <pre> <c1>Quit: <c1>[<nick><c1>] <parentext>
TOPIC <pre> <c1>Topic:' <text> (<nick>)'
NICK <pre> <c1>Nick: <c1>[<nick><c1>] -> <c1>[<newnick><c1>]
NICKSELF <pre> <c1>Nick: <c1>[You<c1>] -> <c1>[<newnick><c1>]
TEXTCHANSELF <cmode><c1>[<me><c1>] <text>
TEXTQUERYSELF <c1>[<me><c1>] <text>
MODEUSER <pre> <nick> sets mode: <modes>
INVITE <pre> <c1>Invite: <nick> <chan>
ACTIONCHAN <c1>*<cmode><nick> <text>
ACTIONQUERY <c1>*<nick> <text>
ACTIONCHANSELF <c1>*<cmode><me> <text>
ACTIONQUERYSELF <c1>*<me> <text>
CTCP <pre> <c1>[<ctcp><c1>] <c1>[<nick><c1>] <parentext>
CTCPCHAN <pre> <c1>[<ctcp><c1>] <c1>[<nick><c1>] <parentext>
CTCPREPLY <pre> <c1>[<ctcp> reply<c1>] <c1>[<nick><c1>] <text>
SERVERERROR <pre> <c1>Error: <text>
NOTICESERVER <c1>-<nick><c1>- <text>
NOTICE <c1>-<nick><c1>- <text>
NOTICECHAN  <c1>-<nick>:<chan><c1>- <text>
NOTICESELF  <c1>-<nick><c1>- <text> 
NOTICESELFCHAN  <c1>-<nick>:<chan><c1>- <text>
NOTIFY  <pre> <c1>Notify: <nick>
DNS  <pre> <c1>Dns: <address>
DNSERROR  <pre> <c1>Dns Error: Unalbe to Resolve <c1>(<iaddress><naddress><c1>)

RAW.311 <pre> <c1>Whois on <nick> <c1>[ <address> <c1>]
RAW.319 <pre> <c1>Channels: <chan>
RAW.312 <pre> <c1>Server: <wserver>
RAW.317 <pre> <c1>Idle<c1>/Signon: <idletime><c1>/<signontime>
RAW.318 <pre> <c1>End of Whois: <nick>
RAW.001 <pre> Welcome to IRC.
RAW.002 <pre> Server and version: <server>
RAW.003 <pre> Server created on: <value>.
RAW.005 <pre> Protocols supported by server: <text>.
RAW.221 <pre> Current usermode: <nick, <modes.
RAW.250 <pre> Total connections: <value>.
RAW.251 <pre> Users, invisible, servers: <users, <text>, <value>.
RAW.252 <pre> Operators: <value>.
RAW.253 <pre> Unknown connections: <value>.
RAW.254 <pre> Number of channels: <value>.
RAW.255 <pre> Local clients, Servers: <users, <value>.
RAW.265 <pre> Local users, max: <users, <value>.
RAW.266 <pre> Global users, max: <users, <value>.
RAW.302 <pre> Userhost <nick>: <address> - <value>
RAW.315 <pre>  End of <c1>Who: <value>
RAW.324 !script Sn0oP.raw.324
RAW.329 !script Sn0oP.raw.329
RAW.332 <pre> <c1>Topic:' <text> '
RAW.333 !script Sn0oP.raw.333
RAW.341 <pre> Invited from <nick>: <chan>
RAW.352 <pre> <c1>Who: <nick>, <address>, <cmode>, <away>, <chan>, <wserver>, <realname>, <value>, <text>, <isoper>
RAW.353 <pre> Channel names list: <chan, <text>.
RAW.366 <pre> End of names list: <chan>.
RAW.372 <pre> Message of the day: <text>.
RAW.375 <pre> Begin message of the day.
RAW.376 <pre> End message of the day.
RAW.391 <pre> Time/date at server: <text>
RAW.401 <pre> No such nickname: <nick>
RAW.403 <pre> No such channel: <chan>
RAW.404 <pre> Unable to send message: <chan>
RAW.421 <pre> Invalid command: /<value>
RAW.433 <pre> Nickname in use: <nick>
RAW.471 <pre> Channel full: <chan>
RAW.473 <pre> Channel invite only: <chan>
RAW.474 <pre> Banned from channel: <chan>
RAW.475 <pre> Channel key required: <chan>
RAW.482 <pre> Not opped: <chan>

RAW.Other <pre> <value>


CLINEOWNER <c1> 
CLINEOP <c1>
CLINEHOP 9
CLINEVOICE 9
CLINEREGULAR 9
CLINEME <c1>
CLINEENEMY 04
CLINEFRIEND 14
CLINEIRCOP 11

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>

Scheme1 Teal
Scheme2 Light Blue
Scheme3 Orange
Scheme4 Blue
Scheme5 More Blue
Scheme6 Red
Scheme7 Green
Scheme8 Black BG

[scheme1]
COLORS 00,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,00,8,00,8,8,8,00
BASECOLORS 4,8,8,8
LOAD !script Sn0oP.Load Teal

[scheme2]
COLORS 13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,13,14,13,14,14,14,13
BASECOLORS 3,00,00,00
LOAD !script Sn0oP.Load Light Blue

[scheme3]
COLORS 9,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,8,9,8,8,8,9
BASECOLORS 10,8,8,8
LOAD !script Sn0oP.Load Orange

[scheme4]
COLORS 0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,8,0,8,8,8,0
BASECOLORS 3,8,8,8
LOAD !script Sn0oP.Load Blue

[scheme5]
COLORS 9,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,03,9,03,9,03,03,03,9
BASECOLORS 8,3,3,3
LOAD !script Sn0oP.Load Moreblue

[scheme6]
COLORS 0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,8,0,8,8,8,0
BASECOLORS 6,8,8,8
LOAD !script Sn0oP.Load Red

[scheme7]
COLORS 0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,8,0,8,8,8,0
BASECOLORS 7,8,8,8
LOAD !script Sn0oP.Load Green

[scheme8]
COLORS 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,00,01,00,00,00,01
BASECOLORS 02,00,00,00
CLINEVOICE 00
CLINEREGULAR <c1>
LOAD !script Sn0oP.Load BlackBG
