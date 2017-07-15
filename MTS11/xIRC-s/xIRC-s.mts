[mts]
Name xIRC-s
Author syphonx
Email null06@hotmail.com
Description Fixed out some bugs and added some schemes :)
Website http://xirc-s.cjb.net
Version 2.9.1
MTSVersion 1.1

Script xirc-s.mrc

PREFIX *

Timestamp ON
TimestampFormat <c1>(16HH<c1>:16nntt<c1>)

CTCP <c1>[16<nick> 12<ctcp><c1>]16 <text>
MODEUSER 16·· usermode: for <me> is now <c1>(16<modes><c1>)
NOTICE <c1>[16<nick><c1>]16 <text>
CTCPSELF <c1>[16ctcp<c1>] (16<nick><c1>)13 <ctcp> 16<text>
TEXTQUERYSELF <c1>(16<me><c1>)16 <text>
DNSERROR 12››0 dns error12 <nick> 0unable to resolve <c1>(16<iaddress>/<naddress><c1>)
CTCPCHANSELF 0-> <c1>[16<chan><c1>]16 <ctcp>
JOINSELF 0›› joinin' <c1>(16<chan><c1>)
CTCPCHAN <c1>[16<nick>/<chan> 12<ctcp><c1>]16 <text>
DNSRESOLVE 12››0 dns12 <nick> 0ip: <c1>(16<iaddress><c1>)0 name: <c1>(16<naddress><c1>)0 resolved: <c1>(16<raddress><c1>)
TEXTCHANSELF <c1>(12<cmode>16<me><c1>)16 <text>
INVITE 16›› <c1>(16<nick><c1>)0 invited you to join <c1>(16<chan><c1>)
ECHOTARGET <c1>(16<text><c1>)0
ERROR <c1>(16<text><c1>)
PART 16›› parted <c1>(16<chan><c1>)16 <nick> <c1>(16<address><c1>)
TEXTQUERY <c1>(16<nick><c1>)00 <text>
JOIN 16›› 00joined <c1>(16<chan><c1>)16 <nick> <c1>(16<address><c1>)
KICK 16..<c1>(16<chan><c1>)0 <nick> kicked <c1>(16<knick><c1>) (16<text><c1>)
NOTICECHAN <c1>[16<nick>/<chan><c1>]16 <text>
NICKSELF 16·· you're now <c1>(16<newnick><c1>)
TOPIC 0·· topic set by <c1>(00<nick><c1>)00 on <c1>(00<chan><c1>) <c1>(00<text><c1>)
PARENTEXT <c1>(16<text><c1>)16
QUIT 16›› quit <c1>(16<nick><c1>) (16<address><c1>) (16<text><c1>)
NOTICESELF -› <c1>[16<nick><c1>]16 <text>
ECHO <c1>(16<text><c1>)
SERVERERROR 0error <text>
CTCPREPLY <c1>[16<nick> 12<ctcp> reply<c1>]16 <text>
ACTIONCHANSELF 12! <c1>(12<cmode>16<me><c1>)16 <text>
NOTICESELFCHAN -› <c1>[16<nick>/<chan><c1>]16 <text>
CTCPREPLYSELF <c1>[16<nick> 12<ctcp>0 reply<c1>]16 <text>
ACTIONQUERYSELF 12! <c1>(16<me><c1>)16 <text>
ACTIONCHAN 12! <c1>(12<cmode>16<nick><c1>)16 <text>
NOTIFY 16›› notify:12 <nick> 0is online
DNS 12››0 dns: attempting to resolve <c1>(16<address><c1>)0..
UNOTIFY 16›› notify:12 <nick> 0is offline
MODE 16›› <c1>(16<nick><c1>)0 sets <c1>(16<chan><c1>) 16mode:<c1> (16<modes><c1>)16
KICKSELF 16›› you have been kicked from: <c1>(16<chan><c1>)0 by <c1>(16<nick><c1>) (16<text><c1>)
NICK 16<nick> is now <c1>(16<newnick><c1>)
LOAD 0xIRC-s theme <c1>(0xanthic<c1>)0 by syphonx
ACTIONQUERY 12! <c1>(16<nick><c1>)16 <text>
TEXTCHAN <c1>(12<cmode>16<nick><c1>)00 <text>
NOTICESERVER <c1>[16<nick><c1>]16 <text>

raw.436 <pre> nickname collision with: <nick>
raw.401 <pre> no such nickname: <nick>
raw.403 <pre> no such channel: <chan>
raw.404 <pre> cannot send text/data to: <chan>
raw.432 <pre> invalid nickname: <nick>
raw.405 <pre> cannot join <chan>. you're on too many channels.
raw.421 <pre> no such command: /<value>
raw.433 <pre> nickname already in use: <nick>
raw.406 <pre> whowas on <nick> there was no such nick
raw.478 cannot ban <text>. <c1>(0ban list full<c1>)
raw.511 <pre> you're /silence list is full.
raw.441 <pre> <nick> is not on <chan>
raw.465 <pre> sorry, you're banned from this server.
raw.442 <pre> you're not on <chan>
raw.474 cannot join <chan> <c1>(0you're banned 13(0+b13)<c1>)
raw.443 <pre> <nick> is already on <chan>
raw.467 cannot join <chan> <c1>(0key needed 13(0+k13)<c1>)
raw.475 cannot join <chan> <c1>(0incorrect key<c1>)
raw.472 <pre> unknown character: <text>
raw.461 <pre> more parameters needed for: <text>
raw.473 cannot join <chan> <c1>(0invite only 13(0+i13)<c1>)
raw.438 <pre> nickname changed too fast, please wait a while and try again...
raw.439 <pre> target changed too fast, please wait a while and try again...
raw.471 cannot join <chan><c1>(0limit 13(0+l13)<c1>)
raw.252 0operators online 14(16<value>14)
raw.253 0unknown connections <c1>(16<value><c1>)
raw.329 !script
raw.482 <pre> you're not a channel operator on <chan>
raw.251 !script default.lusersinit %::users %::text %::value
raw.352 <c1>(16<chan><c1>) (16<nick><c1>)0 is <c1>(16<address><c1>) [16<realname><c1>]
raw.341 12›› <nick> 0has been invited to <c1>(16<chan><c1>)
raw.318 !script default.whoisend
raw.254 0lusers 14(16<value>14)0 channel(s) formed
raw.319 0channel(s) 14(16<chan>14)
raw.255 !script default.lusersend %::users %::value
raw.332 0·· topic <c1>(16<text><c1>)
raw.317 !script default.whoisidle %::idletime %::signontime
raw.333 0·· set by <c1>(00<nick> on <text><c1>)
raw.305 0›› you're no longer marked as away
raw.314 0name <c1>(16<realname><c1>)0 host <c1>(16<address><c1>)
raw.306 0›› you're now marked as away
raw.301 0away <c1>(16<text><c1>)
raw.311 !script default.whoisinit %::nick %::address %::realname
raw.312 0server 14(16<wserver>14)
raw.324 0·· modes <c1>(16<modes><c1>)


Colors 1,0,12,12,15,15,0,8,9,12,13,0,0,12,8,0,15,14,0,8,8,1,0,1,12,9,1,1
RGBColors 255,255,255 0,0,0 160,148,255 0,128,128 255,84,88 192,72,32 215,193,215 255,128,0 168,192,255 0,128,184 0,192,184 160,176,104 80,100,128 128,128,192 128,128,128 208,208,208
BaseColors 08,11,05,00

CLineOwner 08
CLineOP 08
CLineHOP 08
CLineVoice 12
CLineRegular 13
CLineMe 14
CLineFriend 07
CLineEnemy 04
CLineIrcOP 02

CLineCharOwner 09.
CLineCharOP 12@
CLineCharHOP 10%
CLineCharVoice 07+
FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11

Scheme1 xanthine
Scheme2 xebec
Scheme3 xerode
Scheme4 xiphoid

[scheme1]
LOAD 0xIRC-s theme <c1>(0xanthine<c1>)0 by syphonx
BASECOLORS 12,11,05,00
PREFIX 14>15>12>
PARENTEXT <c1>(12<text>12)

[scheme2]
LOAD 0xIRC-s theme <c1>(0xebec<c1>)0 by syphonx
BASECOLORS 13,11,05,00
PREFIX 14>15>12>
PARENTEXT <c1>(12<text>12)

[scheme3]
LOAD 0xIRC-s theme <c1>(0xerode<c1>)0 by syphonx
BASECOLORS 02,11,05,00
PREFIX 14>15>12>
PARENTEXT <c1>(12<text>12)

[scheme4]
LOAD 0xIRC-s theme <c1>(0xiphoid<c1>)0 by syphonx
BASECOLORS 09,11,05,00
PREFIX 14>15>12>
PARENTEXT <c1>(12<text>12)