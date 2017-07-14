<lt><cmode><me><gt> <text> 
[mts]
NAME Money-Tree
AUTHOR IROC
EMAIL jersexton@hotmail.com
DESCRIPTION 'XXX' IROC 'XXX'
WEBSITE www.scriptaz.com
MTSVERSION 1.1
VERSION 1.1
Scheme1 Sea-Breeze
Scheme2 Red on Black
Scheme3 IROC Blue
SCRIPT irocx.mrc
PREFIX 2'14X10X14X2'
Load !script irc.load
NOTICESERVER !script haltdef
CTCPSELF <pre> 14(12<ctcp>14)3-10> 14(12<nick>14)
CTCPREPLYSELF <pre> 11-12ctcpreply11-1110(12<ctcp>1110) 3-10> 1110(12<nick>310)
MODE <pre> 10(12<nick>10) 3set mode 10(12<modes>10)
JOIN 11()10(12<nick>10)3-10(12<address>10) 3joined 12<chan>
JOINSELF <pre> 10(12<nick>10)3-10(12<address>10) 11joined 12<chan>
PART <pre> 10(12<nick>10)3-10(12<address>10) 3parted10(12reason3:10<text>10)
TextMsg 10Private msg!11(12<nick>11)12 <text>
TextMsgSelf 10Private msg!11(12<me>11)12 <text>
TEXTCHAN 11(12<cmode>3<nick>1111)14 <text> 
TEXTQUERY 11(12<cmode>3<nick>1111)14 <text> 
KICK <pre> 1110(2<nick>1110) 3kicked 11102<knick>1110(10<text>1110)10)
KICKSELF <pre> 1110(2<nick>1110) 3kicked 11102<knick>1110(10<text>1110(10)
QUIT <pre> 1110(12<nick>1110)10<address>1110(12<text>1110)
TOPIC <pre> 1110(12<nick>1110) 3topic 11'10<text>11'
NICK 11-+10(12<nick>1110) 3known as 1110(12<newnick>1110)
TEXTCHANSELF 11(12<cmode>3<nick>1111)14 <text> 
TEXTQUERYSELF 11<lt>10<cmode>12<me>11<gt>12 <text> 
MODEUSER <pre> 11-12usermode11- 1110(12<modes>1110)
INVITE <pre> 1110(12<nick>1110) 3invited 1110(12<me>1110( 12to 1110(12<chan>1210)
NICKSELF <pre> 1110(12<nick>1110) 3known as 1110(12<newnick>1110)
ACTIONCHAN 11** 10(12<cmode>3<nick>1110)10 <text> 
ACTIONQUERY 11** 10(12<cmode>3<nick>1110)10 <text> 
ACTIONCHANSELF 11** 10(12<cmode>3<nick>1110)14 <text> 
ACTIONQUERYSELF 11** 10(12<cmode>3<nick>1110)14 <text> 
CTCP <pre> 11-12ctcp11- 1110(12<ctcp> 10<text>1110) 3from10: 1110(12<nick>1110)
CTCPCHAN <pre> 11-12ctcp11- 1110(12<ctcp>10:11<chan>10:12<text>1110) 3from10: 1110(12<nick>1110)
CTCPREPLY <pre> 11-12ctcp11- 1110(12<text>1110( 3from10: 1110(12<nick>1110)
SERVERERROR <pre> 11-12error11- 1110(12<text>1110)
NOTICE <pre> 11-1110(12<nick>1110)11-15 <text>
NOTICECHAN <pre> 11-1110(12<nick>10:12<chan>1115)11-10 <text>
NOTICESELF <pre> 3-10> 12<nick>10:12<text>
NOTICESELFCHAN <pre> 3-10> 12<chan>10:12<text>
NOTIFY <pre> 12<nick>10: 3online10: 1110(12<text>1110)
UNOTIFY <pre> 12<nick>10: 3offline10: 1110(12<text>1110)
DNS <pre> 1110(12dns10: 1110(12<address>1110( 1110)
DNSERROR <pre> 1110(12unable to resolve10: 1110(12<iaddress><naddress>1110( 1110)
DNSRESOLVE <pre> 1110(12resolved10: 1110(12<naddress> 10-12 <iaddress>1110) 1110)12 <raddress> 1110( 1110)
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBColors 255,255,255 0,0,0  179,0,0 0,144,0 255,0,0 3,63,152 160,0,160 49,169,6 255,255,0 0,251,0 73,88,71 81,82,56 18,90,16 47,217,43 128,128,128 192,192,192 
FONTDEFAULT Courier New,11
FONTCHAN Bell MT,13
FONTQUERY tahoma,11
raw.324 !script haltdef
raw.329 !script haltdef
raw.251 <pre> 3there are 12<users> 3users 4+ 12<text> 3invisible in 12<value> 11servers
raw.252 <pre> 3operators online10:12 <value> 
raw.253 <pre> 3unknown connections10:12 <value>
raw.254 <pre> 3channels formed10:12 <value>
raw.255 <pre> 3servers 12<value>3 clients 12<users>
raw.332 <pre> 3topic 11'12<text>11'
raw.333 <pre> 11topic set by10:12 <nick> 
raw.352 <pre> 12<chan> 10~ 12<nick> 3Is 12<address> 1110(12<realname>1110)
raw.305 <pre> 3you are no longer marked as being away10.
raw.306 <pre> 3you are now marked as being away10.
raw.401 <pre> 1110(12<nick>1110)3 no such nick
raw.403 <pre> 1110(12<chan>1110)3 no such chan
raw.404 <pre> 12<chan>3 cannot send text to channel
raw.405 <pre> 3can't join more channels 1110(12<chan>1110)10,3 server says you're in too many!
raw.406 <pre> 1110(12<nick>1110(10:3 there was no such nickname
raw.421 <pre> 3unknown command 10/<value>
raw.432 <pre> 1110(12<nick>1110(3 invalid nickname, wrong characters10.
raw.433 <pre> 3nickname 1110(12<nick>1110(3 is already in use.
raw.311 !script iroc.whois
raw.319          12Channels 13:12 <chan>
raw.312          12Server 13:12 <wserver> 7[12 <serverinfo> 7]
raw.301          12Away 13:12 <text>
raw.317 !script %:echo $str($chr(160),7)  12Idle 13:12 $trix.st(%::idletime) 7[12 Sign on 13:12 $asctime($ctime(%::signontime),HH:nn:ss - dd/mm/yyyy (ddd)) 7 ]
raw.307 !script %:echo          12Status 13: 12is $iif(%::isregd != is,not) a registered nick13.
raw.378           12Real Hostname 13:12 <text>
raw.313 !script %:echo           12IRCop 13:12 $iif(%::isoper == is,yes,no) $iif($gettok(%::text,3-,32),   7[12 $ifmatch  7])
raw.318 11____________EnD Of WhOiS__________ 
raw.436 <pre> 3there's been a nickname collision with 1110(12<nick>1110)
raw.438 <pre> 3nick change too fast, Wait a while
raw.439 <pre> 3nick change too fast, Wait a while
raw.441 <pre> 1110(12<nick>1110)3 is not on 1110(12<chan>1110)
raw.442 <pre> 3you're not on 1110(12<chan>1110)
raw.443 <pre> 1110(12<nick>1110(3 is already on 1110(12<chan>1110)
raw.461 <pre> 3insufficient parameters 1110(12<text>1110)
raw.465 <pre> 3you are currently banned from this server!
raw.467 <pre> 3cannot join 1110(12<chan>1110( 1110(12+k1110)
raw.471 <pre> 3cannot join 1110(12<chan>1110( 1110(12+l1110)
raw.472 <pre> 1110(12<text>1110(3 is an unknown character.
raw.473 <pre> 3cannot join11 10(12<chan>1110( 1110(12+i1110)
raw.474 <pre> 3cannot join11 10(12<chan>1110( 1110(12+b1110)
raw.475 <pre> 3cannot join11 10(12<chan>1110( 3incorrect key! )
raw.478 <pre> 3error banning 1110(12<text>1110( 1110(12<chan>1110)3 Banlist is full10.
raw.482 <pre> 3What the hell... U ain't no fucking Op 10(12<chan>1110)
raw.511 <pre> 3your silence list is full!
raw.353 !script haltdef
raw.366 !script haltdef
raw.327 <text>
raw.other <text>
ECHO echo -  <text>
ECHOTARGET  echo -  <text>
ERROR  -ERROR- <text>
PARENTEXT 1110(12<text>1110)
TIMESTAMP ON
TIMESTAMPFORMAT 12h11:12nn
CLINEOP 14
CLINEHOP 7
CLINEVOICE 10
CLINEREGULAR 12
CLINEOWNER 14
CLINEENEMY 4
CLINEFRIEND 15
CLINEME 11

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR 
ImageButtons Deefece-buttons.png
[scheme1]
Colors 1,14,14,4,15,15,14,14,14,14,14,15,14,14,4,14,14,14,14,14,15,1,14,1,14
RGBColors 255,255,255 204,244,222 0,0,0 0,0,0 0,112,112 128,0,0 160,0,160 255,124,0 164,164,0 0,244,0 64,90,90 64,90,90 149,106,138 255,0,255 128,124,128 156,180,167
Prefix 2'14X10X14X2'
TIMESTAMP ON
TimeStamp 14h15:14nn
ParenText 4(11<text>4)
BaseColors 14,03,13,03
FontDefault Courier New,11
FontChan Courier New,11
FontQuery Courier New,11
Prefix 2'14X10X14X2'
CLineOwner 1
CLineOP 15
CLineHOP 4
CLineVoice 3
CLineRegular 2
CLineMe 4

ClineCharOwner .
ClineCharOP ?
ClineCharHOP %
ClineCharVoice +

[scheme2]
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBColors 255,255,255 0,0,0 128,64,64 255,128,128 255,0,0 128,0,0 255,255,0 255,124,0 255,255,168 255,64,64 64,90,90 157,24,21 149,106,138 255,179,255 128,124,128 156,180,167
Prefix 2'14X10X14X2'
TIMESTAMP ON
TimeStamp 14h15:14nn
ParenText 4(11<text>4)
BaseColors 14,03,13,03
FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
Prefix 2'14X10X14X2'
CLineOwner 1
CLineOP 15
CLineHOP 4
CLineVoice 3
CLineRegular 2
CLineMe 4

ClineCharOwner .
ClineCharOP @
ClineCharHOP %
ClineCharVoice +

[scheme3]
Colors 1,9,9,0,0,0,0,0,9,0,0,9,0,0,0,0,0,9,0,0,0,1,0,1,0,9,1
RGBColors 0,0,0 204,208,220 128,64,64 106,106,255 0,128,128 128,0,0 255,255,0 255,124,0 255,255,168 0,0,255 64,90,90 0,0,128 149,106,138 255,179,255 128,124,128 156,180,167
Prefix 2'14X10X14X2'
TimeStamp 14h15:14nn
ParenText 4(11<text>4)
BaseColors 14,03,13,03
FontDefault Comic Sans MS,11
FontChan Comic Sans MS,11
FontQuery Comic Sans MS,11
TIMESTAMP ON
TimeStamp 14h15:14nn
Prefix 2'14X10X14X2'
CLineOwner 1
CLineOP 9
CLineHOP 4
CLineVoice 3
CLineRegular 2
CLineMe 4

ClineCharOwner .
ClineCharOP 4@
ClineCharHOP 9%
ClineCharVoice 12+
