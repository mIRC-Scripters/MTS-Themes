;			       ___
;              .___        .___\  \_______ _________  
;  _____     __| _/_______ |   |\______   \\_   ___ \ 
;  \__  \   / __ | \_  __ \|   | |       _//    \  \/ 
;   / __ \_/ /_/ |  |  | \/|   | |    |   \\     \____
;  (____  /\____ |  |__|   |___| |____|_  / \______  /
;       \/      \/                      \/         \/ 
;
;			    (viewed@Lucida Console 10px)
[mts]
NAME adrIRC
AUTHOR ramm@Argentina!
EMAIL adrian_@datafull.com
WEBSITE http://lbdt.cjb.net
DESCRIPTION It includes 14 schemes, 7 without sounds and 7 with sounds! ...please if sounds doesn't work it's not because a theme problem, I'll recommend you to change your engine for another one with sounds support, like qwerty's mTS-Engine ;) ...adrIRC Theme It's inspired on siRC default theme, Enjoy it!
VERSION 0.01
MTSVERSION 1.1
SCRIPT adrIRC.mrc

Timestamp ON
TimestampFormat 0[HH:nn]
 
BASECOLORS 11,02,05,00
COLORS  02,11,04,11,00,15,00,00,00,00,00,00,11,00,11,00,00,00,00,11,00,02,00,02,00,00,00,02
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 130,150,210 50,65,130 200,0,255 128,128,128 208,208,208
 
LOAD !Script adrIRC.load <c1>
 
FONTDEFAULT tahoma,11
FONTQUERY tahoma,11
FONTCHAN tahoma,11
 
CLINEOWNER 00
CLINEOP 00
CLINEHOP 00
CLINEVOICE 00
CLINEREGULAR 00
CLINEFRIEND 00
CLINEENEMY 00
 
CLineCharOwner <c1>.
CLineCharOP <c1>@
CLineCharHOP <c1>%
CLineCharVoice <c1>+
 
ImageMirc tile Desktop01-Tile.bmp
ImageToolbar fill mIRCBackground.jpg
ImageButtons fill mIRCButtons.jpg
ImageSwitchbar fill MainBar01-Filler.bmp
; Images taked from looksharp script
 
Prefix <c1>::: Error:00
PARENTEXT [<text>]
 
TEXTCHAN !script adrIRC.txtchan %::nick %::cmode %::text
TEXTCHANSELF <c1><lt>00<c1><cmode>00<me><c1><gt>00 <text>
ACTIONCHAN !script adrIRC.actionquery %::nick %::cmode %::text
ACTIONCHANSELF <c1>* <c1><lt>00<cmode><me><c1><gt>00 <text>
NOTICECHAN 00! <c1>Notice (00<nick><c1>|00<chan><c1>)00 <text>
NOTICE 00! <c1>Notice (00<nick><c1>)00 <text>
NOTICESELF <c1>-><c1> <nick>00 <text>
NOTICESELFCHAN <c1>-><c1> <chan>00 <text>
TEXTQUERY !script adrIRC.txtquery %::nick %::text
TEXTQUERYSELF <c1><lt>00<me><c1><gt>00 <text>
ACTIONQUERY !script adrIRC.actionquery %::nick %::text
ACTIONQUERYSELF 00* <c1><lt>00<me><c1><gt>00 <text>
 
MODE <c1>::: <c1><nick>00 sets mode:<c1> <modes> 00at <c1>(00<chan><c1>)
MODEUSER <c1>::: Usermode:00 for <me> is now <modes>
JOIN <c1>›› Joins <c1>(00<chan><c1>)00: <c1><nick>[00<address><c1>]
JOINSELF <c1>›› You have joined  <chan>
PART !script adrIRC.part %::chan %::nick %::address %::text
KICK <c1>::: Kick <c1>(00<nick><c1>) 00kicked <knick> <c1>(Reason:00<text><c1>)
KICKSELF <c1>::: Kick 00<nick><c1>[00<address><c1>] 00kicked you from <chan> <c1>(Reason:00<text><c1>)
QUIT !script adrIRC.quit %::nick %::text
TOPIC !script adrIRC.topicinit %::text %::nick
NICK <c1>::: <nick> <c1>is now 00<newnick>
NICKSELF <c1>::: <c1>You are now 00<newnick>
INVITE <c1>::: Invite: <c1>(00<nick><c1>)00 has invited you to join: <chan>
SERVERERROR <pre> <text>
CTCP <c1>[<nick> <ctcp>]
CTCPCHAN <c1>[<nick>:<chan> <ctcp>] <text>
CTCPSELF <c1>[<nick>] <ctcp>
CTCPCHANSELF <c1>-> [<chan>] <ctcp> <text>
CTCPREPLY <c1>[<nick> <ctcp> reply]: <text>
CTCPREPLYSELF <c1>[<nick> <ctcp> reply]: <text>
NOTIFY <c1>::: Notify:00 <nick> is now online!
UNOTIFY <c1>::: Notify:00 <nick> is now offline :(
NOTICESERVER !script
 
DNS <c1>::: Dns:00 Attempting to resolve <address>
DNSERROR <c1>::: Dns <nick>:00 Unable to resolve <c1>(00<iaddress><naddress><c1>)00
DNSRESOLVE <c1>::: Dns <nick>:00 ip <c1>(00<iaddress><c1>)00 named <c1>(00<naddress><c1>)00 resolved <c1>(00<raddress><c1>)00
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
  
raw.311 !script adrIRC.whoisinit %::nick %::address %::realname
raw.314 <c1>Name:00 <realname> <c1>Host: <address>
raw.319 <c1>› Channels:00 <chan>
raw.312 <c1>› Server:00 <wserver>
raw.301 <c1>› Away:00 <text>
raw.307 <c1>› Identified:00 <isreg>
raw.317 !script adrIRC.whoisidle %::idletime %::signontime
raw.318 !script adrIRC.whoisend
 
raw.001 <c1>::: Welcome00 to the <text> network
raw.002 <c1>::: Host:00 <address>
raw.003 <c1>::: Created:00 <value>
raw.005 !script
raw.250 !script
raw.251 !script adrIRC.lusersinit %::chan %::users %::text
raw.252 !script
raw.253 !script
raw.254 <c1>::: Lusers:00 <value> channel(s) formed
raw.255 !script adrIRC.lusersend %::users %::value
raw.265 !script
raw.266 !script
raw.302 !script
raw.315 !script
raw.324 !script adrIRC.mode %::modes
raw.332 !script adrIRC.topicinit %::text
raw.333 <c1>::: Set by <nick>:00 <text>
raw.341 <c1>::: Invite:00 <nick> has been invited to <chan>
raw.352 !script
raw.353 !script
raw.366 !script adrIRC.users %::chan
raw.372 !script
raw.375 !script
raw.376 !script
raw.391 <c1>::: Server time:00 <value>
raw.004 !script
raw.006 !script
raw.007 !script
raw.213 !script
raw.256 <c1>::: /admin [00Administrative Information<c1>]:
raw.257 <c1>|00
raw.258 <c1>|00
raw.259 !script adrIRC.adminend
raw.305 <c1>::: Away:00 You are no longer marked as away
raw.306 <c1>::: Away:00 You are now marked as away
raw.328 !script
raw.329 <c1>::: Created on:00 <text>
raw.371 <text>
raw.374 <c1>::: end of /info [00Server Information<c1>]
raw.511 <pre> You're /silence list is full.
 
raw.401 <pre> No such nickname: <nick>
raw.403 <pre> No such channel: <chan>
raw.404 <pre> Cannot send text/data to: <chan>
raw.421 <pre> No such command: /<value>
raw.432 <pre> Invalid nickname: <nick>
raw.433 <pre> Nickname already in use: <nick>
raw.471 <pre> Cannot join <chan> <c1>(Reason:00Limit Reached (+l)<c1>)
raw.473 <pre> Cannot join <chan> <c1>(Reason:00Invite Only (+i)<c1>)
raw.474 <pre> Cannot join <chan> <c1>(Reason:00You're Banned (+b)<c1>)
raw.475 <pre> Cannot join <chan> <c1>(Reason:00Incorrect Key<c1>)
raw.482 <pre> You're not a channel operator on <chan>
raw.405 <pre> Cannot join <chan>. You're on too many channels.
raw.406 <pre> Whowas on <nick> :: There was no such nick
raw.436 <pre> Nickname collision with: <nick>
raw.438 <pre> Nickname changed too fast, please wait a while and try again...
raw.439 <pre> Target changed too fast, please wait a while and try again...
raw.441 <pre> <nick> is not on <chan>
raw.442 <pre> You're not on <chan>
raw.443 <pre> <nick> is already on <chan> <text>
raw.461 <pre> More parameters needed for: <text>
raw.465 <pre> Sorry, You're banned from this server.
raw.467 <pre> Cannot join <chan> <c1>(Reason:00Key Needed (+k)<c1>)
raw.472 <pre> Unknown character: <text>
raw.478 <pre> Cannot ban <text>. <c1>(Reason:00Ban List Full<c1>)
 
Scheme1 Remolacha
Scheme2 El Negrojo
Scheme3 Bleu
Scheme4 Nature
Scheme5 Negranja
Scheme6 iLuSiOn
Scheme7 Default (with sounds)
Scheme8 Remolacha (with sounds)
Scheme9 El Negrojo (with sounds)
Scheme10 Bleu (with sounds)
Scheme11 Nature (with sounds)
Scheme12 Negranja (with sounds)
Scheme13 iLuSiOn (with sounds)
 
[Scheme1]
BaseColors 06,02,00,01
COLORS 13,06,04,06,00,15,00,00,00,00,00,00,06,00,06,00,00,00,00,06,00,13,00,13,00,00,00,13
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 200,130,255 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 60,0,90 128,128,128 208,208,208
 
[Scheme2]
BaseColors 04,02,01,00
COLORS 01,04,07,04,00,15,00,00,00,00,00,00,04,00,04,00,00,00,00,04,00,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme3]
BaseColors 11,02,01,00
COLORS 01,11,04,11,00,15,00,00,00,00,00,00,11,00,11,00,00,00,00,11,00,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme4]
BaseColors 09,03,01,00
COLORS 10,02,12,02,00,15,00,00,00,00,00,00,02,00,02,00,00,00,00,02,00,10,00,10,00,00,00,10
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 145,255,130 0,180,100 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme5]
BaseColors 07,02,01,00
COLORS 01,07,04,07,00,15,00,00,00,00,00,00,07,00,07,00,00,00,00,07,00,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme6]
BaseColors 02,10,01,00
COLORS 10,02,12,02,00,15,00,00,00,00,00,00,02,00,02,00,00,00,00,02,00,10,00,10,00,00,00,10
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 111,155,155 0,240,240 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme7]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
[Scheme8]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
BaseColors 06,02,00,01
COLORS 13,06,04,06,00,15,00,00,00,00,00,00,06,00,06,00,00,00,00,06,00,13,00,13,00,00,00,13
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 200,130,255 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 60,0,90 128,128,128 208,208,208
 
[Scheme9]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
BaseColors 04,02,01,00
COLORS 01,04,07,04,00,15,00,00,00,00,00,00,04,00,04,00,00,00,00,04,00,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme10]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
BaseColors 11,02,01,00
COLORS 01,11,04,11,00,15,00,00,00,00,00,00,11,00,11,00,00,00,00,11,00,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme11]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
BaseColors 09,03,01,00
COLORS 10,02,12,02,00,15,00,00,00,00,00,00,02,00,02,00,00,00,00,02,00,10,00,10,00,00,00,10
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 145,255,130 0,180,100 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme12]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
BaseColors 07,02,01,00
COLORS 01,07,04,07,00,15,00,00,00,00,00,00,07,00,07,00,00,00,00,07,00,01,00,01,00,00,00,01
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 200,0,255 128,128,128 208,208,208
 
[Scheme13]
SndJoinSelf Join.wav
SndKickSelf Fool.wav
SndOpSelf Op.wav
SndStart Start.wav
SndConnect Connect.wav
SndDisconnect Disconnect.wav
SndAway Away.wav
SndBack SetBack.wav
SndPager Pager.wav
SndLoad Outstanding.wav
SndBanSelf Nothing.wav
SndDCC DCC.wav
SndOpen Pager.wav
SndDialog Open.wav
SndNotice Pager.wav
SndPartSelf Part.wav
SndError Error.wav
 
BaseColors 02,10,01,00
COLORS 10,02,12,02,00,15,00,00,00,00,00,00,02,00,02,00,00,00,00,02,00,10,00,10,00,00,00,10
RGBColors 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 127,0,0 130,0,185 255,128,0 255,255,0 0,255,0 111,155,155 0,240,240 0,0,255 200,0,255 128,128,128 208,208,208
 