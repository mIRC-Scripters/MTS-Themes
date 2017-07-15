[mts]
Name cIRC
Author CyRus
Email Vortexico@hotmail.com
Description cIRC Officiel Scheme
Website www.cIRC.be
Timestamp on
timestampformat HH<c2> . <c1>nn
Version 1.0
MTSVersion 1.1
PREFIX <c2>–<c1>›
FONTDEFAULT tahoma,10
FONTCHAN tahoma,10
FONTQUERY tahoma,10
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1
RGBCOLORS 255,255,255 64,91,134 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 197,209,222 60,60,60 64,91,134
LOAD <c1> c<c2>IRC<c1> Officiel Scheme
BaseColors 01,15,00,12
Script cIRC.mrc
scheme1  black-bg
scheme2  blue-bg
scheme3  green-bg
scheme4  orange-bg

CLINEIRCOP 15
CLINEOWNER 15
CLINEOP 15
CLINEHOP 15
CLINEVOICE 12
CLINEREGULAR 01
CLINEME 15
CLINEFRIEND 1
CLINEENEMY 1

NOTICESERVER <pre> <c1>Nserv <c2>[<c1><nick><c2>]<text>
NOTICE <pre> <c2>[<c1><nick><c2>] <text>
NOTICECHAN <pre> <c1>Nchan <c2>[<c1><nick><c2>><c1><chan><c2>] <text>
NOTICESELF <pre> <c2>[<c1><nick><c2>] <text>
NOTICESELFCHAN <pre> <c2>[<c1><chan><c2>] <text>
ACTIONCHAN <c3><c2>[<c1>›<c2>] <c2><cmode><c1><nick><c2>:<c1> <text>
ACTIONQUERY <c3><c2>[<c1>›<c2>] <c1><nick><c2>:<c1> <text>
ACTIONCHANSELF <c3><c2>[<c1>›<c2>] <c2><cmode><c1><me><c2>:<c1> <text>
ACTIONQUERYSELF <c3><c2>[<c1>›<c2>] <c1><me><c2>:<c1> <text>
KICK <pre> Kick<c1>:<c2> <nick> <c1>has kicked<c2> <knick> [<c1><text><c2>]
QUIT <c2><pre> <c1>Quit:<c2> <nick> <c1>has left IRC <c2>[<c1><address><c2>] <text>
JOIN <c2><pre> Join:<c2> <nick> <c1>has joined <c2>[<c1><address><c2>]
JOINSELF <c2><pre> Joined:<c2> [<c1><chan><c2>]
PART <c2><pre> Part: <c2><nick> <c1>has parted <c2><chan> [<c1><address><c2>] 
MODE <pre> Mode<c1>:<c2>[<c1><nick><c2>/<c1><modes><c2>]
KICKSELF <pre> Kick<c1>:<c2> <nick> <c1>has kicked<c2> <knick> [<c1><text><c2>]
TEXTCHAN <c3><c2><c3><c2><c2>. <cmode><c1><nick><c2><c2><c1><c2> <text>
TEXTQUERY <c3><c2><c3><c2><c1><nick><c2><c2>:<c1><c2> <text>
TEXTCHANSELF <c3><c2><c3><c2><c2>. <cmode><c1><me><c2><c2><c1><c2> <text>
TEXTQUERYSELF <c3><c2><c3><c2><c1><me><c2><c2>:<c1><c2> <text>
TOPIC  <pre> Topic<c1>: <c2><nick> <c1>change to<c2> [<c1><text><c2>]
NICK <c2>-<c1>› <c1>Nick<c1>:<c2> <nick> <c1>is now know<c2> <newnick>
NICKSELF <c2>-<c1>› <c1>Nick<c1>:<c2> <nick> <c1>is now know<c2> <newnick>
MODEUSER <c2>-<c1>› <c1>Modes set<c1>:<c2> <modes>
INVITE <pre> Invite<c1>:<c2> <nick> <c1>invite to you on<c2> <chan>
Ctcp <pre> Ctcp<c1>:<c2> <nick> <c1><ctcp> 
CtcpChan <pre> Ctcp<c1>:<c2> <nick>@<chan> <c1><ctcp> 
CtcpSelf <pre> Ctcp<c1>:<c2> <nick> <c1><ctcp> 
CtcpChanSelf<pre> Ctcp<c1>:<c2> <chan> <c1><ctcp> 
CtcpReply <pre> Reply<c1>:<c2> <nick> <c1><ctcp> <c2>[<c1><text><c2>]
CtcpReplySelf <pre> Reply<c1>:<c2> <nick> <c1<ctcp> <c2>[<c1><text><c2>]
SERVERERROR <c2>-<c1>› <c1>Error<c1>:<c2> <text>
NOTIFY <c2>-<c1>› <c1>Notify<c2>:<c1> <nick> is Online!
UNOTIFY <c2>-<c1>› <c1>Unotify<c2>:<c1> <nick> has left IRC.
DNS  <c2>-<c1>› <c1>DNS<c1>:<c2> <Address>
DNSERROR <c2>-<c1>› <c1>Unable to resolve<c1>:<c2> <address>
DNSRESOLVE <c2>-<c1>› <c1>DNS Resolved<c1>:<c2> <naddress> <raddress>
raw.311 !script  ex.user
raw.319 !script  ex.chans %::chan
raw.312 <c3>__<c1>Server<c2>:<c1> <wserver>
raw.301 !script ex.away
raw.317 !script ex.idle %::idletime 
raw.318 <c2>[<c1>/whois end<c2>]
raw.332 <pre> Topic: <c2><chan> :<c2><text>
raw.333 <pre> Topic by: <c2><nick> <c1>at: <c2><text>
raw.324 <pre> Mode of: <c2><chan> : <modes>
raw.421 <pre> Error: <value> Not executed
raw.403 <pre> Error: <chan> No such chan
raw.401 <pre> Error: <nick> doesn't exist
RAW.482 <pre> Error: You are not opérator on <chan>
RAW.474 <pre> Error: join <chan> is impossible you are banned
RAW.475 <pre> Error: join <chan> is impossible mode +k actived

[scheme1]
RGBCOLORS 0,0,0 0,128,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 197,209,222 60,60,60 0,128,255

[scheme2]
RGBCOLORS 16,70,109 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 197,209,222 60,60,60 99,187,235

[scheme3]
RGBCOLORS 21,104,78 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 197,209,222 60,60,60 117,217,167

[scheme4]
RGBCOLORS 242,124,85 255,255,255 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 143,143,143 197,209,222 60,60,60 249,223,189