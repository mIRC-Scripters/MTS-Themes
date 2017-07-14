[mts]
NAME AnovaIRC Theme
AUTHOR synthet|c
EMAIL Synthetic@linuxmail.org
DESCRIPTION Anova IRC Theme by: synthet|c converted from orignal Anova IRC Theme, by: synthet|c
WEBSITE www.team-x-core.com
MTSVERSION 1.10
VERSION 1.0
PREFIX 1:::
SCRIPT anova.mrc
Load !script basic.load
NOTICESERVER !script haltdef
TEXTCHAN 1• 7<lt>1<cmode><nick>7<gt>1 <text>
TEXTQUERY 1• 7<lt>1<cmode><nick>7<gt>1 <text>
TEXTCHANSELF 1• 7<lt>1<cmode><me>7<gt>1 <text>
TEXTQUERYSELF 1• 7<lt>1<cmode><me>7<gt>1 <text>
ACTIONCHAN 1•• 7<lt>1<cmode><nick>7<gt>1 <text>
ACTIONQUERY 1•• 7<lt>1<nick>7<gt>1 <text>
ACTIONCHANSELF 1•• 7<lt>1<cmode><me>7<gt>1 <text>
ACTIONQUERYSELF 1•• 7<lt>1<me>7<gt>1 <text>
TextMsg !pmsg! 7<lt>1<nick>7<gt>1 <text>
TextMsgSelf !msg! 7<lt>1<me>7<gt>1 <text>
CTCPSELF <pre> 7-1Ctcp7- 1<nick>7:1  <ctcp> 
CTCPREPLYSELF <pre> 7-1Ctcp7- 1<nick>7:1 <ctcp>
MODE <pre> 1<nick>7 Set Mode1 <modes>
JOIN <pre> 1<nick> 1<address>7 Joined1 <chan>
JOINSELF <pre> 1<nick> 1<address> 7Joined1 <chan>
PART <pre> 1<nick> 1<address>7 Parted1 <text>
KICK <pre> 1<nick> 7Kicked 1<knick> 1<text>
KICKSELF <pre> 1<nick> 7Kicked1 <knick> 1<text>
QUIT <pre> 1<nick> 1<address> 7<text>
TOPIC <pre> 1<nick> 7Topic 7'1<text>7'
NICK <pre> 1<nick> 7Known As1 <newnick>
MODEUSER <pre> 7Self Mode:1 <modes>
INVITE <pre> 1<me> 7Invited To:1 <chan> 7By:1 <nick>
NICKSELF <pre> 7<nick> 1Known As7 <newnick>
CTCP <pre> 1<ctcp> 7from: 1<nick>
CTCPCHAN <pre> 1<ctcp> 1<chan> <text> 7from: 1<nick>
CTCPREPLY <pre> 1<text> 7from:1 <nick>
SERVERERROR <pre> 7Server Error:1 <text>
NOTICE <pre> 7-1Notice7-1 <nick>1 <text>
NOTICECHAN <pre> 7-1Notice Chan7-1 <nick> <chan>7:1 <text>
NOTICESELF <pre> 7-1Notice7-1 <nick>7:1 <text>
NOTICESELFCHAN <pre> 7-1Notice Chan7-1 <chan>7:1 <text>
NOTIFY <pre> 1<nick>7:7 Online1 <text>
UNOTIFY <pre> 1<nick>7:7 Offline1 <text>
DNS 1Dns Started
<pre> 1unable to resolve7:1 <iaddress><naddress> 
DNSERROR 1unable to resolve7:1 <iaddress> 7-1 <naddress> 
DNSRESOLVE 1Resolved7:1 <iaddress> 7-1 <naddress> 
COLORS 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,1,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT Verdana,10
FONTCHAN Verdana,10
FONTQUERY Verdana,10
ImageSwitchbar Normal Channelbar.jpg
ImageToolbar Normal Toolbar.jpg
ImageStatus Center Status.jpg
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 7there are1 <users> 7users1 <text> 7invisible in1 <value> 7servers.
raw.252 <pre> 7operators online:1 <value> 
raw.253 <pre> 7unknown connections:1 <value>
raw.254 <pre> 7channels formed:1 <value>
raw.255 <pre> 7servers:1 <value> 7clients:1 <users>
raw.332 <pre> 7topic '1<text>7'
raw.333 <pre> 7topic set by:1 <nick> 
raw.352 <pre> 1<chan> 7~ 1<nick> 7Is1 <address> <realname>
raw.305 <pre> 7you are no longer marked as being away.
raw.306 <pre> 7you are now marked as being away.
raw.401 <pre> 1<nick> 7no such nick.
raw.403 <pre> 1<chan> 7no such chan.
raw.404 <pre> 1<chan> 7cannot send text to channel.
raw.405 <pre> 7can't join more channels1 <chan>7,7 server says you're in too many!
raw.406 <pre> 1<nick>7: there was no such nickname.
raw.421 <pre> 7unknown command /<value>
raw.432 <pre> 1<nick> 7invalid nickname, wrong characters.
raw.433 <pre> 7nickname1 <nick> 7is already in use.
raw.311 !script _wstart
raw.319 1 ::: Chan7:1 <chan>
raw.312 1 ::: Serv7:1 <wserver>  <serverinfo> 
raw.301 1 ::: Away7:1 <text>
raw.317 !script %:echo 1 ::: Idle7:1 $anova.st(%::idletime) Sign on: $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd))
raw.307 !script %:echo 1 ::: Stat7:1 is $iif(%::isregd != is,not) a registered nick.
raw.313 !script %:echo 1 ::: IRCop7:1 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),    $ifmatch  )
raw.318 !script _wend
raw.436 <pre> 7there's been a nickname collision with 1<nick>7.
raw.438 <pre> 7nick change too fast, Wait a while.
raw.439 <pre> 7nick change too fast, Wait a while.
raw.441 <pre> 1<nick>1 is not on <chan>7.
raw.442 <pre> 7you're not on 1<chan>7.
raw.443 <pre> 1<nick>7 is already on 1<chan>7.
raw.461 <pre> 7insufficient parameters 1<text>7.
raw.465 <pre> 7you are currently banned from this server!
raw.467 <pre> 7cannot join1 <chan>7 +k
raw.471 <pre> 7cannot join1 <chan>7 +l
raw.472 <pre> 1<text> 7is an unknown character.
raw.473 <pre> 7cannot join1 <chan> 7+i
raw.474 <pre> 7cannot join1 <chan> 7+b
raw.475 <pre> 7cannot join1 <chan> 7incorrect key!
raw.478 <pre> 7error banning1 <text>7.1 <chan> 7Banlist is full.
raw.482 <pre> 7you're not opped in1 <chan>.
raw.511 <pre> 7your silence list is full!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  -ERROR- <text>
PARENTEXT <text>
TIMESTAMP ON
TIMESTAMPFORMAT 07(01h:nn.ssTT07)
CLINEOP 7
CLINEHOP 7
CLINEVOICE 7
CLINEREGULAR 7
CLINEOWNER 7
CLINEENEMY 7
CLINEFRIEND 7
CLINEME 7

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR
