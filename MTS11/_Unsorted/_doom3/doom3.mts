[MTS]
NAME DooM3
AUTHOR port66
EMAIL ugc7@madasafish.com
DESCRIPTION | - DooM 3 - |
WEBSITE http://port66.dyns.cx/
MTSVERSION 1.1
VERSION 

PREFIX 914²Û>
PARENTEXT 12[6<text>12]
TIMESTAMP ON
TIMESTAMPFORMAT 13<11<14HH:nn]ss11>13>
UNLOAD <PRE> --------[DooM 3]--------[Unloaded]--------
LOAD <PRE> --------[DooM 3]--------[Loaded]--------
ImageChan fill doom3_drk.jpg
ImageStatus fill doom3_drk.jpg
ImageButtons 
ImageToolbar 
CTCPSELF 14Ctcp0 **7 <nick> 4[14<ctcp>14][0<text>4]
CTCPCHANSELF 10Ctcp0 **7  4[14<chan>4][14<ctcp>4][0<text>4]
CTCPREPLYSELF 10Ctcp0 **7 4[14<chan>4][14<ctcp>4][0<parentext>4]
MODE <pre> 5Modes0 **14 <nick> 5sets mode1 **14 <modes>
JOIN <pre> 5Joins1:14 <nick>0\<address> ..
JOINSELF <pre> 3Joining 0 ** 11<chan>...! 
PART <pre> 5Parts0 **14 <nick>0\<address>8<parentext>
TEXTCHAN 1[7<cmode>4<nick>5]15 <text>
TEXTQUERY 1[7<cmode>4<nick>5]6 <text>
TEXTCHANSELF 1[7<cmode>14<me>5]11 <text>
TEXTQUERYSELF 5[7<cmode>14<me>5]11 <text>
KICK <pre> 5Kick0 **0 <knick> 15from 0 **14 <chan> 5was kicked by **1 <nick> 5[0<text>5]
KICKSELF <pre> 12You've been kicked by 0 **14 <nick>2 from <chan>0<text>
QUIT <pre> 15Quit0 **14 <nick>4\<address>12\[5<parentext>12]
TOPIC <pre> 15Topic0 **14 <nick>2 sets topic to0 **12 <text>
NICK <pre> 15Nick0 **14 <nick>2 is now known as 0<newnick>
MODEUSER <pre> 15Modes0 **14 <modes>
INVITE <pre> 10Invite0 **5<nick> has invited you to join <chan>
NICKSELF <pre> 15You are now known as\8<newnick>

CTCP <pre> 15Received CTCP from76 ** <nick> 14[12<ctcp>14][12<parentext>14]
CTCPCHAN <pre> 15CTCP from76 ** <nick> 14[12<ctcp>14][12<parentext>14]
CTCPREPLY 15!script ctcp.rep %::nick %:15:CTCP3 %::text
SERVERERROR <pre> 4Error0 **14 <text>
NOTICESERVER <pre> 15Notice0 ** 15[14<nick>15]14 <text>
NOTICE <pre> 15Notice0 **15[6<nick>15]14 <text>
NOTICECHAN <pre> 15ChanNotice0 **15[1<nick> \<chan>15]14 <text>
NOTICESELF <pre> 6<nick>14\<text>
NOTICESELFCHAN <pre>6 <chan>14\<text>
NOTIFY !script notify.on %::nick %::text
UNOTIFY !script notify.off %::nick %::text
DNS <pre> 15Up0 **15 <address>...
DNSERROR <pre> 15Unable to resolve 15[1<iaddress>\<naddress>15]
DNSRESOLVE <pre> 15Resolved <naddress> 15[0(<iaddress>) 4to <raddress>15]
ACTIONCHAN <pre> 6<cmode>4<nick>12 <text>
ACTIONQUERY <pre> 6<nick>4<text>
ACTIONCHANSELF <pre> 6<cmode>14<me>0 <text>
ACTIONQUERYSELF <pre> 6<me>12 <text>

ECHO 8<pre> 15<text>
ECHOTARGET 8<pre> 15<text>
ERROR 8<pre>14•15•0• 15<text>

CLINEOP 14
CLINEHOP 4
CLINEVOICE 7
CLINEREGULAR 9
CLINEOWNER 4
CLINEENEMY 4
CLINEFRIEND 9
CLINEME 12
CLINECHAROP 6@
CLINECHARHOP 6%
CLINECHARVOICE 6+
CLINECHARREGULAR

colors 1,11,8,7,11,3,10,2,3,0,5,11,7,7,2,15,10,2,3,7,6,15,11,1,6,5,11,1
RGBCOLORS 191,0,0 0,0,0 240,159,11 91,181,87 138,0,0 121,121,121 196,196,196 245,208,82 106,125,122 206,87,0 127,127,127 220,220,200 255,255,255 0,128,255 158,90,16 96,94,79

FONTDEFAULT Courier,12
FONTCHAN Courier,12
FONTQUERY Courier,12

RAW.319 <pre> 6Channels0 **14 <chan> ...
RAW.312 <pre> 6Server0 **14 <wserver> ...
RAW.317 <pre> 6Been idle for0 **14 <idletime> 4secs ..
RAW.301 <pre> 6Away0 **14 <text> ..
RAW.313 <pre> 6TypeUser0 **14 <ircop>2 an IRC Operator..
RAW.307 <pre> 6Registered nick0 **14  <nick>
RAW.314 <pre> 6Whowas0 **14 <nick>2\<address> 0[4<text>0]
RAW.381 <pre> 6You are now a 14IRC Operator <me>
RAW.401 <pre> 6No such nickname0 **14 <nick>.
RAW.403 <pre> 6No such nickname0 **14 <chan>
RAW.404 <pre> 6Unable to send message's to0 **14  <chan>

RAW.324 !script t.mode %::modes
RAW.471 <pre> 6Can't join0 **14  <chan> 2[6its full +l2]
RAW.473 <pre> 6Can't join0 **14  <chan> 2[6its invite only +i2]


RAW.474 <pre> 6Can't join0 **14  <chan> 15[5you're banned +b15]
RAW.467 <pre> 6Can't join0 **14  <chan> 15[5requires key +k15]
RAW.482 <pre> 0<chan>0 **14  You're not an operator.
RAW.332 <pre> 6Topic0 **14 "<text>"
RAW.333 <pre> 6Set by0 **14 <nick> 2on <text> ...
RAW.433 <pre> 1Nickname\<nick> is already in 4use..
RAW.250 <pre> 6Total connection(s)0 **14 <value>.
RAW.251 <pre> 6Users1 **14  <users> Invisible1 **14  <value>
RAW.252 <pre> 6Operator(s) online0 **14 <value>.
RAW.253 <pre> 6Unknown connection(s)0 **14 <value>.
RAW.254 <pre> 6Number of channels formed0 **14 <value>.
RAW.255 <pre> 6Local clients0 **14 <users>15on **14 <value> 15server(s).
RAW.302 <pre> 6Userhost0 **14 <nick> 15[3<address>15]
RAW.265 <pre> 6Local users0 **14 <users> 15Max **14 <value>.
RAW.266 <pre> 6Global users0 **14 <users> 15Max **14 <value>.
RAW.391 <pre> 6Date0 **14 <date>.
RAW.421 <pre> 6Invalid command0 **14  <text>.
NAMES <pre> 6Names0 **14  for <chan>12 <text>
NOTONCHAN <pre> 5You Need To Be On Achannel