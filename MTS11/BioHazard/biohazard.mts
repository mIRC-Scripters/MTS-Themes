[mts]
Name BioHazard
MTSVERSION 1.1
VERSION 1.0
AUTHOR Valkmor
EMAIL valkmor@hotmail.com
DESCRIPTION My script theme ... 
SCRIPT biohazard.mrc
WEBSITE http://www.biohazardcoding.tech.nu
Prefix 3×7ßiø3×
Load <pre> 0,07Bio1Hazard 7Theme 1Loaded
Unload <pre> 0,07Bio1Hazard 7Theme 1Unloaded
Timestamp ON
TimestampFormat <c3>(<c1>HH:nn<c3>)
ImageStatus Center biohazard.jpg
BaseColors 00,15,14,04
COLORS  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

Scheme1 WhiteOrange
Scheme2 BlueOrange

Join <pre> 3J7o3ining 9(7<nick>3/7<chan>9) (3<address>9)
JoinSelf <pre> 3J7o3ined in 7<chan>
Quit <pre> 3Q7u3it 7<nick> 1(3<address>1)3: <text>
Part <pre> 3P7a3rt 9(7<nick>3/7<chan>9) (7<address>9)3: <text>
Nick <pre> 3N7i3ck Changing 9(7<nick>3/7<newnick>9)
NickSelf <pre> 3N7i3ck Changing 9(3<me>3/7<newnick>9)
Topic <pre> 3T7o3pic change topic 1(3<chan>2/3<text>1)
Mode <pre> 3M7o3de 7<nick> 3set mode :7 <modes> 
INVITE <pre> 3I7n3vite:7 <nick>3 has invited you to join 7<chan>
Kick <pre> 3K7i3ck 7<knick> 3was kicked by :7 <nick> 9(7Reason3/7<text>9)
KickSelf <pre> 3K7i3ck You've been kicked by:7 <nick> 3from7 <chan> 9(7Reason3/7<text>9)
ModeUser <pre> 3M7o3des:7  <modes>
TextQuery  9(7<cmode><nick>9)3 <text>
TextQuerySelf 9(7<cmode><me>9)3 <text>
TextChan 9(7<cmode><nick>9)3 <text>
TextChanSelf 9(7<cmode><me>9)3 <text>
ActionChan 9×0<nick>: <text>
ActionChanSelf 9×15<me>: <text>
Notify <pre> 3N7o3tify: 9(7<nick>9)3 online!:7 <text>
UNotify <pre> 3N7o3tify: offline 9(7<nick>9):3 <text>
NoticeChan <pre> 3N7o3tice 9(7<chan>9):3 <nick> 7<text>
Notice <pre> 3N7o3tice 9(7<nick>9):3 <text>

raw.252 <pre> 3O7p3erators online :7 <value>
raw.254 <pre> 3C7h3annels :7 <value>
raw.265 <pre> 3L7o3cals users :7 <users> 
raw.315 <pre> 3End of 7/who 3for 7<value>
raw.375 <pre> 3Message of the day
raw.376 <pre> 3End of7 /motd
raw.432 <pre> 3<nick> 7: Erroneus Nickname
raw.433 <pre> 3<nick> 7: nick already in use
raw.441 <pre> 3<nick> 7: is not on 3<chan>
raw.442 <pre> 3You're not on 7<chan>
raw.443 <pre> 7<nick> 3: is already on 7<chan>
raw.332 <pre> 3Topic: 7<text>
raw.333 <pre> 3Topic set by:7 <nick> 
raw.311 !script whois_start
raw.319 7× 3Channels:7 <chan>
raw.312 7× 3Server:7 <wserver>  <serverinfo> 
raw.301 7× 3Away:7 <text>
raw.317 !script idle_start <idletime>
raw.318 7××××××××× 9[3End of whois9] 7 ×××××××××

CLineOwner 2
CLineOP 14
CLineHOP 14
CLineVoice 14
CLineMe 7
ClineRegular 15

ClineCharOwner 1
ClineCharOP 7@
ClineCharHOP 2%
ClineCharVoice 7+

FontDefault Arial,10
FontQuery Arial,10
FontChan Arial,10


[Scheme1]
BaseColors 01,14,09,14

COLORS  0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,1,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,150,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLineOwner 2
CLineOP 2
CLineHOP 2
CLineVoice 14
CLineMe 7
ClineRegular 1

ClineCharOwner 1
ClineCharOP 7@
ClineCharHOP 2%
ClineCharVoice 7+

ImageStatus Center biohazard1.jpg

[Scheme2]
BaseColors 00,15,07,07
COLORS  13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,15,13,4,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 0,68,118 128,128,128 125,125,125

CLineOwner 2
CLineOP 14
CLineHOP 14
CLineVoice 5
CLineMe 7
ClineRegular 0

ClineCharOwner 1
ClineCharOP 7@
ClineCharHOP 2%
ClineCharVoice 7+

ImageStatus Center biohazard.jpg