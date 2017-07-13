[mts]
NAME LiZard Theme
AUTHOR [DaRkO]
DESCRIPTION Theme simple for mIRC  
EMAIL argweb@hotmail.com
WEBSITE www.argweb.es.vg
MTSVERSION 1.0
VERSION 3.1
SCRIPT lizard.mrc
LOAD 9Li1Zard Theme v3.1 By [DaRkO]
UNLOAD 2Unload Theme ...
TimeStamp 9-(15 hh:nnt 9)-

JOIN <pre> 14<nick> 9Join in 14<chan> 7[11 <address> 7]
JOINSELF <pre> 9Joined in 14<chan>
PART <pre> 14<nick> 9Part from 14<chan> 7[11 <address> 7]
KICKSELF <pre> 9You were 9Kicked by 14<nick>
KICK <pre> 14<nick> 9Kick to 14<knick> 7[11 <address> 7]
NICK <pre> 14<nick> 9Is now 14<newnick>
NICKSELF <pre> 9You 9Were now 14<newnick>
MODE <pre> 14<nick> 9Set mode : 14<modes>
USERMODE <pre> 9Usermode:14 <nick> 9changes his modes to: 14<modes>
TOPIC <pre> 14<nick> 9Set topic to:14 <text>
NOTICE <pre> 9Notice!!! was recived from 14<nick> 9: 14<text> 
NOTICESELF <pre> 9Notice!!! was sent to 14<nick> 9: 14<text>
QUIT <pre> 9QUIT from 14<nick> 9: 14<text>
INVITE <pre> 14<nick> 9has invited you to join 14<chan>
TextChan 0<lt>15<cmode>14<nick>0<gt>9: 14<text>
TextChanSelf 0<lt>15<cmode>14<me>0<gt>9: 14<text>
TextQuery <pre> 0<lt>15<cmode>14<nick>0<gt>9: 14<text>
TextMsg 0<lt>14<nick>0<gt> 9mSg: 14<text>
CtcpSelf <pre> 9ctcp!! 14<ctcp> 9send to : 14<nick>
ActionChan <pre> 9*0<lt>15<cmode>14<nick>0<gt> 9: 14<text>  
ActionChanSelf <pre> 9*0<lt>15<cmode>14<me>0<gt> 9: 14 <text>
ServerError <pre> 4_-_Error: 14<text>

raw.311 !script nk.lz    
raw.319 !script ch.lz %::chan
raw.312 0::. 9Server : 14<wserver> 
raw.301 !script aw.lz
raw.317 !script id.lz %::idletime 
raw.318 0---------- 9end of whois 0------------
raw.332 9Topic 14<chan>: <text> 
raw.333 9Topic set by 14<nick> 9in 14<text> 
RAW.324 <pre> 14<chan> 0Modes:14 <modes>
raw.421 <pre> 14<value> 0ivalid command
raw.403 <pre> 14<chan> 0no souch channel
raw.401 <pre> 14<nick> 0no souch nick
RAW.482 <pre> 0You're not operator in 14<chan>
RAW.474 <pre> 0Can't join in 14<chan> 0yuo´re baned
RAW.475 <pre> 0Can't join in 14<chan> 0Requieres key


Colors 02,11,00,12,11,11,12,11,,11,13,11,11,12,11,11,14,11,11,13,11,01,00,02,11,11
RGBColors 255,255,255 0,0,0 1,1,1 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 60,140,180 50,80,210 106,145,160 128,128,128 208,208,208
BaseColors 11,12,00,02

CLineOwner 15
CLineOP 14
CLineHOP 14
CLineVoice 0
CLineRegular 3
CLineMe 12

ClineCharOwner 4
ClineCharOP 14
ClineCharHOP 14
ClineCharVoice 0

FontDefault tahoma,11
FontChan tahoma,11
FontQuery tahoma,11
ImageStatus Center lcenter.jpg
