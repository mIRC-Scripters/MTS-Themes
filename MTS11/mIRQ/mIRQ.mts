[MTS]
NAME mIRQ
AUTHOR Snooper
EMAIL g_gtz@hotmail.com
DESCRIPTION the mIRQ Default theme.. :D
WEBSITE (none yet) :P
MTSVERSION 1.1
VERSION 1.0
PREFIX 8•
PARENTEXT <text>
TIMESTAMP OFF
TIMESTAMPFORMAT 4(8h:mmtt4)
LOAD <pre> 4O15z Script 8Default Theme
CTCPSELF 4Ctcp:15 <nick>8:15<ctcp>8:15<text>
CTCPCHANSELF 4Ctcp:15 <Chan>8:15<ctcp>8:15<text>
CTCPREPLYSELF 4Ctcp:15 <nick>8:15<ctcp>8:15<parentext>
MODE <pre> 4Mode:15 <nick> 4sets mode15 <modes>
JOIN <pre> 4Join:15 <nick>8:(15<address>8)
JOINSELF <pre> 4Now Talking in 15<chan>4. 
PART <pre> 4Part:15 <nick>8:(15<address>8)
TEXTCHAN 4(8<cmode>15<nick>4): <text>
TEXTQUERY 4(15<nick>4): <text>
TEXTCHANSELF 4(8<cmode>8<nick>4): <text>
TEXTQUERYSELF 4(8<nick>4): <text>
KICK <pre> 4Kick:15 <knick> 4by:15 <nick> 4(15<text>4)
KICKSELF <pre> 4Kicked:15 <nick>4from 15<chan> 4(15<text>8)
QUIT <pre> 4Quit:15 <nick>8:(15<address>8) (15<parentext>8)
TOPIC <pre> 4Topic:15 <nick> 4sets topic:15 <text>
NICK <pre> 4Nick:15 <nick> 4is now15 <newnick>
MODEUSER <pre> 4Modes:15 <modes>
INVITE <pre> 4Invite:15 <nick> has invited you to join <chan>
NICKSELF <pre> 4Nick15 You are now <newnick>
CTCP <pre> 4Received CTCP from15: <nick>8:15<ctcp> <parentext>
CTCPCHAN <pre> 4CTCP15 from8:15 <nick>8:15<ctcp>4(15<parentext>4)
SERVERERROR <pre> 4Error:15 <text>
NOTICESERVER 4Server(15<nick>4):15 <text>
NOTICE <pre> 4Notice:8(15<nick>8)15 <text>
NOTICECHAN <pre> 4Channel Notice:8(15<chan>8) 8<nick>:15 <text>
NOTICESELF <pre> 4<nick>:15 <text>
NOTICESELFCHAN <pre>4 <chan>:15 <text>
SCRIPT mIRQ.mrc
NOTIFY !script not %::nick %::text
UNOTIFY !script unot %::nick %::text
DNS <pre> 4Up:15 <address>
DNSERROR <pre> 4Error:8(15Unable to resolve <iaddress>8:15<naddress>8)
DNSRESOLVE <pre> 4Resolved:15 <naddress> 8(15<iaddress>8)4 to 8(15<raddress>8)
ACTIONCHAN <pre> 8<cmode>4<nick>15 <text>
ACTIONQUERY <pre> 4<nick>15 <text>
ACTIONCHANSELF <pre> 4<cmode>8<nick>15 <text>
ACTIONQUERYSELF <pre> 4<cmode>8<nick>15 <text>
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
CLINEOP 4
CLINEHOP 4
CLINEVOICE 15
CLINEREGULAR 0
CLINEOWNER 11
CLINEME 8
CLINECHAROP 12@
CLINECHARHOP 12%
CLINECHARVOICE 12+
CLINECHARREGULAR
COLORS 13,4,15,0,4,4,8,4,11,3,3,0,8,4,15,0,4,11,8,3,15,7,0,13,0,15
BASECOLORS 2,3,4,1
RGBCOLORS 255,255,255 0,0,0 130,215,255 80,200,255 0,150,225 0,128,192 0,110,165 0,90,135 255,166,0 220,170,0 85,110,135 109,135,165 55,75,95 75,75,75 92,92,92 170,170,170
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11
RAW.319 <pre> 4Channels:15 <chan>
RAW.312 <pre> 4Server:15 <wserver>
RAW.317 <pre> 4Been idle for:15 <idletime>
RAW.301 <pre> 4Away:15 <text>
RAW.313 <pre> 4TypeUser:15 <ircop>8 an IRC Operator..
RAW.307 <pre> 4Registered nick:15 <nick>
RAW.314 <pre> 4Whowas:15 <nick>8:(15<address>8) (15<text>8)
RAW.381 <pre> 4You are now a 15IRC Operator <me>
RAW.401 <pre> 4No such nickname:15<nick>.
RAW.403 <pre> 4No such nickname:15 <chan>.
RAW.404 <pre> 4Unable to send message's to:15 <chan>.
RAW.471 <pre> 4Can't join:15  <chan> 8(15its full +l8)
RAW.473 <pre> 4Can't join:15  <chan> 8(15its invite only +i8)
RAW.474 <pre> 4Can't join:15  <chan> 8(15you're banned +b8)
RAW.467 <pre> 4Can't join:15  <chan> 8(15requires key +k8)
RAW.482 <pre> 4<chan>:15  You're not an operator.
RAW.332 <pre> 4Topic:15 <text>
RAW.333 <pre> 4Set by:15 <nick> 4on15 <text> 
RAW.433 <pre> 4Nickname:15 &nick is already in use.
RAW.315 <pre> 4End of /WHO list for15 <value>
RAW.250 <pre> 4Total connection(s):15 <value>
RAW.251 <pre> 4Users:15 <users> 4Invisible:15  <value>
RAW.252 <pre> 4Operator(s) online:15 <value>
RAW.253 <pre> 4Unknown connection(s):15 <value>
RAW.254 <pre> 4Number of channels formed:15 <value>
RAW.255 <pre> 4Local clients:15 <users>4on:15 <value> servers
RAW.302 <pre> 4Userhost:15 <nick> 8(15<address>8)
RAW.265 <pre> 4Local users:15 <users> 4Max:15 <value>
RAW.266 <pre> 4Global users:15 <users> 4Max:15 <value>
RAW.391 <pre> 4Date:15 <date>
RAW.421 <pre> 4Invalid command:15  <text>
NAMES <pre> 4Names:15  for <chan> <text>
NOTONCHAN <pre> 4You're not on a channel15 please enter to one...
scheme1 Timestamp
scheme2 Trebuchet Font
scheme3 Trebuchet Font\Timestamp
scheme4 Verdana Font
scheme5 Verdana Font\Timestamp

[scheme1]
TIMESTAMP ON

[scheme2]
TIMESTAMP OFF
FONTDEFAULT Trebuchet MS,11
FONTCHAN Trebuchet MS,11
FONTQUERY Trebuchet MS,11

[scheme3]
TIMESTAMP ON
FONTDEFAULT Trebuchet MS,11
FONTCHAN Trebuchet MS,11
FONTQUERY Trebuchet MS,11

[scheme4]
TIMESTAMP OFF
FONTDEFAULT Verdana,11
FONTCHAN Verdana,11
FONTQUERY Verdana,11

[scheme5]
TIMESTAMP ON
FONTDEFAULT Verdana,11
FONTCHAN Verdana,11
FONTQUERY Verdana,11
