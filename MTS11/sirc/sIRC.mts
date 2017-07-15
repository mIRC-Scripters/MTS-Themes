[mts]

NAME siRC default
AUTHOR [-maverick-]
EMAIL s_coulton@hotmail.com
DESCRIPTION Default siRC theme, the cleanest and nicest theme ever. Now in serveral flavors.
SCRIPT sirc.mrc
WEBSITE http://sacrosanctirc.cjb.net
MTSVERSION 1.1
VERSION 2.13
PREFIX 13::: Error:00
PARENTEXT (<text>)
TIMESTAMP OFF
TIMESTAMPFORMAT 13(00HH:nn13)

LOAD !script default.load freedom
MODE <timestamp> 13::: 13<nick>[00<address>13]00 sets 13(00<chan>13)00 mode:13 <modes>
JOIN <timestamp> 13›› Joins 13(00<chan>13)00: 13<nick>[00<address>13]
JOINSELF 13›› Now talking in00 <chan>
PART <timestamp> 13‹‹ Parts 13(00<chan>13): 13<nick>[00<address>13] 13(Reason:00 <text>13)
TEXTCHAN <timestamp> 13<lt><cmode>00<nick>13<gt>00 <text>
TEXTQUERY <timestamp> 13<lt>00<nick>13<gt>00 <text>
KICK <timestamp> 13::: Kick 13(00<chan>13)00: 13<nick>[00<address>13]00 kick <knick> 13(Reason:00 <text>13)
KICKSELF <timestamp> 13::: Kick:00 You have been kicked from 13(00<chan>13)00: 13<nick>[00<address>13] 13(Reason: <text>13)
QUIT <timestamp> 13::: Quits 13(IRC13): 13<nick>[00<address>13] 13(Reason: <text>13)
TOPIC !script default.topicinit %::text
NICK <timestamp> 13<nick>[00<address>13] 00is now 13<newnick>
TEXTCHANSELF <timestamp> 13<lt>0013<cmode>00<me>13<gt>00 <text>
TEXTQUERYSELF <timestamp> 13<lt>00<me>13<gt>00 <text>
MODEUSER 13::: Usermode:00 for <me> is now <modes>
INVITE <timestamp> 13::: Invite: 13<nick>[00<address>13]00 has invited you to <chan>
NICKSELF <timestamp> You are now 13<newnick>

ACTIONCHAN <timestamp> 05* 13<lt><cmode>00<nick>13<gt> <text>
ACTIONQUERY <timestamp> 05* 13<lt>00<nick>13<gt> <text>
ACTIONCHANSELF <timestamp> 05* 13<lt><cmode>00<me>13<gt> <text>
ACTIONQUERYSELF <timestamp> 05* 13<lt>00<me>13<gt> <text>

CTCP <timestamp> 05[<nick> <ctcp>] <text>
CTCPCHAN <timestamp> 05[<nick>:<chan> <ctcp>] <text>
CTCPREPLY <timestamp> 05[<nick> <ctcp> reply]: <text>
CTCPSELF <timestamp> 05[<nick>] <ctcp> <text>
CTCPCHANSELF <timestamp> 05-> [<chan>] <ctcp> 
CTCPREPLYSELF <timestamp> 05[<nick> <ctcp> reply]: <text>

SERVERERROR <pre> <text>
NOTICESERVER !script
NOTICE <timestamp> 00! 13|00<nick>13|00 <text>
NOTICECHAN <timestamp> 00! 13|00<nick>:<chan>13|00 <text>
NOTICESELF <timestamp> -> 00! 13|00<nick>13|00 <text>
NOTICESELFCHAN <timestamp> -> 00! 13|00<nick>:<chan>13|00 <text>
NOTIFY <timestamp> 13::: Notify:00 <nick> is now online
UNOTIFY <timestamp> 13::: Notify:00 <nick> is now offline
DNS 13::: Dns:00 Attempting to resolve <address>
DNSERROR 13::: Dns <nick>:00 Unable to resolve 13(00<iaddress><naddress>13)00
DNSRESOLVE 13::: Dns <nick>:00 ip 13(00<iaddress>13)00 named 13(00<naddress>13)00 resolved 13(00<raddress>13)00

COLORS 11,13,5,5,15,15,0,0,0,0,0,0,5,0,12,0,0,0,0,5,0,11,0,11,0,7
BASECOLORS 13,11,5,0
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 166,186,217 164,209,255 255,128,0 255,255,0 0,255,0 0,144,144 81,101,128 166,186,217 166,190,253 128,128,128 208,208,208

FONTDEFAULT tahoma,11
FONTCHAN tahoma,11
FONTQUERY tahoma,11

raw.001 13::: Welcome00 to the <text> network
raw.002 13::: Host:00 <address>
raw.003 13::: Created:00 <value>
raw.004 !script
raw.005 !script
raw.006 !script
raw.007 !script

raw.213 !script
raw.250 !script
raw.251 !script default.lusersinit %::chan %::users %::text
raw.252 !script
raw.253 !script
raw.254 13::: Lusers:00 <value> channel(s) formed
raw.255 !script default.lusersend %::users %::value
raw.256 13::: /admin [00Administrative Information13]:
raw.257 13|00 <text>
raw.258 13|00 <text>
raw.259 !script default.adminend
raw.265 !script
raw.266 !script

raw.301 00| 13Away:00 <text>
raw.302 !script
raw.305 13::: Away:00 You are no longer marked as away
raw.306 13::: Away:00 You are now marked as away
raw.307 00| 13Identified:00 <isreg>
raw.311 !script default.whoisinit %::nick %::address %::realname
raw.312 00| 13Server:00 <wserver>
raw.314 13Name:00 <realname> 13Host: <address>
raw.315 !script
raw.317 !script default.whoisidle %::idletime %::signontime
raw.318 !script default.whoisend
raw.319 00| 13Channels:00 <chan>
raw.323 13::: end of /list [00Listing Channels13]
raw.324 !script default.mode %::modes
raw.328 !script
raw.329 13:x: Created on:00 <text>
raw.332 !script default.topicinit %::text
raw.333 13:x: Set by:00 <nick> on <text>
raw.341 13::: Invite:00 <nick> has been invited to <chan>
raw.352 !script
raw.353 !script
raw.364 13::: Link:00 <text>
raw.366 !script default.users %::chan
raw.371 13|00 <text>
raw.374 13::: end of /info [00Server Information13]
raw.372 !script
raw.375 !script
raw.376 !script
raw.391 13::: Server time:00 <value>

raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to: <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> :: There was no such nick
raw.421 <pre> No such command: /<value>
raw.432 <pre> Invalid nickname: <nick>
raw.433 <pre> Nickname already in use: <nick>
raw.436 <pre> Nickname collision with: <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Target changed too fast, please wait a while and try again...
raw.440 <pre> Services are down, try again later.
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan> <text>
raw.461 <pre> More parameters needed for: <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan> 13(Reason:00Key Needed (+k)13)
raw.471 <pre> Cannot join <chan> 13(Reason:00Limit Reached (+l)13)
raw.472 <pre> Unknown character: <text>
raw.473 <pre> Cannot join <chan> 13(Reason:00Invite Only (+i)13)
raw.474 <pre> Cannot join <chan> 13(Reason:00You're Banned (+b)13)
raw.475 <pre> Cannot join <chan> 13(Reason:00Incorrect Key13)
raw.478 <pre> Cannot ban <text>. 13(Reason:00Ban List Full13)
raw.482 <pre> You're not a channel operator on <chan>

raw.511 <pre> You're /silence list is full.

CLINEOP 05
CLINEHOP 13
CLINEVOICE 15
CLINEREGULAR 00
CLINEOWNER 05
CLINEENEMY 08
CLINEFRIEND 00
CLINEME
CLineCharOwner 05.
CLineCharOP 05@
CLineCharHOP 13%
CLineCharVoice 15+
CLineCharRegular

ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>

Scheme1 Black
Scheme2 White
Scheme3 Orange
Scheme4 Cobalt Blue
Scheme5 Silver

[scheme1]
LOAD !script default.load black
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 60,79,89 164,209,255 255,128,0 255,255,0 0,255,0 0,144,144 0,0,0 166,186,217 105,105,105 128,128,128 208,208,208

[scheme2]
LOAD !script default.load white
RGBCOLORS 0,0,0 0,0,0 0,0,128 0,144,0 255,0,0 85,140,223 164,209,255 255,128,0 255,255,0 0,255,0 0,144,144 255,255,255 166,186,217 158,179,190 128,128,128 208,208,208

[scheme3]
LOAD !script default.load orange
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 205,205,205 164,209,255 255,128,0 255,255,0 0,255,0 0,144,144 174,87,0 166,186,217 255,174,94 128,128,128 208,208,208

[scheme4]
LOAD !script default.load cobalt blue
RGBCOLORS 115,130,148 0,0,0 0,0,128 0,144,0 255,0,0 205,205,205 164,209,255 255,128,0 255,255,0 0,255,0 0,144,144 57,77,82 166,186,217 173,211,247 128,128,128 208,208,208

[scheme5]
LOAD !script default.load silver
RGBCOLORS 214,219,247 0,0,0 0,0,128 0,144,0 255,0,0 132,142,165 164,209,255 255,128,0 255,255,0 0,255,0 0,144,144 90,97,115 166,186,217 231,227,231 128,128,128 208,208,208
