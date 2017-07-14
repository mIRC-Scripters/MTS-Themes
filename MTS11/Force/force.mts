[mts]
Name Force
MTSVERSION 1.1
VERSION 3.1
AUTHOR [DaRkO]
EMAIL argweb@hotmail.com
DESCRIPTION The Forces of the war ... 
SCRIPT force.mrc
WEBSITE www.argweb.es.vg
Prefix 3»3»
Load <pre> 1Force Theme loaded ...
Unload <pre> 1Force Theme
Colors 0,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1
RGBCOLORS 255,255,255 0,0,0 0,102,172 86,102,126 16,158,113 0,79,144 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208

Join <pre> 2J1o2ining 1(3<nick>2/3<chan>1) (3<address>1)
JoinSelf <pre> 2J1o2ined in 3<chan>
Quit <pre> 2Q1u2it 3<nick> 1(3<address>1)3: <text>
Part <pre> 2P1a2rt 1(3<nick>2/3<chan>1) (3<address>1)3: <text>
Nick <pre> 2N1i2ck 1(3<nick>2/3<newnick>1)
NickSelf <pre> 2N1i2ck 1(3<me>2/3<newnick>1)
Topic <pre> 2T1o2pic change topic 1(3<chan>2/3<text>1)
Mode <pre> 2M1o2de 3<nick> 2set mode :3 <modes> 
INVITE <pre> 2I1n2vite:3 <nick>2 has invited you to join 3<chan>
Kick <pre> 2K1i2ck 3<knick> 2was kicked by :3 <nick> 1(3Razon2/3<text>1)
KickSelf <pre> 2K1i2ck You've been kicked by:3 <nick> 2from3 <chan> 1(3Razon2/3<text>1)
ModeUser <pre> 2M1o2des:3  <modes>
TextQuery  1(3<cmode><nick>1)2 <text>
TextQuerySelf 1(3<cmode><me>1)2 <text>
TextChan 1(3<cmode><nick>1)2 <text>
TextChanSelf 1(3<cmode><me>1)2 <text>
ActionChan 1~3<nick>: <text>
ActionChanSelf 1~3<me>: <text>
Notify <pre> 2N1o2tify: 1(3<nick>1)2 online!:3 <text>
UNotify <pre> 2N1o2tify: offline 1(3<nick>1):3 <text>
NoticeChan <pre> 2N1o2tice 1(3<chan>1):3 <nick> 2<text>
Notice <pre> 2N1o2tice 1(3<nick>1):3 <text>

raw.252 <pre> 2O1p2erators online :3 <value>
raw.254 <pre> 2C1h2annels :3 <value>
raw.265 <pre> 2L1o2cals users :3 <users> 
raw.315 <pre> 2End of 1/who 2for 3<value>
raw.375 <pre> 2Message of the day
raw.376 <pre> 2End of1 /motd
raw.432 <pre> 3<nick> 2: Erroneus Nickname
raw.433 <pre> 3<nick> 2: nick already in use
raw.441 <pre> 3<nick> 2: is not on 3<chan>
raw.442 <pre> 2You're not on 3<chan>
raw.443 <pre> 3<nick> 2: is already on 3<chan>
raw.332 <pre> 2Topic: 3<text>
raw.333 <pre> 2Topic set by:3 <nick> 
raw.311 !script whois_start
raw.319 14\ 2Channels:3 <chan>
raw.312 14\ 2Server:3 <wserver>  <serverinfo> 
raw.301 14\ 2Away:3 <text>
raw.317 !script idle_start <idletime>
raw.318 14¯¯¯¯¯¯¯¯¯/ 1(2End of whois1) 14\¯¯¯¯¯¯¯¯¯

CLineOwner 2
CLineOP 2
CLineHOP 14
CLineVoice 3
CLineMe 2

ClineCharOwner 1
ClineCharOP 3@
ClineCharHOP 3%
ClineCharVoice 3+

FontDefault Tahoma,10
FontChan Tahoma,10

ImageStatus Center forcess.jpg

scheme1 Black 
scheme2 Grey
scheme3 Blue+

[scheme1]
Colors 0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1
RGBCOLORS 0,0,0 255,255,255 0,102,172 86,102,126 16,158,113 0,79,144 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme2]
Colors 15,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1
[scheme3]
Colors 4,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1
RGBCOLORS 255,255,255 0,0,0 0,102,172 86,102,126 95,145,193 0,79,144 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 209,207,207 208,208,208
