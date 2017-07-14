[mts]
Name focalize²
Author arround	
Email spIRC@fr.fm
Description a sheme of focalize script
Website
Version 1.2
MTSVersion 1.1
PREFIX <c2>-<c1>-
Timestamp ON
TIMESTAMPFORMAT <c2>(<c1>hh<c1>:<c1>nn<c2>)
FONTDEFAULT verdana,9
FONTCHAN verdana,9
FONTQUERY verdana,9
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1
RGBCOLORS 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 0,175,255
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> default
BaseColors 01,15,00,12
Script focalize.mrc
scheme1 Grum
scheme2 Nossy
scheme3 Shin
scheme4 Nossy Light
scheme5 Nossy Dark
scheme6 Erony
scheme7 Cream
scheme8 Mae

CLINEIRCOP 15
CLINEOWNER 15
CLINEOP 15
CLINEHOP 15
CLINEVOICE 12
CLINEREGULAR 01
CLINEME 15
CLINEFRIEND 1
CLINEENEMY 1

NOTICESERVER - <c1>Nserv <c2>(<c1><nick><c2>)<text>
NOTICE - <c2>(<c1><nick><c2>) <text>
NOTICECHAN - <c1>Nchan <c2>(<c1><nick><c2>/<c1><chan><c2>) <text>
NOTICESELF - <c2>(<c1><nick><c2>) <text>
NOTICESELFCHAN - <c2>(<c1><nick><c2>/<c1><chan><c2>) <text>
ACTIONCHAN <c1>• <c2><cmode><c1><nick><c2>:<c1> <text>
ACTIONQUERY <c1>• <c1><nick><c2>:<c1> <text>
ACTIONCHANSELF <c1>• <c2><cmode><c1><me><c2>:<c1> <text>
ACTIONQUERYSELF <c1>• <c1><me><c2>:<c1> <text>
KICK - <c1>Kick<c1>:<c2> <nick> <c1>has kicked<c2> <knick> (<c1><text><c2>)
QUIT <pre> <c1>Quit:<c2> <nick> <c1>has left IRC <c2>(<c1><address><c2>) <text>
JOIN <pre> Join:<c2> <nick> <c1>has joined <c2>(<c1><address><c2>)
JOINSELF <pre> Joined:<c2> <chan> 
PART <pre> Part: <c2><nick> <c1>has parted <c2><chan> (<c1><address><c2>) 
MODE - <c1>Mode<c1>: <c2>(<c1><nick><c2>/<c1><modes><c2>)
KICKSELF - <c1>Kick<c1>:<c2> <nick> <c1>has kicked<c2> <knick> (<c1><text><c2>)
TEXTCHAN <c2>(<c2><cmode><c1><nick><c2>)<c1> <text>
TEXTQUERY <c2>(<c1><nick><c2>)<c1> <text>
TEXTCHANSELF <c2>(<c2><cmode><c1><me><c2>)<c1> <text>
TEXTQUERYSELF <c2>(<c1><me><c2>)<c1> <text>
TOPIC  - <c1>Topic<c1>:<c2> <nick> <c1>change to<c2> (<c1><text><c2>)
NICK - <c1>Nick<c1>:<c2> <nick> <c1>is now know<c2> <newnick>
NICKSELF - <c1>Nick<c1>:<c2> <nick> <c1>is now know<c2> <newnick>
MODEUSER - <c1>Modes set<c1>:<c2> <modes>
INVITE - <c1>Invite<c1>:<c2> <nick> <c1>invite to you on<c2> <chan>
Ctcp - <c1>Ctcp<c1>:<c2> <nick> <c1><ctcp> 
CtcpChan - <c1>Ctcp<c1>:<c2> <nick>@<chan> <c1><ctcp> 
CtcpSelf - <c1>Ctcp<c1>:<c2> <nick> <c1><ctcp> 
CtcpChanSelf - <c1>Ctcp<c1>:<c2> <chan> <c1><ctcp> 
CtcpReply - <c1>Reply<c1>:<c2> <nick> <c1><ctcp> <c2>(<c1><text><c2>)
CtcpReplySelf - <c1>Reply<c1>:<c2> <nick> <c1<ctcp> <c2>(<c1><text><c2>)
SERVERERROR - <c1>Error<c1>:<c2> <text>
NOTIFY - <c1>Notify<c2>:<c1> <nick> is Online!
UNOTIFY - <c1>Unotify<c2>:<c1> <nick> has left IRC.
DNS  - <c1>DNS<c1>:<c2> <Address>
DNSERROR  - <c1>Unable to resolve<c1>:<c2> <address>
DNSRESOLVE  - <c1>DNS Resolved<c1>:<c2> <naddress> <raddress>
raw.311 !script spIRC.user
raw.319 !script spIRC.chans %::chan
raw.312 <c1>Server:<c2> <wserver>
raw.301 !script spIRC.away
raw.317 !script spIRC.idle %::idletime 
raw.318 1End_________________
raw.332 - <c1>Topic: <c2><chan> :<c2><text>
raw.333 - <c1>Topic by: <c2><nick> <c1>at: <c2><text>
RAW.324 - <c1>Mode of: <c2><chan> : <modes>
raw.421 - <c1>Error: <value> Not executed
raw.403 - <c1>Error: <chan> No such chan
raw.401 - <c1>Error: <nick> doesn't exist
RAW.482 - <c1>Error: You are not opérator on <chan>
RAW.474 - <c1>Error: join <chan> is impossible you are banned
RAW.475 - <c1>Error: join <chan> is impossible mode +k actived

[scheme1]
BaseColors 01,15,00
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 30,85,140
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Grum

[scheme2]
BaseColors 01,15,00
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 130,0,0
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Nossy

[scheme3]
BaseColors 01,15,00
RGBCOLORS 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 80,153,219
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Shin

[scheme4]
BaseColors 01,15,00
RGBCOLORS 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 255,81,81
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Nossy Light

[scheme5]
BaseColors 01,15,00
RGBCOLORS 0,0,0 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 166,0,0
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Nossy Dark

[scheme6]
BaseColors 01,15,00
RGBCOLORS 33,33,33 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 0,120,255
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Erony

[scheme7]
BaseColors 01,15,00
RGBCOLORS 33,33,33 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 245,241,214 
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Cream

[scheme8]
BaseColors 01,15,00
RGBCOLORS 33,33,33 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 255,0,255 60,60,60 244,170,57
LOAD  <c1>focalize<c2>² <c1> sheme:<c2> Mae