[mts]
NAME CoreFusion
AUTHOR N|nj1
EMAIL n/a
DESCRIPTION This is my first mts theme....
WEBSITE n/a
MTSVERSION 1.10
VERSION v1.0
SCHEME1 Light Blue
SCHEME2 Dark Blue
SCHEME3 Aqua
PREFIX 13:::
SCRIPT CoreFusion.mrc
Load !script untitled.load
NOTICESERVER !script haltdef
TEXTCHAN 13<lt>15<cmode><nick>13<gt>15 <text>
TEXTQUERY 13<lt>15<cmode><nick>13<gt>15 <text>
TEXTCHANSELF  13<lt>15<cmode><me>13<gt>15 <text>
TEXTQUERYSELF 13<lt>15<cmode><me>13<gt>15 <text>
ACTIONCHAN 15* 13<lt>15<cmode><nick>13<gt>15 <text>
ACTIONQUERY 15* 13<lt>15<nick>13<gt>15 <text>
ACTIONCHANSELF 15* 13<lt>15<cmode><me>13<gt>15 <text>
ACTIONQUERYSELF 15* 13<lt>15<me>13<gt>15 <text>
TextMsg !pmsg! 13<lt>15<nick>13<gt>15 <text>
TextMsgSelf !msg! 13<lt>15<me>13<gt>15 <text>
CTCPSELF <pre> 13-15Ctcp13-15 <nick>13:15  <ctcp> 
CTCPREPLYSELF <pre> 13-15Ctcp13-15 <nick>13:15 <ctcp>
MODE <pre> 15<nick> 13Set Mode15 <modes>
JOIN <pre> 15<nick> <address> 13Joined15 <chan>
JOINSELF <pre> 15<nick> <address> 13Joined15 <chan>
PART <pre> 15<nick> <address> 13Parted15 <text>
KICK <pre> 15<nick> 13Kicked15 <knick> <text>
KICKSELF <pre> 15<nick> 13Kicked15 <knick> <text>
QUIT <pre> 15<nick> <address> 13<text>
TOPIC <pre> 15<nick> 13Topic 13'15<text>13'
NICK <pre> 15<nick> 13Known As15 <newnick>
MODEUSER <pre> 13Self Mode: 15<modes>
INVITE <pre> 15<me> 13Invited To:15 <chan> 13By:15 <nick>
NICKSELF <pre> 15<nick> 13Known As15 <newnick>
CTCP <pre> 15<ctcp> 13from:15 <nick>
CTCPCHAN <pre> 15<ctcp> <chan> <text> 13from:15 <nick>
CTCPREPLY <pre> 15<text> 13from:15 <nick>
SERVERERROR <pre> 13Server Error:15 <text>
NOTICE <pre> 13-15Notice13-15 <nick> <text>
NOTICECHAN <pre> 13-15Notice Chan13-15 <nick> <chan>13:15 <text>
NOTICESELF <pre> 13-15Notice13-15 <nick>13:15 <text>
NOTICESELFCHAN <pre> 13-15Notice Chan13-15 <chan>13:15 <text>
NOTIFY <pre> 15<nick>13: Online15 <text>
UNOTIFY <pre> 15<nick>13: Offline15 <text>
DNS !script dns.start
DNSERROR 13│13unable to resolve:15 <iaddress> 13-15 <naddress> 
DNSRESOLVE 13│13Resolved:15 <iaddress> 13-15 <naddress> 
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 0,100,128 128,128,128 208,208,208
FONTDEFAULT bright,9
FONTCHAN bright,9
FONTQUERY bright,9
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 13there are15 <users> 13users15 <text> 13invisible in15 <value> 13servers.
raw.252 <pre> 13operators online:15 <value> 
raw.253 <pre> 13unknown connections:15 <value>
raw.254 <pre> 13channels formed:15 <value>
raw.255 <pre> 13servers:15 <value> 13clients:15 <users>
raw.332 <pre> 13topic 15'13<text>15'
raw.333 <pre> 13topic set by:15 <nick> 
raw.352 <pre> 15<chan> 13~15 <nick> 13Is15 <address> <realname>
raw.305 <pre> 13you are no longer marked as being away.
raw.306 <pre> 13you are now marked as being away.
raw.401 <pre> 15<nick>13 no such nick.
raw.403 <pre> 15<chan> 13no such chan.
raw.404 <pre> 15<chan> 13cannot send text to channel.
raw.405 <pre> 13can't join more channels15 <chan>13, server says you're in too many!
raw.406 <pre> 15<nick>13: there was no such nickname.
raw.421 <pre> 13unknown command 15/<value>
raw.432 <pre> 15<nick> 13invalid nickname, wrong characters.
raw.433 <pre> 13nickname15 <nick> 13is already in use.
raw.311 !script _wstart_
raw.319 13│15Chan13│15 <chan>
raw.312 13│15Serv13│15 <wserver>  <serverinfo> 
raw.301 13│15Away13│15 <text>
raw.317 !script %:echo 13│15Idle13│15 $basic.st(%::idletime) Sign on : $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd))
raw.307 !script %:echo 13│15Stat13│15 is $iif(%::isregd != is,not) a registered nick.
raw.313 !script %:echo 13│15Type13│15 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),    $ifmatch  )
raw.318 !script _wend_

raw.436 <pre> 13there's been a nickname collision with 15<nick>13.
raw.438 <pre> 13nick change too fast, Wait a while.
raw.439 <pre> 13nick change too fast, Wait a while.
raw.441 <pre> 15<nick>13 is not on 15<chan>13.
raw.442 <pre> 13you're not on 15<chan>13.
raw.443 <pre> 15<nick> 13is already on 15<chan>13.
raw.461 <pre> 13insufficient parameters15 <text>13.
raw.465 <pre> 13you are currently banned from this server!
raw.467 <pre> 13cannot join15 <chan> 13+k
raw.471 <pre> 13cannot join15 <chan> 13+l
raw.472 <pre> 15<text> 13is an unknown character.
raw.473 <pre> 13cannot join 15<chan> 13+i
raw.474 <pre> 13cannot join 15<chan> 13+b
raw.475 <pre> 13cannot join 15<chan> 13incorrect key!
raw.478 <pre> 13error banning 15<text>13.15 <chan> 13Banlist is full.
raw.482 <pre> 13you're not opped in15 <chan>13.
raw.511 <pre> 13your silence list is full!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  -ERROR- <text>
PARENTEXT <text>
TIMESTAMP ON
TIMESTAMPFORMAT 13(15h:nn.ssTT13)
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

[scheme1]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 0,186,240 128,128,128 208,208,208

[scheme2]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 34,94,208 128,128,128 208,208,208

[scheme3]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 7,99,143 128,128,128 208,208,208
