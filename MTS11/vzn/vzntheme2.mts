;|my second theme      |
;|vzntheme by Fernando |
;¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
[mts]
Name vzntheme
Author Fernando
Website http://geocities.com/visionscript
Email Fernando_@MircScripts.Org
Description 'vi[z]ion-script theme' by Fernando, updated 2nd version. With 5 schemes.. 
Version 2.0
MTSVersion 1.1
Script        vzn.mrc

Load          <pre> Cargado vzntheme v2.0 por Fernando .
Unload        <pre> Descargando vzntheme, Gracias por usarlo!.

FontDefault   Tahoma,10
FontChan      Tahoma,10
FontQuery     Tahoma,10
Timestamp on
Timestampformat (hh:nn-t)


RGBColors 255,255,255 0,0,0 20,20,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0  0,255,0 20,120,120 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15,1,0
BaseColors 0,0,0,0
Prefix [*]
TextChan (<cmode><nick>): <text>
TextChanSelf (<cmode><me>): <text>
TextQuery (<nick>): <text>
TextQuerySelf (<me>): <text>
TextMsg -> <nick> <text>
TextMsgSelf -> <nick> <text>
Join <pre> Join\<timestamp>: <nick> [<address>] has entered <chan>
JoinSelf <pre> Join\<timestamp>: Has joined to <chan>
Part <pre> Part: <nick>\<timestamp> [<address>] has parted <chan> <parentext>
Rejoin <pre> Attempting to rejoin <chan>
Quit <pre> Quits: <nick>\<timestamp> [<address>] <parentext>
Nick <pre> Nick: <nick> is known as <newnick>
NickSelf <pre> Nick: is known as <newnick>
Mode <pre> Mode: sets [<modes>\by <nick>] 
ModeUser <pre> Mode: sets [<modes>]
Kick <pre> Kick: (<knick>\by <nick>) <parentext>
KickSelf <pre> Kick: (<me>\by <nick>) <parentext>
ActionChan <pre> <cmode><nick> <text>
ActionChanSelf <pre> <cmode><me> <text>
ActionQuery <pre> <cmode><nick> <text>
ActionQuerySelf <pre> <cmode><me> <text>
Invite <pre> <nick> invited to join <chan>
Topic <pre> Topic: <nick> change topic to: <text>
Notice <pre> Noticie: <nick> [<address>] <text>
NoticeChan <pre> Notice: [<chan>] (<nick>) <text>
NoticeServer <pre> Server: <text>
NoticeSelf <pre> Notice: (<me>) <text> 
NoticeChanSelf <pre> Notice of chan: (<chan>) <text>
ClineOp 00
ClineHop 00
ClineVoice 00
ClineRegular 00
ClineOwner 00
ClineEnemy 04
ClineFriend 00
ClineMe 00
CLineCharOwner 00.
CLineCharOP 00@
CLineCharHOP 00%
CLineCharVoice 00+
CLineCharRegular
EchoTarget <pre> <text>
Echo <pre> <text>
raw.252 15- 00Operators:15 <value>
raw.253 15- 00Unknown connections:15 <value>
raw.254 15- 00The channels forms:15 <value>
raw.255 15- 00Local clients:15 <users> 00Servers:15 <value>
raw.311 !script whoisstart %::nick %::address %::realname
raw.313 !script whoiscop
raw.317 !script whoisidle %::idletime %::signontime
raw.319 15-00| Channels:15 <chan>
raw.312 15-00| Server:15 <wserver>
raw.301 15-00| Away:15 <nick> <text>
raw.318 !script whoisend
raw.332 <pre> 15Topic15: "<text>"
raw.333 <pre> 15Setted by15: <nick> 15on <text> ...

Scheme1 Blue
Scheme2 Gray
Scheme3 Red
Scheme4 Yellow
Scheme5 Ice Blue

[Scheme1]
RGBColors 0,0,225 0,0,0 0,0,128 0,144,0 255,20,20 128,0,0 160,0,160 255,128,0 255,255,0  0,255,0 20,120,120 0,255,255 0,0,255 255,0,255 138,138,138 215,215,215
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15,1,0

[Scheme2]
RGBColors 205,205,205 0,0,0 0,0,128 0,144,0 255,20,20 128,0,0 160,0,160 255,128,0 255,255,0  0,255,0 20,120,120 0,255,255 0,0,255 255,0,255 138,138,138 215,215,215
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15,1,0

[Scheme3]
RGBColors 205,0,0 0,0,0 0,0,128 0,144,0 255,20,20 128,0,0 160,0,160 255,128,0 255,255,0  0,255,0 20,120,120 0,255,255 0,0,255 255,0,255 138,138,138 215,215,215
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15,1,0

[Scheme4]
RGBColors 205,205,0 0,0,0 0,0,128 0,144,0 255,20,20 128,0,0 160,0,160 255,128,0 255,255,0  0,255,0 20,120,120 0,255,255 0,0,255 255,0,255 138,138,138 215,215,215
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15,1,0

[Scheme5]
RGBColors 173,216,230 0,0,0 0,0,128 0,144,0 255,20,20 128,0,0 160,0,160 255,128,0 255,255,0  0,255,0 20,120,120 0,255,255 0,0,255 255,0,255 138,138,138 215,215,215
Colors 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15,1,0