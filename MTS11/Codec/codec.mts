[mts]
NAME Codec Theme
AUTHOR synthet|c
EMAIL Synthetic@team-x-core.com
DESCRIPTION My Newest Theme, Codec.
WEBSITE www.ircfreaks.org
MTSVERSION 1.10
VERSION v1.0
PREFIX 15->
SCRIPT codec.mrc
Load !script codec.theme.load
TEXTCHAN <pre> 1<cmode>15<nick> 1<gt>1 <text>
TEXTQUERY <pre> 1<cmode>15<nick> 1<gt>1 <text>
TEXTCHANSELF <pre> 1<cmode>15<nick> 1<gt>1 <text>
TEXTQUERYSELF <pre> 1<cmode>15<nick> 1<gt>1 <text>
ACTIONCHAN 1* 1<cmode>15<nick> 1<gt>1 <text>
ACTIONQUERY 1* 15<nick> 1<gt> 1<text>
ACTIONCHANSELF 1* 1<cmode>15<me> 1<gt>1 <text>
ACTIONQUERYSELF 1* 15<me> 1<gt>1 <text>
TextMsg <pre> 15<nick> 1<gt>1 <text>
TextMsgSelf <pre> 15<me> 1<gt>1 <text>
CTCPSELF <pre> 1(15CTCP1) 15<nick> 1>1 <ctcp> 
CTCPREPLYSELF <pre> 1(15CTCP1) 15<nick> 1>1 <ctcp> 
MODE <pre> 15<nick> 1Set Mode 15<modes>
JOIN <pre> 15<nick> <address> 1Joined15 <chan>
JOINSELF <pre> 15<nick> <address> 1Joined15 <chan>
PART <pre> 15<nick> <address> 1Parted15 <text>
KICK <pre> 15<nick> 11Kicked15 <knick> <text>
KICKSELF <pre> 15<nick> 1Kicked15 <knick> <text>
QUIT <pre> 15<nick> <address> 1<text>
TOPIC <pre> 15<nick> 1Topic 1'15<text>1'
NICK <pre> 15<nick> 1Known As15 <newnick>
MODEUSER <pre> 1Self Mode 1> 15<modes>
INVITE <pre> 15<me> 1Invited To 15<chan> 1By >15 <nick>
NICKSELF <pre> 15<nick> 1Known As15 <newnick>
CTCP <pre> 15<ctcp> 1From >15 <nick>
CTCPCHAN <pre> 15<chan> 1 > 15<ctcp><text> 1From > 15<nick>
CTCPREPLY <pre> 15<text> 1From1 >15 <nick>
SERVERERROR <pre> 1Server Error > 15<text>
NOTICE <pre> 1Notice >15 <nick> 1->15 <text>
NOTICECHAN <pre> 1Notice > 15<nick> 15<chan> 1->15 <text>
NOTICESELF <pre> 1Notice > 15<nick> 1->15 <text>
NOTICESELFCHAN <pre> 1Notice > 15<chan> 1->15 <text>
NOTIFY <pre> 15<nick> 1Online15 <text>
UNOTIFY <pre> 15<nick> 1Offline15 <text>
DNS 1Dns On 15<nick>
DNSERROR 1Unable To Resolve 15<iaddress> 1-15 <naddress>
DNSRESOLVE 1Resolved 15<iaddress> 1-15 <naddress>
COLORS 6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,6,1,1,6
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 53,102,150 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 0,100,128 128,128,128 208,208,208
FONTDEFAULT bright,9
FONTCHAN bright,9
FONTQUERY bright,9
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 1There are15 <users> 1users15 <text> 1invisible in15 <value> 1servers.
raw.252 <pre> 1Operators online15 <value>
raw.253 <pre> 1Unknown connections15 <value>
raw.254 <pre> 1Channels formed15 <value>
raw.255 <pre> 1Servers15 <value> 1Clients15 <users>1.
raw.332 <pre> 1Topic > 1'15<text>1'
raw.333 <pre> 1Topic set by15 <nick> 
raw.352 <pre> 15<chan> 1~15 <nick> 1Is15 <address> <realname>1.
raw.305 <pre> 1You are no longer marked as being away.
raw.306 <pre> 1You are now marked as being away.
raw.401 <pre> 15<nick> 1no such nick.
raw.403 <pre> 15<chan> 1no such chan.
raw.404 <pre> 15<chan> 1cannot send text to channel.
raw.405 <pre> 1Can't join more channels15 <chan> 1server says you're in too many!
raw.406 <pre> 15<nick> 1there was no such nickname.
raw.421 <pre> 1unknown command 15/<value>
raw.432 <pre> 15<nick>1 invalid nickname, wrong characters.
raw.433 <pre> 1Nickname 15<nick> 1is already in use.
raw.311 !script codec.whois.start
raw.319 -> │Chan:15 <chan>
raw.312 -> │Serv:15 <wserver>  <serverinfo> 
raw.301 -> │Away:15 <text>
raw.317 !script %:echo -> │Idle:15 $codec.st(%::idletime) Sign on : $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd))
raw.307 !script %:echo  -> │Stat:15 is $iif(%::isregd != is,not) a registered nick.
raw.313 !script %:echo -> │Type:15 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),    $ifmatch  )
raw.318 !script codec.whois.end
raw.436 <pre> 1There's been a nickname collision with15 <nick>1.
raw.438 <pre> 1Nick change too fast, Wait a while.
raw.439 <pre> 1Nick change too fast, Wait a while.
raw.441 <pre> 15<nick> 1is not on15 <chan>
raw.442 <pre> 1You're not on 15<chan>1.
raw.443 <pre> 15<nick> 1is already on15 <chan>1.
raw.461 <pre> 1Insufficient parameters 15<text>.
raw.465 <pre> 1You are currently banned from this server!
raw.467 <pre> 1Cannot join15 <chan>1 +k
raw.471 <pre> 1Cannot join15 <chan>1 +l
raw.472 <pre> 15<text>1 is an unknown character.
raw.473 <pre> 1Cannot join15 <chan>1 +i
raw.474 <pre> 1Cannot join15 <chan>1 +b
raw.475 <pre> 1Cannot join15 <chan>1 incorrect key!
raw.478 <pre> 1Error banning15 <text>1.15 <chan>1 Banlist is full.
raw.482 <pre> 1You're not opped in15 <chan>
raw.511 <pre> 1Your silence list is full!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  (ERROR) <text>
PARENTEXT <text>
TIMESTAMP ON
TIMESTAMPFORMAT 1(15h:nn.ssTT1)
CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 1
CLINEOWNER 1
CLINEENEMY 1
CLINEFRIEND 1
CLINEME 1

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

[SCHEME1]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
