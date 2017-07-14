[MTS]
NAME bluegIRC
AUTHOR stach0
EMAIL stach@internetdrive.com
DESCRIPTION Another theme of gIRC .. but this is blue and nice :) check it .. :-).
WEBSITE http://scripters.4d2.net
MTSVERSION 1.1
VERSION 0.5

PREFIX 2•3•2•
PARENTEXT [14<text>]
TIMESTAMP ON
TIMESTAMPFORMAT 15[02HH:nntt15]
UNLOAD <PRE> 2bluegIRC\15theme written by stach .. 12unloaded ...
LOAD <PRE> 2bluegIRC\15theme written by stach .. 12is loaded ...
SCRIPT bluegIRC.mrc

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
NOTIFY !script notify.on %::nick %::text
UNOTIFY !script notify.off %::nick %::text
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
CLINEHOP 4
CLINEVOICE 15
CLINEREGULAR 2
CLINEOWNER 13
CLINEENEMY 4
CLINEFRIEND 2
CLINEME 12
CLINECHAROP 12@
CLINECHARHOP 12%
CLINECHARVOICE 12+
CLINECHARREGULAR

COLORS 0,6,8,7,2,3,10,4,3,15,2,14,7,7,6,14,10,2,3,7,14,12,0,0,15,4
BASECOLORS 0,1,4,1
RGBCOLORS 0,91,147 0,0,0 202,211,219 128,155,186 255,0,0  186,200,213 136,164,183 53,128,166 255,255,0 0,144,144 0,255,255 0,0,255 161,183,202 128,128,128 208,208,208 255,255,255
FONTDEFAULT Tahoma,12
FONTCHAN Tahoma,12
FONTQUERY Tahoma,12

RAW.311 !script g.whois %::nick %::address %::realname
RAW.318 !script e.whois
RAW.319 <pre> 2Channels15:14 <chan> ...
RAW.312 <pre> 2Server15:14 <wserver> ...
RAW.317 <pre> 2Been idle for15:14 <idletime> 15secs ..
RAW.301 <pre> 2Away15:14 <text> ..
RAW.313 <pre> 2TypeUser15:14 <ircop>2 an IRC Operator..
RAW.307 <pre> 2Registered nick15:14  <nick>
RAW.314 <pre> 2Whowas15:14 <nick>2\<address> 2[15<text>2]
RAW.381 <pre> 2You are now a 14IRC Operator <me>
RAW.401 <pre> 2No such nickname15:14 <nick>.
RAW.403 <pre> 2No such nickname15:14 <chan>
RAW.404 <pre> 2Unable to send message's to15:14  <chan>

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
