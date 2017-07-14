[MTS]
NAME (SuX!); Esuo
AUTHOR Sh0w_BaR
EMAIL sh0w_bar@scriptingx.com
DESCRIPTION A first theme of the (SuX!); TeaM
WEBSITE http://www.scriptingx.com
MTSVERSION 1.1
VERSION 1.0

SCRIPT esuo.mrc
PREFIX 7•••
PARENTEXT 14[15<text>14]
TIMESTAMP ON
TIMESTAMPFORMAT (12hh:nn)
UNLOAD <pre> 12(11SuX13!12)13; 11Esuo 12Unloaded 13! 12Created by 11Sh0w_BaR
LOAD <pre> 12(11SuX13!12)13; 11Esuo 12Loaded 13! 12Created by 11Sh0w_BaR
CTCPSELF <pre> 12Ctcp: 11<nick> 12(11<ctcp>12)(11<text>12)
CTCPCHANSELF <pre> 12Ctcp: 11<chan> 12(11<ctcp>12)(11<text>12)
CTCPREPLYSELF <pre> 12Ctcp: 11<chan> 12(11<ctcp>12)(11<parentext>12)
MODE <pre> 12Modes13: 11<nick> 12sets mode13: 11<modes>
JOIN <pre> 12Join13: 11<nick> 12(11<address>12)
JOINSELF <pre> 12Joining in 12(11<chan>12)12...13! 
PART <pre> 12Parts13: 11<nick> 12(11<address>12) 15<parentext>
TEXTCHAN  12(11<cmode><nick>12) 11<text>
TEXTQUERY 12(11<nick>12) 11<text>
TEXTCHANSELF 12(11<cmode><me>12) 11<text>
TEXTQUERYSELF 12(11<me>12) 11<text>
KICK <pre> 12Kick13: 11<knick> 12from13: 11<chan> 12was kicked by13: 11<nick> 12(11<text>12)
KICKSELF <pre> 12You've been kicked by13: 11<nick> 12from13: 11<chan> 12(11<text>12)
QUIT <pre> 12Quit13: 11<nick> 12(11<address>12) 14[15<parentext>14]
TOPIC <pre> 12Topic13: 11<nick> 12sets topic to13: 11<text>
NICK <pre> 12Nick13: 11<nick> 12is now known as 11<newnick>
MODEUSER <pre> 12Modes13: 11<modes>
INVITE <pre> 12Invite13: 11<nick> 12has invited you to join 11<chan>
NICKSELF <pre> 12You are now known as 11<newnick>

CTCP <pre> 12Received CTCP from13: 11<nick> 12(11<ctcp>12)(11<parentext>12)
CTCPCHAN <pre> 12CTCP from13: 11<nick> 12(11<ctcp>12)(11<parentext>12)
CTCPREPLY !script ctcp.rep %::nick %::CTCP %::text
SERVERERROR <pre> 14Error13: 11<text>
NOTICESERVER <pre> 12Notice13: 12(11<nick>12) 11<text>
NOTICE <pre> 12Notice13: 12(11<nick>12) 11<text>
NOTICECHAN <pre> 12Notice13: 12(11<nick>12) 12(11<chan>12) 11<text>
NOTICESELF <pre> 12(11<nick>12) 11<text>
NOTICESELFCHAN <pre> 12(11<chan>12) 11<text>
NOTIFY <pre> 11<nick> 12it's Online 13- 12Info13: 12(11<address>12)
UNOTIFY <pre> 11<nick> 12it's Offline 13- 12Info13: 12(11<address>12)
DNS <pre> 12Up13: 11<address>
DNSERROR <pre> 12Unable to resolve 12(11<iaddress>12)(11<naddress>12)
DNSRESOLVE <pre> 12Resolved13: 11<naddress> 2<iaddress> 12to 2<raddress>
ACTIONCHAN <pre> 12<cmode> 11<nick> 2<text>
ACTIONQUERY <pre> 12<nick> 11<text>
ACTIONCHANSELF <pre> 12<cmode> 2<me> 11<text>
ACTIONQUERYSELF <pre> 12<me> 11<text>

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>

CLINEOP 0
CLINEHOP 14
CLINEVOICE 11
CLINEREGULAR 5
CLINEOWNER 13
CLINEENEMY 4
CLINEFRIEND 8
CLINEME 7
CLINECHAROP 11@
CLINECHARHOP 11%
CLINECHARVOICE 11+
CLINECHARREGULAR 0

Colors 1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,11,1,11,11,11,1
RGBColors 255,252,255 0,0,0 0,0,144 0,140,0 255,0,0 128,0,0 160,0,160 255,124,0 255,252,0 0,244,0 0,140,144 0,100,255 0,0,255 0,0,104 128,124,128 208,204,208
BaseColors 01,02,04,03
FONTDEFAULT Tahoma,11
FONTCHAN Tahoma,11
FONTQUERY Tahoma,11

RAW.311 !script g.whois %::nick %::address %::realname
RAW.318 !script e.whois
RAW.319   <pre> 12Channels13: 12(11<chan>12)
RAW.312   <pre> 12Server13: 12(11<wserver>12)
RAW.317   <pre> 12IDLE13: 12(11<idle> seconds12)
RAW.301   <pre> 12Away13: 12(11<text>12)
RAW.313   <pre> 12TypeUser13: 12(11<ircop> an IRC Operator12)
RAW.307   <pre> 12Registered Nick13: 12(11<nick>12)
RAW.314   <pre> 12Whowas13: 12(11<nick>12)12(11<adress>12)13: 11<text>
RAW.381   <pre> 15You are now a IRC Operator <me> - [<address>]
RAW.401   <pre> 12No such nickname13: 12(11<nick>12)
RAW.403   <pre> 12No such nickname13: 12(11<chan>12)
RAW.404   <pre> 12Unable to send message's to13: 12(11<chan>12)

RAW.324 !script t.mode %::modes
RAW.471 <pre> 12Can't join13: 11<chan> 12(11its full +l12)
RAW.473 <pre> 12Can't join13: 11<chan> 12(11its invite only +i12)
RAW.474 <pre> 12Can't join13: 11<chan> 12(11you're banned +b12)
RAW.467 <pre> 12Can't join13: 11<chan> 12(11requires key +k12)
RAW.482 <pre> 12<chan>13: 11You're not an operator.
RAW.332 <pre> 12Topic13: 12"11<text>12"
RAW.333 <pre> 12Set by13: 11<nick> 12on 11<text>
RAW.433 <pre> 12Nickname 11<nick> 12is already in use13..
RAW.315 <pre> 12End of 11/WHO 12list for 11<value>
RAW.250 <pre> 12Total connection(s)13: 12(11<value>12)
RAW.251 <pre> 12Users13: 12(11<users>12) 12Invisible13: 12(11<value>12)
RAW.252 <pre> 12Operator(s) online13: 12(11<value>12)
RAW.253 <pre> 12Unknow connections13: 12(11<value>12)
RAW.254 <pre> 12Number of channels formed13: 12(11<value>12)
RAW.255 <pre> 12Local clients13: 11<users> 12on13: 11<value> 12server(s)
RAW.302 <pre> 12Userhost13: 11<nick> 12(11<address>12)
RAW.265 <pre> 12Local users13: 11<users> 12Max13: 11<value>
RAW.266 <pre> 12Global Users13: 11<users> 12Max13: 11<value>
RAW.391 <pre> 12Date13: 11<date>
RAW.421 <pre> 12Invalid Command13: 11<text>
NAMES <pre> 12Names13: 12(<chan>12) 11<text>
NOTONCHAN <pre> 12You're not on a 11channel 12please enter to one13...