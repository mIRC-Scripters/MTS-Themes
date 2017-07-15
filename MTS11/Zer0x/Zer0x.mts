<lt><cmode><me><gt> <text> 
[mts]
NAME Zer0x
AUTHOR Synthet|c
EMAIL Synthetic@linuxmail.org
DESCRIPTION Zer0x Theme.
WEBSITE www.none.com
MTSVERSION 1.10
SCHEME1 Matrix
SCHEME2 bata-x
SCHEME3 Oranged
VERSION 2.11
PREFIX 13•5•
SCRIPT zero.mrc
Load !script zero.load
NOTICESERVER !script haltdef
TEXTCHAN 2<lt>13<cmode>12<nick>2<gt>5 <text>
TEXTQUERY 2<lt>13<cmode>12<nick>2<gt>5 <text>
TEXTCHANSELF  2<lt>13<cmode>12<me>2<gt>5 <text>
TEXTQUERYSELF 2<lt>13<cmode>12<me>2<gt>5 <text>
ACTIONCHAN 13* 2<lt>13<cmode>12<nick>2<gt>5 <text>
ACTIONQUERY 13* 2<lt>12<nick>2<gt>5 <text>
ACTIONCHANSELF 13* 2<lt>13<cmode>12<me>2<gt>5 <text>
ACTIONQUERYSELF 13* 2<lt>12<me>2<gt>5 <text>
TextMsg 13!pmsg! 2<lt>12<nick>2<gt>5 <text>
TextMsgSelf 13!msg! 2<lt>12<me>2<gt>5 <text>
CTCPSELF <pre> 2[12<ctcp>2] 5-> 2[12<nick>2]
CTCPREPLYSELF <pre> 2-15ctcpreply2-2[12<ctcp>2] 5-> 2[12<nick>2]
MODE <pre> 2[12<nick>2]5 Set Mode 2[12<modes>2]
JOIN <pre> 2[12<nick>2[13<address>2]]5 Joined 2[12<chan>2]
JOINSELF <pre> 2[12<nick>2[13<address>2]]5 Joined 2[12<chan>2]
PART <pre> 2[12<nick>2[13<address>2]]5 Parted 2[12reason5:13<text>2]
KICK <pre> 2[12<nick>2]5 Kicked 2[12<knick>2[13<text>2]]
KICKSELF <pre> 2[12<nick>2]5 Kicked 2[12<knick>2[13<text>2]]
QUIT <pre> 2[12<nick>2[13<address>2]] 2[12<text>2]
TOPIC <pre> 2[12<nick>2]5 Topic 2'13<text>2'
NICK <pre> 2[12<nick>2]5 Known As 2[12<newnick>2]
MODEUSER <pre> 2-12Usermode2- 2[12<modes>2]
INVITE <pre> 2[12<nick>]5 Invited 2[12<me>2]5 to 2[13<chan>2]
NICKSELF <pre> 2[12<nick>2]5 Known As 2[12<newnick>2]
CTCP <pre> 2-12ctcp2-2[12<ctcp> 5<text>2]5 from13: 2[12<nick>2]
CTCPCHAN <pre> 2-12ctcp2-2[21<ctcp>13:12<chan>13:5 <text>2]5 from13: 2[12<nick>2]
CTCPREPLY <pre> 2-12ctcp2-2[12<text>2]5 from13: 2[12<nick>2]
SERVERERROR <pre> 2-12error2- 2[12<text>2]
NOTICE <pre> 2-2[12<nick>2]2-5 <text>
NOTICECHAN <pre> 2-2[12<nick>13:12<chan>2]2-5 <text>
NOTICESELF <pre> 13->5 <nick>13:5 <text>
NOTICESELFCHAN <pre> 13->5 <chan>13:5 <text>
NOTIFY <pre> 12<nick>13:5 Online 2[12<text>2]
UNOTIFY <pre> 12<nick>13:5 Offline 212[<text>2]
DNS <pre> 2[12dns13: 2[12<address>2] 2]
DNSERROR <pre> 2[5unable to resolve13: 2[12<iaddress>13<naddress>2] ]
DNSRESOLVE <pre> 2[12resolved13: 2[12<naddress> 5- 13<iaddress>2] 2[12<raddress>2]2 ]
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0
RGBColors 255,255,255 0,0,0 0,0,125 0,144,0 255,0,0 3,63,152 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 18,99,242 128,128,128 192,192,192 
FONTDEFAULT tahoma,10
FONTCHAN tahoma,10
FONTQUERY tahoma,10
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 5there are 13<users> 2users 4+ 13<text>5 invisible in 13<value>5 servers
raw.252 <pre> 5operators online:5 <value> 
raw.253 <pre> 5unknown connections13:5 <value>
raw.254 <pre> 5channels formed13:5 <value>
raw.255 <pre> 5servers13 <value> 5clients13 <users>
raw.332 <pre> 5topic 2'12<text>2'
raw.333 <pre> 5topic set by13:12 <nick> 
raw.352 <pre> 12<chan> 13~12 <nick>5 Is12 <address> 2[12<realname>2]
raw.305 <pre> 5you are no longer marked as being away13.
raw.306 <pre> 5you are now marked as being away13.
raw.401 <pre> 2[12<nick>2]5 no such nick
raw.403 <pre> 2[12<chan>2]5 no such chan
raw.404 <pre> 13<chan>5 cannot send text to channel
raw.405 <pre> 5can't join more channels 2[12<chan>2]13,5 server says you're in too many13!
raw.406 <pre> 2[12<nick>2]13:5 there was no such nickname
raw.421 <pre> 5unknown command 2/13<value>
raw.432 <pre> 2[12<nick>2]5 invalid nickname13,5 wrong characters13.
raw.433 <pre> 5nickname 2[12<nick>2]5 is already in use13.
raw.311 !script zero.whoisstart
raw.319          12Channels13:12 <chan>
raw.312          12Server 13:12 <wserver> 2[12 <serverinfo> 12]
raw.301          12Away 13:12 <text>
raw.317 !script %:echo $str($chr(160),7) 12Idle 13:12 $zero.st(%::idletime) 2[ 12Sign on 13:12 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 13· 12Online time13 :12 $zero.st($calc($ctime - $ctime(%::signontime))) 2]
raw.307 !script %:echo        12Status13 :12 is $iif(%::isregd != is,not) a registered nick13.
raw.378          12Real Hostname13 :12 <text>
raw.313 !script %:echo          12IRCop 13:12 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),   2[12 $ifmatch  2])
raw.318  2[12 End 2] 5————12———13———2—————12—————5————13———

raw.314 !script zero.whowasstart
raw.369  2[12 End 2] ——5————13————2————12————13————2————5—
raw.436 <pre> 5there13'5s been a nickname collision with 2[12<nick>2]
raw.438 <pre> 5nick change too fast13,5 Wait a while
raw.439 <pre> 5nick change too fast13,5 Wait a while
raw.441 <pre> 2[12<nick>2]5 is not on 2[12<chan>2]
raw.442 <pre> 5you13'5re not on 2[12<chan>2]
raw.443 <pre> 2[12<nick>2]5 is already on 2[12<chan>2]
raw.461 <pre> 5insufficient parameters 2[12<text>2]
raw.465 <pre> 5you are currently banned from this server13!
raw.467 <pre> 5cannot join 2[12<chan>2] 2[12+k2]
raw.471 <pre> 5cannot join 2[12<chan>2] 2[12+l2]
raw.472 <pre> 2[12<text>2]5 is an unknown character13.
raw.473 <pre> 5cannot join 2[12<chan>2] 2[12+i2]
raw.474 <pre> 5cannot join 2[12<chan>2] 2[12+b2]
raw.475 <pre> 5cannot join 2[12<chan>2] 5incorrect key13!
raw.478 <pre> 5error banning 2[12<text>2]13. 2[12<chan>2] 5Banlist is full13.
raw.482 <pre> 5you13'5re not opped in 2[12<chan>2]
raw.511 <pre> 5your silence list is full13!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  -ERROR- <text>
PARENTEXT [<text>]
TIMESTAMP ON
TIMESTAMPFORMAT 2< 12h:nnt2 >
CLINEOP 5
CLINEHOP 5
CLINEVOICE 13
CLINEREGULAR 1
CLINEOWNER 5
CLINEENEMY 2
CLINEFRIEND 12
CLINEME 13

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

[scheme1]
PREFIX 9†
Load !script trix.load
NOTICESERVER !script haltdef
CTCPSELF <pre> 7[9<ctcp>7] 3-13> 7[9<nick>7]
CTCPREPLYSELF <pre> 7-9ctcpreply7-7[9<ctcp>7] 3-13> 7[9<nick>3]
MODE <pre> 7[9<nick>7] 3set mode 7[9<modes>7]
JOIN <pre> 7[9<nick>7[13<address>7]] 3joined 7[9<chan>7]
JOINSELF <pre> 3[9<nick>3[13<address>3]] 7joined 3[9<chan>3]
PART <pre> 7[9<nick>7[13<address>7]] 3parted 7[9reason3:13<text>7]
TextMsg 9!pmsg!  7<lt>9<nick>7<gt>9 <text>
TextMsgSelf 9!msg! 7<lt>9<me>7<gt>9 <text>
TEXTCHAN 7<lt>13<cmode>9<nick>7<gt>9 <text> 
TEXTQUERY 7<lt>13<cmode>9<nick>7<gt>9 <text> 
KICK <pre> 7[9<nick>7] 3kicked 7[9<knick>7[13<text>7]]
KICKSELF <pre> 7[9<nick>7] 3kicked 7[9<knick>7[13<text>7]]
QUIT <pre> 7[9<nick>7[13<address>7]] 7[9<text>7]
TOPIC <pre> 7[9<nick>7] 3topic 7'13<text>7'
NICK <pre> 7[9<nick>7] 3known as 7[9<newnick>7]
TEXTCHANSELF  7<lt>13<cmode>9<me>7<gt>9 <text> 
TEXTQUERYSELF 7<lt>13<cmode>9<me>7<gt>9 <text> 
MODEUSER <pre> 7-9usermode7- 7[9<modes>7]
INVITE <pre> 7[9<nick>7] 3invited 7[9<me>7] 9to 7[9<chan>9]
NICKSELF <pre> 7[9<nick>7] 3known as 7[9<newnick>7]
ACTIONCHAN 3* 7<lt>13<cmode>9<nick>7<gt>9 <text> 
ACTIONQUERY 3* 7<lt>13<cmode>9<nick>7<gt>9 <text> 
ACTIONCHANSELF 3* 7<lt>13<cmode>9<me>7<gt>9 <text> 
ACTIONQUERYSELF 3* 7<lt>13<cmode>9<me>7<gt>9 <text> 
CTCP <pre> 7-9ctcp7- 7[9<ctcp> 13<text>7] 3from13: 7[9<nick>7]
CTCPCHAN <pre> 7-9ctcp7- 7[9<ctcp>13:7<chan>13:9<text>7] 3from13: 7[9<nick>7]
CTCPREPLY <pre> 7-9ctcp7- 7[9<text>7] 3from13: 7[9<nick>7]
SERVERERROR <pre> 7-9error7- 7[9<text>7]
NOTICE <pre> 7-7[9<nick>7]7-13 <text>
NOTICECHAN <pre> 7-7[9<nick>13:9<chan>7]7-13 <text>
NOTICESELF <pre> 3-13> 9<nick>13:9<text>
NOTICESELFCHAN <pre> 3-13> 9<chan>13:9<text>
NOTIFY <pre> 9<nick>13: 3online13: 7[9<text>7]
UNOTIFY <pre> 9<nick>13: 3offline13: 7[9<text>7]
DNS <pre> 7[9dns13: 7[9<address>7] 7]
DNSERROR <pre> 7[9unable to resolve13: 7[9<iaddress><naddress>7] 7]
DNSRESOLVE <pre> 7[9resolved13: 7[9<naddress> 13-9 <iaddress>7] 7[9 <raddress> 7] 7]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBColors 255,255,255 0,0,0  0,0,125 0,144,0 255,0,0 3,63,152 160,0,160 49,169,6 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 47,217,43 128,128,128 192,192,192 
FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 3there are 9<users> 3users 4+ 9<text> 3invisible in 9<value> 7servers
raw.252 <pre> 3operators online13:9 <value> 
raw.253 <pre> 3unknown connections13:9 <value>
raw.254 <pre> 3channels formed13:9 <value>
raw.255 <pre> 3servers 9<value>3 clients 9<users>
raw.332 <pre> 3topic 7'9<text>7'
raw.333 <pre> 7topic set by13:9 <nick> 
raw.352 <pre> 9<chan> 13~ 9<nick> 3Is 9<address> 7[9<realname>7]
raw.305 <pre> 3you are no longer marked as being away13.
raw.306 <pre> 3you are now marked as being away13.
raw.401 <pre> 7[9<nick>7]3 no such nick
raw.403 <pre> 7[9<chan>7]3 no such chan
raw.404 <pre> 9<chan>3 cannot send text to channel
raw.405 <pre> 3can't join more channels 7[9<chan>7]13,3 server says you're in too many!
raw.406 <pre> 7[9<nick>7]13:3 there was no such nickname
raw.421 <pre> 3unknown command 13/<value>
raw.432 <pre> 7[9<nick>7]3 invalid nickname, wrong characters13.
raw.433 <pre> 3nickname 7[9<nick>7]3 is already in use.
raw.311 !script trix.whoisstart
raw.319          9Channels 13:9 <chan>
raw.312          9Server 13:9 <wserver> 7[9 <serverinfo> 7]
raw.301          9Away 13:9 <text>
raw.317 !script %:echo $str($chr(160),7)  9Idle 13:9 $trix.st(%::idletime) 7[9 Sign on 13:9 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 7 ]
raw.307 !script %:echo          9Status 13: 9is $iif(%::isregd != is,not) a registered nick13.
raw.378           9Real Hostname 13:9 <text>
raw.313 !script %:echo           9IRCop 13:9 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),   7[9 $ifmatch  7])
raw.318 7[9 End of Whois 7]3 ——————7————13—————3————9————13———7——
raw.436 <pre> 3there's been a nickname collision with 7[9<nick>7]
raw.438 <pre> 3nick change too fast, Wait a while
raw.439 <pre> 3nick change too fast, Wait a while
raw.441 <pre> 7[9<nick>7]3 is not on 7[9<chan>7]
raw.442 <pre> 3you're not on 7[9<chan>7]
raw.443 <pre> 7[9<nick>7]3 is already on 7[9<chan>7]
raw.461 <pre> 3insufficient parameters 7[9<text>7]
raw.465 <pre> 3you are currently banned from this server!
raw.467 <pre> 3cannot join 7[9<chan>7] 7[9+k7]
raw.471 <pre> 3cannot join 7[9<chan>7] 7[9+l7]
raw.472 <pre> 7[9<text>7]3 is an unknown character.
raw.473 <pre> 3cannot join7 [9<chan>7] 7[9+i7]
raw.474 <pre> 3cannot join7 [9<chan>7] 7[9+b7]
raw.475 <pre> 3cannot join7 [9<chan>7] 3incorrect key!
raw.478 <pre> 3error banning 7[9<text>7] 7[9<chan>7]3 Banlist is full13.
raw.482 <pre> 3you're not opped in 7[9<chan>7]
raw.511 <pre> 3your silence list is full!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  -ERROR- <text>
PARENTEXT 7[9<text>7]
TIMESTAMP ON
TIMESTAMPFORMAT 3<9 h:nnt 3>
CLINEOP 7
CLINEHOP 7
CLINEVOICE 13
CLINEREGULAR 0
CLINEOWNER 7
CLINEENEMY 3
CLINEFRIEND 9
CLINEME 13

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

[scheme2]
PREFIX 8¡
Load !script bata.load
NOTICESERVER !script haltdef
CTCPSELF <pre> 8[15<ctcp>8] 15-13> 8[15<nick>8]
CTCPREPLYSELF <pre> 8-15ctcpreply8-8[15<ctcp>8] 15-13> 8[15<nick>8]
MODE <pre> 8[15<nick>8] 15set mode 8[15<modes>8]
JOIN <pre> 8[15<nick>8[15<address>8]] 15joined 8[15<chan>8]
JOINSELF <pre> 8[15<nick>8[15<address>8]] 15joined 8[15<chan>8]
PART <pre> 8[15<nick>8[15<address>8]] 15parted 8[15reason14:13<text>8]
TEXTCHAN 8<lt>13<cmode>15<nick>8<gt>15 <text> 
TEXTQUERY 8<lt>13<cmode>15<nick>8<gt>15 <text> 
TextMsg 8!pmsg! 8<lt>15<nick>8<gt>15 <text>
TextMsgSelf 8!msg! 8<lt>15<me>8<gt>15 <text>
KICK <pre> 8[15<nick>8] 15kicked 8[15<knick>8[15<text>8]]
KICKSELF <pre> 8[15<nick>8] 15kicked 8[15<knick>8[15<text>8]]
QUIT <pre> 8[15<nick>8[15<address>8]] 8[15<text>8]
TOPIC <pre> 8[15<nick>8] 15topic 8'13<text>8'
NICK <pre> 8[15<nick>8] 15known as 8[15<newnick>8]
TEXTCHANSELF  8<lt>13<cmode>15<me>8<gt>15 <text> 
TEXTQUERYSELF 8<lt>13<cmode>15<me>8<gt>15 <text> 
MODEUSER <pre> 8-15usermode8- 8[15<modes>8]
INVITE <pre> 8[15<nick>8] 15invited 8[15<me>8] 15to 8[15<chan>15]
NICKSELF <pre> 8[15<nick>8] 15known as 8[15<newnick>8]
ACTIONCHAN 14* 8<lt>13<cmode>15<nick>8<gt>15 <text> 
ACTIONQUERY 14* 8<lt>13<cmode>15<nick>8<gt>15 <text> 
ACTIONCHANSELF 14* 8<lt>13<cmode>15<me>8<gt>15 <text> 
ACTIONQUERYSELF 14* 8<lt>13<cmode>15<me>8<gt>15 <text> 
CTCP <pre> 8-15ctcp8- 8[15<ctcp> 13<text>8] 15from13: 8[15<nick>8]
CTCPCHAN <pre> 8-15ctcp8- 8[15<ctcp>13:8<chan>13:15<text>8] 15from13: 8[15<nick>8]
CTCPREPLY <pre> 8-15ctcp8- 8[15<text>8] 15from13: 8[15<nick>8]
SERVERERROR <pre> 8-15error8- 8[15<text>8]
NOTICE <pre> 8-8[15<nick>8]8-13 <text>
NOTICECHAN <pre> 8-8[15<nick>13:15<chan>8]8-13 <text>
NOTICESELF <pre> 15-13> 15<nick>13:15<text>
NOTICESELFCHAN <pre> 15-13> 15<chan>13:15<text>
NOTIFY <pre> 15<nick>13: 15online13: 8[15<text>8]
UNOTIFY <pre> 15<nick>13: 15offline13: 8[15<text>8]
DNS <pre> 8[15dns13: 8[15<address>8] 8]
DNSERROR <pre> 8[15unable to resolve13: 8[15<iaddress><naddress>8] 8]
DNSRESOLVE <pre> 8[15resolved13: 8[15<naddress> 13-15 <iaddress>8] 8[15 <raddress> 8] 8]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBColors 255,255,255 0,0,0 0,0,125 0,144,0 255,0,0 3,63,152 160,0,160 49,169,6 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 193,215,43 128,128,128 192,192,192 
FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 15there are 18<users> 15users 8<text> 15invisible in 8<value> 15servers
raw.252 <pre> 15operators online13:15 <value> 
raw.253 <pre> 15unknown connections13:15 <value>
raw.254 <pre> 15channels formed13:15 <value>
raw.255 <pre> 15servers 8<value>15 clients 8<users>
raw.332 <pre> 15topic 8'15<text>8'
raw.333 <pre> 15topic set by13:15 <nick> 
raw.352 <pre> 15<chan> 13~ 8<nick> 15Is 8<address> 8[15<realname>8]
raw.305 <pre> 15you are no longer marked as being away13.
raw.306 <pre> 15you are now marked as being away13.
raw.401 <pre> 8[15<nick>8]15 no such nick
raw.403 <pre> 8[15<chan>8]15 no such chan
raw.404 <pre> 8<chan>15 cannot send text to channel
raw.405 <pre> 15can't join more channels 8[15<chan>8]13,15 server says you're in too many8!
raw.406 <pre> 8[15<nick>8]13:15 there was no such nickname
raw.421 <pre> 15unknown command 13/<value>
raw.432 <pre> 8[15<nick>8]15 invalid nickname, wrong characters13.
raw.433 <pre> 15nickname 8[15<nick>8]15 is already in use.
raw.311 !script bata.whoisstart
raw.319          15Channels 13:15 <chan>
raw.312          15Server 13:15 <wserver> 8[15 <serverinfo> 8]
raw.301          15Away 13:15 <text>
raw.317 !script %:echo $str($chr(160),7)  15Idle 13:15 $bata.st(%::idletime) 8[15 Sign on 13:15 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 8 ]
raw.307 !script %:echo          15Status 13: 15is $iif(%::isregd != is,not) a registered nick13.
raw.378           15Real Hostname 13:15 <text>
raw.313 !script %:echo           15IRCop 13:15 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),   8[15 $ifmatch  8])
raw.318 8[15 End of Whois 8]14 ——————8————13—————14————15————13———8——
raw.436 <pre> 15there's been a nickname collision with 8[15<nick>8]
raw.438 <pre> 15nick change too fast, Wait a while
raw.439 <pre> 15nick change too fast, Wait a while
raw.441 <pre> 8[15<nick>8]15 is not on 8[15<chan>8]
raw.442 <pre> 15you're not on 8[15<chan>8]
raw.443 <pre> 8[15<nick>8]15 is already on 8[15<chan>8]
raw.461 <pre> 15insufficient parameters 8[15<text>8]
raw.465 <pre> 15you are currently banned from this server!
raw.467 <pre> 15cannot join 8[15<chan>8] 8[15+k8]
raw.471 <pre> 15cannot join 8[15<chan>8] 8[15+l8]
raw.472 <pre> 8[15<text>8]15 is an unknown character.
raw.473 <pre> 15cannot join8 [15<chan>8] 8[15+i8]
raw.474 <pre> 15cannot join8 [15<chan>8] 8[15+b8]
raw.475 <pre> 15cannot join8 [15<chan>8] 14incorrect key!
raw.478 <pre> 15error banning 8[15<text>8] 8[15<chan>8]15 Banlist is full13.
raw.482 <pre> 15you're not opped in 8[15<chan>8]
raw.511 <pre> 15your silence list is full!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  -ERROR- <text>
PARENTEXT 8[15<text>8]
TIMESTAMP ON
TIMESTAMPFORMAT 8<15 h:nnt 8>
CLINEOP 8
CLINEHOP 8
CLINEVOICE 14
CLINEREGULAR 14
CLINEOWNER 15
CLINEENEMY 15
CLINEFRIEND 8
CLINEME 13

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR

[scheme3]
Load !script org.load
PREFIX 7±
NOTICESERVER !script haltdef
TEXTCHAN 7<lt>15<cmode><nick>7<gt>15 <text>
TEXTQUERY 7<lt>15<cmode><nick>7<gt>15 <text>
TEXTCHANSELF  7<lt>15<cmode><me>7<gt>15 <text>
TEXTQUERYSELF 7<lt>15<cmode><me>7<gt>15 <text>
ACTIONCHAN 7* 7<lt>15<cmode><nick>7<gt>15 <text>
ACTIONQUERY 7* 7<lt>15<nick>7<gt>15 <text>
ACTIONCHANSELF 7* 7<lt>15<cmode><me>7<gt>15 <text>
ACTIONQUERYSELF 7* 7<lt>15<nick>7<gt>15 <text>
TextMsg 7!pmsg! 7<lt>15<nick>7<gt>15 <text>
TextMsgSelf 7!msg! 7<lt>15<me>7<gt>15 <text>
CTCPSELF <pre> 7[15<ctcp>7] -> 7[15<nick>7]
CTCPREPLYSELF <pre> 7-15ctcpreply7- 7[15<ctcp>7] 7-> 7[15<nick>7]
MODE <pre> 7[15<nick>7]7 Set Mode 7[15<modes>7]
JOIN <pre> 7[15<nick>7[15<address>7]]7 Joined 7[15<chan>7]
JOINSELF <pre> 7[15<nick>7[15<address>7]]7 Joined 7[15<chan>7]
PART <pre> 7[15<nick>7[15<address>7]]7 Parted 7[15reason7:15<text>7]
KICK <pre> 7[15<nick>7]7 Kicked 7[15<knick>7[15<text>7]]
KICKSELF <pre> 7[15<nick>7]7 Kicked 7[15<knick>7[15<text>7]]
QUIT <pre> 7[15<nick>7[15<address>7]]7 [15<text>7]
TOPIC <pre> 7[15<nick>7]7 Topic 7'15<text>7'
NICK <pre> 7[15<nick>7]7 Known As7 [15<newnick>7]
MODEUSER <pre> 7-15Usermode7- 7[15<modes>7]
INVITE <pre> 7[15<nick>7]7 Invited 7[15<me>7]7 to7 [15<chan>7]
NICKSELF <pre> 7[15<nick>7]7 Known As 7[15<newnick>7]
CTCP <pre> 7-15ctcp7- 7[15<ctcp> <text>7]7 from: 7[15<nick>7]
CTCPCHAN <pre> 7-15ctcp7- 7[15<ctcp>7:15<chan>7:15<text>7]7 from: 7[15<nick>7]
CTCPREPLY <pre> 7-15ctcp7- 7[15<text>7]7 from: 7[15<nick>7]
SERVERERROR <pre> 7-15error7- 7[15<text>7]
NOTICE <pre> 7-[15<nick>7]-15 <text>
NOTICECHAN <pre> 7-[15<nick>7:15<chan>7]-15 <text>
NOTICESELF <pre> 7-> 15<nick>7:15 <text>
NOTICESELFCHAN <pre> 7-> 15<chan>7:15 <text>
NOTIFY <pre> 15<nick>7: Online7 [15<text>7]
UNOTIFY <pre> 15<nick>7: Offline 7[15<text>7]
DNS <pre> 7[15dns7: 7[15<address>7] ]
DNSERROR <pre> 7[15unable to resolve7:7[15<iaddress><naddress>7] ]
DNSRESOLVE <pre> 7[15resolved7:7 [15<naddress> 7-15 <iaddress>7]7 [15<raddress>7]7 ]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBColors 255,255,255 0,0,0 0,0,125 0,144,0 255,0,0 3,63,152 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 18,99,242 128,128,128 192,192,192 
FONTDEFAULT tahoma,10
FONTCHAN tahoma,10
FONTQUERY tahoma,10
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 15there are7 <users> 15users 4+7 <text> 15invisible in7 <value> 15servers7.
raw.252 <pre> 15operators online7:15 <value> 
raw.253 <pre> 15unknown connections7:15 <value>
raw.254 <pre> 15channels formed7:15 <value>
raw.255 <pre> 15servers7 <value> 15clients7 <users>
raw.332 <pre> 15topic 7'15<text>7'
raw.333 <pre> 15topic set by: <nick> 
raw.352 <pre> 7<chan> 15~7 <nick> 15Is7 <address> 7[15<realname>7]
raw.305 <pre> 15you are no longer marked as being away7.
raw.306 <pre> 15you are now marked as being away7.
raw.401 <pre> 7[15<nick>7]15 no such nick
raw.403 <pre> 7[15<chan>7]15 no such chan
raw.404 <pre> 7<chan> 15cannot send text to channel7.
raw.405 <pre> 15can't join more channels 7[15<chan>7]15 server says you're in too many7!
raw.406 <pre> 7[15<nick>7]7:15 there was no such nickname7.
raw.421 <pre> 15unknown command7 /<value>
raw.432 <pre> 7[15<nick>7]15 invalid nickname, wrong characters7.
raw.433 <pre> 15nickname 7[15<nick>7]15 is already in use7.
raw.311 !script org.whoisstart
raw.319          15Channels7:15 <chan>
raw.312          15Server 7:15 <wserver> 7[15 <serverinfo> 7]
raw.301          15Away 7:15 <text>
raw.317 !script %:echo $str($chr(160),7) 15Idle 7:15 $zero.st(%::idletime) 7[15 Sign on 7:15 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 7·15 Online time 7:15 $zero.st($calc($ctime - $ctime(%::signontime))) 7]
raw.307 !script %:echo         15Status 7:15 is $iif(%::isregd != is,not) a registered nick7.
raw.378          15Real Hostname 7:15 <text>
raw.313 !script %:echo           15 IRCop 7:15 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),   [ $ifmatch  ])
raw.318  7[15 End 7]7 ———————————————————————————

raw.314 !script org.whowasstart
raw.369  7[15 End 7]7 ———————————————————————————
raw.436 <pre> 15there's been a nickname collision with 7[15<nick>7]
raw.438 <pre> 15nick change too fast, Wait a while
raw.439 <pre> 15nick change too fast, Wait a while
raw.441 <pre> 7[15<nick>7] is not on 7[15<chan>7]
raw.442 <pre> 15you're not on 7[15<chan>7]
raw.443 <pre> 7[15<nick>7] is already on 7[15<chan>7]
raw.461 <pre> 15insufficient parameters 7[15<text>7]
raw.465 <pre> 15you are currently banned from this server7!
raw.467 <pre> 15cannot join 7[15<chan>7]7 [15+k7]
raw.471 <pre> 15cannot join 7[15<chan>7]7 [15+l7]
raw.472 <pre> 7[15<text>7]15 is an unknown character7.
raw.473 <pre> 15cannot join7 [15<chan>7] 7[15+i7]
raw.474 <pre> 15cannot join7 [15<chan>7] 7[15+b7]
raw.475 <pre> 15cannot join7 [15<chan>7]15 incorrect key7!
raw.478 <pre> 15error banning 7[15<text>7]7. 7[15<chan>7]15 Banlist is full7.
raw.482 <pre> 15you're not opped in 7[15<chan>7]
raw.511 <pre> 15your silence list is full7!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  7-15ERROR7-15 <text>
PARENTEXT 7[15<text>7]
TIMESTAMP ON
TIMESTAMPFORMAT 7<15 h:nnt 7>
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
