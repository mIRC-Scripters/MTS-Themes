[mts]
NAME oRaNGe
AUTHOR MaGNaM
EMAIL snoop_ruurd@hotmail.com
DESCRIPTION Good looking orange/white/black theme. Easy on the eye and a nice looking design.
SCRIPT orange.mrc
WEBSITE http://www.geocities.com./ruurdie/Theme
MTSVERSION 1.1
VERSION 1.2
PREFIX 7[0¤7]

;FOUND BUGS, PLEASE REPORT THEM @ SNOOP_RUURD@HOTMAIL.COM 

TIMESTAMP on
TIMESTAMPFORMAT 7[15HH0:15nn0:15ss7]

PARENTEXT 7[0<text>7] 

LOAD 0¤7 7[0Orange theme 7:15 Loaded7]
UNLOAD 0¤7 7[0Orange theme 7:15 UnLoaded7]

CTCPSELF -><c1> <nick> <ctcp> <text>
CTCPREPLYSELF -><c1> <nick> <ctcp> <text>

JOIN <pre> 7[0Join 7:15 <nick> 7]0 0¤7 7[0<address>7]
JOINSELF 14================7[0 ChanStats <chan> 7 ]14====================================
PART <pre> 7[0Part 7:15 <nick> 7]0 0¤7 7[0<address>7] 
QUIT <pre> 7[0Quit 7:15 <nick> 7]0 0¤7 7[0<address>7] <parentext>

TEXTCHAN 7[0<nick>7]0 <text>
TEXTQUERY 7[0<nick>7]0 <text>
TEXTCHANSELF 7[0<me>7]15 <text>
TEXTQUERYSELF 7[0<me>7]15 <text>

KICK <pre> 7[0Kick7]0 0¤7 7[0<nick> 15kicked0 <knick>7]0 0¤7 <parentext>
KICKSELF <pre> 7[0Kick7]0 0¤7 7[0<nick> 15kicked0 <me>7]0 0¤7 <parentext>

TOPIC <pre> 7[0Topic Change 7:15 <nick> 7]0 0¤7 7[0<text>7]

NICK <pre> 7[0NickChange7]0 0¤7 7[0 <nick> 7:15 <newnick> 7]0
NICKSELF <pre> 7[0NickChange7]0 0¤7 7[0 <nick> 7:15 <newnick> 7]0

MODE <pre> 7[0ChanMode 7:15 <nick>7]0 0¤7 7[0<modes>7]
MODEUSER <pre> Mode [<modes><c1>]
INVITE <pre> <nick> has invited you to join <chan>

ACTIONCHAN 7[0!7] <nick>0 <text> 
ACTIONQUERY 7[0!7] <nick>0 <text> 
ACTIONCHANSELF 7[0!7] <me>15 <text> 
ACTIONQUERYSELF 7[0!7] <me> 15<text>

CTCP <pre> 7[0CTCP 7:15 <nick> 7]  0¤7 [0<address>7] 0¤7 [0<ctcp>7] <parentext>
CTCPCHAN <pre> 7[0CTCP 7:15 <nick><chan> 7] 0¤7 [0<address>7] 0¤7 [0<ctcp>7] <parentext>
CTCPREPLY <pre> 7[0CTCPREPLY 7:15 <nick> 7] 0¤7 [0<address>7] 0¤7 [0<ctcp> 7:15 <text>7]

SERVERERROR <pre> 7[0CTCP 7:15 <text> 7]

NOTICESERVER <pre> 7[0 <server> 7]0 <text>
NOTICE 7[0Notice from <nick>7] <text>
NOTICECHAN 7[0<nick> 7:15 <chan>7] <text>
NOTIFY <pre> 7[0Notify7] 0¤7 [0<nick> <parentext> is Online7] 

UNOTIFY <pre> 7[0Notify7] 0¤7 [0<nick> <parentext> is Offline7]

DNS <pre> 7[0DNS7] 0¤7 [0Looking up <address>7]
DNSERROR <pre> 7[0ERROR7] 0¤7 [0Unable to resolve 7:15 <naddress>7]
DNSRESOLVE <pre> 7[0DNS7] 0¤7 [0<naddress> 7:15 <raddress>7]

COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15,0
BASECOLORS 07,07,07,07
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11
raw.341 <pre> <nick> has been invited to <chan>
WHOIS !script orange.whois
raw.001 !script 
raw.002 !script
raw.003 !script
raw.005 !script
raw.311 !script 
raw.312 !script 
raw.317 !script 
raw.319 !script 
raw.301 0         ¤ 7[0Away 7:15 <text> 7]
raw.307 0         : ›11 Status 12:13 <nick> is a registered nickname 
raw.378 0         : ›11 Real Hostname 12:13 <text>
raw.318 14==7[0 End 7]14=========================================================
raw.254 0         ¤ 7[0Channels 7:15 <value>7]
raw.252 0         ¤ 7[0Operators 7:15 <value>7]
raw.265 0         ¤ 7[0Local users 7:15 N/A 7]0 ¤ 7[0Max 7:15 N/A 7]
raw.251 !script ustart.start
raw.266 !script uend.end
raw.255 !script
raw.253 !script 
raw.255 !script 
raw.305  Away:00 You are no longer marked as away
raw.306  Away:00 You are now marked as away
raw.313 !script %:echo 12         : ›11 IRCop 12:13 Yes $iif(%::text,12[13 <text> 12])
raw.332 !script default.topicis %::chan %::c1 %::text
raw.333 !script default.topicset %::chan %::c1 %::nick %::text
raw.302 <pre> 11Userhost 7:15 <nick>!<address> 12[ 11<value> 12]
raw.341 <pre> 11<nick>11 was invited to join 13<chan>
raw.324 !script default.modes %::chan %::c1 %::modes
raw.352 !script blue.who
raw.315 <pre> 7[0End of /who for <value> 7]
raw.375 !script
raw.376 14==7[0End of /motd 7]14=======================================================
raw.391 <pre> 7[0Server time 7:15 <text> 7]
raw.401 0¤7 7[0ERROR7] 0¤7 7[0<nick> 7:15 No such nick7]
raw.403 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 No such channel7]
raw.404 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 Cannot send to channel7]
raw.406 0¤7 7[0ERROR7] 0¤7 7[0<nick> 7:15 There was no such nick7]
raw.421 !script %:echo 0¤7 7[0ERROR7] 0¤7 7[ $+(0,/,$lower(%::value)) 7:15 Unknown command7]
raw.432 0¤7 7[0ERROR7] 0¤7 7[0<nick> 7:15 Erroneus Nickname7]
raw.433 0¤7 7[0ERROR7] 0¤7 7[0<nick> 7:15 nick already in use7] 
raw.441 0¤7 7[0ERROR7] 0¤7 7[0<nick> is not on 7:15 <chan>7]
raw.442 0¤7 7[0ERROR7] 0¤7 7[0You're not on 7:15 <chan>7]
raw.443 0¤7 7[0ERROR7] 0¤7 7[0<nick> is already on 7:15 <chan>7]
raw.467 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 Cannot join, key required7] 0¤7 [0+k7]
raw.471 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 Cannot join, channel is full7] 0¤7 [0+l7]
raw.473 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 Cannot join, invite required7] 0¤7 [0+i7]
raw.474 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 Cannot join, you're banned7] 0¤7 [0+b7]
raw.475 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 Cannot join, key required7] 0¤7 [0+k7]
raw.482 0¤7 7[0ERROR7] 0¤7 7[0<chan> 7:15 you're not channel operator7]
raw.other <pre> 13<text>
raw.353 !script MaG.names
raw.366 !script MaG.endnames
raw.329 !script default.created %::chan %::c1 %::text
CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 15
CLINEOWNER 00
CLINEENEMY 04
CLINEFRIEND 07
CLINEME 00
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular -
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
NOTICESELF 7[0Sending notice to <nick> 7]0 <text>
NOTICESELFCHAN -> <chan> <text>
scheme1 TimeStamp off


[scheme1]
BASECOLORS 07,07,07,07

TIMESTAMP off
TIMESTAMPFORMAT 7[15 $+ HH $+ 0:15 $+ nn $+ 0:15 $+ ss $+ 7]

