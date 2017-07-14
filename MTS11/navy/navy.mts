[mts]
NAME Navy
AUTHOR Eric^^
EMAIL eric@eircweb.com
DESCRIPTION A navy theme designed to resemble eirc's website.
SCRIPT navy.mrc
WEBSITE http://eircweb.com
MTSVERSION 1.1
VERSION 1.2
PREFIX •
PARENTEXT 01[02<text>01]
TIMESTAMP OFF
CTCPSELF 2[1CTCP2]1 <nick>:2 <ctcp> <text>
CTCPCHANSELF 2[1CTCP2]1 <chan>:2 <ctcp> <text>
CTCPREPLYSELF 2[1CTCPREPLY2]1 <nick>:2 <ctcp> <text>
MODE 02<pre>1 <nick> sets mode to:2 <modes>
JOIN 02<pre>1 <nick> has joined <chan> [02<address>1]
JOINSELF 02<pre>1 Entering <chan>...
PART 02<pre>1 <nick> has left <chan> [02<address>1]
TEXTCHAN 01(02<cmode>01<nick>)2 <text>
TEXTQUERY 01(<nick>)2 <text>
KICK 02<pre>1 <knick> has been kicked by <nick>:2 <text>
KICKSELF 02<pre>1 You we're kicked by <nick>:2 <text>
QUIT 02<pre>1 <nick> has left irc [02<address>1] <parentext>
TOPIC 03<pre>1 <nick> sets topic to:2 <text>
NICK 03<pre>1 <nick> is now known as <newnick>
TEXTCHANSELF 01(02<cmode>01<me>)2 <text>
TEXTQUERYSELF 01(02<cmode>01<me>)2 <text>
MODEUSER 2<pre>1 Mode:2 <modes>
INVITE 2<pre>1 You were invited to join <chan> by <nick>
NICKSELF 2<pre>1 You are now known as <newnick>
ACTIONCHAN 2<pre> <cmode>01<nick>2 <text>
ACTIONQUERY 2<pre>1 <nick>2 <text>
ACTIONCHANSELF 2<pre> <cmode>01<me>2 <text>
ACTIONQUERYSELF 2<pre>1 <me>2 <text>
CTCP 2<pre>1 [<nick>:02<ctcp> <parentext>1]
CTCPCHAN 2<pre>1 [<nick>:<chan>:02<ctcp> <parentext>1]
CTCPREPLY 2<pre>1 <nick>'s <ctcp> reply:2 <text>
SERVERERROR 2<pre>1 Error:2 <text>
NOTICESERVER 1-<nick>-2 <text>
NOTICE 1-<nick>-2 <text>
NOTICECHAN 1-<nick>:<chan>-2 <text>
NOTICESELF 1-> -<nick>-2 <text>
NOTICESELFCHAN 1-> -<nick>:<chan>-2 <text>
NOTIFY 2<pre>1 <nick> is online <parentext>
UNOTIFY 2<pre>1 <nick> is offline <parentext>
DNS 2<pre>1 Looking up <address>...
DNSERROR 2<pre>1 Unable to resolve <iaddress><naddress>
DNSRESOLVE 2<pre>1 Resolved <naddress> (02<iaddress>01) to <raddress>
COLORS 0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,2
BASECOLORS 02,12,11,01
RGBCOLORS 255,255,255 0,0,0 80,95,135 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,175,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT verdana,11
FONTCHAN verdana,11
FONTQUERY verdana,11
raw.341 <pre> <nick> has been invited to <chan>
raw.311 !script default.whoisinit %::nick %::address %::realname
raw.319 2<pre> 01Channels:2 <chan>
raw.312 2<pre> 01Server:2 <wserver>
raw.301 2<pre> 01Away:2 <text>
raw.317 !script default.whoisidle %::idletime %::signontime
raw.318 !script default.whoisend
raw.314 2<pre>1 <nick> was <realname> (02<address>1)
raw.251 !script default.lusersinit %::users %::text %::value
raw.252 2<pre> 01Operators online:2 <value> 
raw.253 2<pre> 01Unknown connections:2 <value>
raw.254 2<pre> 01Channels formed:2 <value>
raw.255 !script default.lusersend %::users %::value
raw.332 2<pre>1 Topic:02 <text>
raw.333 2<pre>1 Topic set by2 <nick> 1on2 <text>
raw.324 2<pre>1 Modes:02 <modes>
raw.352 2<pre>1 <chan> <nick> is <realname> (02<address>1)
raw.329 2<pre>1 Created:2 <text>
raw.305 2<pre>1 You're now marked as back.
raw.306 2<pre>1 You're now marked as away.
raw.401 2<pre>1 No such nickname:2 <nick>
raw.403 2<pre>1 No such channel:2 <chan>
raw.404 2<pre>1 Cannot send text/data to:2 <chan>
raw.405 2<pre>1 Cannot join <chan>. You're on too many channels.
raw.406 2<pre>1 Whowas on <nick> - There was no such nick
raw.421 2<pre>1 No such command:2 /<value>
raw.432 2<pre>1 Invalid nickname:2 <nick>
raw.433 2<pre>1 Nickname already in use:2 <nick>
raw.436 2<pre>1 Nickname collision with:2 <nick>
raw.438 2<pre>1 Nickname changed too fast, please wait a while and try again...
raw.439 2<pre>1 Target changed too fast, please wait a while and try again...
raw.441 2<pre>1 <nick> is not on <chan>
raw.442 2<pre>1 You're not on <chan>
raw.443 2<pre>1 <nick> is already on <chan>
raw.461 2<pre>1 More parameters needed for:2 <text>
raw.465 2<pre>1 Sorry, You're banned from this server.
raw.467 2<pre>1 Cannot join <chan>:2 It's keyed (+k)
raw.471 2<pre>1 Cannot join <chan>:2 It's full (+l)
raw.472 2<pre>1 Unknown character:2 <text>
raw.473 2<pre>1 Cannot join <chan>:2 It's invite only (+i)
raw.474 2<pre>1 Cannot join <chan>:2 You're banned (+b)
raw.475 2<pre>1 Cannot join <chan>:2 Incorrect key
raw.478 2<pre>1 Cannot ban <text>. <chan> banlist is full.
raw.482 2<pre>1 You're not a channel operator on <chan>
raw.511 2<pre>1 You're /silence list is full.
CLINEOP 01
CLINEHOP 01
CLINEVOICE 01
CLINEREGULAR 01
CLINEOWNER 01
CLINEENEMY 07
CLINEFRIEND 02
CLINEME 02
CLineCharOwner 02.
CLineCharOP 02@
CLineCharHOP 02%
CLineCharVoice 02+
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
scheme1 Bluer

[scheme1]
colors 11,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,11,1,2
