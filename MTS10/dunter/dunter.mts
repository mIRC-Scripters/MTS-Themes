[mts]
Name DunTer
Author [DaRkO]
Email argweb@hotmail.com
WebSite ar.geocities.com/argdarko
Description Simple theme for mIRC 
Version 1.0
MTSVersion 1.0 
Script dunload.mrc
LOAD 14Load Dunter Theme v1.0 By [DaRkO]
UNLOAD 14Unload Dunter Theme ...
TimeStamp 12[0 hh:nnt 12]

Mode <pre> 15<nick> 14Set mode 0:15 <modes>
Join <pre> 15<nick> 14Join in 15<chan> 12[4 <address> 12]
Part <pre> 15<nick> 14Part of 15<chan> 12[4 <address> 12]
Kick <pre> 15<nick> 14Kick to 4<knick> 15 <text>
Quit <pre> 15<nick> 14Disconnecting 12[4 <address> 12] 15<text>
Topic <pre> 15<nick> 14Set Topic of 15<chan> to 0:15 <text>
Nick <pre> 15<nick> 14Known as 15 <newnick>
Notice <pre> 14Notice* 15<nick> 0: 15 <text>
TextChan 14<lt><cmode>15<nick>14<gt> 15<text> 
TextMsg 14<lt>15<nick>14<gt> - <text>
TextChanSelf 14<lt> <cmode>0<me>14<gt> 15<text>
TextQuery <pre> 14<lt> <cmode>15<nick>14<gt> 15<text>
ActionChan <pre> 15*14<lt> <cmode>15<nick>14<gt> 15<text>  
ActionChanSelf <pre> 15*14<lt> <cmode>15<me>14<gt> 15 <text>
JoinSelf <pre> 14Joined in 15<chan>
ModeUser <pre> 14Known mode 0:15 <text>
NickSelf <pre> 14You Known as0:15 <newnick>
KickSelf <pre> 14You were kiked 4<knick> 15 of <chan>
CtcpSelf <pre> 14ctcp!! 15<ctcp> 14send to 15<nick>
Invite <pre> 0<me> 14Invited to 15<chan> 14By 0: 15<nick>

raw.311 !script dunter.nick    
raw.319 !script dunter.chan %::chan
raw.312 15server :14 <wserver>
raw.301 !script dunter.away
raw.317 !script dunter.idle %::idletime 
raw.318 0|____| 15end of whois 0|____|
raw.332 14Topic in 15<chan> :0<text>
raw.333 14Topic set by 15<nick> 14in 15<text>
RAW.324 <pre> 15<chan> 14Modes:15 <modes>
raw.421 <pre> 15<value> 14ivalid command
raw.403 <pre> 15<chan> 14no souch channel
raw.401 <pre> 15<nick> 14no souch nick
RAW.482 <pre> 14You're not operator in 15<chan>
RAW.474 <pre> 14Can't join in 15<chan>4yuo´re baned
RAW.475 <pre> 14Can't join in 15<chan>4Requieres key

Colors 1,2,2,4,3,3,2,2,2,2,2,3,2,2,4,2,2,2,2,2,3,1,3,1,4
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
BaseColors 2,9,4,1
CLineOwner 15
CLineOP 14
CLineHOP 15
CLineVoice 14
CLineMe 0

ClineCharOwner 0
ClineCharOP @
ClineCharHOP %
ClineCharVoice +

FontDefault Tahoma,11
FontChan Tahoma,11
FontQuery Tahoma,11
ImageStatus Center dunstatus.jpg
