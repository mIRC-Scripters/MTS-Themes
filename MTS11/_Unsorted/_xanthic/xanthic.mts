[mts]
Name xanthic
Author syphonx
Email null06@hotmail.com
Description This is my new theme, hope you like it xD
Website http://xirc-s.cjb.net
Version 1.0
MTSVersion 1.1

Script xanthic.mrc

Timestamp ON
TimestampFormat 13(0HH13.0tt13)00

PARENTEXT (<text>)
raw.436 <pre> Nickname collision with: <nick>
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
PREFIX 13Error:00
raw.404 <pre> Cannot send text/data to: <chan>
raw.432 <pre> Invalid nickname: <nick>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.421 <pre> No such command: /<value>
raw.433 <pre> Nickname already in use: <nick>
QUIT <timestamp> 13Quits: 0<nick> 13(0<address>13) (0<text>13)
raw.406 <pre> Whowas on <nick> :: There was no such nick
raw.478 <pre> Cannot ban <text>. 13(00Ban List Full13)
raw.511 <pre> You're /silence list is full.
raw.440 <pre> Services are down, try again later.
NOTICESELF <timestamp> -> 08! 00<nick>13:00 <text>
raw.441 <pre> <nick> is not on <chan>
raw.465 <pre> Sorry, You're banned from this server.
ECHO <pre> <text>
SERVERERROR <pre> <text>
CTCPREPLY <timestamp> 13[00<nick> <ctcp> reply13]:00 <text>
raw.386 00Password Accepted13:00 <text>
raw.442 <pre> You're not on <chan>
raw.474 <pre> Cannot join <chan> 13(00You're Banned (+b)13)
ACTIONCHANSELF <timestamp> 08*13 <cmode>00<me>13:00 <text>
NOTICESELFCHAN <timestamp> -> 08!00 <nick>13/00<chan>13:00 <text>
raw.443 <pre> <nick> is already on <chan> <text>
raw.467 <pre> Cannot join <chan> 13(00Key Needed (+k)13)
raw.475 <pre> Cannot join <chan> 13(00Incorrect Key13)
raw.472 <pre> Unknown character: <text>
raw.461 <pre> More parameters needed for: <text>
raw.473 <pre> Cannot join <chan> 13(00Invite Only (+i)13)
CTCPREPLYSELF <timestamp> 13[00<nick> <ctcp> reply13]:00 <text>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
TEXTMSG <timestamp> 08<- 13(<cmode>00<nick>13)00 <text>
raw.391 0Server time13:00 <value>
raw.439 <pre> Target changed too fast, please wait a while and try again...
raw.471 <pre> Cannot join <chan> 13(00Limit Reached (+l)13)
NOTIFY <timestamp> 13..00Notify13:08 <nick> 00is now online
DNS 13..00Dns13:00 Attempting to resolve8 <address>
raw.252 !script
raw.328 !script
raw.372 !script
ACTIONQUERYSELF <timestamp> 08*13 00<me>13:00 <text>
raw.001 00Welcome to the13:00 <text> network
raw.253 !script
raw.265 !script
raw.329 !script
ACTIONCHAN <timestamp> 08*13 <cmode>00<nick>13:00 <text>
raw.002 0Host13:00 <address>
raw.250 !script
raw.266 !script
raw.482 <pre> You're not a channel operator on <chan>
raw.003 00Created13:00 <value>
raw.251 !script default.lusersinit %::chan %::users %::text
raw.371 13!00 <text>
TEXTCHAN <timestamp> 13(<cmode>00<nick>13)00 <text>
raw.004 !script
raw.256 13/00admin 13(00Administrative Information13):
raw.352 !script
raw.364 00Link13:00 <text>
raw.376 !script
raw.005 !script
raw.257 13!00 <text>
raw.341 Invite13:00 <nick> has been invited to <chan>
raw.353 !script
raw.006 !script
raw.254 Lusers 13(00<value>13)00 channel(s) formed
raw.318 !script default.whoisend
raw.366 !script default.users %::chan
raw.374 00end of 13/00info 13(00Server Information13)
ACTIONQUERY <timestamp> 08*13 00<nick>13:00 <text>
raw.007 !script
raw.255 !script default.lusersend %::users %::value
raw.319 13..00Channels13:00 <chan>
raw.375 !script
raw.332 !script default.topicinit %::text
raw.213 !script
raw.305 Away13:00 You are no longer marked as away
raw.317 !script default.whoisidle %::idletime %::signontime
raw.333 13››00 Set by13:00 <nick> on <text>
raw.258 13!00 <text>
raw.306 0Away13:00 You are now marked as away
raw.314 00Name13:00 <realname> 00Host13:00 <address>
UNOTIFY <timestamp> 13..00Notify13:08 <nick> 00is now offline
raw.259 !script default.adminend
raw.307 13..00Identified13:00 <isreg>
raw.315 !script
raw.323 end of 13/00list 13(00Listing Channels13)
MODE <timestamp> 00<nick> set <chan> modes13: (00<modes>13)
KICKSELF <timestamp> 13..00You have been kicked from13:00 13(00<chan>13)00 by 13(00<nick>13) (00<text>13)
NICK <timestamp> 00<nick> is now13:00 <newnick>
raw.312 13..00Server13:00 <wserver>
raw.324 !script default.mode %::modes
LOAD !script default.load xanthic
raw.301 13..00Away13:00 <text>
raw.302 !script
NOTICESERVER !script
raw.311 !script default.whoisinit %::nick %::address %::realname
CTCP <timestamp> 13[00<nick> <ctcp>13]00 <text>
MODEUSER 13..00Usermode for <me>13:00 <modes>
NOTICE <timestamp> 08!00 <nick>13:00 <text>
TEXTMSGSELF <timestamp> 08-> 13(<cmode>00<nick>13)00 <text>
CTCPSELF <timestamp> 08-> 13[00<nick>13]00 <ctcp> <text>
TEXTQUERYSELF <timestamp> 13(00<me>13)00 <text>
DNSERROR 13..0Dns13:00 <nick>13:00 Unable to resolve 13(00<iaddress><naddress>13)00
JOINSELF !script default.join %::chan
CTCPCHANSELF <timestamp> 08-> 13[00<chan>13]00 <ctcp>
CTCPCHAN <timestamp> 13[00<nick>13:00<chan> <ctcp>13]00 <text>
DNSRESOLVE 13..00Dns <nick>13:00 ip 13(00<iaddress>13)00 named 13(00<naddress>13)00 resolved 13(00<raddress>13)00
TEXTCHANSELF <timestamp> 13(<cmode>00<me>13)00 <text>
INVITE <timestamp> 00Invite13:00 <nick> 13-00 has invited you to 13(00<chan>13)
ECHOTARGET <pre> <text>
ERROR <pre> <text>
PART <timestamp> 13Parts: 13(00<chan>13) 00<nick> 13(00<address>13)
TEXTQUERY <timestamp> 13(00<nick>13)00 <text>
JOIN <timestamp> 13Joins: 13(00<chan>13) 00<nick> 13(00<address>13)
KICK <timestamp> 13(00<chan>13)00 <nick> kicked 13(00<knick>13) (00<text>13)
NOTICECHAN <timestamp> 08!00 <nick>13/00<chan>13:00 <text>
NICKSELF <timestamp> You are now13:00 <newnick>
TOPIC !script default.topic.change %::nick %::text

Colors 15,13,5,5,13,13,0,0,0,0,0,0,5,0,12,0,0,0,0,5,0,15,00,15,00,7
RGBColors 255,255,255 0,0,0 160,167,104 0,128,128 255,84,88 166,186,217 164,209,255 255,128,0 103,137,152 128,128,192 0,128,184 168,192,255 166,186,217 80,100,128 34,145,255 38,54,64
BaseColors 13,11,05,00

CLineOwner 08
CLineOP 08
CLineHOP 05
CLineVoice 13
CLineRegular 00
CLineMe 01
CLineFriend 00
CLineEnemy 14
CLineIrcOP 06

CLineCharOwner 08.
CLineCharOP 08@
CLineCharHOP 05%
CLineCharVoice 13+
CLineCharRegular 00

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

