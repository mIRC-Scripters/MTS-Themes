[mts]
Name Veronique
Author Amanda
Email marijaneblessedme024@hotmail.com
Description Different color themes.
Website 
Version 1v
MTSVersion 1.1

Script nique.mrc

Timestamp ON
Timestampformat 2(0h:nnt2)

Prefix 3ú2ú3ú0

FontDefault IBMPC,10
FontQuery IBMPC,10
FontChan IBMPC,10
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
BaseColors 02,03,04,05
RGBCOLORS 255,255,255 000,000,000 056,183,243 007,126,171 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

CLineOwner 0
CLineOP 2
CLineHOP 3
CLineVoice 0
CLineRegular 0
CLineMe 2

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

TextChan 2(<cmode><nick>2)0 <text>
TextChanSelf 2(0<cmode><me>2)0 <text>
ActionChan 3ú0 <cmode><nick> <text>
ActionChanSelf 3ú0 <cmode><me> <text>
TextQuery 3ú0 <cmode><nick>2:0 <text>
TextQuerySelf 3ú0 <cmode><me>3:0 <text>
ActionQuery 3ú0 <cmode><nick> <text>
ActionQuerySelf 3ú0 <cmode><me> <text>
TextMsgSelf 3ú0 <cmode><me>3:0 <text>

NoticeChanSelf 3ú0 Notice3:0 <chan> 3:0 <text>
NoticeChan 3ú0 Notice3:0 <cmode><nick> 3:0 <target>3:0 <text>
Notice 3ú0 Notice3:0 <cmode><nick> 3:0 <text>
NoticeSelf  3ú0 Notice3:0 <cmode><nick> 3:0 <text>
Notify 3ú0 Notify3:0 <nick> 3;0 <address> is now on irc
UNotify 3ú0 Notify3:0 <nick> 3;0 <address> has left irc
Wallop 3ú0 Wallop3:0 <cmode><nick> 3:0 <text>
NoticeServer 3ú0 Server Notice3:0 <cmode><nick> 3;0 <text>

ServerError 3ú0 Server Error3:0 <text>
DNS 3ú0 DNS/Attemping to resolve3:0 <address>
DNSError 3ú0 DNS/Unable to resolve3:0 <address>
DNSResolve 3ú0 DNS/Resolved2:0 <iaddress> to <address>
Echo <text>
EchoTarget <text>
Error 3ú0 Error3:0 <text>2)
Load Veronique theme loaded. 
Unload Veronique theme unloaded.

NickSelf 3ú2(0<me>2)0 you are now known as <newnick>
Nick 3ú0 <nick> is now known as <newnick>
Invite 3ú0 <nick> has invited you to join3:0 <chan>
ReJoin 3ú0 Attempting to rejoin <chan>.. 
Quit 3ú0 <nick> has quit IRC. 3(0 <text> 3)
Join 3ú0 <nick> has joined <chan> 3(0<address>3)
JoinSelf 3ú0 You have joined <chan> 
Part 3ú0 <nick> has left <chan> 3(0<address>3) 
Kick 3ú0 <knick> was kicked by <nick>3:0 <text>
KickSelf 3ú0 you were kicked by <nick>3:0 <text>
Mode 3ú0 <nick> set mode3:0 <modes>

raw.329 
raw 405 3ú0<pre> You have already joined too many channels.
raw.502 3ú0 <me>, you can't change modes for other users.3(04<nick>3)
raw.352 3ú0 03(3<cmode><nick>03)(3<address>03)(3<realname>03) 
raw.301 !script nique.waway
raw.307 !script nique.wreg
raw.310 !script nique.help
raw.311 !script nique.winfo
raw.312 !script nique.wserver
raw.313 !script nique.wop
raw.317 !script nique.wtime
raw.318 !script nique.wend
raw.319 !script nique.wchan
raw.338 !script nique.wtrue
raw.378 !script nique.whost
RAW.314 3ú0 Whowas 3:0 <nick>? 3(0<address> 3*0 <realname>3)
RAW.369
raw.001
raw.376
Raw.250 3ú0 Connections 01:03 <value>
Raw.251 !script nique.lusers
Raw.252 !script nique.lusers2
Raw.253 
Raw.254 !script nique.lusers5
Raw.265 !script nique.lusers4
Raw.266 !script nique.lusers3
Raw.324 !script nique.modes
Raw.332 !script nique.topic
Raw.333 <pre> SetBy 3:0 <nick> 
Raw.391 3ú0 Date 3:0 <date>
Raw.401 3ú0 3(0<nick>3) isn't online.
Raw.403 3ú0 2(0<chan>2) no such channel.
Raw.404 3ú0 Message could not be sent to channel 2(0<chan>2) 
Raw.421 3ú0 Unknown command. 2(0<value>2)
Raw.432 3ú0 2(0<nick>2) invalid nickname.
Raw.433 3ú0 2(0<nick>2) is already in use.
Raw.471 3ú0 2(0<chan>2) is full.
Raw.473 3ú0 2(0<chan>2) cannot be joined 2(0+i2).
Raw.474 3ú0 2(0<chan>2) cannot be joined 2(0address banned2)
Raw.475 3ú0 2(0<chan>2) cannot be joined 2(0+k2)
Raw.482 3ú0 2(0<chan>2) you are not a channel op.
RAW.353 !script nique.namestart
RAW.366 !script nique.namesend
RAW.375 3ú0 Message of the day..
RAW.376 3ú0 End of the /motd
RAW.391 3ú0 Server time01/0date 01:0 <text>

scheme1 pink
scheme2 yellow
scheme3 red
scheme4 Green
scheme5 purple
scheme6 Teal
scheme7 Blue-White
scheme8 Gray
scheme9 Brown
Scheme10 Desert
scheme11 Plain
scheme12 Orange

[scheme1]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 25,25,25 255,187,221 254,184,243 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme2]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 255,255,193 234,234,000 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme3]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 233,039,039 255,089,089 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme4]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 000,151,000 086,191,068 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme5]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 163,013,213 216,121,247 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme6]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 078,154,154 116,186,186 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme7]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 000,000,000 255,255,255 000,000,140 000,000,155 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme8]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 171,171,171 207,201,211 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme9]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 000,000,000 122,104,069 186,168,135 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme10]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 138,139,090 221,219,208 106,116,054 173,164,154 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme11]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 000,000,000 255,255,255 036,040,055 173,164,154 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+

[scheme12]
COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 245,245,245 000,000,000 255,104,032 251,160,079 211,056,056 157,004,000 163,013,213 255,113,045 255,255,157 086,191,068 002,134,114 001,220,198 003,126,250 255,128,192 140,140,140 210,210,210

ClineCHAROWNER 3.
ClineCHAROP 3@
ClineCHARHOP 3%
ClineCHARVOICE 3+
