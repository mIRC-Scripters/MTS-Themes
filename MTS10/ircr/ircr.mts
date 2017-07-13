[mts]
NAME IRCR
AUTHOR [Raul]
EMAIL raul@molomucho.mailbox.as
DESCRIPTION Default IRCR theme.
SCRIPT IRCR.mrc
WEBSITE -
MTSVERSION 1.0
VERSION 1.0
PREFIX »»»
scheme1 Timestamp
scheme2 Tahoma
PARENTEXT «<text>»
TIMESTAMP OFF
LOAD !script _onload
CTCPSELF [04CTCP [<ctcp>04]] to 02 04<nick>
CTCPREPLYSELF [04CTCPREPLY [<ctcp>04]] to <nick>
MODE 03<pre> <nick>  set mode in <chan>: <modes>
JOIN 03<pre> <nick> (<address>) join to <chan>
JOINSELF 03<pre> Joining <chan>
PART 10<pre> 10<nick> (<address>) part from <chan> <parentext>
TEXTCHAN  10«2<cmode>02<nick>10» <text>
TEXTQUERY 10«02<nick>10» <text>
KICK 04<pre> <nick>04 kick off <knick> of <chan>  ( 04 <text> 04 )
KICKSELF KICK 04<pre> <nick>04 kicked you off <chan>  ( 04 <text> 04 )
QUIT 02 <pre> 02 <nick> (<address>) disconnect <parentext>
TOPIC 14<pre> <nick>14 change the topic of <chan> to: 14[<text>14]
NICK 06<pre> <nick> has a new nick (<newnick>06)
TEXTCHANSELF 04«2<cmode>02<nick>04» <text>
TEXTQUERYSELF  04«02<nick>04» <text>
MODEUSER 02<pre> New usermode (<modes>02)
INVITE 14 <nick> invite you to <chan>
NICKSELF 06<pre> <nick> has a new nick (<newnick>)
ACTIONCHAN 06* <cmode><nick> <text>
ACTIONQUERY 06* <nick> <text>
ACTIONCHANSELF 06* <cmode><me> <text>
ACTIONQUERYSELF 06* <me> <text>
CTCP 04CTCP[<ctcp>] <text> from  <nick>
CTCPCHAN 04CTCP[<ctcp>] <text> from <nick>04 to <chan>
CTCPREPLY 04CTCPREPLY[<ctcp>] from <nick>04:  <text> 
SERVERERROR 02<pre> STOP <parentext>
NOTICESERVER 02<pre> SNOTICE: <text>
NOTICE 14<pre> NOTICE from <nick> ( <text> )
NOTICECHAN 14<pre> NOTICE from [14<nick>:<chan>]14 (<text>)
NOTICESELF 14<pre> <nick>: <text>
NOTICESELFCHAN 14<pre> <chan>: <text>
NOTIFY 02<pre> <nick>02 is now online 
UNOTIFY 02<pre> <nick>02 is now offline 
DNS  10<pre> 02 dns <address> 10«««
DNSERROR 10<pre> 02 Unable to resolve [02<iaddress><naddress>]
DNSRESOLVE 10<pre> 02Resolved <naddress> [02<iaddress>]2 to <raddress>
COLORS 0,6,4,5,2,3,3,3,2,2,3,1,5,7,12,1,3,2,2,5,1,0,1,0,1,7
BASECOLORS 2,3,4,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT MS Sans Serif,8
FONTCHAN MS Sans Serif,8
FONTQUERY MS Sans Serif,8
raw.311 !script _whois.start %::nick %::address %::realname
raw.319 02Channels:10 <chan>
raw.312 02Server:10 «02<wserver>10»10 <serverinfo>
raw.301 02 <nick> is Away:10 " <text>
raw.317 !script _whois.idle %::nick %::idletime %::signontime
raw.318 10 <pre> 02End of Whois 10 ««« 
raw.314 02 <nick> 10«2<address>10» 02<realname>
raw.251 02There are 01 <users>02 users 01 <text> 02invisible in 01<value> 02servers
raw.252 02IRCOPS online 01<value> 
raw.253 02Unknown connections 01<value>
raw.254 02Total Channels  01<value>
raw.255 02Servers 01<value> 02Clients 05<users>
raw.332 <pre> 03<chan> topic: <text>
raw.333 <pre> 03<chan> topic: set by <nick> on <text>
raw.324 <pre> 03<chan> modes: <modes>
raw.352 <pre> 02<chan> <nick> 02is 10(<address>) "<realname>
raw.329 03<pre> Created on02 <text>
raw.305 02<pre> Away off
raw.306 02<pre> Away on
raw.401 02<pre> <nick> no such nick
raw.403 02<pre> <chan> no such chan
raw.404 02<pre> <chan> cannot send text
raw.405 02<pre> Can't join  <chan>, server says you're in too many channels!
raw.406 02<pre> <nick> No such nick
raw.421 02<pre> Unknown command /<value>
raw.432 02<pre> <nick> Invalid characters in nickname
raw.433 02<pre> Stop <nick> is already in use
raw.436 02<pre> nick collision with <nick>
raw.438 02<pre> Nick change too fast, wait a moment
raw.439 02<pre> Nick change too fast, whait a moment 
raw.441 02<pre> <nick> is not on <chan>
raw.442 02<pre> You're not on <chan>
raw.443 02<pre> <nick> is already on <chan>
raw.461 02<pre> Insufficient parameters 02<text>
raw.465 04<pre> You're banned from this server!
raw.467 02<pre> Cannot join <chan> (+k)
raw.471 02<pre> Cannot join <chan> (+l)
raw.472 02<pre> <text> is an unknown character
raw.473 02<pre> Cannot join <chan> (+i)
raw.474 02<pre> Cannot join <chan> (+b)
raw.475 02<pre> Cannot join <chan> incorrect key!
raw.478 02<pre> STOP 05<chan>02 banlist is full.«02<text>10»
raw.482 02<pre> You're not a operator in <chan>
raw.511 02<pre> Your silence list is full!
CLINEOP 12
CLINEHOP 4
CLINEVOICE 10
CLINEREGULAR 01
CLINEOWMER 01
CLINEENEMY 06
CLINEFRIEND 03
CLINEME 014
CLineCharOwner 06-
CLineCharOP 04@
CLineCharHOP 04%
CLineCharVoice 05+
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
[scheme1]
TIMESTAMP on
TIMESTAMPFORMAT 02[hh:nn02]
[scheme2]
TIMESTAMP on
TIMESTAMPFORMAT 02[hh:nn02]
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11
