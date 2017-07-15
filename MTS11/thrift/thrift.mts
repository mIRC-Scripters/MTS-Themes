[mts]
AUTHOR kristnjov
DESCRIPTION Blueish, purpleish, sort-of-ish.
EMAIL kristnjov@telia.com
LOAD <pre> Thrift 1.2 loaded...
MTSVERSION 1.1
NAME Thrift
PREFIX <c2>.<c1>::<c2>.
SCRIPT thrift.mrc
TIMESTAMP OFF
TIMESTAMPFORMAT [HH:nn]
VERSION 1.2
WEBSITE n/a

; A lot of creds to zaiko for helping me out bugfixing this theme!

ACTIONCHAN <timestamp> <c3>» <c3><cmode><c2><nick><c3> <text>
ACTIONCHANSELF <timestamp> <c3>» <c3><cmode><c4><me><c3> <text>
ACTIONQUERY <timestamp> <c3>» <c2><nick><c3> <text>
ACTIONQUERYSELF <timestamp> <c3>» <c4><me><c3> <text>
CTCP <pre><c1> <nick> <c2>(<address>)<c1> requests <ctcp> (<text>) from you
CTCPREPLY <pre><c1> <nick> <c2>(<address>)<c1> <ctcp> <c2>reply:<c1><text>
CTCPREPLYSELF <pre> <c2>incoming ctcp reply from <c1><nick><c2>:<c1> <ctcp> <c2><text>
CTCPSELF <pre> outgoing ctcp to <nick>: <ctcp> <text>
DNSERROR !script thrift.dnserror
DNSRESOLVE !script thrift.dnsresolve
INVITE <pre> <c1><nick><c2> invites you to join<c1> <chan>
JOIN <pre> <c2>join: <c1><nick> <c2>(<address>)
JOINSELF !script thrift.joinself
KICK <pre> <c2>kick: <c1><knick> <c2>was kicked by<c1> <nick><c2> from <c1><chan> <c2>(<text>)
KICKSELF <pre><c2> kick: you were kicked from <chan> by<c1> <nick> <c2>(<text>)
MODE <pre> <c2>mode:<c1> <nick> <c2>sets mode:<c1> <modes>
MODEUSER <pre> mode: <c1><nick> <modes>
NICK <pre><c2> nick: <c1><nick> <c2>is now known as<c1> <newnick>
NICKSELF <pre><c2> nick: <c1><me><c2> is now known as<c1> <newnick>
PARENTEXT <c2>«<c1><text><c1><c2>»
PART <pre> <c2>part: <c1><nick> <c2>(<address>)
QUIT <c3><pre> <c2>quit:<c1> <nick> <c2>(<address>) <parentext>
TEXTCHAN <timestamp> <c3><cmode><c2><nick>: <text>
TEXTCHANSELF <timestamp> <c3><cmode><c4><me>: <text>
TEXTQUERY <timestamp> <c2><nick>: <text>
TEXTQUERYSELF <timestamp> <c4><me>: <text>
TOPIC <pre> <c1><nick> changes topic to:<c4> <text>
NOTICESELF -> <nick> <text>
NOTICESELFCHAN -> <chan> <text>
CTCPCHAN <pre><c1> <nick> <c2>(<address>)<c1> requests <ctcp> (<text>) from <chan>
SERVERerror <pre> servererror: <text>
NOTICE <c2>[<c1><nick><c2>]<c3> <text>
NOTICESERVER <c2>[<c1><nick><c2>]<c3> <text>
NOTICECHAN <c2>[<c1><nick><c2>/<c1><chan><c2>]<c3> <text>
NOTIFY <pre> <c1><nick> <c2>is online <c3><parentext>
UNOTIFY <pre><c1> <nick><c2> is offline <c3><parentext>

Colors 8,2,10,15,9,9,9,10,10,10,10,1,1,2,1,1,10,10,10,10,10,0,1,0,1,2
RGBCOLORS 74,74,85 233,233,233 182,182,182 155,155,155 121,121,121 163,159,215 181,183,213 168,175,219 32,11,70 215,215,240 179,179,225 142,142,213 109,111,169 26,37,68 243,193,160 158,204,136
BaseColors 09,10,02,14

Fontdefault Tahoma,11
Fontchan Tahoma,11
Fontquery Tahoma,11

raw.251 !script thrift.lusersinit %::users %::text
raw.252 <pre> ircops on irc: <value> 
raw.253 <pre> unknown connections: <value>
raw.254 <pre> channels formed: <value>
raw.255 !script thrift.lusersend %::users %::value
raw.301 !script thrift.whoisaway %::text
raw.305 <c1>away<c2>:<c1> off
raw.306 <c1>away<c2>:<c1> on
raw.309 <c1><nick><c2> <text>
raw.310 <c1><nick><c2> <text>
raw.311 !script thrift.whoisinit %::nick %::address %::realname
raw.312 !script thrift.whoisserver %::wserver
raw.314 <pre> <c1><nick> <c2>was (<address>) » (<realname>)
raw.317 !script thrift.whoisidle %::idletime %::signontime
raw.318 !script thrift.endofwhois %::nick
raw.319 !script thrift.whoischans %::chan
raw.324 <pre> <c2>modes/<c1><chan><c2>:<c1> <modes> <pre>
raw.329 !script
raw.330 <c1><nick><c2> is authed as <c1><value>
raw.332 <pre> <c2>topic<c1> <chan><c2>:<c4> <text>
raw.333 <pre> <c1><chan><c2> topic set by<c1> <nick> @<c1> <text>
raw.341 <pre> <nick> has been invited to <chan>
raw.352 <pre> <chan> (<address>) <nick> » <realname>
raw.353 !script thrift.names %::text
raw.366 !script thrift.endofnames
raw.401 <c1>error<c2>:<c1> <nick><c2> no such user
raw.403 <c1>error<c2>:<c1> <chan><c2> no such channel
raw.404 <c1>error<c2>:<c1> <chan> <c2>unable to send text to channel  
raw.405 <c1>error<c2>: <c1><chan><c2> unable to join - You're on too many channels
raw.406 <c1>error<c2>: <c1><nick><c2> no such user
raw.421 <c1>error<c2>: <c1><value> <c2>unknown command
raw.432 <c1>error<c2>: <c1><nick><c2> is an invalid nickname
raw.433 <c1>error:<c1> <nick><c2> nickname already taken
raw.438 <c1>error:<c1> nickname changed too fast, please wait a while and try again...
raw.439 <c1>error<c2>:<c1> target changed too fast, please wait a while and try again...
raw.441 <c1>error<c2>: <c1><nick> is not on <chan>
raw.442 <c1>error<c2>: <c1><chan> you're not on that channel
raw.443 <c1>error<c2>: <c1><nick> is already on <chan>
raw.461 <c1>error<c2>: <c1><text> insufficient parameters
raw.467 <c1>error<c2>: <c1><chan> need a key to enter.
raw.471 <c1>error<c2>: <c1><chan> channel is full.
raw.472 <c1>error<c2>: <c1><text> unkown character
raw.473 <c1>error<c2>: <chan> is invite only (+i)
raw.474 <c1>error<c2>:<c1> you're banned from <chan> (+b)
raw.475 <c1>error<c2>:<c1> <chan> <2>is locked (+k)
raw.478 <c1>error<c2>:<c1> <chan> <c2>banlist is full
raw.482 <c1>error: you're not an operator on<c1> <chan>
raw.other <pre> <text>

CLINEOP 9
CLINEHOP 10
CLINEVOICE 10
CLINEREGULAR 06
CLINEFRIEND 11
CLINEENEMY 04
CLINEME 14
CLINECHAROP 2@
CLINECHAROWNER 2?
CLINECHARHOP 3%
CLINECHARVOICE 3+
CLINECHARREGULAR 1

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
