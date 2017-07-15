[MTS]
NAME gIRC
AUTHOR stach
EMAIL istach@telepolis.com
DESCRIPTION a new look of gIRC
WEBSITE http://iStach.da.ru
MTSVERSION 1.1
VERSION 3.0

PREFIX  
PARENTEXT <pre> [14<text>]
TIMESTAMP ON
TIMESTAMPFORMAT 2[10hh:nntt2]
UNLOAD <pre> gIRCDeafult\theme written by stach .. 15unloaded ...
LOAD <PRE> gIRCDeafult\theme written by stach .. 12is loaded ...
SCRIPT gIRC.mrc
CTCPSELF <pre> 14Ctcp6:7 <nick> 14[12<ctcp>14][12<text>14]
CTCPCHANSELF <pre> 14Ctcp6:7  [14<chan>7][14<ctcp>7][14<text>7]
CTCPREPLYSELF <pre> 14Ctcp6:7 [14<chan>7][14<ctcp>7][14<parentext>7]
MODE <pre> 2Modes15:14 <nick> 2sets mode15:14 <modes>
JOIN <pre> 2Joins15:14 <nick>2\<address> ..
JOINSELF <pre> 2Joining\15<chan>...! 
PART <pre> 2Parts15:14 <nick>2\<address>6<parentext>
TEXTCHAN  15[02<cmode>13<nick>15]15 <text>
TEXTQUERY <pre> 15[02<cmode>13<nick>15]15 <text>
TEXTCHANSELF <pre> 15[02<cmode>14<me>15]15 <text>
TEXTQUERYSELF <pre> 15[02<cmode>14<me>15]15 <text>
KICK <pre> 2Kick15:14 <knick> 2from:14 <chan> 2was kicked by:15 <nick> 2[15<text>2]
KICKSELF <pre> 2You've been kicked by:14 <nick>2 from <chan>14 <text>
QUIT <pre> 2Quit15:14 <nick>2\<address>12\[7<parentext>12]
TOPIC <pre> 2Topic15:14 <nick>2 sets topic to15:14 <text>
NICK <pre> 2Nick15:14 <nick>2 is now known as 15<newnick>
MODEUSER <pre> 2Modes15:14 <modes>
INVITE <pre> 10Invite: <nick> has invited you to join <chan>
NICKSELF <pre> 2You are now known as\15<newnick>

CTCP <pre> 6Received CTCP from7: <nick>14[12<ctcp>14][12<parentext>14]
CTCPCHAN <pre> 6CTCP from7: <nick>14[12<ctcp>14][12<parentext>14]
CTCPREPLY !script ctcp.rep %::nick %::CTCP %::text
SERVERERROR <pre> 4Error15:14 <text>
NOTICESERVER <pre> 2Notice15: 2[14<nick>2]14 <text>
NOTICE <pre> 2Notice15: 2[15<nick>2]14 <text>
NOTICECHAN <pre> 2ChanNotice15: 2[15<nick>\<chan>2]14 <text>
NOTICESELF <pre> 15<nick>14\<text>
NOTICESELFCHAN <pre>15 <chan>14\<text>
NOTIFY <pre> 1<nick>2 it's Online -14 Info: [4 <address>14 ] Note: <parentext> 
UNOTIFY <pre> 1<nick>2 it's Offline -14 Info: [4 <address> 14] Note: <parentext> 
DNS <pre> 2Up15:2 <address>...
DNSERROR <pre> 2Unable to resolve 2[15<iaddress>\<naddress>2]
DNSRESOLVE <pre> 2Resolved <naddress> 2[15(<iaddress>) to <raddress>2]
ACTIONCHAN <pre> 2<cmode>14<nick>12 <text>
ACTIONQUERY <pre> 15<nick>14<text>
ACTIONCHANSELF <pre> 2<cmode>14<me>15 <text>
ACTIONQUERYSELF <pre> 15<me>12 <text>

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre>7•4•7• <text>

CLINEOP 0
CLINEHOP 14
CLINEVOICE 6
CLINEREGULAR 5
CLINEOWNER 13
CLINEENEMY 4
CLINEFRIEND 4
CLINEME 12
CLINECHAROP 12@
CLINECHARHOP 12%
CLINECHARVOICE 12+
CLINECHARREGULAR 0

COLORS 5,1,8,7,2,3,10,4,3,15,2,14,7,7,1,14,10,2,3,7,14,6,1,10,15,4
BASECOLORS 0,1,4,1
RGBCOLORS 250,250,250 0,0,0 67,83,11 67,97,80 205,89,0  241,241,227 225,222,216 255,139,0 255,209,0 0,180,119 114,114,61 0,0,255 161,183,202 128,128,128 111,119,114 133,128,116
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11

RAW.311 !script g.whois %::nick %::address %::realname
RAW.318 !script e.whois
RAW.319        15Channels: [<chan>]
RAW.312        15Server: [<wserver>]
RAW.317        15Been idle for: [<idletime> secs]
RAW.301        15Away: [<text>]
RAW.313        15TypeUser: [<ircop> an IRC Operator]
RAW.307        15Registered nick: [<nick>]
RAW.314    15Whowas: [<nick>\<address>]: <text>
RAW.381    15You are now a IRC Operator <me> - [<address>]
RAW.401    15No such nickname: <nick>.
RAW.403    15No such nickname: <chan>.
RAW.404    15Unable to send message's to: <chan>

RAW.324 !script t.mode %::modes
RAW.471 <pre> 2Can't join15:14  <chan> 2[15its full +l2]
RAW.473 <pre> 2Can't join15:14  <chan> 2[15its invite only +i2]
RAW.474 <pre> 2Can't join15:14  <chan> 2[15you're banned +b2]
RAW.467 <pre> 2Can't join15:14  <chan> 2[15requires key +k2]
RAW.482 <pre> 3<chan>15:14  You're not an operator.
RAW.332 <pre> 2Topic15:14 "<text>"
RAW.333 <pre> 2Set by15:14 <nick> 2on <text> ...
RAW.433 <pre> 15Nickname\<nick> is already in 4use..
RAW.315 <pre> 03End of \WHO list for <value>
RAW.250 <pre> 2Total connection(s)15:14 <value>.
RAW.251 <pre> 2Users15:14  <users> Invisible15:14  <value>
RAW.252 <pre> 2Operator(s) online15:14 <value>.
RAW.253 <pre> 2Unknown connection(s)15:14 <value>.
RAW.254 <pre> 2Number of channels formed15:14 <value>.
RAW.255 <pre> 2Local clients15:14 <users>2on15:14 <value> 2server(s).
RAW.302 <pre> 2Userhost15:14 <nick> 2[15<address>2]
RAW.265 <pre> 2Local users15:14 <users> 2Max15:14 <value>.
RAW.266 <pre> 2Global users15:14 <users> 2Max15:14 <value>.
RAW.391 <pre> 2Date15:14 <date>.
RAW.421 <pre> 2Invalid command15:14  <text>.
NAMES <pre> 2Names15:14  for <chan>15 <text>
NOTONCHAN <pre> 2You're not on a channel please enter to one...
scheme1 Terminal\Default
scheme2 Grey
scheme3 Terminal\Grey


[scheme1]
UNLOAD gIRCDeafultTERMINAL\theme written by stach .. 15unloaded ...
LOAD <PRE> gIRCDeafultTERMINAL\theme written by stach .. 12is loaded ...
FONTDEFAULT terminal,8
FONTCHAN terminal,8
FONTQUERY terminal,8
RAW.311 !script g.whois2 %::nick %::address %::realname
RAW.318 !script e.whois2

[scheme3]
PARENTEXT [14<text>]
TIMESTAMP ON
TIMESTAMPFORMAT 15[02HH:nntt15]
UNLOAD gIRCGreyTERMINAL\theme written by stach .. 15unloaded ...
LOAD <PRE> gIRCGreyTERMINAL\theme written by stach .. 12is loaded ...
SCRIPT gIRC.mrc
CTCPSELF 14Ctcp6:7 <nick> 14[12<ctcp>14][12<text>14]
CTCPCHANSELF 14Ctcp6:7  [14<chan>7][14<ctcp>7][14<text>7]
CTCPREPLYSELF 14Ctcp6:7 [14<chan>7][14<ctcp>7][14<parentext>7]
MODE <pre> 2Modes15:14 <nick> 2sets mode15:14 <modes>
JOIN <pre> 2Joins15:14 <nick>2\<address> ..
JOINSELF <pre> 2Joining\15<chan>...! 
PART <pre> 2Parts15:14 <nick>2\<address>6<parentext>
TEXTCHAN 15[02<cmode>13<nick>15]15 <text>
TEXTQUERY 15[02<cmode>13<nick>15]15 <text>
TEXTCHANSELF 15[02<cmode>14<me>15]15 <text>
TEXTQUERYSELF 15[02<cmode>14<me>15]15 <text>
KICK <pre> 2Kick15:14 <knick> 2from:14 <chan> 2was kicked by:15 <nick> 2[15<text>2]
KICKSELF <pre> 2You've been kicked by:14 <nick>2 from <chan>14 <text>
QUIT <pre> 2Quit15:14 <nick>2\<address>12\[7<parentext>12]
TOPIC <pre> 2Topic15:14 <nick>2 sets topic to15:14 <text>
NICK <pre> 2Nick15:14 <nick>2 is now known as 15<newnick>
MODEUSER <pre> 2Modes15:14 <modes>
INVITE <pre> 10Invite: <nick> has invited you to join <chan>
NICKSELF <pre> 2You are now known as\15<newnick>

CTCP <pre> 6Received CTCP from7: <nick>14[12<ctcp>14][12<parentext>14]
CTCPCHAN <pre> 6CTCP from7: <nick>14[12<ctcp>14][12<parentext>14]
CTCPREPLY !script ctcp.rep %::nick %::CTCP %::text
SERVERERROR <pre> 4Error15:14 <text>
NOTICESERVER <pre> 2Notice15: 2[14<nick>2]14 <text>
NOTICE <pre> 2Notice15: 2[15<nick>2]14 <text>
NOTICECHAN <pre> 2ChanNotice15: 2[15<nick>\<chan>2]14 <text>
NOTICESELF <pre> 15<nick>14\<text>
NOTICESELFCHAN <pre>15 <chan>14\<text>
NOTIFY <pre> 1<nick>2 it's Online -14 Info: [4 <address>14 ] Note: <parentext> 
UNOTIFY <pre> 1<nick>2 it's Offline -14 Info: [4 <address> 14] Note: <parentext> 
DNS <pre> 2Up15:2 <address>...
DNSERROR <pre> 2Unable to resolve 2[15<iaddress>\<naddress>2]
DNSRESOLVE <pre> 2Resolved <naddress> 2[15(<iaddress>) to <raddress>2]
ACTIONCHAN <pre> 2<cmode>14<nick>12 <text>
ACTIONQUERY <pre> 15<nick>14<text>
ACTIONCHANSELF <pre> 2<cmode>14<me>15 <text>
ACTIONQUERYSELF <pre> 15<me>12 <text>

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre>7•4•7• <text>

CLINEOP 14
CLINEHOP 4
CLINEVOICE 15
CLINEREGULAR 2
CLINEOWNER 13
CLINEENEMY 4
CLINEFRIEND 2
CLINEME 12
CLINECHAROP 12@
CLINECHARHOP 12%
CLINECHARVOICE 12+
CLINECHARREGULAR

COLORS 0,6,8,7,2,3,10,4,3,15,2,14,7,7,6,14,10,2,3,7,14,12,0,0,15,4
BASECOLORS 0,1,4,1
RGBCOLORS 72,72,72 0,0,0 255,194,0 100,100,100 150,150,150  160,0,160 255,158,0 255,128,0 255,255,0 0,144,144 0,255,255 0,0,255 161,183,202 128,128,128 208,208,208 255,255,255
FONTDEFAULT terminal,8
FONTCHAN terminal,8
FONTQUERY terminal,8

RAW.311 !script g.whois2 %::nick %::address %::realname
RAW.318 !script e.whois2
RAW.324 !script t.mode %::modes
RAW.471 <pre> 2Can't join15:14  <chan> 2[15its full +l2]
RAW.473 <pre> 2Can't join15:14  <chan> 2[15its invite only +i2]
RAW.474 <pre> 2Can't join15:14  <chan> 2[15you're banned +b2]
RAW.467 <pre> 2Can't join15:14  <chan> 2[15requires key +k2]
RAW.482 <pre> 3<chan>15:14  You're not an operator.
RAW.332 <pre> 2Topic15:14 "<text>"
RAW.333 <pre> 2Set by15:14 <nick> 2on <text> ...
RAW.433 <pre> 15Nickname\<nick> is already in 4use..
RAW.315 <pre> 03End of \WHO list for <value>
RAW.250 <pre> 2Total connection(s)15:14 <value>.
RAW.251 <pre> 2Users15:14  <users> Invisible15:14  <value>
RAW.252 <pre> 2Operator(s) online15:14 <value>.
RAW.253 <pre> 2Unknown connection(s)15:14 <value>.
RAW.254 <pre> 2Number of channels formed15:14 <value>.
RAW.255 <pre> 2Local clients15:14 <users>2on15:14 <value> 2server(s).
RAW.302 <pre> 2Userhost15:14 <nick> 2[15<address>2]
RAW.265 <pre> 2Local users15:14 <users> 2Max15:14 <value>.
RAW.266 <pre> 2Global users15:14 <users> 2Max15:14 <value>.
RAW.391 <pre> 2Date15:14 <date>.
RAW.421 <pre> 2Invalid command15:14  <text>.
NAMES <pre> 2Names15:14  for <chan>15 <text>
NOTONCHAN <pre> 2You're not on a channel please enter to one...

[scheme2]
PARENTEXT [14<text>]
TIMESTAMP ON
TIMESTAMPFORMAT 15[02HH:nntt15]
UNLOAD gIRCGrey\theme written by stach .. 15unloaded ...
LOAD <PRE> gIRCGrey\theme written by stach .. 12is loaded ...
SCRIPT gIRC.mrc
CTCPSELF 14Ctcp6:7 <nick> 14[12<ctcp>14][12<text>14]
CTCPCHANSELF 14Ctcp6:7  [14<chan>7][14<ctcp>7][14<text>7]
CTCPREPLYSELF 14Ctcp6:7 [14<chan>7][14<ctcp>7][14<parentext>7]
MODE <pre> 2Modes15:14 <nick> 2sets mode15:14 <modes>
JOIN <pre> 2Joins15:14 <nick>2\<address> ..
JOINSELF <pre> 2Joining\15<chan>...! 
PART <pre> 2Parts15:14 <nick>2\<address>6<parentext>
TEXTCHAN 15[02<cmode>13<nick>15]15 <text>
TEXTQUERY 15[02<cmode>13<nick>15]15 <text>
TEXTCHANSELF 15[02<cmode>14<me>15]15 <text>
TEXTQUERYSELF 15[02<cmode>14<me>15]15 <text>
KICK <pre> 2Kick15:14 <knick> 2from:14 <chan> 2was kicked by:15 <nick> 2[15<text>2]
KICKSELF <pre> 2You've been kicked by:14 <nick>2 from <chan>14 <text>
QUIT <pre> 2Quit15:14 <nick>2\<address>12\[7<parentext>12]
TOPIC <pre> 2Topic15:14 <nick>2 sets topic to15:14 <text>
NICK <pre> 2Nick15:14 <nick>2 is now known as 15<newnick>
MODEUSER <pre> 2Modes15:14 <modes>
INVITE <pre> 10Invite: <nick> has invited you to join <chan>
NICKSELF <pre> 2You are now known as\15<newnick>

CTCP <pre> 6Received CTCP from7: <nick>14[12<ctcp>14][12<parentext>14]
CTCPCHAN <pre> 6CTCP from7: <nick>14[12<ctcp>14][12<parentext>14]
CTCPREPLY !script ctcp.rep %::nick %::CTCP %::text
SERVERERROR <pre> 4Error15:14 <text>
NOTICESERVER <pre> 2Notice15: 2[14<nick>2]14 <text>
NOTICE <pre> 2Notice15: 2[15<nick>2]14 <text>
NOTICECHAN <pre> 2ChanNotice15: 2[15<nick>\<chan>2]14 <text>
NOTICESELF <pre> 15<nick>14\<text>
NOTICESELFCHAN <pre>15 <chan>14\<text>
NOTIFY <pre> 1<nick>2 it's Online -14 Info: [4 <address>14 ] Note: <parentext> 
UNOTIFY <pre> 1<nick>2 it's Offline -14 Info: [4 <address> 14] Note: <parentext> 
DNS <pre> 2Up15:2 <address>...
DNSERROR <pre> 2Unable to resolve 2[15<iaddress>\<naddress>2]
DNSRESOLVE <pre> 2Resolved <naddress> 2[15(<iaddress>) to <raddress>2]
ACTIONCHAN <pre> 2<cmode>14<nick>12 <text>
ACTIONQUERY <pre> 15<nick>14<text>
ACTIONCHANSELF <pre> 2<cmode>14<me>15 <text>
ACTIONQUERYSELF <pre> 15<me>12 <text>

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre>7•4•7• <text>

CLINEOP 14
CLINEHOP 4
CLINEVOICE 15
CLINEREGULAR 2
CLINEOWNER 13
CLINEENEMY 4
CLINEFRIEND 2
CLINEME 12
CLINECHAROP 12@
CLINECHARHOP 12%
CLINECHARVOICE 12+
CLINECHARREGULAR

COLORS 0,6,8,7,2,3,10,4,3,15,2,14,7,7,6,14,10,2,3,7,14,12,0,0,15,4
BASECOLORS 0,1,4,1
RGBCOLORS 72,72,72 0,0,0 255,194,0 100,100,100 150,150,150  160,0,160 255,158,0 255,128,0 255,255,0 0,144,144 0,255,255 0,0,255 161,183,202 128,128,128 208,208,208 255,255,255
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11

RAW.311 !script g.whois %::nick %::address %::realname
RAW.318 !script e.whois
RAW.324 !script t.mode %::modes
RAW.471 <pre> 2Can't join15:14  <chan> 2[15its full +l2]
RAW.473 <pre> 2Can't join15:14  <chan> 2[15its invite only +i2]
RAW.474 <pre> 2Can't join15:14  <chan> 2[15you're banned +b2]
RAW.467 <pre> 2Can't join15:14  <chan> 2[15requires key +k2]
RAW.482 <pre> 3<chan>15:14  You're not an operator.
RAW.332 <pre> 2Topic15:14 "<text>"
RAW.333 <pre> 2Set by15:14 <nick> 2on <text> ...
RAW.433 <pre> 15Nickname\<nick> is already in 4use..
RAW.315 <pre> 03End of \WHO list for <value>
RAW.250 <pre> 2Total connection(s)15:14 <value>.
RAW.251 <pre> 2Users15:14  <users> Invisible15:14  <value>
RAW.252 <pre> 2Operator(s) online15:14 <value>.
RAW.253 <pre> 2Unknown connection(s)15:14 <value>.
RAW.254 <pre> 2Number of channels formed15:14 <value>.
RAW.255 <pre> 2Local clients15:14 <users>2on15:14 <value> 2server(s).
RAW.302 <pre> 2Userhost15:14 <nick> 2[15<address>2]
RAW.265 <pre> 2Local users15:14 <users> 2Max15:14 <value>.
RAW.266 <pre> 2Global users15:14 <users> 2Max15:14 <value>.
RAW.391 <pre> 2Date15:14 <date>.
RAW.421 <pre> 2Invalid command15:14  <text>.
NAMES <pre> 2Names15:14  for <chan>15 <text>
NOTONCHAN <pre> 2You're not on a channel please enter to one...
