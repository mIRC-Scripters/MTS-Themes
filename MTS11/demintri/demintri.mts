[mts]
NAME demintri
AUTHOR Tig0ti
EMAIL tig0ti@terra.es
DESCRIPTION ceelow's demintri script default theme.
SCRIPT demintri.mrc
WEBSITE http://fractalscript.com
MTSVERSION 1.1
VERSION 1.1
PREFIX 14Ä15-14-15
PARENTEXT 14[16<text>14]
TIMESTAMP OFF
TIMESTAMPFORMAT ùHH:NNù
LOAD demintri[+MTS]1.0. the new blood [type 00/demintri]
UNLOAD demintri[+MTS]1.0. unloaded14..
CTCPSELF 15ctcp14/16<nick>14:15 <ctcp> <text>
CTCPREPLYSELF 15ctcpreply14/16<nick>14:15 <ctcp> <text>
MODE <pre> 15mode14/16<chan>14..15 <nick>14:16<modes>
JOIN !script _demintri.join
JOINSELF <pre> you have entered the unknown14[15<chan>14]
PART !script _demintri.part
TEXTCHAN !script %:echo 14ù14 $+ %::cmode $+ 15 $+ %::nick $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::nick))) $+ 14ù15 %::text
TEXTQUERY !script %:echo 14ù15 $+ %::nick $+ $str($chr(255),$calc(10 - $len(%::nick))) $+ 14ù15 %::text
KICK <pre> 15kick14/16<chan>14..15 <nick>14:16<knick> <parentext>
KICKSELF <pre> 15kick14/16<chan>14..15 <nick>14:16<me> <parentext>
QUIT !script _demintri.quit
TOPIC <pre> 15topic14/16<chan>14..15 <nick>14:16<text>
NICK <pre> 15nickchange14/16irc14..15 <nick>14:16<newnick>
TEXTCHANSELF !script %:echo 14ù14 $+ %::cmode $+ 15 $+ %::me $+ $str($chr(255),$calc(10 - $len(%::cmode $+ %::me))) $+ 14ù15 %::text
TEXTQUERYSELF !script %:echo 14ù15 $+ %::me $+ $str($chr(255),$calc(9 - $len(%::me))) $+ 14ù15 %::text
MODEUSER <pre> <me> sets usermode 14[15<modes>14]
INVITE <pre> 14(15<address>14/15<chan>14>15 invite <nick>
NICKSELF <pre> 15nickchange14/16irc14..15 <me>14:16<newnick>
ACTIONCHAN <pre>16 <nick>15 <text>
ACTIONQUERY <pre>16 <nick>15 <text>
ACTIONCHANSELF <pre>16 <me>15 <text>
ACTIONQUERYSELF <pre>16 <me>15 <text>
CTCP <pre> 15ctcp14/16<ctcp> <text>14..15 <nick>14:16<address>
CTCPCHAN <pre> 15ctcp14/16<chan>14/16<ctcp> <text>14..15 <nick>14:16<address>
CTCPREPLY <pre> 15ctcpreply14/16<ctcp> <text>14..15 <nick>14:16<address>
SERVERERROR <pre> error16 <text>
NOTICE <pre> 14<14note14:15<nick>14[16<address>14]>15 <text>
NOTICECHAN <pre> 14<14note14:15<nick>14[16<address>14]>15 <text>
NOTICESELF 0> 15notice14[16<nick>14]15 <text>
NOTICESELFCHAN 0> 15notice14[16<chan>14]15 <text>
NOTIFY <pre> 15notify14..15 <nick>14:16<text>
UNOTIFY <pre> 15unotify14..15 <nick>14:16<text>
DNS <pre> 16d15ns ÿÿÿÿ16:15 <address>
DNSERROR <pre> 16r15esolve 16:15 unable to resolve
DNSRESOLVE <pre> 16r15esolve 16:15 <raddress>
COLORS 1,14,15,15,15,15,14,14,14,14,14,15,14,14,14,14,14,14,14,14,14,1,15,1,15,15
RGBCOLORS 255,255,255 0,0,0 0,72,136 72,164,80 255,88,80 184,64,32 144,0,168 88,92,88 232,240,64 120,236,128 80,168,176 120,228,232 96,104,255 224,28,255 136,136,136 192,192,192
FONTDEFAULT IBMPC,13
FONTCHAN IBMPC,13
FONTQUERY IBMPC,13
whois !script _demintri.whois
raw.332 !script return
raw.333 !script return
raw.324 !script return
raw.329 !script return
raw.305 <pre> 16y15ou are no longer marked as being away16..
raw.306 <pre> 16y15ou have been marked as being away16..
raw.401 <pre> 16n15o such user 14[15<nick>14]
raw.404 <pre> 16c15annot send to chan 14[15+m14]
raw.467 <pre> 16c15annot join <chan> 14[15+k14]
raw.471 <pre> 16c15annot join <chan> 14[15+l14]
raw.473 <pre> 16c15annot join <chan> 14[15+i14]
raw.474 <pre> 16c15annot join <chan> 14[15+b14]
raw.475 <pre> 16c15annot join <chan> 14[15+k14]
raw.353 !script _demintri.names
raw.366 !script _demintri.endnames
raw.327 <text>
raw.other <text>
CLINEOP 00
CLINEHOP 00
CLINEVOICE 15
CLINEREGULAR 14
CLINEOWMER 00
CLINEENEMY 14
CLINEFRIEND 14
CLINEME 00
CLineCharOwner 00.
CLineCharOP 00@
CLineCharHOP 00%
CLineCharVoice 15+
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
