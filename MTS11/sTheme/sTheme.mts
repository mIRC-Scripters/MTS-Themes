[mts]
NAme sTheme
AuTHOR Dallas
EMAIL Icebreaker006@hotmail.com
DESCRIPTION sScipts main theme
WEBSITE none
MTSVERSION 1.1
VERSION 1.0
PREFIX 1=4=1=1
TIMESTAMP ON
TIMESTAMPFORMAT 04[01hh04:01nn04:01ss04]
Script stheme.mrc
FONTDEFAULT Tahoma,10
FONTCHAN Tahoma,10
FONTQUERY Tahoma,10
COLORS 0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1
BaseColors 15,15,15,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
LOAD <pre> sTheme loaded
scheme1 Orange
scheme2 Blue
Scheme3 Black


QUIT <pre> Quit4:1 <nick> 4[01<address>4/01<text>4]
JOIN <pre> Join4:1 <nick> 4[01<address>4/01<chan>4]
JOINSELF <pre> You have landed in4:1 <chan>
PART <pre> Part4:1 <nick> 4[01<address>4/01<chan>4]

MODE <pre> Mode4:1 4[01<nick> <modes>4]

KICK <pre> Kick4:1 <nick> 4[01<knick>4/01<text>4]
KICKSELF <pre> Kicked4:1 <nick> 4[01<knick>4/01<text>4]

TOPIC <pre> Topic: 4[01<nick>4/01<text>4]
NICK <pre> Nick4:1 4[01<nick>4/01<newnick>4]
NICKSELF <pre> You are now know as4:1 <nick>
MODEUSER <pre> Modes set4:1 7<modes>
INVITE <pre> 7<nick>1 invites you to 7<chan>

TEXTCHAN 4[01<cmode>1<nick>4]01 <text>
TEXTQUERY 4[01<nick>4]01 <text>
TEXTCHANSELF 4[01<cmode>1<me>4]01 <text>
TEXTQUERYSELF 4[01<me>4]01 <text>
ACTIONCHAN 4!01<cmode>1<nick>4:1 <text>
ACTIONQUERY 4!01<nick>4:1 <text>
ACTIONCHANSELF 4!01<cmode>1<me>4:1 <text>
ACTIONQUERYSELF 4!01<me>4:1 <text>

Ctcp <pre> ctcp4:1 <nick> 4[01<ctcp>4/01<text>4]
CtcpChan <pre> ctcp4:1 <nick>4@01<chan> 4[01<ctcp>4/01<text>4]
CtcpSelf <pre> ctcpsent4:1 <nick> 4[01<ctcp>4]
CtcpChanSelf <pre> ctcpsent4:1 <chan> 4[01<ctcp>4]
CtcpReply <pre> ctcpreply4:1 <nick> 4[01<ctcp>4/01<text>4]
CtcpReplySelf <pre> ctcpreply4:1 <nick> 4[01<ctcp>4/01<text>4]

SERVERERROR <pre> Servererror4:1 <text>

NOTICESERVER <pre> 4[01<nick>4] <text>
NOTICE <pre> 4[01<nick>4] <text>
NOTICECHAN <pre> 4[01<nick>4/01<chan>4] <text>
NOTICESELF <pre> 4[01<nick>4] <text>
NOTICESELFCHAN <pre> 4[01<nick>4/01<chan>4] <text>

NOTIFY <pre> 4[01<nick>4/01online4]
UNOTIFY <pre> 4[01<nick>4/01offline4]

DNS <pre> 4[01DNS4/01<address>4]
DNSERROR <pre> Unable to resolve4:1 <address>
DNSRESOLVE <pre> DNS Resolved4:1 4[01<naddress>4/01<raddress>4]

raw.311 !Script stheme.whois1
raw.319 !Script stheme.whois4
raw.317 !Script stheme.whois2
raw.312 !Script stheme.whois3
raw.301 !Script stheme.whois5
raw.313 !Script stheme.whois6
raw.318 !Script stheme.whois7

raw.314 <pre> <nick> was <address> 4»01 <realname>
raw.251 <pre> Connected4:1 <server> Users4:1  <users> 4»01 Invisible4:11 <text> Servers4:1 <value>
raw.252 <pre> Operators online4:1 <value> 
raw.253 <pre> Unknown connections4:1 <value>
raw.254 <pre> Channels formed4:1 <value>
raw.255 <pre> Clients4:1 <users>
raw.332 <pre> Topic4:1 <text>
raw.333 <pre> Topic set by4:1 <nick>
raw.324 <pre> Modes4:1 <modes>
raw.352 <pre> <chan> <nick> 00is 9<address> (<realname>)
raw.329 !Script %:echo %::pre Created on4:1 $asctime(%::text,ddd) $+ , $asctime(%::text,mm/dd) $+ $asctime(%::text,/yyyy) 4@1 $asctime(%::text,h:nntt)
raw.305 <pre> You are now4:1 Back 
raw.306 <pre> You are now4:1 Away
raw.401 <pre> No such nick4:1 <nick>
raw.403 <pre> No suck chan4:1 <chan>
raw.404 <pre> Cannot send4:1 <text> to4:1 <chan>
raw.405 <pre> Cannot join4:1 <chan> Your on to many
raw.406 <pre> /Whowas error4:1 no such nick4:1 <nick>
raw.421 <pre> No commands for4:1 /<value>
raw.432 <pre> Invalid nickname4:1 <nick>
raw.433 <pre> Nickname already in use4:1 <nick>
raw.436 <pre> Nickname collision with4:1 nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again
raw.439 <pre> Nickname changed too fast, please wait a while and try again
raw.441 <pre> <nick> is not on4:1 <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on4:1 <chan>
raw.461 <pre> More parameters needed for4:1 <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan>4:1 neet +k key
raw.471 <pre> Cannot join <chan>4:1 Full +l
raw.472 <pre> Unknown character4:1 <text>
raw.473 <pre> Cannot join <chan>4:1 You must be invited +i
raw.474 <pre> Cannot join <chan>4:1 Your ban +b
raw.475 <pre> Cannot join <chan>4:1 Incorect key
raw.478 <pre> Cannot ban <text>4:1 Banlist is full
raw.482 <pre> You're not a channel operator on4:1 <chan>
raw.511 <pre> You're /silence list is full.


[scheme1]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 255,90,20 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208

[scheme2]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 0,0,255 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208

[scheme3]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,148,0 0,0,0 128,0,0 160,0,160 255,100,25 255,255,0 0,255,0 0,148,144 0,255,255 0,0,255 255,0,255 128,128,128 208,212,208
