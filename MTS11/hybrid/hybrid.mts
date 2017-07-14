; jeffs w0rld scripting errr someting like that
; this is my theme and stuff
[mts]
NAME Hybrid
AUTHOR drevele
EMail jeff@Jeffsworld.net
Website http://www.jeffsworld.net/
Description hybrid 4 ever!
Version 1.0
MTSVersion 1.1
Script hybrid.mrc
 
TIMESTAMP ON
TIMESTAMPFORMAT [hh:nn]
 
COLORS 01,02,02,02,2,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,01,07,01,02,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
 
FONTDEFAULT fixedsys,11
FONTQUERY fixedsys,11
FONTCHAN fixedsys,11
 
CLineOwner 02
CLINEOP 02
CLINEHOP 04
CLINEVOICE 02
CLINEREGULAR 02
CLINEME 04
CLINEFRIEND 02
CLINEENEMY 00
CLineIrcOp 09
CLINEOWMER 01
 
CLineCharOwner 04.
CLineCharOP 04.
CLineCharHOP 00%
CLineCharVoice 04+
 
Prefix 9[11!9]12
PARENTEXT (<text>)
 
TextChan 9(11<cmode><nick>9)0-> <text>
TextChanSelf 2[11<cmode><nick>2]0-> <text>
ActionChan 9(11*9) <nick> <text>
ActionChanSelf 2[11*2]7 <nick> <text>
NoticeChan 12notice nick9(11<nick>9)12 to9(11<target>9) 12msg9(11<text>9)
Notice <pre> 12notice from9(11<nick>9) 12msg9(4<text>9)
NoticeSelf <pre> 12notice sent to9(11<nick>9) 12msg9(4<text>9)
NoticeSelfChan <pre> 12notice sent to9 (11<chan>9) 12msg9(4<text>9)
TextQuery 9(11<nick>9)0-> <text>
TEXTQUERYSELF 2[11<nick>2]0-> <text>
ActionQuery 9(11*9) <nick> <text>
ActionQuerySelf 2[11*2]7 <nick> <text>
TextMsg 9(11<nick>9)0-> <text>
TextMsgSelf 2[11<nick>2]0-> <text>
 
Mode <pre> 12nick9(11<nick>9)12 sets mode(s)9(11<modes>9)
ModeUser <pre> 12mode change9(11<modes>9)
Join <pre> 12join9(11<nick>!<address>9)12 chan9(11<chan>9)
JoinSelf <pre> 12you joined9(11<chan>9)
Part !Script hy.part
Kick <pre> 12kicker9(11<nick>9) 12kicked9(11<knick>9)12 reason9(11<text>9)
KickSelf <pre> 12you were kicked from9(11<chan>9)12 by9(11<nick>9)12 reason9(11<text>9)12 go kick there ass dude!
Quit <pre> 12nick9(11<nick>9)12 has quit reason9(11<text>9)
Topic <pre> 12the topic in9(11<chan>9)12 is now9(11<text>9)12 set by9(11<nick>9)
Nick <pre> 12nick9(11<nick>9)12 has changed there nick to9(11<newnick>9)
NickSelf <pre> 12your nick is now9(11<newnick>9)
Invite <pre> 12you have been invited to9(11<chan>9)12 by9(11<nick>9)
ServerError <pre> 12server error9(11<text>9)
Rejoin <pre> 12attempting to rejoin9(11<chan>9)
Ctcp <pre> 12ctcp from9(11<nick>9)12 text9(11<ctcp>/<text>9)
CtcpChan <pre> 12ctcp from9(11<nick>9)12 text9(11<ctcp>/<text>9)12 chan9(11<chan>9)
CtcpSelf <pre> 12ctcp sent to9(11<nick>9)12 msg9(11<ctcp>/<text>9)
CtcpChanSelf <pre> 12ctcp sent to9(11<chan>9)12 msg9(11<ctcp>/<text>9)
CtcpReply <pre> 12ctcp reply from9(11<nick>9)12 msg9(11<ctcp>/<text>9)
CtcpReplySelf <pre> 12ctcp reply sent to9(11<nick>9)12 msg9(11<ctcp>/<text>9)
Notify <pre> 12nick9(11<nick>9)12 is on irc note9(11<text>9)
UNotify <pre> 12nick9(11<nick>9)12 has left irc note9(11<text>9)
Wallop <pre> 12wallop nick9(11<nick>9)12 text9(12<text>9)
NoticeServer 12server9(11<nick>9)12 msg9(11<text>9)
 
DNS <pre> 12looking up9(11<nick><address>9)
DNSError <pre> error unable to look up9(11<nick><address>9)
DNSResolve <pre> 12resolved9(11<address><nick>9)12 to9(11<raddress>9)
Echo <pre> 12<text>
EchoTarget <pre> 9(11<target>9)12 <text>
Error <pre> 12error9(11<text>9)
Load <pre> 12sweet! kick ass! Hybrid Theme Loaded!
UNLOAD <pre> hybrid unloaded u bastard lol jk
 
RAW.311 !Script hy-whois %::nick %::address %::realname
RAW.314 !Script hy-whowas %::nick %::address %::realname
RAW.319 <pre> 12channels9(11<chan>9)
RAW.312 <pre> 12server9(11<wserver>9)12 info9(11<serverinfo>9)
RAW.301 <pre> 12away9(11<text>9)
RAW.307 <pre> reged nick9(12<isreged>9)
RAW.313 !Script hy.isoper-whois
RAW.317 <pre> 12idel9(11<idletime> seconds9)
RAW.318 !Script hy-endwhois
RAW.369 !Script hy-endwhowas
 
RAW.001 !Script coninfo
RAW.002 <pre> 12server9(11<server>9)12 version9(11<value>9)
RAW.003 <pre> 12server created on9(11<value>9)
RAW.005 <pre> 12protocols suported9(11<text>9)
RAW.221 <pre> 12user modes9(11<modes>9) 12for9(11<nick>9)
RAW.250 <pre> 12total connections9(11<value>9)
RAW.251 <pre> 12users9(11<users>9) 12invisible users9(11<text>9) 12servers9(11<value>9)
RAW.252 <pre> 12opers9(11<value>9)
RAW.253 <pre> 12unknown connections9(12<value>9)
RAW.254 <pre> 12number of channels9(11<value>9)
RAW.255 <pre>12local clients9(11<users>9)12 global clients9(11<value>9)
RAW.265 <pre> 12local users9(11<users>9)12 local users max9(11<value>9)
RAW.266 <pre> 12global users9(11<users>9)12 global user max9(11<value>9)
RAW.302 <pre> 12user host9(11<nick>!<address><value
RAW.315 <pre> 12end of who9(11<value>9)
RAW.324 <pre> 12channel modes9(11<modes>9)
RAW.332 <pre> 12topic of9(11<chan>9)12 is9(11<text>9)
RAW.333 <pre> 12topic set by9(11<nick>9)12 on9(11<text>9)
RAW.341 <pre> 12invited9(11<nick>9)12 to9(11<chan>9)
RAW.352 <pre> 12nick9(11<nick>@<address>9)12 channels9(11<chan>9)12 server9(11<wserver>9)
RAW.353 <pre> 12users9(11<text>9)
RAW.366 <pre> 12end of names list in9(11<chan>9)
RAW.372 <pre> <text>
RAW.375 <pre> 12start of motd
RAW.376 <pre> 12end of motd
RAW.391 <pre> 12time/date9(11<text>9)
 
RAW.401 <pre> 12no such nick9(11<nick>9)
RAW.403 <pre> no such chan9(11<chan>9)
RAW.404 <pre> 12cant send msg
RAW.421 <pre> 12bad command9(11<value>9)
RAW.432 <pre> 12invalid nick9(11<nick>9)
RAW.433 <pre> 12the nick9(11<nick>9) is in use
RAW.471 <pre> 12the chan9(11<chan>9)12 is all fulled up
RAW.473 <pre> 12the chan9(11<chan>9) is invite only!
RAW.474 <pre> 12your baned from9(11<chan>9)12 so you cant join
RAW.475 <pre> 12the chan9(11<chan>9)12 needs the key
RAW.482 <pre> 12Hey Forget Someting? Yea Your @ Go Get One Sucka
 
TIMESTAMPFORMAT [hh:nn]
TIMESTAMP ON
RAW.329 !Script ;kida like haltdef line just so it dosent display some stupid line of #
 
[sheme2]
FONTDEFAULT Verdana,12
FONTQUERY Verdana,12
FONTCHAN Verdana,12
 
