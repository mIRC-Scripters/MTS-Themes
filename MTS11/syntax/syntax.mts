[mts]
NAME syntax!
AUTHOR sphere/Tig0ti
EMAIL tig0ti@terra.es
DESCRIPTION syntax!v4 script's theme, ported to MTS by Tig0ti. 
SCRIPT syntax.mrc
WEBSITE http://fractal.irc-scripts.com
MTSVERSION 1.1
VERSION 2.0
SCHEME1 Ice
SCHEME2 Blood
SCHEME3 Fusion
SCHEME4 Angel
TIMESTAMP OFF
PREFIX  14>15>07>
PARENTEXT 07(14<text>07)
LOAD <pre> 14[syntax!v4] theme loaded
UNLOAD <pre> 14[syntax!v4] theme unloaded
CTCPSELF 14* <c1>[14ctcp<c1>/15<nick><c1>]14 <ctcp> <text>
CTCPREPLYSELF 14* <c1>[14ctcp<c1>/15<nick><c1>]14 <ctcp> <text>
MODE <pre> <c1>[14mode<c1>/15<chan><c1>]14 <nick><c1>(15<modes><c1>)
JOIN <pre> <c1>[14join<c1>/15<chan><c1>]14 <nick><c1>(15<address><c1>)
JOINSELF !script _onjoin.chan %::chan 
PART <pre> <c1>[14part<c1>/15<chan><c1>]14 <nick><c1>(15<address><c1>) <parentext>
TEXTCHAN <c1><lt>14<cmode>15<nick><c1>> <text>
TEXTQUERY <c1><lt>15<nick><c1>> <text>
KICK <pre> <c1>[14kick<c1>/15<chan><c1>]14 <nick> <c1>>15 <knick> <parentext>
KICKSELF <pre> <c1>[14kick<c1>/15<chan><c1>]14 <nick> <c1>>15 <me> <parentext>
QUIT <pre> <c1>[14quit<c1>/15<chan><c1>]14 <nick> <parentext>
TOPIC <pre> <c1>[14topic<c1>/15<chan><c1>]14 <nick> <c1>>15 <text>
NICK <pre> <c1>[14nick<c1>/15<chan><c1>]14 <nick> <c1>>15 <newnick>
TEXTCHANSELF <c1><lt>14<cmode>15<me><c1>> <text>
TEXTQUERYSELF <c1><lt>15<me><c1>> <text>
MODEUSER <pre> <c1>[14mode<c1>/15<me><c1>]14 <modes>
INVITE <pre> <c1>[14invite<c1>/15<nick><c1>]14 <chan>
NICKSELF <pre> <c1>[14nick<c1>/15<chan><c1>]14 <nick> <c1>>15 <newnick>
ACTIONCHAN 14ð15 <nick> 15<text>
ACTIONQUERY 14ð15 <nick> 15<text>
ACTIONCHANSELF 14ð15 <me> 15<text>
ACTIONQUERYSELF 14ð15 <me> 15<text>
CTCP 14<lt>- <c1>[14ctcp<c1>/15<nick><c1>]14 <ctcp> <text>
CTCPCHAN 14<lt>- <c1>[14ctcp<c1>/15<nick>:<chan><c1>]14 <ctcp> <text>
CTCPREPLY 14<lt>- <c1>[14ctcpreply<c1>/15<nick><c1>]14 <ctcp> <text>
SERVERERROR 14>15><c1>> 15error<c1>:14 <text>
NOTICESERVER <c1>-14<server><c1>-15 <text>
NOTICE <c1>-15<nick><c1>[14<address><c1>]-15 <text>
NOTICECHAN <c1>-15<nick><c1>[14<chan><c1>]-15 <text>
NOTIFY <pre> <c1>[14notify<c1>/15<nick><c1>]14 is on IRC
UNOTIFY <pre> <c1>[14notify<c1>/15<nick><c1>]14 has left IRC
DNSERROR <pre> <c1>[14dns<c1>/15<naddress><c1>]14 unable to resolve
DNSRESOLVE <pre> <c1>[14dns<c1>/15<naddress><c1>]14 <iaddress> 
COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,7,1,15,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 54,54,54 255,255,0 0,255,0 0,144,144 0,255,255 0,128,192 255,0,255 128,128,128 168,168,168
FONTDEFAULT Terminal,14
FONTCHAN Terminal,14
FONTQUERY Terminal,14
raw.311 !script _w.start %::nick %::address %::realname
raw.319 <c1>ÃÄÄ14>15 chan<c1>;15 <chan>
raw.312 <c1>ÃÄÄ14>15 serv<c1>;15 <server>
raw.301 <c1>ÃÄÄ14> away<c1>;15 <text>
raw.317 <c1>ÃÄÄ14> idle<c1>;15 <idletime>
raw.313 <c1>ÃÄÄ14> oper<c1>;15 yes
raw.318 <c1>ÀÄÄ 15ÄÄÄÄÄÄÄÄ 14ÄÄÄÄÄÄ<c1> ÄÄÄÄÄ 15Ä
raw.251 !script _lusers.start %::users %::text %::value
raw.252 <c1>³14 opersÿÿÿÿ<c1>:15 <value>
raw.253 !script haltdef
raw.254 <c1>³14 channelsÿ<c1>:15 <value>
raw.255 !script _lusers.end %::servers %::value
raw.332 14ÿ³<c1>t<c1>o15p14ic³0 <text>
raw.333 !script _end.topic %::chan %::nick
raw.324 !script haltdef
raw.329 !script haltdef
raw.305 !script haltdef
raw.306 !script haltdef
raw.353 <chan>: <text>
raw.366 <chan>: end of /names
raw.378 <c1>ÃÄÄ14> info<c1>;15 <text>
raw.401 <pre> 15error<c1>:14 <nick>, no such nick
raw.403 <pre> 15error<c1>:14 <chan>, no such channel
raw.404 <pre> 15error<c1>:14 cannot send to channel
raw.405 <pre> 15error<c1>:14 you're on too many channels
raw.421 <pre> 15error<c1>:14 <value>, unknown command
raw.432 <pre> 15error<c1>:14 <nick>, erroneus nickname
raw.433 <pre> 15error<c1>:14 <nick> is already in use
raw.436 <pre> 15error<c1>:14 nickname collision with <nick>
raw.441 <pre> 15error<c1>:14 <nick> is not on <chan>
raw.442 <pre> <c1> 15error<c1>:14 you're not on <chan>
raw.465 <pre> <c1> 15error<c1>:14 you're banned from this server!
raw.467 <pre> 15error<c1>:14 cannot join channel (+k)
raw.471 <pre> 15error<c1>:14 cannot join channel (+l)
raw.472 <pre> 05<text>02 is an unknown character
raw.473 <pre> 15error<c1>:14 cannot join channel (+i)
raw.474 <pre> 15error<c1>:14 cannot join channel (+b)
raw.475 <pre> 15error<c1>:14 cannot join <chan>, incorrect key
raw.478 <pre> 15error<c1>:14 <chan>'s banlist is full
raw.482 <pre> 15error<c1>:14 you're not an op in <chan>
raw.511 <pre> 15error<c1>:14 your silence list is full
CLINEOP 15
CLINEHOP 15
CLINEVOICE 15
CLINEREGULAR 15
CLINEOWMER 15
CLINEENEMY 15
CLINEFRIEND 15
CLINEME 15
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
IMAGEBUTTONS buttons.bmp
IMAGESTATUS center background.jpg
[scheme1]
BASECOLORS 12,14,15,7
PREFIX 14>15>12>
PARENTEXT <c1>(12<text>12)
[scheme2]
BASECOLORS 04,14,15,7
PREFIX 14>15>04>
PARENTEXT 04(14<text>04)
[scheme3]
BASECOLORS 09,14,15,7
PREFIX 14>15>09>
PARENTEXT 09(14<text>09)
[scheme4]
BASECOLORS 13,14,15,7
PREFIX 14>15>14>
PARENTEXT 13(14<text>13)
