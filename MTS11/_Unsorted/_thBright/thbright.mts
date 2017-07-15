[mts]
NAME thBright
AUTHOR BrIgHtOn
EMAIL ToTaLX_@hotmail.com
DESCRIPTION a simple green theme with 2 schemes (Grey & Bluesea)  
SCRIPT thb.mrc
VERSION 1.0
MTSVERSION 1.1
PREFIX 14-15x14-
TIMESTAMP ON
TIMESTAMPFORMAT 15[14HH15:14nn15]
LOAD 15>> 14thBright Loaded15!
ctcpself -> <nick> <ctcp> <text>
ctcpreplyself -> <nick> <ctcp> <text>
PARENTEXT 15[14<text>15]
JOINSELF Joining <chan>...
MODE <pre> 15[14Mode15/14<chan>15(14<nick> set15:14 <modes>15)]
JOIN 15>> [14Join15/14<chan>15(14<nick>15!14<address>15)]
PART 15<< [14Part15/14<chan>15(14<nick>15!14<address>15)] <parentext>
TEXTCHAN 15[<cmode>14<nick>15]14 <text>
TEXTQUERY 15[14<nick>15]14 <text>
KICK <pre> 15[Kick15(14<knick> was kicked by15:14<nick>15:14<text>15)]
KICKSELF <pre> 15[Kick15(14<knick> was kicked by15:14<nick>15:14<text>15)]
QUIT 11<< [10SignOff11/10<nick>11(<address>)10 <text>11]
TOPIC <pre> 15[14Topic15/14<chan>15(14<nick> Change topic 15->14 <text>15)]
NICK <pre> 15[14Nick15(14<nick> -15->14 <newnick>15)]
NICKSELF <pre> 15[14Nick15(14<nick> -15->14 <newnick>15)]
TEXTCHANSELF 15[<cmode>14<me>15]14 <text>
TEXTQUERYSELF 15[14<me>15]14 <text>
MODEUSER <pre> 15[14Usermode15(14<modes>15)]
INVITE <pre> 15[Invite15(14<nick> invites you to join15 ->14 <chan>15)]
ACTIONCHAN 6-13!6- 13[<cmode>6<nick>13]6 <text>
ACTIONQUERY 6-13!6- 13[<cmode>6<nick>13]6 <text>
ACTIONCHANSELF 6-13!6- 13[<cmode>6<me>13]6 <text>
ACTIONQUERYSELF 6-13!6- 13[<cmode>6<me>13]6 <text>
NOTICESELF --> 15[14Notice15(<nick>15:14 <text>15)]
NOTICESELFCHAN --> 15[14Notice15(14<chan>15:14 <text>15)]
CTCPREPLY 14>15>00>9 <nick> 14[03<address>14]9 <ctcp> reply:15 <text>
CTCP 14>15>00>9 <nick> 14[03<address>14]3 requests <ctcp> (<text>) from you
CTCPCHAN 14>15>00>9 <nick> 14[03<address>14]3 requests <ctcp> (<text>) from <chan>
SERVERERROR <pre> Error: <text>
NOTICE --> 15[14<nick>15]14 <text>
NOTICESERVER --> 15[14<nick>15]14 <text>
NOTICECHAN -> 14[14<nick>:<chan>15]14 <text>
NOTIFY <pre> 7[ONline(<nick> :: <parentext>)]
UNOTIFY <pre> 7[OFFline(<nick> :: <parentext>)]
DNSERROR !script DNS
DNSRESOLVE !script DNS
Colors 1,6,4,5,14,15,15,15,15,15,15,14,5,7,14,14,15,10,15,5,14,1,15,1,15,15
RGBCOLORS 255,255,255 0,0,0 0,0,160 0,128,0 255,0,0 128,0,0 128,0,128 255,128,0 255,255,0 0,255,0 0,128,128 0,255,255 0,0,255 255,0,255 0,128,0 0,255,0
Fontdefault Trebuchet MS,11
Fontchan Trebuchet MS,11
Fontquery Trebuchet MS,11
raw.002 !script
raw.003 !script
raw.004 !script
raw.005 !script
raw.251 <pre> <users> 14users
raw.252 <pre> <value> 14operator(s) online
raw.253 <pre> <value> 14unknown connections
raw.254 <pre> <value> 14Channels formed
raw.255 <pre> 14I have15 <users> 14clients on15 <value> 14servers
raw.265 <pre> 14Current local users:15 <users> 14Max:15 <value>
raw.266 !script lusers %::users %::value
raw.372 !script
raw.375 !script
raw.376 !script
raw.341 <pre> <nick> has been invited to <chan>
raw.353 !script
raw.366 !script
raw.311 !script whinit %::nick %::address %::realname
raw.307 !script whstatus %::text
raw.313 !script whircop %::text
raw.312 !script whserver %::wserver
raw.319 !script whchan %::chan
raw.301 !script whaway %::text
raw.317 !script widle %::idletime %::signontime
raw.318 !script whend
raw.314 <pre> 15(14<nick>15)14 was 15(14<address>15) (14<realname>15)
raw.324 !script
raw.329 !script
raw.332 !script topic %::text
raw.333 !script topicn %::nick %::text
raw.306 <pre> 15[Away15(You're away15)]
raw 305 <pre> 15[Away15(You're no longer away15)]
raw.401 15[14Error15(14<nick>15:14 No such user15)]
raw.403 15[14Error15(14<chan>15:14 No such channel15)]
raw.404 15[14Error15(14Unable to send text to channel15)]
raw.405 15[14Error15(14<chan>15:14 Unable to join - You're on too many channels15)]
raw.406 15[14Error15(14<nick>15:14 No such user15)]
raw.421 15[14Error15(14<value>15:14 Unknown command15)]
raw.432 15[14Error15(14<nick>15:14 Is an invalid nickname15)]
raw.433 15[14Error15(14<nick>15:14 Nickname already taken15)]
raw.438 15[14Error15(14Nickname changed too fast, please wait a while and try again...15)]
raw.439 15[14Error15(14Target changed too fast, please wait a while and try again...15)]
raw.441 15[14Error15(14<nick>15:15 Is not on <chan>15)]
raw.442 15[14Error15(14<chan>15:15 You're not on that channel15)]
raw.443 15[14Error15(14<nick>15:15 Is already on <chan>15)]
raw.461 15[14Error15(14<text>15:15 Insuficient parameters15)]
raw.467 15[14Error15(14<chan> is locked (15+k14)15)]
raw.471 15[14Error15(14<chan> is full (15+l14)15)]
raw.472 15[14Error15(14Unknown character15:14 <text>15)]
raw.473 15[14Error15(14<chan> is invite only (15+i14)15)]
raw.474 15[14Error15(14You're banned from <chan> (15+b14)15)]
raw.475 15[14Error15(14<chan> is locked (15+k))]
raw.478 15[14Error15(14<chan> banlist is full15)]
raw.482 15[14Error15(14You're not an op on 15<chan>)]
raw.352 <pre> <chan> (<address>) <nick> * <realname>
CLINEOP 15
CLINEHOP 14
CLINEVOICE 14
CLINEREGULAR 14
CLINEME 07
CLINECHAROP @
CLINECHAROWNER .
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR 
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
SCHEME1 Grey
SCHEME2 BlueSea
RAW.Other <pre> <text>
BaseColors 14,14,5,15

[scheme1]
RGBCOLORS 255,255,255 0,0,0 0,0,160 0,128,0 255,0,0 128,0,0 128,0,128 255,128,0 255,255,0 0,255,0 0,128,128 0,255,255 0,0,255 255,0,255 128,128,128 192,192,192

[SCHEME2]
RGBCOLORS 255,255,255 0,0,0 0,0,160 0,128,0 255,0,0 128,0,0 128,0,128 255,128,0 255,255,0 0,255,0 128,128,128 192,192,192 0,0,255 255,0,255 0,128,128 0,255,255
